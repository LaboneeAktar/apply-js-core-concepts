function isEvenOrOdd(number) {
    if (number % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
let givenNumber = 169;
let checkEvenOdd = isEvenOrOdd(givenNumber);
console.log(checkEvenOdd);