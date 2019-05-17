const fs = require('fs');

fs.readFile('./FS-Test/texto.txt', function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});