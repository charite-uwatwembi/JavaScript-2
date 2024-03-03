//Write a function that calculates the square root of a number.
function calculateSquareRoot(number) {
    return Math.sqrt(number);
  }
  
  
  const squareRootResult = calculateSquareRoot(25);
  console.log('Square Root:', squareRootResult);
  
//Write a function that finds the median of an array of numbers.
function calculateMedian(arr) {
    const sortedArr = arr.slice().sort((a, b) => a - b);
    const length = sortedArr.length;
  
    if (length % 2 === 0) {
      const midIndex1 = length / 2 - 1;
      const midIndex2 = length / 2;
      return (sortedArr[midIndex1] + sortedArr[midIndex2]) / 2;
    } else {
      const midIndex = Math.floor(length / 2);
      return sortedArr[midIndex];
    }
  }
  
  
  const numbersArrayForMedian = [3, 1, 4, 2, 2, 6];
  const medianResult = calculateMedian(numbersArrayForMedian);
  console.log('Median:', medianResult);
  
//Write a function that capitalizes the first letter of each word in a sentence.
function capitalizeFirstLetter(sentence) {
    return sentence.replace(/\b\w/g, match => match.toUpperCase());
  }
  
  
  const originalSentence = "i am a software student";
  const capitalizedSentence = capitalizeFirstLetter(originalSentence);
  console.log('Capitalized Sentence:', capitalizedSentence);
  
//Write a function that checks if a given year is a leap year.
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  

  const yearToCheck = 2024;
  const isLeapYearCheck = isLeapYear(yearToCheck);
  console.log(`${yearToCheck} is a Leap Year: ${isLeapYearCheck}`);
  
//Write a function that finds the intersection of two arrays.
function findIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
  }
  
  
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 4, 5, 6, 7];
  const intersectionResult = findIntersection(array1, array2);
  console.log('Intersection:', intersectionResult);
  
//Write a function that checks if a number is prime.
function isPrime(number) {
    if (number <= 1) return false;
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
  
    return true;
  }
  
 
  const numberToCheck = 13;
  const isPrimeCheck = isPrime(numberToCheck);
  console.log(`${numberToCheck} is a Prime Number: ${isPrimeCheck}`);
  
//Write a function that returns the power of a number (base, exponent).
function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
  }
  
  const baseNumber = 2;
  const exponentNumber = 3;
  const powerResult = calculatePower(baseNumber, exponentNumber);
  console.log(`${baseNumber}^${exponentNumber} = ${powerResult}`);
  
//Write a function that calculates the area of a rectangle.
function calculateRectangleArea(length, width) {
    return length * width;
  }
  
  
  const rectangleLength = 5;
  const rectangleWidth = 10;
  const rectangleArea = calculateRectangleArea(rectangleLength, rectangleWidth);
  console.log('Rectangle Area:', rectangleArea);
  
//Write a function that calculates the perimeter of a rectangle.
function calculateRectanglePerimeter(length, width) {
    return 2 * (length + width);
  }
  
  
  const rectangleLengthForPerimeter = 5;
  const rectangleWidthForPerimeter = 10;
  const rectanglePerimeter = calculateRectanglePerimeter(rectangleLengthForPerimeter, rectangleWidthForPerimeter);
  console.log('Rectangle Perimeter:', rectanglePerimeter);
  
//Write a function that checks if a given string contains only digits.
function containsOnlyDigits(inputString) {
    return /^\d+$/.test(inputString);
  }
  
 
  const digitString = "12345";
  const containsOnlyDigitsCheck = containsOnlyDigits(digitString);
  console.log(`"${digitString}" contains only digits: ${containsOnlyDigitsCheck}`);
  
//Write a function that counts the number of words in a sentence.
function countWords(sentence) {
    const words = sentence.split(/\s+/).filter(word => word.length > 0);
    return words.length;
  }
  
  
//Write a function that converts a temperature from Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  
  const temperatureCelsius = 30;
  const temperatureFahrenheit = celsiusToFahrenheit(temperatureCelsius);
  console.log(`${temperatureCelsius}°C is equal to ${temperatureFahrenheit}°F`);
  
//Write a function that generates a pyramid pattern of a given height.
function generatePyramid(height) {
    for (let i = 1; i <= height; i++) {
      let row = '';
      
      for (let j = 1; j <= height - i; j++) {
        row += '  ';
      }
      
      for (let k = 1; k <= 2 * i - 1; k++) {
        row += '* ';
      }
      console.log(row);
    }
  }
  
  
  const pyramidHeight = 5;
  console.log(`Pyramid Pattern of Height ${pyramidHeight}:`);
  generatePyramid(pyramidHeight);
  