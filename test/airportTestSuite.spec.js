const { assertEquals } = require("./testing-framework");
const Airport = require("../src/airport");
const Plane = require("../src/plane");

let actual, result, expected;
let plane = new Plane(`plane1`);
let airport = new Airport();

console.log(`
Test 1
==============================================
Planes can land in the airport:
    Ensure that planes can land in Airport checking 
    that the number of planes at the airport increases`
);
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
console.log(`
Test 2
==============================================
The actual plane I want to land does land in the airport:
   Ensure that the right plane can land in Airport checking 
   their ID
`);

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

//------------------------------------------------------------ 3
console.log(`
Test 3
==============================================
Only identifiable planes can land:
    Planes without an ID cannot land in the airport
`);

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
console.log(`
Test 4
==============================================
The airport has a max capacity:
    Ensure airport has a capacity property
`);

// Arrange

// Act

// Assert
result = airport.airportCapacity;

// Report
console.log(`Test 4: the airport has a capacity property: ${result}`);
console.log(`Test 4: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
airport.planesStanding = [];
result = undefined;
actual = undefined;

//------------------------------------------------------------ 5
console.log(`
Test 5
==============================================
The airport\'s capacity property can be overridden if needed:
    Ensure airport\'s capacity property can be overridden
`);

// Arrange
airport.airportCapacity = 5;
// Act
// Assert
result = airport.airportCapacity != 10;

// Report
console.log(`Test 5: the airport's capacity can be overridden if needed, new capacity: ${result}`);
console.log(`Test 5: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
airport.planesStanding = []
airport.airportCapacity = 10;
result = undefined;
actual = undefined;

//------------------------------------------------------------ 6
console.log(`
Test 6
==============================================
Planes do not land if the airport is at capacity:
    Ensure airport has a capacity property and this limits planes landing
`);

// Arrange
airport.planesStanding = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
expected = airport.airportCapacity;

// Act
airport.landPlane(plane);
actual = airport.planesStanding.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 6: planes can't land when the airport is full: ${result}`);
console.log(`Test 6: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
airport.planesStanding = [];
result = undefined;
actual = undefined;

//------------------------------------------------------------7
console.log(`
Test 7
==============================================
Planes can take off when instructed:
    Ensure planes can leave the airport
`);

// Arrange
airport.landPlane(plane);
expected = 0;

// Act
airport.orderTakeOff(plane);
actual = airport.planesStanding.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 7: planes leave the airport when instructed: ${result}`);
console.log(`Test 7: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
airport.planesStanding = [];
result = undefined;
actual = undefined;

//------------------------------------------------------------8
console.log(`
Test 8
==============================================
The right plane leaves the airport when instructed:
   Ensure the right plane leaves the airport
`);

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
console.log(`Test 8: the right plane leaves the airport: ${result}`);
console.log(`Test 8: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
airport.planesStanding = [];
result = undefined;
actual = undefined;

//------------------------------------------------------------9
console.log(`
Test 9
==============================================
Planes that aren't at the airport can't leave:
   Ensure that only planes at the airport can leave
`);

// Arrange
plane3 = new Plane(`plane3`);
airport.landPlane(plane3);
airport.landPlane(plane);
expected = 2;

// Act
airport.orderTakeOff(plane2);
actual = airport.planesStanding.length;

// Assert
result = assertEquals(expected, actual);

// Report
console.log(`Test 9: Planes not at the airport can not leave: ${result}`);
console.log(`Test 9: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
airport.planesStanding = [];
result = undefined;
actual = undefined;

//------------------------------------------------------------10
console.log(`
Test 10
==============================================
Planes that are already at the airport can't land again:
   Ensure that only planes that aren't at the airport can't land
`);

// Arrange
airport.landPlane(plane2);
airport.landPlane(plane3);
airport.landPlane(plane);
expected = 3;

// Act
airport.landPlane(plane2);

// Assert
result = assertEquals(expected, airport.planesStanding.length)

// Report
console.log(`Test 10: Planes already at the airport can't land: ${result}`);
console.log(`Test 10: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up
airport.planesStanding = [];
result = undefined;
actual = undefined;