import Airport from "../src/Airport.js";

describe('Test plane landing', () => {
    it('Instruct the airport to land a plane', () => {
        // Arrange
    const airport = new Airport();
        // Act
    const actual = airport.add('plane1');
        // Assert
    expect(actual).toBe(1);
    });
});

describe('Test Default Airport capacity', () => {
    it('Default airport capacity that can be overridden as appropriate', () => {
         // Arrange
    const airport = new Airport();
         // Act
    const actual = airport.overrideCapacity(5);
         // Assert
    expect(actual).toBe(5);
    });
});

describe('Test Airport capacity and prevent overloading', () => {
    it('Prevent landing when the airport is full', () => {
        // Arrange
    const airport = new Airport();
    airport.add('plane1');
    airport.add('plane2');
    airport.add('plane3');
        // Act
    const actual = airport.add('plane4');
        // Assert
    expect(actual).toBe(false);
    });
});

describe('Test removing a plane and confirm', () => {
    it('Instruct the airport to let a plane take off and confirm that it is no longer in the airport', () => {
            // Arrange
        const airport = new Airport();
        airport.add('plane1');
        airport.add('plane2');
        airport.add('plane3');
            // Act
        const actual = airport.remove('plane3');
            // Assert
        expect(actual).toBe(2);
            // Act
        const actual2 = airport.confirm('plane3');
            // Assert
        expect(actual2).toBe(false);
    });
});

describe('Test adding existing plane and removing non-existing plane', () => {
    it('Test non-existing plane to take-off and existing plane to land', () => {
        // Arrange
    const airport = new Airport();
    airport.add('plane1');
    airport.add('plane2');
        // Act
    const actual = airport.add('plane2');
        // Assert
    expect(actual).toBe(false);
        // Act
    const actual2 = airport.remove('plane3');
        // Assert
    expect(actual2).toBe(false);
    });
});


describe('Prevent Stormy take-off', () => {
    it('Prevent take-off when weather is Stormy', () => {
        // Arrange
    const airport = new Airport();
    airport.add('plane1');
    airport.howsTheWeather('Stormy');
        // Act
    const actual = airport.remove('plane1');
        // Assert
    expect(actual).toBe(false);
    });
});


describe('Prevent Stormy landing', () => {
    it('Prevent landing when weather is Stormy', () => {
        // Arrange
    const airport = new Airport();
    
    airport.howsTheWeather('Stormy');
        // Act
    const actual = airport.add('plane1');
        // Assert
    expect(actual).toBe(false);
    });
});


describe('Number of planes at the Airport', () => {
    it('Planes landed must be at an Airport', () => {
        // Arrange
    const airport = new Airport();
    airport.add('plane1');
    airport.add('plane2');
    
        // Act
    const actual = airport.noOfPlanesAtAirport();
        // Assert
    expect(actual).toBe(2);
    });
});