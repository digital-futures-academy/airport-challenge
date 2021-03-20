const test = require('../test_framwork');
const Airport = require('../src/airport');
const Plane = require('../src/plane');
const Weather = require('../src/weather');

const fullMess = 'Airport is full unable to land.';
const badWeatherMess = 'Bad Weather unable to land.';
const planeNotLandedMess = 'Plane is not in the airport';
const badWeather2Mess = 'Bad Weather unable to takeoff';

console.log('Landing a plane');

test.it('Can land a plane', function(){
    let airport = new Airport();
    let plane = new Plane('Boeing 247');
    let weather = new Weather();
    let result = airport.land(plane._plane, weather._stormy, plane);
    test.assertEquals(result.length, 1);
});

test.it('The flying property has changed', function(){
    let airport = new Airport();
    let plane = new Plane('Boeing 247');
    let weather = new Weather();
    airport.land(plane._plane, weather._stormy, plane);
    let result = plane._flying;
    test.assertEquals(result, false);
});

test.it('Can\'t land a plane at a full airport', function(){
    let airport = new Airport(1);
    let plane = new Plane('Boeing 247');
    let plane2 = new Plane('Boeing 747');
    let weather = new Weather();
    airport.land(plane._plane, weather._stormy, plane);
    let result = airport.land(plane2._plane, weather._stormy, plane2);
    test.assertEquals(result, fullMess);
});

test.it('Can\'t Land in bad weather', function(){
    let airport = new Airport();
    let plane = new Plane('Boeing 247');
    let weather = new Weather(true);
    let result = airport.land(plane._plane, weather._stormy, plane);
    test.assertEquals(result, badWeatherMess);
});

console.log('Takeoff');

test.it('Can takeoff a landed plane', function(){
    let airport = new Airport();
    let plane = new Plane('Boeing 247');
    let weather = new Weather();
    airport.land(plane._plane, weather._stormy, plane);
    let result = airport.takeoff(plane._plane, weather._stormy, plane);
    test.assertEquals(result.length, 0);
});

test.it('Flying property has been changed', function(){
    let airport = new Airport();
    let plane = new Plane('Boeing 247');
    let weather = new Weather();
    airport.land(plane._plane, weather._stormy, plane);
    airport.takeoff(plane._plane, weather._stormy, plane);
    test.assertEquals(plane._flying, true);
});

test.it('Can\'t take off a plane that hasn\'t landed', function(){
    let airport = new Airport();
    let plane = new Plane('Boeing 247');
    let weather = new Weather();
    let result = airport.takeoff(plane._plane, weather._stormy, plane);
    test.assertEquals(result, planeNotLandedMess);
});

test.it('Can\'t take off a plane in bad weather', function(){
    let airport = new Airport();
    let plane = new Plane('Boeing 247');
    let weather = new Weather();
    airport.land(plane._plane, weather._stormy, plane);
    weather.stormy = true;
    let result = airport.takeoff(plane._plane, weather._stormy, plane);
    test.assertEquals(result, badWeather2Mess);
});

console.log('Planes in airport');

test.it('Counts number of planes in airport', function(){
    let airport = new Airport();
    let plane = new Plane('Boeing 247');
    let plane2 = new Plane('Boeing 747');
    let weather = new Weather();
    airport.land(plane._plane, weather._stormy, plane);
    let result = airport.land(plane2._plane, weather._stormy, plane2);
    test.assertEquals(result.length, 2);
});

test.it('Correct planes have landed', function(){
    let airport = new Airport();
    let plane = new Plane('Boeing 247');
    let plane2 = new Plane('Boeing 747');
    let weather = new Weather();
    airport.land(plane._plane, weather._stormy, plane);
    let result = airport.land(plane2._plane, weather._stormy, plane2);
    test.assertEqualsArray(result, [ 'Boeing 247', 'Boeing 747' ]);
});

test.print();
