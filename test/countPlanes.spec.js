const test = require('../test-framework');
const Airport = require('../classes/AirportClass');
const Plane = require('../classes/PlaneClass');
const Status = require('../classes/changeStatus');

console.log('---------Status tests---------');


test.it('Count number of planes landed in the airport accessing through listOfLandedPlanes array elements is equal to the \'isLanded\' status of all planes mentioned in the listOfLandedPlanes. Testing with just 1 plane!', () => {
    // Arrange
    let airport = new Airport;
    //airport.listOfLandedPlanes = ['PLANE1', 'PLANE2', 'PLANE3', 'PLANE4', 'PLANE5', 'PLANE6'];
    airport.landAPlane('PLANE1');
    plane1 = new Plane((airport.landAPlane('PLANE1'))[0]);
    Status.changeStatus(plane1);
    let actualResult = airport.listOfLandedPlanes.length === 1 && plane1.isLanded === true;
    // Act/Assert
    test.assertEquals(actualResult, true); //if listOfLandedPlanes includes PLANE1 test should pass
});