// Kiểm tra mảng có chứa số nguyên tố không?
// Viết hàm hasPrime(numberList) nhận vào là một mảng số nguyên dương.
// Trả về true nếu có ít nhất một số nguyên tố, ngược lại trả về false.
// Gợi ý: có thể tận dụng lại hàm kiểm tra số nguyên tố đã làm ở bài tập trước đó.
// Viết bằng 5 cách khác nhau:
// Sử dụng for...i hasPrimeV1(numberList)
// Sử dụng forEach() hasPrimeV2(numberList)
// Sử dụng find() hasPrimeV3(numberList)
// Sử dụng findIndex() hasPrimeV4(numberList)
// Sử dụng some() hasPrimeV5(numberList)
function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i < n - 1; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}
function hasPrime(numberList, callbackfn) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  if (numberList.length === 1) return isPrime(numberList);

  for (let i = 0; i < numberList.length - 1; i++) {
    if (callbackfn(numberList[i])) return true;
  }
  return false;
}
console.log(hasPrime([3], isPrime));
console.log(hasPrime([4, 6, 5], isPrime));
console.log(hasPrime([]));

function hasPrimeForEach(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  if (numberList.length === 1) return isPrime(numberList);

  let result = false;
  numberList.forEach((number, i) => {
    if (isPrime(number) === true) return (result = true);
  });
  return result;
}
console.log(hasPrimeForEach([3, 5, 9]));
console.log(hasPrimeForEach([4, 6, 8]));
console.log(hasPrimeForEach([3]));
console.log(hasPrimeForEach([3, 2]));

//find
function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i < n - 1; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}
function hasPrimeFind(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  if (numberList.length === 1) return isPrime(numberList);
  let result = false;
  numberList.find((number) => (isPrime(number) ? (result = true) : result));

  return result;
}
console.log(hasPrimeFind([2, 3, 4]));
console.log(hasPrimeFind([3, 5, 4]));
console.log(hasPrimeFind([8, 6, 4]));
console.log(hasPrimeFind([3]));
console.log(hasPrimeFind([1, 2, 3]));

//findIndex
function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i < n - 1; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}

function hasPrimeFindIndex(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  if (numberList.length === 1) return isPrime(numberList);

  let result = false;
  numberList.findIndex((number) => {
    if (isPrime(number) === true) return (result = true);
  });

  return result;
}

console.log(hasPrimeFindIndex([3, 4, 6]));
console.log(hasPrimeFindIndex([4, 6]));
console.log(hasPrimeFindIndex([4, 6, 7]));

//some
function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i < n - 1; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}

function hasPrimeSome(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  if (numberList.length === 1) return isPrime(numberList);

  return numberList.some((number) => isPrime(number));
}

console.log(hasPrimeSome([2, 3, 4]));
console.log(hasPrimeSome([6, 4]));
console.log(hasPrimeSome([1]));
