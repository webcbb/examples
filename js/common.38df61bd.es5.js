System.register(["./lib.0eac229e.es5.js","./wesib.a90f6dff.es5.js"],function(E){"use strict";var O,R,T,V,j,A,I,P,U,q,G,J,K,M,Q,X,Y,Z,ee,te,ne,re,oe,ie,ae,ue,de,le,se,ce,fe,ge,he,pe;return{setters:[function(e){O=e.N,R=e.ab,T=e.ac,V=e.ad,j=e.ae,A=e.O,I=e.af,P=e.ag,U=e.a4,q=e.ah,G=e.a3,J=e.D,K=e.r,M=e.ai,Q=e.aj,X=e.ak,Y=e.a5},function(e){Z=e.P,ee=e.C,te=e.T,ne=e.B,re=e.N,oe=e.p,ie=e.i,ae=e.D,ue=e.a,de=e.b,le=e.F,se=e.c,ce=e.d,fe=e.R,ge=e.S,he=e.e,pe=e.f}],execute:function(){E({D:o,I:function(e){var t=e.ref(l).read.keep,n=e.root.rules;return n.add({e:"input"},t.thru(c)),n.add({e:"input",s:"[readonly]"},t.thru(f)),n.add({e:"input",s:"[disabled]"},t.thru(f)),n.add({e:"input",s:":focus"},t.thru(g)),n.add({e:"input",c:["inap-invalid","inap-touched"]},t.thru(h)),n.add({e:"input",c:["inap-missing","inap-touched"]},{outlineStyle:"dotted"}),n.add({e:"input",c:["inap-incomplete","inap-touched"]},{outlineStyle:"dotted"}),n.grab({e:"input"})},i:c,r:f});var e=E("B",new O("https://wesib.github.io/examples","bex","wesib-examples")),u=E("T",R.by({$:"settings"},{$color:new T({r:161,g:185,b:142}),$bgColor:new T({r:40,g:43,b:36}),$fontFace:"'Exo 2', sans-serif",$fontSize:V.of(1,"em"),$lineHeight:1.2,$fontWeight:"400",$linkFontWeight:"600",$layoutBreakpoint:j.of(576,"px")}));function d(e){return{"@media:sm":"(max-width: "+e.$layoutBreakpoint+")"}}function n(e){var t=e.ref(u).read.keep,n={e:"a"};return e.root.rules.add(n,t.thru(r)),e.root.rules.add({e:"a",s:":visited"},t.thru(r)),e.root.rules.add({e:"a",s:":hover"},{textDecoration:"underline"}),e.root.rules.add({e:"a",s:":active"},{textDecoration:"underline dotted"}),e.root.rules.add({e:"a",s:":focus"},{textDecoration:"underline dotted"}),e.root.rules.grab(n)}function r(e){return{color:e.$color,fontWeight:e.$linkFontWeight,textDecoration:"none"}}function o(e){var t=e.ref(u).read.keep;return e.root.add(t.thru(i)),e.root.add(t.thru(d)),A(e.root.rules.self,e.style(n))}function i(e){var t=e.$color,n=e.$fontFace,r=e.$fontSize,o=e.$lineHeight;return{color:t,font:"normal "+e.$fontWeight+" "+r+"/"+o+" "+n}}function t(e){var t=e.ref(u).read.keep,n={e:"body"},r={e:"html"};return e.root.rules.add(n,t.thru(a)),e.root.rules.add(r,{height:"100%",margin:0,padding:0}),A(e.root.rules.grab(r),e.root.rules.grab(n),e.style(o))}function a(e){return{backgroundColor:e.$bgColor,height:"100%",margin:0,padding:0}}var l=E("F",R.by({$:"settings:form"},function(e){return I.by({global:u},e).read.keep.thru(s)}));function s(e){var t=e.global,n=t.$color,r=t.$bgColor,o=t.$fontFace,i=t.$fontSize,a=t.$lineHeight,u=t.$fontWeight;return{$color:n,$bgColor:r.hsl.set(function(e){return{l:.8*e.l}}),$roBgColor:r.hsl.set(function(e){return{l:.94*e.l}}),$fontFace:o,$fontSize:i,$lineHeight:a,$fontWeight:u,$borderColor:r,$marginV:i.div(4),$marginH:i.div(4),$paddingV:i.div(2),$paddingH:i,$borderW:j.of(1,"px")}}function c(e){var t=e.$color,n=e.$fontFace,r=e.$fontSize,o=e.$lineHeight,i=e.$fontWeight,a=e.$marginV,u=e.$marginH,d=e.$paddingV,l=e.$paddingH,s=e.$bgColor,c=e.$borderColor;return{color:t,font:"normal "+i+" "+r+"/"+o+" "+n,padding:d+" "+l,margin:a+" "+u,backgroundColor:s,border:"0 none",outline:e.$borderW+" solid "+c,boxShadow:"inset 1px 1px 2px -2px black",boxSizing:"border-box",width:"100%"}}function f(e){return{backgroundColor:e.$roBgColor}}function g(e){var t=e.$color,n=e.$borderColor;return{outlineColor:P(n,t,.5)}}function h(e){var t=e.$color,n=e.$borderW,r=e.$borderColor;return{outline:n.mul(2)+" dashed "+P(r,t,.25)}}var p=($.prototype.style=function(){var e=this._theme.ref(u).read.keep;return U(e.thru(m)).rules},q([Z()],$.prototype,"style",null),$=q([ee({name:["main",e]})],$));function $(e){this._theme=e.get(te);var i=e.get(ne).document,r=e.get(re);e.whenOn(function(t){var n=e.element,o=i.createRange();t.whenOff(function(){return o.deleteContents()}),o.selectNodeContents(n),r.read.once(function(e){e.put(oe,{fragment:{tag:n.tagName},receiver:{supply:t,receive:function(e,t){if(t.ok){o.deleteContents();var n=i.createDocumentFragment(),r=t.fragment;r&&(ie(r,n),o.insertNode(n))}else!1===t.ok?(o.deleteContents(),o.insertNode(i.createTextNode("Error. "+t.error))):(o.deleteContents(),o.insertNode(i.createTextNode("Loading...")))}}})})})}function m(e){return{padding:0,margin:"0 0 0 "+e.$fontSize.div(2)}}var b=["nav-active",e],v=(x.prototype.style=function(){var e=this._theme.ref(u).read.keep,t=U(e.thru(k));return t.rules.add({e:"a"},e.thru(w)),t.rules.add({e:"a",c:b},e.thru(S)),t.rules},q([Z()],x.prototype,"style",null),x=q([ee({name:["nav",e]})],x));function x(e){this._theme=e.get(te);var t=e.get(ae),a=G.name(b,t),r=e.get(ue),o=e.get(re);e.whenOn(function(n){var e=r.select("a",{all:!0});e.track({supply:n,receive:function(e,t){t.forEach(function(e){var t=e.element;new J(t).on("click").instead(function(){t.classList.contains(a)||o.open(t.getAttribute("href")||"")}).needs(n)})}}),K({links:e,page:o})({supply:n,receive:function(e,t){var r,n=M(t.links,1)[0],o=y(M(t.page,1)[0].url),i="";n.forEach(function(e){var t=e.element,n=y(new URL(t.href));t.classList.remove(a),o.startsWith(n)&&i.length<n.length&&(r=t,i=n)}),r&&r.classList.add(a)}})})}function y(e){var t=e.pathname;return t.endsWith("/")?t:t+"/"}function k(e){return{padding:0,margin:"0 "+e.$fontSize.div(2)+" 0 0"}}function C(e){return e.$bgColor.hsl.set(function(e){return{l:.8*e.l}})}function w(e){var t=e.$fontSize;return{display:"block",margin:0,padding:t.div(2)+" "+t,border:0,outline:0,background:C(e)}}function S(e){var t=e.$fontSize,n=e.$color,r=e.$bgColor,o=V.of(4,"px");return{background:r,borderLeft:o+" solid "+n,paddingLeft:t.sub(o)}}var W=(D.prototype.style=function(){return Q(this,void 0,void 0,function(){var t,n,r,o,i,a;return X(this,function(e){switch(e.label){case 0:return[4,(t=this._context.get(de)).whenDefined(v)];case 1:return n=e.sent().elementDef.name,[4,t.whenDefined(p)];case 2:return r=e.sent().elementDef.name,o=this._context.get(te),i=o.ref(u).read.keep,(a=U({height:"100%",display:"flex",flexFlow:"row wrap",alignItems:"stretch",alignContent:"flex-start"}).add(i.thru(d)).rules).add({s:" ",$:"@media:sm"},{height:"auto"}),a.add({e:n},i.thru(function(e){return{flex:"0 1 200px",height:"100%",background:C(e)}})),a.add({e:n,$:"@media:sm"},{flex:"0 1 100%"}),a.add({e:r},i.thru(function(e){return{flex:"1 1 auto",margin:e.$fontSize}})),[2,a]}})})},q([Z()],D.prototype,"style",null),D=q([ee({name:["container",e],feature:{needs:[p,v]}})],D));function D(e){this._context=e}var z=F=q([le({needs:[W,se,ce,fe,ge,he]})],F);function F(){}var H=N=q([le({needs:he,init:L})],N);function N(){}function L(e){e.whenReady(function(){Y(e.get(te).style(t))})}var _=E("A",B=q([le({needs:[H,z]})],B));function B(){}E("e",pe(_))}}});
//# sourceMappingURL=common.38df61bd.es5.js.map
