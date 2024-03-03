//Task 66a: Array Sum

function calculateArraySum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}


const numbersArray = [1, 2, 3, 4, 5];
const sumResult = calculateArraySum(numbersArray);
console.log('Sum of Array Elements:', sumResult);


//Task 66b: Even Numbers


function printEvenNumbers(arr) {
  const evenNumbers = arr.filter(num => num % 2 === 0);
  console.log('Even Numbers:', evenNumbers);
}


const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
printEvenNumbers(numArray);


//Task 66c: Array Reverse


function reverseArray(arr) {
  return arr.slice().reverse();
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log('Reversed Array:', reversedArray);


//Task 66d: Array Filter


function filterElementsGreaterThanTen(arr) {
  return arr.filter(num => num >= 10);
}


const numberArray = [5, 12, 8, 15, 3, 20];
const filteredArray = filterElementsGreaterThanTen(numberArray);
console.log('Filtered Array:', filteredArray);

//Task 66e: Array Average


function calculateArrayAverage(arr) {
  const sum = arr.reduce((sum, num) => sum + num, 0);
  return sum / arr.length;
}


const numbersArrayAve = [10, 20, 30, 40, 50];
const averageResult = calculateArrayAverage(numbersArrayAve);
console.log('Array Average:', averageResult);


//Task 66f: Array Search


function searchElementIndex(arr, target) {
  const index = arr.indexOf(target);
  return index !== -1 ? index : 'Element not found';
}

const numbersArraySearch = [1, 2, 3, 4, 5];
const targetElement = 3;
const searchResult = searchElementIndex(numbersArraySearch, targetElement);
console.log(`Index of ${targetElement}:`, searchResult);


//Task 66g: Duplicate Elements


function findDuplicateElements(arr) {
  const duplicates = arr.filter((num, index) => arr.indexOf(num) !== index);
  console.log('Duplicate Elements:', [...new Set(duplicates)]);
}


const numbersArrayDup = [1, 2, 3, 2, 4, 5, 3];
findDuplicateElements(numbersArrayDup);

//Task 66h: Array Sorting


function sortArrayAscending(arr) {
  return arr.slice().sort((a, b) => a - b);
}


const unsortedArray = [5, 2, 8, 1, 3];
const sortedArray = sortArrayAscending(unsortedArray);
console.log('Sorted Array (Ascending):', sortedArray);