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
// 导入moment
const moment = require('moment')
const AccountModal = require('../models/AccountModel')

// 测试
// console.log(moment('2024-06-05').toDate())
// console.log(new Date('2024-06-05'))
// console.log(moment(new Date).format('YYYY-MM-DD'))

// 记账本列表
router.get('/account', function (req, res, next) {
  // 获取所有账单信息
  // let accounts = db.get('accounts').value()
  // console.log(accounts)

  AccountModal.find().sort({time:-1}).exec().then(data => {
    // console.log(data)
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
  // 获取请求体数据   2024-06-05  =>  new Date()
  // 2024-06-05 => moment =>  new Date()
  // console.log(req.body)
  // 修改req.body.time 的值为时间对象
  // req.body.time = moment('2024-06-05').toDate()
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
router.get('/accounts/:id', function (req, res, next) {
  // 获取 params 的 id 参数
  let id = req.params.id
  console.log('id = ', id)
  // 删除
  db.get('accounts').remove({ id: id }).write()
  // 成功提醒
  // res.send('删除成功')
  res.render('success', { msg: '删除成功', url: '/accounts' })
})

module.exports = router
