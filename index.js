function isPalindrome(word) {
  // Write your algorithm here
  const wordLength = word.length;
  let isPalindrome = true;
  for (let i = 0; i < wordLength/2; i++){
    console.log(wordLength/2)
    if (word[i] != word[wordLength-1-i]){
      isPalindrome = false;
      return isPalindrome;
    }
  }
  return isPalindrome;
}

/* 
  Add your pseudocode here

  Create boolean and set to true
  Find length of word
  compare first index to last index
  iterate toward center index
  if letters don't match, change boolean to false and break from check
  return boolean


*/

/*
  Add written explanation of your solution here
  The function will take in a word, and compare the first letter to the last letter while moving
  toward the center of the word.  If the letters do not match, the process will stop and a "false" value
  will be returned.  If there are an odd number of letters, the middle letter should be compared to itself
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("boob"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("aa"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("biglongworddrowgnolgib"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("biglongwordtgdrowgnolgib"));
}

module.exports = isPalindrome;
