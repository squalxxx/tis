let arr = [2, 5, 9, 3, 1, 4];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    sum += arr[i];
  }
}

console.log(sum);