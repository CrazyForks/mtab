import{_ as e,b as t,c as s,d as f,p as r}from"./index.34872ab0.1730902649514.js";const n={name:"textIcon",props:{text:{type:String,default:""},mini:{type:Boolean,default:!1},bgColor:{type:String,default:"#ffffff"}},methods:{getTextColor(e="#ffffff"){let t;if("#fff"!==e&&null!==e||(e="#ffffff"),/rgb/.test(e)){const s=e.match(/\d+/g);t=.299*s[0]+.587*s[1]+.114*s[2]}else{t=.299*parseInt(e.substring(1,3),16)+.587*parseInt(e.substring(3,5),16)+.114*parseInt(e.substring(5,7),16)}return t>186?"#000000":"#ffffff"},scale(e){const t=e.length;return 1===t?"scale(2.2)":2===t?"scale(1.3)":3===t?"scale(0.9)":4===t?"scale(1)":5===t?"scale(0.9)":"scale(0.6)"},getText(e,t=!1){if(e){let s=e.replace("txt:","");return this.mini?s.slice(0,1):(s=s.slice(0,5),t&&4===s.length&&(s=s.slice(0,2)+"<br/>"+s.slice(2,4)),s)}return e},getBg:e=>e||"#ffffff"}},l=["innerHTML"];var a=e(n,[["render",function(e,n,a,o,c,i){return t(),s("div",{class:"TextIcons",style:r({color:i.getTextColor(a.bgColor),background:i.getBg(a.bgColor)})},[f("div",{style:r([{transform:a.mini?"scale(1)":i.scale(i.getText(a.text))},{"text-align":"center"}]),innerHTML:i.getText(a.text,!0)},null,12,l)],4)}]]);export{a as T};
