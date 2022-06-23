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

});

// 定义css样式方法
function resolveCSS(htmlStr) {
    // 使用正则提取需要的内容
    const r1 = regStyle.exec(htmlStr);
    console.log(r1);

    // 将提取出来的字符串进行replace操作
    const newCss = r1[0].replace('<style>', '').replace('</style>', '');

    // 调用fs.writeFile()方法将提取的样式写入到clock目录中 index.css的文件中
    fs.writeFile(path.join(__dirname, './index.css'), newCss, function(err) {
        if (err) {
            return console.log('提取文件失败' + err.message);
        };
        console.log('写入css文件成功!');
    });
}