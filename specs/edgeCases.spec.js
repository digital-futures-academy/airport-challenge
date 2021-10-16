const Airport = require('../src/Airport');
const Plane = require('../src/Plane');
const test = require('../test-framework');

test.xit("EdgeCase1: Testing that planes can only take off from airports they are in", () => {
	// Assign
	let expectedOutput, actualOutput;
	let heathrow = new Airport('heathrow');
	let frankfurt = new Airport('frankfurt');
	let plane = new Plane();

	heathrow.weather = "sunny";
	frankfurt.weather = "sunny";
	heathrow.parkingLot = [plane];
	frankfurt.parkingLot = [];

	expectedOutput = `Not possible: ${plane} is not at ${frankfurt.name}`;

	// Act
	actualOutput = frankfurt.takeOff(plane);

	// Assert
	test.assertEquals(actualOutput, expectedOutput);
})

test.xit("EdgeCase2: Testing that planes already flying cannot be in an airport", () => {
	// Assign
	let expectedOutput, actualOutput;
	let frankfurt = new Airport('frankfurt');
	let plane = new Plane();
	frankfurt.weather = "sunny";
	frankfurt.parkingLot = [plane];

	expectedOutput = false;

	// Act
	frankfurt.takeOff(plane);
	actualOutput = plane.isAtAirport(frankfurt);

	// Assert
	test.assertEquals(actualOutput, expectedOutput);
})