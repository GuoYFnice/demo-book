!function(t){var n={};function r(o){if(n[o])return n[o].exports;var e=n[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=n,r.d=function(t,n,o){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)r.d(o,e,function(n){return t[n]}.bind(null,e));return o},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/demo-book/",r(r.s=195)}([function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r(22))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,r){var o=r(1);t.exports=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports={}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var o=r(4);t.exports=function(t,n){if(!o(t))return t;var r,e;if(n&&"function"==typeof(r=t.toString)&&!o(e=r.call(t)))return e;if("function"==typeof(r=t.valueOf)&&!o(e=r.call(t)))return e;if(!n&&"function"==typeof(r=t.toString)&&!o(e=r.call(t)))return e;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var o=r(2),e=r(13),i=r(6);t.exports=o?function(t,n,r){return e.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var o=r(0),e=r(36),i=r(3),u=r(38),c=r(28),a=r(41),f=e("wks"),s=o.Symbol,l=a?s:s&&s.withoutSetter||u;t.exports=function(t){return i(f,t)||(c&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n,r){"use strict";var o=r(0),e=r(23).f,i=r(25),u=r(5),c=r(18),a=r(8),f=r(3),s=function(t){var n=function(n,r,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,r)}return new t(n,r,o)}return t.apply(this,arguments)};return n.prototype=t.prototype,n};t.exports=function(t,n){var r,l,p,v,h,y,d,x,g=t.target,b=t.global,m=t.stat,w=t.proto,S=b?o:m?o[g]:(o[g]||{}).prototype,M=b?u:u[g]||(u[g]={}),j=M.prototype;for(p in n)r=!i(b?p:g+(m?".":"#")+p,t.forced)&&S&&f(S,p),h=M[p],r&&(y=t.noTargetGet?(x=e(S,p))&&x.value:S[p]),v=r&&y?y:n[p],r&&typeof h==typeof v||(d=t.bind&&r?c(v,o):t.wrap&&r?s(v):w&&"function"==typeof v?c(Function.call,v):v,(t.sham||v&&v.sham||h&&h.sham)&&a(d,"sham",!0),M[p]=d,w&&(f(u,l=g+"Prototype")||a(u,l,{}),u[l][p]=v,t.real&&j&&!j[p]&&a(j,p,v)))}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var o=r(2),e=r(1),i=r(21);t.exports=!o&&!e((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var o=r(2),e=r(12),i=r(16),u=r(7),c=Object.defineProperty;n.f=o?c:function(t,n,r){if(i(t),n=u(n,!0),i(r),e)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var o=r(19),e=r(11);t.exports=function(t){return o(e(t))}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var o=r(4);t.exports=function(t){if(!o(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n){var r=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:r)(t)}},function(t,n,r){var o=r(26);t.exports=function(t,n,r){if(o(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,o){return t.call(n,r,o)};case 3:return function(r,o,e){return t.call(n,r,o,e)}}return function(){return t.apply(n,arguments)}}},function(t,n,r){var o=r(1),e=r(15),i="".split;t.exports=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==e(t)?i.call(t,""):Object(t)}:Object},function(t,n,r){var o=r(17),e=Math.min;t.exports=function(t){return t>0?e(o(t),9007199254740991):0}},function(t,n,r){var o=r(0),e=r(4),i=o.document,u=e(i)&&e(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){var o=r(2),e=r(24),i=r(6),u=r(14),c=r(7),a=r(3),f=r(12),s=Object.getOwnPropertyDescriptor;n.f=o?s:function(t,n){if(t=u(t),n=c(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!e.f.call(t,n),t[n])}},function(t,n,r){"use strict";var o={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,i=e&&!o.call({1:2},1);n.f=i?function(t){var n=e(this,t);return!!n&&n.enumerable}:o},function(t,n,r){var o=r(1),e=/#|\.prototype\./,i=function(t,n){var r=c[u(t)];return r==f||r!=a&&("function"==typeof n?o(n):!!n)},u=i.normalize=function(t){return String(t).replace(e,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,r){var o=r(5);t.exports=function(t){return o[t+"Prototype"]}},function(t,n,r){var o=r(1);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())}))},function(t,n,r){var o=r(11);t.exports=function(t){return Object(o(t))}},function(t,n){t.exports=!0},function(t,n,r){var o=r(32);t.exports=o("navigator","userAgent")||""},function(t,n,r){var o=r(5),e=r(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(o[t])||i(e[t]):o[t]&&o[t][n]||e[t]&&e[t][n]}},function(t,n,r){var o=r(2),e=r(1),i=r(3),u=Object.defineProperty,c={},a=function(t){throw t};t.exports=function(t,n){if(i(c,t))return c[t];n||(n={});var r=[][t],f=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:a,l=i(n,1)?n[1]:void 0;return c[t]=!!r&&!e((function(){if(f&&!o)return!0;var t={length:-1};f?u(t,1,{enumerable:!0,get:a}):t[1]=1,r.call(t,s,l)}))}},function(t,n,r){var o=r(17),e=Math.max,i=Math.min;t.exports=function(t,n){var r=o(t);return r<0?e(r+n,0):i(r,n)}},function(t,n,r){var o=r(15);t.exports=Array.isArray||function(t){return"Array"==o(t)}},function(t,n,r){var o=r(30),e=r(37);(t.exports=function(t,n){return e[t]||(e[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.4",mode:o?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var o=r(0),e=r(40),i=o["__core-js_shared__"]||e("__core-js_shared__",{});t.exports=i},function(t,n){var r=0,o=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+o).toString(36)}},function(t,n,r){t.exports=r(49)},function(t,n,r){var o=r(0),e=r(8);t.exports=function(t,n){try{e(o,t,n)}catch(r){o[t]=n}return n}},function(t,n,r){var o=r(28);t.exports=o&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,r){"use strict";var o=r(7),e=r(13),i=r(6);t.exports=function(t,n,r){var u=o(n);u in t?e.f(t,u,i(0,r)):t[u]=r}},,function(t,n,r){var o=r(4),e=r(35),i=r(9)("species");t.exports=function(t,n){var r;return e(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!e(r.prototype)?o(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},function(t,n,r){var o,e,i=r(0),u=r(31),c=i.process,a=c&&c.versions,f=a&&a.v8;f?e=(o=f.split("."))[0]+o[1]:u&&(!(o=u.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=u.match(/Chrome\/(\d+)/))&&(e=o[1]),t.exports=e&&+e},,function(t,n){t.exports=function(){}},function(t,n,r){var o=r(1),e=r(9),i=r(45),u=e("species");t.exports=function(t){return i>=51||!o((function(){var n=[];return(n.constructor={})[u]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,r){r(50);var o=r(5);t.exports=o.setInterval},function(t,n,r){var o=r(10),e=r(0),i=r(31),u=[].slice,c=function(t){return function(n,r){var o=arguments.length>2,e=o?u.call(arguments,2):void 0;return t(o?function(){("function"==typeof n?n:Function(n)).apply(this,e)}:n,r)}};o({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:c(e.setTimeout),setInterval:c(e.setInterval)})},,,,,,,,,,,,,,,,,,,,,,function(t,n,r){t.exports=r(88)},function(t,n,r){t.exports=r(93)},,,,,,,,,,,,,,function(t,n,r){},function(t,n,r){var o=r(89);t.exports=o},function(t,n,r){var o=r(90),e=Array.prototype;t.exports=function(t){var n=t.fill;return t===e||t instanceof Array&&n===e.fill?o:n}},function(t,n,r){r(91);var o=r(27);t.exports=o("Array").fill},function(t,n,r){var o=r(10),e=r(92),i=r(47);o({target:"Array",proto:!0},{fill:e}),i("fill")},function(t,n,r){"use strict";var o=r(29),e=r(34),i=r(20);t.exports=function(t){for(var n=o(this),r=i(n.length),u=arguments.length,c=e(u>1?arguments[1]:void 0,r),a=u>2?arguments[2]:void 0,f=void 0===a?r:e(a,r);f>c;)n[c++]=t;return n}},function(t,n,r){var o=r(94);t.exports=o},function(t,n,r){var o=r(95),e=Array.prototype;t.exports=function(t){var n=t.splice;return t===e||t instanceof Array&&n===e.splice?o:n}},function(t,n,r){r(96);var o=r(27);t.exports=o("Array").splice},function(t,n,r){"use strict";var o=r(10),e=r(34),i=r(17),u=r(20),c=r(29),a=r(44),f=r(42),s=r(48),l=r(33),p=s("splice"),v=l("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,y=Math.min;o({target:"Array",proto:!0,forced:!p||!v},{splice:function(t,n){var r,o,s,l,p,v,d=c(this),x=u(d.length),g=e(t,x),b=arguments.length;if(0===b?r=o=0:1===b?(r=0,o=x-g):(r=b-2,o=y(h(i(n),0),x-g)),x+r-o>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(s=a(d,o),l=0;l<o;l++)(p=g+l)in d&&f(s,l,d[p]);if(s.length=o,r<o){for(l=g;l<x-o;l++)v=l+r,(p=l+o)in d?d[v]=d[p]:delete d[v];for(l=x;l>x-o+r;l--)delete d[l-1]}else if(r>o)for(l=x-o;l>g;l--)v=l+r-1,(p=l+o-1)in d?d[v]=d[p]:delete d[v];for(l=0;l<r;l++)d[l+g]=arguments[l+2];return d.length=x-o+r,s}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,r){"use strict";r.r(n);r(87);var o,e,i=r(72),u=r.n(i),c=r(73),a=r.n(c),f=r(39),s=r.n(f);function l(){var t;!function(t,n,r){for(var o=[],e=0;e<r;e++){(o=[]).push(t),o.push(n),o.push(Math.floor(23*(Math.random()+.1)));var i=Math.abs(Math.random()-5),u=2*Math.random()*Math.PI;o.push(Math.floor(Math.cos(u)*i)),o.push(Math.floor(Math.sin(u)*i)),o.push(1),o.push((c=void 0,a=void 0,f=void 0,void 0,c=Math.floor(256*Math.random()),a=Math.floor(256*Math.random()),f=Math.floor(256*Math.random()),"#"+c.toString(16)+a.toString(16)+f.toString(16))),p.push(o)}var c,a,f}(Math.random()*window.innerWidth,Math.random()*window.innerHeight,5),t=o,e.clearRect(0,0,t.width,t.height),function(){for(var t=p.length,n=0;n<t;n++)v(e,p[n][0],p[n][1],p[n][2],p[n][5],p[n][6])}(),function(){for(var t=0;t<p.length;t++)p[t][0]+=p[t][3],p[t][1]+=p[t][4],p[t][5]-=.01,p[t][5]<0&&a()(p).call(p,t,1)}()}$(document).ready((function(){$("#cv").attr({width:window.innerWidth,height:window.innerHeight}),o=$("#cv")[0],e=o.getContext("2d"),s()(l,30)}));var p=[];function v(t,n,r,o,e,i){return t.beginPath(),t.arc(n,r,o,0,2*Math.PI),t.globalAlpha=e,t.strokeStyle=i,t.fillStyle=i,t.shadowColor=i,t.shadowBlur=20*Math.random(),u()(t).call(t),t.stroke(),o}}]);