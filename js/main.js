
// Cлучайное целое число
let randomInt = (numMin, numMax) => {
	if (numMin < 0 || numMax < 0 || numMax <= numMin) {
		console.log('Задано число в отрицательном диапозоне или max значение меньше или равно min!');
	} else {
		numMin = Math.ceil(numMin);
		numMax = Math.floor(numMax);
		return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
	}
}
console.log(randomInt(5, 10));

// Максимальная длина строки
let strLengthMax = (str, strMax) => {
	if (str.length <= strMax) {
		return true;
	} else {
		return false;
	}
}
console.log(strLengthMax('Текст', 10));