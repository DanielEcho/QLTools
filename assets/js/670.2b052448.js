"use strict";(self["webpackChunkqltools"]=self["webpackChunkqltools"]||[]).push([[670],{9878:function(i,e,t){t.d(e,{Z:function(){return c}});var a=t(6252);const n={class:"mdui-drawer mdui-drawer-close",id:"main-drawer",style:{"box-sizing":"border-box","box-shadow":"0 15px 25px rgb(60 64 67 / 55%)"}},d=(0,a.uE)('<div class="mdui-list"><a href="/#/admin" class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">desktop_mac</i><div class="mdui-list-item-content">仪表盘</div></a><a href="/#/admin/env" class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">playlist_play</i><div class="mdui-list-item-content">变量管理</div></a><a href="/#/admin/panel" class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">apps</i><div class="mdui-list-item-content">面板管理</div></a><a href="/#/admin/message" class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">sms</i><div class="mdui-list-item-content">推送管理</div></a><a href="/#/admin/settings" class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">settings</i><div class="mdui-list-item-content">网站设置</div></a></div>',1),l=[d];function s(i,e,t,d,s,o){return(0,a.wg)(),(0,a.iD)("div",n,l)}var o={name:"AdminBar",methods:{}},m=t(3744);const u=(0,m.Z)(o,[["render",s]]);var c=u},1056:function(i,e,t){t.d(e,{Z:function(){return C}});var a=t(6252);const n=i=>((0,a.dD)("data-v-ba4d45ae"),i=i(),(0,a.Cn)(),i),d={class:"mdui-m-t-5"},l={class:"mdui-p-a-5 mdui-typo mdui-container"},s={class:"mdui-row-sm-3"},o={class:"mdui-col mdui-text"},m=n((()=>(0,a._)("span",{id:"Copyright"},"Copyright © 2022 All rights reserved. ",-1))),u=(0,a.Uk)("青龙 Tools"),c=n((()=>(0,a._)("p",null,"简单便捷的第三方工具，给您带来不一样的体验！",-1))),r={class:"mdui-col mdui-text"},p=(0,a.Uk)("邮件联系: "),v={href:"mailto:nuanxinqing@gmail.com"},_=(0,a.Uk)("nuanxinqing@gmail.com"),g=(0,a.Uk)("电报联系: "),b={href:"https://t.me/Nuanxinqing"},h=(0,a.Uk)("@Nuanxinqing"),x={class:"mdui-col mdui-text"},f=(0,a.Uk)("电报频道: "),y={href:"#"},k=(0,a.Uk)("暂无"),E=(0,a.Uk)("电报群组: "),w={href:"#"},U=(0,a.Uk)("暂无");function A(i,e,t,n,A,D){const Z=(0,a.up)("st");return(0,a.wg)(),(0,a.iD)("footer",d,[(0,a._)("div",l,[(0,a._)("div",s,[(0,a._)("div",o,[(0,a._)("p",null,[m,(0,a.Wm)(Z,null,{default:(0,a.w5)((()=>[u])),_:1})]),c]),(0,a._)("div",r,[(0,a._)("p",null,[p,(0,a._)("a",v,[(0,a.Wm)(Z,null,{default:(0,a.w5)((()=>[_])),_:1})])]),(0,a._)("p",null,[g,(0,a._)("a",b,[(0,a.Wm)(Z,null,{default:(0,a.w5)((()=>[h])),_:1})])])]),(0,a._)("div",x,[(0,a._)("p",null,[f,(0,a._)("a",y,[(0,a.Wm)(Z,null,{default:(0,a.w5)((()=>[k])),_:1})])]),(0,a._)("p",null,[E,(0,a._)("a",w,[(0,a.Wm)(Z,null,{default:(0,a.w5)((()=>[U])),_:1})])])])])])])}var D={name:"AdminFooter"},Z=t(3744);const N=(0,Z.Z)(D,[["render",A],["__scopeId","data-v-ba4d45ae"]]);var C=N},8393:function(i,e,t){t.d(e,{Z:function(){return h}});var a=t(6252);const n={class:"mdui-appbar mdui-appbar-fixed mdui-color-indigo-800"},d={class:"mdui-toolbar"},l=(0,a._)("i",{class:"mdui-icon material-icons"},"menu",-1),s=[l],o=(0,a._)("a",{href:"javascript:;",class:"mdui-typo-headline"},"Tools",-1),m=(0,a._)("div",{class:"mdui-toolbar-spacer"},null,-1),u=(0,a._)("a",{"mdui-tooltip":"{content: '刷新页面'}",href:"javascript:location.reload();",class:"mdui-btn mdui-btn-icon"},[(0,a._)("i",{class:"mdui-icon material-icons"},"refresh")],-1),c=(0,a._)("i",{class:"mdui-icon material-icons"},"exit_to_app",-1),r=[c];function p(i,e,t,l,c,p){return(0,a.wg)(),(0,a.iD)("header",n,[(0,a._)("div",d,[(0,a._)("a",{"mdui-tooltip":"{content: '菜单'}",onClick:e[0]||(e[0]=i=>p.Menu()),class:"mdui-btn mdui-btn-icon"},s),o,m,u,(0,a._)("a",{"mdui-tooltip":"{content: '退出登录'}",onClick:e[1]||(e[1]=i=>this.LogOut()),href:"javascript:;",class:"mdui-btn mdui-btn-icon",id:"LogOut"},r)])])}var v=t(4493),_={name:"AdminHeader",methods:{LogOut(){console.log("退出登录"),localStorage.clear(),window.open("/","_self")},Menu(){let i=new v.Z.Drawer("#main-drawer");i.toggle()}}},g=t(3744);const b=(0,g.Z)(_,[["render",p]]);var h=b},670:function(i,e,t){t.r(e),t.d(e,{default:function(){return di}});var a=t(6252);const n={class:"mdui-appbar-with-toolbar"};function d(i,e,t,d,l,s){const o=(0,a.up)("AdminHeader"),m=(0,a.up)("AdminBar"),u=(0,a.up)("AdminEnvCom"),c=(0,a.up)("AdminFooter");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a.Wm)(o),(0,a.Wm)(m),(0,a.Wm)(u),(0,a.Wm)(c)])}var l=t(8393),s=t(9878),o=t(1056),m=t(3577),u=t(9963);const c={id:"container",class:"mdui-container mdui-p-t-1",style:{"margin-top":"10px"}},r=(0,a.uE)('<div class="mdui-card mt" style="border-radius:15px;"><div class="mdui-card-primary"><div class="mdui-card-primary-title">变量管理（演示版）</div><div class="mdui-card-primary-subtitle">Env Management</div></div><div class="mdui-card-content mdui-typo"><p class="text_s">变量管理并非管理容器内的变量，而是管理前端上传的允许变量名。可以搭配正则表达式过滤恶意提交，正则表达式为空则代表允许所有内容</p><p class="text_s">JDCookie的正则表达式（演示）：pt_key=([^;=\\s]+); pt_pin=([^;=\\s]+)</p></div></div>',1),p={class:"mdui-card mt",style:{"border-radius":"15px","margin-top":"15px"}},v=(0,a._)("div",{class:"mdui-card-primary"},[(0,a._)("div",{class:"mdui-card-primary-title"},"Set Env（演示版）")],-1),_={class:"mdui-card-menu"},g=(0,a._)("i",{class:"mdui-icon mdui-icon-left material-icons"},"loupe",-1),b=(0,a.Uk)("新增 "),h=[g,b],x={class:"mdui-table-fluid"},f={class:"mdui-table"},y=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"变量名"),(0,a._)("th",null,"变量限额"),(0,a._)("th",null,"匹配正则"),(0,a._)("th",null,"操作")])],-1),k=["onClick"],E=(0,a.Uk)("    "),w=["onClick"],U={id:"envAdd",class:"mdui-dialog",style:{top:"210px",display:"none"}},A=(0,a._)("div",{class:"mdui-dialog-title"},"新增变量（演示版）",-1),D={class:"mdui-dialog-content mdui-typo",style:{height:"407px"}},Z={class:"mdui-textfield"},N=(0,a._)("label",{class:"mdui-textfield-label"},"变量名",-1),C={class:"mdui-textfield"},Q=(0,a._)("label",{class:"mdui-textfield-label"},"变量限额",-1),R={class:"mdui-textfield"},O=(0,a._)("label",{class:"mdui-textfield-label"},"匹配正则",-1),W=(0,a._)("div",{class:"mdui-dialog-actions"},[(0,a._)("button",{class:"mdui-btn mdui-color-green-700 mdui-text-color-white btn"},[(0,a._)("i",{class:"mdui-icon mdui-icon-left material-icons"},"check"),(0,a.Uk)("确认新增 ")])],-1),I={id:"envDel",class:"mdui-dialog",style:{display:"none"}},V=(0,a._)("div",{class:"mdui-dialog-content"},"确认删除变量?",-1),q={class:"mdui-dialog-actions"},M=(0,a._)("button",{class:"mdui-btn mdui-ripple","mdui-dialog-close":""},"返回",-1),T={id:"envUpdate",class:"mdui-dialog",style:{top:"210px",display:"none"}},z=(0,a._)("div",{class:"mdui-dialog-title"},"修改变量（演示版）",-1),H={class:"mdui-dialog-content mdui-typo",style:{height:"407px"}},S={class:"mdui-textfield"},j=(0,a._)("label",{class:"mdui-textfield-label"},"变量名",-1),B={class:"mdui-textfield"},F=(0,a._)("label",{class:"mdui-textfield-label"},"变量限额",-1),L={class:"mdui-textfield"},G=(0,a._)("label",{class:"mdui-textfield-label"},"匹配正则",-1),J=(0,a._)("div",{class:"mdui-dialog-actions"},[(0,a._)("button",{class:"mdui-btn mdui-color-green-700 mdui-text-color-white btn"},[(0,a._)("i",{class:"mdui-icon mdui-icon-left material-icons"},"check"),(0,a.Uk)("确认修改 ")])],-1);function K(i,e,t,n,d,l){return(0,a.wg)(),(0,a.iD)("div",c,[r,(0,a._)("div",p,[v,(0,a._)("div",_,[(0,a._)("button",{onClick:e[0]||(e[0]=i=>l.OpenDialog()),class:"mdui-btn mdui-btn-dense mdui-btn-raised btn mdui-p-x-1 mdui-color-blue-grey mdui-text-color-white"},h)]),(0,a._)("div",x,[(0,a._)("table",f,[y,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(d.EnvAll,(i=>((0,a.wg)(),(0,a.iD)("tr",{key:i},[(0,a._)("th",null,(0,m.zw)(i.Name),1),(0,a._)("th",null,(0,m.zw)(i.Quantity),1),(0,a._)("th",null,(0,m.zw)(i.Regex),1),(0,a._)("th",null,[(0,a._)("button",{onClick:e=>l.OpenEnvUpdate(i.ID,i.Name,i.Quantity,i.Regex),class:"mdui-btn mdui-btn-dense mdui-btn-raised btn mdui-p-x-1 mdui-color-blue mdui-text-color-white"}," 修改 ",8,k),E,(0,a._)("button",{onClick:e=>l.OpenEnvDel(i.ID),class:"mdui-btn mdui-btn-dense mdui-btn-raised btn mdui-p-x-1 mdui-color-red mdui-text-color-white"}," 删除 ",8,w)])])))),128))])])])]),(0,a._)("div",U,[A,(0,a._)("div",D,[(0,a._)("form",{onSubmit:e[4]||(e[4]=(0,u.iM)(((...i)=>l.AddEnv&&l.AddEnv(...i)),["prevent"]))},[(0,a._)("div",Z,[N,(0,a.wy)((0,a._)("input",{class:"mdui-textfield-input",type:"text",id:"envName",placeholder:"必填","onUpdate:modelValue":e[1]||(e[1]=i=>d.AddEnvName.envName=i)},null,512),[[u.nr,d.AddEnvName.envName]])]),(0,a._)("div",C,[Q,(0,a.wy)((0,a._)("input",{class:"mdui-textfield-input",type:"number",id:"envQuantity",placeholder:"必填","onUpdate:modelValue":e[2]||(e[2]=i=>d.AddEnvName.envQuantity=i)},null,512),[[u.nr,d.AddEnvName.envQuantity]])]),(0,a._)("div",R,[O,(0,a.wy)((0,a._)("input",{class:"mdui-textfield-input",type:"text",id:"envRegex",placeholder:"选填","onUpdate:modelValue":e[3]||(e[3]=i=>d.AddEnvName.envRegex=i)},null,512),[[u.nr,d.AddEnvName.envRegex]])]),W],32)])]),(0,a._)("div",I,[V,(0,a._)("div",q,[M,(0,a._)("button",{onClick:e[5]||(e[5]=i=>l.DelEnv()),class:"mdui-btn mdui-ripple"},"删除")])]),(0,a._)("div",T,[z,(0,a._)("div",H,[(0,a._)("form",{onSubmit:e[9]||(e[9]=(0,u.iM)(((...i)=>l.UpdateEnv&&l.UpdateEnv(...i)),["prevent"]))},[(0,a._)("div",S,[j,(0,a.wy)((0,a._)("input",{class:"mdui-textfield-input",type:"text",placeholder:"必填","onUpdate:modelValue":e[6]||(e[6]=i=>d.EnvUpdate.envName=i)},null,512),[[u.nr,d.EnvUpdate.envName]])]),(0,a._)("div",B,[F,(0,a.wy)((0,a._)("input",{class:"mdui-textfield-input",type:"number",placeholder:"必填","onUpdate:modelValue":e[7]||(e[7]=i=>d.EnvUpdate.envQuantity=i)},null,512),[[u.nr,d.EnvUpdate.envQuantity]])]),(0,a._)("div",L,[G,(0,a.wy)((0,a._)("input",{class:"mdui-textfield-input",type:"text",placeholder:"选填","onUpdate:modelValue":e[8]||(e[8]=i=>d.EnvUpdate.envRegex=i)},null,512),[[u.nr,d.EnvUpdate.envRegex]])]),J],32)])])])}var Y=t(4493),P=t(9669),X=t.n(P),$={name:"AdminEnvCom",data(){return{AddEnvName:{envName:"",envQuantity:0,envRegex:""},EnvAll:[{ID:0,Name:"",Quantity:0,Regex:""}],EnvDel:{envID:0},EnvUpdate:{envID:0,envName:"",envQuantity:0,envRegex:""}}},methods:{OpenDialog(){let i=new Y.Z.Dialog("#envAdd");i.toggle()},OpenEnvDel(i){this.EnvDel.envID=i;let e=new Y.Z.Dialog("#envDel");e.toggle()},OpenEnvUpdate(i,e,t,a){this.EnvUpdate.envID=i,this.EnvUpdate.envName=e,this.EnvUpdate.envQuantity=t,this.EnvUpdate.envRegex=a;let n=new Y.Z.Dialog("#envUpdate");n.toggle()},AddEnv(){X().post("/v2/api/env/name/add",this.AddEnvName).then((i=>{switch(""!==i.data){case 2e3===i.data.code:Y.Z.snackbar({message:"变量添加成功",position:"right-top"}),setTimeout((()=>{location.reload()}),1e3);break;case 5012===i.data.code:Y.Z.snackbar({message:"变量名已存在",position:"right-top"});break;case 5016===i.data.code:Y.Z.snackbar({message:"变量名创建失败",position:"right-top"});break;case 5002===i.data.code:""===i.data.data?Y.Z.snackbar({message:"服务繁忙",position:"right-top"}):Y.Z.snackbar({message:i.data.msg,position:"right-top"});break}})).catch((i=>{Y.Z.snackbar({message:i,position:"right-top"})}))},GetEnvAll(){X().get("/v2/api/env/name/all").then((i=>{switch(""!==i.data){case 2e3===i.data.code:this.EnvAll=i.data.data;break}})).catch((i=>{Y.Z.snackbar({message:i,position:"right-top"})}))},DelEnv(){X()["delete"]("/v2/api/env/name/del",{data:this.EnvDel}).then((i=>{switch(""!==i.data){case 2e3===i.data.code:Y.Z.snackbar({message:"变量删除成功",position:"right-top"}),setTimeout((()=>{location.reload()}),1e3);break}})).catch((i=>{Y.Z.snackbar({message:i,position:"right-top"})}))},UpdateEnv(){X().put("/v2/api/env/name/update",this.EnvUpdate).then((i=>{switch(""!==i.data){case 2e3===i.data.code:Y.Z.snackbar({message:"变量修改成功",position:"right-top"}),setTimeout((()=>{location.reload()}),1e3);break}})).catch((i=>{Y.Z.snackbar({message:i,position:"right-top"})}))}},mounted(){this.GetEnvAll()}},ii=t(3744);const ei=(0,ii.Z)($,[["render",K]]);var ti=ei,ai={name:"AdminEnvView",components:{AdminHeader:l.Z,AdminBar:s.Z,AdminFooter:o.Z,AdminEnvCom:ti}};const ni=(0,ii.Z)(ai,[["render",d]]);var di=ni}}]);
//# sourceMappingURL=670.2b052448.js.map