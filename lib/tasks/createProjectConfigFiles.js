/**
 * @date 2017-03-21
 * @file createProjectConfigFile.js
 * @desc 创建项目配置
 * @author Cinchen
 */

const path = require('path')
const createProjectFile = require('./createProjectFile')

function createPackageJSON({ project, es6 }) {
  const devDependencies = es6 ?
  {
    "babel-core": "^6.21.0",
    "babel-loader": "^6.2.10",
    "babel-preset-es2015": "^6.18.0",
    "webpack": "^2.2.0",
    "webpack-proxy-plugin": "^1.0.2"
  } :
  {
    "webpack": "^2.2.0",
    "webpack-proxy-plugin": "^1.0.2"
  }

  const scripts = es6 ? {
    "start": "webpack -d --progress --profile --config build/webpack.es6.dev.config.js",
    "release": "webpack --progress --profile --config build/webpack.es6.prod.config.js"
  } :
  {
    "start": "webpack -d --progress --profile --config build/webpack.dev.config.js",
    "release": "webpack --progress --profile --config build/webpack.prod.config.js"
  }

  const content = {
    "name": project,
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

function createProjectConf(project) {
  const config = {
    // 项目名称，用于代理和打包生成的文件
    project,
    // 开发环境下打包文件的目标路径
    develop_path: '/dist/develop/',
    // 生产环境下，打包文件的目标路径
    production_path: '/dist/production/',
    // 入口文件
    entry: 'src/platform/web.js',
    // SDK全局变量定义
    global_namespace: {},
    // sdk routes
    'xxx.xxx.com': {
      // 模拟线上环境，true调用dist/develop_path false调用dist/production
      debugMode: true,
      // 项目名称，用于代理和打包生成的文件
      project,
      url: /\/sdk\/\w+\.js/,
      // 开发环境下代理映射的目标路径
      develop_path: path.join(__dirname, '/dist/develop/'),
      // 生产环境下代理映射的目标路径
      production_path: path.join(__dirname, '/dist/production/')
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
