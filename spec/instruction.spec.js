import Instruction from '../src/Instruction.js';

describe('User Story 1 Test:', () => {
    let testInstruction;

    describe('Instruction instantiation test:', () => {
        const mockPlane = {
            isLanded: () => false,
        }
        const mockAirport = {
            planesAtAirport: 1,
            weatherType: 'calm',
            landPlane: () => mockPlane.isLanded(),
            checkWeather() { return this.weatherType },
            getAirportCapacity() {
                return 5
            },
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
            expect(() => { testInstruction.setAirportCapacity(-1) }).toThrowError('Cannot have negative or no capacity.');
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
            weatherType: 'calm',
            planesAtAirport: [mockPlane1],
            landPlane(plane) {
                this.planesAtAirport.push(plane);
            },
            getAirportCapacity() {
                return this.capacity
            },
        }
        beforeEach(() => {
            // Arrange
            testInstruction = new Instruction("testInstruction", mockAirport, mockPlane2);
        });

        afterEach(() => {
            testInstruction = undefined;
        });
        it('3a. expect landPlane to throw an error', () => {
            // Assert
            expect(() => { testInstruction.landPlane() }).toThrowError('Airport is full');
        })
    })
})

describe('User Story 4 Test:', () => {
    let testInstruction;

    describe('Instruction instantiation test:', () => {
        const mockPlane = {
            isLanded: () => true,
        }
        const mockAirport = {
            planesAtAirport: 1,
            weatherType: 'calm',
            takeOffPlane: () => mockPlane.isLanded(),
            checkWeather() { return this.weatherType },
            getAirportCapacity() {
                return 5
            },
        }
        beforeEach(() => {
            testInstruction = new Instruction("testInstruction", mockAirport, mockPlane);
        })
        afterEach(() => {
            testInstruction = undefined;
        })
        it('4a. should call the airport\'s takeOffPlane method', () => {
            // Arrange -> testInstruction done in beforeEach
            const mockAirportSpy = spyOn(mockAirport, 'takeOffPlane');
            // Act
            testInstruction.takeOffPlane();
            // Assert
            expect(mockAirportSpy).toHaveBeenCalled();
        })
        it('4b. should call the plane\'s isLanded method', () => {
            // Arrange -> testInstruction done in beforeEach
            const mockPlaneSpy = spyOn(mockPlane, 'isLanded');
            // Act
            testInstruction.takeOffPlane();
            // Assert
            expect(mockPlaneSpy).toHaveBeenCalled();
        })

    })

})

describe('User Story 5 Test:', () => {
    let testInstruction;

    describe('Land error test:', () => {
        const mockPlane = {
            isLanded: () => true,
        }
        const mockAirport = {
            planesAtAirport: 1,
            weatherType: 'calm',
            landPlane: () => mockPlane.isLanded(),
            takeOffPlane: () => mockPlane.isLanded(),
            getAirportCapacity() {
                return 5
            },

        }
        beforeEach(() => {
            testInstruction = new Instruction("testInstruction", mockAirport, mockPlane);
        })
        afterEach(() => {
            testInstruction = undefined;
        })
        it('5a. expect landPlane to throw an error', () => {
            // Assert
            expect(() => { testInstruction.landPlane() }).toThrowError('Plane already at airport.');
        })
    })
    describe('Take-off error test:', () => {
        const mockPlane = {
            isLanded: () => false,
        }
        const mockAirport = {
            planesAtAirport: 1,
            weatherType: 'calm',
            landPlane: () => mockPlane.isLanded(),
            takeOffPlane: () => mockPlane.isLanded(),
            getAirportCapacity() {
                return 5
            },

        }
        beforeEach(() => {
            testInstruction = new Instruction("testInstruction", mockAirport, mockPlane);
        })
        afterEach(() => {
            testInstruction = undefined;
        })
        it('5b. expect takeOffPlane to throw an error', () => {
            // Assert
            expect(() => { testInstruction.takeOffPlane() }).toThrowError('Plane is not at the airport, so cannot take off.');
        })
    })
})

describe('User Story 6 Test:', () => {
    let testInstruction;

    describe('Weather error test:', () => {
        const mockPlane = {
            isLanded: () => false,
        }
        const mockAirport = {
            planesAtAirport: 1,
            weatherType: 'stormy',
            landPlane: () => mockPlane.isLanded(),
            takeOffPlane: () => mockPlane.isLanded(),
            checkWeather() { return this.weatherType },
            getAirportCapacity() {
                return 5
            },

        }
        beforeEach(() => {
            testInstruction = new Instruction("testInstruction", mockAirport, mockPlane);
        })
        afterEach(() => {
            testInstruction = undefined;
        })
        it('6a. expect landPlane to throw an error', () => {
            // Assert
            expect(() => { testInstruction.landPlane() }).toThrowError('Too stormy to land / take-off');
        })
    })
    describe('Weather error test:', () => {
        const mockPlane = {
            isLanded: () => true,
        }
        const mockAirport = {
            planesAtAirport: 1,
            weatherType: 'stormy',
            landPlane: () => mockPlane.isLanded(),
            takeOffPlane: () => mockPlane.isLanded(),
            checkWeather() { return this.weatherType },
            getAirportCapacity() {
                return 5
            },

        }
        beforeEach(() => {
            testInstruction = new Instruction("testInstruction", mockAirport, mockPlane);
        })
        afterEach(() => {
            testInstruction = undefined;
        })
        it('7a. expect landPlane to throw an error', () => {
            // Assert
            expect(() => { testInstruction.takeOffPlane() }).toThrowError('Too stormy to land / take-off');
        })
    })
})