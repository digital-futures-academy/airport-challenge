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

expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;
plane = undefined;

plane1 = undefined;
plane2 = undefined;
plane3 = undefined;
plane4 = undefined;
plane5 = undefined;

console.log(`=============================✈️✈️✈️✈️`);
console.log(` Test 4  : Raising the capacity `);

airport = new Airport(5);
plane1 = new Plane("plane1");
plane2 = new Plane("plane2");
plane3 = new Plane("plane3");
plane4 = new Plane("plane4");
plane5 = new Plane("plane5");

airport.raisingCapacity(6);

airport.landPlane(plane1);
airport.landPlane(plane2);
airport.landPlane(plane3);
airport.landPlane(plane4);
airport.landPlane(plane5);

expected = 5;
actual = airport.airportPlanes.length;
result = assertEquals(expected, actual);

console.log(` Test 4  : Airport capacity raising to 6  ${result} `);
console.log(`=============================✈️✈️✈️✈️✈️✈️✈️🛩`);

expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;
plane = undefined;

plane1 = undefined;
plane2 = undefined;
plane3 = undefined;
plane4 = undefined;
plane5 = undefined;

console.log(`=============================✈️✈️✈️✈️`);
console.log(` Test 5  : Let the airport know when a plane is taking off `);

airport = new Airport(5);
plane1 = new Plane("plane1");
plane2 = new Plane("plane2");
plane3 = new Plane("plane3");
plane4 = new Plane("plane4");
plane5 = new Plane("plane5");

airport.landPlane(plane1);
airport.landPlane(plane2);
airport.landPlane(plane3);
airport.landPlane(plane4);
airport.landPlane(plane5);

airport.takingOff(plane5.id);

expected = 4;
actual = airport.airportPlanes.length;
result = assertEquals(expected, actual);

console.log(`=============================✈️✈️✈️✈️`);
console.log(
  `Test 5 : Let the airport know when a plane is taking off ${result}`
);

expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;
plane = undefined;

plane1 = undefined;
plane2 = undefined;
plane3 = undefined;
plane4 = undefined;
plane5 = undefined;

console.log(`=============================✈️✈️✈️✈️`);
console.log(` Test 6  : Check if the plane is in the airport `);

airport = new Airport();
plane1 = new Plane("plane1");
plane2 = new Plane("plane2");

airport.landPlane(plane1);
airport.landPlane(plane2);

expected = true;
actual = airport.checkPlane(plane1);
result = assertTrue(actual);

console.log(`=============================✈️✈️✈️✈️`);
console.log(` Test 6  : Check the plane ${result}`);

console.log(`=============================✈️✈️✈️✈️`);
console.log(` Test 7  : Check the weather `);

airport = new Airport();

plane1 = new Plane("plane1");

airport.checkWeather();
airport.landPlane(plane1, airport.checkWeather());

expected = 1;

actual = airport.airportPlanes.length;
result = assertEquals(expected, actual);

console.log(`=============================✈️✈️✈️✈️`);
console.log(
  ` Test 7  : Check the weather to see if the plane can land ${result} `
);

expected = undefined;
actual = undefined;
result = undefined;
airport = undefined;
plane = undefined;

plane1 = undefined;

console.log(`=============================✈️✈️✈️✈️`);
console.log(` Test 8  : Check the weather `);

airport = new Airport();

plane1 = new Plane("plane1");

airport.checkWeather();
airport.landPlane(plane1, "sunny");
airport.takingOff(plane1.id, airport.checkWeather());

expected = 0;

actual = airport.airportPlanes.length;
result = assertEquals(expected, actual);

console.log(`=============================✈️✈️✈️✈️`);
console.log(
  ` Test 8  : Check the weather to see if the plane can take off ${result} `
);
