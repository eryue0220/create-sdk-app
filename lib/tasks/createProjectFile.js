/**
 * @date 2017-03-13
 * @file createOtherRelateFiles.js
 * @desc 创建其他项目相关文档
 * @author Cinchen
 */

const fs = require('fs')
const path = require('path')
const utils = require('../utils')

module.exports = (name, content, enconding = 'utf8') => {
  const filename = name
  const absolutePath = path.join(process.cwd(), filename)

  if (fs.existsSync(absolutePath)) {
    utils.warn(`The ${filename} file has been existed. Please delete first.`)
    process.exit(1)
  }

  fs.writeFileSync(absolutePath, content, enconding)
}
