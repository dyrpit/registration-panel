(this["webpackJsonpregistration-page"]=this["webpackJsonpregistration-page"]||[]).push([[0],Array(27).concat([function(e,t,n){},,function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(15),r=n.n(c),i=(n(27),n(13)),o=n(2),l=n(3),u=n(0),j=Object(s.createContext)(),b=function(e){var t=e.children,n=Object(s.useState)(null),a=Object(l.a)(n,2),c=a[0],r=a[1],i=Object(s.useState)([]),o=Object(l.a)(i,2),b=o[0],d=o[1],m=Object(s.useState)(!1),O=Object(l.a)(m,2),h={user:c,setUser:r,isLoggedIn:O[0],setIsLoggedIn:O[1],users:b,setUsers:d};return Object(u.jsx)(j.Provider,{value:h,children:t})},d=(n(29),function(e){var t=e.children;return Object(u.jsx)("main",{className:"container",children:t})}),m=function(){return Object(u.jsx)(d,{children:Object(u.jsx)("p",{children:"About page"})})},O=(n(30),function(e){var t=e.title,n=e.to,s=Object(o.g)();return Object(u.jsx)("button",{className:"button",onClick:function(){return s.push(n)},children:t})}),h=(n(36),function(){return Object(u.jsxs)(d,{children:[Object(u.jsx)("p",{className:"error",children:"Ups... There is no site in here!"}),Object(u.jsx)(O,{title:"home",to:"/"})]})}),p=(n(37),function(){return Object(u.jsxs)("div",{className:"footer",children:[Object(u.jsx)("p",{children:"By Piotr Dyrda"}),Object(u.jsxs)("div",{className:"footer__links",children:[Object(u.jsx)("div",{children:Object(u.jsx)("a",{href:"https://www.linkedin.com/in/dyrda-piotr/",target:"_blank",rel:"noreferrer",alt:"github-logo",children:Object(u.jsx)("i",{className:"fab fa-linkedin"})})}),Object(u.jsx)("div",{children:Object(u.jsx)("a",{href:"https://github.com/dyrpit",target:"_blank",rel:"noreferrer",alt:"github-logo",children:Object(u.jsx)("i",{className:"fab fa-github"})})})]})]})}),x=(n(38),[{path:"/users",name:"users",description:"See all users"},{path:"/profile",name:"profile",description:"See user profile"},{path:"/about",name:"about",description:"Read about project & author"}]),f=[{path:"/profile",name:"profile",description:"See user profile"},{path:"/about",name:"about",description:"Read about project & author"}],g=function(e){var t=e.isOpen,n=e.setIsOpen,a=t?"--open":"",c=Object(s.useContext)(j).user,r=c&&c.role.includes("admin")?x:f;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{onClick:n,className:"nav-background nav-background".concat(a)}),Object(u.jsx)("nav",{className:"nav nav".concat(a),children:Object(u.jsx)("ul",{className:"nav__items",children:r.map((function(e){return Object(u.jsxs)("li",{className:"nav__item",children:[Object(u.jsx)(i.b,{onClick:n,className:"nav__item__link",to:e.path,children:e.name}),Object(u.jsx)("div",{className:"nav__item__description",children:e.description})]},e.name)}))})})]})},v=(n(39),function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(s.useContext)(j).user,r=n?"--open":"",o=function(){a((function(e){return!e}))};return Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)(g,{isOpen:n,setIsOpen:o}),Object(u.jsxs)("div",{onClick:o,className:"menu menu".concat(r),children:[Object(u.jsx)("div",{className:"menu__bar"}),Object(u.jsx)("div",{className:"menu__bar"}),Object(u.jsx)("div",{className:"menu__bar"})]}),Object(u.jsxs)("div",{className:"header__user",children:[Object(u.jsx)("p",{children:c?"Logged as ".concat((null===c||void 0===c?void 0:c.name)||c.email):"No user logged in"}),Object(u.jsx)(i.b,{to:"/profile",children:Object(u.jsx)("i",{className:"fas fa-user"})})]})]})}),_=n(5),N=n.n(_),w=n(8),k="https://pharmacy-rest.herokuapp.com/",y="GET",C="POST",S="DELETE",I="PATCH",L="".concat(k,"auth/login"),U="".concat(k,"auth/logout"),A="".concat(k,"admin/all-users"),P="".concat(k,"admin/delete-user"),E="".concat(k,"admin/update-user"),B="".concat(k,"user/register"),D=function(){var e=Object(w.a)(N.a.mark((function e(t,n,s){var a,c,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:t,headers:{"Content-Type":"application/json"},credentials:"include",body:s||null},e.prev=1,e.next=4,fetch("".concat(n),a);case 4:return c=e.sent,e.next=7,c.json();case 7:return r=e.sent,e.abrupt("return",r);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n,s){return e.apply(this,arguments)}}(),F=(n(41),function(e){var t=e.message,n=e.success?"alert--success":"";return Object(u.jsx)("div",{className:"alert ".concat(n),children:Object(u.jsx)("p",{className:"alert__message",children:t})})}),R=(n(42),function(){return Object(u.jsx)("div",{className:"spinner"})}),T=(n(43),function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(!1),r=Object(l.a)(c,2),i=r[0],o=r[1],b=Object(s.useContext)(j),m=b.isLoggedIn,h=b.setIsLoggedIn,p=b.setUser,x=b.setUsers,f=function(){var e=Object(w.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,D(y,U);case 3:(t=e.sent).ok?(h(!1),p(null),x(null)):a(t.message),o(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)(d,{children:Object(u.jsxs)("div",{className:"home",children:[Object(u.jsxs)("div",{className:"home__container",children:[n&&Object(u.jsx)(F,{message:n}),Object(u.jsx)("h3",{className:"home__container__title",children:m?"Already signed in":"Sign in"}),m?Object(u.jsx)("button",{className:"button",onClick:f,children:i?Object(u.jsx)(R,{}):"Log out"}):Object(u.jsx)(O,{title:"Sign in",to:"login"})]}),Object(u.jsxs)("div",{className:"home__container",children:[Object(u.jsx)("h3",{className:"home__container__title",children:"Don't have an account?"}),Object(u.jsx)(O,{title:"Register",to:"register"})]})]})})}),V=(n(44),function(e){var t=e.children;return Object(u.jsx)("div",{className:"content-container",children:t})}),Z=n(11),H=n(10),J=function(e,t){var n,s={},a=e.email,c=e.password,r=e.repeatPassword;if(!Boolean(Object.keys(e).length))return s.message="Fill up form before submit",{validationAlerts:s,isValid:!1};var i=[function(e){var t="";return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(t="Invalid email address"):t="Insert email",{message:t,type:"email"}}(a),function(e,t){var n="";return e||(n="Insert password"),e.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)||"register"!==t||(n="Passoword must have 8 to 15 characters, at least one lowercase and uppercase letters, one digit, one special character"),{message:n,type:"password"}}(c,t),"register"===t?function(e,t){var n="";return t?e!==t&&(n="Passwords must be the same"):n="Repeat password",{message:n,type:"repeatPassword"}}(c,r):null];return n=i.every((function(e){return null==e||!e.message})),i.forEach((function(e){return e&&e.message?s[e.type]=e.message:null})),{validationAlerts:s,isValid:n}},M=(n(45),function(e){var t=e.handleOnChange,n=e.value,s=e.type,a=e.name,c=e.title,r=e.warning,i=Boolean(r)?"input--warning":"";return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"input__container",children:[Object(u.jsx)("label",{className:"label",children:c||a}),Object(u.jsx)("input",{placeholder:c||a,className:"input ".concat(i),onChange:function(e){return t(e)},value:n||"",type:s,name:a})]}),Boolean(r)&&Object(u.jsx)(F,{message:r})]})}),z=(n(46),function(e){var t=e.type,n=Object(s.useState)({}),a=Object(l.a)(n,2),c=a[0],r=a[1],i=Object(s.useState)({}),b=Object(l.a)(i,2),d=b[0],m=b[1],O=Object(s.useState)(!1),h=Object(l.a)(O,2),p=h[0],x=h[1],f=Object(s.useContext)(j),g=f.setUser,v=f.setIsLoggedIn,_=f.isLoggedIn,k=function(e){e.preventDefault();var t=e.target,n=t.value,s=t.name;d[s]&&m((function(e){return Object(H.a)(Object(H.a)({},e),{},Object(Z.a)({},s,""))})),r((function(e){return Object(H.a)(Object(H.a)({},e),{},Object(Z.a)({},s,n))}))},y=function(){var e=Object(w.a)(N.a.mark((function e(n){var s,a,i,o,l;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),s=J(c,t),a=s.validationAlerts,s.isValid){e.next=5;break}return m(a),e.abrupt("return");case 5:return i=JSON.stringify(c),o="register"===t?B:L,e.prev=7,x(!0),e.next=11,D(C,o,i);case 11:if(l=e.sent,"register"!==t||!l.ok){e.next=17;break}return x(!1),m({success:"User registered successfully!"}),r({}),e.abrupt("return");case 17:if(!l.ok){e.next=24;break}return g(l.user),v(!0),x(!1),e.abrupt("return");case 24:m({message:l.message});case 25:x(!1),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(7),m({message:e.t0.message});case 31:r({});case 32:case"end":return e.stop()}}),e,null,[[7,28]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[_&&Object(u.jsx)(o.a,{to:"/profile"}),Object(u.jsxs)("form",{className:"form",onSubmit:function(e){return y(e)},noValidate:!0,children:[Object(u.jsx)(M,{handleOnChange:k,value:c.email||"",type:"email",name:"email",warning:d.email||""}),Object(u.jsx)(M,{handleOnChange:k,value:c.password||"",type:"password",name:"password",warning:d.password||""}),"register"===t?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(M,{handleOnChange:k,value:c.repeatPassword||"",type:"password",name:"repeatPassword",title:"repeat password",warning:d.repeatPassword||""}),Object(u.jsx)(M,{handleOnChange:k,value:c.name||"",type:"text",name:"name"}),Object(u.jsx)(M,{handleOnChange:k,value:c.lastName||"",type:"text",name:"lastName",title:"last name"})]}):null,Object(u.jsx)("button",{className:"form__button",type:"submit",children:p?Object(u.jsx)(R,{}):"register"===t?"Register":"Log in"})]}),"register"===t&&Boolean(d.success)?Object(u.jsx)(F,{success:!0,message:d.success}):Boolean(d.message)&&Object(u.jsx)(F,{message:d.message})]})}),$=function(){return Object(u.jsxs)(d,{children:[Object(u.jsxs)(V,{children:[Object(u.jsx)("h1",{className:"content-container__title",children:"Log in"}),Object(u.jsx)(z,{})]}),Object(u.jsx)(O,{title:"Home",to:"/"})]})},q=n(22),G=function(e){var t=e.component,n=(e.role,Object(q.a)(e,["component","role"])),a=Object(s.useContext)(j).isLoggedIn;return Object(u.jsx)(o.b,{render:function(){return a?Object(u.jsx)(t,Object(H.a)({},n)):Object(u.jsx)(o.a,{to:"/login"})}})},X=(n(47),function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(""),r=Object(l.a)(c,2),i=r[0],b=r[1],m=Object(s.useContext)(j),h=m.user,p=m.isLoggedIn,x=m.setIsLoggedIn,f=m.setUser,g=m.setUsers,v=function(){var e=Object(w.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.next=3,D(y,U);case 3:(t=e.sent).ok?(x(!1),f(null),g(null)):b(t.message),a(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return p?Object(u.jsxs)(d,{children:[Object(u.jsxs)("div",{className:"profile",children:[i&&Object(u.jsx)(F,{message:i}),h&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"profile__title",children:"Profile"}),Object(u.jsxs)("p",{className:"profile__user",children:[h.name||""," ",h.lastName||""]}),Object(u.jsx)("div",{className:"profile__avatar",children:Object(u.jsx)("div",{className:"profile__role",children:h.role})}),Object(u.jsx)("p",{className:"profile__email",children:h.email}),Object(u.jsx)("div",{className:"profile__buttons",children:Object(u.jsx)("button",{className:"button",onClick:v,children:n?Object(u.jsx)(R,{}):"Log out"})})]})]}),Object(u.jsx)(O,{title:"Home",to:"/"})]}):Object(u.jsx)(o.a,{to:"/login"})}),K=function(){return Object(u.jsxs)(d,{children:[Object(u.jsxs)(V,{children:[Object(u.jsx)("h1",{className:"content-container__title",children:"Sign in"}),Object(u.jsx)(z,{type:"register"})]}),Object(u.jsx)(O,{title:"Home",to:"/"})]})},Q=(n(48),function(e){var t=e.id,n=e.toggleModal,a=Object(s.useState)({}),r=Object(l.a)(a,2),i=r[0],o=r[1],b=Object(s.useState)(""),d=Object(l.a)(b,2),m=d[0],O=d[1],h=Object(s.useState)(""),p=Object(l.a)(h,2),x=p[0],f=p[1],g=Object(s.useState)(!1),v=Object(l.a)(g,2),_=v[0],k=v[1],C=Object(s.useContext)(j).setUsers,S=function(e){e.preventDefault();var t=e.target,n=t.value,s=t.name;o((function(e){return Object(H.a)(Object(H.a)({},e),{},Object(Z.a)({},s,n))}))},L=function(){var e=Object(w.a)(N.a.mark((function e(n){var s,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),O(""),f(""),Boolean(Object.keys(i).length)){e.next=6;break}return O("Nothing to update"),e.abrupt("return");case 6:return s=JSON.stringify(i),e.prev=7,k(!0),e.next=11,D(I,"".concat(E,"?id=").concat(t),s);case 11:(a=e.sent).ok?(f(a.message),D(y,A).then((function(e){return C(e.users)})).catch((function(e){return console.warn(e)}))):O(a.message),k(!1),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(7),console.warn(e.t0);case 19:o({});case 20:case"end":return e.stop()}}),e,null,[[7,16]])})));return function(t){return e.apply(this,arguments)}}(),U=Object(u.jsx)("div",{className:"modal__background",children:Object(u.jsxs)("div",{className:"modal__container",children:[Object(u.jsx)("button",{className:"modal__close-button",onClick:n,children:"X"}),Object(u.jsx)("h2",{className:"modal__title",children:"Edit user"}),Object(u.jsxs)("form",{className:"modal__form",onSubmit:function(e){return L(e)},noValidate:!0,children:[Object(u.jsx)(M,{handleOnChange:S,value:i.name||"",type:"text",name:"name"}),Object(u.jsx)(M,{handleOnChange:S,value:i.lastName||"",type:"text",name:"lastName",title:"last name"}),Object(u.jsx)("div",{className:"input__container",children:Object(u.jsx)("label",{className:"modal__input",children:Object(u.jsxs)("select",{name:"role",className:"modal__select",value:i.role,onChange:S,children:[Object(u.jsx)("option",{className:"modal__select__option",value:"",children:"Choose role for user"}),Object(u.jsx)("option",{className:"modal__select__option",value:"admin",children:"Admin"}),Object(u.jsx)("option",{className:"modal__select__option",value:"user",children:"User"})]})})}),m&&Object(u.jsx)(F,{message:m}),x&&Object(u.jsx)(F,{message:x,success:!0}),Object(u.jsx)("button",{className:"form__button modal_button",type:"submit",children:_?Object(u.jsx)(R,{}):"Change"})]})]})});return Object(c.createPortal)(U,document.querySelector(".modal"))}),W=(n(49),function(e){var t=e.user,n=e.index,a=Object(s.useState)(!1),c=Object(l.a)(a,2),r=c[0],i=c[1],o=Object(s.useContext)(j).setUsers,b=function(){return i((function(e){return!e}))},d=function(){var e=Object(w.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(S,"".concat(P,"?id=").concat(t));case 2:if(!e.sent.ok){e.next=7;break}D(y,A).then((function(e){o(e.users)})).catch((function(e){return console.warn(e)})),e.next=8;break;case 7:return e.abrupt("return");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("li",{className:"list-item",children:[Object(u.jsx)("div",{className:"list-item__number",children:n+1}),Object(u.jsxs)("div",{className:"list-item__wrapper",children:[Object(u.jsxs)("div",{className:"item",children:[Object(u.jsx)("p",{className:"item__title",children:"Name:"})," ",Object(u.jsx)("span",{className:"item__value",children:t.name||"---"})]}),Object(u.jsxs)("div",{className:"item",children:[Object(u.jsx)("p",{className:"item__title",children:"Last name:"})," ",Object(u.jsx)("span",{className:"item__value",children:t.lastName||"---"})]}),Object(u.jsxs)("div",{className:"item",children:[Object(u.jsx)("p",{className:"item__title",children:"Email:"})," ",Object(u.jsx)("span",{className:"item__value",children:t.email})]}),Object(u.jsxs)("div",{className:"item",children:[Object(u.jsx)("p",{className:"item__title",children:"Role:"}),Object(u.jsx)("span",{className:"item__value",children:t.role})]})]}),Object(u.jsxs)("div",{className:"list-item__buttons",children:[Object(u.jsx)("button",{"data-tooltip":"Edit User",className:"button",onClick:b,children:Object(u.jsx)("i",{className:"fas fa-user-edit"})}),Object(u.jsx)("button",{"data-tooltip":"Delete User",className:"button",onClick:function(){return d(t.id)},disabled:"admin"===t.role,children:Object(u.jsx)("i",{className:"fas fa-user-slash"})})]})]}),r&&Object(u.jsx)(Q,{toggleModal:b,id:t.id})]})}),Y=(n(50),function(){var e=Object(s.useContext)(j),t=e.users,n=e.setUsers;return Object(s.useEffect)((function(){D(y,A).then((function(e){(null===e||void 0===e?void 0:e.users)&&n(e.users)})).catch((function(e){return console.warn(e)}))}),[n]),Object(u.jsx)(d,{children:Object(u.jsx)("ul",{className:"users-list",children:t.map((function(e,t){return Object(u.jsx)(W,{index:t,user:e},t)}))})})});var ee=function(){return Object(u.jsxs)(b,{children:[Object(u.jsxs)(i.a,{basename:"/registration-panel",children:[Object(u.jsx)(v,{}),Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{exact:!0,path:"/",component:T}),Object(u.jsx)(o.b,{path:"/profile",component:X}),Object(u.jsx)(o.b,{path:"/login",component:$}),Object(u.jsx)(o.b,{path:"/register",component:K}),Object(u.jsx)(o.b,{path:"/about",component:m}),Object(u.jsx)(G,{path:"/profile",role:"user",component:X}),Object(u.jsx)(G,{path:"/users",role:"admin",component:Y}),Object(u.jsx)(o.b,{path:"*",component:h})]})]}),Object(u.jsx)(p,{})]})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(ee,{})}),document.getElementById("root"))}]),[[51,1,2]]]);
//# sourceMappingURL=main.da48578c.chunk.js.map