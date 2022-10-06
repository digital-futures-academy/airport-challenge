const { assertEquals } = require('../testing-framework');
const Airport = require('../src/airport');

let expected;
let actual;
let result;
let airport;
let plane;

//Test 1 - is a plane landed at the airport

console.log(`====================================================`);
console.log(`Test 1 - Check if plane is added in planesAtAirport`);

// Arrange 
airport = new Airport;

plane = { id: `british airways`, };
expected = true;

// Act
airport.landPlane(plane);
actual = airport.planesAtAirport.includes(plane);

// Assert
result = assertEquals(actual, expected);
console.log(` Test 1: plane added in planesAtAirport: ${result}`);

// Clean up
airport = null;
plane = null;
expected = null;
actual = null;
result = null;

console.log(`====================================================`);
console.log(`Test 2 - test that an airport object has a default capacity`)

//Arrange
expected = 0;

//Act
airport = new Airport();
actual = airport.getCapacity();

//Assert
result = assertEquals(actual, expected);
console.log(` Test 2: Default capacity is set to 0: ${result}`);

//Clean up
airport = null;
plane = null;
expected = null;
actual = null;
result = null;