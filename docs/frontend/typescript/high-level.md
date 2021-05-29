---
title: 高级用法
---

## Pick

从一个对象类型中取部分属性，返回一个新的对象类型

```ts
interface Student {
    name: string;
    age: number;
}
type PickStudent1 = Pick<Student, "name"> 

// 等价于

interface PickStudent1 {
    name: string;
}

// 源码
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
}
```

## Omit

从一个对象类型中剔除部分属性，返回一个新的对象类型

```ts
type User = {

id: string;

name: string;

email: string;

};

type UserWithoutEmail = Omit<User, "email">;

// 等价于:

type UserWithoutEmail = {

id: string;

name: string;

};
```

## 参考资料

- [TypeScript 中的 Omit 帮助类型](https://segmentfault.com/a/1190000022429482)
- [TypeScript的一些小用法](https://zhuanlan.zhihu.com/p/52662645)