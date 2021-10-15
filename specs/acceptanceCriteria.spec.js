const Airport = require('../src/Airport');
const Plane = require('../src/Plane');
const test = require('../test-framework');

// Test1
test.it("Test1 - Testing that we can land planes", () => {
	// Step1 - Arrange
	let actualOutput, expectedOutput;
	let airport = new Airport();
	let plane = new Plane();
	expectedOutput = [plane];

	// Step2 - Act
	actualOutput = airport.landPlane(plane);

	// Step3 - Assert
	// seems like js cannot compare arrays for identity
	test.assertEquals(actualOutput.toString(), expectedOutput.toString());
})

// Test2
test.it("Test2 - Testing that we can override default airport capacity", () => {
	// Step1 - Arrange
	let actualOutput, expectedOutput;
	let airport1 = new Airport();
	let airport2 = new Airport(10);
	expectedOutput = airport1.capacity;

	// Step2 - Act
	actualOutput = airport2.capacity;

	// Step3 - Assert
	test.assertNotEquals(actualOutput, expectedOutput);
})

// Test3
test.it("Test3 - Testing that we can prevent landing when airport is full", () => {
	// Step1 - Arrange
	let actualOutput, expectedOutput;
	let plane = new Plane();
	let airport = new Airport(2);
	airport.parkingLot = [plane, plane];
	expectedOutput = true;

	// Step2 - Act
	actualOutput = airport.isFull();

	// Step3 - Assert
	test.assertEquals(actualOutput, expectedOutput);
})

test.it("Test4 - Testing that we can get planes to take off and confirm they are no longer in the airport", () => {
	// Step1 - Arrange
	let expectedOutput, actualOutput;
	let plane = new Plane();
	let airport = new Airport();
	airport.parkingLot = [plane];
	expectedOutput = [];

	// Step2 - Act
	actualOutput = airport.takeOff(plane);

	// Step3 - Assert
	test.assertEquals(actualOutput.toString(), expectedOutput.toString());
})