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



module.exports = {
    testAirportAvailable,
    testAirportUnavailable,
};