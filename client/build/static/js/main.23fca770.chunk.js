(this["webpackJsonpmy-resume"]=this["webpackJsonpmy-resume"]||[]).push([[0],{20:function(e,t,a){e.exports=a(45)},25:function(e,t,a){},26:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),c=a.n(r),o=(a(25),a(26),function(){return l.a.createElement("h2",null,"Guohao Ouyang")}),u=function(){return l.a.createElement("div",{className:"inc-exp-container"},l.a.createElement("div",null,l.a.createElement("h4",null,"Phone: (519)-991-2096")),l.a.createElement("div",null,l.a.createElement("h4",null,"Email: guohao.ouyang@gmail.com")))},i=a(3),s=a.n(i),m=a(7),p=a(4),E=a(19),d=a(2),f=function(e,t){switch(t.type){case"GET_INFO":return Object(d.a)(Object(d.a)({},e),{},{loading:!1,bullepoints:t.payload});case"LOADING_ERROR":return Object(d.a)(Object(d.a)({},e),{},{error:t.payload});case"DELETE_POINT":return Object(d.a)(Object(d.a)({},e),{},{bullepoints:e.bullepoints.filter((function(e){return e._id!==t.payload}))});case"ADD_POINT":return Object(d.a)(Object(d.a)({},e),{},{bullepoints:[].concat(Object(E.a)(e.bullepoints),[t.payload])});default:return e}},b=a(8),v=a.n(b),O={bullepoints:[],error:null,loading:!0},h=Object(n.createContext)(O),y=function(e){var t=e.children,a=Object(n.useReducer)(f,O),r=Object(p.a)(a,2),c=r[0],o=r[1];function u(){return(u=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("myResume/v1");case 3:t=e.sent,o({type:"GET_INFO",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o({type:"LOADING_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function i(){return(i=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.delete("myResume/v1/".concat(t));case 3:o({type:"DELETE_POINT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),o({type:"LOADING_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function E(){return(E=Object(m.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={header:{"Context-type":"application/json"}},e.prev=1,e.next=4,v.a.post("myResume/v1",t,a);case 4:n=e.sent,o({type:"ADD_POINT",payload:n.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),o({type:"LOADING_ERROR",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return l.a.createElement(h.Provider,{value:{bullepoints:c.bullepoints,error:c.error,loading:c.loading,getInfo:function(){return u.apply(this,arguments)},deleteBulletPoint:function(e){return i.apply(this,arguments)},addBulletPoint:function(e){return E.apply(this,arguments)}}},t)},N=function(e){var t=e.bulletpoint,a=Object(n.useContext)(h).deleteBulletPoint;return l.a.createElement("li",{className:"normal"===t.font?"fNormal":"bold"===t.font?"fBold":"fItalic"},t.text,l.a.createElement("button",{className:"delete-btn",onClick:function(){return a(t._id)}},"x"))},x=function(){var e=Object(n.useContext)(h),t=e.bullepoints,a=e.getInfo;return Object(n.useEffect)((function(){a()}),[]),l.a.createElement("div",{className:"mainContext"},l.a.createElement("div",{className:"header"},l.a.createElement("h3",null,"QUALIFICATIONS"),l.a.createElement("ul",{className:"list"},t.filter((function(e){return"qualification"===e.into})).map((function(e){return l.a.createElement(N,{key:e._id,bulletpoint:e})})))),l.a.createElement("div",{className:"header"},l.a.createElement("h3",null,"EDUCATION"),l.a.createElement("ul",{className:"list"},t.filter((function(e){return"education"===e.into})).map((function(e){return l.a.createElement(N,{key:e._id,bulletpoint:e})})))),l.a.createElement("div",{className:"header"},l.a.createElement("h3",null,"PROJECT EXPERIENCE"),l.a.createElement("ul",{className:"list"},t.filter((function(e){return"project_experience"===e.into})).map((function(e){return l.a.createElement(N,{key:e._id,bulletpoint:e})})))),l.a.createElement("div",{className:"header"},l.a.createElement("h3",null,"VOLUNTEER EXPERIENCE"),l.a.createElement("ul",{className:"list"},t.filter((function(e){return"volunteer_experience"===e.into})).map((function(e){return l.a.createElement(N,{key:e._id,bulletpoint:e})})))),l.a.createElement("div",{className:"header"},l.a.createElement("h3",null,"INTERESTS"),l.a.createElement("ul",{className:"list"},t.filter((function(e){return"interests"===e.into})).map((function(e){return l.a.createElement(N,{key:e._id,bulletpoint:e})})))))},j=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("qualification"),o=Object(p.a)(c,2),u=o[0],i=o[1],s=Object(n.useState)("normal"),m=Object(p.a)(s,2),E=m[0],d=m[1],f=Object(n.useContext)(h).addBulletPoint;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Add BulletPoint"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-control"},l.a.createElement("label",{htmlFor:"text"},"Text"),l.a.createElement("input",{type:"text",value:a,onChange:function(e){return r(e.target.value)},placeholder:"Enter text..."})),l.a.createElement("div",{className:"form-control"},l.a.createElement("label",{htmlFor:"into"},"Into",l.a.createElement("br",null)),l.a.createElement("select",{className:"into",value:u,onChange:function(e){return i(e.target.value)}},l.a.createElement("option",{value:"qualification"},"qualification"),l.a.createElement("option",{value:"education"},"education"),l.a.createElement("option",{value:"project_experience"},"projectExperience"),l.a.createElement("option",{value:"volunteer_experience"},"volunteerExperience"),l.a.createElement("option",{value:"interests"},"interests"))),l.a.createElement("div",{className:"form-control"},l.a.createElement("label",{htmlFor:"font"},"Font",l.a.createElement("br",null)),l.a.createElement("select",{className:"font",value:E,onChange:function(e){return d(e.target.value)}},l.a.createElement("option",{value:"normal"},"normal"),l.a.createElement("option",{value:"bold"},"bold"),l.a.createElement("option",{value:"italic"},"italic"))),l.a.createElement("button",{className:"btn",onClick:function(e){e.preventDefault(),f({text:a,into:u,font:E}),r("")}},"Add BulletPoint")))};var I=function(){return l.a.createElement(y,null,l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement(u,null),l.a.createElement(x,null),l.a.createElement(j,null)))};c.a.render(l.a.createElement(I,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.23fca770.chunk.js.map