System.register([],(function(e,t){"use strict";var r,n,o,i,s,c,f,u,a;function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e){return"-"+e.toLowerCase()}return e({_:function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},h:function(e){if(a.hasOwnProperty(e))return a[e];var t=e.replace(f,p);return a[e]=u.test(t)?"-"+t:t}}),{setters:[],execute:function(){r={}.hasOwnProperty,n=function(e,t){if(!e)return t;var n={};for(var o in t)n[o]=r.call(e,o)?e[o]:t[o];return n},o=/[ -,\.\/:-@\[-\^`\{-~]/,i=/[ -,\.\/:-@\[\]\^`\{-~]/,s=/(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,(c=function e(t,r){"single"!=(r=n(r,e.options)).quotes&&"double"!=r.quotes&&(r.quotes="single");for(var c="double"==r.quotes?'"':"'",f=r.isIdentifier,u=t.charAt(0),a="",l=0,p=t.length;l<p;){var y=t.charAt(l++),d=y.charCodeAt(),g=void 0;if(d<32||d>126){if(d>=55296&&d<=56319&&l<p){var h=t.charCodeAt(l++);56320==(64512&h)?d=((1023&d)<<10)+(1023&h)+65536:l--}g="\\"+d.toString(16).toUpperCase()+" "}else g=r.escapeEverything?o.test(y)?"\\"+y:"\\"+d.toString(16).toUpperCase()+" ":/[\t\n\f\r\x0B]/.test(y)?"\\"+d.toString(16).toUpperCase()+" ":"\\"==y||!f&&('"'==y&&c==y||"'"==y&&c==y)||f&&i.test(y)?"\\"+y:y;a+=g}return f&&(/^-[-\d]/.test(a)?a="\\-"+a.slice(1):/\d/.test(u)&&(a="\\3"+u+" "+a.slice(1))),a=a.replace(s,(function(e,t,r){return t&&t.length%2?e:(t||"")+r})),!f&&r.wrap?c+a+c:a}).options={escapeEverything:!1,isIdentifier:!1,quotes:"single",wrap:!1},c.version="3.0.0",e("c",c),f=/[A-Z]/g,u=/^ms-/,a={}}}}));//# sourceMappingURL=lib.d038aa78.s.js.map
