let Airport = require('../src/airport.js')
let assertEquals = require('../test-framework.js')

//First test
console.log('Does landing a plane add 1 plane to the airport')
//1. Set up
let airport = new Airport();
let plane = {}

//2. Execute
let result = airport.landPlane(plane);
console.log(result);

//3. Verify
console.log(assertEquals(result.length, 1));

//Second test
console.log('Does changing the capcity give 200')
//1. Set up
let airport2 = new Airport();

//2. Execute
result = airport2.capacityOverride(200);

//3. Verify
console.log(assertEquals(result, 200));
