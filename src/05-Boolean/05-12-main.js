// Dưới 6 tuổi hoặc từ 70 tuổi trở lên là được FREE (trả về 0)
// Từ 6 - 12 tuổi giá vé là 20.000 VND
// Trên 12 tuổi thì đồng giá 50.000 VND

// Trả về là một con số nguyên:
// -1 nếu dữ liệu không hợp lệ
// 0 nếu free
// các giá tiền nếu tuổi hợp lệ
// Giả sử người sống thọ nhất là 125 tuổi.

function getTicketPrice(age) {
  let price;

  if (age < 6 || age > 70) return 0;
  if (age >= 6 && age < 12) return (price = '20.000VND');
  if (age > 12) return (price = '50.000VND');
  return price;
}

//v2
function getTicketPrice(age) {
  if (age <= 0 || age > 125) return -1;

  if (age < 6 || age > 70) return 0;
  if (age <= 12) return 20000;

  return 50000;
}

console.log(getTicketPrice(5));
console.log(getTicketPrice(6));
console.log(getTicketPrice(13));
console.log(getTicketPrice(126));
