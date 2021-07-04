const assertEquals = require("C:/airport-challenge/test-framework.js");
const Airport = require("C:/airport-challenge/src/airport.js");
const Plane = require("C:/airport-challenge/src/plane.js");

console.log("Testing User story 1: Airport lands plane");

// Set Up
let airport = new Airport();
let plane = new Plane();

//Execute
airport.land(plane);

// Verify
console.log(assertEquals(airport.planes.length, 1));

//.............................................................................

console.log("Testing User story 1: Airport includes plane");

// Set Up
airport = new Airport();
plane = new Plane();

//Execute
airport.land(plane);

// Verify
console.log(assertEquals(airport.planes.includes(plane), true));

//................................................................................

console.log("Testing User story 1: Airport includes planes");

// Set Up
airport = new Airport();
plane = new Plane();
plane2 = new Plane();

//Execute
airport.land(plane);
airport.land(plane2);

// Verify
console.log(assertEquals(airport.planes.includes(plane), true));
console.log(assertEquals(airport.planes.includes(plane2), true));

//..............................................................
console.log(
  "Testing User story 2: new Airport has default airport capacity of 3:"
);

// Set Up
airport = new Airport();

//Execute
airport.capacity;

//  Verify
console.log(assertEquals(airport.capacity, 3));

// ..............................................................................................// //.........................................................................................

console.log("Testing User story 2: has a capacity that can be overriden:");

// Set Up
airport = new Airport(2);

// Execute
airport.capacity;

//  Verify
console.log(assertEquals(airport.capacity, 2));

//..........................................................................................

console.log("Testing User story 3: Prevents landing when airport is full");

// Set Up
airport = new Airport(1);
plane = new Plane();
plane2 = new Plane();
plane3 = new Plane();

// Execute
airport.land(plane);
airport.land(plane2);
airport.land(plane3);

// Verify
console.log(assertEquals(airport.planes.length, 1));

//...........................................................................................

console.log("Testing User story 4: Airport takeoff");

// Set Up
airport = new Airport();
plane = new Plane();

// Execute
airport.land(plane);
result = airport.takeOff(plane);

//  Verify
console.log(assertEquals(airport.planes.length, 0)); //array length 0
//...................................................................

console.log("Testing User story 4: Plane no longer in aiport that set off:");

// Set Up
airport = new Airport();
plane = new Plane();

//Execute
airport.land(plane);
airport.takeOff(plane);

// Verify
console.log(assertEquals(airport.planes.includes(plane), false));
//...........................................................................................

console.log("Testing User story 5: returns a message if plane is not present");

//  Set Up
airport = new Airport();
plane = new Plane();

// Execute
// console.log(airport.takeOff(plane))

//  Verify
console.log(assertEquals(airport.takeOff(plane), false));

// ..................................................................................

console.log(
  "Testing User story 5: Prevents landing when plane has already landed"
);

//Set Up
airport = new Airport();
plane = new Plane();

//Execute
airport.land(plane);
console.log(airport);
airport.land(plane);

//  Verify
console.log(
  assertEquals(airport.land(plane), "Plane has already landed at the airport")
);
