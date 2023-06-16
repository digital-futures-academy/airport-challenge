import Airport from "../src/Airport.js";
import Plane from "../src/Plane.js";


describe('isStormy tests', () => {

    let plane, airport, actual, expected, noOfPlanes;

    // Set Up before every test
    beforeEach(() => {
        airport = new Airport();
        plane = new Plane();
        airport.addPlane('Plane - 1');
        airport.addPlane('Plane - 2');
        airport.addPlane('Plane - 3');
        airport.addPlane('Plane - 4');
        noOfPlanes = 4

    });

    // Clean Up after every test
    afterEach(() => {
        plane = undefined;
        airport = undefined;
        actual = undefined;
        expected = undefined;
    });



    //=====================TEST1====================\\

    it('does isStormy call when requested', () => {

        // Arrange


        // Act
        const testFunction = airport.isStormy()

        // Assert
        expect(testFunction).toHaveBeenCalled;

    });


    //=====================TEST2====================\\

    it('when isStorm is called does it return true or false', () => {

        // Arrange
        airport.isStormy()

        // Act

        // Assert
        expect(airport.stormy).toBeDefined

    });


    //=====================TEST3====================\\

    it('a plane does not takeOff if isStormy is true', () => {

        // Arrange
        airport.stormy = true;

        // Act
        airport.takeOff('Plane-1');


        // Assert
        expect(airport.airportPlanes.length).toBe(noOfPlanes)

    });


    //=====================TEST3====================\\

    it('a plane does not land if isStormy is true', () => {

        // Arrange
        airport.stormy = true;

        // Act
        airport.addPlane('stormy-plane');


        // Assert
        expect(airport.airportPlanes.length).toBe(noOfPlanes)

    });
});