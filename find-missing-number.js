'use strict';

function findMissingNumber(arr) {
  let upperBound = arr.reduce((a, b) => Math.max(a, b)); // макс. элемент
  let lowerBound = arr.reduce((a, b) => Math.min(a, b)); // мин. элемент
  let sum = arr.reduce((a, b) => a + b); // сумма масива

  /* Находим теоретическую сумму последовательных чисел, используя вариацию суммы Гаусса*/
  // Формула: [(N * (N + 1)) / 2] - [(M * (M - 1)) / 2];
  // N - верхняя граница, а M - нижняя граница

  let upperLimitSum = (upperBound * (upperBound + 1)) / 2;
  let lowerLimitSum = (lowerBound * (lowerBound - 1)) / 2;

  let theoreticalSum = upperLimitSum - lowerLimitSum;

  return theoreticalSum - sum;
}

console.log(findMissingNumber([2, 5, 1, 4, 9, 6, 3, 7]));
