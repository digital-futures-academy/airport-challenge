const Airport = require('../src/airport')

describe('Airport tests', () => {
    describe('Plane Landing Tests', () => {
        it('should land at the airport', () => {
            //Arrange
            const testAirport = new Airport();
            //Act
            const actual = testAirport.landPlane();
            //Assert
            expect(actual).toBeTrue();
            //Resolve
            console.log
        })
    })
})


//the use of actual = meaning or variable name -- variable name
//look at the terminal and see if it is set up correct
//if constructor use is viable
//