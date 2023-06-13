import Airport from "../src/Airport.js";
import Plane from "../src/Plane.js";


describe('Airport Tests', () => {

    let plane, airport;

    // Set Up before every test
    beforeEach(() => {
        plane = new Plane();
        airport = new Airport();

    });

    // Clean Up after every test
    afterEach(() => {
        plane = undefined;
        airport = undefined;
    });



    //=====================TEST1====================\\

    it('should add an airplane to the airport', () => {

        // Arrange
        let expected = 1;


        // Act
        airport.addPlane('Plane - 1')
        let actual = airport.airportPlanes.length;


        // Assert
        expect(actual).toBe(expected);

    });



    //==========================TEST2==========================\\

    it('addPlane adds a plane with the id: "Plane - 1"', () => {

        // Arrange
        let expected = "Plane - 1"


        // Act
        airport.addPlane('Plane - 1')
        let actual = airport.airportPlanes[0]


        // Assert
        expect(actual).toBe(expected);

    });
});