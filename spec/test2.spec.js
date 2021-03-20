AssertEquals = require('../src/test-framework')
Airport = require('../src/airport')
Plane = require('../src/plane')
let testFramework = new AssertEquals()
let heathrow = new Airport('heathrow')
let boeing747 = new Plane('boeing747')

console.log('Tests on this.airportCapacity - 2a - Does airport capacity have a default setting? (Does this.airportCapacity = 1 if not touched?)')
//Setup
let expectedOutput2a = 1
//Execute
let actualOutput2a = heathrow.

