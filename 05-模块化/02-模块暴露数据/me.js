// 声明一个函数
function tiemo() {
  console.log('贴膜十元！！！')
}

// 洗脚
function xijiao() {
  console.log('洗脚298！！！')
}

// 暴露数据
// module.exports =  {
//   tiemo,
//   xijiao
// }

// exports 暴露数据
// exports.tiemo = tiemo
// exports.xijiao = xijiao

// 1. module.exports 可以暴露`任意`数据
// module.exports = 'iloveyou'
// module.exports = 521


// 2. 不能使用 `exports = value`的形式暴露数据
// exports = 'iloveyou' // 错误

// 3. exports = module.exports = {}
// console.log(module.exports)
// console.log(module.exports === exports)

exports = module.exports = {tiemo:tiemo}
exports.tiemo = tiemo;
// exports = 'iloveyou' // X