const express = require('express')
// 1. 安装包 npm i express-session connect-mongo
// 2. 引入 express-session connect-mongo
const session = require('express-session')
const MongoStore = require('connect-mongo')

// 创建应用对象
const app = express()
// 3. 设置 session 的中间件
app.use(
  session({
    name: 'sid', // 设置cookie的name，默认值是：connect.sid
    secret: 'atguigu', // 参与加密的字符串（又称签名）
    saveUninitialized: false, // 是否为每次请求都设置一个cookie用来存储session的id
    resave: true, // 是否在每次请求时重新保存session
    store: MongoStore.create({
      mongoUrl: 'mongodb://127.0.0.1:27017/bilibili', // 数据库的连接配置
    }),
    cookie: {
      httpOnly: true, // 开启后前端无法通过 JS 操作
      maxAge: 50 * 1000, // 这一条 是控制 sessionID 的过期时间的！！！
    },
  })
)

// 首页路由
app.get('/', (req, res) => {
  res.send('Home')
})

// 登录路由
app.get('/login', (req, res) => {
  // username=admin&password=admin
  if (req.query.username === 'admin' && req.query.password === 'admin') {
    // 登录成功后，设置session
    req.session.username = 'admin'
    req.session.uid = '259accefz'
    // 成功响应
    res.send('登录成功')
  } else {
    res.send('登录失败~~~')
  }
})

// 启动服务
app.listen(3000)
