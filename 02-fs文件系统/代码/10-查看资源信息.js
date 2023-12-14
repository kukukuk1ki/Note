// 1. 导入 fs 模块
const fs = require('fs');

// 2. stat 方法  status 缩写 状态
fs.stat('./资料/笑看风云.mp4', (err, data) => {
  if (err) {
    console.log('操作失败')
    return
  }
  // console.log(data)
  // isFile  是否是文件
  console.log(data.isFile())
  // isDirectory  是否是文件夹
  console.log(data.isDirectory())
})