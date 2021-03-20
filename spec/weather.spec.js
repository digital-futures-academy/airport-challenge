const test = require('../test_framwork');
const Weather = require('../src/weather');


console.log('Double test');

test.it('Checking I can reset the weather after intially setting it', function(){
    let weather = new Weather(true);
    weather.stormy = false;
    let result = weather._stormy;
    test.assertEquals(result, false);
});

test.it('Checking I can only set weather using truthy or falsy', function(){
    let weather = new Weather(true);
    weather.stormy = 'cheese';     
    test.assertEquals(weather._stormy, true);
});

test.it('Checking I can only use truthy in the constructor', function(){
    let weather = new Weather('cheese');
    test.assertEquals(weather._stormy, undefined);
});

