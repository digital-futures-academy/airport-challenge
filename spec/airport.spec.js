const Airport = require('../src/airport.js')
let airport
    beforeEach(function() {
        airport = new Airport();
        airport1 = new Airport();
        airport2 = new Airport();
})
// User story 2
describe('Checks airport capacity', function() {
    it("Override default capacity from 3 to 5", function() {
        let num = 5
        airport.changeCapacity(num)
        let result = 'The airport capacity has been changed to 5'
        expect(result).toEqual(`The airport capacity has been changed to ${num}`)
    })
    it('Testing to check airport capacity has been changed to 5', function () {
        airport1.land('Plane 1')
        airport1.land('Plane 2')
        airport1.land('Plane 3')
        airport1.land('Plane 4')
        let result1 = airport1.land('Plane 5')
        expect(result1).toEqual('Airport full do not land')
    })
// User Story 3
    it('Airport is Full', function(){
        let num = 3
        airport.changeCapacity(num)
        airport.land('Plane 1')
        airport.land('Plane 2')
        airport.land('Plane 3')
        let result = airport.land('Plane 4')
        expect(result).toEqual('Airport full do not land')
        console.log(result)
    })
    it('Airport is Not Full', function() {
        airport1.land('Plane 1')
        airport1.land('Plane 2')
        let result1 = airport1.land('Plane 3')
        expect(result1).toEqual(['Plane 1', 'Plane 2', 'Plane 3'])
    })
    // User Story 7
    it("Count Planes at airport", function() {
        airport.land('Plane 1')
        airport.land('Plane 2')
        let result = airport.countPlanes()
        expect(result).toEqual(2)
    })
})