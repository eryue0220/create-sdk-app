/**
 * @date 2017-03-10
 * @file utils.js
 * @author Cinchen
 */

const chalk = require('chalk')

exports.warn = msg => console.error(chalk.red(`[create-sdk-app] ${msg}`))
exports.info = info => console.log(chalk.green(`[create-sdk-app] ${info}`))
exports.tip = tip => console.log(chalk.yellow(`[create-sdk-app] ${tip}`))
