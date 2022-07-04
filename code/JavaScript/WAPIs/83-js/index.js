window.addEventListener('load', function() {
    // 1.获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    // 图片的宽度 就是走的距离
    var focusWidth = focus.offsetWidth;
    // 2.鼠标经过focus 显示隐藏按钮
    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null; //清除定时器变量
    });
    focus.addEventListener('mouseleave', function() {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function() {
            // 手动调用点击事件
            arrow_r.click();
        }, 2000)
    });
    // 3.动态生成小圆圈 有几张图片 就生成几张
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    // console.log(ul.children.length); 4
    for (var i = 0; i < ul.children.length; i++) {
        // 创建li
        var li = document.createElement('li');
        // 记录当前小圆圈索引号 通过自定义属性来做
        li.setAttribute('index', i);
        // 把li插入到ol
        ol.appendChild(li);
        // 4.小圆圈排他思想 生成小圆圈同时绑定事件
        li.addEventListener('click', function() {
            // 把所有li的类名清除 就是current
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // 留下自己当前的li 设置current
            this.className = 'current';
            // 5.点击小圆圈 移动图片
            // ul移动距离 小圆圈索引号 乘以 图片宽度 注意负值 往左走
            // 当我们点击了li 就拿到当前li的索引号
            var index = this.getAttribute('index');
            // 当我们点击了某个li 就要把这个li索引号给num
            num = index;
            // 当我们点击了某个li 就要把这个li索引号给circle
            circle = index;
            // num = circle = index;连写写法
            // var focusWidth = focus.offsetWidth;
            console.log(focusWidth);
            animate(ul, -index * focusWidth);
        });
    }
    // 把ol里面的第一个li类名设置为current
    ol.children[0].className = 'current';
    // 6.克隆第一张图片 放到ul最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // 7.点击右侧按钮 图片滚动一张
    var circle = 0; //控制小圆圈播放
    var num = 0;
    // flag节流阀
    var flag = true;
    arrow_r.addEventListener('click', function() {
        if (flag) {
            flag = false; //关闭节流阀
            // 如果走到了最后一张复制的图片  要快速恢复left改为0
            if (num == ul.children.length - 1) {
                // ul孩子的长度减一
                num = 0;
                ul.style.left = '0px';
            }
            num++;
            animate(ul, -num * focusWidth, function() {
                flag = true; //打开节流阀
            });
            // 8.点击右侧按钮 小圆圈跟随变化一起变化 可以在声明一个变量控制小圆圈的播放
            circle++;
            // 如果circle == 4;说明走到我们克隆的这张图片了 就复原0
            // ol.children.length就是小圆圈的个数
            if (circle == ol.children.length) {
                circle = 0;
            }
            // 调用函数
            circleChange();
        }
    })

    // 8.点击左侧按钮 图片滚动一张
    arrow_l.addEventListener('click', function() {
        if (flag) {
            flag = false;
            // 如果走到了最后一张复制的图片  要快速恢复left改为0
            if (num == 0) {
                // ul孩子的长度减一
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            // 8.点击右侧按钮 小圆圈跟随变化一起变化 可以在声明一个变量控制小圆圈的播放
            circle--;
            // 如果circle <0;说明第一张图片 小圆圈要改为第四个小圆圈
            // ol.children.length就是小圆圈的个数

            // if (circle < 0) {
            //     circle = ol.children.length - 1;
            // }
            circle = circle < 0 ? ol.children.length - 1 : circle;

            // 调用函数
            circleChange();
        }
    });

    // 将相同部分封装成函数
    function circleChange() {
        // 先清除其余小圆圈current类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 留下当前小圆圈类名
        ol.children[circle].className = 'current';
    }
    // 10.自动播放轮播图
    var timer = setInterval(function() {
        // 手动调用点击事件
        arrow_r.click();
    }, 2000)
})