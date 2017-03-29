/**
 * @date 2017-03-21
 * @file createProjectConfigFile.js
 * @desc 创建项目配置
 * @author Cinchen
 */

const path = require('path')
const createProjectFile = require('./createProjectFile')

function createPackageJSON({ es6, useProxy }) {
  let devDependencies = es6 ?
  {
    "babel-core": "^6.21.0",
    "babel-loader": "^6.2.10",
    "babel-preset-es2015": "^6.18.0",
    "webpack": "^2.2.0"
  } :
  {
    "webpack": "^2.2.0"
  }

  devDependencies = Object.assign({}, devDependencies, useProxy ? {
      "webpack-proxy-plugin": "^1.0.2"
    }: {})

  const scripts = es6 ? {
    "start": "webpack -d --progress --profile --config build/webpack.es6.dev.config.js",
    "release": "webpack --progress --profile --config build/webpack.es6.prod.config.js"
  } :
  {
    "start": "webpack -d --progress --profile --config build/webpack.dev.config.js",
    "release": "webpack --progress --profile --config build/webpack.prod.config.js"
  }

  const content = {
    "name": 'sdk-app',
    "version": "0.1.0",
    "main": "src/index.js",
    "dependencies": {},
    devDependencies,
    scripts,
    "author": "create-sdk-app",
    "license": "MIT"
  }

  createProjectFile('package.json', JSON.stringify(content, null ,4))
}

function createProjectConf() {
  const config = {
    'project': {
      debug: true,
      entry: 'src/platform/web.js',
      develop: 'dist/develop/',
      production: 'dist/production',
      global_namespace: {}
    }
  }

  createProjectFile('project.json', JSON.stringify(config, null, 4))
}

function createOtherRelatesFiles() {
  const content = '.idea\n.vscode\nnpm-debug.log\nnode_modules'

  createProjectFile('.gitignore', content)
  createProjectFile('README.md', null)
}

module.exports = {
  createPackageJSON,
  createProjectConf,
  createOtherRelatesFiles
}
