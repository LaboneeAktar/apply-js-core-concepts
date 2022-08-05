/*
const myInch = 12;
const myFeet = myInch / 12;
console.log(myFeet);

const playerInch = 84;
const playerFeet = playerInch / 12;
console.log(playerFeet);
*/

//................Use function...................
function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}
const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log('Dada:', dadaFeet);

const dadiInches = 60;
const dadiFeet = inchToFeet(dadiInches);
console.log('Dadi:', dadiFeet);

const playerInches = 84;
const playerFeet = inchToFeet(playerInches);
console.log('Player:', playerFeet);

const myInches = 66;
const myFeet = inchToFeet(myInches);
console.log('My:', myFeet);