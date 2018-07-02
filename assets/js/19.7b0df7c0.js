(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{200:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),n("p",[t._v("本项目集合了国际化i18n方案。通过 "),n("a",{attrs:{href:"https://github.com/kazupon/vue-i18n",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-i18n"),n("OutboundLink")],1),t._v("而实现。")]),n("p",[t._v("由于本项目ui框架使用了"),n("code",[t._v("element")]),t._v("，所以国际化的同时也要将其国际化。\n"),n("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/lang/index.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("完整代码"),n("OutboundLink")],1),t._v("。\n同时将当前 "),n("code",[t._v("lang")]),t._v(" 语言存在 "),n("code",[t._v("cookie")]),t._v("之中，为了下次打开页面能记住上次的语言设置。")]),t._m(1),n("p",[t._v("代码地址: "),n("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/tree/master/src/lang",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/lang"),n("OutboundLink")],1),t._v("\n目前配置了英文和中文两种语言。")]),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"国际化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#国际化","aria-hidden":"true"}},[this._v("#")]),this._v(" 国际化")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"全局lang"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局lang","aria-hidden":"true"}},[this._v("#")]),this._v(" 全局lang")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("同时在 "),s("code",[this._v("@/lang/index.js")]),this._v(" 中引入了 "),s("code",[this._v("element-ui")]),this._v("的语言包")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("使用：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[this._v("// $t 是 vue-i18n 提供的全局方法，更多信息请查看其文档")]),this._v("\n"),s("span",{attrs:{class:"token function"}},[this._v("$t")]),s("span",{attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{attrs:{class:"token string"}},[this._v("'login.title'")]),s("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"异步lang"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步lang","aria-hidden":"true"}},[this._v("#")]),this._v(" 异步lang")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("有一些某些特定页面才需要的 lang，比如 "),s("code",[this._v("@/views/i18n-demo")]),this._v(" 页面")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" local "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./local'")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$i18n"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("mergeLocaleMessage")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'en'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" local"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("en"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$i18n"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("mergeLocaleMessage")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'zh'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" local"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zh"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"移除国际化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移除国际化","aria-hidden":"true"}},[this._v("#")]),this._v(" 移除国际化")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在 "),s("code",[this._v("src/main.js")]),this._v(" 中移除 "),s("code",[this._v("import i18n from './lang'")]),this._v(" 并且删除 "),s("code",[this._v("src/lang")]),this._v(" 文件夹。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("并在 "),n("code",[t._v("src/layout/components/Levelbar")]),t._v("、"),n("code",[t._v("src/layout/components/SidebarItem")]),t._v("、"),n("code",[t._v("src/layout/components/TabsView")]),t._v(" 等文件夹中 移除 "),n("code",[t._v("this.$t('route.xxxx')")]),t._v(" 使用国际化的方式。")])}],!1,null,null,null);s.default=e.exports}}]);