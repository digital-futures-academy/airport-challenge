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
                this.capacity = newCapacity;
            },
            getAirportCapacity() {
                return this.capacity;
            },
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
            expect(() => { testInstruction.setAirportCapacity(-1) }).toThrowError(`Cannot have negative or no capacity.`);
        })
        it('2c. expect capacity to be greater than zero', () => {
            // Arrange -> done in beforeEach
            // Act
            testInstruction.setAirportCapacity(2);
            // Assert
            expect(mockAirport.capacity).toBeGreaterThan(0);
        })
        it('2d. expect getAirportCapacity to return 2', () => {
            // Arrange -> done in beforeEach
            let actual;
            // Act
            testInstruction.setAirportCapacity(2);
            actual = testInstruction.getAirportCapacity();
            // Assert
            expect(testInstruction.getAirportCapacity()).toBe(2);
        })
    })
})

describe('User Story 3 Test:', () => {
    let testInstruction;
    describe('Instruction Instantiation test:', () => {
        const mockPlane1 = {
            flightNumber: "1"
        }
        const mockPlane2 = {
            flightNumber: "2"
        }
        const mockAirport = {
            capacity: 1,
            planesAtAirport: [mockPlane1],
            landPlane(plane) {
                this.planesAtAirport.push(plane);
            }
        }
        it('3a. expect landPlane to throw an error', () => {
            // Arrange -> done above
            testInstruction = new Instruction("testInstruction", mockAirport, mockPlane2);
            // Act
            testInstruction.landPlane();
            // Assert
            expect(() => { testInstruction.landPlane() }).toThrowError('Error. Airport is Full.')
        })
    })
})