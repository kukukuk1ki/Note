//1. 安装 mongoose
//2. 导入 mongoose
const mongoose = require('mongoose');

//设置 strictQuery 为 true
mongoose.set('strictQuery', true);

//3. 连接 mongodb 服务                        数据库的名称
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

//4. 设置回调
// 设置连接成功的回调  once 一次   事件回调函数只执行一次
mongoose.connection.once('open', () => {
  //5. 创建文档的结构对象
  //设置集合中文档的属性以及属性值的类型
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    is_hot: Boolean
  });

  //6. 创建模型对象  对文档操作的封装对象   mongoose 会使用集合名称的复数创建集合
  let BookModel = mongoose.model('novel', BookSchema);
 
  // 7.读取文档  读取一条
  // BookModel.findOne({name: '红楼梦'})
  // .then(res => {
  //   console.log(res)
  // })
  // .catch(err => {
  //   console.log(err)
  // })

  // 通过id获取
  // BookModel.findById('66557dc56b29a054fabc88b6')
  // .then(res => {
  //   console.log(res)
  // })
  // .catch(err => {
  //   console.log(err)
  // })

  // 批量获取
  // BookModel.find({ author: '余华' })
  // .then(res => {
  //   // 获取成功
  //   console.log(res)
  // })
  // .catch(err => {
  //   // 获取失败
  //   console.log(err)
  // })

  // 获取所有
  BookModel.find()
  .then(res => {
    // 获取成功
    console.log(res)
  })
  .catch(err => {
    // 获取失败
    console.log(err)
  })

  
});

// 设置连接错误的回调
mongoose.connection.on('error', () => {
  console.log('连接失败');
});

//设置连接关闭的回调
mongoose.connection.on('close', () => {
  console.log('连接关闭');
});

