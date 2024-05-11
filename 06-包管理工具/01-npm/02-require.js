// require 导入 npm 包基本流程
// 1. 在当前文件夹下 node_modules 中寻找同名的文件夹
// 2. 在上级目录中下的 node_modules 中寻找同名的文件夹，直至找到磁盘根目录

const uniq = require('uniq')
// const uniq = require('./node_modules/uniq')
// const uniq = require('./node_modules/uniq/uniq.js')

// 使用包
const arr = [1, 3, 4, 2, 5, 5, 1, 3, 4]

const result = uniq(arr)

console.log(result)
