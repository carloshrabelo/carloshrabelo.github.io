(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7cJJ":function(e){e.exports=JSON.parse('["Continuous delivery","SCRUM","Kanban","Agile Methodology","SOLID","DRY","TDD","BDD","Functional programming","Web Standards","Atomic Design","Mobile first"]')},Q4pm:function(e){e.exports=JSON.parse('[{"company":"Programming in HTML5 with JavaScript and CSS3 Microsoft","date":"2013","about":"Microsoft Certification, Licença 480"}]')},RXBc:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),a=n.n(o),r=n("9Koi"),i=n("vOnD"),l=n("ma3e"),s=n("ibEc"),c=n("MUpH");function p(){var e=Object(c.a)(["\n    float: none;\n    display: flex;\n    > span{\n      margin-left: 0.5rem;\n      order:2\n    }\n  "]);return p=function(){return e},e}var u=i.d.span.withConfig({displayName:"FloatIcon__Float",componentId:"sc-1hpklxu-0"})(["float:right;height:0.9rem;",""],s.a.lessThan("small")(p())),d=Object(i.d)(l.b).withConfig({displayName:"FloatIcon__Icon",componentId:"sc-1hpklxu-1"})(["color:",";"],(function(e){return e.theme.colors.primary})),m=function(e){var t=e.className,n=e.children;return a.a.createElement(u,{className:t},a.a.createElement("span",null,n," "),a.a.createElement(d,null))},f=Object(i.d)(m).withConfig({displayName:"Period__Capitalize",componentId:"sc-1m68n2h-0"})(["text-transform:capitalize;"]),h=function(e){var t=e.className,n=e.dateShort,o=e.date,i=Object(r.a)(),l=i.i18n,s=i.t,c=function(e,t){return function(n){var o=new Intl.DateTimeFormat(e,{year:"numeric",month:"long"}).format(new Date(n)).split(" ");return t?o[o.length-1]:[o[0],o[o.length-1]].join(" ")}}(l.language,n),p=Array.isArray(o),u=p?o:[o,""],d=u[0],m=u[1],h=c(d),b=m?c(m):s("current");return a.a.createElement(f,{className:t},h,p&&" - "+b)},b=i.d.div.withConfig({displayName:"MyBlock__Block",componentId:"ujv16g-0"})(['position:"relative";']),g=function(e){var t=e.role,n=e.company,o=e.date,r=e.dateShort,i=e.description,l=e.about;return a.a.createElement(b,null,t&&a.a.createElement("h3",null,t),n&&a.a.createElement("strong",null,n),o&&a.a.createElement(h,{date:o,dateShort:r},o),l&&a.a.createElement("div",null,l),i&&a.a.createElement("ul",null,i.map((function(e,t){return a.a.createElement("li",{key:t,dangerouslySetInnerHTML:{__html:e}})}))))};g.defaultProps={dateShort:!1,description:[]};var v=g,y=i.d.section.withConfig({displayName:"Section__Div",componentId:"kokhd7-0"})(["padding:0.5rem 0;&:not(:first-child){border-top:1px dashed rgba(0,0,0,0.2);}"]),E=i.d.h1.withConfig({displayName:"Section__Title",componentId:"kokhd7-1"})(["text-transform:uppercase;"]);v.defaultProps={data:[]};var w=function(e){var t=e.title,n=e.children,o=e.dateShort,r=e.data,i=void 0===r?[]:r;return a.a.createElement(y,null,a.a.createElement(E,null,t),i.map((function(e,t){return a.a.createElement(v,Object.assign({key:t,dateShort:o},e))})),n)},S=function(e){var t,o=Object(r.a)().i18n.language.toLocaleLowerCase(),a=n("kyAT")("./"+e+".json"),i=a;try{if("pt-br"===o||void 0===o)throw new Error;t=n("kyAT")("./"+e+"."+o+".json")}catch(l){}return t&&(i=a.map((function(e,n){return"string"==typeof e?t[n]||e:Object.assign({},e,t[n])}))),console.info(i),i},C=function(){var e=Object(r.a)().t,t=S("education");return a.a.createElement(w,{title:e("formation")},t.map((function(e,t){var n=e.institution,o=e.date,r=e.courses;return a.a.createElement("div",{key:t},o&&a.a.createElement(h,{date:o,dateShort:!0}),a.a.createElement("h3",null,n),r&&a.a.createElement("ul",null,r.map((function(e,t){var n=e.name,o=e.date;return a.a.createElement("li",{key:t},n," ",a.a.createElement(h,{date:o,dateShort:!0}))}))))})))},O=n("vrFN"),x=n("zLVn"),k=i.d.span.withConfig({displayName:"Badge__Div",componentId:"sc-1mryb9d-0"})(["display:inline-block;padding:0.25em 0.4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:0.25rem;flex:1;margin:0 0.25rem 0.25rem;color:#fff;background-color:",";@media print{&{-webkit-print-color-adjust:exact;box-shadow:0 0px 10px "," inset;}}"],(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary})),j=function(e){var t=e.children,n=e.className,o=Object(x.a)(e,["children","className"]);return a.a.createElement(k,Object.assign({className:n},o),t)},I=i.d.div.withConfig({displayName:"flex__Div",componentId:"sc-4z4rip-0"})(["display:flex;flex-wrap:wrap;"]),T=function(e){var t=e.className,n=e.children,o=Object(x.a)(e,["className","children"]);return a.a.createElement(I,Object.assign({className:t},o),n)},D=n("aqT/"),_=n.n(D),N=Object(i.c)(["background-color:#eee;border-radius:2px;box-shadow:0 2px 5px rgba(0,0,0,0.25) inset;@media print{&{-webkit-print-color-adjust:exact;box-shadow:0 0px 40px #ccc inset;}}"]),P=i.d.progress.withConfig({displayName:"Progress",componentId:"alir5i-0"})(["&[value]{"," appearance:none;border:none;color:var(--color-primary);width:100%;&::-moz-progress-bar{background:var(--color-primary);@media print{&{-webkit-print-color-adjust:exact;box-shadow:0 0px 40px var(--color-primary) inset;}}}&::-webkit-progress{&-value{transition:width 2.5s ease-in-out;background:var(--color-primary);@media print{&{-webkit-print-color-adjust:exact;box-shadow:0 0px 40px var(--color-primary) inset;}}}&-bar{","}}}"],N,N),J=function(e){var t=e.className,n=e.children,r=e.value,i=Object(x.a)(e,["className","children","value"]),l=Object(o.useState)(0),s=l[0],c=l[1];return a.a.createElement(_.a,{onChange:function(e){return e&&s!==r&&c(r)}},a.a.createElement(P,Object.assign({value:s,className:t},i),n))},A=n("W2cw"),M=function(e,t,n){void 0===t&&(t="medium"),void 0===n&&(n="greaterThan");var o="string"==typeof e?Object(i.c)([e]):e;return Object(i.c)([""," @media print{","}"],s.a[n](t)(o),o)},R=i.d.span.withConfig({displayName:"pages__Float",componentId:"sc-4r07yd-0"})(["float:right;"]),z=i.d.div.withConfig({displayName:"pages__Container1",componentId:"sc-4r07yd-1"})(["padding:0 ",";",""],(function(e){return e.theme.padding}),M(Object(i.c)(["width:60%;"]))),W=i.d.div.withConfig({displayName:"pages__Container2",componentId:"sc-4r07yd-2"})(["padding:0 ",";",""],(function(e){return e.theme.padding}),M(Object(i.c)(["width:40%;"]))),B=Date.now()-Date.UTC(1992,10,24,3,0,0),L=new Date(B),V=Math.abs(L.getUTCFullYear()-1970),F=i.d.h1.withConfig({displayName:"pages__FullName",componentId:"sc-4r07yd-3"})(["text-align:center;"]),U=i.d.div.withConfig({displayName:"pages__Contato",componentId:"sc-4r07yd-4"})(["display:flex;flex:1;"]),G=i.d.a.withConfig({displayName:"pages__Link",componentId:"sc-4r07yd-5"})(["color:var(--color-text);text-decoration:none;&:hover{color:var(--color-primary);}"]),q=i.d.div.withConfig({displayName:"pages__ContatoWrapper",componentId:"sc-4r07yd-6"})(["> div{margin:0.25rem 0;}",""],M(Object(i.c)(['display:flex;justify-content:"space-between";']))),H=Object(A.a)(Object(i.d)((function(e){var t=e.t,n=e.className;return a.a.createElement("div",{className:n},a.a.createElement(F,null,"Carlos Henrique Rabelo de Oliveira"),a.a.createElement("p",null,a.a.createElement(l.e,null)," ",t("about.nationality"),", ",t("about.relationship"),", ",V," ",t("about.years")),a.a.createElement("p",null,a.a.createElement(l.i,null)," R. Cláudio Soares, 101 - Pinheiros, São Paulo - SP"),a.a.createElement(q,null,a.a.createElement(U,null,a.a.createElement(G,{target:"_blank",href:"https://api.whatsapp.com/send?phone=5561982770330"},a.a.createElement(l.k,null)," +55 (61) 9 8277-0330")),a.a.createElement(U,null,a.a.createElement(G,{href:"mailto:carloshrabelo@hotmail.com"},a.a.createElement(l.a,null)," carloshrabelo@hotmail.com")),a.a.createElement(U,null,a.a.createElement(G,{target:"_blank",href:"https://www.linkedin.com/in/carloshrabelo/"},a.a.createElement(l.g,null)," /carloshrabelo"))))})).withConfig({displayName:"pages__Header",componentId:"sc-4r07yd-7"})(["padding:1rem;border-bottom:1px dashed rgba(0,0,0,0.2);p{margin:0.25rem 0;}svg{fill:",";}@media print{h1{margin:0.5rem 0;}}"],(function(e){return e.theme.colors.primary})));t.default=function(){var e=Object(r.a)().t,t=S("experience"),n=S("projects"),o=S("certificates"),i=S("technologies"),l=S("knowledges");return a.a.createElement(a.a.Fragment,null,a.a.createElement(O.a,{title:e("curriculum")}),a.a.createElement(H,null),a.a.createElement(T,null,a.a.createElement(z,null,a.a.createElement(w,{title:e("professional experience"),data:t}),a.a.createElement(w,{title:e("certificates"),dateShort:!0,data:o}),a.a.createElement(w,{title:e("technologies")},a.a.createElement(T,null,i.map((function(e,t){return a.a.createElement(j,{key:t},e)}))))),a.a.createElement(W,null,a.a.createElement(C,null),a.a.createElement(w,{title:e("languages")},a.a.createElement("div",null,a.a.createElement("p",null,e("portuguese"),a.a.createElement(R,null,e("native")))),a.a.createElement(J,{value:"100",max:"100"}),a.a.createElement("div",null,a.a.createElement("p",null,e("english"),a.a.createElement(R,null," ",e("intermediate"))),a.a.createElement(J,{value:"65",max:"100"}))),a.a.createElement(w,{title:e("projects"),data:n}),a.a.createElement(w,{title:e("knowledges")},a.a.createElement(T,null,l.map((function(e,t){return a.a.createElement(j,{key:t},e)})))))))}},V5sB:function(e){e.exports=JSON.parse('[{"company":"Programming in HTML5 with JavaScript and CSS3 Microsoft","date":"2013","about":"Microsoft Certification, Licença 480"}]')},"aqT/":function(e,t,n){var o;o=function(e,t){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n(5)()},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=function(e,t,n){var o=e.direction,a=e.value;switch(o){case"top":return n.top+a<t.top&&n.bottom>t.bottom&&n.left<t.left&&n.right>t.right;case"left":return n.left+a<t.left&&n.bottom>t.bottom&&n.top<t.top&&n.right>t.right;case"bottom":return n.bottom-a>t.bottom&&n.left<t.left&&n.right>t.right&&n.top<t.top;case"right":return n.right-a>t.right&&n.left<t.left&&n.top<t.top&&n.bottom>t.bottom}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var o=n(1),a=n.n(o),r=n(2),i=n.n(r),l=n(0),s=n.n(l),c=n(3),p=n.n(c);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){function t(e){var n,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,a=m(t).call(this,e),n=!a||"object"!==u(a)&&"function"!=typeof a?f(o):a,b(f(n),"getContainer",(function(){return n.props.containment||window})),b(f(n),"addEventListener",(function(e,t,o,a){var r;n.debounceCheck||(n.debounceCheck={});var i=function(){r=null,n.check()},l={target:e,fn:a>-1?function(){r||(r=setTimeout(i,a||0))}:function(){clearTimeout(r),r=setTimeout(i,o||0)},getLastTimeout:function(){return r}};e.addEventListener(t,l.fn),n.debounceCheck[t]=l})),b(f(n),"startWatching",(function(){n.debounceCheck||n.interval||(n.props.intervalCheck&&(n.interval=setInterval(n.check,n.props.intervalDelay)),n.props.scrollCheck&&n.addEventListener(n.getContainer(),"scroll",n.props.scrollDelay,n.props.scrollThrottle),n.props.resizeCheck&&n.addEventListener(window,"resize",n.props.resizeDelay,n.props.resizeThrottle),!n.props.delayedCall&&n.check())})),b(f(n),"stopWatching",(function(){if(n.debounceCheck)for(var e in n.debounceCheck)if(n.debounceCheck.hasOwnProperty(e)){var t=n.debounceCheck[e];clearTimeout(t.getLastTimeout()),t.target.removeEventListener(e,t.fn),n.debounceCheck[e]=null}n.debounceCheck=null,n.interval&&(n.interval=clearInterval(n.interval))})),b(f(n),"check",(function(){var e,t,o=n.node;if(!o)return n.state;if(e=function(e){return void 0===e.width&&(e.width=e.right-e.left),void 0===e.height&&(e.height=e.bottom-e.top),e}(n.roundRectDown(o.getBoundingClientRect())),n.props.containment){var a=n.props.containment.getBoundingClientRect();t={top:a.top,left:a.left,bottom:a.bottom,right:a.right}}else t={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var r=n.props.offset||{};"object"===u(r)&&(t.top+=r.top||0,t.left+=r.left||0,t.bottom-=r.bottom||0,t.right-=r.right||0);var i={top:e.top>=t.top,left:e.left>=t.left,bottom:e.bottom<=t.bottom,right:e.right<=t.right},l=e.height>0&&e.width>0,s=l&&i.top&&i.left&&i.bottom&&i.right;if(l&&n.props.partialVisibility){var c=e.top<=t.bottom&&e.bottom>=t.top&&e.left<=t.right&&e.right>=t.left;"string"==typeof n.props.partialVisibility&&(c=i[n.props.partialVisibility]),s=n.props.minTopValue?c&&e.top<=t.bottom-n.props.minTopValue:c}"string"==typeof r.direction&&"number"==typeof r.value&&(console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",r.direction,r.value),s=p()(r,e,t));var d=n.state;return n.state.isVisible!==s&&(d={isVisible:s,visibilityRect:i},n.setState(d),n.props.onChange&&n.props.onChange(s)),d})),n.state={isVisible:null,visibilityRect:{}},n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.node=i.a.findDOMNode(this),this.props.active&&this.startWatching()}},{key:"componentWillUnmount",value:function(){this.stopWatching()}},{key:"componentDidUpdate",value:function(e){this.node=i.a.findDOMNode(this),this.props.active&&!e.active?(this.setState({isVisible:null,visibilityRect:{}}),this.startWatching()):this.props.active||this.stopWatching()}},{key:"roundRectDown",value:function(e){return{top:Math.floor(e.top),left:Math.floor(e.left),bottom:Math.floor(e.bottom),right:Math.floor(e.right)}}},{key:"render",value:function(){return this.props.children instanceof Function?this.props.children({isVisible:this.state.isVisible,visibilityRect:this.state.visibilityRect}):a.a.Children.only(this.props.children)}}])&&d(n.prototype,o),r&&d(n,r),t}(a.a.Component);b(g,"defaultProps",{active:!0,partialVisibility:!1,minTopValue:0,scrollCheck:!1,scrollDelay:250,scrollThrottle:-1,resizeCheck:!1,resizeDelay:250,resizeThrottle:-1,intervalCheck:!0,intervalDelay:100,delayedCall:!1,offset:{},containment:null,children:a.a.createElement("span",null)}),b(g,"propTypes",{onChange:s.a.func,active:s.a.bool,partialVisibility:s.a.oneOfType([s.a.bool,s.a.oneOf(["top","right","bottom","left"])]),delayedCall:s.a.bool,offset:s.a.oneOfType([s.a.shape({top:s.a.number,left:s.a.number,bottom:s.a.number,right:s.a.number}),s.a.shape({direction:s.a.oneOf(["top","right","bottom","left"]),value:s.a.number})]),scrollCheck:s.a.bool,scrollDelay:s.a.number,scrollThrottle:s.a.number,resizeCheck:s.a.bool,resizeDelay:s.a.number,resizeThrottle:s.a.number,intervalCheck:s.a.bool,intervalDelay:s.a.number,containment:"undefined"!=typeof window?s.a.instanceOf(window.Element):s.a.any,children:s.a.oneOfType([s.a.element,s.a.func]),minTopValue:s.a.number})},function(e,t,n){"use strict";var o=n(6);function a(){}function r(){}r.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,r,i){if(i!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:a};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])},e.exports=o(n("q1tI"),n("i8i4"))},eNX6:function(e){e.exports=JSON.parse('[{"role":"Ada - PagSeguro","about":"The Ada service platform provides accessible customer information to attendants from different sectors of the PagSeguro company.","description":["Development with React / Redux on NodeJs with modular architecture","Creation / Integration of WebServices in NodeJs."]},{"role":"Biometric Identification (TSE)","about":"Project to combat electoral fraud by means of biometric analyzes.","description":["Customization of OBIEE.","Creation of web applications integrated with OBIEE."]},{"role":"Metroplan","about":"Development of SIGWeb applications integrated with Oracle Apex to provide geospatial information on aulinor and Baixo Cai projects."}]')},hWJS:function(e){e.exports=JSON.parse('[{"institution":"IT Management - Senac","date":["01-01-2011","01-01-2013"]},{"institution":"Escola Técnica de Brasília","courses":[{"name":"Java II - Java for the web","date":"01-01-2011"},{"name":"Java I - Java with Database","date":"01-01-2010"},{"name":"object-oriented programming in Java","date":"01-01-2010"},{"name":"Data modeling with MySQL and Acess","date":"01-01-2010"}]}]')},jRnE:function(e){e.exports=JSON.parse('["HTML5","CSS3","JS","NodeJs","ES6","SASS","LESS","Stylus","React","Jest","VUE","AngularJs","Redux","Webpack","GULP","GRUNT","GIT","SPA","PWA","JQUERY","YARN","Bootstrap","ArcGis JS","OpenLayers 3"]')},kyAT:function(e,t,n){var o={"./certificates.en.json":"V5sB","./certificates.json":"Q4pm","./education.en.json":"hWJS","./education.json":"tXTD","./experience.en.json":"naEg","./experience.json":"nuXs","./knowledges.en.json":"7cJJ","./knowledges.json":"oEKc","./projects.en.json":"eNX6","./projects.json":"qtb/","./technologies.json":"jRnE"};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=r,e.exports=a,a.id="kyAT"},naEg:function(e){e.exports=JSON.parse('[{"role":"Full Stack Developer","description":["Consultancy work, implementation of good practices and code optimization on the Gamifica platform."]},{"role":"Front-end engineer","description":["Creation and implementation of the best solutions to serve the business, always aiming at quality, the experience of members and the sharing of best practices.","Collaborative development of the <a href=\\"https://github.com/juntossomosmais/venice\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"> library of visual components</a>"]},{"role":"Front-end engineer","description":["Development focused on continuous delivery on one of the PagSeguro Service Platforms, used as a basis by the attendants in assisting customers.","Collaborative development of Pagseguro\'s library of visual components."]},{"role":"Web Developer Analyst","description":["Development of SPA systems with Angular / Vue for customers from abroad."]},{"role":"Web Developer / GIS Analyst","description":["Development of integrated solutions to BI systems, with the provision of geographic intelligence through panels.","Customizations of systems to better adapt the visual identity and guarantee a better user experience."]},{"role":"Internship / Web Trainee / GIS","description":["I work with JavaScript map APIs from ESRI and MapViewer (Oracle), providing new ideas and customized views through geographic representations.","Integration of information from BI (OBIEE and Pentaho) with customized applications."]}]')},nuXs:function(e){e.exports=JSON.parse('[{"company":"Gamifica","role":"Full Stack Developer","date":["10-13-2020"],"description":["Trabalho de consultoria, implementação de boas práticas e otimização de código na plataforma Gamifica."]},{"company":"Juntos Somos mais","role":"Engenheiro Front-End","date":["04-01-2020","10-01-2020"],"description":["Criação e implementação das melhores soluções para atender o negócio, visando sempre a qualidade, a experiência dos membros e o compartilhamento das melhores práticas.","Desenvolvimento colaborativo da <a href=\\"https://github.com/juntossomosmais/venice\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">biblioteca de componentes visuais</a>."]},{"company":"PagSeguro","role":"Engenheiro Front-End","date":["07-01-2018","04-01-2020"],"description":["Desenvolvimento focado em entrega contínua numa das Plataformas de Atendimento PagSeguro, utilizada como base pelos atendentes no auxílio aos clientes.","Desenvolvimento colaborativo da biblioteca de componentes visuais da Pagseguro."]},{"company":"AIS Digital","role":"Analista Desenvolvedor Web","date":["01-01-2017","06-01-2018"],"description":["Desenvolvimento de sistemas em SPA com Angular / Vue para clientes do exterior."]},{"company":"CDS - Condomínio de Soluções","role":"Analista Desenvolvedor Web/GIS","date":["07-01-2015","12-01-2016"],"description":["Desenvolvimento de soluções integradas aos sistemas de BI, com a disponibilização de inteligência geográfica através de painéis.","Customizações de sistemas para melhor adequar a identidade visual e garantir melhor experiência ao usuário."]},{"company":"CDS - Condomínio de Soluções","role":"Estágio/Trainee Web / GIS","date":["06-01-2014","07-01-2015"],"description":["Trabalho com APIs de mapas em JavaScript da ESRI e MapViewer (Oracle), provendo novas ideias e visões customizadas através de representações geográficas.","Integração de informações provenientes do BI (OBIEE e Pentaho) com aplicações customizadas."]}]')},oEKc:function(e){e.exports=JSON.parse('["Entrega contínua","SCRUM","Kanban","Metodologia Ágil","SOLID","DRY","TDD","BDD","Programação funcional","Web Standards","Atomic Design","Mobile first","Design System"]')},"qtb/":function(e){e.exports=JSON.parse('[{"role":"Ada - PagSeguro","about":"A plataforma de atendimento Ada disponibiliza informações sensíveis de clientes aos atendentes, vindas de diversos setores da empresa PagSeguro.","description":["Desenvolvimento com React / Redux sobre NodeJs com arquitetura modular","Criação/Integração WebServices em NodeJs."]},{"role":"Identificação Biométrica (TSE)","about":"Projeto de combate a fraudes eleitorais, por meio de análises biométricas.","description":["Customização do OBIEE.","Criação de webapps integradas ao OBIEE."]},{"role":"Metroplan","about":"Desenvolvimento de aplicações SIGWeb integradas com Oracle Apex para disponibilização de informações geoespaciais dos projetos aulinor e baixo cai."}]')},tXTD:function(e){e.exports=JSON.parse('[{"institution":"Gestão de TI - Senac","date":["01-01-2011","01-01-2013"]},{"institution":"Escola Técnica de Brasília","courses":[{"name":"Java II - Java para web","date":"01-01-2011"},{"name":"Java I - Java com Banco de dados","date":"01-01-2010"},{"name":"Programação orientada a objetos em Java","date":"01-01-2010"},{"name":"Modelagem de dados com MySQL e Acess","date":"01-01-2010"}]}]')}}]);
//# sourceMappingURL=component---src-pages-index-js-5a7d282f497c8e2c1439.js.map