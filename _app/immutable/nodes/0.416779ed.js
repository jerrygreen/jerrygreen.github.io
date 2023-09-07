import{l as T,a as It,t as nt,b as Et}from"../chunks/i18n.d26827e2.js";import{n as S,i as W,c as st,d as St,e as Y,s as K,r as ht,f as yt,o as jt,g as Tt,h as it,j as At,k as ot,l as Dt,u as Ot,m as Mt,p as Rt}from"../chunks/scheduler.d43faf19.js";import{x as bt,y as vt,z as zt,A as Bt,S as J,i as Q,g as C,s as A,h as I,j as E,f as b,c as D,k as v,B as L,a as j,C as k,D as R,p as $,t as O,b as x,d as M,H as Lt,e as U,E as Vt,q as rt,r as G,u as tt,v as F,w as H,F as Nt,G as Pt,m as N,n as P,o as q,I as qt}from"../chunks/index.fe9cecfd.js";import{e as at,u as Ut,f as Gt}from"../chunks/each.c2197f2b.js";import{w as kt}from"../chunks/index.6eb024a7.js";import{g as lt,a as ct}from"../chunks/spread.8a54911c.js";function Ft(n,t,e,i){if(!t)return S;const s=n.getBoundingClientRect();if(t.left===s.left&&t.right===s.right&&t.top===s.top&&t.bottom===s.bottom)return S;const{delay:a=0,duration:_=300,easing:o=W,start:l=bt()+a,end:r=l+_,tick:f=S,css:u}=e(n,{from:t,to:s},i);let c=!0,d=!1,g;function p(){u&&(g=zt(n,0,1,_,a,o,u)),a||(d=!0)}function m(){u&&Bt(n,g),c=!1}return vt(y=>{if(!d&&y>=l&&(d=!0),d&&y>=r&&(f(1,0),m()),!c)return!1;if(d){const h=y-l,w=0+1*o(h/_);f(w,1-w)}return!0}),p(),f(0,1),m}function Ht(n){const t=getComputedStyle(n);if(t.position!=="absolute"&&t.position!=="fixed"){const{width:e,height:i}=t,s=n.getBoundingClientRect();n.style.position="absolute",n.style.width=e,n.style.height=i,wt(n,s)}}function wt(n,t){const e=n.getBoundingClientRect();if(t.left!==e.left||t.top!==e.top){const i=getComputedStyle(n),s=i.transform==="none"?"":i.transform;n.style.transform=`${s} translate(${t.left-e.left}px, ${t.top-e.top}px)`}}const Wt="1",Kt=120,Jt=35,Qt={version:Wt,wordsPerMinute:Kt,subscriberCount:Jt},Xt=["/","/confirm","/design-system","/unsubscribe","/simulation-principles"],Yt=!0;async function Zt({params:n,fetch:t}){let e,i="";typeof window>"u"?e=Qt:("serviceWorker"in navigator&&(await T.setItem("pages",Xt),await navigator.serviceWorker.register("/service-worker.js"),await navigator.serviceWorker.ready,e=await T.getItem("settings")),e||(e=await(await t("/settings.json")).json()),i=await T.getItem("lang"));const s=(It.includes(n.lang)?n.lang:i)||"en";return{lang:s,langDefined:!!n.lang,hint:[nt(s,"layout.hint1"),nt(s,"layout.hint2")].join(`
`),settings:e}}const je=Object.freeze(Object.defineProperty({__proto__:null,load:Zt,prerender:Yt},Symbol.toStringTag,{value:"Module"}));function Ct(n){const t=n-1;return t*t*t+1}function $t(n,{delay:t=0,duration:e=400,easing:i=W}={}){const s=+getComputedStyle(n).opacity;return{delay:t,duration:e,easing:i,css:a=>`opacity: ${a*s}`}}function xt(n,{delay:t=0,duration:e=400,easing:i=Ct,x:s=0,y:a=0,opacity:_=0}={}){const o=getComputedStyle(n),l=+o.opacity,r=o.transform==="none"?"":o.transform,f=l*(1-_),[u,c]=st(s),[d,g]=st(a);return{delay:t,duration:e,easing:i,css:(p,m)=>`
			transform: ${r} translate(${(1-p)*u}${c}, ${(1-p)*d}${g});
			opacity: ${l-f*m}`}}function te(n,{from:t,to:e},i={}){const s=getComputedStyle(n),a=s.transform==="none"?"":s.transform,[_,o]=s.transformOrigin.split(" ").map(parseFloat),l=t.left+t.width*_/e.width-(e.left+_),r=t.top+t.height*o/e.height-(e.top+o),{delay:f=0,duration:u=d=>Math.sqrt(d)*120,easing:c=Ct}=i;return{delay:f,duration:St(u)?u(Math.sqrt(l*l+r*r)):u,easing:c,css:(d,g)=>{const p=g*l,m=g*r,y=d+g*t.width/e.width,h=d+g*t.height/e.height;return`transform: ${a} translate(${p}px, ${m}px) scale(${y}, ${h});`}}}const ee={duration:4e3,initial:1,next:0,pausable:!1,dismissable:!0,reversed:!1,intro:{x:256}};function ne(){const{subscribe:n,update:t}=kt(new Array),e={};let i=0;function s(r){return r instanceof Object}function a(r="default",f={}){return e[r]=f,e}function _(r,f){const u={target:"default",...s(r)?r:{...f,msg:r}},c=e[u.target]||{},d={...ee,...c,...u,theme:{...c.theme,...u.theme},classes:[...c.classes||[],...u.classes||[]],id:++i};return t(g=>d.reversed?[...g,d]:[d,...g]),i}function o(r){t(f=>{if(!f.length||r===0)return[];if(typeof r=="function")return f.filter(c=>r(c));if(s(r))return f.filter(c=>c.target!==r.target);const u=r||Math.max(...f.map(c=>c.id));return f.filter(c=>c.id!==u)})}function l(r,f){const u=s(r)?r:{...f,id:r};t(c=>{const d=c.findIndex(g=>g.id===u.id);return d>-1&&(c[d]={...c[d],...u}),c})}return{subscribe:n,push:_,pop:o,set:l,_init:a}}const z=ne();function ft(n){return Object.prototype.toString.call(n)==="[object Date]"}function Z(n,t){if(n===t||n!==n)return()=>n;const e=typeof n;if(e!==typeof t||Array.isArray(n)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(n)){const i=t.map((s,a)=>Z(n[a],s));return s=>i.map(a=>a(s))}if(e==="object"){if(!n||!t)throw new Error("Object cannot be null");if(ft(n)&&ft(t)){n=n.getTime(),t=t.getTime();const a=t-n;return _=>new Date(n+_*a)}const i=Object.keys(t),s={};return i.forEach(a=>{s[a]=Z(n[a],t[a])}),a=>{const _={};return i.forEach(o=>{_[o]=s[o](a)}),_}}if(e==="number"){const i=t-n;return s=>n+s*i}throw new Error(`Cannot interpolate ${e} values`)}function se(n,t={}){const e=kt(n);let i,s=n;function a(_,o){if(n==null)return e.set(n=_),Promise.resolve();s=_;let l=i,r=!1,{delay:f=0,duration:u=400,easing:c=W,interpolate:d=Z}=Y(Y({},t),o);if(u===0)return l&&(l.abort(),l=null),e.set(n=s),Promise.resolve();const g=bt()+f;let p;return i=vt(m=>{if(m<g)return!0;r||(p=d(n,_),typeof u=="function"&&(u=u(n,_)),r=!0),l&&(l.abort(),l=null);const y=m-g;return y>u?(e.set(n=_),!1):(e.set(n=p(c(y/u))),!0)}),i.promise}return{set:a,update:(_,o)=>a(_(s,n),o),subscribe:e.subscribe}}function ie(n){let t,e=n[0].msg+"",i;return{c(){t=new Lt(!1),i=U(),this.h()},l(s){t=Vt(s,!1),i=U(),this.h()},h(){t.a=i},m(s,a){t.m(e,s,a),j(s,i,a)},p(s,a){a&1&&e!==(e=s[0].msg+"")&&t.p(e)},i:S,o:S,d(s){s&&(b(i),t.d())}}}function oe(n){let t,e,i;const s=[n[2]];var a=n[0].component.src;function _(o,l){let r={};if(l!==void 0&&l&4)r=lt(s,[ct(o[2])]);else for(let f=0;f<s.length;f+=1)r=Y(r,s[f]);return{props:r}}return a&&(t=rt(a,_(n))),{c(){t&&G(t.$$.fragment),e=U()},l(o){t&&tt(t.$$.fragment,o),e=U()},m(o,l){t&&F(t,o,l),j(o,e,l),i=!0},p(o,l){if(l&1&&a!==(a=o[0].component.src)){if(t){$();const r=t;O(r.$$.fragment,1,0,()=>{H(r,1)}),x()}a?(t=rt(a,_(o,l)),G(t.$$.fragment),M(t.$$.fragment,1),F(t,e.parentNode,e)):t=null}else if(a){const r=l&4?lt(s,[ct(o[2])]):{};t.$set(r)}},i(o){i||(t&&M(t.$$.fragment,o),i=!0)},o(o){t&&O(t.$$.fragment,o),i=!1},d(o){o&&b(e),t&&H(t,o)}}}function ut(n){let t,e,i;return{c(){t=C("div"),this.h()},l(s){t=I(s,"DIV",{class:!0,role:!0,tabindex:!0}),E(t).forEach(b),this.h()},h(){v(t,"class","_toastBtn pe svelte-95rq8t"),v(t,"role","button"),v(t,"tabindex","0")},m(s,a){j(s,t,a),e||(i=[R(t,"click",n[4]),R(t,"keydown",n[8])],e=!0)},p:S,d(s){s&&b(t),e=!1,ht(i)}}}function re(n){let t,e,i,s,a,_,o,l,r,f;const u=[oe,ie],c=[];function d(p,m){return p[0].component?0:1}i=d(n),s=c[i]=u[i](n);let g=n[0].dismissable&&ut(n);return{c(){t=C("div"),e=C("div"),s.c(),a=A(),g&&g.c(),_=A(),o=C("progress"),this.h()},l(p){t=I(p,"DIV",{role:!0,class:!0});var m=E(t);e=I(m,"DIV",{class:!0});var y=E(e);s.l(y),y.forEach(b),a=D(m),g&&g.l(m),_=D(m),o=I(m,"PROGRESS",{class:!0}),E(o).forEach(b),m.forEach(b),this.h()},h(){v(e,"class","_toastMsg svelte-95rq8t"),L(e,"pe",n[0].component),v(o,"class","_toastBar svelte-95rq8t"),o.value=n[1],v(t,"role","status"),v(t,"class","_toastItem svelte-95rq8t"),L(t,"pe",n[0].pausable)},m(p,m){j(p,t,m),k(t,e),c[i].m(e,null),k(t,a),g&&g.m(t,null),k(t,_),k(t,o),l=!0,r||(f=[R(t,"mouseenter",n[9]),R(t,"mouseleave",n[6])],r=!0)},p(p,[m]){let y=i;i=d(p),i===y?c[i].p(p,m):($(),O(c[y],1,1,()=>{c[y]=null}),x(),s=c[i],s?s.p(p,m):(s=c[i]=u[i](p),s.c()),M(s,1),s.m(e,null)),(!l||m&1)&&L(e,"pe",p[0].component),p[0].dismissable?g?g.p(p,m):(g=ut(p),g.c(),g.m(t,_)):g&&(g.d(1),g=null),(!l||m&2)&&(o.value=p[1]),(!l||m&1)&&L(t,"pe",p[0].pausable)},i(p){l||(M(s),l=!0)},o(p){O(s),l=!1},d(p){p&&b(t),c[i].d(),g&&g.d(),r=!1,ht(f)}}}function X(n,t="undefined"){return typeof n===t}function ae(n,t,e){let i,{item:s}=t,a=s.initial,_=a,o=!1,l={},r;const f=se(s.initial,{duration:s.duration,easing:W});yt(n,f,h=>e(1,i=h));function u(){z.pop(s.id)}function c(){(i===1||i===0)&&u()}function d(){!o&&i!==a&&(f.set(i,{duration:0}),o=!0)}function g(){if(o){const h=s.duration,w=h-h*((i-_)/(a-_));f.set(a,{duration:w}).then(c),o=!1}}function p(h=document){if(X(h.hidden))return;const w=()=>h.hidden?d():g(),B="visibilitychange";h.addEventListener(B,w),r=()=>h.removeEventListener(B,w),w()}jt(p),Tt(()=>{X(s.onpop,"function")&&s.onpop(s.id),r&&r()});const m=h=>{h instanceof KeyboardEvent&&["Enter"," "].includes(h.key)&&u()},y=()=>{s.pausable&&d()};return n.$$set=h=>{"item"in h&&e(0,s=h.item)},n.$$.update=()=>{if(n.$$.dirty&1&&(X(s.progress)||e(0,s.next=s.progress,s)),n.$$.dirty&131&&a!==s.next&&(e(7,a=s.next),_=i,o=!1,f.set(a).then(c)),n.$$.dirty&1&&s.component){const{props:h={},sendIdTo:w}=s.component;e(2,l={...h,...w&&{[w]:s.id}})}},[s,i,l,f,u,d,g,a,m,y]}class le extends J{constructor(t){super(),Q(this,t,ae,re,K,{item:0})}}function dt(n,t,e){const i=n.slice();return i[4]=t[e],i}function _t(n,t){let e,i,s,a,_,o,l,r,f=S,u;return i=new le({props:{item:t[4]}}),{key:n,first:null,c(){e=C("li"),G(i.$$.fragment),s=A(),this.h()},l(c){e=I(c,"LI",{class:!0,style:!0});var d=E(e);tt(i.$$.fragment,d),s=D(d),d.forEach(b),this.h()},h(){var c;v(e,"class",a=it((c=t[4].classes)==null?void 0:c.join(" "))+" svelte-1u812xz"),v(e,"style",_=pt(t[4].theme)),this.first=e},m(c,d){j(c,e,d),F(i,e,null),k(e,s),u=!0},p(c,d){var p;t=c;const g={};d&1&&(g.item=t[4]),i.$set(g),(!u||d&1&&a!==(a=it((p=t[4].classes)==null?void 0:p.join(" "))+" svelte-1u812xz"))&&v(e,"class",a),(!u||d&1&&_!==(_=pt(t[4].theme)))&&v(e,"style",_)},r(){r=e.getBoundingClientRect()},f(){Ht(e),f(),wt(e,r)},a(){f(),f=Ft(e,r,te,{duration:200})},i(c){u||(M(i.$$.fragment,c),c&&At(()=>{u&&(l&&l.end(1),o=Nt(e,xt,t[4].intro),o.start())}),u=!0)},o(c){O(i.$$.fragment,c),o&&o.invalidate(),c&&(l=Pt(e,$t,{})),u=!1},d(c){c&&b(e),H(i),c&&l&&l.end()}}}function ce(n){let t,e=[],i=new Map,s,a=at(n[0]);const _=o=>o[4].id;for(let o=0;o<a.length;o+=1){let l=dt(n,a,o),r=_(l);i.set(r,e[o]=_t(r,l))}return{c(){t=C("ul");for(let o=0;o<e.length;o+=1)e[o].c();this.h()},l(o){t=I(o,"UL",{class:!0});var l=E(t);for(let r=0;r<e.length;r+=1)e[r].l(l);l.forEach(b),this.h()},h(){v(t,"class","_toastContainer svelte-1u812xz")},m(o,l){j(o,t,l);for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(t,null);s=!0},p(o,[l]){if(l&1){a=at(o[0]),$();for(let r=0;r<e.length;r+=1)e[r].r();e=Ut(e,l,_,1,o,a,i,t,Gt,_t,null,dt);for(let r=0;r<e.length;r+=1)e[r].a();x()}},i(o){if(!s){for(let l=0;l<a.length;l+=1)M(e[l]);s=!0}},o(o){for(let l=0;l<e.length;l+=1)O(e[l]);s=!1},d(o){o&&b(t);for(let l=0;l<e.length;l+=1)e[l].d()}}}function pt(n){return n?Object.keys(n).reduce((t,e)=>`${t}${e}:${n[e]};`,""):void 0}function fe(n,t,e){let i;yt(n,z,o=>e(3,i=o));let{options:s={}}=t,{target:a="default"}=t,_=[];return n.$$set=o=>{"options"in o&&e(1,s=o.options),"target"in o&&e(2,a=o.target)},n.$$.update=()=>{n.$$.dirty&6&&z._init(a,s),n.$$.dirty&12&&e(0,_=i.filter(o=>o.target===a))},[_,s,a,i]}class ue extends J{constructor(t){super(),Q(this,t,fe,ce,K,{options:1,target:2})}}function gt(n){let t,e;return{c(){t=C("img"),this.h()},l(i){t=I(i,"IMG",{src:!0,class:!0}),this.h()},h(){ot(t.src,e=n[0])||v(t,"src",e),v(t,"class","svelte-1rlazc7")},m(i,s){j(i,t,s)},p(i,s){s&1&&!ot(t.src,e=i[0])&&v(t,"src",e)},d(i){i&&b(t)}}}function mt(n){let t,e="Apply",i,s;return{c(){t=C("div"),t.textContent=e,this.h()},l(a){t=I(a,"DIV",{class:!0,"data-svelte-h":!0}),qt(t)!=="svelte-1d091p3"&&(t.textContent=e),this.h()},h(){v(t,"class","svelte-1rlazc7")},m(a,_){j(a,t,_),i||(s=R(t,"click",n[6]),i=!0)},p:S,d(a){a&&b(t),i=!1,s()}}}function de(n){let t,e,i,s,a,_,o,l,r,f,u,c,d,g,p=n[0]&&gt(n),m=n[4]&&mt(n);return{c(){t=C("notification"),e=C("message"),p&&p.c(),i=A(),s=C("b"),a=N(n[1]),_=A(),o=N(n[2]),l=A(),r=C("buttons"),f=C("div"),u=N(n[3]),c=A(),m&&m.c(),this.h()},l(y){t=I(y,"NOTIFICATION",{class:!0});var h=E(t);e=I(h,"MESSAGE",{class:!0});var w=E(e);p&&p.l(w),i=D(w),s=I(w,"B",{});var B=E(s);a=P(B,n[1]),B.forEach(b),_=D(w),o=P(w,n[2]),w.forEach(b),l=D(h),r=I(h,"BUTTONS",{class:!0});var V=E(r);f=I(V,"DIV",{class:!0});var et=E(f);u=P(et,n[3]),et.forEach(b),c=D(V),m&&m.l(V),V.forEach(b),h.forEach(b),this.h()},h(){v(e,"class","svelte-1rlazc7"),v(f,"class","svelte-1rlazc7"),v(r,"class","svelte-1rlazc7"),v(t,"class","svelte-1rlazc7")},m(y,h){j(y,t,h),k(t,e),p&&p.m(e,null),k(e,i),k(e,s),k(s,a),k(e,_),k(e,o),k(t,l),k(t,r),k(r,f),k(f,u),k(r,c),m&&m.m(r,null),d||(g=R(f,"click",n[5]),d=!0)},p(y,[h]){y[0]?p?p.p(y,h):(p=gt(y),p.c(),p.m(e,i)):p&&(p.d(1),p=null),h&2&&q(a,y[1]),h&4&&q(o,y[2]),h&8&&q(u,y[3]),y[4]?m?m.p(y,h):(m=mt(y),m.c(),m.m(r,null)):m&&(m.d(1),m=null)},i:S,o:S,d(y){y&&b(t),p&&p.d(),m&&m.d(),d=!1,g()}}}function _e(n,t,e){let{id:i,icon:s,title:a="Notification title",description:_="Notification description",cancel:o="Cancel",action:l="Apply",successCallback:r,failureCallback:f}=t;function u(){f&&f(),z.pop(i)}function c(){r&&r(),z.pop(i)}return n.$$set=d=>{"id"in d&&e(7,i=d.id),"icon"in d&&e(0,s=d.icon),"title"in d&&e(1,a=d.title),"description"in d&&e(2,_=d.description),"cancel"in d&&e(3,o=d.cancel),"action"in d&&e(8,l=d.action),"successCallback"in d&&e(4,r=d.successCallback),"failureCallback"in d&&e(9,f=d.failureCallback)},[s,a,_,o,r,u,c,i,l,f]}class pe extends J{constructor(t){super(),Q(this,t,_e,de,K,{id:7,icon:0,title:1,description:2,cancel:3,action:8,successCallback:4,failureCallback:9})}}function ge(n){let t,e,i,s,a,_=n[0].hint+"",o,l;e=new ue({props:{options:n[2]}});const r=n[4].default,f=Dt(r,n,n[3],null);return{c(){t=C("main"),G(e.$$.fragment),i=A(),f&&f.c(),s=A(),a=C("span"),o=N(_),this.h()},l(u){t=I(u,"MAIN",{});var c=E(t);tt(e.$$.fragment,c),i=D(c),f&&f.l(c),s=D(c),a=I(c,"SPAN",{class:!0});var d=E(a);o=P(d,_),d.forEach(b),c.forEach(b),this.h()},h(){v(a,"class","hint svelte-1vakvwf"),L(t,"DEV",n[1])},m(u,c){j(u,t,c),F(e,t,null),k(t,i),f&&f.m(t,null),k(t,s),k(t,a),k(a,o),l=!0},p(u,[c]){f&&f.p&&(!l||c&8)&&Ot(f,r,u,u[3],l?Rt(r,u[3],c,null):Mt(u[3]),null),(!l||c&1)&&_!==(_=u[0].hint+"")&&q(o,_)},i(u){l||(M(e.$$.fragment,u),M(f,u),l=!0)},o(u){O(e.$$.fragment,u),O(f,u),l=!1},d(u){u&&b(t),H(e),f&&f.d(u)}}}const me="https?://[^/]+.ru",he="/flags/ru.png",ye="Russian language available!",be="Choose to apply new language settings";function ve(n,t,e){let{$$slots:i={},$$scope:s}=t,{data:a}=t;const{DEV:_}={VITE_API_URL:"https://jerrygreen.deno.dev",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1},o={classes:["toast"],pausable:!0,initial:0},l={initial:0,dismissable:!1,component:{src:pe,props:{icon:he,title:ye,description:be,cancel:"Ignore",successCallback:async()=>{var f;const r=await navigator.serviceWorker.ready;await T.setItem("lang","ru"),(f=r.active)==null||f.postMessage({type:"CHANGE_LANG",lang:"ru"}),localStorage.setItem("lang","ru"),location.reload()},failureCallback:async()=>{T.setItem("lang","en"),localStorage.setItem("lang","en")}},sendIdTo:"id"}};if(typeof window<"u"){const r=localStorage.getItem("ref"),f=document.referrer;!r&&!f.includes(document.URL)&&(localStorage.setItem("ref",f),T.setItem("ref",f)),window.localForage=T}if(typeof document<"u"){const r=localStorage.getItem("lang"),f=localStorage.getItem("ref")||"",u=document.referrer||"",c=new RegExp(me);if(!r)if(!Et||a.lang!="ru"){const d=c.test(f),g=c.test(u),p=navigator.language.substring(0,2)=="ru";d||g||p?z.push(l):(T.setItem("lang","en"),localStorage.setItem("lang","en"))}else T.setItem("lang","ru"),localStorage.setItem("lang","en")}return n.$$set=r=>{"data"in r&&e(0,a=r.data),"$$scope"in r&&e(3,s=r.$$scope)},[a,_,o,s,i]}class Te extends J{constructor(t){super(),Q(this,t,ve,ge,K,{data:0})}}export{Te as component,je as universal};