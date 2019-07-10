const fs = require('fs');
const { decrypt } = require('../util');
const { pathData } = require('../config/config');

function show() {
  const data1 = fs.readFileSync(pathData, 'utf-8');
  const data = JSON.parse(data1);

  const dec = (i, index) => {
    console.log('no:', index);
    console.log('title:', decrypt(i.title));
    console.log('username:', decrypt(i.username));
    console.log('email:', decrypt(i.email));
    console.log('password:', decrypt(i.password));
    console.log('\n');
    // return {
    //   no: index,
    //   title: decrypt(i.title),
    //   usernameOrEmail: decrypt(i.usernameOrEmail),
    //   password: decrypt(i.password)
    // };
  };

  data.forEach(dec);
  // console.log(decrypting);
}

module.exports = show;
