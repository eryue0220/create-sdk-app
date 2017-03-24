/**
 * @date 2017-03-10
 * @file build.js
 * @author Cinchen
 */

const utils = require('./utils')
const pkg = require('../package.json')
const createSDKScaffold = require('./create-sdk-scaffold/')
const tasks = require('./tasks')

function executeTasks({ project, es6 }) {
  tasks.createPackageJSON({ project, es6 })
  tasks.createOtherRelatesFiles()
  tasks.createProjectConf(project)
  tasks.copyConfigFiles(es6)
  tasks.npmInstallation()
}

const app = module.exports = {}

app.name = pkg.name

app.version = () => utils.info(`v${pkg.version}`)

app.help = () => utils.info([
  ``,
  `  Usage: ${app.name} <command> | <options>`,
  '',
  ` Commands: `,
  ``,
  `   init <project_name> | <use_es6>`,
  ``,
  ` Options:`,
  ``,
  `   -h, help      print usage about "create-sdk-app"`,
  `   -v, version   print the "create-sdk-app" version`,
  `   es6           set the environment support ECMAScript 6`
  ``
].join('\n'))

app.run = () => {
  const args = process.argv
  const version = process.versions.node
  const versionArray = version.split('.')

  if (versionArray[0] < 6 || versionArray[1] < 8) {
    utils.warn(
      `You are running on Node v${version}. \n` +
      `[${app.name}] requires Node v6.8 or higher. Please update.`
    )
    process.exit(1)
  }

  if (args.length < 3) {
    utils.warn(`Invalid Commands. You can use -h for help.`)
    process.exit(1)
  }

  if (args[2] === '-v' || args[2] === 'version') {
    app.version()
  } else if (args[2] === 'init' || args[2] === 'i') {
    createSDKScaffold(['src', 'dist', 'build'])
    executeTasks({
      project: args[3],
      es6: args[4] === 'es6'
    })
  } else {
    app.help()
  }
}
