// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  // First Way

  // let revStr= '';
  //   for (let i=str.length-1;i>=0;i--){
  //     // revStr.push(str[i]);
  //     revStr+=str[i];
  //   }
  //   console.log(revStr);

  // Second Way
  // const revStr=str.split('')
  // .reverse()
  // .join('');

  // console.log("Input of string is "+ str+"\n");
  // console.log(revStr);

  // Third Way

  // let revStr='';
  // for (let i=0;i<=str.length-1;i++){
  //   revStr=str[i]+revStr;
  // }
  // return revStr;

  // Fourth Way

  // let revStr='';
  // for (let char of str){
  //   revStr= char + revStr;
  // }
  // return revStr;

  // Five Way

  // let revStr='';
  // str.split('').forEach(function(char){
  //     revStr=char+revStr;
  // });
  // return revStr;

  // Six Way

  // let revStr='';
  // str.split('').forEach (char => revStr = char + revStr);
  // return revStr;

  // Seven Way

  // return str.split('').reduce(
  //   (revStr, char) => char + revStr);
}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  // First Way
  // let revStr=str.split('').reverse().join('');

  // if (str == revStr) return true;
  // else return false;

  // Second Way

  // let revStr= str.split('').reduce((revStr, char) => char + revStr)
  // if (str==revStr) return true;
  // return false

  // Third Way
  // let revStr= str.split('').reduce((revStr, char) => char + revStr)
  // return str===revStr;
}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

// function reverseInt(int) {
//   const revInt= parseInt(int.toString().split('').reverse().join(''));
//   return revInt;
// }

// function reverseInt(int) {
//   const revInt = int.toString().split('').reverse().join('');
//   return parseInt(revInt);
// }



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

// First Way

// function capitalizeLetters(str) {
//   const strArr=str.toLowerCase().split();
//   for (let i=0; i < strArr.length;i++){
//     strArr[i]=strArr[i].substring(0,1).toUpperCase()+strArr[i].substring(1);
//   }
//   return strArr.join(' ');
// }

// Second Way

// function capitalizeLetters(str) {
//   return str.toLowerCase().split(' ').map(function(word) {
//     return word[0].toUppercase() + word.subString(1);
//   }
//   )
//   .join(' ');
// }

// Third Way

// function capitalizeLetters(str) {
// return str
//     .toLowerCase()
//     .split(' ')
//     .map(word => word[0].toUpperCase() + word.substr(1))
//     .join(' ');
// }

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  maxChar = '';

  str.split('').forEach(function (char) {
    if (charMap[char]) {
      charMap[char]++;
    }
    else {
      charMap[char] = 1;
    }
  })

  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz(int) {
  let str = '';
    if (int % 3 === 0)
      str=str.concat("Fizz");
    if (int % 5 === 0) {
      str=str.concat("Buzz");
    }
  return str;
}



// Call Function

// Ex 1
// const output = reverseString('hello');
// console.log(output);

// Ex 2
// const output = isPalindrome('racecar');
// console.log(output);

// Ex 3
// const output = reverseInt('0235100');
// console.log(output);

// Ex 4
// const output = capitalizeLetters('i love you');
// console.log(output);

// Ex 5
// const output = maxCharacter('javascript');
// console.log(output);

// Ex 6
const output = fizzBuzz(72);
console.log(output);