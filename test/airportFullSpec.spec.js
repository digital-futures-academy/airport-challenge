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


console.log('Test 2')
console.log("isAirportfull() should return false if airport is not full")
console.log('  ')

//arrange
const notFullAirport = new Airport()
notFullAirport.landPlane('plane')
notFullAirport.landPlane('plane2')

expected = false;

//act

actual = notFullAirport.isAirportFull()


//assert
result = assertEquals(actual, expected);



console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log('  ')

console.log('Test 3')
console.log("isAirportfull() should return true if airport is full")
console.log('  ')

//arrange
const fullAirport = new Airport()
fullAirport.adjustAirportCapacity(2)

fullAirport.landPlane('plane')
fullAirport.landPlane('plane2') // max out airport

expected = true;

//act

actual = fullAirport.isAirportFull()


//assert
result = assertEquals(actual, expected);



console.log(`Test 3: ${result ? `PASS` : `FAIL`}`);
console.log('  ')