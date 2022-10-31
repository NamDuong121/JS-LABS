// Random [0,n]

function getRandomNumber(n) {
  if (n <= 0) return -1;

  return Math.round(Math.random() * n);
}

console.log(getRandomNumber(3));
console.log(getRandomNumber(3));
console.log(getRandomNumber(3));
console.log(getRandomNumber(3));
console.log(getRandomNumber(3));
console.log(getRandomNumber(3));
console.log(getRandomNumber(3));
console.log(getRandomNumber(3));
console.log(getRandomNumber(-3));
