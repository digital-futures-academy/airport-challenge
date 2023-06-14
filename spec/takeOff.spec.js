import Airport from "../src/Airport.js";
import Plane from "../src/Plane.js";


describe('TakeOff Tests', () => {

    let plane, airport, actual, expected;

    // Set Up before every test
    beforeEach(() => {
        plane = new Plane();
        airport = new Airport();


    });

    // Clean Up after every test
    afterEach(() => {
        plane = undefined;
        airport = undefined;
        actual = undefined;
        expected = undefined;
    });



    //=====================TEST1====================\\

    it('can a plane be selected from the list of planes at the airport', () => {

        // Arrange
        airport.addPlane('Plane - 0')
        airport.addPlane('Plane - 1')
        airport.addPlane('Plane - 2')
        airport.addPlane('Plane - 3')
        airport.addPlane('Plane - 4')
        airport.addPlane('Plane - 5')
        expected = airport.airportPlanes[2]

        // Act
        actual = airport.takeOff(airport.airportPlanes[2])

        // Assert
        expect(actual).toBe(expected);

    });


    //=====================TEST2====================\\

    it('does a plane remove one plane from the list after takeoff', () => {

        // Arrange
        airport.addPlane('Plane - 0')
        airport.addPlane('Plane - 1')
        airport.addPlane('Plane - 2')
        airport.addPlane('Plane - 3')
        airport.addPlane('Plane - 4')
        airport.addPlane('Plane - 5')
        airport.takeOff(airport.airportPlanes[2]);

        // Act
        actual = airport.airportPlanes.length;

        // Assert
        expect(actual).toBe(5);

    });


    //=====================TEST2====================\\

    it('after takeoff does the plane appear in the airport list', () => {

        // Arrange
        airport.addPlane('Plane - 0')

        // Act
        airport.takeOff(airport.airportPlanes[0]);
        actual = airport.airportPlanes.length;

        // Assert
        expect(actual).toBe(0);

    });
});
