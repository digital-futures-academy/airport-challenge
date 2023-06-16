import Airport from "../src/airport.js";

describe('Airport Tests: ', () => {
    it('airportPlane array length should increase to 1 when we call land() method.', () => {
        // Arrange
        const testAirportSize = new Airport();
        // Act
        const actual = testAirportSize.airportPlanes.length;
        // Assert
        expect(actual).toEqual(1);
    })
})