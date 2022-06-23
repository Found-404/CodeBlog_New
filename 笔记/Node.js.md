# 什么是Node.js

**Node.js**是一个基于Chrome V8引擎的JavaScript运行环境

## Node.js中的JavaScript运行环境

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1655822357450-119a84ee-f87e-471f-adeb-96b9c664695e.png)

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

# 什么是fs文件系统模块

fs模块是Node.js官方提供的，用来操作文件的模块，它提供了一系列的方法和属性。用来满足用户对文件的操作需求。

例如：
- **fs.readFile( )**方法，用来读取指定文件中的内容
- **fs.writeFile( )**方法，用来向指定文件中写入内容

如果在javaScript代码中，使用fs模块来操作文件，则需要使用如下方式导入他：

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1655904379652-fb60eeb1-f9a9-4703-864e-e83eea12097f.png)

## fs.readFile()的语法格式      *读取文件内容*
使用fs.readFile()方法，可以读取指定文件中的内容，语法格式如下：

![png](https://i.bmp.ovh/imgs/2022/06/22/a205835e3c0951ef.png)

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

![png](https://i.bmp.ovh/imgs/2022/06/22/e41f9d8c61cbe03b.png)

**失败：**

![png](https://i.bmp.ovh/imgs/2022/06/22/58cc12468873bbe8.png)

优化写法：

>![png](https://i.bmp.ovh/imgs/2022/06/22/1a6b2b72ed2946a8.png)


## fs.writeFile( )的语法格式      *写入文件内容*
使用fs.writeFile()方法，可以向指定文件中写入内容。语法格式如下：

![png](https://i.bmp.ovh/imgs/2022/06/22/adf82be76daf111c.png)

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

>![png](https://i.bmp.ovh/imgs/2022/06/22/edd1798ffc5eec30.png)

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

![png](https://i.bmp.ovh/imgs/2022/06/23/2883715f9505b5a9.png)

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

![png](https://i.bmp.ovh/imgs/2022/06/23/e6b7240594ea3cf6.png)

## path.extname()代码示例 ##

>使用path.extname()方法，可以获取路径中的扩展名部分

![png](https://i.bmp.ovh/imgs/2022/06/23/6f381844b033d682.png)