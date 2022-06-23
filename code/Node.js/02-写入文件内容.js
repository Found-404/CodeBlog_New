// 导入fs文件系统模块
const fs = require('fs');

// 调用fs.writeFile()方法，(自动创建文件)写入内容

//参数1：表示文件的存放路径
//参数2：表示要写入的内容
//参数3：省略
//参数4：回调函数

fs.writeFile('./files/2.txt', 'okabc', function(err) {
    // 2.1如果文件写入成功，则err的值等于null
    // 2.2如果文件写入失败，则err的值等于一个错误对象
    // console.log(err);
    if (err) {
        return console.log('写入失败' + err.message);
    }
    // 自动创建文件
    console.log('文件写入成功');

});