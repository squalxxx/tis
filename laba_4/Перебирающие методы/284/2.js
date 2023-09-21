const numbers = [1, 2, 3, 4, 5];

const hasProductGreaterThan30 = numbers.some((number, index) => number * index > 30);

console.log(hasProductGreaterThan30); 