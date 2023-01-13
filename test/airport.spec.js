const { assertEquals, assertTrue, assertFalse } = require(`../framework`);
const Airport = require(`../src/Airport`);
const Plane = require("../src/Plane");

let expected;
let actual;
let result;
let airport;
let plane;

console.log("\n========== Test 1 ==========\n");

expected = 1;

airport = new Airport(3);
plane = new Plane("asd123");
airport.landPlane(plane, "sunny");

actual = airport.landedPlanes.length;
result = assertEquals(expected, actual);

console.log(
  `Test 1: Airport's landed planes number increases by one: ${
    result ? "Passed" : "Failed"
  }`
);

airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log("\n========== Test 2 ==========\n");

expected = 0;

airport = new Airport(3);
plane = new Plane("asd123");
airport.landPlane("plane", "sunny");

actual = airport.landedPlanes.length;
result = assertEquals(expected, actual);

console.log(
  `Test 2: Check if airport only accepts instances of plane: ${
    result ? "Passed" : "Failed"
  }`
);

airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log("\n========== Test 3 ==========\n");

let airp1, airp2, airp3, airp4;

expected = 4;

airport = new Airport(3);

airp1 = new Plane("plane1");
airp2 = new Plane("plane2");
airp3 = new Plane("plane3");
airp4 = new Plane("plane4");

airport.landPlane(airp1, "sunny");
airport.landPlane(airp2, "sunny");
airport.landPlane(airp3, "sunny");

airport.increaseAirportCapacityTo(5);

airport.landPlane(airp4, "sunny");

console.log(`New airport cap is: ${airport.airportCap}`);

actual = airport.landedPlanes.length;

result = assertEquals(expected, actual);

console.log(`Test 3: Capacity raised to 5 : ${result ? "Passed" : "Failed"}`);

airport = null;
plane = null;
airp1 = null;
airp2 = null;
airp3 = null;
airp4 = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log("\n========== Test 4 ==========\n");

expected = 3;

airport = new Airport(3);

airp1 = new Plane("plane1");
airp2 = new Plane("plane2");
airp3 = new Plane("plane3");
airp4 = new Plane("plane4");

airport.landPlane(airp1, "sunny");
airport.landPlane(airp2, "sunny");
airport.landPlane(airp3, "sunny");
airport.landPlane(airp4, "sunny");

actual = airport.landedPlanes.length;

result = assertEquals(expected, actual);

console.log(
  `Test 4: Stopped 4th plane to land because the capacity is set to 3: ${
    result ? "Passed" : "Failed"
  }`
);

airport = null;
plane = null;
airp1 = null;
airp2 = null;
airp3 = null;
airp4 = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log("\n========== Test 5 ==========\n");

expected = 3;

airport = new Airport(4);

airp1 = new Plane("plane1");
airp2 = new Plane("plane2");
airp3 = new Plane("plane3");
airp4 = new Plane("plane4");

airport.landPlane(airp1, "sunny");
airport.landPlane(airp2, "sunny");
airport.landPlane(airp3, "sunny");
airport.landPlane(airp4, "sunny");

console.log(typeof airp2);
airport.letPlaneTakeOff(airp2.id, "sunny");

actual = airport.landedPlanes.length;

result = assertEquals(expected, actual);

console.log(
  `Test 5: Let plane take off and told the airport about it : ${
    result ? "Passed" : "Failed"
  }`
);

airport = null;
plane = null;
airp1 = null;
airp2 = null;
airp3 = null;
airp4 = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log("\n========== Test 6 ==========\n");

expected = true;

airport = new Airport(4);

airp1 = new Plane("plane1");
airp2 = new Plane("plane2");
airp3 = new Plane("plane3");
airp4 = new Plane("plane4");

airport.landPlane(airp1, "sunny");
airport.landPlane(airp2, "sunny");
airport.landPlane(airp3, "sunny");
airport.landPlane(airp4, "sunny");

actual = airport.planeIsAtTheAirport(airp3);
console.log(airport);
result = assertTrue(actual);

console.log(
  `Test 6: Checking if plane3 is at the airport: ${
    result ? "Passed" : "Failed"
  }`
);

airport = null;
weather = null;
plane = null;
airp1 = null;
airp2 = null;
airp3 = null;
airp4 = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log("\n========== Test 7 ==========\n");

expected = 2;

airport = new Airport(4);

airp1 = new Plane("plane1");
airp2 = new Plane("plane2");
airp3 = new Plane("plane3");
airp4 = new Plane("plane4");

airport.checkWeather();

airport.landPlane(airp1, airport.checkWeather());
airport.landPlane(airp2, airport.checkWeather());
airport.landPlane(airp3, airport.checkWeather());
airport.landPlane(airp4, airport.checkWeather());

actual = airport.landedPlanes.length;
console.log(airport);

result = assertEquals(expected, actual);

console.log(
  `Test 7: Checking how many planes can land based on the random weather(chances are 50-50, 
    but results can vary between 0-4, most probable is 2, so the expected is that): ${
      result ? "Passed" : "Failed"
    }`
);

airport = null;
plane = null;
airp1 = null;
airp2 = null;
airp3 = null;
airp4 = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log("\n========== Test 8 ==========\n");

expected = 2;

airport = new Airport(4);

airp1 = new Plane("plane1");
airp2 = new Plane("plane2");
airp3 = new Plane("plane3");
airp4 = new Plane("plane4");

airport.landPlane(airp1, "sunny");
airport.landPlane(airp2, "sunny");
airport.landPlane(airp3, "sunny");
airport.landPlane(airp4, "sunny");

airport.letPlaneTakeOff(airp1.id, airport.checkWeather());
airport.letPlaneTakeOff(airp2.id, airport.checkWeather());
airport.letPlaneTakeOff(airp3.id, airport.checkWeather());
airport.letPlaneTakeOff(airp4.id, airport.checkWeather());

actual = airport.landedPlanes.length;
console.log(airport);

result = assertEquals(expected, actual);

console.log(
  `Test 8: Similarly to test number 7, checking if the planes can take off, expected is set to 2, but result can vary between 0-4: ${
    result ? "Passed" : "Failed"
  }`
);

airport = null;
plane = null;
airp1 = null;
airp2 = null;
airp3 = null;
airp4 = null;
expected = undefined;
actual = undefined;
result = undefined;
