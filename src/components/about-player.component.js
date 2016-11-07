import Vue from 'vue/dist/vue';
import './about-player.component.sass';

Vue.component('about-player', {
	template: `
<div class="wmp-about">
	<h2>Usage</h2>
	<p>
		Keyboard shortcuts ... are planned.
	</p>
	<h2>Install as app</h2>
	<p>
		<b>Chrome desktop:</b>
		<ol>
			<li> At the top right, click <i>More</i> (Settings Icon). </li>
			<li> Click <i>More Tools</i>. </li>
			<li> Add the app:<br>
			Windows users: Click <i>Add to taskbar</i>.<br>
			Linux users: Click <i>Add to desktop</i>.<br>
			Chromebook users: Click <i>Add to shelf</i>. </li>
		</ol>
		<b>Chrome android:</b><br>
		Tap the menu button and tap <i>Add to homescreen</i>.
	</p>
	<p>
		<b>Local HTML5:</b><br>
		Since this player is a pure HTML5 app without server side code you can simply download the HTML and JS code and run it from a local file. You can also download the latest version from the source code repository at github (see <a href="#source-code">Source code</a>). Use the web version to always get the latest updates automatically. A word of caution: I recognized that using this app from a local file block$ a lot of videos on YouTube :(
	</p>
	<p>
		Web apps are true freedom! Support an open and liberal web without geo borders and login screens.
	</p>
	<h2>Extension</h2>
	<p>The extension should have been the actual player since the original idea was to create an extension with a media player for <i>web.whatsapp</i>. This however failed since the conten security policy does not allow the embdding of youtube videos. That meant no player, no music.</p>
	<h2 id="source-code">Source code</h2>
	<p>
		The source code for this project is located at <a href="https://github.com/select/audius" title="Source code on select@github audius">https://github.com/select/audius</a>.
	</p>
	<p>
		If you like this project give it a star ★ and contribute some code!
	</p>
	<h2>Other Projects</h2>
	Here are some other fun projects I created this year.
	<p>
		<ul>
			<li><a href="https://github.com/select/boomnext/">Boom, next video!</a></li>
			<li><a href="http://emoji-text.com/" target="_blank">ッ Emoji-text</a></li>
			<li>...</li>
		</ul>
	</p>
	<h2>Motivation</h2>
	<p>
		You are writing another music player, seriously? That's what I thought a lot when creating this, but you know ...
	</p>
	<h2>Credits</h2>
	<p>
		This work is inspired by the incredible <a href="https://www.reddit.com/r/streamus/">Streamus</a> app.<br>
		It was created with:
		<ul>
			<li>VueJs</li>
			<li>Redux</li>
			<li>Icomoon</li>
			<li>Google material icons</li>
			<li>Webpack</li>
			<li>LivingStyleGuide</li>
		</ul>
	</p>
</div>`,
});