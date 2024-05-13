// 导入express
const express = require('express')

// 创建应用
const app = express()

// 创建路由
app.get('/other', (req, res) => {
  // res.redirect('https://cn.bing.com/') // 重定向
  // res.download(__dirname + '/package.json') // 下载响应
  // res.json({
  //   name: '响应json',
  //   text: '这是响应json内容'
  // }) //响应 JSON
  res.sendFile(__dirname + '/test.html') //响应文件内容
})

// 启动服务
app.listen(3000, () => {
  console.log('服务已启动，正在监听端口 3000。。。')
})
