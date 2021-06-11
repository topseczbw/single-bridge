---
title: 管理一个 npm 包
---

## 发布

### 1. 注册 npm 账号

执行 `npm addUser` 或者 去 npm 官网手动注册。

注意：注册成功后，需要邮箱验证，否则在发布时，会报403错误。

### 2. 创建包项目

执行 `npm init -y`

### 3. 修改 package.json

字段名称 | 含义
-|-|-
name | 报名
private | 是否发布到私有仓库
version | 包版本包
main | 指定使用者 import 包时的入口文件，优先级低
module | 指定使用者 import 包时的入口文件，优先级高

注意：发布到npm上时，name、version、main字段是必须要设置的。

### 4. 登录

执行 `npm login`，输入之前注册的账号、密码邮箱。

### 5. 发布

1. 使用 nrm 将 npm 的源切换到官方源
2. 发布：执行 `npm publish` 开始发布

## 更新

更新已有包后，在npm上的 `version` 中可以查看本包的所有版本

1. 更新 **package.json** 文件中的版本号
2. 执行 `npm publish` 开始发布

## 删除

删除指定版本：执行 `npm unpublish 包名@版本号`

删除整个包：执行 `npm unpublish 包名 --force`

## 其他

1. 增加 .gitignore 文件忽略提交无效文件
