(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t,a){e.exports=a(198)},198:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(43),c=a.n(l),i=a(66),u=a.n(i),m=a(136),o=a(133),s=a(65),d=a(214),p=a(213),E=(a(74),function(e){var t=e.responses;return r.a.createElement("div",{className:"ui container"},r.a.createElement("div",{id:"center-text"},r.a.createElement("h2",null,"Your Generated Text"),r.a.createElement("div",{className:"ui segment"},t.length>1?r.a.createElement("div",null,r.a.createElement("p",{id:"current-response"},t)):r.a.createElement("p",null,"Enter your product above to view a generated marketing text!"))))}),v=a(210),g=a(209),f=a(211),b=function(e){var t=e.onAiReqSubmit,a=Object(n.useState)(""),l=Object(s.a)(a,2),c=l[0],i=l[1],u=Object(n.useState)(""),m=Object(s.a)(u,2),o=m[0],d=m[1],p="Advertisement Text",E="Product Description",b=function(e,t){var a=t.value;d(a)};return r.a.createElement("div",{className:"ui segment"},r.a.createElement(v.a,{onSubmit:function(e){e.preventDefault(),t(c,o)},v:!0},r.a.createElement(v.a.Field,null,r.a.createElement("label",null,"What is your product?"),r.a.createElement("input",{type:"text",value:c,onChange:function(e){i(e.target.value)}})),r.a.createElement(v.a.Field,null,"Selected value: ",r.a.createElement("b",null,o)),r.a.createElement(v.a.Field,null,r.a.createElement(g.a,{label:"Tag",name:"radioGroup",value:"Tag",checked:"Tag"===o,onChange:b})),r.a.createElement(v.a.Field,null,r.a.createElement(g.a,{label:p,name:"radioGroup",value:p,checked:o===p,onChange:b})),r.a.createElement(v.a.Field,null,r.a.createElement(g.a,{label:E,name:"radioGroup",value:E,checked:o===E,onChange:b})),r.a.createElement(f.a,{type:"submit",className:"basic circular blue fluid"},r.a.createElement(f.a.Content,{href:"#"},"Generate"))))},h=function(e){e.responses;var t=e.inquiryHistory;return r.a.createElement("div",{className:"ui container",id:"past-inquiries"},r.a.createElement("div",null,r.a.createElement("h2",{id:"center-text"},"Past Inquiries"),r.a.createElement("div",{className:"ui segment"},t.length>1?r.a.createElement("div",null,t.map(function(e){var t,a=e.prompt,n=e.response,l=e.key;return r.a.createElement("div",{key:l,className:""},r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"four wide column"}),r.a.createElement("div",{id:"center-text",className:"eight wide column"},r.a.createElement("h3",null,"Prompt: "),r.a.createElement("p",null,a)),r.a.createElement("div",{className:"four wide column"}))),r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"four wide column"}),r.a.createElement("div",{id:"center-text",className:"eight wide column"},r.a.createElement("h3",null,"Response: "),r.a.createElement("p",null,(t=n).includes("\n")?t.split(/\r?\n/).map(function(e){return r.a.createElement("p",null,e)}):t)),r.a.createElement("div",{className:"four wide column"}))),r.a.createElement("div",{className:"ui divider"}))})):r.a.createElement("div",{id:"center-text"},r.a.createElement("p",null,"None to display yet!")))))},w=function(){var e=a(165),t=e.Configuration,l=e.OpenAIApi,c=Object(n.useState)([]),i=Object(s.a)(c,2),v=i[0],g=i[1],f=Object(n.useState)([]),w=Object(s.a)(f,2),x=w[0],N=w[1],y=new l(new t({apiKey:"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"})),k=function(e,t){switch(console.log("getPromptString Text Submitted: ",e,t),t){case"Tag":return"Generate a tagline for ".concat(e);case"Advertisement Text":return"Create an advertisement for buying ".concat(e);case"Product Description":return"Create a product description for ".concat(e);default:return"Give me a fun fact about ".concat(e)}},S=function(){var e=Object(o.a)(u.a.mark(function e(t,a){var n,r,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("onTextSubmit Text Submitted: ",t,a),n=k(t,a),e.next=4,y.createCompletion("text-curie-001",{prompt:n,temperature:.7,max_tokens:256,top_p:1,frequency_penalty:0,presence_penalty:0});case 4:r=e.sent,l=r.data.choices[0].text,g(l),N([{prompt:n,response:l,key:x.length+1}].concat(Object(m.a)(x)));case 8:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}();return console.log("INQ HIST: ",x),r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{padded:!0,color:"blue"},"TextGenerator"),r.a.createElement("div",{className:"ui container"},r.a.createElement("h1",{id:"center-text"},"Create amazing marketing text with our text generator!"),r.a.createElement("div",{className:"ui placeholder segment",id:"input-container"},r.a.createElement(d.a,{columns:"one"},r.a.createElement(d.a.Row,null,r.a.createElement(d.a.Column,null,r.a.createElement("div",{className:"ui form"},r.a.createElement(b,{onAiReqSubmit:S})))))),r.a.createElement("div",{className:"ui placeholder segment",id:"blue-border"},r.a.createElement(d.a,{columns:"one"},r.a.createElement(d.a.Row,null,r.a.createElement(d.a.Column,null,r.a.createElement(E,{responses:v}),r.a.createElement(h,{responses:v,inquiryHistory:x})))))))};a(194);c.a.render(r.a.createElement(w,null),document.querySelector("#root"))},74:function(e,t,a){}},[[151,2,1]]]);
//# sourceMappingURL=main.976d5eb5.chunk.js.map