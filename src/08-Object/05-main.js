//Object excercise:
// 1. Create an object student with name is Nam  and age is 18
const student = {
  name: 'Nam',
  age: 18,
};
//or

const student1 = {};
student1.name = 'Nam';
student1.age = 18;
console.log(student1);

// 2. Check if an object is empty (means have no key)

function isEmpty(object) {
  return Object.keys(object).length === 0;
}
console.log(isEmpty({}));
console.log(isEmpty({ id: 1 }));
// 3. Get average mark of an object:
// callAverage({math: 10, english : 8}) -> 9

function calcAverage(mark) {
  if (!mark) return -1;

  const length = Object.keys(mark).length;
  let sum = 0;
  for (let key in mark) {
    sum += mark[key];
  }

  return (sum / length).toFixed(1);
}

console.log(calcAverage({ math: 9, english: 10 }));
