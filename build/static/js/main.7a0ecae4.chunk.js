(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{218:function(e,t){e.exports=function(e,t,n){var a=new Date(e,t-1,n,0,0,0,0),r=new Date(a.valueOf()+864e5);return[r.getFullYear(),r.getMonth()+1,r.getDate()]}},236:function(e,t,n){},257:function(e,t){},259:function(e,t){},273:function(e,t){},275:function(e,t){},303:function(e,t){},305:function(e,t){},306:function(e,t){},311:function(e,t){},313:function(e,t){},332:function(e,t){},344:function(e,t){},347:function(e,t){},364:function(e,t,n){},365:function(e,t,n){},366:function(e,t,n){},367:function(e,t,n){},369:function(e,t,n){},370:function(e,t,n){},371:function(e,t,n){},372:function(e,t,n){},440:function(e,t,n){},441:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(0),c=n.n(r),s=n(28),i=n.n(s),o=(n(236),n(13)),u=n.n(o),l=n(18),d=n(20),j=n(34),f=n.n(j),m=n(221),b=n(209),h=n(12),p=n(130),v=n.n(p),g=new function e(){var t=this;Object(b.a)(this,e),this.token=null,this.refreshToken=localStorage.getItem("refreshToken")||null,this.login=function(e,n){t.token=e,t.refreshToken=n},this.logout=function(){localStorage.removeItem("refreshToken"),localStorage.removeItem("userId"),localStorage.removeItem("user"),localStorage.clear();var e={refreshToken:t.refreshToken};t.token=null,t.refreshToken=null,fetch("https://auth-cvs.herokuapp.com/logout",{method:"DELETE",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){if(204!==e.status)throw new Error("Error when logout!")})).catch((function(e){console.log(e)}))},this.getNewToken=function(){var e=localStorage.getItem("refreshToken");if(e){var n=v.a.decode(e,{complete:!0}),a=new Date;n.exp<Math.floor(a.getTime()/1e3)?t.logout():t.refreshToken=e}if(t.token){var r=v.a.decode(t.token,{complete:!0}),c=new Date;r.exp<Math.floor(c.getTime()/1e3)&&(t.token=null)}if(!t.token){var s={refreshToken:t.refreshToken};return fetch("https://auth-cvs.herokuapp.com/token",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then((function(e){if(201!==e.status)throw t.logout(),new Error("Error when refreshing the token!");return e.json()})).then((function(e){if(localStorage.setItem("refreshToken",e.refreshToken),e.token)return t.login(e.token,e.refreshToken),e.token})).catch((function(e){console.log(e)}))}},Object(h.m)(this,{token:h.n,refreshToken:h.n,login:h.f,logout:h.f,getNewToken:h.f})},O=(n(364),function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0];t[1];return n?Object(a.jsx)("div",{className:"spinner",children:Object(a.jsx)("img",{src:"https://avatars0.githubusercontent.com/u/12551446",className:"loader",alt:"Loading"})}):Object(a.jsxs)("div",{className:"Profil__full",children:[Object(a.jsx)("div",{className:"Profil__title",children:"Profil"}),Object(a.jsxs)("div",{className:"Profil__main",children:[Object(a.jsx)("div",{children:"Here comes the stuff"}),Object(a.jsx)("div",{children:"Add activity"}),Object(a.jsx)("div",{children:"Manage Goal"}),Object(a.jsx)("div",{children:"Make optional/mandatory"}),Object(a.jsx)("div",{onClick:function(){return g.logout()},children:"logout"})]})]})}),x=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()({url:"https://routine-cvs.herokuapp.com"+"/dailies/".concat(t),method:"GET"});case 2:if(!(200!==(n=e.sent).status&201!==n.status)){e.next=5;break}throw new Error("Error! 'GetDailies' failed.");case 5:return e.next=7,n.data;case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()({url:"https://routine-cvs.herokuapp.com/activity",method:"GET"});case 2:if(!(200!==(t=e.sent).status&201!==t.status)){e.next=5;break}throw new Error("Error! 'GetActivities' failed.");case 5:return e.next=7,t.data;case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=(n(365),n.p+"static/media/teeth.1aa6b881.svg"),w=n.p+"static/media/guitar.c3922c9c.svg",_=n.p+"static/media/producing.a9835c6a.svg",N=n.p+"static/media/trumpet.a799638f.svg",T=n.p+"static/media/piano.fa43c86a.svg",E=n.p+"static/media/bass.35a36137.svg",S=n.p+"static/media/dutch.0d45338e.svg",I=n.p+"static/media/javascript.79934a25.svg",C=n.p+"static/media/situps.260199dc.svg",P=n.p+"static/media/pushups.82e7b7a9.svg",F=n.p+"static/media/pullups.2353a6a1.svg",B=n.p+"static/media/code.2aff3c3a.svg",M=n.p+"static/media/run.eee4c3df.svg",D=n.p+"static/media/stretch.22bae108.svg",L=n.p+"static/media/photo.8d6ce4c2.svg",R=n.p+"static/media/water.a1b4f75b.svg",A=n.p+"static/media/climb.936e7285.svg",Y=n.p+"static/media/bye.babac325.svg",G=n.p+"static/media/clean.8fa6a8de.svg",H=n.p+"static/media/french.37bd6f8d.svg",J=n.p+"static/media/meditation.0eabc1a0.svg",q=n.p+"static/media/friends.fd9f2f12.svg",z=n.p+"static/media/steps.fadb4e3f.svg",U=n.p+"static/media/yoga.fb727927.svg",V=function(e){var t="";switch(e.activity.activity){case"teeth":t=y;break;case"guitar":t=w;break;case"bass":t=E;break;case"trumpet":t=N;break;case"piano":t=T;break;case"dutch":t=S;break;case"javascript":t=I;break;case"producing":t=_;break;case"situps":t=C;break;case"pushups":t=P;break;case"pullups":t=F;break;case"code":t=B;break;case"run":t=M;break;case"stretch":t=D;break;case"photo":t=L;break;case"water":t=R;break;case"climb":t=A;break;case"sort":t=Y;break;case"clean":t=G;break;case"french":t=H;break;case"meditation":t=J;break;case"friends":t=q;break;case"steps":t=z;break;case"yoga":t=U;break;default:t=null}return Object(a.jsx)("div",{children:Object(a.jsx)("img",{className:"logo",src:t,alt:e.activity.activity})})},K=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,a,r,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,n=t.getFullYear(),a=t.getMonth()+1,r=t.getDate(),e.next=6,f()({url:"https://routine-cvs.herokuapp.com"+"/streak/".concat(n,"/").concat(a,"/").concat(r),method:"GET"});case 6:if(!(200!==(c=e.sent).status&201!==c.status)){e.next=9;break}throw new Error("Error!");case 9:return e.next=11,c.data[0];case 11:return s=e.sent,e.abrupt("return",s);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=(n(366),function(e){var t=Object(r.useState)([]),n=Object(d.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)(!0),o=Object(d.a)(i,2),j=o[0],f=o[1],m=e.activity.activity,b=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K();case 3:t=e.sent,s(t),f(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){b()}),[]);var h;return j?Object(a.jsx)("div",{className:"Streak__Main",children:"?"}):c[m]?Object(a.jsx)("div",{className:"Streak__Main",style:{backgroundColor:"rgba(214, 137, 16, ".concat((h=c[m],h<2?.1:h<3?.2:h<5?.3:h<8?.4:h<12?.5:h<20?.55:h<30?.6:h<40?.65:h<50?.7:h<60?.75:h<70?.8:h<80?.85:h<99?.9:1),")")},children:c[m]>999?"999+":c[m]}):Object(a.jsx)(a.Fragment,{})}),W=n(446),X=n(447),Z=n(448),$=n(228),ee=n(449),te=n(223),ne=n(225),ae=n(210),re=function(){var e=Object(l.a)(u.a.mark((function e(t,n,a){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(ae.a)({},n,a),e.prev=1,e.next=4,f()({url:"https://routine-cvs.herokuapp.com"+"/daily/".concat(t),method:"PATCH",data:r});case 4:if(200===(c=e.sent).status||201===c.status){e.next=7;break}throw new Error("Error!");case 7:return e.abrupt("return",{status:c.status,message:c.error});case 10:return e.prev=10,e.t0=e.catch(1),console.log(e.t0.message),e.abrupt("return",{status:500,message:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n,a){return e.apply(this,arguments)}}(),ce=(n(367),function(e){var t=Object(r.useState)(!1),n=Object(d.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)(!1),o=Object(d.a)(i,2),j=o[0],f=o[1],m=Object(r.useState)(e.dailies[e.activity.activity]?e.dailies[e.activity.activity]:0),b=Object(d.a)(m,2),h=b[0],p=b[1],v=e.dailies.id,g=e.activity.activity,O=e.activity.increment,x=e.activity.goal,k=h>=x&&(!!x||h>x),y=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),f(!1),t=h+O,e.next=5,re(v,g,t);case 5:200===(n=e.sent).status?(p(t),s(!1)):(te.a.error({message:n.message}),f(!0));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),f(!1),t=h>=O?h-O:0,e.next=5,re(v,g,t);case 5:200===(n=e.sent).status?(p(t),s(!1)):(te.a.error({message:n.message}),f(!0));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(ne.a,{placement:"top",title:Object(a.jsxs)(a.Fragment,{children:[e.activity.name," ",Object(a.jsx)(Q,{activity:e.activity})]}),children:Object(a.jsxs)("div",{className:"daily__item",children:[!x&&!k&&Object(a.jsx)("div",{className:"daily__optional"}),k&&Object(a.jsx)("div",{className:"daily__doneContainer",children:Object(a.jsx)("div",{className:"daily__done",children:Object(a.jsx)(W.a,{})})}),Object(a.jsx)("div",{className:"daily__actionContainer ".concat(0===x||e.disabled?"":"daily__actionContainerHover"),onMouseOver:function(){e.disabled||(x>1?(document.getElementById(g+"_minus").style.display="block",document.getElementById(g+"_plus").style.display="block"):document.getElementById(g+"_check").style.display="block")},onMouseLeave:function(){e.disabled||(x>1?(document.getElementById(g+"_minus").style.display="none",document.getElementById(g+"_plus").style.display="none"):document.getElementById(g+"_check").style.display="none")},children:x>1?Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"daily__action",id:g+"_minus",onClick:w,children:Object(a.jsx)(X.a,{})}),Object(a.jsx)("div",{className:"daily__action",id:g+"_plus",onClick:y,children:Object(a.jsx)(Z.a,{})})]})}):k?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"daily__action",id:g+"_check",onClick:w,children:Object(a.jsx)($.a,{})})}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"daily__action",id:g+"_check",onClick:y,children:Object(a.jsx)(W.a,{})})})}),Object(a.jsx)(V,{activity:e.activity}),Object(a.jsxs)("div",{className:"daily__text }",children:[j?Object(a.jsx)($.a,{style:{color:"#C70039"}}):c?Object(a.jsxs)(a.Fragment,{children:[x>1?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(ee.a,{spin:!0,style:{color:"#999"}})," / ",x," "]}):Object(a.jsx)(ee.a,{spin:!0,style:{color:"#999"}}),x>1&&e.activity.unit]}):Object(a.jsxs)(a.Fragment,{children:[x>1?"".concat(h," / ").concat(x," "):"".concat(e.activity.unit,"!"),x>1&&e.activity.unit]}),0===x&&Object(a.jsx)("div",{style:{fontStyle:"italic",fontSize:".7em"},children:Object(a.jsx)("i",{children:"optional"})})]})]})})}),se=n(218),ie=n.n(se),oe=(n(369),new Date),ue=oe.getFullYear(),le=oe.getMonth()+1,de=oe.getDate(),je=function(e){var t=parseInt(e,10),n=Math.floor(t/3600),a=Math.floor((t-3600*n)/60),r=t-3600*n-60*a;return n<10&&(n="0"+n),a<10&&(a="0"+a),r<10&&(r="0"+r),n+":"+a+":"+r},fe=function(){var e=Math.floor(Date.now()/1e3),t=ie()(ue,le,de);return Math.floor(new Date(Date.UTC(t[0],t[1]-1,t[2],"00","00","00"))/1e3)-e-3600},me=function(){var e=Object(r.useState)(fe()),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){setTimeout((function(){c(fe())}),1e3)}),[n]),Object(a.jsx)("div",{className:n<3600&&"countdown__alert",children:je(n)})},be=(n(370),function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)([]),i=Object(d.a)(s,2),o=i[0],j=i[1],f=Object(r.useState)(!0),m=Object(d.a)(f,2),b=m[0],h=m[1],p=Object(r.useRef)(2),v=Object(r.useRef)(0),g=Object(r.useRef)(null),O=Object(r.useRef)(!1),y=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([x(t+1),k()]);case 3:n=e.sent,a=Object(d.a)(n,2),r=a[0],s=a[1],c(r),j(s),t+1>r.length&&(O.current=!0,g.current=v.current+1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.message),te.a.error({message:e.t0.message});case 16:h(!1);case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){y(p.current)}),[]);var w=!1;Object(r.useEffect)((function(){var e=function(e){e.preventDefault();var t=e.key.toLowerCase();if(!1===w){if(w=!0,"arrowdown"===t){if(g.current!==v.current-1){var n=v.current+1,a=document.getElementById("daily".concat(n)).getBoundingClientRect().top+window.scrollY;window.scrollTo({top:a,behavior:"smooth"})}if(!O.current){p.current++;var r=p.current;y(r)}}else if("arrowup"===t){if(v.current>0){var c=v.current-1,s=document.getElementById("daily".concat(c)).getBoundingClientRect().top+window.scrollY;window.scrollTo({top:s,behavior:"smooth"})}}else if("enter"===t){v.current=0;var i=document.getElementById("daily0").getBoundingClientRect().top+window.scrollY;window.scrollTo({top:i,behavior:"smooth"})}setTimeout((function(){w=!1}),500)}},t=function(e){v.current=Math.round(window.scrollY/window.innerHeight),O.current||p.current===v.current+1&&(p.current=v.current+2,y(v.current+2))};return document.addEventListener("keydown",e),document.addEventListener("scroll",t),function(){window.removeEventListener("keydown",e),window.removeEventListener("scroll",t)}}),[]);for(var _=function(e){return o.map((function(t){return Object(a.jsx)(ce,{activity:t,dailies:n[e],disabled:!!e},t.activity)}))},N=[],T=0;T<p.current;T++)N.push(Object(a.jsxs)("div",{className:"Dailies__full",id:"daily".concat(T),children:[Object(a.jsx)("div",{className:"dailies__date",children:n.length>0?Object(a.jsxs)("div",{children:[0===T&&Object(a.jsx)(me,{}),1===T&&"Yesterday",T>1&&"".concat(n[T].day,".").concat(n[T].month,".").concat(n[T].year)]}):""}),Object(a.jsx)("div",{className:"dailies__main",children:_(T)})]},T));return b?Object(a.jsx)("div",{className:"spinner",children:Object(a.jsx)("img",{src:"https://avatars0.githubusercontent.com/u/12551446",className:"loader",alt:"Loading"})}):Object(a.jsx)(a.Fragment,{children:N})}),he=n(450),pe=function(e){var t=e.condition,n=e.wrap,a=e.children;return t?n(a):a},ve=(n(371),function(e){var t=Object(r.useState)(!0),n=Object(d.a)(t,2),c=n[0];n[1];return Object(a.jsx)(pe,{condition:!e.showProfil,wrap:function(e){return Object(a.jsx)(ne.a,{title:"Edit profil",children:e})},children:e.showProfil?Object(a.jsx)("div",{className:"FloatButton__float",onClick:function(){return e.setShowProfil(!1)},children:Object(a.jsx)($.a,{className:"FloatButton__close"})}):c?Object(a.jsx)("div",{className:"FloatButton__float",style:{backgroundImage:"url(https://avatars0.githubusercontent.com/u/12551446)",backgroundSize:"cover"},onClick:function(){return e.setShowProfil(!0)}}):Object(a.jsx)("div",{className:"FloatButton__float FloatButton__background",onClick:function(){return e.setShowProfil(!0)},children:Object(a.jsx)(he.a,{className:"FloatButton__icon"})})})}),ge=n(443),Oe=n(444),xe=n(445),ke=n(224),ye=function(){var e=Object(l.a)(u.a.mark((function e(t,n){var a,r,c,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={email:t,password:n},e.next=3,fetch("https://auth-cvs.herokuapp.com/login",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}});case 3:if(!(200!==(r=e.sent).status&201!==r.status)){e.next=10;break}return e.next=7,r.json();case 7:throw c=e.sent,s="An error has occured: ".concat(r.status," - ").concat(c.error),new Error(s);case 10:return e.next=12,r.json();case 12:return i=e.sent,console.log(i),e.abrupt("return",i);case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),we=n.p+"static/media/routine.6bea2db2.svg",_e=n(451),Ne=n(452),Te=n(229),Ee=n(230),Se=(n(372),function(){var e=Object(r.useState)(!0),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(!1),i=Object(d.a)(s,2),o=i[0],j=i[1],f=function(){var e=Object(l.a)(u.a.mark((function e(t){var a,r,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j(!0),a=t.email,r=t.password,c=t.remember,t.username,console.log("email",a),console.log("password",r),n){e.next=10;break}e.next=16;break;case 10:return e.next=12,ye(a,r);case 12:s=e.sent,!0===c&&(localStorage.setItem("refreshToken",s.refreshToken),localStorage.setItem("userId",s.userId)),j(!1),g.login(s.token,s.refreshToken);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"login__full",children:[Object(a.jsxs)("div",{className:"login__header",children:[Object(a.jsx)("img",{className:"login__logo",src:we,alt:"logo"}),"Routine"]}),Object(a.jsxs)(ge.a,{name:"normal_login",className:"login__form",initialValues:{remember:!0},onFinish:f,children:[Object(a.jsx)(ge.a.Item,{name:"username",hidden:n,rules:[{required:!n,message:"How should we call you?"}],children:Object(a.jsx)(Oe.a,{prefix:Object(a.jsx)(he.a,{className:"site-form-item-icon"}),placeholder:"Name"})}),Object(a.jsx)(ge.a.Item,{name:"email",rules:[{type:"email",required:!0,message:"Please input your Email!"}],children:Object(a.jsx)(Oe.a,{prefix:Object(a.jsx)(_e.a,{className:"site-form-item-icon"}),placeholder:"Email"})}),Object(a.jsx)(ge.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(a.jsx)(Oe.a.Password,{prefix:Object(a.jsx)(Ne.a,{className:"site-form-item-icon"}),placeholder:"input Password",iconRender:function(e){return e?Object(a.jsx)(Te.a,{}):Object(a.jsx)(Ee.a,{})}})}),Object(a.jsxs)(ge.a.Item,{hidden:!n,children:[Object(a.jsx)(ge.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:Object(a.jsx)(xe.a,{children:Object(a.jsx)("span",{className:"login__remember",children:"Remember me"})})}),Object(a.jsx)("a",{className:"login__formforgot",href:"/#",children:"Recover password"})]}),Object(a.jsxs)(ge.a.Item,{children:[Object(a.jsx)(ke.a,{type:"primary",htmlType:"submit",className:"login__formbutton",children:o?Object(a.jsx)(ee.a,{spin:!0}):n?"Log in":"Create account"}),Object(a.jsxs)("div",{className:"login__switchmode",children:["Or"," ",Object(a.jsx)("span",{className:"login__switchmodetext",onClick:function(){c(!n)},children:n?"register now!":"log into your account!"})]})]})]})]})}),Ie=(n(440),function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))});window.addEventListener("resize",Ie);var Ce=Object(m.a)((function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){Ie(),g.refreshToken&&g.login(g.getNewToken(),g.refreshToken),f.a.interceptors.request.use(function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g.token){e.next=4;break}e.t0=g.token,e.next=7;break;case 4:return e.next=6,g.getNewToken();case 6:e.t0=e.sent;case 7:return n=e.t0,console.log("token",n),t.headers={Authorization:"Bearer ".concat(n),"Content-Type":"application/json"},t.validateStatus=function(e){return!0},e.abrupt("return",t);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)}))}),[]),Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("header",{className:"App__header",children:g.refreshToken?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(ve,{showProfil:n,setShowProfil:c}),Object(a.jsx)("div",{className:"App__day",children:n?Object(a.jsx)(O,{}):Object(a.jsx)(be,{})})]}):Object(a.jsx)(Se,{})})})}));i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(Ce,{})}),document.getElementById("root"))}},[[441,1,2]]]);
//# sourceMappingURL=main.7a0ecae4.chunk.js.map