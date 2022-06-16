const test = require('../test-framework');
const Airport = require('../classes/AirportClass');

console.log('---------landAPlane() tests---------');

test.it('Test that \'landAPlane\' lands a Plane when instructed', () => {
    // Arrange
    let airport = new Airport;
    // Act/Assert
    test.assertEquals(airport.landAPlane('PLANE1').includes('PLANE1'), true); //if listOfLandedPlanes includes PLANE1 test should pass
});

test.it('Test that landAPlane() throws an Error if capacity of airport is full.', () => {
    // Arrange
    let airport2 = new Airport(2); // sets capacity to just 2
    airport2.listOfLandedPlanes = ['PLANE1', 'PLANE2']; // setting the 2 values to fill the capacity
    // Act/Assert
    test.assertEquals(airport2.landAPlane('PLANE3'), 'Airport capacity full'); // error message
});

test.it('Prevent Landing of a plane which is already landed in airport', () => {
    // Arrange
    let airport3 = new Airport(2); // sets capacity to just 2
    let input = 'PLANE2';
    airport3.listOfLandedPlanes = ['PLANE1', 'PLANE2']; // setting the 2 values to fill the capacity
    // Act/Assert
    test.assertEquals(airport3.landAPlane('PLANE2'), `${input} has already landed!`); // error message
});