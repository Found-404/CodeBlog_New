$(function() {
    // 当我们点击了小li 此时不需要执行 页面滚动事件里面的 li 的背景选择 添加 current
    // 节流阀  互斥锁 
    var flag = true;
    // 1.显示隐藏电梯导航
    var toolTop = $('.recommend').offset().top;
    toggleTool(); // 调用函数
    // 封装函数 避免刷新后消失bug
    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $('.fixedtool').fadeIn();
        } else {
            $('.fixedtool').fadeOut();
        }
    }
    $(window).scroll(function() {
        toggleTool();
        // 3.页面滚动到某个内容区域,左侧电梯导航小li相应添加和删除current类名

        if (flag) {
            $(".floor .w").each(function(i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    console.log(i);
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();

                }
            })
        }



    });
    // 2.点击电梯导航页面可以滚动到相应的内容区域
    $('.fixedtool li').click(function() {
        flag = false;
        // 当每次点击li 就需要计算出页面要去的位置
        // 选出对应索引号的内容区盒子 计算他的offset().Top;
        var current = $('.floor .w').eq($(this).index()).offset().top;
        // 页面动画滚动效果
        $("body, html").stop().animate({
            scrollTop: current
        }, function() {
            flag = true;
        });
        // 点击之后让当前的li添加current类 兄弟移除current类
        $(this).addClass('current').siblings().removeClass();
    })
})