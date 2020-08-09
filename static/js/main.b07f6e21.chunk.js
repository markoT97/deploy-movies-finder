(this["webpackJsonpmovies-spa"]=this["webpackJsonpmovies-spa"]||[]).push([[0],{100:function(e,a,t){e.exports=t.p+"static/media/imdb-logo.40c51136.svg"},114:function(e,a,t){e.exports=t(149)},119:function(e,a,t){},141:function(e,a,t){},143:function(e,a,t){},149:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),c=t.n(l),o=(t(119),t(72)),i=t(20),m=t(161),s=t(154),u=t(105),d=t(160),v=t(59),E=t.n(v),p=t(83),b=t(99),f=t.n(b).a.create({baseURL:"https://www.omdbapi.com/?type=movie&apikey=28eb3de"});function y(e,a,t){var n={params:{s:e||void 0,y:a||void 0,page:t||void 0}};return f.get("",n)}function h(e,a,t){var n={params:{t:e||void 0,i:a||void 0,plot:t||void 0}};return f.get("",n)}function g(e,a){return function(){var t=Object(p.a)(E.a.mark((function t(n){var r,l;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(void 0,e,a);case 2:return r=t.sent,l=r.data,t.abrupt("return",n({type:"FETCH_MOVIE_DETAILS",payload:l}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}var O=t(157),w=t(153),T=t(155),j=t(100),x=t.n(j),S=t(61),N=t.n(S);var R=function(e){var a=Object(i.c)((function(e){return e.movieList.selectedMovie})),t=a.Title,n=a.Released,l=a.Runtime,c=a.Genre,m=a.Actors,d=a.Plot,v=a.Poster,E=a.imdbRating,p=a.imdbID,b=r.a.useState(!1),f=Object(o.a)(b,2),y=f[0],h=f[1],j=Object(i.b)(),S=["short","full"];return r.a.createElement(O.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",onExited:function(){return h(!1)},centered:!0}),r.a.createElement(O.a.Header,{closeButton:!0},r.a.createElement(w.a,null,r.a.createElement(s.a,{className:"text-center"},r.a.createElement(O.a.Title,{id:"contained-modal-title-vcenter"},t),r.a.createElement(u.a,{className:"text-right align-bottom my-auto"},r.a.createElement("span",{className:"font-italic font-underline"},r.a.createElement("u",null,n)))))),r.a.createElement(O.a.Body,null,r.a.createElement(w.a,null,r.a.createElement(s.a,null,r.a.createElement(T.a,{src:v,className:"mx-auto",fluid:!0,onError:function(e){e.target.src=N.a}})),r.a.createElement(s.a,null,r.a.createElement(u.a,null,r.a.createElement("p",{className:"font-italic mt-3"},d),"N/A"!==d&&r.a.createElement("span",{onClick:function(){j(g(p,y?S[0]:S[1])),h(!y)},className:"text-muted",role:"button"},y?"Show less":"Show more"))))),r.a.createElement(O.a.Footer,null,r.a.createElement(w.a,null,r.a.createElement(s.a,null,r.a.createElement(u.a,{xs:8},r.a.createElement("p",null,r.a.createElement("span",{className:"font-weight-bold"},"Actors:")," ",m)),r.a.createElement(u.a,{className:"text-right"},r.a.createElement("p",null,r.a.createElement("span",{className:"font-weight-bold"},"Runtime:")," ",l))),r.a.createElement(s.a,null,r.a.createElement(u.a,{xs:8},r.a.createElement("p",null,r.a.createElement("span",{className:"font-weight-bold"},"Genre:")," ",c)),r.a.createElement(u.a,{className:"text-right"},r.a.createElement(T.a,{src:x.a,width:"40px",fluid:!0})," ",E)))))};t(141);var k=function(){var e=Object(i.c)((function(e){return e.movieList.movies})),a=e.Search,t=e.Error,n=r.a.useState(!1),l=Object(o.a)(n,2),c=l[0],v=l[1],E=Object(i.b)(),p=Object(i.c)((function(e){return e.movieList.sortByParam})),b=r.a.createElement(m.a,{as:"select",variant:"warning",onChange:function(e){E({type:"SET_SORT_BY_PARAM",payload:e.target.value})},className:"fixed-top sort-input",defaultValue:"",value:p},r.a.createElement("option",{value:"",disabled:!0},"Sort by"),["Title","Year","imdbID"].map((function(e,a){return r.a.createElement("option",{key:a,value:e},e)})));return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,a?r.a.createElement(r.a.Fragment,null,b,a.map((function(e,a){return r.a.createElement(u.a,{key:a,md:3,sm:12,className:"my-2"},r.a.createElement(m.a,{as:d.a,variant:"outline-info",key:a,onClick:function(){return function(e){E(g(e.imdbID)),v(!0)}(e)},onError:function(e){e.target.src=N.a}},r.a.createElement(d.a.Img,{variant:"top",src:e.Poster}),r.a.createElement(d.a.Body,null,r.a.createElement(d.a.Title,null,e.Title),r.a.createElement(d.a.Text,null,e.Year)),r.a.createElement(d.a.Footer,null)))})),")"):r.a.createElement(u.a,{className:"text-center"},r.a.createElement("h2",null,t||"Type movie title and/or year"))),r.a.createElement(R,{show:c,onHide:function(){return v(!1)}}))},B=t(159),I=t(158),M=t(111),C=t(77),A=C.b({movieTitle:C.c().label("Movie title").required(),year:C.a().min(1800).max((new Date).getFullYear()).label("Year")}),D=(t(143),t(156));var F=function(){var e=Object(i.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{bg:"dark",variant:"dark",sticky:"top"},r.a.createElement(M.a,{initialValues:{movieTitle:"",year:""},validationSchema:A,onSubmit:function(a){var t,n,r,l=a.movieTitle,c=a.year;e((t=l,n=c,function(){var e=Object(p.a)(E.a.mark((function e(a){var l,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t,n,r);case 2:return l=e.sent,c=l.data,e.abrupt("return",a({type:"FETCH_MOVIES",payload:c}));case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()))}},(function(e){var a=e.values,t=e.errors,n=e.touched,l=e.dirty,c=e.handleChange,o=e.handleBlur,i=e.handleSubmit,s=e.isValid;return r.a.createElement(I.a,{inline:!0,onSubmit:i},r.a.createElement(I.a.Control,{type:"text",placeholder:"Movie title",className:"my-1 mr-sm-2",name:"movieTitle",onChange:c,onBlur:o,value:a.movieTitle,isValid:n.movieTitle&&!t.movieTitle,isInvalid:!!t.movieTitle}),r.a.createElement(I.a.Control,{type:"number",min:"1800",max:(new Date).getFullYear(),placeholder:"Year",className:"my-1 mr-sm-2",name:"year",onChange:c,onBlur:o,value:a.year,isValid:n.year&&!t.year,isInvalid:!!t.year}),r.a.createElement(u.a,null),r.a.createElement(u.a,{lg:2,className:""},r.a.createElement(m.a,{type:"submit",variant:"info",className:"my-1 ml-auto",block:!0,disabled:!(s&&l)},r.a.createElement(D.a,{size:20})," Search")))}))))};var V=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(F,null),r.a.createElement(w.a,null,r.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=t(38),P=t(109),Y=t(110),L=t(29),H={Title:"",Year:"",Rated:"",Released:"",Runtime:"",Genre:"",Director:"",Writer:"",Actors:"",Plot:"",Language:"",Country:"",Awards:"",Poster:"",Ratings:[{Source:"",Value:""}],Metascore:"",imdbRating:"",imdbVotes:"",imdbID:"",Type:"",DVD:"",BoxOffice:"",Production:"",Website:"",Response:""},W=t(86),G=t.n(W),z={movies:{Response:"False"},selectedMovie:H,sortByParam:""};var J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_MOVIES":return Object(L.a)(Object(L.a)({},e),{},{movies:a.payload});case"FETCH_MOVIE_DETAILS":return Object(L.a)(Object(L.a)({},e),{},{selectedMovie:a.payload});case"SET_SORT_BY_PARAM":var t=e.movies.Search,n=a.payload;return t?(console.log(G()(t,[n])),Object(L.a)(Object(L.a)({},e),{},{movies:Object(L.a)(Object(L.a)({},e.movies),{},{Search:G()(t,[n])}),sortByParam:n})):e;default:return e}},q=Object(_.combineReducers)({movieList:J}),U=Object(Y.composeWithDevTools)({}),$=Object(_.createStore)(q,U(Object(_.applyMiddleware)(P.a)));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:$},r.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},61:function(e,a,t){e.exports=t.p+"static/media/no-poster-available.e7d69c9b.jpg"}},[[114,1,2]]]);
//# sourceMappingURL=main.b07f6e21.chunk.js.map