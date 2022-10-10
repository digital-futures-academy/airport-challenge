const Airport = require("../src/airport");
const { assertEquals } = require("./test-framework")
const { assertTrue } = require("./test-framework")
const { assertFalse } = require("./test-framework")
const { assertEither } = require("./test-framework")

//initial arrange
let expectedOutput, actualOutput, result, input, testName;


//Requirement 1 
//Test 1
//console.log(`===Airport Test 1===`)

//arrange
testName = `Test 1 - confirm plane has landed by testing if planesAtAirport array has a length greater than 0 `
input = `plane1`
expectedOutput = 1;

//act
let testAirport = new Airport();
testAirport.landPlane(input);
let actualResult = testAirport.planesAtAirport.length;

//assert
result = assertEquals(actualResult, expectedOutput);

//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


//Requirement 2 
//Test 2
//console.log(`===Airport Test 2===`)
testName = `Test 2 - return changed capacity for new airport`
input = `plane1`
testAirport = new Airport();
testAirport.capacity = 20;
actualResult = testAirport.capacity;
expectedOutput = 20;
result = assertEquals(actualResult, expectedOutput);
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//Requirement 3
//Test 3
//console.log(`===Airport Test 3===`)
testName = `Test 3 - return error when plane attmepts to land with a full airport`;
testAirport = new Airport()
testAirport.capacity = 3;
testAirport.landPlane(input);
testAirport.landPlane(`plane2`);
testAirport.landPlane(`plane3`);
actualResult = testAirport.landPlane(`plane4`);
result = assertTrue(actualResult instanceof Error);
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//Requirement 4
//Test 4
//console.log(`===Airport Test 4===`)
testName = `Test 4 - Call a method that removes the last landed plane from the airport and then confirm that it is no longer in the planesAtAirport array`;
testAirport = new Airport();
testAirport.landPlane(input);
testAirport.takeOff(input);
actualResult = testAirport.planesAtAirport.includes(input);
result = assertFalse(actualResult);
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


//Requirement 5
//Test 5
//console.log(`===Airport Test 5===`)
testName = `Test 5 - Receive an error when attempting to take-off a plane that is not in planesAtAirport`
testAirport = new Airport();
actualResult = testAirport.takeOff(input);
result = assertTrue(actualResult instanceof Error);
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//Test 6 
//console.log(`===Airport Test 6===`)
testName = `Test 6 - Receive an error when attempting to land a plane that is already in planesAtAirport`
input = `plane1`
testAirport = new Airport();
testAirport.landPlane(input);
actualResult = testAirport.landPlane(input);
result = assertTrue(actualResult instanceof Error);
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


//Requirement 6
//Test  7 
//console.log(`===Airport Test 7===`)
testName = `Test 7 - Receive an error when attempting to take-off plane in stormy weather`
input = `plane1`
testAirport = new Airport()
testAirport.setWeather(0.5)
testAirport.landPlane(input);
testAirport.setWeather(0.1);
actualResult = testAirport.takeOff(input);
result = assertTrue(actualResult instanceof Error);
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


//Requirement 7
//Test  8 
//console.log(`===Airport Test 8===`)
testName = `Test 8 - Receive an error when attempting to land plane in stormy weather`
input = `plane1`;
testAirport = new Airport();
testAirport.setWeather(0.1)
actualResult = testAirport.landPlane(input);
result = assertTrue(actualResult instanceof Error);
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


//Requirement 8
//Test  9
//console.log(`===Airport Test 9===`)
testName = `Test 9 - Return a number for the number of planes that have landed in the airport`
expectedOutput = 3;
testAirport = new Airport();
testAirport.landPlane(input);
testAirport.landPlane(`plane2`);
testAirport.landPlane(`plane3`);
actualResult = testAirport.planesAtAirport.length;
result = assertEquals(actualResult, expectedOutput);
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);



