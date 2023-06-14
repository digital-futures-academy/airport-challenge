//USER STORY 3 TESTS

// "As an air traffic controller
// So I can get passengers on the way to their destination
// I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport"

const { assertEquals } = require('./test-framework');
const Airport = require('../src/Airport');

let actualOutput, expectedOutput, result, input;
const airport1 = new Airport;

//Test 1: have isFull() return a true as it only 1 is going in with a cap of 1
console.log('Test 1: have isFull() return a true as it only 1 is going in with a cap of 1');
//Arrange
input = { id: 'plane' };
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

//Test 2: have isFull() return a false as it only 1 is going in with a cap of 5
console.log('Test 2: have isFull() return a false as it only 1 is going in with a cap of 5');
//Arrange
input = { id: 'plane' };
expectedOutput = false
airport1.capacityMutator(5)
//Act
airport1.landPlane(input);
actualOutput = airport1.isFull();
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);
//Clean Up
expectedOutput, result, actualOutput = undefined;
airport1.capacityMutator(1);

//#######################################################################

//Test 3: the number of landed planes cannot go above the maximum capacity
console.log('Test 3: the number of landed planes cannot go above the maximum capacity');
//Arrange
input = { id: 'plane' };
expectedOutput = 2
airport1.capacityMutator(2)
//Act
airport1.landPlane(input);
airport1.landPlane(input);
airport1.landPlane(input);
airport1.landPlane(input);
actualOutput = airport1.landedPlanes.length;
//Assert
result = assertEquals(expectedOutput, actualOutput);
//console.log(`Test 3: ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput}\n`);
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);

//Clean Up
expectedOutput, result, actualOutput = undefined;
airport1.capacityMutator(1);