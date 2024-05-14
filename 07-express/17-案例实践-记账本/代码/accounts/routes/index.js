var express = require('express')
var router = express.Router()
// 导入lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(__dirname + '/../data/db.json')
//获取 db 对象
const db = low(adapter)
// 导入shortid
const shortid = require('shortid')


// 记账本列表
router.get('/accounts', function(req, res, next) {
  
  res.render('list')
});

// 添加记录
router.get('/accounts/create', function(req, res, next) {
  
  res.render('create')
});

// 新增记录
router.post('/account', function(req, res, next) {
  // 获取请求体数据
  // console.log(req.body)
  // 生成id
  let id = shortid.generate()
  // 写入文件
  // db.get('accounts').unshift(req.body).write()
  db.get('accounts').unshift({id: id, ...req.body}).write()
  // 成功提醒
  res.render('success', {msg: '添加成功', url: '/accounts'})
});

module.exports = router;
