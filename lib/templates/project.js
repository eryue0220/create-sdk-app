/**
 * @file project.js
 */

// 请根据项目配置该表
module.exports = {
  // sdk routes
  routes: {
    'jstatic.letvcdn.com': function() {},
    'sdk-m.le.com': function() {}
  },
  // 模拟线上环境
  debug: false,
  // 项目名称，用于代理和打包生成的文件
  project_name: 'report_sdk',
  // 开发环境下打包文件的目标路径
  develop_dist: 'dist/develop',
  // 生产环境下，打包文件的目标路径
  production_dist: 'dist/production',
  // 入口文件
  entry: 'src/platform/web.js',
  // SDK全局变量定义
  global_namespace: {
    ReportSDK: true
  }
};

