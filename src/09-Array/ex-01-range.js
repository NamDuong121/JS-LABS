function createArrayInRange(a, b) {
  if (a > b || a <= -100 || b >= 100) return false;

  let range = [];
  for (let i = a; i <= b; i++) {
    range.push(i);
  }

  return range;
}
console.log(createArrayInRange(1, 5));

function createArrayInRange(a, b) {
  const length = b - a + 1;

  return Array.from({ length }, (e, i) => i + a);
}
console.log(createArrayInRange(2, 5));
