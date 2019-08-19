#!/usr/bin/env node

const add = require('./src/add');
const show = require('./src/show');
const deleteData = require('./src/delete');

(function() {
  const [_, __, command] = process.argv;

  if (command === 'add') return add();
  if (command === 'show') return show();
  if (command === 'delete') return deleteData();

  console.log('oopss unknown command!!');
})();
