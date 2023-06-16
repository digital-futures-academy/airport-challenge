import Airport from "../src/Airport.js";
import Plane from "../src/Plane.js";

describe('Airport Tests', () => {
    it('should add plane to the planesList when landPlane is called', () => {
        // Arrange
        let airport = new Airport();
        let plane1 = new Plane(`a1`);

        // Act
        airport.landPlane(plane1);

        // Assert
        expect(airport.getPlanesList().length).toBe(1);
    })
})