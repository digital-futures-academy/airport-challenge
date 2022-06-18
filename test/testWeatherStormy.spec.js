//acceptance criteria
//I want to prevent takeoff when weather is stormy

const Airport = require("../src/airport");
const Plane = require("../src/plane");
const { assertEquals } = require("../test-framework");

//initial arrange
let expectedOutput, actualOutput, result, planeID, airport4, testName;

//arrange
expectedOutput = `Weather is stormy plane cannot take off`;
testName = `Test!: Weather is stormy plane cannot take off`;
planeID = new Plane(`pl001`);
airport4 = new Airport(`ap004`, planeID, 5);
airport4.addPlaneInAirport(planeID);

//act
actualOutput = airport4.takeOffPlaneFromAirport(planeID);

//assert
result = assertEquals(expectedOutput, actualOutput);

//report
console.log(`${testName}: ${result ? `Pass` : `Fail`}`);
console.log(actualOutput);