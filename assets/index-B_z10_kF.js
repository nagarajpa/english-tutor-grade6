function $u(e,n){for(var t=0;t<n.length;t++){const o=n[t];if(typeof o!="string"&&!Array.isArray(o)){for(const i in o)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(o,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>o[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Qu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sl={exports:{}},yi={},xl={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ao=Symbol.for("react.element"),Ku=Symbol.for("react.portal"),Xu=Symbol.for("react.fragment"),Ju=Symbol.for("react.strict_mode"),Zu=Symbol.for("react.profiler"),ed=Symbol.for("react.provider"),nd=Symbol.for("react.context"),td=Symbol.for("react.forward_ref"),od=Symbol.for("react.suspense"),id=Symbol.for("react.memo"),sd=Symbol.for("react.lazy"),ra=Symbol.iterator;function rd(e){return e===null||typeof e!="object"?null:(e=ra&&e[ra]||e["@@iterator"],typeof e=="function"?e:null)}var kl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Il=Object.assign,Al={};function ft(e,n,t){this.props=e,this.context=n,this.refs=Al,this.updater=t||kl}ft.prototype.isReactComponent={};ft.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ft.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cl(){}Cl.prototype=ft.prototype;function rr(e,n,t){this.props=e,this.context=n,this.refs=Al,this.updater=t||kl}var ar=rr.prototype=new Cl;ar.constructor=rr;Il(ar,ft.prototype);ar.isPureReactComponent=!0;var aa=Array.isArray,Nl=Object.prototype.hasOwnProperty,lr={current:null},Rl={key:!0,ref:!0,__self:!0,__source:!0};function Pl(e,n,t){var o,i={},s=null,r=null;if(n!=null)for(o in n.ref!==void 0&&(r=n.ref),n.key!==void 0&&(s=""+n.key),n)Nl.call(n,o)&&!Rl.hasOwnProperty(o)&&(i[o]=n[o]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(o in a=e.defaultProps,a)i[o]===void 0&&(i[o]=a[o]);return{$$typeof:ao,type:e,key:s,ref:r,props:i,_owner:lr.current}}function ad(e,n){return{$$typeof:ao,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function cr(e){return typeof e=="object"&&e!==null&&e.$$typeof===ao}function ld(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var la=/\/+/g;function qi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?ld(""+e.key):n.toString(36)}function Wo(e,n,t,o,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case ao:case Ku:r=!0}}if(r)return r=e,i=i(r),e=o===""?"."+qi(r,0):o,aa(i)?(t="",e!=null&&(t=e.replace(la,"$&/")+"/"),Wo(i,n,t,"",function(c){return c})):i!=null&&(cr(i)&&(i=ad(i,t+(!i.key||r&&r.key===i.key?"":(""+i.key).replace(la,"$&/")+"/")+e)),n.push(i)),1;if(r=0,o=o===""?".":o+":",aa(e))for(var a=0;a<e.length;a++){s=e[a];var l=o+qi(s,a);r+=Wo(s,n,t,l,i)}else if(l=rd(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=o+qi(s,a++),r+=Wo(s,n,t,l,i);else if(s==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return r}function go(e,n,t){if(e==null)return e;var o=[],i=0;return Wo(e,o,"","",function(s){return n.call(t,s,i++)}),o}function cd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Do={transition:null},ud={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Do,ReactCurrentOwner:lr};function Ol(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:go,forEach:function(e,n,t){go(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return go(e,function(){n++}),n},toArray:function(e){return go(e,function(n){return n})||[]},only:function(e){if(!cr(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=ft;M.Fragment=Xu;M.Profiler=Zu;M.PureComponent=rr;M.StrictMode=Ju;M.Suspense=od;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ud;M.act=Ol;M.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=Il({},e.props),i=e.key,s=e.ref,r=e._owner;if(n!=null){if(n.ref!==void 0&&(s=n.ref,r=lr.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in n)Nl.call(n,l)&&!Rl.hasOwnProperty(l)&&(o[l]=n[l]===void 0&&a!==void 0?a[l]:n[l])}var l=arguments.length-2;if(l===1)o.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];o.children=a}return{$$typeof:ao,type:e.type,key:i,ref:s,props:o,_owner:r}};M.createContext=function(e){return e={$$typeof:nd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ed,_context:e},e.Consumer=e};M.createElement=Pl;M.createFactory=function(e){var n=Pl.bind(null,e);return n.type=e,n};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:td,render:e}};M.isValidElement=cr;M.lazy=function(e){return{$$typeof:sd,_payload:{_status:-1,_result:e},_init:cd}};M.memo=function(e,n){return{$$typeof:id,type:e,compare:n===void 0?null:n}};M.startTransition=function(e){var n=Do.transition;Do.transition={};try{e()}finally{Do.transition=n}};M.unstable_act=Ol;M.useCallback=function(e,n){return ce.current.useCallback(e,n)};M.useContext=function(e){return ce.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};M.useEffect=function(e,n){return ce.current.useEffect(e,n)};M.useId=function(){return ce.current.useId()};M.useImperativeHandle=function(e,n,t){return ce.current.useImperativeHandle(e,n,t)};M.useInsertionEffect=function(e,n){return ce.current.useInsertionEffect(e,n)};M.useLayoutEffect=function(e,n){return ce.current.useLayoutEffect(e,n)};M.useMemo=function(e,n){return ce.current.useMemo(e,n)};M.useReducer=function(e,n,t){return ce.current.useReducer(e,n,t)};M.useRef=function(e){return ce.current.useRef(e)};M.useState=function(e){return ce.current.useState(e)};M.useSyncExternalStore=function(e,n,t){return ce.current.useSyncExternalStore(e,n,t)};M.useTransition=function(){return ce.current.useTransition()};M.version="18.3.1";xl.exports=M;var S=xl.exports;const Ml=Qu(S),dd=$u({__proto__:null,default:Ml},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd=S,pd=Symbol.for("react.element"),md=Symbol.for("react.fragment"),fd=Object.prototype.hasOwnProperty,gd=hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yd={key:!0,ref:!0,__self:!0,__source:!0};function Wl(e,n,t){var o,i={},s=null,r=null;t!==void 0&&(s=""+t),n.key!==void 0&&(s=""+n.key),n.ref!==void 0&&(r=n.ref);for(o in n)fd.call(n,o)&&!yd.hasOwnProperty(o)&&(i[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps,n)i[o]===void 0&&(i[o]=n[o]);return{$$typeof:pd,type:e,key:s,ref:r,props:i,_owner:gd.current}}yi.Fragment=md;yi.jsx=Wl;yi.jsxs=Wl;Sl.exports=yi;var m=Sl.exports,us={},Dl={exports:{}},Ee={},Ll={exports:{}},ql={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(C,P){var O=C.length;C.push(P);e:for(;0<O;){var G=O-1>>>1,X=C[G];if(0<i(X,P))C[G]=P,C[O]=X,O=G;else break e}}function t(C){return C.length===0?null:C[0]}function o(C){if(C.length===0)return null;var P=C[0],O=C.pop();if(O!==P){C[0]=O;e:for(var G=0,X=C.length,mo=X>>>1;G<mo;){var In=2*(G+1)-1,Li=C[In],An=In+1,fo=C[An];if(0>i(Li,O))An<X&&0>i(fo,Li)?(C[G]=fo,C[An]=O,G=An):(C[G]=Li,C[In]=O,G=In);else if(An<X&&0>i(fo,O))C[G]=fo,C[An]=O,G=An;else break e}}return P}function i(C,P){var O=C.sortIndex-P.sortIndex;return O!==0?O:C.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var r=Date,a=r.now();e.unstable_now=function(){return r.now()-a}}var l=[],c=[],f=1,h=null,g=3,w=!1,b=!1,T=!1,x=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var P=t(c);P!==null;){if(P.callback===null)o(c);else if(P.startTime<=C)o(c),P.sortIndex=P.expirationTime,n(l,P);else break;P=t(c)}}function y(C){if(T=!1,p(C),!b)if(t(l)!==null)b=!0,Wi(v);else{var P=t(c);P!==null&&Di(y,P.startTime-C)}}function v(C,P){b=!1,T&&(T=!1,d(N),N=-1),w=!0;var O=g;try{for(p(P),h=t(l);h!==null&&(!(h.expirationTime>P)||C&&!de());){var G=h.callback;if(typeof G=="function"){h.callback=null,g=h.priorityLevel;var X=G(h.expirationTime<=P);P=e.unstable_now(),typeof X=="function"?h.callback=X:h===t(l)&&o(l),p(P)}else o(l);h=t(l)}if(h!==null)var mo=!0;else{var In=t(c);In!==null&&Di(y,In.startTime-P),mo=!1}return mo}finally{h=null,g=O,w=!1}}var k=!1,A=null,N=-1,U=5,R=-1;function de(){return!(e.unstable_now()-R<U)}function ze(){if(A!==null){var C=e.unstable_now();R=C;var P=!0;try{P=A(!0,C)}finally{P?qe():(k=!1,A=null)}}else k=!1}var qe;if(typeof u=="function")qe=function(){u(ze)};else if(typeof MessageChannel<"u"){var sa=new MessageChannel,Vu=sa.port2;sa.port1.onmessage=ze,qe=function(){Vu.postMessage(null)}}else qe=function(){x(ze,0)};function Wi(C){A=C,k||(k=!0,qe())}function Di(C,P){N=x(function(){C(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){b||w||(b=!0,Wi(v))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(l)},e.unstable_next=function(C){switch(g){case 1:case 2:case 3:var P=3;break;default:P=g}var O=g;g=P;try{return C()}finally{g=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,P){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var O=g;g=C;try{return P()}finally{g=O}},e.unstable_scheduleCallback=function(C,P,O){var G=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?G+O:G):O=G,C){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=O+X,C={id:f++,callback:P,priorityLevel:C,startTime:O,expirationTime:X,sortIndex:-1},O>G?(C.sortIndex=O,n(c,C),t(l)===null&&C===t(c)&&(T?(d(N),N=-1):T=!0,Di(y,O-G))):(C.sortIndex=X,n(l,C),b||w||(b=!0,Wi(v))),C},e.unstable_shouldYield=de,e.unstable_wrapCallback=function(C){var P=g;return function(){var O=g;g=P;try{return C.apply(this,arguments)}finally{g=O}}}})(ql);Ll.exports=ql;var wd=Ll.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd=S,be=wd;function E(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jl=new Set,_t={};function Un(e,n){lt(e,n),lt(e+"Capture",n)}function lt(e,n){for(_t[e]=n,e=0;e<n.length;e++)jl.add(n[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ds=Object.prototype.hasOwnProperty,Td=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ca={},ua={};function bd(e){return ds.call(ua,e)?!0:ds.call(ca,e)?!1:Td.test(e)?ua[e]=!0:(ca[e]=!0,!1)}function Ed(e,n,t,o){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sd(e,n,t,o){if(n===null||typeof n>"u"||Ed(e,n,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ue(e,n,t,o,i,s,r){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=s,this.removeEmptyString=r}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new ue(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var ur=/[\-:]([a-z])/g;function dr(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ur,dr);te[n]=new ue(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ur,dr);te[n]=new ue(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ur,dr);te[n]=new ue(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function hr(e,n,t,o){var i=te.hasOwnProperty(n)?te[n]:null;(i!==null?i.type!==0:o||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Sd(n,t,i,o)&&(t=null),o||i===null?bd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,o=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,o?e.setAttributeNS(o,n,t):e.setAttribute(n,t))))}var en=vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yo=Symbol.for("react.element"),zn=Symbol.for("react.portal"),Gn=Symbol.for("react.fragment"),pr=Symbol.for("react.strict_mode"),hs=Symbol.for("react.profiler"),Fl=Symbol.for("react.provider"),Ul=Symbol.for("react.context"),mr=Symbol.for("react.forward_ref"),ps=Symbol.for("react.suspense"),ms=Symbol.for("react.suspense_list"),fr=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),Hl=Symbol.for("react.offscreen"),da=Symbol.iterator;function Tt(e){return e===null||typeof e!="object"?null:(e=da&&e[da]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,ji;function Ct(e){if(ji===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ji=n&&n[1]||""}return`
`+ji+e}var Fi=!1;function Ui(e,n){if(!e||Fi)return"";Fi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var o=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){o=c}e.call(n.prototype)}else{try{throw Error()}catch(c){o=c}e()}}catch(c){if(c&&o&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=o.stack.split(`
`),r=i.length-1,a=s.length-1;1<=r&&0<=a&&i[r]!==s[a];)a--;for(;1<=r&&0<=a;r--,a--)if(i[r]!==s[a]){if(r!==1||a!==1)do if(r--,a--,0>a||i[r]!==s[a]){var l=`
`+i[r].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=r&&0<=a);break}}}finally{Fi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Ct(e):""}function xd(e){switch(e.tag){case 5:return Ct(e.type);case 16:return Ct("Lazy");case 13:return Ct("Suspense");case 19:return Ct("SuspenseList");case 0:case 2:case 15:return e=Ui(e.type,!1),e;case 11:return e=Ui(e.type.render,!1),e;case 1:return e=Ui(e.type,!0),e;default:return""}}function fs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gn:return"Fragment";case zn:return"Portal";case hs:return"Profiler";case pr:return"StrictMode";case ps:return"Suspense";case ms:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ul:return(e.displayName||"Context")+".Consumer";case Fl:return(e._context.displayName||"Context")+".Provider";case mr:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fr:return n=e.displayName||null,n!==null?n:fs(e.type)||"Memo";case on:n=e._payload,e=e._init;try{return fs(e(n))}catch{}}return null}function kd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fs(n);case 8:return n===pr?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Tn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _l(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Id(e){var n=_l(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,s=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(r){o=""+r,s.call(this,r)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(r){o=""+r},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function wo(e){e._valueTracker||(e._valueTracker=Id(e))}function Bl(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),o="";return e&&(o=_l(e)?e.checked?"true":"false":e.value),e=o,e!==t?(n.setValue(e),!0):!1}function Yo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gs(e,n){var t=n.checked;return B({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ha(e,n){var t=n.defaultValue==null?"":n.defaultValue,o=n.checked!=null?n.checked:n.defaultChecked;t=Tn(n.value!=null?n.value:t),e._wrapperState={initialChecked:o,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function zl(e,n){n=n.checked,n!=null&&hr(e,"checked",n,!1)}function ys(e,n){zl(e,n);var t=Tn(n.value),o=n.type;if(t!=null)o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ws(e,n.type,t):n.hasOwnProperty("defaultValue")&&ws(e,n.type,Tn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function pa(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var o=n.type;if(!(o!=="submit"&&o!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ws(e,n,t){(n!=="number"||Yo(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Nt=Array.isArray;function tt(e,n,t,o){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&o&&(e[t].defaultSelected=!0)}else{for(t=""+Tn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function vs(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(E(91));return B({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ma(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(E(92));if(Nt(t)){if(1<t.length)throw Error(E(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Tn(t)}}function Gl(e,n){var t=Tn(n.value),o=Tn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),o!=null&&(e.defaultValue=""+o)}function fa(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Yl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ts(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Yl(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vo,Vl=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,o,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,o,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(vo=vo||document.createElement("div"),vo.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=vo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Bt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Mt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ad=["Webkit","ms","Moz","O"];Object.keys(Mt).forEach(function(e){Ad.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Mt[n]=Mt[e]})});function $l(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Mt.hasOwnProperty(e)&&Mt[e]?(""+n).trim():n+"px"}function Ql(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var o=t.indexOf("--")===0,i=$l(t,n[t],o);t==="float"&&(t="cssFloat"),o?e.setProperty(t,i):e[t]=i}}var Cd=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bs(e,n){if(n){if(Cd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(E(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(E(61))}if(n.style!=null&&typeof n.style!="object")throw Error(E(62))}}function Es(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ss=null;function gr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xs=null,ot=null,it=null;function ga(e){if(e=uo(e)){if(typeof xs!="function")throw Error(E(280));var n=e.stateNode;n&&(n=Ei(n),xs(e.stateNode,e.type,n))}}function Kl(e){ot?it?it.push(e):it=[e]:ot=e}function Xl(){if(ot){var e=ot,n=it;if(it=ot=null,ga(e),n)for(e=0;e<n.length;e++)ga(n[e])}}function Jl(e,n){return e(n)}function Zl(){}var Hi=!1;function ec(e,n,t){if(Hi)return e(n,t);Hi=!0;try{return Jl(e,n,t)}finally{Hi=!1,(ot!==null||it!==null)&&(Zl(),Xl())}}function zt(e,n){var t=e.stateNode;if(t===null)return null;var o=Ei(t);if(o===null)return null;t=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(E(231,n,typeof t));return t}var ks=!1;if(Ke)try{var bt={};Object.defineProperty(bt,"passive",{get:function(){ks=!0}}),window.addEventListener("test",bt,bt),window.removeEventListener("test",bt,bt)}catch{ks=!1}function Nd(e,n,t,o,i,s,r,a,l){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(f){this.onError(f)}}var Wt=!1,Vo=null,$o=!1,Is=null,Rd={onError:function(e){Wt=!0,Vo=e}};function Pd(e,n,t,o,i,s,r,a,l){Wt=!1,Vo=null,Nd.apply(Rd,arguments)}function Od(e,n,t,o,i,s,r,a,l){if(Pd.apply(this,arguments),Wt){if(Wt){var c=Vo;Wt=!1,Vo=null}else throw Error(E(198));$o||($o=!0,Is=c)}}function Hn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function nc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ya(e){if(Hn(e)!==e)throw Error(E(188))}function Md(e){var n=e.alternate;if(!n){if(n=Hn(e),n===null)throw Error(E(188));return n!==e?null:e}for(var t=e,o=n;;){var i=t.return;if(i===null)break;var s=i.alternate;if(s===null){if(o=i.return,o!==null){t=o;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===t)return ya(i),e;if(s===o)return ya(i),n;s=s.sibling}throw Error(E(188))}if(t.return!==o.return)t=i,o=s;else{for(var r=!1,a=i.child;a;){if(a===t){r=!0,t=i,o=s;break}if(a===o){r=!0,o=i,t=s;break}a=a.sibling}if(!r){for(a=s.child;a;){if(a===t){r=!0,t=s,o=i;break}if(a===o){r=!0,o=s,t=i;break}a=a.sibling}if(!r)throw Error(E(189))}}if(t.alternate!==o)throw Error(E(190))}if(t.tag!==3)throw Error(E(188));return t.stateNode.current===t?e:n}function tc(e){return e=Md(e),e!==null?oc(e):null}function oc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=oc(e);if(n!==null)return n;e=e.sibling}return null}var ic=be.unstable_scheduleCallback,wa=be.unstable_cancelCallback,Wd=be.unstable_shouldYield,Dd=be.unstable_requestPaint,Y=be.unstable_now,Ld=be.unstable_getCurrentPriorityLevel,yr=be.unstable_ImmediatePriority,sc=be.unstable_UserBlockingPriority,Qo=be.unstable_NormalPriority,qd=be.unstable_LowPriority,rc=be.unstable_IdlePriority,wi=null,_e=null;function jd(e){if(_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(wi,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:Hd,Fd=Math.log,Ud=Math.LN2;function Hd(e){return e>>>=0,e===0?32:31-(Fd(e)/Ud|0)|0}var To=64,bo=4194304;function Rt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ko(e,n){var t=e.pendingLanes;if(t===0)return 0;var o=0,i=e.suspendedLanes,s=e.pingedLanes,r=t&268435455;if(r!==0){var a=r&~i;a!==0?o=Rt(a):(s&=r,s!==0&&(o=Rt(s)))}else r=t&~i,r!==0?o=Rt(r):s!==0&&(o=Rt(s));if(o===0)return 0;if(n!==0&&n!==o&&!(n&i)&&(i=o&-o,s=n&-n,i>=s||i===16&&(s&4194240)!==0))return n;if(o&4&&(o|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=o;0<n;)t=31-We(n),i=1<<t,o|=e[t],n&=~i;return o}function _d(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bd(e,n){for(var t=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var r=31-We(s),a=1<<r,l=i[r];l===-1?(!(a&t)||a&o)&&(i[r]=_d(a,n)):l<=n&&(e.expiredLanes|=a),s&=~a}}function As(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ac(){var e=To;return To<<=1,!(To&4194240)&&(To=64),e}function _i(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function lo(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-We(n),e[n]=t}function zd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-We(t),s=1<<i;n[i]=0,o[i]=-1,e[i]=-1,t&=~s}}function wr(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var o=31-We(t),i=1<<o;i&n|e[o]&n&&(e[o]|=n),t&=~i}}var D=0;function lc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var cc,vr,uc,dc,hc,Cs=!1,Eo=[],dn=null,hn=null,pn=null,Gt=new Map,Yt=new Map,rn=[],Gd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function va(e,n){switch(e){case"focusin":case"focusout":dn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":Gt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yt.delete(n.pointerId)}}function Et(e,n,t,o,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:o,nativeEvent:s,targetContainers:[i]},n!==null&&(n=uo(n),n!==null&&vr(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Yd(e,n,t,o,i){switch(n){case"focusin":return dn=Et(dn,e,n,t,o,i),!0;case"dragenter":return hn=Et(hn,e,n,t,o,i),!0;case"mouseover":return pn=Et(pn,e,n,t,o,i),!0;case"pointerover":var s=i.pointerId;return Gt.set(s,Et(Gt.get(s)||null,e,n,t,o,i)),!0;case"gotpointercapture":return s=i.pointerId,Yt.set(s,Et(Yt.get(s)||null,e,n,t,o,i)),!0}return!1}function pc(e){var n=Rn(e.target);if(n!==null){var t=Hn(n);if(t!==null){if(n=t.tag,n===13){if(n=nc(t),n!==null){e.blockedOn=n,hc(e.priority,function(){uc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ns(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var o=new t.constructor(t.type,t);Ss=o,t.target.dispatchEvent(o),Ss=null}else return n=uo(t),n!==null&&vr(n),e.blockedOn=t,!1;n.shift()}return!0}function Ta(e,n,t){Lo(e)&&t.delete(n)}function Vd(){Cs=!1,dn!==null&&Lo(dn)&&(dn=null),hn!==null&&Lo(hn)&&(hn=null),pn!==null&&Lo(pn)&&(pn=null),Gt.forEach(Ta),Yt.forEach(Ta)}function St(e,n){e.blockedOn===n&&(e.blockedOn=null,Cs||(Cs=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,Vd)))}function Vt(e){function n(i){return St(i,e)}if(0<Eo.length){St(Eo[0],e);for(var t=1;t<Eo.length;t++){var o=Eo[t];o.blockedOn===e&&(o.blockedOn=null)}}for(dn!==null&&St(dn,e),hn!==null&&St(hn,e),pn!==null&&St(pn,e),Gt.forEach(n),Yt.forEach(n),t=0;t<rn.length;t++)o=rn[t],o.blockedOn===e&&(o.blockedOn=null);for(;0<rn.length&&(t=rn[0],t.blockedOn===null);)pc(t),t.blockedOn===null&&rn.shift()}var st=en.ReactCurrentBatchConfig,Xo=!0;function $d(e,n,t,o){var i=D,s=st.transition;st.transition=null;try{D=1,Tr(e,n,t,o)}finally{D=i,st.transition=s}}function Qd(e,n,t,o){var i=D,s=st.transition;st.transition=null;try{D=4,Tr(e,n,t,o)}finally{D=i,st.transition=s}}function Tr(e,n,t,o){if(Xo){var i=Ns(e,n,t,o);if(i===null)Ji(e,n,o,Jo,t),va(e,o);else if(Yd(i,e,n,t,o))o.stopPropagation();else if(va(e,o),n&4&&-1<Gd.indexOf(e)){for(;i!==null;){var s=uo(i);if(s!==null&&cc(s),s=Ns(e,n,t,o),s===null&&Ji(e,n,o,Jo,t),s===i)break;i=s}i!==null&&o.stopPropagation()}else Ji(e,n,o,null,t)}}var Jo=null;function Ns(e,n,t,o){if(Jo=null,e=gr(o),e=Rn(e),e!==null)if(n=Hn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=nc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Jo=e,null}function mc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ld()){case yr:return 1;case sc:return 4;case Qo:case qd:return 16;case rc:return 536870912;default:return 16}default:return 16}}var ln=null,br=null,qo=null;function fc(){if(qo)return qo;var e,n=br,t=n.length,o,i="value"in ln?ln.value:ln.textContent,s=i.length;for(e=0;e<t&&n[e]===i[e];e++);var r=t-e;for(o=1;o<=r&&n[t-o]===i[s-o];o++);return qo=i.slice(e,1<o?1-o:void 0)}function jo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function So(){return!0}function ba(){return!1}function Se(e){function n(t,o,i,s,r){this._reactName=t,this._targetInst=i,this.type=o,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?So:ba,this.isPropagationStopped=ba,this}return B(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=So)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=So)},persist:function(){},isPersistent:So}),n}var gt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Er=Se(gt),co=B({},gt,{view:0,detail:0}),Kd=Se(co),Bi,zi,xt,vi=B({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xt&&(xt&&e.type==="mousemove"?(Bi=e.screenX-xt.screenX,zi=e.screenY-xt.screenY):zi=Bi=0,xt=e),Bi)},movementY:function(e){return"movementY"in e?e.movementY:zi}}),Ea=Se(vi),Xd=B({},vi,{dataTransfer:0}),Jd=Se(Xd),Zd=B({},co,{relatedTarget:0}),Gi=Se(Zd),eh=B({},gt,{animationName:0,elapsedTime:0,pseudoElement:0}),nh=Se(eh),th=B({},gt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),oh=Se(th),ih=B({},gt,{data:0}),Sa=Se(ih),sh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ah={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ah[e])?!!n[e]:!1}function Sr(){return lh}var ch=B({},co,{key:function(e){if(e.key){var n=sh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sr,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uh=Se(ch),dh=B({},vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xa=Se(dh),hh=B({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sr}),ph=Se(hh),mh=B({},gt,{propertyName:0,elapsedTime:0,pseudoElement:0}),fh=Se(mh),gh=B({},vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yh=Se(gh),wh=[9,13,27,32],xr=Ke&&"CompositionEvent"in window,Dt=null;Ke&&"documentMode"in document&&(Dt=document.documentMode);var vh=Ke&&"TextEvent"in window&&!Dt,gc=Ke&&(!xr||Dt&&8<Dt&&11>=Dt),ka=" ",Ia=!1;function yc(e,n){switch(e){case"keyup":return wh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function Th(e,n){switch(e){case"compositionend":return wc(n);case"keypress":return n.which!==32?null:(Ia=!0,ka);case"textInput":return e=n.data,e===ka&&Ia?null:e;default:return null}}function bh(e,n){if(Yn)return e==="compositionend"||!xr&&yc(e,n)?(e=fc(),qo=br=ln=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gc&&n.locale!=="ko"?null:n.data;default:return null}}var Eh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Aa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Eh[e.type]:n==="textarea"}function vc(e,n,t,o){Kl(o),n=Zo(n,"onChange"),0<n.length&&(t=new Er("onChange","change",null,t,o),e.push({event:t,listeners:n}))}var Lt=null,$t=null;function Sh(e){Rc(e,0)}function Ti(e){var n=Qn(e);if(Bl(n))return e}function xh(e,n){if(e==="change")return n}var Tc=!1;if(Ke){var Yi;if(Ke){var Vi="oninput"in document;if(!Vi){var Ca=document.createElement("div");Ca.setAttribute("oninput","return;"),Vi=typeof Ca.oninput=="function"}Yi=Vi}else Yi=!1;Tc=Yi&&(!document.documentMode||9<document.documentMode)}function Na(){Lt&&(Lt.detachEvent("onpropertychange",bc),$t=Lt=null)}function bc(e){if(e.propertyName==="value"&&Ti($t)){var n=[];vc(n,$t,e,gr(e)),ec(Sh,n)}}function kh(e,n,t){e==="focusin"?(Na(),Lt=n,$t=t,Lt.attachEvent("onpropertychange",bc)):e==="focusout"&&Na()}function Ih(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ti($t)}function Ah(e,n){if(e==="click")return Ti(n)}function Ch(e,n){if(e==="input"||e==="change")return Ti(n)}function Nh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Le=typeof Object.is=="function"?Object.is:Nh;function Qt(e,n){if(Le(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),o=Object.keys(n);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var i=t[o];if(!ds.call(n,i)||!Le(e[i],n[i]))return!1}return!0}function Ra(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pa(e,n){var t=Ra(e);e=0;for(var o;t;){if(t.nodeType===3){if(o=e+t.textContent.length,e<=n&&o>=n)return{node:t,offset:n-e};e=o}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ra(t)}}function Ec(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ec(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Sc(){for(var e=window,n=Yo();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Yo(e.document)}return n}function kr(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Rh(e){var n=Sc(),t=e.focusedElem,o=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ec(t.ownerDocument.documentElement,t)){if(o!==null&&kr(t)){if(n=o.start,e=o.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,s=Math.min(o.start,i);o=o.end===void 0?s:Math.min(o.end,i),!e.extend&&s>o&&(i=o,o=s,s=i),i=Pa(t,s);var r=Pa(t,o);i&&r&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==r.node||e.focusOffset!==r.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),s>o?(e.addRange(n),e.extend(r.node,r.offset)):(n.setEnd(r.node,r.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ph=Ke&&"documentMode"in document&&11>=document.documentMode,Vn=null,Rs=null,qt=null,Ps=!1;function Oa(e,n,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ps||Vn==null||Vn!==Yo(o)||(o=Vn,"selectionStart"in o&&kr(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),qt&&Qt(qt,o)||(qt=o,o=Zo(Rs,"onSelect"),0<o.length&&(n=new Er("onSelect","select",null,n,t),e.push({event:n,listeners:o}),n.target=Vn)))}function xo(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var $n={animationend:xo("Animation","AnimationEnd"),animationiteration:xo("Animation","AnimationIteration"),animationstart:xo("Animation","AnimationStart"),transitionend:xo("Transition","TransitionEnd")},$i={},xc={};Ke&&(xc=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function bi(e){if($i[e])return $i[e];if(!$n[e])return e;var n=$n[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in xc)return $i[e]=n[t];return e}var kc=bi("animationend"),Ic=bi("animationiteration"),Ac=bi("animationstart"),Cc=bi("transitionend"),Nc=new Map,Ma="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function En(e,n){Nc.set(e,n),Un(n,[e])}for(var Qi=0;Qi<Ma.length;Qi++){var Ki=Ma[Qi],Oh=Ki.toLowerCase(),Mh=Ki[0].toUpperCase()+Ki.slice(1);En(Oh,"on"+Mh)}En(kc,"onAnimationEnd");En(Ic,"onAnimationIteration");En(Ac,"onAnimationStart");En("dblclick","onDoubleClick");En("focusin","onFocus");En("focusout","onBlur");En(Cc,"onTransitionEnd");lt("onMouseEnter",["mouseout","mouseover"]);lt("onMouseLeave",["mouseout","mouseover"]);lt("onPointerEnter",["pointerout","pointerover"]);lt("onPointerLeave",["pointerout","pointerover"]);Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Un("onBeforeInput",["compositionend","keypress","textInput","paste"]);Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pt));function Wa(e,n,t){var o=e.type||"unknown-event";e.currentTarget=t,Od(o,n,void 0,e),e.currentTarget=null}function Rc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var o=e[t],i=o.event;o=o.listeners;e:{var s=void 0;if(n)for(var r=o.length-1;0<=r;r--){var a=o[r],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Wa(i,a,c),s=l}else for(r=0;r<o.length;r++){if(a=o[r],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Wa(i,a,c),s=l}}}if($o)throw e=Is,$o=!1,Is=null,e}function q(e,n){var t=n[Ls];t===void 0&&(t=n[Ls]=new Set);var o=e+"__bubble";t.has(o)||(Pc(n,e,2,!1),t.add(o))}function Xi(e,n,t){var o=0;n&&(o|=4),Pc(t,e,o,n)}var ko="_reactListening"+Math.random().toString(36).slice(2);function Kt(e){if(!e[ko]){e[ko]=!0,jl.forEach(function(t){t!=="selectionchange"&&(Wh.has(t)||Xi(t,!1,e),Xi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ko]||(n[ko]=!0,Xi("selectionchange",!1,n))}}function Pc(e,n,t,o){switch(mc(n)){case 1:var i=$d;break;case 4:i=Qd;break;default:i=Tr}t=i.bind(null,n,t,e),i=void 0,!ks||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Ji(e,n,t,o,i){var s=o;if(!(n&1)&&!(n&2)&&o!==null)e:for(;;){if(o===null)return;var r=o.tag;if(r===3||r===4){var a=o.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(r===4)for(r=o.return;r!==null;){var l=r.tag;if((l===3||l===4)&&(l=r.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;r=r.return}for(;a!==null;){if(r=Rn(a),r===null)return;if(l=r.tag,l===5||l===6){o=s=r;continue e}a=a.parentNode}}o=o.return}ec(function(){var c=s,f=gr(t),h=[];e:{var g=Nc.get(e);if(g!==void 0){var w=Er,b=e;switch(e){case"keypress":if(jo(t)===0)break e;case"keydown":case"keyup":w=uh;break;case"focusin":b="focus",w=Gi;break;case"focusout":b="blur",w=Gi;break;case"beforeblur":case"afterblur":w=Gi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ea;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Jd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=ph;break;case kc:case Ic:case Ac:w=nh;break;case Cc:w=fh;break;case"scroll":w=Kd;break;case"wheel":w=yh;break;case"copy":case"cut":case"paste":w=oh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=xa}var T=(n&4)!==0,x=!T&&e==="scroll",d=T?g!==null?g+"Capture":null:g;T=[];for(var u=c,p;u!==null;){p=u;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,d!==null&&(y=zt(u,d),y!=null&&T.push(Xt(u,y,p)))),x)break;u=u.return}0<T.length&&(g=new w(g,b,null,t,f),h.push({event:g,listeners:T}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&t!==Ss&&(b=t.relatedTarget||t.fromElement)&&(Rn(b)||b[Xe]))break e;if((w||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,w?(b=t.relatedTarget||t.toElement,w=c,b=b?Rn(b):null,b!==null&&(x=Hn(b),b!==x||b.tag!==5&&b.tag!==6)&&(b=null)):(w=null,b=c),w!==b)){if(T=Ea,y="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(T=xa,y="onPointerLeave",d="onPointerEnter",u="pointer"),x=w==null?g:Qn(w),p=b==null?g:Qn(b),g=new T(y,u+"leave",w,t,f),g.target=x,g.relatedTarget=p,y=null,Rn(f)===c&&(T=new T(d,u+"enter",b,t,f),T.target=p,T.relatedTarget=x,y=T),x=y,w&&b)n:{for(T=w,d=b,u=0,p=T;p;p=_n(p))u++;for(p=0,y=d;y;y=_n(y))p++;for(;0<u-p;)T=_n(T),u--;for(;0<p-u;)d=_n(d),p--;for(;u--;){if(T===d||d!==null&&T===d.alternate)break n;T=_n(T),d=_n(d)}T=null}else T=null;w!==null&&Da(h,g,w,T,!1),b!==null&&x!==null&&Da(h,x,b,T,!0)}}e:{if(g=c?Qn(c):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var v=xh;else if(Aa(g))if(Tc)v=Ch;else{v=Ih;var k=kh}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(v=Ah);if(v&&(v=v(e,c))){vc(h,v,t,f);break e}k&&k(e,g,c),e==="focusout"&&(k=g._wrapperState)&&k.controlled&&g.type==="number"&&ws(g,"number",g.value)}switch(k=c?Qn(c):window,e){case"focusin":(Aa(k)||k.contentEditable==="true")&&(Vn=k,Rs=c,qt=null);break;case"focusout":qt=Rs=Vn=null;break;case"mousedown":Ps=!0;break;case"contextmenu":case"mouseup":case"dragend":Ps=!1,Oa(h,t,f);break;case"selectionchange":if(Ph)break;case"keydown":case"keyup":Oa(h,t,f)}var A;if(xr)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Yn?yc(e,t)&&(N="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(gc&&t.locale!=="ko"&&(Yn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Yn&&(A=fc()):(ln=f,br="value"in ln?ln.value:ln.textContent,Yn=!0)),k=Zo(c,N),0<k.length&&(N=new Sa(N,e,null,t,f),h.push({event:N,listeners:k}),A?N.data=A:(A=wc(t),A!==null&&(N.data=A)))),(A=vh?Th(e,t):bh(e,t))&&(c=Zo(c,"onBeforeInput"),0<c.length&&(f=new Sa("onBeforeInput","beforeinput",null,t,f),h.push({event:f,listeners:c}),f.data=A))}Rc(h,n)})}function Xt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Zo(e,n){for(var t=n+"Capture",o=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=zt(e,t),s!=null&&o.unshift(Xt(e,s,i)),s=zt(e,n),s!=null&&o.push(Xt(e,s,i))),e=e.return}return o}function _n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Da(e,n,t,o,i){for(var s=n._reactName,r=[];t!==null&&t!==o;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===o)break;a.tag===5&&c!==null&&(a=c,i?(l=zt(t,s),l!=null&&r.unshift(Xt(t,l,a))):i||(l=zt(t,s),l!=null&&r.push(Xt(t,l,a)))),t=t.return}r.length!==0&&e.push({event:n,listeners:r})}var Dh=/\r\n?/g,Lh=/\u0000|\uFFFD/g;function La(e){return(typeof e=="string"?e:""+e).replace(Dh,`
`).replace(Lh,"")}function Io(e,n,t){if(n=La(n),La(e)!==n&&t)throw Error(E(425))}function ei(){}var Os=null,Ms=null;function Ws(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ds=typeof setTimeout=="function"?setTimeout:void 0,qh=typeof clearTimeout=="function"?clearTimeout:void 0,qa=typeof Promise=="function"?Promise:void 0,jh=typeof queueMicrotask=="function"?queueMicrotask:typeof qa<"u"?function(e){return qa.resolve(null).then(e).catch(Fh)}:Ds;function Fh(e){setTimeout(function(){throw e})}function Zi(e,n){var t=n,o=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(o===0){e.removeChild(i),Vt(n);return}o--}else t!=="$"&&t!=="$?"&&t!=="$!"||o++;t=i}while(t);Vt(n)}function mn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ja(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var yt=Math.random().toString(36).slice(2),Ue="__reactFiber$"+yt,Jt="__reactProps$"+yt,Xe="__reactContainer$"+yt,Ls="__reactEvents$"+yt,Uh="__reactListeners$"+yt,Hh="__reactHandles$"+yt;function Rn(e){var n=e[Ue];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Xe]||t[Ue]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ja(e);e!==null;){if(t=e[Ue])return t;e=ja(e)}return n}e=t,t=e.parentNode}return null}function uo(e){return e=e[Ue]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Ei(e){return e[Jt]||null}var qs=[],Kn=-1;function Sn(e){return{current:e}}function j(e){0>Kn||(e.current=qs[Kn],qs[Kn]=null,Kn--)}function L(e,n){Kn++,qs[Kn]=e.current,e.current=n}var bn={},re=Sn(bn),me=Sn(!1),Dn=bn;function ct(e,n){var t=e.type.contextTypes;if(!t)return bn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===n)return o.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in t)i[s]=n[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function fe(e){return e=e.childContextTypes,e!=null}function ni(){j(me),j(re)}function Fa(e,n,t){if(re.current!==bn)throw Error(E(168));L(re,n),L(me,t)}function Oc(e,n,t){var o=e.stateNode;if(n=n.childContextTypes,typeof o.getChildContext!="function")return t;o=o.getChildContext();for(var i in o)if(!(i in n))throw Error(E(108,kd(e)||"Unknown",i));return B({},t,o)}function ti(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bn,Dn=re.current,L(re,e),L(me,me.current),!0}function Ua(e,n,t){var o=e.stateNode;if(!o)throw Error(E(169));t?(e=Oc(e,n,Dn),o.__reactInternalMemoizedMergedChildContext=e,j(me),j(re),L(re,e)):j(me),L(me,t)}var Ye=null,Si=!1,es=!1;function Mc(e){Ye===null?Ye=[e]:Ye.push(e)}function _h(e){Si=!0,Mc(e)}function xn(){if(!es&&Ye!==null){es=!0;var e=0,n=D;try{var t=Ye;for(D=1;e<t.length;e++){var o=t[e];do o=o(!0);while(o!==null)}Ye=null,Si=!1}catch(i){throw Ye!==null&&(Ye=Ye.slice(e+1)),ic(yr,xn),i}finally{D=n,es=!1}}return null}var Xn=[],Jn=0,oi=null,ii=0,xe=[],ke=0,Ln=null,Ve=1,$e="";function Cn(e,n){Xn[Jn++]=ii,Xn[Jn++]=oi,oi=e,ii=n}function Wc(e,n,t){xe[ke++]=Ve,xe[ke++]=$e,xe[ke++]=Ln,Ln=e;var o=Ve;e=$e;var i=32-We(o)-1;o&=~(1<<i),t+=1;var s=32-We(n)+i;if(30<s){var r=i-i%5;s=(o&(1<<r)-1).toString(32),o>>=r,i-=r,Ve=1<<32-We(n)+i|t<<i|o,$e=s+e}else Ve=1<<s|t<<i|o,$e=e}function Ir(e){e.return!==null&&(Cn(e,1),Wc(e,1,0))}function Ar(e){for(;e===oi;)oi=Xn[--Jn],Xn[Jn]=null,ii=Xn[--Jn],Xn[Jn]=null;for(;e===Ln;)Ln=xe[--ke],xe[ke]=null,$e=xe[--ke],xe[ke]=null,Ve=xe[--ke],xe[ke]=null}var ve=null,we=null,F=!1,Me=null;function Dc(e,n){var t=Ie(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ha(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ve=e,we=mn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ve=e,we=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Ln!==null?{id:Ve,overflow:$e}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ie(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ve=e,we=null,!0):!1;default:return!1}}function js(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fs(e){if(F){var n=we;if(n){var t=n;if(!Ha(e,n)){if(js(e))throw Error(E(418));n=mn(t.nextSibling);var o=ve;n&&Ha(e,n)?Dc(o,t):(e.flags=e.flags&-4097|2,F=!1,ve=e)}}else{if(js(e))throw Error(E(418));e.flags=e.flags&-4097|2,F=!1,ve=e}}}function _a(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function Ao(e){if(e!==ve)return!1;if(!F)return _a(e),F=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ws(e.type,e.memoizedProps)),n&&(n=we)){if(js(e))throw Lc(),Error(E(418));for(;n;)Dc(e,n),n=mn(n.nextSibling)}if(_a(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){we=mn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}we=null}}else we=ve?mn(e.stateNode.nextSibling):null;return!0}function Lc(){for(var e=we;e;)e=mn(e.nextSibling)}function ut(){we=ve=null,F=!1}function Cr(e){Me===null?Me=[e]:Me.push(e)}var Bh=en.ReactCurrentBatchConfig;function kt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(E(309));var o=t.stateNode}if(!o)throw Error(E(147,e));var i=o,s=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===s?n.ref:(n=function(r){var a=i.refs;r===null?delete a[s]:a[s]=r},n._stringRef=s,n)}if(typeof e!="string")throw Error(E(284));if(!t._owner)throw Error(E(290,e))}return e}function Co(e,n){throw e=Object.prototype.toString.call(n),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ba(e){var n=e._init;return n(e._payload)}function qc(e){function n(d,u){if(e){var p=d.deletions;p===null?(d.deletions=[u],d.flags|=16):p.push(u)}}function t(d,u){if(!e)return null;for(;u!==null;)n(d,u),u=u.sibling;return null}function o(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function i(d,u){return d=wn(d,u),d.index=0,d.sibling=null,d}function s(d,u,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<u?(d.flags|=2,u):p):(d.flags|=2,u)):(d.flags|=1048576,u)}function r(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,u,p,y){return u===null||u.tag!==6?(u=as(p,d.mode,y),u.return=d,u):(u=i(u,p),u.return=d,u)}function l(d,u,p,y){var v=p.type;return v===Gn?f(d,u,p.props.children,y,p.key):u!==null&&(u.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===on&&Ba(v)===u.type)?(y=i(u,p.props),y.ref=kt(d,u,p),y.return=d,y):(y=Go(p.type,p.key,p.props,null,d.mode,y),y.ref=kt(d,u,p),y.return=d,y)}function c(d,u,p,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=ls(p,d.mode,y),u.return=d,u):(u=i(u,p.children||[]),u.return=d,u)}function f(d,u,p,y,v){return u===null||u.tag!==7?(u=Wn(p,d.mode,y,v),u.return=d,u):(u=i(u,p),u.return=d,u)}function h(d,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=as(""+u,d.mode,p),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case yo:return p=Go(u.type,u.key,u.props,null,d.mode,p),p.ref=kt(d,null,u),p.return=d,p;case zn:return u=ls(u,d.mode,p),u.return=d,u;case on:var y=u._init;return h(d,y(u._payload),p)}if(Nt(u)||Tt(u))return u=Wn(u,d.mode,p,null),u.return=d,u;Co(d,u)}return null}function g(d,u,p,y){var v=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return v!==null?null:a(d,u,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case yo:return p.key===v?l(d,u,p,y):null;case zn:return p.key===v?c(d,u,p,y):null;case on:return v=p._init,g(d,u,v(p._payload),y)}if(Nt(p)||Tt(p))return v!==null?null:f(d,u,p,y,null);Co(d,p)}return null}function w(d,u,p,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(p)||null,a(u,d,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case yo:return d=d.get(y.key===null?p:y.key)||null,l(u,d,y,v);case zn:return d=d.get(y.key===null?p:y.key)||null,c(u,d,y,v);case on:var k=y._init;return w(d,u,p,k(y._payload),v)}if(Nt(y)||Tt(y))return d=d.get(p)||null,f(u,d,y,v,null);Co(u,y)}return null}function b(d,u,p,y){for(var v=null,k=null,A=u,N=u=0,U=null;A!==null&&N<p.length;N++){A.index>N?(U=A,A=null):U=A.sibling;var R=g(d,A,p[N],y);if(R===null){A===null&&(A=U);break}e&&A&&R.alternate===null&&n(d,A),u=s(R,u,N),k===null?v=R:k.sibling=R,k=R,A=U}if(N===p.length)return t(d,A),F&&Cn(d,N),v;if(A===null){for(;N<p.length;N++)A=h(d,p[N],y),A!==null&&(u=s(A,u,N),k===null?v=A:k.sibling=A,k=A);return F&&Cn(d,N),v}for(A=o(d,A);N<p.length;N++)U=w(A,d,N,p[N],y),U!==null&&(e&&U.alternate!==null&&A.delete(U.key===null?N:U.key),u=s(U,u,N),k===null?v=U:k.sibling=U,k=U);return e&&A.forEach(function(de){return n(d,de)}),F&&Cn(d,N),v}function T(d,u,p,y){var v=Tt(p);if(typeof v!="function")throw Error(E(150));if(p=v.call(p),p==null)throw Error(E(151));for(var k=v=null,A=u,N=u=0,U=null,R=p.next();A!==null&&!R.done;N++,R=p.next()){A.index>N?(U=A,A=null):U=A.sibling;var de=g(d,A,R.value,y);if(de===null){A===null&&(A=U);break}e&&A&&de.alternate===null&&n(d,A),u=s(de,u,N),k===null?v=de:k.sibling=de,k=de,A=U}if(R.done)return t(d,A),F&&Cn(d,N),v;if(A===null){for(;!R.done;N++,R=p.next())R=h(d,R.value,y),R!==null&&(u=s(R,u,N),k===null?v=R:k.sibling=R,k=R);return F&&Cn(d,N),v}for(A=o(d,A);!R.done;N++,R=p.next())R=w(A,d,N,R.value,y),R!==null&&(e&&R.alternate!==null&&A.delete(R.key===null?N:R.key),u=s(R,u,N),k===null?v=R:k.sibling=R,k=R);return e&&A.forEach(function(ze){return n(d,ze)}),F&&Cn(d,N),v}function x(d,u,p,y){if(typeof p=="object"&&p!==null&&p.type===Gn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case yo:e:{for(var v=p.key,k=u;k!==null;){if(k.key===v){if(v=p.type,v===Gn){if(k.tag===7){t(d,k.sibling),u=i(k,p.props.children),u.return=d,d=u;break e}}else if(k.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===on&&Ba(v)===k.type){t(d,k.sibling),u=i(k,p.props),u.ref=kt(d,k,p),u.return=d,d=u;break e}t(d,k);break}else n(d,k);k=k.sibling}p.type===Gn?(u=Wn(p.props.children,d.mode,y,p.key),u.return=d,d=u):(y=Go(p.type,p.key,p.props,null,d.mode,y),y.ref=kt(d,u,p),y.return=d,d=y)}return r(d);case zn:e:{for(k=p.key;u!==null;){if(u.key===k)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){t(d,u.sibling),u=i(u,p.children||[]),u.return=d,d=u;break e}else{t(d,u);break}else n(d,u);u=u.sibling}u=ls(p,d.mode,y),u.return=d,d=u}return r(d);case on:return k=p._init,x(d,u,k(p._payload),y)}if(Nt(p))return b(d,u,p,y);if(Tt(p))return T(d,u,p,y);Co(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(t(d,u.sibling),u=i(u,p),u.return=d,d=u):(t(d,u),u=as(p,d.mode,y),u.return=d,d=u),r(d)):t(d,u)}return x}var dt=qc(!0),jc=qc(!1),si=Sn(null),ri=null,Zn=null,Nr=null;function Rr(){Nr=Zn=ri=null}function Pr(e){var n=si.current;j(si),e._currentValue=n}function Us(e,n,t){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===t)break;e=e.return}}function rt(e,n){ri=e,Nr=Zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(pe=!0),e.firstContext=null)}function Ce(e){var n=e._currentValue;if(Nr!==e)if(e={context:e,memoizedValue:n,next:null},Zn===null){if(ri===null)throw Error(E(308));Zn=e,ri.dependencies={lanes:0,firstContext:e}}else Zn=Zn.next=e;return n}var Pn=null;function Or(e){Pn===null?Pn=[e]:Pn.push(e)}function Fc(e,n,t,o){var i=n.interleaved;return i===null?(t.next=t,Or(n)):(t.next=i.next,i.next=t),n.interleaved=t,Je(e,o)}function Je(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var sn=!1;function Mr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function fn(e,n,t){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,W&2){var i=o.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),o.pending=n,Je(e,t)}return i=o.interleaved,i===null?(n.next=n,Or(o)):(n.next=i.next,i.next=n),o.interleaved=n,Je(e,t)}function Fo(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,wr(e,t)}}function za(e,n){var t=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var i=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var r={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?i=s=r:s=s.next=r,t=t.next}while(t!==null);s===null?i=s=n:s=s.next=n}else i=s=n;t={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ai(e,n,t,o){var i=e.updateQueue;sn=!1;var s=i.firstBaseUpdate,r=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==r&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;r=0,f=c=l=null,a=s;do{var g=a.lane,w=a.eventTime;if((o&g)===g){f!==null&&(f=f.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var b=e,T=a;switch(g=n,w=t,T.tag){case 1:if(b=T.payload,typeof b=="function"){h=b.call(w,h,g);break e}h=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=T.payload,g=typeof b=="function"?b.call(w,h,g):b,g==null)break e;h=B({},h,g);break e;case 2:sn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else w={eventTime:w,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=w,l=h):f=f.next=w,r|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(l=h),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=f,n=i.shared.interleaved,n!==null){i=n;do r|=i.lane,i=i.next;while(i!==n)}else s===null&&(i.shared.lanes=0);jn|=r,e.lanes=r,e.memoizedState=h}}function Ga(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var o=e[n],i=o.callback;if(i!==null){if(o.callback=null,o=t,typeof i!="function")throw Error(E(191,i));i.call(o)}}}var ho={},Be=Sn(ho),Zt=Sn(ho),eo=Sn(ho);function On(e){if(e===ho)throw Error(E(174));return e}function Wr(e,n){switch(L(eo,n),L(Zt,e),L(Be,ho),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ts(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ts(n,e)}j(Be),L(Be,n)}function ht(){j(Be),j(Zt),j(eo)}function Hc(e){On(eo.current);var n=On(Be.current),t=Ts(n,e.type);n!==t&&(L(Zt,e),L(Be,t))}function Dr(e){Zt.current===e&&(j(Be),j(Zt))}var H=Sn(0);function li(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ns=[];function Lr(){for(var e=0;e<ns.length;e++)ns[e]._workInProgressVersionPrimary=null;ns.length=0}var Uo=en.ReactCurrentDispatcher,ts=en.ReactCurrentBatchConfig,qn=0,_=null,Q=null,J=null,ci=!1,jt=!1,no=0,zh=0;function oe(){throw Error(E(321))}function qr(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Le(e[t],n[t]))return!1;return!0}function jr(e,n,t,o,i,s){if(qn=s,_=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Uo.current=e===null||e.memoizedState===null?$h:Qh,e=t(o,i),jt){s=0;do{if(jt=!1,no=0,25<=s)throw Error(E(301));s+=1,J=Q=null,n.updateQueue=null,Uo.current=Kh,e=t(o,i)}while(jt)}if(Uo.current=ui,n=Q!==null&&Q.next!==null,qn=0,J=Q=_=null,ci=!1,n)throw Error(E(300));return e}function Fr(){var e=no!==0;return no=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?_.memoizedState=J=e:J=J.next=e,J}function Ne(){if(Q===null){var e=_.alternate;e=e!==null?e.memoizedState:null}else e=Q.next;var n=J===null?_.memoizedState:J.next;if(n!==null)J=n,Q=e;else{if(e===null)throw Error(E(310));Q=e,e={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},J===null?_.memoizedState=J=e:J=J.next=e}return J}function to(e,n){return typeof n=="function"?n(e):n}function os(e){var n=Ne(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var o=Q,i=o.baseQueue,s=t.pending;if(s!==null){if(i!==null){var r=i.next;i.next=s.next,s.next=r}o.baseQueue=i=s,t.pending=null}if(i!==null){s=i.next,o=o.baseState;var a=r=null,l=null,c=s;do{var f=c.lane;if((qn&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),o=c.hasEagerState?c.eagerState:e(o,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,r=o):l=l.next=h,_.lanes|=f,jn|=f}c=c.next}while(c!==null&&c!==s);l===null?r=o:l.next=a,Le(o,n.memoizedState)||(pe=!0),n.memoizedState=o,n.baseState=r,n.baseQueue=l,t.lastRenderedState=o}if(e=t.interleaved,e!==null){i=e;do s=i.lane,_.lanes|=s,jn|=s,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function is(e){var n=Ne(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var o=t.dispatch,i=t.pending,s=n.memoizedState;if(i!==null){t.pending=null;var r=i=i.next;do s=e(s,r.action),r=r.next;while(r!==i);Le(s,n.memoizedState)||(pe=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,o]}function _c(){}function Bc(e,n){var t=_,o=Ne(),i=n(),s=!Le(o.memoizedState,i);if(s&&(o.memoizedState=i,pe=!0),o=o.queue,Ur(Yc.bind(null,t,o,e),[e]),o.getSnapshot!==n||s||J!==null&&J.memoizedState.tag&1){if(t.flags|=2048,oo(9,Gc.bind(null,t,o,i,n),void 0,null),Z===null)throw Error(E(349));qn&30||zc(t,n,i)}return i}function zc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=_.updateQueue,n===null?(n={lastEffect:null,stores:null},_.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Gc(e,n,t,o){n.value=t,n.getSnapshot=o,Vc(n)&&$c(e)}function Yc(e,n,t){return t(function(){Vc(n)&&$c(e)})}function Vc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Le(e,t)}catch{return!0}}function $c(e){var n=Je(e,1);n!==null&&De(n,e,1,-1)}function Ya(e){var n=Fe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:to,lastRenderedState:e},n.queue=e,e=e.dispatch=Vh.bind(null,_,e),[n.memoizedState,e]}function oo(e,n,t,o){return e={tag:e,create:n,destroy:t,deps:o,next:null},n=_.updateQueue,n===null?(n={lastEffect:null,stores:null},_.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,n.lastEffect=e)),e}function Qc(){return Ne().memoizedState}function Ho(e,n,t,o){var i=Fe();_.flags|=e,i.memoizedState=oo(1|n,t,void 0,o===void 0?null:o)}function xi(e,n,t,o){var i=Ne();o=o===void 0?null:o;var s=void 0;if(Q!==null){var r=Q.memoizedState;if(s=r.destroy,o!==null&&qr(o,r.deps)){i.memoizedState=oo(n,t,s,o);return}}_.flags|=e,i.memoizedState=oo(1|n,t,s,o)}function Va(e,n){return Ho(8390656,8,e,n)}function Ur(e,n){return xi(2048,8,e,n)}function Kc(e,n){return xi(4,2,e,n)}function Xc(e,n){return xi(4,4,e,n)}function Jc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Zc(e,n,t){return t=t!=null?t.concat([e]):null,xi(4,4,Jc.bind(null,n,e),t)}function Hr(){}function eu(e,n){var t=Ne();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&qr(n,o[1])?o[0]:(t.memoizedState=[e,n],e)}function nu(e,n){var t=Ne();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&qr(n,o[1])?o[0]:(e=e(),t.memoizedState=[e,n],e)}function tu(e,n,t){return qn&21?(Le(t,n)||(t=ac(),_.lanes|=t,jn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=t)}function Gh(e,n){var t=D;D=t!==0&&4>t?t:4,e(!0);var o=ts.transition;ts.transition={};try{e(!1),n()}finally{D=t,ts.transition=o}}function ou(){return Ne().memoizedState}function Yh(e,n,t){var o=yn(e);if(t={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null},iu(e))su(n,t);else if(t=Fc(e,n,t,o),t!==null){var i=le();De(t,e,o,i),ru(t,n,o)}}function Vh(e,n,t){var o=yn(e),i={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null};if(iu(e))su(n,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var r=n.lastRenderedState,a=s(r,t);if(i.hasEagerState=!0,i.eagerState=a,Le(a,r)){var l=n.interleaved;l===null?(i.next=i,Or(n)):(i.next=l.next,l.next=i),n.interleaved=i;return}}catch{}finally{}t=Fc(e,n,i,o),t!==null&&(i=le(),De(t,e,o,i),ru(t,n,o))}}function iu(e){var n=e.alternate;return e===_||n!==null&&n===_}function su(e,n){jt=ci=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ru(e,n,t){if(t&4194240){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,wr(e,t)}}var ui={readContext:Ce,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},$h={readContext:Ce,useCallback:function(e,n){return Fe().memoizedState=[e,n===void 0?null:n],e},useContext:Ce,useEffect:Va,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ho(4194308,4,Jc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ho(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ho(4,2,e,n)},useMemo:function(e,n){var t=Fe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var o=Fe();return n=t!==void 0?t(n):n,o.memoizedState=o.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=Yh.bind(null,_,e),[o.memoizedState,e]},useRef:function(e){var n=Fe();return e={current:e},n.memoizedState=e},useState:Ya,useDebugValue:Hr,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=Ya(!1),n=e[0];return e=Gh.bind(null,e[1]),Fe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var o=_,i=Fe();if(F){if(t===void 0)throw Error(E(407));t=t()}else{if(t=n(),Z===null)throw Error(E(349));qn&30||zc(o,n,t)}i.memoizedState=t;var s={value:t,getSnapshot:n};return i.queue=s,Va(Yc.bind(null,o,s,e),[e]),o.flags|=2048,oo(9,Gc.bind(null,o,s,t,n),void 0,null),t},useId:function(){var e=Fe(),n=Z.identifierPrefix;if(F){var t=$e,o=Ve;t=(o&~(1<<32-We(o)-1)).toString(32)+t,n=":"+n+"R"+t,t=no++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=zh++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Qh={readContext:Ce,useCallback:eu,useContext:Ce,useEffect:Ur,useImperativeHandle:Zc,useInsertionEffect:Kc,useLayoutEffect:Xc,useMemo:nu,useReducer:os,useRef:Qc,useState:function(){return os(to)},useDebugValue:Hr,useDeferredValue:function(e){var n=Ne();return tu(n,Q.memoizedState,e)},useTransition:function(){var e=os(to)[0],n=Ne().memoizedState;return[e,n]},useMutableSource:_c,useSyncExternalStore:Bc,useId:ou,unstable_isNewReconciler:!1},Kh={readContext:Ce,useCallback:eu,useContext:Ce,useEffect:Ur,useImperativeHandle:Zc,useInsertionEffect:Kc,useLayoutEffect:Xc,useMemo:nu,useReducer:is,useRef:Qc,useState:function(){return is(to)},useDebugValue:Hr,useDeferredValue:function(e){var n=Ne();return Q===null?n.memoizedState=e:tu(n,Q.memoizedState,e)},useTransition:function(){var e=is(to)[0],n=Ne().memoizedState;return[e,n]},useMutableSource:_c,useSyncExternalStore:Bc,useId:ou,unstable_isNewReconciler:!1};function Pe(e,n){if(e&&e.defaultProps){n=B({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Hs(e,n,t,o){n=e.memoizedState,t=t(o,n),t=t==null?n:B({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ki={isMounted:function(e){return(e=e._reactInternals)?Hn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var o=le(),i=yn(e),s=Qe(o,i);s.payload=n,t!=null&&(s.callback=t),n=fn(e,s,i),n!==null&&(De(n,e,i,o),Fo(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var o=le(),i=yn(e),s=Qe(o,i);s.tag=1,s.payload=n,t!=null&&(s.callback=t),n=fn(e,s,i),n!==null&&(De(n,e,i,o),Fo(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=le(),o=yn(e),i=Qe(t,o);i.tag=2,n!=null&&(i.callback=n),n=fn(e,i,o),n!==null&&(De(n,e,o,t),Fo(n,e,o))}};function $a(e,n,t,o,i,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,r):n.prototype&&n.prototype.isPureReactComponent?!Qt(t,o)||!Qt(i,s):!0}function au(e,n,t){var o=!1,i=bn,s=n.contextType;return typeof s=="object"&&s!==null?s=Ce(s):(i=fe(n)?Dn:re.current,o=n.contextTypes,s=(o=o!=null)?ct(e,i):bn),n=new n(t,s),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ki,e.stateNode=n,n._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),n}function Qa(e,n,t,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,o),n.state!==e&&ki.enqueueReplaceState(n,n.state,null)}function _s(e,n,t,o){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Mr(e);var s=n.contextType;typeof s=="object"&&s!==null?i.context=Ce(s):(s=fe(n)?Dn:re.current,i.context=ct(e,s)),i.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Hs(e,n,s,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&ki.enqueueReplaceState(i,i.state,null),ai(e,t,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function pt(e,n){try{var t="",o=n;do t+=xd(o),o=o.return;while(o);var i=t}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:n,stack:i,digest:null}}function ss(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Bs(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Xh=typeof WeakMap=="function"?WeakMap:Map;function lu(e,n,t){t=Qe(-1,t),t.tag=3,t.payload={element:null};var o=n.value;return t.callback=function(){hi||(hi=!0,Zs=o),Bs(e,n)},t}function cu(e,n,t){t=Qe(-1,t),t.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=n.value;t.payload=function(){return o(i)},t.callback=function(){Bs(e,n)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Bs(e,n),typeof o!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var r=n.stack;this.componentDidCatch(n.value,{componentStack:r!==null?r:""})}),t}function Ka(e,n,t){var o=e.pingCache;if(o===null){o=e.pingCache=new Xh;var i=new Set;o.set(n,i)}else i=o.get(n),i===void 0&&(i=new Set,o.set(n,i));i.has(t)||(i.add(t),e=dp.bind(null,e,n,t),n.then(e,e))}function Xa(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ja(e,n,t,o,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Qe(-1,1),n.tag=2,fn(t,n,1))),t.lanes|=1),e)}var Jh=en.ReactCurrentOwner,pe=!1;function ae(e,n,t,o){n.child=e===null?jc(n,null,t,o):dt(n,e.child,t,o)}function Za(e,n,t,o,i){t=t.render;var s=n.ref;return rt(n,i),o=jr(e,n,t,o,s,i),t=Fr(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Ze(e,n,i)):(F&&t&&Ir(n),n.flags|=1,ae(e,n,o,i),n.child)}function el(e,n,t,o,i){if(e===null){var s=t.type;return typeof s=="function"&&!Qr(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=s,uu(e,n,s,o,i)):(e=Go(t.type,null,o,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,!(e.lanes&i)){var r=s.memoizedProps;if(t=t.compare,t=t!==null?t:Qt,t(r,o)&&e.ref===n.ref)return Ze(e,n,i)}return n.flags|=1,e=wn(s,o),e.ref=n.ref,e.return=n,n.child=e}function uu(e,n,t,o,i){if(e!==null){var s=e.memoizedProps;if(Qt(s,o)&&e.ref===n.ref)if(pe=!1,n.pendingProps=o=s,(e.lanes&i)!==0)e.flags&131072&&(pe=!0);else return n.lanes=e.lanes,Ze(e,n,i)}return zs(e,n,t,o,i)}function du(e,n,t){var o=n.pendingProps,i=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},L(nt,ye),ye|=t;else{if(!(t&1073741824))return e=s!==null?s.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,L(nt,ye),ye|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:t,L(nt,ye),ye|=o}else s!==null?(o=s.baseLanes|t,n.memoizedState=null):o=t,L(nt,ye),ye|=o;return ae(e,n,i,t),n.child}function hu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function zs(e,n,t,o,i){var s=fe(t)?Dn:re.current;return s=ct(n,s),rt(n,i),t=jr(e,n,t,o,s,i),o=Fr(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Ze(e,n,i)):(F&&o&&Ir(n),n.flags|=1,ae(e,n,t,i),n.child)}function nl(e,n,t,o,i){if(fe(t)){var s=!0;ti(n)}else s=!1;if(rt(n,i),n.stateNode===null)_o(e,n),au(n,t,o),_s(n,t,o,i),o=!0;else if(e===null){var r=n.stateNode,a=n.memoizedProps;r.props=a;var l=r.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ce(c):(c=fe(t)?Dn:re.current,c=ct(n,c));var f=t.getDerivedStateFromProps,h=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function";h||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(a!==o||l!==c)&&Qa(n,r,o,c),sn=!1;var g=n.memoizedState;r.state=g,ai(n,o,r,i),l=n.memoizedState,a!==o||g!==l||me.current||sn?(typeof f=="function"&&(Hs(n,t,f,o),l=n.memoizedState),(a=sn||$a(n,t,a,o,g,l,c))?(h||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(n.flags|=4194308)):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=l),r.props=o,r.state=l,r.context=c,o=a):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{r=n.stateNode,Uc(e,n),a=n.memoizedProps,c=n.type===n.elementType?a:Pe(n.type,a),r.props=c,h=n.pendingProps,g=r.context,l=t.contextType,typeof l=="object"&&l!==null?l=Ce(l):(l=fe(t)?Dn:re.current,l=ct(n,l));var w=t.getDerivedStateFromProps;(f=typeof w=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(a!==h||g!==l)&&Qa(n,r,o,l),sn=!1,g=n.memoizedState,r.state=g,ai(n,o,r,i);var b=n.memoizedState;a!==h||g!==b||me.current||sn?(typeof w=="function"&&(Hs(n,t,w,o),b=n.memoizedState),(c=sn||$a(n,t,c,o,g,b,l)||!1)?(f||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,b,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,b,l)),typeof r.componentDidUpdate=="function"&&(n.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof r.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=b),r.props=o,r.state=b,r.context=l,o=c):(typeof r.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),o=!1)}return Gs(e,n,t,o,s,i)}function Gs(e,n,t,o,i,s){hu(e,n);var r=(n.flags&128)!==0;if(!o&&!r)return i&&Ua(n,t,!1),Ze(e,n,s);o=n.stateNode,Jh.current=n;var a=r&&typeof t.getDerivedStateFromError!="function"?null:o.render();return n.flags|=1,e!==null&&r?(n.child=dt(n,e.child,null,s),n.child=dt(n,null,a,s)):ae(e,n,a,s),n.memoizedState=o.state,i&&Ua(n,t,!0),n.child}function pu(e){var n=e.stateNode;n.pendingContext?Fa(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Fa(e,n.context,!1),Wr(e,n.containerInfo)}function tl(e,n,t,o,i){return ut(),Cr(i),n.flags|=256,ae(e,n,t,o),n.child}var Ys={dehydrated:null,treeContext:null,retryLane:0};function Vs(e){return{baseLanes:e,cachePool:null,transitions:null}}function mu(e,n,t){var o=n.pendingProps,i=H.current,s=!1,r=(n.flags&128)!==0,a;if((a=r)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),L(H,i&1),e===null)return Fs(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(r=o.children,e=o.fallback,s?(o=n.mode,s=n.child,r={mode:"hidden",children:r},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=r):s=Ci(r,o,0,null),e=Wn(e,o,t,null),s.return=n,e.return=n,s.sibling=e,n.child=s,n.child.memoizedState=Vs(t),n.memoizedState=Ys,e):_r(n,r));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Zh(e,n,r,o,a,i,t);if(s){s=o.fallback,r=n.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:o.children};return!(r&1)&&n.child!==i?(o=n.child,o.childLanes=0,o.pendingProps=l,n.deletions=null):(o=wn(i,l),o.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=wn(a,s):(s=Wn(s,r,t,null),s.flags|=2),s.return=n,o.return=n,o.sibling=s,n.child=o,o=s,s=n.child,r=e.child.memoizedState,r=r===null?Vs(t):{baseLanes:r.baseLanes|t,cachePool:null,transitions:r.transitions},s.memoizedState=r,s.childLanes=e.childLanes&~t,n.memoizedState=Ys,o}return s=e.child,e=s.sibling,o=wn(s,{mode:"visible",children:o.children}),!(n.mode&1)&&(o.lanes=t),o.return=n,o.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=o,n.memoizedState=null,o}function _r(e,n){return n=Ci({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function No(e,n,t,o){return o!==null&&Cr(o),dt(n,e.child,null,t),e=_r(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Zh(e,n,t,o,i,s,r){if(t)return n.flags&256?(n.flags&=-257,o=ss(Error(E(422))),No(e,n,r,o)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(s=o.fallback,i=n.mode,o=Ci({mode:"visible",children:o.children},i,0,null),s=Wn(s,i,r,null),s.flags|=2,o.return=n,s.return=n,o.sibling=s,n.child=o,n.mode&1&&dt(n,e.child,null,r),n.child.memoizedState=Vs(r),n.memoizedState=Ys,s);if(!(n.mode&1))return No(e,n,r,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var a=o.dgst;return o=a,s=Error(E(419)),o=ss(s,o,void 0),No(e,n,r,o)}if(a=(r&e.childLanes)!==0,pe||a){if(o=Z,o!==null){switch(r&-r){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(o.suspendedLanes|r)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Je(e,i),De(o,e,i,-1))}return $r(),o=ss(Error(E(421))),No(e,n,r,o)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=hp.bind(null,e),i._reactRetry=n,null):(e=s.treeContext,we=mn(i.nextSibling),ve=n,F=!0,Me=null,e!==null&&(xe[ke++]=Ve,xe[ke++]=$e,xe[ke++]=Ln,Ve=e.id,$e=e.overflow,Ln=n),n=_r(n,o.children),n.flags|=4096,n)}function ol(e,n,t){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Us(e.return,n,t)}function rs(e,n,t,o,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:i}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=t,s.tailMode=i)}function fu(e,n,t){var o=n.pendingProps,i=o.revealOrder,s=o.tail;if(ae(e,n,o.children,t),o=H.current,o&2)o=o&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ol(e,t,n);else if(e.tag===19)ol(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(L(H,o),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&li(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),rs(n,!1,i,t,s);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&li(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}rs(n,!0,t,null,s);break;case"together":rs(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function _o(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ze(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),jn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(E(153));if(n.child!==null){for(e=n.child,t=wn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=wn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function ep(e,n,t){switch(n.tag){case 3:pu(n),ut();break;case 5:Hc(n);break;case 1:fe(n.type)&&ti(n);break;case 4:Wr(n,n.stateNode.containerInfo);break;case 10:var o=n.type._context,i=n.memoizedProps.value;L(si,o._currentValue),o._currentValue=i;break;case 13:if(o=n.memoizedState,o!==null)return o.dehydrated!==null?(L(H,H.current&1),n.flags|=128,null):t&n.child.childLanes?mu(e,n,t):(L(H,H.current&1),e=Ze(e,n,t),e!==null?e.sibling:null);L(H,H.current&1);break;case 19:if(o=(t&n.childLanes)!==0,e.flags&128){if(o)return fu(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),L(H,H.current),o)break;return null;case 22:case 23:return n.lanes=0,du(e,n,t)}return Ze(e,n,t)}var gu,$s,yu,wu;gu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};$s=function(){};yu=function(e,n,t,o){var i=e.memoizedProps;if(i!==o){e=n.stateNode,On(Be.current);var s=null;switch(t){case"input":i=gs(e,i),o=gs(e,o),s=[];break;case"select":i=B({},i,{value:void 0}),o=B({},o,{value:void 0}),s=[];break;case"textarea":i=vs(e,i),o=vs(e,o),s=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=ei)}bs(t,o);var r;t=null;for(c in i)if(!o.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(r in a)a.hasOwnProperty(r)&&(t||(t={}),t[r]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_t.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in o){var l=o[c];if(a=i!=null?i[c]:void 0,o.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(r in a)!a.hasOwnProperty(r)||l&&l.hasOwnProperty(r)||(t||(t={}),t[r]="");for(r in l)l.hasOwnProperty(r)&&a[r]!==l[r]&&(t||(t={}),t[r]=l[r])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_t.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&q("scroll",e),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(n.updateQueue=c)&&(n.flags|=4)}};wu=function(e,n,t,o){t!==o&&(n.flags|=4)};function It(e,n){if(!F)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,o=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=t,n}function np(e,n,t){var o=n.pendingProps;switch(Ar(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(n),null;case 1:return fe(n.type)&&ni(),ie(n),null;case 3:return o=n.stateNode,ht(),j(me),j(re),Lr(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Ao(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Me!==null&&(tr(Me),Me=null))),$s(e,n),ie(n),null;case 5:Dr(n);var i=On(eo.current);if(t=n.type,e!==null&&n.stateNode!=null)yu(e,n,t,o,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!o){if(n.stateNode===null)throw Error(E(166));return ie(n),null}if(e=On(Be.current),Ao(n)){o=n.stateNode,t=n.type;var s=n.memoizedProps;switch(o[Ue]=n,o[Jt]=s,e=(n.mode&1)!==0,t){case"dialog":q("cancel",o),q("close",o);break;case"iframe":case"object":case"embed":q("load",o);break;case"video":case"audio":for(i=0;i<Pt.length;i++)q(Pt[i],o);break;case"source":q("error",o);break;case"img":case"image":case"link":q("error",o),q("load",o);break;case"details":q("toggle",o);break;case"input":ha(o,s),q("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},q("invalid",o);break;case"textarea":ma(o,s),q("invalid",o)}bs(t,s),i=null;for(var r in s)if(s.hasOwnProperty(r)){var a=s[r];r==="children"?typeof a=="string"?o.textContent!==a&&(s.suppressHydrationWarning!==!0&&Io(o.textContent,a,e),i=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Io(o.textContent,a,e),i=["children",""+a]):_t.hasOwnProperty(r)&&a!=null&&r==="onScroll"&&q("scroll",o)}switch(t){case"input":wo(o),pa(o,s,!0);break;case"textarea":wo(o),fa(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=ei)}o=i,n.updateQueue=o,o!==null&&(n.flags|=4)}else{r=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Yl(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=r.createElement(t,{is:o.is}):(e=r.createElement(t),t==="select"&&(r=e,o.multiple?r.multiple=!0:o.size&&(r.size=o.size))):e=r.createElementNS(e,t),e[Ue]=n,e[Jt]=o,gu(e,n,!1,!1),n.stateNode=e;e:{switch(r=Es(t,o),t){case"dialog":q("cancel",e),q("close",e),i=o;break;case"iframe":case"object":case"embed":q("load",e),i=o;break;case"video":case"audio":for(i=0;i<Pt.length;i++)q(Pt[i],e);i=o;break;case"source":q("error",e),i=o;break;case"img":case"image":case"link":q("error",e),q("load",e),i=o;break;case"details":q("toggle",e),i=o;break;case"input":ha(e,o),i=gs(e,o),q("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=B({},o,{value:void 0}),q("invalid",e);break;case"textarea":ma(e,o),i=vs(e,o),q("invalid",e);break;default:i=o}bs(t,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ql(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vl(e,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Bt(e,l):typeof l=="number"&&Bt(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_t.hasOwnProperty(s)?l!=null&&s==="onScroll"&&q("scroll",e):l!=null&&hr(e,s,l,r))}switch(t){case"input":wo(e),pa(e,o,!1);break;case"textarea":wo(e),fa(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Tn(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?tt(e,!!o.multiple,s,!1):o.defaultValue!=null&&tt(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ei)}switch(t){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ie(n),null;case 6:if(e&&n.stateNode!=null)wu(e,n,e.memoizedProps,o);else{if(typeof o!="string"&&n.stateNode===null)throw Error(E(166));if(t=On(eo.current),On(Be.current),Ao(n)){if(o=n.stateNode,t=n.memoizedProps,o[Ue]=n,(s=o.nodeValue!==t)&&(e=ve,e!==null))switch(e.tag){case 3:Io(o.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Io(o.nodeValue,t,(e.mode&1)!==0)}s&&(n.flags|=4)}else o=(t.nodeType===9?t:t.ownerDocument).createTextNode(o),o[Ue]=n,n.stateNode=o}return ie(n),null;case 13:if(j(H),o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&we!==null&&n.mode&1&&!(n.flags&128))Lc(),ut(),n.flags|=98560,s=!1;else if(s=Ao(n),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(E(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[Ue]=n}else ut(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ie(n),s=!1}else Me!==null&&(tr(Me),Me=null),s=!0;if(!s)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(n.child.flags|=8192,n.mode&1&&(e===null||H.current&1?K===0&&(K=3):$r())),n.updateQueue!==null&&(n.flags|=4),ie(n),null);case 4:return ht(),$s(e,n),e===null&&Kt(n.stateNode.containerInfo),ie(n),null;case 10:return Pr(n.type._context),ie(n),null;case 17:return fe(n.type)&&ni(),ie(n),null;case 19:if(j(H),s=n.memoizedState,s===null)return ie(n),null;if(o=(n.flags&128)!==0,r=s.rendering,r===null)if(o)It(s,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(r=li(e),r!==null){for(n.flags|=128,It(s,!1),o=r.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),n.subtreeFlags=0,o=t,t=n.child;t!==null;)s=t,e=o,s.flags&=14680066,r=s.alternate,r===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=r.childLanes,s.lanes=r.lanes,s.child=r.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=r.memoizedProps,s.memoizedState=r.memoizedState,s.updateQueue=r.updateQueue,s.type=r.type,e=r.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return L(H,H.current&1|2),n.child}e=e.sibling}s.tail!==null&&Y()>mt&&(n.flags|=128,o=!0,It(s,!1),n.lanes=4194304)}else{if(!o)if(e=li(r),e!==null){if(n.flags|=128,o=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),It(s,!0),s.tail===null&&s.tailMode==="hidden"&&!r.alternate&&!F)return ie(n),null}else 2*Y()-s.renderingStartTime>mt&&t!==1073741824&&(n.flags|=128,o=!0,It(s,!1),n.lanes=4194304);s.isBackwards?(r.sibling=n.child,n.child=r):(t=s.last,t!==null?t.sibling=r:n.child=r,s.last=r)}return s.tail!==null?(n=s.tail,s.rendering=n,s.tail=n.sibling,s.renderingStartTime=Y(),n.sibling=null,t=H.current,L(H,o?t&1|2:t&1),n):(ie(n),null);case 22:case 23:return Vr(),o=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(n.flags|=8192),o&&n.mode&1?ye&1073741824&&(ie(n),n.subtreeFlags&6&&(n.flags|=8192)):ie(n),null;case 24:return null;case 25:return null}throw Error(E(156,n.tag))}function tp(e,n){switch(Ar(n),n.tag){case 1:return fe(n.type)&&ni(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ht(),j(me),j(re),Lr(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Dr(n),null;case 13:if(j(H),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(E(340));ut()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return j(H),null;case 4:return ht(),null;case 10:return Pr(n.type._context),null;case 22:case 23:return Vr(),null;case 24:return null;default:return null}}var Ro=!1,se=!1,op=typeof WeakSet=="function"?WeakSet:Set,I=null;function et(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(o){z(e,n,o)}else t.current=null}function Qs(e,n,t){try{t()}catch(o){z(e,n,o)}}var il=!1;function ip(e,n){if(Os=Xo,e=Sc(),kr(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var i=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var r=0,a=-1,l=-1,c=0,f=0,h=e,g=null;n:for(;;){for(var w;h!==t||i!==0&&h.nodeType!==3||(a=r+i),h!==s||o!==0&&h.nodeType!==3||(l=r+o),h.nodeType===3&&(r+=h.nodeValue.length),(w=h.firstChild)!==null;)g=h,h=w;for(;;){if(h===e)break n;if(g===t&&++c===i&&(a=r),g===s&&++f===o&&(l=r),(w=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=w}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ms={focusedElem:e,selectionRange:t},Xo=!1,I=n;I!==null;)if(n=I,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,I=e;else for(;I!==null;){n=I;try{var b=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var T=b.memoizedProps,x=b.memoizedState,d=n.stateNode,u=d.getSnapshotBeforeUpdate(n.elementType===n.type?T:Pe(n.type,T),x);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(y){z(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,I=e;break}I=n.return}return b=il,il=!1,b}function Ft(e,n,t){var o=n.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Qs(n,t,s)}i=i.next}while(i!==o)}}function Ii(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var o=t.create;t.destroy=o()}t=t.next}while(t!==n)}}function Ks(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function vu(e){var n=e.alternate;n!==null&&(e.alternate=null,vu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ue],delete n[Jt],delete n[Ls],delete n[Uh],delete n[Hh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tu(e){return e.tag===5||e.tag===3||e.tag===4}function sl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xs(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ei));else if(o!==4&&(e=e.child,e!==null))for(Xs(e,n,t),e=e.sibling;e!==null;)Xs(e,n,t),e=e.sibling}function Js(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Js(e,n,t),e=e.sibling;e!==null;)Js(e,n,t),e=e.sibling}var ee=null,Oe=!1;function tn(e,n,t){for(t=t.child;t!==null;)bu(e,n,t),t=t.sibling}function bu(e,n,t){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(wi,t)}catch{}switch(t.tag){case 5:se||et(t,n);case 6:var o=ee,i=Oe;ee=null,tn(e,n,t),ee=o,Oe=i,ee!==null&&(Oe?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(Oe?(e=ee,t=t.stateNode,e.nodeType===8?Zi(e.parentNode,t):e.nodeType===1&&Zi(e,t),Vt(e)):Zi(ee,t.stateNode));break;case 4:o=ee,i=Oe,ee=t.stateNode.containerInfo,Oe=!0,tn(e,n,t),ee=o,Oe=i;break;case 0:case 11:case 14:case 15:if(!se&&(o=t.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var s=i,r=s.destroy;s=s.tag,r!==void 0&&(s&2||s&4)&&Qs(t,n,r),i=i.next}while(i!==o)}tn(e,n,t);break;case 1:if(!se&&(et(t,n),o=t.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=t.memoizedProps,o.state=t.memoizedState,o.componentWillUnmount()}catch(a){z(t,n,a)}tn(e,n,t);break;case 21:tn(e,n,t);break;case 22:t.mode&1?(se=(o=se)||t.memoizedState!==null,tn(e,n,t),se=o):tn(e,n,t);break;default:tn(e,n,t)}}function rl(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new op),n.forEach(function(o){var i=pp.bind(null,e,o);t.has(o)||(t.add(o),o.then(i,i))})}}function Re(e,n){var t=n.deletions;if(t!==null)for(var o=0;o<t.length;o++){var i=t[o];try{var s=e,r=n,a=r;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,Oe=!1;break e;case 3:ee=a.stateNode.containerInfo,Oe=!0;break e;case 4:ee=a.stateNode.containerInfo,Oe=!0;break e}a=a.return}if(ee===null)throw Error(E(160));bu(s,r,i),ee=null,Oe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){z(i,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Eu(n,e),n=n.sibling}function Eu(e,n){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(n,e),je(e),o&4){try{Ft(3,e,e.return),Ii(3,e)}catch(T){z(e,e.return,T)}try{Ft(5,e,e.return)}catch(T){z(e,e.return,T)}}break;case 1:Re(n,e),je(e),o&512&&t!==null&&et(t,t.return);break;case 5:if(Re(n,e),je(e),o&512&&t!==null&&et(t,t.return),e.flags&32){var i=e.stateNode;try{Bt(i,"")}catch(T){z(e,e.return,T)}}if(o&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,r=t!==null?t.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&zl(i,s),Es(a,r);var c=Es(a,s);for(r=0;r<l.length;r+=2){var f=l[r],h=l[r+1];f==="style"?Ql(i,h):f==="dangerouslySetInnerHTML"?Vl(i,h):f==="children"?Bt(i,h):hr(i,f,h,c)}switch(a){case"input":ys(i,s);break;case"textarea":Gl(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?tt(i,!!s.multiple,w,!1):g!==!!s.multiple&&(s.defaultValue!=null?tt(i,!!s.multiple,s.defaultValue,!0):tt(i,!!s.multiple,s.multiple?[]:"",!1))}i[Jt]=s}catch(T){z(e,e.return,T)}}break;case 6:if(Re(n,e),je(e),o&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(T){z(e,e.return,T)}}break;case 3:if(Re(n,e),je(e),o&4&&t!==null&&t.memoizedState.isDehydrated)try{Vt(n.containerInfo)}catch(T){z(e,e.return,T)}break;case 4:Re(n,e),je(e);break;case 13:Re(n,e),je(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Gr=Y())),o&4&&rl(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(se=(c=se)||f,Re(n,e),se=c):Re(n,e),je(e),o&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(I=e,f=e.child;f!==null;){for(h=I=f;I!==null;){switch(g=I,w=g.child,g.tag){case 0:case 11:case 14:case 15:Ft(4,g,g.return);break;case 1:et(g,g.return);var b=g.stateNode;if(typeof b.componentWillUnmount=="function"){o=g,t=g.return;try{n=o,b.props=n.memoizedProps,b.state=n.memoizedState,b.componentWillUnmount()}catch(T){z(o,t,T)}}break;case 5:et(g,g.return);break;case 22:if(g.memoizedState!==null){ll(h);continue}}w!==null?(w.return=g,I=w):ll(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,r=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=$l("display",r))}catch(T){z(e,e.return,T)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(T){z(e,e.return,T)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Re(n,e),je(e),o&4&&rl(e);break;case 21:break;default:Re(n,e),je(e)}}function je(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Tu(t)){var o=t;break e}t=t.return}throw Error(E(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(Bt(i,""),o.flags&=-33);var s=sl(e);Js(e,s,i);break;case 3:case 4:var r=o.stateNode.containerInfo,a=sl(e);Xs(e,a,r);break;default:throw Error(E(161))}}catch(l){z(e,e.return,l)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function sp(e,n,t){I=e,Su(e)}function Su(e,n,t){for(var o=(e.mode&1)!==0;I!==null;){var i=I,s=i.child;if(i.tag===22&&o){var r=i.memoizedState!==null||Ro;if(!r){var a=i.alternate,l=a!==null&&a.memoizedState!==null||se;a=Ro;var c=se;if(Ro=r,(se=l)&&!c)for(I=i;I!==null;)r=I,l=r.child,r.tag===22&&r.memoizedState!==null?cl(i):l!==null?(l.return=r,I=l):cl(i);for(;s!==null;)I=s,Su(s),s=s.sibling;I=i,Ro=a,se=c}al(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,I=s):al(e)}}function al(e){for(;I!==null;){var n=I;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:se||Ii(5,n);break;case 1:var o=n.stateNode;if(n.flags&4&&!se)if(t===null)o.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Pe(n.type,t.memoizedProps);o.componentDidUpdate(i,t.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=n.updateQueue;s!==null&&Ga(n,s,o);break;case 3:var r=n.updateQueue;if(r!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ga(n,r,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Vt(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}se||n.flags&512&&Ks(n)}catch(g){z(n,n.return,g)}}if(n===e){I=null;break}if(t=n.sibling,t!==null){t.return=n.return,I=t;break}I=n.return}}function ll(e){for(;I!==null;){var n=I;if(n===e){I=null;break}var t=n.sibling;if(t!==null){t.return=n.return,I=t;break}I=n.return}}function cl(e){for(;I!==null;){var n=I;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ii(4,n)}catch(l){z(n,t,l)}break;case 1:var o=n.stateNode;if(typeof o.componentDidMount=="function"){var i=n.return;try{o.componentDidMount()}catch(l){z(n,i,l)}}var s=n.return;try{Ks(n)}catch(l){z(n,s,l)}break;case 5:var r=n.return;try{Ks(n)}catch(l){z(n,r,l)}}}catch(l){z(n,n.return,l)}if(n===e){I=null;break}var a=n.sibling;if(a!==null){a.return=n.return,I=a;break}I=n.return}}var rp=Math.ceil,di=en.ReactCurrentDispatcher,Br=en.ReactCurrentOwner,Ae=en.ReactCurrentBatchConfig,W=0,Z=null,$=null,ne=0,ye=0,nt=Sn(0),K=0,io=null,jn=0,Ai=0,zr=0,Ut=null,he=null,Gr=0,mt=1/0,Ge=null,hi=!1,Zs=null,gn=null,Po=!1,cn=null,pi=0,Ht=0,er=null,Bo=-1,zo=0;function le(){return W&6?Y():Bo!==-1?Bo:Bo=Y()}function yn(e){return e.mode&1?W&2&&ne!==0?ne&-ne:Bh.transition!==null?(zo===0&&(zo=ac()),zo):(e=D,e!==0||(e=window.event,e=e===void 0?16:mc(e.type)),e):1}function De(e,n,t,o){if(50<Ht)throw Ht=0,er=null,Error(E(185));lo(e,t,o),(!(W&2)||e!==Z)&&(e===Z&&(!(W&2)&&(Ai|=t),K===4&&an(e,ne)),ge(e,o),t===1&&W===0&&!(n.mode&1)&&(mt=Y()+500,Si&&xn()))}function ge(e,n){var t=e.callbackNode;Bd(e,n);var o=Ko(e,e===Z?ne:0);if(o===0)t!==null&&wa(t),e.callbackNode=null,e.callbackPriority=0;else if(n=o&-o,e.callbackPriority!==n){if(t!=null&&wa(t),n===1)e.tag===0?_h(ul.bind(null,e)):Mc(ul.bind(null,e)),jh(function(){!(W&6)&&xn()}),t=null;else{switch(lc(o)){case 1:t=yr;break;case 4:t=sc;break;case 16:t=Qo;break;case 536870912:t=rc;break;default:t=Qo}t=Pu(t,xu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function xu(e,n){if(Bo=-1,zo=0,W&6)throw Error(E(327));var t=e.callbackNode;if(at()&&e.callbackNode!==t)return null;var o=Ko(e,e===Z?ne:0);if(o===0)return null;if(o&30||o&e.expiredLanes||n)n=mi(e,o);else{n=o;var i=W;W|=2;var s=Iu();(Z!==e||ne!==n)&&(Ge=null,mt=Y()+500,Mn(e,n));do try{cp();break}catch(a){ku(e,a)}while(!0);Rr(),di.current=s,W=i,$!==null?n=0:(Z=null,ne=0,n=K)}if(n!==0){if(n===2&&(i=As(e),i!==0&&(o=i,n=nr(e,i))),n===1)throw t=io,Mn(e,0),an(e,o),ge(e,Y()),t;if(n===6)an(e,o);else{if(i=e.current.alternate,!(o&30)&&!ap(i)&&(n=mi(e,o),n===2&&(s=As(e),s!==0&&(o=s,n=nr(e,s))),n===1))throw t=io,Mn(e,0),an(e,o),ge(e,Y()),t;switch(e.finishedWork=i,e.finishedLanes=o,n){case 0:case 1:throw Error(E(345));case 2:Nn(e,he,Ge);break;case 3:if(an(e,o),(o&130023424)===o&&(n=Gr+500-Y(),10<n)){if(Ko(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){le(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ds(Nn.bind(null,e,he,Ge),n);break}Nn(e,he,Ge);break;case 4:if(an(e,o),(o&4194240)===o)break;for(n=e.eventTimes,i=-1;0<o;){var r=31-We(o);s=1<<r,r=n[r],r>i&&(i=r),o&=~s}if(o=i,o=Y()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*rp(o/1960))-o,10<o){e.timeoutHandle=Ds(Nn.bind(null,e,he,Ge),o);break}Nn(e,he,Ge);break;case 5:Nn(e,he,Ge);break;default:throw Error(E(329))}}}return ge(e,Y()),e.callbackNode===t?xu.bind(null,e):null}function nr(e,n){var t=Ut;return e.current.memoizedState.isDehydrated&&(Mn(e,n).flags|=256),e=mi(e,n),e!==2&&(n=he,he=t,n!==null&&tr(n)),e}function tr(e){he===null?he=e:he.push.apply(he,e)}function ap(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var o=0;o<t.length;o++){var i=t[o],s=i.getSnapshot;i=i.value;try{if(!Le(s(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function an(e,n){for(n&=~zr,n&=~Ai,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-We(n),o=1<<t;e[t]=-1,n&=~o}}function ul(e){if(W&6)throw Error(E(327));at();var n=Ko(e,0);if(!(n&1))return ge(e,Y()),null;var t=mi(e,n);if(e.tag!==0&&t===2){var o=As(e);o!==0&&(n=o,t=nr(e,o))}if(t===1)throw t=io,Mn(e,0),an(e,n),ge(e,Y()),t;if(t===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Nn(e,he,Ge),ge(e,Y()),null}function Yr(e,n){var t=W;W|=1;try{return e(n)}finally{W=t,W===0&&(mt=Y()+500,Si&&xn())}}function Fn(e){cn!==null&&cn.tag===0&&!(W&6)&&at();var n=W;W|=1;var t=Ae.transition,o=D;try{if(Ae.transition=null,D=1,e)return e()}finally{D=o,Ae.transition=t,W=n,!(W&6)&&xn()}}function Vr(){ye=nt.current,j(nt)}function Mn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,qh(t)),$!==null)for(t=$.return;t!==null;){var o=t;switch(Ar(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&ni();break;case 3:ht(),j(me),j(re),Lr();break;case 5:Dr(o);break;case 4:ht();break;case 13:j(H);break;case 19:j(H);break;case 10:Pr(o.type._context);break;case 22:case 23:Vr()}t=t.return}if(Z=e,$=e=wn(e.current,null),ne=ye=n,K=0,io=null,zr=Ai=jn=0,he=Ut=null,Pn!==null){for(n=0;n<Pn.length;n++)if(t=Pn[n],o=t.interleaved,o!==null){t.interleaved=null;var i=o.next,s=t.pending;if(s!==null){var r=s.next;s.next=i,o.next=r}t.pending=o}Pn=null}return e}function ku(e,n){do{var t=$;try{if(Rr(),Uo.current=ui,ci){for(var o=_.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}ci=!1}if(qn=0,J=Q=_=null,jt=!1,no=0,Br.current=null,t===null||t.return===null){K=1,io=n,$=null;break}e:{var s=e,r=t.return,a=t,l=n;if(n=ne,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=Xa(r);if(w!==null){w.flags&=-257,Ja(w,r,a,s,n),w.mode&1&&Ka(s,c,n),n=w,l=c;var b=n.updateQueue;if(b===null){var T=new Set;T.add(l),n.updateQueue=T}else b.add(l);break e}else{if(!(n&1)){Ka(s,c,n),$r();break e}l=Error(E(426))}}else if(F&&a.mode&1){var x=Xa(r);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Ja(x,r,a,s,n),Cr(pt(l,a));break e}}s=l=pt(l,a),K!==4&&(K=2),Ut===null?Ut=[s]:Ut.push(s),s=r;do{switch(s.tag){case 3:s.flags|=65536,n&=-n,s.lanes|=n;var d=lu(s,l,n);za(s,d);break e;case 1:a=l;var u=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(gn===null||!gn.has(p)))){s.flags|=65536,n&=-n,s.lanes|=n;var y=cu(s,a,n);za(s,y);break e}}s=s.return}while(s!==null)}Cu(t)}catch(v){n=v,$===t&&t!==null&&($=t=t.return);continue}break}while(!0)}function Iu(){var e=di.current;return di.current=ui,e===null?ui:e}function $r(){(K===0||K===3||K===2)&&(K=4),Z===null||!(jn&268435455)&&!(Ai&268435455)||an(Z,ne)}function mi(e,n){var t=W;W|=2;var o=Iu();(Z!==e||ne!==n)&&(Ge=null,Mn(e,n));do try{lp();break}catch(i){ku(e,i)}while(!0);if(Rr(),W=t,di.current=o,$!==null)throw Error(E(261));return Z=null,ne=0,K}function lp(){for(;$!==null;)Au($)}function cp(){for(;$!==null&&!Wd();)Au($)}function Au(e){var n=Ru(e.alternate,e,ye);e.memoizedProps=e.pendingProps,n===null?Cu(e):$=n,Br.current=null}function Cu(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=tp(t,n),t!==null){t.flags&=32767,$=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,$=null;return}}else if(t=np(t,n,ye),t!==null){$=t;return}if(n=n.sibling,n!==null){$=n;return}$=n=e}while(n!==null);K===0&&(K=5)}function Nn(e,n,t){var o=D,i=Ae.transition;try{Ae.transition=null,D=1,up(e,n,t,o)}finally{Ae.transition=i,D=o}return null}function up(e,n,t,o){do at();while(cn!==null);if(W&6)throw Error(E(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var s=t.lanes|t.childLanes;if(zd(e,s),e===Z&&($=Z=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Po||(Po=!0,Pu(Qo,function(){return at(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Ae.transition,Ae.transition=null;var r=D;D=1;var a=W;W|=4,Br.current=null,ip(e,t),Eu(t,e),Rh(Ms),Xo=!!Os,Ms=Os=null,e.current=t,sp(t),Dd(),W=a,D=r,Ae.transition=s}else e.current=t;if(Po&&(Po=!1,cn=e,pi=i),s=e.pendingLanes,s===0&&(gn=null),jd(t.stateNode),ge(e,Y()),n!==null)for(o=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],o(i.value,{componentStack:i.stack,digest:i.digest});if(hi)throw hi=!1,e=Zs,Zs=null,e;return pi&1&&e.tag!==0&&at(),s=e.pendingLanes,s&1?e===er?Ht++:(Ht=0,er=e):Ht=0,xn(),null}function at(){if(cn!==null){var e=lc(pi),n=Ae.transition,t=D;try{if(Ae.transition=null,D=16>e?16:e,cn===null)var o=!1;else{if(e=cn,cn=null,pi=0,W&6)throw Error(E(331));var i=W;for(W|=4,I=e.current;I!==null;){var s=I,r=s.child;if(I.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(I=c;I!==null;){var f=I;switch(f.tag){case 0:case 11:case 15:Ft(8,f,s)}var h=f.child;if(h!==null)h.return=f,I=h;else for(;I!==null;){f=I;var g=f.sibling,w=f.return;if(vu(f),f===c){I=null;break}if(g!==null){g.return=w,I=g;break}I=w}}}var b=s.alternate;if(b!==null){var T=b.child;if(T!==null){b.child=null;do{var x=T.sibling;T.sibling=null,T=x}while(T!==null)}}I=s}}if(s.subtreeFlags&2064&&r!==null)r.return=s,I=r;else e:for(;I!==null;){if(s=I,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ft(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,I=d;break e}I=s.return}}var u=e.current;for(I=u;I!==null;){r=I;var p=r.child;if(r.subtreeFlags&2064&&p!==null)p.return=r,I=p;else e:for(r=u;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ii(9,a)}}catch(v){z(a,a.return,v)}if(a===r){I=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,I=y;break e}I=a.return}}if(W=i,xn(),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(wi,e)}catch{}o=!0}return o}finally{D=t,Ae.transition=n}}return!1}function dl(e,n,t){n=pt(t,n),n=lu(e,n,1),e=fn(e,n,1),n=le(),e!==null&&(lo(e,1,n),ge(e,n))}function z(e,n,t){if(e.tag===3)dl(e,e,t);else for(;n!==null;){if(n.tag===3){dl(n,e,t);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(gn===null||!gn.has(o))){e=pt(t,e),e=cu(n,e,1),n=fn(n,e,1),e=le(),n!==null&&(lo(n,1,e),ge(n,e));break}}n=n.return}}function dp(e,n,t){var o=e.pingCache;o!==null&&o.delete(n),n=le(),e.pingedLanes|=e.suspendedLanes&t,Z===e&&(ne&t)===t&&(K===4||K===3&&(ne&130023424)===ne&&500>Y()-Gr?Mn(e,0):zr|=t),ge(e,n)}function Nu(e,n){n===0&&(e.mode&1?(n=bo,bo<<=1,!(bo&130023424)&&(bo=4194304)):n=1);var t=le();e=Je(e,n),e!==null&&(lo(e,n,t),ge(e,t))}function hp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Nu(e,t)}function pp(e,n){var t=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(E(314))}o!==null&&o.delete(n),Nu(e,t)}var Ru;Ru=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||me.current)pe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return pe=!1,ep(e,n,t);pe=!!(e.flags&131072)}else pe=!1,F&&n.flags&1048576&&Wc(n,ii,n.index);switch(n.lanes=0,n.tag){case 2:var o=n.type;_o(e,n),e=n.pendingProps;var i=ct(n,re.current);rt(n,t),i=jr(null,n,o,e,i,t);var s=Fr();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,fe(o)?(s=!0,ti(n)):s=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Mr(n),i.updater=ki,n.stateNode=i,i._reactInternals=n,_s(n,o,e,t),n=Gs(null,n,o,!0,s,t)):(n.tag=0,F&&s&&Ir(n),ae(null,n,i,t),n=n.child),n;case 16:o=n.elementType;e:{switch(_o(e,n),e=n.pendingProps,i=o._init,o=i(o._payload),n.type=o,i=n.tag=fp(o),e=Pe(o,e),i){case 0:n=zs(null,n,o,e,t);break e;case 1:n=nl(null,n,o,e,t);break e;case 11:n=Za(null,n,o,e,t);break e;case 14:n=el(null,n,o,Pe(o.type,e),t);break e}throw Error(E(306,o,""))}return n;case 0:return o=n.type,i=n.pendingProps,i=n.elementType===o?i:Pe(o,i),zs(e,n,o,i,t);case 1:return o=n.type,i=n.pendingProps,i=n.elementType===o?i:Pe(o,i),nl(e,n,o,i,t);case 3:e:{if(pu(n),e===null)throw Error(E(387));o=n.pendingProps,s=n.memoizedState,i=s.element,Uc(e,n),ai(n,o,null,t);var r=n.memoizedState;if(o=r.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:r.cache,pendingSuspenseBoundaries:r.pendingSuspenseBoundaries,transitions:r.transitions},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){i=pt(Error(E(423)),n),n=tl(e,n,o,t,i);break e}else if(o!==i){i=pt(Error(E(424)),n),n=tl(e,n,o,t,i);break e}else for(we=mn(n.stateNode.containerInfo.firstChild),ve=n,F=!0,Me=null,t=jc(n,null,o,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ut(),o===i){n=Ze(e,n,t);break e}ae(e,n,o,t)}n=n.child}return n;case 5:return Hc(n),e===null&&Fs(n),o=n.type,i=n.pendingProps,s=e!==null?e.memoizedProps:null,r=i.children,Ws(o,i)?r=null:s!==null&&Ws(o,s)&&(n.flags|=32),hu(e,n),ae(e,n,r,t),n.child;case 6:return e===null&&Fs(n),null;case 13:return mu(e,n,t);case 4:return Wr(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=dt(n,null,o,t):ae(e,n,o,t),n.child;case 11:return o=n.type,i=n.pendingProps,i=n.elementType===o?i:Pe(o,i),Za(e,n,o,i,t);case 7:return ae(e,n,n.pendingProps,t),n.child;case 8:return ae(e,n,n.pendingProps.children,t),n.child;case 12:return ae(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(o=n.type._context,i=n.pendingProps,s=n.memoizedProps,r=i.value,L(si,o._currentValue),o._currentValue=r,s!==null)if(Le(s.value,r)){if(s.children===i.children&&!me.current){n=Ze(e,n,t);break e}}else for(s=n.child,s!==null&&(s.return=n);s!==null;){var a=s.dependencies;if(a!==null){r=s.child;for(var l=a.firstContext;l!==null;){if(l.context===o){if(s.tag===1){l=Qe(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Us(s.return,t,n),a.lanes|=t;break}l=l.next}}else if(s.tag===10)r=s.type===n.type?null:s.child;else if(s.tag===18){if(r=s.return,r===null)throw Error(E(341));r.lanes|=t,a=r.alternate,a!==null&&(a.lanes|=t),Us(r,t,n),r=s.sibling}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===n){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}ae(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,o=n.pendingProps.children,rt(n,t),i=Ce(i),o=o(i),n.flags|=1,ae(e,n,o,t),n.child;case 14:return o=n.type,i=Pe(o,n.pendingProps),i=Pe(o.type,i),el(e,n,o,i,t);case 15:return uu(e,n,n.type,n.pendingProps,t);case 17:return o=n.type,i=n.pendingProps,i=n.elementType===o?i:Pe(o,i),_o(e,n),n.tag=1,fe(o)?(e=!0,ti(n)):e=!1,rt(n,t),au(n,o,i),_s(n,o,i,t),Gs(null,n,o,!0,e,t);case 19:return fu(e,n,t);case 22:return du(e,n,t)}throw Error(E(156,n.tag))};function Pu(e,n){return ic(e,n)}function mp(e,n,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,n,t,o){return new mp(e,n,t,o)}function Qr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fp(e){if(typeof e=="function")return Qr(e)?1:0;if(e!=null){if(e=e.$$typeof,e===mr)return 11;if(e===fr)return 14}return 2}function wn(e,n){var t=e.alternate;return t===null?(t=Ie(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Go(e,n,t,o,i,s){var r=2;if(o=e,typeof e=="function")Qr(e)&&(r=1);else if(typeof e=="string")r=5;else e:switch(e){case Gn:return Wn(t.children,i,s,n);case pr:r=8,i|=8;break;case hs:return e=Ie(12,t,n,i|2),e.elementType=hs,e.lanes=s,e;case ps:return e=Ie(13,t,n,i),e.elementType=ps,e.lanes=s,e;case ms:return e=Ie(19,t,n,i),e.elementType=ms,e.lanes=s,e;case Hl:return Ci(t,i,s,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fl:r=10;break e;case Ul:r=9;break e;case mr:r=11;break e;case fr:r=14;break e;case on:r=16,o=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return n=Ie(r,t,n,i),n.elementType=e,n.type=o,n.lanes=s,n}function Wn(e,n,t,o){return e=Ie(7,e,o,n),e.lanes=t,e}function Ci(e,n,t,o){return e=Ie(22,e,o,n),e.elementType=Hl,e.lanes=t,e.stateNode={isHidden:!1},e}function as(e,n,t){return e=Ie(6,e,null,n),e.lanes=t,e}function ls(e,n,t){return n=Ie(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function gp(e,n,t,o,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_i(0),this.expirationTimes=_i(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_i(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kr(e,n,t,o,i,s,r,a,l){return e=new gp(e,n,t,a,l),n===1?(n=1,s===!0&&(n|=8)):n=0,s=Ie(3,null,null,n),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mr(s),e}function yp(e,n,t){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zn,key:o==null?null:""+o,children:e,containerInfo:n,implementation:t}}function Ou(e){if(!e)return bn;e=e._reactInternals;e:{if(Hn(e)!==e||e.tag!==1)throw Error(E(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(fe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(E(171))}if(e.tag===1){var t=e.type;if(fe(t))return Oc(e,t,n)}return n}function Mu(e,n,t,o,i,s,r,a,l){return e=Kr(t,o,!0,e,i,s,r,a,l),e.context=Ou(null),t=e.current,o=le(),i=yn(t),s=Qe(o,i),s.callback=n??null,fn(t,s,i),e.current.lanes=i,lo(e,i,o),ge(e,o),e}function Ni(e,n,t,o){var i=n.current,s=le(),r=yn(i);return t=Ou(t),n.context===null?n.context=t:n.pendingContext=t,n=Qe(s,r),n.payload={element:e},o=o===void 0?null:o,o!==null&&(n.callback=o),e=fn(i,n,r),e!==null&&(De(e,i,r,s),Fo(e,i,r)),r}function fi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hl(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Xr(e,n){hl(e,n),(e=e.alternate)&&hl(e,n)}function wp(){return null}var Wu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jr(e){this._internalRoot=e}Ri.prototype.render=Jr.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(E(409));Ni(e,n,null,null)};Ri.prototype.unmount=Jr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Fn(function(){Ni(null,e,null,null)}),n[Xe]=null}};function Ri(e){this._internalRoot=e}Ri.prototype.unstable_scheduleHydration=function(e){if(e){var n=dc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<rn.length&&n!==0&&n<rn[t].priority;t++);rn.splice(t,0,e),t===0&&pc(e)}};function Zr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pl(){}function vp(e,n,t,o,i){if(i){if(typeof o=="function"){var s=o;o=function(){var c=fi(r);s.call(c)}}var r=Mu(n,o,e,0,null,!1,!1,"",pl);return e._reactRootContainer=r,e[Xe]=r.current,Kt(e.nodeType===8?e.parentNode:e),Fn(),r}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var a=o;o=function(){var c=fi(l);a.call(c)}}var l=Kr(e,0,!1,null,null,!1,!1,"",pl);return e._reactRootContainer=l,e[Xe]=l.current,Kt(e.nodeType===8?e.parentNode:e),Fn(function(){Ni(n,l,t,o)}),l}function Oi(e,n,t,o,i){var s=t._reactRootContainer;if(s){var r=s;if(typeof i=="function"){var a=i;i=function(){var l=fi(r);a.call(l)}}Ni(n,r,e,i)}else r=vp(t,n,e,i,o);return fi(r)}cc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Rt(n.pendingLanes);t!==0&&(wr(n,t|1),ge(n,Y()),!(W&6)&&(mt=Y()+500,xn()))}break;case 13:Fn(function(){var o=Je(e,1);if(o!==null){var i=le();De(o,e,1,i)}}),Xr(e,1)}};vr=function(e){if(e.tag===13){var n=Je(e,134217728);if(n!==null){var t=le();De(n,e,134217728,t)}Xr(e,134217728)}};uc=function(e){if(e.tag===13){var n=yn(e),t=Je(e,n);if(t!==null){var o=le();De(t,e,n,o)}Xr(e,n)}};dc=function(){return D};hc=function(e,n){var t=D;try{return D=e,n()}finally{D=t}};xs=function(e,n,t){switch(n){case"input":if(ys(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var o=t[n];if(o!==e&&o.form===e.form){var i=Ei(o);if(!i)throw Error(E(90));Bl(o),ys(o,i)}}}break;case"textarea":Gl(e,t);break;case"select":n=t.value,n!=null&&tt(e,!!t.multiple,n,!1)}};Jl=Yr;Zl=Fn;var Tp={usingClientEntryPoint:!1,Events:[uo,Qn,Ei,Kl,Xl,Yr]},At={findFiberByHostInstance:Rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bp={bundleType:At.bundleType,version:At.version,rendererPackageName:At.rendererPackageName,rendererConfig:At.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:en.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tc(e),e===null?null:e.stateNode},findFiberByHostInstance:At.findFiberByHostInstance||wp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oo.isDisabled&&Oo.supportsFiber)try{wi=Oo.inject(bp),_e=Oo}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tp;Ee.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zr(n))throw Error(E(200));return yp(e,n,null,t)};Ee.createRoot=function(e,n){if(!Zr(e))throw Error(E(299));var t=!1,o="",i=Wu;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Kr(e,1,!1,null,null,t,!1,o,i),e[Xe]=n.current,Kt(e.nodeType===8?e.parentNode:e),new Jr(n)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=tc(n),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Fn(e)};Ee.hydrate=function(e,n,t){if(!Pi(n))throw Error(E(200));return Oi(null,e,n,!0,t)};Ee.hydrateRoot=function(e,n,t){if(!Zr(e))throw Error(E(405));var o=t!=null&&t.hydratedSources||null,i=!1,s="",r=Wu;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),n=Mu(n,null,e,1,t??null,i,!1,s,r),e[Xe]=n.current,Kt(e),o)for(e=0;e<o.length;e++)t=o[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Ri(n)};Ee.render=function(e,n,t){if(!Pi(n))throw Error(E(200));return Oi(null,e,n,!1,t)};Ee.unmountComponentAtNode=function(e){if(!Pi(e))throw Error(E(40));return e._reactRootContainer?(Fn(function(){Oi(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};Ee.unstable_batchedUpdates=Yr;Ee.unstable_renderSubtreeIntoContainer=function(e,n,t,o){if(!Pi(t))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Oi(e,n,t,!1,o)};Ee.version="18.3.1-next-f1338f8080-20240426";function Du(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Du)}catch(e){console.error(e)}}Du(),Dl.exports=Ee;var Ep=Dl.exports,ml=Ep;us.createRoot=ml.createRoot,us.hydrateRoot=ml.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function so(){return so=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},so.apply(this,arguments)}var un;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(un||(un={}));const fl="popstate";function Sp(e){e===void 0&&(e={});function n(o,i){let{pathname:s,search:r,hash:a}=o.location;return or("",{pathname:s,search:r,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(o,i){return typeof i=="string"?i:gi(i)}return kp(n,t,null,e)}function V(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Lu(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function xp(){return Math.random().toString(36).substr(2,8)}function gl(e,n){return{usr:e.state,key:e.key,idx:n}}function or(e,n,t,o){return t===void 0&&(t=null),so({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?wt(n):n,{state:t,key:n&&n.key||o||xp()})}function gi(e){let{pathname:n="/",search:t="",hash:o=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function wt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let o=e.indexOf("?");o>=0&&(n.search=e.substr(o),e=e.substr(0,o)),e&&(n.pathname=e)}return n}function kp(e,n,t,o){o===void 0&&(o={});let{window:i=document.defaultView,v5Compat:s=!1}=o,r=i.history,a=un.Pop,l=null,c=f();c==null&&(c=0,r.replaceState(so({},r.state,{idx:c}),""));function f(){return(r.state||{idx:null}).idx}function h(){a=un.Pop;let x=f(),d=x==null?null:x-c;c=x,l&&l({action:a,location:T.location,delta:d})}function g(x,d){a=un.Push;let u=or(T.location,x,d);c=f()+1;let p=gl(u,c),y=T.createHref(u);try{r.pushState(p,"",y)}catch(v){if(v instanceof DOMException&&v.name==="DataCloneError")throw v;i.location.assign(y)}s&&l&&l({action:a,location:T.location,delta:1})}function w(x,d){a=un.Replace;let u=or(T.location,x,d);c=f();let p=gl(u,c),y=T.createHref(u);r.replaceState(p,"",y),s&&l&&l({action:a,location:T.location,delta:0})}function b(x){let d=i.location.origin!=="null"?i.location.origin:i.location.href,u=typeof x=="string"?x:gi(x);return u=u.replace(/ $/,"%20"),V(d,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,d)}let T={get action(){return a},get location(){return e(i,r)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(fl,h),l=x,()=>{i.removeEventListener(fl,h),l=null}},createHref(x){return n(i,x)},createURL:b,encodeLocation(x){let d=b(x);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:g,replace:w,go(x){return r.go(x)}};return T}var yl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(yl||(yl={}));function Ip(e,n,t){return t===void 0&&(t="/"),Ap(e,n,t)}function Ap(e,n,t,o){let i=typeof n=="string"?wt(n):n,s=ea(i.pathname||"/",t);if(s==null)return null;let r=qu(e);Cp(r);let a=null;for(let l=0;a==null&&l<r.length;++l){let c=Up(s);a=qp(r[l],c)}return a}function qu(e,n,t,o){n===void 0&&(n=[]),t===void 0&&(t=[]),o===void 0&&(o="");let i=(s,r,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:r,route:s};l.relativePath.startsWith("/")&&(V(l.relativePath.startsWith(o),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(o.length));let c=vn([o,l.relativePath]),f=t.concat(l);s.children&&s.children.length>0&&(V(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),qu(s.children,n,f,c)),!(s.path==null&&!s.index)&&n.push({path:c,score:Dp(c,s.index),routesMeta:f})};return e.forEach((s,r)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,r);else for(let l of ju(s.path))i(s,r,l)}),n}function ju(e){let n=e.split("/");if(n.length===0)return[];let[t,...o]=n,i=t.endsWith("?"),s=t.replace(/\?$/,"");if(o.length===0)return i?[s,""]:[s];let r=ju(o.join("/")),a=[];return a.push(...r.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...r),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Cp(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Lp(n.routesMeta.map(o=>o.childrenIndex),t.routesMeta.map(o=>o.childrenIndex)))}const Np=/^:[\w-]+$/,Rp=3,Pp=2,Op=1,Mp=10,Wp=-2,wl=e=>e==="*";function Dp(e,n){let t=e.split("/"),o=t.length;return t.some(wl)&&(o+=Wp),n&&(o+=Pp),t.filter(i=>!wl(i)).reduce((i,s)=>i+(Np.test(s)?Rp:s===""?Op:Mp),o)}function Lp(e,n){return e.length===n.length&&e.slice(0,-1).every((o,i)=>o===n[i])?e[e.length-1]-n[n.length-1]:0}function qp(e,n,t){let{routesMeta:o}=e,i={},s="/",r=[];for(let a=0;a<o.length;++a){let l=o[a],c=a===o.length-1,f=s==="/"?n:n.slice(s.length)||"/",h=jp({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f),g=l.route;if(!h)return null;Object.assign(i,h.params),r.push({params:i,pathname:vn([s,h.pathname]),pathnameBase:zp(vn([s,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(s=vn([s,h.pathnameBase]))}return r}function jp(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,o]=Fp(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let s=i[0],r=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:o.reduce((c,f,h)=>{let{paramName:g,isOptional:w}=f;if(g==="*"){let T=a[h]||"";r=s.slice(0,s.length-T.length).replace(/(.)\/+$/,"$1")}const b=a[h];return w&&!b?c[g]=void 0:c[g]=(b||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:r,pattern:e}}function Fp(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Lu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(r,a,l)=>(o.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),o]}function Up(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Lu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function ea(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,o=e.charAt(t);return o&&o!=="/"?null:e.slice(t)||"/"}function Hp(e,n){n===void 0&&(n="/");let{pathname:t,search:o="",hash:i=""}=typeof e=="string"?wt(e):e;return{pathname:t?t.startsWith("/")?t:_p(t,n):n,search:Gp(o),hash:Yp(i)}}function _p(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function cs(e,n,t,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bp(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function na(e,n){let t=Bp(e);return n?t.map((o,i)=>i===t.length-1?o.pathname:o.pathnameBase):t.map(o=>o.pathnameBase)}function ta(e,n,t,o){o===void 0&&(o=!1);let i;typeof e=="string"?i=wt(e):(i=so({},e),V(!i.pathname||!i.pathname.includes("?"),cs("?","pathname","search",i)),V(!i.pathname||!i.pathname.includes("#"),cs("#","pathname","hash",i)),V(!i.search||!i.search.includes("#"),cs("#","search","hash",i)));let s=e===""||i.pathname==="",r=s?"/":i.pathname,a;if(r==null)a=t;else{let h=n.length-1;if(!o&&r.startsWith("..")){let g=r.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}a=h>=0?n[h]:"/"}let l=Hp(i,a),c=r&&r!=="/"&&r.endsWith("/"),f=(s||r===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}const vn=e=>e.join("/").replace(/\/\/+/g,"/"),zp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Gp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Yp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Vp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Fu=["post","put","patch","delete"];new Set(Fu);const $p=["get",...Fu];new Set($p);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ro(){return ro=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},ro.apply(this,arguments)}const oa=S.createContext(null),Qp=S.createContext(null),kn=S.createContext(null),Mi=S.createContext(null),nn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Uu=S.createContext(null);function Kp(e,n){let{relative:t}=n===void 0?{}:n;vt()||V(!1);let{basename:o,navigator:i}=S.useContext(kn),{hash:s,pathname:r,search:a}=Bu(e,{relative:t}),l=r;return o!=="/"&&(l=r==="/"?o:vn([o,r])),i.createHref({pathname:l,search:a,hash:s})}function vt(){return S.useContext(Mi)!=null}function po(){return vt()||V(!1),S.useContext(Mi).location}function Hu(e){S.useContext(kn).static||S.useLayoutEffect(e)}function ia(){let{isDataRoute:e}=S.useContext(nn);return e?cm():Xp()}function Xp(){vt()||V(!1);let e=S.useContext(oa),{basename:n,future:t,navigator:o}=S.useContext(kn),{matches:i}=S.useContext(nn),{pathname:s}=po(),r=JSON.stringify(na(i,t.v7_relativeSplatPath)),a=S.useRef(!1);return Hu(()=>{a.current=!0}),S.useCallback(function(c,f){if(f===void 0&&(f={}),!a.current)return;if(typeof c=="number"){o.go(c);return}let h=ta(c,JSON.parse(r),s,f.relative==="path");e==null&&n!=="/"&&(h.pathname=h.pathname==="/"?n:vn([n,h.pathname])),(f.replace?o.replace:o.push)(h,f.state,f)},[n,o,r,s,e])}function _u(){let{matches:e}=S.useContext(nn),n=e[e.length-1];return n?n.params:{}}function Bu(e,n){let{relative:t}=n===void 0?{}:n,{future:o}=S.useContext(kn),{matches:i}=S.useContext(nn),{pathname:s}=po(),r=JSON.stringify(na(i,o.v7_relativeSplatPath));return S.useMemo(()=>ta(e,JSON.parse(r),s,t==="path"),[e,r,s,t])}function Jp(e,n){return Zp(e,n)}function Zp(e,n,t,o){vt()||V(!1);let{navigator:i}=S.useContext(kn),{matches:s}=S.useContext(nn),r=s[s.length-1],a=r?r.params:{};r&&r.pathname;let l=r?r.pathnameBase:"/";r&&r.route;let c=po(),f;if(n){var h;let x=typeof n=="string"?wt(n):n;l==="/"||(h=x.pathname)!=null&&h.startsWith(l)||V(!1),f=x}else f=c;let g=f.pathname||"/",w=g;if(l!=="/"){let x=l.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(x.length).join("/")}let b=Ip(e,{pathname:w}),T=im(b&&b.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:vn([l,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:vn([l,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),s,t,o);return n&&T?S.createElement(Mi.Provider,{value:{location:ro({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:un.Pop}},T):T}function em(){let e=lm(),n=Vp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},n),t?S.createElement("pre",{style:i},t):null,null)}const nm=S.createElement(em,null);class tm extends S.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?S.createElement(nn.Provider,{value:this.props.routeContext},S.createElement(Uu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function om(e){let{routeContext:n,match:t,children:o}=e,i=S.useContext(oa);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),S.createElement(nn.Provider,{value:n},o)}function im(e,n,t,o){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),o===void 0&&(o=null),e==null){var s;if(!t)return null;if(t.errors)e=t.matches;else if((s=o)!=null&&s.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let r=e,a=(i=t)==null?void 0:i.errors;if(a!=null){let f=r.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);f>=0||V(!1),r=r.slice(0,Math.min(r.length,f+1))}let l=!1,c=-1;if(t&&o&&o.v7_partialHydration)for(let f=0;f<r.length;f++){let h=r[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=f),h.route.id){let{loaderData:g,errors:w}=t,b=h.route.loader&&g[h.route.id]===void 0&&(!w||w[h.route.id]===void 0);if(h.route.lazy||b){l=!0,c>=0?r=r.slice(0,c+1):r=[r[0]];break}}}return r.reduceRight((f,h,g)=>{let w,b=!1,T=null,x=null;t&&(w=a&&h.route.id?a[h.route.id]:void 0,T=h.route.errorElement||nm,l&&(c<0&&g===0?(um("route-fallback"),b=!0,x=null):c===g&&(b=!0,x=h.route.hydrateFallbackElement||null)));let d=n.concat(r.slice(0,g+1)),u=()=>{let p;return w?p=T:b?p=x:h.route.Component?p=S.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=f,S.createElement(om,{match:h,routeContext:{outlet:f,matches:d,isDataRoute:t!=null},children:p})};return t&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?S.createElement(tm,{location:t.location,revalidation:t.revalidation,component:T,error:w,children:u(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):u()},null)}var zu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(zu||{}),Gu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Gu||{});function sm(e){let n=S.useContext(oa);return n||V(!1),n}function rm(e){let n=S.useContext(Qp);return n||V(!1),n}function am(e){let n=S.useContext(nn);return n||V(!1),n}function Yu(e){let n=am(),t=n.matches[n.matches.length-1];return t.route.id||V(!1),t.route.id}function lm(){var e;let n=S.useContext(Uu),t=rm(),o=Yu();return n!==void 0?n:(e=t.errors)==null?void 0:e[o]}function cm(){let{router:e}=sm(zu.UseNavigateStable),n=Yu(Gu.UseNavigateStable),t=S.useRef(!1);return Hu(()=>{t.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ro({fromRouteId:n},s)))},[e,n])}const vl={};function um(e,n,t){vl[e]||(vl[e]=!0)}function dm(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function hm(e){let{to:n,replace:t,state:o,relative:i}=e;vt()||V(!1);let{future:s,static:r}=S.useContext(kn),{matches:a}=S.useContext(nn),{pathname:l}=po(),c=ia(),f=ta(n,na(a,s.v7_relativeSplatPath),l,i==="path"),h=JSON.stringify(f);return S.useEffect(()=>c(JSON.parse(h),{replace:t,state:o,relative:i}),[c,h,i,t,o]),null}function Ot(e){V(!1)}function pm(e){let{basename:n="/",children:t=null,location:o,navigationType:i=un.Pop,navigator:s,static:r=!1,future:a}=e;vt()&&V(!1);let l=n.replace(/^\/*/,"/"),c=S.useMemo(()=>({basename:l,navigator:s,static:r,future:ro({v7_relativeSplatPath:!1},a)}),[l,a,s,r]);typeof o=="string"&&(o=wt(o));let{pathname:f="/",search:h="",hash:g="",state:w=null,key:b="default"}=o,T=S.useMemo(()=>{let x=ea(f,l);return x==null?null:{location:{pathname:x,search:h,hash:g,state:w,key:b},navigationType:i}},[l,f,h,g,w,b,i]);return T==null?null:S.createElement(kn.Provider,{value:c},S.createElement(Mi.Provider,{children:t,value:T}))}function mm(e){let{children:n,location:t}=e;return Jp(ir(n),t)}new Promise(()=>{});function ir(e,n){n===void 0&&(n=[]);let t=[];return S.Children.forEach(e,(o,i)=>{if(!S.isValidElement(o))return;let s=[...n,i];if(o.type===S.Fragment){t.push.apply(t,ir(o.props.children,s));return}o.type!==Ot&&V(!1),!o.props.index||!o.props.children||V(!1);let r={id:o.props.id||s.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(r.children=ir(o.props.children,s)),t.push(r)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sr(){return sr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},sr.apply(this,arguments)}function fm(e,n){if(e==null)return{};var t={},o=Object.keys(e),i,s;for(s=0;s<o.length;s++)i=o[s],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}function gm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ym(e,n){return e.button===0&&(!n||n==="_self")&&!gm(e)}const wm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],vm="6";try{window.__reactRouterVersion=vm}catch{}const Tm="startTransition",Tl=dd[Tm];function bm(e){let{basename:n,children:t,future:o,window:i}=e,s=S.useRef();s.current==null&&(s.current=Sp({window:i,v5Compat:!0}));let r=s.current,[a,l]=S.useState({action:r.action,location:r.location}),{v7_startTransition:c}=o||{},f=S.useCallback(h=>{c&&Tl?Tl(()=>l(h)):l(h)},[l,c]);return S.useLayoutEffect(()=>r.listen(f),[r,f]),S.useEffect(()=>dm(o),[o]),S.createElement(pm,{basename:n,children:t,location:a.location,navigationType:a.action,navigator:r,future:o})}const Em=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Sm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,He=S.forwardRef(function(n,t){let{onClick:o,relative:i,reloadDocument:s,replace:r,state:a,target:l,to:c,preventScrollReset:f,viewTransition:h}=n,g=fm(n,wm),{basename:w}=S.useContext(kn),b,T=!1;if(typeof c=="string"&&Sm.test(c)&&(b=c,Em))try{let p=new URL(window.location.href),y=c.startsWith("//")?new URL(p.protocol+c):new URL(c),v=ea(y.pathname,w);y.origin===p.origin&&v!=null?c=v+y.search+y.hash:T=!0}catch{}let x=Kp(c,{relative:i}),d=xm(c,{replace:r,state:a,target:l,preventScrollReset:f,relative:i,viewTransition:h});function u(p){o&&o(p),p.defaultPrevented||d(p)}return S.createElement("a",sr({},g,{href:b||x,onClick:T||s?o:u,ref:t,target:l}))});var bl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(bl||(bl={}));var El;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(El||(El={}));function xm(e,n){let{target:t,replace:o,state:i,preventScrollReset:s,relative:r,viewTransition:a}=n===void 0?{}:n,l=ia(),c=po(),f=Bu(e,{relative:r});return S.useCallback(h=>{if(ym(h,t)){h.preventDefault();let g=o!==void 0?o:gi(c)===gi(f);l(e,{replace:g,state:i,preventScrollReset:s,relative:r,viewTransition:a})}},[c,l,f,o,i,t,e,s,r,a])}const Mo={courseTitle:"English Language Arts - Grade 6",description:"A comprehensive course covering Vocabulary, Grammar, Reading Comprehension, and Writing",modules:[{id:"vocabulary",title:"Vocabulary",icon:"📚",description:"Expand your word knowledge and understanding",chapters:[{id:"vocab-1",title:"Chapter 1: Context Clues",lessons:[{id:"vocab-1-1",title:"Mastering Context Clues - The IDEAS Method",type:"lesson",content:{introduction:"Context clues are 'detective hints' hidden in the text that help you understand unfamiliar words. In 6th grade, you'll encounter complex academic vocabulary in all subjects, so mastering context clues is essential. To help you remember the different types, we use the acronym IDEAS.",explanation:`**💡 THE IDEAS STRATEGY**

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
- **Support**: Give evidence or reasons to back up a claim`,examples:[{text:"Question: 'Analyze why the main character made that decision.'",explanation:"This asks you to examine the character's thoughts, feelings, and circumstances to understand the reasons behind the decision."},{text:"Question: 'What is the significance of the title?'",explanation:"This asks you to evaluate how important the title is and what special meaning or purpose it has."}]}},{id:"vocab-8-2",title:"Practice: Mastering Academic Vocabulary",type:"exercise",content:{instructions:"Choose the academic vocabulary word that best completes each sentence or answers each question. These Tier 2 words are essential for test success!",questions:[{id:"q1",question:"When you _____ a text, you provide a brief overview of the main ideas without including minor details.",options:["analyze","summarize","evaluate","interpret"],correctAnswer:1,explanation:"**Summarize** means to give a brief statement of the main points, creating a short overview. Think: the 'highlight reel.'"},{id:"q2",question:"To _____ means to examine something carefully by breaking it into parts to understand how they work together.",options:["describe","analyze","summarize","compare"],correctAnswer:1,explanation:"**Analyze** means to examine something in detail, breaking it down to understand it better. Like being a detective!"},{id:"q3",question:"Which word means 'to judge the value, quality, or importance of something'?",options:["context","evaluate","significant","interpret"],correctAnswer:1,explanation:"**Evaluate** means to judge or determine the significance or worth of something. You're deciding if it works well or not."},{id:"q4",question:"The _____ of a word includes the surrounding words and sentences that help you understand its meaning.",options:["context","summary","evaluation","analysis"],correctAnswer:0,explanation:"**Context** refers to the circumstances or setting surrounding something. It helps you understand what's happening around a word or event."},{id:"q5",question:"When you _____ a poem, you explain what you think it means based on the words and your understanding.",options:["summarize","describe","interpret","compare"],correctAnswer:2,explanation:"**Interpret** means to explain the meaning of something based on your understanding and analysis. It's YOUR explanation backed by evidence."},{id:"q6",question:"A _____ discovery is one that is very important and makes a big difference.",options:["brief","significant","simple","common"],correctAnswer:1,explanation:"**Significant** means sufficiently great or important to be worthy of attention. If something is significant, it really matters!"},{id:"q7",question:"To _____ your answer means to provide evidence, examples, or reasons that back up your claim.",options:["support","contrast","conclude","describe"],correctAnswer:0,explanation:"**Support** means to provide evidence or reasoning to back up a claim. You're proving your point with facts!"},{id:"q8",question:"When you _____ from a text, you draw logical conclusions based on evidence even though it's not directly stated.",options:["summarize","infer","describe","quote"],correctAnswer:1,explanation:"**Infer** means to conclude something from evidence and reasoning. You're being a detective, using clues to figure out what's not directly said!"},{id:"q9",question:"Facts, information, or quotes that prove something is true are called _____.",options:["opinions","evidence","summaries","perspectives"],correctAnswer:1,explanation:"**Evidence** refers to facts, information, or signs that prove something is true. It's the proof that backs up your claims!"},{id:"q10",question:"To _____ two texts means to examine them to find similarities, while to _____ them means to find differences.",options:["evaluate / analyze","compare / contrast","interpret / explain","describe / support"],correctAnswer:1,explanation:"**Compare** means to show similarities, and **contrast** means to show differences. These words are often used together in test questions!"}]}}]}]},{id:"grammar",title:"Grammar",icon:"✏️",description:"Master the rules and structure of English",chapters:[{id:"grammar-1",title:"Chapter 1: Parts of Speech",lessons:[{id:"grammar-1-1",title:"Parts of Speech: The Engine of the Sentence",type:"lesson",content:{introduction:"Parts of speech are the 'building blocks' of every sentence. Think of them as different types of LEGO pieces—each has a specific job and fits together in particular ways. Understanding these three core parts of speech (nouns, pronouns, and verbs) is fundamental to constructing clear, powerful sentences in Grade 6 and beyond!",explanation:`**🔑 THE THREE CORE PARTS OF SPEECH**

Every complete sentence needs at least two parts: **WHO/WHAT** (noun/pronoun) and **DOES/IS** (verb). This is the engine that makes English work!

---

**1. NOUNS: Naming Words** 📝

**Definition**: A noun names a person, place, thing, or idea.

**Two Types of Nouns:**

**A. Common Nouns** (general, everyday things)
- **People**: teacher, student, doctor, athlete
- **Places**: city, school, park, ocean
- **Things**: book, computer, backpack, pizza
- **Ideas**: freedom, happiness, courage, democracy

**How to Recognize**: Common nouns are lowercase unless they start a sentence

**B. Proper Nouns** (specific names - always capitalized!)
- **People**: Ms. Johnson, Abraham Lincoln, Taylor Swift
- **Places**: California, San Francisco, Pacific Ocean, Yosemite National Park
- **Things**: iPhone, Golden Gate Bridge, Statue of Liberty
- **Ideas/Events**: Fourth of July, Renaissance, World War II

**Grade 6 Rule**: ALL words in a proper noun get capitalized EXCEPT small words like 'of,' 'the,' 'a' (unless they're the first word)
- Example: United States **of** America, University **of** California

**Concrete vs. Abstract Nouns:**
- **Concrete**: You can see, touch, hear, taste, or smell them (dog, music, lemon)
- **Abstract**: Ideas and concepts you can't physically experience (love, justice, intelligence)

---

**2. PRONOUNS: Noun Replacements** 🔄

**Definition**: A pronoun replaces a noun to avoid boring repetition.

**Why We Need Pronouns:**

❌ **Without pronouns**: "Sarah went to Sarah's locker. Sarah got Sarah's books. Sarah walked to Sarah's class."

✅ **With pronouns**: "Sarah went to **her** locker. **She** got **her** books. **She** walked to **her** class."

**Types of Pronouns (Grade 6 Focus):**

**A. Personal Pronouns** (replace people/things)
- **Singular**: I, you, he, she, it
- **Plural**: we, you, they

**B. Possessive Pronouns** (show ownership)
- **Singular**: my, mine, your, yours, his, her, hers, its
- **Plural**: our, ours, your, yours, their, theirs

**Important Note**: The noun a pronoun replaces is called its **antecedent**
- Example: "**Maria** forgot **her** lunch." (Maria is the antecedent of 'her')

**Common Error to Avoid:**
- ❌ "Its'" is NEVER correct!
- ✅ **Its** = possessive (The dog wagged its tail)
- ✅ **It's** = contraction for 'it is' (It's raining today)

---

**3. VERBS: The Action or State of Being** ⚡

**Definition**: A verb shows what something DOES or what something IS.

**Two Main Types:**

**A. Action Verbs** (show what the subject DOES)

**Physical Actions** (you can see them):
- run, jump, throw, write, dance, eat, swim, build
- Example: "The athlete **jumped** over the hurdle."

**Mental Actions** (happen in your mind):
- think, believe, understand, remember, imagine, wonder, decide
- Example: "I **believe** that teamwork matters."

**Verbal Actions** (involve speaking/communication):
- said, shouted, whispered, announced, explained, asked
- Example: "The teacher **explained** the assignment."

**B. Linking Verbs** (show what the subject IS or SEEMS LIKE)

**Forms of 'to be'** (the most common linking verbs):
- Present: am, is, are
- Past: was, were
- Future: will be
- Other forms: be, being, been

**Other Linking Verbs** (connect the subject to a description):
- **Sense verbs**: feel, look, smell, taste, sound
- **State verbs**: seem, appear, become, remain

**How to Identify a Linking Verb:**
Use the "= Test": Can you replace the verb with an equal sign?
- "The soup **tastes** delicious." → The soup = delicious ✓ (linking verb)
- "I **taste** the soup." → I = the soup ✗ (action verb - I'm doing the tasting)

---

**💡 THE NOUN-VERB-NOUN PATTERN (The Foundation of English)**

Most English sentences follow this basic pattern:

**NOUN (or PRONOUN) + VERB + NOUN (or PRONOUN)**

**Examples:**
1. **Sarah** + **threw** + **the ball**
   - Subject (who) + Action (does) + Object (what)

2. **The dog** + **is** + **friendly**
   - Subject (who) + Linking verb (is) + Description (what)

3. **We** + **finished** + **our homework**
   - Subject (who) + Action (does) + Object (what)

**Understanding this pattern helps you:**
- Build complete sentences
- Identify fragments (missing pieces)
- Understand subject-verb agreement

---

**📊 SUBJECT-VERB AGREEMENT (Critical for Grade 6!)**

**The Rule**: Subjects and verbs must MATCH in number

**Singular subject** → **Singular verb**
- The student **studies**. (one student, -s on verb)
- She **is** happy. (singular subject, singular form of 'be')

**Plural subject** → **Plural verb**
- The students **study**. (multiple students, no -s on verb)
- They **are** happy. (plural subject, plural form of 'be')

**Tricky Situations:**

**1. Compound Subjects with 'and'** (always plural)
- Sarah **and** Maria **are** friends. (two people = plural)

**2. Compound Subjects with 'or'** (match the closest subject)
- Neither the teacher **nor** the students **were** ready. (students is closest and plural)
- Neither the students **nor** the teacher **was** ready. (teacher is closest and singular)

**3. Words that come between subject and verb**
- The box of crayons **is** on the table. (box = singular, not crayons)
- The students in the class **are** taking notes. (students = plural, not class)

**Memory Trick**: Cross out prepositional phrases to find the real subject!

---

**🎯 WHY THIS MATTERS**

**For Writing:**
- Clear subjects and verbs make your ideas easy to understand
- Correct agreement shows you're a skilled writer
- Varied verbs make writing more interesting

**For Reading:**
- Identifying subjects and verbs helps you understand complex sentences
- Understanding parts of speech improves comprehension

**For Tests:**
- Grammar questions often test subject-verb agreement
- Identifying parts of speech is a common standardized test skill

**For Speaking:**
- Using correct agreement makes you sound educated and professional

---

**✨ QUICK IDENTIFICATION STRATEGIES**

**To Find the NOUN:**
- Ask "What is this sentence about?"
- Can you put 'the' or 'a' in front of it?
- Does it name a person, place, thing, or idea?

**To Find the PRONOUN:**
- Does it replace a noun?
- Is it one of the personal or possessive pronouns?
- Can you identify what noun it's replacing (its antecedent)?

**To Find the VERB:**
- Ask "What is the subject doing?" (action verb)
- Ask "What is the subject?" (linking verb)
- Can you put 'to' in front of it? (to run, to think, to be)
- Does it change when you change the time? (walk → walked)`,examples:[{text:"**Example 1**: 'Sarah threw the ball to her friend at the park.'",explanation:"**Breakdown**: **Sarah** (proper noun - specific person), **threw** (action verb - past tense), **ball** (common noun - thing), **her** (possessive pronoun - refers to Sarah), **friend** (common noun - person), **park** (common noun - place). **Pattern**: Noun + Verb + Noun structure!"},{text:"**Example 2**: 'The students are excited about their field trip to Yosemite National Park.'",explanation:"**Breakdown**: **students** (common noun - plural people), **are** (linking verb - form of 'be'), **excited** (adjective describing students), **their** (possessive pronoun - refers to students), **field trip** (common noun - thing/event), **Yosemite National Park** (proper noun - specific place, all words capitalized). **Agreement**: Plural subject 'students' matches plural verb 'are'!"},{text:"**Example 3**: 'My brother and I believe that honesty matters.'",explanation:"**Breakdown**: **brother** (common noun), **I** (personal pronoun), **believe** (mental action verb - present tense), **honesty** (abstract noun - idea), **matters** (action verb). **Special Notes**: Compound subject 'brother and I' takes plural verb 'believe.' 'Honesty' is an abstract noun (you can't see or touch it, but it's still a noun!)"},{text:"**Example 4 - Agreement Challenge**: 'The box of old photographs **is** in the attic.' (NOT 'are')",explanation:"**Tricky!** The subject is '**box**' (singular), not 'photographs' (plural). The phrase 'of old photographs' just describes which box. Cross out the prepositional phrase: 'The box ~~of old photographs~~ is in the attic.' Now it's clear that 'box' (singular) needs 'is' (singular)!"},{text:"**Example 5 - Linking vs. Action Verb**: 'The soup tastes delicious.' vs. 'I taste the soup.'",explanation:"**First sentence**: '**tastes**' is a **linking verb** (soup = delicious, connects subject to description). **Second sentence**: '**taste**' is an **action verb** (I am doing the action of tasting). Same word, different jobs!"}],quickPractice:{question:`Analyze this sentence and identify each part:

'The excited students and their teacher are planning a science experiment.'

Find: 1) All nouns, 2) All pronouns, 3) The verb, 4) Is subject-verb agreement correct?`,hint:"Remember compound subjects with 'and' are always plural!",answer:"**Nouns**: students (common, plural), teacher (common, singular), science (common - modifying 'experiment'), experiment (common, singular). **Pronouns**: their (possessive, refers to 'students'). **Verb**: are planning (linking + action combination, plural). **Agreement**: ✓ CORRECT! Compound subject 'students and their teacher' (plural) matches plural verb 'are.' Note: 'excited' is an adjective, not a noun!"}}},{id:"grammar-1-2",title:"Practice: Identifying Parts of Speech",type:"exercise",content:{instructions:"Identify the part of speech for the underlined word in each sentence. Remember to think about the word's JOB in the sentence, not just what it looks like!",questions:[{id:"q1",question:"The quick brown fox **jumped** over the lazy dog.",word:"jumped",options:["noun","verb","adjective","adverb"],correctAnswer:1,explanation:"'**Jumped**' is an **action verb** showing what the fox did. Test: Can you put 'to' in front? 'to jump' - yes! It's a verb."},{id:"q2",question:"She brought **her** umbrella to school because of the rain.",word:"her",options:["noun","verb","pronoun","adjective"],correctAnswer:2,explanation:"'**Her**' is a **possessive pronoun** showing ownership of the umbrella. It replaces a noun (the girl's) and shows whose umbrella it is."},{id:"q3",question:"The **Golden Gate Bridge** is a famous landmark in San Francisco.",word:"Golden Gate Bridge",options:["common noun","proper noun","verb","pronoun"],correctAnswer:1,explanation:"'**Golden Gate Bridge**' is a **proper noun** - it's the specific name of a particular bridge. All words are capitalized because it's a proper noun."},{id:"q4",question:"My **freedom** to express my ideas is protected by the Constitution.",word:"freedom",options:["proper noun","common noun","verb","pronoun"],correctAnswer:1,explanation:"'**Freedom**' is an **abstract common noun** (an idea you can't touch). It's lowercase because it's not a specific name. Test: Can you put 'the' or 'my' in front? Yes - 'my freedom.'"},{id:"q5",question:"The students **are** preparing for their final exam.",word:"are",options:["action verb","linking verb","pronoun","noun"],correctAnswer:1,explanation:"'**Are**' is a **linking verb** (form of 'be'). It connects 'students' to what they're doing. Use the = test: 'students = preparing' makes sense!"},{id:"q6",question:"I **believe** that education is the key to success.",word:"believe",options:["linking verb","action verb (mental)","noun","pronoun"],correctAnswer:1,explanation:"'**Believe**' is a **mental action verb** - it happens in your mind, not your body. Test: Can you put 'to' in front? 'to believe' - yes!"},{id:"q7",question:"The box of crayons **is** on the table.",word:"is",options:["action verb","linking verb","helping verb","noun"],correctAnswer:1,explanation:"'**Is**' is a **linking verb** (form of 'be'). Linking verbs connect the subject to information about it. Notice: 'box' (singular) needs 'is' (singular), not 'are'!"},{id:"q8",question:"**Abraham Lincoln** delivered the Gettysburg Address in 1863.",word:"Abraham Lincoln",options:["common noun","proper noun","pronoun","verb"],correctAnswer:1,explanation:"'**Abraham Lincoln**' is a **proper noun** - the specific name of a person. Both words are capitalized."},{id:"q9",question:"Maria and **they** finished the project early.",word:"they",options:["proper noun","common noun","personal pronoun","possessive pronoun"],correctAnswer:2,explanation:"'**They**' is a **personal pronoun** (plural) that replaces the names of specific people. It's the subject doing the action (finishing)."},{id:"q10",question:"The soup **tastes** delicious after simmering all day.",word:"tastes",options:["action verb","linking verb","noun","adjective"],correctAnswer:1,explanation:"'**Tastes**' is a **linking verb** here. Use the = test: 'soup = delicious' ✓ The verb connects the subject to a description. (If the sentence was 'I taste the soup,' then 'taste' would be an action verb!)"}]}}]},{id:"grammar-2",title:"Chapter 2: Sentence Structure",lessons:[{id:"grammar-2-1",title:"Sentence Structure: Building Complete Thoughts",type:"lesson",content:{introduction:"A sentence is like a building—it needs a solid foundation (subject + verb) to stand. In Grade 6, you'll learn to construct different types of sentences and avoid common errors like fragments and run-ons. Mastering sentence structure is essential for clear, effective writing!",explanation:`**🏗️ WHAT IS A COMPLETE SENTENCE?**

A complete sentence must have TWO things:
1. **A SUBJECT** (who or what)
2. **A PREDICATE** (what the subject does or is)

**Example**: **The dog** (subject) **barked loudly** (predicate).

---

**📝 TYPE 1: SIMPLE SENTENCES**

**Definition**: A simple sentence contains ONE independent clause (one complete thought).

**Structure**: Subject + Verb (+ other words)

**Important**: 'Simple' doesn't mean 'short'! A simple sentence can be long, but it has only ONE subject-verb combination expressing ONE complete thought.

**Examples:**

**Short Simple Sentences:**
- Birds fly.
- She laughed.
- The sun sets.

**Longer Simple Sentences:**
- The excited students cheered loudly for their team.
- Maria and her brother walked to the library after school.
- The old oak tree in our backyard provides shade during summer.

**Types of Simple Sentences:**

**1. Simple Subject + Simple Verb**
- Dogs bark.
- Rain falls.

**2. Compound Subject (two subjects, one verb)**
- **Sarah and Maria** went to the movies. (two subjects, one action)
- **The cat and the dog** played together. (two subjects, one action)

**3. Compound Verb (one subject, two verbs)**
- The athlete **ran and jumped**. (one subject, two actions)
- We **studied and reviewed** for the test. (one subject, two actions)

**4. Compound Subject + Compound Verb**
- **Sarah and I** **walked and talked** on the way home.

**Note**: Even with compound subjects or verbs, if there's only ONE independent clause, it's still a SIMPLE sentence!

---

**🔗 TYPE 2: COMPOUND SENTENCES**

**Definition**: A compound sentence contains TWO or more independent clauses (two complete thoughts) joined together.

**Structure**: Independent Clause + **Comma + FANBOYS** + Independent Clause

**The FANBOYS (Coordinating Conjunctions):**

| Letter | Word | Meaning | Example |
|--------|------|---------|----------|
| **F** | For | because (reason) | I stayed home, **for** I was sick. |
| **A** | And | plus/addition | She studied, **and** she passed. |
| **N** | Nor | not this or that | He didn't call, **nor** did he text. |
| **B** | But | however/contrast | I tried, **but** I failed. |
| **O** | Or | choice/alternative | We can walk, **or** we can drive. |
| **Y** | Yet | however/despite | It rained, **yet** we had fun. |
| **S** | So | therefore/result | I was tired, **so** I went to bed. |

**Compound Sentence Formula:**

**Independent Clause , FANBOYS Independent Clause**

**✓ Correct Examples:**
- The sun was shining, **so** we went to the beach.
- I wanted pizza, **but** my brother wanted tacos.
- She could study now, **or** she could study later.
- The test was difficult, **yet** most students passed.

**Important Rules:**

**Rule 1**: ALWAYS use a COMMA before the FANBOYS conjunction!
- ❌ Wrong: "I studied hard and I passed the test." (missing comma)
- ✅ Right: "I studied hard, and I passed the test."

**Rule 2**: BOTH sides must be COMPLETE sentences (independent clauses)!
- ❌ Wrong: "The dog barked, and ran away." ('ran away' is not a complete sentence)
- ✅ Right: "The dog barked, and he ran away." (both sides complete)

**Rule 3**: Don't confuse compound sentences with simple sentences that have compound verbs!
- **Simple (compound verb)**: "Sarah walked and talked." (one subject, two verbs - NO comma needed)
- **Compound**: "Sarah walked, and Maria talked." (two subjects, two verbs - COMMA needed)

---

**❌ ERROR 1: SENTENCE FRAGMENTS**

**Definition**: A fragment is an INCOMPLETE sentence that's missing a subject, a verb, or doesn't express a complete thought.

**Types of Fragments:**

**1. Missing Subject**
- ❌ Fragment: "Ran to the store." (Who ran?)
- ✅ Complete: "**She** ran to the store."

**2. Missing Verb**
- ❌ Fragment: "The tall building in the city." (What about it?)
- ✅ Complete: "The tall building in the city **collapsed**."

**3. Dependent Clause Standing Alone**
- ❌ Fragment: "Because it was raining." (Incomplete thought - what happened?)
- ✅ Complete: "**We stayed inside** because it was raining."
- ✅ Complete: "Because it was raining, **we stayed inside**."

**4. Phrase Fragments (missing both subject AND verb)**
- ❌ Fragment: "In the morning."
- ✅ Complete: "**We left** in the morning."

**How to Fix Fragments:**
1. **Add the missing subject or verb**
2. **Attach the fragment to a nearby complete sentence**
3. **Rewrite to create a complete thought**

**Fragment Fix Examples:**

**Example 1:**
- ❌ "Walking down the street. I saw my friend."
- ✅ "**While** walking down the street, I saw my friend." (attached)
- ✅ "**I was** walking down the street. I saw my friend." (added subject + verb)

**Example 2:**
- ❌ "The book on the table. It belongs to Maria."
- ✅ "The book on the table belongs to Maria." (combined)

---

**❌ ERROR 2: RUN-ON SENTENCES**

**Definition**: A run-on sentence incorrectly joins two or more independent clauses without proper punctuation or conjunctions.

**Two Types of Run-Ons:**

**1. Fused Sentence** (NO punctuation between independent clauses)
- ❌ Run-on: "I love reading **I read every day.**"
- ✅ Fixed: "I love reading**. I** read every day." (period)
- ✅ Fixed: "I love reading**, and I** read every day." (comma + FANBOYS)
- ✅ Fixed: "I love reading**; I** read every day." (semicolon)

**2. Comma Splice** (only a comma between independent clauses, NO conjunction)
- ❌ Run-on: "The movie was long**,** it was boring."
- ✅ Fixed: "The movie was long**. It** was boring." (period)
- ✅ Fixed: "The movie was long**, and it** was boring." (comma + FANBOYS)
- ✅ Fixed: "The movie was long**; it** was boring." (semicolon)

**How to Fix Run-Ons (4 Methods):**

**Method 1: Split into Two Sentences** (use a period)
- "I studied hard**.** I passed the test."

**Method 2: Use Comma + FANBOYS**
- "I studied hard**, so** I passed the test."

**Method 3: Use a Semicolon** (; )
- "I studied hard**;** I passed the test."

**Method 4: Make One Clause Dependent**
- "**Because** I studied hard, I passed the test."

---

**🎯 IDENTIFICATION STRATEGIES**

**To Identify a SIMPLE Sentence:**
- Find the subject and verb
- Check: Is there only ONE independent clause?
- Even with compound subjects/verbs, if it's ONE thought, it's simple!

**To Identify a COMPOUND Sentence:**
- Look for FANBOYS conjunctions
- Check BOTH sides: Are they BOTH complete sentences?
- Is there a comma before the FANBOYS?

**To Identify a FRAGMENT:**
- Read it alone
- Ask: "Is this a complete thought?"
- Check: Does it have BOTH a subject AND a verb?
- Ask: "Am I left hanging, wanting more information?"

**To Identify a RUN-ON:**
- Count the independent clauses (complete thoughts)
- If there are 2+, check the punctuation
- Is there proper punctuation OR a conjunction between them?
- Comma alone = comma splice (a type of run-on!)

---

**💡 WHY THIS MATTERS**

**For Writing:**
- Clear sentences make your ideas easy to understand
- Varying sentence types makes writing more interesting
- Avoiding fragments and run-ons shows writing maturity

**For Reading:**
- Understanding sentence structure improves comprehension
- Helps you analyze how authors construct complex ideas

**For Tests:**
- Identifying and correcting sentence errors is a common test question
- Writing assessments penalize fragments and run-ons

**For Speaking:**
- Complete sentences make you sound educated and professional

---

**✨ GRADE 6 WRITING TIP**

**Good writers use sentence VARIETY:**
- Mix simple and compound sentences
- Start sentences different ways
- Vary sentence length

**Example of Good Variety:**
"The storm approached quickly. Dark clouds covered the sky, and the wind began to howl. Everyone rushed inside. We were safe, but we were worried about the power going out."

(Simple → Compound → Simple → Compound = Good variety!)`,examples:[{text:"**Simple Sentence**: 'The excited students and their dedicated teacher prepared carefully for the important science fair.'",explanation:"This is a **simple sentence** even though it's long! Why? It has ONE subject (students and teacher) and ONE verb (prepared). It's one complete thought. Compound subject + one verb = still simple!"},{text:"**Compound Sentence**: 'The sun was shining brightly, so we decided to go to the beach for the afternoon.'",explanation:"This is a **compound sentence**: TWO complete thoughts joined by **comma + 'so'** (FANBOYS). Test: 'The sun was shining' = complete ✓ 'We decided to go to the beach' = complete ✓"},{text:"**Fragment → Fixed**: ❌ 'Because it was raining.' ✅ 'We stayed inside because it was raining.'",explanation:"**Fragment problem**: 'Because it was raining' leaves you hanging—what happened BECAUSE of the rain? **Fixed**: Added an independent clause 'We stayed inside' to complete the thought."},{text:"**Run-On → Fixed**: ❌ 'I love reading, I read every day.' ✅ 'I love reading, and I read every day.'",explanation:"**Run-on problem**: This is a **comma splice** (comma alone between two complete sentences). **Fixed**: Added FANBOYS conjunction 'and' after the comma. Could also use a period or semicolon."},{text:"**Tricky Example**: 'Maria studied hard and passed the test.' (Simple or Compound?)",explanation:"This is **SIMPLE**, not compound! Why? 'Passed the test' is NOT a complete sentence by itself (no subject). This is ONE subject (Maria) with TWO verbs (studied, passed). Compound verb ≠ compound sentence. NO comma needed!"}],quickPractice:{question:`Fix this sentence and identify what's wrong:

'My favorite sport is basketball, I play every weekend at the park.'

What type of error is this, and how can you fix it?`,hint:"Look carefully at the punctuation between the two complete thoughts...",answer:"**Error Type**: **Comma Splice** (a type of run-on). Two independent clauses are joined by only a comma with no conjunction. **Three Ways to Fix**: 1) **Period**: 'My favorite sport is basketball. I play every weekend.' 2) **Comma + FANBOYS**: 'My favorite sport is basketball, and I play every weekend.' 3) **Semicolon**: 'My favorite sport is basketball; I play every weekend.' All three are correct!"}}},{id:"grammar-2-2",title:"Practice: Sentence Structure, Fragments, and Run-Ons",type:"exercise",content:{instructions:"Identify the sentence type or error. Remember: Simple = one independent clause, Compound = two independent clauses joined properly, Fragment = incomplete, Run-on = improperly joined!",questions:[{id:"q1",question:"The teacher explained the lesson clearly, and the students took detailed notes.",options:["Simple sentence","Compound sentence","Fragment","Run-on sentence"],correctAnswer:1,explanation:"This is a **compound sentence** with two independent clauses: 'The teacher explained the lesson' + 'the students took notes,' joined by **comma + 'and'** (FANBOYS)."},{id:"q2",question:"My brother and I walked to the store after dinner.",options:["Simple sentence","Compound sentence","Fragment","Run-on sentence"],correctAnswer:0,explanation:"This is a **simple sentence** with a compound subject ('My brother and I') but only ONE verb ('walked'). Compound subject ≠ compound sentence!"},{id:"q3",question:"I studied hard for the test, yet I still felt nervous about it.",options:["Simple sentence","Compound sentence","Fragment","Run-on sentence"],correctAnswer:1,explanation:"This is a **compound sentence** with two complete thoughts joined by **comma + 'yet'** (FANBOYS). Both sides are independent clauses."},{id:"q4",question:"Because it was raining heavily outside.",options:["Simple sentence","Compound sentence","Fragment","Run-on sentence"],correctAnswer:2,explanation:"This is a **fragment**! It starts with 'Because' (makes it dependent) and doesn't have an independent clause. We're left hanging—what happened because it was raining? Incomplete thought!"},{id:"q5",question:"The movie was long, it was also very boring.",options:["Simple sentence","Compound sentence","Fragment","Run-on (comma splice)"],correctAnswer:3,explanation:"This is a **comma splice** (type of run-on)! Two complete sentences joined by only a comma with NO conjunction. Fix: Add period, add FANBOYS after comma, or use semicolon."},{id:"q6",question:"Sarah ran quickly and jumped over the fence.",options:["Simple sentence","Compound sentence","Fragment","Run-on sentence"],correctAnswer:0,explanation:"This is a **simple sentence** with a compound verb ('ran' and 'jumped'). One subject (Sarah), two verbs. NO comma needed before 'and' because this isn't a compound sentence!"},{id:"q7",question:"I love reading books I read every single day after school.",options:["Simple sentence","Compound sentence","Fragment","Run-on (fused sentence)"],correctAnswer:3,explanation:"This is a **fused sentence** (run-on)! Two complete sentences ('I love reading books' + 'I read every day') with NO punctuation between them. Fix: Add period, comma + FANBOYS, or semicolon."},{id:"q8",question:"The tall building in downtown San Francisco.",options:["Simple sentence","Compound sentence","Fragment","Run-on sentence"],correctAnswer:2,explanation:"This is a **fragment**! It has a subject ('building') but NO VERB. What about the building? Incomplete thought. Fix: 'The tall building in downtown San Francisco **collapsed**.'"},{id:"q9",question:"We could go to the movies, or we could stay home and watch a show.",options:["Simple sentence","Compound sentence","Fragment","Run-on sentence"],correctAnswer:1,explanation:"This is a **compound sentence**. Two complete thoughts: 'We could go to the movies' + 'we could stay home,' joined by **comma + 'or'** (FANBOYS). Proper punctuation!"},{id:"q10",question:"The excited students prepared for the big game.",options:["Simple sentence","Compound sentence","Fragment","Run-on sentence"],correctAnswer:0,explanation:"This is a **simple sentence**. ONE subject ('students'), ONE verb ('prepared'), ONE complete thought. Even though it has modifiers ('excited,' 'for the big game'), it's still just one independent clause."}]}}]},{id:"grammar-3",title:"Chapter 3: Mastering Pronouns - Part 1",lessons:[{id:"grammar-3-1",title:"Pronoun Case: Subjective, Objective, and Possessive",type:"lesson",content:{introduction:"Mastering pronouns is arguably the most important grammar goal for 6th graders in California. Understanding pronoun case ensures your writing is clear and correct.",explanation:`**Three Types of Pronoun Case:**

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
- Right: "Come with Sarah and **me**."`,examples:[{text:"Wrong: 'The prize went to Maria and I.' | Right: 'The prize went to Maria and me.'",explanation:"After the preposition 'to,' we need the objective case 'me.' Test: Would you say 'to I'? No, you'd say 'to me.'"},{text:"Wrong: 'Her and I studied together.' | Right: 'She and I studied together.'",explanation:"As the subject doing the action (studying), we need subjective case 'She and I.'"},{text:"The book is mine, and the pencil is hers.",explanation:"Both 'mine' and 'hers' are possessive pronouns showing ownership."}]}},{id:"grammar-3-2",title:"Practice: Pronoun Case",type:"exercise",content:{instructions:"Choose the correct pronoun for each sentence. Remember to use the 'remove the other person' trick for compound subjects/objects!",questions:[{id:"q1",question:"_____ and Sarah went to the library to study for the exam.",options:["Me","I","Myself","Mine"],correctAnswer:1,explanation:"Use '**I**' (subjective case) because the pronoun is the subject doing the action. Test: Remove 'and Sarah' → 'I went' sounds correct, 'Me went' does not."},{id:"q2",question:"The teacher gave the assignment to Carlos and _____.",options:["I","me","myself","mine"],correctAnswer:1,explanation:"Use '**me**' (objective case) after the preposition 'to.' Test: Remove 'Carlos and' → Would you say 'to I' or 'to me'? Always 'to me.'"},{id:"q3",question:"Between you and _____, I think this plan won't work.",options:["I","me","myself","my"],correctAnswer:1,explanation:"Use '**me**' (objective case) after the preposition 'between.' This is a VERY common error! Never say 'between you and I'—always 'between you and me.'"},{id:"q4",question:"My sister and _____ finished our science project early.",options:["me","I","myself","mine"],correctAnswer:1,explanation:"Use '**I**' (subjective case) because the pronoun is part of the subject doing the action. Test: Remove 'My sister and' → 'I finished' is correct, 'me finished' is not."},{id:"q5",question:"The coach asked Mike and _____ to lead the team warm-ups.",options:["I","me","myself","we"],correctAnswer:1,explanation:"Use '**me**' (objective case) because the pronoun receives the action of being asked. Test: Remove 'Mike and' → 'asked me' not 'asked I.'"},{id:"q6",question:"That colorful backpack on the floor is _____, not yours.",options:["my","me","mine","I"],correctAnswer:2,explanation:"Use '**mine**' (possessive pronoun) to show ownership standing alone. 'My' would need a noun after it (my backpack), but 'mine' can stand by itself."},{id:"q7",question:"The principal congratulated both the students and _____ on the successful event.",options:["we","us","our","ours"],correctAnswer:1,explanation:"Use '**us**' (objective case) because the pronoun receives the action of being congratulated. Test: Remove 'the students and' → 'congratulated us' not 'congratulated we.'"},{id:"q8",question:"_____ students completed all the homework assignments on time.",options:["Us","We","Our","Ours"],correctAnswer:1,explanation:"Use '**We**' (subjective case) because the pronoun is the subject doing the action (completing). Test: 'We completed' is correct. Note: This isn't 'we students' vs. 'us students'—the pronoun IS the subject here!"},{id:"q9",question:"The prize for best essay went to David and _____.",options:["I","me","myself","my"],correctAnswer:1,explanation:"Use '**me**' (objective case) after the preposition 'to.' Test: Remove 'David and' → 'went to me' not 'went to I.' This is one of the most commonly tested pronoun errors!"},{id:"q10",question:"_____ and her brother practice piano together every afternoon.",options:["Her","She","Hers","Herself"],correctAnswer:1,explanation:"Use '**She**' (subjective case) because the pronoun is part of the compound subject doing the action (practicing). Test: Remove 'and her brother' → 'She practices' is correct, 'Her practices' is not."}]}}]},{id:"grammar-4",title:"Chapter 4: Mastering Pronouns - Part 2",lessons:[{id:"grammar-4-1",title:"Intensive Pronouns and Clear Antecedents",type:"lesson",content:{introduction:"Beyond basic pronoun case, Grade 6 students must master intensive pronouns for emphasis and ensure all pronouns have clear antecedents (the nouns they refer to).",explanation:`**Intensive Pronouns (Adding Emphasis)**

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
4. Avoid using "they" without a clear antecedent`,examples:[{text:"The director himself approved the final script.",explanation:"The intensive pronoun 'himself' emphasizes that the director personally approved it."},{text:`Vague: 'Tom told Alex that he needed to study more.' | Clear: 'Tom told Alex, "You need to study more."'`,explanation:"Who needs to study - Tom or Alex? Using direct dialogue or the person's name makes it clear."},{text:"Vague: 'When I walked my dog, it was beautiful.' | Clear: 'When I walked my dog, the weather was beautiful.'",explanation:"What was beautiful? The dog or the weather? Repeating the noun clarifies the meaning."}]}},{id:"grammar-4-2",title:"Practice: Intensive Pronouns and Clear Antecedents",type:"exercise",content:{instructions:"Identify correct intensive pronoun use and fix vague pronoun references. Remember: The Mirror Test—remove the intensive pronoun and the sentence should still work!",questions:[{id:"q1",question:"Which sentence correctly uses an intensive pronoun?",options:["Myself completed the project.","I completed the project myself.","The project was completed by myself.","Me and myself completed it."],correctAnswer:1,explanation:"Correct! '**Myself**' adds emphasis that I did it personally. Never use 'myself' as the subject! Test: Remove 'myself' → 'I completed the project' still works ✓"},{id:"q2",question:"Identify the vague pronoun problem: 'Lisa called Maria, and she said she would come over later.'",options:["No vague pronouns","Both 'she' pronouns are vague","Only the first 'she' is vague","Only the second 'she' is vague"],correctAnswer:1,explanation:`**Both** uses of 'she' are vague—we can't tell if Lisa or Maria is coming over, or who said it. Fix: 'Lisa called Maria and said, **"I'll** come over later."'`},{id:"q3",question:"Which revision fixes this vague pronoun? 'The dog chased the cat until it got tired.'",options:["Keep it the same","The dog chased the cat until the dog got tired.","The dog chased the cat until they got tired.","It chased it until it got tired."],correctAnswer:1,explanation:"Replacing 'it' with '**the dog**' makes clear WHO got tired. In the original, we don't know if the dog or cat got tired!"},{id:"q4",question:"Which sentence uses an intensive pronoun correctly?",options:["The students themselves organized the entire event.","Themselves organized the event.","The event was organized by themselves.","Themselves and I organized it."],correctAnswer:0,explanation:"'**Themselves**' correctly emphasizes that the students (not teachers or parents) organized the event. Test: Remove 'themselves' → still makes sense ✓"},{id:"q5",question:"Fix the vague pronoun: 'In the news, they said it would rain tomorrow.' What is the main problem?",options:["No problem","'They' has no clear antecedent","'It' is used incorrectly","Both pronouns are wrong"],correctAnswer:1,explanation:"Who is '**they**'? Better: '**The meteorologist** said it would rain' or '**The forecast** predicts rain.' Always identify WHO 'they' refers to!"},{id:"q6",question:"The President _____ delivered the important speech to the nation.",options:["himself","hisself","themselves","itself"],correctAnswer:0,explanation:"Use '**himself**' (intensive pronoun) to emphasize the President personally delivered it. Note: 'hisself' is NOT a word—always use 'himself'!"},{id:"q7",question:"Which sentence has a vague pronoun that needs fixing?",options:["Maria told her mom that she needed a break.","The teacher herself graded all the tests.","I finished my homework before dinner.","They went to the movies together."],correctAnswer:0,explanation:`'**She**' is vague—who needs a break, Maria or her mom? Fix: 'Maria told her mom, **"I need a break."**' or 'Maria said **she herself** needed a break.'`},{id:"q8",question:"Which is the correct use of an intensive pronoun?",options:["Myself and Sarah went shopping.","Sarah went shopping with myself.","Sarah and I ourselves went shopping.","Sarah herself went shopping without help."],correctAnswer:3,explanation:"'**Herself**' correctly emphasizes Sarah did it alone. Options A & B misuse 'myself' as subject/object. Option C is grammatically correct but awkward—better: 'Sarah and I went shopping ourselves.'"},{id:"q9",question:"Fix this vague pronoun: 'When I put the book on the shelf, it broke.' What's unclear?",options:["Nothing is unclear","Did the book or the shelf break?","Who put the book there?","When did this happen?"],correctAnswer:1,explanation:"'**It**' is vague—did the book or shelf break? Fix: 'When I put the book on the shelf, **the shelf broke**' or '**the book's spine broke**.'"},{id:"q10",question:"The team members _____ raised all the money for the trip through hard work.",options:["theirselves","themselves","themself","theyselves"],correctAnswer:1,explanation:"'**Themselves**' is correct (intensive pronoun emphasizing the team did it). Note: 'theirselves,' 'themself,' and 'theyselves' are NOT words!"}]}}]},{id:"grammar-5",title:"Chapter 5: Punctuation for Clarity",lessons:[{id:"grammar-5-1",title:"Parenthetical Elements and Coordinate Adjectives",type:"lesson",content:{introduction:"California Grade 6 standards emphasize using punctuation to manage extra information in sentences. Learning to punctuate parenthetical elements and coordinate adjectives makes your writing clearer and more sophisticated.",explanation:`**Parenthetical Elements (Non-Essential Information)**

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
  - NO comma! "Beautiful" modifies "silk dress."`,examples:[{text:"My brother, who is in college, visits every weekend.",explanation:"The phrase 'who is in college' is parenthetical (extra info) and is set off with commas."},{text:"The final exam—the hardest one all year—will cover everything.",explanation:"Dashes emphasize the parenthetical information about the exam being the hardest."},{text:"It was a cold, rainy November morning.",explanation:"Cold and rainy are coordinate adjectives (cold and rainy works; rainy, cold works), so use a comma."}]}},{id:"grammar-5-2",title:"Practice: Punctuation for Clarity",type:"exercise",content:{instructions:"Choose the correctly punctuated sentence or identify whether commas are needed. Remember the And/Reverse Test for coordinate adjectives!",questions:[{id:"q1",question:"Which sentence is punctuated correctly?",options:["The principal Mr. Smith gave a speech.","The principal, Mr. Smith gave a speech.","The principal, Mr. Smith, gave a speech.","The principal Mr. Smith, gave a speech."],correctAnswer:2,explanation:"The appositive '**Mr. Smith**' renames 'the principal' and must be set off with commas on **both sides**. Test: Remove 'Mr. Smith' → sentence still works!"},{id:"q2",question:"Do these adjectives need a comma? 'It was a long exhausting journey.'",options:["Yes - they are coordinate adjectives","No - they are not coordinate adjectives","Use a semicolon instead","Use a dash instead"],correctAnswer:0,explanation:"**Yes!** And Test: 'long **and** exhausting' ✓ | Reverse Test: 'exhausting, long' ✓. Both work, so they're coordinate. Correct: 'It was a long**,** exhausting journey.'"},{id:"q3",question:"Which sentence is punctuated correctly?",options:["The movie which won five awards was amazing.","The movie, which won five awards was amazing.","The movie, which won five awards, was amazing.","The movie which, won five awards, was amazing."],correctAnswer:2,explanation:"The clause '**which won five awards**' is non-essential (parenthetical) and must have commas on **both sides**. Test: Remove it → 'The movie was amazing' still works!"},{id:"q4",question:"Do these adjectives need a comma? 'She bought a beautiful silver bracelet.'",options:["Yes - they are coordinate adjectives","No - they are not coordinate adjectives","Use parentheses instead","Use dashes instead"],correctAnswer:1,explanation:"**No comma needed.** And Test: 'beautiful **and** silver' sounds awkward ✗ | 'Beautiful' describes 'silver bracelet' as a **unit**, not silver by itself. Not coordinate!"},{id:"q5",question:"Which punctuation best emphasizes the parenthetical element? 'The winner ___ my best friend ___ jumped for joy.'",options:["Commas: winner, my best friend, jumped","Parentheses: winner (my best friend) jumped","Dashes: winner—my best friend—jumped","No punctuation needed"],correctAnswer:2,explanation:"**Dashes** create the most emphasis and excitement! All three *could* work, but dashes dramatically highlight that YOUR BEST FRIEND won!"},{id:"q6",question:"Which sentence correctly uses commas with coordinate adjectives?",options:["It was a bright, sunny day.","It was a bright sunny, day.","It was a, bright sunny day.","It was a bright sunny day."],correctAnswer:0,explanation:"Correct! And Test: 'bright **and** sunny day' ✓ | Reverse Test: 'sunny, bright day' ✓. They're coordinate, so comma goes **between** them."},{id:"q7",question:"Which sentence correctly punctuates the parenthetical element?",options:["My sister who lives in New York visits often.","My sister, who lives in New York, visits often.","My sister who, lives in New York visits often.","My sister, who lives in New York visits often."],correctAnswer:1,explanation:"'**Who lives in New York**' is extra information (parenthetical). Commas on **both sides**! Test: 'My sister visits often' → still makes sense without the extra info."},{id:"q8",question:"Do these adjectives need a comma? 'The old stone bridge collapsed.'",options:["Yes - coordinate adjectives need a comma","No - these are not coordinate adjectives","Use a dash instead","Use parentheses instead"],correctAnswer:1,explanation:"**No comma.** And Test: 'old **and** stone bridge' sounds wrong ✗ | 'Old' modifies 'stone bridge' as a unit. Not coordinate! 'Stone' is part of what makes it a bridge."},{id:"q9",question:"Which punctuation mark should be used? 'My favorite book ___ the one with the blue cover ___ is missing.'",options:["Commas on both sides","Parentheses on both sides","Dashes on both sides","All three could work depending on emphasis"],correctAnswer:3,explanation:"**All three work!** Commas (neutral), Parentheses (extra aside), or Dashes (emphasis). Choose based on how much attention you want to draw to 'the one with the blue cover.'"},{id:"q10",question:"Do these adjectives need a comma? 'She wore a warm fuzzy sweater.'",options:["Yes - they are coordinate adjectives","No - they are not coordinate adjectives","Sometimes yes, sometimes no","Use a semicolon"],correctAnswer:0,explanation:"**Yes!** And Test: 'warm **and** fuzzy sweater' ✓ (common phrase!) | Reverse Test: 'fuzzy, warm sweater' ✓. Both work, so they're coordinate. Correct: 'warm**,** fuzzy sweater.'"}]}}]},{id:"grammar-6",title:"Chapter 6: Sentence Variety and Style",lessons:[{id:"grammar-6-1",title:"Simple, Compound, and Complex Sentences",type:"lesson",content:{introduction:"By 6th grade, the goal is to stop writing choppy sentences and start varying your style. Using different sentence patterns shows how ideas relate and makes writing more interesting.",explanation:`**Three Types of Sentences:**

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
"The storm began suddenly. (simple) Dark clouds rolled in, and lightning flashed across the sky. (compound) Although we were scared, we stayed calm and found shelter. (complex) We were safe. (simple)"`,examples:[{text:"Complex: Although the test was difficult, I did my best.",explanation:"Dependent clause 'Although the test was difficult' + comma + independent clause 'I did my best.'"},{text:"Compound: The book was long, but it was very interesting.",explanation:"Two independent clauses joined by comma + 'but' (FANBOYS)."},{text:"Simple: The students completed the assignment.",explanation:"One independent clause with subject (students) and verb (completed)."}]}},{id:"grammar-6-2",title:"Practice: Sentence Variety",type:"exercise",content:{instructions:"Identify sentence types and choose correctly punctuated sentences.",questions:[{id:"q1",question:"What type of sentence is this? 'Because it was raining, we canceled the picnic.'",options:["Simple","Compound","Complex","Fragment"],correctAnswer:2,explanation:"This is complex. It has a dependent clause 'Because it was raining' and an independent clause 'we canceled the picnic.'"},{id:"q2",question:"Which sentence is punctuated correctly?",options:["I want to go swimming but, it's too cold.","I want to go swimming, but it's too cold.","I want to go swimming but it's too cold.","I want to go, swimming but it's too cold."],correctAnswer:1,explanation:"Compound sentences need a comma BEFORE the coordinating conjunction (but)."},{id:"q3",question:"What type of sentence is this? 'The team practiced hard, and they won the championship.'",options:["Simple","Compound","Complex","Fragment"],correctAnswer:1,explanation:"This is compound. Two independent clauses joined by comma + 'and.'"},{id:"q4",question:"Which sentence is punctuated correctly?",options:["When the bell rings we will go to lunch.","When the bell rings, we will go to lunch.","When, the bell rings we will go to lunch.","When the bell, rings we will go to lunch."],correctAnswer:1,explanation:"When a dependent clause comes first in a complex sentence, use a comma after it."},{id:"q5",question:"What type of sentence is this? 'My sister and I walked to the park and played on the swings.'",options:["Simple","Compound","Complex","Run-on"],correctAnswer:0,explanation:"This is simple (not compound). It has a compound subject and compound verb, but it's still one independent clause."},{id:"q6",question:"Which revision creates a complex sentence? Original: 'The sun set. The temperature dropped.'",options:["The sun set, and the temperature dropped.","When the sun set, the temperature dropped.","The sun set; the temperature dropped.","The sun set, the temperature dropped."],correctAnswer:1,explanation:"Adding '**When**' creates a dependent clause, making it a complex sentence. Option A is compound (two independent clauses)."},{id:"q7",question:"What type of sentence is this? 'Although she was tired, Maria finished her homework.'",options:["Simple","Compound","Complex","Fragment"],correctAnswer:2,explanation:"This is **complex**. Dependent clause '**Although** she was tired' + independent clause 'Maria finished her homework.' 'Although' is an AAAWWUBBIS word!"},{id:"q8",question:"Which sentence combines these correctly as a complex sentence? 'The movie started. We arrived.'",options:["The movie started, and we arrived.","Before we arrived, the movie started.","The movie started; we arrived.","The movie started we arrived."],correctAnswer:1,explanation:"'**Before** we arrived' creates a dependent clause (AAAWWUBBIS!), making it complex. Option A is compound, Option C uses a semicolon (compound), Option D is a run-on."},{id:"q9",question:"What type of sentence is this? 'The students studied hard, yet some still failed the test.'",options:["Simple","Compound","Complex","Run-on"],correctAnswer:1,explanation:"This is **compound**. Two independent clauses: 'The students studied hard' + 'some still failed the test,' joined by comma + '**yet**' (FANBOYS)."},{id:"q10",question:"Which sentence needs a comma? Select the correctly punctuated version.",options:["After the game ended we went home.","After the game ended, we went home.","After, the game ended we went home.","After the game, ended we went home."],correctAnswer:1,explanation:"When a dependent clause (starting with **After**, an AAAWWUBBIS word) comes FIRST, put a comma after it! '**After the game ended,** we went home.'"}]}}]},{id:"grammar-7",title:"Chapter 7: Avoiding Common Errors",lessons:[{id:"grammar-7-1",title:"Pronoun Shifts and Misplaced Modifiers",type:"lesson",content:{introduction:"Grade 6 is the year to clean up common errors. Two major pitfalls are pronoun shifts (switching person) and misplaced modifiers (descriptive phrases in the wrong place).",explanation:`**Problem 1: Pronoun Shifts**

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
Ask yourself: "What is this phrase describing?" Then place it next to that word!`,examples:[{text:"Wrong: 'When you read this book, one will learn a lot.' | Right: 'When you read this book, you will learn a lot.'",explanation:"Don't shift from 'you' (second person) to 'one' (third person). Stay consistent."},{text:"Wrong: 'The car belongs to my neighbor with the red door.' | Right: 'The car with the red door belongs to my neighbor.'",explanation:"The phrase 'with the red door' should be next to 'car,' not 'neighbor,' unless the neighbor has a red door!"},{text:"Wrong: 'If one wants to improve, you must practice.' | Right: 'If one wants to improve, one must practice.' OR 'If you want to improve, you must practice.'",explanation:"Don't mix 'one' and 'you' - pick one and stick with it throughout."}]}},{id:"grammar-7-2",title:"Practice: Avoiding Common Errors",type:"exercise",content:{instructions:"Identify and correct pronoun shifts and misplaced modifiers.",questions:[{id:"q1",question:"Which sentence has a pronoun shift error?",options:["When I exercise regularly, I feel better.","When you exercise regularly, you feel better.","When I exercise regularly, you feel better.","When people exercise regularly, they feel better."],correctAnswer:2,explanation:"Option C shifts from first person 'I' to second person 'you.' This is inconsistent."},{id:"q2",question:"Which sentence fixes the misplaced modifier? 'The girl fed the dog wearing pajamas.'",options:["The girl wearing pajamas fed the dog.","The dog fed the girl wearing pajamas.","Wearing pajamas fed the dog the girl.","The girl fed wearing pajamas the dog."],correctAnswer:0,explanation:"The girl was wearing pajamas, not the dog. Place 'wearing pajamas' next to 'girl.'"},{id:"q3",question:"Which sentence has correct pronoun consistency?",options:["If you want to learn, one should pay attention.","If you want to learn, we should pay attention.","If you want to learn, you should pay attention.","If you want to learn, I should pay attention."],correctAnswer:2,explanation:"Correct! Uses 'you' consistently throughout the sentence."},{id:"q4",question:"Which sentence fixes the misplaced modifier? 'We watched the fireworks sitting on the blanket.'",options:["Sitting on the blanket fireworks we watched.","The fireworks sitting on the blanket we watched.","Sitting on the blanket, we watched the fireworks.","We watched sitting on the blanket the fireworks."],correctAnswer:2,explanation:"We were sitting on the blanket (not the fireworks). The modifier should be at the beginning, clearly modifying 'we.'"},{id:"q5",question:"Identify the pronoun shift: 'When students study hard, you can achieve better grades.'",options:["No error","Shifts from third person (students) to second person (you)","Shifts from first person to third person","Shifts from plural to singular"],correctAnswer:1,explanation:"Correct! Shifts from third person 'students' to second person 'you.' Should be: 'When students study hard, they can achieve better grades.'"},{id:"q6",question:"Which sentence has a correctly placed modifier?",options:["I found my keys looking under the couch.","Looking under the couch, I found my keys.","I found looking under the couch my keys.","My keys looking under the couch I found."],correctAnswer:1,explanation:"Correct! '**Looking under the couch**' clearly modifies 'I' and is properly placed at the beginning of the sentence."},{id:"q7",question:"Which sentence avoids a pronoun shift?",options:["If one wants success, you must work hard.","If one wants success, one must work hard.","If one wants success, they must work hard.","If one wants success, we must work hard."],correctAnswer:1,explanation:"Correct! Stays consistent with '**one**' throughout. Don't mix 'one' with 'you,' 'they,' or 'we.'"},{id:"q8",question:"Which sentence fixes the misplaced modifier? 'Running late, the bus had already left.'",options:["The bus running late had already left.","Running late, I missed the bus.","The bus had already left running late.","Already left the bus running late."],correctAnswer:1,explanation:"**I** was running late, not the bus! The modifier 'Running late' should be next to who was late. Fixed: '**Running late, I** missed the bus.'"},{id:"q9",question:"Identify the error: 'When we practice daily, you will see improvement.'",options:["No error","Pronoun shift from 'we' (first person plural) to 'you' (second person)","Misplaced modifier","Missing comma"],correctAnswer:1,explanation:"**Pronoun shift!** Shifts from '**we**' (first person) to '**you**' (second person). Fix: 'When we practice daily, **we** will see improvement.'"},{id:"q10",question:"Which sentence has NO misplaced modifier?",options:["Covered in mud, I hosed off the dog.","I hosed off the dog covered in mud.","The dog I hosed off covered in mud.","Covered in mud hosed off the dog I."],correctAnswer:1,explanation:"Correct! '**The dog**' was covered in mud, and 'covered in mud' is placed right next to 'dog.' Option A makes it sound like **I** was covered in mud!"}]}}]}]},{id:"reading",title:"Reading Comprehension",icon:"📖",description:"Develop critical reading and analysis skills",chapters:[{id:"reading-1",title:"Chapter 1: Main Idea and Supporting Details",lessons:[{id:"reading-1-1",title:"Main Idea and Supporting Details: The Umbrella & Raindrops",type:"lesson",content:{introduction:"Understanding main idea and supporting details is the foundation of reading comprehension. Think of the main idea as an UMBRELLA ☂️ that covers everything, and the supporting details as RAINDROPS 💧 that fall beneath it. In Grade 6, you'll also learn the crucial difference between a TOPIC and a MAIN IDEA.",explanation:`**🎯 THE UMBRELLA & RAINDROPS METAPHOR**

**Main Idea** = The UMBRELLA ☂️
- The BIG point the author is making
- The most important message
- What the ENTIRE passage is mostly about
- Usually one sentence that covers everything

**Supporting Details** = The RAINDROPS 💧
- Facts, examples, statistics, descriptions
- Evidence that PROVES or EXPLAINS the main idea
- The specific information that supports the umbrella
- Multiple details that all connect to the main idea

---

**📖 TOPIC vs. MAIN IDEA (Critical Grade 6 Distinction!)**

**TOPIC** = What the passage is ABOUT (usually 1-2 words)
- Just identifies the subject
- No complete thought
- Like a title or headline

**MAIN IDEA** = What the author is SAYING about the topic (a complete sentence)
- Makes a POINT about the topic
- A complete thought with a subject and verb
- Tells the reader something specific

**Example:**
- **Topic**: Sharks 🦈
- **Main Idea**: "Sharks are essential to the ocean's ecosystem because they keep the food chain in balance."

**Why This Matters**: The topic tells you the subject, but the main idea tells you the MESSAGE.

---

**🔍 HOW TO FIND THE MAIN IDEA**

**Strategy 1: The Title Clue**
- Look at the title and headings
- They often hint at the main idea

**Strategy 2: The First & Last Sentence Rule**
- Main ideas are often in the FIRST sentence (topic sentence)
- Or in the LAST sentence (conclusion)
- Read these carefully!

**Strategy 3: The Repetition Test**
- What words or concepts are REPEATED?
- What does the author keep coming back to?
- That's likely the main idea!

**Strategy 4: The "So What?" Question**
- Ask yourself: "What is the author's POINT?"
- "What does the author want me to understand?"
- "If I could only remember ONE thing, what would it be?"

**Strategy 5: The Umbrella Test**
- Does this idea "cover" ALL the details in the passage?
- If a detail doesn't fit under your "umbrella," it's probably not the main idea

---

**💧 HOW TO IDENTIFY SUPPORTING DETAILS**

**Supporting details answer these questions:**
- **WHO?** - People or characters involved
- **WHAT?** - Specific events or facts
- **WHEN?** - Time information
- **WHERE?** - Place information
- **WHY?** - Reasons or causes
- **HOW?** - Methods or processes

**Types of Supporting Details:**

**1. Facts & Statistics**
- "Over 500 species of sharks exist worldwide."
- Numbers, dates, proven information

**2. Examples**
- "For instance, great white sharks help control seal populations."
- Specific cases that illustrate the point

**3. Descriptions**
- "Sharks have keen senses, including the ability to detect electrical signals."
- Sensory details and characteristics

**4. Reasons & Explanations**
- "Sharks are important because they remove sick and weak animals from the population."
- The "why" behind the main idea

**5. Expert Opinions or Quotes**
- "According to marine biologist Dr. Smith, 'Sharks are the ocean's doctors.'"
- What authorities say about the topic

---

**📝 GRADE 6 SKILL: OBJECTIVE SUMMARIZING**

**Objective** = Without personal opinions or feelings

**How to Summarize Objectively:**

**DO:**
✅ State the main idea
✅ Include key supporting details (2-3 most important)
✅ Use your own words (paraphrase)
✅ Keep it brief (typically 3-5 sentences)
✅ Stay neutral - just the facts!

**DON'T:**
❌ Include your opinion ("I think...", "I believe...")
❌ Add judgments ("This is boring", "This is great")
❌ Include minor details
❌ Copy sentences word-for-word (without quotes)
❌ Add information not in the passage

**Example of SUBJECTIVE (Wrong):**
"I think sharks are really cool and scary. They are my favorite ocean animal. Everyone should learn about them because they're awesome."

**Example of OBJECTIVE (Correct):**
"Sharks play an essential role in ocean ecosystems by maintaining balance in the food chain. They help control populations of other marine animals and remove sick individuals from the population. Although often feared, sharks are critical to ocean health."

---

**🎯 THE MAIN IDEA FORMULA**

**Topic + Author's Point = Main Idea**

**Examples:**

**Example 1:**
- **Topic**: Recycling
- **Author's Point**: Important for reducing waste
- **Main Idea**: "Recycling is important because it significantly reduces the amount of waste sent to landfills."

**Example 2:**
- **Topic**: Exercise
- **Author's Point**: Benefits both body and mind
- **Main Idea**: "Regular exercise benefits both physical health and mental well-being."

**Example 3:**
- **Topic**: Honeybees
- **Author's Point**: Critical for food production
- **Main Idea**: "Honeybees are critical to food production because they pollinate many of the crops humans rely on."

---

**⚠️ COMMON MISTAKES TO AVOID**

**Mistake 1: Choosing a DETAIL as the Main Idea**
- Details are too specific
- The main idea should cover ALL the details

**Mistake 2: Being Too General**
- "This passage is about animals." (Too broad!)
- The main idea should be specific to THIS passage

**Mistake 3: Confusing Topic with Main Idea**
- Topic: "Dogs" ❌ (just one word, not a complete idea)
- Main Idea: "Dogs make excellent companions because they are loyal and loving." ✓

**Mistake 4: Focusing on One Paragraph**
- The main idea should cover the ENTIRE passage
- Don't just focus on the first or last paragraph

---

**💡 PRACTICE STRATEGY: The 3-Step Method**

**Step 1: IDENTIFY THE TOPIC**
- What is this mostly about? (1-2 words)

**Step 2: FIND THE AUTHOR'S POINT**
- What is the author saying about the topic?
- What's the message or lesson?

**Step 3: COMBINE THEM**
- Topic + Point = Main Idea (complete sentence)

**Quick Practice:**
Passage talks about how dolphins communicate using various sounds.
- **Step 1 - Topic**: Dolphin communication
- **Step 2 - Author's Point**: They use various sounds
- **Step 3 - Main Idea**: "Dolphins communicate with each other using a variety of complex sounds including clicks and whistles."

---

**🎓 WHY THIS MATTERS**

**For Tests:**
- Main idea questions are on EVERY reading test
- You must distinguish between main ideas and details
- Summarizing shows you understood the passage

**For School:**
- Understanding main ideas helps you study effectively
- You can identify what's most important
- Better note-taking skills

**For Life:**
- Helps you understand news articles, instructions, information
- Critical thinking skill for all subjects
- Essential for college and career success`,examples:[{text:"**Example Passage**: 'Dolphins are highly intelligent marine mammals. They can learn complex tricks and communicate with each other using clicks and whistles. Scientists have observed dolphins working together to solve problems and even using tools. Some dolphins have been seen using sponges to protect their noses while hunting for food on the ocean floor.'",explanation:`**Topic**: Dolphins
**Main Idea (Umbrella ☂️)**: Dolphins are highly intelligent marine mammals.
**Supporting Details (Raindrops 💧)**:
- They learn complex tricks
- They communicate using sounds
- They work together to solve problems  
- They use tools like sponges

**Notice**: All the details 'fit under' the umbrella of intelligence!`},{text:"**Objective Summary Example**: Based on the dolphin passage above.",explanation:`**Objective Summary**: 'Dolphins demonstrate high intelligence through various behaviors. They can learn tricks, communicate using clicks and whistles, solve problems cooperatively, and even use tools such as sponges for protection while hunting. These abilities show that dolphins are among the most intelligent marine mammals.'

**Why it's objective**: No personal opinions ("I think"), just facts from the passage. Uses own words. Includes main idea + key details.`}]}},{id:"reading-1-2",title:"Practice: Main Idea and Supporting Details",type:"exercise",content:{instructions:"Read each passage carefully and answer the questions. Remember: Topic (1-2 words) vs. Main Idea (complete sentence). Use the Umbrella & Raindrops metaphor!",passage:`**Passage 1 (Questions 1-5):**

The California condor is one of the world's rarest birds. By 1987, only 27 California condors remained in the wild due to habitat loss, hunting, and lead poisoning. Scientists captured all remaining birds and started a careful breeding program in captivity. Thanks to these conservation efforts, there are now over 500 California condors. About half of them fly free in California, Arizona, and Utah. Although the population has grown significantly, the California condor is still endangered. Scientists continue to monitor and protect these magnificent birds to ensure their survival.

**Passage 2 (Questions 6-10):**

Solar energy is becoming increasingly popular as a renewable power source. Unlike fossil fuels, solar panels produce electricity without releasing harmful greenhouse gases into the atmosphere. Solar panels work by converting sunlight directly into electrical energy that can power homes and businesses. While the initial cost of installing solar panels can be expensive, they typically pay for themselves within 10-15 years through reduced electricity bills. Additionally, many governments offer tax credits and incentives to encourage solar panel installation. As technology improves, solar panels are becoming more efficient and affordable for average homeowners.

**Passage 3 (Questions 11-15):**

The ancient Library of Alexandria in Egypt was one of the largest and most significant libraries of the ancient world. Founded around 300 BCE, it housed hundreds of thousands of scrolls containing knowledge from across the known world. Scholars from many countries traveled to Alexandria to study mathematics, astronomy, medicine, and philosophy. The library served not just as a repository for books, but as a center of learning and research. Tragically, the library was destroyed over time through a series of fires and conflicts. The loss of the Library of Alexandria is considered one of history's greatest cultural disasters, as countless ancient texts and knowledge were lost forever. Today, a modern library called the Bibliotheca Alexandrina stands near the site of the original, serving as a tribute to ancient scholarship.`,questions:[{id:"q1",question:"What is the MAIN IDEA of Passage 1?",options:["California condors can fly in three states","Scientists study birds carefully","Conservation efforts have helped save the California condor from near extinction","There are now 500 California condors"],correctAnswer:2,explanation:"The **main idea** (umbrella ☂️) is that conservation efforts saved the condor. All details support this: only 27 left → breeding program → now 500+ → still endangered but improving."},{id:"q2",question:"Which detail from Passage 1 BEST supports the main idea?",options:["Condors are magnificent birds","By 1987, only 27 condors remained in the wild","Condors fly in California, Arizona, and Utah","Scientists monitor birds"],correctAnswer:1,explanation:"The fact that only **27 remained** shows how desperate the situation was, making the conservation success story (the main idea) more powerful. This is a key raindrop 💧!"},{id:"q3",question:"What is the TOPIC of Passage 1? (Remember: 1-2 words)",options:["Conservation efforts have saved California condors","California condors","Birds are endangered","Scientists protect rare animals"],correctAnswer:1,explanation:"The **topic** is just WHAT the passage is about: '**California condors**' (2 words). Option A is the MAIN IDEA (complete sentence), not the topic!"},{id:"q4",question:"Which sentence would be an OBJECTIVE summary of Passage 1?",options:["I think California condors are beautiful and everyone should care about them","California condors nearly went extinct but conservation efforts increased their population from 27 to over 500","This passage is boring but has some good facts about birds","California condors are the best birds and we're lucky they survived"],correctAnswer:1,explanation:"Option B is **objective** (no personal opinion), includes the main idea and key facts. Options A, C, and D include subjective opinions ('I think,' 'boring,' 'best,' 'lucky')."},{id:"q5",question:"Why did the author include the detail about lead poisoning in Passage 1?",options:["To show what the author likes","To explain one reason why condors nearly went extinct","To make the passage longer","To talk about hunting"],correctAnswer:1,explanation:"This detail (raindrop 💧) supports the main idea by explaining **WHY** condors were endangered, showing why conservation was necessary."},{id:"q6",question:"What is the MAIN IDEA of Passage 2?",options:["Solar panels are expensive","Solar energy is clean","Solar energy is becoming a popular renewable power source due to its environmental and economic benefits","Governments offer tax credits"],correctAnswer:2,explanation:"The **main idea** (umbrella ☂️) covers the WHOLE passage: solar is popular BECAUSE it's clean AND economical. Options A, B, D are just supporting details (raindrops 💧)."},{id:"q7",question:"Which is a supporting detail, NOT the main idea of Passage 2?",options:["Solar energy is becoming increasingly popular","Solar panels produce electricity without greenhouse gases","Solar energy has both environmental and economic advantages","Solar power is changing how we get energy"],correctAnswer:1,explanation:"'**No greenhouse gases**' is a specific detail (raindrop 💧) that supports WHY solar is good. The main idea is BROADER and covers the whole passage."},{id:"q8",question:"What is the TOPIC of Passage 2?",options:["Solar energy","Solar energy is popular because it's clean and economical","Renewable power sources are important for the future","How to install solar panels"],correctAnswer:0,explanation:"**Topic** = What it's about in 1-2 words: '**Solar energy**.' Options B and C are complete sentences (main ideas, not topics). Option D is too narrow."},{id:"q9",question:"Which detail from Passage 2 relates to ECONOMIC benefits?",options:["Solar panels don't release greenhouse gases","Solar panels convert sunlight into electricity","Solar panels pay for themselves within 10-15 years","Solar technology is improving"],correctAnswer:2,explanation:"**Economic** = money/cost. 'Pay for themselves in 10-15 years' is about MONEY, supporting the economic benefit part of the main idea."},{id:"q10",question:"Write an objective summary starter for Passage 2. Which is MOST objective?",options:["I believe solar energy is amazing and everyone should use it","Solar energy is the best choice for power","Solar energy is gaining popularity as a renewable power source","This boring passage talks about solar panels"],correctAnswer:2,explanation:"Option C is **objective**—no opinions, just facts. Options A ('I believe'), B ('best'), and D ('boring') all include subjective judgments."},{id:"q11",question:"What is the MAIN IDEA of Passage 3?",options:["The Library of Alexandria was in Egypt","Ancient libraries had scrolls","The Library of Alexandria was a significant center of ancient knowledge whose destruction was a major cultural loss","A new library was built in Alexandria"],correctAnswer:2,explanation:"The **main idea** (umbrella ☂️) covers BOTH the library's importance AND its tragic destruction. Options A, B, D are just details (raindrops 💧)."},{id:"q12",question:"What is the TOPIC of Passage 3?",options:["The Library of Alexandria","The Library of Alexandria was important and its loss was tragic","Ancient libraries were centers of learning","Egypt had many libraries"],correctAnswer:0,explanation:"**Topic** = What it's about: '**The Library of Alexandria**' (4 words, but it's a proper name). Options B and C are complete ideas/sentences, not topics."},{id:"q13",question:"Which detail supports the idea that the library was SIGNIFICANT?",options:["It was founded around 300 BCE","Scholars from many countries traveled there to study","It was in Egypt","A new library was built near the site"],correctAnswer:1,explanation:"Scholars **traveling from many countries** shows the library's international importance and reputation. This raindrop 💧 proves it was significant!"},{id:"q14",question:"Why did the author mention the Bibliotheca Alexandrina in Passage 3?",options:["To add an interesting fact at the end","To show that modern people value the original library's legacy","To make the passage longer","To talk about modern Egypt"],correctAnswer:1,explanation:"This detail shows the **lasting impact** of the original library—it was so important that a tribute library was built! This supports the 'significant' part of the main idea."},{id:"q15",question:"Which would be an objective summary conclusion for Passage 3?",options:["I think the destruction of the Library of Alexandria was sad","The library's destruction represents a major loss of ancient knowledge","This passage proves ancient people were smarter than us","The library was definitely the best building ever"],correctAnswer:1,explanation:"Option B is **objective**—states a fact without opinion words. Options A ('I think,' 'sad'), C ('proves,' judgment), D ('best,' 'ever') are subjective."}]}}]},{id:"reading-2",title:"Chapter 2: Making Inferences",lessons:[{id:"reading-2-1",title:"Making Inferences: The 'It Says, I Say, So...' Method",type:"lesson",content:{introduction:"Making inferences is like being a reading detective! 🔍 You combine clues from the text with what you already know to reach logical conclusions. In Grade 6, you'll master the powerful 'It Says, I Say, So...' method to make strong inferences about character traits, motivations, and deeper meanings.",explanation:`**🧩 WHAT IS AN INFERENCE?**

**Inference** = Text Evidence + Your Schema (Background Knowledge) = Logical Conclusion

**Not directly stated** in the text—you must figure it out!

**Think of it like this:**
- **Text Evidence** = The puzzle pieces the author gives you
- **Your Schema** = What you already know about the world
- **Inference** = The complete picture you create

---

**🎯 THE 'IT SAYS, I SAY, SO...' METHOD**

This three-step strategy helps you make strong, defensible inferences:

**STEP 1: IT SAYS... (Text Evidence)**
- What clues does the text give you?
- What specific details, actions, or descriptions are in the passage?
- Use direct quotes or paraphrases

**STEP 2: I SAY... (Your Schema/Background Knowledge)**
- What do I already know about this situation?
- What does this remind me of?
- What do I know about how people/things usually act?

**STEP 3: SO... (Your Inference/Conclusion)**
- What logical conclusion can I draw?
- What is probably true based on combining steps 1 and 2?
- Make sure it makes sense!

---

**📖 DETAILED EXAMPLE: Character Feelings**

**Text:** "Maya's hands were shaking as she walked onto the stage. Her voice cracked when she said the first line. She kept glancing at the exit door."

**STEP 1 - IT SAYS:**
- Maya's hands are shaking
- Her voice cracked
- She keeps looking at the exit door

**STEP 2 - I SAY:**
- I know that people shake when they're scared or cold
- Voices crack when you're stressed or emotional
- Looking at an exit means you want to escape
- Being on stage can be scary

**STEP 3 - SO:**
- **Inference: Maya is very nervous or anxious about performing on stage.**

This is a **strong inference** because it combines specific text evidence with reasonable background knowledge!

---

**🎭 GRADE 6 FOCUS: INFERRING CHARACTER TRAITS**

In 6th grade, you must infer character traits based on:

**1. Actions (What they DO)**
- Text: "Jake shared his lunch with the new student who forgot hers."
- Inference: Jake is kind, generous, or empathetic.

**2. Dialogue (What they SAY)**
- Text: "'I don't care what anyone thinks,' Emma said with a shrug."
- Inference: Emma is independent, confident, or possibly defensive.

**3. Thoughts (What they THINK)** - if narrator shares them
- Text: "Tom worried that he had hurt his friend's feelings."
- Inference: Tom is thoughtful, caring, or sensitive.

**4. What Others Say About Them**
- Text: "'You can always count on Sarah,' the teacher told the class."
- Inference: Sarah is reliable and trustworthy.

**5. Physical Reactions**
- Text: "His face turned red, and he clenched his fists."
- Inference: He is angry or embarrassed.

---

**💡 TYPES OF INFERENCES**

**Type 1: Character Emotions/Traits**
- Using actions and reactions to understand feelings or personality
- Example: Crying + saying goodbye → feeling sad

**Type 2: Setting/Time**
- Using clues to determine when/where something happens
- Example: "Horses and carriages" + "Oil lamps" → past/historical time

**Type 3: Cause and Effect**
- Figuring out WHY something happened
- Example: "The street was wet and the clouds were gray" → It rained

**Type 4: Predictions (Future Inferences)**
- Using evidence to predict what might happen next
- Example: "Dark clouds gathered" + "Wind picked up" → A storm is coming

**Type 5: Author's Message/Theme**
- Understanding the deeper meaning or lesson
- Example: Character learns from mistakes → Theme about growth

---

**🔍 DETAILED EXAMPLES: The Method in Action**

**Example 1: Inferring Motivation**

**Text:** "Liam stayed up until midnight finishing his science project, even though he had basketball practice early the next morning. He checked every calculation three times and redid his poster twice."

**IT SAYS:**
- Stayed up until midnight working
- Had early practice (sacrifice)
- Checked calculations three times
- Redid poster twice

**I SAY:**
- People who stay up late working care about quality
- Checking multiple times shows attention to detail
- Sacrificing sleep for work shows commitment
- Redoing work shows perfectionism or high standards

**SO:**
- **Inference: Liam is dedicated, hardworking, and takes pride in his work. His science project is very important to him.**

---

**Example 2: Inferring Setting**

**Text:** "The travelers loaded their wagons with supplies for the long journey ahead. They knew they wouldn't see another trading post for weeks. Dust kicked up from the unpaved trail as the oxen pulled forward."

**IT SAYS:**
- Wagons (not cars)
- Trading post (not store)
- Weeks between towns
- Unpaved trails
- Oxen (not engines)

**I SAY:**
- Wagons and oxen were used before cars
- Trading posts were common in the American West
- Remote areas with no paved roads suggest frontier/pioneer times

**SO:**
- **Inference: This story takes place in the American frontier/Old West, probably in the 1800s.**

---

**Example 3: Inferring Relationships**

**Text:** "Marcus saw his little sister struggling with her math homework. Without being asked, he sat down beside her and patiently explained each problem. When she finally understood, her face lit up, and she gave him a quick hug."

**IT SAYS:**
- Marcus noticed his sister struggling
- He helped without being asked
- He was patient
- She hugged him when she understood

**I SAY:**
- People who help without being asked are caring
- Patience shows kindness
- Hugs show affection and gratitude
- Siblings can have close, supportive relationships

**SO:**
- **Inference: Marcus and his sister have a caring, supportive sibling relationship. Marcus is a thoughtful and patient older brother.**

---

**⚠️ COMMON INFERENCE MISTAKES**

**Mistake 1: Wild Guessing (No Text Support)**
- ❌ "Maya is nervous because she didn't study."
- Problem: Nothing in the text mentions studying
- ✅ "Maya is nervous about performing."

**Mistake 2: Stating What's Already Said (Not an Inference)**
- Text: "The dog barked loudly."
- ❌ "The dog made noise." (This is stated, not inferred)
- ✅ "The dog might be warning someone or feeling threatened." (This is inferred)

**Mistake 3: Using Only Your Knowledge (Ignoring Text)**
- ❌ "Maya is nervous because I get nervous on stage."
- Problem: Must use TEXT evidence, not just personal experience
- ✅ Combine text clues WITH your knowledge

**Mistake 4: Making Unreasonable Leaps**
- Text: "John forgot his homework."
- ❌ "John is failing all his classes and will drop out of school."
- Problem: Goes way too far beyond the evidence
- ✅ "John might face consequences or need to make up the assignment."

---

**🎯 INFERENCE QUESTION STARTERS**

You'll see these phrases in test questions:

- "Based on the passage, the reader can **infer** that..."
- "What can you **conclude** about...?"
- "The author **suggests** that..."
- "Which statement is **most likely** true?"
- "It can be **reasoned** that..."
- "Evidence in the text **implies** that..."

When you see these words, you know you need to INFER, not just find a stated fact!

---

**📝 INFERENCE CHECKLIST**

Before you finalize your inference, ask yourself:

✅ **Is there TEXT EVIDENCE to support this?**
- Can I point to specific words, actions, or details?

✅ **Does this make LOGICAL SENSE?**
- Would most reasonable people reach this conclusion?

✅ **Am I using my BACKGROUND KNOWLEDGE appropriately?**
- Does what I know about the world support this?

✅ **Is this REASONABLE, not extreme?**
- Am I making too big a leap?

❌ **Is this STATED in the text?**
- If yes, it's not an inference—it's explicit information!

---

**🧠 WHY INFERENCES MATTER**

**For Reading:**
- Most important ideas are IMPLIED, not stated directly
- Authors expect you to "read between the lines"
- Understanding character motivations and themes requires inference

**For Tests:**
- Inference questions appear on EVERY standardized test
- Often worth more points than factual recall questions
- Show higher-level thinking skills

**For Life:**
- Understanding people's feelings and motivations
- Making decisions based on incomplete information
- Critical thinking in all areas

---

**🎓 PRACTICE STRATEGY: The 3-Column Chart**

When practicing, organize your thinking:

| IT SAYS (Text) | I SAY (Schema) | SO (Inference) |
|----------------|----------------|----------------|
| Specific quote or detail | What I know | Logical conclusion |

This visual organization helps you see if your inference is well-supported!`,examples:[{text:`**Practice Example 1:** "The old house at the end of the street had broken windows and overgrown weeds. The mailbox overflowed with yellowed letters. A 'For Sale' sign creaked in the wind, faded from years in the sun."`,explanation:`**IT SAYS:** Broken windows, overgrown weeds, overflowing old mail, faded old sign
**I SAY:** Broken/overgrown things suggest neglect; old mail means no one picks it up; faded signs have been there a long time
**SO:** **Inference: The house has been abandoned for a long time, and no one has lived there or maintained it for years.**`},{text:`**Practice Example 2:** "Coach Martinez blew the whistle sharply. 'Again!' she shouted. 'And this time, give me 110%!' The team groaned but got back into position. Some players were breathing hard, but Coach showed no signs of letting up."`,explanation:`**IT SAYS:** Sharp whistle, shouting 'Again,' demanding 110%, team groaning, players tired, coach not letting up
**I SAY:** Demanding coaches push athletes hard; repeated drills build skills; not giving breaks suggests high standards
**SO:** **Inference: Coach Martinez is tough, demanding, and has high expectations. She pushes her team to work hard and improve, even when they're tired.**`},{text:'**Practice Example 3:** "When the test was returned, Alex quickly stuffed it into his backpack without looking at it. He avoided eye contact with the teacher and rushed out of class as soon as the bell rang."',explanation:`**IT SAYS:** Quickly stuffed test away, didn't look at it, avoided eye contact, rushed out
**I SAY:** People avoid things that upset them; not wanting to see a grade suggests it's bad; avoiding the teacher shows embarrassment or shame
**SO:** **Inference: Alex likely received a poor grade on the test and feels embarrassed or disappointed about his performance.**`}],quickPractice:{question:`Read this and make an inference:

'Sophia checked her phone for the tenth time in five minutes. She kept looking toward the door. Every time someone walked in, she sat up straight, then slumped back down when it wasn't who she was looking for.'

What can you infer?`,hint:"Use the 'It Says, I Say, So' method. What do the actions tell you?",answer:`**IT SAYS:** Checking phone repeatedly, watching the door, sitting up when people enter, slumping when it's not the right person.
**I SAY:** People who check phones and watch doors are waiting for someone; sitting up shows hope; slumping shows disappointment.
**SO:** **Inference: Sophia is eagerly waiting for someone specific to arrive, possibly anxious or excited about their meeting.**`}}},{id:"reading-2-2",title:"Practice: Making Inferences",type:"exercise",content:{instructions:"Use the 'It Says, I Say, So...' method to answer these questions. Remember: combine text evidence with background knowledge!",questions:[{id:"q1",passage:"Jake glanced at the clock nervously. He had studied all week for this test. When the teacher handed out the papers, his hands were shaking slightly. He took a deep breath and wrote his name at the top.",question:"What can you infer about Jake's CHARACTER TRAIT?",options:["Jake is confident and carefree","Jake is conscientious but anxious about performance","Jake is lazy and unprepared","Jake doesn't care about tests"],correctAnswer:1,explanation:"**IT SAYS:** Studied all week, nervous, shaking hands, deep breath. **I SAY:** People who study are conscientious; physical signs show anxiety. **SO:** Jake cares about doing well (studied) but still feels anxious—common for students who have high standards for themselves."},{id:"q2",passage:"The crowd erupted in cheers as she crossed the finish line. Tears of joy streamed down her face as her teammates rushed to congratulate her. All those early morning practices had finally paid off.",question:"What can you infer about the outcome and her dedication?",options:["She lost the race but is happy it's over","She won the race after working hard, and feels accomplished","She is disappointed with her performance","She didn't practice much and got lucky"],correctAnswer:1,explanation:"**IT SAYS:** Cheers, tears of joy, teammates congratulating, 'practices paid off.' **I SAY:** Cheers = winning; tears of joy = happiness; early practices = dedication. **SO:** She won after sustained hard work and feels the accomplishment was worth the effort."},{id:"q3",passage:"Dr. Chen examined the ancient scroll carefully, using magnifying glasses and wearing white gloves. She photographed every section and made detailed notes in her journal. 'This could change everything we know about the dynasty,' she whispered.",question:"What can you infer about Dr. Chen's profession and the scroll's importance?",options:["Dr. Chen is an artist; the scroll is decorative","Dr. Chen is a historian or archaeologist; the scroll is very significant","Dr. Chen is a librarian; the scroll is ordinary","Dr. Chen is a photographer; the scroll is just for practice"],correctAnswer:1,explanation:"**IT SAYS:** 'Dr.' title, examining ancient scroll, magnifying glasses, white gloves, photographs, 'change everything we know.' **I SAY:** Historians study the past; white gloves protect valuable items; 'change everything' means major discovery. **SO:** Dr. Chen is a professional historian/archaeologist, and this scroll contains groundbreaking historical information."},{id:"q4",passage:"Tommy shared his lunch with the new kid who had forgotten his money. Later, he helped Mrs. Garcia carry heavy boxes to her classroom without being asked. At recess, he invited a student sitting alone to join his soccer game.",question:"What CHARACTER TRAITS can you infer about Tommy based on his ACTIONS?",options:["Tommy is selfish and only helps when adults are watching","Tommy is kind, compassionate, and notices when others need help","Tommy is trying to get attention and praise","Tommy is bossy and controlling"],correctAnswer:1,explanation:"**IT SAYS:** Shared lunch, helped without being asked, invited lonely student. **I SAY:** People who share and help without prompting are genuinely kind; noticing the new kid and lonely student shows empathy. **SO:** Tommy consistently acts with kindness and compassion, showing genuine care for others' well-being."},{id:"q5",passage:"The streets were empty except for a stray newspaper tumbling by. Broken windows stared out like empty eyes. Rust covered the old gas pumps at the abandoned station. A faded sign creaked in the wind: 'Population 2,347.'",question:"What can you infer about the SETTING?",options:["This is a busy, thriving modern city","This is a ghost town or abandoned community","This is a town preparing for a festival","This is a town that just experienced a natural disaster"],correctAnswer:1,explanation:"**IT SAYS:** Empty streets, broken windows, rust, abandoned station, faded sign, population in past tense. **I SAY:** Empty + broken + abandoned = no longer used; rust takes years; population sign suggests people used to live there. **SO:** This was once a populated town but has been abandoned for a long time—a ghost town."},{id:"q6",passage:"Maria's notebook was filled with detailed sketches of buildings from every angle. She labeled each drawing with measurements and notes about materials. At home, her desk was covered with miniature models made from cardboard and popsicle sticks.",question:"What can you infer about Maria's interests or future career goals?",options:["Maria wants to be a teacher","Maria is interested in architecture or engineering","Maria enjoys cooking","Maria wants to be a writer"],correctAnswer:1,explanation:"**IT SAYS:** Detailed building sketches, measurements, material notes, miniature models. **I SAY:** Architects design buildings with measurements and materials; models help visualize structures. **SO:** Maria's interests strongly align with architecture or engineering—she's studying buildings systematically."},{id:"q7",passage:"The knight mounted his horse as the sun rose over the castle walls. His squire handed him a lance, and the crowd in the courtyard cheered. Ladies in the tower above waved colorful handkerchiefs.",question:"What can you infer about the TIME PERIOD and SETTING?",options:["Modern day at a theme park","Medieval times at a real castle","Ancient Rome","The future on another planet"],correctAnswer:1,explanation:"**IT SAYS:** Knight, horse, castle, squire, lance, courtyard, ladies in tower, handkerchiefs. **I SAY:** Knights and squires existed in medieval times; lances were used in jousting; castle towers and courtyard gatherings were common then. **SO:** This is set in medieval times (Middle Ages), probably at a tournament or joust."},{id:"q8",passage:"Samantha looked at her phone—still no text back. She had apologized three times already. Maybe she shouldn't have said what she said. She hoped their friendship could survive this.",question:"What can you infer about the SITUATION and Samantha's FEELINGS?",options:["Samantha is angry at her friend","Samantha said something hurtful and feels guilty, wanting to repair the friendship","Samantha is celebrating good news","Samantha doesn't care about the friendship"],correctAnswer:1,explanation:"**IT SAYS:** Checking for response, apologized three times, regrets words, hopes friendship survives. **I SAY:** Multiple apologies = guilt; hoping friendship survives = it's in jeopardy; checking phone = anxious for response. **SO:** Samantha said something that hurt her friend, feels remorseful, and is worried she may have damaged the friendship."},{id:"q9",passage:"Dark clouds gathered overhead, and the wind picked up suddenly. Birds flew frantically toward shelter. Mr. Johnson rushed to bring in the lawn furniture and close the storm shutters.",question:"What can you PREDICT will happen next based on the evidence?",options:["It will be a beautiful sunny day","A severe storm is approaching","An earthquake will occur","Nothing will happen"],correctAnswer:1,explanation:"**IT SAYS:** Dark clouds gathering, wind picking up, birds seeking shelter, securing furniture, closing storm shutters. **I SAY:** Dark clouds + wind = storm signs; animals sense weather changes; people prepare when bad weather is coming. **SO:** PREDICTION: A severe storm is about to hit—all evidence points to imminent bad weather."},{id:"q10",passage:"'You'll never be able to do it,' his brother taunted. But Carlos practiced every single day after school for three months. On competition day, he stepped up to the microphone with his head held high.",question:"What can you infer about Carlos's character trait based on his ACTIONS and RESPONSE to challenge?",options:["Carlos gives up easily when challenged","Carlos is determined and resilient, using doubt as motivation","Carlos is arrogant and overconfident","Carlos doesn't care what others think"],correctAnswer:1,explanation:"**IT SAYS:** Brother's taunt, practiced daily for 3 months, 'head held high' on competition day. **I SAY:** Daily practice despite discouragement = determination; continuing for months = resilience; confident posture = self-belief earned through work. **SO:** Carlos is determined and resilient—he used his brother's doubt as motivation to prove himself through hard work."},{id:"q11",passage:"The robot hummed as it rolled across the lab floor, carefully navigating around obstacles. Its sensors blinked rapidly, processing information. Dr. Patel watched the monitor intently, recording data every few seconds.",question:"What can you infer about the SETTING and what's happening?",options:["This is a toy store where someone is playing","This is a science laboratory where a robot is being tested","This is a factory assembly line","This is a classroom demonstration"],correctAnswer:1,explanation:"**IT SAYS:** 'Lab,' robot navigating with sensors, 'Dr.' title, monitoring and recording data. **I SAY:** Labs are for scientific research; doctors (PhDs) conduct experiments; recording data = testing phase. **SO:** This is a research laboratory where Dr. Patel is conducting a scientific test of robot capabilities."},{id:"q12",passage:"Elena read the same paragraph three times, but the words blurred together. She rubbed her tired eyes and checked the clock—2:00 AM. Her coffee had gone cold hours ago, but the essay was due in the morning.",question:"What can you infer about Elena's SITUATION and why she made certain CHOICES?",options:["Elena loves staying up late and is having fun","Elena procrastinated and is now rushing to finish an assignment","Elena is well-prepared and relaxed","Elena doesn't care about the essay"],correctAnswer:1,explanation:"**IT SAYS:** Can't focus, tired eyes, 2:00 AM, cold coffee (been working for hours), due in morning. **I SAY:** Working late = poor time management; tired and struggling = stress; due tomorrow = deadline pressure. **SO:** Elena put off the assignment and is now forcing herself to stay up all night to complete it—classic procrastination with consequences."}]}}]},{id:"reading-3",title:"Chapter 3: Citing Textual Evidence",lessons:[{id:"reading-3-1",title:"The R.A.C.E. Strategy: Prove Your Answers",type:"lesson",content:{introduction:"This is the 'Golden Rule' of 6th-grade reading: You can no longer just give an answer; you must PROVE it with evidence from the text. The R.A.C.E. strategy gives you a powerful formula for constructing complete, evidence-based responses. This is the foundation of all California Grade 6 reading standards.",explanation:`**🏆 THE R.A.C.E. STRATEGY**

R.A.C.E. is an acronym that helps you write strong, evidence-based answers:

**R** = **RESTATE** the question
**A** = **ANSWER** the question
**C** = **CITE** evidence from the text
**E** = **EXPLAIN** how the evidence supports your answer

---

**📖 DETAILED BREAKDOWN**

**R - RESTATE the Question**

**Turn the question into a statement** that begins your answer.

**Question:** Why is the California condor endangered?

❌ **Weak:** "Because of habitat loss."
✅ **Strong:** "The California condor is endangered because of habitat loss."

**Why Restate?**
- Shows you understood the question
- Provides context for your reader
- Creates a topic sentence

**Quick Tip:** Take key words from the question and turn them into a statement.

---

**A - ANSWER the Question**

**Give a clear, direct answer** to what's being asked.

**Question:** How does the main character change?

❌ **Weak:** "He changes."
✅ **Strong:** "The main character transforms from selfish to compassionate."

**Be Specific:**
- Answer ALL parts of the question
- Be clear and direct
- Don't leave your reader guessing

---

**C - CITE Evidence from the Text**

**Use DIRECT QUOTES or SPECIFIC PARAPHRASES** to support your answer.

**Two Types of Evidence:**

**1. Direct Evidence (Exact Quotes)**
- Use quotation marks
- Copy the author's exact words
- Best for specific phrases or important statements

**2. Indirect Evidence (Paraphrasing)**
- Put the author's ideas in your own words
- Still give credit: "According to the text..."
- Best for summarizing longer sections

**TAG PHRASES for Introducing Evidence:**

**For Direct Quotes:**
- The author states, "..."
- According to the text, "..."
- The passage explains, "..."
- In paragraph [#], the author writes, "..."
- For example, the text says, "..."
- As shown when the narrator notes, "..."
- The author illustrates this by saying, "..."

**For Paraphrasing:**
- The text indicates that...
- The author explains that...
- According to the passage...
- The article describes how...

---

**E - EXPLAIN How Evidence Supports Your Answer**

**Connect the dots** between your evidence and your answer.

**This is the MOST IMPORTANT STEP** that students often skip!

**Ask yourself:**
- How does this quote prove my point?
- What does this evidence show?
- Why is this detail important?

**EXPLANATION STARTERS:**
- This shows that...
- This demonstrates...
- This proves...
- This evidence reveals...
- This illustrates...
- Therefore...
- This is significant because...
- From this, we can understand that...

---

**🎯 COMPLETE R.A.C.E. EXAMPLE**

**Question:** How does the author feel about recycling?

**WEAK ANSWER (No R.A.C.E.):**
"The author likes recycling."
❌ No evidence, no explanation, weak answer

**STRONG ANSWER (Using R.A.C.E.):**

**R** - The author feels strongly positive about recycling.

**A** - The author believes recycling is essential for environmental protection.

**C** - According to the text, "Recycling is one of the most important actions individuals can take to protect the environment."

**E** - This demonstrates the author's conviction that recycling isn't just helpful, but critical. The use of "most important" emphasizes that the author sees recycling as a top priority, not just one option among many.

**FULL PARAGRAPH:**
"The author feels strongly positive about recycling and believes it is essential for environmental protection. According to the text, 'Recycling is one of the most important actions individuals can take to protect the environment.' This demonstrates the author's conviction that recycling isn't just helpful, but critical. The use of 'most important' emphasizes that the author sees recycling as a top priority, not just one option among many."

---

**📚 DIRECT vs. INDIRECT EVIDENCE**

**DIRECT EVIDENCE (Explicit/Stated)**

Information **clearly stated** in the text.

**Example Passage:** "The Amazon rainforest produces 20% of the world's oxygen."

**Question:** What percentage of oxygen does the Amazon produce?
**Direct Evidence:** The text explicitly states "20%."

**When to Use:**
- Facts, statistics, dates
- Specific quotes that answer the question directly
- Author's direct statements

---

**INDIRECT EVIDENCE (Inferred)**

Information you must **figure out** from clues.

**Example Passage:** "Maria slammed the door and threw her backpack across the room. 'I never want to go back there!' she shouted."

**Question:** How does Maria feel?
**Indirect Evidence:** Although "angry" isn't stated, her actions (slamming, throwing, shouting) show anger.

**Your Citation:** "Maria's feelings can be inferred from her actions. The text shows she 'slammed the door' and 'threw her backpack,' which are typically associated with anger and frustration."

**When to Use:**
- Character emotions/motivations
- Theme and deeper meaning
- Author's implicit messages
- Drawing conclusions

---

**✂️ PROPER QUOTE INTEGRATION**

**CHOPPY (Poor Integration):**
"The story is about courage. 'He faced his fears.' This is important."
❌ Quotes feel disconnected and awkward

**SMOOTH (Good Integration):**
"The story demonstrates courage when the narrator explains that 'he faced his fears' despite being terrified."
✅ The quote flows naturally within the sentence

**METHODS FOR SMOOTH INTEGRATION:**

**Method 1: Use a Complete Sentence + Colon**
"The author makes her point clear: 'Recycling saves our planet.'"

**Method 2: Weave Into Your Own Sentence**
"The narrator describes the forest as 'ancient and mysterious,' creating an atmosphere of wonder."

**Method 3: Use a Tag Phrase**
"According to the scientist, 'climate change affects everyone.'"

**Method 4: Partial Quote (Integrate Key Words)**
"The author emphasizes that the discovery was 'groundbreaking' and would 'change everything.'"

---

**📍 CITING SPECIFIC LOCATIONS**

**Grade 6 Skill:** Reference WHERE you found the evidence.

**Examples:**
- "In paragraph 3, the author states..."
- "The introduction explains that..."
- "As shown in the final paragraph..."
- "Early in the text, the narrator describes..."
- "According to lines 12-15..."
- "The concluding section reveals..."

**Why This Matters:**
- Shows you read carefully
- Helps reader find the evidence
- Demonstrates organization
- Required in formal essays

---

**⚠️ COMMON MISTAKES TO AVOID**

**Mistake 1: No Evidence**
❌ "The character is brave." (Where's the proof?)
✅ "The character is brave, as demonstrated when he 'volunteered to go first' despite being afraid."

**Mistake 2: Evidence Without Explanation**
❌ "The character is brave. The text says, 'He volunteered to go first.'" (Connect the dots!)
✅ "The character is brave. The text says, 'He volunteered to go first.' This shows courage because he chose to face danger even though he was afraid, putting himself at risk for others."

**Mistake 3: Too Much Summary, Not Enough Analysis**
❌ "First this happened, then that happened, then..." (That's just retelling)
✅ Focus on WHY and HOW things happened, not just WHAT happened

**Mistake 4: Using "I think" or "I believe"**
❌ "I think the author likes nature."
✅ "The author's appreciation for nature is evident when she describes..."
(Let the EVIDENCE speak, not your opinion!)

**Mistake 5: Quoting Too Much**
❌ Don't quote entire paragraphs—select the KEY phrase
✅ Choose the most powerful 5-15 words that prove your point

**Mistake 6: Not Using Quotation Marks**
❌ "The author says recycling is important." (Is that exact wording?)
✅ "The author says recycling 'is important.'" OR "The author indicates that recycling is important." (paraphrase, no quotes)

---

**🎯 R.A.C.E. FORMULA TEMPLATE**

Use this template to practice:

**R** - [Restate question as a statement]

**A** - [Give a clear, specific answer]

**C** - [Choose one of these]
- According to the text, "___[direct quote]___."
- The passage shows that ___[paraphrase]___.
- In paragraph ___, the author states, "___[quote]___."

**E** - [Choose one of these]
- This shows that...
- This demonstrates...
- This is significant because...
- From this evidence, we can understand that...

---

**💡 GRADE 6 ADVANCED: MULTIPLE PIECES OF EVIDENCE**

For complex questions, use **2-3 pieces of evidence**:

**Example:**
"The main character demonstrates growth throughout the story. At the beginning, he 'refused to share anything with his classmates,' showing selfishness. However, by the end, he 'organized a fundraiser to help his community,' revealing his transformation to generosity. This change shows that experiences can reshape our values and priorities."

**Notice:**
- Evidence from BEGINNING (quote 1)
- Evidence from END (quote 2)
- Explanation connects both to show change

---

**🎓 WHY R.A.C.E. MATTERS**

**For Tests:**
- Constructed response questions require R.A.C.E.
- Graders look for each component
- Missing any step = lower score

**For Essays:**
- Body paragraphs follow this structure
- Each claim needs evidence and explanation
- Foundation for high school and college writing

**For Life:**
- Making evidence-based arguments
- Supporting opinions with facts
- Critical thinking and persuasion

---

**📝 R.A.C.E. CHECKLIST**

Before submitting an answer, check:

✅ **R** - Did I restate the question in my answer?
✅ **A** - Did I answer ALL parts of the question?
✅ **C** - Did I include a direct quote or specific paraphrase?
✅ **C+** - Did I use quotation marks for exact words?
✅ **C++** - Did I cite WHERE the evidence came from?
✅ **E** - Did I explain HOW the evidence proves my answer?
✅ **E+** - Does my explanation add insight, not just repeat?

**Target Length:** 4-7 sentences for a complete R.A.C.E. response`,examples:[{text:`**Example 1: Literature Question**

**Question:** Why does the main character feel conflicted?

**R.A.C.E. Answer:** The main character feels conflicted because she must choose between loyalty to her family and pursuing her own dreams. The text illustrates this when she thinks, "How could I disappoint them after all they'd sacrificed for me?" This shows her internal struggle—she values her family's expectations but also yearns for independence. The question "How could I...?" reveals her guilt and the weight of her decision.`,explanation:`**Breakdown:**
**R**: 'The main character feels conflicted because...'
**A**: '...she must choose between loyalty and dreams'
**C**: Direct quote: 'How could I disappoint them...'
**E**: Explains the quote shows internal struggle, guilt, and decision weight

✅ Complete R.A.C.E. with smooth integration!`},{text:`**Example 2: Informational Text Question**

**Question:** How do honeybees help farmers?

**R.A.C.E. Answer:** Honeybees help farmers by pollinating crops, which is essential for food production. According to the article, "Honeybees pollinate approximately 75% of the fruits, vegetables, and nuts consumed by Americans." This demonstrates that bees aren't just helpful—they're critical to agriculture. Without their pollination services, farmers would see dramatically reduced crop yields, affecting both the economy and food supply.`,explanation:`**Breakdown:**
**R**: 'Honeybees help farmers by...'
**A**: '...pollinating crops, essential for food production'
**C**: Specific statistic: '75% of fruits, vegetables, nuts'
**E**: Explains the significance—not just helpful but critical, with consequences explained

✅ Uses precise data and explains broader implications!`},{text:`**Example 3: Inference Question (Indirect Evidence)**

**Question:** What can you infer about Marcus's character?

**R.A.C.E. Answer:** We can infer that Marcus is determined and doesn't give up easily. The text shows that "despite failing the first two times, he practiced every day for a month and tried again." This reveals his persistence—instead of quitting after failure, he used it as motivation to improve. His daily practice shows discipline, and his willingness to face failure again demonstrates true resilience.`,explanation:`**Breakdown:**
**R**: 'We can infer that Marcus is...'
**A**: '...determined and doesn't give up easily'
**C**: Paraphrased evidence: 'failed first two times, practiced daily, tried again'
**E**: Explains what the actions reveal: persistence, discipline, resilience

✅ Uses indirect evidence to support character trait inference!`}],quickPractice:{question:`**Practice Question:**

Passage: "Solar panels convert sunlight into electricity without producing pollution. According to scientists, solar energy could provide enough power for the entire world if harnessed effectively."

Question: What advantage does solar energy have over traditional power sources?

**Try writing a R.A.C.E. response!**`,hint:"Remember: Restate, Answer, Cite (with quote), Explain (how it proves your point)",answer:`**Sample R.A.C.E. Answer:**

Solar energy has a significant environmental advantage over traditional power sources because it produces clean electricity. The passage states that solar panels "convert sunlight into electricity without producing pollution." This demonstrates that, unlike fossil fuels which release harmful emissions, solar energy provides a clean alternative that doesn't damage the environment. This pollution-free characteristic makes solar power an important solution for reducing environmental harm while meeting energy needs.

**Breakdown:** ✅ R: Restates question | ✅ A: Clear answer (environmental advantage/clean) | ✅ C: Direct quote with quotation marks | ✅ E: Explains why being pollution-free matters`}}},{id:"reading-3-2",title:"Practice: Citing Textual Evidence with R.A.C.E.",type:"exercise",content:{instructions:"Practice the R.A.C.E. strategy! Remember: Restate, Answer, Cite, Explain. Read passages carefully and apply the skills.",passage:`**Passage 1 (Questions 1-7):**

The California redwood trees are the tallest living things on Earth, with some reaching heights of over 350 feet—that's taller than the Statue of Liberty! These magnificent giants can live for more than 2,000 years, meaning some living redwoods were saplings when ancient Rome still existed. Redwoods thrive in the foggy coastal regions of Northern California, where the moisture from fog provides nearly 40% of their water needs during dry summer months. The thick bark of redwoods, which can be up to 12 inches thick, protects them from fire and insect damage.

Sadly, only 5% of the original old-growth redwood forests remain today due to extensive logging in the 1800s and 1900s. During this period, millions of these ancient trees were cut down to build homes and cities during California's rapid development. Conservation efforts are now working to protect these remaining ancient forests for future generations, with organizations purchasing land and establishing protected parks.

**Passage 2 (Questions 8-14):**

Maria closed her eyes and took a deep breath before walking onto the stage. Her hands trembled slightly as she gripped the microphone. For months, she had practiced this song in her bedroom, but performing in front of hundreds of people felt entirely different. When the music started, her voice cracked on the first note. She saw her best friend Emma in the front row, giving her an encouraging smile and thumbs up.

Maria paused, collected herself, and started again. This time, her voice rang out clear and strong. As she sang the final note, the auditorium erupted in applause. Her music teacher, Mrs. Chen, rushed to the stage with tears in her eyes. "I knew you could do it," she whispered. Maria realized that sometimes the scariest moments lead to the greatest accomplishments.`,questions:[{id:"q1",question:"Which quote provides the BEST direct evidence that redwoods are extremely tall?",options:['"These magnificent giants can live for more than 2,000 years."',`"...some reaching heights of over 350 feet—that's taller than the Statue of Liberty!"`,'"Redwoods thrive in the foggy coastal regions..."','"The thick bark of redwoods can be up to 12 inches thick."'],correctAnswer:1,explanation:"**C - CITE:** This quote provides EXPLICIT evidence with a specific measurement (350 feet) AND a comparison (taller than Statue of Liberty) that proves extreme height. This is the strongest evidence."},{id:"q2",question:"Which is the BEST example of smooth quote integration about redwood age?",options:["Redwoods are old. 'They can live for more than 2,000 years.'","The passage says redwoods can live for more than 2,000 years, making them ancient trees.","Redwoods are ancient because the text says so.","Redwoods demonstrate remarkable longevity, as some 'can live for more than 2,000 years,' meaning living trees today existed during ancient Rome."],correctAnswer:3,explanation:"Option D shows BEST INTEGRATION: introduces the idea (longevity), smoothly weaves in the quote, AND adds explanation (existed during Rome) that helps readers understand the significance. This models the FULL R.A.C.E. approach."},{id:"q3",question:"Based on Passage 1, what can you INFER about why redwoods survive fires? (Indirect Evidence)",options:["Because firefighters protect them","Because the thick bark (up to 12 inches) protects them from fire damage","Because they grow near water","Because they are very tall"],correctAnswer:1,explanation:"**IT SAYS:** '12 inches thick...protects from fire.' **I SAY:** Thick protection = insulation from heat/flames. **INFERENCE:** The thick bark acts as fireproof armor. This combines TEXT EVIDENCE + REASONING = inference about survival."},{id:"q4",question:"Which answer BEST demonstrates the 'E' (Explain) part of R.A.C.E. for conservation importance?",options:["Only 5% remain, so conservation is important.","Conservation efforts protect redwoods because the passage mentions it.","Since 'only 5% of the original old-growth redwood forests remain,' conservation is critical to prevent complete loss of these irreplaceable ancient ecosystems.","The text says conservation is working."],correctAnswer:2,explanation:"**E - EXPLAIN:** Option C goes beyond just citing—it explains WHY (prevent complete loss) and WHAT'S AT STAKE (irreplaceable ancient ecosystems). This shows the SIGNIFICANCE of the evidence, which is what the 'Explain' step requires."},{id:"q5",question:"If you were asked, 'How do redwoods survive in dry summers?', which R.A.C.E. answer is MOST complete?",options:["They use fog. The text says 'fog provides 40% of water.'","Redwoods survive dry summers by using fog for water, which provides nearly 40% of their needs.","Redwoods survive dry summers through fog moisture. The passage states that 'moisture from fog provides nearly 40% of their water needs during dry summer months.' This shows that fog acts as a critical water source when rainfall is scarce, allowing redwoods to thrive in coastal regions.","I think redwoods are smart to use fog for water in summer."],correctAnswer:2,explanation:`Option C is COMPLETE R.A.C.E.:
**R**: 'Redwoods survive dry summers...'
**A**: '...through fog moisture'
**C**: Direct quote with context
**E**: Explains HOW and WHY it matters (fog = substitute for rain, allows them to thrive)

Option D fails because it uses 'I think' (not objective).`},{id:"q6",question:"Which sentence shows PARAPHRASING (indirect evidence) done correctly?",options:["Redwoods live for more than 2,000 years.","The passage indicates that redwoods can survive for over two millennia, making them some of Earth's oldest living organisms.","The text says redwoods are really really old.","Redwoods are ancient according to what I read."],correctAnswer:1,explanation:"Option B correctly PARAPHRASES: uses own words ('two millennia' for 2,000 years, 'survive' for live), gives CREDIT ('passage indicates'), and adds CONTEXT (oldest organisms). This is proper indirect citation."},{id:"q7",question:"What is the CENTRAL IDEA of Passage 1, supported by evidence?",options:["Redwoods are tall.","California redwoods are remarkable ancient trees with unique adaptations, but they face conservation challenges due to past logging.","Only 5% of redwoods remain.","Trees are important."],correctAnswer:1,explanation:`The CENTRAL IDEA must cover the WHOLE passage:
✅ Remarkable/ancient (supported by: height, age, thick bark)
✅ Unique adaptations (supported by: fog usage, fire resistance)
✅ Conservation challenges (supported by: 95% lost, logging history)

Options A and C are just DETAILS. Option D is too vague.`},{id:"q8",question:"In Passage 2, what DIRECT EVIDENCE shows Maria was nervous before performing?",options:['"She practiced in her bedroom for months."','"Her hands trembled slightly as she gripped the microphone."','"The auditorium erupted in applause."','"Her music teacher rushed to the stage."'],correctAnswer:1,explanation:"**EXPLICIT EVIDENCE:** 'Trembled slightly' + 'gripped microphone' = DIRECT physical signs of nervousness. This DIRECTLY answers 'how do we know she was nervous?' Options A, C, D don't show nervousness."},{id:"q9",question:"Which inference about Maria's CHARACTER is best supported by MULTIPLE pieces of evidence?",options:["Maria is naturally talented and confident.","Maria is determined and resilient, as shown by months of practice, recovering from a mistake, and persevering despite fear.","Maria doesn't like performing.","Maria's teacher forced her to perform."],correctAnswer:1,explanation:`**MULTIPLE EVIDENCE POINTS:**
1. 'Practiced for months' = determination
2. 'Started again' after mistake = resilience
3. 'Performing despite fear' = courage

**GRADE 6 SKILL:** Using MULTIPLE pieces of evidence to support one inference. Options A and D contradict the text; option C is not supported.`},{id:"q10",question:"If asked, 'How does Emma help Maria?', which answer has the BEST explanation (E in R.A.C.E.)?",options:["Emma smiled and gave a thumbs up.","Emma helped by smiling. The text says she gave 'an encouraging smile and thumbs up.'","Emma provided crucial emotional support when Maria needed it most. The passage shows that when Maria's 'voice cracked,' she 'saw her best friend Emma giving her an encouraging smile and thumbs up.' This non-verbal encouragement gave Maria the confidence to try again.","Emma was nice to Maria."],correctAnswer:2,explanation:`Option C provides FULL EXPLANATION:
- **HOW**: Through visual encouragement (smile, thumbs up)
- **WHEN**: At the critical moment (after voice crack)
- **EFFECT**: Gave Maria confidence to continue
- **WHY IT MATTERS**: Emotional support at the right time made success possible

This is what 'EXPLAIN' means—connecting evidence to deeper meaning!`},{id:"q11",question:"What is the THEME of Passage 2, and which evidence BEST supports it?",options:["Theme: Music is fun. Evidence: Maria sings.","Theme: Facing fears and persevering through mistakes can lead to great accomplishments. Evidence: 'Sometimes the scariest moments lead to the greatest accomplishments.'","Theme: Friends are important. Evidence: Emma smiled.","Theme: Practice makes perfect. Evidence: Maria practiced."],correctAnswer:1,explanation:`**THEME** = Universal message about life (complete statement).

Option B:
✅ Complete theme statement (not just a word)
✅ Supported by: fear → mistake → recovery → success
✅ EXPLICIT evidence: the author STATES the theme in the final sentence

Options A, C, D are partial truths but miss the MAIN message.`},{id:"q12",question:"Which demonstrates PROPER use of a TAG PHRASE to introduce evidence?",options:["'Her voice rang out clear and strong.'","The text mentions Maria's voice.","As the passage illustrates, after collecting herself, Maria's voice 'rang out clear and strong,' demonstrating her recovery.","Maria sang well, it says that in the story."],correctAnswer:2,explanation:`**TAG PHRASE:** 'As the passage illustrates' smoothly introduces evidence.

✅ Professional introduction
✅ Provides context (after collecting herself)
✅ Uses quotation marks correctly
✅ Adds explanation (demonstrating recovery)

This is COLLEGE-LEVEL citation skill!`},{id:"q13",question:"If you need to cite WHERE evidence is located, which is BEST?",options:["The story says Maria was nervous.","Maria was nervous. It's in the passage.","In the opening paragraph of Passage 2, Maria's nervousness is evident when her 'hands trembled' as she approached the stage.","Maria's hands trembled. That's the proof."],correctAnswer:2,explanation:`**GRADE 6 SKILL—CITING LOCATION:**
✅ 'In the opening paragraph' = specific location
✅ Clear claim (nervousness)
✅ Direct quote (hands trembled)
✅ Context (approaching stage)

This helps readers FIND your evidence and shows you read carefully!`},{id:"q14",question:"Which student answer shows they understand the difference between RESTATING vs. just ANSWERING?",options:["Question: 'Why did Maria succeed?' Answer: 'She practiced and didn't give up.'","Question: 'Why did Maria succeed?' Answer: 'Maria succeeded because she practiced for months and persevered through her initial mistake.'","Question: 'Why did Maria succeed?' Answer: 'Because of practice.'","Question: 'Why did Maria succeed?' Answer: 'The passage talks about Maria performing.'"],correctAnswer:1,explanation:`**R - RESTATE:**
Option B turns the question into a complete sentence: 'Maria succeeded because...'

❌ Option A: Doesn't restate—jumps straight to answer
❌ Option C: Fragment, not a complete sentence
❌ Option D: Doesn't answer the question

**WHY RESTATE?** Creates a topic sentence that can stand alone, providing context for your reader.`}]}}]},{id:"reading-4",title:"Chapter 4: Theme vs. Central Idea",lessons:[{id:"reading-4-1",title:"Theme in Literature vs. Central Idea in Nonfiction",type:"lesson",content:{introduction:"California Grade 6 standards distinguish between 'summary' and 'analysis.' Understanding THEME (in literature) and CENTRAL IDEA (in nonfiction) is crucial for reading success. Remember: a theme is never just one word—it's a complete universal truth about life!",explanation:`**📚 THEME (For Literature/Fiction)**

**What is Theme?**

A theme is the underlying MESSAGE, LESSON, or UNIVERSAL TRUTH about life or human nature that the author wants you to understand.

**🚫 WHAT THEME IS NOT:**

❌ **NOT just a topic or subject** ("friendship," "courage," "family")
❌ **NOT a plot summary** ("A boy goes on an adventure")
❌ **NOT specific to one character** ("Sarah learned to be brave")

**✅ WHAT THEME IS:**

✅ A **COMPLETE STATEMENT** about life or human nature
✅ **UNIVERSAL**—could apply to many situations
✅ A **LESSON** or **MESSAGE** about how the world works
✅ What the author wants you to **THINK ABOUT** or **LEARN**

---

**🎯 THE THEME FORMULA**

**Topic** (one word) + **What the story says about it** = **THEME** (complete sentence)

**Examples:**

**Example 1:**
- ❌ Topic: "Friendship"
- ✅ Theme: "True friendship requires sacrifice and loyalty, even when it's difficult."

**Example 2:**
- ❌ Topic: "Courage"
- ✅ Theme: "Courage means doing what's right even when you're afraid."

**Example 3:**
- ❌ Topic: "Growing up"
- ✅ Theme: "Growing up means accepting responsibility for your choices and their consequences."

---

**🔍 HOW TO FIND THEME (4-Step Method)**

**Step 1: Identify the TOPIC**
- What is the story mostly about? (1-2 words)
- Common topics: friendship, courage, honesty, perseverance, family, identity, change

**Step 2: Track CHARACTER CHANGE**
- What does the main character learn?
- How do they change from beginning to end?
- What mistakes do they make?
- What realizations do they have?

**Step 3: Look for REPEATED IDEAS**
- What ideas or situations come up multiple times?
- What do characters talk about often?
- What conflicts keep occurring?

**Step 4: Ask "SO WHAT?"**
- What is the AUTHOR'S MESSAGE?
- What does the author want ME to learn or think about?
- What statement about LIFE is this story making?

---

**📖 DETAILED THEME EXAMPLE**

**Story:** A student struggles with math and feels like giving up. She hides her poor grades from her parents. After failing a test, she finally asks her teacher for help. With tutoring and practice, she improves and eventually passes.

**Finding Theme:**

**Step 1 - Topic:** Perseverance, asking for help, overcoming challenges

**Step 2 - Character Change:**
- Beginning: Struggled alone, hid problems, felt like giving up
- End: Asked for help, practiced, succeeded
- **Lesson Learned:** Asking for help isn't weakness—it's smart

**Step 3 - Repeated Ideas:**
- Repeated mentions of: struggle, asking for help, practice, improvement

**Step 4 - Author's Message:**

❌ **Weak Themes:**
- "Math" (just a topic)
- "She learned to ask for help" (too specific to character)
- "Don't give up" (too simple, incomplete)

✅ **STRONG THEMES:**
- "Persistence and asking for help lead to success, even when challenges seem overwhelming."
- "True strength comes from acknowledging when you need help and having the courage to ask for it."
- "Overcoming obstacles requires both determination and the willingness to accept support from others."

**Notice:** All strong themes are COMPLETE SENTENCES that could apply to MANY situations in life, not just this one story!

---

**💡 MULTIPLE THEMES**

Most stories have MULTIPLE themes. A rich story might explore:
- **Primary Theme:** The main, most important message
- **Secondary Themes:** Other messages or lessons

**Example from a story about a team:**
- **Primary:** "Success requires teamwork and putting the group's needs before individual glory."
- **Secondary:** "True leaders inspire others through their actions, not just their words."
- **Secondary:** "Overcoming differences strengthens relationships."

---

**📰 CENTRAL IDEA (For Informational/Nonfiction)**

**What is Central Idea?**

The central idea is the **MAIN POINT** the author is making about the topic. It's what the author wants you to understand or believe.

**Formula:** **Topic** + **What the author is saying about it** = **Central Idea**

---

**🎯 HOW TO FIND CENTRAL IDEA**

**Step 1: Identify the TOPIC**
- What is this article/text about? (1-2 words)

**Step 2: Find the AUTHOR'S POINT**
- What is the author SAYING about this topic?
- What's the main argument or information?
- What do ALL the paragraphs support?

**Step 3: Check for SUPPORT**
- Do most details support this idea?
- Does this cover the WHOLE text?

**Step 4: State it in ONE SENTENCE**
- Combine topic + author's point
- Should be a complete, specific sentence

---

**📊 CENTRAL IDEA EXAMPLES**

**Example 1:**
**Article about recycling**
- ❌ Topic only: "Recycling"
- ❌ Too vague: "Recycling is good"
- ✅ Strong Central Idea: "Recycling is essential for reducing waste and protecting the environment for future generations."

**Example 2:**
**Article about honeybees**
- ❌ Topic only: "Bees"
- ❌ Too general: "Bees are important"
- ✅ Strong Central Idea: "Declining honeybee populations threaten global food security because bees are essential pollinators for most crops."

**Example 3:**
**Article about exercise**
- ❌ Topic only: "Exercise"
- ❌ Incomplete: "Exercise is healthy"
- ✅ Strong Central Idea: "Regular exercise provides both physical and mental health benefits, making it essential for overall well-being."

---

**🔄 THEME vs. CENTRAL IDEA: KEY DIFFERENCES**

| **THEME (Fiction)** | **CENTRAL IDEA (Nonfiction)** |
|---------------------|-------------------------------|
| Universal message about life | Author's main point about a topic |
| Applies to many situations | Specific to this text/topic |
| Often implied, must be inferred | Usually more directly stated |
| "What's the lesson?" | "What's the main point?" |
| About human nature, values | About facts, arguments, information |
| Example: "Courage is found in unexpected places" | Example: "Solar energy reduces pollution" |

---

**📝 GRADE 6 SKILL: HOW THEME IS DEVELOPED**

California standards require you to analyze HOW a theme develops through specific plot points.

**What This Means:**
- Don't just STATE the theme
- TRACE how it develops through the story
- Show HOW specific events reveal the theme

**Example:**
**Theme:** "True friendship means supporting each other through difficult times."

**How it develops:**
1. **Beginning:** Characters are casual friends
2. **Rising Action:** One friend faces a serious problem
3. **Climax:** Other friend must choose: help or avoid involvement
4. **Resolution:** Friend chooses to help despite personal cost
5. **Conclusion:** Their friendship deepens through shared hardship

**Analysis:** The theme develops gradually—friendship is tested by adversity, and the characters' choices reveal what true friendship means.

---

**📋 OBJECTIVE SUMMARY (Required for Both!)**

**What is an Objective Summary?**

A brief recap of the text that includes ONLY facts and main points—NO personal opinions!

**OBJECTIVE SUMMARY RULES:**

**DO:**
✅ State title and author (if known)
✅ Identify the main topic/theme/central idea
✅ Include only the MOST IMPORTANT details (2-4 key points)
✅ Explain the outcome or conclusion
✅ Use YOUR OWN WORDS (paraphrase)
✅ Keep it brief (3-5 sentences typically)
✅ Stay NEUTRAL—just facts

**DON'T:**
❌ Use "I think," "I feel," "I believe"
❌ Add personal opinions or judgments
❌ Include minor details
❌ Copy sentences word-for-word (without quotes)
❌ Add information not in the text
❌ Use phrases like "This story is boring/interesting/exciting"

---

**✅ OBJECTIVE SUMMARY EXAMPLES**

**SUBJECTIVE (WRONG):**
"This is a really great story about friendship. I loved when Sarah helped her friend because it was so nice. Everyone should read this story because it teaches important lessons. I think the ending was perfect."

❌ Full of opinions: "great," "I loved," "so nice," "everyone should," "I think," "perfect"

**OBJECTIVE (CORRECT - Fiction):**
"In 'The Challenge' by Maria Santos, a young runner named Alex overcomes self-doubt to compete in a championship race. With support from her coach and dedicated practice, she learns that true victory comes from personal growth rather than just winning trophies. The story explores themes of perseverance and self-discovery."

✅ Title and author stated
✅ Main character and situation identified
✅ Key events summarized
✅ Theme mentioned
✅ NO personal opinions

**OBJECTIVE (CORRECT - Nonfiction):**
"The article 'Saving the Bees' explains how declining honeybee populations threaten food production worldwide. The author describes how bees pollinate crops, identifies causes of population decline including pesticides and habitat loss, and presents conservation solutions such as creating bee-friendly gardens and reducing chemical use."

✅ Title and type (article) stated
✅ Central idea identified (bee decline threatens food)
✅ Main points covered (why bees matter, causes, solutions)
✅ NO opinions ("I think bees are cute")

---

**⚠️ COMMON MISTAKES**

**Mistake 1: Confusing Topic with Theme**
- ❌ "The theme is friendship."
- ✅ "The theme is that true friendship requires sacrifice."

**Mistake 2: Being Too Specific to the Plot**
- ❌ "The theme is that Sarah learned to trust her teammates."
- ✅ "The theme is that trust is essential for successful teamwork."

**Mistake 3: Making It Too Simple**
- ❌ "Honesty is good."
- ✅ "Honesty, even when difficult, builds trust and strengthens relationships."

**Mistake 4: Summary Instead of Theme**
- ❌ "This story is about a girl who joins the soccer team and makes friends."
- ✅ "This story shows that taking risks and stepping outside your comfort zone can lead to personal growth and meaningful connections."

**Mistake 5: Adding Opinions to Summary**
- ❌ "I really liked this amazing article about whales."
- ✅ "The article explains how whales communicate using complex vocalizations."

---

**🎓 WHY THIS MATTERS**

**For Tests:**
- Theme questions appear on EVERY reading test
- Must distinguish between topic and theme
- Must distinguish between fiction (theme) and nonfiction (central idea)
- Must write objective summaries

**For Analysis:**
- Understanding theme = understanding deeper meaning
- Connects literature to real life
- Develops critical thinking

**For Writing:**
- Your essays need clear central ideas
- Understanding theme helps you write better stories
- Objective summarizing is essential for research papers`,examples:[{text:`**Fiction Example:**

Story: A student struggles with math but refuses to give up. After months of extra practice and asking for help from her teacher, she finally understands the concepts and passes the final exam.

❌ Weak: "Math" or "School" (just topics)
❌ Weak: "The girl learned math" (too specific)
✅ Strong Theme: "Persistence and asking for help lead to success, even when challenges seem overwhelming."`,explanation:"The theme is a COMPLETE STATEMENT about life (persistence + help = success) that applies to many situations beyond just this story. It's UNIVERSAL—anyone facing challenges could apply this wisdom."},{text:`**Nonfiction Example:**

Article: Discusses how bees pollinate flowers, explains why bee populations are declining (pesticides, habitat loss), and argues that losing bees would threaten global food supplies.

❌ Weak: "Bees" (just a topic)
❌ Weak: "This article is about bees" (too vague)
✅ Strong Central Idea: "Declining bee populations threaten global food security because bees are essential pollinators for most agricultural crops."`,explanation:"The central idea states what the author is ARGUING about bees—not just the topic, but the specific POINT being made. It covers the whole article: what bees do (pollinate), the problem (decline), and the consequence (food threat)."},{text:`**How Theme Develops Example:**

Story about a character who learns about honesty.

**Beginning:** Character lies to avoid getting in trouble
**Middle:** Lie grows bigger, causes more problems
**Climax:** Must decide: tell truth or continue lying
**End:** Tells truth, faces consequences, but earns respect and trust

**Theme:** "Honesty, even when difficult, ultimately leads to stronger relationships and self-respect."

**How it develops:** The theme is revealed through the character's journey—the lie creates problems (showing dishonesty has consequences), and the decision to be honest resolves conflicts and builds trust (showing honesty's value).`,explanation:"This demonstrates the Grade 6 skill of analyzing HOW theme develops through specific plot events, not just identifying what the theme is."}],quickPractice:{question:`Read this summary and decide:

'This story is about a boy named Tim who joins the basketball team even though he's short. At first, nobody passes him the ball, but he practices really hard. During the championship game, he scores the winning basket!'

**Is this a THEME or a PLOT SUMMARY?**

If it's a plot summary, what would the THEME be?`,hint:"Theme = universal message about life. Plot summary = what happens in the story.",answer:`This is a **PLOT SUMMARY**—it just tells WHAT HAPPENS (Tim joins team, practices, scores).

**Possible THEMES:**
- "Determination and hard work can help you overcome physical limitations."
- "True success comes from perseverance, not from natural advantages."
- "Proving yourself requires dedication and the courage to keep trying when others doubt you."

Notice: Themes are COMPLETE SENTENCES about life that could apply to many situations, not just basketball!`}}},{id:"reading-4-2",title:"Practice: Theme and Central Idea",type:"exercise",content:{instructions:"Remember: Theme is a complete statement about life (fiction). Central Idea is the author's main point (nonfiction). Distinguish topics from themes, and identify objective vs. subjective statements.",passage:`**Passage 1 - Fiction (Questions 1-7):**

Marcus had always been the smallest kid in his class. When basketball tryouts came around, his older brother laughed. "You're too short for basketball," he said. But Marcus showed up anyway.

For the first two weeks, nobody passed him the ball. The coach barely noticed him. Marcus practiced layups alone before school and studied professional players' techniques at night. He learned to use his speed and quick thinking to his advantage.

During the championship game, with ten seconds left and the team down by one point, the star player was double-teamed. He spotted Marcus, wide open. The pass flew across the court. Marcus caught it, took a breath, and shot. The ball swished through the net as the buzzer sounded.

After the game, his brother high-fived him. "I guess I was wrong," he admitted. Marcus smiled. He hadn't grown any taller, but he'd proven that determination and hard work matter more than natural advantages.

**Passage 2 - Nonfiction (Questions 8-13):**

Plastic pollution has become one of the most serious environmental challenges facing our planet. Every year, approximately 8 million tons of plastic waste enter our oceans, harming marine life and disrupting ecosystems. Sea turtles mistake plastic bags for jellyfish, their natural food, while seabirds feed plastic fragments to their chicks. Scientists have discovered microplastics in the deepest ocean trenches and even in Arctic ice.

The problem extends beyond wildlife. Microplastics have entered the human food chain through seafood and drinking water. Studies have found plastic particles in human blood and organs, though the long-term health effects remain unknown.

Solutions exist but require global action. Reducing single-use plastics, improving waste management systems, and developing biodegradable alternatives are all essential steps. Several countries have successfully banned plastic bags and straws. Beach cleanup initiatives and ocean cleanup technologies are removing existing plastic. However, experts agree that prevention is more effective than cleanup—we must dramatically reduce plastic production and consumption to protect our oceans and health.`,questions:[{id:"q1",question:"Which is the complete THEME (not topic) of Passage 1?",options:["Basketball","Marcus learns to play basketball","Determination and hard work can overcome natural disadvantages and prove doubters wrong","Being short"],correctAnswer:2,explanation:"This is a COMPLETE THEME statement: It's universal (applies beyond just Marcus), it's a complete idea about life (determination > natural advantages), and it expresses what the author wants readers to understand about human capability."},{id:"q2",question:"How does the theme develop through SPECIFIC PLOT POINTS in Passage 1? (Grade 6 Skill)",options:["Marcus plays basketball and wins","Beginning: told he's too short → Middle: practices alone, learns strategy → Climax: makes winning shot → Resolution: proves size doesn't determine success","Marcus is short but works hard","The story shows that basketball is fun"],correctAnswer:1,explanation:"**Grade 6 Skill**: Analyzing HOW theme develops through plot. Option B traces the theme through specific events: Challenge (too short) → Response (practice + strategy) → Test (game situation) → Proof (success despite size). This shows theme isn't just stated—it's BUILT through the story."},{id:"q3",question:"Which statement is TOO SPECIFIC to be the theme of Passage 1?",options:["True success comes from effort, not from natural gifts","Marcus learned that being short doesn't stop you from playing basketball","Perseverance and dedication can help overcome physical limitations","Proving yourself requires courage and hard work"],correctAnswer:1,explanation:"Option B is too SPECIFIC to Marcus and basketball. A theme should be UNIVERSAL—apply to many situations. Options A, C, and D could apply to sports, academics, careers, or life in general. Good themes are broader than one character's situation."},{id:"q4",question:"Passage 1 has multiple themes. Which is a SECONDARY theme?",options:["Determination overcomes disadvantages (PRIMARY)","Believing in someone can change after you see their dedication and results","Basketball requires teamwork","Schools should have sports"],correctAnswer:1,explanation:"**Multiple Themes**: Rich stories explore several ideas. PRIMARY: determination/hard work. SECONDARY (Option B): changed perceptions—the brother's attitude shifts from mockery to respect. This is a real theme (complete statement about how people change opinions) but less central than the main determination theme."},{id:"q5",question:"Which is an OBJECTIVE summary of Passage 1?",options:["I loved this story about Marcus! He's so inspiring and everyone should read it because it's the best story about basketball.","This exciting tale shows why you should never give up on your dreams, no matter what anyone says to you.","Marcus, the smallest player, faces doubt about his basketball abilities but through dedicated practice and strategic thinking, he makes the championship-winning shot and earns respect.","The story proves that short people can be good at basketball if they just believe in themselves."],correctAnswer:2,explanation:`**OBJECTIVE SUMMARY checklist:**
✅ C: No opinions ('I loved,' 'best,' 'exciting')
✅ C: States main character + situation + outcome
✅ C: Uses own words, not copied
✅ C: Brief but complete

❌ A: Full of opinions ('loved,' 'inspiring,' 'best')
❌ B: Preachy ('should'), adds opinion
❌ D: States opinion as fact ('proves')`},{id:"q6",question:"What evidence from Passage 1 BEST shows the theme developing?",options:["Marcus is the smallest kid","Marcus 'practiced layups alone before school and studied professional players' techniques at night'","The championship game happens","Marcus's brother high-fives him"],correctAnswer:1,explanation:"This evidence DIRECTLY SHOWS the theme (hard work/determination). 'Practiced alone before school' + 'studied at night' = dedication beyond required practice. This isn't just about the plot—it's the KEY EVIDENCE of what makes Marcus succeed, which IS the theme."},{id:"q7",question:"If you had to state the theme of Passage 1 in one sentence for an essay, which is BEST?",options:["The theme is basketball.","Marcus shows that you shouldn't judge people.","The story explores the theme that success stems from dedication and strategic effort rather than innate physical advantages.","I think the theme is about not giving up."],correctAnswer:2,explanation:`**FORMAL THEME STATEMENT (for essays):**
✅ C: Complete sentence, formal language
✅ C: Universal (not just Marcus)
✅ C: Specific enough to be meaningful

❌ A: Just a topic
❌ B: Too narrow (judging is secondary)
❌ D: Uses 'I think' (not objective) and too vague`},{id:"q8",question:"What is the CENTRAL IDEA of Passage 2?",options:["Plastic pollution","Plastic is bad for oceans","Plastic pollution is a severe global crisis affecting marine life and human health, requiring urgent action and prevention strategies.","We should clean up beaches"],correctAnswer:2,explanation:`**CENTRAL IDEA** = Topic + Author's Main Point
✅ C: Identifies the problem (plastic pollution)
✅ C: Explains the scope (global, marine + human)
✅ C: States what's needed (urgent action/prevention)
✅ C: Covers WHOLE passage

Options A, B, D are too simple/incomplete.`},{id:"q9",question:"How does Passage 2 SUPPORT its central idea? (What type of evidence?)",options:["The author shares personal opinions about plastic","The author uses statistics (8 million tons), specific examples (turtles, seabirds), scientific findings (microplastics in humans), and expert consensus (prevention > cleanup)","The author tells a story about ocean animals","The author describes what plastic looks like"],correctAnswer:1,explanation:`**NONFICTION EVIDENCE TYPES:**
Passage 2 uses:
- **Statistics**: 8 million tons (shows scale)
- **Examples**: turtles, seabirds (shows impact)
- **Scientific research**: microplastics in blood (shows human threat)
- **Expert opinion**: prevention > cleanup (shows solutions)

This variety of evidence makes the central idea persuasive and credible.`},{id:"q10",question:"Which is an OBJECTIVE summary of Passage 2?",options:["This terrifying article should make everyone stop using plastic immediately because it's killing our beautiful planet and ruining our future.","Plastic pollution is a major environmental problem affecting oceans and human health. The article describes how 8 million tons of plastic enter oceans annually, harming wildlife and entering the food chain. Solutions include reducing single-use plastics and improving waste management, with prevention being more effective than cleanup.","I think plastic pollution is really bad and the author does a good job explaining why we need to care about this important issue.","The article talks about plastic in the ocean and says we should fix it."],correctAnswer:1,explanation:`**OBJECTIVE SUMMARY (Nonfiction):**
✅ B: States central idea (plastic problem)
✅ B: Includes key facts (8 million tons, affects wildlife + humans)
✅ B: Mentions solutions (reduce, manage, prevent)
✅ B: NO opinions, just information

❌ A: Emotional language ('terrifying,' 'beautiful')
❌ C: 'I think,' personal opinion
❌ D: Too vague, misses key information`},{id:"q11",question:"What is the author's PRIMARY PURPOSE in Passage 2?",options:["To entertain readers with ocean stories","To inform readers about plastic pollution and persuade them that action is urgently needed","To describe what plastic looks like","To tell a story about sea turtles"],correctAnswer:1,explanation:`**DUAL PURPOSE**: Passage 2 has TWO purposes:
1. **INFORM**: Provides facts about the problem (statistics, examples, research)
2. **PERSUADE**: Argues action is needed ('most serious,' 'require global action,' 'must dramatically reduce')

This is common in advocacy writing—inform about a problem AND persuade readers to care/act.`},{id:"q12",question:"Compare Passages 1 & 2: What's the key difference between their main messages?",options:["Passage 1 is longer than Passage 2","Passage 1 expresses a universal theme about human character (fiction), while Passage 2 presents a specific argument about an environmental issue (nonfiction)","Passage 1 is more interesting","Both have the same message"],correctAnswer:1,explanation:`**THEME vs. CENTRAL IDEA:**

**Passage 1 (Fiction):**
- **THEME**: Universal truth about life/human nature
- Could apply to anyone, anywhere, in any situation
- About VALUES and CHARACTER

**Passage 2 (Nonfiction):**
- **CENTRAL IDEA**: Specific argument about a real issue
- About THIS topic (plastic pollution)
- About FACTS and SOLUTIONS

This is the KEY Grade 6 distinction!`},{id:"q13",question:"Which student correctly identifies the difference between topic and theme/central idea?",options:["Student A: 'The topic and theme are the same thing—both are what the passage is about.'","Student B: 'Topic is one or two words identifying the subject. Theme (fiction) or Central Idea (nonfiction) is a complete sentence stating what the author is saying ABOUT that topic.'","Student C: 'Theme is always just one word like courage or friendship.'","Student D: 'Central idea is only for stories, and theme is only for articles.'"],correctAnswer:1,explanation:`**Student B is CORRECT:**

**TOPIC** = The subject (1-2 words)
- Passage 1 topic: Basketball/determination
- Passage 2 topic: Plastic pollution

**THEME/CENTRAL IDEA** = Complete statement about the topic
- P1 theme: 'Determination overcomes disadvantages'
- P2 central idea: 'Plastic pollution requires urgent global action'

**KEY**: Topic is WHAT it's about. Theme/Central Idea is what the author is SAYING about it.`}]}}]},{id:"reading-5",title:"Chapter 5: Plot Structure and Text Organization",lessons:[{id:"reading-5-1",title:"Understanding the 'Skeleton': Plot Structure & Text Organization",type:"lesson",content:{introduction:"Every story and article has a 'skeleton'—a structure that holds it together. For fiction, this means understanding the PLOT DIAGRAM. For nonfiction, it means recognizing the FIVE TEXT STRUCTURES and identifying the INCITING INCIDENT that starts the story's conflict. Understanding structure helps you predict, comprehend, and analyze what you read.",explanation:`**📖 FICTION: PLOT STRUCTURE (The Plot Diagram)**

Every story follows a pattern. Think of it as a mountain:

\`\`\`
           3. CLIMAX (Peak!)
              /\\
             /  \\
        2. /    \\ 4.
   RISING /      \\ FALLING
   ACTION/        \\ACTION
        /          \\
    1. /            \\ 5.
  EXPO.            RESOLUTION
\`\`\`

---

**1. EXPOSITION (The Beginning/Setup)**

**What it is:**
- Introduces the "normal world"
- Presents characters, setting, and background
- Sets up the situation before conflict begins

**What to look for:**
- WHO are the main characters?
- WHERE and WHEN does this take place?
- WHAT is the character's normal life like?

**Example:**
"Sarah loved her quiet life in the small town of Millbrook. Every day, she walked the same path to school, ate lunch with the same two friends, and studied in the library until sunset."

**Purpose:** Establishes the starting point so we can see how things change.

---

**2. RISING ACTION (Conflict Builds/Complications)**

**What it is:**
- Problems and challenges arise
- Tension INCREASES with each event
- Series of events that complicate the situation
- Usually the LONGEST part of the story

**What to look for:**
- What problems does the character face?
- How do things get MORE complicated?
- What obstacles appear?
- How does tension build?

**Example:**
"A new student arrived and challenged Sarah to a debate competition. Sarah agreed but soon realized she was terrified of public speaking. Her practice speeches went poorly. Her friends tried to help, but she kept freezing up. The competition was in three days, then two, then tomorrow..."

**Purpose:** Creates suspense and leads to the climax.

---

**🎯 GRADE 6 SKILL: THE INCITING INCIDENT**

**What is it?**

The **INCITING INCIDENT** is the SPECIFIC MOMENT that starts the main conflict. It's the event that kicks off the rising action and changes everything.

**How to identify it:**
- It happens EARLY (usually in or right after exposition)
- It DISRUPTS the normal world
- It FORCES the character to face a challenge
- Without it, there would be no story

**Example from above:**
- **Exposition:** Sarah's quiet life
- **INCITING INCIDENT:** New student challenges her to debate competition ← THIS starts everything!
- **Rising Action:** All her struggles with public speaking

**Common Inciting Incidents:**
- Receiving a mysterious letter
- Meeting a new person who changes things
- Discovering a secret
- A sudden problem or crisis
- Being challenged or dared

**Test:** If you removed this event, would the story still happen? If NO, it's likely the inciting incident!

---

**3. CLIMAX (The Turning Point/Peak)**

**What it is:**
- The most INTENSE, EXCITING moment
- The PEAK of the action/conflict
- Where the main conflict reaches its highest point
- Usually involves a major decision or confrontation

**What to look for:**
- The moment of greatest tension
- The "big showdown" or decision
- The point where everything changes
- The most emotional or dramatic scene

**Example:**
"Sarah stepped to the podium, legs shaking. The auditorium was silent. She looked at her note cards, then at the crowd. In that moment, she made a choice: speak from her heart instead of her cards. She took a deep breath and began."

**Purpose:** This is what the whole story has been building toward!

---

**4. FALLING ACTION (After the Climax/Consequences)**

**What it is:**
- Events AFTER the climax
- Tension DECREASES
- Loose ends start to tie up
- Shows consequences of the climax

**What to look for:**
- What happens as a result of the climax?
- How do other characters react?
- What begins to resolve?

**Example:**
"The audience applauded. Sarah's speech had connected with them. The judges deliberated. Her opponent congratulated her, impressed by her authenticity."

**Purpose:** Wraps up immediate aftermath.

---

**5. RESOLUTION (The End/New Normal)**

**What it is:**
- Conflicts are RESOLVED
- Story CONCLUDES
- Shows the "new normal"
- May include a final lesson or reflection

**What to look for:**
- How did things turn out?
- What changed from the beginning?
- What did the character learn?
- How is life different now?

**Example:**
"Sarah didn't win the debate, but she discovered something more important: her own voice. She joined the drama club and started speaking up in class. The quiet girl from Millbrook had found her confidence."

**Purpose:** Provides closure and shows character growth.

---

**📰 NONFICTION: TEXT STRUCTURES (The 5 Types)**

Nonfiction is organized to present information effectively. Recognizing the structure helps you understand and remember what you read.

---

**1. CHRONOLOGICAL ORDER (Time/Sequence)**

**What it is:**
- Events in the order they happened
- Step-by-step processes
- Timeline of events

**Signal Words:**
- First, second, third
- Next, then, after, before
- Finally, last, eventually
- In 1492, in the 20th century
- Begin by, after that

**Used in:**
- Biographies
- History articles
- Process explanations (how-to)
- Recipes, instructions

**Example:**
"First, gather all ingredients. Next, preheat the oven to 350°F. Then, mix the dry ingredients in one bowl. After that, combine the wet ingredients. Finally, bake for 30 minutes."

---

**2. CAUSE AND EFFECT**

**What it is:**
- Shows WHY something happened (cause)
- Shows WHAT happened as a result (effect)
- Can have multiple causes leading to one effect, or one cause leading to multiple effects

**Signal Words:**
- Because, since, as a result
- Therefore, consequently, thus
- Leads to, causes, due to
- If... then..., so that
- For this reason

**Used in:**
- Science explanations
- History (why events happened)
- Social studies
- Problem analysis

**Example:**
"**Because** heavy rain fell for three days, the river overflowed its banks. **As a result**, many homes were flooded, **which led to** hundreds of families being evacuated. **Therefore**, the city now plans to build better drainage systems."

**Diagram:**
Cause → Effect → Effect → Effect

---

**3. COMPARE AND CONTRAST**

**What it is:**
- Shows SIMILARITIES (compare)
- Shows DIFFERENCES (contrast)
- Examines two or more things side by side

**Signal Words:**
- **Compare (Similarities):** similarly, likewise, both, also, too, in the same way
- **Contrast (Differences):** however, but, on the other hand, unlike, whereas, while, in contrast, although, yet

**Used in:**
- Articles comparing topics
- Reviews
- Decision-making texts
- Analysis

**Example:**
"**Both** dolphins and whales are marine mammals. **Similarly**, they both breathe air and give live birth. **However**, dolphins are generally much smaller. **While** some whales can grow to 100 feet, most dolphins are under 12 feet long. **Unlike** whales, dolphins are highly social and travel in large pods."

**Diagram:**
Topic A ← Similarities → Topic B
         ↓ Differences ↓

---

**4. PROBLEM AND SOLUTION**

**What it is:**
- Presents a PROBLEM or challenge
- Explains how it was or could be SOLVED
- May present multiple solutions

**Signal Words:**
- Problem, issue, challenge, difficulty
- Solution, answer, resolve, fix
- Solve, address, deal with
- One way to..., another approach

**Used in:**
- Persuasive texts
- Proposals
- Scientific research
- Policy articles

**Example:**
"Many schools **face the problem** of excessive food waste in cafeterias. **One solution** is to implement a share table where students can place unwanted items for others. **Another approach** is teaching students about portion sizes. **To address this issue**, some schools have also started composting programs."

**Diagram:**
Problem → Solution 1
       → Solution 2
       → Solution 3

---

**5. DESCRIPTION (Main Idea and Details)**

**What it is:**
- Describes a topic with supporting details
- Lists characteristics, features, or examples
- Provides information ABOUT something

**Signal Words:**
- For example, for instance, such as
- Characteristics, features, includes
- Specifically, in particular
- Most important, also, additionally

**Used in:**
- Encyclopedia entries
- Informational articles
- Reports
- Explanations

**Example:**
"Dolphins are highly intelligent marine mammals. **For example**, they can learn complex tricks and communicate using clicks and whistles. **Additionally**, dolphins use echolocation to navigate and hunt. **Their characteristics include** streamlined bodies, blowholes for breathing, and strong social bonds."

**Diagram:**
Main Topic
  → Detail 1
  → Detail 2
  → Detail 3

---

**🔍 HOW TO IDENTIFY TEXT STRUCTURE**

**Step 1:** Read the passage
**Step 2:** Look for SIGNAL WORDS
**Step 3:** Ask yourself:
- Is this in time order? → Chronological
- Does it explain why/results? → Cause and Effect
- Does it show similarities/differences? → Compare and Contrast
- Does it present a problem and fix? → Problem and Solution
- Does it describe features/details? → Description

---

**⚠️ MIXED STRUCTURES**

Some longer texts use MULTIPLE structures:

**Example:** An article about climate change might:
- **DESCRIBE** what climate change is
- **Explain CAUSES** (greenhouse gases) and **EFFECTS** (rising temperatures)
- **Present the PROBLEM** (environmental damage)
- **Offer SOLUTIONS** (renewable energy)

Identify the PRIMARY structure (what most of the text uses).

---

**🎓 WHY STRUCTURE MATTERS**

**For Fiction:**
- Predicting what comes next
- Understanding pacing and tension
- Analyzing author's craft
- Identifying the most important moment (climax)

**For Nonfiction:**
- Finding information quickly
- Understanding relationships between ideas
- Remembering content better
- Taking organized notes

**For Tests:**
- Structure questions appear frequently
- Understanding structure helps answer other questions
- Required for Grade 6 analysis`,examples:[{text:`**Complete Plot Example:**

**Exposition:** Sarah loves her quiet life in small-town Millbrook.

**Inciting Incident:** A new student challenges her to a debate competition.

**Rising Action:** Sarah realizes she's terrified of public speaking. Practice goes poorly. Competition approaches. Tension builds.

**Climax:** Standing at the podium, Sarah chooses to speak from her heart instead of reading her cards.

**Falling Action:** The audience applauds. Judges deliberate. Her opponent congratulates her.

**Resolution:** Sarah doesn't win, but discovers her voice and joins drama club. She's no longer the quiet girl—she's found her confidence.`,explanation:"Notice how each stage builds on the previous one. The INCITING INCIDENT (the challenge) starts everything. The RISING ACTION creates tension. The CLIMAX is the pivotal moment. The RESOLUTION shows how Sarah has changed from beginning to end."},{text:`**Cause and Effect Example:**

'**Because** plastic takes hundreds of years to decompose, it accumulates in oceans. **As a result**, marine animals often mistake it for food, **which leads to** injury or death. **Therefore**, many countries are banning single-use plastics.'

**Structure:** Signal words 'because,' 'as a result,' 'leads to,' and 'therefore' clearly indicate cause-and-effect structure.`,explanation:"The signal words are your CLUES. This passage explains a chain: slow decomposition → ocean accumulation → animal harm → policy response. Each effect becomes a cause for the next event."},{text:`**Compare and Contrast Example:**

'**While both** are reptiles, snakes and lizards have key differences. Snakes have no legs and move by slithering, **whereas** most lizards have four legs. **However**, **both** are cold-blooded and lay eggs.'

**Structure:** Signal words 'both,' 'while,' 'whereas,' and 'however' indicate compare-and-contrast structure.`,explanation:"The author shows SIMILARITIES (both reptiles, cold-blooded, lay eggs) AND DIFFERENCES (legs, movement). The signal words guide you through what's alike and what's different."}],quickPractice:{question:`**Identify the Structure:**

'Many students struggle with time management. One solution is using a planner to track assignments. Another approach is breaking large projects into smaller tasks. Some students find that setting phone reminders helps them stay on track.'

**What text structure is this?**`,hint:"Look for signal words. Is there a problem mentioned? Are solutions offered?",answer:`**PROBLEM AND SOLUTION**

**Signal words:** 'struggle' (problem), 'solution,' 'approach,' 'helps' (solutions)

**Structure:** States problem (time management) → Offers multiple solutions (planner, break tasks, reminders). This is classic problem-solution organization!`}}},{id:"reading-5-2",title:"Practice: Plot Structure & Text Organization",type:"exercise",content:{instructions:"Identify plot stages, inciting incidents, and text structures. Pay attention to signal words and how ideas are organized!",passage:`**Passage 1 - Fiction (Questions 1-7):**

In the small village of Thornwood, twelve-year-old Alex lived a predictable life. Every morning, he helped his father in the blacksmith shop, hammering horseshoes and repairing tools. Every evening, he studied his lessons and went to bed by eight. Life was simple, orderly, and exactly the same every single day.

One morning, a mysterious traveler arrived with a torn map and an urgent request: "I need someone brave to guide me through the Whispering Forest. There's treasure hidden in the ancient ruins—enough to change your village forever." Alex's father refused, calling it foolishness. But Alex couldn't stop thinking about it.

That night, Alex made a choice that would change everything. He packed a small bag and left a note for his parents. As dawn broke, he and the traveler entered the forest.

The journey was harder than Alex imagined. They faced fierce storms that nearly swept them off mountain paths. Wild animals circled their campsite at night. The map led them to dead ends. The traveler twisted his ankle badly, and they ran out of food. Alex wanted to turn back a dozen times, but something pushed him forward. When they finally reached a rushing river with a broken bridge, Alex nearly gave up entirely. The traveler was injured. They were lost. The treasure seemed impossible to reach.

Standing at that river's edge, cold and exhausted, Alex made a decision. Using skills from the blacksmith shop, he gathered vines and branches. For hours, he worked, building a makeshift bridge. It wasn't perfect, but it might work. Taking a deep breath, he stepped onto his creation. It held. They crossed, step by careful step.

Beyond the river, they found the ruins. But the treasure wasn't gold—it was knowledge. Ancient books filled with forgotten techniques for medicine, farming, and building. The traveler smiled. "This will change your village more than gold ever could."

Alex returned home to worried but proud parents. The village used the knowledge to improve their farms and health. Alex's quiet, predictable life was gone forever. He had discovered that sometimes the greatest treasures are the ones you have to brave the unknown to find, and that he was braver than he ever knew.

**Passage 2 - Nonfiction (Questions 8-14):**

The invention of the printing press by Johannes Gutenberg around 1440 revolutionized human communication. Before this invention, books were copied by hand, a process that was slow, expensive, and prone to errors. A single book could take months to produce. As a result, books were rare and only available to the wealthy and powerful. Most people never learned to read because books were so scarce.

The printing press changed everything. Because books could now be produced quickly and cheaply, more people gained access to information. This led to increased literacy rates across Europe. Consequently, ideas spread faster than ever before. The Protestant Reformation, the Renaissance, and the Scientific Revolution were all accelerated by the printing press. Therefore, historians consider Gutenberg's invention one of the most important in human history, as it democratized knowledge and transformed society.`,questions:[{id:"q1",question:"What is the EXPOSITION of Passage 1?",options:["Alex finds treasure in the ruins","A traveler arrives with a torn map","Alex lives a predictable life in Thornwood, working with his father as a blacksmith","Alex builds a bridge across the river"],correctAnswer:2,explanation:"**EXPOSITION** = introduces the NORMAL WORLD before conflict. Alex's predictable, routine life in the village is the setup. This shows us WHO he is, WHERE he lives, WHAT his normal life is like—before everything changes."},{id:"q2",question:"What is the INCITING INCIDENT that starts the main conflict? (Grade 6 Skill)",options:["Alex helps his father in the shop","The mysterious traveler arrives and offers Alex a chance to guide him through the forest for treasure","Alex faces a storm on the mountain","Alex returns home to his parents"],correctAnswer:1,explanation:"**INCITING INCIDENT** = the specific event that STARTS everything and disrupts the normal world. The traveler's arrival and request is THE moment that begins Alex's journey. Without this, Alex would still be living his predictable life. This kicks off the rising action."},{id:"q3",question:"Which events are part of the RISING ACTION?",options:["Alex lives a predictable life","Fierce storms, wild animals, dead ends, traveler's injury, running out of food, reaching the broken bridge","Alex builds the bridge and crosses","Alex returns home and the village improves"],correctAnswer:1,explanation:"**RISING ACTION** = series of complications that BUILD TENSION. Each challenge (storms, animals, injury, no food, broken bridge) makes things HARDER and increases suspense. Notice how problems PILE UP, leading toward the climax. This is the longest part of the story."},{id:"q4",question:"What is the CLIMAX of the story?",options:["The traveler arrives with a map","They face storms and wild animals","Standing at the river's edge, exhausted and ready to give up, Alex decides to build a bridge and takes the first step onto it","Alex finds books in the ruins"],correctAnswer:2,explanation:"**CLIMAX** = the moment of HIGHEST TENSION and the TURNING POINT. This is it: Alex at his lowest point (cold, exhausted, traveler injured) must make THE crucial decision. Building and crossing the bridge is the pivotal action that determines success or failure. This is the peak of the mountain!"},{id:"q5",question:"Which is the FALLING ACTION?",options:["Alex faces challenges in the forest","Alex builds and crosses the bridge","They find the ruins and discover the treasure is ancient books of knowledge; the traveler explains its value","Alex's quiet life in the village"],correctAnswer:2,explanation:"**FALLING ACTION** = events AFTER the climax where tension DECREASES. After crossing the bridge (climax), they discover what the treasure actually is. This wraps up the immediate quest but isn't the final resolution yet."},{id:"q6",question:"What is the RESOLUTION?",options:["Alex leaves home with the traveler","Alex faces many challenges","Alex builds a bridge","Alex returns home; the village uses the knowledge to improve; Alex realizes he's braver than he knew and his life has changed forever"],correctAnswer:3,explanation:"**RESOLUTION** = how things END and the NEW NORMAL. Shows: outcome (village improves), character growth (Alex discovered his bravery), and how life has changed from the beginning (no longer predictable). This provides CLOSURE and shows the lasting impact of the journey."},{id:"q7",question:"How does identifying the plot structure help understand the story's message?",options:["It doesn't help with understanding","It shows how Alex grows from passive (predictable life) to active (brave decision-maker), with the climax revealing his inner strength","It just tells you what happens","It makes the story longer"],correctAnswer:1,explanation:"**WHY STRUCTURE MATTERS**: By tracking the plot stages, we see Alex's CHARACTER ARC. Exposition (passive/routine) → Inciting Incident (opportunity) → Rising Action (tested) → Climax (decisive action showing growth) → Resolution (transformed). The structure REVEALS the theme: bravery is discovered through challenges."},{id:"q8",question:"What is the PRIMARY text structure of Passage 2?",options:["Chronological Order","Cause and Effect","Compare and Contrast","Problem and Solution"],correctAnswer:1,explanation:"**CAUSE AND EFFECT** is the primary structure. Signal words: 'because,' 'as a result,' 'led to,' 'consequently,' 'therefore.' The passage explains: Printing press invented → books cheaper → more access → increased literacy → faster idea spread → major historical movements. It's a CHAIN of causes and effects."},{id:"q9",question:"Which signal words in Passage 2 BEST indicate the text structure?",options:["First, next, then, finally","Because, as a result, led to, consequently, therefore","Similarly, however, both, unlike","For example, such as, characteristics"],correctAnswer:1,explanation:`These are classic **CAUSE AND EFFECT signal words**. They show RELATIONSHIPS between events:
- 'Because' = introduces a cause
- 'As a result'/'consequently'/'therefore' = introduce effects
- 'Led to' = connects cause to effect
These words guide you through the causal chain.`},{id:"q10",question:"Identify the cause-and-effect chain in Passage 2:",options:["Gutenberg was born, he grew up, he invented the press, he died","Printing press invented → books cheaper/faster → more access → increased literacy → faster idea spread → major historical changes","The printing press and handwritten books are different","The printing press was a problem that needed solving"],correctAnswer:1,explanation:"This is the **CAUSE-AND-EFFECT CHAIN**: Each effect becomes the cause of the next event. Invention (cause 1) → cheap books (effect 1/cause 2) → access (effect 2/cause 3) → literacy (effect 3/cause 4) → idea spread (effect 4/cause 5) → historical impact (final effect). Understanding this chain = understanding the passage!"},{id:"q11",question:"Read this excerpt: 'Before this invention, books were copied by hand... [After], books could now be produced quickly.' What SECONDARY structure is used here?",options:["Description","Chronological Order","Compare and Contrast (before/after)","Problem and Solution"],correctAnswer:2,explanation:"**MIXED STRUCTURES**: While the passage is primarily cause-and-effect, it ALSO uses **COMPARE AND CONTRAST** to show the difference between BEFORE (hand-copied, slow, expensive, rare) and AFTER (printed, fast, cheap, common) the printing press. Signal words: 'before,' 'after,' contrasting descriptions."},{id:"q12",question:"This passage structure: 'First, Gutenberg invented the press around 1440. Then ideas spread. Finally, society transformed.' What structure is this?",options:["This would be Chronological Order due to the time-sequence signal words","Cause and Effect","Compare and Contrast","Description"],correctAnswer:0,explanation:"**CHRONOLOGICAL ORDER** signal words: 'First,' 'around 1440,' 'then,' 'finally.' While the ACTUAL passage uses cause-and-effect, THIS REWRITE would be chronological because it focuses on TIME SEQUENCE rather than cause-and-effect relationships. **Signal words determine structure!**"},{id:"q13",question:"Why does the author structure Passage 2 with cause-and-effect instead of just description?",options:["To make it longer","To show HOW and WHY the printing press created massive changes, not just WHAT it did","Because it's easier to write","To confuse readers"],correctAnswer:1,explanation:"**PURPOSE OF STRUCTURE**: Cause-and-effect shows the IMPACT and CONNECTIONS, not just facts. It reveals: WHY the printing press mattered (democratized knowledge), HOW it created change (chain reaction), and the SIGNIFICANCE (transformed society). Description would just list facts without showing relationships."},{id:"q14",question:"How can recognizing text structure help you study Passage 2?",options:["It can't help","You can create a cause-and-effect chain diagram to organize and remember the information logically","You just memorize every word","You only read the first sentence"],correctAnswer:1,explanation:`**STRUCTURE AIDS COMPREHENSION**: When you recognize cause-and-effect structure, you can:
1. Create a visual chain/diagram
2. Understand RELATIONSHIPS, not just isolated facts
3. Remember information better (because it's connected)
4. Predict what comes next
5. Take better notes organized by causes and effects

Structure is a study tool!`}]}}]},{id:"reading-6",title:"Chapter 6: Point of View and Author's Purpose",lessons:[{id:"reading-6-1",title:"Understanding Perspective and Purpose",type:"lesson",content:{introduction:"In 6th grade, focus shifts to understanding HOW the narrator's perspective shapes the story and WHY the author wrote the text. These are critical analytical skills.",explanation:`**POINT OF VIEW (POV) - Who Tells the Story?**

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

Inform: 'Studies show that students who eat nutritious lunches score 10% higher on afternoon tests than those who eat high-sugar foods.'`,explanation:"Persuasive text uses strong opinions and 'must.' Informative text presents facts and research objectively."}]}},{id:"reading-6-2",title:"Practice: POV and Author's Purpose (P.I.E.E.)",type:"exercise",content:{instructions:"Practice identifying Point of View (1st Person, 3rd Limited, 3rd Omniscient) and Author's Purpose (P.I.E.E. = Persuade, Inform, Entertain, Express). Remember the Grade 6 skill: Explain how author develops narrator's perspective differently from reader's!",passage:`**Passage 1 (Questions 1-6):**

I stepped onto the stage, my heart pounding so loudly I was sure the entire auditorium could hear it. The bright lights blinded me for a moment. I took a deep breath and looked out at the sea of faces. Mom sat in the third row, giving me a thumbs up. I couldn't see if she was nervous for me, but I sure was nervous enough for both of us. This was it—the moment I'd practiced for all year. My hands trembled as I lifted the microphone. "Good evening, everyone," I began, my voice cracking slightly. "Tonight, I want to talk to you about something I care deeply about: protecting our oceans."

**Passage 2 (Questions 7-12):**

Climate change is no longer a distant threat—it is here, and it is urgent. Every single day of delay costs us precious time we cannot afford to waste. We must act now, not tomorrow, not next year, but today! Renewable energy sources like solar and wind power offer real solutions that are already working in countries around the world. Scientists agree that we have less than a decade to make dramatic changes, or we will face catastrophic consequences that will affect every person on this planet. The choice is ours: Will we be remembered as the generation that saved Earth, or the one that destroyed it? Call your representatives. Demand action. The future depends on what you do right now.`,questions:[{id:"q1",question:"What is the Point of View of Passage 1?",options:["First Person","Second Person","Third Person Limited","Third Person Omniscient"],correctAnswer:0,explanation:"**FIRST PERSON**: Uses 'I,' 'my,' 'me.' The narrator is a character IN the story, telling it from their own perspective. We experience events through their eyes and know only their thoughts/feelings directly."},{id:"q2",question:"In Passage 1, the narrator says 'I couldn't see if she was nervous for me.' How does this show the LIMITATION of first person POV?",options:["It doesn't show any limitation","It shows that first person narrators can only know their own thoughts, not others' inner feelings—they must guess based on observations","It shows the narrator doesn't care about Mom's feelings","It shows first person knows everything"],correctAnswer:1,explanation:"**POV LIMITATION (Grade 6 Skill)**: First person can SEE Mom's thumbs up (observable action) but CANNOT know if she's nervous (internal feeling). This creates uncertainty for the reader—we're limited to what the narrator can observe or guess, not others' true thoughts."},{id:"q3",question:"How does the first person POV in Passage 1 affect the reader's experience?",options:["It makes the story boring","It creates an intimate, personal connection—we feel the narrator's nervousness directly, making it more emotionally engaging","It confuses the reader","It provides too much information"],correctAnswer:1,explanation:"**POV IMPACT**: First person makes us EXPERIENCE the nervousness ('heart pounding,' 'hands trembled'). We're INSIDE the character's head, feeling what they feel. This creates empathy and emotional connection—more powerful than just being TOLD someone is nervous."},{id:"q4",question:"**Grade 6 Skill**: How is the NARRATOR'S perspective different from the READER'S perspective in Passage 1?",options:["There is no difference","The narrator is focused inward on their own anxiety and can't see the full audience reaction, while readers can observe both the narrator's nervousness AND anticipate the speech about oceans that's coming","The narrator knows more than the reader","Only the reader is nervous"],correctAnswer:1,explanation:"**CALIFORNIA GRADE 6 STANDARD**: **Narrator sees:** Only their own fear, physical sensations, Mom's gesture. **Reader sees:** The narrator's fear AND the irony that they're about to speak on something they 'care deeply about' (passion) despite being terrified (fear). Reader has a MORE COMPLETE view than the anxious narrator."},{id:"q5",question:"If Passage 1 were rewritten in Third Person Omniscient, what would change?",options:["Nothing would change","We could know Mom's thoughts ('She was nervous but proud'), the audience's reactions, and have a complete view of everyone's feelings, not just the narrator's","It would be shorter","It would be in past tense"],correctAnswer:1,explanation:"**POV COMPARISON**: **First Person (current)**: Only narrator's thoughts. **Third Omniscient (hypothetical)**: Could show: narrator's fear + Mom's pride + audience's anticipation + other characters' perspectives. More information but less intimate connection."},{id:"q6",question:"What is the primary Author's Purpose for Passage 1?",options:["To Persuade readers to protect oceans","To Inform readers about speech-making","To Entertain readers with a relatable story about overcoming stage fright","To Criticize people who get nervous"],correctAnswer:2,explanation:"**PRIMARY PURPOSE: ENTERTAIN**. While the narrator mentions oceans, the passage is really ABOUT experiencing nervousness before a speech—a relatable, engaging moment. It uses sensory details ('heart pounding'), emotions (fear), and builds suspense. The goal: make readers EXPERIENCE this moment, not teach facts or change behavior."},{id:"q7",question:"What is the primary Author's Purpose for Passage 2?",options:["To Entertain with a funny climate story","To Inform about climate science objectively","To Persuade readers that climate action is urgent and they must act immediately","To Express personal feelings without asking for action"],correctAnswer:2,explanation:"**PERSUADE (P.I.E.E.)**: Signal words: 'must,' 'urgent,' 'cannot afford,' 'call your representatives,' 'demand action.' Uses: emotional appeals ('the one that destroyed it?'), urgency ('today, not tomorrow'), call to action ('what you do right now'). Goal: CHANGE BEHAVIOR, not just inform."},{id:"q8",question:"Which persuasive techniques does Passage 2 use?",options:["Only facts and statistics","Emotional language, rhetorical questions, urgent commands, appeals to responsibility, and presenting a stark choice","Humor and jokes","Boring descriptions"],correctAnswer:1,explanation:`**PERSUASIVE TECHNIQUES**:
- **Emotional**: 'catastrophic consequences,' 'precious time'
- **Rhetorical Question**: 'Will we be remembered as...?'
- **Commands**: 'We MUST act,' 'Call,' 'Demand'
- **Stark Choice**: Save Earth OR destroy it (no middle ground)
- **Appeals**: 'every person,' 'the future depends'

All designed to motivate ACTION, not just understanding.`},{id:"q9",question:"How would Passage 2 be different if the purpose were to INFORM instead of PERSUADE?",options:["It would be exactly the same","It would present facts objectively without emotional language, commands, or calls to action—like: 'Climate change refers to long-term temperature increases. Scientists project a 2°C rise by 2050.'","It would be funnier","It would be longer"],correctAnswer:1,explanation:`**INFORM vs. PERSUADE**:

**Current (Persuade)**: 'We MUST act NOW!' (emotion, command)
**If Informing**: 'Global temperatures have risen 1.1°C since 1880.' (neutral facts)

**Current**: 'Will we destroy Earth?' (fear appeal)
**If Informing**: 'Renewable energy provides 29% of global electricity.' (statistics)

Informative = OBJECTIVE, just facts. Persuasive = SUBJECTIVE, trying to influence.`},{id:"q10",question:"Does Passage 2 have a SECONDARY purpose besides persuasion?",options:["No, only persuasion","Yes, it also INFORMS by providing facts (scientists' timeline, renewable energy existence, global impact)","Yes, it entertains with jokes","Yes, it criticizes readers"],correctAnswer:1,explanation:`**MULTIPLE PURPOSES**: Most persuasive texts ALSO inform:

**Primary: PERSUADE** (dominant—uses emotion, commands, calls to action)
**Secondary: INFORM** (provides facts to support argument):
- 'less than a decade' (timeline)
- 'solar and wind power' (solutions exist)
- 'scientists agree' (expert consensus)

Facts make persuasion more credible!`},{id:"q11",question:"What is the 'tone' created by the author's purpose in Passage 2?",options:["Calm and relaxed","Urgent, passionate, and demanding—reflecting the persuasive purpose to motivate immediate action","Humorous and lighthearted","Sad and depressing"],correctAnswer:1,explanation:`**TONE = Author's Attitude**: The persuasive purpose creates an URGENT, PASSIONATE tone:
- Short sentences: 'We must act now'
- Exclamation points!
- Time pressure: 'today,' 'right now'
- High stakes: 'catastrophic'

Tone MATCHES purpose—urgency motivates action.`},{id:"q12",question:"Compare the purposes: Why did the authors choose different purposes for Passages 1 and 2?",options:["Random choice","Passage 1 entertains to create emotional connection to a universal experience; Passage 2 persuades because it seeks behavioral change on an urgent issue. Different goals require different approaches.","Both have the same purpose","The authors didn't think about purpose"],correctAnswer:1,explanation:`**PURPOSE IS STRATEGIC**:

**Passage 1**: Goal = Help readers EXPERIENCE stage fright
→ Best approach: ENTERTAIN (create immersive moment)
→ Tools: First person POV, sensory details, relatable emotions

**Passage 2**: Goal = Get readers to TAKE ACTION
→ Best approach: PERSUADE (motivate behavior)
→ Tools: Commands, urgency, emotional appeals, stark choices

**Authors choose purpose based on what they want readers to DO or FEEL!**`}]}}]},{id:"reading-7",title:"Chapter 7: Close Reading Strategy",lessons:[{id:"reading-7-1",title:"The Three-Pass Method for Difficult Texts",type:"lesson",content:{introduction:"To master Grade 6 reading standards, use the 'Close Reading' method with three passes through difficult texts. Each read has a different focus, building deeper understanding.",explanation:`**THE CLOSE READING METHOD: Three Passes**

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
DO this: Read three times, each with a specific purpose, then answer questions with full understanding`,explanation:"Multiple focused reads lead to better comprehension than one rushed read."}]}},{id:"reading-7-2",title:"Practice: Close Reading with Annotation Symbols",type:"exercise",content:{instructions:"Apply the THREE-PASS METHOD to deeply understand this passage. Practice annotation strategies: ⭐ = main ideas, ❓ = confusing parts, 📖 = key vocabulary, 💡 = insights. Each question tests a different level of reading!",passage:`The old lighthouse stood alone on the jagged cliff, its once-brilliant light extinguished decades ago. Emma climbed the crumbling stone stairs, each step echoing in the hollow tower like whispers from the past. Dust motes danced in the single beam of sunlight that pierced through a cracked window. At the top, breathless and covered in grime, she found what she'd been searching for—her grandmother's journal, leather-bound and filled with elegant handwriting. She opened to a random page: 'November 14, 1962. Tonight, the storm raged, but our light guided the merchant vessel safely past the rocks. Twenty-three souls saved because we stood watch. This is why we endure the isolation.'

Emma sat on the dusty floor, tears streaming down her face as she read page after page. Her grandmother had been the lighthouse keeper for forty years, alone most of that time, performing a duty few appreciated. Now the lighthouse was abandoned, deemed obsolete by modern GPS technology. But reading these entries, Emma understood something profound: some things have value beyond their practical function. This lighthouse wasn't just a building—it was a testament to dedication, to the quiet heroism of doing important work even when nobody was watching.`,questions:[{id:"q1",question:"**FIRST READ**: Who is the main character and what is she doing?",options:["A grandmother writing in a journal","Emma, who is climbing an old lighthouse to find her grandmother's journal","A lighthouse keeper saving ships","A sailor in a storm"],correctAnswer:1,explanation:"**FIRST READ = BASIC FACTS (WHO, WHAT)**: Emma is the main character. She's climbing an abandoned lighthouse and finds her grandmother's journal. This is the surface-level 'what's happening.' Don't worry about deeper meaning yet—just get the basic story."},{id:"q2",question:"**FIRST READ**: When did the grandmother work at the lighthouse?",options:["Currently","Last year","Decades ago (journal entry from 1962, worked for 40 years)","The passage doesn't say"],correctAnswer:2,explanation:"**FIRST READ = BASIC FACTS (WHEN)**: Evidence: 'decades ago,' journal dated 'November 14, 1962,' '40 years' as keeper. First read = gathering timeline information before analyzing why it matters."},{id:"q3",question:"**SECOND READ**: What does 'extinguished' mean? (Use context clues!)",options:["Made brighter","Put out, no longer lit","Repaired","Painted"],correctAnswer:1,explanation:"**SECOND READ = VOCABULARY**: Context clues: 'once-brilliant' (past tense = was bright before) + 'extinguished' + 'abandoned' + 'obsolete' = the light is NO LONGER working. Extinguish = put out/turn off. Second read = figuring out unknown words using context."},{id:"q4",question:"**SECOND READ**: How does the author create a mood in the opening? (Analyzing craft)",options:["With facts and statistics","With descriptive words like 'alone,' 'crumbling,' 'hollow,' 'whispers,' suggesting abandonment and the passage of time","With dialogue and conversation","With humor and jokes"],correctAnswer:1,explanation:"**SECOND READ = HOW IT'S BUILT**: Author's craft: lonely words ('alone'), decay words ('crumbling,' 'grime'), sensory details ('echoing,' 'dust motes,' 'cracked window'), metaphor ('whispers from the past'). These create a MELANCHOLY, NOSTALGIC mood. Second read = noticing author's techniques."},{id:"q5",question:"**SECOND READ**: What is the structure? (How is it organized?)",options:["Compare and contrast","Cause and effect","Present action (Emma's climb) → Discovery (journal) → Past story (1962 entry) → Present reflection (Emma's realization)","Chronological from beginning to end"],correctAnswer:2,explanation:`**SECOND READ = STRUCTURE**: The passage moves between TIME PERIODS:
1. PRESENT: Emma climbs (paragraphs 1-2)
2. PAST: Journal quote from 1962 (embedded)
3. PRESENT: Emma reads and reflects (final paragraph)

This structure CONNECTS past and present, showing how history speaks to Emma. Second read = identifying how pieces fit together.`},{id:"q6",question:"**THIRD READ**: What is the THEME (deep message about life)?",options:["Lighthouses are old","GPS is better than lighthouses","True value lies in dedication and purpose, not just practical function; important work matters even when unrecognized","Emma likes reading journals"],correctAnswer:2,explanation:"**THIRD READ = THEME/DEEP MEANING**: Emma's realization: 'value beyond their practical function' + 'quiet heroism of doing important work even when nobody was watching.' This is UNIVERSAL—applies to teachers, nurses, parents, anyone doing important work without recognition. Third read = understanding life lessons."},{id:"q7",question:"**THIRD READ**: What can you INFER about why Emma cried?",options:["She was sad the lighthouse was dirty","She discovered her grandmother's unrecognized dedication and sacrifice, connecting emotionally to a family legacy she'd never fully understood","She was tired from climbing","She didn't like the journal"],correctAnswer:1,explanation:"**THIRD READ = INFERENCE**: Text says: 'tears streaming' + 'understood something profound.' Clues: grandmother's isolation ('alone most of that time'), dedication ('40 years'), unappreciated work ('few appreciated'), Emma's search ('what she'd been searching for'). INFERENCE: Emma is moved by discovering her grandmother's hidden heroism and sacrifice."},{id:"q8",question:"**THIRD READ**: What is the SYMBOL: What does the lighthouse represent beyond a building?",options:["Just a place to put lights","The past, dedication, purpose, quiet heroism, and work that has value even when society deems it obsolete","Modern technology","Emma's house"],correctAnswer:1,explanation:`**THIRD READ = SYMBOLISM/DEEPER MEANING**: The lighthouse is a SYMBOL (represents more than itself):
- PAST: Connection to history/family
- DEDICATION: Grandmother's 40 years
- PURPOSE: Saving lives ('23 souls')
- OBSOLESCENCE: 'Deemed obsolete' yet still valuable

Final line makes it explicit: 'wasn't just a building—testament to dedication.' Third read = seeing layers of meaning.`},{id:"q9",question:"**ANNOTATION STRATEGY**: Which part should you mark with ⭐ (main idea)?",options:["'The old lighthouse stood alone'","'Dust motes danced in the sunlight'","'some things have value beyond their practical function... testament to dedication, to the quiet heroism'","'November 14, 1962'"],correctAnswer:2,explanation:`**ANNOTATION: ⭐ = MAIN IDEAS/KEY INSIGHTS**: Option C is Emma's REALIZATION—the central message/theme. This is what the whole passage builds toward. When annotating:
⭐ = thesis, main ideas, key realizations
❓ = confusing parts
📖 = important vocabulary
💡 = your personal insights`},{id:"q10",question:"**CONNECTION**: How does this passage connect to the REAL WORLD?",options:["It doesn't connect to anything","It reflects how society often overlooks essential workers (teachers, janitors, nurses) whose 'practical function' is replaced but whose dedication has lasting value","It's only about lighthouses","It's about technology being bad"],correctAnswer:1,explanation:`**THIRD READ = CONNECTIONS**: Theme applies beyond lighthouses to:
- Teachers (undervalued, work unseen)
- Essential workers (unrecognized dedication)
- Anyone doing important work without praise
- Older people/traditions society deems 'obsolete'

This is TEXT-TO-WORLD connection. Close reading means seeing how literature reflects universal human experiences.`},{id:"q11",question:"**AUTHOR'S PURPOSE**: Why did the author write this passage?",options:["To inform about how lighthouses work","To persuade readers to save lighthouses","To make readers FEEL the value of unrecognized dedication and reflect on what society deems 'obsolete' but is actually meaningful","To entertain with a scary story"],correctAnswer:2,explanation:`**THIRD READ = PURPOSE**: Primary goal: Make readers REFLECT + FEEL
- Emotional journey (Emma's tears)
- Philosophical question (value vs. function)
- Challenge reader assumptions (obsolete ≠ valueless)

Secondary: Entertain with engaging narrative. Purpose is layered—entertain while conveying deeper meaning. Close reading reveals author's goals.`},{id:"q12",question:"**CLOSE READING BENEFIT**: How does reading this passage THREE TIMES help comprehension?",options:["It doesn't help; one read is enough","First read = basic story | Second read = understanding vocabulary, structure, craft | Third read = theme, symbolism, connections, deeper meaning. Each layer builds complete understanding.","Three reads just waste time","All three reads focus on the same things"],correctAnswer:1,explanation:`**WHY CLOSE READING WORKS**:

**After 1 read**: Know Emma found a journal (surface)
**After 2 reads**: Understand mood, vocabulary, structure (craft)
**After 3 reads**: Grasp theme about value/dedication, symbolism, real-world connections (depth)

**Result**: COMPLETE comprehension—you can analyze, discuss, write about it confidently. Rushing through once = missing 80% of meaning!`}]}}]}]},{id:"writing",title:"Writing",icon:"✍️",description:"Learn to express your ideas clearly and creatively",chapters:[{id:"writing-1",title:"Chapter 1: Paragraph Structure",lessons:[{id:"writing-1-1",title:"The T.E.E.L. Paragraph Structure (The Hamburger Method)",type:"lesson",content:{introduction:"A well-structured paragraph is like a perfect hamburger! 🍔 In Grade 6, you'll master the T.E.E.L. structure, which helps you write clear, persuasive, and organized paragraphs. This is the foundation for all academic writing.",explanation:`**🍔 THE HAMBURGER METHOD (T.E.E.L. Structure)**

Think of a paragraph like a hamburger:

**TOP BUN** = **T**opic Sentence (Your Claim)
**LETTUCE** = **E**vidence or Example (Facts/Details)
**CHEESE/TOMATO** = **E**xplanation (Why/How it matters)
**BOTTOM BUN** = **L**ink (Wrap-up & Connection)

---

**T = TOPIC SENTENCE (Top Bun) 🍔**

**What it is:**
- The FIRST sentence of your paragraph
- States the MAIN IDEA or your position/claim
- Tells readers what the paragraph will be about
- Like the top bun—it holds everything together

**How to write it:**
- Make it CLEAR and SPECIFIC
- State your position directly
- Preview what the paragraph will discuss

**Example - Weak:**
"School rules are important."
❌ Too vague, doesn't say WHICH rule or WHY

**Example - Strong:**
"The school's policy requiring students to wear ID badges should be changed because it creates unnecessary expense and doesn't actually improve campus security."
✅ Clear position + reasons previewed

**Formula:**
**[Topic] + [Your Position] + [Because + Preview of Reasons]**

---

**E = EVIDENCE or EXAMPLE (The Meat - Lettuce) 🥬**

**What it is:**
- FACTS, STATISTICS, EXAMPLES, or DETAILS
- Proves or supports your topic sentence
- The "substance" of your paragraph
- Should have AT LEAST 2 pieces of evidence/examples

**Types of Evidence:**

**1. Facts & Statistics**
"According to a 2022 survey, 73% of students reported losing their ID badge at least once per semester."

**2. Expert Opinions**
"Campus security officer Rodriguez stated that badge checks are rarely enforced at entrances."

**3. Specific Examples**
"Last year, my friend had to purchase three replacement badges at $5 each, costing her family $15 unnecessarily."

**4. Logical Reasoning**
"Since students can enter through multiple doors simultaneously, checking badges at every entrance would require hiring additional staff."

**How to introduce evidence:**
- For example...
- According to...
- Research shows that...
- In fact...
- Specifically...

**⚠️ Common Mistake:**
Don't just DROP a quote or fact! You need the next step...

---

**E = EXPLANATION (The Cheese/Tomato - The Flavor!) 🧀🍅**

**What it is:**
- THIS IS THE MOST IMPORTANT PART!
- Explains HOW your evidence proves your topic sentence
- Answers: "So what? Why does this matter?"
- The "Bridge" connecting evidence to your claim
- Adds 2-3 sentences of analysis

**The Bridge Rule:**
Never drop evidence without explaining it!

**Example - Without Explanation (Weak):**
"ID badges should be eliminated. According to a survey, 73% of students lose their badges."
❌ So what? Why does this prove badges should be eliminated?

**Example - With Explanation (Strong):**
"ID badges should be eliminated. According to a survey, 73% of students lose their badges at least once per semester. **This shows that the badge system is impractical and creates financial burden for families who must repeatedly purchase replacements. Furthermore, if most students are constantly without badges, the system fails at its intended purpose of identification and security.**"
✅ The explanation shows WHY the stat matters and connects it to the claim

**Explanation Starters:**
- This shows that...
- This demonstrates...
- This is significant because...
- This proves...
- In other words...
- The significance of this is...
- This means that...

**Pro Tip:**
Write 2-3 sentences of explanation for EACH piece of evidence. Ask yourself:
- **"So what?"** (Why does this matter?)
- **"How does this prove my claim?"**

---

**L = LINK (Bottom Bun - Holds it Together) 🍔**

**What it is:**
- The FINAL sentence of your paragraph
- Wraps up the main idea
- Links back to your topic sentence
- Can transition to the next paragraph
- Like the bottom bun—holds everything in place

**What it does:**
- Restates the main point in a NEW way (don't just copy the topic sentence)
- Shows the broader significance
- Can connect to your thesis (in multi-paragraph essays)
- Provides closure

**Example - Weak Link:**
"So that's why ID badges are bad."
❌ Too simple, informal, doesn't add anything new

**Example - Strong Link:**
"Clearly, the ID badge requirement creates more problems than it solves, making it a policy in urgent need of revision."
✅ Restates the point with new wording and emphasizes urgency

**Or, if transitioning to next paragraph:**
"While the badge policy fails students, an alternative system using classroom check-ins could provide better security."
✅ Wraps up AND previews the next idea

**Link Starters:**
- Therefore...
- Ultimately...
- Clearly...
- In conclusion...
- For these reasons...
- As a result...

---

**🍔 COMPLETE HAMBURGER EXAMPLE**

**Topic Sentence (Top Bun 🍔):**
"The school's policy requiring students to wear ID badges should be changed because it creates unnecessary expense and doesn't actually improve campus security."

**Evidence 1 (Lettuce 🥬):**
"According to a 2022 student survey, 73% of students reported losing their ID badge at least once per semester, with replacement costs of $5 per badge."

**Explanation 1 (Cheese 🧀):**
"This demonstrates that the badge system places a significant financial burden on families, particularly those with multiple children. Over the course of a school year, a student who loses badges twice could cost their family $10—money that could be better spent on school supplies or extracurricular activities. Furthermore, this constant need for replacement suggests the system is impractical for typical student behavior."

**Evidence 2 (More Lettuce 🥬):**
"Additionally, campus security officer Rodriguez admitted in a recent interview that badge checks are rarely enforced at busy entrances due to staffing limitations."

**Explanation 2 (Tomato 🍅):**
"This reveals a critical flaw: if the badges are not consistently checked, they provide no actual security benefit. Students without badges can easily enter the building during peak times, rendering the entire system ineffective. The policy exists in theory but fails in practice, making it a waste of both money and effort."

**Link (Bottom Bun 🍔):**
"Clearly, when a security measure costs families money yet fails to deliver actual protection, it becomes a policy in urgent need of elimination or replacement with a more effective alternative."

**✅ Complete! A perfect hamburger paragraph!**

---

**📏 PARAGRAPH LENGTH GUIDELINES**

**For Grade 6:**
- **Minimum:** 5-7 sentences
- **Ideal:** 7-10 sentences
- **Structure breakdown:**
  - 1 topic sentence
  - 2-4 evidence/example sentences
  - 3-5 explanation sentences
  - 1 link sentence

---

**🎯 T.E.E.L. CHECKLIST**

Before submitting a paragraph, check:

✅ **T** - Do I have a clear topic sentence that states my main idea?
✅ **E** - Did I include at least 2 pieces of evidence or examples?
✅ **E** - Did I explain HOW each piece of evidence proves my point? (Did I build the bridge?)
✅ **L** - Did I link back to my main idea in a new way?
✅ **Flow** - Do all sentences connect smoothly?
✅ **Unity** - Does every sentence relate to my topic sentence?

---

**⚠️ COMMON MISTAKES TO AVOID**

**Mistake 1: Dropping Evidence Without Explanation**
❌ "Students hate uniforms. 68% of students said they dislike them."
✅ "Students hate uniforms. 68% of students said they dislike them. This overwhelming majority reveals that the policy ignores student voice and creates resentment."

**Mistake 2: Weak Topic Sentence**
❌ "This paragraph is about homework."
✅ "Homework should be limited to 30 minutes per night to reduce student stress and increase family time."

**Mistake 3: No Link/Conclusion**
❌ [Paragraph just stops after evidence]
✅ [Includes a sentence that wraps everything up]

**Mistake 4: Off-Topic Sentences**
❌ Including random facts that don't support the topic sentence
✅ Every sentence clearly relates to and supports the main idea

**Mistake 5: Copying the Topic Sentence as the Link**
❌ Link: "The school's policy requiring students to wear ID badges should be changed." (exact copy of topic sentence)
✅ Link: "For these reasons, the badge requirement deserves immediate reconsideration." (restated in new words)

---

**💡 WHY T.E.E.L. WORKS**

**For Tests:**
- California writing tests score on organization
- Clear structure = higher scores
- Easy for graders to follow your argument

**For Essays:**
- Each body paragraph follows T.E.E.L.
- Builds strong multi-paragraph arguments
- Foundation for high school and college writing

**For Thinking:**
- Forces you to EXPLAIN your evidence (deepens thinking)
- Prevents dropped quotes
- Strengthens logical reasoning

---

**🎓 GRADE 6 WRITING STANDARD**

T.E.E.L. directly addresses California CCSS for Grade 6:
- **W.6.1:** Write arguments with clear claims and relevant evidence
- **W.6.2:** Write informative texts with well-organized facts
- **W.6.4:** Produce clear and coherent writing

Mastering T.E.E.L. = Mastering Grade 6 paragraph writing!`,examples:[{text:`**Example 1: School Rule Paragraph**

**T:** Students should be allowed to use cell phones during lunch because communication with parents is important and the rule is difficult to enforce.

**E:** According to a parent survey, 82% of families want the ability to contact their children during the school day for emergency situations or schedule changes.

**E:** This demonstrates that the current phone ban creates anxiety for both parents and students who cannot easily communicate about after-school plans, medical needs, or family emergencies. Parents have the right to reach their children, and students need to be able to respond.

**E:** Furthermore, teachers report that students frequently violate the phone ban during lunch anyway, checking devices secretly in bathrooms or under tables.

**E:** This widespread noncompliance proves that the rule is unenforceable and disrespected. Rather than creating a culture of rule-breaking, the school should adapt its policy to reflect reality.

**L:** Therefore, allowing phone use during non-instructional time like lunch would address parent concerns while eliminating an unenforceable rule that students already ignore.`,explanation:"**Analysis:** ✅ Clear topic sentence with two reasons | ✅ Two distinct pieces of evidence (survey + teacher observation) | ✅ Detailed explanation for each (why parent communication matters + why unenforceability is a problem) | ✅ Strong link that restates main point with new wording"},{text:`**Example 2: Hamburger Visual Breakdown**

🍔 **TOP BUN:** "Recess should be extended from 20 to 30 minutes."

🥬 **LETTUCE:** "Research from Stanford University shows students who have 30-minute breaks score 15% higher on afternoon tests."

🧀 **CHEESE:** "This proves that longer breaks improve academic performance by giving brains time to rest and reset. Students can't focus for hours without breaks—our brains need downtime."

🥬 **MORE LETTUCE:** "Additionally, the CDC recommends 60 minutes of daily physical activity, and many students only get exercise during recess."

🍅 **TOMATO:** "With only 20 minutes, students barely have time to play an actual game. Extending to 30 minutes would help meet health guidelines and reduce childhood obesity."

🍔 **BOTTOM BUN:** "Clearly, a 10-minute extension would boost both academic performance and physical health, making it a change that benefits everyone."`,explanation:"**Visual Aid:** This shows how each element stacks to create a complete, satisfying paragraph—just like a delicious hamburger!"}],quickPractice:{question:`**Quick Practice:** Identify what's MISSING from this paragraph:

"School uniforms save money. My family spent $200 on regular clothes but only $150 on uniforms. Schools should require uniforms."

What's missing: T, E, E, or L?`,hint:"Check the T.E.E.L. structure. Is there a clear topic sentence? Evidence? Explanation? Link?",answer:`**Missing: EXPLANATION (E)**

This paragraph has:
✅ T: "Schools should require uniforms" (though it should be first)
✅ E: "$200 vs $150" statistic
❌ E: **NO EXPLANATION!** It drops the stat without explaining WHY saving $50 matters or HOW this proves uniforms should be required
✅ L: Concluding claim (though weak)

**Fixed version:**
"Schools should require uniforms because they save families money. For example, my family spent $200 on regular clothes but only $150 on uniforms. **This $50 savings is significant for families on tight budgets, and when multiplied across all students, uniforms can reduce clothing costs for an entire community. Less financial stress on families means students can focus on learning rather than worrying about fashion expenses.** Therefore, the cost-saving benefit of uniforms makes them a policy worth adopting."

✅ Now it has a proper EXPLANATION building the bridge!`}}},{id:"writing-1-2",title:"Writing Assignment: School Rule Paragraph",type:"writing_exercise",content:{assignmentType:"paragraph",prompt:`**📝 WRITING ASSIGNMENT: Paragraph Using T.E.E.L. Structure**

**Your Task:**
Write a 5-7 sentence paragraph about **a school rule you would change**. You must use the T.E.E.L. (Hamburger) structure.

**Requirements:**
✅ **ONE clear Topic Sentence** stating which rule and why it should change
✅ **AT LEAST TWO pieces of supporting detail/evidence**
✅ **Explanation** for each piece of evidence (build the bridge!)
✅ **ONE Link sentence** that wraps up your argument
✅ **5-7 sentences minimum**
✅ Proper grammar, spelling, and punctuation

**School Rules You Could Write About:**
- Dress code policies
- Cell phone usage rules
- Homework policies
- Lunch/break time lengths
- ID badge requirements
- Late arrival consequences
- Classroom seating arrangements
- Technology use in class
- Or any other school rule you think needs changing!

**Example Topic Sentences to Get You Started:**
- "The school's dress code policy should allow students to wear hats because..."
- "Lunch period should be extended from 30 to 45 minutes because..."
- "Students should be allowed to use laptops during class because..."
- "The tardy policy should be revised because..."`,instructions:`**STEP-BY-STEP GUIDE:**

**STEP 1: Choose Your Rule**
- Pick ONE school rule that you think should change
- Make sure you have REASONS why it should change

**STEP 2: Write Your Topic Sentence (Top Bun 🍔)**
- State WHICH rule
- State it SHOULD CHANGE
- Preview WHY (your reasons)
- Formula: "The [rule] should change because [reason 1] and [reason 2]."

**STEP 3: Add Evidence/Examples (Lettuce 🥬)**
- Provide 2 specific details, facts, or examples
- Examples:
  - "According to a student survey..."
  - "For example, last week..."
  - "Research shows that..."
  - "Many students report that..."

**STEP 4: Build the Bridge - Explain! (Cheese/Tomato 🧀🍅)**
- For EACH piece of evidence, add 1-2 sentences explaining:
  - WHY this matters
  - HOW this proves your point
- Use explanation starters: "This shows that...", "This demonstrates...", "This is significant because..."

**STEP 5: Write Your Link (Bottom Bun 🍔)**
- Wrap up your argument
- Restate your main point in NEW words
- Make it strong and conclusive
- Use: "Therefore...", "Clearly...", "For these reasons..."

**STEP 6: Review Your Paragraph**
- Read it out loud
- Check the rubric below
- Make sure you have ALL T.E.E.L. parts`,rubric:{title:"Grading Rubric (Total: 20 points)",criteria:[{name:"Topic Sentence (T)",points:4,description:"Clear topic sentence that states the rule and why it should change"},{name:"Evidence (E)",points:4,description:"At least 2 pieces of specific evidence, examples, or supporting details"},{name:"Explanation (E)",points:6,description:"Clear explanation for each piece of evidence showing HOW it proves the claim (the bridge!). This is the most important part!"},{name:"Link (L)",points:3,description:"Strong concluding sentence that wraps up the argument in new words"},{name:"Mechanics",points:3,description:"Proper grammar, spelling, punctuation, and capitalization. Complete sentences."}]},exampleResponse:`**EXAMPLE PARAGRAPH (This would earn full points):**

🍔 **T:** The school's rule prohibiting cell phone use during lunch should be changed because parent communication is important and the rule is nearly impossible to enforce.

🥬 **E:** According to a recent parent survey, 78% of families want to be able to contact their children during the school day for emergency situations, schedule changes, or after-school coordination.

🧀 **E:** This demonstrates that the phone ban creates unnecessary anxiety for families who need to communicate about important matters like doctor appointments, transportation issues, or family emergencies. Parents should have reasonable access to their children during non-instructional time.

🥬 **E:** Furthermore, teachers have reported that students frequently violate the rule by checking phones secretly in bathrooms or under lunch tables.

🍅 **E:** This widespread rule-breaking proves that the policy is unrealistic and creates a culture of dishonesty. When a rule is broken by the majority of students, it loses its effectiveness and respect.

🍔 **L:** Therefore, allowing supervised phone use during lunch would address legitimate family needs while eliminating an unenforceable policy that students already ignore.

**Why This Works:**
✅ Crystal-clear topic sentence with two specific reasons
✅ Two distinct pieces of evidence (survey data + teacher observation)
✅ Thorough explanation after EACH piece of evidence (builds strong bridges!)
✅ Powerful link that restates the argument with impact
✅ 6 sentences (meets minimum requirement)
✅ Formal tone, good grammar, strong vocabulary`,writingSpace:{placeholder:`Write your T.E.E.L. paragraph here...

Remember:
🍔 Start with your Topic Sentence
🥬 Add Evidence/Examples
🧀 Explain how it proves your point
🍔 End with a Link sentence

Minimum 5-7 sentences!`,minWords:100,suggestedWords:"100-150 words"},helpfulHints:["🎯 Make your topic sentence SPECIFIC. Instead of 'The dress code should change,' write 'The dress code should allow hats because they protect students from sun exposure and allow personal expression.'","📊 Use transition words to connect evidence: 'For example,' 'Additionally,' 'Furthermore,' 'According to...'","🌉 Don't forget the BRIDGE! After every fact, ask yourself: 'So what? Why does this matter? How does this prove my point?' Then write 1-2 sentences answering those questions.","🔗 Your link should sound different from your topic sentence. Use new words to restate your main idea.","✏️ Read your paragraph out loud. Does it flow? Does every sentence connect to your main idea?"]}}]},{id:"writing-2",title:"Chapter 2: Narrative Writing",lessons:[{id:"writing-2-1",title:"Narrative Writing: Show, Don't Tell & Sensory Details",type:"lesson",content:{introduction:"Narrative writing brings stories to life! In Grade 6, you'll master the art of 'Show, Don't Tell'—using vivid details, actions, and dialogue to make readers EXPERIENCE your story rather than just reading about it. This transforms good writing into great writing.",explanation:`**📖 THE GOLDEN RULE: SHOW, DON'T TELL**

**What does 'Show, Don't Tell' mean?**

❌ **TELLING** = Stating facts about feelings/situations
✅ **SHOWING** = Describing actions, dialogue, and sensory details that reveal feelings/situations

**Why it matters:**
- Telling is BORING ("He was angry")
- Showing is ENGAGING ("His fists clenched and his face turned red")
- Readers want to EXPERIENCE the story, not just hear about it

---

**🎭 SHOW, DON'T TELL EXAMPLES**

**Example 1: Anger**

❌ **TELL:** "Marcus was angry."
- Boring, flat, tells us nothing specific

✅ **SHOW:** "Marcus's fists clenched. His face turned red as he slammed the locker door, the metal clang echoing down the empty hallway."
- We SEE the anger through actions
- We HEAR it through sound
- Much more powerful!

**Example 2: Nervousness**

❌ **TELL:** "Sarah felt nervous before her speech."

✅ **SHOW:** "Sarah's hands trembled as she gripped her note cards. Her heart hammered against her ribs. She wiped her sweaty palms on her jeans for the third time."
- Physical sensations show nervousness
- Specific actions (trembling, wiping palms)
- Readers FEEL her nervousness

**Example 3: Happiness**

❌ **TELL:** "The birthday party made Emma happy."

✅ **SHOW:** "Emma's face lit up as she spotted the rainbow cake. She bounced on her toes, unable to contain her grin. 'You remembered my favorite!' she squealed, throwing her arms around her mom."
- Actions (bounced, threw arms)
- Facial expressions (lit up, grin)
- Dialogue shows excitement

---

**👁️ THE FIVE SENSES (Sensory Details)**

Great narrative writing uses ALL FIVE SENSES:

**1. SIGHT** 👁️
- Colors, shapes, movement, expressions
- Example: "The classroom walls were plastered with faded posters, their corners curling like old autumn leaves."

**2. SOUND** 👂
- Noises, voices, silence, volume
- Example: "The school bell shattered the silence with its shrill, insistent ring."

**3. SMELL** 👃
- Pleasant, unpleasant, memories triggered by scent
- Example: "The cafeteria reeked of burnt pizza and industrial floor cleaner."

**4. TOUCH** 🖐️
- Texture, temperature, pain, comfort
- Example: "The rough bark bit into her palms as she climbed higher."

**5. TASTE** 👅
- Flavors, food descriptions, reactions
- Example: "The bitter medicine coated his tongue, making him grimace."

**RULE FOR GRADE 6:**
Every narrative scene should include **AT LEAST 3 DIFFERENT SENSES**

---

**💬 DIALOGUE: Making Characters Speak**

**Why use dialogue?**
- Shows character personality
- Moves plot forward
- Breaks up narration
- Creates realistic scenes

**Dialogue Rules:**

**1. Use quotation marks**
"I can't believe we won!" Sarah exclaimed.

**2. Start a new paragraph for each speaker**
"Are you coming to practice?" Marcus asked.
"I'll be there," Jamie replied.

**3. Use dialogue tags** (said, asked, whispered, shouted)
"That's amazing," she whispered.

**4. Don't overuse fancy tags**
✅ "said" is invisible and perfect
❌ Don't write: "gasped," "hissed," "ejaculated" for every line

**5. Show emotion through ACTIONS, not just tags**

❌ Weak: "I hate you," he said angrily.
✅ Strong: "I hate you." He turned away, slamming the door behind him.

---

**📝 NARRATIVE STRUCTURE (Beginning-Middle-End)**

**BEGINNING (Set the Scene)**
- Introduce main character
- Establish setting (where/when)
- Show normal situation
- Use sensory details to immerse reader

**Example Opening:**
"The old wooden door stood at the end of the forgotten hallway, partially hidden behind a dusty bookshelf. Most students rushed past without a second glance, but today, something was different. A faint golden light seeped through the crack at the bottom, and the smell of cinnamon—strange in a school that reeked of cafeteria food—drifted toward me."

**MIDDLE (Create Conflict/Tension)**
- Present a problem or mystery
- Build suspense
- Show character reactions
- Use pacing (short sentences = fast action; longer sentences = reflection)

**Example Middle:**
"My hand trembled as I reached for the doorknob. It was warm—almost hot—beneath my palm. Should I open it? The logical part of my brain screamed 'No!' but curiosity pulled me forward like a magnet. The knob turned easily, and the door swung open with a soft creak."

**END (Resolve)**
- Answer the main question
- Show what the character learned/how they changed
- Leave the reader satisfied (or intrigued!)

**Example Ending:**
"Behind the door lay not a room, but a garden—impossible, considering we were on the third floor. Sunlight filtered through impossible trees, and the cinnamon scent wrapped around me like a warm blanket. I stepped through, and the door clicked shut behind me. Whatever this place was, I'd found it for a reason."

---

**⏱️ PACING: Controlling Story Speed**

**Fast Pacing** (Action/Tension)
- Short sentences
- Quick actions
- Little description

**Example:**
"Run! The door slammed. Footsteps. Closer. Hide! My heart hammered. Silence."

**Slow Pacing** (Reflection/Description)
- Longer sentences
- Detailed description
- Character thoughts

**Example:**
"The library felt different after midnight, as if the silence itself had weight and texture. Shadows pooled in corners where afternoon sunlight usually danced, and the musty smell of old books seemed stronger, almost alive."

**When to use each:**
- Fast = chase scenes, arguments, revelations
- Slow = setting establishment, emotional moments, character reflection

---

**🎯 NARRATIVE WRITING CHECKLIST**

Before submitting narrative writing, check:

✅ **Show, Don't Tell** - Did I use actions/details instead of stating feelings?
✅ **Sensory Details** - Did I include at least 3 different senses?
✅ **Dialogue** - Did I include at least ONE line of dialogue?
✅ **Clear Structure** - Do I have beginning (setup), middle (conflict), end (resolution)?
✅ **Pacing** - Did I vary sentence length based on the scene?
✅ **Specific Details** - Did I use concrete nouns and vivid verbs?
✅ **Character Development** - Can readers visualize my character through actions/description?

---

**✨ VIVID VERBS & SPECIFIC NOUNS**

**Replace Boring Verbs:**

❌ Walked → ✅ Strolled, trudged, stomped, crept, wandered
❌ Said → ✅ Whispered, muttered, announced, declared
❌ Looked → ✅ Glared, glimpsed, peered, stared, gazed
❌ Went → ✅ Hurried, rushed, shuffled, bounded

**Use Specific Nouns:**

❌ Flower → ✅ Rose, dandelion, orchid
❌ Car → ✅ Sedan, pickup truck, minivan
❌ Building → ✅ Warehouse, cottage, skyscraper
❌ Food → ✅ Pizza, sushi, tacos

**Why this matters:**
"She walked to the building" = Vague, boring
"She trudged to the abandoned warehouse" = Specific, interesting

---

**🔑 KEY NARRATIVE TECHNIQUES**

**1. Use Strong Verbs**
❌ "He was very tired" 
✅ "He collapsed onto the couch"

**2. Eliminate Filter Words**
❌ "I saw the door open" 
✅ "The door swung open"

❌ "She felt scared"
✅ "Her hands trembled"

**3. Avoid Overusing Adverbs**
❌ "He ran quickly" 
✅ "He sprinted"

❌ "She spoke softly"
✅ "She whispered"

**4. Create Atmosphere**
Use weather, lighting, and environment to set mood:
- Ominous: dark clouds, flickering lights, cold wind
- Happy: sunshine, birdsong, warm breeze
- Mysterious: fog, shadows, strange sounds

---

**📚 GRADE 6 CALIFORNIA STANDARDS**

This lesson addresses:
- **W.6.3:** Write narratives with well-developed experiences, events, and characters
- **W.6.3.a:** Engage reader by establishing context
- **W.6.3.b:** Use narrative techniques (dialogue, pacing, description)
- **W.6.3.d:** Use sensory details and precise language

---

**💡 PROFESSIONAL TIP**

**Read your writing aloud!**
- Does it flow naturally?
- Can you visualize the scene?
- Do you feel the emotions?
- Would you want to keep reading?

If you answer "no" to any of these, revise using Show, Don't Tell and sensory details!`,examples:[{text:`**BEFORE (Telling):**

"Alex was nervous about the test. The classroom was quiet. He didn't know the answers. He felt worried. Then the teacher collected the tests."

**AFTER (Showing):**

"Alex's pencil hovered over the blank page. Around him, pencils scratched against paper—everyone else seemed to know the answers. His palms grew slick with sweat as he glanced at the clock. Five minutes left. The questions blurred before his eyes, his mind frustratingly empty. When Mrs. Chen began walking down the aisles, Alex's heart sank. 'Pencils down,' she announced, her voice cutting through his panic like a knife."

**What Changed:**
✅ Actions show nervousness (hovering pencil, sweaty palms, checking clock)
✅ Sensory details (sound of scratching pencils, sight of blurred text)
✅ Specific details (Mrs. Chen's name, five minutes)
✅ Dialogue breaks up narration
✅ Simile adds impact ("like a knife")`,explanation:"The 'After' version is 3x more engaging because readers EXPERIENCE Alex's panic rather than just being told about it."},{text:`**MYSTERIOUS DOOR SCENE (Model Narrative):**

"I first noticed the door on a Tuesday, wedged between the janitor's closet and a bulletin board no one read anymore. Odd, I thought—I'd walked this hallway every day for two years. The door itself looked ancient, its wood dark and weathered, as if it had been transported from a medieval castle. A brass doorknob, tarnished green with age, gleamed faintly in the fluorescent light.

The next day, I paused. Was it... humming? I pressed my ear against the wood. Yes—a low, melodic hum, like distant singing. My skin prickled. The door was warm beneath my cheek, which made no sense in our perpetually freezing school.

'Don't,' a voice warned. I spun around. The hall was empty.

My hand closed around the doorknob before I could stop myself. It turned easily, and the door swung inward. Golden light spilled out, along with the overwhelming scent of honeysuckle and rain. I squinted into the brightness. Beyond the threshold lay not a closet or classroom, but a forest—impossible, considering we were on the third floor."

**Analysis:**
✅ SIGHT: Dark wood, green brass, golden light
✅ SOUND: Humming, singing, voice
✅ TOUCH: Warm door, cold school
✅ SMELL: Honeysuckle and rain
✅ Dialogue: One mysterious line
✅ Pacing: Builds slowly then speeds up
✅ Show Don't Tell: Fear shown through "skin prickled" and "spun around"
✅ Conflict: Mystery of impossible door
✅ ~150 words`,explanation:"This model scene demonstrates ALL the techniques: multiple senses, dialogue, pacing, specific details, and Show Don't Tell throughout."}],quickPractice:{question:`**Quick Practice:** Rewrite this TELLING sentence using SHOWING:

"Maria was excited about the surprise party."

Think: How would her body show excitement? What would she do or say?`,hint:"Show excitement through actions (jumping, smiling), physical sensations (heart racing), or dialogue",answer:`**Possible SHOWING versions:**

✅ "Maria bounced on her toes, unable to wipe the grin off her face. 'I can't believe you did this!' she squealed, throwing her arms wide."

✅ "Maria's eyes lit up as she burst through the door. Her hands flew to her mouth, and a gasp escaped her lips before dissolving into delighted laughter."

✅ "'You guys!' Maria's voice cracked with emotion. She spun in a circle, taking in the decorations, the friends, the cake. Her heart felt like it might explode with happiness."

**Notice:** All versions use ACTIONS, PHYSICAL REACTIONS, and/or DIALOGUE instead of stating the emotion!`}}},{id:"writing-2-2",title:"Writing Assignment: Mysterious Door Narrative Scene",type:"writing_exercise",content:{assignmentType:"narrative",prompt:`**📖 WRITING ASSIGNMENT: Narrative Scene with Sensory Details**

**Your Task:**
Write a narrative scene (approximately 150 words) about **a character discovering a mysterious door**. Use the "Show, Don't Tell" technique and include rich sensory details to bring your scene to life.

**Requirements:**
✅ **Approximately 150 words** (120-180 words is acceptable)
✅ **ONE line of dialogue** minimum
✅ **THREE different sensory details** (sight, sound, smell, touch, or taste)
✅ **Show, Don't Tell** - describe actions/reactions instead of stating feelings
✅ **Clear beginning-middle structure** (save the ending/resolution for imagination!)
✅ Proper grammar, spelling, and punctuation

**What Should Happen in Your Scene:**
1. **Character notices** the mysterious door
2. **Character approaches** and observes details
3. **Character reacts** (curious? scared? excited?)
4. **Something happens** (door opens? sound? light? etc.)
5. **Ends on intrigue** (what's behind the door? will they enter?)`,instructions:`**STEP-BY-STEP GUIDE:**

**STEP 1: Set the Scene (Where is this door?)**
- In a school hallway?
- In an old house?
- In a forest?
- In a library?
- Your choice! Pick a location.

**STEP 2: Describe the Door (Use Sensory Details!)**

**SIGHT:**
- What does it look like? (color, size, age, condition)
- Any unusual features? (carvings, symbols, strange material)

**SOUND:**
- Does it make noise? (humming, creaking, whispering)
- Or is it eerily silent?

**SMELL:**
- Does a scent come from it? (musty, sweet, metallic, flowery)

**TOUCH:**
- If your character touches it, what does it feel like? (warm, cold, rough, smooth, vibrating)

**STEP 3: Show Character Reactions (Don't Tell!)**

❌ Don't write: "She was curious."
✅ Do write: "She leaned closer, squinting at the strange symbols carved into the wood."

❌ Don't write: "He felt scared."
✅ Do write: "His hand trembled as he reached for the doorknob."

**Physical reactions that show emotion:**
- **Curiosity:** leaning closer, touching, examining
- **Fear:** backing away, trembling, heart racing
- **Excitement:** rushing forward, grinning, bouncing
- **Confusion:** furrowing brow, tilting head, hesitating

**STEP 4: Add Dialogue (At least one line!)**

Options:
- Character talking to themselves: "What is this place?"
- Character talking to friend: "Do you see that?"
- Character hearing a voice: "Enter," a whisper beckoned.
- Character's internal thought as dialogue: "I have to know what's inside," she muttered.

**STEP 5: Create Pacing**
- Use SHORT sentences for tension: "The handle turned. The door opened. Light spilled out."
- Use LONGER sentences for description: "The door stood at the end of the hallway, ancient and weathered, as if it had been waiting for centuries."

**STEP 6: End on a Cliffhanger**
- Leave readers wanting more!
- Door opens? What's inside?
- Character makes a decision?
- Something unexpected happens?`,rubric:{title:"Grading Rubric (Total: 25 points)",criteria:[{name:"Show, Don't Tell",points:7,description:"Character emotions and reactions shown through actions, physical sensations, and descriptions (not stated as feelings). This is the most important skill!"},{name:"Sensory Details (3 senses)",points:6,description:"Includes at least 3 different sensory details (sight, sound, smell, touch, or taste) that create vivid imagery"},{name:"Dialogue",points:3,description:"Includes at least one line of properly punctuated dialogue"},{name:"Narrative Structure",points:4,description:"Clear beginning (discovery) and middle (reaction/exploration). Ends on intrigue. Flows logically."},{name:"Word Choice & Mechanics",points:5,description:"Uses vivid verbs and specific nouns. Proper grammar, spelling, punctuation. Varies sentence length. 120-180 words."}]},exampleResponse:`**EXAMPLE NARRATIVE SCENE (This would earn full points):**

The door materialized on Thursday, wedged between two lockers that had always been side-by-side. I blinked, certain I was seeing things, but it remained—solid, real, and impossibly out of place.

The wood was black as midnight, carved with symbols that seemed to shift when I wasn't looking directly at them. A faint humming emanated from beyond it, like distant chanting. My skin prickled. When I pressed my palm against the surface, warmth radiated through me, and the scent of rain and cinnamon—strange in our cafeteria-scented hallway—filled my nose.

"Don't," someone whispered.

I spun around. Empty. Just fluorescent lights buzzing overhead and abandoned backpacks slouched against walls.

My fingers found the brass handle anyway. The moment I touched it, the humming stopped. Silence pressed against my eardrums like water pressure. The handle turned easily, and golden light flooded through the widening crack. Against all logic, against every self-preservation instinct, I pulled the door open.

Behind it lay not a closet, but a forest drenched in impossible sunlight.

**Why This Works:**
✅ **Show Don't Tell:** Fear shown through "skin prickled," "spun around," "pressed against eardrums" - never says "I was scared"
✅ **5 SENSES:**
   - Sight: black wood, shifting symbols, golden light, forest
   - Sound: humming, silence, buzzing lights
   - Touch: warmth radiating
   - Smell: rain and cinnamon
✅ **Dialogue:** "Don't," someone whispered
✅ **Structure:** Discovery → Investigation → Mystery deepens → Cliffhanger
✅ **Pacing:** Varies from longer descriptive sentences to short, punchy ones ("Empty.")
✅ **Vivid Verbs:** materialized, prickled, emanated, slouched, flooded
✅ **Word Count:** 180 words (within range)
✅ **Intrigue:** Ends with impossible forest - what happens next?`,writingSpace:{placeholder:`Write your mysterious door narrative scene here...

Remember to include:
👁️ Sensory details (at least 3 senses)
💬 One line of dialogue  
🎭 Show, Don't Tell (actions, not feelings)
📏 Approximately 150 words

Make us feel like we're there with your character!`,minWords:120,suggestedWords:"150-180 words"},helpfulHints:["👁️ Make the door UNIQUE. What makes THIS door mysterious? Strange carvings? Unusual color? Wrong location? Out of time period?","🎨 Use VIVID VERBS: Instead of 'walked,' try: crept, tiptoed, stumbled, rushed, inched","🌡️ Temperature is a great touch detail: Is the door warm (inviting/magical) or cold (ominous/dead)?","👂 Sound creates atmosphere: Humming (magical), creaking (old/scary), silence (ominous), music (intriguing)","💭 Show character personality through their reaction: Brave character rushes in; cautious character hesitates; curious character examines details","📖 Read your scene aloud. Can you visualize it like a movie? If not, add more sensory details!","⚡ Vary sentence length: Long sentences for description, short sentences for tension or action"]}}]},{id:"writing-3",title:"Chapter 3: Argumentative Writing",lessons:[{id:"writing-3-1",title:"Building Strong Arguments with Evidence",type:"lesson",content:{introduction:"Argumentative writing is different from a simple opinion. In 6th grade, you must support claims with clear reasons and relevant evidence while maintaining a formal tone. This is a key California Grade 6 writing standard.",explanation:`**What is Argumentative Writing?**

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
'Some students prefer online learning. **However**, others find in-person classes more effective. **On the other hand**, hybrid models offer benefits of both approaches.'`,explanation:"Transitions (However, On the other hand) signal that different viewpoints are being presented."}]}},{id:"writing-7-2",title:"Practice: Transition Words",type:"exercise",content:{instructions:"Choose the best transition word for each sentence based on the relationship between ideas.",questions:[{id:"q1",question:"The team practiced every day. _____, they won the championship.",options:["However","Consequently","On the other hand","Similarly"],correctAnswer:1,explanation:"'Consequently' shows cause and effect - they won BECAUSE they practiced. 'However' would show contrast, which doesn't fit."},{id:"q2",question:"Smartphones are convenient. _____, they can be distracting in class.",options:["Similarly","Furthermore","However","Therefore"],correctAnswer:2,explanation:"'However' shows contrast between the positive (convenient) and negative (distracting) aspects."},{id:"q3",question:"_____ preheating the oven, mix all the dry ingredients together.",options:["Therefore","However","Initially","Despite"],correctAnswer:2,explanation:"'Initially' shows sequence - this is the first step in the process. It indicates the beginning."},{id:"q4",question:"Dogs require daily exercise. _____, cats also need regular physical activity.",options:["However","Similarly","Consequently","Nevertheless"],correctAnswer:1,explanation:"'Similarly' shows comparison - both animals need exercise. This indicates a similarity between dogs and cats."},{id:"q5",question:"Many animals hibernate during winter. _____, bears sleep for months to conserve energy during food shortages.",options:["However","On the other hand","For example","Consequently"],correctAnswer:2,explanation:"'For example' introduces a specific instance (bears) of the general statement (animals hibernate)."},{id:"q6",question:"The experiment failed twice. _____, the scientists didn't give up and tried a new approach.",options:["Therefore","Consequently","Nevertheless","Similarly"],correctAnswer:2,explanation:"'Nevertheless' shows contrast - despite the failures (negative), they persisted (positive). It means 'in spite of that.'"},{id:"q7",question:"_____, renewable energy sources reduce pollution and decrease dependence on fossil fuels.",options:["However","In conclusion","For instance","On the other hand"],correctAnswer:1,explanation:"'In conclusion' signals the end of an argument or essay, summarizing the main benefits."}]}}]}]}]},Bn="english-tutor-progress",Te={initProgress(){const e=this.getProgress();if(!e){const n={completedLessons:[],exerciseScores:{},lastAccessed:null,currentLesson:null};return localStorage.setItem(Bn,JSON.stringify(n)),n}return e},getProgress(){const e=localStorage.getItem(Bn);return e?JSON.parse(e):null},completeLesson(e){const n=this.getProgress()||this.initProgress();n.completedLessons.includes(e)||(n.completedLessons.push(e),localStorage.setItem(Bn,JSON.stringify(n)))},isLessonCompleted(e){return(this.getProgress()||this.initProgress()).completedLessons.includes(e)},saveExerciseScore(e,n,t){const o=this.getProgress()||this.initProgress();o.exerciseScores[e]={score:n,totalQuestions:t,percentage:Math.round(n/t*100),completedAt:new Date().toISOString()},localStorage.setItem(Bn,JSON.stringify(o))},getExerciseScore(e){return(this.getProgress()||this.initProgress()).exerciseScores[e]||null},setCurrentLesson(e){const n=this.getProgress()||this.initProgress();n.currentLesson=e,n.lastAccessed=new Date().toISOString(),localStorage.setItem(Bn,JSON.stringify(n))},getCurrentLesson(){return(this.getProgress()||this.initProgress()).currentLesson},calculateProgress(e){const t=(this.getProgress()||this.initProgress()).completedLessons.length;return e>0?Math.round(t/e*100):0},getModuleProgress(e,n){const t=this.getProgress()||this.initProgress(),o=n.filter(s=>s.id.startsWith(e)),i=o.filter(s=>t.completedLessons.includes(s.id)).length;return{completed:i,total:o.length,percentage:o.length>0?Math.round(i/o.length*100):0}},resetProgress(){return localStorage.removeItem(Bn),this.initProgress()}};function km({courseData:e,progress:n,refreshProgress:t}){const o=e.modules.reduce((r,a)=>r+a.chapters.reduce((l,c)=>l+c.lessons.length,0),0),i=Te.calculateProgress(o),s=r=>{const a=e.modules.find(l=>l.id===r);return a?a.chapters.flatMap(l=>l.lessons):[]};return m.jsxs("div",{className:"dashboard",children:[m.jsxs("section",{className:"welcome-section",children:[m.jsx("h2",{children:"Welcome to English Language Arts"}),m.jsx("p",{className:"course-description",children:e.description}),m.jsxs("div",{className:"progress-overview",children:[m.jsxs("div",{className:"progress-stat",children:[m.jsx("span",{className:"stat-value",children:n.completedLessons.length}),m.jsx("span",{className:"stat-label",children:"Lessons Completed"})]}),m.jsxs("div",{className:"progress-stat",children:[m.jsxs("span",{className:"stat-value",children:[i,"%"]}),m.jsx("span",{className:"stat-label",children:"Overall Progress"})]}),m.jsxs("div",{className:"progress-stat",children:[m.jsx("span",{className:"stat-value",children:Object.keys(n.exerciseScores).length}),m.jsx("span",{className:"stat-label",children:"Exercises Completed"})]})]}),m.jsxs("div",{className:"progress-bar-container",children:[m.jsx("div",{className:"progress-bar",children:m.jsx("div",{className:"progress-bar-fill",style:{width:`${i}%`}})}),m.jsxs("span",{className:"progress-text",children:[i,"% Complete"]})]})]}),m.jsxs("section",{className:"modules-section",children:[m.jsx("h2",{children:"Course Modules"}),m.jsx("div",{className:"modules-grid",children:e.modules.map(r=>{const a=s(r.id),l=Te.getModuleProgress(r.id,a);return m.jsxs(He,{to:`/module/${r.id}`,className:"module-card",children:[m.jsx("div",{className:"module-icon",children:r.icon}),m.jsx("h3",{children:r.title}),m.jsx("p",{className:"module-description",children:r.description}),m.jsxs("div",{className:"module-stats",children:[m.jsxs("span",{className:"chapter-count",children:[r.chapters.length," Chapter",r.chapters.length!==1?"s":""]}),m.jsxs("span",{className:"lesson-count",children:[a.length," Lesson",a.length!==1?"s":""]})]}),m.jsxs("div",{className:"module-progress",children:[m.jsx("div",{className:"progress-bar small",children:m.jsx("div",{className:"progress-bar-fill",style:{width:`${l.percentage}%`}})}),m.jsxs("span",{className:"progress-text small",children:[l.completed,"/",l.total," completed"]})]})]},r.id)})})]}),n.completedLessons.length>0&&m.jsxs("section",{className:"recent-activity",children:[m.jsx("h2",{children:"Recent Activity"}),m.jsx("div",{className:"activity-list",children:Object.entries(n.exerciseScores).slice(-5).reverse().map(([r,a])=>m.jsxs("div",{className:"activity-item",children:[m.jsx("span",{className:"activity-icon",children:"✓"}),m.jsxs("span",{className:"activity-text",children:["Completed exercise: ",r]}),m.jsxs("span",{className:`activity-score ${a.percentage>=70?"good":"needs-improvement"}`,children:[a.percentage,"%"]})]},r))})]})]})}function Im({courseData:e,progress:n}){const{moduleId:t}=_u(),o=e.modules.find(i=>i.id===t);return o?m.jsxs("div",{className:"module-view",children:[m.jsxs("div",{className:"module-header",children:[m.jsx(He,{to:"/",className:"back-link",children:"← Back to Dashboard"}),m.jsxs("div",{className:"module-title-section",children:[m.jsx("span",{className:"module-icon-large",children:o.icon}),m.jsxs("div",{children:[m.jsx("h1",{children:o.title}),m.jsx("p",{className:"module-description-large",children:o.description})]})]})]}),m.jsx("div",{className:"chapters-list",children:o.chapters.map((i,s)=>{const r=i.lessons,a=r.filter(l=>Te.isLessonCompleted(l.id)).length;return m.jsxs("div",{className:"chapter-card",children:[m.jsxs("div",{className:"chapter-header",children:[m.jsxs("h2",{children:[m.jsxs("span",{className:"chapter-number",children:["Chapter ",s+1]}),i.title.replace(/^Chapter \d+:\s*/,"")]}),m.jsxs("span",{className:"chapter-progress-badge",children:[a,"/",r.length," completed"]})]}),m.jsx("div",{className:"lessons-list",children:r.map((l,c)=>{const f=Te.isLessonCompleted(l.id),h=Te.getExerciseScore(l.id);return m.jsxs(He,{to:`/lesson/${l.id}`,className:`lesson-item ${f?"completed":""}`,children:[m.jsx("div",{className:"lesson-number",children:c+1}),m.jsxs("div",{className:"lesson-info",children:[m.jsx("h3",{children:l.title}),m.jsx("span",{className:`lesson-type ${l.type}`,children:l.type==="lesson"?"📖 Lesson":"✏️ Exercise"})]}),m.jsxs("div",{className:"lesson-status",children:[f&&m.jsx("span",{className:"completion-badge",children:"✓ Complete"}),h&&m.jsxs("span",{className:`score-badge ${h.percentage>=70?"good":"needs-improvement"}`,children:[h.percentage,"%"]}),!f&&!h&&m.jsx("span",{className:"start-badge",children:"Start →"})]})]},l.id)})})]},i.id)})})]}):m.jsxs("div",{className:"error-page",children:[m.jsx("h2",{children:"Module not found"}),m.jsx(He,{to:"/",className:"btn btn-primary",children:"Back to Dashboard"})]})}function Am({content:e,onComplete:n,isCompleted:t}){return m.jsxs("div",{className:"lesson-content",children:[m.jsxs("div",{className:"content-section",children:[m.jsxs("div",{className:"introduction",children:[m.jsx("h2",{children:"Introduction"}),m.jsx("p",{children:e.introduction})]}),m.jsxs("div",{className:"explanation",children:[m.jsx("h2",{children:"Explanation"}),m.jsx("div",{className:"explanation-text",children:e.explanation.split(`
`).map((o,i)=>{const s=o.split("**").map((r,a)=>a%2===1?m.jsx("strong",{children:r},a):r);return o.trim()?m.jsx("p",{children:s},i):null})})]}),e.examples&&e.examples.length>0&&m.jsxs("div",{className:"examples",children:[m.jsx("h2",{children:"Examples"}),e.examples.map((o,i)=>m.jsxs("div",{className:"example-card",children:[m.jsx("div",{className:"example-text",children:o.text}),m.jsxs("div",{className:"example-explanation",children:[m.jsx("strong",{children:"Explanation:"})," ",o.explanation]})]},i))]})]}),m.jsx("div",{className:"lesson-actions",children:t?m.jsxs("div",{className:"completed-message",children:[m.jsx("span",{className:"completion-icon",children:"✓"}),"You've completed this lesson!"]}):m.jsx("button",{onClick:n,className:"btn btn-primary",children:"Mark as Complete"})})]})}function Cm({lessonId:e,content:n,onComplete:t,refreshProgress:o}){const[i,s]=S.useState(0),[r,a]=S.useState({}),[l,c]=S.useState(!1),[f,h]=S.useState(0),g=Te.getExerciseScore(e);S.useEffect(()=>{g&&(c(!0),h(g.score))},[g]);const w=n.questions||[],b=n.passage,T=(v,k)=>{l||a({...r,[v]:k})},x=()=>{let v=0;w.forEach(k=>{r[k.id]===k.correctAnswer&&v++}),h(v),c(!0),Te.saveExerciseScore(e,v,w.length),Te.completeLesson(e),o()},d=()=>{a({}),c(!1),h(0),s(0)},u=v=>r.hasOwnProperty(v),p=w.every(v=>u(v.id)),y=Math.round(f/w.length*100);return m.jsxs("div",{className:"exercise-content",children:[m.jsxs("div",{className:"exercise-instructions",children:[m.jsx("h2",{children:"Instructions"}),m.jsx("p",{children:n.instructions})]}),b&&m.jsxs("div",{className:"reading-passage",children:[m.jsx("h3",{children:"Reading Passage"}),m.jsx("div",{className:"passage-text",children:n.passage})]}),m.jsx("div",{className:"questions-container",children:w.map((v,k)=>{u(v.id);const A=r[v.id],N=A===v.correctAnswer;return m.jsxs("div",{className:"question-card",children:[m.jsxs("div",{className:"question-header",children:[m.jsxs("span",{className:"question-number",children:["Question ",k+1]}),l&&m.jsx("span",{className:`result-badge ${N?"correct":"incorrect"}`,children:N?"✓ Correct":"✗ Incorrect"})]}),m.jsxs("div",{className:"question-text",children:[v.passage&&m.jsx("div",{className:"question-passage",children:m.jsx("em",{children:v.passage})}),v.word&&m.jsxs("div",{className:"question-word",children:["Word: ",m.jsx("strong",{children:v.word})]}),m.jsx("p",{children:v.question})]}),m.jsx("div",{className:"answer-options",children:v.options.map((U,R)=>{const de=A===R,ze=R===v.correctAnswer;let qe="answer-option";return l?ze?qe+=" correct":de&&!ze&&(qe+=" incorrect"):de&&(qe+=" selected"),m.jsxs("button",{className:qe,onClick:()=>T(v.id,R),disabled:l,children:[m.jsxs("span",{className:"option-letter",children:[String.fromCharCode(65+R),"."]}),m.jsx("span",{className:"option-text",children:U}),l&&ze&&m.jsx("span",{className:"check-icon",children:"✓"})]},R)})}),l&&m.jsxs("div",{className:"explanation-box",children:[m.jsx("strong",{children:"Explanation:"})," ",v.explanation]})]},v.id)})}),m.jsx("div",{className:"exercise-actions",children:l?m.jsxs("div",{className:"results-section",children:[m.jsxs("div",{className:"score-display",children:[m.jsxs("div",{className:`score-circle ${y>=70?"pass":"needs-improvement"}`,children:[m.jsxs("span",{className:"score-percentage",children:[y,"%"]}),m.jsxs("span",{className:"score-fraction",children:[f,"/",w.length]})]}),m.jsxs("div",{className:"score-message",children:[y>=90&&m.jsx("p",{children:"🌟 Excellent work! You've mastered this topic!"}),y>=70&&y<90&&m.jsx("p",{children:"✓ Good job! You have a solid understanding."}),y<70&&m.jsx("p",{children:"Keep practicing! Review the lesson and try again."})]})]}),m.jsxs("div",{className:"results-actions",children:[m.jsx("button",{onClick:d,className:"btn btn-secondary",children:"Try Again"}),m.jsx("button",{onClick:t,className:"btn btn-primary",children:"Continue to Next Lesson"})]})]}):m.jsx("button",{onClick:x,className:"btn btn-primary",disabled:!p,children:p?"Submit Answers":`Answer all questions (${Object.keys(r).length}/${w.length})`})})]})}function Nm({courseData:e,progress:n,refreshProgress:t}){const{lessonId:o}=_u(),i=ia(),[s,r]=S.useState(null),[a,l]=S.useState(null),[c,f]=S.useState(null),[h,g]=S.useState(null),[w,b]=S.useState(null);S.useEffect(()=>{let d=null,u=null,p=null;for(const y of e.modules){for(const v of y.chapters){const k=v.lessons.find(A=>A.id===o);if(k){d=k,u=y,p=v;break}}if(d)break}if(d){r(d),l(u),f(p);const y=[];e.modules.forEach(k=>{k.chapters.forEach(A=>{y.push(...A.lessons)})});const v=y.findIndex(k=>k.id===o);v>0&&b(y[v-1]),v<y.length-1&&g(y[v+1]),Te.setCurrentLesson(o)}},[o,e]);const T=()=>{Te.completeLesson(o),t(),i(h?`/lesson/${h.id}`:`/module/${a.id}`)};if(!s||!a||!c)return m.jsxs("div",{className:"error-page",children:[m.jsx("h2",{children:"Lesson not found"}),m.jsx(He,{to:"/",className:"btn btn-primary",children:"Back to Dashboard"})]});const x=Te.isLessonCompleted(o);return m.jsxs("div",{className:"lesson-view",children:[m.jsxs("div",{className:"lesson-header",children:[m.jsxs(He,{to:`/module/${a.id}`,className:"back-link",children:["← Back to ",a.title]}),m.jsxs("div",{className:"lesson-breadcrumb",children:[m.jsx("span",{children:a.title}),m.jsx("span",{className:"separator",children:"/"}),m.jsx("span",{children:c.title})]})]}),m.jsxs("div",{className:"lesson-container",children:[m.jsxs("div",{className:"lesson-title-section",children:[m.jsx("h1",{children:s.title}),m.jsx("span",{className:`lesson-type-badge ${s.type}`,children:s.type==="lesson"?"📖 Lesson":"✏️ Exercise"}),x&&m.jsx("span",{className:"completion-badge large",children:"✓ Completed"})]}),s.type==="lesson"?m.jsx(Am,{content:s.content,onComplete:T,isCompleted:x}):m.jsx(Cm,{lessonId:s.id,content:s.content,onComplete:T,refreshProgress:t}),m.jsxs("div",{className:"lesson-navigation",children:[w&&m.jsxs(He,{to:`/lesson/${w.id}`,className:"nav-btn prev",children:["← Previous: ",w.title]}),h&&m.jsxs(He,{to:`/lesson/${h.id}`,className:"nav-btn next",children:["Next: ",h.title," →"]})]})]})]})}function Rm({courseTitle:e}){return m.jsx("header",{className:"header",children:m.jsxs("div",{className:"header-content",children:[m.jsxs(He,{to:"/",className:"logo",children:[m.jsx("span",{className:"logo-icon",children:"📚"}),m.jsx("h1",{children:e})]}),m.jsx("nav",{className:"nav",children:m.jsx(He,{to:"/",className:"nav-link",children:"Dashboard"})})]})})}function Pm(){const[e,n]=S.useState(null);S.useEffect(()=>{const o=Te.initProgress();n(o)},[]);const t=()=>{n(Te.getProgress())};return e?m.jsx(bm,{basename:"/english-tutor-grade6",children:m.jsxs("div",{className:"app",children:[m.jsx(Rm,{courseTitle:Mo.courseTitle}),m.jsx("main",{className:"main-content",children:m.jsxs(mm,{children:[m.jsx(Ot,{path:"/",element:m.jsx(km,{courseData:Mo,progress:e,refreshProgress:t})}),m.jsx(Ot,{path:"/module/:moduleId",element:m.jsx(Im,{courseData:Mo,progress:e,refreshProgress:t})}),m.jsx(Ot,{path:"/lesson/:lessonId",element:m.jsx(Nm,{courseData:Mo,progress:e,refreshProgress:t})}),m.jsx(Ot,{path:"*",element:m.jsx(hm,{to:"/"})})]})})]})}):m.jsx("div",{className:"loading",children:"Loading..."})}us.createRoot(document.getElementById("root")).render(m.jsx(Ml.StrictMode,{children:m.jsx(Pm,{})}));
