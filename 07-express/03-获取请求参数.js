// 导入express
const express = require('express')

// 创建应用
const app = express()

// 创建路由
app.get('/requests', (req, res) => {
  // 原生操作
  // console.log(req.method)
  // console.log(req.url)
  // console.log(req.httpVersion)
  // console.log(req.headers)

  // express 封装操作
  // console.log(req.path)
  // console.log(req.query)

  // 获取ip
  // console.log(req.ip)

  // 获取请求头
  console.log(req.get('host'))
  console.log(req.get('Accept-Language'))

  res.end('hello express')
})

// 启动服务
app.listen(3000, () => {
  console.log('服务已启动，正在监听端口 3000。。。')
})