(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{219:function(e,t){e.exports=function(e,t,n){var r=new Date(e,t-1,n,0,0,0,0),a=new Date(r.valueOf()+864e5);return[a.getFullYear(),a.getMonth()+1,a.getDate()]}},236:function(e,t,n){},240:function(e,t){},242:function(e,t){},256:function(e,t){},258:function(e,t){},286:function(e,t){},288:function(e,t){},289:function(e,t){},294:function(e,t){},296:function(e,t){},315:function(e,t){},327:function(e,t){},330:function(e,t){},347:function(e,t,n){},365:function(e,t,n){},366:function(e,t,n){},367:function(e,t,n){},368:function(e,t,n){},370:function(e,t,n){},371:function(e,t,n){},372:function(e,t,n){},373:function(e,t,n){},441:function(e,t,n){},442:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(0),c=n.n(a),s=n(28),i=n.n(s),o=(n(236),n(21)),u=n(62),l=n(13),d=n.n(l),j=n(18),f=n(92),b=n(8),m=n(133),h=n.n(m),p=new function e(){var t=this;Object(f.a)(this,e),this.token=null,this.refreshToken=localStorage.getItem("refreshToken")||null,this.login=function(e,n){t.token=e,t.refreshToken=n},this.logout=function(){localStorage.removeItem("refreshToken"),localStorage.removeItem("userId"),localStorage.removeItem("user"),localStorage.clear();var e={refreshToken:t.refreshToken};t.token=null,t.refreshToken=null,fetch("https://auth-cvs.herokuapp.com/logout",{method:"DELETE",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){if(204!==e.status)throw new Error("Error when logout!")})).catch((function(e){console.log(e)}))},this.getNewToken=function(){var e=localStorage.getItem("refreshToken");if(e){var n=h.a.decode(e,{complete:!0}),r=new Date;n.payload.exp<Math.floor(r.getTime()/1e3)?t.logout():t.refreshToken=e}if(!t.token){var a={refreshToken:t.refreshToken};return fetch("https://auth-cvs.herokuapp.com/token",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(e){if(201!==e.status)throw t.logout(),new Error("Error when refreshing the token!");return e.json()})).then((function(e){if(localStorage.setItem("refreshToken",e.refreshToken),e.token)return t.login(e.token,e.refreshToken),e.token})).catch((function(e){console.log(e)}))}var c=h.a.decode(t.token,{complete:!0}),s=new Date;if(!(c.payload.exp<Math.floor(s.getTime()/1e3)))return t.token;t.token=null},Object(b.m)(this,{token:b.n,refreshToken:b.n,login:b.f,logout:b.f,getNewToken:b.f})},v=new function e(){var t=this;Object(f.a)(this,e),this.userId=localStorage.getItem("userId")||null,this.userName=null,this.picUrl=null,this.setUserId=function(e){t.userId=e},this.setUserName=function(e){t.userName=e},this.setPicUrl=function(e){t.picUrl=e},Object(b.m)(this,{userId:b.n,setUserId:b.f,userName:b.n,setUserName:b.f,picUrl:b.n,setPicUrl:b.f})},O=n.p+"static/media/venja.834ef694.svg",x=(n(347),function(){return Object(r.jsx)("div",{className:"spinner",children:Object(r.jsx)("img",{src:O,className:"loader",alt:"Loading"})})}),g=n(34),k=n.n(g),y=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()({url:"https://routine-cvs.herokuapp.com/user",method:"GET"});case 2:if(!(200!==(t=e.sent).status&201!==t.status)){e.next=9;break}if(401!==t.status){e.next=8;break}throw new Error("Error! Unauthorized(401)");case 8:throw new Error("Error! Status ".concat(t.status));case 9:return e.next=11,t.data[0];case 11:return n=e.sent,v.setUserName(n.name),v.setPicUrl(n.picurl),e.abrupt("return",n);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=(n(365),Object(u.a)((function(){var e=Object(a.useState)(!0),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),i=Object(o.a)(s,2),u=i[0],l=i[1],f=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y();case 3:t=e.sent,l(t.activities),c(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){f()}),[]);var b=u.map((function(e){return Object(r.jsxs)(r.Fragment,{children:[e.activity," "]})}));return n?Object(r.jsx)(x,{}):Object(r.jsxs)("div",{className:"Profil__full",children:[Object(r.jsx)("div",{className:"Profil__title",children:"Profil"}),Object(r.jsx)("div",{className:"Profil__avatar",style:{backgroundImage:"url(".concat(v.picUrl,")"),backgroundSize:"cover"}}),Object(r.jsxs)("div",{className:"Profil__main",children:[Object(r.jsx)("br",{}),Object(r.jsxs)("div",{children:["hello ",v.userName,","]}),Object(r.jsx)("div",{className:"Profil__ActivitiesContainer",children:b}),Object(r.jsx)("div",{children:"Add activity"}),Object(r.jsx)("div",{children:"Manage Goal / increment"}),Object(r.jsx)("div",{children:"Edit activity title "}),Object(r.jsx)("div",{children:"Make optional/mandatory"}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{className:"Profil__logout",onClick:function(){return p.logout()},children:"(logout)"})]})]})}))),_=n(223),N=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()({url:"https://routine-cvs.herokuapp.com"+"/dailies/".concat(t),method:"GET"});case 2:if(!(200!==(n=e.sent).status&201!==n.status)){e.next=9;break}if(401!==n.status){e.next=8;break}throw new Error("Error! Unauthorized (401)");case 8:throw new Error("Error! Status ".concat(n.status));case 9:return e.next=11,n.data;case 11:return r=e.sent,e.abrupt("return",r);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()({url:"https://routine-cvs.herokuapp.com/activity",method:"GET"});case 2:if(!(200!==(t=e.sent).status&201!==t.status)){e.next=9;break}if(401!==t.status){e.next=8;break}throw new Error("Error! Unauthorized (401)");case 8:throw new Error("Error! Status ".concat(t.status));case 9:return e.next=11,t.data;case 11:return n=e.sent,e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=(n(366),n.p+"static/media/teeth.1aa6b881.svg"),T=n.p+"static/media/guitar.c3922c9c.svg",I=n.p+"static/media/producing.a9835c6a.svg",P=n.p+"static/media/trumpet.a799638f.svg",F=n.p+"static/media/piano.fa43c86a.svg",B=n.p+"static/media/bass.35a36137.svg",C=n.p+"static/media/dutch.0d45338e.svg",U=n.p+"static/media/javascript.79934a25.svg",M=n.p+"static/media/situps.260199dc.svg",D=n.p+"static/media/pushups.82e7b7a9.svg",R=n.p+"static/media/pullups.2353a6a1.svg",L=n.p+"static/media/code.6688a6a8.svg",A=n.p+"static/media/run.eee4c3df.svg",z=n.p+"static/media/stretch.22bae108.svg",Y=n.p+"static/media/photo.8d6ce4c2.svg",G=n.p+"static/media/water.a1b4f75b.svg",H=n.p+"static/media/climb.936e7285.svg",J=n.p+"static/media/bye.babac325.svg",q=n.p+"static/media/clean.8fa6a8de.svg",V=n.p+"static/media/french.37bd6f8d.svg",K=n.p+"static/media/meditation.0eabc1a0.svg",Q=n.p+"static/media/friends.0c0a6c83.svg",W=n.p+"static/media/steps.fadb4e3f.svg",X=n.p+"static/media/yoga.fb727927.svg",Z=function(e){var t="";switch(e.activity.activity){case"teeth":t=S;break;case"guitar":t=T;break;case"bass":t=B;break;case"trumpet":t=P;break;case"piano":t=F;break;case"dutch":t=C;break;case"javascript":t=U;break;case"producing":t=I;break;case"situps":t=M;break;case"pushups":t=D;break;case"pullups":t=R;break;case"code":t=L;break;case"run":t=A;break;case"stretch":t=z;break;case"photo":t=Y;break;case"water":t=G;break;case"climb":t=H;break;case"sort":t=J;break;case"clean":t=q;break;case"french":t=V;break;case"meditation":t=K;break;case"friends":t=Q;break;case"steps":t=W;break;case"yoga":t=X;break;case"bye":t=J;break;default:t=null}return Object(r.jsx)("div",{children:Object(r.jsx)("img",{className:"logo",src:t,alt:e.activity.activity})})},$=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n,r,a,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,n=t.getFullYear(),r=t.getMonth()+1,a=t.getDate(),e.next=6,k()({url:"https://routine-cvs.herokuapp.com"+"/streak/".concat(n,"/").concat(r,"/").concat(a),method:"GET"});case 6:if(!(200!==(c=e.sent).status&201!==c.status)){e.next=9;break}throw new Error("Error!");case 9:return e.next=11,c.data[0];case 11:return s=e.sent,e.abrupt("return",s);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=(n(367),function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(!0),u=Object(o.a)(i,2),l=u[0],f=u[1],b=e.activity.activity,m=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$();case 3:t=e.sent,s(t),f(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){m()}),[]);var h;return l?Object(r.jsx)("div",{className:"Streak__Main",children:"?"}):c[b]?Object(r.jsx)("div",{className:"Streak__Main",style:{backgroundColor:"rgba(214, 137, 16, ".concat((h=c[b],h<2?.1:h<3?.2:h<5?.3:h<8?.4:h<12?.5:h<20?.55:h<30?.6:h<40?.65:h<50?.7:h<60?.75:h<70?.8:h<80?.85:h<99?.9:1),")")},children:c[b]>999?"999+":c[b]}):Object(r.jsx)(r.Fragment,{})}),te=n(447),ne=n(448),re=n(449),ae=n(228),ce=n(450),se=n(225),ie=n(211),oe=function(){var e=Object(j.a)(d.a.mark((function e(t,n,r){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(ie.a)({},n,r),e.prev=1,e.next=4,k()({url:"https://routine-cvs.herokuapp.com"+"/daily/".concat(t),method:"PATCH",data:a});case 4:if(200===(c=e.sent).status||201===c.status){e.next=7;break}throw new Error("Error!");case 7:return e.abrupt("return",{status:c.status,message:c.error});case 10:return e.prev=10,e.t0=e.catch(1),console.log(e.t0.message),e.abrupt("return",{status:500,message:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n,r){return e.apply(this,arguments)}}(),ue=(n(368),function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(!1),u=Object(o.a)(i,2),l=u[0],f=u[1],b=Object(a.useState)(e.dailies[e.activity.activity]?e.dailies[e.activity.activity]:0),m=Object(o.a)(b,2),h=m[0],p=m[1],v=e.dailies.id,O=e.activity.activity,x=e.activity.increment,g=e.activity.goal,k=e.activity.optional,y=h>=g&&(!!g||h>g),w=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),f(!1),t=h+x,e.next=5,oe(v,O,t);case 5:200===(n=e.sent).status?(p(t),s(!1)):(_.a.error({message:n.message}),f(!0));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),f(!1),t=h>=x?h-x:0,e.next=5,oe(v,O,t);case 5:200===(n=e.sent).status?(p(t),s(!1)):(_.a.error({message:n.message}),f(!0));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)(se.a,{placement:"top",title:Object(r.jsxs)(r.Fragment,{children:[e.activity.desc," ",Object(r.jsx)(ee,{activity:e.activity})]}),children:Object(r.jsxs)("div",{className:"daily__item",children:[k&&!y&&Object(r.jsx)("div",{className:"daily__optional"}),y&&Object(r.jsx)("div",{className:"daily__doneContainer",children:Object(r.jsx)("div",{className:"daily__done",children:Object(r.jsx)(te.a,{})})}),Object(r.jsx)("div",{className:"daily__actionContainer ".concat(0===g||e.disabled?"":"daily__actionContainerHover"),onMouseOver:function(){e.disabled||(g>1?(document.getElementById(O+"_minus").style.display="block",document.getElementById(O+"_plus").style.display="block"):document.getElementById(O+"_check").style.display="block")},onMouseLeave:function(){e.disabled||(g>1?(document.getElementById(O+"_minus").style.display="none",document.getElementById(O+"_plus").style.display="none"):document.getElementById(O+"_check").style.display="none")},children:g>1?Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"daily__action",id:O+"_minus",onClick:N,children:Object(r.jsx)(ne.a,{})}),Object(r.jsx)("div",{className:"daily__action",id:O+"_plus",onClick:w,children:Object(r.jsx)(re.a,{})})]})}):y?Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"daily__action",id:O+"_check",onClick:N,children:Object(r.jsx)(ae.a,{})})}):Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"daily__action",id:O+"_check",onClick:w,children:Object(r.jsx)(te.a,{})})})}),Object(r.jsx)(Z,{activity:e.activity}),Object(r.jsxs)("div",{className:"daily__text }",children:[l?Object(r.jsx)(ae.a,{style:{color:"#C70039"}}):c?Object(r.jsxs)(r.Fragment,{children:[g>1?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ce.a,{spin:!0,style:{color:"#999"}})," / ",g," "]}):Object(r.jsx)(ce.a,{spin:!0,style:{color:"#999"}}),g>1&&e.activity.unit]}):Object(r.jsxs)(r.Fragment,{children:[g>1?"".concat(h," / ").concat(g," "):"".concat(e.activity.unit,"!"),g>1&&e.activity.unit]}),k&&Object(r.jsx)("div",{style:{fontStyle:"italic",fontSize:".7em"},children:Object(r.jsx)("i",{children:"optional"})})]})]})})}),le=n(219),de=n.n(le),je=(n(370),new Date),fe=je.getFullYear(),be=je.getMonth()+1,me=je.getDate(),he=function(e){var t=parseInt(e,10),n=Math.floor(t/3600),r=Math.floor((t-3600*n)/60),a=t-3600*n-60*r;return n<10&&n>-10&&(n="0"+n),r<10&&r>-10&&(r="0"+r),a<10&&a>-10&&(a="0"+a),n+":"+r+":"+a},pe=function(){var e=Math.floor(Date.now()/1e3),t=de()(fe,be,me);return Math.floor(new Date(Date.UTC(t[0],t[1]-1,t[2],"00","00","00"))/1e3)-e-7200},ve=function(){var e=Object(a.useState)(pe()),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){setTimeout((function(){c(pe())}),1e3)}),[n]),Object(r.jsx)("div",{className:n<7200&&"countdown__alert",children:he(n)})},Oe=(n(371),function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),i=Object(o.a)(s,2),u=i[0],l=i[1],f=Object(a.useState)(!0),b=Object(o.a)(f,2),m=b[0],h=b[1],p=Object(a.useRef)(2),v=Object(a.useRef)(0),O=Object(a.useRef)(null),g=Object(a.useRef)(!1),k=Object(a.useRef)(!1),y=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,r,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([N(t+1),E()]);case 3:n=e.sent,r=Object(o.a)(n,2),a=r[0],s=r[1],c(a),l(s),t+1>a.length&&(g.current=!0,O.current=v.current+1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.message),_.a.error({message:e.t0.message});case 16:h(!1);case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),w=function(e){e.preventDefault();var t=e.key.toLowerCase();if(!1===k.current){if(k.current=!0,"arrowdown"===t){if(O.current!==v.current-1){var n=v.current+1,r=document.getElementById("daily".concat(n)).getBoundingClientRect().top+window.scrollY;window.scrollTo({top:r,behavior:"smooth"})}if(!g.current){p.current++;var a=p.current;y(a)}}else if("arrowup"===t){if(v.current>0){var c=v.current-1,s=document.getElementById("daily".concat(c)).getBoundingClientRect().top+window.scrollY;window.scrollTo({top:s,behavior:"smooth"})}}else if("enter"===t){v.current=0;var i=document.getElementById("daily0").getBoundingClientRect().top+window.scrollY;window.scrollTo({top:i,behavior:"smooth"})}setTimeout((function(){k.current=!1}),500)}},S=function(e){v.current=Math.round(window.scrollY/window.innerHeight),g.current||p.current===v.current+1&&(p.current=v.current+2,y(v.current+2))};Object(a.useEffect)((function(){y(p.current)}),[]),Object(a.useEffect)((function(){return document.addEventListener("keydown",w),document.addEventListener("scroll",S),function(){document.removeEventListener("keydown",w),document.removeEventListener("scroll",S)}}),[]);for(var T=function(e){return u.map((function(t){return Object(r.jsx)(ue,{activity:t,dailies:n[e],disabled:e>1},t.activity)}))},I=[],P=0;P<p.current;P++)I.push(Object(r.jsxs)("div",{className:"Dailies__full",id:"daily".concat(P),children:[Object(r.jsx)("div",{className:"dailies__date",children:Object(r.jsxs)("div",{children:[0===P&&Object(r.jsx)(ve,{}),1===P&&"Yesterday",P>1&&"".concat(n[P].day,".").concat(n[P].month,".").concat(n[P].year)]})}),Object(r.jsx)("div",{className:"dailies__main",children:T(P)})]},P));return m?Object(r.jsx)(x,{}):I}),xe=n(451),ge=function(e){var t=e.condition,n=e.wrap,r=e.children;return t?n(r):r},ke=Object(u.a)((function(e){return Object(r.jsx)(ge,{condition:!e.showProfil,wrap:function(e){return Object(r.jsx)(se.a,{placement:"left",title:"Edit profil",children:e})},children:e.showProfil?Object(r.jsx)("div",{className:"FloatButton__float",onClick:function(){return e.setShowProfil(!1)},children:Object(r.jsx)(ae.a,{className:"FloatButton__close"})}):v.picUrl?Object(r.jsx)("div",{className:"FloatButton__float",style:{backgroundImage:"url(".concat(v.picUrl,")"),backgroundSize:"cover"},onClick:function(){return e.setShowProfil(!0)}}):Object(r.jsx)("div",{className:"FloatButton__float FloatButton__background",onClick:function(){return e.setShowProfil(!0)},children:Object(r.jsx)(xe.a,{className:"FloatButton__icon"})})})})),ye=function(){return Object(r.jsx)(se.a,{placement:"left",title:"Add sporatical task",children:Object(r.jsx)("div",{className:"FloatButton__float  FloatButton__background",children:Object(r.jsx)(re.a,{className:"FloatButton__icon"})})})},we=n(452),_e=function(){return Object(r.jsx)(se.a,{placement:"left",title:"Any obstacle?",children:Object(r.jsx)("div",{className:"FloatButton__float  FloatButton__background",children:Object(r.jsx)(we.a,{className:"FloatButton__icon"})})})},Ne=(n(372),function(e){return Object(a.useEffect)((function(){y()}),[]),Object(r.jsxs)("div",{className:"Menu__floating",children:[Object(r.jsx)(ke,{showProfil:e.showProfil,setShowProfil:e.setShowProfil}),Object(r.jsx)(ye,{}),Object(r.jsx)(_e,{})]})}),Ee=n(444),Se=n(445),Te=n(446),Ie=n(224),Pe=function(){var e=Object(j.a)(d.a.mark((function e(t,n){var r,a,c,s,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={email:t,password:n},e.next=3,fetch("https://auth-cvs.herokuapp.com/login",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}});case 3:if(!(200!==(a=e.sent).status&201!==a.status)){e.next=10;break}return e.next=7,a.json();case 7:throw c=e.sent,s=c.error,new Error(s);case 10:return e.next=12,a.json();case 12:return i=e.sent,e.abrupt("return",i);case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Fe=n(453),Be=n(454),Ce=n(229),Ue=n(230),Me=(n(373),function(){var e=Object(a.useState)(!0),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),i=Object(o.a)(s,2),u=i[0],l=i[1],f=function(){var e=Object(j.a)(d.a.mark((function e(t){var r,a,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l(!0),r=t.email,a=t.password,c=t.remember,t.username,n){e.next=8;break}e.next=22;break;case 8:return e.prev=8,e.next=11,Pe(r,a);case 11:s=e.sent,!0===c&&(localStorage.setItem("refreshToken",s.refreshToken),localStorage.setItem("userId",s.userId)),p.login(s.token,s.refreshToken),v.setUserId(s.userId),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(8),_.a.warn({message:e.t0.message}),console.log(e.t0);case 21:l(!1);case 22:case"end":return e.stop()}}),e,null,[[8,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"login__full",children:[Object(r.jsxs)("div",{className:"login__header",children:[Object(r.jsx)("img",{className:"login__logo",src:O,alt:"logo"}),"Venja.org"]}),Object(r.jsxs)(Ee.a,{name:"normal_login",className:"login__form",initialValues:{remember:!0},onFinish:f,children:[Object(r.jsx)(Ee.a.Item,{name:"username",hidden:n,rules:[{required:!n,message:"How should we call you?"}],children:Object(r.jsx)(Se.a,{prefix:Object(r.jsx)(xe.a,{className:"site-form-item-icon"}),placeholder:"Name"})}),Object(r.jsx)(Ee.a.Item,{name:"email",rules:[{type:"email",required:!0,message:"Please input your Email!"}],children:Object(r.jsx)(Se.a,{prefix:Object(r.jsx)(Fe.a,{className:"site-form-item-icon"}),placeholder:"Email"})}),Object(r.jsx)(Ee.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(r.jsx)(Se.a.Password,{prefix:Object(r.jsx)(Be.a,{className:"site-form-item-icon"}),placeholder:"input Password",iconRender:function(e){return e?Object(r.jsx)(Ce.a,{}):Object(r.jsx)(Ue.a,{})}})}),Object(r.jsxs)(Ee.a.Item,{hidden:!n,children:[Object(r.jsx)(Ee.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:Object(r.jsx)(Te.a,{children:Object(r.jsx)("span",{className:"login__remember",children:"Remember me"})})}),Object(r.jsx)("a",{className:"login__formforgot",href:"/#",children:"Recover password"})]}),Object(r.jsxs)(Ee.a.Item,{children:[Object(r.jsx)(Ie.a,{type:"primary",htmlType:"submit",className:"login__formbutton",children:u?Object(r.jsx)(ce.a,{spin:!0}):n?"Log in":"Create account"}),Object(r.jsxs)("div",{className:"login__switchmode",children:["Or"," ",Object(r.jsx)("span",{className:"login__switchmodetext",onClick:function(){c(!n)},children:n?"register now!":"log into your account!"})]})]})]})]})});k.a.interceptors.request.use(function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.token;case 2:if(!e.sent){e.next=8;break}return e.next=5,p.token;case 5:e.t0=e.sent,e.next=11;break;case 8:return e.next=10,p.getNewToken();case 10:e.t0=e.sent;case 11:return n=e.t0,t.headers=Object.assign({Authorization:"Bearer ".concat(n),"Content-Type":"application/json"}),e.abrupt("return",t);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return console.log("Interceptor Error",e),Promise.reject(e)}));n(441);var De=function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))};window.addEventListener("resize",De);var Re=Object(u.a)((function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){p.refreshToken&&p.login(p.getNewToken(),p.refreshToken),De()}),[]),Object(r.jsx)("div",{className:"App",children:Object(r.jsx)("header",{className:"App__header",children:p.refreshToken?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ne,{showProfil:n,setShowProfil:c}),Object(r.jsx)("div",{className:"App__main",children:n?Object(r.jsx)(w,{}):Object(r.jsx)(Oe,{})})]}):Object(r.jsx)(Me,{})})})}));i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Re,{})}),document.getElementById("root"))}},[[442,1,2]]]);
//# sourceMappingURL=main.c2452608.chunk.js.map