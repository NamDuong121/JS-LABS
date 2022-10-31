//filter () -> lọc các phần tử thoả mãn điều kiện, trả về 1 mảng con mới.

console.log([1, 2, 3, 4].filter((x) => x % 2 === 0)); //[2,4]

function filter(arr, callbackFn) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') return undefined;

  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (callbackFn(element, i)) newArr.push(element);
  }

  return newArr;
}
console.log(filter([1, 2, 3, 4], (e, i) => e % 2 === 0 && e > 2));
