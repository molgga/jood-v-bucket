"use strict";(self["webpackChunkdev"]=self["webpackChunkdev"]||[]).push([[291],{3187:function(e,t,a){a.r(t),a.d(t,{default:function(){return X}});var l=a(2288);const s=e=>((0,l.Qi)("data-v-6a0775cb"),e=e(),(0,l.jt)(),e),d={class:"panel-wrap"},i={class:"panel-item"},c=s((()=>(0,l.Lk)("div",{class:"head"},[(0,l.Lk)("em",{class:"tit"},"receiverA1 - groupA")],-1))),r={class:"body"},n={class:"body-bucket"},o={class:"test-header"},u={class:"panel-wrap"},p={class:"panel-item"},m=s((()=>(0,l.Lk)("div",{class:"head"},[(0,l.Lk)("em",{class:"tit"},"senderA - groupA")],-1))),v={class:"body"},k={class:"body-bucket"};function x(e,t,a,s,x,y){const b=(0,l.g2)("jd-bucket-selection-indicate"),A=(0,l.g2)("v-text-field"),f=(0,l.g2)("some-item"),I=(0,l.g2)("custom-bucket-item"),g=(0,l.g2)("jd-bucket-container"),L=(0,l.g2)("sample-item"),h=(0,l.g2)("example-split-panel");return(0,l.uX)(),(0,l.Wv)(h,{width:"33.33%"},{aside:(0,l.k6)((()=>[(0,l.Lk)("div",d,[(0,l.Lk)("div",i,[c,(0,l.Lk)("div",r,[(0,l.Lk)("div",n,[(0,l.bF)(g,{class:"receive-container",modelValue:e.receiverA1.list,"onUpdate:modelValue":t[1]||(t[1]=t=>e.receiverA1.list=t),groupName:e.groupA,receiver:!0,max:-1,useGhostBar:!0,lazyChangeStateDelay:100},{header:(0,l.k6)((()=>[(0,l.Lk)("div",o,[(0,l.bF)(A,{modelValue:e.receiverA1.displayMax,"onUpdate:modelValue":t[0]||(t[0]=t=>e.receiverA1.displayMax=t),"hide-details":"",label:"Test displayMax",placeholder:"test displayMax",min:-1,max:10,type:"number"},null,8,["modelValue"])])])),default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.receiverA1.list,((t,a)=>((0,l.uX)(),(0,l.Wv)(I,{key:`${t.uid}_${a}`,model:t,myIndex:a+1},{default:(0,l.k6)((()=>[(0,l.bF)(f,{expectDisplayMax:parseInt(e.receiverA1.displayMax),index:a},null,8,["expectDisplayMax","index"])])),_:2},1032,["model","myIndex"])))),128))])),_:1},8,["modelValue","groupName"])])])])])])),bside:(0,l.k6)((()=>[(0,l.Lk)("div",u,[(0,l.Lk)("div",p,[m,(0,l.Lk)("div",v,[(0,l.Lk)("div",k,[(0,l.bF)(g,{class:"sender-container",modelValue:e.senderA1.list,"onUpdate:modelValue":t[2]||(t[2]=t=>e.senderA1.list=t),groupName:e.groupA,receiver:!1},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.senderA1.list,((e,t)=>((0,l.uX)(),(0,l.Wv)(I,{key:e.uid,model:e,myIndex:t+1},{default:(0,l.k6)((()=>[(0,l.bF)(L,{name:e.name,description:e.description,color:e.color},null,8,["name","description","color"])])),_:2},1032,["model","myIndex"])))),128))])),_:1},8,["modelValue","groupName"])])])])])])),default:(0,l.k6)((()=>[(0,l.bF)(b)])),_:1})}var y=a(2416),b=a(5316),A=a(3120),f=a(1053),I=a(3716),g=a(2340),L=a(1784);const h={class:"some-item"},_={class:"desc"},M={key:0,class:"display-alert"};function w(e,t,a,s,d,i){return(0,l.uX)(),(0,l.CE)("div",h,[(0,l.Lk)("div",{class:"name",style:(0,L.Tr)({color:e.viewState.color})},(0,L.v_)(e.viewState.name),5),(0,l.Lk)("div",_,(0,L.v_)(e.viewState.description),1),e.viewState.isOverflow?((0,l.uX)(),(0,l.CE)("div",M,(0,L.v_)(e.expectDisplayMax)+"개 까지만 서비스에 노출 됩니다. 위 컨텐츠가 노출 불가능 상태가 되면 순서대로 노출 됩니다. ",1)):(0,l.Q3)("",!0)])}var S=(0,l.pM)({props:{index:{type:Number,default:-1},expectDisplayMax:{type:Number,default:-1}},setup(e){const t=(0,b.useJdBucketItemRef)(),a=(0,l.EW)((()=>{const a=t.model,l=e.expectDisplayMax,s=e.index,d=-1!==l&&-1!==s&&l<=s;return{isOverflow:d,name:a.name,description:a.description,color:a.color}}));return{viewState:a}}}),B=a(7433);const C=(0,B.A)(S,[["render",w],["__scopeId","data-v-098f08e5"]]);var V=C,F=(0,l.pM)({components:{JdBucketSelectionIndicate:b.JdBucketSelectionIndicate,JdBucketContainer:b.JdBucketContainer,JdBucketItem:b.JdBucketItem,ExampleSplitPanel:f.A,SampleItem:g.A,CustomBucketItem:I.A,SomeItem:V},setup(){(0,b.provideJdBucketRef)();const e="GROUP_A",t=(0,y.Kh)({displayMax:2,list:[]}),a=(0,y.Kh)({list:[]});return(0,l.sV)((()=>{t.list=[],a.list=(0,A.vI)(5)})),{groupA:e,receiverA1:t,senderA1:a}}});const J=(0,B.A)(F,[["render",x],["__scopeId","data-v-6a0775cb"]]);var X=J}}]);