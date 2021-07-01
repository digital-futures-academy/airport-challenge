let Airport = require('../src/airport.js')
let assertEquals = require('../test-framework.js')

//First test
//1. Set up
let airport = new Airport();
let plane = {}

//2. Execute
let result = airport.landPlane(plane);
console.log(result);

//3. Verify
console.log(assertEquals(result.length, 1));
