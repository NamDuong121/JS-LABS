//1. Convert hours to seconds

function convertHoursToSeconds(hours) {
  if (hours < 0) return -1;
  if (hours === 0) return 0;

  const SECOND_PER_HOUR = 3600;

  return hours * SECOND_PER_HOUR;
}

console.log(convertHoursToSeconds(1));

//2. Given 3 number, find max
function findMax(a, b, c) {
  let max = a;

  if (b > max) max = b;
  if (c > max) max = c;

  return max;
}
console.log(findMax(1, 2, 3));

function findMax(a, b, c) {
  if (a > b && a > c) return a;
  if (b > a && b > c) return b;

  return c;
}
console.log(findMax(4, 7, 3));

//3. Given 3 number ,find max even number

function findMaxEven(a, b, c) {
  let max = Number.NEGATIVE_INFINITY;

  if (a % 2 === 0 && a > max) max = a;
  if (b % 2 === 0 && b > max) max = b;
  if (c % 2 === 0 && c > max) max = c;

  return max;
}

console.log(findMaxEven(3, 2, 7));
