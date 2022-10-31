// Viết hàm formatSeconds(seconds) nhận vào là số giây (0 <= seconds < 60) và trả về chuỗi luôn có 2 chữ số của số giây.
// Bài này áp dụng trong thực tế khi muốn show đồng hồ điện tử, để cho đẹp, mình đảm bảo luôn show 2 chữ số, dù số giờ phút giây chỉ có một chữ số.

// Ví dụ:
// formatSeconds(0) --> '00'
// formatSeconds(9) --> '09'
// formatSeconds(20) --> '20'

// Viết hàm theo 2 hướng tiếp cận khác nhau:
// formatSecondsV1(seconds) Sử dụng if...else
// formatSecondsV2(seconds) Sử dụng hàm slice()

function formatSeconds(seconds) {
  if (seconds < 0 || seconds > 60) return -1;

  if (seconds < 10) return '0' + seconds;

  return seconds;
}

function formatSeconds(seconds) {
  if (seconds < 0 || seconds > 60) return -1;

  return ('0' + (seconds % 60)).slice(-2);
}

console.log(formatSeconds(1));
console.log(formatSeconds(2));
console.log(formatSeconds(21));
console.log(formatSeconds(40));
console.log(formatSeconds(61));
console.log(formatSeconds(-1));

// console.log(('0' + (10 % 60)).slice(-2));
