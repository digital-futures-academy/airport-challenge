//USER STORY 2 TESTS

// As the system designer
// So that the software can be used for many different airports
// I would like a default airport capacity that can be overridden as appropriate

const { assertEquals } = require('./test-framework');
const Airport = require('../src/Airport')

let actualOutput, expectedOutput, result, input;
const airport1 = new Airport;

//Test 1: the number of landed planes cannot go above the maximum capacity
console.log('Test 1: the number of landed planes cannot go above the maximum capacity');
//Arrange
input = { id: 'plane' };
expectedOutput = 1
//Act
airport1.landPlane(input);
airport1.landPlane(input);
actualOutput = airport1.landedPlanes.length;
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`Test 1: ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput}\n`);
//Clean Up
expectedOutput, result, actualOutput = undefined;

//###################################################################################################

//Test 2: the max capacity can be overridden with the capacityMutator() function 
console.log('Test 2: the max capacity can be overridden with the capacityMutator() function ');
//Arrange
input = Math.ceil(Math.random() * 10);
expectedOutput = input
//Act
airport1.capacityMutator(input);
actualOutput = airport1.maxCapacity;
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`Test 2: ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput}\n`);
//Clean Up
expectedOutput, result, actualOutput, input = undefined;

//###################################################################################################

//Test 3: the max capacity only accepts numbers (no floats/half a plane)
//though maybe for this feature, it could still use floats but drop numbers past dp?
console.log('Test 3: the max capacity only accepts numbers');
//Arrange
input = 5.5;
airport1.maxCapacity = 1;
expectedOutput = 1;
//Act
airport1.capacityMutator(input);
actualOutput = airport1.maxCapacity;
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`Test 3: ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput}\n`);
//Clean Up
expectedOutput, result, actualOutput = undefined;


//###################################################################################################

//Test 4: the max capacity only accepts numbers (no strings/stop runtime errors if maxCap gets to NaN)
//though maybe for this feature, it could still use strings if they only contain numbers (parse as int)?
console.log('Test 4: the max capacity only accepts numbers');
//Arrange
input = '1';
airport1.maxCapacity = 1;
expectedOutput = 1;
//Act
airport1.capacityMutator(input);
actualOutput = airport1.maxCapacity;
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`Test 4: ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput}\n`);
//Clean Up
expectedOutput, result, actualOutput = undefined;