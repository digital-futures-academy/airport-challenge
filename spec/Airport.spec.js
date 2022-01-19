const assertEquals = require('../test-framework');
const Airport = require('../src/Airport');

// Test if Airport is available (true):
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


module.exports = {
    testAirportAvailable
};