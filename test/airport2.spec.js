const Airport2 = require("../src/airport2");
const { assertEquals } = require("./test-framework")
const { assertTrue } = require("./test-framework")
const { assertFalse } = require("./test-framework")

//initial arrange
let expectedOutput, actualOutput, result, input, testName;


//Requirement 1 
//Test 1
console.log(`===Airport Test 1===`)

//arrange
testName = `Test 1 - confirm plane has landed by testing if airportList array has a length greater than 0 `
input = `plane1`
expectedOutput = 1;

//act
testAirport = new Airport2();
testAirport.landPlane(input);
actualResult = testAirport.airportList.length;

//assert
result = assertEquals(actualResult, expectedOutput)

//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


//Requirement 2 
//Test 2
console.log(`===Airport Test 2===`)
testName = `Test 2 - return changed capacity for new airport class`
input = `plane1`
testAirport = new Airport2();
testAirport.setCapacity(200);
actualResult = testAirport.getCapacity();
expectedOutput = 200
result = assertEquals(actualResult, expectedOutput)
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//Requirement 3
//Test 3
console.log(`===Airport Test 3===`)
testName = `Test 3 - return error when plane attmepts to land with a full airport`
input = `plane1`
testAirport = new Airport2()
testAirport.setAirportSize(100);
testAirport.landPlane(input);
actualResult = testAirport.landPlane();
result = assertTrue(actualResult instanceof Error)
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//Requirement 4
//Test 4
console.log(`===Airport Test 4===`)
testName = `Test 4 - Call a method that removes the last landed plane from the airport and then confirm that it is no longer in the airportList array`
input = `plane1`
testAirport = new Airport2()
testAirport.landPlane(input);
testAirport.planeTakeoff();
actualResult = testAirport.airportList.includes(input);
result = assertFalse(actualResult)
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


//Requirement 5
//Test 5
console.log(`===Airport Test 5===`)
testName = `Test 5 - Receive an error when attempting to take-off a plane that is not in airportList`
input = `plane1`
testAirport = new Airport2()
actualResult = testAirport.planeTakeoff(input);
result = assertTrue(actualResult instanceof Error)
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//Test 6 
console.log(`===Airport Test 6===`)
testName = `Test 6 - Receive an error when attempting to land a plane that is already in airportList`
input = `plane1`
testAirport = new Airport2()
testAirport.landPlane(input)
actualResult = testAirport.landPlane(input);
result = assertTrue(actualResult instanceof Error)
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


//Requirement 6
//Test  7 
console.log(`===Airport Test 7===`)
testName = `Test 7 - Receive an error when attempting to take-off plane in stormy weather`
input = `plane1`
testAirport = new Airport2()
testAirport.weather = `clear`
testAirport.landPlane(input)
testAirport.weather = `stormy`
actualResult = testAirport.planeTakeoff(input);
result = assertTrue(actualResult instanceof Error)
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


//Requirement 7
//Test  8 
console.log(`===Airport Test 8===`)
testName = `Test 7 - Receive an error when attempting to land plane in stormy weather`
input = `plane1`
testAirport = new Airport2()
actualResult = testAirport.landPlane(input);
result = assertTrue(actualResult instanceof Error)
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


//Requirement 8
//Test  9
console.log(`===Airport Test 9===`)
testName = `Return a number for the number of planes that have landed in the airport`
input = `plane1`
expectedOutput = 2;
testAirport = new Airport2();
testAirport.landPlane(input);
actualResult = testAirport.airportList.length;
console.log(actualResult);
result = assertEquals(actualResult, expectedOutput)
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);
