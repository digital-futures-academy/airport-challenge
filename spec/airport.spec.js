const Test = require('../spec/test-framework.js');
const Airport = require('../src/airport.js');
const Plane = require('../src/plane.js');

Test.it('1. Checking if plane has been landed', () => {
    let plane = new Plane('FR9807');
    let airport = new Airport();

    airport.landPlane(plane);
    
    Test.expect(airport.hangar[0]).toBe(plane);
});

Test.it('2.1 Checking if default capacity is 3', () => {
    let airport = new Airport();

    Test.expect(airport.capacity).toBe(3);
});

Test.it('2.2 Checking if capacity had been changed', () => {
    let airport = new Airport(4);

    Test.expect(airport.capacity).toBe(4);
});

Test.it('3.1 Checking if the airport is not full before landing', () => {
    let airport = new Airport();

    Test.expect(airport.checkIfFull()).toBe(false);
});

Test.it('3.2 Preventing landing if airport is full', () =>{
    let airport = new Airport();
    let plane = new Plane('FR4538');
    let plane2 = new Plane('FR3560');
    let plane3 = new Plane('FR1234');
    let plane4 = new Plane('FR8765');

    airport.landPlane(plane);
    airport.landPlane(plane2);
    airport.landPlane(plane3);

    let result = airport.landPlane(plane4);

    Test.expect(result).toBe('Sorry, unable to land as airport is full');
});

Test.it('4.1 Confirming that plane has taken off', () => {
    let airport = new Airport();
    let plane = new Plane('FR5678');

    airport.landPlane(plane);
    let result = airport.takeOff(plane);

    Test.expect(result).toBe(`Plane ${plane.name}, has departed.`);

});

Test.it('4.2 Checking that departed plane is no longer in the airport', () => {
    let airport = new Airport();
    let plane = new Plane('FR5678');

    airport.takeOff(plane);
    let result = airport.hangar.length;

    Test.expect(result).toBe(0);
});

Test.it('5.1 Check that you can not take off if plane is not in airport', () => {
    let airport = new Airport();
    let plane = new Plane('FR5212');

    Test.expect(airport.takeOff(plane)).toBe('This plane is not in the aiport');
});

Test.it('5.2 Check that you can not land plane which has already landed', () => {
    let airport = new Airport();
    let plane = new Plane('FR5212');

    airport.landPlane(plane);

    Test.expect(airport.landPlane(plane)).toBe('This plane has already landed');
});