---
title: 常见查找算法
---

## 二分查找

前提：**已排序**数组

背景：从 `[0, 1, 16, 24, 35, 47, 59, 62, 73, 88, 99]` 中找到73的索引位置

```js
const list = [0, 1, 16, 24, 35, 47, 59, 62, 73, 88, 99]

function midSearch(list, value) {
  const { length } = list;

  let min = 0;
  let max = length - 1;
  let mid

  while (min <= max) {
    mid = Math.floor((max + min) / 2);
    if (list[mid] === value) {
      return mid;
    } else if (list[mid] > value) {
      max = mid - 1;
    } else if (list[mid] < value) {
      min = mid + 1;
    }
  }

  return -1
}

console.log(midSearch(list, 73)) // 8
```
