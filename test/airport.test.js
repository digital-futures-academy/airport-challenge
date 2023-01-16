// Initial setup
const assertEquals = require(`../test-framework`);
const Airport = require(`../src/Airport`);
const Plane = require(`../src/Plane`);

let airport;
let plane, plane2;
let expected, actual, result;

// remember:  Arrange, Act, Assert, Clean up

// Test 1 - when a Plane is landed, planeList should increase by 1
console.log(`=== Test 1 - when a Plane is landed, planeList should increase by 1 ===`)

// Arrange
airport = new Airport();
plane = new Plane();
expected = airport.planeList.length + 1;

// Act
airport.land(plane);
actual = airport.planeList.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Expected: ${expected} || Actual: ${actual}`);
console.log(`Test 1 - when a Plane is landed, planeList should increase by 1: ${result ? `Passed` : `FAILED`}`);
console.log(`===================================== Test End =====================================\n`)

// Clean up
airport = undefined;
plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;


//Test 2 - when an Airport is created, it should have a default capacity of 7
console.log(`=== Test 2 - when an Airport is created, it should have a default capacity of 7 ===`);

// Arrange
expected = 7;

// Act
airport = new Airport();
actual = airport.capacity;

// Assert
result = assertEquals(expected, actual);
console.log(`Expected: ${expected} || Actual: ${actual}`);
console.log(`Test 2 - when an Airport is created, it should have a default capacity of 7: ${result ? `Passed` : `FAILED`}`);
console.log(`===================================== Test End =====================================\n`)

// Clean up
airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;


//Test 3 - After an Airport is created, it's capacity can be updated
console.log(`=== Test 3 - After an Airport is created, it's capacity can be updated ===`);

// Arrange
airport = new Airport();
expected = 21;

// Act
airport.updateAirportCapacity(21);
actual = airport.capacity;

// Assert
result = assertEquals(expected, actual);
console.log(`Expected: ${expected} || Actual: ${actual}`);
console.log(`Test 3 - After an Airport is created, it's capacity can be updated: ${result ? `Passed` : `FAILED`}`);
console.log(`===================================== Test End =====================================\n`)

// Clean up
airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;


//Test 4 - If planeList is at max capacity, land will not add another Plane
console.log(`=== Test 4 - If planeList is at max capacity, land will not add another Plane ===`)

// Arrange
airport = new Airport(1);  //lowering capacity for the sake of time
plane = new Plane();
plane2 = new Plane();
airport.land(plane)  //filling the list to capacity
expected = airport.planeList.length;

// Act
airport.land(plane2);
actual = airport.planeList.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Expected: ${expected} || Actual: ${actual}`);
console.log(`Test 4 - If planeList is at max capacity, land will not add another Plane: ${result ? `Passed` : `FAILED`}`);
console.log(`===================================== Test End =====================================\n`)

// Clean up
airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;


//**Test 5 -** When takeOff is called, the length of planeList should decrease by 1
console.log(`=== Test 5 - When takeOff is called, the length of planeList should decrease by 1 ===`);

// Arrange
airport = new Airport();
plane = new Plane();
expected = airport.planeList.length;  // length before anything is added
airport.land(plane);

// Act
airport.takeOff(plane);
actual = airport.planeList.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Expected: ${expected} || Actual: ${actual}`);
console.log(`Test 5 - When takeOff is called, the length of planeList should decrease by 1: ${result ? `Passed` : `FAILED`}`);
console.log(`===================================== Test End =====================================\n`)

// Clean up
airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;