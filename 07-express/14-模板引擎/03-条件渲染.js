/**
 * 通过 isLogin 决定最终的输出内容
 * true   输出『<span>欢迎回来</span>』
 * false  输出『<button>登录</button>  <button>注册</button>』
 */
// 导入 ejs
const ejs = require('ejs')
const fs = require('fs')
//变量
let isLogin = true

//原生 JS
// if (isLogin) {
//   console.log('<span>欢迎回来</span>')
// } else {
//   console.log('<button>登录</button>  <button>注册</button>')
// }

// EJS 实现
let html = fs.readFileSync('./03-home.html').toString()
let result = ejs.render(html, {isLogin: isLogin})
// let result = ejs.render(`
//   <% if(isLogin) { %>
//     <span>欢迎回来</span>
//   <% } else { %>
//     <button>登录</button>  <button>注册</button>
//   <% } %>
// `, {isLogin: isLogin})

console.log(result)
