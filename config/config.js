const dotenv = require('dotenv');
const crypto = require('crypto');
dotenv.config();

const algorithm = 'aes-256-cbc';
const key = crypto
  .createHash('sha256')
  .update(String(process.env.SALT))
  .digest('base64')
  .substr(0, 32);

const iv = crypto.randomBytes(16);

module.exports = {
  algorithm,
  key,
  iv,
  pathData: './data.json'
};
