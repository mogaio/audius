(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{174:function(t,e,o){"use strict";o.r(e);var i=o(175),r=o.n(i);for(var a in i)"default"!==a&&function(t){o.d(e,t,function(){return i[t]})}(a);e.default=r.a},175:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},r=o(1),a=o(2);e.default={computed:i({},(0,a.mapModuleState)("matrix",["credentials","isGuest"])),methods:i({},(0,r.mapActions)(["loginMatrixWithPassword"]),{matrixLogin:function(){var t=this.$el.querySelector("#username"),e=this.$el.querySelector("#password");this.loginMatrixWithPassword({username:t.value,password:e.value}),this.$el.querySelector("#username").value="",this.$el.querySelector("#password").value=""}})}},176:function(t,e,o){},191:function(t,e,o){"use strict";o.r(e);var i=o(292),r=o(174);for(var a in r)"default"!==a&&function(t){o.d(e,t,function(){return r[t]})}(a);o(216);var n=o(0),s=Object(n.a)(r.default,i.a,i.b,!1,null,null,null);e.default=s.exports},216:function(t,e,o){"use strict";var i=o(176);o.n(i).a},256:function(t,e,o){"use strict";o.r(e);var i=o(257),r=o.n(i);for(var a in i)"default"!==a&&function(t){o.d(e,t,function(){return i[t]})}(a);e.default=r.a},257:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},r=o(1),a=d(o(47)),n=d(o(362)),s=d(o(366)),l=d(o(369)),c=d(o(191)),u=o(2);function d(t){return t&&t.__esModule?t:{default:t}}e.default={components:{draggable:a.default,MatrixCreateRoom:n.default,MatrixPublicRooms:s.default,MatrixConsentModal:l.default,MatrixLogin:c.default},data:function(){return{showConfirmDelte:!1,showHidden:!1}},created:function(){var t=this;this.initModule("matrix"),setTimeout(function(){t.$forceUpdate()},1e3)},methods:i({},(0,r.mapMutations)(["selectMediaSource","setShowMediumSettings","toggleMatrixRoomModal","toggleMatrixRoomDirectory","toggleMatrixLoginModal","setMatrixRoomTag","error"]),(0,r.mapActions)(["joinMatrixRoom","leaveMatrixRoom","matrixSend","initModule"]),{addMatrixRoom:function(){var t=document.querySelector(".matrix-room input");/#[\w-]+:[\w-]+\.\w{2,}/.test(t.value)?this.joinMatrixRoom({id:t.value}):this.toggleMatrixRoomModal(t.value||!0),t.value=""},dropAdd:function(t,e){var o=t.item.dataset.id;this.matrixSend({roomId:e,itemId:o})},numWatched:function(t){return t in this.sources?(this.sources[t].archive?this.sources[t].archive.length:0)+Object.keys(this.sources[t].playedMedia).length:0}}),computed:i({},(0,r.mapState)(["loadedModules","currentMediaSource","matrix"]),(0,u.mapModuleState)("matrix",["sources","sourcesOrdered","matrixLoggedIn","showMatrixLoginModal"]),{_hiddenSourcesOrdered:{get:function(){var t=this;return this.sourcesOrdered.filter(function(e){return t.sources[e].hidden})},set:function(t){this.error("not implemented")}},_sourcesOrdered:{get:function(){var t=this;return this.sourcesOrdered.filter(function(e){return!t.sources[e].hidden})},set:function(t){this.error("not implemented")}}})}},258:function(t,e,o){"use strict";o.r(e);var i=o(259),r=o.n(i);for(var a in i)"default"!==a&&function(t){o.d(e,t,function(){return i[t]})}(a);e.default=r.a},259:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},r=o(1),a=o(363),n=function(t){return t&&t.__esModule?t:{default:t}}(o(191)),s=o(2);e.default={components:{MatrixLogin:n.default},data:function(){return{roomName:""}},created:function(){var t=this;this.$store.watch(function(t){return t.createMatrixRoomModal},function(){"string"==typeof t.createMatrixRoomModal&&(t.roomName=t.createMatrixRoomModal)})},methods:i({},(0,r.mapActions)(["createMatrixRoom"]),(0,r.mapMutations)(["toggleMatrixRoomModal"]),{close:function(){this.toggleMatrixRoomModal(!1)},_createMatrixRoom:function(){var t=this.$el.querySelector("#hidden-room-m").checked?"privat":"public";this.createMatrixRoom({room_alias_name:this.slugName,visibility:t,name:this.roomName+" [Audius]",topic:"Join this room at https://audius.rockdapus.org?import=#"+this.slugName+":matrix.org&type=room&title="+encodeURIComponent(this.roomName)})},matrixLogin:function(){var t=this.$el.querySelector("#username"),e=this.$el.querySelector("#password");this.loginMatrixWithPassword({username:t.value,password:e.value}),this.$el.querySelector("#username").value="",this.$el.querySelector("#password").value=""}}),computed:i({},(0,s.mapModuleState)("matrix",["createMatrixRoomModal","isGuest"]),{slugName:function(){return this.roomName.length<5?"…":(0,a.slugify)(this.roomName).slice(0,20).replace(/-$/,"")+"-audius"}})}},260:function(t,e,o){},261:function(t,e,o){"use strict";o.r(e);var i=o(262),r=o.n(i);for(var a in i)"default"!==a&&function(t){o.d(e,t,function(){return i[t]})}(a);e.default=r.a},262:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},r=o(1),a=o(2),n=[{id:"!vginOAdNcoiesrilGC:matrix.org",name:"Music Links"},{id:"!zKinTrtpQEyHfnIbnI:matrix.org",name:"Random"},{id:"!doxyJrwhqLPtPKawfE:matrix.org",name:"😁😄😅😆😆 wtf"},{id:"!sgKmJzakMmEdSCgKCE:matrix.org",name:"Electronic"},{id:"!VTIhlnDdHsxZFZQNFh:matrix.org",name:"Rock"},{id:"!aSJNcnulrVagkddEtD:matrix.org",name:"Chillout "},{id:"!wkEBtQpMVXqZktQwjF:matrix.org",name:"Docu / Tech / Science [Audius]"}];e.default={methods:i({},(0,r.mapActions)(["updatePublicRooms","joinMatrixRoom"]),(0,r.mapMutations)(["toggleMatrixRoomDirectory"]),{close:function(){this.toggleMatrixRoomDirectory(!1)}}),computed:i({},(0,a.mapModuleState)("matrix",["sources","showMatrixRoomDirectory","publicRooms"]),{filteredRoomList:function(){var t=this;return n.filter(function(e){return!(e.id in t.sources)})},filteredPublicRooms:function(){var t=this;return this.publicRooms.filter(function(e){return!(e.id in t.sources)})}})}},263:function(t,e,o){},264:function(t,e,o){"use strict";o.r(e);var i=o(265),r=o.n(i);for(var a in i)"default"!==a&&function(t){o.d(e,t,function(){return i[t]})}(a);e.default=r.a},265:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},r=o(1),a=o(2);e.default={data:function(){return{roomName:""}},methods:i({},(0,r.mapMutations)(["toggleMatrixConsentModal"]),{close:function(){this.toggleMatrixConsentModal(!1)}}),computed:i({},(0,a.mapModuleState)("matrix",["showMatrixConsentModal","matrixConsentMessage"]))}},266:function(t,e,o){},267:function(t,e,o){},292:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("table",{staticClass:"matrix-login"},[o("tr",[o("td",[t._v("Username")]),t._v(" "),o("td",[o("input",{staticClass:"input--border",attrs:{type:"text",id:"username"},domProps:{value:t.isGuest?"":t.credentials.userId}})])]),t._v(" "),t._m(0),t._v(" "),o("tr",[o("td"),t._v(" "),o("td",{staticStyle:{"text-align":"right"}},[o("a",{staticClass:"button btn--blue-ghost create-room__register",attrs:{target:"_blank",href:"https://riot.im/app/#/register"}},[t._v("Register")]),t._v(" "),o("button",{staticClass:"button btn--blue",attrs:{type:"button"},on:{click:t.matrixLogin}},[t._v("Login")])])])])},r=[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("Password")]),this._v(" "),e("td",[e("input",{staticClass:"input--border",attrs:{type:"password",id:"password"}})])])}];o.d(e,"a",function(){return i}),o.d(e,"b",function(){return r})},362:function(t,e,o){"use strict";o.r(e);var i=o(491),r=o(258);for(var a in r)"default"!==a&&function(t){o.d(e,t,function(){return r[t]})}(a);o(364);var n=o(0),s=Object(n.a)(r.default,i.a,i.b,!1,null,null,null);e.default=s.exports},363:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.slugify=function(t){t=(t=t.replace(/^\s+|\s+$/g,"")).toLowerCase();for(var e="ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;",o=0,i=e.length;o<i;o++)t=t.replace(new RegExp(e.charAt(o),"g"),"aaaaaeeeeeiiiiooooouuuunc------".charAt(o));return t=t.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}},364:function(t,e,o){"use strict";var i=o(260);o.n(i).a},366:function(t,e,o){"use strict";o.r(e);var i=o(492),r=o(261);for(var a in r)"default"!==a&&function(t){o.d(e,t,function(){return r[t]})}(a);o(367);var n=o(0),s=Object(n.a)(r.default,i.a,i.b,!1,null,null,null);e.default=s.exports},367:function(t,e,o){"use strict";var i=o(263);o.n(i).a},369:function(t,e,o){"use strict";o.r(e);var i=o(493),r=o(264);for(var a in r)"default"!==a&&function(t){o.d(e,t,function(){return r[t]})}(a);o(370);var n=o(0),s=Object(n.a)(r.default,i.a,i.b,!1,null,null,null);e.default=s.exports},370:function(t,e,o){"use strict";var i=o(266);o.n(i).a},372:function(t,e,o){"use strict";var i=o(267);o.n(i).a},477:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"matrix-room play-list-manager__wrapper"},[t.loadedModules.matrix?o("div",[t.matrixLoggedIn?t._e():o("div",{staticClass:"matrix-room__logging-in"},[t._v("\n\t\t\t  … connecting to Matrix.org\n\t\t")]),t._v(" "),t.matrixLoggedIn&&!t.sourcesOrdered.length?o("div",{staticClass:"play-list-manager__room-suggestions"},[t._v("\n\t\t\tYou did not join any rooms yet!\n\t\t\t"),o("br"),t._v(" "),o("br"),t._v(" "),o("button",{staticClass:"button btn--blue",on:{click:function(e){t.toggleMatrixRoomDirectory()}}},[o("span",{staticClass:"wmp-icon-format_list_bulleted"}),t._v("\n\t\t\t\trooms\n\t\t\t")]),t._v(" "),o("br"),t._v(" "),o("br"),t._v("\n\t\t\tOpen the room list\n\t\t\tor\n\t\t\tcreate your own room.\n\t\t")]):t._e(),t._v(" "),o("matrix-create-room"),t._v(" "),o("matrix-public-rooms"),t._v(" "),o("matrix-consent-modal"),t._v(" "),t.showMatrixLoginModal?o("div",{staticClass:"modal",on:{click:function(e){t.toggleMatrixLoginModal()}}},[o("div",{staticClass:"modal__body",on:{click:function(t){t.stopPropagation()}}},[t._v("\n\t\t\t\tGuest users are not allowed to join this room. "),o("br"),t._v("\n\t\t\t\tPlease login or register your "),o("b",[t._v("Riot.im account")]),t._v("."),o("br"),o("br"),t._v(" "),o("matrix-login")],1)]):t._e(),t._v(" "),t.matrixLoggedIn?o("draggable",{staticClass:"matrix-room__tags",attrs:{element:"ul",options:{animation:150,scrollSpeed:20,handle:".play-list-manager__drag-handle"}},model:{value:t._sourcesOrdered,callback:function(e){t._sourcesOrdered=e},expression:"_sourcesOrdered"}},t._l(t._sourcesOrdered,function(e){return o("draggable",{key:e,staticClass:"play-list-manager__tag-drop-zone",class:{active:t.currentMediaSource.id==e},attrs:{element:"li",options:{sort:!1,handle:".no-handle",group:{name:"lists"}}},on:{add:function(o){t.dropAdd(o,e)}}},[o("div",{staticClass:"play-list-manager__drag-handle"}),t._v(" "),o("div",{staticClass:"play-list-manager__tag-body",on:{click:function(o){t.selectMediaSource({type:"matrix",id:e})}}},[o("div",[t._v("\n\t\t\t\t\t\t"+t._s(t.matrix.sources[e].name)+"\n\t\t\t\t\t")]),t._v(" "),o("div",{staticClass:"matrix-room__tag-footer"},[o("div",[t._v(" "+t._s(t.sources[e].playList.length-Object.keys(t.sources[e].playedMedia).length)+" New ")]),t._v(" "),o("div",[t._v(" "+t._s(t.sources[e].members?t.sources[e].members.length:"?")+" Members ")])])]),t._v(" "),o("div",{staticClass:"play-list-manager__menu"},[o("span",{staticClass:"wmp-icon-mode_edit",attrs:{title:"Edit room"},on:{click:function(o){o.stopPropagation(),t.setShowMediumSettings({medium:"matrix",id:e})}}}),t._v(" "),o("span",{staticClass:"wmp-icon-close",attrs:{title:"Leave room"},on:{click:function(o){o.stopPropagation(),t.showConfirmDelte=e}}})])])})):t._e(),t._v(" "),t.matrixLoggedIn&&t._hiddenSourcesOrdered.length?o("div",[t.showHidden?o("div",[o("div",{staticClass:"play-list-manager__show-hidden-rooms",on:{click:function(e){t.showHidden=!1}}},[t._v("\n\t\t\t\t\thide\n\t\t\t\t")]),t._v(" "),o("ul",t._l(t._hiddenSourcesOrdered,function(e){return o("li",[o("div",{staticClass:"play-list-manager__tag-body",on:{click:function(o){t.selectMediaSource({type:"matrix",id:e})}}},[o("div",[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.matrix.sources[e].name)+"\n\t\t\t\t\t\t\t")]),t._v(" "),o("div",{staticClass:"matrix-room__tag-footer"},[o("div",[t._v(" "+t._s(t.sources[e].playList.length-Object.keys(t.sources[e].playedMedia).length)+" New ")]),t._v(" "),o("div",[t._v(" "+t._s(t.sources[e].members?t.sources[e].members.length:"?")+" Members ")])])]),t._v(" "),o("div",{staticClass:"play-list-manager__menu"},[o("span",{staticClass:"wmp-icon-mode_edit",attrs:{title:"Edit room"},on:{click:function(o){o.stopPropagation(),t.setShowMediumSettings({medium:"matrix",id:e})}}}),t._v(" "),o("span",{staticClass:"wmp-icon-close",attrs:{title:"Leave room"},on:{click:function(o){o.stopPropagation(),t.showConfirmDelte=e}}})])])}))]):t._e(),t._v(" "),t.showHidden?t._e():o("div",{staticClass:"play-list-manager__show-hidden-rooms",on:{click:function(e){t.showHidden=!0}}},[t._v("\n\t\t\t\tshow hidden\n\t\t\t")])]):t._e(),t._v(" "),o("ul",{staticClass:"matrix-room__tags"},[t.matrixLoggedIn?o("li",{staticClass:"play-list-manager__input"},[o("div",{staticClass:"play-list-manager__tag-body"},[o("input",{attrs:{type:"text",placeholder:"… room id or name"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addMatrixRoom(e):null}}})]),t._v(" "),o("div",{staticClass:"matrix-room__room-join-create"},[o("span",{staticClass:"wmp-icon-add",attrs:{title:"Create / join room"},on:{click:t.addMatrixRoom}})]),t._v(" "),o("div",{staticClass:"matrix-room__room-list"},[o("span",{staticClass:"wmp-icon-format_list_bulleted",attrs:{title:"Room List"},on:{click:function(e){t.toggleMatrixRoomDirectory()}}})])]):t._e()]),t._v(" "),t.showConfirmDelte?o("div",{staticClass:"modal",on:{click:function(e){t.showConfirmDelte=!1}}},[o("div",{staticClass:"modal__body",on:{click:function(t){t.stopPropagation()}}},[t._v("\n\t\t\t\tAre you sure you want to leave the room?\n\t\t\t\t"),o("div",{staticClass:"modal__btn-group"},[o("button",{staticClass:"button",on:{click:function(e){t.showConfirmDelte=!1}}},[t._v("Cancel")]),t._v(" "),o("button",{staticClass:"button btn--blue",on:{click:function(e){e.stopPropagation(),t.leaveMatrixRoom(t.showConfirmDelte),t.showConfirmDelte=!1}}},[t._v("Leave")])])])]):t._e()],1):t._e()])},r=[];o.d(e,"a",function(){return i}),o.d(e,"b",function(){return r})},491:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.createMatrixRoomModal?o("div",{staticClass:"modal matrix-create",on:{click:t.close}},[o("div",{staticClass:"modal__body",on:{click:function(t){t.stopPropagation()}}},[!1!==t.isGuest?o("div",[t._v("\n\t\t\tGuest users are not allowed to create rooms. "),o("br"),t._v("\n\t\t\tPlease login or register your Riot.im account. "),o("br"),o("br"),t._v(" "),o("matrix-login")],1):o("div",[o("h3",[t._v("Create matrix room")]),t._v(" "),o("p"),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.roomName,expression:"roomName"}],staticClass:"input--border",attrs:{type:"text",placeholder:"Room name"},domProps:{value:t.roomName},on:{input:function(e){e.target.composing||(t.roomName=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"spacer"}),t._v("\n\t\t\t\t#"+t._s(t.slugName)+":matrix.org\n\t\t\t"),o("p"),t._v(" "),o("p"),t._m(0),t._v(" "),o("p"),t._v(" "),o("div",{staticClass:"modal__btn-group"},[o("button",{staticClass:"button",on:{click:t.close}},[t._v("Cancel")]),t._v(" "),o("button",{staticClass:"button btn--blue",attrs:{disabled:t.roomName.length<5,title:t.roomName.length<5?"The room name must be at least 5 characters long":""},on:{click:t._createMatrixRoom}},[t._v("create")])])])])]):t._e()},r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("input",{attrs:{type:"checkbox",id:"hidden-room-m"}}),e("label",{attrs:{for:"hidden-room-m"}}),this._v("\n\t\t\t\t\tHidden\n\t\t\t\t\t"),e("span",{staticClass:"smaller"},[this._v("Not publicly listed")])])}];o.d(e,"a",function(){return i}),o.d(e,"b",function(){return r})},492:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.showMatrixRoomDirectory?o("div",[o("div",{staticClass:"modal matrix-public-rooms",on:{click:t.close}},[o("div",{staticClass:"modal__body",on:{click:function(t){t.stopPropagation()}}},[o("h3",[t._v("Public rooms")]),t._v(" "),t.publicRooms&&t.publicRooms.length?t._e():o("div",{staticClass:"about-player__community-btns matrix-public-rooms__buttons"},t._l(t.filteredRoomList,function(e){return o("div",{staticClass:"button btn--blue",on:{click:function(o){t.joinMatrixRoom({id:e.id,name:e.name})}}},[t._v("\n\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t")])})),t._v(" "),t.publicRooms&&t.publicRooms.length?t._e():o("div",[o("br"),t._v("\n\t\t\t\t… press below to update rooms, it might take a while.\n\t\t\t")]),t._v(" "),o("div",{staticClass:"matrix-public-rooms__buttons"},[t._l(t.filteredPublicRooms,function(e){return o("a",{staticClass:"button btn--blue",attrs:{title:"["+e.numberOfMembers+" Members] "+e.topic},on:{click:function(o){t.joinMatrixRoom({id:e.id,name:e.name})}}},[t._v("\n\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t")])}),t._v(" "),t.publicRooms&&t.publicRooms.length&&!t.filteredPublicRooms.length?o("span",[t._v("… you joined all available rooms")]):t._e()],2),t._v(" "),o("div",{staticClass:"modal__btn-group"},[o("button",{staticClass:"button",on:{click:t.close}},[t._v("Cancel")]),t._v(" "),o("button",{staticClass:"button btn--blue-ghost",on:{click:t.updatePublicRooms}},[t._v("update room list")])])])])]):t._e()},r=[];o.d(e,"a",function(){return i}),o.d(e,"b",function(){return r})},493:function(t,e,o){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return this.showMatrixConsentModal?e("div",{staticClass:"modal matrix-consent",on:{click:this.close}},[e("div",{staticClass:"modal__body",on:{click:function(t){t.stopPropagation()}}},[e("p",{domProps:{innerHTML:this._s(this.matrixConsentMessage)}})])]):this._e()},r=[];o.d(e,"a",function(){return i}),o.d(e,"b",function(){return r})},88:function(t,e,o){"use strict";o.r(e);var i=o(477),r=o(256);for(var a in r)"default"!==a&&function(t){o.d(e,t,function(){return r[t]})}(a);o(372);var n=o(0),s=Object(n.a)(r.default,i.a,i.b,!1,null,null,null);e.default=s.exports}}]);