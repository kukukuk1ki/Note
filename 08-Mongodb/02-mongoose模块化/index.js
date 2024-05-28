// 导入 db 文件
const db = require('./db/db')
// 导入mongoose
const mongoose = require('mongoose')

// 调用函数
db(() => {
  // 5.创建文档的结构对象
  // 设置集合中文档的属性以及属性值的类型
  let BookSchma = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
  })

  // 6.创建模型对象  对文档操作的封装对象
  let BookModal = mongoose.model('books', BookSchma)

  // 7.新增
  BookModal.create({
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


