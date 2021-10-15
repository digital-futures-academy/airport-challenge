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
