!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=115)}({115:function(e,n,t){"use strict";var r=!!document.querySelector("#audius-website");chrome.runtime.onMessage.addListener(function(e,n,t){console.log("addListener request",e),e.audius&&r&&window.dispatchEvent(new CustomEvent("audius",{detail:e}))}),window.addEventListener("audiusExtension",function(e){console.log("content relay request ",e.detail),chrome.runtime.sendMessage(e.detail,function(e){})},!1)}});