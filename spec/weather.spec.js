const test = require('mousinho-testlibrary-mse-2103/src/library');
const Weather = require('../src/weather');
const mockMath = Object.create(global.Math);
const returnMath = Object.create(global.Math);

let weather;

test.describe('Testing isStormy function', () => {
    test.it('isStormy return true when Math.random < 0.2', () => {
        mockMath.random = () => 0.1;
        global.Math = mockMath;
        weather = new Weather();

        test.expect(weather.isStormy()).toEqual(true);
        global.Math = returnMath;
    })

    test.it('isStorym returns false when Math.random >= 0.2', () => {
        mockMath.random = () => 0.2;
        global.Math = mockMath;
        weather = new Weather();

        test.expect(weather.isStormy()).toEqual(false);
        global.Math = returnMath;
    })
})