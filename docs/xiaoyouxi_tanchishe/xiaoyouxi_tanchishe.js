!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/demo-book/",r(r.s=116)}([function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r(22))},function(t,n,r){var e=r(0);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n){t.exports={}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(3);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(2),o=r(12),i=r(6);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){"use strict";var e=r(1),o=r(23).f,i=r(25),c=r(5),u=r(17),f=r(8),a=r(4),s=function(t){var n=function(n,r,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,r)}return new t(n,r,e)}return t.apply(this,arguments)};return n.prototype=t.prototype,n};t.exports=function(t,n){var r,l,p,d,y,v,b,h,x=t.target,m=t.global,g=t.stat,w=t.proto,S=m?e:g?e[x]:(e[x]||{}).prototype,j=m?c:c[x]||(c[x]={}),O=j.prototype;for(p in n)r=!i(m?p:x+(g?".":"#")+p,t.forced)&&S&&a(S,p),y=j[p],r&&(v=t.noTargetGet?(h=o(S,p))&&h.value:S[p]),d=r&&v?v:n[p],r&&typeof y==typeof d||(b=t.bind&&r?u(d,e):t.wrap&&r?s(d):w&&"function"==typeof d?u(Function.call,d):d,(t.sham||d&&d.sham||y&&y.sham)&&f(b,"sham",!0),j[p]=b,w&&(a(c,l=x+"Prototype")||f(c,l,{}),c[l][p]=d,t.real&&O&&!O[p]&&f(O,p,d)))}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(2),o=r(0),i=r(20);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(2),o=r(11),i=r(16),c=r(7),u=Object.defineProperty;n.f=e?u:function(t,n,r){if(i(t),n=c(n,!0),i(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(1),o=r(38),i=r(4),c=r(40),u=r(31),f=r(47),a=o("wks"),s=e.Symbol,l=f?s:s&&s.withoutSetter||c;t.exports=function(t){return i(a,t)||(u&&i(s,t)?a[t]=s[t]:a[t]=l("Symbol."+t)),a[t]}},function(t,n,r){var e=r(19),o=r(10);t.exports=function(t){return e(o(t))}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(3);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(26);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(0),o=r(15),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,r){var e=r(1),o=r(3),i=e.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,r){var e=r(18),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){var e=r(2),o=r(24),i=r(6),c=r(14),u=r(7),f=r(4),a=r(11),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=c(t),n=u(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(0),o=/#|\.prototype\./,i=function(t,n){var r=u[c(t)];return r==a||r!=f&&("function"==typeof n?e(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,r){var e=r(5);t.exports=function(t){return e[t+"Prototype"]}},function(t,n,r){var e=r(5),o=r(1),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n,r){var e=r(10);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e=r(28);t.exports=e("navigator","userAgent")||""},function(t,n,r){var e=r(0);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){t.exports=r(43)},,function(t,n){t.exports=!0},function(t,n,r){var e=r(2),o=r(0),i=r(4),c=Object.defineProperty,u={},f=function(t){throw t};t.exports=function(t,n){if(i(u,t))return u[t];n||(n={});var r=[][t],a=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:f,l=i(n,1)?n[1]:void 0;return u[t]=!!r&&!o((function(){if(a&&!e)return!0;var t={length:-1};a?c(t,1,{enumerable:!0,get:f}):t[1]=1,r.call(t,s,l)}))}},,function(t,n,r){var e=r(15);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e=r(34),o=r(39);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.4",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var e=r(1),o=r(46),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},,function(t,n){t.exports=function(){}},function(t,n,r){r(44);var e=r(5);t.exports=e.setInterval},function(t,n,r){var e=r(9),o=r(1),i=r(30),c=[].slice,u=function(t){return function(n,r){var e=arguments.length>2,o=e?c.call(arguments,2):void 0;return t(e?function(){("function"==typeof n?n:Function(n)).apply(this,o)}:n,r)}};e({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:u(o.setTimeout),setInterval:u(o.setInterval)})},,function(t,n,r){var e=r(1),o=r(8);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n,r){var e=r(31);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,r){"use strict";var e=r(7),o=r(12),i=r(6);t.exports=function(t,n,r){var c=e(n);c in t?o.f(t,c,i(0,r)):t[c]=r}},,,function(t,n,r){var e=r(3),o=r(37),i=r(13)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},function(t,n,r){var e,o,i=r(1),c=r(30),u=i.process,f=u&&u.versions,a=f&&f.v8;a?o=(e=a.split("."))[0]+e[1]:c&&(!(e=c.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=c.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},,,,,,,function(t,n,r){var e=r(17),o=r(19),i=r(29),c=r(21),u=r(51),f=[].push,a=function(t){var n=1==t,r=2==t,a=3==t,s=4==t,l=6==t,p=5==t||l;return function(d,y,v,b){for(var h,x,m=i(d),g=o(m),w=e(y,v,3),S=c(g.length),j=0,O=b||u,I=n?O(d,S):r?O(d,0):void 0;S>j;j++)if((p||j in g)&&(x=w(h=g[j],j,m),t))if(n)I[j]=x;else if(x)switch(t){case 3:return!0;case 5:return h;case 6:return j;case 2:f.call(I,h)}else if(s)return!1;return l?-1:a||s?s:I}};t.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6)}},function(t,n,r){var e=r(0),o=r(13),i=r(52),c=o("species");t.exports=function(t){return i>=51||!e((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},,,,,,,,,,,,,,,function(t,n,r){t.exports=r(117)},function(t,n,r){t.exports=r(121)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,r){"use strict";r.r(n);var e,o,i,c,u=r(75),f=r.n(u),a=r(76),s=r.n(a),l=r(32),p=r.n(l),d=(r(125),5),y=5,v=10,b=200,h=0;function x(){o.fillStyle="#c0b4b4",o.fillRect(0,0,500,300);for(var t=0;t<i.body.length;t++)o.save(),o.translate(i.body[t][0]*v,i.body[t][1]*v),o.fillStyle=0===t?"DarkGreen":"green",o.fillRect(0,0,v,v),o.restore();o.save(),o.translate(c.x*v,c.y*v),o.fillStyle="OrangeRed",o.fillRect(0,0,v,v),o.restore(),document.getElementsByClassName("score")[0].innerHTML=h,requestAnimationFrame(x)}function m(t,n){this.moving=!0,this.body=[[t,n]],this.direction="right",this.time=null,this.move=function(){var t=this;this.time=p()((function(){for(var n,r,e=s()(n=[]).call(n,t.body[t.body.length-1]),o=t.body.length-1;o>=1;o--)t.body[o][0]=t.body[o-1][0],t.body[o][1]=t.body[o-1][1];switch(t.direction){case"right":t.body[0][0]+=1;break;case"bottom":t.body[0][1]-=1;break;case"left":t.body[0][0]-=1;break;case"top":t.body[0][1]+=1}t.body[0][0]===c.x&&t.body[0][1]===c.y&&t.eat(e),(-1!==f()(r=t.body).call(r,(function(n,r){return 0!==r&&t.body[0][0]===n[0]&&t.body[0][1]===n[1]}))||t.body[0][0]===e[0]&&t.body[0][1]===e[1])&&(alert("你撞到自己了"),t.stop()),(t.body[0][0]<0||t.body[0][0]>49||t.body[0][1]<0||t.body[0][1]>29)&&(alert("你撞墙了"),t.stop())}),b)},this.eat=function(t){this.body.push(t),h+=1,c=new g},this.stop=function(){clearInterval(this.time)}}function g(){this.x=Math.floor(50*Math.random()),this.y=Math.floor(30*Math.random())}window.onload=function(){e=document.getElementById("canvas"),o=e.getContext("2d"),i=new m(d,y),c=new g,document.onkeydown=function(t){var n=t||window.event||arguments.callee.caller.arguments[0];n&&38==n.keyCode&&"top"!==i.direction&&(i.direction="bottom"),n&&37==n.keyCode&&"right"!==i.direction&&(i.direction="left"),n&&39==n.keyCode&&"left"!==i.direction&&(i.direction="right"),n&&40==n.keyCode&&"bottom"!==i.direction&&(i.direction="top")},x(),document.getElementById("start").onclick=function(){i.stop(),i.move()},document.getElementById("stop").onclick=function(){i.stop()},document.getElementById("restart").onclick=function(){i.stop(),i=new m(d,y),c=new g,h=0,i.move()}}},function(t,n,r){var e=r(118);t.exports=e},function(t,n,r){var e=r(119),o=Array.prototype;t.exports=function(t){var n=t.findIndex;return t===o||t instanceof Array&&n===o.findIndex?e:n}},function(t,n,r){r(120);var e=r(27);t.exports=e("Array").findIndex},function(t,n,r){"use strict";var e=r(9),o=r(59).findIndex,i=r(42),c=r(35),u=!0,f=c("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){u=!1})),e({target:"Array",proto:!0,forced:u||!f},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("findIndex")},function(t,n,r){var e=r(122);t.exports=e},function(t,n,r){var e=r(123),o=Array.prototype;t.exports=function(t){var n=t.concat;return t===o||t instanceof Array&&n===o.concat?e:n}},function(t,n,r){r(124);var e=r(27);t.exports=e("Array").concat},function(t,n,r){"use strict";var e=r(9),o=r(0),i=r(37),c=r(3),u=r(29),f=r(21),a=r(48),s=r(51),l=r(60),p=r(13),d=r(52),y=p("isConcatSpreadable"),v=d>=51||!o((function(){var t=[];return t[y]=!1,t.concat()[0]!==t})),b=l("concat"),h=function(t){if(!c(t))return!1;var n=t[y];return void 0!==n?!!n:i(t)};e({target:"Array",proto:!0,forced:!v||!b},{concat:function(t){var n,r,e,o,i,c=u(this),l=s(c,0),p=0;for(n=-1,e=arguments.length;n<e;n++)if(h(i=-1===n?c:arguments[n])){if(p+(o=f(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<o;r++,p++)r in i&&a(l,p,i[r])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");a(l,p++,i)}return l.length=p,l}})},function(t,n,r){}]);