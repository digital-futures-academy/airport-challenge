const { assertEquals } = require('./testingFrameworks.js');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane')

let expectedOutput;
let input;
let actualOutput, result;
let airport1 = new Airport()
let plane1 = new Plane()

//USER STORY 3
// Test 3.1
console.log(`*** When the length of planesAtAirport and airportCapacity are the same (1), the test returns true***`);

// Arrange
airport1 = new Airport(1)
plane1 = new Plane()
expectedOutput = true;
actualOutput, result;

// Act
airport1.planeLands(plane1)
actualOutput = airport1.planesAtAirport.length === airport1.airportCapacity;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`At capacity: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;

// Test 3.2
console.log(`*** When the length of planesAtAirport and airportCapacity are the same (1), atCapacity returns true***`);

// Arrange
airport1 = new Airport(1)
expectedOutput = true;
actualOutput, result;

// Act
airport1.planesAtAirport.length = airport1.airportCapacity;
actualOutput = airport1.atCapacity()

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`At capacity: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;

// Test 3.3
console.log(`*** When the length of planesAtAirport and airportCapacity are different, atCapacity returns false***`);

// Arrange
airport1 = new Airport(1)
expectedOutput = false;
actualOutput, result;

// Act;
actualOutput = airport1.atCapacity()

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Not at capacity: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;

// // Test 3.3
// console.log(`***When planeLands and length of planesAtAirport is the same as airportCapacity, planeLands returns preventLanding***`);

// // Arrange
// airport1 = new Airport(1)
// plane1 = new Plane()
// expectedOutput = 1;
// actualOutput, result;

// // Act
// airport1.planesAtAirport.length = airport1.airportCapacity
// airport1.planeLands(plane1)
// actualOutput = airport1.planesAtAirport.length;

// // Assert
// result = assertEquals(expectedOutput, actualOutput);

// // Report
// console.log(`Landing prevented: ${result}`);

// // Clean-Up
// actualOutput = undefined;
// result = undefined;
// input = undefined;
// expectedOutput = undefined;