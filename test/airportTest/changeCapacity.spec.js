const test = require('../../test-framework.js')
const Airport = require('../../src/airport.js')



test.it('airport start with a default capacity of 10', () => {
    //arrange
    const expectedValue = 10

    // act 
    let testAirport = new Airport()
    const actualValue = testAirport.capacity
    //assert
    test.assertEquals(expectedValue, actualValue)

})

test.it('Airport can change capacity', () => {
    //arrange
    let airport = new Airport()
    const initialCapacity = airport.capacity
    const expectedValue = 5
    // act 
    airport.changeCapacity(5)
    const actualValue = airport.capacity
    //assert
    test.assertEquals(expectedValue, actualValue)
    test.assertNotEquals(initialCapacity, actualValue)

})
