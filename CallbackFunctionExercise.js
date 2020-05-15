// Create a function that takes 3 parameters called floor, ceiling and num. All 3 parameters should be numbers, Return true if num is between floor and ceiling

// function checkNumber (floor, ceiling, num){

//     if ((num > floor && num < ceiling) || (num < floor && num > ceiling) ){
//         return true;
//     }
//     else {
//         console.log("This is False");
//     }

// }

// let myResult = checkNumber(8,23,28);

// console.log(myResult);

// Create a function that takes 1 parameter that is an object with 2 properties, name and age. Return true if the person's age is greated than 30 or their name contains the letter x case insensitive.
// otherwise return false. 


function checkNameAndAge(person) {
    let isOver30 = person.age > 30;
    let foundX = false;
    for (let i = 0; i < person.name.length; i++) {
        let letter = person.name[i].toLowerCase();
        if(letter == "x") {
            foundX = true;
            break;
        }
    }
    if(isOver30 || foundX) {
        return true;
    } else {
        return false;
    }
}

let person1 = {
    name: "Xannat",
    age: 29
}

// console.log(checkNameAndAge(person1));

let person2 = {
    name: "Dan",
    age: 24
}

// console.log(checkNameAndAge(person2));

let person3 = {
    name: "Mabove",
    age: 42
}

// console.log(checkNameAndAge(person3));

let person4 = {
    name: "Xambo",
    age: 37
}

// console.log(checkNameAndAge(person4));


// 3 Write a function that takes a string and returns the first three characters of that string

function checkExactNameAndAge(person, ageToBe, nameToNotBe) {
    // if the age of the person is equal to the second parameter
    let equalAge = ageToBe == person.age;

    // if the name of the person is NOT equal to the thrid parameter
    let notEqualName = nameToNotBe != person.name;

    if(equalAge && notEqualName) {
        return true;
    } else {
        return false;
    }
}

console.log(checkExactNameAndAge({
    name: "Divakar",
    age: 23
}, 23, "Beckham"));

console.log(checkExactNameAndAge({
    name: "Marcus",
    age: 221
}, 24, "Martial"));