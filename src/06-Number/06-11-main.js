//1. Get the ones of number having 3 digits

function extractTheOnes(n) {
  if (n < 100 || n > 999) return -1;
  return n % 10;
}
console.log(extractTheOnes(123));

console.log(extractTheOnes(123));
//2. Get the ten of number having 3 digits
//123
function extractTheTens(n) {
  if (n < 100 || n > 999) return -1;

  const tenDigtis = Math.trunc((n % 100) / 10);

  return tenDigtis;
}
console.log(extractTheTens(400));

//3. Get the hundreds of number having 3 digits
function extractTheHundreds(n) {
  if (n < 100 || n > 999) return -1;

  return Math.trunc(n / 100);
}
console.log(extractTheHundreds(400));

//1. Sum all degits of number having 3 digits

function calcSum3Degits(n) {
  if (n < 100 || n > 999) return -1;

  const unitDigit = n % 10;
  const tensDigit = Math.trunc((n % 100) / 10);
  const hundredsDigit = Math.trunc(n / 100);

  return unitDigit + tensDigit + hundredsDigit;
}

console.log(calcSum3Degits(123));
console.log(calcSum3Degits(453));
console.log(calcSum3Degits(1003));
console.log(calcSum3Degits(678));
