// 1.带入http模块
const http = require('http')

// 2.创建服务对象
const server = http.createServer((request, response) => {
  // 解决返回报文中文乱码问题
  response.setHeader('Content-Type', 'text/html; charset=utf-8')
  response.end('你好')
})

// 3.监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已启动。。。。')
})
