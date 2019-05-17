const os = require('os')
//console.log(os.cpus());
console.log('version de windows: ' + os.release());
console.log('arquitectura OS: ' + os.arch());

console.log('kernel del sistema operativo: ' + os.platform());
