const add = require('./src/add');
const show = require('./src/show');
const deleteData = require('./src/delete');

(function() {
  const ARGS = process.argv;
  const arg = ARGS[2];

  if (arg === 'add') return add();

  if (arg === 'show') return show();

  if (arg === 'delete') return deleteData();

  console.log('oopss unknown command!!');
  process.exit(1);
})();
