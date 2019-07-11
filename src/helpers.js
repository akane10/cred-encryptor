const fs = require('fs');

const toJson = data => JSON.stringify(data, null, 2);

function read(pathData) {
  const data1 = fs.readFileSync(pathData, 'utf-8');
  const data = JSON.parse(data1);
  return data;
}

const addJson = newData => data => {
  const oldData = JSON.parse(data);
  oldData.push(newData);

  return toJson(oldData);
};

function editFile(path, fn) {
  const data = fs.readFileSync(path, 'utf-8');
  const newData = fn(data);
  fs.writeFileSync(path, newData, 'utf-8');
}

module.exports = {
  addJson,
  editFile,
  toJson,
  read
};
