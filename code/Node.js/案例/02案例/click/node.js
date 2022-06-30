// 1.1导入fs文件系统模块
const fs = require('fs');
// 1.2导入path路径处理模块
const path = require('path');

// 匹配<style>正则
//1.3定义正则表达式分别匹配<style></style>和<script></script>标签

// \s匹配空白字符 \S匹配任意非空字符

const regStyle = /<style>[\s\S]*<\/style>/;

const regScript = /<script[\s\S]*<\/script>/;

//读取要被处理的html文件

fs.readFile(path.join(__dirname, './index.html'), 'utf8', function(err, dataStr) {
    // 读取html文件
    if (err) {
        return console.log('读取html文件失败!' + err.message);
    }
    // 读取成功后,调用对应三个方法,分别拆分出css,js,html文件
    resolveCSS(dataStr);
    resolveJS(dataStr);
    resolveHtml(dataStr);
});

// 定义css样式方法
function resolveCSS(htmlStr) {
    // 使用正则提取需要的内容
    const r1 = regStyle.exec(htmlStr);
    // console.log(r1);

    // 将提取出来的字符串进行replace操作
    const newCss = r1[0].replace('<style>', '').replace('</style>', '');

    // 调用fs.writeFile()方法将提取的样式写入到clock目录中 index.css的文件中
    fs.writeFile(path.join(__dirname, './index.css'), newCss, function(err) {
        if (err) {
            return console.log('提取文件失败' + err.message);
        };
        console.log('写入css文件成功!');
    });
};

// 定义js提取方法
function resolveJS(htmlStr) {
    // 使用正则提取需要的内容
    const r2 = regScript.exec(htmlStr);
    // console.log(r2);

    // 将提取出来的字符串进行replace操作
    const newJs = r2[0].replace('<script>', '').replace('</script>', '');

    // 调用fs.writeFile()方法将提取的样式写入到clock目录中 index.css的文件中
    fs.writeFile(path.join(__dirname, './indexNew.js'), newJs, function(err) {
        if (err) {
            return console.log('提取文件失败' + err.message);
        };
        console.log('写入js文件成功!');
    });
};

// 定义一个转换内敛引入css和js方法变成外部引入的方法
function resolveHtml(htmlStr) {

    // 将返回回来的数据（字符串）使用replace方法替换
    const newHtml = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css">').replace(regScript, '<script src="./indexNew.js"></script>')

    // 将替换之后的数据再写入到新的html文件中
    fs.writeFile(path.join(__dirname, './newHtml.html'), newHtml, function(err) {
        if (err) {
            return console.log('写入文件失败' + err.message);
        }
        console.log('写入html文件成功!');
    })
}