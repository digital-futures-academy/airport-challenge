//USER STORY 1 TESTS

//As an air traffic controller
// So I can get passengers to a destination
// I want to instruct the airport to land a plane

const { assertEquals } = require('./test-framework');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane');

let actualOutput, expectedOutput, result, input;
const airport1 = new Airport;
const plane = new Plane('1');
const plane1 = new Plane();

//Test 1: Plane get added to landedPlanes array in Airport class
console.log('Test 1: Plane get added to landedPlanes array in Airport class');
//Arrange
input = plane;
expectedOutput = 1
//Act
airport1.landPlane(input);
actualOutput = airport1.landedPlanes.length;
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);
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
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);
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
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);
//Clean Up
input, expectedOutput, result, actualOutput = undefined;
airport1.landedPlanes = []

//####################################################################

//Test 4: Plane only get land if they have an id that isn't no id

console.log('Test 4: Plane only get land if they have an id that isn\'t no id');
//Arrange
const plane2 = new Plane();
const airport2 = new Airport();
expectedOutput = 0;
//Act
airport2.landPlane(plane1);
actualOutput = airport2.landedPlanes.length;

//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);
//Clean Up
input, expectedOutput, result, actualOutput = undefined;
airport1.landedPlanes = []

//###################################################################################################

//Test 5: the airport can check if a current plane has the same id of a already landed plane using duplicateLandId()
console.log('Test 5: the airport can check if a current plane has the same id of a already landed plane using duplicateLandId()');
//Arrange
expectedOutput = true;
input = plane;
//Act
airport2.landPlane(plane);
actualOutput = airport2.duplicateLandId(plane);

//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);

//Clean Up
input, expectedOutput, result, actualOutput = undefined;
airport2.landedPlanes = []

//###################################################################################################

//Test 6: landPlanes will not land a plane if it id already exists using duplicateLandId() 
console.log('Test 6: landPlanes will not land a plane if it id already exists using duplicateLandId()');
//Arrange
expectedOutput = 1;
input = plane;
airport2.capacityMutator(5);
//Act
airport2.landPlane(plane);
airport2.landPlane(plane);
actualOutput = airport2.landedPlanes.length;

//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);

//Clean Up
input, expectedOutput, result, actualOutput = undefined;
airport1.landedPlanes = [];
airport2.capacityMutator(1);

//###################################################################################################

