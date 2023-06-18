const { assertEquals } = require("./testing-framework");
const airport = require("../src/airport");

let actual, result, expected;

const item1 = { id: `plane1` };
const item2 = { id: `plane2` };
const item3 = { id: `plane3` };

//User Story 1/New Test
console.log(`Test 1`);
console.log(`==============================================================================================`)
console.log(``);
console.log(`Make plane to land using landPlane and expect array(listOfPlanes) has increased in length to 1`);

// Arrange
expected = 1;

// Act
airport.landPlane(item1);
actual = airport.listOfPlanes.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 1: 1 plane added to airport: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
airport.listOfPlanes = [];
result = undefined;
actual = undefined;

//User Story 1/New Test
console.log(`Test 2`);
console.log(`=======================================================================`)
console.log(``);
console.log(`Test that plane passed to listOfPlanes is actually added to the airport`);

// Arrange
// expected = 1;

// Act
airport.landPlane(item1);
actual = airport.listOfPlanes[0]

// Assert
result = assertEquals(actual, item1);

// Report
console.log(`Test 2: plane actually landed to airport: ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
airport.listOfPlanes = [];
result = undefined;
actual = undefined;


//User story 1/ New Test
console.log(`Test 3`);
console.log(`===========================================================`)
console.log(``);
console.log(`A plane without an id property will not land to the airport`);

// Arrange
const planeWithoutId = { desc: `Unknown Plane` };
expected = 0;

// Act

airport.landPlane(planeWithoutId);
actual = airport.listOfPlanes.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 3: plane without Id will not land to airport : ${result}`);
console.log(`Test 3: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
airport.listOfPlanes = [];
result = undefined;
actual = undefined;


//User story 2/ New Test
console.log(`Test 1`);
console.log(`============================================`)
console.log(`airport should have a default capacity of 70`);

console.log(``);

// Arrange
expected = 70;

// Act
actual = airport.defCapacity;

// Assert
result = assertEquals(actual, expected)

// Report
console.log(`Test 1: does the airport has a default capacity of 70 : ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
airport.listOfPlanes = [];
result = undefined;
actual = undefined;

//User story 2/ New Test
console.log(`Test 2`);
console.log(`=======================================================`)
console.log(`airport defCapacity should be overridden as appropriate`);

console.log(``);

// Arrange
airport.maxCapacity(80);
expected = 80;

// Act
actual = airport.defCapacity;

// Assert
result = assertEquals(actual, expected)

// Report
console.log(`Test 2: Can the defCapacity be overridden: ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
airport.listOfPlanes = [];
result = undefined;
actual = undefined;

//User story 3/ New Test
console.log(`Test 1`);
console.log(`========================`)
console.log(``);
console.log(`Check if airport is full`);

// Arrange
airport.maxCapacity(80);
expected = true;

// Act
actual = airport.isAirportFull();

// Assert
result = assertEquals(actual, expected)

// Report
console.log(`Test 1: :Is the airport full: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
airport.listOfPlanes = [];
result = undefined;
actual = undefined;


//User story 3/ New Test
console.log(`Test 2`);
console.log(`=================================`)
console.log(``);
console.log(`Prevent landing when airport full`);

// Arrange
airport.maxCapacity(70);
expected = true;

// Act
actual = airport.isAirportFull();

// Assert
result = assertEquals(actual, expected)

// Report
console.log(`Test 2: :Plane can't land because Airport is full: ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
airport.listOfPlanes = [];
result = undefined;
actual = undefined;

//User story 4/ New Test
console.log(`Test 1`);
console.log(`================================================================================`);
console.log(``);

console.log(` Using planeTakeOff and expect array (listOfPlanes) has decreased in length by 1`);

// Arrange
expected = 0;
airport.listOfPlanes = [item1];

// Act
airport.planeTakeOff(item1);
actual = airport.listOfPlanes.length;


// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 1: 1 plane took off to the airport: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
airport.listOfPlanes = [];
result = undefined;
actual = undefined;

//User story 4/ New Test
console.log(`Test 2`);
console.log(`==========================================================================`);
console.log(``);
console.log(`Test that specific plane passed to planeTakeOff actually left the airport.`);

// Arrange
expected = [item2];
airport.listOfPlanes = [item1, item2];

// Act
airport.planeTakeOff(item1);
actual = airport.listOfPlanes;
actual = JSON.stringify(actual);
expected = JSON.stringify(expected);

// Assert
result = assertEquals(actual, expected);

// Report 
console.log(`Test 2: Plane1 left the airport: ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
airport.listOfPlanes = [];
result = undefined;
actual = undefined;

//User story 5/ New Test
console.log(`Test 1`);
console.log(`===============================================================`)
console.log(`Check if plane took off using planeExists is not in the airport`);
console.log(``);

// Arrange
airport.landPlane(item3);
airport.landPlane(item1);
expected = 2;

// Act
airport.planeExists(item2);
actual = airport.listOfPlanes.length;

// Assert
result = assertEquals(expected, actual);

// Report
console.log(`Test 1: Plane2 is not in the airport : ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
airport.listOfPlanes = [];
result = undefined;
actual = undefined;

//User story 5/ New Test
console.log(`Test 2`);
console.log(`=============================================`)
console.log(``);
console.log(`Check if all three planes  are in the airport`);

// Arrange
expected = 3;

// Act
airport.landPlane(item1, item2, item3);
actual = airport.listOfPlanes[0]

// Assert
result = assertEquals(actual, item1);

// Report
console.log(`Test 2: Plane1, Plane2, Plane3 is in airport: ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log(``);


