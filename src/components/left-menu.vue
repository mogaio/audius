<script>
import { mapMutations, mapState, mapActions } from 'vuex';

import PlayListManager from './play-list-manager.vue';
import MatrixRadioManager from './matrix-radio-manager.vue';

export default {
	components: {
		PlayListManager,
		MatrixRadioManager,
	},
	methods: {
		...mapMutations(['toggleLeftMenu', 'setLeftMenuTab']),
		...mapActions(['initMatrix']),
	},
	computed: {
		...mapState(['showLeftMenu', 'leftMenuTab', 'matrixEnabled']),
	},
};
</script>

<template>
<div
	class="left-menu"
	v-bind:class="{ active: showLeftMenu }">
	<div class="nav-handle" title="Playlists" @click="toggleLeftMenu">
		<div class="nav-handle__tab"></div>
		<span class="wmp-icon-queue_music"></span>
	</div>
	<ul class="main-right__tabs" v-if="matrixEnabled">
		<li
			v-on:click="setLeftMenuTab('playList')"
			v-bind:class="{ active: leftMenuTab == 'playList' }">Playlist</li>
		<li
			v-on:click="setLeftMenuTab('radio');initMatrix()"
			v-bind:class="{ active: leftMenuTab == 'radio' }">Radio</li>
	</ul>
	<div class="left-menu__wrapper">
		<play-list-manager v-show="leftMenuTab == 'playList'"></play-list-manager>
		<matrix-radio-manager v-show="leftMenuTab == 'radio'"></matrix-radio-manager>
	</div>
</div>
</template>

<style lang="sass?indentedSyntax">
@import '../sass/vars'
@import '../sass/color'

.left-menu
	position: relative
	width: 25vw
	margin-left: -24.5vw
	transition: all $transition-time
	background: $color-aluminium-dark
	border-right: 1px solid $color-aluminium
	display: flex
	flex-direction: column
	&.active
		margin-left: 0

.left-menu__wrapper
	height: 100%
	overflow-y: auto
	&::-webkit-scrollbar-thumb
	  background: $color-athensgrey
	&::-webkit-scrollbar-track
		background: $color-aluminium-dark



.nav-handle
	position: absolute
	top: calc(50% - #{$touch-size-small/2})
	right: -2em
	cursor: pointer
	&:hover
		span
			color: $color-aluminium-dark
		.nav-handle__tab
			background: $color-catskillwhite

	span
		color: $color-catskillwhite
		width: $touch-size-small
		height: $touch-size-small

.nav-handle__tab
	height: 2em
	width: 2.5em
	position: absolute
	top: 0.1em
	left: 0
	transform: rotate(90deg) perspective(2em) rotateX(30deg)
	background: $color-aluminium-dark
	border: 1px solid $color-aluminium
	border-bottom: 0
.left-menu__tag-name-input
	height: $touch-size-extratiny
</style>


