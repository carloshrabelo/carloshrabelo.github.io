(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("9Koi"),i=n("vOnD"),l=n("ma3e"),c=n("ibEc"),s=n("MUpH");function u(){var e=Object(s.a)(["\n    float: none;\n    display: flex;\n    > span{\n      margin-left: 0.5rem;\n      order:2\n    }\n  "]);return u=function(){return e},e}var p=i.d.span.withConfig({displayName:"FloatIcon__Float",componentId:"sc-1hpklxu-0"})(["float:right;height:0.9rem;",""],c.a.lessThan("small")(u())),m=Object(i.d)(l.b).withConfig({displayName:"FloatIcon__Icon",componentId:"sc-1hpklxu-1"})(["color:",";"],(function(e){return e.theme.colors.primary})),d=function(e){var t=e.className,n=e.children;return a.a.createElement(p,{className:t},a.a.createElement("span",null,n," "),a.a.createElement(m,null))},f=Object(i.d)(d).withConfig({displayName:"Period__Capitalize",componentId:"sc-1m68n2h-0"})(["text-transform:capitalize;"]),h=function(e){var t=e.className,n=e.dateShort,r=e.date,i=Object(o.a)(),l=i.i18n,c=i.t,s=function(e,t){return function(n){var r=new Intl.DateTimeFormat(e,{year:"numeric",month:"long"}).format(new Date(n)).split(" ");return t?r[r.length-1]:[r[0],r[r.length-1]].join(" ")}}(l.language,n),u=Array.isArray(r),p=u?r:[r,""],m=p[0],d=p[1],h=s(m),b=d?s(d):c("current");return a.a.createElement(f,{className:t},h,u&&" - "+b)},b=n("zLVn"),g=i.d.span.withConfig({displayName:"Badge__Div",componentId:"sc-1mryb9d-0"})(["display:inline-block;padding:0.25em 0.4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:0.25rem;flex:1;margin:0 0.25rem 0.25rem;color:#fff;background-color:",";@media print{&{-webkit-print-color-adjust:exact;box-shadow:0 0px 10px "," inset;}}"],(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary})),y=function(e){var t=e.children,n=e.className,r=Object(b.a)(e,["children","className"]);return a.a.createElement(g,Object.assign({className:n},r),t)},v=i.d.div.withConfig({displayName:"MyBlock__Block",componentId:"ujv16g-0"})(['position:"relative";']),w=function(e){var t=e.role,n=e.company,r=e.date,o=e.dateShort,i=e.description,l=e.about,c=e.technologies;return a.a.createElement(v,null,t&&a.a.createElement("h3",null,t),n&&a.a.createElement("strong",null,n),r&&a.a.createElement(h,{date:r,dateShort:o},r),l&&a.a.createElement("div",null,l),i&&a.a.createElement("ul",{style:{marginBottom:"0.5rem"}},i.map((function(e,t){return a.a.createElement("li",{key:t,dangerouslySetInnerHTML:{__html:e}})}))),c&&c.map((function(e,t){return a.a.createElement(y,{key:t},e)})))};w.defaultProps={dateShort:!1,description:[]};var E=w,k=i.d.section.withConfig({displayName:"Section__Div",componentId:"kokhd7-0"})(["padding:0.5rem 0;&:not(:first-child){border-top:1px dashed rgba(0,0,0,0.2);}"]),O=i.d.h1.withConfig({displayName:"Section__Title",componentId:"kokhd7-1"})(["text-transform:uppercase;"]);E.defaultProps={data:[]};var C=function(e){var t=e.title,n=e.children,r=e.dateShort,o=e.data,i=void 0===o?[]:o;return a.a.createElement(k,null,a.a.createElement(O,null,t),i.map((function(e,t){return a.a.createElement(E,Object.assign({key:t,dateShort:r},e))})),n)},_=n("KzvB"),x=function(){var e=Object(o.a)().t,t=Object(_.a)("education");return a.a.createElement(C,{title:e("formation")},t.map((function(e,t){var n=e.institution,r=e.date,o=e.courses;return a.a.createElement("div",{key:t},r&&a.a.createElement(h,{date:r,dateShort:!0}),a.a.createElement("h3",null,n),o&&a.a.createElement("ul",null,o.map((function(e,t){var n=e.name,r=e.date;return a.a.createElement("li",{key:t},n," ",a.a.createElement(h,{date:r,dateShort:!0}))}))))})))},j=n("vrFN"),T=i.d.div.withConfig({displayName:"flex__Div",componentId:"sc-4z4rip-0"})(["display:flex;flex-wrap:wrap;"]),N=function(e){var t=e.className,n=e.children,r=Object(b.a)(e,["className","children"]);return a.a.createElement(T,Object.assign({className:t},r),n)},I=n("aqT/"),S=n.n(I),D=Object(i.c)(["background-color:#eee;border-radius:2px;box-shadow:0 2px 5px rgba(0,0,0,0.25) inset;@media print{&{-webkit-print-color-adjust:exact;box-shadow:0 0px 40px #ccc inset;}}"]),P=i.d.progress.withConfig({displayName:"Progress",componentId:"alir5i-0"})(["&[value]{"," appearance:none;border:none;color:var(--color-primary);width:100%;&::-moz-progress-bar{background:var(--color-primary);@media print{&{-webkit-print-color-adjust:exact;box-shadow:0 0px 40px var(--color-primary) inset;}}}&::-webkit-progress{&-value{transition:width 2.5s ease-in-out;background:var(--color-primary);@media print{&{-webkit-print-color-adjust:exact;box-shadow:0 0px 40px var(--color-primary) inset;}}}&-bar{","}}}"],D,D),z=function(e){var t=e.className,n=e.children,o=e.value,i=Object(b.a)(e,["className","children","value"]),l=Object(r.useState)(0),c=l[0],s=l[1];return a.a.createElement(S.a,{onChange:function(e){return e&&c!==o&&s(o)}},a.a.createElement(P,Object.assign({value:c,className:t},i),n))},R=n("W2cw"),V=function(e,t,n){void 0===t&&(t="medium"),void 0===n&&(n="greaterThan");var r="string"==typeof e?Object(i.c)([e]):e;return Object(i.c)([""," @media print{","}"],c.a[n](t)(r),r)},M=i.d.span.withConfig({displayName:"pages__Float",componentId:"sc-4r07yd-0"})(["float:right;"]),W=i.d.div.withConfig({displayName:"pages__Container1",componentId:"sc-4r07yd-1"})(["padding:0 ",";",""],(function(e){return e.theme.padding}),V(Object(i.c)(["width:55%;"]))),L=i.d.div.withConfig({displayName:"pages__Container2",componentId:"sc-4r07yd-2"})(["padding:0 ",";",""],(function(e){return e.theme.padding}),V(Object(i.c)(["width:45%;"]))),B=Date.now()-Date.UTC(1992,10,24,3,0,0),F=(new Date(B),i.d.h1.withConfig({displayName:"pages__FullName",componentId:"sc-4r07yd-3"})(["text-align:center;"])),H=i.d.div.withConfig({displayName:"pages__Contato",componentId:"sc-4r07yd-4"})(["display:flex;flex:1;"]),q=i.d.a.withConfig({displayName:"pages__Link",componentId:"sc-4r07yd-5"})(["color:var(--color-text);text-decoration:none;&:hover{color:var(--color-primary);}"]),U=i.d.div.withConfig({displayName:"pages__ContatoWrapper",componentId:"sc-4r07yd-6"})(["> div{margin:0.25rem 0;}",""],V(Object(i.c)(['display:flex;justify-content:"space-between";']))),A=Object(R.a)(Object(i.d)((function(e){e.t;var t=e.className,n=Object(_.a)("contacts");return a.a.createElement("div",{className:t},a.a.createElement(F,null,"Carlos Henrique Rabelo de Oliveira"),a.a.createElement(U,null,a.a.createElement(H,null,a.a.createElement(q,{target:"_blank",href:"https://api.whatsapp.com/send?phone="+n.phone},a.a.createElement(l.j,null)," ",n["masked-phone"])),a.a.createElement(H,null,a.a.createElement(q,{href:"mailto:"+n.mail},a.a.createElement(l.a,null)," ",n.mail)),a.a.createElement(H,null,a.a.createElement(q,{target:"_blank",href:"https://github.com/"+n.github+"/"},a.a.createElement(l.e,null)," ",n.github)),a.a.createElement(H,null,a.a.createElement(q,{target:"_blank",href:"https://www.linkedin.com/in/"+n.linkedin+"/"},a.a.createElement(l.g,null)," ",n.linkedin))))})).withConfig({displayName:"pages__Header",componentId:"sc-4r07yd-7"})(["padding:1rem;border-bottom:1px dashed rgba(0,0,0,0.2);p{margin:0.25rem 0;}svg{fill:",";}@media print{h1{margin:0.5rem 0;}}"],(function(e){return e.theme.colors.primary})));t.default=function(){var e=Object(o.a)().t,t=Object(_.a)("experience"),n=Object(_.a)("projects"),r=(Object(_.a)("technologies"),Object(_.a)("knowledges"));return a.a.createElement(a.a.Fragment,null,a.a.createElement(j.a,{title:e("curriculum")}),a.a.createElement(A,null),a.a.createElement(N,null,a.a.createElement(W,null,a.a.createElement(C,{title:e("professional experience"),data:t})),a.a.createElement(L,null,a.a.createElement(x,null),a.a.createElement(C,{title:e("languages")},a.a.createElement("div",null,a.a.createElement("p",{style:{marginBottom:"0",marginTop:"0.5rem"}},e("portuguese"),a.a.createElement(M,null,e("native")))),a.a.createElement(z,{value:"100",max:"100"}),a.a.createElement("div",null,a.a.createElement("p",{style:{marginBottom:"0",marginTop:"0.5rem"}},e("english"),a.a.createElement(M,null," ",e("intermediate"))),a.a.createElement(z,{value:"65",max:"100"}))),a.a.createElement(C,{title:e("projects"),data:n}),a.a.createElement(C,{title:e("knowledges")},a.a.createElement(N,null,r.map((function(e,t){return a.a.createElement(y,{key:t},e)})))))))}},"aqT/":function(e,t,n){var r;r=function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n(5)()},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=function(e,t,n){var r=e.direction,a=e.value;switch(r){case"top":return n.top+a<t.top&&n.bottom>t.bottom&&n.left<t.left&&n.right>t.right;case"left":return n.left+a<t.left&&n.bottom>t.bottom&&n.top<t.top&&n.right>t.right;case"bottom":return n.bottom-a>t.bottom&&n.left<t.left&&n.right>t.right&&n.top<t.top;case"right":return n.right-a>t.right&&n.left<t.left&&n.top<t.top&&n.bottom>t.bottom}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var r=n(1),a=n.n(r),o=n(2),i=n.n(o),l=n(0),c=n.n(l),s=n(3),u=n.n(s);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=d(t).call(this,e),n=!a||"object"!==p(a)&&"function"!=typeof a?f(r):a,b(f(n),"getContainer",(function(){return n.props.containment||window})),b(f(n),"addEventListener",(function(e,t,r,a){var o;n.debounceCheck||(n.debounceCheck={});var i=function(){o=null,n.check()},l={target:e,fn:a>-1?function(){o||(o=setTimeout(i,a||0))}:function(){clearTimeout(o),o=setTimeout(i,r||0)},getLastTimeout:function(){return o}};e.addEventListener(t,l.fn),n.debounceCheck[t]=l})),b(f(n),"startWatching",(function(){n.debounceCheck||n.interval||(n.props.intervalCheck&&(n.interval=setInterval(n.check,n.props.intervalDelay)),n.props.scrollCheck&&n.addEventListener(n.getContainer(),"scroll",n.props.scrollDelay,n.props.scrollThrottle),n.props.resizeCheck&&n.addEventListener(window,"resize",n.props.resizeDelay,n.props.resizeThrottle),!n.props.delayedCall&&n.check())})),b(f(n),"stopWatching",(function(){if(n.debounceCheck)for(var e in n.debounceCheck)if(n.debounceCheck.hasOwnProperty(e)){var t=n.debounceCheck[e];clearTimeout(t.getLastTimeout()),t.target.removeEventListener(e,t.fn),n.debounceCheck[e]=null}n.debounceCheck=null,n.interval&&(n.interval=clearInterval(n.interval))})),b(f(n),"check",(function(){var e,t,r=n.node;if(!r)return n.state;if(e=function(e){return void 0===e.width&&(e.width=e.right-e.left),void 0===e.height&&(e.height=e.bottom-e.top),e}(n.roundRectDown(r.getBoundingClientRect())),n.props.containment){var a=n.props.containment.getBoundingClientRect();t={top:a.top,left:a.left,bottom:a.bottom,right:a.right}}else t={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var o=n.props.offset||{};"object"===p(o)&&(t.top+=o.top||0,t.left+=o.left||0,t.bottom-=o.bottom||0,t.right-=o.right||0);var i={top:e.top>=t.top,left:e.left>=t.left,bottom:e.bottom<=t.bottom,right:e.right<=t.right},l=e.height>0&&e.width>0,c=l&&i.top&&i.left&&i.bottom&&i.right;if(l&&n.props.partialVisibility){var s=e.top<=t.bottom&&e.bottom>=t.top&&e.left<=t.right&&e.right>=t.left;"string"==typeof n.props.partialVisibility&&(s=i[n.props.partialVisibility]),c=n.props.minTopValue?s&&e.top<=t.bottom-n.props.minTopValue:s}"string"==typeof o.direction&&"number"==typeof o.value&&(console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",o.direction,o.value),c=u()(o,e,t));var m=n.state;return n.state.isVisible!==c&&(m={isVisible:c,visibilityRect:i},n.setState(m),n.props.onChange&&n.props.onChange(c)),m})),n.state={isVisible:null,visibilityRect:{}},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.node=i.a.findDOMNode(this),this.props.active&&this.startWatching()}},{key:"componentWillUnmount",value:function(){this.stopWatching()}},{key:"componentDidUpdate",value:function(e){this.node=i.a.findDOMNode(this),this.props.active&&!e.active?(this.setState({isVisible:null,visibilityRect:{}}),this.startWatching()):this.props.active||this.stopWatching()}},{key:"roundRectDown",value:function(e){return{top:Math.floor(e.top),left:Math.floor(e.left),bottom:Math.floor(e.bottom),right:Math.floor(e.right)}}},{key:"render",value:function(){return this.props.children instanceof Function?this.props.children({isVisible:this.state.isVisible,visibilityRect:this.state.visibilityRect}):a.a.Children.only(this.props.children)}}])&&m(n.prototype,r),o&&m(n,o),t}(a.a.Component);b(g,"defaultProps",{active:!0,partialVisibility:!1,minTopValue:0,scrollCheck:!1,scrollDelay:250,scrollThrottle:-1,resizeCheck:!1,resizeDelay:250,resizeThrottle:-1,intervalCheck:!0,intervalDelay:100,delayedCall:!1,offset:{},containment:null,children:a.a.createElement("span",null)}),b(g,"propTypes",{onChange:c.a.func,active:c.a.bool,partialVisibility:c.a.oneOfType([c.a.bool,c.a.oneOf(["top","right","bottom","left"])]),delayedCall:c.a.bool,offset:c.a.oneOfType([c.a.shape({top:c.a.number,left:c.a.number,bottom:c.a.number,right:c.a.number}),c.a.shape({direction:c.a.oneOf(["top","right","bottom","left"]),value:c.a.number})]),scrollCheck:c.a.bool,scrollDelay:c.a.number,scrollThrottle:c.a.number,resizeCheck:c.a.bool,resizeDelay:c.a.number,resizeThrottle:c.a.number,intervalCheck:c.a.bool,intervalDelay:c.a.number,containment:"undefined"!=typeof window?c.a.instanceOf(window.Element):c.a.any,children:c.a.oneOfType([c.a.element,c.a.func]),minTopValue:c.a.number})},function(e,t,n){"use strict";var r=n(6);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])},e.exports=r(n("q1tI"),n("i8i4"))}}]);
//# sourceMappingURL=component---src-pages-index-js-ade27a5e4efae52829fb.js.map