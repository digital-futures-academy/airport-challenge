const test = require('./test-framework');
const Airport = require('../src/airport');
const Plane = require('../src/plane');

const testAirportCanLandPlane = () => {
    test.identify('Test Airport can land a plane:');

    const airport = new Airport();
    const plane = new Plane('flying');
    const expected = 'landed';

    airport.landPlane(plane);
    const actual = plane.status;

    const result = test.assertEquals(expected, actual);

    test.report(result);
};

const testAirportHasDefaultCapacity = () => {
    test.identify('Test Airport has a default capacity:');

    const airport = new Airport();
    const expected = 'number';

    const actual = typeof airport.capacity;

    const result = test.assertEquals(expected, actual);

    test.report(result);
};

const testAirportCapacityCanBeOverridden = () => {
    test.identify('Test Airport capacity can be overriden:');

    const airport = new Airport(100);
    const expected = 100;

    const actual = airport.capacity;

    const result = test.assertEquals(expected, actual);

    test.report(result);
};

module.exports = {
    testAirportCanLandPlane,
    testAirportHasDefaultCapacity,
    testAirportCapacityCanBeOverridden,
};
