(this.webpackJsonpleaderboard=this.webpackJsonpleaderboard||[]).push([[0],{22:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(2),a=c.n(r),s=c(14),o=c.n(s),i=(c(22),c(4)),j=c.n(i),d=c(15),l=c(5),h=c(16),b=c.n(h),u=c.p+"static/media/logo.725ffc3c.jpeg";c(41);var O=function(){var e=Object(r.useState)({"No one yet!":"???"}),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(r.useState)(1),o=Object(l.a)(s,2),i=o[0],h=o[1];return Object(r.useEffect)(Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i){e.next=7;break}return e.next=3,b()({method:"get",url:"https://acm-bounty.herokuapp.com/scores"});case 3:t=e.sent,a(t.data),console.log(c),h(0);case 7:case"end":return e.stop()}}),e)})))),Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("header",{className:"App-header",children:[Object(n.jsx)("img",{src:u,className:"App-logo",alt:"logo"}),Object(n.jsx)("p",{children:Object(n.jsx)("h1",{children:"Leaderboard"})}),Object(n.jsxs)("table",{className:"table table-dark",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Rank"}),Object(n.jsx)("th",{children:"Github Username"}),Object(n.jsx)("th",{children:"Total Score"})]})}),Object(n.jsx)("tbody",{children:Object.keys(c).map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t+1}),Object(n.jsx)("td",{children:Object(n.jsx)("a",{href:"https://github.com/"+"".concat(e),target:"_blank",children:e})}),Object(n.jsx)("td",{children:c[e]})]})}))})]})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.a8d479e7.chunk.js.map