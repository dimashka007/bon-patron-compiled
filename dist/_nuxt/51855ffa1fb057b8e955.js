(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{211:function(t,o,n){"use strict";n.r(o);var e=n(15),c=n.n(e),l={layout:"subpages",asyncData:function(t){return c.a.get("/api/posts?post=".concat(t.params.id)).then((function(t){return{post:t.data}}))}},r=n(29),component=Object(r.a)(l,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"row mb-5"},[n("div",{staticClass:"col-6 d-flex flex-wrap justify-content-center"},t._l(t.post[0].images,(function(img){return n("div",{staticClass:"col-6 mb-4"},[n("img",{staticStyle:{width:"100%"},attrs:{src:img,alt:""}})])})),0),t._v(" "),n("div",{staticClass:"col-6"},[n("div",{staticClass:"d-flex flex-column"},[n("p",{staticClass:"font-weight-bold"},[t._v(t._s(t.post[0].category)+" / "+t._s(t.post[0].location))]),t._v(" "),n("h3",{staticClass:"font-weight-bold"},[t._v(t._s(t.post[0].name))]),t._v(" "),n("p",{staticClass:"font-weight-bold"},[t._v(t._s(t.post[0].address))]),t._v(" "),n("p",[t._v(t._s(t.post[0].description))]),t._v(" "),n("p",[t._v(t._s(t.post[0].personalTouch))]),t._v(" "),n("b-button",{staticClass:"mt-5",attrs:{variant:"outline-primary"}},[n("a",{staticStyle:{color:"black","text-decoration":"none"},attrs:{target:"_blank",href:t.post[0].cta}},[t._v("CTA")])])],1)])])}),[],!1,null,null,null);o.default=component.exports}}]);