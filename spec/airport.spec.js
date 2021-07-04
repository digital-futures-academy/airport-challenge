const Airport = require('../src/airport.js'); 
const assertEquals = require('../test-framework');

let airport, expectedOutout;
airport = new Airport();

expectedOutout = true;

console.log('Testing that a plane can land')
airport.landPlane('Plane1')
console.log(assertEquals(airport.planes.includes('Plane1'),expectedOutout));

airport = new Airport();
expectedOutout = 15;

console.log('Testing that airport capacity can be overridden');
airport.capacityOverride(15);
console.log(assertEquals(airport.capacity,expectedOutout));

airport = new Airport();
expectedOutout = false;

console.log(`Testing that planes can't land when airport is full`);
airport.capacityOverride(0);
airport.landPlane('Plane1');
console.log(assertEquals(airport.planes.includes('Plane1'),expectedOutout));

airport = new Airport();
expectedOutout = false;

console.log('Testing that a plane can take off');
airport.landPlane('Plane1');
airport.planeTakeOff('Plane1');
console.log(assertEquals(airport.planes.includes('Plane1'),expectedOutout))

airport = new Airport();

expectedOutout = 'Plane already landed';

console.log('Testing that a landed plane cannot land');
airport.landPlane('Plane1');
console.log(assertEquals(airport.landPlane('Plane1'),expectedOutout));

airport = new Airport()

expectedOutout = 'Plane not at airport';

console.log('Testing that a plane not at the airport cannot take off');
console.log(assertEquals(airport.planeTakeOff('Plane1'),expectedOutout));
