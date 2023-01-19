const { assertEquals } = require("../test-framework");
const Airport = require(`../src/airport.js`);
const Plane = require(`../src/plane.js`);
const { checkWeather } = require(`../src/weather.js`);

let expected, actual, result;
const plane = new Plane(`test`);
const airport = new Airport();

//Testing airport.isFull()
function testIsFull() {
  //Set up
  const testCases = {
    test1: {
      logMessage: `Test 1: isFull method returns true if airport.planesLanded.length === capacity `,
      expected: true,
      setAirportArray: () => {
        airport.planesLanded = [plane];
      },
    },
    test2: {
      logMessage: `Test 2: isFull method returns false if airport.planesLanded.length < capacity `,
      expected: false,
      setAirportArray: () => {
        airport.planesLanded = [];
      },
    },
  };

  //Execute&&Verify
  Object.entries(testCases).forEach((entry) => {
    console.log(entry[1].logMessage);
    entry[1].setAirportArray();
    const actual = airport.isFull();
    const result = assertEquals(actual, entry[1].expected);
    console.log(result);
    console.log(
      `===============================test end===================================`
    );
  });
}

//Testing airport.land()
function testLand() {
  //Set up
  const testCases = {
    test3: {
      logMessage: `Test 3: land() shouldn't land a plane that's already landed`,
      expected: false,
      setUpProperties: () => {
        airport.planesLanded = [];
        plane.status = "landed";
      },
      currentWeather: "sunny",
    },
    test4: {
      logMessage: `Test 4: land() shouldn't land a plane if airport.capacity is full`,
      expected: false,
      setUpProperties: () => {
        airport.planesLanded = [new Plane(`test`)];
        plane.status = "flying";
      },
      currentWeather: "sunny",
    },
    test5: {
      logMessage: `Test 5: takeOff() method shoudn't let planes land if the weather is stormy`,
      expected: false,
      setUpProperties: () => {
        airport.planesLanded = [];
        plane.status = "flying";
      },
      currentWeather: "stormy",
    },
  };

  //Execute&&Verify
  Object.entries(testCases).forEach((entry) => {
    console.log(entry[1].logMessage);
    entry[1].setUpProperties();
    const actual = airport.land(plane, entry[1].currentWeather);
    const result = assertEquals(actual, entry[1].expected);
    console.log(result);
    console.log(
      `===============================test end===================================`
    );
  });
}

//Testing airport.takeOff()
function testTakeOff() {
  const testCases = {
    test6: {
      logMessage: `Test 6: takeOff() method removes plane from airport.planeLanded array`,
      expected: true,
      setUpProperties: () => {
        airport.planesLanded = [plane];
        plane.status = "landed";
      },
      currentWeather: "sunny",
    },
    test7: {
      logMessage: `Test 7: takeOff() method shoudn't let planes take-off which are not landed at that airport`,
      expected: false,
      setUpProperties: () => {
        airport.planesLanded = [];
        plane.status = "landed";
      },
      currentWeather: "sunny",
    },
    test8: {
      logMessage: `Test 8: takeOff() method shoudn't let planes take-off if the weather is stormy`,
      expected: false,
      setUpProperties: () => {
        airport.planesLanded = [plane];
        plane.status = "landed";
      },
      currentWeather: "stormy",
    },
  };

  //Execute&&Verify
  Object.entries(testCases).forEach((entry) => {
    console.log(entry[1].logMessage);
    entry[1].setUpProperties();
    const actual = airport.takeOff(plane, entry[1].currentWeather);
    const result = assertEquals(actual, entry[1].expected);
    console.log(result);
    console.log(
      `===============================test end===================================`
    );
  });
}

//Running tests
testIsFull();
testLand();
testTakeOff();
