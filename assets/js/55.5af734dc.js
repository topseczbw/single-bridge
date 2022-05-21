(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{419:function(t,s,n){"use strict";n.r(s);var a=n(26),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"格式化相关的工具有哪些"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#格式化相关的工具有哪些"}},[t._v("#")]),t._v(" 格式化相关的工具有哪些")]),t._v(" "),n("ul",[n("li",[t._v("EditorConfig")]),t._v(" "),n("li",[t._v("Prettier")]),t._v(" "),n("li",[t._v("Eslint")]),t._v(" "),n("li",[t._v("Tslint")]),t._v(" "),n("li",[t._v("Vetur（vsCode插件）")]),t._v(" "),n("li",[t._v("编辑器默认")])]),t._v(" "),n("h2",{attrs:{id:"工具介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#工具介绍"}},[t._v("#")]),t._v(" 工具介绍")]),t._v(" "),n("h3",{attrs:{id:"editorconfig"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#editorconfig"}},[t._v("#")]),t._v(" EditorConfig")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://editorconfig.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("EditorConfig有助于为跨越各种编辑器和IDE的同一项目的多个开发人员维护一致的编码样式。 EditorConfig项目由用于定义编码样式的文件格式和一组文本编辑器插件组成，这些插件使编辑器能够读取文件格式并遵循定义的样式。 EditorConfig文件易于阅读，与版本控制系统配合使用。")]),t._v(" "),n("p",[t._v("配置文件命名："),n("code",[t._v(".editorconfig")])]),t._v(" "),n("p",[t._v("使用前置条件：")]),t._v(" "),n("ol",[n("li",[t._v("安装 "),n("code",[t._v("editorconfig")]),t._v(" 第三方包于 "),n("code",[t._v("node_modules")])]),t._v(" "),n("li",[t._v("在根目录下配置 "),n("code",[t._v(".editorconfig")]),t._v(" 文件")]),t._v(" "),n("li",[t._v("编辑器开启支持 "),n("code",[t._v("editorconfig")]),t._v(" 配置（如vscode就是安装EditorConfig for VS Code扩展插件）")])]),t._v(" "),n("p",[t._v("示例：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// editorconfig有些格式化生效条件是在保存时")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 未格式化状态")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \\s\\s\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" num1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" num2\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 保存后，格式化完毕后状态：清空多余空白，末尾增加换行")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" num1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" num2\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\\n\n")])])]),n("p",[t._v("此后编辑器默认格式化程序，会按照editorconfig配置格式化，在保存时也会走相关配置。")]),t._v(" "),n("h3",{attrs:{id:"prettier"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prettier"}},[t._v("#")]),t._v(" Prettier")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/prettier/prettier",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("Prettier是一个固执己见的代码格式化程序。它通过解析您的代码并使用自己的规则重新打印它来实施一致的样式，这些规则考虑到了最大的行长度，必要时包装代码。")]),t._v(" "),n("p",[t._v("它删除所有原始样式，并确保所有输出的代码符合一致的样式。")]),t._v(" "),n("p",[t._v("Prettier 在整个代码库中强制执行一致的代码样式（即不会影响AST的代码格式），因为它通过解析它来忽略原始样式*并使用自己的规则重新打印解析的AST，该规则采用最大行长度考虑到，必要时包装代码。")]),t._v(" "),n("p",[t._v("配置文件命名："),n("code",[t._v(".prettierrc")])]),t._v(" "),n("p",[t._v("示例：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于长度满足，它适合一行，所以它将保持原样。")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arg1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 长度不满足，它不适合一行，所以格式化")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("reallyLongArg")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("omgSoManyParameters")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("IShouldRefactorThis")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isThereSeriouslyAnotherOne")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prettier格式化结果")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("reallyLongArg")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("omgSoManyParameters")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("IShouldRefactorThis")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isThereSeriouslyAnotherOne")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在对象文字中打印括号之间的空格。")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("foo"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" bar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" bar "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("p",[n("strong",[t._v("美化")]),t._v("语法书写格式")]),t._v(" "),n("p",[t._v("只关注"),n("strong",[t._v("格式化")]),t._v("，并"),n("strong",[t._v("不具有eslint检查语法等能力")]),t._v("，只关心格式化文件(最大长度、混合标签和空格、引用样式等)，包括JavaScript · Flow · TypeScript · CSS · SCSS · Less · JSX · Vue · GraphQL · JSON · Markdown")]),t._v(" "),n("h3",{attrs:{id:"eslint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#eslint"}},[t._v("#")]),t._v(" Eslint")]),t._v(" "),n("p",[t._v("ESLint 是在 ECMAScript/JavaScript 代码中识别和报告模式匹配的工具，它的目标是保证代码的一致性和避免错误。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("npm install eslint "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("save"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("dev\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("node_modules"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bin"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("eslint "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("init\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("node_modules"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bin"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("eslint yourfile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n")])])]),n("p",[t._v("配置文件命名："),n("code",[t._v(".eslintrc.js")])]),t._v(" "),n("p",[n("strong",[t._v("检查")]),t._v("语法书写是否"),n("strong",[t._v("错误")])]),t._v(" "),n("p",[t._v("eslint 检查出的多为代码"),n("strong",[t._v("错误或优化")]),t._v("，因此需要"),n("strong",[t._v("手动修正")])]),t._v(" "),n("p",[t._v("开启编辑器相关插件后（ESLint），则会提示相关语法错误，如变量定义未使用，const变量被修改")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/33987402/77244491-37593c80-6c50-11ea-83fe-0bdfbcc2d205.png",alt:"image"}})]),t._v(" "),n("h3",{attrs:{id:"tslint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tslint"}},[t._v("#")]),t._v(" tslint")]),t._v(" "),n("p",[t._v("TSLint是一种可扩展的静态分析工具，可检查TypeScript代码的可读性，可维护性和功能性错误。 它在现代编辑器和构建系统中得到广泛支持，可以使用您自己的lint规则，配置和格式化程序进行自定义。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("yarn global add tslint typescript\n\ncd path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("to"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("project\n\ntslint "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("init\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以tslint.json配置为规范，检查src/**/*.ts文件")]),t._v("\ntslint "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("c tslint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/**/*.ts'")]),t._v("\n")])])]),n("p",[t._v("同理eslint")]),t._v(" "),n("h3",{attrs:{id:"vetur"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vetur"}},[t._v("#")]),t._v(" Vetur")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://vuejs.github.io/vetur/formatting.html#formatters",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("可以格式化html、标准css（有分号 、大括号的那种）、标准js（有分号 、双引号的那种）、vue文件。")]),t._v(" "),n("p",[t._v("但是！格式化的标准js文件不符合ESlint规范，会给你加上双引号、分号等，像这样。\nVetur只有一个“整个文档格式化程序”，不能格式化任意范围。因此，只有Format Document命令可用。该Format Selection命令不起作用。")]),t._v(" "),n("p",[t._v("这些格式化程序可用：\nprettier：对于css / scss / less / js / ts。\nprettier-eslint：对于js。跑prettier和eslint --fix。\nprettyhtml：对于HTML。\nstylus-supremacy：对于手写笔。\nvscode-typescript：对于js / ts。VS Code的js / ts格式化程序相同。")]),t._v(" "),n("p",[t._v("Vetur捆绑了格式化程序。当Vetur观察到格式化程序的本地安装时，它更喜欢使用本地版本。")]),t._v(" "),n("p",[t._v("您可以在VS Code config中选择每种语言的默认格式化程序vetur.format.defaultFormatter。 设置语言的格式化程序以none禁用该语言的格式化程序。")])])}),[],!1,null,null,null);s.default=r.exports}}]);