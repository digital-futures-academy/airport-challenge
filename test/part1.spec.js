//As an air traffic controller
//So I can get passengers to a destination
//I want to instruct the airport to land a plane

const Airport = require("../src/airport");
const { assertEquals } = require("./test-framework")
const { assertTrue } = require("./test-framework")
const { assertFalse } = require("./test-framework")

//initial arrange

let expectedOutput, actualOutput, result;
let testName = ``;

console.log(`===Airport Test 1===`)

//arrange
testName = `Test 1 - return true for plane has landed`

//act
testAirport = new Airport();
testAirport.landPlane();
actualResult = testAirport.isLanded();


//assert
result = assertTrue(actualResult)

//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);
