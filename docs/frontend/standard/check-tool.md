---
title: 代码检查工具
---

## 格式化相关的工具有哪些

- EditorConfig
- Prettier
- Eslint
- Tslint
- Vetur（vsCode插件）
- 编辑器默认

## 工具介绍

### EditorConfig

[官网](https://editorconfig.org/)

EditorConfig有助于为跨越各种编辑器和IDE的同一项目的多个开发人员维护一致的编码样式。 EditorConfig项目由用于定义编码样式的文件格式和一组文本编辑器插件组成，这些插件使编辑器能够读取文件格式并遵循定义的样式。 EditorConfig文件易于阅读，与版本控制系统配合使用。

配置文件命名：`.editorconfig`

使用前置条件：

1. 安装 `editorconfig` 第三方包于 `node_modules`
2. 在根目录下配置 `.editorconfig` 文件
3. 编辑器开启支持 `editorconfig` 配置（如vscode就是安装EditorConfig for VS Code扩展插件）

示例：

```js
// editorconfig有些格式化生效条件是在保存时
// 未格式化状态
function add(num1, num2) { \s\s
  return num1 + num2
}

// 保存后，格式化完毕后状态：清空多余空白，末尾增加换行
function add(num1, num2) {
  return num1 + num2
}
\n
```

此后编辑器默认格式化程序，会按照editorconfig配置格式化，在保存时也会走相关配置。

### Prettier

[官网](https://github.com/prettier/prettier)

Prettier是一个固执己见的代码格式化程序。它通过解析您的代码并使用自己的规则重新打印它来实施一致的样式，这些规则考虑到了最大的行长度，必要时包装代码。

它删除所有原始样式，并确保所有输出的代码符合一致的样式。

Prettier 在整个代码库中强制执行一致的代码样式（即不会影响AST的代码格式），因为它通过解析它来忽略原始样式*并使用自己的规则重新打印解析的AST，该规则采用最大行长度考虑到，必要时包装代码。

配置文件命名：`.prettierrc`

示例：

```js
// 由于长度满足，它适合一行，所以它将保持原样。
foo(arg1, arg2, arg3, arg4);

// 长度不满足，它不适合一行，所以格式化
foo(reallyLongArg(), omgSoManyParameters(), IShouldRefactorThis(), isThereSeriouslyAnotherOne());

// Prettier格式化结果
foo(
  reallyLongArg(),
  omgSoManyParameters(),
  IShouldRefactorThis(),
  isThereSeriouslyAnotherOne()
);

// 在对象文字中打印括号之间的空格。
{foo: bar}  => { foo: bar }

```

**美化**语法书写格式

只关注**格式化**，并**不具有eslint检查语法等能力**，只关心格式化文件(最大长度、混合标签和空格、引用样式等)，包括JavaScript · Flow · TypeScript · CSS · SCSS · Less · JSX · Vue · GraphQL · JSON · Markdown

### Eslint

ESLint 是在 ECMAScript/JavaScript 代码中识别和报告模式匹配的工具，它的目标是保证代码的一致性和避免错误。

```js
npm install eslint --save-dev

./node_modules/.bin/eslint --init

./node_modules/.bin/eslint yourfile.js
```

配置文件命名：`.eslintrc.js`

**检查**语法书写是否**错误**

eslint 检查出的多为代码**错误或优化**，因此需要**手动修正**

开启编辑器相关插件后（ESLint），则会提示相关语法错误，如变量定义未使用，const变量被修改

![image](https://user-images.githubusercontent.com/33987402/77244491-37593c80-6c50-11ea-83fe-0bdfbcc2d205.png)

### tslint

TSLint是一种可扩展的静态分析工具，可检查TypeScript代码的可读性，可维护性和功能性错误。 它在现代编辑器和构建系统中得到广泛支持，可以使用您自己的lint规则，配置和格式化程序进行自定义。

```js
yarn global add tslint typescript

cd path/to/project

tslint --init

// 以tslint.json配置为规范，检查src/**/*.ts文件
tslint -c tslint.json 'src/**/*.ts'
```

同理eslint

### Vetur

[官网](https://vuejs.github.io/vetur/formatting.html#formatters)

可以格式化html、标准css（有分号 、大括号的那种）、标准js（有分号 、双引号的那种）、vue文件。

但是！格式化的标准js文件不符合ESlint规范，会给你加上双引号、分号等，像这样。
Vetur只有一个“整个文档格式化程序”，不能格式化任意范围。因此，只有Format Document命令可用。该Format Selection命令不起作用。

这些格式化程序可用：
prettier：对于css / scss / less / js / ts。
prettier-eslint：对于js。跑prettier和eslint --fix。
prettyhtml：对于HTML。
stylus-supremacy：对于手写笔。
vscode-typescript：对于js / ts。VS Code的js / ts格式化程序相同。

Vetur捆绑了格式化程序。当Vetur观察到格式化程序的本地安装时，它更喜欢使用本地版本。

您可以在VS Code config中选择每种语言的默认格式化程序vetur.format.defaultFormatter。 设置语言的格式化程序以none禁用该语言的格式化程序。
