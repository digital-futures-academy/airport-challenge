const SystemDesigner = require('../src/systemDesigner');
const Weather = require('../src/weather');
const Airport = require('../src/airport');

test = require('./test-framework');

let Heathrow = new Airport();

spec = () => { 
    
console.log('\x1b[4m%s\x1b[0m', 'User Story 1')    

test.it('Instruct the airport to land a plane', function() {
    // Setup, Execute, Verify
    test.expect(JSON.stringify(Heathrow.land('planeE001'))).toEqual(JSON.stringify(['planeE001']));
})

}

module.exports = spec;