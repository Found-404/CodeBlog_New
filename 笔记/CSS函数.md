# attr()

**获取元素内属性的值**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h1::after {
            content: "前";
        }
        /* 鼠标移入H1后伪元素content发生改变 */
        
        h1:hover::after {
            /* 从行内属性获取值 */
            content: attr(data-text);
        }
    </style>
</head>

<body>
    <h1 data-text="后">鼠标移入</h1>
</body>

</html>
```

# calc()

**css内置计算器**

# var()

首先：CSS 变量可以有全局或局部作用域。

全局变量可以在整个文档中进行访问/使用，而局部变量只能在声明它的选择器内部使用。

如需创建具有全局作用域的变量，请在 :root 选择器中声明它。 :root 选择器匹配文档的根元素。

如需创建具有局部作用域的变量，请在将要使用它的选择器中声明它。



[**🔗🔗原文档🔗🔗**](https://blog.csdn.net/Serena_tz/article/details/114838650)



```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
         :root {
            --blue: blue;
            --red: red;
        }
        
        div {
            width: 300px;
            height: 300px;
            background-color: var(--blue);
        }
        
        div:hover {
            background-color: var(--red);
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```