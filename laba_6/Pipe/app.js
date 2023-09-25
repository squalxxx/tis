// const fs = require('fs');

// let readbleStream = fs.createReadStream('hello.txt', 'utf8');
// let writeableStream = fs.createWriteStream('some.txt', 'utf8');

// readbleStream.on('data', function (chunk) {
//     writeableStream.write(chunk);
// });

const fs = require('fs');

let readbleStream = fs.createReadStream('hello.txt', 'utf8');
let writeableStream = fs.createWriteStream('some.txt');

readbleStream.pipe(writeableStream);