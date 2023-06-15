//USER STORY 4 TESTS

// "As an air traffic controller
// So I can get passengers on the way to their destination
// I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport"

//for last few features, gonna need to add a planeNetwork that contains all the planes in or out of airports
//if a plane is in the network but not in the port then it can land, a property of the planes could be landed or
//landed at x airport
//maybe a plane network class

const { assertEquals } = require('./test-framework');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane');

let actualOutput, expectedOutput, result, input;
const airport1 = new Airport;
const plane1 = new Plane('test flight SE-2306-a')

//Test 1: remove plan from landedPlanes array
console.log('Test 1: remove plane from landedPlanes array');
//Arrange
input1 = plane1;
airport1.landPlane(input1);
expectedOutput = 0
//Act
airport1.planeTakeOff(input);
actualOutput = airport1.landedPlanes.length;
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);
//Clean Up
expectedOutput, result, actualOutput, input = undefined;

//###################################################################################################