// 1.安装EJS
// 2.导入EJS
const ejs = require('ejs')
const fs = require('fs')

let china = '中国'
// let str = `我爱你 ${china}`
let weather = '今天天气不错~'

// 声明变量
let str = fs.readFileSync('./01-html.html').toString()

// 使用EJS渲染
let result = ejs.render(str, {china: china, weather})

console.log(result)
