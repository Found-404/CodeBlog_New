window.addEventListener('load', function() {
    // 1.获取元素
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    // 获得focus的宽度
    var w = focus.offsetWidth;
    var ol = focus.children[1];
    // 2.利用定时器自动轮播图片
    var index = 0;
    var timer = setInterval(function() {
            index++;
            var translateX = -index * w;
            ul.style.transition = 'all 0.5s';
            ul.style.transform = 'translateX(' + translateX + 'px)'
        }, 2000)
        // 等着过渡完成之后再去判断 监听过渡完成的事件
    ul.addEventListener('transitionend', function() {
        // 无缝滚动
        if (index >= 3) {
            index = 0;
            // 去掉过渡效果 让ul 快速跳到目标位置
            ul.style.transition = 'none';
            //利用最新的索引号乘以宽度 去滚动
            var translateX = -index * w;
            ul.style.transform = 'translateX(' + translateX + 'px)'
        } else if (index < 0) {
            index = 2;
            ul.style.transition = 'none';
            //利用最新的索引号乘以宽度 去滚动
            var translateX = -index * w;
            ul.style.transform = 'translateX(' + translateX + 'px)'
        }
        // 3.小圆点跟随变化
        // 把ol里面1i带有current类名的选出来去掉类名remove
        ol.querySelector('.current').classList.remove('current');
        // 让前面索引号的li加上 current add
        ol.children[index].classList.add('current');

    });

    // 4.手指滑动轮播图
    // 触摸元素touchstart: 获取 手指初始坐标
    var flag = false;
    var startX = 0;
    var moveX = 0; //后面我们会使用这个距离所以要定义一个全局变量
    ul.addEventListener('touchstart', function(e) {
        startX = e.targetTouches[0].pageX;
        // 手指触摸时候就停止定时器
        clearInterval(timer);
    })

    // 移动手指touchmove: 计算手指的滑动距离e，并且移动盒子
    ul.addEventListener('touchmove', function(e) {
        // 计算移动距离
        moveX = e.targetTouches[0].pageX - startX;
        // 移动盒子:盒子原来的位置＋手指移动的距离
        var translateX = -index * w + moveX;
        // 手指拖动不需要动画效果 取消过渡效果
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translateX + 'px)'
        flag = true; //如果用户手指移动过我们再判断否则不判断效果
        e.preventDefault(); //阻止屏幕滚动默认行为
    })

    // 手指离开 根据移动距离判断是回弹还是播放上一张下一张
    ul.addEventListener('touchend', function(e) {
        if (flag) {
            // (1)如果移动距离大于50像素我们就播放上一张或者下一张
            if (Math.abs(moveX) > 50) {
                // 如果是右划就是播放上一张moveX是正值
                if (moveX > 0) {
                    index--;
                } else {
                    // 如果是左划就是播放下一张moveX是负值
                    index++;
                }
                var translateX = -index * w;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + translateX + 'px)';
            } else {
                // (2)如果移动距离小于50像索我们就回弹
                var translateX = -index * w;
                ul.style.transform = 'translateX(' + translateX + 'px)';
            }
        }
        // 手指离开开启定时器
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            var translateX = -index * w;
            ul.style.transition = 'all 0.5s';
            ul.style.transform = 'translateX(' + translateX + 'px)'
        }, 2000)
    })
})