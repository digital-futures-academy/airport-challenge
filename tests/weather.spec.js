const Test = require('./test-framework');

const Weather = require('../src/weather');

const test = Test.describe('Weather', (suite) => {
    suite.it('Can return a sunny forecast.', (test) => {
        const rng = () => 1;
        const weather = new Weather(rng);
        const expected = 'sunny';

        const actual = weather.forecast();

        test.expect(expected).toEqual(actual);
    });

    suite.it('Can return a stormy forecast.', (test) => {
        const rng = () => 0;
        const weather = new Weather(rng);
        const expected = 'stormy';

        const actual = weather.forecast();

        test.expect(expected).toEqual(actual);
    });
});

module.exports = test;
