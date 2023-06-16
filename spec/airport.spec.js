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

    it('Test that airportPlanes array remains the same when you try to land one more plane over it\'s current capacity', () => {
        // Given that
        const airport = new Airport();
        const customCapacity = 1;
        const plane = new Plane(1);
        const plane1 = new Plane(2);
        // When this happens
        airport.setCapacity(customCapacity);
        airport.land(plane);
        airport.land(plane1);
        const actual = airport.getAirportPlaneCount();
        // Expect this
        expect(actual).toEqual(airport.getCapacity());
    });

    it('Test that airportPlanes array decreases in size by one when you instruct a plane to take off', () => {
        // Given that
        const airport = new Airport();
        const plane = new Plane(1);
        const plane1 = new Plane(2);
        const planesAfterTakeOff = 1;
        // When this happens
        airport.land(plane);
        airport.land(plane1);
        airport.takeOff(plane1);
        const actual = airport.getAirportPlaneCount();
        // Expect this
        expect(actual).toEqual(planesAfterTakeOff);
    })

    it('Test that airportPlanes array decreases in size by one when you instruct a plane to take off', () => {
        // Given that
        const airport = new Airport();
        const plane = new Plane(1);
        const plane1 = new Plane(2);
        const planesAfterTakeOff = 1;
        // When this happens
        airport.land(plane);
        airport.land(plane1);
        airport.takeOff(plane1);
        const actual = airport.getAirportPlaneCount();
        // Expect this
        expect(actual).toEqual(planesAfterTakeOff);
    })

    it('Test that plane\'s departure is confirmed by checking its status.', () => {
        // Given that
        const airport = new Airport();
        const plane = new Plane(1);
        const plane1 = new Plane(2);
        // When this happens
        airport.land(plane);
        airport.land(plane1);
        airport.takeOff(plane1);
        const actual = airport.isPlaneAtAirport(plane1);
        // Expect this
        expect(actual).toEqual(false);
    })
})