import Instruction from '../src/Instruction.js';

describe('User Story 1 Test:', () => {
    let testInstruction;

    describe('Instruction instantiation test:', () => {
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

})

describe('User Story 2 Test:', () => {
    let testInstruction;
    describe('Instruction Instantiation test:', () => {
        const mockAirport = {
            setAirportCapacity: () => 2,
        }
        beforeEach(() => {
            testInstruction = new Instruction("testInstruction", mockAirport);
        })
        afterEach(() => {
            testInstruction = undefined;
        })
        it('2a. should call the airport\'s setAirportCapactiy method', () => {
            // Arrange
            const mockAirportSpy = spyOn(mockAirport, 'setAirportCapacity');
            // Act
            testInstruction.setAirportCapacity();
            // Assert
            expect(mockAirportSpy).toHaveBeenCalled();
        })
    })
    describe('Airport Capacity Test:', () => {
        const mockAirport = {
            capacity: 0,
            setAirportCapacity(newCapacity) {
                this.capacity = newCapacity
            }
        }
        beforeEach(() => {
            testInstruction = new Instruction("testInstruction", mockAirport);
        })
        afterEach(() => {
            testInstruction = undefined;
        })
        it('2b. should throw an error when setAirportCapacity is called with a negative value supplied', () => {
            // Arrange -> done in beforeEach
            // Act
            // Assert
            expect(() => { testInstruction.setAirportCapacity(-1) }).toThrowError(`Cannot have negative capacity.`);
        })
    })
})