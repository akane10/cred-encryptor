const inquirer = require('inquirer');
const fs = require('fs');
const { toJson, read } = require('./helpers');
const { decrypt } = require('../util');
const { pathData } = require('../config/config');

const QUESTIONS = [
  {
    name: 'number',
    type: 'list',
    message: 'What do you wnat to delete?',
    choices: read(pathData).map((i, index) => index)
  }
];

async function deleteData() {
  try {
    const data = read(pathData);

    const dec = (i, index) => {
      console.log('no:', index);
      console.log('title:', decrypt(i.title));
      console.log('\n');
    };
    data.forEach(dec);

    const answers = await inquirer.prompt(QUESTIONS);
    const number = answers['number'];

    data.splice(number, 1);
    const dataJson = toJson(data);
    fs.writeFileSync(pathData, dataJson, 'utf-8');
  } catch (e) {
    console.log(e);
  }
}

module.exports = deleteData;
