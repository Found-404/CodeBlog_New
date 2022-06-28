# 获取元素

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654481169296-a0d9f0e5-2ada-4ab7-ad58-2d34e893cd58.png)



<!-- more -->

DOM最根本的对象**document** (实际上是**window . document**)， 表示文档对象

每个载入浏览器的HTML文档都会称为document对象，把文档中每个标签都解析为对象

“document对象可以从脚本中对HTML页面中所有的元素进行访问”



## 1.getElementById( ) / getElementsByTagName( )

### getElementById( )   *通过* ***id*** *获取节点*

```html
<body>
    <div id="time">2019-9-9</div>
    <script>
        // 1.因为文档页面从上往下加载，所以script写到标签下面
        // 2.get 获得 element 元素 by 通过 驼峰命名法
        // 3.参数 id大小写敏感的字符串
        // 4.返回的是一个元素对象
        var time = document.getElementById('time');
        console.log(time);
        console.log(typeof time);//Object

        // 5.console.dir 打印返回的元素对象 更好的查看里面的属性和方法
        console.dir(time);
    </script>
</body>
```



### getElementsByTagName( )

*获取过来元素对象的集合 以****伪数组****形式储存*

```html
<body>
    <ul>
        <li>演示文档1</li>
        <li>演示文档2</li>
        <li>演示文档3</li>
        <li>演示文档4</li>
        <li>演示文档5</li>
    </ul>
    <ol id="ol">
        <li>01</li>
        <li>02</li>
        <li>03</li>
        <li>04</li>
    </ol>
    <script>
        //1.返回的是 获取过来元素对象的集合 以伪数组形式储存
        var lis = document.getElementsByTagName('li');
        console.log(lis);
        console.log(lis[0]);
        //2.依次打印里面的对象
        for (var i = 0; i < lis.length; i++) {
            console.log(lis[i]);
        }
        //3.如果页面中只有一个li 返回的还是伪数组形式
        //4.如果页面没有这个元素 返回的是空的伪数组

        //5.element.getElementsByTagName('标签名'); 父元素必须是指定的单个元素
        // var ol = document.getElementsByTagName('ol');//[ol]
        // console.log(ol[0].getElementsByTagName('li'));

        var ol = document.getElementById('ol');
        console.log(ol.getElementsByTagName('li'));
    </script>
</body>
```

### getElementByName();

接受一个参数**(属性name的值)** ,这个方法会返回带有给定**name**特性的所有元素.

## 2.H5新增获取节点方法

```html
<body>
    <div class="box">盒子1</div>
    <div class="box">盒子2</div>
    <div id="nav">
        <ul>
            <li>首页</li>
            <li>产品</li>
        </ul>
    </div>
    <script>
        //1.getElementsByClassName 根据类名获取某些元素集合
        var boxs = document.getElementsByClassName('box');
        console.log(boxs);
        //2.querySelector返回指定选择器的第一个元素对象 切记 选择器要加符号 .box #nav
        var firstBox = document.querySelector('.box');
        console.log(firstBox);
        var nav = document.querySelector('#nav');
        console.log(nav);
        var li = document.querySelector('li');
        console.log(li);
        //3.querySelectorAll()指定选择器所有元素对象集合
        var allBox = document.querySelectorAll('.box');
        console.log(allBox);
        var lis = document.querySelectorAll('li');
        console.log(lis);
    </script>
</body>
```

1. **getElementsByClassName('box');** **根据类名获取某些元素集合**
2. **querySelector('.box');** **返回指定选择器的第一个元素对象 (****切记 选择器要加符号 .box #nav****)**
3. **querySelectorAll('.box');** **指定选择器所有元素对象集合**

## 3.body,html获取

```html
<body>
    <script>
        //1.获取 body元素
        var bodyEle = document.body;
        console.log(bodyEle);
        //2.获取 html元素
        var htmlEle = document.documentElement;
        console.log(htmlEle);
    </script>
</body>
```

## 4.获取伪元素

### (1)getComputedStyle()

虽然js中没有明确的获取伪元素的方法，但是却可以通过**getComputedStyle()**获取伪元素的属性

**语法：	getComputedStyle('元素','伪类')**	

**getComputedStyle('元素',null)** ***获取元素***

### (2)getPropertyValue()

获取该伪元素的属性值

**语法：getPropertyValue('css属性')**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div::after {
            content: "伪元素";
            font-size: 20px;
        }
    </style>
</head>

<body>
    <div>

    </div>
    <script>
        var divAfter = document.querySelector('div');
        let sty = window.getComputedStyle(divAfter, ":after").content;
        console.log(sty); // "伪元素"

        let sty1 = window.getComputedStyle(divAfter, ":after").getPropertyValue('font-size');
        console.log(sty1); // 20px
        
    </script>
</body>

</html>
```



# 事件三要素

1. **事件源**     *事件被触发的对象*
2. **事件类型**   *如何触发什么事件*
3. **事件处理程序**   *触发什么事件*

```html
<body>
    <button id="btn">演示按钮</button>
    <script>
        //点击按钮 弹出对话框
        //1.事件有三部分：事件源 事件类型 事件处理程序 
        //(1) 事件源 事件被触发的对象   谁  按钮
        var btn = document.getElementById('btn');
        //(2) 事件类型 如何触发 什么事件 比如鼠标点击(onclick) 经过 键盘按下
        //(3) 事件处理程序 如何触发 什么事件
        btn.onclick = function() {
            alert('弹出框');
        }
    </script>
</body>
```

# innerXXX修改元素内容

## innerText和innerHTML的区别

1. **innerText** 不识别html标签 非标准
2. **innerHTML** 识别标签  W3C标准
3. outerHTML 获取节点本身和其里面的内容
4. textContent  仅仅获取文本   （类似innerText）

```html
<body>
    <div></div>
    <p>
        我是文字
        <span>123</span>
    </p>
    <script>
        //innerText和innerHTML的区别
        // 1. innerText 不识别html标签 非标准
        var div = document.querySelector('div');
        // div.innerText = '今天是:2022';
        // 2. innerHTML 识别标签  W3C标准
        div.innerHTML = '<b>今天是:</b>2022';
        // 两个属性可读写 可以获取元素里面的内容 
        var p = document.querySelector('p');
        console.log(p.innerText);
        console.log(p.innerHTML); //会保留换行 空格
    </script>
</body>
```

# 修改元素属性

## 1.修改节点属性

```html
<body>
    <button id="p1">p1</button>
    <button id="p2">p2</button>
    <img src="../../../img/图片/cs (1).webp" alt="" title="p1">

    <script>
        //修改 元素属性 src
        //1.获取元素
        var p1 = document.getElementById('p1');
        var p2 = document.getElementById('p2');
        var img = document.querySelector('img');
        //2.注册事件
        p2.onclick = function() {
            img.src = '../../../img/图片/cs (2).webp'
            img.title = 'p2';
        };
        p1.onclick = function() {
            img.src = '../../../img/图片/cs (1).webp'
            img.title = 'p1';
        };
    </script>
</body>
```

获取到元素节点存放到一个**变量**后可以直接**打点调用**这个节点的**属性**更改

## 2.修改表单属性

```html
<body>
    <button>按钮</button>
    <input type="text" value="输入内容">
    <script>
        // 1.获取元素
        var btn = document.querySelector('button');
        var input = document.querySelector('input');
        // 2.注册事件
        btn.onclick = function() {
            // input.innerHTML = '点击了'; 普通盒子 比如div才可用
            // 表单里面的值 文字通过 val 来修改
            input.value = '点击了';
            //如果想要某个表单被禁用 不能被点击 disable 想要按钮button被禁用
            // btn.disabled = true;
            this.disabled = true;
            // this指向的是事件函数的调用者 就是btn自己
        }
    </script>
</body>
```

**如果想要某个表单被禁用 不能被点击 disable 想要按钮button被禁用**

**btn.disabled = true****;**

## 3.修改样式属性

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
        }
    </style>
</head>

<body>
    <div></div>
    <script>
        //1.获取元素
        var div = document.querySelector('div');
        //2.注册事件 处理程序
        div.onclick = function() {
            //里面的属性采取驼峰命名法
            //触发事件 将样式改为行内样式
            this.style.backgroundColor = 'black';
            this.style.width = '250px';
        }
    </script>
</body>

</html>
```

**触发事件 将样式改为****行内样式**

## 4.className修改样式属性

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
        }
        
        .change {
            background-color: black;
            color: #fff;
            font-size: 25px;
        }
    </style>
</head>

<body>
    <div class="first">文本内容</div>
    <script>
        //1.获取元素
        var div = document.querySelector('div');
        //2.注册事件 处理程序
        div.onclick = function() {
            // this.style.backgroundColor = 'black';
            // this.style.color = '#fff';
            // this.style.fontSize = '25px';
            // 当前元素的类名class改为了'change'

            this.className = 'change';
            // 会直接更改 覆盖原先的class类名

            //如果想要保留原先的类名 可以如下做法
            this.className = 'first change';
        }
    </script>
</body>

</html>
```

**通过****.className****修改节点类名**

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654486021557-a62f87cc-7e9b-4726-972a-b0162de620d6.png)

**关于classList**

[**🔗🔗classList🔗🔗**](https://blog.csdn.net/qq_37304197/article/details/81748349?ops_request_misc=%7B%22request%5Fid%22%3A%22165450310816781685361768%22%2C%22scm%22%3A%2220140713.130102334..%22%7D&request_id=165450310816781685361768&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-81748349-null-null.142^v11^control,157^v13^control&utm_term=classList&spm=1018.2226.3001.4187)   *node存放接收节点的变量*

1. **node.classList   						返回一个Object里面存放类名**
2. **node.classList.add('类名')   			添加新的类名**
3. **node.classList.remove('类名')  		删除对另类名**
4. **node.classList.item(索引)**   
5. **node.classList.toggle("类名"); 	引号中的类名，有就删除，没有就添加**



## 5.排他思想案例

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button>按钮1</button>
    <button>按钮2</button>
    <button>按钮3</button>
    <button>按钮4</button>
    <button>按钮5</button>
    <script>
        //1.获取元素
        var btns = document.getElementsByTagName('button');
        //btns得到伪数组
        for (var i = 0; i < btns.length; i++) {
            btns[i].onclick = function() {
                //(1)先发所有的按钮背景颜色去除
                for (var i = 0; i < btns.length; i++) {
                    btns[i].style.backgroundColor = '';
                }
                //(2)然后被点击的按钮变色
                this.style.backgroundColor = 'pink';
            }
        }
        //2.首先先排除其他
    </script>
</body>

</html>
```

# 获取/设置自定义属性

## H5之前的获取/设置自定义属性

### .getAttribute('属性')  获取

**get(得到)**

**attribute(属性)**

```html
<body>
    <div id="demo" index="1"></div>
    <script>
        //1.获取元素的属性值
        // (1) element.属性
        var div = document.querySelector('div');
        console.log(div.id);
        // (2) element.getAttribute('属性') get得到 attribute属性的意思
        //     程序员自己添加的属性称为自定义属性
        console.log(div.getAttribute('id')); //demo
        console.log(div.getAttribute('index')); //1
    </script>
</body>
```

### .setAttribute('属性','值')  设置

**set(设置)**

**attribute(属性)**

```html
<body>
    <div id="demo" index="1"></div>
    <script>
        //2. 设置元素属性值
        // (1) element.属性='值';
        div.id = 'text';
        // (2) element.setAttribute('属性','值'); 主要针对于自定义属性
        div.setAttribute('index', '2');
        div.setAttribute('class', '3'); //也可以改class
    </script>
</body>
```

### .removeAttribute(属性)  删除

**remove(删除)**

**attribute(属性)**

```html
<body>
    <div id="demo" index="1"></div>
    <script>
        //3. 移除属性 removeAttribute(属性)
        div.removeAttribute('index');
    </script>
</body>
```

### .attributes获取属性集合  *(所有属性)*



## H5自定义属性

**##H5规定自定义属性data-开头做为属性名并且赋值##**

```html
<body>
    <div getTime="20" data-index="2" data-list-name="andy"></div>
    <script>
        var div = document.querySelector('div');
        // console.log(div.getTime);
        console.log(div.getAttribute('getTime'));
        // H5规定自定义属性data-开头做为属性名并且赋值。

        div.setAttribute('data-index', 'data-index:20')

        console.log(div.getAttribute('data-index'));

        // h5新增获取自定义属性方法
        console.log(div.dataset);
        // dataset是一个集合里面存放了所有以data开头的自定义属性
        console.log(div.dataset.index);
        console.log(div.dataset['index']);

        // 如果自定义属性里面有多个-链接的单词，我们获取的时候采取驼峰命名法
        console.log(div.dataset.listName);
        console.log(div.dataset['listName']);
    </script>
</body>
```

h5新增获取自定义属性方法

### **dataset获取自定义属性**  ***data开头属性***

**dataset**是一个集合里面存放了所有以data开头的自定义属性

如果自定义属性里面有多个**-链接**的单词，我们获取的时候采取**驼峰命名法**

# 节点操作

## 父子节点

```html
<body>
    <!-- 节点的优点 -->
    <div>我是div</div>
    <span>我是span</span>
    <ul>
        <li>我是li1</li>
        <li>我是li2</li>
        <li>我是li3</li>
        <li>我是li4</li>
        <li>我是li5</li>
    </ul>
    <ol>
        <li>我是li1</li>
        <li>我是li2</li>
        <li>我是li3</li>
        <li>我是li4</li>
        <li>我是li5</li>
    </ol>
    <div class="box">
        <span class="erweima">X</span>
    </div>
    <script>
        // var box = document.querySelector('.box');
        // console.dir(box);
        // 1.父节点 parentNote
        var erweima = document.querySelector('.erweima');
        // var box=document.querySelector('.box');
        // 得到的是离元素最近的父级节点(亲父级) 如果找不到就返回空 null
        console.log(erweima.parentNode);

        // DOM提供的方法(API)获取
        var ul = document.querySelector('ul');
        var lis = document.querySelectorAll('li');
        // 2. 子节点
        // (1)子节点 childNotes 所有的子节点 包含 元素节点 文本节点等等
        console.log(ul.childNodes);
        //.nodeType 节点类型 不同数字对应不同类型
        console.log(ul.childNodes[0].nodeType);
        // (2)子节点 children 获取所有的子元素节点 实际开发常用的
        console.log(ul.children);
        // (3)子节点 firstChild 子节点第一个
        //  文本节点涵盖空格和文字
        console.log(ul.firstChild); //#text 文本节点
        console.log(ul.lastChild); //#text 文本节点
        // (4)子节点 firstElementChild 返回第一个子元素节点 ie9以上支持
        console.log(ul.firstElementChild);
        // (5)实际开发中 既没有兼容性问题又返回第一个子元素
        console.log(ul.children[0]);
        console.log(ul.children[ul.children.length - 1]); //最后一个
    </script>
</body>
```

### 父节点

node 节点

**node.parentNote**得到的是离元素最近的父级元素节点(亲父级) 如果找不到就返回空 null

*(只包含元素节点)*

**node.parentElement**得到的是离元素最近的父级元素节点(亲父级) 如果找不到就返回空 null

*(只包含元素节点)*

### 子节点

**node.childNodes**	得到node所有的子节点*(既包含元素节点、文本节点、注释节点)*

**node.childNodes[0].nodeType**	 该节点的节点类型（返回一个数值）

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654505958781-d7e3ba30-4a4b-49b1-9fc4-9edf0feb4e00.png)

**node.children**			获取node所有的子元素节点 实际开发常用的*(只包含元素节点)*

**node.firstChild**			子节点第一个节点*(既包含元素节点、文本节点、注释节点)*

**node.lastChild**			子节点最后一个节点*(既包含元素节点、文本节点、注释节点)*

**childElementCount**		返回子元素（不包括文本节点和注释）的个数



实际开发中获取方法

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654505851064-e1bc2453-f6e7-44f8-acf2-ac4af638c071.png)

### 兄弟节点

```html
<body>
    <div>我是div</div>
    <span>我是span</span>
    <script>
        // 兼容问题
        var div = document.querySelector('div');
        // nextSibling 下一个兄弟节点
        console.log(div.nextSibling); //文本节点
        // previousSibling上一个兄弟节点
        console.log(div.previousSibling); //文本节点
        // 2.nextElementSibling 的到下一个兄弟元素节点
        console.log(div.nextElementSibling);
        console.log(div.previousElementSibling);


        function getNextElementSibling(element) {
            var el = element;
            while (el = el.nextSibling) {
                if (el.nodeType === 1) {
                    return el;
                }
            }
            return null;
        }
    </script>
</body>
```

**node.nextSibling** 	下一个兄弟节点:*(既包含元素节点、文本节点、注释节点)*

**node.previousSibling**	获取node的上一个兄弟节点*:(既包含元素节点、文本节点、注释节点)*

**node.nextElementSibling** 	获取node的下一个兄弟元素节点*:(只包含元素节点)*

**node.previousElementSibling**	获取node的上一个兄弟元素节点*:(只包含元素节点)*

## 创建添加节点

```html
<body>
    <ul>
        <li>123</li>
    </ul>
    <script>
        // 1.创建元素节点
        var li = document.createElement('li');
        // 2.添加节点 node.appendChild(child) node父级 child 是子级 后面追加元素 类似于数组中的push
        var ul = document.querySelector('ul');
        ul.appendChild(li);
        // 3.node.insrtBefore(child,指定元素) 在指定元素的前面添加元素
        var lili = document.createElement('li');

        ul.insertBefore(lili, ul.children[0]);
        // 4.要在页面添加一个新的元素 1.创建元素 2.添加元素
    </script>
</body>
```

### 1.创建节点

**document.createElement****('****标签****')**      *自动识别单双标签*

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654500294447-65413060-d499-4261-9e18-f9e61dd1140d.png)

### 2.添加节点

**node.appendChild****(child)**  *node父级 child 是子级 后面追加元素 类似于数组中的push*

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654500409758-399b3fe0-d79f-496f-a54f-5962e3066d78.png)

**node.insrtBefore****(child,指定元素)**  *在指定元素的前面添加元素*

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654500572591-be97b45a-33ff-445f-9670-0694c7b0daa3.png)

### 3.替换节点

**node.replaceChild****(child,指定元素)** *要替换的节点从文档中删除,同时要插入的节点占据它的位置*

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654573225003-2d51c9be-41d8-42c6-9303-67c60c9e0051.png)

## 删除节点

```html
<body>
    <button>删除</button>
    <ul>
        <li>熊大</li>
        <li>熊二</li>
        <li>光头强</li>
    </ul>
    <script>
        var ul = document.querySelector('ul');
        var btn = document.querySelector('button');
        // 删除元素 node.removeChild(child)
        btn.onclick = function() {
            if (ul.children.length == 0) {
                this.disabled = true;
            } else {
                ul.removeChild(ul.children[0]);
            }
        }
    </script>
</body>
```

**删除元素 node.removeChild(child)**

## 复制克隆节点

**node.cloneNode( )**只复制标签 不复制内容

**node.cloneNode(true)**内容标签全部复制

```html
<body>
    <ul>
        <li>1111</li>
        <li>2</li>
        <li>3</li>
    </ul>
    <script>
        // node.cloneNode()只复制标签 不复制内容 
        // 添加true 深克隆 内容也克隆
        var ul = document.querySelector('ul');
        // 1.克隆节点
        var lili = ul.children[0].cloneNode(true);
        // 2.在ul中添加节点
        ul.appendChild(lili);
    </script>
</body>
```

# 注册/删除事件

## 注册事件

### 1.传统注册事件  唯一性

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654567236574-e6b523aa-e666-4350-94b4-d826f751382f.png)

### 2.方法监听注册事件  addEventListener  ie9以上

- 里面的事件类型是字符串必定加引号而月不带on
- 同一个元素同一个事件可以添加多个侦听器( 事件处理程序)

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654567353359-44fcc364-cb25-489c-a585-3e1c1c986b98.png)

### 3.attachEvent事件监听方式   仅了解不提倡使用

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654567401400-06a31444-ae07-47d4-baf5-57705c2bed99.png)

## 删除事件

### 1.传统方式解绑   *node'元素'*

**node.onclick=null**

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654567648988-1f888cf6-0c10-4f84-ba95-c8ab39d4bc48.png)

### 2.removeEventListener 删除事件

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654567684924-10492efa-f2d8-43b8-a08c-c2a19e4ea166.png)

### 3.老办法attachEvent *仅在ie9之前可用*

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654567728098-295e58e4-b1a9-4ad5-a861-d411f15ca038.png)

# DOM事件流代码验证

dom事件流三个阶段

1. JS代码中只能执行捕获或者冒泡其中的一个阶段。
2. onclick和attachEvent (ie)只能得到冒泡阶段。
3. 捕获阶段 如果addEventListener第三个参数是true 那么则处于捕获阶段 *document->html->body->father->son*

## 捕获阶段

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654568481514-ce930ecf-5199-4857-8d0c-86e81074eaf4.png)

当点击**son**会依次触发**从根元素到目标节点**的事件

结果:  触发**father - son**

## 冒泡阶段

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654569320445-d2ab52e1-5fd8-4334-8ece-27cb2779e880.png)

当点击**son**会依次触发**从目标元素到根节点**的事件

结果:  触发**son - father**



```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body,
         :root {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        
        .father {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100px;
            height: 100px;
            background-color: pink;
        }
        
        .son {
            width: 50px;
            height: 50px;
            background-color: rebeccapurple;
        }
    </style>
</head>

<body>
    <div class="father">
        <div class="son">son盒子</div>
    </div>
    <script>
        // dom事件流三个阶段
        // 1.JS代码中只能执行捕获或者冒泡其中的一个阶段。
        // 2.onclick和attachEvent (ie)只能得到冒泡阶段。
        // 3.捕获阶段 如果addEventListener第三个参数是true 那么则处于捕获阶段 document->html->body->father->son

        // 捕获阶段
        var son = document.querySelector('.son');
        son.addEventListener('click', function() {
            alert('son');
        }, true);
        var father = document.querySelector('.father');
        father.addEventListener('click', function() {
            alert('father');
        }, true);

        // 4.冒泡阶段 如果addEventListener第三个参数是false或者省略 那么则处于冒泡阶段 相反
        // 冒泡阶段
        // var son = document.querySelector('.son');
        // son.addEventListener('click', function() {
        //     alert('son');
        // }, false);
        // var father = document.querySelector('.father');
        // father.addEventListener('click', function() {
        //     alert('father');
        // }, false);
    </script>
</body>

</html>
```

# e.target和this的区别   *event对象*

## e.target/this

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: yellow;
        }
    </style>
</head>

<body>
    <div>
        123
    </div>
    <ul>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
    </ul>
    <script>
        //常见事件对象的属性和方法 this返回的的是绑定事件的对象(元素)
        // 区别: e.target 点击了那个元素，就返回那个元素;this 那个元素绑定了这个点击事件，那么就返回谁
        //1.e.target返回的是触发事件的对象
        var div = document.querySelector('div');
        div.addEventListener('click', function(e) {
            console.log(e.target);
            console.log(this);
        })
        var ul = document.querySelector('ul');
        ul.addEventListener('click', function(e) {
            // 我们给ul绑定了事件 那么this就指向ul
            console.log(this);
            // e.target 指向我们点击的那个对象 谁触发了这个事件 我们点击的是1i e.target 指向的就是1i
            console.log(e.target);
        })

        // 了解兼容
        // div.onclick=function(e){
        //     e=e||window.event;
        //     var target = e.target || e.srcElement;
        //     console.log(target);
        // }
        // 2.了解跟this 有个非常相似的属性currentTarget ie678不认识
    </script>
</body>

</html>
```

常见事件对象的属性和方法 this返回的的是绑定事件的对象(元素)

区别: 	

- **e.target** 	点击了那个元素，就返回那个元素
- **this** 		哪个元素绑定了这个点击事件，那么就返回谁
- **e.target.selectedIndex**     获取被点击子元素的索引

## e.button   返回被触发函数的鼠标被点击的下标

# 阻止默认行为  *event对象*

## 1.返回事件类型e.type

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654588757570-3ddfdd50-4bfa-4aad-a4a2-b49b6af34bbb.png)

**此时当触发事件时，就在控制台输出所触发的事件类型**

## 2.阻止默认行为(事件)  

 *让链接不跳转 或者让提交按钮不提交*

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654588902929-09afa0fd-12f3-4cd1-a229-bbcf9464a248.png)

## 3.传统方式 return false

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654589028187-2885f65d-b02e-491d-86dd-affd651e2b45.png)

## 4.阻止冒泡

- **e.stopPropagation();** 	*stop停止 Propagation 传播* *常规做法*
- **e.cancelBubble=true;** 	*cancle取消 bubble泡泡* *传统做法*



```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .father {
            margin: 100px auto;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 200px;
            height: 200px;
            background-color: pink;
        }
        
        .son {
            width: 150px;
            height: 150px;
            background-color: rebeccapurple;
            color: white;
            font-size: 20px;
            line-height: 150px;
            text-align: center;
        }
    </style>
</head>

<body>
    <div class="father">
        <div class="son">son盒子</div>
    </div>
    <script>
        // 1.冒泡阶段 如果addEventListener第三个参数是false或者省略 那么则处于冒泡阶段 相反
        var son = document.querySelector('.son');
        son.addEventListener('click', function(e) {
            alert('son');
            // e.stopPropagation(); // stop停止 Propagation 传播 常规做法
            e.cancelBubble = true; //cancle取消 bubble泡泡 传统做法
        }, false);

        var father = document.querySelector('.father');
        father.addEventListener('click', function(e) {
            alert('father');
            e.stopPropagation();
        }, false);

        document.addEventListener('click', function() {
            alert('document');
        }, false)
    </script>
</body>

</html>
```

## 5.事件委托

```html
<body>
    <ul>
        <li>点击弹框</li>
        <li>点击弹框</li>
        <li>点击弹框</li>
        <li>点击弹框</li>
        <li>点击弹框</li>
    </ul>
    <script>
        //事件委托核心原理 给父节点添加侦听器，利用事件冒泡影响每一个子节点
        var ul = document.querySelector('ul');
        var lis = document.querySelectorAll('li');
        ul.addEventListener('click', function(e) {
            // alert('弹框');
            for (var i = 0; i < lis.length; i++) {
                lis[i].style.backgroundColor = '';
            } //排他思想
            e.target.style.backgroundColor = 'pink';
        })
        
    </script>
</body>
```

事件委托核心原理 **给父节点添加侦听器，利用事件冒泡影响每一个子节点**

[**🔗🔗事件委托🔗🔗**](https://blog.csdn.net/qq_38128179/article/details/86293394?ops_request_misc=%7B%22request%5Fid%22%3A%22165465447016782388090175%22%2C%22scm%22%3A%2220140713.130102334..%22%7D&request_id=165465447016782388090175&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-86293394-null-null.142^v11^control,157^v13^control&utm_term=事件委托&spm=1018.2226.3001.4187)

## 6.禁止选中和右键行为

```html
<body>
    演示文本-无法选中文本-无法右键菜单
    <script>
        // 1.contextmenu 禁止右键菜单
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        })

        // 2.selectstart 禁止选中文字
        document.addEventListener('selectstart', function(e) {
            e.preventDefault();
        })
    </script>
</body>
```

# 鼠标事件 / 坐标问题

## 1.client 鼠标在可视区域的坐标

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654658100226-1994bb9f-58ba-42ae-a97b-a0bcf832d178.png)

## 2.page 鼠标在文档的坐标 *兼容问题*

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654658136881-5af81d56-0e4e-4ad8-be02-18020060d94c.png)

涵盖了被卷去的部分

## 3.screen 鼠标在电脑屏幕的坐标

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654658163694-f1ac6404-cc35-4def-8382-adfcd41dde55.png)



- click：单击事件。
- dblclick：双击事件。
- mousedown：按下鼠标键时触发。
- mouseup：松开按下的鼠标键时触发。
- mousemove：鼠标移动事件。
- mouseover：移入事件。
- mouseout：移出事件。
- mouseenter：移入事件。
- mouseleave：移出事件。
- contextmenu：右键事件。

mouseover事件和mouseenter事件，都是鼠标进入一个节点时触发。两者的区别是，mouseenter事件只触发一次，而只要鼠标在节点内部移动，mouseover事件会在子节点上触发多次。

- 在mouseover事件下，当鼠标移入父盒子会触发事件，但是从子盒子移入父盒子也会触发一次事件
- 在mouseenter事件下，当鼠标移入父盒子中的子盒子，再移出子盒子并不会触发两次

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .father {
            margin: 100px auto;
            width: 200px;
            height: 200px;
            background-color: pink;
        }
        
        .son {
            width: 100px;
            height: 100px;
            background-color: purple;
        }
    </style>
</head>

<body>
    <div class="father">
        <div class="son"></div>
    </div>
    <script>
        var father = document.querySelector('.father');
        var son = document.querySelector('.son');
        // mouseover鼠标经过自身盒子会触发.经过子盒子还会触发
        father.addEventListener('mouseenter', function() {
            // mouseenter只会经过自身盒子触发
            // mouseenter不会冒泡
            // 配合使用mouseleave(鼠标离开)同样不会冒泡
            console.log(11);
        })
    </script>
</body>

</html>
```

[**🔗🔗鼠标事件blog🔗🔗**](https://blog.csdn.net/qq_42669658/article/details/82531144)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        img {
            position: absolute;
        }
    </style>
</head>

<body>
    <img src="../../CSS/touxiang.png" alt="">
    <script>
        var pic = document.querySelector('img');
        document.addEventListener('mousemove', function(e) {
            // 1.mousemove只要鼠标移动就会触发
            var x = e.pageX;
            var y = e.pageY;
            // 2.注意不要忘记添加px单位
            pic.style.left = x - 82 + 'px';
            pic.style.top = y - 82 + 'px';
        })
    </script>
</body>

</html>
```

## 仿京东放大镜案例

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .preview_img {
            width: 500px;
            height: 285px;
            position: relative;
            cursor: move;
            margin: 0 auto;
        }
        
        .preview_img>img {
            width: 100%;
        }
        
        .mask {
            display: none;
            position: absolute;
            width: 250px;
            height: 250px;
            background-color: yellow;
            opacity: 0.5;
        }
        
        .big {
            display: none;
            position: absolute;
            left: 50px;
            width: 400px;
            height: 400px;
            overflow: hidden;
            position: relative;
            border: 5px solid gray;
        }
        
        .big img {
            position: absolute;
            top: 0;
            left: 0;
        }
    </style>
</head>

<body>
    <div class="preview_img">
        <img src="./001.jpg" alt="">
        <div class="mask"></div>
        <div class="big">
            <img src="./001.jpg" alt="" style="width: 800px;" class="bigImg">
        </div>
    </div>
    <script>
        var preview_img = document.querySelector('.preview_img');
        var mask = document.querySelector('.mask');
        var big = document.querySelector('.big');
        // 1. 当我们鼠标经过preview_img 就显示和隐藏mask遮挡层和big大盒子
        preview_img.addEventListener('mouseover', function() {
            mask.style.display = 'block';
            big.style.display = 'block';
        })
        preview_img.addEventListener('mouseout', function() {
            mask.style.display = 'none';
            big.style.display = 'none';
        })

        // 2. 鼠标移动的时候，让黄色的盒子跟鼠标来走
        preview_img.addEventListener('mousemove', function(e) {
            // (1)先计算出鼠标在盒子内的坐标
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            // (2)mask.offsetWidth减去盒子的一半
            // (3)mask移动的距离
            var maskX = x - mask.offsetWidth / 2;
            var maskY = y - mask.offsetHeight / 2;
            // (4)如果x坐标小于0就让他停在0的位置
            var maskMax = preview_img.offsetWidth - mask.offsetWidth;
            if (maskX <= 0) {
                maskX = 0;
            } else if (maskX >= maskMax) {
                maskX = maskMax;
            }
            if (maskY <= 0) {
                maskY = 0;
            } else if (maskY >= preview_img.offsetHeight - mask.offsetHeight) {
                maskY = preview_img.offsetHeight - mask.offsetHeight;
            }
            mask.style.left = maskX + 'px';
            mask.style.top = maskY + 'px';
            // 大图片的移动距离=遮挡层移动距离*大图片最大移动距离/遮挡层的最大移动距离
            var bigImg = document.querySelector('.bigImg');
            // 大图片最大移动距离
            var bigMax = bigImg.offsetWidth - big.offsetWidth;
            // 大图片距离
            var bigX = maskX * bigMax / maskMax;
            var bigY = maskY * bigMax / maskMax;
            bigImg.style.left = -bigX + 'px';
            bigImg.style.top = -bigY + 'px';
        })
    </script>
</body>

</html>
```

# 键盘事件

## 1. keyup 按键弹起的时候触发

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654669083014-96fd7257-2c5d-4185-a6d0-9911db9a56ee.png)

## 2. keydown 按键按下的时候触发

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654669137983-6227fd61-01d8-48a9-aa31-f668d4304dbb.png)

## 3. keypress 按键按下的时候触发  

- **keypress区分字母大小写** 
- **不识别功能键 ctrl shift 方向键**

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654669227779-a9316f92-4a36-4116-bc16-aca863c8ee03.png)

执行顺序 keydown-keypress-keyup

## 4.e.keyCode获取相应的ASCII码值

- **keyup**和**keydown**不区分字母大小写
- **keypress**区分字母大小写

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654669720171-10e1c086-4485-4600-9869-1e493c15f514.png)

## 5.e.key获取按键的字符

## 6.e.ctrlKey判断是否为ctrl键  *返回**布尔值*

# 表单事件

## 1.获取焦点onfocus

## 2.失去焦点onblur

## 3.onchange下拉菜单选择时触发

## 4.输入时触发oninput

## 5.选择时触发onselect	*光标框选时*

## 6.提交时触发onsubmit

## 7.重置时触发onreset

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <div id="box">
        <div>
            <input type="text" onfocus="focusFn()" placeholder="获取焦点">
        </div>
        <div>
            <input type="text" onblur="blurFn()" placeholder="失去焦点">
        </div>
        <div>
            <select>
					<option value="01">p1</option>
					<option value="02" selected>p2</option>
					<option value="03">p3</option>
					<option value="04">p4</option>
			</select>
        </div>
        <div>
            <input type="text" oninput="inputFn(this)" placeholder="输入时触发">
            <h2 class="h2"></h2>
        </div>
        <div>
            <input type="text" onselect="selectFn(this)" placeholder="选择时触发">
        </div>

        <form onsubmit="submitFn()" onreset="resetFn()">
            <input type="submit" value="提交" />
            <input type="reset" value="重置" />
        </form>

    </div>

    <script type="text/javascript">
        // 获取焦点
        function focusFn() {
            console.log("获取焦点");
        }

        // 失去焦点
        function blurFn() {
            console.log("失去焦点了");
        }

        // onchange
        var sel = document.querySelector("select");
        sel.onchange = function() {
            console.log(this.value);
        }

        // 输入时触发
        let h2 = document.querySelector('h2');

        function inputFn(self) {
            console.log(self.value);
            h2.innerHTML = self.value;
        }

        // 选择时触发
        function selectFn(self) {
            console.log(self.value);
        }

        // 提交时触发
        function submitFn() {
            console.log('提交了');
        }

        // 重置时触发
        function resetFn() {
            console.log('重置了');
        }
    </script>

</body>

</html>
```

# scroll滚动事件

内容高度/宽度 不包含边框 包含padding

## scrollTop折叠部分高度

**scrollTop**就是滚动条向下滚动上面被隐藏部分的高度  *并不适用于页面窗口*

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
            padding: 10px;
            overflow: auto;
        }
    </style>
</head>

<body>
    <div>
        内容内容内容内容内容内容 内容内容内容内容内容内容 内容内容内容内容内容内容 内容内容内容内容内容内容 内容内容内容内容内容内容 内容内容内容内容内容内容 内容内容内容内容内容内容 内容内容内容内容内容内容 内容内容内容内容内容内容 内容内容内容内容内容内容 内容内容内容内容内容内容 内容内容内容内容内容内容 内容内容内容内容内容内容 内容内容内容内容内容内容
    </div>
    <script>
        // scroll 滚动事件
        div.addEventListener('scroll', function() {
            console.log(div.scrollTop);
            // scrollTop就是滚动条向下滚动上面被隐藏部分的高度
        });
    </script>
</body>

</html>
```

# ![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1655188997507-ba126c1e-f1b9-4746-990c-13f599befabe.png)

# 页面加载事件

**window.onload**页面全部加载完毕才去执行

只能写一个会以最后一个为主

```html
<body>
    <script>
        // window.onload页面全部加载完毕才去执行
        // 只能写一个会以最后一个为主
        window.onload = function() {
            var btn = document.querySelector('button');
            btn.addEventListener('click', function() {
                alert('点击我');
            })
        }

        // 使用addEventListener可解决
        window.addEventListener('load', function() {
            alert('点击我');
        })
        document.addEventListener('DOMContentLoaded', function() {
            alert(33)
        })

        // load 等页面内容全部加载完毕，包含DOM元素 图片 flash css等等
        // DOMContentLoaded 是DOM加载完毕，不包含图片 flash css等就可以执行
    </script>
    <button>点击</button>

</body>
```

# 调整窗口事件

**resize** ***调整窗口触发***

-  **window.innerWidth**   		***获取窗口宽度***
-   **window.innerHeight**		***获取窗口高度***

```html
    <script>
        // resize 窗口变化触发
        window.addEventListener('load', function() {
            var div = document.querySelector('div');
            window.addEventListener('resize', function() {
                console.log(window.innerWidth);
                console.log(window.innerHeight);
            })
        })
    </script>
```

# 定时器

## setTimeout

语法规范：**windows.setTimeout(调用函数，延时时间);**

1. 这个window在调用的时候可以省略
2. 这个延时时间单位i毫秒 但可以省略 如果省略则默认为0
3. 这个调用函数可以直接写函数 还可以写函数名 还有一个写法 '函数名()'
4. 页面中可能有很多定时器,我们经常给定时器加标识符 (名字)

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654681938149-c2710173-ee0c-4263-9aad-677b517c91a5.png)

异步任务

### 清除定时器**clearTimeout(变量)**

**clearTimeout(变量)**

```html
<body>
    <button>点击停止定时器</button>
    <script>
        var btn = document.querySelector('button');
        var time = setTimeout(function() {
            console.log('爆炸了');
        }, 5000);
        btn.addEventListener('click', function() {
            clearTimeout(time);
        });
    </script>
</body>
```

## setInterval

**window.setInterval(回调函数,[间隔毫秒数]);**

每隔**[间隔毫秒数]**触发一次函数

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654682117835-2678d70c-b9a3-4737-9b71-5766f853dcff.png)

### 清除定时器**clearInterval(变量)**

**clearInterval(变量)**

# this指向

this指向问题一般情况下this的最终指向的是那个调用它的对象

## 1.全局作用域或者普通函数中this

指向全局对象**window**(注意定时器里面的this指向**window**)

```html
    <script>
        // this指向问题一般情况下this的最终指向的是那个调用它的对象

        // 1.全局作用域或者普通函数中this指向全局对象window(注意定时器甲面的this指向window)
        console.log(this); //window
    </script>
```



## 2.函数中的this

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654744499437-6ea6b88a-d412-4772-9064-e590f576ae41.png)

**注：****匿名函数****中的****this****也同样指向****windows**

## 3.定时器中的this

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654744551802-255f5ba4-a4a8-42b1-9baf-8d488175c3d1.png)

## 4.对象或者构造函数中的this

```html
    <script>     
        // 2.调用中谁调用this指向谁
        var o = {
            sayHi: function() {
                console.log(this); // this指向的是o这个对象
            }
        }
        o.sayHi();
        // 3.构造函数中this指向构造函数的实例
        function fun(name, age) {
            this.name = name;
            this.age = age;
            console.log(this); //指向fun实例对象
        }
        var fun = new fun();
    </script>
```

- 对象中的**this**指向它本身
- 构造函数中的**this**指向它这个构造函数



*构造函数中的this因为new的过程使得this指向发生了转移*



**new的整个过程：**

1. new会在内存中创建一个新的空对像
2. new会让this指向这个新对象
3. 执行构造函数中的代码
4. return这个新对象

## 5.绑定事件中的this

谁绑定事件**this**就指向谁

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654744731772-a804b07f-d121-4b03-aa9c-57980de6fc8d.png)

## 6.箭头函数this指向	*特殊性*

箭头函数的this指向它的父作用域，箭头函数声明在全局作用域下其this指向window，若不在全局作用域下，this指向其父作用域

**箭头函数的this永远指向其父作用域，箭头函数没有自己的this**

### 普通函数

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654746204921-fab4c532-3bae-4292-9e9d-b5f9d6d75eac.png)

### 箭头函数

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654746238269-01e68480-a644-4ce2-9c57-d94c32499fe0.png)

# 改变this指向方法

## 1.call()方法    *常用于继承*

call(无数个参数);

- 第一个参数：改变this指向
- 第二个参数：实参
- 使用之后会自动执行该函数，不适合用在定时器处理函数或者事件处理函数

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1655455484583-0d0dd80b-d5c2-4752-9623-fdd9cf6b7e47.png) 

## 2.apply()方法

apply（两个参数）

- 第一个参数：改变this指向
- 第二个参数：数组或者伪数组（里面为实参）
- 特点：使用时候会自动执行函数，不适合用在定时器处理函数或者事件处理函数

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1655457205108-985cd7e9-ae97-4743-942d-6a12deb83123.png)

## 3.bind()方法

bind（无数个参数）

- 第一个参数：改变this指向
- 第二个参数之后：实参
- 返回值为一个新的函数
- 使用的时候需要手动调用下返回的新函数（不会自动执行）
- 作用：改变事件处理函数或者定时器处理函数的this指向  

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1655457422671-0e2884fe-92a5-449b-9deb-e42a3cccafab.png)

## 三者区别

**call、apply**与**bind**区别：前两个可以自动执行，**bind**不会自动执行，需要手动调用

**call、bind**与**apply**区别：前两个都有无数个参数，**apply**只有两个参数，而且第二个参数为**[数组]**



# 浏览器页面相关方法和事件

## location

- **location.assign('url地址')**  	记录浏览记录，有后退功能
- **location.replace('url地址')**  	不记录浏览记录，没有后退功能
- **location.reload()**			刷新页面
- **location.href =  ''**			跳转页面



```html
<body>
    <button>点击</button>
    <script>
        var btn = document.querySelector('button');
        btn.addEventListener('click', function() {
            // 记录浏览记录，可实现后退功能
            // location.assign('http://www.baidu.com');
            // 不记录浏览记录，没有后退功能
            // location.replace('http://www.baidu.com');
            // 刷新页面
            location.reload();
        })
    </script>
</body>
```

## history实现页面前进    *仿浏览器前进页面*

```html
<body>
    <a href="60-发送短信案例.html">点击我去往页面</a>
    <button>前进</button>
    <script>
        var btn = document.querySelector('button');
        btn.addEventListener('click', function() {
            history.forward();
            // history.go(1); // 也可以实现前进跳转
        })
    </script>
</body>
```

**点击a标签跳转页面再返回此时再次点击前进按钮则会实现页面跳转**

*实现浏览器前进后退效果*

## pageshow事件

当点击a标签跳转后，再退回后不会再触发alert方法，通过**pageshow**事件即可解决

```html
<body>
    <a href="http//www.baidu.com">链接</a>
    <script>
        // 点击链接跳转下一界面后再退回正常情况并不会触发alert
        // pageshow事件完美解决这个问题
        // pageshow添加给window.
        window.addEventListener('pageshow', function() {
            alert(11);
        });
    </script>
</body>
```

# offset/scroll/client系列

## 1.offset

### offsetTop/offsetLeft

**可以得到元素的偏移位置返回的不带单位的数值**

**它以带有定位的父亲为准** **如果有父亲或者父亲没有定位** **则以body为准**

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1655470123512-aac4c250-3062-47ae-b896-44f7bac6f187.png)

### window.pageYoffset  页面卷去的高度



### offsetWidth/offsetHeight

可以得到元素大小 宽度和高度 是包含 **padding + border + width;**

**与style的区别:**

- **offset**可以得到任意样式表中的样式值(数字型)		*包含padding值*
- **style**只能得到行内样式表中的样式值(字符串型)		*不包含padding值*

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1654755515627-807871ff-e068-4970-b901-6d1a9d16eaae.png)

### offsetX / offsetY

元素距其**父元素**的偏移坐标

### offsetParent

返回带有定位的父亲 否则返回的是**body**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        .father {
            position: relative;
            width: 200px;
            height: 200px;
            background-color: pink;
            margin: 100px;
        }
        
        .son {
            width: 100px;
            height: 100px;
            background-color: purple;
            margin-left: 45px;
        }
        
        .w {
            width: 200px;
            height: 200px;
            background-color: royalblue;
            margin: 0 auto 200px;
            padding: 10px;
            border: 15px solid red;
        }
    </style>
</head>

<body>
    <div class="father">
        <div class="son"></div>
    </div>
    <div class="w"></div>
    <script>
        // offset系列
        var father = document.querySelector('.father');
        var son = document.querySelector('.son');
        // 1.可以得到元素的偏移位置返回的不带单位的数值
        console.log(father.offsetTop); //距离
        console.log(father.offsetLeft);
        // 它以带有定位的父亲为准 如果有父亲或者父亲没有定位 则以body为准
        console.log(son.offsetLeft);

        var w = document.querySelector('.w');
        // 2.可以得到元素大小 宽度和高度 是包含 padding + border + width;
        console.log(w.offsetWidth);
        console.log(w.offsetHeight);
        // 3.返回带有定位的父亲 否则返回的是body
        console.log(son.offsetParent); // 返回带有定位的父亲 否则返回的是body
        console.log(son.parentNode); //返回父亲 是最近一级的父亲 亲爸爸 不管父亲有没有定位
    </script>
</body>

</html>
```

## 2.scroll

**scroll**计算出的高度或者宽度涵盖了被折叠部分

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1655191086306-4064c008-e9c4-48f1-850d-d0a8729aaa9a.png)

- document.documentElement**.scroll**(0, 100);
- document.documentElement**.scrollTo**(0, 100);
- document.documentElement**.scrollBy**(0, 100);

1. **scrollTo**是'到达'，**.scrollTo**(0, 100)是固定到达100，当你已经在100则无法再次执行
2. **scrollBy**是'执行'，**.scrollBy**(0, 100)是每当点击一次则移动100，可重复执行
3. **scroll**和**scrollTo**一样，没什么区别

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1655194792765-550de9e9-0ab5-44a2-b030-b185bcc2029c.png)

- **scrollTop**指的是“元素中的内容”超出“元素上边界”的那部分的高度。

## 3.client

最大的区别就是**client**		不包含边框

输出的高度/宽度是可视内容的高度/宽度  *（人眼看到的部分大小*![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1655188997507-ba126c1e-f1b9-4746-990c-13f599befabe.png)

[**🔗🔗clientX、offsetX、screenX、pageX的区别🔗🔗**](https://blog.csdn.net/Serena_tz/article/details/113939879?ops_request_misc=&request_id=&biz_id=102&utm_term=clientx screenx pagex offsetx &utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-1-113939879.142^v16^control,157^v14^control&spm=1018.2226.3001.4187)

## 案例 '获取鼠标在盒子内坐标'

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            width: 200px;
            height: 200px;
            background-color: pink;
            margin: 200px;
        }
    </style>
</head>

<body>
    <div class="box"></div>
    <script>
        var box = document.querySelector('.box');
        box.addEventListener('mousemove', function(e) {
            // console.log(e.pageX); 鼠标在页面的x，y坐标
            // console.log(e.pageY);
            // console.log(box.offsetLeft); 盒子距离页面左边距离
            var x = e.pageX - this.offsetLeft; // 鼠标在盒子内的x坐标
            var y = e.pageY - this.offsetTop; // 鼠标在盒子内的y坐标
            this.innerHTML = 'x坐标是' + x + 'y坐标是' + y;
        })
    </script>
</body>

</html>
```

# ![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1655274453803-b3d6b959-aa7e-41a9-bfac-55cfba4ead26.png)

# 封装一个动画函数

1. 获得盒子当前位置
2. 让盒子在当前位置加上1个移动距离
3. 加一个结束定时器的条件
4. 注意此元素需要添加定位,才能使用element.style.left

```html
    <script>
function animate(obj, target, callback) {
    // console.log(callback); callback = function(){} 调用的时候callback()

    clearInterval(obj.timer);
    obj.timer = setInterval(function() {

        // 步长值写道定时器里面
        // 把步长值改为整数 不要出现小数
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            //停止动画 停止定时器
            clearInterval(obj.timer);
            //回调函数写道定时器结束里面
            // if (callback) {
            //     //调用函数
            //     callback();
            // }
            callback && callback();
            // 短路运算
        }
        // 把每次加一这个步长值改为慢慢变小的值
        // 步长公式：(目标值 - 现在的位置)/10
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 20)
}
</script>
```

# 节流和防抖

## 1.节流

节流就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: black;
            transform: translateX(0px);
            transition: all 0.5s ease;
        }
    </style>
</head>

<body>
    <button>按钮</button>
    <div></div>
</body>
<script>
    var btn = document.querySelector('button');
    var div = document.querySelector('div');
    var index = 0;
    // 开启节流阀
    var flag = true;
    btn.addEventListener('click', function() {
        if (flag) {
            // 关闭节流阀
            flag = false;
            index = index + 100;
            div.style.transform = `translateX(${index}px)`;
            setTimeout(function() {
                flag = true;
            }, 500);
        };
    });
</script>

</html>
```

## 2.防抖

防抖就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。连续点击按钮只会重置500ms，只有最后一次点击时500ms后才会执行方法。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: black;
            transform: translateX(0px);
            transition: all 0.5s ease;
        }
    </style>
</head>

<body>
    <button>按钮</button>
    <div></div>
</body>
<script>
    var btn = document.querySelector('button');
    var div = document.querySelector('div');
    var index = 0;
    var timer = null;
    btn.addEventListener('click', function() {

        if (timer !== null) {
            clearTimeout(timer);
        };
        timer = setTimeout(function() {
            index = index + 100;
            div.style.transform = `translateX(${index}px)`;
        }, 500);

    });
</script>

</html>
```

# 移动端事件

- **touchstart**	**点击事件**
- **touchmove**	**拖动事件**
- **touchend**	**松手事件**

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1655262416536-b2fb10c6-f036-44bd-8536-e9eff70439b8.png)

**targetTouches[0]** 就可以得到触摸dom元素的第一个手指的相关信息 比如手指的坐标

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1655262506029-4dcf0ee5-7ca7-4340-8508-3e3c0cdecb1b.png)

[**🔗🔗关于移动端手指触发事件blog🔗🔗**](https://blog.csdn.net/weixin_42349568/article/details/109240923?ops_request_misc=%7B%22request%5Fid%22%3A%22165526231616782184615037%22%2C%22scm%22%3A%2220140713.130102334..%22%7D&request_id=165526231616782184615037&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-3-109240923-null-null.142^v16^control,157^v14^control&utm_term=touchend&spm=1018.2226.3001.4187)