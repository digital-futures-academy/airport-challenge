const {assertEquals } = require('../test-frameworks');
const { Airport } = require('../src/airport');
const { Plane } = require('../src/plane');

console.log('---- Test 9 ----');

//Arrange 

let testName = 'Test 9 - Calling the addLandingPlan function does not land a plane that is in the existing array for the airport'; 
let actualOutput, result; 
let testAirport = new Airport(); 
let expectedOutput = 1;
const plane1 = new Plane('ABCD123');

//Act 
testAirport.addLandingPlane(plane1);
testAirport.addLandingPlane(plane1);
actualOutput = testAirport.planeList;

//Assert 
result = assertEquals(actualOutput.length, expectedOutput); 

//Report
console.log(`${testName}: ${result ? 'PASS' : 'FAIL'}`); 