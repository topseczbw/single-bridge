---
title: CSS 规范
---

学习常见的 css 编写规范。

## BEM

BEM规范，为的是结束混乱的命名方式，达到一个语义化的CSS命名方式。 BEM是三个单词的缩范写：Block（块）代表更高级别的抽象或组件，Element（元素） Block的后代，以及 Modifier（修饰） 不同状态的修饰符。

```html
<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input
    class="form__submit form__submit--disabled"
    type="submit" />
</form>
```

```css
.form { }
.form--theme-xmas { }
.form--simple { }
.form__input { }
.form__submit { }
.form__submit--disabled { }
```

## css书写顺序

布局（display) > 盒模型（尺寸）> 字体 > 背景 > 其他