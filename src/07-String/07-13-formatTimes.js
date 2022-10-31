// Viết hàm formatTime(seconds) nhận vào là số giây seconds với (0 <= seconds <= 86400)
// Trả về là một chuỗi với định dạng hh:mm:ss trong đó:
// hh là số giờ
// mm là số phút
// ss là số giây
// hh, mm, ss luôn luôn hiển thị 2 chữ số kể cả nhỏ hơn 10.

// formatTime(0) --> '00:00:00'
// formatTime(3661) --> '01:01:01'
//hh= 3661 /3600  = 01
//mm= (3661 % 3600) / 60 = 01;
//ss = 1 % 60 = 01;

// formatTime(9) --> '00:00:09'
// formatTime(4256) --> '01:10:56'

const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;
function formatTime(seconds) {
  if (seconds < 0 || seconds > 86400) return '';

  const hh = ('0' + Math.trunc(seconds / SECONDS_PER_HOUR)).slice(-2);
  const mm = ('0' + Math.trunc((seconds % SECONDS_PER_HOUR) / 60)).slice(-2);
  const ss = ('0' + (seconds % 60)).slice(-2);

  return `${hh}:${mm}:${ss}`;
}

console.log(formatTime(3661));
console.log(formatTime(100));
console.log(formatTime(500));
console.log(formatTime(100000));
console.log(formatTime(-1));
