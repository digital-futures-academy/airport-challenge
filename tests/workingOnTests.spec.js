const { assertEquals } = require('./testingFrameworks.js');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane')

let expectedOutput;
let input;
let actualOutput, result;
let airport1 = new Airport()
let plane1 = new Plane()

//USER STORY 4
// Test 4.1
console.log(`***Length of planesAtAirport array at the Airport decreases by 1 when planeTakesOff***`);

// Arrange
airport1 = new Airport(1)
plane1 = new Plane();
airport1.planesAtAirport = [plane1]
expectedOutput = 0;
actualOutput, result;

// Act
airport1.planeTakesOff(plane1)
actualOutput = airport1.planesAtAirport.length;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Length of planesAtAirport decreased: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;

// Test 4.2
console.log(`***Confirm if plane is in planesAtAirport using isPlaneAtAirport before planeTakesOff returns true***`);

// Arrange
airport1 = new Airport()
plane1 = new Plane();
airport1.planesAtAirport = [plane1]
expectedOutput = true;
actualOutput, result;

// Act
actualOutput = airport1.isPlaneAtAirport(plane1);

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Plane is at airport: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;
