// 1.安装EJS
// 2.导入EJS
const ejs = require('ejs')
const fs = require('fs')

const xiyou = ['唐僧', '孙悟空', '猪八戒', '沙僧']

// 原生js
// let str = '<ul>'
// xiyou.forEach(item => {
//   str += `<li>${item}</li>`
// })
// str += '</ul>'
// console.log(str)

// EJS 实现
let html = fs.readFileSync('./02-西游.html').toString()
let result = ejs.render(html, {xiyou: xiyou})
// let result = ejs.render(`<ul>
//   <% xiyou.forEach(item => { %>
//     <li><%= item %></li>
//   <% }) %>
// </ul>`, {xiyou: xiyou})

console.log(result)
