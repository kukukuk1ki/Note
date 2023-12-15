// 1.引入fs
const fs = require('fs')

// 2.创建读取流对象
const rs = fs.createReadStream('./资料/笑看风云.mp4')

// 3.绑定 data 事件   chunk  块
rs.on('data', chunk => {
  console.log(chunk.length) // 65536 字节 => 64KB
  // console.log(chunk.toString())  // 无法读取，因为视频文件无法转为字符
})

// 4.end 可选事件
rs.on('end', () => {
  console.log('读取完成')
})
