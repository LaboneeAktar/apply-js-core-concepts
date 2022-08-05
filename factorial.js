/*
function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;
}
const factorialResult = factorial(5);
console.log(factorialResult);

//.......Factorial in Reverse Way.................
function factorial1(number) {
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result = result * i;
    }
    return result;
}
const factorialResult1 = factorial1(5);
console.log(factorialResult1);
*/


//...... Factorial use while loop..............
function factorial(number) {
    let num = 1;
    let result = 1;
    while (num <= number) {
        result = result * num;
        num++;
    }
    return result;
}
const factorialResult = factorial(5);
console.log(factorialResult);


//...... Factorial use while loop Reverse Way ..............
function factorial1(number) {
    let num = number;
    let result = 1;
    while (num >= 1) {
        result = result * num;
        num--;
    }
    return result;
}
const factorialResult1 = factorial1(6);
console.log(factorialResult1);