//Task 26: Calculate the Factorial of a Number
function calculateFactorial(number) {
    if (number < 0) {
      return "Factorial is not defined for negative numbers";
    } else if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * calculateFactorial(number - 1);
    }
  }
  
  
  const factorialResult = calculateFactorial(5);
  console.log('Factorial:', factorialResult);
  
  //Task 27: Reverse a String
  function reverseString(inputString) {
    return inputString.split('').reverse().join('');
  }
  

  const originalString = "Hello World";
  const reversedString = reverseString(originalString);
  console.log('Original String:', originalString);
  console.log('Reversed String:', reversedString);

  //Task 28: Check if a String is a Palindrome

  function isPalindrome(inputString) {
  const cleanedString = inputString.toLowerCase().replace(/\s/g, '');
  const reversedString = reverseString(cleanedString);
  return cleanedString === reversedString;
}


const palindromeString = "A man a plan a canal Panama";
const isPalindromeResult = isPalindrome(palindromeString);
console.log('Is Palindrome:', isPalindromeResult);
