// 导入http模块
const http = require('http');

// 导入 fs 模块
const fs = require('fs');

// 创建服务对象
const server = http.createServer((request, response) => {
  // 读取文件内容
  let  html = fs.readFileSync(__dirname + '/10-table-01.html')

  response.end(html) //设置响应体
})

// 设置端口 启动服务
server.listen(9000, () => {
  console.log('服务已启动，端口 9000......')
})

