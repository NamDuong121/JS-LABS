// Print to 1-10;
const prinNumber = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
};
prinNumber();

//Print even number in to array [2,4,6,8,10];
const printEvenNumber = () => {
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) console.log(i);
  }
};

const printEvenNumber = () => {
  for (let i = 2; i < 10; i += 2) {
    console.log(i);
  }
};

printEvenNumber();
//Print even numbers but less than n
function prinEvenNumber(n) {
  if (n < 0) return;

  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) console.log(i);
  }
}

prinEvenNumber(10);
