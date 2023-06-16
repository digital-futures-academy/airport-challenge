import Plane from "../src/Plane.js";
import Airport from "../src/airport.js";

describe('Airport Tests: ', () => {
    it('airportPlane array length should increase to 1 when we call land() method.', () => {
        // Given that
        const airport = new Airport()
        const plane = new Plane(1);
        // When this happens
        airport.land(plane);
        const actual = airport.getAirportPlaneCount();
        // Expect this
        expect(actual).toEqual(1);
    });

    it('New instance of the Airport class should use the default capacity', () => {
        // Given that
        const airport = new Airport();
        const defaultCapacity = 5;
        // When this happens
        const actual = airport.getCapacity();
        // Expect this
        expect(actual).toEqual(defaultCapacity);
    });

    it('New instance of the airport class should use a custom capacity', () => {
        // Given that
        const airport = new Airport();
        const customCapacity = 7;
        // When this happens
        airport.setCapacity(customCapacity);
        const actual = airport.getCapacity();
        // Expect this
        expect(actual).toEqual(customCapacity);
    });

    it('Test new instance of airport cannot have less than 1 capacity', () => {
        // Given that
        const airport = new Airport();
        const wrongCapacity = -1;
        // When this happens
        const checkFunction = () => airport.setCapacity(wrongCapacity)
        // Expect this
        expect(checkFunction).toThrow(new Error("This capacity is not valid. Airport capacity cannot be smaller than 1."));
    });

})