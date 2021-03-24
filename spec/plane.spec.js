const test = require('../test-framework.js')
const Plane = require('../src/plane.js')

console.log('new Plane()')
test.it('has a default landed of false', function () {
  const plane = new Plane()

  test.assertEquals(plane.isLanded(), false)
})
console.log('Plane#land()')
test.it('sets landed to true', function () {
  const plane = new Plane()
  plane.land()

  test.assertEquals(plane.isLanded(), true)
})

console.log('Plane#takeoff()')
test.it('sets landed to false', function () {
  const plane = new Plane()
  plane.land()
  plane.takeoff()

  test.assertEquals(plane.isLanded(), false)
})
