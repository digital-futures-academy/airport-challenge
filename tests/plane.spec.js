const Test = require('./test-framework');

const Plane = require('../src/Plane');
const Airport = require('../src/Airport');

const test = Test.describe('Plane', (suite) => {
    suite.it('Initialises as flying by default.', (test) => {
        const plane = new Plane('1');
        const expected = 'flying';

        const actual = plane.status;

        test.expect(expected).toEqual(actual);
    });

    suite.it('Cannot be initialised without a string id.', (test) => {
        test.expect(() => new Plane()).toThrow();
    });

    suite.it('Can land.', (test) => {
        const plane = new Plane('1');
        const airport = new Airport();
        const expected = 'landed';

        plane.land(airport);
        const actual = plane.status;

        test.expect(expected).toEqual(actual);
    });

    suite.it('Cannot land without a destination Airport.', (test) => {
        const plane = new Plane('1');

        test.expect(plane.land).toThrow();
    });

    suite.it('Cannot land if destination Airport is full.', (test) => {
        const plane = new Plane('1');
        const airport = new Airport(0);

        test.expect(() => plane.land(airport)).toThrow();
    });

    suite.it('Cannot land if it is not flying.', (test) => {
        const plane = new Plane('1');
        plane._status = 'landed';
        const airport = new Airport();

        test.expect(() => plane.land(airport)).toThrow();
    });

    suite.it('Remains in original state if landing fails.', (test) => {
        const plane = new Plane('1');
        const airport = new Airport(0);
        const expected = plane.status;

        test.expect(() => plane.land(airport)).toThrow();
        const actual = plane.status;

        test.expect(expected).toEqual(actual);
    });

    suite.it('Can take off.', (test) => {
        const plane = new Plane('1');
        const airport = new Airport();
        plane.land(airport);
        const expected = 'flying';

        plane.takeOff(airport);
        const actual = plane.status;

        test.expect(expected).toEqual(actual);
    });

    suite.it('Cannot take off without a departure Airport.', (test) => {
        const plane = new Plane('1');
        plane._status = 'landed';

        test.expect(plane.takeOff).toThrow();
    });

    suite.it('Cannot take off if it is not located at departure Airport.', (test) => {
        const plane = new Plane('1');
        plane._status = 'landed';
        const airport = new Airport();

        test.expect(() => plane.takeOff(airport)).toThrow();
    });

    suite.it('Cannot take off if it is not landed.', (test) => {
        const plane = new Plane('1');
        const airport = new Airport();

        test.expect(() => plane.takeOff(airport)).toThrow();
    });

    suite.it('Remains in original state if take off fails.', (test) => {
        const plane = new Plane('1');
        const airport = new Airport();
        const expected = plane.status;

        test.expect(() => plane.takeOff(airport)).toThrow();
        const actual = plane.status;

        test.expect(expected).toEqual(actual);
    });
});

module.exports = test;
