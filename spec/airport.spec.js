import Airport from "../src/Airport.js";
import Plane from "../src/Plane.js";

describe('Airport Tests', () => {
    let airport;

    beforeEach(() => {
        airport = new Airport();
    })

    it('should add plane to the planesList when landPlane is called', () => {
        // Arrange
        let plane1 = new Plane(`a1`);

        // Act
        airport.landPlane(plane1);

        // Assert
        expect(airport.getPlanesList().length).toBe(1);
    })

    it('should assign a default capacity to a new instance of Airport', () => {
        expect(airport.getCapacity()).toBe(5);
    })

    it('should be able to override the default airport capacity', () => {
        // Act
        airport.setCapacity(10);

        expect(airport.getCapacity()).toBe(10);
    })

    it('should prevent assigning a negative capacity', () => {
        expect(() => airport.setCapacity(-1)).toThrowError('Capacity cannot be set below 0.')
    })
})
