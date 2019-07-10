const add = require('./src/add');
const show = require('./src/show');

(function() {
  const ARGS = process.argv;
  const arg = ARGS[2];

  if (arg === 'add') return add();

  if (arg === 'show') return show();

  console.log('oopss unknown command!!');
  process.exit(1);
})();
