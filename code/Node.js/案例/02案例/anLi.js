// 1.1导入http模块
const http = require('http');
// 1.2导入fs文件系统模块
const fs = require('fs');
// 1.3导入path模块
const path = require('path');
const { log } = require('console');


// 2.1创建web服务器
const server = http.createServer();

// 2.2创建web服务器的request事件
server.on('request', (req, res) => {
    //**3.1获取到客户端请求的url地址
    const url = req.url;
    // /click/NewHtml.html
    console.log(url);
    //**3.2把请求的URL地址映射为具体文件的存放路径
    // const fpath = path.join(__dirname, url);
    // ⬇⬇⬇修改⬇⬇⬇
    // 5.1 定义一个空白的文件存放路径
    let fpath = ``;
    if (url === '/') {
        fpath = path.join(__dirname, './click/NewHtml.html');
    } else {
        fpath = path.join(__dirname, '/click', url)
    }

    //--4.1根据“映射”过来的文件路径读取文件内容
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        //--4.2 读取失败 向客户端响应固定的”错误信息“
        if (err) {
            return res.end('404 Not found');
        };
        //--4.3 读取成功 将读取成功的内容 响应给客户端
        res.end(dataStr);
    });




});

// 2.3启动服务器
server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
});