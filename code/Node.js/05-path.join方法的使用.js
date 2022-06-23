const path = require('path');

const pathStr = path.join('/a', '/b/c', '../', '/d', 'e');

console.log(pathStr); //\a\b\d\e

const pathStr2 = path.join(__dirname, './files/1.txt');

console.log(pathStr2); //K:\VScode\code\code\Node.js\files\1.txt