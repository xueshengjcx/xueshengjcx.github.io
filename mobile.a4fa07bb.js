(function(e){function t(t){for(var r,o,u=t[0],i=t[1],l=t[2],s=0,f=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={mobile:0},c={mobile:0},a=[];function u(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-2b57a0f5":"143a51b6","chunk-08d50c9b":"826e804b","chunk-1e842fd2":"45e066cd","chunk-54a83ea8":"d1878aba","chunk-70ebb6a5":"80c82f50","chunk-732f3e7e":"dcbdc83e","chunk-b8c82dc2":"32fd7079","chunk-98800c54":"85484d67","chunk-b8c91d32":"32e64f39","chunk-2d0b1db6":"feca5d61"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-2b57a0f5":1,"chunk-08d50c9b":1,"chunk-1e842fd2":1,"chunk-54a83ea8":1,"chunk-70ebb6a5":1,"chunk-732f3e7e":1,"chunk-b8c82dc2":1,"chunk-98800c54":1,"chunk-b8c91d32":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="static/css/"+({}[e]||e)+"."+{"chunk-2b57a0f5":"701813f6","chunk-08d50c9b":"d6212021","chunk-1e842fd2":"2475ee68","chunk-54a83ea8":"70ac52c1","chunk-70ebb6a5":"d6b25601","chunk-732f3e7e":"e7e4cc36","chunk-b8c82dc2":"9995fda4","chunk-98800c54":"6e489474","chunk-b8c91d32":"14bc1389","chunk-2d0b1db6":"31d6cfe0"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var l=a[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===c))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],s=l.getAttribute("data-href");if(s===r||s===c)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],h.parentNode.removeChild(h),n(a)},h.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(h);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}c[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/checkinout/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var h=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3a10":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e17f");var r=n("2241"),o=(n("e7e5"),n("d399")),c=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],i=(n("5c0b"),n("2877")),l={},s=Object(i["a"])(l,a,u,!1,null,null,null),f=s.exports,h=(n("d3b7"),n("8c4f"));c["a"].use(h["a"]);var d=[{path:"/",redirect:"/applyInfo"},{path:"/login",meta:{title:"登录"},name:"Login",component:function(){return Promise.all([n.e("chunk-2b57a0f5"),n.e("chunk-08d50c9b")]).then(n.bind(null,"ede4"))}},{path:"/registe",name:"Register",meta:{title:"注册"},component:function(){return Promise.all([n.e("chunk-2b57a0f5"),n.e("chunk-732f3e7e")]).then(n.bind(null,"7831"))}},{path:"/checkin",name:"checkin",meta:{title:"学生进出校报备单"},component:function(){return Promise.all([n.e("chunk-2b57a0f5"),n.e("chunk-1e842fd2")]).then(n.bind(null,"33c7"))}},{path:"/checkout",name:"checkout",meta:{title:"学生进出校报备单"},component:function(){return Promise.all([n.e("chunk-2b57a0f5"),n.e("chunk-b8c82dc2")]).then(n.bind(null,"6de8"))}},{path:"/choose",name:"Choose",meta:{title:"学生进出校报备单选择页"},component:function(){return n.e("chunk-98800c54").then(n.bind(null,"bdd7"))}},{path:"/applyInfo",name:"ApplyInfo",meta:{title:"学生进出校报备结果页"},component:function(){return Promise.all([n.e("chunk-2b57a0f5"),n.e("chunk-70ebb6a5")]).then(n.bind(null,"7718"))}},{path:"/safebook",name:"Safebook",meta:{title:"学生进出校报备结果页"},component:function(){return n.e("chunk-b8c91d32").then(n.bind(null,"5b88"))}},{path:"/backTo",name:"backTo",meta:{title:"学生收假返校确认"},component:function(){return Promise.all([n.e("chunk-2b57a0f5"),n.e("chunk-54a83ea8")]).then(n.bind(null,"5235"))}}],p=new h["a"]({base:"/checkinout/",routes:d}),b=p,m=n("2f62");c["a"].use(m["a"]);var k=new m["a"].Store({state:{token:null},mutations:{},actions:{},modules:{}}),g=n("283e"),v=n.n(g),y=n("8237"),T=n.n(y),E=(n("3a10"),"/choose"),w="",O="xnzf-access-controll_token",P={TARGET_URL:E,TOKEN_KEY:O,TARGET_PARAM:w},A=n("bc3a"),_=n.n(A),S=_.a.create({timeout:3e4,withCredentials:!1,headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json; charset=utf-8"}}),j="https://alumni.swupl.edu.cn/api";function C(e,t,n){return S({method:e,url:t,data:"POST"===e&&n?JSON.stringify(n):null,baseURL:j})}function L(e,t){return S({method:"POST",url:e,data:t,baseURL:j,headers:{"Access-Control-Allow-Origin":"*","Content-Type":"multipart/form-data;"}})}S.interceptors.request.use((function(e){return e.headers["Authorization"]=localStorage.getItem(P.TOKEN_KEY)||"",e}),(function(e){return Promise.reject(e)})),S.interceptors.response.use((function(e){return!e.data||12!==e.data.code&&3!==e.data.code||(localStorage.removeItem(P.TOKEN_KEY),b.push("Login")),e}),(function(e){return Promise.reject(e)}));var R={get:function(e){return C("GET",e)},post:function(e,t){return C("POST",e,t)},upload:function(e,t){return L(e,t)}};c["a"].prototype.$md5=T.a,c["a"].use(v.a,{preLoad:1,attempt:1,listenEvents:["scroll"],lazyComponent:!0}),c["a"].config.productionTip=!1,c["a"].use(o["a"]),c["a"].use(r["a"]),c["a"].prototype.GLOBAL=P,c["a"].prototype.HTTP=R,b.beforeEach((function(e,t,n){console.log(e);var r=localStorage.getItem(P.TOKEN_KEY),c=e.path;switch(document.title="".concat(e.meta.title),c){case"/checkin":case"/checkout":P.TARGET_URL=c,P.TARGET_PARAM=e.query;case"/applyInfo":case"/choose":if(!r)return o["a"].fail("请登录"),void n("/login");n();break;default:n();break}})),new c["a"]({router:b,store:k,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){}});