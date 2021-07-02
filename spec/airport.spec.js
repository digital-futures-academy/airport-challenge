let Airport = require('../src/airport.js')
let assertEquals = require('../test-framework.js')

//First test
console.log('Does landing a plane add 1 plane to the airport')
//1. Set up
let airport = new Airport();
let plane = {name: 'Emirates'}

//2. Execute
let result = airport.landPlane(plane);
console.log(result);

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
let plane1 = {}
let plane2 = {}
let plane3 = {}
let plane4 = {}
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
let planeA = {}
let planeB = {}
let planeC = {}
airport4.landPlane(planeA);
airport4.landPlane(planeB);
airport4.landPlane(planeC);

//2. Execute
resultA = airport4.takeOff(planeC);
resultB = airport4.inAirport(planeC);

//3. Verify
console.log(assertEquals(resultA.length, 2));
console.log(assertEquals(resultB, false));

//------------------------------------------------------------------------------
