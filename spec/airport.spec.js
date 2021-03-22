const Plane = require('../src/plane');
const Weather = require('../src/weather');
const Airport = require('../src/airport');

test = require('./test-framework');

// User Story 1

console.log('\x1b[4m%s\x1b[0m', 'User Story 1');    
// Setup
let Heathrow = new Airport;
let planeE001 = new Plane;
let day3 = new Weather;
day3.cond = 0.5;

test.it('Instruct the airport to land a plane', function() {
    // Execute, Verify
    test.expect(JSON.stringify(Heathrow.land(planeE001, day3))).toEqual(JSON.stringify([planeE001]));
});

// User Story 3

console.log('\x1b[4m%s\x1b[0m', 'User Story 3'); 
// Test 1
// Setup
let Gatwick = new Airport;
let planeE002 = new Plane;
let planeE003 = new Plane;
let planeE004 = new Plane;
let planeE005 = new Plane;
let planeE006 = new Plane;
let planeE007 = new Plane;

Gatwick.land(planeE002, day3);
Gatwick.land(planeE003, day3);
Gatwick.land(planeE004, day3);
Gatwick.land(planeE005, day3);
Gatwick.land(planeE006, day3);

test.it('Prevent landing when the airport is full', function() {
    // Execute, Verify
    test.expect(Gatwick.land(planeE007, day3)).toEqual("Sorry this airport is full you can't land here");
});

// Test 2
// Setup
let Stansted = new Airport;
let planeE008 = new Plane;
let planeE009 = new Plane;
let planeE010 = new Plane;
let planeE011 = new Plane;
let planeE012 = new Plane;

Stansted.land(planeE008, day3);
Stansted.land(planeE009, day3);
Stansted.land(planeE010, day3);
Stansted.land(planeE011, day3);

test.it('Allowing planes to land up to the full airport capacity', function() {
    // Execute, Verify
    test.expect(JSON.stringify(Stansted.land(planeE012, day3))).toEqual(JSON.stringify([planeE008,planeE009,planeE010,planeE011,planeE012]));
});

// User Story 4

console.log('\x1b[4m%s\x1b[0m', 'User Story 4');    
// test 1
// Setup
let Luton = new Airport;
let planeE013 = new Plane;

Luton.land(planeE013, day3);

test.it('Instruct the airport to let a plane take off', function() {
    // Execute, Verify
    test.expect(JSON.stringify(Luton.takeOff(planeE013, day3))).toEqual(JSON.stringify([]));
});
    
// test 2
// Setup
let Manchester = new Airport;
let planeE014 = new Plane;
let planeE015 = new Plane;
let planeE016 = new Plane;

Manchester.land(planeE014, day3);
Manchester.land(planeE015, day3);
Manchester.land(planeE016, day3);

test.it('Instruct the airport to let a plane take off out of a collection of planes landed', function() {
    // Execute, Verify
    test.expect(JSON.stringify(Manchester.takeOff(planeE015, day3))).toEqual(JSON.stringify([planeE014,planeE016]));
});

// test 3
// Setup
let Liverpool = new Airport;

test.it('Planes can only take off from airports they are in', function() {
    // Execute, Verify
    test.expect(Liverpool.takeOff(planeE016, day3)).toEqual('Planes can only take off from airports they are in.');
});