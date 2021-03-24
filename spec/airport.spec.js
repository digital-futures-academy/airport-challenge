const Airport = require('../src/airport');
const Plane = require('../src/plane.js');
const assertEquals = require('../test-framework');

describe('Testing airport functionality', function(){
    it('Testing to see if the airport can land a plane', function(){
        let airport = new Airport();
        let plane = new Plane('Plane One');
        let result = airport.landPlane(plane);
        expect(result.length).toBe(1);
    });
    it('Testing if airport capacity can be overriden', function(){
        let airport = new Airport(20);
        let result = airport.capacity;
        expect(result).toBe(20);
    });
    it('Testing to see if we cannot land planes if airport is full', function(){
        let airport = new Airport(2);
        let plane = new Plane('1');
        let planeTwo = new Plane('2');
        let planeThree = new Plane('3');
        airport.landPlane(plane);
        airport.landPlane(planeTwo);
        result = airport.landPlane(planeThree);
        expect(result).toBe('cannot land plane - airport is full');
    });
    it('Testing to see if aiport has successfully taken off a plane', function() {
        let airport = new Airport();
        let plane = new Plane('747');
        airport.landPlane(plane);
        result = airport.takeOff(plane);
        expect(result.length).toBe(0);
    });
    it('Testing to see if blocked from taking off plane that doesnt exist', function() {
        let airport = new Airport();
        let plane = new Plane('Plane');
        result = airport.takeOff(plane);
        expect(result).toBe('cannot takeoff plane that is not in the hangar');
    });
    it('Testing to see if blocked from landing plane already in the hangar', function(){
        let airport = new Airport();
        let plane = new Plane('Plane Four');
        airport.landPlane(plane);
        result = airport.landPlane(plane);
        expect(result).toBe('cannot land plane as it is already in the hangar');
    });
});
 


