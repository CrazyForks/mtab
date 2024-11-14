import{_ as e,r as a,a as l,b as t,c as i,d as r,k as s,h as o,g as n,m as d,X as u,aP as p,V as g,J as c,I as h,x as m}from"./index.34872ab0.1730902649514.js";const f={class:"SearchEngine"},v={class:"p-4 bg-white rounded-lg overflow-hidden flex flex-wrap gap-4"},w={class:"ml-auto"},b={class:"mt-4 p-4 bg-white rounded-lg overflow-hidden w-full"},_={key:1,title:"无法预览",style:{width:"40px",height:"40px",margin:"auto"},src:"/dist/assets/file.a6743b7c.1730902649514.svg"},y={key:0},x={key:1},k=["download","href"];var C=e({__name:"file",setup(e){const C=a([]),z=e=>{C.value=e.map((e=>e.id))},V=a({page:1,limit:20,total:0,refresh(e){V.value.page=e,D()},sizes(e){V.value.limit=e,D()}}),j=()=>{u.confirm("扫描本地需要消耗更多的资源，需要耐心等待，期间请勿离开","温馨提示").then((e=>{const a=p.service({fullscreen:!0,text:"扫描中"});g({url:"/File/scanLocal",method:"post"}).then((e=>{V.value.refresh(1),c.success(e.msg)})).finally((e=>{a.close()}))})).catch((e=>{}))},F=a({path:"",user_id:""}),S=a(""),I=e=>{u.confirm("是否删除","删除提示").then((a=>{g({url:"/File/del",method:"post",data:{ids:e}}).then((e=>{c.success(e.msg),D()}))}))};let O=a(!1);const U=a([]),D=()=>{U.value=[],g({url:"/File/list",method:"post",data:{search:F.value,limit:V.value.limit,page:V.value.page}}).then((e=>{O.value=!0,U.value=e.data.data,Object.assign(V.value,e.data)}))};return D(),(e,a)=>{const u=l("el-input"),p=l("el-button"),g=l("el-table-column"),c=l("el-image"),O=l("el-tag"),E=l("el-table"),J=l("el-pagination");return t(),i("div",f,[r("div",v,[s(u,{modelValue:F.value.path,"onUpdate:modelValue":a[0]||(a[0]=e=>F.value.path=e),style:{width:"200px"},placeholder:"图片地址搜索",clearable:""},null,8,["modelValue"]),s(u,{modelValue:F.value.user_id,"onUpdate:modelValue":a[1]||(a[1]=e=>F.value.user_id=e),style:{width:"200px"},placeholder:"用户ID搜索",clearable:""},null,8,["modelValue"]),s(p,{onClick:D,type:"primary"},{default:o((()=>a[3]||(a[3]=[h("搜索")]))),_:1}),C.value.length?(t(),n(p,{key:0,type:"danger",onClick:a[2]||(a[2]=e=>I(C.value))},{default:o((()=>a[4]||(a[4]=[h("批量删除")]))),_:1})):d("",!0),r("div",w,[s(p,{type:"danger",onClick:j},{default:o((()=>a[5]||(a[5]=[h("扫描本地文件入库 ")]))),_:1})])]),r("div",b,[s(E,{onSelectionChange:z,ref_key:"table",ref:S,height:"calc(100vh - 200px)",data:U.value},{default:o((()=>[s(g,{type:"selection",width:"55"}),s(g,{prop:"name",label:"预览",align:"center",width:"90"},{default:o((e=>[["image/png","image/jpg","image/jpeg","image/gif","image/webp","image/svg","image/svg+xml","image/vnd.microsoft.icon","image/x-icon"].indexOf(e.row.mime_type)>=0?(t(),n(c,{key:0,style:{width:"40px",height:"40px",margin:"auto","background-color":"rgba(143,143,143,0.2)","border-radius":"6px",border:"1px solid #ffffff"},src:e.row.path},null,8,["src"])):(t(),i("img",_))])),_:1}),s(g,{prop:"status",label:"上传用户",align:"center",width:"180"},{default:o((e=>[e.row.user?(t(),i("div",y,[e.row.user.nickname?(t(),n(O,{key:0},{default:o((()=>[h(m(e.row.user.nickname),1)])),_:2},1024)):e.row.user_id?(t(),i("span",x,"id:"+m(e.row.user_id),1)):d("",!0)])):d("",!0)])),_:1}),s(g,{prop:"path","show-overflow-tooltip":"",label:"文件路径",align:"center","min-width":"260"}),s(g,{prop:"mime_type",label:"文件类型",width:"200px",align:"center"}),s(g,{prop:"status",label:"文件大小",align:"center",width:"180"},{default:o((e=>[h(m((e.row.size/1024).toFixed(2))+"kb ",1)])),_:1}),s(g,{prop:"hash",label:"文件哈希值",align:"center",width:"300"}),s(g,{prop:"create_time",label:"创建时间",align:"center",width:"200"}),s(g,{fixed:"right",label:"操作",align:"center",width:"200"},{default:o((e=>[r("a",{download:e.row.path,class:"el-button el-button--small el-button--primary",target:"_blank",href:e.row.path},"下载",8,k),s(p,{type:"danger",size:"small",onClick:a=>I([e.row.id])},{default:o((()=>a[6]||(a[6]=[h("删除")]))),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),s(J,{"page-size":V.value.limit,"current-page":V.value.page,onSizeChange:V.value.sizes,onCurrentChange:V.value.refresh,"page-sizes":[20,30,40,50,100],class:"mt-6",layout:"sizes,total,prev,pager,jumper",total:V.value.total},null,8,["page-size","current-page","onSizeChange","onCurrentChange","total"])])])}}},[["__scopeId","data-v-7ec737e8"]]);export{C as default};
