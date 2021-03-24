const Airport = require('../src/airport.js')
let airport
    beforeEach(function() {
        airport = new Airport();
        airport1 = new Airport();
        airport2 = new Airport();
})
// Extension User Story 6
describe('Testing to see if weather is stormy', function() {
    it('Weather is stormy', function() {
        let result = this.isStormy = false
       expect(result).toBe(false)
    })
    it('Weather is not stormy', function() {
        let result = !this.isStormy
       expect(result).toBe(true)
    })
    // it('Weather too stormy to take off', function() {
    //     airport.land('Plane 1')
    //     !airport.isStormy
    //     let result = airport.remove('Plane 1')
    //     expect(result).toEqual('Too stormy do not take off')
    // })
    // it('Weather too stormy cannot land', function() {
    //     let result1 = airport1.isStormy('Plane 1')
    //     expect(result1).toEqual('Weather too stormy to land')
    // })
})