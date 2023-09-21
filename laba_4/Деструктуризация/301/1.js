let arr = ['John', 'Smit', 'development', 'programmer'];

let [name, surname, department, position = 'trainee'] = arr;

console.log(name); 
console.log(surname); 
console.log(department);
console.log(position); 