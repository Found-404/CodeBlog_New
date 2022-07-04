// 导入自定义格式化时间模块
const TIME = require('./04.自定义时间模块');



// 调用方法 进行时间的格式化

const dt = new Date();

// console.log(dt);

const newDT = TIME.dataTime();
console.log(newDT);