// Viết hàm sayHello(languageCode) nhận vào languageCode và trả về câu xin chào của ngôn ngữ tương ứng.
// languageCode = 'en' --> Hello
// languageCode = 'vi' --> Xin chào
// languageCode = 'fr' --> Bonjour
// languageCode = 'cn' --> Nǐn hǎo
// languageCode = 'ja' --> Konnichiwa
// languageCode = 'ko' --> Anyoung haseyo
// Trường hợp không truyền languageCode hoặc languageCode không hợp lệ thì trả về mặc định "Hello"

function sayHello(languageCode) {
  const languageMap = {
    en: 'Hello',
    vi: 'Xin chào',
    fr: 'Bonjour',
    cn: 'Nǐn hǎo',
    ja: 'Konnichiwa',
    ko: 'Anyoung haseyo',
  };

  return languageMap[languageCode] || 'Hello';
}

console.log(sayHello('en'));
console.log(sayHello('vi'));
console.log(sayHello('fr'));
console.log(sayHello('cn'));
console.log(sayHello('ja'));
console.log(sayHello('ko'));
console.log(sayHello('de'));
