"use strict";(self.webpackChunkuamuzi=self.webpackChunkuamuzi||[]).push([[921],{3625:function(e,t,n){n.r(t),n.d(t,{Head:function(){return m},default:function(){return d}});var a=n(7294),o=n(963),s=n(9357),r=n.p+"static/volunteer1-dc8b1c6fb66cf77cfbbb18c1b33bfdf5.png",l=n.p+"static/volunteer2-705fb6e4fdb993daaa81ef311e5796fd.png",i=n.p+"static/volunteer3-a7d03e11533702fa850228f0364de963.png",c=n(6042);n(410);var u=function(){const{0:e,1:t}=(0,a.useState)([]),{0:n,1:o}=(0,a.useState)(""),{0:s,1:r}=(0,a.useState)([]),{0:l,1:i}=(0,a.useState)(""),{0:u,1:m}=(0,a.useState)([]),{0:d,1:p}=(0,a.useState)(""),{0:f,1:h}=(0,a.useState)(""),{0:g,1:v}=(0,a.useState)(null),{0:E,1:y}=(0,a.useState)(500),{0:b,1:N}=(0,a.useState)(""),{0:T,1:x}=(0,a.useState)(""),{0:C,1:I}=(0,a.useState)(""),{0:w,1:O}=(0,a.useState)(""),_="https://www.uamuzi.online";return fetch(`${_}/api/v1/counties`).then((e=>e.json())).then((e=>t(e))),a.createElement("form",{className:"container justify-content-center vol-form",onSubmit:e=>function(e){e.preventDefault();const t={first_name:b,last_name:T,email:C,phone_number:w,country:d,county:n,constituency:l,ward:g,bio:f};console.log(JSON.stringify(t)),fetch("https://uamuzi.site/mails/volunteers",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then((e=>{if(e.ok)return e.json();400==e.status&&e.json().then((e=>{console.log(e.email),c.Am.error(`${e.email[0]}`,{position:c.Am.POSITION.TOP_RIGHT}),c.Am.error(`${e.phone_number[0]}`,{position:c.Am.POSITION.TOP_RIGHT})}))})).then((e=>{c.Am.success(`Success! Thank you for volunteering, ${e.first_name}`,{position:c.Am.POSITION.TOP_RIGHT})})).catch((e=>{console.log(e.status),c.Am.error("An unexpected error occured. Please try again later",{position:c.Am.POSITION.TOP_RIGHT})}))}(e)},a.createElement(c.Ix,null),a.createElement("h2",{className:"event"},"JOIN US"),a.createElement("p",{className:"h3 text-center event-title"},"Be Part Of Uamuzi Foundation Volunteers (UFV)"),a.createElement("p",{className:"p"},"It starts by filling the form below"),a.createElement("div",{className:"d-flex gap-2 py-4"},a.createElement("div",{className:"text-start name1"},a.createElement("label",null,"First Name"),a.createElement("input",{type:"text",placeholder:"First Name",value:b,onChange:e=>N(e.target.value),required:!0})),a.createElement("div",{className:"text-start name2"},a.createElement("label",null,"Last Name"),a.createElement("input",{type:"text",placeholder:"Last Name",value:T,onChange:e=>x(e.target.value),required:!0}))),a.createElement("div",{className:"text-start"},a.createElement("label",null,"Email"),a.createElement("input",{type:"email",placeholder:"you@company.com",value:C,onChange:e=>I(e.target.value),required:!0})),a.createElement("div",{className:"text-start py-4"},a.createElement("label",null,"Phone Number"),a.createElement("input",{type:"tel",placeholder:"Enter your phone number",value:w,onChange:e=>O(e.target.value),required:!0})),a.createElement("div",{className:"d-flex justify-content-start gap-5 text-start text_input py-4 location-selects"},a.createElement("div",{className:"form-group"},a.createElement("label",{htmlFor:"country"},"Country"),a.createElement("select",{className:"form-control",id:"country",name:"country",required:!0,onChange:e=>p(e.target.value)},a.createElement("option",{value:""},"Select"),a.createElement("option",{className:"form-item",value:"Kenya"},"Kenya"))),a.createElement("div",{className:"form-group"},a.createElement("label",{htmlFor:"county"},"County"),a.createElement("select",{className:"form-control",id:"county",name:"County",onChange:t=>function(t){var n;const a=t.target.value;o(a);const s=null===(n=e.find((e=>e.name===a)))||void 0===n?void 0:n.id;fetch(`${_}/api/v1/constituencies/${s}`).then((e=>e.json())).then((e=>r(e)))}(t),required:!0},a.createElement("option",{value:""},"Select"),e&&e.map((e=>a.createElement("option",{key:e.id,className:"form-item",value:e.name},e.name))))),a.createElement("div",{className:"form-group"},a.createElement("label",{htmlFor:"constituency"},"Constituency"),a.createElement("select",{className:"form-control",id:"constituency",required:!0,name:"constituency",onChange:e=>function(e){var t;const n=e.target.value;i(n);const a=null===(t=s.find((e=>e.name===n)))||void 0===t?void 0:t.id;fetch(`${_}/api/v1/wards/${a}`).then((e=>e.json())).then((e=>m(e)))}(e)},a.createElement("option",{value:""},"Select"),s&&s.map((e=>a.createElement("option",{key:e.id,value:e.name},e.name))))),a.createElement("div",{className:"form-group"},a.createElement("label",{htmlFor:"ward"},"Ward"),a.createElement("select",{className:"form-control",id:"ward",required:!0,name:"ward",onChange:e=>v(e.target.value)},a.createElement("option",{value:""},"Select"),u&&u.map((e=>a.createElement("option",{key:e.id,value:e.name},e.name)))))),a.createElement("div",{className:"text"},a.createElement("label",null,"A little bit about yourself ",a.createElement("span",{className:"ml-auto text-danger"},"*",E)),a.createElement("textarea",{rows:6,cols:200,required:!0,className:"px-2 py-3",maxLength:500,onChange:e=>function(e){y(500-e.target.value.length),h(e.target.value)}(e)})),a.createElement("button",{className:"join",type:"submit"},"Join UFV"))};const m=()=>a.createElement(s.Z,{title:"Volunteer"});var d=()=>a.createElement(o.Z,null,a.createElement("div",{className:"container pb-5 pt-3"},a.createElement("div",{className:"container my-4 py-4"},a.createElement("p",{className:"event"},"BE PART OF UFV"),a.createElement("div",{className:"row"},a.createElement("div",{className:"col-12 col-sm-12 col-md-6 col-lg-6 about-col"},a.createElement("p",{className:"h3 text-start event-title"},"Volunteer"),a.createElement("p",{className:"p"},"Uamuzi Foundation Volunteers also known as UFV is a program engaging young people in tackling challenges and transform the pace and nature of development. We benefit both the society at large and the individual by strengthening trust, solidarity and reciprocity among the youth and creating opportunities for participation."),a.createElement("p",{className:"p"},"We offer vital help to people and communities in need, but the benefit is even greater for the volunteer. The right match can help find friends, connect with the community, learn new skills and even advance careers. We work with volunteers who are qualified and highly motivated in developing programs and promoting the value and recognition of volunteerism.")),a.createElement("div",{className:"col-6 col-sm-12 col-md-6 col-lg-6 mx-auto d-flex justify-content-center align-items-center"},a.createElement("img",{src:r,href:"",width:450,height:250,className:""})))),a.createElement("div",{className:"container my-4 py-4"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-6 col-sm-12 col-md-6 col-lg-6 mx-auto d-flex justify-content-center align-items-center"},a.createElement("img",{src:l,href:"",width:400,height:300,className:""})),a.createElement("div",{className:"col-12 col-sm-12 col-md-6 col-lg-6 about-col"},a.createElement("p",{className:"h3 text-start event-title"},"Our Volunteers' Roles"),a.createElement("p",{className:"p py-2"},"Social cohesion and trust are strengthened through individual and collective volunteer action which leads to sustainable outcomes for people, by people."),a.createElement("div",{className:"p-border"},a.createElement("p",null,"01. "),a.createElement("p",null,"Provide technical support and enhance capacity in our areas of focus.")),a.createElement("div",{className:"p-border"},a.createElement("p",null,"02. ")," ",a.createElement("p",null,"Facilitate new spaces for dialogue and action by reaching out to people thus bringing their voices and knowledge into collective action that is crucial in building ownership.")),a.createElement("div",{className:"p-border"},a.createElement("p",null,"03. "),a.createElement("p",null,"Raise awareness to champion changes and inspire others to facilitate durable changes in mindsets and behaviors in our communities.")),a.createElement("div",{className:"p-border"},a.createElement("p",null,"04. "),a.createElement("p",null,"Measure progress on our projects through collecting and analyzing data, providing expertise and support participatory forms of planning, monitoring and evaluation."))))),a.createElement("div",{className:"container my-6 py-4 volunteer"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-12 col-sm-12 col-md-6 col-lg-6 about-col"},a.createElement("p",{className:"event",style:{color:"#fff"}},"VOLUNTEERISM"),a.createElement("p",{className:"h3 text-start event-title"},"Our Volunteers' Roles"),a.createElement("p",{className:"p py-4"},"Our volunteerism strengthens civic engagement and safeguards social inclusion, while deepening solidarity. Here's how you qualify to volunteer"),a.createElement("p",{className:"p d-flex"},a.createElement("span",{style:{paddingRight:"10px"},className:"d-flex"},a.createElement("box-icon",{name:"check-circle",color:"#fff"}))," Should be below the age of 35 years."),a.createElement("p",{className:"p d-flex"},a.createElement("span",{style:{paddingRight:"10px"},className:"d-flex"},a.createElement("box-icon",{name:"check-circle",color:"#fff"})," "),"Should read, write and communicate effectively in one or more local languages."),a.createElement("p",{className:"p d-flex"},a.createElement("span",{style:{paddingRight:"10px"},className:"d-flex"},a.createElement("box-icon",{name:"check-circle",color:"#fff"})),"Should have a strong community presence, local knowledge and networks."),a.createElement("p",{className:"p d-flex"},a.createElement("span",{style:{paddingRight:"10px"},className:"d-flex"},a.createElement("box-icon",{name:"check-circle",color:"#fff"})," "),"Should demonstrate a strong commitment with respect for diversity."),a.createElement("p",{className:"p d-flex"},a.createElement("span",{style:{paddingRight:"10px"},className:"d-flex"},a.createElement("box-icon",{name:"check-circle",color:"#fff"})," "),"Should be interested and committed to the values and principles of volunteering."),a.createElement("p",{className:"p d-flex"},a.createElement("span",{style:{paddingRight:"10px"},className:"d-flex"},a.createElement("box-icon",{name:"check-circle",color:"#fff"})," "),"Higher technical diploma, Bachelor’s or Master’s degree is an added advantage.")),a.createElement("div",{className:"col-6 col-sm-12 col-md-6 col-lg-6 mx-auto d-flex justify-content-center align-items-center"},a.createElement("img",{src:i,href:"",width:375,height:450,className:""})))),a.createElement(u,null)))},410:function(){},6042:function(e,t,n){n.d(t,{Ix:function(){return I},Am:function(){return $}});var a=n(7294);function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}var s=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a};const r=e=>"number"==typeof e&&!isNaN(e),l=e=>"string"==typeof e,i=e=>"function"==typeof e,c=e=>l(e)||i(e)?e:null,u=e=>(0,a.isValidElement)(e)||l(e)||i(e)||r(e);function m(e){let{enter:t,exit:n,appendPosition:o=!1,collapse:s=!0,collapseDuration:r=300}=e;return function(e){let{children:l,position:i,preventExitTransition:c,done:u,nodeRef:m,isIn:d}=e;const p=o?`${t}--${i}`:t,f=o?`${n}--${i}`:n,h=(0,a.useRef)(0);return(0,a.useLayoutEffect)((()=>{const e=m.current,t=p.split(" "),n=a=>{a.target===m.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===h.current&&"animationcancel"!==a.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}),[]),(0,a.useEffect)((()=>{const e=m.current,t=()=>{e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);const{scrollHeight:a,style:o}=e;requestAnimationFrame((()=>{o.minHeight="initial",o.height=a+"px",o.transition=`all ${n}ms`,requestAnimationFrame((()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,u,r):u()};d||(c?t():(h.current=1,e.className+=` ${f}`,e.addEventListener("animationend",t)))}),[d]),a.createElement(a.Fragment,null,l)}}function d(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const p={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter((e=>e!==t));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach((t=>{const n=setTimeout((()=>{t(...[].slice.call(arguments,1))}),0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)}))}},f=e=>{let{theme:t,type:n,...o}=e;return a.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...o})},h={info:function(e){return a.createElement(f,{...e},a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return a.createElement(f,{...e},a.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return a.createElement(f,{...e},a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return a.createElement(f,{...e},a.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return a.createElement("div",{className:"Toastify__spinner"})}};function g(e){const[,t]=(0,a.useReducer)((e=>e+1),0),[n,o]=(0,a.useState)([]),s=(0,a.useRef)(null),m=(0,a.useRef)(new Map).current,f=e=>-1!==n.indexOf(e),g=(0,a.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:f,getToast:e=>m.get(e)}).current;function v(e){let{containerId:t}=e;const{limit:n}=g.props;!n||t&&g.containerId!==t||(g.count-=g.queue.length,g.queue=[])}function E(e){o((t=>null==e?[]:t.filter((t=>t!==e))))}function y(){const{toastContent:e,toastProps:t,staleId:n}=g.queue.shift();N(e,t,n)}function b(e,n){let{delay:o,staleId:f,...v}=n;if(!u(e)||function(e){return!s.current||g.props.enableMultiContainer&&e.containerId!==g.props.containerId||m.has(e.toastId)&&null==e.updateId}(v))return;const{toastId:b,updateId:T,data:x}=v,{props:C}=g,I=()=>E(b),w=null==T;w&&g.count++;const O={...C,style:C.toastStyle,key:g.toastKey++,...Object.fromEntries(Object.entries(v).filter((e=>{let[t,n]=e;return null!=n}))),toastId:b,updateId:T,data:x,closeToast:I,isIn:!1,className:c(v.className||C.toastClassName),bodyClassName:c(v.bodyClassName||C.bodyClassName),progressClassName:c(v.progressClassName||C.progressClassName),autoClose:!v.isLoading&&(_=v.autoClose,R=C.autoClose,!1===_||r(_)&&_>0?_:R),deleteToast(){const e=d(m.get(b),"removed");m.delete(b),p.emit(4,e);const n=g.queue.length;if(g.count=null==b?g.count-g.displayedToast:g.count-1,g.count<0&&(g.count=0),n>0){const e=null==b?g.props.limit:1;if(1===n||1===e)g.displayedToast++,y();else{const t=e>n?n:e;g.displayedToast=t;for(let e=0;e<t;e++)y()}}else t()}};var _,R;O.iconOut=function(e){let{theme:t,type:n,isLoading:o,icon:s}=e,c=null;const u={theme:t,type:n};return!1===s||(i(s)?c=s(u):(0,a.isValidElement)(s)?c=(0,a.cloneElement)(s,u):l(s)||r(s)?c=s:o?c=h.spinner():(e=>e in h)(n)&&(c=h[n](u))),c}(O),i(v.onOpen)&&(O.onOpen=v.onOpen),i(v.onClose)&&(O.onClose=v.onClose),O.closeButton=C.closeButton,!1===v.closeButton||u(v.closeButton)?O.closeButton=v.closeButton:!0===v.closeButton&&(O.closeButton=!u(C.closeButton)||C.closeButton);let L=e;(0,a.isValidElement)(e)&&!l(e.type)?L=(0,a.cloneElement)(e,{closeToast:I,toastProps:O,data:x}):i(e)&&(L=e({closeToast:I,toastProps:O,data:x})),C.limit&&C.limit>0&&g.count>C.limit&&w?g.queue.push({toastContent:L,toastProps:O,staleId:f}):r(o)?setTimeout((()=>{N(L,O,f)}),o):N(L,O,f)}function N(e,t,n){const{toastId:a}=t;n&&m.delete(n);const s={content:e,props:t};m.set(a,s),o((e=>[...e,a].filter((e=>e!==n)))),p.emit(4,d(s,null==s.props.updateId?"added":"updated"))}return(0,a.useEffect)((()=>(g.containerId=e.containerId,p.cancelEmit(3).on(0,b).on(1,(e=>s.current&&E(e))).on(5,v).emit(2,g),()=>{m.clear(),p.emit(3,g)})),[]),(0,a.useEffect)((()=>{g.props=e,g.isToastActive=f,g.displayedToast=n.length})),{getToastToRender:function(t){const n=new Map,a=Array.from(m.values());return e.newestOnTop&&a.reverse(),a.forEach((e=>{const{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(e=>t(e[0],e[1])))},containerRef:s,isToastActive:f}}function v(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function E(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function y(e){const[t,n]=(0,a.useState)(!1),[o,s]=(0,a.useState)(!1),r=(0,a.useRef)(null),l=(0,a.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,c=(0,a.useRef)(e),{autoClose:u,pauseOnHover:m,closeToast:d,onClick:p,closeOnClick:f}=e;function h(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),l.didMove=!1,document.addEventListener("mousemove",N),document.addEventListener("mouseup",T),document.addEventListener("touchmove",N),document.addEventListener("touchend",T);const n=r.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=n.getBoundingClientRect(),n.style.transition="",l.x=v(t.nativeEvent),l.y=E(t.nativeEvent),"x"===e.draggableDirection?(l.start=l.x,l.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(l.start=l.y,l.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function g(t){if(l.boundingRect){const{top:n,bottom:a,left:o,right:s}=l.boundingRect;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&l.x>=o&&l.x<=s&&l.y>=n&&l.y<=a?b():y()}}function y(){n(!0)}function b(){n(!1)}function N(n){const a=r.current;l.canDrag&&a&&(l.didMove=!0,t&&b(),l.x=v(n),l.y=E(n),l.delta="x"===e.draggableDirection?l.x-l.start:l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),a.style.transform=`translate${e.draggableDirection}(${l.delta}px)`,a.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function T(){document.removeEventListener("mousemove",N),document.removeEventListener("mouseup",T),document.removeEventListener("touchmove",N),document.removeEventListener("touchend",T);const t=r.current;if(l.canDrag&&l.didMove&&t){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return s(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform=`translate${e.draggableDirection}(0)`,t.style.opacity="1"}}(0,a.useEffect)((()=>{c.current=e})),(0,a.useEffect)((()=>(r.current&&r.current.addEventListener("d",y,{once:!0}),i(e.onOpen)&&e.onOpen((0,a.isValidElement)(e.children)&&e.children.props),()=>{const e=c.current;i(e.onClose)&&e.onClose((0,a.isValidElement)(e.children)&&e.children.props)})),[]),(0,a.useEffect)((()=>(e.pauseOnFocusLoss&&(document.hasFocus()||b(),window.addEventListener("focus",y),window.addEventListener("blur",b)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",y),window.removeEventListener("blur",b))})),[e.pauseOnFocusLoss]);const x={onMouseDown:h,onTouchStart:h,onMouseUp:g,onTouchEnd:g};return u&&m&&(x.onMouseEnter=b,x.onMouseLeave=y),f&&(x.onClick=e=>{p&&p(e),l.canCloseOnClick&&d()}),{playToast:y,pauseToast:b,isRunning:t,preventExitTransition:o,toastRef:r,eventHandlers:x}}function b(e){let{closeToast:t,theme:n,ariaLabel:o="close"}=e;return a.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":o},a.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function N(e){let{delay:t,isRunning:n,closeToast:o,type:r="default",hide:l,className:c,style:u,controlledProgress:m,progress:d,rtl:p,isIn:f,theme:h}=e;const g=l||m&&0===d,v={...u,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:g?0:1};m&&(v.transform=`scaleX(${d})`);const E=s("Toastify__progress-bar",m?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${h}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":p}),y=i(c)?c({rtl:p,type:r,defaultClassName:E}):s(E,c);return a.createElement("div",{role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:y,style:v,[m&&d>=1?"onTransitionEnd":"onAnimationEnd"]:m&&d<1?null:()=>{f&&o()}})}const T=e=>{const{isRunning:t,preventExitTransition:n,toastRef:o,eventHandlers:r}=y(e),{closeButton:l,children:c,autoClose:u,onClick:m,type:d,hideProgressBar:p,closeToast:f,transition:h,position:g,className:v,style:E,bodyClassName:T,bodyStyle:x,progressClassName:C,progressStyle:I,updateId:w,role:O,progress:_,rtl:R,toastId:L,deleteToast:S,isIn:k,isLoading:P,iconOut:A,closeOnClick:$,theme:M}=e,F=s("Toastify__toast",`Toastify__toast-theme--${M}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":R},{"Toastify__toast--close-on-click":$}),z=i(v)?v({rtl:R,position:g,type:d,defaultClassName:F}):s(F,v),B=!!_||!u,D={closeToast:f,type:d,theme:M};let q=null;return!1===l||(q=i(l)?l(D):(0,a.isValidElement)(l)?(0,a.cloneElement)(l,D):b(D)),a.createElement(h,{isIn:k,done:S,position:g,preventExitTransition:n,nodeRef:o},a.createElement("div",{id:L,onClick:m,className:z,...r,style:E,ref:o},a.createElement("div",{...k&&{role:O},className:i(T)?T({type:d}):s("Toastify__toast-body",T),style:x},null!=A&&a.createElement("div",{className:s("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!P})},A),a.createElement("div",null,c)),q,a.createElement(N,{...w&&!B?{key:`pb-${w}`}:{},rtl:R,theme:M,delay:u,isRunning:t,isIn:k,closeToast:f,hide:p,type:d,style:I,className:C,controlledProgress:B,progress:_||0})))},x=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},C=m(x("bounce",!0)),I=(m(x("slide",!0)),m(x("zoom")),m(x("flip")),(0,a.forwardRef)(((e,t)=>{const{getToastToRender:n,containerRef:o,isToastActive:r}=g(e),{className:l,style:u,rtl:m,containerId:d}=e;function p(e){const t=s("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":m});return i(l)?l({position:e,rtl:m,defaultClassName:t}):s(t,c(l))}return(0,a.useEffect)((()=>{t&&(t.current=o.current)}),[]),a.createElement("div",{ref:o,className:"Toastify",id:d},n(((e,t)=>{const n=t.length?{...u}:{...u,pointerEvents:"none"};return a.createElement("div",{className:p(e),style:n,key:`container-${e}`},t.map(((e,n)=>{let{content:o,props:s}=e;return a.createElement(T,{...s,isIn:r(s.toastId),style:{...s.style,"--nth":n+1,"--len":t.length},key:`toast-${s.key}`},o)})))})))})));I.displayName="ToastContainer",I.defaultProps={position:"top-right",transition:C,autoClose:5e3,closeButton:b,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let w,O=new Map,_=[],R=1;function L(){return""+R++}function S(e){return e&&(l(e.toastId)||r(e.toastId))?e.toastId:L()}function k(e,t){return O.size>0?p.emit(0,e,t):_.push({content:e,options:t}),t.toastId}function P(e,t){return{...t,type:t&&t.type||e,toastId:S(t)}}function A(e){return(t,n)=>k(t,P(e,n))}function $(e,t){return k(e,P("default",t))}$.loading=(e,t)=>k(e,P("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),$.promise=function(e,t,n){let a,{pending:o,error:s,success:r}=t;o&&(a=l(o)?$.loading(o,n):$.loading(o.render,{...n,...o}));const c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(e,t,o)=>{if(null==t)return void $.dismiss(a);const s={type:e,...c,...n,data:o},r=l(t)?{render:t}:t;return a?$.update(a,{...s,...r}):$(r.render,{...s,...r}),o},m=i(e)?e():e;return m.then((e=>u("success",r,e))).catch((e=>u("error",s,e))),m},$.success=A("success"),$.info=A("info"),$.error=A("error"),$.warning=A("warning"),$.warn=$.warning,$.dark=(e,t)=>k(e,P("default",{theme:"dark",...t})),$.dismiss=e=>{O.size>0?p.emit(1,e):_=_.filter((t=>null!=e&&t.options.toastId!==e))},$.clearWaitingQueue=function(e){return void 0===e&&(e={}),p.emit(5,e)},$.isActive=e=>{let t=!1;return O.forEach((n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},$.update=function(e,t){void 0===t&&(t={}),setTimeout((()=>{const n=function(e,t){let{containerId:n}=t;const a=O.get(n||w);return a&&a.getToast(e)}(e,t);if(n){const{props:a,content:o}=n,s={delay:100,...a,...t,toastId:t.toastId||e,updateId:L()};s.toastId!==e&&(s.staleId=e);const r=s.render||o;delete s.render,k(r,s)}}),0)},$.done=e=>{$.update(e,{progress:1})},$.onChange=e=>(p.on(4,e),()=>{p.off(4,e)}),$.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},$.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},p.on(2,(e=>{w=e.containerId||e,O.set(w,e),_.forEach((e=>{p.emit(0,e.content,e.options)})),_=[]})).on(3,(e=>{O.delete(e.containerId||e),0===O.size&&p.off(0).off(1).off(5)}))}}]);
//# sourceMappingURL=component---src-pages-volunteers-js-c4da41ae2db5d0fbb449.js.map