//Khi so sánh khác kiểu dữ liệu (2 dấu bằng), js sẽ tự động convert giá trị về dạng number để so sánh.

const a = '2';
const b = '1';
console.log(a > b);

console.log(3 == '3'); // true

console.log(4 === '4'); //false

console.log(null == undefined); //true

console.log(null == 0); // false
