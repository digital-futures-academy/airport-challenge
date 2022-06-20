const { assertEquals } = require("..test-framework")
const Airport = require("../src/plane")
const Plane = require("../src/plane")



console.log(`====Test 4====`)

//arrange 
const testName = `Test to prevent landing`
expectedOutput = `Airport full Do NOT land!`

//Act 
const plane1 = new Plane(`plane1`)
const plane2 = new Plane(`plane2`)
const plane3 = new Plane(`plane3`)
const plane4 = new Plane(`plane4`)
const plane5 = new Plane(`plane5`)
const plane6 = new Plane(`plane6`)
const plane7 = new Plane(`plane7`)
const plane8 = new Plane(`plane8`)
const plane9 = new Plane(`plane9`)
const plane10 = new Plane(`plane10`)
const plane11 = new Plane(`plane11`)

testAirport = newAirport()

actualOutput = testAirport.landplane(plane1.name)
actualOutput = testAirport.landplane(plane2.name)
actualOutput = testAirport.landplane(plane3.name)
actualOutput = testAirport.landplane(plane4.name)
actualOutput = testAirport.landplane(plane5.name)
actualOutput = testAirport.landplane(plane6.name)
actualOutput = testAirport.landplane(plane7.name)
actualOutput = testAirport.landplane(plane8.name)
actualOutput = testAirport.landplane(plane9.name)
actualOutput = testAirport.landplane(plane10.name)
actualOutput = testAirport.landplane(plane11.name)

result = assertEquals(expectedOutput, actualOutput)

console.log(`${testName}: ${results ? `PASS` : `FAIL`}`)