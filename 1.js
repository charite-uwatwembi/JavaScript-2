// function that returns the sum of 2 numbers
const sum = (add) =>{
    let one = Math.floor(Math.random()* 100);
    console.log(`The first random number is: ${one}`)
    let two = Math.floor(Math.random()* 100);
    console.log(`The second random number is: ${two}`)
    add = one + two
    //return add;
    console.log('The sum of the two random numbers is: ',add)
}
sum()