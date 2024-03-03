//a function that receives an array and returns the sum of all the elements inside that array.
const generateArray = (length)=>{
    const arrayGen = Array.from({length}, ()=> Math.floor(Math.random() * 50));
    return arrayGen;
}

const sumOfGenArray = (array)=>{
    
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return sum;
}
console.log(generateArray(10))
console.log("The sum is: ", sumOfGenArray(generateArray(10)))