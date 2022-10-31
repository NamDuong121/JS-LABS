// Viết hàm function cloneObject(obj) để clone một object obj truyền vào, và trả về là một object mới có đầy đủ các keys của object truyền vào.
// Ví dụ:
const studentA = { name: 'Bob', math: 9 };

// console.log(studentA === studentB); // should be false
// console.log(studentB.name); // Bob
// console.log(studentB.math); // 9

// function cloneObject(obj) {
//   const newObj = {};
//   for (let key in obj) {
//     newObj[key] = obj[key];
//   }
//   return newObj;
// }

// function cloneObject(obj) {
//   return Object.assign({}, obj);
// }

function cloneObject(obj) {
  return { ...obj };
}
const studentB = cloneObject(studentA);
console.log(cloneObject(studentA));
console.log(studentA === studentB);
console.log(studentB.name);
console.log(studentB.math);
