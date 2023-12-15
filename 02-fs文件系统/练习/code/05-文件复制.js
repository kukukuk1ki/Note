/**
 * 需求:
 *   复制『资料』文件夹下的『笑看风云.mp4』
 */
const fs = require('fs')
const process = require('process')

// 方式一 readFile
// 读取文件内容
// let data = fs.readFileSync('./资料/笑看风云.mp4')
// // 写入文件
// fs.writeFileSync('./资料/笑看风云-2.mp4', data)
// console.log(process.memoryUsage()) //  rss：程序运行过程中所使用内存空间   103710720  99MB



// 方式二 流式操作
// 创建读取流对象
const rs = fs.createReadStream('./资料/笑看风云.mp4')
// 创建写入流对象
const ws = fs.createWriteStream('./资料/笑看风云-3.mp4')

// 绑定data事件
rs.on('data', chunk => {
  ws.write(chunk)
})

// rs.on('end', () => {
//   console.log(process.memoryUsage()) //  rss：程序运行过程中所使用内存空间   31850496  30MB
// })

// 总结：直接读取写入速度更快（整个读取写入），但是占内存空间大
// 流式读取写入速度较慢，但是占用内存空间小