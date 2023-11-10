/**
  Buffer (缓冲器)
  概念：
    Buffer 是一个类似于数组的 对象 ，用于表示固定长度的字节序列
    Buffer 本质是一段内存空间，专门用来处理 二进制数据
  特点：
    1. Buffer 大小固定且无法调整
    2. Buffer 性能较好，可以直接对计算机内存进行操作
    3. 每个元素的大小为 1 字节（byte）
 */

// 1. Buffer.alloc
// 创建了一个长度为 10 字节的 Buffer，相当于申请了 10 字节的内存空间，每个字节的值为 0
let buf_1 = Buffer.alloc(10) // 结果为 <Buffer 00 00 00 00 00 00 00 00 00 00>
// console.log(buf_1)

// 2. Buffer.allocUnsafe
//创建了一个长度为 10 字节的 Buffer，buffer 中可能存在旧的数据, 可能会影响执行结果，所以叫unsafe
let buf_2 = Buffer.allocUnsafe(10)
// console.log(buf_2)

// 3. Buffer.from
//通过字符串创建 Buffer
let buf_3 = Buffer.from('Hello') // 每个字符会转成十六进制
console.log(buf_3) // <Buffer 48 65 6c 6c 6f>
// 通过数组创建 Buffer
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]) // 十进制转为十六进制
console.log(buf_4) // <Buffer 69 6c 6f 76 65 79 6f 75>
