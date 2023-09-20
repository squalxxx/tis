let numbers = [1, 2, 3, -4, 5, 6, 7];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    break;
  }
  sum += numbers[i];
}

console.log(sum);