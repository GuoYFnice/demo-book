!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/demo-book/",n(n.s=205)}({205:function(e,t,n){"use strict";n.r(t);n(206);window.addEventListener("scroll",(function(e){var t=2*document.documentElement.clientHeight,n=document.documentElement.scrollTop/t,r=document.querySelector(".white"),o=document.querySelector(".red");r.style.clipPath="inset(".concat((.5-n)/.5*100,"% 0px 0px 0px)"),o.style.clipPath="inset(".concat((1-n)/.5*100,"% 0px 0px 0px)"),n>=1?document.querySelector(".sticky-container").classList.add("no-sticky"):document.querySelector(".sticky-container").classList.remove("no-sticky")}))},206:function(e,t,n){}});