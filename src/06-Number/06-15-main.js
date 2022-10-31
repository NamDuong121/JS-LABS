// Viết hàm isSymmetricNumber(n) để nhận vào số nguyên dương n có tối đa 3 chữ số và trả về true nếu n là số đối xứng, ngược lại trả về false.
// Giả sử tham số n truyền vào luôn luôn là số có tối đa 3 chữ số. (0 --> 999)
// Số đối xứng là số mà đọc từ trái sang phải nó giống như đọc từ phải sang trái.
// Ví dụ: 1, 22, 33, 121, 222, 353, 373, ...

function isSymmetricNumber(n) {
  if (n < 0 || n >= 1000) return -1;

  const ones = n % 10;
  const tens = Math.trunc((n % 100) / 10);
  const hundreds = Math.trunc(n / 100);

  if (n < 10) return true;
  if (n.toString().length === 2 && tens === ones) return true;
  if (n.toString().length === 3 && ones === hundreds) return true;

  return false;
}

console.log(isSymmetricNumber(0));
console.log(isSymmetricNumber(12));
console.log(isSymmetricNumber(11));
console.log(isSymmetricNumber(30));
console.log(isSymmetricNumber(111));
console.log(isSymmetricNumber(211));
console.log(isSymmetricNumber(818));
