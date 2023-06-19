import Instruction from '../src/Instruction.js';

describe('User Story 1 Test', () => {
    let testInstruction;

    describe('Instruction instantiation tests', () => {
        const mockPlane = {
            isLanded: () => true,
        }
        const mockAirport = {
            landPlane: () => mockPlane.isLanded(),
        }
        beforeEach(() => {
            testInstruction = new Instruction("testInstruction", mockAirport, mockPlane);
        })
        afterEach(() => {
            testInstruction = undefined;
        })
        it('1a. should call the airport\'s landPlane method', () => {
            // Arrange -> testInstruction done in beforeEach
            const mockAirportSpy = spyOn(mockAirport, 'landPlane');
            // Act
            testInstruction.landPlane();
            // Assert
            expect(mockAirportSpy).toHaveBeenCalled();
        })
        it('1b. should call the plane\'s isLanded method', () => {
            // Arrange -> testInstruction done in beforeEach
            const mockPlaneSpy = spyOn(mockPlane, 'isLanded');
            // Act
            testInstruction.landPlane();
            // Assert
            expect(mockPlaneSpy).toHaveBeenCalled();
        })

    })

    describe('Land plane test', () => {
        const mockPlane = {
            landed: false,
            isLanded() {
                this.landed = true
                return this.landed;
            }
        }
        const mockAirport = {
            landPlane: (mockPlane) => mockPlane.isLanded(),
        }
        beforeEach(() => {
            testInstruction = new Instruction("testInstruction", mockAirport, mockPlane);
        })
        afterEach(() => {
            testInstruction = undefined;
        })
        it('1c. returns true when isLanded method is called from the Plane', () => {
            // Arrange -> done in beforeEach
            // Act
            testInstruction.landPlane();
            // Assert
            expect(mockPlane.isLanded()).toBe(true);
        })

    })


})