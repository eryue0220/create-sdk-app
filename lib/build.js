/**
 * @date 2017-03-10
 * @file build.js
 * @author Cinchen
 */

const utils = require('./utils')
const pkg = require('../package.json')
const createSDKScaffold = require('./create-sdk-scaffold/')
const copyConfigFiles = require('./project-configure')

function configPackageFiles(project_name) {
  copyConfigFiles.createPackageJSONFile(project_name)
  copyConfigFiles.createOtherRelatesFiles()
  copyConfigFiles.copyConfigFiles()
  copyConfigFiles.npmInstallation()
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
  `   init <project_name>`,
  ``,
  ` Options:`,
  ``,
  `   -h, help      print usage about "create-sdk-app"`,
  `   -v, version   print the "create-sdk-app" version`,
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
    configPackageFiles(args[3])
  } else {
    app.help()
  }
}
