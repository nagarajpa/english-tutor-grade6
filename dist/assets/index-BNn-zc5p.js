function Yc(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function Qc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tl={exports:{}},yo={},El={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ar=Symbol.for("react.element"),Kc=Symbol.for("react.portal"),Jc=Symbol.for("react.fragment"),Xc=Symbol.for("react.strict_mode"),Zc=Symbol.for("react.profiler"),ed=Symbol.for("react.provider"),nd=Symbol.for("react.context"),td=Symbol.for("react.forward_ref"),rd=Symbol.for("react.suspense"),od=Symbol.for("react.memo"),id=Symbol.for("react.lazy"),sa=Symbol.iterator;function sd(e){return e===null||typeof e!="object"?null:(e=sa&&e[sa]||e["@@iterator"],typeof e=="function"?e:null)}var bl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cl=Object.assign,Il={};function mt(e,n,t){this.props=e,this.context=n,this.refs=Il,this.updater=t||bl}mt.prototype.isReactComponent={};mt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};mt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Al(){}Al.prototype=mt.prototype;function ss(e,n,t){this.props=e,this.context=n,this.refs=Il,this.updater=t||bl}var as=ss.prototype=new Al;as.constructor=ss;Cl(as,mt.prototype);as.isPureReactComponent=!0;var aa=Array.isArray,Pl=Object.prototype.hasOwnProperty,ls={current:null},Nl={key:!0,ref:!0,__self:!0,__source:!0};function Rl(e,n,t){var r,o={},i=null,s=null;if(n!=null)for(r in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(i=""+n.key),n)Pl.call(n,r)&&!Nl.hasOwnProperty(r)&&(o[r]=n[r]);var a=arguments.length-2;if(a===1)o.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:ar,type:e,key:i,ref:s,props:o,_owner:ls.current}}function ad(e,n){return{$$typeof:ar,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function us(e){return typeof e=="object"&&e!==null&&e.$$typeof===ar}function ld(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var la=/\/+/g;function qo(e,n){return typeof e=="object"&&e!==null&&e.key!=null?ld(""+e.key):n.toString(36)}function Or(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ar:case Kc:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+qo(s,0):r,aa(o)?(t="",e!=null&&(t=e.replace(la,"$&/")+"/"),Or(o,n,t,"",function(u){return u})):o!=null&&(us(o)&&(o=ad(o,t+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(la,"$&/")+"/")+e)),n.push(o)),1;if(s=0,r=r===""?".":r+":",aa(e))for(var a=0;a<e.length;a++){i=e[a];var l=r+qo(i,a);s+=Or(i,n,t,l,o)}else if(l=sd(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=r+qo(i,a++),s+=Or(i,n,t,l,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function mr(e,n,t){if(e==null)return e;var r=[],o=0;return Or(e,r,"","",function(i){return n.call(t,i,o++)}),r}function ud(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Wr={transition:null},cd={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Wr,ReactCurrentOwner:ls};function Ml(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:mr,forEach:function(e,n,t){mr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return mr(e,function(){n++}),n},toArray:function(e){return mr(e,function(n){return n})||[]},only:function(e){if(!us(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=mt;O.Fragment=Jc;O.Profiler=Zc;O.PureComponent=ss;O.StrictMode=Xc;O.Suspense=rd;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cd;O.act=Ml;O.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Cl({},e.props),o=e.key,i=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,s=ls.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in n)Pl.call(n,l)&&!Nl.hasOwnProperty(l)&&(r[l]=n[l]===void 0&&a!==void 0?a[l]:n[l])}var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ar,type:e.type,key:o,ref:i,props:r,_owner:s}};O.createContext=function(e){return e={$$typeof:nd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ed,_context:e},e.Consumer=e};O.createElement=Rl;O.createFactory=function(e){var n=Rl.bind(null,e);return n.type=e,n};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:td,render:e}};O.isValidElement=us;O.lazy=function(e){return{$$typeof:id,_payload:{_status:-1,_result:e},_init:ud}};O.memo=function(e,n){return{$$typeof:od,type:e,compare:n===void 0?null:n}};O.startTransition=function(e){var n=Wr.transition;Wr.transition={};try{e()}finally{Wr.transition=n}};O.unstable_act=Ml;O.useCallback=function(e,n){return ue.current.useCallback(e,n)};O.useContext=function(e){return ue.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};O.useEffect=function(e,n){return ue.current.useEffect(e,n)};O.useId=function(){return ue.current.useId()};O.useImperativeHandle=function(e,n,t){return ue.current.useImperativeHandle(e,n,t)};O.useInsertionEffect=function(e,n){return ue.current.useInsertionEffect(e,n)};O.useLayoutEffect=function(e,n){return ue.current.useLayoutEffect(e,n)};O.useMemo=function(e,n){return ue.current.useMemo(e,n)};O.useReducer=function(e,n,t){return ue.current.useReducer(e,n,t)};O.useRef=function(e){return ue.current.useRef(e)};O.useState=function(e){return ue.current.useState(e)};O.useSyncExternalStore=function(e,n,t){return ue.current.useSyncExternalStore(e,n,t)};O.useTransition=function(){return ue.current.useTransition()};O.version="18.3.1";El.exports=O;var T=El.exports;const Ol=Qc(T),dd=Yc({__proto__:null,default:Ol},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd=T,pd=Symbol.for("react.element"),fd=Symbol.for("react.fragment"),md=Object.prototype.hasOwnProperty,gd=hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yd={key:!0,ref:!0,__self:!0,__source:!0};function Wl(e,n,t){var r,o={},i=null,s=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(s=n.ref);for(r in n)md.call(n,r)&&!yd.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:pd,type:e,key:i,ref:s,props:o,_owner:gd.current}}yo.Fragment=fd;yo.jsx=Wl;yo.jsxs=Wl;Tl.exports=yo;var f=Tl.exports,ci={},jl={exports:{}},Se={},_l={exports:{}},ql={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(A,R){var M=A.length;A.push(R);e:for(;0<M;){var V=M-1>>>1,J=A[V];if(0<o(J,R))A[V]=R,A[M]=J,M=V;else break e}}function t(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var R=A[0],M=A.pop();if(M!==R){A[0]=M;e:for(var V=0,J=A.length,pr=J>>>1;V<pr;){var Cn=2*(V+1)-1,_o=A[Cn],In=Cn+1,fr=A[In];if(0>o(_o,M))In<J&&0>o(fr,_o)?(A[V]=fr,A[In]=M,V=In):(A[V]=_o,A[Cn]=M,V=Cn);else if(In<J&&0>o(fr,M))A[V]=fr,A[In]=M,V=In;else break e}}return R}function o(A,R){var M=A.sortIndex-R.sortIndex;return M!==0?M:A.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],m=1,h=null,g=3,v=!1,k=!1,x=!1,E=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(A){for(var R=t(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=A)r(u),R.sortIndex=R.expirationTime,n(l,R);else break;R=t(u)}}function y(A){if(x=!1,p(A),!k)if(t(l)!==null)k=!0,Wo(w);else{var R=t(u);R!==null&&jo(y,R.startTime-A)}}function w(A,R){k=!1,x&&(x=!1,d(P),P=-1),v=!0;var M=g;try{for(p(R),h=t(l);h!==null&&(!(h.expirationTime>R)||A&&!de());){var V=h.callback;if(typeof V=="function"){h.callback=null,g=h.priorityLevel;var J=V(h.expirationTime<=R);R=e.unstable_now(),typeof J=="function"?h.callback=J:h===t(l)&&r(l),p(R)}else r(l);h=t(l)}if(h!==null)var pr=!0;else{var Cn=t(u);Cn!==null&&jo(y,Cn.startTime-R),pr=!1}return pr}finally{h=null,g=M,v=!1}}var b=!1,I=null,P=-1,z=5,N=-1;function de(){return!(e.unstable_now()-N<z)}function He(){if(I!==null){var A=e.unstable_now();N=A;var R=!0;try{R=I(!0,A)}finally{R?qe():(b=!1,I=null)}}else b=!1}var qe;if(typeof c=="function")qe=function(){c(He)};else if(typeof MessageChannel<"u"){var ia=new MessageChannel,$c=ia.port2;ia.port1.onmessage=He,qe=function(){$c.postMessage(null)}}else qe=function(){E(He,0)};function Wo(A){I=A,b||(b=!0,qe())}function jo(A,R){P=E(function(){A(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){k||v||(k=!0,Wo(w))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(l)},e.unstable_next=function(A){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var M=g;g=R;try{return A()}finally{g=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,R){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var M=g;g=A;try{return R()}finally{g=M}},e.unstable_scheduleCallback=function(A,R,M){var V=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?V+M:V):M=V,A){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=M+J,A={id:m++,callback:R,priorityLevel:A,startTime:M,expirationTime:J,sortIndex:-1},M>V?(A.sortIndex=M,n(u,A),t(l)===null&&A===t(u)&&(x?(d(P),P=-1):x=!0,jo(y,M-V))):(A.sortIndex=J,n(l,A),k||v||(k=!0,Wo(w))),A},e.unstable_shouldYield=de,e.unstable_wrapCallback=function(A){var R=g;return function(){var M=g;g=R;try{return A.apply(this,arguments)}finally{g=M}}}})(ql);_l.exports=ql;var vd=_l.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd=T,ke=vd;function S(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ll=new Set,Ut={};function zn(e,n){lt(e,n),lt(e+"Capture",n)}function lt(e,n){for(Ut[e]=n,e=0;e<n.length;e++)Ll.add(n[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),di=Object.prototype.hasOwnProperty,xd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ua={},ca={};function kd(e){return di.call(ca,e)?!0:di.call(ua,e)?!1:xd.test(e)?ca[e]=!0:(ua[e]=!0,!1)}function Sd(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Td(e,n,t,r){if(n===null||typeof n>"u"||Sd(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ce(e,n,t,r,o,i,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=s}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var cs=/[\-:]([a-z])/g;function ds(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(cs,ds);te[n]=new ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(cs,ds);te[n]=new ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(cs,ds);te[n]=new ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function hs(e,n,t,r){var o=te.hasOwnProperty(n)?te[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Td(n,t,o,r)&&(t=null),r||o===null?kd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var en=wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gr=Symbol.for("react.element"),Hn=Symbol.for("react.portal"),Vn=Symbol.for("react.fragment"),ps=Symbol.for("react.strict_mode"),hi=Symbol.for("react.profiler"),Dl=Symbol.for("react.provider"),zl=Symbol.for("react.context"),fs=Symbol.for("react.forward_ref"),pi=Symbol.for("react.suspense"),fi=Symbol.for("react.suspense_list"),ms=Symbol.for("react.memo"),rn=Symbol.for("react.lazy"),Fl=Symbol.for("react.offscreen"),da=Symbol.iterator;function xt(e){return e===null||typeof e!="object"?null:(e=da&&e[da]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,Lo;function At(e){if(Lo===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Lo=n&&n[1]||""}return`
`+Lo+e}var Do=!1;function zo(e,n){if(!e||Do)return"";Do=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var l=`
`+o[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Do=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?At(e):""}function Ed(e){switch(e.tag){case 5:return At(e.type);case 16:return At("Lazy");case 13:return At("Suspense");case 19:return At("SuspenseList");case 0:case 2:case 15:return e=zo(e.type,!1),e;case 11:return e=zo(e.type.render,!1),e;case 1:return e=zo(e.type,!0),e;default:return""}}function mi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vn:return"Fragment";case Hn:return"Portal";case hi:return"Profiler";case ps:return"StrictMode";case pi:return"Suspense";case fi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zl:return(e.displayName||"Context")+".Consumer";case Dl:return(e._context.displayName||"Context")+".Provider";case fs:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ms:return n=e.displayName||null,n!==null?n:mi(e.type)||"Memo";case rn:n=e._payload,e=e._init;try{return mi(e(n))}catch{}}return null}function bd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mi(n);case 8:return n===ps?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function xn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ul(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Cd(e){var n=Ul(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function yr(e){e._valueTracker||(e._valueTracker=Cd(e))}function Bl(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Ul(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Vr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gi(e,n){var t=n.checked;return B({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ha(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=xn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Hl(e,n){n=n.checked,n!=null&&hs(e,"checked",n,!1)}function yi(e,n){Hl(e,n);var t=xn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?vi(e,n.type,t):n.hasOwnProperty("defaultValue")&&vi(e,n.type,xn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function pa(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function vi(e,n,t){(n!=="number"||Vr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Pt=Array.isArray;function tt(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+xn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function wi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(S(91));return B({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fa(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(S(92));if(Pt(t)){if(1<t.length)throw Error(S(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:xn(t)}}function Vl(e,n){var t=xn(n.value),r=xn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ma(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Gl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Gl(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vr,$l=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(vr=vr||document.createElement("div"),vr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=vr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Bt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ot={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Id=["Webkit","ms","Moz","O"];Object.keys(Ot).forEach(function(e){Id.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ot[n]=Ot[e]})});function Yl(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ot.hasOwnProperty(e)&&Ot[e]?(""+n).trim():n+"px"}function Ql(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=Yl(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var Ad=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ki(e,n){if(n){if(Ad[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(S(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(S(61))}if(n.style!=null&&typeof n.style!="object")throw Error(S(62))}}function Si(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ti=null;function gs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ei=null,rt=null,ot=null;function ga(e){if(e=cr(e)){if(typeof Ei!="function")throw Error(S(280));var n=e.stateNode;n&&(n=So(n),Ei(e.stateNode,e.type,n))}}function Kl(e){rt?ot?ot.push(e):ot=[e]:rt=e}function Jl(){if(rt){var e=rt,n=ot;if(ot=rt=null,ga(e),n)for(e=0;e<n.length;e++)ga(n[e])}}function Xl(e,n){return e(n)}function Zl(){}var Fo=!1;function eu(e,n,t){if(Fo)return e(n,t);Fo=!0;try{return Xl(e,n,t)}finally{Fo=!1,(rt!==null||ot!==null)&&(Zl(),Jl())}}function Ht(e,n){var t=e.stateNode;if(t===null)return null;var r=So(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(S(231,n,typeof t));return t}var bi=!1;if(Ke)try{var kt={};Object.defineProperty(kt,"passive",{get:function(){bi=!0}}),window.addEventListener("test",kt,kt),window.removeEventListener("test",kt,kt)}catch{bi=!1}function Pd(e,n,t,r,o,i,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(m){this.onError(m)}}var Wt=!1,Gr=null,$r=!1,Ci=null,Nd={onError:function(e){Wt=!0,Gr=e}};function Rd(e,n,t,r,o,i,s,a,l){Wt=!1,Gr=null,Pd.apply(Nd,arguments)}function Md(e,n,t,r,o,i,s,a,l){if(Rd.apply(this,arguments),Wt){if(Wt){var u=Gr;Wt=!1,Gr=null}else throw Error(S(198));$r||($r=!0,Ci=u)}}function Fn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function nu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ya(e){if(Fn(e)!==e)throw Error(S(188))}function Od(e){var n=e.alternate;if(!n){if(n=Fn(e),n===null)throw Error(S(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return ya(o),e;if(i===r)return ya(o),n;i=i.sibling}throw Error(S(188))}if(t.return!==r.return)t=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===t){s=!0,t=o,r=i;break}if(a===r){s=!0,r=o,t=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===t){s=!0,t=i,r=o;break}if(a===r){s=!0,r=i,t=o;break}a=a.sibling}if(!s)throw Error(S(189))}}if(t.alternate!==r)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?e:n}function tu(e){return e=Od(e),e!==null?ru(e):null}function ru(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ru(e);if(n!==null)return n;e=e.sibling}return null}var ou=ke.unstable_scheduleCallback,va=ke.unstable_cancelCallback,Wd=ke.unstable_shouldYield,jd=ke.unstable_requestPaint,G=ke.unstable_now,_d=ke.unstable_getCurrentPriorityLevel,ys=ke.unstable_ImmediatePriority,iu=ke.unstable_UserBlockingPriority,Yr=ke.unstable_NormalPriority,qd=ke.unstable_LowPriority,su=ke.unstable_IdlePriority,vo=null,Ue=null;function Ld(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(vo,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:Fd,Dd=Math.log,zd=Math.LN2;function Fd(e){return e>>>=0,e===0?32:31-(Dd(e)/zd|0)|0}var wr=64,xr=4194304;function Nt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=t&268435455;if(s!==0){var a=s&~o;a!==0?r=Nt(a):(i&=s,i!==0&&(r=Nt(i)))}else s=t&~o,s!==0?r=Nt(s):i!==0&&(r=Nt(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-We(n),o=1<<t,r|=e[t],n&=~o;return r}function Ud(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-We(i),a=1<<s,l=o[s];l===-1?(!(a&t)||a&r)&&(o[s]=Ud(a,n)):l<=n&&(e.expiredLanes|=a),i&=~a}}function Ii(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function au(){var e=wr;return wr<<=1,!(wr&4194240)&&(wr=64),e}function Uo(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function lr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-We(n),e[n]=t}function Hd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-We(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function vs(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-We(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var j=0;function lu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var uu,ws,cu,du,hu,Ai=!1,kr=[],dn=null,hn=null,pn=null,Vt=new Map,Gt=new Map,sn=[],Vd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wa(e,n){switch(e){case"focusin":case"focusout":dn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":Vt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gt.delete(n.pointerId)}}function St(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=cr(n),n!==null&&ws(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function Gd(e,n,t,r,o){switch(n){case"focusin":return dn=St(dn,e,n,t,r,o),!0;case"dragenter":return hn=St(hn,e,n,t,r,o),!0;case"mouseover":return pn=St(pn,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return Vt.set(i,St(Vt.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Gt.set(i,St(Gt.get(i)||null,e,n,t,r,o)),!0}return!1}function pu(e){var n=Nn(e.target);if(n!==null){var t=Fn(n);if(t!==null){if(n=t.tag,n===13){if(n=nu(t),n!==null){e.blockedOn=n,hu(e.priority,function(){cu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Pi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Ti=r,t.target.dispatchEvent(r),Ti=null}else return n=cr(t),n!==null&&ws(n),e.blockedOn=t,!1;n.shift()}return!0}function xa(e,n,t){jr(e)&&t.delete(n)}function $d(){Ai=!1,dn!==null&&jr(dn)&&(dn=null),hn!==null&&jr(hn)&&(hn=null),pn!==null&&jr(pn)&&(pn=null),Vt.forEach(xa),Gt.forEach(xa)}function Tt(e,n){e.blockedOn===n&&(e.blockedOn=null,Ai||(Ai=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,$d)))}function $t(e){function n(o){return Tt(o,e)}if(0<kr.length){Tt(kr[0],e);for(var t=1;t<kr.length;t++){var r=kr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(dn!==null&&Tt(dn,e),hn!==null&&Tt(hn,e),pn!==null&&Tt(pn,e),Vt.forEach(n),Gt.forEach(n),t=0;t<sn.length;t++)r=sn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<sn.length&&(t=sn[0],t.blockedOn===null);)pu(t),t.blockedOn===null&&sn.shift()}var it=en.ReactCurrentBatchConfig,Kr=!0;function Yd(e,n,t,r){var o=j,i=it.transition;it.transition=null;try{j=1,xs(e,n,t,r)}finally{j=o,it.transition=i}}function Qd(e,n,t,r){var o=j,i=it.transition;it.transition=null;try{j=4,xs(e,n,t,r)}finally{j=o,it.transition=i}}function xs(e,n,t,r){if(Kr){var o=Pi(e,n,t,r);if(o===null)Xo(e,n,r,Jr,t),wa(e,r);else if(Gd(o,e,n,t,r))r.stopPropagation();else if(wa(e,r),n&4&&-1<Vd.indexOf(e)){for(;o!==null;){var i=cr(o);if(i!==null&&uu(i),i=Pi(e,n,t,r),i===null&&Xo(e,n,r,Jr,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else Xo(e,n,r,null,t)}}var Jr=null;function Pi(e,n,t,r){if(Jr=null,e=gs(r),e=Nn(e),e!==null)if(n=Fn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=nu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Jr=e,null}function fu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_d()){case ys:return 1;case iu:return 4;case Yr:case qd:return 16;case su:return 536870912;default:return 16}default:return 16}}var ln=null,ks=null,_r=null;function mu(){if(_r)return _r;var e,n=ks,t=n.length,r,o="value"in ln?ln.value:ln.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var s=t-e;for(r=1;r<=s&&n[t-r]===o[i-r];r++);return _r=o.slice(e,1<r?1-r:void 0)}function qr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function ka(){return!1}function Te(e){function n(t,r,o,i,s){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Sr:ka,this.isPropagationStopped=ka,this}return B(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),n}var gt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ss=Te(gt),ur=B({},gt,{view:0,detail:0}),Kd=Te(ur),Bo,Ho,Et,wo=B({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ts,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Et&&(Et&&e.type==="mousemove"?(Bo=e.screenX-Et.screenX,Ho=e.screenY-Et.screenY):Ho=Bo=0,Et=e),Bo)},movementY:function(e){return"movementY"in e?e.movementY:Ho}}),Sa=Te(wo),Jd=B({},wo,{dataTransfer:0}),Xd=Te(Jd),Zd=B({},ur,{relatedTarget:0}),Vo=Te(Zd),eh=B({},gt,{animationName:0,elapsedTime:0,pseudoElement:0}),nh=Te(eh),th=B({},gt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rh=Te(th),oh=B({},gt,{data:0}),Ta=Te(oh),ih={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ah={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ah[e])?!!n[e]:!1}function Ts(){return lh}var uh=B({},ur,{key:function(e){if(e.key){var n=ih[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ts,charCode:function(e){return e.type==="keypress"?qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ch=Te(uh),dh=B({},wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ea=Te(dh),hh=B({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ts}),ph=Te(hh),fh=B({},gt,{propertyName:0,elapsedTime:0,pseudoElement:0}),mh=Te(fh),gh=B({},wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yh=Te(gh),vh=[9,13,27,32],Es=Ke&&"CompositionEvent"in window,jt=null;Ke&&"documentMode"in document&&(jt=document.documentMode);var wh=Ke&&"TextEvent"in window&&!jt,gu=Ke&&(!Es||jt&&8<jt&&11>=jt),ba=" ",Ca=!1;function yu(e,n){switch(e){case"keyup":return vh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gn=!1;function xh(e,n){switch(e){case"compositionend":return vu(n);case"keypress":return n.which!==32?null:(Ca=!0,ba);case"textInput":return e=n.data,e===ba&&Ca?null:e;default:return null}}function kh(e,n){if(Gn)return e==="compositionend"||!Es&&yu(e,n)?(e=mu(),_r=ks=ln=null,Gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gu&&n.locale!=="ko"?null:n.data;default:return null}}var Sh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ia(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Sh[e.type]:n==="textarea"}function wu(e,n,t,r){Kl(r),n=Xr(n,"onChange"),0<n.length&&(t=new Ss("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var _t=null,Yt=null;function Th(e){Nu(e,0)}function xo(e){var n=Qn(e);if(Bl(n))return e}function Eh(e,n){if(e==="change")return n}var xu=!1;if(Ke){var Go;if(Ke){var $o="oninput"in document;if(!$o){var Aa=document.createElement("div");Aa.setAttribute("oninput","return;"),$o=typeof Aa.oninput=="function"}Go=$o}else Go=!1;xu=Go&&(!document.documentMode||9<document.documentMode)}function Pa(){_t&&(_t.detachEvent("onpropertychange",ku),Yt=_t=null)}function ku(e){if(e.propertyName==="value"&&xo(Yt)){var n=[];wu(n,Yt,e,gs(e)),eu(Th,n)}}function bh(e,n,t){e==="focusin"?(Pa(),_t=n,Yt=t,_t.attachEvent("onpropertychange",ku)):e==="focusout"&&Pa()}function Ch(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xo(Yt)}function Ih(e,n){if(e==="click")return xo(n)}function Ah(e,n){if(e==="input"||e==="change")return xo(n)}function Ph(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var _e=typeof Object.is=="function"?Object.is:Ph;function Qt(e,n){if(_e(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!di.call(n,o)||!_e(e[o],n[o]))return!1}return!0}function Na(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ra(e,n){var t=Na(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Na(t)}}function Su(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Su(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Tu(){for(var e=window,n=Vr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Vr(e.document)}return n}function bs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Nh(e){var n=Tu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Su(t.ownerDocument.documentElement,t)){if(r!==null&&bs(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ra(t,i);var s=Ra(t,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Rh=Ke&&"documentMode"in document&&11>=document.documentMode,$n=null,Ni=null,qt=null,Ri=!1;function Ma(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ri||$n==null||$n!==Vr(r)||(r=$n,"selectionStart"in r&&bs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qt&&Qt(qt,r)||(qt=r,r=Xr(Ni,"onSelect"),0<r.length&&(n=new Ss("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=$n)))}function Tr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Yn={animationend:Tr("Animation","AnimationEnd"),animationiteration:Tr("Animation","AnimationIteration"),animationstart:Tr("Animation","AnimationStart"),transitionend:Tr("Transition","TransitionEnd")},Yo={},Eu={};Ke&&(Eu=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function ko(e){if(Yo[e])return Yo[e];if(!Yn[e])return e;var n=Yn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Eu)return Yo[e]=n[t];return e}var bu=ko("animationend"),Cu=ko("animationiteration"),Iu=ko("animationstart"),Au=ko("transitionend"),Pu=new Map,Oa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,n){Pu.set(e,n),zn(n,[e])}for(var Qo=0;Qo<Oa.length;Qo++){var Ko=Oa[Qo],Mh=Ko.toLowerCase(),Oh=Ko[0].toUpperCase()+Ko.slice(1);Sn(Mh,"on"+Oh)}Sn(bu,"onAnimationEnd");Sn(Cu,"onAnimationIteration");Sn(Iu,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(Au,"onTransitionEnd");lt("onMouseEnter",["mouseout","mouseover"]);lt("onMouseLeave",["mouseout","mouseover"]);lt("onPointerEnter",["pointerout","pointerover"]);lt("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rt));function Wa(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Md(r,n,void 0,e),e.currentTarget=null}function Nu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==i&&o.isPropagationStopped())break e;Wa(o,a,u),i=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;Wa(o,a,u),i=l}}}if($r)throw e=Ci,$r=!1,Ci=null,e}function q(e,n){var t=n[_i];t===void 0&&(t=n[_i]=new Set);var r=e+"__bubble";t.has(r)||(Ru(n,e,2,!1),t.add(r))}function Jo(e,n,t){var r=0;n&&(r|=4),Ru(t,e,r,n)}var Er="_reactListening"+Math.random().toString(36).slice(2);function Kt(e){if(!e[Er]){e[Er]=!0,Ll.forEach(function(t){t!=="selectionchange"&&(Wh.has(t)||Jo(t,!1,e),Jo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Er]||(n[Er]=!0,Jo("selectionchange",!1,n))}}function Ru(e,n,t,r){switch(fu(n)){case 1:var o=Yd;break;case 4:o=Qd;break;default:o=xs}t=o.bind(null,n,t,e),o=void 0,!bi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function Xo(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=Nn(a),s===null)return;if(l=s.tag,l===5||l===6){r=i=s;continue e}a=a.parentNode}}r=r.return}eu(function(){var u=i,m=gs(t),h=[];e:{var g=Pu.get(e);if(g!==void 0){var v=Ss,k=e;switch(e){case"keypress":if(qr(t)===0)break e;case"keydown":case"keyup":v=ch;break;case"focusin":k="focus",v=Vo;break;case"focusout":k="blur",v=Vo;break;case"beforeblur":case"afterblur":v=Vo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Sa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Xd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=ph;break;case bu:case Cu:case Iu:v=nh;break;case Au:v=mh;break;case"scroll":v=Kd;break;case"wheel":v=yh;break;case"copy":case"cut":case"paste":v=rh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ea}var x=(n&4)!==0,E=!x&&e==="scroll",d=x?g!==null?g+"Capture":null:g;x=[];for(var c=u,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,d!==null&&(y=Ht(c,d),y!=null&&x.push(Jt(c,y,p)))),E)break;c=c.return}0<x.length&&(g=new v(g,k,null,t,m),h.push({event:g,listeners:x}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&t!==Ti&&(k=t.relatedTarget||t.fromElement)&&(Nn(k)||k[Je]))break e;if((v||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,v?(k=t.relatedTarget||t.toElement,v=u,k=k?Nn(k):null,k!==null&&(E=Fn(k),k!==E||k.tag!==5&&k.tag!==6)&&(k=null)):(v=null,k=u),v!==k)){if(x=Sa,y="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(x=Ea,y="onPointerLeave",d="onPointerEnter",c="pointer"),E=v==null?g:Qn(v),p=k==null?g:Qn(k),g=new x(y,c+"leave",v,t,m),g.target=E,g.relatedTarget=p,y=null,Nn(m)===u&&(x=new x(d,c+"enter",k,t,m),x.target=p,x.relatedTarget=E,y=x),E=y,v&&k)n:{for(x=v,d=k,c=0,p=x;p;p=Un(p))c++;for(p=0,y=d;y;y=Un(y))p++;for(;0<c-p;)x=Un(x),c--;for(;0<p-c;)d=Un(d),p--;for(;c--;){if(x===d||d!==null&&x===d.alternate)break n;x=Un(x),d=Un(d)}x=null}else x=null;v!==null&&ja(h,g,v,x,!1),k!==null&&E!==null&&ja(h,E,k,x,!0)}}e:{if(g=u?Qn(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var w=Eh;else if(Ia(g))if(xu)w=Ah;else{w=Ch;var b=bh}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(w=Ih);if(w&&(w=w(e,u))){wu(h,w,t,m);break e}b&&b(e,g,u),e==="focusout"&&(b=g._wrapperState)&&b.controlled&&g.type==="number"&&vi(g,"number",g.value)}switch(b=u?Qn(u):window,e){case"focusin":(Ia(b)||b.contentEditable==="true")&&($n=b,Ni=u,qt=null);break;case"focusout":qt=Ni=$n=null;break;case"mousedown":Ri=!0;break;case"contextmenu":case"mouseup":case"dragend":Ri=!1,Ma(h,t,m);break;case"selectionchange":if(Rh)break;case"keydown":case"keyup":Ma(h,t,m)}var I;if(Es)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Gn?yu(e,t)&&(P="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(gu&&t.locale!=="ko"&&(Gn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Gn&&(I=mu()):(ln=m,ks="value"in ln?ln.value:ln.textContent,Gn=!0)),b=Xr(u,P),0<b.length&&(P=new Ta(P,e,null,t,m),h.push({event:P,listeners:b}),I?P.data=I:(I=vu(t),I!==null&&(P.data=I)))),(I=wh?xh(e,t):kh(e,t))&&(u=Xr(u,"onBeforeInput"),0<u.length&&(m=new Ta("onBeforeInput","beforeinput",null,t,m),h.push({event:m,listeners:u}),m.data=I))}Nu(h,n)})}function Jt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Xr(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ht(e,t),i!=null&&r.unshift(Jt(e,i,o)),i=Ht(e,n),i!=null&&r.push(Jt(e,i,o))),e=e.return}return r}function Un(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ja(e,n,t,r,o){for(var i=n._reactName,s=[];t!==null&&t!==r;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,o?(l=Ht(t,i),l!=null&&s.unshift(Jt(t,l,a))):o||(l=Ht(t,i),l!=null&&s.push(Jt(t,l,a)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var jh=/\r\n?/g,_h=/\u0000|\uFFFD/g;function _a(e){return(typeof e=="string"?e:""+e).replace(jh,`
`).replace(_h,"")}function br(e,n,t){if(n=_a(n),_a(e)!==n&&t)throw Error(S(425))}function Zr(){}var Mi=null,Oi=null;function Wi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ji=typeof setTimeout=="function"?setTimeout:void 0,qh=typeof clearTimeout=="function"?clearTimeout:void 0,qa=typeof Promise=="function"?Promise:void 0,Lh=typeof queueMicrotask=="function"?queueMicrotask:typeof qa<"u"?function(e){return qa.resolve(null).then(e).catch(Dh)}:ji;function Dh(e){setTimeout(function(){throw e})}function Zo(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),$t(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);$t(n)}function fn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function La(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var yt=Math.random().toString(36).slice(2),ze="__reactFiber$"+yt,Xt="__reactProps$"+yt,Je="__reactContainer$"+yt,_i="__reactEvents$"+yt,zh="__reactListeners$"+yt,Fh="__reactHandles$"+yt;function Nn(e){var n=e[ze];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Je]||t[ze]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=La(e);e!==null;){if(t=e[ze])return t;e=La(e)}return n}e=t,t=e.parentNode}return null}function cr(e){return e=e[ze]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function So(e){return e[Xt]||null}var qi=[],Kn=-1;function Tn(e){return{current:e}}function L(e){0>Kn||(e.current=qi[Kn],qi[Kn]=null,Kn--)}function _(e,n){Kn++,qi[Kn]=e.current,e.current=n}var kn={},se=Tn(kn),fe=Tn(!1),jn=kn;function ut(e,n){var t=e.type.contextTypes;if(!t)return kn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function me(e){return e=e.childContextTypes,e!=null}function eo(){L(fe),L(se)}function Da(e,n,t){if(se.current!==kn)throw Error(S(168));_(se,n),_(fe,t)}function Mu(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(S(108,bd(e)||"Unknown",o));return B({},t,r)}function no(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kn,jn=se.current,_(se,e),_(fe,fe.current),!0}function za(e,n,t){var r=e.stateNode;if(!r)throw Error(S(169));t?(e=Mu(e,n,jn),r.__reactInternalMemoizedMergedChildContext=e,L(fe),L(se),_(se,e)):L(fe),_(fe,t)}var Ge=null,To=!1,ei=!1;function Ou(e){Ge===null?Ge=[e]:Ge.push(e)}function Uh(e){To=!0,Ou(e)}function En(){if(!ei&&Ge!==null){ei=!0;var e=0,n=j;try{var t=Ge;for(j=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ge=null,To=!1}catch(o){throw Ge!==null&&(Ge=Ge.slice(e+1)),ou(ys,En),o}finally{j=n,ei=!1}}return null}var Jn=[],Xn=0,to=null,ro=0,Ee=[],be=0,_n=null,$e=1,Ye="";function An(e,n){Jn[Xn++]=ro,Jn[Xn++]=to,to=e,ro=n}function Wu(e,n,t){Ee[be++]=$e,Ee[be++]=Ye,Ee[be++]=_n,_n=e;var r=$e;e=Ye;var o=32-We(r)-1;r&=~(1<<o),t+=1;var i=32-We(n)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,$e=1<<32-We(n)+o|t<<o|r,Ye=i+e}else $e=1<<i|t<<o|r,Ye=e}function Cs(e){e.return!==null&&(An(e,1),Wu(e,1,0))}function Is(e){for(;e===to;)to=Jn[--Xn],Jn[Xn]=null,ro=Jn[--Xn],Jn[Xn]=null;for(;e===_n;)_n=Ee[--be],Ee[be]=null,Ye=Ee[--be],Ee[be]=null,$e=Ee[--be],Ee[be]=null}var we=null,ve=null,D=!1,Oe=null;function ju(e,n){var t=Ce(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Fa(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,we=e,ve=fn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,we=e,ve=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=_n!==null?{id:$e,overflow:Ye}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ce(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,we=e,ve=null,!0):!1;default:return!1}}function Li(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Di(e){if(D){var n=ve;if(n){var t=n;if(!Fa(e,n)){if(Li(e))throw Error(S(418));n=fn(t.nextSibling);var r=we;n&&Fa(e,n)?ju(r,t):(e.flags=e.flags&-4097|2,D=!1,we=e)}}else{if(Li(e))throw Error(S(418));e.flags=e.flags&-4097|2,D=!1,we=e}}}function Ua(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function Cr(e){if(e!==we)return!1;if(!D)return Ua(e),D=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Wi(e.type,e.memoizedProps)),n&&(n=ve)){if(Li(e))throw _u(),Error(S(418));for(;n;)ju(e,n),n=fn(n.nextSibling)}if(Ua(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ve=fn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ve=null}}else ve=we?fn(e.stateNode.nextSibling):null;return!0}function _u(){for(var e=ve;e;)e=fn(e.nextSibling)}function ct(){ve=we=null,D=!1}function As(e){Oe===null?Oe=[e]:Oe.push(e)}var Bh=en.ReactCurrentBatchConfig;function bt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var r=t.stateNode}if(!r)throw Error(S(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(s){var a=o.refs;s===null?delete a[i]:a[i]=s},n._stringRef=i,n)}if(typeof e!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,e))}return e}function Ir(e,n){throw e=Object.prototype.toString.call(n),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ba(e){var n=e._init;return n(e._payload)}function qu(e){function n(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function t(d,c){if(!e)return null;for(;c!==null;)n(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=vn(d,c),d.index=0,d.sibling=null,d}function i(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,p,y){return c===null||c.tag!==6?(c=ai(p,d.mode,y),c.return=d,c):(c=o(c,p),c.return=d,c)}function l(d,c,p,y){var w=p.type;return w===Vn?m(d,c,p.props.children,y,p.key):c!==null&&(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===rn&&Ba(w)===c.type)?(y=o(c,p.props),y.ref=bt(d,c,p),y.return=d,y):(y=Hr(p.type,p.key,p.props,null,d.mode,y),y.ref=bt(d,c,p),y.return=d,y)}function u(d,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=li(p,d.mode,y),c.return=d,c):(c=o(c,p.children||[]),c.return=d,c)}function m(d,c,p,y,w){return c===null||c.tag!==7?(c=Wn(p,d.mode,y,w),c.return=d,c):(c=o(c,p),c.return=d,c)}function h(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ai(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case gr:return p=Hr(c.type,c.key,c.props,null,d.mode,p),p.ref=bt(d,null,c),p.return=d,p;case Hn:return c=li(c,d.mode,p),c.return=d,c;case rn:var y=c._init;return h(d,y(c._payload),p)}if(Pt(c)||xt(c))return c=Wn(c,d.mode,p,null),c.return=d,c;Ir(d,c)}return null}function g(d,c,p,y){var w=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return w!==null?null:a(d,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case gr:return p.key===w?l(d,c,p,y):null;case Hn:return p.key===w?u(d,c,p,y):null;case rn:return w=p._init,g(d,c,w(p._payload),y)}if(Pt(p)||xt(p))return w!==null?null:m(d,c,p,y,null);Ir(d,p)}return null}function v(d,c,p,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(p)||null,a(c,d,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case gr:return d=d.get(y.key===null?p:y.key)||null,l(c,d,y,w);case Hn:return d=d.get(y.key===null?p:y.key)||null,u(c,d,y,w);case rn:var b=y._init;return v(d,c,p,b(y._payload),w)}if(Pt(y)||xt(y))return d=d.get(p)||null,m(c,d,y,w,null);Ir(c,y)}return null}function k(d,c,p,y){for(var w=null,b=null,I=c,P=c=0,z=null;I!==null&&P<p.length;P++){I.index>P?(z=I,I=null):z=I.sibling;var N=g(d,I,p[P],y);if(N===null){I===null&&(I=z);break}e&&I&&N.alternate===null&&n(d,I),c=i(N,c,P),b===null?w=N:b.sibling=N,b=N,I=z}if(P===p.length)return t(d,I),D&&An(d,P),w;if(I===null){for(;P<p.length;P++)I=h(d,p[P],y),I!==null&&(c=i(I,c,P),b===null?w=I:b.sibling=I,b=I);return D&&An(d,P),w}for(I=r(d,I);P<p.length;P++)z=v(I,d,P,p[P],y),z!==null&&(e&&z.alternate!==null&&I.delete(z.key===null?P:z.key),c=i(z,c,P),b===null?w=z:b.sibling=z,b=z);return e&&I.forEach(function(de){return n(d,de)}),D&&An(d,P),w}function x(d,c,p,y){var w=xt(p);if(typeof w!="function")throw Error(S(150));if(p=w.call(p),p==null)throw Error(S(151));for(var b=w=null,I=c,P=c=0,z=null,N=p.next();I!==null&&!N.done;P++,N=p.next()){I.index>P?(z=I,I=null):z=I.sibling;var de=g(d,I,N.value,y);if(de===null){I===null&&(I=z);break}e&&I&&de.alternate===null&&n(d,I),c=i(de,c,P),b===null?w=de:b.sibling=de,b=de,I=z}if(N.done)return t(d,I),D&&An(d,P),w;if(I===null){for(;!N.done;P++,N=p.next())N=h(d,N.value,y),N!==null&&(c=i(N,c,P),b===null?w=N:b.sibling=N,b=N);return D&&An(d,P),w}for(I=r(d,I);!N.done;P++,N=p.next())N=v(I,d,P,N.value,y),N!==null&&(e&&N.alternate!==null&&I.delete(N.key===null?P:N.key),c=i(N,c,P),b===null?w=N:b.sibling=N,b=N);return e&&I.forEach(function(He){return n(d,He)}),D&&An(d,P),w}function E(d,c,p,y){if(typeof p=="object"&&p!==null&&p.type===Vn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case gr:e:{for(var w=p.key,b=c;b!==null;){if(b.key===w){if(w=p.type,w===Vn){if(b.tag===7){t(d,b.sibling),c=o(b,p.props.children),c.return=d,d=c;break e}}else if(b.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===rn&&Ba(w)===b.type){t(d,b.sibling),c=o(b,p.props),c.ref=bt(d,b,p),c.return=d,d=c;break e}t(d,b);break}else n(d,b);b=b.sibling}p.type===Vn?(c=Wn(p.props.children,d.mode,y,p.key),c.return=d,d=c):(y=Hr(p.type,p.key,p.props,null,d.mode,y),y.ref=bt(d,c,p),y.return=d,d=y)}return s(d);case Hn:e:{for(b=p.key;c!==null;){if(c.key===b)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){t(d,c.sibling),c=o(c,p.children||[]),c.return=d,d=c;break e}else{t(d,c);break}else n(d,c);c=c.sibling}c=li(p,d.mode,y),c.return=d,d=c}return s(d);case rn:return b=p._init,E(d,c,b(p._payload),y)}if(Pt(p))return k(d,c,p,y);if(xt(p))return x(d,c,p,y);Ir(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(t(d,c.sibling),c=o(c,p),c.return=d,d=c):(t(d,c),c=ai(p,d.mode,y),c.return=d,d=c),s(d)):t(d,c)}return E}var dt=qu(!0),Lu=qu(!1),oo=Tn(null),io=null,Zn=null,Ps=null;function Ns(){Ps=Zn=io=null}function Rs(e){var n=oo.current;L(oo),e._currentValue=n}function zi(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function st(e,n){io=e,Ps=Zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(pe=!0),e.firstContext=null)}function Ae(e){var n=e._currentValue;if(Ps!==e)if(e={context:e,memoizedValue:n,next:null},Zn===null){if(io===null)throw Error(S(308));Zn=e,io.dependencies={lanes:0,firstContext:e}}else Zn=Zn.next=e;return n}var Rn=null;function Ms(e){Rn===null?Rn=[e]:Rn.push(e)}function Du(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,Ms(n)):(t.next=o.next,o.next=t),n.interleaved=t,Xe(e,r)}function Xe(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var on=!1;function Os(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function mn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,Xe(e,t)}return o=r.interleaved,o===null?(n.next=n,Ms(r)):(n.next=o.next,o.next=n),r.interleaved=n,Xe(e,t)}function Lr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,vs(e,t)}}function Ha(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=s:i=i.next=s,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function so(e,n,t,r){var o=e.updateQueue;on=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?i=u:s.next=u,s=l;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==s&&(a===null?m.firstBaseUpdate=u:a.next=u,m.lastBaseUpdate=l))}if(i!==null){var h=o.baseState;s=0,m=u=l=null,a=i;do{var g=a.lane,v=a.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,x=a;switch(g=n,v=t,x.tag){case 1:if(k=x.payload,typeof k=="function"){h=k.call(v,h,g);break e}h=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,g=typeof k=="function"?k.call(v,h,g):k,g==null)break e;h=B({},h,g);break e;case 2:on=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a))}else v={eventTime:v,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(u=m=v,l=h):m=m.next=v,s|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(m===null&&(l=h),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=m,n=o.shared.interleaved,n!==null){o=n;do s|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);Ln|=s,e.lanes=s,e.memoizedState=h}}function Va(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var dr={},Be=Tn(dr),Zt=Tn(dr),er=Tn(dr);function Mn(e){if(e===dr)throw Error(S(174));return e}function Ws(e,n){switch(_(er,n),_(Zt,e),_(Be,dr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:xi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=xi(n,e)}L(Be),_(Be,n)}function ht(){L(Be),L(Zt),L(er)}function Fu(e){Mn(er.current);var n=Mn(Be.current),t=xi(n,e.type);n!==t&&(_(Zt,e),_(Be,t))}function js(e){Zt.current===e&&(L(Be),L(Zt))}var F=Tn(0);function ao(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ni=[];function _s(){for(var e=0;e<ni.length;e++)ni[e]._workInProgressVersionPrimary=null;ni.length=0}var Dr=en.ReactCurrentDispatcher,ti=en.ReactCurrentBatchConfig,qn=0,U=null,Q=null,X=null,lo=!1,Lt=!1,nr=0,Hh=0;function re(){throw Error(S(321))}function qs(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!_e(e[t],n[t]))return!1;return!0}function Ls(e,n,t,r,o,i){if(qn=i,U=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Dr.current=e===null||e.memoizedState===null?Yh:Qh,e=t(r,o),Lt){i=0;do{if(Lt=!1,nr=0,25<=i)throw Error(S(301));i+=1,X=Q=null,n.updateQueue=null,Dr.current=Kh,e=t(r,o)}while(Lt)}if(Dr.current=uo,n=Q!==null&&Q.next!==null,qn=0,X=Q=U=null,lo=!1,n)throw Error(S(300));return e}function Ds(){var e=nr!==0;return nr=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?U.memoizedState=X=e:X=X.next=e,X}function Pe(){if(Q===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=Q.next;var n=X===null?U.memoizedState:X.next;if(n!==null)X=n,Q=e;else{if(e===null)throw Error(S(310));Q=e,e={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},X===null?U.memoizedState=X=e:X=X.next=e}return X}function tr(e,n){return typeof n=="function"?n(e):n}function ri(e){var n=Pe(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=Q,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,l=null,u=i;do{var m=u.lane;if((qn&m)===m)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,U.lanes|=m,Ln|=m}u=u.next}while(u!==null&&u!==i);l===null?s=r:l.next=a,_e(r,n.memoizedState)||(pe=!0),n.memoizedState=r,n.baseState=s,n.baseQueue=l,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,U.lanes|=i,Ln|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function oi(e){var n=Pe(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);_e(i,n.memoizedState)||(pe=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Uu(){}function Bu(e,n){var t=U,r=Pe(),o=n(),i=!_e(r.memoizedState,o);if(i&&(r.memoizedState=o,pe=!0),r=r.queue,zs(Gu.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||X!==null&&X.memoizedState.tag&1){if(t.flags|=2048,rr(9,Vu.bind(null,t,r,o,n),void 0,null),Z===null)throw Error(S(349));qn&30||Hu(t,n,o)}return o}function Hu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=U.updateQueue,n===null?(n={lastEffect:null,stores:null},U.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Vu(e,n,t,r){n.value=t,n.getSnapshot=r,$u(n)&&Yu(e)}function Gu(e,n,t){return t(function(){$u(n)&&Yu(e)})}function $u(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!_e(e,t)}catch{return!0}}function Yu(e){var n=Xe(e,1);n!==null&&je(n,e,1,-1)}function Ga(e){var n=De();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:e},n.queue=e,e=e.dispatch=$h.bind(null,U,e),[n.memoizedState,e]}function rr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=U.updateQueue,n===null?(n={lastEffect:null,stores:null},U.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Qu(){return Pe().memoizedState}function zr(e,n,t,r){var o=De();U.flags|=e,o.memoizedState=rr(1|n,t,void 0,r===void 0?null:r)}function Eo(e,n,t,r){var o=Pe();r=r===void 0?null:r;var i=void 0;if(Q!==null){var s=Q.memoizedState;if(i=s.destroy,r!==null&&qs(r,s.deps)){o.memoizedState=rr(n,t,i,r);return}}U.flags|=e,o.memoizedState=rr(1|n,t,i,r)}function $a(e,n){return zr(8390656,8,e,n)}function zs(e,n){return Eo(2048,8,e,n)}function Ku(e,n){return Eo(4,2,e,n)}function Ju(e,n){return Eo(4,4,e,n)}function Xu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Zu(e,n,t){return t=t!=null?t.concat([e]):null,Eo(4,4,Xu.bind(null,n,e),t)}function Fs(){}function ec(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&qs(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function nc(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&qs(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function tc(e,n,t){return qn&21?(_e(t,n)||(t=au(),U.lanes|=t,Ln|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=t)}function Vh(e,n){var t=j;j=t!==0&&4>t?t:4,e(!0);var r=ti.transition;ti.transition={};try{e(!1),n()}finally{j=t,ti.transition=r}}function rc(){return Pe().memoizedState}function Gh(e,n,t){var r=yn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},oc(e))ic(n,t);else if(t=Du(e,n,t,r),t!==null){var o=le();je(t,e,r,o),sc(t,n,r)}}function $h(e,n,t){var r=yn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(oc(e))ic(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var s=n.lastRenderedState,a=i(s,t);if(o.hasEagerState=!0,o.eagerState=a,_e(a,s)){var l=n.interleaved;l===null?(o.next=o,Ms(n)):(o.next=l.next,l.next=o),n.interleaved=o;return}}catch{}finally{}t=Du(e,n,o,r),t!==null&&(o=le(),je(t,e,r,o),sc(t,n,r))}}function oc(e){var n=e.alternate;return e===U||n!==null&&n===U}function ic(e,n){Lt=lo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function sc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,vs(e,t)}}var uo={readContext:Ae,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},Yh={readContext:Ae,useCallback:function(e,n){return De().memoizedState=[e,n===void 0?null:n],e},useContext:Ae,useEffect:$a,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,zr(4194308,4,Xu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return zr(4194308,4,e,n)},useInsertionEffect:function(e,n){return zr(4,2,e,n)},useMemo:function(e,n){var t=De();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=De();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Gh.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var n=De();return e={current:e},n.memoizedState=e},useState:Ga,useDebugValue:Fs,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=Ga(!1),n=e[0];return e=Vh.bind(null,e[1]),De().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=U,o=De();if(D){if(t===void 0)throw Error(S(407));t=t()}else{if(t=n(),Z===null)throw Error(S(349));qn&30||Hu(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,$a(Gu.bind(null,r,i,e),[e]),r.flags|=2048,rr(9,Vu.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=De(),n=Z.identifierPrefix;if(D){var t=Ye,r=$e;t=(r&~(1<<32-We(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=nr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Hh++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Qh={readContext:Ae,useCallback:ec,useContext:Ae,useEffect:zs,useImperativeHandle:Zu,useInsertionEffect:Ku,useLayoutEffect:Ju,useMemo:nc,useReducer:ri,useRef:Qu,useState:function(){return ri(tr)},useDebugValue:Fs,useDeferredValue:function(e){var n=Pe();return tc(n,Q.memoizedState,e)},useTransition:function(){var e=ri(tr)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:Uu,useSyncExternalStore:Bu,useId:rc,unstable_isNewReconciler:!1},Kh={readContext:Ae,useCallback:ec,useContext:Ae,useEffect:zs,useImperativeHandle:Zu,useInsertionEffect:Ku,useLayoutEffect:Ju,useMemo:nc,useReducer:oi,useRef:Qu,useState:function(){return oi(tr)},useDebugValue:Fs,useDeferredValue:function(e){var n=Pe();return Q===null?n.memoizedState=e:tc(n,Q.memoizedState,e)},useTransition:function(){var e=oi(tr)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:Uu,useSyncExternalStore:Bu,useId:rc,unstable_isNewReconciler:!1};function Re(e,n){if(e&&e.defaultProps){n=B({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Fi(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:B({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var bo={isMounted:function(e){return(e=e._reactInternals)?Fn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=le(),o=yn(e),i=Qe(r,o);i.payload=n,t!=null&&(i.callback=t),n=mn(e,i,o),n!==null&&(je(n,e,o,r),Lr(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=le(),o=yn(e),i=Qe(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=mn(e,i,o),n!==null&&(je(n,e,o,r),Lr(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=le(),r=yn(e),o=Qe(t,r);o.tag=2,n!=null&&(o.callback=n),n=mn(e,o,r),n!==null&&(je(n,e,r,t),Lr(n,e,r))}};function Ya(e,n,t,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):n.prototype&&n.prototype.isPureReactComponent?!Qt(t,r)||!Qt(o,i):!0}function ac(e,n,t){var r=!1,o=kn,i=n.contextType;return typeof i=="object"&&i!==null?i=Ae(i):(o=me(n)?jn:se.current,r=n.contextTypes,i=(r=r!=null)?ut(e,o):kn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=bo,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function Qa(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&bo.enqueueReplaceState(n,n.state,null)}function Ui(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},Os(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=Ae(i):(i=me(n)?jn:se.current,o.context=ut(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Fi(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&bo.enqueueReplaceState(o,o.state,null),so(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function pt(e,n){try{var t="",r=n;do t+=Ed(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function ii(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Bi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Jh=typeof WeakMap=="function"?WeakMap:Map;function lc(e,n,t){t=Qe(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ho||(ho=!0,Zi=r),Bi(e,n)},t}function uc(e,n,t){t=Qe(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){Bi(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Bi(e,n),typeof r!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function Ka(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Jh;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=dp.bind(null,e,n,t),n.then(e,e))}function Ja(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Xa(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Qe(-1,1),n.tag=2,mn(t,n,1))),t.lanes|=1),e)}var Xh=en.ReactCurrentOwner,pe=!1;function ae(e,n,t,r){n.child=e===null?Lu(n,null,t,r):dt(n,e.child,t,r)}function Za(e,n,t,r,o){t=t.render;var i=n.ref;return st(n,o),r=Ls(e,n,t,r,i,o),t=Ds(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Ze(e,n,o)):(D&&t&&Cs(n),n.flags|=1,ae(e,n,r,o),n.child)}function el(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!Qs(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,cc(e,n,i,r,o)):(e=Hr(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(t=t.compare,t=t!==null?t:Qt,t(s,r)&&e.ref===n.ref)return Ze(e,n,o)}return n.flags|=1,e=vn(i,r),e.ref=n.ref,e.return=n,n.child=e}function cc(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(Qt(i,r)&&e.ref===n.ref)if(pe=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(pe=!0);else return n.lanes=e.lanes,Ze(e,n,o)}return Hi(e,n,t,r,o)}function dc(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},_(nt,ye),ye|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,_(nt,ye),ye|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,_(nt,ye),ye|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,_(nt,ye),ye|=r;return ae(e,n,o,t),n.child}function hc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Hi(e,n,t,r,o){var i=me(t)?jn:se.current;return i=ut(n,i),st(n,o),t=Ls(e,n,t,r,i,o),r=Ds(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Ze(e,n,o)):(D&&r&&Cs(n),n.flags|=1,ae(e,n,t,o),n.child)}function nl(e,n,t,r,o){if(me(t)){var i=!0;no(n)}else i=!1;if(st(n,o),n.stateNode===null)Fr(e,n),ac(n,t,r),Ui(n,t,r,o),r=!0;else if(e===null){var s=n.stateNode,a=n.memoizedProps;s.props=a;var l=s.context,u=t.contextType;typeof u=="object"&&u!==null?u=Ae(u):(u=me(t)?jn:se.current,u=ut(n,u));var m=t.getDerivedStateFromProps,h=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Qa(n,s,r,u),on=!1;var g=n.memoizedState;s.state=g,so(n,r,s,o),l=n.memoizedState,a!==r||g!==l||fe.current||on?(typeof m=="function"&&(Fi(n,t,m,r),l=n.memoizedState),(a=on||Ya(n,t,a,r,g,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{s=n.stateNode,zu(e,n),a=n.memoizedProps,u=n.type===n.elementType?a:Re(n.type,a),s.props=u,h=n.pendingProps,g=s.context,l=t.contextType,typeof l=="object"&&l!==null?l=Ae(l):(l=me(t)?jn:se.current,l=ut(n,l));var v=t.getDerivedStateFromProps;(m=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||g!==l)&&Qa(n,s,r,l),on=!1,g=n.memoizedState,s.state=g,so(n,r,s,o);var k=n.memoizedState;a!==h||g!==k||fe.current||on?(typeof v=="function"&&(Fi(n,t,v,r),k=n.memoizedState),(u=on||Ya(n,t,u,r,g,k,l)||!1)?(m||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,k,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,k,l)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=k),s.props=r,s.state=k,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),r=!1)}return Vi(e,n,t,r,i,o)}function Vi(e,n,t,r,o,i){hc(e,n);var s=(n.flags&128)!==0;if(!r&&!s)return o&&za(n,t,!1),Ze(e,n,i);r=n.stateNode,Xh.current=n;var a=s&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&s?(n.child=dt(n,e.child,null,i),n.child=dt(n,null,a,i)):ae(e,n,a,i),n.memoizedState=r.state,o&&za(n,t,!0),n.child}function pc(e){var n=e.stateNode;n.pendingContext?Da(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Da(e,n.context,!1),Ws(e,n.containerInfo)}function tl(e,n,t,r,o){return ct(),As(o),n.flags|=256,ae(e,n,t,r),n.child}var Gi={dehydrated:null,treeContext:null,retryLane:0};function $i(e){return{baseLanes:e,cachePool:null,transitions:null}}function fc(e,n,t){var r=n.pendingProps,o=F.current,i=!1,s=(n.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),_(F,o&1),e===null)return Di(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=r.children,e=r.fallback,i?(r=n.mode,i=n.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Ao(s,r,0,null),e=Wn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=$i(t),n.memoizedState=Gi,e):Us(n,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Zh(e,n,s,r,a,o,t);if(i){i=r.fallback,s=n.mode,o=e.child,a=o.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=l,n.deletions=null):(r=vn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=vn(a,i):(i=Wn(i,s,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,s=e.child.memoizedState,s=s===null?$i(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~t,n.memoizedState=Gi,r}return i=e.child,e=i.sibling,r=vn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Us(e,n){return n=Ao({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ar(e,n,t,r){return r!==null&&As(r),dt(n,e.child,null,t),e=Us(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Zh(e,n,t,r,o,i,s){if(t)return n.flags&256?(n.flags&=-257,r=ii(Error(S(422))),Ar(e,n,s,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=Ao({mode:"visible",children:r.children},o,0,null),i=Wn(i,o,s,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&dt(n,e.child,null,s),n.child.memoizedState=$i(s),n.memoizedState=Gi,i);if(!(n.mode&1))return Ar(e,n,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(S(419)),r=ii(i,r,void 0),Ar(e,n,s,r)}if(a=(s&e.childLanes)!==0,pe||a){if(r=Z,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Xe(e,o),je(r,e,o,-1))}return Ys(),r=ii(Error(S(421))),Ar(e,n,s,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=hp.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,ve=fn(o.nextSibling),we=n,D=!0,Oe=null,e!==null&&(Ee[be++]=$e,Ee[be++]=Ye,Ee[be++]=_n,$e=e.id,Ye=e.overflow,_n=n),n=Us(n,r.children),n.flags|=4096,n)}function rl(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),zi(e.return,n,t)}function si(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function mc(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(ae(e,n,r.children,t),r=F.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rl(e,t,n);else if(e.tag===19)rl(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_(F,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&ao(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),si(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&ao(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}si(n,!0,t,null,i);break;case"together":si(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Fr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ze(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Ln|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(S(153));if(n.child!==null){for(e=n.child,t=vn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=vn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function ep(e,n,t){switch(n.tag){case 3:pc(n),ct();break;case 5:Fu(n);break;case 1:me(n.type)&&no(n);break;case 4:Ws(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;_(oo,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(_(F,F.current&1),n.flags|=128,null):t&n.child.childLanes?fc(e,n,t):(_(F,F.current&1),e=Ze(e,n,t),e!==null?e.sibling:null);_(F,F.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return mc(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),_(F,F.current),r)break;return null;case 22:case 23:return n.lanes=0,dc(e,n,t)}return Ze(e,n,t)}var gc,Yi,yc,vc;gc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Yi=function(){};yc=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,Mn(Be.current);var i=null;switch(t){case"input":o=gi(e,o),r=gi(e,r),i=[];break;case"select":o=B({},o,{value:void 0}),r=B({},r,{value:void 0}),i=[];break;case"textarea":o=wi(e,o),r=wi(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zr)}ki(t,r);var s;t=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(s in a)a.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ut.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(t||(t={}),t[s]=l[s])}else t||(i||(i=[]),i.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ut.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&q("scroll",e),i||a===l||(i=[])):(i=i||[]).push(u,l))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};vc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ct(e,n){if(!D)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function np(e,n,t){var r=n.pendingProps;switch(Is(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(n),null;case 1:return me(n.type)&&eo(),oe(n),null;case 3:return r=n.stateNode,ht(),L(fe),L(se),_s(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Cr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Oe!==null&&(ts(Oe),Oe=null))),Yi(e,n),oe(n),null;case 5:js(n);var o=Mn(er.current);if(t=n.type,e!==null&&n.stateNode!=null)yc(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(S(166));return oe(n),null}if(e=Mn(Be.current),Cr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[ze]=n,r[Xt]=i,e=(n.mode&1)!==0,t){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(o=0;o<Rt.length;o++)q(Rt[o],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":ha(r,i),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},q("invalid",r);break;case"textarea":fa(r,i),q("invalid",r)}ki(t,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&br(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&br(r.textContent,a,e),o=["children",""+a]):Ut.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&q("scroll",r)}switch(t){case"input":yr(r),pa(r,i,!0);break;case"textarea":yr(r),ma(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Zr)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gl(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(t,{is:r.is}):(e=s.createElement(t),t==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,t),e[ze]=n,e[Xt]=r,gc(e,n,!1,!1),n.stateNode=e;e:{switch(s=Si(t,r),t){case"dialog":q("cancel",e),q("close",e),o=r;break;case"iframe":case"object":case"embed":q("load",e),o=r;break;case"video":case"audio":for(o=0;o<Rt.length;o++)q(Rt[o],e);o=r;break;case"source":q("error",e),o=r;break;case"img":case"image":case"link":q("error",e),q("load",e),o=r;break;case"details":q("toggle",e),o=r;break;case"input":ha(e,r),o=gi(e,r),q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=B({},r,{value:void 0}),q("invalid",e);break;case"textarea":fa(e,r),o=wi(e,r),q("invalid",e);break;default:o=r}ki(t,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?Ql(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$l(e,l)):i==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Bt(e,l):typeof l=="number"&&Bt(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ut.hasOwnProperty(i)?l!=null&&i==="onScroll"&&q("scroll",e):l!=null&&hs(e,i,l,s))}switch(t){case"input":yr(e),pa(e,r,!1);break;case"textarea":yr(e),ma(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?tt(e,!!r.multiple,i,!1):r.defaultValue!=null&&tt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Zr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return oe(n),null;case 6:if(e&&n.stateNode!=null)vc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(S(166));if(t=Mn(er.current),Mn(Be.current),Cr(n)){if(r=n.stateNode,t=n.memoizedProps,r[ze]=n,(i=r.nodeValue!==t)&&(e=we,e!==null))switch(e.tag){case 3:br(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&br(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[ze]=n,n.stateNode=r}return oe(n),null;case 13:if(L(F),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(D&&ve!==null&&n.mode&1&&!(n.flags&128))_u(),ct(),n.flags|=98560,i=!1;else if(i=Cr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[ze]=n}else ct(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;oe(n),i=!1}else Oe!==null&&(ts(Oe),Oe=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||F.current&1?K===0&&(K=3):Ys())),n.updateQueue!==null&&(n.flags|=4),oe(n),null);case 4:return ht(),Yi(e,n),e===null&&Kt(n.stateNode.containerInfo),oe(n),null;case 10:return Rs(n.type._context),oe(n),null;case 17:return me(n.type)&&eo(),oe(n),null;case 19:if(L(F),i=n.memoizedState,i===null)return oe(n),null;if(r=(n.flags&128)!==0,s=i.rendering,s===null)if(r)Ct(i,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=ao(e),s!==null){for(n.flags|=128,Ct(i,!1),r=s.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return _(F,F.current&1|2),n.child}e=e.sibling}i.tail!==null&&G()>ft&&(n.flags|=128,r=!0,Ct(i,!1),n.lanes=4194304)}else{if(!r)if(e=ao(s),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ct(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!D)return oe(n),null}else 2*G()-i.renderingStartTime>ft&&t!==1073741824&&(n.flags|=128,r=!0,Ct(i,!1),n.lanes=4194304);i.isBackwards?(s.sibling=n.child,n.child=s):(t=i.last,t!==null?t.sibling=s:n.child=s,i.last=s)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=G(),n.sibling=null,t=F.current,_(F,r?t&1|2:t&1),n):(oe(n),null);case 22:case 23:return $s(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ye&1073741824&&(oe(n),n.subtreeFlags&6&&(n.flags|=8192)):oe(n),null;case 24:return null;case 25:return null}throw Error(S(156,n.tag))}function tp(e,n){switch(Is(n),n.tag){case 1:return me(n.type)&&eo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ht(),L(fe),L(se),_s(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return js(n),null;case 13:if(L(F),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(S(340));ct()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return L(F),null;case 4:return ht(),null;case 10:return Rs(n.type._context),null;case 22:case 23:return $s(),null;case 24:return null;default:return null}}var Pr=!1,ie=!1,rp=typeof WeakSet=="function"?WeakSet:Set,C=null;function et(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){H(e,n,r)}else t.current=null}function Qi(e,n,t){try{t()}catch(r){H(e,n,r)}}var ol=!1;function op(e,n){if(Mi=Kr,e=Tu(),bs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var s=0,a=-1,l=-1,u=0,m=0,h=e,g=null;n:for(;;){for(var v;h!==t||o!==0&&h.nodeType!==3||(a=s+o),h!==i||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(v=h.firstChild)!==null;)g=h,h=v;for(;;){if(h===e)break n;if(g===t&&++u===o&&(a=s),g===i&&++m===r&&(l=s),(v=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=v}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Oi={focusedElem:e,selectionRange:t},Kr=!1,C=n;C!==null;)if(n=C,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,C=e;else for(;C!==null;){n=C;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,E=k.memoizedState,d=n.stateNode,c=d.getSnapshotBeforeUpdate(n.elementType===n.type?x:Re(n.type,x),E);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){H(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,C=e;break}C=n.return}return k=ol,ol=!1,k}function Dt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Qi(n,t,i)}o=o.next}while(o!==r)}}function Co(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ki(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function wc(e){var n=e.alternate;n!==null&&(e.alternate=null,wc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[ze],delete n[Xt],delete n[_i],delete n[zh],delete n[Fh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xc(e){return e.tag===5||e.tag===3||e.tag===4}function il(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ji(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Zr));else if(r!==4&&(e=e.child,e!==null))for(Ji(e,n,t),e=e.sibling;e!==null;)Ji(e,n,t),e=e.sibling}function Xi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xi(e,n,t),e=e.sibling;e!==null;)Xi(e,n,t),e=e.sibling}var ee=null,Me=!1;function tn(e,n,t){for(t=t.child;t!==null;)kc(e,n,t),t=t.sibling}function kc(e,n,t){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(vo,t)}catch{}switch(t.tag){case 5:ie||et(t,n);case 6:var r=ee,o=Me;ee=null,tn(e,n,t),ee=r,Me=o,ee!==null&&(Me?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(Me?(e=ee,t=t.stateNode,e.nodeType===8?Zo(e.parentNode,t):e.nodeType===1&&Zo(e,t),$t(e)):Zo(ee,t.stateNode));break;case 4:r=ee,o=Me,ee=t.stateNode.containerInfo,Me=!0,tn(e,n,t),ee=r,Me=o;break;case 0:case 11:case 14:case 15:if(!ie&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Qi(t,n,s),o=o.next}while(o!==r)}tn(e,n,t);break;case 1:if(!ie&&(et(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){H(t,n,a)}tn(e,n,t);break;case 21:tn(e,n,t);break;case 22:t.mode&1?(ie=(r=ie)||t.memoizedState!==null,tn(e,n,t),ie=r):tn(e,n,t);break;default:tn(e,n,t)}}function sl(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new rp),n.forEach(function(r){var o=pp.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function Ne(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,s=n,a=s;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,Me=!1;break e;case 3:ee=a.stateNode.containerInfo,Me=!0;break e;case 4:ee=a.stateNode.containerInfo,Me=!0;break e}a=a.return}if(ee===null)throw Error(S(160));kc(i,s,o),ee=null,Me=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){H(o,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Sc(n,e),n=n.sibling}function Sc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ne(n,e),Le(e),r&4){try{Dt(3,e,e.return),Co(3,e)}catch(x){H(e,e.return,x)}try{Dt(5,e,e.return)}catch(x){H(e,e.return,x)}}break;case 1:Ne(n,e),Le(e),r&512&&t!==null&&et(t,t.return);break;case 5:if(Ne(n,e),Le(e),r&512&&t!==null&&et(t,t.return),e.flags&32){var o=e.stateNode;try{Bt(o,"")}catch(x){H(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=t!==null?t.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Hl(o,i),Si(a,s);var u=Si(a,i);for(s=0;s<l.length;s+=2){var m=l[s],h=l[s+1];m==="style"?Ql(o,h):m==="dangerouslySetInnerHTML"?$l(o,h):m==="children"?Bt(o,h):hs(o,m,h,u)}switch(a){case"input":yi(o,i);break;case"textarea":Vl(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?tt(o,!!i.multiple,v,!1):g!==!!i.multiple&&(i.defaultValue!=null?tt(o,!!i.multiple,i.defaultValue,!0):tt(o,!!i.multiple,i.multiple?[]:"",!1))}o[Xt]=i}catch(x){H(e,e.return,x)}}break;case 6:if(Ne(n,e),Le(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){H(e,e.return,x)}}break;case 3:if(Ne(n,e),Le(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{$t(n.containerInfo)}catch(x){H(e,e.return,x)}break;case 4:Ne(n,e),Le(e);break;case 13:Ne(n,e),Le(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Vs=G())),r&4&&sl(e);break;case 22:if(m=t!==null&&t.memoizedState!==null,e.mode&1?(ie=(u=ie)||m,Ne(n,e),ie=u):Ne(n,e),Le(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(C=e,m=e.child;m!==null;){for(h=C=m;C!==null;){switch(g=C,v=g.child,g.tag){case 0:case 11:case 14:case 15:Dt(4,g,g.return);break;case 1:et(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,t=g.return;try{n=r,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(x){H(r,t,x)}}break;case 5:et(g,g.return);break;case 22:if(g.memoizedState!==null){ll(h);continue}}v!==null?(v.return=g,C=v):ll(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{o=h.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Yl("display",s))}catch(x){H(e,e.return,x)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){H(e,e.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ne(n,e),Le(e),r&4&&sl(e);break;case 21:break;default:Ne(n,e),Le(e)}}function Le(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(xc(t)){var r=t;break e}t=t.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Bt(o,""),r.flags&=-33);var i=il(e);Xi(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=il(e);Ji(e,a,s);break;default:throw Error(S(161))}}catch(l){H(e,e.return,l)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ip(e,n,t){C=e,Tc(e)}function Tc(e,n,t){for(var r=(e.mode&1)!==0;C!==null;){var o=C,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Pr;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||ie;a=Pr;var u=ie;if(Pr=s,(ie=l)&&!u)for(C=o;C!==null;)s=C,l=s.child,s.tag===22&&s.memoizedState!==null?ul(o):l!==null?(l.return=s,C=l):ul(o);for(;i!==null;)C=i,Tc(i),i=i.sibling;C=o,Pr=a,ie=u}al(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,C=i):al(e)}}function al(e){for(;C!==null;){var n=C;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ie||Co(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ie)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:Re(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Va(n,i,r);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Va(n,s,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&$t(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ie||n.flags&512&&Ki(n)}catch(g){H(n,n.return,g)}}if(n===e){C=null;break}if(t=n.sibling,t!==null){t.return=n.return,C=t;break}C=n.return}}function ll(e){for(;C!==null;){var n=C;if(n===e){C=null;break}var t=n.sibling;if(t!==null){t.return=n.return,C=t;break}C=n.return}}function ul(e){for(;C!==null;){var n=C;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Co(4,n)}catch(l){H(n,t,l)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(l){H(n,o,l)}}var i=n.return;try{Ki(n)}catch(l){H(n,i,l)}break;case 5:var s=n.return;try{Ki(n)}catch(l){H(n,s,l)}}}catch(l){H(n,n.return,l)}if(n===e){C=null;break}var a=n.sibling;if(a!==null){a.return=n.return,C=a;break}C=n.return}}var sp=Math.ceil,co=en.ReactCurrentDispatcher,Bs=en.ReactCurrentOwner,Ie=en.ReactCurrentBatchConfig,W=0,Z=null,Y=null,ne=0,ye=0,nt=Tn(0),K=0,or=null,Ln=0,Io=0,Hs=0,zt=null,he=null,Vs=0,ft=1/0,Ve=null,ho=!1,Zi=null,gn=null,Nr=!1,un=null,po=0,Ft=0,es=null,Ur=-1,Br=0;function le(){return W&6?G():Ur!==-1?Ur:Ur=G()}function yn(e){return e.mode&1?W&2&&ne!==0?ne&-ne:Bh.transition!==null?(Br===0&&(Br=au()),Br):(e=j,e!==0||(e=window.event,e=e===void 0?16:fu(e.type)),e):1}function je(e,n,t,r){if(50<Ft)throw Ft=0,es=null,Error(S(185));lr(e,t,r),(!(W&2)||e!==Z)&&(e===Z&&(!(W&2)&&(Io|=t),K===4&&an(e,ne)),ge(e,r),t===1&&W===0&&!(n.mode&1)&&(ft=G()+500,To&&En()))}function ge(e,n){var t=e.callbackNode;Bd(e,n);var r=Qr(e,e===Z?ne:0);if(r===0)t!==null&&va(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&va(t),n===1)e.tag===0?Uh(cl.bind(null,e)):Ou(cl.bind(null,e)),Lh(function(){!(W&6)&&En()}),t=null;else{switch(lu(r)){case 1:t=ys;break;case 4:t=iu;break;case 16:t=Yr;break;case 536870912:t=su;break;default:t=Yr}t=Rc(t,Ec.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ec(e,n){if(Ur=-1,Br=0,W&6)throw Error(S(327));var t=e.callbackNode;if(at()&&e.callbackNode!==t)return null;var r=Qr(e,e===Z?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=fo(e,r);else{n=r;var o=W;W|=2;var i=Cc();(Z!==e||ne!==n)&&(Ve=null,ft=G()+500,On(e,n));do try{up();break}catch(a){bc(e,a)}while(!0);Ns(),co.current=i,W=o,Y!==null?n=0:(Z=null,ne=0,n=K)}if(n!==0){if(n===2&&(o=Ii(e),o!==0&&(r=o,n=ns(e,o))),n===1)throw t=or,On(e,0),an(e,r),ge(e,G()),t;if(n===6)an(e,r);else{if(o=e.current.alternate,!(r&30)&&!ap(o)&&(n=fo(e,r),n===2&&(i=Ii(e),i!==0&&(r=i,n=ns(e,i))),n===1))throw t=or,On(e,0),an(e,r),ge(e,G()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(S(345));case 2:Pn(e,he,Ve);break;case 3:if(an(e,r),(r&130023424)===r&&(n=Vs+500-G(),10<n)){if(Qr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){le(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ji(Pn.bind(null,e,he,Ve),n);break}Pn(e,he,Ve);break;case 4:if(an(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var s=31-We(r);i=1<<s,s=n[s],s>o&&(o=s),r&=~i}if(r=o,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sp(r/1960))-r,10<r){e.timeoutHandle=ji(Pn.bind(null,e,he,Ve),r);break}Pn(e,he,Ve);break;case 5:Pn(e,he,Ve);break;default:throw Error(S(329))}}}return ge(e,G()),e.callbackNode===t?Ec.bind(null,e):null}function ns(e,n){var t=zt;return e.current.memoizedState.isDehydrated&&(On(e,n).flags|=256),e=fo(e,n),e!==2&&(n=he,he=t,n!==null&&ts(n)),e}function ts(e){he===null?he=e:he.push.apply(he,e)}function ap(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!_e(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function an(e,n){for(n&=~Hs,n&=~Io,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-We(n),r=1<<t;e[t]=-1,n&=~r}}function cl(e){if(W&6)throw Error(S(327));at();var n=Qr(e,0);if(!(n&1))return ge(e,G()),null;var t=fo(e,n);if(e.tag!==0&&t===2){var r=Ii(e);r!==0&&(n=r,t=ns(e,r))}if(t===1)throw t=or,On(e,0),an(e,n),ge(e,G()),t;if(t===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Pn(e,he,Ve),ge(e,G()),null}function Gs(e,n){var t=W;W|=1;try{return e(n)}finally{W=t,W===0&&(ft=G()+500,To&&En())}}function Dn(e){un!==null&&un.tag===0&&!(W&6)&&at();var n=W;W|=1;var t=Ie.transition,r=j;try{if(Ie.transition=null,j=1,e)return e()}finally{j=r,Ie.transition=t,W=n,!(W&6)&&En()}}function $s(){ye=nt.current,L(nt)}function On(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,qh(t)),Y!==null)for(t=Y.return;t!==null;){var r=t;switch(Is(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&eo();break;case 3:ht(),L(fe),L(se),_s();break;case 5:js(r);break;case 4:ht();break;case 13:L(F);break;case 19:L(F);break;case 10:Rs(r.type._context);break;case 22:case 23:$s()}t=t.return}if(Z=e,Y=e=vn(e.current,null),ne=ye=n,K=0,or=null,Hs=Io=Ln=0,he=zt=null,Rn!==null){for(n=0;n<Rn.length;n++)if(t=Rn[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}t.pending=r}Rn=null}return e}function bc(e,n){do{var t=Y;try{if(Ns(),Dr.current=uo,lo){for(var r=U.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}lo=!1}if(qn=0,X=Q=U=null,Lt=!1,nr=0,Bs.current=null,t===null||t.return===null){K=1,or=n,Y=null;break}e:{var i=e,s=t.return,a=t,l=n;if(n=ne,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,m=a,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=Ja(s);if(v!==null){v.flags&=-257,Xa(v,s,a,i,n),v.mode&1&&Ka(i,u,n),n=v,l=u;var k=n.updateQueue;if(k===null){var x=new Set;x.add(l),n.updateQueue=x}else k.add(l);break e}else{if(!(n&1)){Ka(i,u,n),Ys();break e}l=Error(S(426))}}else if(D&&a.mode&1){var E=Ja(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Xa(E,s,a,i,n),As(pt(l,a));break e}}i=l=pt(l,a),K!==4&&(K=2),zt===null?zt=[i]:zt.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var d=lc(i,l,n);Ha(i,d);break e;case 1:a=l;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(gn===null||!gn.has(p)))){i.flags|=65536,n&=-n,i.lanes|=n;var y=uc(i,a,n);Ha(i,y);break e}}i=i.return}while(i!==null)}Ac(t)}catch(w){n=w,Y===t&&t!==null&&(Y=t=t.return);continue}break}while(!0)}function Cc(){var e=co.current;return co.current=uo,e===null?uo:e}function Ys(){(K===0||K===3||K===2)&&(K=4),Z===null||!(Ln&268435455)&&!(Io&268435455)||an(Z,ne)}function fo(e,n){var t=W;W|=2;var r=Cc();(Z!==e||ne!==n)&&(Ve=null,On(e,n));do try{lp();break}catch(o){bc(e,o)}while(!0);if(Ns(),W=t,co.current=r,Y!==null)throw Error(S(261));return Z=null,ne=0,K}function lp(){for(;Y!==null;)Ic(Y)}function up(){for(;Y!==null&&!Wd();)Ic(Y)}function Ic(e){var n=Nc(e.alternate,e,ye);e.memoizedProps=e.pendingProps,n===null?Ac(e):Y=n,Bs.current=null}function Ac(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=tp(t,n),t!==null){t.flags&=32767,Y=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,Y=null;return}}else if(t=np(t,n,ye),t!==null){Y=t;return}if(n=n.sibling,n!==null){Y=n;return}Y=n=e}while(n!==null);K===0&&(K=5)}function Pn(e,n,t){var r=j,o=Ie.transition;try{Ie.transition=null,j=1,cp(e,n,t,r)}finally{Ie.transition=o,j=r}return null}function cp(e,n,t,r){do at();while(un!==null);if(W&6)throw Error(S(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Hd(e,i),e===Z&&(Y=Z=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Nr||(Nr=!0,Rc(Yr,function(){return at(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Ie.transition,Ie.transition=null;var s=j;j=1;var a=W;W|=4,Bs.current=null,op(e,t),Sc(t,e),Nh(Oi),Kr=!!Mi,Oi=Mi=null,e.current=t,ip(t),jd(),W=a,j=s,Ie.transition=i}else e.current=t;if(Nr&&(Nr=!1,un=e,po=o),i=e.pendingLanes,i===0&&(gn=null),Ld(t.stateNode),ge(e,G()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(ho)throw ho=!1,e=Zi,Zi=null,e;return po&1&&e.tag!==0&&at(),i=e.pendingLanes,i&1?e===es?Ft++:(Ft=0,es=e):Ft=0,En(),null}function at(){if(un!==null){var e=lu(po),n=Ie.transition,t=j;try{if(Ie.transition=null,j=16>e?16:e,un===null)var r=!1;else{if(e=un,un=null,po=0,W&6)throw Error(S(331));var o=W;for(W|=4,C=e.current;C!==null;){var i=C,s=i.child;if(C.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(C=u;C!==null;){var m=C;switch(m.tag){case 0:case 11:case 15:Dt(8,m,i)}var h=m.child;if(h!==null)h.return=m,C=h;else for(;C!==null;){m=C;var g=m.sibling,v=m.return;if(wc(m),m===u){C=null;break}if(g!==null){g.return=v,C=g;break}C=v}}}var k=i.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var E=x.sibling;x.sibling=null,x=E}while(x!==null)}}C=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,C=s;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Dt(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,C=d;break e}C=i.return}}var c=e.current;for(C=c;C!==null;){s=C;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,C=p;else e:for(s=c;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Co(9,a)}}catch(w){H(a,a.return,w)}if(a===s){C=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,C=y;break e}C=a.return}}if(W=o,En(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(vo,e)}catch{}r=!0}return r}finally{j=t,Ie.transition=n}}return!1}function dl(e,n,t){n=pt(t,n),n=lc(e,n,1),e=mn(e,n,1),n=le(),e!==null&&(lr(e,1,n),ge(e,n))}function H(e,n,t){if(e.tag===3)dl(e,e,t);else for(;n!==null;){if(n.tag===3){dl(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gn===null||!gn.has(r))){e=pt(t,e),e=uc(n,e,1),n=mn(n,e,1),e=le(),n!==null&&(lr(n,1,e),ge(n,e));break}}n=n.return}}function dp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=le(),e.pingedLanes|=e.suspendedLanes&t,Z===e&&(ne&t)===t&&(K===4||K===3&&(ne&130023424)===ne&&500>G()-Vs?On(e,0):Hs|=t),ge(e,n)}function Pc(e,n){n===0&&(e.mode&1?(n=xr,xr<<=1,!(xr&130023424)&&(xr=4194304)):n=1);var t=le();e=Xe(e,n),e!==null&&(lr(e,n,t),ge(e,t))}function hp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Pc(e,t)}function pp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(n),Pc(e,t)}var Nc;Nc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||fe.current)pe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return pe=!1,ep(e,n,t);pe=!!(e.flags&131072)}else pe=!1,D&&n.flags&1048576&&Wu(n,ro,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Fr(e,n),e=n.pendingProps;var o=ut(n,se.current);st(n,t),o=Ls(null,n,r,e,o,t);var i=Ds();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,me(r)?(i=!0,no(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Os(n),o.updater=bo,n.stateNode=o,o._reactInternals=n,Ui(n,r,e,t),n=Vi(null,n,r,!0,i,t)):(n.tag=0,D&&i&&Cs(n),ae(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Fr(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=mp(r),e=Re(r,e),o){case 0:n=Hi(null,n,r,e,t);break e;case 1:n=nl(null,n,r,e,t);break e;case 11:n=Za(null,n,r,e,t);break e;case 14:n=el(null,n,r,Re(r.type,e),t);break e}throw Error(S(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Re(r,o),Hi(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Re(r,o),nl(e,n,r,o,t);case 3:e:{if(pc(n),e===null)throw Error(S(387));r=n.pendingProps,i=n.memoizedState,o=i.element,zu(e,n),so(n,r,null,t);var s=n.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=pt(Error(S(423)),n),n=tl(e,n,r,t,o);break e}else if(r!==o){o=pt(Error(S(424)),n),n=tl(e,n,r,t,o);break e}else for(ve=fn(n.stateNode.containerInfo.firstChild),we=n,D=!0,Oe=null,t=Lu(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ct(),r===o){n=Ze(e,n,t);break e}ae(e,n,r,t)}n=n.child}return n;case 5:return Fu(n),e===null&&Di(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,Wi(r,o)?s=null:i!==null&&Wi(r,i)&&(n.flags|=32),hc(e,n),ae(e,n,s,t),n.child;case 6:return e===null&&Di(n),null;case 13:return fc(e,n,t);case 4:return Ws(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=dt(n,null,r,t):ae(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Re(r,o),Za(e,n,r,o,t);case 7:return ae(e,n,n.pendingProps,t),n.child;case 8:return ae(e,n,n.pendingProps.children,t),n.child;case 12:return ae(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,s=o.value,_(oo,r._currentValue),r._currentValue=s,i!==null)if(_e(i.value,s)){if(i.children===o.children&&!fe.current){n=Ze(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Qe(-1,t&-t),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?l.next=l:(l.next=m.next,m.next=l),u.pending=l}}i.lanes|=t,l=i.alternate,l!==null&&(l.lanes|=t),zi(i.return,t,n),a.lanes|=t;break}l=l.next}}else if(i.tag===10)s=i.type===n.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(S(341));s.lanes|=t,a=s.alternate,a!==null&&(a.lanes|=t),zi(s,t,n),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===n){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}ae(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,st(n,t),o=Ae(o),r=r(o),n.flags|=1,ae(e,n,r,t),n.child;case 14:return r=n.type,o=Re(r,n.pendingProps),o=Re(r.type,o),el(e,n,r,o,t);case 15:return cc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Re(r,o),Fr(e,n),n.tag=1,me(r)?(e=!0,no(n)):e=!1,st(n,t),ac(n,r,o),Ui(n,r,o,t),Vi(null,n,r,!0,e,t);case 19:return mc(e,n,t);case 22:return dc(e,n,t)}throw Error(S(156,n.tag))};function Rc(e,n){return ou(e,n)}function fp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,n,t,r){return new fp(e,n,t,r)}function Qs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mp(e){if(typeof e=="function")return Qs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fs)return 11;if(e===ms)return 14}return 2}function vn(e,n){var t=e.alternate;return t===null?(t=Ce(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Hr(e,n,t,r,o,i){var s=2;if(r=e,typeof e=="function")Qs(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Vn:return Wn(t.children,o,i,n);case ps:s=8,o|=8;break;case hi:return e=Ce(12,t,n,o|2),e.elementType=hi,e.lanes=i,e;case pi:return e=Ce(13,t,n,o),e.elementType=pi,e.lanes=i,e;case fi:return e=Ce(19,t,n,o),e.elementType=fi,e.lanes=i,e;case Fl:return Ao(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Dl:s=10;break e;case zl:s=9;break e;case fs:s=11;break e;case ms:s=14;break e;case rn:s=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return n=Ce(s,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function Wn(e,n,t,r){return e=Ce(7,e,r,n),e.lanes=t,e}function Ao(e,n,t,r){return e=Ce(22,e,r,n),e.elementType=Fl,e.lanes=t,e.stateNode={isHidden:!1},e}function ai(e,n,t){return e=Ce(6,e,null,n),e.lanes=t,e}function li(e,n,t){return n=Ce(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function gp(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uo(0),this.expirationTimes=Uo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ks(e,n,t,r,o,i,s,a,l){return e=new gp(e,n,t,a,l),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Ce(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Os(i),e}function yp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Mc(e){if(!e)return kn;e=e._reactInternals;e:{if(Fn(e)!==e||e.tag!==1)throw Error(S(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(me(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(S(171))}if(e.tag===1){var t=e.type;if(me(t))return Mu(e,t,n)}return n}function Oc(e,n,t,r,o,i,s,a,l){return e=Ks(t,r,!0,e,o,i,s,a,l),e.context=Mc(null),t=e.current,r=le(),o=yn(t),i=Qe(r,o),i.callback=n??null,mn(t,i,o),e.current.lanes=o,lr(e,o,r),ge(e,r),e}function Po(e,n,t,r){var o=n.current,i=le(),s=yn(o);return t=Mc(t),n.context===null?n.context=t:n.pendingContext=t,n=Qe(i,s),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=mn(o,n,s),e!==null&&(je(e,o,s,i),Lr(e,o,s)),s}function mo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hl(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Js(e,n){hl(e,n),(e=e.alternate)&&hl(e,n)}function vp(){return null}var Wc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xs(e){this._internalRoot=e}No.prototype.render=Xs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(S(409));Po(e,n,null,null)};No.prototype.unmount=Xs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Dn(function(){Po(null,e,null,null)}),n[Je]=null}};function No(e){this._internalRoot=e}No.prototype.unstable_scheduleHydration=function(e){if(e){var n=du();e={blockedOn:null,target:e,priority:n};for(var t=0;t<sn.length&&n!==0&&n<sn[t].priority;t++);sn.splice(t,0,e),t===0&&pu(e)}};function Zs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ro(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pl(){}function wp(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=mo(s);i.call(u)}}var s=Oc(n,r,e,0,null,!1,!1,"",pl);return e._reactRootContainer=s,e[Je]=s.current,Kt(e.nodeType===8?e.parentNode:e),Dn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=mo(l);a.call(u)}}var l=Ks(e,0,!1,null,null,!1,!1,"",pl);return e._reactRootContainer=l,e[Je]=l.current,Kt(e.nodeType===8?e.parentNode:e),Dn(function(){Po(n,l,t,r)}),l}function Mo(e,n,t,r,o){var i=t._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var l=mo(s);a.call(l)}}Po(n,s,e,o)}else s=wp(t,n,e,o,r);return mo(s)}uu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Nt(n.pendingLanes);t!==0&&(vs(n,t|1),ge(n,G()),!(W&6)&&(ft=G()+500,En()))}break;case 13:Dn(function(){var r=Xe(e,1);if(r!==null){var o=le();je(r,e,1,o)}}),Js(e,1)}};ws=function(e){if(e.tag===13){var n=Xe(e,134217728);if(n!==null){var t=le();je(n,e,134217728,t)}Js(e,134217728)}};cu=function(e){if(e.tag===13){var n=yn(e),t=Xe(e,n);if(t!==null){var r=le();je(t,e,n,r)}Js(e,n)}};du=function(){return j};hu=function(e,n){var t=j;try{return j=e,n()}finally{j=t}};Ei=function(e,n,t){switch(n){case"input":if(yi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=So(r);if(!o)throw Error(S(90));Bl(r),yi(r,o)}}}break;case"textarea":Vl(e,t);break;case"select":n=t.value,n!=null&&tt(e,!!t.multiple,n,!1)}};Xl=Gs;Zl=Dn;var xp={usingClientEntryPoint:!1,Events:[cr,Qn,So,Kl,Jl,Gs]},It={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kp={bundleType:It.bundleType,version:It.version,rendererPackageName:It.rendererPackageName,rendererConfig:It.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:en.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tu(e),e===null?null:e.stateNode},findFiberByHostInstance:It.findFiberByHostInstance||vp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rr.isDisabled&&Rr.supportsFiber)try{vo=Rr.inject(kp),Ue=Rr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xp;Se.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zs(n))throw Error(S(200));return yp(e,n,null,t)};Se.createRoot=function(e,n){if(!Zs(e))throw Error(S(299));var t=!1,r="",o=Wc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=Ks(e,1,!1,null,null,t,!1,r,o),e[Je]=n.current,Kt(e.nodeType===8?e.parentNode:e),new Xs(n)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=tu(n),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Dn(e)};Se.hydrate=function(e,n,t){if(!Ro(n))throw Error(S(200));return Mo(null,e,n,!0,t)};Se.hydrateRoot=function(e,n,t){if(!Zs(e))throw Error(S(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",s=Wc;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=Oc(n,null,e,1,t??null,o,!1,i,s),e[Je]=n.current,Kt(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new No(n)};Se.render=function(e,n,t){if(!Ro(n))throw Error(S(200));return Mo(null,e,n,!1,t)};Se.unmountComponentAtNode=function(e){if(!Ro(e))throw Error(S(40));return e._reactRootContainer?(Dn(function(){Mo(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};Se.unstable_batchedUpdates=Gs;Se.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ro(t))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Mo(e,n,t,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function jc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jc)}catch(e){console.error(e)}}jc(),jl.exports=Se;var Sp=jl.exports,fl=Sp;ci.createRoot=fl.createRoot,ci.hydrateRoot=fl.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ir.apply(this,arguments)}var cn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(cn||(cn={}));const ml="popstate";function Tp(e){e===void 0&&(e={});function n(r,o){let{pathname:i,search:s,hash:a}=r.location;return rs("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(r,o){return typeof o=="string"?o:go(o)}return bp(n,t,null,e)}function $(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function _c(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Ep(){return Math.random().toString(36).substr(2,8)}function gl(e,n){return{usr:e.state,key:e.key,idx:n}}function rs(e,n,t,r){return t===void 0&&(t=null),ir({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?vt(n):n,{state:t,key:n&&n.key||r||Ep()})}function go(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function vt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function bp(e,n,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=cn.Pop,l=null,u=m();u==null&&(u=0,s.replaceState(ir({},s.state,{idx:u}),""));function m(){return(s.state||{idx:null}).idx}function h(){a=cn.Pop;let E=m(),d=E==null?null:E-u;u=E,l&&l({action:a,location:x.location,delta:d})}function g(E,d){a=cn.Push;let c=rs(x.location,E,d);u=m()+1;let p=gl(c,u),y=x.createHref(c);try{s.pushState(p,"",y)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;o.location.assign(y)}i&&l&&l({action:a,location:x.location,delta:1})}function v(E,d){a=cn.Replace;let c=rs(x.location,E,d);u=m();let p=gl(c,u),y=x.createHref(c);s.replaceState(p,"",y),i&&l&&l({action:a,location:x.location,delta:0})}function k(E){let d=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof E=="string"?E:go(E);return c=c.replace(/ $/,"%20"),$(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let x={get action(){return a},get location(){return e(o,s)},listen(E){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(ml,h),l=E,()=>{o.removeEventListener(ml,h),l=null}},createHref(E){return n(o,E)},createURL:k,encodeLocation(E){let d=k(E);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:g,replace:v,go(E){return s.go(E)}};return x}var yl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(yl||(yl={}));function Cp(e,n,t){return t===void 0&&(t="/"),Ip(e,n,t)}function Ip(e,n,t,r){let o=typeof n=="string"?vt(n):n,i=ea(o.pathname||"/",t);if(i==null)return null;let s=qc(e);Ap(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=zp(i);a=qp(s[l],u)}return a}function qc(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(i,s,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};l.relativePath.startsWith("/")&&($(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=wn([r,l.relativePath]),m=t.concat(l);i.children&&i.children.length>0&&($(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),qc(i.children,n,m,u)),!(i.path==null&&!i.index)&&n.push({path:u,score:jp(u,i.index),routesMeta:m})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let l of Lc(i.path))o(i,s,l)}),n}function Lc(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,o=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=Lc(r.join("/")),a=[];return a.push(...s.map(l=>l===""?i:[i,l].join("/"))),o&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Ap(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:_p(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Pp=/^:[\w-]+$/,Np=3,Rp=2,Mp=1,Op=10,Wp=-2,vl=e=>e==="*";function jp(e,n){let t=e.split("/"),r=t.length;return t.some(vl)&&(r+=Wp),n&&(r+=Rp),t.filter(o=>!vl(o)).reduce((o,i)=>o+(Pp.test(i)?Np:i===""?Mp:Op),r)}function _p(e,n){return e.length===n.length&&e.slice(0,-1).every((r,o)=>r===n[o])?e[e.length-1]-n[n.length-1]:0}function qp(e,n,t){let{routesMeta:r}=e,o={},i="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,m=i==="/"?n:n.slice(i.length)||"/",h=Lp({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},m),g=l.route;if(!h)return null;Object.assign(o,h.params),s.push({params:o,pathname:wn([i,h.pathname]),pathnameBase:Hp(wn([i,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(i=wn([i,h.pathnameBase]))}return s}function Lp(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Dp(e.path,e.caseSensitive,e.end),o=n.match(t);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,m,h)=>{let{paramName:g,isOptional:v}=m;if(g==="*"){let x=a[h]||"";s=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const k=a[h];return v&&!k?u[g]=void 0:u[g]=(k||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:s,pattern:e}}function Dp(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),_c(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),r]}function zp(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return _c(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function ea(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function Fp(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:o=""}=typeof e=="string"?vt(e):e;return{pathname:t?t.startsWith("/")?t:Up(t,n):n,search:Vp(r),hash:Gp(o)}}function Up(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function ui(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bp(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function na(e,n){let t=Bp(e);return n?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function ta(e,n,t,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=vt(e):(o=ir({},e),$(!o.pathname||!o.pathname.includes("?"),ui("?","pathname","search",o)),$(!o.pathname||!o.pathname.includes("#"),ui("#","pathname","hash",o)),$(!o.search||!o.search.includes("#"),ui("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=t;else{let h=n.length-1;if(!r&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),h-=1;o.pathname=g.join("/")}a=h>=0?n[h]:"/"}let l=Fp(o,a),u=s&&s!=="/"&&s.endsWith("/"),m=(i||s===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(u||m)&&(l.pathname+="/"),l}const wn=e=>e.join("/").replace(/\/\/+/g,"/"),Hp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Vp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Gp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function $p(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Dc=["post","put","patch","delete"];new Set(Dc);const Yp=["get",...Dc];new Set(Yp);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sr(){return sr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},sr.apply(this,arguments)}const ra=T.createContext(null),Qp=T.createContext(null),bn=T.createContext(null),Oo=T.createContext(null),nn=T.createContext({outlet:null,matches:[],isDataRoute:!1}),zc=T.createContext(null);function Kp(e,n){let{relative:t}=n===void 0?{}:n;wt()||$(!1);let{basename:r,navigator:o}=T.useContext(bn),{hash:i,pathname:s,search:a}=Bc(e,{relative:t}),l=s;return r!=="/"&&(l=s==="/"?r:wn([r,s])),o.createHref({pathname:l,search:a,hash:i})}function wt(){return T.useContext(Oo)!=null}function hr(){return wt()||$(!1),T.useContext(Oo).location}function Fc(e){T.useContext(bn).static||T.useLayoutEffect(e)}function oa(){let{isDataRoute:e}=T.useContext(nn);return e?cf():Jp()}function Jp(){wt()||$(!1);let e=T.useContext(ra),{basename:n,future:t,navigator:r}=T.useContext(bn),{matches:o}=T.useContext(nn),{pathname:i}=hr(),s=JSON.stringify(na(o,t.v7_relativeSplatPath)),a=T.useRef(!1);return Fc(()=>{a.current=!0}),T.useCallback(function(u,m){if(m===void 0&&(m={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=ta(u,JSON.parse(s),i,m.relative==="path");e==null&&n!=="/"&&(h.pathname=h.pathname==="/"?n:wn([n,h.pathname])),(m.replace?r.replace:r.push)(h,m.state,m)},[n,r,s,i,e])}function Uc(){let{matches:e}=T.useContext(nn),n=e[e.length-1];return n?n.params:{}}function Bc(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=T.useContext(bn),{matches:o}=T.useContext(nn),{pathname:i}=hr(),s=JSON.stringify(na(o,r.v7_relativeSplatPath));return T.useMemo(()=>ta(e,JSON.parse(s),i,t==="path"),[e,s,i,t])}function Xp(e,n){return Zp(e,n)}function Zp(e,n,t,r){wt()||$(!1);let{navigator:o}=T.useContext(bn),{matches:i}=T.useContext(nn),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=hr(),m;if(n){var h;let E=typeof n=="string"?vt(n):n;l==="/"||(h=E.pathname)!=null&&h.startsWith(l)||$(!1),m=E}else m=u;let g=m.pathname||"/",v=g;if(l!=="/"){let E=l.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(E.length).join("/")}let k=Cp(e,{pathname:v}),x=of(k&&k.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:wn([l,o.encodeLocation?o.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?l:wn([l,o.encodeLocation?o.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),i,t,r);return n&&x?T.createElement(Oo.Provider,{value:{location:sr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:cn.Pop}},x):x}function ef(){let e=uf(),n=$p(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},n),t?T.createElement("pre",{style:o},t):null,null)}const nf=T.createElement(ef,null);class tf extends T.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?T.createElement(nn.Provider,{value:this.props.routeContext},T.createElement(zc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rf(e){let{routeContext:n,match:t,children:r}=e,o=T.useContext(ra);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),T.createElement(nn.Provider,{value:n},r)}function of(e,n,t,r){var o;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let s=e,a=(o=t)==null?void 0:o.errors;if(a!=null){let m=s.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);m>=0||$(!1),s=s.slice(0,Math.min(s.length,m+1))}let l=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let m=0;m<s.length;m++){let h=s[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=m),h.route.id){let{loaderData:g,errors:v}=t,k=h.route.loader&&g[h.route.id]===void 0&&(!v||v[h.route.id]===void 0);if(h.route.lazy||k){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((m,h,g)=>{let v,k=!1,x=null,E=null;t&&(v=a&&h.route.id?a[h.route.id]:void 0,x=h.route.errorElement||nf,l&&(u<0&&g===0?(df("route-fallback"),k=!0,E=null):u===g&&(k=!0,E=h.route.hydrateFallbackElement||null)));let d=n.concat(s.slice(0,g+1)),c=()=>{let p;return v?p=x:k?p=E:h.route.Component?p=T.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=m,T.createElement(rf,{match:h,routeContext:{outlet:m,matches:d,isDataRoute:t!=null},children:p})};return t&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?T.createElement(tf,{location:t.location,revalidation:t.revalidation,component:x,error:v,children:c(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):c()},null)}var Hc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Hc||{}),Vc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Vc||{});function sf(e){let n=T.useContext(ra);return n||$(!1),n}function af(e){let n=T.useContext(Qp);return n||$(!1),n}function lf(e){let n=T.useContext(nn);return n||$(!1),n}function Gc(e){let n=lf(),t=n.matches[n.matches.length-1];return t.route.id||$(!1),t.route.id}function uf(){var e;let n=T.useContext(zc),t=af(),r=Gc();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function cf(){let{router:e}=sf(Hc.UseNavigateStable),n=Gc(Vc.UseNavigateStable),t=T.useRef(!1);return Fc(()=>{t.current=!0}),T.useCallback(function(o,i){i===void 0&&(i={}),t.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,sr({fromRouteId:n},i)))},[e,n])}const wl={};function df(e,n,t){wl[e]||(wl[e]=!0)}function hf(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function pf(e){let{to:n,replace:t,state:r,relative:o}=e;wt()||$(!1);let{future:i,static:s}=T.useContext(bn),{matches:a}=T.useContext(nn),{pathname:l}=hr(),u=oa(),m=ta(n,na(a,i.v7_relativeSplatPath),l,o==="path"),h=JSON.stringify(m);return T.useEffect(()=>u(JSON.parse(h),{replace:t,state:r,relative:o}),[u,h,o,t,r]),null}function Mt(e){$(!1)}function ff(e){let{basename:n="/",children:t=null,location:r,navigationType:o=cn.Pop,navigator:i,static:s=!1,future:a}=e;wt()&&$(!1);let l=n.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:l,navigator:i,static:s,future:sr({v7_relativeSplatPath:!1},a)}),[l,a,i,s]);typeof r=="string"&&(r=vt(r));let{pathname:m="/",search:h="",hash:g="",state:v=null,key:k="default"}=r,x=T.useMemo(()=>{let E=ea(m,l);return E==null?null:{location:{pathname:E,search:h,hash:g,state:v,key:k},navigationType:o}},[l,m,h,g,v,k,o]);return x==null?null:T.createElement(bn.Provider,{value:u},T.createElement(Oo.Provider,{children:t,value:x}))}function mf(e){let{children:n,location:t}=e;return Xp(os(n),t)}new Promise(()=>{});function os(e,n){n===void 0&&(n=[]);let t=[];return T.Children.forEach(e,(r,o)=>{if(!T.isValidElement(r))return;let i=[...n,o];if(r.type===T.Fragment){t.push.apply(t,os(r.props.children,i));return}r.type!==Mt&&$(!1),!r.props.index||!r.props.children||$(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=os(r.props.children,i)),t.push(s)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function is(){return is=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},is.apply(this,arguments)}function gf(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}function yf(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function vf(e,n){return e.button===0&&(!n||n==="_self")&&!yf(e)}const wf=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],xf="6";try{window.__reactRouterVersion=xf}catch{}const kf="startTransition",xl=dd[kf];function Sf(e){let{basename:n,children:t,future:r,window:o}=e,i=T.useRef();i.current==null&&(i.current=Tp({window:o,v5Compat:!0}));let s=i.current,[a,l]=T.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},m=T.useCallback(h=>{u&&xl?xl(()=>l(h)):l(h)},[l,u]);return T.useLayoutEffect(()=>s.listen(m),[s,m]),T.useEffect(()=>hf(r),[r]),T.createElement(ff,{basename:n,children:t,location:a.location,navigationType:a.action,navigator:s,future:r})}const Tf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ef=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fe=T.forwardRef(function(n,t){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:a,target:l,to:u,preventScrollReset:m,viewTransition:h}=n,g=gf(n,wf),{basename:v}=T.useContext(bn),k,x=!1;if(typeof u=="string"&&Ef.test(u)&&(k=u,Tf))try{let p=new URL(window.location.href),y=u.startsWith("//")?new URL(p.protocol+u):new URL(u),w=ea(y.pathname,v);y.origin===p.origin&&w!=null?u=w+y.search+y.hash:x=!0}catch{}let E=Kp(u,{relative:o}),d=bf(u,{replace:s,state:a,target:l,preventScrollReset:m,relative:o,viewTransition:h});function c(p){r&&r(p),p.defaultPrevented||d(p)}return T.createElement("a",is({},g,{href:k||E,onClick:x||i?r:c,ref:t,target:l}))});var kl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(kl||(kl={}));var Sl;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Sl||(Sl={}));function bf(e,n){let{target:t,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:a}=n===void 0?{}:n,l=oa(),u=hr(),m=Bc(e,{relative:s});return T.useCallback(h=>{if(vf(h,t)){h.preventDefault();let g=r!==void 0?r:go(u)===go(m);l(e,{replace:g,state:o,preventScrollReset:i,relative:s,viewTransition:a})}},[u,l,m,r,o,t,e,i,s,a])}const Mr={courseTitle:"English Language Arts - Grade 6",description:"A comprehensive course covering Vocabulary, Grammar, Reading Comprehension, and Writing",modules:[{id:"vocabulary",title:"Vocabulary",icon:"📚",description:"Expand your word knowledge and understanding",chapters:[{id:"vocab-1",title:"Chapter 1: Context Clues",lessons:[{id:"vocab-1-1",title:"Mastering Context Clues - The IDEAS Method",type:"lesson",content:{introduction:"Context clues are 'detective hints' hidden in the text that help you understand unfamiliar words. In 6th grade, you'll encounter complex academic vocabulary in all subjects, so mastering context clues is essential. To help you remember the different types, we use the acronym IDEAS.",explanation:`**💡 THE IDEAS STRATEGY**

This powerful mnemonic device helps you remember the five types of context clues:

---

**I = INFERENCE Clue**

**How to Spot It**: The meaning is NOT given directly; you must use logic and 'read between the lines.'

**Strategy**: Look at what's happening in the sentence. Use your brain + the clues to figure it out.

**Example**: 'The team felt **melancholy** after losing the championship game in the final second; many sat in silence with their heads down.'

**Analysis**: The text doesn't define melancholy, but the logic tells us:
- They lost the game (sad event)
- They sat in silence (quiet behavior)
- Heads down (body language of sadness)

**Therefore**: Melancholy = a feeling of deep sadness or depression

---

**D = DEFINITION Clue (Punctuation)**

**How to Spot It**: The author uses commas, dashes (—), or parentheses to define the word immediately.

**Signal Punctuation**: , — or ( )

**Strategy**: Look for punctuation that acts like an equals sign!

**Example**: 'The **biome**—a large naturally occurring community of flora and fauna—is being studied by the scientists.'

**Analysis**: The dashes (—) provide the definition right in the sentence.

**Therefore**: Biome = a community of plants and animals in their natural environment

**More Examples**:
- 'The **protagonist**, or main character, faces many challenges.'
- 'She felt **exuberant** (extremely happy and energetic) about the news.'

---

**E = EXAMPLE Clue**

**How to Spot It**: Look for phrases like 'such as,' 'including,' 'for instance,' 'for example,' or 'like.'

**Strategy**: The examples given are all types of the unknown word!

**Example**: 'The kitchen was filled with **confections**, such as chocolate truffles, glazed donuts, and peppermint bark.'

**Analysis**: All the examples (truffles, donuts, bark) are types of sweets or candy.

**Therefore**: Confections = sweet foods, candies, or desserts

**More Examples**:
- 'Various **citrus** fruits, including lemons, oranges, and grapefruits, are rich in vitamin C.'
- 'The museum displayed ancient **artifacts**, such as pottery, weapons, and jewelry.'

---

**A = ANTONYM Clue (Contrast)**

**How to Spot It**: Look for 'signal words' like: however, unlike, but, whereas, although, on the other hand, in contrast, yet

**Strategy**: The unknown word means the OPPOSITE of a word you know!

**Example**: 'The movie was quite **banal**; however, the book it was based on was incredibly original and exciting.'

**Analysis**: 
- Signal word: 'however' (shows contrast)
- The book was 'original and exciting'
- The movie must be the opposite

**Therefore**: Banal = boring, unoriginal, ordinary, predictable

**More Examples**:
- 'Unlike the **tranquil** morning, the afternoon was chaotic and noisy.'
- 'The task seemed **arduous**, but it turned out to be quite easy.'

---

**S = SYNONYM Clue**

**How to Spot It**: The author uses a similar, easier word to clarify the difficult one.

**Signal Words**: or, also known as, in other words, that is, meaning

**Strategy**: Look for a friendlier word nearby that means almost the same thing!

**Example**: 'The desert air was **arid**, or extremely dry, making it difficult for the travelers to stay hydrated.'

**Analysis**: The word 'or' introduces a synonym: 'extremely dry'

**Therefore**: Arid = very dry, lacking moisture

**More Examples**:
- 'The scientist made a **hypothesis**, or educated guess, about the experiment's outcome.'
- 'The athlete was **tenacious**, meaning she never gave up despite the challenges.'

---

**🎯 QUICK REFERENCE TABLE**

| Letter | Type | Signal Words | Example |
|--------|------|--------------|----------|
| **I** | Inference | (none - use logic) | Behavior/situation clues |
| **D** | Definition | , — ( ) 'or' | Word = definition |
| **E** | Example | such as, like, including | Lists examples |
| **A** | Antonym | however, unlike, but | Shows opposite |
| **S** | Synonym | or, meaning, that is | Gives similar word |

---

**🔍 HOW TO USE IDEAS**

**Step 1**: Read the entire sentence carefully
**Step 2**: Ask yourself: 'Which IDEAS strategy can I use?'
**Step 3**: Apply that strategy to determine meaning
**Step 4**: Check if your answer makes sense in context

**Remember**: Sometimes sentences use MORE THAN ONE type of clue! Use them all!`,examples:[{text:"INFERENCE: 'The aroma of freshly baked bread and cinnamon rolls was so enticing that customers lined up outside the bakery before it even opened.'",explanation:"Logic tells us: People lining up early means something is very appealing. Enticing = attractive, tempting, appealing."},{text:"DEFINITION: 'The expedition required stamina—the physical and mental strength to endure long periods of activity—from all participants.'",explanation:"The dashes provide the definition. Stamina = strength and endurance."},{text:"EXAMPLE: 'The garden contained various flora, such as roses, tulips, sunflowers, and daisies.'",explanation:"All examples are flowers/plants. Flora = plants."},{text:"ANTONYM: 'Although the instructions seemed ambiguous at first, they became crystal clear once we started.'",explanation:"'Although' signals contrast. Opposite of 'crystal clear' is ambiguous = unclear, confusing."},{text:"SYNONYM: 'The lecture was mundane, or ordinary and boring, so many students struggled to stay awake.'",explanation:"'Or' introduces synonyms. Mundane = ordinary and boring."}]}},{id:"vocab-1-2",title:"Practice: The IDEAS Method",type:"exercise",content:{instructions:"Use the IDEAS method to determine the meaning of each underlined word. First, identify which type of context clue is being used (Inference, Definition, Example, Antonym, or Synonym), then choose the correct meaning.",questions:[{id:"q1",question:"The ancient artifact was so fragile that the archaeologists handled it with extreme care, wrapping it in special protective material.",word:"fragile",options:["strong and sturdy","easily broken or delicate","very old and ancient","valuable and rare"],correctAnswer:1,explanation:"INFERENCE clue: The careful handling and protective wrapping tell us logically that 'fragile' means easily broken or delicate."},{id:"q2",question:"The teacher's meticulous grading—checking every detail, comma, and spelling error—meant students received thorough feedback.",word:"meticulous",options:["careless and rushed","quick and efficient","extremely careful and thorough","strict and mean"],correctAnswer:2,explanation:"DEFINITION clue: The dashes (—) provide the definition directly: checking every detail = meticulous means extremely careful and thorough."},{id:"q3",question:"The storm caused havoc in the town: trees were uprooted, power lines snapped, several homes lost their roofs, and flooding covered the streets.",word:"havoc",options:["peace and calm","widespread chaos and destruction","heavy rain","loud noise"],correctAnswer:1,explanation:"EXAMPLE clue: The colon (:) introduces examples of damage. All examples show destruction, so havoc = widespread chaos and destruction."},{id:"q4",question:"The doctor's prognosis, or prediction about the patient's recovery, was optimistic.",word:"prognosis",options:["medical treatment","prediction or forecast","diagnosis of illness","prescription medicine"],correctAnswer:1,explanation:"SYNONYM clue: The word 'or' introduces a synonym: 'prediction' clarifies that prognosis = a prediction or forecast about recovery."},{id:"q5",question:"Although the hike up the mountain was arduous, the walk back down was surprisingly easy and relaxing.",word:"arduous",options:["easy and simple","dangerous and scary","difficult and exhausting","boring and dull"],correctAnswer:2,explanation:"ANTONYM clue: 'Although' signals contrast. The opposite of 'easy and relaxing' is arduous = difficult and exhausting."},{id:"q6",question:"The celebration included various festivities, such as fireworks, live music, dancing, and a parade through town.",word:"festivities",options:["serious meetings","joyful celebration activities","food and drinks","decorations"],correctAnswer:1,explanation:"EXAMPLE clue: 'Such as' introduces examples. All examples (fireworks, music, dancing, parade) are celebration activities. Festivities = joyful celebration activities."},{id:"q7",question:"The dessert looked delectable—absolutely delicious and appealing—so everyone wanted to try it.",word:"delectable",options:["expensive","colorful","delicious and appealing","healthy"],correctAnswer:2,explanation:"DEFINITION clue: The dashes (—) provide the definition directly: 'absolutely delicious and appealing' = delectable."},{id:"q8",question:"Unlike the protagonist who was brave and heroic, the antagonist was cowardly and cruel throughout the story.",word:"protagonist",options:["villain or bad character","main character or hero","author of the story","narrator who tells the story"],correctAnswer:1,explanation:"ANTONYM clue + Context: 'Unlike' shows contrast with 'antagonist' (the opposing character). The protagonist is described as 'brave and heroic,' indicating the main character or hero."},{id:"q9",question:"The student's response was concise, meaning brief and to the point, which impressed the teacher.",word:"concise",options:["long and detailed","brief and to the point","confusing and unclear","well-written"],correctAnswer:1,explanation:"SYNONYM clue: 'Meaning' introduces a synonym phrase. Concise = brief and to the point."},{id:"q10",question:"After three hours of intense debate, the committee finally reached a consensus and announced their unified decision to the public.",word:"consensus",options:["disagreement","general agreement","vote","compromise"],correctAnswer:1,explanation:"INFERENCE clue: After long debate, they reached something and announced a 'unified decision.' Logic tells us consensus = general agreement among a group."}]}}]},{id:"vocab-2",title:"Chapter 2: Word Roots and Affixes",lessons:[{id:"vocab-2-1",title:"Word Building Blocks: Greek and Latin Roots & Affixes",type:"lesson",content:{introduction:"Many English words come from Greek and Latin 'building blocks' called roots and affixes. Understanding these parts helps you 'unlock' the meaning of thousands of unfamiliar words—like having a superpower for vocabulary! This is one of the most important skills for Grade 6 academic success because academic vocabulary is built from these roots.",explanation:`**🏛️ WHY LEARN ROOTS AND AFFIXES?**

**The Power of Word Parts**:
- English has over 1 million words, but knowing just 20 Greek and Latin roots helps you understand over 100,000 words!
- When you see an unfamiliar word on a test or in a book, you can use word parts to figure out its meaning.
- Academic vocabulary (words used in science, history, and literature) is mostly based on Greek and Latin.

**THE THREE PARTS OF A WORD**:

1. **PREFIX** = Beginning (changes or adds to the meaning)
2. **ROOT** = Middle (core meaning)
3. **SUFFIX** = End (changes the word type or meaning)

**Example**: **un**-**break**-**able**
- **un-** (prefix) = not
- **break** (root) = to separate into pieces
- **-able** (suffix) = capable of
- **Meaning**: not capable of being broken

---

**📚 COMMON PREFIXES (BEGINNING)**

**Prefixes Meaning 'NOT' or 'OPPOSITE'**:

| Prefix | Meaning | Examples |
|--------|---------|----------|
| **un-** | not, opposite | unhappy, unlock, unfair |
| **in-/im-/il-/ir-** | not | inactive, impossible, illegal, irregular |
| **dis-** | not, opposite | disagree, disappear, dislike |
| **non-** | not | nonfiction, nonstop, nonsense |
| **anti-** | against | antibacterial, antisocial, antidote |

**Prefixes About TIME**:

| Prefix | Meaning | Examples |
|--------|---------|----------|
| **pre-** | before | preview, predict, prefix, prehistoric |
| **post-** | after | postpone, postscript, postwar, postgame |
| **re-** | again, back | rewrite, return, replay, rebuild |

**Prefixes About PLACE or DIRECTION**:

| Prefix | Meaning | Examples |
|--------|---------|----------|
| **trans-** | across, beyond | transport, transfer, translate, transcontinental |
| **sub-** | under, below | submarine, subway, subzero, subtitle |
| **super-** | above, beyond | superhero, supernatural, superior |
| **inter-** | between | international, interact, interrupt |
| **ex-** | out, from | exit, export, exclude, exhale |

---

**🌱 COMMON ROOTS (MIDDLE) - THE CORE MEANING**

**GREEK ROOTS**:

| Root | Meaning | Examples |
|------|---------|----------|
| **bio** | life | biology (study of life), biography (life story), biosphere (area of life) |
| **graph** | write | autograph (self-written), paragraph (written section), graphic (written/drawn) |
| **tele** | far, distance | telescope (see far), telephone (sound from far), television (see from far) |
| **phon** | sound | microphone (small sound amplifier), symphony (sounds together), telephone |
| **micro** | small | microscope (see small), microwave (small wave), microbiome (small life) |
| **scope** | see, look | telescope (see far), microscope (see small), periscope (see around) |
| **therm** | heat, temperature | thermometer (measure heat), thermal (relating to heat), thermostat |
| **geo** | earth | geography (earth writing/study), geology (earth study), geothermal |
| **photo** | light | photograph (light writing), photosynthesis (light putting together) |
| **auto** | self | automatic (self-acting), autobiography (self-life story), automobile |

**LATIN ROOTS**:

| Root | Meaning | Examples |
|------|---------|----------|
| **port** | carry | transport (carry across), portable (able to be carried), export (carry out) |
| **dict** | say, speak | dictate (say orders), predict (say before), dictionary (book of sayings) |
| **scrib/script** | write | describe (write about), manuscript (hand-written), inscription (written in) |
| **vid/vis** | see | video (I see), visible (able to be seen), vision (sight), evidence |
| **aud** | hear | audio (sound), auditorium (place to hear), audible (able to be heard) |
| **struct** | build | construct (build together), structure (something built), instruct (build in/teach) |
| **rupt** | break | interrupt (break between), erupt (break out), disrupt (break apart) |
| **tract** | pull, drag | attract (pull toward), tractor (vehicle that pulls), extract (pull out) |
| **spect** | look, see | inspect (look into), spectator (one who looks), respect (look back at) |
| **duc/duct** | lead | conduct (lead together), educate (lead out), reduce (lead back) |

---

**🎯 COMMON SUFFIXES (ENDING)**

**Suffixes That Make NOUNS** (person, place, thing, idea):

| Suffix | Meaning | Examples |
|--------|---------|----------|
| **-er, -or** | person who | teacher, actor, conductor, editor |
| **-ist** | person who practices | scientist, artist, biologist, pianist |
| **-ology** | study of | biology, geology, psychology, zoology |
| **-tion, -sion** | act or process | education, creation, decision, confusion |
| **-ment** | state of being | movement, enjoyment, government |
| **-ness** | quality of | happiness, darkness, kindness, sadness |

**Suffixes That Make ADJECTIVES** (describing words):

| Suffix | Meaning | Examples |
|--------|---------|----------|
| **-able, -ible** | capable of, able to | readable, visible, breakable, edible |
| **-ful** | full of | beautiful, helpful, cheerful, powerful |
| **-less** | without | careless, homeless, hopeless, fearless |
| **-ous, -ious** | full of, having | dangerous, nervous, curious, famous |

**Suffixes That Make VERBS** (action words):

| Suffix | Meaning | Examples |
|--------|---------|----------|
| **-ify** | to make | clarify (make clear), simplify (make simple) |
| **-ize** | to become | modernize (make modern), realize |
| **-ate** | to make, to do | activate (make active), celebrate |

---

**🔬 PUTTING IT ALL TOGETHER: WORD ANALYSIS**

**Example 1**: **autobiography**
- **auto-** (self) + **bio** (life) + **-graph** (write) + **-y** (makes it a noun)
- **Meaning**: A written account of one's own life

**Example 2**: **microscope**
- **micro-** (small) + **-scope** (see)
- **Meaning**: An instrument for seeing very small things

**Example 3**: **predict**
- **pre-** (before) + **-dict** (say)
- **Meaning**: To say what will happen before it occurs

**Example 4**: **transportation**
- **trans-** (across) + **-port** (carry) + **-tion** (act of)
- **Meaning**: The act of carrying something or someone across a distance

**Example 5**: **geology**
- **geo-** (earth) + **-ology** (study of)
- **Meaning**: The scientific study of Earth's physical structure and substances

---

**💡 STRATEGY: THE 'BREAK IT DOWN' METHOD**

When you encounter an unfamiliar word:

**Step 1**: Break the word into parts (prefix | root | suffix)
**Step 2**: Define each part
**Step 3**: Combine the meanings
**Step 4**: Check if it makes sense in context

**Practice Example**: **interstate**
- **Step 1**: inter- | state
- **Step 2**: inter = between, state = a region/state
- **Step 3**: between states
- **Step 4**: 'We drove on the interstate highway.' ✓ Makes sense!

---

**🎓 WHY THIS MATTERS FOR GRADE 6**

In 6th grade, you'll encounter complex academic vocabulary in:
- **Science**: photosynthesis, ecosystem, hypothesis
- **Social Studies**: geography, democracy, civilization
- **Math**: calculate, equation, geometry
- **Language Arts**: autobiography, metaphor, analyze

Understanding roots and affixes lets you decode these words independently!`,examples:[{text:"**autobiography** (auto + bio + graph + y)",explanation:"**auto** (self) + **bio** (life) + **graph** (write) + **-y** (noun) = A written account of one's own life. Example: Benjamin Franklin's *Autobiography* tells his life story in his own words."},{text:"**microscope** (micro + scope)",explanation:"**micro** (small) + **scope** (see) = An instrument for seeing very small things. Example: We used a microscope in science class to examine cells that are invisible to the naked eye."},{text:"**predict** (pre + dict)",explanation:"**pre** (before) + **dict** (say) = To say what will happen before it occurs. Example: Meteorologists predict the weather by analyzing atmospheric data."},{text:"**transportation** (trans + port + tion)",explanation:"**trans** (across) + **port** (carry) + **-tion** (act of) = The act of carrying people or goods from one place to another. Example: Public transportation in the city includes buses, trains, and subways."},{text:"**geothermal** (geo + therm + al)",explanation:"**geo** (earth) + **therm** (heat) + **-al** (relating to) = Relating to heat from within the Earth. Example: Iceland uses geothermal energy from underground hot springs to heat homes."}]}},{id:"vocab-2-2",title:"Practice: Decoding Words with Roots and Affixes",type:"exercise",content:{instructions:"Use your knowledge of Greek and Latin roots, prefixes, and suffixes to determine the meaning of each word. Apply the 'Break It Down' method: identify each word part, define it, then combine the meanings!",questions:[{id:"q1",question:"What does **telescope** mean based on its roots? (tele = far, scope = see)",word:"telescope",options:["to see far away","to write far away","to hear far away","to speak far away"],correctAnswer:0,explanation:"**tele** (far) + **scope** (see) = An instrument for seeing things that are far away, like stars and planets."},{id:"q2",question:"What does **contradict** mean? (contra = against, dict = say)",word:"contradict",options:["to say loudly","to say something against or opposite","to predict the future","to speak clearly"],correctAnswer:1,explanation:"**contra** (against) + **dict** (say) = To say something that goes against or opposes what someone else said."},{id:"q3",question:"What does **biosphere** mean? (bio = life, sphere = ball/globe)",word:"biosphere",options:["a round ball","the regions of Earth where life exists","a type of microscope","living in space"],correctAnswer:1,explanation:"**bio** (life) + **sphere** (globe) = The regions of Earth's surface and atmosphere where living organisms exist."},{id:"q4",question:"What does **antiseptic** mean? (anti = against, septic = infection/decay)",word:"antiseptic",options:["causing infection","before infection","preventing infection","very clean water"],correctAnswer:2,explanation:"**anti** (against) + **septic** (infection) = Preventing infection or decay by destroying harmful microorganisms. Think of antiseptic wipes!"},{id:"q5",question:"What does **microbiome** mean? (micro = small, bio = life)",word:"microbiome",options:["small animals","tiny living organisms in an environment","a small book about life","microscopic viewing"],correctAnswer:1,explanation:"**micro** (small) + **bio** (life) = The community of tiny living organisms (bacteria, fungi) in a particular environment, like your gut."},{id:"q6",question:"What does **audible** mean? (aud = hear, -ible = able to be)",word:"audible",options:["able to be heard","able to be seen","very loud","relating to audio equipment"],correctAnswer:0,explanation:"**aud** (hear) + **-ible** (able to be) = Able to be heard. 'The teacher's voice was barely audible over the noise.'"},{id:"q7",question:"What does **geothermal** mean? (geo = earth, therm = heat, -al = relating to)",word:"geothermal",options:["relating to cold earth","relating to heat from within Earth","measuring temperature","earth science"],correctAnswer:1,explanation:"**geo** (earth) + **therm** (heat) + **-al** (relating to) = Relating to heat from within the Earth, like hot springs or volcanic activity."},{id:"q8",question:"What does **construct** mean? (con = together, struct = build)",word:"construct",options:["to tear down","to build together","to plan ahead","to measure"],correctAnswer:1,explanation:"**con** (together) + **struct** (build) = To build or put together. 'The students will construct a model bridge in science class.'"},{id:"q9",question:"What does **interrupt** mean? (inter = between, rupt = break)",word:"interrupt",options:["to break apart","to break between or stop temporarily","to continue","to repair something broken"],correctAnswer:1,explanation:"**inter** (between) + **rupt** (break) = To break between or stop something temporarily. 'Please don't interrupt while I'm speaking.'"},{id:"q10",question:"What does **photosynthesis** mean? (photo = light, syn = together, thesis = putting/placing)",word:"photosynthesis",options:["taking pictures","the process plants use to make food with light","light therapy","studying photography"],correctAnswer:1,explanation:"**photo** (light) + **syn** (together) + **thesis** (putting) = The process by which plants put together (create) food using light energy, water, and carbon dioxide."}]}}]},{id:"vocab-3",title:"Chapter 3: Figurative Language",lessons:[{id:"vocab-3-1",title:"Figurative Language: Beyond Literal Meanings",type:"lesson",content:{introduction:"Figurative language is when words mean MORE than their literal (dictionary) definition. Writers use figurative language to create vivid images, express emotions, and make writing more engaging. In Grade 6, you'll encounter figurative language in literature, poetry, and even informational texts.",explanation:`**Understanding Figurative vs. Literal Language:**

**Literal**: Words mean exactly what they say
- 'The cat sat on the mat.' (The cat actually sat there)

**Figurative**: Words have a deeper or different meaning
- 'The classroom was a zoo.' (The classroom was chaotic, not actually a zoo!)

---

**THE FIVE MAIN TYPES:**

**1. SIMILE** 📊

**Definition**: A comparison between two unlike things using 'like' or 'as'

**Signal Words**: like, as, resembles, similar to

**Purpose**: Help readers visualize by comparing to something familiar

**Examples**:
- 'She was **as brave as a lion**.' (comparing bravery to a lion's courage)
- '**Quiet as a mouse**.' (comparing quietness to a mouse)
- 'The snow fell **like a soft blanket**.' (comparing snow to a blanket)
- 'His words were **sharp as knives**.' (comparing hurtful words to knives)
- 'The runner was **as fast as lightning**.' (comparing speed to lightning)

**Why Writers Use Similes**: They make descriptions more vivid and relatable

---

**2. METAPHOR** 🎭

**Definition**: A direct comparison that says one thing IS another thing (NO 'like' or 'as')

**Key Difference from Simile**: More direct - doesn't use comparison words

**Purpose**: Create powerful, memorable images

**Examples**:
- '**Time is money**.' (suggesting time is valuable like money)
- '**The snow is a white blanket** covering the earth.' (direct comparison)
- 'Her **smile was sunshine** on a cloudy day.' (smile = sunshine)
- 'The **classroom was a zoo** during the substitute.' (classroom = zoo)
- 'His **brain is a computer**.' (comparing thinking to a computer)
- 'Life is a **rollercoaster**.'

**Extended Metaphors**: Sometimes writers extend a metaphor across multiple sentences or even an entire poem!

---

**3. PERSONIFICATION** 👤

**Definition**: Giving human qualities, emotions, or actions to non-human things (objects, animals, ideas)

**What Can Be Personified**: Nature, objects, animals, abstract concepts

**Purpose**: Make non-human things relatable and vivid

**Examples**:
- '**The wind whistled** through the trees.' (wind can't actually whistle)
- '**The sun smiled** down on us.' (sun can't smile)
- '**Time flies** when you're having fun.' (time can't fly)
- '**The flowers danced** in the breeze.' (flowers can't dance)
- '**The car coughed and sputtered**.' (cars don't cough)
- '**Opportunity knocked** at his door.' (opportunity can't knock)
- '**The storm raged** all night long.' (showing anger, a human emotion)

**Why Writers Use Personification**: Makes descriptions come alive and creates emotional connections

---

**4. HYPERBOLE** 📈

**Definition**: Extreme exaggeration for emphasis or effect (NOT meant to be taken literally)

**Purpose**: Add humor, emphasize a point, create dramatic effect

**How to Recognize**: The statement is clearly impossible or ridiculous

**Examples**:
- 'I've told you **a million times**!' (you haven't said it a million times)
- 'This backpack **weighs a ton**.' (it doesn't actually weigh 2,000 pounds)
- 'I'm **so hungry I could eat a horse**.' (you wouldn't actually eat a horse)
- 'I've been waiting for **ages**!' (not literally ages/years)
- 'That test was **so hard it killed me**.' (you're not actually dead)
- 'I'm **dying** of boredom.' (not literally dying)

**Why Writers Use Hyperbole**: Makes points memorable and adds dramatic flair

---

**5. ONOMATOPOEIA** 💥

**Definition**: Words that sound like what they mean (sound words)

**Purpose**: Add sensory details; help readers 'hear' the story

**How to Recognize**: Say the word out loud - it sounds like the actual sound!

**Examples by Category**:

**Animal Sounds**:
- buzz (bees), hiss (snakes), meow (cats), woof (dogs), chirp (birds)

**Nature Sounds**:
- splash (water), crackle (fire), rustle (leaves), pitter-patter (rain)

**Action Sounds**:
- bang, crash, thud, boom, pop, crack, snap

**Human Sounds**:
- whisper, giggle, gulp, munch, slurp

**Technology/Object Sounds**:
- beep, click, whoosh, zoom, vroom

**Example in Context**:
'The bacon **sizzled** in the pan while the coffee pot **gurgled** on the counter. Suddenly, a loud **crash** came from upstairs, followed by a **thud**.'

**Why Writers Use Onomatopoeia**: Makes writing more vivid and engaging; appeals to sense of hearing

---

**🎯 QUICK COMPARISON CHART**

| Type | Key Feature | Example |
|------|------------|----------|
| **Simile** | Uses 'like' or 'as' | Brave **as** a lion |
| **Metaphor** | Direct comparison (IS) | Life **is** a journey |
| **Personification** | Human traits to non-human | Wind **whispered** |
| **Hyperbole** | Extreme exaggeration | Waited **forever** |
| **Onomatopoeia** | Sound words | **Splash**, **buzz** |

---

**🔍 HOW TO IDENTIFY FIGURATIVE LANGUAGE**

**Step 1**: Ask yourself: 'Is this literally true?'
- If NO → It's probably figurative!

**Step 2**: Look for signal words
- 'Like' or 'as' → Simile
- 'Is' or 'was' (comparing) → Metaphor
- Human actions for non-human things → Personification
- Impossible exaggeration → Hyperbole
- Sound word → Onomatopoeia

**Step 3**: Determine the effect
- What is the writer trying to make you feel or visualize?

---

**💡 WHY FIGURATIVE LANGUAGE MATTERS**

1. **Makes Writing More Interesting**: Plain sentences become vivid images
2. **Helps You Visualize**: Creates pictures in your mind
3. **Adds Emotion**: Makes you feel what the writer wants you to feel
4. **Improves Your Writing**: Using figurative language makes YOUR writing better
5. **Common in Literature**: You'll see it in every story, poem, and novel

**Remember**: When reading stories, don't take figurative language literally! The character doesn't ACTUALLY have butterflies in their stomach! 🦋`,examples:[{text:"SIMILE: 'The test was as easy as pie, so I finished quickly and confidently.'",explanation:"Uses 'as...as' to compare the test's easiness to pie (which is considered easy). This is NOT a metaphor because it uses 'as.'"},{text:"METAPHOR: 'The library is a treasure trove of knowledge waiting to be discovered.'",explanation:"Directly compares the library to a treasure trove (no 'like' or 'as'). Suggests the library is full of valuable information."},{text:"PERSONIFICATION: 'The old house groaned and creaked as the wind battered its walls.'",explanation:"Houses can't actually groan (a human sound). This gives the house human-like qualities to show it's old and struggling."},{text:"HYPERBOLE: 'I'm so tired I could sleep for a year!'",explanation:"Obviously impossible - no one sleeps for a year! This exaggeration emphasizes extreme tiredness."},{text:"ONOMATOPOEIA: 'The bacon sizzled and popped in the hot pan.'",explanation:"'Sizzled' and 'popped' are sound words that help you hear the bacon cooking. Say them out loud!"},{text:"MIXED: 'The thunder roared like an angry giant, making the windows rattle.'",explanation:"Contains BOTH simile ('like an angry giant') and onomatopoeia ('roared' - a sound word). Writers often combine types!"}]}},{id:"vocab-3-2",title:"Practice: Figurative Language",type:"exercise",content:{instructions:"Read each sentence carefully and identify the type of figurative language being used. Remember to look for signal words and ask yourself if the statement is literally true.",questions:[{id:"q1",question:"The moon was a glowing pearl in the night sky, casting its gentle light across the valley.",options:["Simile","Metaphor","Personification","Hyperbole","Onomatopoeia"],correctAnswer:1,explanation:"This is a **metaphor**. The moon is directly compared to a pearl without using 'like' or 'as'. The comparison suggests the moon is round, white, and luminous."},{id:"q2",question:"After running the marathon in the scorching heat, her legs felt like jelly, barely able to support her weight.",options:["Simile","Metaphor","Personification","Hyperbole","Onomatopoeia"],correctAnswer:0,explanation:"This is a **simile** using 'like' to compare her tired legs to jelly, suggesting they were weak, wobbly, and unstable."},{id:"q3",question:"The flowers danced gracefully in the gentle breeze, swaying back and forth like ballerinas on a stage.",options:["Simile only","Metaphor only","Personification only","Both simile and personification","Onomatopoeia"],correctAnswer:3,explanation:"This contains **both personification** (flowers 'danced' - a human action) **and simile** ('like ballerinas' - uses 'like' for comparison)."},{id:"q4",question:"I have a million things to do before tomorrow, and I haven't even started the first one!",options:["Simile","Metaphor","Personification","Hyperbole","Onomatopoeia"],correctAnswer:3,explanation:"This is **hyperbole** - an extreme exaggeration for emphasis. The person doesn't literally have a million tasks; they're emphasizing feeling overwhelmed."},{id:"q5",question:"The old computer groaned and wheezed as it struggled to start up, protesting against being turned on.",options:["Simile","Metaphor","Personification","Hyperbole","Onomatopoeia"],correctAnswer:2,explanation:"This is **personification**. Computers don't actually groan, wheeze, or protest - these are human sounds and actions, giving the computer human-like qualities."},{id:"q6",question:"Her smile was like sunshine breaking through dark storm clouds, warming everyone around her.",options:["Simile","Metaphor","Personification","Hyperbole","Onomatopoeia"],correctAnswer:0,explanation:"This is a **simile** using 'like' to compare her smile to sunshine, suggesting it was bright, uplifting, and brought joy to others."},{id:"q7",question:"The thunder boomed and rumbled across the sky, while the rain pitter-pattered on the roof.",options:["Simile","Metaphor","Personification","Hyperbole","Onomatopoeia"],correctAnswer:4,explanation:"This uses **onomatopoeia**. 'Boomed,' 'rumbled,' and 'pitter-pattered' are all sound words that imitate the actual sounds they describe."},{id:"q8",question:"Time is a thief that steals our most precious moments when we're not paying attention.",options:["Simile","Metaphor with personification","Personification only","Hyperbole","Onomatopoeia"],correctAnswer:1,explanation:"This is a **metaphor** (time IS a thief - direct comparison) combined with **personification** (time 'steals' - a human action)."},{id:"q9",question:"I'm so hungry I could eat an entire elephant right now!",options:["Simile","Metaphor","Personification","Hyperbole","Onomatopoeia"],correctAnswer:3,explanation:"This is **hyperbole** - obvious exaggeration for effect. The person is very hungry but wouldn't actually eat an elephant!"},{id:"q10",question:"The snake slithered silently through the grass, its scales making a soft hiss as it moved.",options:["Simile","Metaphor","Personification","Hyperbole","Onomatopoeia"],correctAnswer:4,explanation:"This uses **onomatopoeia**. 'Slithered' and 'hiss' are sound words that help you hear the snake's movement."}]}}]},{id:"vocab-4",title:"Chapter 4: Idioms and Expressions",lessons:[{id:"vocab-4-1",title:"Mastering Idioms: When Words Don't Mean What They Say",type:"lesson",content:{introduction:"An idiom is a cultural phrase or expression whose meaning CANNOT be understood from the individual words alone. If you translate idioms word-by-word, they often sound silly or confusing! Idioms are extremely common in everyday English conversation, literature, and even formal writing.",explanation:`**🔍 WHAT IS AN IDIOM?**

An idiom is a group of words with a **figurative meaning** that is completely different from the **literal meaning** of each word.

**Example**:
- **Literal**: 'Break a leg' → Injure your leg
- **Idiomatic**: 'Break a leg' → Good luck! (especially to performers)

**Why Can't You Guess the Meaning?**

Idioms developed over time within a culture. Their meanings come from history, tradition, or common usage - NOT from the individual words. This is why idioms are hard for language learners and why you must memorize them!

---

**📚 COMMON GRADE 6 IDIOMS BY CATEGORY**

**SCHOOL & LEARNING**

1. **Hit the books** = Study hard
   - *'I need to hit the books tonight for my science test.'*

2. **Teacher's pet** = Student the teacher favors
   - *'Everyone thinks Maria is the teacher's pet because she always gets special treatment.'*

3. **Pass with flying colors** = Succeed easily and with high marks
   - *'She studied every night and passed the exam with flying colors.'*

4. **Learn the ropes** = Learn how to do something (often a new job or activity)
   - *'The first week of middle school was tough, but I'm starting to learn the ropes.'*

5. **A piece of cake** = Something very easy
   - *'The math homework was a piece of cake after the teacher explained it.'*

**FEELINGS & EMOTIONS**

6. **Under the weather** = Feeling sick or ill
   - *'I'm feeling under the weather today, so I might stay home from school.'*

7. **On cloud nine** = Extremely happy
   - *'When I found out I made the basketball team, I was on cloud nine!'*

8. **Down in the dumps** = Feeling sad or depressed
   - *'My best friend moved away, and I've been down in the dumps ever since.'*

9. **Butterflies in my stomach** = Feeling nervous or anxious
   - *'I had butterflies in my stomach before giving my presentation.'*

10. **Walking on air** = Feeling very happy and excited
    - *'After winning the spelling bee, I felt like I was walking on air.'*

**DIFFICULTY & CHALLENGES**

11. **Bite off more than you can chew** = Take on more than you can handle
    - *'I joined three clubs and now realize I bit off more than I could chew.'*

12. **An uphill battle** = A very difficult task
    - *'Convincing my parents to let me get a dog is going to be an uphill battle.'*

13. **Back to the drawing board** = Start over because the first attempt failed
    - *'Our science experiment didn't work, so it's back to the drawing board.'*

14. **Jump through hoops** = Do many difficult things to achieve something
    - *'I had to jump through hoops to get permission for the field trip.'*

**COMMUNICATION & SECRETS**

15. **Spill the beans** = Reveal a secret
    - *'Don't spill the beans about the surprise party!'*

16. **Let the cat out of the bag** = Accidentally reveal a secret
    - *'I let the cat out of the bag when I mentioned Mom's birthday present.'*

17. **Beat around the bush** = Avoid saying what you mean directly
    - *'Stop beating around the bush and just tell me what happened!'*

18. **Get it off your chest** = Share something that's been bothering you
    - *'I needed to get it off my chest, so I told my teacher I didn't understand the assignment.'*

**MONEY & VALUE**

19. **Cost an arm and a leg** = Very expensive
    - *'The new gaming system costs an arm and a leg!'*

20. **Break the bank** = Use up all your money
    - *'We can go to the movies; it won't break the bank.'*

21. **Worth its weight in gold** = Very valuable
    - *'My graphing calculator is worth its weight in gold for math class.'*

**WEATHER & NATURE IDIOMS**

22. **It's raining cats and dogs** = Raining very heavily
    - *'We can't go outside - it's raining cats and dogs!'*

23. **Every cloud has a silver lining** = There's something good in every bad situation
    - *'I didn't make the soccer team, but every cloud has a silver lining - now I have more time for art class.'*

24. **Snowed under** = Overwhelmed with work
    - *'I'm snowed under with homework this week.'*

---

**🎯 HOW TO UNDERSTAND IDIOMS IN STORIES**

**Step 1: Recognize It's an Idiom**
- Does the sentence sound strange if taken literally?
- Would the meaning be silly or impossible?

**Step 2: Use Context Clues**
- What is happening in the story?
- What would make sense given the situation?

**Step 3: Check for Cultural Knowledge**
- Have you heard this phrase before?
- Does it sound like a common expression?

**Example**:
*'When Mom saw my report card, she hit the roof!'*

❌ Literal: Mom physically hit the ceiling (makes no sense)
✅ Idiomatic: Mom became very angry (makes sense in context)

---

**💡 WHY LEARN IDIOMS?**

1. **Reading Comprehension**: You'll encounter idioms in books, articles, and tests
2. **Natural Speech**: Native speakers use idioms constantly in conversation
3. **Cultural Understanding**: Idioms reveal how a culture thinks and communicates
4. **Better Writing**: Using idioms (when appropriate) makes your writing more engaging
5. **Test Success**: Standardized tests often ask about figurative language, including idioms

**⚠️ IMPORTANT TIPS**

**When to Use Idioms**:
- In creative writing or dialogue
- In informal speech
- To add color and personality to writing

**When NOT to Use Idioms**:
- In formal essays or research papers
- When writing for non-native English speakers
- When clarity is more important than style

**Remember**: Idioms are figurative language, so don't take them literally when reading stories!`,examples:[{text:"'I need to hit the books tonight because I have a huge science test tomorrow on photosynthesis.'",explanation:"**Hit the books** doesn't mean physically hitting books! It's an idiom meaning 'to study hard.' The context (science test tomorrow) helps us understand the student needs to study intensely."},{text:"'The math homework was a piece of cake after the teacher explained long division step by step.'",explanation:"**A piece of cake** means 'very easy' - the homework wasn't actually cake! The idiom suggests the work was simple and effortless once explained properly."},{text:"'Sarah let the cat out of the bag when she accidentally mentioned the surprise party in front of Mom.'",explanation:"**Let the cat out of the bag** means 'to accidentally reveal a secret.' There's no actual cat! This idiom suggests Sarah ruined the surprise by speaking without thinking."},{text:"'The new skateboard costs an arm and a leg, but I've been saving my allowance for six months.'",explanation:"**Cost an arm and a leg** means 'very expensive' - you don't actually pay with body parts! The idiom emphasizes how much money the skateboard costs."}],quickPractice:{question:`Read this sentence and determine the idiomatic meaning:

'When my brother saw the mess in his room, he hit the roof!'

What does 'hit the roof' mean in this context?`,hint:"(Think about what would happen if someone is angry about a messy room...)",answer:"'Hit the roof' means to become very angry or furious. The brother didn't literally hit the ceiling - he got extremely mad about the mess!"}}},{id:"vocab-4-2",title:"Practice: Idioms and Cultural Expressions",type:"exercise",content:{instructions:"Choose the correct idiomatic meaning of each underlined phrase as used in the sentence. Remember: don't think literally - think about what makes sense in the context!",questions:[{id:"q1",question:"When Sarah heard the good news about winning the essay contest, she was **on cloud nine**.",word:"on cloud nine",options:["very sad","extremely happy","confused","very tired"],correctAnswer:1,explanation:"'**On cloud nine**' is an idiom meaning extremely happy or delighted. Sarah's winning the contest would make her very happy!"},{id:"q2",question:"My mom said we should take the politician's campaign promises **with a grain of salt**.",word:"with a grain of salt",options:["believe completely","not believe at all","view with skepticism","add salt to it"],correctAnswer:2,explanation:"'**Take with a grain of salt**' means to view something with skepticism or not fully trust it. Mom is suggesting not to completely believe the promises."},{id:"q3",question:"The team really **dropped the ball** when they forgot to submit their science project on time.",word:"dropped the ball",options:["played sports well","made a serious mistake","succeeded perfectly","threw something"],correctAnswer:1,explanation:"'**Dropped the ball**' means to make a mistake or fail to do what was expected. Forgetting to submit the project was a significant error."},{id:"q4",question:"Let's not **beat around the bush** - just tell me directly why you're upset with me.",word:"beat around the bush",options:["avoid the main topic","speak very directly","work in the garden","fight physically"],correctAnswer:0,explanation:"'**Beat around the bush**' means to avoid talking about what's important or to speak indirectly. The speaker wants direct, honest communication."},{id:"q5",question:"I'm feeling **under the weather** today, so I think I'll stay home and rest instead of going to the party.",word:"under the weather",options:["extremely happy","feeling sick or ill","caught in the rain","angry"],correctAnswer:1,explanation:"'**Under the weather**' is an idiom meaning feeling sick, ill, or unwell. The person is too sick to attend the party."},{id:"q6",question:"When Tommy **spilled the beans** about the surprise party, everyone got mad at him.",word:"spilled the beans",options:["made a mess with food","revealed a secret","cooked dinner","told a joke"],correctAnswer:1,explanation:"'**Spilled the beans**' means to reveal a secret or disclose information that was supposed to be kept private. Tommy ruined the surprise!"},{id:"q7",question:"The new gaming system **costs an arm and a leg**, so I'll need to save my allowance for months.",word:"costs an arm and a leg",options:["is dangerous","is very cheap","is extremely expensive","requires surgery"],correctAnswer:2,explanation:"'**Costs an arm and a leg**' means something is very expensive. The gaming system costs a lot of money (not actual body parts!)."},{id:"q8",question:"After failing the first experiment, the science team went **back to the drawing board** to design a better approach.",word:"back to the drawing board",options:["went to art class","started over from the beginning","gave up completely","moved forward"],correctAnswer:1,explanation:"'**Back to the drawing board**' means to start over because the first attempt failed or didn't work properly. The team is redesigning their experiment."},{id:"q9",question:"I **bit off more than I could chew** when I signed up for soccer, chess club, and band all in the same semester.",word:"bit off more than I could chew",options:["ate too much food","took on too many responsibilities","succeeded at everything","hurt my mouth"],correctAnswer:1,explanation:"'**Bit off more than you can chew**' means to take on more tasks or responsibilities than you can handle. The person is overwhelmed by too many activities."},{id:"q10",question:"Our coach's advice before the championship game was simple: 'Just **give it your all** and have fun out there!'",word:"give it your all",options:["give away everything","try your absolute hardest","share with teammates","quit trying"],correctAnswer:1,explanation:"'**Give it your all**' means to try your absolute hardest and put in maximum effort. The coach wants the team to do their best."}]}}]},{id:"vocab-5",title:"Chapter 5: Synonyms and Antonyms",lessons:[{id:"vocab-5-1",title:"Synonyms and Antonyms: Choosing the Perfect Word",type:"lesson",content:{introduction:"Understanding synonyms and antonyms is crucial for Grade 6 students! Synonyms help you choose the most precise word and avoid boring repetition in writing. Antonyms help you understand contrasts and comparisons in reading. Both are essential for improving your vocabulary and writing variety.",explanation:`**📖 WHAT ARE SYNONYMS?**

**Synonyms**: Words that have similar (but rarely identical) meanings

**Important**: Synonyms are NOT interchangeable in all situations! Each has subtle differences (nuances) in:
- **Intensity** (how strong the feeling is)
- **Formality** (casual vs. formal)
- **Connotation** (positive, negative, or neutral feeling)

**Example Synonym Sets**:

**1. Words for 'HAPPY'** (intensity increases):
- **Content** → **Pleased** → **Happy** → **Delighted** → **Ecstatic** → **Overjoyed**
- 'I'm content' (mildly satisfied) vs. 'I'm ecstatic!' (extremely excited)

**2. Words for 'BIG'** (intensity and formality):
- **Large** (neutral, formal) → **Big** (casual) → **Huge** → **Enormous** → **Gigantic** → **Colossal** (impressively large)

**3. Words for 'SMART'**:
- **Intelligent** (formal, academic) → **Smart** (casual) → **Clever** (quick-thinking) → **Bright** (naturally gifted) → **Brilliant** (exceptionally smart)

**4. Words for 'SAD'**:
- **Unhappy** → **Sad** → **Sorrowful** → **Melancholy** (poetically sad) → **Devastated** (extremely sad)

**5. Words for 'SAID'** (adds meaning to dialogue):
- **Whispered** (quietly) → **Muttered** (complained) → **Said** (neutral) → **Announced** (formally) → **Shouted** (loudly) → **Exclaimed** (with excitement)

---

**🔄 WHAT ARE ANTONYMS?**

**Antonyms**: Words with opposite meanings

**Three Types of Antonyms**:

**1. Gradable Antonyms** (can exist on a scale with degrees between):
- **Hot** ↔ **Cold** (with warm, cool in between)
- **Fast** ↔ **Slow** (with moderate speed in between)
- **Tall** ↔ **Short** (with average height in between)

**2. Complementary Antonyms** (no middle ground - it's one or the other):
- **Alive** ↔ **Dead** (nothing in between)
- **True** ↔ **False**
- **Present** ↔ **Absent**

**3. Relational Antonyms** (opposite roles or relationships):
- **Teacher** ↔ **Student**
- **Parent** ↔ **Child**
- **Buy** ↔ **Sell**
- **Above** ↔ **Below**

**Common Academic Antonym Pairs** (important for Grade 6):
| Word | Antonym |
|------|----------|
| Ancient | Modern |
| Expand | Contract |
| Include | Exclude |
| Accept | Reject |
| Increase | Decrease |
| Simple | Complex |
| Abundant | Scarce |
| Praise | Criticize |
| Unite | Divide |
| Transparent | Opaque |

---

**🎯 WHY SYNONYMS AND ANTONYMS MATTER**

**For Writing**:
1. **Avoid Repetition**: Don't use the same word over and over
2. **Add Variety**: Make your writing more interesting and sophisticated
3. **Show Precision**: Choose the EXACT word you mean
4. **Demonstrate Vocabulary**: Show teachers you know more than just basic words

**For Reading Comprehension**:
1. **Context Clues**: Authors often use synonyms to clarify meaning
2. **Contrasts**: Antonyms help authors show differences and make comparisons
3. **Understanding Tone**: The synonym chosen affects the mood and tone

**For Tests**:
- Many standardized tests ask you to identify synonyms and antonyms
- Essay prompts often use academic synonyms you need to understand

---

**💡 USING A THESAURUS WISELY**

**DO**:
✅ Use a thesaurus to find words when you're stuck
✅ Check the definition before using a new synonym
✅ Consider the context and tone of your writing

**DON'T**:
❌ Use big words just to sound smart (if you don't know them well)
❌ Replace every simple word with a fancy one
❌ Ignore connotation differences

**Bad Example**: 'I masticated a delectable repast.' (Too fancy!)
**Better**: 'I ate a delicious meal.'
**Even Better**: 'I devoured a delicious meal.' (adds meaning: ate hungrily)

---

**🎓 THE SYNONYM SCALE: CHOOSING THE RIGHT INTENSITY**

**Anger Scale** (low to high intensity):
Annoyed → Irritated → Angry → Furious → Enraged

**Laughter Scale**:
Smile → Grin → Chuckle → Laugh → Giggle → Cackle → Roar with laughter

**Cold Scale**:
Cool → Chilly → Cold → Freezing → Frigid → Arctic

**Size Scale**:
Tiny → Small → Little → Medium → Large → Huge → Enormous → Gigantic → Colossal

**Choosing the Right Word**: Always ask yourself:
1. How strong is the feeling or description?
2. Is this formal or casual writing?
3. What is the connotation (feeling) of this word?`,examples:[{text:"**BEFORE** (repetitive): 'The movie was good. The acting was good. The story was good.'",explanation:"**AFTER** (using synonyms): 'The movie was excellent. The acting was superb. The story was compelling.' → Using synonyms (excellent, superb, compelling) makes writing more interesting and shows different levels of praise."},{text:"**Antonym Contrast**: 'The ancient ruins stood in stark contrast to the modern glass skyscrapers of the city.'",explanation:"**Ancient** and **modern** are antonyms that emphasize the dramatic difference between old historical structures and contemporary buildings. This contrast makes the description more vivid."},{text:"**Synonym Precision**: 'She wasn't just happy about winning—she was **ecstatic**!'",explanation:"Replacing 'very happy' with the more precise synonym 'ecstatic' conveys a stronger emotion and makes the writing more impactful. This shows the intensity of her joy."},{text:"**Antonym in Argument**: 'Unlike the arid desert climate, the humid rainforest receives abundant rainfall year-round.'",explanation:"**Arid** and **humid** are antonyms (dry vs. moist), and **desert** and **rainforest** are also antonyms. Using these opposites helps clarify the extreme differences between the two ecosystems."}],quickPractice:{question:`Choose the best synonym to replace 'said' in this sentence:

'Stop right there!' the police officer **said** loudly.

Options: whispered, muttered, announced, shouted, murmured`,hint:"Think about how the police officer would speak when trying to stop someone...",answer:"**Shouted** is the best choice because the officer spoke 'loudly,' which matches the intensity and volume of shouting. 'Announced' could work but doesn't capture the urgency and loudness as well."}}},{id:"vocab-5-2",title:"Practice: Synonyms and Antonyms in Context",type:"exercise",content:{instructions:"Choose the best synonym or antonym for the underlined word. Pay attention to the intensity, formality, and connotation of each choice!",questions:[{id:"q1",question:"Which word is the best SYNONYM for **courageous** in this sentence: 'The firefighter's courageous actions saved three lives'?",word:"courageous",options:["fearful","brave","weak","careful"],correctAnswer:1,explanation:"**Brave** is the best synonym for **courageous**, both meaning showing courage or bravery in the face of danger."},{id:"q2",question:"Which word is an ANTONYM for **generous** in this sentence: 'Unlike his generous sister, he was quite _____ with his money'?",word:"generous",options:["kind","giving","selfish","wealthy"],correctAnswer:2,explanation:"**Selfish** is the opposite of **generous**. A generous person gives freely; a selfish person keeps things for themselves."},{id:"q3",question:"Which word is the best SYNONYM for **ancient** in this context: 'The archaeologists discovered ancient pottery dating back 3,000 years'?",word:"ancient",options:["modern","old","new","future"],correctAnswer:1,explanation:"**Old** is a synonym for **ancient**, both referring to something from long ago. In this context, 'ancient' emphasizes the historical significance."},{id:"q4",question:"Which word is an ANTONYM for **triumph** in this sentence: 'The team's triumph turned into _____ when they lost the championship'?",word:"triumph",options:["victory","success","defeat","celebration"],correctAnswer:2,explanation:"**Defeat** is the opposite of **triumph**. Triumph means victory or success; defeat means loss."},{id:"q5",question:"Which word is the best SYNONYM for **vital** in this sentence: 'Water is vital for all living things'?",word:"vital",options:["unnecessary","essential","optional","rare"],correctAnswer:1,explanation:"**Essential** is the best synonym for **vital**, both meaning absolutely necessary or critically important."},{id:"q6",question:"Choose the SYNONYM with the STRONGEST intensity for **sad**: 'When her best friend moved away, she felt _____'.",word:"sad",options:["unhappy","sorrowful","devastated","gloomy"],correctAnswer:2,explanation:"**Devastated** shows the strongest intensity of sadness, meaning extremely upset or emotionally destroyed. It best conveys the depth of emotion when losing a best friend."},{id:"q7",question:"Which word is an ANTONYM for **expand** in this sentence: 'The company decided to _____ its operations instead of expanding'?",word:"expand",options:["grow","increase","contract","enlarge"],correctAnswer:2,explanation:"**Contract** is the antonym of **expand**. Expand means to grow larger; contract means to become smaller or reduce in size."},{id:"q8",question:"Which is the most FORMAL synonym for **said** in this sentence: 'The principal _____ that school would be closed tomorrow'?",word:"said",options:["whispered","muttered","announced","yelled"],correctAnswer:2,explanation:"**Announced** is the most formal synonym for 'said' in this official context. Principals make formal announcements, not whispers or mutters."},{id:"q9",question:"Which word is an ANTONYM for **transparent** in this sentence: 'The glass was transparent, but the wall was _____'?",word:"transparent",options:["clear","see-through","opaque","invisible"],correctAnswer:2,explanation:"**Opaque** is the antonym of **transparent**. Transparent means you can see through it; opaque means you cannot see through it at all."},{id:"q10",question:"Choose the SYNONYM that best fits a NEGATIVE connotation: 'The _____ actor refused to share the spotlight with anyone'.",word:"confident (need negative)",options:["confident","self-assured","arrogant","proud"],correctAnswer:2,explanation:"**Arrogant** has a negative connotation, suggesting someone thinks they're better than others. Confident and self-assured are positive, while 'arrogant' fits the negative context of refusing to share."}]}}]},{id:"vocab-6",title:"Chapter 6: Connotation and Denotation",lessons:[{id:"vocab-6-1",title:"Word Meanings and Feelings - Understanding Nuances",type:"lesson",content:{introduction:"California Grade 6 standards require students to understand nuances in word meanings. Words have two types of meanings: their dictionary definition (denotation) and the feelings or associations they carry (connotation). This skill is critical for both understanding what you read and choosing the right words in your writing.",explanation:`**Denotation**: The literal, dictionary definition of a word
- Example: 'Home' denotes a place where someone lives

**Connotation**: The emotional associations and feelings a word suggests
- Example: 'Home' connotes warmth, safety, family, and comfort

**Understanding Nuances (Subtle Differences):**
Words with similar denotations can have very different connotations. This is what we call 'nuances' - the subtle shades of meaning.

**Example Set 1: Words about Being Careful with Money**
- **Cheap** (negative: poor quality, unwilling to spend)
- **Inexpensive** (neutral/positive: good value, affordable)
- **Economical** (positive: wise spending, efficient)
- **Thrifty** (positive: careful and resourceful)

**Example Set 2: Words about Being Young**
- **Childish** (negative: immature, silly)
- **Childlike** (positive: innocent, pure, full of wonder)
- **Youthful** (positive: energetic, fresh, vibrant)
- **Immature** (negative: not fully developed, irresponsible)

**Example Set 3: Words about Being Thin**
- **Slender** (positive: gracefully thin)
- **Skinny** (negative: too thin, unhealthily thin)
- **Slim** (positive: attractively thin)
- **Scrawny** (negative: thin and weak-looking)

**The Connotation Scale:**
Positive → Neutral → Negative

**Why This Matters:**
- Writers choose words carefully to create specific feelings
- Understanding connotation helps you interpret what you read
- Using words with the right connotation makes your writing more effective`,examples:[{text:"Compare: 'He is stubborn' vs. 'He is determined' vs. 'He is persistent'",explanation:"All mean someone who doesn't give up. 'Stubborn' is negative (unreasonably refusing to change), 'determined' is positive (strong willpower), and 'persistent' is neutral/positive (continuing despite difficulty)."},{text:"Compare: 'The room smelled unusual' vs. 'The room had a fragrance' vs. 'The room reeked'",explanation:"'Unusual' is neutral, 'fragrance' suggests a pleasant smell (positive), while 'reeked' suggests a strong unpleasant smell (negative)."},{text:"Compare: 'She is confident' vs. 'She is arrogant' vs. 'She is self-assured'",explanation:"'Confident' and 'self-assured' are positive (believing in oneself appropriately), while 'arrogant' is negative (believing you're better than others)."}]}},{id:"vocab-6-2",title:"Practice: Understanding Nuances in Connotation",type:"exercise",content:{instructions:"Identify the nuances (subtle differences) in word meanings by analyzing their connotations. Remember: understanding connotation is a key Grade 6 California standard!",questions:[{id:"q1",question:"Which word has the most POSITIVE connotation? All mean 'to laugh'.",options:["giggle","cackle","snicker","chortle"],correctAnswer:0,explanation:"Giggle has the most positive connotation, suggesting light, happy, innocent laughter. Cackle suggests harsh or witch-like laughter, snicker implies mocking, and chortle is somewhat positive but less joyful than giggle."},{id:"q2",question:"Which sentence describes someone in the most NEGATIVE way?",options:["Marcus is thrifty with his money.","Marcus is careful with his money.","Marcus is stingy with his money.","Marcus is economical with his money."],correctAnswer:2,explanation:"Stingy has a negative connotation, suggesting someone is unwilling to spend or share money even when they should. Thrifty is positive (wise with money), careful is neutral, and economical is positive (efficient)."},{id:"q3",question:"Compare these words describing someone thin: 'slender,' 'skinny,' 'slim,' 'scrawny.' Which has the most NEGATIVE connotation?",options:["slender","skinny","slim","scrawny"],correctAnswer:3,explanation:"Scrawny has the most negative connotation, suggesting someone is thin, weak-looking, and possibly unhealthy. Slender and slim are positive, while skinny can be negative but less so than scrawny."},{id:"q4",question:"In the sentence 'The politician's scheme was discovered,' what is the connotation of 'scheme'?",options:["positive","neutral","negative","uncertain"],correctAnswer:2,explanation:"Scheme has a negative connotation, suggesting a sneaky, dishonest, or secretive plan. A neutral alternative would be 'plan' or 'proposal.'"},{id:"q5",question:"Which word pair shows the GREATEST difference in connotation? Both words in each pair have similar denotations.",options:["confident / self-assured","childlike / youthful","determined / persistent","childish / youthful"],correctAnswer:3,explanation:"Childish (negative: immature) and youthful (positive: energetic and fresh) have the greatest connotation difference. The other pairs have more similar connotations."},{id:"q6",question:"A writer describes a character as 'unique' rather than 'weird.' What is the effect of this word choice?",options:["Both words have the same effect","'Unique' sounds more positive - special and one-of-a-kind","'Weird' sounds more positive","Neither word has a connotation"],correctAnswer:1,explanation:"'Unique' has a positive connotation (special, distinctive), while 'weird' has a negative connotation (strange in an off-putting way). This shows how word choice affects meaning."}]}}]},{id:"vocab-7",title:"Chapter 7: Multiple Meaning Words",lessons:[{id:"vocab-7-1",title:"Multiple Meaning Words (Homographs): Context is Key",type:"lesson",content:{introduction:"Many English words have multiple meanings depending on how they are used! These are called **homographs** (homo = same, graph = writing) or **polysemous** words. Understanding how context determines meaning is crucial for Grade 6 reading comprehension in California.",explanation:`**📚 WHAT ARE MULTIPLE MEANING WORDS?**

**Multiple Meaning Words** are words that are spelled the same but have different meanings. Context (the words around it) helps you determine which meaning is intended.

**Two Main Types**:

**1. Same Pronunciation, Different Meanings**
- **Bark**: The sound a dog makes (noun/verb) | The outer covering of a tree (noun)
- **Bat**: A flying mammal (noun) | Equipment for hitting a ball (noun) | To hit (verb)
- **Ring**: A circular band (noun) | The sound a bell makes (verb/noun) | A boxing arena (noun)

**2. Different Pronunciation AND Different Meanings**
- **Tear**: [teer] liquid from your eye | [tair] to rip something
- **Bow**: [boh] to bend forward | [bau] weapon that shoots arrows, or front of a ship
- **Lead**: [leed] to guide or be in front | [led] a heavy metal
- **Wind**: [wind] moving air | [wined] to turn or twist
- **Read**: [reed] present tense (I read every day) | [red] past tense (I read that book yesterday)

---

**🎯 COMMON GRADE 6 MULTIPLE MEANING WORDS**

**1. BANK**
- **Meaning 1** (noun): A financial institution where you keep money
  - 'I deposited my allowance at the bank.'
- **Meaning 2** (noun): The edge of a river or stream
  - 'We sat on the bank of the river and fished.'
- **Meaning 3** (verb): To tilt to one side (in aviation)
  - 'The airplane banked sharply to the left.'

**2. BAT**
- **Meaning 1** (noun): A nocturnal flying mammal
  - 'The bat hung upside down in the cave.'
- **Meaning 2** (noun): Sports equipment for hitting a ball
  - 'She swung the baseball bat with confidence.'
- **Meaning 3** (verb): To hit something
  - 'The cat will bat at the toy mouse.'

**3. FAIR**
- **Meaning 1** (adjective): Just and impartial; treating people equally
  - 'The referee made a fair decision.'
- **Meaning 2** (adjective): Light-colored (skin or hair)
  - 'She has fair skin that sunburns easily.'
- **Meaning 3** (noun): A carnival, festival, or exhibition
  - 'We went to the county fair and rode the Ferris wheel.'
- **Meaning 4** (adjective): Average; moderately good
  - 'His performance was fair, but not outstanding.'

**4. KEY**
- **Meaning 1** (noun): A metal instrument that opens a lock
  - 'I lost my house key!'
- **Meaning 2** (adjective): Important or essential
  - 'Education is key to success.'
- **Meaning 3** (noun): A musical scale (Music term)
  - 'The song is written in the key of C major.'
- **Meaning 4** (noun): A button on a keyboard or piano
  - 'Press the Enter key to submit.'
- **Meaning 5** (noun): An answer guide (like an answer key)
  - 'The teacher used the answer key to grade the tests.'

**5. WATCH**
- **Meaning 1** (noun): A timepiece worn on the wrist
  - 'My grandmother gave me her old watch.'
- **Meaning 2** (verb): To look at something attentively
  - 'Let's watch a movie tonight.'
- **Meaning 3** (verb): To supervise or guard
  - 'Please watch the baby while I'm gone.'
- **Meaning 4** (verb): To be careful or cautious
  - 'Watch out for that car!'

**6. ADDRESS**
- **Meaning 1** (noun): [AD-dress] A location or mailing address
  - 'What is your home address?'
- **Meaning 2** (verb): [uh-DRESS] To deal with or speak to
  - 'We need to address this problem immediately.'
- **Meaning 3** (verb): [uh-DRESS] To formally speak to a group
  - 'The principal will address the student body.'

**7. PLOT**
- **Meaning 1** (noun): A small piece of land
  - 'They own a plot of land in the countryside.'
- **Meaning 2** (noun): The storyline of a book, movie, or play
  - 'The novel had an interesting and complex plot.'
- **Meaning 3** (noun): A secret plan (usually negative)
  - 'The villains hatched a plot to rob the bank.'
- **Meaning 4** (verb): To mark points on a graph
  - 'Plot these coordinates on the graph.'

**8. PRESENT**
- **Meaning 1** (noun): [PREZ-ent] A gift
  - 'I wrapped the birthday present carefully.'
- **Meaning 2** (adjective): [PREZ-ent] Existing now; current
  - 'All students present should raise their hands.'
- **Meaning 3** (verb): [prih-ZENT] To give or show something formally
  - 'I will present my project to the class tomorrow.'
- **Meaning 4** (noun): [PREZ-ent] The current time (not past or future)
  - 'Live in the present, not the past.'

---

**🔍 HOW TO DETERMINE THE CORRECT MEANING**

**Strategy: The 3 C's**

**1. CONTEXT** - What is happening in the sentence or paragraph?
**2. CLUES** - What other words give hints about the meaning?
**3. CHECK** - Does your chosen meaning make sense?

**Example**:
'The judge **ruled** in favor of the defendant.'

- **Context**: This is in a courtroom setting
- **Clues**: 'judge' and 'favor of defendant' suggest a legal decision
- **Check**: 'Made a decision' makes sense; 'used a ruler' does not!
- **Answer**: 'Ruled' means 'made an official decision'

---

**💡 WHY THIS MATTERS**

**In Reading**:
- Misunderstanding a multiple meaning word can change the entire meaning of a sentence!
- Authors sometimes use these words for **wordplay** or **puns** (jokes)

**In Writing**:
- Be clear about which meaning you intend
- Use context clues to help your reader understand

**On Tests**:
- Many reading comprehension questions test your ability to determine word meanings from context
- You might be asked: 'What does the word ____ mean as used in line 12?'

---

**🎓 PART OF SPEECH MATTERS**

The word's part of speech (noun, verb, adjective, adverb) is a huge clue!

**Example: LIGHT**
- **Noun**: 'Turn on the light.' (illumination)
- **Verb**: 'Please light the candles.' (to ignite)
- **Adjective (weight)**: 'The box is light.' (not heavy)
- **Adjective (color)**: 'She wore a light blue dress.' (pale color)

**Ask yourself**: Is this word acting as a person/place/thing (noun), an action (verb), or a describing word (adjective)?`,examples:[{text:"'We need to **address** this problem immediately.' vs. 'Please write your **address** on the envelope.'",explanation:"**First sentence**: '**address**' [uh-DRESS] is a **verb** meaning to deal with or tackle. **Second sentence**: '**address**' [AD-dress] is a **noun** meaning location. Part of speech AND pronunciation change!"},{text:"'The **play** was entertaining.' vs. 'The children **play** in the park every afternoon.'",explanation:"**First sentence**: '**play**' is a **noun** meaning a theatrical performance. **Second sentence**: '**play**' is a **verb** meaning to engage in activity for fun. Context and part of speech help us understand the difference."},{text:"'The scientist wanted to **conduct** an experiment.' vs. 'Copper is a good **conduct**or of electricity.'",explanation:"**First sentence**: '**conduct**' [kun-DUKT] is a **verb** meaning to carry out or perform. **Second sentence**: '**conduct**or' [KON-duk-tor] is a **noun** meaning something that allows electricity or heat to pass through. (Note: This shows a related word form!)"},{text:"'My heart felt **light** after hearing the good news.' vs. 'The room was filled with bright **light**.'",explanation:"**First sentence**: '**light**' is an **adjective** describing an emotional feeling (happy, unburdened). **Second sentence**: '**light**' is a **noun** meaning illumination. Same spelling, different meanings and parts of speech!"}],quickPractice:{question:`What does the word '**watch**' mean in this sentence?

'Please watch the baby while I run to the store.'

A) A timepiece worn on the wrist
B) To look at attentively
C) To supervise or take care of
D) To be careful`,hint:"Think about what action is being requested... Is someone asking you to look at the baby, or do something more?",answer:"**C) To supervise or take care of** is correct! The context shows someone is leaving and needs another person to be responsible for the baby's safety, not just look at them. 'Watch' here means to supervise or guard."}}},{id:"vocab-7-2",title:"Practice: Multiple Meanings in Context",type:"exercise",content:{instructions:"Choose the correct meaning of the underlined word based on how it is used in the sentence. Use the 3 C's strategy: Context, Clues, and Check!",questions:[{id:"q1",question:"The judge **ruled** in favor of the defendant after reviewing all the evidence presented in court.",word:"ruled",options:["measured with a ruler","made an official decision","governed a country","drew a straight line"],correctAnswer:1,explanation:"In this legal context, '**ruled**' means made an official decision. The judge made a determination based on evidence."},{id:"q2",question:"She had a **bright** idea for solving the complex science problem that had stumped everyone.",word:"bright",options:["shining with light","intelligent or clever","cheerful and happy","colorful"],correctAnswer:1,explanation:"In this context, '**bright**' means intelligent or clever, describing the quality of the idea, not a physical light."},{id:"q3",question:"The **bear** climbed the tree quickly to escape from the approaching danger below.",word:"bear",options:["to carry something heavy","to tolerate a difficulty","a large wild mammal","to give birth to offspring"],correctAnswer:2,explanation:"In this context, '**bear**' is a noun meaning the animal. The context of climbing a tree confirms this meaning."},{id:"q4",question:"Please **watch** the baby carefully while I run to the store for some milk.",word:"watch",options:["a timepiece worn on the wrist","to look at attentively","to supervise or guard","to observe an event for entertainment"],correctAnswer:2,explanation:"In this context, '**watch**' means to supervise or take care of someone. It implies responsibility for the baby's safety, not just looking."},{id:"q5",question:"The novel had an interesting **plot** with unexpected twists that kept readers engaged until the last page.",word:"plot",options:["a small piece of land","a secret plan or scheme","the storyline of a book","to mark points on a graph"],correctAnswer:2,explanation:"In this literary context, '**plot**' refers to the storyline or sequence of events in the novel."},{id:"q6",question:"We need to **address** this serious issue immediately before it gets worse.",word:"address",options:["a mailing location","to deal with or tackle","to speak formally to a group","to write a location on an envelope"],correctAnswer:1,explanation:"As a verb, '**address**' [uh-DRESS] means to deal with or tackle a problem. The context of 'need to' and 'immediately' confirms this meaning."},{id:"q7",question:"The hikers sat on the **bank** of the river to rest and enjoy the peaceful scenery.",word:"bank",options:["a financial institution","the edge or side of a river","to tilt to one side","a place to store valuables"],correctAnswer:1,explanation:"'**Bank**' here means the edge of the river. The context of 'of the river' and 'sat on' makes this clear."},{id:"q8",question:"The principal will **present** the awards to the honor roll students at tomorrow's assembly.",word:"present",options:["existing now or current","a gift given to someone","to formally give or show","the current time period"],correctAnswer:2,explanation:"As a verb [prih-ZENT], '**present**' means to formally give or show something. The principal is giving out awards."},{id:"q9",question:"The astronomer used a telescope to **track** the movement of the comet across the night sky.",word:"track",options:["a path or trail","a song on an album","to follow or monitor","a circular racing course"],correctAnswer:2,explanation:"As a verb, '**track**' means to follow or monitor something's movement. The astronomer is following the comet's path."},{id:"q10",question:"The students had to **conduct** a science experiment to test their hypothesis about plant growth.",word:"conduct",options:["behavior or manner","to carry out or perform","to lead an orchestra","a substance that transmits heat or electricity"],correctAnswer:1,explanation:"As a verb [kun-DUKT], '**conduct**' means to carry out or perform. The students are performing an experiment."}]}}]},{id:"vocab-8",title:"Chapter 8: Academic Vocabulary (Tier 2)",lessons:[{id:"vocab-8-1",title:"High-Frequency Academic Words",type:"lesson",content:{introduction:"Academic vocabulary (Tier 2 words) are words you'll see in textbooks, on tests, and in formal writing across all subjects. Mastering these words is essential for Grade 6 success in California schools.",explanation:`These words are used across different subjects (science, history, literature, math) and are crucial for understanding instructions and expressing your ideas clearly.

**Core Academic Vocabulary:**

**Analyze**: To examine something in detail to understand it better
- Example: Analyze the character's motives in the story.
- Connect: When you analyze something, you break it down into parts to understand how it works.

**Context**: The circumstances or setting surrounding an event or statement
- Example: Use context clues to find the meaning of the word.
- Connect: Context helps you understand what's happening around something.

**Evaluate**: To judge or determine the significance or worth of something
- Example: Evaluate the effectiveness of the author's argument.
- Connect: When you evaluate, you decide if something is good, bad, effective, or needs improvement.

**Interpret**: To explain the meaning of information or actions
- Example: How do you interpret the ending of the poem?
- Connect: Interpretation means figuring out what something means or represents.

**Significant**: Sufficiently great or important to be worthy of attention
- Example: The discovery of fire was a significant event in history.
- Connect: Something significant is important and makes a big difference.

**Summarize**: To give a brief statement of the main points
- Example: Summarize the first chapter in three sentences.
- Connect: A summary includes only the most important information, not all the details.

**Additional Key Terms:**
- **Compare**: Show similarities between two or more things
- **Contrast**: Show differences between two or more things
- **Describe**: Give details about characteristics or qualities
- **Explain**: Make something clear by giving reasons or details
- **Infer**: Conclude something from evidence and reasoning
- **Support**: Give evidence or reasons to back up a claim`,examples:[{text:"Question: 'Analyze why the main character made that decision.'",explanation:"This asks you to examine the character's thoughts, feelings, and circumstances to understand the reasons behind the decision."},{text:"Question: 'What is the significance of the title?'",explanation:"This asks you to evaluate how important the title is and what special meaning or purpose it has."}]}},{id:"vocab-8-2",title:"Practice: Mastering Academic Vocabulary",type:"exercise",content:{instructions:"Choose the academic vocabulary word that best completes each sentence or answers each question. These Tier 2 words are essential for test success!",questions:[{id:"q1",question:"When you _____ a text, you provide a brief overview of the main ideas without including minor details.",options:["analyze","summarize","evaluate","interpret"],correctAnswer:1,explanation:"**Summarize** means to give a brief statement of the main points, creating a short overview. Think: the 'highlight reel.'"},{id:"q2",question:"To _____ means to examine something carefully by breaking it into parts to understand how they work together.",options:["describe","analyze","summarize","compare"],correctAnswer:1,explanation:"**Analyze** means to examine something in detail, breaking it down to understand it better. Like being a detective!"},{id:"q3",question:"Which word means 'to judge the value, quality, or importance of something'?",options:["context","evaluate","significant","interpret"],correctAnswer:1,explanation:"**Evaluate** means to judge or determine the significance or worth of something. You're deciding if it works well or not."},{id:"q4",question:"The _____ of a word includes the surrounding words and sentences that help you understand its meaning.",options:["context","summary","evaluation","analysis"],correctAnswer:0,explanation:"**Context** refers to the circumstances or setting surrounding something. It helps you understand what's happening around a word or event."},{id:"q5",question:"When you _____ a poem, you explain what you think it means based on the words and your understanding.",options:["summarize","describe","interpret","compare"],correctAnswer:2,explanation:"**Interpret** means to explain the meaning of something based on your understanding and analysis. It's YOUR explanation backed by evidence."},{id:"q6",question:"A _____ discovery is one that is very important and makes a big difference.",options:["brief","significant","simple","common"],correctAnswer:1,explanation:"**Significant** means sufficiently great or important to be worthy of attention. If something is significant, it really matters!"},{id:"q7",question:"To _____ your answer means to provide evidence, examples, or reasons that back up your claim.",options:["support","contrast","conclude","describe"],correctAnswer:0,explanation:"**Support** means to provide evidence or reasoning to back up a claim. You're proving your point with facts!"},{id:"q8",question:"When you _____ from a text, you draw logical conclusions based on evidence even though it's not directly stated.",options:["summarize","infer","describe","quote"],correctAnswer:1,explanation:"**Infer** means to conclude something from evidence and reasoning. You're being a detective, using clues to figure out what's not directly said!"},{id:"q9",question:"Facts, information, or quotes that prove something is true are called _____.",options:["opinions","evidence","summaries","perspectives"],correctAnswer:1,explanation:"**Evidence** refers to facts, information, or signs that prove something is true. It's the proof that backs up your claims!"},{id:"q10",question:"To _____ two texts means to examine them to find similarities, while to _____ them means to find differences.",options:["evaluate / analyze","compare / contrast","interpret / explain","describe / support"],correctAnswer:1,explanation:"**Compare** means to show similarities, and **contrast** means to show differences. These words are often used together in test questions!"}]}}]}]},{id:"grammar",title:"Grammar",icon:"✏️",description:"Master the rules and structure of English",chapters:[{id:"grammar-1",title:"Chapter 1: Parts of Speech",lessons:[{id:"grammar-1-1",title:"Nouns, Pronouns, and Verbs",type:"lesson",content:{introduction:"Understanding parts of speech is fundamental to constructing clear sentences.",explanation:`**Nouns** name people, places, things, or ideas.
- Common nouns: book, city, teacher
- Proper nouns: California, Ms. Johnson, Pacific Ocean

**Pronouns** replace nouns to avoid repetition.
- Personal: I, you, he, she, it, we, they
- Possessive: my, your, his, her, its, our, their

**Verbs** show action or state of being.
- Action verbs: run, write, think
- Linking verbs: is, am, are, was, were, be, being, been`,examples:[{text:"Sarah threw the ball to her friend.",explanation:"Sarah (proper noun), ball (common noun), her (pronoun), threw (action verb), friend (common noun)"}]}},{id:"grammar-1-2",title:"Practice: Identifying Parts of Speech",type:"exercise",content:{instructions:"Identify the part of speech for the underlined word in each sentence.",questions:[{id:"q1",question:"The quick brown fox jumped over the lazy dog.",word:"jumped",options:["noun","verb","adjective","adverb"],correctAnswer:1,explanation:"'Jumped' is an action verb showing what the fox did."},{id:"q2",question:"She brought her umbrella to school.",word:"her",options:["noun","verb","pronoun","adjective"],correctAnswer:2,explanation:"'Her' is a possessive pronoun showing ownership of the umbrella."},{id:"q3",question:"The Golden Gate Bridge is a famous landmark.",word:"Golden Gate Bridge",options:["common noun","proper noun","verb","pronoun"],correctAnswer:1,explanation:"'Golden Gate Bridge' is a proper noun - it's the specific name of a place."}]}}]},{id:"grammar-2",title:"Chapter 2: Sentence Structure",lessons:[{id:"grammar-2-1",title:"Simple and Compound Sentences",type:"lesson",content:{introduction:"Sentences can be structured in different ways to express ideas clearly and effectively.",explanation:`**Simple Sentences** contain one independent clause (one subject and one verb).
- Example: The cat sleeps.
- Example: Maria and Juan played basketball.

**Compound Sentences** contain two or more independent clauses joined by a coordinating conjunction (FANBOYS: for, and, nor, but, or, yet, so).
- Example: The cat sleeps, and the dog barks.
- Example: I wanted to go to the park, but it started raining.

**Key Rule**: Use a comma before the coordinating conjunction in a compound sentence.`,examples:[{text:"The sun was shining, so we went to the beach.",explanation:"Two complete thoughts joined by 'so' with a comma before it."}]}},{id:"grammar-2-2",title:"Practice: Sentence Structure",type:"exercise",content:{instructions:"Identify whether each sentence is simple or compound.",questions:[{id:"q1",question:"The teacher explained the lesson, and the students took notes.",options:["Simple sentence","Compound sentence"],correctAnswer:1,explanation:"This is a compound sentence with two independent clauses joined by 'and'."},{id:"q2",question:"My brother and I walked to the store.",options:["Simple sentence","Compound sentence"],correctAnswer:0,explanation:"This is a simple sentence with a compound subject but only one verb."},{id:"q3",question:"I studied hard for the test, yet I still felt nervous.",options:["Simple sentence","Compound sentence"],correctAnswer:1,explanation:"This is a compound sentence with two independent clauses joined by 'yet'."}]}}]},{id:"grammar-3",title:"Chapter 3: Mastering Pronouns - Part 1",lessons:[{id:"grammar-3-1",title:"Pronoun Case: Subjective, Objective, and Possessive",type:"lesson",content:{introduction:"Mastering pronouns is arguably the most important grammar goal for 6th graders in California. Understanding pronoun case ensures your writing is clear and correct.",explanation:`**Three Types of Pronoun Case:**

**1. Subjective Case (Subject Pronouns)**
Use when the pronoun is doing the action:
- **Pronouns**: I, he, she, we, they
- Example: **She** went to the store. (She is doing the action)
- Example: **We** finished our homework. (We are doing the action)

**2. Objective Case (Object Pronouns)**
Use when the pronoun is receiving the action:
- **Pronouns**: me, him, her, us, them
- Example: The teacher called **me**. (Me is receiving the action)
- Example: Dad drove **us** to school. (Us is receiving the action)

**3. Possessive Case (Possessive Pronouns)**
Use to show ownership:
- **Pronouns**: my, mine, his, her, hers, our, ours, their, theirs, its
- Example: That book is **mine**.
- Example: **Their** project won first place.

**Common Trouble Spots:**

**Problem 1: Compound Subjects and Objects**
- Wrong: "Me and John went to the park."
- Right: "**John and I** went to the park." (Remove "John" - would you say "Me went"?)

- Wrong: "The coach picked John and I for the team."
- Right: "The coach picked **John and me** for the team." (Remove "John" - would you say "picked I"?)

**Tip**: Remove the other person and see which pronoun sounds correct!

**Problem 2: After Prepositions (to, for, with, between, etc.)**
Always use objective case after prepositions:
- Wrong: "Between you and I..."
- Right: "Between you and **me**..."
- Wrong: "Come with Sarah and I."
- Right: "Come with Sarah and **me**."`,examples:[{text:"Wrong: 'The prize went to Maria and I.' | Right: 'The prize went to Maria and me.'",explanation:"After the preposition 'to,' we need the objective case 'me.' Test: Would you say 'to I'? No, you'd say 'to me.'"},{text:"Wrong: 'Her and I studied together.' | Right: 'She and I studied together.'",explanation:"As the subject doing the action (studying), we need subjective case 'She and I.'"},{text:"The book is mine, and the pencil is hers.",explanation:"Both 'mine' and 'hers' are possessive pronouns showing ownership."}]}},{id:"grammar-3-2",title:"Practice: Pronoun Case",type:"exercise",content:{instructions:"Choose the correct pronoun for each sentence. Remember to use the 'remove the other person' trick!",questions:[{id:"q1",question:"_____ and Sarah went to the library to study.",options:["Me","I","Myself","Mine"],correctAnswer:1,explanation:"Use 'I' (subjective case) because the pronoun is the subject doing the action. Test: 'I went' sounds correct, 'Me went' does not."},{id:"q2",question:"The teacher gave the assignment to Carlos and _____.",options:["I","me","myself","mine"],correctAnswer:1,explanation:"Use 'me' (objective case) after the preposition 'to.' Test: Would you say 'to I' or 'to me'? Always 'to me.'"},{id:"q3",question:"Between you and _____, I think this is a bad idea.",options:["I","me","myself","my"],correctAnswer:1,explanation:"Use 'me' (objective case) after the preposition 'between.' This is a very common error!"},{id:"q4",question:"My sister and _____ finished our project early.",options:["me","I","myself","mine"],correctAnswer:1,explanation:"Use 'I' (subjective case) because the pronoun is part of the subject. Test: 'I finished' is correct, 'me finished' is not."},{id:"q5",question:"The coach asked Mike and _____ to lead warm-ups.",options:["I","me","myself","we"],correctAnswer:1,explanation:"Use 'me' (objective case) because the pronoun receives the action of being asked. Test: 'asked me' not 'asked I.'"},{id:"q6",question:"That backpack is _____, not yours.",options:["my","me","mine","I"],correctAnswer:2,explanation:"Use 'mine' (possessive pronoun) to show ownership. 'My' would need a noun after it (my backpack)."}]}}]},{id:"grammar-4",title:"Chapter 4: Mastering Pronouns - Part 2",lessons:[{id:"grammar-4-1",title:"Intensive Pronouns and Clear Antecedents",type:"lesson",content:{introduction:"Beyond basic pronoun case, Grade 6 students must master intensive pronouns for emphasis and ensure all pronouns have clear antecedents (the nouns they refer to).",explanation:`**Intensive Pronouns (Adding Emphasis)**

Intensive pronouns add emphasis to a noun or pronoun:
- **Forms**: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves

**Examples:**
- I did the homework **myself**. (I did it, no one else)
- The principal **herself** announced the winners. (emphasizes it was the principal, not someone else)
- We built the treehouse **ourselves**. (emphasizes we did it without help)

**Key Rule**: Intensive pronouns emphasize who did something. They are NOT required for the sentence to make sense.
- Test: Remove the intensive pronoun - the sentence still works.
- "I did the homework" still makes sense without "myself."

**Common Mistake:**
- Wrong: "Myself and Tom went to the game."
- Right: "Tom and I went to the game." (Don't use 'myself' as a subject!)

---

**Clear Antecedents (Avoiding Vague Pronouns)**

An **antecedent** is the noun that a pronoun refers to. Every pronoun must have a clear antecedent!

**Problem: Vague Pronoun Reference**
When it's unclear who or what a pronoun refers to:

**Example 1:**
- **Vague**: "Sarah and Jane went to the store, and **she** bought milk."
  - Problem: Who is "she"? Sarah or Jane?
- **Clear**: "Sarah and Jane went to the store, and **Sarah** bought milk."
- **Better**: "Sarah and Jane went to the store; Sarah bought milk."

**Example 2:**
- **Vague**: "After I put the vase on the shelf, **it** broke."
  - Problem: What broke? The vase or the shelf?
- **Clear**: "After I put the vase on the shelf, **the vase** broke."

**Example 3:**
- **Vague**: "In the article, **they** say pollution is increasing."
  - Problem: Who is "they"?
- **Clear**: "In the article, **scientists** say pollution is increasing."

**Rules for Clear Pronouns:**
1. Make sure every pronoun clearly refers to ONE specific noun
2. When in doubt, repeat the noun instead of using a pronoun
3. Place pronouns close to their antecedents
4. Avoid using "they" without a clear antecedent`,examples:[{text:"The director himself approved the final script.",explanation:"The intensive pronoun 'himself' emphasizes that the director personally approved it."},{text:`Vague: 'Tom told Alex that he needed to study more.' | Clear: 'Tom told Alex, "You need to study more."'`,explanation:"Who needs to study - Tom or Alex? Using direct dialogue or the person's name makes it clear."},{text:"Vague: 'When I walked my dog, it was beautiful.' | Clear: 'When I walked my dog, the weather was beautiful.'",explanation:"What was beautiful? The dog or the weather? Repeating the noun clarifies the meaning."}]}},{id:"grammar-4-2",title:"Practice: Intensive Pronouns and Antecedents",type:"exercise",content:{instructions:"Identify correct intensive pronoun use and fix vague pronoun references.",questions:[{id:"q1",question:"Which sentence correctly uses an intensive pronoun?",options:["Myself completed the project.","I completed the project myself.","The project was completed by myself.","Me and myself completed it."],correctAnswer:1,explanation:"Correct! 'Myself' adds emphasis that I did it personally. Don't use 'myself' as the subject of a sentence."},{id:"q2",question:"Identify the vague pronoun: 'Lisa called Maria, and she said she would come over later.'",options:["No vague pronouns","Both 'she' pronouns are vague","Only the first 'she' is vague","Only the second 'she' is vague"],correctAnswer:1,explanation:"Both uses of 'she' are vague - we can't tell if Lisa or Maria is coming over, or who said it."},{id:"q3",question:"Which revision fixes this vague pronoun? 'The dog chased the cat until it got tired.'",options:["Keep it the same","The dog chased the cat until the dog got tired.","The dog chased the cat until they got tired.","It chased it until it got tired."],correctAnswer:1,explanation:"Replacing 'it' with 'the dog' makes clear who got tired. We don't know if the dog or cat got tired in the original."},{id:"q4",question:"Which sentence uses an intensive pronoun correctly?",options:["The students themselves organized the event.","Themselves organized the event.","The event was organized by themselves.","Themselves and I organized it."],correctAnswer:0,explanation:"'Themselves' correctly emphasizes that the students (not teachers) organized the event."},{id:"q5",question:"Fix the vague pronoun: 'In the news, they said it would rain tomorrow.' What is the problem?",options:["No problem","'They' has no clear antecedent","'It' is used incorrectly","Both pronouns are wrong"],correctAnswer:1,explanation:"Who is 'they'? Better: 'The meteorologist said it would rain tomorrow' or 'The forecast predicts rain tomorrow.'"}]}}]},{id:"grammar-5",title:"Chapter 5: Punctuation for Clarity",lessons:[{id:"grammar-5-1",title:"Parenthetical Elements and Coordinate Adjectives",type:"lesson",content:{introduction:"California Grade 6 standards emphasize using punctuation to manage extra information in sentences. Learning to punctuate parenthetical elements and coordinate adjectives makes your writing clearer and more sophisticated.",explanation:`**Parenthetical Elements (Non-Essential Information)**

Parenthetical elements are extra pieces of information that can be removed without changing the basic meaning of the sentence. You can set them off with:
- **Commas** (most common)
- **Parentheses** (for very extra information)
- **Dashes** (for emphasis)

**Using Commas for Parenthetical Elements:**

**Example 1: Appositives (Renaming Phrases)**
- The principal**, Mr. Smith,** gave a speech.
- My friend**, the one with red hair,** loves soccer.
- California**, the Golden State,** is known for its beaches.

**Example 2: Non-Essential Clauses**
- My teacher**, who has taught for 20 years,** is very experienced.
- The movie**, which won three awards,** was excellent.

**Test**: Remove the information between commas - does the sentence still make sense?
- "The principal gave a speech." ✓ Still works!

**Using Parentheses:**
For information that's really "extra" or an aside:
- The test **(which covers chapters 1-5)** is on Friday.
- My dog **(a golden retriever)** loves to swim.

**Using Dashes:**
For information you want to emphasize:
- The winner**—my best friend—**was announced on stage.
- The assignment**—the most difficult one yet—**is due Monday.

---

**Coordinate Adjectives**

Coordinate adjectives are two or more adjectives that **equally** describe the same noun. Use commas to separate them.

**The Test**: Can you:
1. Put "and" between the adjectives? AND
2. Reverse the order?

If YES to both, use a comma!

**Examples:**
- It was a long**, **exhausting day.
  - Test: "long and exhausting day" ✓ | "exhausting, long day" ✓
  - Use comma!

- She is a talented**, **dedicated student.
  - Test: "talented and dedicated" ✓ | "dedicated, talented" ✓
  - Use comma!

**When NOT to Use a Comma:**
If adjectives are not coordinate (one modifies the other):

- I bought a small red car.
  - Test: "small and red car"? Sounds awkward.
  - Test: "red small car"? Sounds wrong.
  - NO comma! "Small" modifies "red car" as a unit.

- She wore a beautiful silk dress.
  - Test: "beautiful and silk"? Doesn't work.
  - NO comma! "Beautiful" modifies "silk dress."`,examples:[{text:"My brother, who is in college, visits every weekend.",explanation:"The phrase 'who is in college' is parenthetical (extra info) and is set off with commas."},{text:"The final exam—the hardest one all year—will cover everything.",explanation:"Dashes emphasize the parenthetical information about the exam being the hardest."},{text:"It was a cold, rainy November morning.",explanation:"Cold and rainy are coordinate adjectives (cold and rainy works; rainy, cold works), so use a comma."}]}},{id:"grammar-5-2",title:"Practice: Punctuation for Clarity",type:"exercise",content:{instructions:"Choose the correctly punctuated sentence or identify whether commas are needed.",questions:[{id:"q1",question:"Which sentence is punctuated correctly?",options:["The principal Mr. Smith gave a speech.","The principal, Mr. Smith gave a speech.","The principal, Mr. Smith, gave a speech.","The principal Mr. Smith, gave a speech."],correctAnswer:2,explanation:"The appositive 'Mr. Smith' renames the principal and should be set off with commas on both sides."},{id:"q2",question:"Do these adjectives need a comma? 'It was a long exhausting journey.'",options:["Yes - they are coordinate adjectives","No - they are not coordinate adjectives","Use a semicolon instead","Use a dash instead"],correctAnswer:0,explanation:"Yes! Test: 'long and exhausting journey' ✓ | 'exhausting, long journey' ✓. Both work, so use a comma."},{id:"q3",question:"Which sentence is punctuated correctly?",options:["The movie which won five awards was amazing.","The movie, which won five awards was amazing.","The movie, which won five awards, was amazing.","The movie which, won five awards, was amazing."],correctAnswer:2,explanation:"The clause 'which won five awards' is non-essential information and should be set off with commas on both sides."},{id:"q4",question:"Do these adjectives need a comma? 'She bought a beautiful silver bracelet.'",options:["Yes - they are coordinate adjectives","No - they are not coordinate adjectives","Use parentheses instead","Use dashes instead"],correctAnswer:1,explanation:"No comma. Test: 'beautiful and silver bracelet' sounds awkward. 'Beautiful' modifies 'silver bracelet' as a unit."},{id:"q5",question:"Which punctuation best emphasizes the parenthetical element? 'The winner ___ my best friend ___ jumped for joy.'",options:["Commas: winner, my best friend, jumped","Parentheses: winner (my best friend) jumped","Dashes: winner—my best friend—jumped","No punctuation needed"],correctAnswer:2,explanation:"Dashes create the most emphasis. All three could work, but dashes highlight that your best friend won!"},{id:"q6",question:"Which sentence correctly uses commas with coordinate adjectives?",options:["It was a bright, sunny day.","It was a bright sunny, day.","It was a, bright sunny day.","It was a bright sunny day."],correctAnswer:0,explanation:"Correct! Test: 'bright and sunny day' ✓ | 'sunny, bright day' ✓. They're coordinate, so comma goes between them."}]}}]},{id:"grammar-6",title:"Chapter 6: Sentence Variety and Style",lessons:[{id:"grammar-6-1",title:"Simple, Compound, and Complex Sentences",type:"lesson",content:{introduction:"By 6th grade, the goal is to stop writing choppy sentences and start varying your style. Using different sentence patterns shows how ideas relate and makes writing more interesting.",explanation:`**Three Types of Sentences:**

**1. Simple Sentence**
One independent clause (one complete thought):
- **Structure**: Subject + Verb
- Example: The dog barked.
- Example: Maria and Tom played basketball after school. (still simple - one main action)

**2. Compound Sentence**
Two or more independent clauses joined by a coordinating conjunction (FANBOYS: **F**or, **A**nd, **N**or, **B**ut, **O**r, **Y**et, **S**o):
- **Structure**: Independent Clause **+ comma + FANBOYS +** Independent Clause
- Example: The dog barked**, and** the cat ran away.
- Example: I studied hard**, yet** I still felt nervous.

**Key Rule**: Use a comma BEFORE the conjunction!

**3. Complex Sentence**
One independent clause + one or more dependent clauses:
- **Structure**: Independent Clause + Dependent Clause (or reversed)
- Example: **Because** it was raining, we stayed inside. (dependent, independent)
- Example: We stayed inside **because** it was raining. (independent, dependent)

**Common Subordinating Conjunctions** (start dependent clauses):
- Time: when, while, before, after, until, since
- Cause: because, since, as
- Condition: if, unless, whether
- Contrast: although, though, even though, while

**Punctuation Rule for Complex Sentences:**
- If dependent clause comes FIRST → use comma
  - **When** I finish homework**, **I'll watch TV.
- If independent clause comes FIRST → usually no comma
  - I'll watch TV **when** I finish homework.

---

**Why Vary Sentence Types?**

1. **Avoid Choppy Writing:**
   - Choppy: "I woke up. I ate breakfast. I went to school. I saw my friend."
   - Better: "When I woke up, I ate breakfast before going to school, where I saw my friend."

2. **Show Relationships Between Ideas:**
   - Simple: States a fact
   - Compound: Shows equal ideas or contrast
   - Complex: Shows cause/effect, time, or condition

3. **Create Rhythm:**
   Mix short and long sentences for variety!

**Example of Good Variety:**
"The storm began suddenly. (simple) Dark clouds rolled in, and lightning flashed across the sky. (compound) Although we were scared, we stayed calm and found shelter. (complex) We were safe. (simple)"`,examples:[{text:"Complex: Although the test was difficult, I did my best.",explanation:"Dependent clause 'Although the test was difficult' + comma + independent clause 'I did my best.'"},{text:"Compound: The book was long, but it was very interesting.",explanation:"Two independent clauses joined by comma + 'but' (FANBOYS)."},{text:"Simple: The students completed the assignment.",explanation:"One independent clause with subject (students) and verb (completed)."}]}},{id:"grammar-6-2",title:"Practice: Sentence Variety",type:"exercise",content:{instructions:"Identify sentence types and choose correctly punctuated sentences.",questions:[{id:"q1",question:"What type of sentence is this? 'Because it was raining, we canceled the picnic.'",options:["Simple","Compound","Complex","Fragment"],correctAnswer:2,explanation:"This is complex. It has a dependent clause 'Because it was raining' and an independent clause 'we canceled the picnic.'"},{id:"q2",question:"Which sentence is punctuated correctly?",options:["I want to go swimming but, it's too cold.","I want to go swimming, but it's too cold.","I want to go swimming but it's too cold.","I want to go, swimming but it's too cold."],correctAnswer:1,explanation:"Compound sentences need a comma BEFORE the coordinating conjunction (but)."},{id:"q3",question:"What type of sentence is this? 'The team practiced hard, and they won the championship.'",options:["Simple","Compound","Complex","Fragment"],correctAnswer:1,explanation:"This is compound. Two independent clauses joined by comma + 'and.'"},{id:"q4",question:"Which sentence is punctuated correctly?",options:["When the bell rings we will go to lunch.","When the bell rings, we will go to lunch.","When, the bell rings we will go to lunch.","When the bell, rings we will go to lunch."],correctAnswer:1,explanation:"When a dependent clause comes first in a complex sentence, use a comma after it."},{id:"q5",question:"What type of sentence is this? 'My sister and I walked to the park and played on the swings.'",options:["Simple","Compound","Complex","Run-on"],correctAnswer:0,explanation:"This is simple (not compound). It has a compound subject and compound verb, but it's still one independent clause."},{id:"q6",question:"Which revision creates a complex sentence? Original: 'The sun set. The temperature dropped.'",options:["The sun set, and the temperature dropped.","When the sun set, the temperature dropped.","The sun set; the temperature dropped.","The sun set, the temperature dropped."],correctAnswer:1,explanation:"Adding 'When' creates a dependent clause, making it a complex sentence. Option A is compound."}]}}]},{id:"grammar-7",title:"Chapter 7: Avoiding Common Errors",lessons:[{id:"grammar-7-1",title:"Pronoun Shifts and Misplaced Modifiers",type:"lesson",content:{introduction:"Grade 6 is the year to clean up common errors. Two major pitfalls are pronoun shifts (switching person) and misplaced modifiers (descriptive phrases in the wrong place).",explanation:`**Problem 1: Pronoun Shifts**

A pronoun shift occurs when you inconsistently change the person (I, you, one, he, they) you're using.

**Types of Person:**
- **First person**: I, we, me, us, my, our
- **Second person**: you, your, yours
- **Third person**: he, she, it, they, him, her, them, one

**The Rule**: Be consistent! Don't switch persons in the middle of writing.

**Example 1: I → You Shift**
- **Wrong**: "When **I** study for a test, **you** should start several days early."
  - Problem: Shifts from first person (I) to second person (you)
- **Right**: "When **I** study for a test, **I** start several days early."
- **Also Right**: "When **you** study for a test, **you** should start several days early."

**Example 2: You → One Shift**
- **Wrong**: "If **you** want to succeed, **one** must work hard."
  - Problem: Shifts from second person (you) to third person (one)
- **Right**: "If **you** want to succeed, **you** must work hard."

**Example 3: One → They Shift**
- **Wrong**: "When **one** reads carefully, **they** understand better."
  - Problem: Shifts from third singular (one) to third plural (they)
- **Right**: "When **one** reads carefully, **one** understands better."
- **Better**: "When **people** read carefully, **they** understand better."

---

**Problem 2: Misplaced Modifiers**

A modifier is a word or phrase that describes something. It must be placed next to what it modifies!

**The Rule**: Place modifiers as close as possible to what they describe.

**Example 1:**
- **Wrong**: "I saw a dog **wearing a hat** walking down the street."
  - Problem: Was the hat walking down the street?
- **Right**: "**While walking down the street**, I saw a dog wearing a hat."
- **Also Right**: "I saw a dog wearing a hat **while I was walking down the street**."

**Example 2:**
- **Wrong**: "The teacher gave the test to the students **that was very difficult**."
  - Problem: Were the students difficult?
- **Right**: "The teacher gave **the test that was very difficult** to the students."

**Example 3:**
- **Wrong**: "We saw the mountain **driving down the highway**."
  - Problem: Was the mountain driving?
- **Right**: "**While driving down the highway**, we saw the mountain."

**Example 4:**
- **Wrong**: "She served sandwiches to the children **on paper plates**."
  - Problem: Were the children on paper plates?
- **Right**: "She served sandwiches **on paper plates** to the children."

**Tip to Avoid Misplaced Modifiers:**
Ask yourself: "What is this phrase describing?" Then place it next to that word!`,examples:[{text:"Wrong: 'When you read this book, one will learn a lot.' | Right: 'When you read this book, you will learn a lot.'",explanation:"Don't shift from 'you' (second person) to 'one' (third person). Stay consistent."},{text:"Wrong: 'The car belongs to my neighbor with the red door.' | Right: 'The car with the red door belongs to my neighbor.'",explanation:"The phrase 'with the red door' should be next to 'car,' not 'neighbor,' unless the neighbor has a red door!"},{text:"Wrong: 'If one wants to improve, you must practice.' | Right: 'If one wants to improve, one must practice.' OR 'If you want to improve, you must practice.'",explanation:"Don't mix 'one' and 'you' - pick one and stick with it throughout."}]}},{id:"grammar-7-2",title:"Practice: Avoiding Common Errors",type:"exercise",content:{instructions:"Identify and correct pronoun shifts and misplaced modifiers.",questions:[{id:"q1",question:"Which sentence has a pronoun shift error?",options:["When I exercise regularly, I feel better.","When you exercise regularly, you feel better.","When I exercise regularly, you feel better.","When people exercise regularly, they feel better."],correctAnswer:2,explanation:"Option C shifts from first person 'I' to second person 'you.' This is inconsistent."},{id:"q2",question:"Which sentence fixes the misplaced modifier? 'The girl fed the dog wearing pajamas.'",options:["The girl wearing pajamas fed the dog.","The dog fed the girl wearing pajamas.","Wearing pajamas fed the dog the girl.","The girl fed wearing pajamas the dog."],correctAnswer:0,explanation:"The girl was wearing pajamas, not the dog. Place 'wearing pajamas' next to 'girl.'"},{id:"q3",question:"Which sentence has correct pronoun consistency?",options:["If you want to learn, one should pay attention.","If you want to learn, we should pay attention.","If you want to learn, you should pay attention.","If you want to learn, I should pay attention."],correctAnswer:2,explanation:"Correct! Uses 'you' consistently throughout the sentence."},{id:"q4",question:"Which sentence fixes the misplaced modifier? 'We watched the fireworks sitting on the blanket.'",options:["Sitting on the blanket fireworks we watched.","The fireworks sitting on the blanket we watched.","Sitting on the blanket, we watched the fireworks.","We watched sitting on the blanket the fireworks."],correctAnswer:2,explanation:"We were sitting on the blanket (not the fireworks). The modifier should be at the beginning, clearly modifying 'we.'"},{id:"q5",question:"Identify the pronoun shift: 'When students study hard, you can achieve better grades.'",options:["No error","Shifts from third person (students) to second person (you)","Shifts from first person to third person","Shifts from plural to singular"],correctAnswer:1,explanation:"Correct! Shifts from third person 'students' to second person 'you.' Should be: 'When students study hard, they can achieve better grades.'"},{id:"q6",question:"Which sentence has a correctly placed modifier?",options:["I found my keys looking under the couch.","Looking under the couch, I found my keys.","I found looking under the couch my keys.","My keys looking under the couch I found."],correctAnswer:1,explanation:"Correct! 'Looking under the couch' clearly modifies 'I' and is properly placed at the beginning."}]}}]}]},{id:"reading",title:"Reading Comprehension",icon:"📖",description:"Develop critical reading and analysis skills",chapters:[{id:"reading-1",title:"Chapter 1: Main Idea and Supporting Details",lessons:[{id:"reading-1-1",title:"Finding the Main Idea",type:"lesson",content:{introduction:"The main idea is the central point or message of a passage. Supporting details provide evidence or examples.",explanation:`**Main Idea** answers the question: What is this passage mostly about?

**Strategies to find the main idea:**
1. Look at the title and headings
2. Read the first and last sentences of paragraphs
3. Look for repeated words or concepts
4. Ask yourself: What point is the author trying to make?

**Supporting Details** answer: What evidence or examples does the author provide?
- Facts, statistics, examples, descriptions, or reasons that explain or prove the main idea.`,examples:[{text:"Dolphins are highly intelligent marine mammals. They can learn complex tricks and communicate with each other using clicks and whistles. Scientists have observed dolphins working together to solve problems and even using tools. Some dolphins have been seen using sponges to protect their noses while hunting for food on the ocean floor.",explanation:"Main Idea: Dolphins are highly intelligent. Supporting Details: They learn tricks, communicate, solve problems, and use tools."}]}},{id:"reading-1-2",title:"Practice: Main Idea",type:"exercise",content:{instructions:"Read the passage and answer the questions.",passage:"The California condor is one of the world's rarest birds. By 1987, only 27 California condors remained in the wild. Scientists captured all remaining birds and started a breeding program. Thanks to these conservation efforts, there are now over 500 California condors. About half of them fly free in California, Arizona, and Utah. Although the population has grown, the California condor is still endangered. Scientists continue to monitor and protect these magnificent birds.",questions:[{id:"q1",question:"What is the main idea of this passage?",options:["California condors can fly in three states","Scientists study birds carefully","Conservation efforts have helped save the California condor from extinction","There are 500 California condors today"],correctAnswer:2,explanation:"The passage focuses on how conservation efforts helped increase the condor population from near extinction."},{id:"q2",question:"Which detail supports the main idea?",options:["Condors are magnificent birds","By 1987, only 27 condors remained","Condors fly in California","Scientists monitor birds"],correctAnswer:1,explanation:"The fact that only 27 remained in 1987 shows how critical the situation was and why conservation was needed."}]}}]},{id:"reading-2",title:"Chapter 2: Making Inferences",lessons:[{id:"reading-2-1",title:"Reading Between the Lines",type:"lesson",content:{introduction:"An inference is a logical conclusion based on evidence from the text and your prior knowledge.",explanation:`**Making Inferences** means using clues from the text plus what you already know to figure out something the author doesn't directly state.

**Formula**: Text Clues + What I Know = Inference

**Steps to make inferences:**
1. Look for clues in the text
2. Think about what you already know
3. Combine them to reach a logical conclusion
4. Check if your inference makes sense with the entire passage`,examples:[{text:"Maria put on her warmest coat, wrapped a scarf around her neck, and pulled on her mittens. She could see her breath in the air as she stepped outside.",explanation:"Inference: It's very cold outside. Clues: warm coat, scarf, mittens, visible breath. What we know: We dress warmly in cold weather and can see our breath when it's cold."}]}},{id:"reading-2-2",title:"Practice: Making Inferences",type:"exercise",content:{instructions:"Read each passage and choose the best inference.",questions:[{id:"q1",passage:"Jake glanced at the clock nervously. He had studied all week for this test. When the teacher handed out the papers, his hands were shaking slightly. He took a deep breath and wrote his name at the top.",question:"What can you infer about Jake?",options:["Jake is confident about the test","Jake is anxious despite being prepared","Jake forgot to study","Jake doesn't care about tests"],correctAnswer:1,explanation:"Even though Jake studied, his nervousness (glancing at clock, shaking hands, deep breath) shows he's anxious."},{id:"q2",passage:"The crowd erupted in cheers as she crossed the finish line. Tears of joy streamed down her face as her teammates rushed to congratulate her. All those early morning practices had finally paid off.",question:"What can you infer?",options:["She lost the race","She won the race and feels accomplished","She is disappointed","She didn't practice much"],correctAnswer:1,explanation:"The cheers, tears of joy, and reference to practice paying off indicate she won and feels accomplished."}]}}]},{id:"reading-3",title:"Chapter 3: Citing Textual Evidence",lessons:[{id:"reading-3-1",title:"The Golden Rule: Prove Your Answers",type:"lesson",content:{introduction:"This is the 'Golden Rule' of 6th-grade reading: You can no longer just give an answer; you must PROVE it with evidence from the text. This is the foundation of all California Grade 6 reading standards.",explanation:`**Three Types of Textual Evidence:**

**1. Explicit Evidence (Direct Quotes)**
Finding exactly what the text says:
- The author directly states the information
- You can point to specific words or sentences
- Example: "The author states that 'the ocean covers 71% of Earth's surface.'"

**2. Inferences (Logical Conclusions)**
Drawing conclusions based on:
- Text clues + What you already know = Inference
- The author suggests but doesn't directly state
- Example: If a character is shivering and rubbing their hands, you can infer it's cold

**3. Quote Integration (Smooth Citation)**
Learning to smoothly incorporate quotes into your own sentences:

**Poor Integration:**
"The story is about courage. 'He faced his fears.'" (choppy)

**Good Integration:**
The story demonstrates courage when the narrator explains that "he faced his fears" despite being terrified.

---

**How to Cite Evidence:**

**Step 1: Make Your Point**
State your answer or claim clearly.

**Step 2: Introduce the Evidence**
Use phrases like:
- According to the text...
- The author states that...
- For example, the passage says...
- As shown in paragraph 3...

**Step 3: Provide the Quote**
Use quotation marks around exact words.

**Step 4: Explain the Connection**
Show how the evidence supports your point.

**Example:**
The main character shows bravery throughout the story. **According to the text**, when faced with danger, "she stood her ground and refused to back down." **This demonstrates** that she chose courage over fear, even when it would have been easier to run away.`,examples:[{text:`Question: How does the author feel about recycling?

Weak Answer: The author likes recycling.

Strong Answer: The author strongly supports recycling. According to the text, "Recycling is one of the most important actions individuals can take to protect the environment." This shows the author believes recycling is not just helpful, but essential.`,explanation:"The strong answer makes a claim, provides a direct quote, and explains how the evidence supports the point."},{text:`Using Inference:

Passage: 'Marcus slammed his locker and stormed down the hallway without saying goodbye to anyone.'

Inference: We can infer that Marcus is angry or upset. The text clues are 'slammed' and 'stormed,' which are actions associated with anger. Additionally, ignoring friends suggests he's too upset to be social.`,explanation:"This combines text evidence (specific words) with logical reasoning to make an inference."}]}},{id:"reading-3-2",title:"Practice: Citing Evidence",type:"exercise",content:{instructions:"Read the passage and answer questions by citing textual evidence.",passage:"The California redwood trees are the tallest living things on Earth, with some reaching heights of over 350 feet. These magnificent giants can live for more than 2,000 years. Redwoods thrive in the foggy coastal regions of Northern California, where the moisture from fog provides nearly 40% of their water needs. Sadly, only 5% of the original old-growth redwood forests remain today due to logging in the 1800s and 1900s. Conservation efforts are now working to protect these remaining ancient forests for future generations.",questions:[{id:"q1",question:"Which quote provides explicit evidence that redwoods are extremely tall?",options:['"These magnificent giants can live for more than 2,000 years."','"...some reaching heights of over 350 feet."','"Redwoods thrive in the foggy coastal regions..."','"Conservation efforts are now working..."'],correctAnswer:1,explanation:"This quote directly states their height (350 feet), providing explicit evidence of how tall they are."},{id:"q2",question:"Based on the passage, what can you INFER about why redwoods grow in foggy regions?",options:["They like cold weather","They need the moisture that fog provides","Fog protects them from logging","Other trees can't grow there"],correctAnswer:1,explanation:"The text states fog provides 40% of their water needs, so we can infer they grow there because they need that moisture."},{id:"q3",question:"Which statement BEST integrates evidence about redwood conservation?",options:["Conservation is important. 'Only 5% remain.'","Conservation efforts are protecting redwoods because the passage says so.","Due to extensive logging, 'only 5% of the original old-growth redwood forests remain today,' making conservation efforts critical.","Redwoods need protection and conservation efforts are working."],correctAnswer:2,explanation:"This option smoothly integrates the quote, provides context (logging), and explains why conservation is important."},{id:"q4",question:"What evidence supports the idea that redwoods are ancient trees?",options:["They are the tallest living things","They can live for more than 2,000 years","They grow in Northern California","Fog provides their water"],correctAnswer:1,explanation:"Living for over 2,000 years is explicit evidence that makes them ancient. This directly supports the claim."}]}}]},{id:"reading-4",title:"Chapter 4: Theme vs. Central Idea",lessons:[{id:"reading-4-1",title:"Theme in Literature vs. Central Idea in Nonfiction",type:"lesson",content:{introduction:"California standards distinguish between 'summary' and 'analysis.' Understanding theme (in literature) and central idea (in nonfiction) is crucial for Grade 6 reading success.",explanation:`**Theme (For Literature/Fiction)**

A theme is the underlying message, lesson, or moral of a story.

**Key Points:**
- Theme is NOT the topic (friendship, courage, family)
- Theme is a complete statement about life or human nature
- One story can have multiple themes
- Theme is what the author wants you to learn or think about

**How to Find Theme:**
1. What does the main character learn?
2. How do they change?
3. What message is the author sending?
4. What statement about life does this story make?

**Examples:**
- ❌ Topic: "friendship" (too simple)
- ✓ Theme: "True friendship requires sacrifice and loyalty."

- ❌ Topic: "courage"
- ✓ Theme: "Courage means doing what's right even when you're afraid."

---

**Central Idea (For Informational/Nonfiction)**

The central idea is the main point the author is making about the topic.

**Key Points:**
- What is the author's main point?
- What do all the details support?
- Usually found in the introduction or conclusion
- Supported by facts, examples, and evidence

**How to Find Central Idea:**
1. What is the topic?
2. What is the author saying about that topic?
3. What do most paragraphs discuss?
4. What point do all the details support?

**Example:**
- ❌ Topic: "Recycling" (too simple)
- ✓ Central Idea: "Recycling is essential for reducing waste and protecting the environment for future generations."

---

**Objective Summary (Required for Both!)**

An objective summary recaps the text WITHOUT adding opinions.

**Rules:**
- ❌ No "I think" or "I feel"
- ❌ No personal opinions
- ✓ Only main points and key details
- ✓ Keep it brief (3-5 sentences)
- ✓ Use your own words (don't just copy)

**Summary Structure:**
1. State the title and author
2. Identify the main topic/theme/central idea
3. Include only the most important details
4. Explain the outcome or conclusion

**Weak Summary:**
"This story is really good. I liked when the character won. It was exciting."

**Strong Summary:**
"In 'The Race,' by Maria Santos, a young runner overcomes self-doubt to compete in a championship. Through dedication and support from her coach, she learns that true victory comes from personal growth, not just winning."`,examples:[{text:`Story: A student struggles with math but refuses to give up. After months of extra practice and asking for help, she finally understands and passes the test.

Weak Theme: 'math' or 'school'
Strong Theme: 'Persistence and asking for help lead to success.'`,explanation:"The theme is a complete statement about life (persistence pays off), not just the topic (math)."},{text:`Article: Discusses how bees pollinate flowers, how their populations are declining, and why this threatens food supplies.

Weak Central Idea: 'bees'
Strong Central Idea: 'Declining bee populations threaten our food supply because bees are essential pollinators.'`,explanation:"The central idea states what the author is arguing about bees, not just the topic."}]}},{id:"reading-4-2",title:"Practice: Theme and Central Idea",type:"exercise",content:{instructions:"Identify themes, central ideas, and distinguish between objective and subjective statements.",questions:[{id:"q1",question:"Which is a complete THEME statement (not just a topic)?",options:["The story is about honesty.","Honesty is important.","Honesty, even when difficult, builds trust and strengthens relationships.","The character learns about honesty."],correctAnswer:2,explanation:"This is a complete theme statement - it expresses a full message about life and human nature, not just the topic."},{id:"q2",passage:"An article explains that exercising regularly improves heart health, boosts mood, reduces stress, and increases energy levels. The author emphasizes that just 30 minutes a day can make a significant difference.",question:"What is the CENTRAL IDEA of this article?",options:["Exercise","Regular exercise provides numerous health benefits and requires only 30 minutes daily.","Exercise is fun.","Heart health is important."],correctAnswer:1,explanation:"This central idea states the main point about exercise (it's beneficial and manageable), not just the topic."},{id:"q3",question:"Which is an OBJECTIVE summary statement (no opinions)?",options:["I think this story is really interesting and exciting.","The best part was when the character won the race.","The protagonist overcomes obstacles to achieve her goal.","This story is better than the last one we read."],correctAnswer:2,explanation:"This is objective - it states facts about the story without personal opinions or 'I think' statements."},{id:"q4",passage:"A short story follows a girl who moves to a new school. She feels lonely at first but decides to join the soccer team. By working together with her teammates and supporting each other, she makes lasting friendships.",question:"What is the THEME of this story?",options:["Soccer","Moving to a new school","Taking risks and being open to new experiences can lead to meaningful connections.","The girl joins a soccer team."],correctAnswer:2,explanation:"This theme expresses the life lesson - that taking risks (joining the team) leads to connections (friendships)."},{id:"q5",question:"Which summary is OBJECTIVE (no opinions)?",options:["The article was boring and too long.","I feel like the author made good points about recycling.","The author argues that recycling reduces waste and conserves natural resources.","This is the most important article I've ever read."],correctAnswer:2,explanation:"This states what the author argues without adding personal feelings or opinions."}]}}]},{id:"reading-5",title:"Chapter 5: Plot Structure and Text Organization",lessons:[{id:"reading-5-1",title:"Understanding How Stories and Texts Are Built",type:"lesson",content:{introduction:"Students must understand how a story or article is 'built.' For fiction, this means understanding plot stages. For nonfiction, it means recognizing text structures.",explanation:`**FICTION: Plot Structure**

Every story follows a pattern called the plot diagram:

**1. Exposition (Beginning)**
- Introduces characters, setting, and situation
- Background information
- Sets up the story
- Example: "Meet the main character in their normal world"

**2. Rising Action (Conflict Builds)**
- Problems and challenges arise
- Tension increases
- Series of events that complicate the situation
- Example: "Character faces obstacles"

**3. Climax (Turning Point)**
- The most intense moment
- The peak of the action
- Where the main conflict reaches its highest point
- Usually the most exciting part
- Example: "The big showdown or decision"

**4. Falling Action (After the Climax)**
- Events after the climax
- Tension decreases
- Loose ends start to tie up
- Example: "Consequences of the climax"

**5. Resolution (End)**
- Conflicts are resolved
- Story concludes
- Shows the new normal
- Example: "How things turned out"

---

**NONFICTION: Text Structures**

Nonfiction texts are organized in specific ways to present information:

**1. Chronological Order (Time Order)**
- Events in the order they happened
- Uses time words: first, next, then, finally, before, after
- Common in: biographies, history, process explanations
- Example: "First, mix the ingredients. Then, bake for 30 minutes."

**2. Cause and Effect**
- Shows why something happened (cause) and what happened as a result (effect)
- Signal words: because, since, as a result, therefore, consequently, leads to
- Common in: science, history, social studies
- Example: "Because it rained heavily, the game was postponed."

**3. Compare and Contrast**
- Shows similarities and differences
- Signal words: similarly, however, on the other hand, both, unlike, while, whereas
- Common in: articles comparing topics
- Example: "While both mammals, dolphins live in water whereas dogs live on land."

**4. Problem and Solution**
- Presents a problem and explains how it was or could be solved
- Signal words: problem, solution, solve, challenge, resolve, address
- Common in: persuasive texts, proposals
- Example: "The problem of littering can be solved through education and more trash cans."

**5. Description (Main Idea and Details)**
- Describes a topic with supporting details
- Signal words: for example, such as, characteristics, features
- Common in: encyclopedia entries, informational articles
- Example: "Dolphins are intelligent. For example, they can learn tricks and communicate."`,examples:[{text:`Plot Example:
Exposition: Sarah is nervous about her first day at a new school.
Rising Action: She can't find her classes, drops her lunch, and feels invisible.
Climax: She decides to audition for the school play despite her fears.
Falling Action: She makes the cast and starts making friends.
Resolution: Sarah realizes taking risks helped her find where she belongs.`,explanation:"This shows all five plot stages in a simple story arc."},{text:`Text Structure Example:
'Because plastic takes hundreds of years to decompose, it accumulates in oceans. As a result, marine animals often mistake it for food, which leads to injury or death.'

Structure: Cause and Effect (plastic doesn't decompose → accumulates → animals harmed)`,explanation:"The signal words 'because,' 'as a result,' and 'leads to' indicate cause and effect structure."}]}},{id:"reading-5-2",title:"Practice: Plot and Text Structure",type:"exercise",content:{instructions:"Identify plot stages and text structures in the following passages.",questions:[{id:"q1",passage:"In a small village, a young inventor named Alex dreamed of creating a flying machine. Everyone said it was impossible.",question:"Which plot stage is this?",options:["Exposition","Rising Action","Climax","Resolution"],correctAnswer:0,explanation:"This is exposition - it introduces the character (Alex), setting (small village), and situation (wants to build a flying machine)."},{id:"q2",passage:"Alex's machine crashed three times. The village council threatened to ban his experiments. His materials were running out, and time was running short.",question:"Which plot stage is this?",options:["Exposition","Rising Action","Climax","Falling Action"],correctAnswer:1,explanation:"This is rising action - problems are building up (crashes, council opposition, running out of supplies), increasing tension."},{id:"q3",passage:"Global warming causes ice caps to melt. As a result, sea levels rise, which leads to coastal flooding. Therefore, many island nations face the threat of disappearing underwater.",question:"What text structure is used here?",options:["Chronological Order","Cause and Effect","Compare and Contrast","Problem and Solution"],correctAnswer:1,explanation:"Signal words 'causes,' 'as a result,' 'leads to,' and 'therefore' indicate cause and effect structure."},{id:"q4",passage:"While both reptiles, snakes and lizards have some key differences. Snakes have no legs and move by slithering, whereas most lizards have four legs. However, both are cold-blooded and lay eggs.",question:"What text structure is used here?",options:["Chronological Order","Cause and Effect","Compare and Contrast","Description"],correctAnswer:2,explanation:"Signal words 'both,' 'differences,' 'whereas,' and 'however' indicate compare and contrast structure."},{id:"q5",passage:"Standing at the edge of the cliff, Alex pushed the button. The machine sputtered, roared to life, and lifted off the ground. The crowd below gasped as he soared above the village square.",question:"Which plot stage is this?",options:["Exposition","Rising Action","Climax","Resolution"],correctAnswer:2,explanation:"This is the climax - the most intense moment when the machine finally works and Alex achieves flight."},{id:"q6",passage:"Many schools struggle with food waste. One solution is to implement a share table where students can place unwanted items for others to take. Another approach is to teach students about portion sizes.",question:"What text structure is used here?",options:["Chronological Order","Cause and Effect","Compare and Contrast","Problem and Solution"],correctAnswer:3,explanation:"The passage presents a problem (food waste) and offers solutions (share table, teaching), using problem-solution structure."}]}}]},{id:"reading-6",title:"Chapter 6: Point of View and Author's Purpose",lessons:[{id:"reading-6-1",title:"Understanding Perspective and Purpose",type:"lesson",content:{introduction:"In 6th grade, focus shifts to understanding HOW the narrator's perspective shapes the story and WHY the author wrote the text. These are critical analytical skills.",explanation:`**POINT OF VIEW (POV) - Who Tells the Story?**

**1. First Person POV**
- Narrator is a CHARACTER in the story
- Uses pronouns: I, me, my, we, us, our
- Readers only know what the narrator knows
- We see their thoughts and feelings directly
- Example: "I walked into the classroom and saw my best friend."

**Strengths:** Personal, intimate, emotional connection
**Limitations:** Can only know one person's thoughts

**2. Third Person Limited POV**
- Narrator is OUTSIDE the story
- Uses pronouns: he, she, it, they, them
- Knows the thoughts and feelings of ONLY ONE character
- Like a camera following one person
- Example: "Sarah walked into the classroom. She felt nervous."

**Strengths:** More objective than first person, focuses on one character
**Limitations:** Can't see into other characters' minds

**3. Third Person Omniscient POV**
- Narrator is OUTSIDE the story
- Uses pronouns: he, she, it, they, them
- Knows EVERYONE'S thoughts and feelings
- Like an all-knowing observer
- Can move between characters' perspectives
- Example: "Sarah felt nervous as she entered. Across the room, Marcus hoped she would sit next to him."

**Strengths:** Can show multiple perspectives, full picture
**Limitations:** Less intimate, more distant

**Why POV Matters:**
- POV shapes what information readers receive
- It affects how we understand characters and events
- Authors choose POV strategically to control what readers know

---

**AUTHOR'S PURPOSE - Why Did They Write This?**

Remember P.I.E.:

**P = Persuade**
- Goal: Convince you to believe or do something
- Techniques: Strong opinions, emotional language, arguments, evidence
- Common in: Advertisements, opinion articles, speeches, reviews
- Example: "You should recycle to save the planet!"
- Signal words: should, must, best, important, believe

**I = Inform**
- Goal: Teach you facts or explain something
- Techniques: Facts, definitions, explanations, examples
- Common in: Textbooks, news articles, instructions, encyclopedias
- Example: "Recycling reduces waste by reusing materials."
- Signal words: facts, research shows, according to, studies indicate

**E = Entertain**
- Goal: Engage you, make you enjoy reading
- Techniques: Humor, suspense, interesting characters, dialogue
- Common in: Stories, novels, poems, comics
- Example: A funny story about a dog who thinks he's a cat
- Signal words: Descriptive language, dialogue, action

**Note:** Some texts have MULTIPLE purposes!
- A story might entertain AND teach a lesson
- An article might inform AND persuade

**How POV and Purpose Work Together:**
Authors choose POV based on their purpose:
- First person creates emotional connection (good for persuading)
- Third person omniscient provides complete information (good for informing)
- First person makes stories feel personal (good for entertaining)`,examples:[{text:`First Person: 'I couldn't believe what I was seeing. My heart raced as I opened the mysterious package.'

vs.

Third Person Omniscient: 'Sarah couldn't believe what she was seeing. Upstairs, her brother knew exactly what was in the package and waited nervously for her reaction.'`,explanation:"First person limits us to Sarah's perspective. Omniscient lets us know what both characters think."},{text:`Persuade: 'Schools must ban junk food! Healthy students learn better, and it's our responsibility to make good choices for kids.'

vs.

Inform: 'Studies show that students who eat nutritious lunches score 10% higher on afternoon tests than those who eat high-sugar foods.'`,explanation:"Persuasive text uses strong opinions and 'must.' Informative text presents facts and research objectively."}]}},{id:"reading-6-2",title:"Practice: POV and Author's Purpose",type:"exercise",content:{instructions:"Identify the point of view and author's purpose in each passage.",questions:[{id:"q1",passage:"I grabbed my backpack and ran out the door. Mom was calling my name, but I was already late for the bus. I couldn't believe I'd overslept again!",question:"What is the point of view?",options:["First Person","Third Person Limited","Third Person Omniscient","Second Person"],correctAnswer:0,explanation:"Uses 'I,' 'my,' and 'me' - the narrator is a character in the story. This is first person POV."},{id:"q2",passage:"Marcus looked at the test nervously. Across the room, his teacher smiled, confident that her students were well-prepared. Meanwhile, Sarah in the back row felt completely ready.",question:"What is the point of view?",options:["First Person","Third Person Limited","Third Person Omniscient","Second Person"],correctAnswer:2,explanation:"The narrator knows the thoughts of multiple characters (Marcus, teacher, Sarah). This is third person omniscient."},{id:"q3",passage:"You absolutely must try this new restaurant! The food is incredible, the service is perfect, and the prices can't be beat. Don't miss out - make a reservation today!",question:"What is the author's primary purpose?",options:["To Persuade","To Inform","To Entertain","To Describe"],correctAnswer:0,explanation:"Strong language like 'must,' 'incredible,' 'can't be beat,' and 'don't miss out' show the author is trying to persuade you to visit."},{id:"q4",passage:"Photosynthesis is the process by which plants convert sunlight into energy. During this process, plants take in carbon dioxide and water, and produce oxygen and glucose. This occurs primarily in the leaves.",question:"What is the author's primary purpose?",options:["To Persuade","To Inform","To Entertain","To Criticize"],correctAnswer:1,explanation:"The passage presents factual information about photosynthesis in an objective way. The purpose is to inform/teach."},{id:"q5",passage:"Emma walked slowly through the haunted house. She felt her hands trembling. Every creak made her jump. She wondered if coming here was a mistake.",question:"What is the point of view?",options:["First Person","Third Person Limited","Third Person Omniscient","Second Person"],correctAnswer:1,explanation:"Uses 'she' and 'her,' and we only know Emma's thoughts and feelings - no one else's. This is third person limited."},{id:"q6",passage:"Once upon a time, in a kingdom far away, there lived a dragon who was afraid of heights. This made flying quite difficult, and it led to many hilarious adventures!",question:"What is the author's primary purpose?",options:["To Persuade","To Inform","To Entertain","To Warn"],correctAnswer:2,explanation:"A funny story about a dragon afraid of heights is meant to entertain readers with humor and an amusing premise."}]}}]},{id:"reading-7",title:"Chapter 7: Close Reading Strategy",lessons:[{id:"reading-7-1",title:"The Three-Pass Method for Difficult Texts",type:"lesson",content:{introduction:"To master Grade 6 reading standards, use the 'Close Reading' method with three passes through difficult texts. Each read has a different focus, building deeper understanding.",explanation:`**THE CLOSE READING METHOD: Three Passes**

When facing a challenging text, don't try to understand everything at once. Read it THREE times, each with a different purpose:

---

**FIRST READ: What is the text saying?**

**Goal:** Understand the basic plot or facts

**Focus on:**
- Who are the main people/characters?
- What happens? (or What is this about?)
- Where and when does it take place?
- What is the basic sequence of events?

**Strategy:**
- Read at a normal pace
- Don't stop for unknown words (yet)
- Get the big picture first
- Ask: "What is this mostly about?"

**Mark:** Circle names, places, and unfamiliar words

---

**SECOND READ: How does the text work?**

**Goal:** Analyze the author's craft and techniques

**Focus on:**
- Vocabulary: What do unfamiliar words mean? (Use context clues!)
- Structure: How is it organized? (Plot stages or text structure)
- Point of View: Who's telling the story? What perspective?
- Author's choices: Why did they use this word? This order?

**Strategy:**
- Read more slowly
- Look up or figure out unknown words
- Notice how sentences connect
- Identify text structure or plot stages
- Ask: "How did the author build this?"

**Mark:** Underline strong words, note structure, identify POV

---

**THIRD READ: What does the text mean?**

**Goal:** Interpret deeper meaning and make connections

**Focus on:**
- Theme or Central Idea: What's the deeper message?
- Author's Purpose: Why did they write this?
- Connections: How does this relate to your life? Other texts? The world?
- Inference: What is suggested but not directly stated?
- Evidence: What quotes support your interpretation?

**Strategy:**
- Read thoughtfully, pausing to think
- Ask "why" questions
- Make connections beyond the text
- Form opinions backed by evidence
- Ask: "What does this really mean?"

**Mark:** Highlight key passages, write connections in margins

---

**EXAMPLE: Three Passes in Action**

Passage: "The old lighthouse stood alone on the cliff, its light extinguished long ago. Emma climbed the crumbling stairs, each step echoing in the empty tower. At the top, she found her grandmother's journal, filled with stories of ships she'd guided safely to shore."

**First Read:** Emma goes to an old lighthouse and finds her grandmother's journal.

**Second Read:** 
- Vocabulary: 'extinguished' = put out; 'crumbling' = falling apart
- Structure: Description → action → discovery
- POV: Third person limited (Emma's perspective)
- Word choice: 'alone,' 'empty,' 'old' create lonely atmosphere

**Third Read:**
- Theme: Connecting with the past through family history
- Purpose: To evoke feeling of nostalgia and discovery
- Connection: Like finding old family photos
- Inference: Grandma was a lighthouse keeper; Emma is discovering her legacy
- The lighthouse represents the past - once useful, now abandoned but still meaningful`,examples:[{text:`First Read: Just understand WHO, WHAT, WHERE, WHEN
Second Read: Analyze HOW the author tells it
Third Read: Interpret WHY it matters and what it means`,explanation:"Each read builds on the previous one, creating deeper understanding layer by layer."},{text:`DON'T do this: Try to answer all questions after one quick read
DO this: Read three times, each with a specific purpose, then answer questions with full understanding`,explanation:"Multiple focused reads lead to better comprehension than one rushed read."}]}},{id:"reading-7-2",title:"Practice: Close Reading",type:"exercise",content:{instructions:"Apply the three-pass method to answer questions about this passage at different levels.",passage:"The library was Maria's sanctuary. While other students rushed through the doors eager to escape, she lingered among the shelves, running her fingers along worn spines. Each book held a universe waiting to be discovered. Her friends couldn't understand why she'd rather read than scroll through social media. But Maria knew something they didn't: between these pages, she could be anyone, go anywhere, and learn anything. The library wasn't just a building—it was freedom.",questions:[{id:"q1",question:"FIRST READ: What is this passage basically about?",options:["A school building","Maria's love of reading and the library","Social media","Maria's friends"],correctAnswer:1,explanation:"First read focuses on the basic plot/topic: Maria loves the library and reading. This is the 'what' of the text."},{id:"q2",question:"SECOND READ: What does 'sanctuary' mean in context? (Analyzing vocabulary)",options:["A scary place","A church","A safe, peaceful refuge","A prison"],correctAnswer:2,explanation:"Context clues: she 'lingered' there, found it peaceful while others 'rushed to escape.' A sanctuary is a safe haven."},{id:"q3",question:"SECOND READ: What is the author's word choice doing? (Analyzing craft)",options:["Creating a negative mood","Making reading seem boring","Creating contrast between Maria and other students","Describing the library building"],correctAnswer:2,explanation:"Words like 'rushed/escape' vs. 'lingered/sanctuary' create contrast between Maria's view and others' views."},{id:"q4",question:"THIRD READ: What is the theme of this passage? (Deep meaning)",options:["Libraries have books.","Reading is boring.","Books and reading provide escape, knowledge, and freedom.","Maria doesn't have friends."],correctAnswer:2,explanation:"The theme is the deeper message: reading offers freedom and possibilities ('be anyone, go anywhere, learn anything')."},{id:"q5",question:"THIRD READ: What can you INFER about Maria? (Making connections)",options:["She has no friends.","She doesn't like school.","She values imagination and learning over superficial entertainment.","She wants to be a librarian."],correctAnswer:2,explanation:"We can infer from her choices (books over social media, 'learn anything') that she values depth and imagination."},{id:"q6",question:"THIRD READ: The last sentence says 'it was freedom.' What does this metaphor mean?",options:["The library has no rules.","Books allow Maria to escape limitations and explore unlimited possibilities.","Maria can leave whenever she wants.","The library is outside."],correctAnswer:1,explanation:"The metaphor connects to earlier ideas: 'be anyone, go anywhere, learn anything' - books free her from limitations."}]}}]}]},{id:"writing",title:"Writing",icon:"✍️",description:"Learn to express your ideas clearly and creatively",chapters:[{id:"writing-1",title:"Chapter 1: Paragraph Structure",lessons:[{id:"writing-1-1",title:"The Perfect Paragraph",type:"lesson",content:{introduction:"A well-structured paragraph has a clear main idea supported by relevant details.",explanation:`**Paragraph Structure:**

1. **Topic Sentence**: States the main idea
   - Usually the first sentence
   - Tells what the paragraph is about

2. **Supporting Sentences**: Provide details, examples, or evidence
   - 3-5 sentences that explain or prove the main idea
   - Use specific examples and details

3. **Concluding Sentence**: Wraps up the paragraph
   - Restates the main idea in a new way
   - Can transition to the next paragraph

**Tips for strong paragraphs:**
- Stay focused on one main idea
- Use transition words (First, Next, Also, Finally)
- Include specific examples
- Make sure all sentences relate to the topic`,examples:[{text:"Regular exercise provides many important benefits for young people. First, physical activity helps build strong bones and muscles, which is especially important during the growing years. Exercise also improves mental health by reducing stress and boosting mood. Additionally, participating in sports and physical activities helps students develop teamwork and social skills. For all these reasons, students should aim to exercise at least 60 minutes every day.",explanation:"Topic sentence: States benefits of exercise. Supporting sentences: Explains physical, mental, and social benefits. Concluding sentence: Reinforces the importance with a recommendation."}]}},{id:"writing-1-2",title:"Practice: Paragraph Structure",type:"exercise",content:{instructions:"Read the paragraph and answer questions about its structure.",passage:"Recycling helps protect our environment in several ways. When we recycle paper, we save trees from being cut down. Recycling plastic reduces the amount of waste in our oceans, protecting marine life. Metal recycling saves energy and natural resources. Every person can make a difference by recycling at home and school.",questions:[{id:"q1",question:"Which sentence is the topic sentence?",options:["When we recycle paper, we save trees from being cut down.","Recycling helps protect our environment in several ways.","Every person can make a difference by recycling at home and school.","Metal recycling saves energy and natural resources."],correctAnswer:1,explanation:"This sentence introduces the main idea that recycling helps the environment in multiple ways."},{id:"q2",question:"How many supporting details are provided?",options:["1","2","3","4"],correctAnswer:2,explanation:"Three supporting details are given: saving trees (paper), protecting oceans (plastic), and saving energy (metal)."}]}}]},{id:"writing-2",title:"Chapter 2: Narrative Writing",lessons:[{id:"writing-2-1",title:"Elements of Narrative Writing",type:"lesson",content:{introduction:"Narrative writing tells a story with characters, setting, plot, and a clear sequence of events.",explanation:`**Key Elements of Narrative Writing:**

1. **Characters**: The people or animals in your story
   - Protagonist: main character
   - Describe their traits and feelings

2. **Setting**: Where and when the story takes place
   - Use sensory details (sight, sound, smell, touch, taste)

3. **Plot**: The sequence of events
   - Beginning: Introduce characters and setting
   - Middle: Present a problem or conflict
   - End: Resolve the problem

4. **Point of View**: Who tells the story
   - First person: I, we (narrator is in the story)
   - Third person: He, she, they (narrator is outside)

5. **Dialogue**: Conversations between characters
   - Use quotation marks
   - Shows character personality

**Writing Tips:**
- Show, don't just tell (use actions and dialogue)
- Use transition words (First, Then, Next, Finally)
- Include descriptive details
- Build to a climax`,examples:[{text:"The old treehouse creaked in the wind as Maya climbed the wooden ladder. She hadn't been up here in years. As she pushed open the dusty door, a flood of memories washed over her. There, in the corner, sat the time capsule she and her best friend had buried five years ago. With trembling hands, she lifted the metal box. 'I wonder if she still remembers,' Maya whispered to herself.",explanation:"This excerpt shows: Character (Maya), Setting (old treehouse), Sensory details (creaked, dusty), First-person perspective (her thoughts), and Dialogue."}]}},{id:"writing-2-2",title:"Practice: Narrative Elements",type:"exercise",content:{instructions:"Read the narrative passage and identify its elements.",passage:"The gymnasium buzzed with excitement as students filed in for the science fair. Alex clutched his project board nervously, hoping the judges would appreciate his volcano experiment. 'You've got this!' his friend Marcus whispered encouragingly. When the judges approached his table, Alex took a deep breath and began his presentation. To his amazement, they listened intently and asked thoughtful questions. As they placed a blue ribbon on his table, Alex's face broke into a huge grin.",questions:[{id:"q1",question:"What is the setting of this story?",options:["A classroom","A gymnasium during a science fair","A laboratory","Marcus's house"],correctAnswer:1,explanation:"The story takes place in the gymnasium during the science fair, as stated in the first sentence."},{id:"q2",question:"What is the main conflict or problem?",options:["Alex doesn't have a project","The volcano doesn't work","Alex is nervous about presenting to the judges","Marcus is competing against Alex"],correctAnswer:2,explanation:"Alex is nervous about his presentation, as shown by him clutching his board nervously and taking a deep breath."},{id:"q3",question:"How is the conflict resolved?",options:["Alex runs away","Marcus helps present","Alex successfully presents and wins a blue ribbon","The judges don't come to his table"],correctAnswer:2,explanation:"Alex overcomes his nervousness, presents successfully, and receives a blue ribbon, resolving the conflict."}]}}]},{id:"writing-3",title:"Chapter 3: Argumentative Writing",lessons:[{id:"writing-3-1",title:"Building Strong Arguments with Evidence",type:"lesson",content:{introduction:"Argumentative writing is different from a simple opinion. In 6th grade, you must support claims with clear reasons and relevant evidence while maintaining a formal tone. This is a key California Grade 6 writing standard.",explanation:`**What is Argumentative Writing?**

Argumentative writing takes a position on an issue and supports it with evidence and reasoning.

**Structure of an Argument:**

**1. Claim (Your Position)**
- A clear statement of your position
- Debatable (people can disagree)
- Specific and focused
- Example: "Schools should require students to wear uniforms."

**2. Reasons (Why You Believe This)**
- Logical explanations for your claim
- Each reason should be distinct
- Examples:
  - Reason 1: Uniforms reduce bullying
  - Reason 2: Uniforms save families money
  - Reason 3: Uniforms improve focus on learning

**3. Evidence (Proof)**
- Facts, statistics, examples, expert quotes
- Must come from credible sources
- Examples:
  - "According to a 2020 study, schools with uniforms saw 25% less bullying."
  - "Dr. Smith, an education researcher, states that..."

**4. Counterclaim (The Other Side)**
- Acknowledge opposing viewpoints
- Show you've considered other perspectives
- Then refute (argue against) them
- Example: "Some argue uniforms limit self-expression. However..."

**5. Conclusion**
- Restate your claim
- Summarize main reasons
- End with a call to action or final thought

---

**Formal Tone Requirements:**

✓ **DO:**
- Use third person (they, students, people)
- Use formal vocabulary ("demonstrate" not "show")
- Cite sources properly
- Use transition words (Furthermore, Additionally, In conclusion)

✗ **DON'T:**
- Use first person (I think, I believe, In my opinion)
- Use informal language (stuff, things, really, very)
- Make claims without evidence
- Use emotional manipulation

---

**Argument Structure Template:**

**Introduction:**
- Hook (interesting fact or question)
- Background information
- Clear claim statement

**Body Paragraph 1:** Reason + Evidence
**Body Paragraph 2:** Reason + Evidence  
**Body Paragraph 3:** Counterclaim + Refutation

**Conclusion:**
- Restate claim
- Summarize reasons
- Call to action`,examples:[{text:`Weak Claim: 'I think homework is bad.'

Strong Claim: 'Schools should limit homework to 30 minutes per night because excessive homework reduces family time, increases student stress, and does not improve academic performance.'`,explanation:"The strong claim is specific, debatable, and includes preview of reasons."},{text:`Opinion (Not Argument): 'Recycling is good because it helps the environment.'

Argument: 'Communities should implement mandatory recycling programs. According to the EPA, recycling reduces landfill waste by 30% and conserves natural resources. Furthermore, cities with mandatory recycling save an average of $50,000 annually in waste management costs.'`,explanation:"The argument version includes specific evidence (statistics, sources) and formal tone."}]}},{id:"writing-3-2",title:"Practice: Argumentative Writing",type:"exercise",content:{instructions:"Identify strong arguments, evidence, and formal tone in the following scenarios.",questions:[{id:"q1",question:"Which is a strong, debatable CLAIM?",options:["Dogs are animals.","I think dogs are cute.","Schools should allow therapy dogs to help students manage stress and anxiety.","Many people like dogs."],correctAnswer:2,explanation:"This is specific, debatable, and takes a clear position. Options A and D are facts, and B is just an opinion without reasoning."},{id:"q2",question:"Which provides the BEST evidence for the claim 'Students should get more recess time'?",options:["I feel like recess is fun.","Everyone knows recess is important.","Research from Stanford University shows that students who have 30-minute recess breaks score 10% higher on afternoon tests.","Recess is the best part of school."],correctAnswer:2,explanation:"This cites a credible source (Stanford University) and provides specific data (10% higher scores). The others are opinions or vague statements."},{id:"q3",question:"Which sentence uses the MOST formal tone?",options:["I really think this is super important stuff.","Implementing this policy would significantly benefit students.","This thing is gonna help kids a lot.","In my opinion, it's pretty obvious we should do this."],correctAnswer:1,explanation:"Uses formal vocabulary ('implementing,' 'significantly benefit'), avoids 'I,' and maintains academic tone."},{id:"q4",question:"Identify the counterclaim: 'Schools should ban junk food. Some argue this limits student choice. However, student health is more important than snack preferences.'",options:["Schools should ban junk food.","Some argue this limits student choice.","Student health is more important.","Snack preferences."],correctAnswer:1,explanation:"The counterclaim acknowledges the opposing viewpoint (limiting choice) before refuting it."},{id:"q5",question:"Which is an appropriate way to present evidence?",options:["According to Dr. Martinez, a nutrition expert, 'School lunch programs that include fresh vegetables see a 40% increase in student vegetable consumption.'","I heard somewhere that school lunches are healthier now.","Everyone knows that vegetables are good.","My mom says we should eat more vegetables."],correctAnswer:0,explanation:"This properly cites a credible source, includes a direct quote, and provides specific data."}]}}]},{id:"writing-4",title:"Chapter 4: Informative/Explanatory Writing",lessons:[{id:"writing-4-1",title:"Examining Topics and Conveying Information Clearly",type:"lesson",content:{introduction:"Informative/explanatory writing examines a topic and conveys ideas or information clearly. Unlike argumentative writing, the goal is to inform, not persuade. This requires formatting, precise vocabulary, and clear organization.",explanation:`**What is Informative/Explanatory Writing?**

This writing explains or teaches about a topic without trying to convince the reader of anything.

**Purpose:**
- Explain how something works
- Describe what something is
- Analyze why something happens
- Compare and contrast topics

---

**Structure of Informative Writing:**

**1. Introduction**
- Hook: Interesting fact, question, or statement
- Background: Context about the topic
- Thesis: Clear statement of what you'll explain
- Example: "This essay will examine three major causes of climate change."

**2. Body Paragraphs** (Usually 3-5)

Each paragraph should:
- Start with a topic sentence
- Include facts, definitions, details, quotations, or examples
- Use precise vocabulary
- Connect back to the main topic

**Structure:**
- Topic Sentence
- Evidence/Example 1
- Evidence/Example 2
- Concluding/transition sentence

**3. Conclusion**
- Restate the thesis in new words
- Summarize main points
- End with a final insight or broader implication

---

**Formatting and Features:**

**Headings and Subheadings:**
Use these to organize information clearly
- Example: "Causes of Climate Change"
  - Subheading: "Fossil Fuel Emissions"
  - Subheading: "Deforestation"

**Definitions:**
Define technical or important terms
- "Photosynthesis is the process by which plants convert sunlight into energy."

**Examples and Illustrations:**
- "For instance, polar bears rely on sea ice for hunting."
- Can include diagrams, charts, or tables

**Precise Vocabulary:**
- ✓ "evaporate" (not "go away")
- ✓ "accelerate" (not "speed up")
- ✓ "habitat" (not "place where animals live")

---

**Informative vs. Argumentative:**

**Informative:**
- Purpose: Explain/teach
- Tone: Neutral, objective
- Evidence: Facts and information
- Example: "Climate change causes sea levels to rise."

**Argumentative:**
- Purpose: Persuade
- Tone: Takes a position
- Evidence: Used to support claim
- Example: "Governments must act immediately to address climate change."

---

**Key Features for Success:**

1. **Clear Organization:** Use logical order (chronological, cause-effect, compare-contrast)
2. **Transition Words:** Connect ideas (Furthermore, In addition, Similarly, In contrast)
3. **Domain-Specific Vocabulary:** Use precise terms related to the topic
4. **Objective Tone:** No opinions, just facts
5. **Multiple Sources:** Include information from various credible sources`,examples:[{text:`Topic Sentence: 'The water cycle consists of three main stages.'

Body: 'First, evaporation occurs when the sun heats water, causing it to transform from liquid to gas. Next, condensation happens as water vapor cools and forms clouds. Finally, precipitation releases water back to Earth in the form of rain, snow, or hail.'`,explanation:"Uses precise vocabulary (evaporation, condensation, precipitation), clear organization (First, Next, Finally), and objective tone."},{text:`Weak: 'Dolphins are really cool animals that do awesome things.'

Strong: 'Dolphins are highly intelligent marine mammals. They demonstrate problem-solving abilities, use echolocation to navigate, and exhibit complex social behaviors within their pods.'`,explanation:"Strong version uses precise vocabulary (marine mammals, echolocation, pods) and provides specific information instead of vague descriptions."}]}},{id:"writing-4-2",title:"Practice: Informative Writing",type:"exercise",content:{instructions:"Identify effective informative writing techniques and distinguish from argumentative writing.",questions:[{id:"q1",question:"Which is an appropriate thesis statement for informative writing?",options:["Everyone should learn about renewable energy because it's important.","This essay will explain three types of renewable energy: solar, wind, and hydroelectric power.","I think renewable energy is better than fossil fuels.","You must support renewable energy initiatives."],correctAnswer:1,explanation:"This clearly states what will be explained without taking a position or trying to persuade."},{id:"q2",question:"Which sentence uses the MOST precise vocabulary for informative writing?",options:["The heart pumps blood around the body.","The heart does stuff with blood.","The heart moves blood to different places.","The heart is really important for your body."],correctAnswer:0,explanation:"Uses precise terms (pumps, blood) and is clear and specific. The others are vague or informal."},{id:"q3",question:"Identify the INFORMATIVE passage (not argumentative):",options:["Schools must extend lunch periods to improve student health.","Extended lunch periods would benefit everyone.","Lunch periods vary in length across U.S. schools, ranging from 20 to 45 minutes. Research indicates that longer periods allow students more time for socialization and eating.","I believe all schools should have 45-minute lunches."],correctAnswer:2,explanation:"This informs about lunch period lengths and research findings without taking a position or trying to persuade."},{id:"q4",question:"Which transition word would BEST show cause and effect in informative writing?",options:["However","Similarly","Consequently","First"],correctAnswer:2,explanation:"'Consequently' shows cause and effect (this happened as a result). 'However' shows contrast, 'Similarly' shows comparison, 'First' shows sequence."},{id:"q5",question:"Which would be the BEST way to organize an essay about the life cycle of a butterfly?",options:["Compare and contrast structure","Problem and solution structure","Chronological (time order) structure","Most important to least important"],correctAnswer:2,explanation:"A life cycle happens in stages over time, so chronological order (egg → caterpillar → chrysalis → butterfly) makes sense."},{id:"q6",question:"Which sentence maintains an OBJECTIVE tone for informative writing?",options:["I think photosynthesis is the coolest process ever!","Photosynthesis is obviously the most important biological process.","Photosynthesis is the process by which plants convert light energy into chemical energy.","Everyone should learn about photosynthesis because it's amazing."],correctAnswer:2,explanation:"This presents factual information objectively without opinions, emotions, or attempts to persuade."}]}}]},{id:"writing-5",title:"Chapter 5: The Writing Process",lessons:[{id:"writing-5-1",title:"Planning, Drafting, Revising, and Editing",type:"lesson",content:{introduction:"In California Grade 6 standards, writing is treated as a process, not a one-time task. Students must demonstrate the ability to plan, draft, revise, and edit their work based on feedback.",explanation:`**THE WRITING PROCESS: 5 Stages**

---

**STAGE 1: PREWRITING (Planning)**

Before writing, organize your thoughts!

**Strategies:**
- **Brainstorming**: List all ideas (don't judge them yet)
- **Graphic Organizers**:
  - **Web/Cluster**: Main idea in center, details branching out
  - **Venn Diagram**: For compare/contrast
  - **Timeline**: For chronological/narrative
  - **Outline**: Traditional format with Roman numerals
  - **T-Chart**: Pros/cons, reasons/evidence

**For Argument:** List claim, reasons, evidence, counterclaim
**For Informative:** List main topic, subtopics, facts for each
**For Narrative:** Map plot (exposition, rising action, climax, falling action, resolution)

---

**STAGE 2: DRAFTING**

Get your ideas on paper - don't worry about perfection!

**Goal:** Write a complete first draft following your plan

**Tips:**
- Focus on content, not perfection
- Follow your outline/organizer
- Don't stop to fix every error
- Write in complete paragraphs
- Leave space for revisions (skip lines or double-space)

**Remember:** First drafts are supposed to be messy!

---

**STAGE 3: REVISING (Big Changes)**

Improve the content and organization

**Focus on:**
- **Ideas**: Is my main point clear? Do I need more evidence?
- **Organization**: Does the order make sense? Are paragraphs in logical order?
- **Word Choice**: Can I use more precise or interesting words?
- **Sentence Structure**: Can I combine choppy sentences? Break up long ones?
- **Audience**: Will my reader understand this?

**Revision Strategies:**
- Add: More details, evidence, examples
- Delete: Unnecessary information, repetition
- Move: Rearrange sentences or paragraphs
- Replace: Weak words with stronger ones

**Peer Review:** Exchange papers and give feedback
- What works well?
- What's confusing?
- What needs more explanation?

---

**STAGE 4: EDITING (Small Fixes)**

Correct grammar, spelling, and punctuation

**Focus on CUPS:**
- **C**apitalization (proper nouns, sentence starts)
- **U**sage (word choice, subject-verb agreement)
- **P**unctuation (commas, periods, quotation marks)
- **S**pelling (especially commonly confused words)

**Editing Checklist:**
✓ Every sentence starts with capital and ends with punctuation
✓ Proper nouns are capitalized
✓ Pronouns are in correct case (I vs. me)
✓ No run-on sentences or fragments
✓ Spelling is correct
✓ Commas used correctly

**Tip:** Read your paper aloud - you'll catch errors you missed reading silently!

---

**STAGE 5: PUBLISHING**

Create a final, polished version

**Technology Integration (Grade 6 Requirement):**
- Type your final draft using word processing software (Google Docs, Microsoft Word)
- **Typing Goal**: At least 3 pages in a single sitting
- Use proper formatting (margins, spacing, font)
- Include a title
- Add your name, date, and class

**Collaborative Tools:**
- Share with teacher/peers for comments
- Use track changes or suggestion mode
- Respond to feedback digitally

---

**THE DIFFERENCE: Revising vs. Editing**

**Revising = Big Picture**
- Content and ideas
- Organization
- "What I say and how I say it"

**Editing = Details**
- Grammar and mechanics
- Spelling
- "Correctness"

**Remember:** Always revise BEFORE editing! Don't waste time fixing grammar in a paragraph you might delete!`,examples:[{text:`Revision Example:
Draft: 'The dog ran. It was fast. It caught the ball.'

Revised: 'The golden retriever sprinted across the field and caught the tennis ball mid-air.'`,explanation:"Revision combines choppy sentences, adds specific details (golden retriever, tennis ball), and uses more precise verb (sprinted)."},{text:`Editing Example:
Draft: 'me and my friend went to the store we bought candy and soda'

Edited: 'My friend and I went to the store. We bought candy and soda.'`,explanation:"Editing fixes pronoun case (me → My friend and I), adds punctuation, and corrects capitalization."}]}},{id:"writing-5-2",title:"Practice: The Writing Process",type:"exercise",content:{instructions:"Identify the stages of the writing process and appropriate strategies for each.",questions:[{id:"q1",question:"Which activity is part of the PREWRITING stage?",options:["Typing the final draft","Creating a graphic organizer to plan ideas","Fixing spelling errors","Sharing the finished paper"],correctAnswer:1,explanation:"Prewriting involves planning and organizing ideas before writing. Graphic organizers help with this."},{id:"q2",question:"You notice your paper has three very short, choppy sentences in a row. What stage should you address this in?",options:["Prewriting","Drafting","Revising (combining sentences for better flow)","Editing (fixing grammar)"],correctAnswer:2,explanation:"Sentence structure and flow are revised during the revising stage (big changes), not editing (small corrections)."},{id:"q3",question:"Which is the BEST order for the writing process?",options:["Draft → Prewrite → Edit → Revise → Publish","Prewrite → Draft → Edit → Revise → Publish","Prewrite → Draft → Revise → Edit → Publish","Revise → Draft → Prewrite → Edit → Publish"],correctAnswer:2,explanation:"Correct order: Plan first, write draft, make big changes (revise), fix errors (edit), then create final version (publish)."},{id:"q4",question:"Which is an EDITING task (not revising)?",options:["Adding more evidence to support your claim","Moving a paragraph to a better location","Replacing 'good' with 'beneficial'","Correcting 'there' to 'their'"],correctAnswer:3,explanation:"Fixing spelling/grammar (their vs. there) is editing. The others are revising (content and organization changes)."},{id:"q5",question:"A peer reviewer says: 'I don't understand your second reason. Can you explain it better?' This feedback should be addressed during:",options:["Prewriting","Drafting","Revising (adding clarity)","Editing"],correctAnswer:2,explanation:"Clarity and explanation are content issues addressed during revising. The peer is asking for better content, not grammar fixes."},{id:"q6",question:"Which graphic organizer would be BEST for planning a narrative story?",options:["Venn diagram","Plot diagram (exposition, rising action, climax, falling action, resolution)","T-chart","Web/cluster map"],correctAnswer:1,explanation:"A plot diagram specifically organizes the stages of a story, making it perfect for narrative planning."}]}}]},{id:"writing-6",title:"Chapter 6: Research Skills",lessons:[{id:"writing-6-1",title:"Conducting Research and Evaluating Sources",type:"lesson",content:{introduction:"Grade 6 research skills represent a major step up from 5th grade. Students must conduct short research projects, evaluate source credibility, avoid plagiarism, and provide basic bibliographies.",explanation:`**CONDUCTING SHORT RESEARCH PROJECTS**

**Step 1: Start with a Research Question**
- Specific and focused (not too broad)
- ✓ Good: "How do dolphins communicate?"
- ✗ Too broad: "What are dolphins?"

**Step 2: Use Multiple Sources**
- Minimum 3-5 sources
- Variety of types: books, articles, websites, videos
- Different perspectives on the topic

**Step 3: Take Notes**
- Record information in your own words
- Include source information (author, title, date)
- Keep track of which facts come from which sources

---

**EVALUATING SOURCE CREDIBILITY**

Not all sources are equally reliable!

**RELIABLE SOURCES:**
✓ Educational websites (.edu, .gov)
✓ Library databases (EBSCOhost, Gale)
✓ Peer-reviewed articles
✓ Published books from reputable publishers
✓ Established news organizations
✓ Expert authors (professors, researchers)
✓ Recent information (especially for science/tech)

**UNRELIABLE SOURCES:**
✗ Random personal blogs
✗ Wikipedia (can be edited by anyone - use it for background only)
✗ Websites with obvious bias
✗ Sources with no author listed
✗ Very old information (for current topics)
✗ Websites trying to sell something

**The CRAAP Test for Sources:**

**C**urrency: Is it recent? When was it published?
**R**elevance: Does it answer my question?
**A**uthority: Who wrote it? Are they an expert?
**A**ccuracy: Can the facts be verified? Is there evidence?
**P**urpose: Why was this written? To inform? To sell?

---

**SUMMARIZING VS. PARAPHRASING**

Both put information in your own words, but differently:

**Summarizing:**
- Condenses the main ideas
- Shorter than the original
- Focuses on key points only
- Used for: Overall understanding of a text

**Example:**
Original (100 words) → Summary (20 words)
"The article discusses climate change..."

**Paraphrasing:**
- Restates specific information
- About the same length as original
- Changes sentence structure AND words
- Used for: Including specific information in your writing

**Example:**
Original: "Dolphins use echolocation to navigate in dark or murky water."
Paraphrase: "In unclear or dark waters, dolphins rely on sound waves to find their way around."

**AVOIDING PLAGIARISM:**

❌ Plagiarism = Using someone else's words or ideas without giving credit

**How to Avoid:**
1. Always cite your sources
2. Put exact words in quotation marks
3. Paraphrase in your own words (don't just change a few words!)
4. Give credit even when paraphrasing

---

**PROVIDING BASIC BIBLIOGRAPHIES**

List all sources at the end of your paper.

**Basic Format (MLA Style for Grade 6):**

**Book:**
Author Last Name, First Name. *Title of Book*. Publisher, Year.
- Example: Smith, John. *Dolphins of the Pacific*. Ocean Press, 2020.

**Website:**
Author (if available). "Title of Article." *Website Name*, Date, URL.
- Example: Martinez, Lisa. "How Dolphins Communicate." *Marine Biology Today*, 15 Jan. 2021, www.marinebio.com/dolphins.

**Article:**
Author. "Article Title." *Magazine/Newspaper Name*, Date, pages.

**Tips:**
- Alphabetical order by author's last name
- If no author, start with title
- Use hanging indent (first line regular, rest indented)
- Double-space the list`,examples:[{text:`Plagiarism Example:
Original: 'Photosynthesis allows plants to convert sunlight into energy.'

❌ Plagiarism: 'Photosynthesis lets plants turn sunlight into energy.'
(Just changed a few words)

✓ Proper Paraphrase: 'Through photosynthesis, plants transform light from the sun into usable chemical energy.'`,explanation:"The paraphrase completely restructures the sentence and uses different vocabulary while maintaining the meaning."},{text:`Source Evaluation:

Source A: Article from National Geographic by marine biologist Dr. Susan Chen, published 2022

Source B: Blog post from 'JoesOpinions.com' by anonymous author, no date

Source A is more reliable: established publication, expert author, recent date.`,explanation:"Source A has authority (expert author, reputable publication), currency (recent), and credibility."}]}},{id:"writing-6-2",title:"Practice: Research Skills",type:"exercise",content:{instructions:"Evaluate sources, identify plagiarism, and demonstrate research skills.",questions:[{id:"q1",question:"Which source is MOST credible for a research paper on ancient Egypt?",options:["A Wikipedia article with no author listed","A book by Dr. Sarah Ahmed, an Egyptologist at Harvard University, published in 2020","A personal blog about someone's vacation to Egypt","A social media post about pyramids"],correctAnswer:1,explanation:"This has authority (expert author), currency (recent), accuracy (from a reputable institution), making it most credible."},{id:"q2",question:"Original: 'Bees play a crucial role in pollinating crops.' Which is proper paraphrasing?",options:["Bees have a crucial role in pollinating crops.","Pollinating crops is a crucial role that bees play.","Bees are essential for crop pollination, transferring pollen between plants.","Bees play an important role in crop pollination."],correctAnswer:2,explanation:"This completely restructures the sentence and uses different words (essential, transferring pollen) while keeping the meaning."},{id:"q3",question:"Which research question is appropriately focused for a short research project?",options:["What is science?","Tell me about animals.","How do monarch butterflies navigate during migration?","What is everything about space?"],correctAnswer:2,explanation:"This is specific and focused (one species, one behavior). The others are too broad for a short project."},{id:"q4",question:"You find a great article but there's no author name listed. According to the CRAAP test, this affects:",options:["Currency","Relevance","Authority","Purpose"],correctAnswer:2,explanation:"Authority relates to who wrote it and their credentials. No author = questionable authority."},{id:"q5",question:"Which is an example of plagiarism?",options:["Putting a direct quote in quotation marks and citing the source","Paraphrasing an idea in your own words and citing the source","Copying sentences from a website and changing a few words without citing","Summarizing an article's main points in your own words with a citation"],correctAnswer:2,explanation:"This is plagiarism - copying without proper citation and without truly paraphrasing (just changing a few words isn't enough)."},{id:"q6",question:"What is the difference between summarizing and paraphrasing?",options:["There is no difference; they're the same thing.","Summarizing is shorter and covers main ideas; paraphrasing restates specific information in detail.","Summarizing requires citations; paraphrasing doesn't.","Paraphrasing is easier than summarizing."],correctAnswer:1,explanation:"Summarizing condenses to main ideas (shorter). Paraphrasing restates specific info in own words (similar length). Both need citations!"}]}}]},{id:"writing-7",title:"Chapter 7: Transition Words and Organization",lessons:[{id:"writing-7-1",title:"Making Writing Flow with Transitions",type:"lesson",content:{introduction:"To make writing flow smoothly, 6th graders must use transition words to connect ideas. Different transitions serve different purposes - showing contrast, cause/effect, sequence, and more.",explanation:`**WHAT ARE TRANSITION WORDS?**

Transition words are bridges between ideas. They help readers follow your thinking and understand how ideas connect.

**Without transitions:** Ideas feel choppy and disconnected
**With transitions:** Writing flows smoothly and logically

---

**TYPES OF TRANSITIONS:**

**1. TO SHOW SEQUENCE (Order/Time)**
Use when showing steps, order, or time

- First, Second, Third
- Initially, Subsequently, Finally
- Next, Then, After that
- Before, During, After
- Meanwhile, Eventually, Ultimately

**Example:** "**First**, preheat the oven. **Next**, mix the ingredients. **Finally**, bake for 30 minutes."

---

**2. TO SHOW ADDITION (Adding Ideas)**
Use when adding more information

- Additionally, Furthermore, Moreover
- Also, In addition, Besides
- As well as, Along with
- Another, Similarly

**Example:** "Exercise improves physical health. **Additionally**, it reduces stress and improves mood."

---

**3. TO SHOW CONTRAST (Differences/Opposition)**
Use when showing differences or opposite ideas

- However, Nevertheless, Nonetheless
- On the other hand, In contrast, Conversely
- Although, Though, Even though
- While, Whereas
- Despite, In spite of
- Yet, But, Still

**Example:** "Many students enjoy homework. **However**, research suggests excessive homework can increase stress."

---

**4. TO SHOW CAUSE AND EFFECT (Results)**
Use when showing why something happened or what resulted

- Therefore, Thus, Hence
- Consequently, As a result, Accordingly
- Because, Since, Due to
- For this reason, As a consequence
- This leads to, This results in

**Example:** "The temperature dropped below freezing. **Consequently**, the lake froze completely."

---

**5. TO SHOW EXAMPLES**
Use when providing specific instances

- For example, For instance, Such as
- Including, Specifically, In particular
- To illustrate, Namely

**Example:** "Many animals adapt to cold weather. **For instance**, polar bears have thick fur and layers of fat for insulation."

---

**6. TO SHOW COMPARISON (Similarities)**
Use when showing how things are alike

- Similarly, Likewise, In the same way
- Just as, Equally, Comparable to

**Example:** "Dolphins are highly intelligent. **Similarly**, elephants demonstrate complex problem-solving abilities."

---

**7. TO EMPHASIZE**
Use when highlighting importance

- Indeed, In fact, Certainly
- Undoubtedly, Clearly, Obviously
- Most importantly, Above all, Especially

**Example:** "Regular practice improves skills. **In fact**, students who practice daily show 50% more improvement."

---

**8. TO CONCLUDE**
Use when wrapping up

- In conclusion, To sum up, In summary
- Overall, Ultimately, In brief
- As a result, Therefore, Thus

**Example:** "**In conclusion**, renewable energy sources offer significant environmental and economic benefits."

---

**PUNCTUATION WITH TRANSITIONS:**

**At the beginning of a sentence:**
"**However**, the results were surprising." (comma after)

**Between two sentences:**
"The experiment failed. **Nevertheless**, we learned valuable lessons." (period before, comma after)

**Between two independent clauses:**
"The test was difficult**; however,** most students passed." (semicolon before, comma after)

**In the middle:**
"The project, **in addition**, required extensive research." (commas before and after)`,examples:[{text:`Without Transitions:
'I woke up late. I missed the bus. I had to walk. I was late to school.'

With Transitions:
'I woke up late. **Consequently**, I missed the bus. **As a result**, I had to walk to school. **Ultimately**, I arrived late.'`,explanation:"Transitions show cause and effect, making the connections between events clear and the writing flow better."},{text:`Showing Contrast:
'Some students prefer online learning. **However**, others find in-person classes more effective. **On the other hand**, hybrid models offer benefits of both approaches.'`,explanation:"Transitions (However, On the other hand) signal that different viewpoints are being presented."}]}},{id:"writing-7-2",title:"Practice: Transition Words",type:"exercise",content:{instructions:"Choose the best transition word for each sentence based on the relationship between ideas.",questions:[{id:"q1",question:"The team practiced every day. _____, they won the championship.",options:["However","Consequently","On the other hand","Similarly"],correctAnswer:1,explanation:"'Consequently' shows cause and effect - they won BECAUSE they practiced. 'However' would show contrast, which doesn't fit."},{id:"q2",question:"Smartphones are convenient. _____, they can be distracting in class.",options:["Similarly","Furthermore","However","Therefore"],correctAnswer:2,explanation:"'However' shows contrast between the positive (convenient) and negative (distracting) aspects."},{id:"q3",question:"_____ preheating the oven, mix all the dry ingredients together.",options:["Therefore","However","Initially","Despite"],correctAnswer:2,explanation:"'Initially' shows sequence - this is the first step in the process. It indicates the beginning."},{id:"q4",question:"Dogs require daily exercise. _____, cats also need regular physical activity.",options:["However","Similarly","Consequently","Nevertheless"],correctAnswer:1,explanation:"'Similarly' shows comparison - both animals need exercise. This indicates a similarity between dogs and cats."},{id:"q5",question:"Many animals hibernate during winter. _____, bears sleep for months to conserve energy during food shortages.",options:["However","On the other hand","For example","Consequently"],correctAnswer:2,explanation:"'For example' introduces a specific instance (bears) of the general statement (animals hibernate)."},{id:"q6",question:"The experiment failed twice. _____, the scientists didn't give up and tried a new approach.",options:["Therefore","Consequently","Nevertheless","Similarly"],correctAnswer:2,explanation:"'Nevertheless' shows contrast - despite the failures (negative), they persisted (positive). It means 'in spite of that.'"},{id:"q7",question:"_____, renewable energy sources reduce pollution and decrease dependence on fossil fuels.",options:["However","In conclusion","For instance","On the other hand"],correctAnswer:1,explanation:"'In conclusion' signals the end of an argument or essay, summarizing the main benefits."}]}}]}]}]},Bn="english-tutor-progress",xe={initProgress(){const e=this.getProgress();if(!e){const n={completedLessons:[],exerciseScores:{},lastAccessed:null,currentLesson:null};return localStorage.setItem(Bn,JSON.stringify(n)),n}return e},getProgress(){const e=localStorage.getItem(Bn);return e?JSON.parse(e):null},completeLesson(e){const n=this.getProgress()||this.initProgress();n.completedLessons.includes(e)||(n.completedLessons.push(e),localStorage.setItem(Bn,JSON.stringify(n)))},isLessonCompleted(e){return(this.getProgress()||this.initProgress()).completedLessons.includes(e)},saveExerciseScore(e,n,t){const r=this.getProgress()||this.initProgress();r.exerciseScores[e]={score:n,totalQuestions:t,percentage:Math.round(n/t*100),completedAt:new Date().toISOString()},localStorage.setItem(Bn,JSON.stringify(r))},getExerciseScore(e){return(this.getProgress()||this.initProgress()).exerciseScores[e]||null},setCurrentLesson(e){const n=this.getProgress()||this.initProgress();n.currentLesson=e,n.lastAccessed=new Date().toISOString(),localStorage.setItem(Bn,JSON.stringify(n))},getCurrentLesson(){return(this.getProgress()||this.initProgress()).currentLesson},calculateProgress(e){const t=(this.getProgress()||this.initProgress()).completedLessons.length;return e>0?Math.round(t/e*100):0},getModuleProgress(e,n){const t=this.getProgress()||this.initProgress(),r=n.filter(i=>i.id.startsWith(e)),o=r.filter(i=>t.completedLessons.includes(i.id)).length;return{completed:o,total:r.length,percentage:r.length>0?Math.round(o/r.length*100):0}},resetProgress(){return localStorage.removeItem(Bn),this.initProgress()}};function Cf({courseData:e,progress:n,refreshProgress:t}){const r=e.modules.reduce((s,a)=>s+a.chapters.reduce((l,u)=>l+u.lessons.length,0),0),o=xe.calculateProgress(r),i=s=>{const a=e.modules.find(l=>l.id===s);return a?a.chapters.flatMap(l=>l.lessons):[]};return f.jsxs("div",{className:"dashboard",children:[f.jsxs("section",{className:"welcome-section",children:[f.jsx("h2",{children:"Welcome to English Language Arts"}),f.jsx("p",{className:"course-description",children:e.description}),f.jsxs("div",{className:"progress-overview",children:[f.jsxs("div",{className:"progress-stat",children:[f.jsx("span",{className:"stat-value",children:n.completedLessons.length}),f.jsx("span",{className:"stat-label",children:"Lessons Completed"})]}),f.jsxs("div",{className:"progress-stat",children:[f.jsxs("span",{className:"stat-value",children:[o,"%"]}),f.jsx("span",{className:"stat-label",children:"Overall Progress"})]}),f.jsxs("div",{className:"progress-stat",children:[f.jsx("span",{className:"stat-value",children:Object.keys(n.exerciseScores).length}),f.jsx("span",{className:"stat-label",children:"Exercises Completed"})]})]}),f.jsxs("div",{className:"progress-bar-container",children:[f.jsx("div",{className:"progress-bar",children:f.jsx("div",{className:"progress-bar-fill",style:{width:`${o}%`}})}),f.jsxs("span",{className:"progress-text",children:[o,"% Complete"]})]})]}),f.jsxs("section",{className:"modules-section",children:[f.jsx("h2",{children:"Course Modules"}),f.jsx("div",{className:"modules-grid",children:e.modules.map(s=>{const a=i(s.id),l=xe.getModuleProgress(s.id,a);return f.jsxs(Fe,{to:`/module/${s.id}`,className:"module-card",children:[f.jsx("div",{className:"module-icon",children:s.icon}),f.jsx("h3",{children:s.title}),f.jsx("p",{className:"module-description",children:s.description}),f.jsxs("div",{className:"module-stats",children:[f.jsxs("span",{className:"chapter-count",children:[s.chapters.length," Chapter",s.chapters.length!==1?"s":""]}),f.jsxs("span",{className:"lesson-count",children:[a.length," Lesson",a.length!==1?"s":""]})]}),f.jsxs("div",{className:"module-progress",children:[f.jsx("div",{className:"progress-bar small",children:f.jsx("div",{className:"progress-bar-fill",style:{width:`${l.percentage}%`}})}),f.jsxs("span",{className:"progress-text small",children:[l.completed,"/",l.total," completed"]})]})]},s.id)})})]}),n.completedLessons.length>0&&f.jsxs("section",{className:"recent-activity",children:[f.jsx("h2",{children:"Recent Activity"}),f.jsx("div",{className:"activity-list",children:Object.entries(n.exerciseScores).slice(-5).reverse().map(([s,a])=>f.jsxs("div",{className:"activity-item",children:[f.jsx("span",{className:"activity-icon",children:"✓"}),f.jsxs("span",{className:"activity-text",children:["Completed exercise: ",s]}),f.jsxs("span",{className:`activity-score ${a.percentage>=70?"good":"needs-improvement"}`,children:[a.percentage,"%"]})]},s))})]})]})}function If({courseData:e,progress:n}){const{moduleId:t}=Uc(),r=e.modules.find(o=>o.id===t);return r?f.jsxs("div",{className:"module-view",children:[f.jsxs("div",{className:"module-header",children:[f.jsx(Fe,{to:"/",className:"back-link",children:"← Back to Dashboard"}),f.jsxs("div",{className:"module-title-section",children:[f.jsx("span",{className:"module-icon-large",children:r.icon}),f.jsxs("div",{children:[f.jsx("h1",{children:r.title}),f.jsx("p",{className:"module-description-large",children:r.description})]})]})]}),f.jsx("div",{className:"chapters-list",children:r.chapters.map((o,i)=>{const s=o.lessons,a=s.filter(l=>xe.isLessonCompleted(l.id)).length;return f.jsxs("div",{className:"chapter-card",children:[f.jsxs("div",{className:"chapter-header",children:[f.jsxs("h2",{children:[f.jsxs("span",{className:"chapter-number",children:["Chapter ",i+1]}),o.title.replace(/^Chapter \d+:\s*/,"")]}),f.jsxs("span",{className:"chapter-progress-badge",children:[a,"/",s.length," completed"]})]}),f.jsx("div",{className:"lessons-list",children:s.map((l,u)=>{const m=xe.isLessonCompleted(l.id),h=xe.getExerciseScore(l.id);return f.jsxs(Fe,{to:`/lesson/${l.id}`,className:`lesson-item ${m?"completed":""}`,children:[f.jsx("div",{className:"lesson-number",children:u+1}),f.jsxs("div",{className:"lesson-info",children:[f.jsx("h3",{children:l.title}),f.jsx("span",{className:`lesson-type ${l.type}`,children:l.type==="lesson"?"📖 Lesson":"✏️ Exercise"})]}),f.jsxs("div",{className:"lesson-status",children:[m&&f.jsx("span",{className:"completion-badge",children:"✓ Complete"}),h&&f.jsxs("span",{className:`score-badge ${h.percentage>=70?"good":"needs-improvement"}`,children:[h.percentage,"%"]}),!m&&!h&&f.jsx("span",{className:"start-badge",children:"Start →"})]})]},l.id)})})]},o.id)})})]}):f.jsxs("div",{className:"error-page",children:[f.jsx("h2",{children:"Module not found"}),f.jsx(Fe,{to:"/",className:"btn btn-primary",children:"Back to Dashboard"})]})}function Af({content:e,onComplete:n,isCompleted:t}){return f.jsxs("div",{className:"lesson-content",children:[f.jsxs("div",{className:"content-section",children:[f.jsxs("div",{className:"introduction",children:[f.jsx("h2",{children:"Introduction"}),f.jsx("p",{children:e.introduction})]}),f.jsxs("div",{className:"explanation",children:[f.jsx("h2",{children:"Explanation"}),f.jsx("div",{className:"explanation-text",children:e.explanation.split(`
`).map((r,o)=>{const i=r.split("**").map((s,a)=>a%2===1?f.jsx("strong",{children:s},a):s);return r.trim()?f.jsx("p",{children:i},o):null})})]}),e.examples&&e.examples.length>0&&f.jsxs("div",{className:"examples",children:[f.jsx("h2",{children:"Examples"}),e.examples.map((r,o)=>f.jsxs("div",{className:"example-card",children:[f.jsx("div",{className:"example-text",children:r.text}),f.jsxs("div",{className:"example-explanation",children:[f.jsx("strong",{children:"Explanation:"})," ",r.explanation]})]},o))]})]}),f.jsx("div",{className:"lesson-actions",children:t?f.jsxs("div",{className:"completed-message",children:[f.jsx("span",{className:"completion-icon",children:"✓"}),"You've completed this lesson!"]}):f.jsx("button",{onClick:n,className:"btn btn-primary",children:"Mark as Complete"})})]})}function Pf({lessonId:e,content:n,onComplete:t,refreshProgress:r}){const[o,i]=T.useState(0),[s,a]=T.useState({}),[l,u]=T.useState(!1),[m,h]=T.useState(0),g=xe.getExerciseScore(e);T.useEffect(()=>{g&&(u(!0),h(g.score))},[g]);const v=n.questions||[],k=n.passage,x=(w,b)=>{l||a({...s,[w]:b})},E=()=>{let w=0;v.forEach(b=>{s[b.id]===b.correctAnswer&&w++}),h(w),u(!0),xe.saveExerciseScore(e,w,v.length),xe.completeLesson(e),r()},d=()=>{a({}),u(!1),h(0),i(0)},c=w=>s.hasOwnProperty(w),p=v.every(w=>c(w.id)),y=Math.round(m/v.length*100);return f.jsxs("div",{className:"exercise-content",children:[f.jsxs("div",{className:"exercise-instructions",children:[f.jsx("h2",{children:"Instructions"}),f.jsx("p",{children:n.instructions})]}),k&&f.jsxs("div",{className:"reading-passage",children:[f.jsx("h3",{children:"Reading Passage"}),f.jsx("div",{className:"passage-text",children:n.passage})]}),f.jsx("div",{className:"questions-container",children:v.map((w,b)=>{c(w.id);const I=s[w.id],P=I===w.correctAnswer;return f.jsxs("div",{className:"question-card",children:[f.jsxs("div",{className:"question-header",children:[f.jsxs("span",{className:"question-number",children:["Question ",b+1]}),l&&f.jsx("span",{className:`result-badge ${P?"correct":"incorrect"}`,children:P?"✓ Correct":"✗ Incorrect"})]}),f.jsxs("div",{className:"question-text",children:[w.passage&&f.jsx("div",{className:"question-passage",children:f.jsx("em",{children:w.passage})}),w.word&&f.jsxs("div",{className:"question-word",children:["Word: ",f.jsx("strong",{children:w.word})]}),f.jsx("p",{children:w.question})]}),f.jsx("div",{className:"answer-options",children:w.options.map((z,N)=>{const de=I===N,He=N===w.correctAnswer;let qe="answer-option";return l?He?qe+=" correct":de&&!He&&(qe+=" incorrect"):de&&(qe+=" selected"),f.jsxs("button",{className:qe,onClick:()=>x(w.id,N),disabled:l,children:[f.jsxs("span",{className:"option-letter",children:[String.fromCharCode(65+N),"."]}),f.jsx("span",{className:"option-text",children:z}),l&&He&&f.jsx("span",{className:"check-icon",children:"✓"})]},N)})}),l&&f.jsxs("div",{className:"explanation-box",children:[f.jsx("strong",{children:"Explanation:"})," ",w.explanation]})]},w.id)})}),f.jsx("div",{className:"exercise-actions",children:l?f.jsxs("div",{className:"results-section",children:[f.jsxs("div",{className:"score-display",children:[f.jsxs("div",{className:`score-circle ${y>=70?"pass":"needs-improvement"}`,children:[f.jsxs("span",{className:"score-percentage",children:[y,"%"]}),f.jsxs("span",{className:"score-fraction",children:[m,"/",v.length]})]}),f.jsxs("div",{className:"score-message",children:[y>=90&&f.jsx("p",{children:"🌟 Excellent work! You've mastered this topic!"}),y>=70&&y<90&&f.jsx("p",{children:"✓ Good job! You have a solid understanding."}),y<70&&f.jsx("p",{children:"Keep practicing! Review the lesson and try again."})]})]}),f.jsxs("div",{className:"results-actions",children:[f.jsx("button",{onClick:d,className:"btn btn-secondary",children:"Try Again"}),f.jsx("button",{onClick:t,className:"btn btn-primary",children:"Continue to Next Lesson"})]})]}):f.jsx("button",{onClick:E,className:"btn btn-primary",disabled:!p,children:p?"Submit Answers":`Answer all questions (${Object.keys(s).length}/${v.length})`})})]})}function Nf({courseData:e,progress:n,refreshProgress:t}){const{lessonId:r}=Uc(),o=oa(),[i,s]=T.useState(null),[a,l]=T.useState(null),[u,m]=T.useState(null),[h,g]=T.useState(null),[v,k]=T.useState(null);T.useEffect(()=>{let d=null,c=null,p=null;for(const y of e.modules){for(const w of y.chapters){const b=w.lessons.find(I=>I.id===r);if(b){d=b,c=y,p=w;break}}if(d)break}if(d){s(d),l(c),m(p);const y=[];e.modules.forEach(b=>{b.chapters.forEach(I=>{y.push(...I.lessons)})});const w=y.findIndex(b=>b.id===r);w>0&&k(y[w-1]),w<y.length-1&&g(y[w+1]),xe.setCurrentLesson(r)}},[r,e]);const x=()=>{xe.completeLesson(r),t(),o(h?`/lesson/${h.id}`:`/module/${a.id}`)};if(!i||!a||!u)return f.jsxs("div",{className:"error-page",children:[f.jsx("h2",{children:"Lesson not found"}),f.jsx(Fe,{to:"/",className:"btn btn-primary",children:"Back to Dashboard"})]});const E=xe.isLessonCompleted(r);return f.jsxs("div",{className:"lesson-view",children:[f.jsxs("div",{className:"lesson-header",children:[f.jsxs(Fe,{to:`/module/${a.id}`,className:"back-link",children:["← Back to ",a.title]}),f.jsxs("div",{className:"lesson-breadcrumb",children:[f.jsx("span",{children:a.title}),f.jsx("span",{className:"separator",children:"/"}),f.jsx("span",{children:u.title})]})]}),f.jsxs("div",{className:"lesson-container",children:[f.jsxs("div",{className:"lesson-title-section",children:[f.jsx("h1",{children:i.title}),f.jsx("span",{className:`lesson-type-badge ${i.type}`,children:i.type==="lesson"?"📖 Lesson":"✏️ Exercise"}),E&&f.jsx("span",{className:"completion-badge large",children:"✓ Completed"})]}),i.type==="lesson"?f.jsx(Af,{content:i.content,onComplete:x,isCompleted:E}):f.jsx(Pf,{lessonId:i.id,content:i.content,onComplete:x,refreshProgress:t}),f.jsxs("div",{className:"lesson-navigation",children:[v&&f.jsxs(Fe,{to:`/lesson/${v.id}`,className:"nav-btn prev",children:["← Previous: ",v.title]}),h&&f.jsxs(Fe,{to:`/lesson/${h.id}`,className:"nav-btn next",children:["Next: ",h.title," →"]})]})]})]})}function Rf({courseTitle:e}){return f.jsx("header",{className:"header",children:f.jsxs("div",{className:"header-content",children:[f.jsxs(Fe,{to:"/",className:"logo",children:[f.jsx("span",{className:"logo-icon",children:"📚"}),f.jsx("h1",{children:e})]}),f.jsx("nav",{className:"nav",children:f.jsx(Fe,{to:"/",className:"nav-link",children:"Dashboard"})})]})})}function Mf(){const[e,n]=T.useState(null);T.useEffect(()=>{const r=xe.initProgress();n(r)},[]);const t=()=>{n(xe.getProgress())};return e?f.jsx(Sf,{basename:"/english-tutor-grade6",children:f.jsxs("div",{className:"app",children:[f.jsx(Rf,{courseTitle:Mr.courseTitle}),f.jsx("main",{className:"main-content",children:f.jsxs(mf,{children:[f.jsx(Mt,{path:"/",element:f.jsx(Cf,{courseData:Mr,progress:e,refreshProgress:t})}),f.jsx(Mt,{path:"/module/:moduleId",element:f.jsx(If,{courseData:Mr,progress:e,refreshProgress:t})}),f.jsx(Mt,{path:"/lesson/:lessonId",element:f.jsx(Nf,{courseData:Mr,progress:e,refreshProgress:t})}),f.jsx(Mt,{path:"*",element:f.jsx(pf,{to:"/"})})]})})]})}):f.jsx("div",{className:"loading",children:"Loading..."})}ci.createRoot(document.getElementById("root")).render(f.jsx(Ol.StrictMode,{children:f.jsx(Mf,{})}));
