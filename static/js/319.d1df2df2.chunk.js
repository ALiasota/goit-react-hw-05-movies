"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[319],{1319:function(e,r,t){t.r(r),t.d(r,{default:function(){return m}});var n=t(885),a=t(2791),s=t(1668),c=t(501),i=t(6871),u="MovieDetailsPage_back__B440W",o="MovieDetailsPage_filmCont__h6TJ7",l="MovieDetailsPage_thumb__kEHtl",p="MovieDetailsPage_picture__N1MEC",h="MovieDetailsPage_additional__BCHVj",d=t(184),v=(0,a.lazy)((function(){return t.e(100).then(t.bind(t,9100))})),f=(0,a.lazy)((function(){return t.e(919).then(t.bind(t,7919))}));function m(){var e=(0,i.UO)().movieId,r=(0,i.s0)();var t=(0,a.useState)(null),m=(0,n.Z)(t,2),x=m[0],j=m[1];if((0,a.useEffect)((function(){(0,s.sO)(e).then(j)}),[e]),x){var _=x.poster_path,k=x.genres,w=x.original_title,g=x.overview,y=x.release_date,b=x.vote_average,C="https://image.tmdb.org/t/p/w500".concat(_);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:u,onClick:function(){r(-1)},children:"Go back"}),(0,d.jsxs)("div",{className:o,children:[(0,d.jsx)("div",{className:l,children:(0,d.jsx)("img",{className:p,src:C,alt:w})}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("h1",{children:[w," (",y.split("-")[0],")"]}),(0,d.jsxs)("p",{children:["User Score: ",10*b,"%"]}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:g}),(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("p",{children:k.map((function(e){var r=e.name;return(0,d.jsxs)("span",{children:[r," "]},r)}))})]})]}),(0,d.jsxs)("div",{className:h,children:[(0,d.jsx)("p",{children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(c.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(c.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)("h1",{children:"Loading"}),children:(0,d.jsxs)(i.Z5,{children:[(0,d.jsx)(i.AW,{path:"cast",element:(0,d.jsx)(v,{id:e})}),(0,d.jsx)(i.AW,{path:"reviews",element:(0,d.jsx)(f,{id:e})})]})})]})}}},1668:function(e,r,t){t.d(r,{Cm:function(){return x},jf:function(){return f},pv:function(){return o},qF:function(){return p},sO:function(){return d}});var n=t(5861),a=t(7757),s=t.n(a),c=t(4569),i=t.n(c);i().defaults.baseURL="https://api.themoviedb.org/3/";var u="067f291d21ed1c6d30bd9ade17d843cc";function o(){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:u},e.prev=1,e.next=4,i()("trending/movie/day",{params:r});case 4:return t=e.sent,e.abrupt("return",t.data);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function p(){return h.apply(this,arguments)}function h(){return h=(0,n.Z)(s().mark((function e(){var r,t,n,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:"",t={api_key:u,query:r},e.prev=2,e.next=5,i()("search/movie",{params:t});case 5:return n=e.sent,e.abrupt("return",n.data);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),h.apply(this,arguments)}function d(){return v.apply(this,arguments)}function v(){return v=(0,n.Z)(s().mark((function e(){var r,t,n,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:"",t={api_key:u},e.prev=2,e.next=5,i()("movie/".concat(r),{params:t});case 5:return n=e.sent,e.abrupt("return",n.data);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),v.apply(this,arguments)}function f(){return m.apply(this,arguments)}function m(){return m=(0,n.Z)(s().mark((function e(){var r,t,n,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:"",t={api_key:u},e.prev=2,e.next=5,i()("movie/".concat(r,"/credits"),{params:t});case 5:return n=e.sent,e.abrupt("return",n.data);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),m.apply(this,arguments)}function x(){return j.apply(this,arguments)}function j(){return j=(0,n.Z)(s().mark((function e(){var r,t,n,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:"",t={api_key:u},e.prev=2,e.next=5,i()("movie/".concat(r,"/reviews"),{params:t});case 5:return n=e.sent,e.abrupt("return",n.data);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),j.apply(this,arguments)}}}]);
//# sourceMappingURL=319.d1df2df2.chunk.js.map