import{K as e,u as l,r as a,b as t,c as s,d as o,k as u,h as d,j as n,a3 as m,g as r,z as c,m as i,C as p,e as v,U as g,J as h,V as f,a0 as b,F as V,f as w,ab as A,n as y,t as M,T as S}from"./index.1711290598880.js";import{_ as z}from"./wangEditor.1711290598880.js";const C=v("h2",{class:"mb-4"},"站点信息配置",-1),_=["src"],U=v("h2",{class:"mb-4"},"关于我们 （前端设置关于我们的地方展示以及其他可能需要的地方展示）",-1),x=v("h2",{class:"mb-4"},"其他配置",-1),R={class:"flex"},k={__name:"base",setup(f){e.get("user_id"),e.get("token","");const b=l(),V=a({logo:"",title:"",email:"",backgroundImage:"",assets_host:"",remote_avatar:"",keywords:"",defaultTab:"",description:"",customHead:"",qqGroup:"",pwa:"0",theme_color:"#141414"}),w=e=>{1===e.code&&(V.value.logo=e.data.url)},A=async()=>{const e=await g({url:"/setting/refreshCache"});h.success(e.msg)},y=()=>{g({url:"/Setting/saveSetting",method:"post",data:{form:V.value}}).then((e=>{h.success(e.msg),1===e.code&&M()}))},M=()=>{g({url:"/Setting/getSetting",method:"post",data:{role:["logo","title","email","keywords","backgroundImage","assets_host","remote_avatar","defaultTab","recordNumber","description","customHead","qqGroup","pwa","theme_color"]}}).then((e=>{1===e.code&&Object.assign(V.value,e.data)}))};return M(),(e,l)=>{const a=t("el-icon"),g=t("el-upload"),h=t("el-form-item"),f=t("el-input"),M=t("el-card"),S=t("el-option"),z=t("el-select"),k=t("el-color-picker"),E=t("el-button"),G=t("el-form");return s(),o("div",null,[u(G,{modelValue:V.value,"onUpdate:modelValue":l[10]||(l[10]=e=>V.value=e),"label-position":"top"},{default:d((()=>[u(M,null,{default:d((()=>[C,u(h,{label:"站点logo (建议尺寸严格设置为144x144px) 后续PWA等其他场景可能会用到"},{default:d((()=>[u(g,{class:"avatar-uploader","show-file-list":!1,"on-success":w,action:n(m)+n(b).state.site.upload},{default:d((()=>{var e,l;return[(null==(e=V.value)?void 0:e.logo)?(s(),o("img",{key:0,src:null==(l=V.value)?void 0:l.logo,class:"avatar",alt:""},null,8,_)):(s(),r(a,{key:1,class:"avatar-uploader-icon"},{default:d((()=>[u(n(c))])),_:1}))]})),_:1},8,["action"])])),_:1}),u(h,{label:"站点名称"},{default:d((()=>[u(f,{modelValue:V.value.title,"onUpdate:modelValue":l[0]||(l[0]=e=>V.value.title=e),placeholder:"站点名称"},null,8,["modelValue"])])),_:1}),u(h,{label:"站点关键字"},{default:d((()=>[u(f,{modelValue:V.value.keywords,"onUpdate:modelValue":l[1]||(l[1]=e=>V.value.keywords=e),placeholder:"站点关键字用,隔开"},null,8,["modelValue"])])),_:1}),u(h,{label:"站点介绍"},{default:d((()=>[u(f,{modelValue:V.value.description,"onUpdate:modelValue":l[2]||(l[2]=e=>V.value.description=e),placeholder:"站点介绍"},null,8,["modelValue"])])),_:1}),u(h,{label:"自定义Head代码"},{default:d((()=>[u(f,{type:"textarea",rows:"5",modelValue:V.value.customHead,"onUpdate:modelValue":l[3]||(l[3]=e=>V.value.customHead=e),placeholder:"请粘贴html文本内容"},null,8,["modelValue"])])),_:1})])),_:1}),u(M,{class:"mt-4"},{default:d((()=>[U,u(h,{label:"站点联系邮箱"},{default:d((()=>[u(f,{modelValue:V.value.email,"onUpdate:modelValue":l[4]||(l[4]=e=>V.value.email=e),placeholder:"联系客服邮箱"},null,8,["modelValue"])])),_:1}),u(h,{label:"QQ交流群"},{default:d((()=>[u(f,{modelValue:V.value.qqGroup,"onUpdate:modelValue":l[5]||(l[5]=e=>V.value.qqGroup=e),placeholder:"请输入QQ交流群号"},null,8,["modelValue"])])),_:1})])),_:1}),u(M,{class:"mt-4"},{default:d((()=>[x,n(false)?(s(),r(h,{key:0,label:"资源cdn域名"},{default:d((()=>[u(f,{modelValue:V.value.assets_host,"onUpdate:modelValue":l[6]||(l[6]=e=>V.value.assets_host=e),placeholder:"文件cdn域名,一般留空即可!"},null,8,["modelValue"])])),_:1})):i("",!0),u(h,{label:"标签LOGO生成API（自建请修改API地址）"},{default:d((()=>[u(f,{modelValue:V.value.remote_avatar,"onUpdate:modelValue":l[7]||(l[7]=e=>V.value.remote_avatar=e),placeholder:"https://avatar.mtab.cc/6.x/thumbs/png?seed="},null,8,["modelValue"])])),_:1}),u(h,{label:"开启网站PWA （在开启前请确保您已知晓PWA的功能和用途，如不了解请不要开启，不开启也不影响使用。关闭后已安装的用户不会受到影响，需要手动卸载！）"},{default:d((()=>[u(z,{class:"w-full",modelValue:V.value.pwa,"onUpdate:modelValue":l[8]||(l[8]=e=>V.value.pwa=e)},{default:d((()=>[u(S,{label:"停用PWA",value:"0"},{default:d((()=>[p("停用PWA")])),_:1}),u(S,{label:"启用PWA",value:"1"},{default:d((()=>[p("启用PWA")])),_:1})])),_:1},8,["modelValue"])])),_:1}),"1"==V.value.pwa?(s(),r(h,{key:1,label:"PWA窗口主题颜色(修改后针对已安装的用户不会立即生效，浏览器会一般24小时左右才会更新，望须知！)"},{default:d((()=>[u(k,{modelValue:V.value.theme_color,"onUpdate:modelValue":l[9]||(l[9]=e=>V.value.theme_color=e)},null,8,["modelValue"])])),_:1})):i("",!0)])),_:1}),v("div",R,[u(E,{size:"large",class:"mt-4 w-full",type:"primary",onClick:y},{default:d((()=>[p("保存配置文件")])),_:1}),u(E,{size:"large",class:"mt-4 w-40",type:"danger",onClick:A},{default:d((()=>[p("刷新配置文件缓存")])),_:1})])])),_:1},8,["modelValue"])])}}},E={class:"flex flex-col",style:{height:"calc(100vh - 100px)"}},G={class:"mt-4"},N=v("div",{class:"text-base text-gray-700 mb-2"},"公告标题（非必填）",-1),D={class:"mt-4"},W=v("div",{class:"text-base text-gray-700 mb-2"},[p("请选择公告的状态 "),v("b",{class:"text-red-500"},"*")],-1),I={class:"mt-6 flex"},T={__name:"notify",setup(e){const l=a(""),n=a(""),m=a("0"),r=()=>{f({customClass:"globalNotify",dangerouslyUseHTMLString:!0,title:n.value,message:l.value,duration:3e4})},c=async()=>{const e=await g({url:"/Setting/saveSetting",method:"post",data:{form:{globalNotify:JSON.stringify({html:l.value,title:n.value,status:m.value})}}});1===e.code?h.success(e.msg):h.warning(e.msg)};return g({url:"/Setting/getSetting",method:"post",data:{role:["globalNotify"]}}).then((e=>{if(1===e.code){const{globalNotify:t=!1}=e.data;if(t)try{let e=JSON.parse(t);const{html:a="",title:s="",status:o=0}=e;l.value=a,n.value=s,m.value=o}catch(a){console.log(a)}}})),(e,a)=>{const i=t("el-input"),g=t("el-option"),h=t("el-select"),f=t("el-button");return s(),o("div",E,[u(z,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e)},null,8,["modelValue"]),v("div",G,[N,u(i,{clearable:"",size:"large",modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=e=>n.value=e),placeholder:"请设置一个标题吧！不是必须设置项，不设置则不展示标题。"},null,8,["modelValue"])]),v("div",D,[W,u(h,{placeholder:"请选择公告的状态",modelValue:m.value,"onUpdate:modelValue":a[2]||(a[2]=e=>m.value=e),size:"large"},{default:d((()=>[u(g,{value:"0",label:"隐藏"}),u(g,{value:"1",label:"展示"})])),_:1},8,["modelValue"])]),v("div",I,[u(f,{class:"w-full",size:"large",onClick:c,type:"primary"},{default:d((()=>[p("保存公告")])),_:1}),u(f,{class:"w-60",size:"large",onClick:r,type:"success"},{default:d((()=>[p("预览公告")])),_:1})])])}}};const O=v("h2",{class:"mb-4 flex gap-2 items-center"},[v("img",{style:{width:"20px",height:"20px"},src:"data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRFRDAzMDFGQTRERjExRTdBOERFRDM3QzM0QkNFNDU4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRFRDAzMDIwQTRERjExRTdBOERFRDM3QzM0QkNFNDU4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REVEMDMwMURBNERGMTFFN0E4REVEMzdDMzRCQ0U0NTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REVEMDMwMUVBNERGMTFFN0E4REVEMzdDMzRCQ0U0NTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7byXusAAAK8ElEQVR42uRXeXAUVRr/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"}),p("ICP备案信息")],-1),Z=v("h2",{class:"mb-4 flex gap-2 items-center"},[v("img",{style:{width:"20px",height:"20px"},src:"/dist/assets/gonganbeian.1711290598880.ico"}),p("公安备案信息")],-1),L={class:"mb-4 flex gap-2 items-center"},F={style:{width:"25px",height:"25px"},t:"1709128256898",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8037",width:"128",height:"128"},P=[v("path",{d:"M871.7 762.53l-86.62 17.86a48.26 48.26 0 0 0-31.35 22l-46.41 75.29a24.78 24.78 0 0 1-41.4 1.21L513.54 661.22a24.78 24.78 0 0 1 6.09-34.52L700.1 500.33a24.78 24.78 0 0 1 34.52 6.08L887 724a24.79 24.79 0 0 1-15.3 38.53z",fill:"#3AAF09","p-id":"8038"},null,-1),v("path",{d:"M154.59 762.53l86.62 17.86a48.26 48.26 0 0 1 31.35 22L319 877.63a24.79 24.79 0 0 0 41.41 1.21l152.34-217.62a24.78 24.78 0 0 0-6.08-34.52L326.19 500.33a24.78 24.78 0 0 0-34.52 6.08L139.29 724a24.79 24.79 0 0 0 15.3 38.53z",fill:"#3AAF09","p-id":"8039"},null,-1),v("path",{d:"M513.25 425.25m-317.35 0a317.35 317.35 0 1 0 634.7 0 317.35 317.35 0 1 0-634.7 0Z",fill:"#24D316","p-id":"8040"},null,-1),v("path",{d:"M526.94 634.27c-129.09 0-231.08-118.23-203.39-252.09 16.18-78.18 76.38-140.46 154.26-158.24 67.95-15.51 135.15 1.75 185 44.91a14.3 14.3 0 0 1 0.68 20.9l-29.34 29.35a14.32 14.32 0 0 1-19.26 0.89A138 138 0 0 0 389.07 431.4c2.69 73.72 63.5 132.87 137.87 132.87a136.9 136.9 0 0 0 88-31.69 14.28 14.28 0 0 1 19.22 0.94l29.34 29.34a14.32 14.32 0 0 1-0.76 21 206.42 206.42 0 0 1-135.8 50.41z",fill:"#E1FFC7","p-id":"8041"},null,-1)],J={class:"flex"},Y={__name:"copyright",setup(e){const l=a({recordNumber:"",copyright:"",beianMps:""}),n=async()=>{const e=await g({url:"/setting/refreshCache"});h.success(e.msg)},m=()=>{g({url:"/Setting/saveSetting",method:"post",data:{form:l.value}}).then((e=>{h.success(e.msg),1===e.code&&r()}))},r=()=>{g({url:"/Setting/getSetting",method:"post",data:{role:["recordNumber","copyright","beianMps"]}}).then((e=>{1===e.code&&(l.value=Object.assign(l.value,e.data))}))};return r(),(e,a)=>{const r=t("el-input"),c=t("el-form-item"),i=t("el-card"),g=t("el-button"),h=t("el-form");return s(),o("div",null,[u(h,{modelValue:l.value,"onUpdate:modelValue":a[3]||(a[3]=e=>l.value=e),"label-position":"top"},{default:d((()=>[u(i,{class:"mt-4"},{default:d((()=>[O,u(c,{label:"站点ICP备案信息"},{default:d((()=>[u(r,{modelValue:l.value.recordNumber,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value.recordNumber=e),placeholder:"请输入备案号"},null,8,["modelValue"])])),_:1})])),_:1}),u(i,{class:"mt-4"},{default:d((()=>[Z,u(c,{label:"站点公安备案信息"},{default:d((()=>[u(r,{modelValue:l.value.beianMps,"onUpdate:modelValue":a[1]||(a[1]=e=>l.value.beianMps=e),placeholder:"请输入备案号"},null,8,["modelValue"])])),_:1})])),_:1}),u(i,{class:"mt-4"},{default:d((()=>[v("h2",L,[v("div",null,[(s(),o("svg",F,P))]),p(" 站点版权信息 ")]),u(c,{label:"请输入站点版权信息"},{default:d((()=>[u(r,{modelValue:l.value.copyright,"onUpdate:modelValue":a[2]||(a[2]=e=>l.value.copyright=e),placeholder:"请输入文字或者富文本内容，请勿插入js脚本等"},null,8,["modelValue"])])),_:1})])),_:1}),v("div",J,[u(g,{size:"large",class:"mt-4 w-full",type:"primary",onClick:m},{default:d((()=>[p("保存配置文件")])),_:1}),u(g,{size:"large",class:"mt-4 w-40",type:"danger",onClick:n},{default:d((()=>[p("刷新配置文件缓存")])),_:1})])])),_:1},8,["modelValue"])])}}};const B={class:"mb-4 flex items-center"},X=v("img",{width:"22",height:"22",class:"mr-2",src:"/dist/assets/auth.1711290598880.svg",alt:"订阅授权码"},null,-1),H={key:0,href:"https://mtab.cc/pricing.html",target:"_blank",class:"text-xs p-1 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl ml-8 text-white"},Q={class:"flex"},j={__name:"auth",setup(m){e.get("user_id"),e.get("token","");l();const c=a({authCode:"",authServer:""}),f=async()=>{const e=await g({url:"/setting/refreshCache"});h.success(e.msg)},b=()=>{g({url:"/Setting/saveSetting",method:"post",data:{form:c.value}}).then((e=>{h.success(e.msg),1===e.code&&V()}))},V=()=>{g({url:"/Setting/getSetting",method:"post",data:{role:["authCode","authServer"]}}).then((e=>{1===e.code&&Object.assign(c.value,e.data)}))};return V(),(e,l)=>{const a=t("el-input"),m=t("el-form-item"),g=t("el-card"),h=t("el-button"),V=t("el-form");return s(),o("div",null,[u(V,{modelValue:c.value,"onUpdate:modelValue":l[2]||(l[2]=e=>c.value=e),"label-position":"top"},{default:d((()=>[u(g,{class:"mt-4"},{default:d((()=>[v("h2",B,[X,p(" 高级订阅配置 "),c.value.authCode?i("",!0):(s(),o("a",H,"获取订阅授权"))]),u(m,{label:"授权码配置"},{default:d((()=>[u(a,{modelValue:c.value.authCode,"onUpdate:modelValue":l[0]||(l[0]=e=>c.value.authCode=e),placeholder:"请输入授权码"},null,8,["modelValue"])])),_:1}),n(false)?(s(),r(m,{key:0,label:"授权服务器"},{default:d((()=>[u(a,{modelValue:c.value.authServer,"onUpdate:modelValue":l[1]||(l[1]=e=>c.value.authServer=e),placeholder:"一般留空即可!默认无需填写"},null,8,["modelValue"])])),_:1})):i("",!0)])),_:1}),v("div",Q,[u(h,{size:"large",class:"mt-4 w-full",type:"primary",onClick:b},{default:d((()=>[p("保存配置文件")])),_:1}),u(h,{size:"large",class:"mt-4 w-40",type:"danger",onClick:f},{default:d((()=>[p("刷新配置文件缓存")])),_:1})])])),_:1},8,["modelValue"])])}}};const q=v("h2",{class:"mb-4"},"邮件服务器配置（如使用25端口,需要检查服务器商是否允许25端口）",-1),K={class:"flex gap-4 w-full"},$=v("div",{style:{position:"absolute",right:"15px",width:"max-content",top:"-35px"}},[v("span",{style:{"font-size":"13px",color:"#dd4a68","margin-right":"50px"}},"内置常量 验证码：{$code}      发送时间：{$time}"),p(),v("span",null,"模板效果预览")],-1),ee=["innerHTML"],le={class:"flex"},ae={__name:"smtp",setup(n){e.get("user_id"),e.get("token",""),l();const m=a({smtp_host:"",smtp_email:"",smtp_password:"",smtp_port:"",smtp_code_template:""}),r=async()=>{const e=await g({url:"/setting/refreshCache"});h.success(e.msg)},c=e=>{let l=e.replace("{$code}","123456");return l=l.replace("{$time}","1997-01-01 00:00:00"),l},i=()=>{g({url:"/Setting/saveSetting",method:"post",data:{form:m.value}}).then((e=>{h.success(e.msg),1===e.code&&f()}))},f=()=>{g({url:"/Setting/getSetting",method:"post",data:{role:["smtp_host","smtp_email","smtp_password","smtp_port","smtp_code_template"]}}).then((e=>{1===e.code&&Object.assign(m.value,e.data)}))};return f(),(e,l)=>{const a=t("el-input"),n=t("el-form-item"),g=t("el-card"),h=t("el-button"),f=t("el-form");return s(),o("div",null,[u(f,{modelValue:m.value,"onUpdate:modelValue":l[5]||(l[5]=e=>m.value=e),"label-position":"top"},{default:d((()=>[u(g,{class:"mt-4"},{default:d((()=>[q,u(n,{label:"SMTP HOST"},{default:d((()=>[u(a,{type:"text",modelValue:m.value.smtp_host,"onUpdate:modelValue":l[0]||(l[0]=e=>m.value.smtp_host=e),placeholder:"邮件服务器地址"},null,8,["modelValue"])])),_:1}),u(n,{label:"邮箱账号"},{default:d((()=>[u(a,{modelValue:m.value.smtp_email,"onUpdate:modelValue":l[1]||(l[1]=e=>m.value.smtp_email=e),placeholder:"发件人邮箱"},null,8,["modelValue"])])),_:1}),u(n,{label:"邮箱授权码/密码"},{default:d((()=>[u(a,{type:"password","show-password":"",modelValue:m.value.smtp_password,"onUpdate:modelValue":l[2]||(l[2]=e=>m.value.smtp_password=e),placeholder:"授权码/密码"},null,8,["modelValue"])])),_:1}),u(n,{label:"发件端口"},{default:d((()=>[u(a,{modelValue:m.value.smtp_port,"onUpdate:modelValue":l[3]||(l[3]=e=>m.value.smtp_port=e),placeholder:"25/109/110/143/465/995/993/994"},null,8,["modelValue"])])),_:1}),u(n,{label:"验证码邮件模板"},{default:d((()=>[v("div",K,[u(a,{type:"textarea",rows:"14",modelValue:m.value.smtp_code_template,"onUpdate:modelValue":l[4]||(l[4]=e=>m.value.smtp_code_template=e),placeholder:"请输入模板文字或者粘贴设计好的富文本html代码   不设置的话程序则使用默认的邮件模板"},null,8,["modelValue"]),$,v("div",{class:"border w-3/5 p-2",style:{"border-radius":"6px"},innerHTML:c(m.value.smtp_code_template)},null,8,ee)])])),_:1})])),_:1}),v("div",le,[u(h,{size:"large",class:"mt-4 w-full",type:"primary",onClick:i},{default:d((()=>[p("保存配置文件")])),_:1}),u(h,{size:"large",class:"mt-4 w-40",type:"danger",onClick:r},{default:d((()=>[p("刷新配置文件缓存")])),_:1})])])),_:1},8,["modelValue"])])}}},te={class:"setting-tab bg-white p-2 rounded-lg flex text-sm"},se=["onClick"],oe={class:"manager-setting mt-4"},ue={__name:"setting",setup(e){const l=b({name:"基础设置",component:k}),a=[{name:"基础设置",component:k},{name:"邮件配置",component:ae},{name:"公告管理",component:T},{name:"备案与版权",component:Y},{name:"订阅与授权",component:j}];return(e,t)=>(s(),o(V,null,[v("div",te,[(s(),o(V,null,w(a,(e=>u(S,null,{default:d((()=>[v("div",{onClick:a=>(e=>{l.value=e})(e),class:y([{"bg-blue-400 text-white":n(l).name===e.name},"px-6 py-1.5 rounded-md cursor-pointer"])},M(e.name),11,se)])),_:2},1024))),64))]),v("div",oe,[(s(),r(A(n(l).component)))])],64))}};export{ue as default};
