//3. As an air traffic controller
//To ensure safety
//I want to prevent landing when the airport is full

// initial arrange
let expectedOutput, actualOutput, result;
let inputMaxCapacity = Number;
let testName = ``;
const { assertEquals3 } = require("../src/assertEquals3");
const { airportIsAtFullCapacity } = require("../src/airportIsAtFullCapacity");

//arrange
testName = `Test 3 - prevent plane landing when airport is full`
inputMaxCapacity = 19
expectedOutput =

//act
actualOutput  = airportIsAtFullCapacity(inputMaxCapacity);

//assert
assertEquals3(expectedOutput, actualOutput);

//result
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);
if (inputMaxCapacity <= 20) {
console.log(`Plane can Land!`)
} else {
    console.log(`Airport is full! Plane cannot land`); 
};


// If airport's capacity is < = to 20 planes can land
//else if airport's capacity > 20 plane cannot land
