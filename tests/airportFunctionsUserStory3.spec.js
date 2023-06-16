//USER STORY 3 TESTS

// "As an air traffic controller
// So I can get passengers on the way to their destination
// I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport"

const { assertEquals } = require('./test-framework');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane');

let actualOutput, expectedOutput, result, input;
const airport1 = new Airport;
const plane1 = new Plane('test flight SE-2306-a');

//Test 1: have isFull() return a true as it only 1 is going in with a cap of 1
console.log('Test 1: have isFull() return a true as it only 1 is going in with a cap of 1');
//Arrange
input = plane1;
expectedOutput = true
//Act
airport1.landPlane(input);
actualOutput = airport1.isFull();
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);
//Clean Up
expectedOutput, result, actualOutput, input = undefined;

//###################################################################################################

//Test 2: have isFull() return a false as it only 1 is going in with a cap of 5
console.log('Test 2: have isFull() return a false as it only 1 is going in with a cap of 5');
//Arrange
input = plane1;
expectedOutput = false
airport1.capacityMutator(5)
//Act
airport1.landPlane(input);
actualOutput = airport1.isFull();
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);
//Clean Up
expectedOutput, result, actualOutput, input = undefined;
airport1.capacityMutator(1);

//#######################################################################

//Test 3: the number of landed planes cannot go above the maximum capacity
console.log('Test 3: the number of landed planes cannot go above the maximum capacity');
//Arrange
input = plane1;
const plane2 = new Plane('2')
const plane3 = new Plane('3')
const plane4 = new Plane('4')
expectedOutput = 2
airport1.capacityMutator(2)
//Act
airport1.landPlane(input);
airport1.landPlane(plane2);
airport1.landPlane(plane3);
airport1.landPlane(plane4);
actualOutput = airport1.landedPlanes.length;
//Assert
result = assertEquals(expectedOutput, actualOutput);
//console.log(`Test 3: ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput}\n`);
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);

//Clean Up
expectedOutput, result, actualOutput = undefined;
airport1.capacityMutator(1);