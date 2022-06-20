const test = require('../../test-framework.js')
const Airport = require('../../src/airport.js')



test.it('be able let a plane to take off from the airport', () => {
    //arrange
    const testPlane = {
        name: 'plane1'
    }
    let testAirport = new Airport(3, 'sunny')  /// test fails sometimes if weather is not defined as it is generated randomly by default
    testAirport.land(testPlane)
    const expectedValue = 0

    // act 
    testAirport.takeOff(testPlane)
    const actualValue = testAirport.airportList.length

    //assert
    test.assertEquals(expectedValue, actualValue)
    test.assertFalse(testAirport.airportList.includes(testPlane))


})


