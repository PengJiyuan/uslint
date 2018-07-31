// eject .eslintrc / .stylelintrc to root directory.

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { promisify } = require('util');

const stylelintrc = path.resolve(__dirname, 'bin/.stylelintrc');
const eslintrc = path.resolve(__dirname, 'bin/.eslintrc');
const root = process.cwd();
const copy = promisify(fs.copyFile);

function copyIt(file, name) {
  copy(eslintrc, path.resolve(root, name))
    .then((res) => {
      console.log(chalk.green(`Copy ${chalk.cyan.bold(name)} to ${chalk.cyan.bold(path.resolve(root, name))} success!`));
    }).catch((err) => {
      console.log('copy error!');
    });
}

copyIt(eslintrc, '.eslintrc');
copyIt(stylelintrc, '.stylelintrc');
