---
title: 数组
sidebarDepth: 2
---

## 常用方法

### 是否返回新数组

返回新数组，注意：即使返回新数组也只是浅拷贝，当引用数据类型嵌套时，内层数据仍然是引用地址的拷贝。

- slice
- concat
- [...arr] 扩展运算符
- reduce
- map
- filter

改变原数组

- splice
- reverse
- sort
- push
- pop

### slice

- 截断数组，返回一个新的数组。
- 按照索引，左闭右开截取。

```js
const arr = [1,2,3,4,5]
arr.slice(2,5) // 从索引2开始截取到索引5 取左弃右 返回 [3,4,5]
```