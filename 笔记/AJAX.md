# 基于jQuery的AJAX #

## URL地址组成部分 ##  

>- 1.客户端与服务器之间的通讯协议    http 
>- 2.存有该资源的服务器名称          域名 
>- 3.资源在服务器上具体的存放位置    域名之后 

## 客户端请求服务器的方式 ## 

>- get:请求常用于获取服务器(向服务器要资源)
>   - eg：根据url地址从服务器获取html文件，css文件，js文件，图片文件，数据资源等
>- post请求常用于向服务器提交数据(往服务器发送数据)
>   - eg：登陆时向服务器提交登录信息

## jQuery中的AJAX ##


### $.get()获取数据 ### 

```js
$.get(url,[data],[callback])
```

>- url          字符串型    **必须**    要请求的资源地址
>- data         Object      **非必须**  请求资源期间要携带的参数
>- callback     function    **非必须**  请求成功时回调函数

**代码示例：**

**发起不带参数的请求：**
```html
<body>
    <button id="btnGet">发起不带参数的请求</button>
    <script>
        $(function(){
            $('#btnGet').on('click',function(){
                console.log(this);
                $.get('http://www.liulongbin.top:3006/api/getbooks',function(res){
                    //res 是请求服务器返回来的数据
                    console.log(res);
                });
            })
        })
    </script>
</body>
```

**发起带参数的请求：**

```html
<body>
    <button id="btnGet">发起带参数的请求</button>
    <script>
        $(function(){
            $('#btnGet').on('click',()=>{

                $.get('http://www.liulongbin.top:3006/api/getbooks',{id:1},function(res){
                    // 此时的res是服务器id为1的对象数据
                    console.log(res);
                });

            })
        })
    </script>
</body>
```
---
### $.post()发送post请求 ### 
```js
$.post(url,[data],[callback])
```
>- url          字符串型    **必须**    提交数据的地址
>- data         Object      **非必须**  要提交的数据
>- callback     function    **非必须**  数据提交成功的回调函数

**代码示例：**
```html
<body>
    <button id="postBtn">post提交数据</button>
    <script>
        $(function() {
            $('#postBtn').on('click', function() {
                $.post('http://www.liulongbin.top:3006/api/addbooks', {
                    bookname: '水浒传',
                    author: '施耐庵',
                    publisher: '天津出版社'
                }, function(res) {
                    console.log(res);
                });
            })
        })
    </script>
</body>
```

## $ajax()函数 ##

>相比于$.get0 和$.post0函数, jQuery中提供的$.ajax()函数,是一个功能比较综合的函数， 它允许我们对Ajax请求进行更详细的配置。

```js
        $.ajax({
            type: '', //请求的方式 如 get 或 post
            url: '', //请求的url地址
            data: {}, //这次请求携带的数据
            success: function(res) {

            }, //请求完成过后回调函数
        });
```
**代码示例：**


```html
    <script>
        $(function() {
            //GET请求
            $('#ajaxGet').on('click', function() {
                $.ajax({
                    type: 'GET',
                    url: 'http://www.liulongbin.top:3006/api/getbooks',
                    data: {
                        id: 1
                    },
                    success: function(res) {
                        console.log(res);
                    }
                })
            });
            //POST请求
            $('#ajaxPost').on('click', function() {
                $.ajax({
                    type: 'PSOT',
                    url: 'http://www.liulongbin.top:3006/api/addbooks',
                    data: {
                        bookname: '水浒传',
                        author: '施耐庵',
                        publisher: '天津出版社'
                    },
                    success: function(res) {
                        console.log(res);
                    }
                })
            });
        })
    </script>
```

## 接口 ##

>使用Ajax请求数据时，被请求的URL地址，就叫做数据接口(简称接口)。同时，每个接口必须有请求方式(get/post)。
>
>[接口测试工具 Postman](https://web.postman.co/workspace/My-Workspace~71c70ac7-23a9-4d8c-8f5b-ccd1b8d539e6/overview?workspaceOnboarding=show)

### 什么是接口文档？ ###

>接口文档，顾名思义就是接口的说明文档，它是我们调用接口的依据。好的接口文档包含了对接口URL,参数以及输出内容的说明,我们参照接口文档就能方便的知道接口的作用，以及接口如何进行调用。

接口文档可以包含很多信息，也可以按需进行精简，不过, 一个合格的接口文档,应该包含以下6项内容,从而为接口的调用提供依据:

>1. 接口名称：用来标识各个接口的简单说明，如登录接口，获取图书列表接口等。
>
>2. 接口URL：接口的调用地址。
>3. 调用方式： 接口的调用方式，如**GET**或**POST**.
>4. 参数格式：接口需要传递的参数，每个参数必须包含参数名称、参数类型、是否必选、参数说明这4项内容。
>5. 响应格式：接口的返回值的详细描述，一 般包含数据名称、数据类型、说明3项内容。
>6. 返回示例 (可选)：通过对象的形式，例举服务器返回数据的结构。

## form表单 ##

```html
    <form action="/login" method="get" target="_self" enctype="multipart/form-data">
        <!-- 表单标签 -->
        <!-- 表单域 -->
        <input type="text ">
        <input type="password " name=" " id=" ">
        <!-- 表单提交 -->
        <input type="submit" value="发送 ">

    </form>
```

**form的属性:**
>- action   &emsp;&emsp;规定当提交表单时候向何处发送表单数据  如果没有内容则默认当前URL地址
>- target   &emsp;&emsp;_blank  &emsp;&emsp;在新窗口中打开
>   -   &emsp;&emsp;_self  &emsp;&emsp;默认,在相同框架中打开
>   -   &emsp;&emsp;_parent&emsp;&emsp;在父框架集中打开
>   -   &emsp;&emsp;_top&emsp;&emsp;在整个窗口中打开
>   -   &emsp;&emsp;framename    &emsp;&emsp;在指定的框架中打开
>- method &emsp;&emsp;GET/POST  &emsp;&emsp;默认为GET  
>   -   &emsp;&emsp;get&emsp;&emsp;适合提交少量简单数据
>   -   &emsp;&emsp;post&emsp;&emsp;适合提交大量复杂包含文件上传的数据
>- enctype&emsp;&emsp;application/x-www-form-urlencoded &emsp;&emsp;在发送前编码所有字符
>   -   &emsp;&emsp;multipart/form-data    &emsp;&emsp;部队字符编码 在使用包含文件上传控件的表单时必须使用该值(文件上传)
>   -   &emsp;&emsp;text/plain    &emsp;&emsp;空格转换为“+”加号 但不对特殊字符编码
>- autocomplete&emsp;&emsp;on&emsp;&emsp;开启表单自动补全内容
>   - &emsp;&emsp;off&emsp;&emsp;关闭表单自动补全内容

### 什么是表单的同步提交 ###
通过点击submit按钮 触发表单提交的操作 从而使页面跳转到action URL的行为叫做表单的同步提交:

**同步提交缺点:**
>1. 整个页面跳转 
>2. 页面之前的状态和数据会丢失

**解决方法:**
>- 表单只负责采集数据
>- Ajax负责将数据提交到服务器

### 监听表单提交事件和阻止默认行为 ###


> **serialize( )** 获取表单中的所有数据

```html
<body>
    <form action="/login" method="get" id="f1" target="_blank">
        <input type="text" name="username">
        <input type="password" name="password" id="">
        <input type="submit" value="提交">
    </form>

    <script>
        // 监听表单提交事件
        $(function() {
            // 第一种方式
            // $("#f1").submit(function(e) {
            //     alert('第一种');
            //     // 第一种阻止表单默认提交行为
            //     e.preventDefault();
            // });
            // 第二种方式
            $('#f1').on('submit', function(e) {
                alert('第二种');
                // 第二种阻止表单默认提交行为(跟第一种一样)
                e.preventDefault();
                // 利用serialize()获取表单中的所有数据
                // 前提是被获取表单必须有name属性
                let shujv = $(this).serialize();
                console.log(shujv);
            });
        })
    </script>
</body>
```
## jQuery文件上传 ##

```html
<body>
    <!-- 文件选择框 -->
    <input type="file" id="file">
    <!-- 上传文件按钮 -->
    <button id="btnUpload">上传</button>
    <br>
    <img src="../loadingImgGif/20140524124233131.gif" alt="" style="display: none;" id="loading">
</body>
<script>
    $(function() {
        // ajaxStart监听到Ajax请求被发起了
        $(document).ajaxStart(function() {
            $('#loading').show();
        });
        // ajaxStop监听到AJAX完成的事件
        $(document).ajaxStop(function() {
            $('#loading').hide();
        });

        $('#btnUpload').on('click', function() {
            // 将jQuery转换为DOM
            var files = $('#file')[0].files;
            if (files.length <= 0) {
                return alert('请选择文件后上传');
            }
            // 向formData中追加文件
            var fd = new FormData();
            fd.append('avatar', files[0]);

            // 发起jQuery的AJAX请求，上传文件
            $.ajax({
                method: 'POST',
                url: 'http://www.liulongbin.top:3006/api/upload/avatar',
                data: fd,
                // 不修改content-type属性，使用FormData默认的Content-Type值
                processData: false,
                // 不对FormData中的数据进行url编码，而是将FormData数据原样发送到服务器
                contentType: false,
                success: function(res) {
                    console.log(res);
                }
            })
        });
    });
</script>
```

# 初识XMLHttpRequest #

>**XMLHttpRequest** (简称xhr) 是浏览器提供的Javascript 对象，通过它，可以请求服务器上的数据资源。之前所学的jQuery中的Ajax函数，就是基于xhr对象封装出来的。

## 使用xhr发送get请求 ##
**步骤：**
>1. 创建xhr对象
>2. 调用xhr.open()函数
>3. 调用xhr.send()函数
>4. 监听xhr.onreadystatechange事件

```js
<script>
    // 1.创建xhr对象
    var xhr = new XMLHttpRequest();
    // 2.调用xhr.open()函数
    xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks');
    // 3.调用xhr.send()函数
    xhr.send();
    // 4.监听xhr.onreadystatechange事件
    xhr.onreadystatechange = function() {
        // 固定判断条件
        if (xhr.readyState === 4 && xhr.status === 200) {
            // 获取服务器相应的数据成功
            console.log(xhr.responseText);
            // 传过来一个JSON结构的字符串
        }
    }
</script>
```

### XMLHttpRequest对象的readyState属性： ###

|值|状态|描述|
|:-:|:-:|:-:|
0|UNSENT|XMLHttpRequest对象已被创建，但尚未调用open方法
1|OPENED|open()方法已经被调用
2|HEADERS_RECEIVED|send()方法已经被调用,响应头也已经被接收
3|LOADING|数据接收中,此时response属性中已经包含部分数据
4|DONE|Ajax请求完成,这就意味着数据传输已经彻底完成或失败

## 发起带参数的get请求 ##

**代码示例：**
```html
    <script>
        var xhr = new XMLHttpRequest();
        // 在url末尾添加向服务器发送信息的字符串  ?id=1
        xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks?id=1')

        xhr.send();

        xhr.onreadystatechange = function() {
            // 固定判断条件
            if (xhr.readyState === 4 && xhr.status === 200) {
                // 获取服务器相应的数据成功
                console.log(xhr.responseText);
            }
        }
    </script>
```


>带一个参数
>
>http://www.liulongbin.top:3006/api/getbooks?id=1
>
>带二个参数
>
>http://www.liulongbin.top:3006/api/getbooks?id=1&bookname=西游记


**GET请求携带参数的本质:**

>无论使用$.ajax(), 还是使用$.get(),又或者直接使用xhr对象发起GET请求，当需要携带参数的时候，本质上,都是直
接将参数以查询字符串的形式，追加到URL地址的后面，发送到服务器的。

### URL的编码与解码 ###

>1.什么是URL编码：
>- URL地址中，只允许出现英文相关的字母、标点符号、数字,因此，在URL地址中不允许出现中文字符。
>- 如果URL中需要包含中文这样的字符，则必须对中文字符进行编码(转义)。
>- URL编码的原则:使用安全的字符(没有特殊用途或者特殊意义的可打印字符)去表示那些不安全的字符。
>- URL编码原则的通俗理解:使用英文字符去表示非英文字符。

`http://www.liulongbin.top:3006/api/getbooks?id=1&bookname=西游记`

👇👇👇经过url编码之后，url地址变成了如下格式👇👇👇

`http://www.liulongbin.top:3006/api/getbooks?id=1&bookname=%E8%A5%BF%E6%B8%B8%E8%AE%B0`

>2.如何对URL进行编码与解码
>- 浏览器提供了URL编码与解码的API,分别是:
>- **encodeURI( )**  编码的函数
>- **decodeURI( )**  解码的函数

**示例：**
```js
        console.log(encodeURI('黑马程序员')); //%E9%BB%91%E9%A9%AC%E7%A8%8B%E5%BA%8F%E5%91%98

        console.log(decodeURI('%E9%BB%91%E9%A9%AC%E7%A8%8B%E5%BA%8F%E5%91%98')); // 黑马程序员
```

## 使用xhr发送post请求 ##


>步骤:
>1. 创建**xhr**对象
>2. 调用 **xhr.open()** 函数
>3. 设置**Content-Type**属性(固定写法)
>4. 调用 **xhr.send()** 函数，同时指定要发送的数据（携带的参数）
>5. 监听**xhr.onreadystatechange**事件

**代码示例：**
```js
        // 1.创建xhr对象
        var xhr = new XMLHttpRequest();
        // 2.调用.open()方法
        xhr.open('POST', 'http://www.liulongbin.top:3006/api/addbook');
        // 3.设置Content-Type属性(固定写法)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // 4.调用xhr.send()函数
        xhr.send('bookname=三体&author=刘慈欣&publisher=河南图书');
        // 5.监听事件
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.responseText);
            }
        }
```

## 数据交换格式： ##

**什么是XML?**
XML的英文全称是EXtensible Markup Language,即可扩展标记语言。因此，XML 和HTML类似，也是一种标记语言。

>- 虽然html和XML都是标记语言.但是两者没有任何关系
>- HTML被设计用来描述网页上的内容,就是网页内容的载体 
>- XML被设计用来传输和 存储数据，是数据的载体 


**XML缺点：**
>- XML格式臃肿,和数据无关的代码多,体积大，传输效率低
>- 在Javascript中解析XML比较麻烦 -->


**什么是JSON?:**
>概念:
>
>JSON的英文全称是JavaScript Object Notation,即"JavaScript 对象表示法”。简单来讲,JSON就是Javascript对象和数组的字符串表示法，它使用文本表示一个JS对象或数组的信息，因此,JSON的本质是字符串。


>作用: 
>
>JSON 是一种轻量级的文本数据交换格式，在作用上类似于XML,专门用于存储和传输数据，但是JSON比XML更小更快、更易解析。

>现状: 
>
>JSON是在2001年开始被推广和使用的数据格式，到现今为止，JSON已经成为了主流的数据交换格式。

## JSON的两种结构 ##
**1.对象结构:**
>对象结构在JSON中表示为{}括起来的内容。数据结构为 <u>{ key: value, key: value, ...}</u> 的键值对结构。其中, key 必须是使用英文的双引号包事的字符串, value 的数据类型可以是数字、字符串、布尔值、null. 数组、对象6种类型。

**2.数组结构:**
>数组结构:数组结构在JSON中表示为[]括起来的内容。数据结构为 <u>["java""javascript", 30, true ... ]</u> 数组中数据的类型可以是数字、字符串、布尔值、null. 数组、对象6种类型。

**3. JSON语法注意事项**

>1. 属性名必须使用双引号包裹
>2. 字符串类型的值必须使用双引号包裹
>3. JSON中不允许使用单引号表示字符串
>4. JSON中不能写注释
>5. JSON的最外层必须是对象或数组格式
>6. 不能使用undefined或函数作为JSON的值

>- **JSON的作用:** 在计算机与网络之间存储和传输数据。
>- **JSON的本质:** 用字符串来表示Javascript对象数据或数组数据

### JSON和js对象的关系 ###
>JSON是JS对象的字符串表示法，它使用文本表示个JS对象的信息，本质是一个字符串。

**例如:**

- **JSON.stringify(obj2)**&emsp;&emsp;序列化(对象转换为字符串)
- **JSON.parse(jsonStr)**&emsp;&emsp;反序列化 (字符串转换为对象)

```js
        // 这是一个对象
        var obj = {
            a: 'hello',
            b: 'world',
        };
        // 这是一个json字符串，本质上是一个字符串
        var json = '{"a":"hello","b":"world"}';
```
```js
        // JSON和js对象互转
        var jsonStr = '{"a":"hello","b":"world"}';

        // JSON转换为js  叫做反序列化 (字符串转换为对象)
        var objnew = JSON.parse(jsonStr);
        console.log(objnew);

        // js转换为JSON  叫做序列化(对象转换为字符串)
        var obj2 = {
            a: 'hello',
            b: 'world',
            c: false
        };
        var string = JSON.stringify(obj2);
        console.log(string);

```

### 演示JSON.parse函数的应用场景 ###

```js
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks');

        xhr.send();

        xhr.onreadystatechange = function() {
            // 固定判断条件
            if (xhr.readyState === 4 && xhr.status === 200) {
                // 获取服务器相应的数据成功
                console.log(xhr.responseText);
                // 传输过来JSON结构的字符串
                var result = JSON.parse(xhr.responseText);
                console.log(result); // 被转换成对象
            }
        }

```

## XMLHttpRequest Level2的新特性 ##

旧版**XMLHttpRequest**的缺点
>
>只支持文本数据传输，无法用来读取和上传文件传送和接收数据时，没有进度信息，只提示有没有完成

**-XMLHttpRequest Level2的新特性**
>1. 可以设置HTTP请求的时限
>2. 可以使用formData对象管理表单数据
>3. 可以上传文件
>4. 可以获得数据传输的进度信息

有时，Ajax 操作很耗时，而且无法预知要花少时间。如果网速很慢，用户可能要等很久。新版本的XMLHttpRequest对象，增加了timeout 属性，可以设置HTTP请求的时限:

### 设置HTTP请求的时限: ###

**代码示例：**

- 设置超时时间10ms
    - **xhr.timeout = 10;**
- 设置超时后触发的函数
    - **xhr.ontimeout = function( ) { };**

```js
    <script>
        // 1.创建xhr对象
        var xhr = new XMLHttpRequest();
        // 设置超时时间为10毫秒
        xhr.timeout = 10;
        xhr.ontimeout = function() {
            console.log('请求超时!');
        };
        // 2.调用xhr.open()函数
        xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks');
        // 3.调用xhr.send()函数
        xhr.send();
        // 4.监听xhr.onreadystatechange事件
        xhr.onreadystatechange = function() {
            // 固定判断条件
            if (xhr.readyState === 4 && xhr.status === 200) {
                // 获取服务器相应的数据成功
                console.log(xhr.responseText);
                // 传过来一个JSON结构的字符串
            };
        };
    </script>
```

### FormData对象的基本使用： ###

>1. 调用 **append** 函数向fd中追加数据
>2. 向 **send( )** 函数中追加数据

代码示例：

```js
        // 创建FormData实例
        var fd = new FormData();
        // 调用append函数 向fd中追加数据
        fd.append('uname', 'zs');
        fd.append('upwd', '123456');

        var xhr = new XMLHttpRequest();

        xhr.open('POST', 'http://www.liulongbin.top:3006/api/formdata');
        xhr.send(fd);

        xhr.onreadystatechange = function() {
            // 固定判断条件
            if (xhr.readyState === 4 && xhr.status === 200) {
                // 获取服务器相应的数据成功
                console.log(JSON.parse(xhr.responseText));
                // 传过来一个JSON结构的字符串
                // 使用反序列化转换
            }
        }
```

### FormData获取表单中的数据： ###

```js
<body>
    <form id="form1">
        <input type="text" name="uname" autocomplete="off" />
        <input type="password" name="upwd" id="">
        <button type="submit">提交</button>
    </form>
    <script>
        // 通过dom操作获取到form表单元素
        var form = document.querySelector('#form1');

        form.addEventListener('submit', function(e) {
            // 阻止表单默e认提交
            e.preventDefault();

            // 创建formData 快速获取到form表单中的数据
            var fd = new FormData(form);

            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://www.liulongbin.top:3006/api/formdata');
            xhr.send(fd);

            xhr.onreadystatechange = function() {
                // 固定判断条件
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // 获取服务器相应的数据成功
                    console.log(JSON.parse(xhr.responseText));
                    // 传过来一个JSON结构的字符串
                    // 使用反序列化转换
                }
            }
        })
    </script>
</body>
```

### XMLHttpRequest Level2上传文件 ###

新版XML HttpRequest对象，不仅可以发送文本信息，还可以上传文件

**实现步骤:**

1. 定义UI结构
2. 验证是否选择了文件
3. 向FormData中追加文件
4. 使用xhr发起上传文件的请求
5. 监听onreadystatechange事件

**代码示例：**

```html
<body>
    <!-- 1.定义UI结构 -->
    <input type="file" id="file1">
    <!-- 上传文件按钮 -->
    <button id="btnUpload">上传文件</button>
    <br>
    <!-- img标签 显示上传后的图片 -->
    <img src="" alt="" id="img" width="300">

    <script>
        // 2.验证是否选择了文件
        // 获取上传文件的按钮
        var btnUpload = document.querySelector('#btnUpload');
        // 添加点击事件
        btnUpload.addEventListener('click', function() {
            // 获取到用户选择的文件列表
            var files = document.querySelector('#file1').files;
            console.log(files);
            if (files.length <= 0) {
                return alert('请选择上传的文件');
            };
            // 3.向FormData中追加文件
            var fd = new FormData();
            fd.append('avatar', files[0]); //avatar翻译为头像

            // 4.使用xhr发起上传文件的请求
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://www.liulongbin.top:3006/api/upload/avatar');
            xhr.send(fd);

            // 5.监听onreadystatechange事件
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText);
                    if (data.status === 200) {
                        // 上传成功
                        console.log(data);
                        console.log('上传成功');
                        document.querySelector('#img').src = 'http://www.liulongbin.top:3006' + data.url;
                    } else {
                        // 上传失败
                        console.log('图片上传失败' + data.message);
                    }
                }
            }
        })
    </script>
</body>
```

### 显示文件上传进度 ###

**主要使用到：**
1. **onprogress**文件上传中事件
2. **onload**文件上传成功事件
3. 以及内置**event**对象
    - <u>e.lengthComputable</u>返回布尔值  *判断传输数据是否是可以计算长度*
    - <u>e.loaded</u>已经上传的进度
    - <u>e.total</u>总进度

```html
<body>
    <!-- 1.定义UI结构 -->
    <input type="file" id="file1">
    <!-- 上传文件按钮 -->
    <button id="btnUpload">上传文件</button>
    <!-- bootstrap中的进度条 -->
    <div class="progress" style="width:500px; margin:10px; ">
        <div class="progress-bar progress-bar-striped active" style="width: 0%" id="percent">
            0%
        </div>
    </div>
    <br>
    <!-- img标签 显示上传后的图片 -->
    <img src="" alt="" id="img" width="300">
    <script>
        // 2.验证是否选择了文件
        // 获取上传文件的按钮
        var btnUpload = document.querySelector('#btnUpload');
        // 添加点击事件
        btnUpload.addEventListener('click', function() {
            // 获取到用户选择的文件列表
            var files = document.querySelector('#file1').files;
            console.log(files);
            if (files.length <= 0) {
                return alert('请选择上传的文件');
            };
            // 3.向FormData中追加文件
            var fd = new FormData();
            fd.append('avatar', files[0]); //avatar翻译为头像

            // 4.使用xhr发起上传文件的请求
            var xhr = new XMLHttpRequest();

            // 监听文件上传进度------------------------------------------------------------------
            // onprogress文件上传中事件
            xhr.upload.onprogress = function(e) {
                // e.lengthComputable返回布尔值  判断传输数据是否是可以计算长度
                if (e.lengthComputable) {
                    // 计算出上传的进度
                    // e.loaded 已将上传的进度
                    // e.total  总进度
                    var procent = Math.ceil((e.loaded / e.total) * 100);
                    // console.log(procent + '%');

                    // !!!!!!!!!!!!!!!动态设置进度条!!!!!!!!!!!!!!!
                    // attr()jQuery封装的设置自定义属性方法
                    $('#percent').attr('style', 'width:' + procent + '%').html(procent + '%');
                }
            };
            // onload文件上传成功事件
            xhr.upload.onload = function() {
                $('#percent').removeClass().addClass('progress-bar progress-bar-success');
            };
            // 监听文件上传进度------------------------------------------------------------------


            xhr.open('POST', 'http://www.liulongbin.top:3006/api/upload/avatar');
            xhr.send(fd);

            // 5.监听onreadystatechange事件
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText);
                    if (data.status === 200) {
                        // 上传成功
                        console.log(data);
                        console.log('上传成功');
                        document.querySelector('#img').src = 'http://www.liulongbin.top:3006' + data.url;
                    } else {
                        // 上传失败
                        console.log('图片上传失败' + data.message);
                    }
                }
            }
        })
    </script>
</body>

```

# 什么是Axios库 #

**1.什么是axios**
>Axios是专注于网络数据请求的库。
>相比于原生的XMLHttpRequest对象，axios 简单易用。
>相比于jQuery, axios 更加轻量化，只专注于网络数据请求。

## 发起get请求 ##

![png](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/7f26d3041bfe3351.png)

## 发起post请求 ##

![png](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/7f26d3041bfe3351.png)

## Axios中的ajax请求 ##

### 直接使用axios发起GET请求 类似于ajax中的$.ajax() ###

![png](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/39b2bb46022a6ee5.png)

### 直接使用axios发起POST请求 类似于ajax中的$.ajax() ###

![png](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/d2d956e157587721.png)


# 了解同源策略和跨域 #

**1.什么是同源:**
如果两个页面的协议，域名和端口都相同，则两个页面具有相同的源。

例如:下表给出了相对于`http://www.test.com/index.html`页面的同源检测:
`http://www.test.com:80/index.html(默认端口80)`

**2.什么是同源策略:**
同源策略(英文全称Same origin policy) 是浏览器提供的一个安全功能。

MDN官方给定的概念:同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。 这是一个用于隔离潜在恶意文件的重要安全机制。

通俗的理解:浏览器规定，A网站的JavaScript, 不允许和非同源的网站C之间，进行资源的交互

>例如:
>1. 无法读取非同源网页的Cookie. LocalStorage 和IndexedDB
>2. 无法接触非同源网页的DOM
>3. 无法向非同源地址发送Ajax请求

**什么是跨域:**
>同源指的是两个URL的协议、域名、端口-致，反之，则是跨域。
>出现跨域的根本原因:浏览器的同源策略不允许非同源的URL之间进行资源的交互。
>网页: `http://www.test.com/index.html`
>接口: `http://www.api.com/userlist`


**如何实现跨域数据请求:**
>现如今,实现跨域数据请求，最主要的两种解决方案，分别是JSONP和CORS.

>**JSONP**:出现的早,兼容性好(兼容低版本IE)。是前端程序员为 了解决跨域问题，被迫想出来的一种临时解决方案。缺点是只支持GET请求,不支持POST请求。

>**CORS**:出现的较晚，它是W3C标准，属于跨域Ajax请求的根本解决方案。支持GET和POST请求。缺点是不兼容某些低版本的浏览器。