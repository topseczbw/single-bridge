---
title: 前端代码中区分环境（开发、生产）
---

1. ## 是什么？为什么？

   开发插件服务时，我们常需要做一个demo页面，模拟真实使用场景来校验插件是否正常可用。

   demo页面会在提测阶段在测试环境中供测试人员使用。

   有时，我们需要区分是本地开发环境还是线上/测试环境，对业务代码做出一些调整。比如：访问地址，发到线上/测试环境时插件的访问地址可能不是服务器根目录，但本地开发环境中，我们相当于在根目录调试源码的。此时需要一个标识，进行区分。

2. ## 如何解决？

### 方案一

使用webpack的别名功能。因为在webpack运行时，可以区分环境，根据标识，利用别名，引入不同的文件，然后在客户端侧代码中，使用这个别名即可。

```js
config.resolve.alias
        .set('@', resolve('src'))
        .set(
        'webEnv',
        process.env.NODE_ENV === 'development'
            ? resolve('config/env.dev.js')
            : resolve('config/env.pro.js')
        )
```

### 方案二

使用webpack中的 `DefinePlugin` 插件。

### 方案三

如果你正在使用 `vue-cli3` ,服务中已经集成好了特定的api。

[详见](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E5%9C%A8%E5%AE%A2%E6%88%B7%E7%AB%AF%E4%BE%A7%E4%BB%A3%E7%A0%81%E4%B8%AD%E4%BD%BF%E7%94%A8%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)