const Test = require('./test-framework');

const Plane = require('../src/Plane');

class MockAirport {
    arrive() {}
    depart() {}
}

const test = Test.describe('Plane', (suite) => {
    suite.it('Initialises as flying by default.', (test) => {
        const plane = new Plane('1');
        const expected = 'flying';

        const actual = plane.status;

        test.expect(expected).toEqual(actual);
    });

    suite.it('Cannot be initialised without a string id.', (test) => {
        test.expect(() => new Plane()).toThrow(
            'Plane cannot be initialised without a string id.',
        );
    });

    suite.it('Can land.', (test) => {
        const plane = new Plane('1');
        const airport = new MockAirport();
        const expected = 'landed';

        plane.land(airport);
        const actual = plane.status;

        test.expect(expected).toEqual(actual);
    });

    suite.it('Cannot land without a destination Airport.', (test) => {
        const plane = new Plane('1');

        test.expect(plane.land).toThrow('Cannot land: no destination Airport provided.');
    });

    suite.it('Cannot land when Airport.arrive() throws an error.', (test) => {
        const plane = new Plane('1');
        const airport = new MockAirport();
        airport.arrive = () => {
            throw new Error();
        };

        test.expect(() => plane.land(airport)).toThrow();
    });

    suite.it('Cannot land if it is not flying.', (test) => {
        const plane = new Plane('1');
        plane._status = 'landed';
        const airport = new MockAirport();

        test.expect(() => plane.land(airport)).toThrow(
            'Cannot land: Plane is in incorrect state.',
        );
    });

    suite.it('Remains in original state if landing fails.', (test) => {
        const plane = new Plane('1');
        const airport = new MockAirport();
        airport.arrive = () => {
            throw new Error();
        };
        const expected = plane.status;

        test.expect(() => plane.land(airport)).toThrow();
        const actual = plane.status;

        test.expect(expected).toEqual(actual);
    });

    suite.it('Can take off.', (test) => {
        const plane = new Plane('1');
        const airport = new MockAirport();
        plane.land(airport);
        const expected = 'flying';

        plane.takeOff(airport);
        const actual = plane.status;

        test.expect(expected).toEqual(actual);
    });

    suite.it('Cannot take off without a departure Airport.', (test) => {
        const plane = new Plane('1');
        plane._status = 'landed';

        test.expect(plane.takeOff).toThrow(
            'Cannot take off: no departure Airport provided.',
        );
    });

    suite.it('Cannot take off when Airport.depart() throws an error.', (test) => {
        const plane = new Plane('1');
        plane._status = 'landed';
        const airport = new MockAirport();
        airport.depart = () => {
            throw new Error();
        };

        test.expect(() => plane.takeOff(airport)).toThrow();
    });

    suite.it('Cannot take off if it is not landed.', (test) => {
        const plane = new Plane('1');
        const airport = new MockAirport();

        test.expect(() => plane.takeOff(airport)).toThrow(
            'Cannot take off: Plane is in incorrect state.',
        );
    });

    suite.it('Remains in original state if take off fails.', (test) => {
        const plane = new Plane('1');
        const airport = new MockAirport();
        const expected = plane.status;

        test.expect(() => plane.takeOff(airport)).toThrow();
        const actual = plane.status;

        test.expect(expected).toEqual(actual);
    });
});

module.exports = test;
