(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{416:function(t,s,o){},454:function(t,s,o){"use strict";var a=o(416);o.n(a).a},460:function(t,s,o){"use strict";o.r(s);var a=o(453),e={name:"post-card",props:{post:{type:Object,required:!0}},components:{NavigationIcon:a.c,ClockIcon:a.b,CalendarIcon:a.a},methods:{go:function(t){this.$router.push(t)}}},i=(o(454),o(49)),n=Object(i.a)(e,(function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("el-card",{staticClass:"post-card",attrs:{shadow:"hover"}},[o("el-row",{on:{click:function(s){return t.go(t.post.path)}}},[t.post.image?o("el-col",{staticClass:"post-cover",attrs:{lg:10,md:12,sm:12}},[o("img",{attrs:{src:t.$withBase(t.post.image),alt:t.post.title}})]):t._e(),t._v(" "),o("el-col",{staticClass:"post-content",attrs:{lg:14,md:12,sm:12}},[o("div",[o("h2",{staticClass:"post-title"},[o("a",{attrs:{href:t.post.path,target:"_blank"}},[t._v(t._s(t.post.title))])])]),t._v(" "),t.post.summary?o("div",{staticClass:"post-summary"},[o("p",[t._v("\n          "+t._s(t.post.summary)+"\n          "),o("a",{staticClass:"post-read-more",attrs:{href:t.post.path,target:"_blank"}},[t._v("\n            "+t._s(t.post.readMoreText||"Read more")+"\n          ")])])]):t._e()])],1),t._v(" "),o("div",{staticClass:"post-footer"},[o("div",{staticClass:"post-footer-item"},[o("CalendarIcon",{staticClass:"post-footer-item-icon"}),t._v("\n      "+t._s(new Date(t.post.date.trim()).toDateString())+"\n    ")],1),t._v(" "),t.post.readingTime?o("div",{staticClass:"post-footer-item"},[o("ClockIcon",{staticClass:"post-footer-item-icon"}),t._v("\n      "+t._s(t.post.readingTime)+"\n    ")],1):t._e(),t._v(" "),t.post.location?o("div",{staticClass:"post-footer-item"},[o("NavigationIcon",{staticClass:"post-footer-item-icon"}),t._v("\n      "+t._s(t.post.location)+"\n    ")],1):t._e()])],1)}),[],!1,null,null,null);s.default=n.exports}}]);