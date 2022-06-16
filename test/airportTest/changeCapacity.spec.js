const test = require('../../test-framework.js')
const Airport = require('../../src/airport.js')



test.it('airport start with a default capacity of 0', () => {
    //arrange
    const expectedValue = 0

    // act 
    let airport = new Airport()
    const actualValue = airport.capacity
    //assert
    test.assertEquals(expectedValue, actualValue)

})

test.it('Airport can change capacity', () => {
    //arrange
    const expectedValue = 5

    // act 
    let airport = new Airport()
    airport.changeCapacity(5)
    const actualValue = airport.capacity
    //assert
    test.assertEquals(expectedValue, actualValue)

})
