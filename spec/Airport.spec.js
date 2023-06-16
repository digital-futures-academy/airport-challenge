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
});