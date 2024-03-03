//function that returns the division of 2 numbers. 
const division = (div) =>{
    let x = Math.floor(Math.random()*20);
    console.log(`the first number is :${x}`)
    let y = Math.floor(Math.random()*7);
    console.log(`the second number is :${y}`)
    div = x / y;
    console.log(`Division is :${div}`)

}
division()