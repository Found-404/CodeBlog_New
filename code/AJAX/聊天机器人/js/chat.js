$(function() {
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui();

    // 为发送按钮绑定点击事件
    $("#btnSend").on('click', function() {
        let text = $('#ipt').val().trim();
        if (text.length <= 0) {
            return $('#ipt').val('');
        }
        // 如果用户输入聊天内容 则将内容追加到页面
        $('.talk_list').append(`<li class="right_word">
            <img src="img/person02.png" />
            <span>${text}</span>
        </li>
        `);
        // 清空输入框内容
        $('#ipt').val('');
        // 调用页面滚动底部函数
        resetui();
        // 发起请求获取聊天内容
        getMsg(text);
    });

    // 获取聊天机器人发送回来的消息
    function getMsg(text) {
        $.ajax({
            method: 'GET',
            url: 'http://www.liulongbin.top:3006/api/robot',
            data: {
                spoken: text,
            },
            success: function(res) {
                console.log(res);
                if (res.message === 'success') {
                    //接受聊天内容
                    var msg = res.data.info.text;
                    // 渲染到页面
                    $('.talk_list').append(`<li class="left_word">
                    <img src="img/person01.png" />
                    <span>${msg}</span>
                </li>`);
                    // 调用页面滚动底部函数
                    resetui();
                    // 调用getVoic(text) 将文字转换为语音
                    getVoic(text);
                };
            }
        })
    };

    // 将聊天内容转换为语音
    function getVoic(text) {
        $.ajax({
            method: 'GET',
            url: 'http://www.liulongbin.top:3006/api/synthesize',
            data: {
                text: text,
            },
            success: function(res) {
                // console.log(res);
                // 返还一个对象
                // console.log(res instanceof Object); //true
                if (res.status === 200) {
                    // 播放语音
                    $('#voide').attr('src', res.voiceUrl);
                }
            }
        })
    };

    // 回车发送事件
    $('#ipt').on('keyup', function(e) {
        // console.log(e);
        // console.log(e.keyCode);
        if (e.keyCode === 13) {
            // 直接调用发送按钮的点击事件
            $('#btnSend').click();
        }
    });
});