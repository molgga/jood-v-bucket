(function(){"use strict";var e={3006:function(e,t,n){n.d(t,{A0:function(){return i},Nc:function(){return a},k5:function(){return r}});n(8188),n(8673),n(6886),n(1939);var o=n(7875),r=[{key:"sample1",label:"Sample bucket group",component:(0,o.RC)((function(){return Promise.all([n.e(786),n.e(21)]).then(n.bind(n,2093))}))},{key:"selection-drag",label:"Custom SelectionDrag",component:(0,o.RC)((function(){return Promise.all([n.e(786),n.e(917)]).then(n.bind(n,9335))}))},{key:"container-indicate",label:"Custom ContainerIndicate",component:(0,o.RC)((function(){return Promise.all([n.e(786),n.e(78)]).then(n.bind(n,7257))}))},{key:"container-inject",label:"Inject bucket-container-ref",component:(0,o.RC)((function(){return Promise.all([n.e(786),n.e(164)]).then(n.bind(n,3601))}))},{key:"item-inject",label:"Inject bucket-item-ref",component:(0,o.RC)((function(){return Promise.all([n.e(786),n.e(873)]).then(n.bind(n,4611))}))}],i=function(){var e={};return r.forEach((function(t){e[t.key]=t})),e}(),a=function(){var e=[];for(var t in i){var n=i[t];e.push({to:"/demo/".concat(t),label:n.label})}return e}()},3036:function(e,t,n){var o={};n.r(o),n.d(o,{DemoButton:function(){return ee},DemoLayout:function(){return A},DemoMenu:function(){return X},DemoMenuGroup:function(){return $},DemoMenuItem:function(){return H},DemoPanel:function(){return we},DemoPanelDevicer:function(){return Se},DemoPreviewCode:function(){return de}});n(5735),n(3439),n(3105),n(1515);var r=n(4825),i=n(7875),a={class:"menu-wrap"};function u(e,t,n,o,r,u){var c=(0,i.up)("demo-menu"),l=(0,i.up)("router-view"),s=(0,i.up)("demo-layout");return(0,i.wg)(),(0,i.j4)(s,{class:"layout",title:"@jood/v-bucket",onGoGithub:o.onGoGithub,onGoNpm:o.onGoNpm,onGoDoc:o.onGoDocument},{menu:(0,i.w5)((function(){return[(0,i._)("nav",a,[(0,i.Wm)(c,{menuList:o.menuList},null,8,["menuList"])])]})),default:(0,i.w5)((function(){return[(0,i.Wm)(l,{class:"app-body"})]})),_:1},8,["onGoGithub","onGoNpm","onGoDoc"])}var c=n(2428),l=(n(8178),n(3006)),s={setup:function(){var e=function(){o("https://molgga.github.io/jood-v-bucket/documents")},t=function(){o("https://github.com/molgga/jood-v-bucket")},n=function(){o("https://www.npmjs.com/package/@jood/v-bucket")},o=function(e){window.open(e)},r=[{to:"/",label:"Getting started"}].concat((0,c.Z)(l.Nc));return{menuList:r,demoLinks:l.Nc,onGoGithub:t,onGoNpm:n,onGoDocument:e}}},d=n(4407);const f=(0,d.Z)(s,[["render",u],["__scopeId","data-v-bc93429a"]]);var p=f,m=(n(8188),n(8673),n(6886),n(2049)),v=!0,g=v?"/jood-v-bucket":"",b=[{path:"/",name:"GettingStarted",props:!0,component:(0,i.RC)((function(){return n.e(496).then(n.bind(n,9866))}))},{path:"/demo/:demo",name:"DemoView",props:!0,component:(0,i.RC)((function(){return n.e(577).then(n.bind(n,978))}))},{path:"/:catchAll(.*)",name:"GettingStarted",props:!0,component:(0,i.RC)((function(){return n.e(496).then(n.bind(n,9866))}))}],y=(0,m.p7)({history:(0,m.PO)(g),routes:b}),h=y,w=n(349),k=function(e){return(0,i.dD)("data-v-08a5e974"),e=e(),(0,i.Cn)(),e},_={class:"aside"},D=(0,i.Uk)("menu"),S=(0,i.Uk)("menu_open"),C={class:"tit"},j=k((function(){return(0,i._)("div",{class:"spacer"},null,-1)})),O={class:"bside"},G={class:"ly-content"};function I(e,t,n,o,r,a){return(0,i.wg)(),(0,i.iD)("div",{class:(0,w.C_)(["demo-layout",e.classes])},[(0,i._)("div",{class:"ly-header",style:(0,w.j5)(e.headStyle)},[(0,i._)("div",_,[(0,i._)("i",{class:"menu-toggle material-icons",onClick:t[0]||(t[0]=function(){return e.onMenuToggle&&e.onMenuToggle.apply(e,arguments)})},[e.layoutState.asideOpen?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[D],64)):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[S],64))]),(0,i._)("h1",C,(0,w.zw)(e.title),1)]),j,(0,i._)("div",O,[e.outGithub?((0,i.wg)(),(0,i.iD)("i",{key:0,class:"out-link material-icons",onClick:t[1]||(t[1]=function(t){return e.onOutlink("goGithub")}),title:"Github"},"code")):(0,i.kq)("",!0),e.outNpm?((0,i.wg)(),(0,i.iD)("i",{key:1,class:"out-link material-icons",onClick:t[2]||(t[2]=function(t){return e.onOutlink("goNpm")}),title:"NPM package"},"move_to_inbox")):(0,i.kq)("",!0),e.outDoc?((0,i.wg)(),(0,i.iD)("i",{key:2,class:"out-link material-icons",onClick:t[3]||(t[3]=function(t){return e.onOutlink("goDoc")}),title:"Documentaion"},"library_books")):(0,i.kq)("",!0)])],4),(0,i._)("div",{class:"ly-aside",style:(0,w.j5)(e.asideStyle)},[(0,i.WI)(e.$slots,"menu",{},void 0,!0)],4),(0,i._)("div",{class:"ly-body",style:(0,w.j5)(e.bodyStyle)},[(0,i._)("div",G,[(0,i.WI)(e.$slots,"default",{},void 0,!0)])],4),(0,i._)("div",{class:"ly-overlay",onClick:t[4]||(t[4]=function(){return e.onMenuToggle&&e.onMenuToggle.apply(e,arguments)})})],2)}n(1245);var L=n(641),N=(0,i.aZ)({name:"DemoLayout",props:{title:{type:String,default:"foo"},sizeTop:{type:Number,default:60},sizeAside:{type:Number,default:240},outGithub:{type:Boolean,default:!0},outNpm:{type:Boolean,default:!0},outDoc:{type:Boolean,default:!0}},setup:function(e,t){var n=t.emit,o=function(){return 960<=window.innerWidth},r=(0,L.qj)({asideOpen:o(),top:e.sizeTop,left:e.sizeAside,right:0,bottom:0}),a=(0,i.Fl)((function(){var e=r.asideOpen,t=r.top,n=r.left,i="".concat(t,"px"),a=e&&o()?"".concat(n,"px"):0;return{top:i,left:a,right:0,bottom:0}})),u=(0,i.Fl)((function(){var e=a.value.top;return{height:e}})),c=(0,i.Fl)((function(){var t=e.sizeAside,n=r.asideOpen,o=a.value,i=o.top,u=(o.left,n?0:-t);return{top:i,width:"".concat(t,"px"),transform:"translateX(".concat(u,"px)")}})),l=(0,i.Fl)((function(){var e=a.value,t=e.top,n=e.right,o=e.bottom,r=e.left;return{padding:"".concat(t," ").concat(n," ").concat(o," ").concat(r)}})),s=(0,i.Fl)((function(){var e=r.asideOpen;return{"need-overlay":e&&!o()}})),d=function(){r.asideOpen=!0},f=function(){r.asideOpen=!1},p=function(){r.asideOpen?f():d()},m=function(){p()},v=function(e){n(e)};return{layoutState:r,classes:s,headStyle:u,asideStyle:c,bodyStyle:l,onMenuToggle:m,onOutlink:v}}});const P=(0,d.Z)(N,[["render",I],["__scopeId","data-v-08a5e974"]]);var A=P,M=(0,i.uE)('<div class="foot-desc" data-v-f79e665a><div class="desc-box" data-v-f79e665a><i class="icon material-icons" data-v-f79e665a>tag_faces</i><p class="desc" data-v-f79e665a> It is being used by <br data-v-f79e665a><a class="link" href="https://jood-lab.web.app/" target="_blank" data-v-f79e665a> jood-lab.web.app </a></p></div></div>',1);function T(e,t,n,o,r,a){var u=(0,i.up)("demo-menu-group");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(u,{menuList:n.menuList},null,8,["menuList"]),M])}var x={class:"demo-menu-group"};function Z(e,t,n,o,r,a){var u=(0,i.up)("demo-menu-group",!0),c=(0,i.up)("demo-menu-item");return(0,i.wg)(),(0,i.iD)("div",x,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.menuList,(function(e,t){return(0,i.wg)(),(0,i.iD)("div",{key:t,class:"group"},[e.children?((0,i.wg)(),(0,i.j4)(u,{key:0,menuList:e.children},null,8,["menuList"])):((0,i.wg)(),(0,i.j4)(c,{key:1,menu:e},null,8,["menu"]))])})),128))])}n(4115),n(634);var z={class:"demo-menu-item"},E={class:"tit"},F={class:"desc"};function B(e,t,n,o,r,a){var u=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",z,[(0,i.Wm)(u,{to:n.menu.to,class:"menu-action"},{default:(0,i.w5)((function(){return[(0,i._)("span",E,(0,w.zw)(n.menu.label),1),(0,i._)("span",F,(0,w.zw)(n.menu.description),1)]})),_:1},8,["to"])])}var q={name:"DemoMenuItem",props:{menu:{type:Object,default:function(){return{}}}},setup:function(){return{}}};const W=(0,d.Z)(q,[["render",B],["__scopeId","data-v-8a624f7c"]]);var H=W,R={name:"DemoMenuGroup",components:{DemoMenuItem:H},props:{menuList:{type:Array,default:function(){return[]}}},setup:function(){return{}}};const U=(0,d.Z)(R,[["render",Z],["__scopeId","data-v-47c28b19"]]);var $=U,Y={name:"DemoMenu",components:{DemoMenuGroup:$},props:{menuList:{type:Array,default:function(){return[]}}},setup:function(){return{}}};const K=(0,d.Z)(Y,[["render",T],["__scopeId","data-v-f79e665a"]]);var X=K;function V(e,t,n,o,r,a){return(0,i.wg)(),(0,i.iD)("button",{class:(0,w.C_)(["demo-button",e.buttonStyle.classes]),style:(0,w.j5)(e.buttonStyle.style)},[(0,i.WI)(e.$slots,"default",{},void 0,!0)],6)}n(7950),n(1850);var J=(0,i.aZ)({name:"DemoButton",props:{color:{type:String,default:""},text:{type:Boolean,default:!1}},setup:function(e){var t=(0,i.Fl)((function(){var t=e.color,n=e.text,o={},r=[];return n?(r.push("is-text"),t&&/^(#|rgb)/.test(t)?o.color=t:r.push(t)):t&&/^(#|rgb)/.test(t)?o.backgroundColor=t:r.push(t),{style:o,classes:r}}));return{buttonStyle:t}}});const Q=(0,d.Z)(J,[["render",V],["__scopeId","data-v-5aa8dc04"]]);var ee=Q,te={class:"demo-preview-code"},ne={key:0,class:"code-head"},oe={class:"tit"},re={class:"desc"},ie={ref:"refContainer",class:"panel-viewer"};function ae(e,t,n,o,r,a){return(0,i.wg)(),(0,i.iD)("div",te,[e.viewState.hasHead?((0,i.wg)(),(0,i.iD)("div",ne,[(0,i._)("h3",oe,(0,w.zw)(e.viewState.title),1),(0,i._)("div",re,(0,w.zw)(e.viewState.description),1)])):(0,i.kq)("",!0),(0,i._)("div",ie,[(0,i._)("pre",{class:(0,w.C_)(e.viewState.language)},[(0,i._)("code",null,[(0,i.WI)(e.$slots,"default",{},(function(){return[(0,i.Uk)((0,w.zw)(e.viewState.code),1)]}),!0)])],2)],512)])}n(5794);var ue=n(8476),ce=n.n(ue),le=(n(3083),n(8650),(0,i.aZ)({name:"DemoPreviewCode",props:{title:{type:String,default:""},description:{type:String,default:""},lang:{type:String,default:"typescript"},code:{type:String,default:""}},setup:function(e){var t=(0,L.XI)(null),n=(0,i.Fl)((function(){var t=e.title,n=e.description,o=e.lang,r=void 0===o?"":o,i=e.code,a=void 0===i?"":i,u=t||n;return{hasHead:u,title:t,description:n,language:"language-".concat(r),code:a.trim()}}));return(0,i.bv)((function(){ce().highlightAllUnder(t.value)})),{refContainer:t,viewState:n}}}));const se=(0,d.Z)(le,[["render",ae],["__scopeId","data-v-0cd9e527"]]);var de=se,fe={class:"demo-panel"},pe={key:0,class:"panel-head"},me={key:0,class:"tit"},ve={key:1,class:"desc"},ge={class:"panel-body"};function be(e,t,n,o,r,a){return(0,i.wg)(),(0,i.iD)("div",fe,[e.viewState.hasHead?((0,i.wg)(),(0,i.iD)("div",pe,[e.viewState.title?((0,i.wg)(),(0,i.iD)("h3",me,(0,w.zw)(e.viewState.title),1)):(0,i.kq)("",!0),e.viewState.description?((0,i.wg)(),(0,i.iD)("p",ve,(0,w.zw)(e.viewState.description),1)):(0,i.kq)("",!0)])):(0,i.kq)("",!0),(0,i._)("div",ge,[(0,i.WI)(e.$slots,"default",{},void 0,!0)])])}var ye=(0,i.aZ)({name:"DemoPanel",props:{title:{type:String,default:""},description:{type:String,default:""}},setup:function(e){var t=(0,i.Fl)((function(){var t=e.title,n=e.description,o=!(!t&&!n);return{hasHead:o,title:t,description:n}}));return{viewState:t}}});const he=(0,d.Z)(ye,[["render",be],["__scopeId","data-v-e486477c"]]);var we=he;function ke(e,t,n,o,r,a){return(0,i.wg)(),(0,i.iD)("div",{class:(0,w.C_)(["demo-panel-devider",e.classes])},null,2)}var _e=(0,i.aZ)({name:"DemoPanelDevider",props:{half:{type:Boolean,default:!1},line:{type:Boolean,default:!1}},setup:function(e){var t=(0,i.Fl)((function(){var t=e.half,n=e.line;return{half:t,line:n}}));return{classes:t}}});const De=(0,d.Z)(_e,[["render",ke],["__scopeId","data-v-0f24e6ca"]]);var Se=De,Ce=(n(6936),{install:function(e){var t=o;for(var n in t){var r=t[n],i=r.name;e.component(i,r)}}}),je=(0,r.ri)(p);je.use(h),je.use(Ce),je.mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],i=e[s][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(s--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({496:"GettingStarted",577:"demo"}[e]||e)+"-legacy."+{21:"347da59c",78:"e4b5c45b",164:"4a5cd9d1",496:"6d4b86bd",577:"41320df6",786:"823c8777",873:"46eb5860",917:"3a7b41e4"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+({496:"GettingStarted",577:"demo"}[e]||e)+"."+{21:"f802fadf",78:"ff1d256c",164:"e3292f0b",496:"a29dbd7b",577:"debab056",873:"4e24bec0",917:"fa05df2e"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="dev:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var u,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=o),e[o]=[r];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="https://molgga.github.io/jood-v-bucket/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=i,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),u=n.p+a;if(t(a,u))return r();e(o,u,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={21:1,78:1,164:1,496:1,577:1,873:1,917:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),u=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],u=o[1],c=o[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(c)var s=c(n)}for(t&&t(o);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},o=self["webpackChunkdev"]=self["webpackChunkdev"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3036)}));o=n.O(o)})();