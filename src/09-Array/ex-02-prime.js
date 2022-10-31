//loop from 2 to n - 1

function isPrimeV1(n) {
  if (n < 0 || n >= 1000) return false;

  for (let i = 2; i < n - 1; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}

console.log(isPrimeV1(1));
console.log(isPrimeV1(2));
console.log(isPrimeV1(3));
console.log(isPrimeV1(4));
console.log(isPrimeV1(5));
console.log(isPrimeV1(6));
console.log(isPrimeV1(11));

//loop from 2 to sqrt(n)

function isPrimeV2(n) {
  if (n < 0 || n >= 1000) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return n > 1;
}
function isPrimeV2(n) {
  if (n < 0 || n >= 1000) return false;

  for (let i = 2; i < n - 1; i += 2) {
    if (n % i === 0) return false;
  }

  return n > 1;
}
