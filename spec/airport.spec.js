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




// Story 2
console.log("Story 2: Testing airport._capacity input, and getter")

console.log(`   Test 1: default value of capacity is correct`)
airport = new Airport();

result = test.assertEquals(airport.capacity, 2);
if(result) console.log(`   Passed`);
else console.log(`   Failed - expected 2 and got ${airport.capacity}`)


console.log(`   Test 2: capacity is set and returned correctly`)
airport = new Airport(4);

result = test.assertEquals(airport.capacity, 4);
if(result) console.log(`   Passed`);
else console.log(`   Failed - expected 4 and got ${airport.capacity}`)


console.log(`   Test 3: cannot set a negative capacity`)
try {
    airport = new Airport(-4);
    console.log(`   Failed - expected an Error and got ${airport.capacity}`)
} catch (err) {
    result = test.assertEquals(err.message, "Hangar capacity must be a positive integer");
    if (result) console.log(`   Passed`);
    else console.log(`   Failed - expected error message to be "Hangar capacity cannot be below 0", actual error message is ${err.message}`);
}

console.log(`   Test 4: cannot set a string`)
try {
    airport = new Airport('hello');
    console.log(`   Failed - expected an Error and got ${airport.capacity}`)
} catch (err) {
    result = test.assertEquals(err.message, "Hangar capacity must be a positive integer");
    if (result) console.log(`   Passed`);
    else console.log(`   Failed - expected error message to be "Hangar capacity cannot be below 0", actual error message is ${err.message}`);
}