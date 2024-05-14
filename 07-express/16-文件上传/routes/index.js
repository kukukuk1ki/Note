const express = require('express')
const router = express.Router()
const { formidable } = require('formidable')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

// 显示网页的(表单)
router.get('/portrait', (req, res, next) => {
  res.render('portrait')
})

// 处理文件上传
router.post('/portrait', (req, res, next) => {
  const form = formidable({
    // 允许解析的字段具有多个值
    multiples: true,
    // 设置文件的保存目录
    uploadDir: __dirname + '/../public/images',
    // 保持文件后缀
    keepExtensions: true,
  })

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err)
      return
    }
    // console.log('fields:', fields)
    // console.log('files:', files)
    
    // 服务器保存图片的访问URL
    // http://127.0.0.1:3000/images/f6fecc47a896199c6a4615e00.jpg
    // URL 有可能会变，因此不会写死，采用拼接路径
    // /images/f6fecc47a896199c6a4615e00.jpg
    let url = '/images/' + files.avatar[0].newFilename  // 将来此数据保存在数据库中
    res.send(url)
  })
})

module.exports = router
