import Airport from '../src/Airport.js';

describe('Airport Class Tests', () => {
    let expected, airport, plane;

    beforeEach(() => {
        airport = new Airport();

    });

     afterEach(() => {
         expected = undefined;
     });

    it('Test that `landPlane` will land a `Plane` to the `planeIds`, increasing its length by 1', () => {
        // Arrange
        expected = 1
        plane = 'plane1';
        // Act
        airport.landPlane(plane);
        // Assert
        expect(airport.planeIds.length).toBe(expected);
    });
    it('should not land `Plane` with null into `planeIds`', () => {
        // Arrange
        plane = null;
        expected = 0;
        // Act
        airport.landPlane(plane);
        // Assert
        expect(airport.planeIds.length).toBe(expected);

    });
    it('should not land `Plane` with undefined into `planeIds`', () => {
        // Arrange
        plane = undefined;
        expected = 0;
        // Act
        airport.landPlane(plane);
        // Assert
        expect(airport.planeIds.length).toBe(expected);

    });

    it('Should initialize instance of `Airport` with a `capacity` of 5 ', () => {
        // Arrange
        // Act
        // Assert
        expect(airport.capacity).toBe(5);
    });

    it('should increase `capacity` when a positive number is passed into overrideCapacity.', () => {
        // Arrange
        expected = 7;
        const positiveNumber = 2;
        // Act
        airport.overrideCapacity(positiveNumber);
        // Assert
        expect(airport.capacity).toBe(expected);
    });

    it('should decrease `capacity` when a negative number is passed into overrideCapacity.', () => {
        // Arrange
        expected = 3;
        const negativeNumber = -2;
        // Act
        airport.overrideCapacity(negativeNumber);
        // Assert
        expect(airport.capacity).toBe(expected);
    });
    it('should throwError when a type that is not number or float is passed to overrideCapacity', () => {
        // Arrange
        const string = '5';
        // Act
        // Assert
        expect(() => {airport.overrideCapacity(string)}).toThrowError('Not a number');
    });

     it('should throwError when `Airport` capacity is reduced to less than 0', () => {
        // Arrange
        const number = -6;
        // Act
        // Assert
        expect(() => {airport.overrideCapacity(number)}).toThrowError('Airport capacity cannot be reduced to less than 0');
     });
    it('should not change the capacity when 0 is passed into `overrideCapacity`', () => {
        // Arrange
        const number = 0;
        // Act
        // Assert
        expect(airport.overrideCapacity(number)).toBe(airport.capacity);
     });

     it('should return false if airport is not up to its capacity ' , () => {
        // Arrange
        // Act
        // Assert
         expect(airport.isAirportFull()).toBeFalse();

     });

    it('should prevent landPlane() if airport is full', () => {
        // Arrange
        let newPlane = 'plane6'
        airport.planeIds = ['plane1', 'plane2', 'plane3', 'plane4', 'plane5'];
        // Act
        // Assert
        expect(() => {airport.landPlane(newPlane)}).toThrowError('Airport is full');
    });

     it('should remove `Plane` from `planeIds`', () => {
        // Arrange
         airport.planeIds = ['plane1', 'plane2', 'plane3', 'plane4', 'plane5'];
        // Act
         airport.takeOff('plane2');
        // Assert
         expect(airport.planeIds.length).toBe(4);
         expect(airport.planeIds).not.toContain('plane2');
     });


    it('should check `isPlaneInAirport` and return false', () => {
        expect(airport.isPlaneInAirport('plane')).toBeFalse();
    })

    it('should prevent plane from taking off if plane not in airport', () => {
        // Arrange
        // Act
        // Assert
        expect(() => airport.takeOff('plane1')).toThrowError('Plane with Id plane1 not in Airport');
    })
      it('should prevent plane from landing if already in airport', () => {
        // Arrange
          airport.planeIds = ['plane1'];
        // Act
        // Assert
        expect(() => airport.landPlane('plane1')).toThrowError('Plane with Id plane1 already in Airport');
    })

});
