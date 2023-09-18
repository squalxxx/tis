let arr = ['a', 'b', 'c', 'd', 'e'];

delete arr[1];
delete arr[3];

console.log(arr);
console.log(arr.length); //выведет 5

arr.splice(1, 2);

console.log(arr);
console.log(arr.length); // выведет 3
