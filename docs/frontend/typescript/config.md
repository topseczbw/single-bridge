---
title: 编译配置
---

## 配置模块引入的别名

compilerOptions 的 path 选项。

配置引入路径的别名，让模块引入代码更简洁。

但是没法解决 css 文件如 scss 文件中的模块别名导入问题，如 “@styles/sxxx” "styles/adasd"，css模块 使用 webpack 设置别名解决。

```ts
"paths": {
  "@*": ["src/*"],
  "constants/*": ["src/constants/*"],
  "src/*": ["src/*"],
}
```