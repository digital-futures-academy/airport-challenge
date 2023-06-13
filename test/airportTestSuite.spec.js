const { assertEquals } = require("./testing-framework");
const Airport = require("../src/airport");
const Plane = require("../src/plane");

let actual, result, expected;
let plane = new Plane(`plane1`);
let airport = new Airport();

console.log(`Test 1`);
console.log(`==============================================`)
console.log(`Planes can land in the airport:`);
console.log(`   Ensure that planes can land in Airport checking 
that the number of planes at the airport increases`);
console.log(``);
// Arrange
expected = 1;

// Act
airport.landPlane(plane);
actual = airport.planesStanding.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 1: 1 plane landed successfully: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
airport.planesStanding = [];
result = undefined;
actual = undefined;
//------------------------------------------------------------
console.log(``);
console.log(`Test 2`);
console.log(`==============================================`)
console.log(`The actual plane I want to land does land in the airport:`);
console.log(`   Ensure that the right plane can land in Airport checking 
their ID`);
console.log(``);
// Arrange

// Act
airport.landPlane(plane);
actual = airport.planesStanding[0];

// Assert
result = assertEquals(actual, plane);

// Report
console.log(`Test 2: plane plane landed successfully: ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
airport.planesStanding = [];
result = undefined;
actual = undefined;

//------------------------------------------------------------
console.log(``);
console.log(`Test 3`);
console.log(`==============================================`)
console.log(`Only identifiable planes can land:`);
console.log(`   Planes without an ID cannot land in the airport`);
console.log(``);
// Arrange
const unknownPlane = { desc: `suspicious` };
expected = 0;

// Act
airport.landPlane(unknownPlane);
actual = airport.planesStanding.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 3: Unknown planes do not get to land: ${result}`);
console.log(`Test 3: ${result ? `PASS` : `FAIL`}`);

// Clean Up
airport.planesStanding = [];
result = undefined;
actual = undefined;

//------------------------------------------------------------ 4
console.log(``);
console.log(`Test 4`);
console.log(`==============================================`)
console.log(`Planes do not land if the airport is at capacity:`);
console.log(`   Ensure airport has a capacity property and this limits planes landing`);
console.log(``);
// Arrange
airport.planesStanding = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
expected = airport.airportCapacity;


// Act
airport.landPlane(plane);
actual = airport.planesStanding.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 4: planes can't land when the airport is full: ${result}`);
console.log(`Test 4: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
airport.planesStanding = [];
result = undefined;
actual = undefined;

//------------------------------------------------------------5
console.log(``);
console.log(`Test 5`);
console.log(`==============================================`)
console.log(`Planes can take off when instructed:`);
console.log(`   Ensure planes can leave the airport`);
console.log(``);
// Arrange
expected = 0;


// Act
airport.orderTakeOff(plane);
actual = airport.planesStanding.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 5: planes leave the airport when instructed: ${result}`);
console.log(`Test 5: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
airport.planesStanding = [];
result = undefined;
actual = undefined;

//------------------------------------------------------------6
console.log(``);
console.log(`Test 6`);
console.log(`==============================================`)
console.log(`the right plane leaves the airport when instructed`);
console.log(`   Ensure the right plane leaves the airport`);
console.log(``);
// Arrange
plane2 = new Plane(`plane2`);
airport.landPlane(plane2);
airport.landPlane(plane);
expected = 0;


// Act
airport.orderTakeOff(plane);

// Assert
result = assertEquals(airport.planesStanding.includes(plane), false);

// Report
console.log(`Test 6: the right plane leaves the airport: ${result}`);
console.log(`Test 6: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
airport.planesStanding = [];
result = undefined;
actual = undefined;