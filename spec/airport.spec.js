const test = require('../test_framwork');
const Airport = require('../src/airport');

console.log('Checking airport class');

test.it('Checking I can reassign airport capacity', function(){
    let airport = new Airport(0);
    let result = airport.airportCapacity;
    test.assertEquals(result, 0);
});

test.it('Checking hanger is intially empty', function(){
    let airport = new Airport();
    let result = airport._hanger;
    test.assertEquals(result.length, 0);
});

test.it('Checking airport capacity isn\'t full with default argument and no planes inside', function(){
    let airport = new Airport();
    let result = airport.isFull(airport._hanger);
    test.assertEquals(result, false);
});

test.it('Checking it is full when capacity is changed to lower than length', function(){
    let airport = new Airport(0);
    let result  = airport.isFull(airport._hanger);
    test.assertEquals(result, true);
});
