const test = require('../test-framework');
const Airport = require('../classes/AirportClass');

console.log('---------landAPlane() tests---------');

test.it('Test that \'landAPlane\' lands a Plane when instructed', () => {
    // Arrange
    let airport = new Airport;
    // Act/Assert
    test.assertEquals(airport.landAPlane('PLANE1').includes('PLANE1'), true);
});

