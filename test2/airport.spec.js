const { assertTrue } = require('../testingframework');
const Airport = require('../src/airport');



let testName, testAirport, expectedResult, actualResult, result;


console.log(`===Airport Test 1===`);

//Arrange
testName = `Test if plane is landing`;

//Act
testAirport = new Airport();
actualResult = testAirport.planeLand();

//Assert
result = assertTrue(actualResult);

//Report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


console.log(`===Airport Test 2===`);

//Arrange
testName = `test if the plane land when the airport receive plane ID  `;

//Act
testAirport = new Airport();
actualResult = testAirport.planeLandId();

//Assert
result = assertTrue(actualResult);

//Report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


console.log(`===Airport Test 3===`);

//Arrange
testName = `test if the airport can receive an array of plane ID`;

//Act
testAirport = new Airport();
actualResult = testAirport.addPlaneId;

//Assert
result = assertTrue(actualResult);

//Report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

