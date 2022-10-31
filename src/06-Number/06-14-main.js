// Viết hàm compareNumbers(a, b) nhận vào 2 số nguyên a, b bất kỳ.

// Trả về:

// 1 nếu a > b

// 0 nếu a = b

// -1 nếu a < b

function compareNumbers(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return '';

  if (a > b) return 1;
  if (a === b) return 0;

  return -1;
}

console.log(compareNumbers(1.5, 2));
console.log(compareNumbers(2, 1));
console.log(compareNumbers(2, 2));
