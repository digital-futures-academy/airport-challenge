// Test 1
const { assertEquals } = require('../test-framework');
const Airport = require('../src/airport');

console.log('==== Test 1 ====');

let testName, testAirport, testPlane, actualResult, result;

//arrange
testName = ``;
testAirport = new Airport();
testPlane = {
	id: `PLN`
};
//act
testAirport.planeLand(testPlane);
actualResult = testAirport.planesAtAirport[0]?.id;

//assert
result = assertEquals(actualResult, testPlane.id);
//report
console.log(result ? `PASS` : `FAIL`);
