// 导入express
const express = require('express')
// 导入 json 文件
const { singers } = require('./singers.json')

// 创建应用
const app = express()

// 创建路由
app.get('/singer/:id.html', (req, res) => {
  // 获取路由参数
  let { id } = req.params
  // 在数组中寻找对应id 的数据
  let result = singers.find(item => {
    if (item.id == id) {
      return true
    }
  })

  if (!result) {
    res.statusCode = 404
    res.end('<h1>404 Not Found</h1>')
  }

  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>歌手</title>
    </head>
    <body>
      <h1>${result.singer_name}</h1>
      <img src="${result.singer_pic}">
    </body>
    </html>
  `)
})

// 启动服务
app.listen(3000, () => {
  console.log('服务已启动，正在监听端口 3000。。。')
})
