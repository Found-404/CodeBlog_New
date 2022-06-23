$(function() {
    // 1.全选 全不选功能
    // 就是把全选按钮(checkall)的状态赋值给三个小按钮(j-checkbox)
    // 时间可以使用change
    $(".checkall").change(function() {
        // $(this).prop('checked')
        // console.log($(this).prop('checked'));
        $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"));
        if ($(this).prop('checked')) {
            // 让所有的商品添加 .check-cart-item 类名
            $('.cart-item').addClass('check-cart-item');
        } else {
            // .check-cart-item移除
            $('.cart-item').removeClass('check-cart-item');
        }
    })

    // 2.如果小复选框被选中的个数等于3就应该把全选按钮选上，否则全选按钮不选。
    $('.j-checkbox').change(function() {
        // if (被选中的小的复选框个数 === 3) {
        //     就要选中全选按钮
        // }else{
        //     不要选中全选按钮
        // }
        // console.log($('.j-checkbox:checked').length);

        if ($('.j-checkbox:checked').length === $('.j-checkbox').length) {
            $('.checkall').prop('checked', true);
        } else {
            $('.checkall').prop('checked', false)
        }

        if ($(this).prop('checked')) {
            // 让当前的商品添加 .check-cart-item 类名
            $(this).parents('.cart-item').addClass('check-cart-item');
        } else {
            // .check-cart-item移除
            $(this).parents('.cart-item').removeClass('check-cart-item');
        }
    })

    // 3.增减商品数量模块首先声明一个变量，当我们点击+号(increment) ，就让这个值++，然后赋值给文本框。
    $('.increment').click(function() {
        // 得到当前兄弟的文本框的值
        var n = $(this).siblings('.itxt').val();
        // console.log(n);
        n++;
        $(this).siblings('.itxt').val(n);

        // 3.计算小记模块 根据文本框的值 乘以当前商品的价格 就是商品的小计
        // 进阶写法 parents()
        var p = $(this).parents('.p-num').siblings('.p-price').html();
        //console.log(p); //￥12.60 携带有￥ 用substr(1)截取
        p = p.substr(1);
        // console.log(p); // 12.60
        // 保留两位小数 toFixed(2)
        var price = (p * n).toFixed(2);
        // 小计模块 html(有值就是修改)
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + price);
        getSun();

    });

    $('.decrement').click(function() {
        // 得到当前兄弟的文本框的值
        var n = $(this).siblings('.itxt').val();
        if (n == 1) {
            return;
        }
        // console.log(n);
        n--;
        $(this).siblings('.itxt').val(n);
        // 3.计算小记模块 根据文本框的值 乘以当前商品的价格 就是商品的小计
        // var p = $(this).parent().parent().siblings('.p-price').html();
        // 进阶写法 parents()
        var p = $(this).parents('.p-num').siblings('.p-price').html();
        // console.log(p); //￥12.60 携带有￥ 用substr(1)截取
        p = p.substr(1);
        // console.log(p); // 12.60
        // 小计模块 html(有值就是修改)
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (p * n).toFixed(2));
        getSun();
    });
    // 用户修改文本框的值 计算小计模块
    $('.itxt').change(function() {
        // 先得到文本框里的值 乘以当前商品的单价
        var n = $(this).val()

        // 当前商品的单价
        var p = $(this).parents('.p-num').siblings('.p-price').html();
        // console.log(p); //￥12.60 携带有￥ 用substr(1)截取
        p = p.substr(1); // 把￥去掉
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (p * n).toFixed(2));
        getSun();
    })

    // 5.计算总计和总额模块
    getSun(); //先调用一次 计算一次

    function getSun() {
        var count = 0; // 计算总件数
        var money = 0; // 计算总件钱
        $('.itxt').each(function(i, ele) {
            count += parseInt($(ele).val());
        })
        $('.amount-sum em').text(count); //总件数

        $('.p-sum').each(function(i, ele) {
            money += parseFloat($(ele).text().substr(1));
        });
        $('.price-sum em').text('￥' + money.toFixed(2)) //总钱数
    }

    // 6. 删除商品模块
    // (1) 商品后面的删除按钮 
    $('.p-action a').click(function() {
        // 删除当前商品
        $(this).parents('.cart-item').remove();
        getSun();
    });

    // (2) 删除选中的商品
    $('.remove-batch').click(function() {
        // 删除的是小的复选框选中的商品
        $('.j-checkbox:checked').parents('.cart-item').remove();
        getSun();
    });

    // (3) 清空购物车删除全部商品
    $('.clear-all').click(function() {
        $('.cart-item').remove();
        getSun();
    })

})