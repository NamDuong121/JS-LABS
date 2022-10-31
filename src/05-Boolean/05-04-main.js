// if number is positive number
function checkNumber1(n) {
  if (n > 0) {
  }
}

//if number is positive number and even number

function checkNumber2(n) {
  if (n > 0 && n % 2 === 0) {
  }
}

// if number is even positive and bigger than 10

function checkNumber3(n) {
  if (n > 0 && n % 2 === 0 && n > 10) {
  }
}

// if number is even positive, divisible by 5 and greater 10

function checkNumber4(n) {
  if (n > 0 && n % 2 === 0 && n > 10 && n % 5 === 0) {
  }
}

// if number is even positive or odd negative

function checkNumber5(n) {
  if ((n > 0 && n % 2 === 0) || (n < 0 && n % 2 !== 0)) {
  }
}

function checkNumber6(n) {
  const isEvenPositive = n > 0 && n % 2 === 0;
  const isOddNegative = n < 0 && n % 2 !== 0;
  if (isEvenPositive || isOddNegative) {
  }
}
