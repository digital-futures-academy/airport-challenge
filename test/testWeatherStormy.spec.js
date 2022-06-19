//acceptance criteria
//I want to prevent takeoff when weather is stormy
//I want to prevent landing when weather is stormy

const Airport = require("../src/airport");
const Plane = require("../src/plane");
const { assertEquals } = require("../test-framework");
console.log(`****** Tests for weather is stormy ******`);
//Test1
//initial arrange
let expectedOutput, actualOutput, result, planeID, airport4, testName;

//arrange
expectedOutput = `Weather is stormy plane cannot take off`;
testName = `Test1: Weather is stormy plane cannot take off`;
planeID = new Plane(`pl001`);
airport4 = new Airport(`ap004`, planeID, 5);
airport4.addPlaneInAirport(planeID);

//act
actualOutput = airport4.takeOffPlaneFromAirport(planeID);

//assert
result = assertEquals(expectedOutput, actualOutput);

//report
console.log(`${testName}: ${result ? `Pass` : `Fail`}`);

//Test2
//arrange
expectedOutput = `Weather is stormy plane cannot land`;
testName = `Test2: Weather is stormy plane cannot land`;
planeID = new Plane(`pl001`);
airport4 = new Airport(`ap004`, planeID, 5);
airport4.addPlaneInAirport(planeID);

//act
actualOutput = airport4.landAPlane(planeID);

//assert
result = assertEquals(expectedOutput, actualOutput);

//report
console.log(`${testName}: ${result ? `Pass` : `Fail`}`);