const testFramework = require('../test-framework');
const Airport = require('../src/airport');
const Plane = require('../src/plane.js');
const assertEquals = require('../test-framework');

console.log('Test to see if the airport can land a plane.')
let airport = new Airport();
let plane = new Plane('Plane One');
let result = airport.landPlane(plane);
console.log(assertEquals(result.length, 1));

console.log('Testing if airport capacity can be overriden');
airport = new Airport(20);
result = airport.capacity;
console.log(assertEquals(result, 20));

console.log('Testing to see if we can land planes if airport is full');
airport = new Airport(3)
for(let i = 0; i < 4; i++){
    result = airport.landPlane(plane);
}
console.log(assertEquals(result, 'cannot land plane - aiport is full'));