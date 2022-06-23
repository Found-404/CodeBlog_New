$(function() {
    // 定义一个给时间补零函数
    function padZero(n) {
        if (n < 10) {
            return '0' + n;
        } else {
            return n;
        }
    };



    //定义格式化时间的过滤器
    template.defaults.imports.dateFprmat = function(dtStr) {
        var dt = new Date(dtStr);
        var y = dt.getFullYear();
        var m = padZero(dt.getMonth() + 1);
        var d = padZero(dt.getDate());

        var hh = padZero(dt.getHours());
        var mm = padZero(dt.getMinutes());
        var ss = padZero(dt.getSeconds());

        return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
    }

    // 获取新闻列表函数
    function getNewList() {
        $.get('http://www.liulongbin.top:3006/api/news',
            function(res) {
                // console.log(res);
                if (res.status !== 200) {
                    return alert('获取列表失败');
                };
                console.log(res);
                // 把每一项的tags
                for (let i = 0; i < res.data.length; i++) {
                    res.data[i].tags = res.data[i].tags.split(',');
                }
                var htmlStr = template('tpl-news', res);
                $('#news-list').html(htmlStr);
            });
    };
    getNewList();
})