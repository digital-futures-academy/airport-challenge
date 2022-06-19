const { assertTrue, assertEquals } = require('../test-framework');
const Airport = require('../src/airport');

console.log('==== Test 4 ====');
let expectedResult, testName, actualResult, result, input1, input2, testAirport;

//arrange
testAirport = new Airport();
testName = `Test the airport capacity is full and return an error`;
input1 = 'PLN';
input2 = 'PLN1';
testAirport.setCapacity(1);
testAirport.planeLand(input1);
//act
actualResult = testAirport.planeLand(input2);

//assert
result = assertTrue(actualResult instanceof Error);
//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);
