const { assertTrue, assertEquals } = require('../test-framework');
const Airport = require('../src/airport');

console.log('==== Test 3 ====');
let expectedResult, testName, actualResult, result, input1, input2, testAirport;

//arrange
testAirport = new Airport();
testName = `Test that I able to prevent a plane to land if airport is full`;
input1 = 'PLN';
input2 = 'PLN1';
testAirport.setCapacity(1);
expectedResult = 1;
testAirport.planeLand(input1);
testAirport.planeLand(input2);
//act
actualResult = testAirport.planesAtAirport.length;

//assert
result = assertEquals(actualResult, expectedResult);
//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);
