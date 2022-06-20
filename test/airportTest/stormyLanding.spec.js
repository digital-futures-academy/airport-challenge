const test = require('../../test-framework.js')
const Airport = require('../../src/airport.js')





test.it('throws error when a plan tries to land in stormy weather', () => {
    //arrange
    let testPlane = {
        name: 'plane1',
        landed: false
    }

    let testAirport = new Airport(3, 'stormy')


    // act
    const actualValue = testAirport.land(testPlane)

    //assert
    test.assertTrue(actualValue?.message === `Weather is stormy`)

})
