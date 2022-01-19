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

// Test if plane landed into the airport:
const testPlaneLandedIntoAirport = () => {
    // Arrange
    const airport = new Airport();
    const expected = true;

    // Act
    const getPlanesResult = airport.getPlanes();
    const actual = getPlanesResult instanceof Array;

    // Assert
    const result = assertEquals(expected, actual);

    // Report
    console.log(`A plane landed into the airport: ${result}`);
};

// Test if can add more than one plane into the airport
const testAddMoreThanOnePlane = () => {
    // Arrange
    const airport = new Airport();
    const expected = 2;
    const testPlane = ['MSE-2201-A', 'London'];
    const testPlane2 = ['DSE-2201-A', 'Verona'];

    // Act
    airport.addPlane(testPlane);
    airport.addPlane(testPlane2);
    const actual = airport.getPlanes().length;

    // Assert
    const result = assertEquals(actual, expected);

    // Report
    console.log(`There is more than one plane in the airport: ${result}`);
}

// Test Default Capacity of the Airport
const testDefaultCapacityAirport = () => {
    //Arrange
    const airport = new Airport();
    const expected = 3;

    // Act
    const actual = airport.getCapacity();

    // Assert
    const result = assertEquals(actual, expected);

    // Report
    console.log(`Get the Default capacity of the airport: ${result}`);
}

// Test Change of the capacity
testChangeCapacity = () => {
    // Arrange
    const airport = new Airport();
    expected = 5

    // Act
    const actual = airport.changeCapacity(5);

    // Assert
    const result = assertEquals(actual, expected);

    // Report
    console.log(`Capacity of the airport was changed: ${result}`);
}

module.exports = {
    testAirportAvailable,
    testAirportUnavailable,
    testPlaneLandsAirportUnavailable,
    testPlaneLandsAirportAvailable,
    testPlaneLandedIntoAirport,
    testAddMoreThanOnePlane,
    testDefaultCapacityAirport,
    testChangeCapacity
};