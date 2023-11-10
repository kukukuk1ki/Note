// Buffer 与字符串的转化
// 我们可以借助 toString 方法将 Buffer 转为字符串
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
// toString 默认是按照 utf-8 编码方式进行转换的
// console.log(buf_4.toString()) // iloveyou


// Buffer 的读写
// Buffer 可以直接通过 [] 的方式对数据进行处理。
//读取
// let buf = Buffer.from('hello')
// console.log(buf[0])

// 将读取到的字符转为二进制
// console.log(buf[0].toString(2)) // 01101000

//修改
// buf[0] = 97
//查看字符串结果
// console.log(buf.toString())

// 溢出
// let buf = Buffer.from('hello')
// buf[0] = 361 // Buffer会舍弃高位的数字 0001 0110 1001 => 0110 1001
// console.log(buf)

// 中文  utf-8,一个utf-8的中文占三个字节
let buf = Buffer.from('你好')
console.log(buf) // <Buffer e4 bd a0 e5 a5 bd>  => 6个字节