(self.webpackChunkweb_tools=self.webpackChunkweb_tools||[]).push([[286],{7484:function(t){t.exports=function(){"use strict";var t=1e3,n=6e4,e=36e5,s="millisecond",r="second",i="minute",u="hour",o="day",a="week",c="month",h="quarter",d="year",f="date",l="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var n=["th","st","nd","rd"],e=t%100;return"["+t+(n[(e-20)%10]||n[e]||n[0])+"]"}},v=function(t,n,e){var s=String(t);return!s||s.length>=n?t:""+Array(n+1-s.length).join(e)+t},y={s:v,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),s=Math.floor(e/60),r=e%60;return(n<=0?"+":"-")+v(s,2,"0")+":"+v(r,2,"0")},m:function t(n,e){if(n.date()<e.date())return-t(e,n);var s=12*(e.year()-n.year())+(e.month()-n.month()),r=n.clone().add(s,c),i=e-r<0,u=n.clone().add(s+(i?-1:1),c);return+(-(s+(e-r)/(i?r-u:u-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:a,d:o,D:f,h:u,m:i,s:r,ms:s,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",p={};p[g]=M;var D=function(t){return t instanceof b},S=function t(n,e,s){var r;if(!n)return g;if("string"==typeof n){var i=n.toLowerCase();p[i]&&(r=i),e&&(p[i]=e,r=i);var u=n.split("-");if(!r&&u.length>1)return t(u[0])}else{var o=n.name;p[o]=n,r=o}return!s&&r&&(g=r),r||!s&&g},Y=function(t,n){if(D(t))return t.clone();var e="object"==typeof n?n:{};return e.date=t,e.args=arguments,new b(e)},w=y;w.l=S,w.i=D,w.w=function(t,n){return Y(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var b=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var v=M.prototype;return v.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(w.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var s=n.match(m);if(s){var r=s[2]-1||0,i=(s[7]||"0").substring(0,3);return e?new Date(Date.UTC(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,i)):new Date(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,i)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return w},v.isValid=function(){return!(this.$d.toString()===l)},v.isSame=function(t,n){var e=Y(t);return this.startOf(n)<=e&&e<=this.endOf(n)},v.isAfter=function(t,n){return Y(t)<this.startOf(n)},v.isBefore=function(t,n){return this.endOf(n)<Y(t)},v.$g=function(t,n,e){return w.u(t)?this[n]:this.set(e,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,n){var e=this,s=!!w.u(n)||n,h=w.p(t),l=function(t,n){var r=w.w(e.$u?Date.UTC(e.$y,n,t):new Date(e.$y,n,t),e);return s?r:r.endOf(o)},m=function(t,n){return w.w(e.toDate()[t].apply(e.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(n)),e)},$=this.$W,M=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(h){case d:return s?l(1,0):l(31,11);case c:return s?l(1,M):l(0,M+1);case a:var g=this.$locale().weekStart||0,p=($<g?$+7:$)-g;return l(s?v-p:v+(6-p),M);case o:case f:return m(y+"Hours",0);case u:return m(y+"Minutes",1);case i:return m(y+"Seconds",2);case r:return m(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,n){var e,a=w.p(t),h="set"+(this.$u?"UTC":""),l=(e={},e[o]=h+"Date",e[f]=h+"Date",e[c]=h+"Month",e[d]=h+"FullYear",e[u]=h+"Hours",e[i]=h+"Minutes",e[r]=h+"Seconds",e[s]=h+"Milliseconds",e)[a],m=a===o?this.$D+(n-this.$W):n;if(a===c||a===d){var $=this.clone().set(f,1);$.$d[l](m),$.init(),this.$d=$.set(f,Math.min(this.$D,$.daysInMonth())).$d}else l&&this.$d[l](m);return this.init(),this},v.set=function(t,n){return this.clone().$set(t,n)},v.get=function(t){return this[w.p(t)]()},v.add=function(s,h){var f,l=this;s=Number(s);var m=w.p(h),$=function(t){var n=Y(l);return w.w(n.date(n.date()+Math.round(t*s)),l)};if(m===c)return this.set(c,this.$M+s);if(m===d)return this.set(d,this.$y+s);if(m===o)return $(1);if(m===a)return $(7);var M=(f={},f[i]=n,f[u]=e,f[r]=t,f)[m]||1,v=this.$d.getTime()+s*M;return w.w(v,this)},v.subtract=function(t,n){return this.add(-1*t,n)},v.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||l;var s=t||"YYYY-MM-DDTHH:mm:ssZ",r=w.z(this),i=this.$H,u=this.$m,o=this.$M,a=e.weekdays,c=e.months,h=function(t,e,r,i){return t&&(t[e]||t(n,s))||r[e].slice(0,i)},d=function(t){return w.s(i%12||12,t,"0")},f=e.meridiem||function(t,n,e){var s=t<12?"AM":"PM";return e?s.toLowerCase():s},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:w.s(o+1,2,"0"),MMM:h(e.monthsShort,o,c,3),MMMM:h(c,o),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:h(e.weekdaysMin,this.$W,a,2),ddd:h(e.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(i),HH:w.s(i,2,"0"),h:d(1),hh:d(2),a:f(i,u,!0),A:f(i,u,!1),m:String(u),mm:w.s(u,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:r};return s.replace($,(function(t,n){return n||m[t]||r.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(s,f,l){var m,$=w.p(f),M=Y(s),v=(M.utcOffset()-this.utcOffset())*n,y=this-M,g=w.m(this,M);return g=(m={},m[d]=g/12,m[c]=g,m[h]=g/3,m[a]=(y-v)/6048e5,m[o]=(y-v)/864e5,m[u]=y/e,m[i]=y/n,m[r]=y/t,m)[$]||y,l?g:w.a(g)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return p[this.$L]},v.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),s=S(t,n,!0);return s&&(e.$L=s),e},v.clone=function(){return w.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},M}(),k=b.prototype;return Y.prototype=k,[["$ms",s],["$s",r],["$m",i],["$H",u],["$W",o],["$M",c],["$y",d],["$D",f]].forEach((function(t){k[t[1]]=function(n){return this.$g(n,t[0],t[1])}})),Y.extend=function(t,n){return t.$i||(t(n,b,Y),t.$i=!0),Y},Y.locale=S,Y.isDayjs=D,Y.unix=function(t){return Y(1e3*t)},Y.en=p[g],Y.Ls=p,Y.p={},Y}()},1646:function(t){t.exports=function(){"use strict";var t,n,e=1e3,s=6e4,r=36e5,i=864e5,u=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,o=31536e6,a=2592e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,h={years:o,months:a,days:i,hours:r,minutes:s,seconds:e,milliseconds:1,weeks:6048e5},d=function(t){return t instanceof y},f=function(t,n,e){return new y(t,e,n.$l)},l=function(t){return n.p(t)+"s"},m=function(t){return t<0},$=function(t){return m(t)?Math.ceil(t):Math.floor(t)},M=function(t){return Math.abs(t)},v=function(t,n){return t?m(t)?{negative:!0,format:""+M(t)+n}:{negative:!1,format:""+t+n}:{negative:!1,format:""}},y=function(){function m(t,n,e){var s=this;if(this.$d={},this.$l=e,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),n)return f(t*h[l(n)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(n){s.$d[l(n)]=t[n]})),this.calMilliseconds(),this;if("string"==typeof t){var r=t.match(c);if(r){var i=r.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=i[0],this.$d.months=i[1],this.$d.weeks=i[2],this.$d.days=i[3],this.$d.hours=i[4],this.$d.minutes=i[5],this.$d.seconds=i[6],this.calMilliseconds(),this}}return this}var M=m.prototype;return M.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(n,e){return n+(t.$d[e]||0)*h[e]}),0)},M.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=$(t/o),t%=o,this.$d.months=$(t/a),t%=a,this.$d.days=$(t/i),t%=i,this.$d.hours=$(t/r),t%=r,this.$d.minutes=$(t/s),t%=s,this.$d.seconds=$(t/e),t%=e,this.$d.milliseconds=t},M.toISOString=function(){var t=v(this.$d.years,"Y"),n=v(this.$d.months,"M"),e=+this.$d.days||0;this.$d.weeks&&(e+=7*this.$d.weeks);var s=v(e,"D"),r=v(this.$d.hours,"H"),i=v(this.$d.minutes,"M"),u=this.$d.seconds||0;this.$d.milliseconds&&(u+=this.$d.milliseconds/1e3);var o=v(u,"S"),a=t.negative||n.negative||s.negative||r.negative||i.negative||o.negative,c=r.format||i.format||o.format?"T":"",h=(a?"-":"")+"P"+t.format+n.format+s.format+c+r.format+i.format+o.format;return"P"===h||"-P"===h?"P0D":h},M.toJSON=function(){return this.toISOString()},M.format=function(t){var e=t||"YYYY-MM-DDTHH:mm:ss",s={Y:this.$d.years,YY:n.s(this.$d.years,2,"0"),YYYY:n.s(this.$d.years,4,"0"),M:this.$d.months,MM:n.s(this.$d.months,2,"0"),D:this.$d.days,DD:n.s(this.$d.days,2,"0"),H:this.$d.hours,HH:n.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,"0"),SSS:n.s(this.$d.milliseconds,3,"0")};return e.replace(u,(function(t,n){return n||String(s[t])}))},M.as=function(t){return this.$ms/h[l(t)]},M.get=function(t){var n=this.$ms,e=l(t);return"milliseconds"===e?n%=1e3:n="weeks"===e?$(n/h[e]):this.$d[e],0===n?0:n},M.add=function(t,n,e){var s;return s=n?t*h[l(n)]:d(t)?t.$ms:f(t,this).$ms,f(this.$ms+s*(e?-1:1),this)},M.subtract=function(t,n){return this.add(t,n,!0)},M.locale=function(t){var n=this.clone();return n.$l=t,n},M.clone=function(){return f(this.$ms,this)},M.humanize=function(n){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!n)},M.milliseconds=function(){return this.get("milliseconds")},M.asMilliseconds=function(){return this.as("milliseconds")},M.seconds=function(){return this.get("seconds")},M.asSeconds=function(){return this.as("seconds")},M.minutes=function(){return this.get("minutes")},M.asMinutes=function(){return this.as("minutes")},M.hours=function(){return this.get("hours")},M.asHours=function(){return this.as("hours")},M.days=function(){return this.get("days")},M.asDays=function(){return this.as("days")},M.weeks=function(){return this.get("weeks")},M.asWeeks=function(){return this.as("weeks")},M.months=function(){return this.get("months")},M.asMonths=function(){return this.as("months")},M.years=function(){return this.get("years")},M.asYears=function(){return this.as("years")},m}();return function(e,s,r){t=r,n=r().$utils(),r.duration=function(t,n){var e=r.locale();return f(t,{$l:e},n)},r.isDuration=d;var i=s.prototype.add,u=s.prototype.subtract;s.prototype.add=function(t,n){return d(t)&&(t=t.asMilliseconds()),i.bind(this)(t,n)},s.prototype.subtract=function(t,n){return d(t)&&(t=t.asMilliseconds()),u.bind(this)(t,n)}}}()},6176:function(t){t.exports=function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(n,e,s){var r=e.prototype,i=r.format;s.en.formats=t,r.format=function(n){void 0===n&&(n="YYYY-MM-DDTHH:mm:ssZ");var e=this.$locale().formats,s=function(n,e){return n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(n,s,r){var i=r&&r.toUpperCase();return s||e[r]||t[r]||e[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,n,e){return n||e.slice(1)}))}))}(n,void 0===e?{}:e);return i.call(this,s)}}}()},9020:function(t,n,e){"use strict";e.r(n),e.d(n,{Head:function(){return d}});var s=e(7294),r=e(7484),i=e.n(r),u=e(1646),o=e.n(u),a=e(6176),c=e.n(a);i().extend(o()),i().extend(c());const h=t=>i().duration(t).format("HH:mm:ss");n.default=()=>{const[t,n]=s.useState(!1),[e,r]=s.useState(!0),[u,o]=s.useState(0);s.useEffect((()=>{let n=null;return t&&!1===e?n=setInterval((()=>{o((t=>t+1e3))}),1e3):n&&clearInterval(n),()=>{n&&clearInterval(n)}}),[t,e]);const a=288e5-u;return s.createElement("main",null,s.createElement("h1",null,"Time Tracker"),s.createElement("p",null,"Time tracked so far: ",h(u)),s.createElement("p",null,"Time remaining: ",h(a)),s.createElement("p",null,"Finish time: ",i()().add(a,"millisecond").format("LTS")),t?s.createElement(s.Fragment,null,s.createElement("button",{onClick:()=>{n(!1),o(0)}},"Reset"),s.createElement("button",{onClick:()=>{r(!e)}},e?"Resume":"Pause")):s.createElement("button",{onClick:()=>{n(!0),r(!1)}},"Start"))};const d=()=>s.createElement("title",null,"Time Tracker")}}]);
//# sourceMappingURL=component---src-pages-time-tracker-index-tsx-88c20c9527ddee7047be.js.map