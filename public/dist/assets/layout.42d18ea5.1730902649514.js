import{_ as e}from"./noLogo.563a3881.1730902649514.js";import{_ as a,r as l,V as t,a as n,b as s,c as d,d as u,k as i,h as r,I as o,m,J as f,s as c,an as g,j as _,aI as x,aJ as p,aK as v,aL as h,aB as y,aM as b,aN as k,aO as w,G as C}from"./index.34872ab0.1730902649514.js";const j={key:0},A={class:"xieyi"},L=["innerHTML"],M={style:{display:"flex",gap:"15px","align-items":"end",padding:"8px 20px"}},V={style:{width:"100%"}};var z=a({__name:"xieyi",setup(e){const a=l(""),c=()=>{"我已知晓并接受该协议"===a.value?t({url:"/Admin/xy",method:"post",data:{xy:a.value}}).then((e=>{1===e.code&&location.reload()})):f.error("输入内容有误，请重新输入")},g=l("");return t({url:"/Admin/xyCheck",method:"get"}).then((e=>{0===e.code&&(g.value=e.data.license)})),(e,l)=>{const t=n("el-input"),f=n("el-button");return g.value?(s(),d("div",j,[l[3]||(l[3]=u("div",{class:"zhezhao"},null,-1)),u("div",A,[u("div",{class:"xieYiContent",innerHTML:g.value},null,8,L),u("div",M,[u("div",V,[l[1]||(l[1]=u("div",{style:{"font-size":"14px",color:"red"}},"如果您接受该协议并继续使用该程序请输入“我已知晓并接受该协议”， 然后点击确定",-1)),i(t,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),style:{"margin-top":"5px"},placeholder:"如果您接受该协议并继续使用该程序请输入“我已知晓并接受该协议”， 然后点击确定"},null,8,["modelValue"])]),i(f,{type:"primary",onClick:c},{default:r((()=>l[2]||(l[2]=[o("确定")]))),_:1})])])])):m("",!0)}}},[["__scopeId","data-v-d7354be2"]]);const H={class:"Manager"},I={class:"manager-menu"},E={target:"_blank",href:"/"},J={class:"flex mb-2 hover:text-blue-400 justify-center flex-col items-center"},O={class:"clientHome mt-4 w-8 opacity-1"},T=["src"],B={key:1,class:"w-full h-full border",src:e,alt:""},G={class:"manager-view"},K={__name:"layout",setup(e){c.commit("pullSiteConfig");const a=(e,a)=>{},l=(e,a)=>{},t=g().path;return(e,m)=>{const f=n("el-icon"),g=n("el-menu-item"),j=n("router-link"),A=n("el-menu"),L=n("router-view");return s(),d("div",H,[u("div",I,[i(A,{"default-active":_(t),class:"el-menu-vertical-demo h-full",onOpen:a,onClose:l},{default:r((()=>[u("a",E,[u("div",J,[u("div",O,[_(c).state.site.logo?(s(),d("img",{key:0,class:"w-full h-full rounded-xl",src:_(c).state.site.logo,alt:""},null,8,T)):(s(),d("img",B))]),m[0]||(m[0]=u("div",{class:"mt-2 text-sm"},"客户端",-1))])]),i(j,{to:"/manager/index"},{default:r((()=>[i(g,{index:"/manager/index"},{default:r((()=>[i(f,null,{default:r((()=>[i(_(x))])),_:1}),m[1]||(m[1]=o(" 数据管理 "))])),_:1})])),_:1}),i(j,{to:"/manager/user"},{default:r((()=>[i(g,{index:"/manager/user"},{default:r((()=>[i(f,null,{default:r((()=>[i(_(p))])),_:1}),m[2]||(m[2]=o(" 用户列表 "))])),_:1})])),_:1}),i(j,{to:"/manager/linkstore"},{default:r((()=>[i(g,{index:"/manager/linkstore"},{default:r((()=>[i(f,null,{default:r((()=>[i(_(v))])),_:1}),m[3]||(m[3]=o(" 标签商城 "))])),_:1})])),_:1}),i(j,{to:"/manager/webApp"},{default:r((()=>[i(g,{index:"/manager/webApp"},{default:r((()=>[i(f,null,{default:r((()=>[i(_(h))])),_:1}),m[4]||(m[4]=o(" 卡片组件 "))])),_:1})])),_:1}),i(j,{to:"/manager/searchEngine"},{default:r((()=>[i(g,{index:"/manager/searchEngine"},{default:r((()=>[i(f,null,{default:r((()=>[i(_(y))])),_:1}),m[5]||(m[5]=o(" 搜索引擎 "))])),_:1})])),_:1}),i(j,{to:"/manager/background"},{default:r((()=>[i(g,{index:"/manager/background"},{default:r((()=>[i(f,null,{default:r((()=>[i(_(b))])),_:1}),m[6]||(m[6]=o(" 壁纸管理 "))])),_:1})])),_:1}),i(j,{to:"/manager/file"},{default:r((()=>[i(g,{index:"/manager/file"},{default:r((()=>[i(f,null,{default:r((()=>[i(_(k))])),_:1}),m[7]||(m[7]=o(" 附件管理 "))])),_:1})])),_:1}),i(j,{to:"/manager/extension"},{default:r((()=>[i(g,{index:"/manager/extension"},{default:r((()=>[i(f,null,{default:r((()=>[i(_(w))])),_:1}),m[8]||(m[8]=o(" 扩展管理 "))])),_:1})])),_:1}),i(j,{to:"/manager/setting"},{default:r((()=>[i(g,{index:"/manager/setting"},{default:r((()=>[i(f,null,{default:r((()=>[i(_(C))])),_:1}),m[9]||(m[9]=o(" 系统设置 "))])),_:1})])),_:1})])),_:1},8,["default-active"])]),u("div",G,[i(L)]),i(z)])}}};export{K as default};
