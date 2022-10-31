// check if a string contains an email adddress with `@gmail.com' or not.

function hasEmail(str) {
  if (str === '') return '';
  const email = '@gmail.com';
  //   return str.includes('@gmail.com');
  //   return str.indexOf(email) >= 0;
  return str.lastIndexOf(email) >= 0;
}

console.log(hasEmail('namduongqtkd@gmail.com'));
console.log(hasEmail('namduongqtkd'));
console.log(hasEmail(''));
