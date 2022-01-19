const assertEquals = require('../test-framework');
const Airport = require('../src/Airport');

// Test if Airport is initially available (true):
const testAirportAvailable = () => {
    // Arrange
    const airport = new Airport();
    const expected = true;

    // Act
    const actual = airport.isAvailable();

    // Assert
    const result = assertEquals(expected, actual);

    // Report
    console.log(`Airport is initially available: ${result}`);
};

// Test if Airport is initially unavailable (false):
const testAirportUnavailable = () => {
    // Arrange
    const airport = new Airport(false);
    const expected = false;

    // Act
    const actual = airport.isAvailable();

    // Assert
    const result = assertEquals(expected, actual);

    // Report
    console.log(`Airport is initially unavailable: ${result}`);
};

// Test if a plane can land when Airport is unavailable:
const testPlaneLandsAirportUnavailable = () => {
    // Arrange
    const airport = new Airport();
    const expected = false;

    // Act
    airport.isFull();
    const actual = airport.isAvailable();

    // Assert
    const result = assertEquals(expected, actual);

    // Report
    console.log(`A plane cannot land when airport is unavailable: ${result}`);
};

// Test if a plane can land when Airport is available:
const testPlaneLandsAirportAvailable = () => {
    // Arrange
    const airport = new Airport(false);
    const expected = true;

    // Act
    airport.isFull();
    const actual = airport.isAvailable();

    // Assert
    const result = assertEquals(expected, actual);

    // Report
    console.log(`A plane can land when airport is available: ${result}`);
};


module.exports = {
    testAirportAvailable,
    testAirportUnavailable,
    testPlaneLandsAirportUnavailable,
    testPlaneLandsAirportAvailable
};