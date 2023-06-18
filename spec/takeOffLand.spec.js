import Airport from "../src/Airport.js";
import Plane from "../src/Plane.js";


describe('TakeOff/addPlane tests when void', () => {

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

    it('if plane is not at airport and asked to take off output will trigger', () => {

        // Arrange
        airport.addPlane('Plane - 0');

        // Act
        airport.takeOff(airport.airportPlanes[6]);

        // Assert
        expect(airport.takeOff(airport.airportPlanes[6])).toContain("This plane is not at the airport.");

    });


    //=====================TEST2====================\\

    it('if plane is at airport and asked to take off output won\'t trigger', () => {

        // Arrange
        airport.addPlane('Plane - 0');

        // Act
        airport.takeOff(airport.airportPlanes[0]);

        // Assert
        expect(airport.airportPlanes[0]).toBeUndefined;

    });


    //=====================TEST3====================\\

    it('if plane is at the airport and asked to land output will trigger', () => {

        // Arrange
        airport.addPlane('Plane - 0');

        // Act
        actual = airport.addPlane('Plane - 0');

        // Assert
        expect(actual).toContain("This Plane is already here.");

    });
});