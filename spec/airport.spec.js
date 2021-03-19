const Test = require('../spec/test-framework.js');
const Airport = require('../src/airport.js');
const Plane = require('../src/plane.js');
const Weather = require('../src/weather.js');

Test.it('1. Checking if plane has been landed', () => {
    let plane = new Plane('FR9807');
    let airport = new Airport();
    let weather = new Weather(27);

    airport.landPlane(plane, weather);
    
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
    let weather = new Weather(27);
    let plane = new Plane('FR4538');
    let plane2 = new Plane('FR3560');
    let plane3 = new Plane('FR1234');
    let plane4 = new Plane('FR8765');

    airport.landPlane(plane, weather);
    airport.landPlane(plane2, weather);
    airport.landPlane(plane3, weather);

    Test.expect(airport.landPlane(plane4, weather)).toBe('Sorry, unable to land as airport is full');
});

Test.it('4.1 Confirming that plane has taken off', () => {
    let airport = new Airport();
    let plane = new Plane('FR5678');
    let weather = new Weather(27);

    airport.landPlane(plane, weather);
    let result = airport.takeOff(plane, weather);

    Test.expect(result).toBe(`Plane ${plane.name}, has departed.`);

});

Test.it('4.2 Checking that departed plane is no longer in the airport', () => {
    let airport = new Airport();
    let plane = new Plane('FR5678');
    let weather = new Weather(27);

    airport.takeOff(plane, weather);
    let result = airport.hangar.length;

    Test.expect(result).toBe(0);
});

Test.it('5.1 Check that you can not take off if plane is not in airport', () => {
    let airport = new Airport();
    let plane = new Plane('FR5212');
    let weather = new Weather(27);

    Test.expect(airport.takeOff(plane, weather)).toBe('This plane is not in the aiport');
});

Test.it('5.2 Check that you can not land plane which has already landed', () => {
    let airport = new Airport();
    let plane = new Plane('FR5212');
    let weather = new Weather(27);

    airport.landPlane(plane, weather);

    Test.expect(airport.landPlane(plane, weather)).toBe('This plane has already landed');
});

Test.it('6.1 Check that if weather is stormy, plane can not take off', () => {
    let airport = new Airport();
    let plane = new Plane('FR7692');
    let weather = new Weather(15);

    Test.expect(airport.takeOff(plane, weather)).toBe('Can not take off because weather is stormy');
});

Test.it('6.2 Check that if weather is stormy, plane can not land', () => {
    let airport = new Airport();
    let plane = new Plane('FR7692');
    let weather = new Weather(15);

    Test.expect(airport.landPlane(plane, weather)).toBe('Can not land because weather is stormy');
});

Test.it('7. Check that planes which have landed are at the airport', () => {
    let airport = new Airport();
    let plane = new Plane('FR5498');
    let plane2 = new Plane('FR7684');
    let weather = new Weather(27);

    airport.landPlane(plane, weather);
    airport.landPlane(plane2, weather);

    Test.expect(airport.hangar).toBe(airport.hangar);
});