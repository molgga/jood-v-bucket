(function(){"use strict";var e={6003:function(e,t,n){n.d(t,{BN:function(){return a},I_:function(){return r},af:function(){return u}});n(1555),n(4356),n(5993),n(2892);var o=n(2288),r=[{key:"sample1",label:"Sample bucket group",component:(0,o.$V)((function(){return Promise.all([n.e(742),n.e(694)]).then(n.bind(n,738))}))},{key:"selection-drag",label:"Custom SelectionDrag",component:(0,o.$V)((function(){return Promise.all([n.e(742),n.e(221)]).then(n.bind(n,5849))}))},{key:"container-indicate",label:"Custom ContainerIndicate",component:(0,o.$V)((function(){return Promise.all([n.e(742),n.e(882)]).then(n.bind(n,8334))}))},{key:"container-inject",label:"Inject bucket-container-ref",component:(0,o.$V)((function(){return Promise.all([n.e(742),n.e(172)]).then(n.bind(n,4036))}))},{key:"item-inject",label:"Inject bucket-item-ref",component:(0,o.$V)((function(){return Promise.all([n.e(742),n.e(291)]).then(n.bind(n,3187))}))}],u=function(){var e={};return r.forEach((function(t){e[t.key]=t})),e}(),a=function(){var e=[];for(var t in u){var n=u[t];e.push({to:"/demo/".concat(t),label:n.label})}return e}()},4361:function(e,t,n){var o={};n.r(o),n.d(o,{DemoButton:function(){return ee},DemoLayout:function(){return M},DemoMenu:function(){return U},DemoMenuGroup:function(){return K},DemoMenuItem:function(){return Q},DemoPanel:function(){return ke},DemoPanelDevicer:function(){return Ee},DemoPreviewCode:function(){return de}});n(6656),n(5858),n(2221),n(5983);var r=n(365),u=n(2288),a={class:"menu-wrap"};function i(e,t,n,o,r,i){var c=(0,u.g2)("demo-menu"),l=(0,u.g2)("router-view"),s=(0,u.g2)("demo-layout");return(0,u.uX)(),(0,u.Wv)(s,{class:"layout",title:"@jood/v-bucket",onGoGithub:o.onGoGithub,onGoNpm:o.onGoNpm,onGoDoc:o.onGoDocument},{menu:(0,u.k6)((function(){return[(0,u.Lk)("nav",a,[(0,u.bF)(c,{menuList:o.menuList},null,8,["menuList"])])]})),default:(0,u.k6)((function(){return[(0,u.bF)(l,{class:"app-body"})]})),_:1},8,["onGoGithub","onGoNpm","onGoDoc"])}var c=n(5411),l=(n(8450),n(6003)),s={setup:function(){var e=function(){o("https://molgga.github.io/jood-v-bucket/documents")},t=function(){o("https://github.com/molgga/jood-v-bucket")},n=function(){o("https://www.npmjs.com/package/@jood/v-bucket")},o=function(e){window.open(e)},r=[{to:"/",label:"Getting started"}].concat((0,c.A)(l.BN));return{menuList:r,demoLinks:l.BN,onGoGithub:t,onGoNpm:n,onGoDocument:e}}},d=n(7433);const f=(0,d.A)(s,[["render",i],["__scopeId","data-v-bc93429a"]]);var p=f,v=(n(1555),n(4356),n(5993),n(8845)),m=!0,b=m?"/jood-v-bucket":"",g=[{path:"/",name:"GettingStarted",props:!0,component:(0,u.$V)((function(){return n.e(748).then(n.bind(n,9110))}))},{path:"/demo/:demo",name:"DemoView",props:!0,component:(0,u.$V)((function(){return n.e(594).then(n.bind(n,9661))}))},{path:"/:catchAll(.*)",name:"GettingStarted",props:!0,component:(0,u.$V)((function(){return n.e(748).then(n.bind(n,9110))}))}],h=(0,v.aE)({history:(0,v.LA)(b),routes:g}),y=h,k=n(1784),C=function(e){return(0,u.Qi)("data-v-08a5e974"),e=e(),(0,u.jt)(),e},S={class:"aside"},w=(0,u.eW)("menu"),E=(0,u.eW)("menu_open"),_={class:"tit"},L=C((function(){return(0,u.Lk)("div",{class:"spacer"},null,-1)})),G={class:"bside"},D={class:"ly-content"};function O(e,t,n,o,r,a){return(0,u.uX)(),(0,u.CE)("div",{class:(0,k.C4)(["demo-layout",e.classes])},[(0,u.Lk)("div",{class:"ly-header",style:(0,k.Tr)(e.headStyle)},[(0,u.Lk)("div",S,[(0,u.Lk)("i",{class:"menu-toggle material-icons",onClick:t[0]||(t[0]=function(){return e.onMenuToggle&&e.onMenuToggle.apply(e,arguments)})},[e.layoutState.asideOpen?((0,u.uX)(),(0,u.CE)(u.FK,{key:0},[w],64)):((0,u.uX)(),(0,u.CE)(u.FK,{key:1},[E],64))]),(0,u.Lk)("h1",_,(0,k.v_)(e.title),1)]),L,(0,u.Lk)("div",G,[e.outGithub?((0,u.uX)(),(0,u.CE)("i",{key:0,class:"out-link material-icons",onClick:t[1]||(t[1]=function(t){return e.onOutlink("goGithub")}),title:"Github"},"code")):(0,u.Q3)("",!0),e.outNpm?((0,u.uX)(),(0,u.CE)("i",{key:1,class:"out-link material-icons",onClick:t[2]||(t[2]=function(t){return e.onOutlink("goNpm")}),title:"NPM package"},"move_to_inbox")):(0,u.Q3)("",!0),e.outDoc?((0,u.uX)(),(0,u.CE)("i",{key:2,class:"out-link material-icons",onClick:t[3]||(t[3]=function(t){return e.onOutlink("goDoc")}),title:"Documentaion"},"library_books")):(0,u.Q3)("",!0)])],4),(0,u.Lk)("div",{class:"ly-aside",style:(0,k.Tr)(e.asideStyle)},[(0,u.RG)(e.$slots,"menu",{},void 0,!0)],4),(0,u.Lk)("div",{class:"ly-body",style:(0,k.Tr)(e.bodyStyle)},[(0,u.Lk)("div",D,[(0,u.RG)(e.$slots,"default",{},void 0,!0)])],4),(0,u.Lk)("div",{class:"ly-overlay",onClick:t[4]||(t[4]=function(){return e.onMenuToggle&&e.onMenuToggle.apply(e,arguments)})})],2)}n(9180);var j=n(2416),A=(0,u.pM)({name:"DemoLayout",props:{title:{type:String,default:"foo"},sizeTop:{type:Number,default:60},sizeAside:{type:Number,default:240},outGithub:{type:Boolean,default:!0},outNpm:{type:Boolean,default:!0},outDoc:{type:Boolean,default:!0}},setup:function(e,t){var n=t.emit,o=function(){return 960<=window.innerWidth},r=(0,j.Kh)({asideOpen:o(),top:e.sizeTop,left:e.sizeAside,right:0,bottom:0}),a=(0,u.EW)((function(){var e=r.asideOpen,t=r.top,n=r.left,u="".concat(t,"px"),a=e&&o()?"".concat(n,"px"):0;return{top:u,left:a,right:0,bottom:0}})),i=(0,u.EW)((function(){var e=a.value.top;return{height:e}})),c=(0,u.EW)((function(){var t=e.sizeAside,n=r.asideOpen,o=a.value,u=o.top,i=(o.left,n?0:-t);return{top:u,width:"".concat(t,"px"),transform:"translateX(".concat(i,"px)")}})),l=(0,u.EW)((function(){var e=a.value,t=e.top,n=e.right,o=e.bottom,r=e.left;return{padding:"".concat(t," ").concat(n," ").concat(o," ").concat(r)}})),s=(0,u.EW)((function(){var e=r.asideOpen;return{"need-overlay":e&&!o()}})),d=function(){r.asideOpen=!0},f=function(){r.asideOpen=!1},p=function(){r.asideOpen?f():d()},v=function(){p()},m=function(e){n(e)};return{layoutState:r,classes:s,headStyle:i,asideStyle:c,bodyStyle:l,onMenuToggle:v,onOutlink:m}}});const X=(0,d.A)(A,[["render",O],["__scopeId","data-v-08a5e974"]]);var M=X,I=(0,u.Fv)('<div class="foot-desc" data-v-f79e665a><div class="desc-box" data-v-f79e665a><i class="icon material-icons" data-v-f79e665a>tag_faces</i><p class="desc" data-v-f79e665a> It is being used by <br data-v-f79e665a><a class="link" href="https://jood-lab.web.app/" target="_blank" data-v-f79e665a> jood-lab.web.app </a></p></div></div>',1);function N(e,t,n,o,r,a){var i=(0,u.g2)("demo-menu-group");return(0,u.uX)(),(0,u.CE)("div",null,[(0,u.bF)(i,{menuList:n.menuList},null,8,["menuList"]),I])}var T={class:"demo-menu-group"};function P(e,t,n,o,r,a){var i=(0,u.g2)("demo-menu-group",!0),c=(0,u.g2)("demo-menu-item");return(0,u.uX)(),(0,u.CE)("div",T,[((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(n.menuList,(function(e,t){return(0,u.uX)(),(0,u.CE)("div",{key:t,class:"group"},[e.children?((0,u.uX)(),(0,u.Wv)(i,{key:0,menuList:e.children},null,8,["menuList"])):((0,u.uX)(),(0,u.Wv)(c,{key:1,menu:e},null,8,["menu"]))])})),128))])}n(9683),n(9399);var W={class:"demo-menu-item"},x={class:"tit"},B={class:"desc"};function $(e,t,n,o,r,a){var i=(0,u.g2)("router-link");return(0,u.uX)(),(0,u.CE)("div",W,[(0,u.bF)(i,{to:n.menu.to,class:"menu-action"},{default:(0,u.k6)((function(){return[(0,u.Lk)("span",x,(0,k.v_)(n.menu.label),1),(0,u.Lk)("span",B,(0,k.v_)(n.menu.description),1)]})),_:1},8,["to"])])}var F={name:"DemoMenuItem",props:{menu:{type:Object,default:function(){return{}}}},setup:function(){return{}}};const V=(0,d.A)(F,[["render",$],["__scopeId","data-v-8a624f7c"]]);var Q=V,z={name:"DemoMenuGroup",components:{DemoMenuItem:Q},props:{menuList:{type:Array,default:function(){return[]}}},setup:function(){return{}}};const H=(0,d.A)(z,[["render",P],["__scopeId","data-v-47c28b19"]]);var K=H,R={name:"DemoMenu",components:{DemoMenuGroup:K},props:{menuList:{type:Array,default:function(){return[]}}},setup:function(){return{}}};const q=(0,d.A)(R,[["render",N],["__scopeId","data-v-f79e665a"]]);var U=q;function J(e,t,n,o,r,a){return(0,u.uX)(),(0,u.CE)("button",{class:(0,k.C4)(["demo-button",e.buttonStyle.classes]),style:(0,k.Tr)(e.buttonStyle.style)},[(0,u.RG)(e.$slots,"default",{},void 0,!0)],6)}n(3831),n(890);var Y=(0,u.pM)({name:"DemoButton",props:{color:{type:String,default:""},text:{type:Boolean,default:!1}},setup:function(e){var t=(0,u.EW)((function(){var t=e.color,n=e.text,o={},r=[];return n?(r.push("is-text"),t&&/^(#|rgb)/.test(t)?o.color=t:r.push(t)):t&&/^(#|rgb)/.test(t)?o.backgroundColor=t:r.push(t),{style:o,classes:r}}));return{buttonStyle:t}}});const Z=(0,d.A)(Y,[["render",J],["__scopeId","data-v-5aa8dc04"]]);var ee=Z,te={class:"demo-preview-code"},ne={key:0,class:"code-head"},oe={class:"tit"},re={class:"desc"},ue={ref:"refContainer",class:"panel-viewer"};function ae(e,t,n,o,r,a){return(0,u.uX)(),(0,u.CE)("div",te,[e.viewState.hasHead?((0,u.uX)(),(0,u.CE)("div",ne,[(0,u.Lk)("h3",oe,(0,k.v_)(e.viewState.title),1),(0,u.Lk)("div",re,(0,k.v_)(e.viewState.description),1)])):(0,u.Q3)("",!0),(0,u.Lk)("div",ue,[(0,u.Lk)("pre",{class:(0,k.C4)(e.viewState.language)},[(0,u.Lk)("code",null,[(0,u.RG)(e.$slots,"default",{},(function(){return[(0,u.eW)((0,k.v_)(e.viewState.code),1)]}),!0)])],2)],512)])}n(9098);var ie=n(7641),ce=n.n(ie),le=(n(3238),n(6331),(0,u.pM)({name:"DemoPreviewCode",props:{title:{type:String,default:""},description:{type:String,default:""},lang:{type:String,default:"typescript"},code:{type:String,default:""}},setup:function(e){var t=(0,j.IJ)(null),n=(0,u.EW)((function(){var t=e.title,n=e.description,o=e.lang,r=void 0===o?"":o,u=e.code,a=void 0===u?"":u,i=t||n;return{hasHead:i,title:t,description:n,language:"language-".concat(r),code:a.trim()}}));return(0,u.sV)((function(){ce().highlightAllUnder(t.value)})),{refContainer:t,viewState:n}}}));const se=(0,d.A)(le,[["render",ae],["__scopeId","data-v-0cd9e527"]]);var de=se,fe={class:"demo-panel"},pe={key:0,class:"panel-head"},ve={key:0,class:"tit"},me={key:1,class:"desc"},be={class:"panel-body"};function ge(e,t,n,o,r,a){return(0,u.uX)(),(0,u.CE)("div",fe,[e.viewState.hasHead?((0,u.uX)(),(0,u.CE)("div",pe,[e.viewState.title?((0,u.uX)(),(0,u.CE)("h3",ve,(0,k.v_)(e.viewState.title),1)):(0,u.Q3)("",!0),e.viewState.description?((0,u.uX)(),(0,u.CE)("p",me,(0,k.v_)(e.viewState.description),1)):(0,u.Q3)("",!0)])):(0,u.Q3)("",!0),(0,u.Lk)("div",be,[(0,u.RG)(e.$slots,"default",{},void 0,!0)])])}var he=(0,u.pM)({name:"DemoPanel",props:{title:{type:String,default:""},description:{type:String,default:""}},setup:function(e){var t=(0,u.EW)((function(){var t=e.title,n=e.description,o=!(!t&&!n);return{hasHead:o,title:t,description:n}}));return{viewState:t}}});const ye=(0,d.A)(he,[["render",ge],["__scopeId","data-v-e486477c"]]);var ke=ye;function Ce(e,t,n,o,r,a){return(0,u.uX)(),(0,u.CE)("div",{class:(0,k.C4)(["demo-panel-devider",e.classes])},null,2)}var Se=(0,u.pM)({name:"DemoPanelDevider",props:{half:{type:Boolean,default:!1},line:{type:Boolean,default:!1}},setup:function(e){var t=(0,u.EW)((function(){var t=e.half,n=e.line;return{half:t,line:n}}));return{classes:t}}});const we=(0,d.A)(Se,[["render",Ce],["__scopeId","data-v-0f24e6ca"]]);var Ee=we,_e=(n(5146),{install:function(e){var t=o;for(var n in t){var r=t[n],u=r.name;e.component(u,r)}}}),Le=(0,r.Ef)(p);Le.use(y),Le.use(_e),Le.mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var u=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(u.exports,u,u.exports,n),u.loaded=!0,u.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,u){if(!o){var a=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],u=e[s][2];for(var i=!0,c=0;c<o.length;c++)(!1&u||a>=u)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(i=!1,u<a&&(a=u));if(i){e.splice(s--,1);var l=r();void 0!==l&&(t=l)}}return t}u=u||0;for(var s=e.length;s>0&&e[s-1][2]>u;s--)e[s]=e[s-1];e[s]=[o,r,u]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({594:"demo",748:"GettingStarted"}[e]||e)+"-legacy."+{172:"6b225da3",221:"8f5b4ba8",291:"3488300d",594:"685ec968",694:"24bf7b8b",742:"7d7aebfd",748:"23624e0c",882:"dee1431f"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+({594:"demo",748:"GettingStarted"}[e]||e)+"."+{172:"e3292f0b",221:"fa05df2e",291:"4e24bec0",594:"debab056",694:"f802fadf",748:"a29dbd7b",882:"ff1d256c"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="dev:";n.l=function(o,r,u,a){if(e[o])e[o].push(r);else{var i,c;if(void 0!==u)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+u){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+u),i.src=o),e[o]=[r];var f=function(t,n){i.onerror=i.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="https://molgga.github.io/jood-v-bucket/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var u=function(u){if(r.onerror=r.onload=null,"load"===u.type)n();else{var a=u&&("load"===u.type?"missing":u.type),i=u&&u.target&&u.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=i,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=u,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],u=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(u===e||u===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],u=r.getAttribute("data-href");if(u===e||u===t)return r}},o=function(o){return new Promise((function(r,u){var a=n.miniCssF(o),i=n.p+a;if(t(a,i))return r();e(o,i,r,u)}))},r={524:0};n.f.miniCss=function(e,t){var n={172:1,221:1,291:1,594:1,694:1,748:1,882:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var u=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=u);var a=n.p+n.u(t),i=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var u=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+u+": "+a+")",i.name="ChunkLoadError",i.type=u,i.request=a,r[1](i)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,u,a=o[0],i=o[1],c=o[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(c)var s=c(n)}for(t&&t(o);l<a.length;l++)u=a[l],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(s)},o=self["webpackChunkdev"]=self["webpackChunkdev"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(4361)}));o=n.O(o)})();