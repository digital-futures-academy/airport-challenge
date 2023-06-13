//USER STORY 1 TESTS

//As an air traffic controller
// So I can get passengers to a destination
// I want to instruct the airport to land a plane

const { assertEquals } = require('./test-framework');
const Airport = require('../src/Airport')

let actualOutput, expectedOutput, result, input;
const airport1 = new Airport;

//Test 1: Plane get added to landedPlanes array in Airport class
console.log('Test 1: Plane get added to landedPlanes array in Airport class');
//Arrange
input = { id: 'plane' };
expectedOutput = 1
//Act
airport1.landPlane(input);
actualOutput = airport1.landedPlanes.length;
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`Test 1: ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput}\n`);
//Clean Up
expectedOutput, result, actualOutput = undefined;

//####################################################################################################

// //Test 2: Plane only get land if they have an id property
// console.log('Test 2: Plane only get land if they have an id property');
// //Arrange
// input = { model: '747' };
// expectedOutput = 0
// //Act
// airport1.landPlane(input);
// actualOutput = airport1.landedPlanes.length;
// //Assert
// result = assertEquals(expectedOutput, actualOutput);
// console.log(`Test 1: ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput}\n`);
// //Clean Up
// expectedOutput, result, actualOutput = undefined;
