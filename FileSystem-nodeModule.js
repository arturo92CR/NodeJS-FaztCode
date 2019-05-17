const fs = require('fs');

fs.writeFile('./FS-Test/texto.txt', 'linea uno', function callback(err) {
    if (err) {
        console.log(err);
    }
    console.log('archivo creado');
})