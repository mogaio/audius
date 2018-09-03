/* eslint no-new: "off" */
import Vue from 'vue';

import { migrate2012 } from '../utils/migrate.2.0.12';
import { indexDB, cleanWindowLocation, getParameterByName } from '../utils';
import { store } from '../vuex/store';
import './keyshorts';
import WebApp from '../components/web-app.vue';

function isMobile() {
	const w = window;
	const d = document;
	const e = d.documentElement;
	const g = d.getElementsByTagName('body')[0];
	const x = w.innerWidth || e.clientWidth || g.clientWidth;
	const y = w.innerHeight || e.clientHeight || g.clientHeight;
	return x < y * 0.75;
}

const startConditions = { started: false };
function start(options) {
	Object.assign(startConditions, options);
	if (
		((startConditions.recoverdState && startConditions.contentLoaded) || startConditions.timeout) &&
		!startConditions.started
	) {
		startConditions.started = true;
		new Vue({
			el: '#app',
			render: h => h(WebApp),
			store,
		});
	}
}

indexDB
	.init()
	.then(() => indexDB.recoverState())
	.then(recoveredState => {
		// Recover the last saved state from IndexDb
		store.commit('recoverState', recoveredState);

		migrate2012(store, recoveredState); // migration, remove at version 2.0.18!!!

		// Detect if this a mobile device (before rendering the UI).
		store.commit('setIsMobile', isMobile());
		[('resize', 'orientationchange')].forEach(eventName => {
			window.addEventListener(
				eventName,
				() => {
					store.commit('setIsMobile', isMobile());
				},
				true
			);
		});

		// Listen to events from the audius extension.
		// The events contain vuex commands and the according data.
		// We can therefore delay them directly to the vuex store.
		window.addEventListener(
			'audius',
			event => {
				// window.console.log('Received extension event ', event);
				if (event.detail && event.detail.vuex) {
					store[event.detail.vuex](event.detail.type, event.detail.data);
				}
			},
			false
		);
		// Try to find the audius extension so it can trigger the `setExtensionAvilable` mutation.
		window.dispatchEvent(
			new CustomEvent('audiusExtensionHandshake')
		);

		// Detect if the URL contains the import parameter.
		// If yes then add this to the store. This will trigger the import
		// modal to render once rendering is triggered.
		const url = getParameterByName('import');
		if (url) {
			store.commit('setPendingImportURL', {
				url,
				name: getParameterByName('title'),
				type: getParameterByName('type'),
			});
		}
		if (getParameterByName('showImgur')) {
			store.commit('selectMediaSource', { type: 'webScraper', id: 'Imgur' });
		}
		// Remove all URL paramters from URL bar.
		cleanWindowLocation();

		start({ recoverdState: true });
	})
	.catch(error => {
		store.commit('error', { error: `Error starting Audius. ${error}`, timeout: 15000 });
	});

document.addEventListener('DOMContentLoaded', () => {
	start({ contentLoaded: true });
});

setTimeout(() => {
	start({ timeout: true });
}, 2000);

try {
	if (PRODUCTION && 'serviceWorker' in navigator) {
		window.addEventListener('load', () => {
			navigator.serviceWorker.register('./service-worker.js');
		});
	}
} catch (e) {
	console.log('dev mode, no service worker');
}
