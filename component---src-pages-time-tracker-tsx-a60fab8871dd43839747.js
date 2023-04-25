(self.webpackChunkweb_tools=self.webpackChunkweb_tools||[]).push([[21],{1646:function(e){e.exports=function(){"use strict";var e,t,n=1e3,r=6e4,o=36e5,s=864e5,i=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,l=2592e6,d=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,c={years:a,months:l,days:s,hours:o,minutes:r,seconds:n,milliseconds:1,weeks:6048e5},u=function(e){return e instanceof x},m=function(e,t,n){return new x(e,n,t.$l)},p=function(e){return t.p(e)+"s"},h=function(e){return e<0},f=function(e){return h(e)?Math.ceil(e):Math.floor(e)},v=function(e){return Math.abs(e)},g=function(e,t){return e?h(e)?{negative:!0,format:""+v(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},x=function(){function h(e,t,n){var r=this;if(this.$d={},this.$l=n,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return m(e*c[p(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach((function(t){r.$d[p(t)]=e[t]})),this.calMilliseconds(),this;if("string"==typeof e){var o=e.match(d);if(o){var s=o.slice(2).map((function(e){return null!=e?Number(e):0}));return this.$d.years=s[0],this.$d.months=s[1],this.$d.weeks=s[2],this.$d.days=s[3],this.$d.hours=s[4],this.$d.minutes=s[5],this.$d.seconds=s[6],this.calMilliseconds(),this}}return this}var v=h.prototype;return v.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,n){return t+(e.$d[n]||0)*c[n]}),0)},v.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=f(e/a),e%=a,this.$d.months=f(e/l),e%=l,this.$d.days=f(e/s),e%=s,this.$d.hours=f(e/o),e%=o,this.$d.minutes=f(e/r),e%=r,this.$d.seconds=f(e/n),e%=n,this.$d.milliseconds=e},v.toISOString=function(){var e=g(this.$d.years,"Y"),t=g(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var r=g(n,"D"),o=g(this.$d.hours,"H"),s=g(this.$d.minutes,"M"),i=this.$d.seconds||0;this.$d.milliseconds&&(i+=this.$d.milliseconds/1e3);var a=g(i,"S"),l=e.negative||t.negative||r.negative||o.negative||s.negative||a.negative,d=o.format||s.format||a.format?"T":"",c=(l?"-":"")+"P"+e.format+t.format+r.format+d+o.format+s.format+a.format;return"P"===c||"-P"===c?"P0D":c},v.toJSON=function(){return this.toISOString()},v.format=function(e){var n=e||"YYYY-MM-DDTHH:mm:ss",r={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return n.replace(i,(function(e,t){return t||String(r[e])}))},v.as=function(e){return this.$ms/c[p(e)]},v.get=function(e){var t=this.$ms,n=p(e);return"milliseconds"===n?t%=1e3:t="weeks"===n?f(t/c[n]):this.$d[n],0===t?0:t},v.add=function(e,t,n){var r;return r=t?e*c[p(t)]:u(e)?e.$ms:m(e,this).$ms,m(this.$ms+r*(n?-1:1),this)},v.subtract=function(e,t){return this.add(e,t,!0)},v.locale=function(e){var t=this.clone();return t.$l=e,t},v.clone=function(){return m(this.$ms,this)},v.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},h}();return function(n,r,o){e=o,t=o().$utils(),o.duration=function(e,t){var n=o.locale();return m(e,{$l:n},t)},o.isDuration=u;var s=r.prototype.add,i=r.prototype.subtract;r.prototype.add=function(e,t){return u(e)&&(e=e.asMilliseconds()),s.bind(this)(e,t)},r.prototype.subtract=function(e,t){return u(e)&&(e=e.asMilliseconds()),i.bind(this)(e,t)}}}()},6176:function(e){e.exports=function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(t,n,r){var o=n.prototype,s=o.format;r.en.formats=e,o.format=function(t){void 0===t&&(t="YYYY-MM-DDTHH:mm:ssZ");var n=this.$locale().formats,r=function(t,n){return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,o){var s=o&&o.toUpperCase();return r||n[o]||e[o]||n[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))}(t,void 0===n?{}:n);return s.call(this,r)}}}()},9915:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return Ie},default:function(){return Le}});var r=n(5785),o=n(7294),s=n(7484),i=n.n(s),a=n(1646),l=n.n(a),d=n(6176),c=n.n(d),u=n(4309),m=n(2658),p=n(8044),h=n(2642),f=n(3366),v=n(7462),g=(n(6607),n(6010)),x=n(4780),Z=n(9602),b=n(6122),y=n(8052),$=n(6067),M=n(577),S=n(2734),w=n(1705),E=n(1588),C=n(4867);function A(e){return(0,C.Z)("MuiCollapse",e)}(0,E.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var R=n(5893);const k=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],j=(0,Z.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.orientation],"entered"===n.state&&t.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&t.hidden]}})((({theme:e,ownerState:t})=>(0,v.Z)({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===t.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===t.state&&(0,v.Z)({height:"auto",overflow:"visible"},"horizontal"===t.orientation&&{width:"auto"}),"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&{visibility:"hidden"}))),L=(0,Z.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})((({ownerState:e})=>(0,v.Z)({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),I=(0,Z.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})((({ownerState:e})=>(0,v.Z)({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),z=o.forwardRef((function(e,t){const n=(0,b.Z)({props:e,name:"MuiCollapse"}),{addEndListener:r,children:s,className:i,collapsedSize:a="0px",component:l,easing:d,in:c,onEnter:u,onEntered:m,onEntering:p,onExit:h,onExited:Z,onExiting:E,orientation:C="vertical",style:z,timeout:Y=$.x9.standard,TransitionComponent:D=y.ZP}=n,N=(0,f.Z)(n,k),T=(0,v.Z)({},n,{orientation:C,collapsedSize:a}),P=(e=>{const{orientation:t,classes:n}=e,r={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return(0,x.Z)(r,A,n)})(T),H=(0,S.Z)(),W=o.useRef(),G=o.useRef(null),V=o.useRef(),B="number"==typeof a?`${a}px`:a,O="horizontal"===C,F=O?"width":"height";o.useEffect((()=>()=>{clearTimeout(W.current)}),[]);const q=o.useRef(null),_=(0,w.Z)(t,q),J=e=>t=>{if(e){const n=q.current;void 0===t?e(n):e(n,t)}},U=()=>G.current?G.current[O?"clientWidth":"clientHeight"]:0,X=J(((e,t)=>{G.current&&O&&(G.current.style.position="absolute"),e.style[F]=B,u&&u(e,t)})),K=J(((e,t)=>{const n=U();G.current&&O&&(G.current.style.position="");const{duration:r,easing:o}=(0,M.C)({style:z,timeout:Y,easing:d},{mode:"enter"});if("auto"===Y){const t=H.transitions.getAutoHeightDuration(n);e.style.transitionDuration=`${t}ms`,V.current=t}else e.style.transitionDuration="string"==typeof r?r:`${r}ms`;e.style[F]=`${n}px`,e.style.transitionTimingFunction=o,p&&p(e,t)})),Q=J(((e,t)=>{e.style[F]="auto",m&&m(e,t)})),ee=J((e=>{e.style[F]=`${U()}px`,h&&h(e)})),te=J(Z),ne=J((e=>{const t=U(),{duration:n,easing:r}=(0,M.C)({style:z,timeout:Y,easing:d},{mode:"exit"});if("auto"===Y){const n=H.transitions.getAutoHeightDuration(t);e.style.transitionDuration=`${n}ms`,V.current=n}else e.style.transitionDuration="string"==typeof n?n:`${n}ms`;e.style[F]=B,e.style.transitionTimingFunction=r,E&&E(e)}));return(0,R.jsx)(D,(0,v.Z)({in:c,onEnter:X,onEntered:Q,onEntering:K,onExit:ee,onExited:te,onExiting:ne,addEndListener:e=>{"auto"===Y&&(W.current=setTimeout(e,V.current||0)),r&&r(q.current,e)},nodeRef:q,timeout:"auto"===Y?null:Y},N,{children:(e,t)=>(0,R.jsx)(j,(0,v.Z)({as:l,className:(0,g.Z)(P.root,i,{entered:P.entered,exited:!c&&"0px"===B&&P.hidden}[e]),style:(0,v.Z)({[O?"minWidth":"minHeight"]:B},z),ownerState:(0,v.Z)({},T,{state:e}),ref:_},t,{children:(0,R.jsx)(L,{ownerState:(0,v.Z)({},T,{state:e}),className:P.wrapper,ref:G,children:(0,R.jsx)(I,{ownerState:(0,v.Z)({},T,{state:e}),className:P.wrapperInner,children:s})})}))}))}));z.muiSupportAuto=!0;var Y=z,D=n(4680);var N=o.createContext({}),T=n(2893);function P(e){return(0,C.Z)("MuiAccordion",e)}var H=(0,E.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]);const W=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],G=(0,Z.ZP)(D.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${H.region}`]:t.region},t.root,!n.square&&t.rounded,!n.disableGutters&&t.gutters]}})((({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],t),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${H.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${H.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}}),(({theme:e,ownerState:t})=>(0,v.Z)({},!t.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!t.disableGutters&&{[`&.${H.expanded}`]:{margin:"16px 0"}})));var V=o.forwardRef((function(e,t){const n=(0,b.Z)({props:e,name:"MuiAccordion"}),{children:r,className:s,defaultExpanded:i=!1,disabled:a=!1,disableGutters:l=!1,expanded:d,onChange:c,square:u=!1,TransitionComponent:m=Y,TransitionProps:p}=n,h=(0,f.Z)(n,W),[Z,y]=(0,T.Z)({controlled:d,default:i,name:"Accordion",state:"expanded"}),$=o.useCallback((e=>{y(!Z),c&&c(e,!Z)}),[Z,c,y]),[M,...S]=o.Children.toArray(r),w=o.useMemo((()=>({expanded:Z,disabled:a,disableGutters:l,toggle:$})),[Z,a,l,$]),E=(0,v.Z)({},n,{square:u,disabled:a,disableGutters:l,expanded:Z}),C=(e=>{const{classes:t,square:n,expanded:r,disabled:o,disableGutters:s}=e,i={root:["root",!n&&"rounded",r&&"expanded",o&&"disabled",!s&&"gutters"],region:["region"]};return(0,x.Z)(i,P,t)})(E);return(0,R.jsxs)(G,(0,v.Z)({className:(0,g.Z)(C.root,s),ref:t,ownerState:E,square:u},h,{children:[(0,R.jsx)(N.Provider,{value:w,children:M}),(0,R.jsx)(m,(0,v.Z)({in:Z,timeout:"auto"},p,{children:(0,R.jsx)("div",{"aria-labelledby":M.props.id,id:M.props["aria-controls"],role:"region",className:C.region,children:S})}))]}))})),B=n(5793);function O(e){return(0,C.Z)("MuiAccordionSummary",e)}var F=(0,E.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]);const q=["children","className","expandIcon","focusVisibleClassName","onClick"],_=(0,Z.ZP)(B.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e,ownerState:t})=>{const n={duration:e.transitions.duration.shortest};return(0,v.Z)({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],n),[`&.${F.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${F.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${F.disabled})`]:{cursor:"pointer"}},!t.disableGutters&&{[`&.${F.expanded}`]:{minHeight:64}})})),J=(0,Z.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})((({theme:e,ownerState:t})=>(0,v.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!t.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${F.expanded}`]:{margin:"20px 0"}}))),U=(0,Z.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})((({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${F.expanded}`]:{transform:"rotate(180deg)"}})));var X=o.forwardRef((function(e,t){const n=(0,b.Z)({props:e,name:"MuiAccordionSummary"}),{children:r,className:s,expandIcon:i,focusVisibleClassName:a,onClick:l}=n,d=(0,f.Z)(n,q),{disabled:c=!1,disableGutters:u,expanded:m,toggle:p}=o.useContext(N),h=(0,v.Z)({},n,{expanded:m,disabled:c,disableGutters:u}),Z=(e=>{const{classes:t,expanded:n,disabled:r,disableGutters:o}=e,s={root:["root",n&&"expanded",r&&"disabled",!o&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!o&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]};return(0,x.Z)(s,O,t)})(h);return(0,R.jsxs)(_,(0,v.Z)({focusRipple:!1,disableRipple:!0,disabled:c,component:"div","aria-expanded":m,className:(0,g.Z)(Z.root,s),focusVisibleClassName:(0,g.Z)(Z.focusVisible,a),onClick:e=>{p&&p(e),l&&l(e)},ref:t,ownerState:h},d,{children:[(0,R.jsx)(J,{className:Z.content,ownerState:h,children:r}),i&&(0,R.jsx)(U,{className:Z.expandIconWrapper,ownerState:h,children:i})]}))}));function K(e){return(0,C.Z)("MuiAccordionDetails",e)}(0,E.Z)("MuiAccordionDetails",["root"]);const Q=["className"],ee=(0,Z.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({padding:e.spacing(1,2,2)})));var te=o.forwardRef((function(e,t){const n=(0,b.Z)({props:e,name:"MuiAccordionDetails"}),{className:r}=n,o=(0,f.Z)(n,Q),s=n,i=(e=>{const{classes:t}=e;return(0,x.Z)({root:["root"]},K,t)})(s);return(0,R.jsx)(ee,(0,v.Z)({className:(0,g.Z)(i.root,r),ref:t,ownerState:s},o))})),ne=n(1508),re=n(5949),oe=(0,re.Z)((0,R.jsx)("path",{d:"M8 5v14l11-7z"}),"PlayArrow"),se=(0,re.Z)((0,R.jsx)("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"}),"Pause"),ie=(0,re.Z)((0,R.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),ae=(0,re.Z)((0,R.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit"),le=n(3671),de=(0,re.Z)((0,R.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore"),ce=n(3254),ue=n(1796),me=n(8216);function pe(e){return(0,C.Z)("MuiAlert",e)}var he=(0,E.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),fe=n(6867),ve=(0,re.Z)((0,R.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),ge=(0,re.Z)((0,R.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),xe=(0,re.Z)((0,R.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),Ze=(0,re.Z)((0,R.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),be=(0,re.Z)((0,R.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");const ye=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],$e=(0,Z.ZP)(D.Z,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${(0,me.Z)(n.color||n.severity)}`]]}})((({theme:e,ownerState:t})=>{const n="light"===e.palette.mode?ue._j:ue.$n,r="light"===e.palette.mode?ue.$n:ue._j,o=t.color||t.severity;return(0,v.Z)({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},o&&"standard"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${o}Color`]:n(e.palette[o].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${o}StandardBg`]:r(e.palette[o].light,.9),[`& .${he.icon}`]:e.vars?{color:e.vars.palette.Alert[`${o}IconColor`]}:{color:e.palette[o].main}},o&&"outlined"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${o}Color`]:n(e.palette[o].light,.6),border:`1px solid ${(e.vars||e).palette[o].light}`,[`& .${he.icon}`]:e.vars?{color:e.vars.palette.Alert[`${o}IconColor`]}:{color:e.palette[o].main}},o&&"filled"===t.variant&&(0,v.Z)({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${o}FilledColor`],backgroundColor:e.vars.palette.Alert[`${o}FilledBg`]}:{backgroundColor:"dark"===e.palette.mode?e.palette[o].dark:e.palette[o].main,color:e.palette.getContrastText(e.palette[o].main)}))})),Me=(0,Z.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),Se=(0,Z.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),we=(0,Z.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),Ee={success:(0,R.jsx)(ve,{fontSize:"inherit"}),warning:(0,R.jsx)(ge,{fontSize:"inherit"}),error:(0,R.jsx)(xe,{fontSize:"inherit"}),info:(0,R.jsx)(Ze,{fontSize:"inherit"})};var Ce=o.forwardRef((function(e,t){var n,r,o,s,i,a;const l=(0,b.Z)({props:e,name:"MuiAlert"}),{action:d,children:c,className:u,closeText:m="Close",color:p,components:h={},componentsProps:Z={},icon:y,iconMapping:$=Ee,onClose:M,role:S="alert",severity:w="success",slotProps:E={},slots:C={},variant:A="standard"}=l,k=(0,f.Z)(l,ye),j=(0,v.Z)({},l,{color:p,severity:w,variant:A}),L=(e=>{const{variant:t,color:n,severity:r,classes:o}=e,s={root:["root",`${t}${(0,me.Z)(n||r)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return(0,x.Z)(s,pe,o)})(j),I=null!=(n=null!=(r=C.closeButton)?r:h.CloseButton)?n:fe.Z,z=null!=(o=null!=(s=C.closeIcon)?s:h.CloseIcon)?o:be,Y=null!=(i=E.closeButton)?i:Z.closeButton,D=null!=(a=E.closeIcon)?a:Z.closeIcon;return(0,R.jsxs)($e,(0,v.Z)({role:S,elevation:0,ownerState:j,className:(0,g.Z)(L.root,u),ref:t},k,{children:[!1!==y?(0,R.jsx)(Me,{ownerState:j,className:L.icon,children:y||$[w]||Ee[w]}):null,(0,R.jsx)(Se,{ownerState:j,className:L.message,children:c}),null!=d?(0,R.jsx)(we,{ownerState:j,className:L.action,children:d}):null,null==d&&M?(0,R.jsx)(we,{ownerState:j,className:L.action,children:(0,R.jsx)(I,(0,v.Z)({size:"small","aria-label":m,title:m,color:"inherit",onClick:M},Y,{children:(0,R.jsx)(z,(0,v.Z)({fontSize:"small"},D))}))}):null]}))}));const Ae=e=>{let{onSave:t}=e;const[n,r]=o.useState(""),[s,i]=o.useState(""),[a,l]=o.useState("");return o.createElement(ne.Z,{display:"flex",flexDirection:"column",gap:2,alignItems:"center"},o.createElement(ne.Z,{display:"flex",gap:2},o.createElement(ce.Z,{sx:{width:"8rem"},label:"Hours",value:n,type:"number",error:!!a,onChange:e=>r(e.target.value)}),o.createElement(ce.Z,{sx:{width:"8rem"},label:"Minutes",value:s,type:"number",error:!!a,onChange:e=>i(e.target.value)}),o.createElement(h.Z,{variant:"outlined",onClick:()=>{const e=60*parseInt(n||"0",10)+parseInt(s||"0",10);isNaN(e)?l("One or more values is not a valid number"):(t(6e4*e),l(""))}},"Submit")),a?o.createElement(Ce,{severity:"error"},a):a)};var Re=n(9229),ke=n(7994);i().extend(l()),i().extend(c());const je=e=>{let{children:t,subtitle:n}=e;return o.createElement(ke.w,null,o.createElement(m.Z,{variant:"h4"},t),o.createElement(m.Z,null,n))};var Le=()=>{const[e,t]=o.useState(!1),[n,s]=o.useState(!0),[a,l]=o.useState(!1),[d,c]=o.useState([]),[f,v]=o.useState(Date.now()),[g,x]=o.useState(0);o.useEffect((()=>{const t=setInterval((()=>{const t=Date.now()-f;v((e=>e+t)),e&&!1===n&&x((e=>e+t))}),1e3);return()=>clearInterval(t)}));const Z=e=>c((t=>[].concat((0,r.Z)(t),[{action:e,timestamp:Date.now()}]))),b=288e5-g;return o.createElement(u.X,{heading:"Time Tracker"},o.createElement(ke.w,{gap:2},o.createElement(je,{subtitle:"Time tracked so far"},(0,Re.L)(g)),o.createElement(je,{subtitle:"Time remaining"},(0,Re.L)(b)),o.createElement(je,{subtitle:"Finish time"},i()(f).add(b,"millisecond").format("LTS")),e?o.createElement(p.Z,null,o.createElement(h.Z,{variant:"outlined",startIcon:n?o.createElement(oe,null):o.createElement(se,null),onClick:()=>{s(!n),Z(n?"Resume":"Pause")}},n?"Resume":"Pause"),o.createElement(h.Z,{variant:"outlined",startIcon:a?o.createElement(ie,null):o.createElement(ae,null),onClick:()=>l((e=>!e))},"Edit"),o.createElement(h.Z,{variant:"outlined",startIcon:o.createElement(le.Z,null),onClick:()=>{t(!1),x(0),c([])}},"Reset")):o.createElement(h.Z,{variant:"outlined",startIcon:o.createElement(oe,null),onClick:()=>{t(!0),s(!1),Z("Start")}},"Start"),a?o.createElement(Ae,{onSave:e=>{x((t=>t+e)),0!==e&&Z("Edit"),l(!1)}}):null,d.length>0?o.createElement(V,null,o.createElement(X,{expandIcon:o.createElement(de,null)},o.createElement(m.Z,{variant:"h6"},"History")),o.createElement(te,null,d.map((e=>o.createElement(ne.Z,{sx:{display:"flex",gap:2,marginBottom:e=>e.spacing(1),justifyContent:"space-between"}},o.createElement(ne.Z,null,e.action),o.createElement(ne.Z,null,i()(e.timestamp).format("LTS"))))))):null))};const Ie=()=>o.createElement(u.z,{title:"Time Tracker"})}}]);
//# sourceMappingURL=component---src-pages-time-tracker-tsx-a60fab8871dd43839747.js.map