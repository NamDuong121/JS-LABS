//Find max number in array use for, forEach, reduce

function findMax(arr) {
  if (arr.length === 0 || !Array.isArray(arr)) return undefined;

  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

console.log(findMax([1, 5, 2, 9]));

function findMax(arr) {
  if (arr.length === 0 || !Array.isArray(arr)) return undefined;
  let max = arr[0];
  arr.forEach((e) => {
    if (e > max) max = e;
  });
  return max;
}
console.log(findMax([1, 5, 2, 9]));

function findMax(arr) {
  if (arr.length === 0 || !Array.isArray(arr)) return undefined;

  return arr.reduce((max, number) => (number > max ? number : max));
}

console.log(findMax([1, 5, 2, 9]));

function findMax(arr) {
  if (arr.length === 0 || !Array.isArray(arr)) return undefined;
  let max = arr[0];
  arr.filter((number) => (number > max ? (max = number) : max));
  return max;
}

console.log(findMax([1, 2, 3]));
