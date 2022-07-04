// 定义格式化时间的函数
function dataFormat(dataStr) {
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
    return n > 9 ? n : '0' + n;
}

// 暴露函数
module.exports = {
    dataFormat
}