const Airport = require('../src/airport.js')
let airport
    beforeEach(function() {
        airport = new Airport();
        airport1 = new Airport();
        airport2 = new Airport();
})
        // User Story 1 
describe("Checks planes can land/take off from airport", function() {
    it("Plane 1 lands", function() {
        let result = airport.land('plane 1')
        expect(result).toEqual(['plane 1'])
    }) 
    it("Lands Planes 2 & 3", function() {
        airport1.land('Plane 1')
        airport1.land('Plane 2')
        let input = 'Plane 3'
        let result1 = airport1.land(input)
        expect(result1).toEqual(['Plane 1', 'Plane 2', 'Plane 3'])
})
// User Story 4
    it("Plane 1 takes off", function() {
        this.isStormy === false
        airport.land('Plane 1')
        let result = airport.remove('Plane 1')
        expect(result).toEqual([ ])
    }) 
    it("Confirm plane thats taken off has actually left", function() {
        this.isStormy === false
        airport1.land('Plane 1')
        airport1.land('Plane 2')
        let input = 'Plane 2'
        let result1 = airport1.remove(input)
        expect(result1).toEqual(['Plane 1'])
    })
// User Story 5
    it('Plane already landed here', function(){
        airport.land('Plane 1')
        let result = airport.isLanded('Plane 1')
        expect(result).toEqual('Plane already landed')
    })
    it('Plane already landed elsewhere', function() {
        airport1.land('Plane 1')
        airport1.remove('Plane 1')
        let result1 = !this.landedElsewhere
        expect(result1).toBe(true)
    })
    it('Plane not here to take off', function(){
        airport2.land('Plane 1')
        let result2 = airport2.notHere('Plane 2')
        expect(result2).toEqual('Plane is not here to take off')
    })
})