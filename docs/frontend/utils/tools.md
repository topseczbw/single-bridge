---
title: 常用工具函数
---

## 下载文件

```js
const download = (url) => {
  if (typeof url !== 'string') {
    throw new TypeError('参数类型错误');
  }

  const element = document.createElement('a');
  element.setAttribute('download', 'download');
  element.href = url;
  element.click();
```

## 复制字符串到剪贴板

```js
const copyToClipboard = (value) => {
  const dom = document.createElement('textarea');
  dom.style.width = '0';
  dom.style.height = '0';
  dom.style.opacity = '0';
  document.body.appendChild(dom);
  dom.value = value;
  dom.select();
  document.execCommand('copy');
  dom.remove();
}
```