const { assertTrue, assertEquals, assertFalse } = require('../test-framework');
const Airport = require('../src/airport');
const plane = require('../src/plane');

//test 1
console.log('==== Test 6 ====');

let actualResult, result, testPlane, testAirport;

//arrange
testAirport = new Airport();
testName = `Test if isAtTheAirport() confirms if a plane is at the airport`;
testPlane = new plane('testPlane');
testAirport = {
	planesAtAirport() {
		return ['testPlane'];
	}
};
//act
actualResult = testPlane.isAtTheAirport(testAirport);

//assert
result = assertTrue(actualResult);
//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);
