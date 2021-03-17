const test = require('mousinho-testlibrary-mse-2103/src/library');
const Plane = require('../src/plane');
const Airport = require('../src/airport');

let plane, airport, result;

// Story 1:
console.log(`Testing airport.land()`);

console.log(`   Test 1: plane added to hanger`)
plane = new Plane(true);
airport = new Airport();

airport.land(plane);

result = test.assertEquals(airport.hanger[0], plane);
if (result) console.log (`   Passed`);
else console.log(`   Failed - expected True and got ${false}`);

console.log(`   Test 2: plane.flying is set to false`)
plane = new Plane(true);
airport = new Airport();

airport.land(plane);

result = test.assertEquals(plane.flying, false);
if (result) console.log (`   Passed`);
else console.log(`   Failed - expected True and got ${false}`);

console.log(`   Test 3: cannot land plane if plane.flying is already false`);
plane = new Plane();
airport = new Airport();

let output = airport.land(plane);

result = test.assertEquals(output, "Cannot land plane, it is not flying")
if (result) console.log (`   Passed`);
else console.log(`   Failed - expected "Cannot land plane, it is not flying", returned ${output}`);

