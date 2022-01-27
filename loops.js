let i = 0; 

do{
    i++; 
    console.log(i);
} while (i < 1000)

// 2. Create an object (with keys and values) called person with the following data:
//firstName: "Jane",
//lastName: "Doe",
//birthDate: "Jan 5, 1925",
//gender: "female"

const person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}

console.log(person); 

// 3. Create a function that logs out the keys of the object using Object.keys()

function logKeys(object){

    return Object.keys(object); 
}

let x = logKeys(person);
console.log(x); 

// 4. Create a function that logs out the keys and values of the object using Object.entries().

function logKeysAndValues(object){

    return Object.entries(object); 
}

let y = logKeysAndValues(person);
console.log(y); 

// 5. Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.

const arrayOfPersons = [
    {
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1926",
        gender: "female"
    },

    {
        firstName: "Mike",
        lastName: "Majeski",
        birthDate: "Aug 6, 1987",
        gender: "male"
    },

    {
        firstName: "Benjamin",
        lastName: "Marchiony",
        birthDate: "Sept 4, 1996",
        gender: "male"
    },

    {
        firstName: "Wamene",
        lastName: "Yowika",
        birthDate: "March 1, 2007",
        gender: "female"
    },

    {
        firstName: "James",
        lastName: "Dean",
        birthDate: "March 1, 2015",
        gender: "male"
    },

    {
        firstName: "John",
        lastName: "Bean",
        birthDate: "April 20, 2012",
        gender: "male"
    },

    {
        firstName: "James",
        lastName: "Messina",
        birthDate: "July 17, 1986",
        gender: "male"
    }
]

console.log(arrayOfPersons); 

//6. Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.

function oddBirthYear(array){

    for(const object of array){
        let currentBirthdayArray = object.birthDate.split(' '); 
        if(currentBirthdayArray[2] % 2 == 1){
            console.log(object.birthDate); 
        }
    }  
}

oddBirthYear(arrayOfPersons);

// 7. Use .map() to map over the arrayOfPersons and console.log() their information.

let output = arrayOfPersons.map(getInformation);

function getInformation(object){

    return object; 
}

console.log(output); 

// 8. Use .filter() to filter the persons array and console.log only males in the array.

let resultArray = arrayOfPersons.filter(onlyMales); 

function onlyMales(object){

    if(object.gender === 'male'){
        return object; 
    }
}

console.log(resultArray); 

// 9. Create a function that returns true if the value of birthDate is before Jan 1, 1990.

function birthdaysBefore1990(array){

    for(let i = 0; i < array.length; i++){
        let currentBirthday = array[i].birthDate.split(' '); 
        if(currentBirthday[2] < 1990){
            console.log(true); 
        }else{
            console.log(false); 
        }
    }
}

birthdaysBefore1990(arrayOfPersons);  

// 10. Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

let oldPeople = arrayOfPersons.filter(bornBefore1990); 

function bornBefore1990(object){

    if(object.birthDate.split(' ')[2] < 1990){
        return object; 
    }
}

console.log(oldPeople); 

// BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.

function dateTest(date){

    let currentYear = new Date().getFullYear(); 
    let dateToArray = date.split(' '); 
    let inputYear = parseInt(dateToArray[2]);
    let yearDifference = currentYear - inputYear;

    if(yearDifference >= 21){
        return true; 
    }else{
        return false; 
    }
}
let c = dateTest('Jan 15, 1992');
console.log(c);

//BONUS - .filter() out the people in the array who are younger than 21.

let youngPeople = arrayOfPersons.filter(youngerThan21); 

function youngerThan21(person){

    let currentYear = new Date().getFullYear(); 
    let birthDateArray = person.birthDate.split(' '); 
    let inputBirthDayYear = parseInt(birthDateArray[2]);
    let age = currentYear - inputBirthDayYear;
    
    if(age < 21){
        return person; 
    }
}   
console.log(youngPeople);