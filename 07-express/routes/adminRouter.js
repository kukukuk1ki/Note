// 1.导入express
const express = require('express')

// 2.创建路由对象
const router = express.Router()

// 创建路由
router.get('/admin', (req, res) => {
  res.send('后台界面')
})

router.get('/setting', (req, res) => {
  res.send('设置界面')
})

// 暴露出去
module.exports = router