// const { assertEquals } = require('./testing-framework');
const Plane = require('../src/plane');
const Airport = require('../src/airport');
// const { describe, it, expect, beforeEach } = require('jasmine');


describe('Airport', () => {
    let airport;
    let plane;

    beforeEach(()=>{
        airport = new Airport;
        plane = new Plane;
    });

    it('should land a plane at the airport', () => {
        airport.land(plane);
        expect(plane.isLanded).toBe(true);
        expect(airport.planes).toContain(plane);
    });
    
    it('should initialize an airport with a default capacity', () => {
        expect(airport.capacity).toBe(10);
    });
    
    it('should prevent landing when the airport is full', () => {
        airport.capacity = 1;
        const plane2 = new Plane();

        airport.land(plane);
        expect(() => airport.land(plane2)).toThrowError('Airport is full');
    });

    it('should allow a plane to take off from a airport', () => {
        airport.land(plane);
        airport.takeOff(plane);
        expect(plane.isLanded).toBe(false);
    });
    
    it('should prevent take off when the plane is not landed', () => {
        expect(() => airport.takeOff(plane)).toThrowError('Plane is not landed');
    });

    it('should prevent landing a plane that is already landed', () => {
        plane.land();
        expect(() => airport.land(plane)).toThrowError('Plane is already landed');
    });
      
      it('should add the landed plane to the airport', () => {
        airport.land(plane);
        expect(airport.planes).toContain(plane);
      });
});


