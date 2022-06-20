const test = require('../../test-framework.js')
const Airport = require('../../src/airport.js')

test.it('check if airport is full', () => {
    //arrange

    // act 
    let TestAirport = new Airport(0)

    const actualValue = TestAirport.isFull()
    //assert
    test.assertTrue(actualValue)

})



test.it('prevent landing when airport is full by throwing error', () => {
    //arrange
    const TestPlane = {
        name: 'plane1'
    }
    let airport = new Airport(0, 'sunny')

    const actualValue = airport.land(TestPlane)
    //assert
    test.assertTrue(actualValue instanceof Error)
})
