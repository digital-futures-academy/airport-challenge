const { assertTrue, assertEquals } = require('../test-framework');
const Airport = require('../src/airport');

console.log('==== Test 3 ====');

//arrange
const testAirport = new Airport();
let testName = `Test that I able to prevent a plane to land if airport is full`;
let expectedResult = testAirport.capacity;
//act

const actualResult = testAirport.setCapacity(10);
console.log(actualResult);
//assert
const result = assertEquals(actualResult, expectedResult);
//report
console.log(result ? `PASS` : `FAIL`);
