const test = require('../test-framework.js');
const Airport = require('../src/airport.js');
const Plane = require('../src/plane.js');

test.it('test airport can land plane', function () {
    let airport = new Airport();
    let plane = new Plane('plane');
    airport.landPlane(plane);
    test.expect(airport.planes.length).toEqual(1);
});