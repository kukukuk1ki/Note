// 1.导入express
const express = require('express')

// 2.创建应用
const app = express()

// 3.创建路由
app.get('/home', (req, res) => {
  res.end('<h1>hello express</h1>')
})

// 4.启动服务
app.listen(3000, () => {
  console.log('服务已启动，正在监听端口 3000。。。')
})