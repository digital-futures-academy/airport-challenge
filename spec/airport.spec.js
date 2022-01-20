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
        it('should change the maximum capacity of the airport')
        //Arrange
        const testAirport = new Airport()
        //Act
        const actual = testAirport.airportCapacity === new.airportCapacity;
        //Assert
        expect(actual).toBeTrue
        //Resolve
    })
})



//the use of actual = meaning or variable name -- variable name
//look at the terminal and see if it is set up correct
//if constructor use is viable*/})
