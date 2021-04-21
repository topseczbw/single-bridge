---
title: 深拷贝 or 浅拷贝
---

## 浅拷贝

仅拷贝对象的第一层属性，如果 value 是引用类型对象，修改拷贝后的 value 会影响原对象属性。

- ...对象的展开运算符
- 数组的slice方法
- Object.create()

## 深拷贝

生成一个与原对象完全无关的新对象。

- JSON.parse(JSON.stringify(obj))

### JSON.parse(JSON.stringify(obj)) 有哪些不足

- 无法拷贝函数
- 无法拷贝对正则、日期对象
- 无法拷贝undefined
- 对于存在循环引用的对象，报错

### 如何实现一个深拷贝

1. 传入参数不合法时，如null
2. 如果是正则、日期对象如何处理
3. 如果是普通数值类型如何处理
4. 当传入参数是数组、对象、函数时，如何优雅地处理，
5. 存在循环引用时，如何处理

```js
const info = {
  name: "zbw",
  address: {
    province: "河北",
    city: "定州"
  },
  birthday: new Date(),
  sex: undefined,
  say() {
    console.log("hello");
  }
};
info.o = info;

// const a = JSON.parse(JSON.stringify(info));
// console.log(a);

function cloneDeep(obj, hash = new WeakMap()) {
  // 1
  if (obj == null) return obj;

  // 2
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);

  // 3 由于操作函数的行为一般只是执行，不涉及到修改。故返回即可，再此只对对象和数组做处理
  if (typeof obj !== "object") return obj;

  // 5
  if (hash.get(obj)) return hash.get(obj);

  // 4
  const result = new obj.constructor();

  // 5 克隆后，使用弱引用WeakMap以对象作为key，将值存起来
  // 下面执行过过程中遇到存在属性值是父对象，产生循环引用的问题时
  // 如果在map映射中找到了，则直接返回即可
  hash.set(obj, result);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = cloneDeep(obj[key], hash);
    }
  }

  return result;
}

const result = cloneDeep(info);
result.address.province = "北京";
result.birthday = new Date(12312331312312);

console.log(result);
console.log(info);
```
