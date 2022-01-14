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

module.exports = { testAirportCanLandPlane };
