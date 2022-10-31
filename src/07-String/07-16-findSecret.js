// Viết hàm findSecret(code) để tìm ra chuỗi mật mã với quy tắc như sau.
// Bỏ đi các ký tự HOA trong code, chuỗi còn lại chính là mật mã cần tìm.
// Lưu ý: không dùng hàm replaceAll() và không dùng regular expression (regexp)
// Ví dụ:

// findSecret('SUPERCODE') --> ''
// findSecret('SUPERhelloCODE') --> 'hello'
// findSecret('eaABFHsyUEYSJfrontJSKJSHend') --> 'easyfrontend'
//split("")
//for

function findSecret(code) {
  if (code === '') return '';

  let lowerCaseTxt = '';
  let toArr = code.split('');
  for (let i = 0; i < toArr.length; i++) {
    lowerCaseTxt += toArr[i].replace(/([A-Z])/g, '');
  }

  return lowerCaseTxt;
}

function findSecret(code) {
  if (code === '') return '';

  let lowerCaseText = code.replace(/([A-Z])/g, '');

  return lowerCaseText.replaceAll(' ', '');
}

function findSecret(code) {
  if (code === '') return '';

  let lower = code.toLowerCase();

  let result = '';
  for (let i = 0; i < lower.length; i++) {
    if (lower[i] === code[i] || lower[i].trim() === '') result += code[i];
  }

  return result;
}

console.log(findSecret('HELLOanhEm'));
console.log(findSecret('XIn chAo'));
