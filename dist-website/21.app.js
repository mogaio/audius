(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{174:function(t,e,o){"use strict";o.r(e);var r=o(175),i=o.n(r);for(var n in r)"default"!==n&&function(t){o.d(e,t,function(){return r[t]})}(n);e.default=i.a},175:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},i=o(1),n=o(2);e.default={computed:r({},(0,n.mapModuleState)("matrix",["credentials","isGuest"])),methods:r({},(0,i.mapActions)(["loginMatrixWithPassword"]),{matrixLogin:function(){var t=this.$el.querySelector("#username"),e=this.$el.querySelector("#password");this.loginMatrixWithPassword({username:t.value,password:e.value}),this.$el.querySelector("#username").value="",this.$el.querySelector("#password").value=""}})}},176:function(t,e,o){},191:function(t,e,o){"use strict";o.r(e);var r=o(295),i=o(174);for(var n in i)"default"!==n&&function(t){o.d(e,t,function(){return i[t]})}(n);o(216);var a=o(0),s=Object(a.a)(i.default,r.a,r.b,!1,null,null,null);s.options.__file="matrix-login.vue",e.default=s.exports},216:function(t,e,o){"use strict";var r=o(176);o.n(r).a},256:function(t,e,o){"use strict";o.r(e);var r=o(257),i=o.n(r);for(var n in r)"default"!==n&&function(t){o.d(e,t,function(){return r[t]})}(n);e.default=i.a},257:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},i=o(1),n=m(o(47)),a=m(o(365)),s=m(o(369)),u=m(o(372)),l=m(o(375)),c=m(o(191)),d=o(2);function m(t){return t&&t.__esModule?t:{default:t}}e.default={components:{draggable:n.default,MatrixCreateRoom:a.default,MatrixPublicRooms:s.default,MatrixConsentModal:u.default,MatrixLogin:c.default,MatrixRoomTag:l.default},data:function(){return{showHidden:!1}},created:function(){var t=this;this.initModule("matrix"),setTimeout(function(){t.$forceUpdate()},1e3)},methods:r({},(0,i.mapMutations)(["selectMediaSource","toggleMatrixRoomModal","toggleMatrixRoomDirectory","toggleMatrixLoginModal","setMatrixRoomTag","error"]),(0,i.mapActions)(["joinMatrixRoom","initModule"]),{addMatrixRoom:function(){var t=document.querySelector(".matrix-room input");/#[\w-]+:[\w-]+\.\w{2,}/.test(t.value)?this.joinMatrixRoom({id:t.value}):this.toggleMatrixRoomModal(t.value||!0),t.value=""}}),computed:r({},(0,i.mapState)(["loadedModules","currentMediaSource","matrix"]),(0,d.mapModuleState)("matrix",["sources","sourcesOrdered","matrixLoggedIn","showMatrixLoginModal"]),{_hiddenSourcesOrdered:{get:function(){var t=this;return this.sourcesOrdered.filter(function(e){return t.sources[e].hidden})},set:function(t){this.error("not implemented")}},_sourcesOrdered:{get:function(){var t=this;return this.sourcesOrdered.filter(function(e){return!t.sources[e].hidden})},set:function(t){this.error("not implemented")}}})}},258:function(t,e,o){"use strict";o.r(e);var r=o(259),i=o.n(r);for(var n in r)"default"!==n&&function(t){o.d(e,t,function(){return r[t]})}(n);e.default=i.a},259:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},i=o(1),n=o(366),a=function(t){return t&&t.__esModule?t:{default:t}}(o(191)),s=o(2);e.default={components:{MatrixLogin:a.default},data:function(){return{roomName:""}},created:function(){var t=this;this.$store.watch(function(t){return t.createMatrixRoomModal},function(){"string"==typeof t.createMatrixRoomModal&&(t.roomName=t.createMatrixRoomModal)})},methods:r({},(0,i.mapActions)(["createMatrixRoom"]),(0,i.mapMutations)(["toggleMatrixRoomModal"]),{close:function(){this.toggleMatrixRoomModal(!1)},_createMatrixRoom:function(){var t=this.$el.querySelector("#hidden-room-m").checked?"privat":"public";this.createMatrixRoom({room_alias_name:this.slugName,visibility:t,name:this.roomName+" [Audius]",topic:"Join this room at https://audius.rockdapus.org?import=#"+this.slugName+":matrix.org&type=room&title="+encodeURIComponent(this.roomName)})},matrixLogin:function(){var t=this.$el.querySelector("#username"),e=this.$el.querySelector("#password");this.loginMatrixWithPassword({username:t.value,password:e.value}),this.$el.querySelector("#username").value="",this.$el.querySelector("#password").value=""}}),computed:r({},(0,s.mapModuleState)("matrix",["createMatrixRoomModal","isGuest"]),{slugName:function(){return this.roomName.length<5?"…":(0,n.slugify)(this.roomName).slice(0,20).replace(/-$/,"")+"-audius"}})}},260:function(t,e,o){},261:function(t,e,o){"use strict";o.r(e);var r=o(262),i=o.n(r);for(var n in r)"default"!==n&&function(t){o.d(e,t,function(){return r[t]})}(n);e.default=i.a},262:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},i=o(1),n=o(2),a=[{id:"!vginOAdNcoiesrilGC:matrix.org",name:"Music Links"},{id:"!zKinTrtpQEyHfnIbnI:matrix.org",name:"Random"},{id:"!doxyJrwhqLPtPKawfE:matrix.org",name:"😁😄😅😆😆 wtf"},{id:"!sgKmJzakMmEdSCgKCE:matrix.org",name:"Electronic"},{id:"!VTIhlnDdHsxZFZQNFh:matrix.org",name:"Rock"},{id:"!aSJNcnulrVagkddEtD:matrix.org",name:"Chillout "},{id:"!wkEBtQpMVXqZktQwjF:matrix.org",name:"Docu / Tech / Science [Audius]"}];e.default={methods:r({},(0,i.mapActions)(["updatePublicRooms","joinMatrixRoom"]),(0,i.mapMutations)(["toggleMatrixRoomDirectory"]),{close:function(){this.toggleMatrixRoomDirectory(!1)}}),computed:r({},(0,n.mapModuleState)("matrix",["sources","showMatrixRoomDirectory","publicRooms"]),{filteredRoomList:function(){var t=this;return a.filter(function(e){return!(e.id in t.sources)})},filteredPublicRooms:function(){var t=this;return this.publicRooms.filter(function(e){return!(e.id in t.sources)})}})}},263:function(t,e,o){},264:function(t,e,o){"use strict";o.r(e);var r=o(265),i=o.n(r);for(var n in r)"default"!==n&&function(t){o.d(e,t,function(){return r[t]})}(n);e.default=i.a},265:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},i=o(1),n=o(2);e.default={data:function(){return{roomName:""}},methods:r({},(0,i.mapMutations)(["toggleMatrixConsentModal"]),{close:function(){this.toggleMatrixConsentModal(!1)}}),computed:r({},(0,n.mapModuleState)("matrix",["showMatrixConsentModal","matrixConsentMessage"]))}},266:function(t,e,o){},267:function(t,e,o){"use strict";o.r(e);var r=o(268),i=o.n(r);for(var n in r)"default"!==n&&function(t){o.d(e,t,function(){return r[t]})}(n);e.default=i.a},268:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},i=o(1),n=function(t){return t&&t.__esModule?t:{default:t}}(o(47));e.default={components:{draggable:n.default},props:{id:{type:String,required:!0},room:{type:Object,required:!0},element:{type:String,required:!0},childElement:String},data:function(){return{}},methods:r({},(0,i.mapActions)(["matrixSend"]),(0,i.mapMutations)(["selectMediaSource","setShowMediumSettings"]),{dropAdd:function(t){var e=t.item.dataset.id;this.matrixSend({roomId:this.id,itemId:e})}}),computed:r({},(0,i.mapState)(["playedMedia"]))}},269:function(t,e,o){},270:function(t,e,o){},295:function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("table",{staticClass:"matrix-login"},[o("tr",[o("td",[t._v("Username")]),t._v(" "),o("td",[o("input",{staticClass:"input--border",attrs:{type:"text",id:"username"},domProps:{value:t.isGuest?"":t.credentials.userId}})])]),t._v(" "),t._m(0),t._v(" "),o("tr",[o("td"),t._v(" "),o("td",{staticStyle:{"text-align":"right"}},[o("a",{staticClass:"button btn--blue-ghost create-room__register",attrs:{target:"_blank",href:"https://riot.im/app/#/register"}},[t._v("Register")]),t._v(" "),o("button",{staticClass:"button btn--blue",attrs:{type:"button"},on:{click:t.matrixLogin}},[t._v("Login")])])])])},i=[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("Password")]),this._v(" "),e("td",[e("input",{staticClass:"input--border",attrs:{type:"password",id:"password"}})])])}];o.d(e,"a",function(){return r}),o.d(e,"b",function(){return i})},365:function(t,e,o){"use strict";o.r(e);var r=o(496),i=o(258);for(var n in i)"default"!==n&&function(t){o.d(e,t,function(){return i[t]})}(n);o(367);var a=o(0),s=Object(a.a)(i.default,r.a,r.b,!1,null,null,null);s.options.__file="matrix-create-room.vue",e.default=s.exports},366:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.slugify=function(t){t=(t=t.replace(/^\s+|\s+$/g,"")).toLowerCase();for(var e="ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;",o=0,r=e.length;o<r;o++)t=t.replace(new RegExp(e.charAt(o),"g"),"aaaaaeeeeeiiiiooooouuuunc------".charAt(o));return t=t.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}},367:function(t,e,o){"use strict";var r=o(260);o.n(r).a},369:function(t,e,o){"use strict";o.r(e);var r=o(497),i=o(261);for(var n in i)"default"!==n&&function(t){o.d(e,t,function(){return i[t]})}(n);o(370);var a=o(0),s=Object(a.a)(i.default,r.a,r.b,!1,null,null,null);s.options.__file="matrix-public-rooms.vue",e.default=s.exports},370:function(t,e,o){"use strict";var r=o(263);o.n(r).a},372:function(t,e,o){"use strict";o.r(e);var r=o(498),i=o(264);for(var n in i)"default"!==n&&function(t){o.d(e,t,function(){return i[t]})}(n);o(373);var a=o(0),s=Object(a.a)(i.default,r.a,r.b,!1,null,null,null);s.options.__file="matrix-consent.vue",e.default=s.exports},373:function(t,e,o){"use strict";var r=o(266);o.n(r).a},375:function(t,e,o){"use strict";o.r(e);var r=o(499),i=o(267);for(var n in i)"default"!==n&&function(t){o.d(e,t,function(){return i[t]})}(n);o(376);var a=o(0),s=Object(a.a)(i.default,r.a,r.b,!1,null,null,null);s.options.__file="matrix-room-tag.vue",e.default=s.exports},376:function(t,e,o){"use strict";var r=o(269);o.n(r).a},378:function(t,e,o){"use strict";var r=o(270);o.n(r).a},483:function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"matrix-room play-list-manager__wrapper"},[t.loadedModules.matrix?o("div",[t.matrixLoggedIn?t._e():o("div",{staticClass:"matrix-room__logging-in"},[t._v("\n\t\t\t  … connecting to Matrix.org\n\t\t")]),t._v(" "),t.matrixLoggedIn&&!t.sourcesOrdered.length?o("div",{staticClass:"play-list-manager__room-suggestions"},[t._v("\n\t\t\tYou did not join any rooms yet!\n\t\t\t"),o("br"),t._v(" "),o("br"),t._v(" "),o("button",{staticClass:"button btn--blue",on:{click:function(e){t.toggleMatrixRoomDirectory()}}},[o("span",{staticClass:"wmp-icon-format_list_bulleted"}),t._v("\n\t\t\t\trooms\n\t\t\t")]),t._v(" "),o("br"),t._v(" "),o("br"),t._v("\n\t\t\tOpen the room list\n\t\t\tor\n\t\t\tcreate your own room.\n\t\t")]):t._e(),t._v(" "),o("matrix-create-room"),t._v(" "),o("matrix-public-rooms"),t._v(" "),o("matrix-consent-modal"),t._v(" "),t.showMatrixLoginModal?o("div",{staticClass:"modal",on:{click:function(e){t.toggleMatrixLoginModal()}}},[o("div",{staticClass:"modal__body",on:{click:function(t){t.stopPropagation()}}},[t._v("\n\t\t\t\tGuest users are not allowed to join this room. "),o("br"),t._v("\n\t\t\t\tPlease login or register your "),o("b",[t._v("Riot.im account")]),t._v("."),o("br"),o("br"),t._v(" "),o("matrix-login")],1)]):t._e(),t._v(" "),t.matrixLoggedIn?o("draggable",{staticClass:"matrix-room__tags",attrs:{element:"ul",options:{animation:150,scrollSpeed:20,handle:".play-list-manager__drag-handle"}},model:{value:t._sourcesOrdered,callback:function(e){t._sourcesOrdered=e},expression:"_sourcesOrdered"}},t._l(t._sourcesOrdered,function(e,r){return o("matrix-room-tag",{key:r,class:{active:t.currentMediaSource.id==e},attrs:{id:e,room:t.sources[e],childElement:"li",element:"draggable"}})})):t._e(),t._v(" "),t.matrixLoggedIn&&t._hiddenSourcesOrdered.length?o("div",[t.showHidden?o("div",[o("div",{staticClass:"play-list-manager__show-hidden-rooms",on:{click:function(e){t.showHidden=!1}}},[t._v("\n\t\t\t\t\thide\n\t\t\t\t")]),t._v(" "),o("ul",t._l(t._hiddenSourcesOrdered,function(e){return o("matrix-room-tag",{key:t.index,attrs:{id:e,room:t.sources[e],element:"li"}})}))]):t._e(),t._v(" "),t.showHidden?t._e():o("div",{staticClass:"play-list-manager__show-hidden-rooms",on:{click:function(e){t.showHidden=!0}}},[t._v("\n\t\t\t\tshow hidden\n\t\t\t")])]):t._e(),t._v(" "),o("ul",{staticClass:"matrix-room__tags"},[t.matrixLoggedIn?o("li",{staticClass:"play-list-manager__input"},[o("div",{staticClass:"play-list-manager__tag-body"},[o("input",{attrs:{type:"text",placeholder:"… room id or name"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addMatrixRoom(e):null}}})]),t._v(" "),o("div",{staticClass:"matrix-room__room-join-create"},[o("span",{staticClass:"wmp-icon-add",attrs:{title:"Create / join room"},on:{click:t.addMatrixRoom}})]),t._v(" "),o("div",{staticClass:"matrix-room__room-list"},[o("span",{staticClass:"wmp-icon-format_list_bulleted",attrs:{title:"Room List"},on:{click:function(e){t.toggleMatrixRoomDirectory()}}})])]):t._e()])],1):t._e()])},i=[];o.d(e,"a",function(){return r}),o.d(e,"b",function(){return i})},496:function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.createMatrixRoomModal?o("div",{staticClass:"modal matrix-create",on:{click:t.close}},[o("div",{staticClass:"modal__body",on:{click:function(t){t.stopPropagation()}}},[!1!==t.isGuest?o("div",[t._v("\n\t\t\tGuest users are not allowed to create rooms. "),o("br"),t._v("\n\t\t\tPlease login or register your Riot.im account. "),o("br"),o("br"),t._v(" "),o("matrix-login")],1):o("div",[o("h3",[t._v("Create matrix room")]),t._v(" "),o("p"),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.roomName,expression:"roomName"}],staticClass:"input--border",attrs:{type:"text",placeholder:"Room name"},domProps:{value:t.roomName},on:{input:function(e){e.target.composing||(t.roomName=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"spacer"}),t._v("\n\t\t\t\t#"+t._s(t.slugName)+":matrix.org\n\t\t\t"),o("p"),t._v(" "),o("p"),t._m(0),t._v(" "),o("p"),t._v(" "),o("div",{staticClass:"modal__btn-group"},[o("button",{staticClass:"button",on:{click:t.close}},[t._v("Cancel")]),t._v(" "),o("button",{staticClass:"button btn--blue",attrs:{disabled:t.roomName.length<5,title:t.roomName.length<5?"The room name must be at least 5 characters long":""},on:{click:t._createMatrixRoom}},[t._v("create")])])])])]):t._e()},i=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("input",{attrs:{type:"checkbox",id:"hidden-room-m"}}),e("label",{attrs:{for:"hidden-room-m"}}),this._v("\n\t\t\t\t\tHidden\n\t\t\t\t\t"),e("span",{staticClass:"smaller"},[this._v("Not publicly listed")])])}];o.d(e,"a",function(){return r}),o.d(e,"b",function(){return i})},497:function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.showMatrixRoomDirectory?o("div",[o("div",{staticClass:"modal matrix-public-rooms",on:{click:t.close}},[o("div",{staticClass:"modal__body",on:{click:function(t){t.stopPropagation()}}},[o("h3",[t._v("Public rooms")]),t._v(" "),t.publicRooms&&t.publicRooms.length?t._e():o("div",{staticClass:"about-player__community-btns matrix-public-rooms__buttons"},t._l(t.filteredRoomList,function(e){return o("div",{staticClass:"button btn--blue",on:{click:function(o){t.joinMatrixRoom({id:e.id,name:e.name})}}},[t._v("\n\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t")])})),t._v(" "),t.publicRooms&&t.publicRooms.length?t._e():o("div",[o("br"),t._v("\n\t\t\t\t… press below to update rooms, it might take a while.\n\t\t\t")]),t._v(" "),o("div",{staticClass:"matrix-public-rooms__buttons"},[t._l(t.filteredPublicRooms,function(e){return o("a",{staticClass:"button btn--blue",attrs:{title:"["+e.numberOfMembers+" Members] "+e.topic},on:{click:function(o){t.joinMatrixRoom({id:e.id,name:e.name})}}},[t._v("\n\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t")])}),t._v(" "),t.publicRooms&&t.publicRooms.length&&!t.filteredPublicRooms.length?o("span",[t._v("… you joined all available rooms")]):t._e()],2),t._v(" "),o("div",{staticClass:"modal__btn-group"},[o("button",{staticClass:"button",on:{click:t.close}},[t._v("Cancel")]),t._v(" "),o("button",{staticClass:"button btn--blue-ghost",on:{click:t.updatePublicRooms}},[t._v("update room list")])])])])]):t._e()},i=[];o.d(e,"a",function(){return r}),o.d(e,"b",function(){return i})},498:function(t,e,o){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return this.showMatrixConsentModal?e("div",{staticClass:"modal matrix-consent",on:{click:this.close}},[e("div",{staticClass:"modal__body",on:{click:function(t){t.stopPropagation()}}},[e("p",{domProps:{innerHTML:this._s(this.matrixConsentMessage)}})])]):this._e()},i=[];o.d(e,"a",function(){return r}),o.d(e,"b",function(){return i})},499:function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o(t.element,{tag:"component",staticClass:"play-list-manager__tag-drop-zone",attrs:{options:{sort:!1,handle:".no-handle",group:{name:"lists"}},element:t.childElement},on:{add:function(e){t.dropAdd(e)}}},[o("div",{staticClass:"play-list-manager__drag-handle"}),t._v(" "),o("div",{staticClass:"play-list-manager__tag-body",on:{click:function(e){t.selectMediaSource({type:"matrix",id:t.id})}}},[o("div",[t._v("\n\t\t\t"+t._s(t.room.name)+"\n\t\t")]),t._v(" "),o("div",{staticClass:"matrix-room__tag-footer"},[o("div",[t._v(" "+t._s(t.room.playList.filter(function(e){return!(e.id in t.playedMedia)}).length)+" New")]),t._v(" "),o("div",[t._v(" "+t._s(t.room.members?t.room.members.length:"?")+" Members ")])])]),t._v(" "),o("div",{staticClass:"play-list-manager__menu"},[o("span",{staticClass:"wmp-icon-more_vert",attrs:{title:"Room settings"},on:{click:function(e){e.stopPropagation(),t.setShowMediumSettings({medium:"matrix",id:t.id})}}})])])},i=[];o.d(e,"a",function(){return r}),o.d(e,"b",function(){return i})},89:function(t,e,o){"use strict";o.r(e);var r=o(483),i=o(256);for(var n in i)"default"!==n&&function(t){o.d(e,t,function(){return i[t]})}(n);o(378);var a=o(0),s=Object(a.a)(i.default,r.a,r.b,!1,null,null,null);s.options.__file="matrix-room-manager.vue",e.default=s.exports}}]);