for (let i = 10; i <= 1000; i++) {
  let firstDigit = Math.floor(i / 10);
  let secondDigit = i % 10;
  let sum = firstDigit + secondDigit;
  console.log(sum);
}