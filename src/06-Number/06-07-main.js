//Random [a,b] with a > b;
//Input : [3,1] =>  Output: 1 or 2 or 3

function getRandomNumber(max, min) {
  if (min <= 0 || max <= 0 || max <= min) return -1;

  const random = Math.random() * (max - min) + min;

  return Math.round(random);
}

console.log(getRandomNumber(9, 1));
console.log(getRandomNumber(9, 1));
console.log(getRandomNumber(9, 1));
console.log(getRandomNumber(9, 1));
console.log(getRandomNumber(9, 1));
console.log(getRandomNumber(9, 1));
console.log(getRandomNumber(9, 1));
console.log(getRandomNumber(9, 1));
console.log(getRandomNumber(9, -1));
