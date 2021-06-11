# 表达式和操作符

## 可选链操作符

允许读取对象的属性，且不用对对象做非空验证

```js
// obj 为 null 或 undefined 时，js会报错
obj.name
obj.say()

// obj 为 null 或 undefined 时，js不会报错，仅返回undefined
obj?.name
obj?.say()
```

## 空值合并运算符

当左侧的操作数为 `null` 或者 `undefined` 时，返回其右侧操作数，否则返回左侧操作数。

与逻辑或操作符（||）不同，逻辑或操作符会在左侧操作数为假值时返回右侧操作数。也就是说，如果使用 || 来为某些变量设置默认值，可能会遇到意料之外的行为。比如为假值（例如，'' 或 0）时。见下面的例子。

```js
const foo = null ?? 'default string';
console.log(foo);
// 返回 default string

const baz = 0 ?? 42;
console.log(baz);
// 返回 0
```