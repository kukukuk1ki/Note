/**
 * 
 * @param {*} success 数据库连接成功的回调
 * @param {*} error 数据库连接失败的回调
 */
module.exports = function (success, error) {
  // 判断 error 为其设置默认值
  if (error !== 'function') {
    error = () => {
      console.log('连接失败~~~')
    }
  }

  // 1.安装mongoose
  // 2.导入 mongosse
  const mongosse = require('mongoose')

  // 导入 config 文件
  const { DBHOST, DBPORT, DBNAME} = require('../config/config.js')

  // 3.连接 mongodb 服务
  mongosse.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`)

  // 4.设置连接回调
  // 连接成功的回调        once 一次   事件回调函数只执行一次
  mongosse.connection.once('open', () => {
    success()
  })

  // 连接错误
  mongosse.connection.on('error', () => {
    error()
  })

  // 连接关闭
  mongosse.connection.on('close', () => {
    console.log('连接关闭')
  })
}
