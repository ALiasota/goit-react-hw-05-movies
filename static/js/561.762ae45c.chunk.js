"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[561],{1668:function(e,r,t){t.d(r,{pv:function(){return o},qF:function(){return f}});var n=t(5861),a=t(7757),u=t.n(a),c=t(4569),i=t.n(c);i().defaults.baseURL="https://api.themoviedb.org/3/";var s="067f291d21ed1c6d30bd9ade17d843cc";function o(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:s},e.prev=1,e.next=4,i()("trending/movie/day",{params:r});case 4:return t=e.sent,e.abrupt("return",t.data);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function f(){return l.apply(this,arguments)}function l(){return l=(0,n.Z)(u().mark((function e(){var r,t,n,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:"",t={api_key:s,query:r},e.prev=2,e.next=5,i()("search/movie",{params:t});case 5:return n=e.sent,e.abrupt("return",n.data);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),l.apply(this,arguments)}},6561:function(e,r,t){t.r(r),t.d(r,{default:function(){return s}});var n=t(8152),a=t(2791),u=t(3504),c=t(1668),i=t(184);function s(){var e=(0,a.useState)([]),r=(0,n.Z)(e,2),t=r[0],s=r[1];return(0,a.useEffect)((function(){(0,c.pv)().then((function(e){var r=e.results;return s(r)}))}),[]),(0,i.jsx)(i.Fragment,{children:t&&(0,i.jsx)("ul",{children:t.map((function(e){var r=e.id,t=e.original_title;return(0,i.jsx)("li",{children:(0,i.jsx)(u.rU,{to:"movies/".concat(r),children:t})},r)}))})})}}}]);
//# sourceMappingURL=561.762ae45c.chunk.js.map