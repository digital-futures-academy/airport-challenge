const { assertEquals } = require('./testingFrameworks.js');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane')

let expectedOutput;
let input;
let actualOutput, result;
let airport1 = new Airport()
let plane1 = new Plane()


// Test 5.1
console.log(`***When planeTakesOff is called and isPlaneAtAirport returns False, an error message is returned***`);

// Arrange
airport1 = new Airport();
plane1 = new Plane();
expectedOutput = "Plane cannot take off, it is not at the airport";
actualOutput, result;

// Act
actualOutput = airport1.planeTakesOff(plane1);

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Error message returned: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;