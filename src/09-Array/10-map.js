// map() -> biến đổi các phần tử này sang phần tử khác. Trả về 1 mảng mới.
//Lưu ý: số lượng phần tử không thay đổi

function map(arr, callbackFn) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') return undefined;

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const newElement = callbackFn(element, i);
    newArr.push(newElement);
  }
  return newArr;
}

console.log(map([1, 2, 3], (x, idx) => (idx % 2 === 0 ? x + 1 : x)));
console.log([1, 2, 3].map((x, idx) => (idx % 2 === 0 ? x + 1 : x)));
