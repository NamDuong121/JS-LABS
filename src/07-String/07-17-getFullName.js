// Viết hàm getFullName(firstName, lastName) nhận vào firstName và lastName và trả về chuỗi fullName.
// Quy tắc để tạo chuỗi fullName như sau:
// firstName và lastName là optional (có thể không có)
// fullName không có khoảng trắng thừa ở đầu và cuối chuỗi
// firstName và lastName cần phải viết hoa chữ cái đầu tiên, chữ cái còn lại là viết thường

// Ví dụ:
// getFullName('Alice') --> 'Alice'
// getFullName('Alice', '') --> 'Alice'
// getFullName('', 'Nguyen') --> 'Nguyen'
// getFullName('Bob', 'Tran') --> 'Bob Tran'
// getFullName('john', 'pHAm') --> 'John Pham'

function getFullName(firstName, lastName) {
  if (firstName === undefined) firstName = '';
  if (lastName === undefined) lastName = '';

  const first =
    firstName === ''
      ? ''
      : firstName.trim()[0].toUpperCase() + firstName.trim().slice(1).toLowerCase();
  const last =
    lastName === ''
      ? ''
      : lastName.trim()[0].toUpperCase() + lastName.trim().slice(1).toLowerCase();
  return `${first} ${last}`.trim();
}

function capitalize(str) {
  if (str === '') return '';

  const firstChar = str.trim().toUpperCase();

  return `${firstChar[0]}${firstChar.slice(1).toLowerCase()}`;
}

function getFullName(firstName, lastName) {
  const fN = capitalize(firstName || '');
  const lN = capitalize(lastName || '');

  return `${fN} ${lN}`.trim();
}

console.log(getFullName(' duong', ' nam'));
console.log(getFullName('', ' nam'));
console.log(getFullName(' duong', ''));
