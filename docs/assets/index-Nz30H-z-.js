(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ll="179",Xh=0,tc=1,$h=2,Ou=1,qh=2,Yn=3,Ln=0,an=1,wn=2,di=0,hs=1,nc=2,ic=3,sc=4,Yh=5,Di=100,Kh=101,jh=102,Zh=103,Jh=104,Qh=200,ef=201,tf=202,nf=203,xo=204,vo=205,sf=206,rf=207,af=208,of=209,lf=210,cf=211,uf=212,hf=213,ff=214,Mo=0,yo=1,So=2,ms=3,Eo=4,To=5,bo=6,Ao=7,cl=0,df=1,pf=2,pi=0,mf=1,gf=2,_f=3,xf=4,vf=5,Mf=6,yf=7,rc="attached",Sf="detached",Bu=300,gs=301,_s=302,wo=303,Ro=304,ua=306,Fi=1e3,Zn=1001,sa=1002,tn=1003,ku=1004,$s=1005,hn=1006,jr=1007,Jn=1008,Nn=1009,zu=1010,Hu=1011,Zs=1012,ul=1013,Oi=1014,Cn=1015,rr=1016,hl=1017,fl=1018,Js=1020,Vu=35902,Gu=1021,Wu=1022,vn=1023,Qs=1026,er=1027,dl=1028,pl=1029,Xu=1030,ml=1031,gl=1033,Zr=33776,Jr=33777,Qr=33778,ea=33779,Co=35840,Po=35841,Lo=35842,Io=35843,Do=36196,Uo=37492,No=37496,Fo=37808,Oo=37809,Bo=37810,ko=37811,zo=37812,Ho=37813,Vo=37814,Go=37815,Wo=37816,Xo=37817,$o=37818,qo=37819,Yo=37820,Ko=37821,ta=36492,jo=36494,Zo=36495,$u=36283,Jo=36284,Qo=36285,el=36286,tr=2300,nr=2301,wa=2302,ac=2400,oc=2401,lc=2402,Ef=2500,Tf=0,qu=1,tl=2,bf=3200,Af=3201,_l=0,wf=1,hi="",Wt="srgb",nn="srgb-linear",ra="linear",Tt="srgb",Wi=7680,cc=519,Rf=512,Cf=513,Pf=514,Yu=515,Lf=516,If=517,Df=518,Uf=519,nl=35044,uc="300 es",Un=2e3,aa=2001;class Es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const i=s.indexOf(t);i!==-1&&s.splice(i,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let i=0,a=s.length;i<a;i++)s[i].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hc=1234567;const Ys=Math.PI/180,xs=180/Math.PI;function Pn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[r&255]+$t[r>>8&255]+$t[r>>16&255]+$t[r>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function it(r,e,t){return Math.max(e,Math.min(t,r))}function xl(r,e){return(r%e+e)%e}function Nf(r,e,t,n,s){return n+(r-e)*(s-n)/(t-e)}function Ff(r,e,t){return r!==e?(t-r)/(e-r):0}function Ks(r,e,t){return(1-t)*r+t*e}function Of(r,e,t,n){return Ks(r,e,1-Math.exp(-t*n))}function Bf(r,e=1){return e-Math.abs(xl(r,e*2)-e)}function kf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function zf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Hf(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Vf(r,e){return r+Math.random()*(e-r)}function Gf(r){return r*(.5-Math.random())}function Wf(r){r!==void 0&&(hc=r);let e=hc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xf(r){return r*Ys}function $f(r){return r*xs}function qf(r){return(r&r-1)===0&&r!==0}function Yf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Kf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function jf(r,e,t,n,s){const i=Math.cos,a=Math.sin,l=i(t/2),c=a(t/2),o=i((e+n)/2),h=a((e+n)/2),f=i((e-n)/2),p=a((e-n)/2),g=i((n-e)/2),v=a((n-e)/2);switch(s){case"XYX":r.set(l*h,c*f,c*p,l*o);break;case"YZY":r.set(c*p,l*h,c*f,l*o);break;case"ZXZ":r.set(c*f,c*p,l*h,l*o);break;case"XZX":r.set(l*h,c*v,c*g,l*o);break;case"YXY":r.set(c*g,l*h,c*v,l*o);break;case"ZYZ":r.set(c*v,c*g,l*h,l*o);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function yt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const na={DEG2RAD:Ys,RAD2DEG:xs,generateUUID:Pn,clamp:it,euclideanModulo:xl,mapLinear:Nf,inverseLerp:Ff,lerp:Ks,damp:Of,pingpong:Bf,smoothstep:kf,smootherstep:zf,randInt:Hf,randFloat:Vf,randFloatSpread:Gf,seededRandom:Wf,degToRad:Xf,radToDeg:$f,isPowerOfTwo:qf,ceilPowerOfTwo:Yf,floorPowerOfTwo:Kf,setQuaternionFromProperEuler:jf,normalize:yt,denormalize:Rn};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*s+e.x,this.y=i*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,i,a,l){let c=n[s+0],o=n[s+1],h=n[s+2],f=n[s+3];const p=i[a+0],g=i[a+1],v=i[a+2],M=i[a+3];if(l===0){e[t+0]=c,e[t+1]=o,e[t+2]=h,e[t+3]=f;return}if(l===1){e[t+0]=p,e[t+1]=g,e[t+2]=v,e[t+3]=M;return}if(f!==M||c!==p||o!==g||h!==v){let x=1-l;const m=c*p+o*g+h*v+f*M,R=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const I=Math.sqrt(b),D=Math.atan2(I,m*R);x=Math.sin(x*D)/I,l=Math.sin(l*D)/I}const E=l*R;if(c=c*x+p*E,o=o*x+g*E,h=h*x+v*E,f=f*x+M*E,x===1-l){const I=1/Math.sqrt(c*c+o*o+h*h+f*f);c*=I,o*=I,h*=I,f*=I}}e[t]=c,e[t+1]=o,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,i,a){const l=n[s],c=n[s+1],o=n[s+2],h=n[s+3],f=i[a],p=i[a+1],g=i[a+2],v=i[a+3];return e[t]=l*v+h*f+c*g-o*p,e[t+1]=c*v+h*p+o*f-l*g,e[t+2]=o*v+h*g+l*p-c*f,e[t+3]=h*v-l*f-c*p-o*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,i=e._z,a=e._order,l=Math.cos,c=Math.sin,o=l(n/2),h=l(s/2),f=l(i/2),p=c(n/2),g=c(s/2),v=c(i/2);switch(a){case"XYZ":this._x=p*h*f+o*g*v,this._y=o*g*f-p*h*v,this._z=o*h*v+p*g*f,this._w=o*h*f-p*g*v;break;case"YXZ":this._x=p*h*f+o*g*v,this._y=o*g*f-p*h*v,this._z=o*h*v-p*g*f,this._w=o*h*f+p*g*v;break;case"ZXY":this._x=p*h*f-o*g*v,this._y=o*g*f+p*h*v,this._z=o*h*v+p*g*f,this._w=o*h*f-p*g*v;break;case"ZYX":this._x=p*h*f-o*g*v,this._y=o*g*f+p*h*v,this._z=o*h*v-p*g*f,this._w=o*h*f+p*g*v;break;case"YZX":this._x=p*h*f+o*g*v,this._y=o*g*f+p*h*v,this._z=o*h*v-p*g*f,this._w=o*h*f-p*g*v;break;case"XZY":this._x=p*h*f-o*g*v,this._y=o*g*f-p*h*v,this._z=o*h*v+p*g*f,this._w=o*h*f+p*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],i=t[8],a=t[1],l=t[5],c=t[9],o=t[2],h=t[6],f=t[10],p=n+l+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(h-c)*g,this._y=(i-o)*g,this._z=(a-s)*g}else if(n>l&&n>f){const g=2*Math.sqrt(1+n-l-f);this._w=(h-c)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(i+o)/g}else if(l>f){const g=2*Math.sqrt(1+l-n-f);this._w=(i-o)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+f-n-l);this._w=(a-s)/g,this._x=(i+o)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,i=e._z,a=e._w,l=t._x,c=t._y,o=t._z,h=t._w;return this._x=n*h+a*l+s*o-i*c,this._y=s*h+a*c+i*l-n*o,this._z=i*h+a*o+n*c-s*l,this._w=a*h-n*l-s*c-i*o,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,i=this._z,a=this._w;let l=a*e._w+n*e._x+s*e._y+i*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=n,this._y=s,this._z=i,this;const c=1-l*l;if(c<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*s+t*this._y,this._z=g*i+t*this._z,this.normalize(),this}const o=Math.sqrt(c),h=Math.atan2(o,l),f=Math.sin((1-t)*h)/o,p=Math.sin(t*h)/o;return this._w=a*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=i*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*s,this.y=i[1]*t+i[4]*n+i[7]*s,this.z=i[2]*t+i[5]*n+i[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*s+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*s+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*s+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*s+i[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,i=e.x,a=e.y,l=e.z,c=e.w,o=2*(a*s-l*n),h=2*(l*t-i*s),f=2*(i*n-a*t);return this.x=t+c*o+a*f-l*h,this.y=n+c*h+l*o-i*f,this.z=s+c*f+i*h-a*o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*s,this.y=i[1]*t+i[5]*n+i[9]*s,this.z=i[2]*t+i[6]*n+i[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,i=e.z,a=t.x,l=t.y,c=t.z;return this.x=s*c-i*l,this.y=i*a-n*c,this.z=n*l-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ra.copy(this).projectOnVector(e),this.sub(Ra)}reflect(e){return this.sub(Ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ra=new O,fc=new Fn;class Qe{constructor(e,t,n,s,i,a,l,c,o){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,i,a,l,c,o)}set(e,t,n,s,i,a,l,c,o){const h=this.elements;return h[0]=e,h[1]=s,h[2]=l,h[3]=t,h[4]=i,h[5]=c,h[6]=n,h[7]=a,h[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,i=this.elements,a=n[0],l=n[3],c=n[6],o=n[1],h=n[4],f=n[7],p=n[2],g=n[5],v=n[8],M=s[0],x=s[3],m=s[6],R=s[1],b=s[4],E=s[7],I=s[2],D=s[5],N=s[8];return i[0]=a*M+l*R+c*I,i[3]=a*x+l*b+c*D,i[6]=a*m+l*E+c*N,i[1]=o*M+h*R+f*I,i[4]=o*x+h*b+f*D,i[7]=o*m+h*E+f*N,i[2]=p*M+g*R+v*I,i[5]=p*x+g*b+v*D,i[8]=p*m+g*E+v*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],i=e[3],a=e[4],l=e[5],c=e[6],o=e[7],h=e[8];return t*a*h-t*l*o-n*i*h+n*l*c+s*i*o-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],i=e[3],a=e[4],l=e[5],c=e[6],o=e[7],h=e[8],f=h*a-l*o,p=l*c-h*i,g=o*i-a*c,v=t*f+n*p+s*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=f*M,e[1]=(s*o-h*n)*M,e[2]=(l*n-s*a)*M,e[3]=p*M,e[4]=(h*t-s*c)*M,e[5]=(s*i-l*t)*M,e[6]=g*M,e[7]=(n*c-o*t)*M,e[8]=(a*t-n*i)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,i,a,l){const c=Math.cos(i),o=Math.sin(i);return this.set(n*c,n*o,-n*(c*a+o*l)+a+e,-s*o,s*c,-s*(-o*a+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Ca.makeScale(e,t)),this}rotate(e){return this.premultiply(Ca.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ca.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ca=new Qe;function Ku(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ir(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Zf(){const r=ir("canvas");return r.style.display="block",r}const dc={};function fs(r){r in dc||(dc[r]=!0,console.warn(r))}function Jf(r,e,t){return new Promise(function(n,s){function i(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(i,t);break;default:n()}}setTimeout(i,t)})}const pc=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mc=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qf(){const r={enabled:!0,workingColorSpace:nn,spaces:{},convert:function(s,i,a){return this.enabled===!1||i===a||!i||!a||(this.spaces[i].transfer===Tt&&(s.r=ei(s.r),s.g=ei(s.g),s.b=ei(s.b)),this.spaces[i].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[i].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Tt&&(s.r=ds(s.r),s.g=ds(s.g),s.b=ds(s.b))),s},workingToColorSpace:function(s,i){return this.convert(s,this.workingColorSpace,i)},colorSpaceToWorking:function(s,i){return this.convert(s,i,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?ra:this.spaces[s].transfer},getLuminanceCoefficients:function(s,i=this.workingColorSpace){return s.fromArray(this.spaces[i].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,i,a){return s.copy(this.spaces[i].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,i){return fs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(s,i)},toWorkingColorSpace:function(s,i){return fs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(s,i)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[nn]:{primaries:e,whitePoint:n,transfer:ra,toXYZ:pc,fromXYZ:mc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:n,transfer:Tt,toXYZ:pc,fromXYZ:mc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),r}const lt=Qf();function ei(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ds(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Xi;class ed{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xi===void 0&&(Xi=ir("canvas")),Xi.width=e.width,Xi.height=e.height;const s=Xi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Xi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ir("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),i=s.data;for(let a=0;a<i.length;a++)i[a]=ei(i[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ei(t[n]/255)*255):t[n]=ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let td=0;class vl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let i;if(Array.isArray(s)){i=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?i.push(Pa(s[a].image)):i.push(Pa(s[a]))}else i=Pa(s);n.url=i}return t||(e.images[this.uuid]=n),n}}function Pa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ed.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nd=0;const La=new O;class kt extends Es{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=Zn,s=Zn,i=hn,a=Jn,l=vn,c=Nn,o=kt.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Pn(),this.name="",this.source=new vl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=i,this.minFilter=a,this.anisotropy=o,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(La).x}get height(){return this.source.getSize(La).y}get depth(){return this.source.getSize(La).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fi:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fi:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Bu;kt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,i;const c=e.elements,o=c[0],h=c[4],f=c[8],p=c[1],g=c[5],v=c[9],M=c[2],x=c[6],m=c[10];if(Math.abs(h-p)<.01&&Math.abs(f-M)<.01&&Math.abs(v-x)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+M)<.1&&Math.abs(v+x)<.1&&Math.abs(o+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(o+1)/2,E=(g+1)/2,I=(m+1)/2,D=(h+p)/4,N=(f+M)/4,B=(v+x)/4;return b>E&&b>I?b<.01?(n=0,s=.707106781,i=.707106781):(n=Math.sqrt(b),s=D/n,i=N/n):E>I?E<.01?(n=.707106781,s=0,i=.707106781):(s=Math.sqrt(E),n=D/s,i=B/s):I<.01?(n=.707106781,s=.707106781,i=0):(i=Math.sqrt(I),n=N/i,s=B/i),this.set(n,s,i,t),this}let R=Math.sqrt((x-v)*(x-v)+(f-M)*(f-M)+(p-h)*(p-h));return Math.abs(R)<.001&&(R=1),this.x=(x-v)/R,this.y=(f-M)/R,this.z=(p-h)/R,this.w=Math.acos((o+g+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class id extends Es{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const s={width:e,height:t,depth:n.depth},i=new kt(s);this.textures=[];const a=n.count;for(let l=0;l<a;l++)this.textures[l]=i.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,i=this.textures.length;s<i;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new vl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends id{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ju extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sd extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class On{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const i=n.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=i.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(i,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(e.matrixWorld),this.union(_r)}const s=e.children;for(let i=0,a=s.length;i<a;i++)this.expandByObject(s[i],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),xr.subVectors(this.max,Is),$i.subVectors(e.a,Is),qi.subVectors(e.b,Is),Yi.subVectors(e.c,Is),ii.subVectors(qi,$i),si.subVectors(Yi,qi),xi.subVectors($i,Yi);let t=[0,-ii.z,ii.y,0,-si.z,si.y,0,-xi.z,xi.y,ii.z,0,-ii.x,si.z,0,-si.x,xi.z,0,-xi.x,-ii.y,ii.x,0,-si.y,si.x,0,-xi.y,xi.x,0];return!Ia(t,$i,qi,Yi,xr)||(t=[1,0,0,0,1,0,0,0,1],!Ia(t,$i,qi,Yi,xr))?!1:(vr.crossVectors(ii,si),t=[vr.x,vr.y,vr.z],Ia(t,$i,qi,Yi,xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vn=[new O,new O,new O,new O,new O,new O,new O,new O],Tn=new O,_r=new On,$i=new O,qi=new O,Yi=new O,ii=new O,si=new O,xi=new O,Is=new O,xr=new O,vr=new O,vi=new O;function Ia(r,e,t,n,s){for(let i=0,a=r.length-3;i<=a;i+=3){vi.fromArray(r,i);const l=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),c=e.dot(vi),o=t.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(c,o,h),Math.min(c,o,h))>l)return!1}return!0}const rd=new On,Ds=new O,Da=new O;class Bn{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rd.setFromPoints(e).getCenter(n);let s=0;for(let i=0,a=e.length;i<a;i++)s=Math.max(s,n.distanceToSquared(e[i]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ds.subVectors(e,this.center);const t=Ds.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ds.copy(e.center).add(Da)),this.expandByPoint(Ds.copy(e.center).sub(Da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Gn=new O,Ua=new O,Mr=new O,ri=new O,Na=new O,yr=new O,Fa=new O;class ha{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ua.copy(e).add(t).multiplyScalar(.5),Mr.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(Ua);const i=e.distanceTo(t)*.5,a=-this.direction.dot(Mr),l=ri.dot(this.direction),c=-ri.dot(Mr),o=ri.lengthSq(),h=Math.abs(1-a*a);let f,p,g,v;if(h>0)if(f=a*c-l,p=a*l-c,v=i*h,f>=0)if(p>=-v)if(p<=v){const M=1/h;f*=M,p*=M,g=f*(f+a*p+2*l)+p*(a*f+p+2*c)+o}else p=i,f=Math.max(0,-(a*p+l)),g=-f*f+p*(p+2*c)+o;else p=-i,f=Math.max(0,-(a*p+l)),g=-f*f+p*(p+2*c)+o;else p<=-v?(f=Math.max(0,-(-a*i+l)),p=f>0?-i:Math.min(Math.max(-i,-c),i),g=-f*f+p*(p+2*c)+o):p<=v?(f=0,p=Math.min(Math.max(-i,-c),i),g=p*(p+2*c)+o):(f=Math.max(0,-(a*i+l)),p=f>0?i:Math.min(Math.max(-i,-c),i),g=-f*f+p*(p+2*c)+o);else p=a>0?-i:i,f=Math.max(0,-(a*p+l)),g=-f*f+p*(p+2*c)+o;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ua).addScaledVector(Mr,p),g}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);const n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,i=e.radius*e.radius;if(s>i)return null;const a=Math.sqrt(i-s),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,i,a,l,c;const o=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return o>=0?(n=(e.min.x-p.x)*o,s=(e.max.x-p.x)*o):(n=(e.max.x-p.x)*o,s=(e.min.x-p.x)*o),h>=0?(i=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(i=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||i>s||((i>n||isNaN(n))&&(n=i),(a<s||isNaN(s))&&(s=a),f>=0?(l=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(l=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,n,s,i){Na.subVectors(t,e),yr.subVectors(n,e),Fa.crossVectors(Na,yr);let a=this.direction.dot(Fa),l;if(a>0){if(s)return null;l=1}else if(a<0)l=-1,a=-a;else return null;ri.subVectors(this.origin,e);const c=l*this.direction.dot(yr.crossVectors(ri,yr));if(c<0)return null;const o=l*this.direction.dot(Na.cross(ri));if(o<0||c+o>a)return null;const h=-l*ri.dot(Fa);return h<0?null:this.at(h/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,n,s,i,a,l,c,o,h,f,p,g,v,M,x){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,i,a,l,c,o,h,f,p,g,v,M,x)}set(e,t,n,s,i,a,l,c,o,h,f,p,g,v,M,x){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=i,m[5]=a,m[9]=l,m[13]=c,m[2]=o,m[6]=h,m[10]=f,m[14]=p,m[3]=g,m[7]=v,m[11]=M,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ki.setFromMatrixColumn(e,0).length(),i=1/Ki.setFromMatrixColumn(e,1).length(),a=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,i=e.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(s),o=Math.sin(s),h=Math.cos(i),f=Math.sin(i);if(e.order==="XYZ"){const p=a*h,g=a*f,v=l*h,M=l*f;t[0]=c*h,t[4]=-c*f,t[8]=o,t[1]=g+v*o,t[5]=p-M*o,t[9]=-l*c,t[2]=M-p*o,t[6]=v+g*o,t[10]=a*c}else if(e.order==="YXZ"){const p=c*h,g=c*f,v=o*h,M=o*f;t[0]=p+M*l,t[4]=v*l-g,t[8]=a*o,t[1]=a*f,t[5]=a*h,t[9]=-l,t[2]=g*l-v,t[6]=M+p*l,t[10]=a*c}else if(e.order==="ZXY"){const p=c*h,g=c*f,v=o*h,M=o*f;t[0]=p-M*l,t[4]=-a*f,t[8]=v+g*l,t[1]=g+v*l,t[5]=a*h,t[9]=M-p*l,t[2]=-a*o,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){const p=a*h,g=a*f,v=l*h,M=l*f;t[0]=c*h,t[4]=v*o-g,t[8]=p*o+M,t[1]=c*f,t[5]=M*o+p,t[9]=g*o-v,t[2]=-o,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){const p=a*c,g=a*o,v=l*c,M=l*o;t[0]=c*h,t[4]=M-p*f,t[8]=v*f+g,t[1]=f,t[5]=a*h,t[9]=-l*h,t[2]=-o*h,t[6]=g*f+v,t[10]=p-M*f}else if(e.order==="XZY"){const p=a*c,g=a*o,v=l*c,M=l*o;t[0]=c*h,t[4]=-f,t[8]=o*h,t[1]=p*f+M,t[5]=a*h,t[9]=g*f-v,t[2]=v*f-g,t[6]=l*h,t[10]=M*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ad,e,od)}lookAt(e,t,n){const s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),ai.crossVectors(n,cn),ai.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),ai.crossVectors(n,cn)),ai.normalize(),Sr.crossVectors(cn,ai),s[0]=ai.x,s[4]=Sr.x,s[8]=cn.x,s[1]=ai.y,s[5]=Sr.y,s[9]=cn.y,s[2]=ai.z,s[6]=Sr.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,i=this.elements,a=n[0],l=n[4],c=n[8],o=n[12],h=n[1],f=n[5],p=n[9],g=n[13],v=n[2],M=n[6],x=n[10],m=n[14],R=n[3],b=n[7],E=n[11],I=n[15],D=s[0],N=s[4],B=s[8],A=s[12],w=s[1],L=s[5],Y=s[9],X=s[13],V=s[2],ne=s[6],K=s[10],oe=s[14],j=s[3],me=s[7],_e=s[11],Ie=s[15];return i[0]=a*D+l*w+c*V+o*j,i[4]=a*N+l*L+c*ne+o*me,i[8]=a*B+l*Y+c*K+o*_e,i[12]=a*A+l*X+c*oe+o*Ie,i[1]=h*D+f*w+p*V+g*j,i[5]=h*N+f*L+p*ne+g*me,i[9]=h*B+f*Y+p*K+g*_e,i[13]=h*A+f*X+p*oe+g*Ie,i[2]=v*D+M*w+x*V+m*j,i[6]=v*N+M*L+x*ne+m*me,i[10]=v*B+M*Y+x*K+m*_e,i[14]=v*A+M*X+x*oe+m*Ie,i[3]=R*D+b*w+E*V+I*j,i[7]=R*N+b*L+E*ne+I*me,i[11]=R*B+b*Y+E*K+I*_e,i[15]=R*A+b*X+E*oe+I*Ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],i=e[12],a=e[1],l=e[5],c=e[9],o=e[13],h=e[2],f=e[6],p=e[10],g=e[14],v=e[3],M=e[7],x=e[11],m=e[15];return v*(+i*c*f-s*o*f-i*l*p+n*o*p+s*l*g-n*c*g)+M*(+t*c*g-t*o*p+i*a*p-s*a*g+s*o*h-i*c*h)+x*(+t*o*f-t*l*g-i*a*f+n*a*g+i*l*h-n*o*h)+m*(-s*l*h-t*c*f+t*l*p+s*a*f-n*a*p+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],i=e[3],a=e[4],l=e[5],c=e[6],o=e[7],h=e[8],f=e[9],p=e[10],g=e[11],v=e[12],M=e[13],x=e[14],m=e[15],R=f*x*o-M*p*o+M*c*g-l*x*g-f*c*m+l*p*m,b=v*p*o-h*x*o-v*c*g+a*x*g+h*c*m-a*p*m,E=h*M*o-v*f*o+v*l*g-a*M*g-h*l*m+a*f*m,I=v*f*c-h*M*c-v*l*p+a*M*p+h*l*x-a*f*x,D=t*R+n*b+s*E+i*I;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/D;return e[0]=R*N,e[1]=(M*p*i-f*x*i-M*s*g+n*x*g+f*s*m-n*p*m)*N,e[2]=(l*x*i-M*c*i+M*s*o-n*x*o-l*s*m+n*c*m)*N,e[3]=(f*c*i-l*p*i-f*s*o+n*p*o+l*s*g-n*c*g)*N,e[4]=b*N,e[5]=(h*x*i-v*p*i+v*s*g-t*x*g-h*s*m+t*p*m)*N,e[6]=(v*c*i-a*x*i-v*s*o+t*x*o+a*s*m-t*c*m)*N,e[7]=(a*p*i-h*c*i+h*s*o-t*p*o-a*s*g+t*c*g)*N,e[8]=E*N,e[9]=(v*f*i-h*M*i-v*n*g+t*M*g+h*n*m-t*f*m)*N,e[10]=(a*M*i-v*l*i+v*n*o-t*M*o-a*n*m+t*l*m)*N,e[11]=(h*l*i-a*f*i-h*n*o+t*f*o+a*n*g-t*l*g)*N,e[12]=I*N,e[13]=(h*M*s-v*f*s+v*n*p-t*M*p-h*n*x+t*f*x)*N,e[14]=(v*l*s-a*M*s-v*n*c+t*M*c+a*n*x-t*l*x)*N,e[15]=(a*f*s-h*l*s+h*n*c-t*f*c-a*n*p+t*l*p)*N,this}scale(e){const t=this.elements,n=e.x,s=e.y,i=e.z;return t[0]*=n,t[4]*=s,t[8]*=i,t[1]*=n,t[5]*=s,t[9]*=i,t[2]*=n,t[6]*=s,t[10]*=i,t[3]*=n,t[7]*=s,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),i=1-n,a=e.x,l=e.y,c=e.z,o=i*a,h=i*l;return this.set(o*a+n,o*l-s*c,o*c+s*l,0,o*l+s*c,h*l+n,h*c-s*a,0,o*c-s*l,h*c+s*a,i*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,i,a){return this.set(1,n,i,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,i=t._x,a=t._y,l=t._z,c=t._w,o=i+i,h=a+a,f=l+l,p=i*o,g=i*h,v=i*f,M=a*h,x=a*f,m=l*f,R=c*o,b=c*h,E=c*f,I=n.x,D=n.y,N=n.z;return s[0]=(1-(M+m))*I,s[1]=(g+E)*I,s[2]=(v-b)*I,s[3]=0,s[4]=(g-E)*D,s[5]=(1-(p+m))*D,s[6]=(x+R)*D,s[7]=0,s[8]=(v+b)*N,s[9]=(x-R)*N,s[10]=(1-(p+M))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let i=Ki.set(s[0],s[1],s[2]).length();const a=Ki.set(s[4],s[5],s[6]).length(),l=Ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(i=-i),e.x=s[12],e.y=s[13],e.z=s[14],bn.copy(this);const o=1/i,h=1/a,f=1/l;return bn.elements[0]*=o,bn.elements[1]*=o,bn.elements[2]*=o,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,t.setFromRotationMatrix(bn),n.x=i,n.y=a,n.z=l,this}makePerspective(e,t,n,s,i,a,l=Un,c=!1){const o=this.elements,h=2*i/(t-e),f=2*i/(n-s),p=(t+e)/(t-e),g=(n+s)/(n-s);let v,M;if(c)v=i/(a-i),M=a*i/(a-i);else if(l===Un)v=-(a+i)/(a-i),M=-2*a*i/(a-i);else if(l===aa)v=-a/(a-i),M=-a*i/(a-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return o[0]=h,o[4]=0,o[8]=p,o[12]=0,o[1]=0,o[5]=f,o[9]=g,o[13]=0,o[2]=0,o[6]=0,o[10]=v,o[14]=M,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,s,i,a,l=Un,c=!1){const o=this.elements,h=2/(t-e),f=2/(n-s),p=-(t+e)/(t-e),g=-(n+s)/(n-s);let v,M;if(c)v=1/(a-i),M=a/(a-i);else if(l===Un)v=-2/(a-i),M=-(a+i)/(a-i);else if(l===aa)v=-1/(a-i),M=-i/(a-i);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return o[0]=h,o[4]=0,o[8]=0,o[12]=p,o[1]=0,o[5]=f,o[9]=0,o[13]=g,o[2]=0,o[6]=0,o[10]=v,o[14]=M,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ki=new O,bn=new et,ad=new O(0,0,0),od=new O(1,1,1),ai=new O,Sr=new O,cn=new O,gc=new et,_c=new Fn;class yn{constructor(e=0,t=0,n=0,s=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,i=s[0],a=s[4],l=s[8],c=s[1],o=s[5],h=s[9],f=s[2],p=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(p,o),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,o)):(this._y=Math.atan2(-f,i),this._z=0);break;case"ZXY":this._x=Math.asin(it(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,o)):(this._y=0,this._z=Math.atan2(c,i));break;case"ZYX":this._y=Math.asin(-it(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,i)):(this._x=0,this._z=Math.atan2(-a,o));break;case"YZX":this._z=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,o),this._y=Math.atan2(-f,i)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,o),this._y=Math.atan2(l,i)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _c.setFromEuler(this),this.setFromQuaternion(_c,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class Zu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ld=0;const xc=new O,ji=new Fn,Wn=new et,Er=new O,Us=new O,cd=new O,ud=new Fn,vc=new O(1,0,0),Mc=new O(0,1,0),yc=new O(0,0,1),Sc={type:"added"},hd={type:"removed"},Zi={type:"childadded",child:null},Oa={type:"childremoved",child:null};class xt extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new O,t=new yn,n=new Fn,s=new O(1,1,1);function i(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(i),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new Qe}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.multiply(ji),this}rotateOnWorldAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.premultiply(ji),this}rotateX(e){return this.rotateOnAxis(vc,e)}rotateY(e){return this.rotateOnAxis(Mc,e)}rotateZ(e){return this.rotateOnAxis(yc,e)}translateOnAxis(e,t){return xc.copy(e).applyQuaternion(this.quaternion),this.position.add(xc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vc,e)}translateY(e){return this.translateOnAxis(Mc,e)}translateZ(e){return this.translateOnAxis(yc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Er.copy(e):Er.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Us,Er,this.up):Wn.lookAt(Er,Us,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(Wn),this.quaternion.premultiply(ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sc),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hd),Oa.child=e,this.dispatchEvent(Oa),Oa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sc),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let i=0,a=s.length;i<a;i++)s[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,cd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,ud,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let i=0,a=s.length;i<a;i++)s[i].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function i(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=i(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let o=0,h=c.length;o<h;o++){const f=c[o];i(e.shapes,f)}else i(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,o=this.material.length;c<o;c++)l.push(i(e.materials,this.material[c]));s.material=l}else s.material=i(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];s.animations.push(i(e.animations,c))}}if(t){const l=a(e.geometries),c=a(e.materials),o=a(e.textures),h=a(e.images),f=a(e.shapes),p=a(e.skeletons),g=a(e.animations),v=a(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),o.length>0&&(n.textures=o),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(l){const c=[];for(const o in l){const h=l[o];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}xt.DEFAULT_UP=new O(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new O,Xn=new O,Ba=new O,$n=new O,Ji=new O,Qi=new O,Ec=new O,ka=new O,za=new O,Ha=new O,Va=new dt,Ga=new dt,Wa=new dt;class xn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),An.subVectors(e,t),s.cross(An);const i=s.lengthSq();return i>0?s.multiplyScalar(1/Math.sqrt(i)):s.set(0,0,0)}static getBarycoord(e,t,n,s,i){An.subVectors(s,t),Xn.subVectors(n,t),Ba.subVectors(e,t);const a=An.dot(An),l=An.dot(Xn),c=An.dot(Ba),o=Xn.dot(Xn),h=Xn.dot(Ba),f=a*o-l*l;if(f===0)return i.set(0,0,0),null;const p=1/f,g=(o*c-l*h)*p,v=(a*h-l*c)*p;return i.set(1-g-v,v,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,s,i,a,l,c){return this.getBarycoord(e,t,n,s,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(i,$n.x),c.addScaledVector(a,$n.y),c.addScaledVector(l,$n.z),c)}static getInterpolatedAttribute(e,t,n,s,i,a){return Va.setScalar(0),Ga.setScalar(0),Wa.setScalar(0),Va.fromBufferAttribute(e,t),Ga.fromBufferAttribute(e,n),Wa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Va,i.x),a.addScaledVector(Ga,i.y),a.addScaledVector(Wa,i.z),a}static isFrontFacing(e,t,n,s){return An.subVectors(n,t),Xn.subVectors(e,t),An.cross(Xn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),An.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,i){return xn.getInterpolation(e,this.a,this.b,this.c,t,n,s,i)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,i=this.c;let a,l;Ji.subVectors(s,n),Qi.subVectors(i,n),ka.subVectors(e,n);const c=Ji.dot(ka),o=Qi.dot(ka);if(c<=0&&o<=0)return t.copy(n);za.subVectors(e,s);const h=Ji.dot(za),f=Qi.dot(za);if(h>=0&&f<=h)return t.copy(s);const p=c*f-h*o;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ji,a);Ha.subVectors(e,i);const g=Ji.dot(Ha),v=Qi.dot(Ha);if(v>=0&&g<=v)return t.copy(i);const M=g*o-c*v;if(M<=0&&o>=0&&v<=0)return l=o/(o-v),t.copy(n).addScaledVector(Qi,l);const x=h*v-g*f;if(x<=0&&f-h>=0&&g-v>=0)return Ec.subVectors(i,s),l=(f-h)/(f-h+(g-v)),t.copy(s).addScaledVector(Ec,l);const m=1/(x+M+p);return a=M*m,l=p*m,t.copy(n).addScaledVector(Ji,a).addScaledVector(Qi,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function Xa(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=xl(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,a=2*n-i;this.r=Xa(a,i,e+1/3),this.g=Xa(a,i,e),this.b=Xa(a,i,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=Wt){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=s[1],a=i.length;if(a===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const n=Ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return lt.workingToColorSpace(qt.copy(this),e),Math.round(it(qt.r*255,0,255))*65536+Math.round(it(qt.g*255,0,255))*256+Math.round(it(qt.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(qt.copy(this),t);const n=qt.r,s=qt.g,i=qt.b,a=Math.max(n,s,i),l=Math.min(n,s,i);let c,o;const h=(l+a)/2;if(l===a)c=0,o=0;else{const f=a-l;switch(o=h<=.5?f/(a+l):f/(2-a-l),a){case n:c=(s-i)/f+(s<i?6:0);break;case s:c=(i-n)/f+2;break;case i:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=o,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Wt){lt.workingToColorSpace(qt.copy(this),e);const t=qt.r,n=qt.g,s=qt.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(Tr);const n=Ks(oi.h,Tr.h,t),s=Ks(oi.s,Tr.s,t),i=Ks(oi.l,Tr.l,t);return this.setHSL(n,s,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*s,this.g=i[1]*t+i[4]*n+i[7]*s,this.b=i[2]*t+i[5]*n+i[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Ve;Ve.NAMES=Ju;let fd=0;class Mn extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=hs,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xo,this.blendDst=vo,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xo&&(n.blendSrc=this.blendSrc),this.blendDst!==vo&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(i){const a=[];for(const l in i){const c=i[l];delete c.metadata,a.push(c)}return a}if(t){const i=s(e.textures),a=s(e.images);i.length>0&&(n.textures=i),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let i=0;i!==s;++i)n[i]=t[i].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fi extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new O,br=new Ke;let dd=0;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nl,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,i=this.itemSize;s<i;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nl&&(e.usage=this.usage),e}}class Qu extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class eh extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zt extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let pd=0;const gn=new et,$a=new xt,es=new O,un=new On,Ns=new On,Ot=new O;class sn extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ku(e)?eh:Qu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new Qe().getNormalMatrix(e);n.applyNormalMatrix(i),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return $a.lookAt(e),$a.updateMatrix(),this.applyMatrix4($a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,i=e.length;s<i;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new zt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const i=e[s];t.setXYZ(s,i.x,i.y,i.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const i=t[n];un.setFromBufferAttribute(i),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const l=t[i];Ns.setFromBufferAttribute(l),this.morphTargetsRelative?(Ot.addVectors(un.min,Ns.min),un.expandByPoint(Ot),Ot.addVectors(un.max,Ns.max),un.expandByPoint(Ot)):(un.expandByPoint(Ns.min),un.expandByPoint(Ns.max))}un.getCenter(n);let s=0;for(let i=0,a=e.count;i<a;i++)Ot.fromBufferAttribute(e,i),s=Math.max(s,n.distanceToSquared(Ot));if(t)for(let i=0,a=t.length;i<a;i++){const l=t[i],c=this.morphTargetsRelative;for(let o=0,h=l.count;o<h;o++)Ot.fromBufferAttribute(l,o),c&&(es.fromBufferAttribute(e,o),Ot.add(es)),s=Math.max(s,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,i=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),l=[],c=[];for(let B=0;B<n.count;B++)l[B]=new O,c[B]=new O;const o=new O,h=new O,f=new O,p=new Ke,g=new Ke,v=new Ke,M=new O,x=new O;function m(B,A,w){o.fromBufferAttribute(n,B),h.fromBufferAttribute(n,A),f.fromBufferAttribute(n,w),p.fromBufferAttribute(i,B),g.fromBufferAttribute(i,A),v.fromBufferAttribute(i,w),h.sub(o),f.sub(o),g.sub(p),v.sub(p);const L=1/(g.x*v.y-v.x*g.y);isFinite(L)&&(M.copy(h).multiplyScalar(v.y).addScaledVector(f,-g.y).multiplyScalar(L),x.copy(f).multiplyScalar(g.x).addScaledVector(h,-v.x).multiplyScalar(L),l[B].add(M),l[A].add(M),l[w].add(M),c[B].add(x),c[A].add(x),c[w].add(x))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let B=0,A=R.length;B<A;++B){const w=R[B],L=w.start,Y=w.count;for(let X=L,V=L+Y;X<V;X+=3)m(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const b=new O,E=new O,I=new O,D=new O;function N(B){I.fromBufferAttribute(s,B),D.copy(I);const A=l[B];b.copy(A),b.sub(I.multiplyScalar(I.dot(A))).normalize(),E.crossVectors(D,A);const L=E.dot(c[B])<0?-1:1;a.setXYZW(B,b.x,b.y,b.z,L)}for(let B=0,A=R.length;B<A;++B){const w=R[B],L=w.start,Y=w.count;for(let X=L,V=L+Y;X<V;X+=3)N(e.getX(X+0)),N(e.getX(X+1)),N(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);const s=new O,i=new O,a=new O,l=new O,c=new O,o=new O,h=new O,f=new O;if(e)for(let p=0,g=e.count;p<g;p+=3){const v=e.getX(p+0),M=e.getX(p+1),x=e.getX(p+2);s.fromBufferAttribute(t,v),i.fromBufferAttribute(t,M),a.fromBufferAttribute(t,x),h.subVectors(a,i),f.subVectors(s,i),h.cross(f),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,M),o.fromBufferAttribute(n,x),l.add(h),c.add(h),o.add(h),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(x,o.x,o.y,o.z)}else for(let p=0,g=t.count;p<g;p+=3)s.fromBufferAttribute(t,p+0),i.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,i),f.subVectors(s,i),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(l,c){const o=l.array,h=l.itemSize,f=l.normalized,p=new o.constructor(c.length*h);let g=0,v=0;for(let M=0,x=c.length;M<x;M++){l.isInterleavedBufferAttribute?g=c[M]*l.data.stride+l.offset:g=c[M]*h;for(let m=0;m<h;m++)p[v++]=o[g++]}return new Yt(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,n=this.index.array,s=this.attributes;for(const l in s){const c=s[l],o=e(c,n);t.setAttribute(l,o)}const i=this.morphAttributes;for(const l in i){const c=[],o=i[l];for(let h=0,f=o.length;h<f;h++){const p=o[h],g=e(p,n);c.push(g)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const o=a[l];t.addGroup(o.start,o.count,o.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const o in c)c[o]!==void 0&&(e[o]=c[o]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const o=n[c];e.data.attributes[c]=o.toJSON(e.data)}const s={};let i=!1;for(const c in this.morphAttributes){const o=this.morphAttributes[c],h=[];for(let f=0,p=o.length;f<p;f++){const g=o[f];h.push(g.toJSON(e.data))}h.length>0&&(s[c]=h,i=!0)}i&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const o in s){const h=s[o];this.setAttribute(o,h.clone(t))}const i=e.morphAttributes;for(const o in i){const h=[],f=i[o];for(let p=0,g=f.length;p<g;p++)h.push(f[p].clone(t));this.morphAttributes[o]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let o=0,h=a.length;o<h;o++){const f=a[o];this.addGroup(f.start,f.count,f.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tc=new et,Mi=new ha,Ar=new Bn,bc=new O,wr=new O,Rr=new O,Cr=new O,qa=new O,Pr=new O,Ac=new O,Lr=new O;class en extends xt{constructor(e=new sn,t=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=s.length;i<a;i++){const l=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=i}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(i&&l){Pr.set(0,0,0);for(let c=0,o=i.length;c<o;c++){const h=l[c],f=i[c];h!==0&&(qa.fromBufferAttribute(f,e),a?Pr.addScaledVector(qa,h):Pr.addScaledVector(qa.sub(t),h))}t.add(Pr)}return t}raycast(e,t){const n=this.geometry,s=this.material,i=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(i),Mi.copy(e.ray).recast(e.near),!(Ar.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Ar,bc)===null||Mi.origin.distanceToSquared(bc)>(e.far-e.near)**2))&&(Tc.copy(i).invert(),Mi.copy(e.ray).applyMatrix4(Tc),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,n){let s;const i=this.geometry,a=this.material,l=i.index,c=i.attributes.position,o=i.attributes.uv,h=i.attributes.uv1,f=i.attributes.normal,p=i.groups,g=i.drawRange;if(l!==null)if(Array.isArray(a))for(let v=0,M=p.length;v<M;v++){const x=p[v],m=a[x.materialIndex],R=Math.max(x.start,g.start),b=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let E=R,I=b;E<I;E+=3){const D=l.getX(E),N=l.getX(E+1),B=l.getX(E+2);s=Ir(this,m,e,n,o,h,f,D,N,B),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const v=Math.max(0,g.start),M=Math.min(l.count,g.start+g.count);for(let x=v,m=M;x<m;x+=3){const R=l.getX(x),b=l.getX(x+1),E=l.getX(x+2);s=Ir(this,a,e,n,o,h,f,R,b,E),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,M=p.length;v<M;v++){const x=p[v],m=a[x.materialIndex],R=Math.max(x.start,g.start),b=Math.min(c.count,Math.min(x.start+x.count,g.start+g.count));for(let E=R,I=b;E<I;E+=3){const D=E,N=E+1,B=E+2;s=Ir(this,m,e,n,o,h,f,D,N,B),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const v=Math.max(0,g.start),M=Math.min(c.count,g.start+g.count);for(let x=v,m=M;x<m;x+=3){const R=x,b=x+1,E=x+2;s=Ir(this,a,e,n,o,h,f,R,b,E),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function md(r,e,t,n,s,i,a,l){let c;if(e.side===an?c=n.intersectTriangle(a,i,s,!0,l):c=n.intersectTriangle(s,i,a,e.side===Ln,l),c===null)return null;Lr.copy(l),Lr.applyMatrix4(r.matrixWorld);const o=t.ray.origin.distanceTo(Lr);return o<t.near||o>t.far?null:{distance:o,point:Lr.clone(),object:r}}function Ir(r,e,t,n,s,i,a,l,c,o){r.getVertexPosition(l,wr),r.getVertexPosition(c,Rr),r.getVertexPosition(o,Cr);const h=md(r,e,t,n,wr,Rr,Cr,Ac);if(h){const f=new O;xn.getBarycoord(Ac,wr,Rr,Cr,f),s&&(h.uv=xn.getInterpolatedAttribute(s,l,c,o,f,new Ke)),i&&(h.uv1=xn.getInterpolatedAttribute(i,l,c,o,f,new Ke)),a&&(h.normal=xn.getInterpolatedAttribute(a,l,c,o,f,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:l,b:c,c:o,normal:new O,materialIndex:0};xn.getNormal(wr,Rr,Cr,p.normal),h.face=p,h.barycoord=f}return h}class ar extends sn{constructor(e=1,t=1,n=1,s=1,i=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:i,depthSegments:a};const l=this;s=Math.floor(s),i=Math.floor(i),a=Math.floor(a);const c=[],o=[],h=[],f=[];let p=0,g=0;v("z","y","x",-1,-1,n,t,e,a,i,0),v("z","y","x",1,-1,n,t,-e,a,i,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,i,4),v("x","y","z",-1,-1,e,t,-n,s,i,5),this.setIndex(c),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(f,2));function v(M,x,m,R,b,E,I,D,N,B,A){const w=E/N,L=I/B,Y=E/2,X=I/2,V=D/2,ne=N+1,K=B+1;let oe=0,j=0;const me=new O;for(let _e=0;_e<K;_e++){const Ie=_e*L-X;for(let qe=0;qe<ne;qe++){const pt=qe*w-Y;me[M]=pt*R,me[x]=Ie*b,me[m]=V,o.push(me.x,me.y,me.z),me[M]=0,me[x]=0,me[m]=D>0?1:-1,h.push(me.x,me.y,me.z),f.push(qe/N),f.push(1-_e/B),oe+=1}}for(let _e=0;_e<B;_e++)for(let Ie=0;Ie<N;Ie++){const qe=p+Ie+ne*_e,pt=p+Ie+ne*(_e+1),ct=p+(Ie+1)+ne*(_e+1),J=p+(Ie+1)+ne*_e;c.push(qe,pt,J),c.push(pt,ct,J),j+=6}l.addGroup(g,j,A),g+=j,p+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const s=r[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Jt(r){const e={};for(let t=0;t<r.length;t++){const n=vs(r[t]);for(const s in n)e[s]=n[s]}return e}function gd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function th(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const _d={clone:vs,merge:Jt};var xd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xd,this.fragmentShader=vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=gd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class nh extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new O,wc=new Ke,Rc=new Ke;class Qt extends nh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,wc,Rc),t.subVectors(Rc,wc)}setViewOffset(e,t,n,s,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,i=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,o=a.fullHeight;i+=a.offsetX*s/c,t-=a.offsetY*n/o,s*=a.width/c,n*=a.height/o}const l=this.filmOffset;l!==0&&(i+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ts=-90,ns=1;class Md extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qt(ts,ns,e,t);s.layers=this.layers,this.add(s);const i=new Qt(ts,ns,e,t);i.layers=this.layers,this.add(i);const a=new Qt(ts,ns,e,t);a.layers=this.layers,this.add(a);const l=new Qt(ts,ns,e,t);l.layers=this.layers,this.add(l);const c=new Qt(ts,ns,e,t);c.layers=this.layers,this.add(c);const o=new Qt(ts,ns,e,t);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,i,a,l,c]=t;for(const o of t)this.remove(o);if(e===Un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const o of t)this.add(o),o.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,a,l,c,o,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,i),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,l),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,o),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,p,g),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class ih extends kt{constructor(e=[],t=gs,n,s,i,a,l,c,o,h){super(e,t,n,s,i,a,l,c,o,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yd extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ih(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ar(5,5,5),i=new gi({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:di});i.uniforms.tEquirect.value=t;const a=new en(s,i),l=t.minFilter;return t.minFilter===Jn&&(t.minFilter=hn),new Md(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const i=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(i)}}class Ni extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sd={type:"move"};class Ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,i=null,a=null;const l=this._targetRay,c=this._grip,o=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(o&&e.hand){a=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,n),m=this._getHandJoint(o,M);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}const h=o.joints["index-finger-tip"],f=o.joints["thumb-tip"],p=h.position.distanceTo(f.position),g=.02,v=.005;o.inputState.pinching&&p>g+v?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!o.inputState.pinching&&p<=g-v&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&i!==null&&(s=i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Sd)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=i!==null),o!==null&&(o.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ni;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ed extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class sh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nl,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,i=this.stride;s<i;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new O;class sr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),i=yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=i,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[s+i])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new sr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[s+i])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class rh extends Mn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let is;const Fs=new O,ss=new O,rs=new O,as=new Ke,Os=new Ke,ah=new et,Dr=new O,Bs=new O,Ur=new O,Cc=new Ke,Ka=new Ke,Pc=new Ke;class Td extends xt{constructor(e=new rh){if(super(),this.isSprite=!0,this.type="Sprite",is===void 0){is=new sn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new sh(t,5);is.setIndex([0,1,2,0,2,3]),is.setAttribute("position",new sr(n,3,0,!1)),is.setAttribute("uv",new sr(n,2,3,!1))}this.geometry=is,this.material=e,this.center=new Ke(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ss.setFromMatrixScale(this.matrixWorld),ah.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),rs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ss.multiplyScalar(-rs.z);const n=this.material.rotation;let s,i;n!==0&&(i=Math.cos(n),s=Math.sin(n));const a=this.center;Nr(Dr.set(-.5,-.5,0),rs,a,ss,s,i),Nr(Bs.set(.5,-.5,0),rs,a,ss,s,i),Nr(Ur.set(.5,.5,0),rs,a,ss,s,i),Cc.set(0,0),Ka.set(1,0),Pc.set(1,1);let l=e.ray.intersectTriangle(Dr,Bs,Ur,!1,Fs);if(l===null&&(Nr(Bs.set(-.5,.5,0),rs,a,ss,s,i),Ka.set(0,1),l=e.ray.intersectTriangle(Dr,Ur,Bs,!1,Fs),l===null))return;const c=e.ray.origin.distanceTo(Fs);c<e.near||c>e.far||t.push({distance:c,point:Fs.clone(),uv:xn.getInterpolation(Fs,Dr,Bs,Ur,Cc,Ka,Pc,new Ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Nr(r,e,t,n,s,i){as.subVectors(r,t).addScalar(.5).multiply(n),s!==void 0?(Os.x=i*as.x-s*as.y,Os.y=s*as.x+i*as.y):Os.copy(as),r.copy(e),r.x+=Os.x,r.y+=Os.y,r.applyMatrix4(ah)}const Lc=new O,Ic=new dt,Dc=new dt,bd=new O,Uc=new et,Fr=new O,ja=new Bn,Nc=new et,Za=new ha;class Ad extends en{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=rc,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new On),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fr),this.boundingBox.expandByPoint(Fr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Bn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fr),this.boundingSphere.expandByPoint(Fr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ja.copy(this.boundingSphere),ja.applyMatrix4(s),e.ray.intersectsSphere(ja)!==!1&&(Nc.copy(s).invert(),Za.copy(e.ray).applyMatrix4(Nc),!(this.boundingBox!==null&&Za.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Za)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const i=1/e.manhattanLength();i!==1/0?e.multiplyScalar(i):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===rc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Sf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Ic.fromBufferAttribute(s.attributes.skinIndex,e),Dc.fromBufferAttribute(s.attributes.skinWeight,e),Lc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let i=0;i<4;i++){const a=Dc.getComponent(i);if(a!==0){const l=Ic.getComponent(i);Uc.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(bd.copy(Lc).applyMatrix4(Uc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class oh extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class lh extends kt{constructor(e=null,t=1,n=1,s,i,a,l,c,o=tn,h=tn,f,p){super(null,a,l,c,o,h,s,i,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fc=new et,wd=new et;class Ml{constructor(e=[],t=[]){this.uuid=Pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new et;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let i=0,a=e.length;i<a;i++){const l=e[i]?e[i].matrixWorld:wd;Fc.multiplyMatrices(l,t[i]),Fc.toArray(n,i*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Ml(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new lh(t,e,e,vn,Cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const i=e.bones[n];let a=t[i];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",i),a=new oh),this.bones.push(a),this.boneInverses.push(new et().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,i=t.length;s<i;s++){const a=t[s];e.bones.push(a.uuid);const l=n[s];e.boneInverses.push(l.toArray())}return e}}class il extends Yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const os=new et,Oc=new et,Or=[],Bc=new On,Rd=new et,ks=new en,zs=new Bn;class Cd extends en{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new il(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Rd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new On),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),Bc.copy(e.boundingBox).applyMatrix4(os),this.boundingBox.union(Bc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),zs.copy(e.boundingSphere).applyMatrix4(os),this.boundingSphere.union(zs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,i=n.length+1,a=e*i+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(n),e.ray.intersectsSphere(zs)!==!1))for(let i=0;i<s;i++){this.getMatrixAt(i,os),Oc.multiplyMatrices(n,os),ks.matrixWorld=Oc,ks.raycast(e,Or);for(let a=0,l=Or.length;a<l;a++){const c=Or[a];c.instanceId=i,c.object=this,t.push(c)}Or.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new il(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new lh(new Float32Array(s*this.count),s,this.count,dl,Cn));const i=this.morphTexture.source.data.data;let a=0;for(let o=0;o<n.length;o++)a+=n[o];const l=this.geometry.morphTargetsRelative?1:1-a,c=s*e;i[c]=l,i.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ja=new O,Pd=new O,Ld=new Qe;class Li{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ja.subVectors(n,t).cross(Pd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ja),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/s;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ld.getNormalMatrix(e),s=this.coplanarPoint(Ja).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new Bn,Id=new Ke(.5,.5),Br=new O;class yl{constructor(e=new Li,t=new Li,n=new Li,s=new Li,i=new Li,a=new Li){this.planes=[e,t,n,s,i,a]}set(e,t,n,s,i,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(i),l[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Un,n=!1){const s=this.planes,i=e.elements,a=i[0],l=i[1],c=i[2],o=i[3],h=i[4],f=i[5],p=i[6],g=i[7],v=i[8],M=i[9],x=i[10],m=i[11],R=i[12],b=i[13],E=i[14],I=i[15];if(s[0].setComponents(o-a,g-h,m-v,I-R).normalize(),s[1].setComponents(o+a,g+h,m+v,I+R).normalize(),s[2].setComponents(o+l,g+f,m+M,I+b).normalize(),s[3].setComponents(o-l,g-f,m-M,I-b).normalize(),n)s[4].setComponents(c,p,x,E).normalize(),s[5].setComponents(o-c,g-p,m-x,I-E).normalize();else if(s[4].setComponents(o-c,g-p,m-x,I-E).normalize(),t===Un)s[5].setComponents(o+c,g+p,m+x,I+E).normalize();else if(t===aa)s[5].setComponents(c,p,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){yi.center.set(0,0,0);const t=Id.distanceTo(e.center);return yi.radius=.7071067811865476+t,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Br.x=s.normal.x>0?e.max.x:e.min.x,Br.y=s.normal.y>0?e.max.y:e.min.y,Br.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Br)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sl extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oa=new O,la=new O,kc=new et,Hs=new ha,kr=new Bn,Qa=new O,zc=new O;class El extends xt{constructor(e=new sn,t=new Sl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,i=t.count;s<i;s++)oa.fromBufferAttribute(t,s-1),la.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=oa.distanceTo(la);e.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(s),kr.radius+=i,e.ray.intersectsSphere(kr)===!1)return;kc.copy(s).invert(),Hs.copy(e.ray).applyMatrix4(kc);const l=i/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,o=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){const g=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let M=g,x=v-1;M<x;M+=o){const m=h.getX(M),R=h.getX(M+1),b=zr(this,e,Hs,c,m,R,M);b&&t.push(b)}if(this.isLineLoop){const M=h.getX(v-1),x=h.getX(g),m=zr(this,e,Hs,c,M,x,v-1);m&&t.push(m)}}else{const g=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let M=g,x=v-1;M<x;M+=o){const m=zr(this,e,Hs,c,M,M+1,M);m&&t.push(m)}if(this.isLineLoop){const M=zr(this,e,Hs,c,v-1,g,v-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=s.length;i<a;i++){const l=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=i}}}}}function zr(r,e,t,n,s,i,a){const l=r.geometry.attributes.position;if(oa.fromBufferAttribute(l,s),la.fromBufferAttribute(l,i),t.distanceSqToSegment(oa,la,Qa,zc)>n)return;Qa.applyMatrix4(r.matrixWorld);const o=e.ray.origin.distanceTo(Qa);if(!(o<e.near||o>e.far))return{distance:o,point:zc.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Hc=new O,Vc=new O;class ch extends El{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,i=t.count;s<i;s+=2)Hc.fromBufferAttribute(t,s),Vc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Hc.distanceTo(Vc);e.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Dd extends El{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Tl extends Mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gc=new et,sl=new ha,Hr=new Bn,Vr=new O;class uh extends xt{constructor(e=new sn,t=new Tl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(s),Hr.radius+=i,e.ray.intersectsSphere(Hr)===!1)return;Gc.copy(s).invert(),sl.copy(e.ray).applyMatrix4(Gc);const l=i/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,o=n.index,f=n.attributes.position;if(o!==null){const p=Math.max(0,a.start),g=Math.min(o.count,a.start+a.count);for(let v=p,M=g;v<M;v++){const x=o.getX(v);Vr.fromBufferAttribute(f,x),Wc(Vr,x,c,s,e,t,this)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=p,M=g;v<M;v++)Vr.fromBufferAttribute(f,v),Wc(Vr,v,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=s.length;i<a;i++){const l=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=i}}}}}function Wc(r,e,t,n,s,i,a){const l=sl.distanceSqToPoint(r);if(l<t){const c=new O;sl.closestPointToPoint(r,c),c.applyMatrix4(n);const o=s.ray.origin.distanceTo(c);if(o<s.near||o>s.far)return;i.push({distance:o,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class hh extends kt{constructor(e,t,n=Oi,s,i,a,l=tn,c=tn,o,h=Qs,f=1){if(h!==Qs&&h!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:f};super(p,s,i,a,l,c,h,n,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class fa extends sn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const i=e/2,a=t/2,l=Math.floor(n),c=Math.floor(s),o=l+1,h=c+1,f=e/l,p=t/c,g=[],v=[],M=[],x=[];for(let m=0;m<h;m++){const R=m*p-a;for(let b=0;b<o;b++){const E=b*f-i;v.push(E,-R,0),M.push(0,0,1),x.push(b/l),x.push(1-m/c)}}for(let m=0;m<c;m++)for(let R=0;R<l;R++){const b=R+o*m,E=R+o*(m+1),I=R+1+o*(m+1),D=R+1+o*m;g.push(b,E,D),g.push(E,I,D)}this.setIndex(g),this.setAttribute("position",new zt(v,3)),this.setAttribute("normal",new zt(M,3)),this.setAttribute("uv",new zt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.width,e.height,e.widthSegments,e.heightSegments)}}class bl extends sn{constructor(e=.5,t=1,n=32,s=1,i=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:i,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const l=[],c=[],o=[],h=[];let f=e;const p=(t-e)/s,g=new O,v=new Ke;for(let M=0;M<=s;M++){for(let x=0;x<=n;x++){const m=i+x/n*a;g.x=f*Math.cos(m),g.y=f*Math.sin(m),c.push(g.x,g.y,g.z),o.push(0,0,1),v.x=(g.x/t+1)/2,v.y=(g.y/t+1)/2,h.push(v.x,v.y)}f+=p}for(let M=0;M<s;M++){const x=M*(n+1);for(let m=0;m<n;m++){const R=m+x,b=R,E=R+n+1,I=R+n+2,D=R+1;l.push(b,E,D),l.push(E,I,D)}}this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(o,3)),this.setAttribute("uv",new zt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Al extends sn{constructor(e=1,t=32,n=16,s=0,i=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:i,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+l,Math.PI);let o=0;const h=[],f=new O,p=new O,g=[],v=[],M=[],x=[];for(let m=0;m<=n;m++){const R=[],b=m/n;let E=0;m===0&&a===0?E=.5/t:m===n&&c===Math.PI&&(E=-.5/t);for(let I=0;I<=t;I++){const D=I/t;f.x=-e*Math.cos(s+D*i)*Math.sin(a+b*l),f.y=e*Math.cos(a+b*l),f.z=e*Math.sin(s+D*i)*Math.sin(a+b*l),v.push(f.x,f.y,f.z),p.copy(f).normalize(),M.push(p.x,p.y,p.z),x.push(D+E,1-b),R.push(o++)}h.push(R)}for(let m=0;m<n;m++)for(let R=0;R<t;R++){const b=h[m][R+1],E=h[m][R],I=h[m+1][R],D=h[m+1][R+1];(m!==0||a>0)&&g.push(b,E,D),(m!==n-1||c<Math.PI)&&g.push(E,I,D)}this.setIndex(g),this.setAttribute("position",new zt(v,3)),this.setAttribute("normal",new zt(M,3)),this.setAttribute("uv",new zt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wl extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_l,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kn extends wl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ud extends Mn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ve(16777215),this.specular=new Ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_l,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nd extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fd extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Gr(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Od(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Bd(r){function e(s,i){return r[s]-r[i]}const t=r.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Xc(r,e,t){const n=r.length,s=new r.constructor(n);for(let i=0,a=0;a!==n;++i){const l=t[i]*e;for(let c=0;c!==e;++c)s[a++]=r[l+c]}return s}function fh(r,e,t,n){let s=1,i=r[0];for(;i!==void 0&&i[n]===void 0;)i=r[s++];if(i===void 0)return;let a=i[n];if(a!==void 0)if(Array.isArray(a))do a=i[n],a!==void 0&&(e.push(i.time),t.push(...a)),i=r[s++];while(i!==void 0);else if(a.toArray!==void 0)do a=i[n],a!==void 0&&(e.push(i.time),a.toArray(t,t.length)),i=r[s++];while(i!==void 0);else do a=i[n],a!==void 0&&(e.push(i.time),t.push(a)),i=r[s++];while(i!==void 0)}class or{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],i=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<i)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(i=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=i)){const l=t[1];e<l&&(n=2,i=l);for(let c=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=i,i=t[--n-1],e>=i)break e}a=n,n=0;break t}break n}for(;n<a;){const l=n+a>>>1;e<t[l]?a=l:n=l+1}if(s=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,s)}return this.interpolate_(n,i,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,i=e*s;for(let a=0;a!==s;++a)t[a]=n[i+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class kd extends or{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ac,endingEnd:ac}}intervalChanged_(e,t,n){const s=this.parameterPositions;let i=e-2,a=e+1,l=s[i],c=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case oc:i=e,l=2*t-n;break;case lc:i=s.length-2,l=t+s[i]-s[i+1];break;default:i=e,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case oc:a=e,c=2*n-t;break;case lc:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}const o=(n-t)*.5,h=this.valueSize;this._weightPrev=o/(t-l),this._weightNext=o/(c-n),this._offsetPrev=i*h,this._offsetNext=a*h}interpolate_(e,t,n,s){const i=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,h=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,g=this._weightNext,v=(n-t)/(s-t),M=v*v,x=M*v,m=-p*x+2*p*M-p*v,R=(1+p)*x+(-1.5-2*p)*M+(-.5+p)*v+1,b=(-1-g)*x+(1.5+g)*M+.5*v,E=g*x-g*M;for(let I=0;I!==l;++I)i[I]=m*a[h+I]+R*a[o+I]+b*a[c+I]+E*a[f+I];return i}}class zd extends or{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const i=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,h=(n-t)/(s-t),f=1-h;for(let p=0;p!==l;++p)i[p]=a[o+p]*f+a[c+p]*h;return i}}class Hd extends or{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class In{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gr(t,this.TimeBufferType),this.values=Gr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Gr(e.times,Array),values:Gr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case tr:t=this.InterpolantFactoryMethodDiscrete;break;case nr:t=this.InterpolantFactoryMethodLinear;break;case wa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tr;case this.InterpolantFactoryMethodLinear:return nr;case this.InterpolantFactoryMethodSmooth:return wa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let i=0,a=s-1;for(;i!==s&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==s){i>=a&&(a=Math.max(a,1),i=a-1);const l=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*l,a*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,i=n.length;i===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==i;l++){const c=n[l];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,c,a),e=!1;break}a=c}if(s!==void 0&&Od(s))for(let l=0,c=s.length;l!==c;++l){const o=s[l];if(isNaN(o)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,o),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wa,i=e.length-1;let a=1;for(let l=1;l<i;++l){let c=!1;const o=e[l],h=e[l+1];if(o!==h&&(l!==1||o!==e[0]))if(s)c=!0;else{const f=l*n,p=f-n,g=f+n;for(let v=0;v!==n;++v){const M=t[f+v];if(M!==t[p+v]||M!==t[g+v]){c=!0;break}}}if(c){if(l!==a){e[a]=e[l];const f=l*n,p=a*n;for(let g=0;g!==n;++g)t[p+g]=t[f+g]}++a}}if(i>0){e[a]=e[i];for(let l=i*n,c=a*n,o=0;o!==n;++o)t[c+o]=t[l+o];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=nr;class Ts extends In{constructor(e,t,n){super(e,t,n)}}Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=tr;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class dh extends In{constructor(e,t,n,s){super(e,t,n,s)}}dh.prototype.ValueTypeName="color";class Ms extends In{constructor(e,t,n,s){super(e,t,n,s)}}Ms.prototype.ValueTypeName="number";class Vd extends or{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const i=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(n-t)/(s-t);let o=e*l;for(let h=o+l;o!==h;o+=4)Fn.slerpFlat(i,0,a,o-l,a,o,c);return i}}class ys extends In{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Vd(this.times,this.values,this.getValueSize(),e)}}ys.prototype.ValueTypeName="quaternion";ys.prototype.InterpolantFactoryMethodSmooth=void 0;class bs extends In{constructor(e,t,n){super(e,t,n)}}bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=tr;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ss extends In{constructor(e,t,n,s){super(e,t,n,s)}}Ss.prototype.ValueTypeName="vector";class Gd{constructor(e="",t=-1,n=[],s=Ef){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Pn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,l=n.length;a!==l;++a)t.push(Xd(n[a]).scale(s));const i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let i=0,a=n.length;i!==a;++i)t.push(In.toJSON(n[i]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const i=t.length,a=[];for(let l=0;l<i;l++){let c=[],o=[];c.push((l+i-1)%i,l,(l+1)%i),o.push(0,1,0);const h=Bd(c);c=Xc(c,1,h),o=Xc(o,1,h),!s&&c[0]===0&&(c.push(i),o.push(o[0])),a.push(new Ms(".morphTargetInfluences["+t[l].name+"]",c,o).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},i=/^([\w-]*?)([\d]+)$/;for(let l=0,c=e.length;l<c;l++){const o=e[l],h=o.name.match(i);if(h&&h.length>1){const f=h[1];let p=s[f];p||(s[f]=p=[]),p.push(o)}}const a=[];for(const l in s)a.push(this.CreateFromMorphTargetSequence(l,s[l],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,p,g,v,M){if(g.length!==0){const x=[],m=[];fh(g,x,m,v),x.length!==0&&M.push(new f(p,x,m))}},s=[],i=e.name||"default",a=e.fps||30,l=e.blendMode;let c=e.length||-1;const o=e.hierarchy||[];for(let f=0;f<o.length;f++){const p=o[f].keys;if(!(!p||p.length===0))if(p[0].morphTargets){const g={};let v;for(v=0;v<p.length;v++)if(p[v].morphTargets)for(let M=0;M<p[v].morphTargets.length;M++)g[p[v].morphTargets[M]]=-1;for(const M in g){const x=[],m=[];for(let R=0;R!==p[v].morphTargets.length;++R){const b=p[v];x.push(b.time),m.push(b.morphTarget===M?1:0)}s.push(new Ms(".morphTargetInfluence["+M+"]",x,m))}c=g.length*a}else{const g=".bones["+t[f].name+"]";n(Ss,g+".position",p,"pos",s),n(ys,g+".quaternion",p,"rot",s),n(Ss,g+".scale",p,"scl",s)}}return s.length===0?null:new this(i,c,s,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const i=this.tracks[n];t=Math.max(t,i.times[i.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Wd(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ms;case"vector":case"vector2":case"vector3":case"vector4":return Ss;case"color":return dh;case"quaternion":return ys;case"bool":case"boolean":return Ts;case"string":return bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Xd(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Wd(r.type);if(r.times===void 0){const t=[],n=[];fh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Qn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class $d{constructor(e,t,n){const s=this;let i=!1,a=0,l=0,c;const o=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){l++,i===!1&&s.onStart!==void 0&&s.onStart(h,a,l),i=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,l),a===l&&(i=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return o.push(h,f),this},this.removeHandler=function(h){const f=o.indexOf(h);return f!==-1&&o.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=o.length;f<p;f+=2){const g=o[f],v=o[f+1];if(g.global&&(g.lastIndex=0),g.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const qd=new $d;class ki{constructor(e){this.manager=e!==void 0?e:qd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,i){n.load(e,s,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ki.DEFAULT_MATERIAL_NAME="__DEFAULT";const qn={};class Yd extends Error{constructor(e,t){super(e),this.response=t}}class Rl extends ki{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=Qn.get(`file:${e}`);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(qn[e]!==void 0){qn[e].push({onLoad:t,onProgress:n,onError:s});return}qn[e]=[],qn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),l=this.mimeType,c=this.responseType;fetch(a).then(o=>{if(o.status===200||o.status===0){if(o.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||o.body===void 0||o.body.getReader===void 0)return o;const h=qn[e],f=o.body.getReader(),p=o.headers.get("X-File-Size")||o.headers.get("Content-Length"),g=p?parseInt(p):0,v=g!==0;let M=0;const x=new ReadableStream({start(m){R();function R(){f.read().then(({done:b,value:E})=>{if(b)m.close();else{M+=E.byteLength;const I=new ProgressEvent("progress",{lengthComputable:v,loaded:M,total:g});for(let D=0,N=h.length;D<N;D++){const B=h[D];B.onProgress&&B.onProgress(I)}m.enqueue(E),R()}},b=>{m.error(b)})}}});return new Response(x)}else throw new Yd(`fetch for "${o.url}" responded with ${o.status}: ${o.statusText}`,o)}).then(o=>{switch(c){case"arraybuffer":return o.arrayBuffer();case"blob":return o.blob();case"document":return o.text().then(h=>new DOMParser().parseFromString(h,l));case"json":return o.json();default:if(l==="")return o.text();{const f=/charset="?([^;"\s]*)"?/i.exec(l),p=f&&f[1]?f[1].toLowerCase():void 0,g=new TextDecoder(p);return o.arrayBuffer().then(v=>g.decode(v))}}}).then(o=>{Qn.add(`file:${e}`,o);const h=qn[e];delete qn[e];for(let f=0,p=h.length;f<p;f++){const g=h[f];g.onLoad&&g.onLoad(o)}}).catch(o=>{const h=qn[e];if(h===void 0)throw this.manager.itemError(e),o;delete qn[e];for(let f=0,p=h.length;f<p;f++){const g=h[f];g.onError&&g.onError(o)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ls=new WeakMap;class Kd extends ki{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,a=Qn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let f=ls.get(a);f===void 0&&(f=[],ls.set(a,f)),f.push({onLoad:t,onError:s})}return a}const l=ir("img");function c(){h(),t&&t(this);const f=ls.get(this)||[];for(let p=0;p<f.length;p++){const g=f[p];g.onLoad&&g.onLoad(this)}ls.delete(this),i.manager.itemEnd(e)}function o(f){h(),s&&s(f),Qn.remove(`image:${e}`);const p=ls.get(this)||[];for(let g=0;g<p.length;g++){const v=p[g];v.onError&&v.onError(f)}ls.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function h(){l.removeEventListener("load",c,!1),l.removeEventListener("error",o,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",o,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),Qn.add(`image:${e}`,l),i.manager.itemStart(e),l.src=e,l}}class ca extends ki{constructor(e){super(e)}load(e,t,n,s){const i=new kt,a=new Kd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){i.image=l,i.needsUpdate=!0,t!==void 0&&t(i)},n,s),i}}class Cl extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const eo=new et,$c=new O,qc=new O;class Pl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yl,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$c.setFromMatrixPosition(e.matrixWorld),t.position.copy($c),qc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qc),t.updateMatrixWorld(),eo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(eo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jd extends Pl{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=xs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||s!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=s,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Zd extends Cl{constructor(e,t,n=0,s=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=s,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new jd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Yc=new et,Vs=new O,to=new O;class Jd extends Pl{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),Vs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vs),to.copy(n.position),to.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(to),n.updateMatrixWorld(),s.makeTranslation(-Vs.x,-Vs.y,-Vs.z),Yc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yc,n.coordinateSystem,n.reversedDepth)}}class ph extends Cl{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class da extends nh{constructor(e=-1,t=1,n=1,s=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let i=n-e,a=n+e,l=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const o=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=o*this.view.offsetX,a=i+o*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(i,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Qd extends Pl{constructor(){super(new da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ep extends Cl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new Qd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class js{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const no=new WeakMap;class tp extends ki{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,a=Qn.get(`image-bitmap:${e}`);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(o=>{if(no.has(a)===!0)s&&s(no.get(a)),i.manager.itemError(e),i.manager.itemEnd(e);else return t&&t(o),i.manager.itemEnd(e),o});return}return setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader,l.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,l).then(function(o){return o.blob()}).then(function(o){return createImageBitmap(o,Object.assign(i.options,{colorSpaceConversion:"none"}))}).then(function(o){return Qn.add(`image-bitmap:${e}`,o),t&&t(o),i.manager.itemEnd(e),o}).catch(function(o){s&&s(o),no.set(c,o),Qn.remove(`image-bitmap:${e}`),i.manager.itemError(e),i.manager.itemEnd(e)});Qn.add(`image-bitmap:${e}`,c),i.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let Wr;class mh{static getContext(){return Wr===void 0&&(Wr=new(window.AudioContext||window.webkitAudioContext)),Wr}static setContext(e){Wr=e}}class np extends ki{constructor(e){super(e)}load(e,t,n,s){const i=this,a=new Rl(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{const o=c.slice(0);mh.getContext().decodeAudioData(o,function(f){t(f)}).catch(l)}catch(o){l(o)}},n,s);function l(c){s?s(c):console.error(c),i.manager.itemError(e)}}}class ip extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class sp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Si=new O,io=new Fn,rp=new O,Ei=new O,Ti=new O;class ap extends xt{constructor(){super(),this.type="AudioListener",this.context=mh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new sp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Si,io,rp),Ei.set(0,0,-1).applyQuaternion(io),Ti.set(0,1,0).applyQuaternion(io),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Si.x,n),t.positionY.linearRampToValueAtTime(Si.y,n),t.positionZ.linearRampToValueAtTime(Si.z,n),t.forwardX.linearRampToValueAtTime(Ei.x,n),t.forwardY.linearRampToValueAtTime(Ei.y,n),t.forwardZ.linearRampToValueAtTime(Ei.z,n),t.upX.linearRampToValueAtTime(Ti.x,n),t.upY.linearRampToValueAtTime(Ti.y,n),t.upZ.linearRampToValueAtTime(Ti.z,n)}else t.setPosition(Si.x,Si.y,Si.z),t.setOrientation(Ei.x,Ei.y,Ei.z,Ti.x,Ti.y,Ti.z)}}class op extends xt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const bi=new O,Kc=new Fn,lp=new O,Ai=new O;class cp extends op{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(bi,Kc,lp),Ai.set(0,0,1).applyQuaternion(Kc);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(bi.x,n),t.positionY.linearRampToValueAtTime(bi.y,n),t.positionZ.linearRampToValueAtTime(bi.z,n),t.orientationX.linearRampToValueAtTime(Ai.x,n),t.orientationY.linearRampToValueAtTime(Ai.y,n),t.orientationZ.linearRampToValueAtTime(Ai.z,n)}else t.setPosition(bi.x,bi.y,bi.z),t.setOrientation(Ai.x,Ai.y,Ai.z)}}const Ll="\\[\\]\\.:\\/",up=new RegExp("["+Ll+"]","g"),Il="[^"+Ll+"]",hp="[^"+Ll.replace("\\.","")+"]",fp=/((?:WC+[\/:])*)/.source.replace("WC",Il),dp=/(WCOD+)?/.source.replace("WCOD",hp),pp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Il),mp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Il),gp=new RegExp("^"+fp+dp+pp+mp+"$"),_p=["material","materials","bones","map"];class xp{constructor(e,t,n){const s=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,i=n.length;s!==i;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class St{constructor(e,t,n){this.path=t,this.parsedPath=n||St.parseTrackName(t),this.node=St.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new St.Composite(e,t,n):new St(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(up,"")}static parseTrackName(e){const t=gp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const i=n.nodeName.substring(s+1);_p.indexOf(i)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=i)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(i){for(let a=0;a<i.length;a++){const l=i[a];if(l.name===t||l.uuid===t)return l;const c=n(l.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,i=n.length;s!==i;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,i=n.length;s!==i;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,i=n.length;s!==i;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,i=n.length;s!==i;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let i=t.propertyIndex;if(e||(e=St.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let o=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===o){o=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(o!==void 0){if(e[o]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[o]}}const a=e[s];if(a===void 0){const o=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+o+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(i!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[i]!==void 0&&(i=e.morphTargetDictionary[i])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=i}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}St.Composite=xp;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class jc extends ch{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new sn;s.setAttribute("position",new zt(t,3)),s.setAttribute("color",new zt(n,3));const i=new Sl({vertexColors:!0,toneMapped:!1});super(s,i),this.type="AxesHelper"}setColors(e,t,n){const s=new Ve,i=this.geometry.attributes.color.array;return s.set(e),s.toArray(i,0),s.toArray(i,3),s.set(t),s.toArray(i,6),s.toArray(i,9),s.set(n),s.toArray(i,12),s.toArray(i,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function Zc(r,e,t,n){const s=vp(n);switch(t){case Gu:return r*e;case dl:return r*e/s.components*s.byteLength;case pl:return r*e/s.components*s.byteLength;case Xu:return r*e*2/s.components*s.byteLength;case ml:return r*e*2/s.components*s.byteLength;case Wu:return r*e*3/s.components*s.byteLength;case vn:return r*e*4/s.components*s.byteLength;case gl:return r*e*4/s.components*s.byteLength;case Zr:case Jr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Qr:case ea:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Po:case Io:return Math.max(r,16)*Math.max(e,8)/4;case Co:case Lo:return Math.max(r,8)*Math.max(e,8)/2;case Do:case Uo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case No:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Oo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Bo:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ko:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case zo:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Go:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Wo:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Xo:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case $o:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case qo:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Yo:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ko:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ta:case jo:case Zo:return Math.ceil(r/4)*Math.ceil(e/4)*16;case $u:case Jo:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Qo:case el:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vp(r){switch(r){case Nn:case zu:return{byteLength:1,components:1};case Zs:case Hu:case rr:return{byteLength:2,components:1};case hl:case fl:return{byteLength:2,components:4};case Oi:case ul:case Cn:return{byteLength:4,components:1};case Vu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ll);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gh(){let r=null,e=!1,t=null,n=null;function s(i,a){t(i,a),n=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){r=i}}}function Mp(r){const e=new WeakMap;function t(l,c){const o=l.array,h=l.usage,f=o.byteLength,p=r.createBuffer();r.bindBuffer(c,p),r.bufferData(c,o,h),l.onUploadCallback();let g;if(o instanceof Float32Array)g=r.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)g=r.HALF_FLOAT;else if(o instanceof Uint16Array)l.isFloat16BufferAttribute?g=r.HALF_FLOAT:g=r.UNSIGNED_SHORT;else if(o instanceof Int16Array)g=r.SHORT;else if(o instanceof Uint32Array)g=r.UNSIGNED_INT;else if(o instanceof Int32Array)g=r.INT;else if(o instanceof Int8Array)g=r.BYTE;else if(o instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:p,type:g,bytesPerElement:o.BYTES_PER_ELEMENT,version:l.version,size:f}}function n(l,c,o){const h=c.array,f=c.updateRanges;if(r.bindBuffer(o,l),f.length===0)r.bufferSubData(o,0,h);else{f.sort((g,v)=>g.start-v.start);let p=0;for(let g=1;g<f.length;g++){const v=f[p],M=f[g];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++p,f[p]=M)}f.length=p+1;for(let g=0,v=f.length;g<v;g++){const M=f[g];r.bufferSubData(o,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function i(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(r.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const o=e.get(l);if(o===void 0)e.set(l,t(l,c));else if(o.version<l.version){if(o.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(o.buffer,l,c),o.version=l.version}}return{get:s,remove:i,update:a}}var yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sp=`#ifdef USE_ALPHAHASH
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
#endif`,Ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wp=`#ifdef USE_AOMAP
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
#endif`,Rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cp=`#ifdef USE_BATCHING
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
#endif`,Pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Up=`#ifdef USE_IRIDESCENCE
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
#endif`,Np=`#ifdef USE_BUMPMAP
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
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wp=`#define PI 3.141592653589793
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
} // validated`,Xp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$p=`vec3 transformedNormal = objectNormal;
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
#endif`,qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qp=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,nm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
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
#endif`,sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lm=`#ifdef USE_GRADIENTMAP
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
}`,cm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,um=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fm=`uniform bool receiveShadow;
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
#endif`,dm=`#ifdef USE_ENVMAP
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
#endif`,pm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xm=`PhysicalMaterial material;
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
#endif`,vm=`struct PhysicalMaterial {
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
}`,Mm=`
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
#endif`,ym=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Em=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pm=`#if defined( USE_POINTS_UV )
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
#endif`,Lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Um=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fm=`#ifdef USE_MORPHTARGETS
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
#endif`,Om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,km=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gm=`#ifdef USE_NORMALMAP
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
#endif`,Wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Km=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rg=`float getShadowMask() {
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
}`,ag=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,og=`#ifdef USE_SKINNING
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
#endif`,lg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cg=`#ifdef USE_SKINNING
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
#endif`,ug=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pg=`#ifdef USE_TRANSMISSION
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
#endif`,mg=`#ifdef USE_TRANSMISSION
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yg=`uniform sampler2D t2D;
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`#include <common>
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
}`,wg=`#if DEPTH_PACKING == 3200
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
}`,Rg=`#define DISTANCE
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
}`,Cg=`#define DISTANCE
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`uniform float scale;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Ug=`#include <common>
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Fg=`#define LAMBERT
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
}`,Og=`#define LAMBERT
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
}`,Bg=`#define MATCAP
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
}`,kg=`#define MATCAP
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
}`,zg=`#define NORMAL
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
}`,Hg=`#define NORMAL
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
}`,Vg=`#define PHONG
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
}`,Gg=`#define PHONG
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
}`,Wg=`#define STANDARD
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
}`,Xg=`#define STANDARD
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
}`,$g=`#define TOON
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
}`,qg=`#define TOON
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
}`,Yg=`uniform float size;
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
}`,Kg=`uniform vec3 diffuse;
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
}`,jg=`#include <common>
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
}`,Zg=`uniform vec3 color;
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
}`,Jg=`uniform float rotation;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:yp,alphahash_pars_fragment:Sp,alphamap_fragment:Ep,alphamap_pars_fragment:Tp,alphatest_fragment:bp,alphatest_pars_fragment:Ap,aomap_fragment:wp,aomap_pars_fragment:Rp,batching_pars_vertex:Cp,batching_vertex:Pp,begin_vertex:Lp,beginnormal_vertex:Ip,bsdfs:Dp,iridescence_fragment:Up,bumpmap_pars_fragment:Np,clipping_planes_fragment:Fp,clipping_planes_pars_fragment:Op,clipping_planes_pars_vertex:Bp,clipping_planes_vertex:kp,color_fragment:zp,color_pars_fragment:Hp,color_pars_vertex:Vp,color_vertex:Gp,common:Wp,cube_uv_reflection_fragment:Xp,defaultnormal_vertex:$p,displacementmap_pars_vertex:qp,displacementmap_vertex:Yp,emissivemap_fragment:Kp,emissivemap_pars_fragment:jp,colorspace_fragment:Zp,colorspace_pars_fragment:Jp,envmap_fragment:Qp,envmap_common_pars_fragment:em,envmap_pars_fragment:tm,envmap_pars_vertex:nm,envmap_physical_pars_fragment:dm,envmap_vertex:im,fog_vertex:sm,fog_pars_vertex:rm,fog_fragment:am,fog_pars_fragment:om,gradientmap_pars_fragment:lm,lightmap_pars_fragment:cm,lights_lambert_fragment:um,lights_lambert_pars_fragment:hm,lights_pars_begin:fm,lights_toon_fragment:pm,lights_toon_pars_fragment:mm,lights_phong_fragment:gm,lights_phong_pars_fragment:_m,lights_physical_fragment:xm,lights_physical_pars_fragment:vm,lights_fragment_begin:Mm,lights_fragment_maps:ym,lights_fragment_end:Sm,logdepthbuf_fragment:Em,logdepthbuf_pars_fragment:Tm,logdepthbuf_pars_vertex:bm,logdepthbuf_vertex:Am,map_fragment:wm,map_pars_fragment:Rm,map_particle_fragment:Cm,map_particle_pars_fragment:Pm,metalnessmap_fragment:Lm,metalnessmap_pars_fragment:Im,morphinstance_vertex:Dm,morphcolor_vertex:Um,morphnormal_vertex:Nm,morphtarget_pars_vertex:Fm,morphtarget_vertex:Om,normal_fragment_begin:Bm,normal_fragment_maps:km,normal_pars_fragment:zm,normal_pars_vertex:Hm,normal_vertex:Vm,normalmap_pars_fragment:Gm,clearcoat_normal_fragment_begin:Wm,clearcoat_normal_fragment_maps:Xm,clearcoat_pars_fragment:$m,iridescence_pars_fragment:qm,opaque_fragment:Ym,packing:Km,premultiplied_alpha_fragment:jm,project_vertex:Zm,dithering_fragment:Jm,dithering_pars_fragment:Qm,roughnessmap_fragment:eg,roughnessmap_pars_fragment:tg,shadowmap_pars_fragment:ng,shadowmap_pars_vertex:ig,shadowmap_vertex:sg,shadowmask_pars_fragment:rg,skinbase_vertex:ag,skinning_pars_vertex:og,skinning_vertex:lg,skinnormal_vertex:cg,specularmap_fragment:ug,specularmap_pars_fragment:hg,tonemapping_fragment:fg,tonemapping_pars_fragment:dg,transmission_fragment:pg,transmission_pars_fragment:mg,uv_pars_fragment:gg,uv_pars_vertex:_g,uv_vertex:xg,worldpos_vertex:vg,background_vert:Mg,background_frag:yg,backgroundCube_vert:Sg,backgroundCube_frag:Eg,cube_vert:Tg,cube_frag:bg,depth_vert:Ag,depth_frag:wg,distanceRGBA_vert:Rg,distanceRGBA_frag:Cg,equirect_vert:Pg,equirect_frag:Lg,linedashed_vert:Ig,linedashed_frag:Dg,meshbasic_vert:Ug,meshbasic_frag:Ng,meshlambert_vert:Fg,meshlambert_frag:Og,meshmatcap_vert:Bg,meshmatcap_frag:kg,meshnormal_vert:zg,meshnormal_frag:Hg,meshphong_vert:Vg,meshphong_frag:Gg,meshphysical_vert:Wg,meshphysical_frag:Xg,meshtoon_vert:$g,meshtoon_frag:qg,points_vert:Yg,points_frag:Kg,shadow_vert:jg,shadow_frag:Zg,sprite_vert:Jg,sprite_frag:Qg},Me={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Dn={basic:{uniforms:Jt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Jt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ve(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Jt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Jt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Jt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ve(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Jt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Jt([Me.points,Me.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Jt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Jt([Me.common,Me.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Jt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Jt([Me.sprite,Me.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:Jt([Me.common,Me.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:Jt([Me.lights,Me.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Dn.physical={uniforms:Jt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Xr={r:0,b:0,g:0},wi=new yn,e_=new et;function t_(r,e,t,n,s,i,a){const l=new Ve(0);let c=i===!0?0:1,o,h,f=null,p=0,g=null;function v(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function M(b){let E=!1;const I=v(b);I===null?m(l,c):I&&I.isColor&&(m(I,1),E=!0);const D=r.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(b,E){const I=v(E);I&&(I.isCubeTexture||I.mapping===ua)?(h===void 0&&(h=new en(new ar(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:vs(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,N,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),wi.copy(E.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(e_.makeRotationFromEuler(wi)),h.material.toneMapped=lt.getTransfer(I.colorSpace)!==Tt,(f!==I||p!==I.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,f=I,p=I.version,g=r.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(o===void 0&&(o=new en(new fa(2,2),new gi({name:"BackgroundMaterial",uniforms:vs(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(o)),o.material.uniforms.t2D.value=I,o.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,o.material.toneMapped=lt.getTransfer(I.colorSpace)!==Tt,I.matrixAutoUpdate===!0&&I.updateMatrix(),o.material.uniforms.uvTransform.value.copy(I.matrix),(f!==I||p!==I.version||g!==r.toneMapping)&&(o.material.needsUpdate=!0,f=I,p=I.version,g=r.toneMapping),o.layers.enableAll(),b.unshift(o,o.geometry,o.material,0,0,null))}function m(b,E){b.getRGB(Xr,th(r)),n.buffers.color.setClear(Xr.r,Xr.g,Xr.b,E,a)}function R(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return l},setClearColor:function(b,E=1){l.set(b),c=E,m(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,m(l,c)},render:M,addToRenderList:x,dispose:R}}function n_(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},s=p(null);let i=s,a=!1;function l(w,L,Y,X,V){let ne=!1;const K=f(X,Y,L);i!==K&&(i=K,o(i.object)),ne=g(w,X,Y,V),ne&&v(w,X,Y,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(ne||a)&&(a=!1,E(w,L,Y,X),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return r.createVertexArray()}function o(w){return r.bindVertexArray(w)}function h(w){return r.deleteVertexArray(w)}function f(w,L,Y){const X=Y.wireframe===!0;let V=n[w.id];V===void 0&&(V={},n[w.id]=V);let ne=V[L.id];ne===void 0&&(ne={},V[L.id]=ne);let K=ne[X];return K===void 0&&(K=p(c()),ne[X]=K),K}function p(w){const L=[],Y=[],X=[];for(let V=0;V<t;V++)L[V]=0,Y[V]=0,X[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:Y,attributeDivisors:X,object:w,attributes:{},index:null}}function g(w,L,Y,X){const V=i.attributes,ne=L.attributes;let K=0;const oe=Y.getAttributes();for(const j in oe)if(oe[j].location>=0){const _e=V[j];let Ie=ne[j];if(Ie===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(Ie=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(Ie=w.instanceColor)),_e===void 0||_e.attribute!==Ie||Ie&&_e.data!==Ie.data)return!0;K++}return i.attributesNum!==K||i.index!==X}function v(w,L,Y,X){const V={},ne=L.attributes;let K=0;const oe=Y.getAttributes();for(const j in oe)if(oe[j].location>=0){let _e=ne[j];_e===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(_e=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(_e=w.instanceColor));const Ie={};Ie.attribute=_e,_e&&_e.data&&(Ie.data=_e.data),V[j]=Ie,K++}i.attributes=V,i.attributesNum=K,i.index=X}function M(){const w=i.newAttributes;for(let L=0,Y=w.length;L<Y;L++)w[L]=0}function x(w){m(w,0)}function m(w,L){const Y=i.newAttributes,X=i.enabledAttributes,V=i.attributeDivisors;Y[w]=1,X[w]===0&&(r.enableVertexAttribArray(w),X[w]=1),V[w]!==L&&(r.vertexAttribDivisor(w,L),V[w]=L)}function R(){const w=i.newAttributes,L=i.enabledAttributes;for(let Y=0,X=L.length;Y<X;Y++)L[Y]!==w[Y]&&(r.disableVertexAttribArray(Y),L[Y]=0)}function b(w,L,Y,X,V,ne,K){K===!0?r.vertexAttribIPointer(w,L,Y,V,ne):r.vertexAttribPointer(w,L,Y,X,V,ne)}function E(w,L,Y,X){M();const V=X.attributes,ne=Y.getAttributes(),K=L.defaultAttributeValues;for(const oe in ne){const j=ne[oe];if(j.location>=0){let me=V[oe];if(me===void 0&&(oe==="instanceMatrix"&&w.instanceMatrix&&(me=w.instanceMatrix),oe==="instanceColor"&&w.instanceColor&&(me=w.instanceColor)),me!==void 0){const _e=me.normalized,Ie=me.itemSize,qe=e.get(me);if(qe===void 0)continue;const pt=qe.buffer,ct=qe.type,J=qe.bytesPerElement,ge=ct===r.INT||ct===r.UNSIGNED_INT||me.gpuType===ul;if(me.isInterleavedBufferAttribute){const de=me.data,ke=de.stride,ze=me.offset;if(de.isInstancedInterleavedBuffer){for(let Ye=0;Ye<j.locationSize;Ye++)m(j.location+Ye,de.meshPerAttribute);w.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ye=0;Ye<j.locationSize;Ye++)x(j.location+Ye);r.bindBuffer(r.ARRAY_BUFFER,pt);for(let Ye=0;Ye<j.locationSize;Ye++)b(j.location+Ye,Ie/j.locationSize,ct,_e,ke*J,(ze+Ie/j.locationSize*Ye)*J,ge)}else{if(me.isInstancedBufferAttribute){for(let de=0;de<j.locationSize;de++)m(j.location+de,me.meshPerAttribute);w.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let de=0;de<j.locationSize;de++)x(j.location+de);r.bindBuffer(r.ARRAY_BUFFER,pt);for(let de=0;de<j.locationSize;de++)b(j.location+de,Ie/j.locationSize,ct,_e,Ie*J,Ie/j.locationSize*de*J,ge)}}else if(K!==void 0){const _e=K[oe];if(_e!==void 0)switch(_e.length){case 2:r.vertexAttrib2fv(j.location,_e);break;case 3:r.vertexAttrib3fv(j.location,_e);break;case 4:r.vertexAttrib4fv(j.location,_e);break;default:r.vertexAttrib1fv(j.location,_e)}}}}R()}function I(){B();for(const w in n){const L=n[w];for(const Y in L){const X=L[Y];for(const V in X)h(X[V].object),delete X[V];delete L[Y]}delete n[w]}}function D(w){if(n[w.id]===void 0)return;const L=n[w.id];for(const Y in L){const X=L[Y];for(const V in X)h(X[V].object),delete X[V];delete L[Y]}delete n[w.id]}function N(w){for(const L in n){const Y=n[L];if(Y[w.id]===void 0)continue;const X=Y[w.id];for(const V in X)h(X[V].object),delete X[V];delete Y[w.id]}}function B(){A(),a=!0,i!==s&&(i=s,o(i.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:B,resetDefaultState:A,dispose:I,releaseStatesOfGeometry:D,releaseStatesOfProgram:N,initAttributes:M,enableAttribute:x,disableUnusedAttributes:R}}function i_(r,e,t){let n;function s(o){n=o}function i(o,h){r.drawArrays(n,o,h),t.update(h,n,1)}function a(o,h,f){f!==0&&(r.drawArraysInstanced(n,o,h,f),t.update(h,n,f))}function l(o,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,o,0,h,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v];t.update(g,n,1)}function c(o,h,f,p){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<o.length;v++)a(o[v],h[v],p[v]);else{g.multiDrawArraysInstancedWEBGL(n,o,0,h,0,p,0,f);let v=0;for(let M=0;M<f;M++)v+=h[M]*p[M];t.update(v,n,1)}}this.setMode=s,this.render=i,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function s_(r,e,t,n){let s;function i(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(N){return!(N!==vn&&n.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(N){const B=N===rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Nn&&n.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Cn&&!B)}function c(N){if(N==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const h=c(o);h!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",h,"instead."),o=h);const f=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),E=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=v>0,D=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:o,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:g,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:R,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:I,maxSamples:D}}function r_(r){const e=this;let t=null,n=0,s=!1,i=!1;const a=new Li,l=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||n!==0||s;return s=p,n=f.length,g},this.beginShadows=function(){i=!0,h(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(f,p){t=h(f,p,0)},this.setState=function(f,p,g){const v=f.clippingPlanes,M=f.clipIntersection,x=f.clipShadows,m=r.get(f);if(!s||v===null||v.length===0||i&&!x)i?h(null):o();else{const R=i?0:n,b=R*4;let E=m.clippingState||null;c.value=E,E=h(v,p,b,g);for(let I=0;I!==b;++I)E[I]=t[I];m.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function o(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,p,g,v){const M=f!==null?f.length:0;let x=null;if(M!==0){if(x=c.value,v!==!0||x===null){const m=g+M*4,R=p.matrixWorldInverse;l.getNormalMatrix(R),(x===null||x.length<m)&&(x=new Float32Array(m));for(let b=0,E=g;b!==M;++b,E+=4)a.copy(f[b]).applyMatrix4(R,l),a.normal.toArray(x,E),x[E+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function a_(r){let e=new WeakMap;function t(a,l){return l===wo?a.mapping=gs:l===Ro&&(a.mapping=_s),a}function n(a){if(a&&a.isTexture){const l=a.mapping;if(l===wo||l===Ro)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const o=new yd(c.height);return o.fromEquirectangularTexture(r,a),e.set(a,o),a.addEventListener("dispose",s),t(o.texture,a.mapping)}else return null}}return a}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function i(){e=new WeakMap}return{get:n,dispose:i}}const us=4,Jc=[.125,.215,.35,.446,.526,.582],Ui=20,so=new da,Qc=new Ve;let ro=null,ao=0,oo=0,lo=!1;const Ii=(1+Math.sqrt(5))/2,cs=1/Ii,eu=[new O(-Ii,cs,0),new O(Ii,cs,0),new O(-cs,0,Ii),new O(cs,0,Ii),new O(0,Ii,-cs),new O(0,Ii,cs),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],o_=new O;class tu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,i={}){const{size:a=256,position:l=o_}=i;ro=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ro,ao,oo),this._renderer.xr.enabled=lo,e.scissorTest=!1,$r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gs||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ro=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:rr,format:vn,colorSpace:nn,depthBuffer:!1},s=nu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nu(e,t,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l_(i)),this._blurMaterial=c_(i,e,t)}return s}_compileMaterial(e){const t=new en(this._lodPlanes[0],e);this._renderer.compile(t,so)}_sceneToCubeUV(e,t,n,s,i){const c=new Qt(90,1,t,n),o=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,g=f.toneMapping;f.getClearColor(Qc),f.toneMapping=pi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const M=new fi({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),x=new en(new ar,M);let m=!1;const R=e.background;R?R.isColor&&(M.color.copy(R),e.background=null,m=!0):(M.color.copy(Qc),m=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(c.up.set(0,o[b],0),c.position.set(i.x,i.y,i.z),c.lookAt(i.x+h[b],i.y,i.z)):E===1?(c.up.set(0,0,o[b]),c.position.set(i.x,i.y,i.z),c.lookAt(i.x,i.y+h[b],i.z)):(c.up.set(0,o[b],0),c.position.set(i.x,i.y,i.z),c.lookAt(i.x,i.y,i.z+h[b]));const I=this._cubeSize;$r(s,E*I,b>2?I:0,I,I),f.setRenderTarget(s),m&&f.render(x,c),f.render(e,c)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=g,f.autoClear=p,e.background=R}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===gs||e.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=su()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iu());const i=s?this._cubemapMaterial:this._equirectMaterial,a=new en(this._lodPlanes[0],i),l=i.uniforms;l.envMap.value=e;const c=this._cubeSize;$r(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,so)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let i=1;i<s;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),l=eu[(s-i-1)%eu.length];this._blur(e,i-1,i,a,l)}t.autoClear=n}_blur(e,t,n,s,i){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",i),this._halfBlur(a,e,n,n,s,"longitudinal",i)}_halfBlur(e,t,n,s,i,a,l){const c=this._renderer,o=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new en(this._lodPlanes[s],o),p=o.uniforms,g=this._sizeLods[n]-1,v=isFinite(i)?Math.PI/(2*g):2*Math.PI/(2*Ui-1),M=i/v,x=isFinite(i)?1+Math.floor(h*M):Ui;x>Ui&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ui}`);const m=[];let R=0;for(let N=0;N<Ui;++N){const B=N/M,A=Math.exp(-B*B/2);m.push(A),N===0?R+=A:N<x&&(R+=2*A)}for(let N=0;N<m.length;N++)m[N]=m[N]/R;p.envMap.value=e.texture,p.samples.value=x,p.weights.value=m,p.latitudinal.value=a==="latitudinal",l&&(p.poleAxis.value=l);const{_lodMax:b}=this;p.dTheta.value=v,p.mipInt.value=b-n;const E=this._sizeLods[s],I=3*E*(s>b-us?s-b+us:0),D=4*(this._cubeSize-E);$r(t,I,D,3*E,2*E),c.setRenderTarget(t),c.render(f,so)}}function l_(r){const e=[],t=[],n=[];let s=r;const i=r-us+1+Jc.length;for(let a=0;a<i;a++){const l=Math.pow(2,s);t.push(l);let c=1/l;a>r-us?c=Jc[a-r+us-1]:a===0&&(c=0),n.push(c);const o=1/(l-2),h=-o,f=1+o,p=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,v=6,M=3,x=2,m=1,R=new Float32Array(M*v*g),b=new Float32Array(x*v*g),E=new Float32Array(m*v*g);for(let D=0;D<g;D++){const N=D%3*2/3-1,B=D>2?0:-1,A=[N,B,0,N+2/3,B,0,N+2/3,B+1,0,N,B,0,N+2/3,B+1,0,N,B+1,0];R.set(A,M*v*D),b.set(p,x*v*D);const w=[D,D,D,D,D,D];E.set(w,m*v*D)}const I=new sn;I.setAttribute("position",new Yt(R,M)),I.setAttribute("uv",new Yt(b,x)),I.setAttribute("faceIndex",new Yt(E,m)),e.push(I),s>us&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nu(r,e,t){const n=new Bi(r,e,t);return n.texture.mapping=ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $r(r,e,t,n,s){r.viewport.set(e,t,n,s),r.scissor.set(e,t,n,s)}function c_(r,e,t){const n=new Float32Array(Ui),s=new O(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function iu(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function su(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Dl(){return`

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
	`}function u_(r){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const c=l.mapping,o=c===wo||c===Ro,h=c===gs||c===_s;if(o||h){let f=e.get(l);const p=f!==void 0?f.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==p)return t===null&&(t=new tu(r)),f=o?t.fromEquirectangular(l,f):t.fromCubemap(l,f),f.texture.pmremVersion=l.pmremVersion,e.set(l,f),f.texture;if(f!==void 0)return f.texture;{const g=l.image;return o&&g&&g.height>0||h&&g&&s(g)?(t===null&&(t=new tu(r)),f=o?t.fromEquirectangular(l):t.fromCubemap(l),f.texture.pmremVersion=l.pmremVersion,e.set(l,f),l.addEventListener("dispose",i),f.texture):null}}}return l}function s(l){let c=0;const o=6;for(let h=0;h<o;h++)l[h]!==void 0&&c++;return c===o}function i(l){const c=l.target;c.removeEventListener("dispose",i);const o=e.get(c);o!==void 0&&(e.delete(c),o.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function h_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&fs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function f_(r,e,t,n){const s={},i=new WeakMap;function a(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);p.removeEventListener("dispose",a),delete s[p.id];const g=i.get(p);g&&(e.remove(g),i.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(f,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function c(f){const p=f.attributes;for(const g in p)e.update(p[g],r.ARRAY_BUFFER)}function o(f){const p=[],g=f.index,v=f.attributes.position;let M=0;if(g!==null){const R=g.array;M=g.version;for(let b=0,E=R.length;b<E;b+=3){const I=R[b+0],D=R[b+1],N=R[b+2];p.push(I,D,D,N,N,I)}}else if(v!==void 0){const R=v.array;M=v.version;for(let b=0,E=R.length/3-1;b<E;b+=3){const I=b+0,D=b+1,N=b+2;p.push(I,D,D,N,N,I)}}else return;const x=new(Ku(p)?eh:Qu)(p,1);x.version=M;const m=i.get(f);m&&e.remove(m),i.set(f,x)}function h(f){const p=i.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&o(f)}else o(f);return i.get(f)}return{get:l,update:c,getWireframeAttribute:h}}function d_(r,e,t){let n;function s(p){n=p}let i,a;function l(p){i=p.type,a=p.bytesPerElement}function c(p,g){r.drawElements(n,g,i,p*a),t.update(g,n,1)}function o(p,g,v){v!==0&&(r.drawElementsInstanced(n,g,i,p*a,v),t.update(g,n,v))}function h(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,i,p,0,v);let x=0;for(let m=0;m<v;m++)x+=g[m];t.update(x,n,1)}function f(p,g,v,M){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<p.length;m++)o(p[m]/a,g[m],M[m]);else{x.multiDrawElementsInstancedWEBGL(n,g,0,i,p,0,M,0,v);let m=0;for(let R=0;R<v;R++)m+=g[R]*M[R];t.update(m,n,1)}}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=o,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function p_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,a,l){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=l*(i/3);break;case r.LINES:t.lines+=l*(i/2);break;case r.LINE_STRIP:t.lines+=l*(i-1);break;case r.LINE_LOOP:t.lines+=l*i;break;case r.POINTS:t.points+=l*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function m_(r,e,t){const n=new WeakMap,s=new dt;function i(a,l,c){const o=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=h!==void 0?h.length:0;let p=n.get(l);if(p===void 0||p.count!==f){let A=function(){N.dispose(),n.delete(l),l.removeEventListener("dispose",A)};p!==void 0&&p.texture.dispose();const g=l.morphAttributes.position!==void 0,v=l.morphAttributes.normal!==void 0,M=l.morphAttributes.color!==void 0,x=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],R=l.morphAttributes.color||[];let b=0;g===!0&&(b=1),v===!0&&(b=2),M===!0&&(b=3);let E=l.attributes.position.count*b,I=1;E>e.maxTextureSize&&(I=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const D=new Float32Array(E*I*4*f),N=new ju(D,E,I,f);N.type=Cn,N.needsUpdate=!0;const B=b*4;for(let w=0;w<f;w++){const L=x[w],Y=m[w],X=R[w],V=E*I*4*w;for(let ne=0;ne<L.count;ne++){const K=ne*B;g===!0&&(s.fromBufferAttribute(L,ne),D[V+K+0]=s.x,D[V+K+1]=s.y,D[V+K+2]=s.z,D[V+K+3]=0),v===!0&&(s.fromBufferAttribute(Y,ne),D[V+K+4]=s.x,D[V+K+5]=s.y,D[V+K+6]=s.z,D[V+K+7]=0),M===!0&&(s.fromBufferAttribute(X,ne),D[V+K+8]=s.x,D[V+K+9]=s.y,D[V+K+10]=s.z,D[V+K+11]=X.itemSize===4?s.w:1)}}p={count:f,texture:N,size:new Ke(E,I)},n.set(l,p),l.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let M=0;M<o.length;M++)g+=o[M];const v=l.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",v),c.getUniforms().setValue(r,"morphTargetInfluences",o)}c.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}return{update:i}}function g_(r,e,t,n){let s=new WeakMap;function i(c){const o=n.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==o&&(e.update(f),s.set(f,o)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==o&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,o))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==o&&(p.update(),s.set(p,o))}return f}function a(){s=new WeakMap}function l(c){const o=c.target;o.removeEventListener("dispose",l),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:i,dispose:a}}const _h=new kt,ru=new hh(1,1),xh=new ju,vh=new sd,Mh=new ih,au=[],ou=[],lu=new Float32Array(16),cu=new Float32Array(9),uu=new Float32Array(4);function As(r,e,t){const n=r[0];if(n<=0||n>0)return r;const s=e*t;let i=au[s];if(i===void 0&&(i=new Float32Array(s),au[s]=i),e!==0){n.toArray(i,0);for(let a=1,l=0;a!==e;++a)l+=t,r[a].toArray(i,l)}return i}function Nt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ft(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function pa(r,e){let t=ou[e];t===void 0&&(t=new Int32Array(e),ou[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function __(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function x_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2fv(this.addr,e),Ft(t,e)}}function v_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;r.uniform3fv(this.addr,e),Ft(t,e)}}function M_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4fv(this.addr,e),Ft(t,e)}}function y_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;uu.set(n),r.uniformMatrix2fv(this.addr,!1,uu),Ft(t,n)}}function S_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;cu.set(n),r.uniformMatrix3fv(this.addr,!1,cu),Ft(t,n)}}function E_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;lu.set(n),r.uniformMatrix4fv(this.addr,!1,lu),Ft(t,n)}}function T_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function b_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2iv(this.addr,e),Ft(t,e)}}function A_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;r.uniform3iv(this.addr,e),Ft(t,e)}}function w_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4iv(this.addr,e),Ft(t,e)}}function R_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function C_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2uiv(this.addr,e),Ft(t,e)}}function P_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;r.uniform3uiv(this.addr,e),Ft(t,e)}}function L_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4uiv(this.addr,e),Ft(t,e)}}function I_(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s);let i;this.type===r.SAMPLER_2D_SHADOW?(ru.compareFunction=Yu,i=ru):i=_h,t.setTexture2D(e||i,s)}function D_(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||vh,s)}function U_(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Mh,s)}function N_(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||xh,s)}function F_(r){switch(r){case 5126:return __;case 35664:return x_;case 35665:return v_;case 35666:return M_;case 35674:return y_;case 35675:return S_;case 35676:return E_;case 5124:case 35670:return T_;case 35667:case 35671:return b_;case 35668:case 35672:return A_;case 35669:case 35673:return w_;case 5125:return R_;case 36294:return C_;case 36295:return P_;case 36296:return L_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return D_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return N_}}function O_(r,e){r.uniform1fv(this.addr,e)}function B_(r,e){const t=As(e,this.size,2);r.uniform2fv(this.addr,t)}function k_(r,e){const t=As(e,this.size,3);r.uniform3fv(this.addr,t)}function z_(r,e){const t=As(e,this.size,4);r.uniform4fv(this.addr,t)}function H_(r,e){const t=As(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function V_(r,e){const t=As(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function G_(r,e){const t=As(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function W_(r,e){r.uniform1iv(this.addr,e)}function X_(r,e){r.uniform2iv(this.addr,e)}function $_(r,e){r.uniform3iv(this.addr,e)}function q_(r,e){r.uniform4iv(this.addr,e)}function Y_(r,e){r.uniform1uiv(this.addr,e)}function K_(r,e){r.uniform2uiv(this.addr,e)}function j_(r,e){r.uniform3uiv(this.addr,e)}function Z_(r,e){r.uniform4uiv(this.addr,e)}function J_(r,e,t){const n=this.cache,s=e.length,i=pa(t,s);Nt(n,i)||(r.uniform1iv(this.addr,i),Ft(n,i));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||_h,i[a])}function Q_(r,e,t){const n=this.cache,s=e.length,i=pa(t,s);Nt(n,i)||(r.uniform1iv(this.addr,i),Ft(n,i));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||vh,i[a])}function e0(r,e,t){const n=this.cache,s=e.length,i=pa(t,s);Nt(n,i)||(r.uniform1iv(this.addr,i),Ft(n,i));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Mh,i[a])}function t0(r,e,t){const n=this.cache,s=e.length,i=pa(t,s);Nt(n,i)||(r.uniform1iv(this.addr,i),Ft(n,i));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||xh,i[a])}function n0(r){switch(r){case 5126:return O_;case 35664:return B_;case 35665:return k_;case 35666:return z_;case 35674:return H_;case 35675:return V_;case 35676:return G_;case 5124:case 35670:return W_;case 35667:case 35671:return X_;case 35668:case 35672:return $_;case 35669:case 35673:return q_;case 5125:return Y_;case 36294:return K_;case 36295:return j_;case 36296:return Z_;case 35678:case 36198:case 36298:case 36306:case 35682:return J_;case 35679:case 36299:case 36307:return Q_;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return t0}}class i0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=F_(t.type)}}class s0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=n0(t.type)}}class r0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let i=0,a=s.length;i!==a;++i){const l=s[i];l.setValue(e,t[l.id],n)}}}const co=/(\w+)(\])?(\[|\.)?/g;function hu(r,e){r.seq.push(e),r.map[e.id]=e}function a0(r,e,t){const n=r.name,s=n.length;for(co.lastIndex=0;;){const i=co.exec(n),a=co.lastIndex;let l=i[1];const c=i[2]==="]",o=i[3];if(c&&(l=l|0),o===void 0||o==="["&&a+2===s){hu(t,o===void 0?new i0(l,r,e):new s0(l,r,e));break}else{let f=t.map[l];f===void 0&&(f=new r0(l),hu(t,f)),t=f}}}class ia{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const i=e.getActiveUniform(t,s),a=e.getUniformLocation(t,i.name);a0(i,a,this)}}setValue(e,t,n,s){const i=this.map[t];i!==void 0&&i.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let i=0,a=t.length;i!==a;++i){const l=t[i],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,i=e.length;s!==i;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function fu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const o0=37297;let l0=0;function c0(r,e){const t=r.split(`
`),n=[],s=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let a=s;a<i;a++){const l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}const du=new Qe;function u0(r){lt._getMatrix(du,lt.workingColorSpace,r);const e=`mat3( ${du.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(r)){case ra:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function pu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=(r.getShaderInfoLog(e)||"").trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+c0(r.getShaderSource(e),l)}else return i}function h0(r,e){const t=u0(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function f0(r,e){let t;switch(e){case mf:t="Linear";break;case gf:t="Reinhard";break;case _f:t="Cineon";break;case xf:t="ACESFilmic";break;case Mf:t="AgX";break;case yf:t="Neutral";break;case vf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qr=new O;function d0(){lt.getLuminanceCoefficients(qr);const r=qr.x.toFixed(4),e=qr.y.toFixed(4),t=qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function m0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function g0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const i=r.getActiveAttrib(e,s),a=i.name;let l=1;i.type===r.FLOAT_MAT2&&(l=2),i.type===r.FLOAT_MAT3&&(l=3),i.type===r.FLOAT_MAT4&&(l=4),t[a]={type:i.type,location:r.getAttribLocation(e,a),locationSize:l}}return t}function qs(r){return r!==""}function mu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _0=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(r){return r.replace(_0,v0)}const x0=new Map;function v0(r,e){let t=tt[e];if(t===void 0){const n=x0.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return rl(t)}const M0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _u(r){return r.replace(M0,y0)}function y0(r,e,t,n){let s="";for(let i=parseInt(e);i<parseInt(t);i++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return s}function xu(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function S0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ou?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===qh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Yn&&(e="SHADOWMAP_TYPE_VSM"),e}function E0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case gs:case _s:e="ENVMAP_TYPE_CUBE";break;case ua:e="ENVMAP_TYPE_CUBE_UV";break}return e}function T0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case _s:e="ENVMAP_MODE_REFRACTION";break}return e}function b0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case cl:e="ENVMAP_BLENDING_MULTIPLY";break;case df:e="ENVMAP_BLENDING_MIX";break;case pf:e="ENVMAP_BLENDING_ADD";break}return e}function A0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function w0(r,e,t,n){const s=r.getContext(),i=t.defines;let a=t.vertexShader,l=t.fragmentShader;const c=S0(t),o=E0(t),h=T0(t),f=b0(t),p=A0(t),g=p0(t),v=m0(i),M=s.createProgram();let x,m,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(qs).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(qs).join(`
`),m.length>0&&(m+=`
`)):(x=[xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),m=[xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?tt.tonemapping_pars_fragment:"",t.toneMapping!==pi?f0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,h0("linearToOutputTexel",t.outputColorSpace),d0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qs).join(`
`)),a=rl(a),a=mu(a,t),a=gu(a,t),l=rl(l),l=mu(l,t),l=gu(l,t),a=_u(a),l=_u(l),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=R+x+a,E=R+m+l,I=fu(s,s.VERTEX_SHADER,b),D=fu(s,s.FRAGMENT_SHADER,E);s.attachShader(M,I),s.attachShader(M,D),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function N(L){if(r.debug.checkShaderErrors){const Y=s.getProgramInfoLog(M)||"",X=s.getShaderInfoLog(I)||"",V=s.getShaderInfoLog(D)||"",ne=Y.trim(),K=X.trim(),oe=V.trim();let j=!0,me=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,M,I,D);else{const _e=pu(s,I,"vertex"),Ie=pu(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+ne+`
`+_e+`
`+Ie)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(K===""||oe==="")&&(me=!1);me&&(L.diagnostics={runnable:j,programLog:ne,vertexShader:{log:K,prefix:x},fragmentShader:{log:oe,prefix:m}})}s.deleteShader(I),s.deleteShader(D),B=new ia(s,M),A=g0(s,M)}let B;this.getUniforms=function(){return B===void 0&&N(this),B};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(M,o0)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=l0++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=I,this.fragmentShader=D,this}let R0=0;class C0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new P0(e),t.set(e,n)),n}}class P0{constructor(e){this.id=R0++,this.code=e,this.usedTimes=0}}function L0(r,e,t,n,s,i,a){const l=new Zu,c=new C0,o=new Set,h=[],f=s.logarithmicDepthBuffer,p=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return o.add(A),A===0?"uv":`uv${A}`}function x(A,w,L,Y,X){const V=Y.fog,ne=X.geometry,K=A.isMeshStandardMaterial?Y.environment:null,oe=(A.isMeshStandardMaterial?t:e).get(A.envMap||K),j=oe&&oe.mapping===ua?oe.image.height:null,me=v[A.type];A.precision!==null&&(g=s.getMaxPrecision(A.precision),g!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const _e=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Ie=_e!==void 0?_e.length:0;let qe=0;ne.morphAttributes.position!==void 0&&(qe=1),ne.morphAttributes.normal!==void 0&&(qe=2),ne.morphAttributes.color!==void 0&&(qe=3);let pt,ct,J,ge;if(me){const ut=Dn[me];pt=ut.vertexShader,ct=ut.fragmentShader}else pt=A.vertexShader,ct=A.fragmentShader,c.update(A),J=c.getVertexShaderID(A),ge=c.getFragmentShaderID(A);const de=r.getRenderTarget(),ke=r.state.buffers.depth.getReversed(),ze=X.isInstancedMesh===!0,Ye=X.isBatchedMesh===!0,Pt=!!A.map,rt=!!A.matcap,F=!!oe,Et=!!A.aoMap,Fe=!!A.lightMap,at=!!A.bumpMap,Ne=!!A.normalMap,mt=!!A.displacementMap,Te=!!A.emissiveMap,Ze=!!A.metalnessMap,Dt=!!A.roughnessMap,Rt=A.anisotropy>0,P=A.clearcoat>0,S=A.dispersion>0,W=A.iridescence>0,ee=A.sheen>0,se=A.transmission>0,Z=Rt&&!!A.anisotropyMap,Ue=P&&!!A.clearcoatMap,fe=P&&!!A.clearcoatNormalMap,Pe=P&&!!A.clearcoatRoughnessMap,Le=W&&!!A.iridescenceMap,ce=W&&!!A.iridescenceThicknessMap,ye=ee&&!!A.sheenColorMap,Ge=ee&&!!A.sheenRoughnessMap,De=!!A.specularMap,xe=!!A.specularColorMap,je=!!A.specularIntensityMap,k=se&&!!A.transmissionMap,ue=se&&!!A.thicknessMap,pe=!!A.gradientMap,Ae=!!A.alphaMap,ae=A.alphaTest>0,te=!!A.alphaHash,Ce=!!A.extensions;let $e=pi;A.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&($e=r.toneMapping);const vt={shaderID:me,shaderType:A.type,shaderName:A.name,vertexShader:pt,fragmentShader:ct,defines:A.defines,customVertexShaderID:J,customFragmentShaderID:ge,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:Ye,batchingColor:Ye&&X._colorsTexture!==null,instancing:ze,instancingColor:ze&&X.instanceColor!==null,instancingMorph:ze&&X.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:de===null?r.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:nn,alphaToCoverage:!!A.alphaToCoverage,map:Pt,matcap:rt,envMap:F,envMapMode:F&&oe.mapping,envMapCubeUVHeight:j,aoMap:Et,lightMap:Fe,bumpMap:at,normalMap:Ne,displacementMap:p&&mt,emissiveMap:Te,normalMapObjectSpace:Ne&&A.normalMapType===wf,normalMapTangentSpace:Ne&&A.normalMapType===_l,metalnessMap:Ze,roughnessMap:Dt,anisotropy:Rt,anisotropyMap:Z,clearcoat:P,clearcoatMap:Ue,clearcoatNormalMap:fe,clearcoatRoughnessMap:Pe,dispersion:S,iridescence:W,iridescenceMap:Le,iridescenceThicknessMap:ce,sheen:ee,sheenColorMap:ye,sheenRoughnessMap:Ge,specularMap:De,specularColorMap:xe,specularIntensityMap:je,transmission:se,transmissionMap:k,thicknessMap:ue,gradientMap:pe,opaque:A.transparent===!1&&A.blending===hs&&A.alphaToCoverage===!1,alphaMap:Ae,alphaTest:ae,alphaHash:te,combine:A.combine,mapUv:Pt&&M(A.map.channel),aoMapUv:Et&&M(A.aoMap.channel),lightMapUv:Fe&&M(A.lightMap.channel),bumpMapUv:at&&M(A.bumpMap.channel),normalMapUv:Ne&&M(A.normalMap.channel),displacementMapUv:mt&&M(A.displacementMap.channel),emissiveMapUv:Te&&M(A.emissiveMap.channel),metalnessMapUv:Ze&&M(A.metalnessMap.channel),roughnessMapUv:Dt&&M(A.roughnessMap.channel),anisotropyMapUv:Z&&M(A.anisotropyMap.channel),clearcoatMapUv:Ue&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:fe&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&M(A.sheenRoughnessMap.channel),specularMapUv:De&&M(A.specularMap.channel),specularColorMapUv:xe&&M(A.specularColorMap.channel),specularIntensityMapUv:je&&M(A.specularIntensityMap.channel),transmissionMapUv:k&&M(A.transmissionMap.channel),thicknessMapUv:ue&&M(A.thicknessMap.channel),alphaMapUv:Ae&&M(A.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Ne||Rt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!ne.attributes.uv&&(Pt||Ae),fog:!!V,useFog:A.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ke,skinning:X.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:qe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:$e,decodeVideoTexture:Pt&&A.map.isVideoTexture===!0&&lt.getTransfer(A.map.colorSpace)===Tt,decodeVideoTextureEmissive:Te&&A.emissiveMap.isVideoTexture===!0&&lt.getTransfer(A.emissiveMap.colorSpace)===Tt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===wn,flipSided:A.side===an,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ce&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&A.extensions.multiDraw===!0||Ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return vt.vertexUv1s=o.has(1),vt.vertexUv2s=o.has(2),vt.vertexUv3s=o.has(3),o.clear(),vt}function m(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const L in A.defines)w.push(L),w.push(A.defines[L]);return A.isRawShaderMaterial===!1&&(R(w,A),b(w,A),w.push(r.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function R(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function b(A,w){l.disableAll(),w.supportsVertexTextures&&l.enable(0),w.instancing&&l.enable(1),w.instancingColor&&l.enable(2),w.instancingMorph&&l.enable(3),w.matcap&&l.enable(4),w.envMap&&l.enable(5),w.normalMapObjectSpace&&l.enable(6),w.normalMapTangentSpace&&l.enable(7),w.clearcoat&&l.enable(8),w.iridescence&&l.enable(9),w.alphaTest&&l.enable(10),w.vertexColors&&l.enable(11),w.vertexAlphas&&l.enable(12),w.vertexUv1s&&l.enable(13),w.vertexUv2s&&l.enable(14),w.vertexUv3s&&l.enable(15),w.vertexTangents&&l.enable(16),w.anisotropy&&l.enable(17),w.alphaHash&&l.enable(18),w.batching&&l.enable(19),w.dispersion&&l.enable(20),w.batchingColor&&l.enable(21),w.gradientMap&&l.enable(22),A.push(l.mask),l.disableAll(),w.fog&&l.enable(0),w.useFog&&l.enable(1),w.flatShading&&l.enable(2),w.logarithmicDepthBuffer&&l.enable(3),w.reversedDepthBuffer&&l.enable(4),w.skinning&&l.enable(5),w.morphTargets&&l.enable(6),w.morphNormals&&l.enable(7),w.morphColors&&l.enable(8),w.premultipliedAlpha&&l.enable(9),w.shadowMapEnabled&&l.enable(10),w.doubleSided&&l.enable(11),w.flipSided&&l.enable(12),w.useDepthPacking&&l.enable(13),w.dithering&&l.enable(14),w.transmission&&l.enable(15),w.sheen&&l.enable(16),w.opaque&&l.enable(17),w.pointsUvs&&l.enable(18),w.decodeVideoTexture&&l.enable(19),w.decodeVideoTextureEmissive&&l.enable(20),w.alphaToCoverage&&l.enable(21),A.push(l.mask)}function E(A){const w=v[A.type];let L;if(w){const Y=Dn[w];L=_d.clone(Y.uniforms)}else L=A.uniforms;return L}function I(A,w){let L;for(let Y=0,X=h.length;Y<X;Y++){const V=h[Y];if(V.cacheKey===w){L=V,++L.usedTimes;break}}return L===void 0&&(L=new w0(r,w,A,i),h.push(L)),L}function D(A){if(--A.usedTimes===0){const w=h.indexOf(A);h[w]=h[h.length-1],h.pop(),A.destroy()}}function N(A){c.remove(A)}function B(){c.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:E,acquireProgram:I,releaseProgram:D,releaseShaderCache:N,programs:h,dispose:B}}function I0(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let l=r.get(a);return l===void 0&&(l={},r.set(a,l)),l}function n(a){r.delete(a)}function s(a,l,c){r.get(a)[l]=c}function i(){r=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:i}}function D0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function vu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Mu(){const r=[];let e=0;const t=[],n=[],s=[];function i(){e=0,t.length=0,n.length=0,s.length=0}function a(f,p,g,v,M,x){let m=r[e];return m===void 0?(m={id:f.id,object:f,geometry:p,material:g,groupOrder:v,renderOrder:f.renderOrder,z:M,group:x},r[e]=m):(m.id=f.id,m.object=f,m.geometry=p,m.material=g,m.groupOrder=v,m.renderOrder=f.renderOrder,m.z=M,m.group=x),e++,m}function l(f,p,g,v,M,x){const m=a(f,p,g,v,M,x);g.transmission>0?n.push(m):g.transparent===!0?s.push(m):t.push(m)}function c(f,p,g,v,M,x){const m=a(f,p,g,v,M,x);g.transmission>0?n.unshift(m):g.transparent===!0?s.unshift(m):t.unshift(m)}function o(f,p){t.length>1&&t.sort(f||D0),n.length>1&&n.sort(p||vu),s.length>1&&s.sort(p||vu)}function h(){for(let f=e,p=r.length;f<p;f++){const g=r[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:i,push:l,unshift:c,finish:h,sort:o}}function U0(){let r=new WeakMap;function e(n,s){const i=r.get(n);let a;return i===void 0?(a=new Mu,r.set(n,[a])):s>=i.length?(a=new Mu,i.push(a)):a=i[s],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function N0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ve};break;case"SpotLight":t={position:new O,direction:new O,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new O,halfWidth:new O,halfHeight:new O};break}return r[e.id]=t,t}}}function F0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let O0=0;function B0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function k0(r){const e=new N0,t=F0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new O);const s=new O,i=new et,a=new et;function l(o){let h=0,f=0,p=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let g=0,v=0,M=0,x=0,m=0,R=0,b=0,E=0,I=0,D=0,N=0;o.sort(B0);for(let A=0,w=o.length;A<w;A++){const L=o[A],Y=L.color,X=L.intensity,V=L.distance,ne=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=Y.r*X,f+=Y.g*X,p+=Y.b*X;else if(L.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(L.sh.coefficients[K],X);N++}else if(L.isDirectionalLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const oe=L.shadow,j=t.get(L);j.shadowIntensity=oe.intensity,j.shadowBias=oe.bias,j.shadowNormalBias=oe.normalBias,j.shadowRadius=oe.radius,j.shadowMapSize=oe.mapSize,n.directionalShadow[g]=j,n.directionalShadowMap[g]=ne,n.directionalShadowMatrix[g]=L.shadow.matrix,R++}n.directional[g]=K,g++}else if(L.isSpotLight){const K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(Y).multiplyScalar(X),K.distance=V,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,n.spot[M]=K;const oe=L.shadow;if(L.map&&(n.spotLightMap[I]=L.map,I++,oe.updateMatrices(L),L.castShadow&&D++),n.spotLightMatrix[M]=oe.matrix,L.castShadow){const j=t.get(L);j.shadowIntensity=oe.intensity,j.shadowBias=oe.bias,j.shadowNormalBias=oe.normalBias,j.shadowRadius=oe.radius,j.shadowMapSize=oe.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=ne,E++}M++}else if(L.isRectAreaLight){const K=e.get(L);K.color.copy(Y).multiplyScalar(X),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),n.rectArea[x]=K,x++}else if(L.isPointLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){const oe=L.shadow,j=t.get(L);j.shadowIntensity=oe.intensity,j.shadowBias=oe.bias,j.shadowNormalBias=oe.normalBias,j.shadowRadius=oe.radius,j.shadowMapSize=oe.mapSize,j.shadowCameraNear=oe.camera.near,j.shadowCameraFar=oe.camera.far,n.pointShadow[v]=j,n.pointShadowMap[v]=ne,n.pointShadowMatrix[v]=L.shadow.matrix,b++}n.point[v]=K,v++}else if(L.isHemisphereLight){const K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(X),K.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[m]=K,m++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=p;const B=n.hash;(B.directionalLength!==g||B.pointLength!==v||B.spotLength!==M||B.rectAreaLength!==x||B.hemiLength!==m||B.numDirectionalShadows!==R||B.numPointShadows!==b||B.numSpotShadows!==E||B.numSpotMaps!==I||B.numLightProbes!==N)&&(n.directional.length=g,n.spot.length=M,n.rectArea.length=x,n.point.length=v,n.hemi.length=m,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=E+I-D,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=N,B.directionalLength=g,B.pointLength=v,B.spotLength=M,B.rectAreaLength=x,B.hemiLength=m,B.numDirectionalShadows=R,B.numPointShadows=b,B.numSpotShadows=E,B.numSpotMaps=I,B.numLightProbes=N,n.version=O0++)}function c(o,h){let f=0,p=0,g=0,v=0,M=0;const x=h.matrixWorldInverse;for(let m=0,R=o.length;m<R;m++){const b=o[m];if(b.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(x),f++}else if(b.isSpotLight){const E=n.spot[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(x),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(x),g++}else if(b.isRectAreaLight){const E=n.rectArea[v];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(x),a.identity(),i.copy(b.matrixWorld),i.premultiply(x),a.extractRotation(i),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const E=n.point[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(x),p++}else if(b.isHemisphereLight){const E=n.hemi[M];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(x),M++}}}return{setup:l,setupView:c,state:n}}function yu(r){const e=new k0(r),t=[],n=[];function s(h){o.camera=h,t.length=0,n.length=0}function i(h){t.push(h)}function a(h){n.push(h)}function l(){e.setup(t)}function c(h){e.setupView(t,h)}const o={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:o,setupLights:l,setupLightsView:c,pushLight:i,pushShadow:a}}function z0(r){let e=new WeakMap;function t(s,i=0){const a=e.get(s);let l;return a===void 0?(l=new yu(r),e.set(s,[l])):i>=a.length?(l=new yu(r),a.push(l)):l=a[i],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const H0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V0=`uniform sampler2D shadow_pass;
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
}`;function G0(r,e,t){let n=new yl;const s=new Ke,i=new Ke,a=new dt,l=new Nd({depthPacking:Af}),c=new Fd,o={},h=t.maxTextureSize,f={[Ln]:an,[an]:Ln,[wn]:wn},p=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:H0,fragmentShader:V0}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const v=new sn;v.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new en(v,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ou;let m=this.type;this.render=function(D,N,B){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||D.length===0)return;const A=r.getRenderTarget(),w=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(di),Y.buffers.depth.getReversed()?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const X=m!==Yn&&this.type===Yn,V=m===Yn&&this.type!==Yn;for(let ne=0,K=D.length;ne<K;ne++){const oe=D[ne],j=oe.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const me=j.getFrameExtents();if(s.multiply(me),i.copy(j.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(i.x=Math.floor(h/me.x),s.x=i.x*me.x,j.mapSize.x=i.x),s.y>h&&(i.y=Math.floor(h/me.y),s.y=i.y*me.y,j.mapSize.y=i.y)),j.map===null||X===!0||V===!0){const Ie=this.type!==Yn?{minFilter:tn,magFilter:tn}:{};j.map!==null&&j.map.dispose(),j.map=new Bi(s.x,s.y,Ie),j.map.texture.name=oe.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const _e=j.getViewportCount();for(let Ie=0;Ie<_e;Ie++){const qe=j.getViewport(Ie);a.set(i.x*qe.x,i.y*qe.y,i.x*qe.z,i.y*qe.w),Y.viewport(a),j.updateMatrices(oe,Ie),n=j.getFrustum(),E(N,B,j.camera,oe,this.type)}j.isPointLightShadow!==!0&&this.type===Yn&&R(j,B),j.needsUpdate=!1}m=this.type,x.needsUpdate=!1,r.setRenderTarget(A,w,L)};function R(D,N){const B=e.update(M);p.defines.VSM_SAMPLES!==D.blurSamples&&(p.defines.VSM_SAMPLES=D.blurSamples,g.defines.VSM_SAMPLES=D.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Bi(s.x,s.y)),p.uniforms.shadow_pass.value=D.map.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,r.setRenderTarget(D.mapPass),r.clear(),r.renderBufferDirect(N,null,B,p,M,null),g.uniforms.shadow_pass.value=D.mapPass.texture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,r.setRenderTarget(D.map),r.clear(),r.renderBufferDirect(N,null,B,g,M,null)}function b(D,N,B,A){let w=null;const L=B.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(L!==void 0)w=L;else if(w=B.isPointLight===!0?c:l,r.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const Y=w.uuid,X=N.uuid;let V=o[Y];V===void 0&&(V={},o[Y]=V);let ne=V[X];ne===void 0&&(ne=w.clone(),V[X]=ne,N.addEventListener("dispose",I)),w=ne}if(w.visible=N.visible,w.wireframe=N.wireframe,A===Yn?w.side=N.shadowSide!==null?N.shadowSide:N.side:w.side=N.shadowSide!==null?N.shadowSide:f[N.side],w.alphaMap=N.alphaMap,w.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,w.map=N.map,w.clipShadows=N.clipShadows,w.clippingPlanes=N.clippingPlanes,w.clipIntersection=N.clipIntersection,w.displacementMap=N.displacementMap,w.displacementScale=N.displacementScale,w.displacementBias=N.displacementBias,w.wireframeLinewidth=N.wireframeLinewidth,w.linewidth=N.linewidth,B.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Y=r.properties.get(w);Y.light=B}return w}function E(D,N,B,A,w){if(D.visible===!1)return;if(D.layers.test(N.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&w===Yn)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,D.matrixWorld);const X=e.update(D),V=D.material;if(Array.isArray(V)){const ne=X.groups;for(let K=0,oe=ne.length;K<oe;K++){const j=ne[K],me=V[j.materialIndex];if(me&&me.visible){const _e=b(D,me,A,w);D.onBeforeShadow(r,D,N,B,X,_e,j),r.renderBufferDirect(B,null,X,_e,D,j),D.onAfterShadow(r,D,N,B,X,_e,j)}}}else if(V.visible){const ne=b(D,V,A,w);D.onBeforeShadow(r,D,N,B,X,ne,null),r.renderBufferDirect(B,null,X,ne,D,null),D.onAfterShadow(r,D,N,B,X,ne,null)}}const Y=D.children;for(let X=0,V=Y.length;X<V;X++)E(Y[X],N,B,A,w)}function I(D){D.target.removeEventListener("dispose",I);for(const B in o){const A=o[B],w=D.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}const W0={[Mo]:yo,[So]:bo,[Eo]:Ao,[ms]:To,[yo]:Mo,[bo]:So,[Ao]:Eo,[To]:ms};function X0(r,e){function t(){let k=!1;const ue=new dt;let pe=null;const Ae=new dt(0,0,0,0);return{setMask:function(ae){pe!==ae&&!k&&(r.colorMask(ae,ae,ae,ae),pe=ae)},setLocked:function(ae){k=ae},setClear:function(ae,te,Ce,$e,vt){vt===!0&&(ae*=$e,te*=$e,Ce*=$e),ue.set(ae,te,Ce,$e),Ae.equals(ue)===!1&&(r.clearColor(ae,te,Ce,$e),Ae.copy(ue))},reset:function(){k=!1,pe=null,Ae.set(-1,0,0,0)}}}function n(){let k=!1,ue=!1,pe=null,Ae=null,ae=null;return{setReversed:function(te){if(ue!==te){const Ce=e.get("EXT_clip_control");te?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ue=te;const $e=ae;ae=null,this.setClear($e)}},getReversed:function(){return ue},setTest:function(te){te?de(r.DEPTH_TEST):ke(r.DEPTH_TEST)},setMask:function(te){pe!==te&&!k&&(r.depthMask(te),pe=te)},setFunc:function(te){if(ue&&(te=W0[te]),Ae!==te){switch(te){case Mo:r.depthFunc(r.NEVER);break;case yo:r.depthFunc(r.ALWAYS);break;case So:r.depthFunc(r.LESS);break;case ms:r.depthFunc(r.LEQUAL);break;case Eo:r.depthFunc(r.EQUAL);break;case To:r.depthFunc(r.GEQUAL);break;case bo:r.depthFunc(r.GREATER);break;case Ao:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ae=te}},setLocked:function(te){k=te},setClear:function(te){ae!==te&&(ue&&(te=1-te),r.clearDepth(te),ae=te)},reset:function(){k=!1,pe=null,Ae=null,ae=null,ue=!1}}}function s(){let k=!1,ue=null,pe=null,Ae=null,ae=null,te=null,Ce=null,$e=null,vt=null;return{setTest:function(ut){k||(ut?de(r.STENCIL_TEST):ke(r.STENCIL_TEST))},setMask:function(ut){ue!==ut&&!k&&(r.stencilMask(ut),ue=ut)},setFunc:function(ut,Sn,fn){(pe!==ut||Ae!==Sn||ae!==fn)&&(r.stencilFunc(ut,Sn,fn),pe=ut,Ae=Sn,ae=fn)},setOp:function(ut,Sn,fn){(te!==ut||Ce!==Sn||$e!==fn)&&(r.stencilOp(ut,Sn,fn),te=ut,Ce=Sn,$e=fn)},setLocked:function(ut){k=ut},setClear:function(ut){vt!==ut&&(r.clearStencil(ut),vt=ut)},reset:function(){k=!1,ue=null,pe=null,Ae=null,ae=null,te=null,Ce=null,$e=null,vt=null}}}const i=new t,a=new n,l=new s,c=new WeakMap,o=new WeakMap;let h={},f={},p=new WeakMap,g=[],v=null,M=!1,x=null,m=null,R=null,b=null,E=null,I=null,D=null,N=new Ve(0,0,0),B=0,A=!1,w=null,L=null,Y=null,X=null,V=null;const ne=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,oe=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(j)[1]),K=oe>=1):j.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),K=oe>=2);let me=null,_e={};const Ie=r.getParameter(r.SCISSOR_BOX),qe=r.getParameter(r.VIEWPORT),pt=new dt().fromArray(Ie),ct=new dt().fromArray(qe);function J(k,ue,pe,Ae){const ae=new Uint8Array(4),te=r.createTexture();r.bindTexture(k,te),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ce=0;Ce<pe;Ce++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(ue,0,r.RGBA,1,1,Ae,0,r.RGBA,r.UNSIGNED_BYTE,ae):r.texImage2D(ue+Ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ae);return te}const ge={};ge[r.TEXTURE_2D]=J(r.TEXTURE_2D,r.TEXTURE_2D,1),ge[r.TEXTURE_CUBE_MAP]=J(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[r.TEXTURE_2D_ARRAY]=J(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ge[r.TEXTURE_3D]=J(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),l.setClear(0),de(r.DEPTH_TEST),a.setFunc(ms),at(!1),Ne(tc),de(r.CULL_FACE),Et(di);function de(k){h[k]!==!0&&(r.enable(k),h[k]=!0)}function ke(k){h[k]!==!1&&(r.disable(k),h[k]=!1)}function ze(k,ue){return f[k]!==ue?(r.bindFramebuffer(k,ue),f[k]=ue,k===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ue),k===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ye(k,ue){let pe=g,Ae=!1;if(k){pe=p.get(ue),pe===void 0&&(pe=[],p.set(ue,pe));const ae=k.textures;if(pe.length!==ae.length||pe[0]!==r.COLOR_ATTACHMENT0){for(let te=0,Ce=ae.length;te<Ce;te++)pe[te]=r.COLOR_ATTACHMENT0+te;pe.length=ae.length,Ae=!0}}else pe[0]!==r.BACK&&(pe[0]=r.BACK,Ae=!0);Ae&&r.drawBuffers(pe)}function Pt(k){return v!==k?(r.useProgram(k),v=k,!0):!1}const rt={[Di]:r.FUNC_ADD,[Kh]:r.FUNC_SUBTRACT,[jh]:r.FUNC_REVERSE_SUBTRACT};rt[Zh]=r.MIN,rt[Jh]=r.MAX;const F={[Qh]:r.ZERO,[ef]:r.ONE,[tf]:r.SRC_COLOR,[xo]:r.SRC_ALPHA,[lf]:r.SRC_ALPHA_SATURATE,[af]:r.DST_COLOR,[sf]:r.DST_ALPHA,[nf]:r.ONE_MINUS_SRC_COLOR,[vo]:r.ONE_MINUS_SRC_ALPHA,[of]:r.ONE_MINUS_DST_COLOR,[rf]:r.ONE_MINUS_DST_ALPHA,[cf]:r.CONSTANT_COLOR,[uf]:r.ONE_MINUS_CONSTANT_COLOR,[hf]:r.CONSTANT_ALPHA,[ff]:r.ONE_MINUS_CONSTANT_ALPHA};function Et(k,ue,pe,Ae,ae,te,Ce,$e,vt,ut){if(k===di){M===!0&&(ke(r.BLEND),M=!1);return}if(M===!1&&(de(r.BLEND),M=!0),k!==Yh){if(k!==x||ut!==A){if((m!==Di||E!==Di)&&(r.blendEquation(r.FUNC_ADD),m=Di,E=Di),ut)switch(k){case hs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nc:r.blendFunc(r.ONE,r.ONE);break;case ic:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case sc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case hs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ic:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}R=null,b=null,I=null,D=null,N.set(0,0,0),B=0,x=k,A=ut}return}ae=ae||ue,te=te||pe,Ce=Ce||Ae,(ue!==m||ae!==E)&&(r.blendEquationSeparate(rt[ue],rt[ae]),m=ue,E=ae),(pe!==R||Ae!==b||te!==I||Ce!==D)&&(r.blendFuncSeparate(F[pe],F[Ae],F[te],F[Ce]),R=pe,b=Ae,I=te,D=Ce),($e.equals(N)===!1||vt!==B)&&(r.blendColor($e.r,$e.g,$e.b,vt),N.copy($e),B=vt),x=k,A=!1}function Fe(k,ue){k.side===wn?ke(r.CULL_FACE):de(r.CULL_FACE);let pe=k.side===an;ue&&(pe=!pe),at(pe),k.blending===hs&&k.transparent===!1?Et(di):Et(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),i.setMask(k.colorWrite);const Ae=k.stencilWrite;l.setTest(Ae),Ae&&(l.setMask(k.stencilWriteMask),l.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),l.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Te(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?de(r.SAMPLE_ALPHA_TO_COVERAGE):ke(r.SAMPLE_ALPHA_TO_COVERAGE)}function at(k){w!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),w=k)}function Ne(k){k!==Xh?(de(r.CULL_FACE),k!==L&&(k===tc?r.cullFace(r.BACK):k===$h?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ke(r.CULL_FACE),L=k}function mt(k){k!==Y&&(K&&r.lineWidth(k),Y=k)}function Te(k,ue,pe){k?(de(r.POLYGON_OFFSET_FILL),(X!==ue||V!==pe)&&(r.polygonOffset(ue,pe),X=ue,V=pe)):ke(r.POLYGON_OFFSET_FILL)}function Ze(k){k?de(r.SCISSOR_TEST):ke(r.SCISSOR_TEST)}function Dt(k){k===void 0&&(k=r.TEXTURE0+ne-1),me!==k&&(r.activeTexture(k),me=k)}function Rt(k,ue,pe){pe===void 0&&(me===null?pe=r.TEXTURE0+ne-1:pe=me);let Ae=_e[pe];Ae===void 0&&(Ae={type:void 0,texture:void 0},_e[pe]=Ae),(Ae.type!==k||Ae.texture!==ue)&&(me!==pe&&(r.activeTexture(pe),me=pe),r.bindTexture(k,ue||ge[k]),Ae.type=k,Ae.texture=ue)}function P(){const k=_e[me];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function S(){try{r.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function W(){try{r.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{r.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{r.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Z(){try{r.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{r.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{r.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{r.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(){try{r.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ce(){try{r.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(k){pt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),pt.copy(k))}function Ge(k){ct.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),ct.copy(k))}function De(k,ue){let pe=o.get(ue);pe===void 0&&(pe=new WeakMap,o.set(ue,pe));let Ae=pe.get(k);Ae===void 0&&(Ae=r.getUniformBlockIndex(ue,k.name),pe.set(k,Ae))}function xe(k,ue){const Ae=o.get(ue).get(k);c.get(ue)!==Ae&&(r.uniformBlockBinding(ue,Ae,k.__bindingPointIndex),c.set(ue,Ae))}function je(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},me=null,_e={},f={},p=new WeakMap,g=[],v=null,M=!1,x=null,m=null,R=null,b=null,E=null,I=null,D=null,N=new Ve(0,0,0),B=0,A=!1,w=null,L=null,Y=null,X=null,V=null,pt.set(0,0,r.canvas.width,r.canvas.height),ct.set(0,0,r.canvas.width,r.canvas.height),i.reset(),a.reset(),l.reset()}return{buffers:{color:i,depth:a,stencil:l},enable:de,disable:ke,bindFramebuffer:ze,drawBuffers:Ye,useProgram:Pt,setBlending:Et,setMaterial:Fe,setFlipSided:at,setCullFace:Ne,setLineWidth:mt,setPolygonOffset:Te,setScissorTest:Ze,activeTexture:Dt,bindTexture:Rt,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:W,texImage2D:Le,texImage3D:ce,updateUBOMapping:De,uniformBlockBinding:xe,texStorage2D:fe,texStorage3D:Pe,texSubImage2D:ee,texSubImage3D:se,compressedTexSubImage2D:Z,compressedTexSubImage3D:Ue,scissor:ye,viewport:Ge,reset:je}}function $0(r,e,t,n,s,i,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new Ke,h=new WeakMap;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,S){return g?new OffscreenCanvas(P,S):ir("canvas")}function M(P,S,W){let ee=1;const se=Rt(P);if((se.width>W||se.height>W)&&(ee=W/Math.max(se.width,se.height)),ee<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Z=Math.floor(ee*se.width),Ue=Math.floor(ee*se.height);f===void 0&&(f=v(Z,Ue));const fe=S?v(Z,Ue):f;return fe.width=Z,fe.height=Ue,fe.getContext("2d").drawImage(P,0,0,Z,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Z+"x"+Ue+")."),fe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),P;return P}function x(P){return P.generateMipmaps}function m(P){r.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(P,S,W,ee,se=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Z=S;if(S===r.RED&&(W===r.FLOAT&&(Z=r.R32F),W===r.HALF_FLOAT&&(Z=r.R16F),W===r.UNSIGNED_BYTE&&(Z=r.R8)),S===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(Z=r.R8UI),W===r.UNSIGNED_SHORT&&(Z=r.R16UI),W===r.UNSIGNED_INT&&(Z=r.R32UI),W===r.BYTE&&(Z=r.R8I),W===r.SHORT&&(Z=r.R16I),W===r.INT&&(Z=r.R32I)),S===r.RG&&(W===r.FLOAT&&(Z=r.RG32F),W===r.HALF_FLOAT&&(Z=r.RG16F),W===r.UNSIGNED_BYTE&&(Z=r.RG8)),S===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(Z=r.RG8UI),W===r.UNSIGNED_SHORT&&(Z=r.RG16UI),W===r.UNSIGNED_INT&&(Z=r.RG32UI),W===r.BYTE&&(Z=r.RG8I),W===r.SHORT&&(Z=r.RG16I),W===r.INT&&(Z=r.RG32I)),S===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),W===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),W===r.UNSIGNED_INT&&(Z=r.RGB32UI),W===r.BYTE&&(Z=r.RGB8I),W===r.SHORT&&(Z=r.RGB16I),W===r.INT&&(Z=r.RGB32I)),S===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),W===r.UNSIGNED_INT&&(Z=r.RGBA32UI),W===r.BYTE&&(Z=r.RGBA8I),W===r.SHORT&&(Z=r.RGBA16I),W===r.INT&&(Z=r.RGBA32I)),S===r.RGB&&W===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),S===r.RGBA){const Ue=se?ra:lt.getTransfer(ee);W===r.FLOAT&&(Z=r.RGBA32F),W===r.HALF_FLOAT&&(Z=r.RGBA16F),W===r.UNSIGNED_BYTE&&(Z=Ue===Tt?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function E(P,S){let W;return P?S===null||S===Oi||S===Js?W=r.DEPTH24_STENCIL8:S===Cn?W=r.DEPTH32F_STENCIL8:S===Zs&&(W=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Oi||S===Js?W=r.DEPTH_COMPONENT24:S===Cn?W=r.DEPTH_COMPONENT32F:S===Zs&&(W=r.DEPTH_COMPONENT16),W}function I(P,S){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==tn&&P.minFilter!==hn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function D(P){const S=P.target;S.removeEventListener("dispose",D),B(S),S.isVideoTexture&&h.delete(S)}function N(P){const S=P.target;S.removeEventListener("dispose",N),w(S)}function B(P){const S=n.get(P);if(S.__webglInit===void 0)return;const W=P.source,ee=p.get(W);if(ee){const se=ee[S.__cacheKey];se.usedTimes--,se.usedTimes===0&&A(P),Object.keys(ee).length===0&&p.delete(W)}n.remove(P)}function A(P){const S=n.get(P);r.deleteTexture(S.__webglTexture);const W=P.source,ee=p.get(W);delete ee[S.__cacheKey],a.memory.textures--}function w(P){const S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(S.__webglFramebuffer[ee]))for(let se=0;se<S.__webglFramebuffer[ee].length;se++)r.deleteFramebuffer(S.__webglFramebuffer[ee][se]);else r.deleteFramebuffer(S.__webglFramebuffer[ee]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[ee])}else{if(Array.isArray(S.__webglFramebuffer))for(let ee=0;ee<S.__webglFramebuffer.length;ee++)r.deleteFramebuffer(S.__webglFramebuffer[ee]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ee=0;ee<S.__webglColorRenderbuffer.length;ee++)S.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[ee]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const W=P.textures;for(let ee=0,se=W.length;ee<se;ee++){const Z=n.get(W[ee]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(W[ee])}n.remove(P)}let L=0;function Y(){L=0}function X(){const P=L;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),L+=1,P}function V(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function ne(P,S){const W=n.get(P);if(P.isVideoTexture&&Ze(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){const ee=P.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(W,P,S);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+S)}function K(P,S){const W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){ge(W,P,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+S)}function oe(P,S){const W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){ge(W,P,S);return}t.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+S)}function j(P,S){const W=n.get(P);if(P.version>0&&W.__version!==P.version){de(W,P,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+S)}const me={[Fi]:r.REPEAT,[Zn]:r.CLAMP_TO_EDGE,[sa]:r.MIRRORED_REPEAT},_e={[tn]:r.NEAREST,[ku]:r.NEAREST_MIPMAP_NEAREST,[$s]:r.NEAREST_MIPMAP_LINEAR,[hn]:r.LINEAR,[jr]:r.LINEAR_MIPMAP_NEAREST,[Jn]:r.LINEAR_MIPMAP_LINEAR},Ie={[Rf]:r.NEVER,[Uf]:r.ALWAYS,[Cf]:r.LESS,[Yu]:r.LEQUAL,[Pf]:r.EQUAL,[Df]:r.GEQUAL,[Lf]:r.GREATER,[If]:r.NOTEQUAL};function qe(P,S){if(S.type===Cn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===hn||S.magFilter===jr||S.magFilter===$s||S.magFilter===Jn||S.minFilter===hn||S.minFilter===jr||S.minFilter===$s||S.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,me[S.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,me[S.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,me[S.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,_e[S.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,_e[S.minFilter]),S.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Ie[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===tn||S.minFilter!==$s&&S.minFilter!==Jn||S.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function pt(P,S){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",D));const ee=S.source;let se=p.get(ee);se===void 0&&(se={},p.set(ee,se));const Z=V(S);if(Z!==P.__cacheKey){se[Z]===void 0&&(se[Z]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,W=!0),se[Z].usedTimes++;const Ue=se[P.__cacheKey];Ue!==void 0&&(se[P.__cacheKey].usedTimes--,Ue.usedTimes===0&&A(S)),P.__cacheKey=Z,P.__webglTexture=se[Z].texture}return W}function ct(P,S,W){return Math.floor(Math.floor(P/W)/S)}function J(P,S,W,ee){const Z=P.updateRanges;if(Z.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,W,ee,S.data);else{Z.sort((ce,ye)=>ce.start-ye.start);let Ue=0;for(let ce=1;ce<Z.length;ce++){const ye=Z[Ue],Ge=Z[ce],De=ye.start+ye.count,xe=ct(Ge.start,S.width,4),je=ct(ye.start,S.width,4);Ge.start<=De+1&&xe===je&&ct(Ge.start+Ge.count-1,S.width,4)===xe?ye.count=Math.max(ye.count,Ge.start+Ge.count-ye.start):(++Ue,Z[Ue]=Ge)}Z.length=Ue+1;const fe=r.getParameter(r.UNPACK_ROW_LENGTH),Pe=r.getParameter(r.UNPACK_SKIP_PIXELS),Le=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let ce=0,ye=Z.length;ce<ye;ce++){const Ge=Z[ce],De=Math.floor(Ge.start/4),xe=Math.ceil(Ge.count/4),je=De%S.width,k=Math.floor(De/S.width),ue=xe,pe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,je),r.pixelStorei(r.UNPACK_SKIP_ROWS,k),t.texSubImage2D(r.TEXTURE_2D,0,je,k,ue,pe,W,ee,S.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,fe),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Pe),r.pixelStorei(r.UNPACK_SKIP_ROWS,Le)}}function ge(P,S,W){let ee=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ee=r.TEXTURE_3D);const se=pt(P,S),Z=S.source;t.bindTexture(ee,P.__webglTexture,r.TEXTURE0+W);const Ue=n.get(Z);if(Z.version!==Ue.__version||se===!0){t.activeTexture(r.TEXTURE0+W);const fe=lt.getPrimaries(lt.workingColorSpace),Pe=S.colorSpace===hi?null:lt.getPrimaries(S.colorSpace),Le=S.colorSpace===hi||fe===Pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ce=M(S.image,!1,s.maxTextureSize);ce=Dt(S,ce);const ye=i.convert(S.format,S.colorSpace),Ge=i.convert(S.type);let De=b(S.internalFormat,ye,Ge,S.colorSpace,S.isVideoTexture);qe(ee,S);let xe;const je=S.mipmaps,k=S.isVideoTexture!==!0,ue=Ue.__version===void 0||se===!0,pe=Z.dataReady,Ae=I(S,ce);if(S.isDepthTexture)De=E(S.format===er,S.type),ue&&(k?t.texStorage2D(r.TEXTURE_2D,1,De,ce.width,ce.height):t.texImage2D(r.TEXTURE_2D,0,De,ce.width,ce.height,0,ye,Ge,null));else if(S.isDataTexture)if(je.length>0){k&&ue&&t.texStorage2D(r.TEXTURE_2D,Ae,De,je[0].width,je[0].height);for(let ae=0,te=je.length;ae<te;ae++)xe=je[ae],k?pe&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,xe.width,xe.height,ye,Ge,xe.data):t.texImage2D(r.TEXTURE_2D,ae,De,xe.width,xe.height,0,ye,Ge,xe.data);S.generateMipmaps=!1}else k?(ue&&t.texStorage2D(r.TEXTURE_2D,Ae,De,ce.width,ce.height),pe&&J(S,ce,ye,Ge)):t.texImage2D(r.TEXTURE_2D,0,De,ce.width,ce.height,0,ye,Ge,ce.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){k&&ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,De,je[0].width,je[0].height,ce.depth);for(let ae=0,te=je.length;ae<te;ae++)if(xe=je[ae],S.format!==vn)if(ye!==null)if(k){if(pe)if(S.layerUpdates.size>0){const Ce=Zc(xe.width,xe.height,S.format,S.type);for(const $e of S.layerUpdates){const vt=xe.data.subarray($e*Ce/xe.data.BYTES_PER_ELEMENT,($e+1)*Ce/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,$e,xe.width,xe.height,1,ye,vt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,ce.depth,ye,xe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ae,De,xe.width,xe.height,ce.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?pe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,ce.depth,ye,Ge,xe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ae,De,xe.width,xe.height,ce.depth,0,ye,Ge,xe.data)}else{k&&ue&&t.texStorage2D(r.TEXTURE_2D,Ae,De,je[0].width,je[0].height);for(let ae=0,te=je.length;ae<te;ae++)xe=je[ae],S.format!==vn?ye!==null?k?pe&&t.compressedTexSubImage2D(r.TEXTURE_2D,ae,0,0,xe.width,xe.height,ye,xe.data):t.compressedTexImage2D(r.TEXTURE_2D,ae,De,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?pe&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,xe.width,xe.height,ye,Ge,xe.data):t.texImage2D(r.TEXTURE_2D,ae,De,xe.width,xe.height,0,ye,Ge,xe.data)}else if(S.isDataArrayTexture)if(k){if(ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,De,ce.width,ce.height,ce.depth),pe)if(S.layerUpdates.size>0){const ae=Zc(ce.width,ce.height,S.format,S.type);for(const te of S.layerUpdates){const Ce=ce.data.subarray(te*ae/ce.data.BYTES_PER_ELEMENT,(te+1)*ae/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,te,ce.width,ce.height,1,ye,Ge,Ce)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ye,Ge,ce.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,De,ce.width,ce.height,ce.depth,0,ye,Ge,ce.data);else if(S.isData3DTexture)k?(ue&&t.texStorage3D(r.TEXTURE_3D,Ae,De,ce.width,ce.height,ce.depth),pe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ye,Ge,ce.data)):t.texImage3D(r.TEXTURE_3D,0,De,ce.width,ce.height,ce.depth,0,ye,Ge,ce.data);else if(S.isFramebufferTexture){if(ue)if(k)t.texStorage2D(r.TEXTURE_2D,Ae,De,ce.width,ce.height);else{let ae=ce.width,te=ce.height;for(let Ce=0;Ce<Ae;Ce++)t.texImage2D(r.TEXTURE_2D,Ce,De,ae,te,0,ye,Ge,null),ae>>=1,te>>=1}}else if(je.length>0){if(k&&ue){const ae=Rt(je[0]);t.texStorage2D(r.TEXTURE_2D,Ae,De,ae.width,ae.height)}for(let ae=0,te=je.length;ae<te;ae++)xe=je[ae],k?pe&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,ye,Ge,xe):t.texImage2D(r.TEXTURE_2D,ae,De,ye,Ge,xe);S.generateMipmaps=!1}else if(k){if(ue){const ae=Rt(ce);t.texStorage2D(r.TEXTURE_2D,Ae,De,ae.width,ae.height)}pe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ye,Ge,ce)}else t.texImage2D(r.TEXTURE_2D,0,De,ye,Ge,ce);x(S)&&m(ee),Ue.__version=Z.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function de(P,S,W){if(S.image.length!==6)return;const ee=pt(P,S),se=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+W);const Z=n.get(se);if(se.version!==Z.__version||ee===!0){t.activeTexture(r.TEXTURE0+W);const Ue=lt.getPrimaries(lt.workingColorSpace),fe=S.colorSpace===hi?null:lt.getPrimaries(S.colorSpace),Pe=S.colorSpace===hi||Ue===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Le=S.isCompressedTexture||S.image[0].isCompressedTexture,ce=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let te=0;te<6;te++)!Le&&!ce?ye[te]=M(S.image[te],!0,s.maxCubemapSize):ye[te]=ce?S.image[te].image:S.image[te],ye[te]=Dt(S,ye[te]);const Ge=ye[0],De=i.convert(S.format,S.colorSpace),xe=i.convert(S.type),je=b(S.internalFormat,De,xe,S.colorSpace),k=S.isVideoTexture!==!0,ue=Z.__version===void 0||ee===!0,pe=se.dataReady;let Ae=I(S,Ge);qe(r.TEXTURE_CUBE_MAP,S);let ae;if(Le){k&&ue&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ae,je,Ge.width,Ge.height);for(let te=0;te<6;te++){ae=ye[te].mipmaps;for(let Ce=0;Ce<ae.length;Ce++){const $e=ae[Ce];S.format!==vn?De!==null?k?pe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce,0,0,$e.width,$e.height,De,$e.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce,je,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce,0,0,$e.width,$e.height,De,xe,$e.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce,je,$e.width,$e.height,0,De,xe,$e.data)}}}else{if(ae=S.mipmaps,k&&ue){ae.length>0&&Ae++;const te=Rt(ye[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ae,je,te.width,te.height)}for(let te=0;te<6;te++)if(ce){k?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ye[te].width,ye[te].height,De,xe,ye[te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,je,ye[te].width,ye[te].height,0,De,xe,ye[te].data);for(let Ce=0;Ce<ae.length;Ce++){const vt=ae[Ce].image[te].image;k?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce+1,0,0,vt.width,vt.height,De,xe,vt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce+1,je,vt.width,vt.height,0,De,xe,vt.data)}}else{k?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,De,xe,ye[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,je,De,xe,ye[te]);for(let Ce=0;Ce<ae.length;Ce++){const $e=ae[Ce];k?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce+1,0,0,De,xe,$e.image[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce+1,je,De,xe,$e.image[te])}}}x(S)&&m(r.TEXTURE_CUBE_MAP),Z.__version=se.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ke(P,S,W,ee,se,Z){const Ue=i.convert(W.format,W.colorSpace),fe=i.convert(W.type),Pe=b(W.internalFormat,Ue,fe,W.colorSpace),Le=n.get(S),ce=n.get(W);if(ce.__renderTarget=S,!Le.__hasExternalTextures){const ye=Math.max(1,S.width>>Z),Ge=Math.max(1,S.height>>Z);se===r.TEXTURE_3D||se===r.TEXTURE_2D_ARRAY?t.texImage3D(se,Z,Pe,ye,Ge,S.depth,0,Ue,fe,null):t.texImage2D(se,Z,Pe,ye,Ge,0,Ue,fe,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),Te(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,se,ce.__webglTexture,0,mt(S)):(se===r.TEXTURE_2D||se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,se,ce.__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ze(P,S,W){if(r.bindRenderbuffer(r.RENDERBUFFER,P),S.depthBuffer){const ee=S.depthTexture,se=ee&&ee.isDepthTexture?ee.type:null,Z=E(S.stencilBuffer,se),Ue=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=mt(S);Te(S)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,Z,S.width,S.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,Z,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Z,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ue,r.RENDERBUFFER,P)}else{const ee=S.textures;for(let se=0;se<ee.length;se++){const Z=ee[se],Ue=i.convert(Z.format,Z.colorSpace),fe=i.convert(Z.type),Pe=b(Z.internalFormat,Ue,fe,Z.colorSpace),Le=mt(S);W&&Te(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Le,Pe,S.width,S.height):Te(S)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Le,Pe,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Pe,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ye(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(S.depthTexture);ee.__renderTarget=S,(!ee.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ne(S.depthTexture,0);const se=ee.__webglTexture,Z=mt(S);if(S.depthTexture.format===Qs)Te(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0);else if(S.depthTexture.format===er)Te(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Pt(P){const S=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const ee=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ee){const se=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ee.removeEventListener("dispose",se)};ee.addEventListener("dispose",se),S.__depthDisposeCallback=se}S.__boundDepthTexture=ee}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const ee=P.texture.mipmaps;ee&&ee.length>0?Ye(S.__webglFramebuffer[0],P):Ye(S.__webglFramebuffer,P)}else if(W){S.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[ee]),S.__webglDepthbuffer[ee]===void 0)S.__webglDepthbuffer[ee]=r.createRenderbuffer(),ze(S.__webglDepthbuffer[ee],P,!1);else{const se=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[ee];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,Z)}}else{const ee=P.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),ze(S.__webglDepthbuffer,P,!1);else{const se=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,Z)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function rt(P,S,W){const ee=n.get(P);S!==void 0&&ke(ee.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&Pt(P)}function F(P){const S=P.texture,W=n.get(P),ee=n.get(S);P.addEventListener("dispose",N);const se=P.textures,Z=P.isWebGLCubeRenderTarget===!0,Ue=se.length>1;if(Ue||(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=S.version,a.memory.textures++),Z){W.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[fe]=[];for(let Pe=0;Pe<S.mipmaps.length;Pe++)W.__webglFramebuffer[fe][Pe]=r.createFramebuffer()}else W.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let fe=0;fe<S.mipmaps.length;fe++)W.__webglFramebuffer[fe]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Ue)for(let fe=0,Pe=se.length;fe<Pe;fe++){const Le=n.get(se[fe]);Le.__webglTexture===void 0&&(Le.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&Te(P)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let fe=0;fe<se.length;fe++){const Pe=se[fe];W.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[fe]);const Le=i.convert(Pe.format,Pe.colorSpace),ce=i.convert(Pe.type),ye=b(Pe.internalFormat,Le,ce,Pe.colorSpace,P.isXRRenderTarget===!0),Ge=mt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge,ye,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,W.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),ze(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),qe(r.TEXTURE_CUBE_MAP,S);for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Pe=0;Pe<S.mipmaps.length;Pe++)ke(W.__webglFramebuffer[fe][Pe],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe);else ke(W.__webglFramebuffer[fe],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);x(S)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let fe=0,Pe=se.length;fe<Pe;fe++){const Le=se[fe],ce=n.get(Le);let ye=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ye=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ye,ce.__webglTexture),qe(ye,Le),ke(W.__webglFramebuffer,P,Le,r.COLOR_ATTACHMENT0+fe,ye,0),x(Le)&&m(ye)}t.unbindTexture()}else{let fe=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(fe=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(fe,ee.__webglTexture),qe(fe,S),S.mipmaps&&S.mipmaps.length>0)for(let Pe=0;Pe<S.mipmaps.length;Pe++)ke(W.__webglFramebuffer[Pe],P,S,r.COLOR_ATTACHMENT0,fe,Pe);else ke(W.__webglFramebuffer,P,S,r.COLOR_ATTACHMENT0,fe,0);x(S)&&m(fe),t.unbindTexture()}P.depthBuffer&&Pt(P)}function Et(P){const S=P.textures;for(let W=0,ee=S.length;W<ee;W++){const se=S[W];if(x(se)){const Z=R(P),Ue=n.get(se).__webglTexture;t.bindTexture(Z,Ue),m(Z),t.unbindTexture()}}}const Fe=[],at=[];function Ne(P){if(P.samples>0){if(Te(P)===!1){const S=P.textures,W=P.width,ee=P.height;let se=r.COLOR_BUFFER_BIT;const Z=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ue=n.get(P),fe=S.length>1;if(fe)for(let Le=0;Le<S.length;Le++)t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const Pe=P.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Le=0;Le<S.length;Le++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(se|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(se|=r.STENCIL_BUFFER_BIT)),fe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[Le]);const ce=n.get(S[Le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ce,0)}r.blitFramebuffer(0,0,W,ee,0,0,W,ee,se,r.NEAREST),c===!0&&(Fe.length=0,at.length=0,Fe.push(r.COLOR_ATTACHMENT0+Le),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Fe.push(Z),at.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,at)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let Le=0;Le<S.length;Le++){t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[Le]);const ce=n.get(S[Le]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,ce,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const S=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function mt(P){return Math.min(s.maxSamples,P.samples)}function Te(P){const S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ze(P){const S=a.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function Dt(P,S){const W=P.colorSpace,ee=P.format,se=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==nn&&W!==hi&&(lt.getTransfer(W)===Tt?(ee!==vn||se!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),S}function Rt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(o.width=P.naturalWidth||P.width,o.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(o.width=P.displayWidth,o.height=P.displayHeight):(o.width=P.width,o.height=P.height),o}this.allocateTextureUnit=X,this.resetTextureUnits=Y,this.setTexture2D=ne,this.setTexture2DArray=K,this.setTexture3D=oe,this.setTextureCube=j,this.rebindTextures=rt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=Te}function q0(r,e){function t(n,s=hi){let i;const a=lt.getTransfer(s);if(n===Nn)return r.UNSIGNED_BYTE;if(n===hl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===fl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Vu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===zu)return r.BYTE;if(n===Hu)return r.SHORT;if(n===Zs)return r.UNSIGNED_SHORT;if(n===ul)return r.INT;if(n===Oi)return r.UNSIGNED_INT;if(n===Cn)return r.FLOAT;if(n===rr)return r.HALF_FLOAT;if(n===Gu)return r.ALPHA;if(n===Wu)return r.RGB;if(n===vn)return r.RGBA;if(n===Qs)return r.DEPTH_COMPONENT;if(n===er)return r.DEPTH_STENCIL;if(n===dl)return r.RED;if(n===pl)return r.RED_INTEGER;if(n===Xu)return r.RG;if(n===ml)return r.RG_INTEGER;if(n===gl)return r.RGBA_INTEGER;if(n===Zr||n===Jr||n===Qr||n===ea)if(a===Tt)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(n===Zr)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jr)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qr)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ea)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(n===Zr)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jr)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qr)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ea)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Co||n===Po||n===Lo||n===Io)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(n===Co)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Po)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lo)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Io)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Do||n===Uo||n===No)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(n===Do||n===Uo)return a===Tt?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===No)return a===Tt?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fo||n===Oo||n===Bo||n===ko||n===zo||n===Ho||n===Vo||n===Go||n===Wo||n===Xo||n===$o||n===qo||n===Yo||n===Ko)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(n===Fo)return a===Tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oo)return a===Tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bo)return a===Tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ko)return a===Tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zo)return a===Tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ho)return a===Tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vo)return a===Tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Go)return a===Tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wo)return a===Tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xo)return a===Tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$o)return a===Tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qo)return a===Tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yo)return a===Tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ko)return a===Tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ta||n===jo||n===Zo)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(n===ta)return a===Tt?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jo)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zo)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$u||n===Jo||n===Qo||n===el)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(n===ta)return i.COMPRESSED_RED_RGTC1_EXT;if(n===Jo)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qo)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===el)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Js?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class yh extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const Y0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K0=`
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

}`;class j0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new yh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new gi({vertexShader:Y0,fragmentShader:K0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new en(new fa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Z0 extends Es{constructor(e,t){super();const n=this;let s=null,i=1,a=null,l="local-floor",c=1,o=null,h=null,f=null,p=null,g=null,v=null;const M=new j0,x={},m=t.getContextAttributes();let R=null,b=null;const E=[],I=[],D=new Ke;let N=null;const B=new Qt;B.viewport=new dt;const A=new Qt;A.viewport=new dt;const w=[B,A],L=new ip;let Y=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ge=E[J];return ge===void 0&&(ge=new Ya,E[J]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(J){let ge=E[J];return ge===void 0&&(ge=new Ya,E[J]=ge),ge.getGripSpace()},this.getHand=function(J){let ge=E[J];return ge===void 0&&(ge=new Ya,E[J]=ge),ge.getHandSpace()};function V(J){const ge=I.indexOf(J.inputSource);if(ge===-1)return;const de=E[ge];de!==void 0&&(de.update(J.inputSource,J.frame,o||a),de.dispatchEvent({type:J.type,data:J.inputSource}))}function ne(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",ne),s.removeEventListener("inputsourceschange",K);for(let J=0;J<E.length;J++){const ge=I[J];ge!==null&&(I[J]=null,E[J].disconnect(ge))}Y=null,X=null,M.reset();for(const J in x)delete x[J];e.setRenderTarget(R),g=null,p=null,f=null,s=null,b=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){i=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){l=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||a},this.setReferenceSpace=function(J){o=J},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",ne),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&(f=new XRWebGLBinding(s,t)),f!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,ke=null,ze=null;m.depth&&(ze=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?er:Qs,ke=m.stencil?Js:Oi);const Ye={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:i};p=f.createProjectionLayer(Ye),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),b=new Bi(p.textureWidth,p.textureHeight,{format:vn,type:Nn,depthTexture:new hh(p.textureWidth,p.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:i};g=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),b=new Bi(g.framebufferWidth,g.framebufferHeight,{format:vn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),o=null,a=await s.requestReferenceSpace(l),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function K(J){for(let ge=0;ge<J.removed.length;ge++){const de=J.removed[ge],ke=I.indexOf(de);ke>=0&&(I[ke]=null,E[ke].disconnect(de))}for(let ge=0;ge<J.added.length;ge++){const de=J.added[ge];let ke=I.indexOf(de);if(ke===-1){for(let Ye=0;Ye<E.length;Ye++)if(Ye>=I.length){I.push(de),ke=Ye;break}else if(I[Ye]===null){I[Ye]=de,ke=Ye;break}if(ke===-1)break}const ze=E[ke];ze&&ze.connect(de)}}const oe=new O,j=new O;function me(J,ge,de){oe.setFromMatrixPosition(ge.matrixWorld),j.setFromMatrixPosition(de.matrixWorld);const ke=oe.distanceTo(j),ze=ge.projectionMatrix.elements,Ye=de.projectionMatrix.elements,Pt=ze[14]/(ze[10]-1),rt=ze[14]/(ze[10]+1),F=(ze[9]+1)/ze[5],Et=(ze[9]-1)/ze[5],Fe=(ze[8]-1)/ze[0],at=(Ye[8]+1)/Ye[0],Ne=Pt*Fe,mt=Pt*at,Te=ke/(-Fe+at),Ze=Te*-Fe;if(ge.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ze),J.translateZ(Te),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ze[10]===-1)J.projectionMatrix.copy(ge.projectionMatrix),J.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Dt=Pt+Te,Rt=rt+Te,P=Ne-Ze,S=mt+(ke-Ze),W=F*rt/Rt*Dt,ee=Et*rt/Rt*Dt;J.projectionMatrix.makePerspective(P,S,W,ee,Dt,Rt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function _e(J,ge){ge===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ge.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ge=J.near,de=J.far;M.texture!==null&&(M.depthNear>0&&(ge=M.depthNear),M.depthFar>0&&(de=M.depthFar)),L.near=A.near=B.near=ge,L.far=A.far=B.far=de,(Y!==L.near||X!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),Y=L.near,X=L.far),L.layers.mask=J.layers.mask|6,B.layers.mask=L.layers.mask&3,A.layers.mask=L.layers.mask&5;const ke=J.parent,ze=L.cameras;_e(L,ke);for(let Ye=0;Ye<ze.length;Ye++)_e(ze[Ye],ke);ze.length===2?me(L,B,A):L.projectionMatrix.copy(B.projectionMatrix),Ie(J,L,ke)};function Ie(J,ge,de){de===null?J.matrix.copy(ge.matrixWorld):(J.matrix.copy(de.matrixWorld),J.matrix.invert(),J.matrix.multiply(ge.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ge.projectionMatrix),J.projectionMatrixInverse.copy(ge.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=xs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(p===null&&g===null))return c},this.setFoveation=function(J){c=J,p!==null&&(p.fixedFoveation=J),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=J)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(L)},this.getCameraTexture=function(J){return x[J]};let qe=null;function pt(J,ge){if(h=ge.getViewerPose(o||a),v=ge,h!==null){const de=h.views;g!==null&&(e.setRenderTargetFramebuffer(b,g.framebuffer),e.setRenderTarget(b));let ke=!1;de.length!==L.cameras.length&&(L.cameras.length=0,ke=!0);for(let rt=0;rt<de.length;rt++){const F=de[rt];let Et=null;if(g!==null)Et=g.getViewport(F);else{const at=f.getViewSubImage(p,F);Et=at.viewport,rt===0&&(e.setRenderTargetTextures(b,at.colorTexture,at.depthStencilTexture),e.setRenderTarget(b))}let Fe=w[rt];Fe===void 0&&(Fe=new Qt,Fe.layers.enable(rt),Fe.viewport=new dt,w[rt]=Fe),Fe.matrix.fromArray(F.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(F.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Et.x,Et.y,Et.width,Et.height),rt===0&&(L.matrix.copy(Fe.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ke===!0&&L.cameras.push(Fe)}const ze=s.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&f){const rt=f.getDepthInformation(de[0]);rt&&rt.isValid&&rt.texture&&M.init(rt,s.renderState)}if(ze&&ze.includes("camera-access")&&(e.state.unbindTexture(),f))for(let rt=0;rt<de.length;rt++){const F=de[rt].camera;if(F){let Et=x[F];Et||(Et=new yh,x[F]=Et);const Fe=f.getCameraImage(F);Et.sourceTexture=Fe}}}for(let de=0;de<E.length;de++){const ke=I[de],ze=E[de];ke!==null&&ze!==void 0&&ze.update(ke,ge,o||a)}qe&&qe(J,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),v=null}const ct=new gh;ct.setAnimationLoop(pt),this.setAnimationLoop=function(J){qe=J},this.dispose=function(){}}}const Ri=new yn,J0=new et;function Q0(r,e){function t(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function n(x,m){m.color.getRGB(x.fogColor.value,th(r)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,R,b,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(x,m):m.isMeshToonMaterial?(i(x,m),f(x,m)):m.isMeshPhongMaterial?(i(x,m),h(x,m)):m.isMeshStandardMaterial?(i(x,m),p(x,m),m.isMeshPhysicalMaterial&&g(x,m,E)):m.isMeshMatcapMaterial?(i(x,m),v(x,m)):m.isMeshDepthMaterial?i(x,m):m.isMeshDistanceMaterial?(i(x,m),M(x,m)):m.isMeshNormalMaterial?i(x,m):m.isLineBasicMaterial?(a(x,m),m.isLineDashedMaterial&&l(x,m)):m.isPointsMaterial?c(x,m,R,b):m.isSpriteMaterial?o(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,t(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===an&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,t(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===an&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,t(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,t(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);const R=e.get(m),b=R.envMap,E=R.envMapRotation;b&&(x.envMap.value=b,Ri.copy(E),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),x.envMapRotation.value.setFromMatrix4(J0.makeRotationFromEuler(Ri)),x.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,x.aoMapTransform))}function a(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform))}function l(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function c(x,m,R,b){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*R,x.scale.value=b*.5,m.map&&(x.map.value=m.map,t(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function o(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function f(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function p(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function g(x,m,R){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===an&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=R.texture,x.transmissionSamplerSize.value.set(R.width,R.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,x.specularIntensityMapTransform))}function v(x,m){m.matcap&&(x.matcap.value=m.matcap)}function M(x,m){const R=e.get(m).light;x.referencePosition.value.setFromMatrixPosition(R.matrixWorld),x.nearDistance.value=R.shadow.camera.near,x.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ex(r,e,t,n){let s={},i={},a=[];const l=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,b){const E=b.program;n.uniformBlockBinding(R,E)}function o(R,b){let E=s[R.id];E===void 0&&(v(R),E=h(R),s[R.id]=E,R.addEventListener("dispose",x));const I=b.program;n.updateUBOMapping(R,I);const D=e.render.frame;i[R.id]!==D&&(p(R),i[R.id]=D)}function h(R){const b=f();R.__bindingPointIndex=b;const E=r.createBuffer(),I=R.__size,D=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,I,D),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,E),E}function f(){for(let R=0;R<l;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(R){const b=s[R.id],E=R.uniforms,I=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let D=0,N=E.length;D<N;D++){const B=Array.isArray(E[D])?E[D]:[E[D]];for(let A=0,w=B.length;A<w;A++){const L=B[A];if(g(L,D,A,I)===!0){const Y=L.__offset,X=Array.isArray(L.value)?L.value:[L.value];let V=0;for(let ne=0;ne<X.length;ne++){const K=X[ne],oe=M(K);typeof K=="number"||typeof K=="boolean"?(L.__data[0]=K,r.bufferSubData(r.UNIFORM_BUFFER,Y+V,L.__data)):K.isMatrix3?(L.__data[0]=K.elements[0],L.__data[1]=K.elements[1],L.__data[2]=K.elements[2],L.__data[3]=0,L.__data[4]=K.elements[3],L.__data[5]=K.elements[4],L.__data[6]=K.elements[5],L.__data[7]=0,L.__data[8]=K.elements[6],L.__data[9]=K.elements[7],L.__data[10]=K.elements[8],L.__data[11]=0):(K.toArray(L.__data,V),V+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function g(R,b,E,I){const D=R.value,N=b+"_"+E;if(I[N]===void 0)return typeof D=="number"||typeof D=="boolean"?I[N]=D:I[N]=D.clone(),!0;{const B=I[N];if(typeof D=="number"||typeof D=="boolean"){if(B!==D)return I[N]=D,!0}else if(B.equals(D)===!1)return B.copy(D),!0}return!1}function v(R){const b=R.uniforms;let E=0;const I=16;for(let N=0,B=b.length;N<B;N++){const A=Array.isArray(b[N])?b[N]:[b[N]];for(let w=0,L=A.length;w<L;w++){const Y=A[w],X=Array.isArray(Y.value)?Y.value:[Y.value];for(let V=0,ne=X.length;V<ne;V++){const K=X[V],oe=M(K),j=E%I,me=j%oe.boundary,_e=j+me;E+=me,_e!==0&&I-_e<oe.storage&&(E+=I-_e),Y.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=E,E+=oe.storage}}}const D=E%I;return D>0&&(E+=I-D),R.__size=E,R.__cache={},this}function M(R){const b={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(b.boundary=4,b.storage=4):R.isVector2?(b.boundary=8,b.storage=8):R.isVector3||R.isColor?(b.boundary=16,b.storage=12):R.isVector4?(b.boundary=16,b.storage=16):R.isMatrix3?(b.boundary=48,b.storage=48):R.isMatrix4?(b.boundary=64,b.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),b}function x(R){const b=R.target;b.removeEventListener("dispose",x);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),r.deleteBuffer(s[b.id]),delete s[b.id],delete i[b.id]}function m(){for(const R in s)r.deleteBuffer(s[R]);a=[],s={},i={}}return{bind:c,update:o,dispose:m}}class Su{constructor(e={}){const{canvas:t=Zf(),context:n=null,depth:s=!0,stencil:i=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:o=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const v=new Uint32Array(4),M=new Int32Array(4);let x=null,m=null;const R=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let I=!1;this._outputColorSpace=Wt;let D=0,N=0,B=null,A=-1,w=null;const L=new dt,Y=new dt;let X=null;const V=new Ve(0);let ne=0,K=t.width,oe=t.height,j=1,me=null,_e=null;const Ie=new dt(0,0,K,oe),qe=new dt(0,0,K,oe);let pt=!1;const ct=new yl;let J=!1,ge=!1;const de=new et,ke=new O,ze=new dt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function rt(){return B===null?j:1}let F=n;function Et(T,z){return t.getContext(T,z)}try{const T={alpha:!0,depth:s,stencil:i,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:o,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ll}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",ae,!1),F===null){const z="webgl2";if(F=Et(z,T),F===null)throw Et(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Fe,at,Ne,mt,Te,Ze,Dt,Rt,P,S,W,ee,se,Z,Ue,fe,Pe,Le,ce,ye,Ge,De,xe,je;function k(){Fe=new h_(F),Fe.init(),De=new q0(F,Fe),at=new s_(F,Fe,e,De),Ne=new X0(F,Fe),at.reversedDepthBuffer&&p&&Ne.buffers.depth.setReversed(!0),mt=new p_(F),Te=new I0,Ze=new $0(F,Fe,Ne,Te,at,De,mt),Dt=new a_(E),Rt=new u_(E),P=new Mp(F),xe=new n_(F,P),S=new f_(F,P,mt,xe),W=new g_(F,S,P,mt),ce=new m_(F,at,Ze),fe=new r_(Te),ee=new L0(E,Dt,Rt,Fe,at,xe,fe),se=new Q0(E,Te),Z=new U0,Ue=new z0(Fe),Le=new t_(E,Dt,Rt,Ne,W,g,c),Pe=new G0(E,W,at),je=new ex(F,mt,at,Ne),ye=new i_(F,Fe,mt),Ge=new d_(F,Fe,mt),mt.programs=ee.programs,E.capabilities=at,E.extensions=Fe,E.properties=Te,E.renderLists=Z,E.shadowMap=Pe,E.state=Ne,E.info=mt}k();const ue=new Z0(E,F);this.xr=ue,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=Fe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Fe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(T){T!==void 0&&(j=T,this.setSize(K,oe,!1))},this.getSize=function(T){return T.set(K,oe)},this.setSize=function(T,z,$=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=T,oe=z,t.width=Math.floor(T*j),t.height=Math.floor(z*j),$===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(K*j,oe*j).floor()},this.setDrawingBufferSize=function(T,z,$){K=T,oe=z,j=$,t.width=Math.floor(T*$),t.height=Math.floor(z*$),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(Ie)},this.setViewport=function(T,z,$,q){T.isVector4?Ie.set(T.x,T.y,T.z,T.w):Ie.set(T,z,$,q),Ne.viewport(L.copy(Ie).multiplyScalar(j).round())},this.getScissor=function(T){return T.copy(qe)},this.setScissor=function(T,z,$,q){T.isVector4?qe.set(T.x,T.y,T.z,T.w):qe.set(T,z,$,q),Ne.scissor(Y.copy(qe).multiplyScalar(j).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(T){Ne.setScissorTest(pt=T)},this.setOpaqueSort=function(T){me=T},this.setTransparentSort=function(T){_e=T},this.getClearColor=function(T){return T.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,$=!0){let q=0;if(T){let H=!1;if(B!==null){const le=B.texture.format;H=le===gl||le===ml||le===pl}if(H){const le=B.texture.type,Se=le===Nn||le===Oi||le===Zs||le===Js||le===hl||le===fl,we=Le.getClearColor(),be=Le.getClearAlpha(),He=we.r,We=we.g,Oe=we.b;Se?(v[0]=He,v[1]=We,v[2]=Oe,v[3]=be,F.clearBufferuiv(F.COLOR,0,v)):(M[0]=He,M[1]=We,M[2]=Oe,M[3]=be,F.clearBufferiv(F.COLOR,0,M))}else q|=F.COLOR_BUFFER_BIT}z&&(q|=F.DEPTH_BUFFER_BIT),$&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Le.dispose(),Z.dispose(),Ue.dispose(),Te.dispose(),Dt.dispose(),Rt.dispose(),W.dispose(),xe.dispose(),je.dispose(),ee.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",fn),ue.removeEventListener("sessionend",lr),zn.stop()};function pe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const T=mt.autoReset,z=Pe.enabled,$=Pe.autoUpdate,q=Pe.needsUpdate,H=Pe.type;k(),mt.autoReset=T,Pe.enabled=z,Pe.autoUpdate=$,Pe.needsUpdate=q,Pe.type=H}function ae(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function te(T){const z=T.target;z.removeEventListener("dispose",te),Ce(z)}function Ce(T){$e(T),Te.remove(T)}function $e(T){const z=Te.get(T).programs;z!==void 0&&(z.forEach(function($){ee.releaseProgram($)}),T.isShaderMaterial&&ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,$,q,H,le){z===null&&(z=Ye);const Se=H.isMesh&&H.matrixWorld.determinant()<0,we=ma(T,z,$,q,H);Ne.setMaterial(q,Se);let be=$.index,He=1;if(q.wireframe===!0){if(be=S.getWireframeAttribute($),be===void 0)return;He=2}const We=$.drawRange,Oe=$.attributes.position;let nt=We.start*He,ft=(We.start+We.count)*He;le!==null&&(nt=Math.max(nt,le.start*He),ft=Math.min(ft,(le.start+le.count)*He)),be!==null?(nt=Math.max(nt,0),ft=Math.min(ft,be.count)):Oe!=null&&(nt=Math.max(nt,0),ft=Math.min(ft,Oe.count));const Ct=ft-nt;if(Ct<0||Ct===1/0)return;xe.setup(H,q,we,$,be);let bt,gt=ye;if(be!==null&&(bt=P.get(be),gt=Ge,gt.setIndex(bt)),H.isMesh)q.wireframe===!0?(Ne.setLineWidth(q.wireframeLinewidth*rt()),gt.setMode(F.LINES)):gt.setMode(F.TRIANGLES);else if(H.isLine){let Be=q.linewidth;Be===void 0&&(Be=1),Ne.setLineWidth(Be*rt()),H.isLineSegments?gt.setMode(F.LINES):H.isLineLoop?gt.setMode(F.LINE_LOOP):gt.setMode(F.LINE_STRIP)}else H.isPoints?gt.setMode(F.POINTS):H.isSprite&&gt.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)fs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))gt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Be=H._multiDrawStarts,wt=H._multiDrawCounts,ot=H._multiDrawCount,Kt=be?P.get(be).bytesPerElement:1,ti=Te.get(q).currentProgram.getUniforms();for(let Xt=0;Xt<ot;Xt++)ti.setValue(F,"_gl_DrawID",Xt),gt.render(Be[Xt]/Kt,wt[Xt])}else if(H.isInstancedMesh)gt.renderInstances(nt,Ct,H.count);else if($.isInstancedBufferGeometry){const Be=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,wt=Math.min($.instanceCount,Be);gt.renderInstances(nt,Ct,wt)}else gt.render(nt,Ct)};function vt(T,z,$){T.transparent===!0&&T.side===wn&&T.forceSinglePass===!1?(T.side=an,T.needsUpdate=!0,Hi(T,z,$),T.side=Ln,T.needsUpdate=!0,Hi(T,z,$),T.side=wn):Hi(T,z,$)}this.compile=function(T,z,$=null){$===null&&($=T),m=Ue.get($),m.init(z),b.push(m),$.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),T!==$&&T.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const q=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const le=H.material;if(le)if(Array.isArray(le))for(let Se=0;Se<le.length;Se++){const we=le[Se];vt(we,$,H),q.add(we)}else vt(le,$,H),q.add(le)}),m=b.pop(),q},this.compileAsync=function(T,z,$=null){const q=this.compile(T,z,$);return new Promise(H=>{function le(){if(q.forEach(function(Se){Te.get(Se).currentProgram.isReady()&&q.delete(Se)}),q.size===0){H(T);return}setTimeout(le,10)}Fe.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let ut=null;function Sn(T){ut&&ut(T)}function fn(){zn.stop()}function lr(){zn.start()}const zn=new gh;zn.setAnimationLoop(Sn),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(T){ut=T,ue.setAnimationLoop(T),T===null?zn.stop():zn.start()},ue.addEventListener("sessionstart",fn),ue.addEventListener("sessionend",lr),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(z),z=ue.getCamera()),T.isScene===!0&&T.onBeforeRender(E,T,z,B),m=Ue.get(T,b.length),m.init(z),b.push(m),de.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ct.setFromProjectionMatrix(de,Un,z.reversedDepth),ge=this.localClippingEnabled,J=fe.init(this.clippingPlanes,ge),x=Z.get(T,R.length),x.init(),R.push(x),ue.enabled===!0&&ue.isPresenting===!0){const le=E.xr.getDepthSensingMesh();le!==null&&ws(le,z,-1/0,E.sortObjects)}ws(T,z,0,E.sortObjects),x.finish(),E.sortObjects===!0&&x.sort(me,_e),Pt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Pt&&Le.addToRenderList(x,T),this.info.render.frame++,J===!0&&fe.beginShadows();const $=m.state.shadowsArray;Pe.render($,T,z),J===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=x.opaque,H=x.transmissive;if(m.setupLights(),z.isArrayCamera){const le=z.cameras;if(H.length>0)for(let Se=0,we=le.length;Se<we;Se++){const be=le[Se];Cs(q,H,T,be)}Pt&&Le.render(T);for(let Se=0,we=le.length;Se<we;Se++){const be=le[Se];Rs(x,T,be,be.viewport)}}else H.length>0&&Cs(q,H,T,z),Pt&&Le.render(T),Rs(x,T,z);B!==null&&N===0&&(Ze.updateMultisampleRenderTarget(B),Ze.updateRenderTargetMipmap(B)),T.isScene===!0&&T.onAfterRender(E,T,z),xe.resetDefaultState(),A=-1,w=null,b.pop(),b.length>0?(m=b[b.length-1],J===!0&&fe.setGlobalState(E.clippingPlanes,m.state.camera)):m=null,R.pop(),R.length>0?x=R[R.length-1]:x=null};function ws(T,z,$,q){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ct.intersectsSprite(T)){q&&ze.setFromMatrixPosition(T.matrixWorld).applyMatrix4(de);const Se=W.update(T),we=T.material;we.visible&&x.push(T,Se,we,$,ze.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ct.intersectsObject(T))){const Se=W.update(T),we=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ze.copy(T.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ze.copy(Se.boundingSphere.center)),ze.applyMatrix4(T.matrixWorld).applyMatrix4(de)),Array.isArray(we)){const be=Se.groups;for(let He=0,We=be.length;He<We;He++){const Oe=be[He],nt=we[Oe.materialIndex];nt&&nt.visible&&x.push(T,Se,nt,$,ze.z,Oe)}}else we.visible&&x.push(T,Se,we,$,ze.z,null)}}const le=T.children;for(let Se=0,we=le.length;Se<we;Se++)ws(le[Se],z,$,q)}function Rs(T,z,$,q){const H=T.opaque,le=T.transmissive,Se=T.transparent;m.setupLightsView($),J===!0&&fe.setGlobalState(E.clippingPlanes,$),q&&Ne.viewport(L.copy(q)),H.length>0&&zi(H,z,$),le.length>0&&zi(le,z,$),Se.length>0&&zi(Se,z,$),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Cs(T,z,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new Bi(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?rr:Nn,minFilter:Jn,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const le=m.state.transmissionRenderTarget[q.id],Se=q.viewport||L;le.setSize(Se.z*E.transmissionResolutionScale,Se.w*E.transmissionResolutionScale);const we=E.getRenderTarget(),be=E.getActiveCubeFace(),He=E.getActiveMipmapLevel();E.setRenderTarget(le),E.getClearColor(V),ne=E.getClearAlpha(),ne<1&&E.setClearColor(16777215,.5),E.clear(),Pt&&Le.render($);const We=E.toneMapping;E.toneMapping=pi;const Oe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),J===!0&&fe.setGlobalState(E.clippingPlanes,q),zi(T,$,q),Ze.updateMultisampleRenderTarget(le),Ze.updateRenderTargetMipmap(le),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let ft=0,Ct=z.length;ft<Ct;ft++){const bt=z[ft],gt=bt.object,Be=bt.geometry,wt=bt.material,ot=bt.group;if(wt.side===wn&&gt.layers.test(q.layers)){const Kt=wt.side;wt.side=an,wt.needsUpdate=!0,cr(gt,$,q,Be,wt,ot),wt.side=Kt,wt.needsUpdate=!0,nt=!0}}nt===!0&&(Ze.updateMultisampleRenderTarget(le),Ze.updateRenderTargetMipmap(le))}E.setRenderTarget(we,be,He),E.setClearColor(V,ne),Oe!==void 0&&(q.viewport=Oe),E.toneMapping=We}function zi(T,z,$){const q=z.isScene===!0?z.overrideMaterial:null;for(let H=0,le=T.length;H<le;H++){const Se=T[H],we=Se.object,be=Se.geometry,He=Se.group;let We=Se.material;We.allowOverride===!0&&q!==null&&(We=q),we.layers.test($.layers)&&cr(we,z,$,be,We,He)}}function cr(T,z,$,q,H,le){T.onBeforeRender(E,z,$,q,H,le),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(E,z,$,q,T,le),H.transparent===!0&&H.side===wn&&H.forceSinglePass===!1?(H.side=an,H.needsUpdate=!0,E.renderBufferDirect($,z,q,H,T,le),H.side=Ln,H.needsUpdate=!0,E.renderBufferDirect($,z,q,H,T,le),H.side=wn):E.renderBufferDirect($,z,q,H,T,le),T.onAfterRender(E,z,$,q,H,le)}function Hi(T,z,$){z.isScene!==!0&&(z=Ye);const q=Te.get(T),H=m.state.lights,le=m.state.shadowsArray,Se=H.state.version,we=ee.getParameters(T,H.state,le,z,$),be=ee.getProgramCacheKey(we);let He=q.programs;q.environment=T.isMeshStandardMaterial?z.environment:null,q.fog=z.fog,q.envMap=(T.isMeshStandardMaterial?Rt:Dt).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,He===void 0&&(T.addEventListener("dispose",te),He=new Map,q.programs=He);let We=He.get(be);if(We!==void 0){if(q.currentProgram===We&&q.lightsStateVersion===Se)return hr(T,we),We}else we.uniforms=ee.getUniforms(T),T.onBeforeCompile(we,E),We=ee.acquireProgram(we,be),He.set(be,We),q.uniforms=we.uniforms;const Oe=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Oe.clippingPlanes=fe.uniform),hr(T,we),q.needsLights=_a(T),q.lightsStateVersion=Se,q.needsLights&&(Oe.ambientLightColor.value=H.state.ambient,Oe.lightProbe.value=H.state.probe,Oe.directionalLights.value=H.state.directional,Oe.directionalLightShadows.value=H.state.directionalShadow,Oe.spotLights.value=H.state.spot,Oe.spotLightShadows.value=H.state.spotShadow,Oe.rectAreaLights.value=H.state.rectArea,Oe.ltc_1.value=H.state.rectAreaLTC1,Oe.ltc_2.value=H.state.rectAreaLTC2,Oe.pointLights.value=H.state.point,Oe.pointLightShadows.value=H.state.pointShadow,Oe.hemisphereLights.value=H.state.hemi,Oe.directionalShadowMap.value=H.state.directionalShadowMap,Oe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Oe.spotShadowMap.value=H.state.spotShadowMap,Oe.spotLightMatrix.value=H.state.spotLightMatrix,Oe.spotLightMap.value=H.state.spotLightMap,Oe.pointShadowMap.value=H.state.pointShadowMap,Oe.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=We,q.uniformsList=null,We}function ur(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=ia.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function hr(T,z){const $=Te.get(T);$.outputColorSpace=z.outputColorSpace,$.batching=z.batching,$.batchingColor=z.batchingColor,$.instancing=z.instancing,$.instancingColor=z.instancingColor,$.instancingMorph=z.instancingMorph,$.skinning=z.skinning,$.morphTargets=z.morphTargets,$.morphNormals=z.morphNormals,$.morphColors=z.morphColors,$.morphTargetsCount=z.morphTargetsCount,$.numClippingPlanes=z.numClippingPlanes,$.numIntersection=z.numClipIntersection,$.vertexAlphas=z.vertexAlphas,$.vertexTangents=z.vertexTangents,$.toneMapping=z.toneMapping}function ma(T,z,$,q,H){z.isScene!==!0&&(z=Ye),Ze.resetTextureUnits();const le=z.fog,Se=q.isMeshStandardMaterial?z.environment:null,we=B===null?E.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:nn,be=(q.isMeshStandardMaterial?Rt:Dt).get(q.envMap||Se),He=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,We=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Oe=!!$.morphAttributes.position,nt=!!$.morphAttributes.normal,ft=!!$.morphAttributes.color;let Ct=pi;q.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ct=E.toneMapping);const bt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,gt=bt!==void 0?bt.length:0,Be=Te.get(q),wt=m.state.lights;if(J===!0&&(ge===!0||T!==w)){const d=T===w&&q.id===A;fe.setState(q,T,d)}let ot=!1;q.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==wt.state.version||Be.outputColorSpace!==we||H.isBatchedMesh&&Be.batching===!1||!H.isBatchedMesh&&Be.batching===!0||H.isBatchedMesh&&Be.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Be.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Be.instancing===!1||!H.isInstancedMesh&&Be.instancing===!0||H.isSkinnedMesh&&Be.skinning===!1||!H.isSkinnedMesh&&Be.skinning===!0||H.isInstancedMesh&&Be.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Be.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Be.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Be.instancingMorph===!1&&H.morphTexture!==null||Be.envMap!==be||q.fog===!0&&Be.fog!==le||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==fe.numPlanes||Be.numIntersection!==fe.numIntersection)||Be.vertexAlphas!==He||Be.vertexTangents!==We||Be.morphTargets!==Oe||Be.morphNormals!==nt||Be.morphColors!==ft||Be.toneMapping!==Ct||Be.morphTargetsCount!==gt)&&(ot=!0):(ot=!0,Be.__version=q.version);let Kt=Be.currentProgram;ot===!0&&(Kt=Hi(q,z,H));let ti=!1,Xt=!1,_i=!1;const At=Kt.getUniforms(),jt=Be.uniforms;if(Ne.useProgram(Kt.program)&&(ti=!0,Xt=!0,_i=!0),q.id!==A&&(A=q.id,Xt=!0),ti||w!==T){Ne.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),At.setValue(F,"projectionMatrix",T.projectionMatrix),At.setValue(F,"viewMatrix",T.matrixWorldInverse);const ve=At.map.cameraPosition;ve!==void 0&&ve.setValue(F,ke.setFromMatrixPosition(T.matrixWorld)),at.logarithmicDepthBuffer&&At.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&At.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,Xt=!0,_i=!0)}if(H.isSkinnedMesh){At.setOptional(F,H,"bindMatrix"),At.setOptional(F,H,"bindMatrixInverse");const d=H.skeleton;d&&(d.boneTexture===null&&d.computeBoneTexture(),At.setValue(F,"boneTexture",d.boneTexture,Ze))}H.isBatchedMesh&&(At.setOptional(F,H,"batchingTexture"),At.setValue(F,"batchingTexture",H._matricesTexture,Ze),At.setOptional(F,H,"batchingIdTexture"),At.setValue(F,"batchingIdTexture",H._indirectTexture,Ze),At.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&At.setValue(F,"batchingColorTexture",H._colorsTexture,Ze));const rn=$.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&ce.update(H,$,Kt),(Xt||Be.receiveShadow!==H.receiveShadow)&&(Be.receiveShadow=H.receiveShadow,At.setValue(F,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(jt.envMap.value=be,jt.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&z.environment!==null&&(jt.envMapIntensity.value=z.environmentIntensity),Xt&&(At.setValue(F,"toneMappingExposure",E.toneMappingExposure),Be.needsLights&&ga(jt,_i),le&&q.fog===!0&&se.refreshFogUniforms(jt,le),se.refreshMaterialUniforms(jt,q,j,oe,m.state.transmissionRenderTarget[T.id]),ia.upload(F,ur(Be),jt,Ze)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ia.upload(F,ur(Be),jt,Ze),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&At.setValue(F,"center",H.center),At.setValue(F,"modelViewMatrix",H.modelViewMatrix),At.setValue(F,"normalMatrix",H.normalMatrix),At.setValue(F,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const d=q.uniformsGroups;for(let ve=0,Hn=d.length;ve<Hn;ve++){const En=d[ve];je.update(En,Kt),je.bind(En,Kt)}}return Kt}function ga(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function _a(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(T,z,$){const q=Te.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Te.get(T.texture).__webglTexture=z,Te.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:$,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){const $=Te.get(T);$.__webglFramebuffer=z,$.__useDefaultFramebuffer=z===void 0};const xa=F.createFramebuffer();this.setRenderTarget=function(T,z=0,$=0){B=T,D=z,N=$;let q=!0,H=null,le=!1,Se=!1;if(T){const be=Te.get(T);if(be.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(F.FRAMEBUFFER,null),q=!1;else if(be.__webglFramebuffer===void 0)Ze.setupRenderTarget(T);else if(be.__hasExternalTextures)Ze.rebindTextures(T,Te.get(T.texture).__webglTexture,Te.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Oe=T.depthTexture;if(be.__boundDepthTexture!==Oe){if(Oe!==null&&Te.has(Oe)&&(T.width!==Oe.image.width||T.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ze.setupDepthRenderbuffer(T)}}const He=T.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Se=!0);const We=Te.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(We[z])?H=We[z][$]:H=We[z],le=!0):T.samples>0&&Ze.useMultisampledRTT(T)===!1?H=Te.get(T).__webglMultisampledFramebuffer:Array.isArray(We)?H=We[$]:H=We,L.copy(T.viewport),Y.copy(T.scissor),X=T.scissorTest}else L.copy(Ie).multiplyScalar(j).floor(),Y.copy(qe).multiplyScalar(j).floor(),X=pt;if($!==0&&(H=xa),Ne.bindFramebuffer(F.FRAMEBUFFER,H)&&q&&Ne.drawBuffers(T,H),Ne.viewport(L),Ne.scissor(Y),Ne.setScissorTest(X),le){const be=Te.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+z,be.__webglTexture,$)}else if(Se){const be=z;for(let He=0;He<T.textures.length;He++){const We=Te.get(T.textures[He]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+He,We.__webglTexture,$,be)}}else if(T!==null&&$!==0){const be=Te.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,be.__webglTexture,$)}A=-1},this.readRenderTargetPixels=function(T,z,$,q,H,le,Se,we=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be){Ne.bindFramebuffer(F.FRAMEBUFFER,be);try{const He=T.textures[we],We=He.format,Oe=He.type;if(!at.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-q&&$>=0&&$<=T.height-H&&(T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+we),F.readPixels(z,$,q,H,De.convert(We),De.convert(Oe),le))}finally{const He=B!==null?Te.get(B).__webglFramebuffer:null;Ne.bindFramebuffer(F.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(T,z,$,q,H,le,Se,we=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be)if(z>=0&&z<=T.width-q&&$>=0&&$<=T.height-H){Ne.bindFramebuffer(F.FRAMEBUFFER,be);const He=T.textures[we],We=He.format,Oe=He.type;if(!at.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,nt),F.bufferData(F.PIXEL_PACK_BUFFER,le.byteLength,F.STREAM_READ),T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+we),F.readPixels(z,$,q,H,De.convert(We),De.convert(Oe),0);const ft=B!==null?Te.get(B).__webglFramebuffer:null;Ne.bindFramebuffer(F.FRAMEBUFFER,ft);const Ct=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Jf(F,Ct,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,nt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,le),F.deleteBuffer(nt),F.deleteSync(Ct),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,$=0){const q=Math.pow(2,-$),H=Math.floor(T.image.width*q),le=Math.floor(T.image.height*q),Se=z!==null?z.x:0,we=z!==null?z.y:0;Ze.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,Se,we,H,le),Ne.unbindTexture()};const va=F.createFramebuffer(),Ma=F.createFramebuffer();this.copyTextureToTexture=function(T,z,$=null,q=null,H=0,le=null){le===null&&(H!==0?(fs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=H,H=0):le=0);let Se,we,be,He,We,Oe,nt,ft,Ct;const bt=T.isCompressedTexture?T.mipmaps[le]:T.image;if($!==null)Se=$.max.x-$.min.x,we=$.max.y-$.min.y,be=$.isBox3?$.max.z-$.min.z:1,He=$.min.x,We=$.min.y,Oe=$.isBox3?$.min.z:0;else{const rn=Math.pow(2,-H);Se=Math.floor(bt.width*rn),we=Math.floor(bt.height*rn),T.isDataArrayTexture?be=bt.depth:T.isData3DTexture?be=Math.floor(bt.depth*rn):be=1,He=0,We=0,Oe=0}q!==null?(nt=q.x,ft=q.y,Ct=q.z):(nt=0,ft=0,Ct=0);const gt=De.convert(z.format),Be=De.convert(z.type);let wt;z.isData3DTexture?(Ze.setTexture3D(z,0),wt=F.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Ze.setTexture2DArray(z,0),wt=F.TEXTURE_2D_ARRAY):(Ze.setTexture2D(z,0),wt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment);const ot=F.getParameter(F.UNPACK_ROW_LENGTH),Kt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ti=F.getParameter(F.UNPACK_SKIP_PIXELS),Xt=F.getParameter(F.UNPACK_SKIP_ROWS),_i=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,bt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,bt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,He),F.pixelStorei(F.UNPACK_SKIP_ROWS,We),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Oe);const At=T.isDataArrayTexture||T.isData3DTexture,jt=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){const rn=Te.get(T),d=Te.get(z),ve=Te.get(rn.__renderTarget),Hn=Te.get(d.__renderTarget);Ne.bindFramebuffer(F.READ_FRAMEBUFFER,ve.__webglFramebuffer),Ne.bindFramebuffer(F.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let En=0;En<be;En++)At&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Te.get(T).__webglTexture,H,Oe+En),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Te.get(z).__webglTexture,le,Ct+En)),F.blitFramebuffer(He,We,Se,we,nt,ft,Se,we,F.DEPTH_BUFFER_BIT,F.NEAREST);Ne.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||Te.has(T)){const rn=Te.get(T),d=Te.get(z);Ne.bindFramebuffer(F.READ_FRAMEBUFFER,va),Ne.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ma);for(let ve=0;ve<be;ve++)At?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,rn.__webglTexture,H,Oe+ve):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,rn.__webglTexture,H),jt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,d.__webglTexture,le,Ct+ve):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,d.__webglTexture,le),H!==0?F.blitFramebuffer(He,We,Se,we,nt,ft,Se,we,F.COLOR_BUFFER_BIT,F.NEAREST):jt?F.copyTexSubImage3D(wt,le,nt,ft,Ct+ve,He,We,Se,we):F.copyTexSubImage2D(wt,le,nt,ft,He,We,Se,we);Ne.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else jt?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(wt,le,nt,ft,Ct,Se,we,be,gt,Be,bt.data):z.isCompressedArrayTexture?F.compressedTexSubImage3D(wt,le,nt,ft,Ct,Se,we,be,gt,bt.data):F.texSubImage3D(wt,le,nt,ft,Ct,Se,we,be,gt,Be,bt):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,le,nt,ft,Se,we,gt,Be,bt.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,le,nt,ft,bt.width,bt.height,gt,bt.data):F.texSubImage2D(F.TEXTURE_2D,le,nt,ft,Se,we,gt,Be,bt);F.pixelStorei(F.UNPACK_ROW_LENGTH,ot),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Kt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ti),F.pixelStorei(F.UNPACK_SKIP_ROWS,Xt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,_i),le===0&&z.generateMipmaps&&F.generateMipmap(wt),Ne.unbindTexture()},this.copyTextureToTexture3D=function(T,z,$=null,q=null,H=0){return fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,z,$,q,H)},this.initRenderTarget=function(T){Te.get(T).__webglFramebuffer===void 0&&Ze.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ze.setTextureCube(T,0):T.isData3DTexture?Ze.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ze.setTexture2DArray(T,0):Ze.setTexture2D(T,0),Ne.unbindTexture()},this.resetState=function(){D=0,N=0,B=null,Ne.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}function Eu(r,e){if(e===Tf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===tl||e===qu){let t=r.getIndex();if(t===null){const a=[],l=r.getAttribute("position");if(l!==void 0){for(let c=0;c<l.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,s=[];if(e===tl)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const i=r.clone();return i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class tx extends ki{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ax(t)}),this.register(function(t){return new ox(t)}),this.register(function(t){return new gx(t)}),this.register(function(t){return new _x(t)}),this.register(function(t){return new xx(t)}),this.register(function(t){return new cx(t)}),this.register(function(t){return new ux(t)}),this.register(function(t){return new hx(t)}),this.register(function(t){return new fx(t)}),this.register(function(t){return new rx(t)}),this.register(function(t){return new dx(t)}),this.register(function(t){return new lx(t)}),this.register(function(t){return new mx(t)}),this.register(function(t){return new px(t)}),this.register(function(t){return new ix(t)}),this.register(function(t){return new vx(t)}),this.register(function(t){return new Mx(t)})}load(e,t,n,s){const i=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const o=js.extractUrlBase(e);a=js.resolveURL(o,this.path)}else a=js.extractUrlBase(e);this.manager.itemStart(e);const l=function(o){s?s(o):console.error(o),i.manager.itemError(e),i.manager.itemEnd(e)},c=new Rl(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(o){try{i.parse(o,a,function(h){t(h),i.manager.itemEnd(e)},l)}catch(h){l(h)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let i;const a={},l={},c=new TextDecoder;if(typeof e=="string")i=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Sh){try{a[st.KHR_BINARY_GLTF]=new yx(e)}catch(f){s&&s(f);return}i=JSON.parse(a[st.KHR_BINARY_GLTF].content)}else i=JSON.parse(c.decode(e));else i=e;if(i.asset===void 0||i.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const o=new Ux(i,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});o.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const f=this.pluginCallbacks[h](o);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[f.name]=f,a[f.name]=!0}if(i.extensionsUsed)for(let h=0;h<i.extensionsUsed.length;++h){const f=i.extensionsUsed[h],p=i.extensionsRequired||[];switch(f){case st.KHR_MATERIALS_UNLIT:a[f]=new sx;break;case st.KHR_DRACO_MESH_COMPRESSION:a[f]=new Sx(i,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:a[f]=new Ex;break;case st.KHR_MESH_QUANTIZATION:a[f]=new Tx;break;default:p.indexOf(f)>=0&&l[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}o.setExtensions(a),o.setPlugins(l),o.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,i){n.parse(e,t,s,i)})}}function nx(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ix{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const i=t[n];i.extensions&&i.extensions[this.name]&&i.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,i.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const i=t.json,c=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e];let o;const h=new Ve(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],nn);const f=c.range!==void 0?c.range:0;switch(c.type){case"directional":o=new ep(h),o.target.position.set(0,0,-1),o.add(o.target);break;case"point":o=new ph(h),o.distance=f;break;case"spot":o=new Zd(h),o.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,o.angle=c.spot.outerConeAngle,o.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return o.position.set(0,0,0),Kn(o,c),c.intensity!==void 0&&(o.intensity=c.intensity),o.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(o),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,i=n.json.nodes[e],l=(i.extensions&&i.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(c){return n._getNodeRef(t.cache,l,c)})}}class sx{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return fi}extendParams(e,t,n){const s=[];e.color=new Ve(1,1,1),e.opacity=1;const i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){const a=i.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],nn),e.opacity=a[3]}i.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",i.baseColorTexture,Wt))}return Promise.all(s)}}class rx{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=s.extensions[this.name].emissiveStrength;return i!==void 0&&(t.emissiveIntensity=i),Promise.resolve()}}class ax{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&i.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&i.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(i.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const l=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ke(l,l)}return Promise.all(i)}}class ox{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=s.extensions[this.name];return t.dispersion=i.dispersion!==void 0?i.dispersion:0,Promise.resolve()}}class lx{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&i.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&i.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(i)}}class cx{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[];t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const l=a.sheenColorFactor;t.sheenColor.setRGB(l[0],l[1],l[2],nn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&i.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Wt)),a.sheenRoughnessTexture!==void 0&&i.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(i)}}class ux{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&i.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(i)}}class hx{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&i.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const l=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(l[0],l[1],l[2],nn),Promise.all(i)}}class fx{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=s.extensions[this.name];return t.ior=i.ior!==void 0?i.ior:1.5,Promise.resolve()}}class dx{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&i.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const l=a.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(l[0],l[1],l[2],nn),a.specularColorTexture!==void 0&&i.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Wt)),Promise.all(i)}}class px{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&i.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(i)}}class mx{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&i.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(i)}}class gx{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const i=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,i.source,a)}}class _x{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,i=s.textures[e];if(!i.extensions||!i.extensions[t])return null;const a=i.extensions[t],l=s.images[a.source];let c=n.textureLoader;if(l.uri){const o=n.options.manager.getHandler(l.uri);o!==null&&(c=o)}return n.loadTextureImage(e,a.source,c)}}class xx{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,i=s.textures[e];if(!i.extensions||!i.extensions[t])return null;const a=i.extensions[t],l=s.images[a.source];let c=n.textureLoader;if(l.uri){const o=n.options.manager.getHandler(l.uri);o!==null&&(c=o)}return n.loadTextureImage(e,a.source,c)}}class vx{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],i=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return i.then(function(l){const c=s.byteOffset||0,o=s.byteLength||0,h=s.count,f=s.byteStride,p=new Uint8Array(l,c,o);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,f,p,s.mode,s.filter).then(function(g){return g.buffer}):a.ready.then(function(){const g=new ArrayBuffer(h*f);return a.decodeGltfBuffer(new Uint8Array(g),h,f,p,s.mode,s.filter),g})})}else return null}}class Mx{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const o of s.primitives)if(o.mode!==_n.TRIANGLES&&o.mode!==_n.TRIANGLE_STRIP&&o.mode!==_n.TRIANGLE_FAN&&o.mode!==void 0)return null;const a=n.extensions[this.name].attributes,l=[],c={};for(const o in a)l.push(this.parser.getDependency("accessor",a[o]).then(h=>(c[o]=h,c[o])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(o=>{const h=o.pop(),f=h.isGroup?h.children:[h],p=o[0].count,g=[];for(const v of f){const M=new et,x=new O,m=new Fn,R=new O(1,1,1),b=new Cd(v.geometry,v.material,p);for(let E=0;E<p;E++)c.TRANSLATION&&x.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,E),c.SCALE&&R.fromBufferAttribute(c.SCALE,E),b.setMatrixAt(E,M.compose(x,m,R));for(const E in c)if(E==="_COLOR_0"){const I=c[E];b.instanceColor=new il(I.array,I.itemSize,I.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&v.geometry.setAttribute(E,c[E]);xt.prototype.copy.call(b,v),this.parser.assignFinalMaterial(b),g.push(b)}return h.isGroup?(h.clear(),h.add(...g),h):g[0]}))}}const Sh="glTF",Gs=12,Tu={JSON:1313821514,BIN:5130562};class yx{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Gs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Sh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Gs,i=new DataView(e,Gs);let a=0;for(;a<s;){const l=i.getUint32(a,!0);a+=4;const c=i.getUint32(a,!0);if(a+=4,c===Tu.JSON){const o=new Uint8Array(e,Gs+a,l);this.content=n.decode(o)}else if(c===Tu.BIN){const o=Gs+a;this.body=e.slice(o,o+l)}a+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Sx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,l={},c={},o={};for(const h in a){const f=al[h]||h.toLowerCase();l[f]=a[h]}for(const h in e.attributes){const f=al[h]||h.toLowerCase();if(a[h]!==void 0){const p=n.accessors[e.attributes[h]],g=ps[p.componentType];o[f]=g.name,c[f]=p.normalized===!0}}return t.getDependency("bufferView",i).then(function(h){return new Promise(function(f,p){s.decodeDracoFile(h,function(g){for(const v in g.attributes){const M=g.attributes[v],x=c[v];x!==void 0&&(M.normalized=x)}f(g)},l,o,nn,p)})})}}class Ex{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Tx{constructor(){this.name=st.KHR_MESH_QUANTIZATION}}class Eh extends or{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,i=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[i+a];return t}interpolate_(e,t,n,s){const i=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=l*2,o=l*3,h=s-t,f=(n-t)/h,p=f*f,g=p*f,v=e*o,M=v-o,x=-2*g+3*p,m=g-p,R=1-x,b=m-p+f;for(let E=0;E!==l;E++){const I=a[M+E+l],D=a[M+E+c]*h,N=a[v+E+l],B=a[v+E]*h;i[E]=R*I+b*D+x*N+m*B}return i}}const bx=new Fn;class Ax extends Eh{interpolate_(e,t,n,s){const i=super.interpolate_(e,t,n,s);return bx.fromArray(i).normalize().toArray(i),i}}const _n={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ps={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},bu={9728:tn,9729:hn,9984:ku,9985:jr,9986:$s,9987:Jn},Au={33071:Zn,33648:sa,10497:Fi},uo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},al={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wx={CUBICSPLINE:void 0,LINEAR:nr,STEP:tr},ho={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Rx(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new wl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ln})),r.DefaultMaterial}function Ci(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Kn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Cx(r,e,t){let n=!1,s=!1,i=!1;for(let o=0,h=e.length;o<h;o++){const f=e[o];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(i=!0),n&&s&&i)break}if(!n&&!s&&!i)return Promise.resolve(r);const a=[],l=[],c=[];for(let o=0,h=e.length;o<h;o++){const f=e[o];if(n){const p=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):r.attributes.position;a.push(p)}if(s){const p=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):r.attributes.normal;l.push(p)}if(i){const p=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):r.attributes.color;c.push(p)}}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(o){const h=o[0],f=o[1],p=o[2];return n&&(r.morphAttributes.position=h),s&&(r.morphAttributes.normal=f),i&&(r.morphAttributes.color=p),r.morphTargetsRelative=!0,r})}function Px(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Lx(r){let e;const t=r.extensions&&r.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+fo(t.attributes):e=r.indices+":"+fo(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,s=r.targets.length;n<s;n++)e+=":"+fo(r.targets[n]);return e}function fo(r){let e="";const t=Object.keys(r).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+r[t[n]]+";";return e}function ol(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ix(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Dx=new et;class Ux{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new nx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,i=!1,a=-1;if(typeof navigator<"u"){const l=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(l)===!0;const c=l.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,i=l.indexOf("Firefox")>-1,a=i?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||i&&a<98?this.textureLoader=new ca(this.options.manager):this.textureLoader=new tp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Rl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const l={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ci(i,l,s),Kn(l,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(l)})).then(function(){for(const c of l.scenes)c.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,i=t.length;s<i;s++){const a=t[s].joints;for(let l=0,c=a.length;l<c;l++)e[a[l]].isBone=!0}for(let s=0,i=e.length;s<i;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),i=(a,l)=>{const c=this.associations.get(a);c!=null&&this.associations.set(l,c);for(const[o,h]of a.children.entries())i(h,l.children[o])};return i(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const i=e(t[s]);i&&n.push(i)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(i){return i.loadNode&&i.loadNode(t)});break;case"mesh":s=this._invokeOne(function(i){return i.loadMesh&&i.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(i){return i.loadBufferView&&i.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(i){return i.loadMaterial&&i.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(i){return i.loadTexture&&i.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(i){return i.loadAnimation&&i.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(i){return i!=this&&i.getDependency&&i.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(i,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(i,a){n.load(js.resolveURL(t.uri,s.path),i,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,i=t.byteOffset||0;return n.slice(i,i+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=uo[s.type],l=ps[s.componentType],c=s.normalized===!0,o=new l(s.count*a);return Promise.resolve(new Yt(o,a,c))}const i=[];return s.bufferView!==void 0?i.push(this.getDependency("bufferView",s.bufferView)):i.push(null),s.sparse!==void 0&&(i.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),i.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(i).then(function(a){const l=a[0],c=uo[s.type],o=ps[s.componentType],h=o.BYTES_PER_ELEMENT,f=h*c,p=s.byteOffset||0,g=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,v=s.normalized===!0;let M,x;if(g&&g!==f){const m=Math.floor(p/g),R="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let b=t.cache.get(R);b||(M=new o(l,m*g,s.count*g/h),b=new sh(M,g/h),t.cache.add(R,b)),x=new sr(b,c,p%g/h,v)}else l===null?M=new o(s.count*c):M=new o(l,p,s.count*c),x=new Yt(M,c,v);if(s.sparse!==void 0){const m=uo.SCALAR,R=ps[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,E=s.sparse.values.byteOffset||0,I=new R(a[1],b,s.sparse.count*m),D=new o(a[2],E,s.sparse.count*c);l!==null&&(x=new Yt(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let N=0,B=I.length;N<B;N++){const A=I[N];if(x.setX(A,D[N*c]),c>=2&&x.setY(A,D[N*c+1]),c>=3&&x.setZ(A,D[N*c+2]),c>=4&&x.setW(A,D[N*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=v}return x})}loadTexture(e){const t=this.json,n=this.options,i=t.textures[e].source,a=t.images[i];let l=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(l=c)}return this.loadTextureImage(e,i,l)}loadTextureImage(e,t,n){const s=this,i=this.json,a=i.textures[e],l=i.images[t],c=(l.uri||l.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const o=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||l.name||"",h.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(h.name=l.uri);const p=(i.samplers||{})[a.sampler]||{};return h.magFilter=bu[p.magFilter]||hn,h.minFilter=bu[p.minFilter]||Jn,h.wrapS=Au[p.wrapS]||Fi,h.wrapT=Au[p.wrapT]||Fi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==tn&&h.minFilter!==hn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=o,o}loadImageSource(e,t){const n=this,s=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=s.images[e],l=self.URL||self.webkitURL;let c=a.uri||"",o=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(f){o=!0;const p=new Blob([f],{type:a.mimeType});return c=l.createObjectURL(p),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(f){return new Promise(function(p,g){let v=p;t.isImageBitmapLoader===!0&&(v=function(M){const x=new kt(M);x.needsUpdate=!0,p(x)}),t.load(js.resolveURL(f,i.path),v,void 0,g)})}).then(function(f){return o===!0&&l.revokeObjectURL(c),Kn(f,a),f.userData.mimeType=a.mimeType||Ix(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const i=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[st.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const c=i.associations.get(a);a=i.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(a,l),i.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+n.uuid;let c=this.cache.get(l);c||(c=new Tl,Mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(l,c)),n=c}else if(e.isLine){const l="LineBasicMaterial:"+n.uuid;let c=this.cache.get(l);c||(c=new Sl,Mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(l,c)),n=c}if(s||i||a){let l="ClonedMaterial:"+n.uuid+":";s&&(l+="derivative-tangents:"),i&&(l+="vertex-colors:"),a&&(l+="flat-shading:");let c=this.cache.get(l);c||(c=n.clone(),i&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(l,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return wl}loadMaterial(e){const t=this,n=this.json,s=this.extensions,i=n.materials[e];let a;const l={},c=i.extensions||{},o=[];if(c[st.KHR_MATERIALS_UNLIT]){const f=s[st.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),o.push(f.extendParams(l,i,t))}else{const f=i.pbrMetallicRoughness||{};if(l.color=new Ve(1,1,1),l.opacity=1,Array.isArray(f.baseColorFactor)){const p=f.baseColorFactor;l.color.setRGB(p[0],p[1],p[2],nn),l.opacity=p[3]}f.baseColorTexture!==void 0&&o.push(t.assignTexture(l,"map",f.baseColorTexture,Wt)),l.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,l.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(o.push(t.assignTexture(l,"metalnessMap",f.metallicRoughnessTexture)),o.push(t.assignTexture(l,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(p){return p.getMaterialType&&p.getMaterialType(e)}),o.push(Promise.all(this._invokeAll(function(p){return p.extendMaterialParams&&p.extendMaterialParams(e,l)})))}i.doubleSided===!0&&(l.side=wn);const h=i.alphaMode||ho.OPAQUE;if(h===ho.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,h===ho.MASK&&(l.alphaTest=i.alphaCutoff!==void 0?i.alphaCutoff:.5)),i.normalTexture!==void 0&&a!==fi&&(o.push(t.assignTexture(l,"normalMap",i.normalTexture)),l.normalScale=new Ke(1,1),i.normalTexture.scale!==void 0)){const f=i.normalTexture.scale;l.normalScale.set(f,f)}if(i.occlusionTexture!==void 0&&a!==fi&&(o.push(t.assignTexture(l,"aoMap",i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==fi){const f=i.emissiveFactor;l.emissive=new Ve().setRGB(f[0],f[1],f[2],nn)}return i.emissiveTexture!==void 0&&a!==fi&&o.push(t.assignTexture(l,"emissiveMap",i.emissiveTexture,Wt)),Promise.all(o).then(function(){const f=new a(l);return i.name&&(f.name=i.name),Kn(f,i),t.associations.set(f,{materials:e}),i.extensions&&Ci(s,f,i),f})}createUniqueName(e){const t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function i(l){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(c){return wu(c,l,t)})}const a=[];for(let l=0,c=e.length;l<c;l++){const o=e[l],h=Lx(o),f=s[h];if(f)a.push(f.promise);else{let p;o.extensions&&o.extensions[st.KHR_DRACO_MESH_COMPRESSION]?p=i(o):p=wu(new sn,o,t),s[h]={primitive:o,promise:p},a.push(p)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,i=n.meshes[e],a=i.primitives,l=[];for(let c=0,o=a.length;c<o;c++){const h=a[c].material===void 0?Rx(this.cache):this.getDependency("material",a[c].material);l.push(h)}return l.push(t.loadGeometries(a)),Promise.all(l).then(function(c){const o=c.slice(0,c.length-1),h=c[c.length-1],f=[];for(let g=0,v=h.length;g<v;g++){const M=h[g],x=a[g];let m;const R=o[g];if(x.mode===_n.TRIANGLES||x.mode===_n.TRIANGLE_STRIP||x.mode===_n.TRIANGLE_FAN||x.mode===void 0)m=i.isSkinnedMesh===!0?new Ad(M,R):new en(M,R),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),x.mode===_n.TRIANGLE_STRIP?m.geometry=Eu(m.geometry,qu):x.mode===_n.TRIANGLE_FAN&&(m.geometry=Eu(m.geometry,tl));else if(x.mode===_n.LINES)m=new ch(M,R);else if(x.mode===_n.LINE_STRIP)m=new El(M,R);else if(x.mode===_n.LINE_LOOP)m=new Dd(M,R);else if(x.mode===_n.POINTS)m=new uh(M,R);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(m.geometry.morphAttributes).length>0&&Px(m,i),m.name=t.createUniqueName(i.name||"mesh_"+e),Kn(m,i),x.extensions&&Ci(s,m,x),t.assignFinalMaterial(m),f.push(m)}for(let g=0,v=f.length;g<v;g++)t.associations.set(f[g],{meshes:e,primitives:g});if(f.length===1)return i.extensions&&Ci(s,f[0],i),f[0];const p=new Ni;i.extensions&&Ci(s,p,i),t.associations.set(p,{meshes:e});for(let g=0,v=f.length;g<v;g++)p.add(f[g]);return p})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Qt(na.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new da(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Kn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,i=t.joints.length;s<i;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const i=s.pop(),a=s,l=[],c=[];for(let o=0,h=a.length;o<h;o++){const f=a[o];if(f){l.push(f);const p=new et;i!==null&&p.fromArray(i.array,o*16),c.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[o])}return new Ml(l,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],i=s.name?s.name:"animation_"+e,a=[],l=[],c=[],o=[],h=[];for(let f=0,p=s.channels.length;f<p;f++){const g=s.channels[f],v=s.samplers[g.sampler],M=g.target,x=M.node,m=s.parameters!==void 0?s.parameters[v.input]:v.input,R=s.parameters!==void 0?s.parameters[v.output]:v.output;M.node!==void 0&&(a.push(this.getDependency("node",x)),l.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",R)),o.push(v),h.push(M))}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(o),Promise.all(h)]).then(function(f){const p=f[0],g=f[1],v=f[2],M=f[3],x=f[4],m=[];for(let R=0,b=p.length;R<b;R++){const E=p[R],I=g[R],D=v[R],N=M[R],B=x[R];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const A=n._createAnimationTracks(E,I,D,N,B);if(A)for(let w=0;w<A.length;w++)m.push(A[w])}return new Gd(i,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(i){const a=n._getNodeRef(n.meshCache,s.mesh,i);return s.weights!==void 0&&a.traverse(function(l){if(l.isMesh)for(let c=0,o=s.weights.length;c<o;c++)l.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],i=n._loadNodeShallow(e),a=[],l=s.children||[];for(let o=0,h=l.length;o<h;o++)a.push(n.getDependency("node",l[o]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([i,Promise.all(a),c]).then(function(o){const h=o[0],f=o[1],p=o[2];p!==null&&h.traverse(function(g){g.isSkinnedMesh&&g.bind(p,Dx)});for(let g=0,v=f.length;g<v;g++)h.add(f[g]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const i=t.nodes[e],a=i.name?s.createUniqueName(i.name):"",l=[],c=s._invokeOne(function(o){return o.createNodeMesh&&o.createNodeMesh(e)});return c&&l.push(c),i.camera!==void 0&&l.push(s.getDependency("camera",i.camera).then(function(o){return s._getNodeRef(s.cameraCache,i.camera,o)})),s._invokeAll(function(o){return o.createNodeAttachment&&o.createNodeAttachment(e)}).forEach(function(o){l.push(o)}),this.nodeCache[e]=Promise.all(l).then(function(o){let h;if(i.isBone===!0?h=new oh:o.length>1?h=new Ni:o.length===1?h=o[0]:h=new xt,h!==o[0])for(let f=0,p=o.length;f<p;f++)h.add(o[f]);if(i.name&&(h.userData.name=i.name,h.name=a),Kn(h,i),i.extensions&&Ci(n,h,i),i.matrix!==void 0){const f=new et;f.fromArray(i.matrix),h.applyMatrix4(f)}else i.translation!==void 0&&h.position.fromArray(i.translation),i.rotation!==void 0&&h.quaternion.fromArray(i.rotation),i.scale!==void 0&&h.scale.fromArray(i.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(i.mesh!==void 0&&s.meshCache.refs[i.mesh]>1){const f=s.associations.get(h);s.associations.set(h,{...f})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,i=new Ni;n.name&&(i.name=s.createUniqueName(n.name)),Kn(i,n),n.extensions&&Ci(t,i,n);const a=n.nodes||[],l=[];for(let c=0,o=a.length;c<o;c++)l.push(s.getDependency("node",a[c]));return Promise.all(l).then(function(c){for(let h=0,f=c.length;h<f;h++)i.add(c[h]);const o=h=>{const f=new Map;for(const[p,g]of s.associations)(p instanceof Mn||p instanceof kt)&&f.set(p,g);return h.traverse(p=>{const g=s.associations.get(p);g!=null&&f.set(p,g)}),f};return s.associations=o(i),i})}_createAnimationTracks(e,t,n,s,i){const a=[],l=e.name?e.name:e.uuid,c=[];ci[i.path]===ci.weights?e.traverse(function(p){p.morphTargetInfluences&&c.push(p.name?p.name:p.uuid)}):c.push(l);let o;switch(ci[i.path]){case ci.weights:o=Ms;break;case ci.rotation:o=ys;break;case ci.translation:case ci.scale:o=Ss;break;default:switch(n.itemSize){case 1:o=Ms;break;case 2:case 3:default:o=Ss;break}break}const h=s.interpolation!==void 0?wx[s.interpolation]:nr,f=this._getArrayFromAccessor(n);for(let p=0,g=c.length;p<g;p++){const v=new o(c[p]+"."+ci[i.path],t.array,f,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ol(t.constructor),s=new Float32Array(t.length);for(let i=0,a=t.length;i<a;i++)s[i]=t[i]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof ys?Ax:Eh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Nx(r,e,t){const n=e.attributes,s=new On;if(n.POSITION!==void 0){const l=t.json.accessors[n.POSITION],c=l.min,o=l.max;if(c!==void 0&&o!==void 0){if(s.set(new O(c[0],c[1],c[2]),new O(o[0],o[1],o[2])),l.normalized){const h=ol(ps[l.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const i=e.targets;if(i!==void 0){const l=new O,c=new O;for(let o=0,h=i.length;o<h;o++){const f=i[o];if(f.POSITION!==void 0){const p=t.json.accessors[f.POSITION],g=p.min,v=p.max;if(g!==void 0&&v!==void 0){if(c.setX(Math.max(Math.abs(g[0]),Math.abs(v[0]))),c.setY(Math.max(Math.abs(g[1]),Math.abs(v[1]))),c.setZ(Math.max(Math.abs(g[2]),Math.abs(v[2]))),p.normalized){const M=ol(ps[p.componentType]);c.multiplyScalar(M)}l.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(l)}r.boundingBox=s;const a=new Bn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,r.boundingSphere=a}function wu(r,e,t){const n=e.attributes,s=[];function i(a,l){return t.getDependency("accessor",a).then(function(c){r.setAttribute(l,c)})}for(const a in n){const l=al[a]||a.toLowerCase();l in r.attributes||s.push(i(n[a],l))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(l){r.setIndex(l)});s.push(a)}return lt.workingColorSpace!==nn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),Kn(r,e),Nx(r,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Cx(r,e.targets,t):r})}function Fx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var po,Ru;function Ox(){return Ru||(Ru=1,po=function(){function r(n,s){function i(){this.constructor=n}i.prototype=s.prototype,n.prototype=new i}function e(n,s,i,a,l,c){this.message=n,this.expected=s,this.found=i,this.offset=a,this.line=l,this.column=c,this.name="SyntaxError"}r(e,Error);function t(n){var s=arguments.length>1?arguments[1]:{},i={},a={start:Ul},l=Ul,c=function(){return Ql},o=i,h="#",f={type:"literal",value:"#",description:'"#"'},p=void 0,g={type:"any",description:"any character"},v="[",M={type:"literal",value:"[",description:'"["'},x="]",m={type:"literal",value:"]",description:'"]"'},R=function(u){ba(Gt("ObjectPath",u,Ht,Vt))},b=function(u){ba(Gt("ArrayPath",u,Ht,Vt))},E=function(u,_){return u.concat(_)},I=function(u){return[u]},D=function(u){return u},N=".",B={type:"literal",value:".",description:'"."'},A="=",w={type:"literal",value:"=",description:'"="'},L=function(u,_){ba(Gt("Assign",_,Ht,Vt,u))},Y=function(u){return u.join("")},X=function(u){return u.value},V='"""',ne={type:"literal",value:'"""',description:'"\\"\\"\\""'},K=null,oe=function(u){return Gt("String",u.join(""),Ht,Vt)},j='"',me={type:"literal",value:'"',description:'"\\""'},_e="'''",Ie={type:"literal",value:"'''",description:`"'''"`},qe="'",pt={type:"literal",value:"'",description:`"'"`},ct=function(u){return u},J=function(u){return u},ge="\\",de={type:"literal",value:"\\",description:'"\\\\"'},ke=function(){return""},ze="e",Ye={type:"literal",value:"e",description:'"e"'},Pt="E",rt={type:"literal",value:"E",description:'"E"'},F=function(u,_){return Gt("Float",parseFloat(u+"e"+_),Ht,Vt)},Et=function(u){return Gt("Float",parseFloat(u),Ht,Vt)},Fe="+",at={type:"literal",value:"+",description:'"+"'},Ne=function(u){return u.join("")},mt="-",Te={type:"literal",value:"-",description:'"-"'},Ze=function(u){return"-"+u.join("")},Dt=function(u){return Gt("Integer",parseInt(u,10),Ht,Vt)},Rt="true",P={type:"literal",value:"true",description:'"true"'},S=function(){return Gt("Boolean",!0,Ht,Vt)},W="false",ee={type:"literal",value:"false",description:'"false"'},se=function(){return Gt("Boolean",!1,Ht,Vt)},Z=function(){return Gt("Array",[],Ht,Vt)},Ue=function(u){return Gt("Array",u?[u]:[],Ht,Vt)},fe=function(u){return Gt("Array",u,Ht,Vt)},Pe=function(u,_){return Gt("Array",u.concat(_),Ht,Vt)},Le=function(u){return u},ce=",",ye={type:"literal",value:",",description:'","'},Ge="{",De={type:"literal",value:"{",description:'"{"'},xe="}",je={type:"literal",value:"}",description:'"}"'},k=function(u){return Gt("InlineTable",u,Ht,Vt)},ue=function(u,_){return Gt("InlineTableValue",_,Ht,Vt,u)},pe=function(u){return"."+u},Ae=function(u){return u.join("")},ae=":",te={type:"literal",value:":",description:'":"'},Ce=function(u){return u.join("")},$e="T",vt={type:"literal",value:"T",description:'"T"'},ut="Z",Sn={type:"literal",value:"Z",description:'"Z"'},fn=function(u,_){return Gt("Date",new Date(u+"T"+_+"Z"),Ht,Vt)},lr=function(u,_){return Gt("Date",new Date(u+"T"+_),Ht,Vt)},zn=/^[ \t]/,ws={type:"class",value:"[ \\t]",description:"[ \\t]"},Rs=`
`,Cs={type:"literal",value:`
`,description:'"\\n"'},zi="\r",cr={type:"literal",value:"\r",description:'"\\r"'},Hi=/^[0-9a-f]/i,ur={type:"class",value:"[0-9a-f]i",description:"[0-9a-f]i"},hr=/^[0-9]/,ma={type:"class",value:"[0-9]",description:"[0-9]"},ga="_",_a={type:"literal",value:"_",description:'"_"'},xa=function(){return""},va=/^[A-Za-z0-9_\-]/,Ma={type:"class",value:"[A-Za-z0-9_\\-]",description:"[A-Za-z0-9_\\-]"},T=function(u){return u.join("")},z='\\"',$={type:"literal",value:'\\"',description:'"\\\\\\""'},q=function(){return'"'},H="\\\\",le={type:"literal",value:"\\\\",description:'"\\\\\\\\"'},Se=function(){return"\\"},we="\\b",be={type:"literal",value:"\\b",description:'"\\\\b"'},He=function(){return"\b"},We="\\t",Oe={type:"literal",value:"\\t",description:'"\\\\t"'},nt=function(){return"	"},ft="\\n",Ct={type:"literal",value:"\\n",description:'"\\\\n"'},bt=function(){return`
`},gt="\\f",Be={type:"literal",value:"\\f",description:'"\\\\f"'},wt=function(){return"\f"},ot="\\r",Kt={type:"literal",value:"\\r",description:'"\\\\r"'},ti=function(){return"\r"},Xt="\\U",_i={type:"literal",value:"\\U",description:'"\\\\U"'},At=function(u){return Gh(u.join(""))},jt="\\u",rn={type:"literal",value:"\\u",description:'"\\\\u"'},d=0,ve=0,Hn=0,En={line:1,column:1,seenCR:!1},fr=0,ya=[],ie=0,re={},dr;if("startRule"in s){if(!(s.startRule in a))throw new Error(`Can't start parsing from rule "`+s.startRule+'".');l=a[s.startRule]}function Ht(){return Sa(ve).line}function Vt(){return Sa(ve).column}function Sa(u){function _(y,C,U){var G,Q;for(G=C;G<U;G++)Q=n.charAt(G),Q===`
`?(y.seenCR||y.line++,y.column=1,y.seenCR=!1):Q==="\r"||Q==="\u2028"||Q==="\u2029"?(y.line++,y.column=1,y.seenCR=!0):(y.column++,y.seenCR=!1)}return Hn!==u&&(Hn>u&&(Hn=0,En={line:1,column:1,seenCR:!1}),_(En,Hn,u),Hn=u),En}function he(u){d<fr||(d>fr&&(fr=d,ya=[]),ya.push(u))}function Th(u,_,y){function C(Ee){var Xe=1;for(Ee.sort(function(Mt,ht){return Mt.description<ht.description?-1:Mt.description>ht.description?1:0});Xe<Ee.length;)Ee[Xe-1]===Ee[Xe]?Ee.splice(Xe,1):Xe++}function U(Ee,Xe){function Mt(Gi){function ni(ln){return ln.charCodeAt(0).toString(16).toUpperCase()}return Gi.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(ln){return"\\x0"+ni(ln)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(ln){return"\\x"+ni(ln)}).replace(/[\u0180-\u0FFF]/g,function(ln){return"\\u0"+ni(ln)}).replace(/[\u1080-\uFFFF]/g,function(ln){return"\\u"+ni(ln)})}var ht=new Array(Ee.length),Lt,It,on;for(on=0;on<Ee.length;on++)ht[on]=Ee[on].description;return Lt=Ee.length>1?ht.slice(0,-1).join(", ")+" or "+ht[Ee.length-1]:ht[0],It=Xe?'"'+Mt(Xe)+'"':"end of input","Expected "+Lt+" but "+It+" found."}var G=Sa(y),Q=y<n.length?n.charAt(y):null;return _!==null&&C(_),new e(U(_,Q),_,Q,y,G.line,G.column)}function Ul(){var u,_,y,C=d*49+0,U=re[C];if(U)return d=U.nextPos,U.result;for(u=d,_=[],y=Nl();y!==i;)_.push(y),y=Nl();return _!==i&&(ve=u,_=c()),u=_,re[C]={nextPos:d,result:u},u}function Nl(){var u,_,y,C,U,G,Q,Ee=d*49+1,Xe=re[Ee];if(Xe)return d=Xe.nextPos,Xe.result;for(u=d,_=[],y=Re();y!==i;)_.push(y),y=Re();if(_!==i)if(y=bh(),y!==i){for(C=[],U=Re();U!==i;)C.push(U),U=Re();if(C!==i){for(U=[],G=pr();G!==i;)U.push(G),G=pr();if(U!==i){if(G=[],Q=pn(),Q!==i)for(;Q!==i;)G.push(Q),Q=pn();else G=o;G===i&&(G=gr()),G!==i?(_=[_,y,C,U,G],u=_):(d=u,u=o)}else d=u,u=o}else d=u,u=o}else d=u,u=o;else d=u,u=o;if(u===i){if(u=d,_=[],y=Re(),y!==i)for(;y!==i;)_.push(y),y=Re();else _=o;if(_!==i){if(y=[],C=pn(),C!==i)for(;C!==i;)y.push(C),C=pn();else y=o;y===i&&(y=gr()),y!==i?(_=[_,y],u=_):(d=u,u=o)}else d=u,u=o;u===i&&(u=pn())}return re[Ee]={nextPos:d,result:u},u}function bh(){var u,_=d*49+2,y=re[_];return y?(d=y.nextPos,y.result):(u=pr(),u===i&&(u=Ah(),u===i&&(u=wh(),u===i&&(u=Rh()))),re[_]={nextPos:d,result:u},u)}function pr(){var u,_,y,C,U,G,Q=d*49+3,Ee=re[Q];if(Ee)return d=Ee.nextPos,Ee.result;if(u=d,n.charCodeAt(d)===35?(_=h,d++):(_=i,ie===0&&he(f)),_!==i){for(y=[],C=d,U=d,ie++,G=pn(),G===i&&(G=gr()),ie--,G===i?U=p:(d=U,U=o),U!==i?(n.length>d?(G=n.charAt(d),d++):(G=i,ie===0&&he(g)),G!==i?(U=[U,G],C=U):(d=C,C=o)):(d=C,C=o);C!==i;)y.push(C),C=d,U=d,ie++,G=pn(),G===i&&(G=gr()),ie--,G===i?U=p:(d=U,U=o),U!==i?(n.length>d?(G=n.charAt(d),d++):(G=i,ie===0&&he(g)),G!==i?(U=[U,G],C=U):(d=C,C=o)):(d=C,C=o);y!==i?(_=[_,y],u=_):(d=u,u=o)}else d=u,u=o;return re[Q]={nextPos:d,result:u},u}function Ah(){var u,_,y,C,U,G,Q=d*49+4,Ee=re[Q];if(Ee)return d=Ee.nextPos,Ee.result;if(u=d,n.charCodeAt(d)===91?(_=v,d++):(_=i,ie===0&&he(M)),_!==i){for(y=[],C=Re();C!==i;)y.push(C),C=Re();if(y!==i)if(C=Fl(),C!==i){for(U=[],G=Re();G!==i;)U.push(G),G=Re();U!==i?(n.charCodeAt(d)===93?(G=x,d++):(G=i,ie===0&&he(m)),G!==i?(ve=u,_=R(C),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;else d=u,u=o}else d=u,u=o;return re[Q]={nextPos:d,result:u},u}function wh(){var u,_,y,C,U,G,Q,Ee,Xe=d*49+5,Mt=re[Xe];if(Mt)return d=Mt.nextPos,Mt.result;if(u=d,n.charCodeAt(d)===91?(_=v,d++):(_=i,ie===0&&he(M)),_!==i)if(n.charCodeAt(d)===91?(y=v,d++):(y=i,ie===0&&he(M)),y!==i){for(C=[],U=Re();U!==i;)C.push(U),U=Re();if(C!==i)if(U=Fl(),U!==i){for(G=[],Q=Re();Q!==i;)G.push(Q),Q=Re();G!==i?(n.charCodeAt(d)===93?(Q=x,d++):(Q=i,ie===0&&he(m)),Q!==i?(n.charCodeAt(d)===93?(Ee=x,d++):(Ee=i,ie===0&&he(m)),Ee!==i?(ve=u,_=b(U),u=_):(d=u,u=o)):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;else d=u,u=o}else d=u,u=o;else d=u,u=o;return re[Xe]={nextPos:d,result:u},u}function Fl(){var u,_,y,C=d*49+6,U=re[C];if(U)return d=U.nextPos,U.result;if(u=d,_=[],y=Bl(),y!==i)for(;y!==i;)_.push(y),y=Bl();else _=o;return _!==i?(y=Ol(),y!==i?(ve=u,_=E(_,y),u=_):(d=u,u=o)):(d=u,u=o),u===i&&(u=d,_=Ol(),_!==i&&(ve=u,_=I(_)),u=_),re[C]={nextPos:d,result:u},u}function Ol(){var u,_,y,C,U,G=d*49+7,Q=re[G];if(Q)return d=Q.nextPos,Q.result;for(u=d,_=[],y=Re();y!==i;)_.push(y),y=Re();if(_!==i)if(y=Ps(),y!==i){for(C=[],U=Re();U!==i;)C.push(U),U=Re();C!==i?(ve=u,_=D(y),u=_):(d=u,u=o)}else d=u,u=o;else d=u,u=o;if(u===i){for(u=d,_=[],y=Re();y!==i;)_.push(y),y=Re();if(_!==i)if(y=Ea(),y!==i){for(C=[],U=Re();U!==i;)C.push(U),U=Re();C!==i?(ve=u,_=D(y),u=_):(d=u,u=o)}else d=u,u=o;else d=u,u=o}return re[G]={nextPos:d,result:u},u}function Bl(){var u,_,y,C,U,G,Q,Ee=d*49+8,Xe=re[Ee];if(Xe)return d=Xe.nextPos,Xe.result;for(u=d,_=[],y=Re();y!==i;)_.push(y),y=Re();if(_!==i)if(y=Ps(),y!==i){for(C=[],U=Re();U!==i;)C.push(U),U=Re();if(C!==i)if(n.charCodeAt(d)===46?(U=N,d++):(U=i,ie===0&&he(B)),U!==i){for(G=[],Q=Re();Q!==i;)G.push(Q),Q=Re();G!==i?(ve=u,_=D(y),u=_):(d=u,u=o)}else d=u,u=o;else d=u,u=o}else d=u,u=o;else d=u,u=o;if(u===i){for(u=d,_=[],y=Re();y!==i;)_.push(y),y=Re();if(_!==i)if(y=Ea(),y!==i){for(C=[],U=Re();U!==i;)C.push(U),U=Re();if(C!==i)if(n.charCodeAt(d)===46?(U=N,d++):(U=i,ie===0&&he(B)),U!==i){for(G=[],Q=Re();Q!==i;)G.push(Q),Q=Re();G!==i?(ve=u,_=D(y),u=_):(d=u,u=o)}else d=u,u=o;else d=u,u=o}else d=u,u=o;else d=u,u=o}return re[Ee]={nextPos:d,result:u},u}function Rh(){var u,_,y,C,U,G,Q=d*49+9,Ee=re[Q];if(Ee)return d=Ee.nextPos,Ee.result;if(u=d,_=Ps(),_!==i){for(y=[],C=Re();C!==i;)y.push(C),C=Re();if(y!==i)if(n.charCodeAt(d)===61?(C=A,d++):(C=i,ie===0&&he(w)),C!==i){for(U=[],G=Re();G!==i;)U.push(G),G=Re();U!==i?(G=Vi(),G!==i?(ve=u,_=L(_,G),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;else d=u,u=o}else d=u,u=o;if(u===i)if(u=d,_=Ea(),_!==i){for(y=[],C=Re();C!==i;)y.push(C),C=Re();if(y!==i)if(n.charCodeAt(d)===61?(C=A,d++):(C=i,ie===0&&he(w)),C!==i){for(U=[],G=Re();G!==i;)U.push(G),G=Re();U!==i?(G=Vi(),G!==i?(ve=u,_=L(_,G),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;else d=u,u=o}else d=u,u=o;return re[Q]={nextPos:d,result:u},u}function Ps(){var u,_,y,C=d*49+10,U=re[C];if(U)return d=U.nextPos,U.result;if(u=d,_=[],y=Zl(),y!==i)for(;y!==i;)_.push(y),y=Zl();else _=o;return _!==i&&(ve=u,_=Y(_)),u=_,re[C]={nextPos:d,result:u},u}function Ea(){var u,_,y=d*49+11,C=re[y];return C?(d=C.nextPos,C.result):(u=d,_=kl(),_!==i&&(ve=u,_=X(_)),u=_,u===i&&(u=d,_=zl(),_!==i&&(ve=u,_=X(_)),u=_),re[y]={nextPos:d,result:u},u)}function Vi(){var u,_=d*49+12,y=re[_];return y?(d=y.nextPos,y.result):(u=Ch(),u===i&&(u=zh(),u===i&&(u=Dh(),u===i&&(u=Uh(),u===i&&(u=Nh(),u===i&&(u=Fh(),u===i&&(u=Oh())))))),re[_]={nextPos:d,result:u},u)}function Ch(){var u,_=d*49+13,y=re[_];return y?(d=y.nextPos,y.result):(u=Ph(),u===i&&(u=kl(),u===i&&(u=Lh(),u===i&&(u=zl()))),re[_]={nextPos:d,result:u},u)}function Ph(){var u,_,y,C,U,G=d*49+14,Q=re[G];if(Q)return d=Q.nextPos,Q.result;if(u=d,n.substr(d,3)===V?(_=V,d+=3):(_=i,ie===0&&he(ne)),_!==i)if(y=pn(),y===i&&(y=K),y!==i){for(C=[],U=Gl();U!==i;)C.push(U),U=Gl();C!==i?(n.substr(d,3)===V?(U=V,d+=3):(U=i,ie===0&&he(ne)),U!==i?(ve=u,_=oe(C),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;else d=u,u=o;return re[G]={nextPos:d,result:u},u}function kl(){var u,_,y,C,U=d*49+15,G=re[U];if(G)return d=G.nextPos,G.result;if(u=d,n.charCodeAt(d)===34?(_=j,d++):(_=i,ie===0&&he(me)),_!==i){for(y=[],C=Hl();C!==i;)y.push(C),C=Hl();y!==i?(n.charCodeAt(d)===34?(C=j,d++):(C=i,ie===0&&he(me)),C!==i?(ve=u,_=oe(y),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;return re[U]={nextPos:d,result:u},u}function Lh(){var u,_,y,C,U,G=d*49+16,Q=re[G];if(Q)return d=Q.nextPos,Q.result;if(u=d,n.substr(d,3)===_e?(_=_e,d+=3):(_=i,ie===0&&he(Ie)),_!==i)if(y=pn(),y===i&&(y=K),y!==i){for(C=[],U=Wl();U!==i;)C.push(U),U=Wl();C!==i?(n.substr(d,3)===_e?(U=_e,d+=3):(U=i,ie===0&&he(Ie)),U!==i?(ve=u,_=oe(C),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;else d=u,u=o;return re[G]={nextPos:d,result:u},u}function zl(){var u,_,y,C,U=d*49+17,G=re[U];if(G)return d=G.nextPos,G.result;if(u=d,n.charCodeAt(d)===39?(_=qe,d++):(_=i,ie===0&&he(pt)),_!==i){for(y=[],C=Vl();C!==i;)y.push(C),C=Vl();y!==i?(n.charCodeAt(d)===39?(C=qe,d++):(C=i,ie===0&&he(pt)),C!==i?(ve=u,_=oe(y),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;return re[U]={nextPos:d,result:u},u}function Hl(){var u,_,y,C=d*49+18,U=re[C];return U?(d=U.nextPos,U.result):(u=Jl(),u===i&&(u=d,_=d,ie++,n.charCodeAt(d)===34?(y=j,d++):(y=i,ie===0&&he(me)),ie--,y===i?_=p:(d=_,_=o),_!==i?(n.length>d?(y=n.charAt(d),d++):(y=i,ie===0&&he(g)),y!==i?(ve=u,_=ct(y),u=_):(d=u,u=o)):(d=u,u=o)),re[C]={nextPos:d,result:u},u)}function Vl(){var u,_,y,C=d*49+19,U=re[C];return U?(d=U.nextPos,U.result):(u=d,_=d,ie++,n.charCodeAt(d)===39?(y=qe,d++):(y=i,ie===0&&he(pt)),ie--,y===i?_=p:(d=_,_=o),_!==i?(n.length>d?(y=n.charAt(d),d++):(y=i,ie===0&&he(g)),y!==i?(ve=u,_=ct(y),u=_):(d=u,u=o)):(d=u,u=o),re[C]={nextPos:d,result:u},u)}function Gl(){var u,_,y,C=d*49+20,U=re[C];return U?(d=U.nextPos,U.result):(u=Jl(),u===i&&(u=Ih(),u===i&&(u=d,_=d,ie++,n.substr(d,3)===V?(y=V,d+=3):(y=i,ie===0&&he(ne)),ie--,y===i?_=p:(d=_,_=o),_!==i?(n.length>d?(y=n.charAt(d),d++):(y=i,ie===0&&he(g)),y!==i?(ve=u,_=J(y),u=_):(d=u,u=o)):(d=u,u=o))),re[C]={nextPos:d,result:u},u)}function Ih(){var u,_,y,C,U,G=d*49+21,Q=re[G];if(Q)return d=Q.nextPos,Q.result;if(u=d,n.charCodeAt(d)===92?(_=ge,d++):(_=i,ie===0&&he(de)),_!==i)if(y=pn(),y!==i){for(C=[],U=jl();U!==i;)C.push(U),U=jl();C!==i?(ve=u,_=ke(),u=_):(d=u,u=o)}else d=u,u=o;else d=u,u=o;return re[G]={nextPos:d,result:u},u}function Wl(){var u,_,y,C=d*49+22,U=re[C];return U?(d=U.nextPos,U.result):(u=d,_=d,ie++,n.substr(d,3)===_e?(y=_e,d+=3):(y=i,ie===0&&he(Ie)),ie--,y===i?_=p:(d=_,_=o),_!==i?(n.length>d?(y=n.charAt(d),d++):(y=i,ie===0&&he(g)),y!==i?(ve=u,_=ct(y),u=_):(d=u,u=o)):(d=u,u=o),re[C]={nextPos:d,result:u},u)}function Dh(){var u,_,y,C,U=d*49+23,G=re[U];return G?(d=G.nextPos,G.result):(u=d,_=Xl(),_===i&&(_=Ta()),_!==i?(n.charCodeAt(d)===101?(y=ze,d++):(y=i,ie===0&&he(Ye)),y===i&&(n.charCodeAt(d)===69?(y=Pt,d++):(y=i,ie===0&&he(rt))),y!==i?(C=Ta(),C!==i?(ve=u,_=F(_,C),u=_):(d=u,u=o)):(d=u,u=o)):(d=u,u=o),u===i&&(u=d,_=Xl(),_!==i&&(ve=u,_=Et(_)),u=_),re[U]={nextPos:d,result:u},u)}function Xl(){var u,_,y,C,U,G,Q=d*49+24,Ee=re[Q];return Ee?(d=Ee.nextPos,Ee.result):(u=d,n.charCodeAt(d)===43?(_=Fe,d++):(_=i,ie===0&&he(at)),_===i&&(_=K),_!==i?(y=d,C=Ls(),C!==i?(n.charCodeAt(d)===46?(U=N,d++):(U=i,ie===0&&he(B)),U!==i?(G=Ls(),G!==i?(C=[C,U,G],y=C):(d=y,y=o)):(d=y,y=o)):(d=y,y=o),y!==i?(ve=u,_=Ne(y),u=_):(d=u,u=o)):(d=u,u=o),u===i&&(u=d,n.charCodeAt(d)===45?(_=mt,d++):(_=i,ie===0&&he(Te)),_!==i?(y=d,C=Ls(),C!==i?(n.charCodeAt(d)===46?(U=N,d++):(U=i,ie===0&&he(B)),U!==i?(G=Ls(),G!==i?(C=[C,U,G],y=C):(d=y,y=o)):(d=y,y=o)):(d=y,y=o),y!==i?(ve=u,_=Ze(y),u=_):(d=u,u=o)):(d=u,u=o)),re[Q]={nextPos:d,result:u},u)}function Uh(){var u,_,y=d*49+25,C=re[y];return C?(d=C.nextPos,C.result):(u=d,_=Ta(),_!==i&&(ve=u,_=Dt(_)),u=_,re[y]={nextPos:d,result:u},u)}function Ta(){var u,_,y,C,U,G=d*49+26,Q=re[G];if(Q)return d=Q.nextPos,Q.result;if(u=d,n.charCodeAt(d)===43?(_=Fe,d++):(_=i,ie===0&&he(at)),_===i&&(_=K),_!==i){if(y=[],C=_t(),C!==i)for(;C!==i;)y.push(C),C=_t();else y=o;y!==i?(C=d,ie++,n.charCodeAt(d)===46?(U=N,d++):(U=i,ie===0&&he(B)),ie--,U===i?C=p:(d=C,C=o),C!==i?(ve=u,_=Ne(y),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;if(u===i)if(u=d,n.charCodeAt(d)===45?(_=mt,d++):(_=i,ie===0&&he(Te)),_!==i){if(y=[],C=_t(),C!==i)for(;C!==i;)y.push(C),C=_t();else y=o;y!==i?(C=d,ie++,n.charCodeAt(d)===46?(U=N,d++):(U=i,ie===0&&he(B)),ie--,U===i?C=p:(d=C,C=o),C!==i?(ve=u,_=Ze(y),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;return re[G]={nextPos:d,result:u},u}function Nh(){var u,_,y=d*49+27,C=re[y];return C?(d=C.nextPos,C.result):(u=d,n.substr(d,4)===Rt?(_=Rt,d+=4):(_=i,ie===0&&he(P)),_!==i&&(ve=u,_=S()),u=_,u===i&&(u=d,n.substr(d,5)===W?(_=W,d+=5):(_=i,ie===0&&he(ee)),_!==i&&(ve=u,_=se()),u=_),re[y]={nextPos:d,result:u},u)}function Fh(){var u,_,y,C,U,G=d*49+28,Q=re[G];if(Q)return d=Q.nextPos,Q.result;if(u=d,n.charCodeAt(d)===91?(_=v,d++):(_=i,ie===0&&he(M)),_!==i){for(y=[],C=dn();C!==i;)y.push(C),C=dn();y!==i?(n.charCodeAt(d)===93?(C=x,d++):(C=i,ie===0&&he(m)),C!==i?(ve=u,_=Z(),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;if(u===i&&(u=d,n.charCodeAt(d)===91?(_=v,d++):(_=i,ie===0&&he(M)),_!==i?(y=$l(),y===i&&(y=K),y!==i?(n.charCodeAt(d)===93?(C=x,d++):(C=i,ie===0&&he(m)),C!==i?(ve=u,_=Ue(y),u=_):(d=u,u=o)):(d=u,u=o)):(d=u,u=o),u===i)){if(u=d,n.charCodeAt(d)===91?(_=v,d++):(_=i,ie===0&&he(M)),_!==i){if(y=[],C=mr(),C!==i)for(;C!==i;)y.push(C),C=mr();else y=o;y!==i?(n.charCodeAt(d)===93?(C=x,d++):(C=i,ie===0&&he(m)),C!==i?(ve=u,_=fe(y),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;if(u===i)if(u=d,n.charCodeAt(d)===91?(_=v,d++):(_=i,ie===0&&he(M)),_!==i){if(y=[],C=mr(),C!==i)for(;C!==i;)y.push(C),C=mr();else y=o;y!==i?(C=$l(),C!==i?(n.charCodeAt(d)===93?(U=x,d++):(U=i,ie===0&&he(m)),U!==i?(ve=u,_=Pe(y,C),u=_):(d=u,u=o)):(d=u,u=o)):(d=u,u=o)}else d=u,u=o}return re[G]={nextPos:d,result:u},u}function $l(){var u,_,y,C,U,G=d*49+29,Q=re[G];if(Q)return d=Q.nextPos,Q.result;for(u=d,_=[],y=dn();y!==i;)_.push(y),y=dn();if(_!==i)if(y=Vi(),y!==i){for(C=[],U=dn();U!==i;)C.push(U),U=dn();C!==i?(ve=u,_=Le(y),u=_):(d=u,u=o)}else d=u,u=o;else d=u,u=o;return re[G]={nextPos:d,result:u},u}function mr(){var u,_,y,C,U,G,Q,Ee=d*49+30,Xe=re[Ee];if(Xe)return d=Xe.nextPos,Xe.result;for(u=d,_=[],y=dn();y!==i;)_.push(y),y=dn();if(_!==i)if(y=Vi(),y!==i){for(C=[],U=dn();U!==i;)C.push(U),U=dn();if(C!==i)if(n.charCodeAt(d)===44?(U=ce,d++):(U=i,ie===0&&he(ye)),U!==i){for(G=[],Q=dn();Q!==i;)G.push(Q),Q=dn();G!==i?(ve=u,_=Le(y),u=_):(d=u,u=o)}else d=u,u=o;else d=u,u=o}else d=u,u=o;else d=u,u=o;return re[Ee]={nextPos:d,result:u},u}function dn(){var u,_=d*49+31,y=re[_];return y?(d=y.nextPos,y.result):(u=Re(),u===i&&(u=pn(),u===i&&(u=pr())),re[_]={nextPos:d,result:u},u)}function Oh(){var u,_,y,C,U,G,Q=d*49+32,Ee=re[Q];if(Ee)return d=Ee.nextPos,Ee.result;if(u=d,n.charCodeAt(d)===123?(_=Ge,d++):(_=i,ie===0&&he(De)),_!==i){for(y=[],C=Re();C!==i;)y.push(C),C=Re();if(y!==i){for(C=[],U=ql();U!==i;)C.push(U),U=ql();if(C!==i){for(U=[],G=Re();G!==i;)U.push(G),G=Re();U!==i?(n.charCodeAt(d)===125?(G=xe,d++):(G=i,ie===0&&he(je)),G!==i?(ve=u,_=k(C),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o}else d=u,u=o}else d=u,u=o;return re[Q]={nextPos:d,result:u},u}function ql(){var u,_,y,C,U,G,Q,Ee,Xe,Mt,ht,Lt=d*49+33,It=re[Lt];if(It)return d=It.nextPos,It.result;for(u=d,_=[],y=Re();y!==i;)_.push(y),y=Re();if(_!==i)if(y=Ps(),y!==i){for(C=[],U=Re();U!==i;)C.push(U),U=Re();if(C!==i)if(n.charCodeAt(d)===61?(U=A,d++):(U=i,ie===0&&he(w)),U!==i){for(G=[],Q=Re();Q!==i;)G.push(Q),Q=Re();if(G!==i)if(Q=Vi(),Q!==i){for(Ee=[],Xe=Re();Xe!==i;)Ee.push(Xe),Xe=Re();if(Ee!==i)if(n.charCodeAt(d)===44?(Xe=ce,d++):(Xe=i,ie===0&&he(ye)),Xe!==i){for(Mt=[],ht=Re();ht!==i;)Mt.push(ht),ht=Re();Mt!==i?(ve=u,_=ue(y,Q),u=_):(d=u,u=o)}else d=u,u=o;else d=u,u=o}else d=u,u=o;else d=u,u=o}else d=u,u=o;else d=u,u=o}else d=u,u=o;else d=u,u=o;if(u===i){for(u=d,_=[],y=Re();y!==i;)_.push(y),y=Re();if(_!==i)if(y=Ps(),y!==i){for(C=[],U=Re();U!==i;)C.push(U),U=Re();if(C!==i)if(n.charCodeAt(d)===61?(U=A,d++):(U=i,ie===0&&he(w)),U!==i){for(G=[],Q=Re();Q!==i;)G.push(Q),Q=Re();G!==i?(Q=Vi(),Q!==i?(ve=u,_=ue(y,Q),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;else d=u,u=o}else d=u,u=o;else d=u,u=o}return re[Lt]={nextPos:d,result:u},u}function Yl(){var u,_,y,C=d*49+34,U=re[C];return U?(d=U.nextPos,U.result):(u=d,n.charCodeAt(d)===46?(_=N,d++):(_=i,ie===0&&he(B)),_!==i?(y=Ls(),y!==i?(ve=u,_=pe(y),u=_):(d=u,u=o)):(d=u,u=o),re[C]={nextPos:d,result:u},u)}function Kl(){var u,_,y,C,U,G,Q,Ee,Xe,Mt,ht,Lt,It=d*49+35,on=re[It];return on?(d=on.nextPos,on.result):(u=d,_=d,y=_t(),y!==i?(C=_t(),C!==i?(U=_t(),U!==i?(G=_t(),G!==i?(n.charCodeAt(d)===45?(Q=mt,d++):(Q=i,ie===0&&he(Te)),Q!==i?(Ee=_t(),Ee!==i?(Xe=_t(),Xe!==i?(n.charCodeAt(d)===45?(Mt=mt,d++):(Mt=i,ie===0&&he(Te)),Mt!==i?(ht=_t(),ht!==i?(Lt=_t(),Lt!==i?(y=[y,C,U,G,Q,Ee,Xe,Mt,ht,Lt],_=y):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o),_!==i&&(ve=u,_=Ae(_)),u=_,re[It]={nextPos:d,result:u},u)}function Bh(){var u,_,y,C,U,G,Q,Ee,Xe,Mt,ht,Lt=d*49+36,It=re[Lt];return It?(d=It.nextPos,It.result):(u=d,_=d,y=_t(),y!==i?(C=_t(),C!==i?(n.charCodeAt(d)===58?(U=ae,d++):(U=i,ie===0&&he(te)),U!==i?(G=_t(),G!==i?(Q=_t(),Q!==i?(n.charCodeAt(d)===58?(Ee=ae,d++):(Ee=i,ie===0&&he(te)),Ee!==i?(Xe=_t(),Xe!==i?(Mt=_t(),Mt!==i?(ht=Yl(),ht===i&&(ht=K),ht!==i?(y=[y,C,U,G,Q,Ee,Xe,Mt,ht],_=y):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o),_!==i&&(ve=u,_=Ce(_)),u=_,re[Lt]={nextPos:d,result:u},u)}function kh(){var u,_,y,C,U,G,Q,Ee,Xe,Mt,ht,Lt,It,on,Gi,ni,ln,ec=d*49+37,Aa=re[ec];return Aa?(d=Aa.nextPos,Aa.result):(u=d,_=d,y=_t(),y!==i?(C=_t(),C!==i?(n.charCodeAt(d)===58?(U=ae,d++):(U=i,ie===0&&he(te)),U!==i?(G=_t(),G!==i?(Q=_t(),Q!==i?(n.charCodeAt(d)===58?(Ee=ae,d++):(Ee=i,ie===0&&he(te)),Ee!==i?(Xe=_t(),Xe!==i?(Mt=_t(),Mt!==i?(ht=Yl(),ht===i&&(ht=K),ht!==i?(n.charCodeAt(d)===45?(Lt=mt,d++):(Lt=i,ie===0&&he(Te)),Lt===i&&(n.charCodeAt(d)===43?(Lt=Fe,d++):(Lt=i,ie===0&&he(at))),Lt!==i?(It=_t(),It!==i?(on=_t(),on!==i?(n.charCodeAt(d)===58?(Gi=ae,d++):(Gi=i,ie===0&&he(te)),Gi!==i?(ni=_t(),ni!==i?(ln=_t(),ln!==i?(y=[y,C,U,G,Q,Ee,Xe,Mt,ht,Lt,It,on,Gi,ni,ln],_=y):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o),_!==i&&(ve=u,_=Ce(_)),u=_,re[ec]={nextPos:d,result:u},u)}function zh(){var u,_,y,C,U,G=d*49+38,Q=re[G];return Q?(d=Q.nextPos,Q.result):(u=d,_=Kl(),_!==i?(n.charCodeAt(d)===84?(y=$e,d++):(y=i,ie===0&&he(vt)),y!==i?(C=Bh(),C!==i?(n.charCodeAt(d)===90?(U=ut,d++):(U=i,ie===0&&he(Sn)),U!==i?(ve=u,_=fn(_,C),u=_):(d=u,u=o)):(d=u,u=o)):(d=u,u=o)):(d=u,u=o),u===i&&(u=d,_=Kl(),_!==i?(n.charCodeAt(d)===84?(y=$e,d++):(y=i,ie===0&&he(vt)),y!==i?(C=kh(),C!==i?(ve=u,_=lr(_,C),u=_):(d=u,u=o)):(d=u,u=o)):(d=u,u=o)),re[G]={nextPos:d,result:u},u)}function Re(){var u,_=d*49+39,y=re[_];return y?(d=y.nextPos,y.result):(zn.test(n.charAt(d))?(u=n.charAt(d),d++):(u=i,ie===0&&he(ws)),re[_]={nextPos:d,result:u},u)}function pn(){var u,_,y,C=d*49+40,U=re[C];return U?(d=U.nextPos,U.result):(n.charCodeAt(d)===10?(u=Rs,d++):(u=i,ie===0&&he(Cs)),u===i&&(u=d,n.charCodeAt(d)===13?(_=zi,d++):(_=i,ie===0&&he(cr)),_!==i?(n.charCodeAt(d)===10?(y=Rs,d++):(y=i,ie===0&&he(Cs)),y!==i?(_=[_,y],u=_):(d=u,u=o)):(d=u,u=o)),re[C]={nextPos:d,result:u},u)}function jl(){var u,_=d*49+41,y=re[_];return y?(d=y.nextPos,y.result):(u=pn(),u===i&&(u=Re()),re[_]={nextPos:d,result:u},u)}function gr(){var u,_,y=d*49+42,C=re[y];return C?(d=C.nextPos,C.result):(u=d,ie++,n.length>d?(_=n.charAt(d),d++):(_=i,ie===0&&he(g)),ie--,_===i?u=p:(d=u,u=o),re[y]={nextPos:d,result:u},u)}function mn(){var u,_=d*49+43,y=re[_];return y?(d=y.nextPos,y.result):(Hi.test(n.charAt(d))?(u=n.charAt(d),d++):(u=i,ie===0&&he(ur)),re[_]={nextPos:d,result:u},u)}function _t(){var u,_,y=d*49+44,C=re[y];return C?(d=C.nextPos,C.result):(hr.test(n.charAt(d))?(u=n.charAt(d),d++):(u=i,ie===0&&he(ma)),u===i&&(u=d,n.charCodeAt(d)===95?(_=ga,d++):(_=i,ie===0&&he(_a)),_!==i&&(ve=u,_=xa()),u=_),re[y]={nextPos:d,result:u},u)}function Zl(){var u,_=d*49+45,y=re[_];return y?(d=y.nextPos,y.result):(va.test(n.charAt(d))?(u=n.charAt(d),d++):(u=i,ie===0&&he(Ma)),re[_]={nextPos:d,result:u},u)}function Ls(){var u,_,y,C=d*49+46,U=re[C];if(U)return d=U.nextPos,U.result;if(u=d,_=[],y=_t(),y!==i)for(;y!==i;)_.push(y),y=_t();else _=o;return _!==i&&(ve=u,_=T(_)),u=_,re[C]={nextPos:d,result:u},u}function Jl(){var u,_,y=d*49+47,C=re[y];return C?(d=C.nextPos,C.result):(u=d,n.substr(d,2)===z?(_=z,d+=2):(_=i,ie===0&&he($)),_!==i&&(ve=u,_=q()),u=_,u===i&&(u=d,n.substr(d,2)===H?(_=H,d+=2):(_=i,ie===0&&he(le)),_!==i&&(ve=u,_=Se()),u=_,u===i&&(u=d,n.substr(d,2)===we?(_=we,d+=2):(_=i,ie===0&&he(be)),_!==i&&(ve=u,_=He()),u=_,u===i&&(u=d,n.substr(d,2)===We?(_=We,d+=2):(_=i,ie===0&&he(Oe)),_!==i&&(ve=u,_=nt()),u=_,u===i&&(u=d,n.substr(d,2)===ft?(_=ft,d+=2):(_=i,ie===0&&he(Ct)),_!==i&&(ve=u,_=bt()),u=_,u===i&&(u=d,n.substr(d,2)===gt?(_=gt,d+=2):(_=i,ie===0&&he(Be)),_!==i&&(ve=u,_=wt()),u=_,u===i&&(u=d,n.substr(d,2)===ot?(_=ot,d+=2):(_=i,ie===0&&he(Kt)),_!==i&&(ve=u,_=ti()),u=_,u===i&&(u=Hh()))))))),re[y]={nextPos:d,result:u},u)}function Hh(){var u,_,y,C,U,G,Q,Ee,Xe,Mt,ht,Lt=d*49+48,It=re[Lt];return It?(d=It.nextPos,It.result):(u=d,n.substr(d,2)===Xt?(_=Xt,d+=2):(_=i,ie===0&&he(_i)),_!==i?(y=d,C=mn(),C!==i?(U=mn(),U!==i?(G=mn(),G!==i?(Q=mn(),Q!==i?(Ee=mn(),Ee!==i?(Xe=mn(),Xe!==i?(Mt=mn(),Mt!==i?(ht=mn(),ht!==i?(C=[C,U,G,Q,Ee,Xe,Mt,ht],y=C):(d=y,y=o)):(d=y,y=o)):(d=y,y=o)):(d=y,y=o)):(d=y,y=o)):(d=y,y=o)):(d=y,y=o)):(d=y,y=o),y!==i?(ve=u,_=At(y),u=_):(d=u,u=o)):(d=u,u=o),u===i&&(u=d,n.substr(d,2)===jt?(_=jt,d+=2):(_=i,ie===0&&he(rn)),_!==i?(y=d,C=mn(),C!==i?(U=mn(),U!==i?(G=mn(),G!==i?(Q=mn(),Q!==i?(C=[C,U,G,Q],y=C):(d=y,y=o)):(d=y,y=o)):(d=y,y=o)):(d=y,y=o),y!==i?(ve=u,_=At(y),u=_):(d=u,u=o)):(d=u,u=o)),re[Lt]={nextPos:d,result:u},u)}var Ql=[];function Vh(u,_,y){var C=new Error(u);throw C.line=_,C.column=y,C}function ba(u){Ql.push(u)}function Gt(u,_,y,C,U){var G={type:u,value:_,line:y(),column:C()};return U&&(G.key=U),G}function Gh(u,_,y){var C=parseInt("0x"+u);if(!isFinite(C)||Math.floor(C)!=C||C<0||C>1114111||C>55295&&C<57344)Vh("Invalid Unicode escape code: "+u,_,y);else return Wh(C)}function Wh(){var u=16384,_=[],y,C,U=-1,G=arguments.length;if(!G)return"";for(var Q="";++U<G;){var Ee=Number(arguments[U]);Ee<=65535?_.push(Ee):(Ee-=65536,y=(Ee>>10)+55296,C=Ee%1024+56320,_.push(y,C)),(U+1==G||_.length>u)&&(Q+=String.fromCharCode.apply(null,_),_.length=0)}return Q}if(dr=l(),dr!==i&&d===n.length)return dr;throw dr!==i&&d<n.length&&he({type:"end",description:"end of input"}),Th(null,ya,fr)}return{SyntaxError:e,parse:t}}()),po}var mo,Cu;function Bx(){if(Cu)return mo;Cu=1;function r(e){var t=[],n=[],s="",i=Object.create(null),a=i;return l(e);function l(R){for(var b,E=0;E<R.length;E++)switch(b=R[E],b.type){case"Assign":o(b);break;case"ObjectPath":g(b);break;case"ArrayPath":v(b);break}return i}function c(R,b,E){var I=new Error(R);throw I.line=b,I.column=E,I}function o(R){var b=R.key,E=R.value,I=R.line,D=R.column,N;s?N=s+"."+b:N=b,typeof a[b]<"u"&&c("Cannot redefine existing key '"+N+"'.",I,D),a[b]=f(E),h(N)||(t.push(N),n.push(N))}function h(R){return t.indexOf(R)!==-1}function f(R){return R.type==="Array"?x(R.value):R.type==="InlineTable"?p(R.value):R.value}function p(R){for(var b=Object.create(null),E=0;E<R.length;E++){var I=R[E];I.value.type==="InlineTable"?b[I.key]=p(I.value.value):I.type==="InlineTableValue"&&(b[I.key]=f(I.value))}return b}function g(R){var b=R.value,E=b.map(m).join("."),I=R.line,D=R.column;h(E)&&c("Cannot redefine existing key '"+b+"'.",I,D),t.push(E),a=M(i,b,Object.create(null),I,D),s=b}function v(R){var b=R.value,E=b.map(m).join("."),I=R.line,D=R.column;if(h(E)||t.push(E),t=t.filter(function(B){return B.indexOf(E)!==0}),t.push(E),a=M(i,b,[],I,D),s=E,a instanceof Array){var N=Object.create(null);a.push(N),a=N}else c("Cannot redefine existing key '"+b+"'.",I,D)}function M(R,b,E,I,D){var N=[],B="";b.join(".");for(var A=R,w=0;w<b.length;w++){var L=b[w];N.push(L),B=N.join("."),typeof A[L]>"u"?w===b.length-1?A[L]=E:A[L]=Object.create(null):w!==b.length-1&&n.indexOf(B)>-1&&c("Cannot redefine existing key '"+B+"'.",I,D),A=A[L],A instanceof Array&&A.length&&w<b.length-1&&(A=A[A.length-1])}return A}function x(R){for(var b=null,E=0;E<R.length;E++){var I=R[E];b===null?b=I.type:I.type!==b&&c("Cannot add value of type "+I.type+" to array of type "+b+".",I.line,I.column)}return R.map(f)}function m(R){return R.indexOf(".")>-1?'"'+R+'"':R}}return mo={compile:r},mo}var go,Pu;function kx(){if(Pu)return go;Pu=1;var r=Ox(),e=Bx();return go={parse:function(t){var n=r.parse(t.toString());return e.compile(n)}},go}var zx=kx();const Hx=Fx(zx);async function Vx(r){const t=await(await fetch(r)).text();return Hx.parse(t)}const mi=await Vx("sceneConfig.toml"),jn=mi.planets,Yr=mi.moons,Pi=Math.pow(10,11);class _o{constructor({name:e,radius:t=null,diameter:n=null,distanceFromOrbitCenter:s,texturePath:i,normalMapPath:a=null,specularMapPath:l=null,emissiveMapPath:c=null,otherMaterialProps:o={},numberOfSegments:h=64,orbitRotationSpeed:f=1e-5,selfRotationSpeed:p=.1,orbitalPeriod:g=1,positionalAudio:v=null}){t?this.radius=t:n&&(this.radius=Math.pow(10,6)*n/2),this.name=e,this.distanceFromOrbitCenter=Math.pow(10,6)*s,this.positionalAudio=v;const M=new ca;if(this.texture=M.load(i),this.normalMap=a?M.load(a):null,this.specularMap=l?M.load(l):null,this.emissiveMap=c?M.load(c):null,o&&Object.keys(o).forEach(x=>{typeof o[x]=="string"&&o[x].startsWith("#")&&(o[x]=new Ve(o[x]))}),this.material=new Ud({map:this.texture,normalMap:this.normalMap,specularMap:this.specularMap,emissiveMap:this.emissiveMap,...o}),this.material.transparent=!1,this.material.opacity=1,this.material.side=Ln,this.numberOfSegments=h,this.geometry=new Al(this.radius,h,h),this.mesh=new en(this.geometry,this.material),this.mesh.position.set(0,0,this.distanceFromOrbitCenter),this.orbit=new xt,this.orbit.add(this.mesh),this.orbitalPeriod=g,this.orbitRotationSpeed=Math.PI*2/(g*365*24*60*60),this.selfRotationSpeed=p,this.name==="Saturn"){const x=66.9*Math.pow(10,6),m=270*Math.pow(10,6);this.ringGeometry=new bl(x,m,128,1,0,Math.PI*2);{const R=this.ringGeometry.attributes.position,b=new Float32Array(R.count*2);for(let E=0;E<R.count;E++){const I=R.getX(E),D=R.getY(E),N=Math.sqrt(I*I+D*D),B=(Math.atan2(D,I)+Math.PI)/(2*Math.PI),A=(N-x)/(m-x),w=B;b[E*2+0]=A,b[E*2+1]=w}this.ringGeometry.setAttribute("uv",new Yt(b,2))}this.ringTexture=new ca().load("saturn/saturn-ring-texture.png",()=>{this.ringTexture.wrapS=Zn,this.ringTexture.wrapT=Fi,this.ringTexture.repeat.set(1,1)}),this.ringMaterial=new fi({map:this.ringTexture,transparent:!0,depthWrite:!0,depthTest:!0,side:wn}),this.ringMesh=new en(this.ringGeometry,this.ringMaterial),this.ringMesh.position.set(0,0,this.distanceFromOrbitCenter),this.ringMesh.rotation.x=-Math.PI*.6,this.orbit.add(this.ringMesh),this.mesh.renderOrder=0,this.ringMesh.renderOrder=1}}loadPositionalAudio(e){const t=new ap;e.add(t),console.log(`Loading positional audio for ${this.name}`),console.log(t),console.log(this.positionalAudio);const n=new cp(t),s=new np,i=this.positionalAudio.refDistance*Math.pow(10,6);s.load(this.positionalAudio.filePath,function(a){n.setBuffer(a),n.setRefDistance(i),n.play()}),this.mesh.add(n)}}class Gx{constructor({scale:e=.01,maxSpeed:t=299792458,currentSpeed:n=0,spaceShipMeshPath:s="space-ship/scene.gltf",acceleration:i=1,maxAcceleration:a=1e7,baseAccelerationIncrease:l=1e6,breakStrength:c=.5,rotationSpeed:o=.5,spaceshipStartingPosition:h=new O(-jn[mi.spaceShipStartingPosition].diameter*Math.pow(10,6),0,jn[mi.spaceShipStartingPosition].distanceFromOrbitCenter*Math.pow(10,6)+jn[mi.spaceShipStartingPosition].diameter*Math.pow(10,6)),fov:f=75,near:p=.001,far:g=Math.pow(10,15),aspect:v=2,maxBank:M=.35,maxPitch:x=.35,tiltSpring:m=5}={}){this.status="loading",this.maxSpeed=t,this.rotationSpeed=o,this.currentSpeed=n,this.acceleration=i,this.maxAcceleration=a,this.baseAccelerationIncrease=l,this.breakStrength=c,this.spaceshipStartingPosition=h,this.pivot=new xt,this.centeredMesh=new xt;const R=new tx;this.ready=new Promise(b=>{this._resolveReady=b}),R.load(s,b=>{this.mesh=b.scene,this.mesh.traverse(D=>{if(!D.isMesh)return;(Array.isArray(D.material)?D.material:[D.material]).forEach(B=>{B&&(B.transparent&&(B.transparent=!1,B.alphaTest=.02),B.depthTest=!0,B.depthWrite=!0,B.side=Ln)})}),this.mesh.scale.set(e,e,e),this.mesh.position.set(0,0,0),this.mesh.rotation.set(.2,0,-.3),this.centeredMesh.add(this.mesh),this.pivot.add(this.centeredMesh),this.mesh.updateWorldMatrix(!0,!0);const I=new On().setFromObject(this.mesh).getCenter(new O);this.mesh.position.sub(I),this.pivot.position.set(h.x,h.y,h.z),this.pivot.lookAt(0,0,0),this.camera=new Qt(f,v,p,g),this.camera.position.set(.3,1,-5),this.camera.position.multiplyScalar(e*2),this.camera.lookAt(0,0,0),this.pivot.add(this.camera),this.maxBank=M,this.maxPitch=x,this.tiltSpring=m,this.status="ready",this.mesh.emissive=new Ve("#d81212"),this.mesh.emissiveIntensity=1,this._resolveReady?.()})}addAxes(e=!0,t=!0){if(e){const n=new jc(2);n.material.depthTest=!1,n.renderOrder=1,this.mesh.add(n)}if(t){const n=new jc(2);n.material.depthTest=!1,n.renderOrder=1,this.pivot.add(n)}}lookAt(e){this.pivot.lookAt(e)}moveTo(e){const t=new O(-jn[e].diameter*Math.pow(10,6),0,jn[e].distanceFromOrbitCenter*Math.pow(10,6)+jn[e].diameter*Math.pow(10,6));this.pivot.position.set(t.x,t.y,t.z),this.pivot.lookAt(0,0,0)}}const ui={},Ws={},Je=new Gx;let Lu=0,Kr=null;const Xs=new O,Iu=new O,Du=new O,Uu=new O,Nu=new O,Wx=mi.colors[mi.spaceBackground],Bt=new Set;window.addEventListener("keydown",r=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(r.key)&&r.preventDefault(),Bt.add(r.code)});window.addEventListener("keyup",r=>Bt.delete(r.code));const Fu=document.getElementById("solar-body");Fu.addEventListener("change",()=>{Je.moveTo(Fu.value)});function Xx(r){const e=r.domElement,t=e.clientWidth,n=e.clientHeight,s=e.width!==t||e.height!==n;return s&&r.setSize(t,n,!1),s}function $x(){const r=document.querySelector("#c"),e=document.getElementById("hud-speed"),t=document.getElementById("hud-dist"),n=document.getElementById("hud-dist-mars"),s=document.getElementById("hud-dist-mercury"),i=document.getElementById("hud-dist-earth-moon"),a=new Su({logarithmicDepthBuffer:!0,antialias:!0,canvas:r}),l=new Ed;l.background=new Ve(Wx);const c=new ca;let o;if(mi.addStars){const L=[];for(let ne=0;ne<1e3;ne++)L.push(na.randFloatSpread(Math.pow(10,15),Math.pow(10,16)),na.randFloatSpread(Math.pow(10,15),Math.pow(10,16)),na.randFloatSpread(Math.pow(10,15),Math.pow(10,16)));const Y=c.load("white-circle.png"),X=new sn;X.setAttribute("position",new zt(L,3));const V=new Tl({map:Y,size:.5});o=new uh(X,V),l.add(o)}const h=new xt;l.add(h),h.add(Je.pivot);const f=new _o(jn.sun);h.add(f.mesh);const p=new ph(16777215,5,Math.pow(10,25),0);p.position.set(0,0,0),l.add(p),Object.keys(jn).forEach(L=>{const Y=new _o(jn[L]);Y.positionalAudio&&(async()=>{await Je.ready;const X=async()=>{const V=Je.camera.context;V&&V.state==="suspended"&&await V.resume(),window.removeEventListener("pointerdown",X),window.removeEventListener("keydown",X)};window.addEventListener("pointerdown",X,{once:!0}),window.addEventListener("keydown",X,{once:!0}),Y.loadPositionalAudio(Je.camera)})(),h.add(Y.orbit),ui[L]=Y}),Object.keys(Yr).forEach(L=>{const Y=new _o(Yr[L]);Y.orbit.position.set(0,0,ui[Yr[L].parentPlanet].distanceFromOrbitCenter),Y.positionalAudio&&(async()=>(await Je.ready,Y.loadPositionalAudio(Je.camera)))(),ui[Yr[L].parentPlanet].orbit.add(Y.orbit),Ws[L]=Y});const g={},v={};let M=null;const x=c.load("white-circle.png"),m=Pi*.04;function R(L=16777215){const Y=new rh({map:x,color:L,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),X=new Td(Y);return X.layers.set(1),X.scale.setScalar(m),l.add(X),X}const b=new O;Object.entries(ui).forEach(([L,Y])=>{const V=R(L==="sun"?16763904:L==="earth"?5614335:L==="mars"?16737860:16777215);Y.mesh.getWorldPosition(b),V.position.copy(b),g[L]=V}),Object.entries(Ws).forEach(([L,Y])=>{const X=R(11184810);Y.mesh.getWorldPosition(b),X.position.copy(b),v[L]=X}),M=R(65416),Je.pivot.getWorldPosition(b),M.position.copy(b);const E=new da(-Pi,Pi,Pi,-Pi,1,1e15);E.up.set(0,0,-1),E.lookAt(new O(0,-1,0)),E.layers.set(1);const I=new Su({canvas:document.getElementById("minimap"),alpha:!0,logarithmicDepthBuffer:!0});I.setSize(200,200),I.setPixelRatio(window.devicePixelRatio);const D=8;function N(){const L=I.getDrawingBufferSize(new Ke),Y=2*Pi/L.y,X=D*Y;Object.values(g).forEach(V=>V.scale.setScalar(X)),Object.values(v).forEach(V=>V.scale.setScalar(X)),M&&M.scale.setScalar(X)}let B=Je.centeredMesh,A=new yn;A.copy(Je.centeredMesh.rotation);function w(L){if(Je.status!=="ready")return requestAnimationFrame(w);L*=.001;const Y=Math.min(.05,L-Lu);if(Lu=L,Xx(a)&&(Je.camera.aspect=r.clientWidth/r.clientHeight,Je.camera.updateProjectionMatrix()),o.rotation.x=L*2e-4,o.rotation.y=L*2e-4,Object.values(ui).forEach(V=>{V.orbit.rotation.y=L*V.orbitRotationSpeed,V.mesh&&(V.mesh.rotation.y=L*V.selfRotationSpeed)}),Object.values(Ws).forEach(V=>{V.orbit.rotation.y=L*V.orbitRotationSpeed,V.mesh&&(V.mesh.rotation.y=L*V.selfRotationSpeed)}),f.mesh&&(f.mesh.rotation.y=L*.1),Je.pivot){const V=Je.pivot.getWorldDirection(new O).normalize(),ne=new O(0,1,0),K=new O;K.add(V),(Bt.has("KeyW")||Bt.has("ArrowUp"))&&Je.currentSpeed<Je.maxSpeed&&(Je.acceleration=Math.min(Je.acceleration+Je.baseAccelerationIncrease*Y,Je.maxAcceleration),Je.currentSpeed+=Je.acceleration*Y),(Bt.has("KeyS")||Bt.has("ArrowDown"))&&(Je.acceleration=0,Je.currentSpeed>0&&(Je.currentSpeed*=1-Je.breakStrength*Y)),Bt.has("KeyR")&&K.add(ne),Bt.has("KeyF")&&K.addScaledVector(ne,-1),K.lengthSq()>0&&(K.normalize().multiplyScalar(Je.currentSpeed*Y),Je.pivot.position.add(K));const oe=(Bt.has("ArrowLeft")|Bt.has("KeyA")?1:0)-(Bt.has("ArrowRight")|Bt.has("KeyD")?1:0);oe&&Je.pivot.rotateOnWorldAxis(ne,oe*Je.rotationSpeed*Y)}if(B){l.updateMatrixWorld(!0),Kr||(Kr=Je.pivot.position.clone());const V=Je.pivot.position,ne=V.distanceTo(Kr);Y>0&&(Je.speedUnitsPerSec=ne/(Y*1e3)),Kr.copy(V),B.getWorldPosition(Xs),f.mesh.getWorldPosition(Iu),ui.mars.mesh.getWorldPosition(Du),ui.mercury.mesh.getWorldPosition(Uu),Ws.earthMoon.mesh.getWorldPosition(Nu);const K=Xs.distanceTo(Iu)/Math.pow(10,6),oe=Xs.distanceTo(Du)/Math.pow(10,6),j=Xs.distanceTo(Uu)/Math.pow(10,6),me=Xs.distanceTo(Nu)/Math.pow(10,6);e&&(e.textContent=Je.speedUnitsPerSec.toFixed(2)),t&&(t.textContent=K.toFixed(0)),n&&(n.textContent=oe.toFixed(0)),s&&(s.textContent=j.toFixed(0)),i&&(i.textContent=me.toFixed(0));const _e=Bt.has("KeyR"),Ie=Bt.has("KeyF"),qe=Bt.has("ArrowLeft")|Bt.has("KeyA"),pt=Bt.has("ArrowRight")|Bt.has("KeyD"),ct=(Number(pt)-Number(qe))*Je.maxBank,J=(Number(Ie)-Number(_e))*Je.maxPitch,ge=Math.min(1,Je.tiltSpring*Y);B.rotation.x+=(A.x+J-B.rotation.x)*ge,B.rotation.z+=(A.z+ct-B.rotation.z)*ge,B.rotation.y=A.y}a.render(l,Je.camera);const X=new O;for(const[V,ne]of Object.entries(ui)){const K=g[V];K&&(ne.mesh.getWorldPosition(X),K.position.copy(X))}for(const[V,ne]of Object.entries(Ws)){const K=v[V];K&&(ne.mesh.getWorldPosition(X),K.position.copy(X))}M&&(Je.pivot.getWorldPosition(X),M.position.copy(X)),Je.pivot&&(Je.pivot.getWorldPosition(M.position),E.position.set(M.position.x,M.position.y+Pi,M.position.z),E.lookAt(M.position)),N(),I.render(l,E),requestAnimationFrame(w)}requestAnimationFrame(w)}$x();
