const Test = require('./test-framework');

const Airport = require('../src/airport');
const Plane = require('../src/plane');

module.exports = Test.describe('Airport', (suite) => {
    suite.it('Can land a plane.', (test) => {
        const airport = new Airport();
        const plane = new Plane('flying');
        const expected = 'landed';

        airport.landPlane(plane);
        const actual = plane.status;

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
});
