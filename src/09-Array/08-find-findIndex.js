//find -> trả về phần tử đầu tiên trong mảng thoả mãn điều kiện. Ngược lại là undefined.

function find(array) {
  if (!Array.isArray(array)) return undefined;

  let isValid;
  for (let i = 0; i < array.length; i++) {
    const firstElement = array[i];
    if (firstElement > 5) return (isValid = firstElement);
  }

  return isValid;
}
function find(array) {
  if (!Array.isArray(array)) return undefined;

  for (let i = 0; i < array.length; i++) {
    const firstElement = array[i];
    if (firstElement > 5) return firstElement;
  }

  return undefined;
}
function find(array, callbackFn) {
  if (!Array.isArray(array)) return undefined;

  for (let i = 0; i < array.length; i++) {
    const firstElement = array[i];
    if (callbackFn(firstElement)) return firstElement;
  }

  return undefined;
}

function isGreater5(number) {
  return number > 5;
}

function find(array, callbackFn) {
  if (!Array.isArray(array)) return undefined;

  for (let i = 0; i < array.length; i++) {
    const firstElement = array[i];
    if (callbackFn(firstElement)) return firstElement;
  }

  return undefined;
}

console.log(find([1, 2, 3, 4, 7, 8], (number) => number > 5));
console.log(find([1, 2, 3, 4], (number) => number > 5));

//findIndex -> trả về index của phần tử đầu tiên trong mảng thoả mãn điều kiện. Ngược lại là -1.
function findIndex(array) {
  if (!Array.isArray(array)) return -1;
  let isValid = -1;
  for (let i = 0; i < array.length; i++) {
    const number = array[i];
    if (number % 2 === 0) return (isValid = i);
  }

  return isValid;
}
function findIndex(array) {
  if (!Array.isArray(array)) return -1;

  for (let i = 0; i < array.length; i++) {
    const number = array[i];
    if (number % 2 === 0) return i;
  }

  return -1;
}
function findIndex(array, callbackFn) {
  if (!Array.isArray(array)) return -1;

  for (let i = 0; i < array.length; i++) {
    const number = array[i];
    if (callbackFn(number)) return i;
  }

  return -1;
}
function isEven(number) {
  return number % 2 === 0;
}

function findIndex(array, callbackFn) {
  if (!Array.isArray(array)) return -1;

  for (let i = 0; i < array.length; i++) {
    const number = array[i];
    if (callbackFn(number)) return i;
  }

  return -1;
}

//Tim vi tri cua phan tu chia het cho 2
console.log(findIndex([1, 2, 3], (number) => number % 2 === 0)); //index 1
console.log(findIndex([1, 5, 3], (number) => number % 2 === 0)); //-1
