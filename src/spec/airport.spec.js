const Airport = require('../airport.js');
const Plane = require('../plane.js');

describe('Checking planes\' movements', function(){
    it('Checks if the toLand() method works', function(){
        let airport = new Airport();
        let plane = new Plane();
        airport.toLand(plane);
        expect(airport.hangar.length).toBe(1);

    });
    it('Checks if you get an error message when try to land a plane which is already at the same hangar', function(){
        airport = new Airport();
        plane = new Plane();
        airport.toLand(plane);
        let result = airport.toLand(plane);
        expect(result).toBe(`Sorry, this ${plane} is already at the airport.`);
    });

    it ('Checks if the toTakeOff() method works', function(){
        airport = new Airport();
        plane = new Plane();
        let plane2 = new Plane();
        airport.toLand(plane);
        airport.toLand(plane2);
        airport.toTakeOff(plane2);
        expect(airport.hangar.length).toBe(1);

    });
    it('Checks if you get a confirmation about the plane leaving the airport', function(){
        airport = new Airport();
        plane = new Plane();
        let plane2 = new Plane();
        airport.toLand(plane);
        airport.toLand(plane2);
        result = airport.toTakeOff(plane2);
        expect(result).toBe(`This ${plane} has taken off from this aiport.`);
    });

    it('Checks if you get an error message about an airplane not being at an aiport tries to take off from there',function(){
        airport = new Airport();
        plane = new Plane();
        plane2 = new Plane ();
        airport.toLand(plane);
        result = airport.toTakeOff(plane2);
        expect(result).toBe(`This ${plane} is not at the airport.`);
    });
 
});




describe('Checks the capacity of the airport', function(){
    it('Checks if aiport is full', function(){
        airport = new Airport();
        plane = new Plane();
        plane2 = new Plane();
        let plane3 = new Plane();
        airport.toLand(plane);
        airport.toLand(plane2);
        airport.toLand(plane3);
        expect(airport.isFull()).toBe(true);
    });

    it('Checks if the capacity was overridden', function(){
        airport = new Airport(4);
        plane = new Plane();
        plane2 = new Plane();
        let plane3 = new Plane();
        airport.toLand(plane);
        airport.toLand(plane2);
        airport.toLand(plane3);
        expect(airport.isFull()).toBe(false);

    });
    it('Checks if you get an error message when you try to land a plane to a airport which is full', function(){
        airport = new Airport();
        plane = new Plane();
        plane2 = new Plane();
        let plane3 = new Plane();
        let plane4 = new Plane();
        airport.toLand(plane);
        airport.toLand(plane2);
        airport.toLand(plane3);
        result = airport.toLand(plane4);
        expect(result).toBe('You cannot land. This airport is full.');
    });
});


describe('Checks edge cases', function(){
    it('Checks if an airplane can land when it is already on ground at another airport', function(){
        airport = new Airport();
        let airport2 = new Airport();
        plane = new Plane();
        airport.toLand(plane);
        result = airport2.toLand(plane);
        expect(result).toBe(`This ${plane} is already at another aiport.`);
    });
});


