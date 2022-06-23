function template(id, data) {
    // 获取传过来的节点
    var str = document.getElementById(id).innerHTML;
    // 设置正则表达式
    var pattern = /{{\s*([a-zA-z]+)\s*}}/;
    // 设置null
    var pattResult = null;
    // 循环替换str
    while (pattResult = pattern.exec(str)) {
        str = str.replace(pattResult[0], data[pattResult[1]]);
    }
    // 返回str
    return str;
}