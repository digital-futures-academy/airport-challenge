import Airport from "../src/Airport.js";
import Plane from "../src/Plane.js";


describe('isAtAirport tests', () => {

    let plane, airport, actual, expected;

    // Set Up before every test
    beforeEach(() => {
        airport = new Airport();
        plane = new Plane();
        airport.addPlane('Plane - 1');
        airport.addPlane('Plane - 2');
        airport.addPlane('Plane - 3');
        airport.addPlane('Plane - 4');

    });

    // Clean Up after every test
    afterEach(() => {
        plane = undefined;
        airport = undefined;
        actual = undefined;
        expected = undefined;
    });



    //=====================TEST1====================\\

    it('does isAtAirport call when requested', () => {

        // Arrange


        // Act
        const testFunction = airport.isAtAirport();

        // Assert
        expect(testFunction).toHaveBeenCalled;

    });



    //=====================TEST2====================\\

    it('when called does isAtAirport return a boolean', () => {

        // Arrange


        // Act
        const testFunction = airport.isAtAirport(airport.airportPlanes[0]);

        // Assert
        expect(testFunction).toBeTrue()

    });


    //=====================TEST3====================\\

    it('when isAtAirport returns true a plane can take off', () => {

        // Arrange

        // Act
        let testFunction = airport.isAtAirport(airport.airportPlanes[0]);

        // Assert
        expect(testFunction).toBeTrue();

    });


    //=====================TEST4====================\\

    it('when isAtAirport returns false a plane can land', () => {

        // Arrange

        // Act
        let testFunction = airport.isAtAirport(airport.airportPlanes[9]);

        // Assert
        expect(testFunction).toBeFalse()

    });

});