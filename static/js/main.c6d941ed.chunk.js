(this.webpackJsonphooked=this.webpackJsonphooked||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(5),r=c.n(a),s=(c(10),c(3)),o=c(2),i=(c(11),c(0)),j=function(e){return Object(i.jsx)("header",{className:"App-header",children:Object(i.jsx)("h2",{children:e.text})})},u=function(e){var t=e.movie,c="N/A"===t.Poster?"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg":t.Poster;return Object(i.jsxs)("div",{className:"movie",children:[Object(i.jsx)("h2",{children:t.Title}),Object(i.jsx)("div",{children:Object(i.jsx)("img",{width:"200",alt:"The movie titled: ".concat(t.Title),src:c})}),Object(i.jsxs)("p",{children:["(",t.Year,")"]})]})},l=function(e){var t=Object(n.useState)(""),c=Object(s.a)(t,2),a=c[0],r=c[1];return Object(i.jsxs)("form",{className:"search",children:[Object(i.jsx)("input",{value:a,onChange:function(e){r(e.target.value)},type:"text"}),Object(i.jsx)("input",{onClick:function(t){t.preventDefault(),e.search(a),r("")},type:"submit",value:"SEARCH"})]})},O={loading:!0,movies:[],errorMessage:null},d=function(e,t){switch(t.type){case"SEARCH_MOVIES_REQUEST":return Object(o.a)(Object(o.a)({},e),{},{loading:!0,errorMessage:null});case"SEARCH_MOVIES_SUCCESS":return Object(o.a)(Object(o.a)({},e),{},{loading:!1,movies:t.payload});case"SEARCH_MOVIES_FAILURE":return Object(o.a)(Object(o.a)({},e),{},{loading:!1,errorMessage:t.error});default:return e}},h=function(){var e=Object(n.useReducer)(d,O),t=Object(s.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){fetch("https://www.omdbapi.com/?s=man&apikey=4a3b711b").then((function(e){return e.json()})).then((function(e){a({type:"SEARCH_MOVIES_SUCCESS",payload:e.Search})}))}),[]);var r=c.movies,o=c.errorMessage,h=c.loading;return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(j,{text:"HOOKED"}),Object(i.jsx)(l,{search:function(e){a({type:"SEARCH_MOVIES_REQUEST"}),fetch("https://www.omdbapi.com/?s=".concat(e,"&apikey=4a3b711b")).then((function(e){return e.json()})).then((function(e){"True"===e.Response?a({type:"SEARCH_MOVIES_SUCCESS",payload:e.Search}):a({type:"SEARCH_MOVIES_FAILURE",error:e.Error})}))}}),Object(i.jsx)("p",{className:"App-intro",children:"Sharing a few of our favourite movies"}),Object(i.jsx)("div",{className:"movies",children:h&&!o?Object(i.jsx)("span",{children:"loading... "}):o?Object(i.jsx)("div",{className:"errorMessage",children:o}):r.map((function(e,t){return Object(i.jsx)(u,{movie:e},"".concat(t,"-").concat(e.Title))}))})]})};r.a.render(Object(i.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.c6d941ed.chunk.js.map