let num = 12340;
let pix = String(num)[4];

if (pix == 0 || pix == 2 || pix == 4 || pix == 6 || pix == 8) {
	console.log('Последнее число в строке четное');
} else {
	console.log('Последнее число в строке нечетное');
};