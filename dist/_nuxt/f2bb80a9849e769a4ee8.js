(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{213:function(t,e,o){"use strict";o.r(e);var n=o(15),r=o.n(n),l={layout:"subpages",computed:{categories:function(){return this.$store.getters.categories}},asyncData:function(t){return r.a.get("/api/posts?post=".concat(t.params.id)).then((function(t){return{newPost:t.data}}))},data:function(){return{imageUrl:""}},methods:{updatePost:function(){this.$store.dispatch("updatePost",this.newPost[0])},deleteImge:function(t){this.newPost[0].images.splice(t,1)}}},c=o(29),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-form-group",{attrs:{id:"input-group-1",label:"Name:","label-for":"input-1"}},[o("b-form-input",{attrs:{id:"input-1",required:"",placeholder:"Enter location name"},model:{value:t.newPost[0].name,callback:function(e){t.$set(t.newPost[0],"name",e)},expression:"newPost[0].name"}})],1),t._v(" "),o("b-form-group",{attrs:{id:"input-group-2",label:"Address:","label-for":"input-2"}},[o("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"Enter address"},model:{value:t.newPost[0].address,callback:function(e){t.$set(t.newPost[0],"address",e)},expression:"newPost[0].address"}})],1),t._v(" "),o("b-form-group",{attrs:{id:"input-group-3",label:"Description:","label-for":"input-3"}},[o("b-form-textarea",{attrs:{id:"input-3",required:"",placeholder:"Enter description"},model:{value:t.newPost[0].description,callback:function(e){t.$set(t.newPost[0],"description",e)},expression:"newPost[0].description"}})],1),t._v(" "),o("b-form-group",{attrs:{id:"input-group-4",label:"Personal touch:","label-for":"input-4"}},[o("b-form-textarea",{attrs:{id:"input-4",required:"",placeholder:"Enter personal touch"},model:{value:t.newPost[0].personalTouch,callback:function(e){t.$set(t.newPost[0],"personalTouch",e)},expression:"newPost[0].personalTouch"}})],1),t._v(" "),o("b-form-group",{attrs:{id:"input-group-5",label:"Location:","label-for":"input-5"}},[o("b-form-input",{attrs:{id:"input-5",required:"",placeholder:"Enter location"},model:{value:t.newPost[0].location,callback:function(e){t.$set(t.newPost[0],"location",e)},expression:"newPost[0].location"}})],1),t._v(" "),o("multiselect",{staticClass:"my-4",attrs:{options:t.categories},model:{value:t.newPost[0].category,callback:function(e){t.$set(t.newPost[0],"category",e)},expression:"newPost[0].category"}}),t._v(" "),o("p",[t._v("\n      Images:\n      "),o("b-list-group",t._l(t.newPost[0].images,(function(image,e){return o("b-list-group-item",{key:e,staticClass:"d-flex flex-row justify-content-between align-items-center"},[o("img",{staticStyle:{height:"100px"},attrs:{src:image,alt:""}}),t._v(" "),o("span",{staticStyle:{cursor:"pointer"},on:{click:function(o){return t.deleteImge(e)}}},[t._v("DELETE")])])})),1)],1),t._v(" "),o("b-form-group",{attrs:{id:"input-group-7",label:"Image:","label-for":"input-7"}},[o("b-form-input",{attrs:{id:"input-7",required:"",placeholder:"Paste url to image"},model:{value:t.imageUrl,callback:function(e){t.imageUrl=e},expression:"imageUrl"}}),t._v(" "),o("b-button",{staticClass:"mt-3",attrs:{variant:"primary"},on:{click:function(e){return t.pushImage()}}},[t._v("Add image Url")])],1),t._v(" "),o("b-form-group",{attrs:{id:"input-group-8",label:"CTA:","label-for":"input-8"}},[o("b-form-input",{attrs:{id:"input-8",required:"",placeholder:"Enter CTA link"},model:{value:t.newPost[0].cta,callback:function(e){t.$set(t.newPost[0],"cta",e)},expression:"newPost[0].cta"}})],1),t._v(" "),o("b-button",{staticClass:"my-5",attrs:{variant:"primary"},on:{click:function(e){return t.updatePost()}}},[t._v("Update Post")])],1)}),[],!1,null,null,null);e.default=component.exports}}]);