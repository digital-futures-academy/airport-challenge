const {
  assertEquals,
  assertLessThan,
  assertTrue,
  assertFalse,
} = require(`../framework`);
const Airport = require(`../src/Airport`);
const Plane = require(`../src/Plane`);

let expected;
let actual;
let result;
let airport;
let plane;

console.log(`=============================🛬`);
console.log(` Test 1 : Land a plane `);

airport = new Airport();
plane = new Plane();
expected = 1;

airport.landPlane(plane);
actual = airport.airportPlanes.length;

result = assertEquals(expected, actual);

console.log(` Test 1 : Land a plane ${result} `);
console.log(`=============================🛬`);

expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;
plane = undefined;

console.log(`=============================✈️✈️✈️✈️`);
console.log(` Test 2  : check the capacity `);

airport = new Airport(4);
let plane1 = new Plane("plane1");
let plane2 = new Plane("plane2");
let plane3 = new Plane("plane3");
let plane4 = new Plane("plane4");

airport.landPlane(plane1);
airport.landPlane(plane2);
airport.landPlane(plane3);
airport.landPlane(plane4);

expected = 4;

actual = airport.airportPlanes.length;

result = assertEquals(expected, actual);

console.log(` Test 2 : check the capacity ${result} `);
console.log(`=============================✈️✈️✈️✈️✈️✈️✈️`);

expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;
plane = undefined;

plane1 = undefined;
plane2 = undefined;
plane3 = undefined;
plane4 = undefined;

console.log(`=============================✈️✈️✈️✈️`);
console.log(` Test 3  : Prevent landing if the Airport is full `);

airport = new Airport(4);
plane1 = new Plane("plane1");
plane2 = new Plane("plane2");
plane3 = new Plane("plane3");
plane4 = new Plane("plane4");
let plane5 = new Plane("plane5");

airport.landPlane(plane1);
airport.landPlane(plane2);
airport.landPlane(plane3);
airport.landPlane(plane4);
airport.landPlane(plane5);

airport.fullCapacity(4);

expected = 4;

actual = airport.airportPlanes.length;

result = assertLessThan(expected, actual);

console.log(` Test 3  : Prevent landing when the Airport reached 4 ${result} `);
console.log(`=============================✈️✈️✈️✈️✈️✈️✈️🛩`);
