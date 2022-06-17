const { assertEquals } = require("../testFramework.js");

const Airport = require("../src/airport.js");


console.log('====Test 1====');

//Arrange  - Things we need for the test - input \ expected output
const testName = 'Test to land plane';
const testPlane = {
    name: `Test plane`
};

const expectedOutput = testPlane.name // 'test plane' 


//Act - calling the function to check the  value (ActualOutput)
let testAirport = new Airport();
testAirport.landPlane(testPlane);
const actualOutput = testAirport.planesInAirport[0].name;

//Assert - check the results to see if 
const result = assertEquals(expectedOutput, actualOutput);


console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


