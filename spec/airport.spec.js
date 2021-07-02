let Airport = require('../src/airport.js')
let Plane = require('../src/plane.js')
let assertEquals = require('../test-framework.js')

//First test
console.log('Does landing a plane add 1 plane to the airport')
//1. Set up
let airport = new Airport();
let plane = new Plane('Emirates');

//2. Execute
let result = airport.landPlane(plane);

//3. Verify
console.log(assertEquals(result.length, 1));

//------------------------------------------------------------------------------

//Second test
console.log('Does changing the capcity give 200')
//1. Set up
let airport2 = new Airport();

//2. Execute
result = airport2.capacityOverride(200);

//3. Verify
console.log(assertEquals(result, 200));

//------------------------------------------------------------------------------

//Third test
console.log('Does trying to add too many planes return an error, and keep the list the same');
//1. Set up
let airport3 = new Airport();
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
let planeA = new Plane('Emirates')
let planeB = new Plane('British Airways')
let planeC = new Plane('Qantas')

airport4.landPlane(planeA);
airport4.landPlane(planeB);
airport4.landPlane(planeC);
console.log(airport4.planes);

//2. Execute
let resultA = airport4.takeOff(planeC);
console.log(airport4.planes)
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
