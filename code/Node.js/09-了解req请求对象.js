// 1. 导入http模块
const http = require('http');

// 2. 创建web服务器实例
const server = http.createServer();

// 3. 为服务器实例绑定require事件，监听客户端的请求
server.on('request', function(req, res) {

    // 发送内容包含中文
    const str = `你请求的url地址是${req.url},请求的method类型是${req.method}`;
    // 调用res.setHeader('Content-Type', 'text/html;charset=utf-8')方法
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    // 调用res.end()方法向客户端响应一些内容
    res.end(str);
});

// 4. 启动服务器
server.listen(80, function() {
    console.log('server running at http://127.0.0.1');
});