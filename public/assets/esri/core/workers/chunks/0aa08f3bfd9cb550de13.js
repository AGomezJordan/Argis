"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7267],{46851:(e,n,t)=>{t.d(n,{E:()=>r,R:()=>i});const r=1e-6,i=Math.random,a=Math.PI/180,o=180/Math.PI;Object.freeze({__proto__:null,EPSILON:r,RANDOM:i,toRadian:function(e){return e*a},toDegree:function(e){return e*o},equals:function(e,n){return Math.abs(e-n)<=r*Math.max(1,Math.abs(e),Math.abs(n))}})},17896:(e,n,t)=>{t.d(n,{E:()=>f,a:()=>d,b:()=>l,c:()=>g,d:()=>M,e:()=>b,f:()=>s,g:()=>o,h:()=>h,i:()=>m,k:()=>I,l:()=>a,m:()=>v,n:()=>y,p:()=>p,q:()=>_,r:()=>T,s:()=>u,t:()=>F,u:()=>O});var r=t(65617),i=t(46851);function a(e){const n=e[0],t=e[1],r=e[2];return Math.sqrt(n*n+t*t+r*r)}function o(e,n){return e[0]=n[0],e[1]=n[1],e[2]=n[2],e}function u(e,n,t,r){return e[0]=n,e[1]=t,e[2]=r,e}function l(e,n,t){return e[0]=n[0]+t[0],e[1]=n[1]+t[1],e[2]=n[2]+t[2],e}function s(e,n,t){return e[0]=n[0]-t[0],e[1]=n[1]-t[1],e[2]=n[2]-t[2],e}function c(e,n,t){return e[0]=n[0]*t[0],e[1]=n[1]*t[1],e[2]=n[2]*t[2],e}function f(e,n,t){return e[0]=n[0]/t[0],e[1]=n[1]/t[1],e[2]=n[2]/t[2],e}function d(e,n,t){return e[0]=n[0]*t,e[1]=n[1]*t,e[2]=n[2]*t,e}function m(e,n){const t=n[0]-e[0],r=n[1]-e[1],i=n[2]-e[2];return Math.sqrt(t*t+r*r+i*i)}function h(e,n){const t=n[0]-e[0],r=n[1]-e[1],i=n[2]-e[2];return t*t+r*r+i*i}function p(e){const n=e[0],t=e[1],r=e[2];return n*n+t*t+r*r}function y(e,n){const t=n[0],r=n[1],i=n[2];let a=t*t+r*r+i*i;return a>0&&(a=1/Math.sqrt(a),e[0]=n[0]*a,e[1]=n[1]*a,e[2]=n[2]*a),e}function M(e,n){return e[0]*n[0]+e[1]*n[1]+e[2]*n[2]}function g(e,n,t){const r=n[0],i=n[1],a=n[2],o=t[0],u=t[1],l=t[2];return e[0]=i*l-a*u,e[1]=a*o-r*l,e[2]=r*u-i*o,e}function b(e,n,t,r){const i=n[0],a=n[1],o=n[2];return e[0]=i+r*(t[0]-i),e[1]=a+r*(t[1]-a),e[2]=o+r*(t[2]-o),e}function v(e,n,t){const r=n[0],i=n[1],a=n[2];return e[0]=t[0]*r+t[4]*i+t[8]*a+t[12],e[1]=t[1]*r+t[5]*i+t[9]*a+t[13],e[2]=t[2]*r+t[6]*i+t[10]*a+t[14],e}function F(e,n,t){const r=n[0],i=n[1],a=n[2];return e[0]=r*t[0]+i*t[3]+a*t[6],e[1]=r*t[1]+i*t[4]+a*t[7],e[2]=r*t[2]+i*t[5]+a*t[8],e}function _(e,n,t){const r=t[0],i=t[1],a=t[2],o=t[3],u=n[0],l=n[1],s=n[2];let c=i*s-a*l,f=a*u-r*s,d=r*l-i*u,m=i*d-a*f,h=a*c-r*d,p=r*f-i*c;const y=2*o;return c*=y,f*=y,d*=y,m*=2,h*=2,p*=2,e[0]=u+c+m,e[1]=l+f+h,e[2]=s+d+p,e}const x=(0,r.c)(),N=(0,r.c)();function I(e,n){return e[0]===n[0]&&e[1]===n[1]&&e[2]===n[2]}function T(e,n,t){const r=t[0]-n[0],i=t[1]-n[1],a=t[2]-n[2];let o=r*r+i*i+a*a;return o>0?(o=1/Math.sqrt(o),e[0]=r*o,e[1]=i*o,e[2]=a*o,e):(e[0]=0,e[1]=0,e[2]=0,e)}const E=s,V=c,w=f,S=m,A=h,O=a,G=p;Object.freeze({__proto__:null,length:a,copy:o,set:u,add:l,subtract:s,multiply:c,divide:f,ceil:function(e,n){return e[0]=Math.ceil(n[0]),e[1]=Math.ceil(n[1]),e[2]=Math.ceil(n[2]),e},floor:function(e,n){return e[0]=Math.floor(n[0]),e[1]=Math.floor(n[1]),e[2]=Math.floor(n[2]),e},min:function(e,n,t){return e[0]=Math.min(n[0],t[0]),e[1]=Math.min(n[1],t[1]),e[2]=Math.min(n[2],t[2]),e},max:function(e,n,t){return e[0]=Math.max(n[0],t[0]),e[1]=Math.max(n[1],t[1]),e[2]=Math.max(n[2],t[2]),e},round:function(e,n){return e[0]=Math.round(n[0]),e[1]=Math.round(n[1]),e[2]=Math.round(n[2]),e},scale:d,scaleAndAdd:function(e,n,t,r){return e[0]=n[0]+t[0]*r,e[1]=n[1]+t[1]*r,e[2]=n[2]+t[2]*r,e},distance:m,squaredDistance:h,squaredLength:p,negate:function(e,n){return e[0]=-n[0],e[1]=-n[1],e[2]=-n[2],e},inverse:function(e,n){return e[0]=1/n[0],e[1]=1/n[1],e[2]=1/n[2],e},normalize:y,dot:M,cross:g,lerp:b,hermite:function(e,n,t,r,i,a){const o=a*a,u=o*(2*a-3)+1,l=o*(a-2)+a,s=o*(a-1),c=o*(3-2*a);return e[0]=n[0]*u+t[0]*l+r[0]*s+i[0]*c,e[1]=n[1]*u+t[1]*l+r[1]*s+i[1]*c,e[2]=n[2]*u+t[2]*l+r[2]*s+i[2]*c,e},bezier:function(e,n,t,r,i,a){const o=1-a,u=o*o,l=a*a,s=u*o,c=3*a*u,f=3*l*o,d=l*a;return e[0]=n[0]*s+t[0]*c+r[0]*f+i[0]*d,e[1]=n[1]*s+t[1]*c+r[1]*f+i[1]*d,e[2]=n[2]*s+t[2]*c+r[2]*f+i[2]*d,e},random:function(e,n){n=n||1;const t=2*(0,i.R)()*Math.PI,r=2*(0,i.R)()-1,a=Math.sqrt(1-r*r)*n;return e[0]=Math.cos(t)*a,e[1]=Math.sin(t)*a,e[2]=r*n,e},transformMat4:v,transformMat3:F,transformQuat:_,rotateX:function(e,n,t,r){const i=[],a=[];return i[0]=n[0]-t[0],i[1]=n[1]-t[1],i[2]=n[2]-t[2],a[0]=i[0],a[1]=i[1]*Math.cos(r)-i[2]*Math.sin(r),a[2]=i[1]*Math.sin(r)+i[2]*Math.cos(r),e[0]=a[0]+t[0],e[1]=a[1]+t[1],e[2]=a[2]+t[2],e},rotateY:function(e,n,t,r){const i=[],a=[];return i[0]=n[0]-t[0],i[1]=n[1]-t[1],i[2]=n[2]-t[2],a[0]=i[2]*Math.sin(r)+i[0]*Math.cos(r),a[1]=i[1],a[2]=i[2]*Math.cos(r)-i[0]*Math.sin(r),e[0]=a[0]+t[0],e[1]=a[1]+t[1],e[2]=a[2]+t[2],e},rotateZ:function(e,n,t,r){const i=[],a=[];return i[0]=n[0]-t[0],i[1]=n[1]-t[1],i[2]=n[2]-t[2],a[0]=i[0]*Math.cos(r)-i[1]*Math.sin(r),a[1]=i[0]*Math.sin(r)+i[1]*Math.cos(r),a[2]=i[2],e[0]=a[0]+t[0],e[1]=a[1]+t[1],e[2]=a[2]+t[2],e},angle:function(e,n){o(x,e),o(N,n),y(x,x),y(N,N);const t=M(x,N);return t>1?0:t<-1?Math.PI:Math.acos(t)},str:function(e){return"vec3("+e[0]+", "+e[1]+", "+e[2]+")"},exactEquals:I,equals:function(e,n){const t=e[0],r=e[1],a=e[2],o=n[0],u=n[1],l=n[2];return Math.abs(t-o)<=i.E*Math.max(1,Math.abs(t),Math.abs(o))&&Math.abs(r-u)<=i.E*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(a-l)<=i.E*Math.max(1,Math.abs(a),Math.abs(l))},direction:T,sub:E,mul:V,div:w,dist:S,sqrDist:A,len:O,sqrLen:G})},65617:(e,n,t)=>{function r(){return[0,0,0]}function i(e){return[e[0],e[1],e[2]]}function a(e,n,t){return[e,n,t]}function o(e){const n=[0,0,0],t=Math.min(3,e.length);for(let r=0;r<t;++r)n[r]=e[r];return n}function u(e,n){return new Float64Array(e,n,3)}function l(){return a(1,1,1)}function s(){return a(1,0,0)}function c(){return a(0,1,0)}function f(){return a(0,0,1)}t.d(n,{O:()=>m,Z:()=>d,a:()=>i,b:()=>u,c:()=>r,d:()=>o,f:()=>a});const d=[0,0,0],m=l(),h=s(),p=c(),y=f();Object.freeze({__proto__:null,create:r,clone:i,fromValues:a,fromArray:o,createView:u,zeros:function(){return[0,0,0]},ones:l,unitX:s,unitY:c,unitZ:f,ZEROS:d,ONES:m,UNIT_X:h,UNIT_Y:p,UNIT_Z:y})},98766:(e,n,t)=>{t.d(n,{a:()=>o,b:()=>c,c:()=>i,d:()=>y,e:()=>m,f:()=>h,g:()=>g,h:()=>b,l:()=>M,n:()=>p,s:()=>a});var r=t(46851);function i(e,n){return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e}function a(e,n,t,r,i){return e[0]=n,e[1]=t,e[2]=r,e[3]=i,e}function o(e,n,t){return e[0]=n[0]+t[0],e[1]=n[1]+t[1],e[2]=n[2]+t[2],e[3]=n[3]+t[3],e}function u(e,n,t){return e[0]=n[0]-t[0],e[1]=n[1]-t[1],e[2]=n[2]-t[2],e[3]=n[3]-t[3],e}function l(e,n,t){return e[0]=n[0]*t[0],e[1]=n[1]*t[1],e[2]=n[2]*t[2],e[3]=n[3]*t[3],e}function s(e,n,t){return e[0]=n[0]/t[0],e[1]=n[1]/t[1],e[2]=n[2]/t[2],e[3]=n[3]/t[3],e}function c(e,n,t){return e[0]=n[0]*t,e[1]=n[1]*t,e[2]=n[2]*t,e[3]=n[3]*t,e}function f(e,n){const t=n[0]-e[0],r=n[1]-e[1],i=n[2]-e[2],a=n[3]-e[3];return Math.sqrt(t*t+r*r+i*i+a*a)}function d(e,n){const t=n[0]-e[0],r=n[1]-e[1],i=n[2]-e[2],a=n[3]-e[3];return t*t+r*r+i*i+a*a}function m(e){const n=e[0],t=e[1],r=e[2],i=e[3];return Math.sqrt(n*n+t*t+r*r+i*i)}function h(e){const n=e[0],t=e[1],r=e[2],i=e[3];return n*n+t*t+r*r+i*i}function p(e,n){const t=n[0],r=n[1],i=n[2],a=n[3];let o=t*t+r*r+i*i+a*a;return o>0&&(o=1/Math.sqrt(o),e[0]=t*o,e[1]=r*o,e[2]=i*o,e[3]=a*o),e}function y(e,n){return e[0]*n[0]+e[1]*n[1]+e[2]*n[2]+e[3]*n[3]}function M(e,n,t,r){const i=n[0],a=n[1],o=n[2],u=n[3];return e[0]=i+r*(t[0]-i),e[1]=a+r*(t[1]-a),e[2]=o+r*(t[2]-o),e[3]=u+r*(t[3]-u),e}function g(e,n){return e[0]===n[0]&&e[1]===n[1]&&e[2]===n[2]&&e[3]===n[3]}function b(e,n){const t=e[0],i=e[1],a=e[2],o=e[3],u=n[0],l=n[1],s=n[2],c=n[3];return Math.abs(t-u)<=r.E*Math.max(1,Math.abs(t),Math.abs(u))&&Math.abs(i-l)<=r.E*Math.max(1,Math.abs(i),Math.abs(l))&&Math.abs(a-s)<=r.E*Math.max(1,Math.abs(a),Math.abs(s))&&Math.abs(o-c)<=r.E*Math.max(1,Math.abs(o),Math.abs(c))}const v=u,F=l,_=s,x=f,N=d,I=m,T=h;Object.freeze({__proto__:null,copy:i,set:a,add:o,subtract:u,multiply:l,divide:s,ceil:function(e,n){return e[0]=Math.ceil(n[0]),e[1]=Math.ceil(n[1]),e[2]=Math.ceil(n[2]),e[3]=Math.ceil(n[3]),e},floor:function(e,n){return e[0]=Math.floor(n[0]),e[1]=Math.floor(n[1]),e[2]=Math.floor(n[2]),e[3]=Math.floor(n[3]),e},min:function(e,n,t){return e[0]=Math.min(n[0],t[0]),e[1]=Math.min(n[1],t[1]),e[2]=Math.min(n[2],t[2]),e[3]=Math.min(n[3],t[3]),e},max:function(e,n,t){return e[0]=Math.max(n[0],t[0]),e[1]=Math.max(n[1],t[1]),e[2]=Math.max(n[2],t[2]),e[3]=Math.max(n[3],t[3]),e},round:function(e,n){return e[0]=Math.round(n[0]),e[1]=Math.round(n[1]),e[2]=Math.round(n[2]),e[3]=Math.round(n[3]),e},scale:c,scaleAndAdd:function(e,n,t,r){return e[0]=n[0]+t[0]*r,e[1]=n[1]+t[1]*r,e[2]=n[2]+t[2]*r,e[3]=n[3]+t[3]*r,e},distance:f,squaredDistance:d,length:m,squaredLength:h,negate:function(e,n){return e[0]=-n[0],e[1]=-n[1],e[2]=-n[2],e[3]=-n[3],e},inverse:function(e,n){return e[0]=1/n[0],e[1]=1/n[1],e[2]=1/n[2],e[3]=1/n[3],e},normalize:p,dot:y,lerp:M,random:function(e,n){let t,i,a,o,u,l;n=n||1;do{t=2*(0,r.R)()-1,i=2*(0,r.R)()-1,u=t*t+i*i}while(u>=1);do{a=2*(0,r.R)()-1,o=2*(0,r.R)()-1,l=a*a+o*o}while(l>=1);const s=Math.sqrt((1-u)/l);return e[0]=n*t,e[1]=n*i,e[2]=n*a*s,e[3]=n*o*s,e},transformMat4:function(e,n,t){const r=n[0],i=n[1],a=n[2],o=n[3];return e[0]=t[0]*r+t[4]*i+t[8]*a+t[12]*o,e[1]=t[1]*r+t[5]*i+t[9]*a+t[13]*o,e[2]=t[2]*r+t[6]*i+t[10]*a+t[14]*o,e[3]=t[3]*r+t[7]*i+t[11]*a+t[15]*o,e},transformQuat:function(e,n,t){const r=n[0],i=n[1],a=n[2],o=t[0],u=t[1],l=t[2],s=t[3],c=s*r+u*a-l*i,f=s*i+l*r-o*a,d=s*a+o*i-u*r,m=-o*r-u*i-l*a;return e[0]=c*s+m*-o+f*-l-d*-u,e[1]=f*s+m*-u+d*-o-c*-l,e[2]=d*s+m*-l+c*-u-f*-o,e[3]=n[3],e},str:function(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},exactEquals:g,equals:b,sub:v,mul:F,div:_,dist:x,sqrDist:N,len:I,sqrLen:T})},22021:(e,n,t)=>{t.d(n,{ZF:()=>m,Kt:()=>h,jE:()=>M,uZ:()=>u,oK:()=>p,Vl:()=>f,xV:()=>a,wt:()=>l,t7:()=>c,k3:()=>s,Sf:()=>o,BV:()=>d});var r=t(17896);t(98766);const i=new Float32Array(1),a=Number.isFinite||function(e){return"number"==typeof e&&window.isFinite(e)};function o(e){--e;for(let n=1;n<32;n<<=1)e|=e>>n;return e+1}function u(e,n,t){return Math.min(Math.max(e,n),t)}function l(e){return 0==(e&e-1)}Number.isNaN,Math.sign;const s=Math.log2||function(e){return Math.log(e)/Math.LN2};function c(e,n,t){return e+(n-e)*t}function f(e){return e*Math.PI/180}function d(e){return 180*e/Math.PI}function m(e){return Math.acos(u(e,-1,1))}function h(e){return Math.asin(u(e,-1,1))}function p(e){return y(Math.max(-g,Math.min(e,g)))}function y(e){return i[0]=e,i[0]}function M(e,n){const t=(0,r.l)(e),i=h(e[2]/t),a=Math.atan2(e[1]/t,e[0]/t);return(0,r.s)(n,t,i,a),n}const g=y(34028234663852886e22)},66577:(e,n,t)=>{t.d(n,{qM:()=>c});var r=t(75215),i=t(6570),a=t(9361),o=t(65091),u=t(13473),l=t(17332),s=t(58901);t(82971),t(86973),t(33955);const c={base:a.Z,key:"type",typeMap:{extent:i.Z,multipoint:o.Z,point:u.Z,polyline:s.Z,polygon:l.Z}};(0,r.N7)(c)},33955:(e,n,t)=>{t.d(n,{im:()=>p,q9:()=>g,Ji:()=>y,YX:()=>c,aW:()=>f,wp:()=>d,oU:()=>h,l9:()=>m});var r=t(70586),i=t(6570),a=t(9361),o=t(65091),u=t(13473),l=t(17332),s=t(58901);function c(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function f(e){return void 0!==e.points}function d(e){return void 0!==e.x&&void 0!==e.y}function m(e){return void 0!==e.paths}function h(e){return void 0!==e.rings}function p(e){return(0,r.Wi)(e)?null:e instanceof a.Z?e:d(e)?u.Z.fromJSON(e):m(e)?s.Z.fromJSON(e):h(e)?l.Z.fromJSON(e):f(e)?o.Z.fromJSON(e):c(e)?i.Z.fromJSON(e):null}function y(e){return e?d(e)?"esriGeometryPoint":m(e)?"esriGeometryPolyline":h(e)?"esriGeometryPolygon":c(e)?"esriGeometryEnvelope":f(e)?"esriGeometryMultipoint":null:null}const M={esriGeometryPoint:u.Z,esriGeometryPolyline:s.Z,esriGeometryPolygon:l.Z,esriGeometryEnvelope:i.Z,esriGeometryMultipoint:o.Z};function g(e){return e&&M[e]||null}},86973:(e,n,t)=>{t.d(n,{Mk:()=>i,P$:()=>a});var r=t(35454);const i=(0,r.wY)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),a=(0,r.wY)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"})},35671:(e,n,t)=>{t.d(n,{io:()=>y,AB:()=>p,gd:()=>h,Q0:()=>m,YN:()=>s,UF:()=>f,O5:()=>M,os:()=>b,H7:()=>w,qN:()=>S,Pz:()=>G,Qc:()=>D,vP:()=>$}),t(20102);var r,i,a=t(78286);(i=r||(r={})).VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",i.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value";var o=t(59266);const u=["field","field2","field3","normalizationField","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],l=["field","normalizationField"];function s(e,n){if(null!=e&&null!=n)for(const t of Array.isArray(e)?e:[e])if(c(u,t,n),"visualVariables"in t&&t.visualVariables)for(const e of t.visualVariables)c(l,e,n)}function c(e,n,t){if(e)for(const r of e){const e=(0,a.hS)(r,n),i=e&&"function"!=typeof e&&t.get(e);i&&(0,a.RB)(r,i.name,n)}}function f(e,n){if(null!=e&&null!=n&&n.fields.length)if("startField"in e){const t=n.get(e.startField),r=n.get(e.endField);e.startField=t&&t.name||null,e.endField=r&&r.name||null}else{const t=n.get(e.startTimeField),r=n.get(e.endTimeField);e.startTimeField=t&&t.name||null,e.endTimeField=r&&r.name||null}}const d=new Set;function m(e,n){return e&&n?(d.clear(),h(d,e,n),Array.from(d).sort()):[]}function h(e,n,t){var r;if(t)if(null!=n&&null!=(r=n.fields)&&r.length)if(t.includes("*"))for(const{name:t}of n.fields)e.add(t);else for(const r of t)p(e,n,r);else{if(t.includes("*"))return e.clear(),void e.add("*");for(const n of t)e.add(n)}}function p(e,n,t){if("string"==typeof t)if(n){const r=n.get(t);r&&e.add(r.name)}else e.add(t)}async function y(e,n,t){var r;if(!t)return;const{arcadeUtils:i}=await(0,o.LC)(),a=i.extractFieldNames(t,null==n||null==(r=n.fields)?void 0:r.map((e=>e.name)));for(const t of a)p(e,n,t)}function M({displayField:e,fields:n}){return e||(n&&n.length?g(n,"name-or-title")||g(n,"unique-identifier")||g(n,"type-or-category")||function(e){for(const n of e){if(!n||!n.name)continue;const e=n.name.toLowerCase();if(e.indexOf("name")>-1||e.indexOf("title")>-1)return n.name}return null}(n):null)}function g(e,n){for(const t of e)if(t&&t.valueType&&t.valueType===n)return t.name;return null}function b(e){const n=e.defaultValue;return void 0!==n&&E(e,n)?n:e.nullable?null:void 0}function v(e){return"number"==typeof e&&!isNaN(e)&&isFinite(e)}function F(e){return null===e||v(e)}const _="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e;function x(e){return null===e||_(e)}function N(e){return null!=e&&"string"==typeof e}function I(e){return null===e||N(e)}function T(){return!0}function E(e,n){let t;switch(e.type){case"date":case"integer":case"long":case"small-integer":case"esriFieldTypeDate":case"esriFieldTypeInteger":case"esriFieldTypeLong":case"esriFieldTypeSmallInteger":t=e.nullable?x:_;break;case"double":case"single":case"esriFieldTypeSingle":case"esriFieldTypeDouble":t=e.nullable?F:v;break;case"string":case"esriFieldTypeString":t=e.nullable?I:N;break;default:t=T}return 1===arguments.length?t:t(n)}const V=new Set(["integer","small-integer","single","double","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]);function w(e){return null!=e&&V.has(e.type)}function S(e){return null!=e&&("string"===e.type||"esriFieldTypeString"===e.type)}var A,O;function G(e){return null==e||"number"==typeof e&&isNaN(e)?null:e}function D(e,n){return e.nullable&&null===n?null:w(e)&&!function(e,n){const t="string"==typeof e?P(e):e;return!!t&&(t.isInteger?_(n)&&n>=t.min&&n<=t.max:n>=t.min&&n<=t.max)}(e.type,Number(n))?A.OUT_OF_RANGE:E(e,n)?e.domain?function(e,n){switch(e.type){case"range":{const t="range"in e?e.range[0]:e.minValue,i="range"in e?e.range[1]:e.maxValue;if(+n<t||+n>i)return r.VALUE_OUT_OF_RANGE;break}case"coded-value":case"codedValue":if(null==e.codedValues||e.codedValues.every((e=>null==e||e.code!==n)))return r.INVALID_CODED_VALUE}return null}(e.domain,n):null:O.INVALID_TYPE}function P(e){switch(e){case"esriFieldTypeSmallInteger":case"small-integer":return q;case"esriFieldTypeInteger":case"integer":return L;case"esriFieldTypeSingle":case"single":return z;case"esriFieldTypeDouble":case"double":return R}}!function(e){e.OUT_OF_RANGE="numeric-range-validation-error::out-of-range"}(A||(A={})),function(e){e.INVALID_TYPE="type-validation-error::invalid-type"}(O||(O={}));const q={min:-32768,max:32767,isInteger:!0},L={min:-2147483648,max:2147483647,isInteger:!0},z={min:-34e37,max:12e37,isInteger:!1},R={min:-Number.MAX_VALUE,max:Number.MAX_VALUE,isInteger:!1};function $(e,n,t){switch(e){case r.INVALID_CODED_VALUE:return`Value ${t} is not in the coded domain - field: ${n.name}, domain: ${JSON.stringify(n.domain)}`;case r.VALUE_OUT_OF_RANGE:return`Value ${t} is out of the range of valid values - field: ${n.name}, domain: ${JSON.stringify(n.domain)}`;case O.INVALID_TYPE:return`Value ${t} is not a valid value for the field type - field: ${n.name}, type: ${n.type}, nullable: ${n.nullable}`;case A.OUT_OF_RANGE:{const{min:e,max:r}=P(n.type);return`Value ${t} is out of range for the number type - field: ${n.name}, type: ${n.type}, value range is ${e} to ${r}`}}}},37267:(e,n,t)=>{t.r(n),t.d(n,{getDataValues:()=>s,summaryStatistics:()=>l});var r=t(22021),i=t(82971),a=t(2895),o=t(59266);let u=null;async function l(e){const{attribute:n,featuresJSON:t}=e,{normalizationType:r,normalizationField:i,minValue:o,maxValue:u,fieldType:l}=n,c=await s({field:n.field,valueExpression:n.valueExpression,normalizationType:r,normalizationField:i,normalizationTotal:n.normalizationTotal,viewInfoParams:n.viewInfoParams},t),f=(0,a.S5)({normalizationType:r,normalizationField:i,minValue:o,maxValue:u}),d="string"===l?(0,a.H0)({values:c,supportsNullCount:f}):(0,a.i5)({values:c,minValue:o,maxValue:u,useSampleStdDev:!r,supportsNullCount:f});return(0,a.rt)(d,"date"===l)}async function s(e,n){if(!n)return[];const t=e.field,l=e.valueExpression,s=e.normalizationType,c=e.normalizationField,f=e.normalizationTotal,d=[],m=e.viewInfoParams;let h=null,p=null;if(l){if(!u){const{arcadeUtils:e}=await(0,o.LC)();u=e}h=u.createFunction(l),p=m&&u.getViewInfo({viewingMode:m.viewingMode,scale:m.scale,spatialReference:new i.Z(m.spatialReference)})}return n.forEach((e=>{const n=e.attributes;let i;if(l){const n=u.createExecContext(e,p);i=u.executeFunction(h,n)}else n&&(i=n[t]);if(s&&(0,r.xV)(i)){const e=n&&parseFloat(n[c]);i=(0,a.fk)(i,s,e,f)}d.push(i)})),d}},2895:(e,n,t)=>{function r(e){const n=null!=e.normalizationField||null!=e.normalizationType,t=null!=e.minValue||null!=e.maxValue,r=!!e.sqlExpression&&e.supportsSQLExpression;return!n&&!t&&!r}function i(e){const n=e.returnDistinct?[...new Set(e.values)]:e.values,t=n.filter((e=>null!=e)).length,r={count:t};return e.supportsNullCount&&(r.nullcount=n.length-t),r}function a(e){const{values:n,useSampleStdDev:t,supportsNullCount:r}=e;let i=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,o=null,u=null,l=null,s=null,c=0;const f=null==e.minValue?-1/0:e.minValue,d=null==e.maxValue?1/0:e.maxValue;for(const e of n)Number.isFinite(e)?e>=f&&e<=d&&(o+=e,i=Math.min(i,e),a=Math.max(a,e),c++):"string"==typeof e&&c++;if(c&&null!=o){u=o/c;let e=0;for(const t of n)Number.isFinite(t)&&t>=f&&t<=d&&(e+=(t-u)**2);s=t?c>1?e/(c-1):0:c>0?e/c:0,l=Math.sqrt(s)}else i=null,a=null;const m={avg:u,count:c,max:a,min:i,stddev:l,sum:o,variance:s};return r&&(m.nullcount=n.length-c),m}function o(e,n){return n?(["avg","stddev","variance"].forEach((n=>{null!=e[n]&&(e[n]=Math.ceil(e[n]))})),e):e}function u(e,n,t,r){let i=null;switch(n){case"log":0!==e&&(i=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(r)&&0!==r&&(i=e/r*100);break;case"field":Number.isFinite(t)&&0!==t&&(i=e/t);break;case"natural-log":e>0&&(i=Math.log(e));break;case"square-root":e>0&&(i=e**.5)}return i}t.d(n,{i5:()=>a,H0:()=>i,fk:()=>u,S5:()=>r,rt:()=>o}),t(20102),t(35671)},59266:(e,n,t)=>{t.d(n,{mz:()=>c,pp:()=>s,WW:()=>u,Yi:()=>l,LC:()=>o}),t(66577);var r=t(70586),i=t(82971);let a;function o(){return a||(a=(async()=>{const e=await Promise.all([t.e(9490),t.e(6690)]).then(t.bind(t,96690));return{arcade:e.arcade,arcadeUtils:e,Dictionary:e.Dictionary,Feature:e.arcadeFeature}})()),a}const u=(e,n,t)=>c.create(e,n,t,null,["$feature"]),l=(e,n,t)=>c.create(e,n,t,null,["$feature","$view"]),s=(e,n,t,r)=>c.create(e,n,t,r,["$feature","$view"]);class c{constructor(e,n,t,r,i,a,o,u){this.script=e,this.evaluate=i;const l=Array.isArray(o)?o:o.fields;this.fields=l,this._syntaxTree=r,this._arcade=n,this._arcadeDictionary=t,this._arcadeFeature=a,this._spatialReference=u,this._referencesGeometry=n.scriptTouchesGeometry(this._syntaxTree),this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"scale")}static async create(e,n,t,a,u,l){const{arcade:s,Feature:f,Dictionary:d}=await o(),m=i.Z.fromJSON(n),h=s.parseScript(e,l),p=u.reduce(((e,n)=>({...e,[n]:null})),{});let y=null;(0,r.pC)(a)&&(y=new d(a),y.immutable=!0,p.$config=null);const M=s.scriptUsesGeometryEngine(h)&&s.enableGeometrySupport(),g=s.scriptUsesFeatureSet(h)&&s.enableFeatureSetSupport(),b=s.scriptIsAsync(h)&&s.enableAsyncSupport(),v={vars:p,spatialReference:m,useAsync:!!b},F=new d;F.immutable=!1,F.setField("scale",0);const _=s.compileScript(h,v);return await Promise.all([M,g,b]),new c(e,s,d,h,(e=>("$view"in e&&e.$view&&(F.setField("scale",e.$view.scale),e.$view=F),y&&(e.$config=y),_({vars:e,spatialReference:m}))),new f,t,m)}repurposeFeature(e){return e.geometry&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._spatialReference),this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry,e.attributes,{fields:this.fields}),this._arcadeFeature}repurposeAdapter(e){return this._arcadeFeature.repurposeFromAdapter(e,{fields:this.fields}),this._arcadeFeature}createDictionary(){return new this._arcadeDictionary}referencesMember(e){return this._arcade.referencesMember(this._syntaxTree,e)}referencesFunction(e){return this._arcade.referencesFunction(this._syntaxTree,e)}referencesGeometry(){return this._referencesGeometry}referencesScale(){return this._referencesScale}extractFieldLiterals(){return this._arcade.extractExpectedFieldLiterals(this._syntaxTree)}}}}]);