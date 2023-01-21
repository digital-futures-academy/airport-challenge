const { assertEquals } = require('./testingFrameworks.js');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane')

let expectedOutput;
let input;
let actualOutput, result;
let plane1 = new Plane()
//USER STORY 1
// Test 1.6
console.log(`1.6 When a new plane instance is created from the plane class, it contains a planeID property:`);

// Arrange
plane1 = new Plane('Test Plane')
expectedOutput = 'Test Plane';
actualOutput, result;

// Act
actualOutput = plane1.planeID

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Returns planeID: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;