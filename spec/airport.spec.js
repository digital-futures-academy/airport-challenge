import Airport from '../src/Airport.js';

describe('Airport Class Tests', () => {
    it('should land a plane into the planeList array in Airport', () => {
        // Arrange
        let actual;
        let expected = 1;
        let plane = 'plane1';
        let airport = new Airport();

        // Act
        airport.landPlane(plane);
        actual = airport.planeList.length;

        // Assert
        expect(actual).toBe(expected);


    })
});
