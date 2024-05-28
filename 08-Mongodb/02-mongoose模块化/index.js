// 导入 db 文件
const db = require('./db/db')
// 导入mongoose
const mongoose = require('mongoose')
// 导入 BookModel
const BookModel = require('./models/BookModel')
// 调用函数
db(() => {
  // 7.新增
  BookModel.create({
    name: '西游记',
    author: '吴承恩',
    price: 19.9,
  }).then(res => {
    // 如果没有出错，则输出插入后的文档对象
    console.log(res)
    // 8.关闭数据库连接（项目运行过程中，不会添加该代码）
    mongoose.disconnect()
  }).catch(err => {
    console.log(err)
  })
}, () => {
  console.log('连接失败')
})


