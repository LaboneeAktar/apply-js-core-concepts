function isLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    else {
        return false;
    }
}
const givenYear = 2020;
const checkLeapYear = isLeapYear(givenYear);
console.log(givenYear, "is This Year LeapYear?", checkLeapYear);

const givenYear2 = 1900;
const checkLeapYear2 = isLeapYear(givenYear2);
console.log(givenYear2, "is This Year LeapYear?", checkLeapYear2);