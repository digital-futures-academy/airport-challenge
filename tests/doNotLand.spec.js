const { assertTrue, assertEquals } = require('../test-framework');
const Airport = require('../src/airport');

console.log('==== Test 3 ====');

//arrange
const testAirport = new Airport();
let testName = `Test that I able to prevent a plane to land if airport is full`;
input1 = 'PLN';
input2 = 'PLN1';
const expectedResult = testAirport.setCapacity(1);
testAirport.planeLand(input1);
//act

const actualResult = testAirport.planeLand(input2);
console.log(actualResult);
//assert
const result = assertTrue(actualResult instanceof Error);
//report
console.log(result ? `PASS` : `FAIL`);
