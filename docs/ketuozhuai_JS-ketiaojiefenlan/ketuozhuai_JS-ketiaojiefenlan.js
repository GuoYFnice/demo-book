!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/demo-book/",e(e.s=258)}({0:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},1:function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(27))},10:function(t,n,e){var r=e(19),o=e(14);t.exports=function(t){return r(o(t))}},100:function(t,n,e){e(101);var r=e(6);t.exports=r.parseInt},101:function(t,n,e){var r=e(8),o=e(102);r({global:!0,forced:parseInt!=o},{parseInt:o})},102:function(t,n,e){var r=e(1),o=e(92).trim,u=e(65),c=r.parseInt,i=/^[+-]?0[Xx]/,f=8!==c(u+"08")||22!==c(u+"0x16");t.exports=f?function(t,n){var e=o(String(t));return c(e,n>>>0||(i.test(e)?16:10))}:c},11:function(t,n,e){var r=e(4);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},12:function(t,n,e){var r=e(2),o=e(16),u=e(13),c=e(11),i=Object.defineProperty;n.f=r?i:function(t,n,e){if(u(t),n=c(n,!0),u(e),o)try{return i(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},13:function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},14:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},15:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},16:function(t,n,e){var r=e(2),o=e(0),u=e(21);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(u("div"),"a",{get:function(){return 7}}).a}))},17:function(t,n,e){var r=e(28);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},19:function(t,n,e){var r=e(0),o=e(15),u="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?u.call(t,""):Object(t)}:Object},2:function(t,n,e){var r=e(0);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},21:function(t,n,e){var r=e(1),o=e(4),u=r.document,c=o(u)&&o(u.createElement);t.exports=function(t){return c?u.createElement(t):{}}},25:function(t,n,e){var r=e(2),o=e(26),u=e(9),c=e(10),i=e(11),f=e(3),a=e(16),l=Object.getOwnPropertyDescriptor;n.f=r?l:function(t,n){if(t=c(t),n=i(n,!0),a)try{return l(t,n)}catch(t){}if(f(t,n))return u(!o.f.call(t,n),t[n])}},258:function(t,n,e){"use strict";e.r(n);var r,o,u=e(66),c=e.n(u);e(259);function i(t){var n=o+t.clientX-r;document.querySelector(".scalable").style.width=n+"px"}function f(t){localStorage.setItem("scalable_width",a()),document.documentElement.removeEventListener("mousemove",i),document.documentElement.removeEventListener("mouseup",f)}function a(){return c()(window.getComputedStyle(document.querySelector(".scalable")).width,10)}o=localStorage.getItem("scalable_width")||a(),document.querySelector(".scalable").style.width=o+"px",document.querySelector(".separator").addEventListener("mousedown",(function(t){r=t.clientX,o=a(),document.documentElement.addEventListener("mousemove",i),document.documentElement.addEventListener("mouseup",f)}))},259:function(t,n,e){},26:function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,u=o&&!r.call({1:2},1);n.f=u?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},27:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},28:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},3:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},31:function(t,n,e){var r=e(0),o=/#|\.prototype\./,u=function(t,n){var e=i[c(t)];return e==a||e!=f&&("function"==typeof n?r(n):!!n)},c=u.normalize=function(t){return String(t).replace(o,".").toLowerCase()},i=u.data={},f=u.NATIVE="N",a=u.POLYFILL="P";t.exports=u},4:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},6:function(t,n){t.exports={}},65:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},66:function(t,n,e){t.exports=e(99)},7:function(t,n,e){var r=e(2),o=e(12),u=e(9);t.exports=r?function(t,n,e){return o.f(t,n,u(1,e))}:function(t,n,e){return t[n]=e,t}},8:function(t,n,e){"use strict";var r=e(1),o=e(25).f,u=e(31),c=e(6),i=e(17),f=e(7),a=e(3),l=function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n};t.exports=function(t,n){var e,p,s,d,v,y,m,b,x=t.target,h=t.global,w=t.stat,g=t.proto,j=h?r:w?r[x]:(r[x]||{}).prototype,E=h?c:c[x]||(c[x]={}),S=E.prototype;for(s in n)e=!u(h?s:x+(w?".":"#")+s,t.forced)&&j&&a(j,s),v=E[s],e&&(y=t.noTargetGet?(b=o(j,s))&&b.value:j[s]),d=e&&y?y:n[s],e&&typeof v==typeof d||(m=t.bind&&e?i(d,r):t.wrap&&e?l(d):g&&"function"==typeof d?i(Function.call,d):d,(t.sham||d&&d.sham||v&&v.sham)&&f(m,"sham",!0),E[s]=m,g&&(a(c,p=x+"Prototype")||f(c,p,{}),c[p][s]=d,t.real&&S&&!S[s]&&f(S,s,d)))}},9:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},92:function(t,n,e){var r=e(14),o="["+e(65)+"]",u=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),i=function(t){return function(n){var e=String(r(n));return 1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(c,"")),e}};t.exports={start:i(1),end:i(2),trim:i(3)}},99:function(t,n,e){var r=e(100);t.exports=r}});