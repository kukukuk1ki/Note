// 导入express
const express = require('express')

// 创建应用
const app = express()

// 静态资源中间件设置
app.use(express.static(__dirname + '/public'))

// 创建路由
app.get('/home', (req, res) => {
  res.end('home')
})

// 启动服务
app.listen(3000, () => {
  console.log('服务已启动，正在监听端口 3000。。。')
})
