// Viết hàm transformNumbers(numberList) để biến đổi các số hiện tại của mảng numberList thành các số mới theo công thức.
// f(i) = f(i - 1) + f(i + 1) với i là index
// Tạm dịch nôm na là phần tử ở vị trí i sẽ bằng tổng của 2 phần tử bên cạnh.
// Trường hợp đầu mảng và cuối mảng sẽ bằng phần tử liền kề.
// Trường hợp mảng có ít hơn một phần tử thì sẽ giữ nguyên, không biến đổi.
// Lưu ý: mảng trả về là một mảng mới, không phải là mảng truyền vào nhé!

function transformNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  if (numberList.length === 1) return [...numberList];
  const newNumberList = [...numberList];
  for (let i = 0; i < numberList.length; i++) {
    newNumberList[i] = numberList[i - 1] + numberList[i + 1];
    if (i === 0) newNumberList[i] = numberList[i + 1];
    if (i === numberList.length - 1) newNumberList[i] = numberList[i - 1];
  }
  return newNumberList;
}
function transformNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  if (numberList.length === 1) return [...numberList];
  const newNumberList = [...numberList];
  for (let i = 0; i < numberList.length; i++) {
    newNumberList[i] =
      numberList[i - 1] + numberList[i + 1] || numberList[i - 1] || numberList[i + 1];
  }
  return newNumberList;
}
//forEach
function transformNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  if (numberList.length === 1) return [...numberList];
  const newNumberList = [...numberList];
  numberList.forEach((number, i) => {
    newNumberList[i] =
      numberList[i - 1] + numberList[i + 1] || numberList[i - 1] || numberList[i + 1];
  });

  return newNumberList;
}

//map

function transformNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  if (numberList.length === 1) return [...numberList];
  const newNumberList = [...numberList];

  return numberList.map((e, i) => {
    const prevNumber = numberList[i - 1] || 0;
    const nextNumber = numberList[i + 1] || 0;
    return prevNumber + nextNumber;
  });
}

function transformNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  if (numberList.length === 1) return [...numberList];

  let newNumberList = [...numberList];
  for (let i = 0; i < numberList.length; i++) {
    const prevNumber = numberList[i - 1] || 0;
    const nextNumber = numberList[i + 1] || 0;
    newNumberList[i] = prevNumber + nextNumber;
  }
  return newNumberList;
}
function transformNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  if (numberList.length === 1) return [...numberList];

  let newNumberList = [...numberList];

  numberList.forEach((e, i) => {
    const prevNumber = numberList[i - 1] || 0;
    const nextNumber = numberList[i + 1] || 0;
    newNumberList[i] = prevNumber + nextNumber;
  });

  return newNumberList;
}

console.log(transformNumbers([1, 2, 3, 4]));
console.log(transformNumbers([2, 4, 6, 8]));
console.log(transformNumbers([1, 2]));
