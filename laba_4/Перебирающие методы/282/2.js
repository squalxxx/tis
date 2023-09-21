let numbers = [1, 2, 3, 4, 5];
let productLessThan30 = numbers.every((number, index) => number * index < 30);

console.log(productLessThan30);