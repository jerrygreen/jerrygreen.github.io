function x(){}const M=t=>t;function w(t,n){for(const e in n)t[e]=n[e];return t}function E(t){return t()}function A(){return Object.create(null)}function j(t){t.forEach(E)}function B(t){return typeof t=="function"}function C(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function P(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function S(t){return Object.keys(t).length===0}function q(t,...n){if(t==null){for(const c of n)c(void 0);return x}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function U(t,n,e){t.$$.on_destroy.push(q(n,e))}function v(t,n,e,c){if(t){const o=m(t,n,e,c);return t[0](o)}}function m(t,n,e,c){return t[1]&&c?w(e.ctx.slice(),t[1](c(n))):e.ctx}function G(t,n,e,c){if(t[2]&&c){const o=t[2](c(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const a=[],_=Math.max(n.dirty.length,o.length);for(let u=0;u<_;u+=1)a[u]=n.dirty[u]|o[u];return a}return n.dirty|o}return n.dirty}function H(t,n,e,c,o,a){if(o){const _=m(n,e,c,a);t.p(_,o)}}function I(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let c=0;c<e;c++)n[c]=-1;return n}return-1}function J(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function K(t){return t??""}function L(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let f;function h(t){f=t}function g(){if(!f)throw new Error("Function called outside component initialization");return f}function N(t){g().$$.on_mount.push(t)}function Q(t){g().$$.after_update.push(t)}function R(t){g().$$.on_destroy.push(t)}function T(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(c=>c.call(this,n))}const l=[],y=[];let s=[];const p=[],k=Promise.resolve();let b=!1;function F(){b||(b=!0,k.then(z))}function V(){return F(),k}function O(t){s.push(t)}function W(t){p.push(t)}const d=new Set;let r=0;function z(){if(r!==0)return;const t=f;do{try{for(;r<l.length;){const n=l[r];r++,h(n),D(n.$$)}}catch(n){throw l.length=0,r=0,n}for(h(null),l.length=0,r=0;y.length;)y.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];d.has(e)||(d.add(e),e())}s.length=0}while(l.length);for(;p.length;)p.pop()();b=!1,d.clear(),h(t)}function D(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function X(t){const n=[],e=[];s.forEach(c=>t.indexOf(c)===-1?n.push(c):e.push(c)),e.forEach(c=>c()),s=n}export{X as A,f as B,h as C,E as D,l as E,F,Q as a,y as b,L as c,B as d,w as e,U as f,R as g,K as h,M as i,O as j,P as k,v as l,I as m,x as n,N as o,G as p,W as q,j as r,C as s,V as t,H as u,T as v,J as w,A as x,z as y,S as z};
