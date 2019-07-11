const inquirer = require('inquirer');
const { addJson, editFile } = require('./helpers');
const { encrypt } = require('../util');
const { pathData } = require('../config/config');

const QUESTIONS = [
  {
    name: 'title',
    type: 'input',
    message: 'Title:',
    validate: function(input) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      return 'Project name may only include letters, numbers, underscores and hashes.';
    }
  },
  {
    name: 'username',
    type: 'input',
    message: 'Username:'
  },
  {
    name: 'email',
    type: 'input',
    message: 'Email:',
    validate: function(input) {
      const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (regEx.test(input)) return true;
      return 'not sure if it is a valid email format';
    }
  },
  {
    name: 'password',
    type: 'input',
    message: 'Password:',
    validate: function(input) {
      if (input.length < 5) return 'min 5 char';
      return true;
    }
  }
];

async function add() {
  try {
    const answers = await inquirer.prompt(QUESTIONS);
    const title = answers['title'];
    const username = answers['username'];
    const email = answers['email'];
    const password = answers['password'];

    if (!username && !email)
      return console.log('either usename or email is required');

    const data = {
      title: encrypt(title),
      username: encrypt(username),
      email: encrypt(email),
      password: encrypt(password)
    };

    const adding = addJson(data);
    editFile(pathData, adding);
  } catch (e) {
    console.log('bruh error ', e);
  }
}

module.exports = add;
