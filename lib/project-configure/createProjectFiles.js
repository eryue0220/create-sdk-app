/**
 * @date 2017-03-13
 * @file createOtherRelateFiles.js
 * @desc 创建其他项目相关文档
 * @author Cinchen
 */

const fs = require('fs')
const path = require('path')
const utils = require('../utils')

function createPackageJSONFile(project_name) {
  const content = {
    "name": project_name,
    "version": "0.1.0",
    "main": "src/index.js",
    "dependencies": {},
    "devDependencies": {
      "webpack": "^2.2.0",
      "webpack-proxy-plugin": "^1.0.2"
    },
    "scripts": {
      "start": "webpack -d --progress --profile --config build/webpack.dev.config.js",
      "release": "webpack --progress --profile --config build/webpack.prod.config.js"
    },
    "author": "create-sdk-app",
    "license": "MIT"
  }

  createProjectFile('package.json', JSON.stringify(content, null ,4))
}

function createOtherRelatesFiles() {
  const content = '.idea\n.vscode\nnpm-debug.log\nnode_modules'

  createProjectFile('.gitignore', content)
  createProjectFile('README.md', null)
}

function createProjectFile(name, content, enconding = 'utf8') {
  const filename = name
  const absolutePath = path.join(process.cwd(), filename)

  if (fs.existsSync(absolutePath)) {
    utils.warn(`The ${filename} file has been existed. Please delete first.`)
    process.exit(1)
  }

  fs.writeFileSync(absolutePath, content, enconding)
}

module.exports = {
  createOtherRelatesFiles: createOtherRelatesFiles,
  createPackageJSONFile: createPackageJSONFile
}
