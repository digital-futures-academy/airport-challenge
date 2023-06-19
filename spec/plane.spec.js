import Plane from '../src/plane.js';

describe('User Story 1 Test', () => {
    describe('Land plane test', () => {
        it('1c. should return true when instantiated via isLanded', () => {
            // Arrange
            const testPlane = new Plane("testPlane")
            // Act
            testPlane.landed = true; // force landing of testPlane
            testPlane.isLanded();
            // Assert
            expect(testPlane.isLanded()).toBe(true);
        })
    })


})