const Test = require('../spec/test-framework.js');
const Weather = require('../src/weather.js');

Test.it('Checks that if randomWeather is between 10 and 25, weather is stormy', () => {
    let weather = new Weather(15);
    Test.expect(weather.generateWeather()).toBe('Stormy');
});

Test.it('Checks that if randomWeather is less than 10, weather is sunny', () => {
    let weather = new Weather(7);
    Test.expect(weather.generateWeather()).toBe('Sunny');
});

Test.it('Checks that if randomWeather is more than 25, weather is sunny', () => {
    let weather = new Weather(90);
    Test.expect(weather.generateWeather()).toBe('Sunny');
});
