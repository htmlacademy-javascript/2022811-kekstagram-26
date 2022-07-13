// Cлучайное целое число
export const randomInt = (numMin, numMax) => {
  if (numMin < 0 || numMax < 0 || numMax <= numMin) {
    return false;
  } else {
    numMin = Math.ceil(numMin);
    numMax = Math.floor(numMax);
    return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
  }
};

// Максимальная длина строки
export const strLengthMax = (str, strMax) => (str.length <= strMax);
