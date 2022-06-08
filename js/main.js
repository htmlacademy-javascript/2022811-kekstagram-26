
// Cлучайное целое число
const randomInt = (numMin, numMax) => {
  if (numMin < 0 || numMax < 0 || numMax <= numMin) {
    return false;
  } else {
    numMin = Math.ceil(numMin);
    numMax = Math.floor(numMax);
    return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
  }
};
randomInt(5, 2);

// Максимальная длина строки
const strLengthMax = (str, strMax) => {
  if (str.length <= strMax) {
    return true;
  } else {
    return false;
  }
};
strLengthMax('Текст', 10);
