const SystemDesigner = require('../src/systemDesigner');
const Plane = require('../src/plane');
const Weather = require('../src/weather');
const Airport = require('../src/airport');

test = require('./test-framework');

console.log('\x1b[4m%s\x1b[0m', 'User Story 1')    

let Heathrow = new Airport();

test.it('Instruct the airport to land a plane', function() {
    // Setup, Execute, Verify
    test.expect(JSON.stringify(Heathrow.land('planeE001'))).toEqual(JSON.stringify(['planeE001']));
})