const test = require('../test-framework.js')
const Airport = require('../src/airport.js')
const Plane = require('../src/plane.js')

console.log('Airport Challenge Features')
test.it("plane can't land at two airports simultaneously", function () {
  const heathrow = new Airport()
  const gatwick = new Airport()
  const plane1 = new Plane()
  heathrow.land(plane1)
  const result = gatwick.land(plane1)

  test.assertEquals(result, 'soz, plane already landed elsewhere')
})

test.it("plane can't takeoff from two airports simultaneously", function () {
  const heathrow = new Airport()
  const gatwick = new Airport()
  const plane1 = new Plane()
  heathrow.land(plane1)
  const result = gatwick.takeoff(plane1)

  test.assertEquals(result, 'soz, plane not here')
})

test.it('landing and taking off the same plane', function () {
  const heathrow = new Airport()
  const gatwick = new Airport()
  const plane1 = new Plane()

  test.assertEquals(heathrow.land(plane1).length, 1)
  test.assertEquals(plane1.isLanded(), true)

  test.assertEquals(heathrow.takeoff(plane1).length, 0)
  test.assertEquals(plane1.isLanded(), false)

  test.assertEquals(gatwick.land(plane1).length, 1)
  test.assertEquals(plane1.isLanded(), true)

  test.assertEquals(gatwick.takeoff(plane1).length, 0)
  test.assertEquals(plane1.isLanded(), false)
})
