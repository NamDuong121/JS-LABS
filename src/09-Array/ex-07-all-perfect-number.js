//Check is perfect number -> sum of divisor list === n

function isPerfectNumber(n) {
  let sumDivisorList = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) sumDivisorList += i;
  }

  return n === sumDivisorList;
}

// function isAllPerfectNumber(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return false;
//   for (let i = 0; i <= numberList.length - 1; i++) {
//     const number = numberList[i];

//     if (!isPerfectNumber(number)) return false;
//   }

//   return true;
// }

// use reduce
// function isAllPerfectNumber1(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return false;

//   const perfectNumberList = numberList.reduce((perfectNumber, number) => {
//     if (isPerfectNumber(number)) perfectNumber += 1;
//     return perfectNumber;
//   }, 0);

//   return perfectNumberList === numberList.length;
// }

// console.log(isAllPerfectNumber1([28, 6]));

//use forEach

// function isAllPerfectNumber(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return false;

//   let perfectNumberLength = 0;
//   numberList.forEach((number) => {
//     if (isPerfectNumber(number)) perfectNumberLength++;
//   });
//   return perfectNumberLength === numberList.length;
// }

// console.log(isAllPerfectNumber([6]));

//filter

// function isAllPerfectNumber(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return false;

//   const perfectNumberList = numberList.filter((number) => isPerfectNumber(number));
//   return perfectNumberList.length === numberList.length;
// }

//every

function isAllPerfectNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  return numberList.every((number) => isPerfectNumber(number));
}

console.log(isAllPerfectNumber([6]));
