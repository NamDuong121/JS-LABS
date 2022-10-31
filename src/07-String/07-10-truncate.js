//Create a function `truncate(text,maxlength)` that checks the length of the text and if it exceeds maxlength - replaces the end of str with the ellipsis character `"..."`, to make its length equal to maxlength.

//truncate('Duong Van Nam,4) -> Duo...

function truncate(text, maxlength) {
  if (text === '') return '';
  if (text.length < maxlength) return text;

  const newText = text.slice(0, maxlength);

  const lastChar = newText[newText.length - 1];
  return newText.replace(lastChar, `\u2026`);
}

console.log(truncate('chieu hom nay co mua bay', 6));
console.log(truncate('', 4));
console.log(truncate('Nam', 4));
