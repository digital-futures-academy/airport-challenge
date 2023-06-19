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

describe('User Story 4 Test:', () => {
    let testAirport;
    describe('Take-off plane test:', () => {
        const mockPlane = {
            flightNumber: 'testPlane',
            landed: true,
            isLanded() {
                return this.landed;
            },
        }
        beforeEach(() => {
            testAirport = new Airport("testAirport");
        })
        afterEach(() => {
            testAirport = undefined;
        })
        it('4c. isLanded method expected to return false', () => {
            // Arrange -> done in beforeEach
            // Act
            testAirport.takeOffPlane(mockPlane);
            // Assert
            expect(mockPlane.isLanded()).toBe(false);
        })
        it('4d. planesAtAirport array expected not to contain Plane object', () => {
            // Arrange -> done in beforeEach
            // Act
            testAirport.landPlane(mockPlane);
            testAirport.takeOffPlane(mockPlane);
            // Assert
            expect(Airport.planesAtAirport).not.toContain(mockPlane);
        })

    })


})