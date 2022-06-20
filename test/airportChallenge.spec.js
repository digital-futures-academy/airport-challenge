//Airport challenge requirement 1
//Acceptance criteria: As an air traffic controller, So I can get passengers to their destination,
//I want to instruct the airport to land a plane.
const { assertEquals } = require("../../test-Framework");
const { assertTrue } = require("../../test-Framework");
const { assertFalse } = require("../../test-Framework");
const Airport = require("../src/airport");
const plane = require("../src/plane");


//Arrange 1
let expectedOutput, actualOutput, result;
expectedOutput = [];
practicePlane = `Plane 1`;
testAirportCapacity = 6;


//act 1
console.log(`Test - can airport size be read and overridden?`);
const testAirport1 = new Airport();
console.log(`The default airport size is ${testAirport1.airportSize}`);
const testAirport2 = new Airport(testAirportCapacity);
console.log(`The custom airport size is ${testAirport2.airportSize}`);

console.log("Test 1 - Can an airport land a plane?");
testPlane = new plane(practicePlane);
testAirport1.landPlane(practicePlane);
expectedOutput = testAirport1.airportList;
actualOutput = testAirport1.airportList;

//assert 1
result = assertEquals(actualOutput, expectedOutput);
console.log(`result of the test is: ${result} `);

//Acceptance criteria 3
// As air traffic controller, I want to prevent landing when airport is full

//arrange 2
testAirportSize = 10;
practicePlane2 = `Plane 2`
const testPlane2 = new plane(practicePlane2);

console.log(`=====Test for requirement 3======`);
const testAirport3 = new Airport(testAirportSize);
testAirport3.landPlane(testPlane2);
testAirport3.landPlane(testPlane);

//Acceptance criteria 4
//As air traffic controller, I want airports to let planes take-off and show the plane has left

//arrange

practicePlane3 = `Plane 3`;
testAirportSize2 = 5;
const testPlane3 = new plane(practicePlane3);
const testAirport4 = new Airport(testAirportSize2);


//act

testAirport4.landPlane(testPlane3);
testAirport4.landPlane(testPlane);
testAirport4.landPlane(testPlane2);
testAirport4.planeTakeoff(testPlane3);



//Acceptance criteria 5
//As air traffic controller, 1. Prevent asking airports to let a plane take-off when not at airport.
//Prevent airport from landing a plane that's already at the airport.

//arrange
testAirportSize3 = 4;
testAirportName = `Heathrow`;
testAirport5 = new Airport(testAirportSize3, testAirportName);


//act
testAirport5.landPlane(testPlane2);
testAirport5.landPlane(testPlane2);
testAirport5.planeTakeoff(testPlane2);
testAirport5.planeTakeoff(testPlane2);