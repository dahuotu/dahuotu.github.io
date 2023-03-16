import{d as A,a as e,b as a,X as s,e as i,Y as t,g as o,F as n,G as g,H as I,I as c,O as C,Z as r,P as E,_ as B,$ as l,a0 as Q,a1 as R,a2 as d,a3 as S,a4 as J,a5 as m,a6 as u,a7 as h,N as p,a8 as k,a9 as F,aa as M,ab as w,ac as Y}from"./index.94028eaa.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";var x=f(A({name:"faceRecognition",components:{},props:{},setup(A,n){const g=e({CameraFrameListener:null,cameraContext:null,originalScene:null,v1_s:"",scene:null,userid:null,info:"准备中",count:0,retryCount:3,countTimer:null,booTest:!1,wxiftest1:null,wxiftest2:null});a((A=>{console.log("query="+A.scene),g.originalScene=A.scene;const e="scope.camera",a=decodeURIComponent(A.scene).replace("userId=","");var i=null;"undefined"!=a&&(i=a),console.log(e),console.log(i),i?(g.scene=e,g.userid=i):s({title:"提示",content:"请扫码登录",showCancel:!1})})),i((()=>{t({success:function(A){g.v1_s=A.statusBarHeight+13}})})),o((()=>{g.CameraFrameListener&&(g.CameraFrameListener.stop(),clearInterval(g.countTimer))}));const I=()=>{g.CameraFrameListener=g.cameraContext.onCameraFrame((function(A){g.booTest||(g.booTest=!0,console.log("onCameraFrame",A,g.booTest,+new Date),R({canvasId:"test",x:0,y:0,width:A.width,height:A.height,data:new Uint8ClampedArray(A.data),success(e){console.log("canvasPutImageData",e),d({canvasId:"test",x:0,y:0,width:A.width,height:A.height,destWidth:A.width,destHeight:A.height,fileType:"jpg",success(A){var e=uni.getFileSystemManager().readFileSync(A.tempFilePath,"base64");S({url:J+"/sys/oauth/loginByFace",data:{userId:g.userid,img:e},method:"POST",header:{"content-type":"application/json;charset=UTF-8"},success(A){if(A.data.success)g.base64Img=e,g.info="请保持姿势不变",g.countTimer||setTimeout((function(){c()}),1e3);else if(0==g.retryCount){g.CameraFrameListener.stop();const A="/pages/faceRecognition/faceRecognitionResult?status=0&msg=chaoshi&scene="+g.scene+"&userid="+g.userid+"&originalscene="+encodeURIComponent(g.originalScene);m({url:A})}else g.booTest=!1,g.retryCount--},fail(A){g.booTest=!1}})},fail(A){g.booTest=!1}})},fail(A){g.booTest=!1}}))})),g.CameraFrameListener.start()},c=()=>{g.countTimer=setInterval((()=>{if(console.log("倒计时:"+g.count),g.count<=30)C(g.count/15),g.count++;else{clearInterval(g.countTimer),g.CameraFrameListener.stop();var A="/pages/faceRecognition/faceRecognitionResult?status=1&msg=detecting&image="+encodeURIComponent(g.base64Img)+"&scene="+g.scene+"&userid="+g.userid+"&originalscene="+encodeURIComponent(g.originalScene);m({url:A})}}),70)},C=A=>{var e=u("canvasProgress"),a=e.createLinearGradient(200,100,100,200);a.addColorStop("0","#2661DD"),a.addColorStop("0.5","#2661DD"),a.addColorStop("1.0","#2661DD"),e.setLineWidth(5),e.setStrokeStyle(a),e.setLineCap("round"),e.beginPath(),e.arc(120,120,112,-Math.PI/2,A*Math.PI-Math.PI/2,!1),e.stroke(),e.draw()};return{data:g,initdone:()=>{g.scene&&g.userid&&(g.info="请面向屏幕",l()?(g.cameraContext=l("myCamera"),I()):s({title:"提示",content:"当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"}))},errstop:()=>{g.info="摄像头非正常终止"},error:A=>{console.log("=======",this,A),g.scene&&g.userid?s({title:"提示",content:"请在设置页面打开摄像头权限",showCancel:!1,success(){uni.openSetting({success(A){uni.getSetting({success(A){A.authSetting["scope.camera"]&&Q({url:"/pages/faceRecognition/faceRecognition/?scene="+g.originalScene})},fail(A){console.log("getSetting fail")}})},fail(A){console.log(222)}})}}):s({title:"提示",content:"请扫码登录",showCancel:!1})},qx:()=>{g.CameraFrameListener.stop(),clearInterval(g.countTimer)}}}}),[["render",function(A,e,a,s,i,t){const o=h,l=p,Q=k,R=F,d=M,S=w,J=Y("i-message");return n(),g(l,{class:"faceRecognition"},{default:I((()=>[A.data.scene&&A.data.userid?(n(),g(l,{key:0,class:"takephoto"},{default:I((()=>[c(l,{class:"v1",bindtap:"qx",style:r("margin-top:"+A.data.v1_s+"px;")},{default:I((()=>[c(o,{target:"miniProgram","open-type":"exit"},{default:I((()=>[C("取消")])),_:1})])),_:1},8,["style"]),c(l,{class:"distinguishing"}),c(l,{class:"camera"},{default:I((()=>[c(Q,{class:"progress_bg","canvas-id":"canvasProgressbg"}),c(Q,{class:"progress_canvas","canvas-id":"canvasProgress"}),c(S,{id:"myCamera","device-position":"front",onInitdone:A.initdone,onStop:A.errstop,flash:"off",onError:A.error},{default:I((()=>[c(d,{class:"cameraGai"},{default:I((()=>[c(R,{src:"data:image/png;base64,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",class:"cover-image"})])),_:1})])),_:1},8,["onInitdone","onStop","onError"])])),_:1}),c(l,{class:"info"},{default:I((()=>[C(E(A.data.info),1)])),_:1}),c(J,{id:"message"})])),_:1})):B("",!0),c(Q,{"canvas-id":"test",style:{position:"fixed",top:"-9999px",width:"720px",height:"1280px"}})])),_:1})}],["__scopeId","data-v-1b0ad9ca"]]);export{x as default};