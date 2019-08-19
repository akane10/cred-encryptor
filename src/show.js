const fs = require('fs');
const { read } = require('./helpers');
const { decrypt } = require('../util');
const { pathData } = require('../config/config');

function show() {
  const data = read(pathData);

  if (data.length === 0) return console.log('nothing to show');

  const dec = (i, index) => {
    console.log('no:', index);
    console.log('title:', decrypt(i.title));
    console.log('username:', decrypt(i.username));
    console.log('email:', decrypt(i.email));
    console.log('password:', decrypt(i.password));
    console.log('\n');
  };

  data.forEach(dec);
}

module.exports = show;
