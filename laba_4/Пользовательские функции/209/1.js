function divideByTwo(num) {
	let iterations = 0;
	
	while (num >= 10) {
	  num /= 2;
	  iterations++;
	}
	
	return iterations;
}

let result = divideByTwo(100000000000000000000);
console.log(result); 