/**
 * @date 2017-03-10
 * @file index.js
 * @desc 创建sdk相关文件
 * @author Cinchen
 */

const fs = require('fs')
const path = require('path')
const utils = require('../utils')

function isDirectoryExist(path) {
  if (fs.existsSync(path)) {
    utils.warn(`The path: "${path}" has existed. Please check your directory again.`)
    return true
  }

  return false
}

module.exports = directories => {
  if (!Array.isArray(directories)) {
    utils.warn(`Invalid Arguments. "directories" should be Array.`)
    process.exit(1)
  }

  let filePath
  directories.forEach((directory) => {
    filePath = path.join(process.cwd(), directory)
    if (isDirectoryExist(filePath)) process.exit(1)

    fs.mkdirSync(filePath)
  })
}
