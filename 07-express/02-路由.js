// 导入express
const express = require('express')

// 创建应用
const app = express()

// 创建 get 路由
app.get('/home', (req, res) => {
  res.end('hello express')
})

// 创建 get 路由
app.get('/', (req, res) => {
  res.end('home')
})

// 创建 post 路由
app.post('/login', (req, res) => {
  res.end('login login')
})

// 匹配所有的请求方法
app.all('/test', (req, res) => {
  res.end('test test')
})

// 自定义 404 路由
app.all('*', (req, res) => {
  res.end('404 Not Found')
})

// 监听端口 启动服务
app.listen(3000, () => {
  console.log('服务已启动，正在监听端口 3000。。。')
})
