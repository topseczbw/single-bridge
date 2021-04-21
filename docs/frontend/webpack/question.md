---
title: webpack 常见问题
---

## 源码暴露

项目发布上线后，在控制台source选项中的webpack://文件夹中可以看到项目源码问题

![image](https://user-images.githubusercontent.com/33987402/77244291-4939e000-6c4e-11ea-8d03-b36ccc75e461.png)

解决方案

关闭webpack中的sourceMap功能，即 `devtool` 选项

vue-cli3中，则许关闭vue.config.js中的 `productionSourceMap` 配置
