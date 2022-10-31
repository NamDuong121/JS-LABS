// Writo javasrcipt function to parameterize a string
//Duong Van Nam -> duong-van-nam;

function parameterize(str) {
  if (str === '') return '';

  const toArr = str.split(' ');
  return toArr.join('-').toLowerCase();
}

function parameterize(str) {
  if (str === '') return '';

  const lowerCaseStr = str.toLowerCase();

  return lowerCaseStr.replaceAll(' ', '-');
}

console.log(parameterize('Duong Van Nam'));
