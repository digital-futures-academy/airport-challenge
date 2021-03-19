const test = require('mousinho-testlibrary-mse-2103/src/library');
const Plane = require('../src/plane');

let plane;

test.describe('Testing Plane class getters and setters', () => {
    test.it('get id() returns the plane id', () => {
        plane = new Plane('testID')
        test.expect(plane.id).toEqual('testID');
    })

    test.it('get flying() returns plane._flying field', () => {
        test.expect(plane.flying).toEqual(true);
    })

    test.it('set flying() changes the plane.flying field', () => {
        plane.flying = false;
        test.expect(plane.flying).toEqual(false);
    })
})