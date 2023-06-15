import Airport from "../src/Airport.js";
import Plane from "../src/Plane.js";


describe('isStormy tests', () => {

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

    it('does isStormy call when requested', () => {

        // Arrange


        // Act
        const testFunction = airport.isStormy()

        // Assert
        expect(testFunction).toHaveBeenCalled;

    });


    //=====================TEST2====================\\

    it('when isStorm is called does it return a boolean', () => {

        // Arrange
        airport.isStormy()

        // Act
        const testFunction = airport.stormy;

        // Assert
        expect(testFunction).toBeFalse;

    });
});