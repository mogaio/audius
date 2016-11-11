import Vue from 'vue/dist/vue';
import Sortable from 'sortablejs';
import store from '../store';
import Actions from '../actions';
import './play-list.component.sass';
import importPlaylist from '../utils/importPlaylist';
import { debounce } from '../utils/debounce';
import isElementInViewport from '../utils/isElementInViewport';
import * as db from '../utils/indexDB';

Vue.component('play-list', {
	data() {
		const mediaPlayer = store.getState().mediaPlayer;
		return {
			mediaPlayer,
			currentSong: mediaPlayer.mediaId,
			website: store.getState().website,
			store,
			Actions,
			tabs: ['queue', 'search', 'info', 'about'],
		};
	},
	created() {
		document.addEventListener('keydown', (event) => {
			if (event.target.tagName.toLowerCase() !== 'input' && event.key === 'j') {
				this.toggleJump(true);
				setTimeout(() => {document.querySelector('.play-list-footer__search-input').value = '';}, 100);
			}
		}, false);

		this.unsubscribe = store.subscribe(() => {
			this.mediaPlayer = store.getState().mediaPlayer;
			this.website = store.getState().website;
			if (this.currentSong !== this.mediaPlayer.mediaId) {
				Vue.nextTick(() => {
					const el = document.querySelector('.play-list li.active');
					if (!isElementInViewport(el)) el.scrollIntoView({ block: 'start', behavior: 'smooth' });
				});
				this.currentSong = this.mediaPlayer.mediaId;
			}
		});
	},
	mounted() {
		const mediaListEl = document.querySelector('.play-list .media-list');
		Sortable.create(mediaListEl, {
			animation: 250,
			scrollSpeed: 20,
			handle: '.media-list__thumbnail',
			// Element dragging ended
			onUpdate: (event) => {
				store.dispatch(Actions.movePlayListMedia(
					event.item.dataset.id,
					mediaListEl.childNodes[event.newIndex + 1].dataset.id
				));
				db.setPlayList();
			},
		});
	},
	beforeDestroy() {
		this.unsubscribe();
	},
	methods: {
		exportPlayList() {
			// api_option=paste&api_paste_private=0&api_paste_code=llkjsdfljsdf
			// https://developer.github.com/v3/gists/#create-a-gist
			// curl -X POST \--data-binary '{"files": {"file1.txt": {"content": "Hello, SO"}}}' \https://api.github.com/gists
			const data = {
				AudiusDump: true,
				playList: this.mediaPlayer.playList,
				entities: this.mediaPlayer.entities,
			};
			const element = document.createElement('a');
			element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(JSON.stringify(data))}`);
			element.setAttribute('download', 'audius.data.json');
			element.style.display = 'none';
			document.body.appendChild(element);
			element.click();
			document.body.removeChild(element);
		},
		importPlayList(event) {
			const files = event.target.files || event.dataTransfer.files;
			Array.from(files).forEach((file) => {
				const reader = new FileReader();
				reader.onload = (event2) => {
					importPlaylist(event2.target.result);
				};
				reader.readAsText(file);
			});
		},
		searchJump: debounce((event) => {
			store.dispatch(Actions.filterPlayList(event.target.value));
		}, 500),
		clear() {
			if (!this.mediaPlayer.filterQuery) this.toggleJump(false);
			clearTimeout(this.blurTimer);
			event.stopPropagation();
			document.querySelector('.play-list-footer__search-input').value = '';
			document.querySelector('.play-list-footer__search-input').focus();
			store.dispatch(Actions.filterPlayList(''));
		},
		delayBlur() {
			if (!this.mediaPlayer.filterQuery) {
				this.blurTimer = setTimeout(() => {
					store.dispatch(Actions.toggleJump(false));
				}, 800);
			}
		},
		stopPropagation() {
			if (this.website.showJump) event.stopPropagation();
		},
		toggleJump(state) {
			store.dispatch(Actions.toggleJump(state));
			Vue.nextTick(() => {
				document.querySelector('.play-list-footer__search-input').focus();
			});
		},
	},
	computed: {
		filteredPlaylist() {
			if (!this.mediaPlayer.filterQuery) return this.mediaPlayer.playList;
			return this.mediaPlayer.playList.filter(id =>
				this.mediaPlayer
					.entities[id]
					.title
					.toLowerCase()
					.indexOf(this.mediaPlayer.filterQuery) !== -1
				);
		},
	},
	template: `
<div class="play-list">
	<h2 v-if="!mediaPlayer.playList.length">
		The playlist is empty <br> ... add some music <br>┐(・。・┐) ♪
	</h2>
	<ul class="media-list">
		<video-item
			v-for="id in filteredPlaylist"
			:video="mediaPlayer.entities[id]"
			:isPlaying="mediaPlayer.isPlaying && mediaPlayer.entities[id] && (mediaPlayer.mediaId == mediaPlayer.entities[id].id)"></video-item>
	</ul>
	<div class="play-list-footer">
		<ul v-show="!website.showJump">
			<li class="play-list-footer--info">
				{{mediaPlayer.playList.length}} Songs
			</li>
			<li>
				<input type="file" id="import-playlist" v-on:change="importPlayList" title="Import playlist from file">
				<label for="import-playlist">Import </label>
			</li>
			<li v-on:click="exportPlayList" title="Export playlist to file">Export</li>
		</ul>

		<div
			class="play-list-footer__search"
			v-bind:class="{ active: website.showJump }"
			v-on:click="toggleJump()">
			<span class="wmp-icon-search" title="[j] Jump to file"></span>
			<input
					type="text"
					class="play-list-footer__search-input"
					placeholder="Jump to"
					v-on:click="stopPropagation"
					v-on:keyup="searchJump"
					v-on:keyup.esc="clear"
					v-on:blur="delayBlur"
					v-show="website.showJump"
					debounce="500">
			<span
				class="wmp-icon-close"
				v-show="website.showJump"
				v-on:click="clear"></span>
		</div>
	</div>
</div>`,
});
