"use strict";(self.webpackChunkweb_tools=self.webpackChunkweb_tools||[]).push([[87],{6186:function(e,t,o){o.d(t,{Z:function(){return A}});var a=o(3366),n=o(7462),r=o(7294),i=o(6010),l=o(4780),s=o(1796),c=o(9602),d=o(6122),p=o(8216),u=o(4680),v=o(1588),h=o(4867);function m(e){return(0,h.Z)("MuiAlert",e)}var g=(0,v.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),x=o(6867),f=o(5949),S=o(5893),b=(0,f.Z)((0,S.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),Z=(0,f.Z)((0,S.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),z=(0,f.Z)((0,S.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),y=(0,f.Z)((0,S.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),C=(0,f.Z)((0,S.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");const w=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],$=(0,c.ZP)(u.Z,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${(0,p.Z)(o.color||o.severity)}`]]}})((({theme:e,ownerState:t})=>{const o="light"===e.palette.mode?s._j:s.$n,a="light"===e.palette.mode?s.$n:s._j,r=t.color||t.severity;return(0,n.Z)({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},r&&"standard"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${r}Color`]:o(e.palette[r].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${r}StandardBg`]:a(e.palette[r].light,.9),[`& .${g.icon}`]:e.vars?{color:e.vars.palette.Alert[`${r}IconColor`]}:{color:e.palette[r].main}},r&&"outlined"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${r}Color`]:o(e.palette[r].light,.6),border:`1px solid ${(e.vars||e).palette[r].light}`,[`& .${g.icon}`]:e.vars?{color:e.vars.palette.Alert[`${r}IconColor`]}:{color:e.palette[r].main}},r&&"filled"===t.variant&&(0,n.Z)({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${r}FilledColor`],backgroundColor:e.vars.palette.Alert[`${r}FilledBg`]}:{backgroundColor:"dark"===e.palette.mode?e.palette[r].dark:e.palette[r].main,color:e.palette.getContrastText(e.palette[r].main)}))})),I=(0,c.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),M=(0,c.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),R=(0,c.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),k={success:(0,S.jsx)(b,{fontSize:"inherit"}),warning:(0,S.jsx)(Z,{fontSize:"inherit"}),error:(0,S.jsx)(z,{fontSize:"inherit"}),info:(0,S.jsx)(y,{fontSize:"inherit"})};var A=r.forwardRef((function(e,t){var o,r,s,c,u,v;const h=(0,d.Z)({props:e,name:"MuiAlert"}),{action:g,children:f,className:b,closeText:Z="Close",color:z,components:y={},componentsProps:A={},icon:E,iconMapping:j=k,onClose:L,role:N="alert",severity:W="success",slotProps:P={},slots:O={},variant:B="standard"}=h,F=(0,a.Z)(h,w),T=(0,n.Z)({},h,{color:z,severity:W,variant:B}),V=(e=>{const{variant:t,color:o,severity:a,classes:n}=e,r={root:["root",`${t}${(0,p.Z)(o||a)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return(0,l.Z)(r,m,n)})(T),H=null!=(o=null!=(r=O.closeButton)?r:y.CloseButton)?o:x.Z,J=null!=(s=null!=(c=O.closeIcon)?c:y.CloseIcon)?s:C,q=null!=(u=P.closeButton)?u:A.closeButton,_=null!=(v=P.closeIcon)?v:A.closeIcon;return(0,S.jsxs)($,(0,n.Z)({role:N,elevation:0,ownerState:T,className:(0,i.Z)(V.root,b),ref:t},F,{children:[!1!==E?(0,S.jsx)(I,{ownerState:T,className:V.icon,children:E||j[W]||k[W]}):null,(0,S.jsx)(M,{ownerState:T,className:V.message,children:f}),null!=g?(0,S.jsx)(R,{ownerState:T,className:V.action,children:g}):null,null==g&&L?(0,S.jsx)(R,{ownerState:T,className:V.action,children:(0,S.jsx)(H,(0,n.Z)({size:"small","aria-label":Z,title:Z,color:"inherit",onClick:L},q,{children:(0,S.jsx)(J,(0,n.Z)({fontSize:"small"},_))}))}):null]}))}))},2642:function(e,t,o){o.d(t,{Z:function(){return w}});var a=o(3366),n=o(7462),r=o(7294),i=o(6010),l=o(7925),s=o(4780),c=o(1796),d=o(9602),p=o(6122),u=o(5793),v=o(8216),h=o(1588),m=o(4867);function g(e){return(0,m.Z)("MuiButton",e)}var x=(0,h.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),f=o(8363),S=o(5893);const b=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],Z=e=>(0,n.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),z=(0,d.ZP)(u.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${(0,v.Z)(o.color)}`],t[`size${(0,v.Z)(o.size)}`],t[`${o.variant}Size${(0,v.Z)(o.size)}`],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>{var o,a;return(0,n.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,n.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,n.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${x.focusVisible}`]:(0,n.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${x.disabled}`]:(0,n.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,c.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(o=(a=e.palette).getContrastText)?void 0:o.call(a,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${x.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${x.disabled}`]:{boxShadow:"none"}})),y=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.startIcon,t[`iconSize${(0,v.Z)(o.size)}`]]}})((({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},Z(e)))),C=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.endIcon,t[`iconSize${(0,v.Z)(o.size)}`]]}})((({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},Z(e))));var w=r.forwardRef((function(e,t){const o=r.useContext(f.Z),c=(0,l.Z)(o,e),d=(0,p.Z)({props:c,name:"MuiButton"}),{children:u,color:h="primary",component:m="button",className:x,disabled:Z=!1,disableElevation:w=!1,disableFocusRipple:$=!1,endIcon:I,focusVisibleClassName:M,fullWidth:R=!1,size:k="medium",startIcon:A,type:E,variant:j="text"}=d,L=(0,a.Z)(d,b),N=(0,n.Z)({},d,{color:h,component:m,disabled:Z,disableElevation:w,disableFocusRipple:$,fullWidth:R,size:k,type:E,variant:j}),W=(e=>{const{color:t,disableElevation:o,fullWidth:a,size:r,variant:i,classes:l}=e,c={root:["root",i,`${i}${(0,v.Z)(t)}`,`size${(0,v.Z)(r)}`,`${i}Size${(0,v.Z)(r)}`,"inherit"===t&&"colorInherit",o&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,v.Z)(r)}`],endIcon:["endIcon",`iconSize${(0,v.Z)(r)}`]},d=(0,s.Z)(c,g,l);return(0,n.Z)({},l,d)})(N),P=A&&(0,S.jsx)(y,{className:W.startIcon,ownerState:N,children:A}),O=I&&(0,S.jsx)(C,{className:W.endIcon,ownerState:N,children:I});return(0,S.jsxs)(z,(0,n.Z)({ownerState:N,className:(0,i.Z)(o.className,W.root,x),component:m,disabled:Z,focusRipple:!$,focusVisibleClassName:(0,i.Z)(W.focusVisible,M),ref:t,type:E},L,{classes:W,children:[P,u,O]}))}))},8363:function(e,t,o){const a=o(7294).createContext({});t.Z=a},7994:function(e,t,o){o.d(t,{w:function(){return r}});var a=o(9602),n=o(1508);const r=(0,a.ZP)(n.Z)({display:"flex",flexDirection:"column",alignItems:"center"})},4826:function(e,t,o){o.r(t),o.d(t,{Head:function(){return c}});var a=o(7294),n=o(4309),r=o(3254),i=o(2642),l=o(6186),s=o(7994);t.default=()=>{const[e,t]=a.useState(""),[o,c]=a.useState("");return a.createElement(n.X,{heading:"JSON Formatter"},a.createElement(s.w,{gap:2},a.createElement(r.Z,{fullWidth:!0,multiline:!0,minRows:5,maxRows:20,value:e,onChange:e=>t(e.target.value)}),a.createElement(i.Z,{variant:"outlined",onClick:()=>{try{t(JSON.stringify(JSON.parse(e),null,4)),c("")}catch(o){if(!(o instanceof Error))throw o;c(o.message)}}},"Format"),o?a.createElement(l.Z,{color:"error"},o):a.createElement(l.Z,{color:"success"},"Valid JSON")))};const c=()=>a.createElement(n.z,{title:"JSON Formatter"})}}]);
//# sourceMappingURL=component---src-pages-json-formatter-tsx-cfd2fe1ff7fea0a20fe3.js.map