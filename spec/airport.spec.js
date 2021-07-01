let Airport = require('../src/airport.js')
let assertEquals = require('../test-framework.js')

//First test
//1. Set up
let airport = new Airport();

//2. Execute
let result = airport.landPlane();

//3. Verify
console.log(assertEquals(airport.planes.length, 1));
