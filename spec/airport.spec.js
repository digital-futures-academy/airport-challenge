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


// Story 2 Refactored
test.describe('Story 2: testing airport._capacity input and getter', () => {
    test.it('default value of capacity is correct', () => {
        airport = new Airport();
        
        test.expect(airport.capacity).toEqual(2);
    })

    test.it('capacity is set and returned correctly', () => {
        airport = new Airport(4);

        test.expect(airport.capacity).toEqual(4);
    })

    test.it('cannot set a negative capacity', () => {
        try {
            airport = new Airport(-4);
            test.errorMessage(-4, '"throw new Error: "Hangar capacity must be a positive integer"');
        } catch (err) {
            test.expect(err.message).toEqual("Hangar capacity must be a positive integer");
        }
    })

    test.it('cannot set a string', () => {
        try {
            airport = new Airport('hello')
            test.errorMessage('hello', '"throw new Error: "Hangar capacity must be a positive integer"');
        } catch (err) {
            test.expect(err.message).toEqual("Hangar capacity must be a positive integer");
        }
    })
})
