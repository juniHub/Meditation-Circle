(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n(3),a=n.n(s),r=n(4),i=n(5),o=n(7),h=n(6),j=(n(12),n(0)),u=function(t){Object(o.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={text:"<Hold/>",count:0,grow:!1,shrink:!1},t.breathIn=function(){t.setState({text:"<Breath In/>",count:t.state.count+1,grow:!0,shrink:!1})},t.breathOut=function(){t.setState({text:"<Breath Out/>",count:t.state.count-1,grow:!1,shrink:!0})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsx)("section",{id:"Home",children:Object(j.jsxs)("div",{className:"hero ".concat(this.state.grow?"grow":""," ").concat(this.state.shrink?"shrink":""),id:"hero",onAnimationIteration:1===this.state.count?this.breathOut:this.breathIn,children:[Object(j.jsx)("div",{className:"circle"}),Object(j.jsxs)("div",{className:"text-area",children:[Object(j.jsx)("h3",{children:"Keep Calm and Code On"}),Object(j.jsxs)("h4",{children:[this.state.count," : ",this.state.text]})]}),Object(j.jsx)("div",{className:"pointer-container",children:Object(j.jsx)("span",{className:"pointer"})}),Object(j.jsx)("div",{className:"gradient-circle"})]})})}}]),n}(c.Component),d=document.getElementById("root");a.a.render(Object(j.jsx)(c.StrictMode,{children:Object(j.jsx)(u,{})}),d)}},[[14,1,2]]]);
//# sourceMappingURL=main.6d9d504e.chunk.js.map