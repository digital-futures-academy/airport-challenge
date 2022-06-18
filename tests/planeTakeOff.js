const { assertTrue, assertEquals, assertFalse } = require('../test-framework');
const Airport = require('../src/airport');

console.log('==== Test 5 ====');

//test 1

let expectedResult, testName, actualResult, result, input1, testAirport;

//arrange
testAirport = new Airport();
testName = `Test that function removes a plane from array`;
input1 = 'PLN';
testAirport.setCapacity(1);
expectedResult = 0;

//act
testAirport.planeTakeOff(input1);
actualResult = testAirport.planesAtAirport.length;

//assert
result = assertEquals(actualResult, expectedResult);
//report
console.log(result ? `PASS` : `FAIL`);

// test 2

//arrange
testAirport = new Airport();
testName = `Test if the plane has been removed from the array`;
input1 = 'PLN';
testAirport.setCapacity(1);
expectedResult = 0;

//act
testAirport.planeTakeOff(input1);
actualResult = testAirport.planesAtAirport.includes(input1);

//assert
result = assertFalse(actualResult);
//report
console.log(result ? `PASS` : `FAIL`);
