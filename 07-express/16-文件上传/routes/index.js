var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 显示网页的(表单)
router.get('/portrait', (req, res, next) => {
  res.render('portrait')
})

// 处理文件上传
router.post('/portrait', (req, res, next) => {
  res.send('成功')
})

module.exports = router;
