/**
 * 需求：
 * 追加写入文件，座右铭.txt，写入内容：择其善者而从之，其不善者而改之
 */

// 1.导入fs模块
const fs = require('fs');

// 2.追加写入文件(异步写入)
// fs.appendFile('./座右铭.txt', '，择其善者而从之，其不善者而改之', err => {
//   // err  写入失败：错误对象  写入成功：null
//   if (err) {
//     console.log('追加写入失败')
//     return
//   }
//   console.log('追加写入成功')
// })
// console.log(1 + 1)

// 同步写入
fs.appendFileSync('./座右铭.txt', '\r\n温故而知新，可以为师矣')
console.log(2 + 2)