# ES6 #

## let，const新的声明方式🧐🧐 ##

### Let ###

> 1. 变量不能重复声明
> 2. 块级作用域
> 3. 不存在变量提升
> 4. 不影响作用域链

### const ###

> 1. 一定要赋初始值
> 2. 一般常量是用大写（潜规则）
> 3. 常量的值不能修改
> 4. 块级作用域
> 5. 对于数组和对象的元素修改，不算是对常量的修改，不会报错

## 变量的解构赋值 ##

> ES6 允许按照一定模式从数组和对象中提取值,对变量进行赋值这被称为**结构赋值**

**数组的结构：**

```js
        //1.数组的结构
        const f4 = ['小沈阳', '刘能', '赵四', '宋小宝'];
        let [xiao, liu, zhao, song] = f4;
        console.log(xiao);
        console.log(liu);
        console.log(zhao);
        console.log(song);
```

**对象的结构：**

```js
let {
     name,
     age,
     xiaopin
} = zhao;
   console.log(name);
   console.log(age);
   console.log(xiaopin);
   xiaopin();
```

相当于 zhao.xiaopin(); 替换成了 xiaopin( );不用重复书写zhao.

## 模板字符串 ##

不同于es5中的字符串用+拼接，es6的模板字符串可以使用``符号和${变量名}进行拼接

```js
        let str = `<ul>
                    <li>沈腾</li>
                    <li>玛丽</li>
                    <li>魏翔</li>
                    </ul>`;

        // 3.变量拼接
        let lovest = '魏翔';
        let out = `将${lovest}替换成lovest`;
        console.log(out);
```

## 对象的简化写法 ##

> ES6 允许在大括号内直接写入变量和函数 作为对象的属性和方法，这样的书写更加简洁

```js
        let name = '尚硅谷';
        let change = function() {
            console.log('我可以改变你');
        };
        const school = {
            name,
            change,
            //旧的写法:
            // import: function() {
            //     console.log('声明方法');
            // }

            // es6写法:
            import () {
                console.log('声明方法');
            }
        }
        console.log(school);
```

## 箭头函数以及声明特点🏹🏹 ##

> es6 允许使用[箭头] (=>) 定义函数.

**声明一个函数：**

```js
        let fn = (a, b) => {
            return a + b;
        };
        //调用函数
        let reslut = fn(1, 2);
        console.log(reslut); //3
```

1. this是静态的,this始终是指向函数声明时所在作用域下的this的值（其父级作用域的this）
2. 不能做为构造实例化对象  就是无法构造函数
3. 不能使用arguments 变量

### 箭头函数的简写 ###

**(1)省略小括号,当形参有且只有一个时候**

```js
        let add = n => {
            return n + n;
        };
        console.log(add(1)); //2
```

**(2)省略花括号,当代码只有一条语句时候,此时return必须省略**

而且语句的执行结果就是函数的返回值

```js
        let pow = n => n * n;
        console.log(pow(9)); //81
```

### 箭头函数的this指向问题

this是静态的,this始终是指向函数声明时所在作用域下的this的值**（其父级作用域的this）**

何为父级作用域的this，一个简单的例子：

```js
        function foo() {
            setTimeout(() => {
                console.log('id', this.id);
            }, 500);
            // setTimeout(function() {
            //     console.log('id', this.id);
            // }, 500)
        };
        var id = 10;
        foo.call({
            id: 50
        });
```

- *箭头函数*的结果是50

- *普通函数*的结果是10

**foo.call(  )**方法改变了foo函数的this指向，定时器中的函数this指向的是window，所以普通函数的**this.id**为window下的10。而箭头函数因为foo函数的this改变使得其this也改变成了对象**{id:50}**

## 函数参数的默认值和rest参数

### 函数参数的默认值 ###

> ES6 允许给函数参数赋值初始值

1. 形参初始值  具有默认值的参数  一般位置要靠后(潜规则)

```js
        function add(a, b, c = 2) { //此处给形参设置默认值
            return a + b + c;
        };
        let result = add(1, 2);
        console.log(result);
        //当没有第三个实参传入时,可以在形参中设置默认值,否则就是NaN
```

2. 与结构赋值结合

```js
        function connect({
            host,
            username,
            password,
            port
        }) {
            console.log(host);
            console.log(username);
            console.log(password);
            console.log(port);
        }
        connect({
            host: '',
            username: 'root',
            password: 'root',
            port: 3306,
        });
```

### rest参数

es6 引入 **rest** 参数 用于获取函数的实参 用来替代**arguments**

es5获取函数实参的方法是 **arguments**

```js
        // rest 参数
        function date(...args) {
            console.log(args); //filter some every map方法
        };
        date('黑', '白', '灰'); //数组
```

rest参数 必须 放在**参数末尾**

```js
        //rest参数 必须 放在参数最后
        function fn(a, b, ...args) {
            console.log(a);
            console.log(b);
            console.log(args);
        };
        fn(1, 2, 3, 4, 5, 6);
```

## 扩展运算符

**[...] **扩展运算符能将[数组]转换为逗号分割的**[参数序列]**

```js
        // 声明一个数组 ... 
        const colors = ['黑', '白', '灰'];
        console.log(colors); // ['黑', '白', '灰']
        console.log(...colors); // 黑 白 灰
```

### 扩展运算符的运用

```html
    <div></div>
    <div></div>
    <div></div>
    <script>
        //1. 数组的合并 黑 白 灰
        const anSe = ['黑', '白', '灰'];
        const liangSe = ['红', '黄', '绿'];
        //老方法 使用concat拼接数组
        // const heBing = anSe.concat(liangSe);
        const heBing = [...anSe, ...liangSe];
        console.log(heBing);

        //2.数组的克隆
        const q1 = ['E', 'G', 'M'];
        const q2 = [...q1];
        console.log(q2);

        //3.将伪数组转换为真正的数组
        const divs = document.querySelectorAll('div');
        console.log(divs); //此时还为伪数组
        const divArr = [...divs]; //转换
        console.log(divArr);
    </script>
```

