const arr = [1, 4, 2, 3, 5];
// sort(compareFn) ->  sắp xếp tăng dần hoặc giảm dần theo điều kiện.
// TH : ascending
console.log(arr.sort((a, b) => a - b));
//TH decrease
console.log(arr.sort((a, b) => b - a));
//null hoặc undefined thì được đưa về cuối mảng ( null đúng trước undefined)
// Nếu compareFn k đc truyền vào thì các phần tử của mảng sẽ chuyển về string và so sánh(tăng dần)
const array = [1, null, 2, undefined];
console.log(array.sort());

//Nếu compareFn(a,b) -> a -b > 0 -> b đứng trước a đứng sau, a - b= 0 -> a,b ngang nhau,  a - b < 0 -> a đứng trước b đứng sau.
