//USER STORY 1 TESTS

//As an air traffic controller
// So I can get passengers to a destination
// I want to instruct the airport to land a plane

const { assertEquals } = require('./test-framework');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane');

let actualOutput, expectedOutput, result, input;
const airport1 = new Airport;
const plane1 = new Plane();

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
input, expectedOutput, result, actualOutput = undefined;
airport1.landedPlanes = []

//####################################################################################################

//Test 2: Plane class has Id that can be read with getId()
console.log('Test 2: Plane class has Id that can be read with getPlaneId()');
//Arrange
expectedOutput = 'no id'
//Act
actualOutput = plane1.getId();
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`Test 2: ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput}\n`);
//Clean Up
input, expectedOutput, result, actualOutput = undefined;
airport1.landedPlanes = []

//####################################################################################################


//Test 3: airport can access plane id with getPlaneId()
console.log('Test 3: airport can access plane id with getPlaneId()');
//Arrange
expectedOutput = 'no id'
//Act
actualOutput = airport1.getPlaneId(plane1);
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`Test 3: ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput}\n`);
//Clean Up
input, expectedOutput, result, actualOutput = undefined;
airport1.landedPlanes = []

//####################################################################
//Test 4: Plane only get land if they have an id that isn't no id
console.log('Test 4: Plane only get land if they have an id that isn\'t no id');
//Arrange
const plane2 = new Plane;
let inputOfNoId = plane1;
airport1.landPlane(inputOfNoId);
expectedOutput = 0
console.log(plane1.getId());
console.log(airport1.getPlaneId(plane1));
//Act
actualOutput = airport1.landedPlanes.length;
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);
console.log(airport1.landedPlanes);
//Clean Up
input, expectedOutput, result, actualOutput = undefined;
airport1.landedPlanes = []
console.log(airport1.landedPlanes);

// //###################################################################################################