let day = 32;

if (typeof day !== 'number' || day < 1 || day > 31) {
  console.log('Ошибка! Значение переменной "day" должно быть числом от 1 до 31.');
} else if (day >= 1 && day <= 10) {
  console.log('1 декада');
} else if (day >= 11 && day <= 20) {
  console.log('2 декада');
} else if (day >= 21 && day <= 31) {
  console.log('3 декада');
};
