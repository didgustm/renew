function y(){}const P=t=>t;function w(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function S(){return Object.create(null)}function E(t){t.forEach(j)}function q(t){return typeof t=="function"}function U(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let l;function A(t,n){return t===n?!0:(l||(l=document.createElement("a")),l.href=n,t===l.href)}function B(t){return Object.keys(t).length===0}function v(t,...n){if(t==null){for(const r of n)r(void 0);return y}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function C(t,n,e){t.$$.on_destroy.push(v(n,e))}function D(t,n,e,r){if(t){const o=m(t,n,e,r);return t[0](o)}}function m(t,n,e,r){return t[1]&&r?w(e.ctx.slice(),t[1](r(n))):e.ctx}function G(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const i=[],d=Math.max(n.dirty.length,o.length);for(let s=0;s<d;s+=1)i[s]=n.dirty[s]|o[s];return i}return n.dirty|o}return n.dirty}function H(t,n,e,r,o,i){if(o){const d=m(n,e,r,i);t.p(d,o)}}function I(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function J(t){return t&&q(t.destroy)?t.destroy:y}let f;function _(t){f=t}function x(){if(!f)throw new Error("Function called outside component initialization");return f}function K(t){x().$$.on_mount.push(t)}function L(t){x().$$.after_update.push(t)}const a=[],b=[];let u=[];const g=[],k=Promise.resolve();let p=!1;function O(){p||(p=!0,k.then(M))}function N(){return O(),k}function z(t){u.push(t)}const h=new Set;let c=0;function M(){if(c!==0)return;const t=f;do{try{for(;c<a.length;){const n=a[c];c++,_(n),F(n.$$)}}catch(n){throw a.length=0,c=0,n}for(_(null),a.length=0,c=0;b.length;)b.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];h.has(e)||(h.add(e),e())}u.length=0}while(a.length);for(;g.length;)g.pop()();p=!1,h.clear(),_(t)}function F(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}function Q(t){const n=[],e=[];u.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),u=n}export{L as a,b,A as c,z as d,C as e,D as f,I as g,G as h,P as i,J as j,q as k,S as l,M as m,y as n,K as o,B as p,Q as q,E as r,U as s,N as t,H as u,f as v,_ as w,j as x,a as y,O as z};
