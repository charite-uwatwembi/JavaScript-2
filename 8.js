//a function that receives an array of numbers and returns the average of the numbers
function calculateAverage(arr) {
    if (arr.length === 0) {
      return undefined; 
    }
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / arr.length;
  }
  
  
  const average = calculateAverage([4, 8, 2, 10, 5]);
  console.log('Average:', average);
  