---
title: vue2实战总结
---

## provide 与 inject

### 是什么？

是一种依赖注入的概念，由父级或祖先级向子级注入数据，子级接收，实现跨越无数层级组件间通讯。

### 为什么存在？

为了解决跨层级组件通讯困难问题诞生。

### 注意

注入的数据并不是可响应的，这是刻意为之的，并且不能修改，会报错：避免直接改变注入的值（基本数据类型和引用数据类型的地址），因为只要提供的组件重新呈现，更改就会被覆盖。

但是！ `如果你传入了一个可监听的对象，那么其对象的属性还是可响应的。`

也就是说引用数据类型的属性是可以改变的，并且可以出发响应式变化，利用这一点，我们可以做很多事情。如利用入口模块向下注入核心数据对象，各子模块接收后粒度化拆分功能修改核心数据对象。

`prop` 同理，`vue` 虽然宣扬单向数据流，但是这种类似于 `Angular` 数据双向绑定概念的操作，拆分核心对象数据到各个粒度化子组件修改，会让你的代码撸到爽到飞起。

### 在哪里可以使用？

父级组件和子级组件产生了一种隐形的耦合关系，父级不知道最终将数据传给谁，子级不知道数据是从哪里获取到的，因此只建议在封闭度高的高阶组件和组件库中使用，不建议在应用代码中使用。

由于传入的基本类型数据不可响应，更推荐注入对象的形式。常用于初始化项目（组件）使用的配置，比如年部学科，这些东西一般不会发生变化，子组件又不定时需要。最重要的是，不依赖于vuex，因此成为开发独立插件组件的首选。

### 示例

```javascript
// 父级、祖先级组件
provide() {
    return {
    List: this.List,
    type: this.type
    }
}
// 子组件
inject: {
    // 类型
    type: {
    default: () => {
        return ''
    }
    },
    // 列表
    list: {
        default: () => {
        return []
        }
    }
}
```

## 动态组件

### 是什么？

在某个位置，动态切换，加载不同的组件。

### 为什么存在？

避免出现大量的 `v-if` , 更优雅处理业务逻辑。

### 注意

使用动态组件时，通常会重新创建不同的组件，但是当切换的是同一个组件的时候，如单选题组件和多选题组件，由于公用的是一个组件，vue内部会自动处理，不会再重新创建这个组件，不重新创建组件内的状态就无法清空，引发问题，此时需要加一个key作为唯一标识，保证组件重新创建。

```js
const COMPONENT_CONFIG = {
    [QS_LOGIC_ID_MAP.SINGLE_CHOICE]: 'Choice',
    [QS_LOGIC_ID_MAP.MULTIPLE_CHOICE]: 'Choice',
    [QS_LOGIC_ID_MAP.FILL_BLANKS]: 'FillBlank',
    [QS_LOGIC_ID_MAP.RESOLVE_ANSWER]: 'ResolveQs',
    [QS_LOGIC_ID_MAP.COMPLEX]: 'Complex'
}
computed: {
    // 当前逻辑题型
    currentLogicId() {
    return this.mainData.logicQuesTypeId
    },
    // 当前组件
    currentComponent() {
    return COMPONENT_CONFIG[this.currentLogicId]
    }
},
<component :is="currentComponent" :main-data="mainData" :key="currentLogicId">
</component>
```

### 在哪里可以使用？

如根据不同的题型id，切换不同的录题组件。

### 示例

```javascript
// currentComponent 是已注册组件的名字 或 一个组件的选项对象
<component :is="currentComponent"></component>
```

## watch

### immediate

#### 是什么？

让所监听数据初次赋值时就触发 `handler` ，而非纯异步监听：只有改变时才出发 `handler`

#### 为什么存在？

在一些特定的应用场景中，我们试图监听 `prop` ，而不仅仅是本组件中的状态，但父组件对子组件 `prop` 的初次赋值我们是监听不到的，所以 `immediate` 诞生了。

#### 在哪里可以使用？

监听 `prop`

#### 示例

```js
props: {
    mainData: {
    type: Object
    }
},
watch: {
    mainData: {
    deep: true,
        // 保证父组件初始化是对mainData（null）赋值后，子组件立即响应
        immediate: true,
        handler: function() {
            this.$emit('update', this.mainData)
        }
    }
}
```

## 关于控制组件状态

### 背景

我们经常说**粒度化**，指将**复杂的功能拆解到不同子模块处理。**

经过使用vue了一段时间后，我们发现，由于父组件prop传进来的**值/引用地址**在**无法在子组件中直接改变**，于是我们会经常使用prop去初始化子组件中的状态/data，然后去**随心所欲**操作这份数据。

有**两种方式**，可以实现以上目标，一是直接在data中使用prop赋予默认值，二是在created钩子中，有一个初始化状态方法 `initStatus(slefData)` 。

我**更推荐后者**，因为也许有一天我们会遇到**父组件需要重置子组件内部状态**的场景，比如**换一题**这样的功能。

**换一题功能的两种解决方案**

1. 深度监听试题数据，试题数据发生变化后，重新调用子组件内的 `iniSelfData` 方法，自己刷新自己。但实际上这是消耗性能，并且不合理的操作。
2. 考虑到**性能****，我们既不希望一个庞大的组件**重新创建**，又不想要**上一题留下的冗余的状态**。那么此时我们就可以拿到子组件实例，在获取到下一题数据后，用新的核心数据，去重新调用子组件内部 `initSatus(slefData)` 方法，达到**优雅更新子组件状态**的目的。这种操作子组件对外提供一个**接口** 即 `initStatus` 方法，**将重置组件状态的控制权交给父组件**，这样的设计更加**合情合理**。

### 注意

我知道很多时候我们需要在 `created` 钩子函数中异步调接口获取数据初始化。

但是**千万不要**写出 `async created(){}` 这样的钩子函数，因为它会将整**个创建函数变成异步函数**。

随之带来的是内部的 `initStatus(slefData)` 函数也变成了异步，但实际上我们需要的是同步。

```javascript
// 不好的写法
async created() {
    // 初始化组件内部，一些由用户操作而改变的状态
    initStatus()
// 初始化数据
    const data = await requestFn()
    handlerData(data)
}

// 好的写法
async getData() {
    return await requestFn()
}
created() {
    // 初始化组件内部，一些由用户操作而改变的状态
    initStatus()
// 初始化数据
    const data = await getData()
    handlerData(data)
}
```

## vue指令使用

使用vue两年了，指令用的非常少。

反思了一下原因，使用指令拼的是原生js功底，mvvm流行让开发者手动操作dom的次数越来也少。

这次特地啃一下这块的知识点，同时警示自己红宝书该翻一翻了。

### 什么是指令

> 指令是带有 v- 前缀的特殊属性，指令属性的值预期是单个JavaScript表达式。</br>

### 指令产生的原因

> 指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于dom。

指令的使命是用来操作dom，开发vue应用时，每当有dom操作，应该首先想到使用指令。

封装指令也是为了在遇到相同dom操作时，用简单的方式复用。

### 有哪些应用场景

- 场景1：click-outside场景，当点击非指定元素外的其他元素时，指定关闭/收起下拉框，遮罩的操作

```html
<div v-click-outside='closeFn'>
</div>
```

```js
export default {
  name: 'ClickOutside',
    bind(el, binding) {
      function documentHandler(e) {
        if (el.contains(e.target)) {
          return false
        }
        if (binding.expression) {
          binding.value(e)
        }
      }
      el.__vueClickOutside__ = documentHandler
      document.addEventListener('click', documentHandler)
    },
    unbind(el) {
      document.removeEventListener('click', el.__vueClickOutside__)
      delete el.__vueClickOutside__
    }
  }
```

- 场景2：如在钉钉端应用中，点击图片元素，实现全屏查看。

  我们可以给放置图片的容器元素绑定指令 `<div class="box" v-ImgPreviewDirective>`，由于点击事件会冒泡到父级元素，所以在指令具体实现中，监听父级元素（指定绑定元素）的点击事件，判断 `target` 是否是图片元素，如果是则触发执行器函数。

  执行器函数中使用适配器模式，判断当前执行的环境是钉钉还是pc端，执行不同的处理逻辑

  这样一来，就将全屏显示图片操作的所有细节逻辑都封装在了一个指令中，轻松地实现复用。

### 个人理解

#### 参数

>除了 el 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 dataset 来进行。

既然为了操作dom，在指令中一定可以获取到dom元素、参数（常指dom属性）、修饰符、绑定值（用户自定义参数）

```js
el: 即指定绑定的dom元素

binding: {
  name: 指令名称
  value: 传入的用户自定义参数
  arg: 如v-bind:href 中的href 指相关联的dom属性
  modifiers: 修饰符相关
}

vNode：指定所在的vue组件的虚拟节点，通过vNode的context属性可以获取到指令所在的vue实例
```

一般操作指令时，希望传入更多的用户自定义参数

```html
<div v-demo="{ color: 'white', text: 'hello!' }"></div>
```

如上，即可通过 `binding.value.color` 获取到较多的参数

#### 动态参数

很少用到，如 `v-style:[attr]="200"` 对于传入的指令的参数（dom属性）不固定，可能是高，也可能是宽的时候

#### 钩子函数

bind: 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置

inserted： 被绑定元素插入父节点时调用（仅保证父节点存在，但不一定插入文当中），至此可以获取到el对象

update: `所在组件的vNode更新时调用, 但是可能发生在其子 VNode 更新之前。` 注意！即当视图改变，钩子就会被调用，这个钩子一般情况下会被多次调用

componentUpdated: 指令所在组件的 VNode 及其子 VNode 全部更新后调用。

unbind: 只调用一次，指令与元素解绑时调用。
