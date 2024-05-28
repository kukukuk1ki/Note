// 导入 db 文件
const db = require('./db/db')
// 导入 MovieModel
const MovieModel = require('./models/MovieModel')
// 调用函数
db(() => {
  console.log('连接成功')
  // 电影的模型对象
  MovieModel.create({title: '让子弹飞', director: '姜文'})
  .then( res => {
    console.log(res)
  })
  .catch( err => {
    console.log(err)
  })
}, () => {
  console.log('连接失败')
})