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
    });
    it(`a plane cannot land if the runway is full`, () => {
        // Arrange
        const airport = new Airport(2);
        const plane1 = new Plane();
        const plane2 = new Plane();
        airport.land(plane1);
        airport.land(plane2);
        // Act
        let actual = airport.isFull();
        // Assert
        expect(actual).toBeTrue();

    });
})