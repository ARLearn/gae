/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

;(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

	/*!
	 * CSSRulePlugin 3.6.1
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2021, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/
	var gsap,
	    _coreInitted,
	    _doc,
	    CSSPlugin,
	    _windowExists = function _windowExists() {
	  return typeof window !== "undefined";
	},
	    _getGSAP = function _getGSAP() {
	  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
	},
	    _checkRegister = function _checkRegister() {
	  if (!_coreInitted) {
	    _initCore();

	    if (!CSSPlugin) {
	      console.warn("Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)");
	    }
	  }

	  return _coreInitted;
	},
	    _initCore = function _initCore(core) {
	  gsap = core || _getGSAP();

	  if (_windowExists()) {
	    _doc = document;
	  }

	  if (gsap) {
	    CSSPlugin = gsap.plugins.css;

	    if (CSSPlugin) {
	      _coreInitted = 1;
	    }
	  }
	};

	var CSSRulePlugin = {
	  version: "3.6.1",
	  name: "cssRule",
	  init: function init(target, value, tween, index, targets) {
	    if (!_checkRegister() || typeof target.cssText === "undefined") {
	      return false;
	    }

	    var div = target._gsProxy = target._gsProxy || _doc.createElement("div");

	    this.ss = target;
	    this.style = div.style;
	    div.style.cssText = target.cssText;
	    CSSPlugin.prototype.init.call(this, div, value, tween, index, targets);
	  },
	  render: function render(ratio, data) {
	    var pt = data._pt,
	        style = data.style,
	        ss = data.ss,
	        i;

	    while (pt) {
	      pt.r(ratio, pt.d);
	      pt = pt._next;
	    }

	    i = style.length;

	    while (--i > -1) {
	      ss[style[i]] = style[style[i]];
	    }
	  },
	  getRule: function getRule(selector) {
	    _checkRegister();

	    var ruleProp = _doc.all ? "rules" : "cssRules",
	        styleSheets = _doc.styleSheets,
	        i = styleSheets.length,
	        pseudo = selector.charAt(0) === ":",
	        j,
	        curSS,
	        cs,
	        a;
	    selector = (pseudo ? "" : ",") + selector.split("::").join(":").toLowerCase() + ",";

	    if (pseudo) {
	      a = [];
	    }

	    while (i--) {
	      try {
	        curSS = styleSheets[i][ruleProp];

	        if (!curSS) {
	          continue;
	        }

	        j = curSS.length;
	      } catch (e) {
	        console.warn(e);
	        continue;
	      }

	      while (--j > -1) {
	        cs = curSS[j];

	        if (cs.selectorText && ("," + cs.selectorText.split("::").join(":").toLowerCase() + ",").indexOf(selector) !== -1) {
	          if (pseudo) {
	            a.push(cs.style);
	          } else {
	            return cs.style;
	          }
	        }
	      }
	    }

	    return a;
	  },
	  register: _initCore
	};
	_getGSAP() && gsap.registerPlugin(CSSRulePlugin);

	exports.CSSRulePlugin = CSSRulePlugin;
	exports.default = CSSRulePlugin;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var _doc,
      _win,
      _docElement,
      _body,
      _divContainer,
      _svgContainer,
      _identityMatrix,
      _transformProp = "transform",
      _transformOriginProp = _transformProp + "Origin",
      _hasOffsetBug,
      _setDoc = function _setDoc(element) {
    var doc = element.ownerDocument || element;

    if (!(_transformProp in element.style) && "msTransform" in element.style) {
      _transformProp = "msTransform";
      _transformOriginProp = _transformProp + "Origin";
    }

    while (doc.parentNode && (doc = doc.parentNode)) {}

    _win = window;
    _identityMatrix = new Matrix2D();

    if (doc) {
      _doc = doc;
      _docElement = doc.documentElement;
      _body = doc.body;
      var d1 = doc.createElement("div"),
          d2 = doc.createElement("div");

      _body.appendChild(d1);

      d1.appendChild(d2);
      d1.style.position = "static";
      d1.style[_transformProp] = "translate3d(0,0,1px)";
      _hasOffsetBug = d2.offsetParent !== d1;

      _body.removeChild(d1);
    }

    return doc;
  },
      _forceNonZeroScale = function _forceNonZeroScale(e) {
    var a, cache;

    while (e && e !== _body) {
      cache = e._gsap;
      cache && cache.uncache && cache.get(e, "x");

      if (cache && !cache.scaleX && !cache.scaleY && cache.renderTransform) {
        cache.scaleX = cache.scaleY = 1e-4;
        cache.renderTransform(1, cache);
        a ? a.push(cache) : a = [cache];
      }

      e = e.parentNode;
    }

    return a;
  },
      _svgTemps = [],
      _divTemps = [],
      _getDocScrollTop = function _getDocScrollTop() {
    return _win.pageYOffset || _doc.scrollTop || _docElement.scrollTop || _body.scrollTop || 0;
  },
      _getDocScrollLeft = function _getDocScrollLeft() {
    return _win.pageXOffset || _doc.scrollLeft || _docElement.scrollLeft || _body.scrollLeft || 0;
  },
      _svgOwner = function _svgOwner(element) {
    return element.ownerSVGElement || ((element.tagName + "").toLowerCase() === "svg" ? element : null);
  },
      _isFixed = function _isFixed(element) {
    if (_win.getComputedStyle(element).position === "fixed") {
      return true;
    }

    element = element.parentNode;

    if (element && element.nodeType === 1) {
      return _isFixed(element);
    }
  },
      _createSibling = function _createSibling(element, i) {
    if (element.parentNode && (_doc || _setDoc(element))) {
      var svg = _svgOwner(element),
          ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
          type = svg ? i ? "rect" : "g" : "div",
          x = i !== 2 ? 0 : 100,
          y = i === 3 ? 100 : 0,
          css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
          e = _doc.createElementNS ? _doc.createElementNS(ns.replace(/^https/, "http"), type) : _doc.createElement(type);

      if (i) {
        if (!svg) {
          if (!_divContainer) {
            _divContainer = _createSibling(element);
            _divContainer.style.cssText = css;
          }

          e.style.cssText = css + "width:0.1px;height:0.1px;top:" + y + "px;left:" + x + "px";

          _divContainer.appendChild(e);
        } else {
          _svgContainer || (_svgContainer = _createSibling(element));
          e.setAttribute("width", 0.01);
          e.setAttribute("height", 0.01);
          e.setAttribute("transform", "translate(" + x + "," + y + ")");

          _svgContainer.appendChild(e);
        }
      }

      return e;
    }

    throw "Need document and parent.";
  },
      _consolidate = function _consolidate(m) {
    var c = new Matrix2D(),
        i = 0;

    for (; i < m.numberOfItems; i++) {
      c.multiply(m.getItem(i).matrix);
    }

    return c;
  },
      _placeSiblings = function _placeSiblings(element, adjustGOffset) {
    var svg = _svgOwner(element),
        isRootSVG = element === svg,
        siblings = svg ? _svgTemps : _divTemps,
        parent = element.parentNode,
        container,
        m,
        b,
        x,
        y,
        cs;

    if (element === _win) {
      return element;
    }

    siblings.length || siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
    container = svg ? _svgContainer : _divContainer;

    if (svg) {
      b = isRootSVG ? {
        x: 0,
        y: 0
      } : element.getBBox();
      m = element.transform ? element.transform.baseVal : {};

      if (m.numberOfItems) {
        m = m.numberOfItems > 1 ? _consolidate(m) : m.getItem(0).matrix;
        x = m.a * b.x + m.c * b.y;
        y = m.b * b.x + m.d * b.y;
      } else {
        m = _identityMatrix;
        x = b.x;
        y = b.y;
      }

      if (adjustGOffset && element.tagName.toLowerCase() === "g") {
        x = y = 0;
      }

      (isRootSVG ? svg : parent).appendChild(container);
      container.setAttribute("transform", "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + (m.e + x) + "," + (m.f + y) + ")");
    } else {
      x = y = 0;

      if (_hasOffsetBug) {
        m = element.offsetParent;
        b = element;

        while (b && (b = b.parentNode) && b !== m && b.parentNode) {
          if ((_win.getComputedStyle(b)[_transformProp] + "").length > 4) {
            x = b.offsetLeft;
            y = b.offsetTop;
            b = 0;
          }
        }
      }

      cs = _win.getComputedStyle(element);

      if (cs.position !== "absolute") {
        m = element.offsetParent;

        while (parent && parent !== m) {
          x += parent.scrollLeft || 0;
          y += parent.scrollTop || 0;
          parent = parent.parentNode;
        }
      }

      b = container.style;
      b.top = element.offsetTop - y + "px";
      b.left = element.offsetLeft - x + "px";
      b[_transformProp] = cs[_transformProp];
      b[_transformOriginProp] = cs[_transformOriginProp];
      b.position = cs.position === "fixed" ? "fixed" : "absolute";
      element.parentNode.appendChild(container);
    }

    return container;
  },
      _setMatrix = function _setMatrix(m, a, b, c, d, e, f) {
    m.a = a;
    m.b = b;
    m.c = c;
    m.d = d;
    m.e = e;
    m.f = f;
    return m;
  };

  var Matrix2D = function () {
    function Matrix2D(a, b, c, d, e, f) {
      if (a === void 0) {
        a = 1;
      }

      if (b === void 0) {
        b = 0;
      }

      if (c === void 0) {
        c = 0;
      }

      if (d === void 0) {
        d = 1;
      }

      if (e === void 0) {
        e = 0;
      }

      if (f === void 0) {
        f = 0;
      }

      _setMatrix(this, a, b, c, d, e, f);
    }

    var _proto = Matrix2D.prototype;

    _proto.inverse = function inverse() {
      var a = this.a,
          b = this.b,
          c = this.c,
          d = this.d,
          e = this.e,
          f = this.f,
          determinant = a * d - b * c || 1e-10;
      return _setMatrix(this, d / determinant, -b / determinant, -c / determinant, a / determinant, (c * f - d * e) / determinant, -(a * f - b * e) / determinant);
    };

    _proto.multiply = function multiply(matrix) {
      var a = this.a,
          b = this.b,
          c = this.c,
          d = this.d,
          e = this.e,
          f = this.f,
          a2 = matrix.a,
          b2 = matrix.c,
          c2 = matrix.b,
          d2 = matrix.d,
          e2 = matrix.e,
          f2 = matrix.f;
      return _setMatrix(this, a2 * a + c2 * c, a2 * b + c2 * d, b2 * a + d2 * c, b2 * b + d2 * d, e + e2 * a + f2 * c, f + e2 * b + f2 * d);
    };

    _proto.clone = function clone() {
      return new Matrix2D(this.a, this.b, this.c, this.d, this.e, this.f);
    };

    _proto.equals = function equals(matrix) {
      var a = this.a,
          b = this.b,
          c = this.c,
          d = this.d,
          e = this.e,
          f = this.f;
      return a === matrix.a && b === matrix.b && c === matrix.c && d === matrix.d && e === matrix.e && f === matrix.f;
    };

    _proto.apply = function apply(point, decoratee) {
      if (decoratee === void 0) {
        decoratee = {};
      }

      var x = point.x,
          y = point.y,
          a = this.a,
          b = this.b,
          c = this.c,
          d = this.d,
          e = this.e,
          f = this.f;
      decoratee.x = x * a + y * c + e || 0;
      decoratee.y = x * b + y * d + f || 0;
      return decoratee;
    };

    return Matrix2D;
  }();
  function getGlobalMatrix(element, inverse, adjustGOffset, includeScrollInFixed) {
    if (!element || !element.parentNode || (_doc || _setDoc(element)).documentElement === element) {
      return new Matrix2D();
    }

    var zeroScales = _forceNonZeroScale(element),
        svg = _svgOwner(element),
        temps = svg ? _svgTemps : _divTemps,
        container = _placeSiblings(element, adjustGOffset),
        b1 = temps[0].getBoundingClientRect(),
        b2 = temps[1].getBoundingClientRect(),
        b3 = temps[2].getBoundingClientRect(),
        parent = container.parentNode,
        isFixed = !includeScrollInFixed && _isFixed(element),
        m = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + (isFixed ? 0 : _getDocScrollLeft()), b1.top + (isFixed ? 0 : _getDocScrollTop()));

    parent.removeChild(container);

    if (zeroScales) {
      b1 = zeroScales.length;

      while (b1--) {
        b2 = zeroScales[b1];
        b2.scaleX = b2.scaleY = 0;
        b2.renderTransform(1, b2);
      }
    }

    return inverse ? m.inverse() : m;
  }

  var gsap,
      _win$1,
      _doc$1,
      _docElement$1,
      _body$1,
      _tempDiv,
      _placeholderDiv,
      _coreInitted,
      _checkPrefix,
      _toArray,
      _supportsPassive,
      _isTouchDevice,
      _touchEventLookup,
      _dragCount,
      _isMultiTouching,
      _isAndroid,
      InertiaPlugin,
      _defaultCursor,
      _supportsPointer,
      _windowExists = function _windowExists() {
    return typeof window !== "undefined";
  },
      _getGSAP = function _getGSAP() {
    return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
  },
      _isFunction = function _isFunction(value) {
    return typeof value === "function";
  },
      _isObject = function _isObject(value) {
    return typeof value === "object";
  },
      _isUndefined = function _isUndefined(value) {
    return typeof value === "undefined";
  },
      _emptyFunc = function _emptyFunc() {
    return false;
  },
      _transformProp$1 = "transform",
      _transformOriginProp$1 = "transformOrigin",
      _round = function _round(value) {
    return Math.round(value * 10000) / 10000;
  },
      _isArray = Array.isArray,
      _createElement = function _createElement(type, ns) {
    var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
    return e.style ? e : _doc$1.createElement(type);
  },
      _RAD2DEG = 180 / Math.PI,
      _bigNum = 1e20,
      _identityMatrix$1 = new Matrix2D(),
      _getTime = Date.now || function () {
    return new Date().getTime();
  },
      _renderQueue = [],
      _lookup = {},
      _lookupCount = 0,
      _clickableTagExp = /^(?:a|input|textarea|button|select)$/i,
      _lastDragTime = 0,
      _temp1 = {},
      _windowProxy = {},
      _copy = function _copy(obj, factor) {
    var copy = {},
        p;

    for (p in obj) {
      copy[p] = factor ? obj[p] * factor : obj[p];
    }

    return copy;
  },
      _extend = function _extend(obj, defaults) {
    for (var p in defaults) {
      if (!(p in obj)) {
        obj[p] = defaults[p];
      }
    }

    return obj;
  },
      _setTouchActionForAllDescendants = function _setTouchActionForAllDescendants(elements, value) {
    var i = elements.length,
        children;

    while (i--) {
      value ? elements[i].style.touchAction = value : elements[i].style.removeProperty("touch-action");
      children = elements[i].children;
      children && children.length && _setTouchActionForAllDescendants(children, value);
    }
  },
      _renderQueueTick = function _renderQueueTick() {
    return _renderQueue.forEach(function (func) {
      return func();
    });
  },
      _addToRenderQueue = function _addToRenderQueue(func) {
    _renderQueue.push(func);

    if (_renderQueue.length === 1) {
      gsap.ticker.add(_renderQueueTick);
    }
  },
      _renderQueueTimeout = function _renderQueueTimeout() {
    return !_renderQueue.length && gsap.ticker.remove(_renderQueueTick);
  },
      _removeFromRenderQueue = function _removeFromRenderQueue(func) {
    var i = _renderQueue.length;

    while (i--) {
      if (_renderQueue[i] === func) {
        _renderQueue.splice(i, 1);
      }
    }

    gsap.to(_renderQueueTimeout, {
      overwrite: true,
      delay: 15,
      duration: 0,
      onComplete: _renderQueueTimeout,
      data: "_draggable"
    });
  },
      _setDefaults = function _setDefaults(obj, defaults) {
    for (var p in defaults) {
      if (!(p in obj)) {
        obj[p] = defaults[p];
      }
    }

    return obj;
  },
      _addListener = function _addListener(element, type, func, capture) {
    if (element.addEventListener) {
      var touchType = _touchEventLookup[type];
      capture = capture || (_supportsPassive ? {
        passive: false
      } : null);
      element.addEventListener(touchType || type, func, capture);
      touchType && type !== touchType && element.addEventListener(type, func, capture);
    }
  },
      _removeListener = function _removeListener(element, type, func) {
    if (element.removeEventListener) {
      var touchType = _touchEventLookup[type];
      element.removeEventListener(touchType || type, func);
      touchType && type !== touchType && element.removeEventListener(type, func);
    }
  },
      _preventDefault = function _preventDefault(event) {
    event.preventDefault && event.preventDefault();
    event.preventManipulation && event.preventManipulation();
  },
      _hasTouchID = function _hasTouchID(list, ID) {
    var i = list.length;

    while (i--) {
      if (list[i].identifier === ID) {
        return true;
      }
    }
  },
      _onMultiTouchDocumentEnd = function _onMultiTouchDocumentEnd(event) {
    _isMultiTouching = event.touches && _dragCount < event.touches.length;

    _removeListener(event.target, "touchend", _onMultiTouchDocumentEnd);
  },
      _onMultiTouchDocument = function _onMultiTouchDocument(event) {
    _isMultiTouching = event.touches && _dragCount < event.touches.length;

    _addListener(event.target, "touchend", _onMultiTouchDocumentEnd);
  },
      _getDocScrollTop$1 = function _getDocScrollTop(doc) {
    return _win$1.pageYOffset || doc.scrollTop || doc.documentElement.scrollTop || doc.body.scrollTop || 0;
  },
      _getDocScrollLeft$1 = function _getDocScrollLeft(doc) {
    return _win$1.pageXOffset || doc.scrollLeft || doc.documentElement.scrollLeft || doc.body.scrollLeft || 0;
  },
      _addScrollListener = function _addScrollListener(e, callback) {
    _addListener(e, "scroll", callback);

    if (!_isRoot(e.parentNode)) {
      _addScrollListener(e.parentNode, callback);
    }
  },
      _removeScrollListener = function _removeScrollListener(e, callback) {
    _removeListener(e, "scroll", callback);

    if (!_isRoot(e.parentNode)) {
      _removeScrollListener(e.parentNode, callback);
    }
  },
      _isRoot = function _isRoot(e) {
    return !!(!e || e === _docElement$1 || e.nodeType === 9 || e === _doc$1.body || e === _win$1 || !e.nodeType || !e.parentNode);
  },
      _getMaxScroll = function _getMaxScroll(element, axis) {
    var dim = axis === "x" ? "Width" : "Height",
        scroll = "scroll" + dim,
        client = "client" + dim;
    return Math.max(0, _isRoot(element) ? Math.max(_docElement$1[scroll], _body$1[scroll]) - (_win$1["inner" + dim] || _docElement$1[client] || _body$1[client]) : element[scroll] - element[client]);
  },
      _recordMaxScrolls = function _recordMaxScrolls(e, skipCurrent) {
    var x = _getMaxScroll(e, "x"),
        y = _getMaxScroll(e, "y");

    if (_isRoot(e)) {
      e = _windowProxy;
    } else {
      _recordMaxScrolls(e.parentNode, skipCurrent);
    }

    e._gsMaxScrollX = x;
    e._gsMaxScrollY = y;

    if (!skipCurrent) {
      e._gsScrollX = e.scrollLeft || 0;
      e._gsScrollY = e.scrollTop || 0;
    }
  },
      _setStyle = function _setStyle(element, property, value) {
    var style = element.style;

    if (!style) {
      return;
    }

    if (_isUndefined(style[property])) {
      property = _checkPrefix(property, element) || property;
    }

    if (value == null) {
      style.removeProperty && style.removeProperty(property.replace(/([A-Z])/g, "-$1").toLowerCase());
    } else {
      style[property] = value;
    }
  },
      _getComputedStyle = function _getComputedStyle(element) {
    return _win$1.getComputedStyle(element instanceof Element ? element : element.host || (element.parentNode || {}).host || element);
  },
      _tempRect = {},
      _parseRect = function _parseRect(e) {
    if (e === _win$1) {
      _tempRect.left = _tempRect.top = 0;
      _tempRect.width = _tempRect.right = _docElement$1.clientWidth || e.innerWidth || _body$1.clientWidth || 0;
      _tempRect.height = _tempRect.bottom = (e.innerHeight || 0) - 20 < _docElement$1.clientHeight ? _docElement$1.clientHeight : e.innerHeight || _body$1.clientHeight || 0;
      return _tempRect;
    }

    var doc = e.ownerDocument || _doc$1,
        r = !_isUndefined(e.pageX) ? {
      left: e.pageX - _getDocScrollLeft$1(doc),
      top: e.pageY - _getDocScrollTop$1(doc),
      right: e.pageX - _getDocScrollLeft$1(doc) + 1,
      bottom: e.pageY - _getDocScrollTop$1(doc) + 1
    } : !e.nodeType && !_isUndefined(e.left) && !_isUndefined(e.top) ? e : _toArray(e)[0].getBoundingClientRect();

    if (_isUndefined(r.right) && !_isUndefined(r.width)) {
      r.right = r.left + r.width;
      r.bottom = r.top + r.height;
    } else if (_isUndefined(r.width)) {
      r = {
        width: r.right - r.left,
        height: r.bottom - r.top,
        right: r.right,
        left: r.left,
        bottom: r.bottom,
        top: r.top
      };
    }

    return r;
  },
      _dispatchEvent = function _dispatchEvent(target, type, callbackName) {
    var vars = target.vars,
        callback = vars[callbackName],
        listeners = target._listeners[type],
        result;

    if (_isFunction(callback)) {
      result = callback.apply(vars.callbackScope || target, vars[callbackName + "Params"] || [target.pointerEvent]);
    }

    if (listeners && target.dispatchEvent(type) === false) {
      result = false;
    }

    return result;
  },
      _getBounds = function _getBounds(target, context) {
    var e = _toArray(target)[0],
        top,
        left,
        offset;

    if (!e.nodeType && e !== _win$1) {
      if (!_isUndefined(target.left)) {
        offset = {
          x: 0,
          y: 0
        };
        return {
          left: target.left - offset.x,
          top: target.top - offset.y,
          width: target.width,
          height: target.height
        };
      }

      left = target.min || target.minX || target.minRotation || 0;
      top = target.min || target.minY || 0;
      return {
        left: left,
        top: top,
        width: (target.max || target.maxX || target.maxRotation || 0) - left,
        height: (target.max || target.maxY || 0) - top
      };
    }

    return _getElementBounds(e, context);
  },
      _point1 = {},
      _getElementBounds = function _getElementBounds(element, context) {
    context = _toArray(context)[0];
    var isSVG = element.getBBox && element.ownerSVGElement,
        doc = element.ownerDocument || _doc$1,
        left,
        right,
        top,
        bottom,
        matrix,
        p1,
        p2,
        p3,
        p4,
        bbox,
        width,
        height,
        cs,
        contextParent;

    if (element === _win$1) {
      top = _getDocScrollTop$1(doc);
      left = _getDocScrollLeft$1(doc);
      right = left + (doc.documentElement.clientWidth || element.innerWidth || doc.body.clientWidth || 0);
      bottom = top + ((element.innerHeight || 0) - 20 < doc.documentElement.clientHeight ? doc.documentElement.clientHeight : element.innerHeight || doc.body.clientHeight || 0);
    } else if (context === _win$1 || _isUndefined(context)) {
      return element.getBoundingClientRect();
    } else {
      left = top = 0;

      if (isSVG) {
        bbox = element.getBBox();
        width = bbox.width;
        height = bbox.height;
      } else {
        if (element.viewBox && (bbox = element.viewBox.baseVal)) {
          left = bbox.x || 0;
          top = bbox.y || 0;
          width = bbox.width;
          height = bbox.height;
        }

        if (!width) {
          cs = _getComputedStyle(element);
          bbox = cs.boxSizing === "border-box";
          width = (parseFloat(cs.width) || element.clientWidth || 0) + (bbox ? 0 : parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth));
          height = (parseFloat(cs.height) || element.clientHeight || 0) + (bbox ? 0 : parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth));
        }
      }

      right = width;
      bottom = height;
    }

    if (element === context) {
      return {
        left: left,
        top: top,
        width: right - left,
        height: bottom - top
      };
    }

    matrix = getGlobalMatrix(context, true).multiply(getGlobalMatrix(element));
    p1 = matrix.apply({
      x: left,
      y: top
    });
    p2 = matrix.apply({
      x: right,
      y: top
    });
    p3 = matrix.apply({
      x: right,
      y: bottom
    });
    p4 = matrix.apply({
      x: left,
      y: bottom
    });
    left = Math.min(p1.x, p2.x, p3.x, p4.x);
    top = Math.min(p1.y, p2.y, p3.y, p4.y);
    contextParent = context.parentNode || {};
    return {
      left: left + (contextParent.scrollLeft || 0),
      top: top + (contextParent.scrollTop || 0),
      width: Math.max(p1.x, p2.x, p3.x, p4.x) - left,
      height: Math.max(p1.y, p2.y, p3.y, p4.y) - top
    };
  },
      _parseInertia = function _parseInertia(draggable, snap, max, min, factor, forceZeroVelocity) {
    var vars = {},
        a,
        i,
        l;

    if (snap) {
      if (factor !== 1 && snap instanceof Array) {
        vars.end = a = [];
        l = snap.length;

        if (_isObject(snap[0])) {
          for (i = 0; i < l; i++) {
            a[i] = _copy(snap[i], factor);
          }
        } else {
          for (i = 0; i < l; i++) {
            a[i] = snap[i] * factor;
          }
        }

        max += 1.1;
        min -= 1.1;
      } else if (_isFunction(snap)) {
        vars.end = function (value) {
          var result = snap.call(draggable, value),
              copy,
              p;

          if (factor !== 1) {
            if (_isObject(result)) {
              copy = {};

              for (p in result) {
                copy[p] = result[p] * factor;
              }

              result = copy;
            } else {
              result *= factor;
            }
          }

          return result;
        };
      } else {
        vars.end = snap;
      }
    }

    if (max || max === 0) {
      vars.max = max;
    }

    if (min || min === 0) {
      vars.min = min;
    }

    if (forceZeroVelocity) {
      vars.velocity = 0;
    }

    return vars;
  },
      _isClickable = function _isClickable(element) {
    var data;
    return !element || !element.getAttribute || element === _body$1 ? false : (data = element.getAttribute("data-clickable")) === "true" || data !== "false" && (element.onclick || _clickableTagExp.test(element.nodeName + "") || element.getAttribute("contentEditable") === "true") ? true : _isClickable(element.parentNode);
  },
      _setSelectable = function _setSelectable(elements, selectable) {
    var i = elements.length,
        e;

    while (i--) {
      e = elements[i];
      e.ondragstart = e.onselectstart = selectable ? null : _emptyFunc;
      gsap.set(e, {
        lazy: true,
        userSelect: selectable ? "text" : "none"
      });
    }
  },
      _isFixed$1 = function _isFixed(element) {
    if (_getComputedStyle(element).position === "fixed") {
      return true;
    }

    element = element.parentNode;

    if (element && element.nodeType === 1) {
      return _isFixed(element);
    }
  },
      _supports3D,
      _addPaddingBR,
      ScrollProxy = function ScrollProxy(element, vars) {
    element = gsap.utils.toArray(element)[0];
    vars = vars || {};
    var content = document.createElement("div"),
        style = content.style,
        node = element.firstChild,
        offsetTop = 0,
        offsetLeft = 0,
        prevTop = element.scrollTop,
        prevLeft = element.scrollLeft,
        scrollWidth = element.scrollWidth,
        scrollHeight = element.scrollHeight,
        extraPadRight = 0,
        maxLeft = 0,
        maxTop = 0,
        elementWidth,
        elementHeight,
        contentHeight,
        nextNode,
        transformStart,
        transformEnd;

    if (_supports3D && vars.force3D !== false) {
      transformStart = "translate3d(";
      transformEnd = "px,0px)";
    } else if (_transformProp$1) {
      transformStart = "translate(";
      transformEnd = "px)";
    }

    this.scrollTop = function (value, force) {
      if (!arguments.length) {
        return -this.top();
      }

      this.top(-value, force);
    };

    this.scrollLeft = function (value, force) {
      if (!arguments.length) {
        return -this.left();
      }

      this.left(-value, force);
    };

    this.left = function (value, force) {
      if (!arguments.length) {
        return -(element.scrollLeft + offsetLeft);
      }

      var dif = element.scrollLeft - prevLeft,
          oldOffset = offsetLeft;

      if ((dif > 2 || dif < -2) && !force) {
        prevLeft = element.scrollLeft;
        gsap.killTweensOf(this, {
          left: 1,
          scrollLeft: 1
        });
        this.left(-prevLeft);

        if (vars.onKill) {
          vars.onKill();
        }

        return;
      }

      value = -value;

      if (value < 0) {
        offsetLeft = value - 0.5 | 0;
        value = 0;
      } else if (value > maxLeft) {
        offsetLeft = value - maxLeft | 0;
        value = maxLeft;
      } else {
        offsetLeft = 0;
      }

      if (offsetLeft || oldOffset) {
        if (!this._skip) {
          style[_transformProp$1] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
        }

        if (offsetLeft + extraPadRight >= 0) {
          style.paddingRight = offsetLeft + extraPadRight + "px";
        }
      }

      element.scrollLeft = value | 0;
      prevLeft = element.scrollLeft;
    };

    this.top = function (value, force) {
      if (!arguments.length) {
        return -(element.scrollTop + offsetTop);
      }

      var dif = element.scrollTop - prevTop,
          oldOffset = offsetTop;

      if ((dif > 2 || dif < -2) && !force) {
        prevTop = element.scrollTop;
        gsap.killTweensOf(this, {
          top: 1,
          scrollTop: 1
        });
        this.top(-prevTop);

        if (vars.onKill) {
          vars.onKill();
        }

        return;
      }

      value = -value;

      if (value < 0) {
        offsetTop = value - 0.5 | 0;
        value = 0;
      } else if (value > maxTop) {
        offsetTop = value - maxTop | 0;
        value = maxTop;
      } else {
        offsetTop = 0;
      }

      if (offsetTop || oldOffset) {
        if (!this._skip) {
          style[_transformProp$1] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
        }
      }

      element.scrollTop = value | 0;
      prevTop = element.scrollTop;
    };

    this.maxScrollTop = function () {
      return maxTop;
    };

    this.maxScrollLeft = function () {
      return maxLeft;
    };

    this.disable = function () {
      node = content.firstChild;

      while (node) {
        nextNode = node.nextSibling;
        element.appendChild(node);
        node = nextNode;
      }

      if (element === content.parentNode) {
        element.removeChild(content);
      }
    };

    this.enable = function () {
      node = element.firstChild;

      if (node === content) {
        return;
      }

      while (node) {
        nextNode = node.nextSibling;
        content.appendChild(node);
        node = nextNode;
      }

      element.appendChild(content);
      this.calibrate();
    };

    this.calibrate = function (force) {
      var widthMatches = element.clientWidth === elementWidth,
          cs,
          x,
          y;
      prevTop = element.scrollTop;
      prevLeft = element.scrollLeft;

      if (widthMatches && element.clientHeight === elementHeight && content.offsetHeight === contentHeight && scrollWidth === element.scrollWidth && scrollHeight === element.scrollHeight && !force) {
        return;
      }

      if (offsetTop || offsetLeft) {
        x = this.left();
        y = this.top();
        this.left(-element.scrollLeft);
        this.top(-element.scrollTop);
      }

      cs = _getComputedStyle(element);

      if (!widthMatches || force) {
        style.display = "block";
        style.width = "auto";
        style.paddingRight = "0px";
        extraPadRight = Math.max(0, element.scrollWidth - element.clientWidth);

        if (extraPadRight) {
          extraPadRight += parseFloat(cs.paddingLeft) + (_addPaddingBR ? parseFloat(cs.paddingRight) : 0);
        }
      }

      style.display = "inline-block";
      style.position = "relative";
      style.overflow = "visible";
      style.verticalAlign = "top";
      style.boxSizing = "content-box";
      style.width = "100%";
      style.paddingRight = extraPadRight + "px";

      if (_addPaddingBR) {
        style.paddingBottom = cs.paddingBottom;
      }

      elementWidth = element.clientWidth;
      elementHeight = element.clientHeight;
      scrollWidth = element.scrollWidth;
      scrollHeight = element.scrollHeight;
      maxLeft = element.scrollWidth - elementWidth;
      maxTop = element.scrollHeight - elementHeight;
      contentHeight = content.offsetHeight;
      style.display = "block";

      if (x || y) {
        this.left(x);
        this.top(y);
      }
    };

    this.content = content;
    this.element = element;
    this._skip = false;
    this.enable();
  },
      _initCore = function _initCore(required) {
    if (_windowExists() && document.body) {
      var nav = window && window.navigator;
      _win$1 = window;
      _doc$1 = document;
      _docElement$1 = _doc$1.documentElement;
      _body$1 = _doc$1.body;
      _tempDiv = _createElement("div");
      _supportsPointer = !!window.PointerEvent;
      _placeholderDiv = _createElement("div");
      _placeholderDiv.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab";
      _defaultCursor = _placeholderDiv.style.cursor === "grab" ? "grab" : "move";
      _isAndroid = nav && nav.userAgent.toLowerCase().indexOf("android") !== -1;
      _isTouchDevice = "ontouchstart" in _docElement$1 && "orientation" in _win$1 || nav && (nav.MaxTouchPoints > 0 || nav.msMaxTouchPoints > 0);

      _addPaddingBR = function () {
        var div = _createElement("div"),
            child = _createElement("div"),
            childStyle = child.style,
            parent = _body$1,
            val;

        childStyle.display = "inline-block";
        childStyle.position = "relative";
        div.style.cssText = child.innerHTML = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden";
        div.appendChild(child);
        parent.appendChild(div);
        val = child.offsetHeight + 18 > div.scrollHeight;
        parent.removeChild(div);
        return val;
      }();

      _touchEventLookup = function (types) {
        var standard = types.split(","),
            converted = ("onpointerdown" in _tempDiv ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in _tempDiv ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : types).split(","),
            obj = {},
            i = 4;

        while (--i > -1) {
          obj[standard[i]] = converted[i];
          obj[converted[i]] = standard[i];
        }

        try {
          _docElement$1.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: function get() {
              _supportsPassive = 1;
            }
          }));
        } catch (e) {}

        return obj;
      }("touchstart,touchmove,touchend,touchcancel");

      _addListener(_doc$1, "touchcancel", _emptyFunc);

      _addListener(_win$1, "touchmove", _emptyFunc);

      _body$1 && _body$1.addEventListener("touchstart", _emptyFunc);

      _addListener(_doc$1, "contextmenu", function () {
        for (var p in _lookup) {
          if (_lookup[p].isPressed) {
            _lookup[p].endDrag();
          }
        }
      });

      gsap = _coreInitted = _getGSAP();
    }

    if (gsap) {
      InertiaPlugin = gsap.plugins.inertia;
      _checkPrefix = gsap.utils.checkPrefix;
      _transformProp$1 = _checkPrefix(_transformProp$1);
      _transformOriginProp$1 = _checkPrefix(_transformOriginProp$1);
      _toArray = gsap.utils.toArray;
      _supports3D = !!_checkPrefix("perspective");
    } else if (required) {
      console.warn("Please gsap.registerPlugin(Draggable)");
    }
  };

  var EventDispatcher = function () {
    function EventDispatcher(target) {
      this._listeners = {};
      this.target = target || this;
    }

    var _proto = EventDispatcher.prototype;

    _proto.addEventListener = function addEventListener(type, callback) {
      var list = this._listeners[type] || (this._listeners[type] = []);

      if (!~list.indexOf(callback)) {
        list.push(callback);
      }
    };

    _proto.removeEventListener = function removeEventListener(type, callback) {
      var list = this._listeners[type],
          i = list && list.indexOf(callback) || -1;
      i > -1 && list.splice(i, 1);
    };

    _proto.dispatchEvent = function dispatchEvent(type) {
      var _this = this;

      var result;
      (this._listeners[type] || []).forEach(function (callback) {
        return callback.call(_this, {
          type: type,
          target: _this.target
        }) === false && (result = false);
      });
      return result;
    };

    return EventDispatcher;
  }();

  var Draggable = function (_EventDispatcher) {
    _inheritsLoose(Draggable, _EventDispatcher);

    function Draggable(target, vars) {
      var _this2;

      _this2 = _EventDispatcher.call(this) || this;
      _coreInitted || _initCore(1);
      target = _toArray(target)[0];

      if (!InertiaPlugin) {
        InertiaPlugin = gsap.plugins.inertia;
      }

      _this2.vars = vars = _copy(vars || {});
      _this2.target = target;
      _this2.x = _this2.y = _this2.rotation = 0;
      _this2.dragResistance = parseFloat(vars.dragResistance) || 0;
      _this2.edgeResistance = isNaN(vars.edgeResistance) ? 1 : parseFloat(vars.edgeResistance) || 0;
      _this2.lockAxis = vars.lockAxis;
      _this2.autoScroll = vars.autoScroll || 0;
      _this2.lockedAxis = null;
      _this2.allowEventDefault = !!vars.allowEventDefault;
      gsap.getProperty(target, "x");

      var type = (vars.type || "x,y").toLowerCase(),
          xyMode = ~type.indexOf("x") || ~type.indexOf("y"),
          rotationMode = type.indexOf("rotation") !== -1,
          xProp = rotationMode ? "rotation" : xyMode ? "x" : "left",
          yProp = xyMode ? "y" : "top",
          allowX = !!(~type.indexOf("x") || ~type.indexOf("left") || type === "scroll"),
          allowY = !!(~type.indexOf("y") || ~type.indexOf("top") || type === "scroll"),
          minimumMovement = vars.minimumMovement || 2,
          self = _assertThisInitialized(_this2),
          triggers = _toArray(vars.trigger || vars.handle || target),
          killProps = {},
          dragEndTime = 0,
          checkAutoScrollBounds = false,
          autoScrollMarginTop = vars.autoScrollMarginTop || 40,
          autoScrollMarginRight = vars.autoScrollMarginRight || 40,
          autoScrollMarginBottom = vars.autoScrollMarginBottom || 40,
          autoScrollMarginLeft = vars.autoScrollMarginLeft || 40,
          isClickable = vars.clickableTest || _isClickable,
          clickTime = 0,
          gsCache = target._gsap || gsap.core.getCache(target),
          isFixed = _isFixed$1(target),
          getPropAsNum = function getPropAsNum(property, unit) {
        return parseFloat(gsCache.get(target, property, unit));
      },
          ownerDoc = target.ownerDocument || _doc$1,
          enabled,
          scrollProxy,
          startPointerX,
          startPointerY,
          startElementX,
          startElementY,
          hasBounds,
          hasDragCallback,
          hasMoveCallback,
          maxX,
          minX,
          maxY,
          minY,
          touch,
          touchID,
          rotationOrigin,
          dirty,
          old,
          snapX,
          snapY,
          snapXY,
          isClicking,
          touchEventTarget,
          matrix,
          interrupted,
          allowNativeTouchScrolling,
          touchDragAxis,
          isDispatching,
          clickDispatch,
          trustedClickDispatch,
          isPreventingDefault,
          onContextMenu = function onContextMenu(e) {
        _preventDefault(e);

        e.stopImmediatePropagation && e.stopImmediatePropagation();
        return false;
      },
          render = function render(suppressEvents) {
        if (self.autoScroll && self.isDragging && (checkAutoScrollBounds || dirty)) {
          var e = target,
              autoScrollFactor = self.autoScroll * 15,
              parent,
              isRoot,
              rect,
              pointerX,
              pointerY,
              changeX,
              changeY,
              gap;
          checkAutoScrollBounds = false;
          _windowProxy.scrollTop = _win$1.pageYOffset != null ? _win$1.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
          _windowProxy.scrollLeft = _win$1.pageXOffset != null ? _win$1.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;
          pointerX = self.pointerX - _windowProxy.scrollLeft;
          pointerY = self.pointerY - _windowProxy.scrollTop;

          while (e && !isRoot) {
            isRoot = _isRoot(e.parentNode);
            parent = isRoot ? _windowProxy : e.parentNode;
            rect = isRoot ? {
              bottom: Math.max(_docElement$1.clientHeight, _win$1.innerHeight || 0),
              right: Math.max(_docElement$1.clientWidth, _win$1.innerWidth || 0),
              left: 0,
              top: 0
            } : parent.getBoundingClientRect();
            changeX = changeY = 0;

            if (allowY) {
              gap = parent._gsMaxScrollY - parent.scrollTop;

              if (gap < 0) {
                changeY = gap;
              } else if (pointerY > rect.bottom - autoScrollMarginBottom && gap) {
                checkAutoScrollBounds = true;
                changeY = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.bottom - pointerY) / autoScrollMarginBottom) | 0);
              } else if (pointerY < rect.top + autoScrollMarginTop && parent.scrollTop) {
                checkAutoScrollBounds = true;
                changeY = -Math.min(parent.scrollTop, autoScrollFactor * (1 - Math.max(0, pointerY - rect.top) / autoScrollMarginTop) | 0);
              }

              if (changeY) {
                parent.scrollTop += changeY;
              }
            }

            if (allowX) {
              gap = parent._gsMaxScrollX - parent.scrollLeft;

              if (gap < 0) {
                changeX = gap;
              } else if (pointerX > rect.right - autoScrollMarginRight && gap) {
                checkAutoScrollBounds = true;
                changeX = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.right - pointerX) / autoScrollMarginRight) | 0);
              } else if (pointerX < rect.left + autoScrollMarginLeft && parent.scrollLeft) {
                checkAutoScrollBounds = true;
                changeX = -Math.min(parent.scrollLeft, autoScrollFactor * (1 - Math.max(0, pointerX - rect.left) / autoScrollMarginLeft) | 0);
              }

              if (changeX) {
                parent.scrollLeft += changeX;
              }
            }

            if (isRoot && (changeX || changeY)) {
              _win$1.scrollTo(parent.scrollLeft, parent.scrollTop);

              setPointerPosition(self.pointerX + changeX, self.pointerY + changeY);
            }

            e = parent;
          }
        }

        if (dirty) {
          var x = self.x,
              y = self.y;

          if (rotationMode) {
            self.deltaX = x - parseFloat(gsCache.rotation);
            self.rotation = x;
            gsCache.rotation = x + "deg";
            gsCache.renderTransform(1, gsCache);
          } else {
            if (scrollProxy) {
              if (allowY) {
                self.deltaY = y - scrollProxy.top();
                scrollProxy.top(y);
              }

              if (allowX) {
                self.deltaX = x - scrollProxy.left();
                scrollProxy.left(x);
              }
            } else if (xyMode) {
              if (allowY) {
                self.deltaY = y - parseFloat(gsCache.y);
                gsCache.y = y + "px";
              }

              if (allowX) {
                self.deltaX = x - parseFloat(gsCache.x);
                gsCache.x = x + "px";
              }

              gsCache.renderTransform(1, gsCache);
            } else {
              if (allowY) {
                self.deltaY = y - parseFloat(target.style.top || 0);
                target.style.top = y + "px";
              }

              if (allowX) {
                self.deltaX = x - parseFloat(target.style.left || 0);
                target.style.left = x + "px";
              }
            }
          }

          if (hasDragCallback && !suppressEvents && !isDispatching) {
            isDispatching = true;

            if (_dispatchEvent(self, "drag", "onDrag") === false) {
              if (allowX) {
                self.x -= self.deltaX;
              }

              if (allowY) {
                self.y -= self.deltaY;
              }

              render(true);
            }

            isDispatching = false;
          }
        }

        dirty = false;
      },
          syncXY = function syncXY(skipOnUpdate, skipSnap) {
        var x = self.x,
            y = self.y,
            snappedValue,
            cs;

        if (!target._gsap) {
          gsCache = gsap.core.getCache(target);
        }

        gsCache.uncache && gsap.getProperty(target, "x");

        if (xyMode) {
          self.x = parseFloat(gsCache.x);
          self.y = parseFloat(gsCache.y);
        } else if (rotationMode) {
          self.x = self.rotation = parseFloat(gsCache.rotation);
        } else if (scrollProxy) {
          self.y = scrollProxy.top();
          self.x = scrollProxy.left();
        } else {
          self.y = parseFloat(target.style.top || (cs = _getComputedStyle(target)) && cs.top) || 0;
          self.x = parseFloat(target.style.left || (cs || {}).left) || 0;
        }

        if ((snapX || snapY || snapXY) && !skipSnap && (self.isDragging || self.isThrowing)) {
          if (snapXY) {
            _temp1.x = self.x;
            _temp1.y = self.y;
            snappedValue = snapXY(_temp1);

            if (snappedValue.x !== self.x) {
              self.x = snappedValue.x;
              dirty = true;
            }

            if (snappedValue.y !== self.y) {
              self.y = snappedValue.y;
              dirty = true;
            }
          }

          if (snapX) {
            snappedValue = snapX(self.x);

            if (snappedValue !== self.x) {
              self.x = snappedValue;

              if (rotationMode) {
                self.rotation = snappedValue;
              }

              dirty = true;
            }
          }

          if (snapY) {
            snappedValue = snapY(self.y);

            if (snappedValue !== self.y) {
              self.y = snappedValue;
            }

            dirty = true;
          }
        }

        dirty && render(true);

        if (!skipOnUpdate) {
          self.deltaX = self.x - x;
          self.deltaY = self.y - y;

          _dispatchEvent(self, "throwupdate", "onThrowUpdate");
        }
      },
          buildSnapFunc = function buildSnapFunc(snap, min, max, factor) {
        if (min == null) {
          min = -_bigNum;
        }

        if (max == null) {
          max = _bigNum;
        }

        if (_isFunction(snap)) {
          return function (n) {
            var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance;
            return snap.call(self, n > max ? max + (n - max) * edgeTolerance : n < min ? min + (n - min) * edgeTolerance : n) * factor;
          };
        }

        if (_isArray(snap)) {
          return function (n) {
            var i = snap.length,
                closest = 0,
                absDif = _bigNum,
                val,
                dif;

            while (--i > -1) {
              val = snap[i];
              dif = val - n;

              if (dif < 0) {
                dif = -dif;
              }

              if (dif < absDif && val >= min && val <= max) {
                closest = i;
                absDif = dif;
              }
            }

            return snap[closest];
          };
        }

        return isNaN(snap) ? function (n) {
          return n;
        } : function () {
          return snap * factor;
        };
      },
          buildPointSnapFunc = function buildPointSnapFunc(snap, minX, maxX, minY, maxY, radius, factor) {
        radius = radius && radius < _bigNum ? radius * radius : _bigNum;

        if (_isFunction(snap)) {
          return function (point) {
            var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance,
                x = point.x,
                y = point.y,
                result,
                dx,
                dy;
            point.x = x = x > maxX ? maxX + (x - maxX) * edgeTolerance : x < minX ? minX + (x - minX) * edgeTolerance : x;
            point.y = y = y > maxY ? maxY + (y - maxY) * edgeTolerance : y < minY ? minY + (y - minY) * edgeTolerance : y;
            result = snap.call(self, point);

            if (result !== point) {
              point.x = result.x;
              point.y = result.y;
            }

            if (factor !== 1) {
              point.x *= factor;
              point.y *= factor;
            }

            if (radius < _bigNum) {
              dx = point.x - x;
              dy = point.y - y;

              if (dx * dx + dy * dy > radius) {
                point.x = x;
                point.y = y;
              }
            }

            return point;
          };
        }

        if (_isArray(snap)) {
          return function (p) {
            var i = snap.length,
                closest = 0,
                minDist = _bigNum,
                x,
                y,
                point,
                dist;

            while (--i > -1) {
              point = snap[i];
              x = point.x - p.x;
              y = point.y - p.y;
              dist = x * x + y * y;

              if (dist < minDist) {
                closest = i;
                minDist = dist;
              }
            }

            return minDist <= radius ? snap[closest] : p;
          };
        }

        return function (n) {
          return n;
        };
      },
          calculateBounds = function calculateBounds() {
        var bounds, targetBounds, snap, snapIsRaw;
        hasBounds = false;

        if (scrollProxy) {
          scrollProxy.calibrate();
          self.minX = minX = -scrollProxy.maxScrollLeft();
          self.minY = minY = -scrollProxy.maxScrollTop();
          self.maxX = maxX = self.maxY = maxY = 0;
          hasBounds = true;
        } else if (!!vars.bounds) {
          bounds = _getBounds(vars.bounds, target.parentNode);

          if (rotationMode) {
            self.minX = minX = bounds.left;
            self.maxX = maxX = bounds.left + bounds.width;
            self.minY = minY = self.maxY = maxY = 0;
          } else if (!_isUndefined(vars.bounds.maxX) || !_isUndefined(vars.bounds.maxY)) {
            bounds = vars.bounds;
            self.minX = minX = bounds.minX;
            self.minY = minY = bounds.minY;
            self.maxX = maxX = bounds.maxX;
            self.maxY = maxY = bounds.maxY;
          } else {
            targetBounds = _getBounds(target, target.parentNode);
            self.minX = minX = Math.round(getPropAsNum(xProp, "px") + bounds.left - targetBounds.left - 0.5);
            self.minY = minY = Math.round(getPropAsNum(yProp, "px") + bounds.top - targetBounds.top - 0.5);
            self.maxX = maxX = Math.round(minX + (bounds.width - targetBounds.width));
            self.maxY = maxY = Math.round(minY + (bounds.height - targetBounds.height));
          }

          if (minX > maxX) {
            self.minX = maxX;
            self.maxX = maxX = minX;
            minX = self.minX;
          }

          if (minY > maxY) {
            self.minY = maxY;
            self.maxY = maxY = minY;
            minY = self.minY;
          }

          if (rotationMode) {
            self.minRotation = minX;
            self.maxRotation = maxX;
          }

          hasBounds = true;
        }

        if (vars.liveSnap) {
          snap = vars.liveSnap === true ? vars.snap || {} : vars.liveSnap;
          snapIsRaw = _isArray(snap) || _isFunction(snap);

          if (rotationMode) {
            snapX = buildSnapFunc(snapIsRaw ? snap : snap.rotation, minX, maxX, 1);
            snapY = null;
          } else {
            if (snap.points) {
              snapXY = buildPointSnapFunc(snapIsRaw ? snap : snap.points, minX, maxX, minY, maxY, snap.radius, scrollProxy ? -1 : 1);
            } else {
              if (allowX) {
                snapX = buildSnapFunc(snapIsRaw ? snap : snap.x || snap.left || snap.scrollLeft, minX, maxX, scrollProxy ? -1 : 1);
              }

              if (allowY) {
                snapY = buildSnapFunc(snapIsRaw ? snap : snap.y || snap.top || snap.scrollTop, minY, maxY, scrollProxy ? -1 : 1);
              }
            }
          }
        }
      },
          onThrowComplete = function onThrowComplete() {
        self.isThrowing = false;

        _dispatchEvent(self, "throwcomplete", "onThrowComplete");
      },
          onThrowInterrupt = function onThrowInterrupt() {
        self.isThrowing = false;
      },
          animate = function animate(inertia, forceZeroVelocity) {
        var snap, snapIsRaw, tween, overshootTolerance;

        if (inertia && InertiaPlugin) {
          if (inertia === true) {
            snap = vars.snap || vars.liveSnap || {};
            snapIsRaw = _isArray(snap) || _isFunction(snap);
            inertia = {
              resistance: (vars.throwResistance || vars.resistance || 1000) / (rotationMode ? 10 : 1)
            };

            if (rotationMode) {
              inertia.rotation = _parseInertia(self, snapIsRaw ? snap : snap.rotation, maxX, minX, 1, forceZeroVelocity);
            } else {
              if (allowX) {
                inertia[xProp] = _parseInertia(self, snapIsRaw ? snap : snap.points || snap.x || snap.left, maxX, minX, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "x");
              }

              if (allowY) {
                inertia[yProp] = _parseInertia(self, snapIsRaw ? snap : snap.points || snap.y || snap.top, maxY, minY, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "y");
              }

              if (snap.points || _isArray(snap) && _isObject(snap[0])) {
                inertia.linkedProps = xProp + "," + yProp;
                inertia.radius = snap.radius;
              }
            }
          }

          self.isThrowing = true;
          overshootTolerance = !isNaN(vars.overshootTolerance) ? vars.overshootTolerance : vars.edgeResistance === 1 ? 0 : 1 - self.edgeResistance + 0.2;

          if (!inertia.duration) {
            inertia.duration = {
              max: Math.max(vars.minDuration || 0, "maxDuration" in vars ? vars.maxDuration : 2),
              min: !isNaN(vars.minDuration) ? vars.minDuration : overshootTolerance === 0 || _isObject(inertia) && inertia.resistance > 1000 ? 0 : 0.5,
              overshoot: overshootTolerance
            };
          }

          self.tween = tween = gsap.to(scrollProxy || target, {
            inertia: inertia,
            data: "_draggable",
            onComplete: onThrowComplete,
            onInterrupt: onThrowInterrupt,
            onUpdate: vars.fastMode ? _dispatchEvent : syncXY,
            onUpdateParams: vars.fastMode ? [self, "onthrowupdate", "onThrowUpdate"] : snap && snap.radius ? [false, true] : []
          });

          if (!vars.fastMode) {
            if (scrollProxy) {
              scrollProxy._skip = true;
            }

            tween.render(1e9, true, true);
            syncXY(true, true);
            self.endX = self.x;
            self.endY = self.y;

            if (rotationMode) {
              self.endRotation = self.x;
            }

            tween.play(0);
            syncXY(true, true);

            if (scrollProxy) {
              scrollProxy._skip = false;
            }
          }
        } else if (hasBounds) {
          self.applyBounds();
        }
      },
          updateMatrix = function updateMatrix(shiftStart) {
        var start = matrix,
            p;
        matrix = getGlobalMatrix(target.parentNode, true);

        if (shiftStart && self.isPressed && !matrix.equals(start || new Matrix2D())) {
          p = start.inverse().apply({
            x: startPointerX,
            y: startPointerY
          });
          matrix.apply(p, p);
          startPointerX = p.x;
          startPointerY = p.y;
        }

        if (matrix.equals(_identityMatrix$1)) {
          matrix = null;
        }
      },
          recordStartPositions = function recordStartPositions() {
        var edgeTolerance = 1 - self.edgeResistance,
            offsetX = isFixed ? _getDocScrollLeft$1(ownerDoc) : 0,
            offsetY = isFixed ? _getDocScrollTop$1(ownerDoc) : 0,
            parsedOrigin,
            x,
            y;
        updateMatrix(false);
        _point1.x = self.pointerX - offsetX;
        _point1.y = self.pointerY - offsetY;
        matrix && matrix.apply(_point1, _point1);
        startPointerX = _point1.x;
        startPointerY = _point1.y;

        if (dirty) {
          setPointerPosition(self.pointerX, self.pointerY);
          render(true);
        }

        if (scrollProxy) {
          calculateBounds();
          startElementY = scrollProxy.top();
          startElementX = scrollProxy.left();
        } else {
          if (isTweening()) {
            syncXY(true, true);
            calculateBounds();
          } else {
            self.applyBounds();
          }

          if (rotationMode) {
            parsedOrigin = target.ownerSVGElement ? [gsCache.xOrigin - target.getBBox().x, gsCache.yOrigin - target.getBBox().y] : (_getComputedStyle(target)[_transformOriginProp$1] || "0 0").split(" ");
            rotationOrigin = self.rotationOrigin = getGlobalMatrix(target).apply({
              x: parseFloat(parsedOrigin[0]) || 0,
              y: parseFloat(parsedOrigin[1]) || 0
            });
            syncXY(true, true);
            x = self.pointerX - rotationOrigin.x - offsetX;
            y = rotationOrigin.y - self.pointerY + offsetY;
            startElementX = self.x;
            startElementY = self.y = Math.atan2(y, x) * _RAD2DEG;
          } else {
            startElementY = getPropAsNum(yProp, "px");
            startElementX = getPropAsNum(xProp, "px");
          }
        }

        if (hasBounds && edgeTolerance) {
          if (startElementX > maxX) {
            startElementX = maxX + (startElementX - maxX) / edgeTolerance;
          } else if (startElementX < minX) {
            startElementX = minX - (minX - startElementX) / edgeTolerance;
          }

          if (!rotationMode) {
            if (startElementY > maxY) {
              startElementY = maxY + (startElementY - maxY) / edgeTolerance;
            } else if (startElementY < minY) {
              startElementY = minY - (minY - startElementY) / edgeTolerance;
            }
          }
        }

        self.startX = startElementX = _round(startElementX);
        self.startY = startElementY = _round(startElementY);
      },
          isTweening = function isTweening() {
        return self.tween && self.tween.isActive();
      },
          removePlaceholder = function removePlaceholder() {
        if (_placeholderDiv.parentNode && !isTweening() && !self.isDragging) {
          _placeholderDiv.parentNode.removeChild(_placeholderDiv);
        }
      },
          onPress = function onPress(e, force) {
        var i;

        if (!enabled || self.isPressed || !e || (e.type === "mousedown" || e.type === "pointerdown") && !force && _getTime() - clickTime < 30 && _touchEventLookup[self.pointerEvent.type]) {
          isPreventingDefault && e && enabled && _preventDefault(e);
          return;
        }

        interrupted = isTweening();
        self.pointerEvent = e;

        if (_touchEventLookup[e.type]) {
          touchEventTarget = ~e.type.indexOf("touch") ? e.currentTarget || e.target : ownerDoc;

          _addListener(touchEventTarget, "touchend", onRelease);

          _addListener(touchEventTarget, "touchmove", onMove);

          _addListener(touchEventTarget, "touchcancel", onRelease);

          _addListener(ownerDoc, "touchstart", _onMultiTouchDocument);
        } else {
          touchEventTarget = null;

          _addListener(ownerDoc, "mousemove", onMove);
        }

        touchDragAxis = null;

        if (!_supportsPointer || !touchEventTarget) {
          _addListener(ownerDoc, "mouseup", onRelease);

          e && e.target && _addListener(e.target, "mouseup", onRelease);
        }

        isClicking = isClickable.call(self, e.target) && vars.dragClickables === false && !force;

        if (isClicking) {
          _addListener(e.target, "change", onRelease);

          _dispatchEvent(self, "pressInit", "onPressInit");

          _dispatchEvent(self, "press", "onPress");

          _setSelectable(triggers, true);

          isPreventingDefault = false;
          return;
        }

        allowNativeTouchScrolling = !touchEventTarget || allowX === allowY || self.vars.allowNativeTouchScrolling === false || self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2) ? false : allowX ? "y" : "x";
        isPreventingDefault = !allowNativeTouchScrolling && !self.allowEventDefault;

        if (isPreventingDefault) {
          _preventDefault(e);

          _addListener(_win$1, "touchforcechange", _preventDefault);
        }

        if (e.changedTouches) {
          e = touch = e.changedTouches[0];
          touchID = e.identifier;
        } else if (e.pointerId) {
          touchID = e.pointerId;
        } else {
          touch = touchID = null;
        }

        _dragCount++;

        _addToRenderQueue(render);

        startPointerY = self.pointerY = e.pageY;
        startPointerX = self.pointerX = e.pageX;

        _dispatchEvent(self, "pressInit", "onPressInit");

        if (allowNativeTouchScrolling || self.autoScroll) {
          _recordMaxScrolls(target.parentNode);
        }

        if (target.parentNode && self.autoScroll && !scrollProxy && !rotationMode && target.parentNode._gsMaxScrollX && !_placeholderDiv.parentNode && !target.getBBox) {
          _placeholderDiv.style.width = target.parentNode.scrollWidth + "px";
          target.parentNode.appendChild(_placeholderDiv);
        }

        recordStartPositions();
        self.tween && self.tween.kill();
        self.isThrowing = false;
        gsap.killTweensOf(scrollProxy || target, killProps, true);
        scrollProxy && gsap.killTweensOf(target, {
          scrollTo: 1
        }, true);
        self.tween = self.lockedAxis = null;

        if (vars.zIndexBoost || !rotationMode && !scrollProxy && vars.zIndexBoost !== false) {
          target.style.zIndex = Draggable.zIndex++;
        }

        self.isPressed = true;
        hasDragCallback = !!(vars.onDrag || self._listeners.drag);
        hasMoveCallback = !!(vars.onMove || self._listeners.move);

        if (!rotationMode && (vars.cursor !== false || vars.activeCursor)) {
          i = triggers.length;

          while (--i > -1) {
            gsap.set(triggers[i], {
              cursor: vars.activeCursor || vars.cursor || (_defaultCursor === "grab" ? "grabbing" : _defaultCursor)
            });
          }
        }

        _dispatchEvent(self, "press", "onPress");
      },
          onMove = function onMove(e) {
        var originalEvent = e,
            touches,
            pointerX,
            pointerY,
            i,
            dx,
            dy;

        if (!enabled || _isMultiTouching || !self.isPressed || !e) {
          isPreventingDefault && e && enabled && _preventDefault(e);
          return;
        }

        self.pointerEvent = e;
        touches = e.changedTouches;

        if (touches) {
          e = touches[0];

          if (e !== touch && e.identifier !== touchID) {
            i = touches.length;

            while (--i > -1 && (e = touches[i]).identifier !== touchID && e.target !== target) {}

            if (i < 0) {
              return;
            }
          }
        } else if (e.pointerId && touchID && e.pointerId !== touchID) {
          return;
        }

        if (touchEventTarget && allowNativeTouchScrolling && !touchDragAxis) {
          _point1.x = e.pageX;
          _point1.y = e.pageY;
          matrix && matrix.apply(_point1, _point1);
          pointerX = _point1.x;
          pointerY = _point1.y;
          dx = Math.abs(pointerX - startPointerX);
          dy = Math.abs(pointerY - startPointerY);

          if (dx !== dy && (dx > minimumMovement || dy > minimumMovement) || _isAndroid && allowNativeTouchScrolling === touchDragAxis) {
            touchDragAxis = dx > dy && allowX ? "x" : "y";

            if (allowNativeTouchScrolling && touchDragAxis !== allowNativeTouchScrolling) {
              _addListener(_win$1, "touchforcechange", _preventDefault);
            }

            if (self.vars.lockAxisOnTouchScroll !== false && allowX && allowY) {
              self.lockedAxis = touchDragAxis === "x" ? "y" : "x";
              _isFunction(self.vars.onLockAxis) && self.vars.onLockAxis.call(self, originalEvent);
            }

            if (_isAndroid && allowNativeTouchScrolling === touchDragAxis) {
              onRelease(originalEvent);
              return;
            }
          }
        }

        if (!self.allowEventDefault && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling !== touchDragAxis) && originalEvent.cancelable !== false) {
          _preventDefault(originalEvent);

          isPreventingDefault = true;
        } else if (isPreventingDefault) {
          isPreventingDefault = false;
        }

        if (self.autoScroll) {
          checkAutoScrollBounds = true;
        }

        setPointerPosition(e.pageX, e.pageY, hasMoveCallback);
      },
          setPointerPosition = function setPointerPosition(pointerX, pointerY, invokeOnMove) {
        var dragTolerance = 1 - self.dragResistance,
            edgeTolerance = 1 - self.edgeResistance,
            prevPointerX = self.pointerX,
            prevPointerY = self.pointerY,
            prevStartElementY = startElementY,
            prevX = self.x,
            prevY = self.y,
            prevEndX = self.endX,
            prevEndY = self.endY,
            prevEndRotation = self.endRotation,
            prevDirty = dirty,
            xChange,
            yChange,
            x,
            y,
            dif,
            temp;
        self.pointerX = pointerX;
        self.pointerY = pointerY;

        if (isFixed) {
          pointerX -= _getDocScrollLeft$1(ownerDoc);
          pointerY -= _getDocScrollTop$1(ownerDoc);
        }

        if (rotationMode) {
          y = Math.atan2(rotationOrigin.y - pointerY, pointerX - rotationOrigin.x) * _RAD2DEG;
          dif = self.y - y;

          if (dif > 180) {
            startElementY -= 360;
            self.y = y;
          } else if (dif < -180) {
            startElementY += 360;
            self.y = y;
          }

          if (self.x !== startElementX || Math.abs(startElementY - y) > minimumMovement) {
            self.y = y;
            x = startElementX + (startElementY - y) * dragTolerance;
          } else {
            x = startElementX;
          }
        } else {
          if (matrix) {
            temp = pointerX * matrix.a + pointerY * matrix.c + matrix.e;
            pointerY = pointerX * matrix.b + pointerY * matrix.d + matrix.f;
            pointerX = temp;
          }

          yChange = pointerY - startPointerY;
          xChange = pointerX - startPointerX;

          if (yChange < minimumMovement && yChange > -minimumMovement) {
            yChange = 0;
          }

          if (xChange < minimumMovement && xChange > -minimumMovement) {
            xChange = 0;
          }

          if ((self.lockAxis || self.lockedAxis) && (xChange || yChange)) {
            temp = self.lockedAxis;

            if (!temp) {
              self.lockedAxis = temp = allowX && Math.abs(xChange) > Math.abs(yChange) ? "y" : allowY ? "x" : null;

              if (temp && _isFunction(self.vars.onLockAxis)) {
                self.vars.onLockAxis.call(self, self.pointerEvent);
              }
            }

            if (temp === "y") {
              yChange = 0;
            } else if (temp === "x") {
              xChange = 0;
            }
          }

          x = _round(startElementX + xChange * dragTolerance);
          y = _round(startElementY + yChange * dragTolerance);
        }

        if ((snapX || snapY || snapXY) && (self.x !== x || self.y !== y && !rotationMode)) {
          if (snapXY) {
            _temp1.x = x;
            _temp1.y = y;
            temp = snapXY(_temp1);
            x = _round(temp.x);
            y = _round(temp.y);
          }

          if (snapX) {
            x = _round(snapX(x));
          }

          if (snapY) {
            y = _round(snapY(y));
          }
        } else if (hasBounds) {
          if (x > maxX) {
            x = maxX + Math.round((x - maxX) * edgeTolerance);
          } else if (x < minX) {
            x = minX + Math.round((x - minX) * edgeTolerance);
          }

          if (!rotationMode) {
            if (y > maxY) {
              y = Math.round(maxY + (y - maxY) * edgeTolerance);
            } else if (y < minY) {
              y = Math.round(minY + (y - minY) * edgeTolerance);
            }
          }
        }

        if (self.x !== x || self.y !== y && !rotationMode) {
          if (rotationMode) {
            self.endRotation = self.x = self.endX = x;
            dirty = true;
          } else {
            if (allowY) {
              self.y = self.endY = y;
              dirty = true;
            }

            if (allowX) {
              self.x = self.endX = x;
              dirty = true;
            }
          }

          if (!invokeOnMove || _dispatchEvent(self, "move", "onMove") !== false) {
            if (!self.isDragging && self.isPressed) {
              self.isDragging = true;

              _dispatchEvent(self, "dragstart", "onDragStart");
            }
          } else {
            self.pointerX = prevPointerX;
            self.pointerY = prevPointerY;
            startElementY = prevStartElementY;
            self.x = prevX;
            self.y = prevY;
            self.endX = prevEndX;
            self.endY = prevEndY;
            self.endRotation = prevEndRotation;
            dirty = prevDirty;
          }
        }
      },
          onRelease = function onRelease(e, force) {
        if (!enabled || !self.isPressed || e && touchID != null && !force && (e.pointerId && e.pointerId !== touchID && e.target !== target || e.changedTouches && !_hasTouchID(e.changedTouches, touchID))) {
          isPreventingDefault && e && enabled && _preventDefault(e);
          return;
        }

        self.isPressed = false;
        var originalEvent = e,
            wasDragging = self.isDragging,
            isContextMenuRelease = self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2),
            placeholderDelayedCall = gsap.delayedCall(0.001, removePlaceholder),
            touches,
            i,
            syntheticEvent,
            eventTarget,
            syntheticClick;

        if (touchEventTarget) {
          _removeListener(touchEventTarget, "touchend", onRelease);

          _removeListener(touchEventTarget, "touchmove", onMove);

          _removeListener(touchEventTarget, "touchcancel", onRelease);

          _removeListener(ownerDoc, "touchstart", _onMultiTouchDocument);
        } else {
          _removeListener(ownerDoc, "mousemove", onMove);
        }

        _removeListener(_win$1, "touchforcechange", _preventDefault);

        if (!_supportsPointer || !touchEventTarget) {
          _removeListener(ownerDoc, "mouseup", onRelease);

          e && e.target && _removeListener(e.target, "mouseup", onRelease);
        }

        dirty = false;

        if (wasDragging) {
          dragEndTime = _lastDragTime = _getTime();
          self.isDragging = false;
        }

        if (isClicking && !isContextMenuRelease) {
          if (e) {
            _removeListener(e.target, "change", onRelease);

            self.pointerEvent = originalEvent;
          }

          _setSelectable(triggers, false);

          _dispatchEvent(self, "release", "onRelease");

          _dispatchEvent(self, "click", "onClick");

          isClicking = false;
          return;
        }

        _removeFromRenderQueue(render);

        if (!rotationMode) {
          i = triggers.length;

          while (--i > -1) {
            _setStyle(triggers[i], "cursor", vars.cursor || (vars.cursor !== false ? _defaultCursor : null));
          }
        }

        _dragCount--;

        if (e) {
          touches = e.changedTouches;

          if (touches) {
            e = touches[0];

            if (e !== touch && e.identifier !== touchID) {
              i = touches.length;

              while (--i > -1 && (e = touches[i]).identifier !== touchID && e.target !== target) {}

              if (i < 0) {
                return;
              }
            }
          }

          self.pointerEvent = originalEvent;
          self.pointerX = e.pageX;
          self.pointerY = e.pageY;
        }

        if (isContextMenuRelease && originalEvent) {
          _preventDefault(originalEvent);

          isPreventingDefault = true;

          _dispatchEvent(self, "release", "onRelease");
        } else if (originalEvent && !wasDragging) {
          isPreventingDefault = false;

          if (interrupted && (vars.snap || vars.bounds)) {
            animate(vars.inertia || vars.throwProps);
          }

          _dispatchEvent(self, "release", "onRelease");

          if ((!_isAndroid || originalEvent.type !== "touchmove") && originalEvent.type.indexOf("cancel") === -1) {
            _dispatchEvent(self, "click", "onClick");

            if (_getTime() - clickTime < 300) {
              _dispatchEvent(self, "doubleclick", "onDoubleClick");
            }

            eventTarget = originalEvent.target || target;
            clickTime = _getTime();

            syntheticClick = function syntheticClick() {
              if (clickTime !== clickDispatch && self.enabled() && !self.isPressed && !originalEvent.defaultPrevented) {
                if (eventTarget.click) {
                  eventTarget.click();
                } else if (ownerDoc.createEvent) {
                  syntheticEvent = ownerDoc.createEvent("MouseEvents");
                  syntheticEvent.initMouseEvent("click", true, true, _win$1, 1, self.pointerEvent.screenX, self.pointerEvent.screenY, self.pointerX, self.pointerY, false, false, false, false, 0, null);
                  eventTarget.dispatchEvent(syntheticEvent);
                }
              }
            };

            if (!_isAndroid && !originalEvent.defaultPrevented) {
              gsap.delayedCall(0.05, syntheticClick);
            }
          }
        } else {
          animate(vars.inertia || vars.throwProps);

          if (!self.allowEventDefault && originalEvent && (vars.dragClickables !== false || !isClickable.call(self, originalEvent.target)) && wasDragging && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling === touchDragAxis) && originalEvent.cancelable !== false) {
            isPreventingDefault = true;

            _preventDefault(originalEvent);
          } else {
            isPreventingDefault = false;
          }

          _dispatchEvent(self, "release", "onRelease");
        }

        isTweening() && placeholderDelayedCall.duration(self.tween.duration());
        wasDragging && _dispatchEvent(self, "dragend", "onDragEnd");
        return true;
      },
          updateScroll = function updateScroll(e) {
        if (e && self.isDragging && !scrollProxy) {
          var parent = e.target || target.parentNode,
              deltaX = parent.scrollLeft - parent._gsScrollX,
              deltaY = parent.scrollTop - parent._gsScrollY;

          if (deltaX || deltaY) {
            if (matrix) {
              startPointerX -= deltaX * matrix.a + deltaY * matrix.c;
              startPointerY -= deltaY * matrix.d + deltaX * matrix.b;
            } else {
              startPointerX -= deltaX;
              startPointerY -= deltaY;
            }

            parent._gsScrollX += deltaX;
            parent._gsScrollY += deltaY;
            setPointerPosition(self.pointerX, self.pointerY);
          }
        }
      },
          onClick = function onClick(e) {
        var time = _getTime(),
            recentlyClicked = time - clickTime < 40,
            recentlyDragged = time - dragEndTime < 40,
            alreadyDispatched = recentlyClicked && clickDispatch === clickTime,
            defaultPrevented = self.pointerEvent && self.pointerEvent.defaultPrevented,
            alreadyDispatchedTrusted = recentlyClicked && trustedClickDispatch === clickTime,
            trusted = e.isTrusted || e.isTrusted == null && recentlyClicked && alreadyDispatched;

        if ((alreadyDispatched || recentlyDragged && self.vars.suppressClickOnDrag !== false) && e.stopImmediatePropagation) {
          e.stopImmediatePropagation();
        }

        if (recentlyClicked && !(self.pointerEvent && self.pointerEvent.defaultPrevented) && (!alreadyDispatched || trusted && !alreadyDispatchedTrusted)) {
          if (trusted && alreadyDispatched) {
            trustedClickDispatch = clickTime;
          }

          clickDispatch = clickTime;
          return;
        }

        if (self.isPressed || recentlyDragged || recentlyClicked) {
          if (!trusted || !e.detail || !recentlyClicked || defaultPrevented) {
            _preventDefault(e);
          }
        }

        if (!recentlyClicked && !recentlyDragged) {
          e && e.target && (self.pointerEvent = e);

          _dispatchEvent(self, "click", "onClick");
        }
      },
          localizePoint = function localizePoint(p) {
        return matrix ? {
          x: p.x * matrix.a + p.y * matrix.c + matrix.e,
          y: p.x * matrix.b + p.y * matrix.d + matrix.f
        } : {
          x: p.x,
          y: p.y
        };
      };

      old = Draggable.get(target);
      old && old.kill();

      _this2.startDrag = function (event, align) {
        var r1, r2, p1, p2;
        onPress(event || self.pointerEvent, true);

        if (align && !self.hitTest(event || self.pointerEvent)) {
          r1 = _parseRect(event || self.pointerEvent);
          r2 = _parseRect(target);
          p1 = localizePoint({
            x: r1.left + r1.width / 2,
            y: r1.top + r1.height / 2
          });
          p2 = localizePoint({
            x: r2.left + r2.width / 2,
            y: r2.top + r2.height / 2
          });
          startPointerX -= p1.x - p2.x;
          startPointerY -= p1.y - p2.y;
        }

        if (!self.isDragging) {
          self.isDragging = true;

          _dispatchEvent(self, "dragstart", "onDragStart");
        }
      };

      _this2.drag = onMove;

      _this2.endDrag = function (e) {
        return onRelease(e || self.pointerEvent, true);
      };

      _this2.timeSinceDrag = function () {
        return self.isDragging ? 0 : (_getTime() - dragEndTime) / 1000;
      };

      _this2.timeSinceClick = function () {
        return (_getTime() - clickTime) / 1000;
      };

      _this2.hitTest = function (target, threshold) {
        return Draggable.hitTest(self.target, target, threshold);
      };

      _this2.getDirection = function (from, diagonalThreshold) {
        var mode = from === "velocity" && InertiaPlugin ? from : _isObject(from) && !rotationMode ? "element" : "start",
            xChange,
            yChange,
            ratio,
            direction,
            r1,
            r2;

        if (mode === "element") {
          r1 = _parseRect(self.target);
          r2 = _parseRect(from);
        }

        xChange = mode === "start" ? self.x - startElementX : mode === "velocity" ? InertiaPlugin.getVelocity(target, xProp) : r1.left + r1.width / 2 - (r2.left + r2.width / 2);

        if (rotationMode) {
          return xChange < 0 ? "counter-clockwise" : "clockwise";
        } else {
          diagonalThreshold = diagonalThreshold || 2;
          yChange = mode === "start" ? self.y - startElementY : mode === "velocity" ? InertiaPlugin.getVelocity(target, yProp) : r1.top + r1.height / 2 - (r2.top + r2.height / 2);
          ratio = Math.abs(xChange / yChange);
          direction = ratio < 1 / diagonalThreshold ? "" : xChange < 0 ? "left" : "right";

          if (ratio < diagonalThreshold) {
            if (direction !== "") {
              direction += "-";
            }

            direction += yChange < 0 ? "up" : "down";
          }
        }

        return direction;
      };

      _this2.applyBounds = function (newBounds, sticky) {
        var x, y, forceZeroVelocity, e, parent, isRoot;

        if (newBounds && vars.bounds !== newBounds) {
          vars.bounds = newBounds;
          return self.update(true, sticky);
        }

        syncXY(true);
        calculateBounds();

        if (hasBounds && !isTweening()) {
          x = self.x;
          y = self.y;

          if (x > maxX) {
            x = maxX;
          } else if (x < minX) {
            x = minX;
          }

          if (y > maxY) {
            y = maxY;
          } else if (y < minY) {
            y = minY;
          }

          if (self.x !== x || self.y !== y) {
            forceZeroVelocity = true;
            self.x = self.endX = x;

            if (rotationMode) {
              self.endRotation = x;
            } else {
              self.y = self.endY = y;
            }

            dirty = true;
            render(true);

            if (self.autoScroll && !self.isDragging) {
              _recordMaxScrolls(target.parentNode);

              e = target;
              _windowProxy.scrollTop = _win$1.pageYOffset != null ? _win$1.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
              _windowProxy.scrollLeft = _win$1.pageXOffset != null ? _win$1.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;

              while (e && !isRoot) {
                isRoot = _isRoot(e.parentNode);
                parent = isRoot ? _windowProxy : e.parentNode;

                if (allowY && parent.scrollTop > parent._gsMaxScrollY) {
                  parent.scrollTop = parent._gsMaxScrollY;
                }

                if (allowX && parent.scrollLeft > parent._gsMaxScrollX) {
                  parent.scrollLeft = parent._gsMaxScrollX;
                }

                e = parent;
              }
            }
          }

          if (self.isThrowing && (forceZeroVelocity || self.endX > maxX || self.endX < minX || self.endY > maxY || self.endY < minY)) {
            animate(vars.inertia || vars.throwProps, forceZeroVelocity);
          }
        }

        return self;
      };

      _this2.update = function (applyBounds, sticky, ignoreExternalChanges) {
        var x = self.x,
            y = self.y;
        updateMatrix(!sticky);

        if (applyBounds) {
          self.applyBounds();
        } else {
          dirty && ignoreExternalChanges && render(true);
          syncXY(true);
        }

        if (sticky) {
          setPointerPosition(self.pointerX, self.pointerY);
          dirty && render(true);
        }

        if (self.isPressed && !sticky && (allowX && Math.abs(x - self.x) > 0.01 || allowY && Math.abs(y - self.y) > 0.01 && !rotationMode)) {
          recordStartPositions();
        }

        if (self.autoScroll) {
          _recordMaxScrolls(target.parentNode, self.isDragging);

          checkAutoScrollBounds = self.isDragging;
          render(true);

          _removeScrollListener(target, updateScroll);

          _addScrollListener(target, updateScroll);
        }

        return self;
      };

      _this2.enable = function (type) {
        var setVars = {
          lazy: true
        },
            id,
            i,
            trigger;

        if (!rotationMode && vars.cursor !== false) {
          setVars.cursor = vars.cursor || _defaultCursor;
        }

        if (gsap.utils.checkPrefix("touchCallout")) {
          setVars.touchCallout = "none";
        }

        if (type !== "soft") {
          _setTouchActionForAllDescendants(triggers, allowX === allowY ? "none" : vars.allowNativeTouchScrolling && target.scrollHeight === target.clientHeight === (target.scrollWidth === target.clientHeight) || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x");

          i = triggers.length;

          while (--i > -1) {
            trigger = triggers[i];
            _supportsPointer || _addListener(trigger, "mousedown", onPress);

            _addListener(trigger, "touchstart", onPress);

            _addListener(trigger, "click", onClick, true);

            gsap.set(trigger, setVars);

            if (trigger.getBBox && trigger.ownerSVGElement) {
              gsap.set(trigger.ownerSVGElement, {
                touchAction: allowX === allowY ? "none" : vars.allowNativeTouchScrolling || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x"
              });
            }

            vars.allowContextMenu || _addListener(trigger, "contextmenu", onContextMenu);
          }

          _setSelectable(triggers, false);
        }

        _addScrollListener(target, updateScroll);

        enabled = true;

        if (InertiaPlugin && type !== "soft") {
          InertiaPlugin.track(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
        }

        target._gsDragID = id = "d" + _lookupCount++;
        _lookup[id] = self;

        if (scrollProxy) {
          scrollProxy.enable();
          scrollProxy.element._gsDragID = id;
        }

        (vars.bounds || rotationMode) && recordStartPositions();
        vars.bounds && self.applyBounds();
        return self;
      };

      _this2.disable = function (type) {
        var dragging = self.isDragging,
            i,
            trigger;

        if (!rotationMode) {
          i = triggers.length;

          while (--i > -1) {
            _setStyle(triggers[i], "cursor", null);
          }
        }

        if (type !== "soft") {
          _setTouchActionForAllDescendants(triggers, null);

          i = triggers.length;

          while (--i > -1) {
            trigger = triggers[i];

            _setStyle(trigger, "touchCallout", null);

            _removeListener(trigger, "mousedown", onPress);

            _removeListener(trigger, "touchstart", onPress);

            _removeListener(trigger, "click", onClick);

            _removeListener(trigger, "contextmenu", onContextMenu);
          }

          _setSelectable(triggers, true);

          if (touchEventTarget) {
            _removeListener(touchEventTarget, "touchcancel", onRelease);

            _removeListener(touchEventTarget, "touchend", onRelease);

            _removeListener(touchEventTarget, "touchmove", onMove);
          }

          _removeListener(ownerDoc, "mouseup", onRelease);

          _removeListener(ownerDoc, "mousemove", onMove);
        }

        _removeScrollListener(target, updateScroll);

        enabled = false;
        InertiaPlugin && type !== "soft" && InertiaPlugin.untrack(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
        scrollProxy && scrollProxy.disable();

        _removeFromRenderQueue(render);

        self.isDragging = self.isPressed = isClicking = false;
        dragging && _dispatchEvent(self, "dragend", "onDragEnd");
        return self;
      };

      _this2.enabled = function (value, type) {
        return arguments.length ? value ? self.enable(type) : self.disable(type) : enabled;
      };

      _this2.kill = function () {
        self.isThrowing = false;
        self.tween && self.tween.kill();
        self.disable();
        gsap.set(triggers, {
          clearProps: "userSelect"
        });
        delete _lookup[target._gsDragID];
        return self;
      };

      if (~type.indexOf("scroll")) {
        scrollProxy = _this2.scrollProxy = new ScrollProxy(target, _extend({
          onKill: function onKill() {
            self.isPressed && onRelease(null);
          }
        }, vars));
        target.style.overflowY = allowY && !_isTouchDevice ? "auto" : "hidden";
        target.style.overflowX = allowX && !_isTouchDevice ? "auto" : "hidden";
        target = scrollProxy.content;
      }

      if (rotationMode) {
        killProps.rotation = 1;
      } else {
        if (allowX) {
          killProps[xProp] = 1;
        }

        if (allowY) {
          killProps[yProp] = 1;
        }
      }

      gsCache.force3D = "force3D" in vars ? vars.force3D : true;

      _this2.enable();

      return _this2;
    }

    Draggable.register = function register(core) {
      gsap = core;

      _initCore();
    };

    Draggable.create = function create(targets, vars) {
      _coreInitted || _initCore(true);
      return _toArray(targets).map(function (target) {
        return new Draggable(target, vars);
      });
    };

    Draggable.get = function get(target) {
      return _lookup[(_toArray(target)[0] || {})._gsDragID];
    };

    Draggable.timeSinceDrag = function timeSinceDrag() {
      return (_getTime() - _lastDragTime) / 1000;
    };

    Draggable.hitTest = function hitTest(obj1, obj2, threshold) {
      if (obj1 === obj2) {
        return false;
      }

      var r1 = _parseRect(obj1),
          r2 = _parseRect(obj2),
          top = r1.top,
          left = r1.left,
          right = r1.right,
          bottom = r1.bottom,
          width = r1.width,
          height = r1.height,
          isOutside = r2.left > right || r2.right < left || r2.top > bottom || r2.bottom < top,
          overlap,
          area,
          isRatio;

      if (isOutside || !threshold) {
        return !isOutside;
      }

      isRatio = (threshold + "").indexOf("%") !== -1;
      threshold = parseFloat(threshold) || 0;
      overlap = {
        left: Math.max(left, r2.left),
        top: Math.max(top, r2.top)
      };
      overlap.width = Math.min(right, r2.right) - overlap.left;
      overlap.height = Math.min(bottom, r2.bottom) - overlap.top;

      if (overlap.width < 0 || overlap.height < 0) {
        return false;
      }

      if (isRatio) {
        threshold *= 0.01;
        area = overlap.width * overlap.height;
        return area >= width * height * threshold || area >= r2.width * r2.height * threshold;
      }

      return overlap.width > threshold && overlap.height > threshold;
    };

    return Draggable;
  }(EventDispatcher);

  _setDefaults(Draggable.prototype, {
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    isDragging: false,
    isPressed: false
  });

  Draggable.zIndex = 1000;
  Draggable.version = "3.6.1";
  _getGSAP() && gsap.registerPlugin(Draggable);

  exports.Draggable = Draggable;
  exports.default = Draggable;

  if (typeof(window) === 'undefined' || window !== exports) {Object.defineProperty(exports, '__esModule', { value: true });} else {delete window.default;}

})));

;(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

	/*!
	 * EaselPlugin 3.6.1
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2021, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/
	var gsap,
	    _coreInitted,
	    _win,
	    _createJS,
	    _ColorFilter,
	    _ColorMatrixFilter,
	    _colorProps = "redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset".split(","),
	    _windowExists = function _windowExists() {
	  return typeof window !== "undefined";
	},
	    _getGSAP = function _getGSAP() {
	  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
	},
	    _getCreateJS = function _getCreateJS() {
	  return _createJS || _win && _win.createjs || _win || {};
	},
	    _warn = function _warn(message) {
	  return console.warn(message);
	},
	    _cache = function _cache(target) {
	  var b = target.getBounds && target.getBounds();

	  if (!b) {
	    b = target.nominalBounds || {
	      x: 0,
	      y: 0,
	      width: 100,
	      height: 100
	    };
	    target.setBounds && target.setBounds(b.x, b.y, b.width, b.height);
	  }

	  target.cache && target.cache(b.x, b.y, b.width, b.height);

	  _warn("EaselPlugin: for filters to display in EaselJS, you must call the object's cache() method first. GSAP attempted to use the target's getBounds() for the cache but that may not be completely accurate. " + target);
	},
	    _parseColorFilter = function _parseColorFilter(target, v, plugin) {
	  if (!_ColorFilter) {
	    _ColorFilter = _getCreateJS().ColorFilter;

	    if (!_ColorFilter) {
	      _warn("EaselPlugin error: The EaselJS ColorFilter JavaScript file wasn't loaded.");
	    }
	  }

	  var filters = target.filters || [],
	      i = filters.length,
	      c,
	      s,
	      e,
	      a,
	      p,
	      pt;

	  while (i--) {
	    if (filters[i] instanceof _ColorFilter) {
	      s = filters[i];
	      break;
	    }
	  }

	  if (!s) {
	    s = new _ColorFilter();
	    filters.push(s);
	    target.filters = filters;
	  }

	  e = s.clone();

	  if (v.tint != null) {
	    c = gsap.utils.splitColor(v.tint);
	    a = v.tintAmount != null ? +v.tintAmount : 1;
	    e.redOffset = +c[0] * a;
	    e.greenOffset = +c[1] * a;
	    e.blueOffset = +c[2] * a;
	    e.redMultiplier = e.greenMultiplier = e.blueMultiplier = 1 - a;
	  } else {
	    for (p in v) {
	      if (p !== "exposure") if (p !== "brightness") {
	        e[p] = +v[p];
	      }
	    }
	  }

	  if (v.exposure != null) {
	    e.redOffset = e.greenOffset = e.blueOffset = 255 * (+v.exposure - 1);
	    e.redMultiplier = e.greenMultiplier = e.blueMultiplier = 1;
	  } else if (v.brightness != null) {
	    a = +v.brightness - 1;
	    e.redOffset = e.greenOffset = e.blueOffset = a > 0 ? a * 255 : 0;
	    e.redMultiplier = e.greenMultiplier = e.blueMultiplier = 1 - Math.abs(a);
	  }

	  i = 8;

	  while (i--) {
	    p = _colorProps[i];

	    if (s[p] !== e[p]) {
	      pt = plugin.add(s, p, s[p], e[p]);

	      if (pt) {
	        pt.op = "easel_colorFilter";
	      }
	    }
	  }

	  plugin._props.push("easel_colorFilter");

	  if (!target.cacheID) {
	    _cache(target);
	  }
	},
	    _idMatrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
	    _lumR = 0.212671,
	    _lumG = 0.715160,
	    _lumB = 0.072169,
	    _applyMatrix = function _applyMatrix(m, m2) {
	  if (!(m instanceof Array) || !(m2 instanceof Array)) {
	    return m2;
	  }

	  var temp = [],
	      i = 0,
	      z = 0,
	      y,
	      x;

	  for (y = 0; y < 4; y++) {
	    for (x = 0; x < 5; x++) {
	      z = x === 4 ? m[i + 4] : 0;
	      temp[i + x] = m[i] * m2[x] + m[i + 1] * m2[x + 5] + m[i + 2] * m2[x + 10] + m[i + 3] * m2[x + 15] + z;
	    }

	    i += 5;
	  }

	  return temp;
	},
	    _setSaturation = function _setSaturation(m, n) {
	  if (isNaN(n)) {
	    return m;
	  }

	  var inv = 1 - n,
	      r = inv * _lumR,
	      g = inv * _lumG,
	      b = inv * _lumB;
	  return _applyMatrix([r + n, g, b, 0, 0, r, g + n, b, 0, 0, r, g, b + n, 0, 0, 0, 0, 0, 1, 0], m);
	},
	    _colorize = function _colorize(m, color, amount) {
	  if (isNaN(amount)) {
	    amount = 1;
	  }

	  var c = gsap.utils.splitColor(color),
	      r = c[0] / 255,
	      g = c[1] / 255,
	      b = c[2] / 255,
	      inv = 1 - amount;
	  return _applyMatrix([inv + amount * r * _lumR, amount * r * _lumG, amount * r * _lumB, 0, 0, amount * g * _lumR, inv + amount * g * _lumG, amount * g * _lumB, 0, 0, amount * b * _lumR, amount * b * _lumG, inv + amount * b * _lumB, 0, 0, 0, 0, 0, 1, 0], m);
	},
	    _setHue = function _setHue(m, n) {
	  if (isNaN(n)) {
	    return m;
	  }

	  n *= Math.PI / 180;
	  var c = Math.cos(n),
	      s = Math.sin(n);
	  return _applyMatrix([_lumR + c * (1 - _lumR) + s * -_lumR, _lumG + c * -_lumG + s * -_lumG, _lumB + c * -_lumB + s * (1 - _lumB), 0, 0, _lumR + c * -_lumR + s * 0.143, _lumG + c * (1 - _lumG) + s * 0.14, _lumB + c * -_lumB + s * -0.283, 0, 0, _lumR + c * -_lumR + s * -(1 - _lumR), _lumG + c * -_lumG + s * _lumG, _lumB + c * (1 - _lumB) + s * _lumB, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], m);
	},
	    _setContrast = function _setContrast(m, n) {
	  if (isNaN(n)) {
	    return m;
	  }

	  n += 0.01;
	  return _applyMatrix([n, 0, 0, 0, 128 * (1 - n), 0, n, 0, 0, 128 * (1 - n), 0, 0, n, 0, 128 * (1 - n), 0, 0, 0, 1, 0], m);
	},
	    _parseColorMatrixFilter = function _parseColorMatrixFilter(target, v, plugin) {
	  if (!_ColorMatrixFilter) {
	    _ColorMatrixFilter = _getCreateJS().ColorMatrixFilter;

	    if (!_ColorMatrixFilter) {
	      _warn("EaselPlugin: The EaselJS ColorMatrixFilter JavaScript file wasn't loaded.");
	    }
	  }

	  var filters = target.filters || [],
	      i = filters.length,
	      matrix,
	      startMatrix,
	      s,
	      pg;

	  while (--i > -1) {
	    if (filters[i] instanceof _ColorMatrixFilter) {
	      s = filters[i];
	      break;
	    }
	  }

	  if (!s) {
	    s = new _ColorMatrixFilter(_idMatrix.slice());
	    filters.push(s);
	    target.filters = filters;
	  }

	  startMatrix = s.matrix;
	  matrix = _idMatrix.slice();

	  if (v.colorize != null) {
	    matrix = _colorize(matrix, v.colorize, Number(v.colorizeAmount));
	  }

	  if (v.contrast != null) {
	    matrix = _setContrast(matrix, Number(v.contrast));
	  }

	  if (v.hue != null) {
	    matrix = _setHue(matrix, Number(v.hue));
	  }

	  if (v.saturation != null) {
	    matrix = _setSaturation(matrix, Number(v.saturation));
	  }

	  i = matrix.length;

	  while (--i > -1) {
	    if (matrix[i] !== startMatrix[i]) {
	      pg = plugin.add(startMatrix, i, startMatrix[i], matrix[i]);

	      if (pg) {
	        pg.op = "easel_colorMatrixFilter";
	      }
	    }
	  }

	  plugin._props.push("easel_colorMatrixFilter");

	  if (!target.cacheID) {
	    _cache();
	  }

	  plugin._matrix = startMatrix;
	},
	    _initCore = function _initCore(core) {
	  gsap = core || _getGSAP();

	  if (_windowExists()) {
	    _win = window;
	  }

	  if (gsap) {
	    _coreInitted = 1;
	  }
	};

	var EaselPlugin = {
	  version: "3.6.1",
	  name: "easel",
	  init: function init(target, value, tween, index, targets) {
	    if (!_coreInitted) {
	      _initCore();

	      if (!gsap) {
	        _warn("Please gsap.registerPlugin(EaselPlugin)");
	      }
	    }

	    this.target = target;
	    var p, pt, tint, colorMatrix, end, labels, i;

	    for (p in value) {
	      end = value[p];

	      if (p === "colorFilter" || p === "tint" || p === "tintAmount" || p === "exposure" || p === "brightness") {
	        if (!tint) {
	          _parseColorFilter(target, value.colorFilter || value, this);

	          tint = true;
	        }
	      } else if (p === "saturation" || p === "contrast" || p === "hue" || p === "colorize" || p === "colorizeAmount") {
	        if (!colorMatrix) {
	          _parseColorMatrixFilter(target, value.colorMatrixFilter || value, this);

	          colorMatrix = true;
	        }
	      } else if (p === "frame") {
	        if (typeof end === "string" && end.charAt(1) !== "=" && (labels = target.labels)) {
	          for (i = 0; i < labels.length; i++) {
	            if (labels[i].label === end) {
	              end = labels[i].position;
	            }
	          }
	        }

	        pt = this.add(target, "gotoAndStop", target.currentFrame, end, index, targets, Math.round);

	        if (pt) {
	          pt.op = p;
	        }
	      } else if (target[p] != null) {
	        this.add(target, p, "get", end);
	      }
	    }
	  },
	  render: function render(ratio, data) {
	    var pt = data._pt;

	    while (pt) {
	      pt.r(ratio, pt.d);
	      pt = pt._next;
	    }

	    if (data.target.cacheID) {
	      data.target.updateCache();
	    }
	  },
	  register: _initCore
	};

	EaselPlugin.registerCreateJS = function (createjs) {
	  _createJS = createjs;
	};

	_getGSAP() && gsap.registerPlugin(EaselPlugin);

	exports.EaselPlugin = EaselPlugin;
	exports.default = EaselPlugin;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

;(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

	/*!
	 * EasePack 3.6.1
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2021, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/
	var gsap,
	    _registerEase,
	    _getGSAP = function _getGSAP() {
	  return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
	},
	    _boolean = function _boolean(value, defaultValue) {
	  return !!(typeof value === "undefined" ? defaultValue : value && !~(value + "").indexOf("false"));
	},
	    _initCore = function _initCore(core) {
	  gsap = core || _getGSAP();

	  if (gsap) {
	    _registerEase = gsap.registerEase;

	    var eases = gsap.parseEase(),
	        createConfig = function createConfig(ease) {
	      return function (ratio) {
	        var y = 0.5 + ratio / 2;

	        ease.config = function (p) {
	          return ease(2 * (1 - p) * p * y + p * p);
	        };
	      };
	    },
	        p;

	    for (p in eases) {
	      if (!eases[p].config) {
	        createConfig(eases[p]);
	      }
	    }

	    _registerEase("slow", SlowMo);

	    _registerEase("expoScale", ExpoScaleEase);

	    _registerEase("rough", RoughEase);

	    for (p in EasePack) {
	      p !== "version" && gsap.core.globals(p, EasePack[p]);
	    }
	  }
	},
	    _createSlowMo = function _createSlowMo(linearRatio, power, yoyoMode) {
	  linearRatio = Math.min(1, linearRatio || 0.7);

	  var pow = linearRatio < 1 ? power || power === 0 ? power : 0.7 : 0,
	      p1 = (1 - linearRatio) / 2,
	      p3 = p1 + linearRatio,
	      calcEnd = _boolean(yoyoMode);

	  return function (p) {
	    var r = p + (0.5 - p) * pow;
	    return p < p1 ? calcEnd ? 1 - (p = 1 - p / p1) * p : r - (p = 1 - p / p1) * p * p * p * r : p > p3 ? calcEnd ? p === 1 ? 0 : 1 - (p = (p - p3) / p1) * p : r + (p - r) * (p = (p - p3) / p1) * p * p * p : calcEnd ? 1 : r;
	  };
	},
	    _createExpoScale = function _createExpoScale(start, end, ease) {
	  var p1 = Math.log(end / start),
	      p2 = end - start;
	  ease && (ease = gsap.parseEase(ease));
	  return function (p) {
	    return (start * Math.exp(p1 * (ease ? ease(p) : p)) - start) / p2;
	  };
	},
	    EasePoint = function EasePoint(time, value, next) {
	  this.t = time;
	  this.v = value;

	  if (next) {
	    this.next = next;
	    next.prev = this;
	    this.c = next.v - value;
	    this.gap = next.t - time;
	  }
	},
	    _createRoughEase = function _createRoughEase(vars) {
	  if (typeof vars !== "object") {
	    vars = {
	      points: +vars || 20
	    };
	  }

	  var taper = vars.taper || "none",
	      a = [],
	      cnt = 0,
	      points = (+vars.points || 20) | 0,
	      i = points,
	      randomize = _boolean(vars.randomize, true),
	      clamp = _boolean(vars.clamp),
	      template = gsap ? gsap.parseEase(vars.template) : 0,
	      strength = (+vars.strength || 1) * 0.4,
	      x,
	      y,
	      bump,
	      invX,
	      obj,
	      pnt,
	      recent;

	  while (--i > -1) {
	    x = randomize ? Math.random() : 1 / points * i;
	    y = template ? template(x) : x;

	    if (taper === "none") {
	      bump = strength;
	    } else if (taper === "out") {
	      invX = 1 - x;
	      bump = invX * invX * strength;
	    } else if (taper === "in") {
	      bump = x * x * strength;
	    } else if (x < 0.5) {
	      invX = x * 2;
	      bump = invX * invX * 0.5 * strength;
	    } else {
	      invX = (1 - x) * 2;
	      bump = invX * invX * 0.5 * strength;
	    }

	    if (randomize) {
	      y += Math.random() * bump - bump * 0.5;
	    } else if (i % 2) {
	      y += bump * 0.5;
	    } else {
	      y -= bump * 0.5;
	    }

	    if (clamp) {
	      if (y > 1) {
	        y = 1;
	      } else if (y < 0) {
	        y = 0;
	      }
	    }

	    a[cnt++] = {
	      x: x,
	      y: y
	    };
	  }

	  a.sort(function (a, b) {
	    return a.x - b.x;
	  });
	  pnt = new EasePoint(1, 1, null);
	  i = points;

	  while (i--) {
	    obj = a[i];
	    pnt = new EasePoint(obj.x, obj.y, pnt);
	  }

	  recent = new EasePoint(0, 0, pnt.t ? pnt : pnt.next);
	  return function (p) {
	    var pnt = recent;

	    if (p > pnt.t) {
	      while (pnt.next && p >= pnt.t) {
	        pnt = pnt.next;
	      }

	      pnt = pnt.prev;
	    } else {
	      while (pnt.prev && p <= pnt.t) {
	        pnt = pnt.prev;
	      }
	    }

	    recent = pnt;
	    return pnt.v + (p - pnt.t) / pnt.gap * pnt.c;
	  };
	};

	var SlowMo = _createSlowMo(0.7);
	SlowMo.ease = SlowMo;
	SlowMo.config = _createSlowMo;
	var ExpoScaleEase = _createExpoScale(1, 2);
	ExpoScaleEase.config = _createExpoScale;
	var RoughEase = _createRoughEase();
	RoughEase.ease = RoughEase;
	RoughEase.config = _createRoughEase;
	var EasePack = {
	  SlowMo: SlowMo,
	  RoughEase: RoughEase,
	  ExpoScaleEase: ExpoScaleEase
	};

	for (var p in EasePack) {
	  EasePack[p].register = _initCore;
	  EasePack[p].version = "3.6.1";
	}

	_getGSAP() && gsap.registerPlugin(SlowMo);

	exports.EasePack = EasePack;
	exports.ExpoScaleEase = ExpoScaleEase;
	exports.RoughEase = RoughEase;
	exports.SlowMo = SlowMo;
	exports.default = EasePack;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

;(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

	var _svgPathExp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
	    _numbersExp = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
	    _scientific = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,
	    _selectorExp = /(^[#\.][a-z]|[a-y][a-z])/i,
	    _DEG2RAD = Math.PI / 180,
	    _RAD2DEG = 180 / Math.PI,
	    _sin = Math.sin,
	    _cos = Math.cos,
	    _abs = Math.abs,
	    _sqrt = Math.sqrt,
	    _atan2 = Math.atan2,
	    _largeNum = 1e8,
	    _isString = function _isString(value) {
	  return typeof value === "string";
	},
	    _isNumber = function _isNumber(value) {
	  return typeof value === "number";
	},
	    _isUndefined = function _isUndefined(value) {
	  return typeof value === "undefined";
	},
	    _temp = {},
	    _temp2 = {},
	    _roundingNum = 1e5,
	    _wrapProgress = function _wrapProgress(progress) {
	  return Math.round((progress + _largeNum) % 1 * _roundingNum) / _roundingNum || (progress < 0 ? 0 : 1);
	},
	    _round = function _round(value) {
	  return Math.round(value * _roundingNum) / _roundingNum || 0;
	},
	    _roundPrecise = function _roundPrecise(value) {
	  return Math.round(value * 1e10) / 1e10 || 0;
	},
	    _splitSegment = function _splitSegment(rawPath, segIndex, i, t) {
	  var segment = rawPath[segIndex],
	      shift = t === 1 ? 6 : subdivideSegment(segment, i, t);

	  if (shift && shift + i + 2 < segment.length) {
	    rawPath.splice(segIndex, 0, segment.slice(0, i + shift + 2));
	    segment.splice(0, i + shift);
	    return 1;
	  }
	},
	    _reverseRawPath = function _reverseRawPath(rawPath, skipOuter) {
	  var i = rawPath.length;
	  skipOuter || rawPath.reverse();

	  while (i--) {
	    rawPath[i].reversed || reverseSegment(rawPath[i]);
	  }
	},
	    _copyMetaData = function _copyMetaData(source, copy) {
	  copy.totalLength = source.totalLength;

	  if (source.samples) {
	    copy.samples = source.samples.slice(0);
	    copy.lookup = source.lookup.slice(0);
	    copy.minLength = source.minLength;
	    copy.resolution = source.resolution;
	  } else if (source.totalPoints) {
	    copy.totalPoints = source.totalPoints;
	  }

	  return copy;
	},
	    _appendOrMerge = function _appendOrMerge(rawPath, segment) {
	  var index = rawPath.length,
	      prevSeg = rawPath[index - 1] || [],
	      l = prevSeg.length;

	  if (index && segment[0] === prevSeg[l - 2] && segment[1] === prevSeg[l - 1]) {
	    segment = prevSeg.concat(segment.slice(2));
	    index--;
	  }

	  rawPath[index] = segment;
	};

	function getRawPath(value) {
	  value = _isString(value) && _selectorExp.test(value) ? document.querySelector(value) || value : value;
	  var e = value.getAttribute ? value : 0,
	      rawPath;

	  if (e && (value = value.getAttribute("d"))) {
	    if (!e._gsPath) {
	      e._gsPath = {};
	    }

	    rawPath = e._gsPath[value];
	    return rawPath && !rawPath._dirty ? rawPath : e._gsPath[value] = stringToRawPath(value);
	  }

	  return !value ? console.warn("Expecting a <path> element or an SVG path data string") : _isString(value) ? stringToRawPath(value) : _isNumber(value[0]) ? [value] : value;
	}
	function copyRawPath(rawPath) {
	  var a = [],
	      i = 0;

	  for (; i < rawPath.length; i++) {
	    a[i] = _copyMetaData(rawPath[i], rawPath[i].slice(0));
	  }

	  return _copyMetaData(rawPath, a);
	}
	function reverseSegment(segment) {
	  var i = 0,
	      y;
	  segment.reverse();

	  for (; i < segment.length; i += 2) {
	    y = segment[i];
	    segment[i] = segment[i + 1];
	    segment[i + 1] = y;
	  }

	  segment.reversed = !segment.reversed;
	}

	var _createPath = function _createPath(e, ignore) {
	  var path = document.createElementNS("http://www.w3.org/2000/svg", "path"),
	      attr = [].slice.call(e.attributes),
	      i = attr.length,
	      name;
	  ignore = "," + ignore + ",";

	  while (--i > -1) {
	    name = attr[i].nodeName.toLowerCase();

	    if (ignore.indexOf("," + name + ",") < 0) {
	      path.setAttributeNS(null, name, attr[i].nodeValue);
	    }
	  }

	  return path;
	},
	    _typeAttrs = {
	  rect: "rx,ry,x,y,width,height",
	  circle: "r,cx,cy",
	  ellipse: "rx,ry,cx,cy",
	  line: "x1,x2,y1,y2"
	},
	    _attrToObj = function _attrToObj(e, attrs) {
	  var props = attrs ? attrs.split(",") : [],
	      obj = {},
	      i = props.length;

	  while (--i > -1) {
	    obj[props[i]] = +e.getAttribute(props[i]) || 0;
	  }

	  return obj;
	};

	function convertToPath(element, swap) {
	  var type = element.tagName.toLowerCase(),
	      circ = 0.552284749831,
	      data,
	      x,
	      y,
	      r,
	      ry,
	      path,
	      rcirc,
	      rycirc,
	      points,
	      w,
	      h,
	      x2,
	      x3,
	      x4,
	      x5,
	      x6,
	      y2,
	      y3,
	      y4,
	      y5,
	      y6,
	      attr;

	  if (type === "path" || !element.getBBox) {
	    return element;
	  }

	  path = _createPath(element, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points");
	  attr = _attrToObj(element, _typeAttrs[type]);

	  if (type === "rect") {
	    r = attr.rx;
	    ry = attr.ry || r;
	    x = attr.x;
	    y = attr.y;
	    w = attr.width - r * 2;
	    h = attr.height - ry * 2;

	    if (r || ry) {
	      x2 = x + r * (1 - circ);
	      x3 = x + r;
	      x4 = x3 + w;
	      x5 = x4 + r * circ;
	      x6 = x4 + r;
	      y2 = y + ry * (1 - circ);
	      y3 = y + ry;
	      y4 = y3 + h;
	      y5 = y4 + ry * circ;
	      y6 = y4 + ry;
	      data = "M" + x6 + "," + y3 + " V" + y4 + " C" + [x6, y5, x5, y6, x4, y6, x4 - (x4 - x3) / 3, y6, x3 + (x4 - x3) / 3, y6, x3, y6, x2, y6, x, y5, x, y4, x, y4 - (y4 - y3) / 3, x, y3 + (y4 - y3) / 3, x, y3, x, y2, x2, y, x3, y, x3 + (x4 - x3) / 3, y, x4 - (x4 - x3) / 3, y, x4, y, x5, y, x6, y2, x6, y3].join(",") + "z";
	    } else {
	      data = "M" + (x + w) + "," + y + " v" + h + " h" + -w + " v" + -h + " h" + w + "z";
	    }
	  } else if (type === "circle" || type === "ellipse") {
	    if (type === "circle") {
	      r = ry = attr.r;
	      rycirc = r * circ;
	    } else {
	      r = attr.rx;
	      ry = attr.ry;
	      rycirc = ry * circ;
	    }

	    x = attr.cx;
	    y = attr.cy;
	    rcirc = r * circ;
	    data = "M" + (x + r) + "," + y + " C" + [x + r, y + rycirc, x + rcirc, y + ry, x, y + ry, x - rcirc, y + ry, x - r, y + rycirc, x - r, y, x - r, y - rycirc, x - rcirc, y - ry, x, y - ry, x + rcirc, y - ry, x + r, y - rycirc, x + r, y].join(",") + "z";
	  } else if (type === "line") {
	    data = "M" + attr.x1 + "," + attr.y1 + " L" + attr.x2 + "," + attr.y2;
	  } else if (type === "polyline" || type === "polygon") {
	    points = (element.getAttribute("points") + "").match(_numbersExp) || [];
	    x = points.shift();
	    y = points.shift();
	    data = "M" + x + "," + y + " L" + points.join(",");

	    if (type === "polygon") {
	      data += "," + x + "," + y + "z";
	    }
	  }

	  path.setAttribute("d", rawPathToString(path._gsRawPath = stringToRawPath(data)));

	  if (swap && element.parentNode) {
	    element.parentNode.insertBefore(path, element);
	    element.parentNode.removeChild(element);
	  }

	  return path;
	}

	function getRotationAtBezierT(segment, i, t) {
	  var a = segment[i],
	      b = segment[i + 2],
	      c = segment[i + 4],
	      x;
	  a += (b - a) * t;
	  b += (c - b) * t;
	  a += (b - a) * t;
	  x = b + (c + (segment[i + 6] - c) * t - b) * t - a;
	  a = segment[i + 1];
	  b = segment[i + 3];
	  c = segment[i + 5];
	  a += (b - a) * t;
	  b += (c - b) * t;
	  a += (b - a) * t;
	  return _round(_atan2(b + (c + (segment[i + 7] - c) * t - b) * t - a, x) * _RAD2DEG);
	}

	function sliceRawPath(rawPath, start, end) {
	  end = _isUndefined(end) ? 1 : _roundPrecise(end) || 0;
	  start = _roundPrecise(start) || 0;
	  var loops = Math.max(0, ~~(_abs(end - start) - 1e-8)),
	      path = copyRawPath(rawPath);

	  if (start > end) {
	    start = 1 - start;
	    end = 1 - end;

	    _reverseRawPath(path);

	    path.totalLength = 0;
	  }

	  if (start < 0 || end < 0) {
	    var offset = Math.abs(~~Math.min(start, end)) + 1;
	    start += offset;
	    end += offset;
	  }

	  path.totalLength || cacheRawPathMeasurements(path);
	  var wrap = end > 1,
	      s = getProgressData(path, start, _temp, true),
	      e = getProgressData(path, end, _temp2),
	      eSeg = e.segment,
	      sSeg = s.segment,
	      eSegIndex = e.segIndex,
	      sSegIndex = s.segIndex,
	      ei = e.i,
	      si = s.i,
	      sameSegment = sSegIndex === eSegIndex,
	      sameBezier = ei === si && sameSegment,
	      wrapsBehind,
	      sShift,
	      eShift,
	      i,
	      copy,
	      totalSegments,
	      l,
	      j;

	  if (wrap || loops) {
	    wrapsBehind = eSegIndex < sSegIndex || sameSegment && ei < si || sameBezier && e.t < s.t;

	    if (_splitSegment(path, sSegIndex, si, s.t)) {
	      sSegIndex++;

	      if (!wrapsBehind) {
	        eSegIndex++;

	        if (sameBezier) {
	          e.t = (e.t - s.t) / (1 - s.t);
	          ei = 0;
	        } else if (sameSegment) {
	          ei -= si;
	        }
	      }
	    }

	    if (1 - (end - start) < 1e-5) {
	      eSegIndex = sSegIndex - 1;
	    } else if (!e.t && eSegIndex) {
	      eSegIndex--;
	    } else if (_splitSegment(path, eSegIndex, ei, e.t) && wrapsBehind) {
	      sSegIndex++;
	    }

	    if (s.t === 1) {
	      sSegIndex = (sSegIndex + 1) % path.length;
	    }

	    copy = [];
	    totalSegments = path.length;
	    l = 1 + totalSegments * loops;
	    j = sSegIndex;
	    l += (totalSegments - sSegIndex + eSegIndex) % totalSegments;

	    for (i = 0; i < l; i++) {
	      _appendOrMerge(copy, path[j++ % totalSegments]);
	    }

	    path = copy;
	  } else {
	    eShift = e.t === 1 ? 6 : subdivideSegment(eSeg, ei, e.t);

	    if (start !== end) {
	      sShift = subdivideSegment(sSeg, si, sameBezier ? s.t / e.t : s.t);
	      sameSegment && (eShift += sShift);
	      eSeg.splice(ei + eShift + 2);
	      (sShift || si) && sSeg.splice(0, si + sShift);
	      i = path.length;

	      while (i--) {
	        (i < sSegIndex || i > eSegIndex) && path.splice(i, 1);
	      }
	    } else {
	      eSeg.angle = getRotationAtBezierT(eSeg, ei + eShift, 0);
	      ei += eShift;
	      s = eSeg[ei];
	      e = eSeg[ei + 1];
	      eSeg.length = eSeg.totalLength = 0;
	      eSeg.totalPoints = path.totalPoints = 8;
	      eSeg.push(s, e, s, e, s, e, s, e);
	    }
	  }

	  path.totalLength = 0;
	  return path;
	}

	function measureSegment(segment, startIndex, bezierQty) {
	  startIndex = startIndex || 0;

	  if (!segment.samples) {
	    segment.samples = [];
	    segment.lookup = [];
	  }

	  var resolution = ~~segment.resolution || 12,
	      inc = 1 / resolution,
	      endIndex = bezierQty ? startIndex + bezierQty * 6 + 1 : segment.length,
	      x1 = segment[startIndex],
	      y1 = segment[startIndex + 1],
	      samplesIndex = startIndex ? startIndex / 6 * resolution : 0,
	      samples = segment.samples,
	      lookup = segment.lookup,
	      min = (startIndex ? segment.minLength : _largeNum) || _largeNum,
	      prevLength = samples[samplesIndex + bezierQty * resolution - 1],
	      length = startIndex ? samples[samplesIndex - 1] : 0,
	      i,
	      j,
	      x4,
	      x3,
	      x2,
	      xd,
	      xd1,
	      y4,
	      y3,
	      y2,
	      yd,
	      yd1,
	      inv,
	      t,
	      lengthIndex,
	      l,
	      segLength;
	  samples.length = lookup.length = 0;

	  for (j = startIndex + 2; j < endIndex; j += 6) {
	    x4 = segment[j + 4] - x1;
	    x3 = segment[j + 2] - x1;
	    x2 = segment[j] - x1;
	    y4 = segment[j + 5] - y1;
	    y3 = segment[j + 3] - y1;
	    y2 = segment[j + 1] - y1;
	    xd = xd1 = yd = yd1 = 0;

	    if (_abs(x4) < 1e-5 && _abs(y4) < 1e-5 && _abs(x2) + _abs(y2) < 1e-5) {
	      if (segment.length > 8) {
	        segment.splice(j, 6);
	        j -= 6;
	        endIndex -= 6;
	      }
	    } else {
	      for (i = 1; i <= resolution; i++) {
	        t = inc * i;
	        inv = 1 - t;
	        xd = xd1 - (xd1 = (t * t * x4 + 3 * inv * (t * x3 + inv * x2)) * t);
	        yd = yd1 - (yd1 = (t * t * y4 + 3 * inv * (t * y3 + inv * y2)) * t);
	        l = _sqrt(yd * yd + xd * xd);

	        if (l < min) {
	          min = l;
	        }

	        length += l;
	        samples[samplesIndex++] = length;
	      }
	    }

	    x1 += x4;
	    y1 += y4;
	  }

	  if (prevLength) {
	    prevLength -= length;

	    for (; samplesIndex < samples.length; samplesIndex++) {
	      samples[samplesIndex] += prevLength;
	    }
	  }

	  if (samples.length && min) {
	    segment.totalLength = segLength = samples[samples.length - 1] || 0;
	    segment.minLength = min;
	    l = lengthIndex = 0;

	    for (i = 0; i < segLength; i += min) {
	      lookup[l++] = samples[lengthIndex] < i ? ++lengthIndex : lengthIndex;
	    }
	  } else {
	    segment.totalLength = samples[0] = 0;
	  }

	  return startIndex ? length - samples[startIndex / 2 - 1] : length;
	}

	function cacheRawPathMeasurements(rawPath, resolution) {
	  var pathLength, points, i;

	  for (i = pathLength = points = 0; i < rawPath.length; i++) {
	    rawPath[i].resolution = ~~resolution || 12;
	    points += rawPath[i].length;
	    pathLength += measureSegment(rawPath[i]);
	  }

	  rawPath.totalPoints = points;
	  rawPath.totalLength = pathLength;
	  return rawPath;
	}
	function subdivideSegment(segment, i, t) {
	  if (t <= 0 || t >= 1) {
	    return 0;
	  }

	  var ax = segment[i],
	      ay = segment[i + 1],
	      cp1x = segment[i + 2],
	      cp1y = segment[i + 3],
	      cp2x = segment[i + 4],
	      cp2y = segment[i + 5],
	      bx = segment[i + 6],
	      by = segment[i + 7],
	      x1a = ax + (cp1x - ax) * t,
	      x2 = cp1x + (cp2x - cp1x) * t,
	      y1a = ay + (cp1y - ay) * t,
	      y2 = cp1y + (cp2y - cp1y) * t,
	      x1 = x1a + (x2 - x1a) * t,
	      y1 = y1a + (y2 - y1a) * t,
	      x2a = cp2x + (bx - cp2x) * t,
	      y2a = cp2y + (by - cp2y) * t;
	  x2 += (x2a - x2) * t;
	  y2 += (y2a - y2) * t;
	  segment.splice(i + 2, 4, _round(x1a), _round(y1a), _round(x1), _round(y1), _round(x1 + (x2 - x1) * t), _round(y1 + (y2 - y1) * t), _round(x2), _round(y2), _round(x2a), _round(y2a));
	  segment.samples && segment.samples.splice(i / 6 * segment.resolution | 0, 0, 0, 0, 0, 0, 0, 0);
	  return 6;
	}

	function getProgressData(rawPath, progress, decoratee, pushToNextIfAtEnd) {
	  decoratee = decoratee || {};
	  rawPath.totalLength || cacheRawPathMeasurements(rawPath);

	  if (progress < 0 || progress > 1) {
	    progress = _wrapProgress(progress);
	  }

	  var segIndex = 0,
	      segment = rawPath[0],
	      samples,
	      resolution,
	      length,
	      min,
	      max,
	      i,
	      t;

	  if (!progress) {
	    t = i = segIndex = 0;
	    segment = rawPath[0];
	  } else if (progress === 1) {
	    t = 1;
	    segIndex = rawPath.length - 1;
	    segment = rawPath[segIndex];
	    i = segment.length - 8;
	  } else {
	    if (rawPath.length > 1) {
	      length = rawPath.totalLength * progress;
	      max = i = 0;

	      while ((max += rawPath[i++].totalLength) < length) {
	        segIndex = i;
	      }

	      segment = rawPath[segIndex];
	      min = max - segment.totalLength;
	      progress = (length - min) / (max - min) || 0;
	    }

	    samples = segment.samples;
	    resolution = segment.resolution;
	    length = segment.totalLength * progress;
	    i = segment.lookup[~~(length / segment.minLength)] || 0;
	    min = i ? samples[i - 1] : 0;
	    max = samples[i];

	    if (max < length) {
	      min = max;
	      max = samples[++i];
	    }

	    t = 1 / resolution * ((length - min) / (max - min) + i % resolution);
	    i = ~~(i / resolution) * 6;

	    if (pushToNextIfAtEnd && t === 1) {
	      if (i + 6 < segment.length) {
	        i += 6;
	        t = 0;
	      } else if (segIndex + 1 < rawPath.length) {
	        i = t = 0;
	        segment = rawPath[++segIndex];
	      }
	    }
	  }

	  decoratee.t = t;
	  decoratee.i = i;
	  decoratee.path = rawPath;
	  decoratee.segment = segment;
	  decoratee.segIndex = segIndex;
	  return decoratee;
	}

	function getPositionOnPath(rawPath, progress, includeAngle, point) {
	  var segment = rawPath[0],
	      result = point || {},
	      samples,
	      resolution,
	      length,
	      min,
	      max,
	      i,
	      t,
	      a,
	      inv;

	  if (progress < 0 || progress > 1) {
	    progress = _wrapProgress(progress);
	  }

	  if (rawPath.length > 1) {
	    length = rawPath.totalLength * progress;
	    max = i = 0;

	    while ((max += rawPath[i++].totalLength) < length) {
	      segment = rawPath[i];
	    }

	    min = max - segment.totalLength;
	    progress = (length - min) / (max - min) || 0;
	  }

	  samples = segment.samples;
	  resolution = segment.resolution;
	  length = segment.totalLength * progress;
	  i = segment.lookup[progress < 1 ? ~~(length / segment.minLength) : segment.lookup.length - 1] || 0;
	  min = i ? samples[i - 1] : 0;
	  max = samples[i];

	  if (max < length) {
	    min = max;
	    max = samples[++i];
	  }

	  t = 1 / resolution * ((length - min) / (max - min) + i % resolution) || 0;
	  inv = 1 - t;
	  i = ~~(i / resolution) * 6;
	  a = segment[i];
	  result.x = _round((t * t * (segment[i + 6] - a) + 3 * inv * (t * (segment[i + 4] - a) + inv * (segment[i + 2] - a))) * t + a);
	  result.y = _round((t * t * (segment[i + 7] - (a = segment[i + 1])) + 3 * inv * (t * (segment[i + 5] - a) + inv * (segment[i + 3] - a))) * t + a);

	  if (includeAngle) {
	    result.angle = segment.totalLength ? getRotationAtBezierT(segment, i, t >= 1 ? 1 - 1e-9 : t ? t : 1e-9) : segment.angle || 0;
	  }

	  return result;
	}
	function transformRawPath(rawPath, a, b, c, d, tx, ty) {
	  var j = rawPath.length,
	      segment,
	      l,
	      i,
	      x,
	      y;

	  while (--j > -1) {
	    segment = rawPath[j];
	    l = segment.length;

	    for (i = 0; i < l; i += 2) {
	      x = segment[i];
	      y = segment[i + 1];
	      segment[i] = x * a + y * c + tx;
	      segment[i + 1] = x * b + y * d + ty;
	    }
	  }

	  rawPath._dirty = 1;
	  return rawPath;
	}

	function arcToSegment(lastX, lastY, rx, ry, angle, largeArcFlag, sweepFlag, x, y) {
	  if (lastX === x && lastY === y) {
	    return;
	  }

	  rx = _abs(rx);
	  ry = _abs(ry);

	  var angleRad = angle % 360 * _DEG2RAD,
	      cosAngle = _cos(angleRad),
	      sinAngle = _sin(angleRad),
	      PI = Math.PI,
	      TWOPI = PI * 2,
	      dx2 = (lastX - x) / 2,
	      dy2 = (lastY - y) / 2,
	      x1 = cosAngle * dx2 + sinAngle * dy2,
	      y1 = -sinAngle * dx2 + cosAngle * dy2,
	      x1_sq = x1 * x1,
	      y1_sq = y1 * y1,
	      radiiCheck = x1_sq / (rx * rx) + y1_sq / (ry * ry);

	  if (radiiCheck > 1) {
	    rx = _sqrt(radiiCheck) * rx;
	    ry = _sqrt(radiiCheck) * ry;
	  }

	  var rx_sq = rx * rx,
	      ry_sq = ry * ry,
	      sq = (rx_sq * ry_sq - rx_sq * y1_sq - ry_sq * x1_sq) / (rx_sq * y1_sq + ry_sq * x1_sq);

	  if (sq < 0) {
	    sq = 0;
	  }

	  var coef = (largeArcFlag === sweepFlag ? -1 : 1) * _sqrt(sq),
	      cx1 = coef * (rx * y1 / ry),
	      cy1 = coef * -(ry * x1 / rx),
	      sx2 = (lastX + x) / 2,
	      sy2 = (lastY + y) / 2,
	      cx = sx2 + (cosAngle * cx1 - sinAngle * cy1),
	      cy = sy2 + (sinAngle * cx1 + cosAngle * cy1),
	      ux = (x1 - cx1) / rx,
	      uy = (y1 - cy1) / ry,
	      vx = (-x1 - cx1) / rx,
	      vy = (-y1 - cy1) / ry,
	      temp = ux * ux + uy * uy,
	      angleStart = (uy < 0 ? -1 : 1) * Math.acos(ux / _sqrt(temp)),
	      angleExtent = (ux * vy - uy * vx < 0 ? -1 : 1) * Math.acos((ux * vx + uy * vy) / _sqrt(temp * (vx * vx + vy * vy)));

	  isNaN(angleExtent) && (angleExtent = PI);

	  if (!sweepFlag && angleExtent > 0) {
	    angleExtent -= TWOPI;
	  } else if (sweepFlag && angleExtent < 0) {
	    angleExtent += TWOPI;
	  }

	  angleStart %= TWOPI;
	  angleExtent %= TWOPI;

	  var segments = Math.ceil(_abs(angleExtent) / (TWOPI / 4)),
	      rawPath = [],
	      angleIncrement = angleExtent / segments,
	      controlLength = 4 / 3 * _sin(angleIncrement / 2) / (1 + _cos(angleIncrement / 2)),
	      ma = cosAngle * rx,
	      mb = sinAngle * rx,
	      mc = sinAngle * -ry,
	      md = cosAngle * ry,
	      i;

	  for (i = 0; i < segments; i++) {
	    angle = angleStart + i * angleIncrement;
	    x1 = _cos(angle);
	    y1 = _sin(angle);
	    ux = _cos(angle += angleIncrement);
	    uy = _sin(angle);
	    rawPath.push(x1 - controlLength * y1, y1 + controlLength * x1, ux + controlLength * uy, uy - controlLength * ux, ux, uy);
	  }

	  for (i = 0; i < rawPath.length; i += 2) {
	    x1 = rawPath[i];
	    y1 = rawPath[i + 1];
	    rawPath[i] = x1 * ma + y1 * mc + cx;
	    rawPath[i + 1] = x1 * mb + y1 * md + cy;
	  }

	  rawPath[i - 2] = x;
	  rawPath[i - 1] = y;
	  return rawPath;
	}

	function stringToRawPath(d) {
	  var a = (d + "").replace(_scientific, function (m) {
	    var n = +m;
	    return n < 0.0001 && n > -0.0001 ? 0 : n;
	  }).match(_svgPathExp) || [],
	      path = [],
	      relativeX = 0,
	      relativeY = 0,
	      twoThirds = 2 / 3,
	      elements = a.length,
	      points = 0,
	      errorMessage = "ERROR: malformed path: " + d,
	      i,
	      j,
	      x,
	      y,
	      command,
	      isRelative,
	      segment,
	      startX,
	      startY,
	      difX,
	      difY,
	      beziers,
	      prevCommand,
	      flag1,
	      flag2,
	      line = function line(sx, sy, ex, ey) {
	    difX = (ex - sx) / 3;
	    difY = (ey - sy) / 3;
	    segment.push(sx + difX, sy + difY, ex - difX, ey - difY, ex, ey);
	  };

	  if (!d || !isNaN(a[0]) || isNaN(a[1])) {
	    console.log(errorMessage);
	    return path;
	  }

	  for (i = 0; i < elements; i++) {
	    prevCommand = command;

	    if (isNaN(a[i])) {
	      command = a[i].toUpperCase();
	      isRelative = command !== a[i];
	    } else {
	      i--;
	    }

	    x = +a[i + 1];
	    y = +a[i + 2];

	    if (isRelative) {
	      x += relativeX;
	      y += relativeY;
	    }

	    if (!i) {
	      startX = x;
	      startY = y;
	    }

	    if (command === "M") {
	      if (segment) {
	        if (segment.length < 8) {
	          path.length -= 1;
	        } else {
	          points += segment.length;
	        }
	      }

	      relativeX = startX = x;
	      relativeY = startY = y;
	      segment = [x, y];
	      path.push(segment);
	      i += 2;
	      command = "L";
	    } else if (command === "C") {
	      if (!segment) {
	        segment = [0, 0];
	      }

	      if (!isRelative) {
	        relativeX = relativeY = 0;
	      }

	      segment.push(x, y, relativeX + a[i + 3] * 1, relativeY + a[i + 4] * 1, relativeX += a[i + 5] * 1, relativeY += a[i + 6] * 1);
	      i += 6;
	    } else if (command === "S") {
	      difX = relativeX;
	      difY = relativeY;

	      if (prevCommand === "C" || prevCommand === "S") {
	        difX += relativeX - segment[segment.length - 4];
	        difY += relativeY - segment[segment.length - 3];
	      }

	      if (!isRelative) {
	        relativeX = relativeY = 0;
	      }

	      segment.push(difX, difY, x, y, relativeX += a[i + 3] * 1, relativeY += a[i + 4] * 1);
	      i += 4;
	    } else if (command === "Q") {
	      difX = relativeX + (x - relativeX) * twoThirds;
	      difY = relativeY + (y - relativeY) * twoThirds;

	      if (!isRelative) {
	        relativeX = relativeY = 0;
	      }

	      relativeX += a[i + 3] * 1;
	      relativeY += a[i + 4] * 1;
	      segment.push(difX, difY, relativeX + (x - relativeX) * twoThirds, relativeY + (y - relativeY) * twoThirds, relativeX, relativeY);
	      i += 4;
	    } else if (command === "T") {
	      difX = relativeX - segment[segment.length - 4];
	      difY = relativeY - segment[segment.length - 3];
	      segment.push(relativeX + difX, relativeY + difY, x + (relativeX + difX * 1.5 - x) * twoThirds, y + (relativeY + difY * 1.5 - y) * twoThirds, relativeX = x, relativeY = y);
	      i += 2;
	    } else if (command === "H") {
	      line(relativeX, relativeY, relativeX = x, relativeY);
	      i += 1;
	    } else if (command === "V") {
	      line(relativeX, relativeY, relativeX, relativeY = x + (isRelative ? relativeY - relativeX : 0));
	      i += 1;
	    } else if (command === "L" || command === "Z") {
	      if (command === "Z") {
	        x = startX;
	        y = startY;
	        segment.closed = true;
	      }

	      if (command === "L" || _abs(relativeX - x) > 0.5 || _abs(relativeY - y) > 0.5) {
	        line(relativeX, relativeY, x, y);

	        if (command === "L") {
	          i += 2;
	        }
	      }

	      relativeX = x;
	      relativeY = y;
	    } else if (command === "A") {
	      flag1 = a[i + 4];
	      flag2 = a[i + 5];
	      difX = a[i + 6];
	      difY = a[i + 7];
	      j = 7;

	      if (flag1.length > 1) {
	        if (flag1.length < 3) {
	          difY = difX;
	          difX = flag2;
	          j--;
	        } else {
	          difY = flag2;
	          difX = flag1.substr(2);
	          j -= 2;
	        }

	        flag2 = flag1.charAt(1);
	        flag1 = flag1.charAt(0);
	      }

	      beziers = arcToSegment(relativeX, relativeY, +a[i + 1], +a[i + 2], +a[i + 3], +flag1, +flag2, (isRelative ? relativeX : 0) + difX * 1, (isRelative ? relativeY : 0) + difY * 1);
	      i += j;

	      if (beziers) {
	        for (j = 0; j < beziers.length; j++) {
	          segment.push(beziers[j]);
	        }
	      }

	      relativeX = segment[segment.length - 2];
	      relativeY = segment[segment.length - 1];
	    } else {
	      console.log(errorMessage);
	    }
	  }

	  i = segment.length;

	  if (i < 6) {
	    path.pop();
	    i = 0;
	  } else if (segment[0] === segment[i - 2] && segment[1] === segment[i - 1]) {
	    segment.closed = true;
	  }

	  path.totalPoints = points + i;
	  return path;
	}
	function flatPointsToSegment(points, curviness) {
	  if (curviness === void 0) {
	    curviness = 1;
	  }

	  var x = points[0],
	      y = 0,
	      segment = [x, y],
	      i = 2;

	  for (; i < points.length; i += 2) {
	    segment.push(x, y, points[i], y = (points[i] - x) * curviness / 2, x = points[i], -y);
	  }

	  return segment;
	}
	function pointsToSegment(points, curviness, cornerThreshold) {
	  _abs(points[0] - points[2]) < 1e-4 && _abs(points[1] - points[3]) < 1e-4 && (points = points.slice(2));
	  var l = points.length - 2,
	      x = +points[0],
	      y = +points[1],
	      nextX = +points[2],
	      nextY = +points[3],
	      segment = [x, y, x, y],
	      dx2 = nextX - x,
	      dy2 = nextY - y,
	      closed = Math.abs(points[l] - x) < 0.001 && Math.abs(points[l + 1] - y) < 0.001,
	      prevX,
	      prevY,
	      angle,
	      slope,
	      i,
	      dx1,
	      dx3,
	      dy1,
	      dy3,
	      d1,
	      d2,
	      a,
	      b,
	      c;

	  if (isNaN(cornerThreshold)) {
	    cornerThreshold = Math.PI / 10;
	  }

	  if (closed) {
	    points.push(nextX, nextY);
	    nextX = x;
	    nextY = y;
	    x = points[l - 2];
	    y = points[l - 1];
	    points.unshift(x, y);
	    l += 4;
	  }

	  curviness = curviness || curviness === 0 ? +curviness : 1;

	  for (i = 2; i < l; i += 2) {
	    prevX = x;
	    prevY = y;
	    x = nextX;
	    y = nextY;
	    nextX = +points[i + 2];
	    nextY = +points[i + 3];

	    if (x === nextX && y === nextY) {
	      continue;
	    }

	    dx1 = dx2;
	    dy1 = dy2;
	    dx2 = nextX - x;
	    dy2 = nextY - y;
	    dx3 = nextX - prevX;
	    dy3 = nextY - prevY;
	    a = dx1 * dx1 + dy1 * dy1;
	    b = dx2 * dx2 + dy2 * dy2;
	    c = dx3 * dx3 + dy3 * dy3;
	    angle = Math.acos((a + b - c) / _sqrt(4 * a * b));
	    d2 = angle / Math.PI * curviness;
	    d1 = _sqrt(a) * d2;
	    d2 *= _sqrt(b);

	    if (x !== prevX || y !== prevY) {
	      if (angle > cornerThreshold) {
	        slope = _atan2(dy3, dx3);
	        segment.push(_round(x - _cos(slope) * d1), _round(y - _sin(slope) * d1), _round(x), _round(y), _round(x + _cos(slope) * d2), _round(y + _sin(slope) * d2));
	      } else {
	        slope = _atan2(dy1, dx1);
	        segment.push(_round(x - _cos(slope) * d1), _round(y - _sin(slope) * d1));
	        slope = _atan2(dy2, dx2);
	        segment.push(_round(x), _round(y), _round(x + _cos(slope) * d2), _round(y + _sin(slope) * d2));
	      }
	    }
	  }

	  x !== nextX || y !== nextY || segment.length < 4 ? segment.push(_round(nextX), _round(nextY), _round(nextX), _round(nextY)) : segment.length -= 2;

	  if (closed) {
	    segment.splice(0, 6);
	    segment.length = segment.length - 6;
	  }

	  return segment;
	}
	function rawPathToString(rawPath) {
	  if (_isNumber(rawPath[0])) {
	    rawPath = [rawPath];
	  }

	  var result = "",
	      l = rawPath.length,
	      sl,
	      s,
	      i,
	      segment;

	  for (s = 0; s < l; s++) {
	    segment = rawPath[s];
	    result += "M" + _round(segment[0]) + "," + _round(segment[1]) + " C";
	    sl = segment.length;

	    for (i = 2; i < sl; i++) {
	      result += _round(segment[i++]) + "," + _round(segment[i++]) + " " + _round(segment[i++]) + "," + _round(segment[i++]) + " " + _round(segment[i++]) + "," + _round(segment[i]) + " ";
	    }

	    if (segment.closed) {
	      result += "z";
	    }
	  }

	  return result;
	}

	var _doc,
	    _win,
	    _docElement,
	    _body,
	    _divContainer,
	    _svgContainer,
	    _identityMatrix,
	    _transformProp = "transform",
	    _transformOriginProp = _transformProp + "Origin",
	    _hasOffsetBug,
	    _setDoc = function _setDoc(element) {
	  var doc = element.ownerDocument || element;

	  if (!(_transformProp in element.style) && "msTransform" in element.style) {
	    _transformProp = "msTransform";
	    _transformOriginProp = _transformProp + "Origin";
	  }

	  while (doc.parentNode && (doc = doc.parentNode)) {}

	  _win = window;
	  _identityMatrix = new Matrix2D();

	  if (doc) {
	    _doc = doc;
	    _docElement = doc.documentElement;
	    _body = doc.body;
	    var d1 = doc.createElement("div"),
	        d2 = doc.createElement("div");

	    _body.appendChild(d1);

	    d1.appendChild(d2);
	    d1.style.position = "static";
	    d1.style[_transformProp] = "translate3d(0,0,1px)";
	    _hasOffsetBug = d2.offsetParent !== d1;

	    _body.removeChild(d1);
	  }

	  return doc;
	},
	    _forceNonZeroScale = function _forceNonZeroScale(e) {
	  var a, cache;

	  while (e && e !== _body) {
	    cache = e._gsap;
	    cache && cache.uncache && cache.get(e, "x");

	    if (cache && !cache.scaleX && !cache.scaleY && cache.renderTransform) {
	      cache.scaleX = cache.scaleY = 1e-4;
	      cache.renderTransform(1, cache);
	      a ? a.push(cache) : a = [cache];
	    }

	    e = e.parentNode;
	  }

	  return a;
	},
	    _svgTemps = [],
	    _divTemps = [],
	    _getDocScrollTop = function _getDocScrollTop() {
	  return _win.pageYOffset || _doc.scrollTop || _docElement.scrollTop || _body.scrollTop || 0;
	},
	    _getDocScrollLeft = function _getDocScrollLeft() {
	  return _win.pageXOffset || _doc.scrollLeft || _docElement.scrollLeft || _body.scrollLeft || 0;
	},
	    _svgOwner = function _svgOwner(element) {
	  return element.ownerSVGElement || ((element.tagName + "").toLowerCase() === "svg" ? element : null);
	},
	    _isFixed = function _isFixed(element) {
	  if (_win.getComputedStyle(element).position === "fixed") {
	    return true;
	  }

	  element = element.parentNode;

	  if (element && element.nodeType === 1) {
	    return _isFixed(element);
	  }
	},
	    _createSibling = function _createSibling(element, i) {
	  if (element.parentNode && (_doc || _setDoc(element))) {
	    var svg = _svgOwner(element),
	        ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
	        type = svg ? i ? "rect" : "g" : "div",
	        x = i !== 2 ? 0 : 100,
	        y = i === 3 ? 100 : 0,
	        css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
	        e = _doc.createElementNS ? _doc.createElementNS(ns.replace(/^https/, "http"), type) : _doc.createElement(type);

	    if (i) {
	      if (!svg) {
	        if (!_divContainer) {
	          _divContainer = _createSibling(element);
	          _divContainer.style.cssText = css;
	        }

	        e.style.cssText = css + "width:0.1px;height:0.1px;top:" + y + "px;left:" + x + "px";

	        _divContainer.appendChild(e);
	      } else {
	        _svgContainer || (_svgContainer = _createSibling(element));
	        e.setAttribute("width", 0.01);
	        e.setAttribute("height", 0.01);
	        e.setAttribute("transform", "translate(" + x + "," + y + ")");

	        _svgContainer.appendChild(e);
	      }
	    }

	    return e;
	  }

	  throw "Need document and parent.";
	},
	    _consolidate = function _consolidate(m) {
	  var c = new Matrix2D(),
	      i = 0;

	  for (; i < m.numberOfItems; i++) {
	    c.multiply(m.getItem(i).matrix);
	  }

	  return c;
	},
	    _placeSiblings = function _placeSiblings(element, adjustGOffset) {
	  var svg = _svgOwner(element),
	      isRootSVG = element === svg,
	      siblings = svg ? _svgTemps : _divTemps,
	      parent = element.parentNode,
	      container,
	      m,
	      b,
	      x,
	      y,
	      cs;

	  if (element === _win) {
	    return element;
	  }

	  siblings.length || siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
	  container = svg ? _svgContainer : _divContainer;

	  if (svg) {
	    b = isRootSVG ? {
	      x: 0,
	      y: 0
	    } : element.getBBox();
	    m = element.transform ? element.transform.baseVal : {};

	    if (m.numberOfItems) {
	      m = m.numberOfItems > 1 ? _consolidate(m) : m.getItem(0).matrix;
	      x = m.a * b.x + m.c * b.y;
	      y = m.b * b.x + m.d * b.y;
	    } else {
	      m = _identityMatrix;
	      x = b.x;
	      y = b.y;
	    }

	    if (adjustGOffset && element.tagName.toLowerCase() === "g") {
	      x = y = 0;
	    }

	    (isRootSVG ? svg : parent).appendChild(container);
	    container.setAttribute("transform", "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + (m.e + x) + "," + (m.f + y) + ")");
	  } else {
	    x = y = 0;

	    if (_hasOffsetBug) {
	      m = element.offsetParent;
	      b = element;

	      while (b && (b = b.parentNode) && b !== m && b.parentNode) {
	        if ((_win.getComputedStyle(b)[_transformProp] + "").length > 4) {
	          x = b.offsetLeft;
	          y = b.offsetTop;
	          b = 0;
	        }
	      }
	    }

	    cs = _win.getComputedStyle(element);

	    if (cs.position !== "absolute") {
	      m = element.offsetParent;

	      while (parent && parent !== m) {
	        x += parent.scrollLeft || 0;
	        y += parent.scrollTop || 0;
	        parent = parent.parentNode;
	      }
	    }

	    b = container.style;
	    b.top = element.offsetTop - y + "px";
	    b.left = element.offsetLeft - x + "px";
	    b[_transformProp] = cs[_transformProp];
	    b[_transformOriginProp] = cs[_transformOriginProp];
	    b.position = cs.position === "fixed" ? "fixed" : "absolute";
	    element.parentNode.appendChild(container);
	  }

	  return container;
	},
	    _setMatrix = function _setMatrix(m, a, b, c, d, e, f) {
	  m.a = a;
	  m.b = b;
	  m.c = c;
	  m.d = d;
	  m.e = e;
	  m.f = f;
	  return m;
	};

	var Matrix2D = function () {
	  function Matrix2D(a, b, c, d, e, f) {
	    if (a === void 0) {
	      a = 1;
	    }

	    if (b === void 0) {
	      b = 0;
	    }

	    if (c === void 0) {
	      c = 0;
	    }

	    if (d === void 0) {
	      d = 1;
	    }

	    if (e === void 0) {
	      e = 0;
	    }

	    if (f === void 0) {
	      f = 0;
	    }

	    _setMatrix(this, a, b, c, d, e, f);
	  }

	  var _proto = Matrix2D.prototype;

	  _proto.inverse = function inverse() {
	    var a = this.a,
	        b = this.b,
	        c = this.c,
	        d = this.d,
	        e = this.e,
	        f = this.f,
	        determinant = a * d - b * c || 1e-10;
	    return _setMatrix(this, d / determinant, -b / determinant, -c / determinant, a / determinant, (c * f - d * e) / determinant, -(a * f - b * e) / determinant);
	  };

	  _proto.multiply = function multiply(matrix) {
	    var a = this.a,
	        b = this.b,
	        c = this.c,
	        d = this.d,
	        e = this.e,
	        f = this.f,
	        a2 = matrix.a,
	        b2 = matrix.c,
	        c2 = matrix.b,
	        d2 = matrix.d,
	        e2 = matrix.e,
	        f2 = matrix.f;
	    return _setMatrix(this, a2 * a + c2 * c, a2 * b + c2 * d, b2 * a + d2 * c, b2 * b + d2 * d, e + e2 * a + f2 * c, f + e2 * b + f2 * d);
	  };

	  _proto.clone = function clone() {
	    return new Matrix2D(this.a, this.b, this.c, this.d, this.e, this.f);
	  };

	  _proto.equals = function equals(matrix) {
	    var a = this.a,
	        b = this.b,
	        c = this.c,
	        d = this.d,
	        e = this.e,
	        f = this.f;
	    return a === matrix.a && b === matrix.b && c === matrix.c && d === matrix.d && e === matrix.e && f === matrix.f;
	  };

	  _proto.apply = function apply(point, decoratee) {
	    if (decoratee === void 0) {
	      decoratee = {};
	    }

	    var x = point.x,
	        y = point.y,
	        a = this.a,
	        b = this.b,
	        c = this.c,
	        d = this.d,
	        e = this.e,
	        f = this.f;
	    decoratee.x = x * a + y * c + e || 0;
	    decoratee.y = x * b + y * d + f || 0;
	    return decoratee;
	  };

	  return Matrix2D;
	}();
	function getGlobalMatrix(element, inverse, adjustGOffset, includeScrollInFixed) {
	  if (!element || !element.parentNode || (_doc || _setDoc(element)).documentElement === element) {
	    return new Matrix2D();
	  }

	  var zeroScales = _forceNonZeroScale(element),
	      svg = _svgOwner(element),
	      temps = svg ? _svgTemps : _divTemps,
	      container = _placeSiblings(element, adjustGOffset),
	      b1 = temps[0].getBoundingClientRect(),
	      b2 = temps[1].getBoundingClientRect(),
	      b3 = temps[2].getBoundingClientRect(),
	      parent = container.parentNode,
	      isFixed = !includeScrollInFixed && _isFixed(element),
	      m = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + (isFixed ? 0 : _getDocScrollLeft()), b1.top + (isFixed ? 0 : _getDocScrollTop()));

	  parent.removeChild(container);

	  if (zeroScales) {
	    b1 = zeroScales.length;

	    while (b1--) {
	      b2 = zeroScales[b1];
	      b2.scaleX = b2.scaleY = 0;
	      b2.renderTransform(1, b2);
	    }
	  }

	  return inverse ? m.inverse() : m;
	}

	/*!
	 * MotionPathPlugin 3.6.1
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2021, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/

	var _xProps = "x,translateX,left,marginLeft,xPercent".split(","),
	    _yProps = "y,translateY,top,marginTop,yPercent".split(","),
	    _DEG2RAD$1 = Math.PI / 180,
	    gsap,
	    PropTween,
	    _getUnit,
	    _toArray,
	    _getGSAP = function _getGSAP() {
	  return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
	},
	    _populateSegmentFromArray = function _populateSegmentFromArray(segment, values, property, mode) {
	  var l = values.length,
	      si = mode === 2 ? 0 : mode,
	      i = 0,
	      v;

	  for (; i < l; i++) {
	    segment[si] = v = parseFloat(values[i][property]);
	    mode === 2 && (segment[si + 1] = 0);
	    si += 2;
	  }

	  return segment;
	},
	    _getPropNum = function _getPropNum(target, prop, unit) {
	  return parseFloat(target._gsap.get(target, prop, unit || "px")) || 0;
	},
	    _relativize = function _relativize(segment) {
	  var x = segment[0],
	      y = segment[1],
	      i;

	  for (i = 2; i < segment.length; i += 2) {
	    x = segment[i] += x;
	    y = segment[i + 1] += y;
	  }
	},
	    _segmentToRawPath = function _segmentToRawPath(plugin, segment, target, x, y, slicer, vars, unitX, unitY) {
	  if (vars.type === "cubic") {
	    segment = [segment];
	  } else {
	    segment.unshift(_getPropNum(target, x, unitX), y ? _getPropNum(target, y, unitY) : 0);
	    vars.relative && _relativize(segment);
	    var pointFunc = y ? pointsToSegment : flatPointsToSegment;
	    segment = [pointFunc(segment, vars.curviness)];
	  }

	  segment = slicer(_align(segment, target, vars));

	  _addDimensionalPropTween(plugin, target, x, segment, "x", unitX);

	  y && _addDimensionalPropTween(plugin, target, y, segment, "y", unitY);
	  return cacheRawPathMeasurements(segment, vars.resolution || (vars.curviness === 0 ? 20 : 12));
	},
	    _emptyFunc = function _emptyFunc(v) {
	  return v;
	},
	    _numExp = /[-+\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/g,
	    _originToPoint = function _originToPoint(element, origin, parentMatrix) {
	  var m = getGlobalMatrix(element),
	      svg,
	      x,
	      y;

	  if ((element.tagName + "").toLowerCase() === "svg") {
	    svg = element.viewBox.baseVal;
	    x = svg.x;
	    y = svg.y;
	    svg.width || (svg = {
	      width: +element.getAttribute("width"),
	      height: +element.getAttribute("height")
	    });
	  } else {
	    svg = origin && element.getBBox && element.getBBox();
	    x = y = 0;
	  }

	  if (origin && origin !== "auto") {
	    x += origin.push ? origin[0] * (svg ? svg.width : element.offsetWidth || 0) : origin.x;
	    y += origin.push ? origin[1] * (svg ? svg.height : element.offsetHeight || 0) : origin.y;
	  }

	  return parentMatrix.apply(x || y ? m.apply({
	    x: x,
	    y: y
	  }) : {
	    x: m.e,
	    y: m.f
	  });
	},
	    _getAlignMatrix = function _getAlignMatrix(fromElement, toElement, fromOrigin, toOrigin) {
	  var parentMatrix = getGlobalMatrix(fromElement.parentNode, true, true),
	      m = parentMatrix.clone().multiply(getGlobalMatrix(toElement)),
	      fromPoint = _originToPoint(fromElement, fromOrigin, parentMatrix),
	      _originToPoint2 = _originToPoint(toElement, toOrigin, parentMatrix),
	      x = _originToPoint2.x,
	      y = _originToPoint2.y,
	      p;

	  m.e = m.f = 0;

	  if (toOrigin === "auto" && toElement.getTotalLength && toElement.tagName.toLowerCase() === "path") {
	    p = toElement.getAttribute("d").match(_numExp) || [];
	    p = m.apply({
	      x: +p[0],
	      y: +p[1]
	    });
	    x += p.x;
	    y += p.y;
	  }

	  if (p || toElement.getBBox && fromElement.getBBox && toElement.ownerSVGElement === fromElement.ownerSVGElement) {
	    p = m.apply(toElement.getBBox());
	    x -= p.x;
	    y -= p.y;
	  }

	  m.e = x - fromPoint.x;
	  m.f = y - fromPoint.y;
	  return m;
	},
	    _align = function _align(rawPath, target, _ref) {
	  var align = _ref.align,
	      matrix = _ref.matrix,
	      offsetX = _ref.offsetX,
	      offsetY = _ref.offsetY,
	      alignOrigin = _ref.alignOrigin;

	  var x = rawPath[0][0],
	      y = rawPath[0][1],
	      curX = _getPropNum(target, "x"),
	      curY = _getPropNum(target, "y"),
	      alignTarget,
	      m,
	      p;

	  if (!rawPath || !rawPath.length) {
	    return getRawPath("M0,0L0,0");
	  }

	  if (align) {
	    if (align === "self" || (alignTarget = _toArray(align)[0] || target) === target) {
	      transformRawPath(rawPath, 1, 0, 0, 1, curX - x, curY - y);
	    } else {
	      if (alignOrigin && alignOrigin[2] !== false) {
	        gsap.set(target, {
	          transformOrigin: alignOrigin[0] * 100 + "% " + alignOrigin[1] * 100 + "%"
	        });
	      } else {
	        alignOrigin = [_getPropNum(target, "xPercent") / -100, _getPropNum(target, "yPercent") / -100];
	      }

	      m = _getAlignMatrix(target, alignTarget, alignOrigin, "auto");
	      p = m.apply({
	        x: x,
	        y: y
	      });
	      transformRawPath(rawPath, m.a, m.b, m.c, m.d, curX + m.e - (p.x - m.e), curY + m.f - (p.y - m.f));
	    }
	  }

	  if (matrix) {
	    transformRawPath(rawPath, matrix.a, matrix.b, matrix.c, matrix.d, matrix.e, matrix.f);
	  } else if (offsetX || offsetY) {
	    transformRawPath(rawPath, 1, 0, 0, 1, offsetX || 0, offsetY || 0);
	  }

	  return rawPath;
	},
	    _addDimensionalPropTween = function _addDimensionalPropTween(plugin, target, property, rawPath, pathProperty, forceUnit) {
	  var cache = target._gsap,
	      harness = cache.harness,
	      alias = harness && harness.aliases && harness.aliases[property],
	      prop = alias && alias.indexOf(",") < 0 ? alias : property,
	      pt = plugin._pt = new PropTween(plugin._pt, target, prop, 0, 0, _emptyFunc, 0, cache.set(target, prop, plugin));
	  pt.u = _getUnit(cache.get(target, prop, forceUnit)) || 0;
	  pt.path = rawPath;
	  pt.pp = pathProperty;

	  plugin._props.push(prop);
	},
	    _sliceModifier = function _sliceModifier(start, end) {
	  return function (rawPath) {
	    return start || end !== 1 ? sliceRawPath(rawPath, start, end) : rawPath;
	  };
	};

	var MotionPathPlugin = {
	  version: "3.6.1",
	  name: "motionPath",
	  register: function register(core, Plugin, propTween) {
	    gsap = core;
	    _getUnit = gsap.utils.getUnit;
	    _toArray = gsap.utils.toArray;
	    PropTween = propTween;
	  },
	  init: function init(target, vars) {
	    if (!gsap) {
	      console.warn("Please gsap.registerPlugin(MotionPathPlugin)");
	      return false;
	    }

	    if (!(typeof vars === "object" && !vars.style) || !vars.path) {
	      vars = {
	        path: vars
	      };
	    }

	    var rawPaths = [],
	        _vars = vars,
	        path = _vars.path,
	        autoRotate = _vars.autoRotate,
	        unitX = _vars.unitX,
	        unitY = _vars.unitY,
	        x = _vars.x,
	        y = _vars.y,
	        firstObj = path[0],
	        slicer = _sliceModifier(vars.start, "end" in vars ? vars.end : 1),
	        rawPath,
	        p;

	    this.rawPaths = rawPaths;
	    this.target = target;

	    if (this.rotate = autoRotate || autoRotate === 0) {
	      this.rOffset = parseFloat(autoRotate) || 0;
	      this.radians = !!vars.useRadians;
	      this.rProp = vars.rotation || "rotation";
	      this.rSet = target._gsap.set(target, this.rProp, this);
	      this.ru = _getUnit(target._gsap.get(target, this.rProp)) || 0;
	    }

	    if (Array.isArray(path) && !("closed" in path) && typeof firstObj !== "number") {
	      for (p in firstObj) {
	        if (!x && ~_xProps.indexOf(p)) {
	          x = p;
	        } else if (!y && ~_yProps.indexOf(p)) {
	          y = p;
	        }
	      }

	      if (x && y) {
	        rawPaths.push(_segmentToRawPath(this, _populateSegmentFromArray(_populateSegmentFromArray([], path, x, 0), path, y, 1), target, x, y, slicer, vars, unitX || _getUnit(path[0][x]), unitY || _getUnit(path[0][y])));
	      } else {
	        x = y = 0;
	      }

	      for (p in firstObj) {
	        p !== x && p !== y && rawPaths.push(_segmentToRawPath(this, _populateSegmentFromArray([], path, p, 2), target, p, 0, slicer, vars, _getUnit(path[0][p])));
	      }
	    } else {
	      rawPath = slicer(_align(getRawPath(vars.path), target, vars));
	      cacheRawPathMeasurements(rawPath, vars.resolution);
	      rawPaths.push(rawPath);

	      _addDimensionalPropTween(this, target, vars.x || "x", rawPath, "x", vars.unitX || "px");

	      _addDimensionalPropTween(this, target, vars.y || "y", rawPath, "y", vars.unitY || "px");
	    }
	  },
	  render: function render(ratio, data) {
	    var rawPaths = data.rawPaths,
	        i = rawPaths.length,
	        pt = data._pt;

	    if (ratio > 1) {
	      ratio = 1;
	    } else if (ratio < 0) {
	      ratio = 0;
	    }

	    while (i--) {
	      getPositionOnPath(rawPaths[i], ratio, !i && data.rotate, rawPaths[i]);
	    }

	    while (pt) {
	      pt.set(pt.t, pt.p, pt.path[pt.pp] + pt.u, pt.d, ratio);
	      pt = pt._next;
	    }

	    data.rotate && data.rSet(data.target, data.rProp, rawPaths[0].angle * (data.radians ? _DEG2RAD$1 : 1) + data.rOffset + data.ru, data, ratio);
	  },
	  getLength: function getLength(path) {
	    return cacheRawPathMeasurements(getRawPath(path)).totalLength;
	  },
	  sliceRawPath: sliceRawPath,
	  getRawPath: getRawPath,
	  pointsToSegment: pointsToSegment,
	  stringToRawPath: stringToRawPath,
	  rawPathToString: rawPathToString,
	  transformRawPath: transformRawPath,
	  getGlobalMatrix: getGlobalMatrix,
	  getPositionOnPath: getPositionOnPath,
	  cacheRawPathMeasurements: cacheRawPathMeasurements,
	  convertToPath: function convertToPath$1(targets, swap) {
	    return _toArray(targets).map(function (target) {
	      return convertToPath(target, swap !== false);
	    });
	  },
	  convertCoordinates: function convertCoordinates(fromElement, toElement, point) {
	    var m = getGlobalMatrix(toElement, true, true).multiply(getGlobalMatrix(fromElement));
	    return point ? m.apply(point) : m;
	  },
	  getAlignMatrix: _getAlignMatrix,
	  getRelativePosition: function getRelativePosition(fromElement, toElement, fromOrigin, toOrigin) {
	    var m = _getAlignMatrix(fromElement, toElement, fromOrigin, toOrigin);

	    return {
	      x: m.e,
	      y: m.f
	    };
	  },
	  arrayToRawPath: function arrayToRawPath(value, vars) {
	    vars = vars || {};

	    var segment = _populateSegmentFromArray(_populateSegmentFromArray([], value, vars.x || "x", 0), value, vars.y || "y", 1);

	    vars.relative && _relativize(segment);
	    return [vars.type === "cubic" ? segment : pointsToSegment(segment, vars.curviness)];
	  }
	};
	_getGSAP() && gsap.registerPlugin(MotionPathPlugin);

	exports.MotionPathPlugin = MotionPathPlugin;
	exports.default = MotionPathPlugin;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

;(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

	/*!
	 * PixiPlugin 3.6.1
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2021, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/
	var gsap,
	    _win,
	    _splitColor,
	    _coreInitted,
	    _PIXI,
	    PropTween,
	    _getSetter,
	    _windowExists = function _windowExists() {
	  return typeof window !== "undefined";
	},
	    _getGSAP = function _getGSAP() {
	  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
	},
	    _isFunction = function _isFunction(value) {
	  return typeof value === "function";
	},
	    _warn = function _warn(message) {
	  return console.warn(message);
	},
	    _idMatrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
	    _lumR = 0.212671,
	    _lumG = 0.715160,
	    _lumB = 0.072169,
	    _applyMatrix = function _applyMatrix(m, m2) {
	  var temp = [],
	      i = 0,
	      z = 0,
	      y,
	      x;

	  for (y = 0; y < 4; y++) {
	    for (x = 0; x < 5; x++) {
	      z = x === 4 ? m[i + 4] : 0;
	      temp[i + x] = m[i] * m2[x] + m[i + 1] * m2[x + 5] + m[i + 2] * m2[x + 10] + m[i + 3] * m2[x + 15] + z;
	    }

	    i += 5;
	  }

	  return temp;
	},
	    _setSaturation = function _setSaturation(m, n) {
	  var inv = 1 - n,
	      r = inv * _lumR,
	      g = inv * _lumG,
	      b = inv * _lumB;
	  return _applyMatrix([r + n, g, b, 0, 0, r, g + n, b, 0, 0, r, g, b + n, 0, 0, 0, 0, 0, 1, 0], m);
	},
	    _colorize = function _colorize(m, color, amount) {
	  var c = _splitColor(color),
	      r = c[0] / 255,
	      g = c[1] / 255,
	      b = c[2] / 255,
	      inv = 1 - amount;

	  return _applyMatrix([inv + amount * r * _lumR, amount * r * _lumG, amount * r * _lumB, 0, 0, amount * g * _lumR, inv + amount * g * _lumG, amount * g * _lumB, 0, 0, amount * b * _lumR, amount * b * _lumG, inv + amount * b * _lumB, 0, 0, 0, 0, 0, 1, 0], m);
	},
	    _setHue = function _setHue(m, n) {
	  n *= Math.PI / 180;
	  var c = Math.cos(n),
	      s = Math.sin(n);
	  return _applyMatrix([_lumR + c * (1 - _lumR) + s * -_lumR, _lumG + c * -_lumG + s * -_lumG, _lumB + c * -_lumB + s * (1 - _lumB), 0, 0, _lumR + c * -_lumR + s * 0.143, _lumG + c * (1 - _lumG) + s * 0.14, _lumB + c * -_lumB + s * -0.283, 0, 0, _lumR + c * -_lumR + s * -(1 - _lumR), _lumG + c * -_lumG + s * _lumG, _lumB + c * (1 - _lumB) + s * _lumB, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], m);
	},
	    _setContrast = function _setContrast(m, n) {
	  return _applyMatrix([n, 0, 0, 0, 0.5 * (1 - n), 0, n, 0, 0, 0.5 * (1 - n), 0, 0, n, 0, 0.5 * (1 - n), 0, 0, 0, 1, 0], m);
	},
	    _getFilter = function _getFilter(target, type) {
	  var filterClass = _PIXI.filters[type],
	      filters = target.filters || [],
	      i = filters.length,
	      filter;

	  if (!filterClass) {
	    _warn(type + " not found. PixiPlugin.registerPIXI(PIXI)");
	  }

	  while (--i > -1) {
	    if (filters[i] instanceof filterClass) {
	      return filters[i];
	    }
	  }

	  filter = new filterClass();

	  if (type === "BlurFilter") {
	    filter.blur = 0;
	  }

	  filters.push(filter);
	  target.filters = filters;
	  return filter;
	},
	    _addColorMatrixFilterCacheTween = function _addColorMatrixFilterCacheTween(p, plugin, cache, vars) {
	  plugin.add(cache, p, cache[p], vars[p]);

	  plugin._props.push(p);
	},
	    _applyBrightnessToMatrix = function _applyBrightnessToMatrix(brightness, matrix) {
	  var temp = new _PIXI.filters.ColorMatrixFilter();
	  temp.matrix = matrix;
	  temp.brightness(brightness, true);
	  return temp.matrix;
	},
	    _copy = function _copy(obj) {
	  var copy = {},
	      p;

	  for (p in obj) {
	    copy[p] = obj[p];
	  }

	  return copy;
	},
	    _CMFdefaults = {
	  contrast: 1,
	  saturation: 1,
	  colorizeAmount: 0,
	  colorize: "rgb(255,255,255)",
	  hue: 0,
	  brightness: 1
	},
	    _parseColorMatrixFilter = function _parseColorMatrixFilter(target, v, pg) {
	  var filter = _getFilter(target, "ColorMatrixFilter"),
	      cache = target._gsColorMatrixFilter = target._gsColorMatrixFilter || _copy(_CMFdefaults),
	      combine = v.combineCMF && !("colorMatrixFilter" in v && !v.colorMatrixFilter),
	      i,
	      matrix,
	      startMatrix;

	  startMatrix = filter.matrix;

	  if (v.resolution) {
	    filter.resolution = v.resolution;
	  }

	  if (v.matrix && v.matrix.length === startMatrix.length) {
	    matrix = v.matrix;

	    if (cache.contrast !== 1) {
	      _addColorMatrixFilterCacheTween("contrast", pg, cache, _CMFdefaults);
	    }

	    if (cache.hue) {
	      _addColorMatrixFilterCacheTween("hue", pg, cache, _CMFdefaults);
	    }

	    if (cache.brightness !== 1) {
	      _addColorMatrixFilterCacheTween("brightness", pg, cache, _CMFdefaults);
	    }

	    if (cache.colorizeAmount) {
	      _addColorMatrixFilterCacheTween("colorize", pg, cache, _CMFdefaults);

	      _addColorMatrixFilterCacheTween("colorizeAmount", pg, cache, _CMFdefaults);
	    }

	    if (cache.saturation !== 1) {
	      _addColorMatrixFilterCacheTween("saturation", pg, cache, _CMFdefaults);
	    }
	  } else {
	    matrix = _idMatrix.slice();

	    if (v.contrast != null) {
	      matrix = _setContrast(matrix, +v.contrast);

	      _addColorMatrixFilterCacheTween("contrast", pg, cache, v);
	    } else if (cache.contrast !== 1) {
	      if (combine) {
	        matrix = _setContrast(matrix, cache.contrast);
	      } else {
	        _addColorMatrixFilterCacheTween("contrast", pg, cache, _CMFdefaults);
	      }
	    }

	    if (v.hue != null) {
	      matrix = _setHue(matrix, +v.hue);

	      _addColorMatrixFilterCacheTween("hue", pg, cache, v);
	    } else if (cache.hue) {
	      if (combine) {
	        matrix = _setHue(matrix, cache.hue);
	      } else {
	        _addColorMatrixFilterCacheTween("hue", pg, cache, _CMFdefaults);
	      }
	    }

	    if (v.brightness != null) {
	      matrix = _applyBrightnessToMatrix(+v.brightness, matrix);

	      _addColorMatrixFilterCacheTween("brightness", pg, cache, v);
	    } else if (cache.brightness !== 1) {
	      if (combine) {
	        matrix = _applyBrightnessToMatrix(cache.brightness, matrix);
	      } else {
	        _addColorMatrixFilterCacheTween("brightness", pg, cache, _CMFdefaults);
	      }
	    }

	    if (v.colorize != null) {
	      v.colorizeAmount = "colorizeAmount" in v ? +v.colorizeAmount : 1;
	      matrix = _colorize(matrix, v.colorize, v.colorizeAmount);

	      _addColorMatrixFilterCacheTween("colorize", pg, cache, v);

	      _addColorMatrixFilterCacheTween("colorizeAmount", pg, cache, v);
	    } else if (cache.colorizeAmount) {
	      if (combine) {
	        matrix = _colorize(matrix, cache.colorize, cache.colorizeAmount);
	      } else {
	        _addColorMatrixFilterCacheTween("colorize", pg, cache, _CMFdefaults);

	        _addColorMatrixFilterCacheTween("colorizeAmount", pg, cache, _CMFdefaults);
	      }
	    }

	    if (v.saturation != null) {
	      matrix = _setSaturation(matrix, +v.saturation);

	      _addColorMatrixFilterCacheTween("saturation", pg, cache, v);
	    } else if (cache.saturation !== 1) {
	      if (combine) {
	        matrix = _setSaturation(matrix, cache.saturation);
	      } else {
	        _addColorMatrixFilterCacheTween("saturation", pg, cache, _CMFdefaults);
	      }
	    }
	  }

	  i = matrix.length;

	  while (--i > -1) {
	    if (matrix[i] !== startMatrix[i]) {
	      pg.add(startMatrix, i, startMatrix[i], matrix[i], "colorMatrixFilter");
	    }
	  }

	  pg._props.push("colorMatrixFilter");
	},
	    _renderColor = function _renderColor(ratio, _ref) {
	  var t = _ref.t,
	      p = _ref.p,
	      color = _ref.color,
	      set = _ref.set;
	  set(t, p, color[0] << 16 | color[1] << 8 | color[2]);
	},
	    _renderDirtyCache = function _renderDirtyCache(ratio, _ref2) {
	  var g = _ref2.g;

	  if (g) {
	    g.dirty++;
	    g.clearDirty++;
	  }
	},
	    _renderAutoAlpha = function _renderAutoAlpha(ratio, data) {
	  data.t.visible = !!data.t.alpha;
	},
	    _addColorTween = function _addColorTween(target, p, value, plugin) {
	  var currentValue = target[p],
	      startColor = _splitColor(_isFunction(currentValue) ? target[p.indexOf("set") || !_isFunction(target["get" + p.substr(3)]) ? p : "get" + p.substr(3)]() : currentValue),
	      endColor = _splitColor(value);

	  plugin._pt = new PropTween(plugin._pt, target, p, 0, 0, _renderColor, {
	    t: target,
	    p: p,
	    color: startColor,
	    set: _getSetter(target, p)
	  });
	  plugin.add(startColor, 0, startColor[0], endColor[0]);
	  plugin.add(startColor, 1, startColor[1], endColor[1]);
	  plugin.add(startColor, 2, startColor[2], endColor[2]);
	},
	    _colorProps = {
	  tint: 1,
	  lineColor: 1,
	  fillColor: 1
	},
	    _xyContexts = "position,scale,skew,pivot,anchor,tilePosition,tileScale".split(","),
	    _contexts = {
	  x: "position",
	  y: "position",
	  tileX: "tilePosition",
	  tileY: "tilePosition"
	},
	    _colorMatrixFilterProps = {
	  colorMatrixFilter: 1,
	  saturation: 1,
	  contrast: 1,
	  hue: 1,
	  colorize: 1,
	  colorizeAmount: 1,
	  brightness: 1,
	  combineCMF: 1
	},
	    _DEG2RAD = Math.PI / 180,
	    _isString = function _isString(value) {
	  return typeof value === "string";
	},
	    _degreesToRadians = function _degreesToRadians(value) {
	  return _isString(value) && value.charAt(1) === "=" ? value.substr(0, 2) + parseFloat(value.substr(2)) * _DEG2RAD : value * _DEG2RAD;
	},
	    _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
	  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 100000) / 100000, data);
	},
	    _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue, radians) {
	  var cap = 360 * (radians ? _DEG2RAD : 1),
	      isString = _isString(endValue),
	      relative = isString && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0,
	      endNum = parseFloat(relative ? endValue.substr(2) : endValue) * (radians ? _DEG2RAD : 1),
	      change = relative ? endNum * relative : endNum - startNum,
	      finalValue = startNum + change,
	      direction,
	      pt;

	  if (isString) {
	    direction = endValue.split("_")[1];

	    if (direction === "short") {
	      change %= cap;

	      if (change !== change % (cap / 2)) {
	        change += change < 0 ? cap : -cap;
	      }
	    }

	    if (direction === "cw" && change < 0) {
	      change = (change + cap * 1e10) % cap - ~~(change / cap) * cap;
	    } else if (direction === "ccw" && change > 0) {
	      change = (change - cap * 1e10) % cap - ~~(change / cap) * cap;
	    }
	  }

	  plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
	  pt.e = finalValue;
	  return pt;
	},
	    _initCore = function _initCore() {
	  if (_windowExists()) {
	    _win = window;
	    gsap = _coreInitted = _getGSAP();
	    _PIXI = _PIXI || _win.PIXI;

	    _splitColor = function _splitColor(color) {
	      return gsap.utils.splitColor((color + "").substr(0, 2) === "0x" ? "#" + color.substr(2) : color);
	    };
	  }
	},
	    i,
	    p;

	for (i = 0; i < _xyContexts.length; i++) {
	  p = _xyContexts[i];
	  _contexts[p + "X"] = p;
	  _contexts[p + "Y"] = p;
	}

	var PixiPlugin = {
	  version: "3.6.1",
	  name: "pixi",
	  register: function register(core, Plugin, propTween) {
	    gsap = core;
	    PropTween = propTween;
	    _getSetter = Plugin.getSetter;

	    _initCore();
	  },
	  registerPIXI: function registerPIXI(pixi) {
	    _PIXI = pixi;
	  },
	  init: function init(target, values, tween, index, targets) {
	    if (!_PIXI) {
	      _initCore();
	    }

	    if (!target instanceof _PIXI.DisplayObject) {
	      return false;
	    }

	    var isV4 = _PIXI.VERSION.charAt(0) === "4",
	        context,
	        axis,
	        value,
	        colorMatrix,
	        filter,
	        p,
	        padding,
	        i,
	        data;

	    for (p in values) {
	      context = _contexts[p];
	      value = values[p];

	      if (context) {
	        axis = ~p.charAt(p.length - 1).toLowerCase().indexOf("x") ? "x" : "y";
	        this.add(target[context], axis, target[context][axis], context === "skew" ? _degreesToRadians(value) : value);
	      } else if (p === "scale" || p === "anchor" || p === "pivot" || p === "tileScale") {
	        this.add(target[p], "x", target[p].x, value);
	        this.add(target[p], "y", target[p].y, value);
	      } else if (p === "rotation" || p === "angle") {
	        _addRotationalPropTween(this, target, p, target[p], value, p === "rotation");
	      } else if (_colorMatrixFilterProps[p]) {
	        if (!colorMatrix) {
	          _parseColorMatrixFilter(target, values.colorMatrixFilter || values, this);

	          colorMatrix = true;
	        }
	      } else if (p === "blur" || p === "blurX" || p === "blurY" || p === "blurPadding") {
	        filter = _getFilter(target, "BlurFilter");
	        this.add(filter, p, filter[p], value);

	        if (values.blurPadding !== 0) {
	          padding = values.blurPadding || Math.max(filter[p], value) * 2;
	          i = target.filters.length;

	          while (--i > -1) {
	            target.filters[i].padding = Math.max(target.filters[i].padding, padding);
	          }
	        }
	      } else if (_colorProps[p]) {
	        if ((p === "lineColor" || p === "fillColor") && target instanceof _PIXI.Graphics) {
	          data = (target.geometry || target).graphicsData;
	          this._pt = new PropTween(this._pt, target, p, 0, 0, _renderDirtyCache, {
	            g: target.geometry || target
	          });
	          i = data.length;

	          while (--i > -1) {
	            _addColorTween(isV4 ? data[i] : data[i][p.substr(0, 4) + "Style"], isV4 ? p : "color", value, this);
	          }
	        } else {
	          _addColorTween(target, p, value, this);
	        }
	      } else if (p === "autoAlpha") {
	        this._pt = new PropTween(this._pt, target, "visible", 0, 0, _renderAutoAlpha);
	        this.add(target, "alpha", target.alpha, value);

	        this._props.push("alpha", "visible");
	      } else if (p !== "resolution") {
	        this.add(target, p, "get", value);
	      }

	      this._props.push(p);
	    }
	  }
	};
	_getGSAP() && gsap.registerPlugin(PixiPlugin);

	exports.PixiPlugin = PixiPlugin;
	exports.default = PixiPlugin;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

;(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

	/*!
	 * ScrollToPlugin 3.6.1
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2021, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/
	var gsap,
	    _coreInitted,
	    _window,
	    _docEl,
	    _body,
	    _toArray,
	    _config,
	    _windowExists = function _windowExists() {
	  return typeof window !== "undefined";
	},
	    _getGSAP = function _getGSAP() {
	  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
	},
	    _isString = function _isString(value) {
	  return typeof value === "string";
	},
	    _isFunction = function _isFunction(value) {
	  return typeof value === "function";
	},
	    _max = function _max(element, axis) {
	  var dim = axis === "x" ? "Width" : "Height",
	      scroll = "scroll" + dim,
	      client = "client" + dim;
	  return element === _window || element === _docEl || element === _body ? Math.max(_docEl[scroll], _body[scroll]) - (_window["inner" + dim] || _docEl[client] || _body[client]) : element[scroll] - element["offset" + dim];
	},
	    _buildGetter = function _buildGetter(e, axis) {
	  var p = "scroll" + (axis === "x" ? "Left" : "Top");

	  if (e === _window) {
	    if (e.pageXOffset != null) {
	      p = "page" + axis.toUpperCase() + "Offset";
	    } else {
	      e = _docEl[p] != null ? _docEl : _body;
	    }
	  }

	  return function () {
	    return e[p];
	  };
	},
	    _clean = function _clean(value, index, target, targets) {
	  _isFunction(value) && (value = value(index, target, targets));

	  if (typeof value !== "object") {
	    return _isString(value) && value !== "max" && value.charAt(1) !== "=" ? {
	      x: value,
	      y: value
	    } : {
	      y: value
	    };
	  } else if (value.nodeType) {
	    return {
	      y: value,
	      x: value
	    };
	  } else {
	    var result = {},
	        p;

	    for (p in value) {
	      result[p] = p !== "onAutoKill" && _isFunction(value[p]) ? value[p](index, target, targets) : value[p];
	    }

	    return result;
	  }
	},
	    _getOffset = function _getOffset(element, container) {
	  element = _toArray(element)[0];

	  if (!element || !element.getBoundingClientRect) {
	    return console.warn("scrollTo target doesn't exist. Using 0") || {
	      x: 0,
	      y: 0
	    };
	  }

	  var rect = element.getBoundingClientRect(),
	      isRoot = !container || container === _window || container === _body,
	      cRect = isRoot ? {
	    top: _docEl.clientTop - (_window.pageYOffset || _docEl.scrollTop || _body.scrollTop || 0),
	    left: _docEl.clientLeft - (_window.pageXOffset || _docEl.scrollLeft || _body.scrollLeft || 0)
	  } : container.getBoundingClientRect(),
	      offsets = {
	    x: rect.left - cRect.left,
	    y: rect.top - cRect.top
	  };

	  if (!isRoot && container) {
	    offsets.x += _buildGetter(container, "x")();
	    offsets.y += _buildGetter(container, "y")();
	  }

	  return offsets;
	},
	    _parseVal = function _parseVal(value, target, axis, currentVal, offset) {
	  return !isNaN(value) && typeof value !== "object" ? parseFloat(value) - offset : _isString(value) && value.charAt(1) === "=" ? parseFloat(value.substr(2)) * (value.charAt(0) === "-" ? -1 : 1) + currentVal - offset : value === "max" ? _max(target, axis) - offset : Math.min(_max(target, axis), _getOffset(value, target)[axis] - offset);
	},
	    _initCore = function _initCore() {
	  gsap = _getGSAP();

	  if (_windowExists() && gsap && document.body) {
	    _window = window;
	    _body = document.body;
	    _docEl = document.documentElement;
	    _toArray = gsap.utils.toArray;
	    gsap.config({
	      autoKillThreshold: 7
	    });
	    _config = gsap.config();
	    _coreInitted = 1;
	  }
	};

	var ScrollToPlugin = {
	  version: "3.6.1",
	  name: "scrollTo",
	  rawVars: 1,
	  register: function register(core) {
	    gsap = core;

	    _initCore();
	  },
	  init: function init(target, value, tween, index, targets) {
	    _coreInitted || _initCore();
	    var data = this;
	    data.isWin = target === _window;
	    data.target = target;
	    data.tween = tween;
	    value = _clean(value, index, target, targets);
	    data.vars = value;
	    data.autoKill = !!value.autoKill;
	    data.getX = _buildGetter(target, "x");
	    data.getY = _buildGetter(target, "y");
	    data.x = data.xPrev = data.getX();
	    data.y = data.yPrev = data.getY();

	    if (value.x != null) {
	      data.add(data, "x", data.x, _parseVal(value.x, target, "x", data.x, value.offsetX || 0), index, targets);

	      data._props.push("scrollTo_x");
	    } else {
	      data.skipX = 1;
	    }

	    if (value.y != null) {
	      data.add(data, "y", data.y, _parseVal(value.y, target, "y", data.y, value.offsetY || 0), index, targets);

	      data._props.push("scrollTo_y");
	    } else {
	      data.skipY = 1;
	    }
	  },
	  render: function render(ratio, data) {
	    var pt = data._pt,
	        target = data.target,
	        tween = data.tween,
	        autoKill = data.autoKill,
	        xPrev = data.xPrev,
	        yPrev = data.yPrev,
	        isWin = data.isWin,
	        x,
	        y,
	        yDif,
	        xDif,
	        threshold;

	    while (pt) {
	      pt.r(ratio, pt.d);
	      pt = pt._next;
	    }

	    x = isWin || !data.skipX ? data.getX() : xPrev;
	    y = isWin || !data.skipY ? data.getY() : yPrev;
	    yDif = y - yPrev;
	    xDif = x - xPrev;
	    threshold = _config.autoKillThreshold;

	    if (data.x < 0) {
	      data.x = 0;
	    }

	    if (data.y < 0) {
	      data.y = 0;
	    }

	    if (autoKill) {
	      if (!data.skipX && (xDif > threshold || xDif < -threshold) && x < _max(target, "x")) {
	        data.skipX = 1;
	      }

	      if (!data.skipY && (yDif > threshold || yDif < -threshold) && y < _max(target, "y")) {
	        data.skipY = 1;
	      }

	      if (data.skipX && data.skipY) {
	        tween.kill();
	        data.vars.onAutoKill && data.vars.onAutoKill.apply(tween, data.vars.onAutoKillParams || []);
	      }
	    }

	    if (isWin) {
	      _window.scrollTo(!data.skipX ? data.x : x, !data.skipY ? data.y : y);
	    } else {
	      data.skipY || (target.scrollTop = data.y);
	      data.skipX || (target.scrollLeft = data.x);
	    }

	    data.xPrev = data.x;
	    data.yPrev = data.y;
	  },
	  kill: function kill(property) {
	    var both = property === "scrollTo";

	    if (both || property === "scrollTo_x") {
	      this.skipX = 1;
	    }

	    if (both || property === "scrollTo_y") {
	      this.skipY = 1;
	    }
	  }
	};
	ScrollToPlugin.max = _max;
	ScrollToPlugin.getOffset = _getOffset;
	ScrollToPlugin.buildGetter = _buildGetter;
	_getGSAP() && gsap.registerPlugin(ScrollToPlugin);

	exports.ScrollToPlugin = ScrollToPlugin;
	exports.default = ScrollToPlugin;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

;(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

	var _trimExp = /(^\s+|\s+$)/g;
	var emojiExp = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
	function getText(e) {
	  var type = e.nodeType,
	      result = "";

	  if (type === 1 || type === 9 || type === 11) {
	    if (typeof e.textContent === "string") {
	      return e.textContent;
	    } else {
	      for (e = e.firstChild; e; e = e.nextSibling) {
	        result += getText(e);
	      }
	    }
	  } else if (type === 3 || type === 4) {
	    return e.nodeValue;
	  }

	  return result;
	}
	function splitInnerHTML(element, delimiter, trim) {
	  var node = element.firstChild,
	      result = [];

	  while (node) {
	    if (node.nodeType === 3) {
	      result.push.apply(result, emojiSafeSplit((node.nodeValue + "").replace(/^\n+/g, "").replace(/\s+/g, " "), delimiter, trim));
	    } else if ((node.nodeName + "").toLowerCase() === "br") {
	      result[result.length - 1] += "<br>";
	    } else {
	      result.push(node.outerHTML);
	    }

	    node = node.nextSibling;
	  }

	  return result;
	}
	function emojiSafeSplit(text, delimiter, trim) {
	  text += "";

	  if (trim) {
	    text = text.replace(_trimExp, "");
	  }

	  if (delimiter && delimiter !== "") {
	    return text.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(delimiter);
	  }

	  var result = [],
	      l = text.length,
	      i = 0,
	      j,
	      character;

	  for (; i < l; i++) {
	    character = text.charAt(i);

	    if (character.charCodeAt(0) >= 0xD800 && character.charCodeAt(0) <= 0xDBFF || text.charCodeAt(i + 1) >= 0xFE00 && text.charCodeAt(i + 1) <= 0xFE0F) {
	      j = ((text.substr(i, 12).split(emojiExp) || [])[1] || "").length || 2;
	      character = text.substr(i, j);
	      result.emoji = 1;
	      i += j - 1;
	    }

	    result.push(character === ">" ? "&gt;" : character === "<" ? "&lt;" : character);
	  }

	  return result;
	}

	/*!
	 * TextPlugin 3.6.1
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2021, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/

	var gsap,
	    _tempDiv,
	    _getGSAP = function _getGSAP() {
	  return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
	};

	var TextPlugin = {
	  version: "3.6.1",
	  name: "text",
	  init: function init(target, value, tween) {
	    var i = target.nodeName.toUpperCase(),
	        data = this,
	        _short,
	        text,
	        original,
	        j,
	        condensedText,
	        condensedOriginal,
	        aggregate,
	        s;

	    data.svg = target.getBBox && (i === "TEXT" || i === "TSPAN");

	    if (!("innerHTML" in target) && !data.svg) {
	      return false;
	    }

	    data.target = target;

	    if (typeof value !== "object") {
	      value = {
	        value: value
	      };
	    }

	    if (!("value" in value)) {
	      data.text = data.original = [""];
	      return;
	    }

	    data.delimiter = value.delimiter || "";
	    original = splitInnerHTML(target, data.delimiter);

	    if (!_tempDiv) {
	      _tempDiv = document.createElement("div");
	    }

	    _tempDiv.innerHTML = value.value;
	    text = splitInnerHTML(_tempDiv, data.delimiter);
	    data.from = tween._from;

	    if (data.from) {
	      i = original;
	      original = text;
	      text = i;
	    }

	    data.hasClass = !!(value.newClass || value.oldClass);
	    data.newClass = value.newClass;
	    data.oldClass = value.oldClass;
	    i = original.length - text.length;
	    _short = i < 0 ? original : text;
	    data.fillChar = value.fillChar || (value.padSpace ? "&nbsp;" : "");

	    if (i < 0) {
	      i = -i;
	    }

	    while (--i > -1) {
	      _short.push(data.fillChar);
	    }

	    if (value.type === "diff") {
	      j = 0;
	      condensedText = [];
	      condensedOriginal = [];
	      aggregate = "";

	      for (i = 0; i < text.length; i++) {
	        s = text[i];

	        if (s === original[i]) {
	          aggregate += s;
	        } else {
	          condensedText[j] = aggregate + s;
	          condensedOriginal[j++] = aggregate + original[i];
	          aggregate = "";
	        }
	      }

	      text = condensedText;
	      original = condensedOriginal;

	      if (aggregate) {
	        text.push(aggregate);
	        original.push(aggregate);
	      }
	    }

	    if (value.speed) {
	      tween.duration(Math.min(0.05 / value.speed * _short.length, value.maxDuration || 9999));
	    }

	    this.original = original;
	    this.text = text;

	    this._props.push("text");
	  },
	  render: function render(ratio, data) {
	    if (ratio > 1) {
	      ratio = 1;
	    } else if (ratio < 0) {
	      ratio = 0;
	    }

	    if (data.from) {
	      ratio = 1 - ratio;
	    }

	    var text = data.text,
	        hasClass = data.hasClass,
	        newClass = data.newClass,
	        oldClass = data.oldClass,
	        delimiter = data.delimiter,
	        target = data.target,
	        fillChar = data.fillChar,
	        original = data.original,
	        l = text.length,
	        i = ratio * l + 0.5 | 0,
	        applyNew,
	        applyOld,
	        str;

	    if (hasClass) {
	      applyNew = newClass && i;
	      applyOld = oldClass && i !== l;
	      str = (applyNew ? "<span class='" + newClass + "'>" : "") + text.slice(0, i).join(delimiter) + (applyNew ? "</span>" : "") + (applyOld ? "<span class='" + oldClass + "'>" : "") + delimiter + original.slice(i).join(delimiter) + (applyOld ? "</span>" : "");
	    } else {
	      str = text.slice(0, i).join(delimiter) + delimiter + original.slice(i).join(delimiter);
	    }

	    if (data.svg) {
	      target.textContent = str;
	    } else {
	      target.innerHTML = fillChar === "&nbsp;" && ~str.indexOf("  ") ? str.split("  ").join("&nbsp;&nbsp;") : str;
	    }
	  }
	};
	TextPlugin.splitInnerHTML = splitInnerHTML;
	TextPlugin.emojiSafeSplit = emojiSafeSplit;
	TextPlugin.getText = getText;
	_getGSAP() && gsap.registerPlugin(TextPlugin);

	exports.TextPlugin = TextPlugin;
	exports.default = TextPlugin;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  /*!
   * GSAP 3.6.1
   * https://greensock.com
   *
   * @license Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */
  var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  },
      _defaults = {
    duration: .5,
    overwrite: false,
    delay: 0
  },
      _suppressOverwrites,
      _bigNum = 1e8,
      _tinyNum = 1 / _bigNum,
      _2PI = Math.PI * 2,
      _HALF_PI = _2PI / 4,
      _gsID = 0,
      _sqrt = Math.sqrt,
      _cos = Math.cos,
      _sin = Math.sin,
      _isString = function _isString(value) {
    return typeof value === "string";
  },
      _isFunction = function _isFunction(value) {
    return typeof value === "function";
  },
      _isNumber = function _isNumber(value) {
    return typeof value === "number";
  },
      _isUndefined = function _isUndefined(value) {
    return typeof value === "undefined";
  },
      _isObject = function _isObject(value) {
    return typeof value === "object";
  },
      _isNotFalse = function _isNotFalse(value) {
    return value !== false;
  },
      _windowExists = function _windowExists() {
    return typeof window !== "undefined";
  },
      _isFuncOrString = function _isFuncOrString(value) {
    return _isFunction(value) || _isString(value);
  },
      _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
      _isArray = Array.isArray,
      _strictNumExp = /(?:-?\.?\d|\.)+/gi,
      _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      _relExp = /[+-]=-?[.\d]+/,
      _delimitedValueExp = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
      _unitExp = /[\d.+\-=]+(?:e[-+]\d*)*/i,
      _globalTimeline,
      _win,
      _coreInitted,
      _doc,
      _globals = {},
      _installScope = {},
      _coreReady,
      _install = function _install(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  },
      _missingPlugin = function _missingPlugin(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  },
      _warn = function _warn(message, suppress) {
    return !suppress && console.warn(message);
  },
      _addGlobal = function _addGlobal(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
  },
      _emptyFunc = function _emptyFunc() {
    return 0;
  },
      _reservedProps = {},
      _lazyTweens = [],
      _lazyLookup = {},
      _lastRenderedFrame,
      _plugins = {},
      _effects = {},
      _nextGCFrame = 30,
      _harnessPlugins = [],
      _callbackNames = "",
      _harness = function _harness(targets) {
    var target = targets[0],
        harnessPlugin,
        i;
    _isObject(target) || _isFunction(target) || (targets = [targets]);

    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      i = _harnessPlugins.length;

      while (i-- && !_harnessPlugins[i].targetTest(target)) {}

      harnessPlugin = _harnessPlugins[i];
    }

    i = targets.length;

    while (i--) {
      targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    }

    return targets;
  },
      _getCache = function _getCache(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  },
      _getProperty = function _getProperty(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
  },
      _forEachName = function _forEachName(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  },
      _round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
  },
      _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
    var l = toFind.length,
        i = 0;

    for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

    return i < l;
  },
      _parseVars = function _parseVars(params, type, parent) {
    var isLegacy = _isNumber(params[1]),
        varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
        vars = params[varsIndex],
        irVars;

    isLegacy && (vars.duration = params[1]);
    vars.parent = parent;

    if (type) {
      irVars = vars;

      while (parent && !("immediateRender" in irVars)) {
        irVars = parent.vars.defaults || {};
        parent = _isNotFalse(parent.vars.inherit) && parent.parent;
      }

      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
    }

    return vars;
  },
      _lazyRender = function _lazyRender() {
    var l = _lazyTweens.length,
        a = _lazyTweens.slice(0),
        i,
        tween;

    _lazyLookup = {};
    _lazyTweens.length = 0;

    for (i = 0; i < l; i++) {
      tween = a[i];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  },
      _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
    _lazyTweens.length && _lazyRender();
    animation.render(time, suppressEvents, force);
    _lazyTweens.length && _lazyRender();
  },
      _numericIfPossible = function _numericIfPossible(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
  },
      _passThrough = function _passThrough(p) {
    return p;
  },
      _setDefaults = function _setDefaults(obj, defaults) {
    for (var p in defaults) {
      p in obj || (obj[p] = defaults[p]);
    }

    return obj;
  },
      _setKeyframeDefaults = function _setKeyframeDefaults(obj, defaults) {
    for (var p in defaults) {
      p in obj || p === "duration" || p === "ease" || (obj[p] = defaults[p]);
    }
  },
      _merge = function _merge(base, toMerge) {
    for (var p in toMerge) {
      base[p] = toMerge[p];
    }

    return base;
  },
      _mergeDeep = function _mergeDeep(base, toMerge) {
    for (var p in toMerge) {
      p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    }

    return base;
  },
      _copyExcluding = function _copyExcluding(obj, excluding) {
    var copy = {},
        p;

    for (p in obj) {
      p in excluding || (copy[p] = obj[p]);
    }

    return copy;
  },
      _inheritDefaults = function _inheritDefaults(vars) {
    var parent = vars.parent || _globalTimeline,
        func = vars.keyframes ? _setKeyframeDefaults : _setDefaults;

    if (_isNotFalse(vars.inherit)) {
      while (parent) {
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
      }
    }

    return vars;
  },
      _arraysMatch = function _arraysMatch(a1, a2) {
    var i = a1.length,
        match = i === a2.length;

    while (match && i-- && a1[i] === a2[i]) {}

    return i < 0;
  },
      _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }

    if (lastProp === void 0) {
      lastProp = "_last";
    }

    var prev = parent[lastProp],
        t;

    if (sortBy) {
      t = child[sortBy];

      while (prev && prev[sortBy] > t) {
        prev = prev._prev;
      }
    }

    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent[firstProp];
      parent[firstProp] = child;
    }

    if (child._next) {
      child._next._prev = child;
    } else {
      parent[lastProp] = child;
    }

    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
  },
      _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }

    if (lastProp === void 0) {
      lastProp = "_last";
    }

    var prev = child._prev,
        next = child._next;

    if (prev) {
      prev._next = next;
    } else if (parent[firstProp] === child) {
      parent[firstProp] = next;
    }

    if (next) {
      next._prev = prev;
    } else if (parent[lastProp] === child) {
      parent[lastProp] = prev;
    }

    child._next = child._prev = child.parent = null;
  },
      _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
    child._act = 0;
  },
      _uncache = function _uncache(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
      var a = animation;

      while (a) {
        a._dirty = 1;
        a = a.parent;
      }
    }

    return animation;
  },
      _recacheAncestors = function _recacheAncestors(animation) {
    var parent = animation.parent;

    while (parent && parent.parent) {
      parent._dirty = 1;
      parent.totalDuration();
      parent = parent.parent;
    }

    return animation;
  },
      _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
  },
      _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  },
      _animationCycle = function _animationCycle(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
  },
      _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  },
      _setEnd = function _setEnd(animation) {
    return animation._end = _round(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  },
      _alignPlayhead = function _alignPlayhead(animation, totalTime) {
    var parent = animation._dp;

    if (parent && parent.smoothChildTiming && animation._ts) {
      animation._start = _round(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

      _setEnd(animation);

      parent._dirty || _uncache(parent, animation);
    }

    return animation;
  },
      _postAddChecks = function _postAddChecks(timeline, child) {
    var t;

    if (child._time || child._initted && !child._dur) {
      t = _parentToChildTotalTime(timeline.rawTime(), child);

      if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
        child.render(t, true);
      }
    }

    if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
      if (timeline._dur < timeline.duration()) {
        t = timeline;

        while (t._dp) {
          t.rawTime() >= 0 && t.totalTime(t._tTime);
          t = t._dp;
        }
      }

      timeline._zTime = -_tinyNum;
    }
  },
      _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _round(position + child._delay);
    child._end = _round(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

    _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

    timeline._recent = child;
    skipChecks || _postAddChecks(timeline, child);
    return timeline;
  },
      _scrollTrigger = function _scrollTrigger(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  },
      _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
    _initTween(tween, totalTime);

    if (!tween._initted) {
      return 1;
    }

    if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);

      tween._lazy = [totalTime, suppressEvents];
      return 1;
    }
  },
      _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
  },
      _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio,
        ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) || (tween._ts < 0 || tween._dp._ts < 0) && tween.data !== "isFromStart" && tween.data !== "isStart") ? 0 : 1,
        repeatDelay = tween._rDelay,
        tTime = 0,
        pt,
        iteration,
        prevIteration;

    if (repeatDelay && tween._repeat) {
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      prevIteration = _animationCycle(tween._tTime, repeatDelay);
      tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

      if (iteration !== prevIteration) {
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }

    if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
        return;
      }

      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
      suppressEvents || (suppressEvents = totalTime && !prevIteration);
      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      pt = tween._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);

        if (!suppressEvents) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  },
      _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
    var child;

    if (time > prevTime) {
      child = animation._first;

      while (child && child._start <= time) {
        if (!child._dur && child.data === "isPause" && child._start > prevTime) {
          return child;
        }

        child = child._next;
      }
    } else {
      child = animation._last;

      while (child && child._start >= time) {
        if (!child._dur && child.data === "isPause" && child._start < prevTime) {
          return child;
        }

        child = child._prev;
      }
    }
  },
      _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat,
        dur = _round(duration) || 0,
        totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _round(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  },
      _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  },
      _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc
  },
      _parsePosition = function _parsePosition(animation, position) {
    var labels = animation.labels,
        recent = animation._recent || _zeroPosition,
        clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
        i,
        offset;

    if (_isString(position) && (isNaN(position) || position in labels)) {
      i = position.charAt(0);

      if (i === "<" || i === ">") {
        return (i === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0);
      }

      i = position.indexOf("=");

      if (i < 0) {
        position in labels || (labels[position] = clippedDuration);
        return labels[position];
      }

      offset = +(position.charAt(i - 1) + position.substr(i + 1));
      return i > 1 ? _parsePosition(animation, position.substr(0, i - 1)) + offset : clippedDuration + offset;
    }

    return position == null ? clippedDuration : +position;
  },
      _conditionalReturn = function _conditionalReturn(value, func) {
    return value || value === 0 ? func(value) : func;
  },
      _clamp = function _clamp(min, max, value) {
    return value < min ? min : value > max ? max : value;
  },
      getUnit = function getUnit(value) {
    if (typeof value !== "string") {
      return "";
    }

    var v = _unitExp.exec(value);

    return v ? value.substr(v.index + v[0].length) : "";
  },
      clamp = function clamp(min, max, value) {
    return _conditionalReturn(value, function (v) {
      return _clamp(min, max, v);
    });
  },
      _slice = [].slice,
      _isArrayLike = function _isArrayLike(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
  },
      _flatten = function _flatten(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }

    return ar.forEach(function (value) {
      var _accumulator;

      return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
  },
      toArray = function toArray(value, leaveStrings) {
    return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call(_doc.querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  },
      shuffle = function shuffle(a) {
    return a.sort(function () {
      return .5 - Math.random();
    });
  },
      distribute = function distribute(v) {
    if (_isFunction(v)) {
      return v;
    }

    var vars = _isObject(v) ? v : {
      each: v
    },
        ease = _parseEase(vars.ease),
        from = vars.from || 0,
        base = parseFloat(vars.base) || 0,
        cache = {},
        isDecimal = from > 0 && from < 1,
        ratios = isNaN(from) || isDecimal,
        axis = vars.axis,
        ratioX = from,
        ratioY = from;

    if (_isString(from)) {
      ratioX = ratioY = {
        center: .5,
        edges: .5,
        end: 1
      }[from] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from[0];
      ratioY = from[1];
    }

    return function (i, target, a) {
      var l = (a || vars).length,
          distances = cache[l],
          originX,
          originY,
          x,
          y,
          d,
          j,
          max,
          min,
          wrapAt;

      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

        if (!wrapAt) {
          max = -_bigNum;

          while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

          wrapAt--;
        }

        distances = cache[l] = [];
        originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
        originY = ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
        max = 0;
        min = _bigNum;

        for (j = 0; j < l; j++) {
          x = j % wrapAt - originX;
          y = originY - (j / wrapAt | 0);
          distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
          d > max && (max = d);
          d < min && (min = d);
        }

        from === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
        distances.b = l < 0 ? base - l : base;
        distances.u = getUnit(vars.amount || vars.each) || 0;
        ease = ease && l < 0 ? _invertEase(ease) : ease;
      }

      l = (distances[i] - distances.min) / distances.max || 0;
      return _round(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
    };
  },
      _roundModifier = function _roundModifier(v) {
    var p = v < 1 ? Math.pow(10, (v + "").length - 2) : 1;
    return function (raw) {
      var n = Math.round(parseFloat(raw) / v) * v * p;
      return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
    };
  },
      snap = function snap(snapTo, value) {
    var isArray = _isArray(snapTo),
        radius,
        is2D;

    if (!isArray && _isObject(snapTo)) {
      radius = isArray = snapTo.radius || _bigNum;

      if (snapTo.values) {
        snapTo = toArray(snapTo.values);

        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius;
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }

    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function (raw) {
      var x = parseFloat(is2D ? raw.x : raw),
          y = parseFloat(is2D ? raw.y : 0),
          min = _bigNum,
          closest = 0,
          i = snapTo.length,
          dx,
          dy;

      while (i--) {
        if (is2D) {
          dx = snapTo[i].x - x;
          dy = snapTo[i].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i] - x);
        }

        if (dx < min) {
          min = dx;
          closest = i;
        }
      }

      closest = !radius || min <= radius ? snapTo[closest] : raw;
      return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
  },
      random = function random(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  },
      pipe = function pipe() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }

    return function (value) {
      return functions.reduce(function (v, f) {
        return f(v);
      }, value);
    };
  },
      unitize = function unitize(func, unit) {
    return function (value) {
      return func(parseFloat(value)) + (unit || getUnit(value));
    };
  },
      normalize = function normalize(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  },
      _wrapArray = function _wrapArray(a, wrapper, value) {
    return _conditionalReturn(value, function (index) {
      return a[~~wrapper(index)];
    });
  },
      wrap = function wrap(min, max, value) {
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
      return (range + (value - min) % range) % range + min;
    });
  },
      wrapYoyo = function wrapYoyo(min, max, value) {
    var range = max - min,
        total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
      value = (total + (value - min) % total) % total || 0;
      return min + (value > range ? total - value : value);
    });
  },
      _replaceRandom = function _replaceRandom(value) {
    var prev = 0,
        s = "",
        i,
        nums,
        end,
        isArray;

    while (~(i = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i);
      isArray = value.charAt(i + 7) === "[";
      nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
      s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }

    return s + value.substr(prev, value.length - prev);
  },
      mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin,
        outRange = outMax - outMin;
    return _conditionalReturn(value, function (value) {
      return outMin + ((value - inMin) / inRange * outRange || 0);
    });
  },
      interpolate = function interpolate(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function (p) {
      return (1 - p) * start + p * end;
    };

    if (!func) {
      var isString = _isString(start),
          master = {},
          p,
          i,
          interpolators,
          l,
          il;

      progress === true && (mutate = 1) && (progress = null);

      if (isString) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l = start.length;
        il = l - 2;

        for (i = 1; i < l; i++) {
          interpolators.push(interpolate(start[i - 1], start[i]));
        }

        l--;

        func = function func(p) {
          p *= l;
          var i = Math.min(il, ~~p);
          return interpolators[i](p - i);
        };

        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }

      if (!interpolators) {
        for (p in end) {
          _addPropTween.call(master, start, p, "get", end[p]);
        }

        func = function func(p) {
          return _renderPropTweens(p, master) || (isString ? start.p : start);
        };
      }
    }

    return _conditionalReturn(progress, func);
  },
      _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
    var labels = timeline.labels,
        min = _bigNum,
        p,
        distance,
        label;

    for (p in labels) {
      distance = labels[p] - fromTime;

      if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
        label = p;
        min = distance;
      }
    }

    return label;
  },
      _callback = function _callback(animation, type, executeLazyFirst) {
    var v = animation.vars,
        callback = v[type],
        params,
        scope;

    if (!callback) {
      return;
    }

    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender();
    return params ? callback.apply(scope, params) : callback.call(scope);
  },
      _interrupt = function _interrupt(animation) {
    _removeFromParent(animation);

    animation.scrollTrigger && animation.scrollTrigger.kill(false);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
  },
      _quickTween,
      _createPlugin = function _createPlugin(config) {
    config = !config.name && config["default"] || config;

    var name = config.name,
        isFunc = _isFunction(config),
        Plugin = name && !isFunc && config.init ? function () {
      this._props = [];
    } : config,
        instanceDefaults = {
      init: _emptyFunc,
      render: _renderPropTweens,
      add: _addPropTween,
      kill: _killPropTweensOf,
      modifier: _addPluginModifier,
      rawVars: 0
    },
        statics = {
      targetTest: 0,
      get: 0,
      getSetter: _getSetter,
      aliases: {},
      register: 0
    };

    _wake();

    if (config !== Plugin) {
      if (_plugins[name]) {
        return;
      }

      _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics));

      _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));

      _plugins[Plugin.prop = name] = Plugin;

      if (config.targetTest) {
        _harnessPlugins.push(Plugin);

        _reservedProps[name] = 1;
      }

      name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
    }

    _addGlobal(name, Plugin);

    config.register && config.register(gsap, Plugin, PropTween);
  },
      _255 = 255,
      _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  },
      _hue = function _hue(h, m1, m2) {
    h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
  },
      splitColor = function splitColor(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
        r,
        g,
        b,
        h,
        s,
        l,
        max,
        min,
        d,
        wasHSL;

    if (!a) {
      if (v.substr(-1) === ",") {
        v = v.substr(0, v.length - 1);
      }

      if (_colorLookup[v]) {
        a = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length < 6) {
          r = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
        }

        if (v.length === 9) {
          a = parseInt(v.substr(1, 6), 16);
          return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
        }

        v = parseInt(v.substr(1), 16);
        a = [v >> 16, v >> 8 & _255, v & _255];
      } else if (v.substr(0, 3) === "hsl") {
        a = wasHSL = v.match(_strictNumExp);

        if (!toHSL) {
          h = +a[0] % 360 / 360;
          s = +a[1] / 100;
          l = +a[2] / 100;
          g = l <= .5 ? l * (s + 1) : l + s - l * s;
          r = l * 2 - g;
          a.length > 3 && (a[3] *= 1);
          a[0] = _hue(h + 1 / 3, r, g);
          a[1] = _hue(h, r, g);
          a[2] = _hue(h - 1 / 3, r, g);
        } else if (~v.indexOf("=")) {
          a = v.match(_numExp);
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }
      } else {
        a = v.match(_strictNumExp) || _colorLookup.transparent;
      }

      a = a.map(Number);
    }

    if (toHSL && !wasHSL) {
      r = a[0] / _255;
      g = a[1] / _255;
      b = a[2] / _255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      l = (max + min) / 2;

      if (max === min) {
        h = s = 0;
      } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        h *= 60;
      }

      a[0] = ~~(h + .5);
      a[1] = ~~(s * 100 + .5);
      a[2] = ~~(l * 100 + .5);
    }

    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
  },
      _colorOrderData = function _colorOrderData(v) {
    var values = [],
        c = [],
        i = -1;
    v.split(_colorExp).forEach(function (v) {
      var a = v.match(_numWithUnitExp) || [];
      values.push.apply(values, a);
      c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
  },
      _formatColors = function _formatColors(s, toHSL, orderMatchData) {
    var result = "",
        colors = (s + result).match(_colorExp),
        type = toHSL ? "hsla(" : "rgba(",
        i = 0,
        c,
        shell,
        d,
        l;

    if (!colors) {
      return s;
    }

    colors = colors.map(function (color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });

    if (orderMatchData) {
      d = _colorOrderData(s);
      c = orderMatchData.c;

      if (c.join(result) !== d.c.join(result)) {
        shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
        l = shell.length - 1;

        for (; i < l; i++) {
          result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }

    if (!shell) {
      shell = s.split(_colorExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + colors[i];
      }
    }

    return result + shell[l];
  },
      _colorExp = function () {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        p;

    for (p in _colorLookup) {
      s += "|" + p + "\\b";
    }

    return new RegExp(s + ")", "gi");
  }(),
      _hslExp = /hsl[a]?\(/,
      _colorStringFilter = function _colorStringFilter(a) {
    var combined = a.join(" "),
        toHSL;
    _colorExp.lastIndex = 0;

    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a[1] = _formatColors(a[1], toHSL);
      a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
      return true;
    }
  },
      _tickerActive,
      _ticker = function () {
    var _getTime = Date.now,
        _lagThreshold = 500,
        _adjustedLag = 33,
        _startTime = _getTime(),
        _lastUpdate = _startTime,
        _gap = 1000 / 240,
        _nextTime = _gap,
        _listeners = [],
        _id,
        _req,
        _raf,
        _self,
        _delta,
        _i,
        _tick = function _tick(v) {
      var elapsed = _getTime() - _lastUpdate,
          manual = v === true,
          overlap,
          dispatch,
          time,
          frame;

      elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
      _lastUpdate += elapsed;
      time = _lastUpdate - _startTime;
      overlap = time - _nextTime;

      if (overlap > 0 || manual) {
        frame = ++_self.frame;
        _delta = time - _self.time * 1000;
        _self.time = time = time / 1000;
        _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
        dispatch = 1;
      }

      manual || (_id = _req(_tick));

      if (dispatch) {
        for (_i = 0; _i < _listeners.length; _i++) {
          _listeners[_i](time, _delta, frame, v);
        }
      }
    };

    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1000 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists()) {
            _win = _coreInitted = window;
            _doc = _win.document || {};
            _globals.gsap = gsap;
            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

            _raf = _win.requestAnimationFrame;
          }

          _id && _self.sleep();

          _req = _raf || function (f) {
            return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
          };

          _tickerActive = 1;

          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || 1 / _tinyNum;
        _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
      },
      fps: function fps(_fps) {
        _gap = 1000 / (_fps || 240);
        _nextTime = _self.time * 1000 + _gap;
      },
      add: function add(callback) {
        _listeners.indexOf(callback) < 0 && _listeners.push(callback);

        _wake();
      },
      remove: function remove(callback) {
        var i;
        ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
      },
      _listeners: _listeners
    };
    return _self;
  }(),
      _wake = function _wake() {
    return !_tickerActive && _ticker.wake();
  },
      _easeMap = {},
      _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
      _quotesExp = /["']/g,
      _parseObjectInString = function _parseObjectInString(value) {
    var obj = {},
        split = value.substr(1, value.length - 3).split(":"),
        key = split[0],
        i = 1,
        l = split.length,
        index,
        val,
        parsedVal;

    for (; i < l; i++) {
      val = split[i];
      index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }

    return obj;
  },
      _valueInParentheses = function _valueInParentheses(value) {
    var open = value.indexOf("(") + 1,
        close = value.indexOf(")"),
        nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
  },
      _configEaseFromString = function _configEaseFromString(name) {
    var split = (name + "").split("("),
        ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
  },
      _invertEase = function _invertEase(ease) {
    return function (p) {
      return 1 - ease(1 - p);
    };
  },
      _propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
    var child = timeline._first,
        ease;

    while (child) {
      if (child instanceof Timeline) {
        _propagateYoyoEase(child, isYoyo);
      } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
        if (child.timeline) {
          _propagateYoyoEase(child.timeline, isYoyo);
        } else {
          ease = child._ease;
          child._ease = child._yEase;
          child._yEase = ease;
          child._yoyo = isYoyo;
        }
      }

      child = child._next;
    }
  },
      _parseEase = function _parseEase(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  },
      _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut(p) {
        return 1 - easeIn(1 - p);
      };
    }

    if (easeInOut === void 0) {
      easeInOut = function easeInOut(p) {
        return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
      };
    }

    var ease = {
      easeIn: easeIn,
      easeOut: easeOut,
      easeInOut: easeInOut
    },
        lowercaseName;

    _forEachName(names, function (name) {
      _easeMap[name] = _globals[name] = ease;
      _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

      for (var p in ease) {
        _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
      }
    });

    return ease;
  },
      _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
    return function (p) {
      return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
    };
  },
      _configElastic = function _configElastic(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1,
        p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
        p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
        easeOut = function easeOut(p) {
      return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    },
        ease = type === "out" ? easeOut : type === "in" ? function (p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);

    p2 = _2PI / p2;

    ease.config = function (amplitude, period) {
      return _configElastic(type, amplitude, period);
    };

    return ease;
  },
      _configBack = function _configBack(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }

    var easeOut = function easeOut(p) {
      return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    },
        ease = type === "out" ? easeOut : type === "in" ? function (p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);

    ease.config = function (overshoot) {
      return _configBack(type, overshoot);
    };

    return ease;
  };

  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
    var power = i < 5 ? i + 1 : i;

    _insertEase(name + ",Power" + (power - 1), i ? function (p) {
      return Math.pow(p, power);
    } : function (p) {
      return p;
    }, function (p) {
      return 1 - Math.pow(1 - p, power);
    }, function (p) {
      return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
  });

  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

  _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

  (function (n, c) {
    var n1 = 1 / c,
        n2 = 2 * n1,
        n3 = 2.5 * n1,
        easeOut = function easeOut(p) {
      return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
    };

    _insertEase("Bounce", function (p) {
      return 1 - easeOut(1 - p);
    }, easeOut);
  })(7.5625, 2.75);

  _insertEase("Expo", function (p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0;
  });

  _insertEase("Circ", function (p) {
    return -(_sqrt(1 - p * p) - 1);
  });

  _insertEase("Sine", function (p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
  });

  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

  _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
      if (steps === void 0) {
        steps = 1;
      }

      var p1 = 1 / steps,
          p2 = steps + (immediateStart ? 0 : 1),
          p3 = immediateStart ? 1 : 0,
          max = 1 - _tinyNum;
      return function (p) {
        return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
      };
    }
  };
  _defaults.ease = _easeMap["quad.out"];

  _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
    return _callbackNames += name + "," + name + "Params,";
  });

  var GSCache = function GSCache(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
  };
  var Animation = function () {
    function Animation(vars, time) {
      var parent = vars.parent || _globalTimeline;
      this.vars = vars;
      this._delay = +vars.delay || 0;

      if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }

      this._ts = 1;

      _setDuration(this, +vars.duration, 1, 1);

      this.data = vars.data;
      _tickerActive || _ticker.wake();
      parent && _addToTimeline(parent, this, time || time === 0 ? time : parent._time, 1);
      vars.reversed && this.reverse();
      vars.paused && this.paused(true);
    }

    var _proto = Animation.prototype;

    _proto.delay = function delay(value) {
      if (value || value === 0) {
        this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
        this._delay = value;
        return this;
      }

      return this._delay;
    };

    _proto.duration = function duration(value) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };

    _proto.totalDuration = function totalDuration(value) {
      if (!arguments.length) {
        return this._tDur;
      }

      this._dirty = 0;
      return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };

    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
      _wake();

      if (!arguments.length) {
        return this._tTime;
      }

      var parent = this._dp;

      if (parent && parent.smoothChildTiming && this._ts) {
        _alignPlayhead(this, _totalTime);

        !parent._dp || parent.parent || _postAddChecks(parent, this);

        while (parent.parent) {
          if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
            parent.totalTime(parent._tTime, true);
          }

          parent = parent.parent;
        }

        if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
          _addToTimeline(this._dp, this, this._start - this._delay);
        }
      }

      if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
        this._ts || (this._pTime = _totalTime);

        _lazySafeRender(this, _totalTime, suppressEvents);
      }

      return this;
    };

    _proto.time = function time(value, suppressEvents) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % this._dur || (value ? this._dur : 0), suppressEvents) : this._time;
    };

    _proto.totalProgress = function totalProgress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    };

    _proto.progress = function progress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    };

    _proto.iteration = function iteration(value, suppressEvents) {
      var cycleDuration = this.duration() + this._rDelay;

      return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    };

    _proto.timeScale = function timeScale(value) {
      if (!arguments.length) {
        return this._rts === -_tinyNum ? 0 : this._rts;
      }

      if (this._rts === value) {
        return this;
      }

      var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
      this._rts = +value || 0;
      this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
      return _recacheAncestors(this.totalTime(_clamp(-this._delay, this._tDur, tTime), true));
    };

    _proto.paused = function paused(value) {
      if (!arguments.length) {
        return this._ps;
      }

      if (this._ps !== value) {
        this._ps = value;

        if (value) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          _wake();

          this._ts = this._rts;
          this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && (this._tTime -= _tinyNum) && Math.abs(this._zTime) !== _tinyNum);
        }
      }

      return this;
    };

    _proto.startTime = function startTime(value) {
      if (arguments.length) {
        this._start = value;
        var parent = this.parent || this._dp;
        parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
        return this;
      }

      return this._start;
    };

    _proto.endTime = function endTime(includeRepeats) {
      return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
    };

    _proto.rawTime = function rawTime(wrapRepeats) {
      var parent = this.parent || this._dp;
      return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };

    _proto.globalTime = function globalTime(rawTime) {
      var animation = this,
          time = arguments.length ? rawTime : animation.rawTime();

      while (animation) {
        time = animation._start + time / (animation._ts || 1);
        animation = animation._dp;
      }

      return time;
    };

    _proto.repeat = function repeat(value) {
      if (arguments.length) {
        this._repeat = value === Infinity ? -2 : value;
        return _onUpdateTotalDuration(this);
      }

      return this._repeat === -2 ? Infinity : this._repeat;
    };

    _proto.repeatDelay = function repeatDelay(value) {
      if (arguments.length) {
        this._rDelay = value;
        return _onUpdateTotalDuration(this);
      }

      return this._rDelay;
    };

    _proto.yoyo = function yoyo(value) {
      if (arguments.length) {
        this._yoyo = value;
        return this;
      }

      return this._yoyo;
    };

    _proto.seek = function seek(position, suppressEvents) {
      return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };

    _proto.restart = function restart(includeDelay, suppressEvents) {
      return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };

    _proto.play = function play(from, suppressEvents) {
      from != null && this.seek(from, suppressEvents);
      return this.reversed(false).paused(false);
    };

    _proto.reverse = function reverse(from, suppressEvents) {
      from != null && this.seek(from || this.totalDuration(), suppressEvents);
      return this.reversed(true).paused(false);
    };

    _proto.pause = function pause(atTime, suppressEvents) {
      atTime != null && this.seek(atTime, suppressEvents);
      return this.paused(true);
    };

    _proto.resume = function resume() {
      return this.paused(false);
    };

    _proto.reversed = function reversed(value) {
      if (arguments.length) {
        !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
        return this;
      }

      return this._rts < 0;
    };

    _proto.invalidate = function invalidate() {
      this._initted = this._act = 0;
      this._zTime = -_tinyNum;
      return this;
    };

    _proto.isActive = function isActive() {
      var parent = this.parent || this._dp,
          start = this._start,
          rawTime;
      return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };

    _proto.eventCallback = function eventCallback(type, callback, params) {
      var vars = this.vars;

      if (arguments.length > 1) {
        if (!callback) {
          delete vars[type];
        } else {
          vars[type] = callback;
          params && (vars[type + "Params"] = params);
          type === "onUpdate" && (this._onUpdate = callback);
        }

        return this;
      }

      return vars[type];
    };

    _proto.then = function then(onFulfilled) {
      var self = this;
      return new Promise(function (resolve) {
        var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
            _resolve = function _resolve() {
          var _then = self.then;
          self.then = null;
          _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
          resolve(f);
          self.then = _then;
        };

        if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
          _resolve();
        } else {
          self._prom = _resolve;
        }
      });
    };

    _proto.kill = function kill() {
      _interrupt(this);
    };

    return Animation;
  }();

  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
  });

  var Timeline = function (_Animation) {
    _inheritsLoose(Timeline, _Animation);

    function Timeline(vars, time) {
      var _this;

      if (vars === void 0) {
        vars = {};
      }

      _this = _Animation.call(this, vars, time) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _this.parent && _postAddChecks(_this.parent, _assertThisInitialized(_this));
      vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }

    var _proto2 = Timeline.prototype;

    _proto2.to = function to(targets, vars, position) {
      new Tween(targets, _parseVars(arguments, 0, this), _parsePosition(this, _isNumber(vars) ? arguments[3] : position));
      return this;
    };

    _proto2.from = function from(targets, vars, position) {
      new Tween(targets, _parseVars(arguments, 1, this), _parsePosition(this, _isNumber(vars) ? arguments[3] : position));
      return this;
    };

    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
      new Tween(targets, _parseVars(arguments, 2, this), _parsePosition(this, _isNumber(fromVars) ? arguments[4] : position));
      return this;
    };

    _proto2.set = function set(targets, vars, position) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition(this, position), 1);
      return this;
    };

    _proto2.call = function call(callback, params, position) {
      return _addToTimeline(this, Tween.delayedCall(0, callback, params), _parsePosition(this, position));
    };

    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position));
      return this;
    };

    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };

    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
      return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };

    _proto2.render = function render(totalTime, suppressEvents, force) {
      var prevTime = this._time,
          tDur = this._dirty ? this.totalDuration() : this._tDur,
          dur = this._dur,
          tTime = this !== _globalTimeline && totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime,
          crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
          time,
          child,
          next,
          iteration,
          cycleDuration,
          prevPaused,
          pauseTween,
          timeScale,
          prevStart,
          prevIteration,
          yoyo,
          isYoyo;

      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }

        time = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;

        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }

        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;

          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }

          time = _round(tTime % cycleDuration);

          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);

            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }

            time > dur && (time = dur);
          }

          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration);

          if (yoyo && iteration & 1) {
            time = dur - time;
            isYoyo = 1;
          }

          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1,
                doesWrap = rewinding === (yoyo && iteration & 1);
            iteration < prevIteration && (rewinding = !rewinding);
            prevTime = rewinding ? 0 : dur;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _round(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
            !suppressEvents && this.parent && _callback(this, "onRepeat");
            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

            if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
              return this;
            }

            dur = this._dur;
            tDur = this._tDur;

            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur : -0.0001;
              this.render(prevTime, true);
            }

            this._lock = 0;

            if (!this._ts && !prevPaused) {
              return this;
            }

            _propagateYoyoEase(this, isYoyo);
          }
        }

        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(this, _round(prevTime), _round(time));

          if (pauseTween) {
            tTime -= time - (time = pauseTween._start);
          }
        }

        this._tTime = tTime;
        this._time = time;
        this._act = !timeScale;

        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
          prevTime = 0;
        }

        !prevTime && time && !suppressEvents && _callback(this, "onStart");

        if (time >= prevTime && totalTime >= 0) {
          child = this._first;

          while (child) {
            next = child._next;

            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }

              child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = -_tinyNum);
                break;
              }
            }

            child = next;
          }
        } else {
          child = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time;

          while (child) {
            next = child._prev;

            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }

              child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);

              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                break;
              }
            }

            child = next;
          }
        }

        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

          if (this._ts) {
            this._start = prevStart;

            _setEnd(this);

            return this.render(totalTime, suppressEvents, force);
          }
        }

        this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
        if (tTime === tDur && tDur >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
          (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);

          if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }

      return this;
    };

    _proto2.add = function add(child, position) {
      var _this2 = this;

      _isNumber(position) || (position = _parsePosition(this, position));

      if (!(child instanceof Animation)) {
        if (_isArray(child)) {
          child.forEach(function (obj) {
            return _this2.add(obj, position);
          });
          return this;
        }

        if (_isString(child)) {
          return this.addLabel(child, position);
        }

        if (_isFunction(child)) {
          child = Tween.delayedCall(0, child);
        } else {
          return this;
        }
      }

      return this !== child ? _addToTimeline(this, child, position) : this;
    };

    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
      if (nested === void 0) {
        nested = true;
      }

      if (tweens === void 0) {
        tweens = true;
      }

      if (timelines === void 0) {
        timelines = true;
      }

      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = -_bigNum;
      }

      var a = [],
          child = this._first;

      while (child) {
        if (child._start >= ignoreBeforeTime) {
          if (child instanceof Tween) {
            tweens && a.push(child);
          } else {
            timelines && a.push(child);
            nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
          }
        }

        child = child._next;
      }

      return a;
    };

    _proto2.getById = function getById(id) {
      var animations = this.getChildren(1, 1, 1),
          i = animations.length;

      while (i--) {
        if (animations[i].vars.id === id) {
          return animations[i];
        }
      }
    };

    _proto2.remove = function remove(child) {
      if (_isString(child)) {
        return this.removeLabel(child);
      }

      if (_isFunction(child)) {
        return this.killTweensOf(child);
      }

      _removeLinkedListItem(this, child);

      if (child === this._recent) {
        this._recent = this._last;
      }

      return _uncache(this);
    };

    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
      if (!arguments.length) {
        return this._tTime;
      }

      this._forcing = 1;

      if (!this._dp && this._ts) {
        this._start = _round(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
      }

      _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

      this._forcing = 0;
      return this;
    };

    _proto2.addLabel = function addLabel(label, position) {
      this.labels[label] = _parsePosition(this, position);
      return this;
    };

    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };

    _proto2.addPause = function addPause(position, callback, params) {
      var t = Tween.delayedCall(0, callback || _emptyFunc, params);
      t.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t, _parsePosition(this, position));
    };

    _proto2.removePause = function removePause(position) {
      var child = this._first;
      position = _parsePosition(this, position);

      while (child) {
        if (child._start === position && child.data === "isPause") {
          _removeFromParent(child);
        }

        child = child._next;
      }
    };

    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive),
          i = tweens.length;

      while (i--) {
        _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
      }

      return this;
    };

    _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
      var a = [],
          parsedTargets = toArray(targets),
          child = this._first,
          isGlobalTime = _isNumber(onlyActive),
          children;

      while (child) {
        if (child instanceof Tween) {
          if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
            a.push(child);
          }
        } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
          a.push.apply(a, children);
        }

        child = child._next;
      }

      return a;
    };

    _proto2.tweenTo = function tweenTo(position, vars) {
      vars = vars || {};

      var tl = this,
          endTime = _parsePosition(tl, position),
          _vars = vars,
          startAt = _vars.startAt,
          _onStart = _vars.onStart,
          onStartParams = _vars.onStartParams,
          immediateRender = _vars.immediateRender,
          tween = Tween.to(tl, _setDefaults({
        ease: vars.ease || "none",
        lazy: false,
        immediateRender: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();
          var duration = vars.duration || Math.abs((endTime - tl._time) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          _onStart && _onStart.apply(tween, onStartParams || []);
        }
      }, vars));

      return immediateRender ? tween.render(0) : tween;
    };

    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
      return this.tweenTo(toPosition, _setDefaults({
        startAt: {
          time: _parsePosition(this, fromPosition)
        }
      }, vars));
    };

    _proto2.recent = function recent() {
      return this._recent;
    };

    _proto2.nextLabel = function nextLabel(afterTime) {
      if (afterTime === void 0) {
        afterTime = this._time;
      }

      return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };

    _proto2.previousLabel = function previousLabel(beforeTime) {
      if (beforeTime === void 0) {
        beforeTime = this._time;
      }

      return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };

    _proto2.currentLabel = function currentLabel(value) {
      return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };

    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }

      var child = this._first,
          labels = this.labels,
          p;

      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
          child._end += amount;
        }

        child = child._next;
      }

      if (adjustLabels) {
        for (p in labels) {
          if (labels[p] >= ignoreBeforeTime) {
            labels[p] += amount;
          }
        }
      }

      return _uncache(this);
    };

    _proto2.invalidate = function invalidate() {
      var child = this._first;
      this._lock = 0;

      while (child) {
        child.invalidate();
        child = child._next;
      }

      return _Animation.prototype.invalidate.call(this);
    };

    _proto2.clear = function clear(includeLabels) {
      if (includeLabels === void 0) {
        includeLabels = true;
      }

      var child = this._first,
          next;

      while (child) {
        next = child._next;
        this.remove(child);
        child = next;
      }

      this._dp && (this._time = this._tTime = this._pTime = 0);
      includeLabels && (this.labels = {});
      return _uncache(this);
    };

    _proto2.totalDuration = function totalDuration(value) {
      var max = 0,
          self = this,
          child = self._last,
          prevStart = _bigNum,
          prev,
          start,
          parent;

      if (arguments.length) {
        return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
      }

      if (self._dirty) {
        parent = self.parent;

        while (child) {
          prev = child._prev;
          child._dirty && child.totalDuration();
          start = child._start;

          if (start > prevStart && self._sort && child._ts && !self._lock) {
            self._lock = 1;
            _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
          } else {
            prevStart = start;
          }

          if (start < 0 && child._ts) {
            max -= start;

            if (!parent && !self._dp || parent && parent.smoothChildTiming) {
              self._start += start / self._ts;
              self._time -= start;
              self._tTime -= start;
            }

            self.shiftChildren(-start, false, -1e999);
            prevStart = 0;
          }

          child._end > max && child._ts && (max = child._end);
          child = prev;
        }

        _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

        self._dirty = 0;
      }

      return self._tDur;
    };

    Timeline.updateRoot = function updateRoot(time) {
      if (_globalTimeline._ts) {
        _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

        _lastRenderedFrame = _ticker.frame;
      }

      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child = _globalTimeline._first;
        if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
          while (child && !child._ts) {
            child = child._next;
          }

          child || _ticker.sleep();
        }
      }
    };

    return Timeline;
  }(Animation);

  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });

  var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
        index = 0,
        matchIndex = 0,
        result,
        startNums,
        color,
        endNum,
        chunk,
        startNum,
        hasRandom,
        a;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";

    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (stringFilter) {
      a = [start, end];
      stringFilter(a, target, prop);
      start = a[0];
      end = a[1];
    }

    startNums = start.match(_complexStringNumExp) || [];

    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }

      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0;
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          s: startNum,
          c: endNum.charAt(1) === "=" ? parseFloat(endNum.substr(2)) * (endNum.charAt(0) === "-" ? -1 : 1) : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : "";
    pt.fp = funcParam;

    if (_relExp.test(end) || hasRandom) {
      pt.e = 0;
    }

    this._pt = pt;
    return pt;
  },
      _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop],
        parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
        setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
        pt;

    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }

      if (end.charAt(1) === "=") {
        end = parseFloat(parsedStart) + parseFloat(end.substr(2)) * (end.charAt(0) === "-" ? -1 : 1) + (getUnit(parsedStart) || 0);
      }
    }

    if (parsedStart !== end) {
      if (!isNaN(parsedStart * end)) {
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }

      !currentValue && !(prop in target) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  },
      _processVars = function _processVars(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }

    var copy = {},
        p;

    for (p in vars) {
      copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    }

    return copy;
  },
      _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;

    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
        i = plugin._props.length;

        while (i--) {
          ptLookup[plugin._props[i]] = pt;
        }
      }
    }

    return plugin;
  },
      _overwritingTween,
      _initTween = function _initTween(tween, time) {
    var vars = tween.vars,
        ease = vars.ease,
        startAt = vars.startAt,
        immediateRender = vars.immediateRender,
        lazy = vars.lazy,
        onUpdate = vars.onUpdate,
        onUpdateParams = vars.onUpdateParams,
        callbackScope = vars.callbackScope,
        runBackwards = vars.runBackwards,
        yoyoEase = vars.yoyoEase,
        keyframes = vars.keyframes,
        autoRevert = vars.autoRevert,
        dur = tween._dur,
        prevStartAt = tween._startAt,
        targets = tween._targets,
        parent = tween.parent,
        fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets,
        autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
        tl = tween.timeline,
        cleanVars,
        i,
        p,
        pt,
        target,
        hasPriority,
        gsData,
        harness,
        plugin,
        ptLookup,
        index,
        harnessVars,
        overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

    if (yoyoEase && tween._yoyo && !tween._repeat) {
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }

    if (!tl) {
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop];
      cleanVars = _copyExcluding(vars, _reservedProps);
      prevStartAt && prevStartAt.render(-1, true).kill();

      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent: parent,
          immediateRender: true,
          lazy: _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate: onUpdate,
          onUpdateParams: onUpdateParams,
          callbackScope: callbackScope,
          stagger: 0
        }, startAt)));

        if (immediateRender) {
          if (time > 0) {
            autoRevert || (tween._startAt = 0);
          } else if (dur && !(time < 0 && prevStartAt)) {
            time && (tween._zTime = time);
            return;
          }
        } else if (autoRevert === false) {
          tween._startAt = 0;
        }
      } else if (runBackwards && dur) {
        if (prevStartAt) {
          !autoRevert && (tween._startAt = 0);
        } else {
          time && (immediateRender = false);
          p = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            lazy: immediateRender && _isNotFalse(lazy),
            immediateRender: immediateRender,
            stagger: 0,
            parent: parent
          }, cleanVars);
          harnessVars && (p[harness.prop] = harnessVars);

          _removeFromParent(tween._startAt = Tween.set(targets, p));

          if (!immediateRender) {
            _initTween(tween._startAt, _tinyNum);
          } else if (!time) {
            return;
          }
        }
      }

      tween._pt = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;

      for (i = 0; i < targets.length; i++) {
        target = targets[i];
        gsData = target._gsap || _harness(targets)[i]._gsap;
        tween._ptLookup[i] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
        index = fullTargets === targets ? i : fullTargets.indexOf(target);

        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

          plugin._props.forEach(function (name) {
            ptLookup[name] = pt;
          });

          plugin.priority && (hasPriority = 1);
        }

        if (!harness || harnessVars) {
          for (p in cleanVars) {
            if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }

        tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;

          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(0));

          overwritten = !tween.parent;
          _overwritingTween = 0;
        }

        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }

      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween);
    }

    tween._from = !tl && !!vars.runBackwards;
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten;
  },
      _addAliasesToVars = function _addAliasesToVars(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0,
        propertyAliases = harness && harness.aliases,
        copy,
        p,
        i,
        aliases;

    if (!propertyAliases) {
      return vars;
    }

    copy = _merge({}, vars);

    for (p in propertyAliases) {
      if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;

        while (i--) {
          copy[aliases[i]] = copy[p];
        }
      }
    }

    return copy;
  },
      _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  },
      _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
      _staggerPropsToSkip = (_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger").split(",");

  var Tween = function (_Animation2) {
    _inheritsLoose(Tween, _Animation2);

    function Tween(targets, vars, time, skipInherit) {
      var _this3;

      if (typeof vars === "number") {
        time.duration = vars;
        vars = time;
        time = null;
      }

      _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars), time) || this;
      var _this3$vars = _this3.vars,
          duration = _this3$vars.duration,
          delay = _this3$vars.delay,
          immediateRender = _this3$vars.immediateRender,
          stagger = _this3$vars.stagger,
          overwrite = _this3$vars.overwrite,
          keyframes = _this3$vars.keyframes,
          defaults = _this3$vars.defaults,
          scrollTrigger = _this3$vars.scrollTrigger,
          yoyoEase = _this3$vars.yoyoEase,
          parent = _this3.parent,
          parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
          tl,
          i,
          copy,
          l,
          p,
          curTarget,
          staggerFunc,
          staggerVarsToMerge;
      _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;

      if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        vars = _this3.vars;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults || {}
        });
        tl.kill();
        tl.parent = tl._dp = _assertThisInitialized(_this3);
        tl._start = 0;

        if (keyframes) {
          _setDefaults(tl.vars.defaults, {
            ease: "none"
          });

          keyframes.forEach(function (frame) {
            return tl.to(parsedTargets, frame, ">");
          });
        } else {
          l = parsedTargets.length;
          staggerFunc = stagger ? distribute(stagger) : _emptyFunc;

          if (_isObject(stagger)) {
            for (p in stagger) {
              if (~_staggerTweenProps.indexOf(p)) {
                staggerVarsToMerge || (staggerVarsToMerge = {});
                staggerVarsToMerge[p] = stagger[p];
              }
            }
          }

          for (i = 0; i < l; i++) {
            copy = {};

            for (p in vars) {
              if (_staggerPropsToSkip.indexOf(p) < 0) {
                copy[p] = vars[p];
              }
            }

            copy.stagger = 0;
            yoyoEase && (copy.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
            curTarget = parsedTargets[i];
            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

            if (!stagger && l === 1 && copy.delay) {
              _this3._delay = delay = copy.delay;
              _this3._start += delay;
              copy.delay = 0;
            }

            tl.to(curTarget, copy, staggerFunc(i, curTarget, parsedTargets));
          }

          tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
        }

        duration || _this3.duration(duration = tl.duration());
      } else {
        _this3.timeline = 0;
      }

      if (overwrite === true && !_suppressOverwrites) {
        _overwritingTween = _assertThisInitialized(_this3);

        _globalTimeline.killTweensOf(parsedTargets);

        _overwritingTween = 0;
      }

      parent && _postAddChecks(parent, _assertThisInitialized(_this3));

      if (immediateRender || !duration && !keyframes && _this3._start === _round(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
        _this3._tTime = -_tinyNum;

        _this3.render(Math.max(0, -delay));
      }

      scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }

    var _proto3 = Tween.prototype;

    _proto3.render = function render(totalTime, suppressEvents, force) {
      var prevTime = this._time,
          tDur = this._tDur,
          dur = this._dur,
          tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime,
          time,
          pt,
          iteration,
          cycleDuration,
          prevIteration,
          isYoyo,
          ratio,
          timeline,
          yoyoEase;

      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
        time = tTime;
        timeline = this.timeline;

        if (this._repeat) {
          cycleDuration = dur + this._rDelay;

          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }

          time = _round(tTime % cycleDuration);

          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);

            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }

            time > dur && (time = dur);
          }

          isYoyo = this._yoyo && iteration & 1;

          if (isYoyo) {
            yoyoEase = this._yEase;
            time = dur - time;
          }

          prevIteration = _animationCycle(this._tTime, cycleDuration);

          if (time === prevTime && !force && this._initted) {
            return this;
          }

          if (iteration !== prevIteration) {
            timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);

            if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
              this._lock = force = 1;
              this.render(_round(cycleDuration * iteration), true).invalidate()._lock = 0;
            }
          }
        }

        if (!this._initted) {
          if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
            this._tTime = 0;
            return this;
          }

          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }

        this._tTime = tTime;
        this._time = time;

        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }

        this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

        if (this._from) {
          this.ratio = ratio = 1 - ratio;
        }

        time && !prevTime && !suppressEvents && _callback(this, "onStart");
        pt = this._pt;

        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }

        timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * ratio, suppressEvents, force) || this._startAt && (this._zTime = totalTime);

        if (this._onUpdate && !suppressEvents) {
          totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force);

          _callback(this, "onUpdate");
        }

        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);

          if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }

      return this;
    };

    _proto3.targets = function targets() {
      return this._targets;
    };

    _proto3.invalidate = function invalidate() {
      this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate();
      return _Animation2.prototype.invalidate.call(this);
    };

    _proto3.kill = function kill(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }

      if (!targets && (!vars || vars === "all")) {
        this._lazy = this._pt = 0;
        return this.parent ? _interrupt(this) : this;
      }

      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
        this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
        return this;
      }

      var parsedTargets = this._targets,
          killingTargets = targets ? toArray(targets) : parsedTargets,
          propTweenLookup = this._ptLookup,
          firstPT = this._pt,
          overwrittenProps,
          curLookup,
          curOverwriteProps,
          props,
          p,
          pt,
          i;

      if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
        vars === "all" && (this._pt = 0);
        return _interrupt(this);
      }

      overwrittenProps = this._op = this._op || [];

      if (vars !== "all") {
        if (_isString(vars)) {
          p = {};

          _forEachName(vars, function (name) {
            return p[name] = 1;
          });

          vars = p;
        }

        vars = _addAliasesToVars(parsedTargets, vars);
      }

      i = parsedTargets.length;

      while (i--) {
        if (~killingTargets.indexOf(parsedTargets[i])) {
          curLookup = propTweenLookup[i];

          if (vars === "all") {
            overwrittenProps[i] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
            props = vars;
          }

          for (p in props) {
            pt = curLookup && curLookup[p];

            if (pt) {
              if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                _removeLinkedListItem(this, pt, "_pt");
              }

              delete curLookup[p];
            }

            if (curOverwriteProps !== "all") {
              curOverwriteProps[p] = 1;
            }
          }
        }
      }

      this._initted && !this._pt && firstPT && _interrupt(this);
      return this;
    };

    Tween.to = function to(targets, vars) {
      return new Tween(targets, vars, arguments[2]);
    };

    Tween.from = function from(targets, vars) {
      return new Tween(targets, _parseVars(arguments, 1));
    };

    Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
      return new Tween(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay: delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope
      });
    };

    Tween.fromTo = function fromTo(targets, fromVars, toVars) {
      return new Tween(targets, _parseVars(arguments, 2));
    };

    Tween.set = function set(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween(targets, vars);
    };

    Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };

    return Tween;
  }(Animation);

  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });

  _forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
    Tween[name] = function () {
      var tl = new Timeline(),
          params = _slice.call(arguments, 0);

      params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name].apply(tl, params);
    };
  });

  var _setterPlain = function _setterPlain(target, property, value) {
    return target[property] = value;
  },
      _setterFunc = function _setterFunc(target, property, value) {
    return target[property](value);
  },
      _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
    return target[property](data.fp, value);
  },
      _setterAttribute = function _setterAttribute(target, property, value) {
    return target.setAttribute(property, value);
  },
      _getSetter = function _getSetter(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  },
      _renderPlain = function _renderPlain(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000, data);
  },
      _renderBoolean = function _renderBoolean(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  },
      _renderComplexString = function _renderComplexString(ratio, data) {
    var pt = data._pt,
        s = "";

    if (!ratio && data.b) {
      s = data.b;
    } else if (ratio === 1 && data.e) {
      s = data.e;
    } else {
      while (pt) {
        s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s;
        pt = pt._next;
      }

      s += data.c;
    }

    data.set(data.t, data.p, s, data);
  },
      _renderPropTweens = function _renderPropTweens(ratio, data) {
    var pt = data._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  },
      _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
    var pt = this._pt,
        next;

    while (pt) {
      next = pt._next;
      pt.p === property && pt.modifier(modifier, tween, target);
      pt = next;
    }
  },
      _killPropTweensOf = function _killPropTweensOf(property) {
    var pt = this._pt,
        hasNonDependentRemaining,
        next;

    while (pt) {
      next = pt._next;

      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }

      pt = next;
    }

    return !hasNonDependentRemaining;
  },
      _setterWithModifier = function _setterWithModifier(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  },
      _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
    var pt = parent._pt,
        next,
        pt2,
        first,
        last;

    while (pt) {
      next = pt._next;
      pt2 = first;

      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }

      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }

      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }

      pt = next;
    }

    parent._pt = first;
  };

  var PropTween = function () {
    function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer || _renderPlain;
      this.d = data || this;
      this.set = setter || _setterPlain;
      this.pr = priority || 0;
      this._next = next;

      if (next) {
        next._prev = this;
      }
    }

    var _proto4 = PropTween.prototype;

    _proto4.modifier = function modifier(func, tween, target) {
      this.mSet = this.mSet || this.set;
      this.set = _setterWithModifier;
      this.m = func;
      this.mt = target;
      this.tween = tween;
    };

    return PropTween;
  }();

  _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
    return _reservedProps[name] = 1;
  });

  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _config.stringFilter = _colorStringFilter;
  var _gsap = {
    registerPlugin: function registerPlugin() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      args.forEach(function (config) {
        return _createPlugin(config);
      });
    },
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
      return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
      _isString(target) && (target = toArray(target)[0]);

      var getter = _getCache(target || {}).get,
          format = unit ? _passThrough : _numericIfPossible;

      unit === "native" && (unit = "");
      return !target ? target : !property ? function (property, unit, uncache) {
        return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
      } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
      target = toArray(target);

      if (target.length > 1) {
        var setters = target.map(function (t) {
          return gsap.quickSetter(t, property, unit);
        }),
            l = setters.length;
        return function (value) {
          var i = l;

          while (i--) {
            setters[i](value);
          }
        };
      }

      target = target[0] || {};

      var Plugin = _plugins[property],
          cache = _getCache(target),
          p = cache.harness && (cache.harness.aliases || {})[property] || property,
          setter = Plugin ? function (value) {
        var p = new Plugin();
        _quickTween._pt = 0;
        p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p.render(1, p);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p);

      return Plugin ? setter : function (value) {
        return setter(target, p, unit ? value + unit : value, cache, 1);
      };
    },
    isTweening: function isTweening(targets) {
      return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
      value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
      return _mergeDeep(_defaults, value || {});
    },
    config: function config(value) {
      return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref2) {
      var name = _ref2.name,
          effect = _ref2.effect,
          plugins = _ref2.plugins,
          defaults = _ref2.defaults,
          extendTimeline = _ref2.extendTimeline;
      (plugins || "").split(",").forEach(function (pluginName) {
        return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
      });

      _effects[name] = function (targets, vars, tl) {
        return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
      };

      if (extendTimeline) {
        Timeline.prototype[name] = function (targets, vars, position) {
          return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
      }
    },
    registerEase: function registerEase(name, ease) {
      _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
      return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
      if (vars === void 0) {
        vars = {};
      }

      var tl = new Timeline(vars),
          child,
          next;
      tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

      _globalTimeline.remove(tl);

      tl._dp = 0;
      tl._time = tl._tTime = _globalTimeline._time;
      child = _globalTimeline._first;

      while (child) {
        next = child._next;

        if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
          _addToTimeline(tl, child, child._start - child._delay);
        }

        child = next;
      }

      _addToTimeline(_globalTimeline, tl, 0);

      return tl;
    },
    utils: {
      wrap: wrap,
      wrapYoyo: wrapYoyo,
      distribute: distribute,
      random: random,
      snap: snap,
      normalize: normalize,
      getUnit: getUnit,
      clamp: clamp,
      splitColor: splitColor,
      toArray: toArray,
      mapRange: mapRange,
      pipe: pipe,
      unitize: unitize,
      interpolate: interpolate,
      shuffle: shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween: PropTween,
      globals: _addGlobal,
      Tween: Tween,
      Timeline: Timeline,
      Animation: Animation,
      getCache: _getCache,
      _removeLinkedListItem: _removeLinkedListItem,
      suppressOverwrites: function suppressOverwrites(value) {
        return _suppressOverwrites = value;
      }
    }
  };

  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
    return _gsap[name] = Tween[name];
  });

  _ticker.add(Timeline.updateRoot);

  _quickTween = _gsap.to({}, {
    duration: 0
  });

  var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
    var pt = plugin._pt;

    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }

    return pt;
  },
      _addModifiers = function _addModifiers(tween, modifiers) {
    var targets = tween._targets,
        p,
        i,
        pt;

    for (p in modifiers) {
      i = targets.length;

      while (i--) {
        pt = tween._ptLookup[i][p];

        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            pt = _getPluginPropTween(pt, p);
          }

          pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
        }
      }
    }
  },
      _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
    return {
      name: name,
      rawVars: 1,
      init: function init(target, vars, tween) {
        tween._onInit = function (tween) {
          var temp, p;

          if (_isString(vars)) {
            temp = {};

            _forEachName(vars, function (name) {
              return temp[name] = 1;
            });

            vars = temp;
          }

          if (modifier) {
            temp = {};

            for (p in vars) {
              temp[p] = modifier(vars[p]);
            }

            vars = temp;
          }

          _addModifiers(tween, vars);
        };
      }
    };
  };

  var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
      var p, pt;

      for (p in vars) {
        pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
        pt && (pt.op = p);

        this._props.push(p);
      }
    }
  }, {
    name: "endArray",
    init: function init(target, value) {
      var i = value.length;

      while (i--) {
        this.add(target, i, target[i] || 0, value[i]);
      }
    }
  }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
  Tween.version = Timeline.version = gsap.version = "3.6.1";
  _coreReady = 1;

  if (_windowExists()) {
    _wake();
  }

  var Power0 = _easeMap.Power0,
      Power1 = _easeMap.Power1,
      Power2 = _easeMap.Power2,
      Power3 = _easeMap.Power3,
      Power4 = _easeMap.Power4,
      Linear = _easeMap.Linear,
      Quad = _easeMap.Quad,
      Cubic = _easeMap.Cubic,
      Quart = _easeMap.Quart,
      Quint = _easeMap.Quint,
      Strong = _easeMap.Strong,
      Elastic = _easeMap.Elastic,
      Back = _easeMap.Back,
      SteppedEase = _easeMap.SteppedEase,
      Bounce = _easeMap.Bounce,
      Sine = _easeMap.Sine,
      Expo = _easeMap.Expo,
      Circ = _easeMap.Circ;

  var _win$1,
      _doc$1,
      _docElement,
      _pluginInitted,
      _tempDiv,
      _tempDivStyler,
      _recentSetterPlugin,
      _windowExists$1 = function _windowExists() {
    return typeof window !== "undefined";
  },
      _transformProps = {},
      _RAD2DEG = 180 / Math.PI,
      _DEG2RAD = Math.PI / 180,
      _atan2 = Math.atan2,
      _bigNum$1 = 1e8,
      _capsExp = /([A-Z])/g,
      _horizontalExp = /(?:left|right|width|margin|padding|x)/i,
      _complexExp = /[\s,\(]\S/,
      _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
      _renderCSSProp = function _renderCSSProp(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
  },
      _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
  },
      _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
  },
      _renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
  },
      _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
  },
      _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
  },
      _setterCSSStyle = function _setterCSSStyle(target, property, value) {
    return target.style[property] = value;
  },
      _setterCSSProp = function _setterCSSProp(target, property, value) {
    return target.style.setProperty(property, value);
  },
      _setterTransform = function _setterTransform(target, property, value) {
    return target._gsap[property] = value;
  },
      _setterScale = function _setterScale(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  },
      _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
  },
      _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
  },
      _transformProp = "transform",
      _transformOriginProp = _transformProp + "Origin",
      _supports3D,
      _createElement = function _createElement(type, ns) {
    var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
    return e.style ? e : _doc$1.createElement(type);
  },
      _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || "";
  },
      _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
      _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
    var e = element || _tempDiv,
        s = e.style,
        i = 5;

    if (property in s && !preferPrefix) {
      return property;
    }

    property = property.charAt(0).toUpperCase() + property.substr(1);

    while (i-- && !(_prefixes[i] + property in s)) {}

    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
  },
      _initCore = function _initCore() {
    if (_windowExists$1() && window.document) {
      _win$1 = window;
      _doc$1 = _win$1.document;
      _docElement = _doc$1.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
      _supports3D = !!_checkPropPrefix("perspective");
      _pluginInitted = 1;
    }
  },
      _getBBoxHack = function _getBBoxHack(swapIfPossible) {
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
        oldParent = this.parentNode,
        oldSibling = this.nextSibling,
        oldCSS = this.style.cssText,
        bbox;

    _docElement.appendChild(svg);

    svg.appendChild(this);
    this.style.display = "block";

    if (swapIfPossible) {
      try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox;
        this.getBBox = _getBBoxHack;
      } catch (e) {}
    } else if (this._gsapBBox) {
      bbox = this._gsapBBox();
    }

    if (oldParent) {
      if (oldSibling) {
        oldParent.insertBefore(this, oldSibling);
      } else {
        oldParent.appendChild(this);
      }
    }

    _docElement.removeChild(svg);

    this.style.cssText = oldCSS;
    return bbox;
  },
      _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
    var i = attributesArray.length;

    while (i--) {
      if (target.hasAttribute(attributesArray[i])) {
        return target.getAttribute(attributesArray[i]);
      }
    }
  },
      _getBBox = function _getBBox(target) {
    var bounds;

    try {
      bounds = target.getBBox();
    } catch (error) {
      bounds = _getBBoxHack.call(target, true);
    }

    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  },
      _isSVG = function _isSVG(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
  },
      _removeProperty = function _removeProperty(target, property) {
    if (property) {
      var style = target.style;

      if (property in _transformProps && property !== _transformOriginProp) {
        property = _transformProp;
      }

      if (style.removeProperty) {
        if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
          property = "-" + property;
        }

        style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        style.removeAttribute(property);
      }
    }
  },
      _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;

    plugin._props.push(property);

    return pt;
  },
      _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  },
      _convertToUnit = function _convertToUnit(target, property, value, unit) {
    var curValue = parseFloat(value) || 0,
        curUnit = (value + "").trim().substr((curValue + "").length) || "px",
        style = _tempDiv.style,
        horizontal = _horizontalExp.test(property),
        isRootSVG = target.tagName.toLowerCase() === "svg",
        measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
        amount = 100,
        toPixels = unit === "px",
        toPercent = unit === "%",
        px,
        parent,
        cache,
        isSVG;

    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }

    curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);

    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
    }

    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

    if (isSVG) {
      parent = (target.ownerSVGElement || {}).parentNode;
    }

    if (!parent || parent === _doc$1 || !parent.appendChild) {
      parent = _doc$1.body;
    }

    cache = parent._gsap;

    if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time) {
      return _round(curValue / cache.width * amount);
    } else {
      (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static");
      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";

      if (horizontal && toPercent) {
        cache = _getCache(parent);
        cache.time = _ticker.time;
        cache.width = parent[measureProperty];
      }
    }

    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  },
      _get = function _get(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();

    if (property in _propertyAliases && property !== "transform") {
      property = _propertyAliases[property];

      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }

    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];

      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
      }
    }

    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  },
      _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
    if (!start || start === "none") {
      var p = _checkPropPrefix(prop, target, 1),
          s = p && _getComputedProperty(target, p, 1);

      if (s && s !== start) {
        prop = p;
        start = s;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor");
      }
    }

    var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString),
        index = 0,
        matchIndex = 0,
        a,
        result,
        startValues,
        startNum,
        color,
        startValue,
        endValue,
        endNum,
        chunk,
        endUnit,
        startUnit,
        relative,
        endValues;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";

    if (end === "auto") {
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      target.style[prop] = start;
    }

    a = [start, end];

    _colorStringFilter(a);

    start = a[0];
    end = a[1];
    startValues = start.match(_numWithUnitExp) || [];
    endValues = end.match(_numWithUnitExp) || [];

    if (endValues.length) {
      while (result = _numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);

        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }

        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          relative = endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;

          if (relative) {
            endValue = endValue.substr(2);
          }

          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _numWithUnitExp.lastIndex - endUnit.length;

          if (!endUnit) {
            endUnit = endUnit || _config.units[prop] || startUnit;

            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }

          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          }

          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            s: startNum,
            c: relative ? relative * endNum : endNum - startNum,
            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
          };
        }
      }

      pt.c = index < end.length ? end.substring(index, end.length) : "";
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }

    _relExp.test(end) && (pt.e = 0);
    this._pt = pt;
    return pt;
  },
      _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
      _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
    var split = value.split(" "),
        x = split[0],
        y = split[1] || "50%";

    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      value = x;
      x = y;
      y = value;
    }

    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
  },
      _renderClearProps = function _renderClearProps(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t,
          style = target.style,
          props = data.u,
          cache = target._gsap,
          prop,
          clearTransforms,
          i;

      if (props === "all" || props === true) {
        style.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i = props.length;

        while (--i > -1) {
          prop = props[i];

          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }

          _removeProperty(target, prop);
        }
      }

      if (clearTransforms) {
        _removeProperty(target, _transformProp);

        if (cache) {
          cache.svg && target.removeAttribute("transform");

          _parseTransform(target, 1);

          cache.uncache = 1;
        }
      }
    }
  },
      _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;

        plugin._props.push(property);

        return 1;
      }
    }
  },
      _identity2DMatrix = [1, 0, 0, 1, 0, 0],
      _rotationalProperties = {},
      _isNullTransform = function _isNullTransform(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  },
      _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
    var matrixString = _getComputedProperty(target, _transformProp);

    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
  },
      _getMatrix = function _getMatrix(target, force2D) {
    var cache = target._gsap || _getCache(target),
        style = target.style,
        matrix = _getComputedTransformMatrixAsArray(target),
        parent,
        nextSibling,
        temp,
        addedToDOM;

    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix;
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      temp = style.display;
      style.display = "block";
      parent = target.parentNode;

      if (!parent || !target.offsetParent) {
        addedToDOM = 1;
        nextSibling = target.nextSibling;

        _docElement.appendChild(target);
      }

      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style.display = temp : _removeProperty(target, "display");

      if (addedToDOM) {
        nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
      }
    }

    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  },
      _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap,
        matrix = matrixArray || _getMatrix(target, true),
        xOriginOld = cache.xOrigin || 0,
        yOriginOld = cache.yOrigin || 0,
        xOffsetOld = cache.xOffset || 0,
        yOffsetOld = cache.yOffset || 0,
        a = matrix[0],
        b = matrix[1],
        c = matrix[2],
        d = matrix[3],
        tx = matrix[4],
        ty = matrix[5],
        originSplit = origin.split(" "),
        xOrigin = parseFloat(originSplit[0]) || 0,
        yOrigin = parseFloat(originSplit[1]) || 0,
        bounds,
        determinant,
        x,
        y;

    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
      x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
      y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
      xOrigin = x;
      yOrigin = y;
    }

    if (smooth || smooth !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
      cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }

    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px";

    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }

    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  },
      _parseTransform = function _parseTransform(target, uncache) {
    var cache = target._gsap || new GSCache(target);

    if ("x" in cache && !uncache && !cache.uncache) {
      return cache;
    }

    var style = target.style,
        invertedScaleX = cache.scaleX < 0,
        px = "px",
        deg = "deg",
        origin = _getComputedProperty(target, _transformOriginProp) || "0",
        x,
        y,
        z,
        scaleX,
        scaleY,
        rotation,
        rotationX,
        rotationY,
        skewX,
        skewY,
        perspective,
        xOrigin,
        yOrigin,
        matrix,
        angle,
        cos,
        sin,
        a,
        b,
        c,
        d,
        a12,
        a22,
        t1,
        t2,
        t3,
        a13,
        a23,
        a33,
        a42,
        a43,
        a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    matrix = _getMatrix(target, cache.svg);

    if (cache.svg) {
      t1 = !cache.uncache && !uncache && target.getAttribute("data-svg-origin");

      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }

    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;

    if (matrix !== _identity2DMatrix) {
      a = matrix[0];
      b = matrix[1];
      c = matrix[2];
      d = matrix[3];
      x = a12 = matrix[4];
      y = a22 = matrix[5];

      if (matrix.length === 6) {
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d * d + c * c);
        rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
        skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));

        if (cache.svg) {
          x -= xOrigin - (xOrigin * a + yOrigin * c);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        }
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG;

        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        }

        angle = _atan2(-c, a33);
        rotationY = angle * _RAD2DEG;

        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a = t1;
          b = t2;
          c = t3;
        }

        angle = _atan2(b, a);
        rotation = angle * _RAD2DEG;

        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a * sin;
          a22 = a22 * cos - a12 * sin;
          a = t1;
          a12 = t2;
        }

        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }

        scaleX = _round(Math.sqrt(a * a + b * b + c * c));
        scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }

      if (cache.svg) {
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }

    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }

    cache.x = x - ((cache.xPercent = x && (cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = _round(scaleX);
    cache.scaleY = _round(scaleY);
    cache.rotation = _round(rotation) + deg;
    cache.rotationX = _round(rotationX) + deg;
    cache.rotationY = _round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;

    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }

    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  },
      _firstTwoOnly = function _firstTwoOnly(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  },
      _addPxTranslate = function _addPxTranslate(target, start, value) {
    var unit = getUnit(start);
    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  },
      _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;

    _renderCSSTransforms(ratio, cache);
  },
      _zeroDeg = "0deg",
      _zeroPx = "0px",
      _endParenthesis = ") ",
      _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
    var _ref = cache || this,
        xPercent = _ref.xPercent,
        yPercent = _ref.yPercent,
        x = _ref.x,
        y = _ref.y,
        z = _ref.z,
        rotation = _ref.rotation,
        rotationY = _ref.rotationY,
        rotationX = _ref.rotationX,
        skewX = _ref.skewX,
        skewY = _ref.skewY,
        scaleX = _ref.scaleX,
        scaleY = _ref.scaleY,
        transformPerspective = _ref.transformPerspective,
        force3D = _ref.force3D,
        target = _ref.target,
        zOrigin = _ref.zOrigin,
        transforms = "",
        use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;

    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD,
          a13 = Math.sin(angle),
          a33 = Math.cos(angle),
          cos;

      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }

    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }

    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }

    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }

    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }

    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }

    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }

    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }

    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }

    target.style[_transformProp] = transforms || "translate(0, 0)";
  },
      _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
    var _ref2 = cache || this,
        xPercent = _ref2.xPercent,
        yPercent = _ref2.yPercent,
        x = _ref2.x,
        y = _ref2.y,
        rotation = _ref2.rotation,
        skewX = _ref2.skewX,
        skewY = _ref2.skewY,
        scaleX = _ref2.scaleX,
        scaleY = _ref2.scaleY,
        target = _ref2.target,
        xOrigin = _ref2.xOrigin,
        yOrigin = _ref2.yOrigin,
        xOffset = _ref2.xOffset,
        yOffset = _ref2.yOffset,
        forceCSS = _ref2.forceCSS,
        tx = parseFloat(x),
        ty = parseFloat(y),
        a11,
        a21,
        a12,
        a22,
        temp;

    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);

    if (skewY) {
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }

    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;

      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;

        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }

      a11 = _round(a11);
      a21 = _round(a21);
      a12 = _round(a12);
      a22 = _round(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }

    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }

    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }

    if (xPercent || yPercent) {
      temp = target.getBBox();
      tx = _round(tx + xPercent / 100 * temp.width);
      ty = _round(ty + yPercent / 100 * temp.height);
    }

    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp);
  },
      _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue, relative) {
    var cap = 360,
        isString = _isString(endValue),
        endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
        change = relative ? endNum * relative : endNum - startNum,
        finalValue = startNum + change + "deg",
        direction,
        pt;

    if (isString) {
      direction = endValue.split("_")[1];

      if (direction === "short") {
        change %= cap;

        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }

      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum$1) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum$1) % cap - ~~(change / cap) * cap;
      }
    }

    plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";

    plugin._props.push(property);

    return pt;
  },
      _assign = function _assign(target, source) {
    for (var p in source) {
      target[p] = source[p];
    }

    return target;
  },
      _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
    var startCache = _assign({}, target._gsap),
        exclude = "perspective,force3D,transformOrigin,svgOrigin",
        style = target.style,
        endCache,
        p,
        startValue,
        endValue,
        startNum,
        endNum,
        startUnit,
        endUnit;

    if (startCache.svg) {
      startValue = target.getAttribute("transform");
      target.setAttribute("transform", "");
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);

      _removeProperty(target, _transformProp);

      target.setAttribute("transform", startValue);
    } else {
      startValue = getComputedStyle(target)[_transformProp];
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      style[_transformProp] = startValue;
    }

    for (p in _transformProps) {
      startValue = startCache[p];
      endValue = endCache[p];

      if (startValue !== endValue && exclude.indexOf(p) < 0) {
        startUnit = getUnit(startValue);
        endUnit = getUnit(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;

        plugin._props.push(p);
      }
    }

    _assign(endCache, startCache);
  };

  _forEachName("padding,margin,Width,Radius", function (name, index) {
    var t = "Top",
        r = "Right",
        b = "Bottom",
        l = "Left",
        props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
      return index < 2 ? name + side : "border" + side + name;
    });

    _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
      var a, vars;

      if (arguments.length < 4) {
        a = props.map(function (prop) {
          return _get(plugin, prop, property);
        });
        vars = a.join(" ");
        return vars.split(a[0]).length === 5 ? a[0] : vars;
      }

      a = (endValue + "").split(" ");
      vars = {};
      props.forEach(function (prop, i) {
        return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
      });
      plugin.init(target, vars, tween);
    };
  });

  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init(target, vars, tween, index, targets) {
      var props = this._props,
          style = target.style,
          startAt = tween.vars.startAt,
          startValue,
          endValue,
          endNum,
          startNum,
          type,
          specialProp,
          p,
          startUnit,
          endUnit,
          relative,
          isTransformRelated,
          transformPropTween,
          cache,
          smooth,
          hasPriority;
      _pluginInitted || _initCore();

      for (p in vars) {
        if (p === "autoRound") {
          continue;
        }

        endValue = vars[p];

        if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
          continue;
        }

        type = typeof endValue;
        specialProp = _specialProps[p];

        if (type === "function") {
          endValue = endValue.call(tween, index, target, targets);
          type = typeof endValue;
        }

        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }

        if (specialProp) {
          specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
        } else if (p.substr(0, 2) === "--") {
          startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
          endValue += "";
          _colorExp.lastIndex = 0;

          if (!_colorExp.test(startValue)) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
          }

          endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
          this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        } else if (type !== "undefined") {
          if (startAt && p in startAt) {
            startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
            p in _config.units && !getUnit(startValue) && (startValue += _config.units[p]);
            (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
          } else {
            startValue = _get(target, p);
          }

          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
          relative && (endValue = endValue.substr(2));
          endNum = parseFloat(endValue);

          if (p in _propertyAliases) {
            if (p === "autoAlpha") {
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                startNum = 0;
              }

              _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }

            if (p !== "scale" && p !== "transform") {
              p = _propertyAliases[p];
              ~p.indexOf(",") && (p = p.split(",")[0]);
            }
          }

          isTransformRelated = p in _transformProps;

          if (isTransformRelated) {
            if (!transformPropTween) {
              cache = target._gsap;
              cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
              smooth = vars.smoothOrigin !== false && cache.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
              transformPropTween.dep = 1;
            }

            if (p === "scale") {
              this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, relative ? relative * endNum : endNum - cache.scaleY);
              props.push("scaleY", p);
              p += "X";
            } else if (p === "transformOrigin") {
              endValue = _convertKeywordsToPercentages(endValue);

              if (cache.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

                _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }

              continue;
            } else if (p === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);

              continue;
            } else if (p in _rotationalProperties) {
              _addRotationalPropTween(this, cache, p, startNum, endValue, relative);

              continue;
            } else if (p === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

              continue;
            } else if (p === "force3D") {
              cache[p] = endValue;
              continue;
            } else if (p === "transform") {
              _addRawTransformPTs(this, endValue, target);

              continue;
            }
          } else if (!(p in style)) {
            p = _checkPropPrefix(p) || p;
          }

          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
            startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, relative ? relative * endNum : endNum - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;

            if (startUnit !== endUnit) {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!(p in style)) {
            if (p in target) {
              this.add(target, p, target[p], endValue, index, targets);
            } else {
              _missingPlugin(p, endValue);

              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p, startValue, endValue);
          }

          props.push(p);
        }
      }

      hasPriority && _sortPropTweensByPriority(this);
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
      var p = _propertyAliases[property];
      p && p.indexOf(",") < 0 && (property = p);
      return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
    },
    core: {
      _removeProperty: _removeProperty,
      _getMatrix: _getMatrix
    }
  };
  gsap.utils.checkPrefix = _checkPropPrefix;

  (function (positionAndScale, rotation, others, aliases) {
    var all = _forEachName(positionAndScale + "," + rotation + "," + others, function (name) {
      _transformProps[name] = 1;
    });

    _forEachName(rotation, function (name) {
      _config.units[name] = "deg";
      _rotationalProperties[name] = 1;
    });

    _propertyAliases[all[13]] = positionAndScale + "," + rotation;

    _forEachName(aliases, function (name) {
      var split = name.split(":");
      _propertyAliases[split[1]] = all[split[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

  _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
    _config.units[name] = "px";
  });

  gsap.registerPlugin(CSSPlugin);

  var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap,
      TweenMaxWithCSS = gsapWithCSS.core.Tween;

  exports.Back = Back;
  exports.Bounce = Bounce;
  exports.CSSPlugin = CSSPlugin;
  exports.Circ = Circ;
  exports.Cubic = Cubic;
  exports.Elastic = Elastic;
  exports.Expo = Expo;
  exports.Linear = Linear;
  exports.Power0 = Power0;
  exports.Power1 = Power1;
  exports.Power2 = Power2;
  exports.Power3 = Power3;
  exports.Power4 = Power4;
  exports.Quad = Quad;
  exports.Quart = Quart;
  exports.Quint = Quint;
  exports.Sine = Sine;
  exports.SteppedEase = SteppedEase;
  exports.Strong = Strong;
  exports.TimelineLite = Timeline;
  exports.TimelineMax = Timeline;
  exports.TweenLite = Tween;
  exports.TweenMax = TweenMaxWithCSS;
  exports.default = gsapWithCSS;
  exports.gsap = gsapWithCSS;

  if (typeof(window) === 'undefined' || window !== exports) {Object.defineProperty(exports, '__esModule', { value: true });} else {delete window.default;}

})));

;
//# sourceMappingURL=scripts.479ed8cd94a5762bbc53.js.map