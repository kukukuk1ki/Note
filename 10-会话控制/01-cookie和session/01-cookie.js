const express = require('express')

const app = express()

// 创建路由规则
app.get('/set-cookie', (req, res) => {
  // res.cookie('name','zhangsan') // 浏览器关闭后，cookie失效
  res.cookie('name', 'lisi', {maxAge: 20 * 1000})
  res.send('Hello World!')
})

// 启动服务
app.listen(3000)