(function(e){function t(t){for(var c,i,a=t[0],s=t[1],l=t[2],d=0,h=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);u&&u(t);while(h.length)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(c=!1)}c&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},o={app:0},r=[];function i(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-2d216214":"434dc5a0","chunk-2d216257":"69e90091","chunk-6e65f397":"076619e1"}[e]+".js"}function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,c){n=o[e]=[t,c]}));t.push(n[2]=c);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.src=i(e);var l=new Error;r=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",l.name="ChunkLoadError",l.type=c,l.request=r,n[1](l)}o[e]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(t)},a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0d1a":function(e,t,n){},"127a":function(e,t,n){"use strict";n("4233")},1568:function(e,t,n){"use strict";n("22b3")},"161a":function(e,t,n){"use strict";n("38de")},"22b3":function(e,t,n){},"38de":function(e,t,n){},4233:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var c=n("7a23");const o={style:{background:"red"}},r={style:{background:"green"}},i={id:"in-this-doc",style:{background:"blue"}};function a(e,t,n,a,s,l){const d=Object(c["A"])("Navigator"),u=Object(c["A"])("Hierarchy"),h=Object(c["A"])("RenderDoc"),b=Object(c["A"])("InThisDoc");return Object(c["t"])(),Object(c["f"])(c["a"],null,[Object(c["i"])(d),Object(c["g"])("main",null,[Object(c["g"])("section",o,[Object(c["i"])(u)]),Object(c["g"])("section",r,[Object(c["i"])(h)]),Object(c["g"])("section",i,[Object(c["i"])(b)])])],64)}n("14d9");const s={id:"navigator"},l={class:"flex-center"},d=["src"];function u(e,t,n,o,r,i){return Object(c["t"])(),Object(c["f"])("div",s,[Object(c["g"])("span",l,[e.config.settings.logo?(Object(c["t"])(),Object(c["f"])("img",{key:0,src:e.config.logo},null,8,d)):Object(c["e"])("",!0),Object(c["h"])(" "+Object(c["C"])(e.config.title)+" ",1)])])}var h={data:()=>({config:config})},b=(n("e718"),n("6b0d")),f=n.n(b);const O=f()(h,[["render",u],["__scopeId","data-v-3779383c"]]);var p=O;const j=e=>(Object(c["w"])("data-v-1c940394"),e=e(),Object(c["u"])(),e),g=j(()=>Object(c["g"])("span",{class:"material-symbols-outlined"}," menu ",-1)),m=[g],y=["id"],v=j(()=>Object(c["g"])("hr",null,null,-1)),w=j(()=>Object(c["g"])("span",{class:"download-pdf"},[Object(c["g"])("span",{class:"material-symbols-outlined"}," picture_as_pdf "),Object(c["h"])(" Download as PDF ")],-1)),k=j(()=>Object(c["g"])("hr",null,null,-1)),M=[v,w,k];function C(e,t,n,o,r,i){const a=Object(c["A"])("hierarchy-item");return Object(c["t"])(),Object(c["f"])("div",{id:"hierarchy",class:Object(c["o"])({collapsed:!e.hierarchyOpened})},[Object(c["g"])("span",{id:"hierarchy-toggle",onClick:t[0]||(t[0]=t=>e.hierarchyOpened=!e.hierarchyOpened)},m),Object(c["g"])("span",{id:e.hierarchyOpened?"":"hierarchy-content"},[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(e.content,(e,t)=>(Object(c["t"])(),Object(c["d"])(a,{key:t,item:e},null,8,["item"]))),128)),e.config.settings.downloadAsPDF?(Object(c["t"])(),Object(c["f"])("span",{key:0,class:"download-pdf-wrapper",onClick:t[1]||(t[1]=e=>i.downloadAsPDF())},M)):Object(c["e"])("",!0)],8,y)],2)}const T=["to"];function A(e,t,n,o,r,i){const a=Object(c["A"])("hierarchy-item",!0),s=Object(c["A"])("router-link");return n.item.children?(Object(c["t"])(),Object(c["f"])(c["a"],{key:0},[Object(c["g"])("div",{class:Object(c["o"])(["hierarchy-item no-underline",{active:i.isActive}]),style:Object(c["p"])(`padding-left: ${30*n.indentation}px`),to:"/docs/"+n.item.url,onClick:t[0]||(t[0]=e=>i.toggleClosed())},[Object(c["h"])(Object(c["C"])(n.item.title)+" ",1),n.item.children?(Object(c["t"])(),Object(c["f"])("span",{key:0,class:Object(c["o"])(["hierarchy-opener",{closed:!e.closed}])},null,2)):Object(c["e"])("",!0)],14,T),e.closed?Object(c["e"])("",!0):(Object(c["t"])(!0),Object(c["f"])(c["a"],{key:0},Object(c["z"])(n.item.children,(e,t)=>{var o;return Object(c["t"])(),Object(c["d"])(a,{key:t,item:e,indentation:(null!==(o=n.indentation)&&void 0!==o?o:0)+1},null,8,["item","indentation"])}),128))],64)):(Object(c["t"])(),Object(c["d"])(s,{key:1,class:Object(c["o"])(["hierarchy-item",{active:i.isActive}]),style:Object(c["p"])(`padding-left: ${30*n.indentation}px`),to:"/docs/"+n.item.url},{default:Object(c["F"])(()=>[Object(c["h"])(Object(c["C"])(n.item.title),1)]),_:1},8,["style","class","to"]))}var I={name:"hierarchy-child",props:["item","indentation"],data:()=>({closed:!1}),computed:{isActive(){return this.$route.path==="/docs/"+this.item.url},indentationHtml(){return void 0===this.indentation?"":"&nbsp;&nbsp;&nbsp;&nbsp;".repeat(this.indentation)}},methods:{toggleClosed(){this.closed=!this.closed}}};n("127a");const _=f()(I,[["render",A],["__scopeId","data-v-df586b4e"]]);var E=_,S=n("8baf"),x=n("7c5c"),D=n.n(x),N=n("cee4"),P={data:()=>({content:content,config:config,hierarchyOpened:!0}),components:{HierarchyItem:E},methods:{async downloadAsPDF(){var e;const t=new S["a"],n=null!==(e=this.config.downloadDocName)&&void 0!==e?e:"download.pdf";var c="";console.log(this.content);for(const o of this.content){const e=(await N["a"].get("/docs/"+o.file)).data,t=this.render(e,o);c+=t}console.log(c),t.html(c,{callback:function(e){e.save(n)},margin:[10,10,10,10],autoPaging:"text",x:0,y:0,width:190,windowWidth:675})},render(e,t){let n=D.a.parse(e),c=new DOMParser,o=c.parseFromString(n,"text/html");const r=o.body.textContent.split(" ").length;let i=o.querySelector("h1");const a=`\n            <span class='article-info'>\n                Article •\n                ${t.date?t.date+" • ":""}\n                ± ${Math.ceil(r/180)} minutes to read\n            </span>\n        `;return i.insertAdjacentHTML("afterend",a),o.body.innerHTML}}};n("9172");const L=f()(P,[["render",C],["__scopeId","data-v-1c940394"]]);var H=L;const R=e=>(Object(c["w"])("data-v-ae949086"),e=e(),Object(c["u"])(),e),$={key:0,class:"in-this-doc"},F=R(()=>Object(c["g"])("div",{class:"header"},[Object(c["g"])("span",{class:"material-symbols-outlined"},"menu"),Object(c["h"])(" In this article ")],-1)),U={class:"links"},q=["href"];function z(e,t,n,o,r,i){return e.config.settings.articleSections?(Object(c["t"])(),Object(c["f"])("div",$,[F,Object(c["g"])("div",U,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(i.filteredHeaders,e=>(Object(c["t"])(),Object(c["f"])("a",{key:e.name,href:"#"+e.name.replace(/ /g,"-").toLowerCase()},Object(c["C"])(e.name),9,q))),128))]),e.config.settings.maxInThisArticleCount<e.headers.length?(Object(c["t"])(),Object(c["f"])("div",{key:0,class:"show-less",onClick:t[0]||(t[0]=e=>i.toggleShowMore())},[Object(c["h"])(" Show "+Object(c["C"])(e.showMore?"less":"more")+" ",1),Object(c["g"])("span",{class:Object(c["o"])(["arrow",{reverse:e.showMore}])},null,2)])):Object(c["e"])("",!0)])):Object(c["e"])("",!0)}var B={data:()=>({config:config,showMore:!1,itemCountLimit:5,headers:[]}),mounted(){const e=document.getElementById("documentation-render"),t=this;setInterval(()=>{const n=e.querySelectorAll("h1, h2, h3, h4, h5, h6");t.headers=[],n.forEach(e=>{t.headers.push({name:e.innerText,indent:parseInt(e.tagName.replace("H",""))})})},1e3)},computed:{filteredHeaders(){return this.headers.filter((e,t)=>t<this.config.settings.maxInThisArticleCount||this.showMore)}},methods:{toggleShowMore(){this.showMore=!this.showMore}}};n("1568");const G=f()(B,[["render",z],["__scopeId","data-v-ae949086"]]);var J=G;const W=["innerHTML"];function Q(e,t,n,o,r,i){return Object(c["t"])(),Object(c["f"])("div",{id:"documentation-render",innerHTML:e.docContent},null,8,W)}var V={data:()=>({config:config,content:content,docContent:""}),watch:{async $route(e,t){const n=this.findContentItem(this.$route.path),c=(await N["a"].get("/docs/"+n.file)).data;this.docContent=this.render(c,n),hljs.highlightAll()}},methods:{findContentItem(e,t=null){t||(t=this.content);const n=t.find(t=>"/docs/"+t.url===e);if(n)return n;for(const c of t)if(c.children){const t=this.findContentItem(e,c.children);if(t)return t}},render(e,t){let n=D.a.parse(e),c=new DOMParser,o=c.parseFromString(n,"text/html");const r=o.body.textContent.split(" ").length;let i=o.querySelector("h1");const a=`\n                <span class='article-info'>\n                    Article •\n                    ${t.date?t.date+" • ":""}\n                    ± ${Math.ceil(r/180)} minutes to read\n                </span>\n            `;return i.insertAdjacentHTML("afterend",a),o.body.innerHTML}}};n("821c");const K=f()(V,[["render",Q]]);var X=K,Y={components:{Hierarchy:H,Navigator:p,InThisDoc:J,RenderDoc:X},mounted(){const e=this;setTimeout(()=>{e.$route.params.docName||(console.log(content[0].url),e.$router.push("/docs/"+content[0].url))},500)}};n("161a");const Z=f()(Y,[["render",a]]);var ee=Z,te=n("6605");const ne=[{path:"/docs/:docName",name:"Docs"},{path:"/",redirect:"/docs/"}],ce=Object(te["a"])({history:Object(te["b"])("/"),routes:ne});var oe=ce;window.config={};const re=async()=>{const e=await N["a"].get("config.json"),t=await N["a"].get("content.json");window.content=t.data,window.config=e.data,Object(c["c"])(ee).use(oe).mount("#app")};re(),hljs.registerLanguage("pea",(function(e){return{aliases:["al"],keywords:{keyword:"CODEUNIT BEGIN END VARS ARGS FUNCTION RETURNS IMPORT CALL RETURN IF ELSE WHILE FOR SET TO",literal:"true false",built_in:"uint8 uint16 uint32 uint64 int8 int16 int32 int64 float32 float64 string bool void ptr"},contains:[e.QUOTE_STRING_MODE,e.NUMBER_MODE,e.COMMENT("---","---"),e.COMMENT("--","\n")]}})),hljs.configure({ignoreUnescapedHTML:!0}),setInterval(()=>{hljs.highlightAll()},500)},"6ebd":function(e,t,n){},"821c":function(e,t,n){"use strict";n("6ebd")},9172:function(e,t,n){"use strict";n("0d1a")},"954b":function(e,t,n){},e718:function(e,t,n){"use strict";n("954b")}});
//# sourceMappingURL=app.d97daae4.js.map