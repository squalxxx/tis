const os = require('os');
const greeting = require('./greeting');

let userName = os.userInfo().username;

console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));

const User = require('./user.js');

let john = new User('John', 18);
john.sayHi();