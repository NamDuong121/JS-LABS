//every -> return Boolean value.
//kiểm tra các phần tử trong mảng có thoả với điều kiện hay không?
//Nếu có trả về true và ngược lại

function every(arr) {
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) return false;
  }

  return true;
}
//some -> trả về giá trị Boolean, kiểm tra tất cả phần tử trong mảng, chỉ cần 1 phần tử trong mảng thoả mãn điều kiện
//sẽ trả về true và ngược lại là false.
function some(arr) {
  if (!Array.isArray(arr)) return false;

  let isValid = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) return (isValid = true);
  }

  return isValid;
}

//indexOf -> tìm vị trí đầu tiên của phần tử trong mảng, trả về index của phần tử cần tìm, nếu không tìm thấy sẽ trả về -1

function indexOf(arr) {
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) return i;
  }
  return -1;
}
//Tìm vị trí số 2
console.log(indexOf([1, 2, 6]));
console.log(indexOf([0, 1, 4]));
function indexOf(arr, fromIndex) {
  if (!Array.isArray(arr)) return false;

  for (let i = fromIndex; i < arr.length; i++) {
    if (arr[i] === 5) return i;
  }
  return -1;
}
//Tìm index của gía trị 5, từ phần tử thứ 2 trong mảng
console.log(indexOf([1, 5, 2, 3, 4, 5, 6], 2)); //5
console.log(indexOf([1, 5, 2, 3, 4, 6], 2)); // -1

console.log(indexOf([1, 5, 2, 3, 4, 5], -1)); // -1

//lastIndexOf() -> tìm index của phần tử cuối cùng mà phần tử cần tìm.
function lastIndexOf(arr) {
  if (!Array.isArray(arr)) return false;

  let lastIndexElement;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) lastIndexElement = i;
  }
  return lastIndexElement;
}
console.log(lastIndexOf([1, 4, 2, 3, 4])); // 4;
console.log(lastIndexOf([1, 4, 2, 3, 4, 6, 4])); //6

//includes -> kiểm tra có chứa phần tử cần tìm không. Trả về giá trị boolean.
function includes(arr, fromIndex) {
  if (!Array.isArray(arr)) return false;
  if (fromIndex === undefined) fromIndex = 0;

  for (let i = fromIndex; i < arr.length; i++) {
    if (arr[i] === 2) return true;
  }
  return false;
}

console.log(includes([1, 2, 3], 1));
console.log(includes([1, 4, 3]));

//callback

function calcSum(callbackFn) {
  let sum = 0;
  for (let i = 0; i < 5; i++) {
    sum += i;
  }
  callbackFn(sum);
}
function handleOnFinish(sum) {
  console.log('Sum is:', sum);
}

calcSum(handleOnFinish);
