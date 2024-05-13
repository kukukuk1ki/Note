// 导入express
const express = require('express')
// 导入路由
const homeRouter = require('./routes/homeRouter')
const adminRouter  = require("./routes/adminRouter")

// 创建应用
const app = express()

// 设置路由
app.use(homeRouter)
app.use(adminRouter)



app.all('*', (req, res) => {
  res.send('<h1>404 Not Found</h1>')
})

// 启动服务
app.listen(3000, () => {
  console.log('服务已启动，正在监听端口 3000。。。')
})
