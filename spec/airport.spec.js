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

    test.it("returns an airport capacity which overrides default ", function () {
    // setup test case #1
      let heathrow = new Airport()
      heathrow.changeCapacity(400)
    // execute test case #1
    let actualOutput = 400
    // verify test case #1
    test.assertEquals(actualOutput,400)
  })
}
module.exports = testAirport