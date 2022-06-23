window.addEventListener('load', function() {
    // 获取元素

    // 点击省份切换模块
    var region = document.querySelector('.region');
    var centerALL = document.querySelector('.centerALL');
    // console.log(centerALL);
    // console.log(region);
    var region_center = document.querySelector('.region_center').children[0];
    console.log(region_center.children[0]);

    // 获取所有省份
    var ul_region = document.querySelector('#ul_region');
    var ul_region2 = document.querySelector('#ul_region2');

    // 省份点击出现box界面
    region.addEventListener('click', function() {
        document.querySelector('.regions').style.display = 'block';
        this.className = 'region flex_center border_region';
    });
    centerALL.addEventListener('blur', function() {
        document.querySelector('.regions').style.display = 'none';
        region.className = 'region flex_center';
    });


    // 渲染页面
    var region_bottom = document.querySelector('.region_bottom');
    console.log(region_bottom);
    for (let i = 0; i < cisty.length; i++) {
        let lis = document.createElement('li');
        lis.innerHTML = cisty[i];
        region_bottom.children[1].appendChild(lis);
    };

    for (let i = 0; i < shengFen.length; i++) {
        let lis = document.createElement('li');
        lis.innerHTML = shengFen[i];
        region_bottom.children[0].appendChild(lis);
    };


    // 为每个省份添加点击事件
    Array.from(ul_region.children).forEach(function(item, index) {
        item.addEventListener('click', function() {
            for (let i = 0; i < ul_region.children.length; i++) {
                ul_region.children[i].className = '';
            };
            item.className = 'Selected_li';
            if (item.innerHTML == '北京市' || item.innerHTML == '天津市' || item.innerHTML == '上海市') {
                region.children[0].innerHTML = item.innerHTML;
                region_center.children[1].style.display = 'none';
            } else {
                region_center.children[1].style.display = 'block';
                region_center.children[0].className = 'xunZhongNot';
                region_center.children[1].className = 'xunZhong';

                region_bottom.children[0].style.display = 'none';
                region_bottom.children[1].style.display = 'flex';
            }
        });
    });

    // 为每个城市选择添加点击事件
    for (let i = 0; i < region_bottom.children[1].children.length; i++) {
        region_bottom.children[1].children[i].addEventListener('click', function() {
            console.log(111);
            region.children[0].innerHTML = region_bottom.children[1].children[i].innerHTML;
        })
    }



    // 点击城市变色
    Array.from(ul_region2.children).forEach(function(item, index) {
        item.addEventListener('click', function() {
            for (let i = 0; i < ul_region2.children.length; i++) {
                ul_region2.children[i].className = '';
            };
            item.className = 'Selected_li';
        });
    });




    Array.from(region_center.children).forEach(function(item, index) {
        item.addEventListener('click', function() {
            for (let i = 0; i < region_center.children.length; i++) {
                region_center.children[i].className = 'xunZhongNot';
            };
            item.className = 'xunZhong';
            for (let i = 0; i < region_bottom.children.length; i++) {
                region_bottom.children[i].style.display = 'none';

            }
            region_bottom.children[index].style.display = 'flex';
        });
    });










    // 点击关闭按钮
    // 获取元素
    var region_close = document.querySelector('.region_close');
    region_close.addEventListener('click', function() {
        document.querySelector('.regions').style.display = 'none';
        region.className = 'region flex_center';
    });



    // 鼠标悬停登录显示box弹窗
    // 获取元素
    var login_region = document.querySelector('.login_first').children[0];
    var login_window = document.querySelector('.login_window');

    console.log(login_region);
    console.log(login_window);
    login_region.addEventListener('mouseenter', function() {
        this.className = 'login_region after_kong';
        login_window.style.display = 'block';


    });
    login_region.addEventListener('mouseleave', function() {
        this.className = '';
        login_window.style.display = 'none';
    });



    // 签到有礼
    // 获取元素
    var signin = document.querySelector('.signin');
    console.log(signin.children[2]);
    signin.addEventListener('mouseenter', function() {
        signin.children[2].style.display = 'flex';
    });
    signin.addEventListener('mouseleave', function() {
        signin.children[2].style.display = 'none';
    });


    // 我的特卖
    // 获取元素
    var special = document.querySelector('.special');
    console.log(special);
    special.addEventListener('mouseenter', function() {
        this.className = 'special border_region';
        this.children[2].style.display = 'block';
        this.children[1].className = 'arrow arrow_after';
    });
    special.addEventListener('mouseleave', function() {
        this.className = 'special';
        this.children[2].style.display = 'none';
        this.children[1].className = 'arrow';
    });


    //会员俱乐部
    // 获取元素
    var member = document.querySelector('.member');
    console.log(member);
    member.addEventListener('mouseenter', function() {
        this.className = 'member border_region';
        this.children[2].style.display = 'flex';
        this.children[1].className = 'arrow arrow_after';
    });
    member.addEventListener('mouseleave', function() {
        this.className = 'member';
        this.children[2].style.display = 'none';
        this.children[1].className = 'arrow';
    });


    // 客服服务
    // 获取元素
    var customer = document.querySelector('.customer');
    console.log(customer);
    customer.addEventListener('mouseenter', function() {
        this.className = 'customer border_region';
        this.children[2].style.display = 'flex';
        this.children[1].className = 'arrow arrow_after';
    });
    customer.addEventListener('mouseleave', function() {
        this.className = 'customer';
        this.children[2].style.display = 'none';
        this.children[1].className = 'arrow';
    });




    // 商品分类模块----------------------------------------------------------------
    // 获取元素
    var left = document.querySelector('.header_bottom').querySelector('.left');

    var open_detailed = document.querySelector('.open_detailed');

    var open_lis = open_detailed.children[0].children;

    var open_sort = document.querySelector('.open_sort');
    // console.log(open_detailed);
    // 渲染页面
    for (let i = 0; i < getTopCategor.length; i++) {
        // console.log(getTopCategor[i].name);
        var lis = document.createElement('li');
        lis.innerHTML = getTopCategor[i].name;
        left.children[1].children[0].appendChild(lis);
    };

    left.addEventListener('mouseenter', function() {
        left.children[1].children[0].style.height = '530px';
    });
    left.addEventListener('mouseleave', function() {
        left.children[1].children[0].style.height = '0px';
    });

    // 为每个li设置自定义属性
    for (let i = 0; i < open_detailed.children[0].children.length; i++) {
        open_detailed.children[0].children[i].setAttribute('data-index', i);
    }

    // 为每个li添加鼠标悬停样式
    Array.from(left.children[1].children[0].children).forEach(function(item, index) {
        item.addEventListener('mouseenter', function() {
            for (let i = 0; i < left.children[1].children[0].children.length; i++) {
                left.children[1].children[0].children[i].style.backgroundColor = '#f10180';
                left.children[1].children[0].children[i].style.color = '#fff';
            }
            item.style.backgroundColor = '#fff';
            item.style.color = '#f10180';
            open_detailed.style.display = 'block';
            for (let i = 0; i < open_lis.length; i++) {
                open_lis[i].style.display = 'none';
            };
            // lis[index].style.display = 'block';
            open_lis[index].style.display = 'block';
        });
        open_sort.addEventListener('mouseleave', function() {
            open_detailed.style.display = 'none';
        });
    });




    // 更多事件
    var more = document.querySelector('.more');
    more.addEventListener('mouseenter', function() {
        this.children[0].children[1].style.display = 'block';
        this.children[0].className = 'after_more';
        this.children[0].children[0].children[1].style.transform = 'rotate(180deg)';
        this.children[0].children[0].children[1].style.color = '#f10180';
    });
    more.addEventListener('mouseleave', function() {
        this.children[0].children[1].style.display = 'none';
        this.children[0].className = '';
        this.children[0].children[0].children[1].style.transform = 'rotate(0deg)';
        this.children[0].children[0].children[1].style.color = '#afafaf';
    });

















})