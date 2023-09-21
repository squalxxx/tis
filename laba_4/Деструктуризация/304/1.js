let arr = ['John', 'Smit', 'development'];

let [name, surname, department, month = (new Date()).getMonth() + 1, year = (new Date()).getFullYear()] = arr;

console.log(name);       
console.log(surname);    
console.log(department); 
console.log(month);      
console.log(year);