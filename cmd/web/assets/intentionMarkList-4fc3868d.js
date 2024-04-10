import{d as A,x as v,r as f,aC as Q,U as k,k as C,l as B,m as t,W as s,j as e,_ as n,$ as w,av as U,al as j,am as K,at as L,o as E,Z as O,aA as Z,n as Y,aB as q,F as z}from"./utils-077ba0c9.js";import{_ as G}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-8390f4eb.js";import{_ as J}from"./UiParentCard.vue_vue_type_script_setup_true_lang-9777933e.js";import{C as X}from"./CustomUpload-2e9f0bec.js";import{ae as ee,e as te,V as R,a5 as N,_ as ae}from"./index-faafe0c9.js";import{V as oe}from"./VTextarea-8de8d281.js";import{V as le}from"./VForm-fd7455e6.js";import{_ as ne}from"./ConfirmByInput.vue_vue_type_style_index_0_lang-110dc129.js";import{V as se}from"./VRow-423840fd.js";import{V as S}from"./VCol-0037af41.js";import"./Confirm-4955c90c.js";const g=I=>(j("data-v-fd7cceab"),I=I(),K(),I),re={class:"mx-auto mt-3",style:{width:"540px"}},ie=g(()=>s("label",{class:"required"},"样本文件",-1)),de=g(()=>s("label",{class:"required"},"别名",-1)),ue=g(()=>s("label",null,"备注",-1)),ce=g(()=>s("div",{class:"d-flex justify-center textPrimary"},[n(" 点击 "),s("a",{class:"link mx-1",href:"/assets/file/intent-template.csv",download:"intent-template.csv"},"下载"),n(" 数据集模板 ")],-1)),me=A({__name:"CreateIntentionMarkPane",emits:["submit"],setup(I,{expose:P,emit:D}){const T=D,p=v({operateType:"add"}),a=v({fileId:"",name:"",remark:""}),_=f(""),u=f(),x=f(),h=v({fileId:[o=>!!o||"请输入样本名称"],name:[o=>Q.isName({value:o,required:!0,errorValid:"请输入中文、数字、字母、-、_"})]}),$=({res:o})=>{o&&(a.fileId=o.fileId,_.value=o.filename)},V=()=>{_.value="",a.fileId=""},F=async({valid:o,showLoading:l})=>{if(o){const d={url:"",method:""};p.operateType=="add"&&(d.url="/intent/create",d.method="post");const[c,M]=await U[d.method]({showLoading:l,showSuccess:!0,url:d.url,data:a});M&&(u.value.hide(),T("submit"))}};return P({show({title:o,operateType:l}){u.value.show({title:o,refForm:x}),p.operateType=l,p.operateType==="add"&&(V(),a.name="",a.remark="")}}),(o,l)=>{const d=k("Pane");return C(),B(d,{ref_key:"refPane",ref:u,onSubmit:F},{default:t(()=>[s("div",re,[e(le,{ref_key:"refForm",ref:x,class:"my-form"},{default:t(()=>[e(ee,{rules:h.fileId,modelValue:a.fileId,"onUpdate:modelValue":l[0]||(l[0]=c=>a.fileId=c),"hide-details":"auto"},{prepend:t(()=>[ie]),default:t(()=>[_.value?(C(),B(te,{key:0,closable:"",color:"info","onClick:close":V},{default:t(()=>[n(w(_.value),1)]),_:1})):(C(),B(X,{key:1,"file-type":["text/csv"],onAfterUpload:$},{trigger:t(()=>[e(R,{color:"info",variant:"outlined"},{default:t(()=>[n("上传文件")]),_:1})]),_:1}))]),_:1},8,["rules","modelValue"]),e(N,{type:"text",placeholder:"请输入中文、数字、字母、-、_ ","hide-details":"auto",clearable:"",rules:h.name,modelValue:a.name,"onUpdate:modelValue":l[1]||(l[1]=c=>a.name=c)},{prepend:t(()=>[de]),_:1},8,["rules","modelValue"]),e(oe,{modelValue:a.remark,"onUpdate:modelValue":l[2]||(l[2]=c=>a.remark=c),modelModifiers:{trim:!0},placeholder:"备注",clearable:""},{prepend:t(()=>[ue]),_:1},8,["modelValue"])]),_:1},512),ce])]),_:1},512)}}});const fe=ae(me,[["__scopeId","data-v-fd7cceab"]]),pe=["onClick"],_e=s("span",{class:"text-primary font-weight-black"},"删除",-1),he=s("br",null,null,-1),be={class:"text-primary font-weight-black"},ye=s("br",null,null,-1),Fe=A({__name:"intentionMarkList",setup(I){const P=L(),D=f({title:"意图模型标注列表"}),T=f([{text:"样本库",disabled:!1,href:"#"},{text:"意图模型标注列表",disabled:!0,href:"#"}]),p=v({name:""}),a=v({list:[],total:0}),_=f(),u=f(),x=f(),h=v({intentId:""}),$=r=>{let b=[];return b.push({text:"删除",color:"error",click(){V(r)}}),b},V=r=>{h.intentId=r.intentId,x.value.show({width:"480px",confirmText:h.intentId})},F=async(r={})=>{const[b,y]=await U.delete({...r,showSuccess:!0,url:`/intent/${h.intentId}/delete`});y&&(x.value.hide(),d())},o=async(r={})=>{const[b,y]=await U.get({url:"/intent/list",showLoading:u.value.el,data:{...p,...r}});y?(a.list=y.list||[],a.total=y.total):(a.list=[],a.total=0)},l=()=>{u.value.query({page:1})},d=()=>{u.value.query()},c=()=>{_.value.show({title:"创建意图标注",operateType:"add"})},M=r=>{P.push(`/sample-library/intention-mark/detail?intentId=${r}`)};return E(()=>{d()}),(r,b)=>{const y=k("ButtonsInForm"),m=k("el-table-column"),W=k("ButtonsInTable"),H=k("TableWithPager");return C(),O(z,null,[e(G,{title:D.value.title,breadcrumbs:T.value},null,8,["title","breadcrumbs"]),e(J,null,{default:t(()=>[e(se,null,{default:t(()=>[e(S,{cols:"12",lg:"3",md:"4",sm:"6"},{default:t(()=>[e(N,{modelValue:p.name,"onUpdate:modelValue":b[0]||(b[0]=i=>p.name=i),label:"请输入样本名称","hide-details":"",clearable:"",onKeyup:Z(l,["enter"]),"onClick:clear":l},null,8,["modelValue","onKeyup"])]),_:1}),e(S,{cols:"12",lg:"3",md:"4",sm:"6"},{default:t(()=>[e(y,null,{default:t(()=>[e(R,{color:"primary",onClick:c},{default:t(()=>[n("创建样本")]),_:1})]),_:1})]),_:1}),e(S,{cols:"12"},{default:t(()=>[e(H,{onQuery:o,ref_key:"tableWithPagerRef",ref:u,infos:a},{default:t(()=>[e(m,{label:"ID","min-width":"240px"},{default:t(({row:i})=>[s("a",{href:"javascript: void(0)",class:"link",onClick:xe=>M(i.intentId)},w(i.intentId),9,pe)]),_:1}),e(m,{label:"意图标注名称",prop:"name","min-width":"200px","show-overflow-tooltip":""}),e(m,{label:"样本数量",prop:"documentCount","min-width":"110px"}),e(m,{label:"备注",prop:"remark","min-width":"200px","show-overflow-tooltip":""}),e(m,{label:"修改时间","min-width":"200px"},{default:t(({row:i})=>[n(w(Y(q).dateFormat(i.updatedAt,"YYYY-MM-DD HH:mm:ss")),1)]),_:1}),e(m,{label:"创建时间","min-width":"200px"},{default:t(({row:i})=>[n(w(Y(q).dateFormat(i.createdAt,"YYYY-MM-DD HH:mm:ss")),1)]),_:1}),e(m,{label:"操作人",prop:"operator","min-width":"220px"}),e(m,{label:"操作",width:"80px",fixed:"right"},{default:t(({row:i})=>[e(W,{buttons:$(i),onlyOne:""},null,8,["buttons"])]),_:1})]),_:1},8,["infos"])]),_:1})]),_:1})]),_:1}),e(ne,{ref_key:"refConfirmDelete",ref:x,onSubmit:F},{text:t(()=>[n(" 此操作将会"),_e,n("该意图标注"),he,n(" 意图标注ID："),s("span",be,w(h.intentId),1),ye,n(" 确定要继续吗？ ")]),_:1},512),e(fe,{ref_key:"createIntentionMarkPaneRef",ref:_,onSubmit:l},null,512)],64)}}});export{Fe as default};