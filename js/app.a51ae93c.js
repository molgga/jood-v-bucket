(function(e){function t(t){for(var o,r,i=t[0],u=t[1],l=t[2],s=0,p=[];s<i.length;s++)r=i[s],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&p.push(c[r][0]),c[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==c[i]&&(o=!1)}o&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},c={app:0},a=[];function i(e){return u.p+"js/"+({example:"example"}[e]||e)+"."+{"chunk-1c7b6ae8":"2435eca8","chunk-16b8c3c6":"f307afc9","chunk-17563988":"00ea9498","chunk-2dcf8754":"fdd820db","chunk-b1ec2d02":"f8cff937","chunk-e9c81b92":"6c696586",example:"69421500"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-1c7b6ae8":1,"chunk-16b8c3c6":1,"chunk-17563988":1,"chunk-2dcf8754":1,"chunk-b1ec2d02":1,"chunk-e9c81b92":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({example:"example"}[e]||e)+"."+{"chunk-1c7b6ae8":"9ce23070","chunk-16b8c3c6":"a74fa8f8","chunk-17563988":"3cc7308b","chunk-2dcf8754":"d93110d2","chunk-b1ec2d02":"43a94c0a","chunk-e9c81b92":"d9c0b497",example:"31d6cfe0"}[e]+".css",c=u.p+o,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var l=a[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===o||s===c))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){l=p[i],s=l.getAttribute("data-href");if(s===o||s===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],f.parentNode.removeChild(f),n(a)},f.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){r[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=a);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var p=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",p.name="ChunkLoadError",p.type=o,p.request=r,n[1](p)}c[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="https://molgga.github.io/jood-v-bucket/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"4d6f":function(e,t,n){},"8f4e":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));n("8f0b"),n("ef1f"),n("fa8c");var o=[{key:"sample1",label:"sample all #1",component:function(){return Promise.all([n.e("chunk-1c7b6ae8"),n.e("chunk-e9c81b92")]).then(n.bind(null,"51e3"))}},{key:"selection-drag",label:"custom selection drag",component:function(){return Promise.all([n.e("chunk-1c7b6ae8"),n.e("chunk-17563988")]).then(n.bind(null,"783d"))}},{key:"container-indicate",label:"custom container indicate",component:function(){return Promise.all([n.e("chunk-1c7b6ae8"),n.e("chunk-16b8c3c6")]).then(n.bind(null,"c7f4"))}},{key:"container-inject",label:"container inject",component:function(){return Promise.all([n.e("chunk-1c7b6ae8"),n.e("chunk-2dcf8754")]).then(n.bind(null,"5be5"))}},{key:"item-inject",label:"item inject",component:function(){return Promise.all([n.e("chunk-1c7b6ae8"),n.e("chunk-b1ec2d02")]).then(n.bind(null,"c371"))}}],r=function(){var e={};return o.forEach((function(t){e[t.key]=t})),e}(),c=function(){var e=[];for(var t in r){var n=r[t];e.push({to:"/example/".concat(t),label:n.label})}return e}()},a36f:function(e,t,n){},b7bb:function(e,t,n){"use strict";var o=n("a36f"),r=n.n(o);r.a},cd49:function(e,t,n){"use strict";n.r(t);n("9531"),n("26d3"),n("2007"),n("41ab"),n("4d6f"),n("de2a");var o=n("9869"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"app"}},[n("v-navigation-drawer",{attrs:{clipped:e.$vuetify.breakpoint.lgAndUp,app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-group",{attrs:{value:"true"},scopedSlots:e._u([{key:"activator",fn:function(){return[n("v-list-item-title",[e._v("Examples")])]},proxy:!0}])},e._l(e.exampleLinks,(function(t,o){return n("v-list-item",{key:o,attrs:{link:"",to:t.to}},[n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.label))]),t.description?n("v-list-item-subtitle",[e._v(e._s(t.description))]):e._e()],1)],1)})),1)],1)],1),n("v-app-bar",{attrs:{"clipped-left":e.$vuetify.breakpoint.lgAndUp,color:"blue darken-2",app:"",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",{staticClass:"app-title"},[e._v("@jood/v-bucket")]),n("v-spacer"),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""},on:{click:e.onGoGithub}},"v-btn",r,!1),o),[n("v-icon",[e._v("code")])],1)]}}])},[n("span",[e._v("Github")])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""},on:{click:e.onGoNpm}},"v-btn",r,!1),o),[n("v-icon",[e._v("move_to_inbox")])],1)]}}])},[n("span",[e._v("NPM")])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""},on:{click:e.onGoDocument}},"v-btn",r,!1),o),[n("v-icon",[e._v("library_books")])],1)]}}])},[n("span",[e._v("Document")])])],1),n("v-main",[n("v-container",{staticClass:"fill-height app-body-container"},[n("router-view",{staticClass:"app-body"})],1)],1)],1)},c=[],a=n("c465"),i=n.n(a),u=n("8f4e"),l=Object(a["defineComponent"])({setup:function(){var e=null,t=function(){r("https://molgga.github.io/jood-v-bucket/documents")},n=function(){r("https://github.com/molgga/jood-v-bucket")},o=function(){r("https://www.npmjs.com/package/@jood/v-bucket")},r=function(e){window.open(e)};return{drawer:e,exampleLinks:u["b"],onGoGithub:n,onGoNpm:o,onGoDocument:t}}}),s=l,p=(n("b7bb"),n("2be6")),f=Object(p["a"])(s,r,c,!1,null,"f5a6268c",null),d=f.exports,b=(n("ef1f"),n("5f2b")),v=!0,m=v?"/jood-v-bucket":"";o["default"].use(b["a"]);var h=[{path:"/example/:example",name:"Example",props:!0,component:function(){return n.e("example").then(n.bind(null,"f3c2"))}}],k=new b["a"]({mode:"history",base:m,routes:h}),g=k,y=n("4afd"),_=n.n(y);o["default"].config.productionTip=!1,o["default"].use(i.a),o["default"].use(_.a),new o["default"]({router:g,vuetify:new _.a({icons:{iconfont:"md"}}),render:function(e){return e(d)}}).$mount("#app")}});