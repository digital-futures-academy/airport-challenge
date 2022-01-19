const test = require('../test-framework.js');
const Airport = require('../src/airport.js');
const Plane = require('../src/plane.js');

test.it('test airport can land plane', function () {
    let airport = new Airport();
    let plane = new Plane('plane');
    airport.landPlane(plane);
    return test.expect(airport.planes.length).toEqual(1);
});

test.it('test default value for airport capacity is set', function () {
    let airport = new Airport();
    return test.expect(airport.capacity).toEqual(10);
});

test.it('test airport capacity can be overridden', function () {
    let airport = new Airport(15);
    airport.updateCapacity(5);
    return test.expect(airport.capacity).toEqual(20);
});

test.it('test to check if airport outputs false when airport is not full', function () {
    let airport = new Airport(10);
    return test.expect(airport.isAirportFull()).toEqual(false);
});

test.it('test to check if airport outputs true when airport is full', function () {
    let airport = new Airport(0);
    return test.expect(airport.isAirportFull()).toEqual(true);
});

test.it('test planes are prevented from landing if airport is full', function () {
    let airport = new Airport(0);
    const landPlaneResult = airport.landPlane(new Plane('plane'));
    return test.expect(landPlaneResult).toEqual('Airport is full. Unable to land plane') && test.expect(airport.capacity).toEqual(0);
});

test.it('test airport can let plane take off', function () {
    let plane1 = new Plane('plane1');
    let airport = new Airport(10, [plane1]);
    let plane2 = new Plane('plane2');
    airport.landPlane(plane2);
    airport.takeOff(plane1);
    return test.expect(airport.planes[0].name).toEqual('plane2') && test.expect(airport.planes.length).toEqual(1);
});

test.it('test to check if airport outputs false when plane is not at airport', function () {
    let airport = new Airport();
    let plane = new Plane('plane');
    return test.expect(airport.isPlaneAtAirport(plane)).toEqual(false);
});

test.it('test to check if airport outputs true when plane is at airport', function () {
    let plane = new Plane('plane');
    let airport = new Airport(10, [plane]);
    return test.expect(airport.isPlaneAtAirport(plane)).toEqual(true);
});
