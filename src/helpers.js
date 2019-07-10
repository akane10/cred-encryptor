const fs = require('fs');

const toJson = data => JSON.stringify(data, null, 2);

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
  editFile
};
