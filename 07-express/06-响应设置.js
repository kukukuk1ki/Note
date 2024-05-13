// 导入express
const express = require('express')

// 创建应用
const app = express()

// 创建路由
app.get('/response', (req, res) => {
  // 原生响应
  // res.statusCode = 404
  // res.statusMessage = 'Not Found'
  // res.setHeader('abc', 'xyz') // 响应头
  // res.write('hello express ')
  res.end('response') // 响应体

  // express 的响应方法
  // res.status(500) // 响应状态码
  // res.set('aaa', 'bbb')  // 响应头
  // res.send('中文响应不乱码')  // 响应体

  // 链式调用
  // res.status(404).set('xxx', 'yyy').send('你好朋友')

  //3. 其他响应
  res.redirect('https://cn.bing.com/') //重定向
  // res.download('./package.json') //下载响应
  // res.json() //响应 JSON
  // res.sendFile(__dirname + '/home.html') //响应文件内容
})

// 启动服务
app.listen(3000, () => {
  console.log('服务已启动，正在监听端口 3000。。。')
})
