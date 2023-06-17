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


// console.log(result)
//assert

result = assertEquals(result, expected)
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log('  ')


console.log('Test 2')
console.log("Check that only integers can be used in 'adjustAirportCapacity'")
console.log(' ')

//arrange
expected = 10;

//act
// testPlane.adjustAirportCapacity(10)
testPlane.adjustAirportCapacity('sdfsdf')

result = testPlane.airportCapacity


console.log(result)
console.log(expected)
//assert

result = assertEquals(result, expected)
console.log(`Test 2: ${!result ? `PASS` : `FAIL`}`);
console.log('  ')
console.log(testPlane.planesInAirport)