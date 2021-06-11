---
title: IDE 使用总结
---

> 多年使用 Webstorm，总结出一些技巧

## 查看 Webstorm 默认快捷键指令

有时我们已知快捷键的功能描述，但是由于自定义快捷键时覆盖了该快捷键默认指令

我们想要知道默认的快捷键指令是什么，如下操作，方便地找回快捷键指令

![2021-04-22-01-57-28](/tools/webstorm/2021-04-22-01-57-28.png)
![2021-04-22-01-57-43](/tools/webstorm/2021-04-22-01-57-43.png)

## 解决 webstorm 卡顿问题

1. M1 mac 编辑器卡顿

Preferences→Appearance&Behavior→Apperance→Antialiasing→Editor设置为Greyscale

2. /Applications/WebStorm.app/Contents/bin/webstorm.vmoptions 修改内存

```js
-Xms526m
-Xmx1024m
```

3. 屏蔽 node_modules 索引

![a](https://tva1.sinaimg.cn/large/008i3skNly1gresfpiogkj31480u0do1.jpg)

4. 停止对常变动文件夹的索引如：node_modules、build

![b](https://tva1.sinaimg.cn/large/008i3skNly1gresk94f13j30u00uok13.jpg)