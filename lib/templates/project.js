/**
 * @file project.js
 */

const path = require('path');
const developPath = path.join(__dirname, '/dist/develop/');
const productionPath = path.join(__dirname, '/dist/production/');

// 请根据项目配置该表
module.exports = {
  // 项目名称，用于代理和打包生成的文件
  project: 'sdk_name',
  // 开发环境下打包文件的目标路径
  develop_path: '/dist/develop/',
  // 生产环境下，打包文件的目标路径
  production_path: '/dist/production/',
  // 入口文件
  entry: 'src/platform/web.js',
  // SDK全局变量定义
  global_namespace: {
    ReportSDK: true
  },
  // sdk routes
  'xxx.xxx.com': {
    // 模拟线上环境，true调用dist/develop_path false调用dist/production
    debugMode: true,
    // 项目名称，用于代理和打包生成的文件
    project: 'sdk_name',
    url: /\/sdk\/\w+\.js/,
    // 开发环境下代理映射的目标路径
    develop_path: developPath,
    // 生产环境下代理映射的目标路径
    production_path: productionPath
  }
};
