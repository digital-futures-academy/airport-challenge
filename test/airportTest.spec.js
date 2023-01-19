const { assertEquals } = require('../test-framework.js')
const Airport = require('../src/airport.js');
const Plane = require('../src/plane.js')

let expected, actual, result, airport, plane

//**Test 1 **
console.log('TEST 1')
//arrange
airport = new Airport()
plane = new Plane()
expected = 1

//act

actual = airport.landPlane(plane)

//assert
result = assertEquals(expected, actual)
console.log(`Test One - ${result ? 'Passed' : 'Failed'}`)

//clean up (resetting the variables for the next test)
expected, actual, result, airport, plane = null

