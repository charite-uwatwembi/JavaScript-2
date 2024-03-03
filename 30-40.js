//Task 30: Display Multiples of 5
function displayMultiplesOf5(limit) {
    for (let i = 1; i <= limit; i++) {
      console.log(i * 5);
    }
  }
  
  
  console.log('Multiples of 5:');
  displayMultiplesOf5(5);

  //Task 31: Return Square Root
  function calculateSquareRoot(number) {
    return Math.sqrt(number);
  }
  
  
  const squareRootResult = calculateSquareRoot(16);
  console.log('Square Root:', squareRootResult);
  

  //Task 32: Return Bigger Number
  function findBiggerNumber(number1, number2) {
    return Math.max(number1, number2);
  }
  
  
  const biggerNumberResult = findBiggerNumber(15, 8);
  console.log('Bigger Number:', biggerNumberResult);


  //Task 33: Convert to Capital Letters
  function toUpperCase(inputString) {
    return inputString.toUpperCase();
  }
  
  
  const originalString = "hello world";
  const uppercasedString = toUpperCase(originalString);
  console.log('Original String:', originalString);
  console.log('Uppercased String:', uppercasedString);

  //Task 34: String Modifier
  function stringModifier(inputString, position, replacementChar) {
    const modifiedString = inputString.slice(0, position - 1) + replacementChar + inputString.slice(position);
    return modifiedString;
  }
  
  
  const originalText = "Hello, World!";
  const modifiedText = stringModifier(originalText, 7, '_');
  console.log('Original Text:', originalText);
  console.log('Modified Text:', modifiedText);
  


  //Task 35: Count Vowels
  function countVowels(inputString) {
    const vowels = inputString.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
  }
  
 
  const vowelCount = countVowels("Hello, World!");
  console.log('Number of Vowels:', vowelCount);
  
  //Task 36: Count Consonants
  function countConsonants(inputString) {
    const consonants = inputString.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    return consonants ? consonants.length : 0;
  }
  
  
  const consonantCount = countConsonants("Hello, World!");
  console.log('Number of Consonants:', consonantCount);
  
//Task 37: Find Index of Character
function findIndexOfCharacter(inputString, character) {
    return inputString.indexOf(character);
  }
  

  const index = findIndexOfCharacter("Hello, World!", "W");
  console.log('Index of Character:', index);

  //Task 38: Remove Duplicates from Array

  function removeDuplicatesFromArray(arr) {
  return [...new Set(arr)];
}


const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const arrayWithoutDuplicates = removeDuplicatesFromArray(arrayWithDuplicates);
console.log('Array with Duplicates:', arrayWithDuplicates);
console.log('Array without Duplicates:', arrayWithoutDuplicates);

//Task 39: Check if Value is Present in Array
function isValuePresentInArray(arr, value) {
    return arr.includes(value);
  }
  
  const arrayToCheck = [1, 2, 3, 4, 5];
  const valueToCheck = 3;
  const isPresent = isValuePresentInArray(arrayToCheck, valueToCheck);
  console.log(`Is ${valueToCheck} present in the array?`, isPresent);
  
  //Task 40: Square Each Element of Array
  function squareEachElement(arr) {
    return arr.map(num => num ** 2);
  }
  
 
  const originalArray = [1, 2, 3, 4, 5];
  const squaredArray = squareEachElement(originalArray);
  console.log('Original Array:', originalArray);
  console.log('Squared Array:', squaredArray);
  

  