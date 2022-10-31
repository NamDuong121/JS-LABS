// Viết hàm getTaxiCount(passengersCount) nhận vào là số hành khách và trả về là số taxi cần gọi để chở hết số khách đó.
// Yêu cầu:
// Khi số khách lớn hơn 4, ưu tiên dùng xe 7 chỗ
// Nếu số khách nhỏ hơn hoặc bằng 4 thì dùng xe 4 chỗ
// Trả về con số duy nhất là tổng của cả 2 loại xe taxi cần phải gọi.

function getTaxiCount(passengersCount) {
  if (passengersCount <= 0) return false;

  const SEVEN_SEAT_NUMBER = 7;
  if (passengersCount > 4) return Math.ceil(passengersCount / SEVEN_SEAT_NUMBER);

  return 1;
}

console.log(getTaxiCount(4));
console.log(getTaxiCount(6));
console.log(getTaxiCount(7));
console.log(getTaxiCount(8));
console.log(getTaxiCount(9));
console.log(getTaxiCount(11));
console.log(getTaxiCount(12));
console.log(getTaxiCount(13));
console.log(getTaxiCount(15));
console.log(getTaxiCount(21));
console.log(getTaxiCount(0));
