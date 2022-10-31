// Viết hàm extractDomain(email) nhận vào địa chỉ email, trả về phần domain sau ký tự @
// Ví dụ:
// extractDomain('')  --> ''
// extractDomain('alice@gmail.com')  --> 'gmail.com'
// extractDomain('bob@abc.com') --> 'abc.com'

function extractDomain(email) {
  // using split
  if (email === '') return '';

  return email.split('@')[1];
}

function extractDomain(email) {
  if (email === '') return '';
  // using indexOf() and slice()
  const domainIndex = email.indexOf('@');

  return email.slice(domainIndex + 1);
}
console.log(extractDomain('namduong@gmail.com'));
console.log(extractDomain('namduong@yahoo.com'));
console.log(extractDomain('namduong@jp.com'));
