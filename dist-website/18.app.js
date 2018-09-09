(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{153:function(e,t,n){"use strict";n.r(t);var r=n(494),i=n(249);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var o=n(0),u=Object(o.a)(i.default,r.a,r.b,!1,null,null,null);u.options.__file="vimeo-player.vue",t.default=u.exports},249:function(e,t,n){"use strict";n.r(t);var r=n(250),i=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);t.default=i.a},250:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),a=n(2);t.default={created:function(){var e=this;this.subscriptions=[this.$store.watch(function(e){return e.currentMedia},function(){"vimeo"===e.currentMedia.type?e.player.loadVideo(e.currentMedia.id).then(function(){if(e.currentMedia.start)return e.player.setCurrentTime(e.currentMedia.start).then()}).then(function(){return e.player.play().then()}).catch(function(t){e.error("Could not load vimeo video: "+t)}):e.player&&(e.player.pause().then(function(){}),e.player.unload().then())}),this.$store.watch(function(e){return e.skipToTime},function(){"vimeo"===e.currentMedia.type&&e.player.setCurrentTime(e.skipToTime)}),this.$store.watch(function(e){return e.isPlaying},function(){"vimeo"===e.currentMedia.type&&e.isPlaying?e.player.play().then(function(){}):e.player.pause().then(function(){})})]},beforeDestroy:function(){this.subscriptions.forEach(function(e){e()})},mounted:function(){this.initPlayer()},computed:(0,i.mapState)(["currentMedia","mute","skipToTime","isPlaying"]),methods:r({},(0,i.mapMutations)(["play","pause","setCurrentTime","error"]),(0,i.mapActions)(["nextVideo"]),{clearInterval:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){clearInterval(this.timeInterval),this.timeInterval=null}),initPlayer:function(){var e=this;this.player||(0,a.injectScript)("https://player.vimeo.com/api/player.js").then(function(){e.player=new window.Vimeo.Player(document.querySelector(".vimeo-player"),{id:e.currentMedia.id,autoplay:!0}),e.player.ready().then(function(){return e.player.loadVideo(e.currentMedia.id)}).then(function(){setTimeout(function(){e.player.play()},500)}),e.player.on("play",function(){e.timeInterval=setInterval(function(){e.player.getCurrentTime().then(function(t){e.setCurrentTime(t)})},1e3)}),e.player.on("pause",function(){e.clearInterval()}),e.player.on("ended",function(){e.clearInterval(),e.nextVideo()})}).catch(function(t){e.error(t)})}})}},494:function(e,t,n){"use strict";var r=function(){var e=this.$createElement;this._self._c;return this._m(0)},i=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"youtube-player"},[t("iframe",{staticClass:"vimeo-player",attrs:{title:"Vimeo player",src:"https://player.vimeo.com/video/76979871",width:"100%",height:"100%",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})])}];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i})}}]);