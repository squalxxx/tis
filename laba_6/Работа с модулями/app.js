// var greeting1 = require('./greeting.js');
// console.log(`Hello ${greeting1.name}`); // Hello Alice

// var greeting2 = require('./greeting.js');
// greeting2.name = 'Bob';

// console.log(`Hello ${greeting2.name}`); // Hello Bob
// console.log(`Hello ${greeting1.name}`); // Hello Bob

const welcome = require('./welcome');
welcome.getMorningMessage();
welcome.getEveningMessage();