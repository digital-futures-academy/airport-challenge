const test = require('../../test-framework.js')
const Airport = require('../../src/airport.js')

test.it('check if airport is full', () => {
    //arrange

    // act 
    let airport = new Airport(0)

    const actualValue = airport.isFull()
    //assert
    test.assertTrue(actualValue)

})



test.it('prevent landing when airport is full by throwing error', () => {
    //arrange
    const plane = {
        name: 'plane1'
    }
    let airport = new Airport(0)

    const actualValue = airport.land(plane)
    //assert
    test.assertTrue(actualValue instanceof Error)
})

// test.it('Airport starts with 0 planes initially', () => {
//     //arrange
//     let airport = new Airport()
//     // act  //assert
//     test.assertFalse(airport.airportList[0])

// })