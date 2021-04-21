---
title: 使用阿里云前端监控
---

## 前端监控是什么

前端监控主要从以下三个方面监测网站运行时的健康程度。

- 页面打开速度
- 页面稳定性（js报错）
- 外部服务调用成功率（api）

## 为什么要有前端监控

用户访问我们的业务时，整个访问过程大致可以分为三个阶段：页面生产时（Server 端状态）、页面加载时和页面运行时。

为了保证线上业务稳定运行，我们会在 Server 端对业务的运行状态进行各种监控。现有的 Server 端监控系统相对已经很成熟了，而页面加载和页面运行时的状态监控一直比较欠缺。例如：

无法第一时间获知用户访问我们的站点时遇到的错误；
各个国家、各个地区的用户访问我们站点的真实速度未知；
每个应用内有大量的异步数据调用，而它们的性能、成功率都是未知的。

## 如何为网站设置前端监控

申请阿里云账号——购买服务，[登录](https://signin.aliyun.com/1796066747675887/login.htm)
![image](https://user-images.githubusercontent.com/33987402/77244217-b00ac980-6c4d-11ea-8ea5-004118af245f.png)
![image](https://user-images.githubusercontent.com/33987402/77244221-b436e700-6c4d-11ea-8eb1-678ed180cd68.png)
![image](https://user-images.githubusercontent.com/33987402/77244222-b600aa80-6c4d-11ea-9cfc-d0fe4bb4c0a1.png)
![image](https://user-images.githubusercontent.com/33987402/77244224-b7ca6e00-6c4d-11ea-850e-fb220398e163.png)

## 使用原理

购买服务后，添加应用，会为你生成一个唯一阿里云监控可以识别 `pid`, 在应用的js代码中，通过调用cdn公开接口的方式，将pid传给阿里云，阿里云自动帮助网站进行监控。

## 注意

### 环境区分

我们需要的是线上真实用户的使用数据，因此在项目中，我们需要区分【本地、测试、dev】和【线上】环境，开发时生成两个pid。

```js
if (process.env.NODE_ENV === 'production') {
  !(function(c,b,d,a){
    c[a]||(c[a]={});
    c[a].config={pid:"honho8hw4v@29cc205fe71c7c8",appType:"web",imgUrl:"https://arms-retcode.aliyuncs.com/r.png?"};
    const script = document.createElement("script")
    script.setAttribute("crossorigin","")
    script.setAttribute("src", d)
    const firstChild = document.body.firstChild
    b.body.insertBefore(script, firstChild)
  })(window,document,"https://retcode.alicdn.com/retcode/bl.js","__bl");
}
```

## 参考资料

[阿里云前端监控](https://help.aliyun.com/document_detail/58652.html?spm=a2c4g.11186623.6.617.d26b3ddfk41C9a)
