const test = require('../test-framework.js');
const Airport = require('../src/airport.js');
const Plane = require('../src/plane.js');

test.it('test airport can land plane', function () {
    let airport = new Airport();
    let plane = new Plane('plane', 'flying');
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
    airport.weather = 0.9;
    const landPlaneResult = airport.landPlane(new Plane('plane', 'flying'));
    return test.expect(landPlaneResult).toEqual('Airport is full. Unable to land plane') && test.expect(airport.capacity).toEqual(0);
});

test.it('test airport can let plane take off', function () {
    let plane1 = new Plane('plane1', 'landed');
    let airport = new Airport(10, [plane1]);
    let plane2 = new Plane('plane2', 'flying');
    airport.landPlane(plane2);
    airport.takeOff(plane1);
    return test.expect(airport.planes[0].name).toEqual('plane2') && test.expect(airport.planes.length).toEqual(1);
});

test.it('test to check if airport outputs false when plane is not at airport', function () {
    let airport = new Airport();
    let plane = new Plane('plane', 'landed');
    return test.expect(airport.isPlaneAtAirport(plane)).toEqual(false);
});

test.it('test to check if airport outputs true when plane is at airport', function () {
    let plane = new Plane('plane', 'landed');
    let airport = new Airport(10, [plane]);
    return test.expect(airport.isPlaneAtAirport(plane)).toEqual(true);
});

test.it('test to check plane status is changed to landed when plane is landed', function () {
    let plane = new Plane('plane', 'flying');
    let airport = new Airport();
    airport.weather = 0.9;
    airport.landPlane(plane);
    return test.expect(plane.status).toEqual('landed');
});

test.it('test to check plane status is changed to flying when the plane has taken off', function () {
    let plane = new Plane('plane', 'landed');
    let airport = new Airport(10, [plane]);
    airport.weather = 0.9;
    airport.takeOff(plane);
    return test.expect(plane.status).toEqual('flying');
});

test.it('test to prevent plane landing when it is already landed', function () {
    let plane = new Plane('plane', 'landed');
    let airport = new Airport(10, [plane]);
    return test.expect(airport.landPlane(plane)).toEqual('Plane cannot land when already landed');
});

test.it('test to prevent plane taking off when it is already flying', function () {
    let plane = new Plane('plane', 'flying');
    let airport = new Airport(10);
    return test.expect(airport.takeOff(plane)).toEqual('Plane cannot take off when already flying');
});

test.it('test to prevent plane taking off when weather is stormy', function () {
    let plane = new Plane('plane', 'landed');
    let airport = new Airport(10, [plane]);
    airport.weather = 0.05; // stormy
    return test.expect(airport.takeOff(plane)).toEqual('Stormy weather. Plane cannot take off');
});

test.it('test to prevent plane landing when weather is stormy', function () {
    let plane = new Plane('plane', 'flying');
    let airport = new Airport(10);
    airport.weather = 0.05; // stormy
    return test.expect(airport.landPlane(plane)).toEqual('Stormy weather. Plane cannot land');
});

test.it('test to count planes in airport', function () {
    let plane1 = new Plane('plane1', 'landed');
    let plane2 = new Plane('plane2', 'landed');
    let plane3 = new Plane('plane3', 'landed');
    let airport = new Airport(10, [plane1, plane2, plane3]);
    return test.expect(airport.countPlanes()).toEqual(3);
});

test.it('test to check if error is thrown if silly inputs are passed into plane constructor', function () {
    let plane1 = new Plane(1, 'landed');
    let plane2 = new Plane('plane', 5);

    // Console logs Error! Bad input for plane constructor x 2
});


test.it('test to check if error is thrown if silly inputs are passed into airport constructor', function () {
    let airport1 = new Airport(-1);
    let airport2 = new Airport(10, 1);

    // Console logs Error! Bad input for airport constructor x 2
});