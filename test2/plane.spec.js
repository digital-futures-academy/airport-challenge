const { assertTrue } = require("../testingframework");
const Plane = require('../src/plane');


let testName, testPlane, expectedResult, actualResult, result;


console.log(`===Plane Test 1===`);

//Arrange
testName = `test if plane can show an array of ID's`;

//Act
testPlane = new Plane();
actualResult = testPlane.listOfIds


//Assert
result = assertTrue(actualResult);

//Report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);