/* eslint-disable */
/*
 SharedContext.is_webgl2() &&*/
function ba() { this.la = !1; this.Y = null; this.bd = void 0; this.X = 1; this.cc = this.sd = 0; this.ia = null } function ca(a) { if (a.la) throw new TypeError("Generator is already running"); a.la = !0 } ba.prototype.ma = function (a) { this.bd = a }; ba.prototype.pa = function (a) { this.ia = { Ed: a, ae: !0 }; this.X = this.sd || this.cc }; ba.prototype.return = function (a) { this.ia = { return: a }; this.X = this.cc }; function na(a) { this.o = new ba; this.re = a } na.prototype.ma = function (a) { ca(this.o); if (this.o.Y) return oa(this, this.o.Y.next, a, this.o.ma); this.o.ma(a); return ra(this) };
function sa(a, d) { ca(a.o); var f = a.o.Y; if (f) return oa(a, "return" in f ? f["return"] : function (g) { return { value: g, done: !0 } }, d, a.o.return); a.o.return(d); return ra(a) } na.prototype.pa = function (a) { ca(this.o); if (this.o.Y) return oa(this, this.o.Y["throw"], a, this.o.ma); this.o.pa(a); return ra(this) };
function oa(a, d, f, g) { try { var p = d.call(a.o.Y, f); if (!(p instanceof Object)) throw new TypeError("Iterator result " + p + " is not an object"); if (!p.done) return a.o.la = !1, p; var h = p.value } catch (t) { return a.o.Y = null, a.o.pa(t), ra(a) } a.o.Y = null; g.call(a.o, h); return ra(a) }
function ra(a) { for (; a.o.X;)try { var d = a.re(a.o); if (d) return a.o.la = !1, { value: d.value, done: !1 } } catch (f) { a.o.bd = void 0, a.o.pa(f) } a.o.la = !1; if (a.o.ia) { d = a.o.ia; a.o.ia = null; if (d.ae) throw d.Ed; return { value: d.return, done: !0 } } return { value: void 0, done: !0 } } function ua(a) { this.next = function (d) { return a.ma(d) }; this.throw = function (d) { return a.pa(d) }; this.return = function (d) { return sa(a, d) }; this[Symbol.iterator] = function () { return this } }
function Aa(a) { function d(g) { return a.next(g) } function f(g) { return a.throw(g) } return new Promise(function (g, p) { function h(t) { t.done ? g(t.value) : Promise.resolve(t.value).then(d, f).then(h, p) } h(a.next()) }) } function Ca(a) { var d = new XMLHttpRequest; d.open("GET", b.Ib + b.neuralNetworkPath, !0); d.withCredentials = !1; d.onreadystatechange = function () { 4 !== d.readyState || 200 !== d.status && 0 !== d.status || a(d.responseText) }; d.send() } function Da() { for (var a = b.Dc, d = Array(a), f = 0; f < a; ++f)d[f] = 0; return d }
function Ea(a, d) { if (0 === d || "object" !== typeof a) return a; a = Object.assign({}, a); d = void 0 === d || -1 === d ? -1 : d - 1; for (var f in a) a[f] = Ea(a[f], d); return a } function Fa(a, d, f) { a = Math.min(Math.max((f - a) / (d - a), 0), 1); return a * a * (3 - 2 * a) } function Ja(a, d, f) { return Math.min(Math.max((f - a) / (d - a), 0), 1) } function Ka(a, d, f, g) { return Math.pow(Math.min(Math.max((g - a) / (d - a), 0), 1), f) }
function La(a) { switch (a) { case "relu": return "gl_FragColor=max(vec4(0.,0.,0.,0.),gl_FragColor);"; case "elu": return "gl_FragColor=mix(exp(-abs(gl_FragColor))-vec4(1.,1.,1.,1.),gl_FragColor,step(0.,gl_FragColor));"; case "elu01": return "gl_FragColor=mix(0.1*exp(-abs(gl_FragColor))-vec4(0.1,0.1,0.1,0.1),gl_FragColor,step(0.,gl_FragColor));"; case "arctan": return "gl_FragColor=atan(3.14159265359*texture2D(u0,vUV))/3.14159265359;"; case "copy": return ""; default: return !1 } }
function Ma(a, d) { var f = d % 8; return a[(d - f) / 8] >> 7 - f & 1 }
function Na(a) {
    var d = JSON.parse(a); a = d.ne; var f = d.nf, g = d.n; var p = "undefined" === typeof btoa ? Buffer.from(d.data, "base64").toString("latin1") : atob(d.data); var h = p.length; d = new Uint8Array(h); for (var t = 0; t < h; ++t)d[t] = p.charCodeAt(t); p = new Float32Array(g); h = new Float32Array(f); t = a + f + 1; for (var l = 0; l < g; ++l) {
        for (var e = t * l, v = 0 === Ma(d, e) ? 1 : -1, y = e + 1, w = 1, c = 0, u = y + a - 1; u >= y; --u)c += w * Ma(d, u), w *= 2; y = c; e = e + 1 + a; w = h.length; c = 0; for (u = e; u < e + w; ++u)h[c] = Ma(d, u), ++c; for (w = e = 0; w < f; ++w)e += h[w] * Math.pow(2, -w - 1); p[l] = 0 === e && 0 ===
            y ? 0 : v * (1 + e) * Math.pow(2, 1 + y - Math.pow(2, a - 1))
    } return p
}
var G = function () {
    function a(r, n, z) { n = r.createShader(n); r.shaderSource(n, z); r.compileShader(n); return r.getShaderParameter(n, r.COMPILE_STATUS) ? n : !1 } function d(r, n, z) { n = a(r, r.VERTEX_SHADER, n); z = a(r, r.FRAGMENT_SHADER, z); r === F && t.push(n, z); var P = r.createProgram(); r.attachShader(P, n); r.attachShader(P, z); r.linkProgram(P); return P } function f(r, n) {
        void 0 === n.qa && (n.qa = "precision lowp float;attribute vec2 a0;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=a0*.5+vec2(.5,.5);}"); void 0 === n.ta && (n.ta =
            ["a0"]); void 0 === n.ja && (n.ja = [2]); if (void 0 === n.precision || "highp" === n.precision) n.precision = w; n.id = v++; void 0 !== n.Tc && (n.Tc.forEach(function (P, B) { n.h = n.h.replace(P, n.Ma[B]) }), n.Tc.splice(0)); n.Gb = 0; n.ja.forEach(function (P) { n.Gb += 4 * P }); n.ba = d(r, n.qa, "precision " + n.precision + " float;\n" + n.h); n.u = {}; n.i.forEach(function (P) { n.u[P] = r.getUniformLocation(n.ba, P) }); n.attributes = {}; n.ka = []; n.ta.forEach(function (P) { var B = r.getAttribLocation(n.ba, P); n.attributes[P] = B; n.ka.push(B) }); if (n.j) {
                r.useProgram(n.ba);
                e = n; l = n.id; for (var z in n.j) r.uniform1i(n.u[z], n.j[z])
            } n.nb = !0
    } function g(r) { Oa.Fe(M); l !== r.id && (M.M(), l = r.id, e = r, F.useProgram(r.ba), r.ka.forEach(function (n) { 0 !== n && F.enableVertexAttribArray(n) })) } function p(r, n, z) { f(r, n, z); r.useProgram(n.ba); r.enableVertexAttribArray(0); l = -1; return e = n } function h() { return { h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}", i: ["u1"], j: { u1: 0 } } } var t = [], l = -1, e = null, v = 0, y = !1, w = "highp", c = ["u1"], u = ["u0"], A = { u1: 0 }, I = { u0: 0 }, q = { u1: 0, u2: 1 },
        K = { u3: 0 }, U = {
            s0: h(), s1: { h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}", i: c, j: A, precision: "lowp" }, s2: { h: "uniform sampler2D u1,u2;varying vec2 vv0;void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u1,vv0);gl_FragColor=a*b;}", i: ["u1", "u2"], j: q }, s3: { h: "uniform sampler2D u1;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=a.r*f;}", i: c, j: A }, s4: {
                h: "uniform sampler2D u1,u2;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u1,vv0);gl_FragColor=a.a*b.r*f;}",
                i: ["u1", "u2"], j: q
            }, s5: { h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vec2(1.-vv0.x,vv0.y));}", i: c, j: A }, s6: { h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vec2(vv0.x,1.-vv0.y));}", i: c, j: A }, s7: { h: "uniform sampler2D u0;uniform float u4;varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=a*u4;}", i: ["u0", "u4"], j: I }, s8: {
                h: "uniform sampler2D u0;uniform float u4;varying vec2 vv0;const vec4 f=vec4(.25,.25,.25,.25),g=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0);float b=dot(a*u4,f);gl_FragColor=b*g;}",
                i: ["u0", "u4"], j: I
            }, s9: { h: "uniform sampler2D u1;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){float a=.25*dot(e,texture2D(u1,vv0));gl_FragColor=a*e;}", i: c, j: A }, s10: { h: "uniform sampler2D u1,u5;uniform float u6;const vec4 f=vec4(1.,1.,1.,1.);varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0),b=texture2D(u5,vv0);gl_FragColor=mix(b,a,u6*f);}", i: ["u1", "u5", "u6"], j: { u1: 0, u5: 1 } }, s11: {
                h: "uniform sampler2D u1;uniform vec2 u7;varying vec2 vv0;void main(){gl_FragColor=.25*(texture2D(u1,vv0+u7)+texture2D(u1,vv0+u7*vec2(1.,-1.))+texture2D(u1,vv0+u7*vec2(-1.,-1.))+texture2D(u1,vv0+u7*vec2(-1.,1.)));}",
                i: ["u1", "u7"], j: A
            }, s12: {
                h: "uniform sampler2D u1;uniform vec4 u8;varying vec2 vv0;float g(float a,float b){a=floor(a)+.5;return floor(a/exp2(b));}float h(float a,float b){return floor(a*exp2(b)+.5);}float i(float a,float b){return mod(a,h(1.,b));}float e(float c,float a,float b){a=floor(a+.5),b=floor(b+.5);return i(g(c,a),b-a);}vec4 j(float a){if(a==0.)return vec4(0.,0.,0.,0.);float k=128.*step(a,0.);a=abs(a);float c=floor(log2(a)),l=c+127.,b=(a/exp2(c)-1.)*8388608.,d=l/2.,m=fract(d)*2.,n=floor(d),o=e(b,0.,8.),p=e(b,8.,16.),q=m*128.+e(b,16.,23.),r=k+n;return vec4(o,p,q,r)/255.;}void main(){float a=dot(texture2D(u1,vv0),u8);gl_FragColor=j(a);}",
                i: ["u1", "u8"], j: A
            }, s13: { h: "uniform sampler2D u0;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=e/(e+exp(-a));gl_FragColor=b;}", i: u, j: I }, s14: { h: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(0.,0.,0.,0.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=max(f,a);}", i: u, j: I }, s15: { h: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=mix(exp(-abs(a))-f,a,step(0.,a));}", i: u, j: I }, s16: {
                h: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=exp(-abs(a))-f;gl_FragColor=mix(.1*b,a,step(0.,a));}",
                i: u, j: I
            }, s17: { h: "uniform sampler2D u0,u6,u9;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),c=texture2D(u6,vv0),d=texture2D(u9,vv0),b=a/d;gl_FragColor=c*mix(exp(-abs(b))-f,b,step(0.,a));}", i: ["u0", "u6", "u9"], j: { u0: 0, u6: 1, u9: 2 } }, s18: { h: "uniform sampler2D u0;const float e=3.141593;varying vec2 vv0;void main(){gl_FragColor=atan(e*texture2D(u0,vv0))/e;}", i: u, j: I }, s19: {
                h: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=log(f+a);gl_FragColor=b;}",
                i: u, j: I
            }, s20: { h: "uniform sampler2D u0,u10;uniform float u11;const vec2 e=vec2(.5,.5);const float f=1e-5;const vec4 g=vec4(1.,1.,1.,1.),i=vec4(0.,0.,0.,0.);varying vec2 vv0;void main(){vec4 a=texture2D(u10,e);float b=u11*u11;vec4 c=max(b*a,f*g);gl_FragColor=texture2D(u0,vv0)/c;}", i: ["u0", "u10", "u11"], j: { u0: 0, u10: 1 } }, s21: {
                h: "uniform sampler2D u1;uniform vec2 u12;varying vec2 vv0;void main(){float a=u12.x*u12.y;vec2 b=floor(vv0*a)/a,c=fract(vv0*a),d=floor(b*u12.y),f=floor(u12.x*fract(b*u12.y)),g=(f*u12.y+d)/a;gl_FragColor=texture2D(u1,g+c/a);}",
                i: ["u1", "u12"], j: A
            }, s22: { h: "uniform sampler2D u13,u14,u15;varying vec2 vv0;void main(){vec4 a=texture2D(u15,vv0);vec2 b=a.rg,c=a.ba;vec4 d=texture2D(u13,b),f=texture2D(u14,c);gl_FragColor=d*f;}", i: ["u13", "u14", "u15"], j: { u14: 0, u13: 1, u15: 2 } }, s23: { h: "uniform float u16;uniform sampler2D u13,u14;varying vec2 vv0;void main(){vec2 a=fract(vv0*u16);vec4 b=texture2D(u13,vv0),c=texture2D(u14,a);gl_FragColor=b*c;}", i: ["u14", "u13", "u16"], j: { u14: 0, u13: 1 } }, s24: {
                h: "uniform float u16;uniform sampler2D u13,u14,u17,u18,u19,u20;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.),g=vec4(1e-3,1e-3,1e-3,1e-3);void main(){vec2 h=vv0*u16,l=floor(h),c=h-l;vec4 m=texture2D(u13,vv0),d=texture2D(u14,c),a=texture2D(u20,vv0);a=a*255.;vec4 n=texture2D(u17,c),o=texture2D(u18,c),p=texture2D(u19,c),i=step(-g,-a),b=e-i,j=b*step(-e-g,-a);b*=e-j;vec4 k=b*step(-2.*e-g,-a);b*=e-k;vec4 q=b;d=i*d+j*n+k*o+q*p,gl_FragColor=m*d;}",
                i: "u13 u14 u16 u20 u17 u18 u19".split(" "), j: { u14: 0, u13: 1, u20: 3, u17: 4, u18: 5, u19: 6 }
            }, s25: {
                h: "uniform sampler2D u13,u14,u21;uniform float u16,u22,u23,u24;varying vec2 vv0;const vec2 j=vec2(1.,1.);void main(){vec2 a=floor(u22*vv0),b=u22*vv0-a;float c=u16/u22;vec2 d=floor(b*c),f=b*c-d,g=(a+f)/u22;float k=u22*u24/u16;vec2 l=k*d,h=(l+f*u23)/u24,i=step(h,j);vec4 m=texture2D(u13,g),n=texture2D(u14,h),o=m*n*i.x*i.y,p=texture2D(u21,g);gl_FragColor=o*u23*u23+p;}", i: "u13 u14 u16 u22 u23 u24 u21".split(" "), j: {
                    u14: 0,
                    u13: 1, u21: 2
                }
            }, s26: { h: "uniform sampler2D u13,u14;varying vec2 vv0;void main(){vec4 a=texture2D(u13,vv0),b=texture2D(u14,vv0);gl_FragColor=a*b;}", i: ["u13", "u14"], j: { u14: 0, u13: 1 } }, s27: { h: "uniform sampler2D u1,u21;uniform float u25;varying vec2 vv0;void main(){gl_FragColor=texture2D(u21,vv0)+u25*texture2D(u1,vv0);}", i: ["u1", "u21", "u25"], j: { u1: 0, u21: 1 } }, s28: {
                h: "varying vec2 vv0;uniform sampler2D u1;const vec4 f=vec4(1.,1.,1.,1.),g=vec4(.299,.587,.114,0.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=dot(a,g)*f;}",
                i: c, j: A, precision: "lowp"
            }, s29: { h: "varying vec2 vv0;uniform sampler2D u1;uniform float u26;const vec3 f=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u1,vv0).rgb,b=texture2D(u1,vv0+vec2(0.,u26)).rgb,c=texture2D(u1,vv0+vec2(u26,u26)).rgb,d=texture2D(u1,vv0+vec2(u26,0.)).rgb;gl_FragColor=vec4(dot(a,f),dot(b,f),dot(c,f),dot(d,f));}", i: ["u1", "u26"], j: A, precision: "lowp" }, s30: {
                h: "varying vec2 vv0;uniform sampler2D u1;uniform float u26;const vec3 f=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u1,vv0).rgb,b=texture2D(u1,vv0+vec2(0.,u26)).rgb,c=texture2D(u1,vv0+vec2(u26,u26)).rgb,d=texture2D(u1,vv0+vec2(u26,0.)).rgb;gl_FragColor=vec4(a.r,b.g,c.b,dot(d,f));}",
                i: ["u1", "u26"], j: A, precision: "lowp"
            }, s31: {
                h: "varying vec2 vv0;uniform sampler2D u1,u2;uniform float u27;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=vec4(0.);a-=texture2D(u1,vec2(vv0.x-u27,vv0.y-u27))*1.,a-=texture2D(u1,vec2(vv0.x-u27,vv0.y))*2.,a-=texture2D(u1,vec2(vv0.x-u27,vv0.y+u27))*1.,a+=texture2D(u1,vec2(vv0.x+u27,vv0.y-u27))*1.,a+=texture2D(u1,vec2(vv0.x+u27,vv0.y))*2.,a+=texture2D(u1,vec2(vv0.x+u27,vv0.y+u27))*1.;vec4 b=vec4(0.);b-=texture2D(u1,vec2(vv0.x-u27,vv0.y-u27))*1.,b-=texture2D(u1,vec2(vv0.x,vv0.y-u27))*2.,b-=texture2D(u1,vec2(vv0.x+u27,vv0.y-u27))*1.,b+=texture2D(u1,vec2(vv0.x-u27,vv0.y+u27))*1.,b+=texture2D(u1,vec2(vv0.x,vv0.y+u27))*2.,b+=texture2D(u1,vec2(vv0.x+u27,vv0.y+u27))*1.;vec3 c=sqrt(a.rgb*a.rgb+b.rgb*b.rgb);vec4 e=vec4(c,texture2D(u1,vv0).a),g=texture2D(u2,vv0);gl_FragColor=g.a*e.r*f;}",
                i: ["u1", "u2", "u27"], j: q
            }, s32: { h: "varying vec2 vv0;uniform sampler2D u1,u2;uniform float u27;const vec4 j=vec4(1.,1.,1.,1.);const vec2 k=vec2(1.,1.);void main(){float h=0.;vec2 l=k*u27,a,b;float c,d,i=0.;for(float e=-4.;e<=4.;e+=1.)for(float f=-4.;f<=4.;f+=1.)a=vec2(e,f),c=length(a)/2.,d=exp(-c*c),b=vv0+l*a,h+=d*texture2D(u1,b).r,i+=d;vec4 m=texture2D(u2,vv0);gl_FragColor=m.a*(texture2D(u1,b).r-h/i)*j;}", i: ["u1", "u2", "u27"], j: q }, s33: {
                h: "uniform sampler2D u3;uniform vec2 u7;varying vec2 vv0;vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}const vec2 g=vec2(.5,.5),h=vec2(1.,0.),i=vec2(0.,1.);void main(){vec2 a=vv0-u7*g;vec4 b=texture2D(u3,a),c=texture2D(u3,a+u7*h),d=texture2D(u3,a+u7*i),j=texture2D(u3,a+u7),k=e(b,c),l=e(d,j);gl_FragColor=e(k,l);}",
                i: ["u3", "u7"], j: K
            }, s34: { h: "uniform sampler2D u3;uniform vec2 u7;varying vec2 vv0;const vec2 k=vec2(1.,0.),l=vec2(0.,1.),m=vec2(2.,0.),n=vec2(0.,2.);vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}vec4 f(vec2 a){vec4 b=texture2D(u3,a),c=texture2D(u3,a+u7*k),d=texture2D(u3,a+u7*l),g=texture2D(u3,a+u7),h=e(b,c),i=e(d,g);return e(h,i);}void main(){vec2 a=vv0+u7*vec2(-.55,-1.05);vec4 b=f(a),c=f(a+u7*m),d=f(a+u7*2.),g=f(a+u7*n),h=e(b,c),i=e(d,g);gl_FragColor=e(h,i);}", i: ["u3", "u7"], j: K }, s35: {
                h: "uniform sampler2D u1;varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=a*a;}",
                i: ["u1"], j: A, precision: "lowp"
            }, s36: { h: "uniform sampler2D u1;uniform vec2 u7;varying vec2 vv0;const float e=15444.;void main(){vec4 a=1001./e*texture2D(u1,vv0-3.*u7)+2002./e*texture2D(u1,vv0-2.*u7)+3003./e*texture2D(u1,vv0-u7)+3432./e*texture2D(u1,vv0)+3003./e*texture2D(u1,vv0+u7)+2002./e*texture2D(u1,vv0+2.*u7)+1001./e*texture2D(u1,vv0+3.*u7);gl_FragColor=a;}", i: ["u7", "u1"], j: A, precision: "lowp" }, s37: {
                h: "uniform sampler2D u1,u28,u29;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);const float g=.1;void main(){vec4 a=texture2D(u28,vv0),b=texture2D(u29,vv0),c=texture2D(u1,vv0),d=max(f*g,b-a*a),h=sqrt(d);gl_FragColor=(c-a)/h;}",
                i: ["u1", "u28", "u29"], j: { u1: 0, u28: 1, u29: 2 }
            }
        }, Q = {
            s38: {
                h: "uniform float u16,u30;uniform sampler2D u13,u14,u21;varying vec2 vv0;const vec2 ZERO2=vec2(0.,0.),ONE2=vec2(1.,1.),HALF2=vec2(.5,.5),EPS2=vec2(1e-5,1e-5);void main(){vec4 sum=texture2D(u21,vv0);float toSparsity=1.1111;vec2 uvFrom,uvWeight,xyPatch=ZERO2,eps2=EPS2/u16,xyTo=floor(vv0*u16+eps2);float weightSize=toSparsity*u16;vec2 halfFromSparsity=ONE2*(toSparsity-1.)/2.;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.)xyPatch.y=patch_y,uvFrom=(xyTo+HALF2+u30*(xyPatch-halfFromSparsity))/u16,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),uvWeight=(xyTo*toSparsity+xyPatch+HALF2)/weightSize,sum+=texture2D(u13,uvWeight)*texture2D(u14,uvFrom);}gl_FragColor=sum,gl_FragColor*=2.2222;}",
                i: ["u16", "u13", "u14", "u21", "u30"], Ma: ["1.1111", "gl_FragColor\\*=2.2222;"]
            }, s39: {
                h: "uniform float u16,u30,u24;uniform sampler2D u13,u14,u21;varying vec2 vv0;const vec2 ZERO2=vec2(0.,0.),ONE2=vec2(1.,1.),HALF2=vec2(.5,.5),EPS2=vec2(1e-4,1e-4);void main(){vec4 sum=texture2D(u21,vv0);float fromSparsity=1.1111,shrinkFactor=3.3333;vec2 uvFrom,uvWeight,xyFrom,xyPatchTo,xyPatch=ZERO2,xyShrink=ZERO2,eps2=EPS2/u24,xyTo=floor(vv0*u16+eps2);float weightSize=fromSparsity*u24;vec2 halfFromSparsity=ONE2*(fromSparsity-1.)/2.;float toSparsity=weightSize/u16;vec2 xyFrom0=xyTo*shrinkFactor;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.){xyPatch.y=patch_y;for(float shrink_x=0.;shrink_x<3.3333;shrink_x+=1.){xyShrink.x=shrink_x;for(float shrink_y=0.;shrink_y<3.3333;shrink_y+=1.)xyShrink.y=shrink_y,xyFrom=xyFrom0+xyShrink+shrinkFactor*u30*(xyPatch-halfFromSparsity),uvFrom=(xyFrom+HALF2)/u24,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),xyPatchTo=xyPatch*shrinkFactor+xyShrink,uvWeight=(xyTo*toSparsity+xyPatchTo+HALF2)/weightSize,sum+=texture2D(u13,uvWeight)*texture2D(u14,uvFrom);}}}gl_FragColor=sum,gl_FragColor*=2.2222;}",
                i: "u16 u24 u13 u14 u21 u30".split(" "), Ma: ["1.1111", "gl_FragColor\\*=2.2222;", "3.3333"]
            }
        }, R = null, J = null, M = {
            Ga: function () { return y }, s: function () { if (!y) { R = Ea(U, 2); J = Ea(Q, 2); w = "highp"; for (var r in R) f(F, R[r], r); G.set("s0"); F.enableVertexAttribArray(0); y = !0 } }, dd: function (r) { r.forEach(function (n) { M.Lb(n) }) }, Lb: function (r) { R[r.id] = r; f(F, r, r.id) }, nc: function (r, n, z) {
                n || (n = r); R[n] = Object.create(J[r]); R[n].ce = !0; J[r].Ma && J[r].Ma.forEach(function (P, B) { R[n].h = R[n].h.replace(new RegExp(P, "g"), z[B]) }); f(F, R[n],
                    n)
            }, set: function (r) { g(R[r]) }, na: function (r) { return p(r, h(), "s40") }, yb: function (r) { return p(r, { h: "void main(){gl_FragColor=vec4(.5,.5,.5,.5);}", i: [], precision: "highp" }, "s41") }, Fd: function (r) { return "undefined" === typeof R[r] ? !1 : R[r].nb }, M: function () { -1 !== l && (l = -1, e.ka.forEach(function (r) { 0 !== r && F.disableVertexAttribArray(r) })) }, Ab: function () { var r = 0; e.ka.forEach(function (n, z) { z = e.ja[z]; F.vertexAttribPointer(n, z, F.FLOAT, !1, e.Gb, r); r += 4 * z }) }, df: function () { F.enableVertexAttribArray(0) }, Na: function () { M.Oa(F) },
            Oa: function (r) { r.vertexAttribPointer(e.ka[0], 2, r.FLOAT, !1, 8, 0) }, Jf: function (r, n) { F.uniform1i(e.u[r], n) }, K: function (r, n) { F.uniform1f(e.u[r], n) }, oa: function (r, n, z) { F.uniform2f(e.u[r], n, z) }, Kf: function (r, n) { F.uniform2fv(e.u[r], n) }, Wc: function (r, n) { F.uniform3fv(e.u[r], n) }, Lf: function (r, n, z, P) { F.uniform3f(e.u[r], n, z, P) }, Mf: function (r, n, z, P, B) { F.uniform4f(e.u[r], n, z, P, B) }, zb: function (r, n) { F.uniform4fv(e.u[r], n) }, Nf: function (r, n) { F.uniformMatrix2fv(e.u[r], !1, n) }, Of: function (r, n) {
                F.uniformMatrix3fv(e.u[r],
                    !1, n)
            }, Pf: function (r, n) { F.uniformMatrix4fv(e.u[r], !1, n) }, H: function (r, n) {
                M.set(r); n.forEach(function (z) {
                    switch (z.type) {
                        case "4f": F.uniform4fv(e.u[z.name], z.value); break; case "3f": F.uniform3fv(e.u[z.name], z.value); break; case "2f": F.uniform2fv(e.u[z.name], z.value); break; case "1f": F.uniform1f(e.u[z.name], z.value); break; case "1i": F.uniform1i(e.u[z.name], z.value); break; case "mat2": F.uniformMatrix2fv(e.u[z.name], !1, z.value); break; case "mat3": F.uniformMatrix3fv(e.u[z.name], !1, z.value); break; case "mat4": F.uniformMatrix4fv(e.u[z.name],
                            !1, z.value)
                    }
                })
            }, qf: function () { return "lowp" }, m: function () { F.disableVertexAttribArray(0); M.M(); for (var r in R) { var n = R[r]; n.nb && (n.nb = !1, F.deleteProgram(n.ba)); n.ce && delete R[r] } t.forEach(function (z) { F.deleteShader(z) }); t.splice(0); v = 0; y = !1; e = null; l = -1 }
        }; return M
}(), F = null, Ua = function () {
    function a(c) { console.log("ERROR in ContextFF: ", c); return !1 } function d(c) {
        function u() { Pa.m(); Ra.reset(); I.getExtension("WEBGL_lose_context").loseContext() } if (navigator.userAgent && -1 !== navigator.userAgent.indexOf("forceWebGL1")) return !1;
        var A = document.createElement("canvas"); A.setAttribute("width", 5); A.setAttribute("height", 5); var I = null; try { I = A.getContext("webgl2", c) } catch (q) { return !1 } if (!I) return !1; f(I); Ra.Vb(I); c = Ra.ab(I); if (!c.U && !c.V) return u(), !1; c = Pa.Qb(I, c); u(); return c ? !0 : !1
    } function f(c) {
        c.clearColor(0, 0, 0, 0); c.disable(c.DEPTH_TEST); c.disable(c.BLEND); c.disable(c.DITHER); c.disable(c.STENCIL_TEST); c.disable(c.CULL_FACE); c.GENERATE_MIPMAP_HINT && c.hint(c.GENERATE_MIPMAP_HINT, c.FASTEST); c.disable(c.SAMPLE_ALPHA_TO_COVERAGE);
        c.disable(c.SAMPLE_COVERAGE); c.depthFunc(c.LEQUAL); c.clearDepth(1)
    } var g = null, p = null, h = null, t = null, l = null, e = !0, v = null, y = null, w = {
        A: function () { return g.width }, I: function () { return g.height }, Ba: function () { return g }, ff: function () { return F }, W: function () { return e }, flush: function () { F.flush() }, Jd: function () { v || (v = new Uint8Array(g.width * g.height * 4)); F.readPixels(0, 0, g.width, g.height, F.RGBA, F.UNSIGNED_BYTE, v); return v }, hf: function () { return g.toDataURL("image/jpeg") }, jf: function () {
            Ta.L(); p || (p = document.createElement("canvas"),
                h = p.getContext("2d")); p.width = g.width; p.height = g.height; for (var c = w.Jd(), u = h.createImageData(p.width, p.height), A = p.width, I = p.height, q = u.data, K = 0; K < I; ++K)for (var U = I - K - 1, Q = 0; Q < A; ++Q) { var R = 4 * (K * A + Q), J = 4 * (U * A + Q); q[R] = c[J]; q[R + 1] = c[J + 1]; q[R + 2] = c[J + 2]; q[R + 3] = c[J + 3] } h.putImageData(u, 0, 0); return p.toDataURL("image/png")
        }, gf: function (c) {
            !p && c && (p = document.createElement("canvas"), h = p.getContext("2d")); var u = c ? p : document.createElement("canvas"); u.width = g.width; u.height = g.height; (c ? h : u.getContext("2d")).drawImage(g,
                0, 0); return u
        }, s: function (c) {
            c.Ub && !c.Tb ? g = document.getElementById(c.Ub) : c.Tb && (g = c.Tb); g || (g = document.createElement("canvas")); g.width = c && void 0 !== c.width ? c.width : 512; g.height = c && void 0 !== c.height ? c.height : 512; "undefined" === typeof c && (c = {}); void 0 === c.premultipliedAlpha && (c.premultipliedAlpha = !1); void 0 === c.mb && (c.mb = !0); void 0 === c.antialias && (c.antialias = !1); if (F) e = F instanceof WebGL2RenderingContext; else {
                e = !0; var u = {
                    antialias: c.antialias, alpha: !0, preserveDrawingBuffer: !0, premultipliedAlpha: c.premultipliedAlpha,
                    stencil: !1, depth: c.mb
                }; navigator && navigator.userAgent && -1 !== navigator.userAgent.indexOf("noAntialiasing") && (u.antialias = !1); var A = d(u); !A && u.antialias && (u.antialias = !1, A = d(u)); A && (F = g.getContext("webgl2", u)); F ? e = !0 : ((F = g.getContext("webgl", u)) || (F = g.getContext("experimental-webgl", u)), e = !1)
            } if (!F) return a("WebGL1 and 2 are not enabled"); (t = F.getExtension("WEBGL_lose_context")) && c.Fc && (y = c.Fc, g.addEventListener("webglcontextlost", y, !1)); if (!Ra.s()) return a("Not enough GL capabilities"); f(F); G.s();
            L.s(); return Pa.Qb(F, Ra.Hd()) ? !0 : a("Cannot filter float textures")
        }, ue: function (c, u, A, I, q) {
            if (!Ra.pd()) return F.readPixels(c, u, A, I, F.RGBA, F.UNSIGNED_BYTE, q), Promise.resolve(); var K = F.PIXEL_PACK_BUFFER; null === l ? (l = F.createBuffer(), F.bindBuffer(K, l), F.bufferData(K, q.byteLength, F.STREAM_READ)) : F.bindBuffer(K, l); F.readPixels(c, u, A, I, F.RGBA, F.UNSIGNED_BYTE, 0); var U = F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE, 0); F.flush(); return new Promise(function (Q, R) {
                function J() {
                    switch (F.clientWaitSync(U, 0, 0)) {
                        case F.TIMEOUT_EXPIRED: return;
                        case F.WAIT_FAILED: null !== M && clearInterval(M); R(); return; default: null !== M && clearInterval(M), F.deleteSync(U), F.getBufferSubData(K, 0, q), F.bindBuffer(K, null), Q()
                    }return !0
                } var M = null; J() || (M = setInterval(J, 0))
            })
        }, m: function () { F && (Ra.m(), Pa.m()); t && y && (g.removeEventListener("webglcontextlost", y, !1), t = y = null); null !== l && (F.deleteBuffer(l), l = null); F = v = h = p = g = null }
    }; return w
}(), Oa = function () {
    function a() { null === d && ("undefined" !== typeof G ? d = G : "undefined" !== typeof JEShaders && (d = JEShaders)) } var d = null; a(); return {
        Fe: function (f) {
            d !==
            f && (d && d.M(), d = f)
        }, Ga: function () { return d.Ga() }, Na: function () { return d.Na() }, Oa: function (f) { return d.Oa(f) }, Ab: function () { return d.Ab() }, M: function () { return d.M() }, set: function (f) { return d.set(f) }, na: function (f) { a(); return d.na(f) }, yb: function (f) { a(); return d.yb(f) }, m: function () { return d.m() }
    }
}(), S = function () {
    function a(k) { F.bindTexture(F.TEXTURE_2D, k) } function d(k) {
        n[0] = k; k = z[0]; var O = k >> 16 & 32768, N = k >> 12 & 2047, m = k >> 23 & 255; return 103 > m ? O : 142 < m ? O | 31744 | ((255 == m ? 0 : 1) && k & 8388607) : 113 > m ? (N |= 2048, O | (N >>
            114 - m) + (N >> 113 - m & 1)) : O = (O | m - 112 << 10 | N >> 1) + (N & 1)
    } function f(k) { var O = new Uint16Array(k.length); k.forEach(function (N, m) { O[m] = d(N) }); return O } function g() { if (null !== P.jb) return P.jb; var k = h(f([.5, .5, .5, .5])); return null === k ? !0 : P.jb = k } function p() { if (null !== P.kb) return P.kb; var k = h(new Uint8Array([127, 127, 127, 127])); return null === k ? !0 : P.kb = k } function h(k) {
        if (!Oa.Ga() || !I) return null; var O = null, N = Math.sqrt(k.length / 4); try {
            var m = F.getError(); if ("FUCKING_BIG_ERROR" === m) return !1; O = B.instance({
                isFloat: !1,
                F: !0, array: k, width: N
            }); m = F.getError(); if (m !== F.NO_ERROR) return !1
        } catch (la) { return !1 } Ta.L(); F.viewport(0, 0, N, N); F.clearColor(0, 0, 0, 0); F.clear(F.COLOR_BUFFER_BIT); Oa.set("s0"); O.Ob(0); L.l(!0, !0); k = 4 * N * N; m = new Uint8Array(k); F.readPixels(0, 0, N, N, F.RGBA, F.UNSIGNED_BYTE, m); N = !0; for (var W = 0; W < k; ++W)N = N && 3 > Math.abs(m[W] - 127); O.remove(); Ta.T(); return N
    } var t = 0, l = null, e = 0, v = null, y = null, w = null, c = null, u = null, A = null, I = !1, q = [], K = {
        isFloat: !1, isPot: !0, isLinear: !1, isMipmap: !1, isAnisotropicFiltering: !1, isMirrorX: !1,
        isMirrorY: !1, isSrgb: !1, isKeepArray: !1, isFlipY: null, width: 0, height: 0, url: null, array: null, data: null, D: null, kc: null, be: !1, F: !1, aa: null, Ia: 4, pb: 0
    }, U = !1, Q = null, R = null, J = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]], M = !1, r = !1, n = new Float32Array(1), z = new Int32Array(n.buffer), P = { jb: null, kb: null }, B = {
        s: function () {
            I || (u = [F.RGB, null, F.RGB, F.RGBA], A = [F.RGB, null, F.RGB, F.RGBA], l = [F.TEXTURE0, F.TEXTURE1, F.TEXTURE2, F.TEXTURE3, F.TEXTURE4, F.TEXTURE5, F.TEXTURE6, F.TEXTURE7], M = "undefined" !== typeof JEContext, r = "undefined" !==
                typeof Ra, M && JEContext.Df() && l.push(F.TEXTURE8, F.TEXTURE9), v = [-1, -1, -1, -1, -1, -1, -1, -1], c = [F.UNSIGNED_BYTE, F.FLOAT, F.FLOAT], I = !0)
        }, Wd: function () { if (!y) { for (var k = new Float32Array(16384), O = 0; 16384 > O; ++O)k[O] = 2 * Math.random() - 1; y = { random: B.instance({ isFloat: !0, isPot: !0, array: k, width: 64 }), $c: B.instance({ isFloat: !1, isPot: !0, width: 1, array: new Uint8Array([0, 0, 0, 0]) }) } } B.Pe() }, vf: function () { return y.$c }, Pe: function () { c[1] = Ra.gb(F) }, De: function () { A = u = [F.RGBA, F.RGBA, F.RGBA, F.RGBA] }, Oc: function (k) {
            G.set("s1");
            Ta.L(); var O = k.A(), N = k.I(); F.viewport(0, 0, O, N); k.g(0); L.l(!1, !1)
        }, ve: function (k, O) { B.Oc(k); F.readPixels(0, 0, k.A(), k.I(), F.RGBA, F.UNSIGNED_BYTE, O) }, we: function (k, O) { B.Oc(k); return Ua.ue(0, 0, k.A(), k.I(), O) }, bc: function (k, O, N, m, W, la, ha) {
            k.activeTexture(k.TEXTURE0); var ea = k.createTexture(); k.bindTexture(k.TEXTURE_2D, ea); W = W instanceof Float32Array ? W : new Float32Array(W); k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_S, k.CLAMP_TO_EDGE); k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_T, k.CLAMP_TO_EDGE); k.texParameteri(k.TEXTURE_2D,
                k.TEXTURE_MAG_FILTER, k.NEAREST); k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MIN_FILTER, k.NEAREST); k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL, la); k.texImage2D(k.TEXTURE_2D, 0, k.RGBA, N, m, 0, k.RGBA, k.FLOAT, W); k.bindTexture(k.TEXTURE_2D, null); k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL, !1); ha && (Ta.T(), G.na(k)); k.viewport(0, 0, N, m); k.framebufferTexture2D(k.FRAMEBUFFER, k.COLOR_ATTACHMENT0, k.TEXTURE_2D, O, 0); k.bindTexture(k.TEXTURE_2D, ea); ha ? L.l(!0, !0) : L.za(k); k.deleteTexture(ea); I && (v[0] = -1, w = null, t = 0)
        }, Xa: function (k) {
            k !== t &&
            (F.activeTexture(l[k]), t = k)
        }, instance: function (k) {
            function O(C) { var T = F.getError(); if ("FUCKING_BIG_ERROR" === T) return !1; F.texImage2D(F.TEXTURE_2D, 0, ia, da, ja, C); T = F.getError(); T !== F.NO_ERROR && da !== F.RGBA && (da = F.RGBA, F.texImage2D(F.TEXTURE_2D, 0, ia, da, ja, C)); return !0 } function N() {
                if (!Wa) {
                    a(Z); pa && F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL, pa); m.isPot ? (F.texParameteri(F.TEXTURE_2D, F.TEXTURE_WRAP_S, m.isMirrorX ? F.MIRRORED_REPEAT : F.REPEAT), F.texParameteri(F.TEXTURE_2D, F.TEXTURE_WRAP_T, m.isMirrorY ? F.MIRRORED_REPEAT :
                        F.REPEAT)) : (F.texParameteri(F.TEXTURE_2D, F.TEXTURE_WRAP_S, F.CLAMP_TO_EDGE), F.texParameteri(F.TEXTURE_2D, F.TEXTURE_WRAP_T, F.CLAMP_TO_EDGE)); m.isAnisotropicFiltering && "undefined" !== typeof JESETTINGS && F.texParameterf(F.TEXTURE_2D, JEContext.lf().TEXTURE_MAX_ANISOTROPY_EXT, JESETTINGS.Te); F.texParameteri(F.TEXTURE_2D, F.TEXTURE_MAG_FILTER, m.isLinear ? F.LINEAR : F.NEAREST); m.isLinear ? F.texParameteri(F.TEXTURE_2D, F.TEXTURE_MIN_FILTER, m.isMipmap && !va ? F.NEAREST_MIPMAP_LINEAR : F.LINEAR) : F.texParameteri(F.TEXTURE_2D,
                            F.TEXTURE_MIN_FILTER, m.isMipmap && !va ? F.NEAREST_MIPMAP_NEAREST : F.NEAREST); da = u[m.Ia - 1]; ia = A[m.Ia - 1]; ja = c[la]; if (Ra.W()) { var C = Ra.Kd(); da === F.RGBA && ja === F.FLOAT ? m.isMipmap || m.isLinear ? ia = Pa.Md(F) : Ra.Rb() ? C && (ia = C) : ia = F.RGBA16F || F.RGBA : da === F.RGB && ja === F.FLOAT && C && (ia = C, da = F.RGBA) } if (m.F && !m.isFloat || m.isFloat && m.isMipmap && Pa.ge()) ia = Ra.Ld(), ja = Ra.gb(F); m.pb && (Ga = m.pb); m.isSrgb && 4 === m.Ia && (da = JEContext.tf()); if (m.D) O(m.D); else if (m.url) O(x); else if (D) {
                                C = D; try {
                                    "FUCKING_BIG_ERROR" !== F.getError() && (F.texImage2D(F.TEXTURE_2D,
                                        0, ia, H, E, 0, da, ja, C), F.getError() !== F.NO_ERROR && (F.texImage2D(F.TEXTURE_2D, 0, ia, H, E, 0, da, ja, null), F.getError() !== F.NO_ERROR && F.texImage2D(F.TEXTURE_2D, 0, F.RGBA, H, E, 0, F.RGBA, F.UNSIGNED_BYTE, null)))
                                } catch (Db) { F.texImage2D(F.TEXTURE_2D, 0, ia, H, E, 0, da, ja, null) } m.isKeepArray || (D = null)
                            } else C = F.getError(), "FUCKING_BIG_ERROR" !== C && (F.texImage2D(F.TEXTURE_2D, 0, ia, H, E, 0, da, ja, null), C = F.getError(), C !== F.NO_ERROR && (da = F.RGBA, m.F && ja !== F.FLOAT && (ja = F.FLOAT, F.texImage2D(F.TEXTURE_2D, 0, ia, H, E, 0, da, ja, null)))); if (m.isMipmap) if (!va &&
                                aa) aa.fb(), Ha = !0; else if (va) { C = Math.log2(Math.min(H, E)); za = Array(1 + C); za[0] = Z; for (var T = 1; T <= C; ++T) { var ka = Math.pow(2, T), X = H / ka; ka = E / ka; var wa = F.createTexture(); a(wa); F.texParameteri(F.TEXTURE_2D, F.TEXTURE_MIN_FILTER, F.NEAREST); F.texParameteri(F.TEXTURE_2D, F.TEXTURE_MAG_FILTER, F.NEAREST); F.texImage2D(F.TEXTURE_2D, 0, ia, X, ka, 0, da, ja, null); a(null); za[T] = wa } Ha = !0 } a(null); v[t] = -1; pa && F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL, !1); ma = !0; m.aa && aa && (m.aa(aa), m.aa = null)
                }
            } var m = Object.assign({}, K, k), W = e++; null ===
                m.isFlipY && (m.isFlipY = m.url || m.array ? !0 : !1); m.data && (m.array = "string" === typeof m.data ? Na(m.data) : m.isFloat ? new Float32Array(m.data) : new Uint8Array(m.data), m.isFlipY = !1); var la = 0, ha = m.D ? !0 : !1, ea = null, fa = null, Y = !1, xa = null; m.F = m.F || m.isFloat; m.F && (la = 1); !m.be && m.isFloat && r && !Ra.Rb() && (m.isFloat = !1); m.isFloat && (la = 2); m.isAnisotropicFiltering && M && !JEContext.yf() && (m.isAnisotropicFiltering = !1); var Z = m.kc || F.createTexture(), x = null, D = !1, H = 0, E = 0, ma = !1, Wa = !1, Ia = !1, qa = null, ta = null, Qa = null, Ba = null, ia = null, da =
                    null, ja = null, pa = m.isFlipY, nb = (k = m.F && m.isMipmap) && Pa.od(), va = k && nb ? !0 : !1, za = null, Ga = -1, Ha = !1, ya = { uc: !1, Pb: null, dc: null }; m.width && (H = m.width, E = m.height ? m.height : H); var aa = {
                        get: function () { return Z }, A: function () { return H }, I: function () { return E }, wf: function () { return m.url }, zf: function () { return m.isFloat }, Bf: function () { return m.F }, Cf: function () { return m.isLinear }, fb: function () { F.generateMipmap(F.TEXTURE_2D) }, md: function (C, T) { va ? (C || (C = aa.hc()), B.Xa(T), a(za[C]), v[T] = -1) : aa.g(T) }, hc: function () {
                            -1 === Ga &&
                            (Ga = Math.log(H) / Math.log(2)); return Ga
                        }, Gd: function (C) { if (va) { C || (C = aa.hc()); G.set("s11"); B.Xa(0); for (var T = H, ka = E, X = 1; X <= C; ++X)T /= 2, ka /= 2, G.oa("u7", .25 / T, .25 / ka), F.viewport(0, 0, T, ka), a(za[X - 1]), F.framebufferTexture2D(Ta.Da(), F.COLOR_ATTACHMENT0, F.TEXTURE_2D, za[X], 0), L.l(!1, 1 === X); v[0] = -1 } else aa.fb() }, g: function (C) { if (!ma) return !1; B.Xa(C); if (v[C] === W) return !1; a(Z); v[C] = W; return !0 }, Ob: function (C) { F.activeTexture(l[C]); t = C; a(Z); v[C] = W }, v: function () {
                            w = aa; F.framebufferTexture2D(Ta.Da(), F.COLOR_ATTACHMENT0,
                                F.TEXTURE_2D, Z, 0)
                        }, R: function () { w = aa; F.viewport(0, 0, H, E); F.framebufferTexture2D(Ta.Da(), F.COLOR_ATTACHMENT0, F.TEXTURE_2D, Z, 0) }, Fb: B.Fb, resize: function (C, T) { H = C; E = T; N() }, clone: function (C) { C = B.instance({ width: H, height: E, F: m.F, isFloat: m.isFloat, isLinear: m.isLinear, isMirrorY: m.isMirrorY, isFlipY: C ? !pa : pa, isPot: m.isPot }); Oa.set("s0"); Ta.T(); C.v(); F.viewport(0, 0, H, E); aa.g(0); L.l(!0, !0); return C }, Ge: function () { F.viewport(0, 0, H, E) }, remove: function () { F.deleteTexture(Z); Wa = !0; q.splice(q.indexOf(aa), 1); aa = null },
                        refresh: function () { aa.Ob(0); pa && F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL, !0); ha ? F.texImage2D(F.TEXTURE_2D, 0, ia, da, F.UNSIGNED_BYTE, m.D) : F.texImage2D(F.TEXTURE_2D, 0, ia, H, E, 0, da, ja, D); pa && F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL, !1) }, Sb: function () {
                            var C = H * E * 4; ta = [new Uint8Array(C), new Uint8Array(C), new Uint8Array(C), new Uint8Array(C)]; qa = [new Float32Array(ta[0].buffer), new Float32Array(ta[1].buffer), new Float32Array(ta[2].buffer), new Float32Array(ta[3].buffer)]; Qa = new Uint8Array(4 * C); Ba = new Float32Array(Qa.buffer);
                            Ia = !0
                        }, xb: function () { Ia || aa.Sb(); F.readPixels(0, 0, H, 4 * E, F.RGBA, F.UNSIGNED_BYTE, Qa); for (var C = H * E, T = 2 * C, ka = 3 * C, X = 0; X < C; ++X)qa[0][X] = Ba[X], qa[1][X] = Ba[X + C], qa[2][X] = Ba[X + T], qa[3][X] = Ba[X + ka]; return qa }, te: function () { ya.uc || (ya.Pb = new Uint8Array(H * E * 4), ya.dc = new Float32Array(ya.buffer), ya.uc = !0); F.readPixels(0, 0, H, E, F.RGBA, F.UNSIGNED_BYTE, ya.Pb); return ya.dc }, bb: function (C) {
                            Ta.L(); G.set("s12"); aa.g(0); if (C) F.viewport(0, 0, H, E), G.zb("u8", .25, .25, .25, .25), L.l(!1, !0); else for (C = 0; 4 > C; ++C)F.viewport(0, E *
                                C, H, E), G.zb("u8", J[C]), L.l(!1, 0 === C)
                        }, Tf: function (C) { var T = ja === c[0] && !p(); a(Z); pa && F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL, !0); T ? (Y || (ea = document.createElement("canvas"), ea.width = H, ea.height = E, fa = ea.getContext("2d"), xa = fa.createImageData(H, E), Y = !0), xa.data.set(C), fa.putImageData(xa, 0, 0), F.texImage2D(F.TEXTURE_2D, 0, ia, da, ja, ea)) : F.texImage2D(F.TEXTURE_2D, 0, ia, H, E, 0, da, ja, C); v[t] = W; pa && F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL, !1) }, Uf: function (C, T) {
                            a(Z); T && F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL, !0); F.texImage2D(F.TEXTURE_2D,
                                0, ia, da, ja, C); v[t] = W; T && F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL, !1)
                        }, Gf: function (C, T) {
                            var ka = H * E, X = 4 * ka; C = m.F ? C ? "RGBE" : "JSON" : "RGBA"; T && (C = T); T = Ra.W() && !1; var wa = null; switch (C) { case "RGBE": wa = "s42"; break; case "JSON": wa = T ? "s0" : "s12"; break; case "RGBA": case "RGBAARRAY": wa = "s6" }Ia || ("RGBA" === C || "RGBE" === C || "RGBAARRAY" === C ? (ta = new Uint8Array(X), Ia = !0) : "JSON" !== C || T || aa.Sb()); Ta.L(); G.set(wa); aa.g(0); X = null; if ("RGBA" === C || "RGBE" === C || "RGBAARRAY" === C) {
                                F.viewport(0, 0, H, E); L.l(!0, !0); F.readPixels(0, 0, H, E, F.RGBA,
                                    F.UNSIGNED_BYTE, ta); if ("RGBAARRAY" === C) return { data: ta }; U || (Q = document.createElement("canvas"), R = Q.getContext("2d"), U = !0); Q.width = H; Q.height = E; ka = R.createImageData(H, E); ka.data.set(ta); R.putImageData(ka, 0, 0); X = Q.toDataURL("image/png")
                            } else if ("JSON" === C) if (T) X = new Float32Array(ka), F.viewport(0, 0, H, E), L.l(!0, !0), F.readPixels(0, 0, H, E, F.RGBA, F.FLOAT, X); else {
                                for (X = 0; 4 > X; ++X)F.viewport(0, E * X, H, E), G.zb("u8", J[X]), L.l(!X, !X); aa.xb(); X = Array(ka); for (T = 0; T < ka; ++T)X[4 * T] = qa[0][T], X[4 * T + 1] = qa[1][T], X[4 * T + 2] =
                                    qa[2][T], X[4 * T + 3] = qa[3][T]
                            } return { format: C, data: X, width: H, height: E, isMirrorY: m.isMirrorY, isFlipY: "RGBA" === C ? m.isFlipY : !m.isFlipY }
                        }
                    }; m.isMipmap && !va && ma && !Ha && (aa.fb(), Ha = !0); if (m.url) a(Z), F.texImage2D(F.TEXTURE_2D, 0, F.RGBA, 1, 1, 0, F.RGBA, F.UNSIGNED_BYTE, null), x = new Image, x.af = "Anonymous", x.crossOrigin = "Anonymous", x.src = m.url, x.onload = function () { H = x.width; E = x.height; N() }; else if (m.D) {
                        var Xa = function () {
                            H = void 0 !== m.D.videoWidth ? m.D.videoWidth : m.D.width; E = void 0 !== m.D.videoHeight ? m.D.videoHeight : m.D.height;
                            H ? N() : setTimeout(Xa, 1)
                        }; Xa()
                    } else m.array ? (m.F && !m.isFloat ? m.array instanceof Uint16Array ? (D = m.array, N()) : g() ? (D = f(m.array), N()) : (N(), B.bc(F, Z, aa.A(), aa.I(), m.array, pa, !0)) : (D = m.isFloat ? m.array instanceof Float32Array ? m.array : new Float32Array(m.array) : m.array instanceof Uint8Array ? m.array : new Uint8Array(m.array), N()), m.isKeepArray || (D && D !== m.array && (D = null), delete m.array)) : m.kc ? ma = !0 : N(); aa.sf = aa.A; m.aa && ma && (m.aa(aa), m.aa = null); q.push(aa); return aa
        }, L: function (k) {
            k !== t && (F.activeTexture(l[k]), t =
                k); v[k] = -1; a(null)
        }, We: function (k) { y.random.g(k) }, Fb: function () { w = null; F.framebufferTexture2D(Ta.Da(), F.COLOR_ATTACHMENT0, F.TEXTURE_2D, null, 0) }, reset: function () { 0 !== t && F.activeTexture(l[0]); for (var k = 0; k < l.length; ++k)v[k] = -1; t = -1 }, Ff: function () { t = -1 }, Me: function () { for (var k = 0; k < l.length; ++k)B.L(k) }, ec: function () { y && (y.random.remove(), y.$c.remove()) }, Rf: function (k, O) {
            if ("RGBA" === k.format || "RGBE" === k.format) {
                var N = new Image; N.src = k.data; N.onload = function () {
                    B.instance({
                        isMirrorY: k.isMirrorY, isFlipY: k.isFlipY,
                        isFloat: !1, D: N, aa: function (m) { if ("RGBA" === k.format) O(m); else { var W = k.width, la = k.height, ha = B.instance({ isMirrorY: k.isMirrorY, isFloat: !0, width: W, height: la, isFlipY: k.isFlipY }); Ta.T(); F.viewport(0, 0, W, la); G.set("s43"); ha.v(); m.g(0); L.l(!0, !0); B.L(0); O(ha); F.flush(); setTimeout(m.remove, 50) } }
                    })
                }
            } else "JSON" === k.format ? O(B.instance({ isFloat: !0, isFlipY: k.isFlipY, width: k.width, height: k.height, array: new Float32Array(k.data) })) : O(!1)
        }, td: f, m: function () {
            w && (Ta.T(), B.Fb(), Ta.L()); B.Me(); q.slice(0).forEach(function (k) { k.remove() });
            q.splice(0); I = !1; e = 0; "undefined" !== typeof Pa && Pa.m(); y = null
        }
    }; return B
}(), Va = { instance: function (a) { var d = [S.instance(a), S.instance(a)], f = [d[1], d[0]], g = f, p = { Vc: function (h) { g[1].v(); g[0].g(h); p.Zc() }, If: function (h) { g[1].R(); g[0].g(h); p.Zc() }, Zc: function () { g = g === d ? f : d }, refresh: function () { g[0].refresh(); g[1].refresh() }, g: function (h) { g[0].g(h) }, Ve: function (h) { g[1].g(h) }, Pd: function () { return g[0] }, remove: function () { g[0].remove(); g[1].remove(); g = null } }; return p } }, L = function () {
    function a(e) {
        var v = {
            S: null,
            C: null
        }; v.S = e.createBuffer(); e.bindBuffer(e.ARRAY_BUFFER, v.S); e.bufferData(e.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), e.STATIC_DRAW); v.C = e.createBuffer(); e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, v.C); e.bufferData(e.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2]), e.STATIC_DRAW); return v
    } var d = null, f = 0, g = !1, p = [], h = -2, t = -2, l = {
        reset: function () { t = h = -2 }, s: function () { g || (d = a(F), l.Ya(), g = !0) }, instance: function (e) {
            var v = f++, y = e.C ? e.C.length : 0, w = "undefined" === typeof e.mode ? F.STATIC_DRAW : e.mode, c = F.createBuffer();
            F.bindBuffer(F.ARRAY_BUFFER, c); F.bufferData(F.ARRAY_BUFFER, e.S instanceof Float32Array ? e.S : new Float32Array(e.S), w); h = v; var u = null, A = null, I = null; if (e.C) { u = F.createBuffer(); F.bindBuffer(F.ELEMENT_ARRAY_BUFFER, u); var q = null; 65536 > e.C.length ? (q = Uint16Array, A = F.UNSIGNED_SHORT, I = 2) : (q = Uint32Array, A = F.UNSIGNED_INT, I = 4); q = e.C instanceof q ? e.C : new q(e.C); F.bufferData(F.ELEMENT_ARRAY_BUFFER, q, w); t = v } var K = {
                nd: function (U) { h !== v && (F.bindBuffer(F.ARRAY_BUFFER, c), h = v); U && Oa.Ab() }, kd: function () {
                    t !== v && (F.bindBuffer(F.ELEMENT_ARRAY_BUFFER,
                        u), t = v)
                }, bind: function (U) { K.nd(U); K.kd() }, bf: function () { F.drawElements(F.TRIANGLES, y, A, 0) }, cf: function (U, Q) { F.drawElements(F.TRIANGLES, U, A, Q * I) }, remove: function () { F.deleteBuffer(c); e.C && F.deleteBuffer(u); K = null }
            }; p.push(K); return K
        }, Ya: function () { -1 !== h && (F.bindBuffer(F.ARRAY_BUFFER, d.S), h = -1); -1 !== t && (F.bindBuffer(F.ELEMENT_ARRAY_BUFFER, d.C), t = -1) }, l: function (e, v) { e && L.Ya(); v && Oa.Na(); F.drawElements(F.TRIANGLES, 3, F.UNSIGNED_SHORT, 0) }, za: function (e) {
            e = e || F; var v = a(e); e.bindBuffer(e.ARRAY_BUFFER, v.S);
            e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, v.C); Oa.Oa(e); e.clear(e.COLOR_BUFFER_BIT); e.drawElements(e.TRIANGLES, 3, e.UNSIGNED_SHORT, 0); e.flush(); e.bindBuffer(e.ARRAY_BUFFER, null); e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null); e.deleteBuffer(v.S); e.deleteBuffer(v.C); l.reset(); g && (l.Ya(), Oa.Na())
        }, ec: function () { var e = F, v = d; e.deleteBuffer(v.S); e.deleteBuffer(v.C) }, m: function () {
            l.ec(); p.forEach(function (e) { e.remove() }); F.bindBuffer(F.ARRAY_BUFFER, null); F.bindBuffer(F.ELEMENT_ARRAY_BUFFER, null); l.reset(); g = !1; p.splice(0);
            f = 0
        }
    }; return l
}(), Ta = function () {
    var a = null, d = null, f = null, g = !1, p = [], h = { B: -2, ac: 1 }, t = {
        Ga: function () { return g }, s: function () { if (!g) { a = F.createFramebuffer(); var l = Ra.W(); d = l && F.DRAW_FRAMEBUFFER ? F.DRAW_FRAMEBUFFER : F.FRAMEBUFFER; f = l && F.READ_FRAMEBUFFER ? F.READ_FRAMEBUFFER : F.FRAMEBUFFER; g = !0 } }, mf: function () { return d }, Nd: function () { return f }, Da: function () { return F.FRAMEBUFFER }, rf: function () { return h }, ef: function () { return a }, instance: function (l) {
            void 0 === l.rc && (l.rc = !1); var e = l.ga ? l.ga : null, v = l.width, y = void 0 !==
                l.height ? l.height : l.width, w = a, c = null, u = !1, A = !1, I = 0; e && (v = v ? v : e.A(), y = y ? y : e.I()); var q = {
                    Uc: function () { u || (w = F.createFramebuffer(), u = !0, I = h.ac++) }, cd: function () { q.Uc(); q.v(); c = F.createRenderbuffer(); F.bindRenderbuffer(F.RENDERBUFFER, c); F.renderbufferStorage(F.RENDERBUFFER, F.DEPTH_COMPONENT16, v, y); F.framebufferRenderbuffer(d, F.DEPTH_ATTACHMENT, F.RENDERBUFFER, c); F.clearDepth(1) }, bind: function (K, U) { I !== h.B && (F.bindFramebuffer(d, w), h.B = I); e && e.v(); U && F.viewport(0, 0, v, y); K && F.clear(F.COLOR_BUFFER_BIT | F.DEPTH_BUFFER_BIT) },
                    Ue: function () { I !== h.B && (F.bindFramebuffer(d, w), h.B = I) }, clear: function () { F.clear(F.COLOR_BUFFER_BIT | F.DEPTH_BUFFER_BIT) }, Ze: function () { F.clear(F.COLOR_BUFFER_BIT) }, $e: function () { F.clear(F.DEPTH_BUFFER_BIT) }, Ge: function () { F.viewport(0, 0, v, y) }, v: function () { I !== h.B && (F.bindFramebuffer(d, w), h.B = I) }, rtt: function (K) { e = K; h.B !== I && (F.bindFramebuffer(F.FRAMEBUFFER, w), h.B = I); K.v() }, L: function () { F.bindFramebuffer(d, null); h.B = -1 }, resize: function (K, U) {
                        v = K; y = U; c && (F.bindRenderbuffer(F.RENDERBUFFER, c), F.renderbufferStorage(F.RENDERBUFFER,
                            F.DEPTH_COMPONENT16, v, y))
                    }, remove: function () { w === a || A || (F.bindFramebuffer(d, w), F.framebufferTexture2D(d, F.COLOR_ATTACHMENT0, F.TEXTURE_2D, null, 0), c && F.framebufferRenderbuffer(d, F.DEPTH_ATTACHMENT, F.RENDERBUFFER, null), F.bindFramebuffer(d, null), F.deleteFramebuffer(w), c && F.deleteRenderbuffer(c)); A = !0 }
                }; l.rc && q.cd(); p.push(q); return q
        }, L: function () { F.bindFramebuffer(d, null); h.B = -1 }, Ne: function () {
            F.bindFramebuffer(d, null); F.clear(F.COLOR_BUFFER_BIT | F.DEPTH_BUFFER_BIT); F.viewport(0, 0, Ra.A(), Ra.I()); h.B =
                -1
        }, reset: function () { h.B = -2 }, T: function () { 0 !== h.B && (F.bindFramebuffer(d, a), h.B = 0) }, clear: function () { F.viewport(0, 0, Ra.A(), Ra.I()); F.clear(F.COLOR_BUFFER_BIT) }, m: function () { t.L(); p.forEach(function (l) { l.remove() }); F.deleteFramebuffer(a); t.reset(); g = !1; p.splice(0); h.B = -2; h.ac = 1 }
    }; return t
}(), Ra = function () {
    function a() { f = "undefined" === typeof Ua ? JEContext : Ua; g = !0 } function d(c, u) { for (var A = 0; A < c.length; ++A) { var I = u.getExtension(c[A]); if (I) return I } return null } var f = null, g = !1, p = {
        sc: !1, Bb: null, Cb: null, vc: !1,
        ee: !1, Db: null, wc: !1, Eb: null, tc: !1, Za: null, Zd: !1, $a: null, $d: !1
    }, h = null, t = { U: !0, V: !0, eb: !0, Nc: !1 }, l = null, e = null, v = null, y = "undefined" === typeof window ? {} : window, w = {
        s: function () {
            if (g) return !0; w.reset(); g || a(); var c = F; if (!h.sc) { h.Bb = w.Yb(c); y.GL_EXT_FLOAT = h.Bb; h.vc = h.Bb ? !0 : !1; if (h.vc || w.W()) h.Cb = w.Zb(c), h.ee = h.Cb ? !0 : !1, y.GL_EXT_FLOATLINEAR = h.Cb; h.sc = !0 } if (!h.tc) { h.Db = w.ya(c); h.Db && (h.wc = !0, y.GL_EXT_HALFFLOAT = h.Db); if (h.wc || w.W()) h.Eb = w.$b(c), y.GL_EXT_HALFFLOATLINEAR = h.Eb; h.xf = h.Eb ? !0 : !1; h.tc = !0 } h.Za = w.Wb(c);
            h.Zd = h.Za ? !0 : !1; y.GL_EXT_COLORBUFFERFLOAT = h.Za; h.$a = w.Xb(c); h.$d = h.$a ? !0 : !1; y.GL_EXT_COLORBUFFERHALFFLOAT = h.$a; Ta.s(); S.s(); if (!w.yd()) return !1; L.s(); S.Wd(); return !0
        }, reset: function () { h = Object.assign({}, p); l = Object.assign({}, t) }, A: function () { g || a(); return f.A() }, I: function () { g || a(); return f.I() }, W: function () { g || a(); return f.W() }, Vb: function (c) { w.Wb(c); w.Xb(c); w.Yb(c); w.Zb(c); w.ya(c); w.$b(c) }, Wb: d.bind(null, ["EXT_color_buffer_float", "WEBGL_color_buffer_float", "OES_color_buffer_float"]), Xb: d.bind(null,
            ["EXT_color_buffer_half_float", "WEBGL_color_buffer_half_float", "OES_color_buffer_half_float"]), Yb: d.bind(null, ["OES_texture_float", "MOZ_OES_texture_float", "WEBKIT_OES_texture_float"]), Zb: d.bind(null, ["OES_texture_float_linear", "MOZ_OES_texture_float_linear", "WEBKIT_OES_texture_float_linear"]), ya: d.bind(null, ["OES_texture_half_float", "MOZ_OES_texture_half_float", "WEBKIT_OES_texture_half_float"]), $b: d.bind(null, ["OES_texture_half_float_linear", "MOZ_OES_texture_half_float_linear", "WEBKIT_OES_texture_half_float_linear"]),
        gb: function (c) { var u = w.ya(c); return u && u.HALF_FLOAT_OES ? u.HALF_FLOAT_OES : c.HALF_FLOAT || c.FLOAT }, Kd: function () { return v || F.RGBA32F || F.RGBA }, Ld: function () { return e || F.RGBA16F || F.RGBA }, Hd: function () { return l }, Rb: function () { return l.U }, Ye: function () { return l.V }, Xe: function () { return l.eb }, pd: function () { return l.Nc }, Ra: function (c, u, A) {
            function I() { c.bindTexture(c.TEXTURE_2D, null); c.bindFramebuffer(q, null); c.deleteTexture(Q); c.deleteFramebuffer(U) } var q = c.FRAMEBUFFER, K = c.NEAREST, U = c.createFramebuffer();
            c.bindFramebuffer(q, U); var Q = c.createTexture(); c.activeTexture(c.TEXTURE0); c.bindTexture(c.TEXTURE_2D, Q); c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !1); c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE); c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE); c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, K); c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, K); c.texImage2D(c.TEXTURE_2D, 0, u, 3, 3, 0, c.RGBA, A, null); c.framebufferTexture2D(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0, c.TEXTURE_2D, Q, 0);
            if (c.checkFramebufferStatus(c.READ_FRAMEBUFFER || c.FRAMEBUFFER) !== c.FRAMEBUFFER_COMPLETE) return I(), !1; Oa.yb(c); c.clearColor(0, 0, 0, 0); c.viewport(0, 0, 3, 3); c.disable(c.DEPTH_TEST); c.clear(c.COLOR_BUFFER_BIT); L.za(c); c.bindFramebuffer(q, null); Oa.na(c); c.activeTexture(c.TEXTURE0); c.bindTexture(c.TEXTURE_2D, Q); L.za(c); u = new Uint8Array(36); c.readPixels(0, 0, 3, 3, c.RGBA, c.UNSIGNED_BYTE, u); I(); for (A = 0; 36 > A; ++A)if (3 < Math.abs(u[A] - 127)) return !1; return !0
        }, ab: function (c) {
            var u = { U: !1, V: !1 }; c.disable(c.BLEND); c.clearColor(0,
                0, 0, 0); c.clear(c.COLOR_BUFFER_BIT); c.RGBA32F && w.Ra(c, c.RGBA32F, c.FLOAT) && (u.U = !0, v = c.RGBA32F); !u.U && w.Ra(c, c.RGBA, c.FLOAT) && (u.U = !0, v = c.RGBA); var A = w.gb(c); e = null; c.RGBA16F && w.Ra(c, c.RGBA16F, A) && (u.V = !0, e = c.RGBA16F); !u.V && w.Ra(c, c.RGBA, A) && (u.V = !0, e = c.RGBA); return u
        }, zd: function () { var c = Ta.instance({ width: 2 }); c.Uc(); var u = S.instance({ width: 2, isFloat: !0, Ia: 3 }); c.v(); u.v(); F.flush(); F.checkFramebufferStatus(Ta.Nd()) !== F.FRAMEBUFFER_COMPLETE ? (S.De(), l.eb = !1) : l.eb = !0; c.remove(); u.remove() }, Ad: function () {
            var c =
                !1; w.W() && (c = "PIXEL_PACK_BUFFER STREAM_READ SYNC_GPU_COMMANDS_COMPLETE WAIT_FAILED fenceSync deleteSync createBuffer".split(" ").every(function (u) { return "undefined" !== typeof F[u] })); l.Nc = c
        }, yd: function () { var c = w.ab(F); Object.assign(l, c); if (!l.U && !l.V) return !1; w.zd(); w.Ad(); return !0 }, m: function () { S.m(); Oa.m(); Ta.m(); L.m(); g = !1 }
    }; return w
}(), Pa = function () {
    function a(J, M, r, n) {
        q.texParameteri(q.TEXTURE_2D, q.TEXTURE_MIN_FILTER, n ? q.NEAREST_MIPMAP_NEAREST : q.LINEAR); var z = null; if (null !== r) try {
            z = q.getError();
            if ("FUCKING_BIG_ERROR" === z) return !1; q.texImage2D(q.TEXTURE_2D, 0, J, 4, 4, 0, q.RGBA, M, r); z = q.getError(); if (z !== q.NO_ERROR) return !1
        } catch (P) { return !1 } n && q.generateMipmap(q.TEXTURE_2D); q.clear(q.COLOR_BUFFER_BIT); L.za(q); z = q.getError(); if ("FUCKING_BIG_ERROR" === z) return !1; q.readPixels(0, 0, 2, 2, q.RGBA, q.UNSIGNED_BYTE, y); z = q.getError(); z === q.INVALID_OPERATION && "undefined" !== typeof q.PIXEL_PACK_BUFFER && (q.bindBuffer(q.PIXEL_PACK_BUFFER, null), q.readPixels(0, 0, 2, 2, q.RGBA, q.UNSIGNED_BYTE, y), z = q.getError()); if (z !==
            q.NO_ERROR) return !1; r = !0; for (n = 0; 16 > n; ++n)r = r && 4 > Math.abs(y[n] - 127); r && (e.Hc = M, e.qc = J); return r
    } function d(J, M) { return K.U && a(J, q.FLOAT, new Float32Array(w), M) ? (l = t.Jb, !0) : !1 } function f(J, M, r) {
        if (!K.V) return !1; var n = S.td(w), z = Ra.ya(q); if (z && z.HALF_FLOAT_OES && a(J, z.HALF_FLOAT_OES, n, M) || q.HALF_FLOAT && a(J, q.HALF_FLOAT, n, M)) return l = t.ha, !0; n = new Float32Array(w); if (a(J, q.FLOAT, n, M)) return l = t.ha, !0; q.bindTexture(q.TEXTURE_2D, r); q.texImage2D(q.TEXTURE_2D, 0, q.RGBA, 2, 2, 0, q.RGBA, q.UNSIGNED_BYTE, null); q.bindFramebuffer(e.wa,
            R); S.bc(q, r, 2, 2, n, !1, !1); q.bindFramebuffer(e.wa, null); q.bindTexture(q.TEXTURE_2D, r); return a(J, null, null, M) ? (l = t.ha, !0) : !1
    } function g(J, M, r) { v = !0; if (f(J, !0, r) || d(M, !0)) return !0; v = !1; return f(J, !1, r) || d(M, !1) ? !0 : !1 } function p(J) {
        if (l === t.M) {
            q = J || F; l = t.RGBA8; v = !0; Ra.Vb(q); K || (K = Ra.ab(q)); Ta.reset(); R = q.createFramebuffer(); e.wa = q.DRAW_FRAMEBUFFER || q.FRAMEBUFFER; q.bindFramebuffer(e.wa, null); q.clearColor(0, 0, 0, 0); q.viewport(0, 0, 2, 2); G.M(); U = G.na(q); J = q.createTexture(); q.activeTexture(q.TEXTURE0); q.bindTexture(q.TEXTURE_2D,
                J); q.texParameteri(q.TEXTURE_2D, q.TEXTURE_WRAP_S, q.REPEAT); q.texParameteri(q.TEXTURE_2D, q.TEXTURE_WRAP_T, q.REPEAT); q.texParameteri(q.TEXTURE_2D, q.TEXTURE_MAG_FILTER, q.NEAREST); Q = J; var M = J = q.RGBA, r = q.RGBA16F, n = q.RGBA32F; n && (J = n); r && (M = r); if ((r || n) && g(M, J, Q)) return h(), !0; J = M = q.RGBA; if (g(M, J, Q)) return h(), !0; l = t.RGBA8; h(); return !1
        }
    } function h() { q.deleteProgram(U.ba); q.deleteTexture(Q); Q = U = null } for (var t = { M: -1, Jb: 3, ha: 2, RGBA8: 0 }, l = t.M, e = { Hc: null, qc: null, wa: null }, v = !0, y = new Uint8Array(16), w = Array(64),
        c = 0; 4 > c; ++c)for (var u = 0; 4 > u; ++u) { var A = 0 === (u + c) % 2 ? 1 : 0, I = 4 * c + u; w[4 * I] = A; w[4 * I + 1] = A; w[4 * I + 2] = A; w[4 * I + 3] = A } var q = null, K = null, U = null, Q = null, R = null; return { od: function (J) { p(J); return v }, Qb: function (J, M) { l === t.M && (typeof ("undefined" !== M) && (K = M), p(J)); return l !== t.RGBA8 }, Af: function (J) { p(J); return l === t.Jb }, ge: function (J) { p(J); return l === t.ha }, pf: function (J) { p(J); return e.Hc }, Md: function (J) { p(J); return e.qc }, m: function () { q = null; v = !0; l = t.M; K = null } }
}(), Ya = {
    instance: function (a) {
        var d = S.instance(a.alpha), f =
            S.instance(a.beta); return { Cd: function () { d.g(1); f.g(2) } }
    }
}, $a = {
    instance: function (a) {
        var d = null, f = !1, g = !1, p = null, h = !1, t = !1, l = null, e = "undefined" === typeof a.preprocessing ? !1 : a.preprocessing, v = "undefined" === typeof a.preprocessingSize ? a.size : a.preprocessingSize; a.mask && (f = !0, b && void 0 !== b.jd && (a.mask = b.jd + a.mask), d = S.instance({ isFloat: !1, url: a.mask })); var y = !1; a.customInputShader && (y = "s44", G.Lb({ name: "_", id: y, h: a.customInputShader, Qf: ["uSource"], precision: "lowp" }), G.H(y, [{ type: "1i", name: "_", value: 0 }]));
        switch (e) { case "sobel": l = "s31"; h = !0; break; case "meanNormalization": l = "s32"; h = !0; break; case "grayScale": l = "s28"; h = !1; break; case "grayScaleTilt": l = "s29"; t = !0; h = !1; break; case "rgbGrayTilt": l = "s30"; t = !0; h = !1; break; case "copy": l = y ? y : "s0"; break; case "inputLightRegulation": l = y ? y : "s28"; p = Za.instance({ pc: v, Gc: a.size, Cc: a.nBlurPass, fe: !1 }); g = !0; break; case "direct": case "none": l = !1; break; default: l = "s3" }t && G.H(l, [{ name: "u26", type: "1f", value: a.tilt }]); f && (l += "Mask"); var w = S.instance({ isFloat: !1, isPot: !1, width: a.size }),
            c = { A: function () { return v }, hb: function () { return c.A() }, Td: function () { return g ? p.ic() : w }, J: function () { Ta.T(); l && (G.set(l), h && G.K("u27", 1 / a.size), w.R(), f && d.g(1), L.l(!1, !1), w.g(0), g && p.process(w)) }, m: function () { w.remove(); f && d.remove() } }; return c
    }
}, fb = {
    instance: function (a) {
        "undefined" === typeof a.normalize && (a.normalize = !1); var d = { input: null, ua: null, lb: null, P: null, Ja: null, ub: null, vb: null }, f = null, g = [], p = [], h = !1, t = null, l = !0, e = -1, v = a.isReorganize ? a.isReorganize : !1, y = a.kernelsCount ? !0 : !1, w = a.dynPelu ? Ya.instance(a.dynPelu) :
            !1, c = w ? !0 : !1, u = { isEnabled: !1 }; a.de ? (a.sparsity = "undefined" !== typeof a.sparsity ? a.sparsity : a.La.hb(), l = !1) : "full" === a.connectivityUp && (a.sparsity = a.La.hb()); var A = { elu: "s15", elu01: "s16", relu: "s14", arctan: "s18", sigmoid: "s13", copy: "s0", softplus: "s19", dynPelu: "s17" }[a.activation], I = a.sparsity * a.sparsity, q = !1, K = a.size, U = ""; if (a.maxPooling) { switch (a.maxPooling.size) { case 2: U = "s33"; break; case 4: U = "s34" }q = !0; K /= a.maxPooling.size; d.ub = S.instance({ isFloat: !0, isPot: !1, width: K }) } var Q = void 0 !== a.le && a.le ? !0 :
                !1, R = null, J = null, M = null; if (Q) { R = "s45" + a.index.toString(); G.nc("s45", R, [((a.normalization.n - 1) / 2).toFixed(1)]); G.H(R, [{ type: "1i", name: "u1", value: 0 }, { type: "2f", name: "u7", value: [1 / a.size, 1 / a.size] }, { type: "1f", name: "u6", value: a.normalization.alpha }, { type: "1f", name: "u9", value: a.normalization.beta }, { type: "1f", name: "u31", value: a.normalization.k }]); var r = { isFloat: !0, isPot: !0, width: a.size }; J = S.instance(r); M = S.instance(r) } var n = -1, z = null; l && (d.P = S.instance({ isFloat: !0, isPot: !1, width: a.size })); d.ua = S.instance(a.bias);
        var P = {
            A: function () { return a.size }, hb: function () { return K }, fc: function () { return a.classesCount }, ld: function (B) { f.g(B) }, qe: function () { a.remap && a.remap.isEnabled && (u = { isEnabled: !0, he: S.instance({ isFloat: !1, isFlipY: !1, array: new Uint8Array(a.remap.maskTexture.data), width: a.remap.maskTexture.width, isPot: !1 }), Ha: a.remap.layers.map(function (B) { return a.parent.Qd(B) }), depth: a.remap.depth }) }, Ee: function () {
                switch (a.connectivityUp) {
                    case "direct": z = ab.instance(a.connectivity); break; case "square": z = bb.instance(a.connectivity);
                        break; case "squareFast": z = cb.instance(a.connectivity, a.activation); break; case "full": z = db.instance(a.connectivity); break; case "conv": e = a.kernelsCount, z = eb.instance(a.connectivity), v && (d.Ja = S.instance({ width: K, isFloat: !0, isFlipY: !1, isPot: !1 }))
                }if (z.fa) { var B = a.size * a.sparsity; n = Math.log(B / a.size) / Math.log(2); d.input = S.instance({ isMipmap: !0, isFloat: !0, isPot: !0, width: B, pb: n }); d.lb = S.instance({ isFloat: !0, isPot: !0, width: a.size }) }
            }, J: function (B) {
                f = B; z.fa ? (d.input.R(), y && d.ua.g(2), z.J(u), d.input.g(0), d.input.Gd(n),
                    d.lb.R(), y ? G.set("s0") : (G.set("s27"), G.K("u25", I), d.ua.g(1)), d.input.md(n, 0), L.l(!1, !1), G.set(A), Q ? J.v() : d.P.v(), d.lb.g(0), c && w.Cd(), L.l(!1, !1)) : (d.P.R(), d.ua.g(1), z.J()); Q && (G.set(R), M.v(), J.g(0), L.l(!1, !1), G.set("s46"), G.K("u6", 1), d.P.v(), M.g(1), L.l(!1, !1)); if (l) return q ? (d.ub.R(), d.P.g(0), G.set(U), G.oa("u7", 1 / a.size, 1 / a.size), L.l(!1, !1), B = d.ub) : B = d.P, B.g(0), v && (d.Ja.v(), G.set("s21"), G.oa("u12", e, K / e), L.l(!1, !1), B = d.Ja, d.Ja.g(0)), B; B = d.P; a.normalize && (G.set("gpuRawAvg" === h ? "s8" : "s7"), G.K("u4", 1 /
                        a.size), d.vb.R(), d.P.g(0), L.l(!1, !1), B = d.vb); switch (h) { case "cpuRGBA2Float": B.bb(!1); B = P.se(B); t(B); break; case "cpuMeanFloat": B.bb(!0); B = B.te(); t(B); break; case "gpuRawAvg": case "gpuRaw": B.g(0); case "none": null !== t && t(B) }return !1
            }, ud: function (B) {
                B && (h = B.wb || "none", t = B.tb || null); d.P = S.instance({ isFloat: !0, isPot: !0, isMipmap: !1, width: a.size }); B = "undefined" !== typeof a.classesCount && a.classesCount ? a.classesCount : a.size * a.size; for (var k = 0, O = 0, N = 0; k < B; ++k)g.push(O + (a.size - 1 - N) * a.size), p.push([-1, -1, -1, -1]),
                    ++O, O === a.size && (O = 0, ++N); a.normalize && (d.vb = S.instance({ isFloat: !0, isPot: !0, width: a.size }))
            }, se: function (B) { var k = B.xb(); g.forEach(function (O, N) { p[N][0] = k[0][O]; p[N][1] = k[1][O]; p[N][2] = k[2][O]; p[N][3] = k[3][O] }); return p }, m: function () { for (var B in d) { var k = d[B]; k && k.remove() } z && (z.m(), z = null) }
        }; a.La && P.Ee(a.La); return P
    }
};
function gb(a) {
    var d = null, f = null, g = null, p = 0; this.s = function (h) { this.Ce(h.Ha); g.ud({ wb: h.wb, tb: h.tb }) }; this.Qd = function (h) { return d[h] }; this.Ce = function (h) { var t = null; p = h.length; d = h.map(function (l, e) { l = Object.assign({}, l, { index: e, parent: this, La: t, de: e === p - 1 }); return t = e = 0 === e ? $a.instance(l) : fb.instance(l) }); f = d[0]; g = d[p - 1]; d.forEach(function (l, e) { 0 !== e && l.qe() }) }; this.J = function (h, t) { var l = t; d.forEach(function (e) { l = e.J(l, h) }); return l }; this.Od = function () { return f.A() }; this.Ud = function () { return g.A() };
    this.ic = function () { return g.Td() }; this.fc = function () { return g.fc() }; this.m = function () { d && (d.forEach(function (h) { h.m() }), g = f = d = null, p = 0) }; "undefined" !== typeof a && this.s(a)
}
var ab = { instance: function (a) { var d = S.instance(a.weights); return { fa: !0, Ca: function () { return 1 }, m: function () { d.remove() }, Vd: function () { return d }, J: function () { G.set("s26"); d.g(1); L.l(!1, !1) } } } }, db = {
    instance: function (a) {
        var d = a.fromLayerSize, f = S.instance(a.weights); return {
            fa: !0, Ca: function () { return d }, m: function () { f.remove() }, J: function (g) {
                if (g.isEnabled) { G.set("s24"); g.he.g(3); var p, h = Math.min(g.Ha.length, g.depth); for (p = 0; p < h; ++p)g.Ha[p].ld(4 + p) } else G.set("s23"); G.K("u16", a.toLayerSize); f.g(1); L.l(!1,
                    !1)
            }
        }
    }
}, bb = {
    instance: function (a) {
        for (var d = a.fromLayerSize, f = a.toLayerSize, g = a.toSparsity, p = g * f, h = p / d, t = d / f, l = 0, e = 0, v = 0, y = Array(g * f * g * f * 4), w = Array(g * f * g * f * 4), c = Array(d * d), u = 0; u < c.length; ++u)c[u] = 0; u = Math.floor(g / 2); for (var A = .5 / f, I = .5 / d, q = .5 / p, K = 0; K < f; ++K)for (var U = Math.round(K * t), Q = 0; Q < f; ++Q) {
            var R = Math.round(Q * t), J = K / f, M = Q / f; J += A; M += A; for (var r = 0; r < g; ++r) {
                var n = U + r - u; 0 > n && (n += d); n >= d && (n -= d); for (var z = 0; z < g; ++z) {
                    var P = l / p, B = e / p, k = R + z - u; 0 > k && (k += d); k >= d && (k -= d); var O = n / d, N = k / d; B = 1 - B - 1 / p; O += I; N +=
                        I; P += q; B += q; var m = K * g + r, W = Q * g + z; W = f * g - W - 1; m = W * f * g + m; y[4 * m] = P; y[4 * m + 1] = B; y[4 * m + 2] = O; y[4 * m + 3] = N; N = c[k * d + n]++; m = N % h; O = n * h + m; k = k * h + (N - m) / h; k = d * h - 1 - k; k = k * d * h + O; w[4 * k] = P; w[4 * k + 1] = B; w[4 * k + 2] = J; w[4 * k + 3] = M; ++l >= p && (l = 0, ++e); ++v
                }
            }
        } c = null; var la = S.instance(a.weights); delete a.weights.data; var ha = S.instance({ width: p, isFloat: !0, array: new Float32Array(w), isPot: !0 }); w = null; var ea = S.instance({ width: p, isFloat: !0, array: new Float32Array(y), isPot: !0 }); y = null; return {
            fa: !0, Ca: function () { return h }, m: function () {
                ha.remove();
                ea.remove(); la.remove()
            }, J: function () { G.set("s22"); la.g(1); ea.g(2); L.l(!1, !1) }
        }
    }
}, eb = { instance: function (a) { var d = a.kernelsCount, f = a.toSparsity, g = f * a.toLayerSize / a.fromLayerSize, p = S.instance(a.weights); return { fa: !0, Ca: function () { return g }, uf: function () { return f }, Vd: function () { return p }, m: function () { p.remove() }, J: function () { G.set("s25"); G.K("u22", d); G.K("u23", f); G.K("u16", a.toLayerSize); G.K("u24", a.fromLayerSize); p.g(1); L.l(!1, !1) } } } }, cb = {
    instance: function (a, d) {
        var f = a.fromLayerSize, g = a.toLayerSize,
        p = a.toSparsity, h = a.stride ? a.stride : 1, t = p * g / f, l = g < f, e = f / g, v = S.instance(a.weights), y = "s47" + [f.toString(), g.toString(), p.toString(), h.toString(), d].join("_"); G.Fd(y) || (a = La(d), g = [{ type: "1f", name: "u16", value: g }, { type: "1f", name: "u30", value: h }], l && g.push({ type: "1f", name: "u24", value: f }), f = [(l ? t : p).toFixed(1), a], l && f.push(e.toFixed(1)), G.nc(l ? "s39" : "s38", y, f), G.H(y, g.concat([{ type: "1i", name: "u14", value: 0 }, { type: "1i", name: "u21", value: 1 }, { type: "1i", name: "u13", value: 3 }]))); return {
            fa: !1, Ca: function () { return t },
            m: function () { v.remove() }, J: function () { G.set(y); v.g(3); L.l(!1, !1) }
        }
    }
}, Za = {
    instance: function (a) {
        var d = a.Cc ? a.Cc : 3, f = a.pc ? a.pc : 64, g = a.Gc ? a.Gc : 64, p = a.fe ? !0 : !1; a = { isFloat: !1, width: f, isPot: !1, isFlipY: !1 }; var h = S.instance(a), t = S.instance(a), l = S.instance(a), e = S.instance(a), v = S.instance({ isFloat: !0, width: g, isPot: !1, isFlipY: !1 }), y = 1 / f; return {
            process: function (w) {
                G.set("s35"); e.v(); L.l(p, !1); G.set("s36"); for (var c = 0; c < d; ++c)h.v(), G.oa("u7", y, 0), L.l(p, !1), l.v(), e.g(0), L.l(p, !1), t.v(), h.g(0), G.oa("u7", 0, y), L.l(p,
                    !1), e.v(), l.g(0), L.l(p, !1), c !== d - 1 && t.g(0); G.set("s37"); v.v(); w.g(0); t.g(1); e.g(2); L.l(p, !1); v.g(0)
            }, ic: function () { return v }
        }
    }
}; function hb(a, d) { a[d] = !0; a.setAttribute(d, "true") } function ib() { return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream } function jb() { var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/); return a && a.length && 2 < a.length ? [parseInt(a[1], 10), parseInt(a[2], 10), parseInt(a[3] || 0, 10)] : [0, 0, 0] }
function kb() { var a = navigator.userAgent.toLowerCase(); return -1 !== a.indexOf("safari") && -1 === a.indexOf("chrome") ? !0 : !1 } function lb() { return navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? !0 : !1 }
function mb(a) { if (!a) return a; var d = null; if (a.video) { var f = function (g) { return g && "object" === typeof g ? Object.assign({}, g) : g }; d = {}; "undefined" !== typeof a.video.width && (d.width = f(a.video.width)); "undefined" !== typeof a.video.height && (d.height = f(a.video.height)); "undefined" !== typeof a.video.facingMode && (d.facingMode = f(a.video.facingMode)) } d = { audio: a.audio, video: d }; "undefined" !== typeof a.deviceId && (d.deviceId = a.deviceId); return d }
function ob(a) { var d = a.video.width; a.video.width = a.video.height; a.video.height = d; return a }
function pb(a) {
    function d(c) { return [480, 576, 640, 648, 720, 768, 800, 960, 1080, 1152, 1280, 1366, 1920].sort(function (u, A) { return Math.abs(u - c) - Math.abs(A - c) }) } function f(c) { var u = mb(a); c = c(u); p.push(c); g(c) } function g(c) { if (c.video && c.video.facingMode && c.video.facingMode.exact) { var u = c.video.facingMode.exact; c = mb(c); delete c.video.facingMode.exact; c.video.facingMode.ideal = u; p.push(c) } } var p = []; if (!a || !a.video) return p; g(a); if (a.video.width && a.video.height) {
        if (a.video.width.ideal && a.video.height.ideal) {
            var h =
                d(a.video.width.ideal).slice(0, 3), t = d(a.video.height.ideal).slice(0, 3), l = {}, e = 0; for (l.$ = void 0; e < h.length; l = { $: l.$ }, ++e) { l.$ = h[e]; var v = {}, y = 0; for (v.Z = void 0; y < t.length; v = { Z: v.Z }, ++y)if (v.Z = t[y], l.$ !== a.video.width.ideal || v.Z !== a.video.height.ideal) { var w = Math.max(l.$, v.Z) / Math.min(l.$, v.Z); w < 4 / 3 - .1 || w > 16 / 9 + .1 || f(function (c, u) { return function (A) { A.video.width.ideal = c.$; A.video.height.ideal = u.Z; return A } }(l, v)) } }
        } f(function (c) { return ob(c) })
    } a.video.width && a.video.height && (a.video.width.ideal && a.video.height.ideal &&
        f(function (c) { delete c.video.width.ideal; delete c.video.height.ideal; return c }), f(function (c) { delete c.video.width; delete c.video.height; return c })); a.video.facingMode && (f(function (c) { delete c.video.facingMode; return c }), a.video.width && a.video.height && f(function (c) { ob(c); delete c.video.facingMode; return c })); p.push({ audio: a.audio, video: !0 }); return p
}
function qb(a) { try { var d = window.matchMedia("(orientation: portrait)").matches ? !0 : !1 } catch (g) { d = window.innerHeight > window.innerWidth } if (d && a && a.video) { d = a.video.width; var f = a.video.height; d && f && d.ideal && f.ideal && d.ideal > f.ideal && (a.video.height = d, a.video.width = f) } }
function rb(a) { a.volume = 0; hb(a, "muted"); if (kb()) { if (1 === a.volume) { var d = function () { a.volume = 0; window.removeEventListener("mousemove", d, !1); window.removeEventListener("touchstart", d, !1) }; window.addEventListener("mousemove", d, !1); window.addEventListener("touchstart", d, !1) } setTimeout(function () { a.volume = 0; hb(a, "muted") }, 5) } }
function sb(a, d, f, g) {
    function p(t) { h || (h = !0, f(t)) } var h = !1; navigator.mediaDevices.getUserMedia(g).then(function (t) {
        function l() {
            setTimeout(function () {
                if (a.currentTime) {
                    var e = a.videoWidth, v = a.videoHeight; if (0 === e || 0 === v) p("VIDEO_NULLSIZE"); else {
                        e && (a.style.width = e.toString() + "px"); v && (a.style.height = v.toString() + "px"); e = { qd: null, He: null, ie: null }; try { var y = t.getVideoTracks()[0]; y && (e.ie = y, e.qd = y.getCapabilities(), e.He = y.getSettings()) } catch (w) { } kb() || ib() ? a.parentNode && null !== a.parentNode ? (h || d(a, t,
                            e), setTimeout(function () { a.play() }, 100)) : (document.body.appendChild(a), rb(a), h || d(a, t, e), setTimeout(function () { a.style.transform = "scale(0.0001,0.0001)"; a.style.position = "fixed"; a.style.bottom = "0px"; a.style.right = "0px"; rb(a); setTimeout(function () { a.play() }, 100) }, 80)) : h || d(a, t, e)
                    }
                } else p("VIDEO_NOTSTARTED")
            }, 700)
        } "undefined" !== typeof a.srcObject ? a.srcObject = t : (a.src = window.URL.createObjectURL(t), a.videoStream = t); rb(a); a.addEventListener("loadeddata", function () {
            var e = a.play(); rb(a); "undefined" === typeof e ?
                l() : e.then(function () { l() }).catch(function () { p("VIDEO_PLAYPROMISEREJECTED") })
        }, !1)
    }).catch(function (t) { p(t) })
}
function tb(a, d, f) {
    var g = lb() ? document.createElement("video") : !1; if (g) if (lb()) {
        if (f && f.video) { if (ib()) { var p = jb(); 0 !== p[0] && (12 > p[0] || 12 === p[0] && 2 > p[1]) && qb(f) } f.video.width && f.video.width.ideal && (g.style.width = f.video.width.ideal + "px"); f.video.height && f.video.height.ideal && (g.style.height = f.video.height.ideal + "px") } hb(g, "autoplay"); hb(g, "playsinline"); f && f.audio ? g.volume = 0 : hb(g, "muted"); sb(g, a, function () {
            function h(l) {
                if (0 === l.length) d("INVALID_FALLBACKCONSTRAINTS"); else {
                    var e = l.shift(); sb(g, a, function () { h(l) },
                        e)
                }
            } var t = pb(f); h(t)
        }, f)
    } else d && d("MEDIASTREAMAPI_NOTFOUND"); else d && d("VIDEO_NOTPROVIDED")
}
var ub = function () {
    var a = { n: 5, qb: 1, Ac: 0, Aa: [30, 45], xa: [2, 200], k: .7, Oe: 200, pe: .05 }, d = -1, f = null, g = -1, p = -1, h = 0, t = -1, l = -1, e = 0, v = 0, y = a.xa[1], w = {
        Rd: function () { switch (d) { case -1: return -1; case 0: return l + f.Ac; case 1: return e } }, Id: function (c) { return Math.pow(Math.min(Math.max(t, 0), f.n - 1) / (f.n - 1), c || 1) }, s: function (c) { f = Object.assign({}, a, c); t = l = f.qb; d = 0; w.reset() }, Ke: function (c) {
            c = ("undefined" === typeof c ? Date.now() : c) || 0; var u = Math.min(Math.max(c - v, f.xa[0]), f.xa[1]); y = u; v = c; var A = -1 === g ? 0 : f.k; g = Math.min(Math.max(1E3 /
                u, 5), 120) * (1 - A) + g * A; c - p > f.Oe && 5 < ++h && (u = f.k, t = t * (1 - u) + (g < f.Aa[0] ? l - 1 : g > f.Aa[1] ? l + 1 : l) * u, Math.abs(t - l) > 1 - f.pe && (u = Math.min(Math.max(Math.round(t), 0), f.n - 1), u !== l && (t = l = u, g = (f.Aa[1] - f.Aa[0]) / 2)), p = c)
        }, Hf: function (c) { e = c; d = 1 }, Sf: function () { d = 0; w.reset() }, reset: function () { y = a.xa[1]; p = g = -1; h = 0 }, kf: function () { return y }
    }; return w
}(), vb = function () {
    var a = { Ec: 4, Ka: [1.5, 1.5, 2], ca: [.1, .1, .1], Qc: 1, Hb: -1, ib: -1, Je: 2, oe: 1, Sc: !0, Dd: .8 }, d = null, f = [], g = 0, p = [.5, .5, 1]; return {
        s: function (h) {
            d = Object.assign({}, a, h); f.splice(0);
            h = d.Ka[0] * d.ca[0]; var t = d.Ka[1] * d.ca[1], l = 1 / (1 + d.Ka[2] * d.ca[2]), e = d.Qc * Math.min(d.Hb, d.ib), v = e / d.Hb; e /= d.ib; var y = .5 * d.Dd; y *= y; for (var w = 0; w < d.Ec; ++w) { var c = Math.pow(l, w), u = v * c, A = e * c; c = u * h; var I = A * t, q = u / 2; A /= 2; for (var K = 1 + (1 - q - q) / c, U = 1 + (1 - A - A) / I, Q = 0; Q < U; ++Q)for (var R = A + Q * I, J = R - .5, M = 0; M < K; ++M) { var r = q + M * c, n = r - .5; n * n + J * J > y || f.push([r, R, u * d.oe]) } } d.Sc && f.sort(function (z, P) { var B = z[0] - .5; z = z[1] - .5; var k = P[0] - .5; P = P[1] - .5; return B * B + z * z - (k * k + P * P) })
        }, get: function () {
            var h = f.length; if (0 === h) return p; g >= h &&
                (g = 0); var t = f[Math.floor(g)]; g = (g + 1 / d.Je) % h; return t
        }
    }
}(), wb = function () { var a = 0, d = null, f = null, g = null, p = null; return { s: function (h, t) { a = h.length; d = t; f = h; g = new Float32Array(a); p = new Float32Array(a) }, Sd: function () { return p }, Ie: function (h, t, l) { h.forEach(function (e, v) { var y = Math.min(1, f[v] * l * (t + .33 * (1 - t))); e = y * e + (1 - y) * g[v]; g[v] = e; p[v] = d[v](e) }) } } }(), V = { VERSION: "1.2.1", da: [], Va: !1, Wa: !1, Ua: !1, Kb: !1, sa: !0, ra: !1, ready: !1, initialized: !1 }, xb = {
    facingMode: "user", idealWidth: 800, idealHeight: 600, minWidth: 240, maxWidth: 1280,
    minHeight: 240, maxHeight: 1280
}, b = {
    neuralNetworkPath: "jeelizFaceTransferNNC.json", Ib: "../../", gd: 0, width: 512, height: 512, Le: 55, Rc: [.6, 5.8], ca: [.06, .08, .15], Be: .6, ze: 2, Ae: [2, 2, 3], threshold: 1.1, fd: [.03, 1], Se: 20, Yd: !1, Ta: [2, 7], G: { lc: [3, 7], quality: [0, 6], position: [0, 7], rotation: [5, 7] }, Dc: 11, Bc: 1, je: 1, Mb: [.1, .01], xe: [.4, -.7, -.4], ye: [.3, 0, 0], Bd: !1, hd: .001, Nb: [Math.PI / 10, Math.PI / 6], Jc: [.1, .4], Kc: [.009, .02], Lc: [.02, .04], rb: 5, mc: .05, ed: [.2, .2, .15, .15, .15, .15,
        .2, .2, .15, .15, .2], ke: [Fa.bind(null, .05, .7), Fa.bind(null, .05, .7), Fa.bind(null, 0, .4), Fa.bind(null, 0, .4), Fa.bind(null, 0, .6), Fa.bind(null, 0, .6), Ja.bind(null, .05, .5), Fa.bind(null, .2, .6), Ka.bind(null, .7, .8, 2), Ka.bind(null, .7, .8, 2), Fa.bind(null, .15, .5)]
}; V.get_nMorphs = function () { return b.Dc }; var yb = null, zb = null, Ab = null, Bb = [];
function Cb() {
    function a() { 1 === ++la && (wb.s(b.ed, b.ke), d(), V.ready = !0, V.da.forEach(function (x) { x() }), V.da.splice(0, V.da.length), f(), la = 0) } function d() {
        M = Da(); r = new Uint8Array(U * U * 4); V.get_morphTargetInfluences = function () { return M }; V.get_morphTargetInfluencesStabilized = function () { return wb.Sd() }; V.set_morphUpdateCallback = function (x) { n = x }; V.get_rotation = function () { return B }; V.get_positionScale = function () { var x = R.Yc.Pd(); x.bb(!1); x = x.xb(); N[0] = 1 - x[1][0]; N[1] = x[2][0]; N[2] = x[3][0] * Q[0]; return N }; V.get_rotationStabilized =
            function () { return O }; V.switch_sleep = function (x) { ea !== ha.Pa || x ? ea = x ? ha.Pa : ha.cb : f() }; V.on_detect = function (x) { x(fa.O); fa.sb.push(x) }; V.is_detected = function () { return fa.O }; V.set_animateDelay = function (x) { A = x }
    } function f() { ea !== ha.cb && (ea = ha.cb, g(), h()) } function g() { I && (window.clearTimeout(I), I = null); q && (window.cancelAnimationFrame(q), q = null) } function p() { ea !== ha.Pa && (I = setTimeout(h, A)) } function h() {
        var x, D; return Aa(new ua(new na(function (H) {
            switch (H.X) {
                case 1: a: {
                    if ("VIDEO" === W.element.nodeName) {
                        var E =
                            W.element.currentTime - xa; 0 > E && (xa = W.element.currentTime); if (1E3 * E < b.Se) break a; xa += E
                    } W.ga.refresh(); E = Z.jc(); E[0] === W.va[0] && E[1] === W.va[1] || Z.ad()
                } x = ub.Rd(); D = 0; case 2: if (!(D < x)) { H.X = 4; break } E = R; var ma = K; G.set("s50"); Ta.T(); E.Ea.R(); W.ga.g(0); E.Qa.g(1); L.l(!1, !1); E.Ea.g(0); ma.J(!1, E.Ea); b.Yd ? E = S.we(z, r).then(t) : (S.ve(z, r), t(), E = Promise.resolve()); H.X = 3; return { value: E }; case 3: ++D; H.X = 2; break; case 4: E = R, Ta.T(), J.R(), G.set("s53"), E.Qa.g(0), L.l(!1, !1), E = ub.Id(), m = 3 * (1 - E) + 1 * E, ub.Ke(), V.sa && (Ta.Ne(), G.set("s49"),
                    W.ga.g(0), L.l(!1, !1), F.enable(F.BLEND), F.blendFunc(F.SRC_ALPHA, F.ONE), J.g(0), L.l(!1, !1), F.disable(F.BLEND)), F.flush(), ea !== ha.Pa && (q = window.requestAnimationFrame(p)), H.X = 0
            }
        })))
    } function t() {
        v(); if (!b.Bd && fa.O) for (var x = 0; 3 > x; ++x) { var D = e(x + b.G.rotation[0], b.G.rotation[1]); D = (2 * D - 1) * b.xe[x]; D += b.ye[x]; P[x] = D } l(); x = Date.now(); D = x - Y.yc; var H = e(b.G.quality[0], b.G.quality[1]); Y.Ic = Ja(b.Jc[0], b.Jc[1], H); H = e(b.G.position[0], b.G.position[1]); var E = e(b.G.position[0] + 1, b.G.position[1]), ma = e(b.G.position[0] +
            2, b.G.position[1]); Y.Pc = 1 - Ja(b.Lc[0], b.Lc[1], Math.sqrt(H * H + E * E + ma * ma) / D); H = Y.ea[0] - P[0]; E = Y.ea[1] - P[1]; ma = Y.ea[2] - P[2]; D = Math.sqrt(H * H + E * E + ma * ma) / D; Y.ea[0] = P[0]; Y.ea[1] = P[1]; Y.ea[2] = P[2]; Y.Mc = 1 - Ja(b.Kc[0], b.Kc[1], D); Y.N = Y.Ic * Y.Pc * Y.Mc; Y.yc = x; Y.xc[Y.ob] = Y.N; Y.ob = (Y.ob + 1) % b.rb; for (x = 0; x < b.rb; ++x)Y.N = Math.min(Y.xc[x], Y.N); wb.Ie(M, Y.N, m); n && n(Y.N, m); if (fa.O) for (x = b.Mb[1] * Y.N + b.Mb[0] * (1 - Y.N), x *= m, D = 0; 3 > D; ++D)B[D] = x * P[D] + (1 - x) * B[D], O[D] = B[D]; else x = Date.now() * b.hd, k[0] = b.Nb[0] * Math.sin(x), k[1] = b.Nb[1] *
                Math.cos(x), O[0] = k[0], O[1] = k[1], O[2] = k[2]
    } function l() { var x = e(b.G.lc[0], b.G.lc[1]); fa.Fa = b.mc * x + (1 - b.mc) * fa.Fa; .6 < fa.Fa && !fa.O ? (fa.sb.forEach(function (D) { D(!0) }), fa.O = !0) : .4 > fa.Fa && fa.O && (fa.sb.forEach(function (D) { D(!1) }), fa.O = !1) } function e(x, D) { x += U * D; return (r[4 * x] + r[4 * x + 1] + r[4 * x + 2] + r[4 * x + 3]) / 1020 } function v() { M.forEach(function (x, D) { if (fa.O) { x = (b.Bc + D) % U; var H = b.je + Math.floor((b.Bc + D) / U); H = U - 1 - H; x = e(x, H); M[D] = x } else M[D] = 0 }) } function y(x) {
        K = new gb({
            Ha: x.layers, wb: "gpuRaw", tb: function (D) {
                var H =
                    R; H.Qa.Vc(1); F.viewport(0, 0, 1, 1); G.set("s51"); G.K("u32", Y.N); G.Wc("u33", vb.get()); G.Wc("u34", b.ca); L.l(!1, !1); H.Yc.Vc(1); G.set("s52"); G.K("u32", Y.N); H.Qa.g(0); L.l(!1, !1); z = D
            }
        }); x = K.Od(); x !== u && (u = x, Z.oc(), R.Ea.resize(u, u), Z.Xc()); U = K.Ud(); a()
    } var w = -1, c = -1, u = 64, A = b.gd, I = !1, q = !1, K = null, U = 0, Q = null, R = {}, J = null, M = null, r = null, n = null, z = null, P = [0, 0, 0], B = [0, 0, 0], k = [0, 0, 0], O = [0, 0, 0], N = [0, 0, 0], m = 1, W = { Re: [.5, .5], Qe: [.5, .5], element: null, ga: null, va: [-1, -1] }, la = 0, ha = { xd: -4, me: -3, Ef: -2, Pa: -1, cb: 0 }, ea = ha.me, fa = {
        Fa: 0,
        O: !1, sb: []
    }, Y = { N: 1, Pc: 1, Ic: 1, Mc: 1, ea: [0, 0, 0], yc: Date.now(), xc: new Float32Array(b.rb), ob: 0 }, xa = 0, Z = {
        oc: function () { w = b.width; c = b.height; vb.s({ Ka: b.Ae, Ec: b.ze, Hb: w, ib: c, Qc: b.Be, ca: b.ca, Sc: !0 }); Q = [1, w / c] }, Xc: function () {
            G.H("s49", [{ type: "1i", name: "u1", value: 0 }]); G.H("s50", [{ type: "1i", name: "u1", value: 0 }, { type: "1i", name: "u35", value: 1 }, { type: "2f", name: "u36", value: Q }]); G.H("s53", [{ type: "1i", name: "u35", value: 0 }, { type: "2f", name: "u36", value: Q }, { type: "3f", name: "u37", value: [0, .5, 1] }]); G.H("s51", [{
                type: "1i", name: "u38",
                value: 0
            }, { type: "1i", name: "u35", value: 1 }, { type: "1f", name: "u39", value: b.Rc[0] }, { type: "1f", name: "u40", value: b.Rc[1] }, { type: "1f", name: "u41", value: b.Le }, { type: "1f", name: "u42", value: b.threshold }, { type: "1f", name: "u43", value: Q[0] }]); G.H("s52", [{ type: "1i", name: "u1", value: 0 }, { type: "1i", name: "u5", value: 1 }, { type: "2f", name: "u44", value: b.fd }])
        }, vd: function () {
            G.dd([{
                id: "s49", name: "_", qa: "attribute vec2 a0;uniform vec2 u45,u46;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=u46+u45*a0;}", ta: ["a0"], ja: [2],
                h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}", i: ["u1", "u45", "u46"], precision: "lowp"
            }, {
                id: "s50", name: "_", h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}", qa: "attribute vec2 a0;uniform sampler2D u35;uniform vec2 u36,u45,u46;const vec2 f=vec2(.25,.5),i=vec2(.75,.5),e=vec2(.5,.5);varying vec2 vv0;void main(){vec4 a=texture2D(u35,f);vec2 b=a.gb,c=a.a*u36,d=a0*.5+e,h=b+(d-e)*c;vv0=u46+u45*2.*(h-.5),gl_Position=vec4(a0,0.,1.);}",
                ta: ["a0"], ja: [2], i: ["u1", "u35", "u36", "u45", "u46"], precision: "lowp"
            }, {
                id: "s51", name: "_", qa: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}", h: "uniform sampler2D u38,u35;uniform vec3 u33,u34;uniform float u39,u40,u41,u42,u43,u32;varying vec2 vv0;const vec4 e=vec4(.25,.25,.25,.25);void main(){vec4 c=texture2D(u38,vec2(.4375,.9375)),d=texture2D(u38,vec2(.5625,.9375));float f=dot(c-d,e);bool g=f>u42;vec4 a=texture2D(u35,vec2(.5,.5));g?a.r=2.:a.r>u41?a.r=0.:a.r>1.9&&(a.a>u40||a.a<u39)?a.r=0.:a.r>1.9?a.r+=1.:0.;if(a.r<.9)a.gba=u33,a.r=1.;else{float h=dot(e,texture2D(u38,vec2(.0625,.9375))),i=dot(e,texture2D(u38,vec2(.1875,.9375))),j=dot(e,texture2D(u38,vec2(.3125,.9375))),b;if(a.r>1.9)b=1.-u32;else b=1.,a.r=0.;float k=a.a*u43;a.gba+=vec3(h,i,j)*u34*b*k;}gl_FragColor=a;}",
                i: "u38 u35 u33 u39 u40 u41 u42 u34 u43 u32".split(" ")
            }, { id: "s53", name: "_", h: "uniform sampler2D u35;uniform vec3 u37;uniform vec2 u36;varying vec2 vv0;const vec2 i=vec2(1.,1.);void main(){vec4 f=texture2D(u35,vec2(.25,.5));vec2 g=f.gb;float j=f.a;vec2 a=j*u36,c=g+a,d=g;d-=a/2.,c-=a/2.;vec2 k=.5*(d+c),h=step(d,vv0)*step(vv0,c);float l=h.x*h.y;vec2 b=2.*abs(k-vv0)/a;b=pow(b,3.*i),gl_FragColor=vec4(l*u37*max(b.x,b.y),1.);}", i: ["u35", "u36", "u37"], precision: "lowp" }, {
                id: "s52", name: "_", h: "uniform sampler2D u1,u5;uniform vec2 u44;uniform float u32;const vec4 f=vec4(1.,1.,1.,1.);varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0),b=texture2D(u5,vv0);float c=(1.-u32)*(u44.y-u44.x)+u44.x;gl_FragColor=mix(b,a,c*f);}",
                i: ["u1", "u5", "u44", "u32"]
            }])
        }, Xd: function (x) { var D = new Float32Array([0, .5, .5, 0]); x.Ea = S.instance({ isPot: !0, isFloat: !1, width: u }); D = { width: 1, height: 1, isFloat: !0, isPot: !1, array: D }; x.Qa = Va.instance(D); x.Yc = Va.instance(D) }, wd: function () { W.ga = S.instance({ D: W.element, isPot: !1, isFloat: !1, isFlipY: !0 }); J = S.instance({ isPot: !1, isFloat: !1, width: w, height: c }) }, s: function () { Z.wd(); Z.Xd(R); ub.s({ qb: 0, n: b.Ta[1] - b.Ta[0] + 1, Ac: b.Ta[0] }); Ab ? y(Ab) : Ca(function (x) { x = JSON.parse(x); y(x) }) }, m: function () {
            g(); K && (K.m(), K = null);
            ea = ha.xd
        }, rd: function (x) { V.Va && V.Va(); var D = { video: { facingMode: { ideal: xb.facingMode }, width: { min: xb.minWidth, max: xb.maxWidth, ideal: xb.idealWidth }, height: { min: xb.minHeight, max: xb.maxHeight, ideal: xb.idealHeight } }, audio: V.Kb }; xb.deviceId && (constraints.deviceId = xb.deviceId); tb(function (H, E) { yb = E; V.Wa && V.Wa(); x(H) }, function () { window.Sa && window.Sa("WEBCAM_UNAVAILABLE") }, D) }, zc: function (x, D) { Z.vd(); W.element = x; zb = W.element; Z.ad(); Z.oc(); Z.Xc(); Z.s(); D && D() }, jc: function () {
            var x = [-1, -1], D = W.element; "VIDEO" ===
                D.nodeName ? (x[0] = D.videoWidth, x[1] = D.videoHeight) : (x[0] = D.width, x[1] = D.height); return x
        }, ad: function () { var x = Z.jc(); W.va[0] = x[0]; W.va[1] = x[1]; Ua.Ba().width = x[0]; Ua.Ba().height = x[1]; b.width = x[0]; b.height = x[1]; var D = W.Re, H = W.Qe, E = x[1] / x[0]; x = Ua.I() / Ua.A(); E > x ? 1 >= E ? D[0] *= E : D[1] /= E : (D[0] *= E, E = 1 / x, D[0] *= E, D[1] *= E); D[1] *= x; D = [{ type: "2f", name: "u45", value: D }, { type: "2f", name: "u46", value: H }]; G.H("s50", [{ type: "1i", name: "u1", value: 0 }].concat(D)); G.H("s49", D) }
    }; Bb.push(Z); return Z
}
V.onLoad = function (a) { V.ready ? a() : V.da.push(a) }; V.set_audio = function (a) { V.Kb = a }; V.switch_displayVideo = function (a) { V.sa = a; V.ra && (V.ra.style.display = V.sa ? "block" : "none") }; V.onWebcamAsk = function (a) { V.Va = a }; V.onContextLost = function (a) { V.Ua = a }; V.onWebcamGet = function (a) { V.Wa = a }; V.destroy = function () { zb && zb.srcObject && zb.srcObject.getTracks().forEach(function (a) { a.stop() }); Bb.forEach(function (a) { a.m() }); Bb.splice(0); Ua.m(); V.switch_displayVideo(!1); V.initialized = !1; V.da.splice(0) };
V.set_size = function (a, d) { b.width = a; b.height = d }; V.get_size = function () { return { width: b.width, height: b.height } }; V.get_videoStream = function () { return yb }; V.get_video = function () { return zb }; V.get_cv = function () { return Ua.Ba() }; V.set_color = function (a) { G.H("s53", [{ type: "3f", name: "u37", value: a }]) };
V.init = function (a) {
    var d = Cb(), f = a.callbackReady ? a.callbackReady : function (p) { console.log("ERR:", p) }, g = a.callbackReady ? a.callbackReady.bind(null, !1) : !1; if ("undefined" === typeof a.canvasId) f("NO_CANVASID"); else if (document.getElementById(a.canvasId)) if (V.initialized) f("ALREADY_INITIALIZED"); else {
        V.initialized = !0; window.Sa = f ? function (p) { f(p); window.Sa = !1 } : !1; a.NNCPath && (b.Ib = a.NNCPath); "undefined" !== typeof a.NNC && (Ab = "string" === typeof a.NNC ? JSON.parse(a.NNC) : a.NNC); g && V.da.push(g); if (!Ua.s({
            Ub: a.canvasId,
            width: b.width, height: b.height, debug: !1, mb: !1, Fc: function () { V.Ua && V.Ua() }, premultipliedAlpha: !1
        })) return f("GL_INCOMPATIBLE"), !1; V.ra = Ua.Ba(); V.sa || (V.ra.style.display = "none"); L.s(); Ta.s(); G.s(); S.s(); F.depthFunc(F.LEQUAL); F.clearDepth(1); a.videoSettings && a.videoSettings.videoElement ? d.zc(a.videoSettings.videoElement, !1) : (a.videoSettings && Object.assign(xb, a.videoSettings), d.rd(function (p) { d.zc(p, !1) })); return !0
    } else f("INVALID_CANVASID")
}; const JEEFACETRANSFERAPI = V;
if (typeof (module) !== 'undefined') { module.exports = JEEFACETRANSFERAPI; }
/* eslint-enable */
