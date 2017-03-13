/**
 * @date 2017-03-13
 * @file copyConfigFiles.js
 * @desc copy project config files from templates
 * @author Cinchen
 */

const fs = require('fs')
const path = require('path')
const utils = require('../utils')

function use(name) {
  return fs.readFileSync(path.join(__dirname, `../templates/${name}`))
}

module.exports = () => {
  const filePath = path.join(__dirname, '../templates/')
  const files = fs.readdirSync(filePath)
  const webpackFileTarget = path.join(process.cwd(), '/build/')

  files
    .filter(file => file.indexOf('project') !== 0)
    .forEach(file =>
      fs.createReadStream(path.join(filePath, file))
        .pipe(fs.createWriteStream(path.join(webpackFileTarget, file)))
    )

  files
    .filter(file => file.indexOf('project') === 0)
    .forEach(file =>
      fs.createReadStream(path.join(filePath, file))
        .pipe(fs.createWriteStream(path.join(process.cwd(), file)))
    )
}
