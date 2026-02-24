---
title: Markdown 速通
description: 写博客之前，先把 Markdown 这事了了。
date: 2026-01-21T13:30:02+08:00
slug: markdown-tutorial
draft: false
---

写博客之前，先把 Markdown 这事了了。

## 什么是 Markdown

Markdown 是一种轻量级标记语言。你按约定的格式写纯文本，工具帮你渲染成带样式的页面。文件后缀 `.md`。

它足够简单，几乎所有技术文档、博客、README 都在用它。这个博客里的每篇文章也是 Markdown 写的——博客框架会把 `.md` 编译成 `.html`，所以下面的语法示例中偶尔会夹带 HTML。

语法不多，打几遍就记住了。

---

## 标题

`#` 的数量决定标题层级，`#` 和文字之间需要空格。

```md
# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题
```

对应 HTML：

```html
<h1>一级标题</h1>
<h2>二级标题</h2>
<!-- ...以此类推 -->
```

---

## 段落与换行

段落之间用空行分隔。如果需要在段落内换行，使用 `<br>` 标签。

```md
这是第一段。

这是第二段，跟上面隔了一个空行。

同一段落内的第一行，<br>这是第二行。
```

---

## 文本样式

```md
_斜体_ 或 _斜体_
**粗体**
~~删除线~~
<mark>高亮</mark>
```

渲染效果：_斜体_、**粗体**、~~删除线~~、<mark>高亮</mark>

> 注意：符号紧贴文字，中间不能有空格。`**粗体**` 可以，`** 粗体 **` 不行。

---

## 列表

符号和内容之间需要空格。

无序列表：

```md
- 第一项
- 第二项
- 第三项
```

- 第一项
- 第二项
- 第三项

有序列表：

```md
1. 首先
2. 然后
3. 最后
```

1. 首先
2. 然后
3. 最后

列表可以嵌套，缩进即可：

```md
1. 前端
   - React
   - Vue
   - Svelte
2. 后端
   1. Go
   2. Python
```

1. 前端
   - React
   - Vue
   - Svelte
2. 后端
   1. Go
   2. Python

---

## 引用

`>` 开头，可以嵌套。

```md
> 第一层引用
>
> > 嵌套引用
>
> - 引用里也能放列表
```

> 第一层引用
>
> > 嵌套引用
>
> - 引用里也能放列表

---

## 链接

```md
[显示文字](https://example.com)

<https://example.com>
```

[Astro 官网](https://astro.build)

<https://astro.build>

---

## 图片

```md
![替代文字](图片链接)
```

如果需要控制尺寸，用 HTML 的 `<img>` 标签：

```html
<img src="https://example.com/photo.jpg" alt="描述" width="300" />
```

---

## 代码

行内代码用单个反引号包裹：`const x = 1`

代码块用三个反引号，后面跟语言名称实现语法高亮：

````md
```js
function greet(name) {
  return `Hello, ${name}`
}
```
````

渲染效果：

```js
function greet(name) {
  return `Hello, ${name}`
}
```

```python
print("Hello, World!")
```

```json
{
  "name": "astro-doge",
  "version": "1.0.0"
}
```

---

## 分割线

三个短横线 `---` 或三个星号 `***`，单独占一行。

---

## 表格

用 `|` 分列，`-` 分割表头，`:` 控制对齐。

```md
| 语法   |   说明 |
| :----- | -----: |
| 左对齐 | 右对齐 |
| 默认左 | 靠右边 |
```

| 语法   |   说明 |
| :----- | -----: |
| 左对齐 | 右对齐 |
| 默认左 | 靠右边 |

---

## 任务列表

```md
- [x] 已完成
- [ ] 未完成
- [ ] 还没做
```

- [x] 已完成
- [ ] 未完成
- [ ] 还没做

---

## 脚注

```md
这里有个脚注[^1]。

[^1]: 脚注的内容写在这里。
```

这里有个脚注[^1]。

[^1]: 脚注的内容写在这里。

---

## 其他常用标签

这些严格来说是 HTML，但在 Markdown 中可以直接使用：

- 下标：`H<sub>2</sub>O` → H<sub>2</sub>O
- 上标：`x<sup>2</sup>` → x<sup>2</sup>
- 键盘按键：`<kbd>Ctrl</kbd> + <kbd>C</kbd>` → <kbd>Ctrl</kbd> + <kbd>C</kbd>

Markdown 中可以随时插入任意 HTML 标签，需要什么样式直接写就行：

```md
<span style="color:red">红色文字</span>
```

<span style="color:red">红色文字</span>

---

## 参考

- [Markdown Guide](https://www.markdownguide.org/) — 最全面的 Markdown 参考
- [GitHub Flavored Markdown](https://github.github.com/gfm/) — GitHub 扩展语法规范
- [CommonMark Spec](https://spec.commonmark.org/) — Markdown 标准规范
