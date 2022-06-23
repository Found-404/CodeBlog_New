// 导入fs模块
const fs = require('fs');

// 调用fs.readFile()读取文件内容
fs.readFile('./files/成绩.txt', 'utf8', function(err, dataStr) {
    // 判断是否读取成功
    if (err) {
        return console.log('读取成功' + err.message);
    };
    console.log('读取成功' + dataStr);


    // 1.先将成绩数据字符串按照空格分割成数组
    // 2.循环分割后的数据，对每一项数据进行字符串的替换操作
    // 3.把新数据中的每一项进行合并得到一个新字符串
    const arrOld = dataStr.split(' ');

    const arrNew = [];
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ':'))
    });


    // join将数组转换为字符串并用换行符分割
    var newStr = arrNew.join('\r\n');
    console.log(newStr);


    // 调用fs.writeFile()方法，(自动创建文件)写入内容
    fs.writeFile('./files/成绩ok.txt', newStr, function(err) {
        if (err) {
            return console.log('写入失败' + err.message);
        }
        console.log('写入成功');
    })



});