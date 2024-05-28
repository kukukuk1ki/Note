// 1.安装mongoose
// 2.导入 mongosse
const mongosse = require('mongoose')

// 3.连接 mongodb 服务
mongosse.connect('mongodb://127.0.0.1:27017/bilibili')

// 4.设置连接回调
// 连接成功的回调        once 一次   事件回调函数只执行一次
mongosse.connection.once('open', () => {
  // 5.创建文档的结构对象
  // 设置集合中文档的属性以及属性值的类型
  let BookSchma = new mongosse.Schema({
    name: String,
    author: String,
    price: Number,
    is_hot: Boolean,
    tags: Array,
    pub_time: Date,
    test: mongosse.Schema.Types.Mixed
  })

  // 6.创建模型对象  对文档操作的封装对象
  let BookModal = mongosse.model('books', BookSchma)

  // 7.新增
  BookModal.create({
    name: '西游记',
    author: '吴承恩',
    price: 19.9,
    is_hot: true,
    tags: ['鬼怪','励志','社会'],
    pub_time: new Date(),
    test: false
  }).then(res => {
    // 如果没有出错，则输出插入后的文档对象
    console.log(res)
    // 8.关闭数据库连接（项目运行过程中，不会添加该代码）
    mongosse.disconnect()
  }).catch(err => {
    console.log(err)
  })
})

// 连接错误
mongosse.connection.on('error', () => {
  console.log('连接错误')
})

// 连接关闭
mongosse.connection.on('close', () => {
  console.log('连接关闭')
})
