const Airport = require("../src/airport");
const { assertEquals } = require("./test-framework");


console.log("=== Test 1 ===")
console.log("=== Test 2 ===")

//Arrange - things needed for test 
const testName = 'Test to land plane'
const testPlane = {
    name: `Test plane`
};

const expectedOutput = testPlane.name


//Act 
let testAirport = new Airport();
testAirport.landPlane(testPlane);
const actualOutput = testAirport.planesInAirport[0].name
testAirport.landPlane(testPlane.name)
const actualOutput = testAirport.planesInAirport[0]

//Assert 
const
    result = assertEquals(expectedOutput, actualOutput)

console.log(`${testName}: ${result ? `FAIL` : `PASS`}`);