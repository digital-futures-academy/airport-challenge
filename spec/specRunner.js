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
console.log(plane);

// Clean up
airport = null;
plane = null;
expected = null;
actual = null;
result = null;