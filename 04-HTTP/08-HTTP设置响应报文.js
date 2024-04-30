// 1.导入http模块
const http = require('http');

// 2.创建服务对象
const server = http.createServer((request, response) => {
  // 设置响应状态码
  // response.statusCode = 203
  // response.statusCode = 404

  // 设置响应状态描述（基本不用）
  // response.statusMessage = 'Hello World'

  // 设置响应头
  // response.setHeader('Content-Type', 'text/html; charset=utf-8')
  // response.setHeader('Server', 'NodeJS')
  // response.setHeader('myHeader', 'test test test')
  // response.setHeader('test', ['a', 'b', 'c'])

  // 设置响应体
  response.write('love')
  response.write('love')
  response.write('love')

  response.end('response') // 设置响应体
})

// 3.启动服务
server.listen(9000, () => {
  console.log('服务已启动，端口 9000......')
})

