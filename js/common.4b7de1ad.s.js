System.register(["./lib.84c74c4f.s.js","./wesib.6c2e977e.s.js"],(function(e){"use strict";var t,n,r,o,i,a,u,d,c,s,l,f,h,p,g,$,v,b,m,x,y,k,_,C,w,S,W,z,F,D,H,L,N,E,B,T,j,O,R,V,A,I;return{setters:[function(e){t=e.U,n=e.ai,r=e.aj,o=e.ak,i=e.al,a=e.W,u=e.am,d=e.ab,c=e.an,s=e.ao,l=e.Z,f=e.ap,h=e.t,p=e.D,g=e.p,$=e.aq,v=e.ar,b=e.as,m=e.ad,x=e.at},function(e){y=e.D,k=e.T,_=e.R,C=e.P,w=e.C,S=e.i,W=e.H,z=e.I,F=e.a,D=e.A,H=e.F,L=e.b,N=e.c,E=e.B,B=e.d,T=e.N,j=e.p,O=e.e,R=e.f,V=e.g,A=e.S,I=e.h}],execute:function(){e({D:G,I:function(e){var t=e.ref(X).read.keep,n=e.root.rules;return a(n.add({e:"input"},t.thru(xe)),n.add({e:"input",s:"[readonly]"},t.thru(ye)),n.add({e:"input",s:"[disabled]"},t.thru(ye)),n.add({e:"input",s:":focus"},t.thru(ke)),n.add({e:"input",c:["inap-invalid","inap-touched"]},t.thru(_e)),n.add({e:"input",c:["inap-missing","inap-touched"]},{outlineStyle:"dotted"}),n.add({e:"input",c:["inap-incomplete","inap-touched"]},{outlineStyle:"dotted"}))},i:xe,r:ye});var P=e("E",new t("https://wesib.github.io/examples","bex","wesib-examples")),U=e("T",n.by({$:"settings"},{$color:new r({r:161,g:185,b:142}),$bgColor:new r({r:40,g:43,b:36}),$fontFace:"'Exo 2', sans-serif",$fontSize:o.of(1,"em"),$lineHeight:1.2,$fontWeight:"400",$linkFontWeight:"600",$layoutBreakpoint:i.of(576,"px")}));function q(e){return{"@media:sm":"(max-width: "+e.$layoutBreakpoint+")"}}function M(e){var t=e.ref(U).read.keep,n=e.root.rules;return a(n.add({e:"a"},t.thru(Z)),n.add({e:"a",s:":visited"},t.thru(Z)),n.add({e:"a",s:":hover"},{textDecoration:"underline"}),n.add({e:"a",s:":active"},{textDecoration:"underline dotted"}),n.add({e:"a",s:":focus"},{textDecoration:"underline dotted"}))}function Z(e){return{color:e.$color,fontWeight:e.$linkFontWeight,textDecoration:"none"}}function G(e){var t=e.ref(U).read.keep;return a(e.root.add(t.thru(J)).add(t.thru(q)),e.style(M))}function J(e){var t=e.$color,n=e.$fontFace,r=e.$fontSize,o=e.$lineHeight;return{color:t,font:"normal "+e.$fontWeight+" "+r+"/"+o+" "+n}}function K(e){var t=e.ref(U).read.keep,n=e.root.rules;return a(n.add({e:"html"},{height:"100%",margin:0,padding:0}),n.add({e:"body"},t.thru(Q)),e.style(G))}function Q(e){return{backgroundColor:e.$bgColor,height:"100%",margin:0,padding:0}}var X=e("F",n.by({$:"settings:form"},(function(e){return u.by({global:U},e).read.keep.thru(Y)})));function Y(e){var t=e.global,n=t.$color,r=t.$bgColor,o=t.$fontFace,a=t.$fontSize,u=t.$lineHeight,d=t.$fontWeight;return{$color:n,$bgColor:r.hsl.set((function(e){return{l:.8*e.l}})),$roBgColor:r.hsl.set((function(e){return{l:.94*e.l}})),$fontFace:o,$fontSize:a,$errorFontSize:a.mul(.8),$lineHeight:u,$fontWeight:d,$borderColor:r,$marginV:a.div(4),$marginH:a.div(4),$paddingV:a.div(2),$paddingH:a,$borderW:i.of(1,"px")}}var ee=function(){function e(e){var t=this;this._context=e,this._validity=l(),this._codes=new Set,S(e)((function(e){return t.validity=e})),this._context.get(W).get(z).consume((function(t){var n=t.control;return n&&n.aspect(f).applyTo(e.element,e.get(F)())}))}return Object.defineProperty(e.prototype,"validity",{get:function(){return this._validity},set:function(e){var t=this._validity;this._validity=e,this._context.updateState("validity",e,t)},enumerable:!0,configurable:!0}),e.prototype.setCode=function(e){this._codes=new Set(e?e.trim().split(/\s+/):[])},e.prototype.render=function(){var e=this,t=this._context.element.classList,n=d.name(te,this._context.get(y));return function(){c(e._codes,(function(t){return e.validity.has(t)}))?t.add(n):t.remove(n)}},e.prototype.style=function(){return this._context.get(k).style(ne)},s([D("code")],e.prototype,"setCode",null),s([_()],e.prototype,"render",null),s([C()],e.prototype,"style",null),e=s([w(["in-error",P])],e)}(),te=["has-error",P];function ne(e){var t=e.ref(X).read.keep,n=e.root.rules,r=o.of(4,"px");return a(n.add({u:[":","host"],$:"bex:in-error"},t.thru((function(e){var t=e.$color,n=e.$errorFontSize;return{display:"none",fontSize:n,padding:n.div(2),borderLeft:r+" dotted "+t,paddingLeft:n.sub(r)}}))),n.add({u:[":","host",{c:te,u:[":","not",{c:"inap-has-focus"}]}],$:"bex:in-error"},{display:"block"}),n.add({u:[":","host",{c:te,u:[[":","not",{u:["code","~=","missing"]}],[":","not",{u:["code","~=","incomplete"]}]]}],$:"bex:in-error"},{display:"block"}))}var re=function(){function e(){}return e=s([H({needs:[L,ee,N]})],e)}(),oe=function(){function e(e){var t=this;this._context=e,this._response=h(),this._response.on((function(t,n){return e.updateState("response",t,n)}));var n=e.get(T);e.whenOn((function(r){n.read.once((function(n){n.put(j,{fragment:{tag:e.element.tagName},receiver:{supply:r,receive:function(e,n){return t._response.it=n}}})}))}))}return e.prototype.render=function(){var e=this,t=this._context.get(E).document,n=t.createRange();return n.selectNodeContents(this._context.element),function(){var r=e._response.it;if(r)if(n.deleteContents(),r.ok){var o=t.createDocumentFragment(),i=r.fragment;i&&(B(i,o),n.insertNode(o))}else null==r.ok?n.insertNode(t.createTextNode("Loading...")):n.insertNode(t.createTextNode("Error. "+r.error))}},s([_()],e.prototype,"render",null),e=s([w(["main",P])],e)}();function ie(e){return{flex:"1 1 auto",padding:0,margin:"0 0 0 "+e.$fontSize.div(2)}}var ae=function(){function e(e){this._theme=e.get(k);var t=e.get(y),n=d.name(se,t),r=e.get(O),o=e.get(T);e.whenOn((function(e){var t=r.select("a",{all:!0}),i=new Map;t.track.tillOff(e)((function(t,r){r.forEach((function(e){var t=i.get(e);t&&(i.delete(e),t.off())})),t.forEach((function(t){var r=t.element,a=new p(r).on("click").instead((function(){r.classList.contains(n)||o.open(r.getAttribute("href")||"")})).needs(e);i.set(t,a)}))})),g({links:t,page:o})({supply:e,receive:function(e,t){var r,o=$(t.links,1)[0],i=ue($(t.page,1)[0].url),a="";o.forEach((function(e){var t=e.element,o=ue(new URL(t.href));t.classList.remove(n),i.startsWith(o)&&a.length<o.length&&(r=t,a=o)})),r&&r.classList.add(n)}})}))}return e.prototype.style=function(){return this._theme.style(de)},s([C()],e.prototype,"style",null),e=s([w(["nav",P])],e)}();function ue(e){var t=e.pathname;return t.endsWith("/")?t:t+"/"}function de(e){var t=e.ref(U).read.keep,n=e.root.rules;return a(n.add({u:[":","host"],$:"bex:nav"},t.thru(ce)),n.add({u:[":","host"],$:"bex:nav"},t.thru((function(e){return{flex:"0 1 200px",height:"100%",background:le(e)}}))),n.add({u:[":","host"],$:["bex:nav","@media:sm"]},{flex:"0 1 100%"}),n.add([{u:[":","host"],$:"bex:nav"},{e:"a",$:"bex:nav"}],t.thru(fe)),n.add([{u:[":","host"],$:"bex:nav"},{e:"a",c:se,$:"bex:nav"}],t.thru(he)))}function ce(e){return{padding:0,margin:"0 "+e.$fontSize.div(2)+" 0 0"}}var se=["nav-active",P];function le(e){return e.$bgColor.hsl.set((function(e){return{l:.8*e.l}}))}function fe(e){var t=e.$fontSize;return{display:"block",margin:0,padding:t.div(2)+" "+t,border:0,outline:0,background:le(e)}}function he(e){var t=e.$fontSize,n=e.$color,r=e.$bgColor,i=o.of(4,"px");return{background:r,borderLeft:i+" solid "+n,paddingLeft:t.sub(i)}}var pe=function(){function e(e){this._context=e}return e.prototype.style=function(){return v(this,void 0,void 0,(function(){var e;return b(this,(function(t){switch(t.label){case 0:return[4,this._context.get(R).whenDefined(oe)];case 1:return e=t.sent().elementDef.name,[2,this._context.get(k).style(ge(e))]}}))}))},s([C()],e.prototype,"style",null),e=s([w({name:["container",P],feature:{needs:[oe,ae]}})],e)}();function ge(e){return function(t){var n=t.ref(U).read.keep,r=t.root.rules;return a(r.add({u:[":","host"],$:"bex:container"},{height:"100%",display:"flex",flexFlow:"row wrap",alignItems:"stretch",alignContent:"flex-start"}).add(n.thru(q)),r.add({u:[":","host"],$:["bex:container","@media:sm"]},{height:"auto"}),r.add([{u:[":","host"],$:"bex:container"},{e:e,$:"bex:container"}],n.thru(ie)))}}var $e=function(){function e(){}return e=s([H({needs:[pe,L,V,A,N]})],e)}(),ve=function(){function e(){}return e=s([H({needs:N,init:be})],e)}();function be(e){e.whenReady((function(){m(e.get(k).style(K))}))}var me=e("A",function(){function e(){}return e=s([H({needs:[ve,re,$e]})],e)}());function xe(e){var t=e.$color,n=e.$fontFace,r=e.$fontSize,o=e.$lineHeight,i=e.$fontWeight,a=e.$marginV,u=e.$marginH,d=e.$paddingV,c=e.$paddingH,s=e.$bgColor,l=e.$borderColor;return{color:t,font:"normal "+i+" "+r+"/"+o+" "+n,padding:d+" "+c,margin:a+" "+u,backgroundColor:s,border:"0 none",outline:e.$borderW+" solid "+l,boxShadow:"inset 1px 1px 2px -2px black",boxSizing:"border-box",width:"100%"}}function ye(e){return{backgroundColor:e.$roBgColor}}function ke(e){var t=e.$color,n=e.$borderColor;return{outlineColor:x(n,t,.5)}}function _e(e){var t=e.$color,n=e.$borderW,r=e.$borderColor;return{outline:n.mul(2)+" dashed "+x(r,t,.25)}}e("e",I(me))}}}));
//# sourceMappingURL=common.4b7de1ad.s.js.map