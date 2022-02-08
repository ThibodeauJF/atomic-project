/**
 * @license
 *
 * Copyright 2022 Coveo Solutions Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *       http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var jh=Object.create;var bn=Object.defineProperty;var Lh=Object.getOwnPropertyDescriptor;var Bh=Object.getOwnPropertyNames;var Uh=Object.getPrototypeOf,$h=Object.prototype.hasOwnProperty;var Ll=e=>bn(e,"__esModule",{value:!0});var me=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Dc=(e,t)=>{Ll(e);for(var r in t)bn(e,r,{get:t[r],enumerable:!0});},M=(e,t,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Bh(t))!$h.call(e,a)&&a!=="default"&&bn(e,a,{get:()=>t[a],enumerable:!(r=Lh(t,a))||r.enumerable});return e},xe=e=>M(Ll(bn(e!=null?jh(Uh(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var Ul=me((oP,Bl)=>{Bl.exports=fetch;});var $l=me(Qo=>{var vn=Qo&&Qo.__assign||function(){return vn=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);}return e},vn.apply(this,arguments)};Object.defineProperty(Qo,"__esModule",{value:!0});var _h={delayFirstAttempt:!1,jitter:"none",maxDelay:1/0,numOfAttempts:10,retry:function(){return !0},startingDelay:100,timeMultiple:2};function zh(e){var t=vn(vn({},_h),e);return t.numOfAttempts<1&&(t.numOfAttempts=1),t}Qo.getSanitizedOptions=zh;});var _l=me(Vc=>{Object.defineProperty(Vc,"__esModule",{value:!0});function Hh(e){var t=Math.random()*e;return Math.round(t)}Vc.fullJitter=Hh;});var zl=me(Nc=>{Object.defineProperty(Nc,"__esModule",{value:!0});function Wh(e){return e}Nc.noJitter=Wh;});var Hl=me(Mc=>{Object.defineProperty(Mc,"__esModule",{value:!0});var Yh=_l(),Kh=zl();function Gh(e){switch(e.jitter){case"full":return Yh.fullJitter;case"none":default:return Kh.noJitter}}Mc.JitterFactory=Gh;});var jc=me(Qc=>{Object.defineProperty(Qc,"__esModule",{value:!0});var Jh=Hl(),Xh=function(){function e(t){this.options=t,this.attempt=0;}return e.prototype.apply=function(){var t=this;return new Promise(function(r){return setTimeout(r,t.jitteredDelay)})},e.prototype.setAttemptNumber=function(t){this.attempt=t;},Object.defineProperty(e.prototype,"jitteredDelay",{get:function(){var t=Jh.JitterFactory(this.options);return t(this.delay)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"delay",{get:function(){var t=this.options.startingDelay,r=this.options.timeMultiple,a=this.numOfDelayedAttempts,o=t*Math.pow(r,a);return Math.min(o,this.options.maxDelay)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"numOfDelayedAttempts",{get:function(){return this.attempt},enumerable:!0,configurable:!0}),e}();Qc.Delay=Xh;});var Wl=me(Nt=>{var Zh=Nt&&Nt.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,o){a.__proto__=o;}||function(a,o){for(var n in o)o.hasOwnProperty(n)&&(a[n]=o[n]);},e(t,r)};return function(t,r){e(t,r);function a(){this.constructor=t;}t.prototype=r===null?Object.create(r):(a.prototype=r.prototype,new a);}}(),ey=Nt&&Nt.__awaiter||function(e,t,r,a){function o(n){return n instanceof r?n:new r(function(i){i(n);})}return new(r||(r=Promise))(function(n,i){function s(d){try{c(a.next(d));}catch(l){i(l);}}function u(d){try{c(a.throw(d));}catch(l){i(l);}}function c(d){d.done?n(d.value):o(d.value).then(s,u);}c((a=a.apply(e,t||[])).next());})},ty=Nt&&Nt.__generator||function(e,t){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},a,o,n,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(c){return function(d){return u([c,d])}}function u(c){if(a)throw new TypeError("Generator is already executing.");for(;r;)try{if(a=1,o&&(n=c[0]&2?o.return:c[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,c[1])).done)return n;switch(o=0,n&&(c=[c[0]&2,n.value]),c[0]){case 0:case 1:n=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,o=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(n=r.trys,!(n=n.length>0&&n[n.length-1])&&(c[0]===6||c[0]===2)){r=0;continue}if(c[0]===3&&(!n||c[1]>n[0]&&c[1]<n[3])){r.label=c[1];break}if(c[0]===6&&r.label<n[1]){r.label=n[1],n=c;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(c);break}n[2]&&r.ops.pop(),r.trys.pop();continue}c=t.call(e,r);}catch(d){c=[6,d],o=0;}finally{a=n=0;}if(c[0]&5)throw c[1];return {value:c[0]?c[1]:void 0,done:!0}}};Object.defineProperty(Nt,"__esModule",{value:!0});var ry=jc(),ay=function(e){Zh(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.apply=function(){return ey(this,void 0,void 0,function(){return ty(this,function(r){return [2,this.isFirstAttempt?!0:e.prototype.apply.call(this)]})})},Object.defineProperty(t.prototype,"isFirstAttempt",{get:function(){return this.attempt===0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"numOfDelayedAttempts",{get:function(){return this.attempt-1},enumerable:!0,configurable:!0}),t}(ry.Delay);Nt.SkipFirstDelay=ay;});var Yl=me(jo=>{var oy=jo&&jo.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,o){a.__proto__=o;}||function(a,o){for(var n in o)o.hasOwnProperty(n)&&(a[n]=o[n]);},e(t,r)};return function(t,r){e(t,r);function a(){this.constructor=t;}t.prototype=r===null?Object.create(r):(a.prototype=r.prototype,new a);}}();Object.defineProperty(jo,"__esModule",{value:!0});var ny=jc(),iy=function(e){oy(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t}(ny.Delay);jo.AlwaysDelay=iy;});var Kl=me(Lc=>{Object.defineProperty(Lc,"__esModule",{value:!0});var sy=Wl(),cy=Yl();function uy(e,t){var r=ly(e);return r.setAttemptNumber(t),r}Lc.DelayFactory=uy;function ly(e){return e.delayFirstAttempt?new cy.AlwaysDelay(e):new sy.SkipFirstDelay(e)}});var Gl=me(Dr=>{var Bc=Dr&&Dr.__awaiter||function(e,t,r,a){function o(n){return n instanceof r?n:new r(function(i){i(n);})}return new(r||(r=Promise))(function(n,i){function s(d){try{c(a.next(d));}catch(l){i(l);}}function u(d){try{c(a.throw(d));}catch(l){i(l);}}function c(d){d.done?n(d.value):o(d.value).then(s,u);}c((a=a.apply(e,t||[])).next());})},Uc=Dr&&Dr.__generator||function(e,t){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},a,o,n,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(c){return function(d){return u([c,d])}}function u(c){if(a)throw new TypeError("Generator is already executing.");for(;r;)try{if(a=1,o&&(n=c[0]&2?o.return:c[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,c[1])).done)return n;switch(o=0,n&&(c=[c[0]&2,n.value]),c[0]){case 0:case 1:n=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,o=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(n=r.trys,!(n=n.length>0&&n[n.length-1])&&(c[0]===6||c[0]===2)){r=0;continue}if(c[0]===3&&(!n||c[1]>n[0]&&c[1]<n[3])){r.label=c[1];break}if(c[0]===6&&r.label<n[1]){r.label=n[1],n=c;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(c);break}n[2]&&r.ops.pop(),r.trys.pop();continue}c=t.call(e,r);}catch(d){c=[6,d],o=0;}finally{a=n=0;}if(c[0]&5)throw c[1];return {value:c[0]?c[1]:void 0,done:!0}}};Object.defineProperty(Dr,"__esModule",{value:!0});var dy=$l(),py=Kl();function fy(e,t){return t===void 0&&(t={}),Bc(this,void 0,void 0,function(){var r,a;return Uc(this,function(o){switch(o.label){case 0:return r=dy.getSanitizedOptions(t),a=new my(e,r),[4,a.execute()];case 1:return [2,o.sent()]}})})}Dr.backOff=fy;var my=function(){function e(t,r){this.request=t,this.options=r,this.attemptNumber=0;}return e.prototype.execute=function(){return Bc(this,void 0,void 0,function(){var t,r;return Uc(this,function(a){switch(a.label){case 0:if(this.attemptLimitReached)return [3,7];a.label=1;case 1:return a.trys.push([1,4,,6]),[4,this.applyDelay()];case 2:return a.sent(),[4,this.request()];case 3:return [2,a.sent()];case 4:return t=a.sent(),this.attemptNumber++,[4,this.options.retry(t,this.attemptNumber)];case 5:if(r=a.sent(),!r||this.attemptLimitReached)throw t;return [3,6];case 6:return [3,0];case 7:throw new Error("Something went wrong.")}})})},Object.defineProperty(e.prototype,"attemptLimitReached",{get:function(){return this.attemptNumber>=this.options.numOfAttempts},enumerable:!0,configurable:!0}),e.prototype.applyDelay=function(){return Bc(this,void 0,void 0,function(){var t;return Uc(this,function(r){switch(r.label){case 0:return t=py.DelayFactory(this.options,this.attemptNumber),[4,t.apply()];case 1:return r.sent(),[2]}})})},e}();});var Xr=me((_c,zc)=>{(function(e,t){typeof _c=="object"&&typeof zc!="undefined"?zc.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis!="undefined"?globalThis:e||self).dayjs=t();})(_c,function(){var e=1e3,t=6e4,r=36e5,a="millisecond",o="second",n="minute",i="hour",s="day",u="week",c="month",d="quarter",l="year",f="date",p="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,S={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},F=function(I,R,P){var k=String(I);return !k||k.length>=R?I:""+Array(R+1-k.length).join(P)+I},C={s:F,z:function(I){var R=-I.utcOffset(),P=Math.abs(R),k=Math.floor(P/60),E=P%60;return (R<=0?"+":"-")+F(k,2,"0")+":"+F(E,2,"0")},m:function I(R,P){if(R.date()<P.date())return -I(P,R);var k=12*(P.year()-R.year())+(P.month()-R.month()),E=R.clone().add(k,c),_=P-E<0,z=R.clone().add(k+(_?-1:1),c);return +(-(k+(P-E)/(_?E-z:z-E))||0)},a:function(I){return I<0?Math.ceil(I)||0:Math.floor(I)},p:function(I){return {M:c,y:l,w:u,d:s,D:f,h:i,m:n,s:o,ms:a,Q:d}[I]||String(I||"").toLowerCase().replace(/s$/,"")},u:function(I){return I===void 0}},N="en",Q={};Q[N]=S;var J=function(I){return I instanceof U},ee=function(I,R,P){var k;if(!I)return N;if(typeof I=="string")Q[I]&&(k=I),R&&(Q[I]=R,k=I);else {var E=I.name;Q[E]=I,k=E;}return !P&&k&&(N=k),k||!P&&N},X=function(I,R){if(J(I))return I.clone();var P=typeof R=="object"?R:{};return P.date=I,P.args=arguments,new U(P)},v=C;v.l=ee,v.i=J,v.w=function(I,R){return X(I,{locale:R.$L,utc:R.$u,x:R.$x,$offset:R.$offset})};var U=function(){function I(P){this.$L=ee(P.locale,null,!0),this.parse(P);}var R=I.prototype;return R.parse=function(P){this.$d=function(k){var E=k.date,_=k.utc;if(E===null)return new Date(NaN);if(v.u(E))return new Date;if(E instanceof Date)return new Date(E);if(typeof E=="string"&&!/Z$/i.test(E)){var z=E.match(m);if(z){var re=z[2]-1||0,de=(z[7]||"0").substring(0,3);return _?new Date(Date.UTC(z[1],re,z[3]||1,z[4]||0,z[5]||0,z[6]||0,de)):new Date(z[1],re,z[3]||1,z[4]||0,z[5]||0,z[6]||0,de)}}return new Date(E)}(P),this.$x=P.x||{},this.init();},R.init=function(){var P=this.$d;this.$y=P.getFullYear(),this.$M=P.getMonth(),this.$D=P.getDate(),this.$W=P.getDay(),this.$H=P.getHours(),this.$m=P.getMinutes(),this.$s=P.getSeconds(),this.$ms=P.getMilliseconds();},R.$utils=function(){return v},R.isValid=function(){return this.$d.toString()!==p},R.isSame=function(P,k){var E=X(P);return this.startOf(k)<=E&&E<=this.endOf(k)},R.isAfter=function(P,k){return X(P)<this.startOf(k)},R.isBefore=function(P,k){return this.endOf(k)<X(P)},R.$g=function(P,k,E){return v.u(P)?this[k]:this.set(E,P)},R.unix=function(){return Math.floor(this.valueOf()/1e3)},R.valueOf=function(){return this.$d.getTime()},R.startOf=function(P,k){var E=this,_=!!v.u(k)||k,z=v.p(P),re=function(it,be){var Qe=v.w(E.$u?Date.UTC(E.$y,be,it):new Date(E.$y,be,it),E);return _?Qe:Qe.endOf(s)},de=function(it,be){return v.w(E.toDate()[it].apply(E.toDate("s"),(_?[0,0,0,0]:[23,59,59,999]).slice(be)),E)},fe=this.$W,Re=this.$M,nt=this.$D,Xe="set"+(this.$u?"UTC":"");switch(z){case l:return _?re(1,0):re(31,11);case c:return _?re(1,Re):re(0,Re+1);case u:var Kt=this.$locale().weekStart||0,Vt=(fe<Kt?fe+7:fe)-Kt;return re(_?nt-Vt:nt+(6-Vt),Re);case s:case f:return de(Xe+"Hours",0);case i:return de(Xe+"Minutes",1);case n:return de(Xe+"Seconds",2);case o:return de(Xe+"Milliseconds",3);default:return this.clone()}},R.endOf=function(P){return this.startOf(P,!1)},R.$set=function(P,k){var E,_=v.p(P),z="set"+(this.$u?"UTC":""),re=(E={},E[s]=z+"Date",E[f]=z+"Date",E[c]=z+"Month",E[l]=z+"FullYear",E[i]=z+"Hours",E[n]=z+"Minutes",E[o]=z+"Seconds",E[a]=z+"Milliseconds",E)[_],de=_===s?this.$D+(k-this.$W):k;if(_===c||_===l){var fe=this.clone().set(f,1);fe.$d[re](de),fe.init(),this.$d=fe.set(f,Math.min(this.$D,fe.daysInMonth())).$d;}else re&&this.$d[re](de);return this.init(),this},R.set=function(P,k){return this.clone().$set(P,k)},R.get=function(P){return this[v.p(P)]()},R.add=function(P,k){var E,_=this;P=Number(P);var z=v.p(k),re=function(Re){var nt=X(_);return v.w(nt.date(nt.date()+Math.round(Re*P)),_)};if(z===c)return this.set(c,this.$M+P);if(z===l)return this.set(l,this.$y+P);if(z===s)return re(1);if(z===u)return re(7);var de=(E={},E[n]=t,E[i]=r,E[o]=e,E)[z]||1,fe=this.$d.getTime()+P*de;return v.w(fe,this)},R.subtract=function(P,k){return this.add(-1*P,k)},R.format=function(P){var k=this;if(!this.isValid())return p;var E=P||"YYYY-MM-DDTHH:mm:ssZ",_=v.z(this),z=this.$locale(),re=this.$H,de=this.$m,fe=this.$M,Re=z.weekdays,nt=z.months,Xe=function(be,Qe,kr,Gt){return be&&(be[Qe]||be(k,E))||kr[Qe].substr(0,Gt)},Kt=function(be){return v.s(re%12||12,be,"0")},Vt=z.meridiem||function(be,Qe,kr){var Gt=be<12?"AM":"PM";return kr?Gt.toLowerCase():Gt},it={YY:String(this.$y).slice(-2),YYYY:this.$y,M:fe+1,MM:v.s(fe+1,2,"0"),MMM:Xe(z.monthsShort,fe,nt,3),MMMM:Xe(nt,fe),D:this.$D,DD:v.s(this.$D,2,"0"),d:String(this.$W),dd:Xe(z.weekdaysMin,this.$W,Re,2),ddd:Xe(z.weekdaysShort,this.$W,Re,3),dddd:Re[this.$W],H:String(re),HH:v.s(re,2,"0"),h:Kt(1),hh:Kt(2),a:Vt(re,de,!0),A:Vt(re,de,!1),m:String(de),mm:v.s(de,2,"0"),s:String(this.$s),ss:v.s(this.$s,2,"0"),SSS:v.s(this.$ms,3,"0"),Z:_};return E.replace(y,function(be,Qe){return Qe||it[be]||_.replace(":","")})},R.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},R.diff=function(P,k,E){var _,z=v.p(k),re=X(P),de=(re.utcOffset()-this.utcOffset())*t,fe=this-re,Re=v.m(this,re);return Re=(_={},_[l]=Re/12,_[c]=Re,_[d]=Re/3,_[u]=(fe-de)/6048e5,_[s]=(fe-de)/864e5,_[i]=fe/r,_[n]=fe/t,_[o]=fe/e,_)[z]||fe,E?Re:v.a(Re)},R.daysInMonth=function(){return this.endOf(c).$D},R.$locale=function(){return Q[this.$L]},R.locale=function(P,k){if(!P)return this.$L;var E=this.clone(),_=ee(P,k,!0);return _&&(E.$L=_),E},R.clone=function(){return v.w(this.$d,this)},R.toDate=function(){return new Date(this.valueOf())},R.toJSON=function(){return this.isValid()?this.toISOString():null},R.toISOString=function(){return this.$d.toISOString()},R.toString=function(){return this.$d.toUTCString()},I}(),se=U.prototype;return X.prototype=se,[["$ms",a],["$s",o],["$m",n],["$H",i],["$W",s],["$M",c],["$y",l],["$D",f]].forEach(function(I){se[I[1]]=function(R){return this.$g(R,I[0],I[1])};}),X.extend=function(I,R){return I.$i||(I(R,U,X),I.$i=!0),X},X.locale=ee,X.isDayjs=J,X.unix=function(I){return X(1e3*I)},X.en=Q[N],X.Ls=Q,X.p={},X});});var ad=me((Hc,Wc)=>{(function(e,t){typeof Hc=="object"&&typeof Wc!="undefined"?Wc.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis!="undefined"?globalThis:e||self).dayjs_plugin_utc=t();})(Hc,function(){var e="minute",t=/[+-]\d\d(?::?\d\d)?/g,r=/([+-]|\d\d)/g;return function(a,o,n){var i=o.prototype;n.utc=function(p){var m={date:p,utc:!0,args:arguments};return new o(m)},i.utc=function(p){var m=n(this.toDate(),{locale:this.$L,utc:!0});return p?m.add(this.utcOffset(),e):m},i.local=function(){return n(this.toDate(),{locale:this.$L,utc:!1})};var s=i.parse;i.parse=function(p){p.utc&&(this.$u=!0),this.$utils().u(p.$offset)||(this.$offset=p.$offset),s.call(this,p);};var u=i.init;i.init=function(){if(this.$u){var p=this.$d;this.$y=p.getUTCFullYear(),this.$M=p.getUTCMonth(),this.$D=p.getUTCDate(),this.$W=p.getUTCDay(),this.$H=p.getUTCHours(),this.$m=p.getUTCMinutes(),this.$s=p.getUTCSeconds(),this.$ms=p.getUTCMilliseconds();}else u.call(this);};var c=i.utcOffset;i.utcOffset=function(p,m){var y=this.$utils().u;if(y(p))return this.$u?0:y(this.$offset)?c.call(this):this.$offset;if(typeof p=="string"&&(p=function(N){N===void 0&&(N="");var Q=N.match(t);if(!Q)return null;var J=(""+Q[0]).match(r)||["-",0,0],ee=J[0],X=60*+J[1]+ +J[2];return X===0?0:ee==="+"?X:-X}(p))===null)return this;var S=Math.abs(p)<=16?60*p:p,F=this;if(m)return F.$offset=S,F.$u=p===0,F;if(p!==0){var C=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(F=this.local().add(S+C,e)).$offset=S,F.$x.$localOffset=C;}else F=this.utc();return F};var d=i.format;i.format=function(p){var m=p||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return d.call(this,m)},i.valueOf=function(){var p=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||new Date().getTimezoneOffset());return this.$d.valueOf()-6e4*p},i.isUTC=function(){return !!this.$u},i.toISOString=function(){return this.toDate().toISOString()},i.toString=function(){return this.toDate().toUTCString()};var l=i.toDate;i.toDate=function(p){return p==="s"&&this.$offset?n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():l.call(this)};var f=i.diff;i.diff=function(p,m,y){if(p&&this.$u===p.$u)return f.call(this,p,m,y);var S=this.local(),F=n(p).local();return f.call(S,F,m,y)};}});});var od=me((Yc,Kc)=>{(function(e,t){typeof Yc=="object"&&typeof Kc!="undefined"?Kc.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis!="undefined"?globalThis:e||self).dayjs_plugin_timezone=t();})(Yc,function(){var e={year:0,month:1,day:2,hour:3,minute:4,second:5},t={};return function(r,a,o){var n,i=function(d,l,f){f===void 0&&(f={});var p=new Date(d);return function(m,y){y===void 0&&(y={});var S=y.timeZoneName||"short",F=m+"|"+S,C=t[F];return C||(C=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:m,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:S}),t[F]=C),C}(l,f).formatToParts(p)},s=function(d,l){for(var f=i(d,l),p=[],m=0;m<f.length;m+=1){var y=f[m],S=y.type,F=y.value,C=e[S];C>=0&&(p[C]=parseInt(F,10));}var N=p[3],Q=N===24?0:N,J=p[0]+"-"+p[1]+"-"+p[2]+" "+Q+":"+p[4]+":"+p[5]+":000",ee=+d;return (o.utc(J).valueOf()-(ee-=ee%1e3))/6e4},u=a.prototype;u.tz=function(d,l){d===void 0&&(d=n);var f=this.utcOffset(),p=this.toDate(),m=p.toLocaleString("en-US",{timeZone:d}),y=Math.round((p-new Date(m))/1e3/60),S=o(m).$set("millisecond",this.$ms).utcOffset(15*-Math.round(p.getTimezoneOffset()/15)-y,!0);if(l){var F=S.utcOffset();S=S.add(f-F,"minute");}return S.$x.$timezone=d,S},u.offsetName=function(d){var l=this.$x.$timezone||o.tz.guess(),f=i(this.valueOf(),l,{timeZoneName:d}).find(function(p){return p.type.toLowerCase()==="timezonename"});return f&&f.value};var c=u.startOf;u.startOf=function(d,l){if(!this.$x||!this.$x.$timezone)return c.call(this,d,l);var f=o(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return c.call(f,d,l).tz(this.$x.$timezone,!0)},o.tz=function(d,l,f){var p=f&&l,m=f||l||n,y=s(+o(),m);if(typeof d!="string")return o(d).tz(m);var S=function(Q,J,ee){var X=Q-60*J*1e3,v=s(X,ee);if(J===v)return [X,J];var U=s(X-=60*(v-J)*1e3,ee);return v===U?[X,v]:[Q-60*Math.min(v,U)*1e3,Math.max(v,U)]}(o.utc(d,p).valueOf(),y,m),F=S[0],C=S[1],N=o(F).utcOffset(C);return N.$x.$timezone=m,N},o.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},o.tz.setDefault=function(d){n=d;};}});});var pd=me(au=>{Object.defineProperty(au,"__esModule",{value:!0});au.default=Py;function Py(e){var t,r=e.Symbol;return typeof r=="function"?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable",t}});var fd=me((ou,nu)=>{Object.defineProperty(ou,"__esModule",{value:!0});var wy=pd(),Ey=Oy(wy);function Oy(e){return e&&e.__esModule?e:{default:e}}var ca;typeof self!="undefined"?ca=self:typeof window!="undefined"?ca=window:typeof global!="undefined"?ca=global:typeof nu!="undefined"?ca=nu:ca=Function("return this")();var qy=(0, Ey.default)(ca);ou.default=qy;});var jn=me(er=>{Object.defineProperty(er,"__esModule",{value:!0});function Iy(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var md=Iy(fd()),iu=function(){return Math.random().toString(36).substring(7).split("").join(".")},ua={INIT:"@@redux/INIT"+iu(),REPLACE:"@@redux/REPLACE"+iu(),PROBE_UNKNOWN_ACTION:function(){return "@@redux/PROBE_UNKNOWN_ACTION"+iu()}};function Ty(e){if(typeof e!="object"||e===null)return !1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function gd(e,t,r){var a;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if(typeof t=="function"&&typeof r=="undefined"&&(r=t,t=void 0),typeof r!="undefined"){if(typeof r!="function")throw new Error("Expected the enhancer to be a function.");return r(gd)(e,t)}if(typeof e!="function")throw new Error("Expected the reducer to be a function.");var o=e,n=t,i=[],s=i,u=!1;function c(){s===i&&(s=i.slice());}function d(){if(u)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return n}function l(y){if(typeof y!="function")throw new Error("Expected the listener to be a function.");if(u)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var S=!0;return c(),s.push(y),function(){if(!!S){if(u)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");S=!1,c();var C=s.indexOf(y);s.splice(C,1),i=null;}}}function f(y){if(!Ty(y))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(typeof y.type=="undefined")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(u)throw new Error("Reducers may not dispatch actions.");try{u=!0,n=o(n,y);}finally{u=!1;}for(var S=i=s,F=0;F<S.length;F++){var C=S[F];C();}return y}function p(y){if(typeof y!="function")throw new Error("Expected the nextReducer to be a function.");o=y,f({type:ua.REPLACE});}function m(){var y,S=l;return y={subscribe:function(C){if(typeof C!="object"||C===null)throw new TypeError("Expected the observer to be an object.");function N(){C.next&&C.next(d());}N();var Q=S(N);return {unsubscribe:Q}}},y[md]=function(){return this},y}return f({type:ua.INIT}),a={dispatch:f,subscribe:l,getState:d,replaceReducer:p},a[md]=m,a}function ky(e,t){var r=t&&t.type,a=r&&'action "'+String(r)+'"'||"an action";return "Given "+a+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function Dy(e){Object.keys(e).forEach(function(t){var r=e[t],a=r(void 0,{type:ua.INIT});if(typeof a=="undefined")throw new Error('Reducer "'+t+`" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);if(typeof r(void 0,{type:ua.PROBE_UNKNOWN_ACTION()})=="undefined")throw new Error('Reducer "'+t+'" returned undefined when probed with a random type. '+("Don't try to handle "+ua.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.")});}function Vy(e){for(var t=Object.keys(e),r={},a=0;a<t.length;a++){var o=t[a];typeof e[o]=="function"&&(r[o]=e[o]);}var n=Object.keys(r),s;try{Dy(r);}catch(u){s=u;}return function(c,d){if(c===void 0&&(c={}),s)throw s;for(var f=!1,p={},m=0;m<n.length;m++){var y=n[m],S=r[y],F=c[y],C=S(F,d);if(typeof C=="undefined"){var N=ky(y,d);throw new Error(N)}p[y]=C,f=f||C!==F;}return f=f||n.length!==Object.keys(c).length,f?p:c}}function hd(e,t){return function(){return t(e.apply(this,arguments))}}function Ny(e,t){if(typeof e=="function")return hd(e,t);if(typeof e!="object"||e===null)throw new Error("bindActionCreators expected an object or a function, instead received "+(e===null?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var r={};for(var a in e){var o=e[a];typeof o=="function"&&(r[a]=hd(o,t));}return r}function My(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function yd(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r}function Qy(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?yd(r,!0).forEach(function(a){My(e,a,r[a]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):yd(r).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a));});}return e}function Sd(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length===0?function(a){return a}:t.length===1?t[0]:t.reduce(function(a,o){return function(){return a(o.apply(void 0,arguments))}})}function jy(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(a){return function(){var o=a.apply(void 0,arguments),n=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},i={getState:o.getState,dispatch:function(){return n.apply(void 0,arguments)}},s=t.map(function(u){return u(i)});return n=Sd.apply(void 0,s)(o.dispatch),Qy({},o,{dispatch:n})}}}er.__DO_NOT_USE__ActionTypes=ua;er.applyMiddleware=jy;er.bindActionCreators=Ny;er.combineReducers=Vy;er.compose=Sd;er.createStore=gd;});var Rd=me((nE,Cd)=>{var Ly="[object Object]";function By(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"");}catch{}return t}function Uy(e,t){return function(r){return e(t(r))}}var $y=Function.prototype,xd=Object.prototype,Fd=$y.toString,_y=xd.hasOwnProperty,zy=Fd.call(Object),Hy=xd.toString,Wy=Uy(Object.getPrototypeOf,Object);function Yy(e){return !!e&&typeof e=="object"}function Ky(e){if(!Yy(e)||Hy.call(e)!=Ly||By(e))return !1;var t=Wy(e);if(t===null)return !0;var r=_y.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&Fd.call(r)==zy}Cd.exports=Ky;});var bd=me(cu=>{Object.defineProperty(cu,"__esModule",{value:!0});cu.default=tS;var Gy=jn(),Jy=Rd(),Xy=Zy(Jy);function Zy(e){return e&&e.__esModule?e:{default:e}}function eS(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}else return Array.from(e)}var su=function(t){return typeof t=="function"};function tS(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};function a(){var n=[],i=[],s={getState:function(){return su(r)?r(n):r},getActions:function(){return n},dispatch:function(c){if(!(0, Xy.default)(c))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(typeof c.type=="undefined")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant? Action: '+JSON.stringify(c));n.push(c);for(var d=0;d<i.length;d++)i[d]();return c},clearActions:function(){n=[];},subscribe:function(c){return su(c)&&i.push(c),function(){var d=i.indexOf(c);d<0||i.splice(d,1);}},replaceReducer:function(c){if(!su(c))throw new Error("Expected the nextReducer to be a function.")}};return s}var o=Gy.applyMiddleware.apply(void 0,eS(e))(a);return o()}}});var Vp=me((iO,ju)=>{var ii=typeof self!="undefined"?self:typeof window!="undefined"?window:void 0;if(!ii)throw new Error("Unable to find global scope. Are you sure this is running in the browser?");if(!ii.AbortController)throw new Error('Could not find "AbortController" in the global scope. You need to polyfill it first');ju.exports=ii.AbortController;ju.exports.default=ii.AbortController;});var zu=me(($u,_u)=>{(function(e,t){typeof $u=="object"&&typeof _u!="undefined"?_u.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis!="undefined"?globalThis:e||self).dayjs_plugin_customParseFormat=t();})($u,function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,a=/\d\d?/,o=/\d*[^\s\d-_:/()]+/,n={},i=function(f){return function(p){this[f]=+p;}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(f){(this.zone||(this.zone={})).offset=function(p){if(!p||p==="Z")return 0;var m=p.match(/([+-]|\d\d)/g),y=60*m[1]+(+m[2]||0);return y===0?0:m[0]==="+"?-y:y}(f);}],u=function(f){var p=n[f];return p&&(p.indexOf?p:p.s.concat(p.f))},c=function(f,p){var m,y=n.meridiem;if(y){for(var S=1;S<=24;S+=1)if(f.indexOf(y(S,0,p))>-1){m=S>12;break}}else m=f===(p?"pm":"PM");return m},d={A:[o,function(f){this.afternoon=c(f,!1);}],a:[o,function(f){this.afternoon=c(f,!0);}],S:[/\d/,function(f){this.milliseconds=100*+f;}],SS:[r,function(f){this.milliseconds=10*+f;}],SSS:[/\d{3}/,function(f){this.milliseconds=+f;}],s:[a,i("seconds")],ss:[a,i("seconds")],m:[a,i("minutes")],mm:[a,i("minutes")],H:[a,i("hours")],h:[a,i("hours")],HH:[a,i("hours")],hh:[a,i("hours")],D:[a,i("day")],DD:[r,i("day")],Do:[o,function(f){var p=n.ordinal,m=f.match(/\d+/);if(this.day=m[0],p)for(var y=1;y<=31;y+=1)p(y).replace(/\[|\]/g,"")===f&&(this.day=y);}],M:[a,i("month")],MM:[r,i("month")],MMM:[o,function(f){var p=u("months"),m=(u("monthsShort")||p.map(function(y){return y.substr(0,3)})).indexOf(f)+1;if(m<1)throw new Error;this.month=m%12||m;}],MMMM:[o,function(f){var p=u("months").indexOf(f)+1;if(p<1)throw new Error;this.month=p%12||p;}],Y:[/[+-]?\d+/,i("year")],YY:[r,function(f){f=+f,this.year=f+(f>68?1900:2e3);}],YYYY:[/\d{4}/,i("year")],Z:s,ZZ:s};function l(f){var p,m;p=f,m=n&&n.formats;for(var y=(f=p.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(ee,X,v){var U=v&&v.toUpperCase();return X||m[v]||e[v]||m[U].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(se,I,R){return I||R.slice(1)})})).match(t),S=y.length,F=0;F<S;F+=1){var C=y[F],N=d[C],Q=N&&N[0],J=N&&N[1];y[F]=J?{regex:Q,parser:J}:C.replace(/^\[|\]$/g,"");}return function(ee){for(var X={},v=0,U=0;v<S;v+=1){var se=y[v];if(typeof se=="string")U+=se.length;else {var I=se.regex,R=se.parser,P=ee.substr(U),k=I.exec(P)[0];R.call(X,k),ee=ee.replace(k,"");}}return function(E){var _=E.afternoon;if(_!==void 0){var z=E.hours;_?z<12&&(E.hours+=12):z===12&&(E.hours=0),delete E.afternoon;}}(X),X}}return function(f,p,m){m.p.customParseFormat=!0;var y=p.prototype,S=y.parse;y.parse=function(F){var C=F.date,N=F.utc,Q=F.args;this.$u=N;var J=Q[1];if(typeof J=="string"){var ee=Q[2]===!0,X=Q[3]===!0,v=ee||X,U=Q[2];X&&(U=Q[2]),n=this.$locale(),!ee&&U&&(n=m.Ls[U]),this.$d=function(P,k,E){try{var _=l(k)(P),z=_.year,re=_.month,de=_.day,fe=_.hours,Re=_.minutes,nt=_.seconds,Xe=_.milliseconds,Kt=_.zone,Vt=new Date,it=de||(z||re?1:Vt.getDate()),be=z||Vt.getFullYear(),Qe=0;z&&!re||(Qe=re>0?re-1:Vt.getMonth());var kr=fe||0,Gt=Re||0,Tc=nt||0,kc=Xe||0;return Kt?new Date(Date.UTC(be,Qe,it,kr,Gt,Tc,kc+60*Kt.offset*1e3)):E?new Date(Date.UTC(be,Qe,it,kr,Gt,Tc,kc)):new Date(be,Qe,it,kr,Gt,Tc,kc)}catch{return new Date("")}}(C,J,N),this.init(),U&&U!==!0&&(this.$L=this.locale(U).$L),v&&C!==this.format(J)&&(this.$d=new Date("")),n={};}else if(J instanceof Array)for(var se=J.length,I=1;I<=se;I+=1){Q[1]=J[I-1];var R=m.apply(this,Q);if(R.isValid()){this.$d=R.$d,this.$L=R.$L,this.init();break}I===se&&(this.$d=new Date(""));}else S.call(this,F);};}});});var Wp=me((Yu,Ku)=>{(function(e,t){typeof Yu=="object"&&typeof Ku!="undefined"?Ku.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis!="undefined"?globalThis:e||self).dayjs_plugin_quarterOfYear=t();})(Yu,function(){var e="month",t="quarter";return function(r,a){var o=a.prototype;o.quarter=function(s){return this.$utils().u(s)?Math.ceil((this.month()+1)/3):this.month(this.month()%3+3*(s-1))};var n=o.add;o.add=function(s,u){return s=Number(s),this.$utils().p(u)===t?this.add(3*s,e):n.bind(this)(s,u)};var i=o.startOf;o.startOf=function(s,u){var c=this.$utils(),d=!!c.u(u)||u;if(c.p(s)===t){var l=this.quarter()-1;return d?this.month(3*l).startOf(e).startOf("day"):this.month(3*l+2).endOf(e).endOf("day")}return i.bind(this)(s,u)};}});});var Sf=me((YI,yf)=>{function GF(e){try{return JSON.stringify(e)}catch{return '"[Circular]"'}}yf.exports=JF;function JF(e,t,r){var a=r&&r.stringify||GF,o=1;if(typeof e=="object"&&e!==null){var n=t.length+o;if(n===1)return e;var i=new Array(n);i[0]=a(e);for(var s=1;s<n;s++)i[s]=a(t[s]);return i.join(" ")}if(typeof e!="string")return e;var u=t.length;if(u===0)return e;for(var c="",d=1-o,l=-1,f=e&&e.length||0,p=0;p<f;){if(e.charCodeAt(p)===37&&p+1<f){switch(l=l>-1?l:0,e.charCodeAt(p+1)){case 100:case 102:if(d>=u||(l<p&&(c+=e.slice(l,p)),t[d]==null))break;c+=Number(t[d]),l=p=p+2;break;case 105:if(d>=u||(l<p&&(c+=e.slice(l,p)),t[d]==null))break;c+=Math.floor(Number(t[d])),l=p=p+2;break;case 79:case 111:case 106:if(d>=u||(l<p&&(c+=e.slice(l,p)),t[d]===void 0))break;var m=typeof t[d];if(m==="string"){c+="'"+t[d]+"'",l=p+2,p++;break}if(m==="function"){c+=t[d].name||"<anonymous>",l=p+2,p++;break}c+=a(t[d]),l=p+2,p++;break;case 115:if(d>=u)break;l<p&&(c+=e.slice(l,p)),c+=String(t[d]),l=p+2,p++;break;case 37:l<p&&(c+=e.slice(l,p)),c+="%",l=p+2,p++,d--;break}++d;}++p;}return l===-1?e:(l<f&&(c+=e.slice(l)),c)}});var vi=me((KI,Rf)=>{var xf=Sf();Rf.exports=At;var cn=sC().console||{},XF={mapHttpRequest:bi,mapHttpResponse:bi,wrapRequestSerializer:rl,wrapResponseSerializer:rl,wrapErrorSerializer:rl,req:bi,res:bi,err:aC};function ZF(e,t){return Array.isArray(e)?e.filter(function(a){return a!=="!stdSerializers.err"}):e===!0?Object.keys(t):!1}function At(e){e=e||{},e.browser=e.browser||{};let t=e.browser.transmit;if(t&&typeof t.send!="function")throw Error("pino: transmit option must have a send function");let r=e.browser.write||cn;e.browser.write&&(e.browser.asObject=!0);let a=e.serializers||{},o=ZF(e.browser.serialize,a),n=e.browser.serialize;Array.isArray(e.browser.serialize)&&e.browser.serialize.indexOf("!stdSerializers.err")>-1&&(n=!1);let i=["error","fatal","warn","info","debug","trace"];typeof r=="function"&&(r.error=r.fatal=r.warn=r.info=r.debug=r.trace=r),e.enabled===!1&&(e.level="silent");let s=e.level||"info",u=Object.create(r);u.log||(u.log=un),Object.defineProperty(u,"levelVal",{get:d}),Object.defineProperty(u,"level",{get:l,set:f});let c={transmit:t,serialize:o,asObject:e.browser.asObject,levels:i,timestamp:oC(e)};u.levels=At.levels,u.level=s,u.setMaxListeners=u.getMaxListeners=u.emit=u.addListener=u.on=u.prependListener=u.once=u.prependOnceListener=u.removeListener=u.removeAllListeners=u.listeners=u.listenerCount=u.eventNames=u.write=u.flush=un,u.serializers=a,u._serialize=o,u._stdErrSerialize=n,u.child=p,t&&(u._logEvent=tl());function d(){return this.level==="silent"?1/0:this.levels.values[this.level]}function l(){return this._level}function f(m){if(m!=="silent"&&!this.levels.values[m])throw Error("unknown level "+m);this._level=m,qa(c,u,"error","log"),qa(c,u,"fatal","error"),qa(c,u,"warn","error"),qa(c,u,"info","log"),qa(c,u,"debug","log"),qa(c,u,"trace","log");}function p(m){if(!m)throw new Error("missing bindings for child Pino");let y=m.serializers;if(o&&y){var S=Object.assign({},a,y),F=e.browser.serialize===!0?Object.keys(S):o;delete m.serializers,Ri([m],F,S,this._stdErrSerialize);}function C(N){this._childLevel=(N._childLevel|0)+1,this.error=Ia(N,m,"error"),this.fatal=Ia(N,m,"fatal"),this.warn=Ia(N,m,"warn"),this.info=Ia(N,m,"info"),this.debug=Ia(N,m,"debug"),this.trace=Ia(N,m,"trace"),S&&(this.serializers=S,this._serialize=F),t&&(this._logEvent=tl([].concat(N._logEvent.bindings,m)));}return C.prototype=this,new C(this)}return u}At.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}};At.stdSerializers=XF;At.stdTimeFunctions=Object.assign({},{nullTime:Ff,epochTime:Cf,unixTime:nC,isoTime:iC});function qa(e,t,r,a){let o=Object.getPrototypeOf(t);t[r]=t.levelVal>t.levels.values[r]?un:o[r]?o[r]:cn[r]||cn[a]||un,eC(e,t,r);}function eC(e,t,r){!e.transmit&&t[r]===un||(t[r]=function(a){return function(){let n=e.timestamp(),i=new Array(arguments.length),s=Object.getPrototypeOf&&Object.getPrototypeOf(this)===cn?cn:this;for(var u=0;u<i.length;u++)i[u]=arguments[u];if(e.serialize&&!e.asObject&&Ri(i,this._serialize,this.serializers,this._stdErrSerialize),e.asObject?a.call(s,tC(this,r,i,n)):a.apply(s,i),e.transmit){let c=e.transmit.level||t.level,d=At.levels.values[c],l=At.levels.values[r];if(l<d)return;rC(this,{ts:n,methodLevel:r,methodValue:l,transmitLevel:c,transmitValue:At.levels.values[e.transmit.level||t.level],send:e.transmit.send,val:t.levelVal},i);}}}(t[r]));}function tC(e,t,r,a){e._serialize&&Ri(r,e._serialize,e.serializers,e._stdErrSerialize);let o=r.slice(),n=o[0],i={};a&&(i.time=a),i.level=At.levels.values[t];let s=(e._childLevel|0)+1;if(s<1&&(s=1),n!==null&&typeof n=="object"){for(;s--&&typeof o[0]=="object";)Object.assign(i,o.shift());n=o.length?xf(o.shift(),o):void 0;}else typeof n=="string"&&(n=xf(o.shift(),o));return n!==void 0&&(i.msg=n),i}function Ri(e,t,r,a){for(let o in e)if(a&&e[o]instanceof Error)e[o]=At.stdSerializers.err(e[o]);else if(typeof e[o]=="object"&&!Array.isArray(e[o]))for(let n in e[o])t&&t.indexOf(n)>-1&&n in r&&(e[o][n]=r[n](e[o][n]));}function Ia(e,t,r){return function(){let a=new Array(1+arguments.length);a[0]=t;for(var o=1;o<a.length;o++)a[o]=arguments[o-1];return e[r].apply(this,a)}}function rC(e,t,r){let a=t.send,o=t.ts,n=t.methodLevel,i=t.methodValue,s=t.val,u=e._logEvent.bindings;Ri(r,e._serialize||Object.keys(e.serializers),e.serializers,e._stdErrSerialize===void 0?!0:e._stdErrSerialize),e._logEvent.ts=o,e._logEvent.messages=r.filter(function(c){return u.indexOf(c)===-1}),e._logEvent.level.label=n,e._logEvent.level.value=i,a(n,e._logEvent,s),e._logEvent=tl(u);}function tl(e){return {ts:0,messages:[],bindings:e||[],level:{label:"",value:0}}}function aC(e){let t={type:e.constructor.name,msg:e.message,stack:e.stack};for(let r in e)t[r]===void 0&&(t[r]=e[r]);return t}function oC(e){return typeof e.timestamp=="function"?e.timestamp:e.timestamp===!1?Ff:Cf}function bi(){return {}}function rl(e){return e}function un(){}function Ff(){return !1}function Cf(){return Date.now()}function nC(){return Math.round(Date.now()/1e3)}function iC(){return new Date(Date.now()).toISOString()}function sC(){function e(t){return typeof t!="undefined"&&t}try{return typeof globalThis!="undefined"||Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch{return e(self)||e(window)||e(this)||{}}}});var gm=me((ps,mm)=>{(function(e,t){typeof ps=="object"&&typeof mm!="undefined"?t(ps):typeof define=="function"&&define.amd?define(["exports"],t):(e=typeof globalThis!="undefined"?globalThis:e||self,t(e["fast-equals"]={}));})(ps,function(e){var t=typeof WeakSet=="function",r=Object.keys;function a(v,U){return v===U||v!==v&&U!==U}function o(v){return v.constructor===Object||v.constructor==null}function n(v){return !!v&&typeof v.then=="function"}function i(v){return !!(v&&v.$$typeof)}function s(){var v=[];return {add:function(U){v.push(U);},has:function(U){return v.indexOf(U)!==-1}}}var u=function(v){return v?function(){return new WeakSet}:s}(t);function c(v){return function(se){var I=v||se;return function(P,k,E){E===void 0&&(E=u());var _=!!P&&typeof P=="object",z=!!k&&typeof k=="object";if(_||z){var re=_&&E.has(P),de=z&&E.has(k);if(re||de)return re&&de;_&&E.add(P),z&&E.add(k);}return I(P,k,E)}}}function d(v,U,se,I){var R=v.length;if(U.length!==R)return !1;for(;R-- >0;)if(!se(v[R],U[R],I))return !1;return !0}function l(v,U,se,I){var R=v.size===U.size;return R&&v.size&&v.forEach(function(P,k){R&&(R=!1,U.forEach(function(E,_){!R&&se(k,_,I)&&(R=se(P,E,I));}));}),R}var f="_owner",p=Function.prototype.bind.call(Function.prototype.call,Object.prototype.hasOwnProperty);function m(v,U,se,I){var R=r(v),P=R.length;if(r(U).length!==P)return !1;if(P)for(var k=void 0;P-- >0;){if(k=R[P],k===f){var E=i(v),_=i(U);if((E||_)&&E!==_)return !1}if(!p(U,k)||!se(v[k],U[k],I))return !1}return !0}function y(v,U){return v.source===U.source&&v.global===U.global&&v.ignoreCase===U.ignoreCase&&v.multiline===U.multiline&&v.unicode===U.unicode&&v.sticky===U.sticky&&v.lastIndex===U.lastIndex}function S(v,U,se,I){var R=v.size===U.size;return R&&v.size&&v.forEach(function(P){R&&(R=!1,U.forEach(function(k){R||(R=se(P,k,I));}));}),R}var F=typeof Map=="function",C=typeof Set=="function";function N(v){var U=typeof v=="function"?v(se):se;function se(I,R,P){if(I===R)return !0;if(I&&R&&typeof I=="object"&&typeof R=="object"){if(o(I)&&o(R))return m(I,R,U,P);var k=Array.isArray(I),E=Array.isArray(R);return k||E?k===E&&d(I,R,U,P):(k=I instanceof Date,E=R instanceof Date,k||E?k===E&&a(I.getTime(),R.getTime()):(k=I instanceof RegExp,E=R instanceof RegExp,k||E?k===E&&y(I,R):n(I)||n(R)?I===R:F&&(k=I instanceof Map,E=R instanceof Map,k||E)?k===E&&l(I,R,U,P):C&&(k=I instanceof Set,E=R instanceof Set,k||E)?k===E&&S(I,R,U,P):m(I,R,U,P)))}return I!==I&&R!==R}return se}var Q=N(),J=N(function(){return a}),ee=N(c()),X=N(c(a));e.circularDeepEqual=ee,e.circularShallowEqual=X,e.createCustomEqual=N,e.deepEqual=Q,e.sameValueZeroEqual=a,e.shallowEqual=J,Object.defineProperty(e,"__esModule",{value:!0});});});var If={};Dc(If,{buildMockCaseAssistEngine:()=>pC,buildMockProductListingEngine:()=>dC,buildMockProductRecommendationsAppEngine:()=>lC,buildMockRaw:()=>ol,buildMockRecommendationAppEngine:()=>uC,buildMockResult:()=>gC,buildMockSearchAppEngine:()=>cC,createMockState:()=>ru});var Zl=xe(Ul()),ed=xe(Gl());var Lo=class extends Error{constructor(){super();this.name="ExpiredToken",this.message="The token being used to perform the request is expired.";}},Jr=class extends Error{constructor(t,r){super();this.name="Disconnected",this.message=`Client could not connect to the following URL: ${t}`,this.statusCode=r!=null?r:0;}};function Jl(e){let t=[];for(let r in e){let a=encodeURIComponent(r),o=encodeURIComponent(e[r]);t.push(`${a}=${o}`);}return t.join("&")}function Xl(e){return typeof e!="object"||!e?!1:Object.values(e).every(gy)}function gy(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function td(e){return e===429}var st=class{static async call(t){let r=hy(t),{preprocessRequest:a,logger:o}=t,n={...r,...a?await a(r,"searchApiFetch"):{}};o.info(n,"Platform request");let{url:i,...s}=n,u=async()=>{let c=await(0, Zl.default)(i,s);if(td(c.status))throw c;return c};try{let c=await(0, ed.backOff)(u,{retry:d=>{let l=d&&td(d.status);return l&&o.info("Platform retrying request"),l}});if(c.status===419)throw o.info("Platform renewing token"),new Lo;if(c.status===404)throw new Jr(i,c.status);return o.info({response:c,requestInfo:n},"Platform response"),c}catch(c){return c.message==="Failed to fetch"?new Jr(i):c}}};function rd(e,t){let r=!t||!t.environment||t.environment==="prod"?"":t.environment,a=!t||!t.region||t.region==="us"?"":`-${t.region}`;return `https://${e}${r}${a}.cloud.coveo.com`}function An(e){return (e==null?void 0:e.multiRegionSubDomain)?`https://${e.multiRegionSubDomain}.org.coveo.com`:rd("platform",e)}function $c(e){return rd("analytics",e)}function hy(e){let{url:t,method:r,requestParams:a,contentType:o,accessToken:n,signal:i}=e,s=e.method==="POST"||e.method==="PUT",u=yy(a,o);return {url:t,method:r,headers:{"Content-Type":o,Authorization:`Bearer ${n}`,...e.headers},...s&&{body:u},signal:i}}function yy(e,t){return t==="application/x-www-form-urlencoded"?Xl(e)?Jl(e):"":JSON.stringify(e)}var Pn=xe(Xr()),nd=xe(ad()),id=xe(od());Pn.default.extend(nd.default);Pn.default.extend(id.default);var Gc="/rest/search/v2",wn="/rest/ua",ke=()=>({organizationId:"",accessToken:"",platformUrl:An(),search:{apiBaseUrl:`${An()}${Gc}`,locale:"en-US",timezone:Pn.default.tz.guess()},analytics:{enabled:!0,apiBaseUrl:`${$c()}${wn}`,originLevel2:"default",originLevel3:"default",anonymous:!1}});var Fe=()=>({q:"",enableQuerySyntax:!1});var En=()=>({redirectTo:null});function Zr(){return {}}function Jc(){return {answerSnippet:"",documentId:{contentIdKey:"",contentIdValue:""},question:"",relatedQuestions:[],score:0}}function je(){return {response:{results:[],searchUid:"",totalCountFiltered:0,facets:[],queryCorrections:[],triggers:[],questionAnswer:Jc(),pipeline:""},duration:0,queryExecuted:"",error:null,automaticallyCorrected:!1,isLoading:!1,results:[],searchResponseId:"",requestId:""}}function Ee(){return {firstResult:0,numberOfResults:10,totalCountFiltered:0}}function Sy(e,t){let r=`
  The following properties are invalid:

    ${e.join(`
	`)}
  
  ${t}
  `;return new Bo(r)}var Bo=class extends Error{constructor(e){super(e);this.name="SchemaValidationError";}},H=class{constructor(e){this.definition=e;}validate(e={},t=""){let r={...this.default,...e},a=[];for(let o in this.definition){let n=this.definition[o].validate(r[o]);n&&a.push(`${o}: ${n}`);}if(a.length)throw Sy(a,t);return r}get default(){let e={};for(let t in this.definition){let r=this.definition[t].default;r!==void 0&&(e[t]=r);}return e}},pe=class{constructor(e={}){this.baseConfig=e;}validate(e){return this.baseConfig.required&&ie(e)?"value is required.":null}get default(){return this.baseConfig.default instanceof Function?this.baseConfig.default():this.baseConfig.default}get required(){return this.baseConfig.required===!0}};function Oe(e){return e===void 0}function xy(e){return e===null}function ie(e){return Oe(e)||xy(e)}var L=class{constructor(e={}){this.config=e,this.value=new pe(e);}validate(e){let t=this.value.validate(e);return t||(Fy(e)?e<this.config.min?`minimum value of ${this.config.min} not respected.`:e>this.config.max?`maximum value of ${this.config.max} not respected.`:null:"value is not a number.")}get default(){return this.value.default}get required(){return this.value.required}};function Fy(e){return Oe(e)||sd(e)}function sd(e){return typeof e=="number"&&!isNaN(e)}var W=class{constructor(e={}){this.value=new pe(e);}validate(e){let t=this.value.validate(e);return t||(Cy(e)?null:"value is not a boolean.")}get default(){return this.value.default}get required(){return this.value.required}};function Cy(e){return Oe(e)||cd(e)}function cd(e){return typeof e=="boolean"}var Ry=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,A=class{constructor(e={}){this.config={emptyAllowed:!0,url:!1,...e},this.value=new pe(this.config);}validate(e){let{emptyAllowed:t,url:r,regex:a,constrainTo:o}=this.config,n=this.value.validate(e);return n||(Oe(e)?null:ea(e)?!t&&!e.length?"value is an empty string.":r&&!Ry.test(e)?"value is not a valid URL.":a&&!a.test(e)?`value did not match provided regex ${a}`:o&&!o.includes(e)?`value should be one of: ${o.join(", ")}.`:null:"value is not a string.")}get default(){return this.value.default}get required(){return this.value.required}};function ea(e){return Object.prototype.toString.call(e)==="[object String]"}var j=class{constructor(e={}){this.config={options:{required:!1},values:{},...e};}validate(e){if(Oe(e))return this.config.options.required?"value is required and is currently undefined":null;if(!ud(e))return "value is not an object";for(let[r,a]of Object.entries(this.config.values))if(a.required&&ie(e[r]))return `value does not contain ${r}`;let t="";for(let[r,a]of Object.entries(this.config.values)){let o=e[r],n=a.validate(o);n!==null&&(t+=" "+n);}return t===""?null:t}get default(){}get required(){return !!this.config.options.required}};function ud(e){return e!==void 0&&typeof e=="object"}var K=class{constructor(e={}){this.config=e,this.value=new pe(this.config);}validate(e){if(!ie(e)&&!Array.isArray(e))return "value is not an array";let t=this.value.validate(e);if(t!==null)return t;if(ie(e))return null;if(this.config.max!==void 0&&e.length>this.config.max)return `value contains more than ${this.config.max}`;if(this.config.min!==void 0&&e.length<this.config.min)return `value contains less than ${this.config.min}`;if(this.config.each!==void 0){let r="";return e.forEach(a=>{this.config.each.required&&ie(a)&&(r=`value is null or undefined: ${e.join(",")}`);let o=this.validatePrimitiveValue(a,this.config.each);o!==null&&(r+=" "+o);}),r===""?null:r}return null}validatePrimitiveValue(e,t){return cd(e)||ea(e)||sd(e)||ud(e)?t.validate(e):"value is not a primitive value"}get default(){}get required(){return this.value.required}};function ta(e){return Array.isArray(e)}var ct=class{constructor(e){this.config=e,this.value=new pe(e);}validate(e){let t=this.value.validate(e);return t!==null?t:Oe(e)||Object.values(this.config.enum).find(a=>a===e)?null:"value is not in enum."}get default(){return this.value.default}get required(){return this.value.required}};var Jt=(r=>(r.Ascending="ascending",r.Descending="descending",r))(Jt||{}),ut=(n=>(n.Relevancy="relevancy",n.QRE="qre",n.Date="date",n.Field="field",n.NoSort="nosort",n))(ut||{}),Mt=e=>{if(ta(e))return e.map(t=>Mt(t)).join(",");switch(e.by){case"relevancy":case"qre":case"nosort":return e.by;case"date":return `date ${e.order}`;case"field":return `@${e.field} ${e.order}`;default:return ""}},Uo=()=>({by:"relevancy"}),Xc=e=>({by:"date",order:e}),Zc=(e,t)=>({by:"field",order:t,field:e}),eu=()=>({by:"qre"}),tu=()=>({by:"nosort"}),ld=new j({values:{by:new ct({enum:ut,required:!0}),order:new ct({enum:Jt}),field:new A}});function Be(){return Mt(Uo())}function lt(){return {}}function dt(){return {contextValues:{}}}var On=()=>({correctedQuery:"",wordCorrections:[],originalQuery:""});function qn(){return {enableDidYouMean:!1,wasCorrectedTo:"",wasAutomaticallyCorrected:!1,queryCorrection:On(),originalQuery:""}}function pt(){return {}}function ft(){return {}}var ra=()=>({fieldsToInclude:["author","language","urihash","objecttype","collection","source","permanentid"],fetchAllFields:!1,fieldsDescription:[]});var mt=()=>"";var In=e=>({past:[],present:e,future:[]}),by=e=>{let{past:t,present:r,future:a}=e;if(!r||t.length===0)return e;let o=t[t.length-1];return {past:t.slice(0,t.length-1),present:o,future:[r,...a]}},vy=e=>{let{past:t,present:r,future:a}=e;if(!r||a.length===0)return e;let o=a[0],n=a.slice(1);return {past:[...t,r],present:o,future:n}},Ay=e=>{let{action:t,state:r,reducer:a}=e,{past:o,present:n}=r,i=a(n,t);return n?n===i?r:{past:[...o,n],present:i,future:[]}:In(i)},dd=e=>{let{actionTypes:t,reducer:r}=e,a=In();return (o=a,n)=>{switch(n.type){case t.undo:return by(o);case t.redo:return vy(o);case t.snapshot:return Ay({state:o,reducer:r,action:n});default:return o}}};var De=()=>"default";function gt(){return {}}function aa(){return {}}function oa(){return {}}var Ve=()=>({cq:"",cqWasSet:!1,aq:"",aqWasSet:!1,lq:"",lqWasSet:!1,defaultFilters:{cq:"",aq:"",lq:""}});function Xt(){return {freezeFacetOrder:!1}}var Ne=()=>!1;function ht(){return {contextValues:{}}}function Zt(){return []}function na(){return {}}function ia(){return {}}function Tn(){return $o({})}function $o(e){var t,r;return {context:e.context||dt(),dictionaryFieldContext:e.dictionaryFieldContext||ht(),facetSet:e.facetSet||lt(),numericFacetSet:e.numericFacetSet||ft(),dateFacetSet:e.dateFacetSet||pt(),categoryFacetSet:e.categoryFacetSet||gt(),pagination:e.pagination||Ee(),query:e.query||Fe(),tabSet:e.tabSet||ia(),advancedSearchQueries:e.advancedSearchQueries||Ve(),staticFilterSet:e.staticFilterSet||na(),querySet:e.querySet||Zr(),sortCriteria:e.sortCriteria||Be(),pipeline:e.pipeline||mt(),searchHub:e.searchHub||De(),facetOptions:e.facetOptions||Xt(),facetOrder:(t=e.facetOrder)!=null?t:Zt(),debug:(r=e.debug)!=null?r:Ne()}}function kn(){return {uniqueId:"",content:"",isLoading:!1}}var sa=()=>({enabled:!1,fields:{collection:"foldingcollection",parent:"foldingparent",child:"foldingchild"},filterFieldRange:2,collections:{}});var Dn=()=>({redirectTo:"",query:"",execute:{functionName:"",params:[]},notification:""});var Vn=()=>({liked:!1,disliked:!1,expanded:!1,relatedQuestions:[]});function Nn(){return {}}function Mn(){return {results:[],maxLength:10}}function Qn(){return {queries:[],maxLength:10}}function ru(e={}){return {configuration:ke(),advancedSearchQueries:Ve(),staticFilterSet:na(),facetSet:lt(),dateFacetSet:pt(),numericFacetSet:ft(),categoryFacetSet:gt(),facetSearchSet:aa(),categoryFacetSearchSet:oa(),facetOptions:Xt(),pagination:Ee(),query:Fe(),querySet:Zr(),tabSet:ia(),querySuggest:{},redirection:En(),search:je(),sortCriteria:Be(),context:dt(),dictionaryFieldContext:ht(),didYouMean:qn(),fields:ra(),history:In(Tn()),pipeline:mt(),facetOrder:Zt(),searchHub:De(),debug:Ne(),resultPreview:kn(),version:"unit-testing-version",folding:sa(),triggers:Dn(),questionAnswering:Vn(),standaloneSearchBoxSet:Nn(),recentResults:Mn(),recentQueries:Qn(),...e}}var Ef=xe(bd());var g={};Dc(g,{MiddlewareArray:()=>jd,configureStore:()=>Au,createAction:()=>h$1,createAsyncThunk:()=>Z,createDraftSafeSelector:()=>Lt,createEntityAdapter:()=>NS,createImmutableStateInvariantMiddleware:()=>CS,createNextState:()=>Wo,createReducer:()=>O,createSelector:()=>_n,createSerializableStateInvariantMiddleware:()=>RS,createSlice:()=>qS,current:()=>zo,findNonSerializableValue:()=>Wn,freeze:()=>_o,getDefaultMiddleware:()=>Yn,getType:()=>ES,isAllOf:()=>Pu,isAnyOf:()=>Ko,isAsyncThunkAction:()=>Xd,isFulfilled:()=>Jd,isImmutableDefault:()=>Ud,isPending:()=>Kd,isPlain:()=>vu,isPlainObject:()=>Hn,isRejected:()=>Jn,isRejectedWithValue:()=>Gd,nanoid:()=>Wd,unwrapResult:()=>BS});function Ue(e){for(var t=arguments.length,r=Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map(function(i){return "'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Ze(e){return !!e&&!!e[ge]}function Qt(e){return !!e&&(function(t){if(!t||typeof t!="object")return !1;var r=Object.getPrototypeOf(t);return !r||r===Object.prototype}(e)||Array.isArray(e)||!!e[Dd]||!!e.constructor[Dd]||uu(e)||lu(e))}function Vr(e,t,r){r===void 0&&(r=!1),la(e)===0?(r?Object.keys:pa)(e).forEach(function(a){r&&typeof a=="symbol"||t(a,e[a],e);}):e.forEach(function(a,o){return t(o,a,e)});}function la(e){var t=e[ge];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:uu(e)?2:lu(e)?3:0}function da(e,t){return la(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function rS(e,t){return la(e)===2?e.get(t):e[t]}function vd(e,t,r){var a=la(e);a===2?e.set(t,r):a===3?(e.delete(t),e.add(r)):e[t]=r;}function Ad(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function uu(e){return iS&&e instanceof Map}function lu(e){return sS&&e instanceof Set}function tr(e){return e.o||e.t}function du(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Vd(e);delete t[ge];for(var r=pa(t),a=0;a<r.length;a++){var o=r[a],n=t[o];n.writable===!1&&(n.writable=!0,n.configurable=!0),(n.get||n.set)&&(t[o]={configurable:!0,writable:!0,enumerable:n.enumerable,value:e[o]});}return Object.create(Object.getPrototypeOf(e),t)}function _o(e,t){return t===void 0&&(t=!1),pu(e)||Ze(e)||!Qt(e)||(la(e)>1&&(e.set=e.add=e.clear=e.delete=aS),Object.freeze(e),t&&Vr(e,function(r,a){return _o(a,!0)},!0)),e}function aS(){Ue(2);}function pu(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function jt(e){var t=Cu[e];return t||Ue(18,e),t}function oS(e,t){Cu[e]||(Cu[e]=t);}function fu(){return Ho}function mu(e,t){t&&(jt("Patches"),e.u=[],e.s=[],e.v=t);}function Ln(e){gu(e),e.p.forEach(nS),e.p=null;}function gu(e){e===Ho&&(Ho=e.l);}function Pd(e){return Ho={p:[],l:Ho,h:e,m:!0,_:0}}function nS(e){var t=e[ge];t.i===0||t.i===1?t.j():t.g=!0;}function hu(e,t){t._=t.p.length;var r=t.p[0],a=e!==void 0&&e!==r;return t.h.O||jt("ES5").S(t,e,a),a?(r[ge].P&&(Ln(t),Ue(4)),Qt(e)&&(e=Bn(t,e),t.l||Un(t,e)),t.u&&jt("Patches").M(r[ge],e,t.u,t.s)):e=Bn(t,r,[]),Ln(t),t.u&&t.v(t.u,t.s),e!==kd?e:void 0}function Bn(e,t,r){if(pu(t))return t;var a=t[ge];if(!a)return Vr(t,function(n,i){return wd(e,a,t,n,i,r)},!0),t;if(a.A!==e)return t;if(!a.P)return Un(e,a.t,!0),a.t;if(!a.I){a.I=!0,a.A._--;var o=a.i===4||a.i===5?a.o=du(a.k):a.o;Vr(a.i===3?new Set(o):o,function(n,i){return wd(e,a,o,n,i,r)}),Un(e,o,!1),r&&e.u&&jt("Patches").R(a,r,e.u,e.s);}return a.o}function wd(e,t,r,a,o,n){if(Ze(o)){var i=Bn(e,o,n&&t&&t.i!==3&&!da(t.D,a)?n.concat(a):void 0);if(vd(r,a,i),!Ze(i))return;e.m=!1;}if(Qt(o)&&!pu(o)){if(!e.h.N&&e._<1)return;Bn(e,o),t&&t.A.l||Un(e,o);}}function Un(e,t,r){r===void 0&&(r=!1),e.h.N&&e.m&&_o(t,r);}function yu(e,t){var r=e[ge];return (r?tr(r):e)[t]}function Ed(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var a=Object.getOwnPropertyDescriptor(r,t);if(a)return a;r=Object.getPrototypeOf(r);}}function rr(e){e.P||(e.P=!0,e.l&&rr(e.l));}function Su(e){e.o||(e.o=du(e.t));}function xu(e,t,r){var a=uu(t)?jt("MapSet").T(t,r):lu(t)?jt("MapSet").F(t,r):e.O?function(o,n){var i=Array.isArray(o),s={i:i?1:0,A:n?n.A:fu(),P:!1,I:!1,D:{},l:n,t:o,k:null,o:null,j:null,C:!1},u=s,c=fa;i&&(u=[s],c=$n);var d=Proxy.revocable(u,c),l=d.revoke,f=d.proxy;return s.k=f,s.j=l,f}(t,r):jt("ES5").J(t,r);return (r?r.A:fu()).p.push(a),a}function zo(e){return Ze(e)||Ue(22,e),function t(r){if(!Qt(r))return r;var a,o=r[ge],n=la(r);if(o){if(!o.P&&(o.i<4||!jt("ES5").K(o)))return o.t;o.I=!0,a=Od(r,n),o.I=!1;}else a=Od(r,n);return Vr(a,function(i,s){o&&rS(o.t,i)===s||vd(a,i,t(s));}),n===3?new Set(a):a}(e)}function Od(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return du(e)}function qd(){function e(i,s){var u=n[i];return u?u.enumerable=s:n[i]=u={configurable:!0,enumerable:s,get:function(){var c=this[ge];return fa.get(c,i)},set:function(c){var d=this[ge];fa.set(d,i,c);}},u}function t(i){for(var s=i.length-1;s>=0;s--){var u=i[s][ge];if(!u.P)switch(u.i){case 5:a(u)&&rr(u);break;case 4:r(u)&&rr(u);}}}function r(i){for(var s=i.t,u=i.k,c=pa(u),d=c.length-1;d>=0;d--){var l=c[d];if(l!==ge){var f=s[l];if(f===void 0&&!da(s,l))return !0;var p=u[l],m=p&&p[ge];if(m?m.t!==f:!Ad(p,f))return !0}}var y=!!s[ge];return c.length!==pa(s).length+(y?0:1)}function a(i){var s=i.k;if(s.length!==i.t.length)return !0;var u=Object.getOwnPropertyDescriptor(s,s.length-1);return !(!u||u.get)}var n={};oS("ES5",{J:function(i,s){var u=Array.isArray(i),c=function(l,f){if(l){for(var p=Array(f.length),m=0;m<f.length;m++)Object.defineProperty(p,""+m,e(m,!0));return p}var y=Vd(f);delete y[ge];for(var S=pa(y),F=0;F<S.length;F++){var C=S[F];y[C]=e(C,l||!!y[C].enumerable);}return Object.create(Object.getPrototypeOf(f),y)}(u,i),d={i:u?5:4,A:s?s.A:fu(),P:!1,I:!1,D:{},l:s,t:i,k:c,o:null,g:!1,C:!1};return Object.defineProperty(c,ge,{value:d,writable:!0}),c},S:function(i,s,u){u?Ze(s)&&s[ge].A===i&&t(i.p):(i.u&&function c(d){if(d&&typeof d=="object"){var l=d[ge];if(l){var f=l.t,p=l.k,m=l.D,y=l.i;if(y===4)Vr(p,function(Q){Q!==ge&&(f[Q]!==void 0||da(f,Q)?m[Q]||c(p[Q]):(m[Q]=!0,rr(l)));}),Vr(f,function(Q){p[Q]!==void 0||da(p,Q)||(m[Q]=!1,rr(l));});else if(y===5){if(a(l)&&(rr(l),m.length=!0),p.length<f.length)for(var S=p.length;S<f.length;S++)m[S]=!1;else for(var F=f.length;F<p.length;F++)m[F]=!0;for(var C=Math.min(p.length,f.length),N=0;N<C;N++)m[N]===void 0&&c(p[N]);}}}}(i.p[0]),t(i.p));},K:function(i){return i.i===4?r(i):a(i)}});}var Id,Ho,Fu=typeof Symbol!="undefined"&&typeof Symbol("x")=="symbol",iS=typeof Map!="undefined",sS=typeof Set!="undefined",Td=typeof Proxy!="undefined"&&Proxy.revocable!==void 0&&typeof Reflect!="undefined",kd=Fu?Symbol.for("immer-nothing"):((Id={})["immer-nothing"]=!0,Id),Dd=Fu?Symbol.for("immer-draftable"):"__$immer_draftable",ge=Fu?Symbol.for("immer-state"):"__$immer_state";var pa=typeof Reflect!="undefined"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Vd=Object.getOwnPropertyDescriptors||function(e){var t={};return pa(e).forEach(function(r){t[r]=Object.getOwnPropertyDescriptor(e,r);}),t},Cu={},fa={get:function(e,t){if(t===ge)return e;var r=tr(e);if(!da(r,t))return function(o,n,i){var s,u=Ed(n,i);return u?"value"in u?u.value:(s=u.get)===null||s===void 0?void 0:s.call(o.k):void 0}(e,r,t);var a=r[t];return e.I||!Qt(a)?a:a===yu(e.t,t)?(Su(e),e.o[t]=xu(e.A.h,a,e)):a},has:function(e,t){return t in tr(e)},ownKeys:function(e){return Reflect.ownKeys(tr(e))},set:function(e,t,r){var a=Ed(tr(e),t);if(a==null?void 0:a.set)return a.set.call(e.k,r),!0;if(!e.P){var o=yu(tr(e),t),n=o==null?void 0:o[ge];if(n&&n.t===r)return e.o[t]=r,e.D[t]=!1,!0;if(Ad(r,o)&&(r!==void 0||da(e.t,t)))return !0;Su(e),rr(e);}return e.o[t]=r,e.D[t]=!0,!0},deleteProperty:function(e,t){return yu(e.t,t)!==void 0||t in e.t?(e.D[t]=!1,Su(e),rr(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=tr(e),a=Reflect.getOwnPropertyDescriptor(r,t);return a&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:a.enumerable,value:r[t]}},defineProperty:function(){Ue(11);},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Ue(12);}},$n={};Vr(fa,function(e,t){$n[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)};}),$n.deleteProperty=function(e,t){return fa.deleteProperty.call(this,e[0],t)},$n.set=function(e,t,r){return fa.set.call(this,e[0],t,r,e[0])};var cS=function(){function e(r){this.O=Td,this.N=!0,typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this);}var t=e.prototype;return t.produce=function(r,a,o){if(typeof r=="function"&&typeof a!="function"){var n=a;a=r;var i=this;return function(l){var f=this;l===void 0&&(l=n);for(var p=arguments.length,m=Array(p>1?p-1:0),y=1;y<p;y++)m[y-1]=arguments[y];return i.produce(l,function(S){var F;return (F=a).call.apply(F,[f,S].concat(m))})}}var s;if(typeof a!="function"&&Ue(6),o!==void 0&&typeof o!="function"&&Ue(7),Qt(r)){var u=Pd(this),c=xu(this,r,void 0),d=!0;try{s=a(c),d=!1;}finally{d?Ln(u):gu(u);}return typeof Promise!="undefined"&&s instanceof Promise?s.then(function(l){return mu(u,o),hu(l,u)},function(l){throw Ln(u),l}):(mu(u,o),hu(s,u))}if(!r||typeof r!="object")return (s=a(r))===kd?void 0:(s===void 0&&(s=r),this.N&&_o(s,!0),s);Ue(21,r);},t.produceWithPatches=function(r,a){var o,n,i=this;return typeof r=="function"?function(s){for(var u=arguments.length,c=Array(u>1?u-1:0),d=1;d<u;d++)c[d-1]=arguments[d];return i.produceWithPatches(s,function(l){return r.apply(void 0,[l].concat(c))})}:[this.produce(r,a,function(s,u){o=s,n=u;}),o,n]},t.createDraft=function(r){Qt(r)||Ue(8),Ze(r)&&(r=zo(r));var a=Pd(this),o=xu(this,r,void 0);return o[ge].C=!0,gu(a),o},t.finishDraft=function(r,a){var o=r&&r[ge],n=o.A;return mu(n,a),hu(void 0,n)},t.setAutoFreeze=function(r){this.N=r;},t.setUseProxies=function(r){r&&!Td&&Ue(20),this.O=r;},t.applyPatches=function(r,a){var o;for(o=a.length-1;o>=0;o--){var n=a[o];if(n.path.length===0&&n.op==="replace"){r=n.value;break}}var i=jt("Patches").$;return Ze(r)?i(r,a):this.produce(r,function(s){return i(s,a.slice(o+1))})},e}(),Le=new cS,uS=Le.produce;Le.produceWithPatches.bind(Le);Le.setAutoFreeze.bind(Le);Le.setUseProxies.bind(Le);Le.applyPatches.bind(Le);Le.createDraft.bind(Le);Le.finishDraft.bind(Le);var Wo=uS;var yt=xe(jn());M(g,xe(jn()));function lS(e,t){return e===t}function dS(e,t,r){if(t===null||r===null||t.length!==r.length)return !1;for(var a=t.length,o=0;o<a;o++)if(!e(t[o],r[o]))return !1;return !0}function pS(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:lS,r=null,a=null;return function(){return dS(t,r,arguments)||(a=e.apply(null,arguments)),r=arguments,a}}function fS(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(a){return typeof a=="function"})){var r=t.map(function(a){return typeof a}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, "+("instead received the following types: ["+r+"]"))}return t}function mS(e){for(var t=arguments.length,r=Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];return function(){for(var o=arguments.length,n=Array(o),i=0;i<o;i++)n[i]=arguments[i];var s=0,u=n.pop(),c=fS(n),d=e.apply(void 0,[function(){return s++,u.apply(null,arguments)}].concat(r)),l=e(function(){for(var f=[],p=c.length,m=0;m<p;m++)f.push(c[m].apply(null,arguments));return d.apply(null,f)});return l.resultFunc=u,l.dependencies=c,l.recomputations=function(){return s},l.resetRecomputations=function(){return s=0},l}}var _n=mS(pS);function Nd(e){return function(t){var r=t.dispatch,a=t.getState;return function(o){return function(n){return typeof n=="function"?n(r,a,e):o(n)}}}}var Md=Nd();Md.withExtraArgument=Nd;var Yo=Md;var Lt=function(){var t=_n.apply(void 0,arguments),r=function(o){for(var n=arguments.length,i=new Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];return t.apply(void 0,[Ze(o)?zo(o):o].concat(i))};return r};function ar(){return ar=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);}return e},ar.apply(this,arguments)}function gS(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;}function Ru(e){return Ru=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},Ru(e)}function zn(e,t){return zn=Object.setPrototypeOf||function(a,o){return a.__proto__=o,a},zn(e,t)}function hS(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return !1;if(typeof Proxy=="function")return !0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return !1}}function Nr(e,t,r){return hS()?Nr=Reflect.construct:Nr=function(o,n,i){var s=[null];s.push.apply(s,n);var u=Function.bind.apply(o,s),c=new u;return i&&zn(c,i.prototype),c},Nr.apply(null,arguments)}function yS(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function bu(e){var t=typeof Map=="function"?new Map:void 0;return bu=function(a){if(a===null||!yS(a))return a;if(typeof a!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t!="undefined"){if(t.has(a))return t.get(a);t.set(a,o);}function o(){return Nr(a,arguments,Ru(this).constructor)}return o.prototype=Object.create(a.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),zn(o,a)},bu(e)}var SS=typeof window!="undefined"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?yt.compose:yt.compose.apply(null,arguments)};function Hn(e){if(typeof e!="object"||e===null)return !1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}var jd=function(e){gS(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.concat=function(){for(var o,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return Nr(t,(o=e.prototype.concat).call.apply(o,[this].concat(i)))},r.prepend=function(){for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return n.length===1&&Array.isArray(n[0])?Nr(t,n[0].concat(this)):Nr(t,n.concat(this))},t}(bu(Array));function Ud(e){return typeof e!="object"||e===null||typeof e=="undefined"}function CS(e){return function(){return function(c){return function(d){return c(d)}}};}function vu(e){return typeof e=="undefined"||e===null||typeof e=="string"||typeof e=="boolean"||typeof e=="number"||Array.isArray(e)||Hn(e)}function Wn(e,t,r,a,o){t===void 0&&(t=[]),r===void 0&&(r=vu),o===void 0&&(o=[]);var n;if(!r(e))return {keyPath:t.join(".")||"<root>",value:e};if(typeof e!="object"||e===null)return !1;for(var i=a!=null?a(e):Object.entries(e),s=o.length>0,u=i,c=Array.isArray(u),d=0,u=c?u:u[Symbol.iterator]();;){var l;if(c){if(d>=u.length)break;l=u[d++];}else {if(d=u.next(),d.done)break;l=d.value;}var f=l,p=f[0],m=f[1],y=t.concat(p);if(!(s&&o.indexOf(y.join("."))>=0)){if(!r(m))return {keyPath:y.join("."),value:m};if(typeof m=="object"&&(n=Wn(m,y,r,a,o),n))return n}}return !1}function RS(e){return function(){return function(p){return function(m){return p(m)}}};}function bS(e){return typeof e=="boolean"}function vS(){return function(t){return Yn(t)}}function Yn(e){e===void 0&&(e={});var t=e,r=t.thunk,a=r===void 0?!0:r,u=new jd;if(a&&(bS(a)?u.push(Yo):u.push(Yo.withExtraArgument(a.extraArgument))),!1);return u}var AS=!0;function Au(e){var t=vS(),r=e||{},a=r.reducer,o=a===void 0?void 0:a,n=r.middleware,i=n===void 0?t():n,s=r.devTools,u=s===void 0?!0:s,c=r.preloadedState,d=c===void 0?void 0:c,l=r.enhancers,f=l===void 0?void 0:l,p;if(typeof o=="function")p=o;else if(Hn(o))p=(0, yt.combineReducers)(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var m=yt.applyMiddleware.apply(void 0,typeof i=="function"?i(t):i),y=yt.compose;u&&(y=SS(ar({trace:!AS},typeof u=="object"&&u)));var S=[m];Array.isArray(f)?S=[m].concat(f):typeof f=="function"&&(S=f(S));var F=y.apply(void 0,S);return (0, yt.createStore)(p,d,F)}function h$1(e,t){function r(){if(t){var a=t.apply(void 0,arguments);if(!a)throw new Error("prepareAction did not return an object");return ar({type:e,payload:a.payload},"meta"in a&&{meta:a.meta},{},"error"in a&&{error:a.error})}return {type:e,payload:arguments.length<=0?void 0:arguments[0]}}return r.toString=function(){return ""+e},r.type=e,r.match=function(a){return a.type===e},r}function PS(e){return Hn(e)&&typeof e.type=="string"&&Object.keys(e).every(wS)}function wS(e){return ["type","payload","error","meta"].indexOf(e)>-1}function ES(e){return ""+e}function zd(e){var t={},r=[],a,o={addCase:function(i,s){var u=typeof i=="string"?i:i.type;if(u in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[u]=s,o},addMatcher:function(i,s){return r.push({matcher:i,reducer:s}),o},addDefaultCase:function(i){return a=i,o}};return e(o),[t,r,a]}function O(e,t,r,a){r===void 0&&(r=[]);var o=typeof t=="function"?zd(t):[t,r,a],n=o[0],i=o[1],s=o[2];return function(u,c){u===void 0&&(u=e);var d=[n[c.type]].concat(i.filter(function(l){var f=l.matcher;return f(c)}).map(function(l){var f=l.reducer;return f}));return d.filter(function(l){return !!l}).length===0&&(d=[s]),d.reduce(function(l,f){if(f)if(Ze(l)){var p=l,m=f(p,c);return typeof m=="undefined"?l:m}else {if(Qt(l))return Wo(l,function(S){return f(S,c)});var y=f(l,c);if(typeof y=="undefined"){if(l===null)return l;throw Error("A case reducer on a non-draftable value must not return undefined")}return y}return l},u)}}function OS(e,t){return e+"/"+t}function qS(e){var t=e.name,r=e.initialState;if(!t)throw new Error("`name` is a required option for createSlice");var a=e.reducers||{},o=typeof e.extraReducers=="undefined"?[]:typeof e.extraReducers=="function"?zd(e.extraReducers):[e.extraReducers],n=o[0],i=n===void 0?{}:n,s=o[1],u=s===void 0?[]:s,c=o[2],d=c===void 0?void 0:c,l=Object.keys(a),f={},p={},m={};l.forEach(function(F){var C=a[F],N=OS(t,F),Q,J;"reducer"in C?(Q=C.reducer,J=C.prepare):Q=C,f[F]=Q,p[N]=Q,m[F]=J?h$1(N,J):h$1(N);});var y=ar({},i,{},p),S=O(r,y,u,d);return {name:t,reducer:S,actions:m,caseReducers:f}}function IS(){return {ids:[],entities:{}}}function TS(){function e(t){return t===void 0&&(t={}),Object.assign(IS(),t)}return {getInitialState:e}}function kS(){function e(t){var r=function(d){return d.ids},a=function(d){return d.entities},o=Lt(r,a,function(c,d){return c.map(function(l){return d[l]})}),n=function(d,l){return l},i=function(d,l){return d[l]},s=Lt(r,function(c){return c.length});if(!t)return {selectIds:r,selectEntities:a,selectAll:o,selectTotal:s,selectById:Lt(a,n,i)};var u=Lt(t,a);return {selectIds:Lt(t,r),selectEntities:u,selectAll:Lt(t,o),selectTotal:Lt(t,s),selectById:Lt(u,n,i)}}return {getSelectors:e}}function DS(e){var t=qe(function(r,a){return e(a)});return function(a){return t(a,void 0)}}function qe(e){return function(r,a){function o(i){return PS(i)}var n=function(s){o(a)?e(a.payload,s):e(a,s);};return Ze(r)?(n(r),r):Wo(r,n)}}function ma(e,t){var r=t(e);return r}function Hd(e){function t(f,p){var m=ma(f,e);m in p.entities||(p.ids.push(m),p.entities[m]=f);}function r(f,p){Array.isArray(f)||(f=Object.values(f));for(var m=f,y=Array.isArray(m),S=0,m=y?m:m[Symbol.iterator]();;){var F;if(y){if(S>=m.length)break;F=m[S++];}else {if(S=m.next(),S.done)break;F=S.value;}var C=F;t(C,p);}}function a(f,p){Array.isArray(f)||(f=Object.values(f)),p.ids=[],p.entities={},r(f,p);}function o(f,p){return n([f],p)}function n(f,p){var m=!1;f.forEach(function(y){y in p.entities&&(delete p.entities[y],m=!0);}),m&&(p.ids=p.ids.filter(function(y){return y in p.entities}));}function i(f){Object.assign(f,{ids:[],entities:{}});}function s(f,p,m){var y=m.entities[p.id],S=Object.assign({},y,p.changes),F=ma(S,e),C=F!==p.id;return C&&(f[p.id]=F,delete m.entities[p.id]),m.entities[F]=S,C}function u(f,p){return c([f],p)}function c(f,p){var m={},y={};f.forEach(function(C){C.id in p.entities&&(y[C.id]={id:C.id,changes:ar({},y[C.id]?y[C.id].changes:null,{},C.changes)});}),f=Object.values(y);var S=f.length>0;if(S){var F=f.filter(function(C){return s(m,C,p)}).length>0;F&&(p.ids=p.ids.map(function(C){return m[C]||C}));}}function d(f,p){return l([f],p)}function l(f,p){Array.isArray(f)||(f=Object.values(f));for(var m=[],y=[],S=f,F=Array.isArray(S),C=0,S=F?S:S[Symbol.iterator]();;){var N;if(F){if(C>=S.length)break;N=S[C++];}else {if(C=S.next(),C.done)break;N=C.value;}var Q=N,J=ma(Q,e);J in p.entities?y.push({id:J,changes:Q}):m.push(Q);}c(y,p),r(m,p);}return {removeAll:DS(i),addOne:qe(t),addMany:qe(r),setAll:qe(a),updateOne:qe(u),updateMany:qe(c),upsertOne:qe(d),upsertMany:qe(l),removeOne:qe(o),removeMany:qe(n)}}function VS(e,t){var r=Hd(e),a=r.removeOne,o=r.removeMany,n=r.removeAll;function i(S,F){return s([S],F)}function s(S,F){Array.isArray(S)||(S=Object.values(S));var C=S.filter(function(N){return !(ma(N,e)in F.entities)});C.length!==0&&y(C,F);}function u(S,F){Array.isArray(S)||(S=Object.values(S)),F.entities={},F.ids=[],s(S,F);}function c(S,F){return l([S],F)}function d(S,F,C){if(!(F.id in C.entities))return !1;var N=C.entities[F.id],Q=Object.assign({},N,F.changes),J=ma(Q,e);return delete C.entities[F.id],S.push(Q),J!==F.id}function l(S,F){var C=[];S.forEach(function(N){return d(C,N,F)}),C.length!==0&&y(C,F);}function f(S,F){return p([S],F)}function p(S,F){Array.isArray(S)||(S=Object.values(S));for(var C=[],N=[],Q=S,J=Array.isArray(Q),ee=0,Q=J?Q:Q[Symbol.iterator]();;){var X;if(J){if(ee>=Q.length)break;X=Q[ee++];}else {if(ee=Q.next(),ee.done)break;X=ee.value;}var v=X,U=ma(v,e);U in F.entities?N.push({id:U,changes:v}):C.push(v);}l(N,F),s(C,F);}function m(S,F){if(S.length!==F.length)return !1;for(var C=0;C<S.length&&C<F.length;C++)if(S[C]!==F[C])return !1;return !0}function y(S,F){S.sort(t),S.forEach(function(J){F.entities[e(J)]=J;});var C=Object.values(F.entities);C.sort(t);var N=C.map(e),Q=F.ids;m(Q,N)||(F.ids=N);}return {removeOne:a,removeMany:o,removeAll:n,addOne:qe(i),updateOne:qe(c),upsertOne:qe(f),setAll:qe(u),addMany:qe(s),updateMany:qe(l),upsertMany:qe(p)}}function NS(e){e===void 0&&(e={});var t=ar({sortComparer:!1,selectId:function(u){return u.id}},e),r=t.selectId,a=t.sortComparer,o=TS(),n=kS(),i=a?VS(r,a):Hd(r);return ar({selectId:r,sortComparer:a},o,{},n,{},i)}typeof Symbol!="undefined"?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";typeof Symbol!="undefined"?Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")):"@@asyncIterator";function MS(e,t){try{var r=e();}catch(a){return t(a)}return r&&r.then?r.then(void 0,t):r}var QS="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Wd=function(t){t===void 0&&(t=21);for(var r="",a=t;a--;)r+=QS[Math.random()*64|0];return r},jS=["name","message","stack","code"],Kn=function(t){this.payload=t,this.name="RejectWithValue",this.message="Rejected";},LS=function(t){if(typeof t=="object"&&t!==null){for(var r={},a=jS,o=Array.isArray(a),n=0,a=o?a:a[Symbol.iterator]();;){var i;if(o){if(n>=a.length)break;i=a[n++];}else {if(n=a.next(),n.done)break;i=n.value;}var s=i;typeof t[s]=="string"&&(r[s]=t[s]);}return r}return {message:String(t)}};function Z(e,t,r){var a=h$1(e+"/fulfilled",function(c,d,l){return {payload:c,meta:{arg:l,requestId:d,requestStatus:"fulfilled"}}}),o=h$1(e+"/pending",function(c,d){return {payload:void 0,meta:{arg:d,requestId:c,requestStatus:"pending"}}}),n=h$1(e+"/rejected",function(c,d,l){var f=c instanceof Kn,p=!!c&&c.name==="AbortError",m=!!c&&c.name==="ConditionError";return {payload:c instanceof Kn?c.payload:void 0,error:(r&&r.serializeError||LS)(c||"Rejected"),meta:{arg:l,requestId:d,rejectedWithValue:f,requestStatus:"rejected",aborted:p,condition:m}}}),s=typeof AbortController!="undefined"?AbortController:function(){function c(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return !1},onabort:function(){},removeEventListener:function(){}};}var d=c.prototype;return d.abort=function(){},c}();function u(c){return function(d,l,f){var p=Wd(),m=new s,y,S=new Promise(function(Q,J){return m.signal.addEventListener("abort",function(){return J({name:"AbortError",message:y||"Aborted"})})}),F=!1;function C(Q){F&&(y=Q,m.abort());}var N=function(){try{var Q=function(U){if(J)return U;var se=r&&!r.dispatchConditionRejection&&n.match(ee)&&ee.meta.condition;return se||d(ee),ee},J=!1,ee,X=MS(function(){if(r&&r.condition&&r.condition(c,{getState:l,extra:f})===!1)throw {name:"ConditionError",message:"Aborted due to condition callback returning false."};return F=!0,d(o(p,c)),Promise.resolve(Promise.race([S,Promise.resolve(t(c,{dispatch:d,getState:l,extra:f,requestId:p,signal:m.signal,rejectWithValue:function(U){return new Kn(U)}})).then(function(v){return v instanceof Kn?n(v,p,c):a(v,p,c)})])).then(function(v){ee=v;})},function(v){ee=n(v,p,c);});return Promise.resolve(X&&X.then?X.then(Q):Q(X))}catch(v){return Promise.reject(v)}}();return Object.assign(N,{abort:C,requestId:p,arg:c})}}return Object.assign(u,{pending:o,rejected:n,fulfilled:a,typePrefix:e})}function BS(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}var US=function(t){return t&&typeof t.match=="function"},Yd=function(t,r){return US(t)?t.match(r):t(r)};function Ko(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(a){return t.some(function(o){return Yd(o,a)})}}function Pu(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(a){return t.every(function(o){return Yd(o,a)})}}function Gn(e,t){if(!e||!e.meta)return !1;var r=typeof e.meta.requestId=="string",a=t.indexOf(e.meta.requestStatus)>-1;return r&&a}function Go(e){return typeof e[0]=="function"&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function Kd(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length===0?function(a){return Gn(a,["pending"])}:Go(t)?function(a){var o=t.map(function(i){return i.pending}),n=Ko.apply(void 0,o);return n(a)}:Kd()(t[0])}function Jn(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length===0?function(a){return Gn(a,["rejected"])}:Go(t)?function(a){var o=t.map(function(i){return i.rejected}),n=Ko.apply(void 0,o);return n(a)}:Jn()(t[0])}function Gd(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=function(n){return n&&n.meta&&n.meta.rejectedWithValue};return t.length===0?function(o){var n=Pu(Jn.apply(void 0,t),a);return n(o)}:Go(t)?function(o){var n=Pu(Jn.apply(void 0,t),a);return n(o)}:Gd()(t[0])}function Jd(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length===0?function(a){return Gn(a,["fulfilled"])}:Go(t)?function(a){var o=t.map(function(i){return i.fulfilled}),n=Ko.apply(void 0,o);return n(a)}:Jd()(t[0])}function Xd(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length===0?function(a){return Gn(a,["pending","fulfilled","rejected"])}:Go(t)?function(a){for(var o=[],n=t,i=Array.isArray(n),s=0,n=i?n:n[Symbol.iterator]();;){var u;if(i){if(s>=n.length)break;u=n[s++];}else {if(s=n.next(),s.done)break;u=s.value;}var c=u;o.push(c.pending,c.rejected,c.fulfilled);}var d=Ko.apply(void 0,o);return d(a)}:Xd()(t[0])}qd();function Xn(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r}function ae(e,t,r,a){function o(n){return n instanceof r?n:new r(function(i){i(n);})}return new(r||(r=Promise))(function(n,i){function s(d){try{c(a.next(d));}catch(l){i(l);}}function u(d){try{c(a.throw(d));}catch(l){i(l);}}function c(d){d.done?n(d.value):o(d.value).then(s,u);}c((a=a.apply(e,t||[])).next());})}var ye;(function(e){e.search="search",e.click="click",e.custom="custom",e.view="view",e.collect="collect";})(ye||(ye={}));function $S(){return typeof window!="undefined"}function wu(){return typeof navigator!="undefined"}function Zd(){return typeof document!="undefined"}function Eu(){try{return typeof localStorage!="undefined"}catch{return !1}}function _S(){try{return typeof sessionStorage!="undefined"}catch{return !1}}function ep(){return wu()&&navigator.cookieEnabled}function zS(){return typeof crypto!="undefined"}function HS(){return zS()&&typeof crypto.getRandomValues!="undefined"}var WS=[ye.click,ye.custom,ye.search,ye.view],YS=(e,t)=>WS.indexOf(e)!==-1?Object.assign({language:Zd()?document.documentElement.lang:"unknown",userAgent:wu()?navigator.userAgent:"unknown"},t):t,or=class{static set(t,r,a){var o,n,i,s,u;a?(i=new Date,i.setTime(i.getTime()+a),s="; expires="+i.toGMTString()):s="",u=location.hostname,u.indexOf(".")===-1?document.cookie=t+"="+r+s+"; path=/":(n=u.split("."),n.shift(),o="."+n.join("."),tp({name:t,value:r,expires:s,domain:o}),(or.get(t)==null||or.get(t)!=r)&&(o="."+u,tp({name:t,value:r,expires:s,domain:o})));}static get(t){for(var r=t+"=",a=document.cookie.split(";"),o=0;o<a.length;o++){var n=a[o];if(n=n.replace(/^\s+/,""),n.indexOf(r)==0)return n.substring(r.length,n.length)}return null}static erase(t){or.set(t,"",-1);}};function tp(e){let{name:t,value:r,expires:a,domain:o}=e;document.cookie=`${t}=${r}${a}; path=/; domain=${o}; SameSite=Lax`;}function KS(){return Eu()?localStorage:ep()?new nr:_S()?sessionStorage:new ga}var nr=class{getItem(t){return or.get(`${nr.prefix}${t}`)}removeItem(t){or.erase(`${nr.prefix}${t}`);}setItem(t,r){or.set(`${nr.prefix}${t}`,r);}};nr.prefix="coveo_";var rp=class{constructor(){this.cookieStorage=new nr;}getItem(t){return localStorage.getItem(t)||this.cookieStorage.getItem(t)}removeItem(t){this.cookieStorage.removeItem(t),localStorage.removeItem(t);}setItem(t,r){localStorage.setItem(t,r),this.cookieStorage.setItem(t,r);}},ga=class{getItem(t){return null}removeItem(t){}setItem(t,r){}},Jo="__coveo.analytics.history",ap=20,op=1e3*60,np=75,Xo=class{constructor(t){this.store=t||KS();}addElement(t){t.internalTime=new Date().getTime(),this.cropQueryElement(t);let r=this.getHistoryWithInternalTime();r!=null?this.isValidEntry(t)&&this.setHistory([t].concat(r)):this.setHistory([t]);}addElementAsync(t){return ae(this,void 0,void 0,function*(){t.internalTime=new Date().getTime(),this.cropQueryElement(t);let r=yield this.getHistoryWithInternalTimeAsync();r!=null?this.isValidEntry(t)&&this.setHistory([t].concat(r)):this.setHistory([t]);})}getHistory(){let t=this.getHistoryWithInternalTime();return this.stripInternalTime(t)}getHistoryAsync(){return ae(this,void 0,void 0,function*(){let t=yield this.getHistoryWithInternalTimeAsync();return this.stripInternalTime(t)})}getHistoryWithInternalTime(){try{let t=this.store.getItem(Jo);return t&&typeof t=="string"?JSON.parse(t):[]}catch{return []}}getHistoryWithInternalTimeAsync(){return ae(this,void 0,void 0,function*(){try{let t=yield this.store.getItem(Jo);return t?JSON.parse(t):[]}catch{return []}})}setHistory(t){try{this.store.setItem(Jo,JSON.stringify(t.slice(0,ap)));}catch{}}clear(){try{this.store.removeItem(Jo);}catch{}}getMostRecentElement(){let t=this.getHistoryWithInternalTime();return t!=null?t.sort((a,o)=>(o.internalTime||0)-(a.internalTime||0))[0]:null}cropQueryElement(t){t.name&&t.name.toLowerCase()=="query"&&t.value!=null&&(t.value=t.value.slice(0,np));}isValidEntry(t){let r=this.getMostRecentElement();return r&&r.value==t.value?(t.internalTime||0)-(r.internalTime||0)>op:!0}stripInternalTime(t){return t.map(r=>{let{name:a,time:o,value:n}=r;return {name:a,time:o,value:n}})}},ip=Object.freeze({__proto__:null,STORE_KEY:Jo,MAX_NUMBER_OF_HISTORY_ELEMENTS:ap,MIN_THRESHOLD_FOR_DUPLICATE_VALUE:op,MAX_VALUE_SIZE:np,HistoryStore:Xo,default:Xo}),GS=(e,t)=>ae(void 0,void 0,void 0,function*(){return e===ye.view?(yield JS(t.contentIdValue),Object.assign({location:window.location.toString(),referrer:document.referrer,title:document.title},t)):t}),JS=e=>ae(void 0,void 0,void 0,function*(){let t=new Xo,r={name:"PageView",value:e,time:JSON.stringify(new Date)};yield t.addElementAsync(r);}),ha=e=>e?(Number(e)^XS(new Uint8Array(1))[0]%16>>Number(e)/4).toString(16):(`${1e7}`+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,ha),XS=e=>{if(HS())return crypto.getRandomValues(e);for(var t=0,r=0;t<e.length;t++)(t&3)==0&&(r=Math.random()*4294967296),e[t]=r>>>((t&3)<<3)&255;return e},$e=Object.keys,Ou={id:"svc_ticket_id",subject:"svc_ticket_subject",description:"svc_ticket_description",category:"svc_ticket_category",productId:"svc_ticket_product_id",custom:"svc_ticket_custom"},ZS=$e(Ou).map(e=>Ou[e]),ex=[...ZS].join("|"),tx=new RegExp(`^(${ex}$)`),rx={svcAction:"svc_action",svcActionData:"svc_action_data"},ox=e=>tx.test(e),nx=[ox],sp={id:"id",name:"nm",brand:"br",category:"ca",variant:"va",price:"pr",quantity:"qt",coupon:"cc",position:"ps",group:"group"},cp={id:"id",name:"nm",brand:"br",category:"ca",variant:"va",position:"ps",price:"pr",group:"group"},Ie={action:"pa",list:"pal",listSource:"pls"},Zn={id:"ti",revenue:"tr",tax:"tt",shipping:"ts",coupon:"tcc",affiliation:"ta",step:"cos",option:"col"},ix=["loyaltyCardId","loyaltyTier","thirdPartyPersona","companyName","favoriteStore","storeName","userIndustry","userRole","userDepartment","businessUnit"],qu={id:"quoteId",affiliation:"quoteAffiliation"},Iu={id:"reviewId",rating:"reviewRating",comment:"reviewComment"},sx={add:Ie,bookmark_add:Ie,bookmark_remove:Ie,click:Ie,checkout:Ie,checkout_option:Ie,detail:Ie,impression:Ie,remove:Ie,refund:Object.assign(Object.assign({},Ie),Zn),purchase:Object.assign(Object.assign({},Ie),Zn),quickview:Ie,quote:Object.assign(Object.assign({},Ie),qu),review:Object.assign(Object.assign({},Ie),Iu)},cx=$e(sp).map(e=>sp[e]),ux=$e(cp).map(e=>cp[e]),lx=$e(Ie).map(e=>Ie[e]),dx=$e(Zn).map(e=>Zn[e]),px=$e(Iu).map(e=>Iu[e]),fx=$e(qu).map(e=>qu[e]),mx=[...cx,"custom"].join("|"),gx=[...ux,"custom"].join("|"),up="(pr[0-9]+)",lp="(il[0-9]+pi[0-9]+)",hx=new RegExp(`^${up}(${mx})$`),yx=new RegExp(`^(${lp}(${gx}))|(il[0-9]+nm)$`),Sx=new RegExp(`^(${lx.join("|")})$`),xx=new RegExp(`^(${dx.join("|")})$`),Fx=new RegExp(`^${up}custom$`),Cx=new RegExp(`^${lp}custom$`),Rx=new RegExp(`^(${[...ix,...px,...fx].join("|")})$`),bx=e=>hx.test(e),vx=e=>yx.test(e),Ax=e=>Sx.test(e),Px=e=>xx.test(e),wx=e=>Rx.test(e),Ex=[vx,bx,Ax,Px,wx],Ox=[Fx,Cx],qx={anonymizeIp:"aip"},Ix={eventCategory:"ec",eventAction:"ea",eventLabel:"el",eventValue:"ev",page:"dp",visitorId:"cid",clientId:"cid",userId:"uid",currencyCode:"cu"},Tx={hitType:"t",pageViewId:"pid",encoding:"de",location:"dl",referrer:"dr",screenColor:"sd",screenResolution:"sr",title:"dt",userAgent:"ua",language:"ul",eventId:"z",time:"tm"},kx=["contentId","contentIdKey","contentType","searchHub","tab","searchUid","permanentId","contentLocale"],Dx=Object.assign(Object.assign(Object.assign(Object.assign({},qx),Ix),Tx),kx.reduce((e,t)=>Object.assign(Object.assign({},e),{[t]:t}),{})),Tu=Object.assign(Object.assign({},Dx),rx),Vx=e=>{let t=!!e.action&&sx[e.action]||{};return $e(e).reduce((r,a)=>{let o=t[a]||Tu[a]||a;return Object.assign(Object.assign({},r),{[o]:e[a]})},{})},Nx=$e(Tu).map(e=>Tu[e]),Mx=e=>Nx.indexOf(e)!==-1,Qx=e=>e==="custom",jx=e=>[...Ex,...nx,Mx,Qx].some(t=>t(e)),Lx=e=>$e(e).reduce((t,r)=>{let a=Bx(r);return a?Object.assign(Object.assign({},t),Ux(a,e[r])):Object.assign(Object.assign({},t),{[r]:e[r]})},{}),Bx=e=>{let t;return [...Ox].every(r=>{var a;return t=(a=r.exec(e))===null||a===void 0?void 0:a[1],!Boolean(t)}),t},Ux=(e,t)=>$e(t).reduce((r,a)=>Object.assign(Object.assign({},r),{[`${e}${a}`]:t[a]}),{}),dp=class{constructor(t){this.opts=t;}sendEvent(t,r){return ae(this,void 0,void 0,function*(){if(!navigator.sendBeacon)throw new Error('navigator.sendBeacon is not supported in this browser. Consider adding a polyfill like "sendbeacon-polyfill".');let{baseUrl:a,preprocessRequest:o}=this.opts,n=this.encodeForEventType(t,r),i=yield this.getQueryParamsForEventType(t),s={url:`${a}/analytics/${t}?${i}`,body:new Blob([n],{type:"application/x-www-form-urlencoded"})},{url:u,body:c}=Object.assign(Object.assign({},s),o?yield o(s,"analyticsBeacon"):{});console.log(`Sending beacon for "${t}" with: `,JSON.stringify(r)),navigator.sendBeacon(u,c);})}encodeForEventType(t,r){return this.isEventTypeLegacy(t)?this.encodeForLegacyType(t,r):this.encodeForFormUrlEncoded(Object.assign({access_token:this.opts.token},r))}getQueryParamsForEventType(t){return ae(this,void 0,void 0,function*(){let{token:r,visitorIdProvider:a}=this.opts,o=yield a.getCurrentVisitorId();return [r&&this.isEventTypeLegacy(t)?`access_token=${r}`:"",o?`visitorId=${o}`:"","discardVisitInfo=true"].filter(n=>!!n).join("&")})}isEventTypeLegacy(t){return [ye.click,ye.custom,ye.search,ye.view].indexOf(t)!==-1}encodeForLegacyType(t,r){return `${t}Event=${encodeURIComponent(JSON.stringify(r))}`}encodeForFormUrlEncoded(t){return Object.keys(t).filter(r=>!!t[r]).map(r=>`${encodeURIComponent(r)}=${encodeURIComponent(this.encodeValue(t[r]))}`).join("&")}encodeValue(t){return typeof t=="number"||typeof t=="string"||typeof t=="boolean"?t:JSON.stringify(t)}},pp=class{sendEvent(t,r){return ae(this,void 0,void 0,function*(){return Promise.resolve()})}},$x=window.fetch,ku=class{constructor(t){this.opts=t;}sendEvent(t,r){return ae(this,void 0,void 0,function*(){let{baseUrl:a,visitorIdProvider:o,preprocessRequest:n}=this.opts,i=this.shouldAppendVisitorId(t)?yield this.getVisitorIdParam():"",s={url:`${a}/analytics/${t}${i}`,credentials:"include",mode:"cors",headers:this.getHeaders(),method:"POST",body:JSON.stringify(r)},u=Object.assign(Object.assign({},s),n?yield n(s,"analyticsFetch"):{}),{url:c}=u,d=Xn(u,["url"]),l=yield $x(c,d);if(l.ok){let f=yield l.json();return f.visitorId&&o.setCurrentVisitorId(f.visitorId),f}else {try{l.json();}catch{}throw console.error(`An error has occured when sending the "${t}" event.`,l,r),new Error(`An error has occurred when sending the "${t}" event. Check the console logs for more details.`)}})}shouldAppendVisitorId(t){return [ye.click,ye.custom,ye.search,ye.view].indexOf(t)!==-1}getVisitorIdParam(){return ae(this,void 0,void 0,function*(){let{visitorIdProvider:t}=this.opts,r=yield t.getCurrentVisitorId();return r?`?visitor=${r}`:""})}getHeaders(){let{token:t}=this.opts;return Object.assign(Object.assign({},t?{Authorization:`Bearer ${t}`}:{}),{"Content-Type":"application/json"})}},fp=class{constructor(t,r){Eu()&&ep()?this.storage=new rp:Eu()?this.storage=localStorage:(console.warn("BrowserRuntime detected no valid storage available.",this),this.storage=new ga),this.client=new ku(t),this.beaconClient=new dp(t),window.addEventListener("beforeunload",()=>{let a=r();for(let{eventType:o,payload:n}of a)this.beaconClient.sendEvent(o,n);});}},mp=class{constructor(t,r){this.storage=r||new ga,this.client=new ku(t);}},gp=class{constructor(){this.storage=new ga,this.client=new pp;}},_x="xx",zx=e=>(e==null?void 0:e.startsWith(_x))||!1,Hx=`
        We've detected you're using React Native but have not provided the corresponding runtime, 
        for an optimal experience please install @react-native-async-storage/async-storage and instantiate 
        your analytics client as follows:
        
        import {ReactNativeRuntime} from 'coveo.analytics/react-native';
        
        const analytics = new CoveoAnalytics({
            ...your options,
            runtimeEnvironment: new ReactNativeRuntime();
        })
    `;function Wx(){return typeof navigator!="undefined"&&navigator.product=="ReactNative"}function Yx(){return wu()&&[navigator.globalPrivacyControl,navigator.doNotTrack,navigator.msDoNotTrack,window.doNotTrack].some(e=>!!e)}var Kx="v15",Gx={default:"https://analytics.cloud.coveo.com/rest/ua",production:"https://analytics.cloud.coveo.com/rest/ua",hipaa:"https://analyticshipaa.cloud.coveo.com/rest/ua"},ya=class{constructor(t){if(!t)throw new Error("You have to pass options to this constructor");this.options=Object.assign(Object.assign({},this.defaultOptions),t),this.visitorId="",this.bufferedRequests=[],this.beforeSendHooks=[GS,YS].concat(this.options.beforeSendHooks),this.afterSendHooks=this.options.afterSendHooks,this.eventTypeMapping={};let r={baseUrl:this.baseUrl,token:this.options.token,visitorIdProvider:this,preprocessRequest:this.options.preprocessRequest};this.runtime=this.options.runtimeEnvironment||this.initRuntime(r),Yx()&&(this.clear(),this.runtime.storage=new ga);}get defaultOptions(){return {endpoint:Gx.default,token:"",version:Kx,beforeSendHooks:[],afterSendHooks:[]}}initRuntime(t){return $S()&&Zd()?new fp(t,()=>{let r=[...this.bufferedRequests];return this.bufferedRequests=[],r}):(Wx()&&console.warn(Hx),new mp(t))}get storage(){return this.runtime.storage}determineVisitorId(){return ae(this,void 0,void 0,function*(){try{return (yield this.storage.getItem("visitorId"))||ha()}catch(t){return console.log("Could not get visitor ID from the current runtime environment storage. Using a random ID instead.",t),ha()}})}getCurrentVisitorId(){return ae(this,void 0,void 0,function*(){if(!this.visitorId){let t=yield this.determineVisitorId();yield this.setCurrentVisitorId(t);}return this.visitorId})}setCurrentVisitorId(t){return ae(this,void 0,void 0,function*(){this.visitorId=t,yield this.storage.setItem("visitorId",t);})}getParameters(t,...r){return ae(this,void 0,void 0,function*(){return yield this.resolveParameters(t,...r)})}getPayload(t,...r){return ae(this,void 0,void 0,function*(){let a=yield this.resolveParameters(t,...r);return yield this.resolvePayloadForParameters(t,a)})}get currentVisitorId(){return typeof(this.visitorId||this.storage.getItem("visitorId"))!="string"&&this.setCurrentVisitorId(ha()),this.visitorId}set currentVisitorId(t){this.visitorId=t,this.storage.setItem("visitorId",t);}resolveParameters(t,...r){return ae(this,void 0,void 0,function*(){let{variableLengthArgumentsNames:a=[],addVisitorIdParameter:o=!1,usesMeasurementProtocol:n=!1}=this.eventTypeMapping[t]||{};return yield [l=>a.length>0?this.parseVariableArgumentsPayload(a,l):l[0],l=>ae(this,void 0,void 0,function*(){return Object.assign(Object.assign({},l),{visitorId:o?yield this.getCurrentVisitorId():""})}),l=>n?this.ensureAnonymousUserWhenUsingApiKey(l):l,l=>this.beforeSendHooks.reduce((f,p)=>ae(this,void 0,void 0,function*(){let m=yield f;return yield p(t,m)}),l)].reduce((l,f)=>ae(this,void 0,void 0,function*(){let p=yield l;return yield f(p)}),Promise.resolve(r))})}resolvePayloadForParameters(t,r){return ae(this,void 0,void 0,function*(){let{usesMeasurementProtocol:a=!1}=this.eventTypeMapping[t]||{};return yield [d=>this.removeEmptyPayloadValues(d,t),d=>this.validateParams(d),d=>a?Vx(d):d,d=>a?this.removeUnknownParameters(d):d,d=>a?this.processCustomParameters(d):d].reduce((d,l)=>ae(this,void 0,void 0,function*(){let f=yield d;return yield l(f)}),Promise.resolve(r))})}sendEvent(t,...r){return ae(this,void 0,void 0,function*(){let{newEventType:a=t}=this.eventTypeMapping[t]||{},o=yield this.resolveParameters(t,...r),n=yield this.resolvePayloadForParameters(t,o);return this.bufferedRequests.push({eventType:a,payload:n}),yield Promise.all(this.afterSendHooks.map(i=>i(t,o))),yield this.deferExecution(),yield this.sendFromBufferWithFetch()})}deferExecution(){return new Promise(t=>setTimeout(t,0))}sendFromBufferWithFetch(){return ae(this,void 0,void 0,function*(){let t=this.bufferedRequests.shift();if(t){let{eventType:r,payload:a}=t;return this.runtime.client.sendEvent(r,a)}})}clear(){this.storage.removeItem("visitorId"),new Xo().clear();}sendSearchEvent(t){return ae(this,void 0,void 0,function*(){return this.sendEvent(ye.search,t)})}sendClickEvent(t){return ae(this,void 0,void 0,function*(){return this.sendEvent(ye.click,t)})}sendCustomEvent(t){return ae(this,void 0,void 0,function*(){return this.sendEvent(ye.custom,t)})}sendViewEvent(t){return ae(this,void 0,void 0,function*(){return this.sendEvent(ye.view,t)})}getVisit(){return ae(this,void 0,void 0,function*(){let r=yield (yield fetch(`${this.baseUrl}/analytics/visit`)).json();return this.visitorId=r.visitorId,r})}getHealth(){return ae(this,void 0,void 0,function*(){return yield (yield fetch(`${this.baseUrl}/analytics/monitoring/health`)).json()})}registerBeforeSendEventHook(t){this.beforeSendHooks.push(t);}registerAfterSendEventHook(t){this.afterSendHooks.push(t);}addEventTypeMapping(t,r){this.eventTypeMapping[t]=r;}parseVariableArgumentsPayload(t,r){let a={};for(let o=0,n=r.length;o<n;o++){let i=r[o];if(typeof i=="string")a[t[o]]=i;else if(typeof i=="object")return Object.assign(Object.assign({},a),i)}return a}isKeyAllowedEmpty(t,r){return ({[ye.search]:["queryText"]}[t]||[]).indexOf(r)!==-1}removeEmptyPayloadValues(t,r){let a=o=>typeof o!="undefined"&&o!==null&&o!=="";return Object.keys(t).filter(o=>this.isKeyAllowedEmpty(r,o)||a(t[o])).reduce((o,n)=>Object.assign(Object.assign({},o),{[n]:t[n]}),{})}removeUnknownParameters(t){return Object.keys(t).filter(a=>{if(jx(a))return !0;console.log(a,"is not processed by coveoua");}).reduce((a,o)=>Object.assign(Object.assign({},a),{[o]:t[o]}),{})}processCustomParameters(t){let{custom:r}=t,a=Xn(t,["custom"]),o=this.lowercaseKeys(r),n=Lx(a);return Object.assign(Object.assign({},o),n)}lowercaseKeys(t){return Object.keys(t||{}).reduce((a,o)=>Object.assign(Object.assign({},a),{[o.toLowerCase()]:t[o]}),{})}validateParams(t){let{anonymizeIp:r}=t,a=Xn(t,["anonymizeIp"]);return r!==void 0&&["0","false","undefined","null","{}","[]",""].indexOf(`${r}`.toLowerCase())==-1&&(a.anonymizeIp=1),a}ensureAnonymousUserWhenUsingApiKey(t){let{userId:r}=t,a=Xn(t,["userId"]);return zx(this.options.token)&&!r?(a.userId="anonymous",a):t}get baseUrl(){let{version:t,endpoint:r}=this.options,a=r.indexOf(".cloud.coveo.com")!==-1;return `${r}${a?"":"/rest"}/${t}`}},w;(function(e){e.interfaceLoad="interfaceLoad",e.interfaceChange="interfaceChange",e.didyoumeanAutomatic="didyoumeanAutomatic",e.didyoumeanClick="didyoumeanClick",e.resultsSort="resultsSort",e.searchboxSubmit="searchboxSubmit",e.searchboxClear="searchboxClear",e.searchboxAsYouType="searchboxAsYouType",e.breadcrumbFacet="breadcrumbFacet",e.breadcrumbResetAll="breadcrumbResetAll",e.documentQuickview="documentQuickview",e.documentOpen="documentOpen",e.omniboxAnalytics="omniboxAnalytics",e.omniboxFromLink="omniboxFromLink",e.searchFromLink="searchFromLink",e.triggerNotify="notify",e.triggerExecute="execute",e.triggerQuery="query",e.triggerRedirect="redirect",e.pagerResize="pagerResize",e.pagerNumber="pagerNumber",e.pagerNext="pagerNext",e.pagerPrevious="pagerPrevious",e.pagerScrolling="pagerScrolling",e.staticFilterClearAll="staticFilterClearAll",e.staticFilterSelect="staticFilterSelect",e.staticFilterDeselect="staticFilterDeselect",e.facetClearAll="facetClearAll",e.facetSearch="facetSearch",e.facetSelect="facetSelect",e.facetSelectAll="facetSelectAll",e.facetDeselect="facetDeselect",e.facetExclude="facetExclude",e.facetUnexclude="facetUnexclude",e.facetUpdateSort="facetUpdateSort",e.facetShowMore="showMoreFacetResults",e.facetShowLess="showLessFacetResults",e.queryError="query",e.queryErrorBack="errorBack",e.queryErrorClear="errorClearQuery",e.queryErrorRetry="errorRetry",e.recommendation="recommendation",e.recommendationInterfaceLoad="recommendationInterfaceLoad",e.recommendationOpen="recommendationOpen",e.likeSmartSnippet="likeSmartSnippet",e.dislikeSmartSnippet="dislikeSmartSnippet",e.expandSmartSnippet="expandSmartSnippet",e.collapseSmartSnippet="collapseSmartSnippet",e.openSmartSnippetFeedbackModal="openSmartSnippetFeedbackModal",e.closeSmartSnippetFeedbackModal="closeSmartSnippetFeedbackModal",e.sendSmartSnippetReason="sendSmartSnippetReason",e.expandSmartSnippetSuggestion="expandSmartSnippetSuggestion",e.collapseSmartSnippetSuggestion="collapseSmartSnippetSuggestion",e.recentQueryClick="recentQueriesClick",e.clearRecentQueries="clearRecentQueries",e.recentResultClick="recentResultClick",e.clearRecentResults="clearRecentResults",e.noResultsBack="noResultsBack";})(w||(w={}));var Jx={[w.triggerNotify]:"queryPipelineTriggers",[w.triggerExecute]:"queryPipelineTriggers",[w.triggerQuery]:"queryPipelineTriggers",[w.triggerRedirect]:"queryPipelineTriggers",[w.queryError]:"errors",[w.queryErrorBack]:"errors",[w.queryErrorClear]:"errors",[w.queryErrorRetry]:"errors",[w.pagerNext]:"getMoreResults",[w.pagerPrevious]:"getMoreResults",[w.pagerNumber]:"getMoreResults",[w.pagerResize]:"getMoreResults",[w.pagerScrolling]:"getMoreResults",[w.facetSearch]:"facet",[w.facetShowLess]:"facet",[w.facetShowMore]:"facet",[w.recommendation]:"recommendation",[w.likeSmartSnippet]:"smartSnippet",[w.dislikeSmartSnippet]:"smartSnippet",[w.expandSmartSnippet]:"smartSnippet",[w.collapseSmartSnippet]:"smartSnippet",[w.openSmartSnippetFeedbackModal]:"smartSnippet",[w.closeSmartSnippetFeedbackModal]:"smartSnippet",[w.sendSmartSnippetReason]:"smartSnippet",[w.expandSmartSnippetSuggestion]:"smartSnippetSuggestions",[w.collapseSmartSnippetSuggestion]:"smartSnippetSuggestions",[w.clearRecentQueries]:"recentQueries",[w.recentResultClick]:"recentlyClickedDocuments",[w.clearRecentResults]:"recentlyClickedDocuments"},hp;(function(e){e.DoesNotAnswer="does_not_answer",e.PartiallyAnswers="partially_answers",e.WasNotAQuestion="was_not_a_question",e.Other="other";})(hp||(hp={}));var Du=class{constructor(){this.runtime=new gp,this.currentVisitorId="";}getPayload(){return Promise.resolve()}getParameters(){return Promise.resolve()}sendEvent(){return Promise.resolve()}sendSearchEvent(){return Promise.resolve()}sendClickEvent(){return Promise.resolve()}sendCustomEvent(){return Promise.resolve()}sendViewEvent(){return Promise.resolve()}getVisit(){return Promise.resolve({id:"",visitorId:""})}getHealth(){return Promise.resolve({status:""})}registerBeforeSendEventHook(){}registerAfterSendEventHook(){}addEventTypeMapping(){}};function Xx(e){let t="";return e.filter(r=>{let a=r!==t;return t=r,a})}function Zx(e){return e.map(t=>t.replace(/;/g,""))}function yp(e){let t=256,r=e.join(";");return r.length<=t?r:yp(e.slice(1))}var Sp=e=>{let t=Zx(e),r=Xx(t);return yp(r)};function xp(e){let t=typeof e.partialQueries=="string"?e.partialQueries:Sp(e.partialQueries),r=typeof e.suggestions=="string"?e.suggestions:Sp(e.suggestions);return Object.assign(Object.assign({},e),{partialQueries:t,suggestions:r})}var Vu=class{constructor(t,r){this.opts=t,this.provider=r,this.coveoAnalyticsClient=t.enableAnalytics===!1?new Du:new ya(t);}disable(){this.coveoAnalyticsClient instanceof ya&&this.coveoAnalyticsClient.clear(),this.coveoAnalyticsClient=new Du;}enable(){this.coveoAnalyticsClient=new ya(this.opts);}logInterfaceLoad(){return this.logSearchEvent(w.interfaceLoad)}logRecommendationInterfaceLoad(){return this.logSearchEvent(w.recommendationInterfaceLoad)}logRecommendation(){return this.logCustomEvent(w.recommendation)}logRecommendationOpen(t,r){return this.logClickEvent(w.recommendationOpen,t,r)}logStaticFilterClearAll(t){return this.logSearchEvent(w.staticFilterClearAll,t)}logStaticFilterSelect(t){return this.logSearchEvent(w.staticFilterSelect,t)}logStaticFilterDeselect(t){return this.logSearchEvent(w.staticFilterDeselect,t)}logFetchMoreResults(){return this.logCustomEvent(w.pagerScrolling,{type:"getMoreResults"})}logInterfaceChange(t){return this.logSearchEvent(w.interfaceChange,t)}logDidYouMeanAutomatic(){return this.logSearchEvent(w.didyoumeanAutomatic)}logDidYouMeanClick(){return this.logSearchEvent(w.didyoumeanClick)}logResultsSort(t){return this.logSearchEvent(w.resultsSort,t)}logSearchboxSubmit(){return this.logSearchEvent(w.searchboxSubmit)}logSearchboxClear(){return this.logSearchEvent(w.searchboxClear)}logSearchboxAsYouType(){return this.logSearchEvent(w.searchboxAsYouType)}logBreadcrumbFacet(t){return this.logSearchEvent(w.breadcrumbFacet,t)}logBreadcrumbResetAll(){return this.logSearchEvent(w.breadcrumbResetAll)}logDocumentQuickview(t,r){return this.logClickEvent(w.documentQuickview,t,r)}logDocumentOpen(t,r){return this.logClickEvent(w.documentOpen,t,r)}logOmniboxAnalytics(t){return this.logSearchEvent(w.omniboxAnalytics,xp(t))}logOmniboxFromLink(t){return this.logSearchEvent(w.omniboxFromLink,xp(t))}logSearchFromLink(){return this.logSearchEvent(w.searchFromLink)}logTriggerNotify(t){return this.logCustomEvent(w.triggerNotify,t)}logTriggerExecute(t){return this.logCustomEvent(w.triggerExecute,t)}logTriggerQuery(){let t={query:this.provider.getSearchEventRequestPayload().queryText};return this.logCustomEvent(w.triggerQuery,t)}logTriggerRedirect(t){let r=Object.assign(Object.assign({},t),{query:this.provider.getSearchEventRequestPayload().queryText});return this.logCustomEvent(w.triggerRedirect,r)}logPagerResize(t){return this.logCustomEvent(w.pagerResize,t)}logPagerNumber(t){return this.logCustomEvent(w.pagerNumber,t)}logPagerNext(t){return this.logCustomEvent(w.pagerNext,t)}logPagerPrevious(t){return this.logCustomEvent(w.pagerPrevious,t)}logPagerScrolling(){return this.logCustomEvent(w.pagerScrolling)}logFacetClearAll(t){return this.logSearchEvent(w.facetClearAll,t)}logFacetSearch(t){return this.logSearchEvent(w.facetSearch,t)}logFacetSelect(t){return this.logSearchEvent(w.facetSelect,t)}logFacetDeselect(t){return this.logSearchEvent(w.facetDeselect,t)}logFacetExclude(t){return this.logSearchEvent(w.facetExclude,t)}logFacetUnexclude(t){return this.logSearchEvent(w.facetUnexclude,t)}logFacetSelectAll(t){return this.logSearchEvent(w.facetSelectAll,t)}logFacetUpdateSort(t){return this.logSearchEvent(w.facetUpdateSort,t)}logFacetShowMore(t){return this.logCustomEvent(w.facetShowMore,t)}logFacetShowLess(t){return this.logCustomEvent(w.facetShowLess,t)}logQueryError(t){return this.logCustomEvent(w.queryError,t)}logQueryErrorBack(){return ae(this,void 0,void 0,function*(){return yield this.logCustomEvent(w.queryErrorBack),this.logSearchEvent(w.queryErrorBack)})}logQueryErrorRetry(){return ae(this,void 0,void 0,function*(){return yield this.logCustomEvent(w.queryErrorRetry),this.logSearchEvent(w.queryErrorRetry)})}logQueryErrorClear(){return ae(this,void 0,void 0,function*(){return yield this.logCustomEvent(w.queryErrorClear),this.logSearchEvent(w.queryErrorClear)})}logLikeSmartSnippet(){return this.logCustomEvent(w.likeSmartSnippet)}logDislikeSmartSnippet(){return this.logCustomEvent(w.dislikeSmartSnippet)}logExpandSmartSnippet(){return this.logCustomEvent(w.expandSmartSnippet)}logCollapseSmartSnippet(){return this.logCustomEvent(w.collapseSmartSnippet)}logOpenSmartSnippetFeedbackModal(){return this.logCustomEvent(w.openSmartSnippetFeedbackModal)}logCloseSmartSnippetFeedbackModal(){return this.logCustomEvent(w.closeSmartSnippetFeedbackModal)}logSmartSnippetFeedbackReason(t,r){return this.logCustomEvent(w.sendSmartSnippetReason,{reason:t,details:r})}logExpandSmartSnippetSuggestion(t){return this.logCustomEvent(w.expandSmartSnippetSuggestion,{documentId:t})}logCollapseSmartSnippetSuggestion(t){return this.logCustomEvent(w.collapseSmartSnippetSuggestion,{documentId:t})}logRecentQueryClick(){return this.logSearchEvent(w.recentQueryClick)}logClearRecentQueries(){return this.logCustomEvent(w.clearRecentQueries)}logRecentResultClick(t,r){return this.logCustomEvent(w.recentResultClick,{info:t,identifier:r})}logClearRecentResults(){return this.logCustomEvent(w.clearRecentResults)}logNoResultsBack(){return this.logSearchEvent(w.noResultsBack)}logCustomEvent(t,r){let a=Object.assign(Object.assign({},this.provider.getBaseMetadata()),r),o=Object.assign(Object.assign({},this.getBaseCustomEventRequest(a)),{eventType:Jx[t],eventValue:t});return this.coveoAnalyticsClient.sendCustomEvent(o)}logCustomEventWithType(t,r,a){let o=Object.assign(Object.assign({},this.provider.getBaseMetadata()),a),n=Object.assign(Object.assign({},this.getBaseCustomEventRequest(o)),{eventType:r,eventValue:t});return this.coveoAnalyticsClient.sendCustomEvent(n)}logSearchEvent(t,r){return this.coveoAnalyticsClient.sendSearchEvent(this.getBaseSearchEventRequest(t,r))}logClickEvent(t,r,a,o){let n=Object.assign(Object.assign(Object.assign({},r),this.getBaseEventRequest(Object.assign(Object.assign({},a),o))),{searchQueryUid:this.provider.getSearchUID(),queryPipeline:this.provider.getPipeline(),actionCause:t});return this.coveoAnalyticsClient.sendClickEvent(n)}getBaseSearchEventRequest(t,r){return Object.assign(Object.assign(Object.assign({},this.getBaseEventRequest(r)),this.provider.getSearchEventRequestPayload()),{searchQueryUid:this.provider.getSearchUID(),queryPipeline:this.provider.getPipeline(),actionCause:t})}getBaseCustomEventRequest(t){return Object.assign(Object.assign({},this.getBaseEventRequest(t)),{lastSearchQueryUid:this.provider.getSearchUID()})}getBaseEventRequest(t){let r=Object.assign(Object.assign({},this.provider.getBaseMetadata()),t);return Object.assign(Object.assign({},this.getOrigins()),{customData:r,language:this.provider.getLanguage(),facetState:this.provider.getFacetState?this.provider.getFacetState():[],anonymous:this.provider.getIsAnonymous()})}getOrigins(){return {originLevel1:this.provider.getOriginLevel1(),originLevel2:this.provider.getOriginLevel2(),originLevel3:this.provider.getOriginLevel3()}}},Zo={pageview:"pageview",event:"event"},ei=Object.assign({},Zo);Object.keys(ei).map(e=>ei[e]);var vp;(function(e){e.click="click",e.flowStart="flowStart";})(vp||(vp={}));var Ap;(function(e){e.enterInterface="ticket_create_start",e.fieldUpdate="ticket_field_update",e.fieldSuggestionClick="ticket_classification_click",e.suggestionClick="suggestion_click",e.suggestionRate="suggestion_rate",e.nextCaseStep="ticket_next_stage",e.caseCancelled="ticket_cancel",e.caseSolved="ticket_cancel",e.caseCreated="ticket_create";})(Ap||(Ap={}));var Pp;(function(e){e.quit="Quit",e.solved="Solved";})(Pp||(Pp={}));var ti=e=>{let t=e.configuration.search.locale.split("-")[0];return !t||t.length!==2?"en":t};var St=(e,t)=>{if("productListing"in e&&e.productListing)return e.productListing.facets.results.find(r=>r.facetId===t);if("search"in e&&e.search)return e.search.response.facets.find(r=>r.facetId===t)},Nu=(e,t)=>e.facetSet[t];function eF(e,t){return !!t&&t.facetId in e.facetSet}var ri=(e,t)=>{let r=St(e,t);if(eF(e,r))return r},Mu=(e,t)=>{let r=ri(e,t);return r?r.values.filter(a=>a.state==="selected"):[]},xt=e=>"productListing"in e?e.productListing.isLoading:e.search.isLoading;function _e(e){if(!e)return {parents:[],values:[]};let t=[],r=e;for(;r.length&&r[0].children.length;)t=[...t,...r],r=r[0].children;let a=r.find(o=>o.state==="selected");return a&&(t=[...t,a],r=[]),{parents:t,values:r}}function tF(e,t){return !!t&&t.facetId in e.categoryFacetSet}var Qu=(e,t)=>{let r=St(e,t);if(tF(e,r))return r},wp=(e,t)=>{var r;return (r=e.categoryFacetSet[t])==null?void 0:r.request},en=(e,t)=>{let r=Qu(e,t);return _e(r==null?void 0:r.values).parents};var Sa=()=>({url:"",clientId:"",additionalFields:[],advancedParameters:{debug:!1},products:[],facets:{results:[]},error:null,isLoading:!1,responseId:""});var Mr=(e,t)=>{let r=qp(t,e),a=r?r.field:"",o=`${a}_${e}`;return {facetId:e,facetField:a,facetTitle:o}};function ai(e,t){let{facetId:r,facetValue:a}=e,o=Mr(r,t),n=Ip(t,r);return {...o,facetValue:n==="hierarchical"?Op(t,r):a}}function et(e){return {facetSet:e.facetSet||lt(),categoryFacetSet:e.categoryFacetSet||gt(),dateFacetSet:e.dateFacetSet||pt(),numericFacetSet:e.numericFacetSet||ft(),..."search"in e&&{search:e.search?e.search:je()},..."productListing"in e&&{productListing:e.productListing?e.productListing:Sa()}}}var Ep=e=>{let t=[];return rF(e).forEach((r,a)=>{let o=Ip(e,r.facetId),n=sF(r,a+1);if(o==="hierarchical"){if(!!!en(e,r.facetId).length)return;t.push({...n,...iF(e,r.facetId),facetType:o,state:"selected"});return}r.values.forEach((i,s)=>{if(i.state==="idle")return;let u=aF(i,s+1,o),c=o==="specific"?nF(i):oF(i);t.push({...n,...u,...c});});}),t},rF=e=>"productListing"in e&&e.productListing?e.productListing.facets.results:"search"in e&&e.search?e.search.response.facets:[],aF=(e,t,r)=>({state:e.state,valuePosition:t,facetType:r}),oF=e=>({displayValue:`${e.start}..${e.end}`,value:`${e.start}..${e.end}`,start:e.start,end:e.end,endInclusive:e.endInclusive}),nF=e=>({displayValue:e.value,value:e.value}),Op=(e,t)=>en(e,t).map(a=>a.value).join(";"),iF=(e,t)=>{let r=1,a=Op(e,t);return {value:a,valuePosition:r,displayValue:a}},sF=(e,t)=>({title:`${e.field}_${e.facetId}`,field:e.field,id:e.facetId,facetPosition:t}),qp=(e,t)=>{var r;return e.facetSet[t]||((r=e.categoryFacetSet[t])==null?void 0:r.request)||e.dateFacetSet[t]||e.numericFacetSet[t]},Ip=(e,t)=>{let r=qp(e,t);return r?r.type:"specific"};var tn="1.42.0";var oi=class{constructor(t){this.state=t;}getLanguage(){return ti(this.state)}getSearchEventRequestPayload(){return {queryText:this.queryText,responseTime:this.responseTime,results:this.mapResultsToAnalyticsDocument(),numberOfResults:this.numberOfResults}}getBaseMetadata(){let{context:t}=this.state,r=(t==null?void 0:t.contextValues)||{},a={};for(let[o,n]of Object.entries(r)){let i=`context_${o}`;a[i]=n;}return a.coveoHeadlessVersion=tn,a}getSearchUID(){var t,r,a;return ((t=this.state.search)==null?void 0:t.response.searchUid)||((r=this.state.recommendation)==null?void 0:r.searchUid)||((a=this.state.productListing)==null?void 0:a.responseId)||je().response.searchUid}getPipeline(){var t;return this.state.pipeline||((t=this.state.search)==null?void 0:t.response.pipeline)||"default"}getOriginLevel1(){return this.state.searchHub||De()}getOriginLevel2(){return this.state.configuration.analytics.originLevel2}getOriginLevel3(){return this.state.configuration.analytics.originLevel3||"default"}getFacetState(){return Ep(et(this.state))}getIsAnonymous(){return this.state.configuration.analytics.anonymous}mapResultsToAnalyticsDocument(){var t;return (t=this.state.search)==null?void 0:t.response.results.map(r=>({documentUri:r.uri,documentUriHash:r.raw.urihash}))}get queryText(){var t;return ((t=this.state.query)==null?void 0:t.q)||Fe().q}get responseTime(){var t;return ((t=this.state.search)==null?void 0:t.duration)||je().duration}get numberOfResults(){var t;return ((t=this.state.search)==null?void 0:t.response.results.length)||je().response.results.length}},Tp=({logger:e,state:t,analyticsClientMiddleware:r=(n,i)=>i,preprocessRequest:a,provider:o=new oi(t)})=>{let n=t.configuration.accessToken,i=t.configuration.analytics.apiBaseUrl,s=t.configuration.analytics.runtimeEnvironment,u=t.configuration.analytics.enabled,c=new Vu({token:n,endpoint:i,runtimeEnvironment:s,preprocessRequest:a,beforeSendHooks:[r,(d,l)=>(e.info({...l,type:d,endpoint:i,token:n},"Analytics request"),l)]},o);return u||c.disable(),c},ve=()=>new ya({}).getCurrentVisitorId(),ir=new ip.HistoryStore;function cF(e){return {statusCode:e.statusCode,type:e.name,message:e.message}}function ni(e){if(e instanceof Jr)return {error:cF(e)};throw e}var Bt=(e,t,r,a)=>({accessToken:e.accessToken,method:t,contentType:r,url:`${e.url}${a}?${uF(e)}`}),uF=e=>`organizationId=${e.organizationId}`;function kp(e){return ((e.headers.get("content-type")||"").split(";").find(a=>a.indexOf("charset=")!==-1)||"").split("=")[1]||"UTF-8"}var Dp=TextDecoder;var rn=class{constructor(t){this.options=t;this.searchAbortController=null;}async plan(t){let r=await st.call({...Bt(t,"POST","application/json","/plan"),requestParams:jr(t),...this.options});if(r instanceof Error)return ni(r);let a=await r.json();return mF(a)?{success:a}:{error:Qr({response:r,body:a})}}async querySuggest(t){let r=await st.call({...Bt(t,"POST","application/json","/querySuggest"),requestParams:jr(t),...this.options});if(r instanceof Error)return ni(r);let a=await r.json(),o={response:r,body:a};return fF(a)?{success:(await this.options.postprocessQuerySuggestResponseMiddleware(o)).body}:{error:Qr(o)}}async search(t){var n;this.searchAbortController&&(this.options.logger.warn("Cancelling current pending search query"),this.searchAbortController.abort()),this.searchAbortController=this.getAbortControllerInstanceIfAvailable();let r=await st.call({...Bt(t,"POST","application/json",""),requestParams:jr(t),...this.options,signal:(n=this.searchAbortController)==null?void 0:n.signal});if(r instanceof Error)return ni(r);this.searchAbortController=null;let a=await r.json(),o={response:r,body:a};return Lu(a)?(o.body=xF(a),{success:(await this.options.postprocessSearchResponseMiddleware(o)).body}):{error:Qr(o)}}async facetSearch(t){let r=await st.call({...Bt(t,"POST","application/json","/facet"),requestParams:jr(t),...this.options});if(r instanceof Error)throw r;let a=await r.json(),o={response:r,body:a};return (await this.options.postprocessFacetSearchResponseMiddleware(o)).body}async recommendations(t){let r=await st.call({...Bt(t,"POST","application/json",""),requestParams:jr(t),...this.options});if(r instanceof Error)throw r;let a=await r.json();return Lu(a)?{success:a}:{error:Qr({response:r,body:a})}}async html(t){let r=await st.call({...Bt(t,"POST","application/x-www-form-urlencoded","/html"),requestParams:jr(t),...this.options});if(r instanceof Error)throw r;let a=kp(r),o=await r.arrayBuffer(),i=new Dp(a).decode(o);return gF(i)?{success:i}:{error:Qr({response:r,body:i})}}async productRecommendations(t){let r=await st.call({...Bt(t,"POST","application/json",""),requestParams:jr(t),...this.options});if(r instanceof Error)throw r;let a=await r.json();return Lu(a)?{success:a}:{error:Qr({response:r,body:a})}}async fieldDescriptions(t){let r=await st.call({...Bt(t,"GET","application/json","/fields"),requestParams:{},...this.options});if(r instanceof Error)throw r;let a=await r.json();return hF(a)?{success:a}:{error:Qr({response:r,body:a})}}getAbortControllerInstanceIfAvailable(){if(typeof window=="undefined"){let t=Vp();return new t}return typeof AbortController=="undefined"?null:new AbortController}},Qr=e=>{let{response:t}=e;return t.body?lF(e):dF(t)},lF=e=>SF(e)?pF(e):yF(e)?e.body:{message:"unknown",statusCode:0,type:"unknown"},dF=e=>{let t=JSON.parse(JSON.stringify(e,Object.getOwnPropertyNames(e)));return {...t,message:`Client side error: ${t.message||""}`,statusCode:400,type:"ClientError"}},pF=e=>({message:e.body.exception.code,statusCode:e.response.status,type:e.body.exception.code});var ue=e=>e.error!==void 0;function fF(e){return e.completions!==void 0}function mF(e){return e.preprocessingOutput!==void 0}function gF(e){return typeof e=="string"}function hF(e){return e.fields!==void 0}function Lu(e){return e.results!==void 0}function yF(e){return e.body.statusCode!==void 0}function SF(e){return e.body.exception!==void 0}function jr(e){let{url:t,accessToken:r,organizationId:a,...o}=e;return o}function xF(e){let t=Jc();return ie(e.questionAnswer)?(e.questionAnswer=t,e):(e.questionAnswer={...t,...e.questionAnswer},e)}var q=new A({required:!0,emptyAllowed:!1}),he=new A({required:!1,emptyAllowed:!1}),ce=new A({required:!0,emptyAllowed:!0}),Ut=({message:e,name:t,stack:r})=>({message:e,name:t,stack:r}),Me=(e,t)=>{if("required"in t)return {payload:new H({value:t}).validate({value:e}).value};let o=new j({options:{required:!0},values:t}).validate(e);if(o)throw new Bo(o);return {payload:e}},x=(e,t)=>{try{return Me(e,t)}catch(r){return {payload:e,error:Ut(r)}}},Ae=(e,t,r,a)=>{let o=`Check the initialState of ${a}`;return Np(e,t,r,o,"Controller initialization error")},le=(e,t,r,a)=>{let o=`Check the options of ${a}`;return Np(e,t,r,o,"Controller initialization error")},Np=(e,t,r,a,o)=>{try{return t.validate(r,a)}catch(n){throw e.logger.error(n,o),n}};var si=(e,t=5)=>e+Math.random().toString(36).substr(2,2+t);function ci(e){return Array.isArray(e)}function ui(e){return e.trim()===""}function Mp(e,t){return Object.values(e.reduce((r,a,o)=>({...r,[t(a,o)]:a}),{}))}function li(e){let t=Qp(e),r=[e,...t].filter(o=>o.parentResult).map(o=>o.parentResult);return Mp([e,...t,...r],o=>o.uniqueId)}function Qp(e){return e.childResults?e.childResults.flatMap(t=>[t,...Qp(t)]):[]}var D=(a=>(a[a.Search=0]="Search",a[a.Custom=1]="Custom",a[a.Click=2]="Click",a))(D||{}),FF=e=>e(),V=(e,t,r,a=o=>new oi(o))=>Z(e,async(o,{getState:n,extra:{analyticsClientMiddleware:i,preprocessRequest:s,logger:u}})=>{let c=FF(n),d=Tp({state:c,logger:u,analyticsClientMiddleware:i,preprocessRequest:s,provider:a(c)}),l=await r(d,c);return u.info({client:d.coveoAnalyticsClient,response:l},"Analytics response"),{analyticsType:t}}),CF=e=>Z("analytics/noop",async()=>({analyticsType:e}));CF(0);var sr=(e,t)=>{var n;let r=i=>{var s,u;return i+((u=(s=t.pagination)==null?void 0:s.firstResult)!=null?u:0)},a=-1,o=(n=t.search)==null?void 0:n.results;return a=Lp(e,o),a<0&&(a=wF(e,o)),a<0&&(a=0),RF(e,r(a),t)};function RF(e,t,r){let a=e.raw.collection;return {collectionName:typeof a=="string"?a:"default",documentAuthor:AF(e),documentPosition:t+1,documentTitle:e.title,documentUri:e.uri,documentUriHash:e.raw.urihash,documentUrl:e.clickUri,rankingModifier:e.rankingModifier||"",sourceName:PF(e),queryPipeline:r.pipeline||mt()}}var $t=e=>({contentIDKey:"@permanentid",contentIDValue:e.raw.permanentid||""}),jp={urihash:new A,sourcetype:new A,permanentid:new A},di={uniqueId:q,raw:new j({values:jp}),title:q,uri:q,clickUri:q,rankingModifier:new A({required:!1,emptyAllowed:!0})};function bF(e){return Object.assign({},...Object.keys(jp).map(t=>({[t]:e[t]})))}function vF(e){return Object.assign({},...Object.keys(di).map(t=>({[t]:e[t]})),{raw:bF(e.raw)})}function AF(e){let t=e.raw.author;return ie(t)?"unknown":Array.isArray(t)?t.join(";"):`${t}`}function PF(e){let t=e.raw.source;return ie(t)?"unknown":t}var tt=e=>new H(di).validate(vF(e));function wF(e,t){for(let[r,a]of t.entries()){let o=li(a);if(Lp(e,o)!==-1)return r}return -1}function Lp(e,t=[]){return t.findIndex(({uniqueId:r})=>r===e.uniqueId)}var Bp=V("analytics/recommendation/update",D.Search,e=>e.logRecommendationInterfaceLoad());var Up=h$1("recommendation/set",e=>x(e,{id:q})),xa=Z("recommendation/get",async(e,{getState:t,rejectWithValue:r,extra:{apiClient:a}})=>{let o=t(),n=new Date().getTime(),i=await a.recommendations(await EF(o)),s=new Date().getTime()-n;return ue(i)?r(i.error):{recommendations:i.success.results,analyticsAction:Bp(),duration:s,searchUid:i.success.searchUid}}),EF=async e=>({accessToken:e.configuration.accessToken,organizationId:e.configuration.organizationId,url:e.configuration.search.apiBaseUrl,recommendation:e.recommendation.id,tab:e.configuration.analytics.originLevel2,referrer:e.configuration.analytics.originLevel3,timezone:e.configuration.search.timezone,locale:e.configuration.search.locale,actionsHistory:e.configuration.analytics.enabled?ir.getHistory():[],...e.advancedSearchQueries&&{aq:e.advancedSearchQueries.aq,cq:e.advancedSearchQueries.cq},...e.pipeline&&{pipeline:e.pipeline},...e.searchHub&&{searchHub:e.searchHub},...e.context&&{context:e.context.contextValues},...e.dictionaryFieldContext&&{dictionaryFieldContext:e.dictionaryFieldContext.contextValues},...e.fields&&{fieldsToInclude:e.fields.fieldsToInclude},...e.configuration.analytics.enabled&&{visitorId:await ve()}});var Bu=h$1("history/undo"),Uu=h$1("history/redo"),cr=h$1("history/snapshot"),an=Z("history/back",async(e,{dispatch:t})=>{t(Bu()),await t(oe());}),pi=Z("history/forward",async(e,{dispatch:t})=>{t(Uu()),await t(oe());}),oe=Z("history/change",async(e,{getState:t})=>t().history.present);var fi=V("analytics/didyoumean/click",D.Search,e=>e.logDidYouMeanClick()),$p=V("analytics/didyoumean/automatic",D.Search,e=>e.logDidYouMeanAutomatic());var Fa=h$1("didYouMean/enable"),mi=h$1("didYouMean/disable"),Ft=h$1("didYouMean/correction",e=>x(e,q));var rt=h$1("query/updateQuery",e=>x(e,{q:new A,enableQuerySyntax:new W}));var _p=V("search/logFetchMoreResults",D.Search,e=>e.logFetchMoreResults()),Ca=e=>V("search/queryError",D.Search,(t,r)=>{var a,o,n;return t.logQueryError({query:((a=r.query)==null?void 0:a.q)||Fe().q,aq:((o=r.advancedSearchQueries)==null?void 0:o.aq)||Ve().aq,cq:((n=r.advancedSearchQueries)==null?void 0:n.cq)||Ve().cq,dq:"",errorType:e.type,errorMessage:e.message})})();var nn=xe(Xr());var gi=xe(Xr()),zp=xe(zu());gi.default.extend(zp.default);var Hu="YYYY/MM/DD@HH:mm:ss",OF="1401-01-01";function on(e){return e.format(Hu)}function Hp(e){return on((0, gi.default)(e))===e}function hi(e,t){let r=(0, gi.default)(e,t);if(!r.isValid()){let a=". Please provide a date format string in the configuration options. See https://day.js.org/docs/en/parse/string-format for more information.",o=` with the format "${t}""`;throw new Error(`Could not parse the provided date "${e}"${t?o:a}`)}Wu(r);}function Wu(e){if(e.isBefore(OF))throw new Error(`Date is before year 1401, which is unsupported by the API: ${e}`)}var Yp=xe(Wp());nn.default.extend(Yp.default);var Kp=["past","now","next"],Gp=["minute","hour","day","week","month","quarter","year"],qF=e=>{let t=e==="now";return {amount:new L({required:!t,min:1}),unit:new A({required:!t,constrainTo:Gp}),period:new A({required:!0,constrainTo:Kp})}};function Lr(e){if(typeof e=="string"&&!Ct(e))throw new Error(`The value "${e}" is not respecting the relative date format "period-amount-unit"`);let t=typeof e=="string"?Gu(e):e;new H(qF(t.period)).validate(t);let r=Xp(t),a=JSON.stringify(t);if(!r.isValid())throw new Error(`Date is invalid: ${a}`);Wu(r);}function Jp(e){let{period:t,amount:r,unit:a}=e;switch(t){case"past":case"next":return `${t}-${r}-${a}`;case"now":return t}}function Xp(e){let{period:t,amount:r,unit:a}=e;switch(t){case"past":return (0, nn.default)().subtract(r,a);case"next":return (0, nn.default)().add(r,a);case"now":return (0, nn.default)()}}function sn(e){return on(Xp(Gu(e)))}function Zp(e){return e.toLocaleLowerCase().split("-")}function Ct(e){let[t,r,a]=Zp(e);if(t==="now")return !0;if(!Kp.includes(t)||!Gp.includes(a))return !1;let o=parseInt(r);return !(isNaN(o)||o<=0)}function ef(e){return !!e&&typeof e=="object"&&"period"in e}function Gu(e){let[t,r,a]=Zp(e);return t==="now"?{period:"now"}:{period:t,amount:r?parseInt(r):void 0,unit:a||void 0}}function IF(e){return Lr(e),Gu(e)}function tf(e){return e.type==="dateRange"}function rf(e){return `start${e}`}function af(e){return `end${e}`}var TF=()=>({dateFacetValueMap:{}});function kF(e,t,r){let a=e.start,o=e.end;return Ct(a)&&(a=sn(a),r.dateFacetValueMap[t][rf(a)]=e.start),Ct(o)&&(o=sn(o),r.dateFacetValueMap[t][af(o)]=e.end),{...e,start:a,end:o}}function DF(e,t){if(tf(e)){let{facetId:r,currentValues:a}=e;return t.dateFacetValueMap[r]={},{...e,currentValues:a.map(o=>kF(o,r,t))}}return e}function of(e){var a;let t=TF();return {request:{...e,facets:(a=e.facets)==null?void 0:a.map(o=>DF(o,t))},mappings:t}}function VF(e,t,r){return {...e,start:r.dateFacetValueMap[t][rf(e.start)]||e.start,end:r.dateFacetValueMap[t][af(e.end)]||e.end}}function NF(e,t){return e.facetId in t.dateFacetValueMap}function MF(e,t){return NF(e,t)?{...e,values:e.values.map(r=>VF(r,e.facetId,t))}:e}function nf(e,t){var r;return "success"in e?{success:{...e.success,facets:(r=e.success.facets)==null?void 0:r.map(o=>MF(o,t))}}:e}var yi=new L({required:!0,min:0}),Ra=h$1("pagination/registerNumberOfResults",e=>x(e,yi)),ba=h$1("pagination/updateNumberOfResults",e=>x(e,yi)),va=h$1("pagination/registerPage",e=>x(e,yi)),Rt=h$1("pagination/updatePage",e=>x(e,yi)),Aa=h$1("pagination/nextPage"),Pa=h$1("pagination/previousPage");function wa(e,t){let r={};e.forEach(n=>r[n.facetId]=n);let a=[];t.forEach(n=>{n in r&&(a.push(r[n]),delete r[n]);});let o=Object.values(r);return [...a,...o]}var Si=async e=>{var t,r,a;return {accessToken:e.configuration.accessToken,organizationId:e.configuration.organizationId,url:e.configuration.search.apiBaseUrl,locale:e.configuration.search.locale,debug:e.debug,tab:e.configuration.analytics.originLevel2,referrer:e.configuration.analytics.originLevel3,timezone:e.configuration.search.timezone,...e.configuration.analytics.enabled&&{visitorId:await ve()},...((t=e.advancedSearchQueries)==null?void 0:t.aq)&&{aq:e.advancedSearchQueries.aq},...((r=e.advancedSearchQueries)==null?void 0:r.cq)&&{cq:e.advancedSearchQueries.cq},...((a=e.advancedSearchQueries)==null?void 0:a.lq)&&{lq:e.advancedSearchQueries.lq},...e.context&&{context:e.context.contextValues},...e.fields&&!e.fields.fetchAllFields&&{fieldsToInclude:e.fields.fieldsToInclude},...e.dictionaryFieldContext&&{dictionaryFieldContext:e.dictionaryFieldContext.contextValues},...e.pipeline&&{pipeline:e.pipeline},...e.query&&{q:e.query.q,enableQuerySyntax:e.query.enableQuerySyntax},...e.searchHub&&{searchHub:e.searchHub},...e.sortCriteria&&{sortCriteria:e.sortCriteria}}};var ur=async e=>{var o;let t=BF(e),r=QF(e),a=await Si(e);return of({...a,...e.didYouMean&&{enableDidYouMean:e.didYouMean.enableDidYouMean},...t&&{cq:t},...r.length&&{facets:r},...e.pagination&&{numberOfResults:e.pagination.numberOfResults,firstResult:e.pagination.firstResult},...e.facetOptions&&{facetOptions:e.facetOptions},...((o=e.folding)==null?void 0:o.enabled)&&{filterField:e.folding.fields.collection,childField:e.folding.fields.parent,parentField:e.folding.fields.child,filterFieldRange:e.folding.filterFieldRange}})};function QF(e){var t;return wa(jF(e),(t=e.facetOrder)!=null?t:[])}function jF(e){return [...Ju(e.facetSet),...Ju(e.numericFacetSet),...Ju(e.dateFacetSet),...LF(e.categoryFacetSet)]}function LF(e){return Object.values(e||{}).map(t=>t.request)}function Ju(e={}){return Object.keys(e).map(t=>e[t])}function BF(e){var n;let t=((n=e.advancedSearchQueries)==null?void 0:n.cq.trim())||"",r=Object.values(e.tabSet||{}).find(i=>i.isActive),a=(r==null?void 0:r.expression.trim())||"",o=UF(e);return [t,a,...o].filter(i=>!!i).join(" AND ")}function UF(e){return Object.values(e.staticFilterSet||{}).map(r=>{let a=r.values.filter(n=>n.state==="selected"&&!!n.expression.trim()),o=a.map(n=>n.expression).join(" OR ");return a.length>1?`(${o})`:o})}var Pe=h$1("breadcrumb/deselectAll");var ze=h$1("facet/deselectAllFacets"),bt=h$1("facet/updateFacetAutoSelection",e=>x(e,{allow:new W({required:!0})}));var Xu=async(e,t,{request:r,mappings:a})=>{var u;let o=new Date().getTime(),n=nf(await e.search(r),a),i=new Date().getTime()-o,s=((u=t.query)==null?void 0:u.q)||"";return {response:n,duration:i,queryExecuted:s,requestExecuted:r}},xi=Z("search/prepareForSearchWithQuery",(e,t)=>{let{dispatch:r}=t;x(e,{q:new A,enableQuerySyntax:new W}),r(Pe()),r(bt({allow:!0})),r(rt(e)),r(Rt(1));}),b=Z("search/executeSearch",async(e,{getState:t,dispatch:r,rejectWithValue:a,extra:o})=>{let n=t();WF(n);let i=await Xu(o.apiClient,n,await ur(n));if(ue(i.response))return r(Ca(i.response.error)),a(i.response.error);if(!zF(n,i.response.success))return r(cr($o(n))),{...i,response:i.response.success,automaticallyCorrected:!1,originalQuery:Zu(n),analyticsAction:e};let{correctedQuery:s}=i.response.success.queryCorrections[0],u=await _F(o.apiClient,s,t,r);if(ue(u.response))return r(Ca(u.response.error)),a(u.response.error);let c=i.response.success;return e(r,()=>$F(i.queryExecuted,i.duration,n,c),o),r(cr($o(t()))),{...u,response:{...u.response.success,queryCorrections:i.response.success.queryCorrections},automaticallyCorrected:!0,originalQuery:Zu(n),analyticsAction:$p()}}),vt=Z("search/fetchMoreResults",async(e,{getState:t,dispatch:r,rejectWithValue:a,extra:{apiClient:o}})=>{let n=t(),i=await Xu(o,n,await HF(n));return ue(i.response)?(r(Ca(i.response.error)),a(i.response.error)):(r(cr($o(n))),{...i,response:i.response.success,automaticallyCorrected:!1,originalQuery:Zu(n),analyticsAction:_p()})}),$F=(e,t,r,a)=>{var o,n;return {...r,query:{q:e,enableQuerySyntax:(n=(o=r.query)==null?void 0:o.enableQuerySyntax)!=null?n:Fe().enableQuerySyntax},search:{...je(),duration:t,response:a,results:a.results}}},_F=async(e,t,r,a)=>{a(rt({q:t}));let o=await Xu(e,r(),await ur(r()));return a(Ft(t)),o},zF=(e,t)=>{var r;return ((r=e.didYouMean)==null?void 0:r.enableDidYouMean)===!0&&t.results.length===0&&t.queryCorrections.length!==0},HF=async e=>{var r,a,o,n;let t=await ur(e);return t.request={...t.request,firstResult:((a=(r=e.pagination)==null?void 0:r.firstResult)!=null?a:0)+((n=(o=e.search)==null?void 0:o.results.length)!=null?n:0)},t},WF=e=>{var t;e.configuration.analytics.enabled&&ir.addElement({name:"Query",value:((t=e.query)==null?void 0:t.q)||Fe().q,time:JSON.stringify(new Date)});},Zu=e=>{var t;return ((t=e.query)==null?void 0:t.q)!==void 0?e.query.q:""};var sf=["permanentid","ec_name","ec_brand","ec_category","ec_price","ec_promo_price","ec_shortdesc","ec_thumbnails","ec_images","ec_in_stock","ec_rating"];var Ea=()=>({id:"",skus:[],maxNumberOfRecommendations:5,filter:{brand:"",category:""},additionalFields:[],recommendations:[],error:null,isLoading:!1,searchUid:"",duration:0});var el=class{constructor(t){this.state=t;this.initialState=Ea();}getLanguage(){return ti(this.state)}getSearchEventRequestPayload(){return {queryText:"",responseTime:this.responseTime,results:this.mapResultsToAnalyticsDocument(),numberOfResults:this.numberOfResults}}getBaseMetadata(){var t;return {recommendation:((t=this.state.productRecommendations)==null?void 0:t.id)||this.initialState.id}}getSearchUID(){var t;return ((t=this.state.productRecommendations)==null?void 0:t.searchUid)||this.initialState.searchUid}getPipeline(){return ""}getOriginLevel1(){return this.state.searchHub||De()}getOriginLevel2(){return this.state.configuration.analytics.originLevel2||"default"}getOriginLevel3(){return this.state.configuration.analytics.originLevel3||"default"}getIsAnonymous(){return this.state.configuration.analytics.anonymous}mapResultsToAnalyticsDocument(){return []}get responseTime(){var t;return ((t=this.state.productRecommendations)==null?void 0:t.duration)||this.initialState.duration}get numberOfResults(){var t;return ((t=this.state.productRecommendations)==null?void 0:t.recommendations.length)||this.initialState.recommendations.length}};var cf=V("analytics/productrecommendations/load",D.Search,e=>e.logRecommendationInterfaceLoad(),e=>new el(e));var uf=h$1("productrecommendations/setId",e=>x(e,{id:q})),lf=h$1("productrecommendations/setSku",e=>x(e,{skus:new K({required:!0,min:1,each:he})})),df=h$1("productrecommendations/setBrand",e=>x(e,{brand:new A({required:!0,emptyAllowed:!0})})),pf=h$1("productrecommendations/setCategory",e=>x(e,{category:new A({required:!0,emptyAllowed:!0})})),ff=h$1("productrecommendations/setAdditionalFields",e=>x(e,{additionalFields:new K({required:!0,each:he})})),mf=h$1("productrecommendations/setMaxNumberOfRecommendations",e=>x(e,{number:new L({required:!0,max:50,min:1})})),Oa=Z("productrecommendations/get",async(e,{getState:t,rejectWithValue:r,extra:{apiClient:a}})=>{let o=t(),n=new Date().getTime(),i=await a.productRecommendations(await KF(o)),s=new Date().getTime()-n;if(ue(i))return r(i.error);let u=o.productRecommendations.additionalFields||[];return {recommendations:i.success.results.map(c=>YF(c,{additionalFields:u})),analyticsAction:cf(),searchUid:i.success.searchUid,duration:s}}),YF=(e,{additionalFields:t})=>{let r=e.raw.ec_price,a=e.raw.ec_promo_price,o=e.raw.ec_in_stock;return {permanentid:e.raw.permanentid,clickUri:e.clickUri,ec_name:e.raw.ec_name,ec_brand:e.raw.ec_brand,ec_category:e.raw.ec_category,ec_price:r,ec_shortdesc:e.raw.ec_shortdesc,ec_thumbnails:e.raw.ec_thumbnails,ec_images:e.raw.ec_images,ec_promo_price:a===void 0||r!==void 0&&a>=r?void 0:a,ec_in_stock:o===void 0?void 0:o.toLowerCase()==="yes"||o.toLowerCase()==="true",ec_rating:e.raw.ec_rating,additionalFields:t.reduce((n,i)=>({...n,[i]:e.raw[i]}),{})}},KF=async e=>({accessToken:e.configuration.accessToken,organizationId:e.configuration.organizationId,url:e.configuration.search.apiBaseUrl,locale:e.configuration.search.locale,timezone:e.configuration.search.timezone,...e.configuration.analytics.enabled&&{visitorId:await ve()},recommendation:e.productRecommendations.id,numberOfResults:e.productRecommendations.maxNumberOfRecommendations,fieldsToInclude:[...sf,...e.productRecommendations.additionalFields||[]],mlParameters:{...e.productRecommendations.skus&&e.productRecommendations.skus.length>0&&{itemIds:e.productRecommendations.skus},...e.productRecommendations.filter.brand&&{brandFilter:e.productRecommendations.filter.brand},...e.productRecommendations.filter.category&&{categoryFilter:e.productRecommendations.filter.category}},actionsHistory:e.configuration.analytics.enabled?ir.getHistory():[],...e.context&&{context:e.context.contextValues},...e.dictionaryFieldContext&&{dictionaryFieldContext:e.dictionaryFieldContext.contextValues},...e.searchHub&&{searchHub:e.searchHub}});var Fi=e=>t=>r=>{var n,i;let a=(n=r.payload)==null?void 0:n.analyticsAction;a!==void 0&&((i=r.payload)==null||delete i.analyticsAction);let o=t(r);return r.type===b.fulfilled.type&&a===void 0&&console.error("No analytics action associated with search:",r),r.type===xa.fulfilled&&a===void 0&&console.error("No analytics action associated with recommendation:",r),r.type===Oa.fulfilled&&a===void 0&&console.error("No analytics action associated with product recommendation:",r),a!==void 0&&e.dispatch(a),o};var Ci=()=>({duration:0,error:null,isLoading:!1,id:"Recommendation",recommendations:[],searchUid:""});function gf(e={}){return {configuration:ke(),advancedSearchQueries:Ve(),context:dt(),dictionaryFieldContext:ht(),fields:ra(),searchHub:De(),pipeline:mt(),recommendation:Ci(),debug:Ne(),version:"unit-testing-version",...e}}function hf(e={}){return {configuration:ke(),context:dt(),dictionaryFieldContext:ht(),searchHub:De(),productRecommendations:Ea(),version:"unit-testing-version",...e}}var Of=xe(vi());var Ai=e=>()=>t=>r=>{if(!r.error)return t(r);let a=r.error;if(e.error(a.stack||a.message||a.name||"Error",`Action dispatch error ${r.type}`,r),r.error.name!=="SchemaValidationError")return t(r)},Pi=e=>t=>r=>a=>(e.debug({action:a,nextState:t.getState()},`Action dispatched: ${a.type}`),r(a));var bf=xe(vi());var Ta=e=>e;var wi=e=>e,Ei=e=>e,Oi=e=>e;function al(e){return new rn({logger:(0, bf.default)({level:"silent"}),preprocessRequest:Ta,postprocessSearchResponseMiddleware:wi,postprocessFacetSearchResponseMiddleware:Ei,postprocessQuerySuggestResponseMiddleware:Oi,...e})}var Br=(r=>(r.Relevance="relevance",r.Fields="fields",r))(Br||{}),vf=(r=>(r.Ascending="asc",r.Descending="desc",r))(vf||{}),Af=()=>({by:"relevance"});function qi(){return Af()}function Pf(e={}){return {configuration:ke(),productListing:Sa(),sort:qi(),facetSearchSet:aa(),categoryFacetSet:gt(),categoryFacetSearchSet:oa(),dateFacetSet:pt(),facetOptions:Xt(),facetOrder:Zt(),facetSet:lt(),numericFacetSet:ft(),pagination:Ee(),version:"unit-testing-version",...e}}var Ii=()=>({caseAssistId:"",locale:"en-US"});var Ti=()=>({status:{loading:!1,error:null,lastResponseId:""},fields:{}});var ki=()=>({});var Di=()=>({status:{loading:!1,error:null,lastResponseId:""},documents:[]});function wf(e={}){return {configuration:ke(),caseAssistConfiguration:Ii(),caseField:Ti(),caseInput:ki(),documentSuggestion:Di(),debug:Ne(),version:"unit-testing-version",...e}}function cC(e={}){return {...ln(e,ru),executeFirstSearch:jest.fn(),executeFirstSearchAfterStandaloneSearchBoxRedirect:jest.fn()}}function uC(e={}){return ln(e,gf)}function lC(e={}){return ln(e,hf)}function dC(e={}){return ln(e,Pf)}function pC(e={}){return ln(e,wf)}function ln(e={},t){let r=(0, Of.default)({level:"silent"}),a=fC(r),o=qf(e,t),n=a(o),i=()=>{},{state:s,...u}=e;return {store:n,state:qf(e,t),subscribe:jest.fn(()=>i),get dispatch(){return n.dispatch},get actions(){return n.getActions()},findAsyncAction(c){let d=this.actions.find(l=>l.type===c.type);return mC(d)?d:void 0},logger:r,addReducers:jest.fn(),enableAnalytics:jest.fn(),disableAnalytics:jest.fn(),...u}}function qf(e,t){let r=e.state||t();return r.configuration.analytics.enabled=!1,r}var fC=e=>{let t={searchAPIClient:al({logger:e}),apiClient:al({logger:e}),validatePayload:Me,logger:e};return (0, Ef.default)([Ai(e),Fi,Yo.withExtraArgument(t),...Yn(),Pi(e)])};function mC(e){return e?"meta"in e:!1}function ol(e={}){return {urihash:"",parents:"",sfid:"",sfparentid:"",sfinsertedbyid:"",documenttype:"",sfcreatedbyid:"",permanentid:"",date:0,objecttype:"",sourcetype:"",sftitle:"",size:0,sffeeditemid:"",clickableuri:"",sfcreatedby:"",source:"",collection:"",connectortype:"",filetype:"",sfcreatedbyname:"",sflikecount:0,language:[],...e}}function gC(e={}){return {title:"",uri:"",printableUri:"",clickUri:"",uniqueId:"",excerpt:"",firstSentences:"",summary:null,flags:"",hasHtmlVersion:!1,score:0,percentScore:0,rankingInfo:null,isTopResult:!1,isRecommendation:!1,titleHighlights:[],firstSentencesHighlights:[],excerptHighlights:[],printableUriHighlights:[],summaryHighlights:[],absentTerms:[],raw:ol(),...e}}var Tf={};Dc(Tf,{escape:()=>Vi,getHighlightedSuggestion:()=>nl,highlightString:()=>hC});function hC(e){if(ui(e.openingDelimiter)||ui(e.closingDelimiter))throw Error("delimiters should be a non-empty string");if(ie(e.content)||ui(e.content))return e.content;let t=e.content.length,r="",a=0;for(let o=0;o<e.highlights.length;o++){let n=e.highlights[o],i=n.offset,s=i+n.length;if(s>t)break;r+=Vi(e.content.slice(a,i)),r+=e.openingDelimiter,r+=Vi(e.content.slice(i,s)),r+=e.closingDelimiter,a=s;}return a!==t&&(r+=e.content.slice(a)),r}function nl(e,t){return e=Vi(e),e.replace(/\[(.*?)\]|\{(.*?)\}|\((.*?)\)/g,(r,a,o,n)=>a?il(a,t.notMatchDelimiters):o?il(o,t.exactMatchDelimiters):n?il(n,t.correctionDelimiters):r)}function il(e,t){return t?t.open+e+t.close:e}function Vi(e){return e.replace(/&/g,"&amp").replace(/</g,"&lt").replace(/>/g,"&gt").replace(/"/g,"&quot").replace(/`/g,"&#96").replace(/'/g,"&#x27")}var kf=()=>he,Df=()=>q,lr=h$1("configuration/updateBasicConfiguration",e=>x(e,{accessToken:he,organizationId:he,platformUrl:he})),Pt=h$1("configuration/updateSearchConfiguration",e=>x(e,{apiBaseUrl:he,pipeline:he,searchHub:he,timezone:he,locale:he})),ka=h$1("configuration/updateAnalyticsConfiguration",e=>x(e,{enabled:new W({default:!0}),originLevel2:kf(),originLevel3:kf(),apiBaseUrl:he,runtimeEnvironment:new pe,anonymous:new W({default:!1})})),Da=h$1("configuration/analytics/disable"),Va=h$1("configuration/analytics/enable"),Ni=h$1("configuration/analytics/originlevel2",e=>x(e,{originLevel2:Df()})),Mi=h$1("configuration/analytics/originlevel3",e=>x(e,{originLevel3:Df()}));function Vf(e){let t={...e};return {get combinedReducer(){return (0, g.combineReducers)(t)},containsAll(r){return Object.keys(r).every(o=>o in t)},add(r){Object.keys(r).filter(a=>!(a in t)).forEach(a=>t[a]=r[a]);}}}function Nf({reducer:e,preloadedState:t,middlewares:r=[],thunkExtraArguments:a,name:o}){return Au({reducer:e,preloadedState:t,devTools:{stateSanitizer:n=>n.history?{...n,history:"<<OMIT>>"}:n,name:o,shouldHotReload:!1},middleware:n=>[...r,...n({thunk:{extraArgument:a}}),Pi(a.logger)]})}var Qi=h$1("advancedSearchQueries/update",e=>x(e,{aq:new A({required:!1,emptyAllowed:!0}),cq:new A({required:!1,emptyAllowed:!0}),lq:new A({required:!1,emptyAllowed:!0})})),ji=h$1("advancedSearchQueries/register",e=>x(e,{aq:new A({required:!1,emptyAllowed:!0}),cq:new A({required:!1,emptyAllowed:!0}),lq:new A({required:!1,emptyAllowed:!0})}));var Li={q:new A,enableQuerySyntax:new W,aq:new A,cq:new A,firstResult:new L({min:0}),numberOfResults:new L({min:0}),sortCriteria:new A,f:new j,cf:new j,nf:new j,df:new j,debug:new W,sf:new j,tab:new A};var ne=h$1("searchParameters/restore",e=>x(e,Li));O(Ve(),e=>{e.addCase(Qi,(t,r)=>{let{aq:a,cq:o,lq:n}=r.payload;Oe(a)||(t.aq=a,t.aqWasSet=!0),Oe(o)||(t.cq=o,t.cqWasSet=!0),Oe(n)||(t.lq=n,t.lqWasSet=!0);}).addCase(ji,(t,r)=>{let{aq:a,cq:o,lq:n}=r.payload;Oe(a)||(t.defaultFilters.aq=a,t.aqWasSet||(t.aq=a)),Oe(o)||(t.defaultFilters.cq=o,t.cqWasSet||(t.cq=o)),Oe(n)||(t.defaultFilters.lq=n,t.lqWasSet||(t.lq=n));}).addCase(oe.fulfilled,(t,r)=>{var a,o;return (o=(a=r.payload)==null?void 0:a.advancedSearchQueries)!=null?o:t}).addCase(ne,(t,r)=>{let{aq:a,cq:o}=r.payload;Oe(a)||(t.aq=a,t.aqWasSet=!0),Oe(o)||(t.cq=o,t.cqWasSet=!0);});});var Bi=h$1("tab/register",e=>{let t=new j({values:{id:q,expression:ce}});return x(e,t)}),Ur=h$1("tab/updateActiveTab",e=>x(e,q));function yC(e,t){if(/^https:\/\/platform(dev|qa|hipaa)?(-)?(eu|au)?\.cloud\.coveo\.com/.test(e))return e.replace(/^(https:\/\/)platform/,"$1analytics")+wn;let a=e.match(new RegExp(`^https://(${t}\\.org)\\.coveo.com`));return a?e.replace(a[1],"analytics.cloud")+wn:e}var Qf=O(ke(),e=>e.addCase(lr,(t,r)=>{r.payload.accessToken&&(t.accessToken=r.payload.accessToken),r.payload.organizationId&&(t.organizationId=r.payload.organizationId),r.payload.platformUrl&&(t.platformUrl=r.payload.platformUrl,t.search.apiBaseUrl=`${r.payload.platformUrl}${Gc}`,t.analytics.apiBaseUrl=yC(r.payload.platformUrl,t.organizationId));}).addCase(Pt,(t,r)=>{r.payload.apiBaseUrl&&(t.search.apiBaseUrl=r.payload.apiBaseUrl),r.payload.locale&&(t.search.locale=r.payload.locale),r.payload.timezone&&(t.search.timezone=r.payload.timezone);}).addCase(ka,(t,r)=>{ie(r.payload.enabled)||(t.analytics.enabled=r.payload.enabled),ie(r.payload.originLevel2)||(t.analytics.originLevel2=r.payload.originLevel2),ie(r.payload.originLevel3)||(t.analytics.originLevel3=r.payload.originLevel3),ie(r.payload.apiBaseUrl)||(t.analytics.apiBaseUrl=r.payload.apiBaseUrl),ie(r.payload.runtimeEnvironment)||(t.analytics.runtimeEnvironment=r.payload.runtimeEnvironment),ie(r.payload.anonymous)||(t.analytics.anonymous=r.payload.anonymous);}).addCase(Da,t=>{t.analytics.enabled=!1;}).addCase(Va,t=>{t.analytics.enabled=!0;}).addCase(Ni,(t,r)=>{t.analytics.originLevel2=r.payload.originLevel2;}).addCase(Mi,(t,r)=>{t.analytics.originLevel3=r.payload.originLevel3;}).addCase(Ur,(t,r)=>{t.analytics.originLevel2=r.payload;}).addCase(ne,(t,r)=>{t.analytics.originLevel2=r.payload.tab||t.analytics.originLevel2;}));var SC=new K({each:q,required:!0}),jf=(e,t)=>(x(e,q),ea(t)?x(t,q):x(t,SC),{payload:{contextKey:e,contextValue:t}}),Na=h$1("context/set",e=>{for(let[t,r]of Object.entries(e))jf(t,r);return {payload:e}}),Ma=h$1("context/add",e=>jf(e.contextKey,e.contextValue)),Qa=h$1("context/remove",e=>x(e,q));O(dt(),e=>{e.addCase(Na,(t,r)=>{t.contextValues=r.payload;}).addCase(Ma,(t,r)=>{t.contextValues[r.payload.contextKey]=r.payload.contextValue;}).addCase(Qa,(t,r)=>{delete t.contextValues[r.payload];}).addCase(oe.fulfilled,(t,r)=>{!r.payload||(t.contextValues=r.payload.context.contextValues);});});var $r=h$1("debug/enable"),ja=h$1("debug/disable");var Bf=O(Ne(),e=>{e.addCase($r,()=>!0).addCase(ja,()=>!1).addCase(ne,(t,r)=>{var a;return (a=r.payload.debug)!=null?a:t});});var Uf=O(tn,e=>e);var $f=O(qn(),e=>{e.addCase(Fa,t=>{t.enableDidYouMean=!0;}).addCase(mi,t=>{t.enableDidYouMean=!1;}).addCase(b.pending,t=>{t.queryCorrection=On(),t.wasAutomaticallyCorrected=!1,t.wasCorrectedTo="";}).addCase(b.fulfilled,(t,r)=>{t.queryCorrection=r.payload.response.queryCorrections[0]||On(),t.originalQuery=r.payload.originalQuery,t.wasAutomaticallyCorrected=r.payload.automaticallyCorrected;}).addCase(Ft,(t,r)=>{t.wasCorrectedTo=r.payload;});});var te=h$1("facetOptions/update",e=>x(e,{freezeFacetOrder:new W({required:!1})}));var _f=O(Xt(),e=>{e.addCase(te,(t,r)=>({...t,...r.payload})).addCase(b.fulfilled,t=>{t.freezeFacetOrder=!1;}).addCase(b.rejected,t=>{t.freezeFacetOrder=!1;}).addCase(oe.fulfilled,(t,r)=>{var a,o;return (o=(a=r.payload)==null?void 0:a.facetOptions)!=null?o:t});});var Y=q;var xC={state:new pe({required:!0}),numberOfResults:new L({required:!0,min:0}),value:new A({required:!0,emptyAllowed:!0}),path:new K({required:!0,each:q}),moreValuesAvailable:new W({required:!1})};function sl(e){e.children.forEach(t=>{sl(t);}),Me({state:e.state,numberOfResults:e.numberOfResults,value:e.value,path:e.path,moreValuesAvailable:e.moreValuesAvailable},xC);}var FC={facetId:Y,field:q,delimitingCharacter:new A({required:!1,emptyAllowed:!0}),filterFacetCount:new W({required:!1}),injectionDepth:new L({required:!1,min:0}),numberOfValues:new L({required:!1,min:1}),sortCriteria:new pe({required:!1}),basePath:new K({required:!1,each:q}),filterByBasePath:new W({required:!1})},La=h$1("categoryFacet/register",e=>x(e,FC)),dr=h$1("categoryFacet/toggleSelectValue",e=>{try{return Me(e.facetId,q),sl(e.selection),{payload:e,error:null}}catch(t){return {payload:e,error:Ut(t)}}}),wt=h$1("categoryFacet/deselectAll",e=>x(e,Y)),_r=h$1("categoryFacet/updateNumberOfValues",e=>x(e,{facetId:Y,numberOfValues:new L({required:!0,min:1})})),Ba=h$1("categoryFacet/updateSortCriterion",e=>x(e,{facetId:Y,criterion:new pe}));function Ua(e,t){let{facetId:r,criterion:a}=t,o=e[r];!o||(o.sortCriteria=a);}function Ui(e){!e||(e.currentValues=e.currentValues.map(t=>({...t,state:"idle"})),e.preventAutoSelect=!0);}function $i(e,t){!e||(e.numberOfValues=t);}var dn={facetId:Y,captions:new j({options:{required:!1}}),numberOfValues:new L({required:!1,min:1}),query:new A({required:!1,emptyAllowed:!0})};var CC={path:new K({required:!0,each:q}),displayValue:ce,rawValue:ce,count:new L({required:!0,min:0})},$a=h$1("categoryFacet/selectSearchResult",e=>x(e,{facetId:Y,value:new j({values:CC})})),_a=h$1("categoryFacetSearch/register",e=>x(e,dn));function _i(e,t){let r=e[t];!r||(r.request.numberOfValues=r.initialNumberOfValues,r.request.currentValues=[],r.request.preventAutoSelect=!0);}function cl(e,t,r){e.currentValues=RC(t,r),e.numberOfValues=t.length?1:r,e.preventAutoSelect=!0;}function RC(e,t){if(!e.length)return [];let r=zf(e[0],t),a=r;for(let o of e.splice(1)){let n=zf(o,t);a.children.push(n),a=n;}return a.state="selected",a.retrieveChildren=!0,[r]}function zf(e,t){return {value:e,retrieveCount:t,children:[],state:"idle",retrieveChildren:!1}}var Hf=O(gt(),e=>{e.addCase(La,(t,r)=>{let a=r.payload,{facetId:o}=a;if(o in t)return;let n=vC(a),i=n.numberOfValues;t[o]={request:n,initialNumberOfValues:i};}).addCase(oe.fulfilled,(t,r)=>{var a,o;return (o=(a=r.payload)==null?void 0:a.categoryFacetSet)!=null?o:t}).addCase(ne,(t,r)=>{let a=r.payload.cf||{};Object.keys(t).forEach(o=>{let n=t[o].request,i=a[o]||[];(i.length||n.currentValues.length)&&cl(n,i,t[o].initialNumberOfValues);});}).addCase(Ba,(t,r)=>{var i;let{facetId:a,criterion:o}=r.payload,n=(i=t[a])==null?void 0:i.request;!n||(n.sortCriteria=o);}).addCase(dr,(t,r)=>{var l;let{facetId:a,selection:o,retrieveCount:n}=r.payload,i=(l=t[a])==null?void 0:l.request;if(!i)return;let{path:s}=o,u=s.slice(0,s.length-1),c=bC(i,u,n);if(c.length){let f=c[0];f.retrieveChildren=!0,f.state="selected",f.children=[];return}let d=Wf(o.value,n);d.state="selected",c.push(d),i.numberOfValues=1;}).addCase(wt,(t,r)=>{let a=r.payload;_i(t,a);}).addCase(ze,t=>{Object.keys(t).forEach(r=>_i(t,r));}).addCase(Pe,t=>{Object.keys(t).forEach(r=>_i(t,r));}).addCase(bt,(t,r)=>Object.keys(t).forEach(a=>{t[a].request.preventAutoSelect=!r.payload.allow;})).addCase(_r,(t,r)=>{var i;let{facetId:a,numberOfValues:o}=r.payload,n=(i=t[a])==null?void 0:i.request;if(!!n){if(!n.currentValues.length)return $i(n,o);AC(t,r.payload);}}).addCase($a,(t,r)=>{let{facetId:a,value:o}=r.payload,n=t[a];if(!n)return;let i=[...o.path,o.rawValue];cl(n.request,i,n.initialNumberOfValues);}).addCase(b.fulfilled,(t,r)=>{let{facets:a}=r.payload.response;a.forEach(o=>{var u;if(!PC(t,o))return;let n=o.facetId,i=(u=t[n])==null?void 0:u.request;if(!i)return;let s=wC(i,o);i.currentValues=s?[]:i.currentValues,i.preventAutoSelect=!1;});});}),ul={delimitingCharacter:";",filterFacetCount:!0,injectionDepth:1e3,numberOfValues:5,sortCriteria:"occurrences",basePath:[],filterByBasePath:!0};function bC(e,t,r){let a=e.currentValues;for(let o of t){let n=a[0];(!n||o!==n.value)&&(n=Wf(o,r),a.length=0,a.push(n)),n.retrieveChildren=!1,n.state="idle",a=n.children;}return a}function vC(e){return {...ul,currentValues:[],preventAutoSelect:!1,type:"hierarchical",...e}}function Wf(e,t){return {value:e,state:"idle",children:[],retrieveChildren:!0,retrieveCount:t}}function AC(e,t){var n;let{facetId:r,numberOfValues:a}=t,o=(n=e[r])==null?void 0:n.request.currentValues[0];if(!!o){for(;o.children.length&&(o==null?void 0:o.state)!=="selected";)o=o.children[0];o.retrieveCount=a;}}function PC(e,t){return t.facetId in e}function wC(e,t){let r=_e(e.currentValues).parents,a=_e(t.values).parents;return r.length!==a.length}var Yf=O(Zt(),e=>{e.addCase(b.fulfilled,(t,r)=>r.payload.response.facets.map(a=>a.facetId)).addCase(oe.fulfilled,(t,r)=>{var a,o;return (o=(a=r.payload)==null?void 0:a.facetOrder)!=null?o:t});});function zi(e,t,r){let{facetId:a}=t;if(e[a])return;let o=!1,n={...Et,...t},i=r();e[a]={options:n,isLoading:o,response:i,initialNumberOfValues:n.numberOfValues,requestId:""};}function Hi(e,t){let{facetId:r,...a}=t,o=e[r];!o||(o.options={...o.options,...a});}function Wi(e,t,r){let a=e[t];!a||(a.requestId=r,a.isLoading=!0);}function Yi(e,t){let r=e[t];!r||(r.isLoading=!1);}function Ki(e,t,r){let{facetId:a,response:o}=t,n=e[a];!n||n.requestId===r&&(n.isLoading=!1,n.response=o);}function pn(e,t,r){let{facetId:a}=t,o=e[a];!o||(o.requestId="",o.isLoading=!1,o.response=r(),o.options.numberOfValues=o.initialNumberOfValues,o.options.query=Et.query);}function Gi(e,t){Object.keys(e).forEach(r=>pn(e,{facetId:r},t));}var Et={captions:{},numberOfValues:10,query:""};var EC={facetId:Y,value:new j({values:{displayValue:ce,rawValue:ce,count:new L({required:!0,min:0})}})},Ji=h$1("facetSearch/register",e=>x(e,dn)),pr=h$1("facetSearch/update",e=>x(e,dn)),zr=h$1("facetSearch/toggleSelectValue",e=>x(e,EC));var za=e=>V("analytics/facet/showMore",D.Search,(t,r)=>{x(e,Y);let a=Mr(e,et(r));return t.logFacetShowMore(a)})(),Ha=e=>V("analytics/facet/showLess",D.Search,(t,r)=>{x(e,Y);let a=Mr(e,et(r));return t.logFacetShowLess(a)})(),Kf=e=>V("analytics/facet/search",D.Search,(t,r)=>{x(e,Y);let a=et(r),o=Mr(e,a);return t.logFacetSearch(o)})(),Ot=e=>V("analytics/facet/sortChange",D.Search,(t,r)=>{x(e,{facetId:Y,criterion:new pe({required:!0})});let{facetId:a,criterion:o}=e,n=et(r),s={...Mr(a,n),criteria:o};return t.logFacetUpdateSort(s)})(),Te=e=>V("analytics/facet/reset",D.Search,(t,r)=>{x(e,Y);let a=et(r),o=Mr(e,a);return t.logFacetClearAll(o)})(),Ce=e=>V("analytics/facet/select",D.Search,(t,r)=>{x(e,{facetId:Y,facetValue:q});let a=et(r),o=ai(e,a);return t.logFacetSelect(o)})(),at=e=>V("analytics/facet/deselect",D.Search,(t,r)=>{x(e,{facetId:Y,facetValue:q});let a=et(r),o=ai(e,a);return t.logFacetDeselect(o)})(),Xi=e=>V("analytics/facet/breadcrumb",D.Search,(t,r)=>{x(e,{facetId:Y,facetValue:q});let a=ai(e,et(r));return t.logBreadcrumbFacet(a)})();var Gf=async(e,t)=>{let{captions:r,query:a,numberOfValues:o}=t.facetSearchSet[e].options,{field:n,currentValues:i,filterFacetCount:s}=t.facetSet[e],u=(await ur(t)).request,c=i.filter(l=>l.state!=="idle").map(l=>l.value),d=`*${a}*`;return {url:t.configuration.search.apiBaseUrl,accessToken:t.configuration.accessToken,organizationId:t.configuration.organizationId,captions:r,numberOfValues:o,query:d,field:n,ignoreValues:c,searchContext:u,filterFacetCount:s,type:"specific"}};var Jf=async(e,t)=>{let r=t.categoryFacetSearchSet[e].options,a=t.categoryFacetSet[e].request,{captions:o,query:n,numberOfValues:i}=r,{field:s,delimitingCharacter:u,basePath:c,filterFacetCount:d}=a,l=(await ur(t)).request,f=OC(a),p=f.length?[f]:[],m=`*${n}*`;return {url:t.configuration.search.apiBaseUrl,accessToken:t.configuration.accessToken,organizationId:t.configuration.organizationId,basePath:c,captions:o,numberOfValues:i,query:m,field:s,delimitingCharacter:u,ignorePaths:p,searchContext:l,filterFacetCount:d,type:"hierarchical"}},OC=e=>{let t=[],r=e.currentValues[0];for(;r;)t.push(r.value),r=r.children[0];return t};var ot=Z("facetSearch/executeSearch",async(e,{dispatch:t,getState:r,extra:{apiClient:a,validatePayload:o}})=>{let n=r(),i;o(e,q),qC(n,e)?i=await Gf(e,n):i=await Jf(e,n);let s=await a.facetSearch(i);return t(Kf(e)),{facetId:e,response:s}}),Wa=h$1("facetSearch/clearResults",e=>x(e,{facetId:Y})),qC=(e,t)=>e.facetSearchSet!==void 0&&e.facetSet!==void 0&&e.facetSet[t]!==void 0;var Xf=O(oa(),e=>{e.addCase(_a,(t,r)=>{let a=r.payload;zi(t,a,ll);}).addCase(pr,(t,r)=>{Hi(t,r.payload);}).addCase(ot.pending,(t,r)=>{let a=r.meta.arg;Wi(t,a,r.meta.requestId);}).addCase(ot.rejected,(t,r)=>{let a=r.meta.arg;Yi(t,a);}).addCase(ot.fulfilled,(t,r)=>{Ki(t,r.payload,r.meta.requestId);}).addCase(Wa,(t,{payload:{facetId:r}})=>{pn(t,{facetId:r},ll);}).addCase(b.fulfilled,t=>{Gi(t,ll);});});function ll(){return {moreValuesAvailable:!1,values:[]}}var Zf=O(aa(),e=>{e.addCase(Ji,(t,r)=>{let a=r.payload;zi(t,a,dl);}).addCase(pr,(t,r)=>{Hi(t,r.payload);}).addCase(ot.pending,(t,r)=>{let a=r.meta.arg;Wi(t,a,r.meta.requestId);}).addCase(ot.rejected,(t,r)=>{let a=r.meta.arg;Yi(t,a);}).addCase(ot.fulfilled,(t,r)=>{Ki(t,r.payload,r.meta.requestId);}).addCase(Wa,(t,{payload:r})=>{pn(t,r,dl);}).addCase(b.fulfilled,t=>{Gi(t,dl);});});function dl(){return {moreValuesAvailable:!1,values:[]}}var Zi={value:q,numberOfResults:new L({min:0}),state:q};var IC={facetId:Y,field:new A({required:!0,emptyAllowed:!0}),delimitingCharacter:new A({required:!1,emptyAllowed:!0}),filterFacetCount:new W({required:!1}),injectionDepth:new L({required:!1,min:0}),numberOfValues:new L({required:!1,min:1}),sortCriteria:new pe({required:!1})},Ya=h$1("facet/register",e=>x(e,IC)),qt=h$1("facet/toggleSelectValue",e=>x(e,{facetId:Y,selection:new j({values:Zi})})),Se=h$1("facet/deselectAll",e=>x(e,Y)),Ka=h$1("facet/updateSortCriterion",e=>x(e,{facetId:Y,criterion:new pe({required:!0})})),Hr=h$1("facet/updateNumberOfValues",e=>x(e,{facetId:Y,numberOfValues:new L({required:!0,min:1})})),Wr=h$1("facet/updateIsFieldExpanded",e=>x(e,{facetId:Y,isFieldExpanded:new W({required:!0})})),Ga=h$1("facet/updateFreezeCurrentValues",e=>x(e,{facetId:Y,freezeCurrentValues:new W({required:!0})}));var em=h$1("productlisting/setUrl",e=>x(e,{url:new A({required:!0,url:!0})})),tm=h$1("productlisting/setAdditionalFields",e=>x(e,{additionalFields:new K({required:!0,each:new A({required:!0,emptyAllowed:!1})})})),fr=Z("productlisting/fetch",async(e,{getState:t,dispatch:r,rejectWithValue:a,extra:o})=>{let n=t(),{apiClient:i}=o,s=await i.getProducts(await TC(n));return ue(s)?(r(Ca(s.error)),a(s.error)):{response:s.success}}),TC=async e=>{var a,o,n;let t=DC(e),r=await ve();return {accessToken:e.configuration.accessToken,organizationId:e.configuration.organizationId,platformUrl:e.configuration.platformUrl,url:(a=e.productListing)==null?void 0:a.url,...e.configuration.analytics.enabled&&r?{clientId:r}:{},...((o=e.productListing.additionalFields)==null?void 0:o.length)?{additionalFields:e.productListing.additionalFields}:{},...e.productListing.advancedParameters&&kC(e.productListing.advancedParameters)?{advancedParameters:e.productListing.advancedParameters||{}}:{},...t.length&&{facets:{requests:t}},...e.pagination&&{pagination:{numberOfValues:e.pagination.numberOfResults,page:Math.ceil(e.pagination.firstResult/(e.pagination.numberOfResults||1))+1}},...(((n=e.sort)==null?void 0:n.by)||Br.Relevance)!==Br.Relevance&&{sort:e.sort}}};function kC(e){return e.debug}function DC(e){var t;return wa(VC(e),(t=e.facetOrder)!=null?t:[])}function VC(e){return [...pl(e.facetSet),...pl(e.numericFacetSet),...pl(e.dateFacetSet),...NC(e.categoryFacetSet)]}function NC(e){return Object.values(e||{}).map(t=>t.request)}function pl(e={}){return Object.keys(e).map(t=>e[t])}var rm=O(lt(),e=>{e.addCase(Ya,(t,r)=>{let{facetId:a}=r.payload;a in t||(t[a]=MC(r.payload));}).addCase(oe.fulfilled,(t,r)=>{if(!!r.payload&&Object.keys(r.payload.facetSet).length!==0)return r.payload.facetSet}).addCase(ne,(t,r)=>{let a=r.payload.f||{};Object.keys(t).forEach(n=>{let i=t[n],s=a[n]||[];i.currentValues=s.map(om),i.preventAutoSelect=s.length>0,i.numberOfValues=Math.max(s.length,i.numberOfValues);});}).addCase(qt,(t,r)=>{let{facetId:a,selection:o}=r.payload,n=t[a];if(!n)return;let i=n.currentValues.find(u=>u.value===o.value);if(!i)return;let s=i.state==="selected";i.state=s?"idle":"selected",n.freezeCurrentValues=!0,n.preventAutoSelect=!0;}).addCase(Ga,(t,r)=>{let{facetId:a,freezeCurrentValues:o}=r.payload,n=t[a];!n||(n.freezeCurrentValues=o);}).addCase(Se,(t,r)=>{let a=t[r.payload];Ui(a);}).addCase(ze,t=>{Object.keys(t).forEach(r=>{let a=t[r];Ui(a);});}).addCase(Pe,t=>{Object.keys(t).forEach(r=>{let a=t[r];Ui(a);});}).addCase(bt,(t,r)=>Object.keys(t).forEach(a=>{t[a].preventAutoSelect=!r.payload.allow;})).addCase(Ka,(t,r)=>{Ua(t,r.payload);}).addCase(Hr,(t,r)=>{let{facetId:a,numberOfValues:o}=r.payload;$i(t[a],o);}).addCase(Wr,(t,r)=>{let{facetId:a,isFieldExpanded:o}=r.payload,n=t[a];!n||(n.isFieldExpanded=o);}).addCase(b.fulfilled,(t,r)=>{r.payload.response.facets.forEach(o=>am(t[o.facetId],o));}).addCase(fr.fulfilled,(t,r)=>{var o,n;(((n=(o=r.payload.response)==null?void 0:o.facets)==null?void 0:n.results)||[]).forEach(i=>am(t[i.facetId],i));}).addCase(zr,(t,r)=>{let{facetId:a,value:o}=r.payload,n=t[a];if(!n)return;let{rawValue:i}=o,{currentValues:s}=n,u=s.find(m=>m.value===i);if(u){u.state="selected";return}let c=om(i),d=s.findIndex(m=>m.state==="idle"),l=d===-1?s.length:d,f=s.slice(0,l),p=s.slice(l+1);n.currentValues=[...f,c,...p],n.numberOfValues=n.currentValues.length,n.freezeCurrentValues=!0,n.preventAutoSelect=!0;});});function am(e,t){!e||(e.currentValues=t.values.map(QC),e.freezeCurrentValues=!1,e.preventAutoSelect=!1);}var fl={delimitingCharacter:">",filterFacetCount:!0,injectionDepth:1e3,numberOfValues:8,sortCriteria:"automatic"};function MC(e){return {...fl,type:"specific",currentValues:[],freezeCurrentValues:!1,isFieldExpanded:!1,preventAutoSelect:!1,...e}}function QC(e){let{value:t,state:r}=e;return {value:t,state:r}}function om(e){return {value:e,state:"selected"}}var gl=xe(Xr());var Ja={state:q,start:new L({required:!0}),end:new L({required:!0}),endInclusive:new W({required:!0}),numberOfResults:new L({required:!0,min:0})},Xa={start:q,end:q,endInclusive:new W({required:!0}),state:q,numberOfResults:new L({required:!0,min:0})},Za=e=>({facetId:Y,selection:typeof e.start=="string"?new j({values:Xa}):new j({values:Ja})});var eo=h$1("rangeFacet/updateSortCriterion",e=>x(e,{facetId:Y,criterion:new pe({required:!0})}));var ml=xe(Xr()),nm=xe(zu());ml.default.extend(nm.default);function Yr(e){var n,i;Oe(e.useLocalTime)||console.warn('The "useLocalTime" option for "buildDateRange" is deprecated. Please use the "timezone" engine configuration option instead.');let t=im(e.start,e),r=im(e.end,e),a=(n=e.endInclusive)!=null?n:!1,o=(i=e.state)!=null?i:"idle";return {start:t,end:r,endInclusive:a,state:o}}function im(e,t){let{dateFormat:r}=t;return ef(e)?(Lr(e),Jp(e)):typeof e=="string"&&Ct(e)?(Lr(e),e):(hi(e,r),on((0, ml.default)(e,r)))}var jC={start:q,end:q,endInclusive:new W({required:!0}),state:q},LC={facetId:Y,field:q,currentValues:new K({required:!1,each:new j({values:jC})}),generateAutomaticRanges:new W({required:!0}),filterFacetCount:new W({required:!1}),injectionDepth:new L({required:!1,min:0}),numberOfValues:new L({required:!1,min:1}),sortCriteria:new pe({required:!1}),rangeAlgorithm:new pe({required:!1})};function sm(e){return Ct(e)?sn(e):e}function es(e){!e.currentValues||e.currentValues.forEach(t=>{let{start:r,end:a}=Yr(t);if((0, gl.default)(sm(r)).isAfter((0, gl.default)(sm(a))))throw new Error(`The start value is greater than the end value for the date range ${t.start} to ${t.end}`)});}var mr=h$1("dateFacet/register",e=>{try{return Me(e,LC),es(e),{payload:e,error:null}}catch(t){return {payload:e,error:Ut(t)}}}),It=h$1("dateFacet/toggleSelectValue",e=>x(e,{facetId:Y,selection:new j({values:Xa})})),_t=h$1("dateFacet/updateFacetValues",e=>{try{return Me(e,{facetId:Y,values:new K({each:new j({values:Xa})})}),es({currentValues:e.values}),{payload:e,error:null}}catch(t){return {payload:e,error:Ut(t)}}}),ts=eo,rs=Se;var as={filterFacetCount:!0,injectionDepth:1e3,numberOfValues:8,sortCriteria:"ascending",rangeAlgorithm:"even"};function os(e,t){let{facetId:r}=t;if(r in e)return;let a=cm(t);e[r]={...t,numberOfValues:a};}function ns(e,t,r){let a=e[t];!a||(a.currentValues=r,a.numberOfValues=cm(a));}function is(e,t,r){let a=e[t];if(!a)return;let o=hl(a.currentValues,r);if(!o)return;let n=o.state==="selected";o.state=n?"idle":"selected",a.preventAutoSelect=!0;}function gr(e,t){let r=e[t];!r||r.currentValues.forEach(a=>a.state="idle");}function ss(e,t){Object.entries(e).forEach(([r,a])=>{let o=t[r]||[];a.currentValues.forEach(s=>{let u=!!hl(o,s);return s.state=u?"selected":"idle",s});let n=o.filter(s=>!hl(a.currentValues,s)),i=a.currentValues;i.push(...n),a.numberOfValues=Math.max(a.numberOfValues,i.length);});}function cs(e,t,r){t.forEach(a=>{let o=a.facetId,n=e[o];if(!n)return;let i=r(a.values);n.currentValues=i,n.preventAutoSelect=!1;});}function hl(e,t){let{start:r,end:a}=t;return e.find(o=>o.start===r&&o.end===a)}function cm(e){let{generateAutomaticRanges:t,currentValues:r,numberOfValues:a}=e;return t?Math.max(a,r.length):r.length}var um=O(pt(),e=>{e.addCase(mr,(t,r)=>{let{payload:a}=r,o=BC(a);os(t,o);}).addCase(oe.fulfilled,(t,r)=>{var a,o;return (o=(a=r.payload)==null?void 0:a.dateFacetSet)!=null?o:t}).addCase(ne,(t,r)=>{let a=r.payload.df||{};ss(t,a);}).addCase(It,(t,r)=>{let{facetId:a,selection:o}=r.payload;is(t,a,o);}).addCase(_t,(t,r)=>{let{facetId:a,values:o}=r.payload;ns(t,a,o);}).addCase(rs,(t,r)=>{gr(t,r.payload);}).addCase(ze,t=>{Object.keys(t).forEach(r=>{gr(t,r);});}).addCase(Pe,t=>{Object.keys(t).forEach(r=>{gr(t,r);});}).addCase(ts,(t,r)=>{Ua(t,r.payload);}).addCase(b.fulfilled,(t,r)=>{let a=r.payload.response.facets;cs(t,a,UC);});});function BC(e){return {...as,currentValues:[],preventAutoSelect:!1,type:"dateRange",...e}}function UC(e){return e.map(t=>{let{numberOfResults:r,...a}=t;return a})}var $C={state:q,start:new L({required:!0}),end:new L({required:!0}),endInclusive:new W({required:!0})},_C={facetId:Y,field:q,currentValues:new K({required:!1,each:new j({values:$C})}),generateAutomaticRanges:new W({required:!0}),filterFacetCount:new W({required:!1}),injectionDepth:new L({required:!1,min:0}),numberOfValues:new L({required:!1,min:1}),sortCriteria:new pe({required:!1}),rangeAlgorithm:new pe({required:!1})};function us(e){!e.currentValues||e.currentValues.forEach(({start:t,end:r})=>{if(t>r)throw new Error(`The start value is greater than the end value for the numeric range ${t} to ${r}`)});}var hr=h$1("numericFacet/register",e=>{try{return x(e,_C),us(e),{payload:e,error:null}}catch(t){return {payload:e,error:Ut(t)}}}),Tt=h$1("numericFacet/toggleSelectValue",e=>x(e,{facetId:Y,selection:new j({values:Ja})})),zt=h$1("numericFacet/updateFacetValues",e=>{try{return Me(e,{facetId:Y,values:new K({each:new j({values:Ja})})}),us({currentValues:e.values}),{payload:e,error:null}}catch(t){return {payload:e,error:Ut(t)}}}),ls=eo,ds=Se;var lm=O(ft(),e=>{e.addCase(hr,(t,r)=>{let{payload:a}=r,o=zC(a);os(t,o);}).addCase(oe.fulfilled,(t,r)=>{var a,o;return (o=(a=r.payload)==null?void 0:a.numericFacetSet)!=null?o:t}).addCase(ne,(t,r)=>{let a=r.payload.nf||{};ss(t,a);}).addCase(Tt,(t,r)=>{let{facetId:a,selection:o}=r.payload;is(t,a,o);}).addCase(zt,(t,r)=>{let{facetId:a,values:o}=r.payload;ns(t,a,o);}).addCase(ds,(t,r)=>{gr(t,r.payload);}).addCase(ze,t=>{Object.keys(t).forEach(r=>{gr(t,r);});}).addCase(Pe,t=>{Object.keys(t).forEach(r=>{gr(t,r);});}).addCase(ls,(t,r)=>{Ua(t,r.payload);}).addCase(b.fulfilled,(t,r)=>{let a=r.payload.response.facets;cs(t,a,HC);});});function zC(e){return {...as,currentValues:[],preventAutoSelect:!1,type:"numericalRange",...e}}function HC(e){return e.map(t=>{let{numberOfResults:r,...a}=t;return a})}var WC=new K({each:q,required:!0}),yr=h$1("fields/registerFieldsToInclude",e=>x(e,WC)),to=h$1("fields/fetchall/enable"),Kr=h$1("fields/fetchall/disable"),ro=Z("fields/description",async(e,{extra:t,getState:r,rejectWithValue:a})=>{let o=r(),{accessToken:n,organizationId:i}=o.configuration,{apiBaseUrl:s}=o.configuration.search,u=await t.apiClient.fieldDescriptions({accessToken:n,organizationId:i,url:s});return ue(u)?a(u.error):u.success.fields});var yl={collectionField:new A,parentField:new A,childField:new A,numberOfFoldedResults:new L({min:0})},Sr=h$1("folding/register",e=>x(e,yl)),xr=Z("folding/loadCollection",async(e,{getState:t,rejectWithValue:r,extra:{apiClient:a}})=>{let o=t(),n=await Si(o),i=await a.search({...n,q:YC(o),enableQuerySyntax:!0,cq:`@${o.folding.fields.collection}=${e}`,filterField:o.folding.fields.collection,childField:o.folding.fields.parent,parentField:o.folding.fields.child,filterFieldRange:100});return ue(i)?r(i.error):{collectionId:e,results:i.success.results}});function YC(e){return e.query.q===""?"":e.query.enableQuerySyntax?`${e.query.q} OR @uri`:`( <@- ${e.query.q} -@> ) OR @uri`}var dm=O(ra(),e=>e.addCase(yr,(t,r)=>{t.fieldsToInclude=[...new Set(t.fieldsToInclude.concat(r.payload))];}).addCase(to,t=>{t.fetchAllFields=!0;}).addCase(Kr,t=>{t.fetchAllFields=!1;}).addCase(ro.fulfilled,(t,{payload:r})=>{t.fieldsDescription=r;}).addCase(Sr,(t,{payload:r})=>{var o,n,i;let a=sa().fields;t.fieldsToInclude.push((o=r.collectionField)!=null?o:a.collection,(n=r.parentField)!=null?n:a.parent,(i=r.childField)!=null?i:a.child);}));function KC(e,t){return e.raw[t.collection]}function Sl(e,t){return e.raw[t.parent]}function fn(e,t){let r=e.raw[t.child];return ci(r)?r[0]:r}function GC(e,t){return (e||t)!==void 0&&e===t}function pm(e,t,r,a=[]){let o=fn(e,r);return o?a.indexOf(o)!==-1?[]:t.filter(n=>{let i=fn(n,r)===fn(e,r);return Sl(n,r)===o&&!i}).map(n=>({result:n,children:pm(n,t,r,[...a,o])})):[]}function JC(e,t){return e.find(r=>{let a=Sl(r,t)===void 0,o=GC(Sl(r,t),fn(r,t));return a||o})}function XC(e,t){var o;let r=li(e),a=(o=JC(r,t))!=null?o:e;return {result:a,children:pm(a,r,t),moreResultsAvailable:!0,isLoadingMoreResults:!1}}function xl(e,t){let r={};return e.forEach(a=>{let o=KC(a,t);!o||!fn(a,t)||(r[o]=XC(a,t));}),r}O(sa(),e=>e.addCase(b.fulfilled,(t,{payload:r})=>{t.collections=t.enabled?xl(r.response.results,t.fields):{};}).addCase(vt.fulfilled,(t,{payload:r})=>{t.collections=t.enabled?{...t.collections,...xl(r.response.results,t.fields)}:{};}).addCase(Sr,(t,{payload:r})=>{var a,o,n,i;return t.enabled?t:{enabled:!0,collections:{},fields:{collection:(a=r.collectionField)!=null?a:t.fields.collection,parent:(o=r.parentField)!=null?o:t.fields.parent,child:(n=r.childField)!=null?n:t.fields.child},filterFieldRange:(i=r.numberOfFoldedResults)!=null?i:t.filterFieldRange}}).addCase(xr.pending,(t,{meta:r})=>{let a=r.arg;t.collections[a].isLoadingMoreResults=!0;}).addCase(xr.rejected,(t,{meta:r})=>{let a=r.arg;t.collections[a].isLoadingMoreResults=!1;}).addCase(xr.fulfilled,(t,{payload:{collectionId:r,results:a}})=>{let o=xl(a,t.fields);t.collections[r]=o[r],t.collections[r].moreResultsAvailable=!1;}));var hm=xe(gm());function ym(e,t){return e.length===t.length&&e.findIndex((r,a)=>t[a]!==r)===-1}var fs=(0, hm.createCustomEqual)(e=>(t,r)=>Array.isArray(t)&&Array.isArray(r)?t.length!==r.length?!1:t.every(a=>r.findIndex(o=>e(a,o))!==-1):e(t,r));var Sm=O(Tn(),e=>{e.addCase(cr,(t,r)=>ZC(t,r.payload)?void 0:r.payload);}),ZC=(e,t)=>eR(e.context,t.context)&&tR(e.dictionaryFieldContext,t.dictionaryFieldContext)&&sR(e.advancedSearchQueries,t.advancedSearchQueries)&&rR(e.tabSet,t.tabSet)&&aR(e.staticFilterSet,t.staticFilterSet)&&Fl(e.facetSet,t.facetSet)&&Fl(e.dateFacetSet,t.dateFacetSet)&&Fl(e.numericFacetSet,t.numericFacetSet)&&oR(e.categoryFacetSet,t.categoryFacetSet)&&nR(e.pagination,t.pagination)&&iR(e.query,t.query)&&cR(e,t)&&uR(e.pipeline,t.pipeline)&&lR(e.searchHub,t.searchHub)&&dR(e.facetOrder,t.facetOrder)&&pR(e.debug,t.debug),eR=(e,t)=>JSON.stringify(e.contextValues)===JSON.stringify(t.contextValues),tR=(e,t)=>JSON.stringify(e.contextValues)===JSON.stringify(t.contextValues),rR=(e,t)=>{let r=xm(e),a=xm(t);return (r==null?void 0:r.id)===(a==null?void 0:a.id)},xm=e=>Object.values(e).find(t=>t.isActive),aR=(e,t)=>{for(let[r,a]of Object.entries(t)){if(!e[r])return !1;let o=Fm(e[r]),n=Fm(a);if(JSON.stringify(o)!==JSON.stringify(n))return !1}return !0},Fm=e=>e.values.filter(t=>t.state!=="idle"),Fl=(e,t)=>{for(let[r,a]of Object.entries(t)){if(!e[r])return !1;let o=e[r].currentValues.filter(i=>i.state==="selected"),n=a.currentValues.filter(i=>i.state==="selected");if(JSON.stringify(o)!==JSON.stringify(n))return !1}return !0},oR=(e,t)=>{var r;for(let[a,o]of Object.entries(t)){if(!e[a])return !1;let n=_e((r=e[a])==null?void 0:r.request.currentValues).parents.map(({value:s})=>s),i=_e(o==null?void 0:o.request.currentValues).parents.map(({value:s})=>s);if(JSON.stringify(n)!==JSON.stringify(i))return !1}return !0},nR=(e,t)=>e.firstResult===t.firstResult&&e.numberOfResults===t.numberOfResults,iR=(e,t)=>JSON.stringify(e)===JSON.stringify(t),sR=(e,t)=>JSON.stringify(e)===JSON.stringify(t),cR=(e,t)=>e.sortCriteria===t.sortCriteria,uR=(e,t)=>e===t,lR=(e,t)=>e===t,dR=(e,t)=>ym(e,t),pR=(e,t)=>e===t;var ao=1,fR=5e3,Cm=O(Ee(),e=>{e.addCase(Ra,(t,r)=>{let a=Cl(t),o=r.payload;t.numberOfResults=o,t.firstResult=mn(a,o);}).addCase(ba,(t,r)=>{t.numberOfResults=r.payload,t.firstResult=0;}).addCase(va,(t,r)=>{let a=r.payload;t.firstResult=mn(a,t.numberOfResults);}).addCase(Rt,(t,r)=>{let a=r.payload;t.firstResult=mn(a,t.numberOfResults);}).addCase(Pa,t=>{let r=Cl(t),a=Math.max(r-1,ao);t.firstResult=mn(a,t.numberOfResults);}).addCase(Aa,t=>{let r=Cl(t),a=mR(t),o=Math.min(r+1,a);t.firstResult=mn(o,t.numberOfResults);}).addCase(oe.fulfilled,(t,r)=>{r.payload&&(t.numberOfResults=r.payload.pagination.numberOfResults,t.firstResult=r.payload.pagination.firstResult);}).addCase(ne,(t,r)=>{var a,o;t.firstResult=(a=r.payload.firstResult)!=null?a:t.firstResult,t.numberOfResults=(o=r.payload.numberOfResults)!=null?o:t.numberOfResults;}).addCase(b.fulfilled,(t,r)=>{let{response:a}=r.payload;t.totalCountFiltered=a.totalCountFiltered;}).addCase(fr.fulfilled,(t,r)=>{let{response:a}=r.payload;t.totalCountFiltered=a.pagination.totalCount;}).addCase(Se,t=>{He(t);}).addCase(qt,t=>{He(t);}).addCase(wt,t=>{He(t);}).addCase(dr,t=>{He(t);}).addCase($a,t=>{He(t);}).addCase(It,t=>{He(t);}).addCase(Tt,t=>{He(t);}).addCase(ze,t=>{He(t);}).addCase(Pe,t=>{He(t);}).addCase(_t,t=>{He(t);}).addCase(zt,t=>{He(t);}).addCase(zr,t=>{He(t);});});function He(e){e.firstResult=Ee().firstResult;}function Cl(e){let{firstResult:t,numberOfResults:r}=e;return Rl(t,r)}function mR(e){let{totalCountFiltered:t,numberOfResults:r}=e;return bl(t,r)}function mn(e,t){return (e-1)*t}function Rl(e,t){return e/t+1}function bl(e,t){let r=Math.min(e,fR);return Math.ceil(r/t)}var ms=h$1("pipeline/set",e=>x(e,new A({required:!0,emptyAllowed:!0})));var Rm=O(mt(),e=>{e.addCase(ms,(t,r)=>r.payload).addCase(oe.fulfilled,(t,r)=>{var a,o;return (o=(a=r.payload)==null?void 0:a.pipeline)!=null?o:t}).addCase(Pt,(t,r)=>r.payload.pipeline||t);});O(Sa(),e=>{e.addCase(em,(t,r)=>{t.url=r.payload.url;}).addCase(tm,(t,r)=>{t.additionalFields=r.payload.additionalFields;}).addCase(fr.rejected,(t,r)=>{t.error=r.payload?r.payload:null,t.isLoading=!1;}).addCase(fr.fulfilled,(t,r)=>{t.error=null,t.facets=r.payload.response.facets,t.products=r.payload.response.products,t.responseId=r.payload.response.responseId,t.isLoading=!1;}).addCase(fr.pending,t=>{t.isLoading=!0;});});O(Ea(),e=>{e.addCase(uf,(t,r)=>{t.id=r.payload.id;}).addCase(lf,(t,r)=>{t.skus=r.payload.skus;}).addCase(df,(t,r)=>{t.filter.brand=r.payload.brand;}).addCase(pf,(t,r)=>{t.filter.category=r.payload.category;}).addCase(mf,(t,r)=>{t.maxNumberOfRecommendations=r.payload.number;}).addCase(ff,(t,r)=>{t.additionalFields=r.payload.additionalFields;}).addCase(Oa.rejected,(t,r)=>{t.error=r.payload?r.payload:null,t.isLoading=!1;}).addCase(Oa.fulfilled,(t,r)=>{t.error=null,t.searchUid=r.payload.searchUid,t.recommendations=r.payload.recommendations,t.isLoading=!1;}).addCase(Oa.pending,t=>{t.isLoading=!0;});});var bm={id:q,query:ce},oo=h$1("querySet/register",e=>x(e,bm)),Ht=h$1("querySet/update",e=>x(e,bm));var gn={id:q},no=h$1("querySuggest/register",e=>x(e,{...gn,q:new A,count:new L({min:0})})),vm=h$1("querySuggest/unregister",e=>x(e,gn)),We=h$1("querySuggest/selectSuggestion",e=>x(e,{...gn,expression:ce})),Fr=h$1("querySuggest/clear",e=>x(e,gn)),Cr=Z("querySuggest/fetch",async(e,{getState:t,rejectWithValue:r,extra:{apiClient:a,validatePayload:o}})=>{o(e,gn);let n=e.id,i=await yR(n,t()),s=await a.querySuggest(i);return ue(s)?r(s.error):{id:n,q:i.q,...s.success}}),yR=async(e,t)=>{var r;return {accessToken:t.configuration.accessToken,organizationId:t.configuration.organizationId,url:t.configuration.search.apiBaseUrl,count:t.querySuggest[e].count,q:(r=t.querySet)==null?void 0:r[e],locale:t.configuration.search.locale,timezone:t.configuration.search.timezone,actionsHistory:t.configuration.analytics.enabled?ir.getHistory():[],...t.context&&{context:t.context.contextValues},...t.pipeline&&{pipeline:t.pipeline},...t.searchHub&&{searchHub:t.searchHub},...t.configuration.analytics.enabled&&{visitorId:await ve()}}};var Am=O(Zr(),e=>{e.addCase(oo,(t,r)=>{let{id:a,query:o}=r.payload;a in t||(t[a]=o);}).addCase(Ht,(t,r)=>{let{id:a,query:o}=r.payload;vl(t,a,o);}).addCase(We,(t,r)=>{let{id:a,expression:o}=r.payload;vl(t,a,o);}).addCase(b.fulfilled,(t,r)=>{let{queryExecuted:a}=r.payload;Pm(t,a);}).addCase(ne,(t,r)=>{ie(r.payload.q)||Pm(t,r.payload.q);}).addCase(oe.fulfilled,(t,r)=>{if(!!r.payload)for(let[a,o]of Object.entries(r.payload.querySet))vl(t,a,o);});});function Pm(e,t){Object.keys(e).forEach(r=>e[r]=t);}var vl=(e,t,r)=>{t in e&&(e[t]=r);};var wm=()=>({});var Em=O(wm(),e=>e.addCase(no,(t,r)=>{let a=r.payload.id;a in t||(t[a]=SR(r.payload));}).addCase(vm,(t,r)=>{delete t[r.payload.id];}).addCase(Cr.pending,(t,r)=>{let a=t[r.meta.arg.id];!a||(a.currentRequestId=r.meta.requestId,a.isLoading=!0);}).addCase(Cr.fulfilled,(t,r)=>{let a=t[r.meta.arg.id];if(!a||r.meta.requestId!==a.currentRequestId)return;let{q:o}=r.payload;o&&a.partialQueries.push(o.replace(/;/,encodeURIComponent(";"))),a.responseId=r.payload.responseId,a.completions=r.payload.completions,a.isLoading=!1,a.error=null;}).addCase(Cr.rejected,(t,r)=>{let a=t[r.meta.arg.id];!a||(a.error=r.payload||null,a.isLoading=!1);}).addCase(Ht,(t,r)=>{let{id:a,query:o}=r.payload;a in t&&Om(t[a],o);}).addCase(Fr,(t,r)=>{let a=t[r.payload.id];!a||(a.responseId="",a.completions=[],a.partialQueries=[]);}).addCase(We,(t,r)=>{let{id:a,expression:o}=r.payload,n=t[a];!n||(n.q=o);}).addCase(ne,(t,r)=>{ie(r.payload.q)||qm(t,r.payload.q);}).addCase(b.fulfilled,(t,r)=>{let{queryExecuted:a}=r.payload;qm(t,a);}));function Om(e,t){e.q=t;}function qm(e,t){Object.keys(e).forEach(r=>Om(e[r],t));}function SR(e){return {id:"",completions:[],responseId:"",count:5,q:"",currentRequestId:"",error:null,partialQueries:[],isLoading:!1,...e}}var Im=O(Fe(),e=>e.addCase(rt,(t,r)=>({...t,...r.payload})).addCase(Ft,(t,r)=>{t.q=r.payload;}).addCase(We,(t,r)=>{t.q=r.payload.expression;}).addCase(oe.fulfilled,(t,r)=>{var a,o;return (o=(a=r.payload)==null?void 0:a.query)!=null?o:t}).addCase(ne,(t,r)=>{var a,o;t.q=(a=r.payload.q)!=null?a:t.q,t.enableQuerySyntax=(o=r.payload.enableQuerySyntax)!=null?o:t.enableQuerySyntax;}));var io=()=>new j({values:{documentId:new j({values:{contentIdKey:q,contentIdValue:q}})},options:{required:!0}});var so=h$1("smartSnippet/expand"),co=h$1("smartSnippet/collapse"),uo=h$1("smartSnippet/like"),lo=h$1("smartSnippet/dislike"),gs=h$1("smartSnippet/related/expand",e=>x(e,io())),hs=h$1("smartSnippet/related/collapse",e=>x(e,io()));var ys=(e,t)=>e.findIndex(r=>r.contentIdValue===t.contentIdValue&&r.contentIdKey===t.contentIdKey);O(Vn(),e=>e.addCase(so,t=>{t.expanded=!0;}).addCase(co,t=>{t.expanded=!1;}).addCase(uo,t=>{t.liked=!0,t.disliked=!1;}).addCase(lo,t=>{t.liked=!1,t.disliked=!0;}).addCase(b.fulfilled,(t,r)=>{t.relatedQuestions=r.payload.response.questionAnswer.relatedQuestions.map(a=>({contentIdKey:a.documentId.contentIdKey,contentIdValue:a.documentId.contentIdValue,expanded:!1}));}).addCase(gs,(t,r)=>{let a=ys(t.relatedQuestions,r.payload);a!==-1&&(t.relatedQuestions[a].expanded=!0);}).addCase(hs,(t,r)=>{let a=ys(t.relatedQuestions,r.payload);a!==-1&&(t.relatedQuestions[a].expanded=!1);}));var xR={results:new K({required:!0,each:new j({values:di})}),maxLength:new L({required:!0,min:1,default:10})},po=h$1("recentResults/registerRecentResults",e=>x(e,xR)),fo=h$1("recentResults/pushRecentResult",e=>(tt(e),{payload:e})),mo=h$1("recentResults/clearRecentResults");O(Mn(),e=>{e.addCase(po,(t,r)=>{t.results=r.payload.results.slice(0,r.payload.maxLength),t.maxLength=r.payload.maxLength;}).addCase(mo,t=>{t.results=[];}).addCase(fo,(t,r)=>{let a=r.payload;t.results=t.results.filter(n=>n.uniqueId!==a.uniqueId);let o=t.results.slice(0,t.maxLength-1);t.results=[a,...o];});});var FR={queries:new K({required:!0,each:new A({emptyAllowed:!1})}),maxLength:new L({required:!0,min:1,default:10})},go=h$1("recentQueries/registerRecentQueries",e=>x(e,FR)),ho=h$1("recentQueries/clearRecentQueries");var Dm=O(Qn(),e=>{e.addCase(go,(t,r)=>{t.queries=r.payload.queries.slice(0,r.payload.maxLength),t.maxLength=r.payload.maxLength;}).addCase(ho,t=>{t.queries=[];}).addCase(b.fulfilled,(t,r)=>{let a=r.payload.queryExecuted.trim();if(!a.length)return;t.queries=t.queries.filter(n=>n!==a);let o=t.queries.slice(0,t.maxLength-1);t.queries=[a,...o];});});O(Ci(),e=>{e.addCase(Up,(t,r)=>{t.id=r.payload.id;}).addCase(xa.rejected,(t,r)=>{t.error=r.payload?r.payload:null,t.isLoading=!1;}).addCase(xa.fulfilled,(t,r)=>{t.error=null,t.recommendations=r.payload.recommendations,t.duration=r.payload.duration,t.isLoading=!1,t.searchUid=r.payload.searchUid;}).addCase(xa.pending,t=>{t.isLoading=!0;});});function Vm(e){return e.type==="notify"}function Ss(e){return e.type==="redirect"}function Nm(e){return e.type==="query"}function Mm(e){return e.type==="execute"}var hn=class{constructor(t){this.response=t;}get basicExpression(){return this.response.parsedInput.basicExpression}get largeExpression(){return this.response.parsedInput.largeExpression}get redirectionUrl(){let t=this.response.preprocessingOutput.triggers.filter(Ss);return t.length?t[0].content:null}};var Qm=V("analytics/redirection",D.Search,(e,t)=>{var r;if((r=t.redirection)==null?void 0:r.redirectTo)return e.logTriggerRedirect({redirectedTo:t.redirection.redirectTo})});var yo=h$1("standaloneSearchBox/register",e=>x(e,{id:q,redirectionUrl:q})),So=h$1("standaloneSearchBox/updateAnalyticsToSearchFromLink",e=>x(e,{id:q})),xo=h$1("standaloneSearchBox/updateAnalyticsToOmniboxFromLink"),Rr=Z("standaloneSearchBox/fetchRedirect",async(e,{dispatch:t,getState:r,rejectWithValue:a,extra:{apiClient:o,validatePayload:n}})=>{n(e,{id:new A({emptyAllowed:!1})});let i=await Al(r()),s=await o.plan(i);if(ue(s))return a(s.error);let{redirectionUrl:u}=new hn(s.success);return u&&t(RR(u)),u||""}),RR=e=>V("analytics/standaloneSearchBox/redirect",D.Custom,t=>t.logTriggerRedirect({redirectedTo:e}))(),Al=async e=>({accessToken:e.configuration.accessToken,organizationId:e.configuration.organizationId,url:e.configuration.search.apiBaseUrl,locale:e.configuration.search.locale,timezone:e.configuration.search.timezone,q:e.query.q,...e.context&&{context:e.context.contextValues},...e.pipeline&&{pipeline:e.pipeline},...e.searchHub&&{searchHub:e.searchHub},...e.configuration.analytics.enabled&&{visitorId:await ve()}});var xs=Z("redirection/check",async(e,{dispatch:t,getState:r,rejectWithValue:a,extra:{apiClient:o,validatePayload:n}})=>{n(e,{defaultRedirectionUrl:new A({emptyAllowed:!1})});let i=await o.plan(await Al(r()));if(ue(i))return a(i.error);let s=new hn(i.success).redirectionUrl;return s&&t(Qm()),s||e.defaultRedirectionUrl});O(En(),e=>e.addCase(xs.fulfilled,(t,r)=>{t.redirectTo=r.payload;}));async function Lm(e,t){var s;let{search:r,accessToken:a,organizationId:o,analytics:n}=e.configuration,i=((s=e.query)==null?void 0:s.q)||"";return {url:r.apiBaseUrl,accessToken:a,organizationId:o,enableNavigation:!1,...n.enabled&&{visitorId:await ve()},q:i,...t,requestedOutputSize:t.requestedOutputSize||0}}var yn=Z("resultPreview/fetchResultContent",async(e,{extra:t,getState:r,rejectWithValue:a})=>{let o=r(),n=await Lm(o,e),i=await t.apiClient.html(n);return ue(i)?a(i.error):{content:i.success,uniqueId:e.uniqueId}});O(kn(),e=>{e.addCase(yn.pending,t=>{t.isLoading=!0;}).addCase(yn.fulfilled,(t,r)=>{let{content:a,uniqueId:o}=r.payload;t.content=a,t.uniqueId=o,t.isLoading=!1;});});var Fs=h$1("searchHub/set",e=>x(e,new A({required:!0,emptyAllowed:!0})));var Um=O(De(),e=>{e.addCase(Fs,(t,r)=>r.payload).addCase(oe.fulfilled,(t,r)=>{var a,o;return (o=(a=r.payload)==null?void 0:a.searchHub)!=null?o:t}).addCase(Pt,(t,r)=>r.payload.searchHub||t);});function $m(e,t){var a;let r=(a=t.payload)!=null?a:null;r&&(e.response=je().response,e.results=[]),e.error=r,e.isLoading=!1;}function _m(e,t){e.error=null,e.response=t.payload.response,e.queryExecuted=t.payload.queryExecuted,e.duration=t.payload.duration,e.isLoading=!1;}function zm(e,t){e.isLoading=!0,e.requestId=t.meta.requestId;}var Hm=O(je(),e=>{e.addCase(b.rejected,(t,r)=>$m(t,r)),e.addCase(vt.rejected,(t,r)=>$m(t,r)),e.addCase(b.fulfilled,(t,r)=>{_m(t,r),t.results=r.payload.response.results,t.searchResponseId=r.payload.response.searchUid;}),e.addCase(vt.fulfilled,(t,r)=>{_m(t,r),t.results=[...t.results,...r.payload.response.results];}),e.addCase(b.pending,zm),e.addCase(vt.pending,zm);});var Wm={by:new ct({enum:ut,required:!0})},Fo=h$1("sortCriteria/register",e=>Ym(e)),Co=h$1("sortCriteria/update",e=>Ym(e)),Ym=e=>ta(e)?(e.forEach(t=>x(t,Wm)),{payload:e}):x(e,Wm);var Km=O(Be(),e=>{e.addCase(Fo,(t,r)=>Mt(r.payload)).addCase(Co,(t,r)=>Mt(r.payload)).addCase(oe.fulfilled,(t,r)=>{var a,o;return (o=(a=r.payload)==null?void 0:a.sortCriteria)!=null?o:t}).addCase(ne,(t,r)=>{var a;return (a=r.payload.sortCriteria)!=null?a:t});});O(Nn(),e=>e.addCase(yo,(t,r)=>{let{id:a,redirectionUrl:o}=r.payload;a in t||(t[a]=bR(o));}).addCase(Rr.pending,(t,r)=>{let a=t[r.meta.arg.id];!a||(a.isLoading=!0);}).addCase(Rr.fulfilled,(t,r)=>{let a=r.payload,o=t[r.meta.arg.id];!o||(o.redirectTo=a||o.defaultRedirectionUrl,o.isLoading=!1);}).addCase(Rr.rejected,(t,r)=>{let a=t[r.meta.arg.id];!a||(a.isLoading=!1);}).addCase(So,(t,r)=>{let a=t[r.payload.id];!a||(a.analytics.cause="searchFromLink");}).addCase(xo,(t,r)=>{let a=t[r.payload.id];!a||(a.analytics.cause="omniboxFromLink",a.analytics.metadata=r.payload.metadata);}));function bR(e){return {defaultRedirectionUrl:e,redirectTo:"",isLoading:!1,analytics:{cause:"",metadata:null}}}O(Dn(),e=>e.addCase(b.fulfilled,(t,r)=>{let a=r.payload.response.triggers.filter(Ss);t.redirectTo=a.length?a[0].content:"";let o=r.payload.response.triggers.filter(Nm);t.query=o.length?o[0].content:"";let n=r.payload.response.triggers.filter(Mm);t.execute=n.length?{functionName:n[0].content.name,params:n[0].content.params}:{functionName:"",params:[]};let i=r.payload.response.triggers.filter(Vm);t.notification=i.length?i[0].content:"";}));var vR={by:new ct({enum:Br,required:!0})},Xm=h$1("sort/register",e=>eg(e)),Zm=h$1("sort/update",e=>eg(e)),eg=e=>x(e,vR);O(qi(),e=>{e.addCase(Xm,(t,r)=>r.payload).addCase(Zm,(t,r)=>r.payload);});var Ro=h$1("dictionaryFieldContext/set",e=>{let t=new j({options:{required:!0}}),r=x(e,t).error;if(r)return {payload:e,error:r};let a=Object.values(e),o=new K({each:ce}),n=x(a,o).error;return n?{payload:e,error:n}:{payload:e}}),bo=h$1("dictionaryFieldContext/add",e=>{let t=new j({options:{required:!0},values:{field:ce,key:ce}});return x(e,t)}),vo=h$1("dictionaryFieldContext/remove",e=>x(e,ce));O(ht(),e=>{e.addCase(Ro,(t,r)=>{t.contextValues=r.payload;}).addCase(bo,(t,r)=>{let{field:a,key:o}=r.payload;t.contextValues[a]=o;}).addCase(vo,(t,r)=>{delete t.contextValues[r.payload];}).addCase(oe.fulfilled,(t,r)=>{!r.payload||(t.contextValues=r.payload.dictionaryFieldContext.contextValues);});});O(ia(),e=>{e.addCase(Bi,(t,r)=>{let a=r.payload,{id:o}=a;o in t||(t[o]={...a,isActive:!1});}).addCase(Ur,(t,r)=>{let a=r.payload;ag(t,a);}).addCase(ne,(t,r)=>{let a=r.payload.tab||"";ag(t,a);});});function ag(e,t){t in e&&Object.keys(e).forEach(a=>{e[a].isActive=a===t;});}var Ao=q,Pl=new j({options:{required:!0},values:{caption:ce,expression:ce,state:new A({constrainTo:["idle","selected"]})}}),Cs=new K({required:!0,each:Pl});var Po=h$1("staticFilter/register",e=>x(e,{id:Ao,values:Cs})),Wt=h$1("staticFilter/toggleSelect",e=>x(e,{id:Ao,value:Pl})),Gr=h$1("staticFilter/deselectAllFilterValues",e=>x(e,Ao)),wo=e=>V("analytics/staticFilter/deselect",D.Search,t=>t.logStaticFilterDeselect(e))();O(na(),e=>e.addCase(Po,(t,r)=>{let a=r.payload,{id:o}=a;o in t||(t[o]=a);}).addCase(Wt,(t,r)=>{let{id:a,value:o}=r.payload,n=t[a];if(!n)return;let i=n.values.find(u=>u.caption===o.caption);if(!i)return;let s=i.state==="selected";i.state=s?"idle":"selected";}).addCase(Gr,(t,r)=>{let a=r.payload,o=t[a];!o||o.values.forEach(n=>n.state="idle");}).addCase(Pe,t=>{Object.values(t).forEach(r=>{r.values.forEach(a=>a.state="idle");});}).addCase(ne,(t,r)=>{let a=r.payload.sf||{};Object.entries(t).forEach(([o,n])=>{let i=a[o]||[];n.values.forEach(s=>{s.state=i.includes(s.caption)?"selected":"idle";});});}));var ng=h$1("caseAssistConfiguration/set",e=>x(e,{caseAssistId:q,locale:he}));O(Ii(),e=>{e.addCase(ng,(t,r)=>{t.caseAssistId=r.payload.caseAssistId,t.locale=r.payload.locale;});});var ig=h$1("caseAssist/caseInput/update",e=>x(e,{fieldName:q,fieldValue:ce}));O(ki(),e=>{e.addCase(ig,(t,r)=>{t[r.payload.fieldName]={value:r.payload.fieldValue};});});var vs=e=>Object.keys(e).filter(t=>e[t].value!=="").reduce((t,r)=>({...t,[r]:e[r].value}),{});var sg=h$1("caseAssist/caseField/register",e=>x(e,{fieldName:q,fieldValue:ce})),cg=h$1("caseAssist/caseField/update",e=>x(e,{fieldName:q,fieldValue:ce})),As=Z("caseAssist/classifications/fetch",async(e,{getState:t,rejectWithValue:r,extra:{apiClient:a}})=>{let o=t(),n=await a.getCaseClassifications(await ER(o));return ue(n)?r(n.error):{response:n.success}}),ER=async e=>({accessToken:e.configuration.accessToken,organizationId:e.configuration.organizationId,url:e.configuration.platformUrl,caseAssistId:e.caseAssistConfiguration.caseAssistId,...e.configuration.analytics.enabled&&{visitorId:await ve()},fields:e.caseInput,context:e.caseField?vs(e.caseField.fields):void 0,locale:e.caseAssistConfiguration.locale,debug:e.debug});O(Ti(),e=>{e.addCase(sg,(t,r)=>{let{fieldName:a,fieldValue:o}=r.payload;t.fields[a]={value:o,suggestions:[]};}).addCase(cg,(t,r)=>{let{fieldName:a,fieldValue:o}=r.payload;t.fields[a].value=o;}).addCase(As.rejected,(t,r)=>{var a;t.status.error=(a=r.payload)!=null?a:null,t.status.loading=!1;}).addCase(As.fulfilled,(t,r)=>{let a={value:"",suggestions:[]};Object.entries(r.payload.response.fields).forEach(([o,n])=>{t.fields[o]||(t.fields[o]={...a}),t.fields[o].suggestions=n.predictions;}),t.status.lastResponseId=r.payload.response.responseId,t.status.error=null,t.status.loading=!1;}).addCase(As.pending,t=>{t.status.loading=!0;});});var Ps=Z("caseAssist/documentSuggestions/fetch",async(e,{getState:t,rejectWithValue:r,extra:{apiClient:a}})=>{let o=t(),n=await a.getDocumentSuggestions(await qR(o));return ue(n)?r(n.error):{response:n.success}}),qR=async e=>({accessToken:e.configuration.accessToken,organizationId:e.configuration.organizationId,url:e.configuration.platformUrl,caseAssistId:e.caseAssistConfiguration.caseAssistId,...e.configuration.analytics.enabled&&{visitorId:await ve()},fields:e.caseInput,context:e.caseField?vs(e.caseField.fields):void 0,locale:e.caseAssistConfiguration.locale,debug:e.debug});O(Di(),e=>{e.addCase(Ps.rejected,(t,r)=>{var a;t.status.error=(a=r.payload)!=null?a:null,t.status.loading=!1;}).addCase(Ps.fulfilled,(t,r)=>{t.documents=r.payload.response.documents,t.status.lastResponseId=r.payload.response.responseId,t.status.error=null,t.status.loading=!1;}).addCase(Ps.pending,t=>{t.status.loading=!0;});});var $=Qf,kt=Cm,br=rm,ws=Zf,G=Hm,Dt=um,Os=Yf,Ye=lm,vr=Hf,qs=_f,Is=Xf,Ke=Im,ks=Am,Eo=Em,Vs=Km,Qs=$f,Ar=dm,Oo=Rm,qo=Um,Io=Bf,pg=Uf,Bs=Dm,Us=dd({actionTypes:{redo:Uu.type,undo:Bu.type,snapshot:cr.type},reducer:Sm});function $s(e,t,r){var a,o,n;t===void 0&&(t=50),r===void 0&&(r={});var i=(a=r.isImmediate)!=null&&a,s=(o=r.callback)!=null&&o,u=r.maxWait,c=Date.now(),d=[];function l(){if(u!==void 0){var p=Date.now()-c;if(p+t>=u)return u-p}return t}var f=function(){var p=[].slice.call(arguments),m=this;return new Promise(function(y,S){var F=i&&n===void 0;if(n!==void 0&&clearTimeout(n),n=setTimeout(function(){if(n=void 0,c=Date.now(),!i){var N=e.apply(m,p);s&&s(N),d.forEach(function(Q){return (0, Q.resolve)(N)}),d=[];}},l()),F){var C=e.apply(m,p);return s&&s(C),y(C)}d.push({resolve:y,reject:S});})};return f.cancel=function(p){n!==void 0&&clearTimeout(n),d.forEach(function(m){return (0, m.reject)(p)}),d=[];},f}function fg(e,t){let r=0,a=$s(()=>r=0,500);return o=>n=>async i=>{if(!(typeof i=="function"))return n(i);let u=await n(i);if(!TR(u))return u;if(typeof t!="function")return e.warn("Unable to renew the expired token because a renew function was not provided. Please specify the #renewAccessToken option when initializing the engine."),u;if(r>=5)return e.warn("Attempted to renew the token but was not successful. Please check the #renewAccessToken function."),u;r++,a();let c=await kR(t);o.dispatch(lr({accessToken:c})),o.dispatch(i);}}function TR(e){var t;return ((t=e.error)==null?void 0:t.name)===new Lo().name}async function kR(e){try{return await e()}catch(t){return ""}}var DR={configuration:$,version:pg};function mg(e,t){let r=VR(e,t),{accessToken:a,organizationId:o,platformUrl:n,analytics:i}=e.configuration;if(r.dispatch(lr({accessToken:a,organizationId:o,platformUrl:n})),i){let{analyticsClientMiddleware:s,...u}=i;r.dispatch(ka(u));}return r}function VR(e,t){let{reducers:r}=e,a=Vf({...DR,...r}),o=t.logger,n=NR(e,t,a);return {addReducers(i){a.containsAll(i)||(a.add(i),n.replaceReducer(a.combinedReducer));},dispatch:n.dispatch,subscribe:n.subscribe,enableAnalytics(){n.dispatch(Va());},disableAnalytics(){n.dispatch(Da());},get state(){return n.getState()},logger:o,store:n}}function NR(e,t,r){let{preloadedState:a,configuration:o}=e,n=o.name||"coveo-headless",i=MR(e,t.logger);return Nf({preloadedState:a,reducer:r.combinedReducer,middlewares:i,thunkExtraArguments:t,name:n})}function MR(e,t){let{renewAccessToken:r}=e.configuration;return [fg(t,r),Ai(t),Fi].concat(e.middlewares||[])}var gg=xe(vi());function hg(e){return (0, gg.default)({name:"@coveo/headless",level:(e==null?void 0:e.level)||"warn",formatters:{log:e==null?void 0:e.logFormatter},browser:{transmit:{send:(e==null?void 0:e.browserPostLogHook)||(()=>{})}}})}function yg(e,t){let r=QR(e),a=Me,o=jR(e);return {analyticsClientMiddleware:r,validatePayload:a,preprocessRequest:o,logger:t}}function QR(e){let{analytics:t}=e,r=(a,o)=>o;return (t==null?void 0:t.analyticsClientMiddleware)||r}function jR(e){return e.preprocessRequest||Ta}var Sg={organizationId:q,accessToken:q,platformUrl:new A({required:!1,emptyAllowed:!1}),name:new A({required:!1,emptyAllowed:!1}),analytics:new j({options:{required:!1},values:{enabled:new W({required:!1}),originLevel2:new A({required:!1}),originLevel3:new A({required:!1})}})};var Fg=new H({...Sg,search:new j({options:{required:!1},values:{pipeline:he,searchHub:he,locale:he,timezone:he}})});var _s=V("analytics/interface/load",D.Search,e=>e.logInterfaceLoad()),wr=V("analytics/interface/change",D.Search,(e,t)=>e.logInterfaceChange({interfaceChangeTo:t.configuration.analytics.originLevel2})),zs=V("analytics/interface/searchFromLink",D.Search,e=>e.logSearchFromLink()),Hs=e=>V("analytics/interface/omniboxFromLink",D.Search,t=>t.logOmniboxFromLink(e))();function Ws(e){return e.search.response.searchUid!==""}var LR={debug:Io,pipeline:Oo,searchHub:qo,search:G};function BR(e){let t=hg(e.loggerOptions);UR(e.configuration,t);let r=$R(e.configuration,t),a={...yg(e.configuration,t),searchAPIClient:r,apiClient:r},o={...e,reducers:LR},n=mg(o,a),{search:i}=e.configuration;return i&&n.dispatch(Pt(i)),{...n,get state(){return n.state},executeFirstSearch(s=_s()){if(Ws(n.state))return;let c=b(s);n.dispatch(c);},executeFirstSearchAfterStandaloneSearchBoxRedirect(s){let{cause:u,metadata:c}=s,d=c&&u==="omniboxFromLink"?Hs(c):zs();this.executeFirstSearch(d);}}}function UR(e,t){try{Fg.validate(e);}catch(r){throw t.error(r,"Search engine configuration error"),r}}function $R(e,t){let{search:r}=e;return new rn({logger:t,preprocessRequest:e.preprocessRequest||Ta,postprocessSearchResponseMiddleware:(r==null?void 0:r.preprocessSearchResponseMiddleware)||wi,postprocessFacetSearchResponseMiddleware:(r==null?void 0:r.preprocessFacetSearchResponseMiddleware)||Ei,postprocessQuerySuggestResponseMiddleware:(r==null?void 0:r.preprocessQuerySuggestResponseMiddleware)||Oi})}function B(e){let t,r=new Map,a=()=>r.size===0,o=n=>{try{let i=JSON.stringify(n),s=t!==i;return t=i,s}catch(i){return console.warn('Could not detect if state has changed, check the controller "get state method"',i),!0}};return {subscribe(n){n();let i=Symbol(),s;return a()&&(t=JSON.stringify(this.state),s=e.subscribe(()=>{o(this.state)&&r.forEach(u=>u());})),r.set(i,n),()=>{r.delete(i),a()&&s&&s();}},get state(){return {}}}}var Ag=e=>{let t=/Document weights:\n((?:.)*?)\n+/g,r=/Terms weights:\n((?:.|\n)*)\n+/g,a=/Total weight: ([0-9]+)/g;if(!e)return null;let o=t.exec(e),n=r.exec(e),i=a.exec(e),s=zR(e),u=Pg(o?o[1]:null),c=_R(n),d=i?Number(i[1]):null;return {documentWeights:u,termsWeight:c,totalWeight:d,qreWeights:s}},Pg=e=>{let t=/(\w+(?:\s\w+)*): ([-0-9]+)/g,r=/^(\w+(?:\s\w+)*): ([-0-9]+)$/;if(!e)return null;let a=e.match(t);if(!a)return null;let o={};for(let n of a){let i=n.match(r);if(i){let s=i[1],u=i[2];o[s]=Number(u);}}return o},wg=(e,t)=>{let r=[],a;for(;(a=t.exec(e))!==null;)r.push(a);return r},_R=e=>{let t=/((?:[^:]+: [0-9]+, [0-9]+; )+)\n((?:\w+: [0-9]+; )+)/g,r=/([^:]+): ([0-9]+), ([0-9]+); /g;if(!e||!e[1])return null;let a=wg(e[1],t);if(!a)return null;let o={};for(let n of a){let i=wg(n[1],r),s={};for(let c of i)s[c[1]]={Correlation:Number(c[2]),"TF-IDF":Number(c[3])};let u=Pg(n[2]);o[Object.keys(s).join(", ")]={terms:s,Weights:u};}return o},zR=e=>{let t=/(Expression:\s".*")\sScore:\s(?!0)([0-9]+)\n+/g,r=t.exec(e),a=[];for(;r;)a.push({expression:r[1],score:parseInt(r[2],10)}),r=t.exec(e);return a};function Eg(e){return e.search.response.results.map(r=>{let a=Ag(r.rankingInfo);return {result:r,ranking:a}})}var HR=new H({enabled:new W({default:!1})});function WR(e,t={}){if(!YR(e));let r=B(e),{dispatch:a}=e,o=()=>e.state;Ae(e,HR,t.initialState,"buildRelevanceInspector").enabled&&a($r());let i=s=>{e.logger.warn(`Flag [ ${s} ] is now activated. This should *not* be used in any production environment as it negatively impact performance.`);};return {...r,get state(){let s=o(),u=s.debug;if(!s.debug)return {isEnabled:u};let{executionReport:c,basicExpression:d,advancedExpression:l,constantExpression:f,userIdentities:p,rankingExpressions:m}=s.search.response,{fieldsDescription:y,fetchAllFields:S}=s.fields;return {isEnabled:u,rankingInformation:Eg(s),executionReport:c,expressions:{basicExpression:d,advancedExpression:l,constantExpression:f},userIdentities:p,rankingExpressions:m,fieldsDescription:y,fetchAllFields:S}},enable(){a($r()),i("debug");},disable(){a(ja()),a(Kr());},enableFetchAllFields(){a(to()),i("fetchAllFields");},disableFetchAllFields(){a(Kr());},fetchFieldDescriptions(){a(ro()),i("fieldsDescription"),e.logger.warn(`For production environment, please specify the necessary fields either when instantiating a ResultList controller, or by dispatching a registerFieldsToInclude action.
        
        https://docs.coveo.com/en/headless/latest/reference/search/controllers/result-list/#resultlistoptions
        https://docs.coveo.com/en/headless/latest/reference/search/actions/field/#registerfieldstoinclude`);}}}function YR(e){return e.addReducers({debug:Io,search:G,configuration:$,fields:Ar}),!0}function ZR(e){if(!eb(e));let t=B(e),{dispatch:r}=e;r(Fa());let a=()=>e.state;return {...t,get state(){let o=a();return {originalQuery:o.didYouMean.originalQuery,wasCorrectedTo:o.didYouMean.wasCorrectedTo,wasAutomaticallyCorrected:o.didYouMean.wasAutomaticallyCorrected,queryCorrection:o.didYouMean.queryCorrection,hasQueryCorrection:o.didYouMean.queryCorrection.correctedQuery!==""||o.didYouMean.wasCorrectedTo!==""}},applyCorrection(){r(Ft(this.state.queryCorrection.correctedQuery)),r(b(fi()));}}}function eb(e){return e.addReducers({configuration:$,didYouMean:Qs}),!0}var Og=["alphanumeric","occurrences"];var Er=new A({regex:/^[a-zA-Z0-9-_]+$/}),Or=new A({required:!0}),qg=new K({each:new A}),Ys=new A,Ig=new W,qr=new W,Ir=new L({min:0}),Yt=new L({min:1}),Ks=new W({required:!0}),tb=new j,rb=new A,ab={captions:tb,numberOfValues:Yt,query:rb},Gs=new j({values:ab});var Tg=new H({field:Or,basePath:qg,delimitingCharacter:Ys,facetId:Er,facetSearch:Gs,filterByBasePath:Ig,filterFacetCount:qr,injectionDepth:Ir,numberOfValues:Yt,sortCriteria:new A({constrainTo:Og})});function kg(e,t){let{field:r,state:a}=e;if(!ob(e))return r;let o=`${r}_`,n=nb(o,a);return sb(r,t),`${o}${n}`}function ob(e){let{field:t,state:r}=e;return Dg(r).some(o=>o&&t in o)}function nb(e,t){let a=Dg(t).map(o=>Object.keys(o||{})).reduce((o,n)=>o.concat(n),[]);return ib(a,e)+1}function Dg(e){let{facetSet:t,numericFacetSet:r,dateFacetSet:a,categoryFacetSet:o}=e;return [t,r,a,o]}function ib(e,t){let r=0,o=e.map(n=>{let i=n.split(t)[1],s=parseInt(i,10);return Number.isNaN(s)?r:s}).sort().pop();return o!=null?o:r}function sb(e,t){let r=`A facet with field "${e}" already exists.
  To avoid unexpected behaviour, configure the #id option on the facet controller.`;t.warn(r);}function Ge(e,t){let{state:r,logger:a}=e,{field:o,facetId:n}=t;return n||kg({field:o,state:r},a)}function Vg(e,t){if(!cb(e));let r=B(e),{dispatch:a}=e,o=Ge(e,t.options),n={facetSearch:{...Et},...ul,...t.options,facetId:o};le(e,Tg,n,"buildCategoryFacet");let i=()=>wp(e.state,o),s=()=>Qu(e.state,o),u=()=>xt(e.state);return a(La(n)),{...r,toggleSelect(c){let d=n.numberOfValues;a(dr({facetId:o,selection:c,retrieveCount:d})),a(te({freezeFacetOrder:!0}));},deselectAll(){a(wt(o)),a(te({freezeFacetOrder:!0}));},sortBy(c){a(Ba({facetId:o,criterion:c})),a(te({freezeFacetOrder:!0}));},isSortedBy(c){return i().sortCriteria===c},showMoreValues(){let{numberOfValues:c}=n,{values:d}=this.state,l=d.length+c;a(_r({facetId:o,numberOfValues:l})),a(te({freezeFacetOrder:!0}));},showLessValues(){let{numberOfValues:c}=n;a(_r({facetId:o,numberOfValues:c})),a(te({freezeFacetOrder:!0}));},get state(){let c=i(),d=s(),l=u(),{parents:f,values:p}=_e(d==null?void 0:d.values),m=f.length!==0,y=f.length>0?f[f.length-1].moreValuesAvailable:(d==null?void 0:d.moreValuesAvailable)||!1,S=p.length>n.numberOfValues;return {facetId:o,parents:f,values:p,isLoading:l,hasActiveValues:m,canShowMoreValues:y,canShowLessValues:S,sortCriteria:c.sortCriteria}}}}function cb(e){return e.addReducers({categoryFacetSet:vr,categoryFacetSearchSet:Is,configuration:$,search:G}),!0}function ko(e,t){let r=e.dispatch,{options:a,getFacetSearch:o}=t,{facetId:n}=a;return {updateText(i){r(pr({facetId:n,query:i,numberOfValues:o().initialNumberOfValues}));},showMoreResults(){let{initialNumberOfValues:i,options:s}=o();r(pr({facetId:n,numberOfValues:s.numberOfValues+i})),r(ot(n));},search(){r(ot(n));},clear(){r(Wa({facetId:n}));},updateCaptions(i){r(pr({facetId:n,captions:i}));},get state(){let{response:i,isLoading:s,options:u}=o(),{query:c}=u,d=i.values;return {...i,values:d,isLoading:s,query:c}}}}function Ng(e,t){let{dispatch:r}=e,a={...Et,...t.options},{facetId:o}=a,n=()=>e.state.categoryFacetSearchSet[o];r(_a(a));let i=ko(e,{options:a,getFacetSearch:n});return {...i,select(s){r($a({facetId:o,value:s}));},get state(){return i.state}}}function Mg(e,t){let{dispatch:r}=e,a={...Et,...t.options},{facetId:o}=a,n=()=>e.state.categoryFacetSearchSet[o],i=Ng(e,{options:{...a}});r(_a(a));let s=ko(e,{options:a,getFacetSearch:n});return {...s,...i,select:u=>{i.select(u),r(te({freezeFacetOrder:!0})),r(b(Ce({facetId:o,facetValue:u.rawValue})));},get state(){return {...s.state,...i.state}}}}function ub(e,t){if(!lb(e));let r=Vg(e,t),{dispatch:a}=e,o=()=>r.state.facetId,n=Mg(e,{options:{facetId:o(),...t.options.facetSearch}}),{state:i,...s}=n;return {...r,facetSearch:s,toggleSelect(u){r.toggleSelect(u);let c=db(o(),u);a(b(c));},deselectAll(){r.deselectAll(),a(b(Te(o())));},sortBy(u){r.sortBy(u),a(b(Ot({facetId:o(),criterion:u})));},showMoreValues(){r.showMoreValues(),a(b(za(o())));},showLessValues(){r.showLessValues(),a(b(Ha(o())));},get state(){return {...r.state,facetSearch:n.state}}}}function lb(e){return e.addReducers({categoryFacetSet:vr,categoryFacetSearchSet:Is,configuration:$,search:G}),!0}function db(e,t){let r={facetId:e,facetValue:t.value};return t.state==="selected"?at(r):Ce(r)}var El=e=>e.state==="selected",Qg=(e,t)=>{let r={facetId:e,facetValue:t.value};return El(t)?at(r):Ce(r)};var pb={facetId:Y,selection:new j({values:Zi})},jg=Z("facet/executeToggleSelect",({facetId:e,selection:t},r)=>{let{dispatch:a,extra:{validatePayload:o}}=r;o({facetId:e,selection:t},pb),a(qt({facetId:e,selection:t})),a(te({freezeFacetOrder:!0}));});var Lg=["score","alphanumeric","occurrences","automatic"];var Bg=new H({facetId:Er,field:Or,delimitingCharacter:Ys,filterFacetCount:qr,injectionDepth:Ir,numberOfValues:Yt,sortCriteria:new A({constrainTo:Lg}),facetSearch:Gs});function Ug(e,t){if(!fb(e));let{dispatch:r}=e,a=B(e),o=Ge(e,t.options),n={facetSearch:{...Et},...fl,...t.options,facetId:o};le(e,Bg,n,"buildFacet");let i=()=>Nu(e.state,o),s=()=>ri(e.state,o),u=()=>xt(e.state),c=()=>{let{currentValues:l}=i();return l.filter(f=>f.state!=="idle").length},d=()=>{let{currentValues:l}=i(),f=n.numberOfValues,p=!!l.find(m=>m.state==="idle");return f<l.length&&p};return r(Ya(n)),{...a,toggleSelect:l=>r(jg({facetId:n.facetId,selection:l})),toggleSingleSelect:function(l){l.state==="idle"&&r(Se(o)),this.toggleSelect(l);},isValueSelected:El,deselectAll(){r(Se(o)),r(te({freezeFacetOrder:!0}));},sortBy(l){r(Ka({facetId:o,criterion:l})),r(te({freezeFacetOrder:!0}));},isSortedBy(l){return this.state.sortCriterion===l},showMoreValues(){let l=i().numberOfValues,f=n.numberOfValues,p=f-l%f,m=l+p;r(Hr({facetId:o,numberOfValues:m})),r(Wr({facetId:o,isFieldExpanded:!0})),r(te({freezeFacetOrder:!0}));},showLessValues(){let l=n.numberOfValues,f=Math.max(l,c());r(Hr({facetId:o,numberOfValues:f})),r(Wr({facetId:o,isFieldExpanded:!1})),r(te({freezeFacetOrder:!0}));},get state(){let l=i(),f=s(),p=u(),m=l.sortCriteria,y=f?f.values:[],S=y.some(C=>C.state!=="idle"),F=f?f.moreValuesAvailable:!1;return {facetId:o,values:y,sortCriterion:m,isLoading:p,hasActiveValues:S,canShowMoreValues:F,canShowLessValues:d()}}}}function fb(e){return e.addReducers({facetSet:br,configuration:$,facetSearchSet:ws}),!0}function $g(e,t){let{dispatch:r}=e,{options:a,select:o}=t,{facetId:n}=a,i=()=>e.state.facetSearchSet[n];r(Ji(a));let s=ko(e,{options:a,getFacetSearch:i});return {...s,select(u){r(zr({facetId:n,value:u})),o(u);},singleSelect(u){r(Se(n)),r(zr({facetId:n,value:u})),o(u);},get state(){let{values:u}=s.state;return {...s.state,values:u.map(({count:c,displayValue:d,rawValue:l})=>({count:c,displayValue:d,rawValue:l}))}}}}function mb(e,t){if(!gb(e));let{dispatch:r}=e,a=Ug(e,t),o=()=>a.state.facetId,i=(()=>{let{facetSearch:c}=t.options;return $g(e,{options:{facetId:o(),...c},select:d=>{r(te({freezeFacetOrder:!0})),r(b(Ce({facetId:o(),facetValue:d.rawValue})));}})})(),{state:s,...u}=i;return {...a,facetSearch:u,toggleSelect(c){a.toggleSelect(c),r(b(Qg(o(),c)));},deselectAll(){a.deselectAll(),r(b(Te(o())));},sortBy(c){a.sortBy(c),r(b(Ot({facetId:o(),criterion:c})));},isSortedBy(c){return this.state.sortCriterion===c},showMoreValues(){a.showMoreValues(),r(b(za(o())));},showLessValues(){a.showLessValues(),r(b(Ha(o())));},get state(){return {...a.state,facetSearch:i.state}}}}function gb(e){return e.addReducers({facetSet:br,configuration:$,facetSearchSet:ws,search:G}),!0}var Ol=e=>e.state==="selected",Js=(e,t)=>{let r=`${t.start}..${t.end}`,a={facetId:e,facetValue:r};return Ol(t)?at(a):Ce(a)};function Xs(e,t){let{facetId:r,getRequest:a}=t,o=B(e),n=e.dispatch;return {...o,isValueSelected:Ol,deselectAll(){n(Se(r)),n(te({freezeFacetOrder:!0}));},sortBy(i){n(eo({facetId:r,criterion:i})),n(te({freezeFacetOrder:!0}));},isSortedBy(i){return this.state.sortCriterion===i},get state(){let i=a(),s=St(e.state,r),u=i.sortCriteria,c=s?s.values:[],d=xt(e.state),l=c.some(f=>f.state!=="idle");return {facetId:r,values:c,sortCriterion:u,hasActiveValues:l,isLoading:d}}}}function Zs(e,t){if(!e.generateAutomaticRanges&&e.currentValues===void 0){let r=`currentValues should be specified for ${t} when generateAutomaticRanges is false.`;throw new Error(r)}}var ec=h$1("rangeFacet/executeToggleSelect",e=>x(e,Za(e.selection)));var hb={facetId:Y,selection:new j({values:Xa})},_g=Z("dateFacet/executeToggleSelect",(e,{dispatch:t,extra:{validatePayload:r}})=>{r(e,hb),t(It(e)),t(ec(e)),t(te({freezeFacetOrder:!0}));});var tc=["idle","selected"];var rc=["ascending","descending"],ac=["even","equiprobable"];var yb={start:new A,end:new A,endInclusive:new W,state:new A({constrainTo:tc})},Sb=new H({facetId:Er,field:Or,generateAutomaticRanges:Ks,filterFacetCount:qr,injectionDepth:Ir,numberOfValues:Yt,currentValues:new K({each:new j({values:yb})}),sortCriteria:new A({constrainTo:rc}),rangeAlgorithm:new A({constrainTo:ac})});function oc(e,t){le(e,Sb,t,"buildDateFacet"),es(t);}function zg(e,t){if(!xb(e));Zs(t.options,"buildDateFacet");let r=e.dispatch,a=Ge(e,t.options),o={currentValues:[],...t.options,facetId:a};oc(e,o),r(mr(o));let n=Xs(e,{facetId:a,getRequest:()=>e.state.dateFacetSet[a]});return {...n,toggleSelect:i=>r(_g({facetId:a,selection:i})),toggleSingleSelect:function(i){i.state==="idle"&&r(Se(a)),this.toggleSelect(i);},get state(){return n.state}}}function xb(e){return e.addReducers({configuration:$,search:G,dateFacetSet:Dt}),!0}function Fb(e,t){let r=zg(e,t),a=e.dispatch,o=()=>r.state.facetId;return {...r,deselectAll(){r.deselectAll(),a(b(Te(o())));},sortBy(n){r.sortBy(n),a(b(Ot({facetId:o(),criterion:n})));},toggleSelect:n=>{r.toggleSelect(n),a(b(Js(o(),n)));},get state(){return r.state}}}var Cb={facetId:Y,selection:new j({values:Ja})},Rb="numericFacet/executeToggleSelect",Hg=Z(Rb,(e,{dispatch:t,extra:{validatePayload:r}})=>{r(e,Cb),t(Tt(e)),t(ec(e)),t(te({freezeFacetOrder:!0}));});var bb={start:new L,end:new L,endInclusive:new W,state:new A({constrainTo:tc})},vb=new H({facetId:Er,field:Or,generateAutomaticRanges:Ks,filterFacetCount:qr,injectionDepth:Ir,numberOfValues:Yt,currentValues:new K({each:new j({values:bb})}),sortCriteria:new A({constrainTo:rc}),rangeAlgorithm:new A({constrainTo:ac})});function nc(e,t){le(e,vb,t,"buildNumericFacet"),us(t);}function Sn(e){return {endInclusive:!1,state:"idle",...e}}function Wg(e,t){if(!Ab(e));Zs(t.options,"buildNumericFacet");let r=e.dispatch,a=Ge(e,t.options),o={currentValues:[],...t.options,facetId:a};nc(e,o),r(hr(o));let n=Xs(e,{facetId:a,getRequest:()=>e.state.numericFacetSet[a]});return {...n,toggleSelect:i=>r(Hg({facetId:a,selection:i})),toggleSingleSelect(i){i.state==="idle"&&r(Se(a)),this.toggleSelect(i);},get state(){return n.state}}}function Ab(e){return e.addReducers({numericFacetSet:Ye,configuration:$,search:G}),!0}function Pb(e,t){if(!wb(e));let r=Wg(e,t),a=e.dispatch,o=()=>r.state.facetId;return {...r,deselectAll(){r.deselectAll(),a(b(Te(o())));},sortBy(n){r.sortBy(n),a(b(Ot({facetId:o(),criterion:n})));},toggleSelect:n=>{r.toggleSelect(n),a(b(Js(o(),n)));},get state(){return {...r.state}}}}function wb(e){return e.addReducers({numericFacetSet:Ye,configuration:$,search:G}),!0}function Eb(e,t){return !!t&&t.facetId in e.numericFacetSet}var Ob=(e,t)=>{let r=St(e,t);if(Eb(e,r))return r},ic=(e,t)=>{let r=Ob(e,t);return r?r.values.filter(a=>a.state==="selected"):[]};function Yg(e,t){var s;if(!qb(e));let r=B(e),{dispatch:a}=e,o=()=>e.state,n=Ge(e,t.options),i={...t.options,currentValues:((s=t.initialState)==null?void 0:s.range)?[{...t.initialState.range,endInclusive:!0,state:"selected"}]:[],generateAutomaticRanges:!1,facetId:n};return nc(e,i),a(hr(i)),{...r,clear:()=>{a(zt({facetId:n,values:[]})),a(te({freezeFacetOrder:!0}));},setRange:u=>{let c={...u,state:"selected",numberOfResults:0,endInclusive:!0},d=zt({facetId:n,values:[c]});return d.error?!1:(a(d),a(te({freezeFacetOrder:!0})),!0)},get state(){let u=xt(o()),c=ic(o(),n),d=c.length?c[0]:void 0;return {facetId:n,isLoading:u,range:d}}}}function qb(e){return e.addReducers({numericFacetSet:Ye,configuration:$,search:G}),!0}function Ib(e,t){if(!Tb(e));let r=Yg(e,t),{dispatch:a}=e,o=()=>r.state.facetId;return {...r,clear:()=>{r.clear(),a(b(Te(o())));},setRange:n=>{let i=r.setRange(n);return i&&a(b(Ce({facetId:o(),facetValue:`${n.start}..${n.end}`}))),i},get state(){return {...r.state}}}}function Tb(e){return e.addReducers({numericFacetSet:Ye,configuration:$,search:G}),!0}function kb(e,t){return !!t&&t.facetId in e.dateFacetSet}var Db=(e,t)=>{let r=St(e,t);if(kb(e,r))return r},sc=(e,t)=>{let r=Db(e,t);return r?r.values.filter(a=>a.state==="selected"):[]};function Kg(e,t){var s;if(!Vb(e));let r=B(e),{dispatch:a}=e,o=()=>e.state,n=Ge(e,t.options),i={...t.options,currentValues:((s=t.initialState)==null?void 0:s.range)?[{...t.initialState.range,endInclusive:!0,state:"selected"}]:[],generateAutomaticRanges:!1,facetId:n};return oc(e,i),a(mr(i)),{...r,clear:()=>{a(_t({facetId:n,values:[]})),a(te({freezeFacetOrder:!0}));},setRange:u=>{let c={...u,state:"selected",numberOfResults:0,endInclusive:!0},d=_t({facetId:n,values:[c]});return d.error?!1:(a(d),a(te({freezeFacetOrder:!0})),!0)},get state(){let u=xt(o()),c=sc(o(),n),d=c.length?c[0]:void 0;return {facetId:n,isLoading:u,range:d}}}}function Vb(e){return e.addReducers({dateFacetSet:Dt,configuration:$,search:G}),!0}function Nb(e,t){if(!Mb(e));let r=Kg(e,t),{dispatch:a}=e,o=()=>r.state.facetId;return {...r,clear:()=>{r.clear(),a(b(Te(o())));},setRange:n=>{let i=r.setRange(n);return i&&a(b(Ce({facetId:o(),facetValue:`${n.start}..${n.end}`}))),i},get state(){return {...r.state}}}}function Mb(e){return e.addReducers({dateFacetSet:Dt,configuration:$,search:G}),!0}var cc=V("history/analytics/forward",D.Search,e=>e.logSearchEvent("historyForward")),uc=V("history/analytics/backward",D.Search,e=>e.logSearchEvent("historyBackward")),lc=V("history/analytics/noresultsback",D.Search,e=>e.logNoResultsBack());function Qb(e){if(!jb(e));let t=B(e),{dispatch:r}=e,a=()=>e.state,o=n=>n.past.length>0&&!ie(n.present);return {...t,get state(){return a().history},async back(){!o(this.state)||(await r(an()),r(b(uc())));},async forward(){!this.state.future.length||!this.state.present||(await r(pi()),r(b(cc())));},async backOnNoResults(){!o(this.state)||(await r(an()),r(b(lc())));}}}function jb(e){return e.addReducers({history:Us,configuration:$,facetOrder:Os}),!0}function Lb(e){return e.pagination.firstResult}function Gg(e){return e.pagination.numberOfResults}function Bb(e){return e.pagination.totalCountFiltered}var Tr=e=>{let t=Lb(e),r=Gg(e);return Rl(t,r)},dc=e=>{let t=Bb(e),r=Gg(e);return bl(t,r)},ql=(e,t)=>{let r=Tr(e),a=dc(e),o=Ub(r,t);return o=$b(o),o=_b(o,a),zb(o)};function Ub(e,t){let r=t%2==0,a=Math.floor(t/2),o=r?a-1:a,n=e-a,i=e+o;return {start:n,end:i}}function $b(e){let t=Math.max(ao-e.start,0),r=e.start+t,a=e.end+t;return {start:r,end:a}}function _b(e,t){let r=Math.max(e.end-t,0),a=Math.max(e.start-r,ao),o=e.end-r;return {start:a,end:o}}function zb(e){let t=[];for(let r=e.start;r<=e.end;++r)t.push(r);return t}var Do=V("analytics/pager/resize",D.Search,(e,t)=>{var r;return e.logPagerResize({currentResultsPerPage:((r=t.pagination)==null?void 0:r.numberOfResults)||Ee().numberOfResults})}),Vo=V("analytics/pager/number",D.Search,(e,t)=>e.logPagerNumber({pagerNumber:Tr(t)})),pc=V("analytics/pager/next",D.Search,(e,t)=>e.logPagerNext({pagerNumber:Tr(t)})),fc=V("analytics/pager/previous",D.Search,(e,t)=>e.logPagerPrevious({pagerNumber:Tr(t)}));var Hb=new H({numberOfPages:new L({default:5,min:0})}),Wb=new H({page:new L({min:1})});function Jg(e,t={}){if(!Yb(e));let r=B(e),{dispatch:a}=e,o=le(e,Hb,t.options,"buildPager"),i=Ae(e,Wb,t.initialState,"buildPager").page;i&&a(va(i));let s=()=>Tr(e.state),u=()=>{let{numberOfPages:d}=o;return ql(e.state,d)},c=()=>dc(e.state);return {...r,get state(){let d=s(),l=c(),f=d>ao&&l>0,p=d<l;return {currentPage:d,currentPages:u(),maxPage:l,hasPreviousPage:f,hasNextPage:p}},selectPage(d){a(Rt(d));},nextPage(){a(Aa());},previousPage(){a(Pa());},isCurrentPage(d){return d===this.state.currentPage}}}function Yb(e){return e.addReducers({configuration:$,pagination:kt}),!0}function Kb(e,t={}){let{dispatch:r}=e,a=Jg(e,t);return {...a,get state(){return a.state},selectPage(o){a.selectPage(o),r(b(Vo()));},nextPage(){a.nextPage(),r(b(pc()));},previousPage(){a.previousPage(),r(b(fc()));}}}function Gb(e){if(!Jb(e));let t=B(e),r=()=>e.state;return {...t,get state(){return {hasError:r().search.error!==null,error:r().search.error}}}}function Jb(e){return e.addReducers({search:G}),!0}function xn(e){if(!Xb(e));let t=B(e),r=()=>e.state;return {...t,get state(){let a=r();return {hasError:a.search.error!==null,isLoading:a.search.isLoading,hasResults:!!a.search.results.length,firstSearchExecuted:Ws(a)}}}}function Xb(e){return e.addReducers({search:G}),!0}function Zb(e){if(!ev(e));let t=B(e),r=xn(e),a=()=>e.state,o=()=>{let i=e.state.search.duration/1e3;return Math.round((i+Number.EPSILON)*100)/100};return {...t,get state(){let n=a();return {...r.state,durationInMilliseconds:n.search.duration,durationInSeconds:o(),firstResult:n.pagination.firstResult+1,hasDuration:n.search.duration!==0,hasQuery:n.search.queryExecuted!=="",lastResult:n.pagination.firstResult+n.search.results.length,query:n.search.queryExecuted,total:n.pagination.totalCountFiltered}}}}function ev(e){return e.addReducers({search:G,pagination:kt}),!0}var tv=new H({fieldsToInclude:new K({required:!1,each:new A({required:!0,emptyAllowed:!1})})});function Il(e,t){if(!rv(e));let r=B(e),a=xn(e),{dispatch:o}=e,n=()=>e.state,i=le(e,tv,t==null?void 0:t.options,"buildResultList");i.fieldsToInclude&&o(yr(i.fieldsToInclude));let s=()=>e.state.search.results.length<e.state.search.response.totalCountFiltered,u=0,c=0,d=5,l=200,f=!1;return {...r,get state(){let m=n();return {...a.state,results:m.search.results,searchUid:m.search.response.searchUid,moreResultsAvailable:s(),searchResponseId:m.search.searchResponseId}},fetchMoreResults:()=>{if(e.state.search.isLoading)return;if(!s()){e.logger.info("No more results are available for the result list to fetch.");return}if(Date.now()-u<l){if(c++,c>=d){u=Date.now(),!f&&e.logger.error(`The result list method "fetchMoreResults" execution prevented because it has been triggered consecutively ${d} times, with little delay. Please verify the conditions under which the function is called.`),f=!0;return}}else c=0;f=!1,o(vt()).then(()=>u=Date.now());}}}function rv(e){return e.addReducers({search:G,configuration:$,fields:Ar}),!0}var av=e=>V("analytics/result/open",D.Click,(t,r)=>(tt(e),t.logDocumentOpen(sr(e,r),$t(e)))),mc=e=>av(e)();function Fn(e,t,r){if(!ov(e));let a=1e3,o={selectionDelay:a,debounceWait:a,...t.options},n;return {select:$s(r,o.debounceWait,{isImmediate:!0}),beginDelayedSelect(){n=setTimeout(r,o.selectionDelay);},cancelPendingSelect(){n&&clearTimeout(n);}}}function ov(e){return e.addReducers({configuration:$}),!0}function nv(e,t){let r=!1,a=()=>{r||(r=!0,e.dispatch(mc(t.options.result)));};return Fn(e,t,()=>{a(),e.dispatch(fo(t.options.result));})}var iv=new H({numberOfResults:new L({min:0})});function Xg(e,t={}){if(!sv(e));let r=B(e),{dispatch:a}=e,o=()=>e.state,i=Ae(e,iv,t.initialState,"buildResultsPerPage").numberOfResults;return i!==void 0&&a(Ra(i)),{...r,get state(){return {numberOfResults:o().pagination.numberOfResults}},set(s){a(ba(s));},isSetTo(s){return s===this.state.numberOfResults}}}function sv(e){return e.addReducers({pagination:kt,configuration:$}),!0}function cv(e,t={}){if(!uv(e));let r=Xg(e,t),{dispatch:a}=e;return {...r,get state(){return {...r.state}},set(o){r.set(o),a(b(Do()));}}}function uv(e){return e.addReducers({pagination:kt,configuration:$}),!0}var No=V("analytics/searchbox/submit",D.Search,e=>e.logSearchboxSubmit());var gc={enableQuerySyntax:!1,numberOfSuggestions:5},Tl={open:new A,close:new A},kl={id:q,numberOfSuggestions:new L({min:0}),enableQuerySyntax:new W,highlightOptions:new j({values:{notMatchDelimiters:new j({values:Tl}),exactMatchDelimiters:new j({values:Tl}),correctionDelimiters:new j({values:Tl})}})},Zg=new H(kl);var hc=e=>V("analytics/querySuggest",D.Search,(t,r)=>{let a=Dl(r,e);return t.logOmniboxAnalytics(a)})();function Dl(e,t){let{id:r,suggestion:a}=t,o=e.querySuggest&&e.querySuggest[r];if(!o)throw new Error(`Unable to determine the query suggest analytics metadata to send because no query suggest with id "${r}" was found. Please check the sent #id.`);let n=o.completions.map(c=>c.expression),i=o.partialQueries.length-1,s=o.partialQueries[i]||"",u=o.responseId;return {suggestionRanking:n.indexOf(a),partialQuery:s,partialQueries:o.partialQueries,suggestions:n,querySuggestResponseId:u}}function Vl(e,t={}){var c,d;if(!dv(e));let r=B(e),{dispatch:a}=e,o=()=>e.state,n=((c=t.options)==null?void 0:c.id)||si("search_box"),i={id:n,highlightOptions:{...(d=t.options)==null?void 0:d.highlightOptions},...gc,...t.options};le(e,Zg,i,"buildSearchBox"),a(oo({id:n,query:e.state.query.q})),i.numberOfSuggestions&&a(no({id:n,q:e.state.query.q,count:i.numberOfSuggestions}));let s=()=>e.state.querySet[i.id],u=async l=>{let{enableQuerySyntax:f}=i;a(xi({q:s(),enableQuerySyntax:f})),await a(b(l));};return {...r,updateText(l){a(Ht({id:n,query:l})),this.showSuggestions();},clear(){a(Ht({id:n,query:""})),a(Fr({id:n}));},showSuggestions(){i.numberOfSuggestions&&a(Cr({id:n}));},selectSuggestion(l){a(We({id:n,expression:l})),u(hc({id:n,suggestion:l})).then(()=>{a(Fr({id:n}));});},submit(){u(No()),a(Fr({id:n}));},get state(){let l=o(),f=l.querySuggest[i.id],p=lv(f,i.highlightOptions),m=f?f.isLoading:!1;return {value:s(),suggestions:p,isLoading:l.search.isLoading,isLoadingSuggestions:m}}}}function lv(e,t){return e?e.completions.map(r=>({highlightedValue:nl(r.highlighted,t),rawValue:r.expression})):[]}function dv(e){return e.addReducers({query:Ke,querySuggest:Eo,configuration:$,querySet:ks,search:G}),!0}var Mo=V("analytics/sort/results",D.Search,(e,t)=>e.logResultsSort({resultsSortBy:t.sortCriteria||Be()}));function pv(e,t){if(!t)return;let r=new H({criterion:new K({each:ld})}),a=fv(t),o={...t,criterion:a};Ae(e,r,o,"buildSort");}function fv(e){return e.criterion?ta(e.criterion)?e.criterion:[e.criterion]:[]}function mv(e,t={}){var s;if(!gv(e));let r=B(e),{dispatch:a}=e,o=()=>e.state;pv(e,t.initialState);let n=(s=t.initialState)==null?void 0:s.criterion,i=()=>a(b(Mo()));return n&&a(Fo(n)),{...r,sortBy(u){a(Co(u)),a(Rt(1)),i();},isSortedBy(u){return this.state.sortCriteria===Mt(u)},get state(){return {sortCriteria:o().sortCriteria}}}}function gv(e){return e.addReducers({configuration:$,sortCriteria:Vs}),!0}function vv(e){if(!Av(e));let t=B(e),r=()=>e.state;return {...t,sort(a){return wa(a,this.state.facetIds)},get state(){return {facetIds:r().search.response.facets.map(n=>n.facetId)}}}}function Av(e){return e.addReducers({search:G,facetOptions:qs}),!0}var yc=()=>V("analytics/facet/deselectAllBreadcrumbs",D.Search,e=>e.logBreadcrumbResetAll())();var Pv={categoryFacetId:Y,categoryFacetPath:new K({required:!0,each:q})},wv=(e,{categoryFacetId:t,categoryFacetPath:r})=>{let a=e.categoryFacetSet[t],o=a==null?void 0:a.request.field,n=`${o}_${t}`;return {categoryFacetId:t,categoryFacetPath:r,categoryFacetField:o,categoryFacetTitle:n}},Sc=e=>V("analytics/categoryFacet/breadcrumb",D.Search,(t,r)=>(x(e,Pv),t.logBreadcrumbFacet(wv(r,e))))();var xc=(e,{facetId:t,selection:r})=>{let a=e.dateFacetSet[t]||e.numericFacetSet[t],o=a.field,n=`${a.field}_${t}`;return {facetId:t,facetField:o,facetTitle:n,facetRangeEndInclusive:r.endInclusive,facetRangeEnd:`${r.end}`,facetRangeStart:`${r.start}`}};var Fc=e=>V("analytics/numericFacet/breadcrumb",D.Search,(t,r)=>{x(e,Za(e.selection));let a=xc(r,e);return t.logBreadcrumbFacet(a)})();var Cc=e=>V("analytics/dateFacet/breadcrumb",D.Search,(t,r)=>{x(e,Za(e.selection));let a=xc(r,e);return t.logBreadcrumbFacet(a)})();function Ev(e){if(!Ov(e));let t=B(e),{dispatch:r}=e,a=(p,m,y)=>Object.keys(p).map(S=>{let F=y(e.state,S).map(C=>({value:C,deselect:()=>m({facetId:S,selection:C})}));return {facetId:S,field:p[S].field,values:F}}).filter(S=>S.values.length),o=()=>a(e.state.facetSet,({facetId:p,selection:m})=>{let y=Xi({facetId:p,facetValue:m.value});r(qt({facetId:p,selection:m})),r(Ga({facetId:p,freezeCurrentValues:!1})),r(b(y));},Mu),n=()=>a(e.state.numericFacetSet,p=>{r(Tt(p)),r(b(Fc(p)));},ic),i=()=>a(e.state.dateFacetSet,p=>{r(It(p)),r(b(Cc(p)));},sc),s=p=>{let m=en(e.state,p);return {facetId:p,field:e.state.categoryFacetSet[p].request.field,path:m,deselect:()=>{r(wt(p)),r(b(Sc({categoryFacetPath:m.map(y=>y.value),categoryFacetId:p})));}}},u=()=>Object.keys(e.state.categoryFacetSet).map(s).filter(p=>p.path.length),c=()=>{let p=e.state.staticFilterSet||{};return Object.values(p).map(d)},d=p=>{let{id:m,values:y}=p,S=y.filter(F=>F.state==="selected").map(F=>l(m,F));return {id:m,values:S}},l=(p,m)=>({value:m,deselect:()=>{let{caption:y,expression:S}=m,F=wo({staticFilterId:p,staticFilterValue:{caption:y,expression:S}});r(Wt({id:p,value:m})),r(b(F));}});function f(){return !![...o(),...n(),...i(),...u(),...c()].length}return {...t,get state(){return {facetBreadcrumbs:o(),categoryFacetBreadcrumbs:u(),numericFacetBreadcrumbs:n(),dateFacetBreadcrumbs:i(),staticFilterBreadcrumbs:c(),hasBreadcrumbs:f()}},deselectAll:()=>{r(Pe()),r(b(yc()));},deselectBreadcrumb(p){p.deselect();}}}function Ov(e){return e.addReducers({configuration:$,search:G,facetSet:br,numericFacetSet:Ye,dateFacetSet:Dt,categoryFacetSet:vr}),!0}function ah(e){var t,r,a,o;return {q:Fe().q,enableQuerySyntax:Fe().enableQuerySyntax,aq:(r=(t=e.advancedSearchQueries)==null?void 0:t.defaultFilters.aq)!=null?r:Ve().defaultFilters.aq,cq:(o=(a=e.advancedSearchQueries)==null?void 0:a.defaultFilters.cq)!=null?o:Ve().defaultFilters.cq,firstResult:Ee().firstResult,numberOfResults:Ee().numberOfResults,sortCriteria:Be(),f:{},cf:{},nf:{},df:{},debug:Ne(),sf:{},tab:""}}function oh(e,t){return e.q!==t.q?No():e.sortCriteria!==t.sortCriteria?Mo():e.firstResult!==t.firstResult?Vo():e.numberOfResults!==t.numberOfResults?Do():Rc(e.f,t.f)?Nl(e.f,t.f):Rc(e.cf,t.cf)?Nl(e.cf,t.cf):Rc(e.nf,t.nf)?ih(e.nf,t.nf):Rc(e.df,t.df)?ih(e.df,t.df):wr()}function Rc(e={},t={}){return JSON.stringify(e)!==JSON.stringify(t)}function nh(e){let t={};return Object.keys(e).forEach(r=>t[r]=e[r].map(a=>`${a.start}..${a.end}`)),t}function Nl(e={},t={}){let r=Object.keys(e),a=Object.keys(t),o=r.filter(l=>!a.includes(l));if(o.length){let l=o[0];return e[l].length>1?Te(l):at({facetId:l,facetValue:e[l][0]})}let n=a.filter(l=>!r.includes(l));if(n.length){let l=n[0];return Ce({facetId:l,facetValue:t[l][0]})}let i=a.find(l=>t[l].filter(f=>e[l].includes(f)));if(!i)return wr();let s=e[i],u=t[i],c=u.filter(l=>!s.includes(l));if(c.length)return Ce({facetId:i,facetValue:c[0]});let d=s.filter(l=>!u.includes(l));return d.length?at({facetId:i,facetValue:d[0]}):wr()}function ih(e={},t={}){return Nl(nh(e),nh(t))}var Tv=new H({parameters:new j({options:{required:!0},values:Li})});function Ml(e,t){let{dispatch:r}=e,a=B(e);return Ae(e,Tv,t.initialState,"buildSearchParameterManager"),r(ne(t.initialState.parameters)),{...a,synchronize(o){let n=ch(e),i=sh(e,n),s=sh(e,o);fs(i,s)||(r(ne(s)),r(b(oh(i,s))));},get state(){return {parameters:ch(e)}}}}function sh(e,t){return {...ah(e.state),...t}}function ch(e){let t=e.state;return {...kv(t),...Dv(t),...Vv(t),...Nv(t),...Mv(t),...Qv(t),...jv(t),...Lv(t),...$v(t),...zv(t),...Hv(t),...Wv(t),...Yv(t),...Bv(t)}}function kv(e){if(e.query===void 0)return {};let t=e.query.q;return t!==Fe().q?{q:t}:{}}function Dv(e){if(e.query===void 0)return {};let t=e.query.enableQuerySyntax;return t!==Fe().enableQuerySyntax?{enableQuerySyntax:t}:{}}function Vv(e){if(e.advancedSearchQueries===void 0)return {};let{aq:t,defaultFilters:r}=e.advancedSearchQueries;return t!==r.aq?{aq:t}:{}}function Nv(e){if(e.advancedSearchQueries===void 0)return {};let{cq:t,defaultFilters:r}=e.advancedSearchQueries;return t!==r.cq?{cq:t}:{}}function Mv(e){let t=Object.values(e.tabSet||{}).find(r=>r.isActive);return t?{tab:t.id}:{}}function Qv(e){if(e.pagination===void 0)return {};let t=e.pagination.firstResult;return t!==Ee().firstResult?{firstResult:t}:{}}function jv(e){if(e.pagination===void 0)return {};let t=e.pagination.numberOfResults;return t!==Ee().numberOfResults?{numberOfResults:t}:{}}function Lv(e){if(e.sortCriteria===void 0)return {};let t=e.sortCriteria;return t!==Be()?{sortCriteria:t}:{}}function Bv(e){if(e.staticFilterSet===void 0)return {};let t=Object.entries(e.staticFilterSet).map(([r,a])=>{let o=Uv(a.values);return o.length?{[r]:o}:{}}).reduce((r,a)=>({...r,...a}),{});return Object.keys(t).length?{sf:t}:{}}function Uv(e){return e.filter(t=>t.state==="selected").map(t=>t.caption)}function $v(e){if(e.facetSet===void 0)return {};let t=Object.entries(e.facetSet).map(([r,a])=>{let o=_v(a.currentValues);return o.length?{[r]:o}:{}}).reduce((r,a)=>({...r,...a}),{});return Object.keys(t).length?{f:t}:{}}function _v(e){return e.filter(t=>t.state==="selected").map(t=>t.value)}function zv(e){if(e.categoryFacetSet===void 0)return {};let t=Object.entries(e.categoryFacetSet).map(([r,a])=>{let{parents:o}=_e(a.request.currentValues),n=o.map(i=>i.value);return n.length?{[r]:n}:{}}).reduce((r,a)=>({...r,...a}),{});return Object.keys(t).length?{cf:t}:{}}function Hv(e){if(e.numericFacetSet===void 0)return {};let t=Object.entries(e.numericFacetSet).map(([r,a])=>{let o=uh(a.currentValues);return o.length?{[r]:o}:{}}).reduce((r,a)=>({...r,...a}),{});return Object.keys(t).length?{nf:t}:{}}function Wv(e){if(e.dateFacetSet===void 0)return {};let t=Object.entries(e.dateFacetSet).map(([r,a])=>{let o=uh(a.currentValues);return o.length?{[r]:o}:{}}).reduce((r,a)=>({...r,...a}),{});return Object.keys(t).length?{df:t}:{}}function uh(e){return e.filter(t=>t.state==="selected")}function Yv(e){if(e.debug===void 0)return {};let t=e.debug;return t!==Ne()?{debug:t}:{}}var bc="&",Cn="=",Ql="..";function vc(){return {serialize:Kv,deserialize:tA}}function Kv(e){return Object.entries(e).map(Gv).filter(t=>t).join(bc)}function Gv(e){let[t,r]=e;return dh(t)?t==="f"||t==="cf"||t==="sf"?Jv(r)?Zv(t,r):"":t==="nf"||t==="df"?Xv(r)?eA(t,r):"":`${t}${Cn}${encodeURIComponent(r)}`:""}function Jv(e){return jl(e)?lh(e,r=>typeof r=="string"):!1}function Xv(e){return jl(e)?lh(e,r=>jl(r)&&"start"in r&&"end"in r):!1}function jl(e){return !!(e&&typeof e=="object")}function lh(e,t){return Object.entries(e).filter(a=>{let o=a[1];return !Array.isArray(o)||!o.every(t)}).length===0}function Zv(e,t){return Object.entries(t).map(([r,a])=>`${e}[${r}]${Cn}${a.map(o=>encodeURIComponent(o)).join(",")}`).join(bc)}function eA(e,t){return Object.entries(t).map(([r,a])=>{let o=a.map(({start:n,end:i})=>`${n}${Ql}${i}`).join(",");return `${e}[${r}]${Cn}${o}`}).join(bc)}function tA(e){return e.split(bc).map(a=>rA(a)).map(aA).filter(cA).map(uA).reduce((a,o)=>{let[n,i]=o;if(ph(n)){let s={...a[n],...i};return {...a,[n]:s}}return {...a,[n]:i}},{})}function rA(e){let[t,...r]=e.split(Cn),a=r.join(Cn);return [t,a]}function aA(e){let[t,r]=e,o=/^(f|cf|nf|df|sf)\[(.+)\]$/.exec(t);if(!o)return e;let n=o[1],i=o[2],s=r.split(","),u=oA(n,s),c={[i]:u};return [n,JSON.stringify(c)]}function oA(e,t){return e==="nf"?nA(t):e==="df"?sA(t):t}function nA(e){return e.map(t=>t.split(Ql).map(parseFloat)).filter(t=>t.length===2&&t.every(Number.isFinite)).map(([t,r])=>Sn({start:t,end:r,state:"selected"}))}function iA(e){try{return Hp(e)?(hi(e,Hu),!0):Ct(e)?(Lr(e),!0):!1}catch(t){return !1}}function sA(e){return e.map(t=>t.split(Ql)).filter(t=>t.length===2&&t.every(r=>iA(r))).map(([t,r])=>Yr({start:t,end:r,state:"selected"}))}function cA(e){let t=dh(e[0]),r=e.length===2;return t&&r}function dh(e){return e in{q:!0,aq:!0,cq:!0,enableQuerySyntax:!0,firstResult:!0,numberOfResults:!0,sortCriteria:!0,f:!0,cf:!0,nf:!0,df:!0,debug:!0,sf:!0,tab:!0}}function uA(e){let[t,r]=e;return t==="enableQuerySyntax"?[t,r==="true"]:t==="debug"?[t,r==="true"]:t==="firstResult"?[t,parseInt(r)]:t==="numberOfResults"?[t,parseInt(r)]:ph(t)?[t,lA(r)]:[t,decodeURIComponent(r)]}function lA(e){let t=JSON.parse(e),r={};return Object.entries(t).forEach(a=>{let[o,n]=a;r[o]=n.map(i=>ea(i)?decodeURIComponent(i):i);}),r}function ph(e){return ["f","cf","nf","df","sf"].includes(e)}var dA=new H({fragment:new A});function pA(e,t){let r;function a(){r=e.state.search.requestId;}function o(){return r!==e.state.search.requestId}if(!mA(e));Ae(e,dA,t.initialState,"buildUrlManager");let n=B(e),i=t.initialState.fragment;a();let s=Ml(e,{initialState:{parameters:Ac(i)}});return {...n,subscribe(u){let c=()=>{let d=this.state.fragment;!fA(i,d)&&o()&&(i=d,u()),a();};return c(),e.subscribe(c)},get state(){return {fragment:vc().serialize(s.state.parameters)}},synchronize(u){i=u;let c=Ac(u);s.synchronize(c);}}}function fA(e,t){if(e===t)return !0;let r=Ac(e),a=Ac(t);return fs(r,a)}function Ac(e){return vc().deserialize(e)}function mA(e){return e.addReducers({configuration:$}),!0}V("analytics/trigger/query",D.Search,(e,t)=>{var r;if((r=t.triggers)==null?void 0:r.query)return e.logTriggerQuery()});V("analytics/trigger/notify",D.Search,(e,t)=>{var r;if((r=t.triggers)==null?void 0:r.notification)return e.logTriggerNotify({notification:t.triggers.notification})});V("analytics/trigger/redirect",D.Search,(e,t)=>{var r;if((r=t.triggers)==null?void 0:r.redirectTo)return e.logTriggerRedirect({redirectedTo:t.triggers.redirectTo})});V("analytics/trigger/execute",D.Search,(e,t)=>{var r;if((r=t.triggers)==null?void 0:r.execute)return e.logTriggerExecute({executed:t.triggers.execute.functionName})});V("analytics/smartSnippet/expand",D.Custom,e=>e.logExpandSmartSnippet());V("analytics/smartSnippet/collapse",D.Custom,e=>e.logCollapseSmartSnippet());V("analytics/smartSnippet/like",D.Custom,e=>e.logLikeSmartSnippet());V("analytics/smartSnippet/dislike",D.Custom,e=>e.logDislikeSmartSnippet());var Sh=V("analytics/recentQueries/clear",D.Custom,e=>e.logClearRecentQueries()),xh=V("analytics/recentQueries/click",D.Search,e=>e.logRecentQueryClick());var kA={initialState:{queries:[]},options:{maxLength:10}},DA=new H({queries:new K({required:!0})}),VA=new H({maxLength:new L({required:!0,min:1})});function NA(e,t){le(e,VA,t==null?void 0:t.options,"buildRecentQueriesList"),Ae(e,DA,t==null?void 0:t.initialState,"buildRecentQueriesList");}function MA(e,t){if(!QA(e));let r=B(e),{dispatch:a}=e,o=()=>e.state,n={...kA,...t};NA(e,n);let i={queries:n.initialState.queries,maxLength:n.options.maxLength};return a(go(i)),{...r,get state(){let s=o();return {...s.recentQueries,analyticsEnabled:s.configuration.analytics.enabled}},clear(){a(Sh()),a(ho());},executeRecentQuery(s){let u=new L({required:!0,min:0,max:this.state.queries.length}).validate(s);if(u)throw new Error(u);a(xi({q:this.state.queries[s]})),a(b(xh()));}}}function QA(e){return e.addReducers({search:G,recentQueries:Bs}),!0}V("analytics/recentResults/clear",D.Custom,e=>e.logClearRecentResults());function G6(e){return e.addReducers({configuration:$,pipeline:Oo,searchHub:qo}),{updateSearchConfiguration:Pt}}function S9(e){return e.addReducers({dateFacetSet:Dt}),{deselectAllDateFacetValues:rs,registerDateFacet:mr,toggleSelectDateFacetValue:It,updateDateFacetSortCriterion:ts,updateDateFacetValues:_t}}function $9(e){return e.addReducers({numericFacetSet:Ye}),{deselectAllNumericFacetValues:ds,registerNumericFacet:hr,toggleSelectNumericFacetValue:Tt,updateNumericFacetSortCriterion:ls,updateNumericFacetValues:zt}}function gX(e){return e.addReducers({querySet:ks}),{registerQuerySetQuery:oo,updateQuerySetQuery:Ht}}function AX(e){return e.addReducers({querySuggest:Eo}),{clearQuerySuggest:Fr,fetchQuerySuggestions:Cr,registerQuerySuggest:no,selectQuerySuggestion:We}}var WA=new H({priority:new L({required:!1,default:0,min:0}),fields:new K({required:!1,each:q})});function YA(e){if(!KA(e));let t=[],r=a=>{a.forEach(o=>{if(WA.validate(o,"Check the arguments of registerTemplates"),!o.conditions.every(i=>i instanceof Function))throw new Bo("Each result template conditions should be a function that takes a result as an argument and returns a boolean")});};return {registerTemplates(...a){let o=[];try{r(a);}catch(n){e.logger.error(n,"Result template manager error");return}a.forEach(n=>{let i={...n,priority:n.priority||0,fields:n.fields||[]};t.push(i),o.push(...i.fields);}),t.sort((n,i)=>i.priority-n.priority),o.length&&e.dispatch(yr(o));},selectTemplate(a){let o=t.find(n=>n.conditions.every(i=>i(a)));return o?o.content:null}}}function KA(e){return e.addReducers({fields:Ar}),!0}var Rn=(e,t)=>{let r=e;return ie(r[t])?ie(e.raw[t])?null:e.raw[t]:r[t]},Rh=e=>t=>e.every(r=>!ie(Rn(t,r))),bh=e=>t=>e.every(r=>ie(Rn(t,r))),vh=(e,t)=>r=>{let a=Ph(e,r);return t.some(o=>a.some(n=>`${n}`.toLowerCase()===o.toLowerCase()))},Ah=(e,t)=>r=>{let a=Ph(e,r);return t.every(o=>a.every(n=>`${n}`.toLowerCase()!==o.toLowerCase()))},Ph=(e,t)=>{let r=Rn(t,e);return ci(r)?r:[r]};var wh;(n=>{n.getResultProperty=Rn,n.fieldsMustBeDefined=Rh,n.fieldsMustNotBeDefined=bh,n.fieldMustMatch=vh,n.fieldMustNotMatch=Ah;})(wh||(wh={}));function GA(e){let{by:t,order:r}=e;switch(t){case ut.Relevancy:return Uo();case ut.QRE:return eu();case ut.NoSort:return tu();case ut.Date:if(!r)throw new Error('An order (i.e., ascending or descending) should be specified for a sort criterion sorted by "date"');return Xc(r);default:if(!r)throw new Error(`An order (i.e., ascending or descending) should be specified for a sort criterion sorted by a field, such as "${t}"`);return Zc(t,r)}}function JA(e){return e===void 0||e===Jt.Ascending||e===Jt.Descending}function XA(e){let t=e.split(","),r=new Error(`Wrong criterion expression format for "${e}"`);if(!t.length)throw r;return t.map(a=>{let o=a.trim().split(" "),n=o[0].toLowerCase(),i=o[1]&&o[1].toLowerCase();if(o.length>2||n==="")throw r;if(!JA(i))throw new Error(`Wrong criterion sort order "${i}" in expression "${e}". Order should either be "${Jt.Ascending}" or "${Jt.Descending}"`);return GA({by:n,order:i})})}/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

const NAMESPACE = 'atomic';

let scopeId;
let contentRef;
let hostTagName;
let useNativeShadowDom = false;
let checkSlotFallbackVisibility = false;
let checkSlotRelocate = false;
let isSvgMode = false;
let renderingRef = null;
let queuePending = false;
const win = typeof window !== 'undefined' ? window : {};
const doc = win.document || { head: {} };
const plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: (h) => h(),
    raf: (h) => requestAnimationFrame(h),
    ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
    rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
    ce: (eventName, opts) => new CustomEvent(eventName, opts),
};
const promiseResolve = (v) => Promise.resolve(v);
const supportsConstructibleStylesheets = /*@__PURE__*/ (() => {
        try {
            new CSSStyleSheet();
            return typeof new CSSStyleSheet().replace === 'function';
        }
        catch (e) { }
        return false;
    })()
    ;
const addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
    if (listeners) {
        listeners.map(([flags, name, method]) => {
            const target = getHostListenerTarget(elm, flags) ;
            const handler = hostListenerProxy(hostRef, method);
            const opts = hostListenerOpts(flags);
            plt.ael(target, name, handler, opts);
            (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
        });
    }
};
const hostListenerProxy = (hostRef, methodName) => (ev) => {
    try {
        {
            if (hostRef.$flags$ & 256 /* isListenReady */) {
                // instance is ready, let's call it's member method for this event
                hostRef.$lazyInstance$[methodName](ev);
            }
            else {
                (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
            }
        }
    }
    catch (e) {
        consoleError(e);
    }
};
const getHostListenerTarget = (elm, flags) => {
    if (flags & 4 /* TargetDocument */)
        return doc;
    if (flags & 8 /* TargetWindow */)
        return win;
    return elm;
};
// prettier-ignore
const hostListenerOpts = (flags) => (flags & 2 /* Capture */) !== 0;
const HYDRATED_CSS = '{visibility:hidden}.hydrated{visibility:inherit}';
const XLINK_NS = 'http://www.w3.org/1999/xlink';
const createTime = (fnName, tagName = '') => {
    {
        return () => {
            return;
        };
    }
};
const uniqueTime = (key, measureText) => {
    {
        return () => {
            return;
        };
    }
};
const rootAppliedStyles = new WeakMap();
const registerStyle = (scopeId, cssText, allowCS) => {
    let style = styles.get(scopeId);
    if (supportsConstructibleStylesheets && allowCS) {
        style = (style || new CSSStyleSheet());
        style.replace(cssText);
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
const addStyle = (styleContainerNode, cmpMeta, mode, hostElm) => {
    let scopeId = getScopeId(cmpMeta);
    let style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc;
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            let appliedStyles = rootAppliedStyles.get(styleContainerNode);
            let styleElm;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, (appliedStyles = new Set()));
            }
            if (!appliedStyles.has(scopeId)) {
                {
                    {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
        }
    }
    return scopeId;
};
const attachStyles = (hostRef) => {
    const cmpMeta = hostRef.$cmpMeta$;
    const elm = hostRef.$hostElement$;
    const flags = cmpMeta.$flags$;
    const endAttachStyles = createTime('attachStyles', cmpMeta.$tagName$);
    const scopeId = addStyle(elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta);
    if (flags & 10 /* needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = scopeId;
        elm.classList.add(scopeId + '-h');
    }
    endAttachStyles();
};
const getScopeId = (cmp, mode) => 'sc-' + (cmp.$tagName$);
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
const EMPTY_OBJ = {};
const isDef = (v) => v != null;
const isComplexType = (o) => {
    // https://jsperf.com/typeof-fn-object/5
    o = typeof o;
    return o === 'object' || o === 'function';
};
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// const stack: any[] = [];
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
const h = (nodeName, vnodeData, ...children) => {
    let child = null;
    let key = null;
    let slotName = null;
    let simple = false;
    let lastSimple = false;
    let vNodeChildren = [];
    const walk = (c) => {
        for (let i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if ((simple = typeof nodeName !== 'function' && !isComplexType(child))) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? newVNode(null, child) : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        // normalize class / classname attributes
        if (vnodeData.key) {
            key = vnodeData.key;
        }
        if (vnodeData.name) {
            slotName = vnodeData.name;
        }
        {
            const classData = vnodeData.className || vnodeData.class;
            if (classData) {
                vnodeData.class =
                    typeof classData !== 'object'
                        ? classData
                        : Object.keys(classData)
                            .filter((k) => classData[k])
                            .join(' ');
            }
        }
    }
    if (typeof nodeName === 'function') {
        // nodeName is a functional component
        return nodeName(vnodeData === null ? {} : vnodeData, vNodeChildren, vdomFnUtils);
    }
    const vnode = newVNode(nodeName, null);
    vnode.$attrs$ = vnodeData;
    if (vNodeChildren.length > 0) {
        vnode.$children$ = vNodeChildren;
    }
    {
        vnode.$key$ = key;
    }
    {
        vnode.$name$ = slotName;
    }
    return vnode;
};
const newVNode = (tag, text) => {
    const vnode = {
        $flags$: 0,
        $tag$: tag,
        $text$: text,
        $elm$: null,
        $children$: null,
    };
    {
        vnode.$attrs$ = null;
    }
    {
        vnode.$key$ = null;
    }
    {
        vnode.$name$ = null;
    }
    return vnode;
};
const Host = {};
const isHost = (node) => node && node.$tag$ === Host;
const vdomFnUtils = {
    forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
    map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate),
};
const convertToPublic = (node) => ({
    vattrs: node.$attrs$,
    vchildren: node.$children$,
    vkey: node.$key$,
    vname: node.$name$,
    vtag: node.$tag$,
    vtext: node.$text$,
});
const convertToPrivate = (node) => {
    if (typeof node.vtag === 'function') {
        const vnodeData = Object.assign({}, node.vattrs);
        if (node.vkey) {
            vnodeData.key = node.vkey;
        }
        if (node.vname) {
            vnodeData.name = node.vname;
        }
        return h(node.vtag, vnodeData, ...(node.vchildren || []));
    }
    const vnode = newVNode(node.vtag, node.vtext);
    vnode.$attrs$ = node.vattrs;
    vnode.$children$ = node.vchildren;
    vnode.$key$ = node.vkey;
    vnode.$name$ = node.vname;
    return vnode;
};
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
const setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
    if (oldValue !== newValue) {
        let isProp = isMemberInElement(elm, memberName);
        let ln = memberName.toLowerCase();
        if (memberName === 'class') {
            const classList = elm.classList;
            const oldClasses = parseClassList(oldValue);
            const newClasses = parseClassList(newValue);
            classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
            classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
        }
        else if (memberName === 'style') {
            // update style attribute, css properties and values
            {
                for (const prop in oldValue) {
                    if (!newValue || newValue[prop] == null) {
                        if (prop.includes('-')) {
                            elm.style.removeProperty(prop);
                        }
                        else {
                            elm.style[prop] = '';
                        }
                    }
                }
            }
            for (const prop in newValue) {
                if (!oldValue || newValue[prop] !== oldValue[prop]) {
                    if (prop.includes('-')) {
                        elm.style.setProperty(prop, newValue[prop]);
                    }
                    else {
                        elm.style[prop] = newValue[prop];
                    }
                }
            }
        }
        else if (memberName === 'key')
            ;
        else if (memberName === 'ref') {
            // minifier will clean this up
            if (newValue) {
                newValue(elm);
            }
        }
        else if ((!isProp ) &&
            memberName[0] === 'o' &&
            memberName[1] === 'n') {
            // Event Handlers
            // so if the member name starts with "on" and the 3rd characters is
            // a capital letter, and it's not already a member on the element,
            // then we're assuming it's an event listener
            if (memberName[2] === '-') {
                // on- prefixed events
                // allows to be explicit about the dom event to listen without any magic
                // under the hood:
                // <my-cmp on-click> // listens for "click"
                // <my-cmp on-Click> // listens for "Click"
                // <my-cmp on-ionChange> // listens for "ionChange"
                // <my-cmp on-EVENTS> // listens for "EVENTS"
                memberName = memberName.slice(3);
            }
            else if (isMemberInElement(win, ln)) {
                // standard event
                // the JSX attribute could have been "onMouseOver" and the
                // member name "onmouseover" is on the window's prototype
                // so let's add the listener "mouseover", which is all lowercased
                memberName = ln.slice(2);
            }
            else {
                // custom event
                // the JSX attribute could have been "onMyCustomEvent"
                // so let's trim off the "on" prefix and lowercase the first character
                // and add the listener "myCustomEvent"
                // except for the first character, we keep the event name case
                memberName = ln[2] + memberName.slice(3);
            }
            if (oldValue) {
                plt.rel(elm, memberName, oldValue, false);
            }
            if (newValue) {
                plt.ael(elm, memberName, newValue, false);
            }
        }
        else {
            // Set property if it exists and it's not a SVG
            const isComplex = isComplexType(newValue);
            if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
                try {
                    if (!elm.tagName.includes('-')) {
                        let n = newValue == null ? '' : newValue;
                        // Workaround for Safari, moving the <input> caret when re-assigning the same valued
                        if (memberName === 'list') {
                            isProp = false;
                        }
                        else if (oldValue == null || elm[memberName] != n) {
                            elm[memberName] = n;
                        }
                    }
                    else {
                        elm[memberName] = newValue;
                    }
                }
                catch (e) { }
            }
            /**
             * Need to manually update attribute if:
             * - memberName is not an attribute
             * - if we are rendering the host element in order to reflect attribute
             * - if it's a SVG, since properties might not work in <svg>
             * - if the newValue is null/undefined or 'false'.
             */
            let xlink = false;
            {
                if (ln !== (ln = ln.replace(/^xlink\:?/, ''))) {
                    memberName = ln;
                    xlink = true;
                }
            }
            if (newValue == null || newValue === false) {
                if (newValue !== false || elm.getAttribute(memberName) === '') {
                    if (xlink) {
                        elm.removeAttributeNS(XLINK_NS, memberName);
                    }
                    else {
                        elm.removeAttribute(memberName);
                    }
                }
            }
            else if ((!isProp || flags & 4 /* isHost */ || isSvg) && !isComplex) {
                newValue = newValue === true ? '' : newValue;
                if (xlink) {
                    elm.setAttributeNS(XLINK_NS, memberName, newValue);
                }
                else {
                    elm.setAttribute(memberName, newValue);
                }
            }
        }
    }
};
const parseClassListRegex = /\s/;
const parseClassList = (value) => (!value ? [] : value.split(parseClassListRegex));
const updateElement = (oldVnode, newVnode, isSvgMode, memberName) => {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    const elm = newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host
        ? newVnode.$elm$.host
        : newVnode.$elm$;
    const oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (!(memberName in newVnodeAttrs)) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
const createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
    // tslint:disable-next-line: prefer-const
    let newVNode = newParentVNode.$children$[childIndex];
    let i = 0;
    let elm;
    let childNode;
    let oldVNode;
    if (!useNativeShadowDom) {
        // remember for later we need to check to relocate nodes
        checkSlotRelocate = true;
        if (newVNode.$tag$ === 'slot') {
            if (scopeId) {
                // scoped css needs to add its scoped id to the parent element
                parentElm.classList.add(scopeId + '-s');
            }
            newVNode.$flags$ |= newVNode.$children$
                ? // slot element has fallback content
                    2 /* isSlotFallback */
                : // slot element does not have fallback content
                    1 /* isSlotReference */;
        }
    }
    if (newVNode.$text$ !== null) {
        // create text node
        elm = newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else if (newVNode.$flags$ & 1 /* isSlotReference */) {
        // create a slot reference node
        elm = newVNode.$elm$ =
            doc.createTextNode('');
    }
    else {
        // create element
        elm = newVNode.$elm$ = (doc.createElement(newVNode.$flags$ & 2 /* isSlotFallback */
                ? 'slot-fb'
                : newVNode.$tag$));
        // add css classes, attrs, props, listeners, etc.
        {
            updateElement(null, newVNode, isSvgMode);
        }
        if (isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i, elm);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
    }
    {
        elm['s-hn'] = hostTagName;
        if (newVNode.$flags$ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
            // remember the content reference comment
            elm['s-sr'] = true;
            // remember the content reference comment
            elm['s-cr'] = contentRef;
            // remember the slot name, or empty string for default slot
            elm['s-sn'] = newVNode.$name$ || '';
            // check if we've got an old vnode for this slot
            oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
            if (oldVNode && oldVNode.$tag$ === newVNode.$tag$ && oldParentVNode.$elm$) {
                // we've got an old slot vnode and the wrapper is being replaced
                // so let's move the old slot content back to it's original location
                putBackInOriginalLocation(oldParentVNode.$elm$, false);
            }
        }
    }
    return elm;
};
const putBackInOriginalLocation = (parentElm, recursive) => {
    plt.$flags$ |= 1 /* isTmpDisconnected */;
    const oldSlotChildNodes = parentElm.childNodes;
    for (let i = oldSlotChildNodes.length - 1; i >= 0; i--) {
        const childNode = oldSlotChildNodes[i];
        if (childNode['s-hn'] !== hostTagName && childNode['s-ol']) {
            // // this child node in the old element is from another component
            // // remove this node from the old slot's parent
            // childNode.remove();
            // and relocate it back to it's original location
            parentReferenceNode(childNode).insertBefore(childNode, referenceNode(childNode));
            // remove the old original location comment entirely
            // later on the patch function will know what to do
            // and move this to the correct spot in need be
            childNode['s-ol'].remove();
            childNode['s-ol'] = undefined;
            checkSlotRelocate = true;
        }
        if (recursive) {
            putBackInOriginalLocation(childNode, recursive);
        }
    }
    plt.$flags$ &= ~1 /* isTmpDisconnected */;
};
const addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
    let containerElm = ((parentElm['s-cr'] && parentElm['s-cr'].parentNode) || parentElm);
    let childNode;
    if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
        containerElm = containerElm.shadowRoot;
    }
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx, parentElm);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode, referenceNode(before) );
            }
        }
    }
};
const removeVnodes = (vnodes, startIdx, endIdx, vnode, elm) => {
    for (; startIdx <= endIdx; ++startIdx) {
        if ((vnode = vnodes[startIdx])) {
            elm = vnode.$elm$;
            callNodeRefs(vnode);
            {
                // we're removing this element
                // so it's possible we need to show slot fallback content now
                checkSlotFallbackVisibility = true;
                if (elm['s-ol']) {
                    // remove the original location comment
                    elm['s-ol'].remove();
                }
                else {
                    // it's possible that child nodes of the node
                    // that's being removed are slot nodes
                    putBackInOriginalLocation(elm, true);
                }
            }
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
const updateChildren = (parentElm, oldCh, newVNode, newCh) => {
    let oldStartIdx = 0;
    let newStartIdx = 0;
    let idxInOld = 0;
    let i = 0;
    let oldEndIdx = oldCh.length - 1;
    let oldStartVnode = oldCh[0];
    let oldEndVnode = oldCh[oldEndIdx];
    let newEndIdx = newCh.length - 1;
    let newStartVnode = newCh[0];
    let newEndVnode = newCh[newEndIdx];
    let node;
    let elmToMove;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // Vnode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode)) {
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode)) {
            // Vnode moved right
            if ((oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
            }
            patch(oldStartVnode, newEndVnode);
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            // Vnode moved left
            if ((oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
            }
            patch(oldEndVnode, newStartVnode);
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            // createKeyToOldIdx
            idxInOld = -1;
            {
                for (i = oldStartIdx; i <= oldEndIdx; ++i) {
                    if (oldCh[i] && oldCh[i].$key$ !== null && oldCh[i].$key$ === newStartVnode.$key$) {
                        idxInOld = i;
                        break;
                    }
                }
            }
            if (idxInOld >= 0) {
                elmToMove = oldCh[idxInOld];
                if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                    node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld, parentElm);
                }
                else {
                    patch(elmToMove, newStartVnode);
                    oldCh[idxInOld] = undefined;
                    node = elmToMove.$elm$;
                }
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                // new element
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx, parentElm);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                {
                    parentReferenceNode(oldStartVnode.$elm$).insertBefore(node, referenceNode(oldStartVnode.$elm$));
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if (newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
const isSameVnode = (vnode1, vnode2) => {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (vnode1.$tag$ === vnode2.$tag$) {
        if (vnode1.$tag$ === 'slot') {
            return vnode1.$name$ === vnode2.$name$;
        }
        {
            return vnode1.$key$ === vnode2.$key$;
        }
    }
    return false;
};
const referenceNode = (node) => {
    // this node was relocated to a new location in the dom
    // because of some other component's slot
    // but we still have an html comment in place of where
    // it's original location was according to it's original vdom
    return (node && node['s-ol']) || node;
};
const parentReferenceNode = (node) => (node['s-ol'] ? node['s-ol'] : node).parentNode;
const patch = (oldVNode, newVNode) => {
    const elm = (newVNode.$elm$ = oldVNode.$elm$);
    const oldChildren = oldVNode.$children$;
    const newChildren = newVNode.$children$;
    const tag = newVNode.$tag$;
    const text = newVNode.$text$;
    let defaultHolder;
    if (text === null) {
        // element node
        {
            if (tag === 'slot')
                ;
            else {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if (oldChildren !== null && newChildren !== null) {
            // looks like there's child vnodes for both the old and new vnodes
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (newChildren !== null) {
            // no old child vnodes, but there are new child vnodes to add
            if (oldVNode.$text$ !== null) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if (oldChildren !== null) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
    }
    else if ((defaultHolder = elm['s-cr'])) {
        // this element has slotted content
        defaultHolder.parentNode.textContent = text;
    }
    else if (oldVNode.$text$ !== text) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.data = text;
    }
};
const updateFallbackSlotVisibility = (elm) => {
    // tslint:disable-next-line: prefer-const
    let childNodes = elm.childNodes;
    let childNode;
    let i;
    let ilen;
    let j;
    let slotNameAttr;
    let nodeType;
    for (i = 0, ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode.nodeType === 1 /* ElementNode */) {
            if (childNode['s-sr']) {
                // this is a slot fallback node
                // get the slot name for this slot reference node
                slotNameAttr = childNode['s-sn'];
                // by default always show a fallback slot node
                // then hide it if there are other slots in the light dom
                childNode.hidden = false;
                for (j = 0; j < ilen; j++) {
                    nodeType = childNodes[j].nodeType;
                    if (childNodes[j]['s-hn'] !== childNode['s-hn'] || slotNameAttr !== '') {
                        // this sibling node is from a different component OR is a named fallback slot node
                        if (nodeType === 1 /* ElementNode */ && slotNameAttr === childNodes[j].getAttribute('slot')) {
                            childNode.hidden = true;
                            break;
                        }
                    }
                    else {
                        // this is a default fallback slot node
                        // any element or text node (with content)
                        // should hide the default fallback slot node
                        if (nodeType === 1 /* ElementNode */ ||
                            (nodeType === 3 /* TextNode */ && childNodes[j].textContent.trim() !== '')) {
                            childNode.hidden = true;
                            break;
                        }
                    }
                }
            }
            // keep drilling down
            updateFallbackSlotVisibility(childNode);
        }
    }
};
const relocateNodes = [];
const relocateSlotContent = (elm) => {
    // tslint:disable-next-line: prefer-const
    let childNode;
    let node;
    let hostContentNodes;
    let slotNameAttr;
    let relocateNodeData;
    let j;
    let i = 0;
    let childNodes = elm.childNodes;
    let ilen = childNodes.length;
    for (; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode['s-sr'] && (node = childNode['s-cr']) && node.parentNode) {
            // first got the content reference comment node
            // then we got it's parent, which is where all the host content is in now
            hostContentNodes = node.parentNode.childNodes;
            slotNameAttr = childNode['s-sn'];
            for (j = hostContentNodes.length - 1; j >= 0; j--) {
                node = hostContentNodes[j];
                if (!node['s-cn'] && !node['s-nr'] && node['s-hn'] !== childNode['s-hn']) {
                    // let's do some relocating to its new home
                    // but never relocate a content reference node
                    // that is suppose to always represent the original content location
                    if (isNodeLocatedInSlot(node, slotNameAttr)) {
                        // it's possible we've already decided to relocate this node
                        relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                        // made some changes to slots
                        // let's make sure we also double check
                        // fallbacks are correctly hidden or shown
                        checkSlotFallbackVisibility = true;
                        node['s-sn'] = node['s-sn'] || slotNameAttr;
                        if (relocateNodeData) {
                            // previously we never found a slot home for this node
                            // but turns out we did, so let's remember it now
                            relocateNodeData.$slotRefNode$ = childNode;
                        }
                        else {
                            // add to our list of nodes to relocate
                            relocateNodes.push({
                                $slotRefNode$: childNode,
                                $nodeToRelocate$: node,
                            });
                        }
                        if (node['s-sr']) {
                            relocateNodes.map((relocateNode) => {
                                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node['s-sn'])) {
                                    relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                                    if (relocateNodeData && !relocateNode.$slotRefNode$) {
                                        relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                                    }
                                }
                            });
                        }
                    }
                    else if (!relocateNodes.some((r) => r.$nodeToRelocate$ === node)) {
                        // so far this element does not have a slot home, not setting slotRefNode on purpose
                        // if we never find a home for this element then we'll need to hide it
                        relocateNodes.push({
                            $nodeToRelocate$: node,
                        });
                    }
                }
            }
        }
        if (childNode.nodeType === 1 /* ElementNode */) {
            relocateSlotContent(childNode);
        }
    }
};
const isNodeLocatedInSlot = (nodeToRelocate, slotNameAttr) => {
    if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
        if (nodeToRelocate.getAttribute('slot') === null && slotNameAttr === '') {
            return true;
        }
        if (nodeToRelocate.getAttribute('slot') === slotNameAttr) {
            return true;
        }
        return false;
    }
    if (nodeToRelocate['s-sn'] === slotNameAttr) {
        return true;
    }
    return slotNameAttr === '';
};
const callNodeRefs = (vNode) => {
    {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
        vNode.$children$ && vNode.$children$.map(callNodeRefs);
    }
};
const renderVdom = (hostRef, renderFnResults) => {
    const hostElm = hostRef.$hostElement$;
    const cmpMeta = hostRef.$cmpMeta$;
    const oldVNode = hostRef.$vnode$ || newVNode(null, null);
    const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
    hostTagName = hostElm.tagName;
    if (cmpMeta.$attrsToReflect$) {
        rootVnode.$attrs$ = rootVnode.$attrs$ || {};
        cmpMeta.$attrsToReflect$.map(([propName, attribute]) => (rootVnode.$attrs$[attribute] = hostElm[propName]));
    }
    rootVnode.$tag$ = null;
    rootVnode.$flags$ |= 4 /* isHost */;
    hostRef.$vnode$ = rootVnode;
    rootVnode.$elm$ = oldVNode.$elm$ = (hostElm.shadowRoot || hostElm );
    {
        scopeId = hostElm['s-sc'];
    }
    {
        contentRef = hostElm['s-cr'];
        useNativeShadowDom = (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) !== 0;
        // always reset
        checkSlotFallbackVisibility = false;
    }
    // synchronous patch
    patch(oldVNode, rootVnode);
    {
        // while we're moving nodes around existing nodes, temporarily disable
        // the disconnectCallback from working
        plt.$flags$ |= 1 /* isTmpDisconnected */;
        if (checkSlotRelocate) {
            relocateSlotContent(rootVnode.$elm$);
            let relocateData;
            let nodeToRelocate;
            let orgLocationNode;
            let parentNodeRef;
            let insertBeforeNode;
            let refNode;
            let i = 0;
            for (; i < relocateNodes.length; i++) {
                relocateData = relocateNodes[i];
                nodeToRelocate = relocateData.$nodeToRelocate$;
                if (!nodeToRelocate['s-ol']) {
                    // add a reference node marking this node's original location
                    // keep a reference to this node for later lookups
                    orgLocationNode =
                        doc.createTextNode('');
                    orgLocationNode['s-nr'] = nodeToRelocate;
                    nodeToRelocate.parentNode.insertBefore((nodeToRelocate['s-ol'] = orgLocationNode), nodeToRelocate);
                }
            }
            for (i = 0; i < relocateNodes.length; i++) {
                relocateData = relocateNodes[i];
                nodeToRelocate = relocateData.$nodeToRelocate$;
                if (relocateData.$slotRefNode$) {
                    // by default we're just going to insert it directly
                    // after the slot reference node
                    parentNodeRef = relocateData.$slotRefNode$.parentNode;
                    insertBeforeNode = relocateData.$slotRefNode$.nextSibling;
                    orgLocationNode = nodeToRelocate['s-ol'];
                    while ((orgLocationNode = orgLocationNode.previousSibling)) {
                        refNode = orgLocationNode['s-nr'];
                        if (refNode && refNode['s-sn'] === nodeToRelocate['s-sn'] && parentNodeRef === refNode.parentNode) {
                            refNode = refNode.nextSibling;
                            if (!refNode || !refNode['s-nr']) {
                                insertBeforeNode = refNode;
                                break;
                            }
                        }
                    }
                    if ((!insertBeforeNode && parentNodeRef !== nodeToRelocate.parentNode) ||
                        nodeToRelocate.nextSibling !== insertBeforeNode) {
                        // we've checked that it's worth while to relocate
                        // since that the node to relocate
                        // has a different next sibling or parent relocated
                        if (nodeToRelocate !== insertBeforeNode) {
                            if (!nodeToRelocate['s-hn'] && nodeToRelocate['s-ol']) {
                                // probably a component in the index.html that doesn't have it's hostname set
                                nodeToRelocate['s-hn'] = nodeToRelocate['s-ol'].parentNode.nodeName;
                            }
                            // add it back to the dom but in its new home
                            parentNodeRef.insertBefore(nodeToRelocate, insertBeforeNode);
                        }
                    }
                }
                else {
                    // this node doesn't have a slot home to go to, so let's hide it
                    if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
                        nodeToRelocate.hidden = true;
                    }
                }
            }
        }
        if (checkSlotFallbackVisibility) {
            updateFallbackSlotVisibility(rootVnode.$elm$);
        }
        // done moving nodes around
        // allow the disconnect callback to work again
        plt.$flags$ &= ~1 /* isTmpDisconnected */;
        // always reset
        relocateNodes.length = 0;
    }
};
const getElement = (ref) => (getHostRef(ref).$hostElement$ );
const createEvent = (ref, name, flags) => {
    const elm = getElement(ref);
    return {
        emit: (detail) => {
            return emitEvent(elm, name, {
                bubbles: !!(flags & 4 /* Bubbles */),
                composed: !!(flags & 2 /* Composed */),
                cancelable: !!(flags & 1 /* Cancellable */),
                detail,
            });
        },
    };
};
/**
 * Helper function to create & dispatch a custom Event on a provided target
 * @param elm the target of the Event
 * @param name the name to give the custom Event
 * @param opts options for configuring a custom Event
 * @returns the custom Event
 */
const emitEvent = (elm, name, opts) => {
    const ev = plt.ce(name, opts);
    elm.dispatchEvent(ev);
    return ev;
};
const attachToAncestor = (hostRef, ancestorComponent) => {
    if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent['s-p']) {
        ancestorComponent['s-p'].push(new Promise((r) => (hostRef.$onRenderResolve$ = r)));
    }
};
const scheduleUpdate = (hostRef, isInitialLoad) => {
    {
        hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
    }
    if (hostRef.$flags$ & 4 /* isWaitingForChildren */) {
        hostRef.$flags$ |= 512 /* needsRerender */;
        return;
    }
    attachToAncestor(hostRef, hostRef.$ancestorComponent$);
    // there is no ancestor component or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
    return writeTask(dispatch) ;
};
const dispatchHooks = (hostRef, isInitialLoad) => {
    const endSchedule = createTime('scheduleUpdate', hostRef.$cmpMeta$.$tagName$);
    const instance = hostRef.$lazyInstance$ ;
    let promise;
    if (isInitialLoad) {
        {
            hostRef.$flags$ |= 256 /* isListenReady */;
            if (hostRef.$queuedListeners$) {
                hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event));
                hostRef.$queuedListeners$ = null;
            }
        }
        {
            promise = safeCall(instance, 'componentWillLoad');
        }
    }
    {
        promise = then(promise, () => safeCall(instance, 'componentWillRender'));
    }
    endSchedule();
    return then(promise, () => updateComponent(hostRef, instance, isInitialLoad));
};
const updateComponent = async (hostRef, instance, isInitialLoad) => {
    // updateComponent
    const elm = hostRef.$hostElement$;
    const endUpdate = createTime('update', hostRef.$cmpMeta$.$tagName$);
    const rc = elm['s-rc'];
    if (isInitialLoad) {
        // DOM WRITE!
        attachStyles(hostRef);
    }
    const endRender = createTime('render', hostRef.$cmpMeta$.$tagName$);
    {
        callRender(hostRef, instance);
    }
    if (rc) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        rc.map((cb) => cb());
        elm['s-rc'] = undefined;
    }
    endRender();
    endUpdate();
    {
        const childrenPromises = elm['s-p'];
        const postUpdate = () => postUpdateComponent(hostRef);
        if (childrenPromises.length === 0) {
            postUpdate();
        }
        else {
            Promise.all(childrenPromises).then(postUpdate);
            hostRef.$flags$ |= 4 /* isWaitingForChildren */;
            childrenPromises.length = 0;
        }
    }
};
const callRender = (hostRef, instance, elm) => {
    try {
        renderingRef = instance;
        instance = instance.render && instance.render();
        {
            hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
        }
        {
            hostRef.$flags$ |= 2 /* hasRendered */;
        }
        {
            {
                // looks like we've got child nodes to render into this host element
                // or we need to update the css class/attrs on the host element
                // DOM WRITE!
                {
                    renderVdom(hostRef, instance);
                }
            }
        }
    }
    catch (e) {
        consoleError(e, hostRef.$hostElement$);
    }
    renderingRef = null;
    return null;
};
const getRenderingRef = () => renderingRef;
const postUpdateComponent = (hostRef) => {
    const tagName = hostRef.$cmpMeta$.$tagName$;
    const elm = hostRef.$hostElement$;
    const endPostUpdate = createTime('postUpdate', tagName);
    const instance = hostRef.$lazyInstance$ ;
    const ancestorComponent = hostRef.$ancestorComponent$;
    {
        safeCall(instance, 'componentDidRender');
    }
    if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
        hostRef.$flags$ |= 64 /* hasLoadedComponent */;
        {
            // DOM WRITE!
            addHydratedFlag(elm);
        }
        {
            safeCall(instance, 'componentDidLoad');
        }
        endPostUpdate();
        {
            hostRef.$onReadyResolve$(elm);
            if (!ancestorComponent) {
                appDidLoad();
            }
        }
    }
    else {
        endPostUpdate();
    }
    {
        hostRef.$onInstanceResolve$(elm);
    }
    // load events fire from bottom to top
    // the deepest elements load first then bubbles up
    {
        if (hostRef.$onRenderResolve$) {
            hostRef.$onRenderResolve$();
            hostRef.$onRenderResolve$ = undefined;
        }
        if (hostRef.$flags$ & 512 /* needsRerender */) {
            nextTick(() => scheduleUpdate(hostRef, false));
        }
        hostRef.$flags$ &= ~(4 /* isWaitingForChildren */ | 512 /* needsRerender */);
    }
    // ( •_•)
    // ( •_•)>⌐■-■
    // (⌐■_■)
};
const forceUpdate = (ref) => {
    {
        const hostRef = getHostRef(ref);
        const isConnected = hostRef.$hostElement$.isConnected;
        if (isConnected &&
            (hostRef.$flags$ & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
            scheduleUpdate(hostRef, false);
        }
        // Returns "true" when the forced update was successfully scheduled
        return isConnected;
    }
};
const appDidLoad = (who) => {
    // on appload
    // we have finish the first big initial render
    {
        addHydratedFlag(doc.documentElement);
    }
    nextTick(() => emitEvent(win, 'appload', { detail: { namespace: NAMESPACE } }));
};
const safeCall = (instance, method, arg) => {
    if (instance && instance[method]) {
        try {
            return instance[method](arg);
        }
        catch (e) {
            consoleError(e);
        }
    }
    return undefined;
};
const then = (promise, thenFn) => {
    return promise && promise.then ? promise.then(thenFn) : thenFn();
};
const addHydratedFlag = (elm) => elm.classList.add('hydrated')
    ;
const parsePropertyValue = (propValue, propType) => {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if (propType & 4 /* Boolean */) {
            // per the HTML spec, any string value means it is a boolean true value
            // but we'll cheat here and say that the string "false" is the boolean false
            return propValue === 'false' ? false : propValue === '' || !!propValue;
        }
        if (propType & 2 /* Number */) {
            // force it to be a number
            return parseFloat(propValue);
        }
        if (propType & 1 /* String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
const getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
const setValue = (ref, propName, newVal, cmpMeta) => {
    // check our new property value against our internal value
    const hostRef = getHostRef(ref);
    const elm = hostRef.$hostElement$ ;
    const oldVal = hostRef.$instanceValues$.get(propName);
    const flags = hostRef.$flags$;
    const instance = hostRef.$lazyInstance$ ;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    if ((!(flags & 8 /* isConstructingInstance */) || oldVal === undefined) && newVal !== oldVal) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (instance) {
            // get an array of method names of watch functions to call
            if (cmpMeta.$watchers$ && flags & 128 /* isWatchReady */) {
                const watchMethods = cmpMeta.$watchers$[propName];
                if (watchMethods) {
                    // this instance is watching for when this property changed
                    watchMethods.map((watchMethodName) => {
                        try {
                            // fire off each of the watch methods that are watching this property
                            instance[watchMethodName](newVal, oldVal, propName);
                        }
                        catch (e) {
                            consoleError(e, elm);
                        }
                    });
                }
            }
            if ((flags & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                if (instance.componentShouldUpdate) {
                    if (instance.componentShouldUpdate(newVal, oldVal, propName) === false) {
                        return;
                    }
                }
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(hostRef, false);
            }
        }
    }
};
const proxyComponent = (Cstr, cmpMeta, flags) => {
    if (cmpMeta.$members$) {
        if (Cstr.watchers) {
            cmpMeta.$watchers$ = Cstr.watchers;
        }
        // It's better to have a const than two Object.entries()
        const members = Object.entries(cmpMeta.$members$);
        const prototype = Cstr.prototype;
        members.map(([memberName, [memberFlags]]) => {
            if ((memberFlags & 31 /* Prop */ ||
                    ((flags & 2 /* proxyState */) && memberFlags & 32 /* State */))) {
                // proxyComponent - prop
                Object.defineProperty(prototype, memberName, {
                    get() {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set(newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true,
                });
            }
            else if (flags & 1 /* isElementConstructor */ &&
                memberFlags & 64 /* Method */) {
                // proxyComponent - method
                Object.defineProperty(prototype, memberName, {
                    value(...args) {
                        const ref = getHostRef(this);
                        return ref.$onInstancePromise$.then(() => ref.$lazyInstance$[memberName](...args));
                    },
                });
            }
        });
        if ((flags & 1 /* isElementConstructor */)) {
            const attrNameToPropName = new Map();
            prototype.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                plt.jmp(() => {
                    const propName = attrNameToPropName.get(attrName);
                    //  In a web component lifecycle the attributeChangedCallback runs prior to connectedCallback
                    //  in the case where an attribute was set inline.
                    //  ```html
                    //    <my-component some-attribute="some-value"></my-component>
                    //  ```
                    //
                    //  There is an edge case where a developer sets the attribute inline on a custom element and then
                    //  programmatically changes it before it has been upgraded as shown below:
                    //
                    //  ```html
                    //    <!-- this component has _not_ been upgraded yet -->
                    //    <my-component id="test" some-attribute="some-value"></my-component>
                    //    <script>
                    //      // grab non-upgraded component
                    //      el = document.querySelector("#test");
                    //      el.someAttribute = "another-value";
                    //      // upgrade component
                    //      customElements.define('my-component', MyComponent);
                    //    </script>
                    //  ```
                    //  In this case if we do not unshadow here and use the value of the shadowing property, attributeChangedCallback
                    //  will be called with `newValue = "some-value"` and will set the shadowed property (this.someAttribute = "another-value")
                    //  to the value that was set inline i.e. "some-value" from above example. When
                    //  the connectedCallback attempts to unshadow it will use "some-value" as the initial value rather than "another-value"
                    //
                    //  The case where the attribute was NOT set inline but was not set programmatically shall be handled/unshadowed
                    //  by connectedCallback as this attributeChangedCallback will not fire.
                    //
                    //  https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
                    //
                    //  TODO(STENCIL-16) we should think about whether or not we actually want to be reflecting the attributes to
                    //  properties here given that this goes against best practices outlined here
                    //  https://developers.google.com/web/fundamentals/web-components/best-practices#avoid-reentrancy
                    if (this.hasOwnProperty(propName)) {
                        newValue = this[propName];
                        delete this[propName];
                    }
                    else if (prototype.hasOwnProperty(propName) &&
                        typeof this[propName] === 'number' &&
                        this[propName] == newValue) {
                        // if the propName exists on the prototype of `Cstr`, this update may be a result of Stencil using native
                        // APIs to reflect props as attributes. Calls to `setAttribute(someElement, propName)` will result in
                        // `propName` to be converted to a `DOMString`, which may not be what we want for other primitive props.
                        return;
                    }
                    this[propName] = newValue === null && typeof this[propName] === 'boolean' ? false : newValue;
                });
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(([_, m]) => m[0] & 15 /* HasAttribute */) // filter to only keep props that should match attributes
                .map(([propName, m]) => {
                const attrName = m[1] || propName;
                attrNameToPropName.set(attrName, propName);
                if (m[0] & 512 /* ReflectAttr */) {
                    cmpMeta.$attrsToReflect$.push([propName, attrName]);
                }
                return attrName;
            });
        }
    }
    return Cstr;
};
const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId, Cstr) => {
    // initializeComponent
    if ((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0) {
        {
            // we haven't initialized this element yet
            hostRef.$flags$ |= 32 /* hasInitializedComponent */;
            // lazy loaded components
            // request the component's implementation to be
            // wired up with the host element
            Cstr = loadModule(cmpMeta);
            if (Cstr.then) {
                // Await creates a micro-task avoid if possible
                const endLoad = uniqueTime();
                Cstr = await Cstr;
                endLoad();
            }
            if (!Cstr.isProxied) {
                // we've never proxied this Constructor before
                // let's add the getters/setters to its prototype before
                // the first time we create an instance of the implementation
                {
                    cmpMeta.$watchers$ = Cstr.watchers;
                }
                proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
                Cstr.isProxied = true;
            }
            const endNewInstance = createTime('createInstance', cmpMeta.$tagName$);
            // ok, time to construct the instance
            // but let's keep track of when we start and stop
            // so that the getters/setters don't incorrectly step on data
            {
                hostRef.$flags$ |= 8 /* isConstructingInstance */;
            }
            // construct the lazy-loaded component implementation
            // passing the hostRef is very important during
            // construction in order to directly wire together the
            // host element and the lazy-loaded instance
            try {
                new Cstr(hostRef);
            }
            catch (e) {
                consoleError(e);
            }
            {
                hostRef.$flags$ &= ~8 /* isConstructingInstance */;
            }
            {
                hostRef.$flags$ |= 128 /* isWatchReady */;
            }
            endNewInstance();
            fireConnectedCallback(hostRef.$lazyInstance$);
        }
        if (Cstr.style) {
            // this component has styles but we haven't registered them yet
            let style = Cstr.style;
            const scopeId = getScopeId(cmpMeta);
            if (!styles.has(scopeId)) {
                const endRegisterStyles = createTime('registerStyles', cmpMeta.$tagName$);
                registerStyle(scopeId, style, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
                endRegisterStyles();
            }
        }
    }
    // we've successfully created a lazy instance
    const ancestorComponent = hostRef.$ancestorComponent$;
    const schedule = () => scheduleUpdate(hostRef, true);
    if (ancestorComponent && ancestorComponent['s-rc']) {
        // this is the initial load and this component it has an ancestor component
        // but the ancestor component has NOT fired its will update lifecycle yet
        // so let's just cool our jets and wait for the ancestor to continue first
        // this will get fired off when the ancestor component
        // finally gets around to rendering its lazy self
        // fire off the initial update
        ancestorComponent['s-rc'].push(schedule);
    }
    else {
        schedule();
    }
};
const fireConnectedCallback = (instance) => {
    {
        safeCall(instance, 'connectedCallback');
    }
};
const connectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        const cmpMeta = hostRef.$cmpMeta$;
        const endConnected = createTime('connectedCallback', cmpMeta.$tagName$);
        if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* hasConnected */;
            {
                // initUpdate
                // if the slot polyfill is required we'll need to put some nodes
                // in here to act as original content anchors as we move nodes around
                // host element has been connected to the DOM
                if ((cmpMeta.$flags$ & (4 /* hasSlotRelocation */ | 8 /* needsShadowDomShim */))) {
                    setContentReference(elm);
                }
            }
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                let ancestorComponent = elm;
                while ((ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host)) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if (ancestorComponent['s-p']) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        attachToAncestor(hostRef, (hostRef.$ancestorComponent$ = ancestorComponent));
                        break;
                    }
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
                    if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
                        const value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                initializeComponent(elm, hostRef, cmpMeta);
            }
        }
        else {
            // not the first time this has connected
            // reattach any event listeners to the host
            // since they would have been removed when disconnected
            addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
            // fire off connectedCallback() on component instance
            fireConnectedCallback(hostRef.$lazyInstance$);
        }
        endConnected();
    }
};
const setContentReference = (elm) => {
    // only required when we're NOT using native shadow dom (slot)
    // or this browser doesn't support native shadow dom
    // and this host element was NOT created with SSR
    // let's pick out the inner content for slot projection
    // create a node to represent where the original
    // content was first placed, which is useful later on
    const contentRefElm = (elm['s-cr'] = doc.createComment(''));
    contentRefElm['s-cn'] = true;
    elm.insertBefore(contentRefElm, elm.firstChild);
};
const disconnectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        const instance = hostRef.$lazyInstance$ ;
        {
            if (hostRef.$rmListeners$) {
                hostRef.$rmListeners$.map((rmListener) => rmListener());
                hostRef.$rmListeners$ = undefined;
            }
        }
        {
            safeCall(instance, 'disconnectedCallback');
        }
    }
};
const bootstrapLazy = (lazyBundles, options = {}) => {
    const endBootstrap = createTime();
    const cmpTags = [];
    const exclude = options.exclude || [];
    const customElements = win.customElements;
    const head = doc.head;
    const metaCharset = /*@__PURE__*/ head.querySelector('meta[charset]');
    const visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    const deferredConnectedCallbacks = [];
    let appLoadFallback;
    let isBootstrapping = true;
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;
    lazyBundles.map((lazyBundle) => {
        lazyBundle[1].map((compactMeta) => {
            const cmpMeta = {
                $flags$: compactMeta[0],
                $tagName$: compactMeta[1],
                $members$: compactMeta[2],
                $listeners$: compactMeta[3],
            };
            {
                cmpMeta.$members$ = compactMeta[2];
            }
            {
                cmpMeta.$listeners$ = compactMeta[3];
            }
            {
                cmpMeta.$attrsToReflect$ = [];
            }
            {
                cmpMeta.$watchers$ = {};
            }
            const tagName = cmpMeta.$tagName$;
            const HostElement = class extends HTMLElement {
                // StencilLazyHost
                constructor(self) {
                    // @ts-ignore
                    super(self);
                    self = this;
                    registerHost(self, cmpMeta);
                    if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                        // this component is using shadow dom
                        // and this browser supports shadow dom
                        // add the read-only property "shadowRoot" to the host element
                        // adding the shadow root build conditionals to minimize runtime
                        {
                            {
                                self.attachShadow({ mode: 'open' });
                            }
                        }
                    }
                }
                connectedCallback() {
                    if (appLoadFallback) {
                        clearTimeout(appLoadFallback);
                        appLoadFallback = null;
                    }
                    if (isBootstrapping) {
                        // connectedCallback will be processed once all components have been registered
                        deferredConnectedCallbacks.push(this);
                    }
                    else {
                        plt.jmp(() => connectedCallback(this));
                    }
                }
                disconnectedCallback() {
                    plt.jmp(() => disconnectedCallback(this));
                }
                componentOnReady() {
                    return getHostRef(this).$onReadyPromise$;
                }
            };
            cmpMeta.$lazyBundleId$ = lazyBundle[0];
            if (!exclude.includes(tagName) && !customElements.get(tagName)) {
                cmpTags.push(tagName);
                customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */));
            }
        });
    });
    {
        visibilityStyle.innerHTML = cmpTags + HYDRATED_CSS;
        visibilityStyle.setAttribute('data-styles', '');
        head.insertBefore(visibilityStyle, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
    // Process deferred connectedCallbacks now all components have been registered
    isBootstrapping = false;
    if (deferredConnectedCallbacks.length) {
        deferredConnectedCallbacks.map((host) => host.connectedCallback());
    }
    else {
        {
            plt.jmp(() => (appLoadFallback = setTimeout(appDidLoad, 30)));
        }
    }
    // Fallback appLoad event
    endBootstrap();
};
const getAssetPath = (path) => {
    const assetUrl = new URL(path, plt.$resourcesUrl$);
    return assetUrl.origin !== win.location.origin ? assetUrl.href : assetUrl.pathname;
};
const hostRefs = new WeakMap();
const getHostRef = (ref) => hostRefs.get(ref);
const registerInstance = (lazyInstance, hostRef) => hostRefs.set((hostRef.$lazyInstance$ = lazyInstance), hostRef);
const registerHost = (elm, cmpMeta) => {
    const hostRef = {
        $flags$: 0,
        $hostElement$: elm,
        $cmpMeta$: cmpMeta,
        $instanceValues$: new Map(),
    };
    {
        hostRef.$onInstancePromise$ = new Promise((r) => (hostRef.$onInstanceResolve$ = r));
    }
    {
        hostRef.$onReadyPromise$ = new Promise((r) => (hostRef.$onReadyResolve$ = r));
        elm['s-p'] = [];
        elm['s-rc'] = [];
    }
    addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
    return hostRefs.set(elm, hostRef);
};
const isMemberInElement = (elm, memberName) => memberName in elm;
const consoleError = (e, el) => (0, console.error)(e, el);
const cmpModules = /*@__PURE__*/ new Map();
const loadModule = (cmpMeta, hostRef, hmrVersionId) => {
    // loadModuleImport
    const exportName = cmpMeta.$tagName$.replace(/-/g, '_');
    const bundleId = cmpMeta.$lazyBundleId$;
    const module = cmpModules.get(bundleId) ;
    if (module) {
        return module[exportName];
    }
    return import(
    /* webpackInclude: /\.entry\.js$/ */
    /* webpackExclude: /\.system\.entry\.js$/ */
    /* webpackMode: "lazy" */
    `./${bundleId}.entry.js${''}`).then((importedModule) => {
        {
            cmpModules.set(bundleId, importedModule);
        }
        return importedModule[exportName];
    }, consoleError);
};
const styles = new Map();
const queueDomReads = [];
const queueDomWrites = [];
const queueTask = (queue, write) => (cb) => {
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        if (write && plt.$flags$ & 4 /* queueSync */) {
            nextTick(flush);
        }
        else {
            plt.raf(flush);
        }
    }
};
const consume = (queue) => {
    for (let i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
const flush = () => {
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    // DOM WRITES!!!
    {
        consume(queueDomWrites);
        if ((queuePending = queueDomReads.length > 0)) {
            // still more to do yet, but we've run out of time
            // let's let this thing cool off and try again in the next tick
            plt.raf(flush);
        }
    }
};
const nextTick = /*@__PURE__*/ (cb) => promiseResolve().then(cb);
const writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);

function buildCustomEvent(name, detail) {
  return new CustomEvent(name, {
    detail,
    // Event will bubble up the DOM until it is caught
    bubbles: true,
    // Allows to verify if event is caught (cancelled). If it's not caught, it won't be initialized.
    cancelable: true,
    // Allows to compose Atomic components inside one another, event will go across DOM/Shadow DOM
    composed: true,
  });
}

const Hidden = () => (h(Host, { class: "atomic-hidden" }));

const initializeEventName = 'atomic/initializeComponent';
const initializableElements = ['atomic-search-interface', 'atomic-external'];
/**
 * Retrieves `Bindings` on a configured parent search interface.
 * @param event Element on which to dispatch the event, which must be the child of a configured "atomic-search-interface" or "atomic-external" element.
 * @returns A promise that resolves on initialization of the parent "atomic-search-interface" or "atomic-external" element, and rejects when it's not the case.
 */
const initializeBindings = (element) => new Promise((resolve, reject) => {
  const event = buildCustomEvent(initializeEventName, (bindings) => resolve(bindings));
  element.dispatchEvent(event);
  if (!element.closest(initializableElements.join(', '))) {
    reject(new MissingInterfaceParentError(element.nodeName.toLowerCase()));
  }
});
class MissingInterfaceParentError extends Error {
  constructor(elementName) {
    super(`The "${elementName}" element must be the child of the following elements: ${initializableElements.join(', ')}`);
  }
}
function applyFocusVisiblePolyfill(element) {
  if (window.applyFocusVisiblePolyfill && element.shadowRoot) {
    window.applyFocusVisiblePolyfill(element.shadowRoot);
  }
}
/**
 * A [StencilJS property decorator](https://stenciljs.com/) to be used on a property named `bindings`.
 * This will automatically fetch the `Bindings` from the parent `atomic-search-interface` or `atomic-extarnal` components.
 *
 * Once a component is bound, the `initialize` method is called.
 * In the event of an initialization error, the `error` property will be set and an `atomic-component-error` will be rendered.
 *
 * In order for a component using this decorator to render properly, it should have an internal state bound to one of the properties from `bindings`.
 * This is possible by using the `BindStateToController` decorator.
 *
 * @example
 * @InitializeBindings() public bindings!: Bindings;
 *
 * For more information and examples, view the "Utilities" section of the readme.
 */
function InitializeBindings() {
  return (component, bindingsProperty) => {
    const { componentWillLoad, render, componentDidRender, componentDidLoad, disconnectedCallback, } = component;
    let unsubscribeLanguage = () => { };
    if (bindingsProperty !== 'bindings') {
      return console.error(`The InitializeBindings decorator should be used on a property called "bindings", and not "${bindingsProperty}"`, component);
    }
    component.componentWillLoad = function () {
      const element = getElement(this);
      const event = buildCustomEvent(initializeEventName, (bindings) => {
        this.bindings = bindings;
        const updateLanguage = () => forceUpdate(this);
        this.bindings.i18n.on('languageChanged', updateLanguage);
        unsubscribeLanguage = () => this.bindings.i18n.off('languageChanged', updateLanguage);
        try {
          // When no controller is initialized, updating a property with a State() decorator, there will be no re-render.
          // In this case, we have to manually trigger it.
          this.initialize ? this.initialize() : forceUpdate(this);
        }
        catch (e) {
          this.error = e;
        }
      });
      const canceled = element.dispatchEvent(event);
      if (canceled) {
        this.error = new MissingInterfaceParentError(element.nodeName.toLowerCase());
        return;
      }
      return componentWillLoad && componentWillLoad.call(this);
    };
    let hasRendered = false;
    let hasLoaded = false;
    component.render = function () {
      if (this.error) {
        return (h("atomic-component-error", { element: getElement(this), error: this.error }));
      }
      if (!this.bindings) {
        return h(Hidden, null);
      }
      hasRendered = true;
      return render && render.call(this);
    };
    component.disconnectedCallback = function () {
      unsubscribeLanguage();
      disconnectedCallback && disconnectedCallback.call(this);
    };
    component.componentDidRender = function () {
      if (!hasRendered) {
        return;
      }
      componentDidRender && componentDidRender.call(this);
      if (!hasLoaded) {
        componentDidLoad && componentDidLoad.call(this);
        hasLoaded = true;
      }
    };
    component.componentDidLoad = function () {
      applyFocusVisiblePolyfill(getElement(this));
    };
  };
}
/**
 * A [StencilJS property decorator](https://stenciljs.com/) is used together with the [State decorator](https://stenciljs.com/docs/state#state-decorator).
 * This allows the Stencil component state property to automatically get updates from a [Coveo Headless controller](https://docs.coveo.com/en/headless/latest/usage/#use-headless-controllers).
 *
 * @example
 * @BindStateToController('pager') @State() private pagerState!: PagerState;
 *
 * For more information and examples, view the "Utilities" section of the readme.
 *
 * @param controllerProperty The controller property to subscribe to. The controller has to be created inside of the `initialize` method.
 * @param options The configurable `BindStateToController` options.
 */
function BindStateToController(controllerProperty, options) {
  return (component, stateProperty) => {
    const { disconnectedCallback, initialize } = component;
    let unsubscribeController = () => { };
    component.initialize = function () {
      initialize && initialize.call(this);
      if (!initialize) {
        return console.error(`ControllerState: The "initialize" method has to be defined and instanciate a controller for the property ${controllerProperty}`, component);
      }
      if (!this[controllerProperty]) {
        return;
      }
      if ((options === null || options === void 0 ? void 0 : options.onUpdateCallbackMethod) &&
        !this[options.onUpdateCallbackMethod]) {
        return console.error(`ControllerState: The onUpdateCallbackMethod property "${options.onUpdateCallbackMethod}" is not defined`, component);
      }
      unsubscribeController = this[controllerProperty].subscribe(() => {
        this[stateProperty] = this[controllerProperty].state;
        (options === null || options === void 0 ? void 0 : options.onUpdateCallbackMethod) &&
          this[options.onUpdateCallbackMethod]();
      });
    };
    component.disconnectedCallback = function () {
      !getElement(this).isConnected && unsubscribeController();
      disconnectedCallback && disconnectedCallback.call(this);
    };
  };
}
function DeferUntilRender() {
  return (component, methodName) => {
    const { componentDidRender, connectedCallback } = component;
    const originalMethod = component[methodName];
    let deferredExecutions = [];
    component.connectedCallback = function () {
      this[methodName] = function (...args) {
        deferredExecutions.push({ args });
      };
      connectedCallback && connectedCallback.call(this);
    };
    component.componentDidRender = function () {
      deferredExecutions.forEach(({ args }) => originalMethod.call(this, ...args));
      deferredExecutions = [];
      componentDidRender && componentDidRender.call(this);
    };
  };
}

class MissingResultParentError extends Error {
  constructor(elementName) {
    super(`The "${elementName}" element must be the child of an "atomic-result" element.`);
  }
}
/**
 * A [StencilJS property decorator](https://stenciljs.com/) to be used for result template components.
 * This allows the Stencil component to fetch the current result from its rendered parent, the `atomic-result` component.
 *
 *
 * @example
 * @ResultContext() private result!: Result;
 *
 * For more information and examples, view the "Utilities" section of the readme.
 */
function ResultContext() {
  return (component, resultVariable) => {
    const { connectedCallback, render } = component;
    component.connectedCallback = function () {
      const element = getElement(this);
      const event = buildCustomEvent(resultContextEventName, (result) => {
        this[resultVariable] = result;
      });
      const canceled = element.dispatchEvent(event);
      if (canceled) {
        this.error = new MissingResultParentError(element.nodeName.toLowerCase());
        return;
      }
      return connectedCallback && connectedCallback.call(this);
    };
    component.render = function () {
      if (this.error) {
        const element = getElement(this);
        element.remove();
        console.error('Result component is in error and has been removed from the DOM', this.error, this, element);
        return;
      }
      return render && render.call(this);
    };
  };
}
const resultContextEventName = 'atomic/resolveResult';
/**
 * Retrieves `Result` on a rendered `atomic-result`.
 *
 * This method is useful for building custom result template elements, see [Create a Result List](https://docs.coveo.com/en/atomic/latest/usage/create-a-result-list/) for more information.
 *
 * You should use the method in the [connectedCallback lifecycle method](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks).
 *
 * @param element The element that the event is dispatched to, which must be the child of a rendered "atomic-result".
 * @returns A promise that resolves on initialization of the parent "atomic-result" element, or rejects when there is no parent "atomic-result" element.
 */
const resultContext = (element) => new Promise((resolve, reject) => {
  const event = buildCustomEvent(resultContextEventName, (result) => resolve(result));
  element.dispatchEvent(event);
  if (!element.closest('atomic-result')) {
    reject(new MissingResultParentError(element.nodeName.toLowerCase()));
  }
});

/**
 * Binds the logging of document
 * @returns An unbind function for the events
 * @param engine A headless search engine instance.
 * @param result The result object
 * @param resultElement Parent result element
 * @param selector Optional. Css selector that selects all links to the document. Default: "a" tags with the clickUri as "href" parameter.
 */
function bindLogDocumentOpenOnResult(engine, result, resultElement, selector) {
  const interactiveResult = nv(engine, {
    options: { result },
  });
  const eventsMap = {
    contextmenu: () => interactiveResult.select(),
    click: () => interactiveResult.select(),
    mouseup: () => interactiveResult.select(),
    mousedown: () => interactiveResult.select(),
    touchstart: () => interactiveResult.beginDelayedSelect(),
    touchend: () => interactiveResult.cancelPendingSelect(),
  };
  const elements = resultElement.querySelectorAll(selector || 'a');
  elements.forEach((element) => {
    Object.keys(eventsMap).forEach((key) => element.addEventListener(key, eventsMap[key]));
  });
  return () => {
    elements.forEach((element) => {
      Object.keys(eventsMap).forEach((key) => element.removeEventListener(key, eventsMap[key]));
    });
  };
}

export { initializeBindings as i, resultContext as r };
