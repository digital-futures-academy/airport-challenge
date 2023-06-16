const { assertEquals } = require("./testing-framework.js");
const Airport = require("../src/airport.js");



console.log('User Story 2 - Testing')
console.log('======================')
console.log(' ')


console.log('Test 1')
console.log("Check that the value for airport capacity can be changed")
console.log(' ')



//arrange
const testPlane = new Airport('tester')
expected = 15;

//act

testPlane.adjustAirportCapacity(15)

result = testPlane.airportCapacity
//assert

result = assertEquals(result, expected)
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log('  ')
