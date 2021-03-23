const Test = require('../spec/test-framework.js');
const Plane = require('../src/plane.js');


Test.it('Check if plane.land() changes plane.flying to false', () => {
    let plane = new Plane('FR5436');
    Test.expect(plane.land()).toBe(false);
});

Test.it('Check if plane.takeOff() changes plane.flying to true', () => {
    let plane = new Plane('FR6789');
    Test.expect(plane.takeOff()).toBe(true);
});

Test.it('Checking if addToAirport() changes inAirport to true when plane has landed', () => {
    let plane = new Plane('FR7542', false);
    Test.expect(plane.addToAirport()).toBe(true);
});

Test.it('Checking if removeFromAirport() changes inAirport to false when plane is flying', () => {
    let plane = new Plane('FR8932', true, true);
    Test.expect(plane.removeFromAirport()).toBe(false);
});
