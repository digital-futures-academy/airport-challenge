const { assertEquals } = require("./testingFramework");
const airport = require("../src/airport");
let actualOutput, expectedOutput, result;
let plane = { id: '9A06' };

//Test 1
console.log("--------User Story 1--------")
console.log("");
console.log('Test 1: Landing the plane in the airport and no of planes in the airport increased to 1');

// Arrange
expectedOutput = 1;

// Act

airport.landPlane(plane);
actualOutput = airport.listOfPlanes.length;

// Assert
result = assertEquals(actualOutput, expectedOutput);

console.log(`Test 1: Plane landed in the airport: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``);

//Test 2
console.log('Test 2 : Checking if there is enough space to land the plane');

// Arrange
const numOfPlanes = airport.listOfPlanes.length;
const maxCapacity = 5;

// Act
airport.landPlane(plane);
const newNumOfPlanes = airport.listOfPlanes.length;
const enoughSpace = newNumOfPlanes <= maxCapacity;

// Assert
expectedOutput = true;
result = assertEquals(enoughSpace, expectedOutput);
console.log(`Test 2: Enough space to land the plane: ${result}`);
console.log(`Test 2: ${result ? 'PASS' : 'FAIL'}`);
console.log('');

//Test 3: Checking if the correct plane is landed
console.log('Test 3: Checking if the correct plane is landed');
// Arrange
const planeNumber = { id: '9A06' };

// Act

const lastLandedPlane = airport.listOfPlanes[airport.listOfPlanes.length - 1];
const correctPlaneLanded = lastLandedPlane.id === planeNumber.id;

// Assert
expectedOutput = true;
result = assertEquals(correctPlaneLanded, expectedOutput);
console.log(`Test 3: Correct plane is landed: ${result}`);
console.log(`Test 3: ${result ? 'PASS' : 'FAIL'}`);
console.log('');


