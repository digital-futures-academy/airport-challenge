const Plane = require("../src/Plane");
const Airport = require("../src/Airport");

describe(`Plane Tests: `, () => {
    it(`if a plane has landed it must be in an airport`, () => {
        // Arrange
        const airport = new Airport(`ORD`, 5, 0.5);
        const plane = new Plane(`345`, airport);
        airport.land(plane);
        // Act
        let actual = plane.getAirport();
        // Assert
        expect(actual).toEqual(`ORD`);
    });
})