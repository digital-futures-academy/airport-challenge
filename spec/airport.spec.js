const SystemDesigner = require('../src/systemDesigner');
const Plane = require('../src/plane');
const Weather = require('../src/weather');
const Airport = require('../src/airport');

test = require('./test-framework');

// User Story 1

console.log('\x1b[4m%s\x1b[0m', 'User Story 1');    
// Setup
let Heathrow = new Airport();

test.it('Instruct the airport to land a plane', function() {
    // Execute, Verify
    test.expect(JSON.stringify(Heathrow.land('planeE001'))).toEqual(JSON.stringify(['planeE001']));
})

// User Story 3

console.log('\x1b[4m%s\x1b[0m', 'User Story 3'); 
// Test 1
// Setup
let Gatwick = new Airport();

Gatwick.land('planeE002');
Gatwick.land('planeE003');
Gatwick.land('planeE004');
Gatwick.land('planeE005');
Gatwick.land('planeE006');

test.it('Prevent landing when the airport is full', function() {
    // Execute, Verify
    test.expect(Gatwick.land('planeE007')).toEqual("Sorry this airport is full you can't land here");
})

// Test 2
// Setup
let Stansted = new Airport();

Stansted.land('planeE008');
Stansted.land('planeE009');
Stansted.land('planeE010');
Stansted.land('planeE011');

test.it('Allowing planes to land up to the full airport capacity', function() {
    // Execute, Verify
    test.expect(JSON.stringify(Stansted.land('planeE012'))).toEqual(JSON.stringify(['planeE008','planeE009','planeE010','planeE011','planeE012']));
})