// patterns
//Task:10 Display a Square Pattern of Stars
function displaySquarePattern(rows, cols) {
    for (let i = 0; i < rows; i++) {
      let row = '';
      for (let j = 0; j < cols; j++) {
        row += '* ';
      }
      console.log(row);
    }
  }
  
 
  console.log('Pattern 10:');
  displaySquarePattern(4, 5);
  //Task 11: Display a Pattern of Ones
  function displayPatternOfOnes(rows) {
    for (let i = rows; i >= 1; i--) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += '1 ';
      }
      console.log(row);
    }
  }
  
 
  console.log('\nPattern 11:');

  displayPatternOfOnes(4);

  //Task 12: Display a Pattern of Ones and Zeros
function displayPatternOfOnesAndZeros(rows) {
  for (let i = 1; i <= rows; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      if (j === i || j === rows) {
        row += '1 ';
      } else {
        row += '0 ';
      }
    }
    console.log(row);
  }
}


console.log('\nPattern 12:');
displayPatternOfOnesAndZeros(4);

//Task 13: Display a Pattern of Ones and Zeros in a Square

function displaySquarePatternOfOnesAndZeros(size) {
    for (let i = 0; i < size; i++) {
      let row = '';
      for (let j = 0; j < size; j++) {
        if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
          row += '1 ';
        } else {
          row += '0 ';
        }
      }
      console.log(row);
    }
  }
  
  
  console.log('\nPattern 13:');
  displaySquarePatternOfOnesAndZeros(5);
  
  //Task 14: Display a Diagonal Pattern
  function displayDiagonalPattern(size) {
    for (let i = 0; i < size; i++) {
      let row = '';
      for (let j = 0; j < size; j++) {
        if (j === size - i - 1) {
          row += '1 ';
        } else {
          row += '  ';
        }
      }
      console.log(row);
    }
  }
  
 
  console.log('\nPattern 14:');
  displayDiagonalPattern(4);
  