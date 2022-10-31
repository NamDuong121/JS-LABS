//Write a function to find the longest word.
// Use for, forEach,reduce

function findLongestWord(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;

  let longestWord = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (longestWord.length < arr[i].length) longestWord = arr[i];
  }
  return longestWord;
}

function findLongestWord(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;

  let result = arr[0];
  arr.forEach((str) => {
    if (result.length < str.length) result = str;
  });

  return result;
}

const arr = ['Nam', 'Phung', 'Huyen', 'Thanh Thanh'];
function findLongestWord(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  return arr.reduce((longestWord, word) => {
    if (longestWord.length > word.length) {
      return longestWord;
    } else {
      return word;
    }
  });
}

console.log(findLongestWord(arr));
