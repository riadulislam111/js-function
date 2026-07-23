const numbers = [12, 4, 5, 67, 78];
let sum = 0;

for(const num of numbers) {
    sum = sum + num;
    // console.ljog(num, sum)
}

const odds = [23, 15, 71, 97];

let sumOdds = 0;
for(const num of odds){
    sumOdds = sumOdds + num;
    // console.log(sumOdds)
}


const evens = [24, 96, 12, 6, 44];

let sumEvens = 0;
for(const num of evens){
    sumEvens = sumEvens + num;
    // console.log(sumEvens)
}



function sumOfArray(array){
    // console.log('inside the function', array);
    let sum = 0;
    for(const num of array){
        // console.log(num);
        sum = sum + num;
    }
    return sum;
}

const result = sumOfArray(numbers);
// console.log(result)

const resultOdd = sumOfArray(odds);
// console.log(resultOdd);

const resultEven = sumOfArray(evens);
// console.log(resultEven);