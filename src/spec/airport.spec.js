const Airport = require('../airport.js');
const Plane = require('../plane.js');
const Weather = require('../weather.js');

describe('Checking planes\' movements', function(){
    it('Checks if the toLand() method works', function(){
        let airport = new Airport();
        let plane = new Plane();
        let weather = new Weather();
        airport.toLand(plane, weather);
        expect(airport.hangar.length).toBe(1);

    });
    it('Checks if you get an error message when try to land a plane which is already at the same hangar', function(){
        airport = new Airport();
        plane = new Plane();
        weather = new Weather();
        airport.toLand(plane,weather);
        let result = airport.toLand(plane,weather);
        expect(result).toBe(`Sorry, this ${plane} is already at the airport.`);
    });

    it ('Checks if the toTakeOff() method works', function(){
        airport = new Airport();
        plane = new Plane();
        let plane2 = new Plane();
        weather = new Weather();
        airport.toLand(plane, weather);
        airport.toLand(plane2, weather);
        airport.toTakeOff(plane2, weather);
        expect(airport.hangar.length).toBe(1);

    });
    it('Checks if you get a confirmation about the plane leaving the airport', function(){
        airport = new Airport();
        plane = new Plane();
        let plane2 = new Plane();
        weather = new Weather();
        airport.toLand(plane, weather);
        airport.toLand(plane2, weather);
        result = airport.toTakeOff(plane2, weather);
        expect(result).toBe(`This ${plane} has taken off from this aiport.`);
    });

    it('Checks if you get an error message about an airplane not being at an aiport tries to take off from there',function(){
        airport = new Airport();
        plane = new Plane();
        plane2 = new Plane ();
        weather = new Weather();
        airport.toLand(plane, weather);
        result = airport.toTakeOff(plane2, weather);
        expect(result).toBe(`This ${plane} is not at the airport.`);
    });
 
});




describe('Checks the capacity of the airport', function(){
    it('Checks if aiport is full', function(){
        airport = new Airport();
        plane = new Plane();
        plane2 = new Plane();
        plane3 = new Plane();
        weather = new Weather();
        airport.toLand(plane,weather);
        airport.toLand(plane2,weather);
        airport.toLand(plane3,weather);
        expect(airport.isFull()).toBe(true);
    });

    it('Checks if the capacity was overridden', function(){
        airport = new Airport(4);
        plane = new Plane();
        plane2 = new Plane();
        let plane3 = new Plane();
        weather = new Weather();
        airport.toLand(plane,weather);
        airport.toLand(plane2,weather);
        airport.toLand(plane3, weather);
        expect(airport.isFull()).toBe(false);

    });
    it('Checks if you get an error message when you try to land a plane to a airport which is full', function(){
        airport = new Airport();
        plane = new Plane();
        plane2 = new Plane();
        let plane3 = new Plane();
        let plane4 = new Plane();
        weather = new Weather();
        airport.toLand(plane,weather);
        airport.toLand(plane2,weather);
        airport.toLand(plane3,weather);
        result = airport.toLand(plane4,weather);
        expect(result).toBe('You cannot land. This airport is full.');
    });
});


describe('Checks edge cases', function(){
    it('Checks if an airplane can land when it is already on ground at another airport', function(){
        airport = new Airport();
        let airport2 = new Airport();
        plane = new Plane();
        weather = new Weather();
        airport.toLand(plane,weather);
        result = airport2.toLand(plane,weather);
        expect(result).toBe(`This ${plane} is already at another aiport.`);
    });
    it('Checks if airport prevents plane from landing when weather is stormy', function(){
        airport = new Airport();
        plane = new Plane();
        weather = new Weather('stormy');
        result = airport.toLand(plane, weather);
        expect(result).toBe('The plane cannot land because the weather is stormy.');
    });
    it('Checks if airport prevents plane from taking off when weather is stormy.', function(){
        airport = new Airport();
        plane = new Plane();
        weather = new Weather();
        airport.toLand(plane,weather);
        weather2 = new Weather('stormy');
        result = airport.toTakeOff(plane, weather2);
        expect(result).toBe('The plane cannot take off because the weather is stormy.');
    });
});
