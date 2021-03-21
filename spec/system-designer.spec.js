const SystemDesigner = require('../src/systemDesigner');
const Airport = require('../src/airport');

test = require('./test-framework');

// User story 2

console.log('\x1b[4m%s\x1b[0m', 'User Story 2')    
// Setup
let systemDesigner = new SystemDesigner;
let testAirport = new Airport

systemDesigner.overrideCapacity(testAirport, 20)

test.it('Default airport capacity that can be overridden as appropriate', function() {
    // Execute, Verify
    test.expect(testAirport.capacity).toEqual(20);
})