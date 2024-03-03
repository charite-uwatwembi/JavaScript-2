//a function that returns the product of 2 numbers
const product = (multiply)=>{
    let x = Math.floor(Math.random()*100);
    console.log(`The first number is: ${x}`)
    let y = Math.floor(Math.random()*10);
    console.log(`The second number is: ${y}`)
    multiply = x * y;
    //return multiply;
    console.log(`The product ot the 2 numbers is: ${multiply}`)
}
product()