const test = require('../spec/test-framework.js')
const Airport = require('../src/airport.js')
const Plane = require('../src/plane.js')

console.log("Airport#landPlane()")

const testAirport = () => {
  test.it("returns a string that plane has landed", function () {
    // setup test case #1
    let gatwick = new Airport()
    let plane = new Plane()
    // execute test case #1
    let actualOutput = gatwick.landPlane(plane)
    // verify test case #1
    test.assertEquals(actualOutput, 'you are free to land' + plane)
  })

}
module.exports = testAirport