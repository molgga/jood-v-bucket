(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a84d00f"],{"006c":function(e,t,n){"use strict";var i=n("6375"),s=n.n(i);s.a},3549:function(e,t,n){"use strict";var i=n("7d03"),s=n.n(i);s.a},6375:function(e,t,n){},"6b0c":function(e,t,n){"use strict";var i=n("de16"),s=n.n(i);s.a},"771c":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("example-intro",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("JdBucketContainer 커스텀")]},proxy:!0},{key:"description",fn:function(){return[e._v("- #header: 컨테이너의 header 영역 슬롯과 기능 추가 예.")]},proxy:!0}])}),n("jd-bucket-selection-indicate"),n("div",{staticClass:"exm-wrap"},[n("div",{staticClass:"exm-box"},[n("h2",{staticClass:"exm-box-tit"},[e._v("receiverA1 - "+e._s(e.groupA))]),n("jd-bucket-container",{staticClass:"test-container",attrs:{groupName:e.groupA,receiver:!0,max:-1,lazyChangeStateDelay:100},scopedSlots:e._u([{key:"header",fn:function(){return[n("my-receiver-header")]},proxy:!0}]),model:{value:e.receiverA1.list,callback:function(t){e.$set(e.receiverA1,"list",t)},expression:"receiverA1.list"}},e._l(e.receiverA1.list,(function(t,i){return n("custom-bucket-item",{key:e.keyUidHelper(e.receiverA1.list,i,t.id),attrs:{model:t,myIndex:i+1}},[n("div",[e._v(e._s(t))])])})),1)],1),n("div",{staticClass:"exm-box"},[n("h2",{staticClass:"exm-box-tit"},[e._v("receiverA2 - "+e._s(e.groupA))]),n("jd-bucket-container",{staticClass:"test-container",attrs:{groupName:e.groupA,receiver:!0,max:3,lazyChangeStateDelay:100},scopedSlots:e._u([{key:"header",fn:function(){return[n("my-receiver-header")]},proxy:!0}]),model:{value:e.receiverA2.list,callback:function(t){e.$set(e.receiverA2,"list",t)},expression:"receiverA2.list"}},e._l(e.receiverA2.list,(function(t,i){return n("custom-bucket-item",{key:e.keyUidHelper(e.receiverA2.list,i,t.id),attrs:{model:t,myIndex:i+1}},[n("div",[e._v(e._s(t))])])})),1)],1),n("div",{staticClass:"exm-box"},[n("h2",{staticClass:"exm-box-tit"},[e._v("senderA1 - "+e._s(e.groupA))]),n("jd-bucket-container",{attrs:{groupName:e.groupA,receiver:!1},scopedSlots:e._u([{key:"header",fn:function(){return[n("my-sender-header")]},proxy:!0}]),model:{value:e.senderA1.list,callback:function(t){e.$set(e.senderA1,"list",t)},expression:"senderA1.list"}},e._l(e.senderA1.list,(function(t){return n("jd-bucket-item",{key:t.id,staticClass:"test-item",attrs:{model:t}},[e._v(e._s(t))])})),1)],1)])],1)},s=[],c=n("c465"),r=n("437d"),a=n("2c8d"),o=n("55f0"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{staticClass:"test-all",on:{click:e.handleAll}},[e._v("[ "+e._s(e.state.isAll?"V":"-")+" ] all ("+e._s(e.state.isAll)+")")])])},u=[],d=(n("8f0b"),n("8423"),n("ef1f"),n("f3b8"),n("fa8c"),n("918c"),n("2d1f")),m=Object(c["defineComponent"])({setup:function(){var e=Object(r["e"])(),t=new d["a"],n=Object(c["reactive"])({list:e.getList(),isAll:!1}),i=function(){n.list=e.getList();for(var t=e.getItemRefs(),i=Array.from(t.values()),s=i.length,c=null,r=0;r<s;r++){var a=i[r].isSelected;if(null!==c&&c!==a){c=null;break}c=a}n.isAll=!!c},s=function(t){t.preventDefault(),t.stopPropagation();var i=!n.isAll,s=e.getItemRefs(),c=Array.from(s.values());!0===i?c.forEach((function(t){e.addDragItem(t)})):c.forEach((function(t){e.removeDragItem(t)}))};return Object(c["onMounted"])((function(){var n=e.observeChangeState().subscribe(i);t.add(n)})),Object(c["onUnmounted"])((function(){t.unsubscribe()})),{state:n,handleAll:s}}}),v=m,f=(n("eafb"),n("2be6")),b=Object(f["a"])(v,l,u,!1,null,"41a24baa",null),p=b.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"my-receiver-header"},[n("div",{staticClass:"aside"},[e._v("count: "+e._s(e.state.size)+" / max: "+e._s(e.state.max))]),n("div",{staticClass:"spacer"}),n("div",{staticClass:"bside"},[e._v("isMaximum: "+e._s(e.state.isMaximum))])])},_=[],k=Object(c["defineComponent"])({setup:function(){var e=Object(r["e"])(),t=new d["a"],n=Object(c["reactive"])({size:e.getList().length,max:e.max,isMaximum:e.isMaximum}),i=function(){n.size=e.getList().length,n.max=e.max,n.isMaximum=e.isMaximum};return Object(c["onMounted"])((function(){var n=e.observeChangeState().subscribe(i);t.add(n)})),Object(c["onUnmounted"])((function(){t.unsubscribe()})),{state:n}}}),y=k,C=(n("006c"),Object(f["a"])(y,x,_,!1,null,"33bd67ed",null)),A=C.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("jd-bucket-item",{staticClass:"custome-bucket-item",attrs:{model:e.model},scopedSlots:e._u([{key:"aside",fn:function(){return[e.isReceiverContainer?e._e():n("div",{staticClass:"cbi-panel-aside"},[n("div",{staticClass:"cbi-check"})])]},proxy:!0},e.isReceiverContainer?{key:"bside",fn:function(){return[n("div",{staticClass:"cbi-panel-bside"},[n("custom-bucket-remove",{on:{remove:e.onRemove}})],1)]},proxy:!0}:null],null,!0)},[n("div",{staticClass:"cbi-panel-body"},[e._t("default")],2)])},j=[],O=(n("e94e"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"custom-bucket-remove"},[n("button",{on:{click:e.onClickRemove}},[e._v("X")])])}),g=[],M=Object(c["defineComponent"])({components:{},props:{model:{type:Object,default:null}},setup:function(e,t){var n=t.emit,i=Object(r["f"])(),s=function(){n("remove",{itemRef:i})};return{onClickRemove:s}}}),R=M,I=Object(f["a"])(R,O,g,!1,null,"fe918f34",null),S=I.exports,w=Object(c["defineComponent"])({components:{JdBucketItem:r["b"],CustomBucketRemove:S},props:{model:{type:Object,default:null},myIndex:{type:Number,default:-1}},setup:function(){var e=Object(r["e"])(),t=e.isReceiver,n=function(t){var n=t.itemRef;e.removeByModel(n.model)};return{isReceiverContainer:t,onRemove:n}}}),B=w,E=(n("3549"),Object(f["a"])(B,h,j,!1,null,"06339873",null)),$=E.exports,J=Object(c["defineComponent"])({components:{JdBucketSelectionIndicate:r["c"],JdBucketContainer:r["a"],JdBucketItem:r["b"],MySenderHeader:p,MyReceiverHeader:A,CustomBucketItem:$,ExampleIntro:a["a"]},setup:function(){Object(r["d"])();var e="GROUP_A",t=Object(c["reactive"])({list:[]}),n=Object(c["reactive"])({list:[]}),i=Object(c["reactive"])({list:[]}),s=function(e){};return Object(c["onMounted"])((function(){t.list=[],n.list=Object(o["a"])(Math.floor(3*Math.random())),i.list=Object(o["a"])(Math.ceil(10*Math.random()+1))})),{keyUidHelper:o["b"],groupA:e,receiverA1:t,receiverA2:n,senderA1:i,onRemove:s}}}),U=J,z=(n("6b0c"),Object(f["a"])(U,i,s,!1,null,"1d29b81c",null));t["default"]=z.exports},"7d03":function(e,t,n){},a181:function(e,t,n){},de16:function(e,t,n){},eafb:function(e,t,n){"use strict";var i=n("a181"),s=n.n(i);s.a}}]);