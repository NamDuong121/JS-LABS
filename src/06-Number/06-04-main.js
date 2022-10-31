console.log((0.1).toFixed(20));
console.log((0.2).toFixed(20));
console.log((0.1 + 0.2).toFixed(20));
console.log((0.3).toFixed(20));

console.log(0.1 + 0.2 == 0.3);
console.log(0.1 + 0.2 === 0.3);

console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);
console.log(Math.abs(0.1 + 0.2 - 0.3));
console.log(Number.EPSILON);

console.log((0.1 + 0.2).toFixed(1) === (0.3).toFixed(1));

function equal(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

const x = 1000.1;
const z = 1000.2;
const y = 2000.3;
console.log(x + z);
console.log(equal(x + z, y));
