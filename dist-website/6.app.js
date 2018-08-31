(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(t,e,n){"use strict";n.r(e);var a=n(479),i=n(208);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n(339);var s=n(0),o=Object(s.a)(i.default,a.a,a.b,!1,null,null,null);o.options.__file="matrix-chat.vue",e.default=o.exports},208:function(t,e,n){"use strict";n.r(e);var a=n(209),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e.default=i.a},209:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},i=u(n(4)),r=n(1),s=n(2),o=u(n(80)),c=u(n(336));function u(t){return t&&t.__esModule?t:{default:t}}var d=null,l=0,f=!1;e.default={components:{VideoItem:o.default,ChatMessage:c.default},data:function(){return{messageText:""}},beforeUpdate:function(){var t=this.$refs.chat;f=t.scrollHeight-t.scrollTop-t.offsetHeight-100<0},mounted:function(){var t=this,e=this.chatLog[this.currentMediaSource.id]||[];d=e.length&&e[e.length-1].createdAt,l=this.$refs.chat.offsetHeight;var n=this.$refs.chat;i.default.nextTick(function(){t.$refs.chat.scrollTo(0,n.scrollHeight)}),this.$store.watch(function(t){return t.matrix.chatLog},function(){var e=t.chatLog[t.currentMediaSource.id],a=e[e.length-1],r=a.createdAt,s=a.sender;d!==r?i.default.nextTick(function(){(f||s===t.credentials.userId)&&(n.scrollTo({behavior:"smooth",top:n.scrollHeight}),l=n.scrollHeight)}):i.default.nextTick(function(){var t=n.scrollHeight,e=t-l;n.scrollTop=e,setTimeout(function(){l=t},200)}),d=r}),n.addEventListener("wheel",this.scrolled),n.addEventListener("scroll",this.scrolled)},computed:a({},(0,r.mapState)(["currentMediaSource","currentMedia","isPlaying","paginationIndex","isLoading"]),(0,s.mapModuleState)("matrix",["chatLog","credentials","membersIndex","sources"]),{_chatLog:function(){return(this.chatLog[this.currentMediaSource.id]||[]).filter(function(t){return!t.parentEvent})}}),methods:a({},(0,r.mapMutations)(["setMainLeftTab"]),(0,r.mapActions)(["matrixLoadMore","matrixSendText"]),{scrolled:function(){0===this.$refs.chat.scrollTop&&this.matrixLoadMore(this.currentMediaSource.id)},send:function(){this.messageText&&(this.matrixSendText({roomId:this.currentMediaSource.id,message:this.messageText}),this.messageText="")}})}},210:function(t,e,n){"use strict";n.r(e);var a=n(211),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e.default=i.a},211:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2);e.default={props:{video:Object,isAuthor:Boolean,isAdmin:Boolean,membersIndex:Object},computed:{event:function(){return this.video},sender:function(){var t=this.event.sender;return this.membersIndex[t]||{name:t,nameColor:""}},_createdAt:function(){var t=new Date(this.event.createdAt);return t.getHours()+":"+(0,a.zeroPad)(t.getMinutes(),2)},messages:function(){for(var t=this.event,e=[t.body];t.childEvent;)t=t.childEvent,e.push(t.body);return e}}}},212:function(t,e,n){},213:function(t,e,n){},336:function(t,e,n){"use strict";n.r(e);var a=n(488),i=n(210);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n(337);var s=n(0),o=Object(s.a)(i.default,a.a,a.b,!1,null,null,null);o.options.__file="matrix-chat-message.vue",e.default=o.exports},337:function(t,e,n){"use strict";var a=n(212);n.n(a).a},339:function(t,e,n){"use strict";var a=n(213);n.n(a).a},479:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"matrix-chat"},[n("div",{ref:"chat",staticClass:"play-list media-list"},[t._chatLog&&t._chatLog.length?t._e():n("div",{staticClass:"play-list__greeting"},[t._v("\n\t\t\tNothing found. Click load more or add from search or playlists.\n\t\t")]),t._v(" "),n("div",{staticClass:"play-list__load-more",on:{click:function(e){t.matrixLoadMore(t.currentMediaSource.id)}}},[t._v("\n\t\t\t… load more (Page "+t._s(t.paginationIndex[t.currentMediaSource.id]||0)+")\n\t\t\t"),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading[t.currentMediaSource.id],expression:"isLoading[currentMediaSource.id]"}],staticClass:"loader"})]),t._v(" "),n("ul",{ref:"list"},t._l(t._chatLog,function(e,a){return n("text"===e.type?"chat-message":"video-item",{key:a,tag:"component",attrs:{isAuthor:e.sender===t.credentials.userId,isAdmin:t.sources[t.currentMediaSource.id].isAdmin,video:e,membersIndex:t.membersIndex,isPlaying:"text"!==e.type&&t.isPlaying&&t.currentMedia.id==e.id}})}))]),t._v(" "),n("div",{staticClass:"matrix-chat__footer"},[n("span",{staticClass:"wmp-icon-speaker_notes_off matrix-chat__off",on:{click:function(e){t.setMainLeftTab("playList")}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.messageText,expression:"messageText"}],attrs:{type:"text",placeholder:"… your message"},domProps:{value:t.messageText},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.send(e):null},input:function(e){e.target.composing||(t.messageText=e.target.value)}}}),t._v(" "),n("span",{staticClass:"wmp-icon-send",on:{click:t.send}})])])},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},488:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"matrix-chat-message",class:{"matrix-chat-message--author":t.isAuthor}},[n("div",{staticClass:"matrix-chat-message__container"},[n("div",{staticClass:"matrix-chat-message__header",style:{color:t.sender.nameColor}},[t._v("\n\t\t\t"+t._s(t.sender.name)+"\n\t\t")]),t._v(" "),n("div",{staticClass:"matrix-chat-message__body"},t._l(t.messages,function(e){return n("div",[n("span",{domProps:{innerHTML:t._s(e)}}),t._v(" "),t.isAuthor||t.isAdmin?n("div",{staticClass:"wmp-icon-close matrix-chat-message__delete",attrs:{title:"Delete this message"}}):t._e()])})),t._v(" "),n("div",{staticClass:"matrix-chat-message__footer"},[t._v(t._s(t._createdAt))])])])},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})}}]);