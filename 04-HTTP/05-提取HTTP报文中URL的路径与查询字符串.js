// 导入 http 模块
const http = require('http')
// 2.导入 url 模块
const url = require('url')


// 创建服务对象
const server = http.createServer((request, response) => {
  // 2.解析 requests.url
  // console.log(request.url)
  let res = url.parse(request.url, true)
  // console.log(res)
  // 路径
  let path = res.pathname
  // console.log(path)
  // 查询字符串
  let keyword = res.query.keyword
  console.log(keyword)

  response.end('url')
});

// 监听端口, 启动服务
server.listen(9000, () => {
  console.log('服务已经启动....')
});
