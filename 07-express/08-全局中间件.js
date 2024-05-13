// 导入express
const express = require('express')
const fs = require('fs')
const path = require('path')

// 创建应用
const app = express()

// 声明中间件函数
function recordMiddleware(req, res, next) {
  // 获取 url 和 ip
  let { url, ip } = req
  // 将信息保存到文件 access.log 中
  fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url}  ${ip}\r\n`)
  // 调用next()
  next()
}

// 使用中间件函数
app.use(recordMiddleware)

// 创建路由
app.get('/home', (req, res) => {
  res.send('前台首页')
})

app.get('/admin', (req, res) => {
  res.send('管理界面')
})

app.all('*', (req, res) => {
  res.send('<h1>404 Not Found</h1>')
})

// 启动服务
app.listen(3000, () => {
  console.log('服务已启动，正在监听端口 3000。。。')
})
