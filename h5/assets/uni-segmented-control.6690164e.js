import{F as e,G as t,H as n,K as r,L as s,ar as l,Z as o,I as a,O as c,P as u,M as d,af as y,N as i}from"./index.94028eaa.js";import{_ as m}from"./plugin-vue_export-helper.21dcd24c.js";var p=m({name:"UniSegmentedControl",emits:["clickItem"],props:{current:{type:Number,default:0},values:{type:Array,default:()=>[]},activeColor:{type:String,default:"#2979FF"},styleType:{type:String,default:"button"}},data:()=>({currentIndex:0}),watch:{current(e){e!==this.currentIndex&&(this.currentIndex=e)}},created(){this.currentIndex=this.current},methods:{_onClick(e){this.currentIndex!==e&&(this.currentIndex=e,this.$emit("clickItem",{currentIndex:e}))}}},[["render",function(m,p,x,_,f,g){const I=y,b=i;return e(),t(b,{class:l([["text"===x.styleType?"segmented-control--text":"segmented-control--button"],"segmented-control"]),style:o({borderColor:"text"===x.styleType?"":x.activeColor})},{default:n((()=>[(e(!0),r(d,null,s(x.values,((r,s)=>(e(),t(b,{class:l([["text"===x.styleType?"":"segmented-control__item--button",s===f.currentIndex&&"button"===x.styleType?"segmented-control__item--button--active":"",0===s&&"button"===x.styleType?"segmented-control__item--button--first":"",s===x.values.length-1&&"button"===x.styleType?"segmented-control__item--button--last":""],"segmented-control__item"]),key:s,style:o({backgroundColor:s===f.currentIndex&&"button"===x.styleType?x.activeColor:"",borderColor:s===f.currentIndex&&"text"===x.styleType||"button"===x.styleType?x.activeColor:"transparent"}),onClick:e=>g._onClick(s)},{default:n((()=>[a(b,null,{default:n((()=>[a(I,{style:o({color:s===f.currentIndex?"text"===x.styleType?x.activeColor:"#fff":"text"===x.styleType?"#000":x.activeColor}),class:l(["segmented-control__text","text"===x.styleType&&s===f.currentIndex?"segmented-control__item--text":""])},{default:n((()=>[c(u(r),1)])),_:2},1032,["style","class"])])),_:2},1024)])),_:2},1032,["class","style","onClick"])))),128))])),_:1},8,["class","style"])}],["__scopeId","data-v-aca8ac7c"]]);export{p as _};
