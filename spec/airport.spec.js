const test = require('mousinho-testlibrary-mse-2103/src/library');
const Plane = require('../src/plane');
const Airport = require('../src/airport');

let plane, plane2, plane3, airport, result, output;

// Story 1 Refactored:
test.describe('Testing airport.land() function', () => {
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
        output = airport.land(plane);

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


// Story 3
console.log(`Testing airport.isFull() and airport.land()`)

console.log(`   Test 1: isFull() returns false when hangar.length < capacity`)
plane = new Plane('PL1');
airport = new Airport(2);
airport.land(plane);

result = test.assertEquals(airport.isFull(), false);
if(result) console.log(`   Passed`);
else console.log(`   Failed - expected false and got ${result}`);


console.log(`   Test 2: isFull() returns true when hangar.length === capacity`)
plane2 = new Plane('PL2');
airport.land(plane2);

result = test.assertEquals(airport.isFull(), true);
if(result) console.log(`   Passed`);
else console.log(`   Failed - expected true and got ${result}`);



console.log(`   Test 3: .land() does not land the plane because isFull() is true`);
plane3 = new Plane('PL3');

output = airport.land(plane3);

result = test.assertEquals(output, "Cannot land yet, the hangar is full");
if(result) console.log(`   Passed`);
else console.log(`   Failed - expected true and got ${result}`);

console.log(`   Test 4: .land() works returns success when isFull() is false`);
airport = new Airport();
plane = new Plane('PL1');

output = airport.land(plane);

result = test.assertEquals(output, `Successful landing, ${plane.id} is now in the hangar`);
let result2 = test.assertEquals(airport.hanger.length, 1);
if(result && result2) console.log(`   Passed`);
else console.log(`   Failed - expected true and got ${result}`);
