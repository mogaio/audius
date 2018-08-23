(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,t,n){"use strict";n.r(t);var r=n(478),s=n(208);for(var a in s)"default"!==a&&function(e){n.d(t,e,function(){return s[e]})}(a);n(336);var i=n(0),o=Object(i.a)(s.default,r.a,r.b,!1,null,null,null);t.default=o.exports},208:function(e,t,n){"use strict";n.r(t);var r=n(209),s=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);t.default=s.a},209:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(1),a=n(2),i=c(n(78)),o=c(n(333));function c(e){return e&&e.__esModule?e:{default:e}}var u={},d=!1;t.default={components:{VideoItem:i.default,ChatMessage:o.default},data:function(){return{messageText:""}},mounted:function(){var e=this;this.$store.watch(function(e){return e.matrix.chatLog},function(){var t=e.currentMediaSource.id;!0===d&&e._chatLog.length!==u[t]&&(d=!1,e.$refs.chatLog.scrollTop=e.$refs.chatLog.scrollHeight,u[t]=e._chatLog.length)});var t=this.$el.querySelector(".play-list");t.addEventListener("scroll",function(){0===t.scrollTop&&e.matrixLoadMore(e.currentMediaSource.id)})},computed:r({},(0,s.mapState)(["currentMediaSource","currentMedia","isPlaying","paginationIndex","isLoading"]),(0,a.mapModuleState)("matrix",["chatLog","credentials","membersIndex","sources"]),{_chatLog:function(){return(this.chatLog[this.currentMediaSource.id]||[]).filter(function(e){return!e.parentEvent})}}),methods:r({},(0,s.mapMutations)(["setMainLeftTab"]),(0,s.mapActions)(["matrixLoadMore","matrixSendText"]),{send:function(){this.messageText&&(this.matrixSendText({roomId:this.currentMediaSource.id,message:this.messageText}),d=!0,this.messageText="")}})}},210:function(e,t,n){"use strict";n.r(t);var r=n(211),s=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);t.default=s.a},211:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.default={props:{video:Object,userIsAuthor:Boolean,membersIndex:Object},computed:{event:function(){return this.video},sender:function(){return this.membersIndex[this.event.sender]&&this.membersIndex[this.event.sender].name||this.event.sender},nameColor:function(){return this.membersIndex[this.event.sender]&&this.membersIndex[this.event.sender].nameColor},createdAt:function(){return this.event.createdAt},_createdAt:function(){var e=new Date(this.createdAt);return e.getHours()+":"+(0,r.zeroPad)(e.getMinutes(),2)},messages:function(){var e=this.event,t=[e.body];for(console.log("currentEvent.body",e.body);e.childEvent;)e=e.childEvent,t.push(e.body);return console.log("children",t),t}}}},212:function(e,t,n){},213:function(e,t,n){},333:function(e,t,n){"use strict";n.r(t);var r=n(474),s=n(210);for(var a in s)"default"!==a&&function(e){n.d(t,e,function(){return s[e]})}(a);n(334);var i=n(0),o=Object(i.a)(s.default,r.a,r.b,!1,null,null,null);t.default=o.exports},334:function(e,t,n){"use strict";var r=n(212);n.n(r).a},336:function(e,t,n){"use strict";var r=n(213);n.n(r).a},474:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"matrix-chat-message",class:{"matrix-chat-message--author":e.userIsAuthor}},[n("div",{staticClass:"matrix-chat-message__container"},[n("div",{staticClass:"matrix-chat-message__header",style:{color:e.nameColor}},[e._v("\n\t\t\t"+e._s(e.sender)+"\n\t\t")]),e._v(" "),n("div",{staticClass:"matrix-chat-message__body"},e._l(e.messages,function(t){return n("div",[n("span",{domProps:{innerHTML:e._s(t)}}),e._v(" "),e.userIsAuthor?n("div",{staticClass:"matrix-chat-message__delete"},[n("span",{staticClass:"wmp-icon-close"})]):e._e()])})),e._v(" "),n("div",{staticClass:"matrix-chat-message__footer"},[e._v(e._s(e._createdAt))])])])},s=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return s})},478:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"matrix-chat"},[n("span",{staticClass:"wmp-icon-speaker_notes_off matrix-chat__off",on:{click:function(t){e.setMainLeftTab("playList")}}}),e._v(" "),n("div",{ref:"chatLog",staticClass:"play-list media-list"},[e._chatLog&&e._chatLog.length?e._e():n("div",{staticClass:"play-list__greeting"},[e._v("\n\t\t\tNothing found. Click load more or add from search or playlists.\n\t\t")]),e._v(" "),n("div",{staticClass:"play-list__load-more",on:{click:function(t){e.matrixLoadMore(e.currentMediaSource.id)}}},[e._v("\n\t\t\t… load more (Page "+e._s(e.paginationIndex[e.currentMediaSource.id]||0)+")\n\t\t\t"),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isLoading[e.currentMediaSource.id],expression:"isLoading[currentMediaSource.id]"}],staticClass:"loader"})]),e._v(" "),n("ul",e._l(e._chatLog,function(t,r){return n("text"===t.type?"chat-message":"video-item",{key:r,tag:"component",attrs:{userIsAuthor:t.sender===e.credentials.userId,userIsAdmin:e.sources[this.currentMediaSource.id].isAdmin,video:t,membersIndex:e.membersIndex,isPlaying:"text"!==t.type&&e.isPlaying&&e.currentMedia.id==t.id}})}))]),e._v(" "),n("div",{staticClass:"matrix-chat__footer"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.messageText,expression:"messageText"}],attrs:{type:"text",placeholder:"… your message"},domProps:{value:e.messageText},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.send(t):null},input:function(t){t.target.composing||(e.messageText=t.target.value)}}}),e._v(" "),n("span",{staticClass:"wmp-icon-send",on:{click:e.send}})])])},s=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return s})}}]);