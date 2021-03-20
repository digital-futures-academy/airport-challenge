AssertEquals = require('../src/test-framework')
Airport = require('../src/airport')
Plane = require('../src/plane')
let testFramework = new AssertEquals()
let heathrow = new Airport('heathrow')
let boeing747 = new Plane('boeing747')

console.log('Tests on landPlane() - 1a - Can Airport land a Plane? (Does landPlane() produce correct string?)')
//Set-up
let expectedOutput1a = 'boeing747 has landed at heathrow'
//Execute
let actualOutput1a = heathrow.landPlane(boeing747)
//Validate
let result1a = testFramework.test(expectedOutput1a,actualOutput1a)
console.log(result1a)

console.log('1b - Does landed Plane get added to Airport list? (Does this.planeList receive plane?)' )
//Set-up
let expectedOutput1b = ['boeing747']
//Execute
let actualOutput1b = heathrow.planeList
//Validate
let result1b = testFramework.testForArrays(expectedOutput1b,actualOutput1b)
console.log(result1b)


console.log('1c - Does state of Plane class change from "Not Landed" to "Landed"? (Does this.isPlaneLanded turn to true?)')
//Set-up
let expectedOutput1c = true
//Execute
let actualOutput1c = boeing747.isPlaneLanded
//Validate
let result1c = testFramework.test(expectedOutput1c,actualOutput1c)
console.log(result1c)