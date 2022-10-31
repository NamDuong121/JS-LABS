//Check number is positive even

//v1
function isPositiveEvenNumber(n) {
  let isValid;

  if (n > 0 && n % 2 === 0) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
}

//v2
function isPositiveEvenNumber(n) {
  let isValid = false;

  if (n > 0 && n % 2 === 0) return (isValid = true);

  return isValid;
}

console.log(isPositiveEvenNumber(2));

//v3
function isPositiveEvenNumber(n) {
  if (n > 0 && n % 2 === 0) return true;

  return false;
}

console.log(isPositiveEvenNumber(3));

//v4

function isPositiveEvenNumber(n) {
  return n > 0 && n % 2 === 0;
}

console.log(isPositiveEvenNumber(2));
