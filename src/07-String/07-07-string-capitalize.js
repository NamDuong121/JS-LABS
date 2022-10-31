// Write  a function to transform a string
// The first letter in Uppercase;
// The rest in lowercase;
// 'Duong Van Nam' => 'Duong van nam'

function capitalize(str) {
  if (str === typeof Number || str === '') return false;

  const firstChar = str[0].toUpperCase();
  const rest = str.slice(1).toLowerCase();
  return `${firstChar}${rest}`;
}

console.log(capitalize('duong VAN NAM'));
console.log(capitalize(''));
