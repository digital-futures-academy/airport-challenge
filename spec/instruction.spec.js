import Instruction from '../src/Instruction.js';

describe('User Story 1 Tests', () => {
    let testInstruction;

    describe('Instruction instantiation tests', () => {
        const mockAirport = {
            landPlane: () => undefined,
        }
        const mockPlane = {
            isLanded: () => true,
        }
        beforeEach(() => {
            testInstruction = new Instruction("testInstruction", mockAirport, mockPlane);
        })
        it('should call the airport\'s landPlane method', () => {
            // Arrange -> testInstruction done in beforeEach
            const mockAirportSpy = spyOn(mockAirport, 'landPlane');
            // Act
            testInstruction.landPlane();
            // Assert
            expect(mockAirportSpy).toHaveBeenCalled();
        })

    })


})