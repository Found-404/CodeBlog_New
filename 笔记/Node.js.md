# 什么是Node.js

**Node.js**是一个基于Chrome V8引擎的JavaScript运行环境

## Node.js中的JavaScript运行环境

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655822357450-119a84ee-f87e-471f-adeb-96b9c664695e.png)

注意：

1. 浏览器是JavaScript的前端运行环境
2. Node.js是JavaScript的后端运行环境
3. Node.js中无法调用DOM和BOM等浏览器内置API 

## Node.js框架

Node.js作为-个JavaScript的运行环境,仅仅提供了基础的功能和API。然而，基于Node.js提供的这些基础能，很多强大

的工具和框架如雨后春笋，层出不穷,所以学会了Node.jis ，可以让前端程序员胜任更多的工作和岗位:

①基于Express框架(http://www.expressjs.com.cn/) ，可以快速构建Web应用

②基于Electron框架(https://electronjs.org/) , 可以构建跨平台的桌面应用

③基于restify框架http://restify.com/) ，可以快速构建API接口项目

④读写和操作数据库、创建实用的命令行工具辅助前端开发、etc..

# 关于终端

转为开发人员设计，用于实现人机交互的一种方式。

- win+r 打开运行输入cmd打开终端
- 在文件路径中输入cmd打开终端
- 按住shift+右键有一个powershell终端

**常用的终端命令：**
|命令|作用|
|:-:|:-:|
| node -v | 查看node.js版本 |
| cd  /   | 进入根目录      |
| cd ..   | 去到上一层目录  |
| f:      | 进入F盘         |
| cls     | 清空终端        |

**终端快捷键：**

1. **使用↑键可以快速定位到上一次执行的命令**
2. **使用tab键能够快速补全路径**
3. **使用esc键能够快速清空当前输入的命令**

# fs文件系统模块

fs模块是Node.js官方提供的，用来操作文件的模块，它提供了一系列的方法和属性。用来满足用户对文件的操作需求。

例如：
- **fs.readFile( )**方法，用来读取指定文件中的内容
- **fs.writeFile( )**方法，用来向指定文件中写入内容

如果在javaScript代码中，使用fs模块来操作文件，则需要使用如下方式导入他：

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655904379652-fb60eeb1-f9a9-4703-864e-e83eea12097f.png)

## fs.readFile()的语法格式      *读取文件内容*
使用fs.readFile()方法，可以读取指定文件中的内容，语法格式如下：

![png](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/a205835e3c0951ef.png)

参数解读：
- 参数1：**必选**参数，字符串，表示文件的路径。
- 参数2：可选参数，表示以什么**编码格式**来读取文件。
- 参数3：**必选**参数，文件读取完成后，通过回调函数拿到读取的结果。


示例代码：
```js
// 导入fs模块  来操作文件
const fs = require('fs');
// 调用fs.readFile()方法读取文件

// 参数1：读取文件的存放路径
// 参数2：读取文件时候采用的编码格式 一般默认指定utf8
// 参数3：回调函数，拿到读取失败和成功的结果 err dataStr
fs.readFile('./files/11.txt', 'utf8', function(err, dataStr) {
    // 2.1 打印失败的结果
    //如果读取成功，则err的值为null
    //如果读取失败，则err的值为错误对象 dataStr的值为undefined
    console.log(err);
    console.log('----------');
    // 2.2 打印成功的结果
    console.log(dataStr);
});
```

**成功：**

![png](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/e41f9d8c61cbe03b.png)

**失败：**

![png](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/58cc12468873bbe8.png)

优化写法：

>![png](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1a6b2b72ed2946a8.png)


## fs.writeFile( )的语法格式      *写入文件内容*
使用fs.writeFile()方法，可以向指定文件中写入内容。语法格式如下：

![png](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/adf82be76daf111c.png)

参数解读：

- 参数1：**必选**参数，指定一个文件路径的字符串，表示文件的存放路径。
- 参数2：**必选**参数，表示要写入的内容。
- 参数3：可选参数，表示以什么格式写入文件内容，默认utf8。
- 参数4：**必选**参数，文件写入完成后的回调函数。

代码示例：
```js
// 导入fs文件系统模块
const fs = require('fs');

// 调用fs.writeFile()方法，写入文件内容

//参数1：表示文件的存放路径
//参数2：表示要写入的内容
//参数3：省略
//参数4：回调函数

fs.writeFile('f:/files/2.txt', 'abc', function(err) {
    // 2.1如果文件写入成功，则err的值等于null
    // 2.2如果文件写入失败，则err的值等于一个错误对象
    console.log(err);
});
```

优化写法：

>![png](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/edd1798ffc5eec30.png)

## __dirname解决路径拼接错误 ##

有时候出现路径拼接错误是因为提供了./或者../开头的相对路径导致

>解决方法:
>- 提供一个完整路径
>   - 但是移植性差,不利用代码维护
>- 使用__dirname
>   - __dirname代表的是当前目录路径  


```js
fs.readFile(__dirname + '/files/2.txt', 'utf8', function(err, dataStr) {
    if (err) {
        return console.log('读取失败' + err.message);
    }
    console.log('读取成功' + dataStr);
});
```

# path路径模块 #

> **path模块**是Node.js官方提供的,用来**处理路径**的模块.它提供了一系列的方法和属性,用来满足用户对路径的处理需求.
>
>例如:
>- path.join()方法,用来**将多个路径片段拼接成一个完整的路径字符串**
>- path.basename()方法,用来从路径字符串中,将文件名解析出来

如果要在JavaScript代码中使用path模块来处理路径,则需要使用如下方式导入他:

```js

const path = require('path');

```

## path.join()的语法格式 ##
使用path.join()方法,可以把多个路径片段拼接为完整的路径字符串,语法格式如下:

```js

path.join([...paths])

```

>参数解读:
>- ..paths< string >路径片段的序列
>- 返回值:< string >


代码示例:

![png](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/2883715f9505b5a9.png)

## path.basename()的语法格式 ##

使用path.basename()方法,可以获取路径中的最后一部分,经常通过这个方法获取路径中的文件名,语法格式如下:

```js

path.basename(path[,ext])

```

>参数解读:
>- path`<string>`必选参数,表示一个路径的字符串
>- ext`<string>`可选参数,表示文件扩展名
>- 返回:`<string>`表示路径中的最后一部分

示例代码：

![png](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/e6b7240594ea3cf6.png)

## path.extname()代码示例 ##

>使用path.extname()方法，可以获取路径中的扩展名部分

![png](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/6f381844b033d682.png)

# http模块 #

> 什么是客户端？什么是服务器？
>
> 1. 在网络节点中，负责消耗资源的电脑，叫做**客户端**
> 2. <u>负责对外提供网络资源的电脑</u>，叫做**服务器**



http模块是Node.js官方提供的，用来创建web服务器的模块，通过http模块提供的http.createServer()方法，就能方便把一台普通的电脑，变成一台web服务器，从而对外提供web资源服务。

如果希望使用http模块创建Web服务器，则需要导入他：

```js
const http = require('http');
```

## 进一步理解http模块的作用

> 服务器和普通电脑的区别在于，服务器上安装了web服务器插件。例如：IIS，Apache等。通过安装这些服务器软件，就能把一台普通电脑变成一台web服务器。

> 在node.js中我们不需要使用IIS、Apache等这些第三方web服务器软件，因为我们可以基于Node.js提供的http模块，通过几行代码就能轻松手写一个服务器软件，从而对外提供web服务。

## 服务器相关概念

 ### 1.IP地址 ###

IP地址就是互联网上每台计算机的唯-地址,因此IP地址具有唯一性。 如果把“个人电脑”比作"-台电话”，那么"IP地址"就相当于“电话号码”，只有在知道对方IP地址的前提下，才能与对应的电脑之间进行数据通信。

IP地址的格式:通常用”点分十进制”表示成(a.b.c.d) 的形式，其中, a,b,c,d 都是0~255之间的十进制整数。例如:用点分十进表示的IP地址(192.168.1.1)

**注意：**

1. 互联网中每台Web服务器，都有自己的IP地址，例如:大家可以在Windows的终端中运行ping www baidu.com命令,即可查看到百度服务器的IP地址。
2. 在开发期间，自己的电脑既是一台服务器, 也是-个客户端，为了方便测试，可以在自己的浏览器中输入127.0.0.1 这个IP地址,就能把自己的电脑当做一台服务 器进行访问了.

### 2.域名和域名服务器 ###

尽管IP地址能够唯-地标记网络上的计算机，但IP地址是一长串数字,不直观，而且不便于记忆，于是人们又发明了另一套字符型的地址方案，即所谓的域名(Domain Name)地址

IP地址和域名是一对应的关系， 这份对应关系存放在一种叫做域名服务器(DNS, Domain name server)的电脑中。使用者只需通过好记的域名访问对应的服务器即可，对应的转换工作由域名服务器实现。因此，域名服务器就是提供IP地址和域名之间的转换服务的服务器。

**注意：**

1. 单纯使用IP地址，互联网中的电脑也能够正常工作。但是有了域名的加持，能让互联网的世界变得更加方便。
2. 在开发测试期间，**127.0.0.1** 对应的域名是**localhost**,它们都代表我们自己的这台电脑，在使用效果上没有任何区别。

### 3.端口号 ###

计算机中的端口号,就好像是现实生活中的门牌号一样。 通过门牌号,外卖小哥可以在整栋大楼众多的房间中，准确把外卖送到你的手中。
同样的道理，在一台电脑中,可以运行成百上千个web服务。每个web服务都对应-个唯的端口号. 客户端发送过来的网络请求,通过端口号,可以被准确地交给**对应的web服务**进行处理。

![image-20220628214815281](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220628214815281.png)

**注意：**

1. 每个端口号不能同时被多个web服务器占用
2. 在实际运用中URL中的80端口可以被省略

## 创建最基本的web服务器

**创建web服务器的基本步骤**

>1. 导入http模块
>2. 创建web服务器实例
>3. 为服务器实例绑定**require**事件，**监听客户端的请求**
>4. 启动服务器

### 步骤1-导入http模块 ###

如果希望在自己电脑上创建一个web服务器，从而对外提供web服务，则需要导入http模块：

```js
const http = require('http');
```

### 步骤2-创建web服务器实例 ###

调用**http.sreateServer()**方法，即可快速创建一个web服务器实例：

```js
const server = http.createServer();
```

### 步骤3-为服务器实例绑定request事件 ###

为服务器实例绑定request事件，即可监听客户端发送过来的网络请求：

```js
// 使用服务器实例的.on()方法，为服务器绑定一个request事件
sever.on('request',(req,res)=>{
    // 只要有客户端来请求我们的服务器，就会触发request事件，从而调用这个事件处理函数
    console.log('Someone visit our web server');
});
```

#### req请求对象 ####

只要服务器接收了客户端的请求，就会调用server.on()为服务器绑定的request事件处理函数。如果想在事件处理函数中，访问与客户端相关的**数据**或者**属性**，就可以使用如下方法：

```js
server.on('request',(req)=>{
    // req 是请求对象，它包含了与客户端相关的数据和属性，例如：
    // req.url 是客户端请求的url地址
    // req.method 是客户端的method请求类型
    const str = `Your request url is ${req.url},and request method is ${req.method}`;
    console.log(str);
});
```

#### res响应对象 ####

在服务器的request使事件处理函数中，如果想访问与服务器相关的**数据**或**属性**，可以使用如下方式：

```js
server.on('request', (req, res) => {
    //req是请求对象，包含了与客户端相关的数据和属性
    // req.url是客户端请求的url地址
    const url = req.url;
    // req.method是客户端请求的method类型
    const method = req.method
    const str = `Your request url is ${url},and request method is ${method}`;
    console.log(str);
    // 调用res.end()方法向客户端响应一些内容
    res.end(str);
});
```

#### 解决中文乱码问题 ####

当调用res.end()方法，向客户端发送中文内容时候，就会出现乱码问题，此时，需要手动设置内容的编码格式：

`res.setHeader('Content-Type', 'text/html;charset=utf-8');`

```js
server.on('request', (req, res) => {
    // 发送内容包含中文
    const str = `你请求的url地址是${req.url},请求的method类型是${req.method}`;
    // 调用res.setHeader('Content-Type', 'text/html;charset=utf-8')方法
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    // 调用res.end()方法向客户端响应一些内容
    res.end(str);
});
```

### 步骤4-启动服务器 ###

调用服务器实例的.listen()方法，即可启动当前的web服务器实例:

```js
// 调用server.listen(端口号，callback回调函数)方法，即可启动web服务器
server.listen(80,()=>{
    console.log('http server running at http//127.0.0.1');
});
```

## 根据不同的url相应不同的html内容 ##

**核心实现步骤：**

1. 获取**请求的url地址**
2. 设置**默认的响应内容**为<u>404 Not found</u>
3. 判断用户请求的是否为**/**或**/index.html**首页
4. 判断用户请求的是否为**/about.html**关于页面
5. 设置**Content-Type响应头**,防止中文乱码
6. 使用**res.end( )**把内容响应给客户端

```js
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {

    // 1. 获取请求的url地址
    const url = req.url;
    // 2. 设置默认的响应内容为<u>404 Not found</u>
    let content = `<h1>404 Not Found</h1>`;
    // 3. 判断用户请求的是否为/或/index.html首页
    // 4. 判断用户请求的是否为/about.html关于页面
    if (url === '/' || url === '/index.html') {
        content = `<h1>首页</h1>`;
    } else if (url === '/about.html') {
        content = `<h1>关于页面</h1>`;
    }
    // 5. 设置Content-Type响应头,防止中文乱码
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // 6. 使用res.end( )把内容响应给客户端
    res.end(content);
});
// 4. 启动服务器
server.listen(8080, function() {
    console.log('server running at http://127.0.0.1:8080');
});
```

# 模块化

## 什么是模块化？

**模块化**是指解决一个复杂问题时，自顶向下逐层**把系统划分为若干模块的过程**。对整个系统来说，**模块是可以组合，分解，更换的单元**。

编程领域中的模块化，就是遵守固定的规则，把一个大文件拆分成独立并相互依赖的多个小模块：

> 把代码进行模块化拆分的好处：
>
> 1. 提高了代码的**复用性**
> 2. 提高了代码的**可维护性**
> 3. 可以实现**按需加载**

## 模块化规范

**模块化规范**就是对代码进行模块化的拆分与组合时，需要遵循的那些规则。

例如：

- 使用什么样的语法格式来*引入模块*
- 在模块中使用什么样的语法格式*向外暴露成员*

**模块化的好处**：大家都遵循同样的模块化规范写代码，降低了沟通的成本，极大方便了各个模块之间的相互调用，利人利己。

## Node.js中模块的分类

Node.js中根据模块来源的不同，将模块分为了3大类，分别是：

- **内置模块**（内置模块是Node.js官方提供的，例如：fs，path，http等）
- **自定义模块**（用户创建的每个js文件，都是自定义模块）
- **第三方模块**（由第三方开发出来的模块，并非官方提供的内置模块，也不用用户创建的自定义模块。使用前要先下载）

## 加载模块

使用强大的require()方法，可以加在需要的内置模块，用户自定义模块，第三方模块进行使用。例如：

![image-20220630212456568](C:\Users\无敌暴龙战士\AppData\Roaming\Typora\typora-user-images\image-20220630212456568.png)
