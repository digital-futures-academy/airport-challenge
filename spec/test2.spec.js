AssertEquals = require('../src/test-framework')
Airport = require('../src/airport')
Plane = require('../src/plane')
let testFramework = new AssertEquals()
let heathrow = new Airport('Heathrow')
let boeing747 = new Plane('Boeing747')
let concorde = new Plane('Concorde')

console.log('Tests on this.airportCapacity - 2a - Does airport capacity have a default setting? (Does this.airportCapacity = 1 if not touched?)')
//Setup
let expectedOutput2a = 1
//Execute
let actualOutput2a = heathrow.airportCapacity
//Validate
let result2a = testFramework.test(expectedOutput2a,actualOutput2a)
console.log(result2a)

console.log('2b - Can this.airportCapacity be overridden/altered? (Does changeCapacity() function correctly?)')
//Setup
heathrow.changeCapacity(15)
let expectedOutput2b = 15
//Execute
let actualOutput2b = heathrow.airportCapacity
//Validate
let result2b = testFramework.test(expectedOutput2b,actualOutput2b)
console.log(result2b)

console.log('2c - Is landing now prohibited when airport is full? (I.e if this.planeList.length = this.airportCapacity is landPlane() refused?)')
console.log('Part 1 - Is warning string returned?')
//Setup
heathrow.landPlane(boeing747)
heathrow.changeCapacity(1)
let expectedOutput2c = 'Heathrow is full - Concorde cannot land'
//Execute
let actualOutput2c = heathrow.landPlane(concorde)
//Validate
let result2c = testFramework.test(expectedOutput2c,actualOutput2c)
console.log(result2c)

console.log('Part 2 - Check plane has not entered this.planeList')
//Setup
let expectedOutput2d = ['Boeing747']
//Execute
let actualOutput2d = heathrow.planeList
//Validate
let result2d = testFramework.testForArrays(expectedOutput2d,actualOutput2d)
console.log(result2d)


