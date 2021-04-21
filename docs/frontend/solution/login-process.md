---
title: 登录流程
---

## 普通登录

### 使用token

客户端把username和password，提交到服务端的登录api。

服务端验证正确后，生成一个token，并把token和userId，存在缓存里（推荐redis数据库），然后把token返回给前端。

前端每次的请求头中带token，这样就能够轻松的实现。

### 使用cookie

客户端发送username和password到server。

server验证成功后, 写入cookie到客户端，返回200的response，其中cookie的key要存储在redis中，value就是用户信息，并且要设置key的超时时间，如:60分钟。

client收到200后，进行相应的业务操作，并且设置以后每次请求server都会自动带上cookie, 不用你写代码

server端的filter(你肯定用filter来实现)中会每次验证传过来的cookie的key在redis中是否存在, 有就代表登录成功过可以操作, 没有就返回错误标识注意: 在登录成功后, 每次调用服务器接口时候, 都要为redis的key进行续期,如60分钟

当redis的key超过60分钟, 自己会删除这个key, 那么再次请求server时, 就会收到需要登录的返回值

当用户主动退出系统的时候, 也要在server中删除redis的key。

#### 示例

```js
// webpack.dev.config.js

var host = 'devtk.aibeike.com'
var backendPort = 443

// 后台登录接口配置
var options = {
    hostname: host,
    port: backendPort,
    path: '/entrance/login',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': postData.length
    }
}

// 当前cookie
var currentCookie
// 上次请求时间纪录，每8分钟重新登录一次，后台设置cookie时效为10分钟
var lastRquestTime = 0

var setCookie = function(cb) {
    if (Date.now() - lastRquestTime >= 4 * 60 * 1000) {
    var req = https.request(options, (res) => {
        res.setEncoding('utf8')
        res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
        })
        res.on('end', () => {
        currentCookie = res.headers['set-cookie'][0]
        lastRquestTime = Date.now()
        console.log('cookie 获取成功：' + currentCookie + ' cookie获取时间为：' + lastRquestTime)
        cb()
        })
    })
    req.on('error', (e) => {
        console.log(`problem with request: ${e.message}`)
    })
    // write data to request body
    req.write(postData)
    req.end()
    } else {
    cb()
    }
}
setCookie(function(){})

// 在webpack的配置中设置
proxy: {
    '/': {
    target: `https://${host}:${backendPort}/`,
    changeOrigin: true,
    onProxyReq: function(proxyReq, req, res) {
        proxyReq.setHeader('Cookie', currentCookie)
    }
    }
}
```

## 二维码登录

二维码简称qr

1. 首先我们要知道如何获取并展示qr

一般是用 `qrcodejs` 这个库传入一个url地址和指定的dom标识（为了展示）生成一个二维码对象

[github](https://github.com/davidshimjs/qrcodejs)

我们进入页面时先调用一个获取qr信息的接口，然后生成qr

```json
{
    "success": true,
    "message": "获取二维码成功",
    "data": {
        "nextcall_eg": "https://api.service.100tal.com/sso/qrcode/status?callback=__cb&uuid=094c619e-7ea5-11e9-826a-1866da4d8720",
        "qrcode": "https://service.100tal.com/sso/login/236049354?uuid=094c619e-7ea5-11e9-826a-1866da4d8720",
        "uuid": "094c619e-7ea5-11e9-826a-1866da4d8720",
        "errmsg": "ok",
        "errcode": 0
    }
}
```

```js
// 生成二维码
getEwmCode (qrcode) {
    return new QRCode(document.getElementById('qrcodeId'), {
    text: qrcode,
    width: 200,
    height: 200
    })
}
```

此时qr已经显示出来

核心就是在生成二维码之后，使用用户的唯一标识uuid循环的调用查询qr登录状态的接口

```js
// 初始化数据
initData () {
    const locEmail = localStorage.getItem('accountVal')
    // 反填用户名和密码
    this.accountVal = !locEmail ? '' : AES.decrypt(locEmail.toString(), 'accountVal').toString(ENCUTF8)
    // 修改输入框状态
    if (locEmail) { this.ifAccountRight = true }
    this.requestQRCodeCb()
},
initQequest () {
    this.requestQRCode()
},
// 请求二维码链接
requestQRCode () {
    this.getLoginQRCode({}).then((data) => {
    const {qrcode, uuid} = data
    console.log(data)
    // 生成二维码图片
    if (this.qrcodeObj) {
        this.qrcodeObj.clear()
        this.qrcodeObj.makeCode(qrcode)
    } else {
        this.qrcodeObj = this.getEwmCode(qrcode)
    }
    this.ewmStatus = 1
    // 循环调用QR登录状态查询接口 1s/次
    this.queryStatusInteral = setInterval(() => {
        this.jsonpRequest(uuid)
    }, 1000)
    }).catch((error) => {
    this.msgAlert(error.message, false)
    })
},
// 生成二维码
getEwmCode (qrcode) {
    return new QRCode(document.getElementById('qrcodeId'), {
    text: qrcode,
    width: 200,
    height: 200
    })
},
// jsonp跨域请求
jsonpRequest (uuid) {
    var script = document.createElement('script')
    script.src = `https://api.service.100tal.com/sso/qrcode/status?uuid=${uuid}&callback=qrcodeStatus`
    document.body.insertBefore(script, document.body.firstChild)
    document.body.removeChild(script)
},
// 请求登录状态回调
requestQRCodeCb () {
    // QR登录状态查询接口回调
    window.qrcodeStatus = (data) => {
    const {errcode, stage, token} = data
    if (errcode === 0) {
        // stage(登录状态)0:未扫码,1:已扫码，-1:凭据已过期,-2:凭据已经登录，9:登录成功
        switch (stage) {
        case 1:
            this.ewmStatus = 2
            break
        case -1:
            this.ewmStatus = 3
            this.clearIntervalFn()
            break
        case 9:
            this.clearIntervalFn()
            // 请求登录页
            this.requestDingdingLogin(token)
            break
        default:
            break
        }
    } else {
        // 钉钉登录状态获取失败
        this.msgAlert(data.errmsg, false)
    }
    }
},
// 钉钉登录
requestDingdingLogin (token) {
    this.dingdingLogin({params: {token}}).then((data) => {
    // 跳转
    this.goToHomePage()
    }).catch((error) => {
    // 钉钉登录失败
    this.msgAlert(error.message, false)
    })
},
// 清除定时器
clearIntervalFn () {
    if (this.queryStatusInteral) {
    clearInterval(this.queryStatusInteral)
    this.queryStatusInteral = null
    }
}
    destroy () {
    delete window.qrcodeStatus
    },
    created () {
    this.initData()
    this.initQequest()
    }
```