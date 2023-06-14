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

        // Act
        airport.landPlane(plane);

        // Assert
        expect(airport.planeList.length).toBe(1);
    });

    it('Should initialize instance of `Airport` with a `defaultCapacity` of 20 ', () => {
        // Arrange
        // Act
        // Assert
        expect(airport.defaultCapacity).toBe(20);
    });


});
