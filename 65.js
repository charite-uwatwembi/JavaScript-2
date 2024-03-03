


//a. Calculator Switch:
function calculator(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Invalid operator';
  }
}


const result = calculator(5, '+', 3);
console.log('Calculator Result:', result);


//b. Day of Week:


function dayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    case 7:
      return 'Sunday';
    default:
      return 'Invalid day number';
  }
}


const dayName = dayOfWeek(3);
console.log('Day of the Week:', dayName);


//c. Grade System:

function calculateGrade(score) {
  switch (true) {
    case score >= 90:
      return 'A';
    case score >= 80:
      return 'B';
    case score >= 70:
      return 'C';
    case score >= 60:
      return 'D';
    default:
      return 'F';
  }
}


const studentGrade = calculateGrade(75);
console.log('Student Grade:', studentGrade);

//d. Traffic Light:


function trafficLightColor(code) {
  switch (code) {
    case 1:
      return 'Red';
    case 2:
      return 'Yellow';
    case 3:
      return 'Green';
    default:
      return 'Invalid code';
  }
}


const lightColor = trafficLightColor(2);
console.log('Traffic Light Color:', lightColor);


//e. Month Name:


function monthName(monthNumber) {
  switch (monthNumber) {
    case 1:
      return 'January';
    case 2:
      return 'February';
    case 3:
      return 'March';
    case 4:
      return 'April';
    case 5:
      return 'May';
    case 6:
      return 'June';
    case 7:
      return 'July';
    case 8:
      return 'August';
    case 9:
      return 'September';
    case 10:
      return 'October';
    case 11:
      return 'November';
    case 12:
      return 'December';
    
    default:
      return 'Invalid month number';
  }
}


const month = monthName(8);
console.log('Month Name:', month);


//f. Simple Menu:


function simpleMenu(option) {
  switch (option) {
    case 1:
      return '  Pizza';
    case 2:
      return '   Burger';
    case 3:
      return '    Sushi';
    case 4:
      return '     Dessert';
    case 5:
      return '  Combo Meal';
    case 6:
      return '  Wines';
    case 7:
      return '  Fruits';
    case 8:
      return '    Salads';
    default:
      return 'Invalid option';
  }
}


const menuOption = simpleMenu(2);
console.log('Menu Result:', menuOption);


//g. Currency Converter:

function currencyConverter(amount, sourceCurrency, targetCurrency) {
 
  switch (`${sourceCurrency}_${targetCurrency}`) {
    case 'USD_EUR':
      return amount * 0.85; 
    case 'USD_GBP':
      return amount * 0.75; 
    
    default:
      return 'Invalid currency pair';
  }
}


const convertedAmount = currencyConverter(100, 'USD', 'EUR');
console.log('Converted Amount:', convertedAmount);


//h. Shape Area:


function calculateShapeArea(shape, params) {
  switch (shape) {
    case 'circle':
      return Math.PI * Math.pow(params.radius, 2);
    case 'square':
      return Math.pow(params.sideLength, 2);
    case 'triangle':
      return 0.5 * params.base * params.height;
    default:
      return 'Invalid shape';
  }
}


const circleArea = calculateShapeArea('circle', { radius: 5 });
console.log('Circle Area:', circleArea);

//i. Season Detector:

function detectSeason(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return 'Winter';
    case 3:
    case 4:
    case 5:
      return 'Spring';
    case 6:
    case 7:
    case 8:
      return 'Summer';
    case 9:
    case 10:
    case 11:
      return 'Fall';
    default:
      return 'Invalid month';
  }
}


const season = detectSeason(7);
console.log('Season:', season);