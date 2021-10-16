const assertEquals = require('./test-framework');
const Airport = require('../src/airport');
const Plane = require('../src/Plane');

console.log('--- TESTS INVOLVING WEATHER CONDITIONS ---');

let expectedOutput, result;

// Test 1 - Test to see if a plane can takeoff when the weather is fixed to being stormy
console.log('Test 1 - Test to see if a plane can takeoff when the weather is changed to being stormy');
// Assert
let airport = new Airport();
let plane = new Plane();
expectedOutput = 1;
// Act
airport.setSafeWeather(true);
airport.landPlane(plane);
airport.setSafeWeather(false);
airport.allowTakeOff(plane);
// Assert 
result = assertEquals(airport.planes.length, expectedOutput);
console.log(result);
