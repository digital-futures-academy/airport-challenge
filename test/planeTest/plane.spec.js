const test = require('../../test-framework.js')
const Plane = require('../../src/plane.js')



test.it('creating a plane object', () => {
    //arrange
    const expectedValue = 'plane1'
    // act 
    let testPlane = new Plane(expectedValue)
    const actualValue = testPlane.name
    //assert
    test.assertEquals(expectedValue, actualValue)

})

test.it('plane has landed boolean property that determine if a plane has landed ', () => {
    //arrange
    let testPlane = new Plane('Plane004', true)
    // act 
    const actualValue = testPlane.landed
    //assert
    test.assertTrue(actualValue)

})


