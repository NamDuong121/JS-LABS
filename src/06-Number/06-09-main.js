// 1. Write a function to check if a number is odd/even
function checkNumber(n) {
  return n % 2 === 0;
}

console.log(checkNumber(2));
// 2. Write a function to check if a number is divisible by 5

function isDivisibleBy5(n) {
  return n % 5 === 0;
}
console.log(isDivisibleBy5(4));
console.log(isDivisibleBy5(5));
// 3. Write a function to check if a number is perfect square

function isPerfectSquare(n) {
  if (n <= 0) return false;

  const a = Math.sqrt(n);
  const intA = Math.trunc(a);

  return Math.pow(intA, 2) === n;
}

console.log(isPerfectSquare(4));
console.log(isPerfectSquare(9));
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(20));
console.log(isPerfectSquare(25));
console.log(isPerfectSquare(36));
console.log(isPerfectSquare(42));
