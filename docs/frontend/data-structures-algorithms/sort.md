---
title: 常见排序算法
---

## 冒泡排序

```js
const data = [12, 8, 24, 16, 1]

function bubbleSort(list) {
  // 总共比较多少轮 不用和自己比较
  for (let i = 0; i < list.length - 1; i++) {
    // 每轮比较多少次  不用和自己比较 不用和已排好序的项比较
    for (let j = 0; j < list.length - 1 - i; j++) {
      if (list[j] > list[j + 1]) {
        [list[j], list[j + 1]] = [list[j + 1], list[j]];
      }
    }
  }
  return list
};
console.log(bubbleSort(data))
```

## 插入排序

```js
/*
 * 插入排序
 * 思路同  打扑克抓牌
 * 插 splice(index, 0, 1) 既然将目标项插入在index位置  那index前面的数据肯定不能动  肯定是index后面的数据向后顺延
 */

const data = [12, 8, 24, 16, 1];

function insert(list) {
  // 准备一个新的数组，用来存储抓到手里的牌，开始先抓一张牌进来
  let handle = [];
  handle.push(list[0]);

  // 从第二项开始一次开始抓牌，一直到把台面上的牌抓光
  for (let i = 1; i < list.length; i++) {
    // A 是新抓的牌
    let A = list[i];

    // 和 handle 手里的牌依次比较（从后向前比）
    for (let j = handle.length - 1; j >= 0; j--) {
      // 每一次要比较的手里的牌
      let B = handle[j];

      // 如果当前新牌A比要比较的牌B大了，把A放在B的后面
      if (A > B) {
        handle.splice(j + 1, 0, A);
        break;
      }

      // 已经比到第一项，我们把新牌放到手中最前面即可
      if (j === 0) {
        handle.unshift(A)
      }
    }
  }

  return handle
}

console.log(insert(data));
```

## 快速排序

```js
/*
 * 快速排序
 * 思路同  二叉树 二分查找 + 分治
 * 使用当前数据  构造排序好的二叉树数组  在将期回溯组合
 */

const data = [12, 8, 24, 16, 1];

function quickSort(list) {
  // 4. 结束递归（当list中小于等于1项时，则不用处理）
  if (list.length <= 1) {
    return list;
  }

  // 1. 找到数组的中间项，在原有的数组中把它删除
  let middleIndex = Math.floor(list.length / 2);
  let middleValue = list.splice(middleIndex, 1)[0];

  // 2. 准备左右两个数组，循环剩下数组中的每一项，比当前项小的放在左边数组中，反之放到右边数组中
  let leftArr = [],
    rightArr = [];
  for (let i = 0; i < list.length; i++) {
    let item = list[i];
    item < middleValue ? leftArr.push(item) : rightArr.push(item);
  }

  // 递归方式让左右两边的数组持续这样处理，一直到左右两边都排好序为止（最后让左边 + 中间 + 右边拼接成为最后的结果）
  return quickSort(leftArr).concat(middleValue, quickSort(rightArr));
}

console.log(quickSort(data));
```

## 归并排序

```js
function mergeSort(list, start, end) {
  if (end - start < 2) {
    return;
  }

  const middle = Math.ceil((start + end) / 2);
  mergeSort(list, start, middle);
  mergeSort(list, middle, end);

  // 最先执行到这里的是拆分成长度是1的两个数组
  merge(list, start, middle, end);
}

// 先想一下如何合并两个已排序好的数组 为 一个有序数组
function merge(list, start, middle, end) {
  const leftArr = list.slice(start, middle);
  const rightArr = list.slice(middle, end);

  // 追加哨兵
  leftArr.push(Infinity);
  rightArr.push(Infinity);

  // 重写list
  // 写循环不变式，最重要的是写出来
  // k：是下一个写入的位置
  // i：是left中回写的位置
  // j：是right中回写的位置
  let i = 0;
  let j = 0;
  for (let k = start; k < end; k++) {
    list[k] = leftArr[i] < rightArr[j] ? leftArr[i++] : rightArr[j++];
  }
}

let data = [1, 3, 7, 2, 4, 5, 6];
mergeSort(data, 0, data.length);
console.log(data)
```
