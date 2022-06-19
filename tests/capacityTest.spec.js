const { assertEquals } = require('../test-framework');
const Airport = require('../src/airport');

console.log('==== Test 2 ====');

//arrange
const testAirport = new Airport();
let testName = `Test that I am able to override the default capacity`;
let expectedResult = 15; // cap i want to set as new cap
//act

const actualResult = testAirport.setCapacity(15);

//assert
const result = assertEquals(actualResult, expectedResult);
//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);
