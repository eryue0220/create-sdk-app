/**
 * @date 2017-03-10
 * @file project-config/index.js
 * @author Cinchen
 */

const exec = require('child_process').exec
const createProjectFiles = require('./createProjectFiles')
const copyConfigFiles = require('./copyConfigFiles')
const utils = require('../utils')

exports.createPackageJSONFile = createProjectFiles.createPackageJSONFile
exports.createOtherRelatesFiles = createProjectFiles.createOtherRelatesFiles
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
