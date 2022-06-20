const test = require('../../test-framework.js')
const Airport = require('../../src/airport.js')


test.it('Airport has weather property', () => {
    //arrange
    let testAirport = new Airport(3, 'sunny')

    // act
    const actualValue = testAirport.weather

    //assert
    test.assertEquals('string', typeof actualValue)

})

test.it('set random weather', () => {
    //arrange
    let testAirport = new Airport(3)

    // act
    const actualValue = testAirport.randomWeather()

    //assert
    test.assertEquals('string', typeof actualValue)
    test.assertEquals('string', typeof testAirport.weather)


})


test.it('throws error when a plan tries to take off in stormy weather', () => {
    //arrange
    let testPlane = {
        name: 'plane1',
        landed: false
    }

    let testAirport = new Airport(3, 'sunny')
    testAirport.land(testPlane)
    testAirport.weather = 'stormy'

    // act
    const actualValue = testAirport.takeOff(testPlane)

    //assert
    test.assertTrue(actualValue?.message === `Weather is stormy`)

})
