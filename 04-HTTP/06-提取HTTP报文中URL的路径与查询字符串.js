// 导入 http 模块
const http = require('http')
// 2.导入 url 模块
const url = require('url')


// 创建服务对象
const server = http.createServer((request, response) => {
  // http://127.0.0.1:9000/search?keyword=666&pwd=123
  
  // 实例化 URL 对象
  // let url = new URL('/search?a=100&b=200', 'http://127.0.0.1')
  let url = new URL(request.url, 'http://127.0.0.1')
  // console.log(url)
  // 输出路径
  // console.log(url.pathname)
  // 输出 keyword 查询字符串
  console.log(url.searchParams.get('keyword'))
  console.log(url.searchParams.get('pwd'))

  response.end('url new')
});

// 监听端口, 启动服务
server.listen(9000, () => {
  console.log('服务已经启动....')
});
