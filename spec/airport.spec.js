const test = require('../test-framework.js')
const Airport = require('../src/airport.js')

class PlaneDouble {
  constructor () {
    this._landed = false
  }

  isLanded () {
    return this._landed
  }

  land () {
    this._landed = true
  }

  takeoff () {
    this._landed = false
  }
}

console.log('new Airport()')
test.it('has a default capacity of 2', function () {
  const airport = new Airport()

  test.assertEquals(airport.capacity, 2)
})
test.it('has a capacity that can be overriden', function () {
  const airport = new Airport(1)

  test.assertEquals(airport.capacity, 1)
})

console.log('Airport#land()')
test.it('returns an array of length 1', function () {
  const plane = new PlaneDouble()
  const airport = new Airport()

  const result = airport.land(plane)

  test.assertEquals(result.length, 1)
})
test.it('returns an array including plane', function () {
  const plane = new PlaneDouble()
  const airport = new Airport()

  const result = airport.land(plane)

  test.assertEquals(result.includes(plane), true)
})
test.it('returns an array including planes', function () {
  const plane = new PlaneDouble()
  const plane2 = new PlaneDouble()
  const airport = new Airport()
  airport.land(plane)

  const result = airport.land(plane2)

  test.assertEquals(result.includes(plane), true)
  test.assertEquals(result.includes(plane2), true)
})

test.it('prevents landing when the airport is full', function () {
  const plane = new PlaneDouble()
  const plane2 = new PlaneDouble()
  const airport = new Airport(1)
  airport.land(plane)

  const result = airport.land(plane2)

  test.assertEquals(result, 'soz, airport full')
})
test.it('prevents landing when plane already landed', function () {
  const plane = new PlaneDouble()
  const airport = new Airport()
  airport.land(plane)
  const result = airport.land(plane)

  test.assertEquals(result, 'soz, plane already landed at the airport')
})

test.it('prevents landing when plane already landed even if elsewhere', function () {
  const plane = new PlaneDouble()
  const airport = new Airport()
  const airport2 = new Airport()
  airport2.land(plane)

  const result = airport.land(plane)
  test.assertEquals(result, 'soz, plane already landed elsewhere')
})

console.log('Airport#takeoff()')
test.it('returns an array of length 1', function () {
  const plane = new PlaneDouble()
  const airport = new Airport()
  airport.land(plane)
  const result = airport.takeoff(plane)

  test.assertEquals(result.length, 0)
})
test.it('returns an array without plane that took off', function () {
  const plane = new PlaneDouble()
  const airport = new Airport()
  airport.land(plane)
  const result = airport.takeoff(plane)

  test.assertEquals(result.includes(plane), false)
})
test.it('returns message if plane not there', function () {
  const plane = new PlaneDouble()
  const airport = new Airport()
  const airport2 = new Airport()
  airport2.land(plane)
  const result = airport.takeoff(plane)

  test.assertEquals(result, 'soz, plane not here')
})
test.it('can not ask plane to takeoff if flying', function () {
  const plane = new PlaneDouble()
  const airport = new Airport()
  airport.land(plane)
  airport.takeoff(plane)
  const result = airport.takeoff(plane)
  console.log(result)
  test.assertEquals(result, 'soz, plane already taken off')
})
