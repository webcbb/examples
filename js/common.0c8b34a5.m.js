import{a1 as e,a2 as t,a3 as o,a4 as n,a5 as r,J as s,a6 as a,a7 as i,N as d,_ as l,a8 as c,t as u,D as h,f as $,R as f,a9 as g}from"./lib.e2c9a0a7.m.js";import{A as p,R as b,P as m,C as y,a as x,D as v,T as k,F as _,b as C,c as w,N as S,p as z,B as F,i as W,d as L,e as H,f as N,S as D,g as E}from"./wesib.0ecb839b.m.js";const R=new e("https://wesib.github.io/examples","bex","wesib-examples"),B=t.by({$:"settings"},{$color:new o({r:161,g:185,b:142}),$bgColor:new o({r:40,g:43,b:36}),$fontFace:"'Exo 2', sans-serif",$fontSize:n.of(1,"em"),$lineHeight:1.2,$fontWeight:"400",$linkFontWeight:"600",$layoutBreakpoint:r.of(576,"px")});function O({$layoutBreakpoint:e}){return{"@media:sm":`(max-width: ${e})`}}function T(e){const t=e.ref(B).read.keep,{root:{rules:o}}=e;return s(o.add({e:"a"},t.thru(V)),o.add({e:"a",s:":visited"},t.thru(V)),o.add({e:"a",s:":hover"},{textDecoration:"underline"}),o.add({e:"a",s:":active"},{textDecoration:"underline dotted"}),o.add({e:"a",s:":focus"},{textDecoration:"underline dotted"}))}function V({$color:e,$linkFontWeight:t}){return{color:e,fontWeight:t,textDecoration:"none"}}function A(e){const t=e.ref(B).read.keep;return s(e.root.add(t.thru(j)).add(t.thru(O)),e.style(T))}function j({$color:e,$fontFace:t,$fontSize:o,$lineHeight:n,$fontWeight:r}){return{color:e,font:`normal ${r} ${o}/${n} ${t}`}}function I(e){const t=e.ref(B).read.keep,{root:{rules:o}}=e;return s(o.add({e:"html"},{height:"100%",margin:0,padding:0}),o.add({e:"body"},t.thru(J)),e.style(A))}function J({$bgColor:e}){return{backgroundColor:e,height:"100%",margin:0,padding:0}}const M=t.by({$:"settings:form"},e=>a.by({global:B},e).read.keep.thru(P));function P({global:{$color:e,$bgColor:t,$fontFace:o,$fontSize:n,$lineHeight:s,$fontWeight:a}}){return{$color:e,$bgColor:t.hsl.set(({l:e})=>({l:.8*e})),$roBgColor:t.hsl.set(({l:e})=>({l:.94*e})),$fontFace:o,$fontSize:n,$errorFontSize:n.mul(.8),$lineHeight:s,$fontWeight:a,$borderColor:t,$marginV:n.div(4),$marginH:n.div(4),$paddingV:n.div(2),$paddingH:n,$borderW:r.of(1,"px")}}let U=class{constructor(e){this._context=e,this._validity=d(),this._codes=new Set;const t=e.get(x);e.whenOn(e=>{t(e=>this.validity=e).needs(e).whenOff(()=>this.validity=d())})}get validity(){return this._validity}set validity(e){const t=this._validity;this._validity=e,this._context.updateState("validationResult",e,t)}setCode(e){this._codes=new Set(e.trim().split(/\s+/))}render(){const e=this._context.element,t=l.name(G,this._context.get(v));return()=>{c(this._codes,e=>!this.validity.has(e))?e.classList.remove(t):e.classList.add(t)}}style(){return this._context.get(k).style(K)}};i([p("code")],U.prototype,"setCode",null),i([b()],U.prototype,"render",null),i([m()],U.prototype,"style",null),U=i([y(["in-error",R],x)],U);const q="bex:in-error",G=["display-block",R];function K(e){const t=e.ref(M).read.keep,{root:{rules:o}}=e,r=n.of(4,"px");return s(o.add({u:[":","host"],$:q},t.thru(({$color:e,$errorFontSize:t})=>({display:"none",fontSize:t,padding:t.div(2),borderLeft:`${r} dotted ${e}`,paddingLeft:t.sub(r)}))),o.add({u:[":","host",{c:G}],$:q},{display:"block"}))}let Q=class{};Q=i([_({needs:[C,U,w]})],Q);let X=class{constructor(e){this._context=e,this._response=u(),this._response.on((t,o)=>e.updateState("response",t,o));const t=e.get(S);e.whenOn(o=>{t.read.once(t=>{t.put(z,{fragment:{tag:e.element.tagName},receiver:{supply:o,receive:(e,t)=>this._response.it=t}})})})}render(){const e=this._context.get(F).document,t=e.createRange();return t.selectNodeContents(this._context.element),()=>{const o=this._response.it;if(o)if(t.deleteContents(),o.ok){const n=e.createDocumentFragment(),{fragment:r}=o;r&&(W(r,n),t.insertNode(n))}else null==o.ok?t.insertNode(e.createTextNode("Loading...")):t.insertNode(e.createTextNode(`Error. ${o.error}`))}}style(){return this._context.get(k).style(Z)}};i([b()],X.prototype,"render",null),i([m()],X.prototype,"style",null),X=i([y(["main",R])],X);const Y="bex:main";function Z(e){const t=e.ref(B).read.keep,{root:{rules:o}}=e;return s(o.add({u:[":","host"],$:Y},t.thru(ee)))}function ee({$fontSize:e}){return{flex:"1 1 auto",padding:0,margin:`0 0 0 ${e.div(2)}`}}let te=class{constructor(e){this._theme=e.get(k);const t=e.get(v),o=l.name(ae,t),n=e.get(L),r=e.get(S);e.whenOn(e=>{const t=n.select("a",{all:!0}),s=new Map;t.track.tillOff(e)((t,n)=>{n.forEach(e=>{const t=s.get(e);t&&(s.delete(e),t.off())}),t.forEach(t=>{const n=t.element,a=new h(n).on("click").instead(()=>{n.classList.contains(o)||r.open(n.getAttribute("href")||"")}).needs(e);s.set(t,a)})}),$({links:t,page:r})({supply:e,receive(e,{links:[t],page:[n]}){const r=oe(n.url);let s,a="";t.forEach(e=>{const t=e.element,n=oe(new URL(t.href));t.classList.remove(o),r.startsWith(n)&&a.length<n.length&&(s=t,a=n)}),s&&s.classList.add(o)}})})}style(){return this._theme.style(re)}};function oe(e){const t=e.pathname;return t.endsWith("/")?t:t+"/"}i([m()],te.prototype,"style",null),te=i([y(["nav",R])],te);const ne="bex:nav";function re(e){const t=e.ref(B).read.keep,{root:{rules:o}}=e;return s(o.add({u:[":","host"],$:ne},t.thru(se)),o.add({u:[":","host"],$:ne},t.thru(e=>({flex:"0 1 200px",height:"100%",background:ie(e)}))),o.add({u:[":","host"],$:[ne,"@media:sm"]},{flex:"0 1 100%"}),o.add([{u:[":","host"]},{e:"a",$:ne}],t.thru(de)),o.add([{u:[":","host"]},{e:"a",c:ae,$:ne}],t.thru(le)))}function se({$fontSize:e}){return{padding:0,margin:`0 ${e.div(2)} 0 0`}}const ae=["nav-active",R];function ie({$bgColor:e}){return e.hsl.set(({l:e})=>({l:.8*e}))}function de(e){const{$fontSize:t}=e;return{display:"block",margin:0,padding:`${t.div(2)} ${t}`,border:0,outline:0,background:ie(e)}}function le({$fontSize:e,$color:t,$bgColor:o}){const r=n.of(4,"px");return{background:o,borderLeft:`${r} solid ${t}`,paddingLeft:e.sub(r)}}let ce=class{constructor(e){this._context=e}style(){return this._context.get(k).style(he)}};i([m()],ce.prototype,"style",null),ce=i([y({name:["container",R],feature:{needs:[X,te]}})],ce);const ue="bex:container";function he(e){const t=e.ref(B).read.keep,{root:{rules:o}}=e;return s(o.add({u:[":","host"],$:ue},{height:"100%",display:"flex",flexFlow:"row wrap",alignItems:"stretch",alignContent:"flex-start"}).add(t.thru(O)),o.add({u:[":","host"],$:[ue,"@media:sm"]},{height:"auto"}))}let $e=class{};$e=i([_({needs:[ce,C,H,N,D,w]})],$e);let fe=class{};fe=i([_({needs:w,init:function(e){e.whenReady(()=>{f(e.get(k).style(I))})}})],fe);let ge=class{};function pe(e){const t=e.ref(M).read.keep,{root:{rules:o}}=e;return s(o.add({e:"input"},t.thru(be)),o.add({e:"input",s:"[readonly]"},t.thru(me)),o.add({e:"input",s:"[disabled]"},t.thru(me)),o.add({e:"input",s:":focus"},t.thru(ye)),o.add({e:"input",c:["inap-invalid","inap-touched"]},t.thru(xe)),o.add({e:"input",c:["inap-missing","inap-touched"]},{outlineStyle:"dotted"}),o.add({e:"input",c:["inap-incomplete","inap-touched"]},{outlineStyle:"dotted"}))}function be({$color:e,$fontFace:t,$fontSize:o,$lineHeight:n,$fontWeight:r,$marginV:s,$marginH:a,$paddingV:i,$paddingH:d,$bgColor:l,$borderColor:c,$borderW:u}){return{color:e,font:`normal ${r} ${o}/${n} ${t}`,padding:`${i} ${d}`,margin:`${s} ${a}`,backgroundColor:l,border:"0 none",outline:`${u} solid ${c}`,boxShadow:"inset 1px 1px 2px -2px black",boxSizing:"border-box",width:"100%"}}function me({$roBgColor:e}){return{backgroundColor:e}}function ye({$color:e,$borderColor:t}){return{outlineColor:g(t,e,.5)}}function xe({$color:e,$borderW:t,$borderColor:o}){return{outline:`${t.mul(2)} dashed ${g(o,e,.25)}`}}ge=i([_({needs:[fe,Q,$e]})],ge);const ve=E(ge);export{ge as A,A as D,R as E,M as F,pe as I,B as T,ve as e,be as i,me as r};
//# sourceMappingURL=common.0c8b34a5.m.js.map
