//Task 68a: Power Function


function power(base, exponent) {
  return Math.pow(base, exponent);
}


const baseNumber = 2;
const exponentValue = 3;
const result = power(baseNumber, exponentValue);
console.log(`${baseNumber}^${exponentValue} = ${result}`);


//Task 68b: Array Max and Min


function findMaxAndMin(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { max, min };
}


const numbersArray = [5, 2, 8, 1, 3];
const { max, min } = findMaxAndMin(numbersArray);
console.log('Maximum Value:', max);
console.log('Minimum Value:', min);

//Task 68c: The Sum of Digits


function sumOfDigits(number) {
  return String(number).split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}


const inputNumber = 12345;
const sumResult = sumOfDigits(inputNumber);
console.log(`Sum of Digits of ${inputNumber}:`, sumResult);

//Task 68d: GCD (Greatest Common Divisor)


function findGCD(num1, num2) {
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
}


const num1 = 24;
const num2 = 36;
const gcdResult = findGCD(num1, num2);
console.log(`GCD of ${num1} and ${num2}:`, gcdResult);

//Task 68e: Random Number Generator


function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const randomNumber = generateRandomNumber(1, 100);
console.log('Random Number:', randomNumber);