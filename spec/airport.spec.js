import Airport from '../src/Airport.js';

describe('Airport Class Tests', () => {
    let expected, airport, plane;

    beforeEach(() => {
        airport = new Airport();

    });

     afterEach(() => {
         airport = undefined;
         expected = undefined;
     });

    it('Test that `landPlane` will land a `Plane` to the `planeList`, increasing its length by 1', () => {
        // Arrange
        expected = 1
        plane = 'plane1';

        // Act
        airport.landPlane(plane);

        // Assert
        expect(airport.planeList.length).toBe(expected);
    });

    it('Should initialize instance of `Airport` with a `defaultCapacity` of 20 ', () => {
        // Arrange
        // Act
        // Assert
        expect(airport.defaultCapacity).toBe(20);
    });

    it('should increase `defaultCapacity` when a positive number is passed into overrideCapacity.', () => {
        // Arrange
         expected = 25;
         const positiveNumber = 5
        // Act
         airport.overrideCapacity(positiveNumber)
        // Assert
        expect(airport.defaultCapacity).toBe(expected);
    });

    it('should decrease `defaultCapacity` when a negative number is passed into overrideCapacity.', () => {
        // Arrange
         expected = 15;
         const negativeNumber = -5
        // Act
         airport.overrideCapacity(negativeNumber)
        // Assert
        expect(airport.defaultCapacity).toBe(expected);
    });
    it('should throwError when not a Number type is passed to overrideCapacity', () => {
        // Arrange
         const string = '5'
        // Act
        // Assert
        expect(() => {airport.overrideCapacity(string)}).toThrowError('Not a number');
    });

});
