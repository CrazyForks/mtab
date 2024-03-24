import{r as e,u as a,U as l,b as s,c as t,d as n,e as i,F as c,f as r,g as d,h as u,t as m,k as o,j as g,au as p,T as v,i as x,v as h,z as f,B as E,C as y,J as b}from"./index.1711290598880.js";import{_ as k}from"./net.1711290598880.js";const _={class:"searchEngineUserManager"},j=i("div",{class:"searchEngineTitle flex items-center"},[i("img",{src:k,style:{width:"20px",height:"20px"}}),i("span",{class:"ml-1"},"搜索引擎管理")],-1),w=i("div",{class:"mySearchEngine ml-4 text-gray-800"}," 我的搜索引擎 ",-1),C={class:"grid gap-4 mxs:grid-cols-4 grid-cols-6 items-center justify-center mt-4 myEngine"},F={class:"flex flex-col items-center relative"},U=["title","src","alt"],S=["title"],z=["onClick"],I=i("div",{class:"mySearchEngine mt-4 ml-4 text-gray-800"}," 未添加的搜索引擎 ",-1),O={class:"grid gap-4 mxs:grid-cols-4 grid-cols-6 items-center justify-center mt-4"},T={class:"flex relative flex-col items-center"},V=["title","src","alt"],B=["title"],J=["onClick"],L=i("div",{class:"mySearchEngine mt-4 ml-4 text-gray-800"}," 自定义搜索引擎 ",-1),M={class:"flex gap-4 px-4 pt-3 items-center flex-wrap"},N={__name:"addSearchEngine",setup(k){const N=e({name:"",icon:"/static/searchEngine/net.svg",url:""}),R=a(),q=e(Object.assign([],R.state.searchEngine)),A=e([]);l({url:"/searchEngine/index"}).then((e=>{1===e.code&&(A.value=e.data)}));const D=e=>-1===q.value.findIndex((a=>a.name===e.name)),G=e=>{if(q.value.length>=20)return void b.warning("最大可以添加20个搜索引擎");q.value.findIndex((a=>a.name===e.name))>=0?b.warning("您已添加过该搜索引擎"):(q.value.push(e),K())},H=()=>{N.value.name.trim()&&N.value.url.trim()&&(G(Object.assign({},N.value)),N.value.name="",N.value.url="")},K=()=>{R.state.searchEngine=q.value,R.commit("updateSearchEngine")};return(e,a)=>{const l=s("el-icon"),k=s("el-button");return t(),n("div",_,[j,w,i("div",C,[(t(!0),n(c,null,r(q.value,((e,a)=>(t(),d(v,null,{default:u((()=>[i("div",F,[i("img",{title:e.tips,style:{width:"50px",height:"50px","background-color":"#F3F3F3","border-radius":"6px",padding:"8px"},src:e.icon,alt:e.name},null,8,U),i("span",{class:"mt-2 text-xs",title:e.tips},m(e.name),9,S),i("div",{class:"search-del-ico",onClick:a=>(e=>{const a=q.value.findIndex((a=>a.name===e.name));q.value.splice(a,1),0===q.value.length&&b.warning("至少需要保留一个搜索引擎"),K()})(e)},[o(l,{color:"#fff",size:"16px"},{default:u((()=>[o(g(p))])),_:1})],8,z)])])),_:2},1024)))),256))]),I,i("div",O,[(t(!0),n(c,null,r(A.value,((e,a)=>(t(),d(v,null,{default:u((()=>[x(i("div",T,[i("img",{title:e.tips,style:{width:"50px",height:"50px","background-color":"#F3F3F3","border-radius":"6px",padding:"8px"},src:e.icon,alt:e.name},null,8,V),i("span",{class:"mt-2 text-xs",title:e.tips},m(e.name),9,B),i("div",{class:"search-add-ico",onClick:a=>G(e)},[o(l,{color:"#fff",size:"16px"},{default:u((()=>[o(g(f))])),_:1})],8,J)],512),[[h,D(e)]])])),_:2},1024)))),256))]),L,i("div",M,[x(i("input",{class:"customEngineName",placeholder:"请输入引擎名称","onUpdate:modelValue":a[0]||(a[0]=e=>N.value.name=e)},null,512),[[E,N.value.name]]),x(i("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>N.value.url=e),class:"customEngineUrl",placeholder:"自定义引擎URL，搜索词参数部分用{1}代替"},null,512),[[E,N.value.url]]),o(k,{onClick:H,class:"addCustom"},{default:u((()=>[y("添加")])),_:1})])])}}};export{N as default};
