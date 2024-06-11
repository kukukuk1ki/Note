var express = require('express')
var router = express.Router()
// 导入moment
const moment = require('moment')
const AccountModal = require('../../models/AccountModel')

// 记账本列表
router.get('/account', function (req, res, next) {
  AccountModal.find().sort({ time:-1 }).exec()
    .then(data => {
      // 响应成功的提示
      res.json({
        // 响应编号
        code: '0000',
        // 响应信息
        msg: '获取成功',
        // 响应数据
        data: data
      })
    })
    .catch(err => {
      res.json({
        // 响应编号
        code: '1001',
        // 响应信息
        msg: '获取失败~~~',
        // 响应数据
        data: null
      })
    })
})


// 新增记录
router.post('/account', function (req, res, next) {
  // 修改time属性的值
  req.body.time = new Date(req.body.time)
  // 插入数据库
  AccountModal.create({
    ...req.body,
  })
    .then(data => {
      // 成功提醒
      res.json({
        // 响应编号
        code: '0000',
        // 响应信息
        msg: '新增成功',
        // 响应数据
        data: data
      })
    })
    .catch(err => {
      res.json({
        // 响应编号
        code: '1002',
        // 响应信息
        msg: '新增失败~~~',
        // 响应数据
        data: null
      })
    })
})

// 删除记录
router.delete('/account/:id', function (req, res, next) {
  // 获取 params 的 id 参数
  let id = req.params.id
  // 删除
  AccountModal.deleteOne({ _id: id })
  .then((data) => {
    // 成功提醒
    res.json({
      // 响应编号
      code: '0000',
      // 响应信息
      msg: '删除成功',
      // 响应数据
      data: {}
    })
  })
  .catch((err) => {
    // 失败提醒
    res.json({
      // 响应编号
      code: '1003',
      // 响应信息
      msg: '删除失败~~~',
      // 响应数据
      data: null
    })
  })
})

module.exports = router
