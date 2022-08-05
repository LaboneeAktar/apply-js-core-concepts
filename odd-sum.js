/*
// ........Sum of Array...........
function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}
const myNumbers = [12, 65, 45, 78, 32, 45, 91];
getSumOfAnArray(myNumbers);
*/


/*
// ........Sum of Only odd number in an Array...........
function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}

function getOddOfAnArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            // console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}
const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddOfAnArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfAnArray(oddNumbers);

console.log("Sum of Odd Number:", oddNumberSum);
*/


// ........Sum of Only Even number in an Array...........

function getSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const index = i;
        const element = array[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}

function getEvenOfAnArray(array) {
    let evenNumbers = [];
    for (let i = 0; i < array.length; i++) {
        const index = i;
        const element = array[index];
        if (element % 2 == 0) {
            evenNumbers.push(element);
        }
    }
    return evenNumbers;
}

const myArray = [20, 55, 44, 28, 35, 37, 77, 18];
const evenNumbers = getEvenOfAnArray(myArray);
console.log(evenNumbers);
const evenNuberSum = getSum(evenNumbers);
console.log(evenNuberSum);

