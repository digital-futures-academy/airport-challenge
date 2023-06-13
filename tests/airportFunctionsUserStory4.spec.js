//USER STORY 4 TESTS

// "As an air traffic controller
// So I can get passengers on the way to their destination
// I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport"

//for last few features, gonna need to add a planeNetwork that contains all the planes in or out of airports
//if a plane is in the network but not in the port then it can land, a property of the planes could be landed or
//landed at x airport
//maybe a plane network class

const { assertEquals } = require('./test-framework');
const Airport = require('../src/Airport')

let actualOutput, expectedOutput, result, input;
const airport1 = new Airport;

//Test 1: remove plan from landedPlanes array
console.log('Test 1: remove plan from landedPlanes array');
//Arrange
input1 = { id: 'plane1' };
expectedOutput = true
//Act
airport1.landPlane(input);
actualOutput = airport1.isFull();
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);
//Clean Up
expectedOutput, result, actualOutput = undefined;

//###################################################################################################