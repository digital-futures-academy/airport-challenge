const Plane = require('../src/plane');
// const { describe, it, expect, beforeEach } = require('jasmine');

describe('Plane', () => {
    let plane;

    beforeEach(() => {
        plane = new Plane();
    });

    it('should initialize a plane as not landed', () => {
        expect(plane.isLanded).toBe(false);
    });

    it('should land the plane', () => {
        plane.land();
        expect(plane.isLanded).toBe(true);
    });

    it('should take off the plane', () => {
        plane.land();
        plane.takeOff();
        expect(plane.isLanded).toBe(false);
    }); 
});