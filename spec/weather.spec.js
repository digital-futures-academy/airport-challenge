const Plane = require('../src/plane');
const Weather = require('../src/weather');
const Airport = require('../src/airport');

test = require('./test-framework');

// User story 6

console.log('\x1b[4m%s\x1b[0m', 'User Story 6');    
// test 1
// Setup
let day1 = new Weather();
day1.cond = 0.02;
let plane5 = new Plane;
let testAirport5 = new Airport;


test.it('Prevent take off when weather is stormy', function() {
    // Execute, Verify
    test.expect(testAirport5.takeOff(plane5, day1)).toEqual('Cannot take off in stormy weather');
});

console.log('\x1b[4m%s\x1b[0m', 'User Story 7');
// test 1

test.it('Prevent landing when weather is stormy', function() {
    // Setup, Execute, Verify
    test.expect(testAirport5.land(plane5, day1)).toEqual('Cannot land in stormy weather');
});
 
// test 2
// Setup
let day2 = new Weather();
day2.cond = 0.5;
let plane6 = new Plane;
let testAirport6 = new Airport;

test.it('Allow landing when weather is acceptable', function() {
    // Execute, Verify
    test.expect(JSON.stringify(testAirport6.land(plane6, day2))).toEqual(JSON.stringify([plane6]));
});

// test 3

test.it('Allow take off when weather is acceptable', function() {
    // Setup, Execute, Verify
    test.expect(JSON.stringify(testAirport6.takeOff(plane6, day2))).toEqual(JSON.stringify([]));
});