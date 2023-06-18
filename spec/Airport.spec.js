// const { assertEquals } = require('./testing-framework');
const Plane = require('../src/plane');
const Airport = require('../src/Airport');
const { describe, it, expect, beforeEach } = require('jasmine');


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
        expect(() => airport.land(plane2)).toThrow('Airport is full');
    });

    it('should allow a plane to take off from a airport', () => {
        airport.land(plane);
        airport.takeOff(plane);
        expect(plane.isLanded).toBe(false);
    });
    
    it('should prevent take off when the plane is not landed', () => {
        expect(() => airport.takeOff(plane)).toThrow('Plane is not landed');
    });

    it('should prevent landing a plane that is already landed', () => {
        plane.land();
        expect(() => airport.land(plane)).toThrow('Plane is already landed');
    });
});








// let actual, result, expected;

// const plane1 = new Plane('ABC');

// console.log('Test 1');
// console.log('=============================================');
// console.log('');

// console.log('Airport should be able to land a plane');

// // Arrange

// const airport = new Airport();
// expected = true;

// // Act 
// airport.land(plane1);
// actual = airport.hasPlane(plane1);

// // Assert
// result = assertEquals(actual, expected);

// // Report
// console.log(`Test 1: Plane is landed at the airport: ${result}`);
// console.log(`Test 1: ${result ? 'PASS' : 'FAIL'}`);
// console.log('');

// // Clean up
// airport.clearPlanes();
// result = undefined;
// actual = undefined;


// // New Test
// console.log('Test 2');
// console.log('=============================================');
// console.log('');

// console.log('Airport should be able to let a plane take off');

// // Arrange

// airport.land(plane1);
// expected = false;

// // Act 
// airport.takeOff(plane1);
// actual = airport.hasPlane(plane1);

// // Assert
// result = assertEquals(actual, expected);

// // Report
// console.log(`Test 2: Plane has taken off from the airport: ${result}`);
// console.log(`Test 2: ${result ? 'PASS' : 'FAIL'}`);
// console.log('');

// airport.clearPlanes();
// result = undefined;
// actual = undefined;