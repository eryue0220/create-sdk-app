/**
 * @date 2017-03-10
 * @file project-config/index.js
 * @author Cinchen
 */

const exec = require('child_process').exec
const createProjectConfigFiles = require('./createProjectConfigFiles')
const copyConfigFiles = require('./copyConfigFiles')
const utils = require('../utils')

exports.createPackageJSON = createProjectConfigFiles.createPackageJSON
exports.createProjectConf = createProjectConfigFiles.createProjectConf
exports.createOtherRelatesFiles = createProjectConfigFiles.createOtherRelatesFiles
exports.copyConfigFiles = copyConfigFiles
exports.npmInstallation = () => {
  exec('npm install', (err) => {
    if (err) {
      utils.warn(`Unexpected Error: ${err}`)
      process.exit(1)
    }

    utils.info('Congratulation! All is done!!')
  })
}
