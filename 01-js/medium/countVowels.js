/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    str = str.toLowerCase();
    let count = 0;
    const vowels = new Array("a", "e", "i", "o", "u");
    for(let i=0;i<str.length;i++){
      count = count+(vowels.includes(str[i]));
    }
    console.log(count);
    return count;

}

module.exports = countVowels;