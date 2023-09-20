function checkEvenNumbers(arr) {
	if (Array.isArray(arr)) {
	  for (let number of arr) {
		if (number % 2 !== 0) {
		  return false;
		}
	  }
	  return true;
	} 
}
  
console.log(checkEvenNumbers([2, 4, 6]));
console.log(checkEvenNumbers([2, 3, 4]));
  