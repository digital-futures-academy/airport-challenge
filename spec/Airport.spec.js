import Airport from "../src/Airport.js";
describe('Test plane landing', () => {
    it('Test plane1 added to Airport array should return true', () => {
           // Arrange
           // Act
           // Assert
        const airport = new Airport();
        const actual = airport.add('plane1');
        expect(actual).toBe(1);
    });
    it('Set capacity', () => {
        // Arrange
        // Act
        // Assert
    const airport = new Airport();
    const actual = airport.overrideCapacity(5);
    expect(actual).toBe(5);
    });
    it('Prevent landing when airport is full', () => {
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
    it('Take off plane from ariport and confirm it is no longer in airport', () => {
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
});