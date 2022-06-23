function animate(obj, target, callback) {
    // console.log(callback); callback = function(){} 调用的时候callback()

    clearInterval(obj.timer);
    obj.timer = setInterval(function() {

        // 步长值写道定时器里面
        // 把步长值改为整数 不要出现小数
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            //停止动画 停止定时器
            clearInterval(obj.timer);
            //回调函数写道定时器结束里面
            // if (callback) {
            //     //调用函数
            //     callback();
            // }
            callback && callback();
            // 短路运算
        }
        // 把每次加一这个步长值改为慢慢变小的值
        // 步长公式：(目标值 - 现在的位置)/10
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 20)
}