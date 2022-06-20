const test = require('../../test-framework.js')
const Airport = require('../../src/airport.js')

test.it('Prevent landing a plane that has already landed by throwing error', () => {
    //arrange
    let testPlane = {
        name: 'plane1',
        landed: true
    }
    let testAirport = new Airport(3)

    // act
    const actualValue = testAirport.land(testPlane)

    //assert
    test.assertTrue(actualValue instanceof Error)

})


test.it('landing a plane will change the landed property of the plane to true', () => {
    //arrange
    let testPlane = {
        name: 'plane1',
        landed: false
    }
    let testAirport = new Airport(3)
    testAirport.weather = 'sunny'
    // act
    testAirport.land(testPlane)
    //assert
    test.assertTrue(testPlane.landed)

})

test.it('taking off a plane will change the landed property of the plane to false ', () => {
    //arrange
    let testPlane = {
        name: 'plane1',
        landed: false
    }
    let testAirport = new Airport(5)
    testAirport.weather = 'sunny'
    testAirport.land(testPlane)
    // act
    testAirport.takeOff(testPlane)
    //assert
    test.assertFalse(testPlane.landed)

})


