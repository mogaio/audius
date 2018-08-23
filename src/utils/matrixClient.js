import Matrix from 'matrix-js-sdk';

export const matrixClient = {
	client: null,
	firstEvent: {},
	syncFailCount: 0,
	paginate(roomId) {
		const room = this.client.getRoom(roomId);
		if (!room) throw { errcode: 'PAGINATE_NO_ROOM' };
		const tls = room.getTimelineSets()[0];
		// this._timelineSet.getLiveTimeline()
		return this.client
			.getEventTimeline(tls, this.firstEvent[roomId])
			.then(et => this.client.paginateEventTimeline(et, { backwards: true }));
	},
	login(credentials, isGuest, dispatch, commit) {
		return new Promise(resolve => {
			this.client = Matrix.createClient({
				...credentials,
				baseUrl: 'https://matrix.org',
				// guest: isGuest,
				timelineSupport: true,
			});

			this.client.on('Room.timeline', event => {
				const roomId = event.event.room_id;
				const sender = event.sender.userId;
				const createdAt = event.event.origin_server_ts;
				if (!(roomId in this.firstEvent)) this.firstEvent[roomId] = event.event.event_id;
				const baseEvent = {
					roomId,
					sender,
					createdAt,
					eventId: event.event.event_id,
				};
				if (event.event.type === 'audiusMedia') {
					// legacy events, remove 2019
					dispatch('parseMatrixMessage', Object.assign(event.event.content, baseEvent));
				} else if (event.event.type === 'org.rockdapus.audius') {
					if (event.event.content.type === 'media') {
						dispatch('parseMatrixMessage', Object.assign(event.event.content.data, baseEvent));
					}
				} else if (event.event.type === 'm.room.message') {
					const { body } = event.event.content;
					dispatch('parseMatrixMessage', Object.assign({ body, type: 'text' }, baseEvent));
				}
			});

			this.client.on('sync', (syncState, a, event) => {
				if (syncState === 'ERROR') {
					if (event) {
						commit('error', `${event.error.data.error}`);
						if (event.error.data.errcode === 'M_UNKNOWN_TOKEN') {
							commit('toggleMatrixLoginModal', true);
						}
						this.stop();
						return;
					}
					if (this.syncFailCount >= 3) {
						commit('error', 'Could not connect to matrix more than 3 time. Disconnecting.');
						this.stop();
					} else {
						commit(
							'error',
							`Could not connect to matrix server. ${
								this.syncFailCount ? 'Attempt ' + this.syncFailCount : ''
							}`
						);
						this.syncFailCount++;
					}
				} else if (syncState === 'SYNCING') {
					// update UI to remove any "Connection Lost" message
					this.syncFailCount = 0;
				} else if (syncState === 'PREPARED') {
					resolve(this.client.getRooms());
				}
			});

			if (isGuest === undefined || isGuest) this.client.setGuest(true);
			this.client.startClient({ initialSyncLimit: 20 });
		});
	},
	// return promise
	register(options) {
		const { username, password, sessionId, auth, bindThreepids, guestAccessToken } = options;
		return this.client.register(
			username,
			password,
			sessionId,
			auth,
			bindThreepids,
			guestAccessToken
		);
	},
	stop() {
		this.client.stopClient();
	},
	getAvatarUrl(userId) {
		return this.client.getProfileInfo(userId, 'avatar_url').then(result => {
			if (result.avatar_url) return this.client.mxcUrlToHttp(result.avatar_url, 100);
			return null;
		});
	},
	isGuest() {
		return this.client.isGuest();
	},
	joinRoom(roomIdOrAlias) {
		return this.client.joinRoom(roomIdOrAlias);
	},
	leaveRoom(roomIdOrAlias) {
		return this.client.leave(roomIdOrAlias);
	},
	sendEvent(roomId, media) {
		return this.client.sendEvent(roomId, 'org.rockdapus.audius', { type: 'media', data: media });
	},
	redactEvent(roomId, eventId) {
		return this.client.redactEvent(roomId, eventId);
	},
	sendMessage(roomId, media) {
		return this.client.sendTextMessage(roomId, media);
	},
	setRoomAllowGuests(roomId, toggleState) {
		return this.client.sendStateEvent(roomId, 'm.room.guest_access', {
			guest_access: toggleState ? 'can_join' : 'forbidden',
		});
	},
	setRoomHistoryVisibility(roomId, state) {
		// m.room.history_visibility
		if (['invited', 'joined', 'shared', 'world_readable'].includes(state)) {
			throw `setRoomHistoryVisibility unknown state ${state}`;
		}
		return this.client.sendStateEvent(roomId, 'm.room.history_visibility', {
			history_visibility: state,
		});
	},
	setRoomName(roomId, name) {
		return this.client.setRoomName(roomId, name);
	},
	setRoomVisibility(roomId, setPrivate = true) {
		return this.client.setRoomDirectoryVisibility(roomId, setPrivate ? 'private' : 'public');
	},
	// setRoomTag(roomId, tagName) {
	// 	return this.client.setRoomTag(roomId, tagName, {});
	// },
	// deleteRoomTag(roomId, tagName) {
	// 	return this.client.deleteRoomTag(roomId, tagName);
	// },
	createRoom(options) {
		return this.client.createRoom(
			Object.assign(options, {
				initial_state: [
					{
						type: 'm.room.guest_access',
						state_key: '',
						content: { guest_access: 'can_join' },
					},
					{
						type: 'm.room.history_visibility',
						state_key: '',
						content: { history_visibility: 'world_readable' },
					},
				],
				// room_alias_name: 'blaa-audius',
				// visibility: 'public', // or 'private'
				// invite: [
				// 	'@bllakd:matrix.org',
				// 	'@user1:matrix.org',
				// ],
				// name: 'Blaaa [Audius]',
				// topic: 'Join this room with https://audius.rockdapus.org',
			})
		);
	},
	listPublicRooms() {
		return this.client.publicRooms({
			filter: {
				generic_search_term: 'audius',
			},
		});
	},
	getCredentialsWithPassword(username, password) {
		return new Promise(resolve => {
			Matrix.createClient('https://matrix.org')
				.loginWithPassword(username, password)
				.then(credentials => {
					resolve({
						accessToken: credentials.access_token,
						userId: credentials.user_id,
						deviceId: credentials.device_id,
					});
				});
		});
	},
	getCredentials() {
		return new Promise(resolve => {
			const client = Matrix.createClient('https://matrix.org');
			client.registerGuest().then(credentials => {
				resolve({
					accessToken: credentials.access_token,
					userId: credentials.user_id,
					deviceId: credentials.device_id,
				});
			});
		});
	},
};

window.matrixClient = matrixClient;
