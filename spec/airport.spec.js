const Flight = require('../src/flight.js')
let plane = new Flight
let plane1 = new Flight
let plane2 = new Flight
let plane3 = new Flight
let plane4 = new Flight(15)
let plane5 = new Flight
let plane6 = new Flight

describe("landing", function() {
    it("Plane lands in airport", function() {
        let result = plane.land('plane 1')
        expect(result).toEqual(['plane 1'])
    })
    it("Plane doesn't lane if airport is full", function() {
        plane1.land('plane 1')
        plane1.land('plane 2')
        plane1.land('plane 3')
        plane1.land('plane 4')
        plane1.land('plane 5')
        plane1.land('plane 6')
        plane1.land('plane 7')
        plane1.land('plane 8')
        plane1.land('plane 9')
        plane1.land('plane 10')
        let result1 = plane1.land('plane 11')
        expect(result1).toEqual(`Sorry airport is full.`)
    })
})

describe("take off", function() {
    it("Plane successfully takes off", function() {
        plane2.land('Plane 1')
        let result2 = plane2.takeOff('Plane 1')
        expect(result2).toEqual('Plane 1 has taken off successfully.')
    })
    it("Cant take off if the plane is already flying", function() {
        let result3 = plane3.takeOff('Plane 1')
        expect(result3).toEqual('Plane 1 is already flying')
    })
})

describe("Changing the Capacity", function() {
    it("Airport can actually hold the new capacity", function() {
        plane4.land('plane')
        plane4.land('plane 1')
        plane4.land('plane 2')
        plane4.land('plane 3')
        plane4.land('plane 4')
        plane4.land('plane 5')
        plane4.land('plane 6')
        plane4.land('plane 7')
        plane4.land('plane 8')
        plane4.land('plane 9')
        plane4.land('plane 10')
        let result5 = plane4.land('plane 11')
        expect(result5).toEqual(['plane', 'plane 1', 'plane 2', 'plane 3', 'plane 4', 'plane 5', 'plane 6', 'plane 7', 'plane 8', 'plane 9', 'plane 10', 'plane 11'])
    })
})

describe("Can check if the aiport capacity is full", function() {
    it("true when the capacity is full", function() {
        plane5.land('plane 1')
        plane5.land('plane 2')
        plane5.land('plane 3')
        plane5.land('plane 4')
        plane5.land('plane 5')
        plane5.land('plane 6')
        plane5.land('plane 7')
        plane5.land('plane 8')
        plane5.land('plane 9')
        plane5.land('plane 10')
        let result6 = plane5.isFull()
        expect(result6).toEqual(true)
    })
    it("false when the capacity is not full", function() {
        let result7 = plane6.isFull()
        expect(result7).toEqual(false)
    })
})