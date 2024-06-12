const express = require('express')
// 导入 cookie-parser 中间件
const cookieParser = require('cookie-parser')


const app = express()
// 使用cookie-parser中间件
app.use(cookieParser())

// 创建路由规则
app.get('/set-cookie', (req, res) => {
  // res.cookie('name','zhangsan') // 浏览器关闭后，cookie失效
  res.cookie('name', 'lisi', {maxAge: 60 * 1000})
  res.cookie('theme', 'blue')
  res.send('Hello World!')
})

// 删除cookie
app.get('/remove-cookie', (req, res) => {
  // 调用方法
  res.clearCookie('name')
  res.send('删除成功~~~')
})

// 获取cookie
app.get('/get-cookie', (req, res) => {
  // 获取cookie
  const name = req.cookies.name
  res.send(`欢迎您，${name}`)
})

// 启动服务
app.listen(3000)