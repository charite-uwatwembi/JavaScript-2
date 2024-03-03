//a function that receives an array and returns the smallest number from that array
const generateRandomArray = (length) => {
    let arr = Array.from({ length }, () => Math.floor(Math.random() * 50) + 1);
    return arr;
  }
  
  const randomArray = generateRandomArray(6);
  console.log('Generated Array:', randomArray);
  
  const greatestValue = Math.min(...randomArray);
  console.log('Greatest Value:', greatestValue);
  