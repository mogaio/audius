// Matrix
export const state = {
	matrixLoggedIn: false,
	currentMatrixRoom: null,
	sources: {},
	chatLog: {},
	directMessages: {},
	roomSearchResults: [],
	membersIndex: {},
	broadcastRoom: { membership: 'not avialable' },
	sendBroadcast: false,
	sourcesOrdered: [],
	createMatrixRoomModal: false,
	showMatrixRoomDirectory: false,
	lastPageReached: {},
	showMatrixLoginModal: false,
	showMatrixConsentModal: false,
	matrixConsentMessage: '',
	hasCredentials: false,
	isGuest: null,
	credentials: {
		accessToken: '',
		userId: '',
		deviceId: '',
	},
	publicRooms: [],
};
