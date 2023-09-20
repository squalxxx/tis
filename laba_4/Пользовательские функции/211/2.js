function areAllDigitsOdd(num) {
	let digits = num.toString().split("");
	
	for (let digit of digits) {
	  if (parseInt(digit) % 2 === 0) {
		return false;
	  }
	}
	
	return true;
}
  
console.log(areAllDigitsOdd(13579)); 
console.log(areAllDigitsOdd(24680)); 