import{a,_ as e,b as t}from"./uni-forms.7ac88b8a.js";import{d as s,r as o,a as r,T as l,ai as n,at as u,F as i,K as d,I as m,H as p,O as c,aj as f,ap as b,aq as y,V as _,N as h}from"./index.94028eaa.js";import{A as v}from"./index.9d7f7591.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";import"./uni-icons.29799ac0.js";var T=C(s({name:"rejuctAudit",components:{},props:{taskLlId:{type:Number,default:0},auditType:{type:Number,default:0}},setup(a,e){f();const t=o(null),s=r({params:{auditContent:""},rules:{auditContent:{rules:[{required:!0,errorMessage:"驳回原因不能为空"}]}}});return{Tool:l,BASE_IMAGE_URL:n,valiForm:t,submit:e=>{t.value.validate().then((async e=>{const{auditType:t,taskLlId:s}=a,{auditContent:o}=e,{success:r,message:n,data:u}=await v({auditType:t,taskLlId:s,auditContent:o});r?(l.showToast(n,"none"),setTimeout((()=>{l.navigateBack(1)}),1e3)):l.showToast(n,"none")})).catch((a=>{console.log("err",a)}))},...u(s)}}}),[["render",function(s,o,r,l,n,u){const f=b(y("uni-easyinput"),a),v=b(y("uni-forms-item"),e),C=b(y("uni-forms"),t),T=_,j=h;return i(),d("div",{class:"main uni-forms-reset"},[m(C,{ref:"valiForm",class:"uni-forms",rules:s.rules,modelValue:s.params},{default:p((()=>[m(v,{label:"驳回原因","label-width":s.labelWidth,name:"auditContent",required:""},{default:p((()=>[m(f,{type:"textarea",placeholderStyle:"font-size:30rpx",focus:!0,modelValue:s.params.auditContent,"onUpdate:modelValue":o[0]||(o[0]=a=>s.params.auditContent=a),placeholder:"请输入驳回原因"},null,8,["modelValue"])])),_:1},8,["label-width"])])),_:1},8,["rules","modelValue"]),m(j,{class:"fix-footer"},{default:p((()=>[m(T,{type:"primary",class:"btn-confirm btn-primary",onClick:o[1]||(o[1]=a=>s.submit("valiForm"))},{default:p((()=>[c("提交")])),_:1})])),_:1})])}],["__scopeId","data-v-5f3c7d61"]]);export{T as default};
