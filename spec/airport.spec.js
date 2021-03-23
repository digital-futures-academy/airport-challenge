const test = require('mousinho-testlibrary-mse-2103/src/library');
const Plane = require('../src/plane');
const Airport = require('../src/airport');
const mockMath = Object.create(global.Math);
const returnMath = Object.create(global.Math);

let plane, plane2, plane3, airport, result, output, airport2;

mockMath.random = () => 0.5;
global.Math = mockMath;

// Testing Airport getters
test.describe('Testing Airport class getters', () => {
    test.it('get capacity() returns capacity field', () => {
        airport = new Airport();
        test.expect(airport.capacity).toEqual(2);
    })

    test.it('get hangar', () => {
        plane = new Plane('PL1');
        airport.land(plane);
        test.expect(airport.hangar[0]).toEqual(plane);
    })
})

// Story 1 Refactored:
test.describe('User Story 1: Testing airport.land() function', () => {
    test.it('plane added to hangar', () => {
        plane = new Plane('PL1');
        airport = new Airport();

        test.expect(airport.land(plane).includes(plane)).toEqual(true);
    })

    test.it('plane.flying is set to false', () => {
        plane = new Plane('PL1');
        airport = new Airport();
        airport.land(plane)
        test.expect(plane.flying).toEqual(false);
    })

    test.it('cannot land plane if plane.flying is already false', () => {
        plane = new Plane('PL1');
        airport = new Airport();
        airport2 = new Airport();

        airport.land(plane);

        test.expect(airport2.land(plane)).toEqual(`Cannot land ${plane.id}, it has already landed at a different airport`);
    })
})


// Story 2 Refactored
test.describe('Story 2: Testing airport._capacity input and getter', () => {
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


// Story 3 Refactored

test.describe(`Story 3: Testing airport.isFull() and airport.land() work together`, () => {
    test.it('isFull() returns false when hangar.length < capacity', () => {
        plane = new Plane('PL1');
        airport = new Airport();

        airport.land(plane);

        test.expect(airport.isFull()).toEqual(false);
    })

    test.it('isFull() returns true when hangar.length === capacity', () => {
        plane2 = new Plane('PL2');
        plane = new Plane('PL1');
        airport = new Airport();

        airport.land(plane);
        airport.land(plane2);

        test.expect(airport.isFull()).toEqual(true);
    })

    test.it('.land() does not land a plane when isFull() is true', () => {
        plane3 = new Plane('PL3');
        plane2 = new Plane('PL2');
        plane = new Plane('PL1');
        airport = new Airport();

        airport.land(plane);
        airport.land(plane2);
        
        test.expect(airport.land(plane3)).toEqual("Cannot land yet, the hangar is full");
    })

    test.it('.land() success when isFull() is false', () => {
        airport = new Airport();
        plane = new Plane('PL1');

        test.expect(airport.land(plane)[0]).toEqual(plane);
    })
})


// Story 4 Refactored
test.describe('User Story 4: Testing airport.takeoff()', () => {
    test.it('Test 1: takeOff(plane) confirms take off', () => {
        airport = new Airport();
        plane = new Plane('PL1');
        airport.land(plane);

        test.expect(airport.takeOff(plane)).toEqual(`Successful take off, ${plane.id} is in the air`);
    })

    test.it('takeOff(plane) removes plane from airport hangar', () => {
        airport = new Airport();
        plane = new Plane('PL1');
        airport.land(plane);
        airport.takeOff(plane)

        test.expect(!airport.hangar.includes(plane)).toEqual(true);
    })

    test.it('takeOff(plane) changes plane.flying from false to true', () => {
        airport = new Airport();
        plane = new Plane('PL1');
        airport.land(plane);
        airport.takeOff(plane)

        test.expect(plane.flying).toEqual(true);
    })

    test.it(`Plane is already flying, cannot take off`, () => {
        airport = new Airport();
        plane = new Plane('PL1');

        test.expect(airport.takeOff(plane)).toEqual(`Cannot take off, ${plane.id} is already in the air`);
    })

    test.it('plane is not in hangar before take off', () => {
        airport = new Airport();
        airport2 = new Airport();
        plane = new Plane('PL1');
        airport.land(plane);

        test.expect(airport2.takeOff(plane)).toEqual(`Cannot take off, ${plane.id} is not at this airport`);
    })
})

// User Story 5
test.describe(`Story 5: testing edge cases for airport.takeOff() and airport.land()`, () => {
    test.it(`.land(plane) that has already landed at this airport`, () => {
        airport = new Airport();
        plane = new Plane('PL1');
        airport.land(plane);
        test.expect(airport.land(plane)).toEqual(`Cannot land ${plane.id}, it is already in this airport's hangar`);
    })

    test.it(`.land(plane) when plane has already landed at a different airport`, () => {
        airport = new Airport();
        plane = new Plane('PL1');
        airport.land(plane);
        airport2 = new Airport();
        test.expect(airport2.land(plane)).toEqual(`Cannot land ${plane.id}, it has already landed at a different airport`);
    })

    test.it(`.takeOff(plane) when the plane is not at this airport`, () => {
        airport = new Airport();
        plane = new Plane('PL1');
        airport.land(plane);
        airport2 = new Airport();
        test.expect(airport2.takeOff(plane)).toEqual(`Cannot take off, ${plane.id} is not at this airport`)
    })
})

// Extension - testing weather systems and count
test.describe('Extension: testing airport.takeOff() and airport.land() in different weather conditions', () => {
    test.it('.land() when weather is clear', () => {
        mockMath.random = () => 0.5;
        global.Math = mockMath;

        airport = new Airport();
        plane = new Plane('PL1');
        test.expect(airport.land(plane)[0]).toEqual(plane);
        global.Math = returnMath;
    })

    test.it('.land() when weather is stormy', () => {
        mockMath.random = () => 0.1;
        global.Math = mockMath;

        airport = new Airport();
        plane = new Plane('PL1');
        test.expect(airport.land(plane)).toEqual(`Cannot land ${plane.id} in stormy weather`);
        global.Math = returnMath;
    })

    test.it('.takeOff() when weather is clear', () => {
        mockMath.random = () => 0.5;
        global.Math = mockMath;

        airport = new Airport();
        plane = new Plane('PL1');
        airport.land(plane);
        test.expect(!airport.takeOff(plane).includes(plane)).toEqual(true);
        global.Math = returnMath;
    })

    test.it('.takeOff() when weather is stormy', () => {
        mockMath.random = () => 0.5;
        global.Math = mockMath;

        airport = new Airport();
        plane = new Plane('PL1');
        airport.land(plane);

        mockMath.random = () => 0.1;
        global.Math = mockMath;

        test.expect(airport.takeOff(plane)).toEqual(`${plane.id} cannot take off in stormy weather`);
        global.Math = returnMath;
    })
})

test.describe('Testing count airplanes in hangar', () => {
    test.it('countPlanes() returns number of planes in airport', () => {
        mockMath.random = () => 0.5;
        global.Math = mockMath;

        airport = new Airport(4);
        plane = new Plane('PL1');
        plane2 = new Plane('PL2');
        plane3 = new Plane('PL3');
        airport.land(plane);
        airport.land(plane2);
        airport.land(plane3);

        test.expect(airport.countPlanes()).toEqual(3);

        global.Math = returnMath;
    })
})
