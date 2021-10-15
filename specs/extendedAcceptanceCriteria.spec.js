const Airport = require('../src/Airport');
const Plane = require('../src/Plane');
const test = require('../test-framework');

test.it("Test6 - Testing that we can prevent takeoff when weather is 'stormy'", () => {
	// Assign
	let actualOutput, expectedOutput;
	let plane = new Plane();
	let airport = new Airport();
	airport.parkingLot = [plane];
	airport.weather = "stormy";
	expectedOutput = [plane];

	// Act
	actualOutput = airport.takeOff(plane);

	// Assert
	test.assertEquals(actualOutput.toString(), expectedOutput.toString());
})

test.it("Test7 - Testing that we can prevent landing when weather is 'stormy'", () => {
	// Assign
	let actualOutput, expectedOutput;
	let plane = new Plane();
	let airport = new Airport();
	airport.parkingLot = [];
	airport.weather = "stormy";
	expectedOutput = [];

	// Act
	actualOutput = airport.landPlane(plane);

	// Assert
	test.assertEquals(actualOutput.toString(), expectedOutput.toString());
})