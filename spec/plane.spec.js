const SystemDesigner = require('../src/systemDesigner');
const Plane = require('../src/plane');
const Weather = require('../src/weather');
const Airport = require('../src/airport');

test = require('./test-framework');

// User story 5

console.log('\x1b[4m%s\x1b[0m', 'User Story 5')    
// test 1
// Setup
let plane = new Plane;

test.it('Prevent asking the airport to let planes take-off which are not at the airport', function() {
    // Execute, Verify
    test.expect(plane.status).toEqual('takenOff');
})

// test 2    
// Setup
let plane2 = new Plane;
let testAirport2 = new Airport

testAirport2.land(plane2)
testAirport2.takeOff(plane2)

test.it('Prevent asking the airport to let planes take-off which are not at the airport 2', function() {
    // Execute, Verify
    test.expect(plane2.status).toEqual('takenOff');
})

// test 3   
// Setup
let testAirport3 = new Airport

test.it('Prevent asking the airport to let planes take-off which have taken off at a different airport', function() {
    // Execute, Verify
    test.expect(testAirport3.takeOff(plane2)).toEqual("Can't let a plane take off that's already taken off");
})

// test 4    
// Setup
let plane3 = new Plane;

testAirport3.land(plane3)

test.it("Prevent asking the airport to land a plane that's already landed", function() {
    // Execute, Verify
    test.expect(plane3.status).toEqual('landed');
})

// test 5    
// Setup
let testAirport4 = new Airport

test.it("Prevent asking the airport to land a plane that's already landed at a different airport", function() {
    // Execute, Verify
    test.expect(testAirport4.land(plane3)).toEqual("Can't land a plane that's already landed");
})