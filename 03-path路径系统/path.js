const fs = require('fs')
const path = require('path')

// 写入文件
// fs.writeFileSync(__dirname + '/index.html', 'love')
// console.log(__dirname + '/index.html')

// resolve 解决路径问题
// console.log(path.resolve(__dirname, './index.html'))
// console.log(path.resolve(__dirname, 'index.html'))
// console.log(path.resolve(__dirname, '/index.html', './test'))  // 不行

// sep 获取操作系统路径分隔符
// console.log(path.sep); // windows  \  Linux  /

// parse 方法，解析路径并返回对象  __dirname  '全局变量'
// console.log(__filename); // 文件的绝对路径
let str = 'C:\\Users\\hry hry\\Desktop\\Nodejs\\03-path路径系统\path.js';
// console.log(path.parse(str));

// basename  获取路径的基础名称
console.log(path.basename(str));

// dirname  获取路径的目录名
console.log(path.dirname(str));

// extname  获取路径文件的扩展名
console.log(path.extname(str));

