(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8587f6fa"],{"5abb":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("example-split-panel",{attrs:{width:"33.33%"},scopedSlots:e._u([{key:"aside",fn:function(){return[s("div",{staticClass:"panel-wrap"},[s("div",{staticClass:"panel-item"},[s("div",{staticClass:"head"},[s("em",{staticClass:"tit"},[e._v("receiverA1 - groupA")])]),s("div",{staticClass:"body"},[s("div",{staticClass:"body-bucket"},[s("jd-bucket-container",{staticClass:"receive-container",attrs:{groupName:e.groupA,receiver:!0,max:-1,useGhostBar:!0,lazyChangeStateDelay:100},scopedSlots:e._u([{key:"indicate",fn:function(e){return[s("custom-container-indicate",{attrs:{isBlock:e.state.isBlock,isInsertable:e.state.isInsertable,isEmpty:e.state.isEmpty}})]}}]),model:{value:e.receiverA1.list,callback:function(t){e.$set(e.receiverA1,"list",t)},expression:"receiverA1.list"}},e._l(e.receiverA1.list,(function(e,t){return s("custom-bucket-item",{key:e.uid+"_"+t,attrs:{model:e,myIndex:t+1}},[s("sample-item",{attrs:{name:e.name,description:e.description,color:e.color}})],1)})),1)],1)])])])]},proxy:!0},{key:"bside",fn:function(){return[s("div",{staticClass:"panel-wrap"},[s("div",{staticClass:"panel-item"},[s("div",{staticClass:"head"},[s("em",{staticClass:"tit"},[e._v("senderA - groupA")])]),s("div",{staticClass:"body"},[s("div",{staticClass:"body-bucket"},[s("jd-bucket-container",{staticClass:"sender-container",attrs:{groupName:e.groupA,receiver:!1},model:{value:e.senderA1.list,callback:function(t){e.$set(e.senderA1,"list",t)},expression:"senderA1.list"}},e._l(e.senderA1.list,(function(e,t){return s("custom-bucket-item",{key:e.uid,attrs:{model:e,myIndex:t+1}},[s("sample-item",{attrs:{name:e.name,description:e.description,color:e.color}})],1)})),1)],1)])])])]},proxy:!0}])},[s("jd-bucket-selection-indicate")],1)},a=[],n=s("c465"),c=s("9d0e"),r=s("0c7e"),l=s("bfeb"),o=s("7853"),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"custom-container-indicate"},[e.isBlock?s("div",{staticClass:"block"},[s("span",{staticClass:"label"},[e._v("block")])]):e._e(),e.isInsertable?s("div",{staticClass:"insertable"},[s("span",{staticClass:"label"},[e._v("insertable")])]):e._e(),e.isEmpty?s("div",{staticClass:"empty"},[e._v(" custom-bucket-container-indicate "),s("br"),e._v(" isEmpty: "+e._s(e.isEmpty)+" ")]):e._e()])},d=[],p=Object(n["defineComponent"])({props:{isBlock:{type:Boolean,default:!1},isInsertable:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1}},setup:function(){return{}}}),b=p,m=(s("68c4"),s("2be6")),v=Object(m["a"])(b,u,d,!1,null,"167d2c9e",null),f=v.exports,k=s("bc92"),C=Object(n["defineComponent"])({components:{JdBucketSelectionIndicate:c["c"],JdBucketContainer:c["a"],JdBucketItem:c["b"],ExampleSplitPanel:r["a"],SampleItem:o["a"],CustomBucketItem:l["a"],CustomContainerIndicate:f},setup:function(){Object(c["d"])();var e="GROUP_A",t=Object(n["reactive"])({list:[]}),s=Object(n["reactive"])({list:[]});return Object(n["onMounted"])((function(){t.list=[],s.list=Object(k["a"])(5)})),{groupA:e,receiverA1:t,senderA1:s}}}),y=C,_=(s("6d8d"),Object(m["a"])(y,i,a,!1,null,"2bc9c1b8",null));t["default"]=_.exports},"64bc":function(e,t,s){},"68c4":function(e,t,s){"use strict";var i=s("64bc"),a=s.n(i);a.a},"6d8d":function(e,t,s){"use strict";var i=s("8a1a"),a=s.n(i);a.a},"8a1a":function(e,t,s){}}]);