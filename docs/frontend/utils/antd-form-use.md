---
title: 使用 Antd4 Form
sidebarDepth: 3
---

## 为什么要写这篇文章

对于一个经常做 **增删改查** 需求的 **表单开发工程师** 来说，在工作中总结出自己的一套开发套路无疑可以直接提升效率和质量。

而我！也是多年耕耘于表单、表格研发大队中的一员，近期换工作技术栈从 vue 换到 react，UI框架是 Antd4，开发复杂的业务的同时，总结了一些开发技巧和套路，跟大家分享一下。

## 常见表单操作

让我们先捋一捋，日常表单开发时有哪些常见的操作。

- 构建json

- 处理数据

- 字段校验

- 处理联动

- 动态表单

## antd form 实践

下面讲如何使用Antd4 **高效（效率高、bug少）** 完成上述操作。

**前置须知**

- Antd Form 维护的表单实例对象统称 `formInstance`

- Antd Form 本身内部做了一些优化，在用户交互触发组件 `update` 时，仅重新渲染用户交互的部分，其他无法控件不更新，最大化提升性能和用户体验。

- Antd Form 通过维护 `formInstance` 的形式，实现 **数据存储**、**页面表单项关联**

- 用户主动与表单控件交互，会实时更新 `formInstance` 中维护的数据

- `shouldUpdate` 使用，form组件会根据 `shouldUpdate` 的参数是否为 `true` 选择是否更新子元素中的 Form.Item。如果不传递参数，则当表单值发生变化是，子元素始终更新。

### 构建json

不管是用哪些ui框架或前端框架（vue，react），前端最终将约定好的格式通过http请求传给后端，生成数据。

如何构建 **一份** json 我认为是表单开发的核心，对于 **json的增删改查** ，很多同学经常会犯一些误区：

#### 构建模板

开发时参照如下模板修改即可。

```json
{
  "name": "zbw",
  "job": {
    "one": "100tal",
    "two": "bytedance"
  },
  "friends": [
    {
      "name": "ls"
    },
    {
      "name": "gyt"
    },
    {
      "name": "cmr"
    }
  ],
  "other": "19"
}
```

构建上述 json，需要的 jsx 代码如下：

```jsx
import { Button, Form, Input } from 'antd';
const [form] = useForm();

<Form form={form} onFinish={onFinish} initialValue={{
  "name": "zbw",
  "job": {
    "one": "100tal",
    "two": "bytedance"
  },
  "friends": [
    {
      "name": "ls"
    },
    {
      "name": "gyt"
    },
    {
      "name": "cmr"
    }
  ],
  "other": "19"
}}>
  <Form.Item name="name" label="name" rules={[{ required: true }]}>
    <Input />
  </Form.Item>

  <Form.Item name={['job', 'one']} label="job" rules={[{ required: true }]}>
    <Input />
  </Form.Item>

  <Form.Item name={['job', 'two']} label="job" rules={[{ required: true }]}>
    <Input />
  </Form.Item>

  <Form.List name="friends">
    {(fields, { add, remove }) => (
      <>
        {fields.map(field => (
          <div key={field.key}>
            <Form.Item
              {...field}
              label="name"
              name={[field.name, 'name']}
              fieldKey={[field.fieldKey, 'name']}
              rules={[{ required: true, message: 'Missing name' }]}
              >
              <Input />
            </Form.Item>

            <Button onClick={() => remove(field.name)} />
          </div>
        ))}

        <Form.Item>
          <Button type="dashed" onClick={() => add()} block>
            Add sights
          </Button>
        </Form.Item>
        </>
    )}
  </Form.List>

  <Form.Item noStyle shouldUpdate>
  {({ getFieldError }) => {
    return (
        <Form.Item
        name='other'
        rules={[
            {
            validator(_rule, value) {
                if (disabled) {
                return Promise.resolve();
                }

                if (!/^([1-9]\d*(\.\d\d?)?|0\.\d\d?)$/gm.test(value) || !value.trim()) {
                return Promise.reject(new Error('请输入大于0的数字，精确到小数点后两位'));
                }

                return Promise.resolve();
                },
            },
        ]}>
        <Input
            placeholder="请输入"
            disabled={false}
        />
        </Form.Item>
    );
  }}
  </Form.Item>

  <Form.Item shouldUpdate>
    {() => {
      return <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>;
    }}
  </Form.Item>
</Form>
```

#### 思考：用什么状态维护这份json？

**Bad**

维护多个状态：组件state(通过 `onValuesChange` API 实现用户交互和组件状态的绑定)、dom元素属性、`formInstance`。提交时对多个状态进行拼装组合，传递给后端。

**Good**

仅从 `formInstance` 中来

#### 除了用户主动交互外，在代码中如何修改json，比如表单值联动场景？

**Bad**

1. 通过 `onValuesChange` api 监听 `formInstance` 中数据改动，进行联动处理

2. 调用底层api

    ```js
    // 获取 rcForm 原始更新值方法
    const { dispatch } = formInstance.getInternalHooks('RC_FORM_INTERNAL_HOOKS');
    dispatch({
        type: 'updateValue',
        nane,
        value,
    });
    ```

**Good**

调用官方api `formIntacne.getFieldValue`, `formIntacne.getFieldsValue`

### 处理数据

主要包括：

- 新建场景，提交数据前，将ui框架产出数据的格式 => 后端期待的格式

- 修改、复制场景，初始化时，将后端期待的格式 => ui框架渲染需要的格式,填充回显页面

这部分主要是将 `formInstacne.getFieldsValue()` 方法返回的数据处理成约定的格式。根据实际业务场景处理即可。

### 字段校验

- 用户录入时实时校验表单字段
  
- 用户点击提交前校验字段

校验场景，填写对应字段的 `rules` 即可，涉及到联动其他字段的校验，合理利用 `shouldUpdate`，可以拿到 `formIntacne`，即可拿到表单中其他字段，进行检验、禁用。

```js
<Form.Item noStyle shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}>
{({ getFieldValue }) =>
    getFieldValue('gender') === 'other' ? (
    <Form.Item
        name="customizeGender"
        label="Customize Gender"
        rules={[{ required: true }]}
    >
        <Input />
    </Form.Item>
    ) : null
}
</Form.Item>
```

### 处理联动

- 联动检验

- 联动设置填充、禁用

处理方式同上即可，使用 `shouldUpdate`、`formInstance.setFieldsValue`、`formInstance.getFieldValue`等是实例方法，拿到需要联动字段的数据或设置数据

### 动态表单

- 动态增删表单项

### 技巧 & 问题

#### 使用打印面板，实时预览表单数据，提升开发效率

```js
<Form.Item shouldUpdate>
  {() => {
    return <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>;
  }}
</Form.Item>
```

#### 使用 antd4 form 在输入input框时出现卡顿问题

在开发复杂表单过程中，经常会遇到动态表单场景，动态增删表单项的同时又掺杂了很多联动需求（选择xxxx时隐藏xxxx）。

学会了上面的开发联动和构建json功能实现，聪明的我们似乎明白了不管多复杂的联动和动态表单，只要放在一个form实例中，都可以很方便的通过form.setFiledsValue、shouldUpdate、Form.List等api实现。

但是当表单控件即formItem的数量达到一定的量级时，如1000个Form.Item被放在了一个form实例下，就会出现明显的交互卡顿。为什么会出现这样的情况呢？简单想一下就知道了，antd 中表单控件的功能十分强大，强大的背后必然使用了复杂的事件通知机制，如Form.Item的name、索引与form.getFiledsValues的关联关系。

为了解决如上卡顿现象，我也曾寻找了很多答案，最后的方案是：将动态表单部分粒度变小，通过将一个大form拆分多个小form。让一个form关联的dom数量变小，这样在交互时，form就可以轻易的改变关联的json。

当然拆分form也会带来繁琐的form实例间取值，赋值的操作，这是没法避免的，毕竟寄人篱下，既然使用了antd 的form，就要遵守人家的规则。

ps：一般form出现卡顿时，也侧面反应交互太多了，可以从产品层面优化，与pm沟通，限制一个form下的表单项个数，毕竟让一个用户填写10分钟表单也不太合适（草稿箱先别想，先实现基本功能）

#### 另一种构建数组类型数据的方式

有时我们并不希望使用Form.List，数组项有可能是我们自己封装的类似 FormCard 类型的组件

提交时再去格式化
有时我们碍于功能实现，我们无法直接构建出一个于后端接口100%匹配的json，因为json数据中可能存在后端不需要，但是前段交互需要用到的数据，那也无所谓，提交前再去格式化一下就好了
开发修改页面
有了之前的form模型，在修改页面我们只要调接口获取数据，然后格式化为表单需要的格式，最后form.setFieldValues，页面就会自动回显填入。是不是有点Vue双向绑定的感觉？
尽可能减少与form相关的状态
实现某一个功能时，能使用一个form实例解决的，比如联动，不要在组件中新建其他state
少state开发
注意避坑
Form.Item下仅可放置一个表单控件
很多时候为了实现业务功能，可能会写出如下代码：

这样会导致，form实例无法感应到name字段的值
将数据存与父组件、redux中并非好的实践

form.getFieldsValue方法获取的对象始终如一
不会生成一个有新的引用地址的对象