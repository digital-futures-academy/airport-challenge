import Airport from '../src/airport.js';

describe('User Story 1 Test', () => {
    let testAirport;

    describe('Airport instantiation tests', () => {
        const mockPlane = {
            isLanded: () => true,
        }
        beforeEach(() => {
            testAirport = new Airport("testAirport");
        })
        afterEach(() => {
            testAirport = undefined;
        })
        it('1b. should call the plane\'s isLanded method', () => {
            // Arrange -> testInstruction done in beforeEach
            const mockPlaneSpy = spyOn(mockPlane, 'isLanded');
            // Act
            testAirport.landPlane();
            // Assert
            expect(mockPlaneSpy).toHaveBeenCalled();
        })

    })
})