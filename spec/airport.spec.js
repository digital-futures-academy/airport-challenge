const test = require('mousinho-testlibrary-mse-2103/src/library');
const Plane = require('../src/plane');
const Airport = require('../src/airport');

let plane, airport, result;

// Story 1 Refactored:
test.describe('Testing airport.land() function', () => {
    test.it('plane added to hanger', () => {
        plane = new Plane(true);
        airport = new Airport();
        result = airport.land(plane);

        test.expect(airport.hanger.includes(plane)).toEqual(true);
    })

    test.it('plane.flying is set to false', () => {
        test.expect(plane.flying).toEqual(false);
    })

    test.it('cannot land plane if plane.flying is already false', () => {
        plane = new Plane();
        airport = new Airport();
        let output = airport.land(plane);

        test.expect(output).toEqual("Cannot land plane, it is not flying");
    })
})
