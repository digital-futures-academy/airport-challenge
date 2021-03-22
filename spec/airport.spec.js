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

console.log('Testing to see if we cannot land planes if airport is full');
airport = new Airport(2);
let capPlane = new Plane('cap');
let capPlane2 = new Plane('capTwo');
let capPlane3 = new Plane('capThree');

airport.landPlane(capPlane);
airport.landPlane(capPlane2);
result = airport.landPlane(capPlane3);
console.log(assertEquals(result, 'cannot land plane - aiport is full'));

console.log('Testing to see if the plane has taken off');
airport = new Airport();
planeTwo = new Plane('Plane Two');
airport.landPlane(planeTwo);
result = airport.takeOff(planeTwo);
console.log(assertEquals(result.length, 0));

console.log('Testing to see if blocked from taking off airport that does not exist');
airport = new Airport();
planeThree = new Plane('Plane Three');
result = airport.takeOff(planeThree);
console.log(assertEquals(result, 'cannot takeoff plane that is not in the hangar'));
 
console.log('Testing to see if blocked from landing a plane already in the hangar');
aiport = new Airport();
planeFour = new Plane('Plane Four');
result = airport.landPlane(planeFour);
result = airport.landPlane(planeFour);
console.log(assertEquals(result, 'cannot land plane as it is already in the hangar'));
