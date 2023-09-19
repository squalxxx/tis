let num = 55;
let sum = 0;

if (num >= 1 && num <= 99) {
    if (num <= 9) {
        sum = num
        console.log('Сумма цифр однозначна и равна ' + sum);
    } else if (num >= 10 && num <= 99) {
        sum = Math.floor(num / 10) + (num % 10);
        console.log('Сумма цифр двузначна и равна ' + sum);
    };
} else {
    console.log('Число не попадает в диапазон от 10 до 99.');
};
