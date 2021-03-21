const testFramework = require('../test-framework');
const Airport = require('../src/airport');
const Plane = require('../src/plane.js');
const assertEquals = require('../test-framework');

console.log('Test to see if the airport can land a plane.')
let airport = new Airport();
let plane = new Plane('Plane One');

let result = airport.landPlane(plane);
console.log(assertEquals(result.length, 1));
