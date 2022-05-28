const j=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}};j();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var k;const _=globalThis.trustedTypes,E=_?_.createPolicy("lit-html",{createHTML:r=>r}):void 0,p=`lit$${(Math.random()+"").slice(9)}$`,z="?"+p,q=`<${z}>`,m=document,H=(r="")=>m.createComment(r),x=r=>r===null||typeof r!="object"&&typeof r!="function",D=Array.isArray,Z=r=>{var t;return D(r)||typeof((t=r)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,O=/>/g,A=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,B=/'/g,U=/"/g,F=/^(?:script|style|textarea|title)$/i,K=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),C=K(1),b=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),R=new WeakMap,G=(r,t,e)=>{var s,i;const o=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let n=o._$litPart$;if(n===void 0){const d=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=n=new w(t.insertBefore(H(),d),d,void 0,e!=null?e:{})}return n._$AI(r),n},g=m.createTreeWalker(m,129,null,!1),J=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":"",n=y;for(let l=0;l<e;l++){const a=r[l];let v,h,c=-1,$=0;for(;$<a.length&&(n.lastIndex=$,h=n.exec(a),h!==null);)$=n.lastIndex,n===y?h[1]==="!--"?n=P:h[1]!==void 0?n=O:h[2]!==void 0?(F.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=A):h[3]!==void 0&&(n=A):n===A?h[0]===">"?(n=i!=null?i:y,c=-1):h[1]===void 0?c=-2:(c=n.lastIndex-h[2].length,v=h[1],n=h[3]===void 0?A:h[3]==='"'?U:B):n===U||n===B?n=A:n===P||n===O?n=y:(n=A,i=void 0);const M=n===A&&r[l+1].startsWith("/>")?" ":"";o+=n===y?a+q:c>=0?(s.push(v),a.slice(0,c)+"$lit$"+a.slice(c)+p+M):a+p+(c===-2?(s.push(void 0),l):M)}const d=o+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[E!==void 0?E.createHTML(d):d,s]};class N{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const d=t.length-1,l=this.parts,[a,v]=J(t,e);if(this.el=N.createElement(a,s),g.currentNode=this.el.content,e===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(i=g.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const c of i.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(p)){const $=v[n++];if(h.push(c),$!==void 0){const M=i.getAttribute($.toLowerCase()+"$lit$").split(p),T=/([.?@])?(.*)/.exec($);l.push({type:1,index:o,name:T[2],strings:M,ctor:T[1]==="."?X:T[1]==="?"?tt:T[1]==="@"?et:S})}else l.push({type:6,index:o})}for(const c of h)i.removeAttribute(c)}if(F.test(i.tagName)){const h=i.textContent.split(p),c=h.length-1;if(c>0){i.textContent=_?_.emptyScript:"";for(let $=0;$<c;$++)i.append(h[$],H()),g.nextNode(),l.push({type:2,index:++o});i.append(h[c],H())}}}else if(i.nodeType===8)if(i.data===z)l.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(p,h+1))!==-1;)l.push({type:7,index:o}),h+=p.length-1}o++}}static createElement(t,e){const s=m.createElement("template");return s.innerHTML=t,s}}function f(r,t,e=r,s){var i,o,n,d;if(t===b)return t;let l=s!==void 0?(i=e._$Cl)===null||i===void 0?void 0:i[s]:e._$Cu;const a=x(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(r),l._$AT(r,e,s)),s!==void 0?((n=(d=e)._$Cl)!==null&&n!==void 0?n:d._$Cl=[])[s]=l:e._$Cu=l),l!==void 0&&(t=f(r,l._$AS(r,t.values),l,s)),t}class Q{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:m).importNode(s,!0);g.currentNode=o;let n=g.nextNode(),d=0,l=0,a=i[0];for(;a!==void 0;){if(d===a.index){let v;a.type===2?v=new w(n,n.nextSibling,this,t):a.type===1?v=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(v=new it(n,this,t)),this.v.push(v),a=i[++l]}d!==(a==null?void 0:a.index)&&(n=g.nextNode(),d++)}return o}m(t){let e=0;for(const s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class w{constructor(t,e,s,i){var o;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=f(this,t,e),x(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==b&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):Z(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==u&&x(this._$AH)?this._$AA.nextSibling.data=t:this.k(m.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=N.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.m(s);else{const n=new Q(o,this),d=n.p(this.options);n.m(s),this.k(d),this._$AH=n}}_$AC(t){let e=R.get(t.strings);return e===void 0&&R.set(t.strings,e=new N(t)),e}S(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new w(this.M(H()),this.M(H()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class S{constructor(t,e,s,i,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=f(this,t,e,0),n=!x(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else{const d=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=f(this,d[s+l],e,l),a===b&&(a=this._$AH[l]),n||(n=!x(a)||a!==this._$AH[l]),a===u?t=u:t!==u&&(t+=(a!=null?a:"")+o[l+1]),this._$AH[l]=a}n&&!i&&this.C(t)}C(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class X extends S{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===u?void 0:t}}const Y=_?_.emptyScript:"";class tt extends S{constructor(){super(...arguments),this.type=4}C(t){t&&t!==u?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class et extends S{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var s;if((t=(s=f(this,t,e,0))!==null&&s!==void 0?s:u)===b)return;const i=this._$AH,o=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==u&&(i===u||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){f(this,t)}}const W=window.litHtmlPolyfillSupport;W==null||W(N,w),((k=globalThis.litHtmlVersions)!==null&&k!==void 0?k:globalThis.litHtmlVersions=[]).push("2.2.2");const st={a:"Alpha",b:"Bravo",c:"Charlie",d:"Delta",e:"Echo",f:"Foxtrot",g:"Golf",h:"Hotel",i:"India",j:"Juliet",k:"Kilo",l:"Lima",m:"Mike",n:"November",o:"Oscar",p:"Papa",q:"Quebec",r:"Romeo",s:"Sierra",t:"Tango",u:"Uniform",v:"Victor",w:"Whiskey",x:"X-ray",y:"Yankee",z:"Zulu"},nt={a:"Alice",b:"Bob",c:"Carol",d:"David",e:"Edward",f:"Frank",g:"George",h:"Henry",i:"Ida",j:"James",k:"Kevin",l:"Luis",m:"Monica",n:"Nancy",o:"Oscar",p:"Peter",q:"Quinn",r:"Robert",s:"Steve",t:"Tom",u:"Ursula",v:"Victor",w:"William",x:"Xavier",y:"Yolanda",z:"Zoey"},ot={a:"Apple",b:"Banana",c:"Cucumber",d:"Donut",e:"Egg",f:"French Fry",g:"Grape",h:"Ham",i:"Ice Cream",j:"Jelly",k:"Kale",l:"Lemon",m:"Mango",n:"Nacho",o:"Orange",p:"Pasta",q:"Quesadilla",r:"Ravioli",s:"Sugar",t:"Tacos",u:"Urchin",v:"Vanilla",w:"Watermelon",x:"X-Mas Cookie",y:"Yogurt",z:"Zucchini"};var V={NATO:st,Names:nt,Foods:ot};const rt=document.querySelector("#app"),I={word:"",category:"NATO"},lt=r=>{const t=r.target.value;I.word=t,L()},at=r=>{const t=r.target.dataset.name;I.category=t,L()},ht=r=>C`<div>Categories</div>
    <div class="categories">
      ${Object.keys(V).map(t=>C`<div
            class="category ${r===t?"active":""}"
            @click=${at}
            data-name=${t}
          >
            ${t}
          </div>`)}
    </div>`,ct=(r,t)=>C`<div class="phonetic-list">
    ${Array.from(r).map(e=>{var i;const s=V[t];return C`<div class="word">${(i=s[e.toLocaleLowerCase()])!=null?i:e}</div>`})}
  </div>`,dt=r=>C`<div>
    <h3>Input a word</h3>
    <input
      type="text"
      @input=${lt}
      maxlength="20"
      autofocus
      autocomplete="off"
    />
    ${ht(r.category)} ${ct(r.word,r.category)}
  </div>`,L=()=>{G(dt(I),rt)};L();