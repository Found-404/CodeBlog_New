// 入口文件

const dateNew = require('./src/dataFormat');
const escape = require('./src/htmlEscape');

// dateNew/escape是对象
// 需要挂载到module.exports
// 使用...运算符展开这两个对象
// 让他们的所有属性交给新的对象module.exports

// 向外暴露需要的成员
module.exports = {
    ...dateNew,
    ...escape
};