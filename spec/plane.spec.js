const test = require('mousinho-testlibrary-mse-2103/src/library');
const Airport = require('../src/airport');
const Plane = require('../src/plane');

let plane;

test.describe('Testing Plane class getters and setters', () => {
    test.it('get id() returns the plane id', () => {
        plane = new Plane('testID')
        test.expect(plane.id).toEqual('testID');
    })

    test.it('get flying() returns plane._flying field', () => {
        test.expect(plane.flying).toEqual(true);
    })

    test.it('plane.land() changes the plane.flying to false', () => {
        test.expect(plane.land()).toEqual(false);
    })

    test.it('plane.takeOff() changes plane.flying to true', () => {
        test.expect(plane.takeOff()).toEqual(true);
    })

    test.it('get inAirport() returns false when plane is flying', () => {
        plane = new Plane('PL1');
        test.expect(plane.inAirport).toEqual(false);
    })

    test.it(`get inAirport() returns true when plane is not flying`, () => {
        plane = new Plane('PL1');
        plane.land();
        test.expect(plane.inAirport).toEqual(true);
    })
})

test.describe('Testing addToAirport and removeFromAirport functions', () => {
    test.it('plane.addToAirport() changes inAirport to true when plane has landed', () => {
        plane = new Plane('PL1', false);
        test.expect(plane.addToAirport()).toEqual(true);
    })

    test.it('plane.addToAirport() returns a string when plane is still flying', () => {
        plane = new Plane('PL1');
        test.expect(plane.addToAirport()).toEqual(`Cannot add to hangar, ${plane.id} is currently in the air`)
    })

    test.it('plane.removeFromAirport() changes inAirport to false when plane is flying', () => {
        plane = new Plane('PL1', true, true);
        test.expect(plane.removeFromAirport()).toEqual(false);
    })

    test.it('plane.removeFromAirport() returns string when plane is on the ground', () => {
        plane = new Plane('PL1', false, true);
        test.expect(plane.removeFromAirport()).toEqual(`Cannot remove from hangar, ${plane.id} is still grounded`);
    })
})
