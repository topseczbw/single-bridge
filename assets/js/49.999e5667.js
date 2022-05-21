(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{413:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ol",[a("li",[a("h2",{attrs:{id:"是什么-为什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是什么-为什么"}},[t._v("#")]),t._v(" 是什么？为什么？")]),t._v(" "),a("p",[t._v("开发插件服务时，我们常需要做一个demo页面，模拟真实使用场景来校验插件是否正常可用。")]),t._v(" "),a("p",[t._v("demo页面会在提测阶段在测试环境中供测试人员使用。")]),t._v(" "),a("p",[t._v("有时，我们需要区分是本地开发环境还是线上/测试环境，对业务代码做出一些调整。比如：访问地址，发到线上/测试环境时插件的访问地址可能不是服务器根目录，但本地开发环境中，我们相当于在根目录调试源码的。此时需要一个标识，进行区分。")])]),t._v(" "),a("li",[a("h2",{attrs:{id:"如何解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何解决"}},[t._v("#")]),t._v(" 如何解决？")])])]),t._v(" "),a("h3",{attrs:{id:"方案一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案一"}},[t._v("#")]),t._v(" 方案一")]),t._v(" "),a("p",[t._v("使用webpack的别名功能。因为在webpack运行时，可以区分环境，根据标识，利用别名，引入不同的文件，然后在客户端侧代码中，使用这个别名即可。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alias\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webEnv'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'config/env.dev.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'config/env.pro.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"方案二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案二"}},[t._v("#")]),t._v(" 方案二")]),t._v(" "),a("p",[t._v("使用webpack中的 "),a("code",[t._v("DefinePlugin")]),t._v(" 插件。")]),t._v(" "),a("h3",{attrs:{id:"方案三"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案三"}},[t._v("#")]),t._v(" 方案三")]),t._v(" "),a("p",[t._v("如果你正在使用 "),a("code",[t._v("vue-cli3")]),t._v(" ,服务中已经集成好了特定的api。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/mode-and-env.html#%E5%9C%A8%E5%AE%A2%E6%88%B7%E7%AB%AF%E4%BE%A7%E4%BB%A3%E7%A0%81%E4%B8%AD%E4%BD%BF%E7%94%A8%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("详见"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);