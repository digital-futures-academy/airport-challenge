const test = require('../test-framework');
const Airport = require('../classes/AirportClass');

console.log('---------takOffPlane() tests---------');


test.it('Take Off a plane which is currently landed in airport and give a confirmation', () => {
    // Arrange
    let airport = new Airport;
    let input = 'PLANE1';
    airport.listOfLandedPlanes = [input];
    // Act/Assert
    test.assertEquals(airport.takeOffPlane(input), `${input} has Taken Off! and ${input} is no longer in the airport!`); //if listOfLandedPlanes includes PLANE1 test should pass
});

