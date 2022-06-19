const { assertTrue } = require('../test-frameworks');
const { Airport, Plane } = require('../src/airport');

console.log('---- Test 7 ----');

//Arrange 
let actualOutput, result; 
let testName = 'Test 7 - Calling the isPlaneInAirport function returns whether a plane is contained within an airport or not'; 
let testAirport = new Airport(); 

//Act 
const plane1 = new Plane('ABCD123');
testAirport.addLandingPlane(plane1);

actualOutput = testAirport.isPlaneInAirport(plane1);

//Assert 
result = assertTrue(actualOutput); 

//Report 
console.log(`${testName}: ${result ? 'PASS' : 'FAIL'}`); 

//Test 8 - Arrange 
console.log('---- Test 8 ----');

testName = 'Test 8 - Calling the takeOff function removes the plane from the existing array and gives a confirmation message'; 
let testAirport2 = new Airport(); 
testAirport2.addLandingPlane(plane1); 
const initialArray = testAirport2.planeList.length; 

//Act 
testAirport2.takeOffPlane(plane1);
actualOutput = testAirport2.planeList.length;

//Assert 
result = assertTrue(initialArray > actualOutput); 

//Report 
console.log(`${testName}: ${result ? 'PASS' : 'FAIL'}`); 



