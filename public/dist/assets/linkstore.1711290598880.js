import{r as e,a as l,u as a,b as t,G as o,c as u,d as r,e as d,i as s,F as i,f as n,v as c,k as p,h as m,g as v,m as g,U as h,ai as f,aj as b,Z as y,J as w,n as k,t as _,j as x,af as V,l as C,ae as U,T as j,C as S,p as z,a3 as L,ak as O,al as A}from"./index.1711290598880.js";import{S as E}from"./sortable.esm.1711290598880.js";const F={class:"flex gap-2 h-full"},I={class:"flex flex-col flex-shrink-0 bg-white w-52 px-2 py-4 rounded-lg",style:{height:"calc(100vh - 30px)"}},T={class:"h-full relative overflow-y-scroll leftScrollBackground"},P={class:"space-y-1 mb-4",id:"list"},B=["onClick","data-id"],D={class:"flex items-center pr-1"},G={key:0,class:"flex items-center gap-2"},R={class:"sticky bottom-0 flex justify-center"},W={class:"linkstoreAdmin flex-1",style:{width:"calc(100% - 220px)"}},q={class:"p-4 bg-white rounded-lg overflow-hidden flex flex-wrap gap-4"},J={class:"ml-auto"},K={class:"mt-2 p-4 bg-white rounded-lg overflow-hidden w-full"},M=["src"],Z={style:{display:"flex","align-items":"center",width:"100%"}},$=["src"],H={class:"bgColorPicker"},N=["onClick"],Q={key:0,class:"touming"},X={key:0,style:{"font-size":"20px",color:"#ff0000",inset:"-5px 3px",position:"relative"}},Y={key:0,style:{"font-size":"20px",color:"#d9d9d9",inset:"-5px 3px",position:"relative"}},ee=d("div",{class:"mb-2"}," 分类名称 ",-1),le={class:"flex mt-6 mb-2"},ae={__name:"linkstore",setup(ae){let te=null;const oe=e(0),ue=e(!0),re=e(),de=e([]),se=e=>{de.value=e};l((()=>{let e=document.getElementById("list");if(e){const l={animation:200,delay:500,delayOnTouchOnly:!0,draggable:".item",onUpdate:function(e){let l=te.toArray(),a=[],t=l.length;l.forEach(((e,l)=>{a.push({id:parseInt(e),sort:t-l})})),h({url:"/LinkStore/sortFolder",method:"post",data:a}).then((e=>{e.code}))}};te=E.create(e,l)}}));const ie={id:"",name:"",sort:0},ne=e(Object.assign({},ie)),ce=e([]),pe=["rgba(0,0,0,0)","#fff","rgb(22, 129, 255)","rgb(251, 190, 35)","rgb(252, 69, 72)","rgb(75, 60, 54)","rgb(125, 172, 104)","rgb(2, 51, 115)","rgb(200, 172, 112)","rgb(55, 33, 40)","rgb(5, 64, 146)"],me=()=>{ue.value=!0,h({url:"/LinkStore/getFolder"}).then((e=>{ce.value=e.data,ce.value.unshift({id:0,name:"全部标签"})})).finally((e=>{ue.value=!1}))};me();const ve=e({name:"",area:""}),ge=(e="")=>{if(e){e=e.split(",");const l=[];return e.forEach((e=>{const a=ce.value.find((l=>l.id.toString()===e));a&&l.push(a.name)})),l.join(",")}return""},he=e(!1),fe=a(),be=e(!1),ye=e({}),we=()=>{ye.value={area:[]},oe.value>0&&(ye.value.area=[oe.value.toString()]),be.value=!0},ke=(e={})=>{ne.value=0===e?Object.assign({},ie):Object.assign({},e),he.value=!0,setTimeout((()=>{document.querySelector(".autofocus input").click()}),200)},_e=()=>{h({url:"/LinkStore/createFolder",method:"post",data:{type:"edit",info:ne.value}}).then((e=>{w.success(e.msg),1===e.code&&(me(),he.value=!1)}))},xe=e=>{y.confirm("是否删除选中的标签？","删除提示").then((l=>{h({url:"/LinkStore/del",method:"post",data:{ids:"object"==typeof e?e:[e]}}).then((e=>{w.success(e.msg),Ee()}))})).catch((()=>{w.warning("已取消操作")}))},Ve=()=>{if(de.value.length>0){let e=[];de.value.forEach((l=>{e.push(l.id)})),xe(e)}},Ce=()=>{const l=e([]);let a=[];ce.value.forEach((e=>{a.push(f(b,{label:e.name,value:e.id}))})),y({title:"请选择移动的分类","close-on-click-modal":!1,draggable:!0,"custom-style":{width:"100%"},message:()=>f(O,{modelValue:l.value,multiple:!0,placeholder:"请选择移动的分类可多选",class:"w-full","onUpdate:modelValue":e=>{l.value=e}},(()=>a))}).then((e=>{let a={link:de.value.map((e=>e.id)),area:l.value.join(",")};h({url:"/LinkStore/moveFolder",method:"post",data:a}).then((e=>{Ee(),w.success(e.msg)}))})).catch((e=>{w.warning("已取消操作")}))},Ue=e=>{1===e.code&&(ye.value.src=e.data.url)};let je=e(!1);const Se=async()=>{je.value=!0;try{const e=await h({url:"/Api/getIcon",method:"post",data:{url:ye.value.url}});1===e.code?(ye.value.src=e.data.src,ye.value.tips=e.data.name.substring(0,30)):w.error("获取网站数据失败,请手动设置")}catch(e){console.error("Error fetching data:",e),w.error("获取网站数据失败,请手动设置")}je.value=!1},ze=()=>{let e=Object.assign({},ye.value);e.area&&(e.area=e.area.join(",")),h({url:"/LinkStore/add",method:"post",data:{form:e}}).then((e=>{w.success(e.msg),be.value=!1,Ee()}))},Le=e({current_page:1,per_page:50,total:0,refresh(e){Le.value.current_page=e,Ee()},sizes(e){Le.value.per_page=e,Ee()}}),Oe=e([]),Ae={order:"desc",prop:"id"},Ee=()=>{h({url:"/LinkStore/ListManager",method:"post",data:{search:ve.value,page:Le.value.current_page,limit:Le.value.per_page,sort:Ae}}).then((e=>{Oe.value=e.data.data,Object.assign(Le.value,e.data)}))},Fe=({column:e,prop:l,order:a})=>{let t="asc";"descending"===a&&(t="desc"),Ae.order=t,Ae.prop=l,Ee()};return Ee(),(e,l)=>{const a=t("el-icon"),f=t("el-button"),E=t("el-input"),ae=t("el-table-column"),te=t("el-tag"),ie=t("el-table"),je=t("el-pagination"),Ae=t("el-form-item"),Ie=t("el-upload"),Te=t("el-switch"),Pe=t("el-color-picker"),Be=t("el-input-number"),De=t("el-form"),Ge=t("el-dialog"),Re=t("el-link"),We=o("loading");return u(),r(i,null,[d("div",F,[s((u(),r("div",I,[d("div",T,[s(d("div",P,[(u(!0),r(i,null,n(ce.value,(e=>(u(),v(j,null,{default:m((()=>[d("div",{onClick:l=>(e=>{oe.value=e.id,ve.value.area=e.id,Ee()})(e),"data-id":null==e?void 0:e.id,class:k(["relative item px-3 py-1.5 text-sm rounded-sm cursor-pointer flex overflow-hidden justify-between items-center",{"bg-slate-200 text-blue-400":oe.value==e.id}])},[d("div",D,[d("span",null,_(e.name),1)]),e.id?(u(),r("div",G,[p(a,{class:"hover:text-blue-600",onClick:C((l=>ke(e)),["stop"])},{default:m((()=>[p(x(V))])),_:2},1032,["onClick"]),p(a,{class:"cursor-move"},{default:m((()=>[p(x(U))])),_:1})])):g("",!0)],10,B)])),_:2},1024)))),256))],512),[[c,ce.value.length]]),s(d("div",R,[p(f,{class:"w-11/12",type:"primary",onClick:l[0]||(l[0]=e=>ke(0))},{default:m((()=>[S("创建标签分类")])),_:1})],512),[[c,!ue.value]])])])),[[We,ue.value]]),d("div",W,[d("div",q,[p(E,{modelValue:ve.value.name,"onUpdate:modelValue":l[1]||(l[1]=e=>ve.value.name=e),style:{width:"200px"},placeholder:"名称搜索",clearable:""},null,8,["modelValue"]),p(f,{onClick:Ee,type:"primary"},{default:m((()=>[S("搜索")])),_:1}),p(f,{type:"danger",onClick:we},{default:m((()=>[S("添加新标签")])),_:1}),d("div",J,[de.value.length>0?(u(),v(f,{key:0,type:"danger",onClick:Ve,round:""},{default:m((()=>[S("批量删除")])),_:1})):g("",!0),de.value.length>0?(u(),v(f,{key:1,type:"primary",onClick:Ce,round:""},{default:m((()=>[S("批量分类")])),_:1})):g("",!0)])]),d("div",K,[p(ie,{onSelectionChange:se,ref_key:"multipleTableRef",ref:re,onSortChange:Fe,height:"calc(100vh - 190px)",stripe:"",data:Oe.value},{default:m((()=>[p(ae,{type:"selection",width:"30",align:"center"}),p(ae,{fixed:"left",sortable:"custom",prop:"id",label:"ID",align:"center",width:"100"}),p(ae,{prop:"name",label:"网站名称",sortable:"custom",align:"center",width:"200"}),p(ae,{prop:"src",label:"LOGO",align:"center",width:"80"},{default:m((e=>[d("img",{style:z([{backgroundColor:e.row.bgColor},{"max-width":"100%","max-height":"100%"}]),src:e.row.src,class:"logoiconRadius",alt:"Logo"},null,12,M)])),_:1}),p(ae,{prop:"url","show-overflow-tooltip":"",label:"域名链接",align:"center",width:"260"}),p(ae,{prop:"domain",label:"Domain",align:"center",width:"260"}),p(ae,{prop:"app",label:"是否WebApp",align:"center",width:"140"},{default:m((e=>[1===e.row.app?(u(),v(te,{key:0},{default:m((()=>[S("WebApp")])),_:1})):(u(),v(te,{key:1,type:"info"},{default:m((()=>[S("标签")])),_:1}))])),_:1}),p(ae,{prop:"area",width:"200px","show-overflow-tooltip":"",label:"分类",align:"center"},{default:m((e=>[S(_(ge(e.row.area)),1)])),_:1}),p(ae,{prop:"tips",label:"简介",align:"center",width:"300"}),p(ae,{sortable:"custom",prop:"install_num",label:"安装量(次)",align:"center",width:"150"}),p(ae,{prop:"create_time",sortable:"custom",label:"创建时间",align:"center",width:"200"}),p(ae,{fixed:"right",label:"操作",align:"center",width:"150"},{default:m((e=>[p(f,{type:"primary",size:"small",onClick:l=>(e=>{ye.value=Object.assign({},e);const l=e.area.split(",");l.length>0&&""!==l[0]?ye.value.area=l:ye.value.area=[],be.value=!0})(e.row)},{default:m((()=>[S("操作")])),_:2},1032,["onClick"]),p(f,{type:"danger",size:"small",onClick:l=>xe(e.row.id)},{default:m((()=>[S("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),p(je,{"page-size":Le.value.per_page,onSizeChange:Le.value.sizes,onCurrentChange:Le.value.refresh,"page-sizes":[15,20,30,40,50,100],class:"mt-6",layout:"sizes,total,prev,pager,jumper",total:Le.value.total},null,8,["page-size","onSizeChange","onCurrentChange","total"])]),p(Ge,{modelValue:be.value,"onUpdate:modelValue":l[13]||(l[13]=e=>be.value=e),title:"编辑标签",size:"400px","close-on-click-modal":!1,top:"5vh"},{default:m((()=>[p(De,{modelValue:ye.value,"onUpdate:modelValue":l[12]||(l[12]=e=>ye.value=e),"label-position":"top"},{default:m((()=>[p(Ae,{label:"名称"},{default:m((()=>[p(E,{modelValue:ye.value.name,"onUpdate:modelValue":l[2]||(l[2]=e=>ye.value.name=e),"show-word-limit":"",maxlength:"50",placeholder:"请输入网站title或名称"},null,8,["modelValue"])])),_:1}),p(Ae,{label:"网址"},{default:m((()=>[p(E,{modelValue:ye.value.url,"onUpdate:modelValue":l[3]||(l[3]=e=>ye.value.url=e),"show-word-limit":"",maxlength:"251",placeholder:"请输入网址,请携带http协议"},null,8,["modelValue"])])),_:1}),p(Ae,{label:"logo"},{default:m((()=>[d("div",Z,[ye.value.src?(u(),r("img",{key:0,src:ye.value.src,style:{width:"30px",height:"30px","margin-right":"10px","border-radius":"3px"}},null,8,$)):g("",!0),p(E,{modelValue:ye.value.src,"onUpdate:modelValue":l[4]||(l[4]=e=>ye.value.src=e),placeholder:"标签图标地址(120x120)px尺寸最佳"},{append:m((()=>[p(Ie,{class:"upload-demo","show-file-list":!1,"on-success":Ue,action:x(L)+x(fe).state.site.upload},{default:m((()=>[p(f,{type:"primary"},{default:m((()=>[S("上传")])),_:1})])),_:1},8,["action"])])),_:1},8,["modelValue"]),p(f,{type:"primary",style:{width:"100px","margin-left":"15px"},onClick:Se},{default:m((()=>[S("抓取图标")])),_:1})])])),_:1}),p(Ae,{label:"域名"},{default:m((()=>[p(E,{modelValue:ye.value.domain,"onUpdate:modelValue":l[5]||(l[5]=e=>ye.value.domain=e),"show-word-limit":"",maxlength:"251",placeholder:"请输入域名多个可以用,隔开。域名不要携带http协议"},null,8,["modelValue"])])),_:1}),p(Ae,{label:"分类"},{default:m((()=>[p(x(O),{modelValue:ye.value.area,"onUpdate:modelValue":l[6]||(l[6]=e=>ye.value.area=e),multiple:!0,placeholder:"分类选择可多选",class:"w-full"},{default:m((()=>[(u(!0),r(i,null,n(ce.value,(e=>(u(),v(j,{key:e.id},{default:m((()=>[e.id>0?(u(),v(x(b),{key:0,label:e.name,value:`${e.id}`},null,8,["label","value"])):g("",!0)])),_:2},1024)))),128))])),_:1},8,["modelValue"])])),_:1}),p(Ae,{label:"简介"},{default:m((()=>[p(E,{modelValue:ye.value.tips,"onUpdate:modelValue":l[7]||(l[7]=e=>ye.value.tips=e),placeholder:"请简单介绍一下建议30字符以内","show-word-limit":"",maxlength:"200"},null,8,["modelValue"])])),_:1}),p(Ae,{label:"是否网页APP"},{default:m((()=>[p(Te,{"active-value":1,"inactive-value":0,modelValue:ye.value.app,"onUpdate:modelValue":l[8]||(l[8]=e=>ye.value.app=e)},null,8,["modelValue"])])),_:1}),p(Ae,{label:"背景颜色"},{default:m((()=>[d("ul",H,[(u(),r(i,null,n(pe,(e=>d("li",{onClick:l=>{return a=e,void(ye.value.bgColor=a);var a}},["rgba(0,0,0,0)"===e?(u(),r("div",Q,[e===ye.value.bgColor?(u(),r("b",X,"√")):g("",!0)])):(u(),r("div",{key:1,style:z({backgroundColor:e})},[e===ye.value.bgColor?(u(),r("b",Y,"√")):g("",!0)],4))],8,N))),64))]),p(Pe,{"show-alpha":"",modelValue:ye.value.bgColor,"onUpdate:modelValue":l[9]||(l[9]=e=>ye.value.bgColor=e)},null,8,["modelValue"])])),_:1}),p(Ae,{label:"标签添加量（热度）"},{default:m((()=>[p(Be,{modelValue:ye.value.install_num,"onUpdate:modelValue":l[10]||(l[10]=e=>ye.value.install_num=e),class:"w-full",placeholder:"数值越高排名越高"},null,8,["modelValue"])])),_:1}),p(Ae,{label:"排行"},{default:m((()=>[p(Be,{modelValue:ye.value.hot,"onUpdate:modelValue":l[11]||(l[11]=e=>ye.value.hot=e),class:"w-full",placeholder:"数值越高排名越高"},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),p(f,{type:"primary",class:"w-full",onClick:ze},{default:m((()=>[S("保存")])),_:1})])),_:1},8,["modelValue"])])]),p(Ge,{modelValue:he.value,"onUpdate:modelValue":l[17]||(l[17]=e=>he.value=e),width:"500px",title:"标签分类编辑"},{default:m((()=>[ee,p(E,{onKeypress:l[14]||(l[14]=A(C((()=>{}),["stop"]),["enter"])),modelValue:ne.value.name,"onUpdate:modelValue":l[15]||(l[15]=e=>ne.value.name=e),class:"autofocus","show-word-limit":"",maxlength:"50",placeholder:"请输入分类名称"},null,8,["modelValue"]),ne.value.id?(u(),v(Re,{key:0,type:"danger",onClick:l[16]||(l[16]=e=>{return l={id:ne.value.id},void y.confirm("是否删除当前标签分类","危险警告").then((e=>{h({url:"/LinkStore/createFolder",method:"post",data:{type:"del",id:l.id}}).then((e=>{w.success(e.msg),1===e.code&&(me(),he.value=!1)}))}));var l})},{default:m((()=>[S("删除该分类 ")])),_:1})):g("",!0),d("div",le,[p(f,{class:"m-auto w-2/5",type:"primary",onClick:_e},{default:m((()=>[S("保存")])),_:1})])])),_:1},8,["modelValue"])],64)}}};export{ae as default};
