const test = require('../spec/test-framework.js')
const Airport = require('../src/airport.js')
const Plane = require('../src/plane.js')

console.log("Airport#landPlane()")

const testAirport = () => {
  test.it("returns an array containing a plane", function () {
    //   // setup test case #1
    let gatwick = new Airport();
    let input = 'plane 1';
    // execute test case #1
    let expectedOutput = [input];
    let actualOutput = gatwick.land(input);
    // verify test case #1
    test.assertEquals(JSON.stringify(actualOutput),(JSON.stringify(expectedOutput)));
})

  console.log("Airport#change default capacity")

    test.it("returns an airport capacity which overrides default ", function () {
    // setup test case #2
      let heathrow = new Airport()
      heathrow.capacity = 20
    // execute test case #2
      let actualOutput = heathrow.capacity
    // verify test case #2
    test.assertEquals(actualOutput,20)
    })
  
  console.log("Airport#landPlane()")

  test.it("returns plane will not land if airport capacity is above max capacity ", function () {
    // setup test case #3
      let banjulInt = new Airport()
      let plane3 = new Plane()
    // execute test case #3
    banjulInt.currentCapacity = 500
    let actualOutput = banjulInt.landPlane(plane3)
    // verify test case #3
    test.assertEquals(actualOutput, 'sorry cannot land plane')
  })
  
  console.log("Airport#takeOff()")

  test.it("returns plane location after takeOff", function () {
    // setup test case #4
      let blaiseDiagne = new Airport()
      let plane4 = new Plane()
    // execute test case #4
      let actualOutput = blaiseDiagne.takeOff(plane4)
    // verify test case #4
    test.assertEquals(actualOutput, 'left airport')
  })
  
}
module.exports = testAirport