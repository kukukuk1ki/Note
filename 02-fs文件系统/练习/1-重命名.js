const fs = require('fs')

const files = fs.readdirSync('./code')
// console.log(files)

// 不足10的加上0，并且序号不连续的也改为连续
files.forEach((item, index) => {
  let data = item.split('-')
  let num = data[0]
  let name = data[1]
  // console.log(num, name)
  if (Number(num) < 10) {
    if (num.length === 1) {
      num = '0' + (index + 1)
      // console.log(num)
    }
    num = '0' + (index + 1)
    // console.log('888  ', num)
  } else {
    num = index + 1
    if (num < 10) {
      num = '0' + (index + 1)
    }
    // console.log('777  ', num)
  }
  let newName = num + '-' + name
  console.log(newName)
  fs.renameSync(`./code/${item}`, `./code/${newName}`)
})

// 把0去掉
// files.forEach(item => {
//   let data = item.split('-')
//   let num = data[0]
//   let name = data[1]
//   // console.log(num, name)
//   if (Number(num) < 10) {
//     num = num.substring(1)
//   }
//   let newName = num + '-' + name
//   // console.log(newName)
//   fs.renameSync(`./code/${item}`, `./code/${newName}`)
// })
