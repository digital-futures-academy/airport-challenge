import Airport from '../src/Airport.js';

describe('Airport Class Tests', () => {
    let actual, airport, expected, plane;

    beforeEach(() => {
        airport = new Airport();

    });

     afterEach(() => {
        airport = undefined;
         actual = undefined;
         expected = undefined;
     });

    it('should call the landPlane on plane to land it into the planeList array in Airport', () => {
        // Arrange
        expected = 1;
        plane = 'plane1';
        airport = new Airport();

        // Act
        airport.landPlane(plane);
        actual = airport.planeList.length;

        // Assert
        expect(actual).toBe(expected);


    });

    it('should not land a plane of a different data type into the planeList', () => {
        // Arrange
        expected = 0;
        plane = 10;

        // Act
        airport.landPlane(plane);
        actual = airport.planeList.length;

        // Assert
        expect(actual).toBe(expected);
    })
});
