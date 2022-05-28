const z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}};z();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var S;const f=globalThis.trustedTypes,I=f?f.createPolicy("lit-html",{createHTML:l=>l}):void 0,A=`lit$${(Math.random()+"").slice(9)}$`,O="?"+A,D=`<${O}>`,g=document,H=(l="")=>g.createComment(l),x=l=>l===null||typeof l!="object"&&typeof l!="function",R=Array.isArray,V=l=>{var t;return R(l)||typeof((t=l)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,E=/>/g,v=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,P=/'/g,B=/"/g,W=/^(?:script|style|textarea|title)$/i,q=l=>(t,...e)=>({_$litType$:l,strings:t,values:e}),Z=q(1),N=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),U=new WeakMap,j=(l,t,e)=>{var s,i;const o=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let n=o._$litPart$;if(n===void 0){const u=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=n=new C(t.insertBefore(H(),u),u,void 0,e!=null?e:{})}return n._$AI(l),n},_=g.createTreeWalker(g,129,null,!1),F=(l,t)=>{const e=l.length-1,s=[];let i,o=t===2?"<svg>":"",n=y;for(let r=0;r<e;r++){const h=l[r];let p,d,a=-1,$=0;for(;$<h.length&&(n.lastIndex=$,d=n.exec(h),d!==null);)$=n.lastIndex,n===y?d[1]==="!--"?n=L:d[1]!==void 0?n=E:d[2]!==void 0?(W.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=v):d[3]!==void 0&&(n=v):n===v?d[0]===">"?(n=i!=null?i:y,a=-1):d[1]===void 0?a=-2:(a=n.lastIndex-d[2].length,p=d[1],n=d[3]===void 0?v:d[3]==='"'?B:P):n===B||n===P?n=v:n===L||n===E?n=y:(n=v,i=void 0);const M=n===v&&l[r+1].startsWith("/>")?" ":"";o+=n===y?h+D:a>=0?(s.push(p),h.slice(0,a)+"$lit$"+h.slice(a)+A+M):h+A+(a===-2?(s.push(void 0),r):M)}const u=o+(l[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(l)||!l.hasOwnProperty("raw"))throw Error("invalid template strings array");return[I!==void 0?I.createHTML(u):u,s]};class b{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const u=t.length-1,r=this.parts,[h,p]=F(t,e);if(this.el=b.createElement(h,s),_.currentNode=this.el.content,e===2){const d=this.el.content,a=d.firstChild;a.remove(),d.append(...a.childNodes)}for(;(i=_.nextNode())!==null&&r.length<u;){if(i.nodeType===1){if(i.hasAttributes()){const d=[];for(const a of i.getAttributeNames())if(a.endsWith("$lit$")||a.startsWith(A)){const $=p[n++];if(d.push(a),$!==void 0){const M=i.getAttribute($.toLowerCase()+"$lit$").split(A),T=/([.?@])?(.*)/.exec($);r.push({type:1,index:o,name:T[2],strings:M,ctor:T[1]==="."?G:T[1]==="?"?Q:T[1]==="@"?X:w})}else r.push({type:6,index:o})}for(const a of d)i.removeAttribute(a)}if(W.test(i.tagName)){const d=i.textContent.split(A),a=d.length-1;if(a>0){i.textContent=f?f.emptyScript:"";for(let $=0;$<a;$++)i.append(d[$],H()),_.nextNode(),r.push({type:2,index:++o});i.append(d[a],H())}}}else if(i.nodeType===8)if(i.data===O)r.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(A,d+1))!==-1;)r.push({type:7,index:o}),d+=A.length-1}o++}}static createElement(t,e){const s=g.createElement("template");return s.innerHTML=t,s}}function m(l,t,e=l,s){var i,o,n,u;if(t===N)return t;let r=s!==void 0?(i=e._$Cl)===null||i===void 0?void 0:i[s]:e._$Cu;const h=x(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==h&&((o=r==null?void 0:r._$AO)===null||o===void 0||o.call(r,!1),h===void 0?r=void 0:(r=new h(l),r._$AT(l,e,s)),s!==void 0?((n=(u=e)._$Cl)!==null&&n!==void 0?n:u._$Cl=[])[s]=r:e._$Cu=r),r!==void 0&&(t=m(l,r._$AS(l,t.values),r,s)),t}class K{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:g).importNode(s,!0);_.currentNode=o;let n=_.nextNode(),u=0,r=0,h=i[0];for(;h!==void 0;){if(u===h.index){let p;h.type===2?p=new C(n,n.nextSibling,this,t):h.type===1?p=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(p=new Y(n,this,t)),this.v.push(p),h=i[++r]}u!==(h==null?void 0:h.index)&&(n=_.nextNode(),u++)}return o}m(t){let e=0;for(const s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class C{constructor(t,e,s,i){var o;this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=m(this,t,e),x(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==N&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):V(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==c&&x(this._$AH)?this._$AA.nextSibling.data=t:this.k(g.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=b.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.m(s);else{const n=new K(o,this),u=n.p(this.options);n.m(s),this.k(u),this._$AH=n}}_$AC(t){let e=U.get(t.strings);return e===void 0&&U.set(t.strings,e=new b(t)),e}S(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new C(this.M(H()),this.M(H()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class w{constructor(t,e,s,i,o){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=m(this,t,e,0),n=!x(t)||t!==this._$AH&&t!==N,n&&(this._$AH=t);else{const u=t;let r,h;for(t=o[0],r=0;r<o.length-1;r++)h=m(this,u[s+r],e,r),h===N&&(h=this._$AH[r]),n||(n=!x(h)||h!==this._$AH[r]),h===c?t=c:t!==c&&(t+=(h!=null?h:"")+o[r+1]),this._$AH[r]=h}n&&!i&&this.C(t)}C(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class G extends w{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===c?void 0:t}}const J=f?f.emptyScript:"";class Q extends w{constructor(){super(...arguments),this.type=4}C(t){t&&t!==c?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class X extends w{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var s;if((t=(s=m(this,t,e,0))!==null&&s!==void 0?s:c)===N)return;const i=this._$AH,o=t===c&&i!==c||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==c&&(i===c||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class Y{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){m(this,t)}}const k=window.litHtmlPolyfillSupport;k==null||k(b,C),((S=globalThis.litHtmlVersions)!==null&&S!==void 0?S:globalThis.litHtmlVersions=[]).push("2.2.2");const tt=document.querySelector("#app"),et=()=>Z`<div>
    <h3>Input a word</h3>
  </div>`,it=()=>{j(et(),tt)};it();
