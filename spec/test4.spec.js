AssertEquals = require('../src/test-framework')
Airport = require('../src/airport')
Plane = require('../src/plane')
let testFramework = new AssertEquals()
let heathrow = new Airport('Heathrow')
let boeing747 = new Plane('Boeing747')
let concorde = new Plane('Concorde')
let spitfire = new Plane('Spitfire')

console.log('Tests to remove double landings or phantom take-offs - 4a - Does landPlane() return warning string?')
//Setup
heathrow.changeCapacity(15)
heathrow.landPlane(boeing747)
let expectedOutput4a = 'Cannot land Boeing747 as already landed at Heathrow'
//Execute
let actualOutput4a = heathrow.landPlane(boeing747)
//Validate
let result4a = testFramework.test(expectedOutput4a,actualOutput4a)
console.log(result4a)

console.log('4b - Does this.planeIsLandedHere show Airport as expected when landed?')
//Setup
let expectedOutput4b = 'Heathrow'
//Execute
let actualOutput4b = boeing747.planeIsLandedHere
//Validate
let result4b = testFramework.test(expectedOutput4b,actualOutput4b)
console.log(result4b)

console.log('4c - Does this.planeIsLandedHere change as expected if plane takes off?')
//Setup
heathrow.takeOffPlane(boeing747)
let expectedOutput4c = 'Nowhere'
//Execute
let actualOutput4c = boeing747.planeIsLandedHere
//Validate
let result4c = testFramework.test(expectedOutput4c,actualOutput4c)
console.log(result4c)

console.log('4d - Does correct warning string return if trying to takeOffPlane() that isnt landed')
//Setup
let expectedOutput4d = 'Spitfire is not landed at Heathrow'
//Execute
let actualOutput4d = heathrow.takeOffPlane(spitfire)
//Validate
let result4d = testFramework.test(expectedOutput4d,actualOutput4d)
console.log(result4d)

