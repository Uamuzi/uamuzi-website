!function(){"use strict";var e,t,n,r,o,a={},c={};function u(e){var t=c[e];if(void 0!==t)return t.exports;var n=c[e]={exports:{}};return a[e].call(n.exports,n,n.exports,u),n.exports}u.m=a,e=[],u.O=function(t,n,r,o){if(!n){var a=1/0;for(f=0;f<e.length;f++){n=e[f][0],r=e[f][1],o=e[f][2];for(var c=!0,s=0;s<n.length;s++)(!1&o||a>=o)&&Object.keys(u.O).every((function(e){return u.O[e](n[s])}))?n.splice(s--,1):(c=!1,o<a&&(a=o));if(c){e.splice(f--,1);var i=r();void 0!==i&&(t=i)}}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[n,r,o]},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},u.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);u.r(o);var a={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},u.d(o,a),o},u.d=function(e,t){for(var n in t)u.o(t,n)&&!u.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},u.f={},u.e=function(e){return Promise.all(Object.keys(u.f).reduce((function(t,n){return u.f[n](e,t),t}),[]))},u.u=function(e){return{62:"component---src-pages-policy-js",82:"component---src-pages-hub-js",315:"component---src-pages-innovation-js",351:"commons",371:"component---src-pages-team-js",476:"component---src-pages-using-ssr-js",501:"component---src-pages-contact-js",617:"component---src-pages-page-2-js",678:"component---src-pages-index-js",682:"component---src-pages-about-js",713:"component---src-templates-using-dsg-js",767:"component---src-pages-pillars-js",883:"component---src-pages-404-js",921:"component---src-pages-volunteers-js",970:"component---src-pages-using-typescript-tsx"}[e]+"-"+{62:"404f5174172ccc40e230",82:"58bdcd27384d4a6e6b48",315:"dd85fcb50e71e8584a12",351:"da34578912d031106844",371:"d04ec625961186fe58e7",476:"ff0b719a3871ce22efba",501:"b9c915a3ac4f5b3c5a4b",617:"25816ffb526f37d9a8bb",678:"5cb833eaaa646ba82461",682:"1e87d53b6ea9de4b7ed0",713:"e468a4489893379762d2",767:"100df5c1e209801fcb20",883:"ea3210e056706934953a",921:"fe13e683d1deec6f4d53",970:"583d45737e9e9fadef51"}[e]+".js"},u.miniCssF=function(e){return"styles.a03aa6959ba6394c18d1.css"},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="gatsby-starter-default:",u.l=function(e,t,n,a){if(r[e])r[e].push(t);else{var c,s;if(void 0!==n)for(var i=document.getElementsByTagName("script"),f=0;f<i.length;f++){var p=i[f];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==o+n){c=p;break}}c||(s=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.setAttribute("data-webpack",o+n),c.src=e),r[e]=[t];var d=function(t,n){c.onerror=c.onload=null,clearTimeout(l);var o=r[e];if(delete r[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},l=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),s&&document.head.appendChild(c)}},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="/",function(){var e={658:0,532:0};u.f.j=function(t,n){var r=u.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var a=u.p+u.u(t),c=new Error;u.l(a,(function(n){if(u.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,r[1](c)}}),"chunk-"+t,t)}},u.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,a=n[0],c=n[1],s=n[2],i=0;if(a.some((function(t){return 0!==e[t]}))){for(r in c)u.o(c,r)&&(u.m[r]=c[r]);if(s)var f=s(u)}for(t&&t(n);i<a.length;i++)o=a[i],u.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return u.O(f)},n=self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();
//# sourceMappingURL=webpack-runtime-70522edd4363eedcd41a.js.map