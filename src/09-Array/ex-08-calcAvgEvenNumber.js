// calculate avgrage even number in array;

function calcAvgOfAllEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  const evenNumber = numberList.filter((number) => number % 2 === 0);
  if (evenNumber.length === 0) return 0;
  const sumEvenNumber = evenNumber.reduce((sum, number) => (sum += number), 0) || 0;

  return Math.round(sumEvenNumber / evenNumber.length);
}

console.log(calcAvgOfAllEvenNumbers([1, 2]));
