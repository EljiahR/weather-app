(()=>{"use strict";var e,r,t,o,a={817:(e,r,t)=>{t.a(e,(async(e,r)=>{try{async function t(){try{const e=await fetch("https://api.weatherapi.com/v1/current.json?key=249853e4f9474977b04195448232710&q=Ohio",{mode:"cors"});return await e.json()}catch(e){return e}}document.getElementById("location"),document.getElementById("condition"),document.getElementById("temp");const o=async()=>t(),a=await o();console.log(a.location.name),r()}catch(n){r(n)}}),1)}},n={};function c(e){var r=n[e];if(void 0!==r)return r.exports;var t=n[e]={exports:{}};return a[e](t,t.exports,c),t.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",r="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},c.a=(a,n,c)=>{var p;c&&((p=[]).d=-1);var s,u,i,m=new Set,f=a.exports,y=new Promise(((e,r)=>{i=r,u=e}));y[r]=f,y[e]=e=>(p&&e(p),m.forEach(e),y.catch((e=>{}))),a.exports=y,n((a=>{var n;s=(a=>a.map((a=>{if(null!==a&&"object"==typeof a){if(a[e])return a;if(a.then){var n=[];n.d=0,a.then((e=>{c[r]=e,o(n)}),(e=>{c[t]=e,o(n)}));var c={};return c[e]=e=>e(n),c}}var p={};return p[e]=e=>{},p[r]=a,p})))(a);var c=()=>s.map((e=>{if(e[t])throw e[t];return e[r]})),u=new Promise((r=>{(n=()=>r(c)).r=0;var t=e=>e!==p&&!m.has(e)&&(m.add(e),e&&!e.d&&(n.r++,e.push(n)));s.map((r=>r[e](t)))}));return n.r?u:c()}),(e=>(e?i(y[t]=e):u(f),o(p)))),p&&p.d<0&&(p.d=0)},c(817)})();