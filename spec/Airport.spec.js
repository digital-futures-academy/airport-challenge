const Airport = require('../src/Airport');
const Plane = require(`../src/Plane`);

describe(`Airport Tests: `, () => {
    it(`land a plane`, () => {
        // Arrange
        const airport = new Airport(`ORD`, 5, 0.5);
        const plane = new Plane('345', airport);
        // Act
        airport.land(plane);
        // Assert
        expect(airport.onGround).toHaveSize(1);
    });
    it(`airport has a default cpacity`, () => {
        // Arrange
        const airport = new Airport(`ORD`);
        // Act
        const capacity = airport.capacity;
        // Assert
        expect(capacity).toEqual(5);
    });
    it(`a plane cannot land if the runway is full`, () => {
        // Arrange
        const airport = new Airport(`ORD`, 2, 0.5);
        const plane1 = new Plane(`345`, airport);
        const plane2 = new Plane(`678`, airport);
        airport.land(plane1);
        airport.land(plane2);
        // Act
        let actual = airport.isFull();
        // Assert
        expect(actual).toBeTrue();

    });
    it(`a plane can take off and the airport is notified`, () => {
        // Arrange
        const airport = new Airport(`ORD`, 5, 0.5);
        const plane1 = new Plane(`345`, airport);
        airport.land(plane1);
        // Act 
        let actual = airport.takeOff(plane1);
        // Assert
        expect(actual).toEqual(plane1);
    });
    it(`a plane cannot land if it already in the airport`, () => {
        // Arrange
        const airport = new Airport(`ORD`, 5, 0.5);
        const plane1 = new Plane(`345`, airport);
        airport.land(plane1);
        // Act 
        let actual = airport.land(plane1);
        // Assert
        expect(actual).toBeNull();
    });
    it(`a plane not in the airport cannot take off`, () => {
        // Arrange
        const airport = new Airport(`ORD`, 5, 0.5);
        const plane1 = new Plane(`345`, airport);
        // Act 
        let actual = airport.takeOff(plane1);
        // Assert
        expect(actual).toBeNull();
    });
    it(`a plane cannot land in stormy weather`, () => {
        // Arrange
        const airport = new Airport(`ORD`, 5, 0.1);
        const plane = new Plane(`345`, airport);
        // Act
        let actual = airport.land(plane);
        // Assert
        expect(actual).toBeNull();

    });
    it(`a plane cannot take off in stormy weather`, () => {
        // Arrange
        const airport = new Airport(`ORD`, 5, 0.4);
        const plane = new Plane(`345`, airport);
        airport.land(plane);
        // Act
        airport.setWeather(0.1);
        let actual = airport.takeOff(plane);
        // Assert
        expect(actual).toBeNull();
    });
    it(`if a plane has landed it must be in an airport`, () => {
        // Arrange
        const airport = new Airport(`ORD`, 5, 0.4);
        const plane = new Plane(`345`, airport);
        airport.land(plane);
        // Act
        let actual = plane.getAirport();;
        // Assert
        expect(actual).toEqual(`ORD`);
    })
})