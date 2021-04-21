---
title: vue2 面试题
---

## v-for中为什么要加key

以倒序操作为例

```html
<li>a</li>
<li>b</li>
<li>c</li>
<li>d</li>

<li>d</li>
<li>c</li>
<li>b</li>
<li>a</li>
```

### key 是干啥的

为vnode添加唯一标识，如果没有key，那vnode的唯一标识是tag

在diff对比时,isSameNode方法中会用到

### 不加key key = undefined/index

以上更新，如果不加key，根据isSameNode方法，diff中会认为更新前后这是四个相同的node。

在patch时，会复用。不会创建新的节点。但是后续比较vnode中的文本时，拿第一个标签为例，发现更新前后，文本不同，所以会操作dom对其进行修改。

结果是操作四次dom

### 加唯一key

如果加唯一的key，diff对比时，在更新后 vue会认为第一个节点并不相同。

然后你是不是会认为vue选择重新创建元素？不不不不，那这样的话岂不是更消耗性能。

如果在四种优化对比策略（此处唯一标识也是 tag + key）后，如果还没有找到sameNode，会进行暴力比对，vue会在同级的vnode中寻找，是否有相同key和tag的元素（在updateChildren开始时，先循环oldChildren根据key作为唯一标识创建一个索引映射表），拿第一个标签为例，此时会找到具有相同key的元素，然后仍然进行patch

这个时候在patch的时候，仍然也会复用元素，比较文本时，发现相同，就不在操作dom，只是会移动这个dom。

结果是移动三次dom，想比操作四次dom，移动三次性能更好

### 总结

对于相同tag的元素，都会复用，但是加key会更

## 计算属性

### 计算属性特点

计算属性是一个函数，具有缓存功能，依赖改变才会重新计算。

可以在模板中使用

初始化第一次是不会取值的，只有当依赖改变之后才会取值

### 计算属性实现

内部也是通过new watcher实现的。 new watcher的四个参数（vm, exprOrFn, callback, options）

option

## watch

### watch的使用

key是表达式，value有可能是 字符串、数组、对象、函数

### watch的具体实现过程

initWatchMixin => createWatcher => $watch

用户使用watch有很多种写法，源码中首先将多种写法，都格式化成了一种：exprOrFn、 handler函数 、options选项（watch的选项）

最后调用vm.$watch方法：vm.$watch(key, handler, options)，Key是取值表达式，handler是用户定义的函数，option是用户定义的选项包括 sync deep等

所以watch的原理是基于$watch  $watch原理就是创建一个用户watcher

既然说到watcher，一定会涉及到两个过程  1. vm实例的属性收集watcher 2.实例属性改动，触发watcher

触发watcher没什么好说的。只要修改属性，就会触发该属性dep实例上的watcher队列执行。

关键在与如何收集到这个用户watcher

之前渲染函数传入的exprOrFn 是 render方法，执行时，会对组件属性进行取值。那么此时的用户watcher 的getter方法也应该是对属性取值，此处是将 getter 设置为一个  使用vm实例和属性表达式， + 循环取值的方法

后续同渲染watcher一样 ，先将当前watcher 放置到 target上，然后执行getter 触发 属性的getter方法 将这个用户watcher收集起来

vm.$watch中会new一个新的用户watcher， 在执行new watcher构造函数时，此处使用user选项确定是watch的用户watcher，也可以获取到用户watcher的其他选项如 sync deep 。

不同与渲染watcher的是。 此处的getter函数是 通过 返回 表达式和vm实例 通过循环最终取到的值的函数，即执行这个函数值，会对监听的属性进行取值。而渲染watcher 是调用_render方法生成虚拟dom =》patch 真实dom

后续依然是 先将当前watcher放在target上，后调用getter方法， 此时getter 会使用key（属性表达式），在vm中取值，取值时，在这个属性值的依赖dep实例中，将这个用户watcher 收集起来， 之后这属性值修改时，调用这个watcher队列函数执行，只不过先前是 调用渲染watcher中的 updateComponent方法， 此时是调用 用户传入的callback ，并将新旧值传入。

### 如果获取新旧值

将当前值（旧值）在new的时候 先保存在watcher实例属性this.value上，在实例属性修改后，调用watcher的run方法  再次取值 即 属性的dep通知watcher队列执行，可以获取到新值，并更新 watcher实例 value属性。

得到新值老值后再去调用户传入的回调callback

取值的时机都是，执行getter方法时，使用属性表达式在实例上循环取值操作时，

```js
class Watcher {
    constructor(vm, exprOrFn, callback, options) {
        // ...
        this.user = !! options.user
        if(typeof exprOrFn === 'function'){
            this.getter = exprOrFn;
        }else{
            this.getter = function (){ // 将表达式转换成函数
                let path = exprOrFn.split('.');
                let obj = vm;
                for(let i = 0; i < path.length;i++){
                    obj = obj[path[i]];
                }
                return obj;
            }
        }
        this.value = this.get(); // 将初始值记录到value属性上
    }
    get() {
        pushTarget(this); // 把用户定义的watcher存起来
        const value = this.getter.call(this.vm); // 执行函数 （依赖收集）
        popTarget(); // 移除watcher
        return value;
    }
    run(){
        let value = this.get();    // 获取新值
        let oldValue = this.value; // 获取老值
        this.value = value;
        if(this.user){ // 如果是用户watcher 则调用用户传入的callback
            this.callback.call(this.vm,value,oldValue)
        }
    }
}
```

## watch 和 computed 区别

1. watch 内部默认会对变量取值
   computed 是不会的 只有取值之后，才会调用 vm.allName 修改依赖属性之后才会取值
2. 计算属性 依赖的值不变 就不会调用 有缓存
3. 计算属性还可以放在模板中  watch 不可以
4. 213

相同点：

1. 内部都是使用watcher实现的
