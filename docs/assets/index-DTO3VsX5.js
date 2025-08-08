(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Go="179",vh=0,Ol=1,Mh=2,pu=1,yh=2,Xn=3,jn=0,sn=1,Ln=2,li=0,Zi=1,Bl=2,kl=3,zl=4,Sh=5,Si=100,Eh=101,Th=102,bh=103,Ah=104,wh=200,Rh=201,Ch=202,Ph=203,Ja=204,Qa=205,Lh=206,Ih=207,Dh=208,Uh=209,Nh=210,Fh=211,Oh=212,Bh=213,kh=214,eo=0,to=1,no=2,ns=3,io=4,so=5,ro=6,ao=7,Wo=0,zh=1,Hh=2,ci=0,Vh=1,Gh=2,Wh=3,Xh=4,$h=5,qh=6,Yh=7,Hl="attached",Kh="detached",mu=300,is=301,ss=302,oo=303,lo=304,Wr=306,rs=1e3,oi=1001,kr=1002,Zt=1003,gu=1004,Ls=1005,cn=1006,Pr=1007,qn=1008,Dn=1009,_u=1010,xu=1011,Os=1012,Xo=1013,Ai=1014,An=1015,Ws=1016,$o=1017,qo=1018,Bs=1020,vu=35902,Mu=1021,yu=1022,_n=1023,ks=1026,zs=1027,Yo=1028,Ko=1029,Su=1030,jo=1031,Zo=1033,Lr=33776,Ir=33777,Dr=33778,Ur=33779,co=35840,uo=35841,ho=35842,fo=35843,po=36196,mo=37492,go=37496,_o=37808,xo=37809,vo=37810,Mo=37811,yo=37812,So=37813,Eo=37814,To=37815,bo=37816,Ao=37817,wo=37818,Ro=37819,Co=37820,Po=37821,Nr=36492,Lo=36494,Io=36495,Eu=36283,Do=36284,Uo=36285,No=36286,Hs=2300,Vs=2301,aa=2302,Vl=2400,Gl=2401,Wl=2402,jh=2500,Zh=0,Tu=1,Fo=2,Jh=3200,Qh=3201,Jo=0,ef=1,ai="",Vt="srgb",en="srgb-linear",zr="linear",St="srgb",Di=7680,Xl=519,tf=512,nf=513,sf=514,bu=515,rf=516,af=517,of=518,lf=519,Oo=35044,$l="300 es",In=2e3,Hr=2001;class hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const i=s.indexOf(t);i!==-1&&s.splice(i,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let i=0,a=s.length;i<a;i++)s[i].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ql=1234567;const Us=Math.PI/180,as=180/Math.PI;function wn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[r&255]+Wt[r>>8&255]+Wt[r>>16&255]+Wt[r>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function tt(r,e,t){return Math.max(e,Math.min(t,r))}function Qo(r,e){return(r%e+e)%e}function cf(r,e,t,n,s){return n+(r-e)*(s-n)/(t-e)}function uf(r,e,t){return r!==e?(t-r)/(e-r):0}function Ns(r,e,t){return(1-t)*r+t*e}function hf(r,e,t,n){return Ns(r,e,1-Math.exp(-t*n))}function ff(r,e=1){return e-Math.abs(Qo(r,e*2)-e)}function df(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function pf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function mf(r,e){return r+Math.floor(Math.random()*(e-r+1))}function gf(r,e){return r+Math.random()*(e-r)}function _f(r){return r*(.5-Math.random())}function xf(r){r!==void 0&&(ql=r);let e=ql+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vf(r){return r*Us}function Mf(r){return r*as}function yf(r){return(r&r-1)===0&&r!==0}function Sf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ef(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Tf(r,e,t,n,s){const i=Math.cos,a=Math.sin,l=i(t/2),c=a(t/2),o=i((e+n)/2),h=a((e+n)/2),f=i((e-n)/2),p=a((e-n)/2),g=i((n-e)/2),v=a((n-e)/2);switch(s){case"XYX":r.set(l*h,c*f,c*p,l*o);break;case"YZY":r.set(c*p,l*h,c*f,l*o);break;case"ZXZ":r.set(c*f,c*p,l*h,l*o);break;case"XZX":r.set(l*h,c*v,c*g,l*o);break;case"YXY":r.set(c*g,l*h,c*v,l*o);break;case"ZYZ":r.set(c*v,c*g,l*h,l*o);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function vt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Fr={DEG2RAD:Us,RAD2DEG:as,generateUUID:wn,clamp:tt,euclideanModulo:Qo,mapLinear:cf,inverseLerp:uf,lerp:Ns,damp:hf,pingpong:ff,smoothstep:df,smootherstep:pf,randInt:mf,randFloat:gf,randFloatSpread:_f,seededRandom:xf,degToRad:vf,radToDeg:Mf,isPowerOfTwo:yf,ceilPowerOfTwo:Sf,floorPowerOfTwo:Ef,setQuaternionFromProperEuler:Tf,normalize:vt,denormalize:Tn};class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*s+e.x,this.y=i*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,i,a,l){let c=n[s+0],o=n[s+1],h=n[s+2],f=n[s+3];const p=i[a+0],g=i[a+1],v=i[a+2],y=i[a+3];if(l===0){e[t+0]=c,e[t+1]=o,e[t+2]=h,e[t+3]=f;return}if(l===1){e[t+0]=p,e[t+1]=g,e[t+2]=v,e[t+3]=y;return}if(f!==y||c!==p||o!==g||h!==v){let x=1-l;const m=c*p+o*g+h*v+f*y,C=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){const I=Math.sqrt(w),U=Math.atan2(I,m*C);x=Math.sin(x*U)/I,l=Math.sin(l*U)/I}const E=l*C;if(c=c*x+p*E,o=o*x+g*E,h=h*x+v*E,f=f*x+y*E,x===1-l){const I=1/Math.sqrt(c*c+o*o+h*h+f*f);c*=I,o*=I,h*=I,f*=I}}e[t]=c,e[t+1]=o,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,i,a){const l=n[s],c=n[s+1],o=n[s+2],h=n[s+3],f=i[a],p=i[a+1],g=i[a+2],v=i[a+3];return e[t]=l*v+h*f+c*g-o*p,e[t+1]=c*v+h*p+o*f-l*g,e[t+2]=o*v+h*g+l*p-c*f,e[t+3]=h*v-l*f-c*p-o*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,i=e._z,a=e._order,l=Math.cos,c=Math.sin,o=l(n/2),h=l(s/2),f=l(i/2),p=c(n/2),g=c(s/2),v=c(i/2);switch(a){case"XYZ":this._x=p*h*f+o*g*v,this._y=o*g*f-p*h*v,this._z=o*h*v+p*g*f,this._w=o*h*f-p*g*v;break;case"YXZ":this._x=p*h*f+o*g*v,this._y=o*g*f-p*h*v,this._z=o*h*v-p*g*f,this._w=o*h*f+p*g*v;break;case"ZXY":this._x=p*h*f-o*g*v,this._y=o*g*f+p*h*v,this._z=o*h*v+p*g*f,this._w=o*h*f-p*g*v;break;case"ZYX":this._x=p*h*f-o*g*v,this._y=o*g*f+p*h*v,this._z=o*h*v-p*g*f,this._w=o*h*f+p*g*v;break;case"YZX":this._x=p*h*f+o*g*v,this._y=o*g*f+p*h*v,this._z=o*h*v-p*g*f,this._w=o*h*f-p*g*v;break;case"XZY":this._x=p*h*f-o*g*v,this._y=o*g*f-p*h*v,this._z=o*h*v+p*g*f,this._w=o*h*f+p*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],i=t[8],a=t[1],l=t[5],c=t[9],o=t[2],h=t[6],f=t[10],p=n+l+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(h-c)*g,this._y=(i-o)*g,this._z=(a-s)*g}else if(n>l&&n>f){const g=2*Math.sqrt(1+n-l-f);this._w=(h-c)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(i+o)/g}else if(l>f){const g=2*Math.sqrt(1+l-n-f);this._w=(i-o)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+f-n-l);this._w=(a-s)/g,this._x=(i+o)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,i=e._z,a=e._w,l=t._x,c=t._y,o=t._z,h=t._w;return this._x=n*h+a*l+s*o-i*c,this._y=s*h+a*c+i*l-n*o,this._z=i*h+a*o+n*c-s*l,this._w=a*h-n*l-s*c-i*o,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,i=this._z,a=this._w;let l=a*e._w+n*e._x+s*e._y+i*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=n,this._y=s,this._z=i,this;const c=1-l*l;if(c<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*s+t*this._y,this._z=g*i+t*this._z,this.normalize(),this}const o=Math.sqrt(c),h=Math.atan2(o,l),f=Math.sin((1-t)*h)/o,p=Math.sin(t*h)/o;return this._w=a*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=i*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*s,this.y=i[1]*t+i[4]*n+i[7]*s,this.z=i[2]*t+i[5]*n+i[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*s+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*s+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*s+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*s+i[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,i=e.x,a=e.y,l=e.z,c=e.w,o=2*(a*s-l*n),h=2*(l*t-i*s),f=2*(i*n-a*t);return this.x=t+c*o+a*f-l*h,this.y=n+c*h+l*o-i*f,this.z=s+c*f+i*h-a*o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*s,this.y=i[1]*t+i[5]*n+i[9]*s,this.z=i[2]*t+i[6]*n+i[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,i=e.z,a=t.x,l=t.y,c=t.z;return this.x=s*c-i*l,this.y=i*a-n*c,this.z=n*l-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oa.copy(this).projectOnVector(e),this.sub(oa)}reflect(e){return this.sub(oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oa=new B,Yl=new hi;class Ze{constructor(e,t,n,s,i,a,l,c,o){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,i,a,l,c,o)}set(e,t,n,s,i,a,l,c,o){const h=this.elements;return h[0]=e,h[1]=s,h[2]=l,h[3]=t,h[4]=i,h[5]=c,h[6]=n,h[7]=a,h[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,i=this.elements,a=n[0],l=n[3],c=n[6],o=n[1],h=n[4],f=n[7],p=n[2],g=n[5],v=n[8],y=s[0],x=s[3],m=s[6],C=s[1],w=s[4],E=s[7],I=s[2],U=s[5],N=s[8];return i[0]=a*y+l*C+c*I,i[3]=a*x+l*w+c*U,i[6]=a*m+l*E+c*N,i[1]=o*y+h*C+f*I,i[4]=o*x+h*w+f*U,i[7]=o*m+h*E+f*N,i[2]=p*y+g*C+v*I,i[5]=p*x+g*w+v*U,i[8]=p*m+g*E+v*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],i=e[3],a=e[4],l=e[5],c=e[6],o=e[7],h=e[8];return t*a*h-t*l*o-n*i*h+n*l*c+s*i*o-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],i=e[3],a=e[4],l=e[5],c=e[6],o=e[7],h=e[8],f=h*a-l*o,p=l*c-h*i,g=o*i-a*c,v=t*f+n*p+s*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=f*y,e[1]=(s*o-h*n)*y,e[2]=(l*n-s*a)*y,e[3]=p*y,e[4]=(h*t-s*c)*y,e[5]=(s*i-l*t)*y,e[6]=g*y,e[7]=(n*c-o*t)*y,e[8]=(a*t-n*i)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,i,a,l){const c=Math.cos(i),o=Math.sin(i);return this.set(n*c,n*o,-n*(c*a+o*l)+a+e,-s*o,s*c,-s*(-o*a+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(la.makeScale(e,t)),this}rotate(e){return this.premultiply(la.makeRotation(-e)),this}translate(e,t){return this.premultiply(la.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const la=new Ze;function Au(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Gs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function bf(){const r=Gs("canvas");return r.style.display="block",r}const Kl={};function Ji(r){r in Kl||(Kl[r]=!0,console.warn(r))}function Af(r,e,t){return new Promise(function(n,s){function i(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(i,t);break;default:n()}}setTimeout(i,t)})}const jl=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zl=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wf(){const r={enabled:!0,workingColorSpace:en,spaces:{},convert:function(s,i,a){return this.enabled===!1||i===a||!i||!a||(this.spaces[i].transfer===St&&(s.r=Kn(s.r),s.g=Kn(s.g),s.b=Kn(s.b)),this.spaces[i].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[i].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===St&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b))),s},workingToColorSpace:function(s,i){return this.convert(s,this.workingColorSpace,i)},colorSpaceToWorking:function(s,i){return this.convert(s,i,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ai?zr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,i=this.workingColorSpace){return s.fromArray(this.spaces[i].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,i,a){return s.copy(this.spaces[i].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,i){return Ji("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(s,i)},toWorkingColorSpace:function(s,i){return Ji("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(s,i)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[en]:{primaries:e,whitePoint:n,transfer:zr,toXYZ:jl,fromXYZ:Zl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:St,toXYZ:jl,fromXYZ:Zl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),r}const ot=wf();function Kn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Qi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ui;class Rf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ui===void 0&&(Ui=Gs("canvas")),Ui.width=e.width,Ui.height=e.height;const s=Ui.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ui}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),i=s.data;for(let a=0;a<i.length;a++)i[a]=Kn(i[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kn(t[n]/255)*255):t[n]=Kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cf=0;class el{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=wn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let i;if(Array.isArray(s)){i=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?i.push(ca(s[a].image)):i.push(ca(s[a]))}else i=ca(s);n.url=i}return t||(e.images[this.uuid]=n),n}}function ca(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Rf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pf=0;const ua=new B;class Bt extends hs{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=oi,s=oi,i=cn,a=qn,l=_n,c=Dn,o=Bt.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=wn(),this.name="",this.source=new el(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=i,this.minFilter=a,this.anisotropy=o,this.format=l,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ua).x}get height(){return this.source.getSize(ua).y}get depth(){return this.source.getSize(ua).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rs:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case kr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rs:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case kr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=mu;Bt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,i;const c=e.elements,o=c[0],h=c[4],f=c[8],p=c[1],g=c[5],v=c[9],y=c[2],x=c[6],m=c[10];if(Math.abs(h-p)<.01&&Math.abs(f-y)<.01&&Math.abs(v-x)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+y)<.1&&Math.abs(v+x)<.1&&Math.abs(o+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(o+1)/2,E=(g+1)/2,I=(m+1)/2,U=(h+p)/4,N=(f+y)/4,k=(v+x)/4;return w>E&&w>I?w<.01?(n=0,s=.707106781,i=.707106781):(n=Math.sqrt(w),s=U/n,i=N/n):E>I?E<.01?(n=.707106781,s=0,i=.707106781):(s=Math.sqrt(E),n=U/s,i=k/s):I<.01?(n=.707106781,s=.707106781,i=0):(i=Math.sqrt(I),n=N/i,s=k/i),this.set(n,s,i,t),this}let C=Math.sqrt((x-v)*(x-v)+(f-y)*(f-y)+(p-h)*(p-h));return Math.abs(C)<.001&&(C=1),this.x=(x-v)/C,this.y=(f-y)/C,this.z=(p-h)/C,this.w=Math.acos((o+g+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lf extends hs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const s={width:e,height:t,depth:n.depth},i=new Bt(s);this.textures=[];const a=n.count;for(let l=0;l<a;l++)this.textures[l]=i.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,i=this.textures.length;s<i;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new el(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends Lf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wu extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class If extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Un{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const i=n.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=i.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,yn):yn.fromBufferAttribute(i,a),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)),nr.applyMatrix4(e.matrixWorld),this.union(nr)}const s=e.children;for(let i=0,a=s.length;i<a;i++)this.expandByObject(s[i],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),ir.subVectors(this.max,ys),Ni.subVectors(e.a,ys),Fi.subVectors(e.b,ys),Oi.subVectors(e.c,ys),Qn.subVectors(Fi,Ni),ei.subVectors(Oi,Fi),di.subVectors(Ni,Oi);let t=[0,-Qn.z,Qn.y,0,-ei.z,ei.y,0,-di.z,di.y,Qn.z,0,-Qn.x,ei.z,0,-ei.x,di.z,0,-di.x,-Qn.y,Qn.x,0,-ei.y,ei.x,0,-di.y,di.x,0];return!ha(t,Ni,Fi,Oi,ir)||(t=[1,0,0,0,1,0,0,0,1],!ha(t,Ni,Fi,Oi,ir))?!1:(sr.crossVectors(Qn,ei),t=[sr.x,sr.y,sr.z],ha(t,Ni,Fi,Oi,ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const kn=[new B,new B,new B,new B,new B,new B,new B,new B],yn=new B,nr=new Un,Ni=new B,Fi=new B,Oi=new B,Qn=new B,ei=new B,di=new B,ys=new B,ir=new B,sr=new B,pi=new B;function ha(r,e,t,n,s){for(let i=0,a=r.length-3;i<=a;i+=3){pi.fromArray(r,i);const l=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),c=e.dot(pi),o=t.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(c,o,h),Math.min(c,o,h))>l)return!1}return!0}const Df=new Un,Ss=new B,fa=new B;class Nn{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Df.setFromPoints(e).getCenter(n);let s=0;for(let i=0,a=e.length;i<a;i++)s=Math.max(s,n.distanceToSquared(e[i]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ss.subVectors(e,this.center);const t=Ss.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ss,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ss.copy(e.center).add(fa)),this.expandByPoint(Ss.copy(e.center).sub(fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const zn=new B,da=new B,rr=new B,ti=new B,pa=new B,ar=new B,ma=new B;class Xr{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){da.copy(e).add(t).multiplyScalar(.5),rr.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(da);const i=e.distanceTo(t)*.5,a=-this.direction.dot(rr),l=ti.dot(this.direction),c=-ti.dot(rr),o=ti.lengthSq(),h=Math.abs(1-a*a);let f,p,g,v;if(h>0)if(f=a*c-l,p=a*l-c,v=i*h,f>=0)if(p>=-v)if(p<=v){const y=1/h;f*=y,p*=y,g=f*(f+a*p+2*l)+p*(a*f+p+2*c)+o}else p=i,f=Math.max(0,-(a*p+l)),g=-f*f+p*(p+2*c)+o;else p=-i,f=Math.max(0,-(a*p+l)),g=-f*f+p*(p+2*c)+o;else p<=-v?(f=Math.max(0,-(-a*i+l)),p=f>0?-i:Math.min(Math.max(-i,-c),i),g=-f*f+p*(p+2*c)+o):p<=v?(f=0,p=Math.min(Math.max(-i,-c),i),g=p*(p+2*c)+o):(f=Math.max(0,-(a*i+l)),p=f>0?i:Math.min(Math.max(-i,-c),i),g=-f*f+p*(p+2*c)+o);else p=a>0?-i:i,f=Math.max(0,-(a*p+l)),g=-f*f+p*(p+2*c)+o;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(da).addScaledVector(rr,p),g}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),s=zn.dot(zn)-n*n,i=e.radius*e.radius;if(s>i)return null;const a=Math.sqrt(i-s),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,i,a,l,c;const o=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return o>=0?(n=(e.min.x-p.x)*o,s=(e.max.x-p.x)*o):(n=(e.max.x-p.x)*o,s=(e.min.x-p.x)*o),h>=0?(i=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(i=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||i>s||((i>n||isNaN(n))&&(n=i),(a<s||isNaN(s))&&(s=a),f>=0?(l=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(l=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,s,i){pa.subVectors(t,e),ar.subVectors(n,e),ma.crossVectors(pa,ar);let a=this.direction.dot(ma),l;if(a>0){if(s)return null;l=1}else if(a<0)l=-1,a=-a;else return null;ti.subVectors(this.origin,e);const c=l*this.direction.dot(ar.crossVectors(ti,ar));if(c<0)return null;const o=l*this.direction.dot(pa.cross(ti));if(o<0||c+o>a)return null;const h=-l*ti.dot(ma);return h<0?null:this.at(h/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,n,s,i,a,l,c,o,h,f,p,g,v,y,x){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,i,a,l,c,o,h,f,p,g,v,y,x)}set(e,t,n,s,i,a,l,c,o,h,f,p,g,v,y,x){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=i,m[5]=a,m[9]=l,m[13]=c,m[2]=o,m[6]=h,m[10]=f,m[14]=p,m[3]=g,m[7]=v,m[11]=y,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Bi.setFromMatrixColumn(e,0).length(),i=1/Bi.setFromMatrixColumn(e,1).length(),a=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,i=e.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(s),o=Math.sin(s),h=Math.cos(i),f=Math.sin(i);if(e.order==="XYZ"){const p=a*h,g=a*f,v=l*h,y=l*f;t[0]=c*h,t[4]=-c*f,t[8]=o,t[1]=g+v*o,t[5]=p-y*o,t[9]=-l*c,t[2]=y-p*o,t[6]=v+g*o,t[10]=a*c}else if(e.order==="YXZ"){const p=c*h,g=c*f,v=o*h,y=o*f;t[0]=p+y*l,t[4]=v*l-g,t[8]=a*o,t[1]=a*f,t[5]=a*h,t[9]=-l,t[2]=g*l-v,t[6]=y+p*l,t[10]=a*c}else if(e.order==="ZXY"){const p=c*h,g=c*f,v=o*h,y=o*f;t[0]=p-y*l,t[4]=-a*f,t[8]=v+g*l,t[1]=g+v*l,t[5]=a*h,t[9]=y-p*l,t[2]=-a*o,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){const p=a*h,g=a*f,v=l*h,y=l*f;t[0]=c*h,t[4]=v*o-g,t[8]=p*o+y,t[1]=c*f,t[5]=y*o+p,t[9]=g*o-v,t[2]=-o,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){const p=a*c,g=a*o,v=l*c,y=l*o;t[0]=c*h,t[4]=y-p*f,t[8]=v*f+g,t[1]=f,t[5]=a*h,t[9]=-l*h,t[2]=-o*h,t[6]=g*f+v,t[10]=p-y*f}else if(e.order==="XZY"){const p=a*c,g=a*o,v=l*c,y=l*o;t[0]=c*h,t[4]=-f,t[8]=o*h,t[1]=p*f+y,t[5]=a*h,t[9]=g*f-v,t[2]=v*f-g,t[6]=l*h,t[10]=y*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uf,e,Nf)}lookAt(e,t,n){const s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),ni.crossVectors(n,on),ni.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ni.crossVectors(n,on)),ni.normalize(),or.crossVectors(on,ni),s[0]=ni.x,s[4]=or.x,s[8]=on.x,s[1]=ni.y,s[5]=or.y,s[9]=on.y,s[2]=ni.z,s[6]=or.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,i=this.elements,a=n[0],l=n[4],c=n[8],o=n[12],h=n[1],f=n[5],p=n[9],g=n[13],v=n[2],y=n[6],x=n[10],m=n[14],C=n[3],w=n[7],E=n[11],I=n[15],U=s[0],N=s[4],k=s[8],b=s[12],A=s[1],L=s[5],Z=s[9],q=s[13],X=s[2],ne=s[6],K=s[10],oe=s[14],Y=s[3],me=s[7],ge=s[11],Ie=s[15];return i[0]=a*U+l*A+c*X+o*Y,i[4]=a*N+l*L+c*ne+o*me,i[8]=a*k+l*Z+c*K+o*ge,i[12]=a*b+l*q+c*oe+o*Ie,i[1]=h*U+f*A+p*X+g*Y,i[5]=h*N+f*L+p*ne+g*me,i[9]=h*k+f*Z+p*K+g*ge,i[13]=h*b+f*q+p*oe+g*Ie,i[2]=v*U+y*A+x*X+m*Y,i[6]=v*N+y*L+x*ne+m*me,i[10]=v*k+y*Z+x*K+m*ge,i[14]=v*b+y*q+x*oe+m*Ie,i[3]=C*U+w*A+E*X+I*Y,i[7]=C*N+w*L+E*ne+I*me,i[11]=C*k+w*Z+E*K+I*ge,i[15]=C*b+w*q+E*oe+I*Ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],i=e[12],a=e[1],l=e[5],c=e[9],o=e[13],h=e[2],f=e[6],p=e[10],g=e[14],v=e[3],y=e[7],x=e[11],m=e[15];return v*(+i*c*f-s*o*f-i*l*p+n*o*p+s*l*g-n*c*g)+y*(+t*c*g-t*o*p+i*a*p-s*a*g+s*o*h-i*c*h)+x*(+t*o*f-t*l*g-i*a*f+n*a*g+i*l*h-n*o*h)+m*(-s*l*h-t*c*f+t*l*p+s*a*f-n*a*p+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],i=e[3],a=e[4],l=e[5],c=e[6],o=e[7],h=e[8],f=e[9],p=e[10],g=e[11],v=e[12],y=e[13],x=e[14],m=e[15],C=f*x*o-y*p*o+y*c*g-l*x*g-f*c*m+l*p*m,w=v*p*o-h*x*o-v*c*g+a*x*g+h*c*m-a*p*m,E=h*y*o-v*f*o+v*l*g-a*y*g-h*l*m+a*f*m,I=v*f*c-h*y*c-v*l*p+a*y*p+h*l*x-a*f*x,U=t*C+n*w+s*E+i*I;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/U;return e[0]=C*N,e[1]=(y*p*i-f*x*i-y*s*g+n*x*g+f*s*m-n*p*m)*N,e[2]=(l*x*i-y*c*i+y*s*o-n*x*o-l*s*m+n*c*m)*N,e[3]=(f*c*i-l*p*i-f*s*o+n*p*o+l*s*g-n*c*g)*N,e[4]=w*N,e[5]=(h*x*i-v*p*i+v*s*g-t*x*g-h*s*m+t*p*m)*N,e[6]=(v*c*i-a*x*i-v*s*o+t*x*o+a*s*m-t*c*m)*N,e[7]=(a*p*i-h*c*i+h*s*o-t*p*o-a*s*g+t*c*g)*N,e[8]=E*N,e[9]=(v*f*i-h*y*i-v*n*g+t*y*g+h*n*m-t*f*m)*N,e[10]=(a*y*i-v*l*i+v*n*o-t*y*o-a*n*m+t*l*m)*N,e[11]=(h*l*i-a*f*i-h*n*o+t*f*o+a*n*g-t*l*g)*N,e[12]=I*N,e[13]=(h*y*s-v*f*s+v*n*p-t*y*p-h*n*x+t*f*x)*N,e[14]=(v*l*s-a*y*s-v*n*c+t*y*c+a*n*x-t*l*x)*N,e[15]=(a*f*s-h*l*s+h*n*c-t*f*c-a*n*p+t*l*p)*N,this}scale(e){const t=this.elements,n=e.x,s=e.y,i=e.z;return t[0]*=n,t[4]*=s,t[8]*=i,t[1]*=n,t[5]*=s,t[9]*=i,t[2]*=n,t[6]*=s,t[10]*=i,t[3]*=n,t[7]*=s,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),i=1-n,a=e.x,l=e.y,c=e.z,o=i*a,h=i*l;return this.set(o*a+n,o*l-s*c,o*c+s*l,0,o*l+s*c,h*l+n,h*c-s*a,0,o*c-s*l,h*c+s*a,i*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,i,a){return this.set(1,n,i,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,i=t._x,a=t._y,l=t._z,c=t._w,o=i+i,h=a+a,f=l+l,p=i*o,g=i*h,v=i*f,y=a*h,x=a*f,m=l*f,C=c*o,w=c*h,E=c*f,I=n.x,U=n.y,N=n.z;return s[0]=(1-(y+m))*I,s[1]=(g+E)*I,s[2]=(v-w)*I,s[3]=0,s[4]=(g-E)*U,s[5]=(1-(p+m))*U,s[6]=(x+C)*U,s[7]=0,s[8]=(v+w)*N,s[9]=(x-C)*N,s[10]=(1-(p+y))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let i=Bi.set(s[0],s[1],s[2]).length();const a=Bi.set(s[4],s[5],s[6]).length(),l=Bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(i=-i),e.x=s[12],e.y=s[13],e.z=s[14],Sn.copy(this);const o=1/i,h=1/a,f=1/l;return Sn.elements[0]*=o,Sn.elements[1]*=o,Sn.elements[2]*=o,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=f,Sn.elements[9]*=f,Sn.elements[10]*=f,t.setFromRotationMatrix(Sn),n.x=i,n.y=a,n.z=l,this}makePerspective(e,t,n,s,i,a,l=In,c=!1){const o=this.elements,h=2*i/(t-e),f=2*i/(n-s),p=(t+e)/(t-e),g=(n+s)/(n-s);let v,y;if(c)v=i/(a-i),y=a*i/(a-i);else if(l===In)v=-(a+i)/(a-i),y=-2*a*i/(a-i);else if(l===Hr)v=-a/(a-i),y=-a*i/(a-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return o[0]=h,o[4]=0,o[8]=p,o[12]=0,o[1]=0,o[5]=f,o[9]=g,o[13]=0,o[2]=0,o[6]=0,o[10]=v,o[14]=y,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,s,i,a,l=In,c=!1){const o=this.elements,h=2/(t-e),f=2/(n-s),p=-(t+e)/(t-e),g=-(n+s)/(n-s);let v,y;if(c)v=1/(a-i),y=a/(a-i);else if(l===In)v=-2/(a-i),y=-(a+i)/(a-i);else if(l===Hr)v=-1/(a-i),y=-i/(a-i);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return o[0]=h,o[4]=0,o[8]=0,o[12]=p,o[1]=0,o[5]=f,o[9]=0,o[13]=g,o[2]=0,o[6]=0,o[10]=v,o[14]=y,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bi=new B,Sn=new Qe,Uf=new B(0,0,0),Nf=new B(1,1,1),ni=new B,or=new B,on=new B,Jl=new Qe,Ql=new hi;class xn{constructor(e=0,t=0,n=0,s=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,i=s[0],a=s[4],l=s[8],c=s[1],o=s[5],h=s[9],f=s[2],p=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(p,o),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,o)):(this._y=Math.atan2(-f,i),this._z=0);break;case"ZXY":this._x=Math.asin(tt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,o)):(this._y=0,this._z=Math.atan2(c,i));break;case"ZYX":this._y=Math.asin(-tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,i)):(this._x=0,this._z=Math.atan2(-a,o));break;case"YZX":this._z=Math.asin(tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,o),this._y=Math.atan2(-f,i)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,o),this._y=Math.atan2(l,i)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ql.setFromEuler(this),this.setFromQuaternion(Ql,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class Ru{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ff=0;const ec=new B,ki=new hi,Hn=new Qe,lr=new B,Es=new B,Of=new B,Bf=new hi,tc=new B(1,0,0),nc=new B(0,1,0),ic=new B(0,0,1),sc={type:"added"},kf={type:"removed"},zi={type:"childadded",child:null},ga={type:"childremoved",child:null};class Et extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new B,t=new xn,n=new hi,s=new B(1,1,1);function i(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(i),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Ze}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ru,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(tc,e)}rotateY(e){return this.rotateOnAxis(nc,e)}rotateZ(e){return this.rotateOnAxis(ic,e)}translateOnAxis(e,t){return ec.copy(e).applyQuaternion(this.quaternion),this.position.add(ec.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tc,e)}translateY(e){return this.translateOnAxis(nc,e)}translateZ(e){return this.translateOnAxis(ic,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?lr.copy(e):lr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Es,lr,this.up):Hn.lookAt(lr,Es,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(Hn),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sc),zi.child=e,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kf),ga.child=e,this.dispatchEvent(ga),ga.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sc),zi.child=e,this.dispatchEvent(zi),zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let i=0,a=s.length;i<a;i++)s[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,Of),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,Bf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let i=0,a=s.length;i<a;i++)s[i].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function i(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=i(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let o=0,h=c.length;o<h;o++){const f=c[o];i(e.shapes,f)}else i(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,o=this.material.length;c<o;c++)l.push(i(e.materials,this.material[c]));s.material=l}else s.material=i(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];s.animations.push(i(e.animations,c))}}if(t){const l=a(e.geometries),c=a(e.materials),o=a(e.textures),h=a(e.images),f=a(e.shapes),p=a(e.skeletons),g=a(e.animations),v=a(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),o.length>0&&(n.textures=o),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(l){const c=[];for(const o in l){const h=l[o];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Et.DEFAULT_UP=new B(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new B,Vn=new B,_a=new B,Gn=new B,Hi=new B,Vi=new B,rc=new B,xa=new B,va=new B,Ma=new B,ya=new dt,Sa=new dt,Ea=new dt;class bn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),En.subVectors(e,t),s.cross(En);const i=s.lengthSq();return i>0?s.multiplyScalar(1/Math.sqrt(i)):s.set(0,0,0)}static getBarycoord(e,t,n,s,i){En.subVectors(s,t),Vn.subVectors(n,t),_a.subVectors(e,t);const a=En.dot(En),l=En.dot(Vn),c=En.dot(_a),o=Vn.dot(Vn),h=Vn.dot(_a),f=a*o-l*l;if(f===0)return i.set(0,0,0),null;const p=1/f,g=(o*c-l*h)*p,v=(a*h-l*c)*p;return i.set(1-g-v,v,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,n,s,i,a,l,c){return this.getBarycoord(e,t,n,s,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(i,Gn.x),c.addScaledVector(a,Gn.y),c.addScaledVector(l,Gn.z),c)}static getInterpolatedAttribute(e,t,n,s,i,a){return ya.setScalar(0),Sa.setScalar(0),Ea.setScalar(0),ya.fromBufferAttribute(e,t),Sa.fromBufferAttribute(e,n),Ea.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ya,i.x),a.addScaledVector(Sa,i.y),a.addScaledVector(Ea,i.z),a}static isFrontFacing(e,t,n,s){return En.subVectors(n,t),Vn.subVectors(e,t),En.cross(Vn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),En.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,i){return bn.getInterpolation(e,this.a,this.b,this.c,t,n,s,i)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,i=this.c;let a,l;Hi.subVectors(s,n),Vi.subVectors(i,n),xa.subVectors(e,n);const c=Hi.dot(xa),o=Vi.dot(xa);if(c<=0&&o<=0)return t.copy(n);va.subVectors(e,s);const h=Hi.dot(va),f=Vi.dot(va);if(h>=0&&f<=h)return t.copy(s);const p=c*f-h*o;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Hi,a);Ma.subVectors(e,i);const g=Hi.dot(Ma),v=Vi.dot(Ma);if(v>=0&&g<=v)return t.copy(i);const y=g*o-c*v;if(y<=0&&o>=0&&v<=0)return l=o/(o-v),t.copy(n).addScaledVector(Vi,l);const x=h*v-g*f;if(x<=0&&f-h>=0&&g-v>=0)return rc.subVectors(i,s),l=(f-h)/(f-h+(g-v)),t.copy(s).addScaledVector(rc,l);const m=1/(x+y+p);return a=y*m,l=p*m,t.copy(n).addScaledVector(Hi,a).addScaledVector(Vi,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},cr={h:0,s:0,l:0};function Ta(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=Qo(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,a=2*n-i;this.r=Ta(a,i,e+1/3),this.g=Ta(a,i,e),this.b=Ta(a,i,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=Vt){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=s[1],a=i.length;if(a===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=Cu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return ot.workingToColorSpace(Xt.copy(this),e),Math.round(tt(Xt.r*255,0,255))*65536+Math.round(tt(Xt.g*255,0,255))*256+Math.round(tt(Xt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(Xt.copy(this),t);const n=Xt.r,s=Xt.g,i=Xt.b,a=Math.max(n,s,i),l=Math.min(n,s,i);let c,o;const h=(l+a)/2;if(l===a)c=0,o=0;else{const f=a-l;switch(o=h<=.5?f/(a+l):f/(2-a-l),a){case n:c=(s-i)/f+(s<i?6:0);break;case s:c=(i-n)/f+2;break;case i:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=o,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Vt){ot.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,s=Xt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(cr);const n=Ns(ii.h,cr.h,t),s=Ns(ii.s,cr.s,t),i=Ns(ii.l,cr.l,t);return this.setHSL(n,s,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*s,this.g=i[1]*t+i[4]*n+i[7]*s,this.b=i[2]*t+i[5]*n+i[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new We;We.NAMES=Cu;let zf=0;class Rn extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=Zi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ja,this.blendDst=Qa,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ja&&(n.blendSrc=this.blendSrc),this.blendDst!==Qa&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(i){const a=[];for(const l in i){const c=i[l];delete c.metadata,a.push(c)}return a}if(t){const i=s(e.textures),a=s(e.images);i.length>0&&(n.textures=i),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let i=0;i!==s;++i)n[i]=t[i].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ti extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new B,ur=new it;let Hf=0;class Jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oo,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,i=this.itemSize;s<i;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXY(t,ur.x,ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oo&&(e.usage=this.usage),e}}class Pu extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Lu extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qt extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Vf=0;const mn=new Qe,ba=new Et,Gi=new B,ln=new Un,Ts=new Un,Ot=new B;class un extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Au(e)?Lu:Pu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new Ze().getNormalMatrix(e);n.applyNormalMatrix(i),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return ba.lookAt(e),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,i=e.length;s<i;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const i=e[s];t.setXYZ(s,i.x,i.y,i.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const i=t[n];ln.setFromBufferAttribute(i),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const l=t[i];Ts.setFromBufferAttribute(l),this.morphTargetsRelative?(Ot.addVectors(ln.min,Ts.min),ln.expandByPoint(Ot),Ot.addVectors(ln.max,Ts.max),ln.expandByPoint(Ot)):(ln.expandByPoint(Ts.min),ln.expandByPoint(Ts.max))}ln.getCenter(n);let s=0;for(let i=0,a=e.count;i<a;i++)Ot.fromBufferAttribute(e,i),s=Math.max(s,n.distanceToSquared(Ot));if(t)for(let i=0,a=t.length;i<a;i++){const l=t[i],c=this.morphTargetsRelative;for(let o=0,h=l.count;o<h;o++)Ot.fromBufferAttribute(l,o),c&&(Gi.fromBufferAttribute(e,o),Ot.add(Gi)),s=Math.max(s,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,i=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),l=[],c=[];for(let k=0;k<n.count;k++)l[k]=new B,c[k]=new B;const o=new B,h=new B,f=new B,p=new it,g=new it,v=new it,y=new B,x=new B;function m(k,b,A){o.fromBufferAttribute(n,k),h.fromBufferAttribute(n,b),f.fromBufferAttribute(n,A),p.fromBufferAttribute(i,k),g.fromBufferAttribute(i,b),v.fromBufferAttribute(i,A),h.sub(o),f.sub(o),g.sub(p),v.sub(p);const L=1/(g.x*v.y-v.x*g.y);isFinite(L)&&(y.copy(h).multiplyScalar(v.y).addScaledVector(f,-g.y).multiplyScalar(L),x.copy(f).multiplyScalar(g.x).addScaledVector(h,-v.x).multiplyScalar(L),l[k].add(y),l[b].add(y),l[A].add(y),c[k].add(x),c[b].add(x),c[A].add(x))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let k=0,b=C.length;k<b;++k){const A=C[k],L=A.start,Z=A.count;for(let q=L,X=L+Z;q<X;q+=3)m(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const w=new B,E=new B,I=new B,U=new B;function N(k){I.fromBufferAttribute(s,k),U.copy(I);const b=l[k];w.copy(b),w.sub(I.multiplyScalar(I.dot(b))).normalize(),E.crossVectors(U,b);const L=E.dot(c[k])<0?-1:1;a.setXYZW(k,w.x,w.y,w.z,L)}for(let k=0,b=C.length;k<b;++k){const A=C[k],L=A.start,Z=A.count;for(let q=L,X=L+Z;q<X;q+=3)N(e.getX(q+0)),N(e.getX(q+1)),N(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);const s=new B,i=new B,a=new B,l=new B,c=new B,o=new B,h=new B,f=new B;if(e)for(let p=0,g=e.count;p<g;p+=3){const v=e.getX(p+0),y=e.getX(p+1),x=e.getX(p+2);s.fromBufferAttribute(t,v),i.fromBufferAttribute(t,y),a.fromBufferAttribute(t,x),h.subVectors(a,i),f.subVectors(s,i),h.cross(f),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,y),o.fromBufferAttribute(n,x),l.add(h),c.add(h),o.add(h),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(x,o.x,o.y,o.z)}else for(let p=0,g=t.count;p<g;p+=3)s.fromBufferAttribute(t,p+0),i.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,i),f.subVectors(s,i),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(l,c){const o=l.array,h=l.itemSize,f=l.normalized,p=new o.constructor(c.length*h);let g=0,v=0;for(let y=0,x=c.length;y<x;y++){l.isInterleavedBufferAttribute?g=c[y]*l.data.stride+l.offset:g=c[y]*h;for(let m=0;m<h;m++)p[v++]=o[g++]}return new Jt(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new un,n=this.index.array,s=this.attributes;for(const l in s){const c=s[l],o=e(c,n);t.setAttribute(l,o)}const i=this.morphAttributes;for(const l in i){const c=[],o=i[l];for(let h=0,f=o.length;h<f;h++){const p=o[h],g=e(p,n);c.push(g)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const o=a[l];t.addGroup(o.start,o.count,o.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const o in c)c[o]!==void 0&&(e[o]=c[o]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const o=n[c];e.data.attributes[c]=o.toJSON(e.data)}const s={};let i=!1;for(const c in this.morphAttributes){const o=this.morphAttributes[c],h=[];for(let f=0,p=o.length;f<p;f++){const g=o[f];h.push(g.toJSON(e.data))}h.length>0&&(s[c]=h,i=!0)}i&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const o in s){const h=s[o];this.setAttribute(o,h.clone(t))}const i=e.morphAttributes;for(const o in i){const h=[],f=i[o];for(let p=0,g=f.length;p<g;p++)h.push(f[p].clone(t));this.morphAttributes[o]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let o=0,h=a.length;o<h;o++){const f=a[o];this.addGroup(f.start,f.count,f.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ac=new Qe,mi=new Xr,hr=new Nn,oc=new B,fr=new B,dr=new B,pr=new B,Aa=new B,mr=new B,lc=new B,gr=new B;class nn extends Et{constructor(e=new un,t=new Ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=s.length;i<a;i++){const l=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=i}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(i&&l){mr.set(0,0,0);for(let c=0,o=i.length;c<o;c++){const h=l[c],f=i[c];h!==0&&(Aa.fromBufferAttribute(f,e),a?mr.addScaledVector(Aa,h):mr.addScaledVector(Aa.sub(t),h))}t.add(mr)}return t}raycast(e,t){const n=this.geometry,s=this.material,i=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(i),mi.copy(e.ray).recast(e.near),!(hr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(hr,oc)===null||mi.origin.distanceToSquared(oc)>(e.far-e.near)**2))&&(ac.copy(i).invert(),mi.copy(e.ray).applyMatrix4(ac),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,n){let s;const i=this.geometry,a=this.material,l=i.index,c=i.attributes.position,o=i.attributes.uv,h=i.attributes.uv1,f=i.attributes.normal,p=i.groups,g=i.drawRange;if(l!==null)if(Array.isArray(a))for(let v=0,y=p.length;v<y;v++){const x=p[v],m=a[x.materialIndex],C=Math.max(x.start,g.start),w=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let E=C,I=w;E<I;E+=3){const U=l.getX(E),N=l.getX(E+1),k=l.getX(E+2);s=_r(this,m,e,n,o,h,f,U,N,k),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const v=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let x=v,m=y;x<m;x+=3){const C=l.getX(x),w=l.getX(x+1),E=l.getX(x+2);s=_r(this,a,e,n,o,h,f,C,w,E),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,y=p.length;v<y;v++){const x=p[v],m=a[x.materialIndex],C=Math.max(x.start,g.start),w=Math.min(c.count,Math.min(x.start+x.count,g.start+g.count));for(let E=C,I=w;E<I;E+=3){const U=E,N=E+1,k=E+2;s=_r(this,m,e,n,o,h,f,U,N,k),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const v=Math.max(0,g.start),y=Math.min(c.count,g.start+g.count);for(let x=v,m=y;x<m;x+=3){const C=x,w=x+1,E=x+2;s=_r(this,a,e,n,o,h,f,C,w,E),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function Gf(r,e,t,n,s,i,a,l){let c;if(e.side===sn?c=n.intersectTriangle(a,i,s,!0,l):c=n.intersectTriangle(s,i,a,e.side===jn,l),c===null)return null;gr.copy(l),gr.applyMatrix4(r.matrixWorld);const o=t.ray.origin.distanceTo(gr);return o<t.near||o>t.far?null:{distance:o,point:gr.clone(),object:r}}function _r(r,e,t,n,s,i,a,l,c,o){r.getVertexPosition(l,fr),r.getVertexPosition(c,dr),r.getVertexPosition(o,pr);const h=Gf(r,e,t,n,fr,dr,pr,lc);if(h){const f=new B;bn.getBarycoord(lc,fr,dr,pr,f),s&&(h.uv=bn.getInterpolatedAttribute(s,l,c,o,f,new it)),i&&(h.uv1=bn.getInterpolatedAttribute(i,l,c,o,f,new it)),a&&(h.normal=bn.getInterpolatedAttribute(a,l,c,o,f,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:l,b:c,c:o,normal:new B,materialIndex:0};bn.getNormal(fr,dr,pr,p.normal),h.face=p,h.barycoord=f}return h}class Xs extends un{constructor(e=1,t=1,n=1,s=1,i=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:i,depthSegments:a};const l=this;s=Math.floor(s),i=Math.floor(i),a=Math.floor(a);const c=[],o=[],h=[],f=[];let p=0,g=0;v("z","y","x",-1,-1,n,t,e,a,i,0),v("z","y","x",1,-1,n,t,-e,a,i,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,i,4),v("x","y","z",-1,-1,e,t,-n,s,i,5),this.setIndex(c),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(f,2));function v(y,x,m,C,w,E,I,U,N,k,b){const A=E/N,L=I/k,Z=E/2,q=I/2,X=U/2,ne=N+1,K=k+1;let oe=0,Y=0;const me=new B;for(let ge=0;ge<K;ge++){const Ie=ge*L-q;for(let qe=0;qe<ne;qe++){const ut=qe*A-Z;me[y]=ut*C,me[x]=Ie*w,me[m]=X,o.push(me.x,me.y,me.z),me[y]=0,me[x]=0,me[m]=U>0?1:-1,h.push(me.x,me.y,me.z),f.push(qe/N),f.push(1-ge/k),oe+=1}}for(let ge=0;ge<k;ge++)for(let Ie=0;Ie<N;Ie++){const qe=p+Ie+ne*ge,ut=p+Ie+ne*(ge+1),ht=p+(Ie+1)+ne*(ge+1),ee=p+(Ie+1)+ne*ge;c.push(qe,ut,ee),c.push(ut,ht,ee),Y+=6}l.addGroup(g,Y,b),g+=Y,p+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function os(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const s=r[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function jt(r){const e={};for(let t=0;t<r.length;t++){const n=os(r[t]);for(const s in n)e[s]=n[s]}return e}function Wf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Iu(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Xf={clone:os,merge:jt};var $f=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$f,this.fragmentShader=qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=Wf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Du extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new B,cc=new it,uc=new it;class $t extends Du{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=as*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return as*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,cc,uc),t.subVectors(uc,cc)}setViewOffset(e,t,n,s,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Us*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,i=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,o=a.fullHeight;i+=a.offsetX*s/c,t-=a.offsetY*n/o,s*=a.width/c,n*=a.height/o}const l=this.filmOffset;l!==0&&(i+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wi=-90,Xi=1;class Yf extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $t(Wi,Xi,e,t);s.layers=this.layers,this.add(s);const i=new $t(Wi,Xi,e,t);i.layers=this.layers,this.add(i);const a=new $t(Wi,Xi,e,t);a.layers=this.layers,this.add(a);const l=new $t(Wi,Xi,e,t);l.layers=this.layers,this.add(l);const c=new $t(Wi,Xi,e,t);c.layers=this.layers,this.add(c);const o=new $t(Wi,Xi,e,t);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,i,a,l,c]=t;for(const o of t)this.remove(o);if(e===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const o of t)this.add(o),o.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,a,l,c,o,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,i),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,l),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,o),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,p,g),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Uu extends Bt{constructor(e=[],t=is,n,s,i,a,l,c,o,h){super(e,t,n,s,i,a,l,c,o,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kf extends wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Uu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Xs(5,5,5),i=new ui({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:li});i.uniforms.tEquirect.value=t;const a=new nn(s,i),l=t.minFilter;return t.minFilter===qn&&(t.minFilter=cn),new Yf(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const i=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(i)}}class bi extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jf={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,i=null,a=null;const l=this._targetRay,c=this._grip,o=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(o&&e.hand){a=!0;for(const y of e.hand.values()){const x=t.getJointPose(y,n),m=this._getHandJoint(o,y);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}const h=o.joints["index-finger-tip"],f=o.joints["thumb-tip"],p=h.position.distanceTo(f.position),g=.02,v=.005;o.inputState.pinching&&p>g+v?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!o.inputState.pinching&&p<=g-v&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&i!==null&&(s=i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(jf)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=i!==null),o!==null&&(o.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new bi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Zf extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Jf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oo,this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,i=this.stride;s<i;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new B;class tl{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=i,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[s+i])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new tl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[s+i])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const hc=new B,fc=new dt,dc=new dt,Qf=new B,pc=new Qe,xr=new B,Ra=new Nn,mc=new Qe,Ca=new Xr;class ed extends nn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hl,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Un),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xr),this.boundingBox.expandByPoint(xr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xr),this.boundingSphere.expandByPoint(xr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ra.copy(this.boundingSphere),Ra.applyMatrix4(s),e.ray.intersectsSphere(Ra)!==!1&&(mc.copy(s).invert(),Ca.copy(e.ray).applyMatrix4(mc),!(this.boundingBox!==null&&Ca.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ca)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const i=1/e.manhattanLength();i!==1/0?e.multiplyScalar(i):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Hl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Kh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;fc.fromBufferAttribute(s.attributes.skinIndex,e),dc.fromBufferAttribute(s.attributes.skinWeight,e),hc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let i=0;i<4;i++){const a=dc.getComponent(i);if(a!==0){const l=fc.getComponent(i);pc.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(Qf.copy(hc).applyMatrix4(pc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Nu extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Fu extends Bt{constructor(e=null,t=1,n=1,s,i,a,l,c,o=Zt,h=Zt,f,p){super(null,a,l,c,o,h,s,i,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gc=new Qe,td=new Qe;class nl{constructor(e=[],t=[]){this.uuid=wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let i=0,a=e.length;i<a;i++){const l=e[i]?e[i].matrixWorld:td;gc.multiplyMatrices(l,t[i]),gc.toArray(n,i*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new nl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Fu(t,e,e,_n,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const i=e.bones[n];let a=t[i];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",i),a=new Nu),this.bones.push(a),this.boneInverses.push(new Qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,i=t.length;s<i;s++){const a=t[s];e.bones.push(a.uuid);const l=n[s];e.boneInverses.push(l.toArray())}return e}}class Bo extends Jt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const $i=new Qe,_c=new Qe,vr=[],xc=new Un,nd=new Qe,bs=new nn,As=new Nn;class id extends nn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,nd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Un),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$i),xc.copy(e.boundingBox).applyMatrix4($i),this.boundingBox.union(xc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$i),As.copy(e.boundingSphere).applyMatrix4($i),this.boundingSphere.union(As)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,i=n.length+1,a=e*i+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(bs.geometry=this.geometry,bs.material=this.material,bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),As.copy(this.boundingSphere),As.applyMatrix4(n),e.ray.intersectsSphere(As)!==!1))for(let i=0;i<s;i++){this.getMatrixAt(i,$i),_c.multiplyMatrices(n,$i),bs.matrixWorld=_c,bs.raycast(e,vr);for(let a=0,l=vr.length;a<l;a++){const c=vr[a];c.instanceId=i,c.object=this,t.push(c)}vr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Bo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fu(new Float32Array(s*this.count),s,this.count,Yo,An));const i=this.morphTexture.source.data.data;let a=0;for(let o=0;o<n.length;o++)a+=n[o];const l=this.geometry.morphTargetsRelative?1:1-a,c=s*e;i[c]=l,i.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Pa=new B,sd=new B,rd=new Ze;class Mi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Pa.subVectors(n,t).cross(sd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Pa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/s;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||rd.getNormalMatrix(e),s=this.coplanarPoint(Pa).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new Nn,ad=new it(.5,.5),Mr=new B;class il{constructor(e=new Mi,t=new Mi,n=new Mi,s=new Mi,i=new Mi,a=new Mi){this.planes=[e,t,n,s,i,a]}set(e,t,n,s,i,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(i),l[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=In,n=!1){const s=this.planes,i=e.elements,a=i[0],l=i[1],c=i[2],o=i[3],h=i[4],f=i[5],p=i[6],g=i[7],v=i[8],y=i[9],x=i[10],m=i[11],C=i[12],w=i[13],E=i[14],I=i[15];if(s[0].setComponents(o-a,g-h,m-v,I-C).normalize(),s[1].setComponents(o+a,g+h,m+v,I+C).normalize(),s[2].setComponents(o+l,g+f,m+y,I+w).normalize(),s[3].setComponents(o-l,g-f,m-y,I-w).normalize(),n)s[4].setComponents(c,p,x,E).normalize(),s[5].setComponents(o-c,g-p,m-x,I-E).normalize();else if(s[4].setComponents(o-c,g-p,m-x,I-E).normalize(),t===In)s[5].setComponents(o+c,g+p,m+x,I+E).normalize();else if(t===Hr)s[5].setComponents(c,p,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){gi.center.set(0,0,0);const t=ad.distanceTo(e.center);return gi.radius=.7071067811865476+t,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Mr.x=s.normal.x>0?e.max.x:e.min.x,Mr.y=s.normal.y>0?e.max.y:e.min.y,Mr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sl extends Rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vr=new B,Gr=new B,vc=new Qe,ws=new Xr,yr=new Nn,La=new B,Mc=new B;class rl extends Et{constructor(e=new un,t=new sl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,i=t.count;s<i;s++)Vr.fromBufferAttribute(t,s-1),Gr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Vr.distanceTo(Gr);e.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(s),yr.radius+=i,e.ray.intersectsSphere(yr)===!1)return;vc.copy(s).invert(),ws.copy(e.ray).applyMatrix4(vc);const l=i/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,o=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){const g=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let y=g,x=v-1;y<x;y+=o){const m=h.getX(y),C=h.getX(y+1),w=Sr(this,e,ws,c,m,C,y);w&&t.push(w)}if(this.isLineLoop){const y=h.getX(v-1),x=h.getX(g),m=Sr(this,e,ws,c,y,x,v-1);m&&t.push(m)}}else{const g=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let y=g,x=v-1;y<x;y+=o){const m=Sr(this,e,ws,c,y,y+1,y);m&&t.push(m)}if(this.isLineLoop){const y=Sr(this,e,ws,c,v-1,g,v-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=s.length;i<a;i++){const l=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=i}}}}}function Sr(r,e,t,n,s,i,a){const l=r.geometry.attributes.position;if(Vr.fromBufferAttribute(l,s),Gr.fromBufferAttribute(l,i),t.distanceSqToSegment(Vr,Gr,La,Mc)>n)return;La.applyMatrix4(r.matrixWorld);const o=e.ray.origin.distanceTo(La);if(!(o<e.near||o>e.far))return{distance:o,point:Mc.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const yc=new B,Sc=new B;class Ou extends rl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,i=t.count;s<i;s+=2)yc.fromBufferAttribute(t,s),Sc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+yc.distanceTo(Sc);e.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class od extends rl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class al extends Rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ec=new Qe,ko=new Xr,Er=new Nn,Tr=new B;class Bu extends Et{constructor(e=new un,t=new al){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(s),Er.radius+=i,e.ray.intersectsSphere(Er)===!1)return;Ec.copy(s).invert(),ko.copy(e.ray).applyMatrix4(Ec);const l=i/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,o=n.index,f=n.attributes.position;if(o!==null){const p=Math.max(0,a.start),g=Math.min(o.count,a.start+a.count);for(let v=p,y=g;v<y;v++){const x=o.getX(v);Tr.fromBufferAttribute(f,x),Tc(Tr,x,c,s,e,t,this)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=p,y=g;v<y;v++)Tr.fromBufferAttribute(f,v),Tc(Tr,v,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=s.length;i<a;i++){const l=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=i}}}}}function Tc(r,e,t,n,s,i,a){const l=ko.distanceSqToPoint(r);if(l<t){const c=new B;ko.closestPointToPoint(r,c),c.applyMatrix4(n);const o=s.ray.origin.distanceTo(c);if(o<s.near||o>s.far)return;i.push({distance:o,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ku extends Bt{constructor(e,t,n=Ai,s,i,a,l=Zt,c=Zt,o,h=ks,f=1){if(h!==ks&&h!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:f};super(p,s,i,a,l,c,h,n,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new el(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $r extends un{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const i=e/2,a=t/2,l=Math.floor(n),c=Math.floor(s),o=l+1,h=c+1,f=e/l,p=t/c,g=[],v=[],y=[],x=[];for(let m=0;m<h;m++){const C=m*p-a;for(let w=0;w<o;w++){const E=w*f-i;v.push(E,-C,0),y.push(0,0,1),x.push(w/l),x.push(1-m/c)}}for(let m=0;m<c;m++)for(let C=0;C<l;C++){const w=C+o*m,E=C+o*(m+1),I=C+1+o*(m+1),U=C+1+o*m;g.push(w,E,U),g.push(E,I,U)}this.setIndex(g),this.setAttribute("position",new Qt(v,3)),this.setAttribute("normal",new Qt(y,3)),this.setAttribute("uv",new Qt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $r(e.width,e.height,e.widthSegments,e.heightSegments)}}class ol extends un{constructor(e=1,t=32,n=16,s=0,i=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:i,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+l,Math.PI);let o=0;const h=[],f=new B,p=new B,g=[],v=[],y=[],x=[];for(let m=0;m<=n;m++){const C=[],w=m/n;let E=0;m===0&&a===0?E=.5/t:m===n&&c===Math.PI&&(E=-.5/t);for(let I=0;I<=t;I++){const U=I/t;f.x=-e*Math.cos(s+U*i)*Math.sin(a+w*l),f.y=e*Math.cos(a+w*l),f.z=e*Math.sin(s+U*i)*Math.sin(a+w*l),v.push(f.x,f.y,f.z),p.copy(f).normalize(),y.push(p.x,p.y,p.z),x.push(U+E,1-w),C.push(o++)}h.push(C)}for(let m=0;m<n;m++)for(let C=0;C<t;C++){const w=h[m][C+1],E=h[m][C],I=h[m+1][C],U=h[m+1][C+1];(m!==0||a>0)&&g.push(w,E,U),(m!==n-1||c<Math.PI)&&g.push(E,I,U)}this.setIndex(g),this.setAttribute("position",new Qt(v,3)),this.setAttribute("normal",new Qt(y,3)),this.setAttribute("uv",new Qt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ll extends Rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jo,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fn extends ll{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ld extends Rn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new We(16777215),this.specular=new We(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jo,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cd extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ud extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function br(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function hd(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function fd(r){function e(s,i){return r[s]-r[i]}const t=r.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function bc(r,e,t){const n=r.length,s=new r.constructor(n);for(let i=0,a=0;a!==n;++i){const l=t[i]*e;for(let c=0;c!==e;++c)s[a++]=r[l+c]}return s}function zu(r,e,t,n){let s=1,i=r[0];for(;i!==void 0&&i[n]===void 0;)i=r[s++];if(i===void 0)return;let a=i[n];if(a!==void 0)if(Array.isArray(a))do a=i[n],a!==void 0&&(e.push(i.time),t.push(...a)),i=r[s++];while(i!==void 0);else if(a.toArray!==void 0)do a=i[n],a!==void 0&&(e.push(i.time),a.toArray(t,t.length)),i=r[s++];while(i!==void 0);else do a=i[n],a!==void 0&&(e.push(i.time),t.push(a)),i=r[s++];while(i!==void 0)}class $s{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],i=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<i)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(i=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=i)){const l=t[1];e<l&&(n=2,i=l);for(let c=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=i,i=t[--n-1],e>=i)break e}a=n,n=0;break t}break n}for(;n<a;){const l=n+a>>>1;e<t[l]?a=l:n=l+1}if(s=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,s)}return this.interpolate_(n,i,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,i=e*s;for(let a=0;a!==s;++a)t[a]=n[i+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class dd extends $s{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vl,endingEnd:Vl}}intervalChanged_(e,t,n){const s=this.parameterPositions;let i=e-2,a=e+1,l=s[i],c=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case Gl:i=e,l=2*t-n;break;case Wl:i=s.length-2,l=t+s[i]-s[i+1];break;default:i=e,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Gl:a=e,c=2*n-t;break;case Wl:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}const o=(n-t)*.5,h=this.valueSize;this._weightPrev=o/(t-l),this._weightNext=o/(c-n),this._offsetPrev=i*h,this._offsetNext=a*h}interpolate_(e,t,n,s){const i=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,h=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,g=this._weightNext,v=(n-t)/(s-t),y=v*v,x=y*v,m=-p*x+2*p*y-p*v,C=(1+p)*x+(-1.5-2*p)*y+(-.5+p)*v+1,w=(-1-g)*x+(1.5+g)*y+.5*v,E=g*x-g*y;for(let I=0;I!==l;++I)i[I]=m*a[h+I]+C*a[o+I]+w*a[c+I]+E*a[f+I];return i}}class pd extends $s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const i=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,h=(n-t)/(s-t),f=1-h;for(let p=0;p!==l;++p)i[p]=a[o+p]*f+a[c+p]*h;return i}}class md extends $s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Cn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=br(t,this.TimeBufferType),this.values=br(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:br(e.times,Array),values:br(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new md(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Hs:t=this.InterpolantFactoryMethodDiscrete;break;case Vs:t=this.InterpolantFactoryMethodLinear;break;case aa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hs;case this.InterpolantFactoryMethodLinear:return Vs;case this.InterpolantFactoryMethodSmooth:return aa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let i=0,a=s-1;for(;i!==s&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==s){i>=a&&(a=Math.max(a,1),i=a-1);const l=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*l,a*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,i=n.length;i===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==i;l++){const c=n[l];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,c,a),e=!1;break}a=c}if(s!==void 0&&hd(s))for(let l=0,c=s.length;l!==c;++l){const o=s[l];if(isNaN(o)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,o),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===aa,i=e.length-1;let a=1;for(let l=1;l<i;++l){let c=!1;const o=e[l],h=e[l+1];if(o!==h&&(l!==1||o!==e[0]))if(s)c=!0;else{const f=l*n,p=f-n,g=f+n;for(let v=0;v!==n;++v){const y=t[f+v];if(y!==t[p+v]||y!==t[g+v]){c=!0;break}}}if(c){if(l!==a){e[a]=e[l];const f=l*n,p=a*n;for(let g=0;g!==n;++g)t[p+g]=t[f+g]}++a}}if(i>0){e[a]=e[i];for(let l=i*n,c=a*n,o=0;o!==n;++o)t[c+o]=t[l+o];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Vs;class fs extends Cn{constructor(e,t,n){super(e,t,n)}}fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Hs;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;class Hu extends Cn{constructor(e,t,n,s){super(e,t,n,s)}}Hu.prototype.ValueTypeName="color";class ls extends Cn{constructor(e,t,n,s){super(e,t,n,s)}}ls.prototype.ValueTypeName="number";class gd extends $s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const i=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(n-t)/(s-t);let o=e*l;for(let h=o+l;o!==h;o+=4)hi.slerpFlat(i,0,a,o-l,a,o,c);return i}}class cs extends Cn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new gd(this.times,this.values,this.getValueSize(),e)}}cs.prototype.ValueTypeName="quaternion";cs.prototype.InterpolantFactoryMethodSmooth=void 0;class ds extends Cn{constructor(e,t,n){super(e,t,n)}}ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Hs;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;class us extends Cn{constructor(e,t,n,s){super(e,t,n,s)}}us.prototype.ValueTypeName="vector";class _d{constructor(e="",t=-1,n=[],s=jh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=wn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,l=n.length;a!==l;++a)t.push(vd(n[a]).scale(s));const i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let i=0,a=n.length;i!==a;++i)t.push(Cn.toJSON(n[i]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const i=t.length,a=[];for(let l=0;l<i;l++){let c=[],o=[];c.push((l+i-1)%i,l,(l+1)%i),o.push(0,1,0);const h=fd(c);c=bc(c,1,h),o=bc(o,1,h),!s&&c[0]===0&&(c.push(i),o.push(o[0])),a.push(new ls(".morphTargetInfluences["+t[l].name+"]",c,o).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},i=/^([\w-]*?)([\d]+)$/;for(let l=0,c=e.length;l<c;l++){const o=e[l],h=o.name.match(i);if(h&&h.length>1){const f=h[1];let p=s[f];p||(s[f]=p=[]),p.push(o)}}const a=[];for(const l in s)a.push(this.CreateFromMorphTargetSequence(l,s[l],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,p,g,v,y){if(g.length!==0){const x=[],m=[];zu(g,x,m,v),x.length!==0&&y.push(new f(p,x,m))}},s=[],i=e.name||"default",a=e.fps||30,l=e.blendMode;let c=e.length||-1;const o=e.hierarchy||[];for(let f=0;f<o.length;f++){const p=o[f].keys;if(!(!p||p.length===0))if(p[0].morphTargets){const g={};let v;for(v=0;v<p.length;v++)if(p[v].morphTargets)for(let y=0;y<p[v].morphTargets.length;y++)g[p[v].morphTargets[y]]=-1;for(const y in g){const x=[],m=[];for(let C=0;C!==p[v].morphTargets.length;++C){const w=p[v];x.push(w.time),m.push(w.morphTarget===y?1:0)}s.push(new ls(".morphTargetInfluence["+y+"]",x,m))}c=g.length*a}else{const g=".bones["+t[f].name+"]";n(us,g+".position",p,"pos",s),n(cs,g+".quaternion",p,"rot",s),n(us,g+".scale",p,"scl",s)}}return s.length===0?null:new this(i,c,s,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const i=this.tracks[n];t=Math.max(t,i.times[i.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function xd(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ls;case"vector":case"vector2":case"vector3":case"vector4":return us;case"color":return Hu;case"quaternion":return cs;case"bool":case"boolean":return fs;case"string":return ds}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function vd(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=xd(r.type);if(r.times===void 0){const t=[],n=[];zu(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Yn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Md{constructor(e,t,n){const s=this;let i=!1,a=0,l=0,c;const o=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){l++,i===!1&&s.onStart!==void 0&&s.onStart(h,a,l),i=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,l),a===l&&(i=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return o.push(h,f),this},this.removeHandler=function(h){const f=o.indexOf(h);return f!==-1&&o.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=o.length;f<p;f+=2){const g=o[f],v=o[f+1];if(g.global&&(g.lastIndex=0),g.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const yd=new Md;class ps{constructor(e){this.manager=e!==void 0?e:yd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,i){n.load(e,s,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ps.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wn={};class Sd extends Error{constructor(e,t){super(e),this.response=t}}class Vu extends ps{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=Yn.get(`file:${e}`);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(Wn[e]!==void 0){Wn[e].push({onLoad:t,onProgress:n,onError:s});return}Wn[e]=[],Wn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),l=this.mimeType,c=this.responseType;fetch(a).then(o=>{if(o.status===200||o.status===0){if(o.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||o.body===void 0||o.body.getReader===void 0)return o;const h=Wn[e],f=o.body.getReader(),p=o.headers.get("X-File-Size")||o.headers.get("Content-Length"),g=p?parseInt(p):0,v=g!==0;let y=0;const x=new ReadableStream({start(m){C();function C(){f.read().then(({done:w,value:E})=>{if(w)m.close();else{y+=E.byteLength;const I=new ProgressEvent("progress",{lengthComputable:v,loaded:y,total:g});for(let U=0,N=h.length;U<N;U++){const k=h[U];k.onProgress&&k.onProgress(I)}m.enqueue(E),C()}},w=>{m.error(w)})}}});return new Response(x)}else throw new Sd(`fetch for "${o.url}" responded with ${o.status}: ${o.statusText}`,o)}).then(o=>{switch(c){case"arraybuffer":return o.arrayBuffer();case"blob":return o.blob();case"document":return o.text().then(h=>new DOMParser().parseFromString(h,l));case"json":return o.json();default:if(l==="")return o.text();{const f=/charset="?([^;"\s]*)"?/i.exec(l),p=f&&f[1]?f[1].toLowerCase():void 0,g=new TextDecoder(p);return o.arrayBuffer().then(v=>g.decode(v))}}}).then(o=>{Yn.add(`file:${e}`,o);const h=Wn[e];delete Wn[e];for(let f=0,p=h.length;f<p;f++){const g=h[f];g.onLoad&&g.onLoad(o)}}).catch(o=>{const h=Wn[e];if(h===void 0)throw this.manager.itemError(e),o;delete Wn[e];for(let f=0,p=h.length;f<p;f++){const g=h[f];g.onError&&g.onError(o)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const qi=new WeakMap;class Ed extends ps{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,a=Yn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let f=qi.get(a);f===void 0&&(f=[],qi.set(a,f)),f.push({onLoad:t,onError:s})}return a}const l=Gs("img");function c(){h(),t&&t(this);const f=qi.get(this)||[];for(let p=0;p<f.length;p++){const g=f[p];g.onLoad&&g.onLoad(this)}qi.delete(this),i.manager.itemEnd(e)}function o(f){h(),s&&s(f),Yn.remove(`image:${e}`);const p=qi.get(this)||[];for(let g=0;g<p.length;g++){const v=p[g];v.onError&&v.onError(f)}qi.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function h(){l.removeEventListener("load",c,!1),l.removeEventListener("error",o,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",o,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),Yn.add(`image:${e}`,l),i.manager.itemStart(e),l.src=e,l}}class cl extends ps{constructor(e){super(e)}load(e,t,n,s){const i=new Bt,a=new Ed(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){i.image=l,i.needsUpdate=!0,t!==void 0&&t(i)},n,s),i}}class ul extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ia=new Qe,Ac=new B,wc=new B;class hl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new il,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ac.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ac),wc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wc),t.updateMatrixWorld(),Ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ia,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Td extends hl{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=as*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||s!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=s,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class bd extends ul{constructor(e,t,n=0,s=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=s,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new Td}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Rc=new Qe,Rs=new B,Da=new B;class Ad extends hl{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),Rs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Rs),Da.copy(n.position),Da.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Da),n.updateMatrixWorld(),s.makeTranslation(-Rs.x,-Rs.y,-Rs.z),Rc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rc,n.coordinateSystem,n.reversedDepth)}}class Gu extends ul{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ad}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class fl extends Du{constructor(e=-1,t=1,n=1,s=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let i=n-e,a=n+e,l=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const o=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=o*this.view.offsetX,a=i+o*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(i,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wd extends hl{constructor(){super(new fl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rd extends ul{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new wd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Fs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ua=new WeakMap;class Cd extends ps{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,a=Yn.get(`image-bitmap:${e}`);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(o=>{if(Ua.has(a)===!0)s&&s(Ua.get(a)),i.manager.itemError(e),i.manager.itemEnd(e);else return t&&t(o),i.manager.itemEnd(e),o});return}return setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader,l.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,l).then(function(o){return o.blob()}).then(function(o){return createImageBitmap(o,Object.assign(i.options,{colorSpaceConversion:"none"}))}).then(function(o){return Yn.add(`image-bitmap:${e}`,o),t&&t(o),i.manager.itemEnd(e),o}).catch(function(o){s&&s(o),Ua.set(c,o),Yn.remove(`image-bitmap:${e}`),i.manager.itemError(e),i.manager.itemEnd(e)});Yn.add(`image-bitmap:${e}`,c),i.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Pd extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const dl="\\[\\]\\.:\\/",Ld=new RegExp("["+dl+"]","g"),pl="[^"+dl+"]",Id="[^"+dl.replace("\\.","")+"]",Dd=/((?:WC+[\/:])*)/.source.replace("WC",pl),Ud=/(WCOD+)?/.source.replace("WCOD",Id),Nd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pl),Fd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pl),Od=new RegExp("^"+Dd+Ud+Nd+Fd+"$"),Bd=["material","materials","bones","map"];class kd{constructor(e,t,n){const s=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,i=n.length;s!==i;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Mt{constructor(e,t,n){this.path=t,this.parsedPath=n||Mt.parseTrackName(t),this.node=Mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Mt.Composite(e,t,n):new Mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ld,"")}static parseTrackName(e){const t=Od.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const i=n.nodeName.substring(s+1);Bd.indexOf(i)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=i)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(i){for(let a=0;a<i.length;a++){const l=i[a];if(l.name===t||l.uuid===t)return l;const c=n(l.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,i=n.length;s!==i;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,i=n.length;s!==i;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,i=n.length;s!==i;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,i=n.length;s!==i;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let i=t.propertyIndex;if(e||(e=Mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let o=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===o){o=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(o!==void 0){if(e[o]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[o]}}const a=e[s];if(a===void 0){const o=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+o+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(i!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[i]!==void 0&&(i=e.morphTargetDictionary[i])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=i}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Mt.Composite=kd;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Na extends Ou{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new un;s.setAttribute("position",new Qt(t,3)),s.setAttribute("color",new Qt(n,3));const i=new sl({vertexColors:!0,toneMapped:!1});super(s,i),this.type="AxesHelper"}setColors(e,t,n){const s=new We,i=this.geometry.attributes.color.array;return s.set(e),s.toArray(i,0),s.toArray(i,3),s.set(t),s.toArray(i,6),s.toArray(i,9),s.set(n),s.toArray(i,12),s.toArray(i,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function Cc(r,e,t,n){const s=zd(n);switch(t){case Mu:return r*e;case Yo:return r*e/s.components*s.byteLength;case Ko:return r*e/s.components*s.byteLength;case Su:return r*e*2/s.components*s.byteLength;case jo:return r*e*2/s.components*s.byteLength;case yu:return r*e*3/s.components*s.byteLength;case _n:return r*e*4/s.components*s.byteLength;case Zo:return r*e*4/s.components*s.byteLength;case Lr:case Ir:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Dr:case Ur:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case uo:case fo:return Math.max(r,16)*Math.max(e,8)/4;case co:case ho:return Math.max(r,8)*Math.max(e,8)/2;case po:case mo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case go:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case _o:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case vo:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case yo:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case So:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case To:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case bo:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case wo:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ro:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Co:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Po:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Nr:case Lo:case Io:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Eu:case Do:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Uo:case No:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zd(r){switch(r){case Dn:case _u:return{byteLength:1,components:1};case Os:case xu:case Ws:return{byteLength:2,components:1};case $o:case qo:return{byteLength:2,components:4};case Ai:case Xo:case An:return{byteLength:4,components:1};case vu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Go);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wu(){let r=null,e=!1,t=null,n=null;function s(i,a){t(i,a),n=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){r=i}}}function Hd(r){const e=new WeakMap;function t(l,c){const o=l.array,h=l.usage,f=o.byteLength,p=r.createBuffer();r.bindBuffer(c,p),r.bufferData(c,o,h),l.onUploadCallback();let g;if(o instanceof Float32Array)g=r.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)g=r.HALF_FLOAT;else if(o instanceof Uint16Array)l.isFloat16BufferAttribute?g=r.HALF_FLOAT:g=r.UNSIGNED_SHORT;else if(o instanceof Int16Array)g=r.SHORT;else if(o instanceof Uint32Array)g=r.UNSIGNED_INT;else if(o instanceof Int32Array)g=r.INT;else if(o instanceof Int8Array)g=r.BYTE;else if(o instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:p,type:g,bytesPerElement:o.BYTES_PER_ELEMENT,version:l.version,size:f}}function n(l,c,o){const h=c.array,f=c.updateRanges;if(r.bindBuffer(o,l),f.length===0)r.bufferSubData(o,0,h);else{f.sort((g,v)=>g.start-v.start);let p=0;for(let g=1;g<f.length;g++){const v=f[p],y=f[g];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++p,f[p]=y)}f.length=p+1;for(let g=0,v=f.length;g<v;g++){const y=f[g];r.bufferSubData(o,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function i(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(r.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const o=e.get(l);if(o===void 0)e.set(l,t(l,c));else if(o.version<l.version){if(o.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(o.buffer,l,c),o.version=l.version}}return{get:s,remove:i,update:a}}var Vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$d=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ep=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,np=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",vp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Up=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Np=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$p=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,im=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,am=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,um=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Am=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Um=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ym=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Km=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ag=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ug=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_g=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:Vd,alphahash_pars_fragment:Gd,alphamap_fragment:Wd,alphamap_pars_fragment:Xd,alphatest_fragment:$d,alphatest_pars_fragment:qd,aomap_fragment:Yd,aomap_pars_fragment:Kd,batching_pars_vertex:jd,batching_vertex:Zd,begin_vertex:Jd,beginnormal_vertex:Qd,bsdfs:ep,iridescence_fragment:tp,bumpmap_pars_fragment:np,clipping_planes_fragment:ip,clipping_planes_pars_fragment:sp,clipping_planes_pars_vertex:rp,clipping_planes_vertex:ap,color_fragment:op,color_pars_fragment:lp,color_pars_vertex:cp,color_vertex:up,common:hp,cube_uv_reflection_fragment:fp,defaultnormal_vertex:dp,displacementmap_pars_vertex:pp,displacementmap_vertex:mp,emissivemap_fragment:gp,emissivemap_pars_fragment:_p,colorspace_fragment:xp,colorspace_pars_fragment:vp,envmap_fragment:Mp,envmap_common_pars_fragment:yp,envmap_pars_fragment:Sp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Up,envmap_vertex:Tp,fog_vertex:bp,fog_pars_vertex:Ap,fog_fragment:wp,fog_pars_fragment:Rp,gradientmap_pars_fragment:Cp,lightmap_pars_fragment:Pp,lights_lambert_fragment:Lp,lights_lambert_pars_fragment:Ip,lights_pars_begin:Dp,lights_toon_fragment:Np,lights_toon_pars_fragment:Fp,lights_phong_fragment:Op,lights_phong_pars_fragment:Bp,lights_physical_fragment:kp,lights_physical_pars_fragment:zp,lights_fragment_begin:Hp,lights_fragment_maps:Vp,lights_fragment_end:Gp,logdepthbuf_fragment:Wp,logdepthbuf_pars_fragment:Xp,logdepthbuf_pars_vertex:$p,logdepthbuf_vertex:qp,map_fragment:Yp,map_pars_fragment:Kp,map_particle_fragment:jp,map_particle_pars_fragment:Zp,metalnessmap_fragment:Jp,metalnessmap_pars_fragment:Qp,morphinstance_vertex:em,morphcolor_vertex:tm,morphnormal_vertex:nm,morphtarget_pars_vertex:im,morphtarget_vertex:sm,normal_fragment_begin:rm,normal_fragment_maps:am,normal_pars_fragment:om,normal_pars_vertex:lm,normal_vertex:cm,normalmap_pars_fragment:um,clearcoat_normal_fragment_begin:hm,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:dm,iridescence_pars_fragment:pm,opaque_fragment:mm,packing:gm,premultiplied_alpha_fragment:_m,project_vertex:xm,dithering_fragment:vm,dithering_pars_fragment:Mm,roughnessmap_fragment:ym,roughnessmap_pars_fragment:Sm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:Tm,shadowmap_vertex:bm,shadowmask_pars_fragment:Am,skinbase_vertex:wm,skinning_pars_vertex:Rm,skinning_vertex:Cm,skinnormal_vertex:Pm,specularmap_fragment:Lm,specularmap_pars_fragment:Im,tonemapping_fragment:Dm,tonemapping_pars_fragment:Um,transmission_fragment:Nm,transmission_pars_fragment:Fm,uv_pars_fragment:Om,uv_pars_vertex:Bm,uv_vertex:km,worldpos_vertex:zm,background_vert:Hm,background_frag:Vm,backgroundCube_vert:Gm,backgroundCube_frag:Wm,cube_vert:Xm,cube_frag:$m,depth_vert:qm,depth_frag:Ym,distanceRGBA_vert:Km,distanceRGBA_frag:jm,equirect_vert:Zm,equirect_frag:Jm,linedashed_vert:Qm,linedashed_frag:eg,meshbasic_vert:tg,meshbasic_frag:ng,meshlambert_vert:ig,meshlambert_frag:sg,meshmatcap_vert:rg,meshmatcap_frag:ag,meshnormal_vert:og,meshnormal_frag:lg,meshphong_vert:cg,meshphong_frag:ug,meshphysical_vert:hg,meshphysical_frag:fg,meshtoon_vert:dg,meshtoon_frag:pg,points_vert:mg,points_frag:gg,shadow_vert:_g,shadow_frag:xg,sprite_vert:vg,sprite_frag:Mg},Me={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Pn={basic:{uniforms:jt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:jt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new We(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:jt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:jt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:jt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new We(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:jt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:jt([Me.points,Me.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:jt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:jt([Me.common,Me.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:jt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:jt([Me.sprite,Me.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:jt([Me.common,Me.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:jt([Me.lights,Me.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Pn.physical={uniforms:jt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Ar={r:0,b:0,g:0},_i=new xn,yg=new Qe;function Sg(r,e,t,n,s,i,a){const l=new We(0);let c=i===!0?0:1,o,h,f=null,p=0,g=null;function v(w){let E=w.isScene===!0?w.background:null;return E&&E.isTexture&&(E=(w.backgroundBlurriness>0?t:e).get(E)),E}function y(w){let E=!1;const I=v(w);I===null?m(l,c):I&&I.isColor&&(m(I,1),E=!0);const U=r.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(w,E){const I=v(E);I&&(I.isCubeTexture||I.mapping===Wr)?(h===void 0&&(h=new nn(new Xs(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:os(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,N,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_i.copy(E.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yg.makeRotationFromEuler(_i)),h.material.toneMapped=ot.getTransfer(I.colorSpace)!==St,(f!==I||p!==I.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,f=I,p=I.version,g=r.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(o===void 0&&(o=new nn(new $r(2,2),new ui({name:"BackgroundMaterial",uniforms:os(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(o)),o.material.uniforms.t2D.value=I,o.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,o.material.toneMapped=ot.getTransfer(I.colorSpace)!==St,I.matrixAutoUpdate===!0&&I.updateMatrix(),o.material.uniforms.uvTransform.value.copy(I.matrix),(f!==I||p!==I.version||g!==r.toneMapping)&&(o.material.needsUpdate=!0,f=I,p=I.version,g=r.toneMapping),o.layers.enableAll(),w.unshift(o,o.geometry,o.material,0,0,null))}function m(w,E){w.getRGB(Ar,Iu(r)),n.buffers.color.setClear(Ar.r,Ar.g,Ar.b,E,a)}function C(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return l},setClearColor:function(w,E=1){l.set(w),c=E,m(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,m(l,c)},render:y,addToRenderList:x,dispose:C}}function Eg(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},s=p(null);let i=s,a=!1;function l(A,L,Z,q,X){let ne=!1;const K=f(q,Z,L);i!==K&&(i=K,o(i.object)),ne=g(A,q,Z,X),ne&&v(A,q,Z,X),X!==null&&e.update(X,r.ELEMENT_ARRAY_BUFFER),(ne||a)&&(a=!1,E(A,L,Z,q),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return r.createVertexArray()}function o(A){return r.bindVertexArray(A)}function h(A){return r.deleteVertexArray(A)}function f(A,L,Z){const q=Z.wireframe===!0;let X=n[A.id];X===void 0&&(X={},n[A.id]=X);let ne=X[L.id];ne===void 0&&(ne={},X[L.id]=ne);let K=ne[q];return K===void 0&&(K=p(c()),ne[q]=K),K}function p(A){const L=[],Z=[],q=[];for(let X=0;X<t;X++)L[X]=0,Z[X]=0,q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:Z,attributeDivisors:q,object:A,attributes:{},index:null}}function g(A,L,Z,q){const X=i.attributes,ne=L.attributes;let K=0;const oe=Z.getAttributes();for(const Y in oe)if(oe[Y].location>=0){const ge=X[Y];let Ie=ne[Y];if(Ie===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(Ie=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(Ie=A.instanceColor)),ge===void 0||ge.attribute!==Ie||Ie&&ge.data!==Ie.data)return!0;K++}return i.attributesNum!==K||i.index!==q}function v(A,L,Z,q){const X={},ne=L.attributes;let K=0;const oe=Z.getAttributes();for(const Y in oe)if(oe[Y].location>=0){let ge=ne[Y];ge===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(ge=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(ge=A.instanceColor));const Ie={};Ie.attribute=ge,ge&&ge.data&&(Ie.data=ge.data),X[Y]=Ie,K++}i.attributes=X,i.attributesNum=K,i.index=q}function y(){const A=i.newAttributes;for(let L=0,Z=A.length;L<Z;L++)A[L]=0}function x(A){m(A,0)}function m(A,L){const Z=i.newAttributes,q=i.enabledAttributes,X=i.attributeDivisors;Z[A]=1,q[A]===0&&(r.enableVertexAttribArray(A),q[A]=1),X[A]!==L&&(r.vertexAttribDivisor(A,L),X[A]=L)}function C(){const A=i.newAttributes,L=i.enabledAttributes;for(let Z=0,q=L.length;Z<q;Z++)L[Z]!==A[Z]&&(r.disableVertexAttribArray(Z),L[Z]=0)}function w(A,L,Z,q,X,ne,K){K===!0?r.vertexAttribIPointer(A,L,Z,X,ne):r.vertexAttribPointer(A,L,Z,q,X,ne)}function E(A,L,Z,q){y();const X=q.attributes,ne=Z.getAttributes(),K=L.defaultAttributeValues;for(const oe in ne){const Y=ne[oe];if(Y.location>=0){let me=X[oe];if(me===void 0&&(oe==="instanceMatrix"&&A.instanceMatrix&&(me=A.instanceMatrix),oe==="instanceColor"&&A.instanceColor&&(me=A.instanceColor)),me!==void 0){const ge=me.normalized,Ie=me.itemSize,qe=e.get(me);if(qe===void 0)continue;const ut=qe.buffer,ht=qe.type,ee=qe.bytesPerElement,_e=ht===r.INT||ht===r.UNSIGNED_INT||me.gpuType===Xo;if(me.isInterleavedBufferAttribute){const de=me.data,ke=de.stride,ze=me.offset;if(de.isInstancedInterleavedBuffer){for(let Ye=0;Ye<Y.locationSize;Ye++)m(Y.location+Ye,de.meshPerAttribute);A.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ye=0;Ye<Y.locationSize;Ye++)x(Y.location+Ye);r.bindBuffer(r.ARRAY_BUFFER,ut);for(let Ye=0;Ye<Y.locationSize;Ye++)w(Y.location+Ye,Ie/Y.locationSize,ht,ge,ke*ee,(ze+Ie/Y.locationSize*Ye)*ee,_e)}else{if(me.isInstancedBufferAttribute){for(let de=0;de<Y.locationSize;de++)m(Y.location+de,me.meshPerAttribute);A.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let de=0;de<Y.locationSize;de++)x(Y.location+de);r.bindBuffer(r.ARRAY_BUFFER,ut);for(let de=0;de<Y.locationSize;de++)w(Y.location+de,Ie/Y.locationSize,ht,ge,Ie*ee,Ie/Y.locationSize*de*ee,_e)}}else if(K!==void 0){const ge=K[oe];if(ge!==void 0)switch(ge.length){case 2:r.vertexAttrib2fv(Y.location,ge);break;case 3:r.vertexAttrib3fv(Y.location,ge);break;case 4:r.vertexAttrib4fv(Y.location,ge);break;default:r.vertexAttrib1fv(Y.location,ge)}}}}C()}function I(){k();for(const A in n){const L=n[A];for(const Z in L){const q=L[Z];for(const X in q)h(q[X].object),delete q[X];delete L[Z]}delete n[A]}}function U(A){if(n[A.id]===void 0)return;const L=n[A.id];for(const Z in L){const q=L[Z];for(const X in q)h(q[X].object),delete q[X];delete L[Z]}delete n[A.id]}function N(A){for(const L in n){const Z=n[L];if(Z[A.id]===void 0)continue;const q=Z[A.id];for(const X in q)h(q[X].object),delete q[X];delete Z[A.id]}}function k(){b(),a=!0,i!==s&&(i=s,o(i.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:k,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:U,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:x,disableUnusedAttributes:C}}function Tg(r,e,t){let n;function s(o){n=o}function i(o,h){r.drawArrays(n,o,h),t.update(h,n,1)}function a(o,h,f){f!==0&&(r.drawArraysInstanced(n,o,h,f),t.update(h,n,f))}function l(o,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,o,0,h,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v];t.update(g,n,1)}function c(o,h,f,p){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<o.length;v++)a(o[v],h[v],p[v]);else{g.multiDrawArraysInstancedWEBGL(n,o,0,h,0,p,0,f);let v=0;for(let y=0;y<f;y++)v+=h[y]*p[y];t.update(v,n,1)}}this.setMode=s,this.render=i,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function bg(r,e,t,n){let s;function i(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(N){return!(N!==_n&&n.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(N){const k=N===Ws&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Dn&&n.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==An&&!k)}function c(N){if(N==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const h=c(o);h!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",h,"instead."),o=h);const f=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),E=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=v>0,U=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:o,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:g,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:C,maxVaryings:w,maxFragmentUniforms:E,vertexTextures:I,maxSamples:U}}function Ag(r){const e=this;let t=null,n=0,s=!1,i=!1;const a=new Mi,l=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||n!==0||s;return s=p,n=f.length,g},this.beginShadows=function(){i=!0,h(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(f,p){t=h(f,p,0)},this.setState=function(f,p,g){const v=f.clippingPlanes,y=f.clipIntersection,x=f.clipShadows,m=r.get(f);if(!s||v===null||v.length===0||i&&!x)i?h(null):o();else{const C=i?0:n,w=C*4;let E=m.clippingState||null;c.value=E,E=h(v,p,w,g);for(let I=0;I!==w;++I)E[I]=t[I];m.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=C}};function o(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,p,g,v){const y=f!==null?f.length:0;let x=null;if(y!==0){if(x=c.value,v!==!0||x===null){const m=g+y*4,C=p.matrixWorldInverse;l.getNormalMatrix(C),(x===null||x.length<m)&&(x=new Float32Array(m));for(let w=0,E=g;w!==y;++w,E+=4)a.copy(f[w]).applyMatrix4(C,l),a.normal.toArray(x,E),x[E+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}}function wg(r){let e=new WeakMap;function t(a,l){return l===oo?a.mapping=is:l===lo&&(a.mapping=ss),a}function n(a){if(a&&a.isTexture){const l=a.mapping;if(l===oo||l===lo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const o=new Kf(c.height);return o.fromEquirectangularTexture(r,a),e.set(a,o),a.addEventListener("dispose",s),t(o.texture,a.mapping)}else return null}}return a}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function i(){e=new WeakMap}return{get:n,dispose:i}}const ji=4,Pc=[.125,.215,.35,.446,.526,.582],Ei=20,Fa=new fl,Lc=new We;let Oa=null,Ba=0,ka=0,za=!1;const yi=(1+Math.sqrt(5))/2,Yi=1/yi,Ic=[new B(-yi,Yi,0),new B(yi,Yi,0),new B(-Yi,0,yi),new B(Yi,0,yi),new B(0,yi,-Yi),new B(0,yi,Yi),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],Rg=new B;class Dc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,i={}){const{size:a=256,position:l=Rg}=i;Oa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oa,Ba,ka),this._renderer.xr.enabled=za,e.scissorTest=!1,wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===is||e.mapping===ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Ws,format:_n,colorSpace:en,depthBuffer:!1},s=Uc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uc(e,t,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cg(i)),this._blurMaterial=Pg(i,e,t)}return s}_compileMaterial(e){const t=new nn(this._lodPlanes[0],e);this._renderer.compile(t,Fa)}_sceneToCubeUV(e,t,n,s,i){const c=new $t(90,1,t,n),o=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,g=f.toneMapping;f.getClearColor(Lc),f.toneMapping=ci,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const y=new Ti({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),x=new nn(new Xs,y);let m=!1;const C=e.background;C?C.isColor&&(y.color.copy(C),e.background=null,m=!0):(y.color.copy(Lc),m=!0);for(let w=0;w<6;w++){const E=w%3;E===0?(c.up.set(0,o[w],0),c.position.set(i.x,i.y,i.z),c.lookAt(i.x+h[w],i.y,i.z)):E===1?(c.up.set(0,0,o[w]),c.position.set(i.x,i.y,i.z),c.lookAt(i.x,i.y+h[w],i.z)):(c.up.set(0,o[w],0),c.position.set(i.x,i.y,i.z),c.lookAt(i.x,i.y,i.z+h[w]));const I=this._cubeSize;wr(s,E*I,w>2?I:0,I,I),f.setRenderTarget(s),m&&f.render(x,c),f.render(e,c)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=g,f.autoClear=p,e.background=C}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===is||e.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nc());const i=s?this._cubemapMaterial:this._equirectMaterial,a=new nn(this._lodPlanes[0],i),l=i.uniforms;l.envMap.value=e;const c=this._cubeSize;wr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Fa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let i=1;i<s;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),l=Ic[(s-i-1)%Ic.length];this._blur(e,i-1,i,a,l)}t.autoClear=n}_blur(e,t,n,s,i){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",i),this._halfBlur(a,e,n,n,s,"longitudinal",i)}_halfBlur(e,t,n,s,i,a,l){const c=this._renderer,o=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new nn(this._lodPlanes[s],o),p=o.uniforms,g=this._sizeLods[n]-1,v=isFinite(i)?Math.PI/(2*g):2*Math.PI/(2*Ei-1),y=i/v,x=isFinite(i)?1+Math.floor(h*y):Ei;x>Ei&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ei}`);const m=[];let C=0;for(let N=0;N<Ei;++N){const k=N/y,b=Math.exp(-k*k/2);m.push(b),N===0?C+=b:N<x&&(C+=2*b)}for(let N=0;N<m.length;N++)m[N]=m[N]/C;p.envMap.value=e.texture,p.samples.value=x,p.weights.value=m,p.latitudinal.value=a==="latitudinal",l&&(p.poleAxis.value=l);const{_lodMax:w}=this;p.dTheta.value=v,p.mipInt.value=w-n;const E=this._sizeLods[s],I=3*E*(s>w-ji?s-w+ji:0),U=4*(this._cubeSize-E);wr(t,I,U,3*E,2*E),c.setRenderTarget(t),c.render(f,Fa)}}function Cg(r){const e=[],t=[],n=[];let s=r;const i=r-ji+1+Pc.length;for(let a=0;a<i;a++){const l=Math.pow(2,s);t.push(l);let c=1/l;a>r-ji?c=Pc[a-r+ji-1]:a===0&&(c=0),n.push(c);const o=1/(l-2),h=-o,f=1+o,p=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,v=6,y=3,x=2,m=1,C=new Float32Array(y*v*g),w=new Float32Array(x*v*g),E=new Float32Array(m*v*g);for(let U=0;U<g;U++){const N=U%3*2/3-1,k=U>2?0:-1,b=[N,k,0,N+2/3,k,0,N+2/3,k+1,0,N,k,0,N+2/3,k+1,0,N,k+1,0];C.set(b,y*v*U),w.set(p,x*v*U);const A=[U,U,U,U,U,U];E.set(A,m*v*U)}const I=new un;I.setAttribute("position",new Jt(C,y)),I.setAttribute("uv",new Jt(w,x)),I.setAttribute("faceIndex",new Jt(E,m)),e.push(I),s>ji&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Uc(r,e,t){const n=new wi(r,e,t);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wr(r,e,t,n,s){r.viewport.set(e,t,n,s),r.scissor.set(e,t,n,s)}function Pg(r,e,t){const n=new Float32Array(Ei),s=new B(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Nc(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Fc(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function ml(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lg(r){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const c=l.mapping,o=c===oo||c===lo,h=c===is||c===ss;if(o||h){let f=e.get(l);const p=f!==void 0?f.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==p)return t===null&&(t=new Dc(r)),f=o?t.fromEquirectangular(l,f):t.fromCubemap(l,f),f.texture.pmremVersion=l.pmremVersion,e.set(l,f),f.texture;if(f!==void 0)return f.texture;{const g=l.image;return o&&g&&g.height>0||h&&g&&s(g)?(t===null&&(t=new Dc(r)),f=o?t.fromEquirectangular(l):t.fromCubemap(l),f.texture.pmremVersion=l.pmremVersion,e.set(l,f),l.addEventListener("dispose",i),f.texture):null}}}return l}function s(l){let c=0;const o=6;for(let h=0;h<o;h++)l[h]!==void 0&&c++;return c===o}function i(l){const c=l.target;c.removeEventListener("dispose",i);const o=e.get(c);o!==void 0&&(e.delete(c),o.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ig(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ji("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Dg(r,e,t,n){const s={},i=new WeakMap;function a(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);p.removeEventListener("dispose",a),delete s[p.id];const g=i.get(p);g&&(e.remove(g),i.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(f,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function c(f){const p=f.attributes;for(const g in p)e.update(p[g],r.ARRAY_BUFFER)}function o(f){const p=[],g=f.index,v=f.attributes.position;let y=0;if(g!==null){const C=g.array;y=g.version;for(let w=0,E=C.length;w<E;w+=3){const I=C[w+0],U=C[w+1],N=C[w+2];p.push(I,U,U,N,N,I)}}else if(v!==void 0){const C=v.array;y=v.version;for(let w=0,E=C.length/3-1;w<E;w+=3){const I=w+0,U=w+1,N=w+2;p.push(I,U,U,N,N,I)}}else return;const x=new(Au(p)?Lu:Pu)(p,1);x.version=y;const m=i.get(f);m&&e.remove(m),i.set(f,x)}function h(f){const p=i.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&o(f)}else o(f);return i.get(f)}return{get:l,update:c,getWireframeAttribute:h}}function Ug(r,e,t){let n;function s(p){n=p}let i,a;function l(p){i=p.type,a=p.bytesPerElement}function c(p,g){r.drawElements(n,g,i,p*a),t.update(g,n,1)}function o(p,g,v){v!==0&&(r.drawElementsInstanced(n,g,i,p*a,v),t.update(g,n,v))}function h(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,i,p,0,v);let x=0;for(let m=0;m<v;m++)x+=g[m];t.update(x,n,1)}function f(p,g,v,y){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<p.length;m++)o(p[m]/a,g[m],y[m]);else{x.multiDrawElementsInstancedWEBGL(n,g,0,i,p,0,y,0,v);let m=0;for(let C=0;C<v;C++)m+=g[C]*y[C];t.update(m,n,1)}}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=o,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Ng(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,a,l){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=l*(i/3);break;case r.LINES:t.lines+=l*(i/2);break;case r.LINE_STRIP:t.lines+=l*(i-1);break;case r.LINE_LOOP:t.lines+=l*i;break;case r.POINTS:t.points+=l*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Fg(r,e,t){const n=new WeakMap,s=new dt;function i(a,l,c){const o=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=h!==void 0?h.length:0;let p=n.get(l);if(p===void 0||p.count!==f){let b=function(){N.dispose(),n.delete(l),l.removeEventListener("dispose",b)};p!==void 0&&p.texture.dispose();const g=l.morphAttributes.position!==void 0,v=l.morphAttributes.normal!==void 0,y=l.morphAttributes.color!==void 0,x=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],C=l.morphAttributes.color||[];let w=0;g===!0&&(w=1),v===!0&&(w=2),y===!0&&(w=3);let E=l.attributes.position.count*w,I=1;E>e.maxTextureSize&&(I=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const U=new Float32Array(E*I*4*f),N=new wu(U,E,I,f);N.type=An,N.needsUpdate=!0;const k=w*4;for(let A=0;A<f;A++){const L=x[A],Z=m[A],q=C[A],X=E*I*4*A;for(let ne=0;ne<L.count;ne++){const K=ne*k;g===!0&&(s.fromBufferAttribute(L,ne),U[X+K+0]=s.x,U[X+K+1]=s.y,U[X+K+2]=s.z,U[X+K+3]=0),v===!0&&(s.fromBufferAttribute(Z,ne),U[X+K+4]=s.x,U[X+K+5]=s.y,U[X+K+6]=s.z,U[X+K+7]=0),y===!0&&(s.fromBufferAttribute(q,ne),U[X+K+8]=s.x,U[X+K+9]=s.y,U[X+K+10]=s.z,U[X+K+11]=q.itemSize===4?s.w:1)}}p={count:f,texture:N,size:new it(E,I)},n.set(l,p),l.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let y=0;y<o.length;y++)g+=o[y];const v=l.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",v),c.getUniforms().setValue(r,"morphTargetInfluences",o)}c.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}return{update:i}}function Og(r,e,t,n){let s=new WeakMap;function i(c){const o=n.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==o&&(e.update(f),s.set(f,o)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==o&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,o))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==o&&(p.update(),s.set(p,o))}return f}function a(){s=new WeakMap}function l(c){const o=c.target;o.removeEventListener("dispose",l),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:i,dispose:a}}const Xu=new Bt,Oc=new ku(1,1),$u=new wu,qu=new If,Yu=new Uu,Bc=[],kc=[],zc=new Float32Array(16),Hc=new Float32Array(9),Vc=new Float32Array(4);function ms(r,e,t){const n=r[0];if(n<=0||n>0)return r;const s=e*t;let i=Bc[s];if(i===void 0&&(i=new Float32Array(s),Bc[s]=i),e!==0){n.toArray(i,0);for(let a=1,l=0;a!==e;++a)l+=t,r[a].toArray(i,l)}return i}function Nt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ft(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function qr(r,e){let t=kc[e];t===void 0&&(t=new Int32Array(e),kc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Bg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function kg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2fv(this.addr,e),Ft(t,e)}}function zg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;r.uniform3fv(this.addr,e),Ft(t,e)}}function Hg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4fv(this.addr,e),Ft(t,e)}}function Vg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;Vc.set(n),r.uniformMatrix2fv(this.addr,!1,Vc),Ft(t,n)}}function Gg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;Hc.set(n),r.uniformMatrix3fv(this.addr,!1,Hc),Ft(t,n)}}function Wg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;zc.set(n),r.uniformMatrix4fv(this.addr,!1,zc),Ft(t,n)}}function Xg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function $g(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2iv(this.addr,e),Ft(t,e)}}function qg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;r.uniform3iv(this.addr,e),Ft(t,e)}}function Yg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4iv(this.addr,e),Ft(t,e)}}function Kg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function jg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2uiv(this.addr,e),Ft(t,e)}}function Zg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;r.uniform3uiv(this.addr,e),Ft(t,e)}}function Jg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4uiv(this.addr,e),Ft(t,e)}}function Qg(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s);let i;this.type===r.SAMPLER_2D_SHADOW?(Oc.compareFunction=bu,i=Oc):i=Xu,t.setTexture2D(e||i,s)}function e_(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||qu,s)}function t_(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Yu,s)}function n_(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||$u,s)}function i_(r){switch(r){case 5126:return Bg;case 35664:return kg;case 35665:return zg;case 35666:return Hg;case 35674:return Vg;case 35675:return Gg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return $g;case 35668:case 35672:return qg;case 35669:case 35673:return Yg;case 5125:return Kg;case 36294:return jg;case 36295:return Zg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return n_}}function s_(r,e){r.uniform1fv(this.addr,e)}function r_(r,e){const t=ms(e,this.size,2);r.uniform2fv(this.addr,t)}function a_(r,e){const t=ms(e,this.size,3);r.uniform3fv(this.addr,t)}function o_(r,e){const t=ms(e,this.size,4);r.uniform4fv(this.addr,t)}function l_(r,e){const t=ms(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function c_(r,e){const t=ms(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function u_(r,e){const t=ms(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function h_(r,e){r.uniform1iv(this.addr,e)}function f_(r,e){r.uniform2iv(this.addr,e)}function d_(r,e){r.uniform3iv(this.addr,e)}function p_(r,e){r.uniform4iv(this.addr,e)}function m_(r,e){r.uniform1uiv(this.addr,e)}function g_(r,e){r.uniform2uiv(this.addr,e)}function __(r,e){r.uniform3uiv(this.addr,e)}function x_(r,e){r.uniform4uiv(this.addr,e)}function v_(r,e,t){const n=this.cache,s=e.length,i=qr(t,s);Nt(n,i)||(r.uniform1iv(this.addr,i),Ft(n,i));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Xu,i[a])}function M_(r,e,t){const n=this.cache,s=e.length,i=qr(t,s);Nt(n,i)||(r.uniform1iv(this.addr,i),Ft(n,i));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||qu,i[a])}function y_(r,e,t){const n=this.cache,s=e.length,i=qr(t,s);Nt(n,i)||(r.uniform1iv(this.addr,i),Ft(n,i));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Yu,i[a])}function S_(r,e,t){const n=this.cache,s=e.length,i=qr(t,s);Nt(n,i)||(r.uniform1iv(this.addr,i),Ft(n,i));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||$u,i[a])}function E_(r){switch(r){case 5126:return s_;case 35664:return r_;case 35665:return a_;case 35666:return o_;case 35674:return l_;case 35675:return c_;case 35676:return u_;case 5124:case 35670:return h_;case 35667:case 35671:return f_;case 35668:case 35672:return d_;case 35669:case 35673:return p_;case 5125:return m_;case 36294:return g_;case 36295:return __;case 36296:return x_;case 35678:case 36198:case 36298:case 36306:case 35682:return v_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return S_}}class T_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=i_(t.type)}}class b_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=E_(t.type)}}class A_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let i=0,a=s.length;i!==a;++i){const l=s[i];l.setValue(e,t[l.id],n)}}}const Ha=/(\w+)(\])?(\[|\.)?/g;function Gc(r,e){r.seq.push(e),r.map[e.id]=e}function w_(r,e,t){const n=r.name,s=n.length;for(Ha.lastIndex=0;;){const i=Ha.exec(n),a=Ha.lastIndex;let l=i[1];const c=i[2]==="]",o=i[3];if(c&&(l=l|0),o===void 0||o==="["&&a+2===s){Gc(t,o===void 0?new T_(l,r,e):new b_(l,r,e));break}else{let f=t.map[l];f===void 0&&(f=new A_(l),Gc(t,f)),t=f}}}class Or{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const i=e.getActiveUniform(t,s),a=e.getUniformLocation(t,i.name);w_(i,a,this)}}setValue(e,t,n,s){const i=this.map[t];i!==void 0&&i.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let i=0,a=t.length;i!==a;++i){const l=t[i],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,i=e.length;s!==i;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Wc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const R_=37297;let C_=0;function P_(r,e){const t=r.split(`
`),n=[],s=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let a=s;a<i;a++){const l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}const Xc=new Ze;function L_(r){ot._getMatrix(Xc,ot.workingColorSpace,r);const e=`mat3( ${Xc.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(r)){case zr:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function $c(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=(r.getShaderInfoLog(e)||"").trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+P_(r.getShaderSource(e),l)}else return i}function I_(r,e){const t=L_(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function D_(r,e){let t;switch(e){case Vh:t="Linear";break;case Gh:t="Reinhard";break;case Wh:t="Cineon";break;case Xh:t="ACESFilmic";break;case qh:t="AgX";break;case Yh:t="Neutral";break;case $h:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rr=new B;function U_(){ot.getLuminanceCoefficients(Rr);const r=Rr.x.toFixed(4),e=Rr.y.toFixed(4),t=Rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function F_(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function O_(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const i=r.getActiveAttrib(e,s),a=i.name;let l=1;i.type===r.FLOAT_MAT2&&(l=2),i.type===r.FLOAT_MAT3&&(l=3),i.type===r.FLOAT_MAT4&&(l=4),t[a]={type:i.type,location:r.getAttribLocation(e,a),locationSize:l}}return t}function Is(r){return r!==""}function qc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const B_=/^[ \t]*#include +<([\w\d./]+)>/gm;function zo(r){return r.replace(B_,z_)}const k_=new Map;function z_(r,e){let t=Je[e];if(t===void 0){const n=k_.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return zo(t)}const H_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kc(r){return r.replace(H_,V_)}function V_(r,e,t,n){let s="";for(let i=parseInt(e);i<parseInt(t);i++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return s}function jc(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function G_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===pu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===yh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Xn&&(e="SHADOWMAP_TYPE_VSM"),e}function W_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case is:case ss:e="ENVMAP_TYPE_CUBE";break;case Wr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function X_(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ss:e="ENVMAP_MODE_REFRACTION";break}return e}function $_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Wo:e="ENVMAP_BLENDING_MULTIPLY";break;case zh:e="ENVMAP_BLENDING_MIX";break;case Hh:e="ENVMAP_BLENDING_ADD";break}return e}function q_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Y_(r,e,t,n){const s=r.getContext(),i=t.defines;let a=t.vertexShader,l=t.fragmentShader;const c=G_(t),o=W_(t),h=X_(t),f=$_(t),p=q_(t),g=N_(t),v=F_(i),y=s.createProgram();let x,m,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Is).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Is).join(`
`),m.length>0&&(m+=`
`)):(x=[jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),m=[jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?Je.tonemapping_pars_fragment:"",t.toneMapping!==ci?D_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,I_("linearToOutputTexel",t.outputColorSpace),U_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Is).join(`
`)),a=zo(a),a=qc(a,t),a=Yc(a,t),l=zo(l),l=qc(l,t),l=Yc(l,t),a=Kc(a),l=Kc(l),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const w=C+x+a,E=C+m+l,I=Wc(s,s.VERTEX_SHADER,w),U=Wc(s,s.FRAGMENT_SHADER,E);s.attachShader(y,I),s.attachShader(y,U),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function N(L){if(r.debug.checkShaderErrors){const Z=s.getProgramInfoLog(y)||"",q=s.getShaderInfoLog(I)||"",X=s.getShaderInfoLog(U)||"",ne=Z.trim(),K=q.trim(),oe=X.trim();let Y=!0,me=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,y,I,U);else{const ge=$c(s,I,"vertex"),Ie=$c(s,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+ne+`
`+ge+`
`+Ie)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(K===""||oe==="")&&(me=!1);me&&(L.diagnostics={runnable:Y,programLog:ne,vertexShader:{log:K,prefix:x},fragmentShader:{log:oe,prefix:m}})}s.deleteShader(I),s.deleteShader(U),k=new Or(s,y),b=O_(s,y)}let k;this.getUniforms=function(){return k===void 0&&N(this),k};let b;this.getAttributes=function(){return b===void 0&&N(this),b};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(y,R_)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C_++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=U,this}let K_=0;class j_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Z_(e),t.set(e,n)),n}}class Z_{constructor(e){this.id=K_++,this.code=e,this.usedTimes=0}}function J_(r,e,t,n,s,i,a){const l=new Ru,c=new j_,o=new Set,h=[],f=s.logarithmicDepthBuffer,p=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return o.add(b),b===0?"uv":`uv${b}`}function x(b,A,L,Z,q){const X=Z.fog,ne=q.geometry,K=b.isMeshStandardMaterial?Z.environment:null,oe=(b.isMeshStandardMaterial?t:e).get(b.envMap||K),Y=oe&&oe.mapping===Wr?oe.image.height:null,me=v[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const ge=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Ie=ge!==void 0?ge.length:0;let qe=0;ne.morphAttributes.position!==void 0&&(qe=1),ne.morphAttributes.normal!==void 0&&(qe=2),ne.morphAttributes.color!==void 0&&(qe=3);let ut,ht,ee,_e;if(me){const lt=Pn[me];ut=lt.vertexShader,ht=lt.fragmentShader}else ut=b.vertexShader,ht=b.fragmentShader,c.update(b),ee=c.getVertexShaderID(b),_e=c.getFragmentShaderID(b);const de=r.getRenderTarget(),ke=r.state.buffers.depth.getReversed(),ze=q.isInstancedMesh===!0,Ye=q.isBatchedMesh===!0,Ct=!!b.map,st=!!b.matcap,F=!!oe,yt=!!b.aoMap,Fe=!!b.lightMap,rt=!!b.bumpMap,Ne=!!b.normalMap,pt=!!b.displacementMap,Te=!!b.emissiveMap,je=!!b.metalnessMap,It=!!b.roughnessMap,wt=b.anisotropy>0,P=b.clearcoat>0,S=b.dispersion>0,G=b.iridescence>0,Q=b.sheen>0,se=b.transmission>0,j=wt&&!!b.anisotropyMap,Ue=P&&!!b.clearcoatMap,fe=P&&!!b.clearcoatNormalMap,Pe=P&&!!b.clearcoatRoughnessMap,Le=G&&!!b.iridescenceMap,ce=G&&!!b.iridescenceThicknessMap,ye=Q&&!!b.sheenColorMap,Ve=Q&&!!b.sheenRoughnessMap,De=!!b.specularMap,xe=!!b.specularColorMap,Ke=!!b.specularIntensityMap,O=se&&!!b.transmissionMap,ue=se&&!!b.thicknessMap,pe=!!b.gradientMap,Ae=!!b.alphaMap,ae=b.alphaTest>0,te=!!b.alphaHash,Ce=!!b.extensions;let $e=ci;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&($e=r.toneMapping);const _t={shaderID:me,shaderType:b.type,shaderName:b.name,vertexShader:ut,fragmentShader:ht,defines:b.defines,customVertexShaderID:ee,customFragmentShaderID:_e,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Ye,batchingColor:Ye&&q._colorsTexture!==null,instancing:ze,instancingColor:ze&&q.instanceColor!==null,instancingMorph:ze&&q.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:de===null?r.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:en,alphaToCoverage:!!b.alphaToCoverage,map:Ct,matcap:st,envMap:F,envMapMode:F&&oe.mapping,envMapCubeUVHeight:Y,aoMap:yt,lightMap:Fe,bumpMap:rt,normalMap:Ne,displacementMap:p&&pt,emissiveMap:Te,normalMapObjectSpace:Ne&&b.normalMapType===ef,normalMapTangentSpace:Ne&&b.normalMapType===Jo,metalnessMap:je,roughnessMap:It,anisotropy:wt,anisotropyMap:j,clearcoat:P,clearcoatMap:Ue,clearcoatNormalMap:fe,clearcoatRoughnessMap:Pe,dispersion:S,iridescence:G,iridescenceMap:Le,iridescenceThicknessMap:ce,sheen:Q,sheenColorMap:ye,sheenRoughnessMap:Ve,specularMap:De,specularColorMap:xe,specularIntensityMap:Ke,transmission:se,transmissionMap:O,thicknessMap:ue,gradientMap:pe,opaque:b.transparent===!1&&b.blending===Zi&&b.alphaToCoverage===!1,alphaMap:Ae,alphaTest:ae,alphaHash:te,combine:b.combine,mapUv:Ct&&y(b.map.channel),aoMapUv:yt&&y(b.aoMap.channel),lightMapUv:Fe&&y(b.lightMap.channel),bumpMapUv:rt&&y(b.bumpMap.channel),normalMapUv:Ne&&y(b.normalMap.channel),displacementMapUv:pt&&y(b.displacementMap.channel),emissiveMapUv:Te&&y(b.emissiveMap.channel),metalnessMapUv:je&&y(b.metalnessMap.channel),roughnessMapUv:It&&y(b.roughnessMap.channel),anisotropyMapUv:j&&y(b.anisotropyMap.channel),clearcoatMapUv:Ue&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:fe&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&y(b.sheenRoughnessMap.channel),specularMapUv:De&&y(b.specularMap.channel),specularColorMapUv:xe&&y(b.specularColorMap.channel),specularIntensityMapUv:Ke&&y(b.specularIntensityMap.channel),transmissionMapUv:O&&y(b.transmissionMap.channel),thicknessMapUv:ue&&y(b.thicknessMap.channel),alphaMapUv:Ae&&y(b.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Ne||wt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ne.attributes.uv&&(Ct||Ae),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ke,skinning:q.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:qe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:$e,decodeVideoTexture:Ct&&b.map.isVideoTexture===!0&&ot.getTransfer(b.map.colorSpace)===St,decodeVideoTextureEmissive:Te&&b.emissiveMap.isVideoTexture===!0&&ot.getTransfer(b.emissiveMap.colorSpace)===St,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ln,flipSided:b.side===sn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ce&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&b.extensions.multiDraw===!0||Ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return _t.vertexUv1s=o.has(1),_t.vertexUv2s=o.has(2),_t.vertexUv3s=o.has(3),o.clear(),_t}function m(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)A.push(L),A.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(C(A,b),w(A,b),A.push(r.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function C(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function w(b,A){l.disableAll(),A.supportsVertexTextures&&l.enable(0),A.instancing&&l.enable(1),A.instancingColor&&l.enable(2),A.instancingMorph&&l.enable(3),A.matcap&&l.enable(4),A.envMap&&l.enable(5),A.normalMapObjectSpace&&l.enable(6),A.normalMapTangentSpace&&l.enable(7),A.clearcoat&&l.enable(8),A.iridescence&&l.enable(9),A.alphaTest&&l.enable(10),A.vertexColors&&l.enable(11),A.vertexAlphas&&l.enable(12),A.vertexUv1s&&l.enable(13),A.vertexUv2s&&l.enable(14),A.vertexUv3s&&l.enable(15),A.vertexTangents&&l.enable(16),A.anisotropy&&l.enable(17),A.alphaHash&&l.enable(18),A.batching&&l.enable(19),A.dispersion&&l.enable(20),A.batchingColor&&l.enable(21),A.gradientMap&&l.enable(22),b.push(l.mask),l.disableAll(),A.fog&&l.enable(0),A.useFog&&l.enable(1),A.flatShading&&l.enable(2),A.logarithmicDepthBuffer&&l.enable(3),A.reversedDepthBuffer&&l.enable(4),A.skinning&&l.enable(5),A.morphTargets&&l.enable(6),A.morphNormals&&l.enable(7),A.morphColors&&l.enable(8),A.premultipliedAlpha&&l.enable(9),A.shadowMapEnabled&&l.enable(10),A.doubleSided&&l.enable(11),A.flipSided&&l.enable(12),A.useDepthPacking&&l.enable(13),A.dithering&&l.enable(14),A.transmission&&l.enable(15),A.sheen&&l.enable(16),A.opaque&&l.enable(17),A.pointsUvs&&l.enable(18),A.decodeVideoTexture&&l.enable(19),A.decodeVideoTextureEmissive&&l.enable(20),A.alphaToCoverage&&l.enable(21),b.push(l.mask)}function E(b){const A=v[b.type];let L;if(A){const Z=Pn[A];L=Xf.clone(Z.uniforms)}else L=b.uniforms;return L}function I(b,A){let L;for(let Z=0,q=h.length;Z<q;Z++){const X=h[Z];if(X.cacheKey===A){L=X,++L.usedTimes;break}}return L===void 0&&(L=new Y_(r,A,b,i),h.push(L)),L}function U(b){if(--b.usedTimes===0){const A=h.indexOf(b);h[A]=h[h.length-1],h.pop(),b.destroy()}}function N(b){c.remove(b)}function k(){c.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:E,acquireProgram:I,releaseProgram:U,releaseShaderCache:N,programs:h,dispose:k}}function Q_(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let l=r.get(a);return l===void 0&&(l={},r.set(a,l)),l}function n(a){r.delete(a)}function s(a,l,c){r.get(a)[l]=c}function i(){r=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:i}}function e0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Zc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Jc(){const r=[];let e=0;const t=[],n=[],s=[];function i(){e=0,t.length=0,n.length=0,s.length=0}function a(f,p,g,v,y,x){let m=r[e];return m===void 0?(m={id:f.id,object:f,geometry:p,material:g,groupOrder:v,renderOrder:f.renderOrder,z:y,group:x},r[e]=m):(m.id=f.id,m.object=f,m.geometry=p,m.material=g,m.groupOrder=v,m.renderOrder=f.renderOrder,m.z=y,m.group=x),e++,m}function l(f,p,g,v,y,x){const m=a(f,p,g,v,y,x);g.transmission>0?n.push(m):g.transparent===!0?s.push(m):t.push(m)}function c(f,p,g,v,y,x){const m=a(f,p,g,v,y,x);g.transmission>0?n.unshift(m):g.transparent===!0?s.unshift(m):t.unshift(m)}function o(f,p){t.length>1&&t.sort(f||e0),n.length>1&&n.sort(p||Zc),s.length>1&&s.sort(p||Zc)}function h(){for(let f=e,p=r.length;f<p;f++){const g=r[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:i,push:l,unshift:c,finish:h,sort:o}}function t0(){let r=new WeakMap;function e(n,s){const i=r.get(n);let a;return i===void 0?(a=new Jc,r.set(n,[a])):s>=i.length?(a=new Jc,i.push(a)):a=i[s],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function n0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new We};break;case"SpotLight":t={position:new B,direction:new B,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new B,halfWidth:new B,halfHeight:new B};break}return r[e.id]=t,t}}}function i0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let s0=0;function r0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function a0(r){const e=new n0,t=i0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new B);const s=new B,i=new Qe,a=new Qe;function l(o){let h=0,f=0,p=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let g=0,v=0,y=0,x=0,m=0,C=0,w=0,E=0,I=0,U=0,N=0;o.sort(r0);for(let b=0,A=o.length;b<A;b++){const L=o[b],Z=L.color,q=L.intensity,X=L.distance,ne=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=Z.r*q,f+=Z.g*q,p+=Z.b*q;else if(L.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(L.sh.coefficients[K],q);N++}else if(L.isDirectionalLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const oe=L.shadow,Y=t.get(L);Y.shadowIntensity=oe.intensity,Y.shadowBias=oe.bias,Y.shadowNormalBias=oe.normalBias,Y.shadowRadius=oe.radius,Y.shadowMapSize=oe.mapSize,n.directionalShadow[g]=Y,n.directionalShadowMap[g]=ne,n.directionalShadowMatrix[g]=L.shadow.matrix,C++}n.directional[g]=K,g++}else if(L.isSpotLight){const K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(Z).multiplyScalar(q),K.distance=X,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,n.spot[y]=K;const oe=L.shadow;if(L.map&&(n.spotLightMap[I]=L.map,I++,oe.updateMatrices(L),L.castShadow&&U++),n.spotLightMatrix[y]=oe.matrix,L.castShadow){const Y=t.get(L);Y.shadowIntensity=oe.intensity,Y.shadowBias=oe.bias,Y.shadowNormalBias=oe.normalBias,Y.shadowRadius=oe.radius,Y.shadowMapSize=oe.mapSize,n.spotShadow[y]=Y,n.spotShadowMap[y]=ne,E++}y++}else if(L.isRectAreaLight){const K=e.get(L);K.color.copy(Z).multiplyScalar(q),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),n.rectArea[x]=K,x++}else if(L.isPointLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){const oe=L.shadow,Y=t.get(L);Y.shadowIntensity=oe.intensity,Y.shadowBias=oe.bias,Y.shadowNormalBias=oe.normalBias,Y.shadowRadius=oe.radius,Y.shadowMapSize=oe.mapSize,Y.shadowCameraNear=oe.camera.near,Y.shadowCameraFar=oe.camera.far,n.pointShadow[v]=Y,n.pointShadowMap[v]=ne,n.pointShadowMatrix[v]=L.shadow.matrix,w++}n.point[v]=K,v++}else if(L.isHemisphereLight){const K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(q),K.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[m]=K,m++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=p;const k=n.hash;(k.directionalLength!==g||k.pointLength!==v||k.spotLength!==y||k.rectAreaLength!==x||k.hemiLength!==m||k.numDirectionalShadows!==C||k.numPointShadows!==w||k.numSpotShadows!==E||k.numSpotMaps!==I||k.numLightProbes!==N)&&(n.directional.length=g,n.spot.length=y,n.rectArea.length=x,n.point.length=v,n.hemi.length=m,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=E+I-U,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=N,k.directionalLength=g,k.pointLength=v,k.spotLength=y,k.rectAreaLength=x,k.hemiLength=m,k.numDirectionalShadows=C,k.numPointShadows=w,k.numSpotShadows=E,k.numSpotMaps=I,k.numLightProbes=N,n.version=s0++)}function c(o,h){let f=0,p=0,g=0,v=0,y=0;const x=h.matrixWorldInverse;for(let m=0,C=o.length;m<C;m++){const w=o[m];if(w.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(x),f++}else if(w.isSpotLight){const E=n.spot[g];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(x),E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(x),g++}else if(w.isRectAreaLight){const E=n.rectArea[v];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(x),a.identity(),i.copy(w.matrixWorld),i.premultiply(x),a.extractRotation(i),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(w.isPointLight){const E=n.point[p];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(x),p++}else if(w.isHemisphereLight){const E=n.hemi[y];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(x),y++}}}return{setup:l,setupView:c,state:n}}function Qc(r){const e=new a0(r),t=[],n=[];function s(h){o.camera=h,t.length=0,n.length=0}function i(h){t.push(h)}function a(h){n.push(h)}function l(){e.setup(t)}function c(h){e.setupView(t,h)}const o={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:o,setupLights:l,setupLightsView:c,pushLight:i,pushShadow:a}}function o0(r){let e=new WeakMap;function t(s,i=0){const a=e.get(s);let l;return a===void 0?(l=new Qc(r),e.set(s,[l])):i>=a.length?(l=new Qc(r),a.push(l)):l=a[i],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const l0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function u0(r,e,t){let n=new il;const s=new it,i=new it,a=new dt,l=new cd({depthPacking:Qh}),c=new ud,o={},h=t.maxTextureSize,f={[jn]:sn,[sn]:jn,[Ln]:Ln},p=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:l0,fragmentShader:c0}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const v=new un;v.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new nn(v,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pu;let m=this.type;this.render=function(U,N,k){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||U.length===0)return;const b=r.getRenderTarget(),A=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(li),Z.buffers.depth.getReversed()?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const q=m!==Xn&&this.type===Xn,X=m===Xn&&this.type!==Xn;for(let ne=0,K=U.length;ne<K;ne++){const oe=U[ne],Y=oe.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const me=Y.getFrameExtents();if(s.multiply(me),i.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(i.x=Math.floor(h/me.x),s.x=i.x*me.x,Y.mapSize.x=i.x),s.y>h&&(i.y=Math.floor(h/me.y),s.y=i.y*me.y,Y.mapSize.y=i.y)),Y.map===null||q===!0||X===!0){const Ie=this.type!==Xn?{minFilter:Zt,magFilter:Zt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new wi(s.x,s.y,Ie),Y.map.texture.name=oe.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const ge=Y.getViewportCount();for(let Ie=0;Ie<ge;Ie++){const qe=Y.getViewport(Ie);a.set(i.x*qe.x,i.y*qe.y,i.x*qe.z,i.y*qe.w),Z.viewport(a),Y.updateMatrices(oe,Ie),n=Y.getFrustum(),E(N,k,Y.camera,oe,this.type)}Y.isPointLightShadow!==!0&&this.type===Xn&&C(Y,k),Y.needsUpdate=!1}m=this.type,x.needsUpdate=!1,r.setRenderTarget(b,A,L)};function C(U,N){const k=e.update(y);p.defines.VSM_SAMPLES!==U.blurSamples&&(p.defines.VSM_SAMPLES=U.blurSamples,g.defines.VSM_SAMPLES=U.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new wi(s.x,s.y)),p.uniforms.shadow_pass.value=U.map.texture,p.uniforms.resolution.value=U.mapSize,p.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(N,null,k,p,y,null),g.uniforms.shadow_pass.value=U.mapPass.texture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(N,null,k,g,y,null)}function w(U,N,k,b){let A=null;const L=k.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(L!==void 0)A=L;else if(A=k.isPointLight===!0?c:l,r.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const Z=A.uuid,q=N.uuid;let X=o[Z];X===void 0&&(X={},o[Z]=X);let ne=X[q];ne===void 0&&(ne=A.clone(),X[q]=ne,N.addEventListener("dispose",I)),A=ne}if(A.visible=N.visible,A.wireframe=N.wireframe,b===Xn?A.side=N.shadowSide!==null?N.shadowSide:N.side:A.side=N.shadowSide!==null?N.shadowSide:f[N.side],A.alphaMap=N.alphaMap,A.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,A.map=N.map,A.clipShadows=N.clipShadows,A.clippingPlanes=N.clippingPlanes,A.clipIntersection=N.clipIntersection,A.displacementMap=N.displacementMap,A.displacementScale=N.displacementScale,A.displacementBias=N.displacementBias,A.wireframeLinewidth=N.wireframeLinewidth,A.linewidth=N.linewidth,k.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const Z=r.properties.get(A);Z.light=k}return A}function E(U,N,k,b,A){if(U.visible===!1)return;if(U.layers.test(N.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&A===Xn)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,U.matrixWorld);const q=e.update(U),X=U.material;if(Array.isArray(X)){const ne=q.groups;for(let K=0,oe=ne.length;K<oe;K++){const Y=ne[K],me=X[Y.materialIndex];if(me&&me.visible){const ge=w(U,me,b,A);U.onBeforeShadow(r,U,N,k,q,ge,Y),r.renderBufferDirect(k,null,q,ge,U,Y),U.onAfterShadow(r,U,N,k,q,ge,Y)}}}else if(X.visible){const ne=w(U,X,b,A);U.onBeforeShadow(r,U,N,k,q,ne,null),r.renderBufferDirect(k,null,q,ne,U,null),U.onAfterShadow(r,U,N,k,q,ne,null)}}const Z=U.children;for(let q=0,X=Z.length;q<X;q++)E(Z[q],N,k,b,A)}function I(U){U.target.removeEventListener("dispose",I);for(const k in o){const b=o[k],A=U.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}const h0={[eo]:to,[no]:ro,[io]:ao,[ns]:so,[to]:eo,[ro]:no,[ao]:io,[so]:ns};function f0(r,e){function t(){let O=!1;const ue=new dt;let pe=null;const Ae=new dt(0,0,0,0);return{setMask:function(ae){pe!==ae&&!O&&(r.colorMask(ae,ae,ae,ae),pe=ae)},setLocked:function(ae){O=ae},setClear:function(ae,te,Ce,$e,_t){_t===!0&&(ae*=$e,te*=$e,Ce*=$e),ue.set(ae,te,Ce,$e),Ae.equals(ue)===!1&&(r.clearColor(ae,te,Ce,$e),Ae.copy(ue))},reset:function(){O=!1,pe=null,Ae.set(-1,0,0,0)}}}function n(){let O=!1,ue=!1,pe=null,Ae=null,ae=null;return{setReversed:function(te){if(ue!==te){const Ce=e.get("EXT_clip_control");te?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ue=te;const $e=ae;ae=null,this.setClear($e)}},getReversed:function(){return ue},setTest:function(te){te?de(r.DEPTH_TEST):ke(r.DEPTH_TEST)},setMask:function(te){pe!==te&&!O&&(r.depthMask(te),pe=te)},setFunc:function(te){if(ue&&(te=h0[te]),Ae!==te){switch(te){case eo:r.depthFunc(r.NEVER);break;case to:r.depthFunc(r.ALWAYS);break;case no:r.depthFunc(r.LESS);break;case ns:r.depthFunc(r.LEQUAL);break;case io:r.depthFunc(r.EQUAL);break;case so:r.depthFunc(r.GEQUAL);break;case ro:r.depthFunc(r.GREATER);break;case ao:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ae=te}},setLocked:function(te){O=te},setClear:function(te){ae!==te&&(ue&&(te=1-te),r.clearDepth(te),ae=te)},reset:function(){O=!1,pe=null,Ae=null,ae=null,ue=!1}}}function s(){let O=!1,ue=null,pe=null,Ae=null,ae=null,te=null,Ce=null,$e=null,_t=null;return{setTest:function(lt){O||(lt?de(r.STENCIL_TEST):ke(r.STENCIL_TEST))},setMask:function(lt){ue!==lt&&!O&&(r.stencilMask(lt),ue=lt)},setFunc:function(lt,vn,hn){(pe!==lt||Ae!==vn||ae!==hn)&&(r.stencilFunc(lt,vn,hn),pe=lt,Ae=vn,ae=hn)},setOp:function(lt,vn,hn){(te!==lt||Ce!==vn||$e!==hn)&&(r.stencilOp(lt,vn,hn),te=lt,Ce=vn,$e=hn)},setLocked:function(lt){O=lt},setClear:function(lt){_t!==lt&&(r.clearStencil(lt),_t=lt)},reset:function(){O=!1,ue=null,pe=null,Ae=null,ae=null,te=null,Ce=null,$e=null,_t=null}}}const i=new t,a=new n,l=new s,c=new WeakMap,o=new WeakMap;let h={},f={},p=new WeakMap,g=[],v=null,y=!1,x=null,m=null,C=null,w=null,E=null,I=null,U=null,N=new We(0,0,0),k=0,b=!1,A=null,L=null,Z=null,q=null,X=null;const ne=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,oe=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Y)[1]),K=oe>=1):Y.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),K=oe>=2);let me=null,ge={};const Ie=r.getParameter(r.SCISSOR_BOX),qe=r.getParameter(r.VIEWPORT),ut=new dt().fromArray(Ie),ht=new dt().fromArray(qe);function ee(O,ue,pe,Ae){const ae=new Uint8Array(4),te=r.createTexture();r.bindTexture(O,te),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ce=0;Ce<pe;Ce++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(ue,0,r.RGBA,1,1,Ae,0,r.RGBA,r.UNSIGNED_BYTE,ae):r.texImage2D(ue+Ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ae);return te}const _e={};_e[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),_e[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_e[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),l.setClear(0),de(r.DEPTH_TEST),a.setFunc(ns),rt(!1),Ne(Ol),de(r.CULL_FACE),yt(li);function de(O){h[O]!==!0&&(r.enable(O),h[O]=!0)}function ke(O){h[O]!==!1&&(r.disable(O),h[O]=!1)}function ze(O,ue){return f[O]!==ue?(r.bindFramebuffer(O,ue),f[O]=ue,O===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ue),O===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ye(O,ue){let pe=g,Ae=!1;if(O){pe=p.get(ue),pe===void 0&&(pe=[],p.set(ue,pe));const ae=O.textures;if(pe.length!==ae.length||pe[0]!==r.COLOR_ATTACHMENT0){for(let te=0,Ce=ae.length;te<Ce;te++)pe[te]=r.COLOR_ATTACHMENT0+te;pe.length=ae.length,Ae=!0}}else pe[0]!==r.BACK&&(pe[0]=r.BACK,Ae=!0);Ae&&r.drawBuffers(pe)}function Ct(O){return v!==O?(r.useProgram(O),v=O,!0):!1}const st={[Si]:r.FUNC_ADD,[Eh]:r.FUNC_SUBTRACT,[Th]:r.FUNC_REVERSE_SUBTRACT};st[bh]=r.MIN,st[Ah]=r.MAX;const F={[wh]:r.ZERO,[Rh]:r.ONE,[Ch]:r.SRC_COLOR,[Ja]:r.SRC_ALPHA,[Nh]:r.SRC_ALPHA_SATURATE,[Dh]:r.DST_COLOR,[Lh]:r.DST_ALPHA,[Ph]:r.ONE_MINUS_SRC_COLOR,[Qa]:r.ONE_MINUS_SRC_ALPHA,[Uh]:r.ONE_MINUS_DST_COLOR,[Ih]:r.ONE_MINUS_DST_ALPHA,[Fh]:r.CONSTANT_COLOR,[Oh]:r.ONE_MINUS_CONSTANT_COLOR,[Bh]:r.CONSTANT_ALPHA,[kh]:r.ONE_MINUS_CONSTANT_ALPHA};function yt(O,ue,pe,Ae,ae,te,Ce,$e,_t,lt){if(O===li){y===!0&&(ke(r.BLEND),y=!1);return}if(y===!1&&(de(r.BLEND),y=!0),O!==Sh){if(O!==x||lt!==b){if((m!==Si||E!==Si)&&(r.blendEquation(r.FUNC_ADD),m=Si,E=Si),lt)switch(O){case Zi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Bl:r.blendFunc(r.ONE,r.ONE);break;case kl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case zl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Zi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Bl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case kl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}C=null,w=null,I=null,U=null,N.set(0,0,0),k=0,x=O,b=lt}return}ae=ae||ue,te=te||pe,Ce=Ce||Ae,(ue!==m||ae!==E)&&(r.blendEquationSeparate(st[ue],st[ae]),m=ue,E=ae),(pe!==C||Ae!==w||te!==I||Ce!==U)&&(r.blendFuncSeparate(F[pe],F[Ae],F[te],F[Ce]),C=pe,w=Ae,I=te,U=Ce),($e.equals(N)===!1||_t!==k)&&(r.blendColor($e.r,$e.g,$e.b,_t),N.copy($e),k=_t),x=O,b=!1}function Fe(O,ue){O.side===Ln?ke(r.CULL_FACE):de(r.CULL_FACE);let pe=O.side===sn;ue&&(pe=!pe),rt(pe),O.blending===Zi&&O.transparent===!1?yt(li):yt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),i.setMask(O.colorWrite);const Ae=O.stencilWrite;l.setTest(Ae),Ae&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Te(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?de(r.SAMPLE_ALPHA_TO_COVERAGE):ke(r.SAMPLE_ALPHA_TO_COVERAGE)}function rt(O){A!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),A=O)}function Ne(O){O!==vh?(de(r.CULL_FACE),O!==L&&(O===Ol?r.cullFace(r.BACK):O===Mh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ke(r.CULL_FACE),L=O}function pt(O){O!==Z&&(K&&r.lineWidth(O),Z=O)}function Te(O,ue,pe){O?(de(r.POLYGON_OFFSET_FILL),(q!==ue||X!==pe)&&(r.polygonOffset(ue,pe),q=ue,X=pe)):ke(r.POLYGON_OFFSET_FILL)}function je(O){O?de(r.SCISSOR_TEST):ke(r.SCISSOR_TEST)}function It(O){O===void 0&&(O=r.TEXTURE0+ne-1),me!==O&&(r.activeTexture(O),me=O)}function wt(O,ue,pe){pe===void 0&&(me===null?pe=r.TEXTURE0+ne-1:pe=me);let Ae=ge[pe];Ae===void 0&&(Ae={type:void 0,texture:void 0},ge[pe]=Ae),(Ae.type!==O||Ae.texture!==ue)&&(me!==pe&&(r.activeTexture(pe),me=pe),r.bindTexture(O,ue||_e[O]),Ae.type=O,Ae.texture=ue)}function P(){const O=ge[me];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function S(){try{r.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{r.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{r.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{r.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{r.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ue(){try{r.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{r.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{r.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{r.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{r.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(O){ut.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),ut.copy(O))}function Ve(O){ht.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),ht.copy(O))}function De(O,ue){let pe=o.get(ue);pe===void 0&&(pe=new WeakMap,o.set(ue,pe));let Ae=pe.get(O);Ae===void 0&&(Ae=r.getUniformBlockIndex(ue,O.name),pe.set(O,Ae))}function xe(O,ue){const Ae=o.get(ue).get(O);c.get(ue)!==Ae&&(r.uniformBlockBinding(ue,Ae,O.__bindingPointIndex),c.set(ue,Ae))}function Ke(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},me=null,ge={},f={},p=new WeakMap,g=[],v=null,y=!1,x=null,m=null,C=null,w=null,E=null,I=null,U=null,N=new We(0,0,0),k=0,b=!1,A=null,L=null,Z=null,q=null,X=null,ut.set(0,0,r.canvas.width,r.canvas.height),ht.set(0,0,r.canvas.width,r.canvas.height),i.reset(),a.reset(),l.reset()}return{buffers:{color:i,depth:a,stencil:l},enable:de,disable:ke,bindFramebuffer:ze,drawBuffers:Ye,useProgram:Ct,setBlending:yt,setMaterial:Fe,setFlipSided:rt,setCullFace:Ne,setLineWidth:pt,setPolygonOffset:Te,setScissorTest:je,activeTexture:It,bindTexture:wt,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:G,texImage2D:Le,texImage3D:ce,updateUBOMapping:De,uniformBlockBinding:xe,texStorage2D:fe,texStorage3D:Pe,texSubImage2D:Q,texSubImage3D:se,compressedTexSubImage2D:j,compressedTexSubImage3D:Ue,scissor:ye,viewport:Ve,reset:Ke}}function d0(r,e,t,n,s,i,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new it,h=new WeakMap;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,S){return g?new OffscreenCanvas(P,S):Gs("canvas")}function y(P,S,G){let Q=1;const se=wt(P);if((se.width>G||se.height>G)&&(Q=G/Math.max(se.width,se.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const j=Math.floor(Q*se.width),Ue=Math.floor(Q*se.height);f===void 0&&(f=v(j,Ue));const fe=S?v(j,Ue):f;return fe.width=j,fe.height=Ue,fe.getContext("2d").drawImage(P,0,0,j,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+j+"x"+Ue+")."),fe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),P;return P}function x(P){return P.generateMipmaps}function m(P){r.generateMipmap(P)}function C(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(P,S,G,Q,se=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=S;if(S===r.RED&&(G===r.FLOAT&&(j=r.R32F),G===r.HALF_FLOAT&&(j=r.R16F),G===r.UNSIGNED_BYTE&&(j=r.R8)),S===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.R8UI),G===r.UNSIGNED_SHORT&&(j=r.R16UI),G===r.UNSIGNED_INT&&(j=r.R32UI),G===r.BYTE&&(j=r.R8I),G===r.SHORT&&(j=r.R16I),G===r.INT&&(j=r.R32I)),S===r.RG&&(G===r.FLOAT&&(j=r.RG32F),G===r.HALF_FLOAT&&(j=r.RG16F),G===r.UNSIGNED_BYTE&&(j=r.RG8)),S===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.RG8UI),G===r.UNSIGNED_SHORT&&(j=r.RG16UI),G===r.UNSIGNED_INT&&(j=r.RG32UI),G===r.BYTE&&(j=r.RG8I),G===r.SHORT&&(j=r.RG16I),G===r.INT&&(j=r.RG32I)),S===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.RGB8UI),G===r.UNSIGNED_SHORT&&(j=r.RGB16UI),G===r.UNSIGNED_INT&&(j=r.RGB32UI),G===r.BYTE&&(j=r.RGB8I),G===r.SHORT&&(j=r.RGB16I),G===r.INT&&(j=r.RGB32I)),S===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),G===r.UNSIGNED_INT&&(j=r.RGBA32UI),G===r.BYTE&&(j=r.RGBA8I),G===r.SHORT&&(j=r.RGBA16I),G===r.INT&&(j=r.RGBA32I)),S===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),S===r.RGBA){const Ue=se?zr:ot.getTransfer(Q);G===r.FLOAT&&(j=r.RGBA32F),G===r.HALF_FLOAT&&(j=r.RGBA16F),G===r.UNSIGNED_BYTE&&(j=Ue===St?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function E(P,S){let G;return P?S===null||S===Ai||S===Bs?G=r.DEPTH24_STENCIL8:S===An?G=r.DEPTH32F_STENCIL8:S===Os&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ai||S===Bs?G=r.DEPTH_COMPONENT24:S===An?G=r.DEPTH_COMPONENT32F:S===Os&&(G=r.DEPTH_COMPONENT16),G}function I(P,S){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==Zt&&P.minFilter!==cn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function U(P){const S=P.target;S.removeEventListener("dispose",U),k(S),S.isVideoTexture&&h.delete(S)}function N(P){const S=P.target;S.removeEventListener("dispose",N),A(S)}function k(P){const S=n.get(P);if(S.__webglInit===void 0)return;const G=P.source,Q=p.get(G);if(Q){const se=Q[S.__cacheKey];se.usedTimes--,se.usedTimes===0&&b(P),Object.keys(Q).length===0&&p.delete(G)}n.remove(P)}function b(P){const S=n.get(P);r.deleteTexture(S.__webglTexture);const G=P.source,Q=p.get(G);delete Q[S.__cacheKey],a.memory.textures--}function A(P){const S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let se=0;se<S.__webglFramebuffer[Q].length;se++)r.deleteFramebuffer(S.__webglFramebuffer[Q][se]);else r.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)r.deleteFramebuffer(S.__webglFramebuffer[Q]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=P.textures;for(let Q=0,se=G.length;Q<se;Q++){const j=n.get(G[Q]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(G[Q])}n.remove(P)}let L=0;function Z(){L=0}function q(){const P=L;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),L+=1,P}function X(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function ne(P,S){const G=n.get(P);if(P.isVideoTexture&&je(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){const Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(G,P,S);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+S)}function K(P,S){const G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){_e(G,P,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+S)}function oe(P,S){const G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){_e(G,P,S);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+S)}function Y(P,S){const G=n.get(P);if(P.version>0&&G.__version!==P.version){de(G,P,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+S)}const me={[rs]:r.REPEAT,[oi]:r.CLAMP_TO_EDGE,[kr]:r.MIRRORED_REPEAT},ge={[Zt]:r.NEAREST,[gu]:r.NEAREST_MIPMAP_NEAREST,[Ls]:r.NEAREST_MIPMAP_LINEAR,[cn]:r.LINEAR,[Pr]:r.LINEAR_MIPMAP_NEAREST,[qn]:r.LINEAR_MIPMAP_LINEAR},Ie={[tf]:r.NEVER,[lf]:r.ALWAYS,[nf]:r.LESS,[bu]:r.LEQUAL,[sf]:r.EQUAL,[of]:r.GEQUAL,[rf]:r.GREATER,[af]:r.NOTEQUAL};function qe(P,S){if(S.type===An&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===cn||S.magFilter===Pr||S.magFilter===Ls||S.magFilter===qn||S.minFilter===cn||S.minFilter===Pr||S.minFilter===Ls||S.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,me[S.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,me[S.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,me[S.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,ge[S.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,ge[S.minFilter]),S.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Ie[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Zt||S.minFilter!==Ls&&S.minFilter!==qn||S.type===An&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ut(P,S){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",U));const Q=S.source;let se=p.get(Q);se===void 0&&(se={},p.set(Q,se));const j=X(S);if(j!==P.__cacheKey){se[j]===void 0&&(se[j]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),se[j].usedTimes++;const Ue=se[P.__cacheKey];Ue!==void 0&&(se[P.__cacheKey].usedTimes--,Ue.usedTimes===0&&b(S)),P.__cacheKey=j,P.__webglTexture=se[j].texture}return G}function ht(P,S,G){return Math.floor(Math.floor(P/G)/S)}function ee(P,S,G,Q){const j=P.updateRanges;if(j.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,G,Q,S.data);else{j.sort((ce,ye)=>ce.start-ye.start);let Ue=0;for(let ce=1;ce<j.length;ce++){const ye=j[Ue],Ve=j[ce],De=ye.start+ye.count,xe=ht(Ve.start,S.width,4),Ke=ht(ye.start,S.width,4);Ve.start<=De+1&&xe===Ke&&ht(Ve.start+Ve.count-1,S.width,4)===xe?ye.count=Math.max(ye.count,Ve.start+Ve.count-ye.start):(++Ue,j[Ue]=Ve)}j.length=Ue+1;const fe=r.getParameter(r.UNPACK_ROW_LENGTH),Pe=r.getParameter(r.UNPACK_SKIP_PIXELS),Le=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let ce=0,ye=j.length;ce<ye;ce++){const Ve=j[ce],De=Math.floor(Ve.start/4),xe=Math.ceil(Ve.count/4),Ke=De%S.width,O=Math.floor(De/S.width),ue=xe,pe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ke),r.pixelStorei(r.UNPACK_SKIP_ROWS,O),t.texSubImage2D(r.TEXTURE_2D,0,Ke,O,ue,pe,G,Q,S.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,fe),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Pe),r.pixelStorei(r.UNPACK_SKIP_ROWS,Le)}}function _e(P,S,G){let Q=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=r.TEXTURE_3D);const se=ut(P,S),j=S.source;t.bindTexture(Q,P.__webglTexture,r.TEXTURE0+G);const Ue=n.get(j);if(j.version!==Ue.__version||se===!0){t.activeTexture(r.TEXTURE0+G);const fe=ot.getPrimaries(ot.workingColorSpace),Pe=S.colorSpace===ai?null:ot.getPrimaries(S.colorSpace),Le=S.colorSpace===ai||fe===Pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ce=y(S.image,!1,s.maxTextureSize);ce=It(S,ce);const ye=i.convert(S.format,S.colorSpace),Ve=i.convert(S.type);let De=w(S.internalFormat,ye,Ve,S.colorSpace,S.isVideoTexture);qe(Q,S);let xe;const Ke=S.mipmaps,O=S.isVideoTexture!==!0,ue=Ue.__version===void 0||se===!0,pe=j.dataReady,Ae=I(S,ce);if(S.isDepthTexture)De=E(S.format===zs,S.type),ue&&(O?t.texStorage2D(r.TEXTURE_2D,1,De,ce.width,ce.height):t.texImage2D(r.TEXTURE_2D,0,De,ce.width,ce.height,0,ye,Ve,null));else if(S.isDataTexture)if(Ke.length>0){O&&ue&&t.texStorage2D(r.TEXTURE_2D,Ae,De,Ke[0].width,Ke[0].height);for(let ae=0,te=Ke.length;ae<te;ae++)xe=Ke[ae],O?pe&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,xe.width,xe.height,ye,Ve,xe.data):t.texImage2D(r.TEXTURE_2D,ae,De,xe.width,xe.height,0,ye,Ve,xe.data);S.generateMipmaps=!1}else O?(ue&&t.texStorage2D(r.TEXTURE_2D,Ae,De,ce.width,ce.height),pe&&ee(S,ce,ye,Ve)):t.texImage2D(r.TEXTURE_2D,0,De,ce.width,ce.height,0,ye,Ve,ce.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){O&&ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,De,Ke[0].width,Ke[0].height,ce.depth);for(let ae=0,te=Ke.length;ae<te;ae++)if(xe=Ke[ae],S.format!==_n)if(ye!==null)if(O){if(pe)if(S.layerUpdates.size>0){const Ce=Cc(xe.width,xe.height,S.format,S.type);for(const $e of S.layerUpdates){const _t=xe.data.subarray($e*Ce/xe.data.BYTES_PER_ELEMENT,($e+1)*Ce/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,$e,xe.width,xe.height,1,ye,_t)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,ce.depth,ye,xe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ae,De,xe.width,xe.height,ce.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?pe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,ce.depth,ye,Ve,xe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ae,De,xe.width,xe.height,ce.depth,0,ye,Ve,xe.data)}else{O&&ue&&t.texStorage2D(r.TEXTURE_2D,Ae,De,Ke[0].width,Ke[0].height);for(let ae=0,te=Ke.length;ae<te;ae++)xe=Ke[ae],S.format!==_n?ye!==null?O?pe&&t.compressedTexSubImage2D(r.TEXTURE_2D,ae,0,0,xe.width,xe.height,ye,xe.data):t.compressedTexImage2D(r.TEXTURE_2D,ae,De,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?pe&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,xe.width,xe.height,ye,Ve,xe.data):t.texImage2D(r.TEXTURE_2D,ae,De,xe.width,xe.height,0,ye,Ve,xe.data)}else if(S.isDataArrayTexture)if(O){if(ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,De,ce.width,ce.height,ce.depth),pe)if(S.layerUpdates.size>0){const ae=Cc(ce.width,ce.height,S.format,S.type);for(const te of S.layerUpdates){const Ce=ce.data.subarray(te*ae/ce.data.BYTES_PER_ELEMENT,(te+1)*ae/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,te,ce.width,ce.height,1,ye,Ve,Ce)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ye,Ve,ce.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,De,ce.width,ce.height,ce.depth,0,ye,Ve,ce.data);else if(S.isData3DTexture)O?(ue&&t.texStorage3D(r.TEXTURE_3D,Ae,De,ce.width,ce.height,ce.depth),pe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ye,Ve,ce.data)):t.texImage3D(r.TEXTURE_3D,0,De,ce.width,ce.height,ce.depth,0,ye,Ve,ce.data);else if(S.isFramebufferTexture){if(ue)if(O)t.texStorage2D(r.TEXTURE_2D,Ae,De,ce.width,ce.height);else{let ae=ce.width,te=ce.height;for(let Ce=0;Ce<Ae;Ce++)t.texImage2D(r.TEXTURE_2D,Ce,De,ae,te,0,ye,Ve,null),ae>>=1,te>>=1}}else if(Ke.length>0){if(O&&ue){const ae=wt(Ke[0]);t.texStorage2D(r.TEXTURE_2D,Ae,De,ae.width,ae.height)}for(let ae=0,te=Ke.length;ae<te;ae++)xe=Ke[ae],O?pe&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,ye,Ve,xe):t.texImage2D(r.TEXTURE_2D,ae,De,ye,Ve,xe);S.generateMipmaps=!1}else if(O){if(ue){const ae=wt(ce);t.texStorage2D(r.TEXTURE_2D,Ae,De,ae.width,ae.height)}pe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ye,Ve,ce)}else t.texImage2D(r.TEXTURE_2D,0,De,ye,Ve,ce);x(S)&&m(Q),Ue.__version=j.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function de(P,S,G){if(S.image.length!==6)return;const Q=ut(P,S),se=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+G);const j=n.get(se);if(se.version!==j.__version||Q===!0){t.activeTexture(r.TEXTURE0+G);const Ue=ot.getPrimaries(ot.workingColorSpace),fe=S.colorSpace===ai?null:ot.getPrimaries(S.colorSpace),Pe=S.colorSpace===ai||Ue===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Le=S.isCompressedTexture||S.image[0].isCompressedTexture,ce=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let te=0;te<6;te++)!Le&&!ce?ye[te]=y(S.image[te],!0,s.maxCubemapSize):ye[te]=ce?S.image[te].image:S.image[te],ye[te]=It(S,ye[te]);const Ve=ye[0],De=i.convert(S.format,S.colorSpace),xe=i.convert(S.type),Ke=w(S.internalFormat,De,xe,S.colorSpace),O=S.isVideoTexture!==!0,ue=j.__version===void 0||Q===!0,pe=se.dataReady;let Ae=I(S,Ve);qe(r.TEXTURE_CUBE_MAP,S);let ae;if(Le){O&&ue&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ae,Ke,Ve.width,Ve.height);for(let te=0;te<6;te++){ae=ye[te].mipmaps;for(let Ce=0;Ce<ae.length;Ce++){const $e=ae[Ce];S.format!==_n?De!==null?O?pe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce,0,0,$e.width,$e.height,De,$e.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce,Ke,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce,0,0,$e.width,$e.height,De,xe,$e.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce,Ke,$e.width,$e.height,0,De,xe,$e.data)}}}else{if(ae=S.mipmaps,O&&ue){ae.length>0&&Ae++;const te=wt(ye[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ae,Ke,te.width,te.height)}for(let te=0;te<6;te++)if(ce){O?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ye[te].width,ye[te].height,De,xe,ye[te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ke,ye[te].width,ye[te].height,0,De,xe,ye[te].data);for(let Ce=0;Ce<ae.length;Ce++){const _t=ae[Ce].image[te].image;O?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce+1,0,0,_t.width,_t.height,De,xe,_t.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce+1,Ke,_t.width,_t.height,0,De,xe,_t.data)}}else{O?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,De,xe,ye[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ke,De,xe,ye[te]);for(let Ce=0;Ce<ae.length;Ce++){const $e=ae[Ce];O?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce+1,0,0,De,xe,$e.image[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce+1,Ke,De,xe,$e.image[te])}}}x(S)&&m(r.TEXTURE_CUBE_MAP),j.__version=se.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ke(P,S,G,Q,se,j){const Ue=i.convert(G.format,G.colorSpace),fe=i.convert(G.type),Pe=w(G.internalFormat,Ue,fe,G.colorSpace),Le=n.get(S),ce=n.get(G);if(ce.__renderTarget=S,!Le.__hasExternalTextures){const ye=Math.max(1,S.width>>j),Ve=Math.max(1,S.height>>j);se===r.TEXTURE_3D||se===r.TEXTURE_2D_ARRAY?t.texImage3D(se,j,Pe,ye,Ve,S.depth,0,Ue,fe,null):t.texImage2D(se,j,Pe,ye,Ve,0,Ue,fe,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),Te(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,se,ce.__webglTexture,0,pt(S)):(se===r.TEXTURE_2D||se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,se,ce.__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ze(P,S,G){if(r.bindRenderbuffer(r.RENDERBUFFER,P),S.depthBuffer){const Q=S.depthTexture,se=Q&&Q.isDepthTexture?Q.type:null,j=E(S.stencilBuffer,se),Ue=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=pt(S);Te(S)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,j,S.width,S.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,j,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,j,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ue,r.RENDERBUFFER,P)}else{const Q=S.textures;for(let se=0;se<Q.length;se++){const j=Q[se],Ue=i.convert(j.format,j.colorSpace),fe=i.convert(j.type),Pe=w(j.internalFormat,Ue,fe,j.colorSpace),Le=pt(S);G&&Te(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Le,Pe,S.width,S.height):Te(S)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Le,Pe,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Pe,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ye(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(S.depthTexture);Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ne(S.depthTexture,0);const se=Q.__webglTexture,j=pt(S);if(S.depthTexture.format===ks)Te(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0);else if(S.depthTexture.format===zs)Te(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ct(P){const S=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const Q=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const se=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",se)};Q.addEventListener("dispose",se),S.__depthDisposeCallback=se}S.__boundDepthTexture=Q}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const Q=P.texture.mipmaps;Q&&Q.length>0?Ye(S.__webglFramebuffer[0],P):Ye(S.__webglFramebuffer,P)}else if(G){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=r.createRenderbuffer(),ze(S.__webglDepthbuffer[Q],P,!1);else{const se=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,j)}}else{const Q=P.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),ze(S.__webglDepthbuffer,P,!1);else{const se=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,j)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function st(P,S,G){const Q=n.get(P);S!==void 0&&ke(Q.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Ct(P)}function F(P){const S=P.texture,G=n.get(P),Q=n.get(S);P.addEventListener("dispose",N);const se=P.textures,j=P.isWebGLCubeRenderTarget===!0,Ue=se.length>1;if(Ue||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=S.version,a.memory.textures++),j){G.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[fe]=[];for(let Pe=0;Pe<S.mipmaps.length;Pe++)G.__webglFramebuffer[fe][Pe]=r.createFramebuffer()}else G.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let fe=0;fe<S.mipmaps.length;fe++)G.__webglFramebuffer[fe]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(Ue)for(let fe=0,Pe=se.length;fe<Pe;fe++){const Le=n.get(se[fe]);Le.__webglTexture===void 0&&(Le.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&Te(P)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let fe=0;fe<se.length;fe++){const Pe=se[fe];G.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[fe]);const Le=i.convert(Pe.format,Pe.colorSpace),ce=i.convert(Pe.type),ye=w(Pe.internalFormat,Le,ce,Pe.colorSpace,P.isXRRenderTarget===!0),Ve=pt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve,ye,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,G.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),ze(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),qe(r.TEXTURE_CUBE_MAP,S);for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Pe=0;Pe<S.mipmaps.length;Pe++)ke(G.__webglFramebuffer[fe][Pe],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe);else ke(G.__webglFramebuffer[fe],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);x(S)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let fe=0,Pe=se.length;fe<Pe;fe++){const Le=se[fe],ce=n.get(Le);let ye=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ye=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ye,ce.__webglTexture),qe(ye,Le),ke(G.__webglFramebuffer,P,Le,r.COLOR_ATTACHMENT0+fe,ye,0),x(Le)&&m(ye)}t.unbindTexture()}else{let fe=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(fe=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(fe,Q.__webglTexture),qe(fe,S),S.mipmaps&&S.mipmaps.length>0)for(let Pe=0;Pe<S.mipmaps.length;Pe++)ke(G.__webglFramebuffer[Pe],P,S,r.COLOR_ATTACHMENT0,fe,Pe);else ke(G.__webglFramebuffer,P,S,r.COLOR_ATTACHMENT0,fe,0);x(S)&&m(fe),t.unbindTexture()}P.depthBuffer&&Ct(P)}function yt(P){const S=P.textures;for(let G=0,Q=S.length;G<Q;G++){const se=S[G];if(x(se)){const j=C(P),Ue=n.get(se).__webglTexture;t.bindTexture(j,Ue),m(j),t.unbindTexture()}}}const Fe=[],rt=[];function Ne(P){if(P.samples>0){if(Te(P)===!1){const S=P.textures,G=P.width,Q=P.height;let se=r.COLOR_BUFFER_BIT;const j=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ue=n.get(P),fe=S.length>1;if(fe)for(let Le=0;Le<S.length;Le++)t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const Pe=P.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Le=0;Le<S.length;Le++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(se|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(se|=r.STENCIL_BUFFER_BIT)),fe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[Le]);const ce=n.get(S[Le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ce,0)}r.blitFramebuffer(0,0,G,Q,0,0,G,Q,se,r.NEAREST),c===!0&&(Fe.length=0,rt.length=0,Fe.push(r.COLOR_ATTACHMENT0+Le),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Fe.push(j),rt.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,rt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let Le=0;Le<S.length;Le++){t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[Le]);const ce=n.get(S[Le]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,ce,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const S=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function pt(P){return Math.min(s.maxSamples,P.samples)}function Te(P){const S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function je(P){const S=a.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function It(P,S){const G=P.colorSpace,Q=P.format,se=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==en&&G!==ai&&(ot.getTransfer(G)===St?(Q!==_n||se!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function wt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(o.width=P.naturalWidth||P.width,o.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(o.width=P.displayWidth,o.height=P.displayHeight):(o.width=P.width,o.height=P.height),o}this.allocateTextureUnit=q,this.resetTextureUnits=Z,this.setTexture2D=ne,this.setTexture2DArray=K,this.setTexture3D=oe,this.setTextureCube=Y,this.rebindTextures=st,this.setupRenderTarget=F,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=Te}function p0(r,e){function t(n,s=ai){let i;const a=ot.getTransfer(s);if(n===Dn)return r.UNSIGNED_BYTE;if(n===$o)return r.UNSIGNED_SHORT_4_4_4_4;if(n===qo)return r.UNSIGNED_SHORT_5_5_5_1;if(n===vu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===_u)return r.BYTE;if(n===xu)return r.SHORT;if(n===Os)return r.UNSIGNED_SHORT;if(n===Xo)return r.INT;if(n===Ai)return r.UNSIGNED_INT;if(n===An)return r.FLOAT;if(n===Ws)return r.HALF_FLOAT;if(n===Mu)return r.ALPHA;if(n===yu)return r.RGB;if(n===_n)return r.RGBA;if(n===ks)return r.DEPTH_COMPONENT;if(n===zs)return r.DEPTH_STENCIL;if(n===Yo)return r.RED;if(n===Ko)return r.RED_INTEGER;if(n===Su)return r.RG;if(n===jo)return r.RG_INTEGER;if(n===Zo)return r.RGBA_INTEGER;if(n===Lr||n===Ir||n===Dr||n===Ur)if(a===St)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(n===Lr)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ir)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Dr)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ur)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(n===Lr)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ir)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Dr)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ur)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===co||n===uo||n===ho||n===fo)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(n===co)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uo)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ho)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fo)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===po||n===mo||n===go)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(n===po||n===mo)return a===St?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===go)return a===St?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_o||n===xo||n===vo||n===Mo||n===yo||n===So||n===Eo||n===To||n===bo||n===Ao||n===wo||n===Ro||n===Co||n===Po)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(n===_o)return a===St?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xo)return a===St?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vo)return a===St?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mo)return a===St?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yo)return a===St?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===So)return a===St?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Eo)return a===St?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===To)return a===St?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bo)return a===St?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ao)return a===St?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wo)return a===St?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ro)return a===St?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Co)return a===St?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Po)return a===St?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nr||n===Lo||n===Io)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(n===Nr)return a===St?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lo)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Io)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eu||n===Do||n===Uo||n===No)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(n===Nr)return i.COMPRESSED_RED_RGTC1_EXT;if(n===Do)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uo)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===No)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Ku extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const m0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ku(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ui({vertexShader:m0,fragmentShader:g0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nn(new $r(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class x0 extends hs{constructor(e,t){super();const n=this;let s=null,i=1,a=null,l="local-floor",c=1,o=null,h=null,f=null,p=null,g=null,v=null;const y=new _0,x={},m=t.getContextAttributes();let C=null,w=null;const E=[],I=[],U=new it;let N=null;const k=new $t;k.viewport=new dt;const b=new $t;b.viewport=new dt;const A=[k,b],L=new Pd;let Z=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let _e=E[ee];return _e===void 0&&(_e=new wa,E[ee]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(ee){let _e=E[ee];return _e===void 0&&(_e=new wa,E[ee]=_e),_e.getGripSpace()},this.getHand=function(ee){let _e=E[ee];return _e===void 0&&(_e=new wa,E[ee]=_e),_e.getHandSpace()};function X(ee){const _e=I.indexOf(ee.inputSource);if(_e===-1)return;const de=E[_e];de!==void 0&&(de.update(ee.inputSource,ee.frame,o||a),de.dispatchEvent({type:ee.type,data:ee.inputSource}))}function ne(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",ne),s.removeEventListener("inputsourceschange",K);for(let ee=0;ee<E.length;ee++){const _e=I[ee];_e!==null&&(I[ee]=null,E[ee].disconnect(_e))}Z=null,q=null,y.reset();for(const ee in x)delete x[ee];e.setRenderTarget(C),g=null,p=null,f=null,s=null,w=null,ht.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){i=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){l=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||a},this.setReferenceSpace=function(ee){o=ee},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",ne),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(U),typeof XRWebGLBinding<"u"&&(f=new XRWebGLBinding(s,t)),f!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,ke=null,ze=null;m.depth&&(ze=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?zs:ks,ke=m.stencil?Bs:Ai);const Ye={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:i};p=f.createProjectionLayer(Ye),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),w=new wi(p.textureWidth,p.textureHeight,{format:_n,type:Dn,depthTexture:new ku(p.textureWidth,p.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:i};g=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),w=new wi(g.framebufferWidth,g.framebufferHeight,{format:_n,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),o=null,a=await s.requestReferenceSpace(l),ht.setContext(s),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(ee){for(let _e=0;_e<ee.removed.length;_e++){const de=ee.removed[_e],ke=I.indexOf(de);ke>=0&&(I[ke]=null,E[ke].disconnect(de))}for(let _e=0;_e<ee.added.length;_e++){const de=ee.added[_e];let ke=I.indexOf(de);if(ke===-1){for(let Ye=0;Ye<E.length;Ye++)if(Ye>=I.length){I.push(de),ke=Ye;break}else if(I[Ye]===null){I[Ye]=de,ke=Ye;break}if(ke===-1)break}const ze=E[ke];ze&&ze.connect(de)}}const oe=new B,Y=new B;function me(ee,_e,de){oe.setFromMatrixPosition(_e.matrixWorld),Y.setFromMatrixPosition(de.matrixWorld);const ke=oe.distanceTo(Y),ze=_e.projectionMatrix.elements,Ye=de.projectionMatrix.elements,Ct=ze[14]/(ze[10]-1),st=ze[14]/(ze[10]+1),F=(ze[9]+1)/ze[5],yt=(ze[9]-1)/ze[5],Fe=(ze[8]-1)/ze[0],rt=(Ye[8]+1)/Ye[0],Ne=Ct*Fe,pt=Ct*rt,Te=ke/(-Fe+rt),je=Te*-Fe;if(_e.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(je),ee.translateZ(Te),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),ze[10]===-1)ee.projectionMatrix.copy(_e.projectionMatrix),ee.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const It=Ct+Te,wt=st+Te,P=Ne-je,S=pt+(ke-je),G=F*st/wt*It,Q=yt*st/wt*It;ee.projectionMatrix.makePerspective(P,S,G,Q,It,wt),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ge(ee,_e){_e===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(_e.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let _e=ee.near,de=ee.far;y.texture!==null&&(y.depthNear>0&&(_e=y.depthNear),y.depthFar>0&&(de=y.depthFar)),L.near=b.near=k.near=_e,L.far=b.far=k.far=de,(Z!==L.near||q!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),Z=L.near,q=L.far),L.layers.mask=ee.layers.mask|6,k.layers.mask=L.layers.mask&3,b.layers.mask=L.layers.mask&5;const ke=ee.parent,ze=L.cameras;ge(L,ke);for(let Ye=0;Ye<ze.length;Ye++)ge(ze[Ye],ke);ze.length===2?me(L,k,b):L.projectionMatrix.copy(k.projectionMatrix),Ie(ee,L,ke)};function Ie(ee,_e,de){de===null?ee.matrix.copy(_e.matrixWorld):(ee.matrix.copy(de.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(_e.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(_e.projectionMatrix),ee.projectionMatrixInverse.copy(_e.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=as*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(p===null&&g===null))return c},this.setFoveation=function(ee){c=ee,p!==null&&(p.fixedFoveation=ee),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(L)},this.getCameraTexture=function(ee){return x[ee]};let qe=null;function ut(ee,_e){if(h=_e.getViewerPose(o||a),v=_e,h!==null){const de=h.views;g!==null&&(e.setRenderTargetFramebuffer(w,g.framebuffer),e.setRenderTarget(w));let ke=!1;de.length!==L.cameras.length&&(L.cameras.length=0,ke=!0);for(let st=0;st<de.length;st++){const F=de[st];let yt=null;if(g!==null)yt=g.getViewport(F);else{const rt=f.getViewSubImage(p,F);yt=rt.viewport,st===0&&(e.setRenderTargetTextures(w,rt.colorTexture,rt.depthStencilTexture),e.setRenderTarget(w))}let Fe=A[st];Fe===void 0&&(Fe=new $t,Fe.layers.enable(st),Fe.viewport=new dt,A[st]=Fe),Fe.matrix.fromArray(F.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(F.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(yt.x,yt.y,yt.width,yt.height),st===0&&(L.matrix.copy(Fe.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ke===!0&&L.cameras.push(Fe)}const ze=s.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&f){const st=f.getDepthInformation(de[0]);st&&st.isValid&&st.texture&&y.init(st,s.renderState)}if(ze&&ze.includes("camera-access")&&(e.state.unbindTexture(),f))for(let st=0;st<de.length;st++){const F=de[st].camera;if(F){let yt=x[F];yt||(yt=new Ku,x[F]=yt);const Fe=f.getCameraImage(F);yt.sourceTexture=Fe}}}for(let de=0;de<E.length;de++){const ke=I[de],ze=E[de];ke!==null&&ze!==void 0&&ze.update(ke,_e,o||a)}qe&&qe(ee,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),v=null}const ht=new Wu;ht.setAnimationLoop(ut),this.setAnimationLoop=function(ee){qe=ee},this.dispose=function(){}}}const xi=new xn,v0=new Qe;function M0(r,e){function t(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function n(x,m){m.color.getRGB(x.fogColor.value,Iu(r)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,C,w,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(x,m):m.isMeshToonMaterial?(i(x,m),f(x,m)):m.isMeshPhongMaterial?(i(x,m),h(x,m)):m.isMeshStandardMaterial?(i(x,m),p(x,m),m.isMeshPhysicalMaterial&&g(x,m,E)):m.isMeshMatcapMaterial?(i(x,m),v(x,m)):m.isMeshDepthMaterial?i(x,m):m.isMeshDistanceMaterial?(i(x,m),y(x,m)):m.isMeshNormalMaterial?i(x,m):m.isLineBasicMaterial?(a(x,m),m.isLineDashedMaterial&&l(x,m)):m.isPointsMaterial?c(x,m,C,w):m.isSpriteMaterial?o(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,t(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===sn&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,t(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===sn&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,t(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,t(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);const C=e.get(m),w=C.envMap,E=C.envMapRotation;w&&(x.envMap.value=w,xi.copy(E),xi.x*=-1,xi.y*=-1,xi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),x.envMapRotation.value.setFromMatrix4(v0.makeRotationFromEuler(xi)),x.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,x.aoMapTransform))}function a(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform))}function l(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function c(x,m,C,w){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*C,x.scale.value=w*.5,m.map&&(x.map.value=m.map,t(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function o(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function f(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function p(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function g(x,m,C){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,x.specularIntensityMapTransform))}function v(x,m){m.matcap&&(x.matcap.value=m.matcap)}function y(x,m){const C=e.get(m).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function y0(r,e,t,n){let s={},i={},a=[];const l=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,w){const E=w.program;n.uniformBlockBinding(C,E)}function o(C,w){let E=s[C.id];E===void 0&&(v(C),E=h(C),s[C.id]=E,C.addEventListener("dispose",x));const I=w.program;n.updateUBOMapping(C,I);const U=e.render.frame;i[C.id]!==U&&(p(C),i[C.id]=U)}function h(C){const w=f();C.__bindingPointIndex=w;const E=r.createBuffer(),I=C.__size,U=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,I,U),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,E),E}function f(){for(let C=0;C<l;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(C){const w=s[C.id],E=C.uniforms,I=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let U=0,N=E.length;U<N;U++){const k=Array.isArray(E[U])?E[U]:[E[U]];for(let b=0,A=k.length;b<A;b++){const L=k[b];if(g(L,U,b,I)===!0){const Z=L.__offset,q=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let ne=0;ne<q.length;ne++){const K=q[ne],oe=y(K);typeof K=="number"||typeof K=="boolean"?(L.__data[0]=K,r.bufferSubData(r.UNIFORM_BUFFER,Z+X,L.__data)):K.isMatrix3?(L.__data[0]=K.elements[0],L.__data[1]=K.elements[1],L.__data[2]=K.elements[2],L.__data[3]=0,L.__data[4]=K.elements[3],L.__data[5]=K.elements[4],L.__data[6]=K.elements[5],L.__data[7]=0,L.__data[8]=K.elements[6],L.__data[9]=K.elements[7],L.__data[10]=K.elements[8],L.__data[11]=0):(K.toArray(L.__data,X),X+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function g(C,w,E,I){const U=C.value,N=w+"_"+E;if(I[N]===void 0)return typeof U=="number"||typeof U=="boolean"?I[N]=U:I[N]=U.clone(),!0;{const k=I[N];if(typeof U=="number"||typeof U=="boolean"){if(k!==U)return I[N]=U,!0}else if(k.equals(U)===!1)return k.copy(U),!0}return!1}function v(C){const w=C.uniforms;let E=0;const I=16;for(let N=0,k=w.length;N<k;N++){const b=Array.isArray(w[N])?w[N]:[w[N]];for(let A=0,L=b.length;A<L;A++){const Z=b[A],q=Array.isArray(Z.value)?Z.value:[Z.value];for(let X=0,ne=q.length;X<ne;X++){const K=q[X],oe=y(K),Y=E%I,me=Y%oe.boundary,ge=Y+me;E+=me,ge!==0&&I-ge<oe.storage&&(E+=I-ge),Z.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=E,E+=oe.storage}}}const U=E%I;return U>0&&(E+=I-U),C.__size=E,C.__cache={},this}function y(C){const w={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(w.boundary=4,w.storage=4):C.isVector2?(w.boundary=8,w.storage=8):C.isVector3||C.isColor?(w.boundary=16,w.storage=12):C.isVector4?(w.boundary=16,w.storage=16):C.isMatrix3?(w.boundary=48,w.storage=48):C.isMatrix4?(w.boundary=64,w.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),w}function x(C){const w=C.target;w.removeEventListener("dispose",x);const E=a.indexOf(w.__bindingPointIndex);a.splice(E,1),r.deleteBuffer(s[w.id]),delete s[w.id],delete i[w.id]}function m(){for(const C in s)r.deleteBuffer(s[C]);a=[],s={},i={}}return{bind:c,update:o,dispose:m}}class S0{constructor(e={}){const{canvas:t=bf(),context:n=null,depth:s=!0,stencil:i=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:o=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const v=new Uint32Array(4),y=new Int32Array(4);let x=null,m=null;const C=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let I=!1;this._outputColorSpace=Vt;let U=0,N=0,k=null,b=-1,A=null;const L=new dt,Z=new dt;let q=null;const X=new We(0);let ne=0,K=t.width,oe=t.height,Y=1,me=null,ge=null;const Ie=new dt(0,0,K,oe),qe=new dt(0,0,K,oe);let ut=!1;const ht=new il;let ee=!1,_e=!1;const de=new Qe,ke=new B,ze=new dt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function st(){return k===null?Y:1}let F=n;function yt(T,z){return t.getContext(T,z)}try{const T={alpha:!0,depth:s,stencil:i,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:o,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Go}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",ae,!1),F===null){const z="webgl2";if(F=yt(z,T),F===null)throw yt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Fe,rt,Ne,pt,Te,je,It,wt,P,S,G,Q,se,j,Ue,fe,Pe,Le,ce,ye,Ve,De,xe,Ke;function O(){Fe=new Ig(F),Fe.init(),De=new p0(F,Fe),rt=new bg(F,Fe,e,De),Ne=new f0(F,Fe),rt.reversedDepthBuffer&&p&&Ne.buffers.depth.setReversed(!0),pt=new Ng(F),Te=new Q_,je=new d0(F,Fe,Ne,Te,rt,De,pt),It=new wg(E),wt=new Lg(E),P=new Hd(F),xe=new Eg(F,P),S=new Dg(F,P,pt,xe),G=new Og(F,S,P,pt),ce=new Fg(F,rt,je),fe=new Ag(Te),Q=new J_(E,It,wt,Fe,rt,xe,fe),se=new M0(E,Te),j=new t0,Ue=new o0(Fe),Le=new Sg(E,It,wt,Ne,G,g,c),Pe=new u0(E,G,rt),Ke=new y0(F,pt,rt,Ne),ye=new Tg(F,Fe,pt),Ve=new Ug(F,Fe,pt),pt.programs=Q.programs,E.capabilities=rt,E.extensions=Fe,E.properties=Te,E.renderLists=j,E.shadowMap=Pe,E.state=Ne,E.info=pt}O();const ue=new x0(E,F);this.xr=ue,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=Fe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Fe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(K,oe,!1))},this.getSize=function(T){return T.set(K,oe)},this.setSize=function(T,z,W=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=T,oe=z,t.width=Math.floor(T*Y),t.height=Math.floor(z*Y),W===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(K*Y,oe*Y).floor()},this.setDrawingBufferSize=function(T,z,W){K=T,oe=z,Y=W,t.width=Math.floor(T*W),t.height=Math.floor(z*W),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(Ie)},this.setViewport=function(T,z,W,$){T.isVector4?Ie.set(T.x,T.y,T.z,T.w):Ie.set(T,z,W,$),Ne.viewport(L.copy(Ie).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(qe)},this.setScissor=function(T,z,W,$){T.isVector4?qe.set(T.x,T.y,T.z,T.w):qe.set(T,z,W,$),Ne.scissor(Z.copy(qe).multiplyScalar(Y).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(T){Ne.setScissorTest(ut=T)},this.setOpaqueSort=function(T){me=T},this.setTransparentSort=function(T){ge=T},this.getClearColor=function(T){return T.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,W=!0){let $=0;if(T){let H=!1;if(k!==null){const le=k.texture.format;H=le===Zo||le===jo||le===Ko}if(H){const le=k.texture.type,Se=le===Dn||le===Ai||le===Os||le===Bs||le===$o||le===qo,we=Le.getClearColor(),be=Le.getClearAlpha(),He=we.r,Ge=we.g,Oe=we.b;Se?(v[0]=He,v[1]=Ge,v[2]=Oe,v[3]=be,F.clearBufferuiv(F.COLOR,0,v)):(y[0]=He,y[1]=Ge,y[2]=Oe,y[3]=be,F.clearBufferiv(F.COLOR,0,y))}else $|=F.COLOR_BUFFER_BIT}z&&($|=F.DEPTH_BUFFER_BIT),W&&($|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Le.dispose(),j.dispose(),Ue.dispose(),Te.dispose(),It.dispose(),wt.dispose(),G.dispose(),xe.dispose(),Ke.dispose(),Q.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",hn),ue.removeEventListener("sessionend",qs),On.stop()};function pe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const T=pt.autoReset,z=Pe.enabled,W=Pe.autoUpdate,$=Pe.needsUpdate,H=Pe.type;O(),pt.autoReset=T,Pe.enabled=z,Pe.autoUpdate=W,Pe.needsUpdate=$,Pe.type=H}function ae(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function te(T){const z=T.target;z.removeEventListener("dispose",te),Ce(z)}function Ce(T){$e(T),Te.remove(T)}function $e(T){const z=Te.get(T).programs;z!==void 0&&(z.forEach(function(W){Q.releaseProgram(W)}),T.isShaderMaterial&&Q.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,W,$,H,le){z===null&&(z=Ye);const Se=H.isMesh&&H.matrixWorld.determinant()<0,we=Yr(T,z,W,$,H);Ne.setMaterial($,Se);let be=W.index,He=1;if($.wireframe===!0){if(be=S.getWireframeAttribute(W),be===void 0)return;He=2}const Ge=W.drawRange,Oe=W.attributes.position;let et=Ge.start*He,ft=(Ge.start+Ge.count)*He;le!==null&&(et=Math.max(et,le.start*He),ft=Math.min(ft,(le.start+le.count)*He)),be!==null?(et=Math.max(et,0),ft=Math.min(ft,be.count)):Oe!=null&&(et=Math.max(et,0),ft=Math.min(ft,Oe.count));const Rt=ft-et;if(Rt<0||Rt===1/0)return;xe.setup(H,$,we,W,be);let Tt,mt=ye;if(be!==null&&(Tt=P.get(be),mt=Ve,mt.setIndex(Tt)),H.isMesh)$.wireframe===!0?(Ne.setLineWidth($.wireframeLinewidth*st()),mt.setMode(F.LINES)):mt.setMode(F.TRIANGLES);else if(H.isLine){let Be=$.linewidth;Be===void 0&&(Be=1),Ne.setLineWidth(Be*st()),H.isLineSegments?mt.setMode(F.LINES):H.isLineLoop?mt.setMode(F.LINE_LOOP):mt.setMode(F.LINE_STRIP)}else H.isPoints?mt.setMode(F.POINTS):H.isSprite&&mt.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Ji("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))mt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Be=H._multiDrawStarts,At=H._multiDrawCounts,at=H._multiDrawCount,qt=be?P.get(be).bytesPerElement:1,Zn=Te.get($).currentProgram.getUniforms();for(let Gt=0;Gt<at;Gt++)Zn.setValue(F,"_gl_DrawID",Gt),mt.render(Be[Gt]/qt,At[Gt])}else if(H.isInstancedMesh)mt.renderInstances(et,Rt,H.count);else if(W.isInstancedBufferGeometry){const Be=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,At=Math.min(W.instanceCount,Be);mt.renderInstances(et,Rt,At)}else mt.render(et,Rt)};function _t(T,z,W){T.transparent===!0&&T.side===Ln&&T.forceSinglePass===!1?(T.side=sn,T.needsUpdate=!0,Pi(T,z,W),T.side=jn,T.needsUpdate=!0,Pi(T,z,W),T.side=Ln):Pi(T,z,W)}this.compile=function(T,z,W=null){W===null&&(W=T),m=Ue.get(W),m.init(z),w.push(m),W.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),T!==W&&T.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const $=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const le=H.material;if(le)if(Array.isArray(le))for(let Se=0;Se<le.length;Se++){const we=le[Se];_t(we,W,H),$.add(we)}else _t(le,W,H),$.add(le)}),m=w.pop(),$},this.compileAsync=function(T,z,W=null){const $=this.compile(T,z,W);return new Promise(H=>{function le(){if($.forEach(function(Se){Te.get(Se).currentProgram.isReady()&&$.delete(Se)}),$.size===0){H(T);return}setTimeout(le,10)}Fe.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let lt=null;function vn(T){lt&&lt(T)}function hn(){On.stop()}function qs(){On.start()}const On=new Wu;On.setAnimationLoop(vn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(T){lt=T,ue.setAnimationLoop(T),T===null?On.stop():On.start()},ue.addEventListener("sessionstart",hn),ue.addEventListener("sessionend",qs),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(z),z=ue.getCamera()),T.isScene===!0&&T.onBeforeRender(E,T,z,k),m=Ue.get(T,w.length),m.init(z),w.push(m),de.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ht.setFromProjectionMatrix(de,In,z.reversedDepth),_e=this.localClippingEnabled,ee=fe.init(this.clippingPlanes,_e),x=j.get(T,C.length),x.init(),C.push(x),ue.enabled===!0&&ue.isPresenting===!0){const le=E.xr.getDepthSensingMesh();le!==null&&gs(le,z,-1/0,E.sortObjects)}gs(T,z,0,E.sortObjects),x.finish(),E.sortObjects===!0&&x.sort(me,ge),Ct=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Ct&&Le.addToRenderList(x,T),this.info.render.frame++,ee===!0&&fe.beginShadows();const W=m.state.shadowsArray;Pe.render(W,T,z),ee===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=x.opaque,H=x.transmissive;if(m.setupLights(),z.isArrayCamera){const le=z.cameras;if(H.length>0)for(let Se=0,we=le.length;Se<we;Se++){const be=le[Se];xs($,H,T,be)}Ct&&Le.render(T);for(let Se=0,we=le.length;Se<we;Se++){const be=le[Se];_s(x,T,be,be.viewport)}}else H.length>0&&xs($,H,T,z),Ct&&Le.render(T),_s(x,T,z);k!==null&&N===0&&(je.updateMultisampleRenderTarget(k),je.updateRenderTargetMipmap(k)),T.isScene===!0&&T.onAfterRender(E,T,z),xe.resetDefaultState(),b=-1,A=null,w.pop(),w.length>0?(m=w[w.length-1],ee===!0&&fe.setGlobalState(E.clippingPlanes,m.state.camera)):m=null,C.pop(),C.length>0?x=C[C.length-1]:x=null};function gs(T,z,W,$){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ht.intersectsSprite(T)){$&&ze.setFromMatrixPosition(T.matrixWorld).applyMatrix4(de);const Se=G.update(T),we=T.material;we.visible&&x.push(T,Se,we,W,ze.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ht.intersectsObject(T))){const Se=G.update(T),we=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ze.copy(T.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ze.copy(Se.boundingSphere.center)),ze.applyMatrix4(T.matrixWorld).applyMatrix4(de)),Array.isArray(we)){const be=Se.groups;for(let He=0,Ge=be.length;He<Ge;He++){const Oe=be[He],et=we[Oe.materialIndex];et&&et.visible&&x.push(T,Se,et,W,ze.z,Oe)}}else we.visible&&x.push(T,Se,we,W,ze.z,null)}}const le=T.children;for(let Se=0,we=le.length;Se<we;Se++)gs(le[Se],z,W,$)}function _s(T,z,W,$){const H=T.opaque,le=T.transmissive,Se=T.transparent;m.setupLightsView(W),ee===!0&&fe.setGlobalState(E.clippingPlanes,W),$&&Ne.viewport(L.copy($)),H.length>0&&Ci(H,z,W),le.length>0&&Ci(le,z,W),Se.length>0&&Ci(Se,z,W),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function xs(T,z,W,$){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new wi(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Ws:Dn,minFilter:qn,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const le=m.state.transmissionRenderTarget[$.id],Se=$.viewport||L;le.setSize(Se.z*E.transmissionResolutionScale,Se.w*E.transmissionResolutionScale);const we=E.getRenderTarget(),be=E.getActiveCubeFace(),He=E.getActiveMipmapLevel();E.setRenderTarget(le),E.getClearColor(X),ne=E.getClearAlpha(),ne<1&&E.setClearColor(16777215,.5),E.clear(),Ct&&Le.render(W);const Ge=E.toneMapping;E.toneMapping=ci;const Oe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),ee===!0&&fe.setGlobalState(E.clippingPlanes,$),Ci(T,W,$),je.updateMultisampleRenderTarget(le),je.updateRenderTargetMipmap(le),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let ft=0,Rt=z.length;ft<Rt;ft++){const Tt=z[ft],mt=Tt.object,Be=Tt.geometry,At=Tt.material,at=Tt.group;if(At.side===Ln&&mt.layers.test($.layers)){const qt=At.side;At.side=sn,At.needsUpdate=!0,Ys(mt,W,$,Be,At,at),At.side=qt,At.needsUpdate=!0,et=!0}}et===!0&&(je.updateMultisampleRenderTarget(le),je.updateRenderTargetMipmap(le))}E.setRenderTarget(we,be,He),E.setClearColor(X,ne),Oe!==void 0&&($.viewport=Oe),E.toneMapping=Ge}function Ci(T,z,W){const $=z.isScene===!0?z.overrideMaterial:null;for(let H=0,le=T.length;H<le;H++){const Se=T[H],we=Se.object,be=Se.geometry,He=Se.group;let Ge=Se.material;Ge.allowOverride===!0&&$!==null&&(Ge=$),we.layers.test(W.layers)&&Ys(we,z,W,be,Ge,He)}}function Ys(T,z,W,$,H,le){T.onBeforeRender(E,z,W,$,H,le),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(E,z,W,$,T,le),H.transparent===!0&&H.side===Ln&&H.forceSinglePass===!1?(H.side=sn,H.needsUpdate=!0,E.renderBufferDirect(W,z,$,H,T,le),H.side=jn,H.needsUpdate=!0,E.renderBufferDirect(W,z,$,H,T,le),H.side=Ln):E.renderBufferDirect(W,z,$,H,T,le),T.onAfterRender(E,z,W,$,H,le)}function Pi(T,z,W){z.isScene!==!0&&(z=Ye);const $=Te.get(T),H=m.state.lights,le=m.state.shadowsArray,Se=H.state.version,we=Q.getParameters(T,H.state,le,z,W),be=Q.getProgramCacheKey(we);let He=$.programs;$.environment=T.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(T.isMeshStandardMaterial?wt:It).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,He===void 0&&(T.addEventListener("dispose",te),He=new Map,$.programs=He);let Ge=He.get(be);if(Ge!==void 0){if($.currentProgram===Ge&&$.lightsStateVersion===Se)return js(T,we),Ge}else we.uniforms=Q.getUniforms(T),T.onBeforeCompile(we,E),Ge=Q.acquireProgram(we,be),He.set(be,Ge),$.uniforms=we.uniforms;const Oe=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Oe.clippingPlanes=fe.uniform),js(T,we),$.needsLights=jr(T),$.lightsStateVersion=Se,$.needsLights&&(Oe.ambientLightColor.value=H.state.ambient,Oe.lightProbe.value=H.state.probe,Oe.directionalLights.value=H.state.directional,Oe.directionalLightShadows.value=H.state.directionalShadow,Oe.spotLights.value=H.state.spot,Oe.spotLightShadows.value=H.state.spotShadow,Oe.rectAreaLights.value=H.state.rectArea,Oe.ltc_1.value=H.state.rectAreaLTC1,Oe.ltc_2.value=H.state.rectAreaLTC2,Oe.pointLights.value=H.state.point,Oe.pointLightShadows.value=H.state.pointShadow,Oe.hemisphereLights.value=H.state.hemi,Oe.directionalShadowMap.value=H.state.directionalShadowMap,Oe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Oe.spotShadowMap.value=H.state.spotShadowMap,Oe.spotLightMatrix.value=H.state.spotLightMatrix,Oe.spotLightMap.value=H.state.spotLightMap,Oe.pointShadowMap.value=H.state.pointShadowMap,Oe.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Ge,$.uniformsList=null,Ge}function Ks(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=Or.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function js(T,z){const W=Te.get(T);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function Yr(T,z,W,$,H){z.isScene!==!0&&(z=Ye),je.resetTextureUnits();const le=z.fog,Se=$.isMeshStandardMaterial?z.environment:null,we=k===null?E.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:en,be=($.isMeshStandardMaterial?wt:It).get($.envMap||Se),He=$.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ge=!!W.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Oe=!!W.morphAttributes.position,et=!!W.morphAttributes.normal,ft=!!W.morphAttributes.color;let Rt=ci;$.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Rt=E.toneMapping);const Tt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,mt=Tt!==void 0?Tt.length:0,Be=Te.get($),At=m.state.lights;if(ee===!0&&(_e===!0||T!==A)){const d=T===A&&$.id===b;fe.setState($,T,d)}let at=!1;$.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==At.state.version||Be.outputColorSpace!==we||H.isBatchedMesh&&Be.batching===!1||!H.isBatchedMesh&&Be.batching===!0||H.isBatchedMesh&&Be.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Be.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Be.instancing===!1||!H.isInstancedMesh&&Be.instancing===!0||H.isSkinnedMesh&&Be.skinning===!1||!H.isSkinnedMesh&&Be.skinning===!0||H.isInstancedMesh&&Be.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Be.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Be.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Be.instancingMorph===!1&&H.morphTexture!==null||Be.envMap!==be||$.fog===!0&&Be.fog!==le||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==fe.numPlanes||Be.numIntersection!==fe.numIntersection)||Be.vertexAlphas!==He||Be.vertexTangents!==Ge||Be.morphTargets!==Oe||Be.morphNormals!==et||Be.morphColors!==ft||Be.toneMapping!==Rt||Be.morphTargetsCount!==mt)&&(at=!0):(at=!0,Be.__version=$.version);let qt=Be.currentProgram;at===!0&&(qt=Pi($,z,H));let Zn=!1,Gt=!1,fi=!1;const bt=qt.getUniforms(),Yt=Be.uniforms;if(Ne.useProgram(qt.program)&&(Zn=!0,Gt=!0,fi=!0),$.id!==b&&(b=$.id,Gt=!0),Zn||A!==T){Ne.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),bt.setValue(F,"projectionMatrix",T.projectionMatrix),bt.setValue(F,"viewMatrix",T.matrixWorldInverse);const ve=bt.map.cameraPosition;ve!==void 0&&ve.setValue(F,ke.setFromMatrixPosition(T.matrixWorld)),rt.logarithmicDepthBuffer&&bt.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&bt.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),A!==T&&(A=T,Gt=!0,fi=!0)}if(H.isSkinnedMesh){bt.setOptional(F,H,"bindMatrix"),bt.setOptional(F,H,"bindMatrixInverse");const d=H.skeleton;d&&(d.boneTexture===null&&d.computeBoneTexture(),bt.setValue(F,"boneTexture",d.boneTexture,je))}H.isBatchedMesh&&(bt.setOptional(F,H,"batchingTexture"),bt.setValue(F,"batchingTexture",H._matricesTexture,je),bt.setOptional(F,H,"batchingIdTexture"),bt.setValue(F,"batchingIdTexture",H._indirectTexture,je),bt.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&bt.setValue(F,"batchingColorTexture",H._colorsTexture,je));const tn=W.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&ce.update(H,W,qt),(Gt||Be.receiveShadow!==H.receiveShadow)&&(Be.receiveShadow=H.receiveShadow,bt.setValue(F,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Yt.envMap.value=be,Yt.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&z.environment!==null&&(Yt.envMapIntensity.value=z.environmentIntensity),Gt&&(bt.setValue(F,"toneMappingExposure",E.toneMappingExposure),Be.needsLights&&Kr(Yt,fi),le&&$.fog===!0&&se.refreshFogUniforms(Yt,le),se.refreshMaterialUniforms(Yt,$,Y,oe,m.state.transmissionRenderTarget[T.id]),Or.upload(F,Ks(Be),Yt,je)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Or.upload(F,Ks(Be),Yt,je),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&bt.setValue(F,"center",H.center),bt.setValue(F,"modelViewMatrix",H.modelViewMatrix),bt.setValue(F,"normalMatrix",H.normalMatrix),bt.setValue(F,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const d=$.uniformsGroups;for(let ve=0,Bn=d.length;ve<Bn;ve++){const Mn=d[ve];Ke.update(Mn,qt),Ke.bind(Mn,qt)}}return qt}function Kr(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function jr(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(T,z,W){const $=Te.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Te.get(T.texture).__webglTexture=z,Te.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:W,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){const W=Te.get(T);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0};const Zr=F.createFramebuffer();this.setRenderTarget=function(T,z=0,W=0){k=T,U=z,N=W;let $=!0,H=null,le=!1,Se=!1;if(T){const be=Te.get(T);if(be.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(F.FRAMEBUFFER,null),$=!1;else if(be.__webglFramebuffer===void 0)je.setupRenderTarget(T);else if(be.__hasExternalTextures)je.rebindTextures(T,Te.get(T.texture).__webglTexture,Te.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Oe=T.depthTexture;if(be.__boundDepthTexture!==Oe){if(Oe!==null&&Te.has(Oe)&&(T.width!==Oe.image.width||T.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(T)}}const He=T.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Se=!0);const Ge=Te.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ge[z])?H=Ge[z][W]:H=Ge[z],le=!0):T.samples>0&&je.useMultisampledRTT(T)===!1?H=Te.get(T).__webglMultisampledFramebuffer:Array.isArray(Ge)?H=Ge[W]:H=Ge,L.copy(T.viewport),Z.copy(T.scissor),q=T.scissorTest}else L.copy(Ie).multiplyScalar(Y).floor(),Z.copy(qe).multiplyScalar(Y).floor(),q=ut;if(W!==0&&(H=Zr),Ne.bindFramebuffer(F.FRAMEBUFFER,H)&&$&&Ne.drawBuffers(T,H),Ne.viewport(L),Ne.scissor(Z),Ne.setScissorTest(q),le){const be=Te.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+z,be.__webglTexture,W)}else if(Se){const be=z;for(let He=0;He<T.textures.length;He++){const Ge=Te.get(T.textures[He]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+He,Ge.__webglTexture,W,be)}}else if(T!==null&&W!==0){const be=Te.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,be.__webglTexture,W)}b=-1},this.readRenderTargetPixels=function(T,z,W,$,H,le,Se,we=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be){Ne.bindFramebuffer(F.FRAMEBUFFER,be);try{const He=T.textures[we],Ge=He.format,Oe=He.type;if(!rt.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-$&&W>=0&&W<=T.height-H&&(T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+we),F.readPixels(z,W,$,H,De.convert(Ge),De.convert(Oe),le))}finally{const He=k!==null?Te.get(k).__webglFramebuffer:null;Ne.bindFramebuffer(F.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(T,z,W,$,H,le,Se,we=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be)if(z>=0&&z<=T.width-$&&W>=0&&W<=T.height-H){Ne.bindFramebuffer(F.FRAMEBUFFER,be);const He=T.textures[we],Ge=He.format,Oe=He.type;if(!rt.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,et),F.bufferData(F.PIXEL_PACK_BUFFER,le.byteLength,F.STREAM_READ),T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+we),F.readPixels(z,W,$,H,De.convert(Ge),De.convert(Oe),0);const ft=k!==null?Te.get(k).__webglFramebuffer:null;Ne.bindFramebuffer(F.FRAMEBUFFER,ft);const Rt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Af(F,Rt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,et),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,le),F.deleteBuffer(et),F.deleteSync(Rt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,W=0){const $=Math.pow(2,-W),H=Math.floor(T.image.width*$),le=Math.floor(T.image.height*$),Se=z!==null?z.x:0,we=z!==null?z.y:0;je.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,Se,we,H,le),Ne.unbindTexture()};const Jr=F.createFramebuffer(),Qr=F.createFramebuffer();this.copyTextureToTexture=function(T,z,W=null,$=null,H=0,le=null){le===null&&(H!==0?(Ji("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=H,H=0):le=0);let Se,we,be,He,Ge,Oe,et,ft,Rt;const Tt=T.isCompressedTexture?T.mipmaps[le]:T.image;if(W!==null)Se=W.max.x-W.min.x,we=W.max.y-W.min.y,be=W.isBox3?W.max.z-W.min.z:1,He=W.min.x,Ge=W.min.y,Oe=W.isBox3?W.min.z:0;else{const tn=Math.pow(2,-H);Se=Math.floor(Tt.width*tn),we=Math.floor(Tt.height*tn),T.isDataArrayTexture?be=Tt.depth:T.isData3DTexture?be=Math.floor(Tt.depth*tn):be=1,He=0,Ge=0,Oe=0}$!==null?(et=$.x,ft=$.y,Rt=$.z):(et=0,ft=0,Rt=0);const mt=De.convert(z.format),Be=De.convert(z.type);let At;z.isData3DTexture?(je.setTexture3D(z,0),At=F.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(je.setTexture2DArray(z,0),At=F.TEXTURE_2D_ARRAY):(je.setTexture2D(z,0),At=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment);const at=F.getParameter(F.UNPACK_ROW_LENGTH),qt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Zn=F.getParameter(F.UNPACK_SKIP_PIXELS),Gt=F.getParameter(F.UNPACK_SKIP_ROWS),fi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Tt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Tt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,He),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ge),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Oe);const bt=T.isDataArrayTexture||T.isData3DTexture,Yt=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){const tn=Te.get(T),d=Te.get(z),ve=Te.get(tn.__renderTarget),Bn=Te.get(d.__renderTarget);Ne.bindFramebuffer(F.READ_FRAMEBUFFER,ve.__webglFramebuffer),Ne.bindFramebuffer(F.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let Mn=0;Mn<be;Mn++)bt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Te.get(T).__webglTexture,H,Oe+Mn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Te.get(z).__webglTexture,le,Rt+Mn)),F.blitFramebuffer(He,Ge,Se,we,et,ft,Se,we,F.DEPTH_BUFFER_BIT,F.NEAREST);Ne.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||Te.has(T)){const tn=Te.get(T),d=Te.get(z);Ne.bindFramebuffer(F.READ_FRAMEBUFFER,Jr),Ne.bindFramebuffer(F.DRAW_FRAMEBUFFER,Qr);for(let ve=0;ve<be;ve++)bt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,tn.__webglTexture,H,Oe+ve):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,tn.__webglTexture,H),Yt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,d.__webglTexture,le,Rt+ve):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,d.__webglTexture,le),H!==0?F.blitFramebuffer(He,Ge,Se,we,et,ft,Se,we,F.COLOR_BUFFER_BIT,F.NEAREST):Yt?F.copyTexSubImage3D(At,le,et,ft,Rt+ve,He,Ge,Se,we):F.copyTexSubImage2D(At,le,et,ft,He,Ge,Se,we);Ne.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Yt?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(At,le,et,ft,Rt,Se,we,be,mt,Be,Tt.data):z.isCompressedArrayTexture?F.compressedTexSubImage3D(At,le,et,ft,Rt,Se,we,be,mt,Tt.data):F.texSubImage3D(At,le,et,ft,Rt,Se,we,be,mt,Be,Tt):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,le,et,ft,Se,we,mt,Be,Tt.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,le,et,ft,Tt.width,Tt.height,mt,Tt.data):F.texSubImage2D(F.TEXTURE_2D,le,et,ft,Se,we,mt,Be,Tt);F.pixelStorei(F.UNPACK_ROW_LENGTH,at),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,qt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Zn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Gt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,fi),le===0&&z.generateMipmaps&&F.generateMipmap(At),Ne.unbindTexture()},this.copyTextureToTexture3D=function(T,z,W=null,$=null,H=0){return Ji('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,z,W,$,H)},this.initRenderTarget=function(T){Te.get(T).__webglFramebuffer===void 0&&je.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?je.setTextureCube(T,0):T.isData3DTexture?je.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?je.setTexture2DArray(T,0):je.setTexture2D(T,0),Ne.unbindTexture()},this.resetState=function(){U=0,N=0,k=null,Ne.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}function eu(r,e){if(e===Zh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Fo||e===Tu){let t=r.getIndex();if(t===null){const a=[],l=r.getAttribute("position");if(l!==void 0){for(let c=0;c<l.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,s=[];if(e===Fo)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const i=r.clone();return i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class E0 extends ps{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new R0(t)}),this.register(function(t){return new C0(t)}),this.register(function(t){return new B0(t)}),this.register(function(t){return new k0(t)}),this.register(function(t){return new z0(t)}),this.register(function(t){return new L0(t)}),this.register(function(t){return new I0(t)}),this.register(function(t){return new D0(t)}),this.register(function(t){return new U0(t)}),this.register(function(t){return new w0(t)}),this.register(function(t){return new N0(t)}),this.register(function(t){return new P0(t)}),this.register(function(t){return new O0(t)}),this.register(function(t){return new F0(t)}),this.register(function(t){return new b0(t)}),this.register(function(t){return new H0(t)}),this.register(function(t){return new V0(t)})}load(e,t,n,s){const i=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const o=Fs.extractUrlBase(e);a=Fs.resolveURL(o,this.path)}else a=Fs.extractUrlBase(e);this.manager.itemStart(e);const l=function(o){s?s(o):console.error(o),i.manager.itemError(e),i.manager.itemEnd(e)},c=new Vu(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(o){try{i.parse(o,a,function(h){t(h),i.manager.itemEnd(e)},l)}catch(h){l(h)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let i;const a={},l={},c=new TextDecoder;if(typeof e=="string")i=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===ju){try{a[nt.KHR_BINARY_GLTF]=new G0(e)}catch(f){s&&s(f);return}i=JSON.parse(a[nt.KHR_BINARY_GLTF].content)}else i=JSON.parse(c.decode(e));else i=e;if(i.asset===void 0||i.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const o=new nx(i,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});o.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const f=this.pluginCallbacks[h](o);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[f.name]=f,a[f.name]=!0}if(i.extensionsUsed)for(let h=0;h<i.extensionsUsed.length;++h){const f=i.extensionsUsed[h],p=i.extensionsRequired||[];switch(f){case nt.KHR_MATERIALS_UNLIT:a[f]=new A0;break;case nt.KHR_DRACO_MESH_COMPRESSION:a[f]=new W0(i,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:a[f]=new X0;break;case nt.KHR_MESH_QUANTIZATION:a[f]=new $0;break;default:p.indexOf(f)>=0&&l[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}o.setExtensions(a),o.setPlugins(l),o.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,i){n.parse(e,t,s,i)})}}function T0(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class b0{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const i=t[n];i.extensions&&i.extensions[this.name]&&i.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,i.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const i=t.json,c=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e];let o;const h=new We(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],en);const f=c.range!==void 0?c.range:0;switch(c.type){case"directional":o=new Rd(h),o.target.position.set(0,0,-1),o.add(o.target);break;case"point":o=new Gu(h),o.distance=f;break;case"spot":o=new bd(h),o.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,o.angle=c.spot.outerConeAngle,o.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return o.position.set(0,0,0),$n(o,c),c.intensity!==void 0&&(o.intensity=c.intensity),o.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(o),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,i=n.json.nodes[e],l=(i.extensions&&i.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(c){return n._getNodeRef(t.cache,l,c)})}}class A0{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ti}extendParams(e,t,n){const s=[];e.color=new We(1,1,1),e.opacity=1;const i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){const a=i.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],en),e.opacity=a[3]}i.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",i.baseColorTexture,Vt))}return Promise.all(s)}}class w0{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=s.extensions[this.name].emissiveStrength;return i!==void 0&&(t.emissiveIntensity=i),Promise.resolve()}}class R0{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&i.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&i.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(i.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const l=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new it(l,l)}return Promise.all(i)}}class C0{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=s.extensions[this.name];return t.dispersion=i.dispersion!==void 0?i.dispersion:0,Promise.resolve()}}class P0{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&i.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&i.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(i)}}class L0{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[];t.sheenColor=new We(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const l=a.sheenColorFactor;t.sheenColor.setRGB(l[0],l[1],l[2],en)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&i.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Vt)),a.sheenRoughnessTexture!==void 0&&i.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(i)}}class I0{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&i.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(i)}}class D0{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&i.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const l=a.attenuationColor||[1,1,1];return t.attenuationColor=new We().setRGB(l[0],l[1],l[2],en),Promise.all(i)}}class U0{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=s.extensions[this.name];return t.ior=i.ior!==void 0?i.ior:1.5,Promise.resolve()}}class N0{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&i.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const l=a.specularColorFactor||[1,1,1];return t.specularColor=new We().setRGB(l[0],l[1],l[2],en),a.specularColorTexture!==void 0&&i.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Vt)),Promise.all(i)}}class F0{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&i.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(i)}}class O0{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&i.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(i)}}class B0{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const i=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,i.source,a)}}class k0{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,i=s.textures[e];if(!i.extensions||!i.extensions[t])return null;const a=i.extensions[t],l=s.images[a.source];let c=n.textureLoader;if(l.uri){const o=n.options.manager.getHandler(l.uri);o!==null&&(c=o)}return n.loadTextureImage(e,a.source,c)}}class z0{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,i=s.textures[e];if(!i.extensions||!i.extensions[t])return null;const a=i.extensions[t],l=s.images[a.source];let c=n.textureLoader;if(l.uri){const o=n.options.manager.getHandler(l.uri);o!==null&&(c=o)}return n.loadTextureImage(e,a.source,c)}}class H0{constructor(e){this.name=nt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],i=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return i.then(function(l){const c=s.byteOffset||0,o=s.byteLength||0,h=s.count,f=s.byteStride,p=new Uint8Array(l,c,o);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,f,p,s.mode,s.filter).then(function(g){return g.buffer}):a.ready.then(function(){const g=new ArrayBuffer(h*f);return a.decodeGltfBuffer(new Uint8Array(g),h,f,p,s.mode,s.filter),g})})}else return null}}class V0{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const o of s.primitives)if(o.mode!==gn.TRIANGLES&&o.mode!==gn.TRIANGLE_STRIP&&o.mode!==gn.TRIANGLE_FAN&&o.mode!==void 0)return null;const a=n.extensions[this.name].attributes,l=[],c={};for(const o in a)l.push(this.parser.getDependency("accessor",a[o]).then(h=>(c[o]=h,c[o])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(o=>{const h=o.pop(),f=h.isGroup?h.children:[h],p=o[0].count,g=[];for(const v of f){const y=new Qe,x=new B,m=new hi,C=new B(1,1,1),w=new id(v.geometry,v.material,p);for(let E=0;E<p;E++)c.TRANSLATION&&x.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,E),c.SCALE&&C.fromBufferAttribute(c.SCALE,E),w.setMatrixAt(E,y.compose(x,m,C));for(const E in c)if(E==="_COLOR_0"){const I=c[E];w.instanceColor=new Bo(I.array,I.itemSize,I.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&v.geometry.setAttribute(E,c[E]);Et.prototype.copy.call(w,v),this.parser.assignFinalMaterial(w),g.push(w)}return h.isGroup?(h.clear(),h.add(...g),h):g[0]}))}}const ju="glTF",Cs=12,tu={JSON:1313821514,BIN:5130562};class G0{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Cs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ju)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Cs,i=new DataView(e,Cs);let a=0;for(;a<s;){const l=i.getUint32(a,!0);a+=4;const c=i.getUint32(a,!0);if(a+=4,c===tu.JSON){const o=new Uint8Array(e,Cs+a,l);this.content=n.decode(o)}else if(c===tu.BIN){const o=Cs+a;this.body=e.slice(o,o+l)}a+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class W0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,l={},c={},o={};for(const h in a){const f=Ho[h]||h.toLowerCase();l[f]=a[h]}for(const h in e.attributes){const f=Ho[h]||h.toLowerCase();if(a[h]!==void 0){const p=n.accessors[e.attributes[h]],g=es[p.componentType];o[f]=g.name,c[f]=p.normalized===!0}}return t.getDependency("bufferView",i).then(function(h){return new Promise(function(f,p){s.decodeDracoFile(h,function(g){for(const v in g.attributes){const y=g.attributes[v],x=c[v];x!==void 0&&(y.normalized=x)}f(g)},l,o,en,p)})})}}class X0{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class $0{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}}class Zu extends $s{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,i=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[i+a];return t}interpolate_(e,t,n,s){const i=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=l*2,o=l*3,h=s-t,f=(n-t)/h,p=f*f,g=p*f,v=e*o,y=v-o,x=-2*g+3*p,m=g-p,C=1-x,w=m-p+f;for(let E=0;E!==l;E++){const I=a[y+E+l],U=a[y+E+c]*h,N=a[v+E+l],k=a[v+E]*h;i[E]=C*I+w*U+x*N+m*k}return i}}const q0=new hi;class Y0 extends Zu{interpolate_(e,t,n,s){const i=super.interpolate_(e,t,n,s);return q0.fromArray(i).normalize().toArray(i),i}}const gn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},es={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},nu={9728:Zt,9729:cn,9984:gu,9985:Pr,9986:Ls,9987:qn},iu={33071:oi,33648:kr,10497:rs},Va={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ho={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},K0={CUBICSPLINE:void 0,LINEAR:Vs,STEP:Hs},Ga={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function j0(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ll({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:jn})),r.DefaultMaterial}function vi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function $n(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Z0(r,e,t){let n=!1,s=!1,i=!1;for(let o=0,h=e.length;o<h;o++){const f=e[o];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(i=!0),n&&s&&i)break}if(!n&&!s&&!i)return Promise.resolve(r);const a=[],l=[],c=[];for(let o=0,h=e.length;o<h;o++){const f=e[o];if(n){const p=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):r.attributes.position;a.push(p)}if(s){const p=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):r.attributes.normal;l.push(p)}if(i){const p=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):r.attributes.color;c.push(p)}}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(o){const h=o[0],f=o[1],p=o[2];return n&&(r.morphAttributes.position=h),s&&(r.morphAttributes.normal=f),i&&(r.morphAttributes.color=p),r.morphTargetsRelative=!0,r})}function J0(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Q0(r){let e;const t=r.extensions&&r.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Wa(t.attributes):e=r.indices+":"+Wa(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,s=r.targets.length;n<s;n++)e+=":"+Wa(r.targets[n]);return e}function Wa(r){let e="";const t=Object.keys(r).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Vo(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ex(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const tx=new Qe;class nx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new T0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,i=!1,a=-1;if(typeof navigator<"u"){const l=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(l)===!0;const c=l.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,i=l.indexOf("Firefox")>-1,a=i?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||i&&a<98?this.textureLoader=new cl(this.options.manager):this.textureLoader=new Cd(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const l={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return vi(i,l,s),$n(l,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(l)})).then(function(){for(const c of l.scenes)c.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,i=t.length;s<i;s++){const a=t[s].joints;for(let l=0,c=a.length;l<c;l++)e[a[l]].isBone=!0}for(let s=0,i=e.length;s<i;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),i=(a,l)=>{const c=this.associations.get(a);c!=null&&this.associations.set(l,c);for(const[o,h]of a.children.entries())i(h,l.children[o])};return i(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const i=e(t[s]);i&&n.push(i)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(i){return i.loadNode&&i.loadNode(t)});break;case"mesh":s=this._invokeOne(function(i){return i.loadMesh&&i.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(i){return i.loadBufferView&&i.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(i){return i.loadMaterial&&i.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(i){return i.loadTexture&&i.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(i){return i.loadAnimation&&i.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(i){return i!=this&&i.getDependency&&i.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(i,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(i,a){n.load(Fs.resolveURL(t.uri,s.path),i,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,i=t.byteOffset||0;return n.slice(i,i+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=Va[s.type],l=es[s.componentType],c=s.normalized===!0,o=new l(s.count*a);return Promise.resolve(new Jt(o,a,c))}const i=[];return s.bufferView!==void 0?i.push(this.getDependency("bufferView",s.bufferView)):i.push(null),s.sparse!==void 0&&(i.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),i.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(i).then(function(a){const l=a[0],c=Va[s.type],o=es[s.componentType],h=o.BYTES_PER_ELEMENT,f=h*c,p=s.byteOffset||0,g=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,v=s.normalized===!0;let y,x;if(g&&g!==f){const m=Math.floor(p/g),C="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let w=t.cache.get(C);w||(y=new o(l,m*g,s.count*g/h),w=new Jf(y,g/h),t.cache.add(C,w)),x=new tl(w,c,p%g/h,v)}else l===null?y=new o(s.count*c):y=new o(l,p,s.count*c),x=new Jt(y,c,v);if(s.sparse!==void 0){const m=Va.SCALAR,C=es[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,E=s.sparse.values.byteOffset||0,I=new C(a[1],w,s.sparse.count*m),U=new o(a[2],E,s.sparse.count*c);l!==null&&(x=new Jt(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let N=0,k=I.length;N<k;N++){const b=I[N];if(x.setX(b,U[N*c]),c>=2&&x.setY(b,U[N*c+1]),c>=3&&x.setZ(b,U[N*c+2]),c>=4&&x.setW(b,U[N*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=v}return x})}loadTexture(e){const t=this.json,n=this.options,i=t.textures[e].source,a=t.images[i];let l=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(l=c)}return this.loadTextureImage(e,i,l)}loadTextureImage(e,t,n){const s=this,i=this.json,a=i.textures[e],l=i.images[t],c=(l.uri||l.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const o=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||l.name||"",h.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(h.name=l.uri);const p=(i.samplers||{})[a.sampler]||{};return h.magFilter=nu[p.magFilter]||cn,h.minFilter=nu[p.minFilter]||qn,h.wrapS=iu[p.wrapS]||rs,h.wrapT=iu[p.wrapT]||rs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Zt&&h.minFilter!==cn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=o,o}loadImageSource(e,t){const n=this,s=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=s.images[e],l=self.URL||self.webkitURL;let c=a.uri||"",o=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(f){o=!0;const p=new Blob([f],{type:a.mimeType});return c=l.createObjectURL(p),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(f){return new Promise(function(p,g){let v=p;t.isImageBitmapLoader===!0&&(v=function(y){const x=new Bt(y);x.needsUpdate=!0,p(x)}),t.load(Fs.resolveURL(f,i.path),v,void 0,g)})}).then(function(f){return o===!0&&l.revokeObjectURL(c),$n(f,a),f.userData.mimeType=a.mimeType||ex(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const i=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[nt.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const c=i.associations.get(a);a=i.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(a,l),i.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+n.uuid;let c=this.cache.get(l);c||(c=new al,Rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(l,c)),n=c}else if(e.isLine){const l="LineBasicMaterial:"+n.uuid;let c=this.cache.get(l);c||(c=new sl,Rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(l,c)),n=c}if(s||i||a){let l="ClonedMaterial:"+n.uuid+":";s&&(l+="derivative-tangents:"),i&&(l+="vertex-colors:"),a&&(l+="flat-shading:");let c=this.cache.get(l);c||(c=n.clone(),i&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(l,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ll}loadMaterial(e){const t=this,n=this.json,s=this.extensions,i=n.materials[e];let a;const l={},c=i.extensions||{},o=[];if(c[nt.KHR_MATERIALS_UNLIT]){const f=s[nt.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),o.push(f.extendParams(l,i,t))}else{const f=i.pbrMetallicRoughness||{};if(l.color=new We(1,1,1),l.opacity=1,Array.isArray(f.baseColorFactor)){const p=f.baseColorFactor;l.color.setRGB(p[0],p[1],p[2],en),l.opacity=p[3]}f.baseColorTexture!==void 0&&o.push(t.assignTexture(l,"map",f.baseColorTexture,Vt)),l.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,l.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(o.push(t.assignTexture(l,"metalnessMap",f.metallicRoughnessTexture)),o.push(t.assignTexture(l,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(p){return p.getMaterialType&&p.getMaterialType(e)}),o.push(Promise.all(this._invokeAll(function(p){return p.extendMaterialParams&&p.extendMaterialParams(e,l)})))}i.doubleSided===!0&&(l.side=Ln);const h=i.alphaMode||Ga.OPAQUE;if(h===Ga.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,h===Ga.MASK&&(l.alphaTest=i.alphaCutoff!==void 0?i.alphaCutoff:.5)),i.normalTexture!==void 0&&a!==Ti&&(o.push(t.assignTexture(l,"normalMap",i.normalTexture)),l.normalScale=new it(1,1),i.normalTexture.scale!==void 0)){const f=i.normalTexture.scale;l.normalScale.set(f,f)}if(i.occlusionTexture!==void 0&&a!==Ti&&(o.push(t.assignTexture(l,"aoMap",i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==Ti){const f=i.emissiveFactor;l.emissive=new We().setRGB(f[0],f[1],f[2],en)}return i.emissiveTexture!==void 0&&a!==Ti&&o.push(t.assignTexture(l,"emissiveMap",i.emissiveTexture,Vt)),Promise.all(o).then(function(){const f=new a(l);return i.name&&(f.name=i.name),$n(f,i),t.associations.set(f,{materials:e}),i.extensions&&vi(s,f,i),f})}createUniqueName(e){const t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function i(l){return n[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(c){return su(c,l,t)})}const a=[];for(let l=0,c=e.length;l<c;l++){const o=e[l],h=Q0(o),f=s[h];if(f)a.push(f.promise);else{let p;o.extensions&&o.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?p=i(o):p=su(new un,o,t),s[h]={primitive:o,promise:p},a.push(p)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,i=n.meshes[e],a=i.primitives,l=[];for(let c=0,o=a.length;c<o;c++){const h=a[c].material===void 0?j0(this.cache):this.getDependency("material",a[c].material);l.push(h)}return l.push(t.loadGeometries(a)),Promise.all(l).then(function(c){const o=c.slice(0,c.length-1),h=c[c.length-1],f=[];for(let g=0,v=h.length;g<v;g++){const y=h[g],x=a[g];let m;const C=o[g];if(x.mode===gn.TRIANGLES||x.mode===gn.TRIANGLE_STRIP||x.mode===gn.TRIANGLE_FAN||x.mode===void 0)m=i.isSkinnedMesh===!0?new ed(y,C):new nn(y,C),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),x.mode===gn.TRIANGLE_STRIP?m.geometry=eu(m.geometry,Tu):x.mode===gn.TRIANGLE_FAN&&(m.geometry=eu(m.geometry,Fo));else if(x.mode===gn.LINES)m=new Ou(y,C);else if(x.mode===gn.LINE_STRIP)m=new rl(y,C);else if(x.mode===gn.LINE_LOOP)m=new od(y,C);else if(x.mode===gn.POINTS)m=new Bu(y,C);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(m.geometry.morphAttributes).length>0&&J0(m,i),m.name=t.createUniqueName(i.name||"mesh_"+e),$n(m,i),x.extensions&&vi(s,m,x),t.assignFinalMaterial(m),f.push(m)}for(let g=0,v=f.length;g<v;g++)t.associations.set(f[g],{meshes:e,primitives:g});if(f.length===1)return i.extensions&&vi(s,f[0],i),f[0];const p=new bi;i.extensions&&vi(s,p,i),t.associations.set(p,{meshes:e});for(let g=0,v=f.length;g<v;g++)p.add(f[g]);return p})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new $t(Fr.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new fl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),$n(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,i=t.joints.length;s<i;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const i=s.pop(),a=s,l=[],c=[];for(let o=0,h=a.length;o<h;o++){const f=a[o];if(f){l.push(f);const p=new Qe;i!==null&&p.fromArray(i.array,o*16),c.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[o])}return new nl(l,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],i=s.name?s.name:"animation_"+e,a=[],l=[],c=[],o=[],h=[];for(let f=0,p=s.channels.length;f<p;f++){const g=s.channels[f],v=s.samplers[g.sampler],y=g.target,x=y.node,m=s.parameters!==void 0?s.parameters[v.input]:v.input,C=s.parameters!==void 0?s.parameters[v.output]:v.output;y.node!==void 0&&(a.push(this.getDependency("node",x)),l.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",C)),o.push(v),h.push(y))}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(o),Promise.all(h)]).then(function(f){const p=f[0],g=f[1],v=f[2],y=f[3],x=f[4],m=[];for(let C=0,w=p.length;C<w;C++){const E=p[C],I=g[C],U=v[C],N=y[C],k=x[C];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const b=n._createAnimationTracks(E,I,U,N,k);if(b)for(let A=0;A<b.length;A++)m.push(b[A])}return new _d(i,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(i){const a=n._getNodeRef(n.meshCache,s.mesh,i);return s.weights!==void 0&&a.traverse(function(l){if(l.isMesh)for(let c=0,o=s.weights.length;c<o;c++)l.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],i=n._loadNodeShallow(e),a=[],l=s.children||[];for(let o=0,h=l.length;o<h;o++)a.push(n.getDependency("node",l[o]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([i,Promise.all(a),c]).then(function(o){const h=o[0],f=o[1],p=o[2];p!==null&&h.traverse(function(g){g.isSkinnedMesh&&g.bind(p,tx)});for(let g=0,v=f.length;g<v;g++)h.add(f[g]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const i=t.nodes[e],a=i.name?s.createUniqueName(i.name):"",l=[],c=s._invokeOne(function(o){return o.createNodeMesh&&o.createNodeMesh(e)});return c&&l.push(c),i.camera!==void 0&&l.push(s.getDependency("camera",i.camera).then(function(o){return s._getNodeRef(s.cameraCache,i.camera,o)})),s._invokeAll(function(o){return o.createNodeAttachment&&o.createNodeAttachment(e)}).forEach(function(o){l.push(o)}),this.nodeCache[e]=Promise.all(l).then(function(o){let h;if(i.isBone===!0?h=new Nu:o.length>1?h=new bi:o.length===1?h=o[0]:h=new Et,h!==o[0])for(let f=0,p=o.length;f<p;f++)h.add(o[f]);if(i.name&&(h.userData.name=i.name,h.name=a),$n(h,i),i.extensions&&vi(n,h,i),i.matrix!==void 0){const f=new Qe;f.fromArray(i.matrix),h.applyMatrix4(f)}else i.translation!==void 0&&h.position.fromArray(i.translation),i.rotation!==void 0&&h.quaternion.fromArray(i.rotation),i.scale!==void 0&&h.scale.fromArray(i.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(i.mesh!==void 0&&s.meshCache.refs[i.mesh]>1){const f=s.associations.get(h);s.associations.set(h,{...f})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,i=new bi;n.name&&(i.name=s.createUniqueName(n.name)),$n(i,n),n.extensions&&vi(t,i,n);const a=n.nodes||[],l=[];for(let c=0,o=a.length;c<o;c++)l.push(s.getDependency("node",a[c]));return Promise.all(l).then(function(c){for(let h=0,f=c.length;h<f;h++)i.add(c[h]);const o=h=>{const f=new Map;for(const[p,g]of s.associations)(p instanceof Rn||p instanceof Bt)&&f.set(p,g);return h.traverse(p=>{const g=s.associations.get(p);g!=null&&f.set(p,g)}),f};return s.associations=o(i),i})}_createAnimationTracks(e,t,n,s,i){const a=[],l=e.name?e.name:e.uuid,c=[];ri[i.path]===ri.weights?e.traverse(function(p){p.morphTargetInfluences&&c.push(p.name?p.name:p.uuid)}):c.push(l);let o;switch(ri[i.path]){case ri.weights:o=ls;break;case ri.rotation:o=cs;break;case ri.translation:case ri.scale:o=us;break;default:switch(n.itemSize){case 1:o=ls;break;case 2:case 3:default:o=us;break}break}const h=s.interpolation!==void 0?K0[s.interpolation]:Vs,f=this._getArrayFromAccessor(n);for(let p=0,g=c.length;p<g;p++){const v=new o(c[p]+"."+ri[i.path],t.array,f,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Vo(t.constructor),s=new Float32Array(t.length);for(let i=0,a=t.length;i<a;i++)s[i]=t[i]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof cs?Y0:Zu;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ix(r,e,t){const n=e.attributes,s=new Un;if(n.POSITION!==void 0){const l=t.json.accessors[n.POSITION],c=l.min,o=l.max;if(c!==void 0&&o!==void 0){if(s.set(new B(c[0],c[1],c[2]),new B(o[0],o[1],o[2])),l.normalized){const h=Vo(es[l.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const i=e.targets;if(i!==void 0){const l=new B,c=new B;for(let o=0,h=i.length;o<h;o++){const f=i[o];if(f.POSITION!==void 0){const p=t.json.accessors[f.POSITION],g=p.min,v=p.max;if(g!==void 0&&v!==void 0){if(c.setX(Math.max(Math.abs(g[0]),Math.abs(v[0]))),c.setY(Math.max(Math.abs(g[1]),Math.abs(v[1]))),c.setZ(Math.max(Math.abs(g[2]),Math.abs(v[2]))),p.normalized){const y=Vo(es[p.componentType]);c.multiplyScalar(y)}l.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(l)}r.boundingBox=s;const a=new Nn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,r.boundingSphere=a}function su(r,e,t){const n=e.attributes,s=[];function i(a,l){return t.getDependency("accessor",a).then(function(c){r.setAttribute(l,c)})}for(const a in n){const l=Ho[a]||a.toLowerCase();l in r.attributes||s.push(i(n[a],l))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(l){r.setIndex(l)});s.push(a)}return ot.workingColorSpace!==en&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),$n(r,e),ix(r,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Z0(r,e.targets,t):r})}function sx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Xa,ru;function rx(){return ru||(ru=1,Xa=function(){function r(n,s){function i(){this.constructor=n}i.prototype=s.prototype,n.prototype=new i}function e(n,s,i,a,l,c){this.message=n,this.expected=s,this.found=i,this.offset=a,this.line=l,this.column=c,this.name="SyntaxError"}r(e,Error);function t(n){var s=arguments.length>1?arguments[1]:{},i={},a={start:gl},l=gl,c=function(){return Nl},o=i,h="#",f={type:"literal",value:"#",description:'"#"'},p=void 0,g={type:"any",description:"any character"},v="[",y={type:"literal",value:"[",description:'"["'},x="]",m={type:"literal",value:"]",description:'"]"'},C=function(u){sa(Ht("ObjectPath",u,kt,zt))},w=function(u){sa(Ht("ArrayPath",u,kt,zt))},E=function(u,_){return u.concat(_)},I=function(u){return[u]},U=function(u){return u},N=".",k={type:"literal",value:".",description:'"."'},b="=",A={type:"literal",value:"=",description:'"="'},L=function(u,_){sa(Ht("Assign",_,kt,zt,u))},Z=function(u){return u.join("")},q=function(u){return u.value},X='"""',ne={type:"literal",value:'"""',description:'"\\"\\"\\""'},K=null,oe=function(u){return Ht("String",u.join(""),kt,zt)},Y='"',me={type:"literal",value:'"',description:'"\\""'},ge="'''",Ie={type:"literal",value:"'''",description:`"'''"`},qe="'",ut={type:"literal",value:"'",description:`"'"`},ht=function(u){return u},ee=function(u){return u},_e="\\",de={type:"literal",value:"\\",description:'"\\\\"'},ke=function(){return""},ze="e",Ye={type:"literal",value:"e",description:'"e"'},Ct="E",st={type:"literal",value:"E",description:'"E"'},F=function(u,_){return Ht("Float",parseFloat(u+"e"+_),kt,zt)},yt=function(u){return Ht("Float",parseFloat(u),kt,zt)},Fe="+",rt={type:"literal",value:"+",description:'"+"'},Ne=function(u){return u.join("")},pt="-",Te={type:"literal",value:"-",description:'"-"'},je=function(u){return"-"+u.join("")},It=function(u){return Ht("Integer",parseInt(u,10),kt,zt)},wt="true",P={type:"literal",value:"true",description:'"true"'},S=function(){return Ht("Boolean",!0,kt,zt)},G="false",Q={type:"literal",value:"false",description:'"false"'},se=function(){return Ht("Boolean",!1,kt,zt)},j=function(){return Ht("Array",[],kt,zt)},Ue=function(u){return Ht("Array",u?[u]:[],kt,zt)},fe=function(u){return Ht("Array",u,kt,zt)},Pe=function(u,_){return Ht("Array",u.concat(_),kt,zt)},Le=function(u){return u},ce=",",ye={type:"literal",value:",",description:'","'},Ve="{",De={type:"literal",value:"{",description:'"{"'},xe="}",Ke={type:"literal",value:"}",description:'"}"'},O=function(u){return Ht("InlineTable",u,kt,zt)},ue=function(u,_){return Ht("InlineTableValue",_,kt,zt,u)},pe=function(u){return"."+u},Ae=function(u){return u.join("")},ae=":",te={type:"literal",value:":",description:'":"'},Ce=function(u){return u.join("")},$e="T",_t={type:"literal",value:"T",description:'"T"'},lt="Z",vn={type:"literal",value:"Z",description:'"Z"'},hn=function(u,_){return Ht("Date",new Date(u+"T"+_+"Z"),kt,zt)},qs=function(u,_){return Ht("Date",new Date(u+"T"+_),kt,zt)},On=/^[ \t]/,gs={type:"class",value:"[ \\t]",description:"[ \\t]"},_s=`
`,xs={type:"literal",value:`
`,description:'"\\n"'},Ci="\r",Ys={type:"literal",value:"\r",description:'"\\r"'},Pi=/^[0-9a-f]/i,Ks={type:"class",value:"[0-9a-f]i",description:"[0-9a-f]i"},js=/^[0-9]/,Yr={type:"class",value:"[0-9]",description:"[0-9]"},Kr="_",jr={type:"literal",value:"_",description:'"_"'},Zr=function(){return""},Jr=/^[A-Za-z0-9_\-]/,Qr={type:"class",value:"[A-Za-z0-9_\\-]",description:"[A-Za-z0-9_\\-]"},T=function(u){return u.join("")},z='\\"',W={type:"literal",value:'\\"',description:'"\\\\\\""'},$=function(){return'"'},H="\\\\",le={type:"literal",value:"\\\\",description:'"\\\\\\\\"'},Se=function(){return"\\"},we="\\b",be={type:"literal",value:"\\b",description:'"\\\\b"'},He=function(){return"\b"},Ge="\\t",Oe={type:"literal",value:"\\t",description:'"\\\\t"'},et=function(){return"	"},ft="\\n",Rt={type:"literal",value:"\\n",description:'"\\\\n"'},Tt=function(){return`
`},mt="\\f",Be={type:"literal",value:"\\f",description:'"\\\\f"'},At=function(){return"\f"},at="\\r",qt={type:"literal",value:"\\r",description:'"\\\\r"'},Zn=function(){return"\r"},Gt="\\U",fi={type:"literal",value:"\\U",description:'"\\\\U"'},bt=function(u){return _h(u.join(""))},Yt="\\u",tn={type:"literal",value:"\\u",description:'"\\\\u"'},d=0,ve=0,Bn=0,Mn={line:1,column:1,seenCR:!1},Zs=0,ea=[],ie=0,re={},Js;if("startRule"in s){if(!(s.startRule in a))throw new Error(`Can't start parsing from rule "`+s.startRule+'".');l=a[s.startRule]}function kt(){return ta(ve).line}function zt(){return ta(ve).column}function ta(u){function _(M,R,D){var V,J;for(V=R;V<D;V++)J=n.charAt(V),J===`
`?(M.seenCR||M.line++,M.column=1,M.seenCR=!1):J==="\r"||J==="\u2028"||J==="\u2029"?(M.line++,M.column=1,M.seenCR=!0):(M.column++,M.seenCR=!1)}return Bn!==u&&(Bn>u&&(Bn=0,Mn={line:1,column:1,seenCR:!1}),_(Mn,Bn,u),Bn=u),Mn}function he(u){d<Zs||(d>Zs&&(Zs=d,ea=[]),ea.push(u))}function Ju(u,_,M){function R(Ee){var Xe=1;for(Ee.sort(function(xt,ct){return xt.description<ct.description?-1:xt.description>ct.description?1:0});Xe<Ee.length;)Ee[Xe-1]===Ee[Xe]?Ee.splice(Xe,1):Xe++}function D(Ee,Xe){function xt(Ii){function Jn(an){return an.charCodeAt(0).toString(16).toUpperCase()}return Ii.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(an){return"\\x0"+Jn(an)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(an){return"\\x"+Jn(an)}).replace(/[\u0180-\u0FFF]/g,function(an){return"\\u0"+Jn(an)}).replace(/[\u1080-\uFFFF]/g,function(an){return"\\u"+Jn(an)})}var ct=new Array(Ee.length),Pt,Lt,rn;for(rn=0;rn<Ee.length;rn++)ct[rn]=Ee[rn].description;return Pt=Ee.length>1?ct.slice(0,-1).join(", ")+" or "+ct[Ee.length-1]:ct[0],Lt=Xe?'"'+xt(Xe)+'"':"end of input","Expected "+Pt+" but "+Lt+" found."}var V=ta(M),J=M<n.length?n.charAt(M):null;return _!==null&&R(_),new e(D(_,J),_,J,M,V.line,V.column)}function gl(){var u,_,M,R=d*49+0,D=re[R];if(D)return d=D.nextPos,D.result;for(u=d,_=[],M=_l();M!==i;)_.push(M),M=_l();return _!==i&&(ve=u,_=c()),u=_,re[R]={nextPos:d,result:u},u}function _l(){var u,_,M,R,D,V,J,Ee=d*49+1,Xe=re[Ee];if(Xe)return d=Xe.nextPos,Xe.result;for(u=d,_=[],M=Re();M!==i;)_.push(M),M=Re();if(_!==i)if(M=Qu(),M!==i){for(R=[],D=Re();D!==i;)R.push(D),D=Re();if(R!==i){for(D=[],V=Qs();V!==i;)D.push(V),V=Qs();if(D!==i){if(V=[],J=dn(),J!==i)for(;J!==i;)V.push(J),J=dn();else V=o;V===i&&(V=tr()),V!==i?(_=[_,M,R,D,V],u=_):(d=u,u=o)}else d=u,u=o}else d=u,u=o}else d=u,u=o;else d=u,u=o;if(u===i){if(u=d,_=[],M=Re(),M!==i)for(;M!==i;)_.push(M),M=Re();else _=o;if(_!==i){if(M=[],R=dn(),R!==i)for(;R!==i;)M.push(R),R=dn();else M=o;M===i&&(M=tr()),M!==i?(_=[_,M],u=_):(d=u,u=o)}else d=u,u=o;u===i&&(u=dn())}return re[Ee]={nextPos:d,result:u},u}function Qu(){var u,_=d*49+2,M=re[_];return M?(d=M.nextPos,M.result):(u=Qs(),u===i&&(u=eh(),u===i&&(u=th(),u===i&&(u=nh()))),re[_]={nextPos:d,result:u},u)}function Qs(){var u,_,M,R,D,V,J=d*49+3,Ee=re[J];if(Ee)return d=Ee.nextPos,Ee.result;if(u=d,n.charCodeAt(d)===35?(_=h,d++):(_=i,ie===0&&he(f)),_!==i){for(M=[],R=d,D=d,ie++,V=dn(),V===i&&(V=tr()),ie--,V===i?D=p:(d=D,D=o),D!==i?(n.length>d?(V=n.charAt(d),d++):(V=i,ie===0&&he(g)),V!==i?(D=[D,V],R=D):(d=R,R=o)):(d=R,R=o);R!==i;)M.push(R),R=d,D=d,ie++,V=dn(),V===i&&(V=tr()),ie--,V===i?D=p:(d=D,D=o),D!==i?(n.length>d?(V=n.charAt(d),d++):(V=i,ie===0&&he(g)),V!==i?(D=[D,V],R=D):(d=R,R=o)):(d=R,R=o);M!==i?(_=[_,M],u=_):(d=u,u=o)}else d=u,u=o;return re[J]={nextPos:d,result:u},u}function eh(){var u,_,M,R,D,V,J=d*49+4,Ee=re[J];if(Ee)return d=Ee.nextPos,Ee.result;if(u=d,n.charCodeAt(d)===91?(_=v,d++):(_=i,ie===0&&he(y)),_!==i){for(M=[],R=Re();R!==i;)M.push(R),R=Re();if(M!==i)if(R=xl(),R!==i){for(D=[],V=Re();V!==i;)D.push(V),V=Re();D!==i?(n.charCodeAt(d)===93?(V=x,d++):(V=i,ie===0&&he(m)),V!==i?(ve=u,_=C(R),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;else d=u,u=o}else d=u,u=o;return re[J]={nextPos:d,result:u},u}function th(){var u,_,M,R,D,V,J,Ee,Xe=d*49+5,xt=re[Xe];if(xt)return d=xt.nextPos,xt.result;if(u=d,n.charCodeAt(d)===91?(_=v,d++):(_=i,ie===0&&he(y)),_!==i)if(n.charCodeAt(d)===91?(M=v,d++):(M=i,ie===0&&he(y)),M!==i){for(R=[],D=Re();D!==i;)R.push(D),D=Re();if(R!==i)if(D=xl(),D!==i){for(V=[],J=Re();J!==i;)V.push(J),J=Re();V!==i?(n.charCodeAt(d)===93?(J=x,d++):(J=i,ie===0&&he(m)),J!==i?(n.charCodeAt(d)===93?(Ee=x,d++):(Ee=i,ie===0&&he(m)),Ee!==i?(ve=u,_=w(D),u=_):(d=u,u=o)):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;else d=u,u=o}else d=u,u=o;else d=u,u=o;return re[Xe]={nextPos:d,result:u},u}function xl(){var u,_,M,R=d*49+6,D=re[R];if(D)return d=D.nextPos,D.result;if(u=d,_=[],M=Ml(),M!==i)for(;M!==i;)_.push(M),M=Ml();else _=o;return _!==i?(M=vl(),M!==i?(ve=u,_=E(_,M),u=_):(d=u,u=o)):(d=u,u=o),u===i&&(u=d,_=vl(),_!==i&&(ve=u,_=I(_)),u=_),re[R]={nextPos:d,result:u},u}function vl(){var u,_,M,R,D,V=d*49+7,J=re[V];if(J)return d=J.nextPos,J.result;for(u=d,_=[],M=Re();M!==i;)_.push(M),M=Re();if(_!==i)if(M=vs(),M!==i){for(R=[],D=Re();D!==i;)R.push(D),D=Re();R!==i?(ve=u,_=U(M),u=_):(d=u,u=o)}else d=u,u=o;else d=u,u=o;if(u===i){for(u=d,_=[],M=Re();M!==i;)_.push(M),M=Re();if(_!==i)if(M=na(),M!==i){for(R=[],D=Re();D!==i;)R.push(D),D=Re();R!==i?(ve=u,_=U(M),u=_):(d=u,u=o)}else d=u,u=o;else d=u,u=o}return re[V]={nextPos:d,result:u},u}function Ml(){var u,_,M,R,D,V,J,Ee=d*49+8,Xe=re[Ee];if(Xe)return d=Xe.nextPos,Xe.result;for(u=d,_=[],M=Re();M!==i;)_.push(M),M=Re();if(_!==i)if(M=vs(),M!==i){for(R=[],D=Re();D!==i;)R.push(D),D=Re();if(R!==i)if(n.charCodeAt(d)===46?(D=N,d++):(D=i,ie===0&&he(k)),D!==i){for(V=[],J=Re();J!==i;)V.push(J),J=Re();V!==i?(ve=u,_=U(M),u=_):(d=u,u=o)}else d=u,u=o;else d=u,u=o}else d=u,u=o;else d=u,u=o;if(u===i){for(u=d,_=[],M=Re();M!==i;)_.push(M),M=Re();if(_!==i)if(M=na(),M!==i){for(R=[],D=Re();D!==i;)R.push(D),D=Re();if(R!==i)if(n.charCodeAt(d)===46?(D=N,d++):(D=i,ie===0&&he(k)),D!==i){for(V=[],J=Re();J!==i;)V.push(J),J=Re();V!==i?(ve=u,_=U(M),u=_):(d=u,u=o)}else d=u,u=o;else d=u,u=o}else d=u,u=o;else d=u,u=o}return re[Ee]={nextPos:d,result:u},u}function nh(){var u,_,M,R,D,V,J=d*49+9,Ee=re[J];if(Ee)return d=Ee.nextPos,Ee.result;if(u=d,_=vs(),_!==i){for(M=[],R=Re();R!==i;)M.push(R),R=Re();if(M!==i)if(n.charCodeAt(d)===61?(R=b,d++):(R=i,ie===0&&he(A)),R!==i){for(D=[],V=Re();V!==i;)D.push(V),V=Re();D!==i?(V=Li(),V!==i?(ve=u,_=L(_,V),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;else d=u,u=o}else d=u,u=o;if(u===i)if(u=d,_=na(),_!==i){for(M=[],R=Re();R!==i;)M.push(R),R=Re();if(M!==i)if(n.charCodeAt(d)===61?(R=b,d++):(R=i,ie===0&&he(A)),R!==i){for(D=[],V=Re();V!==i;)D.push(V),V=Re();D!==i?(V=Li(),V!==i?(ve=u,_=L(_,V),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;else d=u,u=o}else d=u,u=o;return re[J]={nextPos:d,result:u},u}function vs(){var u,_,M,R=d*49+10,D=re[R];if(D)return d=D.nextPos,D.result;if(u=d,_=[],M=Dl(),M!==i)for(;M!==i;)_.push(M),M=Dl();else _=o;return _!==i&&(ve=u,_=Z(_)),u=_,re[R]={nextPos:d,result:u},u}function na(){var u,_,M=d*49+11,R=re[M];return R?(d=R.nextPos,R.result):(u=d,_=yl(),_!==i&&(ve=u,_=q(_)),u=_,u===i&&(u=d,_=Sl(),_!==i&&(ve=u,_=q(_)),u=_),re[M]={nextPos:d,result:u},u)}function Li(){var u,_=d*49+12,M=re[_];return M?(d=M.nextPos,M.result):(u=ih(),u===i&&(u=ph(),u===i&&(u=oh(),u===i&&(u=lh(),u===i&&(u=ch(),u===i&&(u=uh(),u===i&&(u=hh())))))),re[_]={nextPos:d,result:u},u)}function ih(){var u,_=d*49+13,M=re[_];return M?(d=M.nextPos,M.result):(u=sh(),u===i&&(u=yl(),u===i&&(u=rh(),u===i&&(u=Sl()))),re[_]={nextPos:d,result:u},u)}function sh(){var u,_,M,R,D,V=d*49+14,J=re[V];if(J)return d=J.nextPos,J.result;if(u=d,n.substr(d,3)===X?(_=X,d+=3):(_=i,ie===0&&he(ne)),_!==i)if(M=dn(),M===i&&(M=K),M!==i){for(R=[],D=bl();D!==i;)R.push(D),D=bl();R!==i?(n.substr(d,3)===X?(D=X,d+=3):(D=i,ie===0&&he(ne)),D!==i?(ve=u,_=oe(R),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;else d=u,u=o;return re[V]={nextPos:d,result:u},u}function yl(){var u,_,M,R,D=d*49+15,V=re[D];if(V)return d=V.nextPos,V.result;if(u=d,n.charCodeAt(d)===34?(_=Y,d++):(_=i,ie===0&&he(me)),_!==i){for(M=[],R=El();R!==i;)M.push(R),R=El();M!==i?(n.charCodeAt(d)===34?(R=Y,d++):(R=i,ie===0&&he(me)),R!==i?(ve=u,_=oe(M),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;return re[D]={nextPos:d,result:u},u}function rh(){var u,_,M,R,D,V=d*49+16,J=re[V];if(J)return d=J.nextPos,J.result;if(u=d,n.substr(d,3)===ge?(_=ge,d+=3):(_=i,ie===0&&he(Ie)),_!==i)if(M=dn(),M===i&&(M=K),M!==i){for(R=[],D=Al();D!==i;)R.push(D),D=Al();R!==i?(n.substr(d,3)===ge?(D=ge,d+=3):(D=i,ie===0&&he(Ie)),D!==i?(ve=u,_=oe(R),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;else d=u,u=o;return re[V]={nextPos:d,result:u},u}function Sl(){var u,_,M,R,D=d*49+17,V=re[D];if(V)return d=V.nextPos,V.result;if(u=d,n.charCodeAt(d)===39?(_=qe,d++):(_=i,ie===0&&he(ut)),_!==i){for(M=[],R=Tl();R!==i;)M.push(R),R=Tl();M!==i?(n.charCodeAt(d)===39?(R=qe,d++):(R=i,ie===0&&he(ut)),R!==i?(ve=u,_=oe(M),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;return re[D]={nextPos:d,result:u},u}function El(){var u,_,M,R=d*49+18,D=re[R];return D?(d=D.nextPos,D.result):(u=Ul(),u===i&&(u=d,_=d,ie++,n.charCodeAt(d)===34?(M=Y,d++):(M=i,ie===0&&he(me)),ie--,M===i?_=p:(d=_,_=o),_!==i?(n.length>d?(M=n.charAt(d),d++):(M=i,ie===0&&he(g)),M!==i?(ve=u,_=ht(M),u=_):(d=u,u=o)):(d=u,u=o)),re[R]={nextPos:d,result:u},u)}function Tl(){var u,_,M,R=d*49+19,D=re[R];return D?(d=D.nextPos,D.result):(u=d,_=d,ie++,n.charCodeAt(d)===39?(M=qe,d++):(M=i,ie===0&&he(ut)),ie--,M===i?_=p:(d=_,_=o),_!==i?(n.length>d?(M=n.charAt(d),d++):(M=i,ie===0&&he(g)),M!==i?(ve=u,_=ht(M),u=_):(d=u,u=o)):(d=u,u=o),re[R]={nextPos:d,result:u},u)}function bl(){var u,_,M,R=d*49+20,D=re[R];return D?(d=D.nextPos,D.result):(u=Ul(),u===i&&(u=ah(),u===i&&(u=d,_=d,ie++,n.substr(d,3)===X?(M=X,d+=3):(M=i,ie===0&&he(ne)),ie--,M===i?_=p:(d=_,_=o),_!==i?(n.length>d?(M=n.charAt(d),d++):(M=i,ie===0&&he(g)),M!==i?(ve=u,_=ee(M),u=_):(d=u,u=o)):(d=u,u=o))),re[R]={nextPos:d,result:u},u)}function ah(){var u,_,M,R,D,V=d*49+21,J=re[V];if(J)return d=J.nextPos,J.result;if(u=d,n.charCodeAt(d)===92?(_=_e,d++):(_=i,ie===0&&he(de)),_!==i)if(M=dn(),M!==i){for(R=[],D=Il();D!==i;)R.push(D),D=Il();R!==i?(ve=u,_=ke(),u=_):(d=u,u=o)}else d=u,u=o;else d=u,u=o;return re[V]={nextPos:d,result:u},u}function Al(){var u,_,M,R=d*49+22,D=re[R];return D?(d=D.nextPos,D.result):(u=d,_=d,ie++,n.substr(d,3)===ge?(M=ge,d+=3):(M=i,ie===0&&he(Ie)),ie--,M===i?_=p:(d=_,_=o),_!==i?(n.length>d?(M=n.charAt(d),d++):(M=i,ie===0&&he(g)),M!==i?(ve=u,_=ht(M),u=_):(d=u,u=o)):(d=u,u=o),re[R]={nextPos:d,result:u},u)}function oh(){var u,_,M,R,D=d*49+23,V=re[D];return V?(d=V.nextPos,V.result):(u=d,_=wl(),_===i&&(_=ia()),_!==i?(n.charCodeAt(d)===101?(M=ze,d++):(M=i,ie===0&&he(Ye)),M===i&&(n.charCodeAt(d)===69?(M=Ct,d++):(M=i,ie===0&&he(st))),M!==i?(R=ia(),R!==i?(ve=u,_=F(_,R),u=_):(d=u,u=o)):(d=u,u=o)):(d=u,u=o),u===i&&(u=d,_=wl(),_!==i&&(ve=u,_=yt(_)),u=_),re[D]={nextPos:d,result:u},u)}function wl(){var u,_,M,R,D,V,J=d*49+24,Ee=re[J];return Ee?(d=Ee.nextPos,Ee.result):(u=d,n.charCodeAt(d)===43?(_=Fe,d++):(_=i,ie===0&&he(rt)),_===i&&(_=K),_!==i?(M=d,R=Ms(),R!==i?(n.charCodeAt(d)===46?(D=N,d++):(D=i,ie===0&&he(k)),D!==i?(V=Ms(),V!==i?(R=[R,D,V],M=R):(d=M,M=o)):(d=M,M=o)):(d=M,M=o),M!==i?(ve=u,_=Ne(M),u=_):(d=u,u=o)):(d=u,u=o),u===i&&(u=d,n.charCodeAt(d)===45?(_=pt,d++):(_=i,ie===0&&he(Te)),_!==i?(M=d,R=Ms(),R!==i?(n.charCodeAt(d)===46?(D=N,d++):(D=i,ie===0&&he(k)),D!==i?(V=Ms(),V!==i?(R=[R,D,V],M=R):(d=M,M=o)):(d=M,M=o)):(d=M,M=o),M!==i?(ve=u,_=je(M),u=_):(d=u,u=o)):(d=u,u=o)),re[J]={nextPos:d,result:u},u)}function lh(){var u,_,M=d*49+25,R=re[M];return R?(d=R.nextPos,R.result):(u=d,_=ia(),_!==i&&(ve=u,_=It(_)),u=_,re[M]={nextPos:d,result:u},u)}function ia(){var u,_,M,R,D,V=d*49+26,J=re[V];if(J)return d=J.nextPos,J.result;if(u=d,n.charCodeAt(d)===43?(_=Fe,d++):(_=i,ie===0&&he(rt)),_===i&&(_=K),_!==i){if(M=[],R=gt(),R!==i)for(;R!==i;)M.push(R),R=gt();else M=o;M!==i?(R=d,ie++,n.charCodeAt(d)===46?(D=N,d++):(D=i,ie===0&&he(k)),ie--,D===i?R=p:(d=R,R=o),R!==i?(ve=u,_=Ne(M),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;if(u===i)if(u=d,n.charCodeAt(d)===45?(_=pt,d++):(_=i,ie===0&&he(Te)),_!==i){if(M=[],R=gt(),R!==i)for(;R!==i;)M.push(R),R=gt();else M=o;M!==i?(R=d,ie++,n.charCodeAt(d)===46?(D=N,d++):(D=i,ie===0&&he(k)),ie--,D===i?R=p:(d=R,R=o),R!==i?(ve=u,_=je(M),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;return re[V]={nextPos:d,result:u},u}function ch(){var u,_,M=d*49+27,R=re[M];return R?(d=R.nextPos,R.result):(u=d,n.substr(d,4)===wt?(_=wt,d+=4):(_=i,ie===0&&he(P)),_!==i&&(ve=u,_=S()),u=_,u===i&&(u=d,n.substr(d,5)===G?(_=G,d+=5):(_=i,ie===0&&he(Q)),_!==i&&(ve=u,_=se()),u=_),re[M]={nextPos:d,result:u},u)}function uh(){var u,_,M,R,D,V=d*49+28,J=re[V];if(J)return d=J.nextPos,J.result;if(u=d,n.charCodeAt(d)===91?(_=v,d++):(_=i,ie===0&&he(y)),_!==i){for(M=[],R=fn();R!==i;)M.push(R),R=fn();M!==i?(n.charCodeAt(d)===93?(R=x,d++):(R=i,ie===0&&he(m)),R!==i?(ve=u,_=j(),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;if(u===i&&(u=d,n.charCodeAt(d)===91?(_=v,d++):(_=i,ie===0&&he(y)),_!==i?(M=Rl(),M===i&&(M=K),M!==i?(n.charCodeAt(d)===93?(R=x,d++):(R=i,ie===0&&he(m)),R!==i?(ve=u,_=Ue(M),u=_):(d=u,u=o)):(d=u,u=o)):(d=u,u=o),u===i)){if(u=d,n.charCodeAt(d)===91?(_=v,d++):(_=i,ie===0&&he(y)),_!==i){if(M=[],R=er(),R!==i)for(;R!==i;)M.push(R),R=er();else M=o;M!==i?(n.charCodeAt(d)===93?(R=x,d++):(R=i,ie===0&&he(m)),R!==i?(ve=u,_=fe(M),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;if(u===i)if(u=d,n.charCodeAt(d)===91?(_=v,d++):(_=i,ie===0&&he(y)),_!==i){if(M=[],R=er(),R!==i)for(;R!==i;)M.push(R),R=er();else M=o;M!==i?(R=Rl(),R!==i?(n.charCodeAt(d)===93?(D=x,d++):(D=i,ie===0&&he(m)),D!==i?(ve=u,_=Pe(M,R),u=_):(d=u,u=o)):(d=u,u=o)):(d=u,u=o)}else d=u,u=o}return re[V]={nextPos:d,result:u},u}function Rl(){var u,_,M,R,D,V=d*49+29,J=re[V];if(J)return d=J.nextPos,J.result;for(u=d,_=[],M=fn();M!==i;)_.push(M),M=fn();if(_!==i)if(M=Li(),M!==i){for(R=[],D=fn();D!==i;)R.push(D),D=fn();R!==i?(ve=u,_=Le(M),u=_):(d=u,u=o)}else d=u,u=o;else d=u,u=o;return re[V]={nextPos:d,result:u},u}function er(){var u,_,M,R,D,V,J,Ee=d*49+30,Xe=re[Ee];if(Xe)return d=Xe.nextPos,Xe.result;for(u=d,_=[],M=fn();M!==i;)_.push(M),M=fn();if(_!==i)if(M=Li(),M!==i){for(R=[],D=fn();D!==i;)R.push(D),D=fn();if(R!==i)if(n.charCodeAt(d)===44?(D=ce,d++):(D=i,ie===0&&he(ye)),D!==i){for(V=[],J=fn();J!==i;)V.push(J),J=fn();V!==i?(ve=u,_=Le(M),u=_):(d=u,u=o)}else d=u,u=o;else d=u,u=o}else d=u,u=o;else d=u,u=o;return re[Ee]={nextPos:d,result:u},u}function fn(){var u,_=d*49+31,M=re[_];return M?(d=M.nextPos,M.result):(u=Re(),u===i&&(u=dn(),u===i&&(u=Qs())),re[_]={nextPos:d,result:u},u)}function hh(){var u,_,M,R,D,V,J=d*49+32,Ee=re[J];if(Ee)return d=Ee.nextPos,Ee.result;if(u=d,n.charCodeAt(d)===123?(_=Ve,d++):(_=i,ie===0&&he(De)),_!==i){for(M=[],R=Re();R!==i;)M.push(R),R=Re();if(M!==i){for(R=[],D=Cl();D!==i;)R.push(D),D=Cl();if(R!==i){for(D=[],V=Re();V!==i;)D.push(V),V=Re();D!==i?(n.charCodeAt(d)===125?(V=xe,d++):(V=i,ie===0&&he(Ke)),V!==i?(ve=u,_=O(R),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o}else d=u,u=o}else d=u,u=o;return re[J]={nextPos:d,result:u},u}function Cl(){var u,_,M,R,D,V,J,Ee,Xe,xt,ct,Pt=d*49+33,Lt=re[Pt];if(Lt)return d=Lt.nextPos,Lt.result;for(u=d,_=[],M=Re();M!==i;)_.push(M),M=Re();if(_!==i)if(M=vs(),M!==i){for(R=[],D=Re();D!==i;)R.push(D),D=Re();if(R!==i)if(n.charCodeAt(d)===61?(D=b,d++):(D=i,ie===0&&he(A)),D!==i){for(V=[],J=Re();J!==i;)V.push(J),J=Re();if(V!==i)if(J=Li(),J!==i){for(Ee=[],Xe=Re();Xe!==i;)Ee.push(Xe),Xe=Re();if(Ee!==i)if(n.charCodeAt(d)===44?(Xe=ce,d++):(Xe=i,ie===0&&he(ye)),Xe!==i){for(xt=[],ct=Re();ct!==i;)xt.push(ct),ct=Re();xt!==i?(ve=u,_=ue(M,J),u=_):(d=u,u=o)}else d=u,u=o;else d=u,u=o}else d=u,u=o;else d=u,u=o}else d=u,u=o;else d=u,u=o}else d=u,u=o;else d=u,u=o;if(u===i){for(u=d,_=[],M=Re();M!==i;)_.push(M),M=Re();if(_!==i)if(M=vs(),M!==i){for(R=[],D=Re();D!==i;)R.push(D),D=Re();if(R!==i)if(n.charCodeAt(d)===61?(D=b,d++):(D=i,ie===0&&he(A)),D!==i){for(V=[],J=Re();J!==i;)V.push(J),J=Re();V!==i?(J=Li(),J!==i?(ve=u,_=ue(M,J),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;else d=u,u=o}else d=u,u=o;else d=u,u=o}return re[Pt]={nextPos:d,result:u},u}function Pl(){var u,_,M,R=d*49+34,D=re[R];return D?(d=D.nextPos,D.result):(u=d,n.charCodeAt(d)===46?(_=N,d++):(_=i,ie===0&&he(k)),_!==i?(M=Ms(),M!==i?(ve=u,_=pe(M),u=_):(d=u,u=o)):(d=u,u=o),re[R]={nextPos:d,result:u},u)}function Ll(){var u,_,M,R,D,V,J,Ee,Xe,xt,ct,Pt,Lt=d*49+35,rn=re[Lt];return rn?(d=rn.nextPos,rn.result):(u=d,_=d,M=gt(),M!==i?(R=gt(),R!==i?(D=gt(),D!==i?(V=gt(),V!==i?(n.charCodeAt(d)===45?(J=pt,d++):(J=i,ie===0&&he(Te)),J!==i?(Ee=gt(),Ee!==i?(Xe=gt(),Xe!==i?(n.charCodeAt(d)===45?(xt=pt,d++):(xt=i,ie===0&&he(Te)),xt!==i?(ct=gt(),ct!==i?(Pt=gt(),Pt!==i?(M=[M,R,D,V,J,Ee,Xe,xt,ct,Pt],_=M):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o),_!==i&&(ve=u,_=Ae(_)),u=_,re[Lt]={nextPos:d,result:u},u)}function fh(){var u,_,M,R,D,V,J,Ee,Xe,xt,ct,Pt=d*49+36,Lt=re[Pt];return Lt?(d=Lt.nextPos,Lt.result):(u=d,_=d,M=gt(),M!==i?(R=gt(),R!==i?(n.charCodeAt(d)===58?(D=ae,d++):(D=i,ie===0&&he(te)),D!==i?(V=gt(),V!==i?(J=gt(),J!==i?(n.charCodeAt(d)===58?(Ee=ae,d++):(Ee=i,ie===0&&he(te)),Ee!==i?(Xe=gt(),Xe!==i?(xt=gt(),xt!==i?(ct=Pl(),ct===i&&(ct=K),ct!==i?(M=[M,R,D,V,J,Ee,Xe,xt,ct],_=M):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o),_!==i&&(ve=u,_=Ce(_)),u=_,re[Pt]={nextPos:d,result:u},u)}function dh(){var u,_,M,R,D,V,J,Ee,Xe,xt,ct,Pt,Lt,rn,Ii,Jn,an,Fl=d*49+37,ra=re[Fl];return ra?(d=ra.nextPos,ra.result):(u=d,_=d,M=gt(),M!==i?(R=gt(),R!==i?(n.charCodeAt(d)===58?(D=ae,d++):(D=i,ie===0&&he(te)),D!==i?(V=gt(),V!==i?(J=gt(),J!==i?(n.charCodeAt(d)===58?(Ee=ae,d++):(Ee=i,ie===0&&he(te)),Ee!==i?(Xe=gt(),Xe!==i?(xt=gt(),xt!==i?(ct=Pl(),ct===i&&(ct=K),ct!==i?(n.charCodeAt(d)===45?(Pt=pt,d++):(Pt=i,ie===0&&he(Te)),Pt===i&&(n.charCodeAt(d)===43?(Pt=Fe,d++):(Pt=i,ie===0&&he(rt))),Pt!==i?(Lt=gt(),Lt!==i?(rn=gt(),rn!==i?(n.charCodeAt(d)===58?(Ii=ae,d++):(Ii=i,ie===0&&he(te)),Ii!==i?(Jn=gt(),Jn!==i?(an=gt(),an!==i?(M=[M,R,D,V,J,Ee,Xe,xt,ct,Pt,Lt,rn,Ii,Jn,an],_=M):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o),_!==i&&(ve=u,_=Ce(_)),u=_,re[Fl]={nextPos:d,result:u},u)}function ph(){var u,_,M,R,D,V=d*49+38,J=re[V];return J?(d=J.nextPos,J.result):(u=d,_=Ll(),_!==i?(n.charCodeAt(d)===84?(M=$e,d++):(M=i,ie===0&&he(_t)),M!==i?(R=fh(),R!==i?(n.charCodeAt(d)===90?(D=lt,d++):(D=i,ie===0&&he(vn)),D!==i?(ve=u,_=hn(_,R),u=_):(d=u,u=o)):(d=u,u=o)):(d=u,u=o)):(d=u,u=o),u===i&&(u=d,_=Ll(),_!==i?(n.charCodeAt(d)===84?(M=$e,d++):(M=i,ie===0&&he(_t)),M!==i?(R=dh(),R!==i?(ve=u,_=qs(_,R),u=_):(d=u,u=o)):(d=u,u=o)):(d=u,u=o)),re[V]={nextPos:d,result:u},u)}function Re(){var u,_=d*49+39,M=re[_];return M?(d=M.nextPos,M.result):(On.test(n.charAt(d))?(u=n.charAt(d),d++):(u=i,ie===0&&he(gs)),re[_]={nextPos:d,result:u},u)}function dn(){var u,_,M,R=d*49+40,D=re[R];return D?(d=D.nextPos,D.result):(n.charCodeAt(d)===10?(u=_s,d++):(u=i,ie===0&&he(xs)),u===i&&(u=d,n.charCodeAt(d)===13?(_=Ci,d++):(_=i,ie===0&&he(Ys)),_!==i?(n.charCodeAt(d)===10?(M=_s,d++):(M=i,ie===0&&he(xs)),M!==i?(_=[_,M],u=_):(d=u,u=o)):(d=u,u=o)),re[R]={nextPos:d,result:u},u)}function Il(){var u,_=d*49+41,M=re[_];return M?(d=M.nextPos,M.result):(u=dn(),u===i&&(u=Re()),re[_]={nextPos:d,result:u},u)}function tr(){var u,_,M=d*49+42,R=re[M];return R?(d=R.nextPos,R.result):(u=d,ie++,n.length>d?(_=n.charAt(d),d++):(_=i,ie===0&&he(g)),ie--,_===i?u=p:(d=u,u=o),re[M]={nextPos:d,result:u},u)}function pn(){var u,_=d*49+43,M=re[_];return M?(d=M.nextPos,M.result):(Pi.test(n.charAt(d))?(u=n.charAt(d),d++):(u=i,ie===0&&he(Ks)),re[_]={nextPos:d,result:u},u)}function gt(){var u,_,M=d*49+44,R=re[M];return R?(d=R.nextPos,R.result):(js.test(n.charAt(d))?(u=n.charAt(d),d++):(u=i,ie===0&&he(Yr)),u===i&&(u=d,n.charCodeAt(d)===95?(_=Kr,d++):(_=i,ie===0&&he(jr)),_!==i&&(ve=u,_=Zr()),u=_),re[M]={nextPos:d,result:u},u)}function Dl(){var u,_=d*49+45,M=re[_];return M?(d=M.nextPos,M.result):(Jr.test(n.charAt(d))?(u=n.charAt(d),d++):(u=i,ie===0&&he(Qr)),re[_]={nextPos:d,result:u},u)}function Ms(){var u,_,M,R=d*49+46,D=re[R];if(D)return d=D.nextPos,D.result;if(u=d,_=[],M=gt(),M!==i)for(;M!==i;)_.push(M),M=gt();else _=o;return _!==i&&(ve=u,_=T(_)),u=_,re[R]={nextPos:d,result:u},u}function Ul(){var u,_,M=d*49+47,R=re[M];return R?(d=R.nextPos,R.result):(u=d,n.substr(d,2)===z?(_=z,d+=2):(_=i,ie===0&&he(W)),_!==i&&(ve=u,_=$()),u=_,u===i&&(u=d,n.substr(d,2)===H?(_=H,d+=2):(_=i,ie===0&&he(le)),_!==i&&(ve=u,_=Se()),u=_,u===i&&(u=d,n.substr(d,2)===we?(_=we,d+=2):(_=i,ie===0&&he(be)),_!==i&&(ve=u,_=He()),u=_,u===i&&(u=d,n.substr(d,2)===Ge?(_=Ge,d+=2):(_=i,ie===0&&he(Oe)),_!==i&&(ve=u,_=et()),u=_,u===i&&(u=d,n.substr(d,2)===ft?(_=ft,d+=2):(_=i,ie===0&&he(Rt)),_!==i&&(ve=u,_=Tt()),u=_,u===i&&(u=d,n.substr(d,2)===mt?(_=mt,d+=2):(_=i,ie===0&&he(Be)),_!==i&&(ve=u,_=At()),u=_,u===i&&(u=d,n.substr(d,2)===at?(_=at,d+=2):(_=i,ie===0&&he(qt)),_!==i&&(ve=u,_=Zn()),u=_,u===i&&(u=mh()))))))),re[M]={nextPos:d,result:u},u)}function mh(){var u,_,M,R,D,V,J,Ee,Xe,xt,ct,Pt=d*49+48,Lt=re[Pt];return Lt?(d=Lt.nextPos,Lt.result):(u=d,n.substr(d,2)===Gt?(_=Gt,d+=2):(_=i,ie===0&&he(fi)),_!==i?(M=d,R=pn(),R!==i?(D=pn(),D!==i?(V=pn(),V!==i?(J=pn(),J!==i?(Ee=pn(),Ee!==i?(Xe=pn(),Xe!==i?(xt=pn(),xt!==i?(ct=pn(),ct!==i?(R=[R,D,V,J,Ee,Xe,xt,ct],M=R):(d=M,M=o)):(d=M,M=o)):(d=M,M=o)):(d=M,M=o)):(d=M,M=o)):(d=M,M=o)):(d=M,M=o)):(d=M,M=o),M!==i?(ve=u,_=bt(M),u=_):(d=u,u=o)):(d=u,u=o),u===i&&(u=d,n.substr(d,2)===Yt?(_=Yt,d+=2):(_=i,ie===0&&he(tn)),_!==i?(M=d,R=pn(),R!==i?(D=pn(),D!==i?(V=pn(),V!==i?(J=pn(),J!==i?(R=[R,D,V,J],M=R):(d=M,M=o)):(d=M,M=o)):(d=M,M=o)):(d=M,M=o),M!==i?(ve=u,_=bt(M),u=_):(d=u,u=o)):(d=u,u=o)),re[Pt]={nextPos:d,result:u},u)}var Nl=[];function gh(u,_,M){var R=new Error(u);throw R.line=_,R.column=M,R}function sa(u){Nl.push(u)}function Ht(u,_,M,R,D){var V={type:u,value:_,line:M(),column:R()};return D&&(V.key=D),V}function _h(u,_,M){var R=parseInt("0x"+u);if(!isFinite(R)||Math.floor(R)!=R||R<0||R>1114111||R>55295&&R<57344)gh("Invalid Unicode escape code: "+u,_,M);else return xh(R)}function xh(){var u=16384,_=[],M,R,D=-1,V=arguments.length;if(!V)return"";for(var J="";++D<V;){var Ee=Number(arguments[D]);Ee<=65535?_.push(Ee):(Ee-=65536,M=(Ee>>10)+55296,R=Ee%1024+56320,_.push(M,R)),(D+1==V||_.length>u)&&(J+=String.fromCharCode.apply(null,_),_.length=0)}return J}if(Js=l(),Js!==i&&d===n.length)return Js;throw Js!==i&&d<n.length&&he({type:"end",description:"end of input"}),Ju(null,ea,Zs)}return{SyntaxError:e,parse:t}}()),Xa}var $a,au;function ax(){if(au)return $a;au=1;function r(e){var t=[],n=[],s="",i=Object.create(null),a=i;return l(e);function l(C){for(var w,E=0;E<C.length;E++)switch(w=C[E],w.type){case"Assign":o(w);break;case"ObjectPath":g(w);break;case"ArrayPath":v(w);break}return i}function c(C,w,E){var I=new Error(C);throw I.line=w,I.column=E,I}function o(C){var w=C.key,E=C.value,I=C.line,U=C.column,N;s?N=s+"."+w:N=w,typeof a[w]<"u"&&c("Cannot redefine existing key '"+N+"'.",I,U),a[w]=f(E),h(N)||(t.push(N),n.push(N))}function h(C){return t.indexOf(C)!==-1}function f(C){return C.type==="Array"?x(C.value):C.type==="InlineTable"?p(C.value):C.value}function p(C){for(var w=Object.create(null),E=0;E<C.length;E++){var I=C[E];I.value.type==="InlineTable"?w[I.key]=p(I.value.value):I.type==="InlineTableValue"&&(w[I.key]=f(I.value))}return w}function g(C){var w=C.value,E=w.map(m).join("."),I=C.line,U=C.column;h(E)&&c("Cannot redefine existing key '"+w+"'.",I,U),t.push(E),a=y(i,w,Object.create(null),I,U),s=w}function v(C){var w=C.value,E=w.map(m).join("."),I=C.line,U=C.column;if(h(E)||t.push(E),t=t.filter(function(k){return k.indexOf(E)!==0}),t.push(E),a=y(i,w,[],I,U),s=E,a instanceof Array){var N=Object.create(null);a.push(N),a=N}else c("Cannot redefine existing key '"+w+"'.",I,U)}function y(C,w,E,I,U){var N=[],k="";w.join(".");for(var b=C,A=0;A<w.length;A++){var L=w[A];N.push(L),k=N.join("."),typeof b[L]>"u"?A===w.length-1?b[L]=E:b[L]=Object.create(null):A!==w.length-1&&n.indexOf(k)>-1&&c("Cannot redefine existing key '"+k+"'.",I,U),b=b[L],b instanceof Array&&b.length&&A<w.length-1&&(b=b[b.length-1])}return b}function x(C){for(var w=null,E=0;E<C.length;E++){var I=C[E];w===null?w=I.type:I.type!==w&&c("Cannot add value of type "+I.type+" to array of type "+w+".",I.line,I.column)}return C.map(f)}function m(C){return C.indexOf(".")>-1?'"'+C+'"':C}}return $a={compile:r},$a}var qa,ou;function ox(){if(ou)return qa;ou=1;var r=rx(),e=ax();return qa={parse:function(t){var n=r.parse(t.toString());return e.compile(n)}},qa}var lx=ox();const cx=sx(lx);async function ux(r){const t=await(await fetch(r)).text();return cx.parse(t)}const Ri=await ux("sceneConfig.toml"),ts=Ri.planets,Ds=Ri.moons;console.log(ts);console.log(Ds);class Ya{constructor({name:e,radius:t=null,diameter:n=null,distanceFromOrbitCenter:s,texturePath:i,normalMapPath:a=null,specularMapPath:l=null,emissiveMapPath:c=null,otherMaterialProps:o={},numberOfSegments:h=64,orbitRotationSpeed:f=1e-5,selfRotationSpeed:p=.1}){t?this.radius=t:n&&(this.radius=Math.pow(10,6)*n/2),this.name=e,this.distanceFromOrbitCenter=Math.pow(10,6)*s;const g=new cl;this.texture=g.load(i),this.normalMap=a?g.load(a):null,this.specularMap=l?g.load(l):null,this.emissiveMap=c?g.load(c):null,o&&Object.keys(o).forEach(v=>{typeof o[v]=="string"&&o[v].startsWith("#")&&(o[v]=new We(o[v]))}),this.material=new ld({map:this.texture,normalMap:this.normalMap,specularMap:this.specularMap,emissiveMap:this.emissiveMap,...o}),this.numberOfSegments=h,this.geometry=new ol(this.radius,h,h),this.mesh=new nn(this.geometry,this.material),this.mesh.position.set(0,0,this.distanceFromOrbitCenter),this.orbit=new Et,this.orbit.add(this.mesh),this.orbitRotationSpeed=f,this.selfRotationSpeed=p}}const Ki={},Ka={},hx=4e7,ja=1.5;let lu=0,Cr=null,cu=0;const Ps=new B,uu=new B,hu=new B,fu=new B,du=new B,fx=Ri.colors[Ri.spaceBackground],Br=.01,dx=2*Br,Za=new B(-6e6,0,ts[Ri.spaceShipStartingPosition].distanceFromOrbitCenter*Math.pow(10,6)+ts[Ri.spaceShipStartingPosition].diameter*Math.pow(10,6)),px=.35,mx=.2,gx=5,Ut=new Set;window.addEventListener("keydown",r=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(r.key)&&r.preventDefault(),Ut.add(r.code)});window.addEventListener("keyup",r=>Ut.delete(r.code));function _x(r){const e=r.domElement,t=e.clientWidth,n=e.clientHeight,s=e.width!==t||e.height!==n;return s&&r.setSize(t,n,!1),s}function xx(){const r=document.querySelector("#c"),e=document.getElementById("hud-speed"),t=document.getElementById("hud-dist"),n=document.getElementById("hud-dist-mars"),s=document.getElementById("hud-dist-mercury"),i=document.getElementById("hud-dist-earth-moon"),a=new S0({antialias:!0,canvas:r}),l=75,c=2,o=.1,h=3e3,f=new $t(l,c,o,h);f.position.set(40,40,60),f.lookAt(0,0,0);const p=new Zf;p.background=new We(fx);const g=new cl;let v;if(Ri.addStars){const b=[];for(let q=0;q<1e3;q++)b.push(Fr.randFloatSpread(Math.pow(10,12),Math.pow(10,13)),Fr.randFloatSpread(Math.pow(10,12),Math.pow(10,13)),Fr.randFloatSpread(Math.pow(10,12),Math.pow(10,13)));const A=g.load("white-circle.png"),L=new un;L.setAttribute("position",new Qt(b,3));const Z=new al({map:A,size:.5});v=new Bu(L,Z),p.add(v)}const y=new Et;p.add(y);const x=new Ya(ts.sun);y.add(x.mesh);const m=new Gu(16777215,Math.pow(10,23),Math.pow(10,25));m.position.set(0,0,0),p.add(m),Object.keys(ts).forEach(b=>{const A=new Ya(ts[b]);y.add(A.orbit),Ki[b]=A}),Object.keys(Ds).forEach(b=>{const A=new Ya(Ds[b]);A.orbit.position.set(0,0,Ki[Ds[b].parentPlanet].distanceFromOrbitCenter),Ki[Ds[b].parentPlanet].orbit.add(A.orbit),Ka[b]=A});const C=new Et;C.position.set(Za.x,Za.y,Za.z),y.add(C);let w=new Et;const E=new E0;let I=null,U=new xn;E.load("space-ship/scene.gltf",b=>{const A=b.scene;A.scale.set(Br,Br,Br),A.rotation.set(.2,0,-.3);const L=new Et;w.add(L),L.add(A),A.updateWorldMatrix(!0,!0);const q=new Un().setFromObject(A).getCenter(new B);A.position.sub(q),A.updateWorldMatrix(!0);const X=new Na(2);X.material.depthTest=!1,X.renderOrder=1;const ne=new Na(2);ne.material.depthTest=!1,ne.renderOrder=1,w.add(L),C.add(w);const K=new Na(2);K.material.depthTest=!1,K.renderOrder=1,I=L,U.copy(L.rotation),w.lookAt(new B(0,0,0))});const N=new $t(75,2,Math.pow(10,-15),Math.pow(10,30));N.position.set(.3,1,-5).multiplyScalar(dx),N.rotation.x=.5,N.lookAt(0,0,0),w.add(N);function k(b){b*=.001;const A=Math.min(.05,b-lu);if(lu=b,_x(a)&&(N.aspect=r.clientWidth/r.clientHeight,N.updateProjectionMatrix()),v.rotation.x=b*2e-4,v.rotation.y=b*2e-4,Object.values(Ki).forEach(L=>{L.orbit.rotation.y=b*L.orbitRotationSpeed,L.mesh&&(L.mesh.rotation.y=b*L.selfRotationSpeed)}),Object.values(Ka).forEach(L=>{L.orbit.rotation.y=b*L.orbitRotationSpeed,L.mesh&&(L.mesh.rotation.y=b*L.selfRotationSpeed)}),x.mesh&&(x.mesh.rotation.y=b*.1),w){const L=new B;w.getWorldDirection(L).normalize();const Z=new B(0,1,0),q=new B().crossVectors(L,Z).normalize(),X=new B;(Ut.has("KeyW")||Ut.has("ArrowUp"))&&X.add(L),(Ut.has("KeyS")||Ut.has("ArrowDown"))&&X.addScaledVector(L,-1),Ut.has("KeyD")&&X.add(q),Ut.has("KeyA")&&X.addScaledVector(q,-1),Ut.has("KeyR")&&X.add(Z),Ut.has("KeyF")&&X.addScaledVector(Z,-1),X.lengthSq()>0&&(X.normalize().multiplyScalar(hx*A),w.position.add(X));const ne=(Ut.has("ArrowLeft")?1:0)-(Ut.has("ArrowRight")?1:0),K=(Ut.has("KeyI")?1:0)-(Ut.has("KeyK")?1:0),oe=(Ut.has("KeyE")?1:0)-(Ut.has("KeyQ")?1:0);ne&&w.rotateOnWorldAxis(Z,ne*ja*A),K&&w.rotateX(K*ja*A),oe&&w.rotateZ(-oe*ja*A)}if(I){p.updateMatrixWorld(!0),Cr||(Cr=w.position.clone());const L=w.position,Z=L.distanceTo(Cr);A>0&&(cu=Z/(A*1e3)),Cr.copy(L),I.getWorldPosition(Ps),x.mesh.getWorldPosition(uu),Ki.mars.mesh.getWorldPosition(hu),Ki.mercury.mesh.getWorldPosition(fu),Ka.earthMoon.mesh.getWorldPosition(du);const q=Ps.distanceTo(uu)/Math.pow(10,6),X=Ps.distanceTo(hu)/Math.pow(10,6),ne=Ps.distanceTo(fu)/Math.pow(10,6),K=Ps.distanceTo(du)/Math.pow(10,6);e&&(e.textContent=cu.toFixed(2)),t&&(t.textContent=q.toFixed(0)),n&&(n.textContent=X.toFixed(0)),s&&(s.textContent=ne.toFixed(0)),i&&(i.textContent=K.toFixed(0));const oe=Ut.has("KeyR"),Y=Ut.has("KeyF"),me=Ut.has("ArrowLeft"),ge=Ut.has("ArrowRight"),Ie=(Number(ge)-Number(me))*px,qe=(Number(Y)-Number(oe))*mx,ut=Math.min(1,gx*A);I.rotation.x+=(U.x+qe-I.rotation.x)*ut,I.rotation.z+=(U.z+Ie-I.rotation.z)*ut,I.rotation.y=U.y}a.render(p,N),requestAnimationFrame(k)}requestAnimationFrame(k)}xx();
