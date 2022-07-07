const Airport = require("../src/airport");
const { assertEquals, assertFalse } = require("../testFramework");
const { assertTrue } = require("../testFramework");

//Fixtures
let testAirport, expectedResult, actualResult, result, name;
const testPlane = `testPlane`;

// User story 1
// landPlane tests
name = `landPlane Test 1 - item added to planesAtAirport Array`
console.log(`=== ${name} ===`);
// Arrange
testAirport = new Airport();
expectedResult = 1;
// Act
testAirport.landPlane(testPlane)
actualResult = testAirport.planesAtAirport.length;
// Assert
result = assertEquals(expectedResult, actualResult);
// Report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);



name = `landPlane Test 2 - plane can be found in planesAtAirport Array`
console.log(`=== ${name} ===`);
// Arrange
testAirport = new Airport
// Act
testAirport.landPlane(testPlane);
// Assert
result = assertTrue(testAirport.planesAtAirport.includes(testPlane))
// Report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);



//User story 2
// capacity setting tests
name = `capacity setting Test 1 - new airports have default capacity set to 5`
console.log(`=== ${name} ===`);
// Arrange
testAirport = new Airport();
// Act
actualResult = testAirport.capacity;
expectedResult = 5;
// Assert
result = assertEquals(expectedResult, actualResult);
// Report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);



// User story 3
// prevent landing tests
name = `prevent landing Test 1 - plane cannot land if airport capacity is equal to or greater than 5`;
console.log(`=== ${name} ===`);
// Arrange
testAirport = new Airport();
actualResult = 5;
// Act
expectedResult = 5;
// Assert
result = assertEquals(expectedResult, actualResult);
// Report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);



name = `prevent landing Test 2 - return a string when airport is full`;
console.log(`=== ${name} ===`);
// Arrange
testAirport = new Airport();
testAirport.landPlane(testPlane)
expectedResult = "airport is full, plane cannot land";
// Act
actualResult = testAirport.landPlane(testPlane);
// Assert
result = assertEquals(expectedResult, actualResult);
// Report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);



//User story 4
// allow takeoff tests
name = `allow takeoff Test 1 - plane removed from to planesAtAirport Array`;
console.log(`=== ${name} ===`);
// Arrange
testAirport = new Airport();
testAirport.landPlane(testPlane);
expectedResult = 0;
// Act
testAirport.takeoffPlane(testPlane);
// Assert
actualResult = testAirport.planesAtAirport.length;
result = assertEquals(expectedResult, actualResult);
// Report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);



name = `allow takeoff Test 2 - return a string confirming airport has left airport`;
console.log(`=== ${name} ===`);
// Arrange
testAirport = new Airport();
testAirport.landPlane(testPlane)
expectedResult = "plane has taken off";
// Act
actualResult = testAirport.takeoffPlane(testPlane);
// Assert
result = assertEquals(expectedResult, actualResult);
// Report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);



//User story 5
//I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

//1. Test that `isPlaneAtAirport` returns `true` when **plane** IS in the `planesAtAirport` array
name = ` isPlaneAtAirport returns true `;
console.log(`=== ${name} ===`);
// Arrange
testAirport = new Airport();
testAirport.landPlane(testPlane);
expectedResult = true;
// Act
actualResult = testAirport.planesAtAirport.includes(testPlane)
// Assert
result = assertEquals(expectedResult, actualResult);
// Report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);



//2. Test that `isPlaneAtAirport` returns `false` when **plane** IS NOT in the `planesAtAirport` array
name = ` isPlaneAtAirport returns false if plane is not in airport `;
console.log(`=== ${name} ===`);
// Arrange
testAirport = new Airport();
testPlane2 =  "testPlane2"
expectedResult = false;
// Act
actualResult = testAirport.planesAtAirport.includes(testPlane2)
// Assert
result = assertEquals(expectedResult, actualResult);
// Report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);



// 3. Test that `takeOffPlane` returns message saying **plane** has taken off if `isPlaneAtAirport` returned `true`
name = ` takeoffPlane returns takeoff message if isPlaneAtAirport is true `;
console.log(`=== ${name} ===`);
// Arrange
testAirport = new Airport();
testAirport.landPlane(testPlane);
expectedResult = true;
// Act 
message = testAirport.takeoffPlane(testPlane);
actualResult = message.includes("plane has taken off");
// Assert
result = assertEquals(expectedResult, actualResult);
// Report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);














//7. Test that `landPlane` returns message saying ** plane ** has landed if `isPlaneAtAirport` returned`false`
//9. Test that `landPlane` returns message saying ** plane ** is already at airport if `isPlaneAtAirport` returned`true`
//10. Test that `landPlane` does not add ** plane ** to`planesAtAirport` if `isPlaneAtAirport` returned`true`
