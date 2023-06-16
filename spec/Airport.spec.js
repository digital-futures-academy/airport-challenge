import Airport from "../src/Airport.js";
describe('Test plane landing', () => {
    it('I want to instruct the airport to land a plane', () => {
           // Arrange
           // Act
           // Assert
        const airport = new Airport();
        const actual = airport.add('plane1');
        expect(actual).toBe(1);
    });
    it('I would like a default airport capacity that can be overridden as appropriate', () => {
        // Arrange
        // Act
        // Assert
    const airport = new Airport();
    const actual = airport.overrideCapacity(5);
    expect(actual).toBe(5);
    });
    it('I want to prevent landing when the airport is full', () => {
        // Arrange
        // Act
        // Assert
    const airport = new Airport();
    airport.add('plane1');
    airport.add('plane2');
    airport.add('plane3');
    const actual = airport.add('plane4');
    expect(actual).toBe(false);
    });
    it('I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport', () => {
        // Arrange
        // Act
        // Assert
    const airport = new Airport();
    airport.add('plane1');
    airport.add('plane2');
    airport.add('plane3');
    const actual = airport.remove('plane3');
    expect(actual).toBe(2);
    });
    it('I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that\'s already landed', () => {
        // Arrange
        // Act
        // Assert
    const airport = new Airport();
    airport.add('plane1');
    airport.add('plane2');
    const actual = airport.add('plane2');
    expect(actual).toBe(false);
    const actual2 = airport.add('plane2');
    expect(actual2).toBe(false);
    });
});