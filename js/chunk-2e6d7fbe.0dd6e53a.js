(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e6d7fbe"],{"0c3f":function(e,t,i){"use strict";var s=i("3690"),r=i.n(s);r.a},"0f12":function(e,t,i){},"139e":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("example-split-panel",{attrs:{width:"33.33%"},scopedSlots:e._u([{key:"aside",fn:function(){return[i("div",{staticClass:"panel-wrap"},[i("div",{staticClass:"panel-item"},[i("div",{staticClass:"head"},[i("em",{staticClass:"tit"},[e._v("receiverA1 - groupA")])]),i("div",{staticClass:"body"},[i("div",{staticClass:"body-opt"},[i("div",[i("v-switch",{attrs:{label:"use indicate bar"},model:{value:e.receiverA1.useGhostBar,callback:function(t){e.$set(e.receiverA1,"useGhostBar",t)},expression:"receiverA1.useGhostBar"}}),i("v-switch",{attrs:{label:"custom duplicate filter"},model:{value:e.receiverA1.dropBeforeFilter,callback:function(t){e.$set(e.receiverA1,"dropBeforeFilter",t)},expression:"receiverA1.dropBeforeFilter"}}),i("v-text-field",{attrs:{"hide-details":"",label:"max",placeholder:"Placeholder",min:-1,max:10,type:"number"},model:{value:e.receiverA1.max,callback:function(t){e.$set(e.receiverA1,"max",t)},expression:"receiverA1.max"}})],1)]),i("div",{staticClass:"body-bucket"},[i("jd-bucket-container",{key:[e.receiverA1.useGhostBar,e.receiverA1.dropBeforeFilter,e.receiverA1.max].join("_"),staticClass:"receive-container",attrs:{groupName:e.groupA,receiver:!0,max:parseInt(e.receiverA1.max),useGhostBar:e.receiverA1.useGhostBar,lazyChangeStateDelay:100,dropBefore:e.receiverA1.dropBeforeFilter?e.onDropBeforeFilter:null},scopedSlots:e._u([{key:"indicate",fn:function(e){return[i("custom-bucket-container-indicate",{attrs:{isBlock:e.state.isBlock,isInsertable:e.state.isInsertable,isEmpty:e.state.isEmpty}})]}}]),model:{value:e.receiverA1.list,callback:function(t){e.$set(e.receiverA1,"list",t)},expression:"receiverA1.list"}},e._l(e.receiverA1.list,(function(e,t){return i("custom-bucket-item",{key:e.uid+"_"+t,attrs:{model:e,myIndex:t+1}},[i("sample-item",{attrs:{name:e.name,description:e.description,color:e.color}})],1)})),1)],1)])]),i("div",{staticClass:"panel-item"},[i("div",{staticClass:"head"},[i("em",{staticClass:"tit"},[e._v("receiverA2 - groupA")])]),i("div",{staticClass:"body"},[i("jd-bucket-container",{staticClass:"receive-container",attrs:{groupName:e.groupA,receiver:!0,max:-1,useGhostBar:!0,lazyChangeStateDelay:100},scopedSlots:e._u([{key:"indicate",fn:function(e){return[i("custom-bucket-container-indicate",{attrs:{isBlock:e.state.isBlock,isInsertable:e.state.isInsertable,isEmpty:e.state.isEmpty}})]}}]),model:{value:e.receiverA2.list,callback:function(t){e.$set(e.receiverA2,"list",t)},expression:"receiverA2.list"}},e._l(e.receiverA2.list,(function(e,t){return i("custom-bucket-item",{key:e.uid+"_"+t,attrs:{model:e,myIndex:t+1}},[i("sample-item",{attrs:{name:e.name,description:e.description,color:e.color}})],1)})),1)],1)]),i("div",{staticClass:"panel-item"},[i("div",{staticClass:"head"},[i("em",{staticClass:"tit"},[e._v("receiverB1 - groupB")])]),i("div",{staticClass:"body"},[i("jd-bucket-container",{staticClass:"receive-container",attrs:{groupName:e.groupB,receiver:!0,max:-1,useGhostBar:!0,lazyChangeStateDelay:100},scopedSlots:e._u([{key:"indicate",fn:function(e){return[i("custom-bucket-container-indicate",{attrs:{isBlock:e.state.isBlock,isInsertable:e.state.isInsertable,isEmpty:e.state.isEmpty}})]}}]),model:{value:e.receiverB1.list,callback:function(t){e.$set(e.receiverB1,"list",t)},expression:"receiverB1.list"}},e._l(e.receiverB1.list,(function(e,t){return i("custom-bucket-item",{key:e.uid+"_"+t,attrs:{model:e,myIndex:t+1}},[i("sample-item",{attrs:{name:e.name,description:e.description,color:e.color}})],1)})),1)],1)])])]},proxy:!0},{key:"bside",fn:function(){return[i("div",{staticClass:"panel-wrap"},[i("div",{staticClass:"panel-item"},[i("div",{staticClass:"head"},[i("em",{staticClass:"tit"},[e._v("senderA - groupA")])]),i("div",{staticClass:"body"},[i("div",{staticClass:"body-bucket"},[i("div",{staticClass:"test-info"},[i("v-chip",{attrs:{ripple:!1,label:!0,small:!0}},[e._v("multiple: true (rangeSelection)")])],1),i("jd-bucket-container",{staticClass:"sender-container",attrs:{groupName:e.groupA,receiver:!1,multiple:!0,rangeSelection:!0},model:{value:e.senderA1.list,callback:function(t){e.$set(e.senderA1,"list",t)},expression:"senderA1.list"}},e._l(e.senderA1.list,(function(e,t){return i("custom-bucket-item",{key:e.uid,attrs:{model:e,myIndex:t+1}},[i("sample-item",{attrs:{name:e.name,description:e.description,color:e.color}})],1)})),1)],1)])]),i("div",{staticClass:"panel-item"},[i("div",{staticClass:"head"},[i("em",{staticClass:"tit"},[e._v("senderB - groupB")])]),i("div",{staticClass:"body"},[i("div",{staticClass:"body-bucket"},[i("div",{staticClass:"test-info"},[i("v-chip",{attrs:{ripple:!1,label:!0,small:!0}},[e._v("multiple: false")])],1),i("jd-bucket-container",{staticClass:"sender-container",attrs:{groupName:e.groupB,receiver:!1,multiple:!1},model:{value:e.senderB1.list,callback:function(t){e.$set(e.senderB1,"list",t)},expression:"senderB1.list"}},e._l(e.senderB1.list,(function(e,t){return i("custom-bucket-item",{key:e.uid,attrs:{model:e,myIndex:t+1}},[i("sample-item",{attrs:{name:e.name,description:e.description,color:e.color}})],1)})),1)],1)])])])]},proxy:!0}])},[i("jd-bucket-selection-indicate")],1)},r=[],a=(i("2d6d"),i("beb4"),i("cfce"),i("33ef"),i("c465")),c=i("9d0e"),n=i("0c7e"),l=i("5575"),o=i("bfeb"),d=i("7853"),u=i("bc92"),p=Object(a["defineComponent"])({components:{JdBucketSelectionIndicate:c["c"],JdBucketContainer:c["a"],JdBucketItem:c["b"],ExampleSplitPanel:n["a"],SampleItem:d["a"],CustomBucketItem:o["a"],CustomBucketContainerIndicate:l["a"]},setup:function(){Object(c["d"])();var e="GROUP_A",t="GROUP_B",i=Object(a["reactive"])({useGhostBar:!0,dropBeforeFilter:!1,max:-1,list:[]}),s=Object(a["reactive"])({list:[]}),r=Object(a["reactive"])({list:[]}),n=Object(a["reactive"])({list:[]}),l=Object(a["reactive"])({list:[]}),o=Object(a["reactive"])({list:[]}),d=function(e){console.log("onDropBeforeFilter");var t=e.toContainer,i=e.itemRefs,s=t.max,r=t.getList(),a=r.map((function(e){return e.uid})),c=i.filter((function(e){return-1===a.indexOf(e.model.uid)}));return-1!==s&&s<r.length+c.length&&(c=c.slice(0,s-r.length)),c.map((function(e){return e.model}))};return Object(a["onMounted"])((function(){i.list=[],s.list=Object(u["a"])(3),l.list=Object(u["a"])(5),r.list=[],n.list=Object(u["a"])(3),o.list=Object(u["a"])(5)})),{groupA:e,groupB:t,receiverA1:i,receiverA2:s,senderA1:l,receiverB1:r,receiverB2:n,senderB1:o,onDropBeforeFilter:d}}}),m=p,v=(i("df60"),i("2be6")),f=Object(v["a"])(m,s,r,!1,null,"206d0baa",null);t["default"]=f.exports},3690:function(e,t,i){},5575:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"custom-bucket-container-indicate"},[e.isBlock?i("div",{staticClass:"block"}):e._e(),e.isInsertable?i("div",{staticClass:"insertable"},[i("svg",{staticClass:"insert-overlay-svg",attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px","xml:space":"preserve"}},[i("rect",{staticClass:"insert-overlay-rect",attrs:{x:"0",y:"0",width:"100%",height:"100%",fill:"transparent"}})])]):e._e(),e.isEmpty?i("div",{staticClass:"empty"},[i("div",{staticClass:"item"},[i("v-icon",{staticClass:"icon"},[e._v("highlight_alt")]),i("div",{staticClass:"desc"},[e._v("오른쪽 아이템을 여기에 넣으세요!")])],1)]):e._e()])},r=[],a=i("c465"),c=Object(a["defineComponent"])({props:{isBlock:{type:Boolean,default:!1},isInsertable:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1}},setup:function(){return{}}}),n=c,l=(i("0c3f"),i("2be6")),o=Object(l["a"])(n,s,r,!1,null,"3235a142",null);t["a"]=o.exports},beb4:function(e,t,i){"use strict";var s=i("6b1d"),r=i("1f5e").indexOf,a=i("7f8a"),c=i("ce71"),n=[].indexOf,l=!!n&&1/[1].indexOf(1,-0)<0,o=a("indexOf"),d=c("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:l||!o||!d},{indexOf:function(e){return l?n.apply(this,arguments)||0:r(this,e,arguments.length>1?arguments[1]:void 0)}})},df60:function(e,t,i){"use strict";var s=i("0f12"),r=i.n(s);r.a}}]);