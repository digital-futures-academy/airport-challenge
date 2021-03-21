AssertEquals = require('../src/test-framework')
Airport = require('../src/airport')
Plane = require('../src/plane')
let testFramework = new AssertEquals()
let heathrow = new Airport('Heathrow')
heathrow.storminess = 1
let boeing747 = new Plane('Boeing747')
let concorde = new Plane('Concorde')
let spitfire = new Plane('Spitfire')

console.log('Tests on takeOffPlane() - 3a - Can Airport Take Off a Plane? (Does takeOffPlane() produce correct string?)')
//Setup
heathrow.changeCapacity(10)
heathrow.landPlane(boeing747)
heathrow.landPlane(concorde)
let expectedOutput3a = 'Boeing747 has taken off from Heathrow'
//Execute
let actualOutput3a = heathrow.takeOffPlane(boeing747)
//Validate
let result3a = testFramework.test(expectedOutput3a,actualOutput3a)
console.log(result3a)

console.log('3b - Does taken off Plane get removed from Airport list? (Does this.planeList lose plane?)')
//Setup
let expectedOutput3b = ['Concorde']
//Execute
let actualOutput3b = heathrow.planeList
//Validate
let result3b = testFramework.testForArrays(expectedOutput3b,actualOutput3b)
console.log(result3b)

console.log('3c - Does state of Plane class change from "Landed" to "Not Landed"? (Does this.isPlaneLanded turn to false?)')
//Setup
let expectedOutput3c = false
//Execute
let actualOutput3c = boeing747.isPlaneLanded
//Validate
let result3c = testFramework.test(expectedOutput3c,actualOutput3c)
console.log(result3c)


