const numberList = [1, 2, 3];
// push -> thêm 1 hoặc nhiều phần tử vào cuối mảng và return về độ dài mới của mảng.
const addNumber = numberList.push(4, 5, 6);
console.log(numberList, addNumber);

//pop -> xoá đi phần tử cuối mảng và trả về phần tử đó.
const animal = ['Dog', 'Chicken', 'Bird'];
const lastAnimal = animal.pop();
console.log(animal, lastAnimal);

//shift -> xoá đi phần tử đầu tiên trong mảng và trả về phần tử đã xoá.
const array = [1, 2, 3];
const removeFirstElement = array.shift();
console.log(array, removeFirstElement);

//unshift -> thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng.
const colorList = ['Black', 'Red', 'Yellow'];
const addColor = colorList.unshift('Pink');
console.log(colorList, addColor);

//splice ->  xóa bỏ hoặc thay thế các phần tử hiện có, hoặc thêm phần tử mới vào vị trí xác định.
//xoá ->  trả về mảng đã xoá
const evenNumbers = [0, 2, 4, 6];
//xoá đi 4 -> [0,2,6];
const newEvenNumbers = evenNumber.splice(2, 1);
console.log(evenNumbers, newEvenNumbers);

//thay thế -> trả về mảng được thay thế.
//thay 7->9 [1,3,5,9]
const oddNumbers = [1, 3, 5, 7];
const newOddNumbers = oddNumbers.splice(3, 1, 9); //7
console.log(newOddNumbers, oddNumbers);

//thêm ->
//thêm 22 -> newArray [10,20,22,26,30,32,34]
const numberDivisibleBy2 = [10, 20, 26, 30, 32, 34];
const newArray = numberDivisibleBy2.splice(2, 0, 22);
console.log(newArray);
