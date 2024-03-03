//Write a function that returns the first n elements of an array.

function getFirstNElements(arr, n) {
    return arr.slice(0, n);
  }
  
 
  const originalArray = [1, 2, 3, 4, 5];
  const firstThreeElements = getFirstNElements(originalArray, 3);
  console.log('First 3 Elements:', firstThreeElements);
  

//Write a function that removes the last element from an array.

function removeLastElement(arr) {
    arr.pop();
    return arr;
  }
  
  
  const arrayToRemoveFrom = [1, 2, 3, 4, 5];
  const newArrayWithoutLast = removeLastElement(arrayToRemoveFrom);
  console.log('Array without Last Element:', newArrayWithoutLast);
  

//Write a function that sorts an array of numbers in ascending order.

function sortArrayAscending(arr) {
    return arr.sort((a, b) => a - b);
  }
  
 
  const unsortedArray = [5, 2, 8, 1, 3];
  const sortedArray = sortArrayAscending(unsortedArray);
  console.log('Sorted Array (Ascending):', sortedArray);
  

//Write a function that checks if all elements in an array are positive.

function areAllPositive(arr) {
    return arr.every(element => element > 0);
  }
  
   
  const positiveNumbers = [2, 5, 8, 1];
  const allPositiveCheck = areAllPositive(positiveNumbers);
  console.log('Are all elements positive?', allPositiveCheck);
  

//Write a function that calculates the sum of the even numbers in an array.

function sumOfEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
  }
  
  const numbersArray = [1, 2, 3, 4, 5, 6];
  const sumOfEvens = sumOfEvenNumbers(numbersArray);
  console.log('Sum of Even Numbers:', sumOfEvens);
  

//Write a function that converts an array of strings to uppercase.

function stringsToUppercase(arr) {
    return arr.map(str => str.toUpperCase());
  }
  
  
  const stringArray = ['hello', 'world', 'javascript'];
  const uppercaseStrings = stringsToUppercase(stringArray);
  console.log('Uppercase Strings:', uppercaseStrings);
  

//Write a function that generates a random number between a given range.

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  
  const randomNumber = generateRandomNumber(1, 10);
  console.log('Random Number:', randomNumber);
  
//Write a function that returns the reverse of an array.

function reverseArray(arr) {
    return arr.slice().reverse();
  }
  
  
  const originalArr = [1, 2, 3, 4, 5];
  const reversedArr = reverseArray(originalArr);
  console.log('Reversed Array:', reversedArr);
  

//Write a function that calculates the Fibonacci sequence up to n numbers.

function fibonacciSequence(n) {
    const result = [0, 1];
    for (let i = 2; i < n; i++) {
      result[i] = result[i - 1] + result[i - 2];
    }
    return result;
  }
  
  
  const fibonacciNumbers = fibonacciSequence(8);
  console.log('Fibonacci Sequence:', fibonacciNumbers);
  

//Write a function that checks if an array is sorted in ascending order.


function isArraySorted(arr) {
    return arr.every((element, index, array) => index === 0 || element >= array[index - 1]);
  }
  
  
  const sortedArrayCheck = isArraySorted([1, 2, 3, 5, 4]);
  console.log('Is Array Sorted?', sortedArrayCheck);
  

//Write a function that filters out negative numbers from an array.
function filterOutNegatives(arr) {
    return arr.filter(num => num >= 0);
  }
  
 
  const arrayWithNegatives = [3, -1, 7, -2, 0, 5];
  const positiveNumbersOnly = filterOutNegatives(arrayWithNegatives);
  console.log('Positive Numbers Only:', positiveNumbersOnly);
  