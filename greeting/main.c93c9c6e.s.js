System.register(["../js/lib.817937da.s.js","../js/common.606cdabd.s.js"],(function(){"use strict";var e,t,n,r,o,u,i,s,c,l,a,d,f,p,g,y,m,v,h,b,x,k,T,$,_,j,S,w,z,C,E,H;return{setters:[function(n){e=n.s,t=n.v},function(e){n=e.T,r=e.B,o=e.A,u=e.P,i=e.R,s=e.C,c=e.a,l=e.b,a=e.F,d=e.s,f=e.D,p=e.i,g=e.r,y=e.E,m=e.I,v=e.c,h=e.d,b=e.e,x=e.f,k=e.g,T=e.h,$=e.j,_=e.k,j=e.l,S=e.m,w=e.n,z=e.V,C=e.o,E=e.p,H=e.q}],execute:function(){var O=function(){function t(e){this._context=e}return t.prototype.style=function(){return this._context.get(n).style(R)},t.prototype.render=function(){var e=this,t=this._context.get(r).document.createElement("span");return this._context.contentRoot.append(t),function(){var n,r;t.innerText=(r=null===(n=e.name)||void 0===n?void 0:n.trim())?"Hello, "+r+"!":"Hello!"}},e([o()],t.prototype,"name",void 0),e([u()],t.prototype,"style",null),e([i()],t.prototype,"render",null),t=e([s(["greeting-out",y]),c()],t)}();function R(e){var t=e.ref(l).read(),n=e.ref(a).read(),r=e.root.rules;return d(r.add({u:[":","host"],$:"bex:greeting-out"},n.keepThru(p)).add(n.keepThru(g)).add(t.keepThru(q)),e.style(f))}function q(e){return{display:"block",margin:e.$fontSize.div(2)+" 0 0 0"}}var A=function(){function r(e){this._context=e,e.whenConnected((function(){var n=e.get(v),r=h({name:""});b({name:n.select("input",{all:!0,deep:!0}).first(),aspects:e.get(x)}).tillOff(e).consume((function(n){var o=t(n.name,1)[0],u=t(n.aspects,1)[0],i=o&&k(o.element).convert(u,T.to(o.element)).setup($,(function(e){return e.by(_)})).setup(j,(function(e){return e.add(S())}));return r.controls.set("name",i),i&&w(e,i)}));var o=n.select(O,{deep:!0}).first().tillOff(e),u=new z("");u.sync(o,(function(e){return null==e?void 0:e.attribute("name")})),u.sync("in",r.controls.read(),(function(e){return null==e?void 0:e.get("name")})),C(e).cuts(u).cuts(r)}))}return r.prototype.style=function(){return this._context.get(n).style(B)},e([u()],r.prototype,"style",null),r=e([s(["greeting",y],{feature:{needs:[O,E]}})],r)}();function B(e){var t=e.ref(l).read(),n=e.root.rules.add([{u:[":","host"],$:"bex:greeting"},{e:"label",$:"bex:greeting"}],t.keepThru(D));return d(e.style(m),n,n.rules.add({e:"input",$:"bex:greeting"},t.keepThru(q)))}function D(e){return{display:"block",margin:0,padding:""+e.$fontSize.div(2)}}H.load(A)}}}));//# sourceMappingURL=main.c93c9c6e.s.js.map
