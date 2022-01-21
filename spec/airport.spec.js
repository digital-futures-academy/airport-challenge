const Airport = require('../src/airport')

describe('Airport tests', () => {
    describe('Plane Landing Tests', () => {
        it('should land at the airport', () => {
            //Arrange
            const testAirport = new Airport(true, 0, 0, 0, 0);
            //Act
            const actual = testAirport.planePosition(true);
            //Assert
            expect(actual).toBeTrue();

        })
    })

    describe('Airport capacity tests', () => {
        it('should change the capacity of a airport', () => {
            //Arrange
            const testAirport = new Airport(0, 0, 0, 0, 7)
            //Act
            const actual = testAirport.airportCapacity()
            //Assert
            expect(actual).toBeInstanceOf(Number)
        })


        it('Prevent planes landing in a full airport', () => {
            //Arrange
            const testAirport = new Airport(0, 0, 0, 0, 0, 0)
            //Act
            const actual = testAirport.landingPlaneIfAirportFull()
            //Assert
            expect(actual).toBeTruthy()
        })
    })

    describe('Plane location tests', () => {
        it('Should monitor plane take off', () => {
            //Arrange
            const testAirport = new Airport(0, 0, 0, 0, 0, (['plane']))
            //Act
            const actual = testAirport.planeRemover()
            //Assert
            expect(actual).toBeTruthy()
        })

        it('Should prevent planes not at a location from taking-off', () => {
            //Arrange
            const testAirport = new Airport()
            //Act 
            const actual = testAirport.takeOffErrors((['plane']))
            //Assert
            expect(actual).toBeFalse()
        })
    })

    describe('Weather condition tests', () => {
        it('Should prevent plane take-off in stormy weather', () => {
            //Arrange
            const testAirport = new Airport()
            //Act
            const actual = testAirport.planeTakeOffAuthorisation()
            //Assert
            expect(actual).toBe('Stormy weather, take-off not authorised' || 'Sunny weather, take-off authorised')

        })

        it('should prevent planes landing in stormy weather', () => {
            //Arrange 
            const testAirport = new Airport()
            //Act
            const actual = testAirport.planaLandingAuthorisation()
            //Assert
            expect(actual).toBe('Stormy conditions, plane may not land' || 'Plane may land')
        })


    })

    //If you just want to see if it is a string then make actual the returned value run through typeof (returnedValue) and expect actual.toBe('string')








})

//[+ object to array]

//store that has limited capacity
    //the use of actual = meaning or variable name -- variable name
    //look at the terminal and see if it is set up correct

