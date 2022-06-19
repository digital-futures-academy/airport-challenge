const { assertTrue, assertEquals, assertFalse } = require('../test-framework');
const Airport = require('../src/airport');
const plane = require('../src/plane');

console.log('==== Test 7 ====');

let testPlane, actualResult, expectedResult, input, result, testAirport;

// arrange

testName = 'Test if i can avoid landing a landed plane';
input = 'PLN';
testAirport = new Airport();
testAirport.planeLand(input);

//act
actualResult = testAirport.planesAtAirport[0];

//assert
result = assertEquals(actualResult, input);

//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

// Test 3

console.log('==== Test 8 ====');

// arrange
testName = 'Test to prevent taking off a plane that is not at the airport';
input = 'PLN';
testAirport = new Airport();
testAirport.planeTakeOff(input);

//act
actualResult = testAirport.takeOff;

//assert
result = assertTrue(actualResult);

//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);
