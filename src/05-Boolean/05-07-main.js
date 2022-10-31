//if...else condition

// function printMonth(n) {
//   let month = '';
//   if (n === 1) month = 'Jan';
//   else if (n === 2) month = 'Feb';
//   else if (n === 3) month = 'Mar';
//   else if (n === 4) month = 'Apr';
//   else if (n === 5) month = 'May';
//   else if (n === 6) month = 'June';
//   else if (n === 7) month = 'July';
//   else if (n === 8) month = 'Aug';
//   else if (n === 9) month = ' Sep';
//   else if (n === 10) month = 'Oct';
//   else if (n === 11) month = 'Nov';
//   else if (n === 12) month = 'Dec';
//   else month = 'Invalid number';

//   return month;
// }

// console.log(printMonth(13));

// Switch...case
function printMonth(n) {
  let month = '';
  switch (n) {
    case 1:
      month = 'January';
      break;
    case 2:
      month = 'February';
      break;
    case 3:
      month = 'March';
      break;
    case 4:
      month = 'April';
      break;
    case 5:
      month = 'May';
      break;
    case 6:
      month = 'June';
      break;
    case 7:
      month = 'July';
      break;
    case 8:
      month = 'August';
      break;
    case 9:
      month = 'September';
      break;
    case 10:
      month = 'October';
      break;
    case 11:
      month = 'November';
      break;
    case 12:
      month = 'December';
      break;

    default:
      month = 'Invalid number';
      break;
  }
  return month;
}

console.log(printMonth(2));
