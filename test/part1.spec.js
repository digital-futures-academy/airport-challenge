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


//Requirement 2
//Test 2
console.log(`===Airport Test 2===`)
testName = `Test 2 - return capacity for airport class`
testAirport = new Airport();
actualResult = testAirport.getCapacity();
expectedOutput = 100
result = assertEquals(actualResult, expectedOutput)
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//Test 3 
console.log(`===Airport Test 3===`)
testName = `Test 3 - return changed capacity for new airport class`
testAirport = new Airport();
testAirport.setCapacity(200);
actualResult = testAirport.getCapacity();
expectedOutput = 200
result = assertEquals(actualResult, expectedOutput)
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


//Requirement 3
//Test 4
console.log(`===Airport Test 4===`)
testName = `Test 2 - return error when plane attmepts to land with a full airport`
testAirport = new Airport().setCapacity(99);
actualResult = testAirport.isLanded()
console.log(actualResult)
result = assertFalse(actualResult)
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);