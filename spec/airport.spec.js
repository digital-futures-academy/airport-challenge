const test = require('mousinho-testlibrary-mse-2103/src/library');
const Plane = require('../src/plane');
const Airport = require('../src/airport');

let plane, plane2, plane3, airport, result, output, airport2;

// Story 1 Refactored:
test.describe('User Story 1: Testing airport.land() function', () => {
    test.it('plane added to hanger', () => {
        plane = new Plane('PL1');
        airport = new Airport();
        result = airport.land(plane);

        test.expect(airport.hanger.includes(plane)).toEqual(true);
    })

    test.it('plane.flying is set to false', () => {
        test.expect(plane.flying).toEqual(false);
    })

    test.it('cannot land plane if plane.flying is already false', () => {
        plane = new Plane('PL1', false);
        airport = new Airport();

        test.expect(airport.land(plane)).toEqual("Cannot land plane, it is not flying");
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
        airport.land(plane2);

        test.expect(airport.isFull()).toEqual(true);
    })

    test.it('.land() does not land a plane when isFull() is true', () => {
        plane3 = new Plane('PL3');
        
        test.expect(airport.land(plane3)).toEqual("Cannot land yet, the hangar is full");
    })

    test.it('.land() success when isFull() is false', () => {
        airport = new Airport();
        plane = new Plane('PL1');

        test.expect(airport.land(plane)).toEqual(`Successful landing, ${plane.id} is now in the hangar`);
    })
})


// User Story 4
console.log(`User Story 4: Testing airport.takeOff()`);

console.log(`   Test 1: .takeOff(plane) confirms take off`)
airport = new Airport();
plane = new Plane('PL1');
airport.land(plane);
result = airport.takeOff(plane)

if(test.assertEquals(result, `Successful take off, ${plane.id} is in the air`)) console.log(`   Passed`);
else console.log(`   Failed - expected true and got false`);

console.log(`   Test 2: .takeOff(plane) removes plane from hangar`);
if(test.assertEquals(airport.hanger.length, 0)) console.log(`   Passed`);
else console.log(`   Failed - expected 0 and got ${airport.hanger.length}`);


console.log(`   Test 3: .takeOff(plane) changes plane.flying from false to true`);
if(test.assertEquals(plane.flying, true)) console.log(`   Passed`);
else console.log(`   Failed - expected true and got false`);


console.log(`   Test 4: plane is already flying, cannot take off`);
airport = new Airport();
plane = new Plane('PL1');
result = airport.takeOff(plane);

if(test.assertEquals(result, `Cannot take off, ${plane.id} is already in the air`)) console.log(`   Passed`);
else console.log(`   Failed - expected true and got false`)


console.log(`   Test 5: plane is not in hangar before take off`);
airport = new Airport();
plane = new Plane('PL1', false);
result = airport.takeOff(plane);

if(test.assertEquals(result, `Cannot take off, ${plane.id} is not at this airport`)) console.log(`   Passed`);
else console.log(`   Failed - expected true and got false`);