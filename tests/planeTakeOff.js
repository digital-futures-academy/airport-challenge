const { assertTrue, assertEquals } = require('../test-framework');
const Airport = require('../src/airport');

console.log('==== Test 4 ====');

//arrange
const testAirport = new Airport();
let testName = `Instruct to let a plane take off and confirm is no longer at the airport`;
const expectedResult = testAirport.planeTakeOff(plane);

testAirport.planeLand(input1);
//act

const actualResult = testAirport.planeLand(input2);
console.log(actualResult);
//assert
const result = assertEquals(actualResult, expectedResult);
//report
console.log(result ? `PASS` : `FAIL`);
