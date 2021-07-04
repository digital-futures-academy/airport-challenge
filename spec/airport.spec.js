let Airport = require('../src/airport.js')
let Plane = require('../src/plane.js')
let assertEquals = require('../test-framework.js')

//------------------------------------------------------------------------------

//First test
console.log('Does landing a plane add 1 plane to the airport')
//1. Set up
let airport = new Airport();
airport.weather = 50;
let plane = new Plane('Emirates');

//2. Execute
let result = airport.landPlane(plane);

//3. Verify
console.log(assertEquals(result.length, 1));

//------------------------------------------------------------------------------

//Second Test
console.log('Does the airport have a default capacity of 100?');
//1. Set up
let heathrow = new Airport();
heathrow.weather = 50;


//2. Execute
let capac = heathrow.capacity

//3. Verify
console.log(assertEquals(capac, 100));


console.log('Can the capacity be overriden to 200?')
//1. Set up
let airport2 = new Airport();
airport2.weather = 50;


//2. Execute
result = airport2.capacityOverride(200);

//3. Verify
console.log(assertEquals(result, 200));

//------------------------------------------------------------------------------

//Third test
console.log('Does trying to add too many planes return an error, and keep the list the same');
//1. Set up
let airport3 = new Airport();
airport3.weather = 50;

let plane1 = new Plane('Emirates')
let plane2 = new Plane('Etihad')
let plane3 = new Plane('British Airways')
let plane4 = new Plane('Qantas')
airport3.landPlane(plane1);
airport3.landPlane(plane2);
airport3.landPlane(plane3);
airport3.capacityOverride(3);

//2.Execute
result = airport3.landPlane(plane4);

//3.Verify
console.log(assertEquals(result.length, 3))

//------------------------------------------------------------------------------

//Fourth test
console.log('Does take off decrease planes in airport? Can we confirm plane has left?')
//1. Set up
let airport4 = new Airport();
airport4.weather = 50;

let planeA = new Plane('Emirates')
let planeB = new Plane('British Airways')
let planeC = new Plane('Qantas')

airport4.landPlane(planeA);
airport4.landPlane(planeB);
airport4.landPlane(planeC);

//2. Execute
let resultA = airport4.takeOff(planeC);
let resultB = airport4.inAirport(planeC);
let resultC = airport4.inAirport(planeB);


//3. Verify
console.log(assertEquals(resultA.length, 2));
console.log(assertEquals(resultB, false));
console.log(assertEquals(resultC, true));

//------------------------------------------------------------------------------

//Fifth test
console.log('Does trying to land an already landed plane return an error? Same for take off?');
//1. Set up
let airport5 = new Airport();
airport5.weather = 50;

let plane01 = new Plane('United')
let plane02 = new Plane('Lufthansa')
let plane03 = new Plane('American Airlines')
airport5.landPlane(plane01);
airport5.landPlane(plane02);
airport5.landPlane(plane03);
airport5.takeOff(plane03);

//2. Execute
const result1 = airport5.landPlane(plane01);
const result2 = airport5.takeOff(plane03);

//3. Verify
console.log(assertEquals(result1.length, 2));
console.log(assertEquals(result2.length, 2));

//------------------------------------------------------------------------------
//Sixth Test
console.log('Does trying to take off a plane during stormy weather return an error?')
//1. Set up
let airport6 = new Airport();
airport6.weather = 3
let firstPlane = new Plane('Emirates');
let secondPlane = new Plane('British Airways');
airport6.landPlane(firstPlane);
airport6.landPlane(secondPlane);

//2. Execute
const answer = airport6.takeOff(firstPlane);

//3. Verify
console.log(assertEquals(answer.length, 2));

//------------------------------------------------------------------------------
//Edge cases
console.log('Does trying to land a plane that has landed elsewhere return an error?')

//1.Set up
let gatwick = new Airport();
gatwick.weather = 50;
let aeroplane = new Plane('Virgin Atlantic');
gatwick.landPlane(aeroplane);
let manchester = new Airport();
manchester.weather = 50;

//2. Execute
let message = manchester.landPlane(aeroplane);

//3. Verify
console.log(assertEquals(message.length, 0));

//------------------------------------------------------------------------------
