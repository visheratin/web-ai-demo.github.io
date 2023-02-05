(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[151],{5984:function(e,s,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demos/text-features",function(){return c(613)}])},613:function(e,s,c){"use strict";c.r(s),c.d(s,{default:function(){return o}});var n=c(5893),t=c(9008),a=c.n(t),l=c(7294),r=c(4540),i=c(5108);function o(){let e=(0,l.useRef)(null),s=(0,l.useRef)(null),[c,t]=(0,l.useState)({value:0,className:""});(0,l.useEffect)(()=>{h()},[]);let[o,d]=(0,l.useState)({}),[m,u]=(0,l.useState)({message:"ready",processing:!1}),h=async()=>{u({message:"loading the model",processing:!0});let e=await r.yO.create("sentence-t5-quant");d({instance:e.model}),u({message:"ready",processing:!1})},x=async()=>{var c,n;if(!e.current||!s.current||!o)return;let a=null===(c=e.current)||void 0===c?void 0:c.value;if(""===a||void 0===a)return;let l=null===(n=s.current)||void 0===n?void 0:n.value;if(""===l||void 0===l)return;u({message:"processing",processing:!0});let r=await o.instance.process(a);r.cached||i.log("Sentence of length ".concat(a.length," (").concat(r.tokensNum," tokens) was processed in ").concat(r.elapsed," seconds")),i.log(r.result);let d=await o.instance.process(l);d.cached||i.log("Sentence of length ".concat(l.length," (").concat(d.tokensNum," tokens) was processed in ").concat(d.elapsed," seconds")),i.log(d.result);let m=N(r.result,d.result),h=Math.round((m+Number.EPSILON)*100)/100,x="bg-info";h>.75&&(x="bg-success"),h<.25&&(x="bg-danger"),t({value:h,className:x}),u({processing:!1,message:"finished processing"})},N=(e,s)=>{let c=0,n=0,t=0;for(let a=0;a<e.length;a++)c+=e[a]*s[a],n+=e[a]*e[a],t+=s[a]*s[a];n=Math.sqrt(n),t=Math.sqrt(t),i.log(c,n,t);let l=c/(n*t);return l};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"Web AI Next.js text feature extraction example"}),(0,n.jsx)("meta",{name:"description",content:"Web AI Next.js classification example"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,n.jsx)("main",{children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col",children:(0,n.jsx)("h1",{children:"Text feature extraction example"})})}),(0,n.jsx)("div",{className:"row mb-2",children:(0,n.jsx)("div",{className:"col",children:(0,n.jsx)("div",{className:"d-flex align-items-center",children:(0,n.jsxs)("strong",{children:["Status: ",m.message]})})})}),(0,n.jsx)("div",{className:"row mb-2",children:(0,n.jsx)("div",{className:"col-sm-12",children:(0,n.jsx)("textarea",{ref:e,className:"form-control",disabled:!o||m.processing,placeholder:"Insert the first text here",rows:4})})}),(0,n.jsx)("div",{className:"row mb-2",children:(0,n.jsx)("div",{className:"col-sm-12",children:(0,n.jsx)("textarea",{ref:s,className:"form-control",disabled:!o||m.processing,placeholder:"Insert the second text here",rows:4})})}),(0,n.jsxs)("div",{className:"row mb-2",children:[(0,n.jsx)("div",{className:"col-sm-3"}),(0,n.jsx)("div",{className:"col-sm-6",children:(0,n.jsx)("div",{className:"d-grid gap-2",children:(0,n.jsx)("button",{className:"btn btn-lg btn-primary",disabled:!o||m.processing,onClick:x,children:"Process"})})})]}),(0,n.jsxs)("div",{className:"row mb-2 mt-4",children:[(0,n.jsx)("div",{className:"col-sm-3"}),(0,n.jsx)("div",{className:"col-sm-6",children:(0,n.jsx)("div",{className:"progress",role:"progressbar",children:(0,n.jsx)("div",{className:c.className,style:{width:"".concat(100*c.value,"%")}})})}),(0,n.jsxs)("div",{className:"row mb-2",children:[(0,n.jsx)("div",{className:"col-sm-3"}),(0,n.jsx)("div",{className:"col-sm-6",children:(0,n.jsxs)("p",{className:"text-center",children:["Simimarity score of the text pieces is ",c.value,"."]})})]})]})]})})]})}},2987:function(){},8104:function(){},3731:function(){}},function(e){e.O(0,[770,655,362,444,774,888,179],function(){return e(e.s=5984)}),_N_E=e.O()}]);