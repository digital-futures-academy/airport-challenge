describe('Airport Tests', () => {
    it('should add plane to the airportPlanesList when landPlane is called', () => {
        // Arrange
        let airport = new Airport();
        let plane1 = new Plane(`a1`);

        // Act
        airport.landPlane(plane1);

        // Assert
        expect(airport.listAirportPlanes.length).toBe(1);
    })
})