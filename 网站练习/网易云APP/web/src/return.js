// 窗口加载完毕条件
window.addEventListener('load', function() {
    // 获取元素
    let account_return = document.querySelector('.account_return');
    let reTurn_box = document.querySelector('.return');
    let cancel = document.querySelector('.cancel');
    let bodyover = document.querySelector('body');
    console.log(bodyover);

    // 点击退出弹出窗口和遮罩层
    account_return.addEventListener('click', function() {
        // 将遮罩层和弹出框的display转换为显示
        reTurn_box.style.display = 'block';
        bodyover.style.overflow = 'hidden';
    });
    cancel.addEventListener('click', function() {
        // 再次点击取消将遮罩层和弹出框的display转换为隐藏
        reTurn_box.style.display = 'none';
        bodyover.style.overflow = 'auto';
    })
})