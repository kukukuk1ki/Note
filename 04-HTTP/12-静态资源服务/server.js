/**
 * 创建一个 HTTP 服务，端口为 9000，满足如下需求
 * GET  /index.html        响应  page/index.html 的文件内容
 * GET  /css/app.css       响应  page/css/app.css 的文件内容
 * GET  /images/logo.png   响应  page/images/logo.png 的文件内容
 */
// 导入http模块
const http = require('http')
// 导入 fs 模块
const fs = require('fs')
const path = require('path')
let mimes = {
  html: 'text/html',
  css: 'text/css',
  js: 'text/javascript',
  png: 'image/png',
  jpg: 'image/jpeg',
  gif: 'image/gif',
  mp4: 'video/mp4',
  mp3: 'audio/mpeg',
  json: 'application/json'
}
// 创建服务对象
const server = http.createServer((request, response) => {
  if (request.method === 'POST') {
    response.statusCode = 405
    response.end('<h1>405 Method Not Allowed</h1>')
    return
  }
  // 获取请求 url 的路径
  let { pathname } = new URL(request.url, 'http://127.0.0.1')
  // 声明网站根目录变量
  let root = __dirname + '/page'
  // let root = __dirname + '/../'
  // 拼接文件路径
  let filePath = root + pathname
  // 异步读取文件
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err)
      // 设置字符集
      response.setHeader('Content-Type', 'text/html; charset=utf-8')
      // 判断错误代号
      switch (err.code) {
        case 'ENOENT':
          response.statusCode = 404
          response.end('<h1>404 Not Found</h1>')
        case 'EPERM':
          response.statusCode = 403
          response.end('<h1>403 Forbidden</h1>')
        default:
          response.statusCode = 500
          response.end('<h1>Internal Server Error</h1>')
      }
      return
    }
    // 获取请求文件后缀名
    let ext = path.extname(filePath).slice(1)
    // 获取对应的类型
    let type = mimes[ext]
    // console.log(ext)
    if (type) {
      // 匹配到了                 text/html; charset=utf-8
      if (ext === 'html') {
        response.setHeader('Content-Type', type + ';charset=utf-8')
      } else {
        response.setHeader('Content-Type', type)
      }
    } else {
      // 没匹配到
      response.setHeader('Content-Type', 'application/octet-stream')
    }
    // 响应文件内容
    response.end(data)
  })

  // if (pathname === '/') {
  //   // 读取文件内容
  //   let html = fs.readFileSync(__dirname + '/page/index.html')
  //   response.end(html) //设置响应体
  // } else if (pathname === '/css/app.css') {
  //   // 读取文件内容
  //   let css = fs.readFileSync(__dirname + '/page/css/app.css')
  //   response.end(css) //设置响应体
  // } else if (pathname === '/images/logo.png') {
  //   // 读取文件内容
  //   let img = fs.readFileSync(__dirname + '/page/images/logo.png')
  //   response.end(img) //设置响应体
  // } else {
  //   response.end('<h1>404 Not Found</h1>') //设置响应体
  // }
})

// 设置端口 启动服务
server.listen(9000, () => {
  console.log('服务已启动，端口 9000......')
})

