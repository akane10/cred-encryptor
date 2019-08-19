const fs = require('fs');

const toJson = data => JSON.stringify(data, null, 2);

function read(pathData) {
  try {
    const data1 = fs.readFileSync(pathData, 'utf-8');
    const data = JSON.parse(data1);
    return data;
  } catch (e) {
    fs.writeFileSync(pathData, '[]', 'utf8');
    return [];
  }
}

const addJson = newData => data => {
  const oldData = JSON.parse(data);
  oldData.push(newData);

  return toJson(oldData);
};

function editFile(path, fn) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const newData = fn(data);
    fs.writeFileSync(path, newData, 'utf-8');
  } catch (e) {
    const newData = fn(data);
    fs.writeFileSync(pathData, newData, 'utf8');
  }
}

module.exports = {
  addJson,
  editFile,
  toJson,
  read
};
