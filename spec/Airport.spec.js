const Airport = require('../src/Airport');
const Plane = require(`../src/Plane`);

describe(`Airport Tests: `, () => {
    it(`land a plane`, () => {
        // Arrange
        const airport = new Airport();
        const plane = new Plane();
        // Act
        airport.land(plane);
        // Assert
        expect(airport.onGround).toHaveSize(1);
    });
    it(`airport has a default cpacity`, () => {
        // Arrange
        const airport = new Airport();
        // Act
        const capacity = airport.capacity;
        // Assert
        expect(capacity).toEqual(5);
    })
})