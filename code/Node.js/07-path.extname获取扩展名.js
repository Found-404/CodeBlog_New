const path = require('path');

const fpath = "/a/b/index.html";

const fext = path.extname(fpath);
console.log(fext); //输出： .html