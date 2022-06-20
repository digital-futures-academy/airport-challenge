const test = require('../../test-framework.js')
const Airport = require('../../src/airport.js')



test.it('returns true if a plane is in the airport', () => {
    //arrange
    let testPlane = {
        name: 'plane1'
    }
    let testAirport = new Airport(3)
    testAirport.weather = 'sunny' // test fails sometimes if weather is not defined as it is generated randomly by default
    testAirport.land(testPlane)

    // act 
    const actualValue = testAirport.isPlaneInAirport(testPlane)
    //assert
    test.assertTrue(actualValue)

})


test.it('throws error when a plan that is not in airport tries to take off', () => {
    //arrange
    let testPlane = {
        name: 'plane1'
    }
    let testAirport = new Airport(3, 'sunny') /// test fails sometimes if weather is not defined as it is generated randomly by default

    // act
    const actualValue = testAirport.takeOff(testPlane)

    //assert
    test.assertTrue(actualValue instanceof Error)

})

