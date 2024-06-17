var express = require('express')
var router = express.Router()

// 注册
router.get('/reg', function (req, res, next) {
  // 响应html内容
  res.render('auth/reg')
})


module.exports = router
