//USER STORY 5 TESTS

// As an air traffic controller
// To avoid confusion
// I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

const { assertEquals } = require('./test-framework');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane');

let actualOutput, expectedOutput, result, input;
const airport1 = new Airport;
const plane1 = new Plane('test flight SE-2306-a');


//Test 1: landingActor() returns false, meaning landPlanes is not called, due to a plane already have landed
console.log('Test 1: landingActor() returns false, meaning landPlanes is not called, due to a plane already have landed');
//Arrange
input1 = plane1;
airport1.capacityMutator(3);
expectedOutput = true
//Act
airport1.landingActor(input1);
actualOutput = airport1.landingActor(input1);
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);
//Clean Up
expectedOutput, result, actualOutput, input = undefined;
airport1.capacityMutator(1);

//##############################################################################

