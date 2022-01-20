const Test = require('./test-framework');

const Airport = require('../src/Airport');

class MockPlane {
    constructor(id = '1', status = 'flying') {
        this.id = id;
        this.status = status;
    }

    land() {}
    takeOff() {}
}

class MockWeather {
    constructor(result) {
        this.forecast = () => result;
    }
}

const StormyWeather = new MockWeather('stormy');

const SunnyWeather = new MockWeather('sunny');

const test = Test.describe('Airport', (suite) => {
    suite.it('Has a default capacity.', (test) => {
        const airport = new Airport();
        const expected = 10;

        const actual = airport.capacity;

        test.expect(expected).toEqual(actual);
    });

    suite.it('Default capacity can be overridden.', (test) => {
        const airport = new Airport(100);
        const expected = 100;

        const actual = airport.capacity;

        test.expect(expected).toEqual(actual);
    });

    suite.it('Can recieve a Plane on arrival.', (test) => {
        const plane = new MockPlane('1', 'arriving');
        const airport = new Airport(undefined, SunnyWeather);
        const expected = 1;

        airport.arrive(plane);
        const actual = airport.planes.length;

        test.expect(expected).toEqual(actual);
    });

    suite.it('Cannot recieve a Plane which is not arriving.', (test) => {
        const plane = new MockPlane('1');
        const airport = new Airport(undefined, SunnyWeather);

        test.expect(() => airport.arrive(plane)).toThrow(
            'Cannot recieve a Plane which is not arriving.',
        );
    });

    suite.it('Can check if capacity is full.', (test) => {
        const airport1 = new Airport();
        const airport2 = new Airport(0);
        const expected1 = false;
        const expected2 = true;

        const actual1 = airport1.isFull();
        const actual2 = airport2.isFull();

        test.expect(expected1).toEqual(actual1);
        test.expect(expected2).toEqual(actual2);
    });

    suite.it('Cannot recieve a Plane if capacity is full.', (test) => {
        const plane = new MockPlane('1', 'arriving');
        const airport = new Airport(0, SunnyWeather);

        test.expect(() => airport.arrive(plane)).toThrow(
            'Cannot recieve a Plane while capacity is full.',
        );
    });

    suite.it('Can release a Plane on departure.', (test) => {
        const plane = new MockPlane('1', 'arriving');
        const airport = new Airport(undefined, SunnyWeather);
        plane.land = (airport) => airport.arrive(plane);
        plane.takeOff = () => (plane.status = 'departing');
        plane.land(airport);
        plane.takeOff();
        const expected = 0;

        airport.depart(plane);
        const actual = airport.planes.length;

        test.expect(expected).toEqual(actual);
    });

    suite.it('Cannot release a Plane which is not departing.', (test) => {
        const plane = new MockPlane('1', 'arriving');
        const airport = new Airport(undefined, SunnyWeather);
        plane.land = (airport) => airport.arrive(plane);
        plane.land(airport);

        test.expect(() => airport.depart(plane)).toThrow(
            'Cannot release a Plane which is not departing.',
        );
    });

    suite.it('Cannot release a Plane which is not at that Airport.', (test) => {
        const plane = new MockPlane('1', 'departing');
        const airport = new Airport(undefined, SunnyWeather);

        test.expect(() => airport.depart(plane)).toThrow(
            'Cannot release a Plane which is not at this Airport.',
        );
    });

    suite.it('Can check for the presence of a Plane.', (test) => {
        const plane = new MockPlane('1', 'arriving');
        const airport = new Airport(undefined, SunnyWeather);
        plane.land = (airport) => airport.arrive(plane);
        plane.land(airport);
        const expected = true;

        const actual = airport.hasPlane(plane);

        test.expect(expected).toEqual(actual);
    });

    suite.it('Cannot recieve a Plane while weather is stormy.', (test) => {
        const plane = new MockPlane('1', 'arriving');
        const airport = new Airport(undefined, StormyWeather);

        test.expect(() => airport.arrive(plane)).toThrow(
            'Cannot recieve a Plane while weather is stormy.',
        );
    });

    suite.it('Cannot release a Plane while weather is stormy.', (test) => {
        const plane = new MockPlane('1', 'departing');
        const airport = new Airport(undefined, StormyWeather);
        airport.planes.push(plane);

        test.expect(() => airport.depart(plane)).toThrow(
            'Cannot release a Plane while weather is stormy.',
        );
    });
});

module.exports = test;
