function myAJAX(data) {
    // 声明一个数组
    var arr = [];
    // 遍历对象
    for (key in data) {
        // 将数据存放在str并且以=分割
        var str = key + '=' + data[key];
        // 将str添加进arr数组
        arr.push(str);
    };
    // 返回被改变成字符串的数组并且以&分割
    return arr.join('&');
};


// 测试
// var res = myAJAX({
//     nam: 'zs',
//     age: '20'
// });
// console.log(res);

function myIt(options) {
    var xhr = new XMLHttpRequest();

    // 把外界传递过来的参数对象转换为 查询字符串
    var qs = myAJAX(options.data);

    if (options.method.toUpperCase() === 'GET') {
        // 发送GET请求
        xhr.open(options.method, options.url + '?' + qs);
        xhr.send();
    } else if (options.method.toUpperCase() === 'POST') {
        // 发送POST请求
        xhr.open(options.method, options.url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(qs);
    }


    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var result = JSON.parse(xhr.responseText)
            options.success(result);
        }
    }
}