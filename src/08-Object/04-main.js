const student = {
  id: 1,
  name: 'Nam',
  age: 19,
  address: 'Hue',
};

// const keyList = Object.keys(student);
// for (let i = 0; i < keyList.length; i++) {
//   const key = keyList[i];
//   console.log('key:', key);
//   console.log('value:', student[key]);
// }

// Object.keys(student).forEach((key, index) => {
//   console.log(key);
//   console.log(student[key]);
// });

for (let key in student) {
  console.log(key);
  console.log(student[key]);
}
