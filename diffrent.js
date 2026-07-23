function chowdurify(name) {
    const fullName = name + " " + "chowdury";
    return fullName;
}

const robinChow = chowdurify("Robin");
// console.log(robinChow);
const shammiChow = chowdurify("Shammi");
// console.log(shammiChow);


function fullName(firstName, lastName){
    const fullName = firstName + " " + lastName;
    return fullName;
}

const mohabbat = fullName("Mohobbat", "Ali");
// console.log(mohabbat);



function doubleOrHalf(price, isDouble) {
    if(isDouble === true){
        const askingPrice = price * 2;
        return askingPrice;
    }
    else{
        const askingPrice = price / 2;
        return askingPrice;
    }
}

const myPrice = doubleOrHalf(100, true);
// console.log("price for mango people", myPrice)
const leaderPrice = doubleOrHalf(100, false);
// console.log("price for leader", leaderPrice);


function firstElementDouble(array){
console.log('got the parameter value', array);
const firstElement = array[0];
const doubled = firstElement * 2;
return doubled;
}

const numbers = [34,45,56,56,67,34];
const doubled = firstElementDouble(numbers);
// console.log('double of the first element',doubled);


const student = {
    name: "Monir Abdul",
    id: 34,
    marks: 56
}

function isStudentAPlus(student){
    console.log('got the student', student);
    const marks = student.marks;
    console.log('his marks', marks);
  
    if(marks >= 80){
        return true;
    }
    else{
        return false;
    }


}

const isAPlus = isStudentAPlus(student);
// console.log(isAPlus)