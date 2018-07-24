import { webScraper } from '../../utils';

/* eslint-disable no-param-reassign */
export const mutations = {
	// Web Scraper
	// ---
	recoverState_webScraper(state, recoveredState) {
		Object.assign(state, recoveredState);
	},
	addWebScraper(state, name) {
		if (!name) {
			let counter = 1;
			name = `Channel ${counter}`;
			while (name in state.sources) {
				name = `Channel ${counter++}`;
			}
		}

		state.sources[name] = { playList: [], playedMedia: {}, settings: {}, archive: [] };
		if (!state.sourcesOrdered.includes(name)) state.sourcesOrdered.push(name);
		state.currentWebScraper = name;
	},
	deleteWebScraper(state, id) {
		delete state.sources[id];
		state.sourcesOrdered = state.sourcesOrdered.filter(n => n !== id);
	},
	initScraperSuccess(state, id) {
		state.sourcesInitialized[id] = true;
	},
	addUrlPattern(state, { id, urlPattern }) {
		const urls = state.sources[id].settings.urls || [];
		const { settings } = state.sources[id];
		if (!urls.some(p => p === urlPattern)) {
			settings.urls = [
				...urls,
				{ url: urlPattern, numPages: webScraper.patternToUrls(urlPattern).length },
			];
			settings.numPages = settings.urls.reduce((acc, { numPages }) => acc + numPages, 0);
		}
		state.sources = Object.assign({}, state.sources);
	},
	setShowWatched(state, { id, toggleState }) {
		state.showWatched[id] = toggleState;
		state.showWatched = Object.assign({}, state.showWatched);
	},
	updateWebScraper(state, { id, values }) {
		state.sources[id] = Object.assign({}, state.sources[id], values);
		state.sources = Object.assign({}, state.sources);
	},
	renameWebScraper(state, { newName, oldName }) {
		const itemsObject = Object.assign({}, state.sources);
		itemsObject[newName] = itemsObject[oldName];
		const itemsOrdered = [...state.sourcesOrdered];
		itemsOrdered[itemsOrdered.indexOf(oldName)] = newName;
		delete itemsObject[oldName];
		state.sources = itemsObject;
		state.sourcesOrdered = itemsOrdered;
	},
};
