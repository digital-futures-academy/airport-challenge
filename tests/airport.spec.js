const Test = require('./test-framework');

const Airport = require('../src/airport');
const Plane = require('../src/plane');

module.exports = Test.describe('Airport', (suite) => {
    suite.it('Can land a plane.', (test) => {
        const airport = new Airport();
        const plane = new Plane('1', 'flying');
        const expected = 'landed';

        airport.landPlane(plane);
        const actual = plane.status;

        test.expect(expected).toEqual(actual);
    });

    suite.it('Adds plane to planes array when landing.', (test) => {
        const airport = new Airport();
        const plane = new Plane('1', 'flying');
        const expected = 1;

        airport.landPlane(plane);
        const actual = airport.planes.length;

        test.expect(expected).toEqual(actual);
    });

    suite.it('Has a default capacity.', (test) => {
        const airport = new Airport();
        const expected = 'number';

        const actual = typeof airport.capacity;

        test.expect(expected).toEqual(actual);
    });

    suite.it('Capacity can be overridden.', (test) => {
        const airport = new Airport(100);
        const expected = 100;

        const actual = airport.capacity;

        test.expect(expected).toEqual(actual);
    });

    suite.it('Plane cannot be landed when capacity is full.', (test) => {
        const airport = new Airport(0);
        const plane = new Plane('1', 'flying');

        test.expect(() => airport.landPlane(plane)).toThrow();
    });

    suite.it('Can check whether capacity is full.', (test) => {
        const airport = new Airport(0);
        const expected = true;

        const actual = airport.isFull();

        test.expect(expected).toEqual(actual);
    });

    suite.it('Can make a plane take off.', (test) => {
        const airport = new Airport();
        const plane = new Plane('1', 'flying');
        airport.landPlane(plane);
        const expected = 'flying';

        airport.takeOffPlane('1');
        const actual = plane.status;

        test.expect(expected).toEqual(actual);
    });

    suite.it('Removes plane from planes array after take off.', (test) => {
        const airport = new Airport();
        const plane = new Plane('1', 'flying');
        airport.landPlane(plane);
        const expected = 0;

        airport.takeOffPlane('1');
        const actual = airport.planes.length;

        test.expect(expected).toEqual(actual);
    });

    suite.it('Can check for a plane in the plane array.', (test) => {
        const airport = new Airport();
        const plane = new Plane('1', 'flying');
        airport.landPlane(plane);
        const expected = true;

        const actual = airport.hasPlane('1');

        test.expect(expected).toEqual(actual);
    });

    suite.it('Cannot land a plane which is already landed.', (test) => {
        const airport = new Airport();
        const plane = new Plane('1');

        test.expect(() => airport.landPlane(plane)).toThrow();
    });

    suite.it('Cannot take off a plane which is already flying.', (test) => {
        const airport = new Airport();
        const plane = new Plane('1', 'flying');
        airport.landPlane(plane);

        plane.status = 'flying';

        test.expect(() => airport.takeOffPlane('1')).toThrow();
    });
});
