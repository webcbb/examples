System.register(["../js/lib.96c0b9c8.es5.js","../js/wesib.de82453a.es5.js","../js/common.4ac16f7a.es5.js"],function(){"use strict";var a,u,s,l,c,d,f,p,m,h,y,v,g,_,b,x,j,k,w,H,N,O,S,T,z,A,B,D,F,R,$,C;return{setters:[function(e){a=e.ag,u=e.a3,s=e.K,l=e.H,c=e.ai,d=e.aj,f=e.ak,p=e.al,m=e.am,h=e.an,y=e.ao,v=e.n},function(e){g=e.T,_=e.B,b=e.A,x=e.P,j=e.R,k=e.C,w=e.g,H=e.c,N=e.D,O=e.b,S=e.a},function(e){T=e.D,z=e.B,A=e.T,B=e.F,D=e.i,F=e.r,R=e.I,$=e.A,C=e.e}],execute:function(){var t=(e.prototype.style=function(){return this._context.get(g).style(T)},e.prototype.render=function(){var n=this,r=this._context.get(_).document.createElement("span");return this._context.contentRoot.append(r),function(){return r.innerText=(t=null===(e=n.name)||void 0===e?void 0:e.trim())?"Hello, "+t+"!":"Hello!";var e,t}},a([b()],e.prototype,"name",void 0),a([x()],e.prototype,"style",null),a([j()],e.prototype,"render",null),e=a([k({name:["greeting-out",z]}),w()],e));function e(e){this._context=e}var n=(r.prototype.style=function(){var e=this._theme.ref(A).read.keep,t=this._theme.ref(B).read.keep,n=u(),r=n.rules.add({e:"label"},e.thru(o));return r.rules.add({e:"input"},e.thru(i)),r.rules.add({e:this._outName},t.thru(D)).add(t.thru(F)).add(e.thru(i)),s(this._theme.style(R),n.rules)},a([x()],r.prototype,"style",null),r=a([k({name:["greeting",z],feature:{needs:[t,H,$]}})],r));function r(i){this._theme=i.get(g);var e=i.get(N);this._outName=O.of(t).name;var a=l.name(this._outName,e);i.whenOn(function(e){var t=i.get(S),n=t.select(a,{deep:!0}).first,r=c({name:""});t.select("input",{all:!0,deep:!0}).first({supply:e,receive:function(e,t){r.controls.set("name",t&&d(t.element).setup(f,function(e){return e.by(p)}).setup(m,function(e){return e.add(h())}))}});var o=new y("");o.sync(n,function(e){var t;return null===(t=e)||void 0===t?void 0:t.attribute("name")}),o.sync("in",r.controls,function(e){return e.get("name")}),e.whenOff(function(){return o.done()})})}function o(e){return{display:"block",margin:0,padding:""+e.$fontSize.div(2)}}function i(e){return{display:"block",margin:e.$fontSize.div(2)+" 0 0 0"}}C.load(n)(v).whenOff(function(e){console.error("Failed to load greet-text example",e)})}}});
//# sourceMappingURL=main.37e03d29.es5.js.map
