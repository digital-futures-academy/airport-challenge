import Plane from "../src/Plane.js";
import Airport from "../src/airport.js";

describe('Airport Tests: ', () => {
    it('airportPlane array length should increase to 1 when we call land() method.', () => {
        // Arrange
        const airport = new Airport()
        const plane = new Plane(1);
        airport.land(plane);
        // Act
        const actual = airport.getAirportPlaneCount();
        // Assert
        expect(actual).toEqual(1);
    })
})