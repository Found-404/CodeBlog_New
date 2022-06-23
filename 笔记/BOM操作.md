# BOM操作 #

![png](https://img-blog.csdnimg.cn/d4d075ee9982467290c30398aa3eee59.png)
![png](https://img-blog.csdnimg.cn/4d2bfa28bf4148d987d27444373e4d19.png)

## 什么是BOM？ ###

BOM`（Browser Object Model）`即浏览器对象模型，它提供了独立于内容而与浏览器窗口进行交互的对象，其顶级对象是 window，并且每个对象都提供了很多方法与属性

## location对象 ##

window 对象给我们提供了一个 location 属性用于获取或设置窗体的 URL，并且可以用于解析 URL

|location对象属性|返回值|
|:-:|:-:|
|location.href|获取或设置整个url地址|
|location.host|返回主机(域名) ~~www.baidu.com~~|
|location.port|获取或设置整个url地址|
|location.pathname|返回路径|
|location.search|返回参数|
|location.hash|返回片段 #后面内容，常用于链接锚点|
|location.protocol|返回协议|



|location对象方法|返回值|
|:-:|:-:|
|location.assign()|跟href一样，可以跳转页面(也称为重定向页面)|
|location.replace()|替换当前页面，因为不记录历史，所以不能后退页面|
|location.reload()|重新加载页面，相当于刷新按钮或者f5 如果参数为true 强制刷新ctrl+f5|


---


### 点击按钮跳转页面案例: ###

```html
<body>
    <button>location</button>
</body>
<script>
    let btn = document.querySelector('button');
    btn.onclick = function() {
         location.href = 'https://blog.csdn.net/WYF857446152/article/details/124860285?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165595085816782391824458%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=165595085816782391824458&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-124860285-null-null.142^v20^control,157^v15^new_3&utm_term=bom%E6%93%8D%E4%BD%9C&spm=1018.2226.3001.4187';
    }
</script>
```
### location.search接收返回的参数实现数据交互案例： ###
```html
<body>
    <form action="64-index.html">
        用户名: <input type="text" name="uname">
        <input type="submit" value="登录">
    </form>
</body>
```
```html
<body>
    <div></div>
    <script>
        console.log(location.search); // ?uname=andy
        // 1.先去掉？ substr('起始的位置',截取几个字符);
        var params = location.search.substr(1); // uname=andy
        console.log(params);
        // 2.利用等号把字符串分割为数组 split('=');
        var arr = params.split('=');
        console.log(arr);
        var div = document.querySelector('div');
        // 3.把数据写进div中
        div.innerHTML = arr[1] + '欢迎您!';
    </script>
</body>
```
## navigator对象 ##

navigator 对象包含有关浏览器的信息，它有很多属性，我们最常用的是 `userAgent`，该属性可以返回由客户机发送服务器的 `user-agent` 头部的值。

## history对象 ##
window对象给我们提供了一个 history对象，与浏览器历史记录进行交互。该对象包含用户（在浏览器窗口中）访问过的URL。

|history对象方法|返回值|
|:-:|:-:|
|back()|可以后退功能|
|forward()|前进功能|
|go(参数)|前进后退功能 参数如果是1前进一个页面如果是-1后退一个页面|