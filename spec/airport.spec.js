const test = require('../test_framwork');
const Airport = require('../src/airport');
const { assertEquals } = require('../test_framwork');

const fullmessage = 'Airport is currently full';
const notheremessage = 'This plane if not currently here';
const badweathertakeoffmessage = 'Bad weather unable to take off'; 
const badweatherlandmessage = 'Bad weather unable to land';

console.log('Check land function works');

test.it('Checking the array is same length', function(){
    let airport = new Airport();

    let result = airport.land('my plane');

    test.assertEquals(result.length, 1);
})

test.it('Checking it is adding the correct string', function(){
    let airport = new Airport();


    let result = airport.land('my plane');

    test.assertEquals(result.includes('my plane'), true);
})

console.log('Check if airport is full');

test.it('Checking I can\'t land when it is full', function(){
    let airport = new Airport();
    airport.land('my plane');
    airport.land('your plane');

    test.assertEquals(airport.land('his plane'), fullmessage);
})

console.log('Take off function');

test.it('Checking if it is taking off and no longer there', function(){
    let airport = new Airport();
    airport.land('my plane');
    let result = airport.takeoff('my plane');
    test.assertEquals(result.includes('my plane'), false);
})

test.it('Checking that can\'t take off a plane that isn\'t there', function(){
    let airport = new Airport();
    let result = airport.takeoff('my plane');
    test.assertEquals(result, notheremessage);
})

console.log('Stormy Weather');

test.it('Checking can\'t take off when bad weather', function(){
    let airport = new Airport();
    airport.land('my plane');
    airport.isStormy(true);
    let result = airport.takeoff('my plane');
    test.assertEquals(result, badweathertakeoffmessage);
})

test.it('Checking can\'t land when bad weather', function(){
    let airport = new Airport(5, true);
    let result = airport.land('my plane');
    test.assertEquals(result, badweatherlandmessage);
})

console.log('Amount of plane function');

test.it('Check current amount of planes at airport', function(){
    let airport = new Airport();
    airport.land('my plane');
    airport.land('your plane');
    let result = airport.currentAmountOfPlanes();
    assertEquals(result, 2);
})