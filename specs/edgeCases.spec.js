const Airport = require('../src/Airport');
const Plane = require('../src/Plane');
const test = require('../test-framework');

test.it("EdgeCase1: Testing that planes can only take off from airports they are in", () => {
	// Assign
	let expectedOutput, actualOutput;
	let airport1 = new Airport();
	let airport2 = new Airport();
	let plane = new Plane();

	airport1.weather = "sunny";
	airport2.weather = "sunny";
	airport1.parkingLot = [plane];
	airport2.parkingLot = [];

	expectedOutput = `Not possible: ${plane} is not at airport2`;

	// Act
	actualOutput = airport2.takeOff(plane);

	// Assert
	test.assertEquals(actualOutput, expectedOutput);
})