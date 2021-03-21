const test = require('mousinho-testlibrary-mse-2103/src/library');
const isStormy = require('../src/weather');
const mockMath = Object.create(global.Math);
const returnMath = Object.create(global.Math);

test.describe('Testing isStormy function', () => {
    test.it('isStormy return true when Math.random < 0.2', () => {
        mockMath.random = () => 0.1;
        global.Math = mockMath;

        test.expect(isStormy()).toEqual(true);
        global.Math = returnMath;
    })

    test.it('isStorym returns false when Math.random >= 0.2', () => {
        mockMath.random = () => 0.2;
        global.Math = mockMath;

        test.expect(isStormy()).toEqual(false);
        global.Math = returnMath;
    })
})