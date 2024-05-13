// 导入express
const express = require('express')

// 创建应用
const app = express()

// 设置静态资源中间件
app.use(express.static(__dirname + '/尚品汇'))

// 启动服务
app.listen(3000, () => {
  console.log('服务已启动，正在监听端口 3000。。。')
})
