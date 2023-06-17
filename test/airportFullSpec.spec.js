const { assertEquals } = require("./testing-framework.js");
const Airport = require("../src/airport.js");



console.log('User Story 3 - Testing')
console.log('======================')
console.log(' ')


console.log('Test 1')
console.log('Landing should be prevented if airport is full')
console.log('  ')


//arrange
const smallAirport = new Airport()
smallAirport.adjustAirportCapacity(2)
smallAirport.landPlane('plane')
smallAirport.landPlane('plane2')

expected = 2;

//act

smallAirport.landPlane('plane3')

actual = smallAirport.planesInAirport.length

//assert
result = assertEquals(actual, expected);

console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log('  ')