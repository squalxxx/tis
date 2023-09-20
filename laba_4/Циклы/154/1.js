let numbers = [1, 2, 3, 4, 0, 5, 6, 7];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 0) {
    break;
  }

  console.log(numbers[i]);
}