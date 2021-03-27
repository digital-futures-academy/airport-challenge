Airport = require('../src/airport.js');
Airplane = require('../src/airplane-class.js');
Weather = require('../src/weather.js');


let exampleAirport, examplePlane, exampleAirport2, examplePlane2, examplePlane3, examplePlane4, examplePlane5;


describe('Check landing functionality', function() {
    beforeEach(() => {
        exampleAirport = new Airport();
        examplePlane = new Airplane();
    });

    it('Check if plane can be landed', function() {
        let result = exampleAirport.land(examplePlane, Weather, 'sunny');
        expect(result).toBe('landed');
    });

    it('Check if plane can be landed if airport is full', function() {
        examplePlane2 = new Airplane;
        examplePlane3 = new Airplane;
        examplePlane4 = new Airplane;
        examplePlane5 = new Airplane;
        examplePlane6 = new Airplane;
        exampleAirport.land(examplePlane, Weather, 'sunny');
        exampleAirport.land(examplePlane2, Weather, 'sunny');
        exampleAirport.land(examplePlane3, Weather, 'sunny');
        exampleAirport.land(examplePlane4, Weather, 'sunny');
        exampleAirport.land(examplePlane5, Weather, 'sunny');
        let result = exampleAirport.land(examplePlane6, Weather, 'sunny');
        expect(result).toBe('airport at full capacity');
    });

    it('Check if plane status reflects landing', function() {
        exampleAirport.land(examplePlane, Weather, 'sunny');
        let result = examplePlane.isLanded();
        expect(result).toBe(true);
    });

    //*
    it('Check if plane with status \'landed\' can be landed again', function() {
        examplePlane.status = true;
        let result = exampleAirport.land(examplePlane, Weather, 'sunny');
        expect(result).toBe('this plane has already landed');
    });

    //*
    it('Check if plane already at airport can be landed again', function() {
        exampleAirport.land(examplePlane, Weather, 'sunny');
        let result = exampleAirport.land(examplePlane, Weather, 'sunny');
        expect(result).toBe('airplane already at airport');
    });
});


describe('Check airport capacity', function() {
    beforeEach(() => {
        exampleAirport = new Airport();
    });
    it('Check if capacity can be changed', function() {
        exampleAirport2 = new Airport(10);
        let result = exampleAirport2.maxCapacity;
        expect(result).toBe(10);
    });
});



describe('Check takeoff functionality', function() {
    beforeEach(() => {
        exampleAirport = new Airport();
        examplePlane = new Airplane();
    });

    it('Check if plane can take off', function() {
        exampleAirport.land(examplePlane, Weather, 'sunny');
        let result = exampleAirport.takeoff(examplePlane, Weather, 'sunny');
        expect(result).toBe('plane taken off');
    });

    it('Check if plane status reflects take off', function() {
        exampleAirport.land(examplePlane, Weather, 'sunny');
        exampleAirport.takeoff(examplePlane, Weather, 'sunny');
        let result = examplePlane.isLanded();
        expect(result).toBe(false);
    });

    it('Check if plane with status \'taken off\' can take off', function() {
        exampleAirport.land(examplePlane, Weather, 'sunny');
        examplePlane.status = false;
        result = exampleAirport.takeoff(examplePlane, Weather, 'sunny');
        expect(result).toBe('this plane has already taken off');
    });

    it('Check if plane not at airport can take off', function() {
        let result = exampleAirport.takeoff(examplePlane, Weather, 'sunny');
        console.log(exampleAirport.airplaneArr);
        expect(result).toBe('airplane not at airport');
    });
});


describe('Check functionality under different weather conditions', function() {
    beforeEach(() => {
        exampleAirport = new Airport();
        examplePlane = new Airplane();
    });

    it('Check if plane can land when the weather is stormy', function() {
        exampleAirport.land(examplePlane, Weather, 'stormy');
        let result = exampleAirport.land(examplePlane, Weather, 'stormy');
        expect(result).toBe('weather too stormy to land');
    });

    it('Check if plane can take off when the weather is stormy', function() {
        exampleAirport.land(examplePlane, Weather, 'stormy');
        let result = exampleAirport.takeoff(examplePlane, Weather, 'stormy');
        expect(result).toBe('weather too stormy to takeoff');
    });
});
