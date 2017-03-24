/**
 * @date 2017-03-13
 * @file copyConfigFiles.js
 * @desc copy project config files from templates
 * @author Cinchen
 */

const fs = require('fs')
const path = require('path')

module.exports = es6 => {
  const filePath = path.join(__dirname, '../templates/')
  const files = fs.readdirSync(filePath)
  const webpackFileTarget = path.join(process.cwd(), '/build/')

  files
    .filter(file => es6 ? file.indexOf('es6') > -1 : file.indexOf('es6') < 0)
    .forEach(file =>
      fs.createReadStream(path.join(filePath, file))
        .pipe(fs.createWriteStream(path.join(webpackFileTarget, file)))
    )

  files
    .filter(file => file.indexOf('base') > -1)
    .forEach(file =>
      fs.createReadStream(path.join(filePath, file))
      .pipe(fs.createWriteStream(path.join(webpackFileTarget, file)))
    )
}
