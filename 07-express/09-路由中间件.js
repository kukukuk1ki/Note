/**
 * 针对 /admin  /setting 的请求, 要求 URL 携带 code=521 参数, 如未携带提示『暗号错误』
 */

// 导入express
const express = require('express')

// 创建应用
const app = express()

// 创建路由
app.get('/home', (req, res) => {
  res.send('前台首页')
})

// 声明路由中间件函数（命名函数、匿名函数和箭头函数都可以）
let checkCodeMiddleware = (req, res, next) => {
  if (req.query.code === '521') {
    next()
  } else {
    res.send('暗号错误')
  }
}
/**  路由中间件调用格式
  app.get('/路径',`中间件函数`,(request,response)=>{

  });

  app.get('/路径',`中间件函数1`,`中间件函数2`,(request,response)=>{
    
  });
 */


// 使用路由中间件
app.get('/admin', checkCodeMiddleware, (req, res) => {
  res.send('后台界面')
})

app.get('/setting', checkCodeMiddleware, (req, res) => {
  res.send('设置界面')
})

app.all('*', (req, res) => {
  res.send('<h1>404 Not Found</h1>')
})

// 启动服务
app.listen(3000, () => {
  console.log('服务已启动，正在监听端口 3000。。。')
})
