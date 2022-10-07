/* eslint-disable quotes */
'use strict';
const { assertEquals } = require('../testing-framework');

const Airport = require('../src/airport');
const Plane = require('../src/plane');

let control, expected, actual, result, testAirport, successMsg;

// Test 1 - has the plane landed?

console.log(`===================================================`);
console.log(
  `Test 1\n
  - check success of landPlane: array length should change\n
  - ensure additional planes can be added\n
  `
);

// Arrange
testAirport = new Airport();
control = testAirport.planeArray.length;
expected = control + 1;

// Act
testAirport.landPlane(new Plane(`dfa001`));
actual = testAirport.planeArray.length;
// Assert
result = assertEquals(actual, expected);
console.log(`Test 1.1: Plane landed: ${result}`);

// Add second plane
testAirport.landPlane(new Plane(`dfa002`));
result = assertEquals(actual, expected);
console.log(`Test 1.2: Additional plane landed: ${result}`);

// Clean up
testAirport = null;
expected = undefined;
actual = undefined;
result = undefined;
control = undefined;

// Test 2 - Is there a default capacity on new airport instances and can it be changed?

console.log(`\n
===================================================`);
console.log(
  `Test 2\n
  - check that airport capacity has a default value of 10\n
  - check that capacity value is successfully changed with setCapacity\n
  `
);

// Arrange
testAirport = new Airport();
expected = 10;

// Act
actual = testAirport.capacity;
// Assert
result = assertEquals(actual, expected);
console.log(`Test 2.1: Correct default capacity: ${result}`);

// Clean up
testAirport = null;
expected = undefined;
actual = undefined;
result = undefined;

// Arrange
testAirport = new Airport();
expected = true;

// Act
testAirport.setCapacity(20);
actual = testAirport.capacity !== 10;
// Assert
result = assertEquals(actual, expected);
console.log(`Test 2.2: Capacity changed: ${result}`);

// Clean up
testAirport = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 3: Has airport capacity been reached? Are planes prevented from landing if it has?

console.log(`\n
===================================================`);
console.log(
  `Test 3 \n
  - check that planeArray.length increases by 1 after plane successfully lands\n
  - check that landPlane returns a confirmation message after a plane lands\n
  - check that a message confirming full capacity is returned\n
  - check that planes cannot land after capacity has been reached\n
  `
);

// Arrange
testAirport = new Airport();
testAirport.landPlane(new Plane(`dfa-001`));
control = 0;
expected = control + 1;
// Act
actual = testAirport.planeArray.length;
// Assert
result = assertEquals(actual, expected);
console.log(
  `Test 3.1: before capacity is reached, planeArray.length has increased by 1 after landing a plane: ${result}`
);
// Clean up
testAirport = null;
expected = undefined;
actual = undefined;
result = undefined;

// Arrange
testAirport = new Airport();
let confirm = testAirport.landPlane(new Plane(`dfa-001`));
expected = `Flight dfa-001 has landed. Remaining capacity: ${9}`;
// Act
actual = confirm;
// Assert
result = assertEquals(actual, expected);
console.log(
  `Test 3.2: landPlane has printed confirmation after a plane lands: ${result}`
);
// Clean up
testAirport = null;
expected = undefined;
actual = undefined;
result = undefined;
confirm = undefined;

// Arrange
testAirport = new Airport();
testAirport.setCapacity(5);
testAirport.landPlane(new Plane(`dfa-001`));
testAirport.landPlane(new Plane(`dfa-002`));
testAirport.landPlane(new Plane(`dfa-003`));
testAirport.landPlane(new Plane(`dfa-004`));
testAirport.landPlane(new Plane(`dfa-005`));
expected = `Airport capacity has been reached.`;

// Act
actual = testAirport.capacityReached();
// Assert
result = assertEquals(actual, expected);
console.log(
  `Test 3.3: capacityReached message returned when airport capacity is full: ${result}`
);

// Arrange
testAirport.landPlane(new Plane(`dfa-006`));
expected = testAirport.capacity;
// Act
actual = testAirport.planeArray.length;
// Assert
result = assertEquals(actual, expected);
console.log(
  `Test 3.4: plane is not added to planesArr when airport capacity is full: ${result}`
);

// Clean up
testAirport = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`\n
===================================================`);
console.log(
  `Test 4 \n
  - check that initTakeoff returns a confirmation message when a plane leaves the airport\n
  - Check that initTakeoff reduces planeArray.length by one\n
  - Check that initTakeoff increases planesEnroute.length by one\n
  - check that initTakeoff removes the plane passed to it from planeArray\n
  `
);

// Arrange
testAirport = new Airport();
testAirport.landPlane(new Plane(`dfa-001`));
confirm = testAirport.initTakeoff(testAirport.planeArray[0]);
expected = `Flight dfa-001 has departed. Remaining capacity: ${10}`;
// Act
actual = confirm;
// Assert
result = assertEquals(actual, expected);
console.log(
  `Test 4.1: initTakeoff returns a confirmation message when a plane leaves the airport: ${result}`
);
// Clean up
testAirport = null;
expected = undefined;
actual = undefined;
result = undefined;
confirm = undefined;

// Arrange
testAirport = new Airport();
testAirport.landPlane(new Plane(`dfa-001`));
confirm = testAirport.planeArray.length;
testAirport.initTakeoff(testAirport.planeArray[0]);
expected = confirm - 1;
// Act
actual = testAirport.planeArray.length;
// Assert
result = assertEquals(actual, expected);
console.log(
  `Test 4.2: initTakeoff reduces planeArray.length by one: ${result}`
);
// Clean up
testAirport = null;
expected = undefined;
actual = undefined;
result = undefined;
confirm = undefined;

// // Arrange
// testAirport = new Airport();
// testAirport.landPlane(new Plane(`dfa-001`));
// testAirport.initTakeoff(testAirport.planeArray[0]);
// expected = `dfa-001`;
// // Act
// actual = testAirport.planeArray[0].id;
// // Assert
// result = assertEquals(actual, expected);
// console.log(
//   `Test 4.2: initTakeoff removes the plane passed to it from planeArray: ${result}`
// );
// // Clean up
// testAirport = null;
// expected = undefined;
// actual = undefined;
// result = undefined;
// confirm = undefined;
