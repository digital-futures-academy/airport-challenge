const test = require('../spec/test-framework.js')
const Airport = require('../src/airport.js')
const Plane = require('../src/plane.js')

console.log("Airport#landPlane()")

const testAirport = () => {
 test.it("returns a string that plane has landed", function () {
  //   // setup test case #1
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
      heathrow.changeDefaultCapacity(400)
    // execute test case #1
    let actualOutput = 400
    // verify test case #1
    test.assertEquals(actualOutput,400)
    })
  
  test.it("returns plane will not land if airport capacity is above max capacity ", function () {
    // setup test case #1
      let banjulInt = new Airport()
      let plane3 = new Plane()
    // execute test case #1
    banjulInt.currentCapacity = 500
    let actualOutput = banjulInt.landPlane(plane3)
    // verify test case #1
    test.assertEquals(actualOutput, 'sorry cannot land plane')
    })
  
}
module.exports = testAirport