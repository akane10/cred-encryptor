const dotenv = require('dotenv');
const crypto = require('crypto');
dotenv.config();

const algorithm = process.env.ALGORITHM;
const key = crypto
  .createHash(process.env.HASH)
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
