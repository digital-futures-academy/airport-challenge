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


describe('Prevent take off when weather is stormy', () => {
    it('Prevent take off when weather is stormy', () => {
        // Arrange
    const airport = new Airport();
    airport.add('plane1');
    airport.howsTheWeather('stormy');
        // Act
    const actual = airport.remove('plane1');
        // Assert
    expect(actual).toBe(false);
    });
});


describe('Prevent landing when weather is stormy', () => {
    it('Prevent landing when weather is stormy', () => {
        // Arrange
    const airport = new Airport();
    
    airport.howsTheWeather('stormy');
        // Act
    const actual = airport.add('plane1');
        // Assert
    expect(actual).toBe(false);
    });
});


describe('Planes landed must be at an airport', () => {
    it('Planes landed must be at an airport', () => {
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