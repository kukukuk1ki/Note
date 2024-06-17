var express = require('express')
var router = express.Router()
// 导入moment
const moment = require('moment')
const AccountModal = require('../../models/AccountModel')


// 记账本列表
router.get('/account', function (req, res, next) {
  AccountModal.find().sort({time:-1}).exec().then(data => {
    res.render('list', { accounts: data, moment: moment })
  }).catch(err => {
    console.log(err)
  })
})

// 添加记录
router.get('/account/create', function (req, res, next) {
  res.render('create')
})

// 新增记录
router.post('/account', function (req, res, next) {
  req.body.time = new Date(req.body.time)
  // 插入数据库
  AccountModal.create({
    ...req.body,
  })
    .then(() => {
      // 成功提醒
      res.render('success', { msg: '添加成功~~', url: '/account' })
    })
    .catch(() => {
      res.status(500).send('添加失败~~')
      return
    })
})

// 删除记录
router.get('/account/:id', function (req, res, next) {
  // 获取 params 的 id 参数
  let id = req.params.id
  // 删除
  AccountModal.deleteOne({ _id: id }).then((data, err) => {
    if (err) {
      console.log('删除失败', err)
    }
    res.render('success', { msg: '删除成功', url: '/account' })
  })
})

module.exports = router
