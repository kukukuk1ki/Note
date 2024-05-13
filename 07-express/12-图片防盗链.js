// 导入express
const express = require('express')

// 创建应用
const app = express()

// 设置中间件
app.use((req, res, next) => {
  // 检测请求头中的 referer 是否为 127.0.0.1
  // 获取 referer 请求头
  let referer = req.get('referer') // http://127.0.0.1:3000/
  if (referer)  {
    // 实例化
    let url = new URL(referer)
    // 获取 hostname
    let hostname = url.hostname
    // 判断
    if (hostname !== '127.0.0.1') {
      // 响应404
      res.status(404).send('<h1>404 Not Found</h1>')
      return
    }
  }
  next()
})

// 静态资源中间件设置
app.use(express.static(__dirname + '/public'))

// 启动服务
app.listen(3000, () => {
  console.log('服务已启动，正在监听端口 3000...')
})
