// Liệt kê ước số của số nguyên dương n
// Viết hàm getDivisorList(n) nhận vào số nguyên dương (1 <= n <= 1000) và trả về một mảng các ước số của n.

// Sử dụng for...i từ 1 tới n getDivisorListV1(n)
// Sử dụng Array.from() và filter() để lặp từ 1 tới n getDivisorListV2(n)

function getDivisorList(n) {
  if (n < 1 || n > 1000) return undefined;

  let result = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      result.push(i);
    }
  }

  return result;
}

console.log(getDivisorList(8));
console.log(getDivisorList(10));
console.log(getDivisorList(12));

function createArrayInRange(n) {
  if (n < 1 || n > 1000) return undefined;

  return Array.from({ length: n }, (e, i) => i + 1);
}

function getDivisorList(n) {
  return createArrayInRange(n).filter((e) => n % e === 0);
}
console.log(getDivisorList(4));

// Sử dụng Array.from(), forEach() và sort(). Đồng thời chỉ lặp đến căn bậc 2 của n getDivisorListV3(n)
function getDivisorList(n) {
  if (n < 1 || n > 1000) return undefined;

  let result = [];
  const arr = Array.from({ length: n }, (e, i) => i + 1);
  for (let i = 0; i < Math.sqrt(n); i++) {
    const number = arr[i];
    if (n % number === 0) result.push(number, n / number);
  }
  return result.sort((a, b) => a - b);
}

function getDivisorList(n) {
  if (n < 1 || n > 1000) return [];

  const result = [];
  const arr = Array.from({ length: Math.sqrt(n) }, (e, idx) => idx + 1);
  arr.forEach((number) => {
    if (n % number === 0) {
      if (Math.sqrt(n) === number) result.push(number);
      else result.push(number, n / number);
    }
  });
  return result.sort((a, b) => a - b);
}

console.log(getDivisorList(4));
console.log(getDivisorList(8));
console.log(getDivisorList(10));

function getDivisorList(n) {
  if (n < 1 || n > 1000) return [];

  const numberList = Array.from({ length: n }, (e, idx) => idx + 1);
  return numberList.filter((e) => n % e === 0);
}
console.log(getDivisorList(4));
