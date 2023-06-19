import Airport from '../src/airport.js';

describe('User Story 1 Test:', () => {
    let testAirport;

    describe('Airport instantiation test:', () => {
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
            testAirport.landPlane(mockPlane);
            // Assert
            expect(mockPlaneSpy).toHaveBeenCalled();
        })

    })

    describe('Land plane test:', () => {
        const mockPlane = {
            flightNumber: 'testPlane',
            landed: true,
            isLanded: () => true,
        }
        beforeEach(() => {
            testAirport = new Airport("testAirport");
        })
        afterEach(() => {
            testAirport = undefined;
        })
        it('1d. the planes array in the airport object should contain the plane object', () => {
            // Arrange -> done in beforeEach
            // Act
            testAirport.landPlane(mockPlane);
            // Assert
            expect(testAirport.planesAtAirport).toContain(mockPlane);
        })
    })
})