// Viết hàm isEqual(obj1, obj2) nhận vào 2 objects và trả về:
// true nếu số lượng keys của 2 objects bằng nhau, và giá trị của từng key cũng bằng nhau (dùng === để so sánh)
// ngược lại là false
// Ví dụ:
// isEqual({}, {}) --> true
// isEqual({ name: 'Bob' }, { name: 'Alice' }) --> false
// isEqual({ name: 'Bob' }, { name: 'Bob' }) --> true
// isEqual({ name: 'Bob' }, { name: 'Bob', age: 18 }) --> false
// Giả sử kiểu dữ liệu của các thuộc tính của cả 2 objects đều là kiểu dữ liệu primitive.

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function isEqual(obj1, obj2) {
  //if Empty -> true
  if (isEmpty(obj1) && isEmpty(obj2)) return true;
  let result = false;
  for (let key1 in obj1) {
    for (let key2 in obj2) {
      result = obj1[key1] === obj2[key2];
    }
  }
  return result;
}

console.log(isEqual({}, {}));
console.log(isEqual({ name: 'Bob' }, { name: 'Alice' }));
console.log(isEqual({ name: 'Bob' }, { name: 'Bob' }));
console.log(isEqual({ name: 'Bob' }, { name: 'Alice', age: 18 }));
