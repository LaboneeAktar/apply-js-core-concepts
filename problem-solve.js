/*
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
