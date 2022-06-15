// Test 1
const { assertEquals } = require('../test-framework');
const Airport = require('../src/airport');

console.log('==== Test 1 ====');

//arrange
const testAirport = new Airport();
const testPlane = {
	id: `PLN`
};
//act
testAirport.planeLand(testPlane);
const actualResult = testAirport.planesAtAirport[0]?.id; //if exists will check the id otherwise will return undefined

//assert
const result = assertEquals(actualResult, testPlane.id);
//report
console.log(result ? `PASS` : `FAIL`);

//test 2

console.log('==== Test 2 ====');

//arrange

//act

//assert

//report
