import Plane from "../src/plane.js";
import Airport from "../src/airport.js";
import weatherStatus from "../src/weatherStatus.js";

describe('Airport Tests: ', () => {
    // User story 1 test 2.
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

    // User story 2 test 1.
    it('New instance of the Airport class should use the default capacity', () => {
        // Given that
        const airport = new Airport();
        const defaultCapacity = 5;
        // When this happens
        const actual = airport.getCapacity();
        // Expect this
        expect(actual).toEqual(defaultCapacity);
    });

    // User story 2 test 2. 
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

    //User story 2 test 3.
    it('Test new instance of airport cannot have less than the number of planes landed capacity', () => {
        // Given that
        const airport = new Airport();
        const wrongCapacity = -1;
        // When this happens
        const checkFunction = () => airport.setCapacity(wrongCapacity)
        // Expect this
        expect(checkFunction).toThrow(new Error("This capacity is not valid. Airport capacity cannot be smaller than the number of landed planes in this airport."));
    });

    // User story 3 test 1.
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

    // User story 4 test 1.
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

    // User story 4 test 2.
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
    });

    // User story 4 test 3.
    it('Test that you cannot instruct a plane to take off when there are 0 planes in the airport', () => {
        // Given that
        const airport = new Airport();
        const plane = new Plane(2);
        // When this happens
        const actual = () => airport.takeOff(plane);
        // Expect this
        expect(actual).toThrow(new Error("You cannot take off a plane when the airport has 0 planes on land or the plane id is not at the airport."));
    });

    // User story 4 test 4.
    it('Test that you cannot instruct a plane to take off if its id is not in the airportPlanes array.', () => {
        // Given that
        const airport = new Airport();
        const plane = new Plane(2);
        const plane1 = new Plane(3);
        // When this happens
        airport.land(plane);
        const actual = () => airport.takeOff(plane1);
        // Expect this
        expect(actual).toThrow(new Error("You cannot take off a plane when the airport has 0 planes on land or the plane id is not at the airport."));
    });

    // User story 1 test 3.
    it('Test that you cannot land a plane with the same id', () => {
        // Given that
        const airport = new Airport();
        const plane = new Plane(2);
        // When this happens
        airport.land(plane);
        airport.land(plane);
        const actual = airport.getAirportPlaneCount();
        // Expect this
        expect(actual).toEqual(1);
    });

    // User story 6 test 1.
    it('Test that you cannot take-off a plane when weather is stormy/bad and as a result you get an error message.', () => {
        // Given that
        const airport = new Airport();
        const plane = new Plane(2);
        // When this happens
        airport.land(plane);
        airport.setWeather(weatherStatus.badWeather);
        const actual = () => airport.takeOff(plane);
        // Expect this
        expect(actual).toThrow(new Error("You cannot take off a plane when the weather is stormy."));
    });

    // User story 7 test 1.
    it('Test that you cannot land a plane when weather is stormy/bad and as a result you get an error message.', () => {
        // Given that
        const airport = new Airport();
        const plane = new Plane(2);
        // When this happens
        airport.setWeather(weatherStatus.badWeather);
        const actual = () => airport.land(plane);
        // Expect this
        expect(actual).toThrow(new Error("You cannot land a plane when the weather is stormy."));
    });

    it('New instance of airport with custom capacity and weather in the constructor should use the values that were passed.', () => {
        // Given that
        const airport = new Airport(1, 'Bad');
        // When this happens
        const actualCapacity = airport.getCapacity();
        const actualWeather = airport.getWeather();
        // Expect this
        expect(actualCapacity).toEqual(1);
        expect(actualWeather).toEqual('Bad');
    })
})