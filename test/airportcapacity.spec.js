const Airport = require(../src/airport);
const { assertEquals } = require("..test/test-framework);

console.log("==== Test 2 ====")

//Arrange
const testName = 'Test 2 - the default capacity given to any new instance of airport class';
const capacity = 10;
expectedOutput = capacity;

// Act 
testAirport = new Airport();
actualOutput = testAirport.capacity
//Assert 
result = assertEquals9(expectedOutput, actualOutput);

//Report 
console.log(`{testName}: ${result ? `PASS` : `FAIL`}`)

module.exports

