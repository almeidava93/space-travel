(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const el="179",Nh=0,$l=1,Fh=2,wu=1,Oh=2,$n=3,Zn=0,rn=1,In=2,ui=0,ss=1,ql=2,Yl=3,Kl=4,Bh=5,bi=100,kh=101,zh=102,Hh=103,Vh=104,Gh=200,Wh=201,Xh=202,$h=203,co=204,uo=205,qh=206,Yh=207,Kh=208,jh=209,Zh=210,Jh=211,Qh=212,ef=213,tf=214,ho=0,fo=1,po=2,ls=3,mo=4,go=5,_o=6,xo=7,tl=0,nf=1,sf=2,hi=0,rf=1,af=2,of=3,lf=4,cf=5,uf=6,hf=7,jl="attached",ff="detached",Ru=300,cs=301,us=302,vo=303,Mo=304,ia=306,hs=1e3,ci=1001,Jr=1002,Jt=1003,Cu=1004,Hs=1005,hn=1006,Wr=1007,Yn=1008,Un=1009,Pu=1010,Lu=1011,$s=1012,nl=1013,Pi=1014,Rn=1015,er=1016,il=1017,sl=1018,qs=1020,Iu=35902,Du=1021,Uu=1022,vn=1023,Ys=1026,Ks=1027,rl=1028,al=1029,Nu=1030,ol=1031,ll=1033,Xr=33776,$r=33777,qr=33778,Yr=33779,yo=35840,So=35841,Eo=35842,To=35843,bo=36196,Ao=37492,wo=37496,Ro=37808,Co=37809,Po=37810,Lo=37811,Io=37812,Do=37813,Uo=37814,No=37815,Fo=37816,Oo=37817,Bo=37818,ko=37819,zo=37820,Ho=37821,Kr=36492,Vo=36494,Go=36495,Fu=36283,Wo=36284,Xo=36285,$o=36286,js=2300,Zs=2301,Ma=2302,Zl=2400,Jl=2401,Ql=2402,df=2500,pf=0,Ou=1,qo=2,mf=3200,gf=3201,cl=0,_f=1,li="",Gt="srgb",tn="srgb-linear",Qr="linear",Et="srgb",Oi=7680,ec=519,xf=512,vf=513,Mf=514,Bu=515,yf=516,Sf=517,Ef=518,Tf=519,Yo=35044,tc="300 es",Dn=2e3,ea=2001;class _s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const i=s.indexOf(t);i!==-1&&s.splice(i,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let i=0,a=s.length;i<a;i++)s[i].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nc=1234567;const Gs=Math.PI/180,fs=180/Math.PI;function Cn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[r&255]+Xt[r>>8&255]+Xt[r>>16&255]+Xt[r>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function it(r,e,t){return Math.max(e,Math.min(t,r))}function ul(r,e){return(r%e+e)%e}function bf(r,e,t,n,s){return n+(r-e)*(s-n)/(t-e)}function Af(r,e,t){return r!==e?(t-r)/(e-r):0}function Ws(r,e,t){return(1-t)*r+t*e}function wf(r,e,t,n){return Ws(r,e,1-Math.exp(-t*n))}function Rf(r,e=1){return e-Math.abs(ul(r,e*2)-e)}function Cf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Pf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Lf(r,e){return r+Math.floor(Math.random()*(e-r+1))}function If(r,e){return r+Math.random()*(e-r)}function Df(r){return r*(.5-Math.random())}function Uf(r){r!==void 0&&(nc=r);let e=nc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nf(r){return r*Gs}function Ff(r){return r*fs}function Of(r){return(r&r-1)===0&&r!==0}function Bf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function kf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function zf(r,e,t,n,s){const i=Math.cos,a=Math.sin,l=i(t/2),c=a(t/2),o=i((e+n)/2),h=a((e+n)/2),f=i((e-n)/2),p=a((e-n)/2),g=i((n-e)/2),v=a((n-e)/2);switch(s){case"XYX":r.set(l*h,c*f,c*p,l*o);break;case"YZY":r.set(c*p,l*h,c*f,l*o);break;case"ZXZ":r.set(c*f,c*p,l*h,l*o);break;case"XZX":r.set(l*h,c*v,c*g,l*o);break;case"YXY":r.set(c*g,l*h,c*v,l*o);break;case"ZYZ":r.set(c*v,c*g,l*h,l*o);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Mt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const jr={DEG2RAD:Gs,RAD2DEG:fs,generateUUID:Cn,clamp:it,euclideanModulo:ul,mapLinear:bf,inverseLerp:Af,lerp:Ws,damp:wf,pingpong:Rf,smoothstep:Cf,smootherstep:Pf,randInt:Lf,randFloat:If,randFloatSpread:Df,seededRandom:Uf,degToRad:Nf,radToDeg:Ff,isPowerOfTwo:Of,ceilPowerOfTwo:Bf,floorPowerOfTwo:kf,setQuaternionFromProperEuler:zf,normalize:Mt,denormalize:wn};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*s+e.x,this.y=i*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class di{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,i,a,l){let c=n[s+0],o=n[s+1],h=n[s+2],f=n[s+3];const p=i[a+0],g=i[a+1],v=i[a+2],y=i[a+3];if(l===0){e[t+0]=c,e[t+1]=o,e[t+2]=h,e[t+3]=f;return}if(l===1){e[t+0]=p,e[t+1]=g,e[t+2]=v,e[t+3]=y;return}if(f!==y||c!==p||o!==g||h!==v){let x=1-l;const m=c*p+o*g+h*v+f*y,C=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const L=Math.sqrt(b),D=Math.atan2(L,m*C);x=Math.sin(x*D)/L,l=Math.sin(l*D)/L}const E=l*C;if(c=c*x+p*E,o=o*x+g*E,h=h*x+v*E,f=f*x+y*E,x===1-l){const L=1/Math.sqrt(c*c+o*o+h*h+f*f);c*=L,o*=L,h*=L,f*=L}}e[t]=c,e[t+1]=o,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,i,a){const l=n[s],c=n[s+1],o=n[s+2],h=n[s+3],f=i[a],p=i[a+1],g=i[a+2],v=i[a+3];return e[t]=l*v+h*f+c*g-o*p,e[t+1]=c*v+h*p+o*f-l*g,e[t+2]=o*v+h*g+l*p-c*f,e[t+3]=h*v-l*f-c*p-o*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,i=e._z,a=e._order,l=Math.cos,c=Math.sin,o=l(n/2),h=l(s/2),f=l(i/2),p=c(n/2),g=c(s/2),v=c(i/2);switch(a){case"XYZ":this._x=p*h*f+o*g*v,this._y=o*g*f-p*h*v,this._z=o*h*v+p*g*f,this._w=o*h*f-p*g*v;break;case"YXZ":this._x=p*h*f+o*g*v,this._y=o*g*f-p*h*v,this._z=o*h*v-p*g*f,this._w=o*h*f+p*g*v;break;case"ZXY":this._x=p*h*f-o*g*v,this._y=o*g*f+p*h*v,this._z=o*h*v+p*g*f,this._w=o*h*f-p*g*v;break;case"ZYX":this._x=p*h*f-o*g*v,this._y=o*g*f+p*h*v,this._z=o*h*v-p*g*f,this._w=o*h*f+p*g*v;break;case"YZX":this._x=p*h*f+o*g*v,this._y=o*g*f+p*h*v,this._z=o*h*v-p*g*f,this._w=o*h*f-p*g*v;break;case"XZY":this._x=p*h*f-o*g*v,this._y=o*g*f-p*h*v,this._z=o*h*v+p*g*f,this._w=o*h*f+p*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],i=t[8],a=t[1],l=t[5],c=t[9],o=t[2],h=t[6],f=t[10],p=n+l+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(h-c)*g,this._y=(i-o)*g,this._z=(a-s)*g}else if(n>l&&n>f){const g=2*Math.sqrt(1+n-l-f);this._w=(h-c)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(i+o)/g}else if(l>f){const g=2*Math.sqrt(1+l-n-f);this._w=(i-o)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+f-n-l);this._w=(a-s)/g,this._x=(i+o)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,i=e._z,a=e._w,l=t._x,c=t._y,o=t._z,h=t._w;return this._x=n*h+a*l+s*o-i*c,this._y=s*h+a*c+i*l-n*o,this._z=i*h+a*o+n*c-s*l,this._w=a*h-n*l-s*c-i*o,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,i=this._z,a=this._w;let l=a*e._w+n*e._x+s*e._y+i*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=n,this._y=s,this._z=i,this;const c=1-l*l;if(c<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*s+t*this._y,this._z=g*i+t*this._z,this.normalize(),this}const o=Math.sqrt(c),h=Math.atan2(o,l),f=Math.sin((1-t)*h)/o,p=Math.sin(t*h)/o;return this._w=a*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=i*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ic.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ic.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*s,this.y=i[1]*t+i[4]*n+i[7]*s,this.z=i[2]*t+i[5]*n+i[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*s+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*s+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*s+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*s+i[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,i=e.x,a=e.y,l=e.z,c=e.w,o=2*(a*s-l*n),h=2*(l*t-i*s),f=2*(i*n-a*t);return this.x=t+c*o+a*f-l*h,this.y=n+c*h+l*o-i*f,this.z=s+c*f+i*h-a*o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*s,this.y=i[1]*t+i[5]*n+i[9]*s,this.z=i[2]*t+i[6]*n+i[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,i=e.z,a=t.x,l=t.y,c=t.z;return this.x=s*c-i*l,this.y=i*a-n*c,this.z=n*l-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ya.copy(this).projectOnVector(e),this.sub(ya)}reflect(e){return this.sub(ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ya=new O,ic=new di;class Je{constructor(e,t,n,s,i,a,l,c,o){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,i,a,l,c,o)}set(e,t,n,s,i,a,l,c,o){const h=this.elements;return h[0]=e,h[1]=s,h[2]=l,h[3]=t,h[4]=i,h[5]=c,h[6]=n,h[7]=a,h[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,i=this.elements,a=n[0],l=n[3],c=n[6],o=n[1],h=n[4],f=n[7],p=n[2],g=n[5],v=n[8],y=s[0],x=s[3],m=s[6],C=s[1],b=s[4],E=s[7],L=s[2],D=s[5],U=s[8];return i[0]=a*y+l*C+c*L,i[3]=a*x+l*b+c*D,i[6]=a*m+l*E+c*U,i[1]=o*y+h*C+f*L,i[4]=o*x+h*b+f*D,i[7]=o*m+h*E+f*U,i[2]=p*y+g*C+v*L,i[5]=p*x+g*b+v*D,i[8]=p*m+g*E+v*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],i=e[3],a=e[4],l=e[5],c=e[6],o=e[7],h=e[8];return t*a*h-t*l*o-n*i*h+n*l*c+s*i*o-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],i=e[3],a=e[4],l=e[5],c=e[6],o=e[7],h=e[8],f=h*a-l*o,p=l*c-h*i,g=o*i-a*c,v=t*f+n*p+s*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=f*y,e[1]=(s*o-h*n)*y,e[2]=(l*n-s*a)*y,e[3]=p*y,e[4]=(h*t-s*c)*y,e[5]=(s*i-l*t)*y,e[6]=g*y,e[7]=(n*c-o*t)*y,e[8]=(a*t-n*i)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,i,a,l){const c=Math.cos(i),o=Math.sin(i);return this.set(n*c,n*o,-n*(c*a+o*l)+a+e,-s*o,s*c,-s*(-o*a+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Sa.makeScale(e,t)),this}rotate(e){return this.premultiply(Sa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sa=new Je;function ku(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Js(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Hf(){const r=Js("canvas");return r.style.display="block",r}const sc={};function rs(r){r in sc||(sc[r]=!0,console.warn(r))}function Vf(r,e,t){return new Promise(function(n,s){function i(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(i,t);break;default:n()}}setTimeout(i,t)})}const rc=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ac=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gf(){const r={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(s,i,a){return this.enabled===!1||i===a||!i||!a||(this.spaces[i].transfer===Et&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[i].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[i].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Et&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b))),s},workingToColorSpace:function(s,i){return this.convert(s,this.workingColorSpace,i)},colorSpaceToWorking:function(s,i){return this.convert(s,i,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===li?Qr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,i=this.workingColorSpace){return s.fromArray(this.spaces[i].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,i,a){return s.copy(this.spaces[i].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,i){return rs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(s,i)},toWorkingColorSpace:function(s,i){return rs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(s,i)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[tn]:{primaries:e,whitePoint:n,transfer:Qr,toXYZ:rc,fromXYZ:ac,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:rc,fromXYZ:ac,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),r}const lt=Gf();function jn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function as(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Bi;class Wf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bi===void 0&&(Bi=Js("canvas")),Bi.width=e.width,Bi.height=e.height;const s=Bi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Js("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),i=s.data;for(let a=0;a<i.length;a++)i[a]=jn(i[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xf=0;class hl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Cn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let i;if(Array.isArray(s)){i=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?i.push(Ea(s[a].image)):i.push(Ea(s[a]))}else i=Ea(s);n.url=i}return t||(e.images[this.uuid]=n),n}}function Ea(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Wf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $f=0;const Ta=new O;class kt extends _s{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=ci,s=ci,i=hn,a=Yn,l=vn,c=Un,o=kt.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Cn(),this.name="",this.source=new hl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=i,this.minFilter=a,this.anisotropy=o,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ta).x}get height(){return this.source.getSize(Ta).y}get depth(){return this.source.getSize(Ta).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ru)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hs:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case Jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hs:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case Jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Ru;kt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,i;const c=e.elements,o=c[0],h=c[4],f=c[8],p=c[1],g=c[5],v=c[9],y=c[2],x=c[6],m=c[10];if(Math.abs(h-p)<.01&&Math.abs(f-y)<.01&&Math.abs(v-x)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+y)<.1&&Math.abs(v+x)<.1&&Math.abs(o+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(o+1)/2,E=(g+1)/2,L=(m+1)/2,D=(h+p)/4,U=(f+y)/4,k=(v+x)/4;return b>E&&b>L?b<.01?(n=0,s=.707106781,i=.707106781):(n=Math.sqrt(b),s=D/n,i=U/n):E>L?E<.01?(n=.707106781,s=0,i=.707106781):(s=Math.sqrt(E),n=D/s,i=k/s):L<.01?(n=.707106781,s=.707106781,i=0):(i=Math.sqrt(L),n=U/i,s=k/i),this.set(n,s,i,t),this}let C=Math.sqrt((x-v)*(x-v)+(f-y)*(f-y)+(p-h)*(p-h));return Math.abs(C)<.001&&(C=1),this.x=(x-v)/C,this.y=(f-y)/C,this.z=(p-h)/C,this.w=Math.acos((o+g+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qf extends _s{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const s={width:e,height:t,depth:n.depth},i=new kt(s);this.textures=[];const a=n.count;for(let l=0;l<a;l++)this.textures[l]=i.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,i=this.textures.length;s<i;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new hl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends qf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class zu extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yf extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nn{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const i=n.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=i.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(i,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fr.copy(n.boundingBox)),fr.applyMatrix4(e.matrixWorld),this.union(fr)}const s=e.children;for(let i=0,a=s.length;i<a;i++)this.expandByObject(s[i],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),dr.subVectors(this.max,ws),ki.subVectors(e.a,ws),zi.subVectors(e.b,ws),Hi.subVectors(e.c,ws),ei.subVectors(zi,ki),ti.subVectors(Hi,zi),mi.subVectors(ki,Hi);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-mi.z,mi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,mi.z,0,-mi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-mi.y,mi.x,0];return!ba(t,ki,zi,Hi,dr)||(t=[1,0,0,0,1,0,0,0,1],!ba(t,ki,zi,Hi,dr))?!1:(pr.crossVectors(ei,ti),t=[pr.x,pr.y,pr.z],ba(t,ki,zi,Hi,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zn=[new O,new O,new O,new O,new O,new O,new O,new O],Tn=new O,fr=new Nn,ki=new O,zi=new O,Hi=new O,ei=new O,ti=new O,mi=new O,ws=new O,dr=new O,pr=new O,gi=new O;function ba(r,e,t,n,s){for(let i=0,a=r.length-3;i<=a;i+=3){gi.fromArray(r,i);const l=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),c=e.dot(gi),o=t.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(c,o,h),Math.min(c,o,h))>l)return!1}return!0}const Kf=new Nn,Rs=new O,Aa=new O;class Fn{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Kf.setFromPoints(e).getCenter(n);let s=0;for(let i=0,a=e.length;i<a;i++)s=Math.max(s,n.distanceToSquared(e[i]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);const t=Rs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Rs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(Aa)),this.expandByPoint(Rs.copy(e.center).sub(Aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Hn=new O,wa=new O,mr=new O,ni=new O,Ra=new O,gr=new O,Ca=new O;class sa{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){wa.copy(e).add(t).multiplyScalar(.5),mr.copy(t).sub(e).normalize(),ni.copy(this.origin).sub(wa);const i=e.distanceTo(t)*.5,a=-this.direction.dot(mr),l=ni.dot(this.direction),c=-ni.dot(mr),o=ni.lengthSq(),h=Math.abs(1-a*a);let f,p,g,v;if(h>0)if(f=a*c-l,p=a*l-c,v=i*h,f>=0)if(p>=-v)if(p<=v){const y=1/h;f*=y,p*=y,g=f*(f+a*p+2*l)+p*(a*f+p+2*c)+o}else p=i,f=Math.max(0,-(a*p+l)),g=-f*f+p*(p+2*c)+o;else p=-i,f=Math.max(0,-(a*p+l)),g=-f*f+p*(p+2*c)+o;else p<=-v?(f=Math.max(0,-(-a*i+l)),p=f>0?-i:Math.min(Math.max(-i,-c),i),g=-f*f+p*(p+2*c)+o):p<=v?(f=0,p=Math.min(Math.max(-i,-c),i),g=p*(p+2*c)+o):(f=Math.max(0,-(a*i+l)),p=f>0?i:Math.min(Math.max(-i,-c),i),g=-f*f+p*(p+2*c)+o);else p=a>0?-i:i,f=Math.max(0,-(a*p+l)),g=-f*f+p*(p+2*c)+o;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(wa).addScaledVector(mr,p),g}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,i=e.radius*e.radius;if(s>i)return null;const a=Math.sqrt(i-s),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,i,a,l,c;const o=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return o>=0?(n=(e.min.x-p.x)*o,s=(e.max.x-p.x)*o):(n=(e.max.x-p.x)*o,s=(e.min.x-p.x)*o),h>=0?(i=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(i=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||i>s||((i>n||isNaN(n))&&(n=i),(a<s||isNaN(s))&&(s=a),f>=0?(l=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(l=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,s,i){Ra.subVectors(t,e),gr.subVectors(n,e),Ca.crossVectors(Ra,gr);let a=this.direction.dot(Ca),l;if(a>0){if(s)return null;l=1}else if(a<0)l=-1,a=-a;else return null;ni.subVectors(this.origin,e);const c=l*this.direction.dot(gr.crossVectors(ni,gr));if(c<0)return null;const o=l*this.direction.dot(Ra.cross(ni));if(o<0||c+o>a)return null;const h=-l*ni.dot(Ca);return h<0?null:this.at(h/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,n,s,i,a,l,c,o,h,f,p,g,v,y,x){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,i,a,l,c,o,h,f,p,g,v,y,x)}set(e,t,n,s,i,a,l,c,o,h,f,p,g,v,y,x){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=i,m[5]=a,m[9]=l,m[13]=c,m[2]=o,m[6]=h,m[10]=f,m[14]=p,m[3]=g,m[7]=v,m[11]=y,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Vi.setFromMatrixColumn(e,0).length(),i=1/Vi.setFromMatrixColumn(e,1).length(),a=1/Vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,i=e.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(s),o=Math.sin(s),h=Math.cos(i),f=Math.sin(i);if(e.order==="XYZ"){const p=a*h,g=a*f,v=l*h,y=l*f;t[0]=c*h,t[4]=-c*f,t[8]=o,t[1]=g+v*o,t[5]=p-y*o,t[9]=-l*c,t[2]=y-p*o,t[6]=v+g*o,t[10]=a*c}else if(e.order==="YXZ"){const p=c*h,g=c*f,v=o*h,y=o*f;t[0]=p+y*l,t[4]=v*l-g,t[8]=a*o,t[1]=a*f,t[5]=a*h,t[9]=-l,t[2]=g*l-v,t[6]=y+p*l,t[10]=a*c}else if(e.order==="ZXY"){const p=c*h,g=c*f,v=o*h,y=o*f;t[0]=p-y*l,t[4]=-a*f,t[8]=v+g*l,t[1]=g+v*l,t[5]=a*h,t[9]=y-p*l,t[2]=-a*o,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){const p=a*h,g=a*f,v=l*h,y=l*f;t[0]=c*h,t[4]=v*o-g,t[8]=p*o+y,t[1]=c*f,t[5]=y*o+p,t[9]=g*o-v,t[2]=-o,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){const p=a*c,g=a*o,v=l*c,y=l*o;t[0]=c*h,t[4]=y-p*f,t[8]=v*f+g,t[1]=f,t[5]=a*h,t[9]=-l*h,t[2]=-o*h,t[6]=g*f+v,t[10]=p-y*f}else if(e.order==="XZY"){const p=a*c,g=a*o,v=l*c,y=l*o;t[0]=c*h,t[4]=-f,t[8]=o*h,t[1]=p*f+y,t[5]=a*h,t[9]=g*f-v,t[2]=v*f-g,t[6]=l*h,t[10]=y*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jf,e,Zf)}lookAt(e,t,n){const s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),ii.crossVectors(n,cn),ii.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),ii.crossVectors(n,cn)),ii.normalize(),_r.crossVectors(cn,ii),s[0]=ii.x,s[4]=_r.x,s[8]=cn.x,s[1]=ii.y,s[5]=_r.y,s[9]=cn.y,s[2]=ii.z,s[6]=_r.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,i=this.elements,a=n[0],l=n[4],c=n[8],o=n[12],h=n[1],f=n[5],p=n[9],g=n[13],v=n[2],y=n[6],x=n[10],m=n[14],C=n[3],b=n[7],E=n[11],L=n[15],D=s[0],U=s[4],k=s[8],A=s[12],w=s[1],N=s[5],ne=s[9],K=s[13],Y=s[2],re=s[6],W=s[10],ee=s[14],X=s[3],ie=s[7],de=s[11],Ee=s[15];return i[0]=a*D+l*w+c*Y+o*X,i[4]=a*U+l*N+c*re+o*ie,i[8]=a*k+l*ne+c*W+o*de,i[12]=a*A+l*K+c*ee+o*Ee,i[1]=h*D+f*w+p*Y+g*X,i[5]=h*U+f*N+p*re+g*ie,i[9]=h*k+f*ne+p*W+g*de,i[13]=h*A+f*K+p*ee+g*Ee,i[2]=v*D+y*w+x*Y+m*X,i[6]=v*U+y*N+x*re+m*ie,i[10]=v*k+y*ne+x*W+m*de,i[14]=v*A+y*K+x*ee+m*Ee,i[3]=C*D+b*w+E*Y+L*X,i[7]=C*U+b*N+E*re+L*ie,i[11]=C*k+b*ne+E*W+L*de,i[15]=C*A+b*K+E*ee+L*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],i=e[12],a=e[1],l=e[5],c=e[9],o=e[13],h=e[2],f=e[6],p=e[10],g=e[14],v=e[3],y=e[7],x=e[11],m=e[15];return v*(+i*c*f-s*o*f-i*l*p+n*o*p+s*l*g-n*c*g)+y*(+t*c*g-t*o*p+i*a*p-s*a*g+s*o*h-i*c*h)+x*(+t*o*f-t*l*g-i*a*f+n*a*g+i*l*h-n*o*h)+m*(-s*l*h-t*c*f+t*l*p+s*a*f-n*a*p+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],i=e[3],a=e[4],l=e[5],c=e[6],o=e[7],h=e[8],f=e[9],p=e[10],g=e[11],v=e[12],y=e[13],x=e[14],m=e[15],C=f*x*o-y*p*o+y*c*g-l*x*g-f*c*m+l*p*m,b=v*p*o-h*x*o-v*c*g+a*x*g+h*c*m-a*p*m,E=h*y*o-v*f*o+v*l*g-a*y*g-h*l*m+a*f*m,L=v*f*c-h*y*c-v*l*p+a*y*p+h*l*x-a*f*x,D=t*C+n*b+s*E+i*L;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/D;return e[0]=C*U,e[1]=(y*p*i-f*x*i-y*s*g+n*x*g+f*s*m-n*p*m)*U,e[2]=(l*x*i-y*c*i+y*s*o-n*x*o-l*s*m+n*c*m)*U,e[3]=(f*c*i-l*p*i-f*s*o+n*p*o+l*s*g-n*c*g)*U,e[4]=b*U,e[5]=(h*x*i-v*p*i+v*s*g-t*x*g-h*s*m+t*p*m)*U,e[6]=(v*c*i-a*x*i-v*s*o+t*x*o+a*s*m-t*c*m)*U,e[7]=(a*p*i-h*c*i+h*s*o-t*p*o-a*s*g+t*c*g)*U,e[8]=E*U,e[9]=(v*f*i-h*y*i-v*n*g+t*y*g+h*n*m-t*f*m)*U,e[10]=(a*y*i-v*l*i+v*n*o-t*y*o-a*n*m+t*l*m)*U,e[11]=(h*l*i-a*f*i-h*n*o+t*f*o+a*n*g-t*l*g)*U,e[12]=L*U,e[13]=(h*y*s-v*f*s+v*n*p-t*y*p-h*n*x+t*f*x)*U,e[14]=(v*l*s-a*y*s-v*n*c+t*y*c+a*n*x-t*l*x)*U,e[15]=(a*f*s-h*l*s+h*n*c-t*f*c-a*n*p+t*l*p)*U,this}scale(e){const t=this.elements,n=e.x,s=e.y,i=e.z;return t[0]*=n,t[4]*=s,t[8]*=i,t[1]*=n,t[5]*=s,t[9]*=i,t[2]*=n,t[6]*=s,t[10]*=i,t[3]*=n,t[7]*=s,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),i=1-n,a=e.x,l=e.y,c=e.z,o=i*a,h=i*l;return this.set(o*a+n,o*l-s*c,o*c+s*l,0,o*l+s*c,h*l+n,h*c-s*a,0,o*c-s*l,h*c+s*a,i*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,i,a){return this.set(1,n,i,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,i=t._x,a=t._y,l=t._z,c=t._w,o=i+i,h=a+a,f=l+l,p=i*o,g=i*h,v=i*f,y=a*h,x=a*f,m=l*f,C=c*o,b=c*h,E=c*f,L=n.x,D=n.y,U=n.z;return s[0]=(1-(y+m))*L,s[1]=(g+E)*L,s[2]=(v-b)*L,s[3]=0,s[4]=(g-E)*D,s[5]=(1-(p+m))*D,s[6]=(x+C)*D,s[7]=0,s[8]=(v+b)*U,s[9]=(x-C)*U,s[10]=(1-(p+y))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let i=Vi.set(s[0],s[1],s[2]).length();const a=Vi.set(s[4],s[5],s[6]).length(),l=Vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(i=-i),e.x=s[12],e.y=s[13],e.z=s[14],bn.copy(this);const o=1/i,h=1/a,f=1/l;return bn.elements[0]*=o,bn.elements[1]*=o,bn.elements[2]*=o,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,t.setFromRotationMatrix(bn),n.x=i,n.y=a,n.z=l,this}makePerspective(e,t,n,s,i,a,l=Dn,c=!1){const o=this.elements,h=2*i/(t-e),f=2*i/(n-s),p=(t+e)/(t-e),g=(n+s)/(n-s);let v,y;if(c)v=i/(a-i),y=a*i/(a-i);else if(l===Dn)v=-(a+i)/(a-i),y=-2*a*i/(a-i);else if(l===ea)v=-a/(a-i),y=-a*i/(a-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return o[0]=h,o[4]=0,o[8]=p,o[12]=0,o[1]=0,o[5]=f,o[9]=g,o[13]=0,o[2]=0,o[6]=0,o[10]=v,o[14]=y,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,s,i,a,l=Dn,c=!1){const o=this.elements,h=2/(t-e),f=2/(n-s),p=-(t+e)/(t-e),g=-(n+s)/(n-s);let v,y;if(c)v=1/(a-i),y=a/(a-i);else if(l===Dn)v=-2/(a-i),y=-(a+i)/(a-i);else if(l===ea)v=-1/(a-i),y=-i/(a-i);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return o[0]=h,o[4]=0,o[8]=0,o[12]=p,o[1]=0,o[5]=f,o[9]=0,o[13]=g,o[2]=0,o[6]=0,o[10]=v,o[14]=y,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vi=new O,bn=new Qe,jf=new O(0,0,0),Zf=new O(1,1,1),ii=new O,_r=new O,cn=new O,oc=new Qe,lc=new di;class yn{constructor(e=0,t=0,n=0,s=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,i=s[0],a=s[4],l=s[8],c=s[1],o=s[5],h=s[9],f=s[2],p=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(p,o),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,o)):(this._y=Math.atan2(-f,i),this._z=0);break;case"ZXY":this._x=Math.asin(it(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,o)):(this._y=0,this._z=Math.atan2(c,i));break;case"ZYX":this._y=Math.asin(-it(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,i)):(this._x=0,this._z=Math.atan2(-a,o));break;case"YZX":this._z=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,o),this._y=Math.atan2(-f,i)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,o),this._y=Math.atan2(l,i)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lc.setFromEuler(this),this.setFromQuaternion(lc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class Hu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jf=0;const cc=new O,Gi=new di,Vn=new Qe,xr=new O,Cs=new O,Qf=new O,ed=new di,uc=new O(1,0,0),hc=new O(0,1,0),fc=new O(0,0,1),dc={type:"added"},td={type:"removed"},Wi={type:"childadded",child:null},Pa={type:"childremoved",child:null};class Tt extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new O,t=new yn,n=new di,s=new O(1,1,1);function i(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(i),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Je}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.premultiply(Gi),this}rotateX(e){return this.rotateOnAxis(uc,e)}rotateY(e){return this.rotateOnAxis(hc,e)}rotateZ(e){return this.rotateOnAxis(fc,e)}translateOnAxis(e,t){return cc.copy(e).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uc,e)}translateY(e){return this.translateOnAxis(hc,e)}translateZ(e){return this.translateOnAxis(fc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xr.copy(e):xr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Cs,xr,this.up):Vn.lookAt(xr,Cs,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(Vn),this.quaternion.premultiply(Gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dc),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(td),Pa.child=e,this.dispatchEvent(Pa),Pa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dc),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let i=0,a=s.length;i<a;i++)s[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,Qf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,ed,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let i=0,a=s.length;i<a;i++)s[i].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function i(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=i(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let o=0,h=c.length;o<h;o++){const f=c[o];i(e.shapes,f)}else i(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,o=this.material.length;c<o;c++)l.push(i(e.materials,this.material[c]));s.material=l}else s.material=i(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];s.animations.push(i(e.animations,c))}}if(t){const l=a(e.geometries),c=a(e.materials),o=a(e.textures),h=a(e.images),f=a(e.shapes),p=a(e.skeletons),g=a(e.animations),v=a(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),o.length>0&&(n.textures=o),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(l){const c=[];for(const o in l){const h=l[o];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Tt.DEFAULT_UP=new O(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new O,Gn=new O,La=new O,Wn=new O,Xi=new O,$i=new O,pc=new O,Ia=new O,Da=new O,Ua=new O,Na=new dt,Fa=new dt,Oa=new dt;class xn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),An.subVectors(e,t),s.cross(An);const i=s.lengthSq();return i>0?s.multiplyScalar(1/Math.sqrt(i)):s.set(0,0,0)}static getBarycoord(e,t,n,s,i){An.subVectors(s,t),Gn.subVectors(n,t),La.subVectors(e,t);const a=An.dot(An),l=An.dot(Gn),c=An.dot(La),o=Gn.dot(Gn),h=Gn.dot(La),f=a*o-l*l;if(f===0)return i.set(0,0,0),null;const p=1/f,g=(o*c-l*h)*p,v=(a*h-l*c)*p;return i.set(1-g-v,v,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,s,i,a,l,c){return this.getBarycoord(e,t,n,s,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(i,Wn.x),c.addScaledVector(a,Wn.y),c.addScaledVector(l,Wn.z),c)}static getInterpolatedAttribute(e,t,n,s,i,a){return Na.setScalar(0),Fa.setScalar(0),Oa.setScalar(0),Na.fromBufferAttribute(e,t),Fa.fromBufferAttribute(e,n),Oa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Na,i.x),a.addScaledVector(Fa,i.y),a.addScaledVector(Oa,i.z),a}static isFrontFacing(e,t,n,s){return An.subVectors(n,t),Gn.subVectors(e,t),An.cross(Gn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),An.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,i){return xn.getInterpolation(e,this.a,this.b,this.c,t,n,s,i)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,i=this.c;let a,l;Xi.subVectors(s,n),$i.subVectors(i,n),Ia.subVectors(e,n);const c=Xi.dot(Ia),o=$i.dot(Ia);if(c<=0&&o<=0)return t.copy(n);Da.subVectors(e,s);const h=Xi.dot(Da),f=$i.dot(Da);if(h>=0&&f<=h)return t.copy(s);const p=c*f-h*o;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Xi,a);Ua.subVectors(e,i);const g=Xi.dot(Ua),v=$i.dot(Ua);if(v>=0&&g<=v)return t.copy(i);const y=g*o-c*v;if(y<=0&&o>=0&&v<=0)return l=o/(o-v),t.copy(n).addScaledVector($i,l);const x=h*v-g*f;if(x<=0&&f-h>=0&&g-v>=0)return pc.subVectors(i,s),l=(f-h)/(f-h+(g-v)),t.copy(s).addScaledVector(pc,l);const m=1/(x+y+p);return a=y*m,l=p*m,t.copy(n).addScaledVector(Xi,a).addScaledVector($i,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},vr={h:0,s:0,l:0};function Ba(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=ul(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,a=2*n-i;this.r=Ba(a,i,e+1/3),this.g=Ba(a,i,e),this.b=Ba(a,i,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=s[1],a=i.length;if(a===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=Vu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return lt.workingToColorSpace($t.copy(this),e),Math.round(it($t.r*255,0,255))*65536+Math.round(it($t.g*255,0,255))*256+Math.round(it($t.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace($t.copy(this),t);const n=$t.r,s=$t.g,i=$t.b,a=Math.max(n,s,i),l=Math.min(n,s,i);let c,o;const h=(l+a)/2;if(l===a)c=0,o=0;else{const f=a-l;switch(o=h<=.5?f/(a+l):f/(2-a-l),a){case n:c=(s-i)/f+(s<i?6:0);break;case s:c=(i-n)/f+2;break;case i:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=o,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Gt){lt.workingToColorSpace($t.copy(this),e);const t=$t.r,n=$t.g,s=$t.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(vr);const n=Ws(si.h,vr.h,t),s=Ws(si.s,vr.s,t),i=Ws(si.l,vr.l,t);return this.setHSL(n,s,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*s,this.g=i[1]*t+i[4]*n+i[7]*s,this.b=i[2]*t+i[5]*n+i[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Ve;Ve.NAMES=Vu;let nd=0;class Mn extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Cn(),this.name="",this.type="Material",this.blending=ss,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=co,this.blendDst=uo,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==co&&(n.blendSrc=this.blendSrc),this.blendDst!==uo&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ec&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(i){const a=[];for(const l in i){const c=i[l];delete c.metadata,a.push(c)}return a}if(t){const i=s(e.textures),a=s(e.images);i.length>0&&(n.textures=i),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let i=0;i!==s;++i)n[i]=t[i].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wi extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new O,Mr=new Ke;let id=0;class Qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:id++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yo,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,i=this.itemSize;s<i;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.applyMatrix3(e),this.setXY(t,Mr.x,Mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yo&&(e.usage=this.usage),e}}class Gu extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wu extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class en extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let sd=0;const gn=new Qe,ka=new Tt,qi=new O,un=new Nn,Ps=new Nn,Ot=new O;class an extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ku(e)?Wu:Gu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new Je().getNormalMatrix(e);n.applyNormalMatrix(i),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return ka.lookAt(e),ka.updateMatrix(),this.applyMatrix4(ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,i=e.length;s<i;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new en(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const i=e[s];t.setXYZ(s,i.x,i.y,i.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const i=t[n];un.setFromBufferAttribute(i),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const l=t[i];Ps.setFromBufferAttribute(l),this.morphTargetsRelative?(Ot.addVectors(un.min,Ps.min),un.expandByPoint(Ot),Ot.addVectors(un.max,Ps.max),un.expandByPoint(Ot)):(un.expandByPoint(Ps.min),un.expandByPoint(Ps.max))}un.getCenter(n);let s=0;for(let i=0,a=e.count;i<a;i++)Ot.fromBufferAttribute(e,i),s=Math.max(s,n.distanceToSquared(Ot));if(t)for(let i=0,a=t.length;i<a;i++){const l=t[i],c=this.morphTargetsRelative;for(let o=0,h=l.count;o<h;o++)Ot.fromBufferAttribute(l,o),c&&(qi.fromBufferAttribute(e,o),Ot.add(qi)),s=Math.max(s,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,i=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),l=[],c=[];for(let k=0;k<n.count;k++)l[k]=new O,c[k]=new O;const o=new O,h=new O,f=new O,p=new Ke,g=new Ke,v=new Ke,y=new O,x=new O;function m(k,A,w){o.fromBufferAttribute(n,k),h.fromBufferAttribute(n,A),f.fromBufferAttribute(n,w),p.fromBufferAttribute(i,k),g.fromBufferAttribute(i,A),v.fromBufferAttribute(i,w),h.sub(o),f.sub(o),g.sub(p),v.sub(p);const N=1/(g.x*v.y-v.x*g.y);isFinite(N)&&(y.copy(h).multiplyScalar(v.y).addScaledVector(f,-g.y).multiplyScalar(N),x.copy(f).multiplyScalar(g.x).addScaledVector(h,-v.x).multiplyScalar(N),l[k].add(y),l[A].add(y),l[w].add(y),c[k].add(x),c[A].add(x),c[w].add(x))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let k=0,A=C.length;k<A;++k){const w=C[k],N=w.start,ne=w.count;for(let K=N,Y=N+ne;K<Y;K+=3)m(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const b=new O,E=new O,L=new O,D=new O;function U(k){L.fromBufferAttribute(s,k),D.copy(L);const A=l[k];b.copy(A),b.sub(L.multiplyScalar(L.dot(A))).normalize(),E.crossVectors(D,A);const N=E.dot(c[k])<0?-1:1;a.setXYZW(k,b.x,b.y,b.z,N)}for(let k=0,A=C.length;k<A;++k){const w=C[k],N=w.start,ne=w.count;for(let K=N,Y=N+ne;K<Y;K+=3)U(e.getX(K+0)),U(e.getX(K+1)),U(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);const s=new O,i=new O,a=new O,l=new O,c=new O,o=new O,h=new O,f=new O;if(e)for(let p=0,g=e.count;p<g;p+=3){const v=e.getX(p+0),y=e.getX(p+1),x=e.getX(p+2);s.fromBufferAttribute(t,v),i.fromBufferAttribute(t,y),a.fromBufferAttribute(t,x),h.subVectors(a,i),f.subVectors(s,i),h.cross(f),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,y),o.fromBufferAttribute(n,x),l.add(h),c.add(h),o.add(h),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(x,o.x,o.y,o.z)}else for(let p=0,g=t.count;p<g;p+=3)s.fromBufferAttribute(t,p+0),i.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,i),f.subVectors(s,i),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(l,c){const o=l.array,h=l.itemSize,f=l.normalized,p=new o.constructor(c.length*h);let g=0,v=0;for(let y=0,x=c.length;y<x;y++){l.isInterleavedBufferAttribute?g=c[y]*l.data.stride+l.offset:g=c[y]*h;for(let m=0;m<h;m++)p[v++]=o[g++]}return new Qt(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new an,n=this.index.array,s=this.attributes;for(const l in s){const c=s[l],o=e(c,n);t.setAttribute(l,o)}const i=this.morphAttributes;for(const l in i){const c=[],o=i[l];for(let h=0,f=o.length;h<f;h++){const p=o[h],g=e(p,n);c.push(g)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const o=a[l];t.addGroup(o.start,o.count,o.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const o in c)c[o]!==void 0&&(e[o]=c[o]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const o=n[c];e.data.attributes[c]=o.toJSON(e.data)}const s={};let i=!1;for(const c in this.morphAttributes){const o=this.morphAttributes[c],h=[];for(let f=0,p=o.length;f<p;f++){const g=o[f];h.push(g.toJSON(e.data))}h.length>0&&(s[c]=h,i=!0)}i&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const o in s){const h=s[o];this.setAttribute(o,h.clone(t))}const i=e.morphAttributes;for(const o in i){const h=[],f=i[o];for(let p=0,g=f.length;p<g;p++)h.push(f[p].clone(t));this.morphAttributes[o]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let o=0,h=a.length;o<h;o++){const f=a[o];this.addGroup(f.start,f.count,f.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mc=new Qe,_i=new sa,yr=new Fn,gc=new O,Sr=new O,Er=new O,Tr=new O,za=new O,br=new O,_c=new O,Ar=new O;class sn extends Tt{constructor(e=new an,t=new wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=s.length;i<a;i++){const l=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=i}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(i&&l){br.set(0,0,0);for(let c=0,o=i.length;c<o;c++){const h=l[c],f=i[c];h!==0&&(za.fromBufferAttribute(f,e),a?br.addScaledVector(za,h):br.addScaledVector(za.sub(t),h))}t.add(br)}return t}raycast(e,t){const n=this.geometry,s=this.material,i=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(i),_i.copy(e.ray).recast(e.near),!(yr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(yr,gc)===null||_i.origin.distanceToSquared(gc)>(e.far-e.near)**2))&&(mc.copy(i).invert(),_i.copy(e.ray).applyMatrix4(mc),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,n){let s;const i=this.geometry,a=this.material,l=i.index,c=i.attributes.position,o=i.attributes.uv,h=i.attributes.uv1,f=i.attributes.normal,p=i.groups,g=i.drawRange;if(l!==null)if(Array.isArray(a))for(let v=0,y=p.length;v<y;v++){const x=p[v],m=a[x.materialIndex],C=Math.max(x.start,g.start),b=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let E=C,L=b;E<L;E+=3){const D=l.getX(E),U=l.getX(E+1),k=l.getX(E+2);s=wr(this,m,e,n,o,h,f,D,U,k),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const v=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let x=v,m=y;x<m;x+=3){const C=l.getX(x),b=l.getX(x+1),E=l.getX(x+2);s=wr(this,a,e,n,o,h,f,C,b,E),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,y=p.length;v<y;v++){const x=p[v],m=a[x.materialIndex],C=Math.max(x.start,g.start),b=Math.min(c.count,Math.min(x.start+x.count,g.start+g.count));for(let E=C,L=b;E<L;E+=3){const D=E,U=E+1,k=E+2;s=wr(this,m,e,n,o,h,f,D,U,k),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const v=Math.max(0,g.start),y=Math.min(c.count,g.start+g.count);for(let x=v,m=y;x<m;x+=3){const C=x,b=x+1,E=x+2;s=wr(this,a,e,n,o,h,f,C,b,E),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function rd(r,e,t,n,s,i,a,l){let c;if(e.side===rn?c=n.intersectTriangle(a,i,s,!0,l):c=n.intersectTriangle(s,i,a,e.side===Zn,l),c===null)return null;Ar.copy(l),Ar.applyMatrix4(r.matrixWorld);const o=t.ray.origin.distanceTo(Ar);return o<t.near||o>t.far?null:{distance:o,point:Ar.clone(),object:r}}function wr(r,e,t,n,s,i,a,l,c,o){r.getVertexPosition(l,Sr),r.getVertexPosition(c,Er),r.getVertexPosition(o,Tr);const h=rd(r,e,t,n,Sr,Er,Tr,_c);if(h){const f=new O;xn.getBarycoord(_c,Sr,Er,Tr,f),s&&(h.uv=xn.getInterpolatedAttribute(s,l,c,o,f,new Ke)),i&&(h.uv1=xn.getInterpolatedAttribute(i,l,c,o,f,new Ke)),a&&(h.normal=xn.getInterpolatedAttribute(a,l,c,o,f,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:l,b:c,c:o,normal:new O,materialIndex:0};xn.getNormal(Sr,Er,Tr,p.normal),h.face=p,h.barycoord=f}return h}class tr extends an{constructor(e=1,t=1,n=1,s=1,i=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:i,depthSegments:a};const l=this;s=Math.floor(s),i=Math.floor(i),a=Math.floor(a);const c=[],o=[],h=[],f=[];let p=0,g=0;v("z","y","x",-1,-1,n,t,e,a,i,0),v("z","y","x",1,-1,n,t,-e,a,i,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,i,4),v("x","y","z",-1,-1,e,t,-n,s,i,5),this.setIndex(c),this.setAttribute("position",new en(o,3)),this.setAttribute("normal",new en(h,3)),this.setAttribute("uv",new en(f,2));function v(y,x,m,C,b,E,L,D,U,k,A){const w=E/U,N=L/k,ne=E/2,K=L/2,Y=D/2,re=U+1,W=k+1;let ee=0,X=0;const ie=new O;for(let de=0;de<W;de++){const Ee=de*N-K;for(let Xe=0;Xe<re;Xe++){const pt=Xe*w-ne;ie[y]=pt*C,ie[x]=Ee*b,ie[m]=Y,o.push(ie.x,ie.y,ie.z),ie[y]=0,ie[x]=0,ie[m]=D>0?1:-1,h.push(ie.x,ie.y,ie.z),f.push(Xe/U),f.push(1-de/k),ee+=1}}for(let de=0;de<k;de++)for(let Ee=0;Ee<U;Ee++){const Xe=p+Ee+re*de,pt=p+Ee+re*(de+1),ct=p+(Ee+1)+re*(de+1),Z=p+(Ee+1)+re*de;c.push(Xe,pt,Z),c.push(pt,ct,Z),X+=6}l.addGroup(g,X,A),g+=X,p+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ds(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const s=r[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Zt(r){const e={};for(let t=0;t<r.length;t++){const n=ds(r[t]);for(const s in n)e[s]=n[s]}return e}function ad(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Xu(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const od={clone:ds,merge:Zt};var ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ld,this.fragmentShader=cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=ad(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $u extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new O,xc=new Ke,vc=new Ke;class qt extends $u{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,xc,vc),t.subVectors(vc,xc)}setViewOffset(e,t,n,s,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,i=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,o=a.fullHeight;i+=a.offsetX*s/c,t-=a.offsetY*n/o,s*=a.width/c,n*=a.height/o}const l=this.filmOffset;l!==0&&(i+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yi=-90,Ki=1;class ud extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qt(Yi,Ki,e,t);s.layers=this.layers,this.add(s);const i=new qt(Yi,Ki,e,t);i.layers=this.layers,this.add(i);const a=new qt(Yi,Ki,e,t);a.layers=this.layers,this.add(a);const l=new qt(Yi,Ki,e,t);l.layers=this.layers,this.add(l);const c=new qt(Yi,Ki,e,t);c.layers=this.layers,this.add(c);const o=new qt(Yi,Ki,e,t);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,i,a,l,c]=t;for(const o of t)this.remove(o);if(e===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const o of t)this.add(o),o.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,a,l,c,o,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,i),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,l),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,o),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,p,g),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class qu extends kt{constructor(e=[],t=cs,n,s,i,a,l,c,o,h){super(e,t,n,s,i,a,l,c,o,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hd extends Li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new qu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new tr(5,5,5),i=new fi({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:ui});i.uniforms.tEquirect.value=t;const a=new sn(s,i),l=t.minFilter;return t.minFilter===Yn&&(t.minFilter=hn),new ud(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const i=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(i)}}class Ri extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fd={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,i=null,a=null;const l=this._targetRay,c=this._grip,o=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(o&&e.hand){a=!0;for(const y of e.hand.values()){const x=t.getJointPose(y,n),m=this._getHandJoint(o,y);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}const h=o.joints["index-finger-tip"],f=o.joints["thumb-tip"],p=h.position.distanceTo(f.position),g=.02,v=.005;o.inputState.pinching&&p>g+v?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!o.inputState.pinching&&p<=g-v&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&i!==null&&(s=i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(fd)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=i!==null),o!==null&&(o.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ri;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class dd extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Yu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yo,this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,i=this.stride;s<i;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jt=new O;class Qs{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=i,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[s+i])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Qs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[s+i])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ku extends Mn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ji;const Ls=new O,Zi=new O,Ji=new O,Qi=new Ke,Is=new Ke,ju=new Qe,Rr=new O,Ds=new O,Cr=new O,Mc=new Ke,Va=new Ke,yc=new Ke;class pd extends Tt{constructor(e=new Ku){if(super(),this.isSprite=!0,this.type="Sprite",ji===void 0){ji=new an;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Yu(t,5);ji.setIndex([0,1,2,0,2,3]),ji.setAttribute("position",new Qs(n,3,0,!1)),ji.setAttribute("uv",new Qs(n,2,3,!1))}this.geometry=ji,this.material=e,this.center=new Ke(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zi.setFromMatrixScale(this.matrixWorld),ju.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ji.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zi.multiplyScalar(-Ji.z);const n=this.material.rotation;let s,i;n!==0&&(i=Math.cos(n),s=Math.sin(n));const a=this.center;Pr(Rr.set(-.5,-.5,0),Ji,a,Zi,s,i),Pr(Ds.set(.5,-.5,0),Ji,a,Zi,s,i),Pr(Cr.set(.5,.5,0),Ji,a,Zi,s,i),Mc.set(0,0),Va.set(1,0),yc.set(1,1);let l=e.ray.intersectTriangle(Rr,Ds,Cr,!1,Ls);if(l===null&&(Pr(Ds.set(-.5,.5,0),Ji,a,Zi,s,i),Va.set(0,1),l=e.ray.intersectTriangle(Rr,Cr,Ds,!1,Ls),l===null))return;const c=e.ray.origin.distanceTo(Ls);c<e.near||c>e.far||t.push({distance:c,point:Ls.clone(),uv:xn.getInterpolation(Ls,Rr,Ds,Cr,Mc,Va,yc,new Ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Pr(r,e,t,n,s,i){Qi.subVectors(r,t).addScalar(.5).multiply(n),s!==void 0?(Is.x=i*Qi.x-s*Qi.y,Is.y=s*Qi.x+i*Qi.y):Is.copy(Qi),r.copy(e),r.x+=Is.x,r.y+=Is.y,r.applyMatrix4(ju)}const Sc=new O,Ec=new dt,Tc=new dt,md=new O,bc=new Qe,Lr=new O,Ga=new Fn,Ac=new Qe,Wa=new sa;class gd extends sn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jl,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Nn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Lr),this.boundingBox.expandByPoint(Lr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Lr),this.boundingSphere.expandByPoint(Lr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ga.copy(this.boundingSphere),Ga.applyMatrix4(s),e.ray.intersectsSphere(Ga)!==!1&&(Ac.copy(s).invert(),Wa.copy(e.ray).applyMatrix4(Ac),!(this.boundingBox!==null&&Wa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const i=1/e.manhattanLength();i!==1/0?e.multiplyScalar(i):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===jl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ff?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Ec.fromBufferAttribute(s.attributes.skinIndex,e),Tc.fromBufferAttribute(s.attributes.skinWeight,e),Sc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let i=0;i<4;i++){const a=Tc.getComponent(i);if(a!==0){const l=Ec.getComponent(i);bc.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(md.copy(Sc).applyMatrix4(bc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Zu extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ju extends kt{constructor(e=null,t=1,n=1,s,i,a,l,c,o=Jt,h=Jt,f,p){super(null,a,l,c,o,h,s,i,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wc=new Qe,_d=new Qe;class fl{constructor(e=[],t=[]){this.uuid=Cn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let i=0,a=e.length;i<a;i++){const l=e[i]?e[i].matrixWorld:_d;wc.multiplyMatrices(l,t[i]),wc.toArray(n,i*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new fl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ju(t,e,e,vn,Rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const i=e.bones[n];let a=t[i];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",i),a=new Zu),this.bones.push(a),this.boneInverses.push(new Qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,i=t.length;s<i;s++){const a=t[s];e.bones.push(a.uuid);const l=n[s];e.boneInverses.push(l.toArray())}return e}}class Ko extends Qt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const es=new Qe,Rc=new Qe,Ir=[],Cc=new Nn,xd=new Qe,Us=new sn,Ns=new Fn;class vd extends sn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ko(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,es),Cc.copy(e.boundingBox).applyMatrix4(es),this.boundingBox.union(Cc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,es),Ns.copy(e.boundingSphere).applyMatrix4(es),this.boundingSphere.union(Ns)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,i=n.length+1,a=e*i+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Us.geometry=this.geometry,Us.material=this.material,Us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ns.copy(this.boundingSphere),Ns.applyMatrix4(n),e.ray.intersectsSphere(Ns)!==!1))for(let i=0;i<s;i++){this.getMatrixAt(i,es),Rc.multiplyMatrices(n,es),Us.matrixWorld=Rc,Us.raycast(e,Ir);for(let a=0,l=Ir.length;a<l;a++){const c=Ir[a];c.instanceId=i,c.object=this,t.push(c)}Ir.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ko(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ju(new Float32Array(s*this.count),s,this.count,rl,Rn));const i=this.morphTexture.source.data.data;let a=0;for(let o=0;o<n.length;o++)a+=n[o];const l=this.geometry.morphTargetsRelative?1:1-a,c=s*e;i[c]=l,i.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Xa=new O,Md=new O,yd=new Je;class Ei{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Xa.subVectors(n,t).cross(Md.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Xa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/s;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yd.getNormalMatrix(e),s=this.coplanarPoint(Xa).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new Fn,Sd=new Ke(.5,.5),Dr=new O;class dl{constructor(e=new Ei,t=new Ei,n=new Ei,s=new Ei,i=new Ei,a=new Ei){this.planes=[e,t,n,s,i,a]}set(e,t,n,s,i,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(i),l[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Dn,n=!1){const s=this.planes,i=e.elements,a=i[0],l=i[1],c=i[2],o=i[3],h=i[4],f=i[5],p=i[6],g=i[7],v=i[8],y=i[9],x=i[10],m=i[11],C=i[12],b=i[13],E=i[14],L=i[15];if(s[0].setComponents(o-a,g-h,m-v,L-C).normalize(),s[1].setComponents(o+a,g+h,m+v,L+C).normalize(),s[2].setComponents(o+l,g+f,m+y,L+b).normalize(),s[3].setComponents(o-l,g-f,m-y,L-b).normalize(),n)s[4].setComponents(c,p,x,E).normalize(),s[5].setComponents(o-c,g-p,m-x,L-E).normalize();else if(s[4].setComponents(o-c,g-p,m-x,L-E).normalize(),t===Dn)s[5].setComponents(o+c,g+p,m+x,L+E).normalize();else if(t===ea)s[5].setComponents(c,p,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){xi.center.set(0,0,0);const t=Sd.distanceTo(e.center);return xi.radius=.7071067811865476+t,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Dr.x=s.normal.x>0?e.max.x:e.min.x,Dr.y=s.normal.y>0?e.max.y:e.min.y,Dr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pl extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ta=new O,na=new O,Pc=new Qe,Fs=new sa,Ur=new Fn,$a=new O,Lc=new O;class ml extends Tt{constructor(e=new an,t=new pl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,i=t.count;s<i;s++)ta.fromBufferAttribute(t,s-1),na.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ta.distanceTo(na);e.setAttribute("lineDistance",new en(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(s),Ur.radius+=i,e.ray.intersectsSphere(Ur)===!1)return;Pc.copy(s).invert(),Fs.copy(e.ray).applyMatrix4(Pc);const l=i/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,o=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){const g=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let y=g,x=v-1;y<x;y+=o){const m=h.getX(y),C=h.getX(y+1),b=Nr(this,e,Fs,c,m,C,y);b&&t.push(b)}if(this.isLineLoop){const y=h.getX(v-1),x=h.getX(g),m=Nr(this,e,Fs,c,y,x,v-1);m&&t.push(m)}}else{const g=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let y=g,x=v-1;y<x;y+=o){const m=Nr(this,e,Fs,c,y,y+1,y);m&&t.push(m)}if(this.isLineLoop){const y=Nr(this,e,Fs,c,v-1,g,v-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=s.length;i<a;i++){const l=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=i}}}}}function Nr(r,e,t,n,s,i,a){const l=r.geometry.attributes.position;if(ta.fromBufferAttribute(l,s),na.fromBufferAttribute(l,i),t.distanceSqToSegment(ta,na,$a,Lc)>n)return;$a.applyMatrix4(r.matrixWorld);const o=e.ray.origin.distanceTo($a);if(!(o<e.near||o>e.far))return{distance:o,point:Lc.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Ic=new O,Dc=new O;class Qu extends ml{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,i=t.count;s<i;s+=2)Ic.fromBufferAttribute(t,s),Dc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ic.distanceTo(Dc);e.setAttribute("lineDistance",new en(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ed extends ml{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class gl extends Mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Uc=new Qe,jo=new sa,Fr=new Fn,Or=new O;class eh extends Tt{constructor(e=new an,t=new gl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(s),Fr.radius+=i,e.ray.intersectsSphere(Fr)===!1)return;Uc.copy(s).invert(),jo.copy(e.ray).applyMatrix4(Uc);const l=i/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,o=n.index,f=n.attributes.position;if(o!==null){const p=Math.max(0,a.start),g=Math.min(o.count,a.start+a.count);for(let v=p,y=g;v<y;v++){const x=o.getX(v);Or.fromBufferAttribute(f,x),Nc(Or,x,c,s,e,t,this)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=p,y=g;v<y;v++)Or.fromBufferAttribute(f,v),Nc(Or,v,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=s.length;i<a;i++){const l=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=i}}}}}function Nc(r,e,t,n,s,i,a){const l=jo.distanceSqToPoint(r);if(l<t){const c=new O;jo.closestPointToPoint(r,c),c.applyMatrix4(n);const o=s.ray.origin.distanceTo(c);if(o<s.near||o>s.far)return;i.push({distance:o,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class th extends kt{constructor(e,t,n=Pi,s,i,a,l=Jt,c=Jt,o,h=Ys,f=1){if(h!==Ys&&h!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:f};super(p,s,i,a,l,c,h,n,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ra extends an{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const i=e/2,a=t/2,l=Math.floor(n),c=Math.floor(s),o=l+1,h=c+1,f=e/l,p=t/c,g=[],v=[],y=[],x=[];for(let m=0;m<h;m++){const C=m*p-a;for(let b=0;b<o;b++){const E=b*f-i;v.push(E,-C,0),y.push(0,0,1),x.push(b/l),x.push(1-m/c)}}for(let m=0;m<c;m++)for(let C=0;C<l;C++){const b=C+o*m,E=C+o*(m+1),L=C+1+o*(m+1),D=C+1+o*m;g.push(b,E,D),g.push(E,L,D)}this.setIndex(g),this.setAttribute("position",new en(v,3)),this.setAttribute("normal",new en(y,3)),this.setAttribute("uv",new en(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.widthSegments,e.heightSegments)}}class _l extends an{constructor(e=1,t=32,n=16,s=0,i=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:i,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+l,Math.PI);let o=0;const h=[],f=new O,p=new O,g=[],v=[],y=[],x=[];for(let m=0;m<=n;m++){const C=[],b=m/n;let E=0;m===0&&a===0?E=.5/t:m===n&&c===Math.PI&&(E=-.5/t);for(let L=0;L<=t;L++){const D=L/t;f.x=-e*Math.cos(s+D*i)*Math.sin(a+b*l),f.y=e*Math.cos(a+b*l),f.z=e*Math.sin(s+D*i)*Math.sin(a+b*l),v.push(f.x,f.y,f.z),p.copy(f).normalize(),y.push(p.x,p.y,p.z),x.push(D+E,1-b),C.push(o++)}h.push(C)}for(let m=0;m<n;m++)for(let C=0;C<t;C++){const b=h[m][C+1],E=h[m][C],L=h[m+1][C],D=h[m+1][C+1];(m!==0||a>0)&&g.push(b,E,D),(m!==n-1||c<Math.PI)&&g.push(E,L,D)}this.setIndex(g),this.setAttribute("position",new en(v,3)),this.setAttribute("normal",new en(y,3)),this.setAttribute("uv",new en(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _l(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xl extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cl,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class On extends xl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Td extends Mn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ve(16777215),this.specular=new Ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cl,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bd extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ad extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Br(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function wd(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Rd(r){function e(s,i){return r[s]-r[i]}const t=r.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Fc(r,e,t){const n=r.length,s=new r.constructor(n);for(let i=0,a=0;a!==n;++i){const l=t[i]*e;for(let c=0;c!==e;++c)s[a++]=r[l+c]}return s}function nh(r,e,t,n){let s=1,i=r[0];for(;i!==void 0&&i[n]===void 0;)i=r[s++];if(i===void 0)return;let a=i[n];if(a!==void 0)if(Array.isArray(a))do a=i[n],a!==void 0&&(e.push(i.time),t.push(...a)),i=r[s++];while(i!==void 0);else if(a.toArray!==void 0)do a=i[n],a!==void 0&&(e.push(i.time),a.toArray(t,t.length)),i=r[s++];while(i!==void 0);else do a=i[n],a!==void 0&&(e.push(i.time),t.push(a)),i=r[s++];while(i!==void 0)}class nr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],i=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<i)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(i=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=i)){const l=t[1];e<l&&(n=2,i=l);for(let c=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=i,i=t[--n-1],e>=i)break e}a=n,n=0;break t}break n}for(;n<a;){const l=n+a>>>1;e<t[l]?a=l:n=l+1}if(s=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,s)}return this.interpolate_(n,i,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,i=e*s;for(let a=0;a!==s;++a)t[a]=n[i+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Cd extends nr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zl,endingEnd:Zl}}intervalChanged_(e,t,n){const s=this.parameterPositions;let i=e-2,a=e+1,l=s[i],c=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case Jl:i=e,l=2*t-n;break;case Ql:i=s.length-2,l=t+s[i]-s[i+1];break;default:i=e,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Jl:a=e,c=2*n-t;break;case Ql:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}const o=(n-t)*.5,h=this.valueSize;this._weightPrev=o/(t-l),this._weightNext=o/(c-n),this._offsetPrev=i*h,this._offsetNext=a*h}interpolate_(e,t,n,s){const i=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,h=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,g=this._weightNext,v=(n-t)/(s-t),y=v*v,x=y*v,m=-p*x+2*p*y-p*v,C=(1+p)*x+(-1.5-2*p)*y+(-.5+p)*v+1,b=(-1-g)*x+(1.5+g)*y+.5*v,E=g*x-g*y;for(let L=0;L!==l;++L)i[L]=m*a[h+L]+C*a[o+L]+b*a[c+L]+E*a[f+L];return i}}class Pd extends nr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const i=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,h=(n-t)/(s-t),f=1-h;for(let p=0;p!==l;++p)i[p]=a[o+p]*f+a[c+p]*h;return i}}class Ld extends nr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Pn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Br(t,this.TimeBufferType),this.values=Br(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Br(e.times,Array),values:Br(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ld(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case js:t=this.InterpolantFactoryMethodDiscrete;break;case Zs:t=this.InterpolantFactoryMethodLinear;break;case Ma:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return js;case this.InterpolantFactoryMethodLinear:return Zs;case this.InterpolantFactoryMethodSmooth:return Ma}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let i=0,a=s-1;for(;i!==s&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==s){i>=a&&(a=Math.max(a,1),i=a-1);const l=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*l,a*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,i=n.length;i===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==i;l++){const c=n[l];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,c,a),e=!1;break}a=c}if(s!==void 0&&wd(s))for(let l=0,c=s.length;l!==c;++l){const o=s[l];if(isNaN(o)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,o),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ma,i=e.length-1;let a=1;for(let l=1;l<i;++l){let c=!1;const o=e[l],h=e[l+1];if(o!==h&&(l!==1||o!==e[0]))if(s)c=!0;else{const f=l*n,p=f-n,g=f+n;for(let v=0;v!==n;++v){const y=t[f+v];if(y!==t[p+v]||y!==t[g+v]){c=!0;break}}}if(c){if(l!==a){e[a]=e[l];const f=l*n,p=a*n;for(let g=0;g!==n;++g)t[p+g]=t[f+g]}++a}}if(i>0){e[a]=e[i];for(let l=i*n,c=a*n,o=0;o!==n;++o)t[c+o]=t[l+o];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Zs;class xs extends Pn{constructor(e,t,n){super(e,t,n)}}xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=js;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;class ih extends Pn{constructor(e,t,n,s){super(e,t,n,s)}}ih.prototype.ValueTypeName="color";class ps extends Pn{constructor(e,t,n,s){super(e,t,n,s)}}ps.prototype.ValueTypeName="number";class Id extends nr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const i=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(n-t)/(s-t);let o=e*l;for(let h=o+l;o!==h;o+=4)di.slerpFlat(i,0,a,o-l,a,o,c);return i}}class ms extends Pn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Id(this.times,this.values,this.getValueSize(),e)}}ms.prototype.ValueTypeName="quaternion";ms.prototype.InterpolantFactoryMethodSmooth=void 0;class vs extends Pn{constructor(e,t,n){super(e,t,n)}}vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=js;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;class gs extends Pn{constructor(e,t,n,s){super(e,t,n,s)}}gs.prototype.ValueTypeName="vector";class Dd{constructor(e="",t=-1,n=[],s=df){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Cn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,l=n.length;a!==l;++a)t.push(Nd(n[a]).scale(s));const i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let i=0,a=n.length;i!==a;++i)t.push(Pn.toJSON(n[i]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const i=t.length,a=[];for(let l=0;l<i;l++){let c=[],o=[];c.push((l+i-1)%i,l,(l+1)%i),o.push(0,1,0);const h=Rd(c);c=Fc(c,1,h),o=Fc(o,1,h),!s&&c[0]===0&&(c.push(i),o.push(o[0])),a.push(new ps(".morphTargetInfluences["+t[l].name+"]",c,o).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},i=/^([\w-]*?)([\d]+)$/;for(let l=0,c=e.length;l<c;l++){const o=e[l],h=o.name.match(i);if(h&&h.length>1){const f=h[1];let p=s[f];p||(s[f]=p=[]),p.push(o)}}const a=[];for(const l in s)a.push(this.CreateFromMorphTargetSequence(l,s[l],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,p,g,v,y){if(g.length!==0){const x=[],m=[];nh(g,x,m,v),x.length!==0&&y.push(new f(p,x,m))}},s=[],i=e.name||"default",a=e.fps||30,l=e.blendMode;let c=e.length||-1;const o=e.hierarchy||[];for(let f=0;f<o.length;f++){const p=o[f].keys;if(!(!p||p.length===0))if(p[0].morphTargets){const g={};let v;for(v=0;v<p.length;v++)if(p[v].morphTargets)for(let y=0;y<p[v].morphTargets.length;y++)g[p[v].morphTargets[y]]=-1;for(const y in g){const x=[],m=[];for(let C=0;C!==p[v].morphTargets.length;++C){const b=p[v];x.push(b.time),m.push(b.morphTarget===y?1:0)}s.push(new ps(".morphTargetInfluence["+y+"]",x,m))}c=g.length*a}else{const g=".bones["+t[f].name+"]";n(gs,g+".position",p,"pos",s),n(ms,g+".quaternion",p,"rot",s),n(gs,g+".scale",p,"scl",s)}}return s.length===0?null:new this(i,c,s,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const i=this.tracks[n];t=Math.max(t,i.times[i.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ud(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ps;case"vector":case"vector2":case"vector3":case"vector4":return gs;case"color":return ih;case"quaternion":return ms;case"bool":case"boolean":return xs;case"string":return vs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Nd(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ud(r.type);if(r.times===void 0){const t=[],n=[];nh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Kn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Fd{constructor(e,t,n){const s=this;let i=!1,a=0,l=0,c;const o=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){l++,i===!1&&s.onStart!==void 0&&s.onStart(h,a,l),i=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,l),a===l&&(i=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return o.push(h,f),this},this.removeHandler=function(h){const f=o.indexOf(h);return f!==-1&&o.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=o.length;f<p;f+=2){const g=o[f],v=o[f+1];if(g.global&&(g.lastIndex=0),g.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Od=new Fd;class Ms{constructor(e){this.manager=e!==void 0?e:Od,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,i){n.load(e,s,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ms.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xn={};class Bd extends Error{constructor(e,t){super(e),this.response=t}}class sh extends Ms{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=Kn.get(`file:${e}`);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(Xn[e]!==void 0){Xn[e].push({onLoad:t,onProgress:n,onError:s});return}Xn[e]=[],Xn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),l=this.mimeType,c=this.responseType;fetch(a).then(o=>{if(o.status===200||o.status===0){if(o.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||o.body===void 0||o.body.getReader===void 0)return o;const h=Xn[e],f=o.body.getReader(),p=o.headers.get("X-File-Size")||o.headers.get("Content-Length"),g=p?parseInt(p):0,v=g!==0;let y=0;const x=new ReadableStream({start(m){C();function C(){f.read().then(({done:b,value:E})=>{if(b)m.close();else{y+=E.byteLength;const L=new ProgressEvent("progress",{lengthComputable:v,loaded:y,total:g});for(let D=0,U=h.length;D<U;D++){const k=h[D];k.onProgress&&k.onProgress(L)}m.enqueue(E),C()}},b=>{m.error(b)})}}});return new Response(x)}else throw new Bd(`fetch for "${o.url}" responded with ${o.status}: ${o.statusText}`,o)}).then(o=>{switch(c){case"arraybuffer":return o.arrayBuffer();case"blob":return o.blob();case"document":return o.text().then(h=>new DOMParser().parseFromString(h,l));case"json":return o.json();default:if(l==="")return o.text();{const f=/charset="?([^;"\s]*)"?/i.exec(l),p=f&&f[1]?f[1].toLowerCase():void 0,g=new TextDecoder(p);return o.arrayBuffer().then(v=>g.decode(v))}}}).then(o=>{Kn.add(`file:${e}`,o);const h=Xn[e];delete Xn[e];for(let f=0,p=h.length;f<p;f++){const g=h[f];g.onLoad&&g.onLoad(o)}}).catch(o=>{const h=Xn[e];if(h===void 0)throw this.manager.itemError(e),o;delete Xn[e];for(let f=0,p=h.length;f<p;f++){const g=h[f];g.onError&&g.onError(o)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ts=new WeakMap;class kd extends Ms{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,a=Kn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let f=ts.get(a);f===void 0&&(f=[],ts.set(a,f)),f.push({onLoad:t,onError:s})}return a}const l=Js("img");function c(){h(),t&&t(this);const f=ts.get(this)||[];for(let p=0;p<f.length;p++){const g=f[p];g.onLoad&&g.onLoad(this)}ts.delete(this),i.manager.itemEnd(e)}function o(f){h(),s&&s(f),Kn.remove(`image:${e}`);const p=ts.get(this)||[];for(let g=0;g<p.length;g++){const v=p[g];v.onError&&v.onError(f)}ts.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function h(){l.removeEventListener("load",c,!1),l.removeEventListener("error",o,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",o,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),Kn.add(`image:${e}`,l),i.manager.itemStart(e),l.src=e,l}}class vl extends Ms{constructor(e){super(e)}load(e,t,n,s){const i=new kt,a=new kd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){i.image=l,i.needsUpdate=!0,t!==void 0&&t(i)},n,s),i}}class Ml extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const qa=new Qe,Oc=new O,Bc=new O;class yl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dl,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Oc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oc),Bc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bc),t.updateMatrixWorld(),qa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class zd extends yl{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=fs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||s!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=s,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Hd extends Ml{constructor(e,t,n=0,s=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=n,this.angle=s,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new zd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const kc=new Qe,Os=new O,Ya=new O;class Vd extends yl{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),Os.setFromMatrixPosition(e.matrixWorld),n.position.copy(Os),Ya.copy(n.position),Ya.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ya),n.updateMatrixWorld(),s.makeTranslation(-Os.x,-Os.y,-Os.z),kc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc,n.coordinateSystem,n.reversedDepth)}}class rh extends Ml{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class aa extends $u{constructor(e=-1,t=1,n=1,s=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let i=n-e,a=n+e,l=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const o=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=o*this.view.offsetX,a=i+o*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(i,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Gd extends yl{constructor(){super(new aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wd extends Ml{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Gd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Xs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ka=new WeakMap;class Xd extends Ms{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,a=Kn.get(`image-bitmap:${e}`);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(o=>{if(Ka.has(a)===!0)s&&s(Ka.get(a)),i.manager.itemError(e),i.manager.itemEnd(e);else return t&&t(o),i.manager.itemEnd(e),o});return}return setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader,l.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,l).then(function(o){return o.blob()}).then(function(o){return createImageBitmap(o,Object.assign(i.options,{colorSpaceConversion:"none"}))}).then(function(o){return Kn.add(`image-bitmap:${e}`,o),t&&t(o),i.manager.itemEnd(e),o}).catch(function(o){s&&s(o),Ka.set(c,o),Kn.remove(`image-bitmap:${e}`),i.manager.itemError(e),i.manager.itemEnd(e)});Kn.add(`image-bitmap:${e}`,c),i.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class $d extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Sl="\\[\\]\\.:\\/",qd=new RegExp("["+Sl+"]","g"),El="[^"+Sl+"]",Yd="[^"+Sl.replace("\\.","")+"]",Kd=/((?:WC+[\/:])*)/.source.replace("WC",El),jd=/(WCOD+)?/.source.replace("WCOD",Yd),Zd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",El),Jd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",El),Qd=new RegExp("^"+Kd+jd+Zd+Jd+"$"),ep=["material","materials","bones","map"];class tp{constructor(e,t,n){const s=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,i=n.length;s!==i;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class yt{constructor(e,t,n){this.path=t,this.parsedPath=n||yt.parseTrackName(t),this.node=yt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new yt.Composite(e,t,n):new yt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qd,"")}static parseTrackName(e){const t=Qd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const i=n.nodeName.substring(s+1);ep.indexOf(i)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=i)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(i){for(let a=0;a<i.length;a++){const l=i[a];if(l.name===t||l.uuid===t)return l;const c=n(l.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,i=n.length;s!==i;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,i=n.length;s!==i;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,i=n.length;s!==i;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,i=n.length;s!==i;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let i=t.propertyIndex;if(e||(e=yt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let o=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===o){o=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(o!==void 0){if(e[o]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[o]}}const a=e[s];if(a===void 0){const o=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+o+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(i!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[i]!==void 0&&(i=e.morphTargetDictionary[i])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=i}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}yt.Composite=tp;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class zc extends Qu{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new an;s.setAttribute("position",new en(t,3)),s.setAttribute("color",new en(n,3));const i=new pl({vertexColors:!0,toneMapped:!1});super(s,i),this.type="AxesHelper"}setColors(e,t,n){const s=new Ve,i=this.geometry.attributes.color.array;return s.set(e),s.toArray(i,0),s.toArray(i,3),s.set(t),s.toArray(i,6),s.toArray(i,9),s.set(n),s.toArray(i,12),s.toArray(i,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function Hc(r,e,t,n){const s=np(n);switch(t){case Du:return r*e;case rl:return r*e/s.components*s.byteLength;case al:return r*e/s.components*s.byteLength;case Nu:return r*e*2/s.components*s.byteLength;case ol:return r*e*2/s.components*s.byteLength;case Uu:return r*e*3/s.components*s.byteLength;case vn:return r*e*4/s.components*s.byteLength;case ll:return r*e*4/s.components*s.byteLength;case Xr:case $r:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case qr:case Yr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case So:case To:return Math.max(r,16)*Math.max(e,8)/4;case yo:case Eo:return Math.max(r,8)*Math.max(e,8)/2;case bo:case Ao:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case wo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Co:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Po:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Io:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Do:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case No:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Fo:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Bo:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ko:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case zo:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ho:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Kr:case Vo:case Go:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Fu:case Wo:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Xo:case $o:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function np(r){switch(r){case Un:case Pu:return{byteLength:1,components:1};case $s:case Lu:case er:return{byteLength:2,components:1};case il:case sl:return{byteLength:2,components:4};case Pi:case nl:case Rn:return{byteLength:4,components:1};case Iu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:el}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=el);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ah(){let r=null,e=!1,t=null,n=null;function s(i,a){t(i,a),n=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){r=i}}}function ip(r){const e=new WeakMap;function t(l,c){const o=l.array,h=l.usage,f=o.byteLength,p=r.createBuffer();r.bindBuffer(c,p),r.bufferData(c,o,h),l.onUploadCallback();let g;if(o instanceof Float32Array)g=r.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)g=r.HALF_FLOAT;else if(o instanceof Uint16Array)l.isFloat16BufferAttribute?g=r.HALF_FLOAT:g=r.UNSIGNED_SHORT;else if(o instanceof Int16Array)g=r.SHORT;else if(o instanceof Uint32Array)g=r.UNSIGNED_INT;else if(o instanceof Int32Array)g=r.INT;else if(o instanceof Int8Array)g=r.BYTE;else if(o instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:p,type:g,bytesPerElement:o.BYTES_PER_ELEMENT,version:l.version,size:f}}function n(l,c,o){const h=c.array,f=c.updateRanges;if(r.bindBuffer(o,l),f.length===0)r.bufferSubData(o,0,h);else{f.sort((g,v)=>g.start-v.start);let p=0;for(let g=1;g<f.length;g++){const v=f[p],y=f[g];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++p,f[p]=y)}f.length=p+1;for(let g=0,v=f.length;g<v;g++){const y=f[g];r.bufferSubData(o,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function i(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(r.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const o=e.get(l);if(o===void 0)e.set(l,t(l,c));else if(o.version<l.version){if(o.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(o.buffer,l,c),o.version=l.version}}return{get:s,remove:i,update:a}}var sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rp=`#ifdef USE_ALPHAHASH
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
#endif`,ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,up=`#ifdef USE_AOMAP
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
#endif`,hp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fp=`#ifdef USE_BATCHING
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
#endif`,dp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_p=`#ifdef USE_IRIDESCENCE
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
#endif`,xp=`#ifdef USE_BUMPMAP
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
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wp=`#define PI 3.141592653589793
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
} // validated`,Rp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cp=`vec3 transformedNormal = objectNormal;
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
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Up="gl_FragColor = linearToOutputTexel( gl_FragColor );",Np=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bp=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xp=`#ifdef USE_GRADIENTMAP
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
}`,$p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kp=`uniform bool receiveShadow;
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
#endif`,jp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tm=`PhysicalMaterial material;
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
#endif`,nm=`struct PhysicalMaterial {
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
}`,im=`
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
#endif`,sm=`#if defined( RE_IndirectDiffuse )
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
#endif`,rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,am=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,om=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dm=`#if defined( USE_POINTS_UV )
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
#endif`,pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_m=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`#ifdef USE_MORPHTARGETS
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
#endif`,Mm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ym=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Am=`#ifdef USE_NORMALMAP
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
#endif`,wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Im=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vm=`float getShadowMask() {
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
}`,Gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$m=`#ifdef USE_SKINNING
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
#endif`,qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zm=`#ifdef USE_TRANSMISSION
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
#endif`,Jm=`#ifdef USE_TRANSMISSION
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sg=`uniform sampler2D t2D;
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`#ifdef ENVMAP_TYPE_CUBE
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
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`#include <common>
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
}`,ug=`#if DEPTH_PACKING == 3200
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
}`,hg=`#define DISTANCE
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
}`,fg=`#define DISTANCE
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
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`uniform float scale;
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
}`,gg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,xg=`uniform vec3 diffuse;
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
}`,vg=`#define LAMBERT
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
}`,Mg=`#define LAMBERT
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
}`,yg=`#define MATCAP
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
}`,Sg=`#define MATCAP
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
}`,Eg=`#define NORMAL
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
}`,Tg=`#define NORMAL
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
}`,bg=`#define PHONG
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
}`,Ag=`#define PHONG
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
}`,wg=`#define STANDARD
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
}`,Rg=`#define STANDARD
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
}`,Cg=`#define TOON
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
}`,Pg=`#define TOON
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
}`,Lg=`uniform float size;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Dg=`#include <common>
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
}`,Ug=`uniform vec3 color;
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
}`,Ng=`uniform float rotation;
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
}`,Fg=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:sp,alphahash_pars_fragment:rp,alphamap_fragment:ap,alphamap_pars_fragment:op,alphatest_fragment:lp,alphatest_pars_fragment:cp,aomap_fragment:up,aomap_pars_fragment:hp,batching_pars_vertex:fp,batching_vertex:dp,begin_vertex:pp,beginnormal_vertex:mp,bsdfs:gp,iridescence_fragment:_p,bumpmap_pars_fragment:xp,clipping_planes_fragment:vp,clipping_planes_pars_fragment:Mp,clipping_planes_pars_vertex:yp,clipping_planes_vertex:Sp,color_fragment:Ep,color_pars_fragment:Tp,color_pars_vertex:bp,color_vertex:Ap,common:wp,cube_uv_reflection_fragment:Rp,defaultnormal_vertex:Cp,displacementmap_pars_vertex:Pp,displacementmap_vertex:Lp,emissivemap_fragment:Ip,emissivemap_pars_fragment:Dp,colorspace_fragment:Up,colorspace_pars_fragment:Np,envmap_fragment:Fp,envmap_common_pars_fragment:Op,envmap_pars_fragment:Bp,envmap_pars_vertex:kp,envmap_physical_pars_fragment:jp,envmap_vertex:zp,fog_vertex:Hp,fog_pars_vertex:Vp,fog_fragment:Gp,fog_pars_fragment:Wp,gradientmap_pars_fragment:Xp,lightmap_pars_fragment:$p,lights_lambert_fragment:qp,lights_lambert_pars_fragment:Yp,lights_pars_begin:Kp,lights_toon_fragment:Zp,lights_toon_pars_fragment:Jp,lights_phong_fragment:Qp,lights_phong_pars_fragment:em,lights_physical_fragment:tm,lights_physical_pars_fragment:nm,lights_fragment_begin:im,lights_fragment_maps:sm,lights_fragment_end:rm,logdepthbuf_fragment:am,logdepthbuf_pars_fragment:om,logdepthbuf_pars_vertex:lm,logdepthbuf_vertex:cm,map_fragment:um,map_pars_fragment:hm,map_particle_fragment:fm,map_particle_pars_fragment:dm,metalnessmap_fragment:pm,metalnessmap_pars_fragment:mm,morphinstance_vertex:gm,morphcolor_vertex:_m,morphnormal_vertex:xm,morphtarget_pars_vertex:vm,morphtarget_vertex:Mm,normal_fragment_begin:ym,normal_fragment_maps:Sm,normal_pars_fragment:Em,normal_pars_vertex:Tm,normal_vertex:bm,normalmap_pars_fragment:Am,clearcoat_normal_fragment_begin:wm,clearcoat_normal_fragment_maps:Rm,clearcoat_pars_fragment:Cm,iridescence_pars_fragment:Pm,opaque_fragment:Lm,packing:Im,premultiplied_alpha_fragment:Dm,project_vertex:Um,dithering_fragment:Nm,dithering_pars_fragment:Fm,roughnessmap_fragment:Om,roughnessmap_pars_fragment:Bm,shadowmap_pars_fragment:km,shadowmap_pars_vertex:zm,shadowmap_vertex:Hm,shadowmask_pars_fragment:Vm,skinbase_vertex:Gm,skinning_pars_vertex:Wm,skinning_vertex:Xm,skinnormal_vertex:$m,specularmap_fragment:qm,specularmap_pars_fragment:Ym,tonemapping_fragment:Km,tonemapping_pars_fragment:jm,transmission_fragment:Zm,transmission_pars_fragment:Jm,uv_pars_fragment:Qm,uv_pars_vertex:eg,uv_vertex:tg,worldpos_vertex:ng,background_vert:ig,background_frag:sg,backgroundCube_vert:rg,backgroundCube_frag:ag,cube_vert:og,cube_frag:lg,depth_vert:cg,depth_frag:ug,distanceRGBA_vert:hg,distanceRGBA_frag:fg,equirect_vert:dg,equirect_frag:pg,linedashed_vert:mg,linedashed_frag:gg,meshbasic_vert:_g,meshbasic_frag:xg,meshlambert_vert:vg,meshlambert_frag:Mg,meshmatcap_vert:yg,meshmatcap_frag:Sg,meshnormal_vert:Eg,meshnormal_frag:Tg,meshphong_vert:bg,meshphong_frag:Ag,meshphysical_vert:wg,meshphysical_frag:Rg,meshtoon_vert:Cg,meshtoon_frag:Pg,points_vert:Lg,points_frag:Ig,shadow_vert:Dg,shadow_frag:Ug,sprite_vert:Ng,sprite_frag:Fg},Me={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Ln={basic:{uniforms:Zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ve(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Zt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Zt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ve(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Zt([Me.points,Me.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Zt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Zt([Me.common,Me.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Zt([Me.sprite,Me.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Zt([Me.common,Me.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Zt([Me.lights,Me.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Ln.physical={uniforms:Zt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const kr={r:0,b:0,g:0},vi=new yn,Og=new Qe;function Bg(r,e,t,n,s,i,a){const l=new Ve(0);let c=i===!0?0:1,o,h,f=null,p=0,g=null;function v(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function y(b){let E=!1;const L=v(b);L===null?m(l,c):L&&L.isColor&&(m(L,1),E=!0);const D=r.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(b,E){const L=v(E);L&&(L.isCubeTexture||L.mapping===ia)?(h===void 0&&(h=new sn(new tr(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:ds(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,U,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),vi.copy(E.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Og.makeRotationFromEuler(vi)),h.material.toneMapped=lt.getTransfer(L.colorSpace)!==Et,(f!==L||p!==L.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,f=L,p=L.version,g=r.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(o===void 0&&(o=new sn(new ra(2,2),new fi({name:"BackgroundMaterial",uniforms:ds(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(o)),o.material.uniforms.t2D.value=L,o.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,o.material.toneMapped=lt.getTransfer(L.colorSpace)!==Et,L.matrixAutoUpdate===!0&&L.updateMatrix(),o.material.uniforms.uvTransform.value.copy(L.matrix),(f!==L||p!==L.version||g!==r.toneMapping)&&(o.material.needsUpdate=!0,f=L,p=L.version,g=r.toneMapping),o.layers.enableAll(),b.unshift(o,o.geometry,o.material,0,0,null))}function m(b,E){b.getRGB(kr,Xu(r)),n.buffers.color.setClear(kr.r,kr.g,kr.b,E,a)}function C(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return l},setClearColor:function(b,E=1){l.set(b),c=E,m(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,m(l,c)},render:y,addToRenderList:x,dispose:C}}function kg(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},s=p(null);let i=s,a=!1;function l(w,N,ne,K,Y){let re=!1;const W=f(K,ne,N);i!==W&&(i=W,o(i.object)),re=g(w,K,ne,Y),re&&v(w,K,ne,Y),Y!==null&&e.update(Y,r.ELEMENT_ARRAY_BUFFER),(re||a)&&(a=!1,E(w,N,ne,K),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return r.createVertexArray()}function o(w){return r.bindVertexArray(w)}function h(w){return r.deleteVertexArray(w)}function f(w,N,ne){const K=ne.wireframe===!0;let Y=n[w.id];Y===void 0&&(Y={},n[w.id]=Y);let re=Y[N.id];re===void 0&&(re={},Y[N.id]=re);let W=re[K];return W===void 0&&(W=p(c()),re[K]=W),W}function p(w){const N=[],ne=[],K=[];for(let Y=0;Y<t;Y++)N[Y]=0,ne[Y]=0,K[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:ne,attributeDivisors:K,object:w,attributes:{},index:null}}function g(w,N,ne,K){const Y=i.attributes,re=N.attributes;let W=0;const ee=ne.getAttributes();for(const X in ee)if(ee[X].location>=0){const de=Y[X];let Ee=re[X];if(Ee===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(Ee=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(Ee=w.instanceColor)),de===void 0||de.attribute!==Ee||Ee&&de.data!==Ee.data)return!0;W++}return i.attributesNum!==W||i.index!==K}function v(w,N,ne,K){const Y={},re=N.attributes;let W=0;const ee=ne.getAttributes();for(const X in ee)if(ee[X].location>=0){let de=re[X];de===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(de=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(de=w.instanceColor));const Ee={};Ee.attribute=de,de&&de.data&&(Ee.data=de.data),Y[X]=Ee,W++}i.attributes=Y,i.attributesNum=W,i.index=K}function y(){const w=i.newAttributes;for(let N=0,ne=w.length;N<ne;N++)w[N]=0}function x(w){m(w,0)}function m(w,N){const ne=i.newAttributes,K=i.enabledAttributes,Y=i.attributeDivisors;ne[w]=1,K[w]===0&&(r.enableVertexAttribArray(w),K[w]=1),Y[w]!==N&&(r.vertexAttribDivisor(w,N),Y[w]=N)}function C(){const w=i.newAttributes,N=i.enabledAttributes;for(let ne=0,K=N.length;ne<K;ne++)N[ne]!==w[ne]&&(r.disableVertexAttribArray(ne),N[ne]=0)}function b(w,N,ne,K,Y,re,W){W===!0?r.vertexAttribIPointer(w,N,ne,Y,re):r.vertexAttribPointer(w,N,ne,K,Y,re)}function E(w,N,ne,K){y();const Y=K.attributes,re=ne.getAttributes(),W=N.defaultAttributeValues;for(const ee in re){const X=re[ee];if(X.location>=0){let ie=Y[ee];if(ie===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(ie=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(ie=w.instanceColor)),ie!==void 0){const de=ie.normalized,Ee=ie.itemSize,Xe=e.get(ie);if(Xe===void 0)continue;const pt=Xe.buffer,ct=Xe.type,Z=Xe.bytesPerElement,_e=ct===r.INT||ct===r.UNSIGNED_INT||ie.gpuType===nl;if(ie.isInterleavedBufferAttribute){const pe=ie.data,Be=pe.stride,ke=ie.offset;if(pe.isInstancedInterleavedBuffer){for(let $e=0;$e<X.locationSize;$e++)m(X.location+$e,pe.meshPerAttribute);w.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let $e=0;$e<X.locationSize;$e++)x(X.location+$e);r.bindBuffer(r.ARRAY_BUFFER,pt);for(let $e=0;$e<X.locationSize;$e++)b(X.location+$e,Ee/X.locationSize,ct,de,Be*Z,(ke+Ee/X.locationSize*$e)*Z,_e)}else{if(ie.isInstancedBufferAttribute){for(let pe=0;pe<X.locationSize;pe++)m(X.location+pe,ie.meshPerAttribute);w.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let pe=0;pe<X.locationSize;pe++)x(X.location+pe);r.bindBuffer(r.ARRAY_BUFFER,pt);for(let pe=0;pe<X.locationSize;pe++)b(X.location+pe,Ee/X.locationSize,ct,de,Ee*Z,Ee/X.locationSize*pe*Z,_e)}}else if(W!==void 0){const de=W[ee];if(de!==void 0)switch(de.length){case 2:r.vertexAttrib2fv(X.location,de);break;case 3:r.vertexAttrib3fv(X.location,de);break;case 4:r.vertexAttrib4fv(X.location,de);break;default:r.vertexAttrib1fv(X.location,de)}}}}C()}function L(){k();for(const w in n){const N=n[w];for(const ne in N){const K=N[ne];for(const Y in K)h(K[Y].object),delete K[Y];delete N[ne]}delete n[w]}}function D(w){if(n[w.id]===void 0)return;const N=n[w.id];for(const ne in N){const K=N[ne];for(const Y in K)h(K[Y].object),delete K[Y];delete N[ne]}delete n[w.id]}function U(w){for(const N in n){const ne=n[N];if(ne[w.id]===void 0)continue;const K=ne[w.id];for(const Y in K)h(K[Y].object),delete K[Y];delete ne[w.id]}}function k(){A(),a=!0,i!==s&&(i=s,o(i.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:k,resetDefaultState:A,dispose:L,releaseStatesOfGeometry:D,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:x,disableUnusedAttributes:C}}function zg(r,e,t){let n;function s(o){n=o}function i(o,h){r.drawArrays(n,o,h),t.update(h,n,1)}function a(o,h,f){f!==0&&(r.drawArraysInstanced(n,o,h,f),t.update(h,n,f))}function l(o,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,o,0,h,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v];t.update(g,n,1)}function c(o,h,f,p){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<o.length;v++)a(o[v],h[v],p[v]);else{g.multiDrawArraysInstancedWEBGL(n,o,0,h,0,p,0,f);let v=0;for(let y=0;y<f;y++)v+=h[y]*p[y];t.update(v,n,1)}}this.setMode=s,this.render=i,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function Hg(r,e,t,n){let s;function i(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(U){return!(U!==vn&&n.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(U){const k=U===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Un&&n.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Rn&&!k)}function c(U){if(U==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const h=c(o);h!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",h,"instead."),o=h);const f=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),E=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,D=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:o,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:g,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:C,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:L,maxSamples:D}}function Vg(r){const e=this;let t=null,n=0,s=!1,i=!1;const a=new Ei,l=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||n!==0||s;return s=p,n=f.length,g},this.beginShadows=function(){i=!0,h(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(f,p){t=h(f,p,0)},this.setState=function(f,p,g){const v=f.clippingPlanes,y=f.clipIntersection,x=f.clipShadows,m=r.get(f);if(!s||v===null||v.length===0||i&&!x)i?h(null):o();else{const C=i?0:n,b=C*4;let E=m.clippingState||null;c.value=E,E=h(v,p,b,g);for(let L=0;L!==b;++L)E[L]=t[L];m.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=C}};function o(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,p,g,v){const y=f!==null?f.length:0;let x=null;if(y!==0){if(x=c.value,v!==!0||x===null){const m=g+y*4,C=p.matrixWorldInverse;l.getNormalMatrix(C),(x===null||x.length<m)&&(x=new Float32Array(m));for(let b=0,E=g;b!==y;++b,E+=4)a.copy(f[b]).applyMatrix4(C,l),a.normal.toArray(x,E),x[E+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}}function Gg(r){let e=new WeakMap;function t(a,l){return l===vo?a.mapping=cs:l===Mo&&(a.mapping=us),a}function n(a){if(a&&a.isTexture){const l=a.mapping;if(l===vo||l===Mo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const o=new hd(c.height);return o.fromEquirectangularTexture(r,a),e.set(a,o),a.addEventListener("dispose",s),t(o.texture,a.mapping)}else return null}}return a}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function i(){e=new WeakMap}return{get:n,dispose:i}}const is=4,Vc=[.125,.215,.35,.446,.526,.582],Ai=20,ja=new aa,Gc=new Ve;let Za=null,Ja=0,Qa=0,eo=!1;const Ti=(1+Math.sqrt(5))/2,ns=1/Ti,Wc=[new O(-Ti,ns,0),new O(Ti,ns,0),new O(-ns,0,Ti),new O(ns,0,Ti),new O(0,Ti,-ns),new O(0,Ti,ns),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Wg=new O;class Xc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,i={}){const{size:a=256,position:l=Wg}=i;Za=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Za,Ja,Qa),this._renderer.xr.enabled=eo,e.scissorTest=!1,zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Za=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:er,format:vn,colorSpace:tn,depthBuffer:!1},s=$c(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$c(e,t,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xg(i)),this._blurMaterial=$g(i,e,t)}return s}_compileMaterial(e){const t=new sn(this._lodPlanes[0],e);this._renderer.compile(t,ja)}_sceneToCubeUV(e,t,n,s,i){const c=new qt(90,1,t,n),o=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,g=f.toneMapping;f.getClearColor(Gc),f.toneMapping=hi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const y=new wi({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),x=new sn(new tr,y);let m=!1;const C=e.background;C?C.isColor&&(y.color.copy(C),e.background=null,m=!0):(y.color.copy(Gc),m=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(c.up.set(0,o[b],0),c.position.set(i.x,i.y,i.z),c.lookAt(i.x+h[b],i.y,i.z)):E===1?(c.up.set(0,0,o[b]),c.position.set(i.x,i.y,i.z),c.lookAt(i.x,i.y+h[b],i.z)):(c.up.set(0,o[b],0),c.position.set(i.x,i.y,i.z),c.lookAt(i.x,i.y,i.z+h[b]));const L=this._cubeSize;zr(s,E*L,b>2?L:0,L,L),f.setRenderTarget(s),m&&f.render(x,c),f.render(e,c)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=g,f.autoClear=p,e.background=C}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===cs||e.mapping===us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qc());const i=s?this._cubemapMaterial:this._equirectMaterial,a=new sn(this._lodPlanes[0],i),l=i.uniforms;l.envMap.value=e;const c=this._cubeSize;zr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ja)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let i=1;i<s;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),l=Wc[(s-i-1)%Wc.length];this._blur(e,i-1,i,a,l)}t.autoClear=n}_blur(e,t,n,s,i){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",i),this._halfBlur(a,e,n,n,s,"longitudinal",i)}_halfBlur(e,t,n,s,i,a,l){const c=this._renderer,o=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new sn(this._lodPlanes[s],o),p=o.uniforms,g=this._sizeLods[n]-1,v=isFinite(i)?Math.PI/(2*g):2*Math.PI/(2*Ai-1),y=i/v,x=isFinite(i)?1+Math.floor(h*y):Ai;x>Ai&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ai}`);const m=[];let C=0;for(let U=0;U<Ai;++U){const k=U/y,A=Math.exp(-k*k/2);m.push(A),U===0?C+=A:U<x&&(C+=2*A)}for(let U=0;U<m.length;U++)m[U]=m[U]/C;p.envMap.value=e.texture,p.samples.value=x,p.weights.value=m,p.latitudinal.value=a==="latitudinal",l&&(p.poleAxis.value=l);const{_lodMax:b}=this;p.dTheta.value=v,p.mipInt.value=b-n;const E=this._sizeLods[s],L=3*E*(s>b-is?s-b+is:0),D=4*(this._cubeSize-E);zr(t,L,D,3*E,2*E),c.setRenderTarget(t),c.render(f,ja)}}function Xg(r){const e=[],t=[],n=[];let s=r;const i=r-is+1+Vc.length;for(let a=0;a<i;a++){const l=Math.pow(2,s);t.push(l);let c=1/l;a>r-is?c=Vc[a-r+is-1]:a===0&&(c=0),n.push(c);const o=1/(l-2),h=-o,f=1+o,p=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,v=6,y=3,x=2,m=1,C=new Float32Array(y*v*g),b=new Float32Array(x*v*g),E=new Float32Array(m*v*g);for(let D=0;D<g;D++){const U=D%3*2/3-1,k=D>2?0:-1,A=[U,k,0,U+2/3,k,0,U+2/3,k+1,0,U,k,0,U+2/3,k+1,0,U,k+1,0];C.set(A,y*v*D),b.set(p,x*v*D);const w=[D,D,D,D,D,D];E.set(w,m*v*D)}const L=new an;L.setAttribute("position",new Qt(C,y)),L.setAttribute("uv",new Qt(b,x)),L.setAttribute("faceIndex",new Qt(E,m)),e.push(L),s>is&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $c(r,e,t){const n=new Li(r,e,t);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zr(r,e,t,n,s){r.viewport.set(e,t,n,s),r.scissor.set(e,t,n,s)}function $g(r,e,t){const n=new Float32Array(Ai),s=new O(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function qc(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Yc(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Tl(){return`

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
	`}function qg(r){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const c=l.mapping,o=c===vo||c===Mo,h=c===cs||c===us;if(o||h){let f=e.get(l);const p=f!==void 0?f.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==p)return t===null&&(t=new Xc(r)),f=o?t.fromEquirectangular(l,f):t.fromCubemap(l,f),f.texture.pmremVersion=l.pmremVersion,e.set(l,f),f.texture;if(f!==void 0)return f.texture;{const g=l.image;return o&&g&&g.height>0||h&&g&&s(g)?(t===null&&(t=new Xc(r)),f=o?t.fromEquirectangular(l):t.fromCubemap(l),f.texture.pmremVersion=l.pmremVersion,e.set(l,f),l.addEventListener("dispose",i),f.texture):null}}}return l}function s(l){let c=0;const o=6;for(let h=0;h<o;h++)l[h]!==void 0&&c++;return c===o}function i(l){const c=l.target;c.removeEventListener("dispose",i);const o=e.get(c);o!==void 0&&(e.delete(c),o.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Yg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&rs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Kg(r,e,t,n){const s={},i=new WeakMap;function a(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);p.removeEventListener("dispose",a),delete s[p.id];const g=i.get(p);g&&(e.remove(g),i.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(f,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function c(f){const p=f.attributes;for(const g in p)e.update(p[g],r.ARRAY_BUFFER)}function o(f){const p=[],g=f.index,v=f.attributes.position;let y=0;if(g!==null){const C=g.array;y=g.version;for(let b=0,E=C.length;b<E;b+=3){const L=C[b+0],D=C[b+1],U=C[b+2];p.push(L,D,D,U,U,L)}}else if(v!==void 0){const C=v.array;y=v.version;for(let b=0,E=C.length/3-1;b<E;b+=3){const L=b+0,D=b+1,U=b+2;p.push(L,D,D,U,U,L)}}else return;const x=new(ku(p)?Wu:Gu)(p,1);x.version=y;const m=i.get(f);m&&e.remove(m),i.set(f,x)}function h(f){const p=i.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&o(f)}else o(f);return i.get(f)}return{get:l,update:c,getWireframeAttribute:h}}function jg(r,e,t){let n;function s(p){n=p}let i,a;function l(p){i=p.type,a=p.bytesPerElement}function c(p,g){r.drawElements(n,g,i,p*a),t.update(g,n,1)}function o(p,g,v){v!==0&&(r.drawElementsInstanced(n,g,i,p*a,v),t.update(g,n,v))}function h(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,i,p,0,v);let x=0;for(let m=0;m<v;m++)x+=g[m];t.update(x,n,1)}function f(p,g,v,y){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<p.length;m++)o(p[m]/a,g[m],y[m]);else{x.multiDrawElementsInstancedWEBGL(n,g,0,i,p,0,y,0,v);let m=0;for(let C=0;C<v;C++)m+=g[C]*y[C];t.update(m,n,1)}}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=o,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Zg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,a,l){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=l*(i/3);break;case r.LINES:t.lines+=l*(i/2);break;case r.LINE_STRIP:t.lines+=l*(i-1);break;case r.LINE_LOOP:t.lines+=l*i;break;case r.POINTS:t.points+=l*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Jg(r,e,t){const n=new WeakMap,s=new dt;function i(a,l,c){const o=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=h!==void 0?h.length:0;let p=n.get(l);if(p===void 0||p.count!==f){let A=function(){U.dispose(),n.delete(l),l.removeEventListener("dispose",A)};p!==void 0&&p.texture.dispose();const g=l.morphAttributes.position!==void 0,v=l.morphAttributes.normal!==void 0,y=l.morphAttributes.color!==void 0,x=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],C=l.morphAttributes.color||[];let b=0;g===!0&&(b=1),v===!0&&(b=2),y===!0&&(b=3);let E=l.attributes.position.count*b,L=1;E>e.maxTextureSize&&(L=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const D=new Float32Array(E*L*4*f),U=new zu(D,E,L,f);U.type=Rn,U.needsUpdate=!0;const k=b*4;for(let w=0;w<f;w++){const N=x[w],ne=m[w],K=C[w],Y=E*L*4*w;for(let re=0;re<N.count;re++){const W=re*k;g===!0&&(s.fromBufferAttribute(N,re),D[Y+W+0]=s.x,D[Y+W+1]=s.y,D[Y+W+2]=s.z,D[Y+W+3]=0),v===!0&&(s.fromBufferAttribute(ne,re),D[Y+W+4]=s.x,D[Y+W+5]=s.y,D[Y+W+6]=s.z,D[Y+W+7]=0),y===!0&&(s.fromBufferAttribute(K,re),D[Y+W+8]=s.x,D[Y+W+9]=s.y,D[Y+W+10]=s.z,D[Y+W+11]=K.itemSize===4?s.w:1)}}p={count:f,texture:U,size:new Ke(E,L)},n.set(l,p),l.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let y=0;y<o.length;y++)g+=o[y];const v=l.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",v),c.getUniforms().setValue(r,"morphTargetInfluences",o)}c.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}return{update:i}}function Qg(r,e,t,n){let s=new WeakMap;function i(c){const o=n.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==o&&(e.update(f),s.set(f,o)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==o&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,o))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==o&&(p.update(),s.set(p,o))}return f}function a(){s=new WeakMap}function l(c){const o=c.target;o.removeEventListener("dispose",l),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:i,dispose:a}}const oh=new kt,Kc=new th(1,1),lh=new zu,ch=new Yf,uh=new qu,jc=[],Zc=[],Jc=new Float32Array(16),Qc=new Float32Array(9),eu=new Float32Array(4);function ys(r,e,t){const n=r[0];if(n<=0||n>0)return r;const s=e*t;let i=jc[s];if(i===void 0&&(i=new Float32Array(s),jc[s]=i),e!==0){n.toArray(i,0);for(let a=1,l=0;a!==e;++a)l+=t,r[a].toArray(i,l)}return i}function Nt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ft(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function oa(r,e){let t=Zc[e];t===void 0&&(t=new Int32Array(e),Zc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function e_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function t_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2fv(this.addr,e),Ft(t,e)}}function n_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;r.uniform3fv(this.addr,e),Ft(t,e)}}function i_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4fv(this.addr,e),Ft(t,e)}}function s_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;eu.set(n),r.uniformMatrix2fv(this.addr,!1,eu),Ft(t,n)}}function r_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;Qc.set(n),r.uniformMatrix3fv(this.addr,!1,Qc),Ft(t,n)}}function a_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;Jc.set(n),r.uniformMatrix4fv(this.addr,!1,Jc),Ft(t,n)}}function o_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function l_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2iv(this.addr,e),Ft(t,e)}}function c_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;r.uniform3iv(this.addr,e),Ft(t,e)}}function u_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4iv(this.addr,e),Ft(t,e)}}function h_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function f_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2uiv(this.addr,e),Ft(t,e)}}function d_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;r.uniform3uiv(this.addr,e),Ft(t,e)}}function p_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4uiv(this.addr,e),Ft(t,e)}}function m_(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s);let i;this.type===r.SAMPLER_2D_SHADOW?(Kc.compareFunction=Bu,i=Kc):i=oh,t.setTexture2D(e||i,s)}function g_(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ch,s)}function __(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||uh,s)}function x_(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||lh,s)}function v_(r){switch(r){case 5126:return e_;case 35664:return t_;case 35665:return n_;case 35666:return i_;case 35674:return s_;case 35675:return r_;case 35676:return a_;case 5124:case 35670:return o_;case 35667:case 35671:return l_;case 35668:case 35672:return c_;case 35669:case 35673:return u_;case 5125:return h_;case 36294:return f_;case 36295:return d_;case 36296:return p_;case 35678:case 36198:case 36298:case 36306:case 35682:return m_;case 35679:case 36299:case 36307:return g_;case 35680:case 36300:case 36308:case 36293:return __;case 36289:case 36303:case 36311:case 36292:return x_}}function M_(r,e){r.uniform1fv(this.addr,e)}function y_(r,e){const t=ys(e,this.size,2);r.uniform2fv(this.addr,t)}function S_(r,e){const t=ys(e,this.size,3);r.uniform3fv(this.addr,t)}function E_(r,e){const t=ys(e,this.size,4);r.uniform4fv(this.addr,t)}function T_(r,e){const t=ys(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function b_(r,e){const t=ys(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function A_(r,e){const t=ys(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function w_(r,e){r.uniform1iv(this.addr,e)}function R_(r,e){r.uniform2iv(this.addr,e)}function C_(r,e){r.uniform3iv(this.addr,e)}function P_(r,e){r.uniform4iv(this.addr,e)}function L_(r,e){r.uniform1uiv(this.addr,e)}function I_(r,e){r.uniform2uiv(this.addr,e)}function D_(r,e){r.uniform3uiv(this.addr,e)}function U_(r,e){r.uniform4uiv(this.addr,e)}function N_(r,e,t){const n=this.cache,s=e.length,i=oa(t,s);Nt(n,i)||(r.uniform1iv(this.addr,i),Ft(n,i));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||oh,i[a])}function F_(r,e,t){const n=this.cache,s=e.length,i=oa(t,s);Nt(n,i)||(r.uniform1iv(this.addr,i),Ft(n,i));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ch,i[a])}function O_(r,e,t){const n=this.cache,s=e.length,i=oa(t,s);Nt(n,i)||(r.uniform1iv(this.addr,i),Ft(n,i));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||uh,i[a])}function B_(r,e,t){const n=this.cache,s=e.length,i=oa(t,s);Nt(n,i)||(r.uniform1iv(this.addr,i),Ft(n,i));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||lh,i[a])}function k_(r){switch(r){case 5126:return M_;case 35664:return y_;case 35665:return S_;case 35666:return E_;case 35674:return T_;case 35675:return b_;case 35676:return A_;case 5124:case 35670:return w_;case 35667:case 35671:return R_;case 35668:case 35672:return C_;case 35669:case 35673:return P_;case 5125:return L_;case 36294:return I_;case 36295:return D_;case 36296:return U_;case 35678:case 36198:case 36298:case 36306:case 35682:return N_;case 35679:case 36299:case 36307:return F_;case 35680:case 36300:case 36308:case 36293:return O_;case 36289:case 36303:case 36311:case 36292:return B_}}class z_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=v_(t.type)}}class H_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=k_(t.type)}}class V_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let i=0,a=s.length;i!==a;++i){const l=s[i];l.setValue(e,t[l.id],n)}}}const to=/(\w+)(\])?(\[|\.)?/g;function tu(r,e){r.seq.push(e),r.map[e.id]=e}function G_(r,e,t){const n=r.name,s=n.length;for(to.lastIndex=0;;){const i=to.exec(n),a=to.lastIndex;let l=i[1];const c=i[2]==="]",o=i[3];if(c&&(l=l|0),o===void 0||o==="["&&a+2===s){tu(t,o===void 0?new z_(l,r,e):new H_(l,r,e));break}else{let f=t.map[l];f===void 0&&(f=new V_(l),tu(t,f)),t=f}}}class Zr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const i=e.getActiveUniform(t,s),a=e.getUniformLocation(t,i.name);G_(i,a,this)}}setValue(e,t,n,s){const i=this.map[t];i!==void 0&&i.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let i=0,a=t.length;i!==a;++i){const l=t[i],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,i=e.length;s!==i;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function nu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const W_=37297;let X_=0;function $_(r,e){const t=r.split(`
`),n=[],s=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let a=s;a<i;a++){const l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}const iu=new Je;function q_(r){lt._getMatrix(iu,lt.workingColorSpace,r);const e=`mat3( ${iu.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(r)){case Qr:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function su(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=(r.getShaderInfoLog(e)||"").trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+$_(r.getShaderSource(e),l)}else return i}function Y_(r,e){const t=q_(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function K_(r,e){let t;switch(e){case rf:t="Linear";break;case af:t="Reinhard";break;case of:t="Cineon";break;case lf:t="ACESFilmic";break;case uf:t="AgX";break;case hf:t="Neutral";break;case cf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hr=new O;function j_(){lt.getLuminanceCoefficients(Hr);const r=Hr.x.toFixed(4),e=Hr.y.toFixed(4),t=Hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function J_(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Q_(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const i=r.getActiveAttrib(e,s),a=i.name;let l=1;i.type===r.FLOAT_MAT2&&(l=2),i.type===r.FLOAT_MAT3&&(l=3),i.type===r.FLOAT_MAT4&&(l=4),t[a]={type:i.type,location:r.getAttribLocation(e,a),locationSize:l}}return t}function Vs(r){return r!==""}function ru(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function au(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const e0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zo(r){return r.replace(e0,n0)}const t0=new Map;function n0(r,e){let t=et[e];if(t===void 0){const n=t0.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zo(t)}const i0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ou(r){return r.replace(i0,s0)}function s0(r,e,t,n){let s="";for(let i=parseInt(e);i<parseInt(t);i++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return s}function lu(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function r0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===wu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Oh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function a0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case cs:case us:e="ENVMAP_TYPE_CUBE";break;case ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function o0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case us:e="ENVMAP_MODE_REFRACTION";break}return e}function l0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case tl:e="ENVMAP_BLENDING_MULTIPLY";break;case nf:e="ENVMAP_BLENDING_MIX";break;case sf:e="ENVMAP_BLENDING_ADD";break}return e}function c0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function u0(r,e,t,n){const s=r.getContext(),i=t.defines;let a=t.vertexShader,l=t.fragmentShader;const c=r0(t),o=a0(t),h=o0(t),f=l0(t),p=c0(t),g=Z_(t),v=J_(i),y=s.createProgram();let x,m,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Vs).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Vs).join(`
`),m.length>0&&(m+=`
`)):(x=[lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),m=[lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?et.tonemapping_pars_fragment:"",t.toneMapping!==hi?K_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Y_("linearToOutputTexel",t.outputColorSpace),j_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vs).join(`
`)),a=Zo(a),a=ru(a,t),a=au(a,t),l=Zo(l),l=ru(l,t),l=au(l,t),a=ou(a),l=ou(l),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=C+x+a,E=C+m+l,L=nu(s,s.VERTEX_SHADER,b),D=nu(s,s.FRAGMENT_SHADER,E);s.attachShader(y,L),s.attachShader(y,D),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function U(N){if(r.debug.checkShaderErrors){const ne=s.getProgramInfoLog(y)||"",K=s.getShaderInfoLog(L)||"",Y=s.getShaderInfoLog(D)||"",re=ne.trim(),W=K.trim(),ee=Y.trim();let X=!0,ie=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,y,L,D);else{const de=su(s,L,"vertex"),Ee=su(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+re+`
`+de+`
`+Ee)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(W===""||ee==="")&&(ie=!1);ie&&(N.diagnostics={runnable:X,programLog:re,vertexShader:{log:W,prefix:x},fragmentShader:{log:ee,prefix:m}})}s.deleteShader(L),s.deleteShader(D),k=new Zr(s,y),A=Q_(s,y)}let k;this.getUniforms=function(){return k===void 0&&U(this),k};let A;this.getAttributes=function(){return A===void 0&&U(this),A};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(y,W_)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=X_++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=L,this.fragmentShader=D,this}let h0=0;class f0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new d0(e),t.set(e,n)),n}}class d0{constructor(e){this.id=h0++,this.code=e,this.usedTimes=0}}function p0(r,e,t,n,s,i,a){const l=new Hu,c=new f0,o=new Set,h=[],f=s.logarithmicDepthBuffer,p=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(A){return o.add(A),A===0?"uv":`uv${A}`}function x(A,w,N,ne,K){const Y=ne.fog,re=K.geometry,W=A.isMeshStandardMaterial?ne.environment:null,ee=(A.isMeshStandardMaterial?t:e).get(A.envMap||W),X=ee&&ee.mapping===ia?ee.image.height:null,ie=v[A.type];A.precision!==null&&(g=s.getMaxPrecision(A.precision),g!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const de=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Ee=de!==void 0?de.length:0;let Xe=0;re.morphAttributes.position!==void 0&&(Xe=1),re.morphAttributes.normal!==void 0&&(Xe=2),re.morphAttributes.color!==void 0&&(Xe=3);let pt,ct,Z,_e;if(ie){const ut=Ln[ie];pt=ut.vertexShader,ct=ut.fragmentShader}else pt=A.vertexShader,ct=A.fragmentShader,c.update(A),Z=c.getVertexShaderID(A),_e=c.getFragmentShaderID(A);const pe=r.getRenderTarget(),Be=r.state.buffers.depth.getReversed(),ke=K.isInstancedMesh===!0,$e=K.isBatchedMesh===!0,At=!!A.map,rt=!!A.matcap,F=!!ee,St=!!A.aoMap,Fe=!!A.lightMap,at=!!A.bumpMap,Ne=!!A.normalMap,mt=!!A.displacementMap,be=!!A.emissiveMap,Ze=!!A.metalnessMap,Dt=!!A.roughnessMap,Ct=A.anisotropy>0,P=A.clearcoat>0,S=A.dispersion>0,G=A.iridescence>0,Q=A.sheen>0,ae=A.transmission>0,j=Ct&&!!A.anisotropyMap,Ue=P&&!!A.clearcoatMap,me=P&&!!A.clearcoatNormalMap,Le=P&&!!A.clearcoatRoughnessMap,Ie=G&&!!A.iridescenceMap,ue=G&&!!A.iridescenceThicknessMap,ye=Q&&!!A.sheenColorMap,Ge=Q&&!!A.sheenRoughnessMap,De=!!A.specularMap,xe=!!A.specularColorMap,je=!!A.specularIntensityMap,B=ae&&!!A.transmissionMap,he=ae&&!!A.thicknessMap,ge=!!A.gradientMap,we=!!A.alphaMap,le=A.alphaTest>0,te=!!A.alphaHash,Pe=!!A.extensions;let Ye=hi;A.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ye=r.toneMapping);const xt={shaderID:ie,shaderType:A.type,shaderName:A.name,vertexShader:pt,fragmentShader:ct,defines:A.defines,customVertexShaderID:Z,customFragmentShaderID:_e,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:$e,batchingColor:$e&&K._colorsTexture!==null,instancing:ke,instancingColor:ke&&K.instanceColor!==null,instancingMorph:ke&&K.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:pe===null?r.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:tn,alphaToCoverage:!!A.alphaToCoverage,map:At,matcap:rt,envMap:F,envMapMode:F&&ee.mapping,envMapCubeUVHeight:X,aoMap:St,lightMap:Fe,bumpMap:at,normalMap:Ne,displacementMap:p&&mt,emissiveMap:be,normalMapObjectSpace:Ne&&A.normalMapType===_f,normalMapTangentSpace:Ne&&A.normalMapType===cl,metalnessMap:Ze,roughnessMap:Dt,anisotropy:Ct,anisotropyMap:j,clearcoat:P,clearcoatMap:Ue,clearcoatNormalMap:me,clearcoatRoughnessMap:Le,dispersion:S,iridescence:G,iridescenceMap:Ie,iridescenceThicknessMap:ue,sheen:Q,sheenColorMap:ye,sheenRoughnessMap:Ge,specularMap:De,specularColorMap:xe,specularIntensityMap:je,transmission:ae,transmissionMap:B,thicknessMap:he,gradientMap:ge,opaque:A.transparent===!1&&A.blending===ss&&A.alphaToCoverage===!1,alphaMap:we,alphaTest:le,alphaHash:te,combine:A.combine,mapUv:At&&y(A.map.channel),aoMapUv:St&&y(A.aoMap.channel),lightMapUv:Fe&&y(A.lightMap.channel),bumpMapUv:at&&y(A.bumpMap.channel),normalMapUv:Ne&&y(A.normalMap.channel),displacementMapUv:mt&&y(A.displacementMap.channel),emissiveMapUv:be&&y(A.emissiveMap.channel),metalnessMapUv:Ze&&y(A.metalnessMap.channel),roughnessMapUv:Dt&&y(A.roughnessMap.channel),anisotropyMapUv:j&&y(A.anisotropyMap.channel),clearcoatMapUv:Ue&&y(A.clearcoatMap.channel),clearcoatNormalMapUv:me&&y(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&y(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&y(A.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&y(A.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&y(A.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&y(A.sheenRoughnessMap.channel),specularMapUv:De&&y(A.specularMap.channel),specularColorMapUv:xe&&y(A.specularColorMap.channel),specularIntensityMapUv:je&&y(A.specularIntensityMap.channel),transmissionMapUv:B&&y(A.transmissionMap.channel),thicknessMapUv:he&&y(A.thicknessMap.channel),alphaMapUv:we&&y(A.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Ne||Ct),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!re.attributes.uv&&(At||we),fog:!!Y,useFog:A.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Be,skinning:K.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Xe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ye,decodeVideoTexture:At&&A.map.isVideoTexture===!0&&lt.getTransfer(A.map.colorSpace)===Et,decodeVideoTextureEmissive:be&&A.emissiveMap.isVideoTexture===!0&&lt.getTransfer(A.emissiveMap.colorSpace)===Et,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===In,flipSided:A.side===rn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Pe&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&A.extensions.multiDraw===!0||$e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return xt.vertexUv1s=o.has(1),xt.vertexUv2s=o.has(2),xt.vertexUv3s=o.has(3),o.clear(),xt}function m(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const N in A.defines)w.push(N),w.push(A.defines[N]);return A.isRawShaderMaterial===!1&&(C(w,A),b(w,A),w.push(r.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function C(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function b(A,w){l.disableAll(),w.supportsVertexTextures&&l.enable(0),w.instancing&&l.enable(1),w.instancingColor&&l.enable(2),w.instancingMorph&&l.enable(3),w.matcap&&l.enable(4),w.envMap&&l.enable(5),w.normalMapObjectSpace&&l.enable(6),w.normalMapTangentSpace&&l.enable(7),w.clearcoat&&l.enable(8),w.iridescence&&l.enable(9),w.alphaTest&&l.enable(10),w.vertexColors&&l.enable(11),w.vertexAlphas&&l.enable(12),w.vertexUv1s&&l.enable(13),w.vertexUv2s&&l.enable(14),w.vertexUv3s&&l.enable(15),w.vertexTangents&&l.enable(16),w.anisotropy&&l.enable(17),w.alphaHash&&l.enable(18),w.batching&&l.enable(19),w.dispersion&&l.enable(20),w.batchingColor&&l.enable(21),w.gradientMap&&l.enable(22),A.push(l.mask),l.disableAll(),w.fog&&l.enable(0),w.useFog&&l.enable(1),w.flatShading&&l.enable(2),w.logarithmicDepthBuffer&&l.enable(3),w.reversedDepthBuffer&&l.enable(4),w.skinning&&l.enable(5),w.morphTargets&&l.enable(6),w.morphNormals&&l.enable(7),w.morphColors&&l.enable(8),w.premultipliedAlpha&&l.enable(9),w.shadowMapEnabled&&l.enable(10),w.doubleSided&&l.enable(11),w.flipSided&&l.enable(12),w.useDepthPacking&&l.enable(13),w.dithering&&l.enable(14),w.transmission&&l.enable(15),w.sheen&&l.enable(16),w.opaque&&l.enable(17),w.pointsUvs&&l.enable(18),w.decodeVideoTexture&&l.enable(19),w.decodeVideoTextureEmissive&&l.enable(20),w.alphaToCoverage&&l.enable(21),A.push(l.mask)}function E(A){const w=v[A.type];let N;if(w){const ne=Ln[w];N=od.clone(ne.uniforms)}else N=A.uniforms;return N}function L(A,w){let N;for(let ne=0,K=h.length;ne<K;ne++){const Y=h[ne];if(Y.cacheKey===w){N=Y,++N.usedTimes;break}}return N===void 0&&(N=new u0(r,w,A,i),h.push(N)),N}function D(A){if(--A.usedTimes===0){const w=h.indexOf(A);h[w]=h[h.length-1],h.pop(),A.destroy()}}function U(A){c.remove(A)}function k(){c.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:E,acquireProgram:L,releaseProgram:D,releaseShaderCache:U,programs:h,dispose:k}}function m0(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let l=r.get(a);return l===void 0&&(l={},r.set(a,l)),l}function n(a){r.delete(a)}function s(a,l,c){r.get(a)[l]=c}function i(){r=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:i}}function g0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function cu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function uu(){const r=[];let e=0;const t=[],n=[],s=[];function i(){e=0,t.length=0,n.length=0,s.length=0}function a(f,p,g,v,y,x){let m=r[e];return m===void 0?(m={id:f.id,object:f,geometry:p,material:g,groupOrder:v,renderOrder:f.renderOrder,z:y,group:x},r[e]=m):(m.id=f.id,m.object=f,m.geometry=p,m.material=g,m.groupOrder=v,m.renderOrder=f.renderOrder,m.z=y,m.group=x),e++,m}function l(f,p,g,v,y,x){const m=a(f,p,g,v,y,x);g.transmission>0?n.push(m):g.transparent===!0?s.push(m):t.push(m)}function c(f,p,g,v,y,x){const m=a(f,p,g,v,y,x);g.transmission>0?n.unshift(m):g.transparent===!0?s.unshift(m):t.unshift(m)}function o(f,p){t.length>1&&t.sort(f||g0),n.length>1&&n.sort(p||cu),s.length>1&&s.sort(p||cu)}function h(){for(let f=e,p=r.length;f<p;f++){const g=r[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:i,push:l,unshift:c,finish:h,sort:o}}function _0(){let r=new WeakMap;function e(n,s){const i=r.get(n);let a;return i===void 0?(a=new uu,r.set(n,[a])):s>=i.length?(a=new uu,i.push(a)):a=i[s],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function x0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ve};break;case"SpotLight":t={position:new O,direction:new O,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new O,halfWidth:new O,halfHeight:new O};break}return r[e.id]=t,t}}}function v0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let M0=0;function y0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function S0(r){const e=new x0,t=v0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new O);const s=new O,i=new Qe,a=new Qe;function l(o){let h=0,f=0,p=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let g=0,v=0,y=0,x=0,m=0,C=0,b=0,E=0,L=0,D=0,U=0;o.sort(y0);for(let A=0,w=o.length;A<w;A++){const N=o[A],ne=N.color,K=N.intensity,Y=N.distance,re=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=ne.r*K,f+=ne.g*K,p+=ne.b*K;else if(N.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(N.sh.coefficients[W],K);U++}else if(N.isDirectionalLight){const W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ee=N.shadow,X=t.get(N);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,n.directionalShadow[g]=X,n.directionalShadowMap[g]=re,n.directionalShadowMatrix[g]=N.shadow.matrix,C++}n.directional[g]=W,g++}else if(N.isSpotLight){const W=e.get(N);W.position.setFromMatrixPosition(N.matrixWorld),W.color.copy(ne).multiplyScalar(K),W.distance=Y,W.coneCos=Math.cos(N.angle),W.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),W.decay=N.decay,n.spot[y]=W;const ee=N.shadow;if(N.map&&(n.spotLightMap[L]=N.map,L++,ee.updateMatrices(N),N.castShadow&&D++),n.spotLightMatrix[y]=ee.matrix,N.castShadow){const X=t.get(N);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,n.spotShadow[y]=X,n.spotShadowMap[y]=re,E++}y++}else if(N.isRectAreaLight){const W=e.get(N);W.color.copy(ne).multiplyScalar(K),W.halfWidth.set(N.width*.5,0,0),W.halfHeight.set(0,N.height*.5,0),n.rectArea[x]=W,x++}else if(N.isPointLight){const W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),W.distance=N.distance,W.decay=N.decay,N.castShadow){const ee=N.shadow,X=t.get(N);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,X.shadowCameraNear=ee.camera.near,X.shadowCameraFar=ee.camera.far,n.pointShadow[v]=X,n.pointShadowMap[v]=re,n.pointShadowMatrix[v]=N.shadow.matrix,b++}n.point[v]=W,v++}else if(N.isHemisphereLight){const W=e.get(N);W.skyColor.copy(N.color).multiplyScalar(K),W.groundColor.copy(N.groundColor).multiplyScalar(K),n.hemi[m]=W,m++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=p;const k=n.hash;(k.directionalLength!==g||k.pointLength!==v||k.spotLength!==y||k.rectAreaLength!==x||k.hemiLength!==m||k.numDirectionalShadows!==C||k.numPointShadows!==b||k.numSpotShadows!==E||k.numSpotMaps!==L||k.numLightProbes!==U)&&(n.directional.length=g,n.spot.length=y,n.rectArea.length=x,n.point.length=v,n.hemi.length=m,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=E+L-D,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=U,k.directionalLength=g,k.pointLength=v,k.spotLength=y,k.rectAreaLength=x,k.hemiLength=m,k.numDirectionalShadows=C,k.numPointShadows=b,k.numSpotShadows=E,k.numSpotMaps=L,k.numLightProbes=U,n.version=M0++)}function c(o,h){let f=0,p=0,g=0,v=0,y=0;const x=h.matrixWorldInverse;for(let m=0,C=o.length;m<C;m++){const b=o[m];if(b.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(x),f++}else if(b.isSpotLight){const E=n.spot[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(x),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(x),g++}else if(b.isRectAreaLight){const E=n.rectArea[v];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(x),a.identity(),i.copy(b.matrixWorld),i.premultiply(x),a.extractRotation(i),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const E=n.point[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(x),p++}else if(b.isHemisphereLight){const E=n.hemi[y];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(x),y++}}}return{setup:l,setupView:c,state:n}}function hu(r){const e=new S0(r),t=[],n=[];function s(h){o.camera=h,t.length=0,n.length=0}function i(h){t.push(h)}function a(h){n.push(h)}function l(){e.setup(t)}function c(h){e.setupView(t,h)}const o={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:o,setupLights:l,setupLightsView:c,pushLight:i,pushShadow:a}}function E0(r){let e=new WeakMap;function t(s,i=0){const a=e.get(s);let l;return a===void 0?(l=new hu(r),e.set(s,[l])):i>=a.length?(l=new hu(r),a.push(l)):l=a[i],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const T0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b0=`uniform sampler2D shadow_pass;
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
}`;function A0(r,e,t){let n=new dl;const s=new Ke,i=new Ke,a=new dt,l=new bd({depthPacking:gf}),c=new Ad,o={},h=t.maxTextureSize,f={[Zn]:rn,[rn]:Zn,[In]:In},p=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:T0,fragmentShader:b0}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const v=new an;v.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new sn(v,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wu;let m=this.type;this.render=function(D,U,k){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||D.length===0)return;const A=r.getRenderTarget(),w=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),ne=r.state;ne.setBlending(ui),ne.buffers.depth.getReversed()?ne.buffers.color.setClear(0,0,0,0):ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const K=m!==$n&&this.type===$n,Y=m===$n&&this.type!==$n;for(let re=0,W=D.length;re<W;re++){const ee=D[re],X=ee.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const ie=X.getFrameExtents();if(s.multiply(ie),i.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(i.x=Math.floor(h/ie.x),s.x=i.x*ie.x,X.mapSize.x=i.x),s.y>h&&(i.y=Math.floor(h/ie.y),s.y=i.y*ie.y,X.mapSize.y=i.y)),X.map===null||K===!0||Y===!0){const Ee=this.type!==$n?{minFilter:Jt,magFilter:Jt}:{};X.map!==null&&X.map.dispose(),X.map=new Li(s.x,s.y,Ee),X.map.texture.name=ee.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const de=X.getViewportCount();for(let Ee=0;Ee<de;Ee++){const Xe=X.getViewport(Ee);a.set(i.x*Xe.x,i.y*Xe.y,i.x*Xe.z,i.y*Xe.w),ne.viewport(a),X.updateMatrices(ee,Ee),n=X.getFrustum(),E(U,k,X.camera,ee,this.type)}X.isPointLightShadow!==!0&&this.type===$n&&C(X,k),X.needsUpdate=!1}m=this.type,x.needsUpdate=!1,r.setRenderTarget(A,w,N)};function C(D,U){const k=e.update(y);p.defines.VSM_SAMPLES!==D.blurSamples&&(p.defines.VSM_SAMPLES=D.blurSamples,g.defines.VSM_SAMPLES=D.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Li(s.x,s.y)),p.uniforms.shadow_pass.value=D.map.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,r.setRenderTarget(D.mapPass),r.clear(),r.renderBufferDirect(U,null,k,p,y,null),g.uniforms.shadow_pass.value=D.mapPass.texture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,r.setRenderTarget(D.map),r.clear(),r.renderBufferDirect(U,null,k,g,y,null)}function b(D,U,k,A){let w=null;const N=k.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(N!==void 0)w=N;else if(w=k.isPointLight===!0?c:l,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const ne=w.uuid,K=U.uuid;let Y=o[ne];Y===void 0&&(Y={},o[ne]=Y);let re=Y[K];re===void 0&&(re=w.clone(),Y[K]=re,U.addEventListener("dispose",L)),w=re}if(w.visible=U.visible,w.wireframe=U.wireframe,A===$n?w.side=U.shadowSide!==null?U.shadowSide:U.side:w.side=U.shadowSide!==null?U.shadowSide:f[U.side],w.alphaMap=U.alphaMap,w.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,w.map=U.map,w.clipShadows=U.clipShadows,w.clippingPlanes=U.clippingPlanes,w.clipIntersection=U.clipIntersection,w.displacementMap=U.displacementMap,w.displacementScale=U.displacementScale,w.displacementBias=U.displacementBias,w.wireframeLinewidth=U.wireframeLinewidth,w.linewidth=U.linewidth,k.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ne=r.properties.get(w);ne.light=k}return w}function E(D,U,k,A,w){if(D.visible===!1)return;if(D.layers.test(U.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&w===$n)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,D.matrixWorld);const K=e.update(D),Y=D.material;if(Array.isArray(Y)){const re=K.groups;for(let W=0,ee=re.length;W<ee;W++){const X=re[W],ie=Y[X.materialIndex];if(ie&&ie.visible){const de=b(D,ie,A,w);D.onBeforeShadow(r,D,U,k,K,de,X),r.renderBufferDirect(k,null,K,de,D,X),D.onAfterShadow(r,D,U,k,K,de,X)}}}else if(Y.visible){const re=b(D,Y,A,w);D.onBeforeShadow(r,D,U,k,K,re,null),r.renderBufferDirect(k,null,K,re,D,null),D.onAfterShadow(r,D,U,k,K,re,null)}}const ne=D.children;for(let K=0,Y=ne.length;K<Y;K++)E(ne[K],U,k,A,w)}function L(D){D.target.removeEventListener("dispose",L);for(const k in o){const A=o[k],w=D.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}const w0={[ho]:fo,[po]:_o,[mo]:xo,[ls]:go,[fo]:ho,[_o]:po,[xo]:mo,[go]:ls};function R0(r,e){function t(){let B=!1;const he=new dt;let ge=null;const we=new dt(0,0,0,0);return{setMask:function(le){ge!==le&&!B&&(r.colorMask(le,le,le,le),ge=le)},setLocked:function(le){B=le},setClear:function(le,te,Pe,Ye,xt){xt===!0&&(le*=Ye,te*=Ye,Pe*=Ye),he.set(le,te,Pe,Ye),we.equals(he)===!1&&(r.clearColor(le,te,Pe,Ye),we.copy(he))},reset:function(){B=!1,ge=null,we.set(-1,0,0,0)}}}function n(){let B=!1,he=!1,ge=null,we=null,le=null;return{setReversed:function(te){if(he!==te){const Pe=e.get("EXT_clip_control");te?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),he=te;const Ye=le;le=null,this.setClear(Ye)}},getReversed:function(){return he},setTest:function(te){te?pe(r.DEPTH_TEST):Be(r.DEPTH_TEST)},setMask:function(te){ge!==te&&!B&&(r.depthMask(te),ge=te)},setFunc:function(te){if(he&&(te=w0[te]),we!==te){switch(te){case ho:r.depthFunc(r.NEVER);break;case fo:r.depthFunc(r.ALWAYS);break;case po:r.depthFunc(r.LESS);break;case ls:r.depthFunc(r.LEQUAL);break;case mo:r.depthFunc(r.EQUAL);break;case go:r.depthFunc(r.GEQUAL);break;case _o:r.depthFunc(r.GREATER);break;case xo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}we=te}},setLocked:function(te){B=te},setClear:function(te){le!==te&&(he&&(te=1-te),r.clearDepth(te),le=te)},reset:function(){B=!1,ge=null,we=null,le=null,he=!1}}}function s(){let B=!1,he=null,ge=null,we=null,le=null,te=null,Pe=null,Ye=null,xt=null;return{setTest:function(ut){B||(ut?pe(r.STENCIL_TEST):Be(r.STENCIL_TEST))},setMask:function(ut){he!==ut&&!B&&(r.stencilMask(ut),he=ut)},setFunc:function(ut,Sn,fn){(ge!==ut||we!==Sn||le!==fn)&&(r.stencilFunc(ut,Sn,fn),ge=ut,we=Sn,le=fn)},setOp:function(ut,Sn,fn){(te!==ut||Pe!==Sn||Ye!==fn)&&(r.stencilOp(ut,Sn,fn),te=ut,Pe=Sn,Ye=fn)},setLocked:function(ut){B=ut},setClear:function(ut){xt!==ut&&(r.clearStencil(ut),xt=ut)},reset:function(){B=!1,he=null,ge=null,we=null,le=null,te=null,Pe=null,Ye=null,xt=null}}}const i=new t,a=new n,l=new s,c=new WeakMap,o=new WeakMap;let h={},f={},p=new WeakMap,g=[],v=null,y=!1,x=null,m=null,C=null,b=null,E=null,L=null,D=null,U=new Ve(0,0,0),k=0,A=!1,w=null,N=null,ne=null,K=null,Y=null;const re=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ee=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=ee>=1):X.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=ee>=2);let ie=null,de={};const Ee=r.getParameter(r.SCISSOR_BOX),Xe=r.getParameter(r.VIEWPORT),pt=new dt().fromArray(Ee),ct=new dt().fromArray(Xe);function Z(B,he,ge,we){const le=new Uint8Array(4),te=r.createTexture();r.bindTexture(B,te),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Pe=0;Pe<ge;Pe++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(he,0,r.RGBA,1,1,we,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(he+Pe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return te}const _e={};_e[r.TEXTURE_2D]=Z(r.TEXTURE_2D,r.TEXTURE_2D,1),_e[r.TEXTURE_CUBE_MAP]=Z(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[r.TEXTURE_2D_ARRAY]=Z(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_e[r.TEXTURE_3D]=Z(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),l.setClear(0),pe(r.DEPTH_TEST),a.setFunc(ls),at(!1),Ne($l),pe(r.CULL_FACE),St(ui);function pe(B){h[B]!==!0&&(r.enable(B),h[B]=!0)}function Be(B){h[B]!==!1&&(r.disable(B),h[B]=!1)}function ke(B,he){return f[B]!==he?(r.bindFramebuffer(B,he),f[B]=he,B===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=he),B===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=he),!0):!1}function $e(B,he){let ge=g,we=!1;if(B){ge=p.get(he),ge===void 0&&(ge=[],p.set(he,ge));const le=B.textures;if(ge.length!==le.length||ge[0]!==r.COLOR_ATTACHMENT0){for(let te=0,Pe=le.length;te<Pe;te++)ge[te]=r.COLOR_ATTACHMENT0+te;ge.length=le.length,we=!0}}else ge[0]!==r.BACK&&(ge[0]=r.BACK,we=!0);we&&r.drawBuffers(ge)}function At(B){return v!==B?(r.useProgram(B),v=B,!0):!1}const rt={[bi]:r.FUNC_ADD,[kh]:r.FUNC_SUBTRACT,[zh]:r.FUNC_REVERSE_SUBTRACT};rt[Hh]=r.MIN,rt[Vh]=r.MAX;const F={[Gh]:r.ZERO,[Wh]:r.ONE,[Xh]:r.SRC_COLOR,[co]:r.SRC_ALPHA,[Zh]:r.SRC_ALPHA_SATURATE,[Kh]:r.DST_COLOR,[qh]:r.DST_ALPHA,[$h]:r.ONE_MINUS_SRC_COLOR,[uo]:r.ONE_MINUS_SRC_ALPHA,[jh]:r.ONE_MINUS_DST_COLOR,[Yh]:r.ONE_MINUS_DST_ALPHA,[Jh]:r.CONSTANT_COLOR,[Qh]:r.ONE_MINUS_CONSTANT_COLOR,[ef]:r.CONSTANT_ALPHA,[tf]:r.ONE_MINUS_CONSTANT_ALPHA};function St(B,he,ge,we,le,te,Pe,Ye,xt,ut){if(B===ui){y===!0&&(Be(r.BLEND),y=!1);return}if(y===!1&&(pe(r.BLEND),y=!0),B!==Bh){if(B!==x||ut!==A){if((m!==bi||E!==bi)&&(r.blendEquation(r.FUNC_ADD),m=bi,E=bi),ut)switch(B){case ss:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ql:r.blendFunc(r.ONE,r.ONE);break;case Yl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Kl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ss:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ql:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Yl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}C=null,b=null,L=null,D=null,U.set(0,0,0),k=0,x=B,A=ut}return}le=le||he,te=te||ge,Pe=Pe||we,(he!==m||le!==E)&&(r.blendEquationSeparate(rt[he],rt[le]),m=he,E=le),(ge!==C||we!==b||te!==L||Pe!==D)&&(r.blendFuncSeparate(F[ge],F[we],F[te],F[Pe]),C=ge,b=we,L=te,D=Pe),(Ye.equals(U)===!1||xt!==k)&&(r.blendColor(Ye.r,Ye.g,Ye.b,xt),U.copy(Ye),k=xt),x=B,A=!1}function Fe(B,he){B.side===In?Be(r.CULL_FACE):pe(r.CULL_FACE);let ge=B.side===rn;he&&(ge=!ge),at(ge),B.blending===ss&&B.transparent===!1?St(ui):St(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),i.setMask(B.colorWrite);const we=B.stencilWrite;l.setTest(we),we&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),be(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?pe(r.SAMPLE_ALPHA_TO_COVERAGE):Be(r.SAMPLE_ALPHA_TO_COVERAGE)}function at(B){w!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),w=B)}function Ne(B){B!==Nh?(pe(r.CULL_FACE),B!==N&&(B===$l?r.cullFace(r.BACK):B===Fh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Be(r.CULL_FACE),N=B}function mt(B){B!==ne&&(W&&r.lineWidth(B),ne=B)}function be(B,he,ge){B?(pe(r.POLYGON_OFFSET_FILL),(K!==he||Y!==ge)&&(r.polygonOffset(he,ge),K=he,Y=ge)):Be(r.POLYGON_OFFSET_FILL)}function Ze(B){B?pe(r.SCISSOR_TEST):Be(r.SCISSOR_TEST)}function Dt(B){B===void 0&&(B=r.TEXTURE0+re-1),ie!==B&&(r.activeTexture(B),ie=B)}function Ct(B,he,ge){ge===void 0&&(ie===null?ge=r.TEXTURE0+re-1:ge=ie);let we=de[ge];we===void 0&&(we={type:void 0,texture:void 0},de[ge]=we),(we.type!==B||we.texture!==he)&&(ie!==ge&&(r.activeTexture(ge),ie=ge),r.bindTexture(B,he||_e[B]),we.type=B,we.texture=he)}function P(){const B=de[ie];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function S(){try{r.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function G(){try{r.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{r.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{r.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{r.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(){try{r.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{r.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(){try{r.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{r.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ue(){try{r.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ye(B){pt.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),pt.copy(B))}function Ge(B){ct.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),ct.copy(B))}function De(B,he){let ge=o.get(he);ge===void 0&&(ge=new WeakMap,o.set(he,ge));let we=ge.get(B);we===void 0&&(we=r.getUniformBlockIndex(he,B.name),ge.set(B,we))}function xe(B,he){const we=o.get(he).get(B);c.get(he)!==we&&(r.uniformBlockBinding(he,we,B.__bindingPointIndex),c.set(he,we))}function je(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ie=null,de={},f={},p=new WeakMap,g=[],v=null,y=!1,x=null,m=null,C=null,b=null,E=null,L=null,D=null,U=new Ve(0,0,0),k=0,A=!1,w=null,N=null,ne=null,K=null,Y=null,pt.set(0,0,r.canvas.width,r.canvas.height),ct.set(0,0,r.canvas.width,r.canvas.height),i.reset(),a.reset(),l.reset()}return{buffers:{color:i,depth:a,stencil:l},enable:pe,disable:Be,bindFramebuffer:ke,drawBuffers:$e,useProgram:At,setBlending:St,setMaterial:Fe,setFlipSided:at,setCullFace:Ne,setLineWidth:mt,setPolygonOffset:be,setScissorTest:Ze,activeTexture:Dt,bindTexture:Ct,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:G,texImage2D:Ie,texImage3D:ue,updateUBOMapping:De,uniformBlockBinding:xe,texStorage2D:me,texStorage3D:Le,texSubImage2D:Q,texSubImage3D:ae,compressedTexSubImage2D:j,compressedTexSubImage3D:Ue,scissor:ye,viewport:Ge,reset:je}}function C0(r,e,t,n,s,i,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new Ke,h=new WeakMap;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,S){return g?new OffscreenCanvas(P,S):Js("canvas")}function y(P,S,G){let Q=1;const ae=Ct(P);if((ae.width>G||ae.height>G)&&(Q=G/Math.max(ae.width,ae.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const j=Math.floor(Q*ae.width),Ue=Math.floor(Q*ae.height);f===void 0&&(f=v(j,Ue));const me=S?v(j,Ue):f;return me.width=j,me.height=Ue,me.getContext("2d").drawImage(P,0,0,j,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+j+"x"+Ue+")."),me}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),P;return P}function x(P){return P.generateMipmaps}function m(P){r.generateMipmap(P)}function C(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(P,S,G,Q,ae=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=S;if(S===r.RED&&(G===r.FLOAT&&(j=r.R32F),G===r.HALF_FLOAT&&(j=r.R16F),G===r.UNSIGNED_BYTE&&(j=r.R8)),S===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.R8UI),G===r.UNSIGNED_SHORT&&(j=r.R16UI),G===r.UNSIGNED_INT&&(j=r.R32UI),G===r.BYTE&&(j=r.R8I),G===r.SHORT&&(j=r.R16I),G===r.INT&&(j=r.R32I)),S===r.RG&&(G===r.FLOAT&&(j=r.RG32F),G===r.HALF_FLOAT&&(j=r.RG16F),G===r.UNSIGNED_BYTE&&(j=r.RG8)),S===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.RG8UI),G===r.UNSIGNED_SHORT&&(j=r.RG16UI),G===r.UNSIGNED_INT&&(j=r.RG32UI),G===r.BYTE&&(j=r.RG8I),G===r.SHORT&&(j=r.RG16I),G===r.INT&&(j=r.RG32I)),S===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.RGB8UI),G===r.UNSIGNED_SHORT&&(j=r.RGB16UI),G===r.UNSIGNED_INT&&(j=r.RGB32UI),G===r.BYTE&&(j=r.RGB8I),G===r.SHORT&&(j=r.RGB16I),G===r.INT&&(j=r.RGB32I)),S===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),G===r.UNSIGNED_INT&&(j=r.RGBA32UI),G===r.BYTE&&(j=r.RGBA8I),G===r.SHORT&&(j=r.RGBA16I),G===r.INT&&(j=r.RGBA32I)),S===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),S===r.RGBA){const Ue=ae?Qr:lt.getTransfer(Q);G===r.FLOAT&&(j=r.RGBA32F),G===r.HALF_FLOAT&&(j=r.RGBA16F),G===r.UNSIGNED_BYTE&&(j=Ue===Et?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function E(P,S){let G;return P?S===null||S===Pi||S===qs?G=r.DEPTH24_STENCIL8:S===Rn?G=r.DEPTH32F_STENCIL8:S===$s&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Pi||S===qs?G=r.DEPTH_COMPONENT24:S===Rn?G=r.DEPTH_COMPONENT32F:S===$s&&(G=r.DEPTH_COMPONENT16),G}function L(P,S){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==Jt&&P.minFilter!==hn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function D(P){const S=P.target;S.removeEventListener("dispose",D),k(S),S.isVideoTexture&&h.delete(S)}function U(P){const S=P.target;S.removeEventListener("dispose",U),w(S)}function k(P){const S=n.get(P);if(S.__webglInit===void 0)return;const G=P.source,Q=p.get(G);if(Q){const ae=Q[S.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&A(P),Object.keys(Q).length===0&&p.delete(G)}n.remove(P)}function A(P){const S=n.get(P);r.deleteTexture(S.__webglTexture);const G=P.source,Q=p.get(G);delete Q[S.__cacheKey],a.memory.textures--}function w(P){const S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let ae=0;ae<S.__webglFramebuffer[Q].length;ae++)r.deleteFramebuffer(S.__webglFramebuffer[Q][ae]);else r.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)r.deleteFramebuffer(S.__webglFramebuffer[Q]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=P.textures;for(let Q=0,ae=G.length;Q<ae;Q++){const j=n.get(G[Q]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(G[Q])}n.remove(P)}let N=0;function ne(){N=0}function K(){const P=N;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),N+=1,P}function Y(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function re(P,S){const G=n.get(P);if(P.isVideoTexture&&Ze(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){const Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(G,P,S);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+S)}function W(P,S){const G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){_e(G,P,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+S)}function ee(P,S){const G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){_e(G,P,S);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+S)}function X(P,S){const G=n.get(P);if(P.version>0&&G.__version!==P.version){pe(G,P,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+S)}const ie={[hs]:r.REPEAT,[ci]:r.CLAMP_TO_EDGE,[Jr]:r.MIRRORED_REPEAT},de={[Jt]:r.NEAREST,[Cu]:r.NEAREST_MIPMAP_NEAREST,[Hs]:r.NEAREST_MIPMAP_LINEAR,[hn]:r.LINEAR,[Wr]:r.LINEAR_MIPMAP_NEAREST,[Yn]:r.LINEAR_MIPMAP_LINEAR},Ee={[xf]:r.NEVER,[Tf]:r.ALWAYS,[vf]:r.LESS,[Bu]:r.LEQUAL,[Mf]:r.EQUAL,[Ef]:r.GEQUAL,[yf]:r.GREATER,[Sf]:r.NOTEQUAL};function Xe(P,S){if(S.type===Rn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===hn||S.magFilter===Wr||S.magFilter===Hs||S.magFilter===Yn||S.minFilter===hn||S.minFilter===Wr||S.minFilter===Hs||S.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,ie[S.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,ie[S.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,ie[S.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,de[S.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,de[S.minFilter]),S.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Ee[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Jt||S.minFilter!==Hs&&S.minFilter!==Yn||S.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function pt(P,S){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",D));const Q=S.source;let ae=p.get(Q);ae===void 0&&(ae={},p.set(Q,ae));const j=Y(S);if(j!==P.__cacheKey){ae[j]===void 0&&(ae[j]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ae[j].usedTimes++;const Ue=ae[P.__cacheKey];Ue!==void 0&&(ae[P.__cacheKey].usedTimes--,Ue.usedTimes===0&&A(S)),P.__cacheKey=j,P.__webglTexture=ae[j].texture}return G}function ct(P,S,G){return Math.floor(Math.floor(P/G)/S)}function Z(P,S,G,Q){const j=P.updateRanges;if(j.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,G,Q,S.data);else{j.sort((ue,ye)=>ue.start-ye.start);let Ue=0;for(let ue=1;ue<j.length;ue++){const ye=j[Ue],Ge=j[ue],De=ye.start+ye.count,xe=ct(Ge.start,S.width,4),je=ct(ye.start,S.width,4);Ge.start<=De+1&&xe===je&&ct(Ge.start+Ge.count-1,S.width,4)===xe?ye.count=Math.max(ye.count,Ge.start+Ge.count-ye.start):(++Ue,j[Ue]=Ge)}j.length=Ue+1;const me=r.getParameter(r.UNPACK_ROW_LENGTH),Le=r.getParameter(r.UNPACK_SKIP_PIXELS),Ie=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let ue=0,ye=j.length;ue<ye;ue++){const Ge=j[ue],De=Math.floor(Ge.start/4),xe=Math.ceil(Ge.count/4),je=De%S.width,B=Math.floor(De/S.width),he=xe,ge=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,je),r.pixelStorei(r.UNPACK_SKIP_ROWS,B),t.texSubImage2D(r.TEXTURE_2D,0,je,B,he,ge,G,Q,S.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,me),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Le),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ie)}}function _e(P,S,G){let Q=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=r.TEXTURE_3D);const ae=pt(P,S),j=S.source;t.bindTexture(Q,P.__webglTexture,r.TEXTURE0+G);const Ue=n.get(j);if(j.version!==Ue.__version||ae===!0){t.activeTexture(r.TEXTURE0+G);const me=lt.getPrimaries(lt.workingColorSpace),Le=S.colorSpace===li?null:lt.getPrimaries(S.colorSpace),Ie=S.colorSpace===li||me===Le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ue=y(S.image,!1,s.maxTextureSize);ue=Dt(S,ue);const ye=i.convert(S.format,S.colorSpace),Ge=i.convert(S.type);let De=b(S.internalFormat,ye,Ge,S.colorSpace,S.isVideoTexture);Xe(Q,S);let xe;const je=S.mipmaps,B=S.isVideoTexture!==!0,he=Ue.__version===void 0||ae===!0,ge=j.dataReady,we=L(S,ue);if(S.isDepthTexture)De=E(S.format===Ks,S.type),he&&(B?t.texStorage2D(r.TEXTURE_2D,1,De,ue.width,ue.height):t.texImage2D(r.TEXTURE_2D,0,De,ue.width,ue.height,0,ye,Ge,null));else if(S.isDataTexture)if(je.length>0){B&&he&&t.texStorage2D(r.TEXTURE_2D,we,De,je[0].width,je[0].height);for(let le=0,te=je.length;le<te;le++)xe=je[le],B?ge&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,xe.width,xe.height,ye,Ge,xe.data):t.texImage2D(r.TEXTURE_2D,le,De,xe.width,xe.height,0,ye,Ge,xe.data);S.generateMipmaps=!1}else B?(he&&t.texStorage2D(r.TEXTURE_2D,we,De,ue.width,ue.height),ge&&Z(S,ue,ye,Ge)):t.texImage2D(r.TEXTURE_2D,0,De,ue.width,ue.height,0,ye,Ge,ue.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){B&&he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,we,De,je[0].width,je[0].height,ue.depth);for(let le=0,te=je.length;le<te;le++)if(xe=je[le],S.format!==vn)if(ye!==null)if(B){if(ge)if(S.layerUpdates.size>0){const Pe=Hc(xe.width,xe.height,S.format,S.type);for(const Ye of S.layerUpdates){const xt=xe.data.subarray(Ye*Pe/xe.data.BYTES_PER_ELEMENT,(Ye+1)*Pe/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,Ye,xe.width,xe.height,1,ye,xt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,xe.width,xe.height,ue.depth,ye,xe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,le,De,xe.width,xe.height,ue.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?ge&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,xe.width,xe.height,ue.depth,ye,Ge,xe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,le,De,xe.width,xe.height,ue.depth,0,ye,Ge,xe.data)}else{B&&he&&t.texStorage2D(r.TEXTURE_2D,we,De,je[0].width,je[0].height);for(let le=0,te=je.length;le<te;le++)xe=je[le],S.format!==vn?ye!==null?B?ge&&t.compressedTexSubImage2D(r.TEXTURE_2D,le,0,0,xe.width,xe.height,ye,xe.data):t.compressedTexImage2D(r.TEXTURE_2D,le,De,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?ge&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,xe.width,xe.height,ye,Ge,xe.data):t.texImage2D(r.TEXTURE_2D,le,De,xe.width,xe.height,0,ye,Ge,xe.data)}else if(S.isDataArrayTexture)if(B){if(he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,we,De,ue.width,ue.height,ue.depth),ge)if(S.layerUpdates.size>0){const le=Hc(ue.width,ue.height,S.format,S.type);for(const te of S.layerUpdates){const Pe=ue.data.subarray(te*le/ue.data.BYTES_PER_ELEMENT,(te+1)*le/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,te,ue.width,ue.height,1,ye,Ge,Pe)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ye,Ge,ue.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,De,ue.width,ue.height,ue.depth,0,ye,Ge,ue.data);else if(S.isData3DTexture)B?(he&&t.texStorage3D(r.TEXTURE_3D,we,De,ue.width,ue.height,ue.depth),ge&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ye,Ge,ue.data)):t.texImage3D(r.TEXTURE_3D,0,De,ue.width,ue.height,ue.depth,0,ye,Ge,ue.data);else if(S.isFramebufferTexture){if(he)if(B)t.texStorage2D(r.TEXTURE_2D,we,De,ue.width,ue.height);else{let le=ue.width,te=ue.height;for(let Pe=0;Pe<we;Pe++)t.texImage2D(r.TEXTURE_2D,Pe,De,le,te,0,ye,Ge,null),le>>=1,te>>=1}}else if(je.length>0){if(B&&he){const le=Ct(je[0]);t.texStorage2D(r.TEXTURE_2D,we,De,le.width,le.height)}for(let le=0,te=je.length;le<te;le++)xe=je[le],B?ge&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,ye,Ge,xe):t.texImage2D(r.TEXTURE_2D,le,De,ye,Ge,xe);S.generateMipmaps=!1}else if(B){if(he){const le=Ct(ue);t.texStorage2D(r.TEXTURE_2D,we,De,le.width,le.height)}ge&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ye,Ge,ue)}else t.texImage2D(r.TEXTURE_2D,0,De,ye,Ge,ue);x(S)&&m(Q),Ue.__version=j.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function pe(P,S,G){if(S.image.length!==6)return;const Q=pt(P,S),ae=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+G);const j=n.get(ae);if(ae.version!==j.__version||Q===!0){t.activeTexture(r.TEXTURE0+G);const Ue=lt.getPrimaries(lt.workingColorSpace),me=S.colorSpace===li?null:lt.getPrimaries(S.colorSpace),Le=S.colorSpace===li||Ue===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Ie=S.isCompressedTexture||S.image[0].isCompressedTexture,ue=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let te=0;te<6;te++)!Ie&&!ue?ye[te]=y(S.image[te],!0,s.maxCubemapSize):ye[te]=ue?S.image[te].image:S.image[te],ye[te]=Dt(S,ye[te]);const Ge=ye[0],De=i.convert(S.format,S.colorSpace),xe=i.convert(S.type),je=b(S.internalFormat,De,xe,S.colorSpace),B=S.isVideoTexture!==!0,he=j.__version===void 0||Q===!0,ge=ae.dataReady;let we=L(S,Ge);Xe(r.TEXTURE_CUBE_MAP,S);let le;if(Ie){B&&he&&t.texStorage2D(r.TEXTURE_CUBE_MAP,we,je,Ge.width,Ge.height);for(let te=0;te<6;te++){le=ye[te].mipmaps;for(let Pe=0;Pe<le.length;Pe++){const Ye=le[Pe];S.format!==vn?De!==null?B?ge&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,0,0,Ye.width,Ye.height,De,Ye.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,je,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,0,0,Ye.width,Ye.height,De,xe,Ye.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,je,Ye.width,Ye.height,0,De,xe,Ye.data)}}}else{if(le=S.mipmaps,B&&he){le.length>0&&we++;const te=Ct(ye[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,we,je,te.width,te.height)}for(let te=0;te<6;te++)if(ue){B?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ye[te].width,ye[te].height,De,xe,ye[te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,je,ye[te].width,ye[te].height,0,De,xe,ye[te].data);for(let Pe=0;Pe<le.length;Pe++){const xt=le[Pe].image[te].image;B?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,0,0,xt.width,xt.height,De,xe,xt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,je,xt.width,xt.height,0,De,xe,xt.data)}}else{B?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,De,xe,ye[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,je,De,xe,ye[te]);for(let Pe=0;Pe<le.length;Pe++){const Ye=le[Pe];B?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,0,0,De,xe,Ye.image[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,je,De,xe,Ye.image[te])}}}x(S)&&m(r.TEXTURE_CUBE_MAP),j.__version=ae.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Be(P,S,G,Q,ae,j){const Ue=i.convert(G.format,G.colorSpace),me=i.convert(G.type),Le=b(G.internalFormat,Ue,me,G.colorSpace),Ie=n.get(S),ue=n.get(G);if(ue.__renderTarget=S,!Ie.__hasExternalTextures){const ye=Math.max(1,S.width>>j),Ge=Math.max(1,S.height>>j);ae===r.TEXTURE_3D||ae===r.TEXTURE_2D_ARRAY?t.texImage3D(ae,j,Le,ye,Ge,S.depth,0,Ue,me,null):t.texImage2D(ae,j,Le,ye,Ge,0,Ue,me,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),be(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,ae,ue.__webglTexture,0,mt(S)):(ae===r.TEXTURE_2D||ae>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,ae,ue.__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ke(P,S,G){if(r.bindRenderbuffer(r.RENDERBUFFER,P),S.depthBuffer){const Q=S.depthTexture,ae=Q&&Q.isDepthTexture?Q.type:null,j=E(S.stencilBuffer,ae),Ue=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=mt(S);be(S)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,me,j,S.width,S.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,me,j,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,j,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ue,r.RENDERBUFFER,P)}else{const Q=S.textures;for(let ae=0;ae<Q.length;ae++){const j=Q[ae],Ue=i.convert(j.format,j.colorSpace),me=i.convert(j.type),Le=b(j.internalFormat,Ue,me,j.colorSpace),Ie=mt(S);G&&be(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,Le,S.width,S.height):be(S)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ie,Le,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Le,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function $e(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(S.depthTexture);Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),re(S.depthTexture,0);const ae=Q.__webglTexture,j=mt(S);if(S.depthTexture.format===Ys)be(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ae,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ae,0);else if(S.depthTexture.format===Ks)be(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ae,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function At(P){const S=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const Q=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const ae=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",ae)};Q.addEventListener("dispose",ae),S.__depthDisposeCallback=ae}S.__boundDepthTexture=Q}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const Q=P.texture.mipmaps;Q&&Q.length>0?$e(S.__webglFramebuffer[0],P):$e(S.__webglFramebuffer,P)}else if(G){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=r.createRenderbuffer(),ke(S.__webglDepthbuffer[Q],P,!1);else{const ae=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,j)}}else{const Q=P.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),ke(S.__webglDepthbuffer,P,!1);else{const ae=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,j)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function rt(P,S,G){const Q=n.get(P);S!==void 0&&Be(Q.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&At(P)}function F(P){const S=P.texture,G=n.get(P),Q=n.get(S);P.addEventListener("dispose",U);const ae=P.textures,j=P.isWebGLCubeRenderTarget===!0,Ue=ae.length>1;if(Ue||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=S.version,a.memory.textures++),j){G.__webglFramebuffer=[];for(let me=0;me<6;me++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[me]=[];for(let Le=0;Le<S.mipmaps.length;Le++)G.__webglFramebuffer[me][Le]=r.createFramebuffer()}else G.__webglFramebuffer[me]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let me=0;me<S.mipmaps.length;me++)G.__webglFramebuffer[me]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(Ue)for(let me=0,Le=ae.length;me<Le;me++){const Ie=n.get(ae[me]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&be(P)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let me=0;me<ae.length;me++){const Le=ae[me];G.__webglColorRenderbuffer[me]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[me]);const Ie=i.convert(Le.format,Le.colorSpace),ue=i.convert(Le.type),ye=b(Le.internalFormat,Ie,ue,Le.colorSpace,P.isXRRenderTarget===!0),Ge=mt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge,ye,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,G.__webglColorRenderbuffer[me])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),ke(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),Xe(r.TEXTURE_CUBE_MAP,S);for(let me=0;me<6;me++)if(S.mipmaps&&S.mipmaps.length>0)for(let Le=0;Le<S.mipmaps.length;Le++)Be(G.__webglFramebuffer[me][Le],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le);else Be(G.__webglFramebuffer[me],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);x(S)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let me=0,Le=ae.length;me<Le;me++){const Ie=ae[me],ue=n.get(Ie);let ye=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ye=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ye,ue.__webglTexture),Xe(ye,Ie),Be(G.__webglFramebuffer,P,Ie,r.COLOR_ATTACHMENT0+me,ye,0),x(Ie)&&m(ye)}t.unbindTexture()}else{let me=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(me=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(me,Q.__webglTexture),Xe(me,S),S.mipmaps&&S.mipmaps.length>0)for(let Le=0;Le<S.mipmaps.length;Le++)Be(G.__webglFramebuffer[Le],P,S,r.COLOR_ATTACHMENT0,me,Le);else Be(G.__webglFramebuffer,P,S,r.COLOR_ATTACHMENT0,me,0);x(S)&&m(me),t.unbindTexture()}P.depthBuffer&&At(P)}function St(P){const S=P.textures;for(let G=0,Q=S.length;G<Q;G++){const ae=S[G];if(x(ae)){const j=C(P),Ue=n.get(ae).__webglTexture;t.bindTexture(j,Ue),m(j),t.unbindTexture()}}}const Fe=[],at=[];function Ne(P){if(P.samples>0){if(be(P)===!1){const S=P.textures,G=P.width,Q=P.height;let ae=r.COLOR_BUFFER_BIT;const j=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ue=n.get(P),me=S.length>1;if(me)for(let Ie=0;Ie<S.length;Ie++)t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const Le=P.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ie=0;Ie<S.length;Ie++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ae|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ae|=r.STENCIL_BUFFER_BIT)),me){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ie]);const ue=n.get(S[Ie]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ue,0)}r.blitFramebuffer(0,0,G,Q,0,0,G,Q,ae,r.NEAREST),c===!0&&(Fe.length=0,at.length=0,Fe.push(r.COLOR_ATTACHMENT0+Ie),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Fe.push(j),at.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,at)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),me)for(let Ie=0;Ie<S.length;Ie++){t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ie]);const ue=n.get(S[Ie]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.TEXTURE_2D,ue,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const S=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function mt(P){return Math.min(s.maxSamples,P.samples)}function be(P){const S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ze(P){const S=a.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function Dt(P,S){const G=P.colorSpace,Q=P.format,ae=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==tn&&G!==li&&(lt.getTransfer(G)===Et?(Q!==vn||ae!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function Ct(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(o.width=P.naturalWidth||P.width,o.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(o.width=P.displayWidth,o.height=P.displayHeight):(o.width=P.width,o.height=P.height),o}this.allocateTextureUnit=K,this.resetTextureUnits=ne,this.setTexture2D=re,this.setTexture2DArray=W,this.setTexture3D=ee,this.setTextureCube=X,this.rebindTextures=rt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=be}function P0(r,e){function t(n,s=li){let i;const a=lt.getTransfer(s);if(n===Un)return r.UNSIGNED_BYTE;if(n===il)return r.UNSIGNED_SHORT_4_4_4_4;if(n===sl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Iu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Pu)return r.BYTE;if(n===Lu)return r.SHORT;if(n===$s)return r.UNSIGNED_SHORT;if(n===nl)return r.INT;if(n===Pi)return r.UNSIGNED_INT;if(n===Rn)return r.FLOAT;if(n===er)return r.HALF_FLOAT;if(n===Du)return r.ALPHA;if(n===Uu)return r.RGB;if(n===vn)return r.RGBA;if(n===Ys)return r.DEPTH_COMPONENT;if(n===Ks)return r.DEPTH_STENCIL;if(n===rl)return r.RED;if(n===al)return r.RED_INTEGER;if(n===Nu)return r.RG;if(n===ol)return r.RG_INTEGER;if(n===ll)return r.RGBA_INTEGER;if(n===Xr||n===$r||n===qr||n===Yr)if(a===Et)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(n===Xr)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$r)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qr)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yr)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(n===Xr)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$r)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qr)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yr)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yo||n===So||n===Eo||n===To)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(n===yo)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===So)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Eo)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===To)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bo||n===Ao||n===wo)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(n===bo||n===Ao)return a===Et?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===wo)return a===Et?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ro||n===Co||n===Po||n===Lo||n===Io||n===Do||n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===ko||n===zo||n===Ho)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(n===Ro)return a===Et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Co)return a===Et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Po)return a===Et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lo)return a===Et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Io)return a===Et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Do)return a===Et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uo)return a===Et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===No)return a===Et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fo)return a===Et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oo)return a===Et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bo)return a===Et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ko)return a===Et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zo)return a===Et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ho)return a===Et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kr||n===Vo||n===Go)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(n===Kr)return a===Et?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vo)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Go)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fu||n===Wo||n===Xo||n===$o)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(n===Kr)return i.COMPRESSED_RED_RGTC1_EXT;if(n===Wo)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xo)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$o)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class hh extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const L0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I0=`
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

}`;class D0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new hh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new fi({vertexShader:L0,fragmentShader:I0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new sn(new ra(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U0 extends _s{constructor(e,t){super();const n=this;let s=null,i=1,a=null,l="local-floor",c=1,o=null,h=null,f=null,p=null,g=null,v=null;const y=new D0,x={},m=t.getContextAttributes();let C=null,b=null;const E=[],L=[],D=new Ke;let U=null;const k=new qt;k.viewport=new dt;const A=new qt;A.viewport=new dt;const w=[k,A],N=new $d;let ne=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let _e=E[Z];return _e===void 0&&(_e=new Ha,E[Z]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(Z){let _e=E[Z];return _e===void 0&&(_e=new Ha,E[Z]=_e),_e.getGripSpace()},this.getHand=function(Z){let _e=E[Z];return _e===void 0&&(_e=new Ha,E[Z]=_e),_e.getHandSpace()};function Y(Z){const _e=L.indexOf(Z.inputSource);if(_e===-1)return;const pe=E[_e];pe!==void 0&&(pe.update(Z.inputSource,Z.frame,o||a),pe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function re(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",re),s.removeEventListener("inputsourceschange",W);for(let Z=0;Z<E.length;Z++){const _e=L[Z];_e!==null&&(L[Z]=null,E[Z].disconnect(_e))}ne=null,K=null,y.reset();for(const Z in x)delete x[Z];e.setRenderTarget(C),g=null,p=null,f=null,s=null,b=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){i=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){l=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||a},this.setReferenceSpace=function(Z){o=Z},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",re),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&(f=new XRWebGLBinding(s,t)),f!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Be=null,ke=null;m.depth&&(ke=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=m.stencil?Ks:Ys,Be=m.stencil?qs:Pi);const $e={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:i};p=f.createProjectionLayer($e),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),b=new Li(p.textureWidth,p.textureHeight,{format:vn,type:Un,depthTexture:new th(p.textureWidth,p.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const pe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:i};g=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),b=new Li(g.framebufferWidth,g.framebufferHeight,{format:vn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),o=null,a=await s.requestReferenceSpace(l),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(Z){for(let _e=0;_e<Z.removed.length;_e++){const pe=Z.removed[_e],Be=L.indexOf(pe);Be>=0&&(L[Be]=null,E[Be].disconnect(pe))}for(let _e=0;_e<Z.added.length;_e++){const pe=Z.added[_e];let Be=L.indexOf(pe);if(Be===-1){for(let $e=0;$e<E.length;$e++)if($e>=L.length){L.push(pe),Be=$e;break}else if(L[$e]===null){L[$e]=pe,Be=$e;break}if(Be===-1)break}const ke=E[Be];ke&&ke.connect(pe)}}const ee=new O,X=new O;function ie(Z,_e,pe){ee.setFromMatrixPosition(_e.matrixWorld),X.setFromMatrixPosition(pe.matrixWorld);const Be=ee.distanceTo(X),ke=_e.projectionMatrix.elements,$e=pe.projectionMatrix.elements,At=ke[14]/(ke[10]-1),rt=ke[14]/(ke[10]+1),F=(ke[9]+1)/ke[5],St=(ke[9]-1)/ke[5],Fe=(ke[8]-1)/ke[0],at=($e[8]+1)/$e[0],Ne=At*Fe,mt=At*at,be=Be/(-Fe+at),Ze=be*-Fe;if(_e.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ze),Z.translateZ(be),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ke[10]===-1)Z.projectionMatrix.copy(_e.projectionMatrix),Z.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Dt=At+be,Ct=rt+be,P=Ne-Ze,S=mt+(Be-Ze),G=F*rt/Ct*Dt,Q=St*rt/Ct*Dt;Z.projectionMatrix.makePerspective(P,S,G,Q,Dt,Ct),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function de(Z,_e){_e===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(_e.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let _e=Z.near,pe=Z.far;y.texture!==null&&(y.depthNear>0&&(_e=y.depthNear),y.depthFar>0&&(pe=y.depthFar)),N.near=A.near=k.near=_e,N.far=A.far=k.far=pe,(ne!==N.near||K!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),ne=N.near,K=N.far),N.layers.mask=Z.layers.mask|6,k.layers.mask=N.layers.mask&3,A.layers.mask=N.layers.mask&5;const Be=Z.parent,ke=N.cameras;de(N,Be);for(let $e=0;$e<ke.length;$e++)de(ke[$e],Be);ke.length===2?ie(N,k,A):N.projectionMatrix.copy(k.projectionMatrix),Ee(Z,N,Be)};function Ee(Z,_e,pe){pe===null?Z.matrix.copy(_e.matrixWorld):(Z.matrix.copy(pe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(_e.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(_e.projectionMatrix),Z.projectionMatrixInverse.copy(_e.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=fs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(p===null&&g===null))return c},this.setFoveation=function(Z){c=Z,p!==null&&(p.fixedFoveation=Z),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(N)},this.getCameraTexture=function(Z){return x[Z]};let Xe=null;function pt(Z,_e){if(h=_e.getViewerPose(o||a),v=_e,h!==null){const pe=h.views;g!==null&&(e.setRenderTargetFramebuffer(b,g.framebuffer),e.setRenderTarget(b));let Be=!1;pe.length!==N.cameras.length&&(N.cameras.length=0,Be=!0);for(let rt=0;rt<pe.length;rt++){const F=pe[rt];let St=null;if(g!==null)St=g.getViewport(F);else{const at=f.getViewSubImage(p,F);St=at.viewport,rt===0&&(e.setRenderTargetTextures(b,at.colorTexture,at.depthStencilTexture),e.setRenderTarget(b))}let Fe=w[rt];Fe===void 0&&(Fe=new qt,Fe.layers.enable(rt),Fe.viewport=new dt,w[rt]=Fe),Fe.matrix.fromArray(F.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(F.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(St.x,St.y,St.width,St.height),rt===0&&(N.matrix.copy(Fe.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Be===!0&&N.cameras.push(Fe)}const ke=s.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&f){const rt=f.getDepthInformation(pe[0]);rt&&rt.isValid&&rt.texture&&y.init(rt,s.renderState)}if(ke&&ke.includes("camera-access")&&(e.state.unbindTexture(),f))for(let rt=0;rt<pe.length;rt++){const F=pe[rt].camera;if(F){let St=x[F];St||(St=new hh,x[F]=St);const Fe=f.getCameraImage(F);St.sourceTexture=Fe}}}for(let pe=0;pe<E.length;pe++){const Be=L[pe],ke=E[pe];Be!==null&&ke!==void 0&&ke.update(Be,_e,o||a)}Xe&&Xe(Z,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),v=null}const ct=new ah;ct.setAnimationLoop(pt),this.setAnimationLoop=function(Z){Xe=Z},this.dispose=function(){}}}const Mi=new yn,N0=new Qe;function F0(r,e){function t(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function n(x,m){m.color.getRGB(x.fogColor.value,Xu(r)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,C,b,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(x,m):m.isMeshToonMaterial?(i(x,m),f(x,m)):m.isMeshPhongMaterial?(i(x,m),h(x,m)):m.isMeshStandardMaterial?(i(x,m),p(x,m),m.isMeshPhysicalMaterial&&g(x,m,E)):m.isMeshMatcapMaterial?(i(x,m),v(x,m)):m.isMeshDepthMaterial?i(x,m):m.isMeshDistanceMaterial?(i(x,m),y(x,m)):m.isMeshNormalMaterial?i(x,m):m.isLineBasicMaterial?(a(x,m),m.isLineDashedMaterial&&l(x,m)):m.isPointsMaterial?c(x,m,C,b):m.isSpriteMaterial?o(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,t(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===rn&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,t(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===rn&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,t(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,t(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);const C=e.get(m),b=C.envMap,E=C.envMapRotation;b&&(x.envMap.value=b,Mi.copy(E),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),x.envMapRotation.value.setFromMatrix4(N0.makeRotationFromEuler(Mi)),x.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,x.aoMapTransform))}function a(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform))}function l(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function c(x,m,C,b){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*C,x.scale.value=b*.5,m.map&&(x.map.value=m.map,t(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function o(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function f(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function p(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function g(x,m,C){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rn&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,x.specularIntensityMapTransform))}function v(x,m){m.matcap&&(x.matcap.value=m.matcap)}function y(x,m){const C=e.get(m).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function O0(r,e,t,n){let s={},i={},a=[];const l=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,b){const E=b.program;n.uniformBlockBinding(C,E)}function o(C,b){let E=s[C.id];E===void 0&&(v(C),E=h(C),s[C.id]=E,C.addEventListener("dispose",x));const L=b.program;n.updateUBOMapping(C,L);const D=e.render.frame;i[C.id]!==D&&(p(C),i[C.id]=D)}function h(C){const b=f();C.__bindingPointIndex=b;const E=r.createBuffer(),L=C.__size,D=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,L,D),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,E),E}function f(){for(let C=0;C<l;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(C){const b=s[C.id],E=C.uniforms,L=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let D=0,U=E.length;D<U;D++){const k=Array.isArray(E[D])?E[D]:[E[D]];for(let A=0,w=k.length;A<w;A++){const N=k[A];if(g(N,D,A,L)===!0){const ne=N.__offset,K=Array.isArray(N.value)?N.value:[N.value];let Y=0;for(let re=0;re<K.length;re++){const W=K[re],ee=y(W);typeof W=="number"||typeof W=="boolean"?(N.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,ne+Y,N.__data)):W.isMatrix3?(N.__data[0]=W.elements[0],N.__data[1]=W.elements[1],N.__data[2]=W.elements[2],N.__data[3]=0,N.__data[4]=W.elements[3],N.__data[5]=W.elements[4],N.__data[6]=W.elements[5],N.__data[7]=0,N.__data[8]=W.elements[6],N.__data[9]=W.elements[7],N.__data[10]=W.elements[8],N.__data[11]=0):(W.toArray(N.__data,Y),Y+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ne,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function g(C,b,E,L){const D=C.value,U=b+"_"+E;if(L[U]===void 0)return typeof D=="number"||typeof D=="boolean"?L[U]=D:L[U]=D.clone(),!0;{const k=L[U];if(typeof D=="number"||typeof D=="boolean"){if(k!==D)return L[U]=D,!0}else if(k.equals(D)===!1)return k.copy(D),!0}return!1}function v(C){const b=C.uniforms;let E=0;const L=16;for(let U=0,k=b.length;U<k;U++){const A=Array.isArray(b[U])?b[U]:[b[U]];for(let w=0,N=A.length;w<N;w++){const ne=A[w],K=Array.isArray(ne.value)?ne.value:[ne.value];for(let Y=0,re=K.length;Y<re;Y++){const W=K[Y],ee=y(W),X=E%L,ie=X%ee.boundary,de=X+ie;E+=ie,de!==0&&L-de<ee.storage&&(E+=L-de),ne.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=E,E+=ee.storage}}}const D=E%L;return D>0&&(E+=L-D),C.__size=E,C.__cache={},this}function y(C){const b={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(b.boundary=4,b.storage=4):C.isVector2?(b.boundary=8,b.storage=8):C.isVector3||C.isColor?(b.boundary=16,b.storage=12):C.isVector4?(b.boundary=16,b.storage=16):C.isMatrix3?(b.boundary=48,b.storage=48):C.isMatrix4?(b.boundary=64,b.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),b}function x(C){const b=C.target;b.removeEventListener("dispose",x);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),r.deleteBuffer(s[b.id]),delete s[b.id],delete i[b.id]}function m(){for(const C in s)r.deleteBuffer(s[C]);a=[],s={},i={}}return{bind:c,update:o,dispose:m}}class fu{constructor(e={}){const{canvas:t=Hf(),context:n=null,depth:s=!0,stencil:i=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:o=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const v=new Uint32Array(4),y=new Int32Array(4);let x=null,m=null;const C=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let L=!1;this._outputColorSpace=Gt;let D=0,U=0,k=null,A=-1,w=null;const N=new dt,ne=new dt;let K=null;const Y=new Ve(0);let re=0,W=t.width,ee=t.height,X=1,ie=null,de=null;const Ee=new dt(0,0,W,ee),Xe=new dt(0,0,W,ee);let pt=!1;const ct=new dl;let Z=!1,_e=!1;const pe=new Qe,Be=new O,ke=new dt,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function rt(){return k===null?X:1}let F=n;function St(T,z){return t.getContext(T,z)}try{const T={alpha:!0,depth:s,stencil:i,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:o,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${el}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",le,!1),F===null){const z="webgl2";if(F=St(z,T),F===null)throw St(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Fe,at,Ne,mt,be,Ze,Dt,Ct,P,S,G,Q,ae,j,Ue,me,Le,Ie,ue,ye,Ge,De,xe,je;function B(){Fe=new Yg(F),Fe.init(),De=new P0(F,Fe),at=new Hg(F,Fe,e,De),Ne=new R0(F,Fe),at.reversedDepthBuffer&&p&&Ne.buffers.depth.setReversed(!0),mt=new Zg(F),be=new m0,Ze=new C0(F,Fe,Ne,be,at,De,mt),Dt=new Gg(E),Ct=new qg(E),P=new ip(F),xe=new kg(F,P),S=new Kg(F,P,mt,xe),G=new Qg(F,S,P,mt),ue=new Jg(F,at,Ze),me=new Vg(be),Q=new p0(E,Dt,Ct,Fe,at,xe,me),ae=new F0(E,be),j=new _0,Ue=new E0(Fe),Ie=new Bg(E,Dt,Ct,Ne,G,g,c),Le=new A0(E,G,at),je=new O0(F,mt,at,Ne),ye=new zg(F,Fe,mt),Ge=new jg(F,Fe,mt),mt.programs=Q.programs,E.capabilities=at,E.extensions=Fe,E.properties=be,E.renderLists=j,E.shadowMap=Le,E.state=Ne,E.info=mt}B();const he=new U0(E,F);this.xr=he,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=Fe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Fe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(W,ee,!1))},this.getSize=function(T){return T.set(W,ee)},this.setSize=function(T,z,$=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,ee=z,t.width=Math.floor(T*X),t.height=Math.floor(z*X),$===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(W*X,ee*X).floor()},this.setDrawingBufferSize=function(T,z,$){W=T,ee=z,X=$,t.width=Math.floor(T*$),t.height=Math.floor(z*$),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(N)},this.getViewport=function(T){return T.copy(Ee)},this.setViewport=function(T,z,$,q){T.isVector4?Ee.set(T.x,T.y,T.z,T.w):Ee.set(T,z,$,q),Ne.viewport(N.copy(Ee).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(Xe)},this.setScissor=function(T,z,$,q){T.isVector4?Xe.set(T.x,T.y,T.z,T.w):Xe.set(T,z,$,q),Ne.scissor(ne.copy(Xe).multiplyScalar(X).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(T){Ne.setScissorTest(pt=T)},this.setOpaqueSort=function(T){ie=T},this.setTransparentSort=function(T){de=T},this.getClearColor=function(T){return T.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,$=!0){let q=0;if(T){let H=!1;if(k!==null){const ce=k.texture.format;H=ce===ll||ce===ol||ce===al}if(H){const ce=k.texture.type,Se=ce===Un||ce===Pi||ce===$s||ce===qs||ce===il||ce===sl,Re=Ie.getClearColor(),Ae=Ie.getClearAlpha(),He=Re.r,We=Re.g,Oe=Re.b;Se?(v[0]=He,v[1]=We,v[2]=Oe,v[3]=Ae,F.clearBufferuiv(F.COLOR,0,v)):(y[0]=He,y[1]=We,y[2]=Oe,y[3]=Ae,F.clearBufferiv(F.COLOR,0,y))}else q|=F.COLOR_BUFFER_BIT}z&&(q|=F.DEPTH_BUFFER_BIT),$&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Ie.dispose(),j.dispose(),Ue.dispose(),be.dispose(),Dt.dispose(),Ct.dispose(),G.dispose(),xe.dispose(),je.dispose(),Q.dispose(),he.dispose(),he.removeEventListener("sessionstart",fn),he.removeEventListener("sessionend",ir),Bn.stop()};function ge(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const T=mt.autoReset,z=Le.enabled,$=Le.autoUpdate,q=Le.needsUpdate,H=Le.type;B(),mt.autoReset=T,Le.enabled=z,Le.autoUpdate=$,Le.needsUpdate=q,Le.type=H}function le(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function te(T){const z=T.target;z.removeEventListener("dispose",te),Pe(z)}function Pe(T){Ye(T),be.remove(T)}function Ye(T){const z=be.get(T).programs;z!==void 0&&(z.forEach(function($){Q.releaseProgram($)}),T.isShaderMaterial&&Q.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,$,q,H,ce){z===null&&(z=$e);const Se=H.isMesh&&H.matrixWorld.determinant()<0,Re=la(T,z,$,q,H);Ne.setMaterial(q,Se);let Ae=$.index,He=1;if(q.wireframe===!0){if(Ae=S.getWireframeAttribute($),Ae===void 0)return;He=2}const We=$.drawRange,Oe=$.attributes.position;let tt=We.start*He,ft=(We.start+We.count)*He;ce!==null&&(tt=Math.max(tt,ce.start*He),ft=Math.min(ft,(ce.start+ce.count)*He)),Ae!==null?(tt=Math.max(tt,0),ft=Math.min(ft,Ae.count)):Oe!=null&&(tt=Math.max(tt,0),ft=Math.min(ft,Oe.count));const Pt=ft-tt;if(Pt<0||Pt===1/0)return;xe.setup(H,q,Re,$,Ae);let bt,gt=ye;if(Ae!==null&&(bt=P.get(Ae),gt=Ge,gt.setIndex(bt)),H.isMesh)q.wireframe===!0?(Ne.setLineWidth(q.wireframeLinewidth*rt()),gt.setMode(F.LINES)):gt.setMode(F.TRIANGLES);else if(H.isLine){let ze=q.linewidth;ze===void 0&&(ze=1),Ne.setLineWidth(ze*rt()),H.isLineSegments?gt.setMode(F.LINES):H.isLineLoop?gt.setMode(F.LINE_LOOP):gt.setMode(F.LINE_STRIP)}else H.isPoints?gt.setMode(F.POINTS):H.isSprite&&gt.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)rs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))gt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const ze=H._multiDrawStarts,Rt=H._multiDrawCounts,ot=H._multiDrawCount,Yt=Ae?P.get(Ae).bytesPerElement:1,Jn=be.get(q).currentProgram.getUniforms();for(let Wt=0;Wt<ot;Wt++)Jn.setValue(F,"_gl_DrawID",Wt),gt.render(ze[Wt]/Yt,Rt[Wt])}else if(H.isInstancedMesh)gt.renderInstances(tt,Pt,H.count);else if($.isInstancedBufferGeometry){const ze=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Rt=Math.min($.instanceCount,ze);gt.renderInstances(tt,Pt,Rt)}else gt.render(tt,Pt)};function xt(T,z,$){T.transparent===!0&&T.side===In&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,Ui(T,z,$),T.side=Zn,T.needsUpdate=!0,Ui(T,z,$),T.side=In):Ui(T,z,$)}this.compile=function(T,z,$=null){$===null&&($=T),m=Ue.get($),m.init(z),b.push(m),$.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),T!==$&&T.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const q=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ce=H.material;if(ce)if(Array.isArray(ce))for(let Se=0;Se<ce.length;Se++){const Re=ce[Se];xt(Re,$,H),q.add(Re)}else xt(ce,$,H),q.add(ce)}),m=b.pop(),q},this.compileAsync=function(T,z,$=null){const q=this.compile(T,z,$);return new Promise(H=>{function ce(){if(q.forEach(function(Se){be.get(Se).currentProgram.isReady()&&q.delete(Se)}),q.size===0){H(T);return}setTimeout(ce,10)}Fe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let ut=null;function Sn(T){ut&&ut(T)}function fn(){Bn.stop()}function ir(){Bn.start()}const Bn=new ah;Bn.setAnimationLoop(Sn),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(T){ut=T,he.setAnimationLoop(T),T===null?Bn.stop():Bn.start()},he.addEventListener("sessionstart",fn),he.addEventListener("sessionend",ir),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(z),z=he.getCamera()),T.isScene===!0&&T.onBeforeRender(E,T,z,k),m=Ue.get(T,b.length),m.init(z),b.push(m),pe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ct.setFromProjectionMatrix(pe,Dn,z.reversedDepth),_e=this.localClippingEnabled,Z=me.init(this.clippingPlanes,_e),x=j.get(T,C.length),x.init(),C.push(x),he.enabled===!0&&he.isPresenting===!0){const ce=E.xr.getDepthSensingMesh();ce!==null&&Ss(ce,z,-1/0,E.sortObjects)}Ss(T,z,0,E.sortObjects),x.finish(),E.sortObjects===!0&&x.sort(ie,de),At=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,At&&Ie.addToRenderList(x,T),this.info.render.frame++,Z===!0&&me.beginShadows();const $=m.state.shadowsArray;Le.render($,T,z),Z===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=x.opaque,H=x.transmissive;if(m.setupLights(),z.isArrayCamera){const ce=z.cameras;if(H.length>0)for(let Se=0,Re=ce.length;Se<Re;Se++){const Ae=ce[Se];Ts(q,H,T,Ae)}At&&Ie.render(T);for(let Se=0,Re=ce.length;Se<Re;Se++){const Ae=ce[Se];Es(x,T,Ae,Ae.viewport)}}else H.length>0&&Ts(q,H,T,z),At&&Ie.render(T),Es(x,T,z);k!==null&&U===0&&(Ze.updateMultisampleRenderTarget(k),Ze.updateRenderTargetMipmap(k)),T.isScene===!0&&T.onAfterRender(E,T,z),xe.resetDefaultState(),A=-1,w=null,b.pop(),b.length>0?(m=b[b.length-1],Z===!0&&me.setGlobalState(E.clippingPlanes,m.state.camera)):m=null,C.pop(),C.length>0?x=C[C.length-1]:x=null};function Ss(T,z,$,q){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ct.intersectsSprite(T)){q&&ke.setFromMatrixPosition(T.matrixWorld).applyMatrix4(pe);const Se=G.update(T),Re=T.material;Re.visible&&x.push(T,Se,Re,$,ke.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ct.intersectsObject(T))){const Se=G.update(T),Re=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ke.copy(T.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ke.copy(Se.boundingSphere.center)),ke.applyMatrix4(T.matrixWorld).applyMatrix4(pe)),Array.isArray(Re)){const Ae=Se.groups;for(let He=0,We=Ae.length;He<We;He++){const Oe=Ae[He],tt=Re[Oe.materialIndex];tt&&tt.visible&&x.push(T,Se,tt,$,ke.z,Oe)}}else Re.visible&&x.push(T,Se,Re,$,ke.z,null)}}const ce=T.children;for(let Se=0,Re=ce.length;Se<Re;Se++)Ss(ce[Se],z,$,q)}function Es(T,z,$,q){const H=T.opaque,ce=T.transmissive,Se=T.transparent;m.setupLightsView($),Z===!0&&me.setGlobalState(E.clippingPlanes,$),q&&Ne.viewport(N.copy(q)),H.length>0&&Di(H,z,$),ce.length>0&&Di(ce,z,$),Se.length>0&&Di(Se,z,$),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Ts(T,z,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new Li(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?er:Un,minFilter:Yn,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const ce=m.state.transmissionRenderTarget[q.id],Se=q.viewport||N;ce.setSize(Se.z*E.transmissionResolutionScale,Se.w*E.transmissionResolutionScale);const Re=E.getRenderTarget(),Ae=E.getActiveCubeFace(),He=E.getActiveMipmapLevel();E.setRenderTarget(ce),E.getClearColor(Y),re=E.getClearAlpha(),re<1&&E.setClearColor(16777215,.5),E.clear(),At&&Ie.render($);const We=E.toneMapping;E.toneMapping=hi;const Oe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),Z===!0&&me.setGlobalState(E.clippingPlanes,q),Di(T,$,q),Ze.updateMultisampleRenderTarget(ce),Ze.updateRenderTargetMipmap(ce),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let ft=0,Pt=z.length;ft<Pt;ft++){const bt=z[ft],gt=bt.object,ze=bt.geometry,Rt=bt.material,ot=bt.group;if(Rt.side===In&&gt.layers.test(q.layers)){const Yt=Rt.side;Rt.side=rn,Rt.needsUpdate=!0,sr(gt,$,q,ze,Rt,ot),Rt.side=Yt,Rt.needsUpdate=!0,tt=!0}}tt===!0&&(Ze.updateMultisampleRenderTarget(ce),Ze.updateRenderTargetMipmap(ce))}E.setRenderTarget(Re,Ae,He),E.setClearColor(Y,re),Oe!==void 0&&(q.viewport=Oe),E.toneMapping=We}function Di(T,z,$){const q=z.isScene===!0?z.overrideMaterial:null;for(let H=0,ce=T.length;H<ce;H++){const Se=T[H],Re=Se.object,Ae=Se.geometry,He=Se.group;let We=Se.material;We.allowOverride===!0&&q!==null&&(We=q),Re.layers.test($.layers)&&sr(Re,z,$,Ae,We,He)}}function sr(T,z,$,q,H,ce){T.onBeforeRender(E,z,$,q,H,ce),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(E,z,$,q,T,ce),H.transparent===!0&&H.side===In&&H.forceSinglePass===!1?(H.side=rn,H.needsUpdate=!0,E.renderBufferDirect($,z,q,H,T,ce),H.side=Zn,H.needsUpdate=!0,E.renderBufferDirect($,z,q,H,T,ce),H.side=In):E.renderBufferDirect($,z,q,H,T,ce),T.onAfterRender(E,z,$,q,H,ce)}function Ui(T,z,$){z.isScene!==!0&&(z=$e);const q=be.get(T),H=m.state.lights,ce=m.state.shadowsArray,Se=H.state.version,Re=Q.getParameters(T,H.state,ce,z,$),Ae=Q.getProgramCacheKey(Re);let He=q.programs;q.environment=T.isMeshStandardMaterial?z.environment:null,q.fog=z.fog,q.envMap=(T.isMeshStandardMaterial?Ct:Dt).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,He===void 0&&(T.addEventListener("dispose",te),He=new Map,q.programs=He);let We=He.get(Ae);if(We!==void 0){if(q.currentProgram===We&&q.lightsStateVersion===Se)return ar(T,Re),We}else Re.uniforms=Q.getUniforms(T),T.onBeforeCompile(Re,E),We=Q.acquireProgram(Re,Ae),He.set(Ae,We),q.uniforms=Re.uniforms;const Oe=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Oe.clippingPlanes=me.uniform),ar(T,Re),q.needsLights=ua(T),q.lightsStateVersion=Se,q.needsLights&&(Oe.ambientLightColor.value=H.state.ambient,Oe.lightProbe.value=H.state.probe,Oe.directionalLights.value=H.state.directional,Oe.directionalLightShadows.value=H.state.directionalShadow,Oe.spotLights.value=H.state.spot,Oe.spotLightShadows.value=H.state.spotShadow,Oe.rectAreaLights.value=H.state.rectArea,Oe.ltc_1.value=H.state.rectAreaLTC1,Oe.ltc_2.value=H.state.rectAreaLTC2,Oe.pointLights.value=H.state.point,Oe.pointLightShadows.value=H.state.pointShadow,Oe.hemisphereLights.value=H.state.hemi,Oe.directionalShadowMap.value=H.state.directionalShadowMap,Oe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Oe.spotShadowMap.value=H.state.spotShadowMap,Oe.spotLightMatrix.value=H.state.spotLightMatrix,Oe.spotLightMap.value=H.state.spotLightMap,Oe.pointShadowMap.value=H.state.pointShadowMap,Oe.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=We,q.uniformsList=null,We}function rr(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=Zr.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function ar(T,z){const $=be.get(T);$.outputColorSpace=z.outputColorSpace,$.batching=z.batching,$.batchingColor=z.batchingColor,$.instancing=z.instancing,$.instancingColor=z.instancingColor,$.instancingMorph=z.instancingMorph,$.skinning=z.skinning,$.morphTargets=z.morphTargets,$.morphNormals=z.morphNormals,$.morphColors=z.morphColors,$.morphTargetsCount=z.morphTargetsCount,$.numClippingPlanes=z.numClippingPlanes,$.numIntersection=z.numClipIntersection,$.vertexAlphas=z.vertexAlphas,$.vertexTangents=z.vertexTangents,$.toneMapping=z.toneMapping}function la(T,z,$,q,H){z.isScene!==!0&&(z=$e),Ze.resetTextureUnits();const ce=z.fog,Se=q.isMeshStandardMaterial?z.environment:null,Re=k===null?E.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:tn,Ae=(q.isMeshStandardMaterial?Ct:Dt).get(q.envMap||Se),He=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,We=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Oe=!!$.morphAttributes.position,tt=!!$.morphAttributes.normal,ft=!!$.morphAttributes.color;let Pt=hi;q.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Pt=E.toneMapping);const bt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,gt=bt!==void 0?bt.length:0,ze=be.get(q),Rt=m.state.lights;if(Z===!0&&(_e===!0||T!==w)){const d=T===w&&q.id===A;me.setState(q,T,d)}let ot=!1;q.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Rt.state.version||ze.outputColorSpace!==Re||H.isBatchedMesh&&ze.batching===!1||!H.isBatchedMesh&&ze.batching===!0||H.isBatchedMesh&&ze.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&ze.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&ze.instancing===!1||!H.isInstancedMesh&&ze.instancing===!0||H.isSkinnedMesh&&ze.skinning===!1||!H.isSkinnedMesh&&ze.skinning===!0||H.isInstancedMesh&&ze.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ze.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ze.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ze.instancingMorph===!1&&H.morphTexture!==null||ze.envMap!==Ae||q.fog===!0&&ze.fog!==ce||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==me.numPlanes||ze.numIntersection!==me.numIntersection)||ze.vertexAlphas!==He||ze.vertexTangents!==We||ze.morphTargets!==Oe||ze.morphNormals!==tt||ze.morphColors!==ft||ze.toneMapping!==Pt||ze.morphTargetsCount!==gt)&&(ot=!0):(ot=!0,ze.__version=q.version);let Yt=ze.currentProgram;ot===!0&&(Yt=Ui(q,z,H));let Jn=!1,Wt=!1,pi=!1;const wt=Yt.getUniforms(),Kt=ze.uniforms;if(Ne.useProgram(Yt.program)&&(Jn=!0,Wt=!0,pi=!0),q.id!==A&&(A=q.id,Wt=!0),Jn||w!==T){Ne.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),wt.setValue(F,"projectionMatrix",T.projectionMatrix),wt.setValue(F,"viewMatrix",T.matrixWorldInverse);const ve=wt.map.cameraPosition;ve!==void 0&&ve.setValue(F,Be.setFromMatrixPosition(T.matrixWorld)),at.logarithmicDepthBuffer&&wt.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&wt.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,Wt=!0,pi=!0)}if(H.isSkinnedMesh){wt.setOptional(F,H,"bindMatrix"),wt.setOptional(F,H,"bindMatrixInverse");const d=H.skeleton;d&&(d.boneTexture===null&&d.computeBoneTexture(),wt.setValue(F,"boneTexture",d.boneTexture,Ze))}H.isBatchedMesh&&(wt.setOptional(F,H,"batchingTexture"),wt.setValue(F,"batchingTexture",H._matricesTexture,Ze),wt.setOptional(F,H,"batchingIdTexture"),wt.setValue(F,"batchingIdTexture",H._indirectTexture,Ze),wt.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&wt.setValue(F,"batchingColorTexture",H._colorsTexture,Ze));const nn=$.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&ue.update(H,$,Yt),(Wt||ze.receiveShadow!==H.receiveShadow)&&(ze.receiveShadow=H.receiveShadow,wt.setValue(F,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Kt.envMap.value=Ae,Kt.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&z.environment!==null&&(Kt.envMapIntensity.value=z.environmentIntensity),Wt&&(wt.setValue(F,"toneMappingExposure",E.toneMappingExposure),ze.needsLights&&ca(Kt,pi),ce&&q.fog===!0&&ae.refreshFogUniforms(Kt,ce),ae.refreshMaterialUniforms(Kt,q,X,ee,m.state.transmissionRenderTarget[T.id]),Zr.upload(F,rr(ze),Kt,Ze)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Zr.upload(F,rr(ze),Kt,Ze),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&wt.setValue(F,"center",H.center),wt.setValue(F,"modelViewMatrix",H.modelViewMatrix),wt.setValue(F,"normalMatrix",H.normalMatrix),wt.setValue(F,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const d=q.uniformsGroups;for(let ve=0,kn=d.length;ve<kn;ve++){const En=d[ve];je.update(En,Yt),je.bind(En,Yt)}}return Yt}function ca(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function ua(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(T,z,$){const q=be.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),be.get(T.texture).__webglTexture=z,be.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:$,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){const $=be.get(T);$.__webglFramebuffer=z,$.__useDefaultFramebuffer=z===void 0};const ha=F.createFramebuffer();this.setRenderTarget=function(T,z=0,$=0){k=T,D=z,U=$;let q=!0,H=null,ce=!1,Se=!1;if(T){const Ae=be.get(T);if(Ae.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(F.FRAMEBUFFER,null),q=!1;else if(Ae.__webglFramebuffer===void 0)Ze.setupRenderTarget(T);else if(Ae.__hasExternalTextures)Ze.rebindTextures(T,be.get(T.texture).__webglTexture,be.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Oe=T.depthTexture;if(Ae.__boundDepthTexture!==Oe){if(Oe!==null&&be.has(Oe)&&(T.width!==Oe.image.width||T.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ze.setupDepthRenderbuffer(T)}}const He=T.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Se=!0);const We=be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(We[z])?H=We[z][$]:H=We[z],ce=!0):T.samples>0&&Ze.useMultisampledRTT(T)===!1?H=be.get(T).__webglMultisampledFramebuffer:Array.isArray(We)?H=We[$]:H=We,N.copy(T.viewport),ne.copy(T.scissor),K=T.scissorTest}else N.copy(Ee).multiplyScalar(X).floor(),ne.copy(Xe).multiplyScalar(X).floor(),K=pt;if($!==0&&(H=ha),Ne.bindFramebuffer(F.FRAMEBUFFER,H)&&q&&Ne.drawBuffers(T,H),Ne.viewport(N),Ne.scissor(ne),Ne.setScissorTest(K),ce){const Ae=be.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ae.__webglTexture,$)}else if(Se){const Ae=z;for(let He=0;He<T.textures.length;He++){const We=be.get(T.textures[He]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+He,We.__webglTexture,$,Ae)}}else if(T!==null&&$!==0){const Ae=be.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ae.__webglTexture,$)}A=-1},this.readRenderTargetPixels=function(T,z,$,q,H,ce,Se,Re=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae){Ne.bindFramebuffer(F.FRAMEBUFFER,Ae);try{const He=T.textures[Re],We=He.format,Oe=He.type;if(!at.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-q&&$>=0&&$<=T.height-H&&(T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Re),F.readPixels(z,$,q,H,De.convert(We),De.convert(Oe),ce))}finally{const He=k!==null?be.get(k).__webglFramebuffer:null;Ne.bindFramebuffer(F.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(T,z,$,q,H,ce,Se,Re=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae)if(z>=0&&z<=T.width-q&&$>=0&&$<=T.height-H){Ne.bindFramebuffer(F.FRAMEBUFFER,Ae);const He=T.textures[Re],We=He.format,Oe=He.type;if(!at.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,tt),F.bufferData(F.PIXEL_PACK_BUFFER,ce.byteLength,F.STREAM_READ),T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Re),F.readPixels(z,$,q,H,De.convert(We),De.convert(Oe),0);const ft=k!==null?be.get(k).__webglFramebuffer:null;Ne.bindFramebuffer(F.FRAMEBUFFER,ft);const Pt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Vf(F,Pt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,tt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ce),F.deleteBuffer(tt),F.deleteSync(Pt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,$=0){const q=Math.pow(2,-$),H=Math.floor(T.image.width*q),ce=Math.floor(T.image.height*q),Se=z!==null?z.x:0,Re=z!==null?z.y:0;Ze.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,Se,Re,H,ce),Ne.unbindTexture()};const fa=F.createFramebuffer(),da=F.createFramebuffer();this.copyTextureToTexture=function(T,z,$=null,q=null,H=0,ce=null){ce===null&&(H!==0?(rs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=H,H=0):ce=0);let Se,Re,Ae,He,We,Oe,tt,ft,Pt;const bt=T.isCompressedTexture?T.mipmaps[ce]:T.image;if($!==null)Se=$.max.x-$.min.x,Re=$.max.y-$.min.y,Ae=$.isBox3?$.max.z-$.min.z:1,He=$.min.x,We=$.min.y,Oe=$.isBox3?$.min.z:0;else{const nn=Math.pow(2,-H);Se=Math.floor(bt.width*nn),Re=Math.floor(bt.height*nn),T.isDataArrayTexture?Ae=bt.depth:T.isData3DTexture?Ae=Math.floor(bt.depth*nn):Ae=1,He=0,We=0,Oe=0}q!==null?(tt=q.x,ft=q.y,Pt=q.z):(tt=0,ft=0,Pt=0);const gt=De.convert(z.format),ze=De.convert(z.type);let Rt;z.isData3DTexture?(Ze.setTexture3D(z,0),Rt=F.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Ze.setTexture2DArray(z,0),Rt=F.TEXTURE_2D_ARRAY):(Ze.setTexture2D(z,0),Rt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment);const ot=F.getParameter(F.UNPACK_ROW_LENGTH),Yt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Jn=F.getParameter(F.UNPACK_SKIP_PIXELS),Wt=F.getParameter(F.UNPACK_SKIP_ROWS),pi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,bt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,bt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,He),F.pixelStorei(F.UNPACK_SKIP_ROWS,We),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Oe);const wt=T.isDataArrayTexture||T.isData3DTexture,Kt=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){const nn=be.get(T),d=be.get(z),ve=be.get(nn.__renderTarget),kn=be.get(d.__renderTarget);Ne.bindFramebuffer(F.READ_FRAMEBUFFER,ve.__webglFramebuffer),Ne.bindFramebuffer(F.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let En=0;En<Ae;En++)wt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,be.get(T).__webglTexture,H,Oe+En),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,be.get(z).__webglTexture,ce,Pt+En)),F.blitFramebuffer(He,We,Se,Re,tt,ft,Se,Re,F.DEPTH_BUFFER_BIT,F.NEAREST);Ne.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||be.has(T)){const nn=be.get(T),d=be.get(z);Ne.bindFramebuffer(F.READ_FRAMEBUFFER,fa),Ne.bindFramebuffer(F.DRAW_FRAMEBUFFER,da);for(let ve=0;ve<Ae;ve++)wt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,nn.__webglTexture,H,Oe+ve):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,nn.__webglTexture,H),Kt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,d.__webglTexture,ce,Pt+ve):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,d.__webglTexture,ce),H!==0?F.blitFramebuffer(He,We,Se,Re,tt,ft,Se,Re,F.COLOR_BUFFER_BIT,F.NEAREST):Kt?F.copyTexSubImage3D(Rt,ce,tt,ft,Pt+ve,He,We,Se,Re):F.copyTexSubImage2D(Rt,ce,tt,ft,He,We,Se,Re);Ne.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Kt?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Rt,ce,tt,ft,Pt,Se,Re,Ae,gt,ze,bt.data):z.isCompressedArrayTexture?F.compressedTexSubImage3D(Rt,ce,tt,ft,Pt,Se,Re,Ae,gt,bt.data):F.texSubImage3D(Rt,ce,tt,ft,Pt,Se,Re,Ae,gt,ze,bt):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ce,tt,ft,Se,Re,gt,ze,bt.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ce,tt,ft,bt.width,bt.height,gt,bt.data):F.texSubImage2D(F.TEXTURE_2D,ce,tt,ft,Se,Re,gt,ze,bt);F.pixelStorei(F.UNPACK_ROW_LENGTH,ot),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Yt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Jn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Wt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,pi),ce===0&&z.generateMipmaps&&F.generateMipmap(Rt),Ne.unbindTexture()},this.copyTextureToTexture3D=function(T,z,$=null,q=null,H=0){return rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,z,$,q,H)},this.initRenderTarget=function(T){be.get(T).__webglFramebuffer===void 0&&Ze.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ze.setTextureCube(T,0):T.isData3DTexture?Ze.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ze.setTexture2DArray(T,0):Ze.setTexture2D(T,0),Ne.unbindTexture()},this.resetState=function(){D=0,U=0,k=null,Ne.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}function du(r,e){if(e===pf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===qo||e===Ou){let t=r.getIndex();if(t===null){const a=[],l=r.getAttribute("position");if(l!==void 0){for(let c=0;c<l.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,s=[];if(e===qo)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const i=r.clone();return i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class B0 extends Ms{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new G0(t)}),this.register(function(t){return new W0(t)}),this.register(function(t){return new Q0(t)}),this.register(function(t){return new ex(t)}),this.register(function(t){return new tx(t)}),this.register(function(t){return new $0(t)}),this.register(function(t){return new q0(t)}),this.register(function(t){return new Y0(t)}),this.register(function(t){return new K0(t)}),this.register(function(t){return new V0(t)}),this.register(function(t){return new j0(t)}),this.register(function(t){return new X0(t)}),this.register(function(t){return new J0(t)}),this.register(function(t){return new Z0(t)}),this.register(function(t){return new z0(t)}),this.register(function(t){return new nx(t)}),this.register(function(t){return new ix(t)})}load(e,t,n,s){const i=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const o=Xs.extractUrlBase(e);a=Xs.resolveURL(o,this.path)}else a=Xs.extractUrlBase(e);this.manager.itemStart(e);const l=function(o){s?s(o):console.error(o),i.manager.itemError(e),i.manager.itemEnd(e)},c=new sh(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(o){try{i.parse(o,a,function(h){t(h),i.manager.itemEnd(e)},l)}catch(h){l(h)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let i;const a={},l={},c=new TextDecoder;if(typeof e=="string")i=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===fh){try{a[st.KHR_BINARY_GLTF]=new sx(e)}catch(f){s&&s(f);return}i=JSON.parse(a[st.KHR_BINARY_GLTF].content)}else i=JSON.parse(c.decode(e));else i=e;if(i.asset===void 0||i.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const o=new _x(i,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});o.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const f=this.pluginCallbacks[h](o);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[f.name]=f,a[f.name]=!0}if(i.extensionsUsed)for(let h=0;h<i.extensionsUsed.length;++h){const f=i.extensionsUsed[h],p=i.extensionsRequired||[];switch(f){case st.KHR_MATERIALS_UNLIT:a[f]=new H0;break;case st.KHR_DRACO_MESH_COMPRESSION:a[f]=new rx(i,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:a[f]=new ax;break;case st.KHR_MESH_QUANTIZATION:a[f]=new ox;break;default:p.indexOf(f)>=0&&l[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}o.setExtensions(a),o.setPlugins(l),o.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,i){n.parse(e,t,s,i)})}}function k0(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class z0{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const i=t[n];i.extensions&&i.extensions[this.name]&&i.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,i.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const i=t.json,c=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e];let o;const h=new Ve(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],tn);const f=c.range!==void 0?c.range:0;switch(c.type){case"directional":o=new Wd(h),o.target.position.set(0,0,-1),o.add(o.target);break;case"point":o=new rh(h),o.distance=f;break;case"spot":o=new Hd(h),o.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,o.angle=c.spot.outerConeAngle,o.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return o.position.set(0,0,0),qn(o,c),c.intensity!==void 0&&(o.intensity=c.intensity),o.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(o),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,i=n.json.nodes[e],l=(i.extensions&&i.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(c){return n._getNodeRef(t.cache,l,c)})}}class H0{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return wi}extendParams(e,t,n){const s=[];e.color=new Ve(1,1,1),e.opacity=1;const i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){const a=i.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],tn),e.opacity=a[3]}i.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",i.baseColorTexture,Gt))}return Promise.all(s)}}class V0{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=s.extensions[this.name].emissiveStrength;return i!==void 0&&(t.emissiveIntensity=i),Promise.resolve()}}class G0{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&i.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&i.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(i.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const l=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ke(l,l)}return Promise.all(i)}}class W0{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=s.extensions[this.name];return t.dispersion=i.dispersion!==void 0?i.dispersion:0,Promise.resolve()}}class X0{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&i.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&i.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(i)}}class $0{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[];t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const l=a.sheenColorFactor;t.sheenColor.setRGB(l[0],l[1],l[2],tn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&i.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Gt)),a.sheenRoughnessTexture!==void 0&&i.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(i)}}class q0{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&i.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(i)}}class Y0{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&i.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const l=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(l[0],l[1],l[2],tn),Promise.all(i)}}class K0{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=s.extensions[this.name];return t.ior=i.ior!==void 0?i.ior:1.5,Promise.resolve()}}class j0{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&i.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const l=a.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(l[0],l[1],l[2],tn),a.specularColorTexture!==void 0&&i.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Gt)),Promise.all(i)}}class Z0{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&i.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(i)}}class J0{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&i.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(i)}}class Q0{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const i=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,i.source,a)}}class ex{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,i=s.textures[e];if(!i.extensions||!i.extensions[t])return null;const a=i.extensions[t],l=s.images[a.source];let c=n.textureLoader;if(l.uri){const o=n.options.manager.getHandler(l.uri);o!==null&&(c=o)}return n.loadTextureImage(e,a.source,c)}}class tx{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,i=s.textures[e];if(!i.extensions||!i.extensions[t])return null;const a=i.extensions[t],l=s.images[a.source];let c=n.textureLoader;if(l.uri){const o=n.options.manager.getHandler(l.uri);o!==null&&(c=o)}return n.loadTextureImage(e,a.source,c)}}class nx{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],i=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return i.then(function(l){const c=s.byteOffset||0,o=s.byteLength||0,h=s.count,f=s.byteStride,p=new Uint8Array(l,c,o);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,f,p,s.mode,s.filter).then(function(g){return g.buffer}):a.ready.then(function(){const g=new ArrayBuffer(h*f);return a.decodeGltfBuffer(new Uint8Array(g),h,f,p,s.mode,s.filter),g})})}else return null}}class ix{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const o of s.primitives)if(o.mode!==_n.TRIANGLES&&o.mode!==_n.TRIANGLE_STRIP&&o.mode!==_n.TRIANGLE_FAN&&o.mode!==void 0)return null;const a=n.extensions[this.name].attributes,l=[],c={};for(const o in a)l.push(this.parser.getDependency("accessor",a[o]).then(h=>(c[o]=h,c[o])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(o=>{const h=o.pop(),f=h.isGroup?h.children:[h],p=o[0].count,g=[];for(const v of f){const y=new Qe,x=new O,m=new di,C=new O(1,1,1),b=new vd(v.geometry,v.material,p);for(let E=0;E<p;E++)c.TRANSLATION&&x.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,E),c.SCALE&&C.fromBufferAttribute(c.SCALE,E),b.setMatrixAt(E,y.compose(x,m,C));for(const E in c)if(E==="_COLOR_0"){const L=c[E];b.instanceColor=new Ko(L.array,L.itemSize,L.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&v.geometry.setAttribute(E,c[E]);Tt.prototype.copy.call(b,v),this.parser.assignFinalMaterial(b),g.push(b)}return h.isGroup?(h.clear(),h.add(...g),h):g[0]}))}}const fh="glTF",Bs=12,pu={JSON:1313821514,BIN:5130562};class sx{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Bs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==fh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Bs,i=new DataView(e,Bs);let a=0;for(;a<s;){const l=i.getUint32(a,!0);a+=4;const c=i.getUint32(a,!0);if(a+=4,c===pu.JSON){const o=new Uint8Array(e,Bs+a,l);this.content=n.decode(o)}else if(c===pu.BIN){const o=Bs+a;this.body=e.slice(o,o+l)}a+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class rx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,l={},c={},o={};for(const h in a){const f=Jo[h]||h.toLowerCase();l[f]=a[h]}for(const h in e.attributes){const f=Jo[h]||h.toLowerCase();if(a[h]!==void 0){const p=n.accessors[e.attributes[h]],g=os[p.componentType];o[f]=g.name,c[f]=p.normalized===!0}}return t.getDependency("bufferView",i).then(function(h){return new Promise(function(f,p){s.decodeDracoFile(h,function(g){for(const v in g.attributes){const y=g.attributes[v],x=c[v];x!==void 0&&(y.normalized=x)}f(g)},l,o,tn,p)})})}}class ax{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ox{constructor(){this.name=st.KHR_MESH_QUANTIZATION}}class dh extends nr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,i=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[i+a];return t}interpolate_(e,t,n,s){const i=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=l*2,o=l*3,h=s-t,f=(n-t)/h,p=f*f,g=p*f,v=e*o,y=v-o,x=-2*g+3*p,m=g-p,C=1-x,b=m-p+f;for(let E=0;E!==l;E++){const L=a[y+E+l],D=a[y+E+c]*h,U=a[v+E+l],k=a[v+E]*h;i[E]=C*L+b*D+x*U+m*k}return i}}const lx=new di;class cx extends dh{interpolate_(e,t,n,s){const i=super.interpolate_(e,t,n,s);return lx.fromArray(i).normalize().toArray(i),i}}const _n={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},os={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},mu={9728:Jt,9729:hn,9984:Cu,9985:Wr,9986:Hs,9987:Yn},gu={33071:ci,33648:Jr,10497:hs},no={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Jo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ai={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ux={CUBICSPLINE:void 0,LINEAR:Zs,STEP:js},io={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function hx(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new xl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Zn})),r.DefaultMaterial}function yi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function qn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fx(r,e,t){let n=!1,s=!1,i=!1;for(let o=0,h=e.length;o<h;o++){const f=e[o];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(i=!0),n&&s&&i)break}if(!n&&!s&&!i)return Promise.resolve(r);const a=[],l=[],c=[];for(let o=0,h=e.length;o<h;o++){const f=e[o];if(n){const p=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):r.attributes.position;a.push(p)}if(s){const p=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):r.attributes.normal;l.push(p)}if(i){const p=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):r.attributes.color;c.push(p)}}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(o){const h=o[0],f=o[1],p=o[2];return n&&(r.morphAttributes.position=h),s&&(r.morphAttributes.normal=f),i&&(r.morphAttributes.color=p),r.morphTargetsRelative=!0,r})}function dx(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function px(r){let e;const t=r.extensions&&r.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+so(t.attributes):e=r.indices+":"+so(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,s=r.targets.length;n<s;n++)e+=":"+so(r.targets[n]);return e}function so(r){let e="";const t=Object.keys(r).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Qo(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mx(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const gx=new Qe;class _x{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new k0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,i=!1,a=-1;if(typeof navigator<"u"){const l=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(l)===!0;const c=l.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,i=l.indexOf("Firefox")>-1,a=i?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||i&&a<98?this.textureLoader=new vl(this.options.manager):this.textureLoader=new Xd(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const l={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return yi(i,l,s),qn(l,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(l)})).then(function(){for(const c of l.scenes)c.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,i=t.length;s<i;s++){const a=t[s].joints;for(let l=0,c=a.length;l<c;l++)e[a[l]].isBone=!0}for(let s=0,i=e.length;s<i;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),i=(a,l)=>{const c=this.associations.get(a);c!=null&&this.associations.set(l,c);for(const[o,h]of a.children.entries())i(h,l.children[o])};return i(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const i=e(t[s]);i&&n.push(i)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(i){return i.loadNode&&i.loadNode(t)});break;case"mesh":s=this._invokeOne(function(i){return i.loadMesh&&i.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(i){return i.loadBufferView&&i.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(i){return i.loadMaterial&&i.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(i){return i.loadTexture&&i.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(i){return i.loadAnimation&&i.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(i){return i!=this&&i.getDependency&&i.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(i,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(i,a){n.load(Xs.resolveURL(t.uri,s.path),i,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,i=t.byteOffset||0;return n.slice(i,i+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=no[s.type],l=os[s.componentType],c=s.normalized===!0,o=new l(s.count*a);return Promise.resolve(new Qt(o,a,c))}const i=[];return s.bufferView!==void 0?i.push(this.getDependency("bufferView",s.bufferView)):i.push(null),s.sparse!==void 0&&(i.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),i.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(i).then(function(a){const l=a[0],c=no[s.type],o=os[s.componentType],h=o.BYTES_PER_ELEMENT,f=h*c,p=s.byteOffset||0,g=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,v=s.normalized===!0;let y,x;if(g&&g!==f){const m=Math.floor(p/g),C="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let b=t.cache.get(C);b||(y=new o(l,m*g,s.count*g/h),b=new Yu(y,g/h),t.cache.add(C,b)),x=new Qs(b,c,p%g/h,v)}else l===null?y=new o(s.count*c):y=new o(l,p,s.count*c),x=new Qt(y,c,v);if(s.sparse!==void 0){const m=no.SCALAR,C=os[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,E=s.sparse.values.byteOffset||0,L=new C(a[1],b,s.sparse.count*m),D=new o(a[2],E,s.sparse.count*c);l!==null&&(x=new Qt(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let U=0,k=L.length;U<k;U++){const A=L[U];if(x.setX(A,D[U*c]),c>=2&&x.setY(A,D[U*c+1]),c>=3&&x.setZ(A,D[U*c+2]),c>=4&&x.setW(A,D[U*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=v}return x})}loadTexture(e){const t=this.json,n=this.options,i=t.textures[e].source,a=t.images[i];let l=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(l=c)}return this.loadTextureImage(e,i,l)}loadTextureImage(e,t,n){const s=this,i=this.json,a=i.textures[e],l=i.images[t],c=(l.uri||l.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const o=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||l.name||"",h.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(h.name=l.uri);const p=(i.samplers||{})[a.sampler]||{};return h.magFilter=mu[p.magFilter]||hn,h.minFilter=mu[p.minFilter]||Yn,h.wrapS=gu[p.wrapS]||hs,h.wrapT=gu[p.wrapT]||hs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Jt&&h.minFilter!==hn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=o,o}loadImageSource(e,t){const n=this,s=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=s.images[e],l=self.URL||self.webkitURL;let c=a.uri||"",o=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(f){o=!0;const p=new Blob([f],{type:a.mimeType});return c=l.createObjectURL(p),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(f){return new Promise(function(p,g){let v=p;t.isImageBitmapLoader===!0&&(v=function(y){const x=new kt(y);x.needsUpdate=!0,p(x)}),t.load(Xs.resolveURL(f,i.path),v,void 0,g)})}).then(function(f){return o===!0&&l.revokeObjectURL(c),qn(f,a),f.userData.mimeType=a.mimeType||mx(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const i=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[st.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const c=i.associations.get(a);a=i.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(a,l),i.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+n.uuid;let c=this.cache.get(l);c||(c=new gl,Mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(l,c)),n=c}else if(e.isLine){const l="LineBasicMaterial:"+n.uuid;let c=this.cache.get(l);c||(c=new pl,Mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(l,c)),n=c}if(s||i||a){let l="ClonedMaterial:"+n.uuid+":";s&&(l+="derivative-tangents:"),i&&(l+="vertex-colors:"),a&&(l+="flat-shading:");let c=this.cache.get(l);c||(c=n.clone(),i&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(l,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return xl}loadMaterial(e){const t=this,n=this.json,s=this.extensions,i=n.materials[e];let a;const l={},c=i.extensions||{},o=[];if(c[st.KHR_MATERIALS_UNLIT]){const f=s[st.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),o.push(f.extendParams(l,i,t))}else{const f=i.pbrMetallicRoughness||{};if(l.color=new Ve(1,1,1),l.opacity=1,Array.isArray(f.baseColorFactor)){const p=f.baseColorFactor;l.color.setRGB(p[0],p[1],p[2],tn),l.opacity=p[3]}f.baseColorTexture!==void 0&&o.push(t.assignTexture(l,"map",f.baseColorTexture,Gt)),l.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,l.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(o.push(t.assignTexture(l,"metalnessMap",f.metallicRoughnessTexture)),o.push(t.assignTexture(l,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(p){return p.getMaterialType&&p.getMaterialType(e)}),o.push(Promise.all(this._invokeAll(function(p){return p.extendMaterialParams&&p.extendMaterialParams(e,l)})))}i.doubleSided===!0&&(l.side=In);const h=i.alphaMode||io.OPAQUE;if(h===io.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,h===io.MASK&&(l.alphaTest=i.alphaCutoff!==void 0?i.alphaCutoff:.5)),i.normalTexture!==void 0&&a!==wi&&(o.push(t.assignTexture(l,"normalMap",i.normalTexture)),l.normalScale=new Ke(1,1),i.normalTexture.scale!==void 0)){const f=i.normalTexture.scale;l.normalScale.set(f,f)}if(i.occlusionTexture!==void 0&&a!==wi&&(o.push(t.assignTexture(l,"aoMap",i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==wi){const f=i.emissiveFactor;l.emissive=new Ve().setRGB(f[0],f[1],f[2],tn)}return i.emissiveTexture!==void 0&&a!==wi&&o.push(t.assignTexture(l,"emissiveMap",i.emissiveTexture,Gt)),Promise.all(o).then(function(){const f=new a(l);return i.name&&(f.name=i.name),qn(f,i),t.associations.set(f,{materials:e}),i.extensions&&yi(s,f,i),f})}createUniqueName(e){const t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function i(l){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(c){return _u(c,l,t)})}const a=[];for(let l=0,c=e.length;l<c;l++){const o=e[l],h=px(o),f=s[h];if(f)a.push(f.promise);else{let p;o.extensions&&o.extensions[st.KHR_DRACO_MESH_COMPRESSION]?p=i(o):p=_u(new an,o,t),s[h]={primitive:o,promise:p},a.push(p)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,i=n.meshes[e],a=i.primitives,l=[];for(let c=0,o=a.length;c<o;c++){const h=a[c].material===void 0?hx(this.cache):this.getDependency("material",a[c].material);l.push(h)}return l.push(t.loadGeometries(a)),Promise.all(l).then(function(c){const o=c.slice(0,c.length-1),h=c[c.length-1],f=[];for(let g=0,v=h.length;g<v;g++){const y=h[g],x=a[g];let m;const C=o[g];if(x.mode===_n.TRIANGLES||x.mode===_n.TRIANGLE_STRIP||x.mode===_n.TRIANGLE_FAN||x.mode===void 0)m=i.isSkinnedMesh===!0?new gd(y,C):new sn(y,C),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),x.mode===_n.TRIANGLE_STRIP?m.geometry=du(m.geometry,Ou):x.mode===_n.TRIANGLE_FAN&&(m.geometry=du(m.geometry,qo));else if(x.mode===_n.LINES)m=new Qu(y,C);else if(x.mode===_n.LINE_STRIP)m=new ml(y,C);else if(x.mode===_n.LINE_LOOP)m=new Ed(y,C);else if(x.mode===_n.POINTS)m=new eh(y,C);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(m.geometry.morphAttributes).length>0&&dx(m,i),m.name=t.createUniqueName(i.name||"mesh_"+e),qn(m,i),x.extensions&&yi(s,m,x),t.assignFinalMaterial(m),f.push(m)}for(let g=0,v=f.length;g<v;g++)t.associations.set(f[g],{meshes:e,primitives:g});if(f.length===1)return i.extensions&&yi(s,f[0],i),f[0];const p=new Ri;i.extensions&&yi(s,p,i),t.associations.set(p,{meshes:e});for(let g=0,v=f.length;g<v;g++)p.add(f[g]);return p})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new qt(jr.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new aa(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),qn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,i=t.joints.length;s<i;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const i=s.pop(),a=s,l=[],c=[];for(let o=0,h=a.length;o<h;o++){const f=a[o];if(f){l.push(f);const p=new Qe;i!==null&&p.fromArray(i.array,o*16),c.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[o])}return new fl(l,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],i=s.name?s.name:"animation_"+e,a=[],l=[],c=[],o=[],h=[];for(let f=0,p=s.channels.length;f<p;f++){const g=s.channels[f],v=s.samplers[g.sampler],y=g.target,x=y.node,m=s.parameters!==void 0?s.parameters[v.input]:v.input,C=s.parameters!==void 0?s.parameters[v.output]:v.output;y.node!==void 0&&(a.push(this.getDependency("node",x)),l.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",C)),o.push(v),h.push(y))}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(o),Promise.all(h)]).then(function(f){const p=f[0],g=f[1],v=f[2],y=f[3],x=f[4],m=[];for(let C=0,b=p.length;C<b;C++){const E=p[C],L=g[C],D=v[C],U=y[C],k=x[C];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const A=n._createAnimationTracks(E,L,D,U,k);if(A)for(let w=0;w<A.length;w++)m.push(A[w])}return new Dd(i,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(i){const a=n._getNodeRef(n.meshCache,s.mesh,i);return s.weights!==void 0&&a.traverse(function(l){if(l.isMesh)for(let c=0,o=s.weights.length;c<o;c++)l.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],i=n._loadNodeShallow(e),a=[],l=s.children||[];for(let o=0,h=l.length;o<h;o++)a.push(n.getDependency("node",l[o]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([i,Promise.all(a),c]).then(function(o){const h=o[0],f=o[1],p=o[2];p!==null&&h.traverse(function(g){g.isSkinnedMesh&&g.bind(p,gx)});for(let g=0,v=f.length;g<v;g++)h.add(f[g]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const i=t.nodes[e],a=i.name?s.createUniqueName(i.name):"",l=[],c=s._invokeOne(function(o){return o.createNodeMesh&&o.createNodeMesh(e)});return c&&l.push(c),i.camera!==void 0&&l.push(s.getDependency("camera",i.camera).then(function(o){return s._getNodeRef(s.cameraCache,i.camera,o)})),s._invokeAll(function(o){return o.createNodeAttachment&&o.createNodeAttachment(e)}).forEach(function(o){l.push(o)}),this.nodeCache[e]=Promise.all(l).then(function(o){let h;if(i.isBone===!0?h=new Zu:o.length>1?h=new Ri:o.length===1?h=o[0]:h=new Tt,h!==o[0])for(let f=0,p=o.length;f<p;f++)h.add(o[f]);if(i.name&&(h.userData.name=i.name,h.name=a),qn(h,i),i.extensions&&yi(n,h,i),i.matrix!==void 0){const f=new Qe;f.fromArray(i.matrix),h.applyMatrix4(f)}else i.translation!==void 0&&h.position.fromArray(i.translation),i.rotation!==void 0&&h.quaternion.fromArray(i.rotation),i.scale!==void 0&&h.scale.fromArray(i.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(i.mesh!==void 0&&s.meshCache.refs[i.mesh]>1){const f=s.associations.get(h);s.associations.set(h,{...f})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,i=new Ri;n.name&&(i.name=s.createUniqueName(n.name)),qn(i,n),n.extensions&&yi(t,i,n);const a=n.nodes||[],l=[];for(let c=0,o=a.length;c<o;c++)l.push(s.getDependency("node",a[c]));return Promise.all(l).then(function(c){for(let h=0,f=c.length;h<f;h++)i.add(c[h]);const o=h=>{const f=new Map;for(const[p,g]of s.associations)(p instanceof Mn||p instanceof kt)&&f.set(p,g);return h.traverse(p=>{const g=s.associations.get(p);g!=null&&f.set(p,g)}),f};return s.associations=o(i),i})}_createAnimationTracks(e,t,n,s,i){const a=[],l=e.name?e.name:e.uuid,c=[];ai[i.path]===ai.weights?e.traverse(function(p){p.morphTargetInfluences&&c.push(p.name?p.name:p.uuid)}):c.push(l);let o;switch(ai[i.path]){case ai.weights:o=ps;break;case ai.rotation:o=ms;break;case ai.translation:case ai.scale:o=gs;break;default:switch(n.itemSize){case 1:o=ps;break;case 2:case 3:default:o=gs;break}break}const h=s.interpolation!==void 0?ux[s.interpolation]:Zs,f=this._getArrayFromAccessor(n);for(let p=0,g=c.length;p<g;p++){const v=new o(c[p]+"."+ai[i.path],t.array,f,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Qo(t.constructor),s=new Float32Array(t.length);for(let i=0,a=t.length;i<a;i++)s[i]=t[i]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof ms?cx:dh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function xx(r,e,t){const n=e.attributes,s=new Nn;if(n.POSITION!==void 0){const l=t.json.accessors[n.POSITION],c=l.min,o=l.max;if(c!==void 0&&o!==void 0){if(s.set(new O(c[0],c[1],c[2]),new O(o[0],o[1],o[2])),l.normalized){const h=Qo(os[l.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const i=e.targets;if(i!==void 0){const l=new O,c=new O;for(let o=0,h=i.length;o<h;o++){const f=i[o];if(f.POSITION!==void 0){const p=t.json.accessors[f.POSITION],g=p.min,v=p.max;if(g!==void 0&&v!==void 0){if(c.setX(Math.max(Math.abs(g[0]),Math.abs(v[0]))),c.setY(Math.max(Math.abs(g[1]),Math.abs(v[1]))),c.setZ(Math.max(Math.abs(g[2]),Math.abs(v[2]))),p.normalized){const y=Qo(os[p.componentType]);c.multiplyScalar(y)}l.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(l)}r.boundingBox=s;const a=new Fn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,r.boundingSphere=a}function _u(r,e,t){const n=e.attributes,s=[];function i(a,l){return t.getDependency("accessor",a).then(function(c){r.setAttribute(l,c)})}for(const a in n){const l=Jo[a]||a.toLowerCase();l in r.attributes||s.push(i(n[a],l))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(l){r.setIndex(l)});s.push(a)}return lt.workingColorSpace!==tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),qn(r,e),xx(r,e,t),Promise.all(s).then(function(){return e.targets!==void 0?fx(r,e.targets,t):r})}function vx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ro,xu;function Mx(){return xu||(xu=1,ro=function(){function r(n,s){function i(){this.constructor=n}i.prototype=s.prototype,n.prototype=new i}function e(n,s,i,a,l,c){this.message=n,this.expected=s,this.found=i,this.offset=a,this.line=l,this.column=c,this.name="SyntaxError"}r(e,Error);function t(n){var s=arguments.length>1?arguments[1]:{},i={},a={start:bl},l=bl,c=function(){return Wl},o=i,h="#",f={type:"literal",value:"#",description:'"#"'},p=void 0,g={type:"any",description:"any character"},v="[",y={type:"literal",value:"[",description:'"["'},x="]",m={type:"literal",value:"]",description:'"]"'},C=function(u){xa(Vt("ObjectPath",u,zt,Ht))},b=function(u){xa(Vt("ArrayPath",u,zt,Ht))},E=function(u,_){return u.concat(_)},L=function(u){return[u]},D=function(u){return u},U=".",k={type:"literal",value:".",description:'"."'},A="=",w={type:"literal",value:"=",description:'"="'},N=function(u,_){xa(Vt("Assign",_,zt,Ht,u))},ne=function(u){return u.join("")},K=function(u){return u.value},Y='"""',re={type:"literal",value:'"""',description:'"\\"\\"\\""'},W=null,ee=function(u){return Vt("String",u.join(""),zt,Ht)},X='"',ie={type:"literal",value:'"',description:'"\\""'},de="'''",Ee={type:"literal",value:"'''",description:`"'''"`},Xe="'",pt={type:"literal",value:"'",description:`"'"`},ct=function(u){return u},Z=function(u){return u},_e="\\",pe={type:"literal",value:"\\",description:'"\\\\"'},Be=function(){return""},ke="e",$e={type:"literal",value:"e",description:'"e"'},At="E",rt={type:"literal",value:"E",description:'"E"'},F=function(u,_){return Vt("Float",parseFloat(u+"e"+_),zt,Ht)},St=function(u){return Vt("Float",parseFloat(u),zt,Ht)},Fe="+",at={type:"literal",value:"+",description:'"+"'},Ne=function(u){return u.join("")},mt="-",be={type:"literal",value:"-",description:'"-"'},Ze=function(u){return"-"+u.join("")},Dt=function(u){return Vt("Integer",parseInt(u,10),zt,Ht)},Ct="true",P={type:"literal",value:"true",description:'"true"'},S=function(){return Vt("Boolean",!0,zt,Ht)},G="false",Q={type:"literal",value:"false",description:'"false"'},ae=function(){return Vt("Boolean",!1,zt,Ht)},j=function(){return Vt("Array",[],zt,Ht)},Ue=function(u){return Vt("Array",u?[u]:[],zt,Ht)},me=function(u){return Vt("Array",u,zt,Ht)},Le=function(u,_){return Vt("Array",u.concat(_),zt,Ht)},Ie=function(u){return u},ue=",",ye={type:"literal",value:",",description:'","'},Ge="{",De={type:"literal",value:"{",description:'"{"'},xe="}",je={type:"literal",value:"}",description:'"}"'},B=function(u){return Vt("InlineTable",u,zt,Ht)},he=function(u,_){return Vt("InlineTableValue",_,zt,Ht,u)},ge=function(u){return"."+u},we=function(u){return u.join("")},le=":",te={type:"literal",value:":",description:'":"'},Pe=function(u){return u.join("")},Ye="T",xt={type:"literal",value:"T",description:'"T"'},ut="Z",Sn={type:"literal",value:"Z",description:'"Z"'},fn=function(u,_){return Vt("Date",new Date(u+"T"+_+"Z"),zt,Ht)},ir=function(u,_){return Vt("Date",new Date(u+"T"+_),zt,Ht)},Bn=/^[ \t]/,Ss={type:"class",value:"[ \\t]",description:"[ \\t]"},Es=`
`,Ts={type:"literal",value:`
`,description:'"\\n"'},Di="\r",sr={type:"literal",value:"\r",description:'"\\r"'},Ui=/^[0-9a-f]/i,rr={type:"class",value:"[0-9a-f]i",description:"[0-9a-f]i"},ar=/^[0-9]/,la={type:"class",value:"[0-9]",description:"[0-9]"},ca="_",ua={type:"literal",value:"_",description:'"_"'},ha=function(){return""},fa=/^[A-Za-z0-9_\-]/,da={type:"class",value:"[A-Za-z0-9_\\-]",description:"[A-Za-z0-9_\\-]"},T=function(u){return u.join("")},z='\\"',$={type:"literal",value:'\\"',description:'"\\\\\\""'},q=function(){return'"'},H="\\\\",ce={type:"literal",value:"\\\\",description:'"\\\\\\\\"'},Se=function(){return"\\"},Re="\\b",Ae={type:"literal",value:"\\b",description:'"\\\\b"'},He=function(){return"\b"},We="\\t",Oe={type:"literal",value:"\\t",description:'"\\\\t"'},tt=function(){return"	"},ft="\\n",Pt={type:"literal",value:"\\n",description:'"\\\\n"'},bt=function(){return`
`},gt="\\f",ze={type:"literal",value:"\\f",description:'"\\\\f"'},Rt=function(){return"\f"},ot="\\r",Yt={type:"literal",value:"\\r",description:'"\\\\r"'},Jn=function(){return"\r"},Wt="\\U",pi={type:"literal",value:"\\U",description:'"\\\\U"'},wt=function(u){return Dh(u.join(""))},Kt="\\u",nn={type:"literal",value:"\\u",description:'"\\\\u"'},d=0,ve=0,kn=0,En={line:1,column:1,seenCR:!1},or=0,pa=[],se=0,oe={},lr;if("startRule"in s){if(!(s.startRule in a))throw new Error(`Can't start parsing from rule "`+s.startRule+'".');l=a[s.startRule]}function zt(){return ma(ve).line}function Ht(){return ma(ve).column}function ma(u){function _(M,R,I){var V,J;for(V=R;V<I;V++)J=n.charAt(V),J===`
`?(M.seenCR||M.line++,M.column=1,M.seenCR=!1):J==="\r"||J==="\u2028"||J==="\u2029"?(M.line++,M.column=1,M.seenCR=!0):(M.column++,M.seenCR=!1)}return kn!==u&&(kn>u&&(kn=0,En={line:1,column:1,seenCR:!1}),_(En,kn,u),kn=u),En}function fe(u){d<or||(d>or&&(or=d,pa=[]),pa.push(u))}function ph(u,_,M){function R(Te){var qe=1;for(Te.sort(function(vt,ht){return vt.description<ht.description?-1:vt.description>ht.description?1:0});qe<Te.length;)Te[qe-1]===Te[qe]?Te.splice(qe,1):qe++}function I(Te,qe){function vt(Fi){function Qn(ln){return ln.charCodeAt(0).toString(16).toUpperCase()}return Fi.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(ln){return"\\x0"+Qn(ln)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(ln){return"\\x"+Qn(ln)}).replace(/[\u0180-\u0FFF]/g,function(ln){return"\\u0"+Qn(ln)}).replace(/[\u1080-\uFFFF]/g,function(ln){return"\\u"+Qn(ln)})}var ht=new Array(Te.length),Lt,It,on;for(on=0;on<Te.length;on++)ht[on]=Te[on].description;return Lt=Te.length>1?ht.slice(0,-1).join(", ")+" or "+ht[Te.length-1]:ht[0],It=qe?'"'+vt(qe)+'"':"end of input","Expected "+Lt+" but "+It+" found."}var V=ma(M),J=M<n.length?n.charAt(M):null;return _!==null&&R(_),new e(I(_,J),_,J,M,V.line,V.column)}function bl(){var u,_,M,R=d*49+0,I=oe[R];if(I)return d=I.nextPos,I.result;for(u=d,_=[],M=Al();M!==i;)_.push(M),M=Al();return _!==i&&(ve=u,_=c()),u=_,oe[R]={nextPos:d,result:u},u}function Al(){var u,_,M,R,I,V,J,Te=d*49+1,qe=oe[Te];if(qe)return d=qe.nextPos,qe.result;for(u=d,_=[],M=Ce();M!==i;)_.push(M),M=Ce();if(_!==i)if(M=mh(),M!==i){for(R=[],I=Ce();I!==i;)R.push(I),I=Ce();if(R!==i){for(I=[],V=cr();V!==i;)I.push(V),V=cr();if(I!==i){if(V=[],J=pn(),J!==i)for(;J!==i;)V.push(J),J=pn();else V=o;V===i&&(V=hr()),V!==i?(_=[_,M,R,I,V],u=_):(d=u,u=o)}else d=u,u=o}else d=u,u=o}else d=u,u=o;else d=u,u=o;if(u===i){if(u=d,_=[],M=Ce(),M!==i)for(;M!==i;)_.push(M),M=Ce();else _=o;if(_!==i){if(M=[],R=pn(),R!==i)for(;R!==i;)M.push(R),R=pn();else M=o;M===i&&(M=hr()),M!==i?(_=[_,M],u=_):(d=u,u=o)}else d=u,u=o;u===i&&(u=pn())}return oe[Te]={nextPos:d,result:u},u}function mh(){var u,_=d*49+2,M=oe[_];return M?(d=M.nextPos,M.result):(u=cr(),u===i&&(u=gh(),u===i&&(u=_h(),u===i&&(u=xh()))),oe[_]={nextPos:d,result:u},u)}function cr(){var u,_,M,R,I,V,J=d*49+3,Te=oe[J];if(Te)return d=Te.nextPos,Te.result;if(u=d,n.charCodeAt(d)===35?(_=h,d++):(_=i,se===0&&fe(f)),_!==i){for(M=[],R=d,I=d,se++,V=pn(),V===i&&(V=hr()),se--,V===i?I=p:(d=I,I=o),I!==i?(n.length>d?(V=n.charAt(d),d++):(V=i,se===0&&fe(g)),V!==i?(I=[I,V],R=I):(d=R,R=o)):(d=R,R=o);R!==i;)M.push(R),R=d,I=d,se++,V=pn(),V===i&&(V=hr()),se--,V===i?I=p:(d=I,I=o),I!==i?(n.length>d?(V=n.charAt(d),d++):(V=i,se===0&&fe(g)),V!==i?(I=[I,V],R=I):(d=R,R=o)):(d=R,R=o);M!==i?(_=[_,M],u=_):(d=u,u=o)}else d=u,u=o;return oe[J]={nextPos:d,result:u},u}function gh(){var u,_,M,R,I,V,J=d*49+4,Te=oe[J];if(Te)return d=Te.nextPos,Te.result;if(u=d,n.charCodeAt(d)===91?(_=v,d++):(_=i,se===0&&fe(y)),_!==i){for(M=[],R=Ce();R!==i;)M.push(R),R=Ce();if(M!==i)if(R=wl(),R!==i){for(I=[],V=Ce();V!==i;)I.push(V),V=Ce();I!==i?(n.charCodeAt(d)===93?(V=x,d++):(V=i,se===0&&fe(m)),V!==i?(ve=u,_=C(R),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;else d=u,u=o}else d=u,u=o;return oe[J]={nextPos:d,result:u},u}function _h(){var u,_,M,R,I,V,J,Te,qe=d*49+5,vt=oe[qe];if(vt)return d=vt.nextPos,vt.result;if(u=d,n.charCodeAt(d)===91?(_=v,d++):(_=i,se===0&&fe(y)),_!==i)if(n.charCodeAt(d)===91?(M=v,d++):(M=i,se===0&&fe(y)),M!==i){for(R=[],I=Ce();I!==i;)R.push(I),I=Ce();if(R!==i)if(I=wl(),I!==i){for(V=[],J=Ce();J!==i;)V.push(J),J=Ce();V!==i?(n.charCodeAt(d)===93?(J=x,d++):(J=i,se===0&&fe(m)),J!==i?(n.charCodeAt(d)===93?(Te=x,d++):(Te=i,se===0&&fe(m)),Te!==i?(ve=u,_=b(I),u=_):(d=u,u=o)):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;else d=u,u=o}else d=u,u=o;else d=u,u=o;return oe[qe]={nextPos:d,result:u},u}function wl(){var u,_,M,R=d*49+6,I=oe[R];if(I)return d=I.nextPos,I.result;if(u=d,_=[],M=Cl(),M!==i)for(;M!==i;)_.push(M),M=Cl();else _=o;return _!==i?(M=Rl(),M!==i?(ve=u,_=E(_,M),u=_):(d=u,u=o)):(d=u,u=o),u===i&&(u=d,_=Rl(),_!==i&&(ve=u,_=L(_)),u=_),oe[R]={nextPos:d,result:u},u}function Rl(){var u,_,M,R,I,V=d*49+7,J=oe[V];if(J)return d=J.nextPos,J.result;for(u=d,_=[],M=Ce();M!==i;)_.push(M),M=Ce();if(_!==i)if(M=bs(),M!==i){for(R=[],I=Ce();I!==i;)R.push(I),I=Ce();R!==i?(ve=u,_=D(M),u=_):(d=u,u=o)}else d=u,u=o;else d=u,u=o;if(u===i){for(u=d,_=[],M=Ce();M!==i;)_.push(M),M=Ce();if(_!==i)if(M=ga(),M!==i){for(R=[],I=Ce();I!==i;)R.push(I),I=Ce();R!==i?(ve=u,_=D(M),u=_):(d=u,u=o)}else d=u,u=o;else d=u,u=o}return oe[V]={nextPos:d,result:u},u}function Cl(){var u,_,M,R,I,V,J,Te=d*49+8,qe=oe[Te];if(qe)return d=qe.nextPos,qe.result;for(u=d,_=[],M=Ce();M!==i;)_.push(M),M=Ce();if(_!==i)if(M=bs(),M!==i){for(R=[],I=Ce();I!==i;)R.push(I),I=Ce();if(R!==i)if(n.charCodeAt(d)===46?(I=U,d++):(I=i,se===0&&fe(k)),I!==i){for(V=[],J=Ce();J!==i;)V.push(J),J=Ce();V!==i?(ve=u,_=D(M),u=_):(d=u,u=o)}else d=u,u=o;else d=u,u=o}else d=u,u=o;else d=u,u=o;if(u===i){for(u=d,_=[],M=Ce();M!==i;)_.push(M),M=Ce();if(_!==i)if(M=ga(),M!==i){for(R=[],I=Ce();I!==i;)R.push(I),I=Ce();if(R!==i)if(n.charCodeAt(d)===46?(I=U,d++):(I=i,se===0&&fe(k)),I!==i){for(V=[],J=Ce();J!==i;)V.push(J),J=Ce();V!==i?(ve=u,_=D(M),u=_):(d=u,u=o)}else d=u,u=o;else d=u,u=o}else d=u,u=o;else d=u,u=o}return oe[Te]={nextPos:d,result:u},u}function xh(){var u,_,M,R,I,V,J=d*49+9,Te=oe[J];if(Te)return d=Te.nextPos,Te.result;if(u=d,_=bs(),_!==i){for(M=[],R=Ce();R!==i;)M.push(R),R=Ce();if(M!==i)if(n.charCodeAt(d)===61?(R=A,d++):(R=i,se===0&&fe(w)),R!==i){for(I=[],V=Ce();V!==i;)I.push(V),V=Ce();I!==i?(V=Ni(),V!==i?(ve=u,_=N(_,V),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;else d=u,u=o}else d=u,u=o;if(u===i)if(u=d,_=ga(),_!==i){for(M=[],R=Ce();R!==i;)M.push(R),R=Ce();if(M!==i)if(n.charCodeAt(d)===61?(R=A,d++):(R=i,se===0&&fe(w)),R!==i){for(I=[],V=Ce();V!==i;)I.push(V),V=Ce();I!==i?(V=Ni(),V!==i?(ve=u,_=N(_,V),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;else d=u,u=o}else d=u,u=o;return oe[J]={nextPos:d,result:u},u}function bs(){var u,_,M,R=d*49+10,I=oe[R];if(I)return d=I.nextPos,I.result;if(u=d,_=[],M=Vl(),M!==i)for(;M!==i;)_.push(M),M=Vl();else _=o;return _!==i&&(ve=u,_=ne(_)),u=_,oe[R]={nextPos:d,result:u},u}function ga(){var u,_,M=d*49+11,R=oe[M];return R?(d=R.nextPos,R.result):(u=d,_=Pl(),_!==i&&(ve=u,_=K(_)),u=_,u===i&&(u=d,_=Ll(),_!==i&&(ve=u,_=K(_)),u=_),oe[M]={nextPos:d,result:u},u)}function Ni(){var u,_=d*49+12,M=oe[_];return M?(d=M.nextPos,M.result):(u=vh(),u===i&&(u=Ph(),u===i&&(u=Eh(),u===i&&(u=Th(),u===i&&(u=bh(),u===i&&(u=Ah(),u===i&&(u=wh())))))),oe[_]={nextPos:d,result:u},u)}function vh(){var u,_=d*49+13,M=oe[_];return M?(d=M.nextPos,M.result):(u=Mh(),u===i&&(u=Pl(),u===i&&(u=yh(),u===i&&(u=Ll()))),oe[_]={nextPos:d,result:u},u)}function Mh(){var u,_,M,R,I,V=d*49+14,J=oe[V];if(J)return d=J.nextPos,J.result;if(u=d,n.substr(d,3)===Y?(_=Y,d+=3):(_=i,se===0&&fe(re)),_!==i)if(M=pn(),M===i&&(M=W),M!==i){for(R=[],I=Ul();I!==i;)R.push(I),I=Ul();R!==i?(n.substr(d,3)===Y?(I=Y,d+=3):(I=i,se===0&&fe(re)),I!==i?(ve=u,_=ee(R),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;else d=u,u=o;return oe[V]={nextPos:d,result:u},u}function Pl(){var u,_,M,R,I=d*49+15,V=oe[I];if(V)return d=V.nextPos,V.result;if(u=d,n.charCodeAt(d)===34?(_=X,d++):(_=i,se===0&&fe(ie)),_!==i){for(M=[],R=Il();R!==i;)M.push(R),R=Il();M!==i?(n.charCodeAt(d)===34?(R=X,d++):(R=i,se===0&&fe(ie)),R!==i?(ve=u,_=ee(M),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;return oe[I]={nextPos:d,result:u},u}function yh(){var u,_,M,R,I,V=d*49+16,J=oe[V];if(J)return d=J.nextPos,J.result;if(u=d,n.substr(d,3)===de?(_=de,d+=3):(_=i,se===0&&fe(Ee)),_!==i)if(M=pn(),M===i&&(M=W),M!==i){for(R=[],I=Nl();I!==i;)R.push(I),I=Nl();R!==i?(n.substr(d,3)===de?(I=de,d+=3):(I=i,se===0&&fe(Ee)),I!==i?(ve=u,_=ee(R),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;else d=u,u=o;return oe[V]={nextPos:d,result:u},u}function Ll(){var u,_,M,R,I=d*49+17,V=oe[I];if(V)return d=V.nextPos,V.result;if(u=d,n.charCodeAt(d)===39?(_=Xe,d++):(_=i,se===0&&fe(pt)),_!==i){for(M=[],R=Dl();R!==i;)M.push(R),R=Dl();M!==i?(n.charCodeAt(d)===39?(R=Xe,d++):(R=i,se===0&&fe(pt)),R!==i?(ve=u,_=ee(M),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;return oe[I]={nextPos:d,result:u},u}function Il(){var u,_,M,R=d*49+18,I=oe[R];return I?(d=I.nextPos,I.result):(u=Gl(),u===i&&(u=d,_=d,se++,n.charCodeAt(d)===34?(M=X,d++):(M=i,se===0&&fe(ie)),se--,M===i?_=p:(d=_,_=o),_!==i?(n.length>d?(M=n.charAt(d),d++):(M=i,se===0&&fe(g)),M!==i?(ve=u,_=ct(M),u=_):(d=u,u=o)):(d=u,u=o)),oe[R]={nextPos:d,result:u},u)}function Dl(){var u,_,M,R=d*49+19,I=oe[R];return I?(d=I.nextPos,I.result):(u=d,_=d,se++,n.charCodeAt(d)===39?(M=Xe,d++):(M=i,se===0&&fe(pt)),se--,M===i?_=p:(d=_,_=o),_!==i?(n.length>d?(M=n.charAt(d),d++):(M=i,se===0&&fe(g)),M!==i?(ve=u,_=ct(M),u=_):(d=u,u=o)):(d=u,u=o),oe[R]={nextPos:d,result:u},u)}function Ul(){var u,_,M,R=d*49+20,I=oe[R];return I?(d=I.nextPos,I.result):(u=Gl(),u===i&&(u=Sh(),u===i&&(u=d,_=d,se++,n.substr(d,3)===Y?(M=Y,d+=3):(M=i,se===0&&fe(re)),se--,M===i?_=p:(d=_,_=o),_!==i?(n.length>d?(M=n.charAt(d),d++):(M=i,se===0&&fe(g)),M!==i?(ve=u,_=Z(M),u=_):(d=u,u=o)):(d=u,u=o))),oe[R]={nextPos:d,result:u},u)}function Sh(){var u,_,M,R,I,V=d*49+21,J=oe[V];if(J)return d=J.nextPos,J.result;if(u=d,n.charCodeAt(d)===92?(_=_e,d++):(_=i,se===0&&fe(pe)),_!==i)if(M=pn(),M!==i){for(R=[],I=Hl();I!==i;)R.push(I),I=Hl();R!==i?(ve=u,_=Be(),u=_):(d=u,u=o)}else d=u,u=o;else d=u,u=o;return oe[V]={nextPos:d,result:u},u}function Nl(){var u,_,M,R=d*49+22,I=oe[R];return I?(d=I.nextPos,I.result):(u=d,_=d,se++,n.substr(d,3)===de?(M=de,d+=3):(M=i,se===0&&fe(Ee)),se--,M===i?_=p:(d=_,_=o),_!==i?(n.length>d?(M=n.charAt(d),d++):(M=i,se===0&&fe(g)),M!==i?(ve=u,_=ct(M),u=_):(d=u,u=o)):(d=u,u=o),oe[R]={nextPos:d,result:u},u)}function Eh(){var u,_,M,R,I=d*49+23,V=oe[I];return V?(d=V.nextPos,V.result):(u=d,_=Fl(),_===i&&(_=_a()),_!==i?(n.charCodeAt(d)===101?(M=ke,d++):(M=i,se===0&&fe($e)),M===i&&(n.charCodeAt(d)===69?(M=At,d++):(M=i,se===0&&fe(rt))),M!==i?(R=_a(),R!==i?(ve=u,_=F(_,R),u=_):(d=u,u=o)):(d=u,u=o)):(d=u,u=o),u===i&&(u=d,_=Fl(),_!==i&&(ve=u,_=St(_)),u=_),oe[I]={nextPos:d,result:u},u)}function Fl(){var u,_,M,R,I,V,J=d*49+24,Te=oe[J];return Te?(d=Te.nextPos,Te.result):(u=d,n.charCodeAt(d)===43?(_=Fe,d++):(_=i,se===0&&fe(at)),_===i&&(_=W),_!==i?(M=d,R=As(),R!==i?(n.charCodeAt(d)===46?(I=U,d++):(I=i,se===0&&fe(k)),I!==i?(V=As(),V!==i?(R=[R,I,V],M=R):(d=M,M=o)):(d=M,M=o)):(d=M,M=o),M!==i?(ve=u,_=Ne(M),u=_):(d=u,u=o)):(d=u,u=o),u===i&&(u=d,n.charCodeAt(d)===45?(_=mt,d++):(_=i,se===0&&fe(be)),_!==i?(M=d,R=As(),R!==i?(n.charCodeAt(d)===46?(I=U,d++):(I=i,se===0&&fe(k)),I!==i?(V=As(),V!==i?(R=[R,I,V],M=R):(d=M,M=o)):(d=M,M=o)):(d=M,M=o),M!==i?(ve=u,_=Ze(M),u=_):(d=u,u=o)):(d=u,u=o)),oe[J]={nextPos:d,result:u},u)}function Th(){var u,_,M=d*49+25,R=oe[M];return R?(d=R.nextPos,R.result):(u=d,_=_a(),_!==i&&(ve=u,_=Dt(_)),u=_,oe[M]={nextPos:d,result:u},u)}function _a(){var u,_,M,R,I,V=d*49+26,J=oe[V];if(J)return d=J.nextPos,J.result;if(u=d,n.charCodeAt(d)===43?(_=Fe,d++):(_=i,se===0&&fe(at)),_===i&&(_=W),_!==i){if(M=[],R=_t(),R!==i)for(;R!==i;)M.push(R),R=_t();else M=o;M!==i?(R=d,se++,n.charCodeAt(d)===46?(I=U,d++):(I=i,se===0&&fe(k)),se--,I===i?R=p:(d=R,R=o),R!==i?(ve=u,_=Ne(M),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;if(u===i)if(u=d,n.charCodeAt(d)===45?(_=mt,d++):(_=i,se===0&&fe(be)),_!==i){if(M=[],R=_t(),R!==i)for(;R!==i;)M.push(R),R=_t();else M=o;M!==i?(R=d,se++,n.charCodeAt(d)===46?(I=U,d++):(I=i,se===0&&fe(k)),se--,I===i?R=p:(d=R,R=o),R!==i?(ve=u,_=Ze(M),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;return oe[V]={nextPos:d,result:u},u}function bh(){var u,_,M=d*49+27,R=oe[M];return R?(d=R.nextPos,R.result):(u=d,n.substr(d,4)===Ct?(_=Ct,d+=4):(_=i,se===0&&fe(P)),_!==i&&(ve=u,_=S()),u=_,u===i&&(u=d,n.substr(d,5)===G?(_=G,d+=5):(_=i,se===0&&fe(Q)),_!==i&&(ve=u,_=ae()),u=_),oe[M]={nextPos:d,result:u},u)}function Ah(){var u,_,M,R,I,V=d*49+28,J=oe[V];if(J)return d=J.nextPos,J.result;if(u=d,n.charCodeAt(d)===91?(_=v,d++):(_=i,se===0&&fe(y)),_!==i){for(M=[],R=dn();R!==i;)M.push(R),R=dn();M!==i?(n.charCodeAt(d)===93?(R=x,d++):(R=i,se===0&&fe(m)),R!==i?(ve=u,_=j(),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;if(u===i&&(u=d,n.charCodeAt(d)===91?(_=v,d++):(_=i,se===0&&fe(y)),_!==i?(M=Ol(),M===i&&(M=W),M!==i?(n.charCodeAt(d)===93?(R=x,d++):(R=i,se===0&&fe(m)),R!==i?(ve=u,_=Ue(M),u=_):(d=u,u=o)):(d=u,u=o)):(d=u,u=o),u===i)){if(u=d,n.charCodeAt(d)===91?(_=v,d++):(_=i,se===0&&fe(y)),_!==i){if(M=[],R=ur(),R!==i)for(;R!==i;)M.push(R),R=ur();else M=o;M!==i?(n.charCodeAt(d)===93?(R=x,d++):(R=i,se===0&&fe(m)),R!==i?(ve=u,_=me(M),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;if(u===i)if(u=d,n.charCodeAt(d)===91?(_=v,d++):(_=i,se===0&&fe(y)),_!==i){if(M=[],R=ur(),R!==i)for(;R!==i;)M.push(R),R=ur();else M=o;M!==i?(R=Ol(),R!==i?(n.charCodeAt(d)===93?(I=x,d++):(I=i,se===0&&fe(m)),I!==i?(ve=u,_=Le(M,R),u=_):(d=u,u=o)):(d=u,u=o)):(d=u,u=o)}else d=u,u=o}return oe[V]={nextPos:d,result:u},u}function Ol(){var u,_,M,R,I,V=d*49+29,J=oe[V];if(J)return d=J.nextPos,J.result;for(u=d,_=[],M=dn();M!==i;)_.push(M),M=dn();if(_!==i)if(M=Ni(),M!==i){for(R=[],I=dn();I!==i;)R.push(I),I=dn();R!==i?(ve=u,_=Ie(M),u=_):(d=u,u=o)}else d=u,u=o;else d=u,u=o;return oe[V]={nextPos:d,result:u},u}function ur(){var u,_,M,R,I,V,J,Te=d*49+30,qe=oe[Te];if(qe)return d=qe.nextPos,qe.result;for(u=d,_=[],M=dn();M!==i;)_.push(M),M=dn();if(_!==i)if(M=Ni(),M!==i){for(R=[],I=dn();I!==i;)R.push(I),I=dn();if(R!==i)if(n.charCodeAt(d)===44?(I=ue,d++):(I=i,se===0&&fe(ye)),I!==i){for(V=[],J=dn();J!==i;)V.push(J),J=dn();V!==i?(ve=u,_=Ie(M),u=_):(d=u,u=o)}else d=u,u=o;else d=u,u=o}else d=u,u=o;else d=u,u=o;return oe[Te]={nextPos:d,result:u},u}function dn(){var u,_=d*49+31,M=oe[_];return M?(d=M.nextPos,M.result):(u=Ce(),u===i&&(u=pn(),u===i&&(u=cr())),oe[_]={nextPos:d,result:u},u)}function wh(){var u,_,M,R,I,V,J=d*49+32,Te=oe[J];if(Te)return d=Te.nextPos,Te.result;if(u=d,n.charCodeAt(d)===123?(_=Ge,d++):(_=i,se===0&&fe(De)),_!==i){for(M=[],R=Ce();R!==i;)M.push(R),R=Ce();if(M!==i){for(R=[],I=Bl();I!==i;)R.push(I),I=Bl();if(R!==i){for(I=[],V=Ce();V!==i;)I.push(V),V=Ce();I!==i?(n.charCodeAt(d)===125?(V=xe,d++):(V=i,se===0&&fe(je)),V!==i?(ve=u,_=B(R),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o}else d=u,u=o}else d=u,u=o;return oe[J]={nextPos:d,result:u},u}function Bl(){var u,_,M,R,I,V,J,Te,qe,vt,ht,Lt=d*49+33,It=oe[Lt];if(It)return d=It.nextPos,It.result;for(u=d,_=[],M=Ce();M!==i;)_.push(M),M=Ce();if(_!==i)if(M=bs(),M!==i){for(R=[],I=Ce();I!==i;)R.push(I),I=Ce();if(R!==i)if(n.charCodeAt(d)===61?(I=A,d++):(I=i,se===0&&fe(w)),I!==i){for(V=[],J=Ce();J!==i;)V.push(J),J=Ce();if(V!==i)if(J=Ni(),J!==i){for(Te=[],qe=Ce();qe!==i;)Te.push(qe),qe=Ce();if(Te!==i)if(n.charCodeAt(d)===44?(qe=ue,d++):(qe=i,se===0&&fe(ye)),qe!==i){for(vt=[],ht=Ce();ht!==i;)vt.push(ht),ht=Ce();vt!==i?(ve=u,_=he(M,J),u=_):(d=u,u=o)}else d=u,u=o;else d=u,u=o}else d=u,u=o;else d=u,u=o}else d=u,u=o;else d=u,u=o}else d=u,u=o;else d=u,u=o;if(u===i){for(u=d,_=[],M=Ce();M!==i;)_.push(M),M=Ce();if(_!==i)if(M=bs(),M!==i){for(R=[],I=Ce();I!==i;)R.push(I),I=Ce();if(R!==i)if(n.charCodeAt(d)===61?(I=A,d++):(I=i,se===0&&fe(w)),I!==i){for(V=[],J=Ce();J!==i;)V.push(J),J=Ce();V!==i?(J=Ni(),J!==i?(ve=u,_=he(M,J),u=_):(d=u,u=o)):(d=u,u=o)}else d=u,u=o;else d=u,u=o}else d=u,u=o;else d=u,u=o}return oe[Lt]={nextPos:d,result:u},u}function kl(){var u,_,M,R=d*49+34,I=oe[R];return I?(d=I.nextPos,I.result):(u=d,n.charCodeAt(d)===46?(_=U,d++):(_=i,se===0&&fe(k)),_!==i?(M=As(),M!==i?(ve=u,_=ge(M),u=_):(d=u,u=o)):(d=u,u=o),oe[R]={nextPos:d,result:u},u)}function zl(){var u,_,M,R,I,V,J,Te,qe,vt,ht,Lt,It=d*49+35,on=oe[It];return on?(d=on.nextPos,on.result):(u=d,_=d,M=_t(),M!==i?(R=_t(),R!==i?(I=_t(),I!==i?(V=_t(),V!==i?(n.charCodeAt(d)===45?(J=mt,d++):(J=i,se===0&&fe(be)),J!==i?(Te=_t(),Te!==i?(qe=_t(),qe!==i?(n.charCodeAt(d)===45?(vt=mt,d++):(vt=i,se===0&&fe(be)),vt!==i?(ht=_t(),ht!==i?(Lt=_t(),Lt!==i?(M=[M,R,I,V,J,Te,qe,vt,ht,Lt],_=M):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o),_!==i&&(ve=u,_=we(_)),u=_,oe[It]={nextPos:d,result:u},u)}function Rh(){var u,_,M,R,I,V,J,Te,qe,vt,ht,Lt=d*49+36,It=oe[Lt];return It?(d=It.nextPos,It.result):(u=d,_=d,M=_t(),M!==i?(R=_t(),R!==i?(n.charCodeAt(d)===58?(I=le,d++):(I=i,se===0&&fe(te)),I!==i?(V=_t(),V!==i?(J=_t(),J!==i?(n.charCodeAt(d)===58?(Te=le,d++):(Te=i,se===0&&fe(te)),Te!==i?(qe=_t(),qe!==i?(vt=_t(),vt!==i?(ht=kl(),ht===i&&(ht=W),ht!==i?(M=[M,R,I,V,J,Te,qe,vt,ht],_=M):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o),_!==i&&(ve=u,_=Pe(_)),u=_,oe[Lt]={nextPos:d,result:u},u)}function Ch(){var u,_,M,R,I,V,J,Te,qe,vt,ht,Lt,It,on,Fi,Qn,ln,Xl=d*49+37,va=oe[Xl];return va?(d=va.nextPos,va.result):(u=d,_=d,M=_t(),M!==i?(R=_t(),R!==i?(n.charCodeAt(d)===58?(I=le,d++):(I=i,se===0&&fe(te)),I!==i?(V=_t(),V!==i?(J=_t(),J!==i?(n.charCodeAt(d)===58?(Te=le,d++):(Te=i,se===0&&fe(te)),Te!==i?(qe=_t(),qe!==i?(vt=_t(),vt!==i?(ht=kl(),ht===i&&(ht=W),ht!==i?(n.charCodeAt(d)===45?(Lt=mt,d++):(Lt=i,se===0&&fe(be)),Lt===i&&(n.charCodeAt(d)===43?(Lt=Fe,d++):(Lt=i,se===0&&fe(at))),Lt!==i?(It=_t(),It!==i?(on=_t(),on!==i?(n.charCodeAt(d)===58?(Fi=le,d++):(Fi=i,se===0&&fe(te)),Fi!==i?(Qn=_t(),Qn!==i?(ln=_t(),ln!==i?(M=[M,R,I,V,J,Te,qe,vt,ht,Lt,It,on,Fi,Qn,ln],_=M):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o)):(d=_,_=o),_!==i&&(ve=u,_=Pe(_)),u=_,oe[Xl]={nextPos:d,result:u},u)}function Ph(){var u,_,M,R,I,V=d*49+38,J=oe[V];return J?(d=J.nextPos,J.result):(u=d,_=zl(),_!==i?(n.charCodeAt(d)===84?(M=Ye,d++):(M=i,se===0&&fe(xt)),M!==i?(R=Rh(),R!==i?(n.charCodeAt(d)===90?(I=ut,d++):(I=i,se===0&&fe(Sn)),I!==i?(ve=u,_=fn(_,R),u=_):(d=u,u=o)):(d=u,u=o)):(d=u,u=o)):(d=u,u=o),u===i&&(u=d,_=zl(),_!==i?(n.charCodeAt(d)===84?(M=Ye,d++):(M=i,se===0&&fe(xt)),M!==i?(R=Ch(),R!==i?(ve=u,_=ir(_,R),u=_):(d=u,u=o)):(d=u,u=o)):(d=u,u=o)),oe[V]={nextPos:d,result:u},u)}function Ce(){var u,_=d*49+39,M=oe[_];return M?(d=M.nextPos,M.result):(Bn.test(n.charAt(d))?(u=n.charAt(d),d++):(u=i,se===0&&fe(Ss)),oe[_]={nextPos:d,result:u},u)}function pn(){var u,_,M,R=d*49+40,I=oe[R];return I?(d=I.nextPos,I.result):(n.charCodeAt(d)===10?(u=Es,d++):(u=i,se===0&&fe(Ts)),u===i&&(u=d,n.charCodeAt(d)===13?(_=Di,d++):(_=i,se===0&&fe(sr)),_!==i?(n.charCodeAt(d)===10?(M=Es,d++):(M=i,se===0&&fe(Ts)),M!==i?(_=[_,M],u=_):(d=u,u=o)):(d=u,u=o)),oe[R]={nextPos:d,result:u},u)}function Hl(){var u,_=d*49+41,M=oe[_];return M?(d=M.nextPos,M.result):(u=pn(),u===i&&(u=Ce()),oe[_]={nextPos:d,result:u},u)}function hr(){var u,_,M=d*49+42,R=oe[M];return R?(d=R.nextPos,R.result):(u=d,se++,n.length>d?(_=n.charAt(d),d++):(_=i,se===0&&fe(g)),se--,_===i?u=p:(d=u,u=o),oe[M]={nextPos:d,result:u},u)}function mn(){var u,_=d*49+43,M=oe[_];return M?(d=M.nextPos,M.result):(Ui.test(n.charAt(d))?(u=n.charAt(d),d++):(u=i,se===0&&fe(rr)),oe[_]={nextPos:d,result:u},u)}function _t(){var u,_,M=d*49+44,R=oe[M];return R?(d=R.nextPos,R.result):(ar.test(n.charAt(d))?(u=n.charAt(d),d++):(u=i,se===0&&fe(la)),u===i&&(u=d,n.charCodeAt(d)===95?(_=ca,d++):(_=i,se===0&&fe(ua)),_!==i&&(ve=u,_=ha()),u=_),oe[M]={nextPos:d,result:u},u)}function Vl(){var u,_=d*49+45,M=oe[_];return M?(d=M.nextPos,M.result):(fa.test(n.charAt(d))?(u=n.charAt(d),d++):(u=i,se===0&&fe(da)),oe[_]={nextPos:d,result:u},u)}function As(){var u,_,M,R=d*49+46,I=oe[R];if(I)return d=I.nextPos,I.result;if(u=d,_=[],M=_t(),M!==i)for(;M!==i;)_.push(M),M=_t();else _=o;return _!==i&&(ve=u,_=T(_)),u=_,oe[R]={nextPos:d,result:u},u}function Gl(){var u,_,M=d*49+47,R=oe[M];return R?(d=R.nextPos,R.result):(u=d,n.substr(d,2)===z?(_=z,d+=2):(_=i,se===0&&fe($)),_!==i&&(ve=u,_=q()),u=_,u===i&&(u=d,n.substr(d,2)===H?(_=H,d+=2):(_=i,se===0&&fe(ce)),_!==i&&(ve=u,_=Se()),u=_,u===i&&(u=d,n.substr(d,2)===Re?(_=Re,d+=2):(_=i,se===0&&fe(Ae)),_!==i&&(ve=u,_=He()),u=_,u===i&&(u=d,n.substr(d,2)===We?(_=We,d+=2):(_=i,se===0&&fe(Oe)),_!==i&&(ve=u,_=tt()),u=_,u===i&&(u=d,n.substr(d,2)===ft?(_=ft,d+=2):(_=i,se===0&&fe(Pt)),_!==i&&(ve=u,_=bt()),u=_,u===i&&(u=d,n.substr(d,2)===gt?(_=gt,d+=2):(_=i,se===0&&fe(ze)),_!==i&&(ve=u,_=Rt()),u=_,u===i&&(u=d,n.substr(d,2)===ot?(_=ot,d+=2):(_=i,se===0&&fe(Yt)),_!==i&&(ve=u,_=Jn()),u=_,u===i&&(u=Lh()))))))),oe[M]={nextPos:d,result:u},u)}function Lh(){var u,_,M,R,I,V,J,Te,qe,vt,ht,Lt=d*49+48,It=oe[Lt];return It?(d=It.nextPos,It.result):(u=d,n.substr(d,2)===Wt?(_=Wt,d+=2):(_=i,se===0&&fe(pi)),_!==i?(M=d,R=mn(),R!==i?(I=mn(),I!==i?(V=mn(),V!==i?(J=mn(),J!==i?(Te=mn(),Te!==i?(qe=mn(),qe!==i?(vt=mn(),vt!==i?(ht=mn(),ht!==i?(R=[R,I,V,J,Te,qe,vt,ht],M=R):(d=M,M=o)):(d=M,M=o)):(d=M,M=o)):(d=M,M=o)):(d=M,M=o)):(d=M,M=o)):(d=M,M=o)):(d=M,M=o),M!==i?(ve=u,_=wt(M),u=_):(d=u,u=o)):(d=u,u=o),u===i&&(u=d,n.substr(d,2)===Kt?(_=Kt,d+=2):(_=i,se===0&&fe(nn)),_!==i?(M=d,R=mn(),R!==i?(I=mn(),I!==i?(V=mn(),V!==i?(J=mn(),J!==i?(R=[R,I,V,J],M=R):(d=M,M=o)):(d=M,M=o)):(d=M,M=o)):(d=M,M=o),M!==i?(ve=u,_=wt(M),u=_):(d=u,u=o)):(d=u,u=o)),oe[Lt]={nextPos:d,result:u},u)}var Wl=[];function Ih(u,_,M){var R=new Error(u);throw R.line=_,R.column=M,R}function xa(u){Wl.push(u)}function Vt(u,_,M,R,I){var V={type:u,value:_,line:M(),column:R()};return I&&(V.key=I),V}function Dh(u,_,M){var R=parseInt("0x"+u);if(!isFinite(R)||Math.floor(R)!=R||R<0||R>1114111||R>55295&&R<57344)Ih("Invalid Unicode escape code: "+u,_,M);else return Uh(R)}function Uh(){var u=16384,_=[],M,R,I=-1,V=arguments.length;if(!V)return"";for(var J="";++I<V;){var Te=Number(arguments[I]);Te<=65535?_.push(Te):(Te-=65536,M=(Te>>10)+55296,R=Te%1024+56320,_.push(M,R)),(I+1==V||_.length>u)&&(J+=String.fromCharCode.apply(null,_),_.length=0)}return J}if(lr=l(),lr!==i&&d===n.length)return lr;throw lr!==i&&d<n.length&&fe({type:"end",description:"end of input"}),ph(null,pa,or)}return{SyntaxError:e,parse:t}}()),ro}var ao,vu;function yx(){if(vu)return ao;vu=1;function r(e){var t=[],n=[],s="",i=Object.create(null),a=i;return l(e);function l(C){for(var b,E=0;E<C.length;E++)switch(b=C[E],b.type){case"Assign":o(b);break;case"ObjectPath":g(b);break;case"ArrayPath":v(b);break}return i}function c(C,b,E){var L=new Error(C);throw L.line=b,L.column=E,L}function o(C){var b=C.key,E=C.value,L=C.line,D=C.column,U;s?U=s+"."+b:U=b,typeof a[b]<"u"&&c("Cannot redefine existing key '"+U+"'.",L,D),a[b]=f(E),h(U)||(t.push(U),n.push(U))}function h(C){return t.indexOf(C)!==-1}function f(C){return C.type==="Array"?x(C.value):C.type==="InlineTable"?p(C.value):C.value}function p(C){for(var b=Object.create(null),E=0;E<C.length;E++){var L=C[E];L.value.type==="InlineTable"?b[L.key]=p(L.value.value):L.type==="InlineTableValue"&&(b[L.key]=f(L.value))}return b}function g(C){var b=C.value,E=b.map(m).join("."),L=C.line,D=C.column;h(E)&&c("Cannot redefine existing key '"+b+"'.",L,D),t.push(E),a=y(i,b,Object.create(null),L,D),s=b}function v(C){var b=C.value,E=b.map(m).join("."),L=C.line,D=C.column;if(h(E)||t.push(E),t=t.filter(function(k){return k.indexOf(E)!==0}),t.push(E),a=y(i,b,[],L,D),s=E,a instanceof Array){var U=Object.create(null);a.push(U),a=U}else c("Cannot redefine existing key '"+b+"'.",L,D)}function y(C,b,E,L,D){var U=[],k="";b.join(".");for(var A=C,w=0;w<b.length;w++){var N=b[w];U.push(N),k=U.join("."),typeof A[N]>"u"?w===b.length-1?A[N]=E:A[N]=Object.create(null):w!==b.length-1&&n.indexOf(k)>-1&&c("Cannot redefine existing key '"+k+"'.",L,D),A=A[N],A instanceof Array&&A.length&&w<b.length-1&&(A=A[A.length-1])}return A}function x(C){for(var b=null,E=0;E<C.length;E++){var L=C[E];b===null?b=L.type:L.type!==b&&c("Cannot add value of type "+L.type+" to array of type "+b+".",L.line,L.column)}return C.map(f)}function m(C){return C.indexOf(".")>-1?'"'+C+'"':C}}return ao={compile:r},ao}var oo,Mu;function Sx(){if(Mu)return oo;Mu=1;var r=Mx(),e=yx();return oo={parse:function(t){var n=r.parse(t.toString());return e.compile(n)}},oo}var Ex=Sx();const Tx=vx(Ex);async function bx(r){const t=await(await fetch(r)).text();return Tx.parse(t)}const Ii=await bx("sceneConfig.toml"),Ci=Ii.planets,Vr=Ii.moons,Si=Math.pow(10,11);class lo{constructor({name:e,radius:t=null,diameter:n=null,distanceFromOrbitCenter:s,texturePath:i,normalMapPath:a=null,specularMapPath:l=null,emissiveMapPath:c=null,otherMaterialProps:o={},numberOfSegments:h=64,orbitRotationSpeed:f=1e-5,selfRotationSpeed:p=.1,orbitalPeriod:g=1}){t?this.radius=t:n&&(this.radius=Math.pow(10,6)*n/2),this.name=e,this.distanceFromOrbitCenter=Math.pow(10,6)*s;const v=new vl;this.texture=v.load(i),this.normalMap=a?v.load(a):null,this.specularMap=l?v.load(l):null,this.emissiveMap=c?v.load(c):null,o&&Object.keys(o).forEach(y=>{typeof o[y]=="string"&&o[y].startsWith("#")&&(o[y]=new Ve(o[y]))}),this.material=new Td({map:this.texture,normalMap:this.normalMap,specularMap:this.specularMap,emissiveMap:this.emissiveMap,...o}),this.numberOfSegments=h,this.geometry=new _l(this.radius,h,h),this.mesh=new sn(this.geometry,this.material),this.mesh.position.set(0,0,this.distanceFromOrbitCenter),this.orbit=new Tt,this.orbit.add(this.mesh),this.orbitalPeriod=g,this.orbitRotationSpeed=Math.PI*2/(g*365*24*60*60),this.selfRotationSpeed=p}}class Ax{constructor({scale:e=.01,maxSpeed:t=299792458,currentSpeed:n=0,spaceShipMeshPath:s="space-ship/scene.gltf",acceleration:i=1,maxAcceleration:a=1e7,baseAccelerationIncrease:l=1e6,rotationSpeed:c=1.5,breakStrength:o=.5,spaceshipStartingPosition:h=new O(-6e6,0,Ci[Ii.spaceShipStartingPosition].distanceFromOrbitCenter*Math.pow(10,6)+Ci[Ii.spaceShipStartingPosition].diameter*Math.pow(10,6)),fov:f=75,near:p=.001,far:g=Math.pow(10,15),aspect:v=2,maxBank:y=.35,maxPitch:x=.35,tiltSpring:m=5}={}){this.status="loading",this.maxSpeed=t,this.currentSpeed=n,this.acceleration=i,this.maxAcceleration=a,this.baseAccelerationIncrease=l,this.breakStrength=o,this.rotationSpeed=c,this.spaceshipStartingPosition=h,this.pivot=new Tt,this.centeredMesh=new Tt,new B0().load(s,b=>{this.mesh=b.scene,this.mesh.scale.set(e,e,e),this.mesh.position.set(0,0,0),this.mesh.rotation.set(.2,0,-.3),this.centeredMesh.add(this.mesh),this.pivot.add(this.centeredMesh),this.mesh.updateWorldMatrix(!0,!0);const L=new Nn().setFromObject(this.mesh).getCenter(new O);this.mesh.position.sub(L),this.pivot.position.set(h.x,h.y,h.z),this.pivot.lookAt(0,0,0),this.camera=new qt(f,v,p,g),this.camera.position.set(.3,1,-5),this.camera.position.multiplyScalar(e*2),this.camera.lookAt(0,0,0),this.pivot.add(this.camera),this.maxBank=y,this.maxPitch=x,this.tiltSpring=m,this.status="ready",this.mesh.emissive=new Ve("#d81212ff"),this.mesh.emissiveIntensity=1})}addAxes(e=!0,t=!0){if(e){const n=new zc(2);n.material.depthTest=!1,n.renderOrder=1,this.mesh.add(n)}if(t){const n=new zc(2);n.material.depthTest=!1,n.renderOrder=1,this.pivot.add(n)}}lookAt(e){this.pivot.lookAt(e)}moveTo(e){const t=new O(-6e6,0,Ci[e].distanceFromOrbitCenter*Math.pow(10,6)+Ci[e].diameter*Math.pow(10,6));this.pivot.position.set(t.x,t.y,t.z),this.pivot.lookAt(0,0,0)}}const oi={},ks={},nt=new Ax,wx=1.5;let yu=0,Gr=null;const zs=new O,Su=new O,Eu=new O,Tu=new O,bu=new O,Rx=Ii.colors[Ii.spaceBackground],Bt=new Set;window.addEventListener("keydown",r=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(r.key)&&r.preventDefault(),Bt.add(r.code)});window.addEventListener("keyup",r=>Bt.delete(r.code));const Au=document.getElementById("solar-body");Au.addEventListener("change",()=>{nt.moveTo(Au.value)});function Cx(r){const e=r.domElement,t=e.clientWidth,n=e.clientHeight,s=e.width!==t||e.height!==n;return s&&r.setSize(t,n,!1),s}function Px(){const r=document.querySelector("#c"),e=document.getElementById("hud-speed"),t=document.getElementById("hud-dist"),n=document.getElementById("hud-dist-mars"),s=document.getElementById("hud-dist-mercury"),i=document.getElementById("hud-dist-earth-moon"),a=new fu({antialias:!0,canvas:r}),l=75,c=2,o=.1,h=3e3,f=new qt(l,c,o,h);f.position.set(40,40,60),f.lookAt(0,0,0);const p=new dd;p.background=new Ve(Rx);const g=new vl;let v;if(Ii.addStars){const W=[];for(let de=0;de<1e3;de++)W.push(jr.randFloatSpread(Math.pow(10,12),Math.pow(10,13)),jr.randFloatSpread(Math.pow(10,12),Math.pow(10,13)),jr.randFloatSpread(Math.pow(10,12),Math.pow(10,13)));const ee=g.load("white-circle.png"),X=new an;X.setAttribute("position",new en(W,3));const ie=new gl({map:ee,size:.5});v=new eh(X,ie),p.add(v)}const y=new Tt;p.add(y),y.add(nt.pivot);const x=new lo(Ci.sun);y.add(x.mesh);const m=new rh(16777215,Math.pow(10,23),Math.pow(10,25));m.position.set(0,0,0),p.add(m),Object.keys(Ci).forEach(W=>{const ee=new lo(Ci[W]);y.add(ee.orbit),oi[W]=ee}),Object.keys(Vr).forEach(W=>{const ee=new lo(Vr[W]);ee.orbit.position.set(0,0,oi[Vr[W].parentPlanet].distanceFromOrbitCenter),oi[Vr[W].parentPlanet].orbit.add(ee.orbit),ks[W]=ee});const C={},b={};let E=null;const L=g.load("white-circle.png"),D=Si*.04;function U(W=16777215){const ee=new Ku({map:L,color:W,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),X=new pd(ee);return X.layers.set(1),X.scale.setScalar(D),p.add(X),X}const k=new O;Object.entries(oi).forEach(([W,ee])=>{const ie=U(W==="sun"?16763904:W==="earth"?5614335:W==="mars"?16737860:16777215);ee.mesh.getWorldPosition(k),ie.position.copy(k),C[W]=ie}),Object.entries(ks).forEach(([W,ee])=>{const X=U(11184810);ee.mesh.getWorldPosition(k),X.position.copy(k),b[W]=X}),E=U(65416),nt.pivot.getWorldPosition(k),E.position.copy(k);const A=new aa(-Si,Si,Si,-Si,1,1e15);A.up.set(0,0,-1),A.lookAt(new O(0,-1,0)),A.layers.set(1);const w=new fu({canvas:document.getElementById("minimap"),alpha:!0});w.setSize(200,200),w.setPixelRatio(window.devicePixelRatio);const N=8;function ne(){const W=w.getDrawingBufferSize(new Ke),ee=2*Si/W.y,X=N*ee;Object.values(C).forEach(ie=>ie.scale.setScalar(X)),Object.values(b).forEach(ie=>ie.scale.setScalar(X)),E&&E.scale.setScalar(X)}let K=nt.centeredMesh,Y=new yn;Y.copy(nt.centeredMesh.rotation);function re(W){if(nt.status!=="ready")return requestAnimationFrame(re);W*=.001;const ee=Math.min(.05,W-yu);if(yu=W,Cx(a)&&(nt.camera.aspect=r.clientWidth/r.clientHeight,nt.camera.updateProjectionMatrix()),v.rotation.x=W*2e-4,v.rotation.y=W*2e-4,Object.values(oi).forEach(ie=>{ie.orbit.rotation.y=W*ie.orbitRotationSpeed,ie.mesh&&(ie.mesh.rotation.y=W*ie.selfRotationSpeed)}),Object.values(ks).forEach(ie=>{ie.orbit.rotation.y=W*ie.orbitRotationSpeed,ie.mesh&&(ie.mesh.rotation.y=W*ie.selfRotationSpeed)}),x.mesh&&(x.mesh.rotation.y=W*.1),nt.pivot){const ie=nt.pivot.getWorldDirection(new O).normalize(),de=new O(0,1,0),Ee=new O;Ee.add(ie),(Bt.has("KeyW")||Bt.has("ArrowUp"))&&nt.currentSpeed<nt.maxSpeed&&(nt.acceleration=Math.min(nt.acceleration+nt.baseAccelerationIncrease*ee,nt.maxAcceleration),nt.currentSpeed+=nt.acceleration*ee),(Bt.has("KeyS")||Bt.has("ArrowDown"))&&(nt.acceleration=0,nt.currentSpeed>0&&(nt.currentSpeed*=1-nt.breakStrength*ee)),Bt.has("KeyR")&&Ee.add(de),Bt.has("KeyF")&&Ee.addScaledVector(de,-1),Ee.lengthSq()>0&&(Ee.normalize().multiplyScalar(nt.currentSpeed*ee),nt.pivot.position.add(Ee)),console.log("Velocity",nt.currentSpeed),console.log("Acceleration",nt.acceleration);const Xe=(Bt.has("ArrowLeft")|Bt.has("KeyA")?1:0)-(Bt.has("ArrowRight")|Bt.has("KeyD")?1:0);Xe&&nt.pivot.rotateOnWorldAxis(de,Xe*wx*ee)}if(K){p.updateMatrixWorld(!0),Gr||(Gr=nt.pivot.position.clone());const ie=nt.pivot.position,de=ie.distanceTo(Gr);ee>0&&(nt.speedUnitsPerSec=de/(ee*1e3)),Gr.copy(ie),K.getWorldPosition(zs),x.mesh.getWorldPosition(Su),oi.mars.mesh.getWorldPosition(Eu),oi.mercury.mesh.getWorldPosition(Tu),ks.earthMoon.mesh.getWorldPosition(bu);const Ee=zs.distanceTo(Su)/Math.pow(10,6),Xe=zs.distanceTo(Eu)/Math.pow(10,6),pt=zs.distanceTo(Tu)/Math.pow(10,6),ct=zs.distanceTo(bu)/Math.pow(10,6);e&&(e.textContent=nt.speedUnitsPerSec.toFixed(2)),t&&(t.textContent=Ee.toFixed(0)),n&&(n.textContent=Xe.toFixed(0)),s&&(s.textContent=pt.toFixed(0)),i&&(i.textContent=ct.toFixed(0));const Z=Bt.has("KeyR"),_e=Bt.has("KeyF"),pe=Bt.has("ArrowLeft")|Bt.has("KeyA"),Be=Bt.has("ArrowRight")|Bt.has("KeyD"),ke=(Number(Be)-Number(pe))*nt.maxBank,$e=(Number(_e)-Number(Z))*nt.maxPitch,At=Math.min(1,nt.tiltSpring*ee);K.rotation.x+=(Y.x+$e-K.rotation.x)*At,K.rotation.z+=(Y.z+ke-K.rotation.z)*At,K.rotation.y=Y.y}a.render(p,nt.camera);const X=new O;for(const[ie,de]of Object.entries(oi)){const Ee=C[ie];Ee&&(de.mesh.getWorldPosition(X),Ee.position.copy(X))}for(const[ie,de]of Object.entries(ks)){const Ee=b[ie];Ee&&(de.mesh.getWorldPosition(X),Ee.position.copy(X))}E&&(nt.pivot.getWorldPosition(X),E.position.copy(X)),nt.pivot&&(nt.pivot.getWorldPosition(E.position),A.position.set(E.position.x,E.position.y+Si,E.position.z),A.lookAt(E.position)),ne(),w.render(p,A),requestAnimationFrame(re)}requestAnimationFrame(re)}Px();
