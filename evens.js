
const numbers = [12, 87, 14, 51, 36, 46];

/**
 * 1. loop through the array to get each element
 * 2. identify even numbers
 * 
 */

const evens = [];
for(const num of numbers){
    // console.log(num);
    if(num % 2 === 0){
        // console.log('even', num);
        evens.push(num);
    }
}
// console.log(evens);


function getEvenNumbers(array){
    const evens = [];
    for(const num of array){
        if(num % 2 === 0){
            evens.push(num)
        }
    }
    return evens;
}

const result = getEvenNumbers(numbers);
// console.log('result', result);