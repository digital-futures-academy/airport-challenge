const Airport = require('../src/Airport');
const Plane = require('../src/Plane');
const test = require('../test-framework');

// Test1
test.it("Test1 - Testing that we can land planes", () => {
	// Step1 - Arrange
	let actualOutput, expectedOutput;
	let airport = new Airport();
	let plane = new Plane();
	airport.weather = "sunny";
	expectedOutput = `${plane}, please get ready for landing!`;

	// Step2 - Act
	actualOutput = airport.landPlane(plane);

	// Step3 - Assert
	test.assertEquals(actualOutput, expectedOutput);
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
test.it("Test3a - Testing that we can check if the airport is full", () => {
	// Step1 - Arrange
	let actualOutput, expectedOutput;
	let plane1 = new Plane();
	let plane2 = new Plane();
	let airport = new Airport(2);
	airport.parkingLot = [plane1, plane2];
	expectedOutput = true;

	// Step2 - Act
	actualOutput = airport.isFull();

	// Step3 - Assert
	test.assertEquals(actualOutput, expectedOutput);
})

// Test3b
test.it("Test3b - Testing that we can prevent landing when airport is full", () => {
	// Step1 - Arrange
	let actualOutput, expectedOutput;
	let plane1 = new Plane();
	let plane2 = new Plane();
	let airport = new Airport(1);
	airport.parkingLot = [plane1];
	expectedOutput = `${plane2} is unable to land: Airport capacity is full`;

	// Step2 - Act
	actualOutput = airport.landPlane(plane2);

	// Step3 - Assert
	test.assertEquals(actualOutput, expectedOutput);
})

test.it("Test4a - Testing that we can get planes to take off", () => {
	// Step1 - Arrange
	let expectedOutput, actualOutput;
	let plane = new Plane();
	let airport = new Airport();
	airport.weather = "sunny";
	airport.parkingLot = [plane];
	expectedOutput = `${plane}, please get ready for takeoff!`;

	// Step2 - Act
	actualOutput = airport.takeOff(plane);

	// Step3 - Assert
	test.assertEquals(actualOutput, expectedOutput);
})

test.it("Test4b - Testing that we can confirm they are no longer in the airport", () => {
	// Step1 - Arrange
	let expectedOutput, actualOutput;
	let plane = new Plane();
	let airport = new Airport();
	airport.weather = "sunny";
	airport.parkingLot = [plane];
	expectedOutput = [];

	// Step2 - Act
	airport.takeOff(plane);
	actualOutput = airport.parkingLot;

	// Step3 - Assert
	// seems like js cannot compare arrays for identity
	test.assertEquals(actualOutput.toString(), expectedOutput.toString());
})

test.it("Test5a - Testing that planes not at airport cannot takeoff", () => {
	// Step1 - Arrange
	let expectedOutput, actualOutput;
	let plane = new Plane();
	let airport = new Airport();
	airport.parkingLot = [];
	expectedOutput = `Not possible: ${plane} is not at airport`;

	// Step2 - Act
	actualOutput = airport.takeOff(plane);

	// Step3 - Assert
	test.assertEquals(actualOutput, expectedOutput);
})

test.it("Test5b - Testing that planes at airport cannot land", () => {
	// Step1 - Arrange
	let expectedOutput, actualOutput;
	let plane = new Plane();
	let airport = new Airport();
	airport.parkingLot = [plane];
	expectedOutput = `Not possible: ${plane} is at airport`;

	// Step2 - Act
	actualOutput = airport.landPlane(plane);

	// Step3 - Assert
	test.assertEquals(actualOutput, expectedOutput);
})