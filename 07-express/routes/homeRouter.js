// 1.导入express
const express = require('express')

// 2.创建路由对象
const router = express.Router()

// 创建路由
router.get('/home', (req, res) => {
  res.send('前台首页')
})

router.get('/search', (req, res) => {
  res.send('内容搜索')
})

// 暴露出去
module.exports = router