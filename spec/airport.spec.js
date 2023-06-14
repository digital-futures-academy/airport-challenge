import Airport from '../src/Airport.js';

describe('Airport Class Tests', () => {
    let airport, plane;

    beforeEach(() => {
        airport = new Airport();

    });

     afterEach(() => {
        airport = undefined;
     });

    it('Test that `landPlane` will land a `Plane` to the `planeList`, increasing its length by 1', () => {
        // Arrange
        plane = 'plane1';
        airport = new Airport();

        // Act
        airport.landPlane(plane);

        // Assert
        expect(airport.planeList.length).toBe(1);


    });


});
