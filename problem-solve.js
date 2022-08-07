/*
//Write a function that will take hour as the input parameter and will
convert it into minutes and will return the result in minutes.

//................ Problem 1 ...................
function getMinute(hour) {
    const minute = hour * 60;
    return minute;
}
const givenHour = 24;
const myMinute = getMinute(givenHour);
console.log(myMinute);
*/

/*
function getSecond(hour) {
    const second = (hour * 60) * 60;
    return second;
}
const givenHour = 24;
const mySecond = getSecond(givenHour);
console.log(mySecond);
*/


//Write a function findLeapYear() that will take the array
// [2023,2024,2025,2028,2030] as the input parameter and will check if
// each year is a leap year. If a year is a leap year insert that year in a
// new array, return the new array and print the result.

//.............. Problem 2..................
/*
function findLeapYear(years) {
    for (let i = 0; i < years.length; i++) {
        const index = i;
        const element = years[index];
        console.log(index, element);
    }
    return years;
}
function getLeapYear(years) {
    let leapYear = [];
    for (let i = 0; i < years.length; i++) {
        const index = i;
        const element = years[index];
        if ((element % 4 == 0) && (element % 100 != 0) || (element % 400 == 0)) {
            leapYear.push(element);
        }
    }
    return leapYear;
}

const givenYear = [2023, 2024, 2025, 2026, 2028, 2030];
const leapYear = findLeapYear(givenYear);
console.log(leapYear);
const onlyLeapYear = getLeapYear(leapYear);
console.log(onlyLeapYear);
*/


// ...................Single Way ........................
/*
function findLeapYear(years) {
    let leapYear = [];
    for (let i = 0; i < years.length; i++) {
        const index = i;
        const element = years[index];
        if ((element % 4 == 0) && (element % 100 != 0) || (element % 400 == 0)) {
            leapYear.push(element);
        }
    }
    return leapYear;
}

const givenYear = [2023, 2024, 2025, 2026, 2028, 2030];
const leapYear = findLeapYear(givenYear);
console.log(leapYear);
*/



//Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30] as the input parameter and will return the sum of the odd numbers.

function sumOfArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
    }
    return sum;
}

function findOddSum(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}
const givenArray = [5, 7, 8, 10, 45, 30];
const oddNumbers = findOddSum(givenArray);
console.log(oddNumbers);
const oddNumberSum = sumOfArray(oddNumbers);
console.log(oddNumberSum);