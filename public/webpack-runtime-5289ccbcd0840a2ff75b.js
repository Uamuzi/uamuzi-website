!function(){"use strict";var e,t,n,r,o,c={},a={};function u(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return c[e].call(n.exports,n,n.exports,u),n.exports}u.m=c,e=[],u.O=function(t,n,r,o){if(!n){var c=1/0;for(f=0;f<e.length;f++){n=e[f][0],r=e[f][1],o=e[f][2];for(var a=!0,i=0;i<n.length;i++)(!1&o||c>=o)&&Object.keys(u.O).every((function(e){return u.O[e](n[i])}))?n.splice(i--,1):(a=!1,o<c&&(c=o));if(a){e.splice(f--,1);var s=r();void 0!==s&&(t=s)}}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[n,r,o]},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},u.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);u.r(o);var c={};t=t||[null,n({}),n([]),n(n)];for(var a=2&r&&e;"object"==typeof a&&!~t.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((function(t){c[t]=function(){return e[t]}}));return c.default=function(){return e},u.d(o,c),o},u.d=function(e,t){for(var n in t)u.o(t,n)&&!u.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},u.f={},u.e=function(e){return Promise.all(Object.keys(u.f).reduce((function(t,n){return u.f[n](e,t),t}),[]))},u.u=function(e){return{62:"component---src-pages-policy-js",82:"component---src-pages-hub-js",315:"component---src-pages-innovation-js",351:"commons",371:"component---src-pages-team-js",476:"component---src-pages-using-ssr-js",501:"component---src-pages-contact-js",617:"component---src-pages-page-2-js",678:"component---src-pages-index-js",682:"component---src-pages-about-js",713:"component---src-templates-using-dsg-js",767:"component---src-pages-pillars-js",883:"component---src-pages-404-js",921:"component---src-pages-volunteers-js",970:"component---src-pages-using-typescript-tsx"}[e]+"-"+{62:"2e3499977aff7a1ba756",82:"0c4aea3fe92487bca855",315:"fa3ff4009b780cc09fab",351:"848bb4d41173e7cce6ba",371:"aeabbed6ad51758e0581",476:"177b56479b795d95e82f",501:"f560ea6cd75ccffa352f",617:"f8ccd7fb5c891e48f4ba",678:"a0e095bf5bb02ea44a09",682:"89fe19c602134f5c9dd0",713:"ab68a028d4a7d0a5e88e",767:"53ce35fb154c0e737a7b",883:"ac336064b9e60948e449",921:"08b2f5df1dbc152e154a",970:"cdac474b832c16615684"}[e]+".js"},u.miniCssF=function(e){return"styles.02e9f23524c8aa1a3535.css"},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="uamuzi:",u.l=function(e,t,n,c){if(r[e])r[e].push(t);else{var a,i;if(void 0!==n)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var p=s[f];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==o+n){a=p;break}}a||(i=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,u.nc&&a.setAttribute("nonce",u.nc),a.setAttribute("data-webpack",o+n),a.src=e),r[e]=[t];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(l);var o=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},l=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),i&&document.head.appendChild(a)}},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="/",function(){var e={658:0,532:0};u.f.j=function(t,n){var r=u.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var c=u.p+u.u(t),a=new Error;u.l(c,(function(n){if(u.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",a.name="ChunkLoadError",a.type=o,a.request=c,r[1](a)}}),"chunk-"+t,t)}},u.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,c=n[0],a=n[1],i=n[2],s=0;if(c.some((function(t){return 0!==e[t]}))){for(r in a)u.o(a,r)&&(u.m[r]=a[r]);if(i)var f=i(u)}for(t&&t(n);s<c.length;s++)o=c[s],u.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return u.O(f)},n=self.webpackChunkuamuzi=self.webpackChunkuamuzi||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();
//# sourceMappingURL=webpack-runtime-5289ccbcd0840a2ff75b.js.map