---
title: 与后端交互的数据格式
---

总结工作中常见的使用 **Ajax** 与后端进行交互的数据格式。

curd你懂得。

## json格式

最常见，场景多用于表单提交。

Request Header: `content-type:application/json`

```js
axios.post(
  url,
  {
    name: 'zbw',
    sex: 1
  },
  {
    headers: {
      'Content-Type': 'application/json'
    }
  })
```

## formData格式

常见，一般用于传输文件、图片等资源。

Request Header: `content-type:multipart/form-data`

```js
let data = new FormData()
data.append('srcId', 2)
data.append('uId', uId)
data.append('envId', envId)
data.append('cntrId', cntrId)
data.append('dataJson', JSON.stringify(dataJson))

axios.post(
  url,
  data,
  {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
```

## 原生表单格式

少见，原生html表单提交，格式为：`name=zbw&sex=1&email=569119225@qq.com` 字符串

Request Header: `content-type:application/x-www-form-urlencoded`

```js
let xhr = new XMLHttpRequest()

xhr.onreadystatechange = function() {
  if(xhr.readyState == 4 && xhr.status == 200){
    console.log(xhr.response)
  }
}

xhr.open('POST', '/api/entrance/login')

const data = 'email=xxxx&password=xxxxx&verifyCode=344&key=123'

xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.send(data)
```