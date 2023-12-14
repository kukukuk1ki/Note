const fs = require('fs')

const files = fs.readdirSync('./code')
// console.log(files)

files.forEach(item => {
  console.log(item)
})
