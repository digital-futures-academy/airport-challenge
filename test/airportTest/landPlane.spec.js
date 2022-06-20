const test = require('../../test-framework.js')
const Airport = require('../../src/airport.js')



test.it('be able to land a plane in the airport', () => {
    //arrange
    const testPlane = {
        name: 'plane1'
    }
    const expectedValue = testPlane
    // act 
    let testAirport = new Airport(3, 'sunny') // weather is set to sunny since default will generate a random weather and if its set to stormy the test will fail (because of the requirement  7 ).
    testAirport.land(testPlane)
    const actualValue = testAirport.airportList[0]
    //assert
    test.assertEquals(expectedValue, actualValue)

})

test.it('Airport starts with 0 planes initially', () => {
    //arrange
    let testAirport = new Airport()
    // act  //assert
    test.assertFalse(testAirport.airportList[0])

})









