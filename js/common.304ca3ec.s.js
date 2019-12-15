System.register(["./lib.84fe121b.s.js","./wesib.52852bd9.s.js"],(function(e){"use strict";var t,n,r,o,i,a,u,d,l,c,s,f,g,h,p,$,b,m,v,x,y,k,C,w,S,W,z,D,F,H,N,L,_,B;return{setters:[function(e){t=e.N,n=e.ab,r=e.ac,o=e.ad,i=e.ae,a=e.P,u=e.af,d=e.ag,l=e.a5,c=e.ah,s=e.a4,f=e.G,g=e.s,h=e.ai,p=e.aj,$=e.ak,b=e.a6},function(e){m=e.P,v=e.C,x=e.T,y=e.B,k=e.N,C=e.p,w=e.i,S=e.D,W=e.a,z=e.b,D=e.F,F=e.c,H=e.d,N=e.R,L=e.S,_=e.e,B=e.f}],execute:function(){e({D:j,I:function(e){var t=e.ref(G).read.keep,n=e.root.rules;return n.add({e:"input"},t.thru(U)),n.add({e:"input",s:"[readonly]"},t.thru(q)),n.add({e:"input",s:"[disabled]"},t.thru(q)),n.add({e:"input",s:":focus"},t.thru(J)),n.add({e:"input",c:["inap-invalid","inap-touched"]},t.thru(K)),n.add({e:"input",c:["inap-missing","inap-touched"]},{outlineStyle:"dotted"}),n.add({e:"input",c:["inap-incomplete","inap-touched"]},{outlineStyle:"dotted"}),n.grab({e:"input"})},i:U,r:q});var E=e("B",new t("https://wesib.github.io/examples","bex","wesib-examples")),O=e("T",n.by({$:"settings"},{$color:new r({r:161,g:185,b:142}),$bgColor:new r({r:40,g:43,b:36}),$fontFace:"'Exo 2', sans-serif",$fontSize:o.of(1,"em"),$lineHeight:1.2,$fontWeight:"400",$linkFontWeight:"600",$layoutBreakpoint:i.of(576,"px")}));function R(e){return{"@media:sm":"(max-width: "+e.$layoutBreakpoint+")"}}function T(e){var t=e.ref(O).read.keep,n={e:"a"};return e.root.rules.add(n,t.thru(V)),e.root.rules.add({e:"a",s:":visited"},t.thru(V)),e.root.rules.add({e:"a",s:":hover"},{textDecoration:"underline"}),e.root.rules.add({e:"a",s:":active"},{textDecoration:"underline dotted"}),e.root.rules.add({e:"a",s:":focus"},{textDecoration:"underline dotted"}),e.root.rules.grab(n)}function V(e){return{color:e.$color,fontWeight:e.$linkFontWeight,textDecoration:"none"}}function j(e){var t=e.ref(O).read.keep;return e.root.add(t.thru(A)),e.root.add(t.thru(R)),a(e.root.rules.self,e.style(T))}function A(e){var t=e.$color,n=e.$fontFace,r=e.$fontSize,o=e.$lineHeight;return{color:t,font:"normal "+e.$fontWeight+" "+r+"/"+o+" "+n}}function I(e){var t=e.ref(O).read.keep,n={e:"body"},r={e:"html"};return e.root.rules.add(n,t.thru(P)),e.root.rules.add(r,{height:"100%",margin:0,padding:0}),a(e.root.rules.grab(r),e.root.rules.grab(n),e.style(j))}function P(e){return{backgroundColor:e.$bgColor,height:"100%",margin:0,padding:0}}var G=e("F",n.by({$:"settings:form"},(function(e){return u.by({global:O},e).read.keep.thru(M)})));function M(e){var t=e.global,n=t.$color,r=t.$bgColor,o=t.$fontFace,a=t.$fontSize,u=t.$lineHeight,d=t.$fontWeight;return{$color:n,$bgColor:r.hsl.set((function(e){return{l:.8*e.l}})),$roBgColor:r.hsl.set((function(e){return{l:.94*e.l}})),$fontFace:o,$fontSize:a,$lineHeight:u,$fontWeight:d,$borderColor:r,$marginV:a.div(4),$marginH:a.div(4),$paddingV:a.div(2),$paddingH:a,$borderW:i.of(1,"px")}}function U(e){var t=e.$color,n=e.$fontFace,r=e.$fontSize,o=e.$lineHeight,i=e.$fontWeight,a=e.$marginV,u=e.$marginH,d=e.$paddingV,l=e.$paddingH,c=e.$bgColor,s=e.$borderColor;return{color:t,font:"normal "+i+" "+r+"/"+o+" "+n,padding:d+" "+l,margin:a+" "+u,backgroundColor:c,border:"0 none",outline:e.$borderW+" solid "+s,boxShadow:"inset 1px 1px 2px -2px black",boxSizing:"border-box",width:"100%"}}function q(e){return{backgroundColor:e.$roBgColor}}function J(e){var t=e.$color,n=e.$borderColor;return{outlineColor:d(n,t,.5)}}function K(e){var t=e.$color,n=e.$borderW,r=e.$borderColor;return{outline:n.mul(2)+" dashed "+d(r,t,.25)}}var Q=function(){function e(e){this._theme=e.get(x);var t=e.get(y).document,n=e.get(k);e.whenOn((function(r){var o=e.element,i=t.createRange();r.whenOff((function(){return i.deleteContents()})),i.selectNodeContents(o),n.read.once((function(e){e.put(C,{fragment:{tag:o.tagName},receiver:{supply:r,receive:function(e,n){if(n.ok){i.deleteContents();var r=t.createDocumentFragment(),o=n.fragment;o&&(w(o,r),i.insertNode(r))}else!1===n.ok?(i.deleteContents(),i.insertNode(t.createTextNode("Error. "+n.error))):(i.deleteContents(),i.insertNode(t.createTextNode("Loading...")))}}})}))}))}return e.prototype.style=function(){var e=this._theme.ref(O).read.keep;return l(e.thru(X)).rules},c([m()],e.prototype,"style",null),e=c([v({name:["main",E]})],e)}();function X(e){return{padding:0,margin:"0 0 0 "+e.$fontSize.div(2)}}var Y=["nav-active",E],Z=function(){function e(e){this._theme=e.get(x);var t=e.get(S),n=s.name(Y,t),r=e.get(W),o=e.get(k);e.whenOn((function(e){var t=r.select("a",{all:!0}),i=new Map;t.track.tillOff(e)((function(t,r){r.forEach((function(e){var t=i.get(e);t&&(i.delete(e),t.off())})),t.forEach((function(t){var r=t.element,a=new f(r).on("click").instead((function(){r.classList.contains(n)||o.open(r.getAttribute("href")||"")})).needs(e);i.set(t,a)}))})),g({links:t,page:o})({supply:e,receive:function(e,t){var r,o=h(t.links,1)[0],i=ee(h(t.page,1)[0].url),a="";o.forEach((function(e){var t=e.element,o=ee(new URL(t.href));t.classList.remove(n),i.startsWith(o)&&a.length<o.length&&(r=t,a=o)})),r&&r.classList.add(n)}})}))}return e.prototype.style=function(){var e=this._theme.ref(O).read.keep,t=l(e.thru(te));return t.rules.add({e:"a"},e.thru(re)),t.rules.add({e:"a",c:Y},e.thru(oe)),t.rules},c([m()],e.prototype,"style",null),e=c([v({name:["nav",E]})],e)}();function ee(e){var t=e.pathname;return t.endsWith("/")?t:t+"/"}function te(e){return{padding:0,margin:"0 "+e.$fontSize.div(2)+" 0 0"}}function ne(e){return e.$bgColor.hsl.set((function(e){return{l:.8*e.l}}))}function re(e){var t=e.$fontSize;return{display:"block",margin:0,padding:t.div(2)+" "+t,border:0,outline:0,background:ne(e)}}function oe(e){var t=e.$fontSize,n=e.$color,r=e.$bgColor,i=o.of(4,"px");return{background:r,borderLeft:i+" solid "+n,paddingLeft:t.sub(i)}}var ie=function(){function e(e){this._context=e}return e.prototype.style=function(){return p(this,void 0,void 0,(function(){var e,t,n,r,o,i;return $(this,(function(a){switch(a.label){case 0:return[4,(e=this._context.get(z)).whenDefined(Z)];case 1:return t=a.sent().elementDef.name,[4,e.whenDefined(Q)];case 2:return n=a.sent().elementDef.name,r=this._context.get(x),o=r.ref(O).read.keep,(i=l({height:"100%",display:"flex",flexFlow:"row wrap",alignItems:"stretch",alignContent:"flex-start"}).add(o.thru(R)).rules).add({s:" ",$:"@media:sm"},{height:"auto"}),i.add({e:t},o.thru((function(e){return{flex:"0 1 200px",height:"100%",background:ne(e)}}))),i.add({e:t,$:"@media:sm"},{flex:"0 1 100%"}),i.add({e:n},o.thru((function(e){return{flex:"1 1 auto",margin:e.$fontSize}}))),[2,i]}}))}))},c([m()],e.prototype,"style",null),e=c([v({name:["container",E],feature:{needs:[Q,Z]}})],e)}(),ae=function(){function e(){}return e=c([D({needs:[ie,F,H,N,L,_]})],e)}(),ue=function(){function e(){}return e=c([D({needs:_,init:de})],e)}();function de(e){e.whenReady((function(){b(e.get(x).style(I))}))}var le=e("A",function(){function e(){}return e=c([D({needs:[ue,ae]})],e)}());e("e",B(le))}}}));
//# sourceMappingURL=common.304ca3ec.s.js.map