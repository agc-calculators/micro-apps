exports.agcMicroApps=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"loadScript",function(){return o}),r.d(t,"loadStyle",function(){return c});const n=new Map;function o(t,r){let o;return n.has(t)?o=n.get(t):e&&e[r]?o=Promise.resolve(e[r]):(o=new Promise((e,r)=>{let n=document.createElement("script");n.onerror=(e=>r(new Error(`Failed to load '${t}'`))),n.onload=e,n.async=!0,n.src=t,document.currentScript?document.currentScript.parentNode.insertBefore(n,document.currentScript):(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}),n.set(t,o)),o.then(()=>{if(e[r])return e[r];throw new Error(`"${r}" was not created by "${t}"`)})}function c(e){new Promise((t,r)=>{let n=document.createElement("link");n.onerror=(t=>r(new Error(`Failed to load '${e}'`))),n.onload=t,n.async=!0,n.href=e,n.rel="stylesheet",(document.head||document.getElementsByTagName("head")[0]).appendChild(n)})}}.call(this,r(2))},function(e,t){e.exports=require("react")},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r(0);var c=function(e){const[t,r]=Object(n.useState)({loaded:!1,error:!1,component:null});return Object(n.useEffect)(()=>{fetch(e.embedUrl).then(e=>e.json()).then(n=>{console.log("micro data",n,e.embedUrl),Object(o.loadScript)(`${e.hostUrl}/${n.js}`,e.global).then(e=>{console.log("module",e),r({...t,loaded:!0,component:e.Component})}).catch(e=>{console.log("script error",e),r({...t,loaded:!1,error:e})}),n.css&&Object(o.loadStyle)(`${e.hostUrl}/${n.css}`)}).catch(e=>{r({...t,error:e,loaded:!1})})},[e.embedUrl]),[t.loaded,t.error,t.component]};r.d(t,"useMicroApp",function(){return c}),r.d(t,"scripts",function(){return o})}]);