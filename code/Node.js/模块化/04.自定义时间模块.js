// 定义格式化时间的方法
function dataTime(dtStr) {
    const data = new Date();
    const y = data.getFullYear();
    const m = padZero(data.getMonth() + 1);
    const d = padZero(data.getDate());

    const h = padZero(data.getHours());
    const min = padZero(data.getMinutes());
    const s = padZero(data.getSeconds());

    return `${y}-${m}-${d} ${h}:${min}:${s}`;
}

//定义补零函数
function padZero(n) {
    return n < 0 ? '0' + n : n;
}

module.exports = {
    dataTime
};