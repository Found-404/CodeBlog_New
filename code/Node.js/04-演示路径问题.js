const fs = require('fs');


// 出现路径拼接错误是因为提供了./或者../开头的相对路径
// 如果要解决这个问题,可以提供一个完整的文件存放路径
// fs.readFile('K:/VScode/code/code/Node.js/files/2.txt', 'utf8', function(err, dataStr) {
//     if (err) {
//         return console.log('读取失败' + err.message);
//     }
//     console.log('读取成功' + dataStr);
// })

// 弊端:移植性非常差 ,不利于维护

fs.readFile(__dirname + '/files/2.txt', 'utf8', function(err, dataStr) {
    if (err) {
        return console.log('读取失败' + err.message);
    }
    console.log('读取成功' + dataStr);
});


// __dirname 表示当前文件所处的目录
console.log(__dirname);