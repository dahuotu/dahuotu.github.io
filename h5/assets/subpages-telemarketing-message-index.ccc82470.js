import{aE as a,T as e,F as s,K as o,I as t,H as l,G as d,_ as i,O as n,M as c,L as r,ac as g,af as m,N as p,P as u}from"./index.94028eaa.js";import{B as f}from"./index.baac847b.js";import{E as h}from"./index.15b5045e.js";import{l as _}from"./index.77e75d50.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";var k=y({components:{BottomBar:f,emptyData:h,loadData:_},onLoad(){console.log("初始化加载=>onLoad"),this.getMessage()},onReachBottom(){console.log("onReachBottom=>"),this.loadMore()},data:()=>({isLoad:!0,isNoData:!1,pageSize:10,pageIndex:1,dataList:[]}),methods:{onLook(a,s){console.log("查看消息=>",a),1===s?this.onRead(a):e.navigateTo("")},onRead(s){let o={};var t;"all"===s?(console.log("全部已读=>typeid=>",s),o={all:1}):(console.log("指定记录已读=>typeid=>",s),o={id:s}),(t=o,a({url:"/sys/app/dx/message/read",method:"GET",params:t})).then((a=>{console.log("messageRead=>rep=>",a),0===a.code&&e.navigateTo("")}))},getMessage(){console.log("消息列表=>"),this.isLoad=!0,(this.pageIndex,this.pageSize,a({url:"/sys/app/dx/message/list",method:"GET"})).then((a=>{console.log("getMessageList=>rep=>",a),0===a.code&&(this.dataList=a.data.records,this.isNoData=!(a.data.records.length>0),this.isLoad=!1)}))},loadMore(){console.log("加载更多=>"),this.pageIndex=this.pageIndex+1,this.getMessage()}}},[["render",function(a,e,f,h,_,y){const k=g("loadData"),L=m,x=p,v=g("emptyData"),B=g("BottomBar");return s(),o(c,null,[t(x,{class:"page-message"},{default:l((()=>[!0===_.isLoad?(s(),d(k,{key:0,msg:"正在铆足劲加载中..."})):i("",!0),t(x,{class:"top"},{default:l((()=>[t(L,{class:"read-all",onClick:e[0]||(e[0]=a=>y.onRead("all"))},{default:l((()=>[n("全部已读")])),_:1})])),_:1}),_.dataList.length>0?(s(),d(x,{key:1,class:"list","scroll-y":!0,"lower-threshold":150},{default:l((()=>[(s(!0),o(c,null,r(_.dataList,(a=>(s(),d(x,{class:"li",key:a,onClick:e=>y.onLook(a.id,a.unread)},{default:l((()=>[t(x,{class:"icon"}),t(x,{class:"info"},{default:l((()=>[t(x,{class:"title"},{default:l((()=>[1===a.titleColor?(s(),d(x,{key:0,class:"success"},{default:l((()=>[n(u(a.title),1)])),_:2},1024)):2===a.titleColor?(s(),d(x,{key:1,class:"failed"},{default:l((()=>[n(u(a.title),1)])),_:2},1024)):(s(),d(x,{key:2},{default:l((()=>[n(u(a.title),1)])),_:2},1024)),t(x,{class:"name"},{default:l((()=>[n(u(a.dxCompanyName),1)])),_:2},1024),t(x,{class:"dot"},{default:l((()=>[1===a.unread?(s(),d(x,{key:0,class:"dot-red"})):(s(),d(x,{key:1}))])),_:2},1024)])),_:2},1024),t(x,{class:"time"},{default:l((()=>[n(u(a.createTime),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})):i("",!0),!0===_.isNoData?(s(),d(v,{key:2,msg:"暂无消息"})):i("",!0)])),_:1}),t(B,{active:"message"})],64)}],["__scopeId","data-v-4250dfc0"]]);export{k as default};