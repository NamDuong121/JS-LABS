//Write to function classify student
// Receive mark as a number, output as below
// mark > 8 => excellence
//7 <= mark <= 8 => Good
//  4<= mark <=6 => Not good
// mark < 4  => bad

//v1
function classifyStudent(mark) {
  let result;
  if (mark > 8) {
    result = 'Excellence';
  } else if (mark >= 7) {
    result = 'Good';
  } else if (mark >= 4) {
    result = 'Not Good';
  } else {
    result = 'Bad';
  }
  return result;
}
console.log(classifyStudent(9));
console.log(classifyStudent(7));
console.log(classifyStudent(5));
console.log(classifyStudent(3));

//v2
function classifyStudent(mark) {
  if (mark < 0 || mark > 10) return 'Invalid mark';
  let result = 'Bad';

  if (mark > 8) result = 'Excelence';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 4) result = 'Not Good';

  return result;
}
console.log(classifyStudent(11));
console.log(classifyStudent(7));
console.log(classifyStudent(5));
console.log(classifyStudent(3));

//v3
function classifyStudent(mark) {
  if (mark < 0 || mark > 10) return 'Invalid mark';

  if (mark > 8) return 'Excelence';
  if (mark >= 7) return 'Good';
  if (mark >= 4) return 'Not Good';

  return 'Bad';
}
console.log(classifyStudent(10));
console.log(classifyStudent(7));
console.log(classifyStudent(5));
console.log(classifyStudent(3));
