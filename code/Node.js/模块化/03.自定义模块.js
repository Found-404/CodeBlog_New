// 在自定义模块中。默认情况下，module.export = {}

// 向module.exports对象上挂载username属性
// module.exports.username = '张三';


// module.exports.sayHello = function() {
//     console.log('hello!' + this.username);
// }

// module.exports = {
//     username: '李四',
//     sayHi() {
//         console.log('HI!');
//     }
// };


const username = '张三';

exports.username = username;

exports.age = 18;

exports.sayHi = function() {
    console.log('Hi!');
}